(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),c=a(2),s=a(1),o=(a(14),a(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),l=a(9),u=a.n(l),d=a(0),m=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(d.jsxs)("article",{"data-id":a,className:u()("card has-background-white-ter","TodoInfo",{"TodoInfo--completed":i}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title card-header-title",children:n}),r&&Object(d.jsx)(m,{user:r})]})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e},e.id)}))})},h=a(7),f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}];function O(e){return o.find((function(t){return t.id===e}))||null}function p(){return f.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{user:O(e.userId)})}))}function x(e){if(0===e.length)return 1;var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(r.a)(t))+1}var v=function(){var e=Object(s.useState)(p),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(""),l=Object(c.a)(i,2),u=l[0],m=l[1],j=Object(s.useState)(0),h=Object(c.a)(j,2),f=h[0],v=h[1],y=Object(s.useState)(!1),N=Object(c.a)(y,2),S=N[0],g=N[1],I=Object(s.useState)(!1),C=Object(c.a)(I,2),T=C[0],_=C[1],k=function(){if(!u||!f)return g(!u),void _(!f);n((function(e){var t={id:x(a),title:u,completed:!1,userId:f,user:O(f)};return[].concat(Object(r.a)(e),[t])})),m(""),v(0),g(!1),_(!1)};return Object(d.jsxs)("div",{className:"App section content",children:[Object(d.jsx)("h1",{className:"title is-1",children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),k()},children:[Object(d.jsx)("div",{className:"field",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"text",placeholder:"Write your title",className:"input","data-cy":"titleInput",value:u,onChange:function(e){g(!1),m(e.currentTarget.value)}}),S&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(d.jsxs)("div",{className:"field select mr-2",children:[Object(d.jsxs)("select",{"data-cy":"userSelect",value:f,onChange:function(e){_(!1),v(+e.currentTarget.value)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),T&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit",className:"button mb-5","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)("section",{className:"TodoList",children:Object(d.jsx)(b,{todos:a})})]})};i.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.785e8540.chunk.js.map