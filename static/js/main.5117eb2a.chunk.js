(this.webpackJsonprumble=this.webpackJsonprumble||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var l=n(1),c=n.n(l),o=n(3),s=n.n(o),i=(n(9),n(4)),a=(n(10),n(0)),d=function(){var e=Object(l.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("div",{id:"content",children:[Object(a.jsx)("h1",{id:"title",children:"Rumble - To do list"}),Object(a.jsxs)("div",{id:"box",children:[Object(a.jsxs)("div",{id:"task",children:[Object(a.jsx)("input",{type:"text",placeholder:"Add a task...",id:"question",required:!0,maxLength:"50",noValidate:!0,value:n,onChange:function(e){c(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&document.getElementById("add").click()}}),Object(a.jsx)("button",{id:"add",onClick:function(){var e=document.createElement("li");e.innerHTML="<label><input type='checkbox' class='check todo'>&nbsp;&nbsp;<span id=\"tasks\">".concat(n,"</span>  </label> <span class='delete'>X</span>"),""!==n&&(document.getElementById("list").appendChild(e),c(""))},children:"+"})]}),Object(a.jsxs)("div",{id:"category",children:[Object(a.jsx)("button",{id:"all",className:"hover",autoFocus:!0,onClick:function(){for(var e=document.querySelectorAll(".check"),t=0;t<e.length;t++)(e[t].classList.contains("todo")||e[t].classList.contains("completed"))&&(e[t].parentElement.parentElement.style.display="block")},children:" All"}),Object(a.jsx)("button",{id:"todo",className:"hover",onClick:function(){for(var e=document.querySelectorAll(".check"),t=0;t<e.length;t++)e[t].classList.contains("todo")?e[t].parentElement.parentElement.style.display="block":e[t].parentElement.parentElement.style.display="none"},children:"To-do "}),Object(a.jsx)("button",{id:"completed",className:"hover",onClick:function(){for(var e=document.querySelectorAll(".check"),t=0;t<e.length;t++)e[t].classList.contains("completed")?e[t].parentElement.parentElement.style.display="block":e[t].parentElement.parentElement.style.display="none"},children:"Completed"})]}),Object(a.jsx)("ul",{id:"list",onClick:function(){for(var e=document.querySelectorAll(".check"),t=document.querySelectorAll(".delete"),n=document.getElementById("tasks"),l=0;l<e.length;l++)e[l].onclick=function(){!0===this.checked?(n.style.textDecoration="line-through",this.parentElement.style.color="#606368",this.classList.remove("todo"),this.classList.add("completed")):(n.style.textDecoration="none",this.parentElement.style.color="#A1A1A1",this.classList.remove("completed"),this.classList.add("todo"))};for(var c=0;c<t.length;c++)t[c].onclick=function(){this.parentElement.parentElement.removeChild(this.parentElement)}}})]})]})},r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,l=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),l(e),c(e),o(e),s(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),r()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.5117eb2a.chunk.js.map