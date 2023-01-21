/*! For license information please see 65ce311d.09705d30.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[235],{1426:(e,t,n)=>{var r=n(7378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:s.current}}t.jsx=u,t.jsxs=u},4246:(e,t,n)=>{e.exports=n(1426)},497:(e,t,n)=>{n.d(t,{Z:()=>s});var r,o,a=n(7378);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-down",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round","aria-labelledby":n},s),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{d:"M0 0h24v24H0z",stroke:"none"})),o||(o=a.createElement("path",{d:"m6 9 6 6 6-6"})))}},8888:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{g:()=>r,v:()=>o})},3963:(e,t,n)=>{n.d(t,{a:()=>i});var r=n(8888),o=n(3284),a=n(4246),i=function(e){return(0,a.jsx)(o.SY.Provider,(0,r.g)({},e))}},5129:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(3284),o=function(e){do{e=e.parentElement}while(e&&!e.hasAttribute(r.gE));return e},a=function(e,t,n){return e?t>0?t-1:n-1:(t+1)%n},i=function(e,t){var n=document.activeElement;if(n&&n.hasAttribute(r.OM)&&o(n)===t.currentTarget)for(var i=t.currentTarget.querySelectorAll("["+r.OM+"]"),s=i.length,c=0;c<s;c++)if(i[c]===n){for(var u=a(e,c,s);o(i[c])!==o(i[u]);)u=a(e,u,s);c!==u&&(t.preventDefault(),i[u].focus());break}},s=function(){var e;return{accordionProps:((e={})[r.gE]="",e.onKeyDown=function(e){return"ArrowUp"===e.key?i(!0,e):"ArrowDown"===e.key&&i(!1,e)},e)}}},6301:(e,t,n)=>{n.d(t,{E:()=>i,e:()=>a});var r=n(7378),o=n(3284);function a(e,t,n){var r=e.stateMap,o=e.mountOnEnter,a=e.initialEntered,i=null!=n?n:a;return r.get(t)||{status:i?"entered":o?"unmounted":"exited",isMounted:!o,isEnter:i,isResolved:!0}}var i=function(){return(0,r.useContext)(o.SY)}},9217:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(3284),o=n(7378),a=0,i=o.useId||function(){var e=(0,o.useState)(),t=e[0],n=e[1];return(0,o.useEffect)((function(){return n(++a)}),[]),t&&r.o6+"-"+t},s=function(e){var t,n=e.state,o=e.toggle,a=i(),s=a&&a+"-";return{buttonProps:((t={id:a})[r.OM]="",t["aria-controls"]=s,t["aria-expanded"]=n.isEnter,t.onClick=o,t),panelProps:{id:s,"aria-labelledby":a,role:"region"}}}},3316:(e,t,n)=>{n.d(t,{l:()=>a});var r=n(7378),o=n(6301),a=function(e){var t=void 0===e?{}:e,n=t.itemKey,a=t.initialEntered,i=(0,r.useRef)(null),s=(0,o.E)(),c=null!=n?n:i.current,u=(0,o.e)(s,c,a),l=s.setItem,d=s.deleteItem,m=s.toggle;return(0,r.useEffect)((function(){var e=null!=n?n:i.current;return l(e,{initialEntered:a}),function(){d(e)}}),[l,d,n,a]),{itemRef:i,state:u,toggle:(0,r.useCallback)((function(e){return m(c,e)}),[m,c])}}},6150:(e,t,n)=>{n.d(t,{n:()=>p});var r=n(8888),o=n(7378),a=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],i=function(e){return e?6:5},s=new Map,c=new Map,u=function(e){var t=e.key,n=e.status,r=e.setStateMap,o=e.latestStateMap,i=e.timeoutId,s=e.onChange;clearTimeout(i);var c=function(e){return{_status:e,status:a[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}}(n),u=new Map(o.current);u.set(t,c),r(u),o.current=u,s&&s({key:t,current:c})},l=function(e){var t=void 0===e?{}:e,n=t.allowMultiple,r=t.enter,a=void 0===r||r,l=t.exit,d=void 0===l||l,m=t.preEnter,p=t.preExit,f=t.timeout,g=t.initialEntered,v=t.mountOnEnter,h=t.unmountOnExit,E=t.onStateChange,b=(0,o.useState)(s),y=b[0],w=b[1],x=(0,o.useRef)(y),k=(0,o.useRef)(c),N=function(e){return"object"==typeof e?[e.enter,e.exit]:[e,e]}(f),O=N[0],C=N[1],j=(0,o.useCallback)((function(e,t){var n=(t||{}).initialEntered,r=(void 0===n?g:n)?2:i(v);u({key:e,status:r,setStateMap:w,latestStateMap:x}),k.current.set(e,{})}),[g,v]),M=(0,o.useCallback)((function(e){var t=new Map(x.current);return!!t.delete(e)&&(w(t),x.current=t,k.current.delete(e),!0)}),[]),I=(0,o.useCallback)((function(e){var t=x.current.get(e);if(t){var n=k.current.get(e).timeoutId,r=function(e,t){switch(e){case 1:case 0:return 2;case 4:case 3:return i(t)}}(t._status,h);r&&u({key:e,status:r,setStateMap:w,latestStateMap:x,timeoutId:n,onChange:E})}}),[E,h]),_=(0,o.useCallback)((function(e,t){var r=x.current.get(e);if(r){var o=k.current.get(e),s=function t(n){switch(u({key:e,status:n,setStateMap:w,latestStateMap:x,timeoutId:o.timeoutId,onChange:E}),n){case 1:O>=0&&(o.timeoutId=setTimeout((function(){return I(e)}),O));break;case 4:C>=0&&(o.timeoutId=setTimeout((function(){return I(e)}),C));break;case 0:case 3:o.timeoutId=setTimeout((function(){return t(n+1)}),0)}},c=r.isEnter;"boolean"!=typeof t&&(t=!c),t?c||(s(a?m?0:1:2),!n&&x.current.forEach((function(t,n){return n!==e&&_(n,!1)}))):c&&s(d?p?3:4:i(h))}}),[E,I,n,a,d,m,p,O,C,h]);return{stateMap:y,toggle:_,endTransition:I,setItem:j,deleteItem:M}},d=["transition","transitionTimeout"],m=function(e,t){return!0===e||!(!e||!e[t])},p=function(e){var t=void 0===e?{}:e,n=t.transition,o=t.transitionTimeout,a=(0,r.v)(t,d),i=l((0,r.g)({timeout:o,enter:m(n,"enter"),exit:m(n,"exit"),preEnter:m(n,"preEnter"),preExit:m(n,"preExit")},a));return(0,r.g)({mountOnEnter:!!a.mountOnEnter,initialEntered:!!a.initialEntered},i)}},3969:(e,t,n)=>{n.d(t,{w:()=>a});var r=n(7378),o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,a=function(e){var t=e.status,n=e.isResolved,a=(0,r.useState)(),i=a[0],s=a[1],c=(0,r.useRef)(null);return o((function(){("preEnter"===t||"preExit"===t)&&s(c.current.getBoundingClientRect().height)}),[t]),[{height:"preEnter"===t||"exiting"===t?0:"entering"===t||"preExit"===t?i:void 0,overflow:n?void 0:"hidden"},c]}},3284:(e,t,n)=>{n.d(t,{Kj:()=>o,OM:()=>s,SY:()=>c,gE:()=>i,o6:()=>a});var r=n(7378),o="szh-accordion",a="szh-adn",i="data-"+a,s="data-"+a+"-btn",c=(0,r.createContext)({})},3253:(e,t,n)=>{n.d(t,{UQ:()=>A,Qd:()=>R,Hv:()=>S,nT:()=>i.n,w8:()=>P});var r=n(7462),o=n(7378),a=n(8888),i=n(6150),s=n(3284),c=function(e,t,n){return function(r,o){var a=t?e+"__"+t:e,i=a;n&&Object.keys(n).forEach((function(e){var t=n[e];t&&(i+=" "+a+"--"+(!0===t?e:e+"-"+t))}));var s="function"==typeof r?r(o):r;return"string"==typeof s&&(s=s.trim())&&(i+=" "+s),i}},u=function(e,t){if(!t)return e;var n=(0,a.g)({},e);return Object.keys(t).forEach((function(r){var o=e[r],a=t[r];n[r]="function"==typeof a&&o?function(){o.apply(void 0,arguments),a.apply(void 0,arguments)}:a})),n},l=n(3963),d=n(5129),m=n(4246),p=["providerValue","className"],f=(0,o.forwardRef)((function(e,t){var n=e.providerValue,r=e.className,o=(0,a.v)(e,p),i=(0,d.A)().accordionProps;return(0,m.jsx)(l.a,{value:n,children:(0,m.jsx)("div",(0,a.g)({},u(i,o),{ref:t,className:c(s.Kj)(r)}))})}));f.displayName="ControlledAccordion";var g=["allowMultiple","initialEntered","mountOnEnter","unmountOnExit","transition","transitionTimeout","onStateChange"],v=(0,o.forwardRef)((function(e,t){var n=e.allowMultiple,r=e.initialEntered,o=e.mountOnEnter,s=e.unmountOnExit,c=e.transition,u=e.transitionTimeout,l=e.onStateChange,d=(0,a.v)(e,g),p=(0,i.n)({allowMultiple:n,initialEntered:r,mountOnEnter:o,unmountOnExit:s,transition:c,transitionTimeout:u,onStateChange:l});return(0,m.jsx)(f,(0,a.g)({},d,{ref:t,providerValue:p}))}));v.displayName="Accordion";var h=n(9217),E=n(3969);function b(e,t){"function"==typeof e?e(t):e.current=t}function y(e,t){return(0,o.useMemo)((function(){return e?t?function(n){b(e,n),b(t,n)}:e:t}),[e,t])}var w=n(3316),x=["itemKey","initialEntered"],k=function(e){var t=(0,o.forwardRef)((function(t,n){var r=t.itemKey,o=t.initialEntered,i=(0,a.v)(t,x);return(0,m.jsx)(e,(0,a.g)({forwardedRef:n},i,(0,w.l)({itemKey:r,initialEntered:o})))}));return t.displayName="WithAccordionItem",t},N=["forwardedRef","itemRef","state","toggle","className","header","headingTag","headingProps","buttonProps","contentProps","panelProps","children"],O=function(e,t){return"function"==typeof e?e(t):e},C=(0,o.memo)((function(e){var t=e.forwardedRef,n=e.itemRef,r=e.state,i=e.toggle,l=e.className,d=e.header,p=e.headingTag,f=e.headingProps,g=e.buttonProps,v=e.contentProps,b=e.panelProps,w=e.children,x=(0,a.v)(e,N),k={state:r,toggle:i},C=(0,h.Z)(k),j=C.buttonProps,M=C.panelProps,I=(0,E.w)(r),_=I[0],P=I[1],A=y(b&&b.ref,P),S=r.status,R=r.isMounted,T=r.isEnter;return(0,m.jsxs)("div",(0,a.g)({},x,{ref:y(t,n),className:c(s.Kj,"item",{status:S,expanded:T})(l,r),children:[(0,o.createElement)(p||"h3",(0,a.g)({},f,{style:(0,a.g)({margin:0},f&&f.style),className:c(s.Kj,"item-heading")(f&&f.className,r)}),(0,m.jsx)("button",(0,a.g)({},u(j,g),{type:"button",className:c(s.Kj,"item-btn")(g&&g.className,r),children:O(d,k)}))),R&&(0,m.jsx)("div",(0,a.g)({},v,{style:(0,a.g)({display:"exited"===S?"none":void 0},_,v&&v.style),className:c(s.Kj,"item-content")(v&&v.className,r),children:(0,m.jsx)("div",(0,a.g)({},u(M,b),{ref:A,className:c(s.Kj,"item-panel")(b&&b.className,r),children:O(w,k)}))}))]}))}));C.displayName="AccordionItem";var j=k(C),M=n(497),I=n(8966),_=n(6301),P=function(){var e=(0,_.E)();return{getItemState:function(t,n){var r=(void 0===n?{}:n).initialEntered;return(0,_.e)(e,t,r)},toggle:e.toggle}};const A=e=>o.createElement(v,(0,r.Z)({},e,{className:I.Z.accordion,transition:!0,transitionTimeout:200})),S=e=>o.createElement(f,(0,r.Z)({},e,{className:I.Z.accordion})),R=e=>o.createElement(j,(0,r.Z)({},e,{header:t=>o.createElement(o.Fragment,null,"function"==typeof e.header?e.header(t):e.header,o.createElement(M.Z,{className:I.Z.chevron})),className:I.Z.item,buttonProps:{className:e=>{let{isEnter:t}=e;return t?I.Z.buttonExpanded:I.Z.button}},contentProps:{className:I.Z.content},panelProps:{className:I.Z.panel}}))},9910:(e,t,n)=>{n.d(t,{w:()=>r});const r=e=>e.replace("import React from 'react';\n","").replace("from '../accordion'","from '@szhsin/react-accordion'")},8820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>m,toc:()=>f});var r=n(7462),o=n(7378),a=n(3905),i=n(814);var s=n(9910),c=n(3253);function u(){return o.createElement(c.UQ,null,o.createElement(c.Qd,{header:e=>{let{state:t}=e;return`Item expanded: ${t.isEnter}`}},(e=>{let{toggle:t}=e;return o.createElement(o.Fragment,null,o.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),o.createElement("button",{className:"btn",onClick:()=>t(!1)},"Close item"))})),o.createElement(c.Qd,{header:"Where does it come from?"},"Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi."))}const l={sidebar_position:6},d="Accessing item state",m={unversionedId:"docs/accessing-state",id:"docs/accessing-state",title:"Accessing item state",description:"Both the header and children props of AccordionItem component support the",source:"@site/docs/docs/accessing-state.mdx",sourceDirName:"docs",slug:"/docs/accessing-state",permalink:"/react-accordion/docs/accessing-state",draft:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/accessing-state.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Controlling state",permalink:"/react-accordion/docs/controlling-state"},next:{title:"Nested accordion",permalink:"/react-accordion/docs/nested"}},p={},f=[],g={toc:f};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accessing-item-state"},"Accessing item state"),(0,a.kt)("p",null,"Both the ",(0,a.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," props of ",(0,a.kt)("inlineCode",{parentName:"p"},"AccordionItem")," component support the\n",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/render-props.html"},"render prop")," pattern, which can be used to\naccess item state, along with a ",(0,a.kt)("inlineCode",{parentName:"p"},"toggle")," function to open or close the current item."),(0,a.kt)(u,{mdxType:"AccessingState"}),(0,a.kt)(i.Z,{language:"jsx",mdxType:"CodeBlock"},(0,s.w)("import React from 'react';\nimport { Accordion, AccordionItem } from '../accordion';\n\nexport default function Example() {\n  return (\n    <Accordion>\n      <AccordionItem\n        // Accessing item state by giving a function to the `header` prop\n        // highlight-next-line\n        header={({ state }) => `Item expanded: ${state.isEnter}`}\n      >\n        {({ toggle }) => (\n          <>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n              sed do eiusmod tempor incididunt ut labore et dolore magna\n              aliqua.\n            </p>\n\n            {/* `toggle` function is also available from the render prop */}\n            {/* highlight-next-line */}\n            <button className=\"btn\" onClick={() => toggle(false)}>\n              Close item\n            </button>\n          </>\n        )}\n      </AccordionItem>\n\n      <AccordionItem header=\"Where does it come from?\">\n        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla\n        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus\n        vitae, accumsan auctor mi.\n      </AccordionItem>\n    </Accordion>\n  );\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"While this technique is useful for rendering dynamic content based on item state, in most\ncases you won't need it for stying purpose. The ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," prop itself accepts a render\nprop form which can be used to apply class selectors based on state. Please see the\n",(0,a.kt)("a",{parentName:"p",href:"./styling"},"styling docs"),".")))}v.isMDXComponent=!0},8966:(e,t,n)=>{n.d(t,{Z:()=>r});const r={accordion:"accordion_nIGp",item:"item_YcP7",button:"button_lQEz",buttonExpanded:"buttonExpanded_Fmda button_lQEz",chevron:"chevron_Ys3M",content:"content_v0f5",panel:"panel_FAXb"}}}]);