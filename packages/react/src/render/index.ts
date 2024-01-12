import { Container } from 'pixi.js';
import { PixiReactFiber } from '../reconciler';
import { invariant } from '../utils';

import type { RootEntry, Roots } from '../types';

export const roots: Roots = new Map<Container, RootEntry>();

/**
 * @param {Container} container
 */
export function unmountComponent(container: Container)
{
    invariant(
        Container.prototype.isPrototypeOf(container),
        'Invalid argument `container`, expected instance of `PIXI.Container`.'
    );

    if (roots.has(container))
    {
        const { pixiFiberContainer } = roots.get(container) as RootEntry;

        // unmount component
        PixiReactFiber.updateContainer(
            null,
            pixiFiberContainer,
            undefined,
            () =>
            {
                roots.delete(container);
            }
        );
    }
}

/**
 * Custom Renderer with react 18 API
 * Use this without React-DOM
 *
 * @param {Container} container
 * @returns {{ render: Function, unmount: Function}}
 */
export function createRoot(container: Container)
{
    invariant(
        Container.prototype.isPrototypeOf(container),
        'Invalid argument `container`, expected instance of `PIXI.Container`.'
    );

    let root = roots.get(container);

    invariant(!root, 'Pixi React: createRoot should only be called once');

    if (!root)
    {
        // @ts-ignore - react reconciler lists several parameters as required that are optional
        const pixiFiberContainer = PixiReactFiber.createContainer(container);

        const reactRoot = {
            render(element: JSX.Element)
            {
                // schedules a top level update
                PixiReactFiber.updateContainer(
                    element,
                    pixiFiberContainer,
                    undefined
                );

                return PixiReactFiber.getPublicRootInstance(pixiFiberContainer);
            },
            unmount()
            {
                unmountComponent(container);
                roots.delete(container);
            },
        };

        root = { pixiFiberContainer, reactRoot };
        roots.set(container, root);
    }

    return root.reactRoot;
}

/**
 * Custom Renderer
 * Use this without React-DOM
 *
 * @deprecated use createRoot instead
 *
 * @param {React.ReactNode} element
 * @param {Container} container (i.e. the Stage)
 * @param {Function} callback
 */
export function render(
    element: JSX.Element,
    container: Container,
    callback?: () => void
)
{
    console.warn(
        'Pixi React Deprecation Warning: render is deprecated, use createRoot instead'
    );

    if (callback !== undefined)
    {
        console.warn(
            'Pixi React Deprecation Warning: render callback no longer exists in React 18'
        );
    }

    let reactRoot;

    if (roots.has(container))
    {
        ({ reactRoot } = roots.get(container) as RootEntry);
    }
    else
    {
        reactRoot = createRoot(container);
    }

    return reactRoot.render(element);
}

/**
 * @deprecated use root.unmount() instead
 * @param {Container} container
 */
export function unmountComponentAtNode(container: Container)
{
    unmountComponent(container);
}
