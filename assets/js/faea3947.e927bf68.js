"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[42487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"How to attribute encode a PartialView in MVC (Razor)",authors:"johnnyreilly",tags:["asp.net mvc","razor"],hide_table_of_contents:!1},i=void 0,s={permalink:"/2012/08/24/how-to-attribute-encode-partialview-in",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-08-24-how-to-attribute-encode-partialview-in/index.md",source:"@site/blog/2012-08-24-how-to-attribute-encode-partialview-in/index.md",title:"How to attribute encode a PartialView in MVC (Razor)",description:"This post is plagiarism. But I'm plagiarising myself so I don't feel too bad.",date:"2012-08-24T00:00:00.000Z",formattedDate:"August 24, 2012",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"razor",permalink:"/tags/razor"}],readingTime:3.185,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"How to attribute encode a PartialView in MVC (Razor)",authors:"johnnyreilly",tags:["asp.net mvc","razor"],hide_table_of_contents:!1},prevItem:{title:"Globalize and jQuery Validation",permalink:"/2012/09/06/globalize-and-jquery-validate"},nextItem:{title:"ClosedXML - the real SDK for Excel",permalink:"/2012/08/16/closedxml-real-sdk-for-excel"}},p={authorsImageUrls:[void 0]},u=[{value:"The Question",id:"the-question",level:2},{value:"The Answer",id:"the-answer",level:2},{value:"Final thoughts",id:"final-thoughts",level:2}],c={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This post is plagiarism. But I'm plagiarising myself so I don't feel too bad."),(0,a.kt)("p",null,"I posted a ",(0,a.kt)("a",r({parentName:"p"},{href:"http://stackoverflow.com/q/12093005/761388"}),"question")," on StackOverflow recently asking if there was a simple way to attribute encode a PartialView in Razor / ASP.NET MVC. I ended up answering my own question and since I thought it was a useful solution it might be worth sharing."),(0,a.kt)("h2",r({},{id:"the-question"}),"The Question"),(0,a.kt)("p",null,"In the project I was working on I was using PartialViews to store the HTML that would be rendered in a tooltip in my ASP.NET MVC application. (In case you're curious I was using the ",(0,a.kt)("a",r({parentName:"p"},{href:"http://jquerytools.org/demos/tooltip/index.html"}),"jQuery Tools library for my tooltip")," effect.)"),(0,a.kt)("p",null,"I had thought that Razor, clever beast that it is, would automatically attribute encode anything sat between quotes in my HTML. Unfortunately this doesn't appear to be the case. In the short term I was able to workaround this by using single quotation marks to encapsulate my PartialViews HTML. See below for an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'<div class="tooltip"\n     title=\'@Html.Partial("_MyTooltipInAPartial")\'>\n    Some content\n</div>\n')),(0,a.kt)("p",null,"Now this worked just fine but I was aware that if any PartialView needed to use single quotation marks I would have a problem. Let's say for a moment that ",(0,a.kt)("inlineCode",{parentName:"p"},"_MyTooltipInAPartial.cshtml")," contained this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'<span style="color:green">fjkdsjf\'lksdjdlks</span>\n')),(0,a.kt)("p",null,"Well when I used my handy little single quote workaround, the following would result:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'<div class="tooltip"\n     title=\'<span style="color:green">fjkdsjf\'lksdjdlks</span>\'>\n    Some content\n</div>\n')),(0,a.kt)("p",null,"Which although it doesn't show up so well in the code sample above is definite ",(0,a.kt)("em",{parentName:"p"},'"does not compute, does not compute, does not compute ',"*","LOUD EXPLOSION","*",'"')," territory."),(0,a.kt)("h2",r({},{id:"the-answer"}),"The Answer"),(0,a.kt)("p",null,"This took me back to my original intent which was to encapsulate the HTML in double quotes like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'<div class="tooltip"\n     title="@Html.Partial("_MyTooltipInAPartial")">\n    Some content\n</div>\n')),(0,a.kt)("p",null,"Though with the example discussed above we clearly had a problem whether we used single or double quotes. What to do?"),(0,a.kt)("p",null,"Well the answer wasn't too complicated. After a little pondering I ended up scratching my own itch by writing an HTML helper method called ",(0,a.kt)("inlineCode",{parentName:"p"},"PartialAttributeEncoded")," which made use of ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpUtility.HtmlAttributeEncode")," to HTML attribute encode a PartialView."),(0,a.kt)("p",null,"Here's the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System.Web;\nusing System.Web.Mvc;\nusing System.Web.Mvc.Html;\n\nnamespace My.Helpers\n{\n    /// <summary>\n    /// MVC HtmlHelper extension methods - html element extensions\n    /// </summary>\n    public static class PartialExtensions\n    {\n        /// <summary>\n        /// Allows a partial to be rendered within quotation marks.\n        /// I use this with jQuery tooltips where we store the tooltip HMTL within a partial.\n        /// See example usage below:\n        /// <div class="tooltip" title="@Html.PartialAttributeEncoded("_MyTooltipInAPartial")">Some content</div>\n        /// </summary>\n        /// <param name="helper"></param>\n        /// <param name="partialViewName"></param>\n        /// <param name="model"></param>\n        /// <returns></returns>\n        public static MvcHtmlString PartialAttributeEncoded(\n          this HtmlHelper helper,\n          string partialViewName,\n          object model = null\n        )\n        {\n            //Create partial using the relevant overload (only implemented ones I used)\n            var partialString = (model == null)\n                ? helper.Partial(partialViewName)\n                : helper.Partial(partialViewName, model);\n\n            //Attribute encode the partial string - note that we have to .ToString() this to get back from an MvcHtmlString\n            var partialStringAttributeEncoded = HttpUtility.HtmlAttributeEncode(partialString.ToString());\n\n            //Turn this back into an MvcHtmlString\n            var partialMvcStringAttributeEncoded = MvcHtmlString.Create(partialStringAttributeEncoded);\n\n            return partialMvcStringAttributeEncoded;\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Using the above helper is simplicity itself:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'<div class="tooltip"\n     title="@Html.PartialAttributeEncoded("_MyTooltipInAPartial")">\n    Some content\n</div>\n')),(0,a.kt)("p",null,"And, given the example I've been going through, it would provide you with this output:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'<div class="tooltip"\n     title="&lt;span style=&quot;color:green&quot;>fjkdsjf&#39;lksdjdlks</span>">\n    Some content\n</div>\n')),(0,a.kt)("p",null,"Now the HTML in the title attribute above might be an unreadable mess - but it's the unreadable mess you need. That's what the HTML we've been discussing looks like when it's been encoded."),(0,a.kt)("h2",r({},{id:"final-thoughts"}),"Final thoughts"),(0,a.kt)("p",null,"I was surprised that Razor didn't handle this out of the box. I wonder if this is something that will come along with a later version? It's worth saying that I experienced this issue when working on an MVC 3 application. It's possible that this issue may actually have been solved with MVC 4 already; I haven't had chance to check yet though."))}m.isMDXComponent=!0}}]);