import{u as k,v as V,r as c,f as w,e as v,b as u,w as C,x as y,a as i,o as B,d as p,j as E}from"./index-BTSzS-KW.js";import{u as q,r as A,m as L}from"./index-BA5pdfnj.js";const M={class:"grid content-center h-full w-full"},N=v("h2",{class:"my-2 text-center"},"Create Unique Username",-1),I={__name:"CreateUsername",setup(S){const _=E(),r=k(),n=V({username:r.user.username}),t=c(""),m=c(""),o=c(!1),x={username:{required:A,minLengthValue:L(1)}},l=q(x,n);async function d(){let s=n.username.match(/^@?(\w){1,15}$/)!==null;if(!s){t.value="Username is invalid",o.value=!0;return}console.log(n.username,s);let e=await r.verifyUsername(n.username);console.log(e),e?(m.value="Username is available",o.value=!1):(m.value="Username is taken",o.value=!0)}function f(){if(l.value.$silentErrors.length>0){let s=l.value.$silentErrors[0].$message;console.log(s),s&&(t.value=s)}else t.value=""}function g(){const s=r.user.uid;r.updateUsername(s,n.username),_.push("/home")}return(s,e)=>{const b=i("v-img"),U=i("v-text-field"),h=i("v-btn"),$=i("v-form");return B(),w("div",M,[v("div",null,[u(b,{src:"../assets/img/icon-black.svg",class:"w-20 h-20 mx-auto rounded-2xl bg-red-500 border","aspect-ratio":"1"})]),N,v("div",null,[u($,{onSubmit:e[4]||(e[4]=y(a=>g(),["prevent"])),class:"flex flex-col mx-4 gap-4"},{default:C(()=>[u(U,{modelValue:n.username,"onUpdate:modelValue":e[0]||(e[0]=a=>n.username=a),label:"Choose Username",prefix:"@","error-messages":t.value,messages:m.value,maxlength:"15",counter:"",onBlur:e[1]||(e[1]=a=>(f(),d(),p(l).username.$touch)),onInput:e[2]||(e[2]=a=>(f(),d(),p(l).username.$touch))},null,8,["modelValue","error-messages","messages"]),u(h,{class:"mt-2",color:"indigo-darken-1",block:"",text:"Finish",onClick:e[3]||(e[3]=a=>g()),disabled:o.value},null,8,["disabled"])]),_:1})])])}}};export{I as default};
