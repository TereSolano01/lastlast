import m from"./HeaderView.70c8e602.js";import{a as u,o as e,b as s,f as n,e as a,K as p,P as d,w as f,h as x,O as h,i as b}from"./entry.e14d54ea.js";import g from"./FooterView.d3f2edec.js";const k={async asyncData({$content:t,params:r}){return{albums:await t("albums").fetch()}}},w={class:"container"},y=a("h3",{style:{"margin-top":"15px"}},"Books Information",-1),V=a("p",null,"This section presents information about books",-1);function $(t,r,c,B,N,D){const _=m,i=b,l=g;return e(),s("div",w,[n(_),y,V,a("ul",null,[(e(!0),s(p,null,d(t.albums,o=>(e(),s("li",{key:o.slug},[n(i,{to:{name:"albums-slug",params:{slug:o.slug}}},{default:f(()=>[x(h(o.title),1)]),_:2},1032,["to"])]))),128))]),n(l)])}const v=u(k,[["render",$]]);export{v as default};