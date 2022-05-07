"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[2368],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(n),h=r,d=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44457:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"Back to the Future with Code First Migrations",authors:"johnnyreilly",tags:["Emmett Brown","Entity Framework","Code First Migrations"],hide_table_of_contents:!1},l=void 0,m={permalink:"/2015/06/19/Back-to-the-Future-with-Code-First-Migrations",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations/index.md",source:"@site/blog/2015-06-19-Back-to-the-Future-with-Code-First-Migrations/index.md",title:"Back to the Future with Code First Migrations",description:"Code First Migrations. They look a little like this in Visual Studio:",date:"2015-06-19T00:00:00.000Z",formattedDate:"June 19, 2015",tags:[{label:"Emmett Brown",permalink:"/tags/emmett-brown"},{label:"Entity Framework",permalink:"/tags/entity-framework"},{label:"Code First Migrations",permalink:"/tags/code-first-migrations"}],readingTime:2.26,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Back to the Future with Code First Migrations",authors:"johnnyreilly",tags:["Emmett Brown","Entity Framework","Code First Migrations"],hide_table_of_contents:!1},prevItem:{title:"npm please stop hurting Visual Studio",permalink:"/2015/06/29/npm-please-stop-hurting-visual-studio"},nextItem:{title:"Angular UI Bootstrap Datepicker Weirdness",permalink:"/2015/05/23/angular-ui-bootstrap-datepicker-weirdness"}},u={authorsImageUrls:[void 0]},c=[{value:"Great Scott! It&#39;s clearly filename driven",id:"great-scott-its-clearly-filename-driven",level:2},{value:"Whoa, this is heavy! Gimme the project file",id:"whoa-this-is-heavy-gimme-the-project-file",level:2},{value:"Designer.cs... Your kids are gonna love it",id:"designercs-your-kids-are-gonna-love-it",level:2}],p={toc:c};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Code First Migrations. They look a little like this in Visual Studio:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(73254).Z,width:"333",height:"221"})),(0,a.kt)("p",null,"The thing I want you to notice about the image above is not the pithily named migrations. It isn't the natty opacity on everything but the migration files (which I can assure you took me to the very limits of my ",(0,a.kt)("a",{parentName:"p",href:"http://www.gimp.org/"},"GIMP")," expertise). No, whilst exciting in themselves what I want you to think about is ",(0,a.kt)("em",{parentName:"p"},"the order in which migrations are applied"),". Essentially how the ",(0,a.kt)("inlineCode",{parentName:"p"},"__MigrationHistory")," table in SQL Server ends up being populated in this manner:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(63360).Z,width:"640",height:"207"})),(0,a.kt)("p",null,"Because, myself, I didn't really think about this until it came time for me to try and change the ordering of some migrations manually. Do you know how migrations end up the order they do? I bet you don't. But either way, let's watch and see what happens to the pre-enlightenment me as I attempt to take a migration which appears ",(0,a.kt)("em",{parentName:"p"},"before")," a migration I have created locally and move it to ",(0,a.kt)("em",{parentName:"p"},"after")," that same migration."),(0,a.kt)("h2",{id:"great-scott-its-clearly-filename-driven"},"Great Scott! It's clearly filename driven"),(0,a.kt)("p",null,"That's right - it's blindingly obvious to me. All I need do is take the migration I want to move forwards in time and rename it in Visual Studio. So take our old migration (\"2014 is so pass\xe9 darling\"):"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(99846).Z,width:"302",height:"115"})),(0,a.kt)("p",null,'And rename it to make it new and shiny ("2015! Gorgeous - I love it sweetie!"):'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32210).Z,width:"359",height:"170"})),(0,a.kt)("p",null,"Perfection right? Wrong! What you've done makes not the slightest jot of difference."),(0,a.kt)("h2",{id:"whoa-this-is-heavy-gimme-the-project-file"},"Whoa, this is heavy! Gimme the project file"),(0,a.kt)("p",null,"How could I be so dim? I mean it makes perfect sense - before the days of ",(0,a.kt)("a",{parentName:"p",href:"http://blog.icanmakethiswork.io/2015/02/hey-tsconfigjson-where-have-you-been.html"},"TypeScript's tsconfig.json ")," the default ordering of ",(0,a.kt)("inlineCode",{parentName:"p"},"*.ts")," files being passed to the TypeScript compiler was determined by the ordering of the ",(0,a.kt)("inlineCode",{parentName:"p"},"*.ts")," files in the ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," file. It must be the same for Code First Migrations."),(0,a.kt)("p",null,"So, simply spin up ",(0,a.kt)("a",{parentName:"p",href:"https://notepad-plus-plus.org/"},"Notepad++")," and let's play hack the XML until each file is referenced in the required order."),(0,a.kt)("p",null,"Well, I'm glad we sorted that out. A quick test to reassure myself of my astuteness. Drum roll.... Fail!! Things are just as they were. Shame on you John Reilly, shame on you."),(0,a.kt)("h2",{id:"designercs-your-kids-are-gonna-love-it"},"Designer.cs... Your kids are gonna love it"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(607).Z,width:"640",height:"398"})),(0,a.kt)("p",null,"I want you to look very carefully at this and tell me what you see. We're looking at the mysterious ",(0,a.kt)("inlineCode",{parentName:"p"},"201508121401253_AddSagacityToSage.Designer.cs")," file that sits underneath the main ",(0,a.kt)("inlineCode",{parentName:"p"},"201508121401253_AddSagacityToSage.cs")," file. What could it be.... Give in?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IMigrationMetadata.Id")," property is returning ",(0,a.kt)("inlineCode",{parentName:"p"},"<u>201408121401253</u>_AddSagacityToSage"),". That is the ",(0,a.kt)("em",{parentName:"p"},"old")," date! Remember? The pass\xe9 one. If you change that property to line up with the file name change you're done. It works."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(86813).Z,width:"1368",height:"764"})),(0,a.kt)("p",null,"Let's say it together: \"Automatic Migrations? Where we're going, we don't need Automatic Migrations.\""))}h.isMDXComponent=!0},63360:function(e,t,n){t.Z=n.p+"assets/images/MigrationHistory-4f2b0f63416be1b3f0284b8387c0ea51.png"},73254:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU0AAADdCAMAAAAIP9ABAAABmFBMVEX////+/rX+/uwAAACN2v7i9f7Yv8xkADS/v7+1/v7Q0ND+2o39/f00jdr+tWRkAGT+9eLajTQAZLXI6Pja/v7+/tpktf7Y7P7s/v7Yv786jzXN4szM4vU0NI1kAACNNAAhpOS1ZADMv9jeuoPMv7/Kysr5+fm/2Oz+7Nj+/vU0AGTizL8ANI31/v7s2MAAAGTGxsaNNDQeHh7y8fE0AAC/v9j14sy/zOIAADTs7OwsLCzMv8y/v8y1tbXi4uI0ADT29vUAZGQ0jY3j7ePMzOLY2NjY2MySvZDi8vjr9Pjn8uiexJxuqGtkNDTizMw0ZLWNtf7f39pkjY3u/u6KyOaw1OUvqOPM4uLYzMyry6kANGRSnU5GlkInJyfYv9jv9fjm5uba6dm/zNiN2rXatWTF2ufi7P61tf7z9eLYzOLMzNjT5tLa/rW307X+tbXiwpSOjo40NGS1ZDRkZDQ0NDT1/vW/2N/czNjw5tf+tY2NtY1kNI2NjWTt8u3a/trMzL/o07ONNGSN2trlzam12o0AZI1kZGQ0NAAmiSvPAAAP8UlEQVR42uych2MbNRTGVTsJjjPItDOcQqCOHZq4bkwzSgmBNqUtUCh7U/Yqe5Wy97/NW5ZOlkcCbnv2va/xSSc9neMPPZ39i7BRqVQqlUqVDC16Mqr/5+ZoROJmaj6TOTNo2ig1RN0SmymYUNKVN04TD+CoTgM7PW+stNfBTfmdN7fWO74qqYExJa+99YkUrtbjbtaKUrk4PT19kdzcyWZ3RrPwL+ImPg7sppm4Zy6RbtaqValNX3jjwjS4CWaujO5lUQ1upobOn5qbOAbZunocEra8tQ4np+aw+Zmhs8cyBfv6sL+SyZQwe0tUky46XoGMpp7U0CUovuWLPUO99Bw0IIWXzG9S9tPzVPJ0hYl3Df0OFAqDMBFiIjCz2pjp2dooiOamn+mp+QIkcR6XuzK8gkoe28sFbt5ah+aIm1z1ZiA4CKbgqy9DAU0SwBfjVRUuJgPwkmWwUmLLBQgrFwtmsyC/A4RC3AV4qpgIzHRzE2XddHPT2kCeQA7TS399LvUhTk2YReILNls3L8PLxzsXnnHNeirhkYIv5nrdUHnw80ycW6+cPffN5UH5Hbjzl4KJichM5+You3kVMz2Ym6CImzBDNgt44uxxE9JgB/yAp3hGtXZu8sVcrxsqD36e1cuXPvzmuw/OrUfdnC/GJc/3ik3dBDvhLoQK3cRMJxMnPvpuDk4Ktpm8hWo9qIypj2eu1spNuNiLdCK9bqg8JP03Mc/3C/XfQTorsZmcIj/TnUI36YZwhlbGksETm+nnYdHjV56RgMxb4FElU+KadGUKHE49UsBEg4dzUwY4N/l5cK2kh/wO0rl6HN67xVWBm7dCldjcSax695PlxLn4zq5e0+rxM7F6C65SqVQqVT+o1rpnP5u9alSHUbHWykyAILtS70zjHVxP9Hufais799nMq8ZjdD0Ecm+Hqjtip6PxLJ6au1nj8WN1s72bRux0NF7cRDt3s+JmSOMJlVtMjhBE0Cc3AMjI9Otn8XZumt3iigmVZe2bVjRe6LvD8WK4cPO4UMhbqqqpFXd8RifLJqtmWtF4oe+MyUNufiyWFPImq0pm+vzYmbkPZrai8ULfBcf73By1mcRMBzNDN/e9t0fNabzQd8HxPjdnO5M3O6toZpDpgZkBjbf03eF4gevcUKaFIWlCM0OBmb22T6DHpW6qmyqVSqVS9atqRnVz2XvnLezlTIy3At02hew9hHL23SVuU61bmzygcQj2HrrYxE186Bv3zuy9k5tumyWB9Wcg6wuM2InFS+0KthqC7knl78LeQzfxh+TWzZKYWsCjZe62VjJldBA5XFL5O7P3znNTMLAl7UHNY8VJ5e+OvXfO9OjG96DmuZlU/s7sPVSLu5Aj7UGNAzjTk8rfqzsH52/4R0tH2sOaeAu3nqTy9x2jUqlUKpVKpVLdel2/ty6j+t/67NcVlrh55OgUlZPbAyMPDZhmwnaVMVeML5yStQY37/h6gEzdDizjbnVSVDzd6KY4uRd186sxKMYfvkPdbG/maxtN3dzz5+bbdw6b2ZNv3zGAzo3cn34Ea1+dGF5Op6eOHIWDtKdzEPxjOj1mZu/Ck2QJzGzqZmOmDyznzMjSNXLzyNEcrKBQjFEfO8ztuHziIjt+Ynh8yiRNYGajm5/dW1ct6ubI0sxyDkqu1j004+n0NtYo5L5hYyBIzu4fM8kSmBm4+at184+om7MnbyzNBG6CgbMnm7tpzGSyMv3K6Y3Qzdq9VtcjbsIsHMPSZTo1rs1AbrtMR3utm2YyabOT1CrVP4u6OfvbsLiJ6f0I1fBW8/ITA2bZ3oW20Ul6QNCJYZN4XXeTs8JuhoI5qE4dSCsHCVpemzGqLgjSW5NYpVKpVKq4q2hU3dNrB7VzGambGacjIiNC82sz0uLa/WMYP4nvtrhdWlBHAABapi9FD7LUjdNN7Xx0YWHhMbMA/0QjT+HrgheNQOSuh+HFI5pfm+EW+pH26DGMN0D6jLRzi++mGNijZHrjwYidzz1/9/PPsZmvPPboJwsoFwrwaHyK0Ia8+Mmnl2a4ZWSJbJJ2dwzjzZdgjrRTS3+5aSJ23v3su8/ejZWFV/ewcHNTXjE4AE7Iix95EkzkFjAamkI3w3j8XDUm7dji3GSEj9i/jvaR84ubTPZjj/cBz31+utbYuvA4Hf25uTzmuQMOWjeRJuVM6GYYz7ON220LBQjCd2jfcn4yE5fZ2OP9DVM8/aCdm6Cmc1Nej+cO1K2brTI9jOf/LNxuWyhAPHRuWs5vEVbs8f6GmClurrCbj+O6+ZJHPk669U6mUhq09g62iDuhm2E8mAe+U/sj0tLKTeL8npuxx/sbYGbo5t7jkOPOTZtkQtrFL5xZ3AJIHmZc6GYYz29+6u1t5yZxfjnnTI893t9AM4NMDzWZBo1h8uWM5w62UPeUCd0M43GK5qS9lZuC9pnzSxONiz3ef9Co+kgw6eI+41QqlUqlUiVNyt5N77B3FyN1hmoegRctT3lEk7eNpSki1Dh2ULl2DYNyFtbzSPmNJUoa5RCqR9h7NEbq7xPB8Ag8aeSLJ6QqbfYjpeeymLk9QFALd+nJRkgXZAO50snN3mHv0Riuc4dH4EkCokI32SlpsHQw5xCMPOLh5k1i72EM19lEj8CThBzLFnsqyE22zu62x44Tw+AjDUFKP0YkdIrN/yoNAmJy4364vJjHu/Otm7TU8GVoI7/H9ePN3qMx4tckWCJzJeomdCFClY23XDg3jYlCZEoF6hC6BM7wMjuGBa0otGrTeNmdL25SesllMD7C9XuBvdsYrvOiFyXwjltOTlFEw057MFkoPM1ZnHz1uWkNthzURB98iOwnt9vz+TLYFOX6MWfvNsYj7eg7HflqjiRhDvtuihuOwkOtybqJDZ3chAtQnfg9ltztc/14s/doDNc/pZz0CDwKLkAmhZmOVbfbXpIT8piqB5mbsjsf9/PKu7BJynHu9rl+zNm7i5G63BIcgbdrssFUly32UmAYLgtutz3l6BSOhKHshwSJmxjkuwlD5CKUGsTvsY3jfK6v7F2l7F2lUqlUKlWcpezdxJu9LwcxQS+zd4Jg7di7afsBxeH2kLS7kZ0Va/aOkWGM38vggzl8G/YOvTigtSQ2rNuRnRV39o6RYYzXi+xdCHQb9k4sxPwXN3HkgRVv9o5FGBPtJfYuaKoNe2fUQ+Td9uCJ4HLeIv/XXTlyzyft4Ujm7U330Md63ztGhjFeL80k5vBt2Du+7hwH2yYjEM3yeLr0cs4j7c1GMm9vytrjvO+dIsMYv1dMFQ4fsnc31XJM3qWJTyzthR/C0j/M+Gy4yUjm7c1Ye5z3vXNkGOP3OgLfhr0z82TyLk104rspz++7GY6knuasPcb73jkyjPF7MR2Bw7dn79/TX82ZvEsTnXiZLm8HfNIejuRFuClrj/O+d44MYrxeZu+Qe53Z+5SQd2mSE7qAbJHnt6o+aW8y0vH2kLUnct875mgoymxR0r8yx7L3//bFNzL99StzuvDFN9yxPaBfmaNSqVQqlbJ3UDzZu6PufGT2xUdv7CR/Kqd6SM5Dhmlpesy/cb6b7D1K3ekodF2Obqx8Sqa651kbN4Wmx1vdZO8edZejO+HIgCgf1M3xXvg001X2Lh2RKnbK0WfGCG5DN5dzWMKVGZQTO2fgOxWh6bNM269BO31PDdP1OHw3TRfZu8R4biJd56PvJo4O3KT+8a/xaQSUC3X7HeyL0nSm7ewyrr3M3GLw3TTdZO8U47nJdJ2Pnps4/UI38YJf3lj6+aSA8vp+939gaJSmM20XvClwORbfTdNN9s4xvpuOsTesubnQTfqfVn74+bc/CTCzN7iGHP0ahkZpOj+j72Ysvpumm+wdY3w3ma7z0RvLxod3oUnM87/H+G+Obr87LCBRms603bnJmR6D76bpJnuXGOcm03U5emM5JHQTrKIHg3Ji52zS2rUITSfabt0UVB+H76bpKfYepe1JpevdYO8hbVe63g0JbVe6rlKpVCqVr5pRdU/FA9u5ejyT2Vo3vsqZrQ8eGDRtNAHdiVG1uZ1nFxcXL5lFs+hcOZaHw3t+WGo+b9ooNZQgJ8nNnYidF6enpy+ymR9fOvvTIsrOzHxzu9TNqJsmYuf0hTcuTGNlcXGUCjc3J+6Zq8/RTCYPPl3JZAqpeTiAZdj4wtAg1lJYnD81V8lkSthd4m43xq4aeTqYvlLVmN3iSmPr4pt0RNXdPLducxuWwtR8yZRPzYl/2Lh5ZtCeFSjS2uuPITMxolwy/aaqqRV37NwEtZ2bUlby4pMUYLWcSYG3p4y11x/DF6FZXjB9pqqYKW6Osptv4rp5yb+j5w/hJoatXm7rJmqz7zIdzAzdHH2T7un+eyG6p1PW3mNT3Mt0dLzMM7K8tQ65Ld3BGMx0trPPZmeVzfQzPZTcfrbWoYAUNr6bmNcvcPEtNeJt5q0XB02F7kLhGLw/5SEaVtG+0o7phih7+8yZ26oKzFtVFwR53X9Jq1KpVKpbpizrqlF1w81RVDa7a1RdczNqZ6Ud4QkBfJIIe0exmyAjmvjoxYP6k5rvM3ZxeDnSvrdvzP7KKMu6uVnwiIQS9k4S0r4PDmb3G9xcvSyY7eyxTEEKR81bA/jEG5vN4qPBTbASDIUkJrImBVPz9gA+sW4Kf8uCAjcxzTdLnMSVvBRMitog4yQnvbDhXTRz13cTshdE0w6pOxfqZmc3wU4x07mJ6NyQjfMFtE4KS819mK6ZbjNdVs4GNysFSncA5+f5diOFUPNWAF7vQvY+xAre/EihAP4wbvoK3VQA3003FcCrVP+2c8a8CcNQEGZp1bFjkLoiZ6lUqaJV/0H37OztDoz8dfyOk4MItp8QA3LuFpQXL5xiEj5dTpKkC4m9P6TE3qG7s3cfxRSW97F3p5vC8n72XndTWN7P3hNst/Q6eTsoUeCEmD1+rDucFZYvsPcRto8U7vkXhPMi596/Ib4uLF9g74TtSK9b0Bqjg7mFCcGwXYYvAfF1geQCeydsP6XX6eZyZVscE7ozxteF5UvsnbAd6fW0058iQ8Yk7fRliq8LyxfYO2E70uvk7fDre4sJMTvuOAHxdWH5PHuHA3XMrlx8nRbTTQdmVy7e7WYdsysXL0mSJEk3SQ0zj6bVp5fyGtyok0s+/czlUfKWhhl69QWPam6yimZycg7M2Nsww//XVTdTpcI83XQ2zJy3xwCmm2sGkEDbbTyAzueraALA/BC5Uv9hbKTFphlvwwx3uiE3wvQ+AFuCttuYdD5fRcOlm2GDwxabZlwNM7wLrTtzJOHfaMrf+4m20ywb56tosDR6yxRti00zzoYZfv9zN/ECkR1wTDqfraLh0uRmi00z1YaZqZuE6YvX/31nTD6N4W22ioZL005vsWmm2jAzdZMwPV6IAfuUO510/moVDbpmcGIXDYy/v/GwxaaZn4UkSZIkSdLsdAR6rfcNmRQV+wAAAABJRU5ErkJggg=="},99846:function(e,t){t.Z="data:image/png;base64,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"},32210:function(e,t){t.Z="data:image/png;base64,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"},607:function(e,t,n){t.Z=n.p+"assets/images/Screenshot-2015-06-19-13.35.40-5cbe8ef3f28ec8727b516fcea753133d.png"},86813:function(e,t,n){t.Z=n.p+"assets/images/where-were-going-4912e0319dd6de9c3f33d13c810fc7d1.jpg"}}]);