"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[95738],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),k=r,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||a;return t?o.createElement(d,i(i({ref:n},u),{},{components:t})):o.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=k;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},33038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});t(67294);var o=t(3905);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i={title:"Web Workers, comlink, TypeScript and React",authors:"johnnyreilly",tags:["web workers","comlink","TypeScript","React"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2020/02/21/web-workers-comlink-typescript-and-react",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2020-02-21-web-workers-comlink-typescript-and-react/index.md",source:"@site/blog/2020-02-21-web-workers-comlink-typescript-and-react/index.md",title:"Web Workers, comlink, TypeScript and React",description:"JavaScript is famously single threaded. However, if you're developing for the web, you may well know that this is not quite accurate. There are Web Workers:",date:"2020-02-21T00:00:00.000Z",formattedDate:"February 21, 2020",tags:[{label:"web workers",permalink:"/tags/web-workers"},{label:"comlink",permalink:"/tags/comlink"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"React",permalink:"/tags/react"}],readingTime:9.71,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Web Workers, comlink, TypeScript and React",authors:"johnnyreilly",tags:["web workers","comlink","TypeScript","React"],hide_table_of_contents:!1},prevItem:{title:"Dual boot authentication with ASP.NET",permalink:"/2020/03/22/dual-boot-authentication-with-aspnetcore"},nextItem:{title:"From create-react-app to PWA",permalink:"/2020/01/31/from-create-react-app-to-pwa"}},p={authorsImageUrls:[void 0]},u=[{value:"A use case for a Web Worker",id:"a-use-case-for-a-web-worker",level:2},{value:"Hello <code>worker-plugin</code> and <code>comlink</code>",id:"hello-worker-plugin-and-comlink",level:2},{value:"Workerize our slow process",id:"workerize-our-slow-process",level:2},{value:"Using Web Workers in React",id:"using-web-workers-in-react",level:2}],c={toc:u};function m(e){var{components:n}=e,i=a(e,["components"]);return(0,o.kt)("wrapper",r({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JavaScript is famously single threaded. However, if you're developing for the web, you may well know that this is not quite accurate. There are ",(0,o.kt)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"}),(0,o.kt)("inlineCode",{parentName:"a"},"Web Workers")),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A worker is an object created using a constructor (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Worker()"),") that runs a named JavaScript file \u2014 this file contains the code that will run in the worker thread; workers run in another global context that is different from the current window.")),(0,o.kt)("p",null,"Given that there is a way to use other threads for background processing, why doesn't this happen all the time? Well there's a number of reasons; not the least of which is the ceremony involved in interacting with Web Workers. Consider the following example that illustrates moving a calculation into a worker:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// main.js\nfunction add2NumbersUsingWebWorker() {\n  const myWorker = new Worker('worker.js');\n\n  myWorker.postMessage([42, 7]);\n  console.log('Message posted to worker');\n\n  myWorker.onmessage = function (e) {\n    console.log('Message received from worker', e.data);\n  };\n}\n\nadd2NumbersUsingWebWorker();\n\n// worker.js\nonmessage = function (e) {\n  console.log('Worker: Message received from main script');\n  const result = e.data[0] * e.data[1];\n  if (isNaN(result)) {\n    postMessage('Please write two numbers');\n  } else {\n    const workerResult = 'Result: ' + result;\n    console.log('Worker: Posting message back to main script');\n    postMessage(workerResult);\n  }\n};\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This is not simple.")," It's hard to understand what's happening. Also, this approach only supports a single method call. I'd much rather write something that looked more like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// main.js\nfunction add2NumbersUsingWebWorker() {\n  const myWorker = new Worker('worker.js');\n\n  const total = myWorker.add2Numbers([42, 7]);\n  console.log('Message received from worker', total);\n}\n\nadd2NumbersUsingWebWorker();\n\n// worker.js\nexport function add2Numbers(firstNumber, secondNumber) {\n  const result = firstNumber + secondNumber;\n  return isNaN(result) ? 'Please write two numbers' : 'Result: ' + result;\n}\n")),(0,o.kt)("p",null,"There's a way to do this using a library made by Google called ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/GoogleChromeLabs/comlink"}),"comlink"),". This post will demonstrate how we can use this. We'll use TypeScript and webpack. We'll also examine how to integrate this approach into a React app."),(0,o.kt)("h2",r({},{id:"a-use-case-for-a-web-worker"}),"A use case for a Web Worker"),(0,o.kt)("p",null,"Let's make ourselves a TypeScript web app. We're going to use ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," for this:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"npx create-react-app webworkers-comlink-typescript-react --template typescript\n")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething.ts")," file alongside ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"export function takeALongTimeToDoSomething() {\n  console.log('Start our long running job...');\n  const seconds = 5;\n  const start = new Date().getTime();\n  const delay = seconds * 1000;\n\n  while (true) {\n    if (new Date().getTime() - start > delay) {\n      break;\n    }\n  }\n  console.log('Finished our long running job');\n}\n")),(0,o.kt)("p",null,"To ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")," add this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { takeALongTimeToDoSomething } from './takeALongTimeToDoSomething';\n\n// ...\n\nconsole.log('Do something');\ntakeALongTimeToDoSomething();\nconsole.log('Do another thing');\n")),(0,o.kt)("p",null,"When our application runs we see this behaviour:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"eager",fetchpriority:"high",src:t(87544).Z,width:"640",height:"245"})),(0,o.kt)("p",null,"The app starts and logs ",(0,o.kt)("inlineCode",{parentName:"p"},"Do something")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Start our long running job...")," to the console. It then blocks the UI until the ",(0,o.kt)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething")," function has completed running. During this time the screen is empty and unresponsive. This is a poor user experience."),(0,o.kt)("h2",r({},{id:"hello-worker-plugin-and-comlink"}),"Hello ",(0,o.kt)("inlineCode",{parentName:"h2"},"worker-plugin")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"comlink")),(0,o.kt)("p",null,"To start using comlink we're going to need to eject our ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," application. The way ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," works is by giving you a setup that handles a high percentage of the needs for a typical web app. When you encounter an unsupported use case, you can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn eject")," command to get direct access to the configuration of your setup."),(0,o.kt)("p",null,"Web Workers are not that commonly used in day to day development at present. Consequently there isn't yet a \"plug'n'play\" solution for workers supported by ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app"),". There's a number of potential ways to support this use case and you can track the various discussions happening against ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," that covers this. For now, let's eject with:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"yarn eject\n")),(0,o.kt)("p",null,"Then let's install the packages we're going to be using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/GoogleChromeLabs/worker-plugin"}),(0,o.kt)("inlineCode",{parentName:"a"},"worker-plugin"))," ","-"," this webpack plugin automatically compiles modules loaded in Web Workers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"comlink")," ","-"," this library provides the RPC-like experience that we want from our workers")),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"yarn add comlink worker-plugin\n")),(0,o.kt)("p",null,"We now need to tweak our ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"worker-plugin"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const WorkerPlugin = require('worker-plugin');\n\n// ....\n\n    plugins: [\n      new WorkerPlugin(),\n\n// ....\n")),(0,o.kt)("p",null,"Do note that there's a number of ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," statements in the ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),". You want the top level one; look out for the ",(0,o.kt)("inlineCode",{parentName:"p"},"new HtmlWebpackPlugin")," statement and place your ",(0,o.kt)("inlineCode",{parentName:"p"},"new WorkerPlugin(),")," before that."),(0,o.kt)("h2",r({},{id:"workerize-our-slow-process"}),"Workerize our slow process"),(0,o.kt)("p",null,"Now we're ready to take our long running process and move it into a worker. Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder, create a new folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-worker"),". Our worker is going to live in here. Into this folder we're going to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),'{\n  "compilerOptions": {\n    "strict": true,\n    "target": "esnext",\n    "module": "esnext",\n    "lib": [\n      "webworker",\n      "esnext"\n    ],\n    "moduleResolution": "node",\n    "noUnusedLocals": true,\n    "sourceMap": true,\n    "allowJs": false,\n    "baseUrl": "."\n  }\n}\n')),(0,o.kt)("p",null,"This file exists to tell TypeScript that this is a Web Worker. Do note the ",(0,o.kt)("inlineCode",{parentName:"p"},'"lib": [ "webworker"')," usage which does exactly that."),(0,o.kt)("p",null,"Alongside the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file, let's create an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file. This will be our worker:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { expose } from 'comlink';\nimport { takeALongTimeToDoSomething } from '../takeALongTimeToDoSomething';\n\nconst exports = {\n  takeALongTimeToDoSomething,\n};\nexport type MyFirstWorker = typeof exports;\n\nexpose(exports);\n")),(0,o.kt)("p",null,"There's a number of things happening in our small worker file. Let's go through this statement by statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { expose } from 'comlink';\n")),(0,o.kt)("p",null,"Here we're importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"expose")," method from comlink. Comlink\u2019s goal is to make ",(0,o.kt)("em",{parentName:"p"},"expose"),"d values from one thread available in the other. The ",(0,o.kt)("inlineCode",{parentName:"p"},"expose")," method can be viewed as the comlink equivalent of ",(0,o.kt)("inlineCode",{parentName:"p"},"export"),". It is used to export the RPC style signature of our worker. We'll see it's use later."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { takeALongTimeToDoSomething } from '../takeALongTimeToDoSomething';\n")),(0,o.kt)("p",null,"Here we're going to import our ",(0,o.kt)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething")," function that we wrote previously, so we can use it in our worker."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"const exports = {\n  takeALongTimeToDoSomething,\n};\n")),(0,o.kt)("p",null,"Here we're creating the public facing API that we're going to expose."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"export type MyFirstWorker = typeof exports;\n")),(0,o.kt)("p",null,"We're going to want our worker to be strongly typed. This line creates a type called ",(0,o.kt)("inlineCode",{parentName:"p"},"MyFirstWorker")," which is derived from our ",(0,o.kt)("inlineCode",{parentName:"p"},"exports")," object literal."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"expose(exports);\n")),(0,o.kt)("p",null,"Finally we expose the ",(0,o.kt)("inlineCode",{parentName:"p"},"exports")," using comlink. We're done; that's our worker finished. Now let's consume it. Let's change our ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")," file to use it. Replace our import of ",(0,o.kt)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { takeALongTimeToDoSomething } from './takeALongTimeToDoSomething';\n")),(0,o.kt)("p",null,"With an import of ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap")," from comlink that creates a local ",(0,o.kt)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething")," function that wraps interacting with our worker:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { wrap } from 'comlink';\n\nfunction takeALongTimeToDoSomething() {\n  const worker = new Worker('./my-first-worker', {\n    name: 'my-first-worker',\n    type: 'module',\n  });\n  const workerApi = wrap<import('./my-first-worker').MyFirstWorker>(worker);\n  workerApi.takeALongTimeToDoSomething();\n}\n")),(0,o.kt)("p",null,"Now we're ready to demo our application using our function offloaded into a Web Worker. It now behaves like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:t(51026).Z,width:"640",height:"251"})),(0,o.kt)("p",null,"There's a number of exciting things to note here:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The application is now non-blocking. Our long running function is now not preventing the UI from updating"),(0,o.kt)("li",{parentName:"ol"},"The functionality is lazily loaded via a ",(0,o.kt)("inlineCode",{parentName:"li"},"my-first-worker.chunk.worker.js")," that has been created by the ",(0,o.kt)("inlineCode",{parentName:"li"},"worker-plugin")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"comlink"),".")),(0,o.kt)("h2",r({},{id:"using-web-workers-in-react"}),"Using Web Workers in React"),(0,o.kt)("p",null,"The example we've showed so far demostrates how you could use Web Workers and why you might want to. However, it's a far cry from a real world use case. Let's take the next step and plug our Web Worker usage into our React application. What would that look like? Let's find out."),(0,o.kt)("p",null,"We'll return ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")," back to it's initial state. Then we'll make a simple adder function that takes some values and returns their total. To our ",(0,o.kt)("inlineCode",{parentName:"p"},"takeALongTimeToDoSomething.ts")," module let's add:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"export function takeALongTimeToAddTwoNumbers(number1: number, number2: number) {\n  console.log('Start to add...');\n  const seconds = 5;\n  const start = new Date().getTime();\n  const delay = seconds * 1000;\n  while (true) {\n    if (new Date().getTime() - start > delay) {\n      break;\n    }\n  }\n  const total = number1 + number2;\n  console.log('Finished adding');\n  return total;\n}\n")),(0,o.kt)("p",null,"Let's start using our long running calculator in a React component. We'll update our ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," to use this function and create a simple adder component:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"import React, { useState } from 'react';\nimport './App.css';\nimport { takeALongTimeToAddTwoNumbers } from './takeALongTimeToDoSomething';\n\nconst App: React.FC = () => {\n  const [number1, setNumber1] = useState(1);\n  const [number2, setNumber2] = useState(2);\n\n  const total = takeALongTimeToAddTwoNumbers(number1, number2);\n\n  return (\n    <div className=\"App\">\n      <h1>Web Workers in action!</h1>\n\n      <div>\n        <label>Number to add: </label>\n        <input\n          type=\"number\"\n          onChange={(e) => setNumber1(parseInt(e.target.value))}\n          value={number1}\n        />\n      </div>\n      <div>\n        <label>Number to add: </label>\n        <input\n          type=\"number\"\n          onChange={(e) => setNumber2(parseInt(e.target.value))}\n          value={number2}\n        />\n      </div>\n      <h2>Total: {total}</h2>\n    </div>\n  );\n};\n\nexport default App;\n")),(0,o.kt)("p",null,"When you try it out you'll notice that entering a single digit locks the UI for 5 seconds whilst it adds the numbers. From the moment the cursor stops blinking to the moment the screen updates the UI is non-responsive:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:t(77670).Z,width:"544",height:"248"})),(0,o.kt)("p",null,"So far, so classic. Let's Web Workerify this!"),(0,o.kt)("p",null,"We'll update our ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-worker/index.ts")," to import this new function:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { expose } from 'comlink';\nimport {\n  takeALongTimeToDoSomething,\n  takeALongTimeToAddTwoNumbers,\n} from '../takeALongTimeToDoSomething';\n\nconst exports = {\n  takeALongTimeToDoSomething,\n  takeALongTimeToAddTwoNumbers,\n};\nexport type MyFirstWorker = typeof exports;\n\nexpose(exports);\n")),(0,o.kt)("p",null,"Alongside our ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file let's create an ",(0,o.kt)("inlineCode",{parentName:"p"},"App.hooks.ts")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { wrap, releaseProxy } from 'comlink';\nimport { useEffect, useState, useMemo } from 'react';\n\n/**\n * Our hook that performs the calculation on the worker\n */\nexport function useTakeALongTimeToAddTwoNumbers(\n  number1: number,\n  number2: number\n) {\n  // We'll want to expose a wrapping object so we know when a calculation is in progress\n  const [data, setData] = useState({\n    isCalculating: false,\n    total: undefined as number | undefined,\n  });\n\n  // acquire our worker\n  const { workerApi } = useWorker();\n\n  useEffect(() => {\n    // We're starting the calculation here\n    setData({ isCalculating: true, total: undefined });\n\n    workerApi\n      .takeALongTimeToAddTwoNumbers(number1, number2)\n      .then((total) => setData({ isCalculating: false, total })); // We receive the result here\n  }, [workerApi, setData, number1, number2]);\n\n  return data;\n}\n\nfunction useWorker() {\n  // memoise a worker so it can be reused; create one worker up front\n  // and then reuse it subsequently; no creating new workers each time\n  const workerApiAndCleanup = useMemo(() => makeWorkerApiAndCleanup(), []);\n\n  useEffect(() => {\n    const { cleanup } = workerApiAndCleanup;\n\n    // cleanup our worker when we're done with it\n    return () => {\n      cleanup();\n    };\n  }, [workerApiAndCleanup]);\n\n  return workerApiAndCleanup;\n}\n\n/**\n * Creates a worker, a cleanup function and returns it\n */\nfunction makeWorkerApiAndCleanup() {\n  // Here we create our worker and wrap it with comlink so we can interact with it\n  const worker = new Worker('./my-first-worker', {\n    name: 'my-first-worker',\n    type: 'module',\n  });\n  const workerApi = wrap<import('./my-first-worker').MyFirstWorker>(worker);\n\n  // A cleanup function that releases the comlink proxy and terminates the worker\n  const cleanup = () => {\n    workerApi[releaseProxy]();\n    worker.terminate();\n  };\n\n  const workerApiAndCleanup = { workerApi, cleanup };\n\n  return workerApiAndCleanup;\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useWorker")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"makeWorkerApiAndCleanup")," functions make up the basis of a shareable worker hooks approach. It would take very little work to paramaterise them so this could be used elsewhere. That's outside the scope of this post but would be extremely straightforward to accomplish."),(0,o.kt)("p",null,"Time to test! We'll change our ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," to use the new ",(0,o.kt)("inlineCode",{parentName:"p"},"useTakeALongTimeToAddTwoNumbers")," hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"import React, { useState } from 'react';\nimport './App.css';\nimport { useTakeALongTimeToAddTwoNumbers } from './App.hooks';\n\nconst App: React.FC = () => {\n  const [number1, setNumber1] = useState(1);\n  const [number2, setNumber2] = useState(2);\n\n  const total = useTakeALongTimeToAddTwoNumbers(number1, number2);\n\n  return (\n    <div className=\"App\">\n      <h1>Web Workers in action!</h1>\n\n      <div>\n        <label>Number to add: </label>\n        <input\n          type=\"number\"\n          onChange={(e) => setNumber1(parseInt(e.target.value))}\n          value={number1}\n        />\n      </div>\n      <div>\n        <label>Number to add: </label>\n        <input\n          type=\"number\"\n          onChange={(e) => setNumber2(parseInt(e.target.value))}\n          value={number2}\n        />\n      </div>\n      <h2>\n        Total:{' '}\n        {total.isCalculating ? (\n          <em>Calculating...</em>\n        ) : (\n          <strong>{total.total}</strong>\n        )}\n      </h2>\n    </div>\n  );\n};\n\nexport default App;\n")),(0,o.kt)("p",null,"Now our calculation takes place off the main thread and the UI is no longer blocked!"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:t(86124).Z,width:"544",height:"248"})),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"https://blog.logrocket.com/integrating-web-workers-in-a-react-app-with-comlink/"}),"This post was originally published on LogRocket.")),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://blog.logrocket.com/integrating-web-workers-in-a-react-app-with-comlink/"})),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/webworkers-comlink-typescript-react"}),"The source code for this project can be found here.")))}m.isMDXComponent=!0},77670:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/blocking-react-44a9a66bd37610a072f0e929b6998e6d.gif"},87544:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/blocking-965713b34266d77b0c9a9d03b4bdd772.gif"},86124:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/non-blocking-react-aa1265a0c8b82278544358197e1a5d67.gif"},51026:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/non-blocking-2da0a00a6cf9dda57e1b373aefb06b64.gif"}}]);