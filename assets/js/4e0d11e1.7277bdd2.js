"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[67962],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22129:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"Azure DevOps: consume a private artifact feed",authors:"johnnyreilly",tags:["Azure DevOps","NuGet","Azure Artifacts",".NET"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/2022/03/30/azure-devops-consume-private-nuget-artifact-feed",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-03-30-azure-devops-consume-private-nuget-artifact-feed/index.md",source:"@site/blog/2022-03-30-azure-devops-consume-private-nuget-artifact-feed/index.md",title:"Azure DevOps: consume a private artifact feed",description:"Private Azure Artifact feeds in in Azure DevOps can be used to serve NuGet packages. To build applications both locally and in an Azure Pipeline using those packages, there are a few steps to follow which this post will demonstrate.",date:"2022-03-30T00:00:00.000Z",formattedDate:"March 30, 2022",tags:[{label:"Azure DevOps",permalink:"/tags/azure-dev-ops"},{label:"NuGet",permalink:"/tags/nu-get"},{label:"Azure Artifacts",permalink:"/tags/azure-artifacts"},{label:".NET",permalink:"/tags/net"}],readingTime:3.39,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure DevOps: consume a private artifact feed",authors:"johnnyreilly",tags:["Azure DevOps","NuGet","Azure Artifacts",".NET"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"ESLint your C# in VS Code with Roslyn Analyzers",permalink:"/2022/04/06/eslint-your-csharp-in-vs-code-with-roslyn-analyzers"},nextItem:{title:"Lighthouse meet GitHub Actions",permalink:"/2022/03/20/lighthouse-meet-github-actions"}},p={image:n(67949).Z,authorsImageUrls:[void 0]},c=[{value:"Make a <code>nuget.config</code>",id:"make-a-nugetconfig",level:2},{value:"Consuming a private feed locally with the Azure Artifacts Credential Provider",id:"consuming-a-private-feed-locally-with-the-azure-artifacts-credential-provider",level:2},{value:"Consuming a private feed in Azure Pipelines",id:"consuming-a-private-feed-in-azure-pipelines",level:2},{value:"The publish gotcha",id:"the-publish-gotcha",level:2},{value:"Summing up",id:"summing-up",level:2}],d={toc:c};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Private Azure Artifact feeds in in Azure DevOps can be used to serve NuGet packages. To build applications both locally and in an Azure Pipeline using those packages, there are a few steps to follow which this post will demonstrate."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"title image reading &quot;Azure DevOps: consume a private artifact feed&quot; with the Azure DevOps and Azure Pipelines logos`",src:n(67949).Z,width:"1600",height:"900"})),(0,a.kt)("h2",{id:"make-a-nugetconfig"},"Make a ",(0,a.kt)("inlineCode",{parentName:"h2"},"nuget.config")),(0,a.kt)("p",null,"To consume a private feed, you'll likely want to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"nuget.config")," file in the root of your repo. Here you list the package sources you want to consume, typically the NuGet official package source ",(0,a.kt)("em",{parentName:"p"},"as well")," as your private feed. See the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n  <configuration>\n    <packageSources>\n      <add key="NuGet official package source" value="https://api.nuget.org/v3/index.json" />\n      <add key="my-nuget-packages" value="https://pkgs.dev.azure.com/my-org/_packaging/my-nuget-packages/nuget/v3/index.json" />\n    </packageSources>\n  </configuration>\n')),(0,a.kt)("h2",{id:"consuming-a-private-feed-locally-with-the-azure-artifacts-credential-provider"},"Consuming a private feed locally with the Azure Artifacts Credential Provider"),(0,a.kt)("p",null,"With our ",(0,a.kt)("inlineCode",{parentName:"p"},"nuget.config")," in place, can we build locally? Yes, once we've authenticated. If you're using Rider or Visual Studio, these may take care of this for you. However, if you're using VS Code you might need to do something else."),(0,a.kt)("p",null,"If you experience 401's when you run ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet restore")," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"error : Unable to load the service index for source https://pkgs.dev.azure.com/my-org/_packaging/not-there/nuget/v3/index.json. [/dev.azure.com/project/repo/src/App.csproj]\nerror : Response status code does not indicate success: 401\n")),(0,a.kt)("p",null,"Then it's probably a sign you need to install the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/artifacts-credprovider"},"Azure Artifacts Credential Provider"),". With that you should be able to restore nuget packages. See instructions ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/artifacts-credprovider#setup"},"here"),"."),(0,a.kt)("p",null,"On Linux and Mac this is as simple as running ",(0,a.kt)("inlineCode",{parentName:"p"},'sh -c "$(curl -fsSL https://aka.ms/install-artifacts-credprovider.sh)"')," in your terminal."),(0,a.kt)("p",null,"Subsequently, running ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet restore --interactive")," should trigger an authentication flow in the terminal, and subject to successful authentication, restore packages from the private feed."),(0,a.kt)("h2",{id:"consuming-a-private-feed-in-azure-pipelines"},"Consuming a private feed in Azure Pipelines"),(0,a.kt)("p",null,"You will need to authenticate within your pipeline before you can acquire your private feed packages. This is as simple as this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"- task: NuGetAuthenticate@0\n")),(0,a.kt)("p",null,"Before building / publishing or running tests, you must first explicitly ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet restore")," and provide the path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"nuget.config"),". You can do this with the dedicated ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/build/dotnet-core-cli"},".NET Core CLI task")," task like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"- task: DotNetCoreCLI@2\n  displayName: 'dotnet restore'\n  inputs:\n    command: 'restore'\n    projects: 'src/App/App.csproj'\n    nugetConfigPath: '../../nuget.config'\n    feedsToUse: config\n")),(0,a.kt)("h2",{id:"the-publish-gotcha"},"The publish gotcha"),(0,a.kt)("p",null,"On occasion, it can happen that Azure Pipelines doesn't seem to be happy running a publish task with private feeds. Consider, a task like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"- task: DotNetCoreCLI@2\n  displayName: 'dotnet publish'\n  inputs:\n    command: publish\n    arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)/${{parameters.artifactName}} /p:SourceRevisionId=$(Build.SourceVersion)'\n    zipAfterPublish: true\n    publishWebProjects: false\n    workingDirectory: src/App\n")),(0,a.kt)("p",null,"This can result in non-actionable errors like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"##[error]Error: There was an error when attempting to execute the process '/opt/hostedtoolcache/dotnet/dotnet'. This may indicate the process failed to start. Error: spawn /opt/hostedtoolcache/dotnet/dotnet ENOENT"))),(0,a.kt)("p",null,"A workaround in this situation is to invoke .NET through a bash script directly like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'- bash: |\n    cd src/App\n    dotnet --list-sdks\n    echo ""\n    echo "**************"\n    echo "dotnet restore --configfile ../../nuget.config"\n    dotnet restore --configfile ../../nuget.config\n    echo ""\n    echo "**************"\n    echo "dotnet build --configuration Release --no-restore"\n    dotnet build --configuration Release\n    echo ""\n    echo "**************"\n    echo "dotnet publish --configuration Release --no-restore --output $(Build.ArtifactStagingDirectory)/App /p:SourceRevisionId=$(Build.SourceVersion)"\n    dotnet publish --configuration Release --no-restore --output $(Build.ArtifactStagingDirectory)/App /p:SourceRevisionId=$(Build.SourceVersion)\n  displayName: \'dotnet publish\'\n\n- task: ArchiveFiles@2\n  displayName: "Create $(Build.ArtifactStagingDirectory)/App.zip"\n  inputs:\n    rootFolderOrFile: "$(Build.ArtifactStagingDirectory)/App"\n    includeRootFolder: false\n    archiveFile: "$(Build.ArtifactStagingDirectory)/App.zip"\n')),(0,a.kt)("p",null,"And note that after publishing we use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/archive-files"},"Archive Files task")," to zip up the output of our publishing."),(0,a.kt)("p",null,"You may be tempted to use the zip command line utility to make your zip. Do not do this. I did this. I learned, through no small amount of suffering, that there is a problem with this. Whilst you can make a zip this way that will be consumed happily by Mac and OSX, when it comes to being deployed to Azure (even if you're deploying to Linux within Azure) via zip deploy it will not work. I can't tell you why, just that it won't. So use the dedicated task."),(0,a.kt)("h2",{id:"summing-up"},"Summing up"),(0,a.kt)("p",null,"And that's it; with these approaches in place you should be able to build applications consuming privage NuGet feeds with ease."))}h.isMDXComponent=!0},67949:function(e,t,n){t.Z=n.p+"assets/images/title-image-04b63d9be280a5b5efe6221a67f784e7.png"}}]);