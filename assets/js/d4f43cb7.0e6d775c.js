"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[56572],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,m=h["".concat(u,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35624:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Creating Angular UI Routes in the Controller",authors:"johnnyreilly",tags:["ng-href","UI Router","Angular","ui-sref"],hide_table_of_contents:!1},u=void 0,s={permalink:"/2016/02/29/creating-angular-ui-routes-in-controller",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2016-02-29-creating-angular-ui-routes-in-controller/index.md",source:"@site/blog/2016-02-29-creating-angular-ui-routes-in-controller/index.md",title:"Creating Angular UI Routes in the Controller",description:"So you're creating a link with the Angular UI Router. You're passing more than a few parameters and it's getting kinda big. Something like this:",date:"2016-02-29T00:00:00.000Z",formattedDate:"February 29, 2016",tags:[{label:"ng-href",permalink:"/tags/ng-href"},{label:"UI Router",permalink:"/tags/ui-router"},{label:"Angular",permalink:"/tags/angular"},{label:"ui-sref",permalink:"/tags/ui-sref"}],readingTime:1.865,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Creating Angular UI Routes in the Controller",authors:"johnnyreilly",tags:["ng-href","UI Router","Angular","ui-sref"],hide_table_of_contents:!1},prevItem:{title:"TFS 2012 meet PowerShell, Karma and BuildNumber",permalink:"/2016/03/04/tfs-2012-meet-powershell-karma-and-buildnumber"},nextItem:{title:"Visual Studio, tsconfig.json and external TypeScript compilation",permalink:"/2016/02/19/visual-studio-tsconfigjson-and-external"}},c={authorsImageUrls:[void 0]},p=[{value:"<code>ui-sref</code> in the Controller",id:"ui-sref-in-the-controller",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So you're creating a link with the Angular UI Router. You're passing more than a few parameters and it's getting kinda big. Something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<a class="contains-icon"\n      ui-sref="Entity.Edit({ entityId: (vm.selectedEntityId ? vm.selectedEntityId: null), initialData: vm.initialData })">\n        <i class="fa fa-pencil"></i>Edit\n   </a>\n')),(0,i.kt)("p",null,"See? It's too long to fit on the screen without wrapping. It's clearly mad and bad."),(0,i.kt)("p",null,"Generally I try to keep the logic in a view to a minimum. It makes the view harder to read, it makes behaviour of the app harder to reason about. Also, it's not testable and (if you're using some kind of static typing like TypeScript) it is entirely out of the realms that a compiler can catch. So what to do? Move the URL generation to the controller. That's what I decided to do after I had a typo in my view which I didn't catch until post-commit."),(0,i.kt)("h2",{id:"ui-sref-in-the-controller"},(0,i.kt)("inlineCode",{parentName:"h2"},"ui-sref")," in the Controller"),(0,i.kt)("p",null,"Actually, that's not exactly what you want to do. If you look at the ",(0,i.kt)("a",{parentName:"p",href:"http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-sref"},"Angular UI Router docs")," you will see that ",(0,i.kt)("inlineCode",{parentName:"p"},"ui-sref")," is:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"...a directive that binds a link (",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;a&gt;")," tag) to a state. If the state has an associated URL, the directive will automatically generate & update the href attribute via the ",(0,i.kt)("a",{parentName:"p",href:"http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state#methods_href"},(0,i.kt)("inlineCode",{parentName:"a"},"$state.href()"))," method.")),(0,i.kt)("p",null,"So what we actually want to do is use the ",(0,i.kt)("inlineCode",{parentName:"p"},"$state.href()")," method in our controller. To take our example above we'll create another method on our controller called ",(0,i.kt)("inlineCode",{parentName:"p"},"getEditUrl")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export class EntityController {\n  $state: angular.ui.IStateService;\n\n  static $inject = ['$state'];\n  constructor($state: angular.ui.IStateService) {\n    this.$state = $state;\n  }\n\n  //... Other stuff\n\n  getEditUrl() {\n    return this.$state.href('Entity.Edit', {\n      selectedEntityId: this.selectedEntityId ? this.selectedEntityId : null,\n      initialData: this.initialData,\n    });\n  }\n}\n")),(0,i.kt)("p",null,"You can see I'm using TypeScript here; but feel free to strip out the type annotations and go with raw ES6 classes; that'll still give you testability if not static typing."),(0,i.kt)("p",null,"Now we've added the ",(0,i.kt)("inlineCode",{parentName:"p"},"getEditUrl")," method we just need to reference it in our view:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<a class="contains-icon" ng-href="{{vm.getEditUrl()}}"><i class="fa fa-pencil"></i>Edit</a>\n')),(0,i.kt)("p",null,"Note we've ditched usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ui-sref")," directive and gone with Angular's native ",(0,i.kt)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/directive/ngHref"},(0,i.kt)("inlineCode",{parentName:"a"},"ng-href")),". Within that directive we execute our ",(0,i.kt)("inlineCode",{parentName:"p"},"getEditUrl")," as an expression which gives us our route. As a bonus, our view is much less cluttered and comprehensible as a result. How lovely."))}d.isMDXComponent=!0}}]);