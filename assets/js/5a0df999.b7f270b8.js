"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[7504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});n(67294);var i=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Azure Static Web Apps: Failed to deploy the Azure Functions",authors:"johnnyreilly",tags:["Azure Static Web Apps","Functions","Failed to deploy the Azure Functions"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/2022/07/07/static-web-apps-failed-to-deploy-the-azure-functions",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-07-07-static-web-apps-failed-to-deploy-the-azure-functions/index.md",source:"@site/blog/2022-07-07-static-web-apps-failed-to-deploy-the-azure-functions/index.md",title:"Azure Static Web Apps: Failed to deploy the Azure Functions",description:'Azure Static Web Apps presently have an issue which blocks deployment of Azure Functions with the message "Failed to deploy the Azure Functions". This happens when the resource is tagged with an EnvironmentId tag and is discussed in this GitHub issue. There is a workaround which we will examine.',date:"2022-07-07T00:00:00.000Z",formattedDate:"July 7, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"Functions",permalink:"/tags/functions"},{label:"Failed to deploy the Azure Functions",permalink:"/tags/failed-to-deploy-the-azure-functions"}],readingTime:3.145,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Static Web Apps: Failed to deploy the Azure Functions",authors:"johnnyreilly",tags:["Azure Static Web Apps","Functions","Failed to deploy the Azure Functions"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Get Build Validations with the Azure DevOps API",permalink:"/2022/07/10/azure-devops-api-build-validations"},nextItem:{title:"Azure Container Apps: dapr pubsub",permalink:"/2022/06/21/azure-container-apps-pubsub"}},u={image:n(47773).Z,authorsImageUrls:[void 0]},p=[{value:"Failed to deploy the Azure Functions",id:"failed-to-deploy-the-azure-functions",level:2},{value:"Fiddling with tags",id:"fiddling-with-tags",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function h(e){var{components:t}=e,o=a(e,["components"]);return(0,i.kt)("wrapper",r({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Azure Static Web Apps presently have an issue which blocks deployment of Azure Functions with the message "Failed to deploy the Azure Functions". This happens when the resource is tagged with an ',(0,i.kt)("inlineCode",{parentName:"p"},"EnvironmentId")," tag and is discussed in ",(0,i.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/static-web-apps/issues/723"}),"this GitHub issue"),". There is a workaround which we will examine."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Azure Static Web Apps: Failed to deploy the Azure Functions&quot; with an Azure Functions logo",src:n(47773).Z,width:"1600",height:"900"})),(0,i.kt)("h2",r({},{id:"failed-to-deploy-the-azure-functions"}),"Failed to deploy the Azure Functions"),(0,i.kt)("p",null,(0,i.kt)("a",r({parentName:"p"},{href:"https://azure.microsoft.com/en-us/services/app-service/static/"}),"Azure Static Web Apps")," are a combination of static front end hosting and an optional serverless API back end. The front end portion of Azure Static Web Apps is very plug and play. However there can be complexities when it comes to adding an API back end. One issue is a failure to deploy in the context of an Azure Pipeline which presents like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of an Azure Pipeines run featuring the words &quot;Failed to deploy the Azure Functions&quot;",src:n(13634).Z,width:"1790",height:"690"})),(0,i.kt)("p",null,"Above you can see the ",(0,i.kt)("a",r({parentName:"p"},{href:"https://github.com/microsoft/azure-pipelines-tasks/tree/master/Tasks/AzureStaticWebAppV0"}),(0,i.kt)("inlineCode",{parentName:"a"},"AzureStaticWebApp@0")),' dedicated Azure Pipelines task that is used to deploy Azure Static Web Apps. It fails with the message "Failed to deploy the Azure Functions". There is no actionable feedback in this output, which makes coming up with remedies difficult.'),(0,i.kt)("p",null,"As I was looking into this with Emad Khalifah of Microsoft Support, Emad pointed me to ",(0,i.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/static-web-apps/issues/723"}),"this GitHub issue"),". Ironically, this had been raised by my colleage ",(0,i.kt)("a",r({parentName:"p"},{href:"https://github.com/johnmccormick99"}),"John McCormick")," back in February 2022."),(0,i.kt)("p",null,"The issue he experienced occurred when an ",(0,i.kt)("inlineCode",{parentName:"p"},"EnvironmentId")," tag tag is present on the Azure Static Web Apps resource like so:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of the Azure Portal with a tag of &quot;EnvironmentId&quot;",src:n(39921).Z,width:"1928",height:"804"})),(0,i.kt)("p",null,"We do this in our organisation, and looking at the comments on the issue, it appears there are others out there doing the same. Given the name of the tag, this is not terribly surprising."),(0,i.kt)("p",null,"Unfortunately, this issue has not been resolved. Can we work around the issue? Yes."),(0,i.kt)("h2",r({},{id:"fiddling-with-tags"}),"Fiddling with tags"),(0,i.kt)("p",null,"In our organisation we enforce the tags we use in Azure strictly. So we found ourself in the bind of both needing tags for our own internal processes, but needing to work around the issue."),(0,i.kt)("p",null,"However, the excellent ",(0,i.kt)("a",r({parentName:"p"},{href:"https://github.com/ryanmatcook"}),"Ryan Cook")," came up with a workaround. It works like this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use the Azure CLI to remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"EnvironmentId")," tag from the static web app resource"),(0,i.kt)("li",{parentName:"ul"},"Deploy the static web app"),(0,i.kt)("li",{parentName:"ul"},"use the Azure CLI to add the ",(0,i.kt)("inlineCode",{parentName:"li"},"EnvironmentId")," tag back to the static web app resource")),(0,i.kt)("p",null,"It's hacky. It can require multiple runs to work (I ascribe this to eventual consistency issues in Azure; but that's not based on evidence). However, it can be a way forward. I acknowledge this is suboptimal."),(0,i.kt)("p",null,"Should anyone else bump on this issue, here is the (hacky) workaround:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-yml"}),"- task: AzureCLI@2\n  displayName: 'Remove EnvironmentId tag from resource group'\n  inputs:\n    azureSubscription: ${{ variables.serviceConnection }}\n    scriptType: bash\n    scriptLocation: inlineScript\n    inlineScript: |\n      az tag update --resource-id /subscriptions/$(subscriptionId)/resourcegroups/$(resourceGroup) --operation delete --tags EnvironmentId=$(environmentId)\n\n# you may want to introduce a delay here, without a delay this can be somewhat unreliable\n\n- task: AzureStaticWebApp@0\n  name: DeployStaticWebApp\n  displayName: Deploy Static Web App\n  inputs:\n    app_location: 'MyApp'\n    output_location: 'dist'\n    api_location: 'api'\n    azure_static_web_apps_api_token: $(apiKey)\n\n- task: AzureCLI@2\n  displayName: 'Add EnvironmentId tag back to resource group'\n  inputs:\n    azureSubscription: ${{ variables.serviceConnection }}\n    scriptType: bash\n    scriptLocation: inlineScript\n    inlineScript: |\n      az tag update --resource-id /subscriptions/$(subscriptionId)/resourcegroups/$(resourceGroup) --operation merge --tags EnvironmentId=$(environmentId)\n")),(0,i.kt)("h2",r({},{id:"conclusion"}),"Conclusion"),(0,i.kt)("p",null,"Although I haven't tested it, the nature of the failure appears to be general; and so would likely affect deployments using GitHub Actions also. So if you're a GitHub Actions user, I suspect this approach could be tweaked and applied there also."),(0,i.kt)("p",null,"It would be tremendous to see ",(0,i.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/static-web-apps/issues/723"}),"this issue")," fixed within SWAs directly. It's not great that this issue has been marked as closed without (as far as we can tell) fixing the underlying problem."))}h.isMDXComponent=!0},13634:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-of-azure-pipelines-failed-to-deploy-the-azure-functions-86d1adddaa73e4eee962c628e749e26a.png"},39921:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-of-azure-portal-with-environmentid-1a64eee108bb5b609ed4fd1adf8e0e8f.png"},47773:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/title-image-83f3f66f91b04b5ee4578663e73054c8.png"}}]);