"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[48523],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={title:"Giving OData to CRM 4.0",authors:"johnnyreilly",tags:["OData","WCF Data Services","CRM","LINQ"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2012/09/24/giving-odata-to-crm-40",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-09-24-giving-odata-to-crm-40/index.md",source:"@site/blog/2012-09-24-giving-odata-to-crm-40/index.md",title:"Giving OData to CRM 4.0",description:"Just recently I was tasked with seeing if we could provide a way to access our Dynamics CRM instance via OData. My initial investigations made it seem like there was nothing for me to do; CRM 2011 provides OData support out of the box. Small problem. We were running CRM 4.0.",date:"2012-09-24T00:00:00.000Z",formattedDate:"September 24, 2012",tags:[{label:"OData",permalink:"/tags/o-data"},{label:"WCF Data Services",permalink:"/tags/wcf-data-services"},{label:"CRM",permalink:"/tags/crm"},{label:"LINQ",permalink:"/tags/linq"}],readingTime:6.265,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Giving OData to CRM 4.0",authors:"johnnyreilly",tags:["OData","WCF Data Services","CRM","LINQ"],hide_table_of_contents:!1},prevItem:{title:"Unit Testing and Entity Framework: The Filth and the Fury",permalink:"/2012/10/03/unit-testing-and-entity-framework-filth"},nextItem:{title:"Globalize and jQuery Validation",permalink:"/2012/09/06/globalize-and-jquery-validate"}},c={authorsImageUrls:[void 0]},m=[{value:"LINQ to CRM",id:"linq-to-crm",level:2},{value:"Make me an OData Service",id:"make-me-an-odata-service",level:2},{value:"Now, a warning...",id:"now-a-warning",level:2},{value:"Finishing off",id:"finishing-off",level:2}],p={toc:m};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Just recently I was tasked with seeing if we could provide a way to access our Dynamics CRM instance via OData. My initial investigations made it seem like there was nothing for me to do; ",(0,n.kt)("a",r({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/library/gg309461.aspx"}),"CRM 2011 provides OData support out of the box"),". Small problem. We were running CRM 4.0."),(0,n.kt)("p",null,"It could well have ended there apart from the fact that Microsoft makes it astonishingly easy to to create your own OData service using WCF Data Services. Because it's so straightforward I was able to get an OData solution for CRM 4.0 up and running with very little heavy lifting at all. Want to know how it's done?"),(0,n.kt)("h2",r({},{id:"linq-to-crm"}),"LINQ to CRM"),(0,n.kt)("p",null,"To start with you're going to need the ",(0,n.kt)("a",r({parentName:"p"},{href:"http://www.microsoft.com/en-us/download/details.aspx?id=38"}),"CRM SDK 4.0"),'. This contains a "vanilla" LINQ to CRM client which is used in each of the example applications that can be found in ',(0,n.kt)("inlineCode",{parentName:"p"},"microsoft.xrm\\samples"),". We want this client (or something very like it) to use as the basis for our OData service."),(0,n.kt)("p",null,"In order to get a LINQ to CRM provider that caters for your own customised CRM instance you need to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"crmsvcutil")," utility from the CRM SDK (found in the ",(0,n.kt)("inlineCode",{parentName:"p"},"microsoft.xrm\\tools\\")," directory). Detailed instructions on how to use this can be found in this Word document: ",(0,n.kt)("inlineCode",{parentName:"p"},"microsoft.xrm\\advanced_developer_extensions_-_developers_guide.docx"),". Extra information around the topic can be found using these links:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"http://msdn.microsoft.com/en-us/library/ff681559"}),"MSDN docs on xRM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"http://msdn.microsoft.com/en-us/library/ff681573"}),"MSDN examples of LINQ queries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"http://www.dynamicscrmtrickbag.com/"}),"CRM blog site")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"http://community.adxstudio.com/products/adxstudio-portals/developers-guide/archive/linq-to-crm-22/"}),"Another site listing examples of LINQ to CRM"))),(0,n.kt)("p",null,"You should end up with custom generated data context classes which look not dissimilar to similar classes that you may already have in place for Entity Framework etc. With your ",(0,n.kt)("inlineCode",{parentName:"p"},"Xrm.DataContext")," in hand (a subclass of ",(0,n.kt)("inlineCode",{parentName:"p"},"Microsoft.Xrm.Client.Data.Services.CrmDataContext"),") you'll be ready to move forwards."),(0,n.kt)("h2",r({},{id:"make-me-an-odata-service"}),"Make me an OData Service"),(0,n.kt)("p",null,"As I said, Microsoft makes it fantastically easy to get an OData service up and running. ",(0,n.kt)("a",r({parentName:"p"},{href:"http://msdn.microsoft.com/en-US/library/dd728275"}),"In this example")," an entity context model is created from the Northwind database and then exposed as an OData service. To create my CRM OData service I followed a similar process. But rather than creating an entity context model using a database I plugged in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Xrm.DataContext")," instance of CRM that we created a moment ago. These are the steps I followed to make my service:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Create a new ASP.NET Web Application called "CrmOData" (in case it\'s relevant I was using Visual Studio 2010 to do this).')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove all ASPXs / JavaScript / CSS files etc leaving you with an essentially empty project.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add references to the following DLLs that come with the SDK: - microsoft.crm.sdk.dll"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"microsoft.crm.sdktypeproxy.dll"),(0,n.kt)("li",{parentName:"ul"},"microsoft.crm.sdktypeproxy.xmlserializers.dll"),(0,n.kt)("li",{parentName:"ul"},"microsoft.xrm.client.dll"),(0,n.kt)("li",{parentName:"ul"},"microsoft.xrm.portal.dll"),(0,n.kt)("li",{parentName:"ul"},"microsoft.xrm.portal.files.dll"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the ",(0,n.kt)("inlineCode",{parentName:"p"},"&lt;microsoft.xrm.client&gt;")," config section to your web.config (not forgetting the associated Xrm connection string)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add this new file below to the root of the project:"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Collections.Generic;\nusing System.Data.Services;\nusing System.Data.Services.Common;\nusing System.Linq;\nusing System.Web;\nusing System.ServiceModel.Web;\nusing Microsoft.Xrm.Client;\nusing log4net;\n\nnamespace CrmOData\n{\n\n    /// <summary>\n    /// Exposes an OData service providing access to CRM\n    ///\n    /// Examples of how to use service.\n    ///\n    /// URI     : http://myWebServer/CrmOData/Crm.svc\n    /// Purpose : Demonstrates exposed endpoints\n    ///\n    /// URI     : http://myWebServer/CrmOData/Crm.svc/myCustomer\n    /// Purpose : Demonstrates how to retrieve all customers\n    ///\n    /// URI     : http://myWebServer/CrmOData/Crm.svc/myCustomer?$filter=lastName eq \'Reilly\'\n    /// Purpose : Demonstrates how to retrieve all customers with the Surname "Reilly"\n    ///\n    /// URI     : http://myWebServer/CrmOData/Crm.svc/myCustomer?$select=firstName,lastName\n    /// Output  : Does not work.\n    ///\n    /// "$select statements are not supported. This problem is being discussed\n    ///  here http://social.msdn.microsoft.com/Forums/en/adodotnetdataservices/thread/366086ee-dcef-496a-ad15-f461788ae678\n    ///  and is caused by the fact that CrmDataContext implements the IExpandProvider interface which in turn causes\n    ///  the DataService to lose support for $select projections"\n    ///\n    ///  See http://social.microsoft.com/Forums/en/crmdevelopment/thread/31daedb4-3d75-483a-8d7f-269af3375d74 for original post discussing this\n    ///\n    ///  URI     : http://myWebServer/CrmOData/Crm.svc/myCustomer(guid\'783323a1-b1f1-4910-b5be-a2f37e62d0ba\')/currentBalance\n    ///  Purpose : Retrieves the current balance of the customers account\n    ///\n    ///  URI     : http://myWebServer/CrmOData/Crm.svc/myCustomer(guid\'783323a1-b1f1-4910-b5be-a2f37e62d0ba\')/currentBalance/$value\n    ///  Output  : 321186905.8600\n    ///  Purpose : The raw value\n    ///\n    ///  URI     : http://myWebServer/CrmOData/Crm.svc/myCustomer(guid\'783323a1-b1f1-4910-b5be-a2f37e62d0ba\')?$expand=transactions\n    ///  Purpose : Retrieves a customer by their guid\'783323a1-b1f1-4910-b5be-a2f37e62d0ba\', with the transactions property expanded (the equivalent of Include in Entity Framework I guess)\n    /// </summary>\n    public class Crm : DataService< Xrm.DataContext >\n    {\n        private static ILog _log;\n\n        /// <summary>\n        /// Initialise the service (this method is called only once to initialize service-wide policies.)\n        /// </summary>\n        /// <param name="config"></param>\n        public static void InitializeService(DataServiceConfiguration config)\n        {\n            //Allows access to everything\n            config.SetEntitySetAccessRule("*", EntitySetRights.AllRead);\n            config.SetEntitySetPageSize("*", 10); //Only allow access to 10 items at a time - don\'t want to bring down CRM\n            config.SetServiceOperationAccessRule("*", ServiceOperationRights.AllRead);\n\n            config.DataServiceBehavior.MaxProtocolVersion = DataServiceProtocolVersion.V2;\n\n            // set cache policy to this page\n            HttpContext context = HttpContext.Current;\n            HttpCachePolicy cachePolicy = HttpContext.Current.Response.Cache;\n\n            // server&private: server and client side cache only - not at proxy servers\n            cachePolicy.SetCacheability(HttpCacheability.ServerAndPrivate);\n\n            // default cache expire: 60 seconds\n            cachePolicy.SetExpires(HttpContext.Current.Timestamp.AddSeconds(60));\n\n            // cached output depends on: accept, charset, encoding, and all parameters (like $filter, etc)\n            cachePolicy.VaryByHeaders["Accept"] = true;\n            cachePolicy.VaryByHeaders["Accept-Charset"] = true;\n            cachePolicy.VaryByHeaders["Accept-Encoding"] = true;\n            cachePolicy.VaryByParams["*"] = true;\n\n            //allow client to send Cache-Control: nocache headers to invalidate cache\n            cachePolicy.SetValidUntilExpires(false);\n\n            //Log service startup initialisation\n            _log = log4net.LogManager.GetLogger("Crm.svc");\n            _log.Info("Crm.svc initialising...");\n        }\n\n        /// <summary>\n        /// Allows the user to get the id of a specific CrmEntity given a supplied entity name\n        /// and a supplied predicate which consists of a propertyName and a string propertyValue (eg "112001-S").\n        ///\n        /// If there is a need for a predicate with different type of value (eg int / datetime / decimal)\n        /// then it could be introduced\n        ///\n        /// Example URI : http://myWebServer/CrmOData/Crm.svc/GetId?entityName=\'myCustomer\'&propertyName=\'customerNumber\'&propertyValue=\'23456KL-P\'\n        /// </summary>\n        /// <param name="entityName">eg "myCustomer"</param>\n        /// <param name="propertyName">eg "customerNumber"</param>\n        /// <param name="propertyValue">eg "23456KL-P"</param>\n        /// <returns></returns>\n        [WebGet]\n        public Guid? GetEntityId(string entityName, string propertyName, string propertyValue)\n        {\n            var entities = CurrentDataSource.GetEntities(entityName);\n\n            var entitiesWhere = entities.Where(x => (x.GetPropertyValue(propertyName) as string) == propertyValue);\n\n            var guid = entitiesWhere.Select(x => x.Id)\n                                    .SingleOrDefault();\n\n            return guid;\n        }\n\n        /// <summary>\n        /// Handle exceptions\n        /// </summary>\n        /// <param name="args"></param>\n        protected override void HandleException(HandleExceptionArgs args)\n        {\n            base.HandleException(args);\n\n            //Log all exceptions\n            _log.Error(string.Format("\\r\\nResponseContentType: {0}\\r\\nResponseStatusCode: {1}\\r\\nResponseWritten: {2}\\r\\nUser: {3}{4}",\n                args.ResponseContentType, args.ResponseStatusCode, args.ResponseWritten, HttpContext.Current.User.Identity.Name, args.Exception.GetExceptionDetails()),\n                args.Exception);\n        }\n    }\n}\n')),(0,n.kt)("p",null,"And that's it - done. When you run this web application you will find an OData service exposed at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:12345/Crm.svc"),". You could have it even simpler if you wanted - you could pull out the logging that's in place and leave only the ",(0,n.kt)("inlineCode",{parentName:"p"},"InitializeService")," there. That's all you need. (The ",(0,n.kt)("inlineCode",{parentName:"p"},"GetEntityById")," method is a helper method of my own for identifying the GUIDs of CRM.)"),(0,n.kt)("p",null,"You may have noticed that I have made use of caching for my OData service following the steps I found ",(0,n.kt)("a",r({parentName:"p"},{href:"https://blogs.msdn.com/b/peter_qian/archive/2010/11/17/using-asp-net-output-caching-with-wcf-data-services.aspx"}),"here"),". Again you may or may not want to use this."),(0,n.kt)("h2",r({},{id:"now-a-warning"}),"Now, a warning..."),(0,n.kt)("p",null,"Okay - not so much a warning as a limitation. Whilst most aspects of the OData service work as you would hope there is no support for the $select operator. I had a frustrating time trying to discover why and then came upon this explanation:"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'"$select statements are not supported. This problem is being discussed here ',(0,n.kt)("a",r({parentName:"em"},{href:"http://social.msdn.microsoft.com/Forums/en/adodotnetdataservices/thread/366086ee-dcef-496a-ad15-f461788ae678"}),"http://social.msdn.microsoft.com/Forums/en/adodotnetdataservices/thread/366086ee-dcef-496a-ad15-f461788ae678"),' and is caused by the fact that CrmDataContext implements the IExpandProvider interface which in turn causes the DataService to lose support for $select projections"')),(0,n.kt)("p",null,"You can also see ",(0,n.kt)("a",r({parentName:"p"},{href:"http://social.microsoft.com/Forums/en/crmdevelopment/thread/31daedb4-3d75-483a-8d7f-269af3375d74"}),"here")," for the original post discussing this."),(0,n.kt)("h2",r({},{id:"finishing-off"}),"Finishing off"),(0,n.kt)("p",null,"In the example I set out here I used the version of WCF Data Services that shipped with Visual Studio 2010. WCF Data Services now ships separately from the .NET Framework and you can ",(0,n.kt)("a",r({parentName:"p"},{href:"http://nuget.org/packages?q=wcf+data+services"}),"pick up the latest and greatest from Nuget"),". I understand that you could easily switch over to using the latest versions but since I didn't see any feature that I needed on this occasion I haven't."),(0,n.kt)("p",null,"I hope you find this useful."))}u.isMDXComponent=!0}}]);