import{_ as l}from"./nuxt-img.m1ONWFNE.js";import m from"./ContentDoc.HfcBnU_a.js";import{_ as d,u,c as _,a as e,t as o,b as r,o as p}from"./entry.DfqPvVfE.js";import{u as x,q as h}from"./query.VL-5-NJn.js";import{s as f}from"./siteinfo.17W5Cxbq.js";import"./vue.f36acd1f.fi3AnkUs.js";import"./ContentRenderer.rX4AxGhP.js";import"./ContentRendererMarkdown.vue.sR6PtCWX.js";import"./index.1dSrIji7.js";import"./preview.xTfkbeBF.js";import"./ContentQuery.R2g2_VcK.js";const g={data(){return{title:0,siteMetadata:f}},methods:{formatDate(t){const s={year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString("en",s)}},setup:async()=>{const{params:t}=u(),{data:s}=await x("article",()=>h("/blog",t.slug).findOne());return{article:s}},mounted(){},head(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description}]}}},y={class:"px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10"},b={class:"text-center font-bold my-5 text-indigo-500"},k={class:"text-4xl text-gray-700 font-extrabold mb-10 text-center"},w={class:"flex items-center font-medium mt-6 sm:mx-3 justify-center"},D={class:"text-slate-900 dark:text-slate-200"},v=["href"],M=["src"];function B(t,s,q,C,a,n){const i=l,c=m;return p(),_("div",y,[e("p",b,o(n.formatDate(t.article.date)),1),e("h1",k,o(t.article.title),1),e("div",w,[r(i,{src:a.siteMetadata.author_image,loading:"lazy",alt:"",class:"mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"},null,8,["src"]),e("div",null,[e("div",D,o(a.siteMetadata.author),1),e("a",{target:"_blank",href:a.siteMetadata.github,class:"text-sky-500 hover:text-sky-600 dark:text-sky-400"}," @"+o(a.siteMetadata.githubUser),9,v)])]),e("img",{class:"mx-auto w-4/5 my-10 rounded-md drop-shadow-sm",src:t.article.image},null,8,M),r(c,{class:"prose min-w-full p-10 mx-auto",document:t.article},null,8,["document"])])}const U=d(g,[["render",B]]);export{U as default};
