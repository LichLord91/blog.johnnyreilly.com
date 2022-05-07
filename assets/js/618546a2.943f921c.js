"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[56473],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96958:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"MVC 3 meet Dictionary",authors:"johnnyreilly",tags:["MVC 3","Dictionary"],hide_table_of_contents:!1},s=void 0,c={permalink:"/2012/10/22/mvc-3-meet-dictionary",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-10-22-mvc-3-meet-dictionary/index.md",source:"@site/blog/2012-10-22-mvc-3-meet-dictionary/index.md",title:"MVC 3 meet Dictionary",description:"Documenting a JsonValueProviderFactory Gotcha",date:"2012-10-22T00:00:00.000Z",formattedDate:"October 22, 2012",tags:[{label:"MVC 3",permalink:"/tags/mvc-3"},{label:"Dictionary",permalink:"/tags/dictionary"}],readingTime:2.66,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"MVC 3 meet Dictionary",authors:"johnnyreilly",tags:["MVC 3","Dictionary"],hide_table_of_contents:!1},prevItem:{title:"XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML",permalink:"/2012/11/02/xsdxml-schema-generator-xsdexe-taking"},nextItem:{title:"Using Web Optimization with MVC 3",permalink:"/2012/10/05/using-web-optimization-with-mvc-3"}},u={authorsImageUrls:[void 0]},p=[{value:"Documenting a JsonValueProviderFactory Gotcha",id:"documenting-a-jsonvalueproviderfactory-gotcha",level:2},{value:"The Problem",id:"the-problem",level:2},{value:"The Workaround",id:"the-workaround",level:2},{value:"Summary and a PS",id:"summary-and-a-ps",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"documenting-a-jsonvalueproviderfactory-gotcha"},"Documenting a JsonValueProviderFactory Gotcha"),(0,i.kt)("p",null,"About a year ago I was involved in the migration of an ASP.NET WebForms application over to MVC 3. We'd been doing a lot of AJAX-y / Single Page Application-y things in the project and had come to the conclusion that MVC might be a slightly better fit since we intended to continue down this path."),(0,i.kt)("p",null,"During the migration we encountered a bug in MVC 3 concerning Dictionary deserialization. This bug has subsequently tripped me up a few more times as I failed to remember the nature of the problem correctly. So I've written the issue up here as an aide to my own lamentable memory."),(0,i.kt)("p",null,"Before I begin I should say that the problem ","*",(0,i.kt)("u",null,"has been resolved in MVC 4")),(0,i.kt)("p",null,"*",". However given that I imagine many MVC 3 projects will not upgrade instantly there's probably some value in documenting the issue (and how to work around it). By the way, you can see my initial plea for assistance in ",(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/q/6881440/761388"},"this StackOverflow question"),"."),(0,i.kt)("h2",{id:"the-problem"},"The Problem"),(0,i.kt)("p",null,"The problem is that deserialization of Dictionary objects does not behave in the expected and desired fashion. When you fire off a dictionary it arrives at your endpoint as the enormously unhelpful ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". To see this for yourself you can try using this JavaScript:"),(0,i.kt)("script",{src:"https://gist.github.com/3931778.js?file=PostDictionaryTest.js"}),(0,i.kt)("p",null,"With this C#:"),(0,i.kt)("script",{src:"https://gist.github.com/3931778.js?file=HomeController.cs"}),(0,i.kt)("p",null,"You get a null ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," dictionary."),(0,i.kt)("p",null,"After a long time googling around on the topic I eventually discovered, much to my surprise, that I was actually tripping over a bug in MVC 3. It was filed by ",(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/users/29407/darin-dimitrov"},"Darin Dimitrov")," of Stack Overflow fame and I found details about it filed as an official bug ",(0,i.kt)("a",{parentName:"p",href:"http://connect.microsoft.com/VisualStudio/feedback/details/636647/make-jsonvalueproviderfactory-work-with-dictionary-types-in-asp-net-mvc"},"here"),". To quote Darin:"),(0,i.kt)("p",null,'"',(0,i.kt)("em",{parentName:"p"},"The System.Web.Mvc.JsonValueProviderFactory introduced in ASP.NET MVC 3 enables action methods to send and receive JSON-formatted text and to model-bind the JSON text to parameters of action methods. Unfortunately it doesn't work with dictionaries"),'"'),(0,i.kt)("h2",{id:"the-workaround"},"The Workaround"),(0,i.kt)("p",null,"My colleague found a workaround for the issue ",(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/a/5397743/761388"},"here"),". There are 2 parts to this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Dictionaries in JavaScript are simple JavaScript Object Literals. In order to workaround this issue it is necessary to ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON.stringify")," our Dictionary / JOL before sending it to the endpoint. This is done so a string can be picked up at the endpoint."),(0,i.kt)("li",{parentName:"ol"},"The signature of your action is switched over from a Dictionary reference to a string reference. Deserialization is then manually performed back from the string to a Dictionary within the Action itself.")),(0,i.kt)("p",null,"I've adapted my example from earlier to demonstrate this; first the JavaScript:"),(0,i.kt)("script",{src:"https://gist.github.com/3931778.js?file=PostDictionaryTestWorkaround.js"}),(0,i.kt)("p",null,"Then the C#:"),(0,i.kt)("script",{src:"https://gist.github.com/3931778.js?file=HomeControllerWorkaround.cs"}),(0,i.kt)("p",null,"And now we're able to get a dictionary."),(0,i.kt)("h2",{id:"summary-and-a-ps"},"Summary and a PS"),(0,i.kt)("p",null,"So that's it; a little unglamourous but this works. I'm slightly surprised that that wasn't picked up before MVC 3 was released but at least it's been fixed for MVC 4. I look forward to this blog post being irrelevant and out of date \u263a."),(0,i.kt)("p",null,"For what it's worth in my example above we're using the trusty old ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Web.Script.Serialization.JavaScriptSerializer")," to perform deserialization. My preference is actually to use ",(0,i.kt)("a",{parentName:"p",href:"http://james.newtonking.com/projects/json-net.aspx"},"JSON.Nets")," implementation but for the sake of simplicity I went with .NETs internal one here. To be honest, either is fine to my knowledge."))}d.isMDXComponent=!0}}]);