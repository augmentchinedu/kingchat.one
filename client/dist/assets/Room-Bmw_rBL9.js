import{h as x,r as g,j as k,o as r,k as c,F as I,l as $,d as t,t as p,m as h,H as j,u as w,p as E,n as N,c as R,w as l,a as n,b as e,C as U}from"./index-DxFlzq2_.js";import{_ as z}from"./SideBar-y4cf8YDq.js";import{_ as M}from"./Messenger-CO5FFM2v.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y=i=>(E("data-v-b7933736"),i=i(),N(),i),H={key:0,id:"unread-tag",class:"text-center"},q=y(()=>t("span",{class:"text-xl underline"},"Unread Messages",-1)),G=[q],J={class:"text-xs underline"},K={class:"flex flex-row gap-1 float-right text-xs"},O={id:"time"},P={key:0,id:"reciept",class:"grid items-center"},Q={key:0,xmlns:"http://www.w3.org/2000/svg",style:{width:"1.5em",height:"1.5em"},viewBox:"0 0 24 24"},T=y(()=>t("path",{fill:"currentColor",stroke:"#ECEFF1",d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"},null,-1)),W=[T],X=["time"],Y={__name:"Bubbles",setup(i,{expose:m}){const u=x(),d=g(null);m({bubbleDiv:d}),u.user.uid;let a=k(()=>u.rooms.active.messages);function s(_){return _==u.user.username?"right":"left"}return(_,f)=>(r(),c("div",{id:"bubbleDiv",ref_key:"bubbleDiv",ref:d},[(r(),c("div",H,G)),(r(!0),c(I,null,$(w(a),(o,v)=>(r(),c("div",{key:v,class:"grid mx-2 my-4"},[t("div",{class:j(["bubble shadow-sm",{left:s(o.username)=="left",right:s(o.username)=="right"}])},[t("div",null,[t("div",null,[t("span",J,p(o.username),1),t("p",null,p(o.msg.text),1)]),t("div",K,[t("div",O,p(o.time),1),s(o.sender)=="right"?(r(),c("div",P,[(r(),c("svg",Q,W))])):h("",!0),s(o.sender)=="left"?(r(),c("div",{key:1,time:o.time},null,8,X)):h("",!0)])])],2)]))),128))],512))}},Z=A(Y,[["__scopeId","data-v-b7933736"]]),ae={__name:"Room",setup(i){const{back:m}=U("app"),u=x(),d=g(!1),a=k(()=>{let s=u.rooms.active;return s.type="Room",s});return(s,_)=>{const f=n("v-navigation-drawer"),o=n("v-icon"),v=n("v-app-bar-nav-icon"),C=n("v-img"),B=n("v-avatar"),S=n("v-app-bar-title"),V=n("v-app-bar"),L=n("v-container"),D=n("v-main"),F=n("v-app");return r(),R(F,null,{default:l(()=>[e(f,{modelValue:d.value,"onUpdate:modelValue":_[0]||(_[0]=b=>d.value=b)},{default:l(()=>[e(z)]),_:1},8,["modelValue"]),e(V,{elevation:2,color:"red-darken-1"},{default:l(()=>[e(v,{onClick:_[1]||(_[1]=b=>w(m)())},{default:l(()=>[e(o,{icon:"mdi-keyboard-backspace"})]),_:1}),e(B,null,{default:l(()=>[e(C,{alt:a.value.name,src:a.value.imgURL},null,8,["alt","src"])]),_:1}),e(S,null,{default:l(()=>[t("div",null,[t("p",null,[t("span",null,p(a.value.name)+" "+p(a.value.number),1)])])]),_:1})]),_:1}),e(D,null,{default:l(()=>[e(L,{class:"ma-0 pa-0 mx-auto flex flex-col justify-between h-full"},{default:l(()=>[e(Z,{chat:a.value},null,8,["chat"]),e(M,{to:a.value},null,8,["to"])]),_:1})]),_:1})]),_:1})}}};export{ae as default};
