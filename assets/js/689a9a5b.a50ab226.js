"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[81554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"TypeScript and high CPU usage - watch don't stare!",authors:"johnnyreilly",tags:["cross-env","typescript","fork-ts-checker-webpack-plugin","watch API","Webpack"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2019/05/23/typescript-and-high-cpu-usage-watch",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2019-05-23-typescript-and-high-cpu-usage-watch/index.md",source:"@site/blog/2019-05-23-typescript-and-high-cpu-usage-watch/index.md",title:"TypeScript and high CPU usage - watch don't stare!",description:"I'm one of the maintainers of the fork-ts-checker-webpack-plugin. Hi there!",date:"2019-05-23T00:00:00.000Z",formattedDate:"May 23, 2019",tags:[{label:"cross-env",permalink:"/tags/cross-env"},{label:"typescript",permalink:"/tags/typescript"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"watch API",permalink:"/tags/watch-api"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:2.73,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript and high CPU usage - watch don't stare!",authors:"johnnyreilly",tags:["cross-env","typescript","fork-ts-checker-webpack-plugin","watch API","Webpack"],hide_table_of_contents:!1},prevItem:{title:"TypeScript / webpack - you down with PnP? Yarn, you know me!",permalink:"/2019/06/07/typescript-webpack-you-down-with-pnp"},nextItem:{title:"react-select with less typing lag",permalink:"/2019/04/27/react-select-with-less-typing-lag"}},p={authorsImageUrls:[void 0]},c=[{value:"Why High?",id:"why-high",level:2},{value:"&quot;there is another&quot;",id:"there-is-another",level:2},{value:"workaround!",id:"workaround",level:2},{value:"The Future",id:"the-future",level:2}],h={toc:c};function u(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I'm one of the maintainers of the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"}),"fork-ts-checker-webpack-plugin"),". Hi there!"),(0,a.kt)("p",null,"Recently, various issues have been raised against create-react-app (which uses fork-ts-checker-webpack-plugin) as well as against the plugin itself. They've been related to the level of CPU usage in watch mode on idle; i.e. it's high!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/236"}),"https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://github.com/facebook/create-react-app/issues/6792"}),"https://github.com/facebook/create-react-app/issues/6792"))),(0,a.kt)("h2",r({},{id:"why-high"}),"Why High?"),(0,a.kt)("p",null,"Now, under the covers, the ",(0,a.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," uses the TypeScript watch API."),(0,a.kt)("p",null,"The marvellous ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NeKJ"}),"John")," (not me - another John) did some digging and discovered the root cause came down to the way that the TypeScript watch API watches files:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TS uses internally the ",(0,a.kt)("inlineCode",{parentName:"p"},"fs.watch")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fs.watchFile")," API functions of nodejs for their watch mode. The latter function ",(0,a.kt)("a",r({parentName:"p"},{href:"https://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener"}),"is even not recommended by nodejs documentation")," for performance reasons, and urges to use ",(0,a.kt)("inlineCode",{parentName:"p"},"fs.watch")," instead."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NodeJS doc:")),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"Using fs.watch() is more efficient than fs.watchFile and fs.unwatchFile. fs.watch should be used instead of fs.watchFile and fs.unwatchFile when possible."))),(0,a.kt)("h2",r({},{id:"there-is-another"}),'"there is another"'),(0,a.kt)("p",null,"John also found that there are other file watching behaviours offered by TypeScript. What's more, the file watching behaviour is ",(0,a.kt)("em",{parentName:"p"},"configurable with an environment variable"),". That's right, if an environment variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"TSC_WATCHFILE")," is set, it controls the file watching approach used. Big news!"),(0,a.kt)("p",null,"John did some rough benchmarking of the performance of the different options that be set on his PC running linux 64 bit. Here's how it came out:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"CPU usage on idle"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"TS default ",(0,a.kt)("em",{parentName:"td"},"(TSC_WATCHFILE not set)")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"7",".","4%"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"UseFsEventsWithFallbackDynamicPolling"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0",".","2%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"UseFsEventsOnParentDirectory"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0",".","2%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"PriorityPollingInterval"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"6",".","2%"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"DynamicPriorityPolling"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0",".","5%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"UseFsEvents"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0",".","2%")))),(0,a.kt)("p",null,"As you can see, the default performs poorly. On the other hand, an option like ",(0,a.kt)("inlineCode",{parentName:"p"},"UseFsEventsWithFallbackDynamicPolling")," is comparative greasy lightning."),(0,a.kt)("h2",r({},{id:"workaround"}),"workaround!"),(0,a.kt)("p",null,"To get this better experience into your world now, you could just set an environment variable on your machine. However, that doesn't scale; let's instead look at introducing the environment variable into your project explicitly."),(0,a.kt)("p",null,"We're going to do this in a cross platform way using ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/kentcdodds/cross-env"}),(0,a.kt)("inlineCode",{parentName:"a"},"cross-env")),". This is a mighty useful utility by Kent C Dodds which allows you to set environment variables in a way that will work on Windows, Mac and Linux. Imagine it as the jQuery of the environment variables world :-)"),(0,a.kt)("p",null,"Let's add it as a ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependency"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"yarn add -D cross-env\n")),(0,a.kt)("p",null,"Then take a look at your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". You've probably got a ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," script that looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'"start": "webpack-dev-server --progress --color --mode development --config webpack.config.development.js",\n')),(0,a.kt)("p",null,"Or if you're a create-react-app user maybe this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'"start": "react-scripts start",\n')),(0,a.kt)("p",null,"Prefix your ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," script with ",(0,a.kt)("inlineCode",{parentName:"p"},"cross-env TSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling"),". This will, when run, initialise an environment variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"TSC_WATCHFILE")," with the value ",(0,a.kt)("inlineCode",{parentName:"p"},"UseFsEventsWithFallbackDynamicPolling"),". Then it will start your development server as it did before. When TypeScript is fired up by webpack it will see this environment variable and use it to configure the file watching behaviour to one of the more performant options."),(0,a.kt)("p",null,"So, in the case of a ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," user, your finished ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," script would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'"start": "cross-env TSC_WATCHFILE=UseFsEventsWithFallbackDynamicPolling react-scripts start",\n')),(0,a.kt)("h2",r({},{id:"the-future"}),"The Future"),(0,a.kt)("p",null,"There's a possibility that the default watch behaviour may change in TypeScript in future. It's currently under discussion, you can read more ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/microsoft/TypeScript/issues/31048"}),"here"),"."))}u.isMDXComponent=!0}}]);