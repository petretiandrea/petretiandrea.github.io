import{_ as m}from"./CjXWPMup.js";import x from"./3WHx5IFS.js";import{_ as u,o as a,c as i,a as t,t as c,b as h,i as g,h as f,g as b,F as y,r as j,j as v,k as w}from"./Dz06TfGM.js";import{u as k,q as $}from"./DUWBZgQ6.js";import"./BUjd4Jrz.js";import"./CwAI1wqI.js";import"./BUH9MuGd.js";const T={props:["title","description","thumbnail","github","tags"],data(){return{projectTitle:this.title,projectDescription:this.description,projectGithub:this.github,projectTags:this.tags,projectThumbnail:this.thumbnail}},methods:{formatTags:r=>(console.log(r),(r??[]).join(" • "))}},B={class:"p-4 md:w-1/2 md",style:{"max-width":"544px"}},D={class:"col-span-1 h-full p-6 flex flex-col overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700"},N={class:"text-2xl font-bold leading-8 tracking-tight mb-3"},S=["innerHTML"],C={class:"flex flex-wrap mt-auto justify-between"},G={key:0,class:"mx-1"},I=["href"],L=t("span",{class:"sr-only"},"github",-1),M={class:"flex flex-wrap mt-2"},V={class:"text-gray-400 text-sm font-extralight"};function q(r,n,l,d,e,s){const p=m,_=x;return a(),i("div",B,[t("div",D,[t("h2",N,c(e.projectTitle),1),h(p,{src:e.projectThumbnail},null,8,["src"]),t("p",{class:"prose text-gray-500 max-w-none dark:text-gray-400 mb-3 h-auto",innerHTML:e.projectDescription},null,8,S),t("div",C,[e.projectGithub?(a(),i("div",G,[t("a",{class:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:e.projectGithub},[L,h(_,{class:"w-4 h-4",name:"fa:github"})],8,I)])):g("",!0)]),t("div",M,[t("div",V,c(s.formatTags(e.projectTags)),1)])])])}const A=u(T,[["render",q]]),F={class:"max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0"},H={class:"pt-6 pb-8 space-y-2 md:space-y-5"},O={class:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"},P={class:"text-lg leading-7 text-gray-500 dark:text-gray-400"},E={class:"relative mb-auto"},z={class:""},J={class:"container py-12"},K={class:"flex flex-wrap -m-4"},Q={head:{title:"Md Solaiman | Projects",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Some of Projects developed by Solaiman"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]}},et=Object.assign(Q,{__name:"index",async setup(r){let n,l;const{locale:d}=f(),{data:e}=([n,l]=b(()=>k("projects",()=>$(`${d.value}/projects`).findOne().then(s=>s.works))),n=await n,l(),n);return(s,p)=>{const _=A;return a(),i("div",F,[t("div",H,[t("h1",O,c(s.$t("project_page_title")),1),t("p",P,c(s.$t("project_page_description")),1)]),t("main",E,[t("div",z,[t("div",J,[t("div",K,[(a(!0),i(y,null,j(v(e),o=>(a(),w(_,{key:o.title,title:o.title,description:o.description,github:o.github,thumbnail:o.thumbnail,tags:o.tags},null,8,["title","description","github","thumbnail","tags"]))),128))])])])])])}}});export{et as default};
