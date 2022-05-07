"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[93313],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"ESLint your C# in VS Code with Roslyn Analyzers",authors:"johnnyreilly",tags:["Roslyn Analyzers","C#","VS Code","Lint","ESLint"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/2022/04/06/eslint-your-csharp-in-vs-code-with-roslyn-analyzers",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-04-06-eslint-your-csharp-in-vs-code-with-roslyn-analyzers/index.md",source:"@site/blog/2022-04-06-eslint-your-csharp-in-vs-code-with-roslyn-analyzers/index.md",title:"ESLint your C# in VS Code with Roslyn Analyzers",description:"ESLint provides a great linting experience for TypeScript and JavaScript in VS Code. The suggestions, fixes and ignore options make creating clean code a joy. A similar experience is available for C# in VS Code through Roslyn Analyzers - this post tells us more.",date:"2022-04-06T00:00:00.000Z",formattedDate:"April 6, 2022",tags:[{label:"Roslyn Analyzers",permalink:"/tags/roslyn-analyzers"},{label:"C#",permalink:"/tags/c"},{label:"VS Code",permalink:"/tags/vs-code"},{label:"Lint",permalink:"/tags/lint"},{label:"ESLint",permalink:"/tags/es-lint"}],readingTime:10.335,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ESLint your C# in VS Code with Roslyn Analyzers",authors:"johnnyreilly",tags:["Roslyn Analyzers","C#","VS Code","Lint","ESLint"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Type annotations: strong types, weakly held",permalink:"/2022/04/16/type-annotations-strong-types-weakly-held"},nextItem:{title:"Azure DevOps: consume a private artifact feed",permalink:"/2022/03/30/azure-devops-consume-private-nuget-artifact-feed"}},c={image:n(11831).Z,authorsImageUrls:[void 0]},d=[{value:"Linting and C#",id:"linting-and-c",level:2},{value:"Roslyn Analyzers",id:"roslyn-analyzers",level:2},{value:"&quot;Analyse <code>this</code>&quot;",id:"analyse-this",level:2},{value:"Now fail my build!",id:"now-fail-my-build",level:2},{value:"Categories",id:"categories",level:2},{value:"Opt out of rules",id:"opt-out-of-rules",level:2},{value:"Dial up information to warning",id:"dial-up-information-to-warning",level:2},{value:"Deactivate linting partially",id:"deactivate-linting-partially",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function g(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ESLint provides a great linting experience for TypeScript and JavaScript in VS Code. The suggestions, fixes and ignore options make creating clean code a joy. A similar experience is available for C# in VS Code through Roslyn Analyzers - this post tells us more."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"title image reading &quot;ESLint your C# in VS Code with Roslyn Analyzers&quot; with the C# and VS Code logos`",src:n(11831).Z,width:"1600",height:"900"})),(0,i.kt)("h2",{id:"linting-and-c"},"Linting and C#"),(0,i.kt)("p",null,"JavaScript and TypeScript benefit from a tremendous tooling ecosystem which allows us to simply format and lint our codebases as we're editing. Similar tooling exists for C#. ",(0,i.kt)("a",{parentName:"p",href:"/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged"},"Previously I wrote about using ",(0,i.kt)("inlineCode",{parentName:"a"},"dotnet-format")," to have a Prettier-like experience for formatting our C#"),". If that last post focussed on formatting C#; looking through the lens of ",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),", this post focusses on linting; looking through the lens of ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint"),"."),(0,i.kt)("h2",{id:"roslyn-analyzers"},"Roslyn Analyzers"),(0,i.kt)("p",null,"There's often overlap between linting and formatting tooling; and so it goes with C# as well. Linting and formatting in the .NET space make use of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet/roslyn-analyzers"},"Roslyn Analyzers"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Roslyn analyzers analyze your code for style, quality and maintainability, design and other issues. The documentation for Roslyn Analyzers can be found at docs.microsoft.com/dotnet/fundamentals/code-analysis/overview.")),(0,i.kt)("p",null,"To learn more about them, it's worth reading ",(0,i.kt)("a",{parentName:"p",href:"https://endjin.com/blog/2022/01/raising-coding-standard-dotnet-analyzers"},"the excellent piece on the topic")," by ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/idg10"},"Ian Griffiths"),"."),(0,i.kt)("h2",{id:"analyse-this"},'"Analyse ',(0,i.kt)("inlineCode",{parentName:"h2"},"this"),'"'),(0,i.kt)("p",null,"In order that we can see what the linting experience is like in VS Code, we're going to need a project to work on. We have the .NET 6 SDK installed, so we'll create ourselves a project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet new webapi -o AnalyseThis\n")),(0,i.kt)("p",null,"We have the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp"},"C# extension")," installed already, but we're getting no feedback on the code. Maybe it's already beautiful?"),(0,i.kt)("p",null,"Or maybe not. We're going to need an ",(0,i.kt)("inlineCode",{parentName:"p"},".editorconfig")," file to control all the code style settings. You can create this directly using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet")," CLI like so;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet new editorconfig\n")),(0,i.kt)("p",null,"Once this runs, it creates a file with all of the settings in with their default values. Alongside that, we need to wake VS Code up to our brave new world by setting the following in our ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "omnisharp.enableRoslynAnalyzers": true,\n  "omnisharp.enableEditorConfigSupport": true\n}\n')),(0,i.kt)("p",null,"Or alternatively, use the GUI in VS Code to set these settings directly:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of the VS Code settings screen",src:n(35525).Z,width:"1908",height:"769"})),(0,i.kt)("p",null,"It's then a good idea to turn OmniSharp off and on again, so it picks up these changes:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of the VS Code &quot;restart OmniSharp&quot;",src:n(52).Z,width:"1203",height:"126"})),(0,i.kt)("p",null,"Then, excitingly, we start to see code analysis, or linting, messages in the problems pane of VS Code:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of a first linting message and the code to which it applies",src:n(61891).Z,width:"2422",height:"552"})),(0,i.kt)("p",null,"It's possible to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet-format")," command to surface this information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet format style -v detailed --severity info --verify-no-changes\n  The dotnet runtime version is '6.0.2'.\n  Formatting code files in workspace '/workspaces/AnalyseThis.csproj'.\n    Determining projects to restore...\n  All projects are up-to-date for restore.\n  Project AnalyseThis is using configuration from '/workspaces/.editorconfig'.\n  Project AnalyseThis is using configuration from '/workspaces/obj/Debug/net6.0/AnalyseThis.GeneratedMSBuildEditorConfig.editorconfig'.\n  Project AnalyseThis is using configuration from '/usr/share/dotnet/sdk/6.0.200/Sdks/Microsoft.NET.Sdk/analyzers/build/config/analysislevel_6_default.editorconfig'.\n  Running 45 analyzers on AnalyseThis.\n/workspaces/Controllers/WeatherForecastController.cs(14,57): info IDE0052: Private member 'WeatherForecastController._logger' can be removed as the value assigned to it is never read [/workspaces/AnalyseThis.csproj]\n  Formatted code file '/workspaces/Controllers/WeatherForecastController.cs'.\n  Formatted 1 of 6 files.\n  Format complete in 7993ms.\n")),(0,i.kt)("p",null,"Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"IDE0052: Private member 'WeatherForecastController._logger' can be removed as the value assigned to it is never read")," message above."),(0,i.kt)("h2",{id:"now-fail-my-build"},"Now fail my build!"),(0,i.kt)("p",null,"This is all very exciting - we've a world of extra linting at our fingertips! But what's a touch disappointing, is that the above information isn't surfaced in my build. What if as a team we commit to a particular code style? If I can't enforce that in the build, it's likely not going to happen."),(0,i.kt)("p",null,"So what do I do? Well, the information is out there on how to do this, but it's easy to miss. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/overview#enable-on-build"},"You can find the details here"),". We update our ",(0,i.kt)("inlineCode",{parentName:"p"},"AnalyseThis.csproj")," to include an ",(0,i.kt)("inlineCode",{parentName:"p"},"EnforceCodeStyleInBuild")," setting like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n    <Nullable>enable</Nullable>\n    <ImplicitUsings>enable</ImplicitUsings>\n\n    <EnforceCodeStyleInBuild>true</EnforceCodeStyleInBuild>\n  </PropertyGroup>\n")),(0,i.kt)("p",null,"We're going to replace our exhaustive ",(0,i.kt)("inlineCode",{parentName:"p"},".editorconfig")," file with a much simpler one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build warnings)\ndotnet_analyzer_diagnostic.category-Style.severity = warning\n")),(0,i.kt)("p",null,"Do you see what we did here? We told our build to treat ",(0,i.kt)("inlineCode",{parentName:"p"},"Style")," diagnostics (lints) as warnings. Once OmniSharp picks this up, more linting messages start to appear in the problems pane of VS Code:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of more linting messages",src:n(36306).Z,width:"2261",height:"517"})),(0,i.kt)("p",null,"And what's more, if we attempt to build, guess what?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet build\nMicrosoft (R) Build Engine version 17.1.0+ae57d105c for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n  AnalyseThis -> /workspaces/AnalyseThis/bin/Debug/net6.0/AnalyseThis.dll\n\nBuild succeeded.\n\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n    6 Warning(s)\n    0 Error(s)\n\nTime Elapsed 00:00:06.53\n")),(0,i.kt)("p",null,"That's right! The same messages from the problems pane are now surfaced in our build as warnings. And we can kick it up a notch too; let's make them errors:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build errors)\ndotnet_analyzer_diagnostic.category-Style.severity = error\n")),(0,i.kt)("p",null,"Once OmniSharp catches up we see our warnings transform into errors:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of a more linting messages",src:n(53953).Z,width:"2264",height:"510"})),(0,i.kt)("p",null,"And if we build..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet build\nMicrosoft (R) Build Engine version 17.1.0+ae57d105c for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n\nBuild FAILED.\n\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n    0 Warning(s)\n    6 Error(s)\n\nTime Elapsed 00:00:04.22\n")),(0,i.kt)("p",null,"Yes! Our style diagnostics are now failing the build. This is terrific!"),(0,i.kt)("h2",{id:"categories"},"Categories"),(0,i.kt)("p",null,"It's worth pausing a second and considering the category upgrade we did here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"dotnet_analyzer_diagnostic.category-Style.severity = error\n")),(0,i.kt)("p",null,"There's a number of different categories that encapsulate groups of rules, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/categories"},"they're documented here"),". Taken from there you can see the wealth of different categories that exist:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Category"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"EditorConfig value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Design rules"),(0,i.kt)("td",{parentName:"tr",align:null},"Design rules support adherence to the .NET Framework Design Guidelines."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Design.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Documentation rules"),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation rules support writing well-documented libraries through the correct use of XML documentation comments for externally visible APIs."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Documentation.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Globalization rules"),(0,i.kt)("td",{parentName:"tr",align:null},"Globalization rules support world-ready libraries and applications."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Globalization.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Portability and interoperability rules"),(0,i.kt)("td",{parentName:"tr",align:null},"Portability rules support portability across different platforms. Interoperability rules support interaction with COM clients."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Interoperability.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Maintainability rules"),(0,i.kt)("td",{parentName:"tr",align:null},"Maintainability rules support library and application maintenance."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Maintainability.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Naming rules"),(0,i.kt)("td",{parentName:"tr",align:null},"Naming rules support adherence to the naming conventions of the .NET design guidelines."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Naming.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Performance rules"),(0,i.kt)("td",{parentName:"tr",align:null},"Performance rules support high-performance libraries and applications."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Performance.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SingleFile rules"),(0,i.kt)("td",{parentName:"tr",align:null},"Single-file rules support single-file applications."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-SingleFile.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Reliability rules"),(0,i.kt)("td",{parentName:"tr",align:null},"Reliability rules support library and application reliability, such as correct memory and thread usage."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Reliability.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Security rules"),(0,i.kt)("td",{parentName:"tr",align:null},"Security rules support safer libraries and applications. These rules help prevent security flaws in your program."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Security.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Style rules"),(0,i.kt)("td",{parentName:"tr",align:null},'Style rules support consistent code style in your codebase. These rules start with the "IDE" prefix.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Style.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Usage rules"),(0,i.kt)("td",{parentName:"tr",align:null},"Usage rules support proper usage of .NET."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Usage.severity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},'You can use this EditorConfig value to enable the following rules: IDE0051, IDE0064, IDE0076. While these rules start with "IDE", they are not technically part of the ',(0,i.kt)("inlineCode",{parentName:"td"},"Style")," category."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-CodeQuality.severity"))))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IDE0052")," information we saw when we used ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet format")," earlier is technically part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeQuality")," category. If we wanted to, we we could dial that up that category to an error like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# Default severity for analyzer diagnostics with category 'CodeQuality' (escalated to build errors)\ndotnet_analyzer_diagnostic.category-CodeQuality.severity = error\n")),(0,i.kt)("h2",{id:"opt-out-of-rules"},"Opt out of rules"),(0,i.kt)("p",null,"As it turns out, I disagree with the complaints I'm getting on the codebase right now, so I'd like to dial those down to ignore. To do that globally, you simply put configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},".editorconfig")," to reflect that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build warnings)\ndotnet_analyzer_diagnostic.category-Style.severity = error\n\ndotnet_diagnostic.IDE0008.severity = none\ndotnet_diagnostic.IDE0058.severity = none\ndotnet_diagnostic.IDE0160.severity = none\n")),(0,i.kt)("p",null,"What we're doing here is saying \"upgrade all ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/style-rules/"},"style rules")," to be errors, but ",(0,i.kt)("inlineCode",{parentName:"p"},"IDE0008"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"IDE0058")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IDE0160")," (which are style rules) - ignore those; don't tell me about them\"."),(0,i.kt)("p",null,"Now I'm not going to be bothered by those errors in future. Great."),(0,i.kt)("h2",{id:"dial-up-information-to-warning"},"Dial up information to warning"),(0,i.kt)("p",null,"If we look again at our problems pane in VS Code, we can see there's an entry there. It's not an error, it's not a warning. It's information:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of a first linting message and the code to which it applies",src:n(61891).Z,width:"2422",height:"552"})),(0,i.kt)("p",null,"Let's say we want to take that and dial it up to be a warning, such that it surfaces in the build too. We can with a simple addition to our ",(0,i.kt)("inlineCode",{parentName:"p"},".editorconfig"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build warnings)\ndotnet_analyzer_diagnostic.category-Style.severity = error\n\ndotnet_diagnostic.IDE0008.severity = none\ndotnet_diagnostic.IDE0058.severity = none\ndotnet_diagnostic.IDE0160.severity = none\n\n# Roslyn analzer surfaces this as information - we'll dial it up to a warning\ndotnet_diagnostic.IDE0052.severity = warning\n")),(0,i.kt)("p",null,"Once OmniSharp notices:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of our information now a warning",src:n(48621).Z,width:"2276",height:"157"})),(0,i.kt)("p",null,"And if we run the build, there it is!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet build\nMicrosoft (R) Build Engine version 17.1.0+ae57d105c for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(14,57): warning IDE0052: Private member 'WeatherForecastController._logger' can be removed as the value assigned to it is never read [/workspaces/AnalyseThis/AnalyseThis.csproj]\n  AnalyseThis -> /workspaces/AnalyseThis/bin/Debug/net6.0/AnalyseThis.dll\n\nBuild succeeded.\n\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(14,57): warning IDE0052: Private member 'WeatherForecastController._logger' can be removed as the value assigned to it is never read [/workspaces/AnalyseThis/AnalyseThis.csproj]\n    1 Warning(s)\n    0 Error(s)\n\nTime Elapsed 00:00:02.21\n")),(0,i.kt)("h2",{id:"deactivate-linting-partially"},"Deactivate linting partially"),(0,i.kt)("p",null,"Let's say we want to ignore that one warning. We'd like the equivalent functionality to ",(0,i.kt)("inlineCode",{parentName:"p"},"// eslint-disable-next-line"),". That doesn't exist alas. However, what does is the equivalent to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable */\n\nalert('foo');\n\n/* eslint-enable */\n")),(0,i.kt)("p",null,"In our case what we'd do is this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"#pragma warning disable\n    private readonly ILogger<WeatherForecastController> _logger;\n#pragma warning restore\n")),(0,i.kt)("p",null,"Or to be more specific:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"#pragma warning disable IDE0052\n    private readonly ILogger<WeatherForecastController> _logger;\n#pragma warning restore IDE0052\n")),(0,i.kt)("p",null,"And now we can opt out of that rule in this specific place - whilst maintaining it more generally."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"There's powerful linting tools in C#, hopefully this guide has made it easier for you to surface them, control them and apply them both to VS Code and to your build."),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/JoeyRobichaud"},"Joey Robichaud"),", ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/timheuer"},"Tim Heuer")," and ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/YoussefV1313"},"Youssef Victor")," for some excellent pointers that fed into the writing of this post. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet/roslyn/issues/60620"},"You can see the help they provided here"),"."))}g.isMDXComponent=!0},53953:function(e,t,n){t.Z=n.p+"assets/images/screenshot-extra-problems-as-errors-753de9462785f55b91272b8b0dfb9983.png"},36306:function(e,t,n){t.Z=n.p+"assets/images/screenshot-extra-problems-622e7c587e2a7dc14e3a4263d08aed77.png"},48621:function(e,t,n){t.Z=n.p+"assets/images/screenshot-information-as-warning-5e8dd5f493f8f7031ef721f1fe5d5604.png"},61891:function(e,t,n){t.Z=n.p+"assets/images/screenshot-initial-problems-d207f6c0d2dca332da0080fde9c75cd8.png"},52:function(e,t){t.Z="data:image/png;base64,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"},35525:function(e,t,n){t.Z=n.p+"assets/images/screenshot-vs-code-settings-enable-f4ba085cb894787c5241d94f62aeb3f0.png"},11831:function(e,t,n){t.Z=n.p+"assets/images/title-image-87463977cb164b6169999f94ac2e9988.png"}}]);