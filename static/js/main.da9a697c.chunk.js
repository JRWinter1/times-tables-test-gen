(this["webpackJsonptimes-tables-test-gen"]=this["webpackJsonptimes-tables-test-gen"]||[]).push([[0],{58:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var r=t(9),a=t.n(r),s=(t(58),t(33)),i=t(44),c=t(0),o=t.n(c),l=t(95),d=t(101),u=t(39),j=t(98),b=t(106),m=t(104),p=t(100),f=t(107),h=t(105),O=t(102),x=t(103),g=Array.from(Array(15).keys()).map((function(e){return e+1})),v=[1,2,5,10,13,14,15],N=t(4),y=Object(l.a)((function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(1),width:250},columnsAndRowsFormControl:{margin:e.spacing(1),width:150},noPadding:{paddingTop:0,paddingBottom:0},buttonContainer:{display:"flex",justifyContent:"space-around",flexGrow:1}}})),w=Array.from(Array(8).keys()).map((function(e){return e+1})),C=Array.from(Array(12).keys()).map((function(e){return e+1})),F={PaperProps:{style:{maxHeight:48*g.length+8,width:250}}},A=function(e){var n=y();return Object(N.jsxs)("div",{className:n.root,children:[Object(N.jsxs)(j.a,{className:n.formControl,children:[Object(N.jsx)(b.a,{children:"Numbers To Include"}),Object(N.jsx)(m.a,{multiple:!0,value:e.selectedNumbers,onChange:function(n){e.onSelectedNumbersChanged(n.target.value)},input:Object(N.jsx)(p.a,{}),renderValue:function(e){return e.sort((function(e,n){return e<n?-1:1})).join(", ")},MenuProps:F,children:g.map((function(t){return Object(N.jsxs)(f.a,{className:n.noPadding,value:t,children:[Object(N.jsx)(h.a,{size:"small",checked:e.selectedNumbers.indexOf(t)>-1}),Object(N.jsx)(O.a,{primary:t})]},t)}))})]}),Object(N.jsxs)(j.a,{className:n.columnsAndRowsFormControl,children:[Object(N.jsx)(b.a,{children:"No. of Columns"}),Object(N.jsx)(m.a,{value:e.columns,onChange:function(n){e.onNumberOfColumnsChanged(n.target.value)},MenuProps:F,input:Object(N.jsx)(p.a,{}),renderValue:function(e){return e},children:w.map((function(e){return Object(N.jsx)(f.a,{className:n.noPadding,value:e,children:Object(N.jsx)(O.a,{primary:e})},e)}))})]}),Object(N.jsxs)(j.a,{className:n.columnsAndRowsFormControl,children:[Object(N.jsx)(b.a,{children:"No. of Rows"}),Object(N.jsx)(m.a,{value:e.rows,onChange:function(n){e.onNumberOfRowsChanged(n.target.value)},MenuProps:F,input:Object(N.jsx)(p.a,{}),renderValue:function(e){return e},className:n.noPadding,children:C.map((function(e){return Object(N.jsx)(f.a,{className:n.noPadding,value:e,children:Object(N.jsx)(O.a,{primary:e})},e)}))})]}),Object(N.jsxs)("div",{className:n.buttonContainer,children:[Object(N.jsx)(x.a,{variant:"contained",onClick:function(){window.print()},children:"Print"}),Object(N.jsx)(x.a,{variant:"contained",onClick:e.onGenerate,children:"Generate"})]})]})},M=function(e){return e[Math.floor(Math.random()*e.length)]},P=function(e,n){var t=new Array;return Array.from(Array(n).keys()).map((function(){var n=M(e.filter(k(e))),r=e.filter(R(n)),a=r.filter(S(n,t));0===a.length&&(t=t.filter((function(e){return e.x!==n||e.y!==n})));var s=M(0===a.length?r:a),i={x:n,y:s};return t.push(i),i}))},k=function(e){return function(n){if(11!==n)return!0;var t=e.filter((function(e){return e>10})).length;return Math.random()<t/e.length}},R=function(e){return function(n){return e<11?11!==n:11!==e||n>10}},S=function(e,n){return function(t){return!(n.findIndex((function(n){return e===n.x&&t===n.y||e===n.y&&t===n.x}))>-1)}},T=t(3),G=Object(l.a)((function(e){return{root:{borderStyle:"solid",borderWidth:"1px",width:"2em",height:"1.5em"}}})),B=function(e){var n=G();return Object(N.jsx)("div",{className:Object(T.a)(n.root,e.className)})},I=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"center",padding:e.spacing(2),height:26},indent:{marginLeft:"0.25em"}}})),V=function e(n){var t=I(n),r=n.showAnswers?1e4:Math.floor(3*Math.random());e.defaultProps={isFlipped:!1};var a=function(){return 0===r?Object(N.jsx)(B,{className:Object(T.a)(!n.isFlipped&&t.indent)}):Object(N.jsx)(u.a,{className:Object(T.a)(!n.isFlipped&&t.indent),children:n.variables.y*n.variables.x})},s=function(){return Object(N.jsxs)(N.Fragment,{children:[1===r?Object(N.jsx)(B,{className:Object(T.a)(n.isFlipped&&t.indent)}):Object(N.jsx)(u.a,{className:Object(T.a)(n.isFlipped&&t.indent),children:n.variables.x}),Object(N.jsx)(u.a,{className:t.indent,children:" x "}),2===r?Object(N.jsx)(B,{className:t.indent}):Object(N.jsx)(u.a,{className:t.indent,children:n.variables.y})]})};return Object(N.jsxs)("div",{className:t.root,children:[n.isFlipped?a():s(),Object(N.jsx)(u.a,{className:t.indent,children:"="}),n.isFlipped?s():a()]})},J=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"center",padding:e.spacing(2),height:26},indent:{marginLeft:"0.25em"}}})),L=function(e){var n=J(e),t=e.showAnswers?1e4:Math.floor(3*Math.random()),r=function(){return 0===t?Object(N.jsx)(B,{className:Object(T.a)(!e.isFlipped&&n.indent)}):Object(N.jsx)(u.a,{className:Object(T.a)(!e.isFlipped&&n.indent),children:e.variables.y})},a=function(){return Object(N.jsxs)(N.Fragment,{children:[1===t?Object(N.jsx)(B,{className:Object(T.a)(e.isFlipped&&n.indent)}):Object(N.jsx)(u.a,{className:Object(T.a)(e.isFlipped&&n.indent),children:e.variables.y*e.variables.x}),Object(N.jsx)(u.a,{className:n.indent,children:" \xf7 "}),2===t?Object(N.jsx)(B,{className:n.indent}):Object(N.jsx)(u.a,{className:n.indent,children:e.variables.x})]})};return Object(N.jsxs)("div",{className:n.root,children:[e.isFlipped?r():a(),Object(N.jsx)(u.a,{className:n.indent,children:"="}),e.isFlipped?a():r()]})},W=Object(l.a)((function(e){return{root:{display:"grid",gridTemplateColumns:function(e){return"repeat(".concat(e.numberOfColumns,", 1fr)")},gridTemplateRows:function(e){return"repeat(".concat(e.numberOfRows,", 1fr)")}},item:{borderStyle:"dotted",borderWidth:"2px",margin:"1px",borderColor:e.palette.grey[300]}}})),z=function(e){var n=W(e);return Object(N.jsx)("div",{className:n.root,children:e.variables.map((function(t,r){return Object(N.jsx)("div",{className:n.item,children:Math.random()>.5?Object(N.jsx)(V,{showAnswers:e.showAnswers,isFlipped:Math.random()>.5,variables:t},r):Object(N.jsx)(L,{showAnswers:e.showAnswers,isFlipped:Math.random()>.5,variables:t},r)},r)}))})},E=Object(l.a)((function(e){return Object(i.a)({root:{display:"block",justifyContent:"center"},container:{paddingTop:e.spacing(2),width:"75%"},paper:{padding:e.spacing(1),marginBottom:e.spacing(2),backgroundColor:e.palette.grey[200]},title:{width:"100%"}},"@media print",{paper:{display:"none"}})})),H=function(){var e=o.a.useState(5),n=Object(s.a)(e,2),t=n[0],r=n[1],a=o.a.useState(10),i=Object(s.a)(a,2),c=i[0],l=i[1],j=o.a.useState(g.filter((function(e){return-1===v.indexOf(e)}))),b=Object(s.a)(j,2),m=b[0],p=b[1],f=o.a.useState([]),h=Object(s.a)(f,2),O=h[0],x=h[1],y=E();return Object(N.jsx)("div",{className:y.root,children:Object(N.jsxs)("div",{className:y.container,children:[Object(N.jsxs)(d.a,{className:y.paper,children:[Object(N.jsx)(u.a,{children:"Times Tables Test Generator"}),Object(N.jsx)(A,{onGenerate:function(){var e=P(m,t*c);x(e)},selectedNumbers:m,columns:t,rows:c,onSelectedNumbersChanged:function(e){p(e);var n=P(e,t*c);x(n)},onNumberOfColumnsChanged:function(e){r(e);var n=P(m,e*c);x(n)},onNumberOfRowsChanged:function(e){l(e);var n=P(m,t*e);x(n)}})]}),Object(N.jsx)(z,{showAnswers:!1,variables:O,numberOfColumns:t,numberOfRows:c})]})})};a.a.render(Object(N.jsx)(H,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.da9a697c.chunk.js.map