import{k as r,i as s,al as n}from"./strapi-7C0Ch6gA.js";const i={firstname:r().trim().required({id:s.required.id,defaultMessage:"This field is required"}),lastname:r(),email:r().email(s.email).lowercase().required({id:s.required.id,defaultMessage:"This field is required"}),username:r().transform(e=>e===""?void 0:e).nullable(),password:r().transform(e=>e===""||e===null?void 0:e).nullable().min(8,{...s.minLength,values:{min:8}}).matches(/[a-z]/,{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least one lowercase character"}).matches(/[A-Z]/,{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least one uppercase character"}).matches(/\d/,{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least one number"}),confirmPassword:r().transform(e=>e===""?null:e).nullable().min(8,{...s.minLength,values:{min:8}}).oneOf([n("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}).when("password",(e,a)=>e?a.required({id:s.required.id,defaultMessage:"This field is required"}).nullable():a)};export{i as C};
