"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[32408],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||u;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,a=new Array(u);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<u;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13039:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(87462),r=n(63366),u=(n(67294),n(3905)),a=["components"],i={title:"Query deployment outputs with the Azure CLI",authors:"johnnyreilly",tags:["Azure CLI","deployment outputs","bash","jq","GitHub Actions"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/2021/12/28/azure-cli-show-query-output-properties",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-12-28-azure-cli-show-query-output-properties/index.md",source:"@site/blog/2021-12-28-azure-cli-show-query-output-properties/index.md",title:"Query deployment outputs with the Azure CLI",description:"It's often desirable to query the outputs of deployments to Azure. This post demonstrates how to do this using the Azure CLI, bash and jq. It also shows how to generically convert deployment outputs to GitHub Action job outputs.",date:"2021-12-28T00:00:00.000Z",formattedDate:"December 28, 2021",tags:[{label:"Azure CLI",permalink:"/tags/azure-cli"},{label:"deployment outputs",permalink:"/tags/deployment-outputs"},{label:"bash",permalink:"/tags/bash"},{label:"jq",permalink:"/tags/jq"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"}],readingTime:2.36,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],nextItem:{title:"Azure Container Apps: build and deploy with Bicep and GitHub Actions",permalink:"/2021/12/27/azure-container-apps-build-and-deploy-with-bicep-and-github-actions"}},s={image:n(26067).Z,authorsImageUrls:[void 0]},c=[{value:"Deployment outputs",id:"deployment-outputs",children:[],level:2},{value:"Acquire all outputs",id:"acquire-all-outputs",children:[],level:2},{value:"Acquire an individual output",id:"acquire-an-individual-output",children:[],level:2},{value:"Convert deployment outputs to GitHub Action job outputs",id:"convert-deployment-outputs-to-github-action-job-outputs",children:[],level:2}],h={toc:c};function d(e){var t=e.components,i=(0,r.Z)(e,a);return(0,u.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"It's often desirable to query the outputs of deployments to Azure. This post demonstrates how to do this using the Azure CLI, bash and jq. It also shows how to generically convert deployment outputs to GitHub Action job outputs."),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"title image reading &quot;Query deployment outputs with the Azure CLI&quot; with the Azure logo and the Azure Cloud Shell in the background",src:n(26067).Z})),(0,u.kt)("h2",{id:"deployment-outputs"},"Deployment outputs"),(0,u.kt)("p",null,"When we deploy something to Azure, we frequently have outputs which we want to use. Let's consider the canonical case, whereby a website is created and we want to use the URL of where it has been deployed. We can see these values in the Azure Portal:"),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"a screenshot of the Azure portal demostrating deployment outputs, there is a single output of &quot;nodeUrl&quot;",src:n(10161).Z})),(0,u.kt)("p",null,"The above deployment has a single output of ",(0,u.kt)("inlineCode",{parentName:"p"},"nodeUrl"),". Rather than logging into the portal to acquire this value, how can we do so using the Azure CLI and bash?"),(0,u.kt)("h2",{id:"acquire-all-outputs"},"Acquire all outputs"),(0,u.kt)("p",null,"The way to acquire outputs from the Azure CLI is using the ",(0,u.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/group/deployment?view=azure-cli-latest#az_group_deployment_show"},(0,u.kt)("inlineCode",{parentName:"a"},"az group deployment show"))," command:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"az deployment group show \\\n  -g <resource-group-name> \\\n  -n <deployment-name> \\\n  --query properties.outputs\n")),(0,u.kt)("p",null,"Running the above will produce a piece of JSON that contains all our outputs. In our case, we have a single deployment output: ",(0,u.kt)("inlineCode",{parentName:"p"},"nodeUrl"),". So our JSON looks like this:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodeUrl": {\n    "type": "String",\n    "value": "some.url.northeurope.azurecontainerapps.io"\n  }\n}\n')),(0,u.kt)("h2",{id:"acquire-an-individual-output"},"Acquire an individual output"),(0,u.kt)("p",null,"To acquire an individual output, you can provide a targeted ",(0,u.kt)("inlineCode",{parentName:"p"},"--query")," to pull out the value you care about. However, there's a slight issue:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},'john@Azure:~$ NODE_URL=$(az deployment group show -g rg-aca -n our-deployment --query properties.outputs.nodeUrl.value)\njohn@Azure:~$ echo $NODE_URL\n"some.url.northeurope.azurecontainerapps.io"\n')),(0,u.kt)("p",null,"The value we capture in the ",(0,u.kt)("inlineCode",{parentName:"p"},"NODE_URL")," variable above is surrounded by quotes. These will probably get in the way when we're scripting something with this. Rather than purging them with bash, I tend to use ",(0,u.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/manual/"},(0,u.kt)("inlineCode",{parentName:"a"},"jq"),"'s ",(0,u.kt)("inlineCode",{parentName:"a"},"--raw-output / -r")," option")," to grab the raw string."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"john@Azure:~$ NODE_URL=$(az deployment group show -g rg-aca -n our-deployment --query properties.outputs | jq -r '.nodeUrl.value')\njohn@Azure:~$ echo $NODE_URL\nsome.url.northeurope.azurecontainerapps.io\n")),(0,u.kt)("p",null,"Perfect!"),(0,u.kt)("h2",{id:"convert-deployment-outputs-to-github-action-job-outputs"},"Convert deployment outputs to GitHub Action job outputs"),(0,u.kt)("p",null,"Before wrapping up, here's one more useful script, if you find yourself automating in the context of GitHub Actions. It's often useful to take the deployment outputs, and convert them into GHA job outputs that can be used in other jobs."),(0,u.kt)("p",null,"With JSON and ",(0,u.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," in hand, it's possible to expose these like so:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},'DEPLOYMENT_OUTPUTS=$(az deployment group show \\\n  --resource-group ${{ env.RESOURCE_GROUP }} \\\n  --name $DEPLOYMENT_NAME \\\n  --query properties.outputs)\n\necho \'convert deployment outputs to outputs\'\necho $DEPLOYMENT_OUTPUTS | jq -c \'. | to_entries[] | [.key, .value.value]\' |\n  while IFS=$"\\n" read -r c; do\n    OUTPUT_NAME=$(echo "$c" | jq -r \'.[0]\')\n    OUTPUT_VALUE=$(echo "$c" | jq -r \'.[1]\')\n    echo "setting output $OUTPUT_NAME=$OUTPUT_VALUE"\n    echo "::set-output name=$OUTPUT_NAME::$OUTPUT_VALUE"\n  done\n')))}d.isMDXComponent=!0},10161:function(e,t,n){t.Z=n.p+"assets/images/screenshot-azure-portal-deployment-outputs-5255a0e00f149f27ac9f85e8213470a5.png"},26067:function(e,t,n){t.Z=n.p+"assets/images/title-image-4afe592690790b9b7163d8856e8851a8.png"}}]);