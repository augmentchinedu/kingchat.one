import{u as C,b as e,c as r,d as L,w as o,p as R,f as t,g as s,h as n,t as i,j as u,y as D,F,m as I}from"./index-JGSeoenM.js";const N={class:"py-4"},U={class:"grid grid-cols-3 gap-y-6"},V=["src","alt"],$={class:"name text-sm font-semibold"},q={__name:"Genre",setup(A){const{back:d}=I("app"),_=C(),m=R().params.genre,l=_.bookStore.genres.find(c=>c.id==m),v=_.bookStore.books.filter(c=>c.genres.includes(l.name));return(c,p)=>{const f=e("v-icon"),g=e("v-app-bar-nav-icon"),b=e("v-img"),k=e("v-avatar"),x=e("v-app-bar-title"),h=e("v-app-bar"),y=e("router-link"),w=e("v-container"),B=e("v-main"),S=e("v-app");return r(),L(S,null,{default:o(()=>[t(h,{elevation:2,color:"red-darken-1"},{default:o(()=>[t(g,{onClick:p[0]||(p[0]=a=>s(d)())},{default:o(()=>[t(f,{icon:"mdi-keyboard-backspace"})]),_:1}),t(k,null,{default:o(()=>[t(b,{alt:s(l).name,src:s(l).photoURL},null,8,["alt","src"])]),_:1}),t(x,null,{default:o(()=>[n("div",null,[n("p",null,[n("span",null,i(s(l).name),1)])])]),_:1})]),_:1}),t(B,null,{default:o(()=>[t(w,{class:"ma-0 pa-0 mx-auto flex flex-col justify-between h-full"},{default:o(()=>[n("div",N,[n("div",U,[(r(!0),u(F,null,D(s(v),(a,j)=>(r(),u("div",{key:j,class:"text-center px-4"},[t(y,{to:"../book/"+a._id},{default:o(()=>[n("div",null,[n("div",null,[n("img",{class:"rounded-sm mx-auto w-full",src:a.coverURL,alt:`${a.title}'s Image`},null,8,V)]),n("span",$,i(a.title),1)])]),_:2},1032,["to"])]))),128))])])]),_:1})]),_:1})]),_:1})}}};export{q as default};
