import{f as h,r as l,a as w,o as y,h as _,d as s,G as k,t as b,b as C,w as F}from"./index-y68AKlvE.js";const T="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23FFFFFF'%20d='m2%2021l21-9L2%203v7l15%202l-15%202z'/%3e%3c/svg%3e",z={id:"message",class:"w-full h-full bg-white grid items-center p-0"},B={class:"bg-yellow-100 h-full grid items-center"},D={id:"sender",class:"grid items-end"},L=s("img",{src:T,class:"h-10 w-10",alt:"Send"},null,-1),K={__name:"Messenger",props:["to"],setup(u,{expose:g}){const d=u,v=h(),m=l(),n=l(),a=l(!1),x=l("Type a message"),c=l(null);g({widgetDiv:c});let i={};function p(e){n.value.innerText.length!==0&&(a.value=!0),e.type=="keyup"&&delete i[e.keyCode],e.type=="keydown"&&(i[e.keyCode]=!0,e.keyCode==13&&Object.keys(i).length==1&&(e.preventDefault(),f()))}function f(){const e=n.value.innerText.trim();n.value.innerText="",a.value=!1;let t=d.to.chatid,r=d.to.type;v.send({chatid:t,type:r},e)}return(e,t)=>{const r=w("v-btn");return y(),_("div",{id:"messenger",ref_key:"widgetDiv",ref:c,class:"flex flex-row bg-black p-1 gap-1"},[s("div",z,[s("div",B,[s("p",{id:"text",contenteditable:"true",class:"p-1.5 max-h-60 break-all overflow-auto z-10",onKeyup:t[0]||(t[0]=o=>p(o)),onKeydown:t[1]||(t[1]=o=>p(o)),ref_key:"text",ref:n},null,544),s("div",{ref_key:"placeholder",ref:m,class:k([{hidden:a.value},"p-1.5 absolute z-0"])},b(x.value),3)])]),s("div",D,[C(r,{class:"flex flex-row min-h-min px-1.5 gap-1.5",color:"red-darken-1",rounded:"0",onClick:t[2]||(t[2]=o=>f())},{default:F(()=>[L]),_:1})])],512)}}};export{K as _};
