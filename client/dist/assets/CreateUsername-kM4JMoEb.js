import{b as k,u as V,q as w,r as c,c as u,o as C,h as y,g as v,e as i,w as B,s as E,f as p}from"./index-Cdw0NIBP.js";import{u as q,r as A,m as L}from"./index-BkqOkWQ8.js";const M={class:"grid content-center h-full w-full"},N=v("h2",{class:"my-2 text-center"},"Create Unique Username",-1),R={__name:"CreateUsername",setup(S){const _=k(),r=V(),n=w({username:r.user.username}),t=c(""),m=c(""),o=c(!1),x={username:{required:A,minLengthValue:L(1)}},l=q(x,n);async function d(){let s=n.username.match(/^@?(\w){1,15}$/)!==null;if(!s){t.value="Username is invalid",o.value=!0;return}console.log(n.username,s);let e=await r.verifyUsername(n.username);console.log(e),e?(m.value="Username is available",o.value=!1):(m.value="Username is taken",o.value=!0)}function f(){if(l.value.$silentErrors.length>0){let s=l.value.$silentErrors[0].$message;console.log(s),s&&(t.value=s)}else t.value=""}function g(){const s=r.user.uid;r.updateUsername(s,n.username),_.push("/home")}return(s,e)=>{const b=u("v-img"),U=u("v-text-field"),h=u("v-btn"),$=u("v-form");return C(),y("div",M,[v("div",null,[i(b,{src:"../assets/img/icon-black.svg",class:"w-20 h-20 mx-auto rounded-2xl bg-red-500 border","aspect-ratio":"1"})]),N,v("div",null,[i($,{onSubmit:e[4]||(e[4]=E(a=>g(),["prevent"])),class:"flex flex-col mx-4 gap-4"},{default:B(()=>[i(U,{modelValue:n.username,"onUpdate:modelValue":e[0]||(e[0]=a=>n.username=a),label:"Choose Username",prefix:"@","error-messages":t.value,messages:m.value,maxlength:"15",counter:"",onBlur:e[1]||(e[1]=a=>(f(),d(),p(l).username.$touch)),onInput:e[2]||(e[2]=a=>(f(),d(),p(l).username.$touch))},null,8,["modelValue","error-messages","messages"]),i(h,{class:"mt-2",color:"indigo-darken-1",block:"",text:"Finish",onClick:e[3]||(e[3]=a=>g()),disabled:o.value},null,8,["disabled"])]),_:1})])])}}};export{R as default};