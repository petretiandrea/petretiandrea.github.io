import{_ as h}from"./C6rsp2Et.js";import{_ as x}from"./BeBFUo1Z.js";import{n as f,o,c as n,b as p,w as b,a as s,t as r,F as m,r as g,g as u,e as k,l as w,p as y}from"./1tOctLqo.js";import{q as v}from"./Boxexsby.js";import"./SaxyMzpv.js";const D={class:"group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300"},B={class:"sm:col-span-3"},I={class:"sm:col-span-7 p-5"},S={class:"text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"},T={class:"text-ellipsis line-clamp-2"},j={class:"text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6"},z={class:"flex items-center",datetime:"2022-02-24T12:00:00.000Z"},C={class:"flex items-center gap-1 flex-wrap"},L={props:["title","description","date","slug","image","tags"],data(){return{postTitle:this.title,postDescription:this.description,postSlug:this.slug,postDate:this.date,postImage:this.image,postTags:this.tags}},methods:{formatDate(l){const a={year:"numeric",month:"long",day:"numeric"};return new Date(l).toLocaleDateString("en",a)}}},_=Object.assign(L,{__name:"BlogCardItem",setup(l){const a=f();return(t,c)=>{const d=h,i=x;return o(),n("article",D,[p(i,{to:u(a)({name:"blog-slug",params:{slug:t.postSlug}}),class:"grid grid-cols-1 sm:grid-cols-10 gap-1"},{default:b(()=>[s("div",B,[p(d,{class:"h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500",width:"300",height:"150",src:t.postImage},null,8,["src"])]),s("div",I,[s("h2",S,r(t.postTitle),1),s("p",T,r(t.postDescription),1),s("div",j,[s("time",z,r(t.formatDate(t.postDate)),1),s("div",C,[(o(!0),n(m,null,g(t.postTags,e=>(o(),n("p",{key:e,class:"bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold"},r(e),1))),128))])])])]),_:1},8,["to"])])}}}),N={class:"space-y-16 mx-auto max-w-7xl"},P={components:[_],head:{title:"Blogs",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Its Solaiman's Pen and Paper to write "}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]}},V=Object.assign(P,{__name:"index",async setup(l){let a,t;const{data:c}=([a,t]=k(()=>w("articles",()=>v("/blog").only(["title","description","image","slug","tags","author","date","draft"]).where({draft:!1}).sort({date:-1}).find())),a=await a,t(),a);return(d,i)=>(o(),n("div",null,[i[0]||(i[0]=s("header",{class:"pt-16 pb-9 sm:pb-16 sm:text-center"},[s("h1",{class:"mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200"}," Blog ")],-1)),s("div",N,[(o(!0),n(m,null,g(u(c),e=>(o(),y(_,{key:e.title,title:e.title,description:e.description,date:e.date,slug:e.slug,image:e.image,tags:e.tags},null,8,["title","description","date","slug","image","tags"]))),128))])]))}});export{V as default};
