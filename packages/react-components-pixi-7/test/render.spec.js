import { Application } from '@pixi/app';
import React from 'react';
import { act } from 'react-dom/test-utils';

import { AppConsumer, AppProvider, Container, Text, withPixiApp } from '../src';
import { configure, clearComponents } from './__utils__/configure';
import { spyOnObjectMethods } from './__utils__/mock';

const app = new Application();
const noop = () => {};

const prepare = (withPixiFiberSpy = true) =>
{
    const { render, unmountComponentAtNode, roots, PixiReactFiber, ...rest } = configure({
        spyOnPixiFiber: withPixiFiberSpy
            ? (pixiReactFiber) =>
            {
                const spiedOnPixiReactFiber = spyOnObjectMethods(pixiReactFiber);

                spiedOnPixiReactFiber.createContainer.mockImplementation(() => ({
                    current: { child: { tag: 'TEXT' } },
                }));
                spiedOnPixiReactFiber.updateContainer.mockImplementation(noop);
                spiedOnPixiReactFiber.getPublicRootInstance.mockImplementation(noop);
                spiedOnPixiReactFiber.injectIntoDevTools.mockImplementation(noop);

                return spiedOnPixiReactFiber;
            }
            : undefined
    });

    const element = () => <Text text="Hello Word!" />;
    const renderElementToStage = () =>
        act(() =>
        {
            render(element, app.stage);
        });

    const cleanup = () =>
    {
        unmountComponentAtNode(app.stage);
        clearComponents();
        roots.clear();
    };

    return {
        ...rest,
        roots,
        PixiReactFiber,
        render,
        unmountComponentAtNode,
        renderElementToStage,
        element,
        cleanup,
    };
};

describe('render', () =>
{
    test('invariant container', () =>
    {
        const { render, cleanup } = prepare();

        expect(() => render('something', null)).toThrow(
            'Invalid argument `container`, expected instance of `PIXI.Container`'
        );

        cleanup();
    });

    test('call createContainer', () =>
    {
        const { renderElementToStage, PixiReactFiber, cleanup } = prepare();

        renderElementToStage();

        expect(PixiReactFiber.createContainer).toHaveBeenCalledTimes(1);
        expect(PixiReactFiber.createContainer).toHaveBeenLastCalledWith(
            app.stage,
        );

        cleanup();
    });

    test('call updateContainer', () =>
    {
        const { element, renderElementToStage, PixiReactFiber, roots, cleanup } = prepare();

        renderElementToStage();

        const { pixiFiberContainer } = roots.values().next().value;

        expect(PixiReactFiber.updateContainer).toHaveBeenCalledTimes(1);
        expect(PixiReactFiber.updateContainer).toHaveBeenLastCalledWith(
            element,
            pixiFiberContainer,
            undefined
        );

        cleanup();
    });

    test('store root', () =>
    {
        const { renderElementToStage, roots, cleanup } = prepare();

        renderElementToStage();

        expect(roots.values().next().value).toEqual({
            pixiFiberContainer: {
                current: {
                    child: {
                        tag: 'TEXT',
                    },
                },
            },
            reactRoot: {
                render: expect.any(Function),
                unmount: expect.any(Function),
            },
        });

        cleanup();
    });

    test('does not create root if it is already present', () =>
    {
        const { renderElementToStage, PixiReactFiber, createRoot, cleanup } = prepare();

        createRoot(app.stage);

        expect(PixiReactFiber.createContainer).toHaveBeenCalledTimes(1);

        renderElementToStage();

        expect(PixiReactFiber.createContainer).toHaveBeenCalledTimes(1);
        expect(PixiReactFiber.updateContainer).toHaveBeenCalledTimes(1);

        cleanup();
    });

    describe('passdown `PIXI.Application`', () =>
    {
        test('via `AppConsumer`', () =>
        {
            const { render, cleanup } = prepare(false);

            const fn = jest.fn(() => <Text text="hi" />);

            act(() =>
            {
                render(
                    <AppProvider value={app}>
                        <Container>
                            <AppConsumer>{fn}</AppConsumer>
                        </Container>
                    </AppProvider>,
                    app.stage
                );
            });

            expect(fn).toHaveBeenCalledTimes(1);
            expect(fn).toHaveBeenCalledWith(app);

            cleanup();
        });

        test('via `withPixiApp`', () =>
        {
            const { render, cleanup } = prepare(false);

            const fn = jest.fn(() => <Text text="hi" />);
            const Comp = withPixiApp(({ app }) => fn(app));

            act(() =>
            {
                render(
                    <AppProvider value={app}>
                        <Container>
                            <Comp />
                        </Container>
                    </AppProvider>,
                    app.stage
                );
            });

            expect(fn).toHaveBeenCalledTimes(1);
            expect(fn).toHaveBeenCalledWith(app);

            cleanup();
        });
    });
});
