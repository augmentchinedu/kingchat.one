import{u as z,v as L,b as V,c as t,j as s,h as n,F as u,x as i,f as h,t as l,y as d,g as m,k as _,z as b}from"./index-Bz6dU154.js";import{_ as j}from"./SpeedDial-C_gZ_6sN.js";const A={class:"flex flex-col px-2 py-2"},B={class:"py-2 flex flex-row gap-2"},H={class:"font-semibold"},I={class:"text-xs"},T=["innerHTML"],D={key:0,id:"media"},F=["src","alt"],M=["src"],$=n("hr",null,null,-1),U={__name:"Home",setup(E){const{timeAgo:p}=b("app"),f=z(),v=L(()=>f.posts);let r=0;function x(){r++}function y(){r=0}function k(c){let o=[];for(let e=0;e<c.length;e+=2)o.push(c.slice(e,e+2));return o}return(c,g)=>{const o=V("v-img");return t(),s("div",null,[n("div",A,[(t(!0),s(u,null,i(v.value,(e,w)=>(t(),s("div",{key:w,class:"clearfix"},[n("div",B,[n("div",null,[h(o,{src:e.authors[0].photoURL,alt:e.authors[0].displayName+"'s DP",class:"w-12 h-12 rounded-full"},null,8,["src","alt"])]),n("div",null,[n("div",null,[n("span",H,l(e.authors[0].displayName),1),d("   "),n("span",I,"@"+l(e.authors[0].username)+" • "+l(m(p)(e.createdAt)),1)]),n("div",null,[n("p",{class:"whitespace-pre-line",innerHTML:e.text},null,8,T)]),e.media.length>0?(t(),s("div",D,[(t(!0),s(u,null,i(k(e.media),(C,N)=>(t(),s("div",{key:N,class:"frame flex flex-row justify-between"},[(t(!0),s(u,null,i(C,(a,S)=>(t(),s("div",{key:S},[d(l(x())+" ",1),a.type=="photo"?(t(),s("img",{key:0,src:a.url,alt:`Status Item ${m(r)}`},null,8,F)):_("",!0),a.type=="video"?(t(),s("video",{key:1,src:a.url,controls:"",class:"w-96 h-96"},null,8,M)):_("",!0)]))),128))]))),128))])):_("",!0)])]),$,d(" "+l(y()),1)]))),128))]),h(j)])}}};export{U as default};