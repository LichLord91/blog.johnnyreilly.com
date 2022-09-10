"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[70971],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6419:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],s={title:"Make Microsoft.Identity.Web respond with 403 forbidden instead of a 302 redirect",authors:"johnnyreilly",tags:["Microsoft.Identity.Web","OnRedirectToAccessDenied","Azure AD","Azure Active Directory","redirect","ASP.NET"],image:"./Forbidden.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/2020/12/21/how-to-make-azure-ad-403",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2020-12-21-how-to-make-azure-ad-403/index.md",source:"@site/blog/2020-12-21-how-to-make-azure-ad-403/index.md",title:"Make Microsoft.Identity.Web respond with 403 forbidden instead of a 302 redirect",description:"By default Microsoft.Identity.Web responds to unauthorized requests with a 302 (redirect). Do you want a 403 (forbidden) instead? Here's how.",date:"2020-12-21T00:00:00.000Z",formattedDate:"December 21, 2020",tags:[{label:"Microsoft.Identity.Web",permalink:"/tags/microsoft-identity-web"},{label:"OnRedirectToAccessDenied",permalink:"/tags/on-redirect-to-access-denied"},{label:"Azure AD",permalink:"/tags/azure-ad"},{label:"Azure Active Directory",permalink:"/tags/azure-active-directory"},{label:"redirect",permalink:"/tags/redirect"},{label:"ASP.NET",permalink:"/tags/asp-net"}],readingTime:2.715,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Make Microsoft.Identity.Web respond with 403 forbidden instead of a 302 redirect",authors:"johnnyreilly",tags:["Microsoft.Identity.Web","OnRedirectToAccessDenied","Azure AD","Azure Active Directory","redirect","ASP.NET"],image:"./Forbidden.png",hide_table_of_contents:!1},prevItem:{title:"dotnet-format: Prettier your C# with lint-staged & husky",permalink:"/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged"},nextItem:{title:"Nullable reference types; CSharp's very own strictNullChecks",permalink:"/2020/12/20/nullable-reference-types-csharp-strictnullchecks"}},u={image:n(19799).Z,authorsImageUrls:[void 0]},d=[{value:"Give us <code>403</code>",id:"give-us-403",level:2},{value:"Extra customisation bonus points",id:"extra-customisation-bonus-points",level:2}],p={toc:d};function h(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default ",(0,i.kt)("inlineCode",{parentName:"p"},"Microsoft.Identity.Web")," responds to unauthorized requests with a 302 (redirect). Do you want a 403 (forbidden) instead? Here's how."),(0,i.kt)("p",null,"If you're using the tremendous ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-app-configuration?tabs=aspnetcore"},"Azure Active Directory for authentication with ASP.NET")," then there's a good chance you're using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAD/microsoft-identity-web"},(0,i.kt)("inlineCode",{parentName:"a"},"Microsoft.Identity.Web"))," library. It's this that allows us to drop the following statement into the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," method of our ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddMicrosoftIdentityWebAppAuthentication(Configuration);\n")),(0,i.kt)("p",null,"Which (combined with configuration in our ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," files) hooks us up with Azure AD for authentication. This is 95% awesome. The 5% is what we're here for. Here's a screenshot of the scenario that troubles us:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"a screenshot of Chrome Devtools showing a 302",src:n(10033).Z,width:"2326",height:"1090"})),(0,i.kt)("p",null,"We've made a request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/WeatherForecast"),"; a secured endpoint (a controller decorated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorize")," attribute). We're authenticated; the app knows who we are. But we're not authorized / allowed to access this endpoint. We don't have permission. The HTTP specification caters directly for this scenario with ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-6.5.3"},"status code ",(0,i.kt)("inlineCode",{parentName:"a"},"403 Forbidden")),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The 403 (Forbidden) status code indicates that the server understood the request but refuses to authorize it.")),(0,i.kt)("p",null,"However, ",(0,i.kt)("inlineCode",{parentName:"p"},"Microsoft.Identity.Web")," is ploughing another furrow. Instead of returning ",(0,i.kt)("inlineCode",{parentName:"p"},"403"),", it's returning ",(0,i.kt)("inlineCode",{parentName:"p"},"302 Found")," and redirecting the browser to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://localhost:5001/Account/AccessDenied?ReturnUrl=%2FWeatherForecast"),". Now the intentions here are ",(0,i.kt)("em",{parentName:"p"},"great"),". If you wanted to implement a page in your application at that endpoint that displayed some kind of useful message it would be really useful. However, what if you want the more HTTP-y behaviour instead? In the case of a HTTP request triggered by JavaScript (typical for Single Page Applications) then this redirect isn't that helpful. JavaScript doesn't really know what to do with the ",(0,i.kt)("inlineCode",{parentName:"p"},"302")," and whilst you could code around this, it's not desirable."),(0,i.kt)("p",null,"We want ",(0,i.kt)("inlineCode",{parentName:"p"},"403")," - we don't want ",(0,i.kt)("inlineCode",{parentName:"p"},"302"),"."),(0,i.kt)("h2",{id:"give-us-403"},"Give us ",(0,i.kt)("inlineCode",{parentName:"h2"},"403")),(0,i.kt)("p",null,"You can have this behaviour by dropping the following code after your ",(0,i.kt)("inlineCode",{parentName:"p"},"services.AddMicrosoftIdentityWebAppAuthentication"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"services.Configure<CookieAuthenticationOptions>(CookieAuthenticationDefaults.AuthenticationScheme, options =>\n{\n    options.Events.OnRedirectToAccessDenied = new Func<RedirectContext<CookieAuthenticationOptions>, Task>(context =>\n    {\n        context.Response.StatusCode = StatusCodes.Status403Forbidden;\n        return context.Response.CompleteAsync();\n    });\n});\n")),(0,i.kt)("p",null,"This code hijacks the redirect to AccessDenied and transforms it into a ",(0,i.kt)("inlineCode",{parentName:"p"},"403")," instead. Tremendous! What does this look like?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"a screenshot of Chrome Devtools showing a 403",src:n(19799).Z,width:"2326",height:"1090"})),(0,i.kt)("p",null,"This is the behaviour we want!"),(0,i.kt)("h2",{id:"extra-customisation-bonus-points"},"Extra customisation bonus points"),(0,i.kt)("p",null,"You may want to have some nuance to the way you handle unauthorized requests. Because of the nature of ",(0,i.kt)("inlineCode",{parentName:"p"},"OnRedirectToAccessDenied")," this is entirely possible; you have complete access to the requests coming in which you can use to direct behaviour. To take a single example, let's say we want to direct normal browsing behaviour (AKA humans clicking about in Chrome) which is not authorized to a given screen, otherwise provide ",(0,i.kt)("inlineCode",{parentName:"p"},"403"),"s. What would that look like?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'services.Configure<CookieAuthenticationOptions>(CookieAuthenticationDefaults.AuthenticationScheme, options =>\n{\n    options.Events.OnRedirectToAccessDenied = new Func<RedirectContext<CookieAuthenticationOptions>, Task>(context =>\n    {\n        var isRequestForHtml = context.Request.Headers["Accept"].ToString().Contains("text/html");\n        if (isRequestForHtml) {\n            context.Response.StatusCode = StatusCodes.Status302Found;\n            context.Response.Headers["Location"] = "/unauthorized";\n        }\n        else {\n            context.Response.StatusCode = StatusCodes.Status403Forbidden;\n        }\n\n        return context.Response.CompleteAsync();\n    });\n});\n')),(0,i.kt)("p",null,"So above, we check the request ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept")," headers and see if they contain ",(0,i.kt)("inlineCode",{parentName:"p"},'"text/html"'),"; which we're using as a signal that the request came from a users browsing. (This may not be bulletproof; better suggestions gratefully received.) If the request does contain a ",(0,i.kt)("inlineCode",{parentName:"p"},'"text/html"``Accept')," header then we redirect the client to an ",(0,i.kt)("inlineCode",{parentName:"p"},"/unauthorized")," screen, otherwise we return ",(0,i.kt)("inlineCode",{parentName:"p"},"403")," as we did before. Super flexible and powerful!"))}h.isMDXComponent=!0},10033:function(e,t,n){t.Z=n.p+"assets/images/AccessDenied-866e6d0aebbd116986f5abf7bc358e66.png"},19799:function(e,t,n){t.Z=n.p+"assets/images/Forbidden-ac630e3747f0a12535dff55b6e5acb3b.png"}}]);