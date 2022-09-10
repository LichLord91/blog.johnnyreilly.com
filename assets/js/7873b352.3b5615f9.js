"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[86612],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var h=2;h<i;h++)r[h]=n[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2354:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return p}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],s={title:"Optimally Serving Up JavaScript",authors:"johnnyreilly",tags:["asp.net mvc","html helper","javascript","cassette"],hide_table_of_contents:!1},l=void 0,h={permalink:"/2012/07/01/how-im-structuring-my-javascript-in-web",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-07-01-how-im-structuring-my-javascript-in-web/index.md",source:"@site/blog/2012-07-01-how-im-structuring-my-javascript-in-web/index.md",title:"Optimally Serving Up JavaScript",description:"I have occasionally done some server-side JavaScript with Rhino and Node.js but this is the exception rather than the rule. Like most folk at the moment, almost all the JavaScript I write is in a web context.",date:"2012-07-01T00:00:00.000Z",formattedDate:"July 1, 2012",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"html helper",permalink:"/tags/html-helper"},{label:"javascript",permalink:"/tags/javascript"},{label:"cassette",permalink:"/tags/cassette"}],readingTime:6.03,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Optimally Serving Up JavaScript",authors:"johnnyreilly",tags:["asp.net mvc","html helper","javascript","cassette"],hide_table_of_contents:!1},prevItem:{title:"Rendering Partial View to a String",permalink:"/2012/07/16/rendering-partial-view-to-string"},nextItem:{title:"Reasons to be Cheerful (why now is a good time to be a dev)",permalink:"/2012/06/04/reasons-to-be-cheerful-why-now-is-good"}},c={authorsImageUrls:[void 0]},p=[{value:"What are you up to?",id:"what-are-you-up-to",level:2},{value:"&quot;Render first. JS second.&quot;",id:"render-first-js-second",level:2},{value:"I want to serve you...",id:"i-want-to-serve-you",level:2},{value:"Minification - I want to serve you less...",id:"minification---i-want-to-serve-you-less",level:2},{value:"CDNs (they want to serve you)",id:"cdns-they-want-to-serve-you",level:2},{value:"TL:DR",id:"tldr",level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I have occasionally done some server-side JavaScript with Rhino and Node.js but this is the exception rather than the rule. Like most folk at the moment, almost all the JavaScript I write is in a web context."),(0,i.kt)("p",null,"Over time I've come to adopt a roughly standard approach to how I structure my JavaScript; both the JavaScript itself and how it is placed / rendered in the an HTML document. I wanted to write about the approach I'm using. Partly just to document the approach but also because I often find writing about something crystalises my feelings on the subject in one way or another. I think that most of what I'm doing is sensible and rational but maybe as I write about this I'll come to some firmer conclusions about my direction of travel."),(0,i.kt)("h2",{id:"what-are-you-up-to"},"What are you up to?"),(0,i.kt)("p",null,"Before I get started it's probably worth mentioning the sort of web development I'm generally called to do (as this has obviously influenced my decisions)."),(0,i.kt)("p",null,"Most of my work tends to be on web applications used internally within a company. That is to say, web applications accessible on a Company intranet. Consequently, the user base for my applications tends to be smaller than the Amazons and Googles of this world. It almost invariably sits on the ASP.NET stack in some way. Either classic WebForms or MVC."),(0,i.kt)("h2",{id:"render-first-js-second"},'"Render first. JS second."'),(0,i.kt)("p",null,"I took 2 things away from ",(0,i.kt)("a",{parentName:"p",href:"http://www.stevesouders.com/blog/2010/09/30/render-first-js-second/"},"Steve Souder's article"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Async script loading is better than synchronous script loading"),(0,i.kt)("li",{parentName:"ol"},"Get your screen rendered and ","*",(0,i.kt)("strong",{parentName:"li"},"then"),"*"," execute your JavaScript")),(0,i.kt)("p",null,"I'm not doing any async script loading as yet; although I am thinking of giving it a try at some point. In terms of choosing a loader I'll probably give RequireJS first crack of the whip (purely as it looks like most people are tending it's direction and that can't be without reason)."),(0,i.kt)("p",null,"However - it seems that the concept of async script loading is kind of conflict with one of the other tenets of web wisdom: script bundling. Script bundling, if you're not already aware, is the idea that you should combine all your scripts into a single file and then just serve that. This prevents multiple HTTP requests as each script loads in. Async script loading is obviously okay with multiple HTTP requests, presumably because of the asynchronous non-blocking pattern of loading. So. 2 different ideas. And there's further movement on this front right now as ",(0,i.kt)("a",{parentName:"p",href:"http://www.hanselman.com/blog/VisualStudio2012RCIsReleasedTheBigWebRollup.aspx"},"Microsoft are baking in script bundling to .NET 4.5"),"."),(0,i.kt)("p",null,'Rather than divide myself between these 2 horses I have at the moment tried to follow the "JS second" part of this advice in my own (perhaps slightly old fashioned) way...'),(0,i.kt)("h2",{id:"i-want-to-serve-you"},"I want to serve you..."),(0,i.kt)("p",null,"I have been making sure that scripts are the last thing served to the screen by using a customised version of ",(0,i.kt)("a",{parentName:"p",href:"http://frugalcoder.us/post/2009/06/29/Handling-Scripts-in-ASPNet-MVC.aspx"},"Michael J. Ryan's HtmlHelper"),". This lovely helper allows you to add script references as required from a number of different sources (layout page, view, partial view etc - even the controller if you so desired). It's simple to control the ordering of scripts by allowing you to set a priority for each script which determines the render order."),(0,i.kt)("p",null,"Then as a final step before rendering the ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;/body&gt;")," tag the scripts can be rendered in one block. By this point the web page is rendered visually and a marginal amount of blocking is, in my view, acceptable."),(0,i.kt)("p",null,"If anyone is curious - the class below is my own version of Michael's helper. My contribution is the go faster stripes relating to the caching suffix and the ability to specify dependancies using script references rather than using numeric priority mechanism):"),(0,i.kt)("script",{src:"https://gist.github.com/3019159.js?file=ScriptExtensions.cs"}),(0,i.kt)("h2",{id:"minification---i-want-to-serve-you-less"},"Minification - I want to serve you less..."),(0,i.kt)("p",null,"Another tweak I made to the script helper meant that when compiling either the debug or production (minified) versions of common JS files will be included if available. This means in a production environment the users get minified JS files so faster loading. And in a development environment we get the full JS files which make debugging more straightforward."),(0,i.kt)("p",null,"What I haven't started doing is minifying my own JS files as yet. I know I'm being somewhat inconsistent here by sometimes serving minified files and sometimes not. I'm not proud. Part of my rationale for this that since most of my users use my apps on a daily basis they will for the most part be using cached JS files. Obviously there'll be slightly slower load times the first time they go to a page but nothing that significant I hope."),(0,i.kt)("p",null,"I have thought of starting to do my own minification as a build step but have held off for now. Again this is something being baked into .NET 4.5; another reason why I have held off doing this a different way for now."),(0,i.kt)("p",null,"Update"),(0,i.kt)("p",null,"It now looks like this Microsofts optimisations have become ",(0,i.kt)("a",{parentName:"p",href:"http://nuget.org/packages/Microsoft.AspNet.Web.Optimization"},"this Nuget package"),". It's early days (well it was released on 15th August 2012 and I'm writing this on the 16th) but I think this looks not to be tied to MVC 4 or .NET 4.5 in which case I could use it in my current MVC 3 projects. I hope so..."),(0,i.kt)("p",null,"By the way there's a ",(0,i.kt)("a",{parentName:"p",href:"http://www.pluralsight.com/training/Courses/TableOfContents/mvc4#mvc4-m3-optimization"},"nice rundown of how to use this by K. Scott Allen of Pluralsight"),". It's fantastic. Recommended."),(0,i.kt)("p",null,"Update 2"),(0,i.kt)("p",null,"Having done a little asking around I now understand that this ","*",(0,i.kt)("strong",{parentName:"p"},"can"),"*"," be used with MVC 3 / .NET 4.0. Excellent!"),(0,i.kt)("p",null,"One rather nice alternative script serving mechanism I've seen (but not yet used) is Andrew Davey's ",(0,i.kt)("a",{parentName:"p",href:"http://getcassette.net"},"Cassette")," which I mean to take for a test drive soon. This looks fantastic (and is available as a ",(0,i.kt)("a",{parentName:"p",href:"http://nuget.org/packages/Cassette"},"Nuget package")," ","-"," 10 points!)."),(0,i.kt)("h2",{id:"cdns-they-want-to-serve-you"},"CDNs (they want to serve you)"),(0,i.kt)("p",null,"I've never professionally made use of CDNs at all. There are ",(0,i.kt)("a",{parentName:"p",href:"http://encosia.com/3-reasons-why-you-should-let-google-host-jquery-for-you/"},"clearly good reasons why you should")," but most of those good reasons relate most to public facing web apps."),(0,i.kt)("p",null,"As I've said, the applications I tend to work on sit behind firewalls and it's not always guaranteed what my users can see from the grand old world of web beyond. (Indeed what they see can change on hour by hour basis sometimes...) Combined with that, because my apps are only accessible by a select few I don't face the pressure to reduce load on the server that public web apps can face."),(0,i.kt)("p",null,"So while CDN's are clearly a good thing. I don't use them at present. And that's unlikely to change in the short term."),(0,i.kt)("h2",{id:"tldr"},"TL:DR"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"I don't use CDNs - they're clearly useful but they don't suit my particular needs"),(0,i.kt)("li",{parentName:"ol"},"I serve each JavaScript file individually just before the body tag. I don't bundle."),(0,i.kt)("li",{parentName:"ol"},"I don't minify my own scripts (though clearly it wouldn't be hard) but I do serve the minified versions of 3rd party libraries (eg jQuery) in a Production environment."),(0,i.kt)("li",{parentName:"ol"},"I don't use async script loaders at present. I may in future; we shall see.")),(0,i.kt)("p",null,"I expect some of the above may change (well, possibly not point #1) but this general approach is working well for me at present."),(0,i.kt)("p",null,"I haven't touched at all on how I'm structuring my JavaScript code itself. Perhaps next time."))}d.isMDXComponent=!0}}]);