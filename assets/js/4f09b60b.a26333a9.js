"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[594],{1540:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=t(7462),o=(t(7378),t(3905)),s=t(814);const a={sidebar_position:3},r="Creating AccordionItem",d={unversionedId:"docs/headless-ui/accordion-item",id:"docs/headless-ui/accordion-item",title:"Creating AccordionItem",description:"Second, create an AccordionItem component with the useAccordionItem and",source:"@site/docs/docs/headless-ui/accordion-item.mdx",sourceDirName:"docs/headless-ui",slug:"/docs/headless-ui/accordion-item",permalink:"/react-accordion/docs/headless-ui/accordion-item",draft:!1,editUrl:"https://github.com/szhsin/react-accordion/tree/master/website/docs/docs/headless-ui/accordion-item.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Creating Accordion",permalink:"/react-accordion/docs/headless-ui/accordion"},next:{title:"Styles",permalink:"/react-accordion/docs/headless-ui/styles"}},c={},l=[{value:"Without height transition",id:"without-height-transition",level:2},{value:"Height transition",id:"height-transition",level:2}],h={toc:l};function m(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,i.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-accordionitem"},"Creating AccordionItem"),(0,o.kt)("p",null,"Second, create an ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionItem")," component with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAccordionItem")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"useAccordionItemEffect")," hook exported from the library."),(0,o.kt)("h2",{id:"without-height-transition"},"Without height transition"),(0,o.kt)("p",null,"Use the following code if you don't need the height transition for expanding and\ncollapsing items."),(0,o.kt)(s.Z,{language:"jsx",mdxType:"CodeBlock"},"import React from 'react';\nimport {\n  useAccordionItem,\n  useAccordionItemEffect\n} from '@szhsin/react-accordion';\nimport ChevronDown from '@site/static/img/chevron-down.svg';\nimport styles from '../accordion/styles.module.css';\n\nconst AccordionItem = ({\n  header,\n  children,\n  itemKey,\n  initialEntered,\n  disabled\n}: {\n  header: React.ReactNode;\n  children: React.ReactNode;\n  itemKey?: string | number;\n  initialEntered?: boolean;\n  disabled?: boolean;\n}) => {\n  const { itemRef, state, toggle } =\n    useAccordionItemEffect<HTMLDivElement>({\n      itemKey,\n      initialEntered,\n      disabled\n    });\n  const { buttonProps, panelProps } = useAccordionItem({\n    state,\n    toggle,\n    disabled\n  });\n  const { status, isMounted, isEnter } = state;\n\n  return (\n    <div className={styles.item} ref={itemRef}>\n      {/* Choose a heading level that is appropriate for the information \n      architecture of your page */}\n      {/* highlight-next-line */}\n      <h3 style={{ margin: 0 }}>\n        <button\n          className={isEnter ? styles.buttonExpanded : styles.button}\n          type=\"button\"\n          {...buttonProps}\n        >\n          {header}\n          <ChevronDown className={styles.chevron} />\n        </button>\n      </h3>\n      {isMounted && (\n        <div\n          className={styles.panel}\n          style={{\n            display: status === 'exited' ? 'none' : undefined\n          }}\n          {...panelProps}\n        >\n          {children}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default AccordionItem;\n"),(0,o.kt)("h2",{id:"height-transition"},"Height transition"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useHeightTransition")," hook and add a wrapping ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," around the accordion item\nchildren if you want the height transition for expanding and collapsing items."),(0,o.kt)(s.Z,{language:"jsx",mdxType:"CodeBlock"},"import React from 'react';\nimport {\n  useAccordionItem,\n  useAccordionItemEffect,\n  // highlight-next-line\n  useHeightTransition\n} from '@szhsin/react-accordion';\nimport ChevronDown from '@site/static/img/chevron-down.svg';\nimport styles from '../accordion/styles.module.css';\n\nconst AccordionItem = ({\n  header,\n  children,\n  itemKey,\n  initialEntered,\n  disabled\n}: {\n  header: React.ReactNode;\n  children: React.ReactNode;\n  itemKey?: string | number;\n  initialEntered?: boolean;\n  disabled?: boolean;\n}) => {\n  const { itemRef, state, toggle } =\n    useAccordionItemEffect<HTMLDivElement>({\n      itemKey,\n      initialEntered,\n      disabled\n    });\n  const { buttonProps, panelProps } = useAccordionItem({\n    state,\n    toggle,\n    disabled\n  });\n\n  // highlight-start\n  const [transitionStyle, panelRef] =\n    useHeightTransition<HTMLDivElement>(state);\n  // highlight-end\n\n  const { status, isMounted, isEnter } = state;\n\n  return (\n    <div className={styles.item} ref={itemRef}>\n      <h3 style={{ margin: 0 }}>\n        <button\n          className={isEnter ? styles.buttonExpanded : styles.button}\n          type=\"button\"\n          {...buttonProps}\n        >\n          {header}\n          <ChevronDown className={styles.chevron} />\n        </button>\n      </h3>\n      {isMounted && (\n        // Add an extra `div` around the panel `div` for the\n        // height transition to work as intended\n        // highlight-next-line\n        <div\n          className={styles.content}\n          style={{\n            display: status === 'exited' ? 'none' : undefined,\n            // highlight-next-line\n            ...transitionStyle\n          }}\n        >\n          <div\n            className={styles.panel}\n            // highlight-next-line\n            ref={panelRef}\n            {...panelProps}\n          >\n            {children}\n          </div>\n          {/* Closing tag of the extra `div` */}\n          {/* highlight-next-line */}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default AccordionItem;\n"))}m.isMDXComponent=!0}}]);