import{cv as v,j as e,cw as P,cx as j,bn as w,t as y,P as l,B as g,cz as b,u as m,aO as f,r as C,cD as k,cu as B,ex as L,cA as D,cB as T,F as h,n as F,bD as I,T as M,I as x,dH as E,ap as H,ey as p,bw as R,b7 as A,bV as N,cH as S}from"./strapi-7C0Ch6gA.js";import{getDocumentStatus as z}from"./EditViewPage-PrPHZN_9-GKVpbT2d.js";import"./Field-DuAYQka5-DTn6CzMM.js";import"./Relations-DUrYWw0N-DHWLLpqd.js";import"./useDragAndDrop-DdHgKsqq-fvRfg1ER.js";import"./relations-Ch70q86O-BIxjtwqE.js";import"./getEmptyImage-CjqolaH3.js";import"./ComponentIcon-u4bIXTFY-DcgK2P4J.js";import"./objects-D6yBsdmx-BTY5Cuni.js";import"./useDebounce-DmuSJIF3-DxJNsduD.js";const U=()=>{const o=u("PreviewContent",s=>s.url),{formatMessage:t}=m();return e.jsx(g,{src:o,title:t({id:"content-manager.preview.panel.title",defaultMessage:"Preview"}),width:"100%",height:"100%",borderWidth:0,tag:"iframe"})},q=()=>{const[{query:o}]=f(),t=H(),{formatMessage:s}=m(),i=p("BackButton",a=>a.canGoBack),c=p("BackButton",a=>a.goBack),n=p("BackButton",a=>a.history),d={pathname:"..",search:R.stringify(o,{encode:!1})},r=a=>{a.preventDefault(),i?c():t(d)};return e.jsx(x,{tag:A,to:n.at(-1)??d,onClick:r,label:s({id:"content-manager.preview.header.close",defaultMessage:"Close preview"}),children:e.jsx(N,{})})},G=()=>{const o=u("PreviewHeader",n=>n.document),t=u("PreviewHeader",n=>n.schema),s=u("PreviewHeader",n=>n.meta);if(!(t?.options?.draftAndPublish??!1))return null;const c=z(o,s);return e.jsx(S,{status:c,size:"XS"})},O=()=>{const o=u("PreviewHeader",r=>r.mainField),s=u("PreviewHeader",r=>r.document)[o],{formatMessage:i}=m(),{toggleNotification:c}=F(),{copy:n}=I(),d=()=>{n(window.location.href),c({message:i({id:"content-manager.preview.copy.success",defaultMessage:"Copied preview link"}),type:"success"})};return e.jsxs(h,{justifyContent:"space-between",background:"neutral0",padding:2,borderColor:"neutral150",tag:"header",children:[e.jsxs(h,{gap:3,children:[e.jsx(q,{}),e.jsx(M,{tag:"h1",fontWeight:600,fontSize:2,children:s}),e.jsx(G,{})]}),e.jsx(x,{type:"button",label:i({id:"preview.copy.label",defaultMessage:"Copy preview link"}),onClick:d,children:e.jsx(E,{})})]})},[V,u]=v("PreviewPage"),$=()=>{const{formatMessage:o}=m(),{slug:t,id:s,collectionType:i}=w(),[{query:c}]=f(),n=C.useMemo(()=>k(c),[c]);if(!i)throw new Error("Could not find collectionType in url params");if(!t)throw new Error("Could not find model in url params");if(i===B&&!s)throw new Error("Could not find documentId in url params");const d=L({params:{contentType:t},query:{documentId:s,locale:n.locale,status:n.status}}),r=D({model:t,collectionType:i,documentId:s,params:n}),a=T(t);return r.isLoading||d.isLoading||a.isLoading?e.jsx(l.Loading,{}):d.error||a.error||!r.document||!r.meta||!r.schema?e.jsx(l.Error,{}):d.data?.data?.url?e.jsxs(e.Fragment,{children:[e.jsx(l.Title,{children:o({id:"content-manager.preview.page-title",defaultMessage:"{contentType} preview"},{contentType:a.edit.settings.displayName})}),e.jsx(V,{url:d.data.data.url,mainField:a.edit.settings.mainField,document:r.document,meta:r.meta,schema:r.schema,children:e.jsxs(h,{direction:"column",height:"100%",alignItems:"stretch",children:[e.jsx(O,{}),e.jsx(U,{})]})})]}):e.jsx(l.NoData,{})},Q=()=>{const{slug:o}=w(),{permissions:t=[],isLoading:s,error:i}=y([{action:"plugin::content-manager.explorer.read",subject:o}]);return s?e.jsx(l.Loading,{}):i||!o?e.jsx(g,{height:"100vh",width:"100vw",position:"fixed",top:0,left:0,zIndex:2,background:"neutral0",children:e.jsx(l.Error,{})}):e.jsx(g,{height:"100vh",width:"100vw",position:"fixed",top:0,left:0,zIndex:2,background:"neutral0",children:e.jsx(l.Protect,{permissions:t,children:({permissions:c})=>e.jsx(b,{permissions:c,children:e.jsx($,{})})})})},ne=()=>e.jsx(P,{children:e.jsx(j,{children:e.jsx(Q,{})})});export{ne as ProtectedPreviewPage,u as usePreviewContext};
