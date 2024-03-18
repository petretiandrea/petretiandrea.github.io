function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DddXY-uz.js","./AHO-kqBb.js","./entry.D-EUmHV0.css","./BsYmvPZw.js","./DGZqm0b5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{V as x,C as w,W as T,X as L,Y as j,Z as P,G as q,z as I,$ as Q,i as F,Q as M,a0 as z,y as g,l as H,m as K,a1 as N,R as C,S as U}from"./AHO-kqBb.js";import{u as E}from"./DGZqm0b5.js";const A=e=>e==="defer"||e===!1;function re(...e){var v;const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);let[r,i,n={}]=e;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=I(),a=i,c=()=>null,f=()=>s.isHydrating?s.payload.data[r]:s.static.data[r];n.server=n.server??!0,n.default=n.default??c,n.getCachedData=n.getCachedData??f,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0,n.deep=n.deep??x.deep,n.dedupe=n.dedupe??"cancel";const y=()=>n.getCachedData(r,s)!=null;if(!s._asyncData[r]||!n.immediate){(v=s.payload._errors)[r]??(v[r]=null);const l=n.deep?w:T;s._asyncData[r]={data:l(n.getCachedData(r,s)??n.default()),pending:w(!y()),error:L(s.payload._errors,r),status:w("idle")}}const o={...s._asyncData[r]};o.refresh=o.execute=(l={})=>{if(s._asyncDataPromises[r]){if(A(l.dedupe??n.dedupe))return s._asyncDataPromises[r];s._asyncDataPromises[r].cancelled=!0}if((l._initial||s.isHydrating&&l._initial!==!1)&&y())return Promise.resolve(n.getCachedData(r,s));o.pending.value=!0,o.status.value="pending";const p=new Promise((u,d)=>{try{u(a(s))}catch(B){d(B)}}).then(async u=>{if(p.cancelled)return s._asyncDataPromises[r];let d=u;n.transform&&(d=await n.transform(u)),n.pick&&(d=W(d,n.pick)),s.payload.data[r]=d,o.data.value=d,o.error.value=null,o.status.value="success"}).catch(u=>{if(p.cancelled)return s._asyncDataPromises[r];o.error.value=Q(u),o.data.value=F(n.default()),o.status.value="error"}).finally(()=>{p.cancelled||(o.pending.value=!1,delete s._asyncDataPromises[r])});return s._asyncDataPromises[r]=p,s._asyncDataPromises[r]},o.clear=()=>G(s,r);const m=()=>o.refresh({_initial:!0}),R=n.server!==!1&&s.payload.serverRendered;{const l=M();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const u=l._nuxtOnBeforeMountCbs;l&&(j(()=>{u.forEach(d=>{d()}),u.splice(0,u.length)}),P(()=>u.splice(0,u.length)))}R&&s.isHydrating&&(o.error.value||y())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):l&&(s.payload.serverRendered&&s.isHydrating||n.lazy)&&n.immediate?l._nuxtOnBeforeMountCbs.push(m):n.immediate&&m(),n.watch&&q(n.watch,()=>o.refresh());const p=s.hook("app:data:refresh",async u=>{(!u||u.includes(r))&&await o.refresh()});l&&P(p)}const D=Promise.resolve(s._asyncDataPromises[r]).then(()=>o);return Object.assign(D,o),D}function G(e,t){t in e.payload.data&&(e.payload.data[t]=void 0),t in e.payload._errors&&(e.payload._errors[t]=null),e._asyncData[t]&&(e._asyncData[t].data.value=void 0,e._asyncData[t].error.value=null,e._asyncData[t].pending.value=!1,e._asyncData[t].status.value="idle"),t in e._asyncDataPromises&&(e._asyncDataPromises[t].cancelled=!0,e._asyncDataPromises[t]=void 0)}function W(e,t){const r={};for(const i of t)r[i]=e[i];return r}const b=(e,t)=>t.split(".").reduce((r,i)=>r&&r[i],e),_=(e,t)=>Object.keys(e).filter(t).reduce((r,i)=>Object.assign(r,{[i]:e[i]}),{}),ae=e=>t=>e&&e.length?_(t,r=>!e.includes(r)):t,ne=e=>t=>Array.isArray(t)?t.map(r=>e(r)):e(t),O=e=>{const t=[],r=[];for(const i of e)["$","_"].includes(i)?t.push(i):r.push(i);return{prefixes:t,properties:r}},se=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:r,properties:i}=O(e);return _(t,n=>!i.includes(n)&&!r.includes(n[0]))},ie=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:r,properties:i}=O(e);return _(t,n=>i.includes(n)||r.includes(n[0]))},oe=(e,t)=>{const r=new Intl.Collator(t.$locale,{numeric:t.$numeric,caseFirst:t.$caseFirst,sensitivity:t.$sensitivity}),i=Object.keys(t).filter(n=>!n.startsWith("$"));for(const n of i)e=e.sort((s,a)=>{const c=[b(s,n),b(a,n)].map(f=>{if(f!==null)return f instanceof Date?f.toISOString():f});return t[n]===-1&&c.reverse(),r.compare(c[0],c[1])});return e},ce=(e,t="Expected an array")=>{if(!Array.isArray(e))throw new TypeError(t)},h=e=>Array.isArray(e)?e:[void 0,null].includes(e)?[]:[e],k=["sort","where","only","without"];function V(e,t={}){const r={};for(const a of Object.keys(t.initialParams||{}))r[a]=k.includes(a)?h(t.initialParams[a]):t.initialParams[a];const i=(a,c=f=>f)=>(...f)=>(r[a]=c(...f),s),n=a=>{var c;return t.legacy?a!=null&&a.surround?a.surround:a&&(a!=null&&a.dirConfig&&(a.result={_path:(c=a.dirConfig)==null?void 0:c._path,...a.result,_dir:a.dirConfig}),a!=null&&a._path||Array.isArray(a)||!Object.prototype.hasOwnProperty.call(a,"result")?a:a==null?void 0:a.result):a},s={params:()=>({...r,...r.where?{where:[...h(r.where)]}:{},...r.sort?{sort:[...h(r.sort)]}:{}}),only:i("only",h),without:i("without",h),where:i("where",a=>[...h(r.where),...h(a)]),sort:i("sort",a=>[...h(r.sort),...h(a)]),limit:i("limit",a=>parseInt(String(a),10)),skip:i("skip",a=>parseInt(String(a),10)),find:()=>e(s).then(n),findOne:()=>e(i("first")(!0)).then(n),count:()=>e(i("count")(!0)).then(n),locale:a=>s.where({_locale:a}),withSurround:i("surround",(a,c)=>({query:a,...c})),withDirConfig:()=>i("dirConfig")(!0)};return t.legacy&&(s.findSurround=(a,c)=>s.withSurround(a,c).find().then(n)),s}function S(e){return JSON.stringify(e,X)}function X(e,t){return t instanceof RegExp?`--REGEX ${t.toString()}`:t}const Y=e=>{let t=S(e);return t=typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t),t=t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(t.match(/.{1,100}/g)||[]).join("/")},$=e=>z(e,g().public.content.api.baseURL),ue=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},J=()=>{const{experimental:e}=g().public.content;return e.clientDB?!0:E().isEnabled()},Z=()=>async e=>{const{content:t}=g().public,r=e.params(),i=t.experimental.stripQueryParameters?$(`/query/${`${C(r)}.${t.integrity}`}/${Y(r)}.json`):$(`/query/${C(r)}.${t.integrity}.json`);if(J())return(await U(()=>import("./DddXY-uz.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(a=>a.useContentDatabase())).fetch(e);const n=await $fetch(i,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:S(r),previewToken:E().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};function le(e,...t){const{content:r}=g().public,i=V(Z(),{initialParams:typeof e!="string"?e:{},legacy:!0});let n;typeof e=="string"&&(n=H(K(e,...t)));const s=i.params;return i.params=()=>{var c,f,y;const a=s();return n&&(a.where=a.where||[],a.first&&(a.where||[]).length===0?a.where.push({_path:N(n)}):a.where.push({_path:new RegExp(`^${n.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=a.sort)!=null&&c.length||(a.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((y=(f=a.where)==null?void 0:f.find(m=>m._locale))!=null&&y._locale||(a.where=a.where||[],a.where.push({_locale:r.defaultLocale}))),a},i}export{ue as a,ce as b,h as c,oe as d,Y as e,ne as f,b as g,se as h,ie as i,S as j,V as k,ae as o,le as q,J as s,re as u,$ as w};
