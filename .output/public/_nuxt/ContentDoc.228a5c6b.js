import{u as y,j as d,k as g,l as q,m as w,p as _,q as C,r as s}from"./entry.a1843cd9.js";import D from"./ContentRenderer.9332cfb3.js";import{_ as j}from"./ContentQuery.32edec3e.js";import"./ContentRendererMarkdown.2357c595.js";import"./asyncData.93de82c3.js";import"./utils.687ac340.js";const h=(u,e=g())=>{const f=y(u);d(()=>y(u),(i=f)=>{if(!e.path||!i)return;const t=Object.assign({},(i==null?void 0:i.head)||{}),p=t.title||(i==null?void 0:i.title);p&&(t.title=p),t.meta=[...t.meta||[]];const c=(t==null?void 0:t.description)||(i==null?void 0:i.description);c&&t.meta.filter(n=>n.name==="description").length===0&&t.meta.push({name:"description",content:c});const r=(t==null?void 0:t.image)||(i==null?void 0:i.image);if(r&&t.meta.filter(n=>n.property==="og:image").length===0&&(typeof r=="string"&&t.meta.push({property:"og:image",content:r}),typeof r=="object")){const n=["src","secure_url","type","width","height","alt"];for(const o of n)o==="src"&&r.src?t.meta.push({property:"og:image",content:r[o]}):r[o]&&t.meta.push({property:`og:image:${o}`,content:r[o]})}q(()=>w(t))},{immediate:!0})},S=_({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:()=>g().path},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=C(),{tag:f,excerpt:m,path:i,query:t,head:p}=u,c=Object.assign(t||{},{path:i,find:"one"}),r=(n,o)=>s("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:o},null,2));return s(j,c,{default:e!=null&&e.default?({data:n,refresh:o,isPartial:a})=>{var l;return p&&h(n),(l=e.default)==null?void 0:l.call(e,{doc:n,refresh:o,isPartial:a,excerpt:m,...this.$attrs})}:({data:n})=>(p&&h(n),s(D,{value:n,excerpt:m,tag:f,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):r("default",n)})),empty:n=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,n))||s("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,n))||s("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{S as default};