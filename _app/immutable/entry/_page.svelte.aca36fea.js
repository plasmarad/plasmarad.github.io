import{S as M,i as V,s as H,e as b,t as I,a as v,c as w,b as y,d as z,f as _,g as $,h as g,m as T,j as q,k as f,w as J,n as A,J as B,A as j,B as E,C as k,r as U,p as W,D as Y,l as F}from"../chunks/index.6514ab59.js";function C(o){let e,a,r;return{c(){e=b("div"),a=b("iframe"),this.h()},l(n){e=w(n,"DIV",{class:!0});var i=y(e);a=w(i,"IFRAME",{title:!0,src:!0,frameborder:!0,allow:!0}),y(a).forEach(_),i.forEach(_),this.h()},h(){g(a,"title","video"),B(a.src,r="https://www.youtube.com/embed/"+o[2])||g(a,"src",r),g(a,"frameborder","0"),g(a,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),a.allowFullscreen=!0,g(e,"class","vid svelte-14m6wfz")},m(n,i){q(n,e,i),f(e,a)},p(n,i){i&4&&!B(a.src,r="https://www.youtube.com/embed/"+n[2])&&g(a,"src",r)},d(n){n&&_(e)}}}function G(o){let e,a,r=o[3].name+"",n,i,d,c,u,p,s,m,t=o[2]!="none"&&C(o);return{c(){e=b("div"),a=b("h3"),n=I(r),i=v(),d=b("h6"),c=I(o[1]),u=v(),p=b("div"),s=I(o[0]),m=v(),t&&t.c(),this.h()},l(l){e=w(l,"DIV",{class:!0,style:!0});var h=y(e);a=w(h,"H3",{class:!0});var P=y(a);n=z(P,r),P.forEach(_),i=$(h),d=w(h,"H6",{class:!0});var S=y(d);c=z(S,o[1]),S.forEach(_),u=$(h),p=w(h,"DIV",{class:!0});var L=y(p);s=z(L,o[0]),L.forEach(_),m=$(h),t&&t.l(h),h.forEach(_),this.h()},h(){g(a,"class","project__name svelte-14m6wfz"),g(d,"class","date svelte-14m6wfz"),g(p,"class","desc svelte-14m6wfz"),g(e,"class","newscard svelte-14m6wfz"),T(e,"background","linear-gradient(black, black) padding-box, linear-gradient(to top left, "+o[3].color+", "+o[3].color2+") border-box")},m(l,h){q(l,e,h),f(e,a),f(a,n),f(e,i),f(e,d),f(d,c),f(e,u),f(e,p),f(p,s),f(e,m),t&&t.m(e,null)},p(l,[h]){h&8&&r!==(r=l[3].name+"")&&J(n,r),h&2&&J(c,l[1]),h&1&&J(s,l[0]),l[2]!="none"?t?t.p(l,h):(t=C(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null),h&8&&T(e,"background","linear-gradient(black, black) padding-box, linear-gradient(to top left, "+l[3].color+", "+l[3].color2+") border-box")},i:A,o:A,d(l){l&&_(e),t&&t.d()}}}function N(o,e,a){let{desc:r="placeholder"}=e,{date:n="January 1 1970"}=e,{youtube:i="none"}=e,{project:d={name:"placeholder",color:"gray",color2:"gray"}}=e;return o.$$set=c=>{"desc"in c&&a(0,r=c.desc),"date"in c&&a(1,n=c.date),"youtube"in c&&a(2,i=c.youtube),"project"in c&&a(3,d=c.project)},[r,n,i,d]}class D extends M{constructor(e){super(),V(this,e,N,G,H,{desc:0,date:1,youtube:2,project:3})}}function R(o){let e,a,r,n,i,d,c,u,p,s,m;return a=new D({props:{project:o[0],desc:"Website has been migrated to plasmarad.online, rebranding aswell.",date:"2023 AUGUST 23"}}),n=new D({props:{project:o[0],desc:"Improved alignment for Project cards, scrollbars, and news cards.",date:"2023 AUGUST 3"}}),d=new D({props:{project:o[1],desc:"Posted a website show case video on youtube",youtube:"5WHMWaViqOY",date:"2023 JULY 19"}}),u=new D({props:{project:o[0],desc:"added missing logos for the Durango and Website projects card.",date:"2023 JULY 19"}}),s=new D({props:{project:o[0],desc:`deployed website to github's static site hosting service,
    this site is now live at plasmarad.me`,date:"2023 JULY 5"}}),{c(){e=b("div"),j(a.$$.fragment),r=v(),j(n.$$.fragment),i=v(),j(d.$$.fragment),c=v(),j(u.$$.fragment),p=v(),j(s.$$.fragment),this.h()},l(t){e=w(t,"DIV",{id:!0,class:!0});var l=y(e);E(a.$$.fragment,l),r=$(l),E(n.$$.fragment,l),i=$(l),E(d.$$.fragment,l),c=$(l),E(u.$$.fragment,l),p=$(l),E(s.$$.fragment,l),l.forEach(_),this.h()},h(){g(e,"id","news__list"),g(e,"class","svelte-1x56kyb")},m(t,l){q(t,e,l),k(a,e,null),f(e,r),k(n,e,null),f(e,i),k(d,e,null),f(e,c),k(u,e,null),f(e,p),k(s,e,null),m=!0},p:A,i(t){m||(U(a.$$.fragment,t),U(n.$$.fragment,t),U(d.$$.fragment,t),U(u.$$.fragment,t),U(s.$$.fragment,t),m=!0)},o(t){W(a.$$.fragment,t),W(n.$$.fragment,t),W(d.$$.fragment,t),W(u.$$.fragment,t),W(s.$$.fragment,t),m=!1},d(t){t&&_(e),Y(a),Y(n),Y(d),Y(u),Y(s)}}}function O(o){return[{color:"aqua",color2:"purple",name:"Website"},{color:"gold",color2:"red",name:"Youtube"}]}class K extends M{constructor(e){super(),V(this,e,O,R,H,{})}}function Q(o){let e,a,r,n,i,d,c,u,p;return u=new K({}),{c(){e=b("meta"),a=v(),r=b("h2"),n=I("Welcome,"),i=b("br"),d=I(" here's the latest news!"),c=v(),j(u.$$.fragment),this.h()},l(s){const m=F("svelte-b18ab3",document.head);e=w(m,"META",{name:!0,content:!0}),m.forEach(_),a=$(s),r=w(s,"H2",{class:!0});var t=y(r);n=z(t,"Welcome,"),i=w(t,"BR",{}),d=z(t," here's the latest news!"),t.forEach(_),c=$(s),E(u.$$.fragment,s),this.h()},h(){document.title="plasmarad",g(e,"name","Plasmarad.ME"),g(e,"content","My portfolio of awesome projects"),g(r,"class","svelte-1gchcqq")},m(s,m){f(document.head,e),q(s,a,m),q(s,r,m),f(r,n),f(r,i),f(r,d),q(s,c,m),k(u,s,m),p=!0},p:A,i(s){p||(U(u.$$.fragment,s),p=!0)},o(s){W(u.$$.fragment,s),p=!1},d(s){_(e),s&&_(a),s&&_(r),s&&_(c),Y(u,s)}}}class Z extends M{constructor(e){super(),V(this,e,null,Q,H,{})}}export{Z as default};
