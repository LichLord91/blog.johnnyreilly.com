"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[98069],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5787:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=["components"],s={title:"Striving for (JavaScript) Convention",authors:"johnnyreilly",tags:["naming convention","javascript","Hungarian Notation","DOJO"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2012/03/12/striving-for-javascript-convention",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-03-12-striving-for-javascript-convention/index.md",source:"@site/blog/2012-03-12-striving-for-javascript-convention/index.md",title:"Striving for (JavaScript) Convention",description:"Update",date:"2012-03-12T00:00:00.000Z",formattedDate:"March 12, 2012",tags:[{label:"naming convention",permalink:"/tags/naming-convention"},{label:"javascript",permalink:"/tags/javascript"},{label:"Hungarian Notation",permalink:"/tags/hungarian-notation"},{label:"DOJO",permalink:"/tags/dojo"}],readingTime:9.63,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Striving for (JavaScript) Convention",authors:"johnnyreilly",tags:["naming convention","javascript","Hungarian Notation","DOJO"],hide_table_of_contents:!1},prevItem:{title:"Using the PubSub / Observer pattern to emulate constructor chaining without cluttering up global scope",permalink:"/2012/03/17/using-pubsub-observer-pattern-to"},nextItem:{title:"jQuery Unobtrusive Remote Validation",permalink:"/2012/03/03/jquery-unobtrusive-remote-validation"}},h={authorsImageUrls:[void 0]},c=[{value:"Update",id:"update",level:2}],p={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"update"},"Update"),(0,i.kt)("p",null,"The speed of change makes fools of us all. Since I originally wrote this post all of 3 weeks ago Visual Studio 11 beta has been released and the issues I was seeking to solve have pretty much been resolved by the new innovations found therein. It's nicely detailed in ",(0,i.kt)("a",{parentName:"p",href:"http://www.twitter.com/carlbergenhem"},"@carlbergenhem"),"'s blog post: ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.telerik.com/blogs/posts/12-03-26/my-top-5-visual-studio-11-designer-improvements-for-asp-net-4-5-development.aspx"},"My Top 5 Visual Studio 11 Designer Improvements for ASP.NET 4.5 Development"),". I've left the post in place below but much of what I said (particularly with regard to Hungarian Notation) I've now moved away from. That was originally my intention anyway so that's no bad thing. The one HN artefact that I've held onto is using \"$\" as a prefix for jQuery objects. I think that still makes sense. I would have written my first line of JavaScript in probably 2000. It probably looked something like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"alert('hello world')"),". I know. Classy. As I've mentioned before it was around 2010 before I took JavaScript in any way seriously. Certainly it was then when I started to actively learn the language. Because up until this point I'd been studiously avoiding writing any JavaScript at all I'd never really given thought to forms and conventions. When I wrote any JavaScript I just used the same style and approaches as I used in my main development language (of C#). By and large I have been following the .net naming conventions which are ably explained by Pete Brown ",(0,i.kt)("a",{parentName:"p",href:"http://10rem.net/articles/net-naming-conventions-and-programming-standards---best-practices"},"here"),". Over time I have started to move away from this approach. Without a deliberate intention to do so I have found myself adopting a different style for my JavaScript code as compared with anything else I write. I wouldn't go so far as to say I'm completely happy with the style I'm currently using. But I find it more helpful than not and thought it might be worth talking about. It was really 2 things that started me down the road of \"rolling my own\" convention: dynamic typing and the lack of safety nets. Let's take each in turn.... ### 1","."," Dynamic typing"),(0,i.kt)("p",null,"Having grown up (in a development sense) using compiled and strongly-typed languages I was used to the IDE making it pretty clear what was what through friendly tooltips and the like:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15217).Z,width:"174",height:"58"})),(0,i.kt)("p",null,"JavaScript is loosely / dynamically typed (",(0,i.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/9154388/does-untyped-also-mean-dynamically-typed-in-the-academic-cs-world"},'occasionally called "untyped" but let\'s not go there'),"). This means that the IDE can't easily determine what's what. So no tooltips for you sunshine. ### 2","."," The lack of safety nets / running with scissors"),(0,i.kt)("p",null,"Now I've come to love it but what I realised pretty quickly when getting into JavaScript was this: you are running with scissors. If you're not careful and you don't take precautions it can bloody quickly. If I'm writing C# I have a lot of safety nets. Not the least of which is \"does it compile\"? If I declare an integer and then subsequently try to assign a string value to it ",(0,i.kt)("u",null,"it won't let me")),(0,i.kt)("p",null,". But JavaScript is forgiving. Some would say too forgiving. Let's do something mad:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var iAmANumber = 77;\n\nconsole.log(iAmANumber); //Logs a number\n\niAmANumber = \"It's a string\";\n\nconsole.log(iAmANumber); //Logs a string\n\niAmANumber = {\n  description: 'I am an object',\n};\n\nconsole.log(iAmANumber); //Logs an object\n\niAmANumber = function (myVariable) {\n  console.log(myVariable);\n};\n\nconsole.log(iAmANumber); //Logs a function\niAmANumber('I am not a number, I am a free man!'); //Calls a function which performs a log\n")),(0,i.kt)("p",null,"Now if I were to attempt something similar in C# fuggedaboudit but JavaScript; no I'm romping home free:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(67899).Z,width:"320",height:"251"})),(0,i.kt)("p",null,"Now I'm not saying that you should ever do the above, and thinking about it I can't think of a situation where you'd want to (suggestions on a postcard). But the point is it's possible. And because it's possible to do this deliberately, it's doubly possible to do this accidentally. My point is this: it's easy to make bugs in JavaScript. ## What ",(0,i.kt)("del",{parentName:"p"},"Katy")," Johnny Did Next"),(0,i.kt)("p",null,"I'd started making more and more extensive use of JavaScript. I was beginning to move in the direction of using the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Single-page_application"},"single-page application")," approach (",(0,i.kt)("em",{parentName:"p"},"although more in the sense of giving application style complexity to individual pages rather than ensuring that entire applications ended up in a single page"),"). This meant that whereas in the past I'd had the occasional 2 lines of JavaScript I now had a multitude of functions which were all interacting in response to user input. All these functions would contain a number of different variables. As well as this I was making use of jQuery for both Ajax purposes and to smooth out the DOM inconsistencies between various browsers. This only added to the mix as variables in one of my functions could be any one of the following: - a number"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a string"),(0,i.kt)("li",{parentName:"ul"},"a boolean"),(0,i.kt)("li",{parentName:"ul"},"a date"),(0,i.kt)("li",{parentName:"ul"},"an object"),(0,i.kt)("li",{parentName:"ul"},"an array"),(0,i.kt)("li",{parentName:"ul"},"a function"),(0,i.kt)("li",{parentName:"ul"},"a jQuery object - not strictly a distinct JavaScript type obviously but treated pretty much as one in the sense that it has a particular functions / properties etc associated with it")),(0,i.kt)("p",null,"As I started doing this sort of work I made no changes to my coding style. Wherever possible I did ","*",(0,i.kt)("strong",{parentName:"p"},"exactly"),"*"," what I would have been doing in C# in JavaScript. And it worked fine. Until.... Okay there is no \"until\" as such, it did work fine. But what I found was that I would do a piece of work, check it into source control, get users to test it, release the work into Production and promptly move onto the next thing. However, a little way down the line there would be a request to add a new feature or perhaps a bug was reported and I'd find myself back looking at the code. And, as is often the case, despite the comments I would realise that it wasn't particularly clear why something worked in the way it did. (Happily it's not just me that has this experience, paranoia has lead me to ask many a fellow developer and they have confessed to similar) When it came to bug hunting in particular I found myself cursing the lack of friendly tooltips and the like. Each time I wanted to look at a variable I'd find myself tracking back through the function, looking for the initial use of the variable to determine the type. Then I'd be tracking forward through the function for each subsequent use to ensure that it conformed. Distressingly, I would find examples of where it looked like I'd forgotten the type of the variable towards the end of a function (for which I can only, regrettably, blame myself). Most commonly I would have a situation like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var tableCell = $('#ItIsMostDefinitelyATableCell'); //I jest ;-)\n\n/* ...THERE WOULD BE SOME CODE DOING SOMETHING HERE... */\n\ntableCell.className = 'makeMeProminent'; //Oh dear - not good.\n")),(0,i.kt)("p",null,"You see what happened above? I forgot I had a jQuery object and instead treated it like it was a standard DOM element. Oh dear. ## Spinning my own safety net; Hungarian style"),(0,i.kt)("p",null,'After I\'d experienced a few of the situations described above I decided that steps needed to be taken to minimise the risk of this. In this case, I decided that "steps" meant ',(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Hungarian_notation"},"Hungarian notation"),". I know. I bet you're wincing right now. For those of you that don't remember HN was pretty much the standard way of coding at one point (although at the point that I started coding professionally it had already started to decline). It was adopted in simpler times long before the modern IDE's that tell you what each variable is became the norm. Back when you couldn't be sure of the types you were dealing with. In short, kind of like my situation with JavaScript right now. There's not much to it. By and large HN simply means having a lowercase prefix of 1-3 characters on all your variables indicating type. It doesn't solve all your problems. It doesn't guarantee to stop bugs. But because each instance of the variables use implicitly indicates it's type it makes bugs more glaringly obvious. This means when writing code I'm less likely to misuse a variable (eg ",(0,i.kt)("inlineCode",{parentName:"p"},'iNum = "JIKJ"'),") because part of my brain would be bellowing: \"that just looks wrong... pay better attention lad!\". Likewise, if I'm scanning through some JavaScript and searching for a bug then this can make it more obvious. Here's some examples of different types of variables declared using the style I have adopted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var iInteger = 4;\nvar dDecimal = 10.5;\nvar sString = 'I am a string';\nvar bBoolean = true;\nvar dteDate = new Date();\nvar oObject = {\n  description: 'I am an object',\n};\nvar aArray = [34, 77];\nvar fnFunction = function () {\n  //Do something\n};\nvar $jQueryObject = $('#ItIsMostDefinitelyATableCell');\n")),(0,i.kt)("p",null,"Some of you have read this and thought \"hold on a minute... JavaScript doesn't have integers / decimals etc\". You're quite right. My style is not specifically stating the type of a variable. More it is seeking to provide a guide on how a variable should be used. JavaScript does not have integers. But oftentimes I'll be using a number variable which i will only ever want to treat as an integer. And so I'll name it accordingly. ## Spinning a better safety net; DOJO style"),(0,i.kt)("p",null,"I would be the first to say that alternative approaches are available. And here's one I recently happened upon that I rather like the look of: look 2/3rds down at the parameters section of ",(0,i.kt)("a",{parentName:"p",href:"http://dojotoolkit.org/community/styleGuide"},"the DOJO styleguide")," Essentially they advise specifying parameter types through the use of prefixed comments. See the examples below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function(/*String*/ foo, /*int*/ bar)...\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function(/_String?_/ foo, /_int_/ bar, /_String[]?_/ baz)...\n")),(0,i.kt)("p",null,"I really rather like this approach and I'm thinking about starting to adopt it. It's not possible in Hungarian Notation to be so clear about the purpose of a variable. At least not without starting to adopt all kinds of kooky conventions that take in all the possible permutations of variable types. And if you did that you'd really be defeating yourself anyway as it would simply reduce the clarity of your code and make bugs more likely. ## Spinning a better safety net; unit tests"),(0,i.kt)("p",null,"Despite being quite used to writing unit tests for all my server-side code I have not yet fully embraced unit testing on the client. Partly I've been holding back because of the variety of JavaScript testing frameworks available. I wasn't sure which to start with. But given that it is so easy to introduce bugs into JavaScript I have come to the conclusion that it's better to have some tests in place rather than none. Time to embrace the new. ## Conclusion"),(0,i.kt)("p",null,"I've found using Hungarian Notation useful whilst working in JavaScript. Not everyone will feel the same and I think that's fair enough; within reason I think it's generally a good idea to go with what you find useful. However, I am giving genuine consideration to moving to the DOJO style and moving back to my more standard camel-cased variable names instead of Hungarian Notation. Particularly since I strive to keep my functions short with the view that ideally each should 1 thing well. Keep it simple etc... And so in a perfect world the situation of forgetting a variables purpose shouldn't really arise... I think once I've got up and running with JavaScript unit tests I may make that move. Hungarian Notation may have proved to be just a stop-gap measure until better techniques were employed..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"")))}d.isMDXComponent=!0},15217:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAA6CAMAAAAeJZKJAAABHVBMVEX////r6/Pm5/L3+Pv6+vzt7fV2dnbw8fcAAABeADKG0fnz87D//7Vjtf+1///ajTRiAGLz8/g0jdrv8K+N2v//tWMAM4wAY7X/2o0xhtVjADSs9PkzAACEzfb29rFerfny89TwzonzrWEyAGGNNAD//9oAXrDa//+1YwAAAGIAAP/Q9PmsXgBjAABeAAD10ooyADOFMQAAADPOhjKNNP8yMouHMTL/2v80AP9jAP80jY20/bSHroqioqJ+fn61YzReXjJdMTKNYwDLy83X/LTWz5aTk5OLi2IAMWA0jf+1Y//n5uqN2to0Y7VjjY0AY41eMom1tWMxMWC1jTQANDQ0NAD/tf/ajf+Njf8AY/9erK94YmIAXWBdMWAyMgDHJKbUAAAEI0lEQVRo3u2YiXLaMBCGRSlYgYILLRCXUFJaHA5DApTeSe/0vu/z/R+j/2qlmNRNoTZm4pn+RJZ3tVp9XitEE6F09VpBhNap00WxOgVxLx/JXpFl0b5UCImL6aSC7iJTz8d9P90Kj8vR586aLqye9nqEcP1zr/dEfOqRTDL7xqB6Txbs6hbKWq5U3xWAS4DrF4s8BuuNRNXF+oYqWeflhuwe/QB2ze8qiA9f0OtfxMdekQ0ju3tzULbLKAYBVqoPX/i4ZmxQE+s7Z8lJYR08WcdkwCNAsILFjY5bxCb+HbeGzHZZdMoC10p16/ZzH5fHyMIzKLLxWUZdoLismHDXpw9ABdzKqyNwMSZIPm6wuvQWdLc83KdPgrji9qOaINz2lQ8FuNqXurO4lW7x1KAQwA2oU9Od+aIJBduDCgYXF/Or5uPyPgOuurGlvHH6AHdAm4ArafZtUMHi0gxgxyEmXbbwXSPiEb3qZcuWcdF2kPm//l2pJUum4lTScJctKY6B8KfgmOLqM21icBc+07Kbu1XgRj7THsatYCg23Ohn2pXiRj/T2pJU1l3MmyHamXblezf6mTa4Gcqx4kY60wZxcXxdDPd4nGnblxar7vE409LxNXbc1IE86aSiKnEnsngloPTuXjYJ2tu1BLR7XyRD9/fpuieSoqy+nEzE5wCX7o0v/hZ6PcY9mRQlEjedFB3Gnbjn13LpoP7s3d7J+cOzUZ7jj/9V54fuUdnhnIe7Pe3PxQ0qiLt5JTd/Pvt/NsPjTpx0VFxWy10U99a0Hw6Xi5JH1DbOtE2YI+o8KV3ykg1nq9rXnjvdm/Bq49aGdMzcbp1eE/LBzq89ktLJDykqzXHNCTw614O1nOdwnFraDzA5OSGtNotbovv86bqaM2zSttsc8Q402bhmHpbhIMbTRrWPGTqw5VAmM+KmW1iOS0VxLTDAw7l4ho87E8A5dUKshuklg1tSwiIlDG9frJdKXpM6qCXlmCbxeP513/dQ84fV4qgFClnCe0I8Y5iOHaZxLpXBPRzHzeTkhGQoMa6lhBQWBi5crFuW11SdhSvWhpcCJs7EmfGg+QZeL9uciTpe1HTsMI1z8cSvh+J04yFNQYbSLC4Wts6s5c4Mm4pp5MCHvXphJwevRexvf9RnPGjaGKqngI07FTjt4wobP6Zjh2nIdVfdIHhjnAOY1RpzODeTEx0mBnC5ehhoYL4cNxAzlLKJ37fHdxvkhTZHLl2MB80YdxBq5krXarlMZ8IsT7rsOGiW57IDy2I1bKrvHM7N5OSEsIO4XJTowmtqzA/ywPJPyuDDuBmtiZtZhrwF0qA0ITJr3FVrczRuZELitrOppEhVF7gZfLQykT7Q/DRhl2LcpFX3RFL0HzdGMe7eiaQoy//FeXYiEXr4TUDWfjYZ2n/2C067248x5sWiAAAAAElFTkSuQmCC"},67899:function(e,t,n){t.Z=n.p+"assets/images/Mad-Stuff-10b25768e96e710e539955531599c7e4.png"}}]);