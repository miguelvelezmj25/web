(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(1),l=n(16),i=n(3),a=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"/~mvelezce",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=s.NODE_ENV,j=s.REACT_APP_GA_TRACKING_ID;"production"===r&&a.a.initialize(j);var o=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},b=n(5),u=n(22),d=[{index:!0,label:"Michael D'Angelo",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],h=n(0),O=Object(c.lazy)((function(){return n.e(5).then(n.t.bind(null,172,7))})),m=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(h.jsxs)("div",{className:"hamburger-container",children:[Object(h.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(h.jsx)("ul",{children:n?Object(h.jsx)("li",{className:"menu close-menu",children:Object(h.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(h.jsx)("li",{className:"menu open-menu",children:Object(h.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(h.Fragment,{}),children:Object(h.jsx)(O,{right:!0,isOpen:n,children:Object(h.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:e.path,onClick:function(){return l(!n)},children:Object(h.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(h.jsxs)("header",{id:"header",children:[Object(h.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(h.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(h.jsx)("nav",{className:"links",children:Object(h.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(h.jsx)(m,{})]})},p=n(25),f=function(){return Object(h.jsxs)("section",{id:"sidebar",children:[Object(h.jsxs)("section",{id:"intro",children:[Object(h.jsx)(b.b,{to:"/",className:"logo",children:Object(h.jsx)("img",{src:"".concat("/~mvelezce","/images/miguelvelez.jpeg"),alt:""})}),Object(h.jsxs)("header",{children:[Object(h.jsx)("h2",{children:"Miguel Velez"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"mailto:mvelezce@cs.cmu.edu",children:"mvelezce@cs.cmu.edu"})})]})]}),Object(h.jsxs)("section",{className:"blurb",children:[Object(h.jsx)("h2",{children:"About"}),Object(h.jsx)("p",{children:"Hi, I'm Miguel."}),Object(h.jsx)("ul",{className:"actions",children:Object(h.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(h.jsx)(b.b,{to:"/about",className:"button",children:"About Me"}):Object(h.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(h.jsxs)("section",{id:"footer",children:[Object(h.jsx)(p.a,{}),Object(h.jsxs)("p",{className:"copyright",children:["\xa9 Miguel Velez ",Object(h.jsx)(b.b,{to:"/",children:"www.cs.cmu.edu/~mvelezce/"}),"."]})]})]})},g=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(h.jsxs)(l.b,{children:[Object(h.jsx)(o,{}),Object(h.jsx)(g,{}),Object(h.jsxs)(l.a,{titleTemplate:"%s | Michael D'Angelo",defaultTitle:"Michael D'Angelo",defer:!1,children:[e.title&&Object(h.jsx)("title",{children:e.title}),Object(h.jsx)("meta",{name:"description",content:e.description})]}),Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(x,{}),Object(h.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(h.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Michael D'Angelo's personal website."};t.a=v},25:function(e,t,n){"use strict";n(1);var c=n(29),l=n(30),i=n(31),a=n(32),s=n(33),r=n(34),j=n(35),o=n(36),b=[{link:"https://github.com/mldangelo",label:"Github",icon:l.faGithub},{link:"https://facebook.com/md",label:"Facebook",icon:i.faFacebookF},{link:"https://www.instagram.com/dangelosaurus/",label:"Instagram",icon:a.faInstagram},{link:"https://www.linkedin.com/in/michaelldangelo",label:"LinkedIn",icon:s.faLinkedinIn},{link:"https://angel.co/michael-d-angelo",label:"Angel List",icon:r.faAngellist},{link:"https://twitter.com/dangelosaurus",label:"Twitter",icon:j.faTwitter},{link:"mailto:michael.l.dangelo@gmail.com",label:"Email",icon:o.faEnvelope}],u=n(0);t.a=function(){return Object(u.jsx)("ul",{className:"icons",children:b.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.link,children:Object(u.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n.n(c),i=n(15),a=n(5),s=n(3),r=n(21),j=(n(49),n(0)),o=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,169))})),b=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,176))})),u=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,170))})),d=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,171))})),h=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,175))})),O=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,173))})),m=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,174))})),x=function(){return Object(j.jsx)(a.a,{basename:"/~mvelezce",children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(r.a,{}),children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(s.a,{path:"/about",component:o}),Object(j.jsx)(s.a,{path:"/projects",component:h}),Object(j.jsx)(s.a,{path:"/stats",component:m}),Object(j.jsx)(s.a,{path:"/contact",component:b}),Object(j.jsx)(s.a,{path:"/resume",component:O}),Object(j.jsx)(s.a,{component:d,status:404})]})})})},p=function(){return Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(i.hydrate)(Object(j.jsx)(p,{}),f):Object(i.render)(Object(j.jsx)(p,{}),f)}},[[50,1,3]]]);
//# sourceMappingURL=main.5adcf66f.chunk.js.map