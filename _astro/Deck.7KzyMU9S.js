import{t as e}from"./react.BSNrPz3h.js";import{t}from"./jsx-runtime.BE1J53Vq.js";import{c as n,i as r,n as i,o as a,r as o,t as s,u as c,v as l}from"./FlowbiteIcons.CKbL8gDJ.js";import{t as u}from"./use-deck.BPwHRKJA.js";var d=e(),f=t(),p=()=>{let e=u();return(0,f.jsxs)(`div`,{className:`       
          font-mono
          min-w-16
          p-2
          text-gray-700 
          border 
          border-gray-700 
          font-medium 
          rounded-lg 
          text-sm 
          text-center
          inline-flex
          items-center 
          justify-between
          me-2
          dark:border-gray-500
          dark:text-gray-500`,children:[(0,f.jsx)(`span`,{children:e.currentSlide+1}),(0,f.jsx)(`span`,{children:`/`}),(0,f.jsx)(`span`,{children:e.slideCount})]})},m=({onClick:e=()=>({}),children:t,disabled:n=!1,title:r=``})=>(0,f.jsx)(`button`,{type:`button`,title:r,disabled:n,onClick:e,className:`
      p-2
      text-gray-700 
      border 
      border-gray-700 
      font-medium 
      rounded-lg 
      text-sm 
      text-center
      inline-flex
      items-center 
      me-2
      dark:border-gray-500
      dark:text-gray-500
      ${n?`bg-gray-200 dark:bg-gray-800`:`dark:hover:bg-gray-500 dark:hover:text-white  hover:text-white   hover:bg-gray-700  `}
      `,children:t}),h=()=>{let e=u();return(0,f.jsx)(m,{title:e.mode==`FullScreen`?`Normal`:`Full screen`,onClick:()=>e.setMode(e.mode==`FullScreen`?`Normal`:`FullScreen`),children:e.mode==`FullScreen`?(0,f.jsx)(a,{}):(0,f.jsx)(n,{})})},g=({className:e})=>{let t=u();return(0,f.jsxs)(`div`,{className:`
            ${e||``}
            flex 
            flex-row
            print:hidden
            `,children:[(0,f.jsx)(m,{title:`First`,disabled:t.currentSlide===0,onClick:()=>t.first(),children:(0,f.jsx)(i,{})}),(0,f.jsx)(m,{title:`Previous`,disabled:!t.hasPrevious,onClick:()=>t.previous(),children:(0,f.jsx)(o,{})}),(0,f.jsx)(m,{title:`Next`,disabled:!t.hasNext,onClick:()=>t.next(),children:(0,f.jsx)(r,{})}),(0,f.jsx)(m,{title:`Last`,disabled:t.currentSlide===t.slideCount-1,onClick:()=>t.last(),children:(0,f.jsx)(c,{})}),(0,f.jsx)(h,{}),(0,f.jsx)(m,{title:`Print`,onClick:()=>{t.print()},children:(0,f.jsx)(l,{})}),(0,f.jsx)(p,{}),(0,f.jsx)(`a`,{href:`../`,children:(0,f.jsx)(m,{title:`Up`,children:(0,f.jsx)(s,{})})})]})},_=({slideCount:e,children:t})=>{let n=u();(0,d.useEffect)(()=>{n.initialize({currentSlide:0,slideCount:e})},[e]);let r=e=>{e.key===`ArrowRight`?n.next():e.key===`ArrowLeft`&&n.previous()};return(0,d.useEffect)(()=>(document.addEventListener(`keyup`,r),()=>document.removeEventListener(`keyup`,r)),[n]),(0,f.jsxs)(`div`,{className:`
        ${n.mode===`FullScreen`&&`opacity-100 z-50 h-screen w-screen absolute left-0 top-0`}
      `,children:[(0,f.jsx)(g,{className:`
          absolute 
          bottom-0 
          left-0 
          z-20
          opacity-10 
          hover:opacity-100 
          print:opacity-0
          transition-opacity 
          duration-300
          p-4
          `}),(0,f.jsx)(`div`,{className:`
        print:flex
        print:flex-col
        bc-deck
      `,children:t})]})};export{_ as Deck};