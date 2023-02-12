/*! For license information please see 98a4f21b.3068285d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[882],{1426:(e,t,n)=>{var r=n(7378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:s.current}}t.jsx=c,t.jsxs=c},4246:(e,t,n)=>{e.exports=n(1426)},497:(e,t,n)=>{n.d(t,{Z:()=>s});var r,a,o=n(7378);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-down",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round","aria-labelledby":n},s),t?o.createElement("title",{id:n},t):null,r||(r=o.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"})),a||(a=o.createElement("path",{d:"m6 9 6 6 6-6"})))}},8888:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{g:()=>r,v:()=>a})},3963:(e,t,n)=>{n.d(t,{a:()=>i});var r=n(8888),a=n(3284),o=n(4246);const i=e=>(0,o.jsx)(a.SY.Provider,(0,r.g)({},e))},5129:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(3284);const a=e=>{do{e=e.parentElement}while(e&&!e.hasAttribute(r.gE));return e},o=(e,t,n)=>e?t>0?t-1:n-1:(t+1)%n,i=(e,t)=>{const{activeElement:n}=document;if(!n||!n.hasAttribute(r.OM)||a(n)!==t.currentTarget)return;const i=t.currentTarget.querySelectorAll(`[${r.OM}]`),{length:s}=i;for(let r=0;r<s;r++)if(i[r]===n){let n=o(e,r,s);for(;a(i[r])!==a(i[n]);)n=o(e,n,s);r!==n&&(t.preventDefault(),i[n].focus());break}},s=()=>({accordionProps:{[r.gE]:"",onKeyDown:e=>"ArrowUp"===e.key?i(!0,e):"ArrowDown"===e.key&&i(!1,e)}})},6301:(e,t,n)=>{n.d(t,{E:()=>i,e:()=>o});var r=n(7378),a=n(3284);const o=(e,t,n)=>{const{stateMap:r,mountOnEnter:a,initialEntered:o}=e,i=null!=n?n:o;return r.get(t)||{status:i?"entered":a?"unmounted":"exited",isMounted:!a,isEnter:i,isResolved:!0}},i=()=>(0,r.useContext)(a.SY)},9217:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(3284),a=n(7378);let o=0;const i=a.useId||(()=>{const[e,t]=(0,a.useState)();return(0,a.useEffect)((()=>t(++o)),[]),e&&`${r.o6}-${e}`}),s=e=>{let{state:t,toggle:n,disabled:a}=e;const o=i(),s=o&&o+"-",l={id:o,"aria-controls":s,"aria-expanded":t.isEnter,onClick:n};a?l.disabled=!0:l[r.OM]="";return{buttonProps:l,panelProps:{id:s,"aria-labelledby":o,role:"region"}}}},3316:(e,t,n)=>{n.d(t,{l:()=>o});var r=n(7378),a=n(6301);const o=function(e){let{itemKey:t,initialEntered:n,disabled:o}=void 0===e?{}:e;const i=(0,r.useRef)(null),s=(0,a.E)(),l=null!=t?t:i.current,c=(0,a.e)(s,l,n),{setItem:u,deleteItem:d,toggle:m}=s;return(0,r.useEffect)((()=>{if(o)return;const e=null!=t?t:i.current;return u(e,{initialEntered:n}),()=>{d(e)}}),[u,d,t,n,o]),{itemRef:i,state:c,toggle:(0,r.useCallback)((e=>m(l,e)),[m,l])}}},6150:(e,t,n)=>{n.d(t,{n:()=>p});var r=n(8888),a=n(7378);const o=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],i=e=>e?6:5,s=new Map,l=new Map,c=(e,t,n,r,a,i)=>{clearTimeout(a);const s=(e=>({_s:e,status:o[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}))(t),l=new Map(r.current);l.set(e,s),n(l),r.current=l,i&&i({key:e,current:s})},u=({allowMultiple:e,enter:t=!0,exit:n=!0,preEnter:r,preExit:o,timeout:u,initialEntered:d,mountOnEnter:m,unmountOnExit:p,onStateChange:f}={})=>{const[g,h]=(0,a.useState)(s),b=(0,a.useRef)(g),v=(0,a.useRef)(l),[y,E]=(e=>"object"==typeof e?[e.enter,e.exit]:[e,e])(u),w=(0,a.useCallback)(((e,t)=>{const{initialEntered:n=d}=t||{},r=n?2:i(m);c(e,r,h,b),v.current.set(e,{})}),[d,m]),k=(0,a.useCallback)((e=>{const t=new Map(b.current);return!!t.delete(e)&&(h(t),b.current=t,v.current.delete(e),!0)}),[]),x=(0,a.useCallback)((e=>{const t=b.current.get(e);if(!t)return;const{timeoutId:n}=v.current.get(e),r=((e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return i(t)}})(t._s,p);r&&c(e,r,h,b,n,f)}),[f,p]),N=(0,a.useCallback)(((a,s)=>{const l=b.current.get(a);if(!l)return;const u=v.current.get(a),d=e=>{switch(c(a,e,h,b,u.timeoutId,f),e){case 1:y>=0&&(u.timeoutId=setTimeout((()=>x(a)),y));break;case 4:E>=0&&(u.timeoutId=setTimeout((()=>x(a)),E));break;case 0:case 3:u.timeoutId=setTimeout((()=>d(e+1)),0)}},m=l.isEnter;"boolean"!=typeof s&&(s=!m),s?m||(d(t?r?0:1:2),!e&&b.current.forEach(((e,t)=>t!==a&&N(t,!1)))):m&&d(n?o?3:4:i(p))}),[f,x,e,t,n,r,o,y,E,p]),I=(0,a.useCallback)((t=>{if(e||!1===t)for(const e of b.current.keys())N(e,t)}),[e,N]);return{stateMap:g,toggle:N,toggleAll:I,endTransition:x,setItem:w,deleteItem:k}},d=["transition","transitionTimeout"],m=(e,t)=>!0===e||!(!e||!e[t]),p=function(e){void 0===e&&(e={});let{transition:t,transitionTimeout:n}=e,a=(0,r.v)(e,d);const o=u((0,r.g)({timeout:n,enter:m(t,"enter"),exit:m(t,"exit"),preEnter:m(t,"preEnter"),preExit:m(t,"preExit")},a));return(0,r.g)({mountOnEnter:!!a.mountOnEnter,initialEntered:!!a.initialEntered},o)}},3969:(e,t,n)=>{n.d(t,{w:()=>o});var r=n(7378);const a="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,o=e=>{let{status:t,isResolved:n}=e;const[o,i]=(0,r.useState)(),s=(0,r.useRef)(null);a((()=>{("preEnter"===t||"preExit"===t)&&i(s.current.getBoundingClientRect().height)}),[t]);return[{height:"preEnter"===t||"exiting"===t?0:"entering"===t||"preExit"===t?o:void 0,overflow:n?void 0:"hidden"},s]}},3284:(e,t,n)=>{n.d(t,{Kj:()=>a,OM:()=>s,SY:()=>l,gE:()=>i,o6:()=>o});var r=n(7378);const a="szh-accordion",o="szh-adn",i=`data-${o}`,s=`data-${o}-btn`,l=(0,r.createContext)({})},3253:(e,t,n)=>{n.d(t,{UQ:()=>j,Qd:()=>R,Hv:()=>P,nT:()=>i.n,w8:()=>C});var r=n(7462),a=n(7378),o=n(8888),i=n(6150),s=n(3284);const l=(e,t,n)=>(r,a)=>{const o=t?`${e}__${t}`:e;let i=o;n&&Object.keys(n).forEach((e=>{const t=n[e];t&&(i+=` ${o}--${!0===t?e:`${e}-${t}`}`)}));let s="function"==typeof r?r(a):r;return"string"==typeof s&&(s=s.trim(),s&&(i+=` ${s}`)),i},c=(e,t)=>{if(!t)return e;const n=(0,o.g)({},e);return Object.keys(t).forEach((r=>{const a=e[r],o=t[r];n[r]="function"==typeof o&&a?function(){a(...arguments),o(...arguments)}:o})),n};var u=n(3963),d=n(5129),m=n(4246);const p=["providerValue","className"],f=(0,a.forwardRef)(((e,t)=>{let{providerValue:n,className:r}=e,a=(0,o.v)(e,p);const{accordionProps:i}=(0,d.A)();return(0,m.jsx)(u.a,{value:n,children:(0,m.jsx)("div",(0,o.g)({},c(i,a),{ref:t,className:l(s.Kj)(r)}))})}));f.displayName="ControlledAccordion";const g=["allowMultiple","initialEntered","mountOnEnter","unmountOnExit","transition","transitionTimeout","onStateChange"],h=(0,a.forwardRef)(((e,t)=>{let{allowMultiple:n,initialEntered:r,mountOnEnter:a,unmountOnExit:s,transition:l,transitionTimeout:c,onStateChange:u}=e,d=(0,o.v)(e,g);const p=(0,i.n)({allowMultiple:n,initialEntered:r,mountOnEnter:a,unmountOnExit:s,transition:l,transitionTimeout:c,onStateChange:u});return(0,m.jsx)(f,(0,o.g)({},d,{ref:t,providerValue:p}))}));h.displayName="Accordion";var b=n(9217),v=n(3969);function y(e,t){"function"==typeof e?e(t):e.current=t}function E(e,t){return(0,a.useMemo)((()=>e?t?n=>{y(e,n),y(t,n)}:e:t),[e,t])}var w=n(3316);const k=["itemKey","initialEntered"],x=e=>{const t=(0,a.forwardRef)(((t,n)=>{let{itemKey:r,initialEntered:a}=t,i=(0,o.v)(t,k);return(0,m.jsx)(e,(0,o.g)({forwardedRef:n},i,(0,w.l)({itemKey:r,initialEntered:a,disabled:i.disabled})))}));return t.displayName="WithAccordionItem",t},N=["forwardedRef","itemRef","state","toggle","className","disabled","header","headingTag","headingProps","buttonProps","contentProps","panelProps","children"],I=(e,t)=>"function"==typeof e?e(t):e,A=(0,a.memo)((e=>{let{forwardedRef:t,itemRef:n,state:r,toggle:a,className:i,disabled:u,header:d,headingTag:p="h3",headingProps:f,buttonProps:g,contentProps:h,panelProps:y,children:w}=e,k=(0,o.v)(e,N);const x={state:r,toggle:a,disabled:u},{buttonProps:A,panelProps:T}=(0,b.Z)(x),[O,_]=(0,v.w)(r),S=E(y&&y.ref,_),{status:C,isMounted:j,isEnter:P}=r;return(0,m.jsxs)("div",(0,o.g)({},k,{ref:E(t,n),className:l(s.Kj,"item",{status:C,expanded:P})(i,r),children:[(0,m.jsx)(p,(0,o.g)({},f,{style:(0,o.g)({margin:0},f&&f.style),className:l(s.Kj,"item-heading")(f&&f.className,r),children:(0,m.jsx)("button",(0,o.g)({},c(A,g),{type:"button",className:l(s.Kj,"item-btn")(g&&g.className,r),children:I(d,x)}))})),j&&(0,m.jsx)("div",(0,o.g)({},h,{style:(0,o.g)({display:"exited"===C?"none":void 0},O,h&&h.style),className:l(s.Kj,"item-content")(h&&h.className,r),children:(0,m.jsx)("div",(0,o.g)({},c(T,y),{ref:S,className:l(s.Kj,"item-panel")(y&&y.className,r),children:I(w,x)}))}))]}))}));A.displayName="AccordionItem";const T=x(A);var O=n(497),_=n(8966),S=n(6301);const C=()=>{const e=(0,S.E)();return{getItemState:function(t,n){let{initialEntered:r}=void 0===n?{}:n;return(0,S.e)(e,t,r)},toggle:e.toggle,toggleAll:e.toggleAll}},j=e=>a.createElement(h,(0,r.Z)({},e,{className:_.Z.accordion,transition:!0,transitionTimeout:200})),P=e=>a.createElement(f,(0,r.Z)({},e,{className:_.Z.accordion})),R=e=>a.createElement(T,(0,r.Z)({},e,{header:t=>a.createElement(a.Fragment,null,"function"==typeof e.header?e.header(t):e.header,a.createElement(O.Z,{className:_.Z.chevron})),className:_.Z.item,buttonProps:{className:e=>{let{isEnter:t}=e;return t?_.Z.buttonExpanded:_.Z.button}},contentProps:{className:_.Z.content},panelProps:{className:_.Z.panel}}))},9910:(e,t,n)=>{n.d(t,{w:()=>r});const r=e=>e.replace("import React from 'react';\n","").replace("from '../accordion'","from '@szhsin/react-accordion'")},1022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>C,default:()=>M,frontMatter:()=>S,metadata:()=>j,toc:()=>R});var r=n(7462),a=n(7378),o=n(3905),i=n(6010),s=n(2466),l=n(6775),c=n(1980),u=n(7392),d=n(12);function m(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=g({queryString:n,groupId:r}),[u,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=l??u;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),m(e)}),[c,m,o]),tabValues:o}}var b=n(2389);const v="tabList__CuJ",y="tabItem_LNqP";function E(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==o&&(d(t),l(r))},p=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},s,{className:(0,i.Z)("tabs__item",y,null==s?void 0:s.className,{"tabs__item--active":o===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",v)},a.createElement(E,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}const N="tabItem_Ymn6";function I(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(N,r),hidden:n},t)}var A=n(814);var T=n(9910),O=n(3253);function _(){return a.createElement(O.UQ,null,a.createElement(O.Qd,{header:"What is Lorem Ipsum?"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),a.createElement(O.Qd,{header:"Where does it come from?"},"Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi."),a.createElement(O.Qd,{header:"Why do we use it?"},"Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat."))}const S={sidebar_position:1},C="Getting Started",j={unversionedId:"docs/getting-started",id:"docs/getting-started",title:"Getting Started",description:"Install",source:"@site/docs/docs/getting-started.mdx",sourceDirName:"docs",slug:"/docs/getting-started",permalink:"/react-accordion/docs/getting-started",draft:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Allowing multiple",permalink:"/react-accordion/docs/allow-multiple"}},P={},R=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Accessibility",id:"accessibility",level:2}],Z={toc:R};function M(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(x,{mdxType:"Tabs"},(0,o.kt)(I,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @szhsin/react-accordion\n"))),(0,o.kt)(I,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @szhsin/react-accordion\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"An accordion is created by wrapping any number of ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionItem")," components inside an\n",(0,o.kt)("inlineCode",{parentName:"p"},"Accordion")," component."),(0,o.kt)("p",null,"By default, only one accordion item can be expanded at one time."),(0,o.kt)(_,{mdxType:"Basic"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When focus is on an accordion header, you may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowDown")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowUp")," keys to\nmove focus to the next or previous accordion header.")),(0,o.kt)(A.Z,{language:"jsx",mdxType:"CodeBlock"},(0,T.w)('import React from \'react\';\nimport { Accordion, AccordionItem } from \'../accordion\';\n\nexport default function Example() {\n  return (\n    <Accordion>\n      <AccordionItem header="What is Lorem Ipsum?">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n        eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      </AccordionItem>\n\n      <AccordionItem header="Where does it come from?">\n        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla\n        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus\n        vitae, accumsan auctor mi.\n      </AccordionItem>\n\n      <AccordionItem header="Why do we use it?">\n        Suspendisse massa risus, pretium id interdum in, dictum sit amet\n        ante. Fusce vulputate purus sed tempus feugiat.\n      </AccordionItem>\n    </Accordion>\n  );\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://codesandbox.io/s/react-accordion-css-module-eqvnzg"},"Try on CodeSandbox"))),(0,o.kt)("p",null,"Or, if your data is already in an array:"),(0,o.kt)(A.Z,{language:"jsx",mdxType:"CodeBlock"},(0,T.w)("import React from 'react';\nimport { Accordion, AccordionItem } from '../accordion';\n\nconst items = [\n  {\n    header: 'What is Lorem Ipsum?',\n    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing...'\n  },\n  {\n    header: 'Where does it come from?',\n    content: 'Quisque eget luctus mi, vehicula mollis lorem...'\n  },\n  {\n    header: 'Why do we use it?',\n    content: 'Suspendisse massa risus, pretium id interdum in...'\n  }\n];\n\nexport default function Example() {\n  return (\n    <Accordion>\n      {items.map(({ header, content }, i) => (\n        <AccordionItem header={header} key={i}>\n          {content}\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Although the ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionItem")," looks like some simple text content, you may\nprovide it with any JSX elements or React components, allowing the item header to be\n",(0,o.kt)("a",{parentName:"p",href:"./customising-header"},"freely customised"),".")),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"This library implements WAI-ARIA roles, states, properties, and keyboard interaction,\nwhich is compliant with the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"},"Accordion Pattern"),"."))}M.isMDXComponent=!0},8966:(e,t,n)=>{n.d(t,{Z:()=>r});const r={accordion:"accordion_nIGp",item:"item_YcP7",button:"button_lQEz",buttonExpanded:"buttonExpanded_Fmda button_lQEz",chevron:"chevron_Ys3M",content:"content_v0f5",panel:"panel_FAXb"}}}]);