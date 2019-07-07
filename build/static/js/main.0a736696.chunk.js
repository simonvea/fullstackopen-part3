(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(5),u=t.n(c),o=(t(13),t(6)),i=t(2),l=t(1),d=t.n(l),s=t(3),f="/api/persons";function m(){return(m=Object(s.a)(d.a.mark(function e(n,t){var r,a,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},a="".concat(f,"/").concat(n),e.next=4,fetch(a,r);case 4:return c=e.sent,e.abrupt("return",c.json());case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function p(){return(p=Object(s.a)(d.a.mark(function e(n){var t,r,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"DELETE"},r="".concat(f,"/").concat(n),e.next=4,fetch(r,t);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(){return(h=Object(s.a)(d.a.mark(function e(n){var t,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},e.next=3,fetch(f,t);case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(){return(b=Object(s.a)(d.a.mark(function e(){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var v={getAll:function(){return b.apply(this,arguments)},addPerson:function(e){return h.apply(this,arguments)},deletePerson:function(e){return p.apply(this,arguments)},updatePerson:function(e,n){return m.apply(this,arguments)}},w=function(e){var n=e.person,t=e.deleteHandler;return a.a.createElement("div",null,n.name," ",n.number," ",a.a.createElement("button",{onClick:function(){return t(n.id)}},"delete"))},E=function(e){var n=e.filter,t=e.handleFilterChange;return a.a.createElement("p",null,"filter shown with",a.a.createElement("input",{value:n,onChange:t}))},g=function(e){return a.a.createElement("form",{onSubmit:e.addName},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))},j=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],u=Object(r.useState)(""),l=Object(i.a)(u,2),d=l[0],s=l[1],f=Object(r.useState)(""),m=Object(i.a)(f,2),p=m[0],h=m[1],b=Object(r.useState)(""),j=Object(i.a)(b,2),y=j[0],O=j[1],C=Object(r.useState)([]),N=Object(i.a)(C,2),k=N[0],x=N[1],S=function(e){var n=t.find(function(n){return n.id===e}).name,r="Delete ".concat(n,"?");if(window.confirm(r)){var a=t.filter(function(n){return n.id!==e});v.deletePerson(e).then(function(e){c(a)}).catch(function(e){return x([n,"error"])})}};return Object(r.useEffect)(function(){v.getAll().then(function(e){return c(e)}).catch(function(e){return console.error(e)})},[]),a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(function(e){var n,t,r,c=e.msg,u=Object(i.a)(c,2),o=u[0],l=u[1];if(!o)return null;"add"===l?(n="green",t="lightgreen",r="Added ".concat(o)):"error"===l&&(n="red",t="rosybrown",r="Information of ".concat(o," has already been removed from server"));var d={border:"2px solid ".concat(n),backgroundColor:"".concat(t),fontSize:16,color:"".concat(n),borderRadius:2,padding:4,width:200};return a.a.createElement("div",{style:d},r)},{msg:k}),a.a.createElement(E,{filter:y,handleFilterChange:function(e){return O(e.target.value)}}),a.a.createElement("h2",null,"Add a new"),a.a.createElement(g,{addName:function(e){if(e.preventDefault(),n=d,-1===t.findIndex(function(e){return e.name===n})){var n,r={name:d,number:p};v.addPerson(r).then(function(e){c(t.concat(e)),x([e.name,"add"])}).catch(function(e){return console.error(e)}),s(""),h("")}else if(window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))){var a=t.find(function(e){return e.name===d}),u=a.id,i=Object(o.a)({},a,{number:p}),l=t.map(function(e){return e.id===u?i:e});return void v.updatePerson(u,i).then(function(e){return c(l)}).catch(function(e){return console.error(e)})}},newName:d,handleNameChange:function(e){return s(e.target.value)},newNumber:p,handleNumberChange:function(e){return h(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),function(e,n){return n.length>0&&(e=e.filter(function(e){return e.name.toLowerCase().includes(n)})),e.map(function(e){return a.a.createElement(w,{key:e.id,person:e,deleteHandler:S})})}(t,y))};u.a.render(a.a.createElement(j,null),document.getElementById("root"))},7:function(e,n,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.0a736696.chunk.js.map