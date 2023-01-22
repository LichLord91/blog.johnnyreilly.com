"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[1202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,m=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>h});n(67294);var o=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const r={title:"Getting started with the Web Monetization API",authors:"johnnyreilly",tags:["Web Monetization"],image:"./title-image.png",description:"The Web Monetization API is a browser API streams payment from the browser to the website. This post walks through getting started adding it to a site.",hide_table_of_contents:!1},l=void 0,s={permalink:"/2022/10/20/web-monetization-api",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-10-20-web-monetization-api/index.md",source:"@site/blog/2022-10-20-web-monetization-api/index.md",title:"Getting started with the Web Monetization API",description:"The Web Monetization API is a browser API streams payment from the browser to the website. This post walks through getting started adding it to a site.",date:"2022-10-20T00:00:00.000Z",formattedDate:"October 20, 2022",tags:[{label:"Web Monetization",permalink:"/tags/web-monetization"}],readingTime:7.675,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Getting started with the Web Monetization API",authors:"johnnyreilly",tags:["Web Monetization"],image:"./title-image.png",description:"The Web Monetization API is a browser API streams payment from the browser to the website. This post walks through getting started adding it to a site.",hide_table_of_contents:!1},prevItem:{title:"Debugging Azure Functions in VS Code on Mac OS",permalink:"/2022/11/11/debugging-azure-functions-vs-code-mac-os"},nextItem:{title:"Bicep: Static Web Apps and Linked Backends",permalink:"/2022/10/14/bicep-static-web-apps-linked-backends"}},p={image:n(76011).Z,authorsImageUrls:[void 0]},h=[{value:"The Web Monetization API",id:"the-web-monetization-api",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Uphold",id:"uphold",level:2},{value:"Payment pointer",id:"payment-pointer",level:2},{value:"Monetization link tag",id:"monetization-link-tag",level:2},{value:"Docusaurus link tag: updated 30/10/2022",id:"docusaurus-link-tag-updated-30102022",level:2},{value:"Hello world Web Monetization API?",id:"hello-world-web-monetization-api",level:2},{value:"Coil",id:"coil",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:h};function u(e){var{components:t}=e,r=i(e,["components"]);return(0,o.kt)("wrapper",a({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Web Monetization API is a JavaScript browser API that allows the creation of a payment stream from the user agent to the website. This post walks through getting started adding it to a site."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Web Monetization API - getting started&quot; with the Web Monetization logo",src:n(76011).Z,width:"800",height:"450"})),(0,o.kt)("h2",a({},{id:"the-web-monetization-api"}),"The Web Monetization API"),(0,o.kt)("p",null,"Over the summer I attended the ",(0,o.kt)("a",a({parentName:"p"},{href:"https://halfstackconf.com/newquay/"}),"HalfStack at the Beach")," conference and heard a talk from ",(0,o.kt)("a",a({parentName:"p"},{href:"https://twitter.com/avolakatos"}),"Alex Lakatos")," on the Web Monetization API. I hadn't heard about this API previously; it turns out it is a new way to monetize a website. My own blog already featured a ",(0,o.kt)("a",a({parentName:"p"},{href:"https://www.buymeacoffee.com/qUBm0Wh"}),"Buy Me a Coffee")," link, which allows generous people to send me small amounts of money if they've found something I've written useful. The Web Monetization API appears to be that, but built into the browser and proposed as a W3C standard at the ",(0,o.kt)("a",a({parentName:"p"},{href:"https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785"}),"Web Platform Incubator Community Group"),"."),(0,o.kt)("p",null,"I was intrigued by the Web Monetization API. Alex was kind enough to share some links with me, and I decided to take it for a spin; to try out using it and to document the findings. This post is going to be exactly that. It's written from the perspective of someone who doesn't know the Web Monetization API save for what they've heard in a talk. Over the course of this post I'll try to get to know it a little better, and try to integrate it into ",(0,o.kt)("a",a({parentName:"p"},{href:"https://blog.johnnyreilly.com"}),"my blog"),". As I do that I'll share what I'm doing and how I found things; to try to provide a useful resource (and some feedback) on what adoption feels like."),(0,o.kt)("p",null,"I'll start with the ",(0,o.kt)("a",a({parentName:"p"},{href:"https://webmonetization.org/"}),"https://webmonetization.org/")," site - in there I found a ",(0,o.kt)("a",a({parentName:"p"},{href:"https://webmonetization.org/docs/getting-started"}),"quick start")," which I decided to work through."),(0,o.kt)("h2",a({},{id:"wallet"}),"Wallet"),(0,o.kt)("p",null,"The first thing to do, if you'd like to adopt Web Monetization, is ",(0,o.kt)("a",a({parentName:"p"},{href:"https://webmonetization.org/docs/getting-started#1-set-up-a-web-monetized-wallet"}),"set up a wallet"),". This allows you to receive money from people - it's a bank account essentially; one that supports integration with Web Monetization. There appeared to be two options for this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"https://wallet.uphold.com/"}),"uphold")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"https://gatehub.net/"}),"gatehub"))),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"https://webmonetization.org/docs/ilp-wallets/#digital-wallets"}),"Right now, uphold offers a greater number of features"),", so decided to create a wallet with them."),(0,o.kt)("h2",a({},{id:"uphold"}),"Uphold"),(0,o.kt)("p",null,"The signup process was pretty straightforward. I got slightly confused was seeing this prompt:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"screenshot reading &quot;How will you use Uphold? ... Trade cryptocurrencies, Currency conversion, Deposit or withdraw cryptocurrencies, Transfers between users&quot;",src:n(10741).Z,width:"891",height:"866"})),(0,o.kt)("p",null,"I wasn't entirely sure what I needed. The Web Monetization API seemed most likely to be about transfers between users, so I went with that."),(0,o.kt)("p",null,"When it asked this question:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"screenshot reading &quot;International payments/transfers Tell us where you&#39;ll be moving money. Select from the regions below.&quot;",src:n(50872).Z,width:"914",height:"981"})),(0,o.kt)("p",null,"I opted to accept all regions. After the usual signup process, I was able to see able to see my new (empty) account:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"screenshot of the dashboard of uphold with a balance of \xa30",src:n(23020).Z,width:"3001",height:"1466"})),(0,o.kt)("h2",a({},{id:"payment-pointer"}),"Payment pointer"),(0,o.kt)("p",null,'The next thing we needed to do was acquire our payment pointer. This was a little tricky to track down and eventually Alex showed me where to go. On the right hand side of the dashboard, there is an "anything to anything" section:'),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"gif of the payment pointer found in uphold",src:n(74860).Z,width:"930",height:"1474"})),(0,o.kt)("p",null,'Clicking on the "copy" button copies the payment pointer to the clipboard. I\'ll need this later. In my case that is: ',(0,o.kt)("inlineCode",{parentName:"p"},"$ilp.uphold.com/LwQQhXdpwxeJ"),"."),(0,o.kt)("p",null,'You might be looking at the payment pointer and thinking, "that looks kinda URL-y" ... And you\'d be be right! Because ',(0,o.kt)("inlineCode",{parentName:"p"},"$ilp.uphold.com/LwQQhXdpwxeJ")," is equivalent to this URL: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://ilp.uphold.com/LwQQhXdpwxeJ"),". We just swap out the ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"https://"),"."),(0,o.kt)("h2",a({},{id:"monetization-link-tag"}),"Monetization link tag"),(0,o.kt)("p",null,"The next thing to do is to make a ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag using the payment pointer. This is the tag that will tell the browser that the page supports Web Monetization. That ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag should live in every page of our Web Monetized site. The tag looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-html"}),'<link rel="monetization" href="https://ilp.uphold.com/LwQQhXdpwxeJ" />\n')),(0,o.kt)("p",null,"As you can see, the ",(0,o.kt)("inlineCode",{parentName:"p"},"href"),' attribute is the payment pointer we just acquired; in its "https" form.'),(0,o.kt)("h2",a({},{id:"docusaurus-link-tag-updated-30102022"}),"Docusaurus link tag: updated 30/10/2022"),(0,o.kt)("p",null,"The final step here would be adding this ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag to the pages served up by our site. In my case, I use Docusaurus to power my blog. To add an extra ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag with Docusaurus we need to add it to the ",(0,o.kt)("a",a({parentName:"p"},{href:"https://docusaurus.io/docs/next/seo#global-metadata"}),(0,o.kt)("inlineCode",{parentName:"a"},"docusaurus.config.js"))," file."),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("a",a({parentName:"p"},{href:"https://docusaurus.io/blog/releases/2.2#config-headtags"}),"Docusaurus 2.2 or greater")," you can use the new ",(0,o.kt)("a",a({parentName:"p"},{href:"https://docusaurus.io/docs/api/docusaurus-config#headTags"}),(0,o.kt)("inlineCode",{parentName:"a"},"headTags")," API"),". Usage looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  // ...\n  headTags: [\n    {\n      tagName: 'link',\n      attributes: {\n        rel: 'monetization',\n        href: 'https://ilp.uphold.com/LwQQhXdpwxeJ',\n      },\n    },\n    // This will become <link rel=\"monetization\" href=\"https://ilp.uphold.com/LwQQhXdpwxeJ\" /> in the generated HTML\n  ],\n  // ...\n};\n")),(0,o.kt)("p",null,"If you're using an older version of Docusaurus, you can the syntax for adding an extra ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag in the head comes in the form of a mini plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  // ...\n  plugins: [\n    // ...\n    function extraHeadTagsPlugin(context, options) {\n      return {\n        name: 'extra-head-tags-plugin',\n        injectHtmlTags({ content }) {\n          return {\n            headTags: [\n              {\n                tagName: 'link',\n                attributes: {\n                  rel: 'monetization',\n                  href: 'https://ilp.uphold.com/LwQQhXdpwxeJ',\n                },\n                // This will become <link rel=\"monetization\" href=\"https://ilp.uphold.com/LwQQhXdpwxeJ\" /> in the generated HTML\n              },\n            ],\n          };\n        },\n      };\n    },\n    // ...\n  ],\n};\n")),(0,o.kt)("p",null,"It's also worth knowing that historically the Web Monetization API used a ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," tag instead of a ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag - and that tag used the ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," prefix instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"https://"),". That tag looked like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-html"}),'<meta name="monetization" content="$ilp.uphold.com/LwQQhXdpwxeJ" />\n')),(0,o.kt)("p",null,"But the ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag is the current standard, and that's what you should look to adopt."),(0,o.kt)("h2",a({},{id:"hello-world-web-monetization-api"}),"Hello world Web Monetization API?"),(0,o.kt)("p",null,'With this done, my site is web monetized! Or at least... I think it is... What does that mean? Well, I wasn\'t entirely sure. I reached out to Alex again, showed him my site and said "does this work?" He said:'),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"screenshot of conversation with Alex on Twitter, him saying &quot;Hey John. That&#39;s it! I just sent you a little tip on uphold, if you&#39;ve set that up correctly, you&#39;ll see it in your account&quot;",src:n(45804).Z,width:"1178",height:"1449"})),(0,o.kt)("p",null,"And sure enough, I found Alex had indeed sent me the princely sum of 83 pence ($1) on Uphold... It had worked!"),(0,o.kt)("h2",a({},{id:"coil"}),"Coil"),(0,o.kt)("p",null,"It turned out that Alex had used a browser extension called ",(0,o.kt)("a",a({parentName:"p"},{href:"https://coil.com/"}),"Coil")," to send me the money. It's a browser extension that allows you to send money to websites that support Web Monetization. It's a bit like a browser based Patreon or Buy Me a Coffee. But slightly different; ",(0,o.kt)("a",a({parentName:"p"},{href:"https://help.coil.com/docs/general-info/intro-to-coil/index.html#how-is-coil-different-from-other-membership-services-like-patreon-and-flattr"}),"to quote their docs"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"With services like Patreon, you select which creators to support, then pay each creator separately, depending on the membership plans they offer. Coil streams payments in real time to any web monetized sites you visit.")),(0,o.kt)("p",null,'So people can explicitly tip a website using Coil, or they can just use Coil to browse the web and the website will get a small amount of money from Coil. For years I\'ve heard whispers of "micropayments are the missing piece of the web" - this seemed to be solving that problem and I was intrigued.'),(0,o.kt)("p",null,"I'd set up an Uphold account so I could receive money from other people. Coil is like the flipside of that; it would let me send money to other people. You need that money to come from somewhere. It turned out that I could set up a Coil account using the Uphold account I'd just created:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"screenshot of entering my uphold payment pointer into my coil account",src:n(30194).Z,width:"1161",height:"869"})),(0,o.kt)("p",null,"So that's what I did. I entered my payment pointer into Coil and now I can send money to other people's sites that support Web Monetization. But what does that look like? Well, I decided to try it out on my own site. I installed the ",(0,o.kt)("a",a({parentName:"p"},{href:"https://coil.com/"}),"Coil browser extension")," and then went to my site and gave it a whirl:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"GIF of tipping myself $1 using Coil",src:n(24205).Z,width:"2294",height:"1150"})),(0,o.kt)("p",null,"I went to my blog and sure enough, I was able to send a tip to myself. When I flipped over to my Uphold account, I could see that the money was on its way!"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"screenshot of uphold including details of an incoming payment of $1 or 93 pence",src:n(56946).Z,width:"912",height:"826"})),(0,o.kt)("p",null,"Just as Alex had been able to send me $1 on September 4th, I was able to send myself $1 on September 10th! (Incidentally, the shift in amount from 83 pence to 93 pence between transactions is purely due to the changing value exchange rate between GBP and USD. At present the Pound is decreasing in value against the Dollar, so the amount of money I received in GBP when I tipped myself $1 worked out to be more than when Alex did.)"),(0,o.kt)("h2",a({},{id:"conclusion"}),"Conclusion"),(0,o.kt)("p",null,"In this post we have got to know the Web Monetization API, we've used it to monetize our own site and we've used it to tip ourselves. We've also seen how Coil works and how it can be used to tip other people's sites. I'm excited to see how this develops. It feels like a way to support people who are making things we care about on the web."),(0,o.kt)("p",null,"Thanks so much to ",(0,o.kt)("a",a({parentName:"p"},{href:"https://twitter.com/avolakatos"}),"Alex Lakatos")," for telling me about this in the first place and for answering all my questions!"),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"https://blog.logrocket.com/getting-started-web-monetization-api/"}),"This post was originally published on LogRocket.")),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://blog.logrocket.com/getting-started-web-monetization-api/"})))}u.isMDXComponent=!0},74860:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/payment-pointer-ae4a756850e4fca7d32f296dad9e620e.gif"},45804:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-am-i-doing-it-right-alex-27c651fd0053f432b137cc2805b51005.webp"},30194:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-setting-up-coil-960e3802a49e0125ba13368ea66bb74e.png"},23020:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-uphold-dashboard-47ca0fa7370a47ed44ef05721bcdc244.webp"},56946:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-uphold-incoming-tip-e3bd13660b7ff467938c06d395f82a39.webp"},10741:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-uphold-purpose-56af442e7a5211cc2f724f41757cfbfe.webp"},50872:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-uphold-transfers-75d99c6d7c54a17c5170d639c7b5bf66.webp"},24205:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tipping-with-coil-069f1e7a97b6d99d7bb342e0914990d4.gif"},76011:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/title-image-028eb91096f498f5204b8093116968ed.png"}}]);