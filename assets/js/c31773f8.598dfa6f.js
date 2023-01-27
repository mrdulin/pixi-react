"use strict";(self.webpackChunk_pixi_react_docs=self.webpackChunk_pixi_react_docs||[]).push([[83],{2846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7896),p=(n(2784),n(3905));const i={title:"TypeScript"},o="TypeScript Support",a={unversionedId:"typescript",id:"typescript",title:"TypeScript",description:"ReactPixi gives you full type support.",source:"@site/docs/typescript.mdx",sourceDirName:".",slug:"/typescript",permalink:"/pixi-react/typescript",draft:!1,editUrl:"https://github.com/pixijs/pixi-react/tree/master/packages/docs/docs/typescript.mdx",tags:[],version:"current",frontMatter:{title:"TypeScript"},sidebar:"tutorialSidebar",previous:{title:"Stage",permalink:"/pixi-react/stage/"}},l={},c=[{value:"PointLike types",id:"pointlike-types",level:2},{value:"Source types",id:"source-types",level:2},{value:"Custom Components",id:"custom-components",level:2},{value:"PixiRef",id:"pixiref",level:2},{value:"Type component props",id:"type-component-props",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"typescript-support"},"TypeScript Support"),(0,p.kt)("p",null,"ReactPixi gives you full type support."),(0,p.kt)("img",{src:"/pixi-react/img/typescript-support.png",alt:"Type Support",width:"653"}),(0,p.kt)("h2",{id:"pointlike-types"},"PointLike types"),(0,p.kt)("p",null,"The props ",(0,p.kt)("inlineCode",{parentName:"p"},"position"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"scale"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pivot"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"anchor")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"skew")," are PointLike types."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"type PointLike =\n  | { x: number; y: number }\n  | PIXI.Point\n  | PIXI.ObservablePoint\n  | number\n  | [number]\n  | [number, number];\n")),(0,p.kt)("p",null,"Example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"<Sprite anchor={{ x: 0.5, y: 0.5 }} />\n<Sprite anchor={new PIXI.Point(0.5, 0.5)} />\n<Sprite anchor={0.5} />\n<Sprite anchor={[0.5]} />\n<Sprite anchor={[0.5, 0.5]} />\n")),(0,p.kt)("h2",{id:"source-types"},"Source types"),(0,p.kt)("p",null,"Apply source directly to a component.\nSource types are available for:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<Sprite>")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<Text>")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<NineSlicePlane>")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<TilingSprite>")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<SimpleRope>")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<SimpleMesh>")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"<AnimatedSprite>"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"type Source = {\n  image?: ImageSource;\n  video?: VideoSource;\n  source?:\n    | number\n    | ImageSource\n    | VideoSource\n    | HTMLCanvasElement\n    | PIXI.Texture;\n};\n")),(0,p.kt)("p",null,"Example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"<Sprite image=\"./my-image.png\" />\n<Sprite video={document.querySelector('#video')} />\n")),(0,p.kt)("h2",{id:"custom-components"},"Custom Components"),(0,p.kt)("p",null,"Example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PixiComponent } from '@pixi/react';\nimport { Graphics } from 'pixi.js';\n\ninterface RectangleProps {\n  x: number;\n  y: number;\n  width: number;\n  height: number;\n  color: number;\n}\n\nconst Rectangle = PixiComponent<RectangleProps, Graphics>('Rectangle', {\n  create: () => new Graphics(),\n  applyProps: (ins, _, props) => {\n    ins.x = props.x;\n    ins.beginFill(props.color);\n    ins.drawRect(props.x, props.y, props.width, props.height);\n    ins.endFill();\n  },\n});\n\nconst App = () => (\n  <Stage>\n    <Rectangle x={100} y={100} width={100} height={100} color={0xff0000} />\n  </Stage>\n);\n")),(0,p.kt)("img",{src:"/pixi-react/img/typescript-custom-components.png",alt:"Type Custom Components",width:"502"}),(0,p.kt)("h2",{id:"pixiref"},"PixiRef"),(0,p.kt)("p",null,"Get the PIXI instance type for a ReactPixi component:"),(0,p.kt)("p",null,"Example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Container, PixiRef } from '@pixi/react';\n\ntype IContainer = PixiRef<typeof Container>; // PIXI.Container\n\nconst App = () => {\n  const containerRef = React.useRef<IContainer>(null);\n  return <Container ref={containerRef} />;\n};\n")),(0,p.kt)("h2",{id:"type-component-props"},"Type component props"),(0,p.kt)("p",null,"Extract a component prop type as follow:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCallback, ComponentProps } from 'react';\nimport { Graphics } from '@pixi/react';\n\ntype Draw = ComponentProps<typeof Graphics>['draw'];\n\nconst App = () => {\n  const draw = useCallback<Draw>((g) => {\n    g; // PIXI.Graphics\n\n    g.clear();\n    g.beginFill(props.color);\n    g.drawRect(0, 0, 100, 100);\n    g.endFill();\n  });\n\n  return <Graphics draw={draw} />;\n};\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(2784);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=p,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:p,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);