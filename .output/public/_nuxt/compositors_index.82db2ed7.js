import m from"./HeaderView.70c8e602.js";import{a as u,o as s,b as e,f as n,e as a,K as l,P as d,w as f,h,O as x,i as g}from"./entry.e14d54ea.js";import w from"./FooterView.d3f2edec.js";const y={async asyncData({$content:o,params:r}){return{compositors:await o("compositors").fetch()}}},V={class:"container"},$=a("h3",{style:{"margin-top":"15px"}},"Authors Information",-1),k=a("p",null,"This section presents information about authors",-1);function N(o,r,c,B,b,D){const _=m,i=g,p=w;return s(),e("div",V,[n(_),$,k,a("ul",null,[(s(!0),e(l,null,d(o.compositors,t=>(s(),e("li",{key:t.slug},[n(i,{to:{name:"compositors-slug",params:{slug:t.slug}}},{default:f(()=>[h(x(t.name),1)]),_:2},1032,["to"])]))),128))]),n(p)])}const v=u(y,[["render",N]]);export{v as default};