import{j as e}from"./strapi-7C0Ch6gA.js";import{a as s}from"./EditPage-DTcwVvA3-BuB_OswI.js";import"./selectors-ZSFBgSp8-D_JswoX0.js";import"./useWebhooks-C2yEtiSU-DdZ5G1FA.js";const t={"review-workflows":{"review-workflows":["review-workflows.updateEntryStage"]},releases:{releases:["releases.publish"]}},a=r=>{switch(r){case"review-workflows":return()=>[{id:"review-workflows.updateEntryStage",defaultMessage:"Stage Change"}];case"releases":return()=>[{id:"releases.publish",defaultMessage:"Publish"}]}},n=()=>e.jsxs(s.Root,{children:[e.jsx(s.Headers,{}),e.jsx(s.Body,{}),Object.keys(t).map(r=>e.jsxs(e.Fragment,{children:[e.jsx(s.Headers,{getHeaders:a(r)}),e.jsx(s.Body,{providedEvents:t[r]})]}))]});export{n as EventsTableEE};