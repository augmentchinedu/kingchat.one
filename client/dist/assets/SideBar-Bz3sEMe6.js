import{r as u,o as a,f as r,F as h,g as f,a as n,w as g,d as s,t as d,j as x,h as $,e as k,E as y,p as w,q as b}from"./index-BPADXg_z.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S={class:"flex flex-col justify-between"},j={class:"flex flex-row justify-start gap-4"},A=["src"],B={class:"inline-flex items-center"},F={__name:"Navigation",setup(o){const c=[{name:"Home",link:"/home",icon:"home"},{name:"Chats",link:"/chats",icon:"envelop"},{name:"Rooms",link:"/rooms",icon:"door"},{name:"Store",link:"/store",icon:"buy"}];function t(e){return`../assets/icons/${e}.svg`}return(e,p)=>{const _=u("router-link");return a(),r("nav",S,[(a(),r(h,null,f(c,l=>n(_,{key:l,to:l.link,class:"px-4 py-2"},{default:g(()=>[s("div",j,[s("div",null,[s("img",{src:t(l.icon),alt:""},null,8,A)]),s("div",B,[s("span",null,d(l.name),1)])])]),_:2},1032,["to"])),64))])}}},I=o=>(w("data-v-88cb7dc1"),o=o(),b(),o),N={id:"footer",class:"flex flex-col"},L={class:""},E=I(()=>s("li",null,[s("span",null,"Add Account")],-1)),R={class:"flex p-4 justify-between"},V={class:"flex gap-4"},q={class:"grid content-center"},z={class:"flex flex-col"},D={id:"display-name"},H={id:"username"},K={class:"grid content-center"},M={__name:"Footer",setup(o){const c=x(),t=$(c.app.user),e=k(!0);function p(){e.value=!e.value}async function _(){await c.logout()}return(l,i)=>{const m=u("v-img");return a(),r("div",N,[s("div",{class:y([{more:e.value},"border-2"])},[s("div",L,[s("ul",null,[E,s("li",null,[s("span",{onClick:i[0]||(i[0]=v=>_())},"Logout")])])])],2),s("div",R,[s("div",V,[s("div",q,[n(m,{src:t.photoURL,"aspect-ratio":"1",class:"w-12 h-12 rounded-full"},null,8,["src"])]),s("div",z,[s("div",D,d(t.displayName),1),s("div",H,"@"+d(t.username),1)])]),s("div",K,[s("div",null,[n(m,{src:"../assets/icons/more.svg",class:"w-6 h-6",onClick:i[1]||(i[1]=v=>p())})])])])])}}},O=C(M,[["__scopeId","data-v-88cb7dc1"]]),U={id:"sidebar",class:"flex flex-col justify-between h-screen"},G={class:"flex px-4 py-8 gap-4"},J=s("div",{class:"grid items-center"},[s("span",{class:""},"King Chat")],-1),P=s("hr",null,null,-1),Q=s("hr",{class:"mt-12"},null,-1),X={__name:"SideBar",setup(o){return(c,t)=>{const e=u("v-img");return a(),r("div",U,[s("div",null,[s("header",G,[s("div",null,[n(e,{class:"w-20 h-20 rounded-2xl bg-red-500",src:"../assets/img/icon-black.svg","aspect-ratio":"1"})]),J]),P,n(F)]),s("div",null,[Q,n(O)])])}}};export{X as _};
