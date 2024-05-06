import{_ as x}from"./nuxt-img.5c9b3b53.js";import b from"./Icon.1ca98d04.js";import{s as u}from"./siteinfo.0f0c4974.js";import{_ as f,o as i,c,a as e,b as n,t as s,g as y,f as $,F as k,r as w,n as p,d as v,h as M,i as j}from"./entry.6b15e5c5.js";import{u as C,q as I}from"./query.a056e237.js";import"./vue.f36acd1f.5eb82967.js";import"./index.b8fe2cb5.js";import"./preview.e0f070bd.js";const z={data:()=>({siteMetadata:u})},A={class:"md:fixed"},D={class:"md:block flex justify-center items-center"},F={class:"mb-2 mx-7 mt-4 justify-center items-center"},B={class:"md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100"},N={class:"md:text-lg text-gray-600 dark:text-blue-100"},T=["href"],V={class:"mx-7 hidden md:block"},S={class:"my-2 text-gray-600 flex dark:text-blue-100 items-center"},q=["href"],L={class:"my-2 text-gray-600 flex dark:text-blue-100 items-center"},O={class:"my-2 text-gray-600 flex dark:text-blue-200 items-center"},U=["href"];function E(t,a,l,d,h,m){const _=x,r=b;return i(),c("div",A,[e("div",D,[n(_,{src:t.siteMetadata.author_image,loading:"lazy",alt:"me",class:"shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full"},null,8,["src"]),e("div",F,[e("h1",B,s(t.siteMetadata.author),1),e("div",N,s(t.siteMetadata.position),1),e("a",{href:`mailto:${t.siteMetadata.email}`,class:"text-gray-600 md:hidden mt-1 dark:text-blue-100"},s(t.siteMetadata.email),9,T)])]),e("div",V,[e("div",S,[n(r,{name:"ic:baseline-mail",color:"black",class:"w-5 h-5 mr-1"}),e("a",{class:"align-middle",href:`mailto:${t.siteMetadata.email}`},s(t.siteMetadata.email),9,q)]),e("div",L,[n(r,{name:"material-symbols:globe",color:"black",class:"w-5 h-5 mr-1"}),e("p",null,s(t.siteMetadata.location),1)]),e("div",O,[n(r,{name:"grommet-icons:github",color:"black",class:"w-5 h-5 mr-1"}),e("a",{href:t.siteMetadata.github},s(t.siteMetadata.githubUser),9,U)])])])}const Y=f(z,[["render",E]]),G={},H={class:"mb-6"},J={class:"mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200"},K={class:"mt-8 mb-4 dark:text-white text-justify"};function P(t,a){return i(),c("div",H,[e("h2",J,s(t.$t("welcome")),1),e("p",K,s(t.$t("about_me")),1)])}const Q=f(G,[["render",P]]),R={class:"opacity-100 mt-10"},W={class:"relative border-l border-gray-200 dark:border-gray-700"},X={key:0,class:"bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"},Z={class:"block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"},tt={class:"mb-4 text-base font-normal text-gray-500 dark:text-gray-400"},et={methods:{formatFromDate:function(t){return this.capitalize(this.format_date(t))},format_date:function(t){if(!t)return"";let a=new Date(t);const l=a.toLocaleString("default",{month:"long"}),d=a.getFullYear();return`${l.toString()} ${d}`},capitalize:function(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""},colorToBackground:function(t,a){return`bg-${t}-${a}`}}},at=Object.assign(et,{__name:"Timeline",async setup(t){let a,l;const{locale:{value:d}}=y(),{data:h}=([a,l]=$(async()=>C("experiences",async()=>(await I(`${d}/experiences`).findOne()).experiences.reverse())),a=await a,l(),a);return(m,_)=>{const r=b;return i(),c("div",R,[e("ol",W,[(i(!0),c(k,null,w(j(h),(o,g)=>(i(),c("li",{key:g,class:"mb-10 ml-6"},[e("span",{class:p(["flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",`bg-${o.color}-500`])},[n(r,{name:o.icon,color:"white",class:"w-3 h-3"},null,8,["name"])],2),e("h3",{class:p(["flex items-center mb-1 text-lg font-semibold dark:text-white",`text-${o.color}-500`])},[v(s(o.title)+" ",1),o.currently?(i(),c("span",X,s(m.$t("actual_job_label")),1)):M("",!0)],2),e("time",Z,s(m.formatFromDate(o.from)),1),e("p",tt,s(o.description),1)]))),128))])])}}}),st=at,ot={data(){return{siteMetaInfo:u}},head:{title:u.title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:u.description}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]}},nt={class:"dark:bg-gray-900 mt-6"},rt={class:"max-w-screen-lg md:flex mx-auto dark:bg-gray-900"},it={class:"md:w-1/3 p-2 md:flex md:justify-center"},ct={class:"md:w-2/3 px-8"};function lt(t,a,l,d,h,m){const _=Y,r=Q,o=st;return i(),c("div",nt,[e("div",rt,[e("div",it,[n(_)]),e("div",ct,[n(r),n(o)])])])}const gt=f(ot,[["render",lt]]);export{gt as default};
