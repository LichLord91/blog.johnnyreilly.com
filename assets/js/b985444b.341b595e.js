"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[91603],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(t),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return t?i.createElement(m,o(o({ref:n},u),{},{components:t})):i.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});t(67294);var i=t(3905);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const o={title:"Permissioning Azure Pipelines with Bicep and Azure RBAC Role Assignments",authors:"johnnyreilly",tags:["Role Assignments","Bicep","Azure DevOps","Azure Pipelines"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/2021/09/12/permissioning-azure-pipelines-bicep-role-assignments",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/index.md",source:"@site/blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/index.md",title:"Permissioning Azure Pipelines with Bicep and Azure RBAC Role Assignments",description:"How can we deploy resources to Azure, and then run an integration test through them in the context of an Azure Pipeline? This post will show how to do this by permissioning our Azure Pipeline to access these resources using Azure RBAC role assignments. It will also demonstrate a dotnet test that runs in the context of the pipeline and makes use of those role assignments.",date:"2021-09-12T00:00:00.000Z",formattedDate:"September 12, 2021",tags:[{label:"Role Assignments",permalink:"/tags/role-assignments"},{label:"Bicep",permalink:"/tags/bicep"},{label:"Azure DevOps",permalink:"/tags/azure-dev-ops"},{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"}],readingTime:8.715,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Permissioning Azure Pipelines with Bicep and Azure RBAC Role Assignments",authors:"johnnyreilly",tags:["Role Assignments","Bicep","Azure DevOps","Azure Pipelines"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Structured data, SEO and React",permalink:"/2021/10/15/structured-data-seo-and-react"},nextItem:{title:"Google APIs: authentication with TypeScript",permalink:"/2021/09/10/google-apis-authentication-with-typescript"}},p={image:t(87577).Z,authorsImageUrls:[void 0]},u=[{value:"Add Event Hubs to your subscription",id:"add-event-hubs-to-your-subscription",level:2},{value:"Permission our service connection / service principal",id:"permission-our-service-connection--service-principal",level:2},{value:"Event Hub and Role Assignment with Bicep",id:"event-hub-and-role-assignment-with-bicep",level:2},{value:"Our test",id:"our-test",level:2},{value:"Azure Pipeline",id:"azure-pipeline",level:2},{value:"Running the pipeline",id:"running-the-pipeline",level:2}],c={toc:u};function h(e){var{components:n}=e,o=a(e,["components"]);return(0,i.kt)("wrapper",r({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How can we deploy resources to Azure, and then run an integration test through them in the context of an Azure Pipeline? This post will show how to do this by permissioning our Azure Pipeline to access these resources using Azure RBAC role assignments. It will also demonstrate a dotnet test that runs in the context of the pipeline and makes use of those role assignments."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"title image reading &quot;Permissioning Azure Pipelines with Bicep and Role Assignments&quot; and some Azure logos",src:t(87577).Z,width:"800",height:"800"})),(0,i.kt)("p",null,"We're following this approach as an alternative to ",(0,i.kt)("a",r({parentName:"p"},{href:"/2021/07/07/output-connection-strings-and-keys-from-azure-bicep"}),"exporting connection strings"),", as these can be viewed in the Azure Portal; which may be an security issue if you have many people who are able to access the portal and view deployment outputs."),(0,i.kt)("p",null,"We're going to demonstrate this approach using Event Hubs. It's worth calling out that this is a generally useful approach which can be applied to any Azure resources that support Azure RBAC Role Assignments. So wherever in this post you read \"Event Hubs\", imagine substituting other Azure resources you're working with."),(0,i.kt)("p",null,"The post will do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add Event Hubs to our Azure subscription"),(0,i.kt)("li",{parentName:"ul"},"Permission our service connection / service principal"),(0,i.kt)("li",{parentName:"ul"},"Deploy to Azure with Bicep"),(0,i.kt)("li",{parentName:"ul"},"Write an integration test"),(0,i.kt)("li",{parentName:"ul"},"Write a pipeline to bring it all together")),(0,i.kt)("h2",r({},{id:"add-event-hubs-to-your-subscription"}),"Add Event Hubs to your subscription"),(0,i.kt)("p",null,"First of all, we may need to add Event Hubs to our Azure subscription."),(0,i.kt)("p",null,"Without this in place, we may encounter errors of the type:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"##","[error]","MissingSubscriptionRegistration: The subscription is not registered to use namespace 'Microsoft.EventHub'. See ",(0,i.kt)("a",r({parentName:"p"},{href:"https://aka.ms/rps-not-found"}),"https://aka.ms/rps-not-found")," for how to register subscriptions.")),(0,i.kt)("p",null,'We do this by going to "Resource Providers" in the ',(0,i.kt)("a",r({parentName:"p"},{href:"https://portal.azure.com"}),"Azure Portal")," and registering the resources you need. Lots are registered by default, but not all."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the Azure Portal, subscriptions -&gt; resource providers section, showing that Event Hubs have been registered",src:t(91821).Z,width:"3152",height:"1682"})),(0,i.kt)("h2",r({},{id:"permission-our-service-connection--service-principal"}),"Permission our service connection / service principal"),(0,i.kt)("p",null,"In order that we can run pipelines related to Azure, we mostly need to have an Azure Resource Manager service connection set up in Azure DevOps. Once that exists, we also need to give it a role assignment to allow it to create role assignments of its own when pipelines are running."),(0,i.kt)("p",null,"Without this in place, we may encounter errors of the type:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"##","[error]","The template deployment failed with error: 'Authorization failed for template resource '{GUID-THE-FIRST}' of type 'Microsoft.Authorization/roleAssignments'. The client '{GUID-THE-SECOND}' with object id '{GUID-THE-SECOND}' does not have permission to perform action 'Microsoft.Authorization/roleAssignments/write' at scope '/subscriptions/","*","*","*","/resourceGroups/johnnyreilly/providers/Microsoft.EventHub/namespaces/evhns-demo/providers/Microsoft.Authorization/roleAssignments/{GUID-THE-FIRST}'.'.")),(0,i.kt)("p",null,'Essentially, we want to be able to run pipelines that say "hey Azure, we want to give permissions to our service connection". We are doing this ',(0,i.kt)("em",{parentName:"p"},"with")," the self same service connection, so (chicken and egg) we first need to give it permission to give those commands in future. This is a little confusing; but let's role with it. (Pun most definitely intended. \ud83d\ude09)"),(0,i.kt)("p",null,"To grant that permission / add that role assignment, we go to the service connection in Azure Devops:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the service connection in Azure DevOps",src:t(64913).Z,width:"914",height:"560"})),(0,i.kt)("p",null,"We can see there's two links here; first we'll click on \"Manage Service Principal\", which will take us to the service principal in the Azure Portal:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the service principal in the Azure Portal",src:t(76968).Z,width:"1954",height:"740"})),(0,i.kt)("p",null,'Take note of the display name of the service principal; we\'ll need that as we click on the "Manage service connection roles" link, which will take us to the resource groups IAM page in the Azure Portal:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the resource groups IAM page in the Azure Portal",src:t(52666).Z,width:"3020",height:"1308"})),(0,i.kt)("p",null,'Here we can click on "Add role assignment", select "Owner":'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the add role assignment IAM page in the Azure Portal",src:t(91766).Z,width:"3020",height:"722"})),(0,i.kt)("p",null,"Then when selecting members we should be able to look up the service principal to assign it:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the add role assignment select member IAM page in the Azure Portal",src:t(50961).Z,width:"3584",height:"724"})),(0,i.kt)("p",null,"We now have a service connection which we should be able to use for granting permissions / role assignments, which is what we need."),(0,i.kt)("h2",r({},{id:"event-hub-and-role-assignment-with-bicep"}),"Event Hub and Role Assignment with Bicep"),(0,i.kt)("p",null,"Next we want a Bicep file that will, when run, provision an Event Hub and a role assignment which will allow our Azure Pipeline (via its service connection) to interact with it."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-bicep"}),"@description('Name of the eventhub namespace')\nparam eventHubNamespaceName string\n\n@description('Name of the eventhub name')\nparam eventHubName string\n\n@description('The service principal')\nparam principalId string\n\n// Create an Event Hub namespace\nresource eventHubNamespace 'Microsoft.EventHub/namespaces@2021-01-01-preview' = {\n  name: eventHubNamespaceName\n  location: resourceGroup().location\n  sku: {\n    name: 'Standard'\n    tier: 'Standard'\n    capacity: 1\n  }\n  properties: {\n    zoneRedundant: true\n  }\n}\n\n// Create an Event Hub inside the namespace\nresource eventHub 'Microsoft.EventHub/namespaces/eventhubs@2021-01-01-preview' = {\n  parent: eventHubNamespace\n  name: eventHubName\n  properties: {\n    messageRetentionInDays: 7\n    partitionCount: 1\n  }\n}\n\n// give Azure Pipelines Service Principal permissions against the Event Hub\n\nvar roleDefinitionAzureEventHubsDataOwner = subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'f526a384-b230-433a-b45c-95f59c4a2dec')\n\nresource integrationTestEventHubReceiverNamespaceRoleAssignment 'Microsoft.Authorization/roleAssignments@2018-01-01-preview' = {\n  name: guid(principalId, eventHub.id, roleDefinitionAzureEventHubsDataOwner)\n  scope: eventHubNamespace\n  properties: {\n    roleDefinitionId: roleDefinitionAzureEventHubsDataOwner\n    principalId: principalId\n  }\n}\n")),(0,i.kt)("p",null,"Do note that our bicep template takes the service principal id as a parameter. We're going to supply this later from our Azure Pipeline."),(0,i.kt)("h2",r({},{id:"our-test"}),"Our test"),(0,i.kt)("p",null,"We're now going to write a dotnet integration test which will make use of the infrastructure deployed by our Bicep template. Let's create a new test project:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"mkdir src\ncd src\ndotnet new xunit -o IntegrationTests\ncd IntegrationTests\ndotnet add package Azure.Identity\ndotnet add package Azure.Messaging.EventHubs\ndotnet add package FluentAssertions\ndotnet add package Microsoft.Extensions.Configuration.EnvironmentVariables\n")),(0,i.kt)("p",null,"We'll create a test file called ",(0,i.kt)("inlineCode",{parentName:"p"},"EventHubTest.cs")," with these contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Azure.Identity;\nusing Azure.Messaging.EventHubs;\nusing Azure.Messaging.EventHubs.Consumer;\nusing Azure.Messaging.EventHubs.Producer;\nusing FluentAssertions;\nusing Microsoft.Extensions.Configuration;\nusing Newtonsoft.Json;\nusing Xunit;\nusing Xunit.Abstractions;\n\nnamespace IntegrationTests\n{\n    public record EchoMessage(string Id, string Message, DateTime Timestamp);\n\n    public class EventHubTest\n    {\n        private readonly ITestOutputHelper _output;\n\n        public EventHubTest(ITestOutputHelper output)\n        {\n            _output = output;\n        }\n\n        [Fact]\n        public async Task Can_post_message_to_event_hub_and_read_it_back()\n        {\n            // ARRANGE\n            var configuration = new ConfigurationBuilder()\n                .AddEnvironmentVariables()\n                .Build();\n\n            // populated by variables specified in the Azure Pipeline\n            var eventhubNamespaceName = configuration["EVENTHUBNAMESPACENAME"];\n            eventhubNamespaceName.Should().NotBeNull();\n            var eventhubName = configuration["EVENTHUBNAME"];\n            eventhubName.Should().NotBeNull();\n            var tenantId = configuration["TENANTID"];\n            tenantId.Should().NotBeNull();\n\n            // populated as a consequence of the addSpnToEnvironment in the azure-pipelines.yml\n            var servicePrincipalId = configuration["SERVICEPRINCIPALID"];\n            servicePrincipalId.Should().NotBeNull();\n            var servicePrincipalKey = configuration["SERVICEPRINCIPALKEY"];\n            servicePrincipalKey.Should().NotBeNull();\n\n            var fullyQualifiedNamespace = $"{eventhubNamespaceName}.servicebus.windows.net";\n\n            var clientCredential = new ClientSecretCredential(tenantId, servicePrincipalId, servicePrincipalKey);\n            var eventHubClient = new EventHubProducerClient(\n                fullyQualifiedNamespace: fullyQualifiedNamespace,\n                eventHubName: eventhubName,\n                credential: clientCredential\n            );\n            var ourGuid = Guid.NewGuid().ToString();\n            var now = DateTime.UtcNow;\n            var sentEchoMessage = new EchoMessage(Id: ourGuid, Message: $"Test message", Timestamp: now);\n            var sentEventData = new EventData(\n                Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(sentEchoMessage))\n            );\n\n            // ACT\n            await eventHubClient.SendAsync(new List<EventData> { sentEventData }, CancellationToken.None);\n\n            var eventHubConsumerClient = new EventHubConsumerClient(\n                consumerGroup: EventHubConsumerClient.DefaultConsumerGroupName,\n                fullyQualifiedNamespace: fullyQualifiedNamespace,\n                eventHubName: eventhubName,\n                credential: clientCredential\n            );\n\n            List<PartitionEvent> partitionEvents = new();\n            await foreach (var partitionEvent in eventHubConsumerClient.ReadEventsAsync(new ReadEventOptions\n            {\n                MaximumWaitTime = TimeSpan.FromSeconds(10)\n            }))\n            {\n                if (partitionEvent.Data == null) break;\n                _output.WriteLine(Encoding.UTF8.GetString(partitionEvent.Data.EventBody.ToArray()));\n                partitionEvents.Add(partitionEvent);\n            }\n\n            // ASSERT\n            partitionEvents.Count.Should().BeGreaterOrEqualTo(1);\n            var firstOne = partitionEvents.FirstOrDefault(evnt =>\n              ExtractTypeFromEventBody<EchoMessage>(evnt, _output)?.Id == ourGuid\n            );\n            var receivedEchoMessage = ExtractTypeFromEventBody<EchoMessage>(firstOne, _output);\n            receivedEchoMessage.Should().BeEquivalentTo(sentEchoMessage, because: "the event body should be the same one posted to the message queue");\n        }\n\n        private static T ExtractTypeFromEventBody<T>(PartitionEvent evnt, ITestOutputHelper _output)\n        {\n            try\n            {\n                return JsonConvert.DeserializeObject<T>(Encoding.UTF8.GetString(evnt.Data.EventBody.ToArray()));\n            }\n            catch (JsonException)\n            {\n                _output.WriteLine("[" + Encoding.UTF8.GetString(evnt.Data.EventBody.ToArray()) + "] is probably not JSON");\n                return default(T);\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Let's talk through what happens in the test above:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We read in Event Hub connection configuration for the test from environment variables. (These will be supplied by an Azure Pipeline that we will create shortly.)"),(0,i.kt)("li",{parentName:"ol"},"We post a message to the Event Hub."),(0,i.kt)("li",{parentName:"ol"},"We read a message back from the Event Hub."),(0,i.kt)("li",{parentName:"ol"},"We confirm that the message we read back matches the one we posted.")),(0,i.kt)("p",null,"Now that we have our test, we want to be able to execute it. For that we need an Azure Pipeline!"),(0,i.kt)("h2",r({},{id:"azure-pipeline"}),"Azure Pipeline"),(0,i.kt)("p",null,"We're going to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," file which Azure DevOps can use to power a pipeline:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-yml"}),"variables:\n  - name: eventHubNamespaceName\n    value: evhns-demo\n  - name: eventHubName\n    value: evh-demo\n\npool:\n  vmImage: ubuntu-latest\n\nsteps:\n  - task: AzureCLI@2\n    displayName: Get Service Principal Id\n    inputs:\n      azureSubscription: $(serviceConnection)\n      scriptType: bash\n      scriptLocation: inlineScript\n      addSpnToEnvironment: true\n      inlineScript: |\n        PRINCIPAL_ID=$(az ad sp show --id $servicePrincipalId --query objectId -o tsv)\n        echo \"##vso[task.setvariable variable=PIPELINE_PRINCIPAL_ID;]$PRINCIPAL_ID\"\n\n  - bash: az bicep build --file infra/main.bicep\n    displayName: 'Compile Bicep to ARM'\n\n  - task: AzureResourceManagerTemplateDeployment@3\n    name: DeployEventHubInfra\n    displayName: Deploy Event Hub infra\n    inputs:\n      deploymentScope: Resource Group\n      azureResourceManagerConnection: $(serviceConnection)\n      subscriptionId: $(subscriptionId)\n      action: Create Or Update Resource Group\n      resourceGroupName: $(azureResourceGroup)\n      location: $(location)\n      templateLocation: Linked artifact\n      csmFile: 'infra/main.json' # created by bash script\n      overrideParameters: >-\n        -eventHubNamespaceName $(eventHubNamespaceName)\n        -eventHubName $(eventHubName)\n        -principalId $(PIPELINE_PRINCIPAL_ID)\n      deploymentMode: Incremental\n\n  - task: UseDotNet@2\n    displayName: 'Install .NET SDK 5.0.x'\n    inputs:\n      packageType: 'sdk'\n      version: 5.0.x\n\n  - task: AzureCLI@2\n    displayName: dotnet integration test\n    inputs:\n      azureSubscription: $(serviceConnection)\n      scriptType: pscore\n      scriptLocation: inlineScript\n      addSpnToEnvironment: true # allows access to service principal details in script\n      inlineScript: |\n        cd $(Build.SourcesDirectory)/src/IntegrationTests\n        dotnet test\n")),(0,i.kt)("p",null,"When the pipeline is run, it does the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Gets the service principal id from the service connection."),(0,i.kt)("li",{parentName:"ol"},"Compiles our Bicep into an ARM template"),(0,i.kt)("li",{parentName:"ol"},"Deploys the compiled ARM template to Azure"),(0,i.kt)("li",{parentName:"ol"},"Installs the dotnet SDK"),(0,i.kt)("li",{parentName:"ol"},"Uses the ",(0,i.kt)("a",r({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/deploy/azure-cli?view=azure-devops"}),"Azure CLI task")," which allows us to access service principal details in the pipeline to run our dotnet test.")),(0,i.kt)("p",null,"We'll create a pipeline in Azure DevOps pointing to this file, and we'll also create the variables that it depends upon:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"azureResourceGroup")," - the name of your resource group in Azure where the app will be deployed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"location")," - where your app is deployed, eg ",(0,i.kt)("inlineCode",{parentName:"li"},"northeurope")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"serviceConnection")," - the name of your AzureRM service connection in Azure DevOps"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subscriptionId")," - your Azure subscription id from the ",(0,i.kt)("a",r({parentName:"li"},{href:"https://portal.azure.com"}),"Azure Portal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tenantId")," - the Azure tenant id from the ",(0,i.kt)("a",r({parentName:"li"},{href:"https://portal.azure.com"}),"Azure Portal"))),(0,i.kt)("h2",r({},{id:"running-the-pipeline"}),"Running the pipeline"),(0,i.kt)("p",null,"Now we're ready to run our pipeline:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of pipeline running successfully",src:t(4071).Z,width:"2796",height:"1848"})),(0,i.kt)("p",null,"Here we can see that the pipeline runs and the test passes. That means we've successfully provisioned the Event Hub and permissioned our pipeline to be able to access it using Azure RBAC role assignments. We then wrote a test which used the pipeline credentials to interact with the Event Hub. To see the repo that demostrates this, ",(0,i.kt)("a",r({parentName:"p"},{href:"https://dev.azure.com/johnnyreilly/blog-demos/_git/permissioning-azure-pipelines-bicep-role-assignments"}),"look here"),"."),(0,i.kt)("p",null,"Just to reiterate: we've demonstrated this approach using Event Hubs. This is a generally useful approach which can be applied to any Azure resources that support Azure RBAC Role Assignments."),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",r({parentName:"p"},{href:"https://twitter.com/foldr"}),"Jamie McCrindle")," for helping out with permissioning the service connection / service principal. ",(0,i.kt)("a",r({parentName:"p"},{href:"https://foldr.uk/rotating-azure-credentials-in-github-with-terraform"}),"His post on rotating ",(0,i.kt)("inlineCode",{parentName:"a"},"AZURE_CREDENTIALS")," in GitHub with Terraform")," provides useful background for those who would like to do similar permissioning using Terraform."))}h.isMDXComponent=!0},64913:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/screenshot-azure-devops-service-connection-623de8f6bdeea63957be924cd7255b42.webp"},4071:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/screenshot-azure-pipelines-tests-passing-762e135c23ea73f4ef7923e135467810.png"},50961:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/screenshot-azure-portal-add-role-assignment-member-65e88913e7113f4ab4b4a5cc91245bd2.png"},91766:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/screenshot-azure-portal-add-role-assignment-aeea44597b09df30017a3c706b0fc2a0.png"},52666:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/screenshot-azure-portal-service-principal-access-control-e4a7c068872b8b6d43cd95badae9ffca.png"},76968:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/screenshot-azure-portal-service-principal-2fc73899429ae3d2c20d658c9f8098ab.png"},91821:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/screenshot-azure-portal-subscription-resource-providers-76f58d02bc0b369b0ff3925b9dacfa15.webp"},87577:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/title-image-46cc8f39c57972b35cd9c539259b88f4.png"}}]);