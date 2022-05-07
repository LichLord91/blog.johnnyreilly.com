"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[8500],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=r,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6046:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={title:"Azure Container Apps: build and deploy with Bicep and GitHub Actions",authors:"johnnyreilly",tags:["Azure Container Apps","Bicep","GitHub Actions","GitHub container registry"],image:"./title-image.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/2021/12/27/azure-container-apps-build-and-deploy-with-bicep-and-github-actions",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-12-27-azure-container-apps-build-and-deploy-with-bicep-and-github-actions/index.md",source:"@site/blog/2021-12-27-azure-container-apps-build-and-deploy-with-bicep-and-github-actions/index.md",title:"Azure Container Apps: build and deploy with Bicep and GitHub Actions",description:"This post shows how to build and deploy a simple web application to Azure Container Apps using Bicep and GitHub Actions. This includes the configuration and deployment of secrets.",date:"2021-12-27T00:00:00.000Z",formattedDate:"December 27, 2021",tags:[{label:"Azure Container Apps",permalink:"/tags/azure-container-apps"},{label:"Bicep",permalink:"/tags/bicep"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"},{label:"GitHub container registry",permalink:"/tags/git-hub-container-registry"}],readingTime:13.49,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Container Apps: build and deploy with Bicep and GitHub Actions",authors:"johnnyreilly",tags:["Azure Container Apps","Bicep","GitHub Actions","GitHub container registry"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Query deployment outputs with the Azure CLI",permalink:"/2021/12/28/azure-cli-show-query-output-properties"},nextItem:{title:"Azure Container Apps, Bicep and GitHub Actions",permalink:"/2021/12/19/azure-container-apps-bicep-and-github-actions"}},c={image:t(70386).Z,authorsImageUrls:[void 0]},u=[{value:"Update 02/05/2022",id:"update-02052022",level:2},{value:"The containerised convent",id:"the-containerised-convent",level:2},{value:"Bicep",id:"bicep",level:2},{value:"The node container app",id:"the-node-container-app",level:3},{value:"Accessing the GitHub Container Registry",id:"accessing-the-github-container-registry",level:3},{value:"Secrets / Configuration",id:"secrets--configuration",level:3},{value:"Setting up a resource group",id:"setting-up-a-resource-group",level:2},{value:"Secrets for GitHub Actions",id:"secrets-for-github-actions",level:2},{value:"<code>AZURE_CREDENTIALS</code> - GitHub logging into Azure",id:"azure_credentials---github-logging-into-azure",level:3},{value:"<code>PACKAGES_TOKEN</code> - Azure accessing the GitHub container registry",id:"packages_token---azure-accessing-the-github-container-registry",level:3},{value:"Secrets for the app",id:"secrets-for-the-app",level:3},{value:"Deploying with GitHub Actions",id:"deploying-with-github-actions",level:2},{value:"<code>build</code> - building our image",id:"build---building-our-image",level:3},{value:"<code>deploy</code> - shipping our image to Azure",id:"deploy---shipping-our-image-to-azure",level:3},{value:"Running it",id:"running-it",level:2}],d={toc:u};function g(e){var n=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This post shows how to build and deploy a simple web application to Azure Container Apps using Bicep and GitHub Actions. This includes the configuration and deployment of secrets."),(0,i.kt)("p",null,"This post follows on from the ",(0,i.kt)("a",{parentName:"p",href:"/2021/12/19/azure-container-apps-bicep-and-github-actions"},"previous post"),' which deployed infrastructure and a "hello world" container, this time introducing the building of an image and storing it in the ',(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"},"GitHub container registry")," so it can be deployed."),(0,i.kt)("p",null,"If you'd like to learn more about using dapr with Azure Container Apps then you might want to read ",(0,i.kt)("a",{parentName:"p",href:"/2022/01/22/azure-container-apps-dapr-bicep-github-actions-debug-devcontainer"},"this post"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"title image reading &quot;Azure Container Apps: build and deploy with Bicep and GitHub Actions&quot; with the Bicep, Azure Container Apps and GitHub Actions logos",src:t(70386).Z,width:"1600",height:"900"})),(0,i.kt)("h2",{id:"update-02052022"},"Update 02/05/2022"),(0,i.kt)("p",null,"This post has been updated to reflect the migration of Azure Container Apps from the Microsoft.Web namespace to the Microsoft.App namespace in March 2022. See: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/azure-container-apps/issues/109"},"https://github.com/microsoft/azure-container-apps/issues/109")),(0,i.kt)("h2",{id:"the-containerised-convent"},"The containerised convent"),(0,i.kt)("p",null,"I learn the most about a technology when I'm using it to build something. It so happens that I have an aunt that's a nun, and long ago she persuaded me to build her convent a website. I'm a good nephew and I complied. Since that time I've been merrily overengineering it for fun and non-profit."),(0,i.kt)("p",null,"My aunts website is a pretty vanilla node app. Significantly it is already containerised and runs on ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-gb/services/app-service/containers/"},"Azure App Service Web App for Containers"),". Given it lives in the context of a container, this makes it a great candidate for porting to Azure Container Apps."),(0,i.kt)("p",null,"So that's what we'll do in this post. But where I'm building and deploying my aunt's container, you could equally be substituting your own; with some minimal changes."),(0,i.kt)("h2",{id:"bicep"},"Bicep"),(0,i.kt)("p",null,"Let's begin with the Bicep required to deploy our Azure Container App."),(0,i.kt)("p",null,"In our repository we'll create an ",(0,i.kt)("inlineCode",{parentName:"p"},"infra")," directory, into which we'll place a ",(0,i.kt)("inlineCode",{parentName:"p"},"main.bicep")," file which will contain our Bicep template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bicep"},"param nodeImage string\nparam nodePort int\nparam nodeIsExternalIngress bool\n\nparam containerRegistry string\nparam containerRegistryUsername string\n@secure()\nparam containerRegistryPassword string\n\nparam tags object\n\n@secure()\nparam APPSETTINGS_API_KEY string\nparam APPSETTINGS_DOMAIN string\nparam APPSETTINGS_FROM_EMAIL string\nparam APPSETTINGS_RECIPIENT_EMAIL string\n\nvar location = resourceGroup().location\nvar environmentName = 'env-${uniqueString(resourceGroup().id)}'\nvar minReplicas = 0\n\nvar nodeServiceAppName = 'node-app'\nvar workspaceName = '${nodeServiceAppName}-log-analytics'\nvar appInsightsName = '${nodeServiceAppName}-app-insights'\n\nvar containerRegistryPasswordRef = 'container-registry-password'\nvar mailgunApiKeyRef = 'mailgun-api-key'\n\nresource workspace 'Microsoft.OperationalInsights/workspaces@2021-12-01-preview' = {\n  name: workspaceName\n  location: location\n  tags: tags\n  properties: {\n    sku: {\n      name: 'PerGB2018'\n    }\n    retentionInDays: 30\n    workspaceCapping: {}\n  }\n}\n\nresource appInsights 'Microsoft.Insights/components@2020-02-02' = {\n  name: appInsightsName\n  location: location\n  tags: tags\n  kind: 'web'\n  properties: {\n    Application_Type: 'web'\n    Flow_Type: 'Bluefield'\n  }\n}\n\nresource environment 'Microsoft.App/managedEnvironments@2022-01-01-preview' = {\n  name: environmentName\n  location: location\n  tags: tags\n  properties: {\n    appLogsConfiguration: {\n      destination: 'log-analytics'\n      logAnalyticsConfiguration: {\n        customerId: workspace.properties.customerId\n        sharedKey: listKeys(workspace.id, workspace.apiVersion).primarySharedKey\n      }\n    }\n    containerAppsConfiguration: {\n      daprAIInstrumentationKey: appInsights.properties.InstrumentationKey\n    }\n  }\n}\n\nresource containerApp 'Microsoft.App/containerApps@2022-01-01-preview' = {\n  name: nodeServiceAppName\n  kind: 'containerapps'\n  tags: tags\n  location: location\n  properties: {\n    managedEnvironmentId: environment.id\n    configuration: {\n      secrets: [\n        {\n          name: containerRegistryPasswordRef\n          value: containerRegistryPassword\n        }\n        {\n          name: mailgunApiKeyRef\n          value: APPSETTINGS_API_KEY\n        }\n      ]\n      registries: [\n        {\n          server: containerRegistry\n          username: containerRegistryUsername\n          passwordSecretRef: containerRegistryPasswordRef\n        }\n      ]\n      ingress: {\n        'external': nodeIsExternalIngress\n        'targetPort': nodePort\n      }\n    }\n    template: {\n      containers: [\n        {\n          image: nodeImage\n          name: nodeServiceAppName\n          transport: 'auto'\n          env: [\n            {\n              name: 'APPSETTINGS_API_KEY'\n              secretref: mailgunApiKeyRef\n            }\n            {\n              name: 'APPSETTINGS_DOMAIN'\n              value: APPSETTINGS_DOMAIN\n            }\n            {\n              name: 'APPSETTINGS_FROM_EMAIL'\n              value: APPSETTINGS_FROM_EMAIL\n            }\n            {\n              name: 'APPSETTINGS_RECIPIENT_EMAIL'\n              value: APPSETTINGS_RECIPIENT_EMAIL\n            }\n          ]\n        }\n      ]\n      scale: {\n        minReplicas: minReplicas\n      }\n    }\n  }\n}\n")),(0,i.kt)("p",null,"Let's talk through this template. The environment, workspace and app insights resources are fairly self explanatory. The ",(0,i.kt)("inlineCode",{parentName:"p"},"containerApp")," resource is where the action is. We'll drill into that resource and the parameters used to configure it."),(0,i.kt)("h3",{id:"the-node-container-app"},"The node container app"),(0,i.kt)("p",null,"We're going to create a single container app for our node web application. This is configured with these parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bicep"},"param nodeImage string\nparam nodePort int\nparam nodeIsExternalIngress bool\n")),(0,i.kt)("p",null,"The above parameters relate to the node application that represents the website. The ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeImage")," is the container image which should be deployed to a container app. The ",(0,i.kt)("inlineCode",{parentName:"p"},"nodePort")," is the port from the app which should be exposed (",(0,i.kt)("inlineCode",{parentName:"p"},"3000")," in our case). ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeIsExternalIngress")," is ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/container-apps/ingress?tabs=bash#configuration"},"whether the container should be accessible on the internet"),". (Always ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," incidentally.)"),(0,i.kt)("p",null,"When these parameters are applied to the ",(0,i.kt)("inlineCode",{parentName:"p"},"containerApp")," resource, it looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bicep"},"var nodeServiceAppName = 'node-app'\n\nresource containerApp 'Microsoft.App/containerApps@2022-01-01-preview' = {\n  // ...\n  properties: {\n      // ...\n      ingress: {\n        'external': nodeIsExternalIngress\n        'targetPort': nodePort\n      }\n    }\n    template: {\n      containers: [\n        {\n          image: nodeImage\n          name: nodeServiceAppName\n          // ...\n        }\n      ]\n      // ...\n    }\n  }\n}\n")),(0,i.kt)("h3",{id:"accessing-the-github-container-registry"},"Accessing the GitHub Container Registry"),(0,i.kt)("p",null,"Given that we've told Bicep to deploy an ",(0,i.kt)("inlineCode",{parentName:"p"},"image"),", we're going to need to tell it what registry it can use to acquire that image. Our template takes these parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bicep"},"param containerRegistry string\nparam containerRegistryUsername string\n@secure()\nparam containerRegistryPassword string\n\nparam tags object\n")),(0,i.kt)("p",null,"With the exception of the ",(0,i.kt)("inlineCode",{parentName:"p"},"tags")," object which is metadata to apply to resources, these parameters are related to the container registry where our images will be stored. GitHub's in our case. Remember, what we deploy to Azure Container Apps are container images. To get something running in an ACA, it first has to reside in a container registry. There's a multitude of container registries out there and we're using the one directly available in GitHub. As an alternative, we could use an ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/container-registry/"},"Azure Container Registry"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," - or something else entirely."),(0,i.kt)("p",null,"Do note the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/parameters#secure-parameters"},(0,i.kt)("inlineCode",{parentName:"a"},"@secure()"))," decorator. This marks the ",(0,i.kt)("inlineCode",{parentName:"p"},"containerRegistryPassword")," parameter as secure. The value for a secure parameter isn't saved to the deployment history and isn't logged. Typically you'll want to mark secrets with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@secure()")," decorator for this very reason."),(0,i.kt)("p",null,"We use the parameters to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"registries")," property of our container app. This tells the ACA where it can go to collect the image it needs. You can also see our first usage of secrets here. We declare the ",(0,i.kt)("inlineCode",{parentName:"p"},"containerRegistryPassword")," as a secret which is stored against the ref ",(0,i.kt)("inlineCode",{parentName:"p"},"'container-registry-password'"),"; captured as the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"containerRegistryPasswordRef"),". That variable is then referenced in the ",(0,i.kt)("inlineCode",{parentName:"p"},"passwordSecretRef")," property - thus telling ACA where it can find the password."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bicep"},"var containerRegistryPasswordRef = 'container-registry-password'\n\nresource containerApp 'Microsoft.App/containerApps@2022-01-01-preview' = {\n  // ...\n  properties: {\n    // ...\n    configuration: {\n      secrets: [\n        {\n          name: containerRegistryPasswordRef\n          value: containerRegistryPassword\n        }\n        // ...\n      ]\n      registries: [\n        {\n          server: containerRegistry\n          username: containerRegistryUsername\n          passwordSecretRef: containerRegistryPasswordRef\n        }\n      ]\n      // ...\n    }\n    // ...\n  }\n}\n")),(0,i.kt)("h3",{id:"secrets--configuration"},"Secrets / Configuration"),(0,i.kt)("p",null,"The final collection of parameters are unrelated to the infrastructure of deployment, rather they are the things required to configure our running application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bicep"},"@secure()\nparam APPSETTINGS_API_KEY string\nparam APPSETTINGS_DOMAIN string\nparam APPSETTINGS_FROM_EMAIL string\nparam APPSETTINGS_RECIPIENT_EMAIL string\n")),(0,i.kt)("p",null,"Again we've got a secret marked with ",(0,i.kt)("inlineCode",{parentName:"p"},"@secure()")," in the form of our ",(0,i.kt)("inlineCode",{parentName:"p"},"APPSETTINGS_API_KEY"),". Just as we did with ",(0,i.kt)("inlineCode",{parentName:"p"},"containerRegistryPassword"),", we declare ",(0,i.kt)("inlineCode",{parentName:"p"},"APPSETTINGS_API_KEY")," to be a secret, which is stored against the ref ",(0,i.kt)("inlineCode",{parentName:"p"},"'mailgun-api-key'"),"; captured as the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"mailgunApiKeyRef"),"."),(0,i.kt)("p",null,"All of our configuration is exposed to the running application through environment variables. By and large this is achieved through the mechanism of key / value pairs (well technically ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),") with a slight variation for secrets. Similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"passwordSecretRef")," mechanism we used for the registry password, we use a ",(0,i.kt)("inlineCode",{parentName:"p"},"secretref")," in place of ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," when passing a secret, and the value will be the ref that was set up in the ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets")," section; ",(0,i.kt)("inlineCode",{parentName:"p"},"mailgunApiKeyRef")," in this case."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bicep"},"var mailgunApiKeyRef = 'mailgun-api-key'\n\nresource containerApp 'Microsoft.App/containerApps@2022-01-01-preview' = {\n  // ...\n  properties: {\n    // ...\n    configuration: {\n      secrets: [\n        // ...\n        {\n          name: mailgunApiKeyRef\n          value: APPSETTINGS_API_KEY\n        }\n      ]\n      // ...\n    }\n    template: {\n      containers: [\n        {\n          // ...\n          env: [\n            {\n              name: 'APPSETTINGS_API_KEY'\n              secretref: mailgunApiKeyRef\n            }\n            {\n              name: 'APPSETTINGS_DOMAIN'\n              value: APPSETTINGS_DOMAIN\n            }\n            {\n              name: 'APPSETTINGS_FROM_EMAIL'\n              value: APPSETTINGS_FROM_EMAIL\n            }\n            {\n              name: 'APPSETTINGS_RECIPIENT_EMAIL'\n              value: APPSETTINGS_RECIPIENT_EMAIL\n            }\n          ]\n        }\n      ]\n      // ...\n    }\n  }\n}\n")),(0,i.kt)("h2",{id:"setting-up-a-resource-group"},"Setting up a resource group"),(0,i.kt)("p",null,"With our Bicep in place, we're going to need a resource group to send it to. Right now, Azure Container Apps aren't available everywhere. So we're going to create ourselves a resource group in North Europe which does support ACAs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"az group create -g rg-aca -l northeurope\n")),(0,i.kt)("h2",{id:"secrets-for-github-actions"},"Secrets for GitHub Actions"),(0,i.kt)("p",null,"We're aiming to set up a GitHub Action to handle our deployment. This will depend upon a number of secrets:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the secrets in the GitHub website that we need to create",src:t(7758).Z,width:"1544",height:"842"})),(0,i.kt)("p",null,"We'll need to create each of these secrets."),(0,i.kt)("h3",{id:"azure_credentials---github-logging-into-azure"},(0,i.kt)("inlineCode",{parentName:"h3"},"AZURE_CREDENTIALS")," - GitHub logging into Azure"),(0,i.kt)("p",null,"So GitHub Actions can interact with Azure on our behalf, we need to provide it with some credentials. We'll use the Azure CLI to create these:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'az ad sp create-for-rbac --name "myApp" --role contributor \\\n    --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group} \\\n    --sdk-auth\n')),(0,i.kt)("p",null,"Remember to replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"{subscription-id}")," with your subscription id and ",(0,i.kt)("inlineCode",{parentName:"p"},"{resource-group}")," with the name of your resource group (",(0,i.kt)("inlineCode",{parentName:"p"},"rg-aca")," if you're following along). This command will pump out a lump of JSON that looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "a-client-id",\n  "clientSecret": "a-client-secret",\n  "subscriptionId": "a-subscription-id",\n  "tenantId": "a-tenant-id",\n  "activeDirectoryEndpointUrl": "https://login.microsoftonline.com",\n  "resourceManagerEndpointUrl": "https://management.azure.com/",\n  "activeDirectoryGraphResourceId": "https://graph.windows.net/",\n  "sqlManagementEndpointUrl": "https://management.core.windows.net:8443/",\n  "galleryEndpointUrl": "https://gallery.azure.com/",\n  "managementEndpointUrl": "https://management.core.windows.net/"\n}\n')),(0,i.kt)("p",null,"Take this and save it as the ",(0,i.kt)("inlineCode",{parentName:"p"},"AZURE_CREDENTIALS")," secret in Azure."),(0,i.kt)("h3",{id:"packages_token---azure-accessing-the-github-container-registry"},(0,i.kt)("inlineCode",{parentName:"h3"},"PACKAGES_TOKEN")," - Azure accessing the GitHub container registry"),(0,i.kt)("p",null,"We also need a secret for accessing packages from Azure. We're going to be publishing packages to the GitHub container registry. Azure is going to need to be able to access this when we're deploying. ACA deployment works by telling Azure where to look for an image and providing any necessary credentials to do the acquisition. To facilitate this we'll set up a ",(0,i.kt)("inlineCode",{parentName:"p"},"PACKAGES_TOKEN")," secret. This is a GitHub personal access token with the ",(0,i.kt)("inlineCode",{parentName:"p"},"read:packages")," scope. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Follow the instructions here to create the token.")),(0,i.kt)("h3",{id:"secrets-for-the-app"},"Secrets for the app"),(0,i.kt)("p",null,"Alongside these infrastructure / deployment related secrets, we'll need ones to configure the app at runtime:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPSETTINGS_API_KEY")," - an API key for Mailgun which will be used to send emails"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPSETTINGS_DOMAIN")," - the domain for the email eg ",(0,i.kt)("inlineCode",{parentName:"li"},"mg.poorclaresarundel.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPSETTINGS_FROM_EMAIL")," - who automated emails should come from eg ",(0,i.kt)("inlineCode",{parentName:"li"},"noreply@mg.poorclaresarundel.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPSETTINGS_RECIPIENT_EMAIL")," - the email address emails should be sent to")),(0,i.kt)("p",null,"Strictly speaking, only the API key is a secret. But to simplify this post we'll configure all of these as secrets in GitHub."),(0,i.kt)("h2",{id:"deploying-with-github-actions"},"Deploying with GitHub Actions"),(0,i.kt)("p",null,"With our secrets configured, we're now well placed to write our GitHub Action. We'll create a ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/deploy.yaml")," file in our repository and populate it thusly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# yaml-language-server: $schema=./build.yaml\nname: Build and Deploy\non:\n  # Trigger the workflow on push or pull request,\n  # but only for the main branch\n  push:\n    branches:\n      - main\n  pull_request:\n    branches:\n      - main\n    # Publish semver tags as releases.\n    tags: [\'v*.*.*\']\n  workflow_dispatch:\n\nenv:\n  RESOURCE_GROUP: rg-aca\n  REGISTRY: ghcr.io\n  IMAGE_NAME: ${{ github.repository }}\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        services:\n          [{ \'imageName\': \'node-service\', \'directory\': \'./node-service\' }]\n    permissions:\n      contents: read\n      packages: write\n    outputs:\n      containerImage-node: ${{ steps.image-tag.outputs.image-node-service }}\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      # Login against a Docker registry except on PR\n      # https://github.com/docker/login-action\n      - name: Log into registry ${{ env.REGISTRY }}\n        if: github.event_name != \'pull_request\'\n        uses: docker/login-action@v1\n        with:\n          registry: ${{ env.REGISTRY }}\n          username: ${{ github.actor }}\n          password: ${{ secrets.GITHUB_TOKEN }}\n\n      # Extract metadata (tags, labels) for Docker\n      # https://github.com/docker/metadata-action\n      - name: Extract Docker metadata\n        id: meta\n        uses: docker/metadata-action@v3\n        with:\n          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}/${{ matrix.services.imageName }}\n          tags: |\n            type=semver,pattern={{version}}\n            type=semver,pattern={{major}}.{{minor}}\n            type=semver,pattern={{major}}\n            type=ref,event=branch\n            type=sha\n\n      # Build and push Docker image with Buildx (don\'t push on PR)\n      # https://github.com/docker/build-push-action\n      - name: Build and push Docker image\n        uses: docker/build-push-action@v2\n        with:\n          context: ${{ matrix.services.directory }}\n          push: ${{ github.event_name != \'pull_request\' }}\n          tags: ${{ steps.meta.outputs.tags }}\n          labels: ${{ steps.meta.outputs.labels }}\n\n      - name: Output image tag\n        id: image-tag\n        run: echo "::set-output name=image-${{ matrix.services.imageName }}::${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}/${{ matrix.services.imageName }}:sha-$(git rev-parse --short HEAD)" | tr \'[:upper:]\' \'[:lower:]\'\n\n  deploy:\n    runs-on: ubuntu-latest\n    needs: [build]\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      - name: Azure Login\n        uses: azure/login@v1\n        with:\n          creds: ${{ secrets.AZURE_CREDENTIALS }}\n\n      - name: Deploy bicep\n        uses: azure/CLI@v1\n        if: github.event_name != \'pull_request\'\n        with:\n          inlineScript: |\n            tags=\'{"owner":"johnnyreilly", "email":"johnny_reilly@hotmail.com"}\'\n            az deployment group create \\\n              --resource-group ${{ env.RESOURCE_GROUP }} \\\n              --template-file ./infra/main.bicep \\\n              --parameters \\\n                  nodeImage=\'${{ needs.build.outputs.containerImage-node }}\' \\\n                  nodePort=3000 \\\n                  nodeIsExternalIngress=true \\\n                  containerRegistry=${{ env.REGISTRY }} \\\n                  containerRegistryUsername=${{ github.actor }} \\\n                  containerRegistryPassword=${{ secrets.PACKAGES_TOKEN }} \\\n                  tags="$tags" \\\n                  APPSETTINGS_API_KEY="${{ secrets.APPSETTINGS_API_KEY }}" \\\n                  APPSETTINGS_DOMAIN="${{ secrets.APPSETTINGS_DOMAIN }}" \\\n                  APPSETTINGS_FROM_EMAIL="${{ secrets.APPSETTINGS_FROM_EMAIL }}" \\\n                  APPSETTINGS_RECIPIENT_EMAIL="${{ secrets.APPSETTINGS_RECIPIENT_EMAIL }}"\n\n      - name: What-if bicep\n        uses: azure/CLI@v1\n        if: github.event_name == \'pull_request\'\n        with:\n          inlineScript: |\n            tags=\'{"owner":"johnnyreilly", "email":"johnny_reilly@hotmail.com"}\'\n            az deployment group what-if \\\n              --resource-group ${{ env.RESOURCE_GROUP }} \\\n              --template-file ./infra/main.bicep \\\n              --parameters \\\n                  nodeImage=\'${{ needs.build.outputs.containerImage-node }}\' \\\n                  nodePort=3000 \\\n                  nodeIsExternalIngress=true \\\n                  containerRegistry=${{ env.REGISTRY }} \\\n                  containerRegistryUsername=${{ github.actor }} \\\n                  containerRegistryPassword=${{ secrets.PACKAGES_TOKEN }} \\\n                  tags="$tags" \\\n                  APPSETTINGS_API_KEY="${{ secrets.APPSETTINGS_API_KEY }}" \\\n                  APPSETTINGS_DOMAIN="${{ secrets.APPSETTINGS_DOMAIN }}" \\\n                  APPSETTINGS_FROM_EMAIL="${{ secrets.APPSETTINGS_FROM_EMAIL }}" \\\n                  APPSETTINGS_RECIPIENT_EMAIL="${{ secrets.APPSETTINGS_RECIPIENT_EMAIL }}"\n')),(0,i.kt)("p",null,"There's a lot in this workflow. Let's dig into the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," jobs to see what's happening."),(0,i.kt)("h3",{id:"build---building-our-image"},(0,i.kt)("inlineCode",{parentName:"h3"},"build")," - building our image"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," job is all about building our container images and pushing then to the GitHub registry. It's heavily inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/jeffhollan"},"Jeff Hollan"),"'s ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/container-apps-store-api-microservice"},"Azure sample app GHA"),". When we look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"strategy")," we can see a ",(0,i.kt)("inlineCode",{parentName:"p"},"matrix")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," consisting of a single service; our node app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"strategy:\n  matrix:\n    services: [{ 'imageName': 'node-service', 'directory': './node-service' }]\n")),(0,i.kt)("p",null,"This is a matrix because a typical use case of an Azure Container App will be multi-container, so we're starting generic from the beginning. The ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," pumps out the details of our ",(0,i.kt)("inlineCode",{parentName:"p"},"containerImage-node")," image to be used later:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"outputs:\n  containerImage-node: ${{ steps.image-tag.outputs.image-node-service }}\n")),(0,i.kt)("p",null,"With that understanding in place, let's examine what each of the steps in the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," job does"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Log into registry")," - logs into the GitHub container registry"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Extract Docker metadata")," - acquire tags which will be used for versioning"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Build and push Docker image")," - build the docker image and if this is not a PR: tag, label and push it to the registry"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Output image tag")," - write out the image tag for usage in deployment")),(0,i.kt)("h3",{id:"deploy---shipping-our-image-to-azure"},(0,i.kt)("inlineCode",{parentName:"h3"},"deploy")," - shipping our image to Azure"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," job does two possible things with our Bicep template; ",(0,i.kt)("inlineCode",{parentName:"p"},"main.bicep"),"."),(0,i.kt)("p",null,"In the case of a pull request, it runs the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/deployment/group?view=azure-cli-latest#az_deployment_group_what_if"},(0,i.kt)("inlineCode",{parentName:"a"},"az deployment group what-if"))," - this allows us to see what the effect would be of applying a PR to our infrastructure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: What-if bicep\n  uses: azure/CLI@v1\n  if: github.event_name == \'pull_request\'\n  with:\n    inlineScript: |\n      tags=\'{"owner":"johnnyreilly", "email":"johnny_reilly@hotmail.com"}\'\n      az deployment group what-if \\\n        --resource-group ${{ env.RESOURCE_GROUP }} \\\n        --template-file ./infra/main.bicep \\\n        --parameters \\\n            nodeImage=\'${{ needs.build.outputs.containerImage-node }}\' \\\n            nodePort=3000 \\\n            nodeIsExternalIngress=true \\\n            containerRegistry=${{ env.REGISTRY }} \\\n            containerRegistryUsername=${{ github.actor }} \\\n            containerRegistryPassword=${{ secrets.PACKAGES_TOKEN }} \\\n            tags="$tags" \\\n            APPSETTINGS_API_KEY="${{ secrets.APPSETTINGS_API_KEY }}" \\\n            APPSETTINGS_DOMAIN="${{ secrets.APPSETTINGS_DOMAIN }}" \\\n            APPSETTINGS_FROM_EMAIL="${{ secrets.APPSETTINGS_FROM_EMAIL }}" \\\n            APPSETTINGS_RECIPIENT_EMAIL="${{ secrets.APPSETTINGS_RECIPIENT_EMAIL }}"\n')),(0,i.kt)("p",null,"When it's not a pull request, it runs the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/deployment/group?view=azure-cli-latest#az_deployment_group_create"},(0,i.kt)("inlineCode",{parentName:"a"},"az deployment group create"))," command which performs a deployment of our ",(0,i.kt)("inlineCode",{parentName:"p"},"main.bicep")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Deploy bicep\n  uses: azure/CLI@v1\n  if: github.event_name != \'pull_request\'\n  with:\n    inlineScript: |\n      tags=\'{"owner":"johnnyreilly", "email":"johnny_reilly@hotmail.com"}\'\n      az deployment group create \\\n        --resource-group ${{ env.RESOURCE_GROUP }} \\\n        --template-file ./infra/main.bicep \\\n        --parameters \\\n            nodeImage=\'${{ needs.build.outputs.containerImage-node }}\' \\\n            nodePort=3000 \\\n            nodeIsExternalIngress=true \\\n            containerRegistry=${{ env.REGISTRY }} \\\n            containerRegistryUsername=${{ github.actor }} \\\n            containerRegistryPassword=${{ secrets.PACKAGES_TOKEN }} \\\n            tags="$tags" \\\n            APPSETTINGS_API_KEY="${{ secrets.APPSETTINGS_API_KEY }}" \\\n            APPSETTINGS_DOMAIN="${{ secrets.APPSETTINGS_DOMAIN }}" \\\n            APPSETTINGS_FROM_EMAIL="${{ secrets.APPSETTINGS_FROM_EMAIL }}" \\\n            APPSETTINGS_RECIPIENT_EMAIL="${{ secrets.APPSETTINGS_RECIPIENT_EMAIL }}"\n')),(0,i.kt)("p",null,"In either case we pass the same set of parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'nodeImage=\'${{ needs.build.outputs.containerImage-node }}\' \\\nnodePort=3000 \\\nnodeIsExternalIngress=true \\\ncontainerRegistry=${{ env.REGISTRY }} \\\ncontainerRegistryUsername=${{ github.actor }} \\\ncontainerRegistryPassword=${{ secrets.PACKAGES_TOKEN }} \\\ntags="$tags" \\\nAPPSETTINGS_API_KEY="${{ secrets.APPSETTINGS_API_KEY }}" \\\nAPPSETTINGS_DOMAIN="${{ secrets.APPSETTINGS_DOMAIN }}" \\\nAPPSETTINGS_FROM_EMAIL="${{ secrets.APPSETTINGS_FROM_EMAIL }}" \\\nAPPSETTINGS_RECIPIENT_EMAIL="${{ secrets.APPSETTINGS_RECIPIENT_EMAIL }}"\n')),(0,i.kt)("p",null,"These are either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"secrets we set up earlier"),(0,i.kt)("li",{parentName:"ul"},"environment variables declared at the start of the script or"),(0,i.kt)("li",{parentName:"ul"},"outputs from the build step - this is where we acquire our node image")),(0,i.kt)("h2",{id:"running-it"},"Running it"),(0,i.kt)("p",null,"When the GitHub Action has been run you'll find that Azure Container App is now showing up inside the Azure Portal in your resource group, alongside the other resources:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of the Azure Container App&#39;s resource group in the Azure Portal",src:t(18939).Z,width:"2507",height:"420"})),(0,i.kt)("p",null,"And when we take a closer look at the container app, we find a URL we can navigate to:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of the Azure Container App in the Azure Portal revealing it&#39;s URL",src:t(36280).Z,width:"1404",height:"388"})),(0,i.kt)("p",null,"Congratulations! You've built and deployed a simple web app to Azure Container Apps with Bicep and GitHub Actions and secrets."))}g.isMDXComponent=!0},36280:function(e,n,t){n.Z=t.p+"assets/images/screenshot-azure-portal-container-app-url-ed4d07a3928693eb95afb4707dd78ce5.png"},18939:function(e,n,t){n.Z=t.p+"assets/images/screenshot-azure-portal-container-app-ee70db004700ddaac1de8e411a9b87da.png"},7758:function(e,n,t){n.Z=t.p+"assets/images/screenshot-github-secrets-99b5553140a144c164a434c95dd7e4e1.png"},70386:function(e,n,t){n.Z=t.p+"assets/images/title-image-3da5757ae1c7fd02de2618a79f791be9.png"}}]);