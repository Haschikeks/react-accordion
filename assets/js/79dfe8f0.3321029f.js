/*! For license information please see 79dfe8f0.3321029f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[373],{1426:(e,t,n)=>{var r=n(7378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,d=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:d,props:i,_owner:s.current}}t.jsx=u,t.jsxs=u},4246:(e,t,n)=>{e.exports=n(1426)},497:(e,t,n)=>{n.d(t,{Z:()=>s});var r,o,i=n(7378);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-down",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round","aria-labelledby":n},s),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"})),o||(o=i.createElement("path",{d:"m6 9 6 6 6-6"})))}},8888:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{g:()=>r,v:()=>o})},3963:(e,t,n)=>{n.d(t,{a:()=>a});var r=n(8888),o=n(3284),i=n(4246),a=function(e){return(0,i.jsx)(o.SY.Provider,(0,r.g)({},e))}},5129:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(3284),o=function(e){do{e=e.parentElement}while(e&&!e.hasAttribute(r.gE));return e},i=function(e,t,n){return e?t>0?t-1:n-1:(t+1)%n},a=function(e,t){var n=document.activeElement;if(n&&n.hasAttribute(r.OM)&&o(n)===t.currentTarget)for(var a=t.currentTarget.querySelectorAll("["+r.OM+"]"),s=a.length,c=0;c<s;c++)if(a[c]===n){for(var u=i(e,c,s);o(a[c])!==o(a[u]);)u=i(e,u,s);c!==u&&(t.preventDefault(),a[u].focus());break}},s=function(){var e;return{accordionProps:((e={})[r.gE]="",e.onKeyDown=function(e){return"ArrowUp"===e.key?a(!0,e):"ArrowDown"===e.key&&a(!1,e)},e)}}},6301:(e,t,n)=>{n.d(t,{E:()=>a,e:()=>i});var r=n(7378),o=n(3284);function i(e,t,n){var r=e.stateMap,o=e.mountOnEnter,i=e.initialEntered,a=null!=n?n:i;return r.get(t)||{status:a?"entered":o?"unmounted":"exited",isMounted:!o,isEnter:a,isResolved:!0}}var a=function(){return(0,r.useContext)(o.SY)}},9217:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(3284),o=n(7378),i=0,a=o.useId||function(){var e=(0,o.useState)(),t=e[0],n=e[1];return(0,o.useEffect)((function(){return n(++i)}),[]),t&&r.o6+"-"+t},s=function(e){var t,n=e.state,o=e.toggle,i=a(),s=i&&i+"-";return{buttonProps:((t={id:i})[r.OM]="",t["aria-controls"]=s,t["aria-expanded"]=n.isEnter,t.onClick=o,t),panelProps:{id:s,"aria-labelledby":i,role:"region"}}}},3316:(e,t,n)=>{n.d(t,{l:()=>i});var r=n(7378),o=n(6301),i=function(e){var t=void 0===e?{}:e,n=t.itemKey,i=t.initialEntered,a=(0,r.useRef)(null),s=(0,o.E)(),c=null!=n?n:a.current,u=(0,o.e)(s,c,i),d=s.setItem,l=s.deleteItem,m=s.toggle;return(0,r.useEffect)((function(){var e=null!=n?n:a.current;return d(e,{initialEntered:i}),function(){l(e)}}),[d,l,n,i]),{itemRef:a,state:u,toggle:(0,r.useCallback)((function(e){return m(c,e)}),[m,c])}}},6150:(e,t,n)=>{n.d(t,{n:()=>p});var r=n(8888),o=n(7378),i=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],a=function(e){return e?6:5},s=new Map,c=new Map,u=function(e){var t=e.key,n=e.status,r=e.setStateMap,o=e.latestStateMap,a=e.timeoutId,s=e.onChange;clearTimeout(a);var c=function(e){return{_status:e,status:i[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}}(n),u=new Map(o.current);u.set(t,c),r(u),o.current=u,s&&s({key:t,current:c})},d=function(e){var t=void 0===e?{}:e,n=t.allowMultiple,r=t.enter,i=void 0===r||r,d=t.exit,l=void 0===d||d,m=t.preEnter,p=t.preExit,f=t.timeout,h=t.initialEntered,g=t.mountOnEnter,v=t.unmountOnExit,E=t.onStateChange,y=(0,o.useState)(s),b=y[0],w=y[1],x=(0,o.useRef)(b),k=(0,o.useRef)(c),S=function(e){return"object"==typeof e?[e.enter,e.exit]:[e,e]}(f),O=S[0],N=S[1],j=(0,o.useCallback)((function(e,t){var n=(t||{}).initialEntered,r=(void 0===n?h:n)?2:a(g);u({key:e,status:r,setStateMap:w,latestStateMap:x}),k.current.set(e,{})}),[h,g]),C=(0,o.useCallback)((function(e){var t=new Map(x.current);return!!t.delete(e)&&(w(t),x.current=t,k.current.delete(e),!0)}),[]),M=(0,o.useCallback)((function(e){var t=x.current.get(e);if(t){var n=k.current.get(e).timeoutId,r=function(e,t){switch(e){case 1:case 0:return 2;case 4:case 3:return a(t)}}(t._status,v);r&&u({key:e,status:r,setStateMap:w,latestStateMap:x,timeoutId:n,onChange:E})}}),[E,v]),_=(0,o.useCallback)((function(e,t){var r=x.current.get(e);if(r){var o=k.current.get(e),s=function t(n){switch(u({key:e,status:n,setStateMap:w,latestStateMap:x,timeoutId:o.timeoutId,onChange:E}),n){case 1:O>=0&&(o.timeoutId=setTimeout((function(){return M(e)}),O));break;case 4:N>=0&&(o.timeoutId=setTimeout((function(){return M(e)}),N));break;case 0:case 3:o.timeoutId=setTimeout((function(){return t(n+1)}),0)}},c=r.isEnter;"boolean"!=typeof t&&(t=!c),t?c||(s(i?m?0:1:2),!n&&x.current.forEach((function(t,n){return n!==e&&_(n,!1)}))):c&&s(l?p?3:4:a(v))}}),[E,M,n,i,l,m,p,O,N,v]);return{stateMap:b,toggle:_,endTransition:M,setItem:j,deleteItem:C}},l=["transition","transitionTimeout"],m=function(e,t){return!0===e||!(!e||!e[t])},p=function(e){var t=void 0===e?{}:e,n=t.transition,o=t.transitionTimeout,i=(0,r.v)(t,l),a=d((0,r.g)({timeout:o,enter:m(n,"enter"),exit:m(n,"exit"),preEnter:m(n,"preEnter"),preExit:m(n,"preExit")},i));return(0,r.g)({mountOnEnter:!!i.mountOnEnter,initialEntered:!!i.initialEntered},a)}},3969:(e,t,n)=>{n.d(t,{w:()=>i});var r=n(7378),o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,i=function(e){var t=e.status,n=e.isResolved,i=(0,r.useState)(),a=i[0],s=i[1],c=(0,r.useRef)(null);return o((function(){("preEnter"===t||"preExit"===t)&&s(c.current.getBoundingClientRect().height)}),[t]),[{height:"preEnter"===t||"exiting"===t?0:"entering"===t||"preExit"===t?a:void 0,overflow:n?void 0:"hidden"},c]}},3284:(e,t,n)=>{n.d(t,{Kj:()=>o,OM:()=>s,SY:()=>c,gE:()=>a,o6:()=>i});var r=n(7378),o="szh-accordion",i="szh-adn",a="data-"+i,s="data-"+i+"-btn",c=(0,r.createContext)({})},3253:(e,t,n)=>{n.d(t,{UQ:()=>T,Qd:()=>R,Hv:()=>P,nT:()=>a.n,w8:()=>I});var r=n(7462),o=n(7378),i=n(8888),a=n(6150),s=n(3284),c=function(e,t,n){return function(r,o){var i=t?e+"__"+t:e,a=i;n&&Object.keys(n).forEach((function(e){var t=n[e];t&&(a+=" "+i+"--"+(!0===t?e:e+"-"+t))}));var s="function"==typeof r?r(o):r;return"string"==typeof s&&(s=s.trim())&&(a+=" "+s),a}},u=function(e,t){if(!t)return e;var n=(0,i.g)({},e);return Object.keys(t).forEach((function(r){var o=e[r],i=t[r];n[r]="function"==typeof i&&o?function(){o.apply(void 0,arguments),i.apply(void 0,arguments)}:i})),n},d=n(3963),l=n(5129),m=n(4246),p=["providerValue","className"],f=(0,o.forwardRef)((function(e,t){var n=e.providerValue,r=e.className,o=(0,i.v)(e,p),a=(0,l.A)().accordionProps;return(0,m.jsx)(d.a,{value:n,children:(0,m.jsx)("div",(0,i.g)({},u(a,o),{ref:t,className:c(s.Kj)(r)}))})}));f.displayName="ControlledAccordion";var h=["allowMultiple","initialEntered","mountOnEnter","unmountOnExit","transition","transitionTimeout","onStateChange"],g=(0,o.forwardRef)((function(e,t){var n=e.allowMultiple,r=e.initialEntered,o=e.mountOnEnter,s=e.unmountOnExit,c=e.transition,u=e.transitionTimeout,d=e.onStateChange,l=(0,i.v)(e,h),p=(0,a.n)({allowMultiple:n,initialEntered:r,mountOnEnter:o,unmountOnExit:s,transition:c,transitionTimeout:u,onStateChange:d});return(0,m.jsx)(f,(0,i.g)({},l,{ref:t,providerValue:p}))}));g.displayName="Accordion";var v=n(9217),E=n(3969);function y(e,t){"function"==typeof e?e(t):e.current=t}function b(e,t){return(0,o.useMemo)((function(){return e?t?function(n){y(e,n),y(t,n)}:e:t}),[e,t])}var w=n(3316),x=["itemKey","initialEntered"],k=function(e){var t=(0,o.forwardRef)((function(t,n){var r=t.itemKey,o=t.initialEntered,a=(0,i.v)(t,x);return(0,m.jsx)(e,(0,i.g)({forwardedRef:n},a,(0,w.l)({itemKey:r,initialEntered:o})))}));return t.displayName="WithAccordionItem",t},S=["forwardedRef","itemRef","state","toggle","className","header","headingTag","headingProps","buttonProps","contentProps","panelProps","children"],O=function(e,t){return"function"==typeof e?e(t):e},N=(0,o.memo)((function(e){var t=e.forwardedRef,n=e.itemRef,r=e.state,a=e.toggle,d=e.className,l=e.header,p=e.headingTag,f=e.headingProps,h=e.buttonProps,g=e.contentProps,y=e.panelProps,w=e.children,x=(0,i.v)(e,S),k={state:r,toggle:a},N=(0,v.Z)(k),j=N.buttonProps,C=N.panelProps,M=(0,E.w)(r),_=M[0],I=M[1],T=b(y&&y.ref,I),P=r.status,R=r.isMounted,A=r.isEnter;return(0,m.jsxs)("div",(0,i.g)({},x,{ref:b(t,n),className:c(s.Kj,"item",{status:P,expanded:A})(d,r),children:[(0,o.createElement)(p||"h3",(0,i.g)({},f,{style:(0,i.g)({margin:0},f&&f.style),className:c(s.Kj,"item-heading")(f&&f.className,r)}),(0,m.jsx)("button",(0,i.g)({},u(j,h),{type:"button",className:c(s.Kj,"item-btn")(h&&h.className,r),children:O(l,k)}))),R&&(0,m.jsx)("div",(0,i.g)({},g,{style:(0,i.g)({display:"exited"===P?"none":void 0},_,g&&g.style),className:c(s.Kj,"item-content")(g&&g.className,r),children:(0,m.jsx)("div",(0,i.g)({},u(C,y),{ref:T,className:c(s.Kj,"item-panel")(y&&y.className,r),children:O(w,k)}))}))]}))}));N.displayName="AccordionItem";var j=k(N),C=n(497),M=n(8966),_=n(6301),I=function(){var e=(0,_.E)();return{getItemState:function(t,n){var r=(void 0===n?{}:n).initialEntered;return(0,_.e)(e,t,r)},toggle:e.toggle}};const T=e=>o.createElement(g,(0,r.Z)({},e,{className:M.Z.accordion,transition:!0,transitionTimeout:200})),P=e=>o.createElement(f,(0,r.Z)({},e,{className:M.Z.accordion})),R=e=>o.createElement(j,(0,r.Z)({},e,{header:t=>o.createElement(o.Fragment,null,"function"==typeof e.header?e.header(t):e.header,o.createElement(C.Z,{className:M.Z.chevron})),className:M.Z.item,buttonProps:{className:e=>{let{isEnter:t}=e;return t?M.Z.buttonExpanded:M.Z.button}},contentProps:{className:M.Z.content},panelProps:{className:M.Z.panel}}))},9910:(e,t,n)=>{n.d(t,{w:()=>r});const r=e=>e.replace("import React from 'react';\n","").replace("from '../accordion'","from '@szhsin/react-accordion'")},1031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var r=n(7462),o=n(7378),i=n(3905),a=n(814);var s=n(9910),c=n(3253);const u=[{header:"What is Lorem Ipsum?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing..."},{header:"Where does it come from?",content:"Quisque eget luctus mi, vehicula mollis lorem..."},{header:"Why do we use it?",content:"Suspendisse massa risus, pretium id interdum in..."}];function d(){return o.createElement(c.UQ,{onStateChange:e=>{let{key:t,current:n}=e;n.isResolved&&console.log(`${t} is expanded: ${n.isEnter}`)}},u.map(((e,t)=>{let{header:n,content:r}=e;return o.createElement(c.Qd,{key:t,header:n,itemKey:`Item-${t+1}`},r)})))}const l={sidebar_position:8},m="State changing event",p={unversionedId:"docs/on-state-change",id:"docs/on-state-change",title:"State changing event",description:"The onStateChange event of Accordion can be used to listen to item state updates. The",source:"@site/docs/docs/on-state-change.mdx",sourceDirName:"docs",slug:"/docs/on-state-change",permalink:"/react-accordion/docs/on-state-change",draft:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/on-state-change.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Nested accordion",permalink:"/react-accordion/docs/nested"},next:{title:"Styling",permalink:"/react-accordion/docs/styling"}},f={},h=[],g={toc:h};function v(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"state-changing-event"},"State changing event"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"onStateChange")," event of ",(0,i.kt)("inlineCode",{parentName:"p"},"Accordion")," can be used to listen to item state updates. The\nevent object has a ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," prop identifying which item's state has changed."),(0,i.kt)(d,{mdxType:"StateChange"}),(0,i.kt)(a.Z,{language:"jsx",mdxType:"CodeBlock"},(0,s.w)("import React from 'react';\nimport { Accordion, AccordionItem } from '../accordion';\n\nconst items = [\n  {\n    header: 'What is Lorem Ipsum?',\n    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing...'\n  },\n  {\n    header: 'Where does it come from?',\n    content: 'Quisque eget luctus mi, vehicula mollis lorem...'\n  },\n  {\n    header: 'Why do we use it?',\n    content: 'Suspendisse massa risus, pretium id interdum in...'\n  }\n];\n\n/* eslint-disable no-console */\n\nexport default function Example() {\n  return (\n    <Accordion\n      // highlight-start\n      onStateChange={({ key, current }) => {\n        if (current.isResolved)\n          console.log(`${key} is expanded: ${current.isEnter}`);\n      }}\n      // highlight-end\n    >\n      {items.map(({ header, content }, i) => (\n        <AccordionItem\n          key={i}\n          header={header}\n          // Explicitly set `itemKey` prop for each item\n          // highlight-next-line\n          itemKey={`Item-${i + 1}`}\n        >\n          {content}\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Open the browser console to see the logs.")))}v.isMDXComponent=!0},8966:(e,t,n)=>{n.d(t,{Z:()=>r});const r={accordion:"accordion_nIGp",item:"item_YcP7",button:"button_lQEz",buttonExpanded:"buttonExpanded_Fmda button_lQEz",chevron:"chevron_Ys3M",content:"content_v0f5",panel:"panel_FAXb"}}}]);