(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{102:function(e,t,r){},103:function(e,t,r){},130:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(87),s=r.n(c),i=(r(102),r(147)),o=r(6),l=(r(103),r(139)),j=r(140),b=r(141),d=r.p+"static/media/straw_hat.11d9b5e3.png",m=r(149),p=r(34),h=r(2),u=Object(o.f)((function(e){var t=e.itemName,r=e.routeUrl,n=e.location;return Object(h.jsx)(p.b,{to:r,children:Object(h.jsx)(m.a,{marginLeft:4,colorScheme:"twitter",variant:n.pathname===r?"outline":"solid",children:t})})})),x=[{page:"Blogs",routeUrl:"/blogs"},{page:"Projects",routeUrl:"/projects"},{page:"Resume",routeUrl:"/resume"}],f=function(){return Object(h.jsxs)(l.a,{justifyContent:{base:"center",md:"space-between"},flexWrap:"wrap",children:[Object(h.jsx)(l.a,{children:Object(h.jsx)(p.b,{to:"/",children:Object(h.jsxs)(l.a,{align:"center",border:"1px solid",borderColor:"twitter.500",paddingRight:"8px",borderRadius:"10px",marginBottom:{base:"12px",md:"0"},children:[Object(h.jsx)(j.a,{src:d,bg:"white",name:"Shubham Tarade"}),Object(h.jsx)(b.a,{size:"md",color:"twitter.500",children:"Shubham Tarade"})]})})}),Object(h.jsx)(l.a,{align:"center",children:x.map((function(e){return Object(h.jsx)(u,{itemName:e.page,routeUrl:e.routeUrl},e.page)}))})]})},g=r(145),O=r(151),v=r(142),S=r(143),y=r.p+"static/media/shubham_profile.0a76bded.jpg",w=function(){return Object(h.jsxs)(O.a,{templateColumns:{base:"1fr",md:"2fr 2fr",lg:"1fr 3fr"},mt:10,p:4,gridColumnGap:10,textAlign:{base:"center",md:"inherit"},children:[Object(h.jsx)(O.b,{alignSelf:"center",children:Object(h.jsx)(v.a,{src:y,borderRadius:"full",alt:"Shubham Tarade",height:{}})}),Object(h.jsxs)(O.b,{paddingTop:"30px",alignSelf:"center",children:[Object(h.jsx)(S.a,{fontSize:"2xl",fontWeight:"bold",children:"Hello !"}),Object(h.jsx)(S.a,{fontSize:"2xl",fontWeight:"bold",color:"twitter.500",children:"I am Shubham Tarade"}),Object(h.jsx)("br",{}),Object(h.jsx)(S.a,{fontSize:"lg",children:"Passionate and creative front-end software engineer from India"}),Object(h.jsx)("br",{}),Object(h.jsx)(S.a,{fontSize:"lg",children:"I'm currently a software engineer at Siemens Advanta."}),Object(h.jsx)("br",{}),Object(h.jsx)(S.a,{fontSize:"lg",children:"I consider myself a curious and inquisitive person, so on my spare time I like to work on side projects and try to constantly learn something new to improve my skillset."})]})]})},k=r(144),_=function(e){var t=e.tag,r=e.colorScheme;return Object(h.jsx)(k.a,{size:"lg",borderRadius:"base",height:"40px",cursor:"pointer",justifyContent:"center",colorScheme:r,variant:"outline",_hover:{transform:"translateX(2px)",transition:"all .2s"},children:t})},C=[{name:"ReactJS",colorScheme:"blue"},{name:"JavaScript",colorScheme:"teal"},{name:"TypeScript",colorScheme:"cyan"},{name:"HTML5",colorScheme:"purple"},{name:"CSS3",colorScheme:"red"},{name:"C# .NET",colorScheme:"messenger"},{name:"CI/CD",colorScheme:"linkedin"},{name:"Cypress",colorScheme:"blue"},{name:"Git",colorScheme:"gray"},{name:"NUnit",colorScheme:"telegram"}],I=function(){return Object(h.jsxs)(g.a,{p:4,children:[Object(h.jsx)(S.a,{fontSize:"lg",fontWeight:"bold",children:"Skills:"}),Object(h.jsx)("br",{}),Object(h.jsx)(O.a,{templateColumns:{base:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(6, 1fr)"},gap:3,children:C.map((function(e){return Object(h.jsx)(_,{tag:e.name,colorScheme:e.colorScheme},e.name)}))})]})},U=r.p+"static/media/iconmonstr-github-3.197212f0.svg",z=r.p+"static/media/iconmonstr-linkedin-3.b433372e.svg",R=r.p+"static/media/iconmonstr-twitter-3.b9a1f3fd.svg",T=r.p+"static/media/iconmonstr-medium-3.e14f5e39.svg",W=function(e){var t=e.socialUrl,r=e.svgIcon;return Object(h.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(h.jsx)(v.a,{src:r,w:"50px",h:"50px",_hover:{transform:"translateY(-2px)",transition:"all .2s"}})})},A=[{name:"github",socialUrl:"https://github.com/coder-shanks",svgIcon:U},{name:"linkedin",socialUrl:"https://www.linkedin.com/in/shubham-tarade/",svgIcon:z},{name:"twitter",socialUrl:"https://twitter.com/tarade_shubham",svgIcon:R},{name:"medium",socialUrl:"https://medium.com/@sgstarade",svgIcon:T}],M=function(){return Object(h.jsxs)(g.a,{p:4,children:[Object(h.jsx)(S.a,{fontSize:"lg",fontWeight:"bold",children:"You can find me on:"}),Object(h.jsx)("br",{}),Object(h.jsx)(l.a,{maxW:"240px",justify:"space-between",children:A.map((function(e){return Object(h.jsx)(W,{socialUrl:e.socialUrl,svgIcon:e.svgIcon},e.name)}))})]})},B=function(){return Object(h.jsxs)(g.a,{children:[Object(h.jsx)(w,{}),Object(h.jsx)(M,{}),Object(h.jsx)(I,{})]})},J=r(53),N=r(54),Y=r(60),D=r(59),G=r(55),L=r.n(G),E=r(150),H=function(e){Object(Y.a)(r,e);var t=Object(D.a)(r);function r(){var e;Object(J.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={blogs:[]},e}return Object(N.a)(r,[{key:"componentDidMount",value:function(){var e=this;try{L.a.get("https://fullyunderstood.com/wp-json/wp/v2/posts?author=2&per_page=100&_embed").then((function(t){200===t.status&&t.data&&e.setState({blogs:t.data})}))}catch(t){}}},{key:"render",value:function(){var e=this.state.blogs;return Object(h.jsx)(O.a,{mt:10,p:4,templateColumns:{base:"1fr",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},gap:3,children:e.length?e.map((function(e){var t=e.id,r=(e.date,e.title.rendered),n=e.link,a=e._embedded;return Object(h.jsx)(g.a,{as:"a",m:2,href:n,target:"_blank",rel:"noreferrer",position:"relative",_hover:{transform:"translateY(-2px)",transition:"all .2s"},children:Object(h.jsx)(v.a,{src:a["wp:featuredmedia"][0].link,alt:r,borderRadius:"base"})},t)})):Object(h.jsx)(E.a,{})})}}]),r}(a.a.Component),P=r(93),q=function(e){var t=e.name,r=e.description;return Object(h.jsxs)(O.b,{alignSelf:"start",children:[Object(h.jsx)(b.a,{fontSize:{base:"14px",md:"16px",lg:"18px"},paddingBottom:"2px",children:t}),Object(h.jsx)(S.a,{fontSize:{base:"10px",md:"12px",lg:"13px"},children:r})]})},X=r(43),F=r(146),K=r(70),Q=function(e){var t=e.projectMeta,r=t.language,n=t.stargazers_count,a=t.forks_count,c=t.html_url,s=t.homepage;return Object(h.jsx)(O.b,{alignSelf:"end",children:Object(h.jsxs)(O.a,{templateColumns:"2.4fr 1.6fr",children:[Object(h.jsxs)(O.b,{children:[null!=r?Object(h.jsx)(F.a,{marginRight:"4px",children:r}):null,n>=0?Object(h.jsxs)("span",{style:{marginRight:"4px"},children:[Object(h.jsx)(K.b,{as:X.d}),n]}):null,a>=0?Object(h.jsxs)("span",{style:{marginRight:"4px"},children:[Object(h.jsx)(K.b,{as:X.c}),a]}):null]}),Object(h.jsxs)(O.b,{justifySelf:"end",children:[Object(h.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(h.jsx)(K.b,{as:X.b})}),s?Object(h.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",style:{marginLeft:"6px"},children:Object(h.jsx)(K.b,{as:X.a})}):null]})]})})},V=function(e){var t=e.project,r=t.name,n=t.description,a=Object(P.a)(t,["name","description"]);return Object(h.jsxs)(O.a,{padding:"8px",cursor:"pointer",color:"white",borderRadius:"base",bgGradient:"linear-gradient(135deg, rgba(38,159,233,1) 30%, rgba(11,86,170,1) 87%)",_hover:{transform:"translateY(-2px)",transition:"all .2s"},height:{base:"135px",md:"123px"},children:[Object(h.jsx)(q,{name:r,description:n}),Object(h.jsx)(Q,{projectMeta:a})]})},Z=function(e){Object(Y.a)(r,e);var t=Object(D.a)(r);function r(){var e;Object(J.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={projects:[]},e}return Object(N.a)(r,[{key:"componentDidMount",value:function(){var e=this;try{L.a.get("https://api.github.com/users/coder-shanks/repos?sort=updated&direction=desc",{headers:{Accept:"application/vnd.github.v3+json"}}).then((function(t){200===t.status&&t.data&&e.setState({projects:t.data})}))}catch(t){}}},{key:"render",value:function(){var e=this.state.projects;return Object(h.jsx)(O.a,{mt:10,p:4,templateColumns:{base:"1fr",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},gap:3,children:e.length?e.map((function(e){return Object(h.jsx)(V,{project:e},e.id)})):Object(h.jsx)(E.a,{})})}}]),r}(a.a.Component);var $=function(){return Object(h.jsxs)(i.a,{maxW:"container.xl",pt:5,children:[Object(h.jsx)(f,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:B}),Object(h.jsx)(o.a,{path:"/blogs",component:H}),Object(h.jsx)(o.a,{path:"/projects",component:Z}),Object(h.jsx)(o.a,{path:"/resume",children:Object(h.jsx)("h1",{children:"Resume page"})})]})]})},ee=r(148);s.a.render(Object(h.jsx)(p.a,{children:Object(h.jsx)(ee.a,{children:Object(h.jsx)($,{})})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.90d3c94c.chunk.js.map