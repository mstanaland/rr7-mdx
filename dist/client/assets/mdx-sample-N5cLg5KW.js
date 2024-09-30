import{w as o}from"./with-props-DX0XJwQf.js";import{r as i,j as e}from"./index-BiH3ohOA.js";import{B as c}from"./Button-DULGgTeI.js";const a=()=>{const[s,n]=i.useState(0);return e.jsxs("div",{className:"not-prose text-black flex gap-4 items-center",children:[e.jsx(c,{onPress:()=>n(s+1),children:"Increment"}),e.jsxs("p",{children:["Count: ",s]})]})},t={title:"Markdown and MDX",description:"Demo of Markdown syntax and React components in MDX",published:"2024-09-29"};function r(s){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:t.title}),`
`,e.jsx(n.p,{children:"This is an MDX test page that showcases various MDX elements and code blocks."}),`
`,e.jsxs(n.p,{children:["This site uses ",e.jsx(n.a,{href:"https://vitejs.dev/",children:"Vite"})," and ",e.jsx(n.a,{href:"https://github.com/remarkjs/remark",children:"Remark"}),` plugins that let you write MDX routes in your Remix app.
These MDX routes are transformed to JS at build-time.`]}),`
`,e.jsx(n.p,{children:"Server-side utilities query the frontmatter of each MDX file so that pages can display lists of posts."}),`
`,e.jsx(n.h2,{children:"MDX"}),`
`,e.jsx(n.p,{children:"Let's try using a component!"}),`
`,`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{children:"Headings"}),`
`,e.jsx(n.h3,{children:"Level 3 Heading"}),`
`,e.jsx(n.h4,{children:"Level 4 Heading"}),`
`,e.jsx(n.h5,{children:"Level 5 Heading"}),`
`,e.jsx(n.h6,{children:"Level 6 Heading"}),`
`,e.jsx(n.h2,{children:"Paragraphs"}),`
`,e.jsx(n.p,{children:"This is a paragraph. Sanderson wrote consistently throughout his undergraduate and graduate studies; by 2003, he had written twelve novels, though no publisher had accepted any of them for publication. While in the middle of a graduate program at BYU, he was contacted by Tor Books editor Frank Smith, who wanted to acquire one of his books.."}),`
`,e.jsx(n.p,{children:"He published the second book of the Mistborn series The Well of Ascension in 2007. Later that year, Sanderson published the children's novel Alcatraz Versus the Evil Librarians, about a boy named Alcatraz with a talent for breaking things. Alcatraz confronts a group of evil librarians who are bent on taking over the world."}),`
`,e.jsx(n.h2,{children:"Lists"}),`
`,e.jsx(n.h3,{children:"Unordered List"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Item 1"}),`
`,e.jsx(n.li,{children:"Item 2"}),`
`,e.jsx(n.li,{children:"Item 3"}),`
`]}),`
`,e.jsx(n.h3,{children:"Ordered List"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Item 1"}),`
`,e.jsx(n.li,{children:"Item 2"}),`
`,e.jsx(n.li,{children:"Item 3"}),`
`]}),`
`,e.jsx(n.h2,{children:"Images"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/logo-light.png",alt:"Alt text",title:"Optional title"})}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://example.com",children:"Link text"})}),`
`,e.jsx(n.h2,{children:"Blockquote"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Like most intellectuals, he is exceedingly stupid."}),`
`]}),`
`,e.jsx(n.h2,{children:"Horizontal Rule"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Code Blocks"}),`
`,e.jsx(n.h3,{children:"Inline Code"}),`
`,e.jsxs(n.p,{children:["This is an example of ",e.jsx(n.code,{children:"inline code"}),"."]}),`
`,e.jsx(n.h3,{children:"Fenced Code Blocks"}),`
`,e.jsx("div",{className:"not-prose",children:e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{tabIndex:"0","data-language":"tsx","data-theme":"one-light",children:e.jsxs(n.code,{"data-language":"tsx","data-theme":"one-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#A626A4"},children:"import"}),e.jsx(n.span,{style:{color:"#383A42"},children:" { "}),e.jsx(n.span,{style:{color:"#E45649"},children:"useState"}),e.jsx(n.span,{style:{color:"#383A42"},children:" } "}),e.jsx(n.span,{style:{color:"#A626A4"},children:"from"}),e.jsx(n.span,{style:{color:"#50A14F"},children:' "react"'}),e.jsx(n.span,{style:{color:"#383A42"},children:";"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#A626A4"},children:"export"}),e.jsx(n.span,{style:{color:"#A626A4"},children:" const"}),e.jsx(n.span,{style:{color:"#4078F2"},children:" Counter"}),e.jsx(n.span,{style:{color:"#0184BC"},children:" ="}),e.jsx(n.span,{style:{color:"#383A42"},children:" () "}),e.jsx(n.span,{style:{color:"#A626A4"},children:"=>"}),e.jsx(n.span,{style:{color:"#383A42"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#A626A4"},children:"  const"}),e.jsx(n.span,{style:{color:"#383A42"},children:" ["}),e.jsx(n.span,{style:{color:"#986801"},children:"count"}),e.jsx(n.span,{style:{color:"#383A42"},children:", "}),e.jsx(n.span,{style:{color:"#986801"},children:"setCount"}),e.jsx(n.span,{style:{color:"#383A42"},children:"] "}),e.jsx(n.span,{style:{color:"#0184BC"},children:"="}),e.jsx(n.span,{style:{color:"#4078F2"},children:" useState"}),e.jsx(n.span,{style:{color:"#383A42"},children:"("}),e.jsx(n.span,{style:{color:"#986801"},children:"0"}),e.jsx(n.span,{style:{color:"#383A42"},children:");"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#A626A4"},children:"  return"}),e.jsx(n.span,{style:{color:"#383A42"},children:" ("})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#383A42"},children:"    <"}),e.jsx(n.span,{style:{color:"#E45649"},children:"div"}),e.jsx(n.span,{style:{color:"#986801"},children:" className"}),e.jsx(n.span,{style:{color:"#383A42"},children:"="}),e.jsx(n.span,{style:{color:"#50A14F"},children:'"text-black flex gap-4 items-center"'}),e.jsx(n.span,{style:{color:"#383A42"},children:">"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#383A42"},children:"      <"}),e.jsx(n.span,{style:{color:"#E45649"},children:"button"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#986801"},children:"        className"}),e.jsx(n.span,{style:{color:"#383A42"},children:"="}),e.jsx(n.span,{style:{color:"#50A14F"},children:'"py-1 px-2 text-white bg-cyan-700 rounded"'})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#986801"},children:"        onClick"}),e.jsx(n.span,{style:{color:"#383A42"},children:"={() "}),e.jsx(n.span,{style:{color:"#A626A4"},children:"=>"}),e.jsx(n.span,{style:{color:"#4078F2"},children:" setCount"}),e.jsx(n.span,{style:{color:"#383A42"},children:"(count + "}),e.jsx(n.span,{style:{color:"#986801"},children:"1"}),e.jsx(n.span,{style:{color:"#383A42"},children:")}"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#383A42"},children:"      >"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#383A42"},children:"        Increment"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#383A42"},children:"      </"}),e.jsx(n.span,{style:{color:"#E45649"},children:"button"}),e.jsx(n.span,{style:{color:"#383A42"},children:">"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#383A42"},children:"      <"}),e.jsx(n.span,{style:{color:"#E45649"},children:"p"}),e.jsx(n.span,{style:{color:"#383A42"},children:">Count: {count}</"}),e.jsx(n.span,{style:{color:"#E45649"},children:"p"}),e.jsx(n.span,{style:{color:"#383A42"},children:">"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#383A42"},children:"    </"}),e.jsx(n.span,{style:{color:"#E45649"},children:"div"}),e.jsx(n.span,{style:{color:"#383A42"},children:">"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#383A42"},children:"  );"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#383A42"},children:"};"})})]})})})})]})}const d=o(function(n={}){const{wrapper:l}=n.components||{};return l?e.jsx(l,{...n,children:e.jsx(r,{...n})}):r(n)}),j=Object.freeze(Object.defineProperty({__proto__:null,default:d,frontmatter:t},Symbol.toStringTag,{value:"Module"}));export{j as _,d as m};
