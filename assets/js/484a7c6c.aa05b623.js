"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[7667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),y=o,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"TypeScript 4.4 and more readable code",authors:"johnnyreilly",tags:["typescript"],image:"./reactions-on-github.webp",hide_table_of_contents:!1},c=void 0,p={permalink:"/2021/08/14/typescript-4-4-more-readable-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-08-14-typescript-4-4-more-readable-code/index.md",source:"@site/blog/2021-08-14-typescript-4-4-more-readable-code/index.md",title:"TypeScript 4.4 and more readable code",description:'An exciting feature is shipping with TypeScript 4.4. It has the name "Control Flow Analysis of Aliased Conditions" which is quite a mouthful. This post unpacks what this feature is, and demonstrates the contribution it makes to improving the readability of code.',date:"2021-08-14T00:00:00.000Z",formattedDate:"August 14, 2021",tags:[{label:"typescript",permalink:"/tags/typescript"}],readingTime:4.095,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript 4.4 and more readable code",authors:"johnnyreilly",tags:["typescript"],image:"./reactions-on-github.webp",hide_table_of_contents:!1},prevItem:{title:"Publish Azure Static Web Apps with Bicep and Azure DevOps",permalink:"/2021/08/15/bicep-azure-static-web-apps-azure-devops"},nextItem:{title:"TypeScript, abstract classes, and constructors",permalink:"/2021/08/01/typescript-abstract-classes-and-constructors"}},l={image:r(92688).Z,authorsImageUrls:[void 0]},s=[{value:"Updated 30th September 2021",id:"updated-30th-september-2021",level:2}],u={toc:s};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An exciting feature is shipping with TypeScript 4.4. It has the name ",(0,n.kt)("a",o({parentName:"p"},{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-4-beta/#cfa-aliased-conditions"}),'"Control Flow Analysis of Aliased Conditions"')," which is quite a mouthful. This post unpacks what this feature is, and demonstrates the contribution it makes to improving the readability of code."),(0,n.kt)("h2",o({},{id:"updated-30th-september-2021"}),"Updated 30th September 2021"),(0,n.kt)("p",null,"This blog evolved to become a talk:"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LxZx3ycrxI0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}d.isMDXComponent=!0},92688:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/reactions-on-github-b46c49a7de3c4208a65afd71691e2b0f.webp"}}]);