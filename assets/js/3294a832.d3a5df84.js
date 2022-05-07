"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[95962],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92006:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Making Easy Auth tokens survive releases on Linux Azure App Service",authors:"johnnyreilly",image:"./easy-auth-zero-downtime-deployment.png",tags:["Azure","Easy Auth","tokens","SAS","Blob Storage"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2021/02/16/easy-auth-tokens-survive-releases-on-linux-azure-app-service",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-02-16-easy-auth-tokens-survive-releases-on-linux-azure-app-service/index.md",source:"@site/blog/2021-02-16-easy-auth-tokens-survive-releases-on-linux-azure-app-service/index.md",title:"Making Easy Auth tokens survive releases on Linux Azure App Service",description:'I wrote recently about zero downtime deployments on Azure App Service. Many applications require authentication, and ours is no exception. In our case we\'re using Azure Active Directory facilitated by "Easy Auth" which provides authentication to our App Service.',date:"2021-02-16T00:00:00.000Z",formattedDate:"February 16, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Easy Auth",permalink:"/tags/easy-auth"},{label:"tokens",permalink:"/tags/tokens"},{label:"SAS",permalink:"/tags/sas"},{label:"Blob Storage",permalink:"/tags/blob-storage"}],readingTime:3.91,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Making Easy Auth tokens survive releases on Linux Azure App Service",authors:"johnnyreilly",image:"./easy-auth-zero-downtime-deployment.png",tags:["Azure","Easy Auth","tokens","SAS","Blob Storage"],hide_table_of_contents:!1},prevItem:{title:"Goodbye Client Affinity, Hello Data Protection with Azure",permalink:"/2021/02/27/goodbye-client-affinity-hello-data-protection-with-azure"},nextItem:{title:"Azure App Service, Health checks and zero downtime deployments",permalink:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"}},c={image:n(1561).Z,authorsImageUrls:[void 0]},u=[{value:"SaS-sy ARM Templates",id:"sas-sy-arm-templates",level:2},{value:"What&#39;s actually happening?",id:"whats-actually-happening",level:2}],h={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I ",(0,o.kt)("a",{parentName:"p",href:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"},"wrote recently about zero downtime deployments on Azure App Service"),". Many applications require authentication, and ours is no exception. In our case we're using Azure Active Directory facilitated by ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization"},'"Easy Auth"')," which provides authentication to our App Service."),(0,o.kt)("p",null,"Our app uses a Linux App Service. It's worth knowing that Linux App Services run as a Docker container. As a consequence, Easy Auth works in a slightly different way; effectively as a middleware. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization#on-containers"},"To quote the docs on Easy Auth"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This module handles several things for your app:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Authenticates users with the specified provider"),(0,o.kt)("li",{parentName:"ul"},"Validates, stores, and refreshes tokens"),(0,o.kt)("li",{parentName:"ul"},"Manages the authenticated session"),(0,o.kt)("li",{parentName:"ul"},"Injects identity information into request headers The module runs separately from your application code and is configured using app settings. No SDKs, specific languages, or changes to your application code are required.")),(0,o.kt)("p",{parentName:"blockquote"},"The authentication and authorization module runs in a separate container, isolated from your application code. Using what's known as the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/ambassador"},"Ambassador")," pattern, it interacts with the incoming traffic to perform similar functionality as on Windows.")),(0,o.kt)("p",null,"However, ",(0,o.kt)("a",{parentName:"p",href:"https://social.msdn.microsoft.com/Forums/en-US/dde551b2-c86d-474b-b0a6-cc66163785a1/restarting-azure-app-service-on-linux-with-azure-active-directory-authentication-resets-authme#b59951ab-623a-4442-a221-80c157387bbe"},"Microsoft have acknowledged there is a potential bug in Easy Auth support at present"),". When the app service is restarted, the stored tokens are removed, and ",(0,o.kt)("strong",{parentName:"p"},"authentication begins to fail"),". As you might well imagine, authentication similarly starts to fail when a new app service is introduced - as is the case during deployment."),(0,o.kt)("p",null,"This is really significant. You may well have \"zero downtime deployment\", but it doesn't amount to a hill of beans if the moment you've deployed your users find they're effectively logged out. ",(0,o.kt)("a",{parentName:"p",href:"https://social.msdn.microsoft.com/Forums/en-US/dde551b2-c86d-474b-b0a6-cc66163785a1/restarting-azure-app-service-on-linux-with-azure-active-directory-authentication-resets-authme#b59951ab-623a-4442-a221-80c157387bbe"},"The advice from Microsoft")," is to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-gb/archive/blogs/jpsanders/azure-app-service-authentication-using-a-blob-storage-for-token-cache"},"Blob Storage for Token Cache"),":"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/cgillum"},"Chris Gillum")," said in a ",(0,o.kt)("a",{parentName:"p",href:"https://cgillum.tech/2016/03/07/app-service-token-store/"},"blog on the topic"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"you can provision an Azure Blob Storage container and configure your web app with a SaS URL (with read/write/list access) pointing to that blob container. This SaS URL can then be saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"WEBSITE_AUTH_TOKEN_CONTAINER_SASURL")," app setting. When this app setting is present, all tokens will be stored in and fetched from the specified blob container.")),(0,o.kt)("p",null,"To turn that into something visual, what's suggested is this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"diagram of Easy Auth with blog storage",src:n(1561).Z,width:"474",height:"600"})),(0,o.kt)("h2",{id:"sas-sy-arm-templates"},"SaS-sy ARM Templates"),(0,o.kt)("p",null,"I have the good fortune to work with some very talented people. One of them, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jmccor99"},"John McCormick")," turned his hand to putting this proposed solution into ",(0,o.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," and ARM template-land. First of all, let's look at our ",(0,o.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),". We add the following, prior to our deployment job:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"- job: SASGen\n        displayName: Generate SAS Token\n\n        steps:\n          - task: AzurePowerShell@4\n            name: ObtainSasTokenTask\n            inputs:\n              azureSubscription: $(serviceConnection)\n              ScriptType: inlineScript\n              Inline: |\n                $startTime = Get-Date\n                $expiryTime = $startTime.AddDays(90)\n                $storageAcc = Get-AzStorageAccount -ResourceGroupName $(azureResourceGroup) -Name $(storageAccountName)\n                $ctx = $storageAcc.Context\n                $sas = New-AzStorageContainerSASToken -Context $ctx -Name \"tokens\" -Permission \"rwl\" -Protocol HttpsOnly -StartTime $startTime -ExpiryTime $expiryTime -FullUri\n                Write-Host \"##vso[task.setvariable variable=sasToken;issecret=true;isOutput=true]$sas\"\n              azurePowerShellVersion: 'LatestVersion'\n\n      - job: DeployAppARMTemplates\n        variables:\n          sasToken: $[dependencies.SASGen.outputs['ObtainSasTokenTask.sasToken'] ]\n        displayName: Deploy App ARM Templates\n        dependsOn:\n        - SASGen\n\n        steps:\n          - task: AzureResourceManagerTemplateDeployment@3\n            displayName: Deploy app-service ARM Template\n            inputs:\n              deploymentScope: Resource Group\n              azureResourceManagerConnection: $(serviceConnection)\n              subscriptionId: $(subscriptionId)\n              action: Create Or Update Resource Group\n              resourceGroupName: $(azureResourceGroup)\n              location: $(location)\n              templateLocation: Linked artifact\n              csmFile: 'infra/app-service/azuredeploy.json'\n              csmParametersFile: 'infra/azuredeploy.parameters.json'\n              overrideParameters: >-\n                -sasUrl $(sasToken)\n              deploymentMode: Incremental\n")),(0,o.kt)("p",null,"There's two notable things happening above:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"SASGen")," job, a PowerShell script runs that ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/module/az.storage/new-azstoragecontainersastoken?view=azps-5.5.0"},"generates a SaS token URL")," with read, write and list permissions that will last for 90 days. (Incidentally, there is a way to do this via ",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/56127006/761388"},"ARM templates, and without PowerShell")," ","-"," but alas it didn't seem to work when we experimented with it.)"),(0,o.kt)("li",{parentName:"ol"},"The generated (secret) token URL (",(0,o.kt)("inlineCode",{parentName:"li"},"sasUrl"),") is passed as a parameter to our App Service ARM template. The ARM template sets an appsetting for the app service:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "apiVersion": "2020-09-01",\n    "name": "appsettings",\n    "type": "config",\n    "properties": {\n        "WEBSITE_AUTH_TOKEN_CONTAINER_SASURL": "[parameters(\'sasUrl\')]"\n    }\n},\n')),(0,o.kt)("p",null,"If you google ",(0,o.kt)("inlineCode",{parentName:"p"},"WEBSITE_AUTH_TOKEN_CONTAINER_SASURL")," you will not find a geat deal. Documentation is short. What you will find is ",(0,o.kt)("a",{parentName:"p",href:"http://jsandersblog.azurewebsites.net/2017/08/10/azure-app-service-authentication-using-a-blob-storage-for-token-cache/"},"Jeff Sanders excellent blog on the topic"),". It is, in terms of content, it has some commonality with this post; except in Jeff's example he's manually implementing the workaround in the Azure Portal."),(0,o.kt)("h2",{id:"whats-actually-happening"},"What's actually happening?"),(0,o.kt)("p",null,"With this in place, every time someone logs into your app a JSON token is written to the storage like so:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"token in storage account",src:n(30051).Z,width:"600",height:"125"})),(0,o.kt)("p",null,"If you take the trouble to look inside you'll find something like this tucked away:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "encrypted": true,\n  "tokens": {\n    "aad": "herewith_a_very_very_long_encrypted_token"\n  },\n  "version": 1\n}\n')),(0,o.kt)("p",null,"With this in place, you can safely restart your app service and / or deploy a new one, safe in the knowledge that the tokens will live on in the storage account, and that consequently you will not be unauthenticating users."))}m.isMDXComponent=!0},1561:function(e,t,n){t.Z=n.p+"assets/images/easy-auth-zero-downtime-deployment-bc37a60d24030b3ad3616938515a990c.png"},30051:function(e,t){t.Z="data:image/png;base64,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"}}]);