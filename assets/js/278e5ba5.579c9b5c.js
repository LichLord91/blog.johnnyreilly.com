"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[21371],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,g=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return n?i.createElement(g,a(a({ref:t},d),{},{components:n})):i.createElement(g,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return d},toc:function(){return p},default:function(){return h}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"Migrating from jquery.validate.unobtrusive.js to jQuery.Validation.Unobtrusive.Native",authors:"johnnyreilly",tags:["migrating","jquery.validate.unobtrusive.js","getting started","jQuery.Validation.Unobtrusive.Native","jQuery Validation"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2013/10/04/migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2013-10-04-migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native/index.md",source:"@site/blog/2013-10-04-migrating-from-jquery.validate.unobtrusive.js-to-jQuery.Validation.Unobtrusive.Native/index.md",title:"Migrating from jquery.validate.unobtrusive.js to jQuery.Validation.Unobtrusive.Native",description:"So, you're looking at jQuery.Validation.Unobtrusive.Native. You're thinking to yourself \"Yeah, I'd really like to use the native unobtrusive support in jQuery Validation. But I've already got this app which is using jquery.validate.unobtrusive.js \\- actually how easy is switching over?\" Well I'm here to tell you that it's pretty straightforward - here's a walkthrough of how it might be done.",date:"2013-10-04T00:00:00.000Z",formattedDate:"October 4, 2013",tags:[{label:"migrating",permalink:"/tags/migrating"},{label:"jquery.validate.unobtrusive.js",permalink:"/tags/jquery-validate-unobtrusive-js"},{label:"getting started",permalink:"/tags/getting-started"},{label:"jQuery.Validation.Unobtrusive.Native",permalink:"/tags/j-query-validation-unobtrusive-native"},{label:"jQuery Validation",permalink:"/tags/j-query-validation"}],readingTime:3.71,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Getting TypeScript Compile-on-Save and Continuous Integration to play nice",permalink:"/2013/10/30/getting-typescript-compile-on-save-and-continous-integration-to-play-nice"},nextItem:{title:"Using Bootstrap Tooltips to display jQuery Validation error messages",permalink:"/2013/08/17/using-bootstrap-tooltips-to-display"}},d={authorsImageUrls:[void 0]},p=[{value:"I need something to migrate",id:"i-need-something-to-migrate",children:[],level:2},{value:"Hit me up NuGet!",id:"hit-me-up-nuget",children:[],level:2},{value:"Migrating...",id:"migrating",children:[],level:2},{value:"Rounding off",id:"rounding-off",children:[],level:2}],c={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So, you're looking at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"},"jQuery.Validation.Unobtrusive.Native"),". You're thinking to yourself \"Yeah, I'd really like to use the native unobtrusive support in jQuery Validation. But I've already got this app which is using ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/jQuery.Validation.Unobtrusive/"},"jquery.validate.unobtrusive.js")," ","-"," actually how easy is switching over?\" Well I'm here to tell you that it's pretty straightforward - here's a walkthrough of how it might be done."),(0,o.kt)("h2",{id:"i-need-something-to-migrate"},"I need something to migrate"),(0,o.kt)("p",null,'So let\'s File > New Project ourselves a new MVC 4 application using the Internet Application template. I\'ve picked this template as I know it ships with account registration / login screens in place which make use of jquery.validate.unobtrusive.js. To demo this just run the project, click the "Log in" link and then click the "Log in" button.'),(0,o.kt)("p",null,"What you've just witnessed is jquery.validate.unobtrusive.js doing its thing. Both the ",(0,o.kt)("inlineCode",{parentName:"p"},"UserName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Password")," properties on the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginModel")," are decorated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Required")," data annotation which, in the above scenario, causes the validation to be triggered on the client thanks to MVC rendering data attributes in the HTML which jquery.validate.unobtrusive.js picks up on. The question is, how can we take the log in screen above and migrate it across to to using jQuery.Validation.Unobtrusive.Native?"),(0,o.kt)("h2",{id:"hit-me-up-nuget"},"Hit me up NuGet!"),(0,o.kt)("p",null,"Time to dive into NuGet and install jQuery.Validation.Unobtrusive.Native. We'll install the MVC 4 version using this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Install-Package jQuery.Validation.Unobtrusive.Native.MVC4\n")),(0,o.kt)("p",null,"What has this done to my project? Well 2 things"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It's upgraded jQuery Validation (",(0,o.kt)("a",{parentName:"li",href:"http://jqueryvalidation.org/"},"jquery.validate.js"),") from v1.10.0 (the version that is currently part of the MVC 4 template) to v1.11.1 (the latest and greatest jQuery Validation as of the time of writing)"),(0,o.kt)("li",{parentName:"ol"},"It's added a reference to the jQuery.Validation.Unobtrusive.Native.MVC4 assembly, like so:")),(0,o.kt)("p",null,"In case you were wondering, doing this hasn't broken the existing jquery.validate.unobtrusive.js - if you head back to the Log in screen you'll still see the same behaviour as before."),(0,o.kt)("h2",{id:"migrating"},"Migrating..."),(0,o.kt)("p",null,"We need to switch our TextBox and Password helpers over to using jQuery.Validation.Unobtrusive.Native, which we achieve by simply passing a second argument of ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"useNativeUnobtrusiveAttributes"),". So we go from this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"// ...\n@Html.TextBoxFor(m => m.UserName)\n// ...\n@Html.PasswordFor(m => m.Password)\n// ...\n")),(0,o.kt)("p",null,"To this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"// ...\n@Html.TextBoxFor(m => m.UserName, true)\n// ...\n@Html.PasswordFor(m => m.Password, true)\n// ...\n")),(0,o.kt)("p",null,"With these minor tweaks in place the natively supported jQuery Validation data attributes will be rendered into the textbox / password elements instead of the jquery.validate.unobtrusive.js ones."),(0,o.kt)("p",null,"Next lets do the JavaScript. If you take a look at the bottom of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Login.cshtml")," view you'll see this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'@section Scripts {\n    @Scripts.Render("~/bundles/jqueryval")\n}\n')),(0,o.kt)("p",null,"Which renders the following scripts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="/Scripts/jquery.unobtrusive-ajax.js"><\/script>\n<script src="/Scripts/jquery.validate.js"><\/script>\n<script src="/Scripts/jquery.validate.unobtrusive.js"><\/script>\n')),(0,o.kt)("p",null,"In our brave new world we're only going to need jquery.validate.js - so let's create ourselves a new bundle in ",(0,o.kt)("inlineCode",{parentName:"p"},"BundleConfig.cs")," which only contains that single file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'bundles.Add(new ScriptBundle("~/bundles/jqueryvalnative")\n    .Include("~/Scripts/jquery.validate.js"));\n')),(0,o.kt)("p",null,"To finish off our migrated screen we need to do 2 things. First we need to switch over the ",(0,o.kt)("inlineCode",{parentName:"p"},"Login.cshtml")," view to only render the jquery.validate.js script (in the form of our new bundle). Secondly, the other thing that jquery.validate.unobtrusive.js did was to trigger validation for the current form. So we need to do that ourselves now. So our finished Scripts section looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"@section Scripts { @Scripts.Render(\"~/bundles/jqueryvalnative\")\n<script>\n  $('form').validate();\n<\/script>\n}\n")),(0,o.kt)("p",null,"Which renders the following script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script src=\"/Scripts/jquery.validate.js\"><\/script>\n<script>\n  $('form').validate();\n<\/script>\n")),(0,o.kt)("p",null,"And, pretty much, that's it. If you run the app now and go to the Log in screen and try to log in without credentials."),(0,o.kt)("p",null,"Which is functionally exactly the same as previously. The eagle eyed will notice some styling differences but that's all it comes down to really; style. And if you were so inclined you could easily style this up as you liked using CSS and the options you can pass to jQuery Validation (in fact a quick rummage through jquery.validate.unobtrusive.js should give you everything you need)."),(0,o.kt)("h2",{id:"rounding-off"},"Rounding off"),(0,o.kt)("p",null,"Before I sign off I'd like to illustrate how little we've had to change the code to start using jQuery.Validation.Unobtrusive.Native."),(0,o.kt)("p",null,"As you see, it takes very little effort to migrate from one approach to the other. And it's ","*",(0,o.kt)("strong",{parentName:"p"},"your"),"*"," choice. If you want to have one screen that uses jQuery.Validation.Unobtrusive.Native and one screen that uses jquery.validation.unobtrusive.js then you can! Including jQuery.Validation.Unobtrusive.Native in your project gives you the ",(0,o.kt)("strong",{parentName:"p"},"option")," to use it. It doesn't force you to, you can do so as you need to and when you want to. It's down to you."))}h.isMDXComponent=!0}}]);