import './polyfills.server.mjs';
import{a as v,b as g,e as h,i as C,l as x,m as y,n as M,o as S}from"./chunk-ZYFZ56A4.mjs";import{Ga as n,Ha as r,Ia as s,Oa as i,Pa as l,Qa as p,R as a,fb as u,sa as d,sb as f}from"./chunk-5WOJ4Q5H.mjs";var k=(()=>{let e=class e{constructor(){this.title="Speedrun"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["speed-run-root"]],standalone:!0,features:[p],decls:12,vars:1,consts:[["routerLink","/","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/note","routerLinkActive","active","ariaCurrentWhenActive","page"],[1,"content"]],template:function(o,c){o&1&&(n(0,"h1"),i(1),r(),n(2,"nav")(3,"ul")(4,"li")(5,"a",0),i(6,"Home"),r()(),n(7,"li")(8,"a",1),i(9,"Note"),r()()()(),n(10,"div",2),s(11,"router-outlet"),r()),o&2&&(d(),l(c.title))},dependencies:[S,C,x,y],styles:["[_nghost-%COMP%]{display:block}h1[_ngcontent-%COMP%]{background:#333;padding:3em;margin:0;color:#fff}.content[_ngcontent-%COMP%]{padding:1rem}"]});let t=e;return t})();var R=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["speed-run-not-found"]],standalone:!0,features:[p],decls:2,vars:0,template:function(o,c){o&1&&(n(0,"p"),i(1,"I have no idea what you're talking about."),r())},dependencies:[f],changeDetection:0});let t=e;return t})();var A=[{path:"",redirectTo:"/note",pathMatch:"full"},{path:"note",loadChildren:()=>import("./chunk-QHT4O2WV.mjs").then(t=>t.noteRoutes)},{path:"**",component:R}];var D={providers:[g(),M(A)]};var E={providers:[h()]},L=u(D,E);var F=()=>v(k,L),X=F;export{X as a};
