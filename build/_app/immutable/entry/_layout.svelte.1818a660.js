import{S as P,i as z,s as B,k as g,q as k,a as I,l as b,m as $,r as C,h as p,c as N,n as r,b as G,C as o,D as q,E as L,F as R,y as T,z as J,p as K,A as Q,G as U,H as W,I as X,g as F,d as O,B as Y}from"../chunks/index.62596d0a.js";import{s as Z}from"../chunks/singletons.9ad1ec2d.js";const x=()=>{const s=Z;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},ee={subscribe(s){return x().page.subscribe(s)}};function ae(s){let e,t,n,u,_,f,i,d,j,l,a,c,E,A,m,D,w;return{c(){e=g("nav"),t=g("div"),n=g("a"),u=k("News"),f=I(),i=g("a"),d=k("Projects"),l=I(),a=g("a"),c=k("About"),A=I(),m=g("a"),D=k("Contact Me"),this.h()},l(h){e=b(h,"NAV",{class:!0});var v=$(e);t=b(v,"DIV",{class:!0});var y=$(t);n=b(y,"A",{"aria-current":!0,href:!0,class:!0});var H=$(n);u=C(H,"News"),H.forEach(p),f=N(y),i=b(y,"A",{"aria-current":!0,href:!0,class:!0});var M=$(i);d=C(M,"Projects"),M.forEach(p),l=N(y),a=b(y,"A",{"aria-current":!0,href:!0,class:!0});var S=$(a);c=C(S,"About"),S.forEach(p),A=N(y),m=b(y,"A",{"aria-current":!0,href:!0,class:!0});var V=$(m);D=C(V,"Contact Me"),V.forEach(p),y.forEach(p),v.forEach(p),this.h()},h(){r(n,"aria-current",_=s[0].url.pathname==="/"?"page":void 0),r(n,"href","/"),r(n,"class","svelte-75jb4t"),r(i,"aria-current",j=s[0].url.pathname==="/projects"?"page":void 0),r(i,"href","/projects"),r(i,"class","svelte-75jb4t"),r(a,"aria-current",E=s[0].url.pathname==="/about"?"page":void 0),r(a,"href","/about"),r(a,"class","svelte-75jb4t"),r(m,"aria-current",w=s[0].url.pathname==="/contact"?"page":void 0),r(m,"href","/contact"),r(m,"class","svelte-75jb4t"),r(t,"class","navbar__links svelte-75jb4t"),r(e,"class","navbar svelte-75jb4t")},m(h,v){G(h,e,v),o(e,t),o(t,n),o(n,u),o(t,f),o(t,i),o(i,d),o(t,l),o(t,a),o(a,c),o(t,A),o(t,m),o(m,D)},p(h,[v]){v&1&&_!==(_=h[0].url.pathname==="/"?"page":void 0)&&r(n,"aria-current",_),v&1&&j!==(j=h[0].url.pathname==="/projects"?"page":void 0)&&r(i,"aria-current",j),v&1&&E!==(E=h[0].url.pathname==="/about"?"page":void 0)&&r(a,"aria-current",E),v&1&&w!==(w=h[0].url.pathname==="/contact"?"page":void 0)&&r(m,"aria-current",w)},i:q,o:q,d(h){h&&p(e)}}}function te(s,e,t){let n;return L(s,ee,u=>t(0,n=u)),[n]}class re extends P{constructor(e){super(),z(this,e,te,ae,B,{})}}function se(s){let e,t,n,u,_,f,i,d;t=new re({});const j=s[1].default,l=R(j,s,s[0],null);return{c(){e=g("div"),T(t.$$.fragment),n=I(),u=g("main"),l&&l.c(),_=I(),f=g("footer"),i=k("plasmarad - 2023"),this.h()},l(a){e=b(a,"DIV",{class:!0});var c=$(e);J(t.$$.fragment,c),n=N(c),u=b(c,"MAIN",{class:!0});var E=$(u);l&&l.l(E),E.forEach(p),_=N(c),f=b(c,"FOOTER",{style:!0,class:!0});var A=$(f);i=C(A,"plasmarad - 2023"),A.forEach(p),c.forEach(p),this.h()},h(){r(u,"class","svelte-1ekor5p"),K(f,"color","gray"),r(f,"class","svelte-1ekor5p"),r(e,"class","app svelte-1ekor5p")},m(a,c){G(a,e,c),Q(t,e,null),o(e,n),o(e,u),l&&l.m(u,null),o(e,_),o(e,f),o(f,i),d=!0},p(a,[c]){l&&l.p&&(!d||c&1)&&U(l,j,a,a[0],d?X(j,a[0],c,null):W(a[0]),null)},i(a){d||(F(t.$$.fragment,a),F(l,a),d=!0)},o(a){O(t.$$.fragment,a),O(l,a),d=!1},d(a){a&&p(e),Y(t),l&&l.d(a)}}}function ne(s,e,t){let{$$slots:n={},$$scope:u}=e;return s.$$set=_=>{"$$scope"in _&&t(0,u=_.$$scope)},[u,n]}class ue extends P{constructor(e){super(),z(this,e,ne,se,B,{})}}export{ue as default};
