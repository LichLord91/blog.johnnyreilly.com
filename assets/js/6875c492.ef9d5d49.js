"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[48610],{99703:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(67294),n=a(95999),r=a(32244);function s(e){var t=e.metadata,a=t.previousPage,s=t.nextPage;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(r.Z,{permalink:s,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},41714:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=a(67294),n=a(86010),r=a(95999),s=a(88824),o=a(10833),i=a(35281),g=a(39960),c=a(39058),m=a(66409),p=a(99703),u=a(90197);function d(e){var t,a=e.tag,d=e.items,h=e.sidebar,b=e.listMetadata,f=(t=(0,s.c)().selectMessage,function(e){return t(e,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(a.count),tagName:a.label});return l.createElement(o.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},l.createElement(o.d,{title:E}),l.createElement(u.Z,{tag:"blog_tags_posts"}),l.createElement(c.Z,{sidebar:h},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(g.Z,{href:a.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),d.map((function(e){var t=e.content;return l.createElement(m.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(p.Z,{metadata:b})))}}}]);