"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[50689],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1928:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"It's Not Dead 2: mobx-react-devtools and the undead",authors:"johnnyreilly",tags:["uglifyjs","mobx","dead code elimination","Webpack"],hide_table_of_contents:!1},s=void 0,d={permalink:"/2018/03/26/its-not-dead-2-mobx-react-devtools-and-the-undead",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2018-03-26-its-not-dead-2-mobx-react-devtools-and-the-undead/index.md",source:"@site/blog/2018-03-26-its-not-dead-2-mobx-react-devtools-and-the-undead/index.md",title:"It's Not Dead 2: mobx-react-devtools and the undead",description:"I spent today digging through our webpack 4 config trying to work out why a production bundle contained code like this:",date:"2018-03-26T00:00:00.000Z",formattedDate:"March 26, 2018",tags:[{label:"uglifyjs",permalink:"/tags/uglifyjs"},{label:"mobx",permalink:"/tags/mobx"},{label:"dead code elimination",permalink:"/tags/dead-code-elimination"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:2.035,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"It's Not Dead 2: mobx-react-devtools and the undead",authors:"johnnyreilly",tags:["uglifyjs","mobx","dead code elimination","Webpack"],hide_table_of_contents:!1},prevItem:{title:"Using Reflection to Identify Unwanted Dependencies",permalink:"/2018/04/28/using-reflection-to-identify-unwanted-dependencies"},nextItem:{title:"Uploading Images to Cloudinary with the Fetch API",permalink:"/2018/03/25/uploading-images-to-cloudinary-with-fetch"}},c={authorsImageUrls:[void 0]},p=[{value:"Who Betrayed Me?",id:"who-betrayed-me",level:2},{value:"Perhaps We Change the Advice?",id:"perhaps-we-change-the-advice",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I spent today digging through our webpack 4 config trying to work out why a production bundle contained code like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if("production"!==e.env.NODE_ENV){//...\n')),(0,r.kt)("p",null,"My expectation was that with webpack 4 and ",(0,r.kt)("inlineCode",{parentName:"p"},"'mode': 'production'")," this meant that behind the scenes all ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," statements should be converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"'production'"),". Subsequently Uglify would automatically get its groove on with the resulting ",(0,r.kt)("inlineCode",{parentName:"p"},'if("production"!=="production") ...')," and et voil\xe0!... Strip the dead code."),(0,r.kt)("p",null,"It seemed that was not the case. I was seeing (regrettably) undead code. And who here actually likes the undead?"),(0,r.kt)("h2",{id:"who-betrayed-me"},"Who Betrayed Me?"),(0,r.kt)("p",null,"My beef was with webpack. It done did me wrong. Or... So I thought. webpack did nothing wrong. It is pure and good and unjustly complained about. It was my other love: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx"},"mobx"),". Or to be more specific: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx-react-devtools"},"mobx-react-devtools"),"."),(0,r.kt)("p",null,"It turns out that the way you use ",(0,r.kt)("inlineCode",{parentName:"p"},"mobx-react-devtools")," reliably makes the difference. It's the cause of the stray ",(0,r.kt)("inlineCode",{parentName:"p"},'("production"!==e.env.NODE_ENV)')," statements in our bundle output. After a ",(0,r.kt)("strong",{parentName:"p"},"long")," time I happened upon ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx-react-devtools/issues/66#issuecomment-365151531"},"this issue")," which contained a gem by one ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gilesbutler"},"Giles Butler"),". His suggested way to reference ",(0,r.kt)("inlineCode",{parentName:"p"},"mobx-react-devtools")," is (as far as I can tell) the solution!"),(0,r.kt)("p",null,"On a dummy project I had the ",(0,r.kt)("inlineCode",{parentName:"p"},"mobx-react-devtools")," advised code in place:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Layout } from './components/layout';\nimport DevTools from 'mobx-react-devtools';\n\nexport const App: React.SFC<{}> = (_props) => (\n  <div className=\"ui container\">\n    <Layout />\n    {process.env.NODE_ENV !== 'production' ? (\n      <DevTools position={{ bottom: 20, right: 20 }} />\n    ) : null}\n  </div>\n);\n")),(0,r.kt)("p",null,"With this I had a build size of 311kb. Closer examination of my bundle revealed that my ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle.js")," was riddled with ",(0,r.kt)("inlineCode",{parentName:"p"},'("production"!==e.env.NODE_ENV)')," statements. Sucks, right?"),(0,r.kt)("p",null,"Then I tried this instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Layout } from './components/layout';\nconst { Fragment } = React;\n\nconst DevTools =\n  process.env.NODE_ENV !== 'production'\n    ? require('mobx-react-devtools').default\n    : Fragment;\n\nexport const App: React.SFC<{}> = (_props) => (\n  <div className=\"ui container\">\n    <Layout />\n    <DevTools position={{ bottom: 20, right: 20 }} />\n  </div>\n);\n")),(0,r.kt)("p",null,"With this approach I got a build size of 191kb. This was thanks to the dead code being actually stripped. That's a saving of 120kb!"),(0,r.kt)("h2",{id:"perhaps-we-change-the-advice"},"Perhaps We Change the Advice?"),(0,r.kt)("p",null,"There's a suggestion that the README should be changed to reflect this advice - until that happens, I wanted to share this solution. Also, I've a nagging feeling that I've missed something pertinent here; if someone knows something that I should... Tell me please!"))}m.isMDXComponent=!0}}]);