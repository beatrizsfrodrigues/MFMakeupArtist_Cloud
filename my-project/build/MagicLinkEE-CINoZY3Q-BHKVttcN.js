import{u as a,j as t,bG as s}from"./strapi-7C0Ch6gA.js";import{a as n}from"./SelectRoles-Cm6BagK_-DlwTuFCi.js";import"./useAdminRoles-Bno_PvED-CS39Lewm.js";const g=({registrationToken:e})=>{const{formatMessage:i}=a();return e?t.jsx(n,{target:`${window.location.origin}${s()}/auth/register?registrationToken=${e}`,children:i({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})}):t.jsx(n,{target:`${window.location.origin}${s()}/auth/login`,children:i({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."})})};export{g as MagicLinkEE};