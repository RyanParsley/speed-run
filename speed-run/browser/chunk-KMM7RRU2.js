import{Ca as i,Da as r,K as l,Ka as p,La as g,Na as a,Oa as c,P as u,Pa as d,T as s,hb as y,ib as C,jb as m,ob as x,pa as h,qa as v}from"./chunk-YBKC33CW.js";var S=(()=>{let e=class e{constructor(n){this.http=n,this.endpoint="speed-run/speed-run/browser/data/notes.json"}getNotes(){return this.http.get(this.endpoint)}};e.\u0275fac=function(o){return new(o||e)(u(x))},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var j=(()=>{let e=class e{constructor(n){this.service=n,this.notes$=this.service.getNotes()}};e.\u0275fac=function(o){return new(o||e)(v(S))},e.\u0275cmp=s({type:e,selectors:[["speed-run-note"]],standalone:!0,features:[a],decls:6,vars:5,template:function(o,f){o&1&&(i(0,"p"),p(1,"note works!"),r(),i(2,"pre"),p(3),c(4,"json"),c(5,"async"),r()),o&2&&(h(3),g(d(4,1,d(5,3,f.notes$))))},dependencies:[m,y,C],changeDetection:0});let t=e;return t})();var w=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["speed-run-note-detail"]],standalone:!0,features:[a],decls:2,vars:0,template:function(o,f){o&1&&(i(0,"p"),p(1,"note-detail works!"),r())},dependencies:[m],changeDetection:0});let t=e;return t})();var $=[{path:"",component:j},{path:":id",component:w}];export{j as NoteComponent,$ as noteRoutes};