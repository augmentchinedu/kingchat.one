import{b as g,u as h,r as f,c as d,o as w,h as C,g as i,e as c,t as V,f as I,w as S,v as X,p as b,l as k}from"./index-DF959I5m.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const R=s=>(b("data-v-a6ecc238"),s=s(),k(),s),B={class:"grid content-center h-full w-full"},N={class:"mx-4"},U=R(()=>i("h2",{class:"my-2 text-center"},"We sent you a code",-1)),q={class:"mx-2 my-2 text-xs"},A={__name:"RecoveryCodeConfirmation",setup(s){const v=g(),u=h(),m=f(!1),l=f(""),_=x(u.user.email);function x(o){return console.log(o),o.replace(/(.{3})(.*)(?=@)/,(p,t,n)=>{console.log(p,t,n);for(let a=0;a<n.length;a++)t+="*";return t})}async function y(){if(l.value.length==6){let o=await u.verifyOTP({uid:u.user.uid,code:l.value});console.log(o),o?v.push("/auth/reset-password"):m.value=!0}}return(o,e)=>{const p=d("v-img"),t=d("v-alert"),n=d("v-text-field"),a=d("v-form");return w(),C("div",B,[i("div",null,[c(p,{src:"../assets/img/logo.png",class:"w-20 h-20 mx-auto my-8 rounded-sm"})]),i("div",N,[U,i("p",q," Check your email "+V(I(_))+" to get your confirmation code. If you need to request a new code, go back and re-enter your username or email. ",1),c(a,{onSubmit:e[3]||(e[3]=X(()=>{},["prevent"])),class:"flex flex-col gap-4"},{default:S(()=>[c(t,{text:"Invalid Code",type:"warning",modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=r=>m.value=r),rounded:"",closable:""},null,8,["modelValue"]),c(n,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=r=>l.value=r),label:"Recovery Code",id:"code",placeholder:"XXXXXX",maxlength:"6",counter:"",onInput:e[2]||(e[2]=r=>y())},null,8,["modelValue"])]),_:1})])])}}},O=E(A,[["__scopeId","data-v-a6ecc238"]]);export{O as default};