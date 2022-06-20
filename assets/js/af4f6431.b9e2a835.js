"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[8040],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],a={title:"TypeScript 4.7 and ECMAScript Module Support",authors:"johnnyreilly",tags:["TypeScript","ECMAScript Modules"],image:"./title-image.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/2022/06/07/typescript-4-7-and-ecmascript-module-support",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-06-07-typescript-4-7-and-ecmascript-module-support/index.md",source:"@site/blog/2022-06-07-typescript-4-7-and-ecmascript-module-support/index.md",title:"TypeScript 4.7 and ECMAScript Module Support",description:"As part of the TypeScript 4.7 release comes a major upgrade to ECMAScript Module Support for Node.js. This post takes a look at what that means.",date:"2022-06-07T00:00:00.000Z",formattedDate:"June 7, 2022",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"ECMAScript Modules",permalink:"/tags/ecma-script-modules"}],readingTime:6.065,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript 4.7 and ECMAScript Module Support",authors:"johnnyreilly",tags:["TypeScript","ECMAScript Modules"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Azure Container Apps: dapr pubsub",permalink:"/2022/06/21/azure-container-apps-pubsub"},nextItem:{title:"Azure Static Web Apps: Node.js 16 and Oryx",permalink:"/2022/05/28/azure-static-web-apps-node-16-oryx"}},d={image:n(43834).Z,authorsImageUrls:[void 0]},u=[{value:"A short history of ECMAScript modules",id:"a-short-history-of-ecmascript-modules",level:2},{value:"TypeScript support",id:"typescript-support",level:2},{value:"Making a module",id:"making-a-module",level:2},{value:"Adding TypeScript 4.7",id:"adding-typescript-47",level:2},{value:"Writing TypeScript ECMAScript modules",id:"writing-typescript-ecmascript-modules",level:2},{value:"ECMAScript and CommonJS side by side",id:"ecmascript-and-commonjs-side-by-side",level:2},{value:"What files are emitted?",id:"what-files-are-emitted",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As part of the TypeScript 4.7 release comes a major upgrade to ECMAScript Module Support for Node.js. This post takes a look at what that means."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;Upgrading to React 18 with TypeScript&quot; with the React, TypeScript and Definitely Typed logos`",src:n(43834).Z,width:"1600",height:"900"})),(0,o.kt)("h2",{id:"a-short-history-of-ecmascript-modules"},"A short history of ECMAScript modules"),(0,o.kt)("p",null,'When ES6 shipped back in 2015, with it came the concept of modules for JavaScript. Back then it was known as "ES6 modules". These days they are called ECMAScript modules.'),(0,o.kt)("p",null,"Whilst writing code using ECMAScript module semantics came quickly for front end, for the back end (which is generally Node.js) that has not the case. There's a number of reasons for this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"There was already an established module system used in Node.js called ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/CommonJS"},"CommonJS")),(0,o.kt)("li",{parentName:"ol"},"Node.js itself did not initially offer support for ECMAScript modules; in large part because of the problems associated with being able to support CommonJS ",(0,o.kt)("em",{parentName:"li"},"as well")," as ECMAScript modules.")),(0,o.kt)("p",null,"However, with the release Node.js 14 support for ECMAScript modules (AKA \"ESM\") landed. If you're interested in the details of that module support then it's worth ",(0,o.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/es-modules-in-node-today/"},"reading this post on ECMAScript modules"),"."),(0,o.kt)("h2",{id:"typescript-support"},"TypeScript support"),(0,o.kt)("p",null,"The TypeScript team have been experimenting with ways to offer support for ECMAScript modules from a Node.js perspective, and with TypeScript 4.7 support is being released."),(0,o.kt)("p",null,"In this post we'll test drive that support by attempting to build a simple module in TypeScript using the new ECMAScript modules support. As we do this, we'll discuss what it looks like to author ECMAScript modules for Node.js in TypeScript."),(0,o.kt)("p",null,"Let's go!"),(0,o.kt)("h2",{id:"making-a-module"},"Making a module"),(0,o.kt)("p",null,"We're going to make a module named ",(0,o.kt)("inlineCode",{parentName:"p"},"greeter")," - let's initialise it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir greeter\ncd greeter\nnpm init --yes\n")),(0,o.kt)("p",null,"We now have a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," that looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "greeter",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),(0,o.kt)("p",null,"Node.js supports a new setting in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),". ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/packages.html#type"},'This can be set to either "module" or "commonjs"'),". To quote the docs:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Files ending with ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," are loaded as ES modules when the nearest parent package.json file contains a top-level field ",(0,o.kt)("inlineCode",{parentName:"p"},'"type"')," with a value of ",(0,o.kt)("inlineCode",{parentName:"p"},'"module"'),".")),(0,o.kt)("p",null,"With that in mind, we'll add a ",(0,o.kt)("inlineCode",{parentName:"p"},'"type": "module"')," to our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("p",null,"We're now ECMAScript module support compliant, let's start adding some TypeScript."),(0,o.kt)("h2",{id:"adding-typescript-47"},"Adding TypeScript 4.7"),(0,o.kt)("p",null,"In order that we can make use of TypeScript ECMAScript modules support we're going to install TypeScript 4.7 (currently in beta):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install typescript@4.7.0-beta --save\n")),(0,o.kt)("p",null,"With this in place we'll initialise a TypeScript project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx tsc --init\n")),(0,o.kt)("p",null,"This will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file which contains many options. We will tweak the ",(0,o.kt)("inlineCode",{parentName:"p"},"module")," option to be ",(0,o.kt)("inlineCode",{parentName:"p"},"nodenext")," to opt into ECMAScript module support:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    // ...\n    "module": "nodenext" /* Specify what module code is generated. */,\n    "outDir": "./lib" /* Specify an output folder for all emitted files. */,\n    "declaration": true /* Generate .d.ts files from TypeScript and JavaScript files in your project. */\n\n    // ...\n  }\n}\n')),(0,o.kt)("p",null,"We've also set the ",(0,o.kt)("inlineCode",{parentName:"p"},"outDir")," option, such that compiled JavaScript will go into that directory, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"declaration")," option such that ",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts")," files will be generated. We'll also update the ",(0,o.kt)("inlineCode",{parentName:"p"},'"scripts"')," section of our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," to include ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," scripts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "build": "tsc",\n    "start": "node lib/index.js"\n  },\n')),(0,o.kt)("h2",{id:"writing-typescript-ecmascript-modules"},"Writing TypeScript ECMAScript modules"),(0,o.kt)("p",null,"With all that set up, we're ready to write some TypeScript ECMAScript modules. First we'll write a ",(0,o.kt)("inlineCode",{parentName:"p"},"greetings.ts")," module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export function helloWorld(): string {\n  return 'hello world!';\n}\n")),(0,o.kt)("p",null,"There is nothing new or surprising about this; it's just a module exporting a single function named ",(0,o.kt)("inlineCode",{parentName:"p"},"helloWorld"),". It becomes more interesting as we write our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { helloWorld } from './greetings.js';\n\nconst greeting = helloWorld();\n\nconsole.log(greeting);\n")),(0,o.kt)("p",null,"The code above imports our ",(0,o.kt)("inlineCode",{parentName:"p"},"helloWorld")," function and then executes it; writing the output to the console. Not particularly noteworthy. However, the way we import is. We are importing from ",(0,o.kt)("inlineCode",{parentName:"p"},"'./greetings.js'"),". In the past we would have written:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { helloWorld } from './greetings';\n")),(0,o.kt)("p",null,"Now we write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { helloWorld } from './greetings.js';\n")),(0,o.kt)("p",null,"This can feel slightly odd and unnatural because we have no ",(0,o.kt)("inlineCode",{parentName:"p"},"greetings.js")," in our codebase; only ",(0,o.kt)("inlineCode",{parentName:"p"},"greetings.ts"),". The imports we're writing, reflect the code that will end up being executed; once our TypeScript has been compiled to JavaScript. In ES modules relative import paths need to use extensions."),(0,o.kt)("p",null,"The easiest way to demonstrate that this is legitimate, is to run the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build && npm start\n")),(0,o.kt)("p",null,"Which results in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> greeter@1.0.0 build\n> tsc\n\n\n> greeter@1.0.0 start\n> node lib/index.js\n\nhello world!\n")),(0,o.kt)("p",null,"So it works!"),(0,o.kt)("h2",{id:"ecmascript-and-commonjs-side-by-side"},"ECMAScript and CommonJS side by side"),(0,o.kt)("p",null,"Part of ECMAScript module support is the ability to specify the module type of a file based on the file suffix. If you use ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs"),", you're explicitly saying a file is an ECMAScript module. If you use ",(0,o.kt)("inlineCode",{parentName:"p"},".cjs"),", you're explicitly saying a file is an CommonJS module. If you're authoring with TypeScript you'd use ",(0,o.kt)("inlineCode",{parentName:"p"},"mts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cts")," respectively and they'd be transpiled to ",(0,o.kt)("inlineCode",{parentName:"p"},"mjs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cjs"),"."),(0,o.kt)("p",null,"Happily Node.js allows ES modules to import CommonJS modules as if they were ES modules with a default export; which is good news for interop. Let's test that out by writing a ",(0,o.kt)("inlineCode",{parentName:"p"},"oldGreetings.cts")," module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export function helloOldWorld(): string {\n  return 'hello old world!';\n}\n")),(0,o.kt)("p",null,"Exactly the same syntax as before. We'll adjust our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," to consume this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { helloWorld } from './greetings.js';\nimport { helloOldWorld } from './oldGreetings.cjs';\n\nconsole.log(helloWorld());\nconsole.log(helloOldWorld());\n")),(0,o.kt)("p",null,"Note that we're importing from ",(0,o.kt)("inlineCode",{parentName:"p"},"'./oldGreetings.cjs'"),". We'll see if it works:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build && npm start\n")),(0,o.kt)("p",null,"Which results in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> greeter@1.0.0 build\n> tsc\n\n\n> greeter@1.0.0 start\n> node lib/index.js\n\nhello world!\nhello old world!\n")),(0,o.kt)("p",null,"It does work!"),(0,o.kt)("h2",{id:"what-files-are-emitted"},"What files are emitted?"),(0,o.kt)("p",null,"Before we close out, it might be interesting to look at what TypeScript is doing when we run our ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build"),". It transpiles our TypeScript into JavaScript in our ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A screenshot of VS Code showing the files in the lib directory",src:n(46381).Z,width:"331",height:"314"})),(0,o.kt)("p",null,"Note the ",(0,o.kt)("inlineCode",{parentName:"p"},"greetings.ts")," file has resulted in ",(0,o.kt)("inlineCode",{parentName:"p"},"greetings.js")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"greetings.d.ts")," files. Whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"oldGreetings.cts")," has resulted in ",(0,o.kt)("inlineCode",{parentName:"p"},"oldGreetings.cjs")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"oldGreetings.d.cts")," files; reflecting the different module types represented."),(0,o.kt)("p",null,"It's also interesting to look at the difference in the emitted JavaScript. When you consider how similar the source files were. If you look at ",(0,o.kt)("inlineCode",{parentName:"p"},"greetings.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function helloWorld() {\n  return 'hello world!';\n}\n")),(0,o.kt)("p",null,"This is the same code as ",(0,o.kt)("inlineCode",{parentName:"p"},"greetings.ts")," but with types stripped. However, if we look at ",(0,o.kt)("inlineCode",{parentName:"p"},"oldGreetings.cjs")," we see this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\nObject.defineProperty(exports, '__esModule', { value: true });\nexports.helloOldWorld = void 0;\nfunction helloOldWorld() {\n  return 'hello old world!';\n}\nexports.helloOldWorld = helloOldWorld;\n")),(0,o.kt)("p",null,"In the middle the same code as ",(0,o.kt)("inlineCode",{parentName:"p"},"oldGreetings.cts")," but with types stripped, but around that boilerplate code that TypeScript is emitting for us to aid in interop."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We've seen what TypeScript support for ECMAScript modules looks like, and how to set up a module to embrace it."),(0,o.kt)("p",null,"If you'd like to read up further on the topic, the ",(0,o.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/#esm-nodejs"},"TypeScript 4.7 beta release notes")," are an excellent resource."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/typescript-4-7-ecmascript-module-support/"},"This post was originally published on LogRocket.")))}m.isMDXComponent=!0},46381:function(e,t){t.Z="data:image/png;base64,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"},43834:function(e,t,n){t.Z=n.p+"assets/images/title-image-51300ba4c5cfd4700a16f915bbbe51d2.png"}}]);