"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[15642],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22372:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"How I'm Using Cassette part 2:Get Cassette to Serve Scripts in Dependency Order",authors:"johnnyreilly",tags:["script references","RequireJS","cassette"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2013/06/06/how-im-using-cassette-part-2",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-06-06-how-im-using-cassette-part-2/index.md",source:"@site/blog/2013-06-06-how-im-using-cassette-part-2/index.md",title:"How I'm Using Cassette part 2:Get Cassette to Serve Scripts in Dependency Order",description:"Last time I wrote about Cassette I was talking about how to generally get up and running. How to use Cassette within an ASP.Net MVC project. What I want to write about now is (in my eyes) the most useful feature of Cassette by a country mile. This is Cassettes ability to ensure scripts are served in dependency order.",date:"2013-06-06T00:00:00.000Z",formattedDate:"June 6, 2013",tags:[{label:"script references",permalink:"/tags/script-references"},{label:"RequireJS",permalink:"/tags/require-js"},{label:"cassette",permalink:"/tags/cassette"}],readingTime:7.16,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"How I'm Using Cassette part 2:Get Cassette to Serve Scripts in Dependency Order",authors:"johnnyreilly",tags:["script references","RequireJS","cassette"],hide_table_of_contents:!1},prevItem:{title:"jQuery Validate - Native Unobtrusive Validation Support!",permalink:"/2013/06/26/jquery-validate-native-unobtrusive-validation"},nextItem:{title:"How I'm Using Cassette part 1:Getting Up and Running",permalink:"/2013/05/04/how-im-using-cassette"}},p={authorsImageUrls:[void 0]},c=[{value:"Why does this matter?",id:"why-does-this-matter",level:2},{value:"It Depends",id:"it-depends",level:2},{value:"Enter Cassette, riding a white horse",id:"enter-cassette-riding-a-white-horse",level:2},{value:"Declaring References Server-Side",id:"declaring-references-server-side",level:2},{value:"Declaring References in your JavaScript itself",id:"declaring-references-in-your-javascript-itself",level:2},{value:"Avoiding the Gotcha",id:"avoiding-the-gotcha",level:2},{value:"Go Forth and Reference",id:"go-forth-and-reference",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2013/05/how-im-using-cassette.html"},"Last time")," I wrote about Cassette I was talking about how to generally get up and running. How to use Cassette within an ASP.Net MVC project. What I want to write about now is (in my eyes) the most useful feature of Cassette by a country mile. This is Cassettes ability to ensure scripts are served in dependency order."),(0,i.kt)("h2",{id:"why-does-this-matter"},"Why does this matter?"),(0,i.kt)("p",null,"You might well ask. If we go back 10 years or so then really this wasn't a problem. No-one was doing a great deal with JavaScript. And if they did anything it tended to be code snippets in amongst the HTML; nothing adventurous. But unless you've had your head in the sand for the last 3 years then you will have clearly noticed that JavaScript is in rude health and being used for all kinds of things you'd never have imagined. In fact some would have it that it's the ",(0,i.kt)("a",{parentName:"p",href:"http://www.hanselman.com/blog/JavaScriptisAssemblyLanguagefortheWebPart2MadnessorjustInsanity.aspx"},"assembly language of the web"),"."),(0,i.kt)("p",null,"For my part, I've been doing more and more with JavaScript. And as I do more and more with it I seek to modularise my code; (",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Separation_of_concerns"},"like any good developer would"),") breaking it up into discrete areas of functionality. I aim to only serve up the JavaScript that I need on a given page. And that would be all well and good but for one of the languages shortcomings. Modules. JavaScript doesn't yet have a good module loading story to tell. (Apparently one's coming in ",(0,i.kt)("a",{parentName:"p",href:"http://wiki.ecmascript.org/doku.php?id=harmony:modules"},"EcmaScript 6"),"). (I don't want to get diverted into this topic as it's a big area. But if you're interested then you can read up a little on different approaches being used ",(0,i.kt)("a",{parentName:"p",href:"http://requirejs.org/docs/whyamd.html#today"},"here"),". The ongoing contest between RequireJS and CommonJS frankly makes me want to keep my distance for now.)"),(0,i.kt)("h2",{id:"it-depends"},"It Depends"),(0,i.kt)("p",null,"Back to my point, JavaScripts native handling of script dependencies is non-existent. It's real \"here be dragons\" territory. If you serve up, for example, Slave.js that depends on things set up in Master.js before you've actually served up Master.js, well it's not a delightful debugging experience. The errors tend be obscure and it's not always obvious what the correct ordering should be."),(0,i.kt)("p",null,"Naturally this creates something of a headache around my own JavaScript modules. A certain amount of jiggery-pokery is required to ensure that scripts are served in the correct order so that they run as expected. And as your application becomes more complicated / modular, the number of problems around this area increase exponentially. It's ",(0,i.kt)("strong",{parentName:"p"},"really")," tedious. I don't want to be thinking about managing that as I'm developing - I want to be focused on solving the problem at hand."),(0,i.kt)("p",null,"In short, what I want to do is reference a script file somewhere in my server-side pipeline. I could be in a view, a layout, a controller, a partial view, a HTML helper... - I just want to know that that script is going to turn up at the client in the right place in the HTML so it works. Always. And I don't want to have to think about it any further than that."),(0,i.kt)("h2",{id:"enter-cassette-riding-a-white-horse"},"Enter Cassette, riding a white horse"),(0,i.kt)("p",null,"And this is where Cassette takes the pain away. To quote the documentation:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"',(0,i.kt)("em",{parentName:"p"},"Some assets must be included in a page before others. For example, your code may use jQuery, so the jQuery script must be included first. Cassette will sort all assets based on references they declare."),'"')),(0,i.kt)("p",null,"Just the ticket!"),(0,i.kt)("h2",{id:"declaring-references-server-side"},"Declaring References Server-Side"),(0,i.kt)("p",null,"What does this look like in reality? Let's build on what I did last time to demonstrate how I make use of Asset References to ensure my scripts turn up in the order I require."),(0,i.kt)("p",null,"In my ",(0,i.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml")," file I'm going to remove the following reference from the head of the file:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'Bundles.Reference("~/bundles/core");')),(0,i.kt)("p",null,"I'm pulling this out of my layout page because it's presence means that ",(0,i.kt)("strong",{parentName:"p"},"every")," page MVC serves up is also serving up jQuery and jQuery UI (which is what ",(0,i.kt)("inlineCode",{parentName:"p"},"~/bundles/core")," is). If a page doesn't actually make use of jQuery and / or jQuery UI then there's no point in doing this."),(0,i.kt)("p",null,'"',(0,i.kt)("em",{parentName:"p"},"But wait!"),'", I hear you cry, "',(0,i.kt)("em",{parentName:"p"},"Haven't you just caused a bug with your reckless action? I distinctly recall that the ",(0,i.kt)("inlineCode",{parentName:"em"},"Login.cshtml")," page has the following code in place:"),'"'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'Bundles.Reference("~/bundles/validate");')),(0,i.kt)("p",null,'"',(0,i.kt)("em",{parentName:"p"},"And now with your foolhardy, nay, reckless attitude to the ",(0,i.kt)("inlineCode",{parentName:"em"},"~/bundles/core")," bundle you've broken your Login screen. How can jQuery Validation be expected to work if there's no jQuery there to extend?"),'"'),(0,i.kt)("p",null,"Well, I understand your concerns but really you needn't worry - Cassette's got my back. Look closely at the code below:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5693071.js?file=ReferencesValidateDependesOnCoreCassetteConfiguration.cs"}),(0,i.kt)("p",null,"See it? The ",(0,i.kt)("inlineCode",{parentName:"p"},"~/bundles/validate")," bundle declares a reference to the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/bundles/core")," bundle. The upshot of this is, that if you tell Cassette to reference ",(0,i.kt)("inlineCode",{parentName:"p"},"~/bundles/validate")," it will ensure that before it renders that bundle it first renders any bundles that bundle depends on (in this case the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/bundles/core")," bundle)."),(0,i.kt)("p",null,"This is a very simple demonstration of the feature but I can't underplay just how useful I find this."),(0,i.kt)("h2",{id:"declaring-references-in-your-javascript-itself"},"Declaring References in your JavaScript itself"),(0,i.kt)("p",null,"And the good news doesn't stop there. Let's say you ",(0,i.kt)("strong",{parentName:"p"},"don't")," want to maintain your references in a separate file. You'd rather declare references inside your JavaScript files themselves. Well - you can. Cassette caters for this through the usage of ",(0,i.kt)("a",{parentName:"p",href:"http://getcassette.net/documentation/v1/AssetReferences"},"Asset References"),"."),(0,i.kt)("p",null,"Let's demo this. First of all add the following file at this location in the project: ",(0,i.kt)("inlineCode",{parentName:"p"},"~/Scripts/Views/Home/Index.js")),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5693071.js?file=Index.js"}),(0,i.kt)("p",null,"The eagle-eyed amongst you will have noticed"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"I'm mirroring the MVC folder structure inside the Scripts directory. (There's nothing special about that by the way - it's just a file structure I've come to find useful. It's very easy to find the script associated with a View if the scripts share the same organisational approach as the Views.)."),(0,i.kt)("li",{parentName:"ol"},"The purpose of the script is very simple, it fades out the main body of the screen, re-writes the HTML in that tag and then fades back in. It's purpose is just to do something that is obvious to the user - so they can see the evidence of JavaScript executing."),(0,i.kt)("li",{parentName:"ol"},"Lastly and most importantly, do you notice that ",(0,i.kt)("inlineCode",{parentName:"li"},"// @reference ~/bundles/core")," is the first line of the file? This is our script reference. It's this that Cassette will be reading to pick up references.")),(0,i.kt)("p",null,"To make sure Cassette is picking up our brand new file let's take a look at ",(0,i.kt)("inlineCode",{parentName:"p"},"CassetteConfiguration.cs")," and uncomment the line of code below:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'bundles.AddPerIndividualFile<scriptbundle>("~/Scripts/Views");</scriptbundle>')),(0,i.kt)("p",null,"With this in place Cassette will render out a bundle for each script in the Views subdirectory. Let's see if it works. Add the following reference to our new JavaScript file in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/Views/Home/Index.cshtml"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'Bundles.Reference("~/Scripts/Views/Home/Index.js");')),(0,i.kt)("p",null,"If you browse to the home page of the application this is what you should now see:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-tGZTEhhkGz8/Ua7xlgl3n5I/AAAAAAAAAcs/miNZsysrJeY/s320/Index.js.png",alt:null})),(0,i.kt)("p",null,"What this means is, ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.js")," was served up by Cassette. And more importantly before ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.js")," was served the referenced ",(0,i.kt)("inlineCode",{parentName:"p"},"~/bundles/core")," was served too."),(0,i.kt)("h2",{id:"avoiding-the-gotcha"},"Avoiding the Gotcha"),(0,i.kt)("p",null,"There is a gotcha which I've discovered whilst using Cassette's Asset References. Strictly speaking it's a Visual Studio gotcha rather than a Cassette gotcha. It concerns Cassette's support for Visual Studio XML style reference comments. In the example above I could have written this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'/// &lt;reference path="~/bundles/core" /&gt;')),(0,i.kt)("p",null,"Instead of this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"// @reference ~/bundles/core")),(0,i.kt)("p",null,"It would fulfil exactly the same purpose and would work identically. But there's a problem. Using Visual Studio XML style reference comments to refer to Cassette bundles appears to trash the Visual Studios JavaScript Intellisense. You'll lose the Intellisense that's driven by ",(0,i.kt)("inlineCode",{parentName:"p"},"~/Scripts/_references.js")," in VS 2012. So if you value your Intellisense (and I do) my advice is to stick to using the standard Cassette references style instead."),(0,i.kt)("h2",{id:"go-forth-and-reference"},"Go Forth and Reference"),(0,i.kt)("p",null,"There is also support in Cassette for CSS referencing (as well as other types of referencing relating to LESS and even CoffeeScript). I haven't made use of CSS referencing myself as, in stark contrast to my JS, my CSS is generally one bundle of styles which I'm happy to be rendered on each page. But it's nice to know the option is there if I wanted it."),(0,i.kt)("p",null,"Finally, as last time you can see what I've done in this post by just looking at the repository on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/CassetteDemo/tree/References"},"GitHub"),". The changes I made are on the References branch of that particular repository."))}h.isMDXComponent=!0}}]);