import{u as C,a as S,b as y,r as I,c as o,o as i,d as u,w as n,K as B,e,f as s,i as d,g as r,t as L,h as N,j as R,k as $,p as j,l as A}from"./index-DF959I5m.js";import{_ as K}from"./SideBar-uY40G2Lv.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";const U=p=>(j("data-v-9b5cfc2d"),p=p(),A(),p),z={class:"flex flex-row justify-between px-2"},D={class:"grid items-center"},E={class:"capitalize"},T={key:0},q=U(()=>r("span",{class:""},"Login",-1)),F={__name:"MainLayout",setup(p){const v=C(),m=S(),c=y();let t=I(!1);return(G,a)=>{const f=o("v-navigation-drawer"),g=o("v-app-bar-nav-icon"),l=o("v-btn"),b=o("v-app-bar-title"),w=o("v-app-bar"),k=o("router-view"),x=o("v-container"),h=o("v-main"),V=o("v-app");return i(),u(V,{class:"min-h-screen"},{default:n(()=>[(i(),u(B,null,[e(f,{modelValue:s(t),"onUpdate:modelValue":a[0]||(a[0]=_=>d(t)?t.value=_:t=_)},{default:n(()=>[e(K)]),_:1},8,["modelValue"])],1024)),e(w,{elevation:2,color:"red-darken-1"},{default:n(()=>[e(g,{onClick:a[1]||(a[1]=_=>d(t)?t.value=!s(t):t=!s(t))}),e(b,null,{default:n(()=>[r("div",z,[r("div",D,[r("span",E,L(s(m).name),1)]),s(v).app.isLoggedIn?$("",!0):(i(),N("div",T,[e(l,{id:"login",onClick:a[2]||(a[2]=_=>s(c).push("/auth/login"))},{default:n(()=>[q]),_:1}),e(l,{id:"signup",onClick:a[3]||(a[3]=_=>s(c).push("/auth/signup"))},{default:n(()=>[R(" SignUp ")]),_:1})]))])]),_:1})]),_:1}),e(h,null,{default:n(()=>[e(x,{class:"container h-full ma-0 pa-0 mx-auto"},{default:n(()=>[e(k)]),_:1})]),_:1})]),_:1})}}},P=M(F,[["__scopeId","data-v-9b5cfc2d"]]);export{P as default};