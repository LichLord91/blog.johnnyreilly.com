"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[82832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||s;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Cypress and Auth0",authors:"johnnyreilly",tags:["auth0-js","Auth0","cypress","login"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2018/07/09/cypress-and-auth0",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2018-07-09-cypress-and-auth0/index.md",source:"@site/blog/2018-07-09-cypress-and-auth0/index.md",title:"Cypress and Auth0",description:"Cypress is a fantastic way to write UI tests for your web apps. Just world class. Wait, no. Galaxy class. I'm going to go one further: universe class. You get my drift.",date:"2018-07-09T00:00:00.000Z",formattedDate:"July 9, 2018",tags:[{label:"auth0-js",permalink:"/tags/auth-0-js"},{label:"Auth0",permalink:"/tags/auth-0"},{label:"cypress",permalink:"/tags/cypress"},{label:"login",permalink:"/tags/login"}],readingTime:4.435,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Cypress and Auth0",authors:"johnnyreilly",tags:["auth0-js","Auth0","cypress","login"],hide_table_of_contents:!1},prevItem:{title:"Azure App Service: nested configuration for ASP.NET running in Web App for Containers using Application Settings",permalink:"/2018/07/28/azure-app-service-web-app-containers-asp-net-nested-configuration"},nextItem:{title:"VSTS and EF Core Migrations",permalink:"/2018/06/24/vsts-and-ef-core-migrations"}},p={authorsImageUrls:[void 0]},u=[{value:"Commanding Auth0",id:"commanding-auth0",level:2},{value:"Using It",id:"using-it",level:2},{value:"One More Thing...",id:"one-more-thing",level:2}],c={toc:u};function h(e){var{components:t}=e,o=s(e,["components"]);return(0,a.kt)("wrapper",r({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"https://www.cypress.io/"}),"Cypress")," is a fantastic way to write UI tests for your web apps. Just world class. Wait, no. Galaxy class. I'm going to go one further: universe class. You get my drift."),(0,a.kt)("p",null,"Here's a pickle for you. You have functionality that lies only behind the walled garden of authentication. You want to write tests for these capabilities. Assuming that authentication takes place within your application that's no great shakes. Authentication is part of your app; it's no big deal using Cypress to automate logging in."),(0,a.kt)("p",null,"Auth is a serious business and, as Cypress is best in class for UI testing, I'll say that Auth0 is romping home with the same title in the auth-as-a-service space. My app is using Auth0 for authentication. What's important to note about this is the flow. Typically when using auth-as-a-service, the user is redirected to the auth provider's site to authenticate and then be redirected back to the application post-login."),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/brian-mann"}),"Brian Mann")," (of Cypress fame) has been ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/cypress-io/cypress/issues/1342#issuecomment-366747803"}),"fairly clear when talking about testing with this sort of authentication flow"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You're trying to test SSO - and we have recipes showing you exactly how to do this."),(0,a.kt)("p",{parentName:"blockquote"},"Also best practice is never to visit or test 3rd party sites not under your control. You don't control ",(0,a.kt)("inlineCode",{parentName:"p"},"microsoftonline"),", so there's no reason to use the UI to test this. You can programmatically test the integration between it and your app with ",(0,a.kt)("inlineCode",{parentName:"p"},"cy.request")," ","-"," which is far faster, more reliable, and still gives you 100% confidence.")),(0,a.kt)("p",null,"I want to automate logging into Auth0 from my Cypress tests. But hopefully in a good way. Not a bad way. Wouldn't want to make Brian sad."),(0,a.kt)("h2",r({},{id:"commanding-auth0"}),"Commanding Auth0"),(0,a.kt)("p",null,"To automate our login, we're going to use the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/auth0/auth0.js"}),"auth0-js client library"),". This is the same library the application uses; but we're going to do something subtly different with it."),(0,a.kt)("p",null,"The application uses ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/auth0/auth0.js#api"}),(0,a.kt)("inlineCode",{parentName:"a"},"authorize"))," to log users in. This function redirects the user into the Auth0 lock screen, and then, post authentication, redirects the user back to the application with a token in the URL. The app parses the token (using the auth0 client library) and sets the token and the expiration of said token in the browser sessionStorage."),(0,a.kt)("p",null,"What we're going to do is automate our login by using ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," instead. First of all, we need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"auth0-js")," as a dependency of our e2e tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"yarn add auth0-js --dev\n")),(0,a.kt)("p",null,"Next, we're going to create ourselves a custom command called loginAsAdmin:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"const auth0 = require('auth0-js');\n\nCypress.Commands.add('loginAsAdmin', (overrides = {}) => {\n  Cypress.log({\n    name: 'loginAsAdminBySingleSignOn',\n  });\n\n  const webAuth = new auth0.WebAuth({\n    domain: 'my-super-duper-domain.eu.auth0.com', // Get this from https://manage.auth0.com/#/applications and your application\n    clientID: 'myclientid', // Get this from https://manage.auth0.com/#/applications and your application\n    responseType: 'token id_token',\n  });\n\n  webAuth.client.login(\n    {\n      realm: 'Username-Password-Authentication',\n      username: 'mytestemail@something.co.uk',\n      password: 'SoVeryVeryVery$ecure',\n      audience: 'myaudience', // Get this from https://manage.auth0.com/#/apis and your api, use the identifier property\n      scope: 'openid email profile',\n    },\n    function (err, authResult) {\n      // Auth tokens in the result or an error\n      if (authResult && authResult.accessToken && authResult.idToken) {\n        const token = {\n          accessToken: authResult.accessToken,\n          idToken: authResult.idToken,\n          // Set the time that the access token will expire at\n          expiresAt: authResult.expiresIn * 1000 + new Date().getTime(),\n        };\n\n        window.sessionStorage.setItem(\n          'my-super-duper-app:storage_token',\n          JSON.stringify(token)\n        );\n      } else {\n        console.error('Problem logging into Auth0', err);\n        throw err;\n      }\n    }\n  );\n});\n")),(0,a.kt)("p",null,"This command logs in using the ",(0,a.kt)("inlineCode",{parentName:"p"},"auth0-js")," API and then sets the result into ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage")," in the same way that our app does. This allows our app to read the value out of ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage")," and use it. We're also going to put together one other command:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"Cypress.Commands.add('visitHome', (overrides = {}) => {\n  cy.visit('/', {\n    onBeforeLoad: (win) => {\n      win.sessionStorage.clear();\n    },\n  });\n});\n")),(0,a.kt)("p",null,"This visits the root of our application and wipes the ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage"),". This is necessary because Cypress doesn't clear down ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionStorage")," between tests. (",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/cypress-io/cypress/issues/413"}),"That's going to change though."),")"),(0,a.kt)("h2",r({},{id:"using-it"}),"Using It"),(0,a.kt)("p",null,"Let's write a test that uses our new commands to see if it gets access to our admin functionality:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"describe('access secret admin functionality', () => {\n  it('should be able to navigate to', () => {\n    cy.visitHome()\n      .loginAsAdmin()\n      .get('[href=\"/secret-adminny-stuff\"]') // This link should only be visible to admins\n      .click()\n      .url()\n      .should('contain', 'secret-adminny-stuff/'); // non-admins should be redirected away from this url\n  });\n});\n")),(0,a.kt)("p",null,"Well, the test looks good but it's failing. If I fire up the Chrome Dev Tools in Cypress (did I mention that Cypress is absolutely fabulous?) then I see this response tucked away in the network tab:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{error: "unauthorized_client",\u2026} error : "unauthorized_client" error_description : "Grant type \'http://auth0.com/oauth/grant-type/password-realm\' not allowed for the client."\n')),(0,a.kt)("p",null,"Hmmm... So sad. If you go to ",(0,a.kt)("a",r({parentName:"p"},{href:"https://manage.auth0.com/#/applications"}),"https://manage.auth0.com/#/applications"),", select your application, ",(0,a.kt)("inlineCode",{parentName:"p"},"Show Advanced Settings")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Grant Types")," you'll see a ",(0,a.kt)("inlineCode",{parentName:"p"},"Password")," option is unselected."),(0,a.kt)("p",null,"Select it, Save Changes and try again."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(33596).Z,width:"640",height:"449"})),(0,a.kt)("p",null,"You now have a test which automates your Auth0 login using Cypress and goes on to test your application functionality with it!"),(0,a.kt)("h2",r({},{id:"one-more-thing"}),"One More Thing..."),(0,a.kt)("p",null,"It's worth saying that it's worth setting up different tenants in Auth0 to support your testing scenarios. This is generally a good idea so you can separate your testing accounts from Production accounts. Further to that, you don't need to have your Production setup supporting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Password``Grant Type"),"."),(0,a.kt)("p",null,"Also, if you're curious about what the application under test is like then read ",(0,a.kt)("a",r({parentName:"p"},{href:"/2018/01/14/auth0-typescript-and-aspnet-core"}),"this"),"."))}h.isMDXComponent=!0},33596:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"}}]);