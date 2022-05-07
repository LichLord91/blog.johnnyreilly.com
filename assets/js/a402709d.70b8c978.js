"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[32976],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=o,k=h["".concat(c,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"fork-ts-checker-webpack-plugin code clickability",authors:"johnnyreilly",tags:["VS Code","console","fork-ts-checker-webpack-plugin","ts-loader","Webpack"],hide_table_of_contents:!1},c=void 0,s={permalink:"/2017/09/12/fork-ts-checker-webpack-plugin-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2017-09-12-fork-ts-checker-webpack-plugin-code/index.md",source:"@site/blog/2017-09-12-fork-ts-checker-webpack-plugin-code/index.md",title:"fork-ts-checker-webpack-plugin code clickability",description:"My name is John Reilly and I'm a VS Code addict. There I said it. I'm also a big fan of TypeScript and webpack. I've recently switched to using the awesome fork-ts-checker-webpack-plugin to speed up my builds.",date:"2017-09-12T00:00:00.000Z",formattedDate:"September 12, 2017",tags:[{label:"VS Code",permalink:"/tags/vs-code"},{label:"console",permalink:"/tags/console"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:2.085,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"fork-ts-checker-webpack-plugin code clickability",authors:"johnnyreilly",tags:["VS Code","console","fork-ts-checker-webpack-plugin","ts-loader","Webpack"],hide_table_of_contents:!1},prevItem:{title:"Working with Extrahop on webpack and ts-loader",permalink:"/2017/10/19/working-with-extrahop-on-webpack-and-ts"},nextItem:{title:"TypeScript + Webpack: Super Pursuit Mode",permalink:"/2017/09/07/typescript-webpack-super-pursuit-mode"}},p={authorsImageUrls:[void 0]},u=[],h={toc:u};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"My name is John Reilly and I'm a VS Code addict. There I said it. I'm also a big fan of TypeScript and webpack. I've recently switched to using the awesome ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/fork-ts-checker-webpack-plugin"},(0,a.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," to speed up my builds."),(0,a.kt)("p",null,"One thing I love is using VS Code both as my editor and my terminal. Using the fork-ts-checker-webpack-plugin I noticed a problem when TypeScript errors showed up in the terminal:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87150).Z,width:"640",height:"317"})),(0,a.kt)("p",null,"Take a look at the red file location in the console above. What's probably not obvious from the above screenshot is that it is ",(0,a.kt)("strong",{parentName:"p"},"not clickable"),". I'm used to being able to click on link in the console and bounce straight to the error location. It's a really productive workflow; see a problem, click on it, be taken to the cause, fix it."),(0,a.kt)("p",null,'I want to click on "',(0,a.kt)("inlineCode",{parentName:"p"},"C:/source/ts-loader/examples/fork-ts-checker/src/fileWithError.ts(2,7)"),'" and have VS Code open up ',(0,a.kt)("inlineCode",{parentName:"p"},"fileWithError.ts"),", ideally at line 2 and column 7. But here it's not working. Why?"),(0,a.kt)("p",null,"Well, I initially got this slightly wrong; I thought it was about the formatting of the file path. It is. I thought that having the line number and column number in parentheses after the path (eg ",(0,a.kt)("inlineCode",{parentName:"p"},'"(2,7)"'),") was screwing over VS Code. It isn't. Something else is. Look closely at the screenshot; what do you see? Do you notice how the colour of the line number / column number is different to the path? In the words of ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/281jMxOvP5k"},"Delbert Wilkins"),": that's crucial."),(0,a.kt)("p",null,"Yup, the colour change between the path and the line number / column number is the problem. I've submitted a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/48"},"PR to fix this")," that I hope will get merged. In the meantime you can avoid this issue by dropping this code into your ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var chalk = require('chalk');\nvar os = require('os');\n\nfunction clickableFormatter(message, useColors) {\n  var colors = new chalk.constructor({ enabled: useColors });\n  var messageColor = message.isWarningSeverity()\n    ? colors.bold.yellow\n    : colors.bold.red;\n  var fileAndNumberColor = colors.bold.cyan;\n  var codeColor = colors.grey;\n  return [\n    messageColor(message.getSeverity().toUpperCase() + ' in ') +\n      fileAndNumberColor(\n        message.getFile() +\n          '(' +\n          message.getLine() +\n          ',' +\n          message.getCharacter() +\n          ')'\n      ) +\n      messageColor(':'),\n\n    codeColor(message.getFormattedCode() + ': ') + message.getContent(),\n  ].join(os.EOL);\n}\n\nmodule.exports = {\n  // Other config...\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        loader: 'ts-loader',\n        options: { transpileOnly: true },\n      },\n    ],\n  },\n  resolve: {\n    extensions: ['.ts', '.tsx', 'js'],\n  },\n  plugins: [\n    new ForkTsCheckerWebpackPlugin({ formatter: clickableFormatter }), // Here we get our clickability back\n  ],\n};\n")),(0,a.kt)("p",null,"With that in place, what do you we have? This:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(94189).Z,width:"640",height:"317"})),(0,a.kt)("p",null,"VS Code clickability; it's a beautiful thing."))}m.isMDXComponent=!0},87150:function(e,t,n){t.Z=n.p+"assets/images/Screenshot-2017-09-12-06.12.25-dfb49a1f05a2a9cdc3e6b712ee8f3a65.png"},94189:function(e,t,n){t.Z=n.p+"assets/images/Screenshot-2017-09-12-06.35.48-14c58588c72bbf3e97fc946922bc9ff4.png"}}]);