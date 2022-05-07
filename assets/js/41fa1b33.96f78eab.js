"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[1505],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,g=h["".concat(s,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92584:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"Unit testing MVC controllers / Mocking UrlHelper",authors:"johnnyreilly",tags:["MVC","unit testing","AreaRegistration.RegisterAllAreas()","MOQ","UrlHelper"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2013/02/18/unit-testing-mvc-controllers-mocking",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-02-18-unit-testing-mvc-controllers-mocking/index.md",source:"@site/blog/2013-02-18-unit-testing-mvc-controllers-mocking/index.md",title:"Unit testing MVC controllers / Mocking UrlHelper",description:"I have put a name to my pain...",date:"2013-02-18T00:00:00.000Z",formattedDate:"February 18, 2013",tags:[{label:"MVC",permalink:"/tags/mvc"},{label:"unit testing",permalink:"/tags/unit-testing"},{label:"AreaRegistration.RegisterAllAreas()",permalink:"/tags/area-registration-register-all-areas"},{label:"MOQ",permalink:"/tags/moq"},{label:"UrlHelper",permalink:"/tags/url-helper"}],readingTime:2.445,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Unit testing MVC controllers / Mocking UrlHelper",authors:"johnnyreilly",tags:["MVC","unit testing","AreaRegistration.RegisterAllAreas()","MOQ","UrlHelper"],hide_table_of_contents:!1},prevItem:{title:"Unit testing ModelState",permalink:"/2013/03/03/unit-testing-modelstate"},nextItem:{title:"Using Expressions with Constructors",permalink:"/2013/02/13/using-expressions-with-constructors"}},c={authorsImageUrls:[void 0]},p=[{value:"I have put a name to my pain...",id:"i-have-put-a-name-to-my-pain",level:2},{value:"Getting disillusioned",id:"getting-disillusioned",level:2},{value:"MvcMockControllers updated",id:"mvcmockcontrollers-updated",level:2},{value:"What I want to test",id:"what-i-want-to-test",level:2},{value:"Enough of the waffle - show me a unit test",id:"enough-of-the-waffle---show-me-a-unit-test",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"i-have-put-a-name-to-my-pain"},"I have put a name to my pain..."),(0,i.kt)("p",null,"And it is unit testing ASP.Net MVC controllers."),(0,i.kt)("p",null,"Well perhaps that's unfair. I have no problem unit testing MVC controllers.... ",(0,i.kt)("strong",{parentName:"p"},"until"),' it comes to making use of the "innards" of MVC. Let me be more specific. This week I had a controller action that I needed to test. It looked a little like this:'),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/4959924.js?file=DemoController.cs"}),(0,i.kt)("p",null,"Looks fine right? It's an action that takes a simple object as an argument. That's ok. It returns a JsonResult. No worries. The JsonResult consists of an anonymous class. De nada. The anonymous class has one property that is driven by the controllers ",(0,i.kt)("inlineCode",{parentName:"p"},"UrlHelper"),". Yeah that shouldn't be an issue... ",(0,i.kt)("strong",{parentName:"p"},"Hold your horses sunshine - you're going nowhere!")),(0,i.kt)("h2",{id:"getting-disillusioned"},"Getting disillusioned"),(0,i.kt)("p",null,"Yup, the minute you start pumping in asserts around that ",(0,i.kt)("inlineCode",{parentName:"p"},"UrlHelper")," driven property you're going to be mighty disappointed. What, you didn't expect the result to be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"? Damn shame."),(0,i.kt)("p",null,"Despite ",(0,i.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/magazine/dd942838.aspx"},"articles"),' on MSDN about how the intention is for MVC to be deliberately testable the sad fact of the matter is that there is a yawning hole around the testing support for controllers in ASP.Net MVC. Whenever you try to test something that makes use of controller "gubbins" you have ',(0,i.kt)("strong",{parentName:"p"},"serious")," problems. And unfortunately I didn't find anyone out there who could offer the whole solution."),(0,i.kt)("p",null,"After what I can best describe as a day of pain I found a way to scratch my particular itch. I found a way to write unit tests for controllers that made use of UrlHelper. As a bonus I managed to include the unit testing of Routes and Areas (well kind of) too."),(0,i.kt)("h2",{id:"mvcmockcontrollers-updated"},"MvcMockControllers updated"),(0,i.kt)("p",null,"This solution is heavily based on the work of Scott Hanselman who ",(0,i.kt)("a",{parentName:"p",href:"http://www.hanselman.com/blog/ASPNETMVCSessionAtMix08TDDAndMvcMockHelpers.aspx"},"wrote and blogged about ",(0,i.kt)("inlineCode",{parentName:"a"},"MvcMockHelpers"))," back in 2008. Essentially I've taken this and tweaked it so I could achieve my ends. My version of ",(0,i.kt)("inlineCode",{parentName:"p"},"MvcMockHelpers")," looks a little like this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/4959924.js?file=MvcMockHelpers.cs"}),(0,i.kt)("h2",{id:"what-i-want-to-test"},"What I want to test"),(0,i.kt)("p",null,"I want to be able to unit test the controller ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," method I mentioned earlier. This method calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"Action")," method on the controllers ",(0,i.kt)("inlineCode",{parentName:"p"},"Url")," member (which is, in turn, a ",(0,i.kt)("inlineCode",{parentName:"p"},"UrlHelper"),") to generate a URL for passing pack to the client. The URL generated should fit with the routing mechanism I have set up. In this case the route we expect a URL for was mapped by the following area registration:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/4959924.js?file=DemoAreaRegistration.cs"}),(0,i.kt)("h2",{id:"enough-of-the-waffle---show-me-a-unit-test"},"Enough of the waffle - show me a unit test"),(0,i.kt)("p",null,"Now to the meat; here's a unit test which demonstrates how this is used:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/4959924.js?file=UnitTestingAnAreaUsingUrlHelper.cs"}),(0,i.kt)("p",null,"Let's go through this unit test and breakdown what's happening:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Arrange"),(0,i.kt)("li",{parentName:"ol"},"Act"),(0,i.kt)("li",{parentName:"ol"},"Assert")),(0,i.kt)("p",null,"The most interesting thing you'll note is the controller's UrlHelper is now generating a URL as we might have hoped. The URL is generated making use of our routing, yay! Finally we're also managing to unit test a route registered by our area."))}m.isMDXComponent=!0}}]);