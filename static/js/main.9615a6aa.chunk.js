(this["webpackJsonptip-calculator"]=this["webpackJsonptip-calculator"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),s=c(6),l=c.n(s),n=(c(11),c(12),c.p+"static/media/logo.3cc0528b.svg"),o=c(0);var r=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("img",{alt:" ",src:n})})},j=c(2),d=c(3),b=c(5);var p=function(e){var t=e.SetTotalForm,c=e.SetPeopleForm,a=e.SetTip,i=e.PeopleForm,s=e.TotalForm,l=e.SetReset,n=e.Radio,r=e.checkedRadio,j=e.SetRadio;function p(e){a(e.target.value),l(!1)}function m(e){j(Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},e.target.value,!0)))}return Object(o.jsxs)("div",{className:"bill",children:[Object(o.jsx)("h4",{children:"Bill:"}),Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)("span",{children:Object(o.jsx)("img",{alt:" ",src:"/icon-dollar.svg"})}),Object(o.jsx)("input",{name:"inputTotal",className:"inputForm",type:"number",placeholder:"0",onChange:function(e){t(parseFloat(e.target.value)),l(!1)},value:s})]}),Object(o.jsx)("h4",{children:"Select Tip %"}),Object(o.jsxs)("div",{className:"inputForm btn_grid",children:[Object(o.jsx)("input",{id:"5tip",name:"radioTip",type:"radio",value:"5",onClick:p,onChange:m,checked:n[5]}),Object(o.jsx)("label",{className:"btn",htmlFor:"5tip",children:"5%"}),Object(o.jsx)("input",{id:"10tip",name:"radioTip",type:"radio",value:"10",onClick:p,onChange:m,checked:n[10]}),Object(o.jsx)("label",{className:"btn",htmlFor:"10tip",children:"10%"}),Object(o.jsx)("input",{id:"15tip",name:"radioTip",type:"radio",value:"15",onClick:p,onChange:m,checked:n[15]}),Object(o.jsx)("label",{className:"btn",htmlFor:"15tip",children:"15%"}),Object(o.jsx)("input",{id:"25tip",name:"radioTip",type:"radio",value:"25",onClick:p,onChange:m,checked:n[25]}),Object(o.jsx)("label",{className:"btn",htmlFor:"25tip",children:"25%"}),Object(o.jsx)("input",{id:"50tip",name:"radioTip",type:"radio",value:"50",onClick:p,onChange:m,checked:n[50]}),Object(o.jsx)("label",{className:"btn",htmlFor:"50tip",children:"50%"}),Object(o.jsx)("input",{placeholder:"Custom",type:"text",className:""})]}),Object(o.jsx)("h4",{children:"Number of People"}),Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)("span",{children:Object(o.jsx)("img",{alt:" ",src:"/icon-person.svg"})}),Object(o.jsx)("input",{name:"inputPeople",className:"",placeholder:"0",type:"number",onChange:function(e){c(parseFloat(e.target.value)),l(!1)},value:i})]})]})};var m=function(e){var t=e.TotalForm,c=e.PeopleForm,a=e.Tip,i=e.Reset,s=e.SetReset,l=e.SetTotalForm,n=e.SetPeopleForm,r=e.initialRadio,j=e.SetRadio,d=t*a/100/c,b=d+t/c;return isNaN(d)&&(d=0),Object(o.jsxs)("div",{className:"totalBill",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"total_grid",children:[Object(o.jsxs)("div",{className:"tipPerson",children:[Object(o.jsx)("h3",{children:"Tip Amount"}),Object(o.jsx)("span",{children:"/ person"})]}),Object(o.jsxs)("p",{name:"tip",children:["$",d.toFixed(2)]})]}),Object(o.jsxs)("div",{className:"total_grid",children:[Object(o.jsxs)("div",{className:"tipPerson",children:[Object(o.jsx)("h3",{children:"Total"}),Object(o.jsx)("span",{children:"/ person"})]}),Object(o.jsxs)("p",{children:["$",b.toFixed(2)]})]})]}),Object(o.jsx)("div",{className:"reset_holder",children:Object(o.jsx)("button",{className:"reset",onClick:function(){s(!0),l(""),n(1),j(r)},disabled:!!i,children:" RESET"})})]})};var h=function(){var e={5:!0,10:!1,15:!1,25:!1,50:!1},t=Object(a.useState)(0),c=Object(j.a)(t,2),i=c[0],s=c[1],l=Object(a.useState)(1),n=Object(j.a)(l,2),r=n[0],d=n[1],b=Object(a.useState)(5),h=Object(j.a)(b,2),O=h[0],u=h[1],x=Object(a.useState)(!0),v=Object(j.a)(x,2),F=v[0],N=v[1],S=Object(a.useState)(e),g=Object(j.a)(S,2),T=g[0],R=g[1];return console.log(T),Object(o.jsxs)("div",{className:"grid_container",children:[Object(o.jsx)(p,{SetTotalForm:s,SetPeopleForm:d,SetTip:u,PeopleForm:r,TotalForm:i,SetReset:N,Radio:T,checkedRadio:{5:!1,10:!1,15:!1,25:!1,50:!1},SetRadio:R}),Object(o.jsx)(m,{TotalForm:i,PeopleForm:r,Tip:O,Reset:F,SetReset:N,SetTotalForm:s,SetPeopleForm:d,initialRadio:e,SetRadio:R})]})};var O=function(){return Object(o.jsx)("div",{className:"footer"})};var u=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(r,{}),Object(o.jsx)(h,{}),Object(o.jsx)(O,{})]})};l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9615a6aa.chunk.js.map