(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),j=c(5),r=c(2),l=c(1),a=function(){return Object(l.jsx)("div",{className:"home_page",children:Object(l.jsx)("h1",{children:"Home Page"})})},i=c(4),b=c(0),o=(c(8),function(e){var t=e.person;return Object(l.jsxs)("tr",{className:"Person",children:[Object(l.jsx)("td",{children:t.name}),Object(l.jsx)("td",{children:t.sex}),Object(l.jsx)("td",{children:t.born}),Object(l.jsx)("td",{children:t.died}),Object(l.jsx)("td",{children:t.motherName}),Object(l.jsx)("td",{children:t.fatherName})]})}),h=function(e){var t=e.people;return Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(o,{person:e},e.slug)}))})]})},d=function(){var e=Object(b.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(b.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),Object(l.jsxs)("div",{className:"people_page",children:[Object(l.jsx)("h1",{children:"People Page"}),Object(l.jsx)(h,{people:c})]})},O=function(){return Object(l.jsx)("div",{className:"not_found_page",children:Object(l.jsx)("h1",{children:"Not found"})})},x=(c(15),function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("nav",{className:"navigation",children:[Object(l.jsx)(j.b,{to:"/",className:"link",style:function(e){return{display:"block",color:e.isActive?"blue":""}},children:"Home Page"}),Object(l.jsx)(j.b,{to:"/PeoplePage",className:"link",style:function(e){return{display:"block",color:e.isActive?"blue":""}},children:"People Page"})]}),Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{path:"/",element:Object(l.jsx)(a,{})}),Object(l.jsx)(r.b,{path:"/PeoplePage",element:Object(l.jsx)(d,{})}),Object(l.jsx)(r.b,{path:"/*",element:Object(l.jsx)(O,{})}),Object(l.jsx)(r.b,{path:"/home",element:Object(l.jsx)(r.a,{to:"/"})})]})]})});s.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))},8:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.326c370d.chunk.js.map