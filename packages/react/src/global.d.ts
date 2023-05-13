declare namespace GlobalMixins
{
    type PixiReactRenderEventPayload = import('./types').PixiReactRenderEventPayload;
    type FederatedEventEmitterTypesLocal = import('@pixi/events').FederatedEventEmitterTypes;
    interface DisplayObjectEvents extends FederatedEventEmitterTypesLocal
    {
        '__REACT_PIXI_REQUEST_RENDER__': [payload?: PixiReactRenderEventPayload];
    }
}
