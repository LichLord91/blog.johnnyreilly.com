"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[1531],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(a),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var h=2;h<r;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},88384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const i={title:"A Potted History of using Ajax (on the Microsoft Stack of Love)",authors:"johnnyreilly",tags:["ajax","jquery","webservice.htc","json","microsoft"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2012/02/05/potted-history-of-using-ajax-on",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-02-05-potted-history-of-using-ajax-on/index.md",source:"@site/blog/2012-02-05-potted-history-of-using-ajax-on/index.md",title:"A Potted History of using Ajax (on the Microsoft Stack of Love)",description:"This post originally started out as an explanation of JSON. However as I wrote this quickly got abandoned in favour of writing about how I came to use JSON in the first place - which was through the use of Ajax. Having written a goodly amount I've now decided to move the actual JSON stuff into another post since I think Ajax is probably worth thinking about by itself rather than as an aside. So let me start at the beginning and explain how I came to use Ajax in the first place (this may take some time so please bear with me). In late 2004 I first started working on a project which I was to remain involved with (on and off) for a very long time indeed. The project was part financial reporting system and part sales incentivisation tool; it was used internally in the investment bank in which I was working. The project had been in existence for a number of years and had a web front end which at that point would been built in a combination of HTML, JavaScript, classic ASP and with a Visual Basic 6.0 back end. One of the reasons I had been brought on to the project was to help \".Net-ify\" the thing and migrate it to ASP.NET and C#. I digress. The interesting thing about this app was that there were actually some quite advanced things being done with it (despite the classic ASP / VB). The users could enter trades into the system which represented actual trades that had been entered into a trading system elsewhere in the organisation. These trades would be assigned a reporting value which would be based on their various attributes. (Stay with me people this will get more interesting I \\*promise\\*.) The calculation of the reporting value was quite an in depth process and needed to be performed server-side. However, the users had decreed that it wasn't acceptable to do a full postback to the server to perform this calculation; they wanted it done \"on-the-fly\". Now if you asked me at the time I'd have said \"can't be done\". Fortunately the other people working on the project then weren't nearly so defeatist. Instead they went away and found Microsoft's webservice.htc library. For those of you that don't know this was a JavaScript library that Microsoft came up with to enable the access of Web Services on the client. Given that it was designed to work with IE 5 I suspect it was created between 1999-2001 (but I'm not certain about that). Now it came as a revelation to me but this was a JavaScript library that talked to our web services through the medium of XML. In short it was my first encounter with anything remotely Ajax\\-y. It was exciting! However, the possibilities of what we could do didn't actually become apparent to me for some years. It's worth saying that the way we were using webservice.htc was exceedingly simplistic and rather than investigating further I took the limited ways we were using it as indications of the limitations of Ajax and / or webservice.htc. So for a long time I thought the following: - The only way to pass multiple arguments to a web service was to package up arguments into a single string with delimiters which you could split and unpackage as your first step on the server.",date:"2012-02-05T00:00:00.000Z",formattedDate:"February 5, 2012",tags:[{label:"ajax",permalink:"/tags/ajax"},{label:"jquery",permalink:"/tags/jquery"},{label:"webservice.htc",permalink:"/tags/webservice-htc"},{label:"json",permalink:"/tags/json"},{label:"microsoft",permalink:"/tags/microsoft"}],readingTime:7.235,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"A Potted History of using Ajax (on the Microsoft Stack of Love)",authors:"johnnyreilly",tags:["ajax","jquery","webservice.htc","json","microsoft"],hide_table_of_contents:!1},prevItem:{title:"WCF Transport Windows authentication using NetTcpBinding in an Intranet environment",permalink:"/2012/02/15/wcf-transport-windows-authentication"},nextItem:{title:"JavaScript - getting to know the beast...",permalink:"/2012/01/30/javascript-getting-to-know-beast"}},h={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'This post originally started out as an explanation of JSON. However as I wrote this quickly got abandoned in favour of writing about how I came to use JSON in the first place - which was through the use of Ajax. Having written a goodly amount I\'ve now decided to move the actual JSON stuff into another post since I think Ajax is probably worth thinking about by itself rather than as an aside. So let me start at the beginning and explain how I came to use Ajax in the first place (this may take some time so please bear with me). In late 2004 I first started working on a project which I was to remain involved with (on and off) for a very long time indeed. The project was part financial reporting system and part sales incentivisation tool; it was used internally in the investment bank in which I was working. The project had been in existence for a number of years and had a web front end which at that point would been built in a combination of HTML, JavaScript, classic ASP and with a Visual Basic 6.0 back end. One of the reasons I had been brought on to the project was to help ".Net-ify" the thing and migrate it to ASP.NET and C#. I digress. The interesting thing about this app was that there were actually some quite advanced things being done with it (despite the classic ASP / VB). The users could enter trades into the system which represented actual trades that had been entered into a trading system elsewhere in the organisation. These trades would be assigned a reporting value which would be based on their various attributes. (Stay with me people this will get more interesting I ',"*",(0,n.kt)("strong",{parentName:"p"},"promise"),"*",".) The calculation of the reporting value was quite an in depth process and needed to be performed server-side. However, the users had decreed that it wasn't acceptable to do a full postback to the server to perform this calculation; they wanted it done \"on-the-fly\". Now if you asked me at the time I'd have said \"can't be done\". Fortunately the other people working on the project then weren't nearly so defeatist. Instead they went away and found Microsoft's ",(0,n.kt)("a",o({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/library/ie/ms531033%28v=vs.85%29.aspx"}),"webservice.htc")," library. For those of you that don't know this was a JavaScript library that Microsoft came up with to enable the access of Web Services on the client. Given that it was designed to work with IE 5 I suspect it was created between 1999-2001 (but I'm not certain about that). Now it came as a revelation to me but this was a JavaScript library that talked to our web services through the medium of XML. In short it was my first encounter with anything remotely ",(0,n.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Ajax_(programming)"}),"Ajax"),"-","y. It was exciting! However, the possibilities of what we could do didn't actually become apparent to me for some years. It's worth saying that the way we were using webservice.htc was exceedingly simplistic and rather than investigating further I took the limited ways we were using it as indications of the limitations of Ajax and / or webservice.htc. So for a long time I thought the following: - The only way to pass multiple arguments to a web service was to package up arguments into a single string with delimiters which you could ",(0,n.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Comparison_of_programming_languages_(string_functions)#split"}),"split")," and unpackage as your first step on the server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The only valid return type was a single string. And so if you wanted to return a number of numeric values (as we did) the only way to do this was to package up return values into a very long string with delimiters in and (you guessed it!) ",(0,n.kt)("a",o({parentName:"li"},{href:"http://en.wikipedia.org/wiki/Comparison_of_programming_languages_(string_functions)#split"}),"split")," and unpackage as your first step on the client."),(0,n.kt)("li",{parentName:"ul"},"The only thing that you could (or would want to) send back and forth between client and server was XML")),(0,n.kt)("p",null,"So to recap, I'm now aware that it's possible for JavaScript to interact with the server through the use of web services. It's possible, but ugly, not that quick and requires an awful lot of manual serialization / deserialization operations. It's clearly powerful but not much fun at all. And that's where I left it for a number of years. Let's fade to black... It's now 2007 and Microsoft have released ASP.NET Ajax, the details of which are well explained in this ",(0,n.kt)("a",o({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/magazine/cc163499.aspx"}),"article")," (which I have only recently discovered). Now I'm always interested in \"the new\" and so I was naturally interested in this. Just to be completely upfront about this I should confess that when I first discovered ASP.NET Ajax I didn't clock the power of it at all. Initially I just switched over from using webservice.htc to ASP.NET Ajax. This alone gave us a ","*",(0,n.kt)("strong",{parentName:"p"},"massive"),"*",' performance improvement (I know it was massive since we actually received a "well done" email from our users which is testament to the difference it was making to their experience of the system). But we were still performing our manual serialisation / deserialisation of values on the client and the server. ie. Using Ajax was now much faster but still not too much fun. Let\'s jump forward in time again to around 2010 to the point in time when I was discovering jQuery and that JavaScript wasn\'t actually evil. It\'s not unusual for me to play around with "what if" scenarios in my code, just to see what might might be possible. Sometimes I discover things. So it was with JSON. We had a web service in the system that allowed us to look up a counterparty (ie a bank account) with an identifier. Once we looked it up we packaged up the counterparty details (eg name, location etc) into a big long string with delimiters and sent it back to client. One day I decided to change the return type on the web service from a string to the actual counterparty class. So we went from something like this:'),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'[WebService(Namespace = "http://tempuri.org/")]\n[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]\n[ScriptService]\npublic class CounterpartyWebService : System.Web.Services.WebService\n{\n  [WebMethod]\n  public string GetCounterparty(string parameters)\n  {\n    string[] aParameters = parameters.Split("|");\n    int counterpartyId = int.Parse(aParameters[0]);\n    bool includeLocation = (aParameters[1] == "1");\n    Counterparty counterparty = \\_counterpartyDb\n    .GetCounterparty(counterpartyId);\n\n        string returnValue = counterparty.Id +\n                          "|" + counterparty.Name +\n                          (includeLocation\n                            ? "|" + counterparty.Location\n                            : "");\n\n        return returnValue;\n  }\n}\n')),(0,n.kt)("p",null,"To something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'[WebMethod]\npublic Counterparty GetCounterparty(string parameters)\n{\n  string[] aParameters = parameters.Split("|");\n  int counterpartyId = int.Parse(aParameters[0]);\n  bool includeLocation = (aParameters[1] == "1");\n  Counterparty counterparty = _counterpartyDb\n    .GetCounterparty(counterpartyId);\n\n  return counterparty;\n}\n')),(0,n.kt)("p",null,"I genuinely expected that this was just going to break. It didn't. Suddenly on the client I'm sat there with a full blown object that looks just like the object I had on the server."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"WHAT STRANGE MAGIC COULD THIS BE??????????")," Certain that I'd discovered witchcraft I decided to try something else. What would happen if I changed the signature on the method so it received individual parameters and passed my individual parameters to the web service instead of packaging them up into a string? I tried this:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-cs"}),"[WebMethod]\npublic Counterparty GetCounterparty(int counterpartyId, bool includeLocation)\n{\n  Counterparty counterparty = \\_counterpartyDb\n  .GetCounterparty(counterpartyId);\n\n  return counterparty;\n}\n")),(0,n.kt)("p",null,"And it worked! ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",o({parentName:"strong"},{href:"http://www.youtube.com/watch?v=N_dWpCy8rdc&feature=related"}),"IT WORKED!!!!!!!!!!!!!!!!!!!!!"))," (And yes I know I wasn't actually using the includeLocation parameter - but the point was it was being passed to the server and I could have used it if I'd wanted to.) I couldn't believe it. For ",(0,n.kt)("strong",{parentName:"p"},"years")," I'd been using Ajax and without ",(0,n.kt)("strong",{parentName:"p"},"any")," idea of the power available to me. The ignorance! The stupidity of the man! To my complete surprise it turned out that: - Ajax could be quick! ASP.NET Ajax was lightening fast when compared to webservice.htc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You could send multiple arguments to a web service without all that packaging nonsense"),(0,n.kt)("li",{parentName:"ul"},"You could return complex objects without the need for packaging it all up yourself.")),(0,n.kt)("p",null,"Essentially the source of all this goodness was the magic of JSON. I wouldn't really come to comprehend this until I moved away from using the ASP.NET Ajax client libraries in favour of using the ",(0,n.kt)("a",o({parentName:"p"},{href:"http://api.jquery.com/jQuery.ajax/"}),"jQuery.ajax")," functionality. (Yes, having mostly rattled on about using webservice.htc and ASP.NET Ajax I should clarify that I have now forsaken both for jQuery as I find it more powerful and more configurable - but it's the journey that counts I guess!) It's abysmal that I didn't discover the power of Ajax sooner but the difference this discovery made to me was immense. Approaches that I would have dismissed or shied away from previously because of the amount of \"plumbing\" involved now became easy. This massively contributed to my ",(0,n.kt)("a",o({parentName:"p"},{href:"http://www.hanselman.com/blog/HanselminutesPodcast260NETAPIDesignThatOptimizesForProgrammerJoyWithJonathanCarter.aspx"}),"programmer joy"),"! Next time I promise I'll aim to actually get onto JSON."))}p.isMDXComponent=!0}}]);