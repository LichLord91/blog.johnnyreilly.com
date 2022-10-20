"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[72809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"How to attribute encode a PartialView in MVC (Razor)",authors:"johnnyreilly",tags:["asp.net mvc","encode","PartialView","razor","attribute"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2012/08/24/how-to-attribute-encode-partialview-in",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-08-24-how-to-attribute-encode-partialview-in/index.md",source:"@site/blog/2012-08-24-how-to-attribute-encode-partialview-in/index.md",title:"How to attribute encode a PartialView in MVC (Razor)",description:"This post is plagiarism. But I'm plagiarising myself so I don't feel too bad.",date:"2012-08-24T00:00:00.000Z",formattedDate:"August 24, 2012",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"encode",permalink:"/tags/encode"},{label:"PartialView",permalink:"/tags/partial-view"},{label:"razor",permalink:"/tags/razor"},{label:"attribute",permalink:"/tags/attribute"}],readingTime:2.42,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"How to attribute encode a PartialView in MVC (Razor)",authors:"johnnyreilly",tags:["asp.net mvc","encode","PartialView","razor","attribute"],hide_table_of_contents:!1},prevItem:{title:"Globalize and jQuery Validation",permalink:"/2012/09/06/globalize-and-jquery-validate"},nextItem:{title:"ClosedXML - the real SDK for Excel",permalink:"/2012/08/16/closedxml-real-sdk-for-excel"}},u={authorsImageUrls:[void 0]},p=[{value:"The Question",id:"the-question",level:2},{value:"The Answer",id:"the-answer",level:2},{value:"Final thoughts",id:"final-thoughts",level:2}],c={toc:p};function h(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This post is plagiarism. But I'm plagiarising myself so I don't feel too bad."),(0,a.kt)("p",null,"I posted a ",(0,a.kt)("a",o({parentName:"p"},{href:"http://stackoverflow.com/q/12093005/761388"}),"question")," on StackOverflow recently asking if there was a simple way to attribute encode a PartialView in Razor / ASP.NET MVC. I ended up answering my own question and since I thought it was a useful solution it might be worth sharing."),(0,a.kt)("h2",o({},{id:"the-question"}),"The Question"),(0,a.kt)("p",null,"In the project I was working on I was using PartialViews to store the HTML that would be rendered in a tooltip in my ASP.NET MVC application. (In case you're curious I was using the ",(0,a.kt)("a",o({parentName:"p"},{href:"http://jquerytools.org/demos/tooltip/index.html"}),"jQuery Tools library for my tooltip")," effect.)"),(0,a.kt)("p",null,"I had thought that Razor, clever beast that it is, would automatically attribute encode anything sat between quotes in my HTML. Unfortunately this doesn't appear to be the case. In the short term I was able to workaround this by using single quotation marks to encapsulate my PartialViews HTML. See below for an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-xml"}),'<div class="tooltip"\n     title=\'@Html.Partial("_MyTooltipInAPartial")\'>\n    Some content\n</div>\n')),(0,a.kt)("p",null,"Now this worked just fine but I was aware that if any PartialView needed to use single quotation marks I would have a problem. Let's say for a moment that ",(0,a.kt)("inlineCode",{parentName:"p"},"_MyTooltipInAPartial.cshtml")," contained this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-xml"}),'<span style="color:green">fjkdsjf\'lksdjdlks</span>\n')),(0,a.kt)("p",null,"Well when I used my handy little single quote workaround, the following would result:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-xml"}),'<div class="tooltip"\n     title=\'<span style="color:green">fjkdsjf\'lksdjdlks</span>\'>\n    Some content\n</div>\n')),(0,a.kt)("p",null,"Which although it doesn't show up so well in the code sample above is definite ",(0,a.kt)("em",{parentName:"p"},'"does not compute, does not compute, does not compute ',"*","LOUD EXPLOSION","*",'"')," territory."),(0,a.kt)("h2",o({},{id:"the-answer"}),"The Answer"),(0,a.kt)("p",null,"This took me back to my original intent which was to encapsulate the HTML in double quotes like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-xml"}),'<div class="tooltip"\n     title="@Html.Partial("_MyTooltipInAPartial")">\n    Some content\n</div>\n')),(0,a.kt)("p",null,"Though with the example discussed above we clearly had a problem whether we used single or double quotes. What to do?"),(0,a.kt)("p",null,"Well the answer wasn't too complicated. After a little pondering I ended up scratching my own itch by writing an HTML helper method called ",(0,a.kt)("inlineCode",{parentName:"p"},"PartialAttributeEncoded")," which made use of ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpUtility.HtmlAttributeEncode")," to HTML attribute encode a PartialView."),(0,a.kt)("p",null,"Here's the code:"),(0,a.kt)("script",{src:"https://gist.github.com/3449462.js?file=PartialExtensions.cs"}),(0,a.kt)("p",null,"Using the above helper is simplicity itself:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-xml"}),'<div class="tooltip"\n     title="@Html.PartialAttributeEncoded("_MyTooltipInAPartial")">\n    Some content\n</div>\n')),(0,a.kt)("p",null,"And, given the example I've been going through, it would provide you with this output:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-xml"}),'<div class="tooltip"\n     title="&lt;span style=&quot;color:green&quot;>fjkdsjf&#39;lksdjdlks</span>">\n    Some content\n</div>\n')),(0,a.kt)("p",null,"Now the HTML in the title attribute above might be an unreadable mess - but it's the unreadable mess you need. That's what the HTML we've been discussing looks like when it's been encoded."),(0,a.kt)("h2",o({},{id:"final-thoughts"}),"Final thoughts"),(0,a.kt)("p",null,"I was surprised that Razor didn't handle this out of the box. I wonder if this is something that will come along with a later version? It's worth saying that I experienced this issue when working on an MVC 3 application. It's possible that this issue may actually have been solved with MVC 4 already; I haven't had chance to check yet though."))}h.isMDXComponent=!0}}]);