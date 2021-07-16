(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{56:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n,s=c(1),a=c(47),r=c.n(a),i=(c(56),c(23)),j=c(2),o=c(12),l=c(0),b=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(o.a)(a,2),j=r[0],b=r[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Join"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{placeholder:"Name",className:"",type:"text",value:c,onChange:function(e){return n(e.target.value)},required:!0})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{placeholder:"Room",className:"",type:"text",value:j,onChange:function(e){return b(e.target.value)},required:!0})}),Object(l.jsx)(i.b,{onClick:function(e){return c&&j?null:e.preventDefault()},to:"/chat?name=".concat(c,"&room=").concat(j),children:Object(l.jsx)("button",{className:"button",type:"submit",children:"Sign In"})})]})})},u=c(51),O=c(49),d=c.n(O),h=c(50),A=c.n(h),x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII=",m=function(e){var t=e.room;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{alt:"online",src:x}),Object(l.jsx)("h3",{children:t})]}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close"})})})]})},p=function(e){var t=e.message,c=e.setMessage,n=e.sendMessage;return Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",value:t,placeholder:"type message",onChange:function(e){return c(e.target.value)}}),Object(l.jsx)("button",{className:"",onClick:function(e){return n(e)},children:"Send"})]})},g=c(30),v=c.n(g),f=function(e){var t=e.message,c=t.user,n=t.text,s=!1,a=e.name.trim().toLowerCase();return c===a&&(s=!0),Object(l.jsx)("div",{children:s?Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:a}),Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:v.a.emojify(n)})})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:v.a.emojify(n)})}),Object(l.jsx)("p",{children:a})]})})},C=function(e){var t=e.messages,c=e.name;return Object(l.jsx)("div",{children:t&&t.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(f,{message:e,name:c})})}))})},S=function(e){var t=e.users;return Object(l.jsxs)("div",{className:"textContainer",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Realtime Chat Application"," ",Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\ud83d\udcac"})]}),Object(l.jsxs)("h2",{children:["Created with React, Express, Node and Socket.IO"," ",Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\u2764\ufe0f"})]}),Object(l.jsxs)("h2",{children:["Try it out right now!"," ",Object(l.jsx)("span",{role:"img","aria-label":"emoji",children:"\u2b05\ufe0f"})]})]}),t?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"People currently chatting:"}),Object(l.jsx)("div",{className:"activeContainer",children:Object(l.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(l.jsxs)("div",{className:"activeItem",children:[t,Object(l.jsx)("img",{alt:"Online Icon",src:x})]},t)}))})})]}):null]})},I=function(e){var t=e.location,c=Object(s.useState)(""),a=Object(o.a)(c,2),r=a[0],i=a[1],j=Object(s.useState)(""),b=Object(o.a)(j,2),O=b[0],h=b[1],x=Object(s.useState)(""),g=Object(o.a)(x,2),v=g[0],f=g[1],I=Object(s.useState)(""),N=Object(o.a)(I,2),R=N[0],y=N[1],w=Object(s.useState)(""),E=Object(o.a)(w,2),M=E[0],U=E[1],Q="https://chat-app-11111.herokuapp.com/";Object(s.useEffect)((function(){var e=d.a.parse(t.search),c=e.name,s=e.room;n=A()(Q),i(c),h(s),n.emit("join",{name:c,room:s},(function(e){e&&alert(e)}))}),[Q,t.search]),Object(s.useEffect)((function(){n.on("message",(function(e){y([].concat(Object(u.a)(R),[e]))})),n.on("roomData",(function(e){var t=e.users;U(t)}))}),[R]);return console.log(v,R),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{room:O}),Object(l.jsx)(C,{messages:R,name:r}),Object(l.jsx)(p,{message:v,setMessage:f,sendMessage:function(e){e.preventDefault(),v&&n.emit("sendMessage",v,(function(){return f("")}))}})]}),Object(l.jsx)(S,{users:M})]})},N=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(j.a,{path:"/chat",component:I})]})};r.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.16d16ec4.chunk.js.map