import u from"./HeaderView.f09b89de.js";import{a as l,o as s,b as n,f as o,e as a,K as m,P as d,w as h,h as f,O as x,i as b}from"./entry.a1843cd9.js";import g from"./FooterView.ed8c040b.js";const w={async asyncData({$content:e,params:r}){return{publishers:await e("publishers").fetch()}}},y={class:"container"},V=a("h3",{style:{"margin-top":"15px"}},"Publishers Information",-1),$=a("p",null,"This section presents information about publishers",-1);function k(e,r,i,N,B,D){const c=u,_=b,p=g;return s(),n("div",y,[o(c),V,$,a("ul",null,[(s(!0),n(m,null,d(e.publishers,t=>(s(),n("li",{key:t.slug},[o(_,{to:{name:"publishers-slug",params:{slug:t.slug}}},{default:h(()=>[f(x(t.name),1)]),_:2},1032,["to"])]))),128))]),o(p)])}const T=l(w,[["render",k]]);export{T as default};