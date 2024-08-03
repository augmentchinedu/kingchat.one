import{_ as U}from"./SideBar-Bc0hwKTi.js";import{_ as V,f as $,r as C,g as T,D as z,o as a,h as n,F as N,j as S,u as r,E as R,d as u,t as B,G as O,H as j,p as q,n as G,I as W,b as i,k as I,c as J,w,e as K,a as p,m as P}from"./index-DygT-CFg.js";import{_ as Q}from"./Messenger-IMYjU37H.js";const D=f=>(q("data-v-9e28d920"),f=f(),G(),f),X={key:0,id:"unread-tag",class:"text-center"},Y=D(()=>u("span",{class:"text-xl underline"},"Unread Messages",-1)),Z=[Y],ee={class:"flex flex-row gap-1 float-right text-xs"},te={id:"time"},ae={key:0,id:"reciept",class:"grid items-center"},se={key:0,xmlns:"http://www.w3.org/2000/svg",style:{width:"1.5em",height:"1.5em"},viewBox:"0 0 24 24"},oe=D(()=>u("path",{fill:"currentColor",stroke:"#43A047",d:"M.41 13.41L6 19l1.41-1.42L1.83 12m20.41-6.42L11.66 16.17L7.5 12l-1.43 1.41L11.66 19l12-12M18 7l-1.41-1.42l-6.35 6.35l1.42 1.41z"},null,-1)),ne=[oe],ie={key:1,xmlns:"http://www.w3.org/2000/svg",style:{width:"1.5em",height:"1.5em"},viewBox:"0 0 24 24"},re=D(()=>u("path",{fill:"currentColor",stroke:"#ECEFF1",d:"M.41 13.41L6 19l1.41-1.42L1.83 12m20.41-6.42L11.66 16.17L7.5 12l-1.43 1.41L11.66 19l12-12M18 7l-1.41-1.42l-6.35 6.35l1.42 1.41z"},null,-1)),le=[re],ce={key:2,xmlns:"http://www.w3.org/2000/svg",style:{width:"1.5em",height:"1.5em"},viewBox:"0 0 24 24"},de=D(()=>u("path",{fill:"currentColor",stroke:"#ECEFF1",d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"},null,-1)),ue=[de],me={key:3,xmlns:"http://www.w3.org/2000/svg",style:{width:"1.5em",height:"1.5em"},viewBox:"0 0 24 24"},_e=j('<circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0" data-v-9e28d920><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12" data-v-9e28d920></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0" data-v-9e28d920></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0" data-v-9e28d920><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12" data-v-9e28d920></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0" data-v-9e28d920></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0" data-v-9e28d920><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12" data-v-9e28d920></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0" data-v-9e28d920></animate></circle>',3),ve=[_e],pe=["time"],fe={__name:"Bubbles",props:["chat"],setup(f,{expose:x}){const m=$(),{chat:s}=f,c=C(null);x({bubbleDiv:c});const l=m.user.uid,_=s._id.split(l).find(t=>t.length>0);let d;const v=T(()=>s.meta);let k=T(()=>{let t={};return t.read=s.messages.filter(o=>o.time<v.value[l].lastRead),t.unread=s.messages.filter(o=>o.time>v.value[l].lastRead),console.log(t.unread),t});function L(){let o={root:null,rootMargin:`0px 0px -${c.value.parentElement.children[1].offsetHeight}px 0px`,threshold:0};d=new IntersectionObserver(M,o);let g=[],b=c.value.children;for(let e of b){const y=e.children[0].children[0].children[1].children[1];y.getAttribute("time")&&g.push(y)}g.forEach(e=>{e.getAttribute("time")>v.value[l].lastRead&&(console.log(e),d.observe(e))})}z(()=>{new MutationObserver(()=>L()).observe(c.value,{childList:!0})});function h(t){return m.user.uid==t?"right":"left"}function M(t){t.forEach(o=>{if(console.log(o),o.isIntersecting){const g=o.target.getAttribute("time");console.log("read"),g>v.value[l].lastRead&&(console.log("Sending Read Reciept"),m.sendReciept(s._id,{lastRead:g}),d.unobserve(o.target))}})}return(t,o)=>(a(),n("div",{id:"bubbleDiv",ref_key:"bubbleDiv",ref:c},[(a(!0),n(N,null,S(r(k),(g,b)=>(a(),n(N,{key:b},[b=="unread"&&r(k).length>0?(a(),n("div",X,Z)):R("",!0),(a(!0),n(N,null,S(r(k)[b],(e,y)=>(a(),n("div",{key:y,ref_for:!0,ref:b,class:"grid mx-2 my-4"},[u("div",{class:O(["bubble shadow-sm",{left:h(e.sender)=="left",right:h(e.sender)=="right"}])},[u("div",null,[u("div",null,B(e.text),1),u("div",ee,[u("div",te,B(r(m).formatTimeDisplay(e.time)),1),h(e.sender)=="right"?(a(),n("div",ae,[v.value[r(_)].lastRead>=e.time?(a(),n("svg",se,ne)):v.value[r(_)].lastDelivered>e.time?(a(),n("svg",ie,le)):v.value[r(l)].lastSent>e.time?(a(),n("svg",ce,ue)):v.value[r(l)].lastSent<e.time?(a(),n("svg",me,ve)):R("",!0)])):R("",!0),h(e.sender)=="left"?(a(),n("div",{key:1,time:e.time},null,8,pe)):R("",!0)])])],2)]))),128))],64))),128))],512))}},he=V(fe,[["__scopeId","data-v-9e28d920"]]),ge={__name:"Chat",props:["active","to"],setup(f){const x=C(null),m=C(null),s=C(null);function c(){const l=s.value.widgetDiv.offsetHeight,_=x.value.offsetWidth;m.value.bubbleDiv.style.width=_+"px",m.value.bubbleDiv.style.marginBottom=l+"px",s.value.widgetDiv.style.margin="auto",s.value.widgetDiv.style.width=_+"px"}return z(()=>{c(),window.addEventListener("resize",c)}),W(()=>window.removeEventListener("resize")),(l,_)=>(a(),n("div",{class:"flex flex-col h-full",ref_key:"page",ref:x},[i(he,{chat:f.active,class:"w-full text-sm",ref_key:"chat",ref:m},null,8,["chat"]),i(Q,{class:"messenger w-full",to:f.to,ref_key:"widget",ref:s},null,8,["to"])],512))}},be=V(ge,[["__scopeId","data-v-496a0867"]]),we={class:"text-xs"},Ce={__name:"Chat",setup(f){const x=C(!1),m=$(),s=K(),c=P(),l=s.query.origin;let _;switch(l){case"/home":_="recent";break;case"/chats":_="chats";break}let d=I(m[_].find(L=>L.profile.username==s.params.username));const v=I({type:"Chat",chatid:d._id||d.chatid});function k(){window.history.length>1?c.back():c.push({path:"/chats"})}return(L,h)=>{const M=p("v-navigation-drawer"),t=p("v-icon"),o=p("v-app-bar-nav-icon"),g=p("v-img"),b=p("v-avatar"),e=p("v-app-bar-title"),y=p("v-app-bar"),F=p("v-container"),A=p("v-main"),H=p("v-app");return a(),J(H,null,{default:w(()=>[i(M,{modelValue:x.value,"onUpdate:modelValue":h[0]||(h[0]=E=>x.value=E)},{default:w(()=>[i(U)]),_:1},8,["modelValue"]),i(y,{elevation:2,color:"red-darken-1"},{default:w(()=>[i(o,{onClick:h[1]||(h[1]=E=>k())},{default:w(()=>[i(t,{icon:"mdi-keyboard-backspace"})]),_:1}),i(b,null,{default:w(()=>[i(g,{alt:r(d).profile.displayName,src:r(d).profile.photoURL},null,8,["alt","src"])]),_:1}),i(e,null,{default:w(()=>[u("span",null,B(r(d).profile.displayName),1),u("span",we," @"+B(r(d).profile.username),1)]),_:1})]),_:1}),i(A,null,{default:w(()=>[i(F,{class:"ma-0 pa-0 mx-auto h-full"},{default:w(()=>[i(be,{active:r(d),to:v},null,8,["active","to"])]),_:1})]),_:1})]),_:1})}}};export{Ce as default};
