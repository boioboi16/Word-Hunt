(this["webpackJsonpword-hunt"]=this["webpackJsonpword-hunt"]||[]).push([[0],{69:function(e,t,a){},71:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),s=a.n(r),l=(a(69),a(40)),i=a.n(l),o=a(52),u=a(13),d=(a(71),a(55)),b=a.n(d),h=a(4),j=a(135),p=a(132),f=a(58),v=a(129),g=a(133),O=a(136),x=(a(90),[{value:"English",label:"en"},{value:"Hindi",label:"hi"},{value:"Spanish",label:"es"},{value:"French",label:"fr"},{value:"Japanese",label:"ja"},{value:"Russian",label:"ru"},{value:"German",label:"de"},{value:"Italian",label:"it"},{value:"Korean",label:"ko"},{value:"Brazilian Portuguese",label:"pt-BR"},{value:"Arabic",label:"ar"},{value:"Turkish",label:"tr"}]),m=(a(91),a(6)),y=function(e){var t=e.word,a=e.meanings,n=e.category,c=e.lightMode;return Object(m.jsxs)("div",{className:"meanings",children:[a[0]&&t&&"en"==n&&Object(m.jsx)("audio",{src:a[0].phonetics[0]&&a[0].phonetics[0].audio,style:{backgroundColor:"#fff",borderRadius:10},controls:!0,children:"Your browser doesnt support audio element"}),""===t?Object(m.jsx)("span",{className:"subTitle",children:"Start by typing in a word"}):a.map((function(e){return e.meanings.map((function(e){return e.definitions.map((function(e){return Object(m.jsxs)("div",{className:"singleMean",style:{backgroundColor:c?"#3b5360":"white",color:c?"white":"black"},children:[Object(m.jsx)("b",{children:e.definition}),Object(m.jsx)("hr",{style:{backgroundColor:c?"white":"black",width:"100%"}}),e.example&&Object(m.jsxs)("span",{children:[Object(m.jsx)("b",{children:"Example:"}),e.example]}),e.synonyms&&Object(m.jsxs)("span",{children:[Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"Synonyms:"}),e.synonyms.map((function(e){return"".concat(e,",")}))]})]})}))}))}))]})},k=function(e){var t=e.category,a=e.setcategory,n=e.word,c=e.setword,r=e.lightMode,s=Object(f.a)({palette:{primary:{main:r?"#000":"#ffffff"},type:r?"light":"dark"}});return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("span",{className:"title",children:n||"Word Hunt"}),Object(m.jsx)("div",{className:"inputs",children:Object(m.jsxs)(v.a,{theme:s,children:[Object(m.jsx)(g.a,{className:"search",id:"filled-basic",value:n,onChange:function(e){c(e.target.value)},label:"Search a Word"}),Object(m.jsx)(g.a,{className:"select",id:"standard-select-currency",select:!0,label:"Language",value:t,onChange:function(e){return t=e.target.value,a(t),void c("");var t},children:x.map((function(e){return Object(m.jsx)(O.a,{value:e.label,children:e.value},e.label)}))})]})})]})},w=a(36);var C=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(u.a)(r,2),l=s[0],d=s[1],f=Object(n.useState)("en"),v=Object(u.a)(f,2),g=v[0],O=v[1],x=Object(n.useState)(!1),C=Object(u.a)(x,2),N=C[0],S=C[1],M=Object(h.a)({switchBase:{color:w.a[300],"&$checked":{color:w.a[500]},"&$checked + $track":{backgroundColor:w.a[500]}},checked:{},track:{}})(j.a),B=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://api.dictionaryapi.dev/api/v2/entries/".concat(g,"/").concat(a));case 3:t=e.sent,d(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){B()}),[a,g]),Object(m.jsx)("div",{className:"App",style:{height:"100vh",backgroundColor:N?"#fff":"#282c34",color:N?"black":"white",transition:"all 0.5s linear"},children:Object(m.jsxs)(p.a,{maxWidth:"md",style:{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"space-evenly"},children:[Object(m.jsxs)("div",{style:{position:"absolute",top:0,right:15,paddingTop:10},children:[Object(m.jsxs)("span",{children:[N?"Dark":"Light"," Mode"]}),Object(m.jsx)(M,{checked:N,onChange:function(){return S(!N)}})]}),Object(m.jsx)(k,{category:g,setcategory:O,word:a,setword:c,lightMode:N}),l&&Object(m.jsx)(y,{word:a,meanings:l,category:g,lightMode:N})]})})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.90cb0e08.chunk.js.map