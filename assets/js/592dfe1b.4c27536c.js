"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[30470],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"Migrating from GitHub Pages to Azure Static Web Apps",authors:"johnnyreilly",tags:["Azure Static Web Apps","Bicep","GitHub Actions","GitHub Pages"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/2022/02/01/migrating-from-github-pages-to-azure-static-web-apps",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-02-01-migrating-from-github-pages-to-azure-static-web-apps/index.md",source:"@site/blog/2022-02-01-migrating-from-github-pages-to-azure-static-web-apps/index.md",title:"Migrating from GitHub Pages to Azure Static Web Apps",description:"You can use Bicep and GitHub Actions to build and deploy to a static website on Azure Static Web Apps. This post demonstrates how.",date:"2022-02-01T00:00:00.000Z",formattedDate:"February 1, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"Bicep",permalink:"/tags/bicep"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"},{label:"GitHub Pages",permalink:"/tags/git-hub-pages"}],readingTime:7.91,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Migrating from GitHub Pages to Azure Static Web Apps",authors:"johnnyreilly",tags:["Azure Static Web Apps","Bicep","GitHub Actions","GitHub Pages"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Lazy loading images with Docusaurus",permalink:"/2022/02/02/lazy-loading-images-with-docusaurus"},nextItem:{title:"Azure Container Apps: dapr, devcontainer, debug and deploy",permalink:"/2022/01/22/azure-container-apps-dapr-bicep-github-actions-debug-devcontainer"}},u={image:n(50713).Z,authorsImageUrls:[void 0]},c=[{value:"Why migrate?",id:"why-migrate",level:2},{value:"Bicep",id:"bicep",level:2},{value:"Setting up a resource group",id:"setting-up-a-resource-group",level:2},{value:"Secrets for GitHub Actions",id:"secrets-for-github-actions",level:2},{value:"<code>AZURE_CREDENTIALS</code> - GitHub logging into Azure",id:"azure_credentials---github-logging-into-azure",level:3},{value:"<code>WORKFLOW_TOKEN</code> - Azure accessing the GitHub container registry",id:"workflow_token---azure-accessing-the-github-container-registry",level:3},{value:"Deploying with GitHub Actions",id:"deploying-with-github-actions",level:2},{value:"DNS and custom domains",id:"dns-and-custom-domains",level:2}],m={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use Bicep and GitHub Actions to build and deploy to a static website on Azure Static Web Apps. This post demonstrates how."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;Migrating from GitHub Pages to Azure Static Web Apps&quot; with GitHub and Azure Static Web Apps logos",src:n(50713).Z,width:"1600",height:"900"})),(0,o.kt)("h2",{id:"why-migrate"},"Why migrate?"),(0,o.kt)("p",null,"This blog has been hosted on GitHub Pages for some time. It also makes use of Netlify for deployment previews. These are both great, but it's always niggled that there's two mechanisms in play; each separately configured. It's time to simplify."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/app-service/static/"},"Azure Static Web Apps"),' supports both hosting static websites and deployment previews (known as "staging environments"). So we\'re going to migrate across to use Static Web Apps in place of both of GitHub Pages and Netlify. I\'m choosing to use Bicep to do this as I tend towards using infrastructure as code. If you wanted to roll with a more "point and click" approach in the Azure Portal, you could do that too. Simply ignore the Bicep related portions of the post.'),(0,o.kt)("h2",{id:"bicep"},"Bicep"),(0,o.kt)("p",null,"The first thing we're going to need is a Bicep template to deploy our SWA. In our GitHub repo we're going to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"infra")," folder, and in there we'll create a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.bicep")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bicep"},"param location string\nparam branch string\nparam name string\nparam tags object\n@secure()\nparam repositoryToken string\nparam customDomainName string\n\nresource staticWebApp 'Microsoft.Web/staticSites@2021-02-01' = {\n  name: name\n  location: location\n  tags: tags\n  sku: {\n    name: 'Free'\n    tier: 'Free'\n  }\n  properties: {\n    repositoryUrl: 'https://github.com/johnnyreilly/blog.johnnyreilly.com'\n    repositoryToken: repositoryToken\n    branch: branch\n    provider: 'GitHub'\n    stagingEnvironmentPolicy: 'Enabled'\n    allowConfigFileUpdates: true\n    buildProperties:{\n      skipGithubActionWorkflowGeneration: true\n    }\n  }\n}\n\n// resource customDomain 'Microsoft.Web/staticSites/customDomains@2021-02-01' = {\n//   parent: staticWebApp\n//   name: customDomainName\n//   properties: {}\n// }\n\noutput staticWebAppDefaultHostName string = staticWebApp.properties.defaultHostname // eg gentle-bush-0db02ce03.azurestaticapps.net\noutput staticWebAppId string = staticWebApp.id\noutput staticWebAppName string = staticWebApp.name\n")),(0,o.kt)("p",null,"Most of the Bicep template above is self-explanatory. There's a few things to highlight:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We're using the \"Free\" SKU which means we don't have to pay to run our website."),(0,o.kt)("li",{parentName:"ul"},"We need to provide a ",(0,o.kt)("inlineCode",{parentName:"li"},"repositoryToken")," - this is a little surprising as you'll see later in the template that we supply the ",(0,o.kt)("inlineCode",{parentName:"li"},"skipGithubActionWorkflowGeneration: true")," which means we're ",(0,o.kt)("em",{parentName:"li"},"not")," requiring our SWA to interact with GitHub on our behalf - but it seems that there's a requirement for a GitHub token anyway. We'll roll with it."),(0,o.kt)("li",{parentName:"ul"},"We're enabling deployment previews / staging environments with ",(0,o.kt)("inlineCode",{parentName:"li"},"stagingEnvironmentPolicy: 'Enabled'")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"branch")," is always set to ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," - we have to let Azure know this so it knows which branch is the primary branch and hence which other ones will have staging environments."),(0,o.kt)("li",{parentName:"ul"},"It also includes a section for the custom domain which is commented out - we'll uncomment that later once we've set up our custom domain / DNS.")),(0,o.kt)("h2",{id:"setting-up-a-resource-group"},"Setting up a resource group"),(0,o.kt)("p",null,"With our Bicep in place, we're going to need a resource group to send it to. We're going to create ourselves a resource group in West Europe:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az group create -g rg-blog-johnnyreilly-com -l westeurope\n")),(0,o.kt)("h2",{id:"secrets-for-github-actions"},"Secrets for GitHub Actions"),(0,o.kt)("p",null,"We're aiming to set up a GitHub Action to handle our deployment which depends upon some secrets."),(0,o.kt)("h3",{id:"azure_credentials---github-logging-into-azure"},(0,o.kt)("inlineCode",{parentName:"h3"},"AZURE_CREDENTIALS")," - GitHub logging into Azure"),(0,o.kt)("p",null,"First a ",(0,o.kt)("inlineCode",{parentName:"p"},"AZURE_CREDENTIALS")," secret that facilitates GitHub logging into Azure. We'll use the Azure CLI to create this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'az ad sp create-for-rbac --name "myApp" --role contributor \\\n    --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group} \\\n    --sdk-auth\n')),(0,o.kt)("p",null,"Remember to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"{subscription-id}")," with your subscription id and ",(0,o.kt)("inlineCode",{parentName:"p"},"{resource-group}")," with the name of your resource group (",(0,o.kt)("inlineCode",{parentName:"p"},"rg-blog-johnnyreilly-com")," if you're following along). This command will pump out a lump of JSON that looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "a-client-id",\n  "clientSecret": "a-client-secret",\n  "subscriptionId": "a-subscription-id",\n  "tenantId": "a-tenant-id",\n  "activeDirectoryEndpointUrl": "https://login.microsoftonline.com",\n  "resourceManagerEndpointUrl": "https://management.azure.com/",\n  "activeDirectoryGraphResourceId": "https://graph.windows.net/",\n  "sqlManagementEndpointUrl": "https://management.core.windows.net:8443/",\n  "galleryEndpointUrl": "https://gallery.azure.com/",\n  "managementEndpointUrl": "https://management.core.windows.net/"\n}\n')),(0,o.kt)("p",null,"Take this and save it as the ",(0,o.kt)("inlineCode",{parentName:"p"},"AZURE_CREDENTIALS")," secret in GitHub."),(0,o.kt)("h3",{id:"workflow_token---azure-accessing-the-github-container-registry"},(0,o.kt)("inlineCode",{parentName:"h3"},"WORKFLOW_TOKEN")," - Azure accessing the GitHub container registry"),(0,o.kt)("p",null,"We also need a secret for updating workflows from Azure. Azure Static Web Apps can update your workflow - they need access to do this when we're deploying. To facilitate this we'll set up a ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKFLOW_TOKEN")," secret. This is a GitHub personal access token with the ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow")," scope. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Follow the instructions here to create the token.")),(0,o.kt)("p",null,"Ironically, we're not planning to use this functionality, but the validation for the Bicep template will fail if it isn't supplied."),(0,o.kt)("h2",{id:"deploying-with-github-actions"},"Deploying with GitHub Actions"),(0,o.kt)("p",null,"With our secrets configured, we're now well placed to update our GitHub Action. We'll tweak the content of ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/build-and-deploy.yaml")," file in our repository to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Build and Deploy\n\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    types: [opened, synchronize, reopened, closed]\n    branches:\n      - main\n\nenv:\n  RESOURCE_GROUP: rg-blog-johnnyreilly-com\n  LOCATION: westeurope\n  STATICWEBAPPNAME: blog.johnnyreilly.com\n  TAGS: '{\"owner\":\"johnnyreilly\", \"email\":\"johnny_reilly@hotmail.com\"}'\n\njobs:\n  build_and_deploy_swa_job:\n    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')\n    runs-on: ubuntu-latest\n    name: Build and deploy\n    steps:\n      - uses: actions/checkout@v2\n        with:\n          submodules: true\n\n      - name: Azure Login\n        uses: azure/login@v1\n        with:\n          creds: ${{ secrets.AZURE_CREDENTIALS }}\n\n      - name: Set Deployment Name\n        id: deployment_name\n        run: |\n          REF_SHA='${{ github.ref }}.${{ github.sha }}'\n          DEPLOYMENT_NAME=\"${REF_SHA////-}\"\n          echo \"::set-output name=DEPLOYMENT_NAME::$DEPLOYMENT_NAME\"\n\n      - name: Static Web App - change details\n        id: static_web_app_what_if\n        if: github.event_name == 'pull_request'\n        uses: azure/CLI@v1\n        with:\n          inlineScript: |\n            az deployment group what-if \\\n              --resource-group ${{ env.RESOURCE_GROUP }} \\\n              --name \"${{ steps.deployment_name.outputs.DEPLOYMENT_NAME }}\" \\\n              --template-file ./infra/main.bicep \\\n              --parameters \\\n                  branch='main' \\\n                  location='${{ env.LOCATION }}' \\\n                  name='${{ env.STATICWEBAPPNAME }}' \\\n                  tags='${{ env.TAGS }}' \\\n                  repositoryToken='${{ secrets.WORKFLOW_TOKEN }}' \\\n                  customDomainName='${{ env.STATICWEBAPPNAME }}'\n\n      - name: Static Web App - deploy infra\n        id: static_web_app_deploy\n        if: github.event_name != 'pull_request'\n        uses: azure/CLI@v1\n        with:\n          inlineScript: |\n            az deployment group create \\\n              --resource-group ${{ env.RESOURCE_GROUP }} \\\n              --name \"${{ steps.deployment_name.outputs.DEPLOYMENT_NAME }}\" \\\n              --template-file ./infra/main.bicep \\\n              --parameters \\\n                  branch='main' \\\n                  location='${{ env.LOCATION }}' \\\n                  name='${{ env.STATICWEBAPPNAME }}' \\\n                  tags='${{ env.TAGS }}' \\\n                  repositoryToken='${{ secrets.WORKFLOW_TOKEN }}' \\\n                  customDomainName='${{ env.STATICWEBAPPNAME }}'\n\n      - name: Static Web App - get API key for deployment\n        id: static_web_app_apikey\n        uses: azure/CLI@v1\n        with:\n          inlineScript: |\n            APIKEY=$(az staticwebapp secrets list --name '${{ env.STATICWEBAPPNAME }}' | jq -r '.properties.apiKey')\n            echo \"::set-output name=APIKEY::$APIKEY\"\n\n      - name: Static Web App - build and deploy\n        id: static_web_app_build_and_deploy\n        uses: Azure/static-web-apps-deploy@v1\n        with:\n          azure_static_web_apps_api_token: ${{ steps.static_web_app_apikey.outputs.APIKEY }}\n          repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)\n          action: 'upload'\n          ###### Repository/Build Configurations - These values can be configured to match your app requirements. ######\n          # For more information regarding Static Web App workflow configurations, please visit: https://aka.ms/swaworkflowconfig\n          app_location: '/blog-website' # App source code path\n          api_location: '' # Api source code path - optional\n          output_location: 'build' # Built app content directory - optional\n          ###### End of Repository/Build Configurations ######\n\n      - name: Static Web App - get preview URL\n        id: static_web_app_preview_url\n        uses: azure/CLI@v1\n        with:\n          inlineScript: |\n            DEFAULTHOSTNAME=$(az staticwebapp show -n '${{ env.STATICWEBAPPNAME }}' | jq -r '.defaultHostname')\n            echo $DEFAULTHOSTNAME\n\n            PREVIEW_URL=\"https://${DEFAULTHOSTNAME/.[1-9]./-${{github.event.pull_request.number }}.${{ env.LOCATION }}.1.}\"\n            echo $PREVIEW_URL\n\n            echo \"::set-output name=PREVIEW_URL::$PREVIEW_URL\"\n\n    outputs:\n      preview-url: ${{steps.static_web_app_preview_url.outputs.PREVIEW_URL}}\n\n  close_pull_request_job:\n    if: github.event_name == 'pull_request' && github.event.action == 'closed'\n    runs-on: ubuntu-latest\n    name: Cleanup Pull Request staging environment\n    steps:\n      - name: Azure Login\n        uses: azure/login@v1\n        with:\n          creds: ${{ secrets.AZURE_CREDENTIALS }}\n\n      - name: Get API key for deployment\n        id: apikey\n        uses: azure/CLI@v1\n        with:\n          inlineScript: |\n            APIKEY=$(az staticwebapp secrets list --name '${{ env.STATICWEBAPPNAME }}' | jq -r '.properties.apiKey')\n            echo \"::set-output name=APIKEY::$APIKEY\"\n\n      - name: Close Pull Request\n        id: closepullrequest\n        uses: Azure/static-web-apps-deploy@v1\n        with:\n          azure_static_web_apps_api_token: ${{ steps.apikey.outputs.APIKEY }}\n          action: 'close'\n")),(0,o.kt)("p",null,"The above workflow does the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For main branch deployments it releases our static web app making use of Bicep. For pull requests it tells us if there's any changes that the current PR would make to our SWA as a consequence."),(0,o.kt)("li",{parentName:"ul"},"It acquires an API Key from Azure which can then be used to perform a deployment."),(0,o.kt)("li",{parentName:"ul"},"It deploys ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps-deploy"},"using the dedicated GitHub Action for SWAs")),(0,o.kt)("li",{parentName:"ul"},"It calculates the preview URL for a given pull request (it isn't used as yet, but could be)"),(0,o.kt)("li",{parentName:"ul"},"When a pull request is closed it triggers the GitHub Action to clean up the preview environment.")),(0,o.kt)("h2",{id:"dns-and-custom-domains"},"DNS and custom domains"),(0,o.kt)("p",null,"Once our GitHub Action has run for the first time on the main branch, we'll be deploying to Azure Static Web Apps."),(0,o.kt)("p",null,"Once we've started deploying there, we want to get our custom domain set up to point to it. To do this, we're going to fire up the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure Portal")," and go to add a custom domain:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the Azure Portal Add Custom Domain screen",src:n(74280).Z,width:"3041",height:"747"})),(0,o.kt)("p",null,"We're going to add a TXT record for my blog. Azure generates a code for us:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the Azure Portal Add Custom Domain screen",src:n(79382).Z,width:"1146",height:"1106"})),(0,o.kt)("p",null,"We need to take that code and go a register it with our DNS provider. In my case that's Cloudflare, so we can go there and add it:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of Cloudflare",src:n(90630).Z,width:"1411",height:"420"})),(0,o.kt)("p",null,"After a while (I think about twenty minutes in my case), this lead to the domain name being validated:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the Azure Portal Add Custom Domain screen with domain validated",src:n(25426).Z,width:"1151",height:"1092"})),(0,o.kt)("p",null,"Now that we have a custom domain set up in Azure, we want to uncomment the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource customDomain")," portion of the Bicep template now as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bicep"},"resource customDomain 'Microsoft.Web/staticSites/customDomains@2021-02-01' = {\n  parent: staticWebApp\n  name: customDomainName\n  properties: {}\n}\n")),(0,o.kt)("p",null,"This will mean that subsequent deployments to Azure do ",(0,o.kt)("em",{parentName:"p"},"not")," wipe out our newly configured domain name."),(0,o.kt)("p",null,"We're now ready to start pointing our DNS to the Static Web Apps instance. We jump back across to Cloudflare and we amend the CNAME record that currently points to johnnyreilly.github.io, and switch it to point to the auto-generated domain in Azure:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of Cloudflare with the CNAME record set",src:n(66079).Z,width:"2078",height:"497"})),(0,o.kt)("p",null,"And just like that, we're hosted on Static Web Apps!"))}d.isMDXComponent=!0},66079:function(e,t,n){t.Z=n.p+"assets/images/cloudflare-dns-cname-74c273890645a831bf2fa49f3bde5938.png"},90630:function(e,t,n){t.Z=n.p+"assets/images/cloudflare-dns-d9df7cafd40c6388e97edda262be7b08.png"},25426:function(e,t,n){t.Z=n.p+"assets/images/custom-domain-code-validated-8e721890979ebf0d5823de0edbcebfee.png"},79382:function(e,t,n){t.Z=n.p+"assets/images/custom-domain-code-64901834ff6f7a170af783107c9fa592.png"},74280:function(e,t,n){t.Z=n.p+"assets/images/custom-domain-c95f2521026a77cc61ab80762729a016.png"},50713:function(e,t,n){t.Z=n.p+"assets/images/title-image-ad58fe39a1ddaa20c7531b54ca75e98b.png"}}]);