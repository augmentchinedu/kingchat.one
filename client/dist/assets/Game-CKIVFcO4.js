import{D as R,a as V,u as j,c as t,o as r,h as i,e,w as n,g as o,f as a,t as u,k as I}from"./index-5uhG7CKp.js";const L={id:"app"},S=o("br",null,null,-1),U={key:0,class:"text-xs"},$={class:"card flex justify-center"},q={__name:"Game",setup(A){const{back:m}=R("app"),v=V(),c=j();let l=v.path.split("/"),d=l[l.length-1];const _=c.games.find(s=>s.id==d),f=s=>`../${s}`;return(s,p)=>{const b=t("v-icon"),g=t("v-app-bar-nav-icon"),h=t("v-img"),k=t("v-avatar"),x=t("v-app-bar-title"),B=t("v-app-bar"),C=t("router-view"),w=t("v-container"),y=t("v-main"),D=t("v-app"),N=t("Button");return r(),i("div",L,[e(D,null,{default:n(()=>[e(B,{elevation:2,color:"red-darken-1"},{default:n(()=>[e(g,{onClick:p[0]||(p[0]=E=>a(m)())},{default:n(()=>[e(b,{icon:"mdi-keyboard-backspace"})]),_:1}),e(k,null,{default:n(()=>[e(h,{alt:a(_).name,src:f(a(_).imgURL)},null,8,["alt","src"])]),_:1}),e(x,null,{default:n(()=>[o("div",null,[o("p",null,[o("span",null,u(a(_).name),1),S,a(c).user.username?(r(),i("span",U," @"+u(a(c).user.username),1)):I("",!0)])])]),_:1})]),_:1}),e(y,null,{default:n(()=>[e(w,{class:"ma-0 pa-0 mx-auto h-full"},{default:n(()=>[e(C)]),_:1})]),_:1})]),_:1}),o("div",$,[e(N,{label:"Check",icon:"pi pi-check"})])])}}};export{q as default};
