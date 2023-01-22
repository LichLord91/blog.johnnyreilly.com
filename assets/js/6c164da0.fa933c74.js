"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[91044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"Serving Docusaurus images with Cloudinary",authors:"johnnyreilly",tags:["Docusaurus","Cloudinary","rehype plugin"],image:"./title-image.png",description:"Cloudinary offers an image CDN which can improve performance of your site. This post details how to get Docusaurus to use Cloudinary to serve optimised images.",hide_table_of_contents:!1},s=void 0,l={permalink:"/2022/12/26/docusaurus-image-cloudinary-rehype-plugin",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-12-26-docusaurus-image-cloudinary-rehype-plugin/index.md",source:"@site/blog/2022-12-26-docusaurus-image-cloudinary-rehype-plugin/index.md",title:"Serving Docusaurus images with Cloudinary",description:"Cloudinary offers an image CDN which can improve performance of your site. This post details how to get Docusaurus to use Cloudinary to serve optimised images.",date:"2022-12-26T00:00:00.000Z",formattedDate:"December 26, 2022",tags:[{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"Cloudinary",permalink:"/tags/cloudinary"},{label:"rehype plugin",permalink:"/tags/rehype-plugin"}],readingTime:9.53,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Serving Docusaurus images with Cloudinary",authors:"johnnyreilly",tags:["Docusaurus","Cloudinary","rehype plugin"],image:"./title-image.png",description:"Cloudinary offers an image CDN which can improve performance of your site. This post details how to get Docusaurus to use Cloudinary to serve optimised images.",hide_table_of_contents:!1},prevItem:{title:"Using Application Insights with Bicep to monitor Azure Static Web Apps and Azure Functions",permalink:"/2023/01/01/application-insights-bicep-azure-static-web-apps"},nextItem:{title:"Azure Static Web Apps: dynamic redirects with Azure Functions",permalink:"/2022/12/22/azure-static-web-apps-dynamic-redirects-azure-functions"}},u={image:n(61016).Z,authorsImageUrls:[void 0]},c=[{value:"Updated 13th January 2023 - <code>f_auto</code> / <code>q_auto</code> support",id:"updated-13th-january-2023---f_auto--q_auto-support",level:2},{value:"What is Cloudinary?",id:"what-is-cloudinary",level:2},{value:"Cloudinary account settings",id:"cloudinary-account-settings",level:2},{value:"Disable restricted media types: Fetched URL",id:"disable-restricted-media-types-fetched-url",level:3},{value:"Allowed fetch domains",id:"allowed-fetch-domains",level:3},{value:"Docusaurus Cloudinary rehype image plugin",id:"docusaurus-cloudinary-rehype-image-plugin",level:2},{value:"Using the plugin",id:"using-the-plugin",level:2},{value:"Introducing <code>rehype-cloudinary-docusaurus</code>",id:"introducing-rehype-cloudinary-docusaurus",level:2},{value:"What about pull request previews?",id:"what-about-pull-request-previews",level:2},{value:"Core Web Vitals and preconnect",id:"core-web-vitals-and-preconnect",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cloudinary offers an image CDN which can improve performance of your site. This post details how to get Docusaurus to use Cloudinary to serve optimised images."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Serving Docusaurus images with Cloudinary&quot; with the Docusaurus and Cloudinary logos",src:n(61016).Z,width:"800",height:"450"})),(0,a.kt)("h2",o({},{id:"updated-13th-january-2023---f_auto--q_auto-support"}),"Updated 13th January 2023 - ",(0,a.kt)("inlineCode",{parentName:"h2"},"f_auto")," / ",(0,a.kt)("inlineCode",{parentName:"h2"},"q_auto")," support"),(0,a.kt)("p",null,"I received a note from the marvellous ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/rebeccapeltz"}),"Rebeccca Peltz")," of Cloudinary, alerting me to the fact that Cloudinary supports using ",(0,a.kt)("inlineCode",{parentName:"p"},"f_auto")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"q_auto")," for images fetched from URLs. To quote her:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"f_auto")," causes Cloudinary to look at User Agent information in the request header and provides the best image format for the browser or device making the request. ",(0,a.kt)("inlineCode",{parentName:"p"},"q_auto")," provides compression that makes the image smaller without creating pixelation."),(0,a.kt)("p",{parentName:"blockquote"},"..."),(0,a.kt)("p",{parentName:"blockquote"},"Here\u2019s what one of your URLs would look like with fetch and f_auto,q_auto"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"https://res.cloudinary.com/priou/image/fetch/f_auto,q_auto/https://johnnyreilly.com/assets/images/screenshot-image-from-cloudinary-cb313fdeb91761d777ed1732f7c054c9.webp"))),(0,a.kt)("p",null,"This sounded nothing but advantageous and so it's now the default behaviour of the plugin, as of v1.2.0. ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/rehype-cloudinary-docusaurus/pull/5"}),"See the pull request here"),". Thanks Rebecca!"),(0,a.kt)("h2",o({},{id:"what-is-cloudinary"}),"What is Cloudinary?"),(0,a.kt)("p",null,"To quote ",(0,a.kt)("a",o({parentName:"p"},{href:"https://cloudinary.com/blog/delivering_all_your_websites_images_through_a_cdn"}),"Cloudinary's website"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Most leading blogs deliver their assets (images, JS, CSS, etc.) through state-of-the-art CDNs and utilize online resizing technologies. With faster, off-site access, they greatly improve their users\u2019 browsing experience, while reducing load on their servers."),(0,a.kt)("p",{parentName:"blockquote"},"Using Cloudinary you can use these same technologies today, in your website or blog, without any hassle.")),(0,a.kt)("p",null,"Consumption of the CDN is very simple. You simply prefix the URL of the image you want to serve with the URL of the Cloudinary CDN. For example, if you want to serve the following image:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://blog.johnnyreilly.com/img/profile-64x64.jpg")),(0,a.kt)("p",null,"you can serve it from Cloudinary with the following URL:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://res.cloudinary.com/demo/image/fetch/https://blog.johnnyreilly.com/img/profile-64x64.jpg"),"."),(0,a.kt)("p",null,"You see? All we did was prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"https://res.cloudinary.com/demo/image/fetch/")," to the URL of the image we wanted to serve. That's it. When you visit the URL, you'll see the image served from Cloudinary. Behind the scenes, Cloudinary will fetch the image from the original source and serve it to you."),(0,a.kt)("admonition",o({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," part of the URL is the name of the Cloudinary account. You can create your own account and use that instead.")),(0,a.kt)("h2",o({},{id:"cloudinary-account-settings"}),"Cloudinary account settings"),(0,a.kt)("p",null,"Once you have created your account, you'll need to tweak the settings. There's two tweaks, one mandatory and one that's optional."),(0,a.kt)("h3",o({},{id:"disable-restricted-media-types-fetched-url"}),"Disable restricted media types: Fetched URL"),(0,a.kt)("p",null,"First the mandatory one. We need to uncheck the ",(0,a.kt)("inlineCode",{parentName:"p"},"Disable restricted media types: Fetched URL")," setting. The double negative shenanigans make this confusing; to read it another way we are \"allowing fetching URLs\". Much clearer! We need to do this is because we're fetching the image from a URL. If we didn't make the change, Cloudinary would refuse to serve the image. It wouldn't even try to fetch it."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of Cloudinary settings with the Disable restricted media types: Fetched URL unchecked",src:n(29130).Z,width:"1134",height:"580"})),(0,a.kt)("admonition",o({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},'Remember to scroll down and hit the "Save" button. (Otherwise your changes won\'t be saved.)')),(0,a.kt)("h3",o({},{id:"allowed-fetch-domains"}),"Allowed fetch domains"),(0,a.kt)("p",null,"The second setting is optional. If you want to restrict the domains from which you can fetch images, you can do so. You might want to do this if you want to prevent others from making use of your Cloudinary account and blowing your limits. I'm not sure how likely that is, but it's a possibility."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of Cloudinary settings with the allowed fetch domains restricted to blog.johnnyreilly.com",src:n(11028).Z,width:"1683",height:"345"})),(0,a.kt)("p",null,"Above I'm restricting my account to only fetch images from my own site; ",(0,a.kt)("inlineCode",{parentName:"p"},"blog.johnnyreilly.com"),". To my mind, it's the Cloudinary content security policy for fetching images."),(0,a.kt)("h2",o({},{id:"docusaurus-cloudinary-rehype-image-plugin"}),"Docusaurus Cloudinary rehype image plugin"),(0,a.kt)("p",null,"Now we have our Cloudinary account set up, we can use it with Docusaurus. To do so, we need to create a rehype plugin. This is a plugin for the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/rehypejs/rehype/"}),"rehype")," HTML processor. It's a plugin that will transform the HTML image syntax into a Cloudinary URL."),(0,a.kt)("p",null,"The plugin takes the form of a JavaScript file we'll call ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus-cloudinary-rehype-plugin.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"//@ts-check\nconst visit = require('unist-util-visit');\n\n/**\n * Create a rehype plugin that will replace image URLs with Cloudinary URLs\n * @param {*} options cloudName your Cloudinary\u2019s cloud name eg demo, baseUrl the base URL of your website eg https://blog.johnnyreilly.com - should not include a trailing slash, will likely be the same as the config.url in your docusaurus.config.js\n * @returns rehype plugin that will replace image URLs with Cloudinary URLs\n */\nfunction imageCloudinaryRehypePluginFactory(\n  /** @type {{ cloudName: string; baseUrl: string }} */ options\n) {\n  const { cloudName, baseUrl } = options;\n  const srcRegex = / src={(.*)}/;\n\n  /** @type {import('unified').Plugin<[], import('hast').Root>} */\n  return (tree) => {\n    visit(tree, ['element', 'jsx'], (node) => {\n      if (node.type === 'element' && node['tagName'] === 'img') {\n        // handles nodes like this:\n\n        // {\n        //   type: 'element',\n        //   tagName: 'img',\n        //   properties: {\n        //     src: 'https://some.website.com/cat.gif',\n        //     alt: null\n        //   },\n        //   ...\n        // }\n\n        const url = node['properties'].src;\n\n        node[\n          'properties'\n        ].src = `https://res.cloudinary.com/${cloudName}/image/fetch/${url}`;\n      } else if (node.type === 'jsx' && node['value']?.includes('<img ')) {\n        // handles nodes like this:\n\n        // {\n        //   type: 'jsx',\n        //   value: '<img src={require(\"!/workspaces/blog.johnnyreilly.com/blog-website/node_modules/url-loader/dist/cjs.js?limit=10000&name=assets/images/[name]-[hash].[ext]&fallback=/workspaces/blog.johnnyreilly.com/blog-website/node_modules/file-loader/dist/cjs.js!./bower-with-the-long-paths.png\").default} width=\"640\" height=\"497\" />'\n        // }\n\n        const match = node['value'].match(srcRegex);\n        if (match) {\n          const urlOrRequire = match[1];\n          node['value'] = node['value'].replace(\n            srcRegex,\n            ` src={${`\\`https://res.cloudinary.com/${cloudName}/image/fetch/${baseUrl}\\$\\{${urlOrRequire}\\}\\``}}`\n          );\n        }\n      }\n    });\n  };\n}\n\nmodule.exports = imageCloudinaryRehypePluginFactory;\n")),(0,a.kt)("p",null,"This plugin is a factory function that takes two parameters: the name of your Cloudinary account and the base URL of your website. It returns a rehype plugin that will transform the HTML image syntax into a Cloudinary URL."),(0,a.kt)("p",null,"If you look at the code, you'll see that it handles two different types of image syntax; an ",(0,a.kt)("inlineCode",{parentName:"p"},"img")," tag and a JSX image tag. The ",(0,a.kt)("inlineCode",{parentName:"p"},"img")," tag is a very simple transform; it just prefixes the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," attribute with ",(0,a.kt)("inlineCode",{parentName:"p"},"https://res.cloudinary.com/${cloudName}/image/fetch/")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"${cloudName}")," is the name of your Cloudinary account; eg ",(0,a.kt)("inlineCode",{parentName:"p"},"demo"),"."),(0,a.kt)("p",null,"The JSX image tag is a little more complex. It's a little more complex because we have a complete JSX node which contains an ",(0,a.kt)("inlineCode",{parentName:"p"},"img")," element. The ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," attribute is a JavaScript expression. It's not a string. It's a JavaScript expression that will be evaluated at runtime through some webpack goodness."),(0,a.kt)("p",null,"This means that we need to do a little more work to transform it into a Cloudinary URL. We need to wrap the expression in backticks and prefix it with ",(0,a.kt)("inlineCode",{parentName:"p"},"https://res.cloudinary.com/${cloudName}/image/fetch/${baseUrl}")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"${baseUrl}")," is the base URL of your website. We also need to prefix the expression with a ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," to indicate that it's a JavaScript expression. Tough to read but it works."),(0,a.kt)("h2",o({},{id:"using-the-plugin"}),"Using the plugin"),(0,a.kt)("p",null,"Now we have our plugin, we can use it. We need to add it to our ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file. We do this by adding it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"rehypePlugins")," array:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"//@ts-check\nconst docusaurusCloudinaryRehypePlugin = require('./docusaurus-cloudinary-rehype-plugin');\n\nconst url = 'https://blog.johnnyreilly.com';\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        // ...\n        blog: {\n          // ...\n          rehypePlugins: [\n            [\n              docusaurusCloudinaryRehypePlugin,\n              {\n                cloudName: 'demo',\n                baseUrl: url,\n              },\n            ],\n          ],\n          // ...\n        },\n        // ...\n      }),\n    ],\n  ],\n  // ...\n};\n\nmodule.exports = config;\n")),(0,a.kt)("p",null,"Note that we pass in the name of our Cloudinary account and the base URL of our website. We can now run our website and see the images being transformed into Cloudinary URLs:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Screenshot of image being served from the Cloudinary CDN",src:n(25558).Z,width:"2536",height:"1266"})),(0,a.kt)("p",null,"Excellent! We're now serving our images from the Cloudinary CDN."),(0,a.kt)("h2",o({},{id:"introducing-rehype-cloudinary-docusaurus"}),"Introducing ",(0,a.kt)("inlineCode",{parentName:"h2"},"rehype-cloudinary-docusaurus")),(0,a.kt)("p",null,"But who wants to make a rehype plugin? I don't. I want to use a rehype plugin. So I created one. It's called ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/rehype-cloudinary-docusaurus"}),(0,a.kt)("inlineCode",{parentName:"a"},"rehype-cloudinary-docusaurus"))," and you can find it on npm. It's a drop-in replacement for the plugin we created above. You can add it like this (use whichever package manager CLI tool you prefer):"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"npm i rehype-cloudinary-docusaurus\n")),(0,a.kt)("p",null,"And then usage is:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"//@ts-check\nconst docusaurusCloudinaryRehypePlugin = require('rehype-cloudinary-docusaurus');\n\nconst url = 'https://blog.johnnyreilly.com';\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        // ...\n        blog: {\n          // ...\n          rehypePlugins: [\n            [\n              docusaurusCloudinaryRehypePlugin,\n              {\n                cloudName: 'demo',\n                baseUrl: url,\n              },\n            ],\n          ],\n          // ...\n        },\n        // ...\n      }),\n    ],\n  ],\n  // ...\n};\n\nmodule.exports = config;\n")),(0,a.kt)("p",null,"You will also need to disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"url-loader")," in your Docusaurus build which transforms images into base64 strings, as this will conflict with the plugin. ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/docusaurus/pull/5498"}),"There isn't a first class way to do this in Docusaurus at present"),". However by setting the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"WEBPACK_URL_LOADER_LIMIT")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," you can disable it. ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/397"}),"You can see an implementation example in this pull request"),". It amounts to adding the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/kentcdodds/cross-env"}),(0,a.kt)("inlineCode",{parentName:"a"},"cross-env"))," package and then adding the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-json"}),'    "build": "cross-env WEBPACK_URL_LOADER_LIMIT=0 docusaurus build",\n')),(0,a.kt)("h2",o({},{id:"what-about-pull-request-previews"}),"What about pull request previews?"),(0,a.kt)("p",null,"We've done all the hard stuff, now let's do some finessing. We want to make sure that our pull request previews still work. My blog runs on Azure Static Web Apps and benefits from a ",(0,a.kt)("a",o({parentName:"p"},{href:"/2022/02/08/azure-static-web-apps-a-netlify-alternative"}),"staging environments / pull request previews feature that lets you see a change before it is merged"),". It's useful not only for human intrigue, but for running ",(0,a.kt)("a",o({parentName:"p"},{href:"/2022/03/20/lighthouse-meet-github-actions"}),"tools like Lighthouse against your site to catch issues"),"."),(0,a.kt)("p",null,"We don't want to be serving images from the Cloudinary CDN when we're running a pull request preview. We could make it work, but it doesn't seem worth the candle. We can just serve the images from our website."),(0,a.kt)("p",null,"However, to support that we need to have a mechanism to detect when we're running a pull request preview. We can do that by setting an environment variable in our Azure Static Web Apps configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"- name: Install and build site \ud83d\udd27\n  run: |\n    cd blog-website\n    yarn install --frozen-lockfile\n    USE_CLOUDINARY=${{ github.event_name != 'pull_request' }} yarn run build\n")),(0,a.kt)("p",null,"The above code sets an environment variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"USE_CLOUDINARY")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," if the GitHub Action is running for a pull request, and ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if not. ",(0,a.kt)("a",o({parentName:"p"},{href:"/2022/12/18/azure-static-web-apps-build-app-externally"}),"You'll note that I'm building my website externally to the Azure Static Web Apps build process"),". If I was building my website as part of the Azure Static Web Apps build process, I'd use the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/static-web-apps/build-configuration?tabs=github-actions#custom-build-commands"}),"custom ",(0,a.kt)("inlineCode",{parentName:"a"},"app_build_command")," feature")," to set the environment variable."),(0,a.kt)("p",null,"With our environment variable in place, we can conditionally add the plugin to our ",(0,a.kt)("inlineCode",{parentName:"p"},"rehypePlugins")," array:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"//@ts-check\nconst docusaurusCloudinaryRehypePlugin = require('rehype-cloudinary-docusaurus');\n\nconst USE_CLOUDINARY = process.env['USE_CLOUDINARY'] === 'true';\n\nconst url = 'https://blog.johnnyreilly.com';\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        // ...\n        blog: {\n          // ...\n          rehypePlugins: USE_CLOUDINARY\n            ? [\n                [\n                  docusaurusCloudinaryRehypePlugin,\n                  {\n                    cloudName: 'demo',\n                    baseUrl: url,\n                  },\n                ],\n              ]\n            : [],\n          // ...\n        },\n        // ...\n      }),\n    ],\n  ],\n\n  // ...\n};\n\nmodule.exports = config;\n")),(0,a.kt)("p",null,"With that in place, images will be served from the Cloudinary CDN when we're running our website normally, but will be served from our website when we're running a pull request preview."),(0,a.kt)("h2",o({},{id:"core-web-vitals-and-preconnect"}),"Core Web Vitals and preconnect"),(0,a.kt)("p",null,"Finally, it's worth adding an entry to the ",(0,a.kt)("inlineCode",{parentName:"p"},"headTags")," of your ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to ensure that your site preconnects to Cloudinary's CDN. This speeds up the time until images will be served to your users. That addition looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  // ...\n  headTags: [\n    // ...\n\n    // <link rel=\"preconnect\" href=\"https://res.cloudinary.com\" />\n    {\n      tagName: 'link',\n      attributes: {\n        rel: 'preconnect',\n        href: 'https://res.cloudinary.com',\n      },\n    },\n\n    // ...\n  ],\n  // ...\n};\n")),(0,a.kt)("h2",o({},{id:"conclusion"}),"Conclusion"),(0,a.kt)("p",null,"We've seen how we can use a rehype plugin to transform HTML image syntax into Cloudinary URLs. We've also seen how we can use an environment variable to conditionally add the plugin to our Docusaurus configuration."))}d.isMDXComponent=!0},11028:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-cloudinary-allowed-fetch-domains-9738141317dcef4b0544627eaf6f964b.webp"},29130:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-cloudinary-restricted-6ff069b066155f452b45559594b4dbd1.webp"},25558:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-image-from-cloudinary-cb313fdeb91761d777ed1732f7c054c9.webp"},61016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/title-image-934557b5733320b51dc0b371cf808e3a.png"}}]);