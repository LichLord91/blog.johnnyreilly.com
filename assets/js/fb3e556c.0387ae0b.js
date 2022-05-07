"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[71456],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var A=r.createContext({}),s=function(e){var n=r.useContext(A),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(A.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,A=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),g=i,h=u["".concat(A,".").concat(g)]||u[g]||c[g]||o;return t?r.createElement(h,a(a({ref:n},l),{},{components:t})):r.createElement(h,a({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var p={};for(var A in n)hasOwnProperty.call(n,A)&&(p[A]=n[A]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75629:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return A},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],p={title:"Azure Container Apps, Bicep and GitHub Actions",authors:"johnnyreilly",tags:["Azure Container Apps","Bicep","GitHub Actions"],image:"./title-image.png",hide_table_of_contents:!1},A=void 0,s={permalink:"/2021/12/19/azure-container-apps-bicep-and-github-actions",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-12-19-azure-container-apps-bicep-and-github-actions/index.md",source:"@site/blog/2021-12-19-azure-container-apps-bicep-and-github-actions/index.md",title:"Azure Container Apps, Bicep and GitHub Actions",description:"Azure Container Apps are an exciting way to deploy containers to Azure. This post shows how to deploy the infrastructure for an Azure Container App to Azure using Bicep and GitHub Actions. The Azure Container App documentation features quickstarts for deploying your first container app using both the Azure Portal and the Azure CLI. These are great, but there's a gap if you prefer to deploy using Bicep and you'd like to get your CI/CD setup right from the beginning. This post aims to fill that gap.",date:"2021-12-19T00:00:00.000Z",formattedDate:"December 19, 2021",tags:[{label:"Azure Container Apps",permalink:"/tags/azure-container-apps"},{label:"Bicep",permalink:"/tags/bicep"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"}],readingTime:3.72,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Container Apps, Bicep and GitHub Actions",authors:"johnnyreilly",tags:["Azure Container Apps","Bicep","GitHub Actions"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Azure Container Apps: build and deploy with Bicep and GitHub Actions",permalink:"/2021/12/27/azure-container-apps-build-and-deploy-with-bicep-and-github-actions"},nextItem:{title:"Open Graph: a guide to sharable social media previews",permalink:"/2021/12/12/open-graph-sharing-previews-guide"}},l={image:t(73246).Z,authorsImageUrls:[void 0]},c=[{value:"Update 02/05/2022",id:"update-02052022",level:2},{value:"Bicep",id:"bicep",level:2},{value:"Setting up a resource group",id:"setting-up-a-resource-group",level:2},{value:"Deploying with the Azure CLI",id:"deploying-with-the-azure-cli",level:2},{value:"Deploying with GitHub Actions",id:"deploying-with-github-actions",level:2},{value:"Running it",id:"running-it",level:2}],u={toc:c};function g(e){var n=e.components,p=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Azure Container Apps are an exciting way to deploy containers to Azure. This post shows how to deploy the infrastructure for an Azure Container App to Azure using Bicep and GitHub Actions. The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/container-apps/"},"Azure Container App documentation")," features quickstarts for deploying your first container app using both the Azure Portal and the Azure CLI. These are great, but there's a gap if you prefer to deploy using Bicep and you'd like to get your CI/CD setup right from the beginning. This post aims to fill that gap."),(0,o.kt)("p",null,"If you're interested in building your own containers as well, it's worth looking at ",(0,o.kt)("a",{parentName:"p",href:"/2021/12/27/azure-container-apps-build-and-deploy-with-bicep-and-github-actions"},"this follow up post"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;Azure Container Apps, Bicep and GitHub Actions&quot; with the Bicep, Azure Container Apps and GitHub Actions logos",src:t(73246).Z,width:"1600",height:"900"})),(0,o.kt)("h2",{id:"update-02052022"},"Update 02/05/2022"),(0,o.kt)("p",null,"This post has been updated to reflect the migration of Azure Container Apps from the Microsoft.Web namespace to the Microsoft.App namespace in March 2022. See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/azure-container-apps/issues/109"},"https://github.com/microsoft/azure-container-apps/issues/109")),(0,o.kt)("h2",{id:"bicep"},"Bicep"),(0,o.kt)("p",null,"Let's begin with the Bicep required to deploy an Azure Container App."),(0,o.kt)("p",null,"In our new repository we'll create an ",(0,o.kt)("inlineCode",{parentName:"p"},"infra")," directory, into which we'll place a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.bicep")," file which will contain our Bicep template."),(0,o.kt)("p",null,"I've pared this down to the simplest Bicep template that I can; it only requires a name parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bicep"},"param name string\nparam secrets array = []\n\nvar location = resourceGroup().location\nvar environmentName = 'Production'\nvar workspaceName = '${name}-log-analytics'\n\nresource workspace 'Microsoft.OperationalInsights/workspaces@2021-12-01-preview' = {\n  name: workspaceName\n  location: location\n  properties: {\n    sku: {\n      name: 'PerGB2018'\n    }\n    retentionInDays: 30\n    workspaceCapping: {}\n  }\n}\n\nresource environment 'Microsoft.App/managedEnvironments@2022-01-01-preview' = {\n  name: environmentName\n  location: location\n  properties: {\n    appLogsConfiguration: {\n      destination: 'log-analytics'\n      logAnalyticsConfiguration: {\n        customerId: workspace.properties.customerId\n        sharedKey: listKeys(workspace.id, workspace.apiVersion).primarySharedKey\n      }\n    }\n  }\n}\n\nresource containerApp 'Microsoft.App/containerApps@2022-01-01-preview' = {\n  name: name\n  kind: 'containerapps'\n  location: location\n  properties: {\n    managedEnvironmentId: environment.id\n    configuration: {\n      secrets: secrets\n      registries: []\n      ingress: {\n        'external':true\n        'targetPort':80\n      }\n    }\n    template: {\n      containers: [\n        {\n          'name':'simple-hello-world-container'\n          'image':'mcr.microsoft.com/azuredocs/containerapps-helloworld:latest'\n          'command':[]\n          'resources':{\n            'cpu':'.25'\n            'memory':'.5Gi'\n          }\n        }\n      ]\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Some things to note from the template:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We're deploying three resources; a container app, a kube environment and an operational insights."),(0,o.kt)("li",{parentName:"ul"},"Just like the official quickstarts we're going to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"containerapps-helloworld")," image.")),(0,o.kt)("h2",{id:"setting-up-a-resource-group"},"Setting up a resource group"),(0,o.kt)("p",null,"In order that you can deploy your Bicep, we're going to need a resource group to send it to. Right now, Azure Container Apps aren't available everywhere. So we're going to create ourselves a resource group in North Europe which does support ACAs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az group create -g rg-aca -l northeurope\n")),(0,o.kt)("h2",{id:"deploying-with-the-azure-cli"},"Deploying with the Azure CLI"),(0,o.kt)("p",null,"With this resource group in place, we could simply deploy using the Azure CLI like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az deployment group create \\\n  --resource-group rg-aca \\\n  --template-file ./infra/main.bicep \\\n  --parameters \\\n    name='container-app'\n")),(0,o.kt)("h2",{id:"deploying-with-github-actions"},"Deploying with GitHub Actions"),(0,o.kt)("p",null,"However, we're aiming to set up a GitHub Action to do this for us. We'll create a ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/deploy.yaml")," file in our repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Deploy\non:\n  push:\n    branches: [main]\n  workflow_dispatch:\n\nenv:\n  RESOURCE_GROUP: rg-aca\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      - name: Azure Login\n        uses: azure/login@v1\n        with:\n          creds: ${{ secrets.AZURE_CREDENTIALS }}\n\n      - name: Deploy bicep\n        uses: azure/CLI@v1\n        with:\n          inlineScript: |\n            az deployment group create \\\n              --resource-group ${{ env.RESOURCE_GROUP }} \\\n              --template-file ./infra/main.bicep \\\n              --parameters \\\n                name='container-app'\n")),(0,o.kt)("p",null,"The above GitHub action is very simple. It:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Logs into Azure using some ",(0,o.kt)("inlineCode",{parentName:"li"},"AZURE_CREDENTIALS")," we'll set up in a moment."),(0,o.kt)("li",{parentName:"ol"},"Invokes the Azure CLI to deploy our Bicep template.")),(0,o.kt)("p",null,"Let's create that ",(0,o.kt)("inlineCode",{parentName:"p"},"AZURE_CREDENTIALS")," secret in GitHub:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of `AZURE_CREDENTIALS` secret in the GitHub website that we need to create",src:t(94199).Z,width:"1540",height:"235"})),(0,o.kt)("p",null,"We'll use the Azure CLI once more:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'az ad sp create-for-rbac --name "myApp" --role contributor \\\n    --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group} \\\n    --sdk-auth\n')),(0,o.kt)("p",null,"Remember to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"{subscription-id}")," with your subscription id and ",(0,o.kt)("inlineCode",{parentName:"p"},"{resource-group}")," with the name of your resource group (",(0,o.kt)("inlineCode",{parentName:"p"},"rg-aca")," if you're following along). This command will pump out a lump of JSON that looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "a-client-id",\n  "clientSecret": "a-client-secret",\n  "subscriptionId": "a-subscription-id",\n  "tenantId": "a-tenant-id",\n  "activeDirectoryEndpointUrl": "https://login.microsoftonline.com",\n  "resourceManagerEndpointUrl": "https://management.azure.com/",\n  "activeDirectoryGraphResourceId": "https://graph.windows.net/",\n  "sqlManagementEndpointUrl": "https://management.core.windows.net:8443/",\n  "galleryEndpointUrl": "https://gallery.azure.com/",\n  "managementEndpointUrl": "https://management.core.windows.net/"\n}\n')),(0,o.kt)("p",null,"Take this and save it as the ",(0,o.kt)("inlineCode",{parentName:"p"},"AZURE_CREDENTIALS")," secret in Azure."),(0,o.kt)("h2",{id:"running-it"},"Running it"),(0,o.kt)("p",null,"When the GitHub Action has been run you'll find that Azure Container App is now showing up inside the Azure Portal:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the Azure Container App in the Azure Portal",src:t(34420).Z,width:"1400",height:"541"})),(0,o.kt)("p",null,"You'll see a URL is displayed, when you go that URL you'll find the hello world image is running!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the running Azure Container App",src:t(54138).Z,width:"2227",height:"953"})))}g.isMDXComponent=!0},34420:function(e,n,t){n.Z=t.p+"assets/images/screenshot-azure-portal-container-app-ced5e322f67db533948a5bedea469a03.png"},94199:function(e,n){n.Z="data:image/png;base64,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"},54138:function(e,n,t){n.Z=t.p+"assets/images/screenshot-of-running-container-app-9c2faf56fe8f79d635d7365293bc823a.png"},73246:function(e,n,t){n.Z=t.p+"assets/images/title-image-151d61532e1cffb9c37053af7da126fc.png"}}]);