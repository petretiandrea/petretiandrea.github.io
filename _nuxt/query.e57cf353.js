import{U as H,C as v,V as K,W as N,X as I,Y as P,G as W,z as q,Z as Q,i as J,Q as V,$ as G,y as S,l as X,m as Y,a0 as Z,R as tt}from"./entry.bb788f3f.js";import{u as $}from"./preview.516a8dfc.js";const k=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function et(s,n){n?n={...k,...n}:n=k;const r=j(n);return r.dispatch(s),r.toString()}const rt=Object.freeze(["prototype","__proto__","constructor"]);function j(s){let n="",r=new Map;const e=t=>{n+=t};return{toString(){return n},getContext(){return r},dispatch(t){return s.replacer&&(t=s.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let i="";const u=a.length;u<10?i="unknown:["+a+"]":i=a.slice(8,u-1),i=i.toLowerCase();let o=null;if((o=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](t):s.ignoreUnknown||this.unkown(t,i);else{let c=Object.keys(t);s.unorderedObjects&&(c=c.sort());let h=[];s.respectType!==!1&&!O(t)&&(h=rt),s.excludeKeys&&(c=c.filter(l=>!s.excludeKeys(l)),h=h.filter(l=>!s.excludeKeys(l))),e("object:"+(c.length+h.length)+":");const p=l=>{this.dispatch(l),e(":"),s.excludeValues||this.dispatch(t[l]),e(",")};for(const l of c)p(l);for(const l of h)p(l)}},array(t,a){if(a=a===void 0?s.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const o of t)this.dispatch(o);return}const i=new Map,u=t.map(o=>{const c=j(s);c.dispatch(o);for(const[h,p]of c.getContext())i.set(h,p);return c.toString()});return r=i,u.sort(),this.array(u,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),O(t)?this.dispatch("[native]"):this.dispatch(t.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),s.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,s.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,s.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(s.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const L="[native code] }",nt=L.length;function O(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-nt)===L}class w{constructor(n,r){n=this.words=n||[],this.sigBytes=r===void 0?n.length*4:r}toString(n){return(n||st).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const st={stringify(s){const n=[];for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},it={stringify(s){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<s.sigBytes;e+=3){const t=s.words[e>>>2]>>>24-e%4*8&255,a=s.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=s.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=t<<16|a<<8|i;for(let o=0;o<4&&e*8+o*6<s.sigBytes*8;o++)r.push(n.charAt(u>>>6*(3-o)&63))}return r.join("")}},at={parse(s){const n=s.length,r=[];for(let e=0;e<n;e++)r[e>>>2]|=(s.charCodeAt(e)&255)<<24-e%4*8;return new w(r,n)}},ot={parse(s){return at.parse(unescape(encodeURIComponent(s)))}};class ct{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=ot.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);r=this._data.words.splice(0,t),this._data.sigBytes-=a}return new w(r,a)}}class ut extends ct{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const A=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],lt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],_=[];class ft extends ut{constructor(){super(...arguments),this._hash=new w([...A])}reset(){super.reset(),this._hash=new w([...A])}_doProcessBlock(n,r){const e=this._hash.words;let t=e[0],a=e[1],i=e[2],u=e[3],o=e[4],c=e[5],h=e[6],p=e[7];for(let l=0;l<64;l++){if(l<16)_[l]=n[r+l]|0;else{const b=_[l-15],U=(b<<25|b>>>7)^(b<<14|b>>>18)^b>>>3,B=_[l-2],M=(B<<15|B>>>17)^(B<<13|B>>>19)^B>>>10;_[l]=U+_[l-7]+M+_[l-16]}const x=o&c^~o&h,d=t&a^t&i^a&i,m=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),f=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),y=p+f+x+lt[l]+_[l],D=m+d;p=h,h=c,c=o,o=u+y|0,u=i,i=a,a=t,t=y+D|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+i|0,e[3]=e[3]+u|0,e[4]=e[4]+o|0,e[5]=e[5]+c|0,e[6]=e[6]+h|0,e[7]=e[7]+p|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ht(s){return new ft().finalize(s).toString(it)}function z(s,n={}){const r=typeof s=="string"?s:et(s,n);return ht(r).slice(0,10)}function xt(...s){var x;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[r,e,t={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=q(),i=()=>null,u=()=>a.isHydrating?a.payload.data[r]:a.static.data[r];t.server=t.server??!0,t.default=t.default??i,t.getCachedData=t.getCachedData??u,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??H.deep;const o=()=>![null,void 0].includes(t.getCachedData(r));if(!a._asyncData[r]||!t.immediate){(x=a.payload._errors)[r]??(x[r]=null);const d=t.deep?v:K;a._asyncData[r]={data:d(t.getCachedData(r)??t.default()),pending:v(!o()),error:N(a.payload._errors,r),status:v("idle")}}const c={...a._asyncData[r]};c.refresh=c.execute=(d={})=>{if(a._asyncDataPromises[r]){if(d.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if((d._initial||a.isHydrating&&d._initial!==!1)&&o())return Promise.resolve(t.getCachedData(r));c.pending.value=!0,c.status.value="pending";const m=new Promise((f,y)=>{try{f(e(a))}catch(D){y(D)}}).then(f=>{if(m.cancelled)return a._asyncDataPromises[r];let y=f;t.transform&&(y=t.transform(f)),t.pick&&(y=dt(y,t.pick)),a.payload.data[r]=y,c.data.value=y,c.error.value=null,c.status.value="success"}).catch(f=>{if(m.cancelled)return a._asyncDataPromises[r];c.error.value=Q(f),c.data.value=J(t.default()),c.status.value="error"}).finally(()=>{m.cancelled||(c.pending.value=!1,delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=m,a._asyncDataPromises[r]};const h=()=>c.refresh({_initial:!0}),p=t.server!==!1&&a.payload.serverRendered;{const d=V();if(d&&!d._nuxtOnBeforeMountCbs){d._nuxtOnBeforeMountCbs=[];const f=d._nuxtOnBeforeMountCbs;d&&(I(()=>{f.forEach(y=>{y()}),f.splice(0,f.length)}),P(()=>f.splice(0,f.length)))}p&&a.isHydrating&&(c.error.value||o())?(c.pending.value=!1,c.status.value=c.error.value?"error":"success"):d&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?d._nuxtOnBeforeMountCbs.push(h):t.immediate&&h(),t.watch&&W(t.watch,()=>c.refresh());const m=a.hook("app:data:refresh",async f=>{(!f||f.includes(r))&&await c.refresh()});d&&P(m)}const l=Promise.resolve(a._asyncDataPromises[r]).then(()=>c);return Object.assign(l,c),l}function dt(s,n){const r={};for(const e of n)r[e]=s[e];return r}const R=(s,n)=>n.split(".").reduce((r,e)=>r&&r[e],s),C=(s,n)=>Object.keys(s).filter(n).reduce((r,e)=>Object.assign(r,{[e]:s[e]}),{}),St=s=>n=>s&&s.length?C(n,r=>!s.includes(r)):n,Dt=s=>n=>Array.isArray(n)?n.map(r=>s(r)):s(n),F=s=>{const n=[],r=[];for(const e of s)["$","_"].includes(e)?n.push(e):r.push(e);return{prefixes:n,properties:r}},vt=(s=[])=>n=>{if(s.length===0||!n)return n;const{prefixes:r,properties:e}=F(s);return C(n,t=>!e.includes(t)&&!r.includes(t[0]))},Ct=(s=[])=>n=>{if(s.length===0||!n)return n;const{prefixes:r,properties:e}=F(s);return C(n,t=>e.includes(t)||r.includes(t[0]))},Pt=(s,n)=>{const r=new Intl.Collator(n.$locale,{numeric:n.$numeric,caseFirst:n.$caseFirst,sensitivity:n.$sensitivity}),e=Object.keys(n).filter(t=>!t.startsWith("$"));for(const t of e)s=s.sort((a,i)=>{const u=[R(a,t),R(i,t)].map(o=>{if(o!==null)return o instanceof Date?o.toISOString():o});return n[t]===-1&&u.reverse(),r.compare(u[0],u[1])});return s},kt=(s,n="Expected an array")=>{if(!Array.isArray(s))throw new TypeError(n)},g=s=>Array.isArray(s)?s:[void 0,null].includes(s)?[]:[s],pt=["sort","where","only","without"];function yt(s,n={}){const r={};for(const i of Object.keys(n.initialParams||{}))r[i]=pt.includes(i)?g(n.initialParams[i]):n.initialParams[i];const e=(i,u=o=>o)=>(...o)=>(r[i]=u(...o),a),t=i=>{var u;return n.legacy?i!=null&&i.surround?i.surround:i&&(i!=null&&i.dirConfig&&(i.result={_path:(u=i.dirConfig)==null?void 0:u._path,...i.result,_dir:i.dirConfig}),i!=null&&i._path||Array.isArray(i)||!Object.prototype.hasOwnProperty.call(i,"result")?i:i==null?void 0:i.result):i},a={params:()=>({...r,...r.where?{where:[...g(r.where)]}:{},...r.sort?{sort:[...g(r.sort)]}:{}}),only:e("only",g),without:e("without",g),where:e("where",i=>[...g(r.where),...g(i)]),sort:e("sort",i=>[...g(r.sort),...g(i)]),limit:e("limit",i=>parseInt(String(i),10)),skip:e("skip",i=>parseInt(String(i),10)),find:()=>s(a).then(t),findOne:()=>s(e("first")(!0)).then(t),count:()=>s(e("count")(!0)).then(t),locale:i=>a.where({_locale:i}),withSurround:e("surround",(i,u)=>({query:i,...u})),withDirConfig:()=>e("dirConfig")(!0)};return n.legacy&&(a.findSurround=(i,u)=>a.withSurround(i,u).find().then(t)),a}function T(s){return JSON.stringify(s,gt)}function gt(s,n){return n instanceof RegExp?`--REGEX ${n.toString()}`:n}const mt=s=>{let n=T(s);return n=typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n),n=n.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(n.match(/.{1,100}/g)||[]).join("/")},E=s=>G(s,S().public.content.api.baseURL),Ot=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},wt=()=>{const{experimental:s}=S().public.content;return s.clientDB?!0:$().isEnabled()},_t=()=>async s=>{const{content:n}=S().public,r=s.params(),e=n.experimental.stripQueryParameters?E(`/query/${`${z(r)}.${n.integrity}`}/${mt(r)}.json`):E(`/query/${z(r)}.${n.integrity}.json`);if(wt())return(await tt(()=>import("./client-db.67b05532.js"),["./client-db.67b05532.js","./entry.bb788f3f.js","./entry.00e4ca28.css","./index.13aa9e49.js","./preview.516a8dfc.js"],import.meta.url).then(i=>i.useContentDatabase())).fetch(s);const t=await $fetch(e,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:T(r),previewToken:$().getPreviewToken()}});if(typeof t=="string"&&t.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return t};function At(s,...n){const{content:r}=S().public,e=yt(_t(),{initialParams:typeof s!="string"?s:{},legacy:!0});let t;typeof s=="string"&&(t=X(Y(s,...n)));const a=e.params;return e.params=()=>{var u,o,c;const i=a();return t&&(i.where=i.where||[],i.first&&(i.where||[]).length===0?i.where.push({_path:Z(t)}):i.where.push({_path:new RegExp(`^${t.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=i.sort)!=null&&u.length||(i.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((c=(o=i.where)==null?void 0:o.find(p=>p._locale))!=null&&c._locale||(i.where=i.where||[],i.where.push({_locale:r.defaultLocale}))),i},e}export{Ot as a,kt as b,g as c,Pt as d,mt as e,Dt as f,R as g,z as h,vt as i,T as j,Ct as k,yt as l,St as o,At as q,wt as s,xt as u,E as w};
