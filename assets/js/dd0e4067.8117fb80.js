"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[13052],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(n),m=i,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},23833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],p={title:"Upgrading to React 18 with TypeScript",authors:"johnnyreilly",tags:["React","TypeScript","Definitely Typed"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/2022/05/01/upgrading-to-react-18-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2022-05-01-upgrading-to-react-18-typescript/index.md",source:"@site/blog/2022-05-01-upgrading-to-react-18-typescript/index.md",title:"Upgrading to React 18 with TypeScript",description:"The upgrade of the React type definitions to support React 18 involved some significant breaking changes. This post digs into that and examines what the upgrade path looks like.",date:"2022-05-01T00:00:00.000Z",formattedDate:"May 1, 2022",tags:[{label:"React",permalink:"/tags/react"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"Definitely Typed",permalink:"/tags/definitely-typed"}],readingTime:5.875,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Upgrading to React 18 with TypeScript",authors:"johnnyreilly",tags:["React","TypeScript","Definitely Typed"],image:"./title-image.png",hide_table_of_contents:!1},nextItem:{title:"Type annotations: strong types, weakly held",permalink:"/2022/04/16/type-annotations-strong-types-weakly-held"}},c={image:n(67024).Z,authorsImageUrls:[void 0]},d=[{value:"React 18 and Definitely Typed",id:"react-18-and-definitely-typed",level:2},{value:"Definitely Typed and semantic versioning",id:"definitely-typed-and-semantic-versioning",level:2},{value:"React 18 - breaking type changes",id:"react-18---breaking-type-changes",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Wrapping up",id:"wrapping-up",level:2}],h={toc:d};function m(e){var t=e.components,p=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The upgrade of the React type definitions to support React 18 involved some significant breaking changes. This post digs into that and examines what the upgrade path looks like."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;Upgrading to React 18 with TypeScript&quot; with the React, TypeScript and Definitely Typed logos`",src:n(67024).Z,width:"1600",height:"900"})),(0,o.kt)("h2",{id:"react-18-and-definitely-typed"},"React 18 and Definitely Typed"),(0,o.kt)("p",null,"After a significant period of time in alpha / beta, ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2022/03/29/react-v18.html"},"React 18 shipped on March 29th 2022"),". Since the first alpha was released, ",(0,o.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/"},"support has been available in TypeScript"),". This has been made possible through the type definitions at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped"},"Definitely Typed"),", the repository for high quality TypeScript type definitions. It's particularly down to the fine work of ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/sebsilbermann"},"Sebastian Silbermann")," who has put a lot of work into the React 18 definitions."),(0,o.kt)("p",null,"Now that React 18 has shipped, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210"},"the type definitions for React 18 were updated in Sebastian's pull request"),". Many projects have been, and will be, broken by this change. This post will look at what that breakage can look like and how to resolve it."),(0,o.kt)("p",null,"Before we do that, let's first consider the problem of Definitely Typed and ",(0,o.kt)("a",{parentName:"p",href:"http://semver.org/"},"semantic versioning"),"."),(0,o.kt)("h2",{id:"definitely-typed-and-semantic-versioning"},"Definitely Typed and semantic versioning"),(0,o.kt)("p",null,"People are used to the idea of semantic versioning in the software they consume. They expect a major version bump to indicate breaking changes. This is exactly what React has just done by incrementing from v17 to v18."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Definitely Typed does not support semantic versioning.")),(0,o.kt)("p",null,"This is not out of spite. This is because DT intentionally publishes type definitions to npm, under the scope of ",(0,o.kt)("inlineCode",{parentName:"p"},"@types"),". So, for example, the type definitions of React are published to ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@types/react"},(0,o.kt)("inlineCode",{parentName:"a"},"@types/react")),"."),(0,o.kt)("p",null,"It's important to be aware that npm is built on top of semantic versioning. To make consumption of type definitions easier, the versioning of a type definition package will seek to emulate the versioning of the npm package it supports. So for ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react"},(0,o.kt)("inlineCode",{parentName:"a"},"react"))," ",(0,o.kt)("inlineCode",{parentName:"p"},"18.0.0"),", the corresponding type definition would be ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@types/react"},(0,o.kt)("inlineCode",{parentName:"a"},"@types/react")),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"18.0.0"),"."),(0,o.kt)("p",null,"If there's a breaking change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"@types/react")," type definition (or any other for that matter) then the new version published will not increment the major or minor version numbers. The increment will be applied to the patch number alone. This is done to maintain the simpler consumption model of types through npm."),(0,o.kt)("h2",{id:"react-18---breaking-type-changes"},"React 18 - breaking type changes"),(0,o.kt)("p",null,"All that said, for very widely used type definitions, it's not unusual to at least make an effort towards minimising breaking changes where that is possible."),(0,o.kt)("p",null,"As an aside, it's interesting to know that the Definitely Typed automation tooling splits type definitions into three categories: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/dt-mergebot/blob/5485345b210a4baf8e63376a930554bf2b7dd311/src/basic.ts#L11-L14"},'"Well-liked by everyone", "Popular" and "Critical"'),". Thanks ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/atcb/status/1438559981838626817"},"Andrew Branch for sharing that"),'! React, being very widely used, is considered "Critical".'),(0,o.kt)("p",null,"When Sebastian submitted ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210"},"a pull request to upgrade the TypeScript React type definitions"),", the opportunity was taken to make breaking changes. These were not all directly related to React 18. Many were fixing long standing issues with the React type definitions."),(0,o.kt)("p",null,"Sebastian's write up on the PR is excellent and I'd encourage you to read it. Here is a summary of the breaking changes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Removal of implicit children"),(0,o.kt)("li",{parentName:"ol"},"Remove ",(0,o.kt)("inlineCode",{parentName:"li"},"{}")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"ReactFragment")," (related to 1.)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"this.context")," becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"unknown")),(0,o.kt)("li",{parentName:"ol"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"noImplicitAny")," now enforces a type is supplied with ",(0,o.kt)("inlineCode",{parentName:"li"},"useCallback")),(0,o.kt)("li",{parentName:"ol"},"Remove deprecated types to align with official React ones")),(0,o.kt)("p",null,"Of the above, the removal of implicit children is the most breaking of the changes and ",(0,o.kt)("a",{parentName:"p",href:"https://solverfox.dev/writing/no-implicit-children"},"Sebastian wrote a blog post to explain the rationale"),". He was also good enough to write a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eps1lon/types-react-codemod"},"codemod to help"),"."),(0,o.kt)("p",null,"With that in mind, let's go upgrade a codebase to React 18!"),(0,o.kt)("h2",{id:"upgrading"},"Upgrading"),(0,o.kt)("p",null,"To demonstrate what upgrading looks like, I'm going to upgrade my aunt's website. It's a fairly simple site, and the pull request for the upgrade ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/poor-clares-arundel-koa/pull/69"},"can be found here"),"."),(0,o.kt)("p",null,"The first thing to do is upgrade React itself in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'-    "react": "^17.0.0",\n-    "react-dom": "^17.0.0",\n+    "react": "^18.0.0",\n+    "react-dom": "^18.0.0",\n')),(0,o.kt)("p",null,"Next we'll upgrade our type definitions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'-    "@types/react": "^17.0.0",\n-    "@types/react-dom": "^17.0.0",\n+    "@types/react": "^18.0.0",\n+    "@types/react-dom": "^18.0.0",\n')),(0,o.kt)("p",null,"When you install your dependencies, do check your lock file (",(0,o.kt)("inlineCode",{parentName:"p"},"yarn.lock")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json")," etc). It's important that you only have ",(0,o.kt)("inlineCode",{parentName:"p"},"@types/react")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@types/react-dom")," packages which are version 18+ listed."),(0,o.kt)("p",null,"Now that your install has completed, we start to see the following error message:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Property 'children' does not exist on type 'LoadingProps'.ts(2339)")),(0,o.kt)("p",null,"... In the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface LoadingProps {\n  // you'll note there's no `children` prop here - this is what's prompting the error message\n  noHeader?: boolean;\n}\n\n// if props.noHeader is false then this component returns just the icon and a message\n// if props.noHeader is true then this component returns the same but wrapped in an h1\nconst Loading: React.FunctionComponent<LoadingProps> = (props) =>\n  props.noHeader ? (\n    <>\n      <FontAwesomeIcon icon={faSnowflake} spin /> Loading {props.children} ...\n    </>\n  ) : (\n    <h1 className=\"loader\">\n      <FontAwesomeIcon icon={faSnowflake} spin /> Loading {props.children} ...\n    </h1>\n  );\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the above code snippet with &quot;Property &#39;children&#39; does not exist on type &#39;LoadingProps&#39;.ts(2339)&quot; displayed over the `props.children`",src:n(16421).Z,width:"1832",height:"651"})),(0,o.kt)("p",null,'What we\'re seeing here is the "removal of implicit children" in action. Before we did the upgrade, all ',(0,o.kt)("inlineCode",{parentName:"p"},"React.Component")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"React.FunctionComponent"),"s had a ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," property in place which allowed React users to use this without declaring it. This is no longer the case. If you have a component with ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," you have to explicitly declare them."),(0,o.kt)("p",null,"In my case, I could fix the issue by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," property directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface LoadingProps {\n  noHeader?: boolean;\n  children: string;\n}\n")),(0,o.kt)("p",null,"But why write code when you can get someone else to write it on your behalf?"),(0,o.kt)("p",null,"Let's make use of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eps1lon/types-react-codemod"},"Sebastian's codemod")," instead. To do that we simply enter the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx types-react-codemod preset-18 ./src\n")),(0,o.kt)("p",null,"When it runs you should find yourself with a prompt which says something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"? Pick transforms to apply (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)\n\u276f\u25c9 context-any\n \u25c9 deprecated-react-type\n \u25c9 deprecated-sfc-element\n \u25c9 deprecated-sfc\n \u25c9 deprecated-stateless-component\n \u25c9 implicit-children\n \u25c9 useCallback-implicit-any\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the terminal prompt above",src:n(13280).Z,width:"1960",height:"290"})),(0,o.kt)("p",null,"I'm going to select ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and let the codemod run. For my own project, 37 files are updated. It's the same modification for all files. In each case, a components props are wrapped by ",(0,o.kt)("inlineCode",{parentName:"p"},"React.PropsWithChildren"),". Let's look at what that looks like for our ",(0,o.kt)("inlineCode",{parentName:"p"},"Loading")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-const Loading: React.FunctionComponent<LoadingProps> = (props) =>\n+const Loading: React.FunctionComponent<React.PropsWithChildren<LoadingProps>> = (props) =>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PropsWithChildren")," is very simple; it just adds ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," back, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type PropsWithChildren<P> = P & { children?: ReactNode | undefined };\n")),(0,o.kt)("p",null,"This resolves the compilation issues we were having earlier; no type issues are reported anymore."),(0,o.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,o.kt)("p",null,"We now understand how the breaking type changes came to present with React 18, and we know how to upgrade our codebase using the handy codemod. Thanks ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/sebsilbermann"},"Sebastian Silbermann")," for not only putting this work into getting the type definitions in the best state they could be, and making it easier for the community to upgrade."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/upgrading-react-18-typescript/"},"This post was originally published on LogRocket.")))}m.isMDXComponent=!0},13280:function(e,t,n){t.Z=n.p+"assets/images/screenshot-codemod-in-action-82e961f8e497535e5c5bb07235ea3ace.png"},16421:function(e,t,n){t.Z=n.p+"assets/images/screenshot-no-children-d7923b56dd33dd95c0dc45ebea500805.png"},67024:function(e,t,n){t.Z=n.p+"assets/images/title-image-4dd9b1a8a94b8d60d914d0a504c6f9e2.png"}}]);