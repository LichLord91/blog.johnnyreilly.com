"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[89779],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(o),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return o?a.createElement(m,n(n({ref:t},c),{},{components:o})):a.createElement(m,n({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,n=new Array(i);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var p=2;p<i;p++)n[p]=o[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},25770:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});o(67294);var a=o(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const n={title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",authors:"johnnyreilly",tags:["Internationalization","Twitter.Bootstrap.MVC4","Globalize JS","Twitter Bootstrap"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2013/01/14/twitterbootstrapmvc4-meet-bootstrap_14",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-01-14-twitterbootstrapmvc4-meet-bootstrap_14/index.md",source:"@site/blog/2013-01-14-twitterbootstrapmvc4-meet-bootstrap_14/index.md",title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",description:"Last time I wrote about marrying up Twitter.Bootstrap.MVC4 and Bootstrap Datepicker. It came together quite nicely but when I took a more in depth look at what I'd done I discovered a problem. The brief work on regionalisation / internationalisation / localisation / globalisation / whatever it's called this week... wasn't really working. We had problems with the validation.",date:"2013-01-14T00:00:00.000Z",formattedDate:"January 14, 2013",tags:[{label:"Internationalization",permalink:"/tags/internationalization"},{label:"Twitter.Bootstrap.MVC4",permalink:"/tags/twitter-bootstrap-mvc-4"},{label:"Globalize JS",permalink:"/tags/globalize-js"},{label:"Twitter Bootstrap",permalink:"/tags/twitter-bootstrap"}],readingTime:2.91,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",authors:"johnnyreilly",tags:["Internationalization","Twitter.Bootstrap.MVC4","Globalize JS","Twitter Bootstrap"],hide_table_of_contents:!1},prevItem:{title:"Using Expressions with Constructors",permalink:"/2013/02/13/using-expressions-with-constructors"},nextItem:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker",permalink:"/2013/01/09/twitterbootstrapmvc4-meet-bootstrap"}},p={authorsImageUrls:[void 0]},c=[{value:"Going global down in Acapulco",id:"going-global-down-in-acapulco",level:2},{value:"Culture-specific script bundles",id:"culture-specific-script-bundles",level:2},{value:"Where have we got to?",id:"where-have-we-got-to",level:2},{value:"International Bootstrap Datepicker",id:"international-bootstrap-datepicker",level:2},{value:"Summary",id:"summary",level:2}],u={toc:c};function h(e){var{components:t}=e,o=i(e,["components"]);return(0,a.kt)("wrapper",r({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"/2013/01/09/twitterbootstrapmvc4-meet-bootstrap"}),"Last time")," I wrote about marrying up Twitter.Bootstrap.MVC4 and Bootstrap Datepicker. It came together quite nicely but when I took a more in depth look at what I'd done I discovered a problem. The brief work on regionalisation / internationalisation / localisation / globalisation / whatever it's called this week... wasn't really working. We had problems with the validation."),(0,a.kt)("p",null,"I also discovered that Stefan Petre's Bootstrap Datepicker appears to have been abandoned. Andrew Rowls has taken it on and created a GitHub repository for it ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/eternicode/bootstrap-datepicker"}),"here"),". Besides bug fixes he's also introduced the ability for the Bootstrap Datepicker to customised for different cultures."),(0,a.kt)("p",null,"Since these 2 subjects are linked I tackled them together and thought it might be worth writing up here. You can find the conclusion of my work in a GitHub repository I created ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/BootstrapMvcSample"}),"here"),"."),(0,a.kt)("h2",r({},{id:"going-global-down-in-acapulco"}),"Going global down in Acapulco"),(0,a.kt)("p",null,"First step in internationalising any ASP.Net web app is adding the following to the ",(0,a.kt)("inlineCode",{parentName:"p"},"web.config"),":"),(0,a.kt)("script",{src:"https://gist.github.com/4528994.js?file=web.config"}),(0,a.kt)("p",null,"Then I pulled ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/jquery/globalize"}),"Globalize")," and the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/eternicode/bootstrap-datepicker"}),"Andrew Rowls fork of Bootstrap Datepicker")," into the project (replacing Stefan's original assets). As well as this I pulled in the ",(0,a.kt)("inlineCode",{parentName:"p"},"jQuery.validate.globalize.js")," extension ",(0,a.kt)("a",r({parentName:"p"},{href:"/2012/09/06/globalize-and-jquery-validate"}),"I wrote about here"),". (This replaces some of the default jQuery Validate functionality for culture-specific functionality based on Globalize.) This extension depends on a meta tag that is generated using the following file (which also handles the serving up of the relevant JavaScript culture bundles, more of which shortly):"),(0,a.kt)("script",{src:"https://gist.github.com/4528994.js?file=GlobalizationHelpers.cs"}),(0,a.kt)("h2",r({},{id:"culture-specific-script-bundles"}),"Culture-specific script bundles"),(0,a.kt)("p",null,"With all of my dependancies in place I was now ready to press on. Since both Globalize and the new Bootstrap Datepicker come with their own culture-specific JavaScript files it seemed a good idea to make use of ASP.Nets new bundling functionality. This I did here:"),(0,a.kt)("script",{src:"https://gist.github.com/4528994.js?file=BootstrapBundleConfig.cs"}),(0,a.kt)("p",null,"The code above creates a script bundle for each culture when the application starts up. This script bundle contains the culture-specific Globalize and Bootstrap Datepicker JavaScript files. If further culture-specific components were added to the application it would make sense to include these here as well."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"_BootstrapLayout.basic.cshtml")," has been amended to make use of the new bundles and also to include a meta tag that will used to drive regionalisation:"),(0,a.kt)("script",{src:"https://gist.github.com/4528994.js?file=_BootstrapLayout.basic.cshtml"}),(0,a.kt)("p",null,"To illustrate how this works, a German user running a machine with the de-DE culture would be served up the following 2 files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"globalize.culture.de-DE.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap-datepicker.de.js"))),(0,a.kt)("h2",r({},{id:"where-have-we-got-to"}),"Where have we got to?"),(0,a.kt)("p",null,"With all this done we have now fixed the validation issues we were experiencing previously. This was done by including the Globalize library, the accept-language meta tag and the jQuery Validate Globalize extensions."),(0,a.kt)("p",null,"Besides this we've laid the groundwork for introducing internationalised datepickers by introducing Andrew Rowls fork of the Bootstrap Datepicker. That's what we'll do next..."),(0,a.kt)("h2",r({},{id:"international-bootstrap-datepicker"}),"International Bootstrap Datepicker"),(0,a.kt)("p",null,"The final steps of switching over to using a culture-specific date picker are achieved by making a change to the Scripts section in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create.cshtml")," file. The existing (and very simple) section should be replaced with this:"),(0,a.kt)("script",{src:"https://gist.github.com/4528994.js?file=Create.cshtml"}),(0,a.kt)("p",null,'The script above takes the region from the accept-language meta tag and attempts to look up an associated "language" for the Bootstrap Datepicker. If it finds one it uses it, if not then the default language of "en" / English will be used.'),(0,a.kt)("h2",r({},{id:"summary"}),"Summary"),(0,a.kt)("p",null,"In this post we:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"fixed the validation issues we'd introduced by marrying up Twitter.Bootstrap.MVC4 and the Bootstrap Datepicker"),(0,a.kt)("li",{parentName:"ol"},"switched over to using the Andrew Rowls fork of Bootstrap Datepicker and made use of the internationalisation functionality it exposes.")))}h.isMDXComponent=!0}}]);