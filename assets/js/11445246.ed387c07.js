"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[66135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var i=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Azure AD Claims with Static Web Apps and Azure Functions",authors:"johnnyreilly",tags:["Authorization","Azure Functions","Static Web Apps","Linked Backends","Azure AD"],image:"./title-image.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/2022/11/17/azure-ad-claims-static-web-apps-azure-functions",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-11-17-azure-ad-claims-static-web-apps-azure-functions/index.md",source:"@site/blog/2022-11-17-azure-ad-claims-static-web-apps-azure-functions/index.md",title:"Azure AD Claims with Static Web Apps and Azure Functions",description:"Authorization in Azure Functions is impaired by an issue with Azure Static Web Apps linked to Azure Functions. Azure AD app role claims are not supplied to Azure Functions. This post will demonstrate a workaround.",date:"2022-11-17T00:00:00.000Z",formattedDate:"November 17, 2022",tags:[{label:"Authorization",permalink:"/tags/authorization"},{label:"Azure Functions",permalink:"/tags/azure-functions"},{label:"Static Web Apps",permalink:"/tags/static-web-apps"},{label:"Linked Backends",permalink:"/tags/linked-backends"},{label:"Azure AD",permalink:"/tags/azure-ad"}],readingTime:11.735,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure AD Claims with Static Web Apps and Azure Functions",authors:"johnnyreilly",tags:["Authorization","Azure Functions","Static Web Apps","Linked Backends","Azure AD"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"XML: read and write with Node.js",permalink:"/2022/11/22/xml-read-and-write-with-node-js"},nextItem:{title:"Debugging Azure Functions in VS Code on Mac OS",permalink:"/2022/11/11/debugging-azure-functions-vs-code-mac-os"}},p={image:n(82274).Z,authorsImageUrls:[void 0]},c=[{value:"Updated 28th November 2022",id:"updated-28th-november-2022",level:2},{value:"Where&#39;s my claims?",id:"wheres-my-claims",level:2},{value:"Maybe they&#39;re hiding in <code>x-ms-client-principal</code>?",id:"maybe-theyre-hiding-in-x-ms-client-principal",level:2},{value:"Microsoft Graph API",id:"microsoft-graph-api",level:2},{value:"Interrogating the Microsoft Graph API",id:"interrogating-the-microsoft-graph-api",level:2},{value:"Using the <code>PrincipalService</code>",id:"using-the-principalservice",level:2},{value:"<code>GetPrincipal</code> - what claims do we have?",id:"getprincipal---what-claims-do-we-have",level:3},{value:"<code>AmIInRole</code> - test <code>IsInRole</code> functionality",id:"amiinrole---test-isinrole-functionality",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function d(e){var{components:t}=e,s=r(e,["components"]);return(0,i.kt)("wrapper",a({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Authorization in Azure Functions is impaired by an issue with Azure Static Web Apps linked to Azure Functions. Azure AD app role claims are not supplied to Azure Functions. This post will demonstrate a workaround."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Azure AD Claims with Static Web Apps and Azure Functions&quot; with Azure AD, Azure Functions and Static Web App logos",src:n(82274).Z,width:"800",height:"450"})),(0,i.kt)("h2",a({},{id:"updated-28th-november-2022"}),"Updated 28th November 2022"),(0,i.kt)("p",null,"After I posted this, ",(0,i.kt)("a",a({parentName:"p"},{href:"https://twitter.com/thomasgauvin"}),"Thomas Gauvin")," (Product manager for Static Web Apps) was kind enough to tweet this:"),(0,i.kt)("p",null,(0,i.kt)("a",a({parentName:"p"},{href:"https://twitter.com/thomasgauvin/status/1596242773686079496"}),(0,i.kt)("img",{loading:"lazy",alt:"screenshot of tweet from Thomas Gauvin saying &quot;Thanks for writing this @johnny_reilly, I know this is a pain point with SWA auth at the moment. I&#39;m sure this article will help others in the meantime. We&#39;re working on correcting our docs + looking to add support for this in the future&quot;",src:n(32123).Z,width:"2005",height:"689"}))),(0,i.kt)("p",null,"So by the sounds of it, this blog post will not be required in the longer term, as support should to be added directly. Tremendous news!"),(0,i.kt)("h2",a({},{id:"wheres-my-claims"}),"Where's my claims?"),(0,i.kt)("p",null,"There is a limitation that affects authorization when you have a linked backend paired with an Azure Static Web App. Let's take the case of having an Azure Function App as the linked backend. Essentially the Azure Function app ",(0,i.kt)("em",{parentName:"p"},"does not")," receive the claims that the Static Web App receives. ",(0,i.kt)("a",a({parentName:"p"},{href:"https://github.com/Azure/static-web-apps/issues/988"}),"There's an issue tracking this on GitHub"),", and it seems that this is a general problem with Static Web Apps, Azure AD and linked backends."),(0,i.kt)("p",null,"We have a Static Web App, with an associated C# Function App (using the ",(0,i.kt)("a",a({parentName:"p"},{href:"/2022/10/14/bicep-static-web-apps-linked-backends"}),"Bring Your Own Functions"),' AKA "linked backend" approach). Both the Static Web App and Function App are associated with the same Azure AD App Registration.'),(0,i.kt)("p",null,"When we're authenticated with Azure AD and go to the auth endpoint in our Static Web App: ",(0,i.kt)("inlineCode",{parentName:"p"},"/.auth/me")," we see:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "clientPrincipal": {\n    "identityProvider": "aad",\n    "userId": "d9178465-3847-4d98-9d23-b8b9e403b323",\n    "userDetails": "johnny_reilly@hotmail.com",\n    "userRoles": ["authenticated", "anonymous"],\n    "claims": [\n      // ...\n      {\n        "typ": "http://schemas.microsoft.com/identity/claims/objectidentifier",\n        "val": "d9178465-3847-4d98-9d23-b8b9e403b323"\n      },\n      {\n        "typ": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",\n        "val": "johnny_reilly@hotmail.com"\n      },\n      {\n        "typ": "name",\n        "val": "John Reilly"\n      },\n      {\n        "typ": "roles",\n        "val": "OurApp.Read"\n      },\n      // ...\n      {\n        "typ": "ver",\n        "val": "2.0"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Note the claims in there. These include custom claims that we've configured against our Azure AD App Registration such as roles with ",(0,i.kt)("inlineCode",{parentName:"p"},"OurApp.Read"),"."),(0,i.kt)("p",null,"So we can access claims successfully in the Static Web App (the front end). However, the associated Function App does ",(0,i.kt)("strong",{parentName:"p"},"not")," have access to the claims."),(0,i.kt)("p",null,"It's possible to see this by implementing a function in our Azure Function App which surfaces roles:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'[FunctionName("GetRoles")]\npublic static async Task<IActionResult> Run(\n    [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = "GetRoles")] HttpRequest req\n)\n{\n    var roles = req.HttpContext.User?.Claims.Select(c => new { c.Type, c.Value });\n\n    return new OkObjectResult(roles);\n}\n')),(0,i.kt)("p",null,"When this ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/GetRoles")," endpoint is accessed we see this:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "Type": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",\n    "Value": "d9178465-3847-4d98-9d23-b8b9e403b323"\n  },\n  {\n    "Type": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",\n    "Value": "johnny_reilly@hotmail.com"\n  },\n  {\n    "Type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n    "Value": "authenticated"\n  },\n  {\n    "Type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n    "Value": "anonymous"\n  }\n]\n')),(0,i.kt)("p",null,"At first look, this seems great; we have claims! But when we look again we realise that we have far less claims than we might have hoped for. Crucially, our custom claims / app roles like ",(0,i.kt)("inlineCode",{parentName:"p"},"OurApp.Read")," are missing."),(0,i.kt)("h2",a({},{id:"maybe-theyre-hiding-in-x-ms-client-principal"}),"Maybe they're hiding in ",(0,i.kt)("inlineCode",{parentName:"h2"},"x-ms-client-principal"),"?"),(0,i.kt)("p",null,"If we look directly at the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-ms-client-principal")," header, maybe we'll find what we need?"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'[FunctionName("GetRoles")]\npublic static async Task<IActionResult> GetRoles(\n    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "GetRoles")] HttpRequest req\n)\n{\n    var header = req.Headers["x-ms-client-principal"];\n    var data = header.FirstOrDefault();\n    if (data == null)\n    {\n        return new OkObjectResult("nothing");\n    }\n\n    var decoded = System.Convert.FromBase64String(data);\n    var json = System.Text.ASCIIEncoding.ASCII.GetString(decoded);\n\n    return new OkObjectResult(json);\n}\n')),(0,i.kt)("p",null,'Alas not. We have the user\'s email and some simple roles ("authenticated" and "anonymous"), but no sign of our custom claims / app roles:'),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "identityProvider": "aad",\n  "userId": "d9178465-3847-4d98-9d23-b8b9e403b323",\n  "userDetails": "johnny_reilly@hotmail.com",\n  "userRoles": ["authenticated", "anonymous"]\n}\n')),(0,i.kt)("p",null,"This is the problem: we want our Azure Function App to be able to make use of the same custom claims / app roles that we use for authorization in the Static Web App. How can we achieve this?"),(0,i.kt)("h2",a({},{id:"microsoft-graph-api"}),"Microsoft Graph API"),(0,i.kt)("p",null,"The answer lies with the Microsoft Graph API. We can interrogate it to get the app role assignments for the user. This will give us the same information that we have in the Static Web App. (Well to be strictly accurate, it will be a slightly different set of claims. But what matters is it will be the app role assignment claims that we want to use for authorization.)"),(0,i.kt)("p",null,"We already have an Azure AD app registration. In order that we can interrogate the Microsoft Graph API, we'll need the following permissions:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Screenshot of the Azure AD app registration API permissions screen",src:n(26436).Z,width:"970",height:"290"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",a({parentName:"li"},{href:"https://learn.microsoft.com/en-us/graph/permissions-reference#delegated-permissions-85"}),"User.Read")," - to sign in"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",a({parentName:"li"},{href:"https://learn.microsoft.com/en-us/graph/permissions-reference#application-permissions-81"}),"User.Read.All")," - for acquiring the app role assignments against a user"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",a({parentName:"li"},{href:"https://learn.microsoft.com/en-us/graph/permissions-reference#application-permissions-4"}),"Application.Read.All")," - to get more information about the app role assignments - allowing us to translate the app role assignments into the claims that we want to use for authorization")),(0,i.kt)("p",null,"Of the above permissions, it's likely that you'll already have delegated ",(0,i.kt)("inlineCode",{parentName:"p"},"User.Read")," in place; the other two you might need to add and ensure they're granted in Azure."),(0,i.kt)("h2",a({},{id:"interrogating-the-microsoft-graph-api"}),"Interrogating the Microsoft Graph API"),(0,i.kt)("p",null,"Now we have an Azure AD App Registration with sufficient permissions, we'll need a ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphClient")," to interrogate the Microsoft Graph API. To get that we're going to build an ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticatedGraphClientFactory"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'using System.Net.Http;\nusing System.Net.Http.Headers;\nusing System.Threading.Tasks;\nusing Microsoft.Graph;\nusing Microsoft.Identity.Client;\n\nnamespace MyApp.Auth\n{\n    public interface IAuthenticatedGraphClientFactory\n    {\n        (GraphServiceClient, string) GetAuthenticatedGraphClientAndClientId();\n    }\n\n    public class AuthenticatedGraphClientFactory : IAuthenticatedGraphClientFactory\n    {\n        private GraphServiceClient? _graphServiceClient;\n        private readonly string _clientId;\n        private readonly string _clientSecret;\n        private readonly string _tenantId;\n\n        public AuthenticatedGraphClientFactory(\n            string clientId,\n            string clientSecret,\n            string tenantId\n        )\n        {\n            _clientId = clientId;\n            _clientSecret = clientSecret;\n            _tenantId = tenantId;\n        }\n\n        public (GraphServiceClient, string) GetAuthenticatedGraphClientAndClientId()\n        {\n            var authenticationProvider = CreateAuthenticationProvider();\n\n            _graphServiceClient = new GraphServiceClient(authenticationProvider);\n\n            return (_graphServiceClient, _clientId);\n        }\n\n        private IAuthenticationProvider CreateAuthenticationProvider()\n        {\n            // this specific scope means that application will default to what is defined in the application registration rather than using dynamic scopes\n            string[] scopes = new string[]\n            {\n                "https://graph.microsoft.com/.default"\n            };\n\n            var confidentialClientApplication = ConfidentialClientApplicationBuilder.Create(_clientId)\n                .WithAuthority($"https://login.microsoftonline.com/{_tenantId}/v2.0")\n                .WithClientSecret(_clientSecret)\n                .Build();\n\n            return new MsalAuthenticationProvider(confidentialClientApplication, scopes); ;\n        }\n    }\n\n    public class MsalAuthenticationProvider : IAuthenticationProvider\n    {\n        private readonly IConfidentialClientApplication _clientApplication;\n        private readonly string[] _scopes;\n\n        public MsalAuthenticationProvider(IConfidentialClientApplication clientApplication, string[] scopes)\n        {\n            _clientApplication = clientApplication;\n            _scopes = scopes;\n        }\n\n        /// <summary>\n        /// Update HttpRequestMessage with credentials\n        /// </summary>\n        public async Task AuthenticateRequestAsync(HttpRequestMessage request)\n        {\n            var token = await GetTokenAsync();\n\n            request.Headers.Authorization = new AuthenticationHeaderValue("bearer", token);\n        }\n\n        /// <summary>\n        /// Acquire Token\n        /// </summary>\n        public async Task<string?> GetTokenAsync()\n        {\n            var authResult = await _clientApplication.AcquireTokenForClient(_scopes).ExecuteAsync();\n\n            return authResult.AccessToken;\n        }\n    }\n}\n')),(0,i.kt)("p",null,"When we execute ",(0,i.kt)("inlineCode",{parentName:"p"},"GetAuthenticatedGraphClientAndClientId")," we'll get back a ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphServiceClient")," that we can use to interrogate the Microsoft Graph API. We'll also get back the client ID of the Graph API App. We'll need this later. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticatedGraphClientFactory")," requires the client ID, client secret and tenant ID of the Azure AD App Registration."),(0,i.kt)("p",null,"Now we have the ability to interrogate the Microsoft Graph API, we can write a ",(0,i.kt)("inlineCode",{parentName:"p"},"PrincipalService.cs")," class that will interrogate it and return the app role assignments for the user:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Security.Claims;\nusing System.Text;\nusing System.Text.Json;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.Graph;\n\nnamespace MyApp.Auth\n{\n    public interface IPrincipalService\n    {\n        Task<ClaimsPrincipal> GetPrincipal(HttpRequest req);\n    }\n\n    public class PrincipalService : IPrincipalService\n    {\n        readonly ILogger<PrincipalService> _log;\n        readonly IAuthenticatedGraphClientFactory _graphClientFactory;\n\n        public PrincipalService(\n            IAuthenticatedGraphClientFactory graphClientFactory,\n            ILogger<PrincipalService> log\n        )\n        {\n            _graphClientFactory = graphClientFactory;\n            _log = log;\n        }\n\n        public async Task<ClaimsPrincipal> GetPrincipal(HttpRequest req)\n        {\n            try\n            {\n                MsClientPrincipal? principal = MakeMsClientPrincipal(req);\n\n                if (principal == null)\n                    return new ClaimsPrincipal();\n\n                if (!principal.UserRoles?.Where(NotAnonymous).Any() ?? true)\n                    return new ClaimsPrincipal();\n\n                ClaimsIdentity identity = await MakeClaimsIdentity(principal);\n\n                return new ClaimsPrincipal(identity);\n            }\n            catch (Exception e)\n            {\n                _log.LogError(e, "Error parsing claims principal");\n                return new ClaimsPrincipal();\n            }\n        }\n\n        MsClientPrincipal? MakeMsClientPrincipal(HttpRequest req)\n        {\n            MsClientPrincipal? principal = null;\n\n            if (req.Headers.TryGetValue("x-ms-client-principal", out var header))\n            {\n                var data = header.FirstOrDefault();\n                if (data != null)\n                {\n                    var decoded = Convert.FromBase64String(data);\n                    var json = Encoding.UTF8.GetString(decoded);\n                    _log.LogInformation($"x-ms-client-principal: {json}");\n                    principal = JsonSerializer.Deserialize<MsClientPrincipal>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });\n                }\n            }\n\n            return principal;\n        }\n\n        async Task<ClaimsIdentity> MakeClaimsIdentity(MsClientPrincipal principal)\n        {\n            var identity = new ClaimsIdentity(principal.IdentityProvider);\n\n            identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, principal.UserId!));\n            identity.AddClaim(new Claim(ClaimTypes.Name, principal.UserDetails!));\n\n            if (principal.UserRoles != null)\n                identity.AddClaims(principal.UserRoles\n                    .Where(NotAnonymous)\n                    .Select(userRole => new Claim(ClaimTypes.Role, userRole)));\n\n            var username = principal.UserDetails;\n            if (username != null)\n            {\n                var userAppRoleAssignments = await GetUserAppRoleAssignments(username);\n                identity.AddClaims(userAppRoleAssignments\n                    .Select(userAppRoleAssignments => new Claim(ClaimTypes.Role, userAppRoleAssignments)));\n            }\n\n            return identity;\n        }\n\n        static bool NotAnonymous(string r) =>\n            !string.Equals(r, "anonymous", StringComparison.CurrentCultureIgnoreCase);\n\n        async Task<string[]> GetUserAppRoleAssignments(string username)\n        {\n            try\n            {\n                var (graphClient, clientId) = _graphClientFactory.GetAuthenticatedGraphClientAndClientId();\n                _log.LogInformation("Getting AppRoleAssignments for {username}", username);\n\n                var userRoleAssignments = await graphClient.Users[username]\n                    .AppRoleAssignments\n                    .Request()\n                    .GetAsync();\n\n                var roleIds = new List<string>();\n                var pageIterator = PageIterator<AppRoleAssignment>\n                    .CreatePageIterator(\n                        graphClient,\n                        userRoleAssignments,\n                        // Callback executed for each item in the collection\n                        (appRoleAssignment) =>\n                        {\n                            if (appRoleAssignment.AppRoleId.HasValue && appRoleAssignment.AppRoleId.Value != Guid.Empty)\n                                roleIds.Add(appRoleAssignment.AppRoleId.Value.ToString());\n\n                            return true;\n                        },\n                        // Used to configure subsequent page requests\n                        (baseRequest) =>\n                        {\n                            // Re-add the header to subsequent requests\n                            baseRequest.Header("Prefer", "outlook.body-content-type=\\"text\\"");\n                            return baseRequest;\n                        });\n\n                await pageIterator.IterateAsync();\n\n                var applications = await graphClient.Applications\n                    .Request()\n                    .Filter($"appId eq \'{clientId}\'") // we\'re only interested in the app that we\'re running as\n                    .GetAsync();\n\n                var appRoleAssignments = applications\n                    .FirstOrDefault()\n                    ?.AppRoles\n                    ?.Where(appRole => appRole.Id.HasValue && roleIds.Contains(appRole.Id!.Value.ToString()))\n                    .Select(appRole => appRole.Value)\n                    .ToArray();\n\n                return appRoleAssignments ?? Array.Empty<string>();\n            }\n            catch (Exception e)\n            {\n                _log.LogError(e, "Error getting AppRoleAssignments");\n                return Array.Empty<string>();\n            }\n        }\n\n        class MsClientPrincipal\n        {\n            public string? IdentityProvider { get; set; }\n            public string? UserId { get; set; }\n            public string? UserDetails { get; set; }\n            public IEnumerable<string>? UserRoles { get; set; }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Quite a lot of code! Let's walk through what it does:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It takes the ",(0,i.kt)("inlineCode",{parentName:"li"},"x-ms-client-principal")," header and deserializes it into a ",(0,i.kt)("inlineCode",{parentName:"li"},"MsClientPrincipal")," object - this is the cut down version of the ",(0,i.kt)("inlineCode",{parentName:"li"},"ClaimsPrincipal")," object that we saw earlier:")),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "identityProvider": "aad",\n  "userId": "d9178465-3847-4d98-9d23-b8b9e403b323",\n  "userDetails": "johnny_reilly@hotmail.com",\n  "userRoles": ["authenticated", "anonymous"]\n}\n')),(0,i.kt)("ol",a({},{start:2}),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It creates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ClaimsIdentity")," using that information, but stripping out the ",(0,i.kt)("inlineCode",{parentName:"p"},"anonymous")," role as it's superfluous.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"userDetails")," (email address) from the ",(0,i.kt)("inlineCode",{parentName:"p"},"MsClientPrincipal")," object, it gets the app role assignments for that user from the Graph API. (We needed ",(0,i.kt)("inlineCode",{parentName:"p"},"User.Read.All")," to do this.)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In a perfect world, we'd be able to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppRoleAssignments")," property on the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," object to get the app role assignments for a user, but unfortunately that doesn't come with the human readable name you'd hope for; the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyApp.Read"),". So we have to interrogate the Graph API once more and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," that represents our Azure AD App Registration (we acquire this by filtering for an ",(0,i.kt)("inlineCode",{parentName:"p"},"appId")," matching our ",(0,i.kt)("inlineCode",{parentName:"p"},"clientId"),"). Then we can get the human readable / ",(0,i.kt)("inlineCode",{parentName:"p"},"MyApp.Read")," role assignment.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It adds the app role assignments as role claims to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClaimsIdentity")," object.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClaimsIdentity")," object wrapped in a ",(0,i.kt)("inlineCode",{parentName:"p"},"ClaimsPrincipal")," object."))),(0,i.kt)("h2",a({},{id:"using-the-principalservice"}),"Using the ",(0,i.kt)("inlineCode",{parentName:"h2"},"PrincipalService")),(0,i.kt)("p",null,"In order that we can make use of our ",(0,i.kt)("inlineCode",{parentName:"p"},"PrincipalService")," we need to configure it and the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticatedGraphClientFactory")," in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),"services.AddTransient<IAuthenticatedGraphClientFactory>(sp =>\n    new AuthenticatedGraphClientFactory(\n        // The parameters can be sourced from the Azure AD App Registration\n        clientId,\n        clientSecret,\n        tenantId\n    ));\n\nservices.AddTransient<IPrincipalService, PrincipalService>();\n")),(0,i.kt)("p",null,"With that in place, we can now use the ",(0,i.kt)("inlineCode",{parentName:"p"},"IPrincipalService")," in a function:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'using System.Linq;\nusing System.Threading.Tasks;\nusing MyApp.Auth;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Azure.WebJobs;\nusing Microsoft.Azure.WebJobs.Extensions.Http;\n\nnamespace MyApp.Functions\n{\n    public class GetClaimsPrincipalFunction\n    {\n        private readonly IPrincipalService _principalService;\n\n        public GetClaimsPrincipalFunction(\n            IPrincipalService principalService\n        )\n        {\n            _principalService = principalService;\n        }\n\n        [FunctionName(nameof(GetPrincipal))]\n        public async Task<IActionResult> GetPrincipal(\n            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "get-principal")] HttpRequest request\n        )\n        {\n            var principal = await _principalService.GetPrincipal(request);\n            var identity = principal?.Identity;\n            var data = new\n            {\n                Name = identity?.Name ?? "",\n                AuthenticationType = identity?.AuthenticationType ?? "",\n                Claims = principal?.Claims.Select(c => new { c.Type, c.Value }),\n            };\n\n            return new OkObjectResult(data);\n        }\n\n        [FunctionName(nameof(AmIInRole))]\n        public async Task<IActionResult> AmIInRole(\n            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "am-i-in-role")] HttpRequest request\n        )\n        {\n            var role = request.Query["role"].FirstOrDefault();\n\n            if (string.IsNullOrEmpty(role))\n                return new BadRequestObjectResult("role query parameter is required");\n\n            var principal = await _principalService.GetPrincipal(request);\n\n            var isInRole = principal?.IsInRole(role) == true;\n            if (!isInRole)\n                return new ObjectResult($"Forbidden for {role}")\n                {\n                    StatusCode = Status403Forbidden\n                };\n\n            return new OkObjectResult($"Welcome {principal?.Identity?.Name} - you have role {role}!");\n        }\n    }\n}\n')),(0,i.kt)("p",null,"The above class has 2 functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GetPrincipal")," - returns the ",(0,i.kt)("inlineCode",{parentName:"li"},"ClaimsPrincipal")," object as JSON"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AmIInRole")," - takes a ",(0,i.kt)("inlineCode",{parentName:"li"},"role")," query parameter, tests if a user has that role and returns a 403 if they don't and a 200 with a welcome message if they do")),(0,i.kt)("h3",a({},{id:"getprincipal---what-claims-do-we-have"}),(0,i.kt)("inlineCode",{parentName:"h3"},"GetPrincipal")," - what claims do we have?"),(0,i.kt)("p",null,"Let's try out the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetPrincipal")," function, when I go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/get-principal")," endpoint I see this:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "name": "johnny_reilly@hotmail.com",\n  "authenticationType": "aad",\n  "claims": [\n    {\n      "type": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",\n      "value": "d9178465-3847-4d98-9d23-b8b9e403b323"\n    },\n    {\n      "type": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",\n      "value": "johnny_reilly@hotmail.com"\n    },\n    {\n      "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n      "value": "authenticated"\n    },\n    {\n      "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",\n      "value": "OurApp.Read"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"This isn't the ",(0,i.kt)("em",{parentName:"p"},"same")," information as the Static Web Apps principal, but it's close enough for our purposes. Crucially, we can see the AppRoleAssignment ",(0,i.kt)("inlineCode",{parentName:"p"},"OurApp.Read")," that we assigned to our user in the Azure Portal. That is the key information that we need, and that we are missing by default."),(0,i.kt)("p",null,"Crucially this is enough information for us to be able to apply authorization to our functions."),(0,i.kt)("h3",a({},{id:"amiinrole---test-isinrole-functionality"}),(0,i.kt)("inlineCode",{parentName:"h3"},"AmIInRole")," - test ",(0,i.kt)("inlineCode",{parentName:"h3"},"IsInRole")," functionality"),(0,i.kt)("p",null,"We can demonstrate applying authorization by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"AmIInRole")," function. This internally uses the inbuilt ",(0,i.kt)("a",a({parentName:"p"},{href:"https://learn.microsoft.com/en-us/dotnet/api/system.security.claims.claimsprincipal.isinrole?view=net-6.0"}),(0,i.kt)("inlineCode",{parentName:"a"},"IsInRole"))," functionality of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClaimsPrincipal")," object, and returns an appropriate API result accordingly."),(0,i.kt)("p",null,"If I go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/am-i-in-role?role=OurApp.Read")," endpoint I get a 200 status code and the message: ",(0,i.kt)("inlineCode",{parentName:"p"},"Welcome johnny_reilly@hotmail.com - you have role OurApp.Read!"),". This makes sense, my user account has the ",(0,i.kt)("inlineCode",{parentName:"p"},"OurApp.Read")," role."),(0,i.kt)("p",null,"Let's test that we also deny access appropriately. There is an ",(0,i.kt)("inlineCode",{parentName:"p"},"OurApp.Write")," role; my account does not have this. If I go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/am-i-in-role?role=OurApp.Write")," endpoint I get a 403 status code and the message: ",(0,i.kt)("inlineCode",{parentName:"p"},"Forbidden for OurApp.Write"),"."),(0,i.kt)("p",null,"It works!"),(0,i.kt)("h2",a({},{id:"conclusion"}),"Conclusion"),(0,i.kt)("p",null,"We've demonstrated a way to acquire a ",(0,i.kt)("inlineCode",{parentName:"p"},"ClaimsPrincipal")," object that contains the AppRoleAssignments for a user. This is enough information for us to be able to apply authorization to our functions."),(0,i.kt)("p",null,"It would be ideal if this wasn't required, and I'm hoping that the Static Web Apps team will be able to provide a solution for this in the future. ",(0,i.kt)("a",a({parentName:"p"},{href:"https://github.com/Azure/static-web-apps/issues/988"}),"Keep an eye on this GitHub issue.")," In the meantime, this is a workable solution."),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",a({parentName:"p"},{href:"https://github.com/warrenandre"}),"Warren Joubert")," for his help with this post."))}d.isMDXComponent=!0},26436:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-azure-portal-azure-ad-app-registration-api-permissions-2475b91d55370c463f10fc45a802996d.png"},32123:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-twitter-thomas-gauvin-support-in-future-0b27ec1d7904bd7e15c073d9065eb0e5.webp"},82274:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/title-image-bf4b643f03830f5f5ad3512d581138f3.png"}}]);