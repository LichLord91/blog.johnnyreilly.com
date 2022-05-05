"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[64382],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return y}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),y=o,d=u["".concat(l,".").concat(y)]||u[y]||h[y]||i;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75083:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return h}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=["components"],r={title:"Type annotations: strong types, weakly held",authors:"johnnyreilly",tags:["type-annotations","types-as-comments","JSDoc","ECMAScript","types","proposal"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/2022/04/16/type-annotations-strong-types-weakly-held",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2022-04-16-type-annotations-strong-types-weakly-held/index.md",source:"@site/blog/2022-04-16-type-annotations-strong-types-weakly-held/index.md",title:"Type annotations: strong types, weakly held",description:'Recently, a new ECMAScript proposal called "Type Annotations" (originally named "Types as Comments") was revealed. The purpose is to allow type annotations to be valid JavaScript syntax. Albeit syntax that is ignored by JavaScript engines. The proposal is being worked on by Gil Tayar, Daniel Rosenwasser, Romulo Cintra, Rob Palmer, and others. Many of these people are from TypeScript community - however this proposal intentionally does not exist to benefit TypeScript alone.',date:"2022-04-16T00:00:00.000Z",formattedDate:"April 16, 2022",tags:[{label:"type-annotations",permalink:"/tags/type-annotations"},{label:"types-as-comments",permalink:"/tags/types-as-comments"},{label:"JSDoc",permalink:"/tags/js-doc"},{label:"ECMAScript",permalink:"/tags/ecma-script"},{label:"types",permalink:"/tags/types"},{label:"proposal",permalink:"/tags/proposal"}],readingTime:8.61,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Type annotations: strong types, weakly held",authors:"johnnyreilly",tags:["type-annotations","types-as-comments","JSDoc","ECMAScript","types","proposal"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Upgrading to React 18 with TypeScript",permalink:"/2022/05/01/upgrading-to-react-18-typescript"},nextItem:{title:"ESLint your C# in VS Code with Roslyn Analyzers",permalink:"/2022/04/06/eslint-your-csharp-in-vs-code-with-roslyn-analyzers"}},c={image:a(28466).Z,authorsImageUrls:[void 0]},h=[{value:"What is the proposal?",id:"what-is-the-proposal",level:2},{value:"What isn&#39;t it?",id:"what-isnt-it",level:2},{value:"Why do this at all?",id:"why-do-this-at-all",level:2},{value:"&quot;It&#39;s the JSDoc I always wanted!&quot;",id:"its-the-jsdoc-i-always-wanted",level:2},{value:"Controversy and Compromise",id:"controversy-and-compromise",level:2},{value:"Generic invocations and TypeScript",id:"generic-invocations-and-typescript",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:h};function y(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Recently, a new ECMAScript proposal called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-type-annotations"},'"Type Annotations"')," (originally named ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/giltayar/proposal-types-as-comments"},'"Types as Comments"'),") was revealed. The purpose is to allow type annotations to be valid JavaScript syntax. Albeit syntax that is ignored by JavaScript engines. The proposal is being worked on by Gil Tayar, Daniel Rosenwasser, Romulo Cintra, Rob Palmer, and others. Many of these people are from TypeScript community - however this proposal intentionally does not exist to benefit TypeScript alone."),(0,i.kt)("p",null,"It's a contentious topic. As a regular (and longtime) TypeScript user, here's a description of the proposal and some thoughts."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"title image reading &quot;Type annotations: strong types, weakly held&quot; with the JavaScript logo",src:a(28466).Z,width:"1600",height:"900"})),(0,i.kt)("h2",{id:"what-is-the-proposal"},"What is the proposal?"),(0,i.kt)("p",null,"Types annotations is a proposal which would allow for the inclusion of types in JavaScript code. Consider the following piece of TypeScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const theAnswer: number = 42;\n")),(0,i.kt)("p",null,"At present, this is not valid JavaScript. If you try and run the above in a JavaScript engine you'll get an error. Types are not part of JavaScript syntax."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot of `const theAnswer: number = 42;` entered into the Chrome devtools and responding with an error that says `Uncaught SyntaxError: Missing initializer in const declaration`",src:a(4523).Z,width:"1542",height:"140"})),(0,i.kt)("p",null,"Interestingly, it's already possible to store types within JavaScript through a standard known as JSDoc. ",(0,i.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/typescript-vs-jsdoc-javascript/"},"I've written about how TypeScript and JSDoc connect before."),", essentially the thing to note is that JSDoc amounts to storing type declarations in the context of JavaScript comments."),(0,i.kt)("p",null,"It's already possible to write our code sample in valid JavaScript expressing the types within JSDoc. It looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/** @type {number} */\nconst theAnswer = 42;\n")),(0,i.kt)("p",null,"This works, but it took two lines of code instead of one. The proposal allows for types to be directly expressed; not written as comments. So rather than writing the JSDoc equivalent, imagine if JavaScript was happy with the following instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const theAnswer: number = 42;\n")),(0,i.kt)("p",null,"That's what the proposal amounts to."),(0,i.kt)("h2",{id:"what-isnt-it"},"What isn't it?"),(0,i.kt)("p",null,"Now that we understand what the proposal is, let's consider what it isn't."),(0,i.kt)("p",null,"Types annotations isn't an endorsement of a particular type system. Furthermore, it is not type checking in the browser or type checking in Node.js."),(0,i.kt)("p",null,"Let's consider each of these. There's a number of languages which allow us to type check JavaScript. TypeScript, Flow, Hegel and others all play in this space. They are all similar, but different. They have different syntax and they do different things."),(0,i.kt)("p",null,'What they have in common, is the space where types live in their syntax or grammar. The proposal essentially says "hey we might have different approaches to describing types, but we agree about where the types ought to live - let\'s standardise that".'),(0,i.kt)("p",null,'This is why the original proposal name of "types as comments" is instructive; these types would be ignored by JavaScript runtimes. The fact they would be ignored is an indication that no existing type system would be "anointed" by this proposal.'),(0,i.kt)("p",null,"Consider the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const theAnswer: gibberish = 42;\n")),(0,i.kt)("p",null,"This is neither TypeScript or Flow. Both would complain about the above. JavaScript, if this proposal were adopted, would be entirely untroubled."),(0,i.kt)("p",null,"To reiterate: the proposal is not an endorsement of any given type system and it follows that there is no runtime type checking being introduced to JavaScript."),(0,i.kt)("h2",{id:"why-do-this-at-all"},"Why do this at all?"),(0,i.kt)("p",null,"It's worth taking a look at ",(0,i.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/"},"Daniel Rosenwasser"),"'s post where he announces the proposal. Daniel is part of the TypeScript team and one of champions of this proposal, along with ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/robpalmer2"},"Rob Palmer")," at Bloomberg and ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/romulocintra"},"Romulo Cintra")," at Igalia."),(0,i.kt)("p",null,"He says:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Today, you can create a .js file in your editor and start sprinkling in types in the form of JSDoc comments."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param a {number}\n * @param b {number}\n */\nfunction add(a, b) {\n  return a + b;\n}\n")),(0,i.kt)("p",{parentName:"blockquote"},"Because these are just comments, they don\u2019t change how your code runs at all \u2013 they\u2019re just a form of documentation, but TypeScript uses them to give you a better JavaScript editing experience ... This feature makes it incredibly convenient to get some of the TypeScript experience without a build step, and you can use it for small scripts, basic web pages, server code in Node.js, etc."),(0,i.kt)("p",{parentName:"blockquote"},"Still, you\u2019ll notice that this is a little verbose \u2013 we love how lightweight the inner-loop is for writing JavaScript, but we\u2019re missing how convenient TypeScript makes it to just write types."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"So what if we had both?")),(0,i.kt)("p",{parentName:"blockquote"},"What if we could have something like TypeScript syntax which was totally ignored \u2013 sort of like comments \u2013 in JavaScript."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function add(a: number, b: number) {\n  return a + b;\n}\n"))),(0,i.kt)("p",null,"What I take from this, is that JavaScript with types annotations, would be a more developer friendly JSDoc."),(0,i.kt)("h2",{id:"its-the-jsdoc-i-always-wanted"},'"It\'s the JSDoc I always wanted!"'),(0,i.kt)("p",null,"This idea really resonates with me. I'm a longtime user of JSDoc. Let me articulate why I find it useful."),(0,i.kt)("p",null,"What I wanted, way back before TypeScript existed, was JavaScript with static typing. TypeScript ",(0,i.kt)("em",{parentName:"p"},"mostly")," is that. At least in the way I choose to use it."),(0,i.kt)("p",null,"I don't use ",(0,i.kt)("inlineCode",{parentName:"p"},"enum"),"s, ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),"s, ",(0,i.kt)("inlineCode",{parentName:"p"},"decorator"),"s etc. This is significant as each of those features steps has an emit aspect; using one of these will require transpilation to create special JavaScript to represent a custom TypeScript implemented feature. All other TypeScript features are ",(0,i.kt)("em",{parentName:"p"},"erased")," by transpilation; there's no execution characteristics."),(0,i.kt)("p",null,"So by subsetting the features of TypeScript, we can choose to use only those features that do not have an emit aspect. By making that choice, it's possible to use just JavaScript, if we're willing to commit to using JSDoc syntax within JavaScript ",(0,i.kt)("em",{parentName:"p"},"instead")," of TypeScript. There's many in the community who are doing this on sizeable projects like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"webpack")," already. We don't lose type checking, we don't lose refactoring possibilities thanks to editors like VS Code."),(0,i.kt)("p",null,"JSDoc is great, but it's undeniably more verbose than writing TypeScript. If types annotations was to be adopted, we'd able to write TypeScript in our JavaScript files. We'd be able to use TypeScript to type check that ",(0,i.kt)("strong",{parentName:"p"},"if we wanted to"),". But we wouldn't need to transpile our code prior to running. We could run our source code directly. Brilliant!"),(0,i.kt)("h2",{id:"controversy-and-compromise"},"Controversy and Compromise"),(0,i.kt)("p",null,'Up until now, as we\'ve looked at the proposal, the story has been one of JavaScript becoming "types tolerant". And as a consequence, the syntax of Flow / TypeScript / Hegel et al would in future being considered valid JavaScript.'),(0,i.kt)("p",null,"This paints a picture of JavaScript, a dynamic language, being changed to accomodate the sensibilities of those who favour static typing. If you should glance at the discussions on Hacker News and in the issues of the proposal it's clear there's a very vocal section of JavaScript developers who consider this proposal to be thoroughly unwanted."),(0,i.kt)("p",null,"Whilst it's unlikely that the most fervent dynamic language advocate will change their mind, it's worth considering the nuance of this proposal. In actual fact, the proposal is a two way street; to comply with types becoming JavaScript native, languages like TypeScript would likely make changes to accomodate."),(0,i.kt)("h2",{id:"generic-invocations-and-typescript"},"Generic invocations and TypeScript"),(0,i.kt)("p",null,"There's a few cases which apply, the one that seems most significant is that of generic invocation. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/giltayar/proposal-types-as-comments#generic-invocations"},"To quote the proposal"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"One can explicitly specify the type arguments of a generic function invocation or generic class instantiation ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/functions.html#specifying-type-arguments"},"in TypeScript"),"."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// TypeScript\nadd<number>(4, 5);\nnew Point<bigint>(4n, 5n);\n")),(0,i.kt)("p",{parentName:"blockquote"},"The above syntax is already valid JavaScript that users may rely on, so we cannot use this syntax as-is.")),(0,i.kt)("p",null,"So if this proposal was to land, writing today's style TypeScript in JavaScript would ",(0,i.kt)("em",{parentName:"p"},"not")," work in the case of generic invocations."),(0,i.kt)("p",null,"If we read on in the proposal it says;"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We expect some form of new syntax that could be used to resolve this ambiguity.\nNo specific solution is proposed at this point of time, but one example option is to use a syntactic prefix such as ",(0,i.kt)("inlineCode",{parentName:"p"},"::")),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Types as Comments - example syntax solution\nadd::<number>(4, 5)\nnew Point::<bigint>(4n, 5n)\n")),(0,i.kt)("p",{parentName:"blockquote"},"These type arguments (",(0,i.kt)("inlineCode",{parentName:"p"},"::<type>"),") would be ignored by the JavaScript runtime.\nIt would be reasonable for this non-ambiguous syntax to be adopted in TypeScript as well.")),(0,i.kt)("p",null,"This last sentence is significant. Let's read it again:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It would be reasonable for this non-ambiguous syntax to be adopted in TypeScript as well")),(0,i.kt)("p",null,"Whilst not being an absolute commitment, this certainly suggests that TypeScript would be willing to change its own syntax to align with something that was standardised as typed JavaScript."),(0,i.kt)("p",null,"Speaking personally, I don't love the proposed new syntax; but I understand the rationale. Certainly a new generic invocation syntax is something I could come to terms with. It's good of the TypeScript team to be open to the idea of making changes to the language to align with the proposal. This is not zero cost to them. This demonstrates that to allow this proposal to land, there will be compromises on many sides. It's likely that Flow will be similarly affected also."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"When you see the various discussions on this topic online, it's clear there are many strong feelings. The proposal hasn't even reached stage 1 (of the potential 4 stages required for adoption). This may be a feature that doesn't make it. Or perhaps takes a long time to land on a mutually agreed design."),(0,i.kt)("p",null,"Speaking personally I'm hopeful that this does end up being part of the language. Not only do I like running raw JS, I see the benefits of being able to onboard people from JavaScript to TypeScript by allowing types to live directly in JavaScript."),(0,i.kt)("p",null,"It's said that prediction is very difficult, especially if it's about the future. So it is hard to know for sure what the long term effects on the language and the ecosystem of this proposal might be. It would certainly lower the barrier to entry for using static typing with JavaScript, and as consequence, would likely lead to greater adoption and hence less bugs in userland. Time will tell."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/types-as-comments-strong-types-weakly-held/"},"This post was originally published on LogRocket.")))}y.isMDXComponent=!0},4523:function(e,t,a){t.Z=a.p+"assets/images/screenshot-types-in-the-chrome-console-2f656d1328f435bddf88bb8b66369847.png"},28466:function(e,t,a){t.Z=a.p+"assets/images/title-image-84ae91cde9aba574acfb0a7501676727.png"}}]);