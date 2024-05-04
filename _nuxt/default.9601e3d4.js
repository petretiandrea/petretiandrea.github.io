import{_ as b}from"./nuxt-link.1f784a13.js";import g from"./Icon.bdd82df8.js";import{T as v,_,o as a,c as r,a as e,F as $,r as w,b as s,w as d,j as x,h as f,d as L,t as i,a6 as M}from"./entry.fb667f58.js";import{s as j}from"./siteinfo.0f0c4974.js";import"./index.b8fe2cb5.js";const C=()=>v("color-mode").value,F=[{name_key:"menu_home",path:"/"},{name_key:"menu_projects",path:"/projects"},{name_key:"menu_blog",path:"/blog"},{name_key:"menu_cv",path:"/cv/index.html",external:!0}];const N={name:"Header",data(){return{navLinks:F}},methods:{setColorTheme:t=>{console.log(t),C().preference=t}}},B={class:"md:max-w-6xl mx-auto sticky top-0 z-50"},H={class:"bg-white dark:bg-gray-900 flex flex-wrap items-center justify-center px-10 md:py-4 py-2 overflow-hidden border-b dark:border-gray-700 border-gray-200 font-2xl sm:px-4 md:overflow-visible md:px-2"},I=e("input",{class:"menu-btn hidden",type:"checkbox",id:"menu-btn"},null,-1),V=e("label",{class:"menu-icon block cursor-pointer md:hidden px-2 relative select-none",for:"menu-btn"},[e("span",{class:"bg-grey-darkest flex items-center relative"})],-1),S={class:"flex justify-center list-reset m-0 w-full md:w-auto"},D={class:"flex items-center"};function P(t,m,p,h,n,u){const o=b,l=g;return a(),r("nav",B,[e("div",H,[I,V,e("ul",S,[(a(!0),r($,null,w(n.navLinks,c=>(a(),r("li",{key:c.path},[s(o,{to:c.path,external:c.external??!1,class:"block md:inline-block px-4 py-3 no-underline dark:text-white text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl"},{default:d(()=>[L(i(t.$t(c.name_key)),1)]),_:2},1032,["to","external"])]))),128))]),e("ul",D,[e("li",null,[t.$i18n.locale!=="en"?(a(),x(o,{key:0,to:t.switchLocalePath("en"),class:"block md:inline-block px-4 py-3 no-underline dark:text-white text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl"},{default:d(()=>[s(l,{name:"circle-flags:en",color:"black",class:"w-5 h-5 mr-1"})]),_:1},8,["to"])):f("",!0),t.$i18n.locale!=="it"?(a(),x(o,{key:1,to:t.switchLocalePath("it"),class:"block md:inline-block px-4 py-3 no-underline dark:text-white text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl"},{default:d(()=>[s(l,{name:"circle-flags:it",color:"black",class:"w-5 h-5 mr-1"})]),_:1},8,["to"])):f("",!0)])])])])}const k=_(N,[["render",P]]),T={data(){return{siteMetadata:j}}},q={class:"flex flex-col items-center pt-16 dark:bg-gray-900"},z={class:"flex mb-3 space-x-4"},E=["href"],Y=e("span",{class:"sr-only"},"github",-1),A=["href"],G=e("span",{class:"sr-only"},"Linkedin",-1),J=["href"],K=e("span",{class:"sr-only"},"mail",-1),O={class:"flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400"},Q=e("div",null,"•",-1),R={href:"/"},U=e("div",{class:"mb-8 text-sm text-gray-500 dark:text-gray-400"},[e("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mdrathik/tailwind-nuxtjs-starter-blog"})],-1);function W(t,m,p,h,n,u){const o=g;return a(),r("footer",null,[e("div",q,[e("div",z,[e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n.siteMetadata.github},[Y,s(o,{class:"w-8 h-8",name:"fa:github"})],8,E),e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n.siteMetadata.linkedin},[G,s(o,{class:"w-8 h-8",name:"fa:linkedin-square"})],8,A),e("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:`mailto:${n.siteMetadata.email}`},[K,s(o,{class:"w-8 h-8",name:"fa:envelope"})],8,J)]),e("div",O,[e("div",null,"Copyright © "+i(new Date().getFullYear()),1),Q,e("a",R,i(n.siteMetadata.author)+"'s blog - "+i(n.siteMetadata.slogan),1)]),U])])}const y=_(T,[["render",W]]);const X={component:{Header:k,Footer:y}},Z={class:"dark:bg-gray-900 bg-white"},ee={class:"w-full px-6 pb-12 antialiased fill-viewport"},te={class:"mx-auto max-w-8xl fill-viewport"};function oe(t,m,p,h,n,u){const o=k,l=y;return a(),r("div",Z,[e("section",ee,[e("div",te,[s(o),M(t.$slots,"default",{},void 0,!0),s(l,{class:"sticky top-[100vh]"})])])])}const ce=_(X,[["render",oe],["__scopeId","data-v-f8ba1f59"]]);export{ce as default};
