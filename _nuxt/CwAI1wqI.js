import{ak as c,f as t,al as l}from"./Dz06TfGM.js";const a={nuxt:{}},r=c(a);function m(){const i=t();return i._appConfig||(i._appConfig=l(r)),i._appConfig}const p=["fluent-emoji-high-contrast","material-symbols-light","cryptocurrency-color","icon-park-outline","icon-park-twotone","fluent-emoji-flat","emojione-monotone","streamline-emojis","heroicons-outline","simple-line-icons","material-symbols","flat-color-icons","icon-park-solid","pepicons-pencil","heroicons-solid","pepicons-print","cryptocurrency","pixelarticons","system-uicons","devicon-plain","entypo-social","grommet-icons","vscode-icons","pepicons-pop","svg-spinners","fluent-emoji","simple-icons","circle-flags","medical-icon","icomoon-free","majesticons","radix-icons","humbleicons","fa6-regular","emojione-v1","skill-icons","academicons","healthicons","fluent-mdl2","teenyicons","ant-design","gravity-ui","akar-icons","lets-icons","streamline","fa6-brands","file-icons","game-icons","foundation","fa-regular","mono-icons","iconamoon","zondicons","mdi-light","eos-icons","gridicons","icon-park","heroicons","fa6-solid","meteocons","arcticons","dashicons","fa-brands","websymbol","fontelico","mingcute","bytesize","guidance","openmoji","emojione","nonicons","brandico","flagpack","fa-solid","fontisto","si-glyph","pepicons","iconoir","tdesign","clarity","octicon","codicon","pajamas","formkit","line-md","twemoji","noto-v1","fxemoji","devicon","raphael","flat-ui","topcoat","feather","tabler","carbon","lucide","memory","mynaui","circum","fluent","nimbus","entypo","icons8","subway","vaadin","solar","basil","typcn","charm","prime","quill","logos","covid","maki","gala","ooui","noto","flag","iwwa","zmdi","bpmn","mdi","ion","uil","bxs","cil","uiw","uim","uit","uis","jam","bxl","cib","cif","gis","map","geo","fad","eva","wpf","whh","ic","ph","ri","bi","bx","gg","ci","ep","fe","mi","ei","wi","la","fa","oi","et","el","ls","vs","il","ps"];function u(i=""){let n,e="";if(i[0]==="@"&&i.includes(":")&&(e=i.split(":")[0].slice(1),i=i.split(":").slice(1).join(":")),i.startsWith("i-")){i=i.replace(/^i-/,"");for(const o of p)if(i.startsWith(o)){n=o,i=i.slice(o.length+1);break}}else if(i.includes(":")){const[o,s]=i.split(":");n=o,i=s}return{provider:e,prefix:n||"",name:i||""}}export{u as r,m as u};
