"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[70954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});n(67294);var a=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",authors:"johnnyreilly",tags:["javascript","Serialization",".NET"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2012/04/28/beg-steal-or-borrow-decent-javascript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-04-28-beg-steal-or-borrow-decent-javascript/index.md",source:"@site/blog/2012-04-28-beg-steal-or-borrow-decent-javascript/index.md",title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",description:"I've so named this blog post because it shamelessly borrows from the fine work of others 1. http 2. http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/",date:"2012-04-28T00:00:00.000Z",formattedDate:"April 28, 2012",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"Serialization",permalink:"/tags/serialization"},{label:".NET",permalink:"/tags/net"}],readingTime:9.465,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Beg, Steal or Borrow a Decent JavaScript DateTime Converter",authors:"johnnyreilly",tags:["javascript","Serialization",".NET"],hide_table_of_contents:!1},prevItem:{title:"Globalize.js - number and date localisation made easy",permalink:"/2012/05/07/globalizejs-number-and-date"},nextItem:{title:"JSHint - Customising your hurt feelings",permalink:"/2012/04/23/jshint-customising-your-hurt-feelings"}},c={authorsImageUrls:[void 0]},p=[{value:"DateTime, JSON, JavaScript Dates....",id:"datetime-json-javascript-dates",level:2},{value:"Getting your web services to use the ISO 8601 DateTime Converter",id:"getting-your-web-services-to-use-the-iso-8601-datetime-converter",level:2}],h={toc:p};function u(e){var{components:t}=e,o=r(e,["components"]);return(0,a.kt)("wrapper",i({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I've so named this blog post because it shamelessly borrows from the fine work of others: Sebastian Markb\xe5ge and Nathan Vonnahme. Sebastian wrote a blog post documenting a good solution to the ASP.NET JavaScriptSerializer DateTime problem at the tail end of last year. However, his solution didn't get me 100% of the way there when I tried to use it because of a need to support IE 8 which lead me to use Nathan Vonnahme's ISO 8601 JavaScript Date parser. I thought it was worth documenting this, hence this post, but just so I'm clear; the hard work here was done by Sebastian Markb\xe5ge and Nathan Vonnahme and not me. Consider me just a curator in this case. The original blog posts that I am drawing upon can be found here: 1. ",(0,a.kt)("a",i({parentName:"p"},{href:"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/"}),"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/")," and here: 2. ",(0,a.kt)("a",i({parentName:"p"},{href:"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/"}),"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/")),(0,a.kt)("h2",i({},{id:"datetime-json-javascript-dates"}),"DateTime, JSON, JavaScript Dates...."),(0,a.kt)("p",null,"Like many, I've long been frustrated with the quirky DateTime serialisation employed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Web.Script.Serialization.JavaScriptSerializer")," class. When serialising DateTimes so they can be JSON.parsed on the client, this serialiser uses the following approach: (from MSDN) ",(0,a.kt)("a",i({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/library/system.web.script.serialization.javascriptserializer.aspx"}),(0,a.kt)("em",{parentName:"a"},'Date object, represented in JSON as "\\/Date(number of ticks)\\/". The number of ticks is a positive or negative long value that indicates the number of ticks (milliseconds) that have elapsed since midnight 01 January, 1970 UTC."'))," Now this is not particularly helpful in my opinion because it's not human readable (at least not this human; perhaps ",(0,a.kt)("a",i({parentName:"p"},{href:"http://stackoverflow.com/users/22656/jon-skeet"}),"Jon Skeet"),"...) When consuming your data from web services / PageMethods using ",(0,a.kt)("a",i({parentName:"p"},{href:"http://api.jquery.com/jQuery.ajax/"}),"jQuery.ajax")," you are landed with the extra task of having to convert what were DateTimes on the server from Microsofts string Date format (eg ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\/Date(1293840000000)\\/"'),") into actual JavaScript Dates. It's also unhelpful because it's divergent from the approach to DateTime / Date serialisation used by a native JSON serialisers:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"eager",fetchpriority:"high",src:n(76705).Z,width:"320",height:"144"})),(0,a.kt)("p",null,"Just as an aside it's worth emphasising that one of the limitations of JSON is that the JSON.parsing of a JSON.stringified date will ","*",(0,a.kt)("strong",{parentName:"p"},"not"),"*"," return you to a JavaScript Date but rather an ISO 8601 date string which will need to be subsequently converted into a Date. Not JSON's fault - essentially down to the absence of a Date literal within JavaScript. ## Making JavaScriptSerializer behave more JSON'y"),(0,a.kt)("p",null,"Anyway, I didn't think there was anything I could really do about this in an ASP.NET classic / WebForms world because, to my knowledge, it is not possible to swap out the serialiser that is used. JavaScriptSerializer is the only game in town. (Though I am optimistic about the future; given the announcement that I first picked up on Rick Strahl's blog that ",(0,a.kt)("a",i({parentName:"p"},{href:"http://www.west-wind.com/weblog/posts/2012/Mar/09/Using-an-alternate-JSON-Serializer-in-ASPNET-Web-API"}),"Json.NET was going to be adopted as the default JSON serializer for ASP.NET Web API"),"; what with Json.NET having out-of-the-box ",(0,a.kt)("a",i({parentName:"p"},{href:"http://james.newtonking.com/archive/2009/02/20/good-date-times-with-json-net.aspx"}),"ISO 8601 support"),". I digress...) Because it can make debugging a much more straightforward process I place a lot of value on being able to read the network traffic that web apps generate. It's much easier to drop into Fiddler / FireBug / Chrome dev tools etc and watch what's happening there and then instead of having to manually process the data separately first so that you can understand it. I think this is nicely aligned with the ",(0,a.kt)("a",i({parentName:"p"},{href:"http://en.wikipedia.org/wiki/KISS_principle"}),"KISS principle"),". For that reason I've been generally converting DateTimes to ISO 8601 strings on the server before returning them to the client. A bit of extra overhead but generally worth it for the gains in clarity in my opinion. So I was surprised and delighted when I happened upon ",(0,a.kt)("a",i({parentName:"p"},{href:"http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/"}),"Sebastian Markb\xe5ge's blog post")," which provided a DateTime JavaScriptConverter that could be plugged into the JavaScriptSerializer. You can see the code below (or on Sebastian's original post with a good explanation of how it works):"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Collections;\nusing System.Collections.Generic;\nusing System.Web.Script.Serialization;\n\nnamespace MyNamespace\n{\n  /// <summary>\n  /// A custom DateTime JavaScriptConverter courtesy of these good folks: http://blog.calyptus.eu/seb/2011/12/custom-datetime-json-serialization/\n  /// Using this forces DataTimes to be serialised as ISO 8601 rather "\\/Date(1249335477787)\\/" style\n  /// </summary>\n  public class DateTimeJavaScriptConverter : JavaScriptConverter\n  {\n    public override object Deserialize(IDictionary<string, object> dictionary, Type type, JavaScriptSerializer serializer)\n    {\n      return new JavaScriptSerializer().ConvertToType(dictionary, type);\n    }\n\n    public override IDictionary<string, object> Serialize(object obj, JavaScriptSerializer serializer)\n    {\n      if (!(obj is DateTime)) return null;\n      return new CustomString(((DateTime)obj).ToUniversalTime().ToString("O"));\n    }\n\n    public override IEnumerable<Type> SupportedTypes\n    {\n      get { return new[] { typeof(DateTime) }; }\n    }\n\n    private class CustomString : Uri, IDictionary<string, object>\n    {\n      public CustomString(string str)\n        : base(str, UriKind.Relative)\n      {\n      }\n\n      void IDictionary<string, object>.Add(string key, object value) { throw new NotImplementedException(); }\n      bool IDictionary<string, object>.ContainsKey(string key) { throw new NotImplementedException(); }\n      ICollection<string> IDictionary<string, object>.Keys { get { throw new NotImplementedException(); } }\n      bool IDictionary<string, object>.Remove(string key) { throw new NotImplementedException(); }\n      bool IDictionary<string, object>.TryGetValue(string key, out object value) { throw new NotImplementedException(); }\n      ICollection<object> IDictionary<string, object>.Values { get { throw new NotImplementedException(); } }\n      object IDictionary<string, object>.this[string key]\n      {\n        get { throw new NotImplementedException(); }\n        set { throw new NotImplementedException(); }\n      }\n      void ICollection<KeyValuePair<string, object>>.Add(KeyValuePair<string, object> item) { throw new NotImplementedException(); }\n      void ICollection<KeyValuePair<string, object>>.Clear() { throw new NotImplementedException(); }\n      bool ICollection<KeyValuePair<string, object>>.Contains(KeyValuePair<string, object> item) { throw new NotImplementedException(); }\n      void ICollection<KeyValuePair<string, object>>.CopyTo(KeyValuePair<string, object>[] array, int arrayIndex) { throw new NotImplementedException(); }\n      int ICollection<KeyValuePair<string, object>>.Count { get { throw new NotImplementedException(); } }\n      bool ICollection<KeyValuePair<string, object>>.IsReadOnly { get { throw new NotImplementedException(); } }\n      bool ICollection<KeyValuePair<string, object>>.Remove(KeyValuePair<string, object> item) { throw new NotImplementedException(); }\n      IEnumerator<KeyValuePair<string, object>> IEnumerable<KeyValuePair<string, object>>.GetEnumerator() { throw new NotImplementedException(); }\n      IEnumerator IEnumerable.GetEnumerator() { throw new NotImplementedException(); }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Using this converter meant that a DateTime that previously would have been serialised as ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\/Date(1293840000000)\\/"')," would now be serialised as ",(0,a.kt)("inlineCode",{parentName:"p"},'"2011-01-01T00:00:00.0000000Z"')," instead. This is entirely agreeable because 1. it's entirely clear what a ",(0,a.kt)("inlineCode",{parentName:"p"},'"2011-01-01T00:00:00.0000000Z"')," style date represents and 2. this is more in line with native browser JSON implementations and ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;statingTheObvious&gt;"),"consistency is a good thing.",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;/statingTheObvious&gt;")),(0,a.kt)("h2",i({},{id:"getting-your-web-services-to-use-the-iso-8601-datetime-converter"}),"Getting your web services to use the ISO 8601 DateTime Converter"),(0,a.kt)("p",null,"Sebastian alluded in his post to a ",(0,a.kt)("inlineCode",{parentName:"p"},"web.config")," setting that could be used to get web services / pagemethods etc. implementing his custom DateTime serialiser. This is it:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-xml"}),'<configuration>\n  <system.web.extensions>\n    <scripting>\n      <webServices>\n        \x3c!--\n          This line of config means that when a JavaScriptSerializer is used by a web service / page method\n          it will automatically register the DateTimeJavaScriptConverter to use.  To use the converter directly in code you would need to enter the below:\n\n          var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();\n          serializer.RegisterConverters(new JavaScriptConverter[] { new DateTimeJavaScriptConverter() });\n\n        --\x3e\n        <jsonSerialization>\n          <converters>\n            <add name="DateTimeJavaScriptConverter" type="MyNamespace.DateTimeJavaScriptConverter"/>\n          </converters>\n        </jsonSerialization>\n\n      </webServices>\n      <scriptResourceHandler enableCompression="false" enableCaching="true"/>\n    </scripting>\n  </system.web.extensions>\n</configuration>\n')),(0,a.kt)("p",null,"With this in place your web services / page methods will happily be able to serialise / deserialise ISO style date strings to your hearts content. ## What no ISO 8601 date string Date constructor?"),(0,a.kt)("p",null,"As I mentioned earlier, Sebastian's solution didn't get me 100% of the way there. There was still a fly in the ointment in the form of IE 8. Unfortunately IE 8 doesn't have JavaScript ",(0,a.kt)("a",i({parentName:"p"},{href:"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/parse"}),"Date constructor that takes ISO 8601 date strings"),". This lead me to using Nathan Vonnahme's ISO 8601 JavaScript Date parser, the code of which is below (or see his original post ",(0,a.kt)("a",i({parentName:"p"},{href:"http://n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/"}),"here"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-js"}),'//===============================================================================\n// Parse ISO 8601 Date Format date string and return a date - equivalent to https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/parse\n// Found here: n8v.enteuxis.org/2010/12/parsing-iso-8601-dates-in-javascript/\n//===============================================================================\nfunction parseISO8601Date(s) {\n  // parenthese matches:\n  // year month day    hours minutes seconds\n  // dotmilliseconds\n  // tzstring plusminus hours minutes\n  var re =\n    /(\\d{4})-(\\d\\d)-(\\d\\d)T(\\d\\d):(\\d\\d):(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d):(\\d\\d))/;\n\n  var d = [];\n  d = s.match(re);\n\n  // "2010-12-07T11:00:00.000-09:00" parses to:\n  //  ["2010-12-07T11:00:00.000-09:00", "2010", "12", "07", "11",\n  //     "00", "00", ".000", "-09:00", "-", "09", "00"]\n  // "2010-12-07T11:00:00.000Z" parses to:\n  //  ["2010-12-07T11:00:00.000Z",      "2010", "12", "07", "11",\n  //     "00", "00", ".000", "Z", undefined, undefined, undefined]\n\n  if (!d) {\n    throw "Couldn\'t parse ISO 8601 date string \'" + s + "\'";\n  }\n\n  // parse strings, leading zeros into proper ints\n  var a = [1, 2, 3, 4, 5, 6, 10, 11];\n  for (var i in a) {\n    d[a[i]] = parseInt(d[a[i]], 10);\n  }\n  d[7] = parseFloat(d[7]);\n\n  // Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])\n  // note that month is 0-11, not 1-12\n  // see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/UTC\n  var ms = Date.UTC(d[1], d[2] - 1, d[3], d[4], d[5], d[6]);\n\n  // if there are milliseconds, add them\n  if (d[7] > 0) {\n    ms += Math.round(d[7] * 1000);\n  }\n\n  // if there\'s a timezone, calculate it\n  if (d[8] != \'Z\' && d[10]) {\n    var offset = d[10] * 60 * 60 * 1000;\n    if (d[11]) {\n      offset += d[11] * 60 * 1000;\n    }\n    if (d[9] == \'-\') {\n      ms -= offset;\n    } else {\n      ms += offset;\n    }\n  }\n\n  return new Date(ms);\n}\n')),(0,a.kt)("p",null,"With this in place I could parse ISO 8601 Dates just like anyone else. Great stuff. ",(0,a.kt)("inlineCode",{parentName:"p"},'parseISO8601Date("2011-01-01T00:00:00.0000000Z")')," would give me a JavaScript Date of ",(0,a.kt)("inlineCode",{parentName:"p"},"Sat Jan 1 00:00:00 UTC 2011"),". Obviously in the fullness of time the parseISO8601Date solution should no longer be necessary because ",(0,a.kt)("a",i({parentName:"p"},{href:"http://es5.github.com/#x15.9.3.2"}),"EcmaScript 5 specifies an ISO 8601 date string constructor"),". However, in the interim Nathan's solution is a lifesaver. Thanks again both to Sebastian Markb\xe5ge and Nathan Vonnahme who have both generously allowed me use their work as the basis for this post. ## PS And it would have worked if it wasn't for that pesky IE 9..."),(0,a.kt)("p",null,"Subsequent to writing this post I thought I'd check that IE 9 had implemented a JavaScript Date constructor that would process an ISO 8601 date string like this: ",(0,a.kt)("inlineCode",{parentName:"p"},'new Date("2011-01-01T00:00:00.0000000Z")'),". It hasn't. Take a look:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(22170).Z,width:"320",height:"86"})),(0,a.kt)("p",null,"This is slightly galling as the above code works dandy in Firefox and Chrome. As you can see from the screenshot you can get the JavaScript IE 9 Date constructor to play nice by trimming off the final 4 \"0\"'s from the string. Frustrating. Obviously we can still use Nathan's solution but it's a shame that we can't use the native support. Based on what I've read ",(0,a.kt)("a",i({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/library/az4se3k1.aspx#Roundtrip"}),"here")," I think it would be possible to amend Sebastians serializer to fall in line with IE 9's pendantry by changing this:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cs"}),'return new CustomString(((DateTime)obj).ToUniversalTime()\n  .ToString(<b>"O"</b>)\n);\n')),(0,a.kt)("p",null,"To this:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-cs"}),"return new CustomString(((DateTime)obj).ToUniversalTime()\n  .ToString(<b>\"yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffzzz\"</b>)\n);\n")),(0,a.kt)("p",null,"I've held off from doing this myself as I rather like Sebastian's idea of being able to use Microsoft's Round-trip (\"O\", \"o\") Format Specifier. And it seems perverse that we should have to move away from using Microsoft's Round-trip Format Specifier purely because of (Microsoft's) IE! But it's a possibility to consider and so I put it out there. I would hope that MS will improve their JavaScript Date constructor with IE 10. A missed opportunity if they don't I think. ## PPS Just when you thought is over... IE 9 was right!"),(0,a.kt)("p",null,"Sebastian got in contact after I first published this post and generously pointed out that, contrary to my expectation, IE 9 technically had the correct implementation. According to the ",(0,a.kt)("a",i({parentName:"p"},{href:"http://es5.github.com/#x15.9.1.15"}),"EMCAScript standard")," the Date constructor should not allow more than millisecond precision. In this case, Chrome and Firefox are being less strict - not more correct. On reflection this does rather make sense as the result of a ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.stringify(new Date())"),' never results in an ISO date string to the 10 millionths of a second detail. Sebastian has himself stopped using Microsoft\'s Round-trip ("O", "o") Format Specifier in favour of this format string: ```cs\nreturn new CustomString(((DateTime)obj).ToUniversalTime()'),(0,a.kt)("p",null,".ToString(",(0,a.kt)("b",null,'"yyyy-MM-ddTHH:mm:ss.fffZ"'),")"),(0,a.kt)("p",null,");"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{}),"\n This results in date strings that comply perfectly with the ECMAScript spec. I suspect I'll switch to using this also now. Though I'll probably leave the first part of the post intact as I think the background remains interesting. Thanks again Sebastian!\n")))}u.isMDXComponent=!0},76705:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/FireBug-Dates-12e5f5715cbb23911a5101410ce12521.webp"},22170:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/IE9-screenshot-3392aa8eaaddfbef70b519098f51fb71.webp"}}]);