var _=Object.defineProperty;var i=(e,n)=>_(e,"name",{value:n,configurable:!0});import{r as o}from"./index-39d17dc8.js";var d={},E={get exports(){return d},set exports(e){d=e}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=o,x=Symbol.for("react.element"),b=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,j=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function $(e,n,t){var r,l={},c=null,s=null;t!==void 0&&(c=""+t),n.key!==void 0&&(c=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)v.call(n,r)&&!O.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:x,type:e,key:c,ref:s,props:l,_owner:j.current}}i($,"q");u.Fragment=b;u.jsx=$;u.jsxs=$;(function(e){e.exports=u})(E);const V=d.jsx;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}i(a,"_extends");function C(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}i(C,"$6ed0406888f73fc4$var$setRef");function y(...e){return n=>e.forEach(t=>C(t,n))}i(y,"$6ed0406888f73fc4$export$43e446d32b3d21af");function k(...e){return o.useCallback(y(...e),e)}i(k,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const R=o.forwardRef((e,n)=>{const{children:t,...r}=e,l=o.Children.toArray(t),c=l.find(g);if(c){const s=c.props.children,f=l.map(m=>m===c?o.Children.count(s)>1?o.Children.only(null):o.isValidElement(s)?s.props.children:null:m);return o.createElement(p,a({},r,{ref:n}),o.isValidElement(s)?o.cloneElement(s,void 0,f):null)}return o.createElement(p,a({},r,{ref:n}),t)});R.displayName="Slot";const p=o.forwardRef((e,n)=>{const{children:t,...r}=e;return o.isValidElement(t)?o.cloneElement(t,{...w(r,t.props),ref:y(n,t.ref)}):o.Children.count(t)>1?o.Children.only(null):null});p.displayName="SlotClone";const S=i(({children:e})=>o.createElement(o.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function g(e){return o.isValidElement(e)&&e.type===S}i(g,"$5e63c961fc1ce211$var$isSlottable");function w(e,n){const t={...n};for(const r in n){const l=e[r],c=n[r];/^on[A-Z]/.test(r)?l&&c?t[r]=(...f)=>{c(...f),l(...f)}:l&&(t[r]=l):r==="style"?t[r]={...l,...c}:r==="className"&&(t[r]=[l,c].filter(Boolean).join(" "))}return{...e,...t}}i(w,"$5e63c961fc1ce211$var$mergeProps");export{R as $,a as _,k as a,V as j};
//# sourceMappingURL=index.module-423f5d8e.js.map
