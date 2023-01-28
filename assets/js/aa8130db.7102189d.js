"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[86779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=m(n),p=o,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var m=2;m<i;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Docusaurus blogs: using the createFeedItems API with git commit date",authors:"johnnyreilly",tags:["Docusaurus","blog","RSS","createFeedItems","git commit date"],image:"./title-image.png",description:"The Docusaurus createFeedItems API can be used to tweak RSS feeds for your blog. This post shows how to use it with the git commit date.",hide_table_of_contents:!1},r=void 0,l={permalink:"/2023/01/28/docusaurus-createfeeditems-api-git-commit-date",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2023-01-28-docusaurus-createfeeditems-api-git-commit-date/index.md",source:"@site/blog/2023-01-28-docusaurus-createfeeditems-api-git-commit-date/index.md",title:"Docusaurus blogs: using the createFeedItems API with git commit date",description:"The Docusaurus createFeedItems API can be used to tweak RSS feeds for your blog. This post shows how to use it with the git commit date.",date:"2023-01-28T00:00:00.000Z",formattedDate:"January 28, 2023",tags:[{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"blog",permalink:"/tags/blog"},{label:"RSS",permalink:"/tags/rss"},{label:"createFeedItems",permalink:"/tags/create-feed-items"},{label:"git commit date",permalink:"/tags/git-commit-date"}],readingTime:5.41,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Docusaurus blogs: using the createFeedItems API with git commit date",authors:"johnnyreilly",tags:["Docusaurus","blog","RSS","createFeedItems","git commit date"],image:"./title-image.png",description:"The Docusaurus createFeedItems API can be used to tweak RSS feeds for your blog. This post shows how to use it with the git commit date.",hide_table_of_contents:!1},nextItem:{title:"Image Optimisation with the TinyPNG API",permalink:"/2023/01/22/image-optimisation-tinypng-api"}},m={image:n(15978).Z,authorsImageUrls:[void 0]},c=[{value:"<code>createFeedItems</code> API",id:"createfeeditems-api",level:2},{value:"<code>createFeedItems</code> API usage",id:"createfeeditems-api-usage",level:2},{value:"Our implementation",id:"our-implementation",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function d(e){var{components:t}=e,s=i(e,["components"]);return(0,a.kt)("wrapper",o({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A new API landed in Docusaurus 2.3.0 - it's called ",(0,a.kt)("inlineCode",{parentName:"p"},"createFeedItems"),". It's a great API that allows you to tweak the Atom / RSS / JSON feeds for your blog. This post shows how to use it with the git commit date."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Docusaurus: using the createFeedItems API with git commit date&quot; with the Docusaurus logo",src:n(15978).Z,width:"800",height:"450"})),(0,a.kt)("h2",o({},{id:"createfeeditems-api"}),(0,a.kt)("inlineCode",{parentName:"h2"},"createFeedItems")," API"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/docusaurus/pull/8378"}),"I worked on the createFeedItems API for Docusaurus"),". When the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://twitter.com/docusaurus/status/1619019412610191379"}),"feature was announced"),", there were a number of suggested use cases:"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://twitter.com/docusaurus/status/1619019412610191379"}),(0,a.kt)("img",{loading:"lazy",alt:"screenshot of a tweet describing things you could do with the createFeedItems API",src:n(41283).Z,width:"589",height:"811"}))),(0,a.kt)("p",null,"As someone who worked on the API, you naturally might imagine that I'd have some ideas for how to use it. I do!"),(0,a.kt)("p",null,"There's two particular use cases that I've been thinking about:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Trimming the number of feed items"),(0,a.kt)("li",{parentName:"ol"},"Using the latest git commit date for the feed item date")),(0,a.kt)("p",null,"The reason I want to trim the number of feed items is because I have written a lot of blog posts. I learned that some RSS readers were choking on the size of my feed and rendering it unusable. So I thought a decent approach would be to trim the number of feed items to a more manageable number."),(0,a.kt)("p",null,"The second use case is a lot more fun! I want to use the git commit date for the feed item date. Docusaurus uses the date of post itself to drive this by default. You can see this by looking at the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/blog/atom.xml"}),"Docusaurus atom feed"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of Docusaurus atom feed",src:n(27352).Z,width:"494",height:"312"})),(0,a.kt)("p",null,"That's not a bad default. However, I tend to go back and edit my posts, particularly in the recent weeks after publishing. I don't want the date of the feed item to be the date of the post. I want it to be the date of the most recent commit. That way, if I go back and edit a post, the feed item date will be updated."),(0,a.kt)("p",null,"We're going to implement both of these."),(0,a.kt)("h2",o({},{id:"createfeeditems-api-usage"}),(0,a.kt)("inlineCode",{parentName:"h2"},"createFeedItems")," API usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"createFeedItems")," API is a function that takes a list of feed items and returns a list of feed items. I find looking at code easier than reading about code so let's look at ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/docs/blog#feed"}),"the example code from the docs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        blog: {\n          feedOptions: {\n            type: 'all',\n            copyright: `Copyright \xa9 ${new Date().getFullYear()} Facebook, Inc.`,\n            createFeedItems: async (params) => {\n              const { blogPosts, defaultCreateFeedItems, ...rest } = params;\n              return defaultCreateFeedItems({\n                // keep only the 10 most recent blog posts in the feed\n                blogPosts: blogPosts.filter((item, index) => index < 10),\n                ...rest,\n              });\n            },\n          },\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("p",null,"As we can see - this is a function, which receives a single parameter. That parameter is an object with a number of properties. The most important of these is ",(0,a.kt)("inlineCode",{parentName:"p"},"blogPosts"),". This is a list of blog posts. We can filter this list and return a new list. We can also call ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultCreateFeedItems")," to get the default behaviour. We can then tweak the result of that call."),(0,a.kt)("p",null,"Importantly it's an ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," function. This means that we can do async work in it. We're going to use that when we get the git commit date."),(0,a.kt)("h2",o({},{id:"our-implementation"}),"Our implementation"),(0,a.kt)("p",null,"Now we know how to use the API, let's implement it to handle our use cases. To get the git commit date, we're going to use a package called ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/steveukx/git-js"}),(0,a.kt)("inlineCode",{parentName:"a"},"simple-git")),". We'll add this as a dependency of our Docusaurus project:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yarn add simple-git\n")),(0,a.kt)("p",null,"We're going to create a new file to sit alongside our ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file. We'll call it ",(0,a.kt)("inlineCode",{parentName:"p"},"createFeedItems.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const path = require('path');\nconst { simpleGit, SimpleGit, SimpleGitOptions } = require('simple-git');\n\n/** @type {import('@docusaurus/plugin-content-blog').CreateFeedItemsFn} */\nasync function createFeedItems(params) {\n  const { blogPosts, defaultCreateFeedItems, ...rest } = params;\n\n  const feedItems = await defaultCreateFeedItems({\n    blogPosts,\n    ...rest,\n  });\n\n  for (const feedItem of feedItems) {\n    // blogPost.metadata.permalink: '/2023/01/22/image-optimisation-tinypng-api',\n    // feedItem.link: 'https://johnnyreilly.com/2023/01/22/image-optimisation-tinypng-api',\n    const relatedBlogEntry = blogPosts.find((blogPost) =>\n      feedItem.link.endsWith(blogPost.metadata.permalink)\n    );\n    if (!relatedBlogEntry) {\n      console.log('blogFilePath not found', feedItem.link);\n      throw new Error(`blogFilePath not found ${feedItem.link}`);\n    }\n\n    // source: '@site/blog/2023-01-22-image-optimisation-tinypng-api/index.md',\n    const gitLatestCommitString = await getGitLatestCommitDateFromFilePath(\n      relatedBlogEntry.metadata.source.replace('@site/', 'blog-website/')\n    );\n    const gitLatestCommitDate = gitLatestCommitString\n      ? new Date(gitLatestCommitString)\n      : undefined;\n    if (gitLatestCommitDate) {\n      feedItem.date = gitLatestCommitDate;\n    }\n  }\n\n  // keep only the 20 most recently updated blog posts in the feed\n  const latest20FeedItems = Array.from(feedItems)\n    .sort((a, b) => b.date - a.date)\n    .slice(0, 20);\n\n  return latest20FeedItems;\n}\n\n/**\n * Given a file path, return the last commit date\n * @param {string} filePath\n * @returns\n */\nasync function getGitLatestCommitDateFromFilePath(filePath) {\n  const git = getSimpleGit();\n\n  const log = await git.log({\n    file: filePath,\n  });\n\n  const latestCommitDate = log.latest?.date;\n\n  return latestCommitDate;\n}\n\n/** @type {SimpleGit | undefined} */\nlet git;\n\n/**\n * get a simple git instance\n * @returns SimpleGit\n */\nfunction getSimpleGit() {\n  if (!git) {\n    const baseDir = path.resolve(process.cwd(), '..');\n\n    /** @type {Partial<SimpleGitOptions>} */\n    const options = {\n      baseDir,\n      binary: 'git',\n      maxConcurrentProcesses: 6,\n      trimmed: false,\n    };\n\n    git = simpleGit(options);\n  }\n\n  return git;\n}\n\nmodule.exports = createFeedItems;\n")),(0,a.kt)("p",null,"What's happening here? Well, the ",(0,a.kt)("inlineCode",{parentName:"p"},"createFeedItems")," function is taking the blog posts that come in and then calling ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultCreateFeedItems")," to get the default behaviour. We then iterate over the feed items and for each one we find the related blog post. We then use ",(0,a.kt)("inlineCode",{parentName:"p"},"simple-git")," to get the last commit date for the blog post. We then set the feed item's date to the last commit date. We then sort the feed items by date and take the first 20. We then return those 20 feed items."),(0,a.kt)("p",null,"It's as simple as that. There's a few bits in there which are specific to my blog (like the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog-website")," directory) but you can see how you can tweak this to suit your needs."),(0,a.kt)("p",null,"With this implemented, we'll reference this in our ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"//@ts-check\nconst createFeedItems = require('./createFeedItems');\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        // ...\n        feedOptions: {\n          // ...\n          createFeedItems,\n          // ...\n        },\n        // ...\n      }),\n    ],\n  ],\n  // ...\n};\n\nmodule.exports = config;\n")),(0,a.kt)("p",null,"And we're done! We can now run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," and see the results:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of Docusaurus atom feed for johnnyreilly",src:n(27122).Z,width:"883",height:"350"})),(0,a.kt)("p",null,"Look for yourself at ",(0,a.kt)("a",o({parentName:"p"},{href:"https://johnnyreilly.com/atom.xml"}),"johnnyreilly.com/atom.xml")," or ",(0,a.kt)("a",o({parentName:"p"},{href:"https://johnnyreilly.com/rss.xml"}),"johnnyreilly.com/rss.xml"),"."),(0,a.kt)("h2",o({},{id:"conclusion"}),"Conclusion"),(0,a.kt)("p",null,"Here we've learned how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"createFeedItems")," API to customise the feed items that are generated. We've also seen how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"simple-git")," to get the last commit date for a file. We've then used that to set the date of the feed item to the last commit date."))}d.isMDXComponent=!0},27352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-docusaurus-atom-feed-8d96893a0377d25aee230d6a0c32cc2a.webp"},27122:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-johnnyreilly-atom-feed-e1f421f90437f743937c3ce15e88b718.webp"},41283:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-tweet-createfeeditems-b20141fe97f47937eb9f59c63c8402f9.webp"},15978:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/title-image-e36109db4972b5cefaee9b5c417a3c39.png"}}]);