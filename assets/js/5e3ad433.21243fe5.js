"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[98511],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||r;return t?i.createElement(m,a(a({ref:n},u),{},{components:t})):i.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},69841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});t(67294);var i=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={title:"ASP.NET, Serilog and Application Insights",authors:"johnnyreilly",image:"./title-image.png",tags:["asp.net","Azure","Application Insights","Serilog"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2021/01/30/aspnet-serilog-and-application-insights",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-01-30-aspnet-serilog-and-application-insights/index.md",source:"@site/blog/2021-01-30-aspnet-serilog-and-application-insights/index.md",title:"ASP.NET, Serilog and Application Insights",description:"If you're deploying an ASP.NET application to Azure App Services / Azure Container Apps or similar, there's a decent chance you'll also be using the fantastic Serilog and will want to plug it into Azure's Application Insights.",date:"2021-01-30T00:00:00.000Z",formattedDate:"January 30, 2021",tags:[{label:"asp.net",permalink:"/tags/asp-net"},{label:"Azure",permalink:"/tags/azure"},{label:"Application Insights",permalink:"/tags/application-insights"},{label:"Serilog",permalink:"/tags/serilog"}],readingTime:3.87,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ASP.NET, Serilog and Application Insights",authors:"johnnyreilly",image:"./title-image.png",tags:["asp.net","Azure","Application Insights","Serilog"],hide_table_of_contents:!1},prevItem:{title:"Azure RBAC: role assignments and ARM templates",permalink:"/2021/02/08/arm-templates-security-role-assignments"},nextItem:{title:"Azure Pipelines Build Info in an ASP.NET React app",permalink:"/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app"}},p={image:t(19033).Z,authorsImageUrls:[void 0]},u=[{value:"Updated: 26/11/2022",id:"updated-26112022",level:2},{value:"Let&#39;s plug it together",id:"lets-plug-it-together",level:2}],g={toc:u};function c(e){var{components:n}=e,a=r(e,["components"]);return(0,i.kt)("wrapper",o({},g,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you're deploying an ASP.NET application to Azure App Services / Azure Container Apps or similar, there's a decent chance you'll also be using the fantastic ",(0,i.kt)("a",o({parentName:"p"},{href:"https://serilog.net/"}),"Serilog")," and will want to plug it into Azure's ",(0,i.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"}),"Application Insights"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"title image reading &quot;ASP.NET, Serilog and Application Insights&quot; with ASP.NET, Serilog and Application Insights logos",src:t(19033).Z,width:"800",height:"450"})),(0,i.kt)("h2",o({},{id:"updated-26112022"}),"Updated: 26/11/2022"),(0,i.kt)("p",null,"This post will show you how it's done, and it'll also build upon the ",(0,i.kt)("a",o({parentName:"p"},{href:"/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app"}),"build info work from our previous post"),". In what way? Great question. Well logs are a tremendous diagnostic tool. If you have logs which display some curious behaviour, and you'd like to replicate that in another environment, you really want to take exactly that version of the codebase out to play. Our last post introduced build info into our application in the form of our ",(0,i.kt)("inlineCode",{parentName:"p"},"AppVersionInfo")," class that looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "buildNumber": "20210130.1",\n  "buildId": "123456",\n  "branchName": "main",\n  "commitHash": "7089620222c30c1ad88e4b556c0a7908ddd34a8e"\n}\n')),(0,i.kt)("p",null,"We'd initially exposed an endpoint in our application which surfaced up this information. Now we're going to take that self same information and bake it into our log messages by making use of ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/serilog/serilog/wiki/Enrichment"}),"Serilog's enrichment functionality"),". Build info and Serilog's enrichment are the double act your logging has been waiting for."),(0,i.kt)("h2",o({},{id:"lets-plug-it-together"}),"Let's plug it together"),(0,i.kt)("p",null,"We're going to need a number of Serilog dependencies added to our ",(0,i.kt)("inlineCode",{parentName:"p"},".csproj"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-xml"}),'<PackageReference Include="Serilog.AspNetCore" Version="3.4.0" />\n<PackageReference Include="Serilog.Enrichers.Environment" Version="2.1.3" />\n<PackageReference Include="Serilog.Enrichers.Thread" Version="3.1.0" />\n<PackageReference Include="Serilog.Sinks.ApplicationInsights" Version="3.1.0" />\n<PackageReference Include="Serilog.Sinks.Async" Version="1.4.0" />\n')),(0,i.kt)("p",null,"The earlier in your application lifetime you get logging wired up, the happier you will be. Earlier, means more information when you're diagnosing issues. So we want to start in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),"; ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," would be just ",(0,i.kt)("em",{parentName:"p"},"way")," too late."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'public class Program {\n    const string APP_NAME = "MyAmazingApp";\n\n    public static int Main(string[] args) {\n        AppVersionInfo.InitialiseBuildInfoGivenPath(Directory.GetCurrentDirectory());\n        LoggerConfigurationExtensions.SetupLoggerConfiguration(APP_NAME, AppVersionInfo.GetBuildInfo());\n\n        try\n        {\n            Log.Information("Starting web host");\n            CreateHostBuilder(args).Build().Run();\n            return 0;\n        }\n        catch (Exception ex)\n        {\n            Log.Fatal(ex, "Host terminated unexpectedly");\n            return 1;\n        }\n        finally\n        {\n            Log.CloseAndFlush();\n        }\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .UseSerilog((hostBuilderContext, services, loggerConfiguration) => {\n                loggerConfiguration.ConfigureBaseLogging(APP_NAME, AppVersionInfo.GetBuildInfo());\n                loggerConfiguration.AddApplicationInsightsLogging(services, hostBuilderContext.Configuration);\n            })\n            .ConfigureWebHostDefaults(webBuilder => {\n                webBuilder\n                    .UseStartup<Startup>();\n            });\n}\n')),(0,i.kt)("p",null,"If you look at the code above you'll see that the first line of code that executes is ",(0,i.kt)("inlineCode",{parentName:"p"},"AppVersionInfo.InitialiseBuildInfoGivenPath"),". This initialises our ",(0,i.kt)("inlineCode",{parentName:"p"},"AppVersionInfo")," so we have meaningful build info to pump into our logs. The next thing we do is to configure Serilog with ",(0,i.kt)("inlineCode",{parentName:"p"},"LoggerConfigurationExtensions.SetupLoggerConfiguration"),". This provides us with a configured logger so we are free to log any issues that take place during startup. (Incidentally, after startup you'll likely inject an ",(0,i.kt)("inlineCode",{parentName:"p"},"ILogger")," into your classes rather than using the static ",(0,i.kt)("inlineCode",{parentName:"p"},"Log")," directly.)"),(0,i.kt)("p",null,"Finally, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateHostBuilder")," which in turn calls ",(0,i.kt)("inlineCode",{parentName:"p"},"UseSerilog")," to plug Serilog into ASP.NET. If you take a look inside the body of ",(0,i.kt)("inlineCode",{parentName:"p"},"UseSerilog")," you'll see we configure the logging of ASP.NET (in the same way we did for Serilog) and we hook into Application Insights as well. There's been a number of references to ",(0,i.kt)("inlineCode",{parentName:"p"},"LoggerConfigurationExtensions"),". Let's take a look at it:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'internal static class LoggerConfigurationExtensions {\n    internal static void SetupLoggerConfiguration(string appName, BuildInfo buildInfo) {\n        Log.Logger = new LoggerConfiguration()\n            .ConfigureBaseLogging(appName, buildInfo)\n            .CreateLogger();\n    }\n\n    internal static LoggerConfiguration ConfigureBaseLogging(\n        this LoggerConfiguration loggerConfiguration,\n        string appName,\n        BuildInfo buildInfo\n    ) {\n        loggerConfiguration\n            .MinimumLevel.Debug()\n            .MinimumLevel.Override("Microsoft", LogEventLevel.Information)\n            // AMAZING COLOURS IN THE CONSOLE!!!!\n            .WriteTo.Async(a => a.Console(theme: AnsiConsoleTheme.Code))\n            .Enrich.FromLogContext()\n            .Enrich.WithMachineName()\n            .Enrich.WithThreadId()\n            // Build information as custom properties\n            .Enrich.WithProperty(nameof(buildInfo.BuildId), buildInfo.BuildId)\n            .Enrich.WithProperty(nameof(buildInfo.BuildNumber), buildInfo.BuildNumber)\n            .Enrich.WithProperty(nameof(buildInfo.BranchName), buildInfo.BranchName)\n            .Enrich.WithProperty(nameof(buildInfo.CommitHash), buildInfo.CommitHash)\n            .Enrich.WithProperty("ApplicationName", appName);\n\n        return loggerConfiguration;\n    }\n\n    internal static LoggerConfiguration AddApplicationInsightsLogging(this LoggerConfiguration loggerConfiguration, IServiceProvider services, IConfiguration configuration)\n    {\n        if (!string.IsNullOrWhiteSpace(configuration.GetValue<string>("APPINSIGHTS_INSTRUMENTATIONKEY")))\n        {\n            loggerConfiguration.WriteTo.ApplicationInsights(\n                services.GetRequiredService<TelemetryConfiguration>(),\n                TelemetryConverter.Traces);\n        }\n\n        return loggerConfiguration;\n    }\n}\n')),(0,i.kt)("p",null,"If we take a look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureBaseLogging")," method above, we can see that our logs are being enriched with the build info, property by property. We're also giving ourselves a beautifully coloured console thanks to Serilog's glorious ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/serilog/serilog-sinks-console#themes"}),"theme support"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of the console featuring coloured output",src:t(49028).Z,width:"924",height:"128"})),(0,i.kt)("p",null,"Take a moment to admire the salmon pinks. Is it not lovely?"),(0,i.kt)("p",null,"Finally we come to the main act. Plugging in Application Insights is as simple as dropping in ",(0,i.kt)("inlineCode",{parentName:"p"},"loggerConfiguration.WriteTo.ApplicationInsights")," into our configuration. You'll note that this depends upon the existence of an application setting of ",(0,i.kt)("inlineCode",{parentName:"p"},"APPINSIGHTS_INSTRUMENTATIONKEY")," - this is the secret sauce that we need to be in place so we can pipe logs merrily to Application Insights. So you'll need this configuration in place so this works."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of application insights with our output",src:t(52079).Z,width:"806",height:"1068"})),(0,i.kt)("p",null,"As you can see, we now have the likes of ",(0,i.kt)("inlineCode",{parentName:"p"},"BuildNumber"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CommitHash")," and friends visible on each log. Happy diagnostic days!"),(0,i.kt)("p",null,"I'm indebted to the marvellous ",(0,i.kt)("a",o({parentName:"p"},{href:"https://twitter.com/MarcelMichau"}),"Marcel Michau")," who showed me how to get the fiddlier parts of how to get Application Insights plugged in the right way. Thanks chap!"))}c.isMDXComponent=!0},52079:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/application-insights-properties-4e13662317205327d8f3bac2b4729e08.webp"},49028:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,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"},19033:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/title-image-ba106de0d9e9a8f0299795d40b17e087.png"}}]);