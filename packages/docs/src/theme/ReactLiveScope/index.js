import times from 'lodash.times';
import * as PIXI from 'pixi.js';
import React from 'react';
import { Spring } from 'react-spring';
import * as ReactPixi from '@pixi/react';
import * as ReactPixiAnimated from '@pixi/react-animated';
import ExampleAssetLoader from './ExampleAssetLoader';
import makeAnimatedSpriteTextures from './makeAnimatedSpriteTextures';
import makeSimpleMeshData from './makeSimpleMeshData';
import useIteration from './useIteration';

const ReactLiveScope = {
    React,
    ...React,
    ...ReactPixi,
    ReactPixiAnimated,
    Spring,
    PIXI,
    ExampleAssetLoader,
    makeAnimatedSpriteTextures,
    makeSimpleMeshData,
    lodash: {
        times
    },
    useIteration,
};

export default ReactLiveScope;
