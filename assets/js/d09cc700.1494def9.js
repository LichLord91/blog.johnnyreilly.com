"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[86990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||a;return n?i.createElement(d,r(r({ref:t},g),{},{components:n})):i.createElement(d,r({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>g});n(67294);var i=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"Image Optimisation with the TinyPNG API",authors:"johnnyreilly",tags:["image optimisation","TinyPNG"],image:"./title-image.webp",description:"Image optimisation can be automated with the TinyPNG API. This post demonstrates how to do that.",hide_table_of_contents:!1},s=void 0,l={permalink:"/2023/01/22/image-optimisation-tinypng-api",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2023-01-22-image-optimisation-tinypng-api/index.md",source:"@site/blog/2023-01-22-image-optimisation-tinypng-api/index.md",title:"Image Optimisation with the TinyPNG API",description:"Image optimisation can be automated with the TinyPNG API. This post demonstrates how to do that.",date:"2023-01-22T00:00:00.000Z",formattedDate:"January 22, 2023",tags:[{label:"image optimisation",permalink:"/tags/image-optimisation"},{label:"TinyPNG",permalink:"/tags/tiny-png"}],readingTime:6.39,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Image Optimisation with the TinyPNG API",authors:"johnnyreilly",tags:["image optimisation","TinyPNG"],image:"./title-image.webp",description:"Image optimisation can be automated with the TinyPNG API. This post demonstrates how to do that.",hide_table_of_contents:!1},prevItem:{title:"Docusaurus blogs: using the createFeedItems API with git commit date",permalink:"/2023/01/28/docusaurus-createfeeditems-api-git-commit-date"},nextItem:{title:"Docusaurus: improving Core Web Vitals with fetchpriority",permalink:"/2023/01/18/docusaurus-improve-core-web-vitals-fetchpriority"}},p={image:n(96315).Z,authorsImageUrls:[void 0]},g=[{value:"Images and optimisation",id:"images-and-optimisation",level:2},{value:"The TinyPNG API",id:"the-tinypng-api",level:2},{value:"Making a command line tool",id:"making-a-command-line-tool",level:2},{value:"Using the tool",id:"using-the-tool",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:g};function h(e){var{components:t}=e,r=a(e,["components"]);return(0,i.kt)("wrapper",o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Image optimisation can be automated with the TinyPNG API. This post demonstrates how to do that."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Image Optimisation with the TinyPNG API&quot; with TinyPNG and Lighthouse logos",src:n(96315).Z,width:"800",height:"450"})),(0,i.kt)("h2",o({},{id:"images-and-optimisation"}),"Images and optimisation"),(0,i.kt)("p",null,"Images are a big part of the web. They're also a big part of the web's payload. If we're not careful, we can end up with a site that's slow to load and expensive to host. I run ",(0,i.kt)("a",o({parentName:"p"},{href:"https://developer.chrome.com/docs/lighthouse/overview/"}),"Lighthouse")," on my blog and I'm always looking for ways to improve the performance of the site. One of the things that Lighthouse flags is image optimisation."),(0,i.kt)("p",null,"It's a good idea to optimise our images; to make sure they're not unhelpfully large. We can do this manually using tools like ",(0,i.kt)("a",o({parentName:"p"},{href:"https://tinypng.com/"}),"TinyPNG")," or ",(0,i.kt)("a",o({parentName:"p"},{href:"https://squoosh.app/"}),"Squoosh"),". However, it's also possible to automate this process. In this post, I'll show you how to do that using the TinyPNG API."),(0,i.kt)("h2",o({},{id:"the-tinypng-api"}),"The TinyPNG API"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",o({parentName:"p"},{href:"https://tinypng.com/developers"}),"TinyPNG API")," is a paid service. We can get a free API key which allows us to optimise 500 images per month. If we need to optimise more than that, we'll need to pay for a subscription. I rarely find I optimise more than 500 images per month so I'm happy with the free plan."),(0,i.kt)("p",null,"It's worth noting that the name \"TinyPNG\" is a bit of a misnomer. The API supports a number of image formats including PNG, JPEG and WebP. It's not just for PNGs. In fact we'll be using the WebP format in this post."),(0,i.kt)("p",null,"You can just use the API directly. However, I prefer to use a client library. We'll be using ",(0,i.kt)("a",o({parentName:"p"},{href:"https://tinypng.com/developers/reference/nodejs"}),"the Node.js")," library."),(0,i.kt)("h2",o({},{id:"making-a-command-line-tool"}),"Making a command line tool"),(0,i.kt)("p",null,'We\'re going to initialise a simple Node.js console application called "tinify" using ',(0,i.kt)("a",o({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," and ",(0,i.kt)("a",o({parentName:"p"},{href:"https://typestrong.org/ts-node/"}),(0,i.kt)("inlineCode",{parentName:"a"},"ts-node")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"mkdir tinify\ncd tinify\nnpm init -y\nnpm install @types/node tinify ts-node typescript\nnpx tsc --init\n")),(0,i.kt)("p",null,"You'll note that we're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"tinify")," npm package ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/tinify/tinify-nodejs"}),"which is developed here"),". Handily this package ships with TypeScript definitions, so we don't need to install a separate types package."),(0,i.kt)("p",null,"In our ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file we'll add a ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," script to run our application:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-json"}),'  "scripts": {\n    "start": "ts-node index.ts"\n  },\n')),(0,i.kt)("p",null,"In our ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file we'll also up the ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," to a new ECMAScript emit version to allow us to use some newer language features. We don't need this for TinyPNG, but it's nice to use the newer features:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "target": "es2021"\n  }\n}\n')),(0,i.kt)("p",null,"Now we can create our ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"import fs from 'fs';\nimport path from 'path';\nimport tinify from 'tinify';\n\nfunction setUpTinify() {\n  if (!process.env.TINIFY_KEY) {\n    console.log(\n      'Run with: TINIFY_KEY=$YOUR_API_KEY IMAGE_DIR=$YOUR_IMAGE_DIRECTORY yarn start'\n    );\n    process.exit(1);\n  }\n\n  tinify.key = process.env.TINIFY_KEY;\n}\n\nfunction getImageFilesFromDirectory(dir: string) {\n  return fs\n    .readdirSync(dir)\n    .filter(\n      (file) =>\n        file.endsWith('.jpg') ||\n        file.endsWith('.jpeg') ||\n        file.endsWith('.webp') ||\n        file.endsWith('.png')\n    )\n    .map((file) => path.resolve(dir, file))\n    .filter((file) => fs.statSync(file).size > 0);\n}\n\nasync function processImageFiles(imageFiles: string[]) {\n  let processed = 0;\n  let totalOriginalSizeKb = 0n;\n  let totalNewSizeKb = 0n;\n  let failed: string[] = [];\n\n  for (const imageFilePath of imageFiles) {\n    try {\n      console.log(`\n\ud83d\uddbc\ufe0f  Processing ${imageFilePath}\n`);\n      const originalImageFilePrefix = imageFilePath.substring(\n        0,\n        imageFilePath.lastIndexOf('.')\n      );\n\n      const originalStats = await fs.promises.stat(imageFilePath, {\n        bigint: true,\n      });\n      const originalSizeKb = originalStats.size / 1024n;\n\n      const source = tinify.fromFile(imageFilePath);\n      const converted = source.convert({ type: ['image/webp', 'image/png'] });\n      const convertedExtension = await converted.result().extension();\n      const newImageFilePath = `${originalImageFilePrefix}.${convertedExtension}`;\n      await converted.toFile(newImageFilePath);\n\n      const newStats = await fs.promises.stat(newImageFilePath, {\n        bigint: true,\n      });\n      const newSizeKb = newStats.size / 1024n;\n\n      const imageFileName = path.basename(imageFilePath);\n      const newImageFileName = path.basename(newImageFilePath);\n\n      totalOriginalSizeKb += originalSizeKb;\n      totalNewSizeKb += newSizeKb;\n\n      console.log(`- \ud83d\udd34 ${originalSizeKb}kb - ${imageFileName}\n- \ud83d\udfe2 ${newSizeKb}kb - ${newImageFileName}\n- \ud83d\udd3d ${calculatePercentageReduction({ originalSizeKb, newSizeKb }).toFixed(\n        2\n      )}% reduction\n\n\u2705 Processed! (${++processed} of ${imageFiles.length})\n\n----------------------`);\n    } catch (e) {\n      console.log(`\\n\u274c Failed to process ${imageFilePath}`);\n      failed.push(imageFilePath);\n    }\n  }\n\n  console.log(`\n************************************************\n* Total savings for ${imageFiles.length} images \n- \ud83d\udd34 ${totalOriginalSizeKb}kb\n- \ud83d\udfe2 ${totalNewSizeKb}kb\n- \ud83d\udd3d ${calculatePercentageReduction({\n    originalSizeKb: totalOriginalSizeKb,\n    newSizeKb: totalNewSizeKb,\n  }).toFixed(2)}% reduction\n************************************************\n`);\n\n  if (failed.length > 0) console.log('Failed to process', failed);\n}\n\nfunction calculatePercentageReduction({\n  originalSizeKb,\n  newSizeKb,\n}: {\n  originalSizeKb: bigint;\n  newSizeKb: bigint;\n}) {\n  return (\n    ((Number(originalSizeKb) - Number(newSizeKb)) / Number(originalSizeKb)) *\n    100\n  );\n}\n\nasync function run() {\n  setUpTinify();\n\n  let directory = process.env.IMAGE_DIR;\n\n  if (!directory) {\n    console.log('No directory specified!');\n    process.exit(1);\n  }\n\n  const imageFiles = getImageFilesFromDirectory(directory);\n  console.log(`Found ${imageFiles.length} image files in ${directory}`);\n  await processImageFiles(imageFiles);\n}\n\n// do it!\nrun();\n")),(0,i.kt)("p",null,"There's a number of things happening here. Let me walk it through; each time we run:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We're checking that we have a TinyPNG API key and an image directory specified. If not, we'll exit with an error message."),(0,i.kt)("li",{parentName:"ol"},"We're getting a list of image files from the specified directory. We look for files with the extensions ",(0,i.kt)("inlineCode",{parentName:"li"},".jpg"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".jpeg"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".webp")," and ",(0,i.kt)("inlineCode",{parentName:"li"},".png")," (those formats supported by TinyPNG). We also filter out any files that are empty."),(0,i.kt)("li",{parentName:"ol"},"We're looping through the image files and processing them one by one. We're using the ",(0,i.kt)("inlineCode",{parentName:"li"},"tinify")," package to shrink the image; and we say we'll accept either ",(0,i.kt)("inlineCode",{parentName:"li"},"webp")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"png")," as our target format. Tinify will decide which is the most optimal format upon each request and render accordingly. Finally we're saving the new files to the same directory as the original file. We're also calculating the percentage reduction in file size.")),(0,i.kt)("p",null,"If we wanted to look just at the code that does the actual conversion, it's this:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"const source = tinify.fromFile(imageFilePath);\nconst converted = source.convert({ type: ['image/webp', 'image/png'] });\nconst convertedExtension = await converted.result().extension();\nconst newImageFilePath = `${originalImageFilePrefix}.${convertedExtension}`;\nawait converted.toFile(newImageFilePath);\n")),(0,i.kt)("h2",o({},{id:"using-the-tool"}),"Using the tool"),(0,i.kt)("p",null,"With our tool written, we now need to test it out. I've a directory of images that I want to compress: ",(0,i.kt)("inlineCode",{parentName:"p"},"~/code/github/open-graph-sharing-previews/images-to-shrink")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of image files before optimisation",src:n(5881).Z,width:"1391",height:"610"})),(0,i.kt)("p",null,"Now let's run our tool against that directory and see what happens:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"TINIFY_KEY=YOUR_API_KEY_GOES_HERE IMAGE_DIR=~/code/github/open-graph-sharing-previews/images-to-shrink yarn start\n\nyarn run v1.22.18\n$ ts-node index.ts\nFound 6 image files in /home/john/code/github/open-graph-sharing-previews/images-to-shrink\n\n\ud83d\uddbc\ufe0f  Processing /home/john/code/github/open-graph-sharing-previews/images-to-shrink/screenshot-of-demo-with-devtools-open.png\n\n- \ud83d\udd34 253kb - screenshot-of-demo-with-devtools-open.png\n- \ud83d\udfe2 83kb - screenshot-of-demo-with-devtools-open.png\n- \ud83d\udd3d 67.19% reduction\n\n\u2705 Processed! (1 of 6)\n\n----------------------\n\n\ud83d\uddbc\ufe0f  Processing /home/john/code/github/open-graph-sharing-previews/images-to-shrink/screenshot-of-email-demonstrating-sharing-with-a-non-cropped-image.png\n\n- \ud83d\udd34 158kb - screenshot-of-email-demonstrating-sharing-with-a-non-cropped-image.png\n- \ud83d\udfe2 50kb - screenshot-of-email-demonstrating-sharing-with-a-non-cropped-image.png\n- \ud83d\udd3d 68.35% reduction\n\n\u2705 Processed! (2 of 6)\n\n----------------------\n\n\ud83d\uddbc\ufe0f  Processing /home/john/code/github/open-graph-sharing-previews/images-to-shrink/screenshot-of-tweet-demonstrating-sharing-with-a-cropped-image.png\n\n- \ud83d\udd34 391kb - screenshot-of-tweet-demonstrating-sharing-with-a-cropped-image.png\n- \ud83d\udfe2 64kb - screenshot-of-tweet-demonstrating-sharing-with-a-cropped-image.webp\n- \ud83d\udd3d 83.63% reduction\n\n\u2705 Processed! (3 of 6)\n\n----------------------\n\n\ud83d\uddbc\ufe0f  Processing /home/john/code/github/open-graph-sharing-previews/images-to-shrink/screenshot-of-tweet-demonstrating-sharing.png\n\n- \ud83d\udd34 407kb - screenshot-of-tweet-demonstrating-sharing.png\n- \ud83d\udfe2 78kb - screenshot-of-tweet-demonstrating-sharing.webp\n- \ud83d\udd3d 80.84% reduction\n\n\u2705 Processed! (4 of 6)\n\n----------------------\n\n\ud83d\uddbc\ufe0f  Processing /home/john/code/github/open-graph-sharing-previews/images-to-shrink/screenshot-of-twitter-validator.png\n\n- \ud83d\udd34 162kb - screenshot-of-twitter-validator.png\n- \ud83d\udfe2 49kb - screenshot-of-twitter-validator.webp\n- \ud83d\udd3d 69.75% reduction\n\n\u2705 Processed! (5 of 6)\n\n----------------------\n\n\ud83d\uddbc\ufe0f  Processing /home/john/code/github/open-graph-sharing-previews/images-to-shrink/title-image.png\n\n- \ud83d\udd34 308kb - title-image.png\n- \ud83d\udfe2 49kb - title-image.webp\n- \ud83d\udd3d 84.09% reduction\n\n\u2705 Processed! (6 of 6)\n\n----------------------\n\n************************************************\n* Total savings for 6 images\n- \ud83d\udd34 1679kb\n- \ud83d\udfe2 373kb\n- \ud83d\udd3d 77.78% reduction\n************************************************\n\nDone in 25.23s.\n")),(0,i.kt)("p",null,"Isn't that impressive? We've reduced the file size of all of these images by an average amount of 77.78%! That's a huge saving."),(0,i.kt)("p",null,"If we look a little closer, we'll see that on two occasions the format has remained as a PNG file and the size has shrunk. In four cases, the format has changed to a WebP file. When we look at our directory again, we'll see that the files have been updated, and some new WebP files have been created:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of image files after optimisation",src:n(16631).Z,width:"1391",height:"971"})),(0,i.kt)("h2",o({},{id:"conclusion"}),"Conclusion"),(0,i.kt)("p",null,"We've seen how we can use the TinyPNG API to optimise our images. We've also built a tool that uses the TinyPNG API to optimise the images in a given directory."),(0,i.kt)("p",null,"It's all automated. We can now run this script whenever we want to optimise the images in any directory!"),(0,i.kt)("p",null,(0,i.kt)("a",o({parentName:"p"},{href:"https://blog.logrocket.com/automate-image-optimization-tinypng-api/"}),"This post was originally published on LogRocket.")),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://blog.logrocket.com/automate-image-optimization-tinypng-api/"})))}h.isMDXComponent=!0},16631:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-files-after-optimisation-6f7e4394defa4ef63878ac29cb9638c2.png"},5881:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/screenshot-files-before-optimisation-49a7947a0a404b61bce1b97d582dc75d.png"},96315:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/title-image-84b1568885dbbcdc1a7c97d1336b8558.webp"}}]);