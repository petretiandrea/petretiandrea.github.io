import{_ as l}from"./nuxt-img.8eecbbec.js";import m from"./ContentDoc.5216014f.js";import{_ as d,u as _,c as u,a as e,t as o,b as n,o as p}from"./entry.b4e5b5f6.js";import{u as x,q as h}from"./query.d9da5c16.js";import{s as f}from"./siteinfo.b422693f.js";import"./vue.f36acd1f.fe02be64.js";import"./ContentRenderer.63434561.js";import"./ContentRendererMarkdown.vue.07ce0877.js";import"./index.d7bbaf09.js";import"./preview.b77c1f27.js";import"./ContentQuery.18309417.js";const g={data(){return{title:0,siteMetadata:f}},methods:{formatDate(t){const s={year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString("en",s)}},setup:async()=>{const{params:t}=_(),{data:s}=await x("article",()=>h("/blog",t.slug).findOne());return{article:s}},mounted(){},head(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description}]}}},y={class:"px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10"},b={class:"text-center font-bold my-5 text-indigo-500"},k={class:"text-4xl text-gray-700 font-extrabold mb-10 text-center"},v={class:"flex items-center font-medium mt-6 sm:mx-3 justify-center"},w={class:"text-slate-900 dark:text-slate-200"},D=["href"],M=["src"];function B(t,s,q,C,a,r){const i=l,c=m;return p(),u("div",y,[e("p",b,o(r.formatDate(t.article.date)),1),e("h1",k,o(t.article.title),1),e("div",v,[n(i,{src:a.siteMetadata.author_image,loading:"lazy",alt:"",class:"mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"},null,8,["src"]),e("div",null,[e("div",w,o(a.siteMetadata.author),1),e("a",{target:"_blank",href:a.siteMetadata.github,class:"text-sky-500 hover:text-sky-600 dark:text-sky-400"}," @"+o(a.siteMetadata.githubUser),9,D)])]),e("img",{class:"mx-auto w-4/5 my-10 rounded-md drop-shadow-sm",src:t.article.image},null,8,M),n(c,{class:"prose min-w-full p-10 mx-auto",document:t.article},null,8,["document"])])}const U=d(g,[["render",B]]);export{U as default};
