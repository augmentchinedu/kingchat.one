import{o as e,c as i,F as _,r as d,b as s,t as m,a as o,d as f}from"./index-BEzkNpsU.js";import{_ as l}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u="/assets/logo-Binpd2ma.png",p="/assets/avatar-B7z0J0_z.png",v={class:"flex flex-col my-2"},h={class:"flex flex-row justify-start"},x={class:"mx-2"},g=["src"],k={class:"inline-flex items-center"},w={__name:"Navigation",setup(t){const n=[{name:"Home",link:"/home",icon:"home"},{name:"Explore",link:"/explore",icon:"search"},{name:"Notifications",link:"/notifications",icon:"notifications"},{name:"Messages",link:"/messages",icon:"envelop"},{name:"Bookmarks",link:"/bookmarks",icon:"bookmark"},{name:"Communities",link:"/communities",icon:"users"},{name:"Spaces",link:"/spaces",icon:"mic"},{name:"Profile",link:"/profile",icon:"person"}];function a(r){return`./assets/icons/${r}.svg`}return(r,F)=>(e(),i("nav",v,[(e(),i(_,null,d(n,c=>s("a",{key:c,class:"px-4 mx-1"},[s("div",h,[s("div",x,[s("img",{src:a(c.icon),alt:""},null,8,g)]),s("div",k,[s("span",null,m(c.name),1)])])])),64))]))}},$={id:"left-sidebar",class:"bg-green-500 h-screen"},y={class:"px-4 h-full flex flex-col justify-between"},B=s("div",null,[s("img",{src:u,alt:"Avatar",class:"mx-auto my-4 w-20 h-20"})],-1),b=f('<footer id="account" class="my-8"><div class="px-2 flex justify-between"><div class="flex justify-start"><div id="bottom-avatar" class="mx-1"><img src="'+p+'" alt="Profile Image" class="w-12 h-12 rounded-full"></div><div id="profile" class="mx-1"><div>Lord God</div><div>@_augment</div></div></div><div class="flex flex-col justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></path></svg></div></div></footer>',1),S={__name:"LeftSideBar",setup(t){return(n,a)=>(e(),i("aside",$,[s("div",y,[s("div",null,[B,o(w)]),b])]))}},j={};function N(t,n){return e(),i("div",null,"RightSideBar")}const V=l(j,[["render",N]]),M={},L={id:"main-view"};function z(t,n){return e(),i("div",L,"MainView")}const C=l(M,[["render",z]]),E={id:"app-container"},R={__name:"Home",setup(t){return(n,a)=>(e(),i("div",E,[o(S),o(C),o(V)]))}};export{R as default};
