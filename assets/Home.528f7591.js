import{_ as d,e as h,u as k,f as i,g as e,o,c as a,b as _,w as T,h as r,t as l,i as g,N as x,F,r as I,j as L,k as m,l as y}from"./app.2504bd8b.js";const A={key:0,class:"home-hero"},B={key:0,class:"figure"},C=["src","alt"],N={key:1,id:"main-title",class:"title"},w={key:2,class:"tagline"},V=h({setup(p){const{site:s,frontmatter:t}=k(),c=i(()=>{const{heroImage:n,heroText:u,tagline:$,actionLink:H,actionText:b}=t.value;return n||u||$||H&&b}),v=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(n,u)=>e(c)?(o(),a("header",A,[e(t).heroImage?(o(),a("figure",B,[_("img",{class:"image",src:e(T)(e(t).heroImage),alt:e(t).heroAlt},null,8,C)])):r("",!0),e(v)?(o(),a("h1",N,l(e(v)),1)):r("",!0),e(f)?(o(),a("p",w,l(e(f)),1)):r("",!0),e(t).actionLink&&e(t).actionText?(o(),g(x,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("",!0),e(t).altActionLink&&e(t).altActionText?(o(),g(x,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("",!0)])):r("",!0)}});var j=d(V,[["__scopeId","data-v-5d8b683d"]]);const D={key:0,class:"home-features"},S={class:"wrapper"},E={class:"container"},q={class:"features"},z={key:0,class:"title"},G={key:1,class:"details"},J=h({setup(p){const{frontmatter:s}=k(),t=i(()=>s.value.features&&s.value.features.length>0),c=i(()=>s.value.features?s.value.features:[]);return(v,f)=>e(t)?(o(),a("div",D,[_("div",S,[_("div",E,[_("div",q,[(o(!0),a(F,null,I(e(c),(n,u)=>(o(),a("section",{key:u,class:"feature"},[n.title?(o(),a("h2",z,l(n.title),1)):r("",!0),n.details?(o(),a("p",G,l(n.details),1)):r("",!0)]))),128))])])])])):r("",!0)}});var K=d(J,[["__scopeId","data-v-245bde66"]]);const M={key:0,class:"footer"},O={class:"container"},P={class:"text"},Q=h({setup(p){const{frontmatter:s}=k();return(t,c)=>e(s).footer?(o(),a("footer",M,[_("div",O,[_("p",P,l(e(s).footer),1)])])):r("",!0)}});var R=d(Q,[["__scopeId","data-v-bff49316"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=h({setup(p){return(s,t)=>{const c=L("Content");return o(),a("main",U,[m(j),y(s.$slots,"hero",{},void 0,!0),m(K),_("div",W,[m(c)]),y(s.$slots,"features",{},void 0,!0),m(R),y(s.$slots,"footer",{},void 0,!0)])}}});var Z=d(X,[["__scopeId","data-v-8382b818"]]);export{Z as default};
