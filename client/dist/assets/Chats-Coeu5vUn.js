import{u as x,v as g,b as a,A as k,c as o,j as i,F as w,x as y,g as b,d as B,k as C,B as L,h as e,f as n,w as _,t as l}from"./index-RAFTkYkA.js";import{_ as N}from"./SpeedDial-I3i-KeBz.js";const D={class:"flex flex-col w-full"},V={class:"flex flex-row px-2 py-2 gap-2"},$={class:"grid items-center w-full"},j={class:"flex flex-row justify-between"},A={id:"preview"},F={class:"text-base"},M={class:"text-sm"},S={class:"grid items-center"},E={class:"text-xs"},I={class:"text-center"},P={class:"text-xs"},R=e("hr",null,null,-1),G={__name:"Chats",setup(T){const r=x(),d=g(()=>r.chats);function p(t){return{path:`/chat/${t}`}}function u(t){return{path:`/${t}`}}return(t,U)=>{const m=a("v-img"),c=a("router-link"),f=a("v-badge"),v=k("ripple");return o(),i("div",D,[(o(!0),i(w,null,y(d.value,(s,h)=>L((o(),i("div",{key:h},[e("div",V,[e("div",null,[n(c,{to:u(s.profile.username)},{default:_(()=>[n(m,{src:s.profile.photoURL,class:"w-12 h-12 rounded-full","aspect-ratio":"1"},null,8,["src"])]),_:2},1032,["to"])]),e("div",$,[n(c,{to:p(s.profile.username)},{default:_(()=>[e("div",j,[e("div",A,[e("div",null,[e("span",F,l(s.profile.displayName),1)]),e("div",null,[e("span",M,l(s.lastMessage.message),1)])]),e("div",S,[e("div",null,[e("span",E,l(s.lastMessage.displayTime),1)]),e("div",I,[e("span",P,[n(f,{color:"primary",content:s.unread,inline:""},null,8,["content"])])])])])]),_:2},1032,["to"])])]),R])),[[v]])),128)),b(r).app.isLoggedIn?(o(),B(N,{key:0})):C("",!0)])}}};export{G as default};
