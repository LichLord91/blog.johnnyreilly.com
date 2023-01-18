"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[68462],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=n(e,["components","mdxType","originalType","parentName"]),c=p(a),g=o,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return a?i.createElement(m,l(l({ref:t},h),{},{components:a})):i.createElement(m,l({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=g;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[c]="string"==typeof e?e:o,l[1]=n;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},66485:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>h});a(67294);var i=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const l={title:"ts-loader 2017 retrospective",authors:"johnnyreilly",tags:["Die Hard","TypeScript","ts-loader","Webpack"],hide_table_of_contents:!1},n=void 0,s={permalink:"/2017/12/24/ts-loader-2017-retrospective",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2017-12-24-ts-loader-2017-retrospective/index.md",source:"@site/blog/2017-12-24-ts-loader-2017-retrospective/index.md",title:"ts-loader 2017 retrospective",description:"2017 is drawing to a close, and it's been a big, big year in webpack-land. It's been a big year for ts-loader too. At the start of the year v1.3.3 was the latest version available, officially supporting webpack 1. (Old school!) We end the year with ts-loader sitting pretty at v3.2.0 and supporting webpack 2 and 3.",date:"2017-12-24T00:00:00.000Z",formattedDate:"December 24, 2017",tags:[{label:"Die Hard",permalink:"/tags/die-hard"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:3.395,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ts-loader 2017 retrospective",authors:"johnnyreilly",tags:["Die Hard","TypeScript","ts-loader","Webpack"],hide_table_of_contents:!1},prevItem:{title:"Auth0, TypeScript and ASP.NET Core",permalink:"/2018/01/14/auth0-typescript-and-aspnet-core"},nextItem:{title:"The TypeScript webpack PWA",permalink:"/2017/11/19/the-typescript-webpack-pwa"}},p={authorsImageUrls:[void 0]},h=[{value:"<code>fork-ts-checker-webpack-plugin</code> build speed improvements",id:"fork-ts-checker-webpack-plugin-build-speed-improvements",level:2},{value:"ts-loader 4.0 (Live webpack or Die Hard)",id:"ts-loader-40-live-webpack-or-die-hard",level:2},{value:"Start using the new watch API",id:"start-using-the-new-watch-api",level:3},{value:"Drop custom module resolution",id:"drop-custom-module-resolution",level:3},{value:"Drop support for TypeScript 2.3 and below",id:"drop-support-for-typescript-23-and-below",level:3},{value:"webpack v4 is in alpha now",id:"webpack-v4-is-in-alpha-now",level:3},{value:"<code>contextAsConfigBasePath</code> will be replaced with a <code>context</code>",id:"contextasconfigbasepath-will-be-replaced-with-a-context",level:3},{value:"<code>reportFiles</code> option to be added",id:"reportfiles-option-to-be-added",level:3},{value:"Merry Christmas!",id:"merry-christmas",level:2}],c={toc:h};function d(e){var{components:t}=e,l=r(e,["components"]);return(0,i.kt)("wrapper",o({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"2017 is drawing to a close, and it's been a big, big year in webpack-land. It's been a big year for ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader")," too. At the start of the year v1.3.3 was the latest version available, officially supporting webpack 1. (Old school!) We end the year with ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader")," sitting pretty at v3.2.0 and supporting webpack 2 and 3."),(0,i.kt)("p",null,"Many releases were shipped and that was down to a whole bunch of folk. People helped out with bug fixes, features, advice and docs improvements. ",(0,i.kt)("strong",{parentName:"p"},"All of these help."),(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader")," wouldn't be where it is without you so thanks to everyone that helped out - you rock!"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",alt:"Profile image of https://github.com/christiantinauer",src:a(50728).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/Pajn",src:a(63028).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/maier49",src:a(46654).Z,width:"420",height:"420"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/false",src:a(28101).Z,width:"125",height:"125"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/roddypratt",src:a(18230).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/ldrick",src:a(17951).Z,width:"346",height:"346"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/mattlewis92",src:a(11644).Z,width:"400",height:"400"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/Venryx",src:a(15478).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/WillMartin",src:a(45041).Z,width:"420",height:"420"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/Loilo",src:a(44402).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/Brooooooklyn",src:a(35585).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/mengxy",src:a(90603).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/bsouthga",src:a(16220).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/zinserjan",src:a(50798).Z,width:"420",height:"420"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/sokra",src:a(38568).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/vhqtvn",src:a(27368).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/HerringtonDarkholme",src:a(24764).Z,width:"328",height:"328"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/johnnyreilly",src:a(25499).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/jbrantly",src:a(88564).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/octref",src:a(71331).Z,width:"400",height:"400"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/rhyek",src:a(34296).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/develar",src:a(86822).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/donaldpipowitch",src:a(49642).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/schmuli",src:a(96512).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/longlho",src:a(95590).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/Igorbek",src:a(6464).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/aindlq",src:a(28486).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/wearymonkey",src:a(830).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/bancek",src:a(57549).Z,width:"460",height:"460"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Profile image of https://github.com/mredbishop",src:a(82921).Z,width:"460",height:"460"})),(0,i.kt)("p",null,"I'm really grateful to all of you. Thanks so much! (Apologies for those I've missed anyone out - I know there's more still.)"),(0,i.kt)("h2",o({},{id:"fork-ts-checker-webpack-plugin-build-speed-improvements"}),(0,i.kt)("inlineCode",{parentName:"h2"},"fork-ts-checker-webpack-plugin")," build speed improvements"),(0,i.kt)("p",null,"Alongside other's direct contributions to ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader"),", other projects improved the experience of using ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader"),". ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/piotr-oles"}),"Piotr Ole\u015b")," dropped his ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"}),(0,i.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," this year which nicely increased build speed when used with ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader"),"."),(0,i.kt)("p",null,"That opened up the possibility of adding ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/amireh/happypack"}),"HappyPack")," support. I had the good fortune to work with webpack's ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/sokra"}),"Tobias Koppers")," and ExtraHop's ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/abirmingham"}),"Alex Birmingham")," on ",(0,i.kt)("a",o({parentName:"p"},{href:"https://www.extrahop.com/company/blog/2017/extrahop-webpack-accelerating-build-times/"}),"improving TypeScript build speed further"),"."),(0,i.kt)("p",null,"So what does the future hold?"),(0,i.kt)("h2",o({},{id:"ts-loader-40-live-webpack-or-die-hard"}),"ts-loader 4.0 (Live webpack or Die Hard)"),(0,i.kt)("p",null,"The web marches on and webpack gallops alongside. Here's what's in the pipeline for ts-loader in 2018:"),(0,i.kt)("h3",o({},{id:"start-using-the-new-watch-api"}),"Start using the new watch API"),(0,i.kt)("p",null,(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/pull/20234"}),"A new watch API is being made available in the TypeScript API"),". We have ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/685"}),"a PR")," from the amazing ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/sheetalkamat"}),"Sheetal Nandi")," which adds support to ts-loader. Given that's quite a big PR we want to merge that before anything else lands. The watch API is still being finalised but once it lands in TypeScript we'll look to merge the PR and ship a new version of ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader"),"."),(0,i.kt)("h3",o({},{id:"drop-custom-module-resolution"}),"Drop custom module resolution"),(0,i.kt)("p",null,"Historically ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader")," has had it's own module resolution mechanism in place. We're going to look to move to use the TypeScript mechanism instead. The old module resolution be deprecated but will remain available behind a flag for a time. In future we'll look to drop the old mechanism entirely."),(0,i.kt)("h3",o({},{id:"drop-support-for-typescript-23-and-below"}),"Drop support for TypeScript 2.3 and below"),(0,i.kt)("p",null,"The codebase can be made simpler if we drop support for older versions of TypeScript so that's what we plan to do with our next breaking changes release."),(0,i.kt)("h3",o({},{id:"webpack-v4-is-in-alpha-now"}),"webpack v4 is in alpha now"),(0,i.kt)("p",null,"If any changes need to happen to ts-loader to support webpack 4 then they will be. Personally I'm planning to help out with ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"}),(0,i.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," as there will likely be some changes required there."),(0,i.kt)("h3",o({},{id:"contextasconfigbasepath-will-be-replaced-with-a-context"}),(0,i.kt)("inlineCode",{parentName:"h3"},"contextAsConfigBasePath")," will be replaced with a ",(0,i.kt)("inlineCode",{parentName:"h3"},"context")),(0,i.kt)("p",null,"The option that landed in the last month doesn't quite achieve the aims of the original PR's author ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/christiantinauer"}),"Christian Tinauer"),". Consequently it's going to be replaced with a new option. This is queued up and ready to go ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/688"}),"here"),"."),(0,i.kt)("h3",o({},{id:"reportfiles-option-to-be-added"}),(0,i.kt)("inlineCode",{parentName:"h3"},"reportFiles")," option to be added"),(0,i.kt)("p",null,(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/freeman"}),"Michel Rasschaert")," is presently working on adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"reportFiles")," option to ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader"),". You can see the PR in progress ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/701"}),"here"),"."),(0,i.kt)("h2",o({},{id:"merry-christmas"}),"Merry Christmas!"),(0,i.kt)("p",null,"You can expect to see the first releases of ts-loader 4.0 in 2018. In the meantime, I'd like to wish you Merry Christmas and a Happy New Year! And once more, thanks and thanks again to all you generous people who help build ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader"),". You're wonderful and so I'm glad you do what you do... joyeux Noel!"))}d.isMDXComponent=!0},35585:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Brooooooklyn-745ec304e54219f9adba0d8e752dcd71.jpg"},24764:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/HerringtonDarkholme-f2fce8de129c0b80759792dbf4e5c069.jpg"},6464:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Igorbek-e67cd1bb4014726ad252e0e138f0b9fe.jpg"},44402:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Loilo-90cad0819f6e79ea3f49e88f842b3a35.jpg"},63028:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Pajn-bb659024be4d59ebc8fa104187dbb263.jpg"},15478:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Venryx-86870969ae336940a8dffec79a0b180f.jpg"},45041:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/WillMartin-519b59cb48536ba7feb850ea2dbb74db.jpg"},28486:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/aindlq-012d25f39201c4fd91343f3263969e2e.jpg"},57549:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bancek-f295be63486265ce2b3e5115ed10cfd7.jpg"},16220:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bsouthga-fb8872b613e57f2cfd832735ce67a472.jpg"},50728:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/christiantinauer-e20781c9f130926ea882f696d17c43a4.jpg"},86822:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/develar-27486201a76c6f98bf91081f35891fe3.jpg"},49642:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/donaldpipowitch-a5937a30bdea498be3ed90861924ac2e.jpg"},28101:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/false-3104cfe0e5d5187354b06bfa4b9f6970.jpg"},88564:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/jbrantly-b874296070feff3df886bc9ef73abe7c.jpg"},25499:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/johnnyreilly-55164b100e9193a09ca40addec824856.jpg"},17951:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ldrick-a92d84244aa67415765f562724829c8b.jpg"},95590:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/longlho-984563761a707461d513b21963e95c51.jpg"},46654:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/maier49-1f675e571374adf6394c8aa53888b66d.jpg"},11644:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mattlewis92-ff291934668bad8b16c44c5966986864.jpg"},90603:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mengxy-d631a8727a808f778bea460c62e5ac15.jpg"},82921:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mredbishop-2268349ff5d6da975db607c9ce434824.jpg"},71331:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/octref-acb3e243d993255334a3648c25a7a3be.jpg"},34296:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/rhyek-c69b3383fc98d3cdf4557142eea8913f.jpg"},18230:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/roddypratt-e92c97d22cc2fec377deebc02c918678.jpg"},96512:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/schmuli-b4b484cd66e8963ce2deed2ffbdd31f2.jpg"},38568:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/sokra-4e993375add960813bc9b7513876a266.jpg"},27368:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/vhqtvn-6bb8f7265a04a4b0c1640eddd0d07dd3.jpg"},830:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/wearymonkey-3a361cce6182fb309925bf2819cbb86c.jpg"},50798:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/zinserjan-1eff723e89aded196f611775f81af48a.jpg"}}]);