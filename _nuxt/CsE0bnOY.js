const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vNWY8cSY.js","./1tOctLqo.js","./entry.BjAMrLla.css","./Boxexsby.js","./SaxyMzpv.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{A as f,M as p,k as v,h as g,N as l,O as d,P as h,l as _,B as y,D as r}from"./1tOctLqo.js";import{q as C,w as m,e as w,s as P,j as N,u as $}from"./Boxexsby.js";import{u as j}from"./SaxyMzpv.js";import{_ as D}from"./BeBFUo1Z.js";const T=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./vNWY8cSY.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:N(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=d(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=$();return{navigation:n}}const{data:s}=await _(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(D,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),L=E;export{L as default};
