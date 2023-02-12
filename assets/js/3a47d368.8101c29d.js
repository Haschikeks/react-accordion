/*! For license information please see 3a47d368.8101c29d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[442],{1426:(e,t,n)=>{var i=n(7378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,o={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:d,props:o,_owner:s.current}}t.jsx=l,t.jsxs=l},4246:(e,t,n)=>{e.exports=n(1426)},497:(e,t,n)=>{n.d(t,{Z:()=>s});var i,r,o=n(7378);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-down",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round","aria-labelledby":n},s),t?o.createElement("title",{id:n},t):null,i||(i=o.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"})),r||(r=o.createElement("path",{d:"m6 9 6 6 6-6"})))}},8888:(e,t,n)=>{function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{g:()=>i,v:()=>r})},3963:(e,t,n)=>{n.d(t,{a:()=>a});var i=n(8888),r=n(3284),o=n(4246);const a=e=>(0,o.jsx)(r.SY.Provider,(0,i.g)({},e))},5129:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(3284);const r=e=>{do{e=e.parentElement}while(e&&!e.hasAttribute(i.gE));return e},o=(e,t,n)=>e?t>0?t-1:n-1:(t+1)%n,a=(e,t)=>{const{activeElement:n}=document;if(!n||!n.hasAttribute(i.OM)||r(n)!==t.currentTarget)return;const a=t.currentTarget.querySelectorAll(`[${i.OM}]`),{length:s}=a;for(let i=0;i<s;i++)if(a[i]===n){let n=o(e,i,s);for(;r(a[i])!==r(a[n]);)n=o(e,n,s);i!==n&&(t.preventDefault(),a[n].focus());break}},s=()=>({accordionProps:{[i.gE]:"",onKeyDown:e=>"ArrowUp"===e.key?a(!0,e):"ArrowDown"===e.key&&a(!1,e)}})},6301:(e,t,n)=>{n.d(t,{E:()=>a,e:()=>o});var i=n(7378),r=n(3284);const o=(e,t,n)=>{const{stateMap:i,mountOnEnter:r,initialEntered:o}=e,a=null!=n?n:o;return i.get(t)||{status:a?"entered":r?"unmounted":"exited",isMounted:!r,isEnter:a,isResolved:!0}},a=()=>(0,i.useContext)(r.SY)},9217:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(3284),r=n(7378);let o=0;const a=r.useId||(()=>{const[e,t]=(0,r.useState)();return(0,r.useEffect)((()=>t(++o)),[]),e&&`${i.o6}-${e}`}),s=e=>{let{state:t,toggle:n,disabled:r}=e;const o=a(),s=o&&o+"-",c={id:o,"aria-controls":s,"aria-expanded":t.isEnter,onClick:n};r?c.disabled=!0:c[i.OM]="";return{buttonProps:c,panelProps:{id:s,"aria-labelledby":o,role:"region"}}}},3316:(e,t,n)=>{n.d(t,{l:()=>o});var i=n(7378),r=n(6301);const o=function(e){let{itemKey:t,initialEntered:n,disabled:o}=void 0===e?{}:e;const a=(0,i.useRef)(null),s=(0,r.E)(),c=null!=t?t:a.current,l=(0,r.e)(s,c,n),{setItem:d,deleteItem:u,toggle:m}=s;return(0,i.useEffect)((()=>{if(o)return;const e=null!=t?t:a.current;return d(e,{initialEntered:n}),()=>{u(e)}}),[d,u,t,n,o]),{itemRef:a,state:l,toggle:(0,i.useCallback)((e=>m(c,e)),[m,c])}}},6150:(e,t,n)=>{n.d(t,{n:()=>p});var i=n(8888),r=n(7378);const o=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],a=e=>e?6:5,s=new Map,c=new Map,l=(e,t,n,i,r,a)=>{clearTimeout(r);const s=(e=>({_s:e,status:o[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}))(t),c=new Map(i.current);c.set(e,s),n(c),i.current=c,a&&a({key:e,current:s})},d=({allowMultiple:e,enter:t=!0,exit:n=!0,preEnter:i,preExit:o,timeout:d,initialEntered:u,mountOnEnter:m,unmountOnExit:p,onStateChange:f}={})=>{const[g,h]=(0,r.useState)(s),E=(0,r.useRef)(g),v=(0,r.useRef)(c),[b,x]=(e=>"object"==typeof e?[e.enter,e.exit]:[e,e])(d),y=(0,r.useCallback)(((e,t)=>{const{initialEntered:n=u}=t||{},i=n?2:a(m);l(e,i,h,E),v.current.set(e,{})}),[u,m]),w=(0,r.useCallback)((e=>{const t=new Map(E.current);return!!t.delete(e)&&(h(t),E.current=t,v.current.delete(e),!0)}),[]),k=(0,r.useCallback)((e=>{const t=E.current.get(e);if(!t)return;const{timeoutId:n}=v.current.get(e),i=((e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return a(t)}})(t._s,p);i&&l(e,i,h,E,n,f)}),[f,p]),N=(0,r.useCallback)(((r,s)=>{const c=E.current.get(r);if(!c)return;const d=v.current.get(r),u=e=>{switch(l(r,e,h,E,d.timeoutId,f),e){case 1:b>=0&&(d.timeoutId=setTimeout((()=>k(r)),b));break;case 4:x>=0&&(d.timeoutId=setTimeout((()=>k(r)),x));break;case 0:case 3:d.timeoutId=setTimeout((()=>u(e+1)),0)}},m=c.isEnter;"boolean"!=typeof s&&(s=!m),s?m||(u(t?i?0:1:2),!e&&E.current.forEach(((e,t)=>t!==r&&N(t,!1)))):m&&u(n?o?3:4:a(p))}),[f,k,e,t,n,i,o,b,x,p]),O=(0,r.useCallback)((t=>{if(e||!1===t)for(const e of E.current.keys())N(e,t)}),[e,N]);return{stateMap:g,toggle:N,toggleAll:O,endTransition:k,setItem:y,deleteItem:w}},u=["transition","transitionTimeout"],m=(e,t)=>!0===e||!(!e||!e[t]),p=function(e){void 0===e&&(e={});let{transition:t,transitionTimeout:n}=e,r=(0,i.v)(e,u);const o=d((0,i.g)({timeout:n,enter:m(t,"enter"),exit:m(t,"exit"),preEnter:m(t,"preEnter"),preExit:m(t,"preExit")},r));return(0,i.g)({mountOnEnter:!!r.mountOnEnter,initialEntered:!!r.initialEntered},o)}},3969:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(7378);const r="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?i.useLayoutEffect:i.useEffect,o=e=>{let{status:t,isResolved:n}=e;const[o,a]=(0,i.useState)(),s=(0,i.useRef)(null);r((()=>{("preEnter"===t||"preExit"===t)&&a(s.current.getBoundingClientRect().height)}),[t]);return[{height:"preEnter"===t||"exiting"===t?0:"entering"===t||"preExit"===t?o:void 0,overflow:n?void 0:"hidden"},s]}},3284:(e,t,n)=>{n.d(t,{Kj:()=>r,OM:()=>s,SY:()=>c,gE:()=>a,o6:()=>o});var i=n(7378);const r="szh-accordion",o="szh-adn",a=`data-${o}`,s=`data-${o}-btn`,c=(0,i.createContext)({})},3253:(e,t,n)=>{n.d(t,{UQ:()=>M,Qd:()=>T,Hv:()=>R,nT:()=>a.n,w8:()=>P});var i=n(7462),r=n(7378),o=n(8888),a=n(6150),s=n(3284);const c=(e,t,n)=>(i,r)=>{const o=t?`${e}__${t}`:e;let a=o;n&&Object.keys(n).forEach((e=>{const t=n[e];t&&(a+=` ${o}--${!0===t?e:`${e}-${t}`}`)}));let s="function"==typeof i?i(r):i;return"string"==typeof s&&(s=s.trim(),s&&(a+=` ${s}`)),a},l=(e,t)=>{if(!t)return e;const n=(0,o.g)({},e);return Object.keys(t).forEach((i=>{const r=e[i],o=t[i];n[i]="function"==typeof o&&r?function(){r(...arguments),o(...arguments)}:o})),n};var d=n(3963),u=n(5129),m=n(4246);const p=["providerValue","className"],f=(0,r.forwardRef)(((e,t)=>{let{providerValue:n,className:i}=e,r=(0,o.v)(e,p);const{accordionProps:a}=(0,u.A)();return(0,m.jsx)(d.a,{value:n,children:(0,m.jsx)("div",(0,o.g)({},l(a,r),{ref:t,className:c(s.Kj)(i)}))})}));f.displayName="ControlledAccordion";const g=["allowMultiple","initialEntered","mountOnEnter","unmountOnExit","transition","transitionTimeout","onStateChange"],h=(0,r.forwardRef)(((e,t)=>{let{allowMultiple:n,initialEntered:i,mountOnEnter:r,unmountOnExit:s,transition:c,transitionTimeout:l,onStateChange:d}=e,u=(0,o.v)(e,g);const p=(0,a.n)({allowMultiple:n,initialEntered:i,mountOnEnter:r,unmountOnExit:s,transition:c,transitionTimeout:l,onStateChange:d});return(0,m.jsx)(f,(0,o.g)({},u,{ref:t,providerValue:p}))}));h.displayName="Accordion";var E=n(9217),v=n(3969);function b(e,t){"function"==typeof e?e(t):e.current=t}function x(e,t){return(0,r.useMemo)((()=>e?t?n=>{b(e,n),b(t,n)}:e:t),[e,t])}var y=n(3316);const w=["itemKey","initialEntered"],k=e=>{const t=(0,r.forwardRef)(((t,n)=>{let{itemKey:i,initialEntered:r}=t,a=(0,o.v)(t,w);return(0,m.jsx)(e,(0,o.g)({forwardedRef:n},a,(0,y.l)({itemKey:i,initialEntered:r,disabled:a.disabled})))}));return t.displayName="WithAccordionItem",t},N=["forwardedRef","itemRef","state","toggle","className","disabled","header","headingTag","headingProps","buttonProps","contentProps","panelProps","children"],O=(e,t)=>"function"==typeof e?e(t):e,I=(0,r.memo)((e=>{let{forwardedRef:t,itemRef:n,state:i,toggle:r,className:a,disabled:d,header:u,headingTag:p="h3",headingProps:f,buttonProps:g,contentProps:h,panelProps:b,children:y}=e,w=(0,o.v)(e,N);const k={state:i,toggle:r,disabled:d},{buttonProps:I,panelProps:j}=(0,E.Z)(k),[A,C]=(0,v.w)(i),_=x(b&&b.ref,C),{status:P,isMounted:M,isEnter:R}=i;return(0,m.jsxs)("div",(0,o.g)({},w,{ref:x(t,n),className:c(s.Kj,"item",{status:P,expanded:R})(a,i),children:[(0,m.jsx)(p,(0,o.g)({},f,{style:(0,o.g)({margin:0},f&&f.style),className:c(s.Kj,"item-heading")(f&&f.className,i),children:(0,m.jsx)("button",(0,o.g)({},l(I,g),{type:"button",className:c(s.Kj,"item-btn")(g&&g.className,i),children:O(u,k)}))})),M&&(0,m.jsx)("div",(0,o.g)({},h,{style:(0,o.g)({display:"exited"===P?"none":void 0},A,h&&h.style),className:c(s.Kj,"item-content")(h&&h.className,i),children:(0,m.jsx)("div",(0,o.g)({},l(j,b),{ref:_,className:c(s.Kj,"item-panel")(b&&b.className,i),children:O(y,k)}))}))]}))}));I.displayName="AccordionItem";const j=k(I);var A=n(497),C=n(8966),_=n(6301);const P=()=>{const e=(0,_.E)();return{getItemState:function(t,n){let{initialEntered:i}=void 0===n?{}:n;return(0,_.e)(e,t,i)},toggle:e.toggle,toggleAll:e.toggleAll}},M=e=>r.createElement(h,(0,i.Z)({},e,{className:C.Z.accordion,transition:!0,transitionTimeout:200})),R=e=>r.createElement(f,(0,i.Z)({},e,{className:C.Z.accordion})),T=e=>r.createElement(j,(0,i.Z)({},e,{header:t=>r.createElement(r.Fragment,null,"function"==typeof e.header?e.header(t):e.header,r.createElement(A.Z,{className:C.Z.chevron})),className:C.Z.item,buttonProps:{className:e=>{let{isEnter:t}=e;return t?C.Z.buttonExpanded:C.Z.button}},contentProps:{className:C.Z.content},panelProps:{className:C.Z.panel}}))},9910:(e,t,n)=>{n.d(t,{w:()=>i});const i=e=>e.replace("import React from 'react';\n","").replace("from '../accordion'","from '@szhsin/react-accordion'")},6567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var i=n(7462),r=n(7378),o=n(3905),a=n(814);var s=n(9910),c=n(3253);function l(){return r.createElement(c.UQ,null,r.createElement(c.Qd,{header:"What is Lorem Ipsum?",initialEntered:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),r.createElement(c.Qd,{header:"Where does it come from?"},"Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi."),r.createElement(c.Qd,{header:"Why do we use it?",initialEntered:!0},"Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat."))}const d={sidebar_position:3},u="Expanding items initially",m={unversionedId:"docs/initial-expanded",id:"docs/initial-expanded",title:"Expanding items initially",description:"You could use the initialEntered prop of AccordionItem to expand items when accordion",source:"@site/docs/docs/initial-expanded.mdx",sourceDirName:"docs",slug:"/docs/initial-expanded",permalink:"/react-accordion/docs/initial-expanded",draft:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/initial-expanded.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Allowing multiple",permalink:"/react-accordion/docs/allow-multiple"},next:{title:"Customising header",permalink:"/react-accordion/docs/customising-header"}},p={},f=[],g={toc:f};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"expanding-items-initially"},"Expanding items initially"),(0,o.kt)("p",null,"You could use the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialEntered")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionItem")," to expand items when accordion\nfirst mounts. In the following example, the first and last item are expanded on mount."),(0,o.kt)(l,{mdxType:"InitialEntered"}),(0,o.kt)(a.Z,{language:"jsx",mdxType:"CodeBlock"},(0,s.w)('import React from \'react\';\nimport { Accordion, AccordionItem } from \'../accordion\';\n\nexport default function Example() {\n  return (\n    <Accordion>\n      <AccordionItem header="What is Lorem Ipsum?" initialEntered>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n        eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      </AccordionItem>\n\n      <AccordionItem header="Where does it come from?">\n        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla\n        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus\n        vitae, accumsan auctor mi.\n      </AccordionItem>\n\n      <AccordionItem header="Why do we use it?" initialEntered>\n        Suspendisse massa risus, pretium id interdum in, dictum sit amet\n        ante. Fusce vulputate purus sed tempus feugiat.\n      </AccordionItem>\n    </Accordion>\n  );\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Accordion")," component also has an ",(0,o.kt)("inlineCode",{parentName:"p"},"initialEntered")," prop which can make every accordion\nitem expanded when initially mounted."),(0,o.kt)("p",{parentName:"admonition"},"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialEntered")," prop is specified on an individual ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionItem")," at the same\ntime, it overrides the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialEntered")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"Accordion")," component.")))}h.isMDXComponent=!0},8966:(e,t,n)=>{n.d(t,{Z:()=>i});const i={accordion:"accordion_nIGp",item:"item_YcP7",button:"button_lQEz",buttonExpanded:"buttonExpanded_Fmda button_lQEz",chevron:"chevron_Ys3M",content:"content_v0f5",panel:"panel_FAXb"}}}]);