"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[80222],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,y=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return r?o.createElement(y,a(a({ref:t},u),{},{components:r})):o.createElement(y,a({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20853:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],l={title:"Directory.Build.props: C# 9 for all your projects",authors:"johnnyreilly",tags:["Directory.Build.props","C# 9",".NET Core"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/2021/07/14/directory-build-props-c-sharp-9-for-all",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-07-14-directory-build-props-c-sharp-9-for-all/index.md",source:"@site/blog/2021-07-14-directory-build-props-c-sharp-9-for-all/index.md",title:"Directory.Build.props: C# 9 for all your projects",description:".NET Core can make use of C# 9 by making some changes to your .csproj files. There is a way to opt all projects in a solution into this behaviour in a single place, through using a Directory.Build.props file and / or a Directory.Build.targets file. Here's how to do it.",date:"2021-07-14T00:00:00.000Z",formattedDate:"July 14, 2021",tags:[{label:"Directory.Build.props",permalink:"/tags/directory-build-props"},{label:"C# 9",permalink:"/tags/c-9"},{label:".NET Core",permalink:"/tags/net-core"}],readingTime:1.935,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Directory.Build.props: C# 9 for all your projects",authors:"johnnyreilly",tags:["Directory.Build.props","C# 9",".NET Core"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"TypeScript, abstract classes, and constructors",permalink:"/2021/08/01/typescript-abstract-classes-and-constructors"},nextItem:{title:"webpack? esbuild? Why not both?",permalink:"/2021/07/11/webpack-esbuild-why-not-both"}},u={image:r(44646).Z,authorsImageUrls:[void 0]},c=[{value:"&quot;have you the good news about <code>Directory.Build.props</code>&quot;?",id:"have-you-the-good-news-about-directorybuildprops",level:2},{value:"<code>Directory.Build.props</code>: C# 9 for all",id:"directorybuildprops-c-9-for-all",level:2}],d={toc:c};function h(e){var t=e.components,l=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,".NET Core can make use of C# 9 by making some changes to your ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," files. There is a way to opt all projects in a solution into this behaviour in a ",(0,i.kt)("em",{parentName:"p"},"single")," place, through using a ",(0,i.kt)("inlineCode",{parentName:"p"},"Directory.Build.props")," file and / or a ",(0,i.kt)("inlineCode",{parentName:"p"},"Directory.Build.targets")," file. Here's how to do it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"title image showing name of post and the C# logo",src:r(44646).Z,width:"1366",height:"548"})),(0,i.kt)("h2",{id:"have-you-the-good-news-about-directorybuildprops"},'"have you the good news about ',(0,i.kt)("inlineCode",{parentName:"h2"},"Directory.Build.props"),'"?'),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/2021/07/01/c-sharp-9-azure-functions-in-process"},"I wrote recently about using C# 9 with in-process Azure Functions.")," What that amounted to, was using C# 9 with .NET Core."),(0,i.kt)("p",null,"One of the best things about blogging, is all that you get to learn along the way. After I put up that post, ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/danielearwicker"},"Daniel Earwicker")," was kind enough to send this message:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/danielearwicker/status/1412678642203828226"},(0,i.kt)("img",{alt:"title image showing name of post and the C# logo",src:r(62074).Z,width:"1200",height:"950"}))),(0,i.kt)("p",null,"I was intrigued that Daniel was able to configure all the projects in a solution to use the same approach using some strange incantations named ",(0,i.kt)("inlineCode",{parentName:"p"},"Directory.Build.props")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Directory.Build.targets"),". ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/msbuild/customize-your-build?view=vs-2019#directorybuildprops-and-directorybuildtargets"},"Microsoft describes them thusly"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Prior to MSBuild version 15, if you wanted to provide a new, custom property to projects in your solution, you had to manually add a reference to that property to every project file in the solution. Or, you had to define the property in a ",(0,i.kt)("inlineCode",{parentName:"p"},".props")," file and then explicitly import the ",(0,i.kt)("inlineCode",{parentName:"p"},".props")," file in every project in the solution, among other things."),(0,i.kt)("p",{parentName:"blockquote"},"However, now you can add a new property to every project in one step by defining it in a single file called ",(0,i.kt)("inlineCode",{parentName:"p"},"Directory.Build.props")," in the root folder that contains your source.")),(0,i.kt)("p",null,"Let's see if we can put it to use."),(0,i.kt)("h2",{id:"directorybuildprops-c-9-for-all"},(0,i.kt)("inlineCode",{parentName:"h2"},"Directory.Build.props"),": C# 9 for all"),(0,i.kt)("p",null,"So, rather than us updating each of our ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj")," files, we should be able to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Directory.Build.props")," file to sit alongside our ",(0,i.kt)("inlineCode",{parentName:"p"},".sln")," file in the root of our source code. We'll add this into the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<Project>\n <PropertyGroup>\n    \x3c!-- use C# 9 --\x3e\n    <LangVersion>9.0</LangVersion>\n </PropertyGroup>\n <ItemGroup>\n    \x3c!-- allows some C# 9 support with .NET Core 3.1 https://github.com/manuelroemer/IsExternalInit --\x3e\n    <PackageReference Include="IsExternalInit" Version="1.0.1">\n      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>\n      <PrivateAssets>all</PrivateAssets>\n    </PackageReference>\n  </ItemGroup>\n</Project>\n')),(0,i.kt)("p",null,"Now we're free to add projects into the solution, which will ",(0,i.kt)("em",{parentName:"p"},"already")," support C# 9 without us taking any further steps. It's as simple as that! Thanks to Daniel for sharing this super handy tip. \u2764\ufe0f\ud83c\udf3b"))}h.isMDXComponent=!0},62074:function(e,t,r){t.Z=r.p+"assets/images/daniel-earwicker-tweet-b6dbb17bad739ce73a14c2ff1b8dba25.png"},44646:function(e,t,r){t.Z=r.p+"assets/images/title-image-f4d154ec55b0c042155e7ef162ed258d.png"}}]);