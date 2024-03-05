import './polyfills.server.mjs';
import{Db as x,Fa as i,Ga as r,I as l,N as u,Na as p,Oa as g,Qa as a,R as s,Ra as m,Sa as d,sa as h,ta as v,ub as y,vb as C,wb as c}from"./chunk-DJX7EZT5.mjs";import"./chunk-VVCT4QZE.mjs";var S=(()=>{let t=class t{constructor(n){this.http=n,this.endpoint="http://localhost:4200/data/notes.json"}getNotes(){return this.http.get(this.endpoint)}};t.\u0275fac=function(o){return new(o||t)(u(x))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var j=(()=>{let t=class t{constructor(n){this.service=n,this.notes$=this.service.getNotes()}};t.\u0275fac=function(o){return new(o||t)(v(S))},t.\u0275cmp=s({type:t,selectors:[["speed-run-note"]],standalone:!0,features:[a],decls:6,vars:5,template:function(o,f){o&1&&(i(0,"p"),p(1,"note works!"),r(),i(2,"pre"),p(3),m(4,"json"),m(5,"async"),r()),o&2&&(h(3),g(d(4,1,d(5,3,f.notes$))))},dependencies:[c,y,C],changeDetection:0});let e=t;return e})();var M=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s({type:t,selectors:[["speed-run-note-detail"]],standalone:!0,features:[a],decls:2,vars:0,template:function(o,f){o&1&&(i(0,"p"),p(1,"note-detail works!"),r())},dependencies:[c],changeDetection:0});let e=t;return e})();var $=[{path:"",component:j},{path:":id",component:M}];export{j as NoteComponent,$ as noteRoutes};
