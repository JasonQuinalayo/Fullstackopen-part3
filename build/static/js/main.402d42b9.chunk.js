(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(15),c=t.n(r),a=t(3),o=t(2),u=t(6),i=t(4),s=t.n(i),d="/api/persons",l=function(){return s.a.get(d).then((function(e){return e.data}))},b=l,j=function(e){return l().then((function(n){if(n.find((function(n){return e.name===n.name})))throw new Error("".concat(e.name," already added to server"));return s.a.post(d,e).then((function(e){return e.data}))}))},h=function(e){return l().then((function(n){var t=n.find((function(n){return n.name===e}));return s.a.delete("".concat(d,"/").concat(t.id)).then((function(){return n.filter((function(e){return e.id!==t.id}))}))}))},f=function(e,n){return l().then((function(t){var r=t.find((function(n){return n.name===e}));if(!r)throw new Error("".concat(e," already deleted from server"));var c=Object(u.a)(Object(u.a)({},r),{},{number:n});return s.a.put("".concat(d,"/").concat(r.id),c).then((function(){var n=t.filter((function(n){return n.name!==e}));return n.push(c),n}))}))},m=t(0),O=function(e){var n=e.handler,t=e.value;return Object(m.jsxs)("div",{children:["filter shown by: ",Object(m.jsx)("input",{onChange:n,value:t})]})},v=function(e){var n=e.handleSubmit,t=e.handleNameChange,r=e.handleNumberChange,c=e.newName,a=e.newNumber;return Object(m.jsxs)("form",{onSubmit:n,children:[Object(m.jsxs)("div",{children:["name: ",Object(m.jsx)("input",{onChange:t,value:c}),Object(m.jsx)("br",{}),"number: ",Object(m.jsx)("input",{onChange:r,value:a})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var n=e.persons,t=e.newFilter,r=e.handleDelete;return Object(m.jsx)("table",{children:Object(m.jsx)("tbody",{children:n.filter((function(e){return e.name.toLowerCase().startsWith(t.toLowerCase())})).sort((function(e,n){return e.name<n.name?-1:e.name===n.name?0:1})).map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.number}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{id:e.name,onClick:r,children:"delete"})})]},e.id)}))})})},g=function(e){var n=e.color,t=e.message,r={color:n,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return Object(m.jsx)("h4",{style:r,children:t})},p=function(e){var n=e.message;return n?Object(m.jsx)(g,{color:"red",message:n}):Object(m.jsx)("div",{})},w=function(e){var n=e.message;return n?Object(m.jsx)(g,{color:"green",message:n}):Object(m.jsx)("div",{})},y=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(""),u=Object(a.a)(c,2),i=u[0],s=u[1],d=Object(o.useState)(""),l=Object(a.a)(d,2),g=l[0],y=l[1],S=Object(o.useState)(""),C=Object(a.a)(S,2),N=C[0],k=C[1],D=Object(o.useState)(""),E=Object(a.a)(D,2),B=E[0],F=E[1],J=Object(o.useState)(""),L=Object(a.a)(J,2),z=L[0],A=L[1];Object(o.useEffect)((function(){b().then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]);var I=function(e,n){f(e,n).then((function(n){r(n),A(""),F("Successfully updated ".concat(e))})).catch((function(n){console.log(n),F(""),A("".concat(e," has already been removed from the server"))}))};return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(w,{message:B}),Object(m.jsx)(p,{message:z}),Object(m.jsx)(O,{handler:function(e){k(e.target.value)},value:N}),Object(m.jsx)("h3",{children:"Add New"}),Object(m.jsx)(v,{handleNameChange:function(e){s(e.target.value)},handleSubmit:function(e){e.preventDefault();var n={name:i,number:g};t.map((function(e){return e.name})).includes(i)?window.confirm("".concat(i," is already added to the phonebook, replace old number?"))&&I(i,g):j(n).then((function(e){r(t.concat(e)),A(""),F("Successfully added ".concat(i))})).catch((function(e){window.confirm("".concat(i," is already added to the phonebook, replace old number?"))&&I(i,g)})),y(""),s("")},handleNumberChange:function(e){y(e.target.value)},newName:i,newNumber:g}),Object(m.jsx)("h2",{children:"Numbers"}),Object(m.jsx)(x,{newFilter:N,persons:t,handleDelete:function(e){var n=e.target.id;window.confirm("Delete ".concat(n,"?"))&&h(n).then((function(e){r(e),A(""),F("Deleted ".concat(n))})).catch((function(e){return console.log(e)}))}})]})};c.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.402d42b9.chunk.js.map