"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[46571],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return t?o.createElement(h,a(a({ref:n},m),{},{components:t})):o.createElement(h,a({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},79339:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],l={title:"EF Core 3.1 breaks left join with no navigation property",authors:"johnnyreilly",tags:["Entity Framework","left join","navigation property","broken"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2020/01/02/ef-core-31-breaks-left-join-with-no-navigation-property",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2020-01-02-ef-core-31-breaks-left-join-with-no-navigation-property/index.md",source:"@site/blog/2020-01-02-ef-core-31-breaks-left-join-with-no-navigation-property/index.md",title:"EF Core 3.1 breaks left join with no navigation property",description:"Just recently my team took on the challenge of upgrading our codebase from .NET Core 2.2 to .NET Core 3.1. Along the way we encountered a quirky issue which caused us much befuddlement. Should you be befuddled too, then maybe this can help you.",date:"2020-01-02T00:00:00.000Z",formattedDate:"January 2, 2020",tags:[{label:"Entity Framework",permalink:"/tags/entity-framework"},{label:"left join",permalink:"/tags/left-join"},{label:"navigation property",permalink:"/tags/navigation-property"},{label:"broken",permalink:"/tags/broken"}],readingTime:2.375,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"EF Core 3.1 breaks left join with no navigation property",authors:"johnnyreilly",tags:["Entity Framework","left join","navigation property","broken"],hide_table_of_contents:!1},prevItem:{title:"LICENSE to kill your PWA",permalink:"/2020/01/21/license-to-kill-your-pwa"},nextItem:{title:"Teams notification webhooks",permalink:"/2019/12/18/teams-notification-webhooks"}},m={authorsImageUrls:[void 0]},p=[{value:"Join me!",id:"join-me",level:2},{value:"Navigation properties to the rescue!",id:"navigation-properties-to-the-rescue",level:2}],c={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Just recently my team took on the challenge of upgrading our codebase from .NET Core 2.2 to .NET Core 3.1. Along the way we encountered a quirky issue which caused us much befuddlement. Should you be befuddled too, then maybe this can help you."),(0,i.kt)("p",null,"Whilst running our app, we started encountering an error with an Entity Framework Query that looked like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var stuffWeCareAbout = await context.Things\n    .Include(thing => thing.ThisIsFine)\n    .Include(thing => thing.Problematic)\n    .Where(thing => thing.CreatedOn > startFromThisTime && thing.CreatedOn < endAtThisTime)\n    .OrderByDescending(thing => thing.CreatedOn)\n    .ToArrayAsync();\n")),(0,i.kt)("h2",{id:"join-me"},"Join me!"),(0,i.kt)("p",null,"As EF Core tried to join from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Things")," table to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Problematic")," table (some obfuscation in table names here), that which worked in .NET Core 2.2 was ",(0,i.kt)("em",{parentName:"p"},"not")," working in .NET Core 3.1. Digging into the issue, we discovered EF Core was generating an invalid ",(0,i.kt)("inlineCode",{parentName:"p"},"LEFT JOIN"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"fail: Microsoft.EntityFrameworkCore.Database.Command[20102]\n      Failed executing DbCommand (18ms) [Parameters=[@__startFromThisTime_0='?' (DbType = DateTime2), @__endAtThisTime_1='?' (DbType = DateTime2)], CommandType='Text', CommandTimeout='30']\n      SELECT [o].[ThingId], [o].[AnonymousId], [o].[CreatedOn],  [o].[Status], [o].[UpdatedOn], [o0].[Id], [o0].[ThingId], [o0].[Name], [o1].[ThingId], [o1].[Status], [o1].[CreatedOn], [o1].[ThingThingId], [o1].[SentOn]\n      FROM [Things] AS [o]\n      LEFT JOIN [ThisIsFines] AS [o0] ON [o].[ThingId] = [o0].[ThingId]\n      LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]\n      WHERE ([o].[CreatedOn] @__startFromThisTime_0) AND ([o].[CreatedOn] < @__endAtThisTime_1)\n      ORDER BY [o].[CreatedOn] DESC, [o].[ThingId], [o1].[ThingId], [o1].[Status]\nMicrosoft.EntityFrameworkCore.Database.Command: Error: Failed executing DbCommand (18ms) [Parameters=[@__startFromThisTime_0='?' (DbType = DateTime2), @__endAtThisTime_1='?' (DbType = DateTime2)], CommandType='Text', CommandTimeout='30']\nSELECT [o].[ThingId], [o].[AnonymousId], [o].[CreatedOn], [o].[Status], [o].[UpdatedOn], [o0].[Id], [o0].[ThingId], [o0].[Name], [o1].[ThingId], [o1].[Status], [o1].[CreatedOn], [o1].[ThingThingId], [o1].[SentOn]\nFROM [Things] AS [o]\nLEFT JOIN [ThisIsFines] AS [o0] ON [o].[ThingId] = [o0].[ThingId]\nLEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]\nWHERE ([o].[CreatedOn] @__startFromThisTime_0) AND ([o].[CreatedOn] < @__endAtThisTime_1)\nORDER BY [o].[CreatedOn] DESC, [o].[ThingId], [o1].[ThingId], [o1].[Status]\n")),(0,i.kt)("p",null,"Do you see it? Probably not; it took us a while too... The issue lay here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingThingId]\n")),(0,i.kt)("p",null,"This should actually have been:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LEFT JOIN [Problematic] AS [o1] ON [o].[ThingId] = [o1].[ThingId]\n")),(0,i.kt)("p",null,"For some reason EF Core was looking for ",(0,i.kt)("inlineCode",{parentName:"p"},"ThingThingId")," where it should have looked for ",(0,i.kt)("inlineCode",{parentName:"p"},"ThingId"),". But why?"),(0,i.kt)("h2",{id:"navigation-properties-to-the-rescue"},"Navigation properties to the rescue!"),(0,i.kt)("p",null,"This was the ",(0,i.kt)("inlineCode",{parentName:"p"},"Problematic")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.ComponentModel.DataAnnotations;\nusing System.ComponentModel.DataAnnotations.Schema;\n\nnamespace Treasury.Data.Entities\n{\n    public class Problematic\n    {\n        [ForeignKey("Thing")]\n        [Required]\n        public Guid ThingId { get; set; }\n        [Required]\n        public DateTime CreatedOn { get; set; }\n        public DateTime SentOn { get; set; }\n    }\n}\n')),(0,i.kt)("p",null,"If you look closely you'll see it has a ",(0,i.kt)("inlineCode",{parentName:"p"},"ForeignKey")," but ",(0,i.kt)("em",{parentName:"p"},"no")," accompanying Navigation property. So let's add one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.ComponentModel.DataAnnotations;\nusing System.ComponentModel.DataAnnotations.Schema;\n\nnamespace Our.App\n{\n    public class Problematic\n    {\n        [ForeignKey("Thing")]\n        [Required]\n        public Guid ThingId { get; set; }\n        [Required]\n        public DateTime CreatedOn { get; set; }\n        public DateTime SentOn { get; set; }\n\n        /* THIS NAVIGATION PROPERTY IS WHAT WE NEEDED!!! */\n        public virtual Thing Thing { get; set; }\n    }\n}\n')),(0,i.kt)("p",null,"With this in place our app starts generating the SQL we need."))}d.isMDXComponent=!0}}]);