import{u as $,x as b,b as p,c as t,j as s,h as n,F as d,y as _,f as u,w as f,t as l,z as h,g as v,k as m,m as j}from"./index-B6eCSnCN.js";import{_ as A}from"./SpeedDial-CBYpw_qj.js";const B={class:"flex flex-col px-2 py-2"},H={class:"py-2 flex flex-row gap-2"},I={class:"font-semibold"},T={class:"text-xs"},D=["innerHTML"],F={key:0,id:"media"},M=["src","alt"],E=["src"],P=n("hr",null,null,-1),G={__name:"Home",setup(R){const{timeAgo:x}=j("app"),k=$(),y=b(()=>k.posts);let c=0;function g(){c++}function w(){c=0}function C(i){let a=[];for(let o=0;o<i.length;o+=2)a.push(i.slice(o,o+2));return a}return(i,N)=>{const a=p("v-img"),o=p("router-link");return t(),s("div",null,[n("div",B,[(t(!0),s(d,null,_(y.value,(e,S)=>(t(),s("div",{key:S,class:"clearfix"},[n("div",H,[n("div",null,[u(o,{to:`/${e.authors[0].username}`},{default:f(()=>[u(a,{src:e.authors[0].photoURL,alt:e.authors[0].displayName+"'s DP",class:"w-12 h-12 rounded-full"},null,8,["src","alt"])]),_:2},1032,["to"])]),n("div",null,[u(o,{to:`/${e.authors[0].username}`},{default:f(()=>[n("div",null,[n("span",I,l(e.authors[0].displayName),1),h("   "),n("span",T,"@"+l(e.authors[0].username)+" • "+l(v(x)(e.createdAt)),1)])]),_:2},1032,["to"]),n("div",null,[n("p",{class:"whitespace-pre-line",innerHTML:e.text},null,8,D)]),e.media.length>0?(t(),s("div",F,[(t(!0),s(d,null,_(C(e.media),(z,L)=>(t(),s("div",{key:L,class:"frame flex flex-row justify-between"},[(t(!0),s(d,null,_(z,(r,V)=>(t(),s("div",{key:V},[h(l(g())+" ",1),r.type=="photo"?(t(),s("img",{key:0,src:r.url,alt:`Status Item ${v(c)}`,class:"max-h-96"},null,8,M)):m("",!0),r.type=="video"?(t(),s("video",{key:1,src:r.url,controls:"",class:"w-96 h-96"},null,8,E)):m("",!0)]))),128))]))),128))])):m("",!0)])]),P,h(" "+l(w()),1)]))),128))]),u(A)])}}};export{G as default};
