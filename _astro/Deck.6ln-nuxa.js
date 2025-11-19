import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as a}from"./index.Cd_vQiNd.js";import{u as o}from"./use-deck.DftA1PMc.js";import{C as c,a as d,B as x,b as u,c as m,F as p,P as j,A as h}from"./FlowbiteIcons.B3dI54QA.js";import"./index.CMuRwzZL.js";const f=()=>{const r=o();return e.jsxs("div",{className:`       
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
          dark:text-gray-500`,children:[e.jsx("span",{children:r.currentSlide+1}),e.jsx("span",{children:"/"}),e.jsx("span",{children:r.slideCount})]})},s=({onClick:r=()=>({}),children:t,disabled:n=!1,title:i=""})=>e.jsx("button",{type:"button",title:i,disabled:n,onClick:r,className:`
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
      ${n?"bg-gray-200 dark:bg-gray-800":"dark:hover:bg-gray-500 dark:hover:text-white  hover:text-white   hover:bg-gray-700  "}
      `,children:t}),k=()=>{const r=o();return e.jsx(s,{title:r.mode=="FullScreen"?"Normal":"Full screen",onClick:()=>r.setMode(r.mode=="FullScreen"?"Normal":"FullScreen"),children:r.mode=="FullScreen"?e.jsx(c,{}):e.jsx(d,{})})},y=({className:r})=>{const t=o();return e.jsxs("div",{className:`
            ${r||""}
            flex 
            flex-row
            print:hidden
            `,children:[e.jsx(s,{title:"First",disabled:t.currentSlide===0,onClick:()=>t.first(),children:e.jsx(x,{})}),e.jsx(s,{title:"Previous",disabled:!t.hasPrevious,onClick:()=>t.previous(),children:e.jsx(u,{})}),e.jsx(s,{title:"Next",disabled:!t.hasNext,onClick:()=>t.next(),children:e.jsx(m,{})}),e.jsx(s,{title:"Last",disabled:t.currentSlide===t.slideCount-1,onClick:()=>t.last(),children:e.jsx(p,{})}),e.jsx(k,{}),e.jsx(s,{title:"Print",onClick:()=>{t.print()},children:e.jsx(j,{})}),e.jsx(f,{}),e.jsx("a",{href:"../",children:e.jsx(s,{title:"Up",children:e.jsx(h,{})})})]})},S=({slideCount:r,children:t})=>{const n=o();a.useEffect(()=>{n.initialize({currentSlide:0,slideCount:r})},[r]);const i=l=>{l.key==="ArrowRight"?n.next():l.key==="ArrowLeft"&&n.previous()};return a.useEffect(()=>(document.addEventListener("keyup",i),()=>document.removeEventListener("keyup",i)),[n]),e.jsxs("div",{className:`
        ${n.mode==="FullScreen"&&"opacity-100 z-50 h-screen w-screen absolute left-0 top-0"}
      `,children:[e.jsx(y,{className:`\r
          absolute \r
          bottom-0 \r
          left-0 \r
          z-20\r
          opacity-10 \r
          hover:opacity-100 \r
          print:opacity-0\r
          transition-opacity \r
          duration-300\r
          p-4\r
          `}),e.jsx("div",{className:`\r
        print:flex\r
        print:flex-col\r
        bc-deck\r
      `,children:t})]})};export{S as Deck};
