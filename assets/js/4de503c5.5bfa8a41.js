"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[93615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Windows Defender Step Away From npm",authors:"johnnyreilly",tags:["VS Code","Windows","npm"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2017/06/11/windows-defender-step-away-from-npm",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2017-06-11-windows-defender-step-away-from-npm/index.md",source:"@site/blog/2017-06-11-windows-defender-step-away-from-npm/index.md",title:"Windows Defender Step Away From npm",description:"Updated 18/06/2017",date:"2017-06-11T00:00:00.000Z",formattedDate:"June 11, 2017",tags:[{label:"VS Code",permalink:"/tags/vs-code"},{label:"Windows",permalink:"/tags/windows"},{label:"npm",permalink:"/tags/npm"}],readingTime:1.68,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Windows Defender Step Away From npm",authors:"johnnyreilly",tags:["VS Code","Windows","npm"],hide_table_of_contents:!1},prevItem:{title:"Dynamic import: I've been awaiting you...",permalink:"/2017/07/02/dynamic-import-ive-been-await-ing-you"},nextItem:{title:"TypeScript: Spare the Rod, Spoil the Code",permalink:"/2017/05/20/typescript-spare-rod-spoil-code"}},p={authorsImageUrls:[void 0]},d=[{value:"Updated 18/06/2017",id:"updated-18062017",level:2},{value:"Updated 12/07/2017",id:"updated-12072017",level:2}],c={toc:d};function u(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)("wrapper",o({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"updated-18062017"}),"Updated 18/06/2017"),(0,r.kt)("p",null,"Whilst things did improve by fiddling with Windows Defender it wasn't a 100% fix which makes me wary. Interestingly, VS Code was always open when I did experience the issue and I haven't experienced it when it's been closed. So it may be the cause. I've opened ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/Microsoft/vscode/issues/28593"}),"an issue for this against the VS Code repo")," ","-"," it sounds like other people may be affected as I was. Perhaps this is VS Code and not Windows Defender. Watch that space..."),(0,r.kt)("h2",o({},{id:"updated-12072017"}),"Updated 12/07/2017"),(0,r.kt)("p",null,"The issue was VS Code. The bug has now been fixed and shipped last night with ",(0,r.kt)("a",o({parentName:"p"},{href:"https://code.visualstudio.com/updates/v1_14"}),"VS Code 1.14.0"),". Yay!"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"I've recently experienced many of my ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install"),"s failing for no consistent reason. The error message would generally be something along the lines of:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"npm ERR! Error: EPERM: operation not permitted, rename 'C:\\dev\\training\\drrug\\node_modules\\.staging\\@exponent\\ngrok-fc327f2a' -> 'C:\\dev\\training\\drrug\\node_modules\\@exponent\\ngrok'\n")),(0,r.kt)("p",null,"I spent a good deal of time changing the versions of node and npm I was running; all seemingly to no avail. Regular flakiness which I ascribed to node / npm. I was starting to give up when I read of ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/react-community/create-react-native-app/issues/191#issuecomment-304073970"}),"other people experiencing similar issues"),". Encouragingly ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/fmeira"}),"Fernando Meira")," suggested a solution:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I got the same problem just doing an npm install. Run with antivirus disabled (if you use Windows Defender, turn off Real-Time protection and Cloud-based protection). That worked for me!")),(0,r.kt)("p",null,"I didn't really expect this to work - Windows Defender has been running in the background of my Windows 10 laptop since I've had it. There's been no problems with npm installs up until a week or so ago. But given the experience I and others have had I thought I should put it out there: it looks like Windows Defender has it in for npm. Go figure."),(0,r.kt)("p",null,"Alas Windows Defender doesn't stay dead for long; it's like a zombie that rises from the grave no matter how many times you kill it. So you might want to try configuring it to ignore node.exe:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"eager",fetchpriority:"high",src:n(85968).Z,width:"445",height:"640"})),(0,r.kt)("p",null,"Or switching to Linux..."))}u.isMDXComponent=!0},85968:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Screenshot-2017-06-11-15.05.47-f5f66f1e872d5d6b35858ea6903cbc6c.webp"}}]);