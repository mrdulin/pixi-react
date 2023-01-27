"use strict";(self.webpackChunk_pixi_react_docs=self.webpackChunk_pixi_react_docs||[]).push([[750],{266:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7896),r=(a(2784),a(3905));const i={},o="Fallback to Canvas",l={unversionedId:"fallback-to-canvas",id:"fallback-to-canvas",title:"Fallback to Canvas",description:"By default the PixiJS renderer uses the power of hardware acceleration (WebGL), but sometimes you need fallback support for",source:"@site/docs/fallback-to-canvas.mdx",sourceDirName:".",slug:"/fallback-to-canvas",permalink:"/pixi-react/fallback-to-canvas",draft:!1,editUrl:"https://github.com/pixijs/pixi-react/tree/master/packages/docs/docs/fallback-to-canvas.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Components",permalink:"/pixi-react/custom-component"},next:{title:"withFilters",permalink:"/pixi-react/hoc/with-filters"}},s={},p=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Verify",id:"verify",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fallback-to-canvas"},"Fallback to Canvas"),(0,r.kt)("p",null,"By default the PixiJS renderer uses the power of hardware acceleration (WebGL), but sometimes you need fallback support for\nbrowsers that do not support WebGL or more modern JavaScript features."),(0,r.kt)("p",null,"Luckily this is possible using a ",(0,r.kt)("inlineCode",{parentName:"p"},"legacy")," pixi package."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"If using the entire pixi package, make sure to install the legacy package instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"pixi.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install pixi.js-legacy\n")),(0,r.kt)("p",null,"For advanced users using ",(0,r.kt)("inlineCode",{parentName:"p"},"@pixi")," scoped modules, make sure to properly import pixi's canvas packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'`import "@pixi/canvas-display"`\n`import "@pixi/canvas-extract"`\n`import "@pixi/canvas-graphics"`\n`import "@pixi/canvas-mesh"`\n`import "@pixi/canvas-particle-container"`\n`import "@pixi/canvas-prepare"`\n`import "@pixi/canvas-renderer"`\n`import "@pixi/canvas-sprite-tiling"`\n`import "@pixi/canvas-sprite"`\n`import "@pixi/canvas-text"`\n```ts\n\nAlso note that these will not be installed for you. You will need to install them yourself\n\n```bash\nnpm install @pixi/canvas-display\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Unlike in previous versions (",(0,r.kt)("inlineCode",{parentName:"p"},"<=6.x"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"pixi-react")," will automatically defer to the user installed ",(0,r.kt)("inlineCode",{parentName:"p"},"pixi")," package(s) for\nrendering, so you can continue to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@pixi/react")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@pixi/react-animated")," packages as normal. There's no need to\nreplace these with different legacy builds."),(0,r.kt)("h2",{id:"verify"},"Verify"),(0,r.kt)("p",null,"Check the PIXI welcome message in your console to make sure your application is actually running in Canvas, you should see\nsomething like:"),(0,r.kt)("img",{src:"/pixi-react/img/pixi-legacy-banner.png",draggable:!1,width:448,style:{width:"100%",maxWidth:448}}),(0,r.kt)("p",null,"In PixiJS v7 upwards, this welcome message is disabled by default, to enable it pass through ",(0,r.kt)("inlineCode",{parentName:"p"},"hello: true")," in your\napplication options, if for some reason you specifically want to force canvas rendering in an environment that supports WebGL\nthen you also need to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"forceCanvas: true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Stage options={{ hello: true, forceCanvas: true }} />\n")),(0,r.kt)("img",{src:"/pixi-react/img/pixi-v7-canvas-hello.png",draggable:!1,width:553,style:{width:"100%",maxWidth:553}}))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);