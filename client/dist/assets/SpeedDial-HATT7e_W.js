import{u as x,r as p,b as d,c as g,j as b,f as s,w as l,h as u,y as v,g as y,t as k,d as C,k as N,T as P,F as T,e as V}from"./index-Dx3arC6z.js";const B={class:"absolute top-0 h-screen bg-[#ffffff70] w-full"},M={class:"flex flex-row justify-between w-full"},S={class:"flex items-center justify-start gap-2"},$=["src"],j={__name:"CreatePost",props:["show-modal"],emits:["toggle-modal","notify"],setup(h,{emit:f}){const e=f,n=x(),i=h,c=n.user,m=p(null);async function o(){const a={text:m.value.innerText.trim(),authors:[c.uid]};await n.createPost(a)&&(e("toggle-modal",!i),e("notify","New Post Shared",300))}return(t,a)=>{const _=d("v-icon"),r=d("v-btn"),w=d("v-container");return g(),b("div",B,[s(w,{class:"bg-white flex flex-col gap-4 h-full"},{default:l(()=>[u("div",M,[s(_,{onClick:a[0]||(a[0]=D=>e("toggle-modal",!i))},{default:l(()=>[v("mdi-close")]),_:1}),s(r,{density:"compact",rounded:"",flat:"",color:"green",onClick:o},{default:l(()=>[v("Post")]),_:1})]),u("div",S,[u("img",{src:y(c).profile.photoURL,class:"w-8 h-8 rounded-full"},null,8,$),s(r,{class:"border border-blue",flat:"",density:"compact"},{default:l(()=>[v("Everyone")]),_:1})]),u("div",{id:"text-box",class:"h-[50%]",contenteditable:"true",ref_key:"whatsHappening",ref:m}," What's happening? ",512)]),_:1})])}}},E={id:"add-post",class:"fixed bottom-0 right-0 mr-6 mb-6"},H={__name:"SpeedDial",setup(h){const f=V("pageTitle"),e=p(!1),n=p(!1),i=p("");function c(o){e.value=o,o?f.emit("Create New Post"):f.emit(null)}function m(o,t){i.value=o,setTimeout(()=>n.value=!0,t)}return(o,t)=>{const a=d("v-snackbar"),_=d("v-btn");return g(),b(T,null,[s(a,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=r=>n.value=r),top:"",timeout:5e3,transition:"slide-y-reverse-transition",class:"text-white"},{default:l(()=>[v(k(i.value),1)]),_:1},8,["modelValue"]),u("div",E,[s(_,{icon:"mdi-plus",color:"red",size:"default",onClick:t[1]||(t[1]=r=>c(!e.value))})]),s(P,{name:"slide-up"},{default:l(()=>[e.value?(g(),C(j,{key:0,"show-modal":e.value,onToggleModal:c,onNotify:m},null,8,["show-modal"])):N("",!0)]),_:1})],64)}}};export{H as _};
