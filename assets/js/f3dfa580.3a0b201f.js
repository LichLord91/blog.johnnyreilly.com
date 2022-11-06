"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[54854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Managed Identity, Azure SQL and Entity Framework",authors:"johnnyreilly",tags:["connection string","managed identity","entity framework","Microsoft.Data.SqlClient"],image:"./entity-framework-core-nuget.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/2021/03/10/managed-identity-azure-sql-entity-framework",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-03-10-managed-identity-azure-sql-entity-framework/index.md",source:"@site/blog/2021-03-10-managed-identity-azure-sql-entity-framework/index.md",title:"Managed Identity, Azure SQL and Entity Framework",description:"Managed Identity offers a very secure way for applications running in Azure to connect to Azure SQL databases. It's an approach that does not require code changes; merely configuration of connection string and associated resources. Hence it has a good developer experience. Importantly, it allows us to avoid exposing our database to username / password authentication, and hence making it a tougher target for bad actors.",date:"2021-03-10T00:00:00.000Z",formattedDate:"March 10, 2021",tags:[{label:"connection string",permalink:"/tags/connection-string"},{label:"managed identity",permalink:"/tags/managed-identity"},{label:"entity framework",permalink:"/tags/entity-framework"},{label:"Microsoft.Data.SqlClient",permalink:"/tags/microsoft-data-sql-client"}],readingTime:4.925,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Managed Identity, Azure SQL and Entity Framework",authors:"johnnyreilly",tags:["connection string","managed identity","entity framework","Microsoft.Data.SqlClient"],image:"./entity-framework-core-nuget.png",hide_table_of_contents:!1},prevItem:{title:"The definitive guide to migrating from Blogger to Docusaurus",permalink:"/definitive-guide-to-migrating-from-blogger-to-docusaurus"},nextItem:{title:"NSwag: TypeScript and CSharp client generation based on an API",permalink:"/2021/03/06/generate-typescript-and-csharp-clients-with-nswag"}},c={image:n(20587).Z,authorsImageUrls:[void 0]},d=[{value:"<code>Integrated Security=true</code>",id:"integrated-securitytrue",level:2},{value:"Managed Identity",id:"managed-identity",level:2},{value:"Connection String alone",id:"connection-string-alone",level:2},{value:"Usage with Entity Framework Core 5",id:"usage-with-entity-framework-core-5",level:2},{value:"User Assigned Managed Identity",id:"user-assigned-managed-identity",level:2}],u={toc:d};function p(e){var{components:t}=e,i=o(e,["components"]);return(0,a.kt)("wrapper",r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Managed Identity offers a very secure way for applications running in Azure to connect to Azure SQL databases. It's an approach that does not require code changes; merely configuration of connection string and associated resources. Hence it has a good developer experience. Importantly, it allows us to avoid exposing our database to username / password authentication, and hence making it a tougher target for bad actors."),(0,a.kt)("p",null,"This post talks us through using managed identity for connecting to Azure SQL."),(0,a.kt)("h2",r({},{id:"integrated-securitytrue"}),(0,a.kt)("inlineCode",{parentName:"h2"},"Integrated Security=true")),(0,a.kt)("p",null,'Everyone is deploying to the cloud. Few are the organisations that view deployment to data centers they manage as the future. This is generally a good thing, however in the excitement of the new, it\'s possible to forget some of the good properties that "on premise" deployment afforded when it came to connectivity and authentication.'),(0,a.kt)("p",null,"I speak of course, of our old friend ",(0,a.kt)("inlineCode",{parentName:"p"},"Integrated Security=true"),". When you seek to connect a web application to a database, you'll typically use some kind of database connection string. And back in the day, it may have looked something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"Data Source=myServer;Initial Catalog=myDB;Integrated Security=true;\n")),(0,a.kt)("p",null,"The above provides a database server, a database and also ",(0,a.kt)("inlineCode",{parentName:"p"},"Integrated Security=true"),". When you see ",(0,a.kt)("inlineCode",{parentName:"p"},"Integrated Security=true"),', what you\'re essentially looking at is an instruction to use the identity that an application is running under (typically called a "service account") as the authentication credential to secure access to the database. Under the covers, this amounts to ',(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql/authentication-in-sql-server"}),"Windows Authentication"),"."),(0,a.kt)("p",null,"The significant thing about this approach is that it is more secure than using usernames and passwords in the connection string. If you have to use username and password to authenticate, then you need to persist them somewhere - so you need to make sure that's secure. Also, if someone manages to acquire that username and password, they're free to get access to the database and do malicious things."),(0,a.kt)("p",null,'Bottom line: the less you are sharing authentication credentials, the better your security. Integrated Security is a harder nut to crack than username and password. The thing to note about the above phrase is "Windows Authentication". Web Apps in Azure / AWS etc do not typically use Windows Authentication when it comes to connecting to the database. Connecting with username / password is far more common.'),(0,a.kt)("p",null,"What if there was a way to have the developer experience of ",(0,a.kt)("inlineCode",{parentName:"p"},"Integrated Security=true")," without needing to use Windows Authentication? There is."),(0,a.kt)("h2",r({},{id:"managed-identity"}),"Managed Identity"),(0,a.kt)("p",null,"The docs express the purpose of ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview"}),"managed identity")," well:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A common challenge for developers is the management of secrets and credentials to secure communication between different services. On Azure, managed identities eliminate the need for developers having to manage credentials by providing an identity for the Azure resource in Azure AD and using it to obtain Azure Active Directory (Azure AD) tokens")),(0,a.kt)("p",null,"Historically a certain amount of ceremony was required to use managed identity to connect to a database, and could involve augmenting a ",(0,a.kt)("inlineCode",{parentName:"p"},"DbContext")," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'public MyDbContext(DbContextOptions options) : base(options) {\n    var conn = (Microsoft.Data.SqlClient.SqlConnection)Database.GetDbConnection();\n    var credential = new DefaultAzureCredential();\n    var token = credential\n        .GetToken(\n            new Azure.Core.TokenRequestContext(new[] { "https://database.windows.net/.default" })\n        );\n    conn.AccessToken = token.Token;\n}\n')),(0,a.kt)("p",null,"This mechanism works, and has the tremendous upside of no longer requiring credentials be passed in a connection string. However, as you can see this isn't the simplest of setups. And also, what if you don't want to use managed identity when you're developing locally? This approach has baggage and forces us to make code changes."),(0,a.kt)("h2",r({},{id:"connection-string-alone"}),"Connection String alone"),(0,a.kt)("p",null,"The wonderful aspect of the original ",(0,a.kt)("inlineCode",{parentName:"p"},"Integrated Security=true")," approach, was that there were no code changes required; one need only supply the connection string. Just configuration."),(0,a.kt)("p",null,"This is now possible with Azure SQL thanks to ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/dotnet/SqlClient/pull/730"}),"this PR")," to the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://www.nuget.org/packages/Microsoft.Data.SqlClient/"}),"Microsoft.Data.SqlClient")," nuget package. (Incidentally, ",(0,a.kt)("a",r({parentName:"p"},{href:"https://devblogs.microsoft.com/dotnet/introducing-the-new-microsoftdatasqlclient/"}),"Microsoft.Data.SqlClient is the successor to System.Data.SqlClient."),")"),(0,a.kt)("p",null,"Support for connection string managed identities ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/dotnet/SqlClient/blob/master/release-notes/2.1/2.1.0/index.md#Azure-Active-Directory-Managed-Identity-authentication"}),"shipped with v2.1"),". Connection strings can look slightly different depending on the type of managed identity you're using:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'// For System Assigned Managed Identity\n"Server:{serverURL}; Authentication=Active Directory MSI; Initial Catalog={db};"\n\n// For System Assigned Managed Identity\n"Server:{serverURL}; Authentication=Active Directory Managed Identity; Initial Catalog={db};"\n\n// For User Assigned Managed Identity\n"Server:{serverURL}; Authentication=Active Directory MSI; User Id={ObjectIdOfManagedIdentity}; Initial Catalog={db};"\n\n// For User Assigned Managed Identity\n"Server:{serverURL}; Authentication=Active Directory Managed Identity; User Id={ObjectIdOfManagedIdentity}; Initial Catalog={db};"\n')),(0,a.kt)("p",null,"Regardless of the approach, you can see that none of the connection strings have credentials in them. And that's special."),(0,a.kt)("h2",r({},{id:"usage-with-entity-framework-core-5"}),"Usage with Entity Framework Core 5"),(0,a.kt)("p",null,"If you're using Entity Framework Core, you might be struggling to get this working and encountering strange error messages. In my ASP.NET project I had a dependendency on\n",(0,a.kt)("a",r({parentName:"p"},{href:"https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.SqlServer/5.0.4"}),"Microsoft.EntityFrameworkCore.SqlServer@5"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Microsoft.EntityFrameworkCore.SqlServer@5 in NuGet",src:n(20587).Z,width:"1516",height:"1120"})),(0,a.kt)("p",null,"If you look close above, you'll see that the package has a dependency on Microsoft.Data.SqlClient, but crucially on 2.0.1 or greater. So if ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," has installed a version of Microsoft.Data.SqlClient which is ",(0,a.kt)("em",{parentName:"p"},"less")," than 2.1 then the functionality required will not be installed. The resolution is simple, ensure that the required version is installed:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"dotnet add package Microsoft.Data.SqlClient --version 2.1.2\n")),(0,a.kt)("p",null,"The version which we want to use is 2.1 (or greater) and fortunately that is compatible with Entity Framework Core 5. Incidentally, when Entity Framework Core 6 ships it will no longer be necessary to manually specify this dependency as it already requires ",(0,a.kt)("a",r({parentName:"p"},{href:"mailto:Microsoft.Data.SqlClient@2.1"}),"Microsoft.Data.SqlClient@2.1")," as a minimum."),(0,a.kt)("h2",r({},{id:"user-assigned-managed-identity"}),"User Assigned Managed Identity"),(0,a.kt)("p",null,"If you're using user assigned managed identity, you'll need to supply the object id of your managed identity, which you can find in the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://portal.azure.com/"}),"Azure Portal"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Managed Identity object id",src:n(18639).Z,width:"1250",height:"634"})),(0,a.kt)("p",null,"You can configure this in ARM as well, but cryptically, the object id goes by the nom de plume of ",(0,a.kt)("inlineCode",{parentName:"p"},"principalId")," (thanks to my partner in crime ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/jmccor99"}),"John McCormick")," for puzzling that out):"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),"\"CONNECTIONSTRINGS__OURDBCONNECTION\": \"[concat('Server=tcp:', parameters('sqlServerName') , '.database.windows.net,1433;Initial Catalog=', parameters('sqlDatabaseName'),';Authentication=Active Directory MSI',';User Id=', reference(resourceId('Microsoft.ManagedIdentity/userAssignedIdentities/', parameters('managedIdentityName')), '2018-11-30').principalId)]\"\n")),(0,a.kt)("p",null,"That's it! With managed identity handling your authentication you can sleep easy, knowing you should be in a better place security wise."))}p.isMDXComponent=!0},20587:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/entity-framework-core-nuget-2e0e4c9d7a78d3028ccf7353c62e3dac.png"},18639:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/managed-identity-object-id-3da5c83d54dee3a1bd11a6c97b3efa88.webp"}}]);