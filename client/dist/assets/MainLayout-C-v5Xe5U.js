import{u as L,r as m,c as r,w as t,a as N,b as o,o as i,K as T,d as e,e as n,i as v,f as p,t as R,g as j,h as A,T as D,j as E,k as K,l as M,p as $,m as z}from"./index-CatBLrJG.js";import{_ as P}from"./SideBar-T7QwqSrR.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";const q=l=>($("data-v-998a46ad"),l=l(),z(),l),F={class:"flex flex-row justify-between px-2"},G={class:"grid items-center"},H={class:"capitalize"},J={key:0},O=q(()=>p("span",{class:""},"Login",-1)),Q={__name:"MainLayout",setup(l){const f=N("pageTitle"),g=L(),c=K(),b=M(),u=m(null);let a=m(!1);function w(d){u.value=d}return f.on(w),(d,s)=>{const h=o("v-navigation-drawer"),k=o("v-app-bar-nav-icon"),x=o("v-btn"),y=o("v-app-bar-title"),C=o("v-app-bar"),V=o("router-view"),B=o("v-container"),I=o("v-main"),S=o("v-app");return i(),r(S,{class:"min-h-screen"},{default:t(()=>[(i(),r(T,null,[e(h,{modelValue:n(a),"onUpdate:modelValue":s[0]||(s[0]=_=>v(a)?a.value=_:a=_)},{default:t(()=>[e(P)]),_:1},8,["modelValue"])],1024)),e(C,{elevation:2,color:"red-darken-1"},{default:t(()=>[e(k,{onClick:s[1]||(s[1]=_=>v(a)?a.value=!n(a):a=!n(a))}),e(y,null,{default:t(()=>[p("div",F,[p("div",G,[p("span",H,R(u.value||n(c).name),1)]),n(g).app.isLoggedIn?A("",!0):(i(),j("div",J,[e(x,{id:"login",onClick:s[2]||(s[2]=_=>n(b).push("/auth/login"))},{default:t(()=>[O]),_:1})]))])]),_:1})]),_:1}),e(I,null,{default:t(()=>[e(B,{class:"container h-full ma-0 pa-0 mx-auto relative"},{default:t(()=>[e(V,null,{default:t(({Component:_})=>[e(D,{name:n(c).meta.transition||"fade"},{default:t(()=>[(i(),r(E(_)))]),_:2},1032,["name"])]),_:1})]),_:1})]),_:1})]),_:1})}}},Z=U(Q,[["__scopeId","data-v-998a46ad"]]);export{Z as default};