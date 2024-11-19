import{d as K,bo as N,ap as me,u as A,n as ge,q as fe,cE as Y,cB as se,r as S,a6 as he,aO as $,cD as xe,bw as D,eG as je,cI as ye,cl as be,eC as w,j as e,P as F,bt as Ce,b as G,eH as Se,bf as Le,F as k,aQ as y,cH as Te,T as L,cF as J,eI as Me,aR as q,eJ as Ie,eK as Re,S as Ae,b7 as Ee,be as Fe,bn as ke,t as ne,cz as we,c3 as Pe,eL as Oe,aT as ae,cC as ve,s as ie,eM as re,eN as Be,aP as V,aV as De,aW as $e,aX as He,b6 as X,eO as z,am as Q,I as Ue,d4 as Ve,L as We,dE as Ne,a3 as _e,eP as qe,bK as ze,aa as Qe,eQ as Ge,eR as Ke,cy as Ye,aU as Je,eS as Xe,eT as I,eU as Ze,eV as oe,Y as et,aS as tt}from"./strapi-7C0Ch6gA.js";import{u as le,a as st,p as Z}from"./useDebounce-DmuSJIF3-DxJNsduD.js";import{g as ce,u as nt}from"./relations-Ch70q86O-BIxjtwqE.js";import{u as at}from"./hooks-E5u1mcgM-D7ooTlLU.js";const ee=["json","component","media","richtext","dynamiczone","password","blocks"],it=["createdAt","updatedAt"],rt=[...re,"strapi_assignee"],ot=({disabled:t,schema:n})=>{const{attributes:s,uid:a,options:o}=n,{formatMessage:l,locale:x}=A(),{trackUsage:f}=N(),r=Pe("FiltersImpl",c=>c.permissions),[{query:h}]=$(),{schemas:g}=Oe(),T=S.useMemo(()=>r.filter(c=>c.action==="admin::users.read"&&c.subject===null).length>0,[r]),M=(h?.filters?.$and??[]).reduce((c,E)=>{const[b,m]=Object.entries(E)[0];if(typeof m.id!="object")return c;const R=m.id.$eq||m.id.$ne;return R&&rt.includes(b)&&!c.includes(R)&&c.push(R),c},[]),{data:j,isLoading:u}=ae({filters:{id:{$in:M}}},{skip:M.length===0||!T}),{users:d=[]}=j??{},{metadata:P}=ve(a,{selectFromResult:({data:c})=>({metadata:c?.contentType.metadatas??{}})}),H=ie(x,{sensitivity:"base"}),O=S.useMemo(()=>{const[{properties:{fields:c=[]}={fields:[]}}]=r.filter(b=>b.action==="plugin::content-manager.explorer.read"&&b.subject===a);return["id",...c.filter(b=>{const m=s[b]??{};return m.type&&!ee.includes(m.type)}),...it,...T?re:[]].map(b=>{const m=s[b];if(ee.includes(m.type))return null;const{mainField:R="",label:_}=P[b].list;let i={name:b,label:_??"",mainField:Be(m,R,{schemas:g,components:{}}),type:m.type};return m.type==="relation"&&"target"in m&&m.target==="admin::user"&&(i={...i,input:lt,options:d.map(C=>({label:J(C),value:C.id.toString()})),operators:[{label:l({id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"}),value:"$eq"},{label:l({id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"}),value:"$ne"}],mainField:{name:"id",type:"integer"}}),m.type==="enumeration"&&(i={...i,options:m.enum.map(C=>({label:C,value:C}))}),i}).filter(Boolean).toSorted((b,m)=>H.compare(b.label,m.label))},[r,T,a,s,P,g,d,l,H]),U=c=>{c&&f("willFilterEntries")},v=c=>{const E=s[c.name];E&&f("didFilterEntries",{useRelation:E.type==="relation"})};return e.jsxs(V.Root,{disabled:t,options:O,onOpenChange:U,onChange:v,children:[e.jsx(V.Trigger,{}),e.jsx(V.Popover,{}),e.jsx(V.List,{})]})},lt=({name:t})=>{const[n,s]=S.useState(10),[a,o]=S.useState(""),{formatMessage:l}=A(),x=st(a,300),{data:f,isLoading:r}=ae({pageSize:n,_q:x}),h=De(t),g=d=>{d||s(10)},{users:T=[],pagination:M}=f??{},{pageCount:j=1,page:u=1}=M??{};return e.jsx($e,{value:h.value,"aria-label":l({id:"content-manager.components.Filters.usersSelect.label",defaultMessage:"Search and select a user to filter"}),onOpenChange:g,onChange:d=>h.onChange(t,d),loading:r,onLoadMore:()=>s(n+10),hasMoreItems:u<j,onInputChange:d=>{o(d.currentTarget.value)},children:T.map(d=>e.jsx(He,{value:d.id.toString(),children:J(d)},d.id))})},W=({type:t,value:n})=>{const{formatDate:s,formatTime:a,formatNumber:o}=A();let l=n;if(t==="date"&&(l=s(Je(n),{dateStyle:"full"})),t==="datetime"&&(l=s(n,{dateStyle:"full",timeStyle:"short"})),t==="time"){const[x,f,r]=n.split(":"),h=new Date;h.setHours(x),h.setMinutes(f),h.setSeconds(r),l=a(h,{timeStyle:"short"})}return["float","decimal"].includes(t)&&(l=o(n,{maximumFractionDigits:20})),["integer","biginteger"].includes(t)&&(l=o(n,{maximumFractionDigits:0})),Xe(l)},ct=({content:t,mainField:n})=>n?e.jsx(X,{label:t[n.name],children:e.jsx(L,{maxWidth:"25rem",textColor:"neutral800",ellipsis:!0,children:e.jsx(W,{type:n.type,value:t[n.name]})})}):null,ut=({content:t,mainField:n})=>{const{formatMessage:s}=A();return n?e.jsxs(I.Root,{children:[e.jsxs(I.Trigger,{onClick:a=>a.stopPropagation(),children:[e.jsx(Ze,{children:t.length}),s({id:"content-manager.containers.list.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:t.length})]}),e.jsx(I.Content,{children:t.map(a=>e.jsx(I.Item,{disabled:!0,children:e.jsx(L,{maxWidth:"50rem",ellipsis:!0,children:e.jsx(W,{type:n.type,value:a[n.name]})})},a.id))})]}):null},dt=t=>t&&t[0]==="."?t.substring(1):t,ue=({url:t,mime:n,alternativeText:s,name:a,ext:o,formats:l})=>{const x=Z(t);if(n.includes("image")){const h=l?.thumbnail?.url,g=Z(h)||x;return e.jsx(oe.Item,{src:g,alt:s||a,fallback:s||a,preview:!0})}const f=dt(o),r=a.length>100?`${a.substring(0,100)}...`:a;return e.jsx(X,{description:r,children:e.jsx(de,{children:f})})},de=({children:t})=>e.jsx(k,{tag:"span",position:"relative",borderRadius:"50%",width:"26px",height:"26px",borderColor:"neutral200",background:"neutral150",paddingLeft:"1px",justifyContent:"center",alignItems:"center",children:e.jsx(pt,{variant:"sigma",textColor:"neutral600",children:t})}),pt=K(L)`
  font-size: 0.9rem;
  line-height: 0.9rem;
`,mt=({content:t})=>e.jsx(oe.Group,{children:t.map((n,s)=>{const a=`${n.id}${s}`;if(s===3){const o=`+${t.length-3}`;return e.jsx(de,{children:o},a)}return s>3?null:e.jsx(ue,{...n},a)})}),gt=({mainField:t,content:n})=>e.jsx(L,{maxWidth:"50rem",textColor:"neutral800",ellipsis:!0,children:ce(n,t)}),ft=({mainField:t,content:n,rowId:s,name:a})=>{const{model:o}=Y(),{formatMessage:l}=A(),{notifyStatus:x}=et(),[f,r]=S.useState(!1),[h]=a.split("."),{data:g,isLoading:T}=nt({model:o,id:s,targetField:h},{skip:!f,refetchOnMountOrArgChange:!0}),M=Array.isArray(n)?n.length:n.count;return S.useEffect(()=>{g&&x(l({id:w("DynamicTable.relation-loaded"),defaultMessage:"Relations have been loaded"}))},[g,l,x]),e.jsxs(I.Root,{onOpenChange:j=>r(j),children:[e.jsx(I.Trigger,{onClick:j=>j.stopPropagation(),children:e.jsx(L,{style:{cursor:"pointer"},textColor:"neutral800",fontWeight:"regular",children:M>0?l({id:"content-manager.containers.list.items",defaultMessage:"{number} {number, plural, =0 {items} one {item} other {items}}"},{number:M}):"-"})}),e.jsxs(I.Content,{children:[T&&e.jsx(I.Item,{disabled:!0,children:e.jsx(tt,{small:!0,children:l({id:w("ListViewTable.relation-loading"),defaultMessage:"Relations are loading"})})}),g?.results&&e.jsxs(e.Fragment,{children:[g.results.map(j=>e.jsx(I.Item,{disabled:!0,children:e.jsx(L,{maxWidth:"50rem",ellipsis:!0,children:ce(j,t)})},j.documentId)),g?.pagination&&g?.pagination.total>10&&e.jsx(I.Item,{"aria-disabled":!0,"aria-label":l({id:w("ListViewTable.relation-more"),defaultMessage:"This relation contains more entities than displayed"}),children:e.jsx(L,{children:"…"})})]})]})]})},ht=({content:t,mainField:n,attribute:s,rowId:a,name:o})=>{if(!xt(t,n,s))return e.jsx(L,{textColor:"neutral800",paddingLeft:s.type==="relation"?"1.6rem":0,paddingRight:s.type==="relation"?"1.6rem":0,children:"-"});switch(s.type){case"media":return s.multiple?e.jsx(mt,{content:t}):e.jsx(ue,{...t});case"relation":return pe(s.relation)?e.jsx(gt,{mainField:n,content:t}):e.jsx(ft,{rowId:a,mainField:n,content:t,name:o});case"component":return s.repeatable?e.jsx(ut,{mainField:n,content:t}):e.jsx(ct,{mainField:n,content:t});case"string":return e.jsx(X,{description:t,children:e.jsx(L,{maxWidth:"30rem",ellipsis:!0,textColor:"neutral800",children:e.jsx(W,{type:s.type,value:t})})});default:return e.jsx(L,{maxWidth:"30rem",ellipsis:!0,textColor:"neutral800",children:e.jsx(W,{type:s.type,value:t})})}},xt=(t,n,s)=>{if(s.type==="component"){if(s.repeatable||!n)return t?.length>0;const a=t?.[n.name];return n.name==="id"&&![void 0,null].includes(a)?!0:!z(a)}return s.type==="relation"?pe(s.relation)?!z(t):Array.isArray(t)?t.length>0:t?.count>0:["integer","decimal","float","number"].includes(s.type)?typeof t=="number":s.type==="boolean"?t!==null:!z(t)},pe=t=>["oneToOne","manyToOne","oneToOneMorph"].includes(t),jt=t=>{const n=at(l=>l.admin_app.permissions.contentManager?.collectionTypesConfigurations??[]),[{query:s}]=$(),{formatMessage:a}=A(),{allowedActions:{canConfigureView:o}}=ne(n);return e.jsxs(Q.Root,{children:[e.jsx(Q.Trigger,{children:e.jsx(Ue,{label:a({id:"components.ViewSettings.tooltip",defaultMessage:"View Settings"}),children:e.jsx(Ve,{})})}),e.jsx(Q.Content,{side:"bottom",align:"end",sideOffset:4,children:e.jsxs(k,{alignItems:"stretch",direction:"column",padding:3,gap:3,children:[o?e.jsx(We,{size:"S",startIcon:e.jsx(Ne,{}),variant:"secondary",tag:_e,to:{pathname:"configurations/list",search:s.plugins?D.stringify({plugins:s.plugins},{encode:!1}):""},children:a({id:"app.links.configure-view",defaultMessage:"Configure the view"})}):null,e.jsx(yt,{...t})]})})]})},yt=({headers:t=[],resetHeaders:n,setHeaders:s})=>{const{trackUsage:a}=N(),{formatMessage:o,locale:l}=A(),{schema:x,model:f}=Y(),{list:r}=se(f),h=ie(l,{sensitivity:"base"}),g=x?.attributes??{},T=Object.keys(g).filter(u=>qe(g[u])).map(u=>({name:u,label:r.metadatas[u]?.label??""})).sort((u,d)=>h.compare(u.label,d.label)),M=u=>{a("didChangeDisplayedFields");const d=t.includes(u)?t.filter(P=>P!==u):[...t,u];s(d)},j=()=>{n()};return e.jsxs(k,{tag:"fieldset",direction:"column",alignItems:"stretch",gap:3,borderWidth:0,children:[e.jsxs(k,{justifyContent:"space-between",children:[e.jsx(L,{tag:"legend",variant:"pi",fontWeight:"bold",children:o({id:"containers.list.displayedFields",defaultMessage:"Displayed fields"})}),e.jsx(ze,{onClick:j,children:o({id:"app.components.Button.reset",defaultMessage:"Reset"})})]}),e.jsx(k,{direction:"column",alignItems:"stretch",children:T.map(u=>{const d=t.includes(u.name);return e.jsx(k,{wrap:"wrap",gap:2,background:d?"primary100":"transparent",hasRadius:!0,padding:2,children:e.jsx(Qe,{onCheckedChange:()=>M(u.name),checked:d,name:u.name,children:e.jsx(L,{fontSize:1,children:u.label})})},u.name)})})]})},{INJECT_COLUMN_IN_TABLE:bt}=Ge,Ct=K(G.Header)`
  overflow-wrap: anywhere;
`,St=()=>{const{trackUsage:t}=N(),n=me(),{formatMessage:s}=A(),{toggleNotification:a}=ge(),{_unstableFormatAPIError:o}=fe(w),{collectionType:l,model:x,schema:f}=Y(),{list:r}=se(x),[h,g]=S.useState([]),T=le(r.layout);S.useEffect(()=>{he(T,r.layout)||g(r.layout)},[r.layout,T]);const M=i=>{g(Ke(i,f.attributes,r.metadatas))},[{query:j}]=$({page:"1",pageSize:r.settings.pageSize.toString(),sort:r.settings.defaultSortBy?`${r.settings.defaultSortBy}:${r.settings.defaultSortOrder}`:""}),u=S.useMemo(()=>xe(j),[j]),d=S.useMemo(()=>D.stringify(u,{encode:!0,encodeValuesOnly:!0}),[u]),P=S.useMemo(()=>{const i=d.split("&").map(C=>{const[p,B]=C.split("=");return{[p]:B}});return Object.assign({},...i)},[d]),{data:H,error:O,isFetching:U}=je({model:x,params:P});S.useEffect(()=>{O&&a({type:"danger",message:o(O)})},[O,o,a]);const{results:v=[],pagination:c}=H??{};S.useEffect(()=>{c&&c.pageCount>0&&c.page>c.pageCount&&n({search:D.stringify({...j,page:c.pageCount})},{replace:!0})},[c,s,j,n]);const{canCreate:E}=ye("ListViewPage",({canCreate:i})=>({canCreate:i})),b=be("ListViewPage",({runHookWaterfall:i})=>i),m=S.useMemo(()=>{const C=b(bt,{displayedHeaders:h,layout:r}).displayedHeaders.map(p=>{const B=typeof p.label=="string"?{id:`content-manager.content-types.${x}.${p.name}`,defaultMessage:p.label}:p.label;return{...p,label:s(B),name:`${p.name}${p.mainField?.name?`.${p.mainField.name}`:""}`}});return f?.options?.draftAndPublish&&C.push({attribute:{type:"custom"},name:"status",label:s({id:w("containers.list.table-headers.status"),defaultMessage:"status"}),searchable:!1,sortable:!1}),C},[h,s,r,b,f?.options?.draftAndPublish,x]);if(U)return e.jsx(F.Loading,{});if(O)return e.jsx(F.Error,{});const R=f?.info.displayName??"Untitled",_=i=>()=>{t("willEditEntryFromList"),n({pathname:i.toString(),search:D.stringify({plugins:j.plugins})})};return e.jsxs(F.Main,{children:[e.jsx(F.Title,{children:`${R}`}),e.jsx(Ct,{primaryAction:E?e.jsx(te,{}):null,subtitle:s({id:w("pages.ListView.header-subtitle"),defaultMessage:"{number, plural, =0 {# entries} one {# entry} other {# entries}} found"},{number:c?.total}),title:R,navigationAction:e.jsx(Ce,{})}),e.jsx(G.Action,{endActions:e.jsxs(e.Fragment,{children:[e.jsx(Se,{area:"listView.actions"}),e.jsx(jt,{setHeaders:M,resetHeaders:()=>g(r.layout),headers:h.map(i=>i.name)})]}),startActions:e.jsxs(e.Fragment,{children:[r.settings.searchable&&e.jsx(Le,{disabled:v.length===0,label:s({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:R}),placeholder:s({id:"global.search",defaultMessage:"Search"}),trackedEvent:"didSearch"}),r.settings.filterable&&f?e.jsx(ot,{disabled:v.length===0,schema:f}):null]})}),e.jsx(G.Content,{children:e.jsxs(k,{gap:4,direction:"column",alignItems:"stretch",children:[e.jsxs(y.Root,{rows:v,headers:m,isLoading:U,children:[e.jsx(Tt,{}),e.jsxs(y.Content,{children:[e.jsxs(y.Head,{children:[e.jsx(y.HeaderCheckboxCell,{}),m.map(i=>e.jsx(y.HeaderCell,{...i},i.name))]}),e.jsx(y.Loading,{}),e.jsx(y.Empty,{action:E?e.jsx(te,{variant:"secondary"}):null}),e.jsx(y.Body,{children:v.map(i=>e.jsxs(y.Row,{cursor:"pointer",onClick:_(i.documentId),children:[e.jsx(y.CheckboxCell,{id:i.id}),m.map(({cellFormatter:C,...p})=>{if(p.name==="status"){const{status:B}=i;return e.jsx(y.Cell,{children:e.jsx(Te,{status:B,maxWidth:"min-content"})},p.name)}return["createdBy","updatedBy"].includes(p.name.split(".")[0])?e.jsx(y.Cell,{children:e.jsx(L,{textColor:"neutral800",children:i[p.name.split(".")[0]]?J(i[p.name.split(".")[0]]):"-"})},p.name):typeof C=="function"?e.jsx(y.Cell,{children:C(i,p,{collectionType:l,model:x})},p.name):e.jsx(y.Cell,{children:e.jsx(ht,{content:i[p.name.split(".")[0]],rowId:i.documentId,...p})},p.name)}),e.jsx(Lt,{onClick:C=>C.stopPropagation(),children:e.jsx(Me,{document:i})})]},i.id))})]})]}),e.jsxs(q.Root,{...c,onPageSizeChange:()=>t("willChangeNumberOfEntriesPerPage"),children:[e.jsx(q.PageSize,{}),e.jsx(q.Links,{})]})]})})]})},Lt=K(y.Cell)`
  display: flex;
  justify-content: flex-end;
`,Tt=()=>{const t=Ie("TableActionsBar",o=>o.selectRow),[{query:n}]=$(),s=n?.plugins?.i18n?.locale,a=le(s);return S.useEffect(()=>{a!==s&&t([])},[t,a,s]),e.jsx(y.ActionBar,{children:e.jsx(Re,{})})},te=({variant:t})=>{const{formatMessage:n}=A(),{trackUsage:s}=N(),[{query:a}]=$();return e.jsx(Ae,{variant:t,tag:Ee,onClick:()=>{s("willCreateEntry",{status:"draft"})},startIcon:e.jsx(Fe,{}),style:{textDecoration:"none"},to:{pathname:"create",search:D.stringify({plugins:a.plugins})},minWidth:"max-content",marginLeft:2,children:n({id:w("HeaderLayout.button.label-add-entry"),defaultMessage:"Create new entry"})})},Et=()=>{const{slug:t=""}=ke(),{permissions:n=[],isLoading:s,error:a}=ne(Ye.map(o=>({action:o,subject:t})));return s?e.jsx(F.Loading,{}):a||!t?e.jsx(F.Error,{}):e.jsx(F.Protect,{permissions:n,children:({permissions:o})=>e.jsx(we,{permissions:o,children:e.jsx(St,{})})})};export{St as ListViewPage,Et as ProtectedListViewPage};