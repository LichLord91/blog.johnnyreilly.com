"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[44842],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73754:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Azure Static Web Apps: Node.js 16 and Oryx",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus","Node.js","Oryx"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/2022/05/28/azure-static-web-apps-node-16-oryx",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-05-28-azure-static-web-apps-node-16-oryx/index.md",source:"@site/blog/2022-05-28-azure-static-web-apps-node-16-oryx/index.md",title:"Azure Static Web Apps: Node.js 16 and Oryx",description:"Azure Static Web Apps presently fixes to Node.js 14 when building. If you require a different version of Node to build, this can be a problem. This post outlines a workaround.",date:"2022-05-28T00:00:00.000Z",formattedDate:"May 28, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"},{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"Node.js",permalink:"/tags/node-js"},{label:"Oryx",permalink:"/tags/oryx"}],readingTime:1.23,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Static Web Apps: Node.js 16 and Oryx",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus","Node.js","Oryx"],image:"./title-image.png",hide_table_of_contents:!1},nextItem:{title:"Azure Static Web Apps: named preview environments with Azure DevOps",permalink:"/2022/05/07/static-web-apps-azure-devops-named-preview-environments"}},p={image:n(52718).Z,authorsImageUrls:[void 0]},c=[{value:"The engine &quot;node&quot; is incompatible",id:"the-engine-node-is-incompatible",level:2},{value:"<code>engines</code> to the rescue!",id:"engines-to-the-rescue",level:2}],d={toc:c};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Azure Static Web Apps presently fixes to Node.js 14 when building. If you require a different version of Node to build, this can be a problem. This post outlines a workaround."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"title image reading &quot;Azure Static Web Apps: Node.js 16 and Oryx&quot; with Azure and Node.js logos",src:n(52718).Z,width:"1600",height:"900"})),(0,i.kt)("h2",{id:"the-engine-node-is-incompatible"},'The engine "node" is incompatible'),(0,i.kt)("p",null,"As I was upgrading this blog to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-beta.21"},"Docusaurus v2.0.0-beta.21")," I noticed this error in my build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'error @docusaurus/core@2.0.0-beta.21: The engine "node" is incompatible with this module. Expected version ">=16.14". Got "14.19.1"\nerror Found incompatible module.\n\n\n---End of Oryx build logs---\nOryx has failed to build the solution.\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/Oryx"},"Oryx"),", which performs the build for Static Web Apps, is fixed to Node 14 it seems. Or it may actually be that the GitHub Action is fixed to use Node.js 14 - I'm not completely sure. Either way, Docusaurus now requires Node 16. Frustratingly, the GitHub Action does not allow explicit configuration of the Node version. Happily, there is a way to resolve this - and it's pretty simple."),(0,i.kt)("h2",{id:"engines-to-the-rescue"},(0,i.kt)("inlineCode",{parentName:"h2"},"engines")," to the rescue!"),(0,i.kt)("p",null,"You can specify the node version you require in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," with the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/configuring-npm/package-json#engines"},(0,i.kt)("inlineCode",{parentName:"a"},"engines"))," property. This means you can do something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "engines": {\n    "node": ">=16"\n  }\n')),(0,i.kt)("p",null,"And have the version of Node.js you require installed by Oryx."),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cormacpayne"},"Cormac McCarthy")," for his ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps/issues/694#issuecomment-1137492562"},"comment")," which lead me to try this approach out."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/228"},"You can see the PR where I made this change for my blog here.")))}m.isMDXComponent=!0},52718:function(e,t,n){t.Z=n.p+"assets/images/title-image-b683e623552cedc511247615df08535b.png"}}]);