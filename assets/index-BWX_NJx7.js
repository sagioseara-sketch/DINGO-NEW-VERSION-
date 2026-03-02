function QA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function YA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var PT={exports:{}},id={},NT={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu=Symbol.for("react.element"),XA=Symbol.for("react.portal"),JA=Symbol.for("react.fragment"),ZA=Symbol.for("react.strict_mode"),e1=Symbol.for("react.profiler"),t1=Symbol.for("react.provider"),n1=Symbol.for("react.context"),r1=Symbol.for("react.forward_ref"),i1=Symbol.for("react.suspense"),s1=Symbol.for("react.memo"),o1=Symbol.for("react.lazy"),Kv=Symbol.iterator;function a1(t){return t===null||typeof t!="object"?null:(t=Kv&&t[Kv]||t["@@iterator"],typeof t=="function"?t:null)}var bT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},DT=Object.assign,OT={};function ta(t,e,n){this.props=t,this.context=e,this.refs=OT,this.updater=n||bT}ta.prototype.isReactComponent={};ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function LT(){}LT.prototype=ta.prototype;function fg(t,e,n){this.props=t,this.context=e,this.refs=OT,this.updater=n||bT}var pg=fg.prototype=new LT;pg.constructor=fg;DT(pg,ta.prototype);pg.isPureReactComponent=!0;var Qv=Array.isArray,MT=Object.prototype.hasOwnProperty,mg={current:null},VT={key:!0,ref:!0,__self:!0,__source:!0};function jT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)MT.call(e,r)&&!VT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:uu,type:t,key:s,ref:o,props:i,_owner:mg.current}}function l1(t,e){return{$$typeof:uu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gg(t){return typeof t=="object"&&t!==null&&t.$$typeof===uu}function u1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yv=/\/+/g;function Nf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?u1(""+t.key):e.toString(36)}function Pc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case uu:case XA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Nf(o,0):r,Qv(i)?(n="",t!=null&&(n=t.replace(Yv,"$&/")+"/"),Pc(i,e,n,"",function(c){return c})):i!=null&&(gg(i)&&(i=l1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Nf(s,a);o+=Pc(s,e,n,l,i)}else if(l=a1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Nf(s,a++),o+=Pc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nc(t,e,n){if(t==null)return t;var r=[],i=0;return Pc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function c1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Nc={transition:null},h1={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Nc,ReactCurrentOwner:mg};function FT(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:nc,forEach:function(t,e,n){nc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nc(t,function(){e++}),e},toArray:function(t){return nc(t,function(e){return e})||[]},only:function(t){if(!gg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=ta;de.Fragment=JA;de.Profiler=e1;de.PureComponent=fg;de.StrictMode=ZA;de.Suspense=i1;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h1;de.act=FT;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=DT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)MT.call(e,l)&&!VT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:uu,type:t.type,key:i,ref:s,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:n1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:t1,_context:t},t.Consumer=t};de.createElement=jT;de.createFactory=function(t){var e=jT.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:r1,render:t}};de.isValidElement=gg;de.lazy=function(t){return{$$typeof:o1,_payload:{_status:-1,_result:t},_init:c1}};de.memo=function(t,e){return{$$typeof:s1,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Nc.transition;Nc.transition={};try{t()}finally{Nc.transition=e}};de.unstable_act=FT;de.useCallback=function(t,e){return Yt.current.useCallback(t,e)};de.useContext=function(t){return Yt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Yt.current.useEffect(t,e)};de.useId=function(){return Yt.current.useId()};de.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Yt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};de.useRef=function(t){return Yt.current.useRef(t)};de.useState=function(t){return Yt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Yt.current.useTransition()};de.version="18.3.1";NT.exports=de;var b=NT.exports;const UT=YA(b),d1=QA({__proto__:null,default:UT},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1=b,p1=Symbol.for("react.element"),m1=Symbol.for("react.fragment"),g1=Object.prototype.hasOwnProperty,_1=f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y1={key:!0,ref:!0,__self:!0,__source:!0};function BT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)g1.call(e,r)&&!y1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:p1,type:t,key:s,ref:o,props:i,_owner:_1.current}}id.Fragment=m1;id.jsx=BT;id.jsxs=BT;PT.exports=id;var p=PT.exports,Ap={},zT={exports:{}},gn={},WT={exports:{}},$T={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,X){var Q=z.length;z.push(X);e:for(;0<Q;){var K=Q-1>>>1,q=z[K];if(0<i(q,X))z[K]=X,z[Q]=q,Q=K;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var X=z[0],Q=z.pop();if(Q!==X){z[0]=Q;e:for(var K=0,q=z.length,ae=q>>>1;K<ae;){var Me=2*(K+1)-1,Ee=z[Me],Be=Me+1,ze=z[Be];if(0>i(Ee,Q))Be<q&&0>i(ze,Ee)?(z[K]=ze,z[Be]=Q,K=Be):(z[K]=Ee,z[Me]=Q,K=Me);else if(Be<q&&0>i(ze,Q))z[K]=ze,z[Be]=Q,K=Be;else break e}}return X}function i(z,X){var Q=z.sortIndex-X.sortIndex;return Q!==0?Q:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,m=3,v=!1,w=!1,A=!1,P=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=z)r(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function D(z){if(A=!1,I(z),!w)if(n(l)!==null)w=!0,ie(F);else{var X=n(c);X!==null&&ke(D,X.startTime-z)}}function F(z,X){w=!1,A&&(A=!1,T(y),y=-1),v=!0;var Q=m;try{for(I(X),f=n(l);f!==null&&(!(f.expirationTime>X)||z&&!N());){var K=f.callback;if(typeof K=="function"){f.callback=null,m=f.priorityLevel;var q=K(f.expirationTime<=X);X=t.unstable_now(),typeof q=="function"?f.callback=q:f===n(l)&&r(l),I(X)}else r(l);f=n(l)}if(f!==null)var ae=!0;else{var Me=n(c);Me!==null&&ke(D,Me.startTime-X),ae=!1}return ae}finally{f=null,m=Q,v=!1}}var V=!1,S=null,y=-1,C=5,k=-1;function N(){return!(t.unstable_now()-k<C)}function R(){if(S!==null){var z=t.unstable_now();k=z;var X=!0;try{X=S(!0,z)}finally{X?x():(V=!1,S=null)}}else V=!1}var x;if(typeof E=="function")x=function(){E(R)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,M=Te.port2;Te.port1.onmessage=R,x=function(){M.postMessage(null)}}else x=function(){P(R,0)};function ie(z){S=z,V||(V=!0,x())}function ke(z,X){y=P(function(){z(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){w||v||(w=!0,ie(F))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var Q=m;m=X;try{return z()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=m;m=z;try{return X()}finally{m=Q}},t.unstable_scheduleCallback=function(z,X,Q){var K=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?K+Q:K):Q=K,z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=Q+q,z={id:h++,callback:X,priorityLevel:z,startTime:Q,expirationTime:q,sortIndex:-1},Q>K?(z.sortIndex=Q,e(c,z),n(l)===null&&z===n(c)&&(A?(T(y),y=-1):A=!0,ke(D,Q-K))):(z.sortIndex=q,e(l,z),w||v||(w=!0,ie(F))),z},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(z){var X=m;return function(){var Q=m;m=X;try{return z.apply(this,arguments)}finally{m=Q}}}})($T);WT.exports=$T;var v1=WT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1=b,mn=v1;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var HT=new Set,Tl={};function Ps(t,e){Ao(t,e),Ao(t+"Capture",e)}function Ao(t,e){for(Tl[t]=e,t=0;t<e.length;t++)HT.add(e[t])}var Dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pp=Object.prototype.hasOwnProperty,E1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xv={},Jv={};function T1(t){return Pp.call(Jv,t)?!0:Pp.call(Xv,t)?!1:E1.test(t)?Jv[t]=!0:(Xv[t]=!0,!1)}function I1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S1(t,e,n,r){if(e===null||typeof e>"u"||I1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _g=/[\-:]([a-z])/g;function yg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_g,yg);Nt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_g,yg);Nt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_g,yg);Nt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function vg(t,e,n,r){var i=Nt.hasOwnProperty(e)?Nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(S1(e,n,i,r)&&(n=null),r||i===null?T1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $r=w1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rc=Symbol.for("react.element"),ro=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),wg=Symbol.for("react.strict_mode"),Np=Symbol.for("react.profiler"),qT=Symbol.for("react.provider"),GT=Symbol.for("react.context"),Eg=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),Dp=Symbol.for("react.suspense_list"),Tg=Symbol.for("react.memo"),ti=Symbol.for("react.lazy"),KT=Symbol.for("react.offscreen"),Zv=Symbol.iterator;function Na(t){return t===null||typeof t!="object"?null:(t=Zv&&t[Zv]||t["@@iterator"],typeof t=="function"?t:null)}var Xe=Object.assign,bf;function qa(t){if(bf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bf=e&&e[1]||""}return`
`+bf+t}var Df=!1;function Of(t,e){if(!t||Df)return"";Df=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Df=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qa(t):""}function C1(t){switch(t.tag){case 5:return qa(t.type);case 16:return qa("Lazy");case 13:return qa("Suspense");case 19:return qa("SuspenseList");case 0:case 2:case 15:return t=Of(t.type,!1),t;case 11:return t=Of(t.type.render,!1),t;case 1:return t=Of(t.type,!0),t;default:return""}}function Op(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case io:return"Fragment";case ro:return"Portal";case Np:return"Profiler";case wg:return"StrictMode";case bp:return"Suspense";case Dp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case GT:return(t.displayName||"Context")+".Consumer";case qT:return(t._context.displayName||"Context")+".Provider";case Eg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tg:return e=t.displayName||null,e!==null?e:Op(t.type)||"Memo";case ti:e=t._payload,t=t._init;try{return Op(t(e))}catch{}}return null}function k1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Op(e);case 8:return e===wg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function QT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x1(t){var e=QT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ic(t){t._valueTracker||(t._valueTracker=x1(t))}function YT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=QT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function eh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lp(t,e){var n=e.checked;return Xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ew(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function XT(t,e){e=e.checked,e!=null&&vg(t,"checked",e,!1)}function Mp(t,e){XT(t,e);var n=ki(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vp(t,e.type,ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vp(t,e,n){(e!=="number"||eh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ga=Array.isArray;function _o(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ki(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Ga(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ki(n)}}function JT(t,e){var n=ki(e.value),r=ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ZT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ZT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sc,eI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sc=sc||document.createElement("div"),sc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Il(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R1=["Webkit","ms","Moz","O"];Object.keys(nl).forEach(function(t){R1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),nl[e]=nl[t]})});function tI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||nl.hasOwnProperty(t)&&nl[t]?(""+e).trim():e+"px"}function nI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var A1=Xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Up(t,e){if(e){if(A1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Bp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zp=null;function Ig(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wp=null,yo=null,vo=null;function iw(t){if(t=du(t)){if(typeof Wp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=ud(e),Wp(t.stateNode,t.type,e))}}function rI(t){yo?vo?vo.push(t):vo=[t]:yo=t}function iI(){if(yo){var t=yo,e=vo;if(vo=yo=null,iw(t),e)for(t=0;t<e.length;t++)iw(e[t])}}function sI(t,e){return t(e)}function oI(){}var Lf=!1;function aI(t,e,n){if(Lf)return t(e,n);Lf=!0;try{return sI(t,e,n)}finally{Lf=!1,(yo!==null||vo!==null)&&(oI(),iI())}}function Sl(t,e){var n=t.stateNode;if(n===null)return null;var r=ud(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var $p=!1;if(Dr)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){$p=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{$p=!1}function P1(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var rl=!1,th=null,nh=!1,Hp=null,N1={onError:function(t){rl=!0,th=t}};function b1(t,e,n,r,i,s,o,a,l){rl=!1,th=null,P1.apply(N1,arguments)}function D1(t,e,n,r,i,s,o,a,l){if(b1.apply(this,arguments),rl){if(rl){var c=th;rl=!1,th=null}else throw Error(B(198));nh||(nh=!0,Hp=c)}}function Ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sw(t){if(Ns(t)!==t)throw Error(B(188))}function O1(t){var e=t.alternate;if(!e){if(e=Ns(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sw(i),t;if(s===r)return sw(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function uI(t){return t=O1(t),t!==null?cI(t):null}function cI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cI(t);if(e!==null)return e;t=t.sibling}return null}var hI=mn.unstable_scheduleCallback,ow=mn.unstable_cancelCallback,L1=mn.unstable_shouldYield,M1=mn.unstable_requestPaint,it=mn.unstable_now,V1=mn.unstable_getCurrentPriorityLevel,Sg=mn.unstable_ImmediatePriority,dI=mn.unstable_UserBlockingPriority,rh=mn.unstable_NormalPriority,j1=mn.unstable_LowPriority,fI=mn.unstable_IdlePriority,sd=null,tr=null;function F1(t){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(sd,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:z1,U1=Math.log,B1=Math.LN2;function z1(t){return t>>>=0,t===0?32:31-(U1(t)/B1|0)|0}var oc=64,ac=4194304;function Ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ih(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ka(a):(s&=o,s!==0&&(r=Ka(s)))}else o=n&~i,o!==0?r=Ka(o):s!==0&&(r=Ka(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wn(e),i=1<<n,r|=t[n],e&=~i;return r}function W1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=W1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function qp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pI(){var t=oc;return oc<<=1,!(oc&4194240)&&(oc=64),t}function Mf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function H1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ie=0;function mI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gI,kg,_I,yI,vI,Gp=!1,lc=[],fi=null,pi=null,mi=null,Cl=new Map,kl=new Map,ri=[],q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function aw(t,e){switch(t){case"focusin":case"focusout":fi=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":mi=null;break;case"pointerover":case"pointerout":Cl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(e.pointerId)}}function Da(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=du(e),e!==null&&kg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function G1(t,e,n,r,i){switch(e){case"focusin":return fi=Da(fi,t,e,n,r,i),!0;case"dragenter":return pi=Da(pi,t,e,n,r,i),!0;case"mouseover":return mi=Da(mi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Cl.set(s,Da(Cl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,kl.set(s,Da(kl.get(s)||null,t,e,n,r,i)),!0}return!1}function wI(t){var e=es(t.target);if(e!==null){var n=Ns(e);if(n!==null){if(e=n.tag,e===13){if(e=lI(n),e!==null){t.blockedOn=e,vI(t.priority,function(){_I(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zp=r,n.target.dispatchEvent(r),zp=null}else return e=du(n),e!==null&&kg(e),t.blockedOn=n,!1;e.shift()}return!0}function lw(t,e,n){bc(t)&&n.delete(e)}function K1(){Gp=!1,fi!==null&&bc(fi)&&(fi=null),pi!==null&&bc(pi)&&(pi=null),mi!==null&&bc(mi)&&(mi=null),Cl.forEach(lw),kl.forEach(lw)}function Oa(t,e){t.blockedOn===e&&(t.blockedOn=null,Gp||(Gp=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,K1)))}function xl(t){function e(i){return Oa(i,t)}if(0<lc.length){Oa(lc[0],t);for(var n=1;n<lc.length;n++){var r=lc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fi!==null&&Oa(fi,t),pi!==null&&Oa(pi,t),mi!==null&&Oa(mi,t),Cl.forEach(e),kl.forEach(e),n=0;n<ri.length;n++)r=ri[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ri.length&&(n=ri[0],n.blockedOn===null);)wI(n),n.blockedOn===null&&ri.shift()}var wo=$r.ReactCurrentBatchConfig,sh=!0;function Q1(t,e,n,r){var i=Ie,s=wo.transition;wo.transition=null;try{Ie=1,xg(t,e,n,r)}finally{Ie=i,wo.transition=s}}function Y1(t,e,n,r){var i=Ie,s=wo.transition;wo.transition=null;try{Ie=4,xg(t,e,n,r)}finally{Ie=i,wo.transition=s}}function xg(t,e,n,r){if(sh){var i=Kp(t,e,n,r);if(i===null)qf(t,e,r,oh,n),aw(t,r);else if(G1(i,t,e,n,r))r.stopPropagation();else if(aw(t,r),e&4&&-1<q1.indexOf(t)){for(;i!==null;){var s=du(i);if(s!==null&&gI(s),s=Kp(t,e,n,r),s===null&&qf(t,e,r,oh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qf(t,e,r,null,n)}}var oh=null;function Kp(t,e,n,r){if(oh=null,t=Ig(r),t=es(t),t!==null)if(e=Ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return oh=t,null}function EI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V1()){case Sg:return 1;case dI:return 4;case rh:case j1:return 16;case fI:return 536870912;default:return 16}default:return 16}}var li=null,Rg=null,Dc=null;function TI(){if(Dc)return Dc;var t,e=Rg,n=e.length,r,i="value"in li?li.value:li.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Dc=i.slice(t,1<r?1-r:void 0)}function Oc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uc(){return!0}function uw(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uc:uw,this.isPropagationStopped=uw,this}return Xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uc)},persist:function(){},isPersistent:uc}),e}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ag=_n(na),hu=Xe({},na,{view:0,detail:0}),X1=_n(hu),Vf,jf,La,od=Xe({},hu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==La&&(La&&t.type==="mousemove"?(Vf=t.screenX-La.screenX,jf=t.screenY-La.screenY):jf=Vf=0,La=t),Vf)},movementY:function(t){return"movementY"in t?t.movementY:jf}}),cw=_n(od),J1=Xe({},od,{dataTransfer:0}),Z1=_n(J1),eP=Xe({},hu,{relatedTarget:0}),Ff=_n(eP),tP=Xe({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),nP=_n(tP),rP=Xe({},na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iP=_n(rP),sP=Xe({},na,{data:0}),hw=_n(sP),oP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lP[t])?!!e[t]:!1}function Pg(){return uP}var cP=Xe({},hu,{key:function(t){if(t.key){var e=oP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pg,charCode:function(t){return t.type==="keypress"?Oc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hP=_n(cP),dP=Xe({},od,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dw=_n(dP),fP=Xe({},hu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pg}),pP=_n(fP),mP=Xe({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),gP=_n(mP),_P=Xe({},od,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yP=_n(_P),vP=[9,13,27,32],Ng=Dr&&"CompositionEvent"in window,il=null;Dr&&"documentMode"in document&&(il=document.documentMode);var wP=Dr&&"TextEvent"in window&&!il,II=Dr&&(!Ng||il&&8<il&&11>=il),fw=" ",pw=!1;function SI(t,e){switch(t){case"keyup":return vP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function CI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var so=!1;function EP(t,e){switch(t){case"compositionend":return CI(e);case"keypress":return e.which!==32?null:(pw=!0,fw);case"textInput":return t=e.data,t===fw&&pw?null:t;default:return null}}function TP(t,e){if(so)return t==="compositionend"||!Ng&&SI(t,e)?(t=TI(),Dc=Rg=li=null,so=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return II&&e.locale!=="ko"?null:e.data;default:return null}}var IP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IP[t.type]:e==="textarea"}function kI(t,e,n,r){rI(r),e=ah(e,"onChange"),0<e.length&&(n=new Ag("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var sl=null,Rl=null;function SP(t){VI(t,0)}function ad(t){var e=lo(t);if(YT(e))return t}function CP(t,e){if(t==="change")return e}var xI=!1;if(Dr){var Uf;if(Dr){var Bf="oninput"in document;if(!Bf){var gw=document.createElement("div");gw.setAttribute("oninput","return;"),Bf=typeof gw.oninput=="function"}Uf=Bf}else Uf=!1;xI=Uf&&(!document.documentMode||9<document.documentMode)}function _w(){sl&&(sl.detachEvent("onpropertychange",RI),Rl=sl=null)}function RI(t){if(t.propertyName==="value"&&ad(Rl)){var e=[];kI(e,Rl,t,Ig(t)),aI(SP,e)}}function kP(t,e,n){t==="focusin"?(_w(),sl=e,Rl=n,sl.attachEvent("onpropertychange",RI)):t==="focusout"&&_w()}function xP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ad(Rl)}function RP(t,e){if(t==="click")return ad(e)}function AP(t,e){if(t==="input"||t==="change")return ad(e)}function PP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:PP;function Al(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pp.call(e,i)||!Gn(t[i],e[i]))return!1}return!0}function yw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vw(t,e){var n=yw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yw(n)}}function AI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?AI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function PI(){for(var t=window,e=eh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=eh(t.document)}return e}function bg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NP(t){var e=PI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&AI(n.ownerDocument.documentElement,n)){if(r!==null&&bg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vw(n,s);var o=vw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bP=Dr&&"documentMode"in document&&11>=document.documentMode,oo=null,Qp=null,ol=null,Yp=!1;function ww(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yp||oo==null||oo!==eh(r)||(r=oo,"selectionStart"in r&&bg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ol&&Al(ol,r)||(ol=r,r=ah(Qp,"onSelect"),0<r.length&&(e=new Ag("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=oo)))}function cc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ao={animationend:cc("Animation","AnimationEnd"),animationiteration:cc("Animation","AnimationIteration"),animationstart:cc("Animation","AnimationStart"),transitionend:cc("Transition","TransitionEnd")},zf={},NI={};Dr&&(NI=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function ld(t){if(zf[t])return zf[t];if(!ao[t])return t;var e=ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in NI)return zf[t]=e[n];return t}var bI=ld("animationend"),DI=ld("animationiteration"),OI=ld("animationstart"),LI=ld("transitionend"),MI=new Map,Ew="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mi(t,e){MI.set(t,e),Ps(e,[t])}for(var Wf=0;Wf<Ew.length;Wf++){var $f=Ew[Wf],DP=$f.toLowerCase(),OP=$f[0].toUpperCase()+$f.slice(1);Mi(DP,"on"+OP)}Mi(bI,"onAnimationEnd");Mi(DI,"onAnimationIteration");Mi(OI,"onAnimationStart");Mi("dblclick","onDoubleClick");Mi("focusin","onFocus");Mi("focusout","onBlur");Mi(LI,"onTransitionEnd");Ao("onMouseEnter",["mouseout","mouseover"]);Ao("onMouseLeave",["mouseout","mouseover"]);Ao("onPointerEnter",["pointerout","pointerover"]);Ao("onPointerLeave",["pointerout","pointerover"]);Ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function Tw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,D1(r,e,void 0,t),t.currentTarget=null}function VI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Tw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Tw(i,a,c),s=l}}}if(nh)throw t=Hp,nh=!1,Hp=null,t}function je(t,e){var n=e[tm];n===void 0&&(n=e[tm]=new Set);var r=t+"__bubble";n.has(r)||(jI(e,t,2,!1),n.add(r))}function Hf(t,e,n){var r=0;e&&(r|=4),jI(n,t,r,e)}var hc="_reactListening"+Math.random().toString(36).slice(2);function Pl(t){if(!t[hc]){t[hc]=!0,HT.forEach(function(n){n!=="selectionchange"&&(LP.has(n)||Hf(n,!1,t),Hf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hc]||(e[hc]=!0,Hf("selectionchange",!1,e))}}function jI(t,e,n,r){switch(EI(e)){case 1:var i=Q1;break;case 4:i=Y1;break;default:i=xg}n=i.bind(null,e,n,t),i=void 0,!$p||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}aI(function(){var c=s,h=Ig(n),f=[];e:{var m=MI.get(t);if(m!==void 0){var v=Ag,w=t;switch(t){case"keypress":if(Oc(n)===0)break e;case"keydown":case"keyup":v=hP;break;case"focusin":w="focus",v=Ff;break;case"focusout":w="blur",v=Ff;break;case"beforeblur":case"afterblur":v=Ff;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=cw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=pP;break;case bI:case DI:case OI:v=nP;break;case LI:v=gP;break;case"scroll":v=X1;break;case"wheel":v=yP;break;case"copy":case"cut":case"paste":v=iP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=dw}var A=(e&4)!==0,P=!A&&t==="scroll",T=A?m!==null?m+"Capture":null:m;A=[];for(var E=c,I;E!==null;){I=E;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,T!==null&&(D=Sl(E,T),D!=null&&A.push(Nl(E,D,I)))),P)break;E=E.return}0<A.length&&(m=new v(m,w,null,n,h),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==zp&&(w=n.relatedTarget||n.fromElement)&&(es(w)||w[Or]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?es(w):null,w!==null&&(P=Ns(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(A=cw,D="onMouseLeave",T="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(A=dw,D="onPointerLeave",T="onPointerEnter",E="pointer"),P=v==null?m:lo(v),I=w==null?m:lo(w),m=new A(D,E+"leave",v,n,h),m.target=P,m.relatedTarget=I,D=null,es(h)===c&&(A=new A(T,E+"enter",w,n,h),A.target=I,A.relatedTarget=P,D=A),P=D,v&&w)t:{for(A=v,T=w,E=0,I=A;I;I=Ys(I))E++;for(I=0,D=T;D;D=Ys(D))I++;for(;0<E-I;)A=Ys(A),E--;for(;0<I-E;)T=Ys(T),I--;for(;E--;){if(A===T||T!==null&&A===T.alternate)break t;A=Ys(A),T=Ys(T)}A=null}else A=null;v!==null&&Iw(f,m,v,A,!1),w!==null&&P!==null&&Iw(f,P,w,A,!0)}}e:{if(m=c?lo(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var F=CP;else if(mw(m))if(xI)F=AP;else{F=xP;var V=kP}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=RP);if(F&&(F=F(t,c))){kI(f,F,n,h);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&Vp(m,"number",m.value)}switch(V=c?lo(c):window,t){case"focusin":(mw(V)||V.contentEditable==="true")&&(oo=V,Qp=c,ol=null);break;case"focusout":ol=Qp=oo=null;break;case"mousedown":Yp=!0;break;case"contextmenu":case"mouseup":case"dragend":Yp=!1,ww(f,n,h);break;case"selectionchange":if(bP)break;case"keydown":case"keyup":ww(f,n,h)}var S;if(Ng)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else so?SI(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(II&&n.locale!=="ko"&&(so||y!=="onCompositionStart"?y==="onCompositionEnd"&&so&&(S=TI()):(li=h,Rg="value"in li?li.value:li.textContent,so=!0)),V=ah(c,y),0<V.length&&(y=new hw(y,t,null,n,h),f.push({event:y,listeners:V}),S?y.data=S:(S=CI(n),S!==null&&(y.data=S)))),(S=wP?EP(t,n):TP(t,n))&&(c=ah(c,"onBeforeInput"),0<c.length&&(h=new hw("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=S))}VI(f,e)})}function Nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ah(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Sl(t,n),s!=null&&r.unshift(Nl(t,s,i)),s=Sl(t,e),s!=null&&r.push(Nl(t,s,i))),t=t.return}return r}function Ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Iw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Sl(n,s),l!=null&&o.unshift(Nl(n,l,a))):i||(l=Sl(n,s),l!=null&&o.push(Nl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MP=/\r\n?/g,VP=/\u0000|\uFFFD/g;function Sw(t){return(typeof t=="string"?t:""+t).replace(MP,`
`).replace(VP,"")}function dc(t,e,n){if(e=Sw(e),Sw(t)!==e&&n)throw Error(B(425))}function lh(){}var Xp=null,Jp=null;function Zp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var em=typeof setTimeout=="function"?setTimeout:void 0,jP=typeof clearTimeout=="function"?clearTimeout:void 0,Cw=typeof Promise=="function"?Promise:void 0,FP=typeof queueMicrotask=="function"?queueMicrotask:typeof Cw<"u"?function(t){return Cw.resolve(null).then(t).catch(UP)}:em;function UP(t){setTimeout(function(){throw t})}function Gf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xl(e)}function gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ra=Math.random().toString(36).slice(2),Zn="__reactFiber$"+ra,bl="__reactProps$"+ra,Or="__reactContainer$"+ra,tm="__reactEvents$"+ra,BP="__reactListeners$"+ra,zP="__reactHandles$"+ra;function es(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Or]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kw(t);t!==null;){if(n=t[Zn])return n;t=kw(t)}return e}t=n,n=t.parentNode}return null}function du(t){return t=t[Zn]||t[Or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function ud(t){return t[bl]||null}var nm=[],uo=-1;function Vi(t){return{current:t}}function Ue(t){0>uo||(t.current=nm[uo],nm[uo]=null,uo--)}function Le(t,e){uo++,nm[uo]=t.current,t.current=e}var xi={},Wt=Vi(xi),nn=Vi(!1),fs=xi;function Po(t,e){var n=t.type.contextTypes;if(!n)return xi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rn(t){return t=t.childContextTypes,t!=null}function uh(){Ue(nn),Ue(Wt)}function xw(t,e,n){if(Wt.current!==xi)throw Error(B(168));Le(Wt,e),Le(nn,n)}function FI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,k1(t)||"Unknown",i));return Xe({},n,r)}function ch(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xi,fs=Wt.current,Le(Wt,t),Le(nn,nn.current),!0}function Rw(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=FI(t,e,fs),r.__reactInternalMemoizedMergedChildContext=t,Ue(nn),Ue(Wt),Le(Wt,t)):Ue(nn),Le(nn,n)}var vr=null,cd=!1,Kf=!1;function UI(t){vr===null?vr=[t]:vr.push(t)}function WP(t){cd=!0,UI(t)}function ji(){if(!Kf&&vr!==null){Kf=!0;var t=0,e=Ie;try{var n=vr;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vr=null,cd=!1}catch(i){throw vr!==null&&(vr=vr.slice(t+1)),hI(Sg,ji),i}finally{Ie=e,Kf=!1}}return null}var co=[],ho=0,hh=null,dh=0,wn=[],En=0,ps=null,Er=1,Tr="";function Yi(t,e){co[ho++]=dh,co[ho++]=hh,hh=t,dh=e}function BI(t,e,n){wn[En++]=Er,wn[En++]=Tr,wn[En++]=ps,ps=t;var r=Er;t=Tr;var i=32-Wn(r)-1;r&=~(1<<i),n+=1;var s=32-Wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Er=1<<32-Wn(e)+i|n<<i|r,Tr=s+t}else Er=1<<s|n<<i|r,Tr=t}function Dg(t){t.return!==null&&(Yi(t,1),BI(t,1,0))}function Og(t){for(;t===hh;)hh=co[--ho],co[ho]=null,dh=co[--ho],co[ho]=null;for(;t===ps;)ps=wn[--En],wn[En]=null,Tr=wn[--En],wn[En]=null,Er=wn[--En],wn[En]=null}var pn=null,dn=null,$e=!1,Fn=null;function zI(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Aw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,dn=gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ps!==null?{id:Er,overflow:Tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,dn=null,!0):!1;default:return!1}}function rm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function im(t){if($e){var e=dn;if(e){var n=e;if(!Aw(t,e)){if(rm(t))throw Error(B(418));e=gi(n.nextSibling);var r=pn;e&&Aw(t,e)?zI(r,n):(t.flags=t.flags&-4097|2,$e=!1,pn=t)}}else{if(rm(t))throw Error(B(418));t.flags=t.flags&-4097|2,$e=!1,pn=t}}}function Pw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function fc(t){if(t!==pn)return!1;if(!$e)return Pw(t),$e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zp(t.type,t.memoizedProps)),e&&(e=dn)){if(rm(t))throw WI(),Error(B(418));for(;e;)zI(t,e),e=gi(e.nextSibling)}if(Pw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=pn?gi(t.stateNode.nextSibling):null;return!0}function WI(){for(var t=dn;t;)t=gi(t.nextSibling)}function No(){dn=pn=null,$e=!1}function Lg(t){Fn===null?Fn=[t]:Fn.push(t)}var $P=$r.ReactCurrentBatchConfig;function Ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function pc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nw(t){var e=t._init;return e(t._payload)}function $I(t){function e(T,E){if(t){var I=T.deletions;I===null?(T.deletions=[E],T.flags|=16):I.push(E)}}function n(T,E){if(!t)return null;for(;E!==null;)e(T,E),E=E.sibling;return null}function r(T,E){for(T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function i(T,E){return T=wi(T,E),T.index=0,T.sibling=null,T}function s(T,E,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<E?(T.flags|=2,E):I):(T.flags|=2,E)):(T.flags|=1048576,E)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,E,I,D){return E===null||E.tag!==6?(E=tp(I,T.mode,D),E.return=T,E):(E=i(E,I),E.return=T,E)}function l(T,E,I,D){var F=I.type;return F===io?h(T,E,I.props.children,D,I.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ti&&Nw(F)===E.type)?(D=i(E,I.props),D.ref=Ma(T,E,I),D.return=T,D):(D=Bc(I.type,I.key,I.props,null,T.mode,D),D.ref=Ma(T,E,I),D.return=T,D)}function c(T,E,I,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==I.containerInfo||E.stateNode.implementation!==I.implementation?(E=np(I,T.mode,D),E.return=T,E):(E=i(E,I.children||[]),E.return=T,E)}function h(T,E,I,D,F){return E===null||E.tag!==7?(E=us(I,T.mode,D,F),E.return=T,E):(E=i(E,I),E.return=T,E)}function f(T,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return E=tp(""+E,T.mode,I),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case rc:return I=Bc(E.type,E.key,E.props,null,T.mode,I),I.ref=Ma(T,null,E),I.return=T,I;case ro:return E=np(E,T.mode,I),E.return=T,E;case ti:var D=E._init;return f(T,D(E._payload),I)}if(Ga(E)||Na(E))return E=us(E,T.mode,I,null),E.return=T,E;pc(T,E)}return null}function m(T,E,I,D){var F=E!==null?E.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:a(T,E,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case rc:return I.key===F?l(T,E,I,D):null;case ro:return I.key===F?c(T,E,I,D):null;case ti:return F=I._init,m(T,E,F(I._payload),D)}if(Ga(I)||Na(I))return F!==null?null:h(T,E,I,D,null);pc(T,I)}return null}function v(T,E,I,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(I)||null,a(E,T,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case rc:return T=T.get(D.key===null?I:D.key)||null,l(E,T,D,F);case ro:return T=T.get(D.key===null?I:D.key)||null,c(E,T,D,F);case ti:var V=D._init;return v(T,E,I,V(D._payload),F)}if(Ga(D)||Na(D))return T=T.get(I)||null,h(E,T,D,F,null);pc(E,D)}return null}function w(T,E,I,D){for(var F=null,V=null,S=E,y=E=0,C=null;S!==null&&y<I.length;y++){S.index>y?(C=S,S=null):C=S.sibling;var k=m(T,S,I[y],D);if(k===null){S===null&&(S=C);break}t&&S&&k.alternate===null&&e(T,S),E=s(k,E,y),V===null?F=k:V.sibling=k,V=k,S=C}if(y===I.length)return n(T,S),$e&&Yi(T,y),F;if(S===null){for(;y<I.length;y++)S=f(T,I[y],D),S!==null&&(E=s(S,E,y),V===null?F=S:V.sibling=S,V=S);return $e&&Yi(T,y),F}for(S=r(T,S);y<I.length;y++)C=v(S,T,y,I[y],D),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?y:C.key),E=s(C,E,y),V===null?F=C:V.sibling=C,V=C);return t&&S.forEach(function(N){return e(T,N)}),$e&&Yi(T,y),F}function A(T,E,I,D){var F=Na(I);if(typeof F!="function")throw Error(B(150));if(I=F.call(I),I==null)throw Error(B(151));for(var V=F=null,S=E,y=E=0,C=null,k=I.next();S!==null&&!k.done;y++,k=I.next()){S.index>y?(C=S,S=null):C=S.sibling;var N=m(T,S,k.value,D);if(N===null){S===null&&(S=C);break}t&&S&&N.alternate===null&&e(T,S),E=s(N,E,y),V===null?F=N:V.sibling=N,V=N,S=C}if(k.done)return n(T,S),$e&&Yi(T,y),F;if(S===null){for(;!k.done;y++,k=I.next())k=f(T,k.value,D),k!==null&&(E=s(k,E,y),V===null?F=k:V.sibling=k,V=k);return $e&&Yi(T,y),F}for(S=r(T,S);!k.done;y++,k=I.next())k=v(S,T,y,k.value,D),k!==null&&(t&&k.alternate!==null&&S.delete(k.key===null?y:k.key),E=s(k,E,y),V===null?F=k:V.sibling=k,V=k);return t&&S.forEach(function(R){return e(T,R)}),$e&&Yi(T,y),F}function P(T,E,I,D){if(typeof I=="object"&&I!==null&&I.type===io&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case rc:e:{for(var F=I.key,V=E;V!==null;){if(V.key===F){if(F=I.type,F===io){if(V.tag===7){n(T,V.sibling),E=i(V,I.props.children),E.return=T,T=E;break e}}else if(V.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ti&&Nw(F)===V.type){n(T,V.sibling),E=i(V,I.props),E.ref=Ma(T,V,I),E.return=T,T=E;break e}n(T,V);break}else e(T,V);V=V.sibling}I.type===io?(E=us(I.props.children,T.mode,D,I.key),E.return=T,T=E):(D=Bc(I.type,I.key,I.props,null,T.mode,D),D.ref=Ma(T,E,I),D.return=T,T=D)}return o(T);case ro:e:{for(V=I.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===I.containerInfo&&E.stateNode.implementation===I.implementation){n(T,E.sibling),E=i(E,I.children||[]),E.return=T,T=E;break e}else{n(T,E);break}else e(T,E);E=E.sibling}E=np(I,T.mode,D),E.return=T,T=E}return o(T);case ti:return V=I._init,P(T,E,V(I._payload),D)}if(Ga(I))return w(T,E,I,D);if(Na(I))return A(T,E,I,D);pc(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,E!==null&&E.tag===6?(n(T,E.sibling),E=i(E,I),E.return=T,T=E):(n(T,E),E=tp(I,T.mode,D),E.return=T,T=E),o(T)):n(T,E)}return P}var bo=$I(!0),HI=$I(!1),fh=Vi(null),ph=null,fo=null,Mg=null;function Vg(){Mg=fo=ph=null}function jg(t){var e=fh.current;Ue(fh),t._currentValue=e}function sm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Eo(t,e){ph=t,Mg=fo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function xn(t){var e=t._currentValue;if(Mg!==t)if(t={context:t,memoizedValue:e,next:null},fo===null){if(ph===null)throw Error(B(308));fo=t,ph.dependencies={lanes:0,firstContext:t}}else fo=fo.next=t;return e}var ts=null;function Fg(t){ts===null?ts=[t]:ts.push(t)}function qI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Lr(t,r)}function Lr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ni=!1;function Ug(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function GI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _i(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Lr(t,n)}return i=r.interleaved,i===null?(e.next=e,Fg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Lr(t,n)}function Lc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cg(t,n)}}function bw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mh(t,e,n,r){var i=t.updateQueue;ni=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,A=a;switch(m=e,v=n,A.tag){case 1:if(w=A.payload,typeof w=="function"){f=w.call(v,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=A.payload,m=typeof w=="function"?w.call(v,f,m):w,m==null)break e;f=Xe({},f,m);break e;case 2:ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,l=f):h=h.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gs|=o,t.lanes=o,t.memoizedState=f}}function Dw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var fu={},nr=Vi(fu),Dl=Vi(fu),Ol=Vi(fu);function ns(t){if(t===fu)throw Error(B(174));return t}function Bg(t,e){switch(Le(Ol,e),Le(Dl,t),Le(nr,fu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fp(e,t)}Ue(nr),Le(nr,e)}function Do(){Ue(nr),Ue(Dl),Ue(Ol)}function KI(t){ns(Ol.current);var e=ns(nr.current),n=Fp(e,t.type);e!==n&&(Le(Dl,t),Le(nr,n))}function zg(t){Dl.current===t&&(Ue(nr),Ue(Dl))}var qe=Vi(0);function gh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qf=[];function Wg(){for(var t=0;t<Qf.length;t++)Qf[t]._workInProgressVersionPrimary=null;Qf.length=0}var Mc=$r.ReactCurrentDispatcher,Yf=$r.ReactCurrentBatchConfig,ms=0,Qe=null,ct=null,yt=null,_h=!1,al=!1,Ll=0,HP=0;function Mt(){throw Error(B(321))}function $g(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function Hg(t,e,n,r,i,s){if(ms=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mc.current=t===null||t.memoizedState===null?QP:YP,t=n(r,i),al){s=0;do{if(al=!1,Ll=0,25<=s)throw Error(B(301));s+=1,yt=ct=null,e.updateQueue=null,Mc.current=XP,t=n(r,i)}while(al)}if(Mc.current=yh,e=ct!==null&&ct.next!==null,ms=0,yt=ct=Qe=null,_h=!1,e)throw Error(B(300));return t}function qg(){var t=Ll!==0;return Ll=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Qe.memoizedState=yt=t:yt=yt.next=t,yt}function Rn(){if(ct===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=yt===null?Qe.memoizedState:yt.next;if(e!==null)yt=e,ct=t;else{if(t===null)throw Error(B(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},yt===null?Qe.memoizedState=yt=t:yt=yt.next=t}return yt}function Ml(t,e){return typeof e=="function"?e(t):e}function Xf(t){var e=Rn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=ct,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((ms&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Qe.lanes|=h,gs|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Gn(r,e.memoizedState)||(en=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Qe.lanes|=s,gs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jf(t){var e=Rn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function QI(){}function YI(t,e){var n=Qe,r=Rn(),i=e(),s=!Gn(r.memoizedState,i);if(s&&(r.memoizedState=i,en=!0),r=r.queue,Gg(ZI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,Vl(9,JI.bind(null,n,r,i,e),void 0,null),Et===null)throw Error(B(349));ms&30||XI(n,e,i)}return i}function XI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function JI(t,e,n,r){e.value=n,e.getSnapshot=r,eS(e)&&tS(t)}function ZI(t,e,n){return n(function(){eS(e)&&tS(t)})}function eS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function tS(t){var e=Lr(t,1);e!==null&&$n(e,t,1,-1)}function Ow(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ml,lastRenderedState:t},e.queue=t,t=t.dispatch=KP.bind(null,Qe,t),[e.memoizedState,t]}function Vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nS(){return Rn().memoizedState}function Vc(t,e,n,r){var i=Xn();Qe.flags|=t,i.memoizedState=Vl(1|e,n,void 0,r===void 0?null:r)}function hd(t,e,n,r){var i=Rn();r=r===void 0?null:r;var s=void 0;if(ct!==null){var o=ct.memoizedState;if(s=o.destroy,r!==null&&$g(r,o.deps)){i.memoizedState=Vl(e,n,s,r);return}}Qe.flags|=t,i.memoizedState=Vl(1|e,n,s,r)}function Lw(t,e){return Vc(8390656,8,t,e)}function Gg(t,e){return hd(2048,8,t,e)}function rS(t,e){return hd(4,2,t,e)}function iS(t,e){return hd(4,4,t,e)}function sS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function oS(t,e,n){return n=n!=null?n.concat([t]):null,hd(4,4,sS.bind(null,e,t),n)}function Kg(){}function aS(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$g(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lS(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$g(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function uS(t,e,n){return ms&21?(Gn(n,e)||(n=pI(),Qe.lanes|=n,gs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function qP(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=Yf.transition;Yf.transition={};try{t(!1),e()}finally{Ie=n,Yf.transition=r}}function cS(){return Rn().memoizedState}function GP(t,e,n){var r=vi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hS(t))dS(e,n);else if(n=qI(t,e,n,r),n!==null){var i=Kt();$n(n,t,r,i),fS(n,e,r)}}function KP(t,e,n){var r=vi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hS(t))dS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Gn(a,o)){var l=e.interleaved;l===null?(i.next=i,Fg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=qI(t,e,i,r),n!==null&&(i=Kt(),$n(n,t,r,i),fS(n,e,r))}}function hS(t){var e=t.alternate;return t===Qe||e!==null&&e===Qe}function dS(t,e){al=_h=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cg(t,n)}}var yh={readContext:xn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},QP={readContext:xn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:xn,useEffect:Lw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4194308,4,sS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vc(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GP.bind(null,Qe,t),[r.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Ow,useDebugValue:Kg,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Ow(!1),e=t[0];return t=qP.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Qe,i=Xn();if($e){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Et===null)throw Error(B(349));ms&30||XI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lw(ZI.bind(null,r,s,t),[t]),r.flags|=2048,Vl(9,JI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Et.identifierPrefix;if($e){var n=Tr,r=Er;n=(r&~(1<<32-Wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ll++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YP={readContext:xn,useCallback:aS,useContext:xn,useEffect:Gg,useImperativeHandle:oS,useInsertionEffect:rS,useLayoutEffect:iS,useMemo:lS,useReducer:Xf,useRef:nS,useState:function(){return Xf(Ml)},useDebugValue:Kg,useDeferredValue:function(t){var e=Rn();return uS(e,ct.memoizedState,t)},useTransition:function(){var t=Xf(Ml)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:QI,useSyncExternalStore:YI,useId:cS,unstable_isNewReconciler:!1},XP={readContext:xn,useCallback:aS,useContext:xn,useEffect:Gg,useImperativeHandle:oS,useInsertionEffect:rS,useLayoutEffect:iS,useMemo:lS,useReducer:Jf,useRef:nS,useState:function(){return Jf(Ml)},useDebugValue:Kg,useDeferredValue:function(t){var e=Rn();return ct===null?e.memoizedState=t:uS(e,ct.memoizedState,t)},useTransition:function(){var t=Jf(Ml)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:QI,useSyncExternalStore:YI,useId:cS,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=Xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function om(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dd={isMounted:function(t){return(t=t._reactInternals)?Ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=vi(t),s=xr(r,i);s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&($n(e,t,i,r),Lc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=vi(t),s=xr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&($n(e,t,i,r),Lc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),r=vi(t),i=xr(n,r);i.tag=2,e!=null&&(i.callback=e),e=_i(t,i,r),e!==null&&($n(e,t,r,n),Lc(e,t,r))}};function Mw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Al(n,r)||!Al(i,s):!0}function pS(t,e,n){var r=!1,i=xi,s=e.contextType;return typeof s=="object"&&s!==null?s=xn(s):(i=rn(e)?fs:Wt.current,r=e.contextTypes,s=(r=r!=null)?Po(t,i):xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dd.enqueueReplaceState(e,e.state,null)}function am(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ug(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xn(s):(s=rn(e)?fs:Wt.current,i.context=Po(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(om(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dd.enqueueReplaceState(i,i.state,null),mh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Oo(t,e){try{var n="",r=e;do n+=C1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JP=typeof WeakMap=="function"?WeakMap:Map;function mS(t,e,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wh||(wh=!0,ym=r),lm(t,e)},n}function gS(t,e,n){n=xr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lm(t,e),typeof r!="function"&&(yi===null?yi=new Set([this]):yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dN.bind(null,t,e,n),e.then(t,t))}function Fw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xr(-1,1),e.tag=2,_i(n,e,1))),n.lanes|=1),t)}var ZP=$r.ReactCurrentOwner,en=!1;function qt(t,e,n,r){e.child=t===null?HI(e,null,n,r):bo(e,t.child,n,r)}function Bw(t,e,n,r,i){n=n.render;var s=e.ref;return Eo(e,i),r=Hg(t,e,n,r,s,i),n=qg(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mr(t,e,i)):($e&&n&&Dg(e),e.flags|=1,qt(t,e,r,i),e.child)}function zw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!n_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_S(t,e,s,r,i)):(t=Bc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Al,n(o,r)&&t.ref===e.ref)return Mr(t,e,i)}return e.flags|=1,t=wi(s,r),t.ref=e.ref,t.return=e,e.child=t}function _S(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Al(s,r)&&t.ref===e.ref)if(en=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,Mr(t,e,i)}return um(t,e,n,r,i)}function yS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(mo,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Le(mo,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Le(mo,hn),hn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Le(mo,hn),hn|=r;return qt(t,e,i,n),e.child}function vS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function um(t,e,n,r,i){var s=rn(n)?fs:Wt.current;return s=Po(e,s),Eo(e,i),n=Hg(t,e,n,r,s,i),r=qg(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mr(t,e,i)):($e&&r&&Dg(e),e.flags|=1,qt(t,e,n,i),e.child)}function Ww(t,e,n,r,i){if(rn(n)){var s=!0;ch(e)}else s=!1;if(Eo(e,i),e.stateNode===null)jc(t,e),pS(e,n,r),am(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=xn(c):(c=rn(n)?fs:Wt.current,c=Po(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Vw(e,o,r,c),ni=!1;var m=e.memoizedState;o.state=m,mh(e,r,o,i),l=e.memoizedState,a!==r||m!==l||nn.current||ni?(typeof h=="function"&&(om(e,n,h,r),l=e.memoizedState),(a=ni||Mw(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,GI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xn(l):(l=rn(n)?fs:Wt.current,l=Po(e,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Vw(e,o,r,l),ni=!1,m=e.memoizedState,o.state=m,mh(e,r,o,i);var w=e.memoizedState;a!==f||m!==w||nn.current||ni?(typeof v=="function"&&(om(e,n,v,r),w=e.memoizedState),(c=ni||Mw(e,n,c,r,m,w,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return cm(t,e,n,r,s,i)}function cm(t,e,n,r,i,s){vS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Rw(e,n,!1),Mr(t,e,s);r=e.stateNode,ZP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bo(e,t.child,null,s),e.child=bo(e,null,a,s)):qt(t,e,a,s),e.memoizedState=r.state,i&&Rw(e,n,!0),e.child}function wS(t){var e=t.stateNode;e.pendingContext?xw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xw(t,e.context,!1),Bg(t,e.containerInfo)}function $w(t,e,n,r,i){return No(),Lg(i),e.flags|=256,qt(t,e,n,r),e.child}var hm={dehydrated:null,treeContext:null,retryLane:0};function dm(t){return{baseLanes:t,cachePool:null,transitions:null}}function ES(t,e,n){var r=e.pendingProps,i=qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Le(qe,i&1),t===null)return im(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=md(o,r,0,null),t=us(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dm(n),e.memoizedState=hm,t):Qg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return eN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=wi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wi(a,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?dm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hm,r}return s=t.child,t=s.sibling,r=wi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qg(t,e){return e=md({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mc(t,e,n,r){return r!==null&&Lg(r),bo(e,t.child,null,n),t=Qg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zf(Error(B(422))),mc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=md({mode:"visible",children:r.children},i,0,null),s=us(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bo(e,t.child,null,o),e.child.memoizedState=dm(o),e.memoizedState=hm,s);if(!(e.mode&1))return mc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Zf(s,r,void 0),mc(t,e,o,r)}if(a=(o&t.childLanes)!==0,en||a){if(r=Et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lr(t,i),$n(r,t,i,-1))}return t_(),r=Zf(Error(B(421))),mc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dn=gi(i.nextSibling),pn=e,$e=!0,Fn=null,t!==null&&(wn[En++]=Er,wn[En++]=Tr,wn[En++]=ps,Er=t.id,Tr=t.overflow,ps=e),e=Qg(e,r.children),e.flags|=4096,e)}function Hw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sm(t.return,e,n)}function ep(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function TS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qt(t,e,r.children,n),r=qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hw(t,n,e);else if(t.tag===19)Hw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Le(qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&gh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ep(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&gh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ep(e,!0,n,null,s);break;case"together":ep(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tN(t,e,n){switch(e.tag){case 3:wS(e),No();break;case 5:KI(e);break;case 1:rn(e.type)&&ch(e);break;case 4:Bg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Le(fh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Le(qe,qe.current&1),e.flags|=128,null):n&e.child.childLanes?ES(t,e,n):(Le(qe,qe.current&1),t=Mr(t,e,n),t!==null?t.sibling:null);Le(qe,qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return TS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Le(qe,qe.current),r)break;return null;case 22:case 23:return e.lanes=0,yS(t,e,n)}return Mr(t,e,n)}var IS,fm,SS,CS;IS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fm=function(){};SS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ns(nr.current);var s=null;switch(n){case"input":i=Lp(t,i),r=Lp(t,r),s=[];break;case"select":i=Xe({},i,{value:void 0}),r=Xe({},r,{value:void 0}),s=[];break;case"textarea":i=jp(t,i),r=jp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lh)}Up(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Tl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Tl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&je("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};CS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Va(t,e){if(!$e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nN(t,e,n){var r=e.pendingProps;switch(Og(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return rn(e.type)&&uh(),Vt(e),null;case 3:return r=e.stateNode,Do(),Ue(nn),Ue(Wt),Wg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Em(Fn),Fn=null))),fm(t,e),Vt(e),null;case 5:zg(e);var i=ns(Ol.current);if(n=e.type,t!==null&&e.stateNode!=null)SS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Vt(e),null}if(t=ns(nr.current),fc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zn]=e,r[bl]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<Qa.length;i++)je(Qa[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":ew(r,s),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},je("invalid",r);break;case"textarea":nw(r,s),je("invalid",r)}Up(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&dc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&dc(r.textContent,a,t),i=["children",""+a]):Tl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&je("scroll",r)}switch(n){case"input":ic(r),tw(r,s,!0);break;case"textarea":ic(r),rw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=lh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ZT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zn]=e,t[bl]=r,IS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bp(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qa.length;i++)je(Qa[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":ew(t,r),i=Lp(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Xe({},r,{value:void 0}),je("invalid",t);break;case"textarea":nw(t,r),i=jp(t,r),je("invalid",t);break;default:i=r}Up(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?nI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&eI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Il(t,l):typeof l=="number"&&Il(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Tl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&je("scroll",t):l!=null&&vg(t,s,l,o))}switch(n){case"input":ic(t),tw(t,r,!1);break;case"textarea":ic(t),rw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ki(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_o(t,!!r.multiple,s,!1):r.defaultValue!=null&&_o(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=lh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)CS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ns(Ol.current),ns(nr.current),fc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zn]=e,(s=r.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:dc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zn]=e,e.stateNode=r}return Vt(e),null;case 13:if(Ue(qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($e&&dn!==null&&e.mode&1&&!(e.flags&128))WI(),No(),e.flags|=98560,s=!1;else if(s=fc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Zn]=e}else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Fn!==null&&(Em(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||qe.current&1?dt===0&&(dt=3):t_())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Do(),fm(t,e),t===null&&Pl(e.stateNode.containerInfo),Vt(e),null;case 10:return jg(e.type._context),Vt(e),null;case 17:return rn(e.type)&&uh(),Vt(e),null;case 19:if(Ue(qe),s=e.memoizedState,s===null)return Vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Va(s,!1);else{if(dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gh(t),o!==null){for(e.flags|=128,Va(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Le(qe,qe.current&1|2),e.child}t=t.sibling}s.tail!==null&&it()>Lo&&(e.flags|=128,r=!0,Va(s,!1),e.lanes=4194304)}else{if(!r)if(t=gh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return Vt(e),null}else 2*it()-s.renderingStartTime>Lo&&n!==1073741824&&(e.flags|=128,r=!0,Va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,n=qe.current,Le(qe,r?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return e_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function rN(t,e){switch(Og(e),e.tag){case 1:return rn(e.type)&&uh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Do(),Ue(nn),Ue(Wt),Wg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zg(e),null;case 13:if(Ue(qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));No()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ue(qe),null;case 4:return Do(),null;case 10:return jg(e.type._context),null;case 22:case 23:return e_(),null;case 24:return null;default:return null}}var gc=!1,Ut=!1,iN=typeof WeakSet=="function"?WeakSet:Set,G=null;function po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){tt(t,e,r)}else n.current=null}function pm(t,e,n){try{n()}catch(r){tt(t,e,r)}}var qw=!1;function sN(t,e){if(Xp=sh,t=PI(),bg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jp={focusedElem:t,selectionRange:n},sh=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var A=w.memoizedProps,P=w.memoizedState,T=e.stateNode,E=T.getSnapshotBeforeUpdate(e.elementType===e.type?A:Vn(e.type,A),P);T.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(D){tt(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return w=qw,qw=!1,w}function ll(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&pm(e,n,s)}i=i.next}while(i!==r)}}function fd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function mm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kS(t){var e=t.alternate;e!==null&&(t.alternate=null,kS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[bl],delete e[tm],delete e[BP],delete e[zP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xS(t){return t.tag===5||t.tag===3||t.tag===4}function Gw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lh));else if(r!==4&&(t=t.child,t!==null))for(gm(t,e,n),t=t.sibling;t!==null;)gm(t,e,n),t=t.sibling}function _m(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_m(t,e,n),t=t.sibling;t!==null;)_m(t,e,n),t=t.sibling}var Ct=null,jn=!1;function Zr(t,e,n){for(n=n.child;n!==null;)RS(t,e,n),n=n.sibling}function RS(t,e,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(sd,n)}catch{}switch(n.tag){case 5:Ut||po(n,e);case 6:var r=Ct,i=jn;Ct=null,Zr(t,e,n),Ct=r,jn=i,Ct!==null&&(jn?(t=Ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(jn?(t=Ct,n=n.stateNode,t.nodeType===8?Gf(t.parentNode,n):t.nodeType===1&&Gf(t,n),xl(t)):Gf(Ct,n.stateNode));break;case 4:r=Ct,i=jn,Ct=n.stateNode.containerInfo,jn=!0,Zr(t,e,n),Ct=r,jn=i;break;case 0:case 11:case 14:case 15:if(!Ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pm(n,e,o),i=i.next}while(i!==r)}Zr(t,e,n);break;case 1:if(!Ut&&(po(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){tt(n,e,a)}Zr(t,e,n);break;case 21:Zr(t,e,n);break;case 22:n.mode&1?(Ut=(r=Ut)||n.memoizedState!==null,Zr(t,e,n),Ut=r):Zr(t,e,n);break;default:Zr(t,e,n)}}function Kw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iN),e.forEach(function(r){var i=pN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,jn=!1;break e;case 3:Ct=a.stateNode.containerInfo,jn=!0;break e;case 4:Ct=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Ct===null)throw Error(B(160));RS(s,o,i),Ct=null,jn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){tt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)AS(e,t),e=e.sibling}function AS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Yn(t),r&4){try{ll(3,t,t.return),fd(3,t)}catch(A){tt(t,t.return,A)}try{ll(5,t,t.return)}catch(A){tt(t,t.return,A)}}break;case 1:Ln(e,t),Yn(t),r&512&&n!==null&&po(n,n.return);break;case 5:if(Ln(e,t),Yn(t),r&512&&n!==null&&po(n,n.return),t.flags&32){var i=t.stateNode;try{Il(i,"")}catch(A){tt(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&XT(i,s),Bp(a,o);var c=Bp(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?nI(i,f):h==="dangerouslySetInnerHTML"?eI(i,f):h==="children"?Il(i,f):vg(i,h,f,c)}switch(a){case"input":Mp(i,s);break;case"textarea":JT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?_o(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?_o(i,!!s.multiple,s.defaultValue,!0):_o(i,!!s.multiple,s.multiple?[]:"",!1))}i[bl]=s}catch(A){tt(t,t.return,A)}}break;case 6:if(Ln(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){tt(t,t.return,A)}}break;case 3:if(Ln(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xl(e.containerInfo)}catch(A){tt(t,t.return,A)}break;case 4:Ln(e,t),Yn(t);break;case 13:Ln(e,t),Yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jg=it())),r&4&&Kw(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ut=(c=Ut)||h,Ln(e,t),Ut=c):Ln(e,t),Yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(G=t,h=t.child;h!==null;){for(f=G=h;G!==null;){switch(m=G,v=m.child,m.tag){case 0:case 11:case 14:case 15:ll(4,m,m.return);break;case 1:po(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(A){tt(r,n,A)}}break;case 5:po(m,m.return);break;case 22:if(m.memoizedState!==null){Yw(f);continue}}v!==null?(v.return=m,G=v):Yw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tI("display",o))}catch(A){tt(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){tt(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ln(e,t),Yn(t),r&4&&Kw(t);break;case 21:break;default:Ln(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xS(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Il(i,""),r.flags&=-33);var s=Gw(t);_m(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Gw(t);gm(t,a,o);break;default:throw Error(B(161))}}catch(l){tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oN(t,e,n){G=t,PS(t)}function PS(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ut;a=gc;var c=Ut;if(gc=o,(Ut=l)&&!c)for(G=i;G!==null;)o=G,l=o.child,o.tag===22&&o.memoizedState!==null?Xw(i):l!==null?(l.return=o,G=l):Xw(i);for(;s!==null;)G=s,PS(s),s=s.sibling;G=i,gc=a,Ut=c}Qw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):Qw(t)}}function Qw(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ut||fd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&xl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ut||e.flags&512&&mm(e)}catch(m){tt(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Yw(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Xw(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fd(4,e)}catch(l){tt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){tt(e,i,l)}}var s=e.return;try{mm(e)}catch(l){tt(e,s,l)}break;case 5:var o=e.return;try{mm(e)}catch(l){tt(e,o,l)}}}catch(l){tt(e,e.return,l)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var aN=Math.ceil,vh=$r.ReactCurrentDispatcher,Yg=$r.ReactCurrentOwner,Sn=$r.ReactCurrentBatchConfig,ge=0,Et=null,ot=null,Rt=0,hn=0,mo=Vi(0),dt=0,jl=null,gs=0,pd=0,Xg=0,ul=null,Jt=null,Jg=0,Lo=1/0,_r=null,wh=!1,ym=null,yi=null,_c=!1,ui=null,Eh=0,cl=0,vm=null,Fc=-1,Uc=0;function Kt(){return ge&6?it():Fc!==-1?Fc:Fc=it()}function vi(t){return t.mode&1?ge&2&&Rt!==0?Rt&-Rt:$P.transition!==null?(Uc===0&&(Uc=pI()),Uc):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:EI(t.type)),t):1}function $n(t,e,n,r){if(50<cl)throw cl=0,vm=null,Error(B(185));cu(t,n,r),(!(ge&2)||t!==Et)&&(t===Et&&(!(ge&2)&&(pd|=n),dt===4&&ii(t,Rt)),sn(t,r),n===1&&ge===0&&!(e.mode&1)&&(Lo=it()+500,cd&&ji()))}function sn(t,e){var n=t.callbackNode;$1(t,e);var r=ih(t,t===Et?Rt:0);if(r===0)n!==null&&ow(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ow(n),e===1)t.tag===0?WP(Jw.bind(null,t)):UI(Jw.bind(null,t)),FP(function(){!(ge&6)&&ji()}),n=null;else{switch(mI(r)){case 1:n=Sg;break;case 4:n=dI;break;case 16:n=rh;break;case 536870912:n=fI;break;default:n=rh}n=jS(n,NS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function NS(t,e){if(Fc=-1,Uc=0,ge&6)throw Error(B(327));var n=t.callbackNode;if(To()&&t.callbackNode!==n)return null;var r=ih(t,t===Et?Rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Th(t,r);else{e=r;var i=ge;ge|=2;var s=DS();(Et!==t||Rt!==e)&&(_r=null,Lo=it()+500,ls(t,e));do try{cN();break}catch(a){bS(t,a)}while(!0);Vg(),vh.current=s,ge=i,ot!==null?e=0:(Et=null,Rt=0,e=dt)}if(e!==0){if(e===2&&(i=qp(t),i!==0&&(r=i,e=wm(t,i))),e===1)throw n=jl,ls(t,0),ii(t,r),sn(t,it()),n;if(e===6)ii(t,r);else{if(i=t.current.alternate,!(r&30)&&!lN(i)&&(e=Th(t,r),e===2&&(s=qp(t),s!==0&&(r=s,e=wm(t,s))),e===1))throw n=jl,ls(t,0),ii(t,r),sn(t,it()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Xi(t,Jt,_r);break;case 3:if(ii(t,r),(r&130023424)===r&&(e=Jg+500-it(),10<e)){if(ih(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=em(Xi.bind(null,t,Jt,_r),e);break}Xi(t,Jt,_r);break;case 4:if(ii(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=it()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aN(r/1960))-r,10<r){t.timeoutHandle=em(Xi.bind(null,t,Jt,_r),r);break}Xi(t,Jt,_r);break;case 5:Xi(t,Jt,_r);break;default:throw Error(B(329))}}}return sn(t,it()),t.callbackNode===n?NS.bind(null,t):null}function wm(t,e){var n=ul;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=Th(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&Em(e)),t}function Em(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function lN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ii(t,e){for(e&=~Xg,e&=~pd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),r=1<<n;t[n]=-1,e&=~r}}function Jw(t){if(ge&6)throw Error(B(327));To();var e=ih(t,0);if(!(e&1))return sn(t,it()),null;var n=Th(t,e);if(t.tag!==0&&n===2){var r=qp(t);r!==0&&(e=r,n=wm(t,r))}if(n===1)throw n=jl,ls(t,0),ii(t,e),sn(t,it()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xi(t,Jt,_r),sn(t,it()),null}function Zg(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(Lo=it()+500,cd&&ji())}}function _s(t){ui!==null&&ui.tag===0&&!(ge&6)&&To();var e=ge;ge|=1;var n=Sn.transition,r=Ie;try{if(Sn.transition=null,Ie=1,t)return t()}finally{Ie=r,Sn.transition=n,ge=e,!(ge&6)&&ji()}}function e_(){hn=mo.current,Ue(mo)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jP(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(Og(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uh();break;case 3:Do(),Ue(nn),Ue(Wt),Wg();break;case 5:zg(r);break;case 4:Do();break;case 13:Ue(qe);break;case 19:Ue(qe);break;case 10:jg(r.type._context);break;case 22:case 23:e_()}n=n.return}if(Et=t,ot=t=wi(t.current,null),Rt=hn=e,dt=0,jl=null,Xg=pd=gs=0,Jt=ul=null,ts!==null){for(e=0;e<ts.length;e++)if(n=ts[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ts=null}return t}function bS(t,e){do{var n=ot;try{if(Vg(),Mc.current=yh,_h){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_h=!1}if(ms=0,yt=ct=Qe=null,al=!1,Ll=0,Yg.current=null,n===null||n.return===null){dt=1,jl=e,ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Fw(o);if(v!==null){v.flags&=-257,Uw(v,o,a,s,e),v.mode&1&&jw(s,c,e),e=v,l=c;var w=e.updateQueue;if(w===null){var A=new Set;A.add(l),e.updateQueue=A}else w.add(l);break e}else{if(!(e&1)){jw(s,c,e),t_();break e}l=Error(B(426))}}else if($e&&a.mode&1){var P=Fw(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Uw(P,o,a,s,e),Lg(Oo(l,a));break e}}s=l=Oo(l,a),dt!==4&&(dt=2),ul===null?ul=[s]:ul.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=mS(s,l,e);bw(s,T);break e;case 1:a=l;var E=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(yi===null||!yi.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=gS(s,a,e);bw(s,D);break e}}s=s.return}while(s!==null)}LS(n)}catch(F){e=F,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(!0)}function DS(){var t=vh.current;return vh.current=yh,t===null?yh:t}function t_(){(dt===0||dt===3||dt===2)&&(dt=4),Et===null||!(gs&268435455)&&!(pd&268435455)||ii(Et,Rt)}function Th(t,e){var n=ge;ge|=2;var r=DS();(Et!==t||Rt!==e)&&(_r=null,ls(t,e));do try{uN();break}catch(i){bS(t,i)}while(!0);if(Vg(),ge=n,vh.current=r,ot!==null)throw Error(B(261));return Et=null,Rt=0,dt}function uN(){for(;ot!==null;)OS(ot)}function cN(){for(;ot!==null&&!L1();)OS(ot)}function OS(t){var e=VS(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?LS(t):ot=e,Yg.current=null}function LS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rN(n,e),n!==null){n.flags&=32767,ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dt=6,ot=null;return}}else if(n=nN(n,e,hn),n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);dt===0&&(dt=5)}function Xi(t,e,n){var r=Ie,i=Sn.transition;try{Sn.transition=null,Ie=1,hN(t,e,n,r)}finally{Sn.transition=i,Ie=r}return null}function hN(t,e,n,r){do To();while(ui!==null);if(ge&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(H1(t,s),t===Et&&(ot=Et=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_c||(_c=!0,jS(rh,function(){return To(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var o=Ie;Ie=1;var a=ge;ge|=4,Yg.current=null,sN(t,n),AS(n,t),NP(Jp),sh=!!Xp,Jp=Xp=null,t.current=n,oN(n),M1(),ge=a,Ie=o,Sn.transition=s}else t.current=n;if(_c&&(_c=!1,ui=t,Eh=i),s=t.pendingLanes,s===0&&(yi=null),F1(n.stateNode),sn(t,it()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wh)throw wh=!1,t=ym,ym=null,t;return Eh&1&&t.tag!==0&&To(),s=t.pendingLanes,s&1?t===vm?cl++:(cl=0,vm=t):cl=0,ji(),null}function To(){if(ui!==null){var t=mI(Eh),e=Sn.transition,n=Ie;try{if(Sn.transition=null,Ie=16>t?16:t,ui===null)var r=!1;else{if(t=ui,ui=null,Eh=0,ge&6)throw Error(B(331));var i=ge;for(ge|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(G=c;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:ll(8,h,s)}var f=h.child;if(f!==null)f.return=h,G=f;else for(;G!==null;){h=G;var m=h.sibling,v=h.return;if(kS(h),h===c){G=null;break}if(m!==null){m.return=v,G=m;break}G=v}}}var w=s.alternate;if(w!==null){var A=w.child;if(A!==null){w.child=null;do{var P=A.sibling;A.sibling=null,A=P}while(A!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ll(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,G=T;break e}G=s.return}}var E=t.current;for(G=E;G!==null;){o=G;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,G=I;else e:for(o=E;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fd(9,a)}}catch(F){tt(a,a.return,F)}if(a===o){G=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,G=D;break e}G=a.return}}if(ge=i,ji(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(sd,t)}catch{}r=!0}return r}finally{Ie=n,Sn.transition=e}}return!1}function Zw(t,e,n){e=Oo(n,e),e=mS(t,e,1),t=_i(t,e,1),e=Kt(),t!==null&&(cu(t,1,e),sn(t,e))}function tt(t,e,n){if(t.tag===3)Zw(t,t,n);else for(;e!==null;){if(e.tag===3){Zw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yi===null||!yi.has(r))){t=Oo(n,t),t=gS(e,t,1),e=_i(e,t,1),t=Kt(),e!==null&&(cu(e,1,t),sn(e,t));break}}e=e.return}}function dN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Et===t&&(Rt&n)===n&&(dt===4||dt===3&&(Rt&130023424)===Rt&&500>it()-Jg?ls(t,0):Xg|=n),sn(t,e)}function MS(t,e){e===0&&(t.mode&1?(e=ac,ac<<=1,!(ac&130023424)&&(ac=4194304)):e=1);var n=Kt();t=Lr(t,e),t!==null&&(cu(t,e,n),sn(t,n))}function fN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),MS(t,n)}function pN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),MS(t,n)}var VS;VS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,tN(t,e,n);en=!!(t.flags&131072)}else en=!1,$e&&e.flags&1048576&&BI(e,dh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jc(t,e),t=e.pendingProps;var i=Po(e,Wt.current);Eo(e,n),i=Hg(null,e,r,t,i,n);var s=qg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(r)?(s=!0,ch(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ug(e),i.updater=dd,e.stateNode=i,i._reactInternals=e,am(e,r,t,n),e=cm(null,e,r,!0,s,n)):(e.tag=0,$e&&s&&Dg(e),qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gN(r),t=Vn(r,t),i){case 0:e=um(null,e,r,t,n);break e;case 1:e=Ww(null,e,r,t,n);break e;case 11:e=Bw(null,e,r,t,n);break e;case 14:e=zw(null,e,r,Vn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),um(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Ww(t,e,r,i,n);case 3:e:{if(wS(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,GI(t,e),mh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Oo(Error(B(423)),e),e=$w(t,e,r,n,i);break e}else if(r!==i){i=Oo(Error(B(424)),e),e=$w(t,e,r,n,i);break e}else for(dn=gi(e.stateNode.containerInfo.firstChild),pn=e,$e=!0,Fn=null,n=HI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(No(),r===i){e=Mr(t,e,n);break e}qt(t,e,r,n)}e=e.child}return e;case 5:return KI(e),t===null&&im(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zp(r,i)?o=null:s!==null&&Zp(r,s)&&(e.flags|=32),vS(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&im(e),null;case 13:return ES(t,e,n);case 4:return Bg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bo(e,null,r,n):qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),Bw(t,e,r,i,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Le(fh,r._currentValue),r._currentValue=o,s!==null)if(Gn(s.value,o)){if(s.children===i.children&&!nn.current){e=Mr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=xr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Eo(e,n),i=xn(i),r=r(i),e.flags|=1,qt(t,e,r,n),e.child;case 14:return r=e.type,i=Vn(r,e.pendingProps),i=Vn(r.type,i),zw(t,e,r,i,n);case 15:return _S(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),jc(t,e),e.tag=1,rn(r)?(t=!0,ch(e)):t=!1,Eo(e,n),pS(e,r,i),am(e,r,i,n),cm(null,e,r,!0,t,n);case 19:return TS(t,e,n);case 22:return yS(t,e,n)}throw Error(B(156,e.tag))};function jS(t,e){return hI(t,e)}function mN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,r){return new mN(t,e,n,r)}function n_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gN(t){if(typeof t=="function")return n_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Eg)return 11;if(t===Tg)return 14}return 2}function wi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")n_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case io:return us(n.children,i,s,e);case wg:o=8,i|=8;break;case Np:return t=Tn(12,n,e,i|2),t.elementType=Np,t.lanes=s,t;case bp:return t=Tn(13,n,e,i),t.elementType=bp,t.lanes=s,t;case Dp:return t=Tn(19,n,e,i),t.elementType=Dp,t.lanes=s,t;case KT:return md(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qT:o=10;break e;case GT:o=9;break e;case Eg:o=11;break e;case Tg:o=14;break e;case ti:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function us(t,e,n,r){return t=Tn(7,t,r,e),t.lanes=n,t}function md(t,e,n,r){return t=Tn(22,t,r,e),t.elementType=KT,t.lanes=n,t.stateNode={isHidden:!1},t}function tp(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function np(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _N(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mf(0),this.expirationTimes=Mf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function r_(t,e,n,r,i,s,o,a,l){return t=new _N(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ug(s),t}function yN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function FS(t){if(!t)return xi;t=t._reactInternals;e:{if(Ns(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(rn(n))return FI(t,n,e)}return e}function US(t,e,n,r,i,s,o,a,l){return t=r_(n,r,!0,t,i,s,o,a,l),t.context=FS(null),n=t.current,r=Kt(),i=vi(n),s=xr(r,i),s.callback=e??null,_i(n,s,i),t.current.lanes=i,cu(t,i,r),sn(t,r),t}function gd(t,e,n,r){var i=e.current,s=Kt(),o=vi(i);return n=FS(n),e.context===null?e.context=n:e.pendingContext=n,e=xr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_i(i,e,o),t!==null&&($n(t,i,o,s),Lc(t,i,o)),o}function Ih(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function e0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function i_(t,e){e0(t,e),(t=t.alternate)&&e0(t,e)}function vN(){return null}var BS=typeof reportError=="function"?reportError:function(t){console.error(t)};function s_(t){this._internalRoot=t}_d.prototype.render=s_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));gd(t,e,null,null)};_d.prototype.unmount=s_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){gd(null,t,null,null)}),e[Or]=null}};function _d(t){this._internalRoot=t}_d.prototype.unstable_scheduleHydration=function(t){if(t){var e=yI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ri.length&&e!==0&&e<ri[n].priority;n++);ri.splice(n,0,t),n===0&&wI(t)}};function o_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function t0(){}function wN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ih(o);s.call(c)}}var o=US(e,r,t,0,null,!1,!1,"",t0);return t._reactRootContainer=o,t[Or]=o.current,Pl(t.nodeType===8?t.parentNode:t),_s(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ih(l);a.call(c)}}var l=r_(t,0,!1,null,null,!1,!1,"",t0);return t._reactRootContainer=l,t[Or]=l.current,Pl(t.nodeType===8?t.parentNode:t),_s(function(){gd(e,l,n,r)}),l}function vd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ih(o);a.call(l)}}gd(e,o,t,i)}else o=wN(n,e,t,i,r);return Ih(o)}gI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ka(e.pendingLanes);n!==0&&(Cg(e,n|1),sn(e,it()),!(ge&6)&&(Lo=it()+500,ji()))}break;case 13:_s(function(){var r=Lr(t,1);if(r!==null){var i=Kt();$n(r,t,1,i)}}),i_(t,1)}};kg=function(t){if(t.tag===13){var e=Lr(t,134217728);if(e!==null){var n=Kt();$n(e,t,134217728,n)}i_(t,134217728)}};_I=function(t){if(t.tag===13){var e=vi(t),n=Lr(t,e);if(n!==null){var r=Kt();$n(n,t,e,r)}i_(t,e)}};yI=function(){return Ie};vI=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};Wp=function(t,e,n){switch(e){case"input":if(Mp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ud(r);if(!i)throw Error(B(90));YT(r),Mp(r,i)}}}break;case"textarea":JT(t,n);break;case"select":e=n.value,e!=null&&_o(t,!!n.multiple,e,!1)}};sI=Zg;oI=_s;var EN={usingClientEntryPoint:!1,Events:[du,lo,ud,rI,iI,Zg]},ja={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TN={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uI(t),t===null?null:t.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||vN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{sd=yc.inject(TN),tr=yc}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EN;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!o_(e))throw Error(B(200));return yN(t,e,null,n)};gn.createRoot=function(t,e){if(!o_(t))throw Error(B(299));var n=!1,r="",i=BS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=r_(t,1,!1,null,null,n,!1,r,i),t[Or]=e.current,Pl(t.nodeType===8?t.parentNode:t),new s_(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=uI(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return _s(t)};gn.hydrate=function(t,e,n){if(!yd(e))throw Error(B(200));return vd(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!o_(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=BS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=US(e,null,t,1,n??null,i,!1,s,o),t[Or]=e.current,Pl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _d(e)};gn.render=function(t,e,n){if(!yd(e))throw Error(B(200));return vd(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!yd(t))throw Error(B(40));return t._reactRootContainer?(_s(function(){vd(null,null,t,!1,function(){t._reactRootContainer=null,t[Or]=null})}),!0):!1};gn.unstable_batchedUpdates=Zg;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yd(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return vd(t,e,n,!1,r)};gn.version="18.3.1-next-f1338f8080-20240426";function zS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zS)}catch(t){console.error(t)}}zS(),zT.exports=gn;var IN=zT.exports,n0=IN;Ap.createRoot=n0.createRoot,Ap.hydrateRoot=n0.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fl.apply(this,arguments)}var ci;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ci||(ci={}));const r0="popstate";function SN(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=bs(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Tm("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:WS(s))}function r(i,s){wd(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return kN(e,n,r,t)}function lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CN(){return Math.random().toString(36).substr(2,8)}function i0(t,e){return{usr:t.state,key:t.key,idx:e}}function Tm(t,e,n,r){return n===void 0&&(n=null),Fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?bs(e):e,{state:n,key:e&&e.key||r||CN()})}function WS(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function bs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function kN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ci.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Fl({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=ci.Pop;let P=h(),T=P==null?null:P-c;c=P,l&&l({action:a,location:A.location,delta:T})}function m(P,T){a=ci.Push;let E=Tm(A.location,P,T);n&&n(E,P),c=h()+1;let I=i0(E,c),D=A.createHref(E);try{o.pushState(I,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}s&&l&&l({action:a,location:A.location,delta:1})}function v(P,T){a=ci.Replace;let E=Tm(A.location,P,T);n&&n(E,P),c=h();let I=i0(E,c),D=A.createHref(E);o.replaceState(I,"",D),s&&l&&l({action:a,location:A.location,delta:0})}function w(P){let T=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof P=="string"?P:WS(P);return E=E.replace(/ $/,"%20"),lt(T,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,T)}let A={get action(){return a},get location(){return t(i,o)},listen(P){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(r0,f),l=P,()=>{i.removeEventListener(r0,f),l=null}},createHref(P){return e(i,P)},createURL:w,encodeLocation(P){let T=w(P);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:v,go(P){return o.go(P)}};return A}var s0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(s0||(s0={}));function xN(t,e,n){return n===void 0&&(n="/"),RN(t,e,n)}function RN(t,e,n,r){let i=typeof e=="string"?bs(e):e,s=qS(i.pathname||"/",n);if(s==null)return null;let o=$S(t);AN(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=BN(s);a=jN(o[l],c)}return a}function $S(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(lt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=cs([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(lt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$S(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:MN(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of HS(s.path))i(s,o,l)}),e}function HS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=HS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function AN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PN=/^:[\w-]+$/,NN=3,bN=2,DN=1,ON=10,LN=-2,o0=t=>t==="*";function MN(t,e){let n=t.split("/"),r=n.length;return n.some(o0)&&(r+=LN),e&&(r+=bN),n.filter(i=>!o0(i)).reduce((i,s)=>i+(PN.test(s)?NN:s===""?DN:ON),r)}function VN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=FN({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),m=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:cs([s,f.pathname]),pathnameBase:qN(cs([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=cs([s,f.pathnameBase]))}return o}function FN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=UN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:v}=h;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const w=a[f];return v&&!w?c[m]=void 0:c[m]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function UN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),wd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function BN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const zN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,WN=t=>zN.test(t);function $N(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?bs(t):t,s;if(n)if(WN(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),wd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=a0(n.substring(1),"/"):s=a0(n,e)}else s=e;return{pathname:s,search:GN(r),hash:KN(i)}}function a0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function HN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function GS(t,e){let n=HN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function KS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=bs(t):(i=Fl({},t),lt(!i.pathname||!i.pathname.includes("?"),rp("?","pathname","search",i)),lt(!i.pathname||!i.pathname.includes("#"),rp("#","pathname","hash",i)),lt(!i.search||!i.search.includes("#"),rp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=$N(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const cs=t=>t.join("/").replace(/\/\/+/g,"/"),qN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),GN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,KN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const QS=["post","put","patch","delete"];new Set(QS);const YN=["get",...QS];new Set(YN);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ul.apply(this,arguments)}const a_=b.createContext(null),XN=b.createContext(null),pu=b.createContext(null),Ed=b.createContext(null),Fi=b.createContext({outlet:null,matches:[],isDataRoute:!1}),YS=b.createContext(null);function mu(){return b.useContext(Ed)!=null}function Td(){return mu()||lt(!1),b.useContext(Ed).location}function XS(t){b.useContext(pu).static||b.useLayoutEffect(t)}function bn(){let{isDataRoute:t}=b.useContext(Fi);return t?cb():JN()}function JN(){mu()||lt(!1);let t=b.useContext(a_),{basename:e,future:n,navigator:r}=b.useContext(pu),{matches:i}=b.useContext(Fi),{pathname:s}=Td(),o=JSON.stringify(GS(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return XS(()=>{a.current=!0}),b.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=KS(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:cs([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function JS(){let{matches:t}=b.useContext(Fi),e=t[t.length-1];return e?e.params:{}}function ZN(t,e){return eb(t,e)}function eb(t,e,n,r){mu()||lt(!1);let{navigator:i}=b.useContext(pu),{matches:s}=b.useContext(Fi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Td(),h;if(e){var f;let P=typeof e=="string"?bs(e):e;l==="/"||(f=P.pathname)!=null&&f.startsWith(l)||lt(!1),h=P}else h=c;let m=h.pathname||"/",v=m;if(l!=="/"){let P=l.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let w=xN(t,{pathname:v}),A=sb(w&&w.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:cs([l,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?l:cs([l,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&A?b.createElement(Ed.Provider,{value:{location:Ul({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ci.Pop}},A):A}function tb(){let t=ub(),e=QN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const nb=b.createElement(tb,null);class rb extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Fi.Provider,{value:this.props.routeContext},b.createElement(YS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ib(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(a_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Fi.Provider,{value:e},r)}function sb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||lt(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:v}=n,w=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||w){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let v,w=!1,A=null,P=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||nb,l&&(c<0&&m===0?(hb("route-fallback"),w=!0,P=null):c===m&&(w=!0,P=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),E=()=>{let I;return v?I=A:w?I=P:f.route.Component?I=b.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=h,b.createElement(ib,{match:f,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?b.createElement(rb,{location:n.location,revalidation:n.revalidation,component:A,error:v,children:E(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):E()},null)}var ZS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ZS||{}),eC=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(eC||{});function ob(t){let e=b.useContext(a_);return e||lt(!1),e}function ab(t){let e=b.useContext(XN);return e||lt(!1),e}function lb(t){let e=b.useContext(Fi);return e||lt(!1),e}function tC(t){let e=lb(),n=e.matches[e.matches.length-1];return n.route.id||lt(!1),n.route.id}function ub(){var t;let e=b.useContext(YS),n=ab(),r=tC();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function cb(){let{router:t}=ob(ZS.UseNavigateStable),e=tC(eC.UseNavigateStable),n=b.useRef(!1);return XS(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ul({fromRouteId:e},s)))},[t,e])}const l0={};function hb(t,e,n){l0[t]||(l0[t]=!0)}function db(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function nC(t){let{to:e,replace:n,state:r,relative:i}=t;mu()||lt(!1);let{future:s,static:o}=b.useContext(pu),{matches:a}=b.useContext(Fi),{pathname:l}=Td(),c=bn(),h=KS(e,GS(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(h);return b.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Mn(t){lt(!1)}function fb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ci.Pop,navigator:s,static:o=!1,future:a}=t;mu()&&lt(!1);let l=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:l,navigator:s,static:o,future:Ul({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=bs(r));let{pathname:h="/",search:f="",hash:m="",state:v=null,key:w="default"}=r,A=b.useMemo(()=>{let P=qS(h,l);return P==null?null:{location:{pathname:P,search:f,hash:m,state:v,key:w},navigationType:i}},[l,h,f,m,v,w,i]);return A==null?null:b.createElement(pu.Provider,{value:c},b.createElement(Ed.Provider,{children:n,value:A}))}function pb(t){let{children:e,location:n}=t;return ZN(Im(e),n)}new Promise(()=>{});function Im(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Im(r.props.children,s));return}r.type!==Mn&&lt(!1),!r.props.index||!r.props.children||lt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Im(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const mb="6";try{window.__reactRouterVersion=mb}catch{}const gb="startTransition",u0=d1[gb];function _b(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=SN({window:i,v5Compat:!0}));let o=s.current,[a,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=b.useCallback(f=>{c&&u0?u0(()=>l(f)):l(f)},[l,c]);return b.useLayoutEffect(()=>o.listen(h),[o,h]),b.useEffect(()=>db(r),[r]),b.createElement(fb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var c0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(c0||(c0={}));var h0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(h0||(h0={}));var d0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=function(t,e){if(!t)throw ia(e)},ia=function(t){return new Error("Firebase Database ("+rC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},l_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(m=64)),r.push(n[h],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new vb;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sC=function(t){const e=iC(t);return l_.encodeByteArray(e,!0)},Sh=function(t){return sC(t).replace(/\./g,"")},Ch=function(t){try{return l_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t){return oC(void 0,t)}function oC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Eb(n)||(t[n]=oC(t[n],e[n]));return t}function Eb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=()=>Tb().__FIREBASE_DEFAULTS__,Sb=()=>{if(typeof process>"u"||typeof d0>"u")return;const t=d0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ch(t[1]);return e&&JSON.parse(e)},Id=()=>{try{return Ib()||Sb()||Cb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aC=t=>{var e,n;return(n=(e=Id())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lC=t=>{const e=aC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uC=()=>{var t;return(t=Id())===null||t===void 0?void 0:t.config},cC=t=>{var e;return(e=Id())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sh(JSON.stringify(n)),Sh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function u_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function kb(){var t;const e=(t=Id())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ab(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pb(){return rC.NODE_ADMIN===!0}function Nb(){return!kb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fC(){try{return typeof indexedDB=="object"}catch{return!1}}function pC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function bb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Db,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ob(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cr(i,a,r)}}function Ob(t,e){return t.replace(Lb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Lb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){return JSON.parse(t)}function ht(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Bl(Ch(s[0])||""),n=Bl(Ch(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Mb=function(t){const e=mC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Vb=function(t){const e=mC(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Mo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function kh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xh(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Vo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(f0(s)&&f0(o)){if(!Vo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function f0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ya(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const m=(i<<5|i>>>27)+c+l+h+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Fb(t,e){const n=new Ub(t,e);return n.subscribe.bind(n)}class Ub{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ip),i.error===void 0&&(i.error=ip),i.complete===void 0&&(i.complete=ip);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ip(){}function jo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,W(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new er;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hb(e))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ji){return this.instances.has(e)}getOptions(e=Ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$b(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ji){return this.component?this.component.multipleInstances?e:Ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $b(t){return t===Ji?void 0:t}function Hb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Gb={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Kb=fe.INFO,Qb={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Yb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Qb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cd{constructor(e){this.name=e,this._logLevel=Kb,this._logHandler=Yb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Xb=(t,e)=>e.some(n=>t instanceof n);let p0,m0;function Jb(){return p0||(p0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zb(){return m0||(m0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gC=new WeakMap,Sm=new WeakMap,_C=new WeakMap,sp=new WeakMap,c_=new WeakMap;function e2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gC.set(n,t)}).catch(()=>{}),c_.set(e,t),e}function t2(t){if(Sm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sm.set(t,e)}let Cm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_C.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function n2(t){Cm=t(Cm)}function r2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(op(this),e,...n);return _C.set(r,e.sort?e.sort():[e]),Rr(r)}:Zb().includes(t)?function(...e){return t.apply(op(this),e),Rr(gC.get(this))}:function(...e){return Rr(t.apply(op(this),e))}}function i2(t){return typeof t=="function"?r2(t):(t instanceof IDBTransaction&&t2(t),Xb(t,Jb())?new Proxy(t,Cm):t)}function Rr(t){if(t instanceof IDBRequest)return e2(t);if(sp.has(t))return sp.get(t);const e=i2(t);return e!==t&&(sp.set(t,e),c_.set(e,t)),e}const op=t=>c_.get(t);function kd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function ap(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Rr(n).then(()=>{})}const s2=["get","getKey","getAll","getAllKeys","count"],o2=["put","add","delete","clear"],lp=new Map;function g0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lp.get(e))return lp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=o2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||s2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return lp.set(e,s),s}n2(t=>({...t,get:(e,n,r)=>g0(e,n)||t.get(e,n,r),has:(e,n)=>!!g0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(l2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function l2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const km="@firebase/app",_0="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Cd("@firebase/app"),u2="@firebase/app-compat",c2="@firebase/analytics-compat",h2="@firebase/analytics",d2="@firebase/app-check-compat",f2="@firebase/app-check",p2="@firebase/auth",m2="@firebase/auth-compat",g2="@firebase/database",_2="@firebase/data-connect",y2="@firebase/database-compat",v2="@firebase/functions",w2="@firebase/functions-compat",E2="@firebase/installations",T2="@firebase/installations-compat",I2="@firebase/messaging",S2="@firebase/messaging-compat",C2="@firebase/performance",k2="@firebase/performance-compat",x2="@firebase/remote-config",R2="@firebase/remote-config-compat",A2="@firebase/storage",P2="@firebase/storage-compat",N2="@firebase/firestore",b2="@firebase/vertexai-preview",D2="@firebase/firestore-compat",O2="firebase",L2="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="[DEFAULT]",M2={[km]:"fire-core",[u2]:"fire-core-compat",[h2]:"fire-analytics",[c2]:"fire-analytics-compat",[f2]:"fire-app-check",[d2]:"fire-app-check-compat",[p2]:"fire-auth",[m2]:"fire-auth-compat",[g2]:"fire-rtdb",[_2]:"fire-data-connect",[y2]:"fire-rtdb-compat",[v2]:"fire-fn",[w2]:"fire-fn-compat",[E2]:"fire-iid",[T2]:"fire-iid-compat",[I2]:"fire-fcm",[S2]:"fire-fcm-compat",[C2]:"fire-perf",[k2]:"fire-perf-compat",[x2]:"fire-rc",[R2]:"fire-rc-compat",[A2]:"fire-gcs",[P2]:"fire-gcs-compat",[N2]:"fire-fst",[D2]:"fire-fst-compat",[b2]:"fire-vertex","fire-js":"fire-js",[O2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=new Map,V2=new Map,Rm=new Map;function y0(t,e){try{t.container.addComponent(e)}catch(n){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(Rm.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;Rm.set(e,t);for(const n of Rh.values())y0(n,t);for(const n of V2.values())y0(n,t);return!0}function Os(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new Ds("app","Firebase",j2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=L2;function yC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ei.create("bad-app-name",{appName:String(i)});if(n||(n=uC()),!n)throw Ei.create("no-options");const s=Rh.get(i);if(s){if(Vo(n,s.options)&&Vo(r,s.config))return s;throw Ei.create("duplicate-app",{appName:i})}const o=new qb(i);for(const l of Rm.values())o.addComponent(l);const a=new F2(n,r,o);return Rh.set(i,a),a}function xd(t=xm){const e=Rh.get(t);if(!e&&t===xm&&uC())return yC();if(!e)throw Ei.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=M2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(a.join(" "));return}Kn(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2="firebase-heartbeat-database",B2=1,zl="firebase-heartbeat-store";let up=null;function vC(){return up||(up=kd(U2,B2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ei.create("idb-open",{originalErrorMessage:t.message})})),up}async function z2(t){try{const n=(await vC()).transaction(zl),r=await n.objectStore(zl).get(wC(t));return await n.done,r}catch(e){if(e instanceof cr)Vr.warn(e.message);else{const n=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(n.message)}}}async function v0(t,e){try{const r=(await vC()).transaction(zl,"readwrite");await r.objectStore(zl).put(e,wC(t)),await r.done}catch(n){if(n instanceof cr)Vr.warn(n.message);else{const r=Ei.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vr.warn(r.message)}}}function wC(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=1024,$2=30*24*60*60*1e3;class H2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new G2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=w0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Vr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=w0(),{heartbeatsToSend:r,unsentEntries:i}=q2(this._heartbeatsCache.heartbeats),s=Sh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vr.warn(n),""}}}function w0(){return new Date().toISOString().substring(0,10)}function q2(t,e=W2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),E0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),E0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class G2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fC()?pC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await z2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return v0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function E0(t){return Sh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(t){Kn(new An("platform-logger",e=>new a2(e),"PRIVATE")),Kn(new An("heartbeat",e=>new H2(e),"PRIVATE")),on(km,_0,t),on(km,_0,"esm2017"),on("fire-js","")}K2("");function h_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function EC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Q2=EC,TC=new Ds("auth","Firebase",EC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=new Cd("@firebase/auth");function Y2(t,...e){Ah.logLevel<=fe.WARN&&Ah.warn(`Auth (${Ls}): ${t}`,...e)}function zc(t,...e){Ah.logLevel<=fe.ERROR&&Ah.error(`Auth (${Ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,...e){throw f_(t,...e)}function Hn(t,...e){return f_(t,...e)}function d_(t,e,n){const r=Object.assign(Object.assign({},Q2()),{[e]:n});return new Ds("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return d_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function X2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Pn(t,"argument-error"),d_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function f_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TC.create(t,...e)}function ne(t,e,...n){if(!t)throw f_(e,...n)}function Ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zc(e),new Error(e)}function jr(t,e){t||Ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function J2(){return T0()==="http:"||T0()==="https:"}function T0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(J2()||Rb()||"connection"in navigator)?navigator.onLine:!0}function eD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.shortDelay=e,this.longDelay=n,jr(n>e,"Short delay should be less than long delay!"),this.isMobile=u_()||dC()}get(){return Z2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t,e){jr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=new gu(3e4,6e4);function Ui(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,r,i={}){return SC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=sa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return xb()||(c.referrerPolicy="no-referrer"),IC.fetch()(CC(t,t.config.apiHost,n,a),c)})}async function SC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tD),e);try{const i=new iD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw vc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw d_(t,h,c);Pn(t,h)}}catch(i){if(i instanceof cr)throw i;Pn(t,"network-request-failed",{message:String(i)})}}async function _u(t,e,n,r,i={}){const s=await Hr(t,e,n,r,i);return"mfaPendingCredential"in s&&Pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function CC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?p_(t.config,i):`${t.config.apiScheme}://${i}`}function rD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Hn(this.auth,"network-request-failed")),nD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Hn(t,e,r);return i.customData._tokenResponse=n,i}function I0(t){return t!==void 0&&t.enterprise!==void 0}class sD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function oD(t,e){return Hr(t,"GET","/v2/recaptchaConfig",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function kC(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lD(t,e=!1){const n=we(t),r=await n.getIdToken(e),i=m_(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hl(cp(i.auth_time)),issuedAtTime:hl(cp(i.iat)),expirationTime:hl(cp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cp(t){return Number(t)*1e3}function m_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ch(n);return i?JSON.parse(i):(zc("Failed to decode base64 JWT payload"),null)}catch(i){return zc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function S0(t){const e=m_(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&uD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hl(this.lastLoginAt),this.creationTime=hl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ph(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fo(t,kC(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xC(s.providerUserInfo):[],a=dD(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function hD(t){const e=we(t);await Ph(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xC(t){return t.map(e=>{var{providerId:n}=e,r=h_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fD(t,e){const n=await SC(t,{},async()=>{const r=sa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=CC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",IC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pD(t,e){return Hr(t,"POST","/v2/accounts:revokeToken",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):S0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=S0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Io;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=h_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fo(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lD(this,e)}reload(){return hD(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ph(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await Fo(this,aD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:D,isAnonymous:F,providerData:V,stsTokenManager:S}=n;ne(I&&S,e,"internal-error");const y=Io.fromJSON(this.name,S);ne(typeof I=="string",e,"internal-error"),ei(f,e.name),ei(m,e.name),ne(typeof D=="boolean",e,"internal-error"),ne(typeof F=="boolean",e,"internal-error"),ei(v,e.name),ei(w,e.name),ei(A,e.name),ei(P,e.name),ei(T,e.name),ei(E,e.name);const C=new Sr({uid:I,auth:e,email:m,emailVerified:D,displayName:f,isAnonymous:F,photoURL:w,phoneNumber:v,tenantId:A,stsTokenManager:y,createdAt:T,lastLoginAt:E});return V&&Array.isArray(V)&&(C.providerData=V.map(k=>Object.assign({},k))),P&&(C._redirectEventId=P),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Io;i.updateFromServerResponse(n);const s=new Sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ph(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?xC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Io;a.updateFromIdToken(r);const l=new Sr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Pm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new Map;function Cr(t){jr(t instanceof Function,"Expected a class definition");let e=C0.get(t);return e?(jr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,C0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}RC.type="NONE";const k0=RC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t,e,n){return`firebase:${t}:${e}:${n}`}class So{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new So(Cr(k0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Cr(k0);const o=Wc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Sr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new So(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new So(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OC(e))return"Blackberry";if(LC(e))return"Webos";if(PC(e))return"Safari";if((e.includes("chrome/")||NC(e))&&!e.includes("edge/"))return"Chrome";if(DC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function AC(t=$t()){return/firefox\//i.test(t)}function PC(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NC(t=$t()){return/crios\//i.test(t)}function bC(t=$t()){return/iemobile/i.test(t)}function DC(t=$t()){return/android/i.test(t)}function OC(t=$t()){return/blackberry/i.test(t)}function LC(t=$t()){return/webos/i.test(t)}function g_(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mD(t=$t()){var e;return g_(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gD(){return Ab()&&document.documentMode===10}function MC(t=$t()){return g_(t)||DC(t)||LC(t)||OC(t)||/windows phone/i.test(t)||bC(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t,e=[]){let n;switch(t){case"Browser":n=x0($t());break;case"Worker":n=`${x0($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(t,e={}){return Hr(t,"GET","/v2/passwordPolicy",Ui(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=6;class wD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new R0(this),this.idTokenSubscription=new R0(this),this.beforeStateQueue=new _D(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await So.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kC(this,{idToken:e}),r=await Sr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ph(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bn(this.app))return Promise.reject(Ar(this));const n=e?we(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yD(this),n=new wD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cr(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await So.create(this,[Cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Y2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bi(t){return we(t)}class R0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fb(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TD(t){Rd=t}function jC(t){return Rd.loadJS(t)}function ID(){return Rd.recaptchaEnterpriseScript}function SD(){return Rd.gapiScript}function CD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kD="recaptcha-enterprise",xD="NO_RECAPTCHA";class RD{constructor(e){this.type=kD,this.auth=Bi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{oD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new sD(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;I0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(xD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&I0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ID();l.length!==0&&(l+=a),jC(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function A0(t,e,n,r=!1){const i=new RD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Nm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await A0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await A0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t,e){const n=Os(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vo(s,e??{}))return i;Pn(i,"already-initialized")}return n.initialize({options:e})}function PD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ND(t,e,n){const r=Bi(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=FC(e),{host:o,port:a}=bD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),DD()}function FC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bD(t){const e=FC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:P0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:P0(o)}}}function P0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,n){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}async function OD(t,e){return Hr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LD(t,e){return _u(t,"POST","/v1/accounts:signInWithPassword",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MD(t,e){return _u(t,"POST","/v1/accounts:signInWithEmailLink",Ui(t,e))}async function VD(t,e){return _u(t,"POST","/v1/accounts:signInWithEmailLink",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends __{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nm(e,n,"signInWithPassword",LD);case"emailLink":return MD(e,{email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nm(e,r,"signUpPassword",OD);case"emailLink":return VD(e,{idToken:n,email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t,e){return _u(t,"POST","/v1/accounts:signInWithIdp",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD="http://localhost";class ys extends __{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=h_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ys(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Co(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Co(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Co(e,n)}buildRequest(){const e={requestUri:jD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UD(t){const e=Ya(Xa(t)).link,n=e?Ya(Xa(e)).deep_link_id:null,r=Ya(Xa(t)).deep_link_id;return(r?Ya(Xa(r)).link:null)||r||n||e||t}class y_{constructor(e){var n,r,i,s,o,a;const l=Ya(Xa(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=FD((i=l.mode)!==null&&i!==void 0?i:null);ne(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UD(e);try{return new y_(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.providerId=oa.PROVIDER_ID}static credential(e,n){return Wl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=y_.parseLink(n);return ne(r,"argument-error"),Wl._fromEmailAndCode(e,r.code,r.tenantId)}}oa.PROVIDER_ID="password";oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends v_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends yu{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.FACEBOOK_SIGN_IN_METHOD="facebook.com";si.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends yu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends yu{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends yu{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ai.credential(n,r)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BD(t,e){return _u(t,"POST","/v1/accounts:signUp",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sr._fromIdTokenResponse(e,r,i),o=N0(r);return new vs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=N0(r);return new vs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function N0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends cr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nh(e,n,r,i)}}function UC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nh._fromErrorAndOperation(t,s,e,r):s})}async function zD(t,e,n=!1){const r=await Fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WD(t,e,n=!1){const{auth:r}=t;if(Bn(r.app))return Promise.reject(Ar(r));const i="reauthenticate";try{const s=await Fo(t,UC(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=m_(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),vs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,e,n=!1){if(Bn(t.app))return Promise.reject(Ar(t));const r="signIn",i=await UC(t,r,e),s=await vs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $D(t,e){return BC(Bi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t){const e=Bi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HD(t,e,n){if(Bn(t.app))return Promise.reject(Ar(t));const r=Bi(t),o=await Nm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&zC(t),l}),a=await vs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function qD(t,e,n){return Bn(t.app)?Promise.reject(Ar(t)):$D(we(t),oa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zC(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GD(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=we(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fo(r,GD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function QD(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function YD(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function XD(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}function JD(t){return we(t).signOut()}const bh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bh,"1"),this.storage.removeItem(bh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=1e3,eO=10;class $C extends WC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=MC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$C.type="LOCAL";const tO=$C;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC extends WC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}HC.type="SESSION";const qC=HC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ad(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await nO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ad.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=w_("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function iO(t){rr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function sO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aO(){return GC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="firebaseLocalStorageDb",lO=1,Dh="firebaseLocalStorage",QC="fbase_key";class vu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pd(t,e){return t.transaction([Dh],e?"readwrite":"readonly").objectStore(Dh)}function uO(){const t=indexedDB.deleteDatabase(KC);return new vu(t).toPromise()}function bm(){const t=indexedDB.open(KC,lO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dh,{keyPath:QC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dh)?e(r):(r.close(),await uO(),e(await bm()))})})}async function b0(t,e,n){const r=Pd(t,!0).put({[QC]:e,value:n});return new vu(r).toPromise()}async function cO(t,e){const n=Pd(t,!1).get(e),r=await new vu(n).toPromise();return r===void 0?null:r.value}function D0(t,e){const n=Pd(t,!0).delete(e);return new vu(n).toPromise()}const hO=800,dO=3;class YC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ad._getInstance(aO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sO(),!this.activeServiceWorker)return;this.sender=new rO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bm();return await b0(e,bh,"1"),await D0(e,bh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>b0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>D0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pd(i,!1).getAll();return new vu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YC.type="LOCAL";const fO=YC;new gu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t,e){return e?Cr(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_ extends __{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Co(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pO(t){return BC(t.auth,new E_(t),t.bypassAuthState)}function mO(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),WD(n,new E_(t),t.bypassAuthState)}async function gO(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),zD(n,new E_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pO;case"linkViaPopup":case"linkViaRedirect":return gO;case"reauthViaPopup":case"reauthViaRedirect":return mO;default:Pn(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=new gu(2e3,1e4);async function yO(t,e,n){if(Bn(t.app))return Promise.reject(Hn(t,"operation-not-supported-in-this-environment"));const r=Bi(t);X2(t,e,v_);const i=XC(r,n);return new rs(r,"signInViaPopup",e,i).executeNotNull()}class rs extends JC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=w_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_O.get())};e()}}rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="pendingRedirect",$c=new Map;class wO extends JC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$c.get(this.auth._key());if(!e){try{const r=await EO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$c.set(this.auth._key(),e)}return this.bypassAuthState||$c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EO(t,e){const n=SO(e),r=IO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function TO(t,e){$c.set(t._key(),e)}function IO(t){return Cr(t._redirectPersistence)}function SO(t){return Wc(vO,t.config.apiKey,t.name)}async function CO(t,e,n=!1){if(Bn(t.app))return Promise.reject(Ar(t));const r=Bi(t),i=XC(r,e),o=await new wO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=10*60*1e3;class xO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kO&&this.cachedEventUids.clear(),this.cachedEventUids.has(O0(e))}saveEventToCache(e){this.cachedEventUids.add(O0(e)),this.lastProcessedEventTime=Date.now()}}function O0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NO=/^https?/;async function bO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AO(t);for(const n of e)try{if(DO(n))return}catch{}Pn(t,"unauthorized-domain")}function DO(t){const e=Am(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NO.test(n))return!1;if(PO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=new gu(3e4,6e4);function L0(){const t=rr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LO(t){return new Promise((e,n)=>{var r,i,s;function o(){L0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L0(),n(Hn(t,"network-request-failed"))},timeout:OO.get()})}if(!((i=(r=rr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rr().gapi)===null||s===void 0)&&s.load)o();else{const a=CD("iframefcb");return rr()[a]=()=>{gapi.load?o():n(Hn(t,"network-request-failed"))},jC(`${SD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Hc=null,e})}let Hc=null;function MO(t){return Hc=Hc||LO(t),Hc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=new gu(5e3,15e3),jO="__/auth/iframe",FO="emulator/auth/iframe",UO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zO(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?p_(e,FO):`https://${t.config.authDomain}/${jO}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},i=BO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sa(r).slice(1)}`}async function WO(t){const e=await MO(t),n=rr().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:zO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Hn(t,"network-request-failed"),a=rr().setTimeout(()=>{s(o)},VO.get());function l(){rr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HO=500,qO=600,GO="_blank",KO="http://localhost";class M0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QO(t,e,n,r=HO,i=qO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$O),{width:r.toString(),height:i.toString(),top:s,left:o}),c=$t().toLowerCase();n&&(a=NC(c)?GO:n),AC(c)&&(e=e||KO,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(mD(c)&&a!=="_self")return YO(e||"",a),new M0(null);const f=window.open(e||"",a,h);ne(f,t,"popup-blocked");try{f.focus()}catch{}return new M0(f)}function YO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO="__/auth/handler",JO="emulator/auth/handler",ZO=encodeURIComponent("fac");async function V0(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:i};if(e instanceof v_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof yu){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${ZO}=${encodeURIComponent(l)}`:"";return`${eL(t)}?${sa(a).slice(1)}${c}`}function eL({config:t}){return t.emulator?p_(t,JO):`https://${t.authDomain}/${XO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="webStorageSupport";class tL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qC,this._completeRedirectFn=CO,this._overrideRedirectResult=TO}async _openPopup(e,n,r,i){var s;jr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await V0(e,n,r,Am(),i);return QO(e,o,w_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await V0(e,n,r,Am(),i);return iO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WO(e),r=new xO(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hp,{type:hp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hp];o!==void 0&&n(!!o),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return MC()||PC()||g_()}}const nL=tL;var j0="@firebase/auth",F0="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sL(t){Kn(new An("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VC(t)},c=new ED(r,i,s,l);return PD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kn(new An("auth-internal",e=>{const n=Bi(e.getProvider("auth").getImmediate());return(r=>new rL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(j0,F0,iL(t)),on(j0,F0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL=5*60,aL=cC("authIdTokenMaxAge")||oL;let U0=null;const lL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aL)return;const i=n==null?void 0:n.token;U0!==i&&(U0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uL(t=xd()){const e=Os(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AD(t,{popupRedirectResolver:nL,persistence:[fO,tO,qC]}),r=cC("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=lL(s.toString());YD(n,o,()=>o(n.currentUser)),QD(n,a=>o(a))}}const i=aC("auth");return i&&ND(n,`http://${i}`),n}function cL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}TD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sL("Browser");var hL="firebase",dL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(hL,dL,"app");var B0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hs,ek;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,y){function C(){}C.prototype=y.prototype,S.D=y.prototype,S.prototype=new C,S.prototype.constructor=S,S.C=function(k,N,R){for(var x=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)x[Te-2]=arguments[Te];return y.prototype[N].apply(k,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,y,C){C||(C=0);var k=Array(16);if(typeof y=="string")for(var N=0;16>N;++N)k[N]=y.charCodeAt(C++)|y.charCodeAt(C++)<<8|y.charCodeAt(C++)<<16|y.charCodeAt(C++)<<24;else for(N=0;16>N;++N)k[N]=y[C++]|y[C++]<<8|y[C++]<<16|y[C++]<<24;y=S.g[0],C=S.g[1],N=S.g[2];var R=S.g[3],x=y+(R^C&(N^R))+k[0]+3614090360&4294967295;y=C+(x<<7&4294967295|x>>>25),x=R+(N^y&(C^N))+k[1]+3905402710&4294967295,R=y+(x<<12&4294967295|x>>>20),x=N+(C^R&(y^C))+k[2]+606105819&4294967295,N=R+(x<<17&4294967295|x>>>15),x=C+(y^N&(R^y))+k[3]+3250441966&4294967295,C=N+(x<<22&4294967295|x>>>10),x=y+(R^C&(N^R))+k[4]+4118548399&4294967295,y=C+(x<<7&4294967295|x>>>25),x=R+(N^y&(C^N))+k[5]+1200080426&4294967295,R=y+(x<<12&4294967295|x>>>20),x=N+(C^R&(y^C))+k[6]+2821735955&4294967295,N=R+(x<<17&4294967295|x>>>15),x=C+(y^N&(R^y))+k[7]+4249261313&4294967295,C=N+(x<<22&4294967295|x>>>10),x=y+(R^C&(N^R))+k[8]+1770035416&4294967295,y=C+(x<<7&4294967295|x>>>25),x=R+(N^y&(C^N))+k[9]+2336552879&4294967295,R=y+(x<<12&4294967295|x>>>20),x=N+(C^R&(y^C))+k[10]+4294925233&4294967295,N=R+(x<<17&4294967295|x>>>15),x=C+(y^N&(R^y))+k[11]+2304563134&4294967295,C=N+(x<<22&4294967295|x>>>10),x=y+(R^C&(N^R))+k[12]+1804603682&4294967295,y=C+(x<<7&4294967295|x>>>25),x=R+(N^y&(C^N))+k[13]+4254626195&4294967295,R=y+(x<<12&4294967295|x>>>20),x=N+(C^R&(y^C))+k[14]+2792965006&4294967295,N=R+(x<<17&4294967295|x>>>15),x=C+(y^N&(R^y))+k[15]+1236535329&4294967295,C=N+(x<<22&4294967295|x>>>10),x=y+(N^R&(C^N))+k[1]+4129170786&4294967295,y=C+(x<<5&4294967295|x>>>27),x=R+(C^N&(y^C))+k[6]+3225465664&4294967295,R=y+(x<<9&4294967295|x>>>23),x=N+(y^C&(R^y))+k[11]+643717713&4294967295,N=R+(x<<14&4294967295|x>>>18),x=C+(R^y&(N^R))+k[0]+3921069994&4294967295,C=N+(x<<20&4294967295|x>>>12),x=y+(N^R&(C^N))+k[5]+3593408605&4294967295,y=C+(x<<5&4294967295|x>>>27),x=R+(C^N&(y^C))+k[10]+38016083&4294967295,R=y+(x<<9&4294967295|x>>>23),x=N+(y^C&(R^y))+k[15]+3634488961&4294967295,N=R+(x<<14&4294967295|x>>>18),x=C+(R^y&(N^R))+k[4]+3889429448&4294967295,C=N+(x<<20&4294967295|x>>>12),x=y+(N^R&(C^N))+k[9]+568446438&4294967295,y=C+(x<<5&4294967295|x>>>27),x=R+(C^N&(y^C))+k[14]+3275163606&4294967295,R=y+(x<<9&4294967295|x>>>23),x=N+(y^C&(R^y))+k[3]+4107603335&4294967295,N=R+(x<<14&4294967295|x>>>18),x=C+(R^y&(N^R))+k[8]+1163531501&4294967295,C=N+(x<<20&4294967295|x>>>12),x=y+(N^R&(C^N))+k[13]+2850285829&4294967295,y=C+(x<<5&4294967295|x>>>27),x=R+(C^N&(y^C))+k[2]+4243563512&4294967295,R=y+(x<<9&4294967295|x>>>23),x=N+(y^C&(R^y))+k[7]+1735328473&4294967295,N=R+(x<<14&4294967295|x>>>18),x=C+(R^y&(N^R))+k[12]+2368359562&4294967295,C=N+(x<<20&4294967295|x>>>12),x=y+(C^N^R)+k[5]+4294588738&4294967295,y=C+(x<<4&4294967295|x>>>28),x=R+(y^C^N)+k[8]+2272392833&4294967295,R=y+(x<<11&4294967295|x>>>21),x=N+(R^y^C)+k[11]+1839030562&4294967295,N=R+(x<<16&4294967295|x>>>16),x=C+(N^R^y)+k[14]+4259657740&4294967295,C=N+(x<<23&4294967295|x>>>9),x=y+(C^N^R)+k[1]+2763975236&4294967295,y=C+(x<<4&4294967295|x>>>28),x=R+(y^C^N)+k[4]+1272893353&4294967295,R=y+(x<<11&4294967295|x>>>21),x=N+(R^y^C)+k[7]+4139469664&4294967295,N=R+(x<<16&4294967295|x>>>16),x=C+(N^R^y)+k[10]+3200236656&4294967295,C=N+(x<<23&4294967295|x>>>9),x=y+(C^N^R)+k[13]+681279174&4294967295,y=C+(x<<4&4294967295|x>>>28),x=R+(y^C^N)+k[0]+3936430074&4294967295,R=y+(x<<11&4294967295|x>>>21),x=N+(R^y^C)+k[3]+3572445317&4294967295,N=R+(x<<16&4294967295|x>>>16),x=C+(N^R^y)+k[6]+76029189&4294967295,C=N+(x<<23&4294967295|x>>>9),x=y+(C^N^R)+k[9]+3654602809&4294967295,y=C+(x<<4&4294967295|x>>>28),x=R+(y^C^N)+k[12]+3873151461&4294967295,R=y+(x<<11&4294967295|x>>>21),x=N+(R^y^C)+k[15]+530742520&4294967295,N=R+(x<<16&4294967295|x>>>16),x=C+(N^R^y)+k[2]+3299628645&4294967295,C=N+(x<<23&4294967295|x>>>9),x=y+(N^(C|~R))+k[0]+4096336452&4294967295,y=C+(x<<6&4294967295|x>>>26),x=R+(C^(y|~N))+k[7]+1126891415&4294967295,R=y+(x<<10&4294967295|x>>>22),x=N+(y^(R|~C))+k[14]+2878612391&4294967295,N=R+(x<<15&4294967295|x>>>17),x=C+(R^(N|~y))+k[5]+4237533241&4294967295,C=N+(x<<21&4294967295|x>>>11),x=y+(N^(C|~R))+k[12]+1700485571&4294967295,y=C+(x<<6&4294967295|x>>>26),x=R+(C^(y|~N))+k[3]+2399980690&4294967295,R=y+(x<<10&4294967295|x>>>22),x=N+(y^(R|~C))+k[10]+4293915773&4294967295,N=R+(x<<15&4294967295|x>>>17),x=C+(R^(N|~y))+k[1]+2240044497&4294967295,C=N+(x<<21&4294967295|x>>>11),x=y+(N^(C|~R))+k[8]+1873313359&4294967295,y=C+(x<<6&4294967295|x>>>26),x=R+(C^(y|~N))+k[15]+4264355552&4294967295,R=y+(x<<10&4294967295|x>>>22),x=N+(y^(R|~C))+k[6]+2734768916&4294967295,N=R+(x<<15&4294967295|x>>>17),x=C+(R^(N|~y))+k[13]+1309151649&4294967295,C=N+(x<<21&4294967295|x>>>11),x=y+(N^(C|~R))+k[4]+4149444226&4294967295,y=C+(x<<6&4294967295|x>>>26),x=R+(C^(y|~N))+k[11]+3174756917&4294967295,R=y+(x<<10&4294967295|x>>>22),x=N+(y^(R|~C))+k[2]+718787259&4294967295,N=R+(x<<15&4294967295|x>>>17),x=C+(R^(N|~y))+k[9]+3951481745&4294967295,S.g[0]=S.g[0]+y&4294967295,S.g[1]=S.g[1]+(N+(x<<21&4294967295|x>>>11))&4294967295,S.g[2]=S.g[2]+N&4294967295,S.g[3]=S.g[3]+R&4294967295}r.prototype.u=function(S,y){y===void 0&&(y=S.length);for(var C=y-this.blockSize,k=this.B,N=this.h,R=0;R<y;){if(N==0)for(;R<=C;)i(this,S,R),R+=this.blockSize;if(typeof S=="string"){for(;R<y;)if(k[N++]=S.charCodeAt(R++),N==this.blockSize){i(this,k),N=0;break}}else for(;R<y;)if(k[N++]=S[R++],N==this.blockSize){i(this,k),N=0;break}}this.h=N,this.o+=y},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var y=1;y<S.length-8;++y)S[y]=0;var C=8*this.o;for(y=S.length-8;y<S.length;++y)S[y]=C&255,C/=256;for(this.u(S),S=Array(16),y=C=0;4>y;++y)for(var k=0;32>k;k+=8)S[C++]=this.g[y]>>>k&255;return S};function s(S,y){var C=a;return Object.prototype.hasOwnProperty.call(C,S)?C[S]:C[S]=y(S)}function o(S,y){this.h=y;for(var C=[],k=!0,N=S.length-1;0<=N;N--){var R=S[N]|0;k&&R==y||(C[N]=R,k=!1)}this.g=C}var a={};function l(S){return-128<=S&&128>S?s(S,function(y){return new o([y|0],0>y?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return P(c(-S));for(var y=[],C=1,k=0;S>=C;k++)y[k]=S/C|0,C*=4294967296;return new o(y,0)}function h(S,y){if(S.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S.charAt(0)=="-")return P(h(S.substring(1),y));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(y,8)),k=f,N=0;N<S.length;N+=8){var R=Math.min(8,S.length-N),x=parseInt(S.substring(N,N+R),y);8>R?(R=c(Math.pow(y,R)),k=k.j(R).add(c(x))):(k=k.j(C),k=k.add(c(x)))}return k}var f=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var S=0,y=1,C=0;C<this.g.length;C++){var k=this.i(C);S+=(0<=k?k:4294967296+k)*y,y*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(w(this))return"0";if(A(this))return"-"+P(this).toString(S);for(var y=c(Math.pow(S,6)),C=this,k="";;){var N=D(C,y).g;C=T(C,N.j(y));var R=((0<C.g.length?C.g[0]:C.h)>>>0).toString(S);if(C=N,w(C))return R+k;for(;6>R.length;)R="0"+R;k=R+k}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function w(S){if(S.h!=0)return!1;for(var y=0;y<S.g.length;y++)if(S.g[y]!=0)return!1;return!0}function A(S){return S.h==-1}t.l=function(S){return S=T(this,S),A(S)?-1:w(S)?0:1};function P(S){for(var y=S.g.length,C=[],k=0;k<y;k++)C[k]=~S.g[k];return new o(C,~S.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(S){for(var y=Math.max(this.g.length,S.g.length),C=[],k=0,N=0;N<=y;N++){var R=k+(this.i(N)&65535)+(S.i(N)&65535),x=(R>>>16)+(this.i(N)>>>16)+(S.i(N)>>>16);k=x>>>16,R&=65535,x&=65535,C[N]=x<<16|R}return new o(C,C[C.length-1]&-2147483648?-1:0)};function T(S,y){return S.add(P(y))}t.j=function(S){if(w(this)||w(S))return f;if(A(this))return A(S)?P(this).j(P(S)):P(P(this).j(S));if(A(S))return P(this.j(P(S)));if(0>this.l(v)&&0>S.l(v))return c(this.m()*S.m());for(var y=this.g.length+S.g.length,C=[],k=0;k<2*y;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<S.g.length;N++){var R=this.i(k)>>>16,x=this.i(k)&65535,Te=S.i(N)>>>16,M=S.i(N)&65535;C[2*k+2*N]+=x*M,E(C,2*k+2*N),C[2*k+2*N+1]+=R*M,E(C,2*k+2*N+1),C[2*k+2*N+1]+=x*Te,E(C,2*k+2*N+1),C[2*k+2*N+2]+=R*Te,E(C,2*k+2*N+2)}for(k=0;k<y;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=y;k<2*y;k++)C[k]=0;return new o(C,0)};function E(S,y){for(;(S[y]&65535)!=S[y];)S[y+1]+=S[y]>>>16,S[y]&=65535,y++}function I(S,y){this.g=S,this.h=y}function D(S,y){if(w(y))throw Error("division by zero");if(w(S))return new I(f,f);if(A(S))return y=D(P(S),y),new I(P(y.g),P(y.h));if(A(y))return y=D(S,P(y)),new I(P(y.g),y.h);if(30<S.g.length){if(A(S)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var C=m,k=y;0>=k.l(S);)C=F(C),k=F(k);var N=V(C,1),R=V(k,1);for(k=V(k,2),C=V(C,2);!w(k);){var x=R.add(k);0>=x.l(S)&&(N=N.add(C),R=x),k=V(k,1),C=V(C,1)}return y=T(S,N.j(y)),new I(N,y)}for(N=f;0<=S.l(y);){for(C=Math.max(1,Math.floor(S.m()/y.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),R=c(C),x=R.j(y);A(x)||0<x.l(S);)C-=k,R=c(C),x=R.j(y);w(R)&&(R=m),N=N.add(R),S=T(S,x)}return new I(N,S)}t.A=function(S){return D(this,S).h},t.and=function(S){for(var y=Math.max(this.g.length,S.g.length),C=[],k=0;k<y;k++)C[k]=this.i(k)&S.i(k);return new o(C,this.h&S.h)},t.or=function(S){for(var y=Math.max(this.g.length,S.g.length),C=[],k=0;k<y;k++)C[k]=this.i(k)|S.i(k);return new o(C,this.h|S.h)},t.xor=function(S){for(var y=Math.max(this.g.length,S.g.length),C=[],k=0;k<y;k++)C[k]=this.i(k)^S.i(k);return new o(C,this.h^S.h)};function F(S){for(var y=S.g.length+1,C=[],k=0;k<y;k++)C[k]=S.i(k)<<1|S.i(k-1)>>>31;return new o(C,S.h)}function V(S,y){var C=y>>5;y%=32;for(var k=S.g.length-C,N=[],R=0;R<k;R++)N[R]=0<y?S.i(R+C)>>>y|S.i(R+C+1)<<32-y:S.i(R+C);return new o(N,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ek=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,hs=o}).apply(typeof B0<"u"?B0:typeof self<"u"?self:typeof window<"u"?window:{});var wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tk,Ja,nk,qc,Dm,rk,ik,sk;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,g){return u==Array.prototype||u==Object.prototype||(u[d]=g.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof wc=="object"&&wc];for(var d=0;d<u.length;++d){var g=u[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var g=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var O=u[_];if(!(O in g))break e;g=g[O]}u=u[u.length-1],_=g[u],d=d(_),d!=_&&d!=null&&e(g,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var g=0,_=!1,O={next:function(){if(!_&&g<u.length){var L=g++;return{value:d(L,u[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,g){return u.call.apply(u.bind,arguments)}function f(u,d,g){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),u.apply(d,O)}}return function(){return u.apply(d,arguments)}}function m(u,d,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function v(u,d){var g=Array.prototype.slice.call(arguments,1);return function(){var _=g.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function w(u,d){function g(){}g.prototype=d.prototype,u.aa=d.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(_,O,L){for(var $=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)$[Ae-2]=arguments[Ae];return d.prototype[O].apply(_,$)}}function A(u){const d=u.length;if(0<d){const g=Array(d);for(let _=0;_<d;_++)g[_]=u[_];return g}return[]}function P(u,d){for(let g=1;g<arguments.length;g++){const _=arguments[g];if(l(_)){const O=u.length||0,L=_.length||0;u.length=O+L;for(let $=0;$<L;$++)u[O+$]=_[$]}else u.push(_)}}class T{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(u){return/^[\s\xa0]*$/.test(u)}function I(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function D(u){return D[" "](u),u}D[" "]=function(){};var F=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function V(u,d,g){for(const _ in u)d.call(g,u[_],_,u)}function S(u,d){for(const g in u)d.call(void 0,u[g],g,u)}function y(u){const d={};for(const g in u)d[g]=u[g];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,d){let g,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(g in _)u[g]=_[g];for(let L=0;L<C.length;L++)g=C[L],Object.prototype.hasOwnProperty.call(_,g)&&(u[g]=_[g])}}function N(u){var d=1;u=u.split(":");const g=[];for(;0<d&&u.length;)g.push(u.shift()),d--;return u.length&&g.push(u.join(":")),g}function R(u){a.setTimeout(()=>{throw u},0)}function x(){var u=X;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class Te{constructor(){this.h=this.g=null}add(d,g){const _=M.get();_.set(d,g),this.h?this.h.next=_:this.g=_,this.h=_}}var M=new T(()=>new ie,u=>u.reset());class ie{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,z=!1,X=new Te,Q=()=>{const u=a.Promise.resolve(void 0);ke=()=>{u.then(K)}};var K=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(g){R(g)}var d=M;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}z=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Me=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return u}();function Ee(u,d){if(ae.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(F){e:{try{D(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else g=="mouseover"?d=u.fromElement:g=="mouseout"&&(d=u.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Be[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ee.aa.h.call(this)}}w(Ee,ae);var Be={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),le=0;function un(u,d,g,_,O){this.listener=u,this.proxy=null,this.src=d,this.type=g,this.capture=!!_,this.ha=O,this.key=++le,this.da=this.fa=!1}function pt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function dr(u){this.src=u,this.g={},this.h=0}dr.prototype.add=function(u,d,g,_,O){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var $=Ws(u,d,_,O);return-1<$?(d=u[$],g||(d.fa=!1)):(d=new un(d,this.src,L,!!_,O),d.fa=g,u.push(d)),d};function yn(u,d){var g=d.type;if(g in u.g){var _=u.g[g],O=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=O)&&Array.prototype.splice.call(_,O,1),L&&(pt(d),u.g[g].length==0&&(delete u.g[g],u.h--))}}function Ws(u,d,g,_){for(var O=0;O<u.length;++O){var L=u[O];if(!L.da&&L.listener==d&&L.capture==!!g&&L.ha==_)return O}return-1}var $s="closure_lm_"+(1e6*Math.random()|0),ma={};function It(u,d,g,_,O){if(Array.isArray(d)){for(var L=0;L<d.length;L++)It(u,d[L],g,_,O);return null}return g=Hs(g),u&&u[ze]?u.K(d,g,c(_)?!!_.capture:!1,O):Kr(u,d,g,!1,_,O)}function Kr(u,d,g,_,O,L){if(!d)throw Error("Invalid event type");var $=c(O)?!!O.capture:!!O,Ae=_a(u);if(Ae||(u[$s]=Ae=new dr(u)),g=Ae.add(d,g,_,$,L),g.proxy)return g;if(_=Qr(),g.proxy=_,_.src=u,_.listener=g,u.addEventListener)Me||(O=$),O===void 0&&(O=!1),u.addEventListener(d.toString(),_,O);else if(u.attachEvent)u.attachEvent(Fu(d.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Qr(){function u(g){return d.call(u.src,u.listener,g)}const d=gf;return u}function ju(u,d,g,_,O){if(Array.isArray(d))for(var L=0;L<d.length;L++)ju(u,d[L],g,_,O);else _=c(_)?!!_.capture:!!_,g=Hs(g),u&&u[ze]?(u=u.i,d=String(d).toString(),d in u.g&&(L=u.g[d],g=Ws(L,g,_,O),-1<g&&(pt(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete u.g[d],u.h--)))):u&&(u=_a(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Ws(d,g,_,O)),(g=-1<u?d[u]:null)&&ga(g))}function ga(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[ze])yn(d.i,u);else{var g=u.type,_=u.proxy;d.removeEventListener?d.removeEventListener(g,_,u.capture):d.detachEvent?d.detachEvent(Fu(g),_):d.addListener&&d.removeListener&&d.removeListener(_),(g=_a(d))?(yn(g,u),g.h==0&&(g.src=null,d[$s]=null)):pt(u)}}}function Fu(u){return u in ma?ma[u]:ma[u]="on"+u}function gf(u,d){if(u.da)u=!0;else{d=new Ee(d,this);var g=u.listener,_=u.ha||u.src;u.fa&&ga(u),u=g.call(_,d)}return u}function _a(u){return u=u[$s],u instanceof dr?u:null}var ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hs(u){return typeof u=="function"?u:(u[ya]||(u[ya]=function(d){return u.handleEvent(d)}),u[ya])}function xe(){q.call(this),this.i=new dr(this),this.M=this,this.F=null}w(xe,q),xe.prototype[ze]=!0,xe.prototype.removeEventListener=function(u,d,g,_){ju(this,u,d,g,_)};function mt(u,d){var g,_=u.F;if(_)for(g=[];_;_=_.F)g.push(_);if(u=u.M,_=d.type||d,typeof d=="string")d=new ae(d,u);else if(d instanceof ae)d.target=d.target||u;else{var O=d;d=new ae(_,u),k(d,O)}if(O=!0,g)for(var L=g.length-1;0<=L;L--){var $=d.g=g[L];O=Wi($,_,!0,d)&&O}if($=d.g=u,O=Wi($,_,!0,d)&&O,O=Wi($,_,!1,d)&&O,g)for(L=0;L<g.length;L++)$=d.g=g[L],O=Wi($,_,!1,d)&&O}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var g=u.g[d],_=0;_<g.length;_++)pt(g[_]);delete u.g[d],u.h--}}this.F=null},xe.prototype.K=function(u,d,g,_){return this.i.add(String(u),d,!1,g,_)},xe.prototype.L=function(u,d,g,_){return this.i.add(String(u),d,!0,g,_)};function Wi(u,d,g,_){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,L=0;L<d.length;++L){var $=d[L];if($&&!$.da&&$.capture==g){var Ae=$.listener,St=$.ha||$.src;$.fa&&yn(u.i,$),O=Ae.call(St,_)!==!1&&O}}return O&&!_.defaultPrevented}function Z(u,d,g){if(typeof u=="function")g&&(u=m(u,g));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function te(u){u.g=Z(()=>{u.g=null,u.i&&(u.i=!1,te(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class Re extends q{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(u){q.call(this),this.h=u,this.g={}}w(Je,q);var De=[];function Ze(u){V(u.g,function(d,g){this.g.hasOwnProperty(g)&&ga(d)},u),u.g={}}Je.prototype.N=function(){Je.aa.N.call(this),Ze(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dt=a.JSON.stringify,He=a.JSON.parse,We=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function fr(){}fr.prototype.h=null;function Uu(u){return u.h||(u.h=u.i())}function iv(){}var va={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _f(){ae.call(this,"d")}w(_f,ae);function yf(){ae.call(this,"c")}w(yf,ae);var $i={},sv=null;function Bu(){return sv=sv||new xe}$i.La="serverreachability";function ov(u){ae.call(this,$i.La,u)}w(ov,ae);function wa(u){const d=Bu();mt(d,new ov(d))}$i.STAT_EVENT="statevent";function av(u,d){ae.call(this,$i.STAT_EVENT,u),this.stat=d}w(av,ae);function Ht(u){const d=Bu();mt(d,new av(d,u))}$i.Ma="timingevent";function lv(u,d){ae.call(this,$i.Ma,u),this.size=d}w(lv,ae);function Ea(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function Ta(){this.g=!0}Ta.prototype.xa=function(){this.g=!1};function kA(u,d,g,_,O,L){u.info(function(){if(u.g)if(L)for(var $="",Ae=L.split("&"),St=0;St<Ae.length;St++){var _e=Ae[St].split("=");if(1<_e.length){var Ot=_e[0];_e=_e[1];var Lt=Ot.split("_");$=2<=Lt.length&&Lt[1]=="type"?$+(Ot+"="+_e+"&"):$+(Ot+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+d+`
`+g+`
`+$})}function xA(u,d,g,_,O,L,$){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+d+`
`+g+`
`+L+" "+$})}function qs(u,d,g,_){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+AA(u,g)+(_?" "+_:"")})}function RA(u,d){u.info(function(){return"TIMEOUT: "+d})}Ta.prototype.info=function(){};function AA(u,d){if(!u.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var _=g[u];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<O.length;$++)O[$]=""}}}}return Dt(g)}catch{return d}}var zu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vf;function Wu(){}w(Wu,fr),Wu.prototype.g=function(){return new XMLHttpRequest},Wu.prototype.i=function(){return{}},vf=new Wu;function Yr(u,d,g,_){this.j=u,this.i=d,this.l=g,this.R=_||1,this.U=new Je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cv}function cv(){this.i=null,this.g="",this.h=!1}var hv={},wf={};function Ef(u,d,g){u.L=1,u.v=Gu(pr(d)),u.m=g,u.P=!0,dv(u,null)}function dv(u,d){u.F=Date.now(),$u(u),u.A=pr(u.v);var g=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),kv(g.i,"t",_),u.C=0,g=u.j.J,u.h=new cv,u.g=$v(u.j,g?d:null,!u.m),0<u.O&&(u.M=new Re(m(u.Y,u,u.g),u.O)),d=u.U,g=u.g,_=u.ca;var O="readystatechange";Array.isArray(O)||(O&&(De[0]=O.toString()),O=De);for(var L=0;L<O.length;L++){var $=It(g,O[L],_||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),wa(),kA(u.i,u.u,u.A,u.l,u.R,u.m)}Yr.prototype.ca=function(u){u=u.target;const d=this.M;d&&mr(u)==3?d.j():this.Y(u)},Yr.prototype.Y=function(u){try{if(u==this.g)e:{const Lt=mr(this.g);var d=this.g.Ba();const Qs=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||Dv(this.g)))){this.J||Lt!=4||d==7||(d==8||0>=Qs?wa(3):wa(2)),Tf(this);var g=this.g.Z();this.X=g;t:if(fv(this)){var _=Dv(this.g);u="";var O=_.length,L=mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hi(this),Ia(this);var $="";break t}this.h.i=new a.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,u+=this.h.i.decode(_[d],{stream:!(L&&d==O-1)});_.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=g==200,xA(this.i,this.u,this.A,this.l,this.R,Lt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,St=this.g;if((Ae=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(Ae)){var _e=Ae;break t}}_e=null}if(g=_e)qs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,If(this,g);else{this.o=!1,this.s=3,Ht(12),Hi(this),Ia(this);break e}}if(this.P){g=!0;let On;for(;!this.J&&this.C<$.length;)if(On=PA(this,$),On==wf){Lt==4&&(this.s=4,Ht(14),g=!1),qs(this.i,this.l,null,"[Incomplete Response]");break}else if(On==hv){this.s=4,Ht(15),qs(this.i,this.l,$,"[Invalid Chunk]"),g=!1;break}else qs(this.i,this.l,On,null),If(this,On);if(fv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||$.length!=0||this.h.h||(this.s=1,Ht(16),g=!1),this.o=this.o&&g,!g)qs(this.i,this.l,$,"[Invalid Chunked Response]"),Hi(this),Ia(this);else if(0<$.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Af(Ot),Ot.M=!0,Ht(11))}}else qs(this.i,this.l,$,null),If(this,$);Lt==4&&Hi(this),this.o&&!this.J&&(Lt==4?Uv(this.j,this):(this.o=!1,$u(this)))}else GA(this.g),g==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ht(12)):(this.s=0,Ht(13)),Hi(this),Ia(this)}}}catch{}finally{}};function fv(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function PA(u,d){var g=u.C,_=d.indexOf(`
`,g);return _==-1?wf:(g=Number(d.substring(g,_)),isNaN(g)?hv:(_+=1,_+g>d.length?wf:(d=d.slice(_,_+g),u.C=_+g,d)))}Yr.prototype.cancel=function(){this.J=!0,Hi(this)};function $u(u){u.S=Date.now()+u.I,pv(u,u.I)}function pv(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ea(m(u.ba,u),d)}function Tf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Yr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(RA(this.i,this.A),this.L!=2&&(wa(),Ht(17)),Hi(this),this.s=2,Ia(this)):pv(this,this.S-u)};function Ia(u){u.j.G==0||u.J||Uv(u.j,u)}function Hi(u){Tf(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,Ze(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function If(u,d){try{var g=u.j;if(g.G!=0&&(g.g==u||Sf(g.h,u))){if(!u.K&&Sf(g.h,u)&&g.G==3){try{var _=g.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)Zu(g),Xu(g);else break e;Rf(g),Ht(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=Ea(m(g.Za,g),6e3));if(1>=_v(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Gi(g,11)}else if((u.K||g.g==u)&&Zu(g),!E(d))for(O=g.Da.g.parse(d),d=0;d<O.length;d++){let _e=O[d];if(g.T=_e[0],_e=_e[1],g.G==2)if(_e[0]=="c"){g.K=_e[1],g.ia=_e[2];const Ot=_e[3];Ot!=null&&(g.la=Ot,g.j.info("VER="+g.la));const Lt=_e[4];Lt!=null&&(g.Aa=Lt,g.j.info("SVER="+g.Aa));const Qs=_e[5];Qs!=null&&typeof Qs=="number"&&0<Qs&&(_=1.5*Qs,g.L=_,g.j.info("backChannelRequestTimeoutMs_="+_)),_=g;const On=u.g;if(On){const tc=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tc){var L=_.h;L.g||tc.indexOf("spdy")==-1&&tc.indexOf("quic")==-1&&tc.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Cf(L,L.h),L.h=null))}if(_.D){const Pf=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;Pf&&(_.ya=Pf,Ve(_.I,_.D,Pf))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),_=g;var $=u;if(_.qa=Wv(_,_.J?_.ia:null,_.W),$.K){yv(_.h,$);var Ae=$,St=_.L;St&&(Ae.I=St),Ae.B&&(Tf(Ae),$u(Ae)),_.g=$}else jv(_);0<g.i.length&&Ju(g)}else _e[0]!="stop"&&_e[0]!="close"||Gi(g,7);else g.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Gi(g,7):xf(g):_e[0]!="noop"&&g.l&&g.l.ta(_e),g.v=0)}}wa(4)}catch{}}var NA=class{constructor(u,d){this.g=u,this.map=d}};function mv(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gv(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function _v(u){return u.h?1:u.g?u.g.size:0}function Sf(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function Cf(u,d){u.g?u.g.add(d):u.h=d}function yv(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}mv.prototype.cancel=function(){if(this.i=vv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function vv(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const g of u.g.values())d=d.concat(g.D);return d}return A(u.i)}function bA(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],g=u.length,_=0;_<g;_++)d.push(u[_]);return d}d=[],g=0;for(_ in u)d[g++]=u[_];return d}function DA(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var g=0;g<u;g++)d.push(g);return d}d=[],g=0;for(const _ in u)d[g++]=_;return d}}}function wv(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var g=DA(u),_=bA(u),O=_.length,L=0;L<O;L++)d.call(void 0,_[L],g&&g[L],u)}var Ev=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OA(u,d){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var _=u[g].indexOf("="),O=null;if(0<=_){var L=u[g].substring(0,_);O=u[g].substring(_+1)}else L=u[g];d(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function qi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof qi){this.h=u.h,Hu(this,u.j),this.o=u.o,this.g=u.g,qu(this,u.s),this.l=u.l;var d=u.i,g=new ka;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),Tv(this,g),this.m=u.m}else u&&(d=String(u).match(Ev))?(this.h=!1,Hu(this,d[1]||"",!0),this.o=Sa(d[2]||""),this.g=Sa(d[3]||"",!0),qu(this,d[4]),this.l=Sa(d[5]||"",!0),Tv(this,d[6]||"",!0),this.m=Sa(d[7]||"")):(this.h=!1,this.i=new ka(null,this.h))}qi.prototype.toString=function(){var u=[],d=this.j;d&&u.push(Ca(d,Iv,!0),":");var g=this.g;return(g||d=="file")&&(u.push("//"),(d=this.o)&&u.push(Ca(d,Iv,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(Ca(g,g.charAt(0)=="/"?VA:MA,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",Ca(g,FA)),u.join("")};function pr(u){return new qi(u)}function Hu(u,d,g){u.j=g?Sa(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function qu(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function Tv(u,d,g){d instanceof ka?(u.i=d,UA(u.i,u.h)):(g||(d=Ca(d,jA)),u.i=new ka(d,u.h))}function Ve(u,d,g){u.i.set(d,g)}function Gu(u){return Ve(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Sa(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ca(u,d,g){return typeof u=="string"?(u=encodeURI(u).replace(d,LA),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function LA(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Iv=/[#\/\?@]/g,MA=/[#\?:]/g,VA=/[#\?]/g,jA=/[#\?@]/g,FA=/#/g;function ka(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Xr(u){u.g||(u.g=new Map,u.h=0,u.i&&OA(u.i,function(d,g){u.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=ka.prototype,t.add=function(u,d){Xr(this),this.i=null,u=Gs(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(d),this.h+=1,this};function Sv(u,d){Xr(u),d=Gs(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function Cv(u,d){return Xr(u),d=Gs(u,d),u.g.has(d)}t.forEach=function(u,d){Xr(this),this.g.forEach(function(g,_){g.forEach(function(O){u.call(d,O,_,this)},this)},this)},t.na=function(){Xr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let _=0;_<d.length;_++){const O=u[_];for(let L=0;L<O.length;L++)g.push(d[_])}return g},t.V=function(u){Xr(this);let d=[];if(typeof u=="string")Cv(this,u)&&(d=d.concat(this.g.get(Gs(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)d=d.concat(u[g])}return d},t.set=function(u,d){return Xr(this),this.i=null,u=Gs(this,u),Cv(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function kv(u,d,g){Sv(u,d),0<g.length&&(u.i=null,u.g.set(Gs(u,d),A(g)),u.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var _=d[g];const L=encodeURIComponent(String(_)),$=this.V(_);for(_=0;_<$.length;_++){var O=L;$[_]!==""&&(O+="="+encodeURIComponent(String($[_]))),u.push(O)}}return this.i=u.join("&")};function Gs(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function UA(u,d){d&&!u.j&&(Xr(u),u.i=null,u.g.forEach(function(g,_){var O=_.toLowerCase();_!=O&&(Sv(this,_),kv(this,O,g))},u)),u.j=d}function BA(u,d){const g=new Ta;if(a.Image){const _=new Image;_.onload=v(Jr,g,"TestLoadImage: loaded",!0,d,_),_.onerror=v(Jr,g,"TestLoadImage: error",!1,d,_),_.onabort=v(Jr,g,"TestLoadImage: abort",!1,d,_),_.ontimeout=v(Jr,g,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else d(!1)}function zA(u,d){const g=new Ta,_=new AbortController,O=setTimeout(()=>{_.abort(),Jr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:_.signal}).then(L=>{clearTimeout(O),L.ok?Jr(g,"TestPingServer: ok",!0,d):Jr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),Jr(g,"TestPingServer: error",!1,d)})}function Jr(u,d,g,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(g)}catch{}}function WA(){this.g=new We}function $A(u,d,g){const _=g||"";try{wv(u,function(O,L){let $=O;c(O)&&($=Dt(O)),d.push(_+L+"="+encodeURIComponent($))})}catch(O){throw d.push(_+"type="+encodeURIComponent("_badmap")),O}}function Ku(u){this.l=u.Ub||null,this.j=u.eb||!1}w(Ku,fr),Ku.prototype.g=function(){return new Qu(this.l,this.j)},Ku.prototype.i=function(u){return function(){return u}}({});function Qu(u,d){xe.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Qu,xe),t=Qu.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Ra(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xa(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ra(this)),this.g&&(this.readyState=3,Ra(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function xv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?xa(this):Ra(this),this.readyState==3&&xv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,xa(this))},t.Qa=function(u){this.g&&(this.response=u,xa(this))},t.ga=function(){this.g&&xa(this)};function xa(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ra(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=d.next();return u.join(`\r
`)};function Ra(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Qu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Rv(u){let d="";return V(u,function(g,_){d+=_,d+=":",d+=g,d+=`\r
`}),d}function kf(u,d,g){e:{for(_ in g){var _=!1;break e}_=!0}_||(g=Rv(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):Ve(u,d,g))}function et(u){xe.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(et,xe);var HA=/^https?$/i,qA=["POST","PUT"];t=et.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,g,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vf.g(),this.v=this.o?Uu(this.o):Uu(vf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(L){Av(this,L);return}if(u=g||"",g=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)g.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())g.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),O=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(qA,d,void 0))||_||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of g)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bv(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){Av(this,L)}};function Av(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,Pv(u),Yu(u)}function Pv(u){u.A||(u.A=!0,mt(u,"complete"),mt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,mt(this,"complete"),mt(this,"abort"),Yu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yu(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Nv(this):this.bb())},t.bb=function(){Nv(this)};function Nv(u){if(u.h&&typeof o<"u"&&(!u.v[1]||mr(u)!=4||u.Z()!=2)){if(u.u&&mr(u)==4)Z(u.Ea,0,u);else if(mt(u,"readystatechange"),mr(u)==4){u.h=!1;try{const $=u.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var _;if(_=$===0){var O=String(u.D).match(Ev)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),_=!HA.test(O?O.toLowerCase():"")}g=_}if(g)mt(u,"complete"),mt(u,"success");else{u.m=6;try{var L=2<mr(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",Pv(u)}}finally{Yu(u)}}}}function Yu(u,d){if(u.g){bv(u);const g=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||mt(u,"ready");try{g.onreadystatechange=_}catch{}}}function bv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function mr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<mr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),He(d)}};function Dv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function GA(u){const d={};u=(u.g&&2<=mr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(E(u[_]))continue;var g=N(u[_]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=d[O]||[];d[O]=L,L.push(g)}S(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Aa(u,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||d}function Ov(u){this.Aa=0,this.i=[],this.j=new Ta,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Aa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Aa("baseRetryDelayMs",5e3,u),this.cb=Aa("retryDelaySeedMs",1e4,u),this.Wa=Aa("forwardChannelMaxRetries",2,u),this.wa=Aa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new mv(u&&u.concurrentRequestLimit),this.Da=new WA,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ov.prototype,t.la=8,t.G=1,t.connect=function(u,d,g,_){Ht(0),this.W=u,this.H=d||{},g&&_!==void 0&&(this.H.OSID=g,this.H.OAID=_),this.F=this.X,this.I=Wv(this,null,this.W),Ju(this)};function xf(u){if(Lv(u),u.G==3){var d=u.U++,g=pr(u.I);if(Ve(g,"SID",u.K),Ve(g,"RID",d),Ve(g,"TYPE","terminate"),Pa(u,g),d=new Yr(u,u.j,d),d.L=2,d.v=Gu(pr(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=$v(d.j,null),d.g.ea(d.v)),d.F=Date.now(),$u(d)}zv(u)}function Xu(u){u.g&&(Af(u),u.g.cancel(),u.g=null)}function Lv(u){Xu(u),u.u&&(a.clearTimeout(u.u),u.u=null),Zu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Ju(u){if(!gv(u.h)&&!u.s){u.s=!0;var d=u.Ga;ke||Q(),z||(ke(),z=!0),X.add(d,u),u.B=0}}function KA(u,d){return _v(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ea(m(u.Ga,u,d),Bv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const O=new Yr(this,this.j,u);let L=this.o;if(this.S&&(L?(L=y(L),k(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var _=this.i[g];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Vv(this,O,d),g=pr(this.I),Ve(g,"RID",u),Ve(g,"CVER",22),this.D&&Ve(g,"X-HTTP-Session-Id",this.D),Pa(this,g),L&&(this.O?d="headers="+encodeURIComponent(String(Rv(L)))+"&"+d:this.m&&kf(g,this.m,L)),Cf(this.h,O),this.Ua&&Ve(g,"TYPE","init"),this.P?(Ve(g,"$req",d),Ve(g,"SID","null"),O.T=!0,Ef(O,g,null)):Ef(O,g,d),this.G=2}}else this.G==3&&(u?Mv(this,u):this.i.length==0||gv(this.h)||Mv(this))};function Mv(u,d){var g;d?g=d.l:g=u.U++;const _=pr(u.I);Ve(_,"SID",u.K),Ve(_,"RID",g),Ve(_,"AID",u.T),Pa(u,_),u.m&&u.o&&kf(_,u.m,u.o),g=new Yr(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),d&&(u.i=d.D.concat(u.i)),d=Vv(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Cf(u.h,g),Ef(g,_,d)}function Pa(u,d){u.H&&V(u.H,function(g,_){Ve(d,_,g)}),u.l&&wv({},function(g,_){Ve(d,_,g)})}function Vv(u,d,g){g=Math.min(u.i.length,g);var _=u.l?m(u.l.Na,u.l,u):null;e:{var O=u.i;let L=-1;for(;;){const $=["count="+g];L==-1?0<g?(L=O[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let Ae=!0;for(let St=0;St<g;St++){let _e=O[St].g;const Ot=O[St].map;if(_e-=L,0>_e)L=Math.max(0,O[St].g-100),Ae=!1;else try{$A(Ot,$,"req"+_e+"_")}catch{_&&_(Ot)}}if(Ae){_=$.join("&");break e}}}return u=u.i.splice(0,g),d.D=u,_}function jv(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;ke||Q(),z||(ke(),z=!0),X.add(d,u),u.v=0}}function Rf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ea(m(u.Fa,u),Bv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Fv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ea(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ht(10),Xu(this),Fv(this))};function Af(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Fv(u){u.g=new Yr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=pr(u.qa);Ve(d,"RID","rpc"),Ve(d,"SID",u.K),Ve(d,"AID",u.T),Ve(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ve(d,"TO",u.ja),Ve(d,"TYPE","xmlhttp"),Pa(u,d),u.m&&u.o&&kf(d,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Gu(pr(d)),g.m=null,g.P=!0,dv(g,u)}t.Za=function(){this.C!=null&&(this.C=null,Xu(this),Rf(this),Ht(19))};function Zu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Uv(u,d){var g=null;if(u.g==d){Zu(u),Af(u),u.g=null;var _=2}else if(Sf(u.h,d))g=d.D,yv(u.h,d),_=1;else return;if(u.G!=0){if(d.o)if(_==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var O=u.B;_=Bu(),mt(_,new lv(_,g)),Ju(u)}else jv(u);else if(O=d.s,O==3||O==0&&0<d.X||!(_==1&&KA(u,d)||_==2&&Rf(u)))switch(g&&0<g.length&&(d=u.h,d.i=d.i.concat(g)),O){case 1:Gi(u,5);break;case 4:Gi(u,10);break;case 3:Gi(u,6);break;default:Gi(u,2)}}}function Bv(u,d){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*d}function Gi(u,d){if(u.j.info("Error code "+d),d==2){var g=m(u.fb,u),_=u.Xa;const O=!_;_=new qi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Hu(_,"https"),Gu(_),O?BA(_.toString(),g):zA(_.toString(),g)}else Ht(2);u.G=0,u.l&&u.l.sa(d),zv(u),Lv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function zv(u){if(u.G=0,u.ka=[],u.l){const d=vv(u.h);(d.length!=0||u.i.length!=0)&&(P(u.ka,d),P(u.ka,u.i),u.h.i.length=0,A(u.i),u.i.length=0),u.l.ra()}}function Wv(u,d,g){var _=g instanceof qi?pr(g):new qi(g);if(_.g!="")d&&(_.g=d+"."+_.g),qu(_,_.s);else{var O=a.location;_=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var L=new qi(null);_&&Hu(L,_),d&&(L.g=d),O&&qu(L,O),g&&(L.l=g),_=L}return g=u.D,d=u.ya,g&&d&&Ve(_,g,d),Ve(_,"VER",u.la),Pa(u,_),_}function $v(u,d,g){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new et(new Ku({eb:g})):new et(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hv(){}t=Hv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ec(){}ec.prototype.g=function(u,d){return new cn(u,d)};function cn(u,d){xe.call(this),this.g=new Ov(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!E(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Ks(this)}w(cn,xe),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){xf(this.g)},cn.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=Dt(u),u=g);d.i.push(new NA(d.Ya++,u)),d.G==3&&Ju(d)},cn.prototype.N=function(){this.g.l=null,delete this.j,xf(this.g),delete this.g,cn.aa.N.call(this)};function qv(u){_f.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const g in d){u=g;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}w(qv,_f);function Gv(){yf.call(this),this.status=1}w(Gv,yf);function Ks(u){this.g=u}w(Ks,Hv),Ks.prototype.ua=function(){mt(this.g,"a")},Ks.prototype.ta=function(u){mt(this.g,new qv(u))},Ks.prototype.sa=function(u){mt(this.g,new Gv)},Ks.prototype.ra=function(){mt(this.g,"b")},ec.prototype.createWebChannel=ec.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,sk=function(){return new ec},ik=function(){return Bu()},rk=$i,Dm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zu.NO_ERROR=0,zu.TIMEOUT=8,zu.HTTP_ERROR=6,qc=zu,uv.COMPLETE="complete",nk=uv,iv.EventType=va,va.OPEN="a",va.CLOSE="b",va.ERROR="c",va.MESSAGE="d",xe.prototype.listen=xe.prototype.K,Ja=iv,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,tk=et}).apply(typeof wc<"u"?wc:typeof self<"u"?self:typeof window<"u"?window:{});const z0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Cd("@firebase/firestore");function Fa(){return ws.logLevel}function Y(t,...e){if(ws.logLevel<=fe.DEBUG){const n=e.map(T_);ws.debug(`Firestore (${aa}): ${t}`,...n)}}function Fr(t,...e){if(ws.logLevel<=fe.ERROR){const n=e.map(T_);ws.error(`Firestore (${aa}): ${t}`,...n)}}function Uo(t,...e){if(ws.logLevel<=fe.WARN){const n=e.map(T_);ws.warn(`Firestore (${aa}): ${t}`,...n)}}function T_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${aa}) INTERNAL ASSERTION FAILED: `+t;throw Fr(e),new Error(e)}function Se(t,e){t||re()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ft.UNAUTHENTICATED))}shutdown(){}}class pL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mL{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new ok(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new Ft(e)}}class gL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _L{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new gL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Se(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new yL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=wL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Bo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ft(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new ft(0,0))}static max(){return new se(new ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $l.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $l?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends $l{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const EL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends $l{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return EL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Fe.fromString(e))}static fromName(e){return new J(Fe.fromString(e).popFirst(5))}static empty(){return new J(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Fe(e.slice()))}}function TL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new ft(n+1,0):new ft(n,r));return new Ri(i,J.empty(),e)}function IL(t){return new Ri(t.readTime,t.key,-1)}class Ri{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ri(se.min(),J.empty(),-1)}static max(){return new Ri(se.max(),J.empty(),-1)}}function SL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==CL)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function xL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Eu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}I_.oe=-1;function Nd(t){return t==null}function Oh(t){return t===0&&1/t==-1/0}function RL(t){return typeof t=="number"&&Number.isInteger(t)&&!Oh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut=class Om{constructor(e,n){this.comparator=e,this.root=n||Ti.EMPTY}insert(e,n){return new Om(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ti.BLACK,null,null))}remove(e){return new Om(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ti.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ec(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ec(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ec(this.root,e,this.comparator,!0)}},Ec=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ti=class gr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??gr.RED,this.left=i??gr.EMPTY,this.right=s??gr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new gr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}};Ti.EMPTY=null,Ti.RED=!0,Ti.BLACK=!1;Ti.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ti(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $0(this.data.getIterator())}getIteratorFrom(e){return new $0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new At(this.comparator);return n.data=e,n}}class $0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new fn([])}unionWith(e){let n=new At(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new uk("Invalid base64 string: "+s):s}}(e);return new bt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const AL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(t){if(Se(!!t),typeof t=="string"){let e=0;const n=AL.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function C_(t){const e=t.mapValue.fields.__previous_value__;return S_(e)?C_(e):e}function Hl(t){const e=Ai(t.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ql{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ql("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ql&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc={mapValue:{}};function Ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?S_(t)?4:bL(t)?9007199254740991:NL(t)?10:11:re()}function ar(t,e){if(t===e)return!0;const n=Ts(t);if(n!==Ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hl(t).isEqual(Hl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ai(i.timestampValue),a=Ai(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Es(i.bytesValue).isEqual(Es(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return rt(i.geoPointValue.latitude)===rt(s.geoPointValue.latitude)&&rt(i.geoPointValue.longitude)===rt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return rt(i.integerValue)===rt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=rt(i.doubleValue),a=rt(s.doubleValue);return o===a?Oh(o)===Oh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Bo(t.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(W0(o)!==W0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ar(o[l],a[l])))return!1;return!0}(t,e);default:return re()}}function Gl(t,e){return(t.values||[]).find(n=>ar(n,e))!==void 0}function zo(t,e){if(t===e)return 0;const n=Ts(t),r=Ts(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=rt(s.integerValue||s.doubleValue),l=rt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return H0(t.timestampValue,e.timestampValue);case 4:return H0(Hl(t),Hl(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Es(s),l=Es(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ye(a[c],l[c]);if(h!==0)return h}return ye(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ye(rt(s.latitude),rt(o.latitude));return a!==0?a:ye(rt(s.longitude),rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return q0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},m=o.fields||{},v=(a=f.value)===null||a===void 0?void 0:a.arrayValue,w=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=ye(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:q0(v,w)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Tc.mapValue&&o===Tc.mapValue)return 0;if(s===Tc.mapValue)return 1;if(o===Tc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=ye(l[f],h[f]);if(m!==0)return m;const v=zo(a[l[f]],c[h[f]]);if(v!==0)return v}return ye(l.length,h.length)}(t.mapValue,e.mapValue);default:throw re()}}function H0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Ai(t),r=Ai(e),i=ye(n.seconds,r.seconds);return i!==0?i:ye(n.nanos,r.nanos)}function q0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=zo(n[i],r[i]);if(s)return s}return ye(n.length,r.length)}function Wo(t){return Lm(t)}function Lm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ai(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Lm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Lm(n.fields[o])}`;return i+"}"}(t.mapValue):re()}function G0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mm(t){return!!t&&"integerValue"in t}function k_(t){return!!t&&"arrayValue"in t}function K0(t){return!!t&&"nullValue"in t}function Q0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gc(t){return!!t&&"mapValue"in t}function NL(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function dl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=dl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dl(n)}setAll(e){let n=xt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=dl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Gc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Gc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ms(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Zt(dl(this.value))}}function ck(t){const e=[];return Ms(t.fields,(n,r)=>{const i=new xt([n]);if(Gc(r)){const s=ck(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Bt(e,0,se.min(),se.min(),se.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,i){return new Bt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new Bt(e,2,n,se.min(),se.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new Bt(e,3,n,se.min(),se.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n){this.position=e,this.inclusive=n}}function Y0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=zo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function X0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ar(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function DL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{}class at extends hk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LL(e,n,r):n==="array-contains"?new jL(e,r):n==="in"?new FL(e,r):n==="not-in"?new UL(e,r):n==="array-contains-any"?new BL(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ML(e,r):new VL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zo(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(zo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends hk{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Qn(e,n)}matches(e){return dk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dk(t){return t.op==="and"}function fk(t){return OL(t)&&dk(t)}function OL(t){for(const e of t.filters)if(e instanceof Qn)return!1;return!0}function Vm(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+Wo(t.value);if(fk(t))return t.filters.map(e=>Vm(e)).join(",");{const e=t.filters.map(n=>Vm(n)).join(",");return`${t.op}(${e})`}}function pk(t,e){return t instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.field.isEqual(i.field)&&ar(r.value,i.value)}(t,e):t instanceof Qn?function(r,i){return i instanceof Qn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&pk(o,i.filters[a]),!0):!1}(t,e):void re()}function mk(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${Wo(n.value)}`}(t):t instanceof Qn?function(n){return n.op.toString()+" {"+n.getFilters().map(mk).join(" ,")+"}"}(t):"Filter"}class LL extends at{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class ML extends at{constructor(e,n){super(e,"in",n),this.keys=gk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VL extends at{constructor(e,n){super(e,"not-in",n),this.keys=gk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class jL extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return k_(n)&&Gl(n.arrayValue,this.value)}}class FL extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gl(this.value.arrayValue,n)}}class UL extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gl(this.value.arrayValue,n)}}class BL extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!k_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function J0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new zL(t,e,n,r,i,s,o)}function x_(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wo(r)).join(",")),e.ue=n}return e.ue}function R_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!X0(t.startAt,e.startAt)&&X0(t.endAt,e.endAt)}function jm(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function WL(t,e,n,r,i,s,o,a){return new la(t,e,n,r,i,s,o,a)}function bd(t){return new la(t)}function Z0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _k(t){return t.collectionGroup!==null}function fl(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new At(xt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Kl(s,r))}),n.has(xt.keyField().canonicalString())||e.ce.push(new Kl(xt.keyField(),r))}return e.ce}function ir(t){const e=oe(t);return e.le||(e.le=$L(e,fl(t))),e.le}function $L(t,e){if(t.limitType==="F")return J0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Kl(i.field,s)});const n=t.endAt?new Lh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lh(t.startAt.position,t.startAt.inclusive):null;return J0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fm(t,e){const n=t.filters.concat([e]);return new la(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Mh(t,e,n){return new la(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dd(t,e){return R_(ir(t),ir(e))&&t.limitType===e.limitType}function yk(t){return`${x_(ir(t))}|lt:${t.limitType}`}function eo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>mk(i)).join(", ")}]`),Nd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Wo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Wo(i)).join(",")),`Target(${r})`}(ir(t))}; limitType=${t.limitType})`}function Od(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of fl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Y0(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,fl(r),i)||r.endAt&&!function(o,a,l){const c=Y0(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,fl(r),i))}(t,e)}function HL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vk(t){return(e,n)=>{let r=!1;for(const i of fl(t)){const s=qL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qL(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?zo(l,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=new ut(J.comparator);function Ur(){return GL}const wk=new ut(J.comparator);function Za(...t){let e=wk;for(const n of t)e=e.insert(n.key,n);return e}function Ek(t){let e=wk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function is(){return pl()}function Tk(){return pl()}function pl(){return new ua(t=>t.toString(),(t,e)=>t.isEqual(e))}const KL=new ut(J.comparator),QL=new At(J.comparator);function pe(...t){let e=QL;for(const n of t)e=e.add(n);return e}const YL=new At(ye);function XL(){return YL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oh(e)?"-0":e}}function Ik(t){return{integerValue:""+t}}function Sk(t,e){return RL(e)?Ik(e):A_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this._=void 0}}function JL(t,e,n){return t instanceof Ql?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&S_(s)&&(s=C_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof $o?kk(t,e):t instanceof Ho?xk(t,e):function(i,s){const o=Ck(i,s),a=eE(o)+eE(i.Pe);return Mm(o)&&Mm(i.Pe)?Ik(a):A_(i.serializer,a)}(t,e)}function ZL(t,e,n){return t instanceof $o?kk(t,e):t instanceof Ho?xk(t,e):n}function Ck(t,e){return t instanceof Yl?function(r){return Mm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ql extends Ld{}class $o extends Ld{constructor(e){super(),this.elements=e}}function kk(t,e){const n=Rk(e);for(const r of t.elements)n.some(i=>ar(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ho extends Ld{constructor(e){super(),this.elements=e}}function xk(t,e){let n=Rk(e);for(const r of t.elements)n=n.filter(i=>!ar(i,r));return{arrayValue:{values:n}}}class Yl extends Ld{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function eE(t){return rt(t.integerValue||t.doubleValue)}function Rk(t){return k_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n){this.field=e,this.transform=n}}function eM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof $o&&i instanceof $o||r instanceof Ho&&i instanceof Ho?Bo(r.elements,i.elements,ar):r instanceof Yl&&i instanceof Yl?ar(r.Pe,i.Pe):r instanceof Ql&&i instanceof Ql}(t.transform,e.transform)}class tM{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vd{}function Ak(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new P_(t.key,Cn.none()):new Tu(t.key,t.data,Cn.none());{const n=t.data,r=Zt.empty();let i=new At(xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zi(t.key,r,new fn(i.toArray()),Cn.none())}}function nM(t,e,n){t instanceof Tu?function(i,s,o){const a=i.value.clone(),l=nE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof zi?function(i,s,o){if(!Kc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=nE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Pk(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ml(t,e,n,r){return t instanceof Tu?function(s,o,a,l){if(!Kc(s.precondition,o))return a;const c=s.value.clone(),h=rE(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zi?function(s,o,a,l){if(!Kc(s.precondition,o))return a;const c=rE(s.fieldTransforms,l,o),h=o.data;return h.setAll(Pk(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Kc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Ck(r.transform,i||null);s!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,s))}return n||null}function tE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bo(r,i,(s,o)=>eM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tu extends Vd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zi extends Vd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Pk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nE(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ZL(o,a,n[i]))}return r}function rE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JL(s,o,e))}return r}class P_ extends Vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iM extends Vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ml(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ml(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Tk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Ak(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&Bo(this.mutations,e.mutations,(n,r)=>tE(n,r))&&Bo(this.baseMutations,e.baseMutations,(n,r)=>tE(n,r))}}class N_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return KL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new N_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,me;function lM(t){switch(t){default:return re();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function Nk(t){if(t===void 0)return Fr("GRPC error has no .code"),j.UNKNOWN;switch(t){case st.OK:return j.OK;case st.CANCELLED:return j.CANCELLED;case st.UNKNOWN:return j.UNKNOWN;case st.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case st.INTERNAL:return j.INTERNAL;case st.UNAVAILABLE:return j.UNAVAILABLE;case st.UNAUTHENTICATED:return j.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case st.NOT_FOUND:return j.NOT_FOUND;case st.ALREADY_EXISTS:return j.ALREADY_EXISTS;case st.PERMISSION_DENIED:return j.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case st.ABORTED:return j.ABORTED;case st.OUT_OF_RANGE:return j.OUT_OF_RANGE;case st.UNIMPLEMENTED:return j.UNIMPLEMENTED;case st.DATA_LOSS:return j.DATA_LOSS;default:return re()}}(me=st||(st={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=new hs([4294967295,4294967295],0);function iE(t){const e=uM().encode(t),n=new ek;return n.update(e),new Uint8Array(n.digest())}function sE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new hs([n,r],0),new hs([i,s],0)]}class b_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new el(`Invalid padding: ${n}`);if(r<0)throw new el(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new el(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new el(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(hs.fromNumber(r)));return i.compare(cM)===1&&(i=new hs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=iE(e),[r,i]=sE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new b_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=iE(e),[r,i]=sE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class el extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Iu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new jd(se.min(),i,new ut(ye),Ur(),pe())}}class Iu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Iu(r,n,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class bk{constructor(e,n){this.targetId=e,this.me=n}}class Dk{constructor(e,n,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class oE{constructor(){this.fe=0,this.ge=lE(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=pe(),n=pe(),r=pe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new Iu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=lE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ur(),this.qe=aE(),this.Qe=new ut(ye)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(jm(s))if(r===0){const o=new J(s.path);this.Ue(n,o,Bt.newNoDocument(o,se.min()))}else Se(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Es(r).toUint8Array()}catch(l){if(l instanceof uk)return Uo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new b_(o,i,s)}catch(l){return Uo(l instanceof el?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&jm(a.target)){const l=new J(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Bt.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=pe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new jd(e,n,this.Qe,this.ke,r);return this.ke=Ur(),this.qe=aE(),this.Qe=new ut(ye),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new oE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new At(ye),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new oE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function aE(){return new ut(J.comparator)}function lE(){return new ut(J.comparator)}const dM={asc:"ASCENDING",desc:"DESCENDING"},fM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pM={and:"AND",or:"OR"};class mM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Um(t,e){return t.useProto3Json||Nd(e)?e:{value:e}}function Vh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ok(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gM(t,e){return Vh(t,e.toTimestamp())}function sr(t){return Se(!!t),se.fromTimestamp(function(n){const r=Ai(n);return new ft(r.seconds,r.nanos)}(t))}function D_(t,e){return Bm(t,e).canonicalString()}function Bm(t,e){const n=function(i){return new Fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Lk(t){const e=Fe.fromString(t);return Se(Uk(e)),e}function zm(t,e){return D_(t.databaseId,e.path)}function dp(t,e){const n=Lk(e);if(n.get(1)!==t.databaseId.projectId)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(Vk(n))}function Mk(t,e){return D_(t.databaseId,e)}function _M(t){const e=Lk(t);return e.length===4?Fe.emptyPath():Vk(e)}function Wm(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vk(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uE(t,e,n){return{name:zm(t,e),fields:n.value.mapValue.fields}}function yM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Se(h===void 0||typeof h=="string"),bt.fromBase64String(h||"")):(Se(h===void 0||h instanceof Buffer||h instanceof Uint8Array),bt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:Nk(c.code);return new H(h,c.message||"")}(o);n=new Dk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=dp(t,r.document.name),s=sr(r.document.updateTime),o=r.document.createTime?sr(r.document.createTime):se.min(),a=new Zt({mapValue:{fields:r.document.fields}}),l=Bt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Qc(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=dp(t,r.document),s=r.readTime?sr(r.readTime):se.min(),o=Bt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=dp(t,r.document),s=r.removedTargetIds||[];n=new Qc([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new aM(i,s),a=r.targetId;n=new bk(a,o)}}return n}function vM(t,e){let n;if(e instanceof Tu)n={update:uE(t,e.key,e.value)};else if(e instanceof P_)n={delete:zm(t,e.key)};else if(e instanceof zi)n={update:uE(t,e.key,e.data),updateMask:RM(e.fieldMask)};else{if(!(e instanceof iM))return re();n={verify:zm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ql)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ho)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(t,e.precondition)),n}function wM(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?sr(i.updateTime):sr(s);return o.isEqual(se.min())&&(o=sr(s)),new tM(o,i.transformResults||[])}(n,e))):[]}function EM(t,e){return{documents:[Mk(t,e.path)]}}function TM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mk(t,i);const s=function(c){if(c.length!==0)return Fk(Qn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:to(m.field),direction:CM(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Um(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function IM(t){let e=_M(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=jk(f);return m instanceof Qn&&fk(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(w){return new Kl(no(w.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Nd(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,v=f.values||[];return new Lh(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new Lh(v,m)}(n.endAt)),WL(e,i,o,s,a,"F",l,c)}function SM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=no(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=no(n.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=no(n.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=no(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return at.create(no(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qn.create(n.compositeFilter.filters.map(r=>jk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function CM(t){return dM[t]}function kM(t){return fM[t]}function xM(t){return pM[t]}function to(t){return{fieldPath:t.canonicalString()}}function no(t){return xt.fromServerFormat(t.fieldPath)}function Fk(t){return t instanceof at?function(n){if(n.op==="=="){if(Q0(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NAN"}};if(K0(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Q0(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NAN"}};if(K0(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(n.field),op:kM(n.op),value:n.value}}}(t):t instanceof Qn?function(n){const r=n.getFilters().map(i=>Fk(i));return r.length===1?r[0]:{compositeFilter:{op:xM(n.op),filters:r}}}(t):re()}function RM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r,i,s=se.min(),o=se.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e){this.ct=e}}function PM(t){const e=IM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(){this.un=new bM}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Ri.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class bM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new At(Fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new At(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new qo(0)}static kn(){return new qo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(){this.changes=new ua(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ml(r.mutation,i,fn.empty(),ft.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const i=is();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Za();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=is();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ur();const o=pl(),a=function(){return pl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof zi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ml(h.mutation,c,h.mutation.getFieldMask(),ft.now())):o.set(c.key,fn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new OM(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=pl();let i=new ut((o,a)=>o-a),s=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||fn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||pe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=Tk();h.forEach(m=>{if(!s.has(m)){const v=Ak(n.get(m),r.get(m));v!==null&&f.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_k(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(is());let a=-1,l=s;return o.next(c=>U.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,pe())).next(h=>({batchId:a,changes:Ek(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Za();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Za();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,l=>{const c=function(f,m){return new la(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Bt.newInvalidDocument(h)))});let a=Za();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&ml(h.mutation,c,fn.empty(),ft.now()),Od(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sr(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:PM(i.bundledQuery),readTime:sr(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(){this.overlays=new ut(J.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=is();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=is(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ut((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=is(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=is(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oM(n,r));let s=this.Ir.get(n);s===void 0&&(s=pe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.Tr=new At(_t.Er),this.dr=new At(_t.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new _t(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new _t(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new Fe([])),r=new _t(n,e),i=new _t(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new Fe([])),r=new _t(n,e),i=new _t(n,e+1);let s=pe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _t(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _t{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||ye(e.wr,n.wr)}static Ar(e,n){return ye(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new At(_t.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new _t(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _t(n,0),i=new _t(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new At(ye);return n.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new _t(new J(s),0);let a=new At(ye);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new _t(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new _t(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(e){this.Mr=e,this.docs=function(){return new ut(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Bt.newInvalidDocument(n))}getEntries(e,n){let r=Ur();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Bt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ur();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||SL(IL(h),r)<=0||(i.has(h.key)||Od(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BM(this)}getSize(e){return U.resolve(this.size)}}class BM extends DM{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.persistence=e,this.Nr=new ua(n=>x_(n),R_),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new O_,this.targetCount=0,this.kr=qo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new qo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n){this.qr={},this.overlays={},this.Qr=new I_(0),this.Kr=!1,this.Kr=!0,this.$r=new jM,this.referenceDelegate=e(this),this.Ur=new zM(this),this.indexManager=new NM,this.remoteDocumentCache=function(i){return new UM(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new AM(n),this.Gr=new MM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new FM(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new $M(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class $M extends kL{constructor(e){super(),this.currentSequenceNumber=e}}class L_{constructor(e){this.persistence=e,this.Jr=new O_,this.Yr=null}static Zr(e){return new L_(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=pe(),i=pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new M_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Nb()?8:xL($t())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new HM;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Fa()<=fe.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",eo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Fa()<=fe.DEBUG&&Y("QueryEngine","Query:",eo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Fa()<=fe.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",eo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(n))):U.resolve())}Yi(e,n){if(Z0(n))return U.resolve(null);let r=ir(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Mh(n,null,"F"),r=ir(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=pe(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,Mh(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return Z0(n)||i.isEqual(se.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(Fa()<=fe.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),eo(n)),this.rs(e,o,n,TL(i,-1)).next(a=>a))})}ts(e,n){let r=new At(vk(e));return n.forEach((i,s)=>{Od(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Fa()<=fe.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",eo(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ri.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ut(ye),this._s=new ua(s=>x_(s),R_),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function KM(t,e,n,r){return new GM(t,e,n,r)}async function Bk(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=pe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function QM(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,m=f.keys();let v=U.resolve();return m.forEach(w=>{v=v.next(()=>h.getEntry(l,w)).next(A=>{const P=c.docVersions.get(w);Se(P!==null),A.version.compareTo(P)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=pe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function zk(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function YM(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(bt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(f,v),function(A,P,T){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,v,h)&&a.push(n.Ur.updateTargetData(s,v))});let l=Ur(),c=pe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(XM(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(se.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function XM(t,e,n){let r=pe(),i=pe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ur();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function JM(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZM(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new hi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function $m(t,e,n){const r=oe(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Eu(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function cE(t,e,n){const r=oe(t);let i=se.min(),s=pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=oe(l),m=f._s.get(h);return m!==void 0?U.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,ir(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:pe())).next(a=>(eV(r,HL(e),a),{documents:a,Ts:s})))}function eV(t,e,n){let r=t.us.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class hE{constructor(){this.activeTargetIds=XL()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tV{constructor(){this.so=new hE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new hE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic=null;function fp(){return Ic===null?Ic=function(){return 268435456+Math.round(2147483648*Math.random())}():Ic++,"0x"+Ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class sV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=fp(),l=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Uo("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+aa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=rV[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=fp();return new Promise((o,a)=>{const l=new tk;l.setWithCredentials(!0),l.listenOnce(nk.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qc.NO_ERROR:const h=l.getResponseJson();Y(jt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case qc.TIMEOUT:Y(jt,`RPC '${e}' ${s} timed out`),a(new H(j.DEADLINE_EXCEEDED,"Request time out"));break;case qc.HTTP_ERROR:const f=l.getStatus();if(Y(jt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const w=function(P){const T=P.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(T)>=0?T:j.UNKNOWN}(v.status);a(new H(w,v.message))}else a(new H(j.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(j.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Y(jt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Y(jt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=fp(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sk(),a=ik(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");Y(jt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,v=!1;const w=new iV({Io:P=>{v?Y(jt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(Y(jt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),Y(jt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},To:()=>f.close()}),A=(P,T,E)=>{P.listen(T,I=>{try{E(I)}catch(D){setTimeout(()=>{throw D},0)}})};return A(f,Ja.EventType.OPEN,()=>{v||(Y(jt,`RPC '${e}' stream ${i} transport opened.`),w.yo())}),A(f,Ja.EventType.CLOSE,()=>{v||(v=!0,Y(jt,`RPC '${e}' stream ${i} transport closed`),w.So())}),A(f,Ja.EventType.ERROR,P=>{v||(v=!0,Uo(jt,`RPC '${e}' stream ${i} transport errored:`,P),w.So(new H(j.UNAVAILABLE,"The operation could not be completed")))}),A(f,Ja.EventType.MESSAGE,P=>{var T;if(!v){const E=P.data[0];Se(!!E);const I=E,D=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(D){Y(jt,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let V=function(C){const k=st[C];if(k!==void 0)return Nk(k)}(F),S=D.message;V===void 0&&(V=j.INTERNAL,S="Unknown error status: "+F+" with message "+D.message),v=!0,w.So(new H(V,S)),f.close()}else Y(jt,`RPC '${e}' stream ${i} received:`,E),w.bo(E)}}),A(a,rk.STAT_EVENT,P=>{P.stat===Dm.PROXY?Y(jt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Dm.NOPROXY&&Y(jt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.wo()},0),w}}function pp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t){return new mM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Wk(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Fr(n.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oV extends $k{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=yM(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?sr(o.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Wm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=jm(l)?{documents:EM(s,l)}:{query:TM(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ok(s,o.resumeToken);const c=Um(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){a.readTime=Vh(s,o.snapshotVersion.toTimestamp());const c=Um(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=SM(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Wm(this.serializer),n.removeTarget=e,this.a_(n)}}class aV extends $k{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=wM(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Wm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vM(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Bm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Bm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class uV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Fr(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Vs(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=oe(l);c.L_.add(4),await Su(c),c.q_.set("Unknown"),c.L_.delete(4),await Ud(c)}(this))})}),this.q_=new uV(r,i)}}async function Ud(t){if(Vs(t))for(const e of t.B_)await e(!0)}async function Su(t){for(const e of t.B_)await e(!1)}function Hk(t,e){const n=oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),U_(n)?F_(n):ca(n).r_()&&j_(n,e))}function V_(t,e){const n=oe(t),r=ca(n);n.N_.delete(e),r.r_()&&qk(n,e),n.N_.size===0&&(r.r_()?r.o_():Vs(n)&&n.q_.set("Unknown"))}function j_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ca(t).A_(e)}function qk(t,e){t.Q_.xe(e),ca(t).R_(e)}function F_(t){t.Q_=new hM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ca(t).start(),t.q_.v_()}function U_(t){return Vs(t)&&!ca(t).n_()&&t.N_.size>0}function Vs(t){return oe(t).L_.size===0}function Gk(t){t.Q_=void 0}async function hV(t){t.q_.set("Online")}async function dV(t){t.N_.forEach((e,n)=>{j_(t,e)})}async function fV(t,e){Gk(t),U_(t)?(t.q_.M_(e),F_(t)):t.q_.set("Unknown")}async function pV(t,e,n){if(t.q_.set("Online"),e instanceof Dk&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jh(t,r)}else if(e instanceof Qc?t.Q_.Ke(e):e instanceof bk?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await zk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(bt.EMPTY_BYTE_STRING,h.snapshotVersion)),qk(s,l);const f=new hi(h.target,l,c,h.sequenceNumber);j_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await jh(t,r)}}async function jh(t,e,n){if(!Eu(e))throw e;t.L_.add(1),await Su(t),t.q_.set("Offline"),n||(n=()=>zk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ud(t)})}function Kk(t,e){return e().catch(n=>jh(t,n,e))}async function Bd(t){const e=oe(t),n=Pi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;mV(e);)try{const i=await JM(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,gV(e,i)}catch(i){await jh(e,i)}Qk(e)&&Yk(e)}function mV(t){return Vs(t)&&t.O_.length<10}function gV(t,e){t.O_.push(e);const n=Pi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Qk(t){return Vs(t)&&!Pi(t).n_()&&t.O_.length>0}function Yk(t){Pi(t).start()}async function _V(t){Pi(t).p_()}async function yV(t){const e=Pi(t);for(const n of t.O_)e.m_(n.mutations)}async function vV(t,e,n){const r=t.O_.shift(),i=N_.from(r,e,n);await Kk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bd(t)}async function wV(t,e){e&&Pi(t).V_&&await async function(r,i){if(function(o){return lM(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Pi(r).s_(),await Kk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Bd(r)}}(t,e),Qk(t)&&Yk(t)}async function fE(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=Vs(n);n.L_.add(3),await Su(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ud(n)}async function EV(t,e){const n=oe(t);e?(n.L_.delete(2),await Ud(n)):e||(n.L_.add(2),await Su(n),n.q_.set("Unknown"))}function ca(t){return t.K_||(t.K_=function(n,r,i){const s=oe(n);return s.w_(),new oV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:hV.bind(null,t),Ro:dV.bind(null,t),mo:fV.bind(null,t),d_:pV.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),U_(t)?F_(t):t.q_.set("Unknown")):(await t.K_.stop(),Gk(t))})),t.K_}function Pi(t){return t.U_||(t.U_=function(n,r,i){const s=oe(n);return s.w_(),new aV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:_V.bind(null,t),mo:wV.bind(null,t),f_:yV.bind(null,t),g_:vV.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Bd(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new B_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function z_(t,e){if(Fr("AsyncQueue",`${e}: ${t}`),Eu(t))return new H(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Za(),this.sortedSet=new ut(this.comparator)}static emptySet(e){return new ko(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ko;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.W_=new ut(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Go{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Go(e,n,ko.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class IV{constructor(){this.queries=mE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=mE(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new H(j.ABORTED,"Firestore shutting down"))}}function mE(){return new ua(t=>yk(t),Dd)}async function W_(t,e){const n=oe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new TV,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=z_(o,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&H_(n)}async function $_(t,e){const n=oe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SV(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&H_(n)}function CV(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function H_(t){t.Y_.forEach(e=>{e.next()})}var Hm,gE;(gE=Hm||(Hm={})).ea="default",gE.Cache="cache";class q_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Go(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Hm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.key=e}}class Jk{constructor(e){this.key=e}}class kV{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=pe(),this.mutatedKeys=pe(),this.Aa=vk(e),this.Ra=new ko(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new pE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),v=Od(this.query,f)?f:null,w=!!m&&this.mutatedKeys.has(m.key),A=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let P=!1;m&&v?m.data.isEqual(v.data)?w!==A&&(r.track({type:3,doc:v}),P=!0):this.ga(m,v)||(r.track({type:2,doc:v}),P=!0,(l&&this.Aa(v,l)>0||c&&this.Aa(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),P=!0):m&&!v&&(r.track({type:1,doc:m}),P=!0,(l||c)&&(a=!0)),P&&(v?(o=o.add(v),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(v,w){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return A(v)-A(w)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Go(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new pE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=pe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Jk(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Xk(r))}),n}ba(e){this.Ta=e.Ts,this.da=pe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Go.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class xV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RV{constructor(e){this.key=e,this.va=!1}}class AV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ua(a=>yk(a),Dd),this.Ma=new Map,this.xa=new Set,this.Oa=new ut(J.comparator),this.Na=new Map,this.La=new O_,this.Ba={},this.ka=new Map,this.qa=qo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function PV(t,e,n=!0){const r=ix(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Zk(r,e,n,!0),i}async function NV(t,e){const n=ix(t);await Zk(n,e,!0,!1)}async function Zk(t,e,n,r){const i=await ZM(t.localStore,ir(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await bV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Hk(t.remoteStore,i),a}async function bV(t,e,n,r,i){t.Ka=(f,m,v)=>async function(A,P,T,E){let I=P.view.ma(T);I.ns&&(I=await cE(A.localStore,P.query,!1).then(({documents:S})=>P.view.ma(S,I)));const D=E&&E.targetChanges.get(P.targetId),F=E&&E.targetMismatches.get(P.targetId)!=null,V=P.view.applyChanges(I,A.isPrimaryClient,D,F);return yE(A,P.targetId,V.wa),V.snapshot}(t,f,m,v);const s=await cE(t.localStore,e,!0),o=new kV(e,s.Ts),a=o.ma(s.documents),l=Iu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);yE(t,n,c.wa);const h=new xV(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function DV(t,e,n){const r=oe(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Dd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await $m(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&V_(r.remoteStore,i.targetId),qm(r,i.targetId)}).catch(wu)):(qm(r,i.targetId),await $m(r.localStore,i.targetId,!0))}async function OV(t,e){const n=oe(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),V_(n.remoteStore,r.targetId))}async function LV(t,e,n){const r=zV(t);try{const i=await function(o,a){const l=oe(o),c=ft.now(),h=a.reduce((v,w)=>v.add(w.key),pe());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let w=Ur(),A=pe();return l.cs.getEntries(v,h).next(P=>{w=P,w.forEach((T,E)=>{E.isValidDocument()||(A=A.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,w)).next(P=>{f=P;const T=[];for(const E of a){const I=rM(E,f.get(E.key).overlayedDocument);I!=null&&T.push(new zi(E.key,I,ck(I.value.mapValue),Cn.exists(!0)))}return l.mutationQueue.addMutationBatch(v,c,T,a)}).next(P=>{m=P;const T=P.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(v,P.batchId,T)})}).then(()=>({batchId:m.batchId,changes:Ek(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new ut(ye)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Cu(r,i.changes),await Bd(r.remoteStore)}catch(i){const s=z_(i,"Failed to persist write");n.reject(s)}}async function ex(t,e){const n=oe(t);try{const r=await YM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Se(o.va):i.removedDocuments.size>0&&(Se(o.va),o.va=!1))}),await Cu(n,r,e)}catch(r){await wu(r)}}function _E(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=oe(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&H_(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MV(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ut(J.comparator);o=o.insert(s,Bt.newNoDocument(s,se.min()));const a=pe().add(s),l=new jd(se.min(),new Map,new ut(ye),o,a);await ex(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),G_(r)}else await $m(r.localStore,e,!1).then(()=>qm(r,e,n)).catch(wu)}async function VV(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await QM(n.localStore,e);nx(n,r,null),tx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cu(n,i)}catch(i){await wu(i)}}async function jV(t,e,n){const r=oe(t);try{const i=await function(o,a){const l=oe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Se(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);nx(r,e,n),tx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cu(r,i)}catch(i){await wu(i)}}function tx(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function nx(t,e,n){const r=oe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function qm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||rx(t,r)})}function rx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(V_(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),G_(t))}function yE(t,e,n){for(const r of n)r instanceof Xk?(t.La.addReference(r.key,e),FV(t,r)):r instanceof Jk?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||rx(t,r.key)):re()}function FV(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),G_(t))}function G_(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(Fe.fromString(e)),r=t.qa.next();t.Na.set(r,new RV(n)),t.Oa=t.Oa.insert(n,r),Hk(t.remoteStore,new hi(ir(bd(n.path)),r,"TargetPurposeLimboResolution",I_.oe))}}async function Cu(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=M_.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=oe(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,m=>U.forEach(m.$i,v=>h.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>U.forEach(m.Ui,v=>h.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!Eu(f))throw f;Y("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=h.os.get(m),w=v.snapshotVersion,A=v.withLastLimboFreeSnapshotVersion(w);h.os=h.os.insert(m,A)}}}(r.localStore,s))}async function UV(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await Bk(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new H(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cu(n,r.hs)}}function BV(t,e){const n=oe(t),r=n.Na.get(e);if(r&&r.va)return pe().add(r.key);{let i=pe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function ix(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ex.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MV.bind(null,e),e.Ca.d_=SV.bind(null,e.eventManager),e.Ca.$a=CV.bind(null,e.eventManager),e}function zV(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jV.bind(null,e),e}class Fh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return KM(this.persistence,new qM,e.initialUser,this.serializer)}Ga(e){return new WM(L_.Zr,this.serializer)}Wa(e){return new tV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fh.provider={build:()=>new Fh};class Gm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_E(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UV.bind(null,this.syncEngine),await EV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IV}()}createDatastore(e){const n=Fd(e.databaseInfo.databaseId),r=function(s){return new sV(s)}(e.databaseInfo);return function(s,o,a,l){return new lV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new cV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>_E(this.syncEngine,n,0),function(){return dE.D()?new dE:new nV}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new AV(i,s,o,a,l,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);Y("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Su(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Gm.provider={build:()=>new Gm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ft.UNAUTHENTICATED,this.clientId=ak.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=z_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mp(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Bk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $V(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>fE(e.remoteStore,i)),t._onlineComponents=e}async function $V(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await mp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Uo("Error using user provided cache. Falling back to memory cache: "+n),await mp(t,new Fh)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await mp(t,new Fh);return t._offlineComponents}async function sx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await vE(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await vE(t,new Gm))),t._onlineComponents}function HV(t){return sx(t).then(e=>e.syncEngine)}async function Uh(t){const e=await sx(t),n=e.eventManager;return n.onListen=PV.bind(null,e.syncEngine),n.onUnlisten=DV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=NV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=OV.bind(null,e.syncEngine),n}function qV(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new K_({next:m=>{h.Za(),o.enqueueAndForget(()=>$_(s,f));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new H(j.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?c.reject(new H(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new q_(bd(a.path),h,{includeMetadataChanges:!0,_a:!0});return W_(s,f)}(await Uh(t),t.asyncQueue,e,n,r)),r.promise}function GV(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new K_({next:m=>{h.Za(),o.enqueueAndForget(()=>$_(s,f)),m.fromCache&&l.source==="server"?c.reject(new H(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new q_(a,h,{includeMetadataChanges:!0,_a:!0});return W_(s,f)}(await Uh(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t,e,n){if(!n)throw new H(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KV(t,e,n,r){if(e===!0&&r===!0)throw new H(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function EE(t){if(!J.isDocumentKey(t))throw new H(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function TE(t){if(J.isDocumentKey(t))throw new H(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zd(t);throw new H(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function QV(t,e){if(e<=0)throw new H(j.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ox((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new IE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new IE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fL;switch(r.type){case"firstParty":return new _L(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wE.get(n);r&&(Y("ComponentProvider","Removing Datastore"),wE.delete(n),r.terminate())}(this),Promise.resolve()}}function YV(t,e,n,r={}){var i;const s=(t=an(t,Wd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ft.MOCK_USER;else{a=hC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ft(c)}t._authCredentials=new pL(new ok(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qr(this.firestore,e,this._query)}}class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class Ii extends qr{constructor(e,n,r){super(e,n,bd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new J(e))}withConverter(e){return new Ii(this.firestore,e,this._path)}}function lr(t,e,...n){if(t=we(t),ax("collection","path",e),t instanceof Wd){const r=Fe.fromString(e,...n);return TE(r),new Ii(t,null,r)}{if(!(t instanceof zt||t instanceof Ii))throw new H(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return TE(r),new Ii(t.firestore,null,r)}}function ln(t,e,...n){if(t=we(t),arguments.length===1&&(e=ak.newId()),ax("doc","path",e),t instanceof Wd){const r=Fe.fromString(e,...n);return EE(r),new zt(t,null,new J(r))}{if(!(t instanceof zt||t instanceof Ii))throw new H(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return EE(r),new zt(t.firestore,t instanceof Ii?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Wk(this,"async_queue_retry"),this.Vu=()=>{const r=pp();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=pp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=pp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Pr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Eu(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Fr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=B_.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function CE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Br extends Wd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new SE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new SE(e),this._firestoreClient=void 0,await e}}}function XV(t,e){const n=typeof t=="object"?t:xd(),r=typeof t=="string"?t:"(default)",i=Os(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lC("firestore");s&&YV(i,...s)}return i}function $d(t){if(t._terminated)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||JV(t),t._firestoreClient}function JV(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new PL(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ox(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new WV(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ko(bt.fromBase64String(e))}catch(n){throw new H(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ko(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZV=/^__.*__$/;class ej{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tu(e,this.data,n,this.fieldTransforms)}}class lx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ux(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class qd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new qd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Bh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ux(this.Cu)&&ZV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class tj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fd(e)}Qu(e,n,r,i=!1){return new qd({Cu:e,methodName:n,qu:r,path:xt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gd(t){const e=t._freezeSettings(),n=Fd(t._databaseId);return new tj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cx(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);ty("Data must be an object, but it was:",o,r);const a=dx(r,o);let l,c;if(s.merge)l=new fn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=Km(e,f,n);if(!o.contains(m))throw new H(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);px(h,m)||h.push(m)}l=new fn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new ej(new Zt(a),l,c)}class Kd extends js{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kd}}function hx(t,e,n){return new qd({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class X_ extends js{_toFieldTransform(e){return new Md(e.path,new Ql)}isEqual(e){return e instanceof X_}}class J_ extends js{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=hx(this,e,!0),r=this.Ku.map(s=>Fs(s,n)),i=new $o(r);return new Md(e.path,i)}isEqual(e){return e instanceof J_&&Vo(this.Ku,e.Ku)}}class Z_ extends js{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=hx(this,e,!0),r=this.Ku.map(s=>Fs(s,n)),i=new Ho(r);return new Md(e.path,i)}isEqual(e){return e instanceof Z_&&Vo(this.Ku,e.Ku)}}class ey extends js{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Yl(e.serializer,Sk(e.serializer,this.$u));return new Md(e.path,n)}isEqual(e){return e instanceof ey&&this.$u===e.$u}}function nj(t,e,n,r){const i=t.Qu(1,e,n);ty("Data must be an object, but it was:",i,r);const s=[],o=Zt.empty();Ms(r,(l,c)=>{const h=ny(e,l,n);c=we(c);const f=i.Nu(h);if(c instanceof Kd)s.push(h);else{const m=Fs(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new fn(s);return new lx(o,a,i.fieldTransforms)}function rj(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Km(e,r,n)],l=[i];if(s.length%2!=0)throw new H(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Km(e,s[m])),l.push(s[m+1]);const c=[],h=Zt.empty();for(let m=a.length-1;m>=0;--m)if(!px(c,a[m])){const v=a[m];let w=l[m];w=we(w);const A=o.Nu(v);if(w instanceof Kd)c.push(v);else{const P=Fs(w,A);P!=null&&(c.push(v),h.set(v,P))}}const f=new fn(c);return new lx(h,f,o.fieldTransforms)}function ij(t,e,n,r=!1){return Fs(n,t.Qu(r?4:3,e))}function Fs(t,e){if(fx(t=we(t)))return ty("Unsupported field value:",e,t),dx(t,e);if(t instanceof js)return function(r,i){if(!ux(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Fs(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ft.fromDate(r);return{timestampValue:Vh(i.serializer,s)}}if(r instanceof ft){const s=new ft(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vh(i.serializer,s)}}if(r instanceof Q_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ko)return{bytesValue:Ok(i.serializer,r._byteString)};if(r instanceof zt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:D_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Y_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return A_(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${zd(r)}`)}(t,e)}function dx(t,e){const n={};return lk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(t,(r,i)=>{const s=Fs(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ft||t instanceof Q_||t instanceof Ko||t instanceof zt||t instanceof js||t instanceof Y_)}function ty(t,e,n){if(!fx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=zd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Km(t,e,n){if((e=we(e))instanceof Hd)return e._internalPath;if(typeof e=="string")return ny(t,e);throw Bh("Field path arguments must be of type string or ",t,!1,void 0,n)}const sj=new RegExp("[~\\*/\\[\\]]");function ny(t,e,n){if(e.search(sj)>=0)throw Bh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hd(...e.split("."))._internalPath}catch{throw Bh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new H(j.INVALID_ARGUMENT,a+t+l)}function px(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class oj extends mx{data(){return super.data()}}function Qd(t,e){return typeof e=="string"?ny(t,e):e instanceof Hd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ry{}class iy extends ry{}function Ni(t,e,...n){let r=[];e instanceof ry&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof sy).length,a=s.filter(l=>l instanceof Yd).length;if(o>1||o>0&&a>0)throw new H(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Yd extends iy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yd(e,n,r)}_apply(e){const n=this._parse(e);return _x(e._query,n),new qr(e.firestore,e.converter,Fm(e._query,n))}_parse(e){const n=Gd(e.firestore);return function(s,o,a,l,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new H(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){xE(f,h);const v=[];for(const w of f)v.push(kE(l,s,w));m={arrayValue:{values:v}}}else m=kE(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||xE(f,h),m=ij(a,o,f,h==="in"||h==="not-in");return at.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function zr(t,e,n){const r=e,i=Qd("where",t);return Yd._create(i,r,n)}class sy extends ry{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new sy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)_x(o,l),o=Fm(o,l)}(e._query,n),new qr(e.firestore,e.converter,Fm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class oy extends iy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new oy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new H(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Kl(s,o)}(e._query,this._field,this._direction);return new qr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new la(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function aj(t,e="asc"){const n=e,r=Qd("orderBy",t);return oy._create(r,n)}class ay extends iy{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ay(e,n,r)}_apply(e){return new qr(e.firestore,e.converter,Mh(e._query,this._limit,this._limitType))}}function Xl(t){return QV("limit",t),ay._create("limit",t,"F")}function kE(t,e,n){if(typeof(n=we(n))=="string"){if(n==="")throw new H(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_k(e)&&n.indexOf("/")!==-1)throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!J.isDocumentKey(r))throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return G0(t,new J(r))}if(n instanceof zt)return G0(t,n._key);throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zd(n)}.`)}function xE(t,e){if(!Array.isArray(t)||t.length===0)throw new H(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _x(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class lj{convertValue(e,n="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ms(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>rt(o.doubleValue));return new Y_(s)}convertGeoPoint(e){return new Q_(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=C_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hl(e));default:return null}}convertTimestamp(e){const n=Ai(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Se(Uk(r));const i=new ql(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||Fr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vx extends mx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yc extends vx{data(e={}){return super.data(e)}}class wx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new tl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yc(this._firestore,this._userDataWriter,r.key,r,new tl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Yc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new tl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Yc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new tl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:uj(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){t=an(t,zt);const e=an(t.firestore,Br);return qV($d(e),t._key).then(n=>Tx(e,t,n))}class ly extends lj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ko(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function Is(t){t=an(t,qr);const e=an(t.firestore,Br),n=$d(e),r=new ly(e);return gx(t._query),GV(n,t._query).then(i=>new wx(e,r,t,i))}function cj(t,e,n){t=an(t,zt);const r=an(t.firestore,Br),i=yx(t.converter,e);return Jd(r,[cx(Gd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Cn.none())])}function kn(t,e,n,...r){t=an(t,zt);const i=an(t.firestore,Br),s=Gd(i);let o;return o=typeof(e=we(e))=="string"||e instanceof Hd?rj(s,"updateDoc",t._key,e,n,r):nj(s,"updateDoc",t._key,e),Jd(i,[o.toMutation(t._key,Cn.exists(!0))])}function hj(t){return Jd(an(t.firestore,Br),[new P_(t._key,Cn.none())])}function Ex(t,e){const n=an(t.firestore,Br),r=ln(t),i=yx(t.converter,e);return Jd(n,[cx(Gd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Cn.exists(!1))]).then(()=>r)}function dj(t,...e){var n,r,i;t=we(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||CE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(CE(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof zt)c=an(t.firestore,Br),h=bd(t._key.path),l={next:f=>{e[o]&&e[o](Tx(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=an(t,qr);c=an(f.firestore,Br),h=f._query;const m=new ly(c);l={next:v=>{e[o]&&e[o](new wx(c,m,f,v))},error:e[o+1],complete:e[o+2]},gx(t._query)}return function(m,v,w,A){const P=new K_(A),T=new q_(v,P,w);return m.asyncQueue.enqueueAndForget(async()=>W_(await Uh(m),T)),()=>{P.Za(),m.asyncQueue.enqueueAndForget(async()=>$_(await Uh(m),T))}}($d(c),h,a,l)}function Jd(t,e){return function(r,i){const s=new Pr;return r.asyncQueue.enqueueAndForget(async()=>LV(await HV(r),i,s)),s.promise}($d(t),e)}function Tx(t,e,n){const r=n.docs.get(e._key),i=new ly(t);return new vx(t,i,e._key,r,new tl(n.hasPendingWrites,n.fromCache),e.converter)}function Zd(){return new X_("serverTimestamp")}function RE(...t){return new J_("arrayUnion",t)}function AE(...t){return new Z_("arrayRemove",t)}function Xs(t){return new ey("increment",t)}(function(e,n=!0){(function(i){aa=i})(Ls),Kn(new An("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Br(new mL(r.getProvider("auth-internal")),new vL(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ql(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),on(z0,"4.7.3",e),on(z0,"4.7.3","esm2017")})();var PE={};const NE="@firebase/database",bE="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ix="";function fj(t){Ix=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ht(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mj{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return hr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pj(e)}}catch{}return new mj},ss=Sx("localStorage"),gj=Sx("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Cd("@firebase/database"),_j=function(){let t=1;return function(){return t++}}(),Cx=function(t){const e=zb(t),n=new jb;n.update(e);const r=n.digest();return l_.encodeByteArray(r)},ku=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ku.apply(null,r):typeof r=="object"?e+=ht(r):e+=r,e+=" "}return e};let gl=null,DE=!0;const yj=function(t,e){W(!0,"Can't turn on custom loggers persistently."),xo.logLevel=fe.VERBOSE,gl=xo.log.bind(xo)},wt=function(...t){if(DE===!0&&(DE=!1,gl===null&&gj.get("logging_enabled")===!0&&yj()),gl){const e=ku.apply(null,t);gl(e)}},xu=function(t){return function(...e){wt(t,...e)}},Qm=function(...t){const e="FIREBASE INTERNAL ERROR: "+ku(...t);xo.error(e)},Wr=function(...t){const e=`FIREBASE FATAL ERROR: ${ku(...t)}`;throw xo.error(e),new Error(e)},Qt=function(...t){const e="FIREBASE WARNING: "+ku(...t);xo.warn(e)},vj=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ef=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wj=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Qo="[MIN_NAME]",Ss="[MAX_NAME]",Us=function(t,e){if(t===e)return 0;if(t===Qo||e===Ss)return-1;if(e===Qo||t===Ss)return 1;{const n=OE(t),r=OE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Ej=function(t,e){return t===e?0:t<e?-1:1},Ua=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ht(e))},uy=function(t){if(typeof t!="object"||t===null)return ht(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ht(e[r]),n+=":",n+=uy(t[e[r]]);return n+="}",n},kx=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xx=function(t){W(!ef(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},Tj=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ij=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Sj(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Cj=new RegExp("^-?(0*)\\d{1,10}$"),kj=-2147483648,xj=2147483647,OE=function(t){if(Cj.test(t)){const e=Number(t);if(e>=kj&&e<=xj)return e}return null},ha=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Rj=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_l=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qt(e)}}class Xc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="5",Rx="v",Ax="s",Px="r",Nx="f",bx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dx="ls",Ox="p",Ym="ac",Lx="websocket",Mx="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ss.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ss.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Nj(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jx(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let r;if(e===Lx)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Mx)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Nj(t)&&(n.ns=t.namespace);const i=[];return Tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bj{constructor(){this.counters_={}}incrementCounter(e,n=1){hr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return wb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp={},_p={};function hy(t){const e=t.toString();return gp[e]||(gp[e]=new bj),gp[e]}function Dj(t,e){const n=t.toString();return _p[n]||(_p[n]=e()),_p[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ha(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="start",Lj="close",Mj="pLPCommand",Vj="pRTLPCB",Fx="id",Ux="pw",Bx="ser",jj="cb",Fj="seg",Uj="ts",Bj="d",zj="dframe",zx=1870,Wx=30,Wj=zx-Wx,$j=25e3,Hj=3e4;class go{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xu(e),this.stats_=hy(n),this.urlFn=l=>(this.appCheckToken&&(l[Ym]=this.appCheckToken),jx(n,Mx,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Oj(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Hj)),wj(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dy((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===LE)this.id=a,this.password=l;else if(o===Lj)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[LE]="t",r[Bx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[jj]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Rx]=cy,this.transportSessionId&&(r[Ax]=this.transportSessionId),this.lastSessionId&&(r[Dx]=this.lastSessionId),this.applicationId&&(r[Ox]=this.applicationId),this.appCheckToken&&(r[Ym]=this.appCheckToken),typeof location<"u"&&location.hostname&&bx.test(location.hostname)&&(r[Px]=Nx);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){go.forceAllow_=!0}static forceDisallow(){go.forceDisallow_=!0}static isAvailable(){return go.forceAllow_?!0:!go.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Tj()&&!Ij()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sC(n),i=kx(r,Wj);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[zj]="t",r[Fx]=e,r[Ux]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ht(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class dy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_j(),window[Mj+this.uniqueCallbackIdentifier]=e,window[Vj+this.uniqueCallbackIdentifier]=n,this.myIFrame=dy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){wt("frame writing exception"),a.stack&&wt(a.stack),wt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fx]=this.myID,e[Ux]=this.myPW,e[Bx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wx+r.length<=zx;){const o=this.pendingSegs.shift();r=r+"&"+Fj+i+"="+o.seg+"&"+Uj+i+"="+o.ts+"&"+Bj+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor($j)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qj=16384,Gj=45e3;let zh=null;typeof MozWebSocket<"u"?zh=MozWebSocket:typeof WebSocket<"u"&&(zh=WebSocket);class Un{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xu(this.connId),this.stats_=hy(n),this.connURL=Un.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Rx]=cy,typeof location<"u"&&location.hostname&&bx.test(location.hostname)&&(o[Px]=Nx),n&&(o[Ax]=n),r&&(o[Dx]=r),i&&(o[Ym]=i),s&&(o[Ox]=s),jx(e,Lx,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ss.set("previous_websocket_failure",!0);try{let r;Pb(),this.mySock=new zh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Un.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&zh!==null&&!Un.forceDisallow_}static previouslyFailed(){return ss.isInMemoryStorage||ss.get("previous_websocket_failure")===!0}markConnectionHealthy(){ss.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Bl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kx(n,qj);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Gj))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Un.responsesRequiredToBeHealthy=2;Un.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[go,Un]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Un&&Un.isAvailable();let r=n&&!Un.previouslyFailed();if(e.webSocketOnly&&(n||Qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Un];else{const i=this.transports_=[];for(const s of Jl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Jl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kj=6e4,Qj=5e3,Yj=10*1024,Xj=100*1024,yp="t",ME="d",Jj="s",VE="r",Zj="e",jE="o",FE="a",UE="n",BE="p",eF="h";class tF{constructor(e,n,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xu("c:"+this.id+":"),this.transportManager_=new Jl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_l(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Xj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Yj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yp in e){const n=e[yp];n===FE?this.upgradeIfSecondaryHealthy_():n===VE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===jE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ua("t",e),r=Ua("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:BE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:FE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:UE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ua("t",e),r=Ua("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ua(yp,e);if(ME in e){const r=e[ME];if(n===eF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===UE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Jj?this.onConnectionShutdown_(r):n===VE?this.onReset_(r):n===Zj?Qm("Server Error: "+r):n===jE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cy!==r&&Qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_l(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Kj))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_l(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Qj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:BE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ss.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends Hx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!u_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wh}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=32,WE=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Ce("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function bi(t){return t.pieces_.length-t.pieceNum_}function Pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ce(t.pieces_,e)}function fy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function nF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Zl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function qx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ce(e,0)}function Ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ce(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function Gt(t,e){const n=ue(t),r=ue(e);if(n===null)return e;if(n===r)return Gt(Pe(t),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rF(t,e){const n=Zl(t,0),r=Zl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Us(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function py(t,e){if(bi(t)!==bi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function In(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(bi(t)>bi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class iF{constructor(e,n){this.errorPrefix_=n,this.parts_=Zl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Sd(this.parts_[r]);Gx(this)}}function sF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sd(e),Gx(t)}function oF(t){const e=t.parts_.pop();t.byteLength_-=Sd(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gx(t){if(t.byteLength_>WE)throw new Error(t.errorPrefix_+"has a key path longer than "+WE+" bytes ("+t.byteLength_+").");if(t.parts_.length>zE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zE+") or object contains a cycle "+Zi(t))}function Zi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends Hx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new my}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=1e3,aF=60*5*1e3,$E=30*1e3,lF=1.3,uF=3e4,cF="server_kill",HE=3;class Nr extends $x{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Nr.nextPersistentConnectionId_++,this.log_=xu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ba,this.maxReconnectDelay_=aF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");my.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ht(s)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new er,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Nr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&hr(e,"w")){const r=Mo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Vb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$E)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Mb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ht(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qm("Unrecognized action received from server: "+ht(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ba,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ba,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uF&&(this.reconnectDelay_=Ba),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){W(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?wt("getToken() completed but was canceled"):(wt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new tF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Qt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(cF)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Qt(f),l())}}}interrupt(e){wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kh(this.interruptReasons_)&&(this.reconnectDelay_=Ba,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>uy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ce(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){wt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=HE&&(this.reconnectDelay_=$E,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){wt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=HE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ix.replace(/\./g,"-")]=1,u_()?e["framework.cordova"]=1:dC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wh.getInstance().currentlyOnline();return kh(this.interruptReasons_)&&e}}Nr.nextPersistentConnectionId_=0;Nr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new he(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new he(Qo,e),i=new he(Qo,n);return this.compare(r,i)!==0}minPost(){return he.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;class Kx extends tf{static get __EMPTY_NODE(){return Sc}static set __EMPTY_NODE(e){Sc=e}compare(e,n){return Us(e.name,n.name)}isDefinedOn(e){throw ia("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(Ss,Sc)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,Sc)}toString(){return".key"}}const Ro=new Kx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class vt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??vt.RED,this.left=i??tn.EMPTY_NODE,this.right=s??tn.EMPTY_NODE}copy(e,n,r,i,s){return new vt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return tn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return tn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}vt.RED=!0;vt.BLACK=!1;class hF{copy(e,n,r,i,s){return this}insert(e,n,r){return new vt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class tn{constructor(e,n=tn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new tn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,vt.BLACK,null,null))}remove(e){return new tn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,vt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Cc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Cc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Cc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Cc(this.root_,null,this.comparator_,!0,e)}}tn.EMPTY_NODE=new hF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dF(t,e){return Us(t.name,e.name)}function gy(t,e){return Us(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xm;function fF(t){Xm=t}const Qx=function(t){return typeof t=="number"?"number:"+xx(t):"string:"+t},Yx=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hr(e,".sv"),"Priority must be a string or number.")}else W(t===Xm||t.isEmpty(),"priority of unexpected type.");W(t===Xm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qE;class gt{constructor(e,n=gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yx(this.priorityNode_)}static set __childrenNodeConstructor(e){qE=e}static get __childrenNodeConstructor(){return qE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:ue(e)===".priority"?this.priorityNode_:gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ue(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(W(r!==".priority"||bi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xx(this.value_):e+=this.value_,this.lazyHash_=Cx(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof gt.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=gt.VALUE_TYPE_ORDER.indexOf(n),s=gt.VALUE_TYPE_ORDER.indexOf(r);return W(i>=0,"Unknown leaf type: "+n),W(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xx,Jx;function pF(t){Xx=t}function mF(t){Jx=t}class gF extends tf{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Us(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(Ss,new gt("[PRIORITY-POST]",Jx))}makePost(e,n){const r=Xx(e);return new he(n,new gt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ke=new gF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _F=Math.log(2);class yF{constructor(e){const n=s=>parseInt(Math.log(s)/_F,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $h=function(t,e,n,r){t.sort(e);const i=function(l,c){const h=c-l;let f,m;if(h===0)return null;if(h===1)return f=t[l],m=n?n(f):f,new vt(m,f.node,vt.BLACK,null,null);{const v=parseInt(h/2,10)+l,w=i(l,v),A=i(v+1,c);return f=t[v],m=n?n(f):f,new vt(m,f.node,vt.BLACK,w,A)}},s=function(l){let c=null,h=null,f=t.length;const m=function(w,A){const P=f-w,T=f;f-=w;const E=i(P+1,T),I=t[P],D=n?n(I):I;v(new vt(D,I.node,A,null,E))},v=function(w){c?(c.left=w,c=w):(h=w,c=w)};for(let w=0;w<l.count;++w){const A=l.nextBitIsOne(),P=Math.pow(2,l.count-(w+1));A?m(P,vt.BLACK):(m(P,vt.BLACK),m(P,vt.RED))}return h},o=new yF(t.length),a=s(o);return new tn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vp;const Js={};class kr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return W(Js&&Ke,"ChildrenNode.ts has not been loaded"),vp=vp||new kr({".priority":Js},{".priority":Ke}),vp}get(e){const n=Mo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof tn?n:null}hasIndex(e){return hr(this.indexSet_,e.toString())}addIndex(e,n){W(e!==Ro,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(he.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=$h(r,e.getCompare()):a=Js;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new kr(h,c)}addToIndexes(e,n){const r=xh(this.indexes_,(i,s)=>{const o=Mo(this.indexSet_,s);if(W(o,"Missing index implementation for "+s),i===Js)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(he.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),$h(a,o.getCompare())}else return Js;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new he(e.name,a))),l.insert(e,e.node)}});return new kr(r,this.indexSet_)}removeFromIndexes(e,n){const r=xh(this.indexes_,i=>{if(i===Js)return i;{const s=n.get(e.name);return s?i.remove(new he(e.name,s)):i}});return new kr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Yx(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return za||(za=new ee(new tn(gy),null,kr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||za}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?za:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new he(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?za:this.priorityNode_;return new ee(i,o,s)}}updateChild(e,n){const r=ue(e);if(r===null)return n;{W(ue(e)!==".priority"||bi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Pe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ke,(o,a)=>{n[o]=a.val(e),r++,s&&ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qx(this.getPriority().val())+":"),this.forEachChild(Ke,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Cx(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new he(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ru?-1:0}withIndex(e){if(e===Ro||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ro||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ke),i=n.getIterator(Ke);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ro?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vF extends ee{constructor(){super(new tn(gy),ee.EMPTY_NODE,kr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Ru=new vF;Object.defineProperties(he,{MIN:{value:new he(Qo,ee.EMPTY_NODE)},MAX:{value:new he(Ss,Ru)}});Kx.__EMPTY_NODE=ee.EMPTY_NODE;gt.__childrenNodeConstructor=ee;fF(Ru);mF(Ru);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wF=!0;function nt(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new gt(n,nt(e))}if(!(t instanceof Array)&&wF){const n=[];let r=!1;if(Tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=nt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new he(o,l)))}}),n.length===0)return ee.EMPTY_NODE;const s=$h(n,dF,o=>o.name,gy);if(r){const o=$h(n,Ke.getCompare());return new ee(s,nt(e),new kr({".priority":o},{".priority":Ke}))}else return new ee(s,nt(e),kr.Default)}else{let n=ee.EMPTY_NODE;return Tt(t,(r,i)=>{if(hr(t,r)&&r.substring(0,1)!=="."){const s=nt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(nt(e))}}pF(nt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF extends tf{constructor(e){super(),this.indexPath_=e,W(!ce(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Us(e.name,n.name):s}makePost(e,n){const r=nt(e),i=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new he(n,i)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Ru);return new he(Ss,e)}toString(){return Zl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF extends tf{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Us(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const r=nt(e);return new he(n,r)}toString(){return".value"}}const IF=new TF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t){return{type:"value",snapshotNode:t}}function Yo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function eu(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function tu(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function SF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){W(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(eu(n,a)):W(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Yo(n,r)):o.trackChildChange(tu(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ke,(i,s)=>{n.hasChild(i)||r.trackChildChange(eu(i,s))}),n.isLeafNode()||n.forEachChild(Ke,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(tu(i,s,o))}else r.trackChildChange(Yo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.indexedFilter_=new _y(e.getIndex()),this.index_=e.getIndex(),this.startPost_=nu.getStartPost_(e),this.endPost_=nu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new he(n,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ee.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ee.EMPTY_NODE);const s=this;return n.forEachChild(Ke,(o,a)=>{s.matches(new he(o,a))||(i=i.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new nu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new he(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ee.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ee.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,v)=>f(v,m)}else o=this.index_.getCompare();const a=e;W(a.numChildren()===this.limit_,"");const l=new he(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const v=m==null?1:o(m,l);if(h&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(tu(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(eu(n,f));const A=a.updateImmediateChild(n,ee.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(Yo(m.name,m.node)),A.updateImmediateChild(m.name,m.node)):A}}else return r.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(eu(c.name,c.node)),s.trackChildChange(Yo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qo}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ss}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ke}copy(){const e=new yy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kF(t){return t.loadsAllData()?new _y(t.getIndex()):t.hasLimit()?new CF(t):new nu(t)}function GE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ke?n="$priority":t.index_===IF?n="$value":t.index_===Ro?n="$key":(W(t.index_ instanceof EF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ht(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ht(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ht(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ht(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ht(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function KE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ke&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends $x{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=xu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Hh.getListenId_(e,r),a={};this.listens_[o]=a;const l=GE(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Mo(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Hh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=GE(e._queryParams),r=e._path.toString(),i=new er;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sa(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Bl(a.responseText)}catch{Qt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Qt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xF{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){return{value:null,children:new Map}}function da(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ue(e);t.children.has(r)||t.children.set(r,qh());const i=t.children.get(r);e=Pe(e),da(i,e,n)}}function Jm(t,e){if(ce(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Ke,(r,i)=>{da(t,new Ce(r),i)}),Jm(t,e)}}else if(t.children.size>0){const n=ue(e);return e=Pe(e),t.children.has(n)&&Jm(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Zm(t,e,n){t.value!==null?n(e,t.value):RF(t,(r,i)=>{const s=new Ce(e.toString()+"/"+r);Zm(i,s,n)})}function RF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=10*1e3,PF=30*1e3,NF=5*60*1e3;class bF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new AF(e);const r=QE+(PF-QE)*Math.random();_l(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Tt(e,(i,s)=>{s>0&&hr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),_l(this.reportStats_.bind(this),Math.floor(Math.random()*2*NF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(zn||(zn={}));function vy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ey(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=zn.ACK_USER_WRITE,this.source=vy()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new Gh(ve(),n,this.revert)}}else return W(ue(this.path)===e,"operationForChild called for unrelated child."),new Gh(Pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.source=e,this.path=n,this.type=zn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new ru(this.source,ve()):new ru(this.source,Pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=zn.OVERWRITE}operationForChild(e){return ce(this.path)?new Cs(this.source,ve(),this.snap.getImmediateChild(e)):new Cs(this.source,Pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=zn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new Cs(this.source,ve(),n.value):new Xo(this.source,ve(),n)}else return W(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xo(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function OF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(SF(o.childName,o.snapshotNode))}),Wa(t,i,"child_removed",e,r,n),Wa(t,i,"child_added",e,r,n),Wa(t,i,"child_moved",s,r,n),Wa(t,i,"child_changed",e,r,n),Wa(t,i,"value",e,r,n),i}function Wa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>MF(t,a,l)),o.forEach(a=>{const l=LF(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function LF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function MF(t,e,n){if(e.childName==null||n.childName==null)throw ia("Should only compare child_ events.");const r=new he(e.childName,e.snapshotNode),i=new he(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e){return{eventCache:t,serverCache:e}}function yl(t,e,n,r){return nf(new Di(e,n,r),t.serverCache)}function eR(t,e,n,r){return nf(t.eventCache,new Di(e,n,r))}function Kh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ks(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wp;const VF=()=>(wp||(wp=new tn(Ej)),wp);class Oe{constructor(e,n=VF()){this.value=e,this.children=n}static fromObject(e){let n=new Oe(null);return Tt(e,(r,i)=>{n=n.set(new Ce(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(ce(e))return null;{const r=ue(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Pe(e),n);return s!=null?{path:Ge(new Ce(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=ue(e),r=this.children.get(n);return r!==null?r.subtree(Pe(e)):new Oe(null)}}set(e,n){if(ce(e))return new Oe(n,this.children);{const r=ue(e),s=(this.children.get(r)||new Oe(null)).set(Pe(e),n),o=this.children.insert(r,s);return new Oe(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const n=ue(e),r=this.children.get(n);if(r){const i=r.remove(Pe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Oe(null):new Oe(this.value,s)}else return this}}get(e){if(ce(e))return this.value;{const n=ue(e),r=this.children.get(n);return r?r.get(Pe(e)):null}}setTree(e,n){if(ce(e))return n;{const r=ue(e),s=(this.children.get(r)||new Oe(null)).setTree(Pe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Oe(this.value,o)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ge(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ce(e))return null;{const s=ue(e),o=this.children.get(s);return o?o.findOnPath_(Pe(e),Ge(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const i=ue(e),s=this.children.get(i);return s?s.foreachOnPath_(Pe(e),Ge(n,i),r):new Oe(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ge(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.writeTree_=e}static empty(){return new qn(new Oe(null))}}function vl(t,e,n){if(ce(e))return new qn(new Oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Gt(i,e);return s=s.updateChild(o,n),new qn(t.writeTree_.set(i,s))}else{const i=new Oe(n),s=t.writeTree_.setTree(e,i);return new qn(s)}}}function eg(t,e,n){let r=t;return Tt(n,(i,s)=>{r=vl(r,Ge(e,i),s)}),r}function YE(t,e){if(ce(e))return qn.empty();{const n=t.writeTree_.setTree(e,new Oe(null));return new qn(n)}}function tg(t,e){return Bs(t,e)!=null}function Bs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Gt(n.path,e)):null}function XE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ke,(r,i)=>{e.push(new he(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new he(r,i.value))}),e}function Si(t,e){if(ce(e))return t;{const n=Bs(t,e);return n!=null?new qn(new Oe(n)):new qn(t.writeTree_.subtree(e))}}function ng(t){return t.writeTree_.isEmpty()}function Jo(t,e){return tR(ve(),t.writeTree_,e)}function tR(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(W(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=tR(Ge(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ge(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t,e){return sR(e,t)}function jF(t,e,n,r,i){W(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=vl(t.visibleWrites,e,n)),t.lastWriteId=r}function FF(t,e,n,r){W(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=eg(t.visibleWrites,e,n),t.lastWriteId=r}function UF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function BF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&zF(a,r.path)?i=!1:In(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return WF(t),!0;if(r.snap)t.visibleWrites=YE(t.visibleWrites,r.path);else{const a=r.children;Tt(a,l=>{t.visibleWrites=YE(t.visibleWrites,Ge(r.path,l))})}return!0}else return!1}function zF(t,e){if(t.snap)return In(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&In(Ge(t.path,n),e))return!0;return!1}function WF(t){t.visibleWrites=nR(t.allWrites,$F,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $F(t){return t.visible}function nR(t,e,n){let r=qn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)In(n,o)?(a=Gt(n,o),r=vl(r,a,s.snap)):In(o,n)&&(a=Gt(o,n),r=vl(r,ve(),s.snap.getChild(a)));else if(s.children){if(In(n,o))a=Gt(n,o),r=eg(r,a,s.children);else if(In(o,n))if(a=Gt(o,n),ce(a))r=eg(r,ve(),s.children);else{const l=Mo(s.children,ue(a));if(l){const c=l.getChild(Pe(a));r=vl(r,ve(),c)}}}else throw ia("WriteRecord should have .snap or .children")}}return r}function rR(t,e,n,r,i){if(!r&&!i){const s=Bs(t.visibleWrites,e);if(s!=null)return s;{const o=Si(t.visibleWrites,e);if(ng(o))return n;if(n==null&&!tg(o,ve()))return null;{const a=n||ee.EMPTY_NODE;return Jo(o,a)}}}else{const s=Si(t.visibleWrites,e);if(!i&&ng(s))return n;if(!i&&n==null&&!tg(s,ve()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(In(c.path,e)||In(e,c.path))},a=nR(t.allWrites,o,e),l=n||ee.EMPTY_NODE;return Jo(a,l)}}}function HF(t,e,n){let r=ee.EMPTY_NODE;const i=Bs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ke,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Si(t.visibleWrites,e);return n.forEachChild(Ke,(o,a)=>{const l=Jo(Si(s,new Ce(o)),a);r=r.updateImmediateChild(o,l)}),XE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Si(t.visibleWrites,e);return XE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function qF(t,e,n,r,i){W(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ge(e,n);if(tg(t.visibleWrites,s))return null;{const o=Si(t.visibleWrites,s);return ng(o)?i.getChild(n):Jo(o,i.getChild(n))}}function GF(t,e,n,r){const i=Ge(e,n),s=Bs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Si(t.visibleWrites,i);return Jo(o,r.getNode().getImmediateChild(n))}else return null}function KF(t,e){return Bs(t.visibleWrites,e)}function QF(t,e,n,r,i,s,o){let a;const l=Si(t.visibleWrites,e),c=Bs(l,ve());if(c!=null)a=c;else if(n!=null)a=Jo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=m.getNext();for(;v&&h.length<i;)f(v,r)!==0&&h.push(v),v=m.getNext();return h}else return[]}function YF(){return{visibleWrites:qn.empty(),allWrites:[],lastWriteId:-1}}function Qh(t,e,n,r){return rR(t.writeTree,t.treePath,e,n,r)}function Ty(t,e){return HF(t.writeTree,t.treePath,e)}function JE(t,e,n,r){return qF(t.writeTree,t.treePath,e,n,r)}function Yh(t,e){return KF(t.writeTree,Ge(t.treePath,e))}function XF(t,e,n,r,i,s){return QF(t.writeTree,t.treePath,e,n,r,i,s)}function Iy(t,e,n){return GF(t.writeTree,t.treePath,e,n)}function iR(t,e){return sR(Ge(t.treePath,e),t.writeTree)}function sR(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,tu(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,eu(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Yo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,tu(r,e.snapshotNode,i.oldSnap));else throw ia("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const oR=new ZF;class Sy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Di(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Iy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ks(this.viewCache_),s=XF(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(t){return{filter:t}}function t4(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function n4(t,e,n,r,i){const s=new JF;let o,a;if(n.type===zn.OVERWRITE){const c=n;c.source.fromUser?o=rg(t,e,c.path,c.snap,r,i,s):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=Xh(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===zn.MERGE){const c=n;c.source.fromUser?o=i4(t,e,c.path,c.children,r,i,s):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ig(t,e,c.path,c.children,r,i,a,s))}else if(n.type===zn.ACK_USER_WRITE){const c=n;c.revert?o=a4(t,e,c.path,r,i,s):o=s4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===zn.LISTEN_COMPLETE)o=o4(t,e,n.path,r,s);else throw ia("Unknown operation type: "+n.type);const l=s.getChanges();return r4(e,o,l),{viewCache:o,changes:l}}function r4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Kh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Zx(Kh(e)))}}function aR(t,e,n,r,i,s){const o=e.eventCache;if(Yh(r,n)!=null)return e;{let a,l;if(ce(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ks(e),h=c instanceof ee?c:ee.EMPTY_NODE,f=Ty(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Qh(r,ks(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ue(n);if(c===".priority"){W(bi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=JE(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Pe(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const m=JE(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(c).updateChild(h,m):f=o.getNode().getImmediateChild(c)}else f=Iy(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return yl(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function Xh(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(ce(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),v,null)}else{const v=ue(n);if(!l.isCompleteForPath(n)&&bi(n)>1)return e;const w=Pe(n),P=l.getNode().getImmediateChild(v).updateChild(w,r);v===".priority"?c=h.updatePriority(l.getNode(),P):c=h.updateChild(l.getNode(),v,P,w,oR,null)}const f=eR(e,c,l.isFullyInitialized()||ce(n),h.filtersNodes()),m=new Sy(i,f,s);return aR(t,f,n,i,m,a)}function rg(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const h=new Sy(i,e,s);if(ce(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=yl(e,c,!0,t.filter.filtersNodes());else{const f=ue(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=yl(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Pe(n),v=a.getNode().getImmediateChild(f);let w;if(ce(m))w=r;else{const A=h.getCompleteChild(f);A!=null?fy(m)===".priority"&&A.getChild(qx(m)).isEmpty()?w=A:w=A.updateChild(m,r):w=ee.EMPTY_NODE}if(v.equals(w))l=e;else{const A=t.filter.updateChild(a.getNode(),f,w,m,h,o);l=yl(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ZE(t,e){return t.eventCache.isCompleteForChild(e)}function i4(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=Ge(n,l);ZE(e,ue(h))&&(a=rg(t,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=Ge(n,l);ZE(e,ue(h))||(a=rg(t,a,h,c,i,s,o))}),a}function eT(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ig(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ce(n)?c=r:c=new Oe(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),w=eT(t,v,m);l=Xh(t,l,new Ce(f),w,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const v=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!v){const w=e.serverCache.getNode().getImmediateChild(f),A=eT(t,w,m);l=Xh(t,l,new Ce(f),A,i,s,o,a)}}),l}function s4(t,e,n,r,i,s,o){if(Yh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Xh(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ce(n)){let c=new Oe(null);return l.getNode().forEachChild(Ro,(h,f)=>{c=c.set(new Ce(h),f)}),ig(t,e,n,c,i,s,a,o)}else return e}else{let c=new Oe(null);return r.foreach((h,f)=>{const m=Ge(n,h);l.isCompleteForPath(m)&&(c=c.set(h,l.getNode().getChild(m)))}),ig(t,e,n,c,i,s,a,o)}}function o4(t,e,n,r,i){const s=e.serverCache,o=eR(e,s.getNode(),s.isFullyInitialized()||ce(n),s.isFiltered());return aR(t,o,n,r,oR,i)}function a4(t,e,n,r,i,s){let o;if(Yh(r,n)!=null)return e;{const a=new Sy(r,e,i),l=e.eventCache.getNode();let c;if(ce(n)||ue(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Qh(r,ks(e));else{const f=e.serverCache.getNode();W(f instanceof ee,"serverChildren would be complete if leaf node"),h=Ty(r,f)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=ue(n);let f=Iy(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?c=t.filter.updateChild(l,h,f,Pe(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,ee.EMPTY_NODE,Pe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Qh(r,ks(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Yh(r,ve())!=null,yl(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new _y(r.getIndex()),s=kF(r);this.processor_=e4(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ee.EMPTY_NODE,a.getNode(),null),h=new Di(l,o.isFullyInitialized(),i.filtersNodes()),f=new Di(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=nf(f,h),this.eventGenerator_=new DF(this.query_)}get query(){return this.query_}}function u4(t){return t.viewCache_.serverCache.getNode()}function c4(t){return Kh(t.viewCache_)}function h4(t,e){const n=ks(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function tT(t){return t.eventRegistrations_.length===0}function d4(t,e){t.eventRegistrations_.push(e)}function nT(t,e,n){const r=[];if(n){W(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function rT(t,e,n,r){e.type===zn.MERGE&&e.source.queryId!==null&&(W(ks(t.viewCache_),"We should always have a full cache before handling merges"),W(Kh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=n4(t.processor_,i,e,n,r);return t4(t.processor_,s.viewCache),W(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,lR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function f4(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ke,(s,o)=>{r.push(Yo(s,o))}),n.isFullyInitialized()&&r.push(Zx(n.getNode())),lR(t,r,n.getNode(),e)}function lR(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return OF(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jh;class uR{constructor(){this.views=new Map}}function p4(t){W(!Jh,"__referenceConstructor has already been defined"),Jh=t}function m4(){return W(Jh,"Reference.ts has not been loaded"),Jh}function g4(t){return t.views.size===0}function Cy(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return W(s!=null,"SyncTree gave us an op for an invalid query."),rT(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(rT(o,e,n,r));return s}}function cR(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Qh(n,i?r:null),l=!1;a?l=!0:r instanceof ee?(a=Ty(n,r),l=!1):(a=ee.EMPTY_NODE,l=!1);const c=nf(new Di(a,l,!1),new Di(r,i,!1));return new l4(e,c)}return o}function _4(t,e,n,r,i,s){const o=cR(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),d4(o,n),f4(o,n)}function y4(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Oi(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(nT(c,n,r)),tT(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(nT(l,n,r)),tT(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Oi(t)&&s.push(new(m4())(e._repo,e._path)),{removed:s,events:o}}function hR(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ci(t,e){let n=null;for(const r of t.views.values())n=n||h4(r,e);return n}function dR(t,e){if(e._queryParams.loadsAllData())return sf(t);{const r=e._queryIdentifier;return t.views.get(r)}}function fR(t,e){return dR(t,e)!=null}function Oi(t){return sf(t)!=null}function sf(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zh;function v4(t){W(!Zh,"__referenceConstructor has already been defined"),Zh=t}function w4(){return W(Zh,"Reference.ts has not been loaded"),Zh}let E4=1;class iT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=YF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pR(t,e,n,r,i){return jF(t.pendingWriteTree_,e,n,r,i),i?fa(t,new Cs(vy(),e,n)):[]}function T4(t,e,n,r){FF(t.pendingWriteTree_,e,n,r);const i=Oe.fromObject(n);return fa(t,new Xo(vy(),e,i))}function di(t,e,n=!1){const r=UF(t.pendingWriteTree_,e);if(BF(t.pendingWriteTree_,e)){let s=new Oe(null);return r.snap!=null?s=s.set(ve(),!0):Tt(r.children,o=>{s=s.set(new Ce(o),!0)}),fa(t,new Gh(r.path,s,n))}else return[]}function Au(t,e,n){return fa(t,new Cs(wy(),e,n))}function I4(t,e,n){const r=Oe.fromObject(n);return fa(t,new Xo(wy(),e,r))}function S4(t,e){return fa(t,new ru(wy(),e))}function C4(t,e,n){const r=xy(t,n);if(r){const i=Ry(r),s=i.path,o=i.queryId,a=Gt(s,e),l=new ru(Ey(o),a);return Ay(t,s,l)}else return[]}function ed(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||fR(o,e))){const l=y4(o,e,n,r);g4(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,v)=>Oi(v));if(h&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const v=R4(m);for(let w=0;w<v.length;++w){const A=v[w],P=A.query,T=yR(t,A);t.listenProvider_.startListening(wl(P),iu(t,P),T.hashFn,T.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(wl(e),null):c.forEach(m=>{const v=t.queryToTagMap.get(of(m));t.listenProvider_.stopListening(wl(m),v)}))}A4(t,c)}return a}function mR(t,e,n,r){const i=xy(t,r);if(i!=null){const s=Ry(i),o=s.path,a=s.queryId,l=Gt(o,e),c=new Cs(Ey(a),l,n);return Ay(t,o,c)}else return[]}function k4(t,e,n,r){const i=xy(t,r);if(i){const s=Ry(i),o=s.path,a=s.queryId,l=Gt(o,e),c=Oe.fromObject(n),h=new Xo(Ey(a),l,c);return Ay(t,o,h)}else return[]}function sg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,v)=>{const w=Gt(m,i);s=s||Ci(v,w),o=o||Oi(v)});let a=t.syncPointTree_.get(i);a?(o=o||Oi(a),s=s||Ci(a,ve())):(a=new uR,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ee.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,w)=>{const A=Ci(w,ve());A&&(s=s.updateImmediateChild(v,A))}));const c=fR(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=of(e);W(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const v=P4();t.queryToTagMap.set(m,v),t.tagToQueryMap.set(v,m)}const h=rf(t.pendingWriteTree_,i);let f=_4(a,e,n,h,s,l);if(!c&&!o&&!r){const m=dR(a,e);f=f.concat(N4(t,e,m))}return f}function ky(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Gt(o,e),c=Ci(a,l);if(c)return c});return rR(i,e,s,n,!0)}function x4(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Gt(c,n);r=r||Ci(h,f)});let i=t.syncPointTree_.get(n);i?r=r||Ci(i,ve()):(i=new uR,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Di(r,!0,!1):null,a=rf(t.pendingWriteTree_,e._path),l=cR(i,e,a,s?o.getNode():ee.EMPTY_NODE,s);return c4(l)}function fa(t,e){return gR(e,t.syncPointTree_,null,rf(t.pendingWriteTree_,ve()))}function gR(t,e,n,r){if(ce(t.path))return _R(t,e,n,r);{const i=e.get(ve());n==null&&i!=null&&(n=Ci(i,ve()));let s=[];const o=ue(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=iR(r,o);s=s.concat(gR(a,l,c,h))}return i&&(s=s.concat(Cy(i,t,r,n))),s}}function _R(t,e,n,r){const i=e.get(ve());n==null&&i!=null&&(n=Ci(i,ve()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=iR(r,o),h=t.operationForChild(o);h&&(s=s.concat(_R(h,a,l,c)))}),i&&(s=s.concat(Cy(i,t,r,n))),s}function yR(t,e){const n=e.query,r=iu(t,n);return{hashFn:()=>(u4(e)||ee.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?C4(t,n._path,r):S4(t,n._path);{const s=Sj(i,n);return ed(t,n,null,s)}}}}function iu(t,e){const n=of(e);return t.queryToTagMap.get(n)}function of(t){return t._path.toString()+"$"+t._queryIdentifier}function xy(t,e){return t.tagToQueryMap.get(e)}function Ry(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ce(t.substr(0,e))}}function Ay(t,e,n){const r=t.syncPointTree_.get(e);W(r,"Missing sync point for query tag that we're tracking");const i=rf(t.pendingWriteTree_,e);return Cy(r,n,i,null)}function R4(t){return t.fold((e,n,r)=>{if(n&&Oi(n))return[sf(n)];{let i=[];return n&&(i=hR(n)),Tt(r,(s,o)=>{i=i.concat(o)}),i}})}function wl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(w4())(t._repo,t._path):t}function A4(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=of(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function P4(){return E4++}function N4(t,e,n){const r=e._path,i=iu(t,e),s=yR(t,n),o=t.listenProvider_.startListening(wl(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)W(!Oi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,f)=>{if(!ce(c)&&h&&Oi(h))return[sf(h).query];{let m=[];return h&&(m=m.concat(hR(h).map(v=>v.query))),Tt(f,(v,w)=>{m=m.concat(w)}),m}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(wl(h),iu(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Py(n)}node(){return this.node_}}class Ny{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ge(this.path_,e);return new Ny(this.syncTree_,n)}node(){return ky(this.syncTree_,this.path_)}}const b4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},sT=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return D4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return O4(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},D4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},O4=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&W(!1,"Unexpected increment value: "+r);const i=e.node();if(W(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},vR=function(t,e,n,r){return by(e,new Ny(n,t),r)},wR=function(t,e,n){return by(t,new Py(e),n)};function by(t,e,n){const r=t.getPriority().val(),i=sT(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=sT(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new gt(a,nt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new gt(i))),o.forEachChild(Ke,(a,l)=>{const c=by(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Oy(t,e){let n=e instanceof Ce?e:new Ce(e),r=t,i=ue(n);for(;i!==null;){const s=Mo(r.node.children,i)||{children:{},childCount:0};r=new Dy(i,r,s),n=Pe(n),i=ue(n)}return r}function pa(t){return t.node.value}function ER(t,e){t.node.value=e,og(t)}function TR(t){return t.node.childCount>0}function L4(t){return pa(t)===void 0&&!TR(t)}function af(t,e){Tt(t.node.children,(n,r)=>{e(new Dy(n,t,r))})}function IR(t,e,n,r){n&&e(t),af(t,i=>{IR(i,e,!0)})}function M4(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Pu(t){return new Ce(t.parent===null?t.name:Pu(t.parent)+"/"+t.name)}function og(t){t.parent!==null&&V4(t.parent,t.name,t)}function V4(t,e,n){const r=L4(n),i=hr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,og(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,og(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4=/[\[\].#$\/\u0000-\u001F\u007F]/,F4=/[\[\].#$\u0000-\u001F\u007F]/,Ep=10*1024*1024,Ly=function(t){return typeof t=="string"&&t.length!==0&&!j4.test(t)},SR=function(t){return typeof t=="string"&&t.length!==0&&!F4.test(t)},U4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),SR(t)},CR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ef(t)||t&&typeof t=="object"&&hr(t,".sv")},td=function(t,e,n,r){r&&e===void 0||lf(jo(t,"value"),e,n)},lf=function(t,e,n){const r=n instanceof Ce?new iF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zi(r));if(typeof e=="function")throw new Error(t+"contains a function "+Zi(r)+" with contents = "+e.toString());if(ef(e))throw new Error(t+"contains "+e.toString()+" "+Zi(r));if(typeof e=="string"&&e.length>Ep/3&&Sd(e)>Ep)throw new Error(t+"contains a string greater than "+Ep+" utf8 bytes "+Zi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ly(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sF(r,o),lf(t,a,r),oF(r)}),i&&s)throw new Error(t+' contains ".value" child '+Zi(r)+" in addition to actual children.")}},B4=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Zl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ly(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(rF);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&In(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},kR=function(t,e,n,r){const i=jo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Tt(e,(o,a)=>{const l=new Ce(o);if(lf(i,a,Ge(n,l)),fy(l)===".priority"&&!CR(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),B4(i,s)},z4=function(t,e,n){if(ef(e))throw new Error(jo(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!CR(e))throw new Error(jo(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},xR=function(t,e,n,r){if(!SR(n))throw new Error(jo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},W4=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xR(t,e,n)},os=function(t,e){if(ue(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ly(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!U4(n))throw new Error(jo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!py(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function RR(t,e,n){uf(t,n),AR(t,r=>py(r,e))}function Nn(t,e,n){uf(t,n),AR(t,r=>In(r,e)||In(e,r))}function AR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(q4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function q4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();gl&&wt("event: "+n.toString()),ha(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G4="repo_interrupt",K4=25;class Q4{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new H4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qh(),this.transactionQueueTree_=new Dy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Y4(t,e,n){if(t.stats_=hy(t.repoInfo_),t.forceRestClient_||Rj())t.server_=new Hh(t.repoInfo_,(r,i,s,o)=>{oT(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>aT(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ht(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Nr(t.repoInfo_,e,(r,i,s,o)=>{oT(t,r,i,s,o)},r=>{aT(t,r)},r=>{X4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Dj(t.repoInfo_,()=>new bF(t.stats_,t.server_)),t.infoData_=new xF,t.infoSyncTree_=new iT({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Au(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),My(t,"connected",!1),t.serverSyncTree_=new iT({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Nn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function PR(t){const n=t.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function cf(t){return b4({timestamp:PR(t)})}function oT(t,e,n,r,i){t.dataUpdateCount++;const s=new Ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=xh(n,c=>nt(c));o=k4(t.serverSyncTree_,s,l,i)}else{const l=nt(n);o=mR(t.serverSyncTree_,s,l,i)}else if(r){const l=xh(n,c=>nt(c));o=I4(t.serverSyncTree_,s,l)}else{const l=nt(n);o=Au(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Zo(t,s)),Nn(t.eventQueue_,a,o)}function aT(t,e){My(t,"connected",e),e===!1&&tU(t)}function X4(t,e){Tt(e,(n,r)=>{My(t,n,r)})}function My(t,e,n){const r=new Ce("/.info/"+e),i=nt(n);t.infoData_.updateSnapshot(r,i);const s=Au(t.infoSyncTree_,r,i);Nn(t.eventQueue_,r,s)}function Vy(t){return t.nextWriteId_++}function J4(t,e,n){const r=x4(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=nt(i).withIndex(e._queryParams.getIndex());sg(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Au(t.serverSyncTree_,e._path,s);else{const a=iu(t.serverSyncTree_,e);o=mR(t.serverSyncTree_,e._path,s,a)}return Nn(t.eventQueue_,e._path,o),ed(t.serverSyncTree_,e,n,null,!0),s},i=>(Nu(t,"get for query "+ht(e)+" failed: "+i),Promise.reject(new Error(i))))}function Z4(t,e,n,r,i){Nu(t,"set",{path:e.toString(),value:n,priority:r});const s=cf(t),o=nt(n,r),a=ky(t.serverSyncTree_,e),l=wR(o,a,s),c=Vy(t),h=pR(t.serverSyncTree_,e,l,c,!0);uf(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,v)=>{const w=m==="ok";w||Qt("set at "+e+" failed: "+m);const A=di(t.serverSyncTree_,c,!w);Nn(t.eventQueue_,e,A),Li(t,i,m,v)});const f=Fy(t,e);Zo(t,f),Nn(t.eventQueue_,f,[])}function eU(t,e,n,r){Nu(t,"update",{path:e.toString(),value:n});let i=!0;const s=cf(t),o={};if(Tt(n,(a,l)=>{i=!1,o[a]=vR(Ge(e,a),nt(l),t.serverSyncTree_,s)}),i)wt("update() called with empty data.  Don't do anything."),Li(t,r,"ok",void 0);else{const a=Vy(t),l=T4(t.serverSyncTree_,e,o,a);uf(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Qt("update at "+e+" failed: "+c);const m=di(t.serverSyncTree_,a,!f),v=m.length>0?Zo(t,e):e;Nn(t.eventQueue_,v,m),Li(t,r,c,h)}),Tt(n,c=>{const h=Fy(t,Ge(e,c));Zo(t,h)}),Nn(t.eventQueue_,e,[])}}function tU(t){Nu(t,"onDisconnectEvents");const e=cf(t),n=qh();Zm(t.onDisconnect_,ve(),(i,s)=>{const o=vR(i,s,t.serverSyncTree_,e);da(n,i,o)});let r=[];Zm(n,ve(),(i,s)=>{r=r.concat(Au(t.serverSyncTree_,i,s));const o=Fy(t,i);Zo(t,o)}),t.onDisconnect_=qh(),Nn(t.eventQueue_,ve(),r)}function nU(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Jm(t.onDisconnect_,e),Li(t,n,r,i)})}function lT(t,e,n,r){const i=nt(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&da(t.onDisconnect_,e,i),Li(t,r,s,o)})}function rU(t,e,n,r,i){const s=nt(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&da(t.onDisconnect_,e,s),Li(t,i,o,a)})}function iU(t,e,n,r){if(kh(n)){wt("onDisconnect().update() called with empty data.  Don't do anything."),Li(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Tt(n,(o,a)=>{const l=nt(a);da(t.onDisconnect_,Ge(e,o),l)}),Li(t,r,i,s)})}function sU(t,e,n){let r;ue(e._path)===".info"?r=sg(t.infoSyncTree_,e,n):r=sg(t.serverSyncTree_,e,n),RR(t.eventQueue_,e._path,r)}function ag(t,e,n){let r;ue(e._path)===".info"?r=ed(t.infoSyncTree_,e,n):r=ed(t.serverSyncTree_,e,n),RR(t.eventQueue_,e._path,r)}function oU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(G4)}function Nu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),wt(n,...e)}function Li(t,e,n,r){e&&ha(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function NR(t,e,n){return ky(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function jy(t,e=t.transactionQueueTree_){if(e||hf(t,e),pa(e)){const n=DR(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&aU(t,Pu(e),n)}else TR(e)&&af(e,n=>{jy(t,n)})}function aU(t,e,n){const r=n.map(c=>c.currentWriteId),i=NR(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];W(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Gt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Nu(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(di(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();hf(t,Oy(t.transactionQueueTree_,e)),jy(t,t.transactionQueueTree_),Nn(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)ha(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Qt("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Zo(t,e)}},o)}function Zo(t,e){const n=bR(t,e),r=Pu(n),i=DR(t,n);return lU(t,i,r),r}function lU(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Gt(n,l.path);let h=!1,f;if(W(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,i=i.concat(di(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=K4)h=!0,f="maxretry",i=i.concat(di(t.serverSyncTree_,l.currentWriteId,!0));else{const m=NR(t,l.path,o);l.currentInputSnapshot=m;const v=e[a].update(m.val());if(v!==void 0){lf("transaction failed: Data returned ",v,l.path);let w=nt(v);typeof v=="object"&&v!=null&&hr(v,".priority")||(w=w.updatePriority(m.getPriority()));const P=l.currentWriteId,T=cf(t),E=wR(w,m,T);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=E,l.currentWriteId=Vy(t),o.splice(o.indexOf(P),1),i=i.concat(pR(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),i=i.concat(di(t.serverSyncTree_,P,!0))}else h=!0,f="nodata",i=i.concat(di(t.serverSyncTree_,l.currentWriteId,!0))}Nn(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}hf(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ha(r[a]);jy(t,t.transactionQueueTree_)}function bR(t,e){let n,r=t.transactionQueueTree_;for(n=ue(e);n!==null&&pa(r)===void 0;)r=Oy(r,n),e=Pe(e),n=ue(e);return r}function DR(t,e){const n=[];return OR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function OR(t,e,n){const r=pa(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);af(e,i=>{OR(t,i,n)})}function hf(t,e){const n=pa(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ER(e,n.length>0?n:void 0)}af(e,r=>{hf(t,r)})}function Fy(t,e){const n=Pu(bR(t,e)),r=Oy(t.transactionQueueTree_,e);return M4(r,i=>{Tp(t,i)}),Tp(t,r),IR(r,i=>{Tp(t,i)}),n}function Tp(t,e){const n=pa(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(W(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(W(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(di(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ER(e,void 0):n.length=s+1,Nn(t.eventQueue_,Pu(e),i);for(let o=0;o<r.length;o++)ha(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const uT=function(t,e){const n=hU(t),r=n.namespace;n.domain==="firebase.com"&&Wr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vj();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Vx(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ce(n.pathString)}},hU=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=uU(t.substring(h,f)));const m=cU(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),n=e.substring(w+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",dU=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=cT.charAt(n%64),n=Math.floor(n/64);W(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=cT.charAt(e[i]);return W(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ht(this.snapshot.exportVal())}}class pU{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return W(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mU{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new er;return nU(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){os("OnDisconnect.remove",this._path);const e=new er;return lT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){os("OnDisconnect.set",this._path),td("OnDisconnect.set",e,this._path,!1);const n=new er;return lT(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){os("OnDisconnect.setWithPriority",this._path),td("OnDisconnect.setWithPriority",e,this._path,!1),z4("OnDisconnect.setWithPriority",n);const r=new er;return rU(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){os("OnDisconnect.update",this._path),kR("OnDisconnect.update",e,this._path);const n=new er;return iU(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ce(this._path)?null:fy(this._path)}get ref(){return new Gr(this._repo,this._path)}get _queryIdentifier(){const e=KE(this._queryParams),n=uy(e);return n==="{}"?"default":n}get _queryObject(){return KE(this._queryParams)}isEqual(e){if(e=we(e),!(e instanceof Uy))return!1;const n=this._repo===e._repo,r=py(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+nF(this._path)}}class Gr extends Uy{constructor(e,n){super(e,n,new yy,!1)}get parent(){const e=qx(this._path);return e===null?null:new Gr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class su{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ce(e),r=ou(this.ref,e);return new su(this._node.getChild(n),r,Ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new su(i,ou(this.ref,r),Ke)))}hasChild(e){const n=new Ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ne(t,e){return t=we(t),t._checkNotDeleted("ref"),e!==void 0?ou(t._root,e):t._root}function ou(t,e){return t=we(t),ue(t._path)===null?W4("child","path",e):xR("child","path",e),new Gr(t._repo,Ge(t._path,e))}function gU(t){return t=we(t),new mU(t._repo,t._path)}function MR(t,e){t=we(t),os("push",t._path),td("push",e,t._path,!0);const n=PR(t._repo),r=dU(n),i=ou(t,r),s=ou(t,r);let o;return e!=null?o=zs(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function bu(t){return os("remove",t._path),zs(t,null)}function zs(t,e){t=we(t),os("set",t._path),td("set",e,t._path,!1);const n=new er;return Z4(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ur(t,e){kR("update",e,t._path);const n=new er;return eU(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function VR(t){t=we(t);const e=new LR(()=>{}),n=new df(e);return J4(t._repo,t,n).then(r=>new su(r,new Gr(t._repo,t._path),t._queryParams.getIndex()))}class df{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new fU("value",this,new su(e.snapshotNode,new Gr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pU(this,e,n):null}matches(e){return e instanceof df?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function _U(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(h,f)=>{ag(t._repo,t,a),l(h,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new LR(n,s||void 0),a=new df(o);return sU(t._repo,t,a),()=>ag(t._repo,t,a)}function Du(t,e,n,r){return _U(t,"value",e,n,r)}function jR(t,e,n){ag(t._repo,t,null)}p4(Gr);v4(Gr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yU="FIREBASE_DATABASE_EMULATOR_HOST",lg={};let vU=!1;function wU(t,e,n,r){t.repoInfo_=new Vx(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function EU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=uT(s,i),a=o.repoInfo,l;typeof process<"u"&&PE&&(l=PE[yU]),l?(s=`http://${l}?ns=${a.namespace}`,o=uT(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new Pj(t.name,t.options,e);$4("Invalid Firebase Database URL",o),ce(o.path)||Wr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=IU(a,t,c,new Aj(t.name,n));return new SU(h,t)}function TU(t,e){const n=lg[e];(!n||n[t.key]!==t)&&Wr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),oU(t),delete n[t.key]}function IU(t,e,n,r){let i=lg[e.name];i||(i={},lg[e.name]=i);let s=i[t.toURLString()];return s&&Wr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Q4(t,vU,n,r),i[t.toURLString()]=s,s}class SU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Y4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gr(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(TU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wr("Cannot call "+e+" on a deleted database.")}}function CU(t=xd(),e){const n=Os(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=lC("database");r&&kU(n,...r)}return n}function kU(t,e,n,r={}){t=we(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Xc(Xc.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:hC(r.mockUserToken,t.app.options.projectId);s=new Xc(o)}wU(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xU(t){fj(Ls),Kn(new An("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return EU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),on(NE,bE,t),on(NE,bE,"esm2017")}Nr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};xU();const FR="@firebase/installations",By="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=1e4,BR=`w:${By}`,zR="FIS_v2",RU="https://firebaseinstallations.googleapis.com/v1",AU=60*60*1e3,PU="installations",NU="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xs=new Ds(PU,NU,bU);function WR(t){return t instanceof cr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R({projectId:t}){return`${RU}/projects/${t}/installations`}function HR(t){return{token:t.token,requestStatus:2,expiresIn:OU(t.expiresIn),creationTime:Date.now()}}async function qR(t,e){const r=(await e.json()).error;return xs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function GR({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function DU(t,{refreshToken:e}){const n=GR(t);return n.append("Authorization",LU(e)),n}async function KR(t){const e=await t();return e.status>=500&&e.status<600?t():e}function OU(t){return Number(t.replace("s","000"))}function LU(t){return`${zR} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MU({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$R(t),i=GR(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:zR,appId:t.appId,sdkVersion:BR},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await KR(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:HR(c.authToken)}}else throw await qR("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VU(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jU=/^[cdef][\w-]{21}$/,ug="";function FU(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=UU(t);return jU.test(n)?n:ug}catch{return ug}}function UU(t){return VU(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=new Map;function XR(t,e){const n=ff(t);JR(n,e),BU(n,e)}function JR(t,e){const n=YR.get(t);if(n)for(const r of n)r(e)}function BU(t,e){const n=zU();n&&n.postMessage({key:t,fid:e}),WU()}let as=null;function zU(){return!as&&"BroadcastChannel"in self&&(as=new BroadcastChannel("[Firebase] FID Change"),as.onmessage=t=>{JR(t.data.key,t.data.fid)}),as}function WU(){YR.size===0&&as&&(as.close(),as=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $U="firebase-installations-database",HU=1,Rs="firebase-installations-store";let Ip=null;function zy(){return Ip||(Ip=kd($U,HU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rs)}}})),Ip}async function nd(t,e){const n=ff(t),i=(await zy()).transaction(Rs,"readwrite"),s=i.objectStore(Rs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&XR(t,e.fid),e}async function ZR(t){const e=ff(t),r=(await zy()).transaction(Rs,"readwrite");await r.objectStore(Rs).delete(e),await r.done}async function pf(t,e){const n=ff(t),i=(await zy()).transaction(Rs,"readwrite"),s=i.objectStore(Rs),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&XR(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(t){let e;const n=await pf(t.appConfig,r=>{const i=qU(r),s=GU(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ug?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qU(t){const e=t||{fid:FU(),registrationStatus:0};return eA(e)}function GU(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(xs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=KU(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QU(t)}:{installationEntry:e}}async function KU(t,e){try{const n=await MU(t,e);return nd(t.appConfig,n)}catch(n){throw WR(n)&&n.customData.serverCode===409?await ZR(t.appConfig):await nd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QU(t){let e=await hT(t.appConfig);for(;e.registrationStatus===1;)await QR(100),e=await hT(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Wy(t);return r||n}return e}function hT(t){return pf(t,e=>{if(!e)throw xs.create("installation-not-found");return eA(e)})}function eA(t){return YU(t)?{fid:t.fid,registrationStatus:0}:t}function YU(t){return t.registrationStatus===1&&t.registrationTime+UR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XU({appConfig:t,heartbeatServiceProvider:e},n){const r=JU(t,n),i=DU(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:BR,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await KR(()=>fetch(r,a));if(l.ok){const c=await l.json();return HR(c)}else throw await qR("Generate Auth Token",l)}function JU(t,{fid:e}){return`${$R(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $y(t,e=!1){let n;const r=await pf(t.appConfig,s=>{if(!tA(s))throw xs.create("not-registered");const o=s.authToken;if(!e&&t3(o))return s;if(o.requestStatus===1)return n=ZU(t,e),s;{if(!navigator.onLine)throw xs.create("app-offline");const a=r3(s);return n=e3(t,a),a}});return n?await n:r.authToken}async function ZU(t,e){let n=await dT(t.appConfig);for(;n.authToken.requestStatus===1;)await QR(100),n=await dT(t.appConfig);const r=n.authToken;return r.requestStatus===0?$y(t,e):r}function dT(t){return pf(t,e=>{if(!tA(e))throw xs.create("not-registered");const n=e.authToken;return i3(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function e3(t,e){try{const n=await XU(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await nd(t.appConfig,r),n}catch(n){if(WR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ZR(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await nd(t.appConfig,r)}throw n}}function tA(t){return t!==void 0&&t.registrationStatus===2}function t3(t){return t.requestStatus===2&&!n3(t)}function n3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+AU}function r3(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function i3(t){return t.requestStatus===1&&t.requestTime+UR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s3(t){const e=t,{installationEntry:n,registrationPromise:r}=await Wy(e);return r?r.catch(console.error):$y(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o3(t,e=!1){const n=t;return await a3(n),(await $y(n,e)).token}async function a3(t){const{registrationPromise:e}=await Wy(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l3(t){if(!t||!t.options)throw Sp("App Configuration");if(!t.name)throw Sp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Sp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Sp(t){return xs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="installations",u3="installations-internal",c3=t=>{const e=t.getProvider("app").getImmediate(),n=l3(e),r=Os(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},h3=t=>{const e=t.getProvider("app").getImmediate(),n=Os(e,nA).getImmediate();return{getId:()=>s3(n),getToken:i=>o3(n,i)}};function d3(){Kn(new An(nA,c3,"PUBLIC")),Kn(new An(u3,h3,"PRIVATE"))}d3();on(FR,By);on(FR,By,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3="/firebase-messaging-sw.js",p3="/firebase-cloud-messaging-push-scope",rA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",m3="https://fcmregistrations.googleapis.com/v1",iA="google.c.a.c_id",g3="google.c.a.c_l",_3="google.c.a.ts",y3="google.c.a.e";var fT;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(fT||(fT={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var au;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(au||(au={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function v3(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="fcm_token_details_db",w3=5,pT="fcm_token_object_Store";async function E3(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Cp))return null;let e=null;return(await kd(Cp,w3,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(pT))return;const l=o.objectStore(pT),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:yr(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:yr(h.auth),p256dh:yr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:yr(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:yr(h.auth),p256dh:yr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:yr(h.vapidKey)}}}}}})).close(),await ap(Cp),await ap("fcm_vapid_details_db"),await ap("undefined"),T3(e)?e:null}function T3(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I3="firebase-messaging-database",S3=1,As="firebase-messaging-store";let kp=null;function Hy(){return kp||(kp=kd(I3,S3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(As)}}})),kp}async function sA(t){const e=Gy(t),r=await(await Hy()).transaction(As).objectStore(As).get(e);if(r)return r;{const i=await E3(t.appConfig.senderId);if(i)return await qy(t,i),i}}async function qy(t,e){const n=Gy(t),i=(await Hy()).transaction(As,"readwrite");return await i.objectStore(As).put(e,n),await i.done,e}async function C3(t){const e=Gy(t),r=(await Hy()).transaction(As,"readwrite");await r.objectStore(As).delete(e),await r.done}function Gy({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Pt=new Ds("messaging","Messaging",k3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x3(t,e){const n=await Qy(t),r=aA(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Ky(t.appConfig),i)).json()}catch(o){throw Pt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Pt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Pt.create("token-subscribe-no-token");return s.token}async function R3(t,e){const n=await Qy(t),r=aA(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Ky(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Pt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Pt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Pt.create("token-update-no-token");return s.token}async function oA(t,e){const r={method:"DELETE",headers:await Qy(t)};try{const s=await(await fetch(`${Ky(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Pt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Pt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Ky({projectId:t}){return`${m3}/projects/${t}/registrations`}async function Qy({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function aA({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==rA&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A3=7*24*60*60*1e3;async function P3(t){const e=await D3(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:yr(e.getKey("auth")),p256dh:yr(e.getKey("p256dh"))},r=await sA(t.firebaseDependencies);if(r){if(O3(r.subscriptionOptions,n))return Date.now()>=r.createTime+A3?b3(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await oA(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return mT(t.firebaseDependencies,n)}else return mT(t.firebaseDependencies,n)}async function N3(t){const e=await sA(t.firebaseDependencies);e&&(await oA(t.firebaseDependencies,e.token),await C3(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function b3(t,e){try{const n=await R3(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await qy(t.firebaseDependencies,r),n}catch(n){throw n}}async function mT(t,e){const r={token:await x3(t,e),createTime:Date.now(),subscriptionOptions:e};return await qy(t,r),r.token}async function D3(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:v3(e)})}function O3(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return L3(e,t),M3(e,t),V3(e,t),e}function L3(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function M3(t,e){e.data&&(t.data=e.data)}function V3(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j3(t){return typeof t=="object"&&!!t&&iA in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F3(t){if(!t||!t.options)throw xp("App Configuration Object");if(!t.name)throw xp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw xp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function xp(t){return Pt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=F3(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t){try{t.swRegistration=await navigator.serviceWorker.register(f3,{scope:p3}),t.swRegistration.update().catch(()=>{})}catch(e){throw Pt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B3(t,e){if(!e&&!t.swRegistration&&await lA(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Pt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z3(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=rA)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e){if(!navigator)throw Pt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Pt.create("permission-blocked");return await z3(t,e==null?void 0:e.vapidKey),await B3(t,e==null?void 0:e.serviceWorkerRegistration),P3(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W3(t,e,n){const r=$3(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[iA],message_name:n[g3],message_time:n[_3],message_device_time:Math.floor(Date.now()/1e3)})}function $3(t){switch(t){case au.NOTIFICATION_CLICKED:return"notification_open";case au.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H3(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===au.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(gT(n)):t.onMessageHandler.next(gT(n)));const r=n.data;j3(r)&&r[y3]==="1"&&await W3(t,n.messageType,r)}const _T="@firebase/messaging",yT="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q3=t=>{const e=new U3(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>H3(e,n)),e},G3=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>uA(e,r)}};function K3(){Kn(new An("messaging",q3,"PUBLIC")),Kn(new An("messaging-internal",G3,"PRIVATE")),on(_T,yT),on(_T,yT,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(){try{await pC()}catch{return!1}return typeof window<"u"&&fC()&&bb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q3(t){if(!navigator)throw Pt.create("only-available-in-window");return t.swRegistration||await lA(t),N3(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y3(t,e){if(!navigator)throw Pt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t=xd()){return Yy().then(e=>{if(!e)throw Pt.create("unsupported-browser")},e=>{throw Pt.create("indexed-db-unsupported")}),Os(we(t),"messaging").getImmediate()}async function X3(t,e){return t=we(t),uA(t,e)}function J3(t){return t=we(t),Q3(t)}function Z3(t,e){return t=we(t),Y3(t,e)}K3();const hA=Object.freeze(Object.defineProperty({__proto__:null,deleteToken:J3,getMessaging:cA,getToken:X3,isSupported:Yy,onMessage:Z3},Symbol.toStringTag,{value:"Module"})),eB={apiKey:"AIzaSyAbAb2YcqvSaahSV_UITjQtk8UArYSaDdY",authDomain:"dingo-new-version.firebaseapp.com",databaseURL:"https://dingo-new-version-default-rtdb.firebaseio.com",projectId:"dingo-new-version",storageBucket:"dingo-new-version.firebasestorage.app",messagingSenderId:"245470329002",appId:"1:245470329002:web:f0fae2a906e773629578d3"},tB="GG6zruC_lQSTKwuBvOudnROxxtXFMGufChhrzU7M6vQ",mf=yC(eB),Ou=uL(mf),Ye=XV(mf),be=CU(mf);let lu=null;Yy().then(t=>{t&&(lu=cA(mf))}).catch(()=>{});function nB(){return String(Math.floor(1e7+Math.random()*9e7))}async function dA(t,e){const n=ln(Ye,"users",t);(await Xd(n)).exists()?await kn(n,{isOnline:!0}):await cj(n,{displayName:e.displayName||"Player",email:e.email||"",avatar:e.avatar||"🎯",color:e.color||"#00ffcc",shortId:nB(),wins:0,losses:0,total:0,winRate:0,streak:0,friends:[],isOnline:!0,fcmToken:null,createdAt:Zd()})}async function rB(t){const e=await Xd(ln(Ye,"users",t));return e.exists()?{uid:t,...e.data()}:null}async function fA(t,e){const{shortId:n,...r}=e;await kn(ln(Ye,"users",t),r)}async function vT(t,e){try{await kn(ln(Ye,"users",t),{isOnline:e,lastSeen:Zd()})}catch{}}async function iB(t,e){await kn(ln(Ye,"users",t),{fcmToken:e})}async function sB(t){const e=Ni(lr(Ye,"users"),zr("displayName",">=",t),zr("displayName","<=",t+""));return(await Is(e)).docs.map(r=>({uid:r.id,...r.data()}))}const oB=new wr;function aB(t){return XD(Ou,t)}async function lB(t,e){return(await qD(Ou,t,e)).user}async function uB(t,e,n){const r=await HD(Ou,t,e);return await KD(r.user,{displayName:n}),await dA(r.user.uid,{displayName:n,email:t,avatar:"🎯",color:"#00ffcc"}),r.user}async function cB(){const t=await yO(Ou,oB);return await dA(t.user.uid,{displayName:t.user.displayName||"Player",email:t.user.email,avatar:"🎯",color:"#00ffcc"}),t.user}async function pA(){await JD(Ou)}const mA=b.createContext(null);function Dn(){return b.useContext(mA)}function hB({children:t}){const[e,n]=b.useState(null),[r,i]=b.useState(null),[s,o]=b.useState(!0),a=async l=>{if(!l)return;const c=await rB(l);i(c)};return b.useEffect(()=>{const l=aB(async h=>{n(h),h?(await a(h.uid),vT(h.uid,!0)):i(null),o(!1)}),c=()=>{e&&vT(e.uid,!1)};return window.addEventListener("beforeunload",c),()=>{l(),window.removeEventListener("beforeunload",c)}},[]),p.jsx(mA.Provider,{value:{user:e,profile:r,loading:s,refreshProfile:a},children:t})}function dB(){const[t,e]=b.useState([]);return b.useEffect(()=>{const n=r=>{const i=Date.now();e(s=>[...s,{id:i,...r.detail}]),setTimeout(()=>{e(s=>s.filter(o=>o.id!==i))},3500)};return window.addEventListener("dingo-toast",n),()=>window.removeEventListener("dingo-toast",n)},[]),t.length?p.jsx("div",{className:"toast-container",children:t.map(n=>p.jsx("div",{className:`toast ${n.type||"info"}`,children:p.jsxs("div",{children:[p.jsx("div",{className:"toast-title",children:n.title}),n.body&&p.jsx("div",{className:"toast-body",children:n.body})]})},n.id))}):null}function Xy(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function Jy(t,e,n){await zs(Ne(be,`rooms/${t}`),{gameState:{status:"waiting",turn:"p1",p1Board:n,p2Board:[],calledNumbers:[],p1Lines:0,p2Lines:0,p1Chances:5,p2Chances:5,winner:null,tie:!1,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{...e,role:"p1"}},rematch:{p1:!1,p2:!1,newRoomId:null}})}async function gA(t,e,n){var s;const r=await VR(Ne(be,`rooms/${t}`));if(!r.exists())throw new Error("Room not found");const i=r.val();if((s=i.players)!=null&&s.p2)throw new Error("Room is full");return await ur(Ne(be,`rooms/${t}`),{"players/p2":{...e,role:"p2"},"gameState/p2Board":n,"gameState/status":"playing","gameState/turnStartedAt":Date.now()}),i}function Zy(t,e){const n=Ne(be,`rooms/${t}`);return Du(n,r=>e(r.val())),()=>jR(n)}async function $a(t,e,n,r,i,s=!1){const o={"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i};s||(o["gameState/turn"]=e==="p1"?"p2":"p1",o["gameState/turnStartedAt"]=Date.now()),await ur(Ne(be,`rooms/${t}`),o)}async function fB(t,e,n,r,i,s){await ur(Ne(be,`rooms/${t}`),{"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i,[`gameState/${e}Chances`]:s,"gameState/turn":e==="p1"?"p2":"p1","gameState/turnStartedAt":Date.now()})}function _A(t){setTimeout(()=>{bu(Ne(be,`rooms/${t}`)).catch(()=>{})},3*60*1e3)}async function Ha(t,e){await ur(Ne(be,`rooms/${t}/gameState`),{winner:e,status:"finished",tie:!1}),_A(t)}async function wT(t){await ur(Ne(be,`rooms/${t}/gameState`),{winner:null,tie:!0,status:"finished"}),_A(t)}async function pB(t,e){await MR(Ne(be,`rooms/${t}/chat`),{...e,ts:Date.now()})}async function mB(t,e){await ur(Ne(be,`rooms/${t}/gameState`),{[`${e}Exited`]:!0})}async function cg(t){try{await bu(Ne(be,`rooms/${t}`))}catch{}}async function gB(t,e,n,r){await ur(Ne(be,`rooms/${t}/rematch`),{[e]:!0});const s=(await VR(Ne(be,`rooms/${t}/rematch`))).val()||{};if(!s.p1||!s.p2||s.newRoomId)return null;const o=Xy();return await Jy(o,r,n),await ur(Ne(be,`rooms/${t}/rematch`),{newRoomId:o}),o}const ev=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]];function ea(){const t=Array.from({length:25},(e,n)=>n+1);for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function kt(t,e){if(!t||t.length===0)return 0;const n=new Set(e);return ev.filter(r=>r.every(i=>n.has(t[i]))).length}function yA(t,e){if(!t||t.length===0)return[];const n=new Set(e);return ev.filter(r=>r.every(i=>n.has(t[i])))}function _B(t,e){const n=new Set;return yA(t,e).forEach(r=>r.forEach(i=>n.add(i))),[...n]}function rd(t,e,n){const r=new Set([...e,n]);let i=0;for(const s of ev){const o=s.filter(a=>r.has(t[a])).length;o===5?i+=1e6:o===4?i+=5e4:o===3?i+=1e3:o===2?i+=20:o===1&&(i+=1)}return i}function Zs(t,e,n,r,i){const s=rd(t,n,r),o=rd(e,n,r);return s+o*i}function yB(t,e,n,r){var s;const i=Array.from({length:25},(o,a)=>a+1).filter(o=>!e.includes(o));if(i.length===0)return null;if(t==="easy")return i[Math.floor(Math.random()*i.length)];if(t==="medium")return i.reduce((o,a)=>rd(r,e,a)>rd(r,e,o)?a:o,i[0]);if(t==="hard"){for(const o of i)if(kt(r,[...e,o])>=5)return o;for(const o of i)if(kt(n,[...e,o])>=5)return o;return i.reduce((o,a)=>Zs(r,n,e,a,.4)>Zs(r,n,e,o,.4)?a:o,i[0])}if(t==="expert"){for(const o of i)if(kt(r,[...e,o])>=5)return o;for(const o of i)if(kt(n,[...e,o])>=5)return o;for(const o of i)if(kt(n,[...e,o])>=4)return o;return i.reduce((o,a)=>Zs(r,n,e,a,.7)>Zs(r,n,e,o,.7)?a:o,i[0])}if(t==="nightmare"||t==="godmode"){for(const a of i)if(kt(r,[...e,a])>=5)return a;for(const a of i)if(kt(n,[...e,a])>=5)return a;if(t==="godmode"){const a=i.map(l=>({num:l,oppLines:kt(n,[...e,l])})).sort((l,c)=>c.oppLines-l.oppLines);if(((s=a[0])==null?void 0:s.oppLines)>=4)return a[0].num}const o=t==="godmode"?1.2:.9;return i.reduce((a,l)=>Zs(r,n,e,l,o)>Zs(r,n,e,a,o)?l:a,i[0])}return i[Math.floor(Math.random()*i.length)]}const vB=45e3;async function wB(t,e,n){const r=Xy();await Jy(r,e,n);const i=MR(Ne(be,`invites/${t}`));return await zs(i,{fromUid:e.uid,fromName:e.name,fromAvatar:e.avatar||"🎯",roomId:r,sentAt:Date.now(),expiresAt:Date.now()+vB}),{roomId:r,inviteId:i.key}}async function Jc(t,e){try{await bu(Ne(be,`invites/${t}/${e}`))}catch{}}async function EB(t,e){return Jc(t,e)}function TB(t,e){const n=Ne(be,`invites/${t}`);return Du(n,r=>{if(!r.exists()){e(null);return}const i=r.val(),s=Date.now(),o=Object.entries(i).filter(([,a])=>a.expiresAt>s).map(([a,l])=>({id:a,...l})).sort((a,l)=>a.sentAt-l.sentAt);e(o.length>0?o[0]:null)},()=>e(null)),()=>jR(n)}function IB(){try{return new(window.AudioContext||window.webkitAudioContext)}catch{return null}}let Ki=null;function tv(){return Ki||(Ki=IB()),(Ki==null?void 0:Ki.state)==="suspended"&&Ki.resume(),Ki}function nv(){const t=parseFloat(localStorage.getItem("sfxVolume")??"0.75");return isNaN(t)?.75:Math.max(0,Math.min(1,t))}function or(t,e=.1,n="sine",r=.1){const i=nv();if(i===0)return;const s=tv();if(!s)return;const o=s.createOscillator(),a=s.createGain();o.connect(a),a.connect(s.destination),o.type=n,o.frequency.value=t,a.gain.setValueAtTime(e*i,s.currentTime),a.gain.exponentialRampToValueAtTime(.001,s.currentTime+r),o.start(),o.stop(s.currentTime+r)}function ds(t,e,n=.1,r="sine"){const i=nv();if(i===0)return;const s=tv();if(!s)return;const o=s.createOscillator(),a=s.createGain();o.connect(a),a.connect(s.destination),o.type=r,o.frequency.setValueAtTime(t,s.currentTime),o.frequency.exponentialRampToValueAtTime(e,s.currentTime+.15),a.gain.setValueAtTime(n*i,s.currentTime),a.gain.exponentialRampToValueAtTime(.001,s.currentTime+.15),o.start(),o.stop(s.currentTime+.15)}function Lu(t,e=.1,n="sine"){t.forEach((r,i)=>setTimeout(()=>or(r,e,n,.3),i*60))}function SB(t=.05,e=100){const n=nv();if(n===0)return;const r=tv();if(!r)return;const i=r.createBuffer(1,r.sampleRate*.05,r.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const o=r.createBufferSource(),a=r.createBiquadFilter(),l=r.createGain();o.buffer=i,a.type="highpass",a.frequency.value=e,o.connect(a),a.connect(l),l.connect(r.destination),l.gain.setValueAtTime(t*n,r.currentTime),l.gain.exponentialRampToValueAtTime(.001,r.currentTime+.05),o.start(),o.stop(r.currentTime+.05)}function Mu(t=1){[523,659,784,1047].forEach((e,n)=>setTimeout(()=>or(e,.15,"square",.2/t),n*100/t))}function Vu(t=1){[400,320,250].forEach((e,n)=>setTimeout(()=>or(e,.1,"sawtooth",.25/t),n*120/t))}const vA={click:()=>or(880,.05,"square",.1),cross:()=>or(660,.1,"square",.15),line:()=>Lu([523,659,784],.2),win:()=>Mu(),lose:()=>Vu(),ping:()=>or(1200,.05,"sine",.08)},CB={click:()=>SB(.03,80),cross:()=>ds(800,200,.12,"sawtooth"),line:()=>Lu([400,500,600],.18,"sawtooth"),win:()=>Mu(1.2),lose:()=>Vu(.8),ping:()=>or(1400,.03,"sine",.06)},kB={click:()=>ds(300,600,.08,"sine"),cross:()=>ds(600,100,.15,"sine"),line:()=>Lu([261,329,392],.25,"sine"),win:()=>Mu(.9),lose:()=>Vu(.7),ping:()=>ds(800,1200,.06,"sine")},xB={click:()=>or(220,.04,"sine",.2),cross:()=>or(330,.06,"sine",.25),line:()=>Lu([261,329,392],.12,"sine"),win:()=>Mu(.6),lose:()=>Vu(.5),ping:()=>or(440,.03,"sine",.15)},RB={click:()=>ds(400,800,.08,"square"),cross:()=>ds(200,1e3,.12,"square"),line:()=>Lu([523,784,1047],.18,"square"),win:()=>Mu(1.4),lose:()=>Vu(1.2),ping:()=>ds(600,1400,.05,"square")},AB={classic:vA,ninja:CB,space:kB,lofi:xB,arcade:RB},PB=[{id:"classic",name:"Classic",icon:"🎮",desc:"Retro 8-bit bleeps"},{id:"ninja",name:"Ninja",icon:"🥷",desc:"Sharp sword slashes"},{id:"space",name:"Space",icon:"🌌",desc:"Sci-fi laser sounds"},{id:"lofi",name:"LoFi",icon:"🎵",desc:"Chill warm tones"},{id:"arcade",name:"Arcade",icon:"🕹️",desc:"Classic arcade bleeps"}],rv=[{id:"mute",label:"Mute",icon:"🔇",value:0},{id:"low",label:"Low",icon:"🔈",value:.2},{id:"med",label:"Med",icon:"🔉",value:.5},{id:"high",label:"High",icon:"🔊",value:.75},{id:"max",label:"Max",icon:"📢",value:1}];function br(){const t=localStorage.getItem("sfxTheme")||"classic",e=AB[t]||vA;return{click:()=>e.click(),cross:()=>e.cross(),line:()=>e.line(),win:()=>e.win(),lose:()=>e.lose(),ping:()=>e.ping()}}function NB(t){localStorage.setItem("sfxTheme",t)}function bB(t){const e=rv.find(r=>r.id===t),n=e?e.value:parseFloat(t);localStorage.setItem("sfxVolume",String(isNaN(n)?.75:n))}function DB(){const t=parseFloat(localStorage.getItem("sfxVolume")??"0.75"),e=rv.find(n=>Math.abs(n.value-t)<.01);return(e==null?void 0:e.id)||"high"}const ET=45;function OB(){const{user:t,profile:e}=Dn(),n=bn(),r=br(),[i,s]=b.useState(null),[o,a]=b.useState(ET),[l,c]=b.useState(!1),h=b.useRef(null),f=b.useRef(null);f.current=i,b.useEffect(()=>{if(!(t!=null&&t.uid))return;const I=TB(t.uid,D=>{var V;if(!D){s(null);return}(V=r.ping)==null||V.call(r),s(D),c(!1);const F=Math.max(0,Math.round((D.expiresAt-Date.now())/1e3));a(F),clearInterval(h.current),h.current=setInterval(()=>{a(S=>S<=1?(clearInterval(h.current),f.current&&(Jc(t.uid,f.current.id).catch(()=>{}),s(null)),0):S-1)},1e3)});return()=>{I(),clearInterval(h.current)}},[t==null?void 0:t.uid]);const m=async()=>{if(!(!i||l)){c(!0),clearInterval(h.current);try{const I=ea(),D={uid:t.uid,name:(e==null?void 0:e.displayName)||"Player",avatar:(e==null?void 0:e.avatar)||"🎯"};await gA(i.roomId,D,I),await Jc(t.uid,i.id),s(null),n(`/game/${i.roomId}`,{state:{role:"p2",board:I}})}catch(I){console.error("Accept invite error:",I),c(!1)}}},v=async()=>{i&&(clearInterval(h.current),await Jc(t.uid,i.id).catch(()=>{}),s(null))};if(!i)return null;const w=44,A=(w-5)/2,P=2*Math.PI*A,T=o/ET,E=o<=10?"#ff2d55":o<=20?"#ffcc00":"#00ffcc";return p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1e3,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,animation:"toastIn 0.3s ease"},children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--c1)",borderRadius:20,padding:"28px 24px",width:"100%",maxWidth:320,textAlign:"center",boxShadow:"0 0 40px rgba(0,255,204,0.2), 8px 8px 0 rgba(0,0,0,0.5)",position:"relative",overflow:"hidden"},children:[p.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,var(--c1),var(--c4))"}}),p.jsxs("div",{style:{position:"relative",width:w,height:w,margin:"0 auto 16px"},children:[p.jsx("div",{style:{width:w,height:w,borderRadius:"50%",background:"var(--panel2)",border:"2px solid var(--edge2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22},children:i.fromAvatar}),p.jsxs("svg",{width:w,height:w,style:{position:"absolute",top:0,left:0,pointerEvents:"none"},children:[p.jsx("circle",{cx:w/2,cy:w/2,r:A,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:4}),p.jsx("circle",{cx:w/2,cy:w/2,r:A,fill:"none",stroke:E,strokeWidth:4,strokeDasharray:P,strokeDashoffset:P*(1-T),strokeLinecap:"round",transform:`rotate(-90 ${w/2} ${w/2})`,style:{transition:"stroke-dashoffset 1s linear, stroke 0.4s"}})]}),p.jsxs("div",{style:{position:"absolute",bottom:-4,right:-8,background:E,color:"#000",fontSize:10,fontWeight:800,borderRadius:10,padding:"1px 5px",fontFamily:"'Black Han Sans',sans-serif"},children:[o,"s"]})]}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18,letterSpacing:1.5,marginBottom:4},children:"⚔️ MATCH INVITE"}),p.jsx("div",{style:{fontWeight:800,fontSize:16,marginBottom:4,color:"var(--ink)"},children:i.fromName}),p.jsxs("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:["challenges you to a match!",p.jsx("br",{}),p.jsxs("span",{style:{fontSize:11,color:E},children:["Expires in ",o,"s"]})]}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:v,style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink2)",WebkitTapHighlightColor:"transparent"},children:"✕ Decline"}),p.jsx("button",{onClick:m,disabled:l,style:{flex:2,padding:"12px 0",background:"var(--c1)",border:"none",borderRadius:"var(--r)",fontWeight:800,fontSize:13,cursor:"pointer",color:"#000",boxShadow:"3px 3px 0 rgba(0,255,204,0.3)",WebkitTapHighlightColor:"transparent",opacity:l?.6:1},children:l?"⏳ Joining…":"⚔️ Accept!"})]})]})})}const LB="modulepreload",MB=function(t){return"/DINGO-NEW-VERSION-/"+t},TT={},wA=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=MB(l),l in TT)return;TT[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":LB,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,v)=>{f.addEventListener("load",m),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};let VB=null;async function jB(t){if(!lu)return null;try{const{getToken:e}=await wA(async()=>{const{getToken:i}=await Promise.resolve().then(()=>hA);return{getToken:i}},void 0);if(await Notification.requestPermission()!=="granted")return null;const r=await e(lu,{vapidKey:tB});return r&&(VB=r,await iB(t,r)),r}catch(e){return console.warn("Notification setup failed:",e),null}}function FB(t){if(!lu)return()=>{};wA(async()=>{const{onMessage:e}=await Promise.resolve().then(()=>hA);return{onMessage:e}},void 0).then(({onMessage:e})=>{e(lu,n=>{t(n)})})}function Jn(t,e,n="info"){const r=new CustomEvent("dingo-toast",{detail:{title:t,body:e,type:n}});window.dispatchEvent(r)}const UB=[{icon:"🎯",title:"Your Unique Board",desc:"You and your opponent each get a 5×5 grid with the same 25 numbers (1–25) arranged in different random positions."},{icon:"📣",title:"Call a Number",desc:'On your turn, tap any number on your board to "call" it. That number instantly gets marked on BOTH boards — wherever it appears.'},{icon:"📏",title:"Complete Lines",desc:"Mark 5 numbers in a row — horizontally, vertically, or diagonally — to complete a line. Each player is racing to form lines on their own board layout."},{icon:"🏆",title:"Win the Match",desc:"First player to complete 5 full lines wins! If the last call completes both boards simultaneously, it's a TIE and both players earn a point."},{icon:"❤️",title:"5 Chances Per Player",desc:"Each player has 5 lives. If your timer runs out, you auto-pick a random number and lose one life. Lose all 5 lives and your opponent wins automatically."},{icon:"🎁",title:"Lifelines",desc:"Use your 5 lifelines strategically: ⏰ Extra time, 💡 Best move hint, 2️⃣ Pick twice, 🎯 50/50 hints, 🛡️ Shield against timeout."},{icon:"🤖",title:"Solo vs Bot",desc:"Not ready for live players? Challenge one of 6 AI difficulty levels — from Easy all the way up to GodMode."}];function BB(){const t=bn(),[e,n]=b.useState(!1);return p.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px 48px",overflowY:"auto",WebkitOverflowScrolling:"touch"},children:[p.jsxs("div",{style:{position:"relative",marginBottom:6,textAlign:"center"},children:[p.jsx("div",{style:{position:"absolute",top:6,left:6,right:0,fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--c1)",lineHeight:.9,opacity:.25,letterSpacing:-2,pointerEvents:"none",userSelect:"none"},children:"DiNGo"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--ink)",lineHeight:.9,letterSpacing:-2,position:"relative",textShadow:"0 0 40px rgba(0,255,204,0.2)"},children:"DiNGo"})]}),p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"var(--panel2)",border:"2px solid var(--c1)",borderRadius:"var(--r)",padding:"5px 14px",fontSize:9,letterSpacing:3,textTransform:"uppercase",fontWeight:700,color:"var(--c1)",marginBottom:28},children:[p.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),"Live Multiplayer Bingo"]}),p.jsxs("p",{style:{fontSize:15,color:"var(--ink2)",textAlign:"center",maxWidth:280,lineHeight:1.75,marginBottom:32},children:["Call numbers. Build lines.",p.jsx("br",{}),p.jsx("strong",{style:{color:"var(--ink)"},children:"Beat your opponent to 5."})]}),p.jsx("div",{style:{display:"flex",width:"100%",maxWidth:340,border:"2px solid var(--edge2)",borderRadius:"var(--r)",overflow:"hidden",marginBottom:36},children:[{n:"5×5",l:"Grid"},{n:"6",l:"AI Levels"},{n:"5",l:"Lifelines"}].map((r,i)=>p.jsxs("div",{style:{flex:1,textAlign:"center",padding:"14px 0",background:"var(--panel)",borderRight:i<2?"2px solid var(--edge2)":"none"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,color:"var(--ink)"},children:r.n}),p.jsx("div",{style:{fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:r.l})]},i))}),p.jsxs("div",{style:{width:"100%",maxWidth:340,display:"flex",flexDirection:"column",gap:12},children:[p.jsx("button",{className:"btn btn-primary btn-full",style:{fontSize:16,padding:"16px 0",letterSpacing:2,boxShadow:"0 0 24px rgba(0,255,204,0.3), 4px 4px 0 rgba(0,255,204,0.2)"},onClick:()=>t("/login"),children:"🎮 Get Started"}),p.jsx("button",{className:"btn btn-ghost btn-full",style:{borderColor:"rgba(0,255,204,0.35)",color:"var(--c1)",fontSize:13},onClick:()=>n(!0),children:"📖 How to Play"})]}),e&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.9)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>n(!1),children:p.jsxs("div",{style:{background:"var(--panel)",borderRadius:"20px 20px 0 0",border:"2px solid var(--edge2)",borderBottom:"none",width:"100%",maxWidth:480,maxHeight:"88vh",overflowY:"auto",WebkitOverflowScrolling:"touch"},onClick:r=>r.stopPropagation(),children:[p.jsx("div",{style:{height:4,background:"linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))",borderRadius:"20px 20px 0 0"}}),p.jsxs("div",{style:{padding:"18px 18px 36px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:22},children:[p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,letterSpacing:3},children:"HOW TO PLAY"}),p.jsx("button",{onClick:()=>n(!1),style:{background:"none",border:"2px solid var(--edge2)",color:"var(--ink2)",width:34,height:34,borderRadius:8,cursor:"pointer",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),UB.map((r,i)=>p.jsxs("div",{style:{display:"flex",gap:14,marginBottom:22,alignItems:"flex-start"},children:[p.jsx("div",{style:{fontSize:32,flexShrink:0,lineHeight:1,width:52,height:52,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--panel2)",borderRadius:12,border:"2px solid var(--edge2)"},children:r.icon}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:800,fontSize:14,marginBottom:4},children:r.title}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",lineHeight:1.6},children:r.desc})]})]},i)),p.jsx("button",{className:"btn btn-primary btn-full",style:{marginTop:4,fontSize:14},onClick:()=>n(!1),children:"Got it! Let's Play 🎮"})]})]})})]})}function zB(){const{user:t,loading:e}=Dn(),n=bn(),[r,i]=b.useState("login"),[s,o]=b.useState(""),[a,l]=b.useState(""),[c,h]=b.useState(""),[f,m]=b.useState(""),[v,w]=b.useState(!1),[A,P]=b.useState("");b.useEffect(()=>{!e&&t&&n("/",{replace:!0})},[t,e]);const T=async()=>{m(""),P(""),w(!0);try{if(r==="login")await lB(s,a);else{if(!c.trim()){m("Please enter your name"),w(!1);return}if(a.length<6){m("Password must be at least 6 characters"),w(!1);return}await uB(s,a,c.trim()),P("✅ Account created! Signing you in…")}}catch(I){m(IT(I.code))}w(!1)},E=async()=>{m(""),P(""),w(!0);try{await cB()}catch(I){m(IT(I.code))}w(!1)};return e||t?p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:p.jsx("div",{className:"spinner"})}):p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:20,paddingTop:40},children:[p.jsxs("div",{className:"text-center",style:{marginBottom:28},children:[p.jsx("div",{className:"hero-logo","data-text":"DiNGo",style:{fontSize:"clamp(72px,18vw,100px)"},children:"DiNGo"}),p.jsx("div",{className:"sub",style:{marginTop:6,letterSpacing:2},children:"LIVE MULTIPLAYER BINGO"})]}),p.jsx("div",{className:"card",style:{maxWidth:400},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{display:"flex",gap:8,marginBottom:20},children:["login","register"].map(I=>p.jsx("button",{className:`btn ${r===I?"btn-primary":"btn-ghost"}`,style:{flex:1},onClick:()=>{i(I),m(""),P("")},children:I==="login"?"🎮 Sign In":"🚀 Sign Up"},I))}),r==="register"&&p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Your Name"}),p.jsx("input",{type:"text",placeholder:"KGames",value:c,onChange:I=>h(I.target.value),maxLength:20,enterKeyHint:"next"})]}),p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Email"}),p.jsx("input",{type:"email",placeholder:"you@email.com",value:s,onChange:I=>o(I.target.value),enterKeyHint:"next"})]}),p.jsxs("div",{style:{marginBottom:18},children:[p.jsx("div",{className:"label",children:"Password"}),p.jsx("input",{type:"password",placeholder:"••••••••",value:a,onChange:I=>l(I.target.value),onKeyDown:I=>I.key==="Enter"&&T(),enterKeyHint:"done"})]}),f&&p.jsx("div",{style:{background:"rgba(255,45,85,0.12)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c2)"},children:f}),A&&p.jsxs("div",{style:{background:"rgba(0,255,204,0.12)",border:"2px solid var(--c1)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c1)",display:"flex",alignItems:"center",gap:8},children:[p.jsx("div",{className:"spinner",style:{width:16,height:16,borderWidth:2}}),A]}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:T,disabled:v,children:v?"⏳ Please wait…":r==="login"?"🎮 Sign In":"🚀 Create Account"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,margin:"16px 0"},children:[p.jsx("div",{className:"divider",style:{flex:1}}),p.jsx("span",{className:"muted small",children:"or"}),p.jsx("div",{className:"divider",style:{flex:1}})]}),p.jsxs("button",{className:"btn btn-ghost btn-full",onClick:E,disabled:v,style:{border:"2px solid var(--edge2)"},children:[p.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",width:18,alt:""}),"Continue with Google"]})]})})]})}function IT(t){return{"auth/user-not-found":"No account found with that email.","auth/wrong-password":"Wrong password. Try again.","auth/invalid-credential":"Wrong email or password. Try again.","auth/email-already-in-use":"Email already in use — try signing in instead.","auth/weak-password":"Password must be at least 6 characters.","auth/invalid-email":"Invalid email address.","auth/popup-closed-by-user":"Google sign-in was cancelled.","auth/too-many-requests":"Too many attempts. Please wait a minute."}[t]||"Something went wrong. Please try again."}function WB(t,e,n){const r=Ne(be,`online/${t}`),i=Ne(be,".info/connected"),s=Du(i,o=>{o.val()===!0&&(gU(r).remove(),zs(r,{uid:t,name:e,avatar:n,ts:Date.now()}).catch(()=>{}))});return()=>{s(),bu(r).catch(()=>{})}}function $B(t){const e=Ne(be,"online");return Du(e,r=>t(r.exists()?Object.keys(r.val()||{}).length:0),()=>t(0))}function HB(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function qB(t,e,n,r){await zs(Ne(be,`queue/${t}`),{uid:t,name:e,avatar:n,board:r,timestamp:Date.now(),roomId:null,role:null})}function El(t){bu(Ne(be,`queue/${t}`)).catch(()=>{})}function GB(t,e,n,r,i){const s=Ne(be,"queue");let o=!1;const a=Du(s,async l=>{var A;if(o)return;const c=l.val();if(!c||!c[t])return;if(c[t].roomId){if(o)return;o=!0,a(),El(t),i(c[t].roomId,c[t].role||"p2");return}const h=Object.entries(c).filter(([P,T])=>P!==t&&!T.roomId).sort((P,T)=>P[1].timestamp-T[1].timestamp);if(h.length===0)return;const[f,m]=h[0];if((((A=c[t])==null?void 0:A.timestamp)||0)>m.timestamp||o)return;o=!0,a();const w=HB();try{await zs(Ne(be,`rooms/${w}`),{gameState:{status:"playing",turn:"p1",p1Board:r,p2Board:m.board||[],calledNumbers:[],p1Lines:0,p2Lines:0,p1Chances:5,p2Chances:5,winner:null,tie:!1,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{uid:t,name:e,avatar:n||"🎯",role:"p1"},p2:{uid:f,name:m.name,avatar:m.avatar||"🎯",role:"p2"}},rematch:{p1:!1,p2:!1,newRoomId:null}}),await ur(Ne(be,`queue/${t}`),{roomId:w,role:"p1"}),await ur(Ne(be,`queue/${f}`),{roomId:w,role:"p2"}),El(t),i(w,"p1")}catch(P){console.error("Matchmaking error:",P),o=!1}});return a}const KB=[{icon:"🤖",title:"vs Bot",sub:"6 AI levels",path:"/bot"},{icon:"⚡",title:"Create Room",sub:"Invite a friend",path:"/room/create"},{icon:"🔗",title:"Join Room",sub:"Enter room code",path:"/room/join"},{icon:"🏆",title:"Leaderboard",sub:"Top players",path:"/leaderboard"},{icon:"👥",title:"Friends",sub:"Add & challenge",path:"/friends"},{icon:"📊",title:"History",sub:"Past games",path:"/history"}],QB=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"];function YB(){const{user:t,profile:e,refreshProfile:n}=Dn(),r=bn(),i=br(),[s,o]=b.useState(0),[a,l]=b.useState(!1),[c,h]=b.useState(0),[f,m]=b.useState(!1),[v,w]=b.useState(!1),[A,P]=b.useState(""),[T,E]=b.useState(""),[I,D]=b.useState(!1),F=b.useRef(null),V=b.useRef(null),S=b.useRef(null);b.useEffect(()=>{if(!t||!e)return;const M=WB(t.uid,e.displayName||"Player",e.avatar||"🎯"),ie=$B(o);return()=>{M(),ie()}},[t==null?void 0:t.uid,e==null?void 0:e.displayName]),b.useEffect(()=>()=>{t!=null&&t.uid&&El(t.uid),clearInterval(V.current),F.current&&F.current()},[t==null?void 0:t.uid]);const y=()=>{P((e==null?void 0:e.displayName)||""),E((e==null?void 0:e.avatar)||"🎯"),w(!0)},C=async()=>{var M;A.trim()&&(D(!0),await fA(t.uid,{displayName:A.trim(),avatar:T}),await n(t.uid),D(!1),w(!1),(M=i.click)==null||M.call(i))},k=async()=>{var ke;if(a){El(t.uid),F.current&&(F.current(),F.current=null),clearInterval(V.current),l(!1),h(0);return}(ke=i.click)==null||ke.call(i);const M=ea();S.current=M,l(!0),h(0),V.current=setInterval(()=>h(z=>z+1),1e3),await qB(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",M);const ie=GB(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",M,(z,X)=>{clearInterval(V.current),l(!1),r(`/game/${z}`,{state:{role:X,board:M}})});F.current=ie},N=async()=>{a&&(El(t.uid),F.current&&F.current(),clearInterval(V.current)),await pA()},R=M=>{var ie;(ie=i.click)==null||ie.call(i),r(M)},x=(e==null?void 0:e.color)||"#00ffcc",Te=e!=null&&e.displayName?e.displayName.length>10?e.displayName.slice(0,10)+"…":e.displayName:"Player";return p.jsxs("div",{className:"screen",style:{paddingTop:14,paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",maxWidth:440,marginBottom:18,gap:8},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:30,letterSpacing:1,lineHeight:1},children:"DiNGo"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:2},children:[p.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),p.jsxs("span",{style:{fontSize:10,color:"var(--c1)",fontWeight:700,letterSpacing:1.5,textTransform:"uppercase"},children:[s," Online"]})]})]}),p.jsxs("button",{onClick:y,style:{display:"flex",alignItems:"center",gap:7,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:10,padding:"6px 10px",cursor:"pointer",flexShrink:0,maxWidth:160,WebkitTapHighlightColor:"transparent"},children:[p.jsx("span",{style:{fontSize:24,flexShrink:0},children:(e==null?void 0:e.avatar)||"🎯"}),p.jsxs("div",{style:{textAlign:"left",overflow:"hidden"},children:[p.jsx("div",{style:{fontWeight:700,fontSize:12,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:x},children:Te}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)",whiteSpace:"nowrap"},children:[(e==null?void 0:e.wins)||0,"W · ",(e==null?void 0:e.streak)||0,"🔥"]})]}),p.jsx("span",{style:{fontSize:10,color:"var(--ink3)",flexShrink:0},children:"✏️"})]}),p.jsx("button",{onClick:()=>R("/profile"),title:"Full Profile & Settings",style:{width:36,height:36,borderRadius:8,flexShrink:0,background:"var(--panel)",border:"2px solid var(--edge2)",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},children:"⚙️"}),p.jsx("button",{onClick:()=>m(!0),title:"Sign Out",style:{width:36,height:36,borderRadius:8,flexShrink:0,background:"var(--panel)",border:"2px solid var(--edge2)",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},children:"🚪"})]}),(e==null?void 0:e.shortId)&&p.jsx("div",{style:{width:"100%",maxWidth:440,marginBottom:14},children:p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:8,padding:"4px 12px",fontSize:11},children:[p.jsx("span",{style:{color:"var(--ink3)"},children:"🪪 Player ID:"}),p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",letterSpacing:2,color:"var(--c3)",fontSize:13},children:["#",e.shortId]})]})}),p.jsx("div",{style:{width:"100%",maxWidth:440,marginBottom:18},children:p.jsx("button",{onClick:k,style:{width:"100%",padding:"15px 20px",background:a?"var(--c2)":"var(--c1)",border:"none",borderRadius:"var(--r)",fontFamily:"'Space Grotesk',sans-serif",fontWeight:800,fontSize:14,letterSpacing:1.5,textTransform:"uppercase",color:"#000",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,WebkitTapHighlightColor:"transparent"},children:a?p.jsxs(p.Fragment,{children:[p.jsx("span",{style:{animation:"spin 1s linear infinite",display:"inline-block"},children:"⏳"})," Searching… ",c,"s · Tap to Cancel"]}):"⚡ PLAY NOW — Auto Match"})}),p.jsx("div",{className:"menu-grid",children:KB.map(M=>p.jsxs("div",{className:"menu-card",onClick:()=>R(M.path),children:[p.jsx("div",{className:"menu-icon",children:M.icon}),p.jsx("div",{className:"menu-title",children:M.title}),p.jsx("div",{className:"menu-sub",children:M.sub})]},M.path))}),p.jsx("div",{style:{marginTop:18,width:"100%",maxWidth:440,display:"flex",gap:8},children:[{label:"WINS",val:(e==null?void 0:e.wins)||0,color:"var(--c1)"},{label:"LOSSES",val:(e==null?void 0:e.losses)||0,color:"var(--c2)"},{label:"STREAK",val:`${(e==null?void 0:e.streak)||0}🔥`,color:"var(--c3)"}].map(M=>p.jsxs("div",{style:{flex:1,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"10px 0",textAlign:"center"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,color:M.color},children:M.val}),p.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:2},children:M.label})]},M.label))}),v&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:800,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>w(!1),children:p.jsxs("div",{style:{background:"var(--panel)",borderRadius:"20px 20px 0 0",border:"2px solid var(--edge2)",borderBottom:"none",width:"100%",maxWidth:480,maxHeight:"75vh",overflowY:"auto",WebkitOverflowScrolling:"touch"},onClick:M=>M.stopPropagation(),children:[p.jsx("div",{style:{height:4,background:"linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))",borderRadius:"20px 20px 0 0"}}),p.jsxs("div",{style:{padding:"16px 16px 32px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,letterSpacing:2},children:"✏️ QUICK EDIT"}),p.jsx("button",{onClick:()=>w(!1),style:{background:"none",border:"2px solid var(--edge2)",color:"var(--ink2)",width:32,height:32,borderRadius:8,cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),p.jsx("div",{style:{textAlign:"center",fontSize:52,marginBottom:12},children:T}),p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Display Name"}),p.jsx("input",{type:"text",value:A,onChange:M=>P(M.target.value),maxLength:20,placeholder:"Your name",enterKeyHint:"done",onKeyDown:M=>M.key==="Enter"&&M.target.blur()})]}),p.jsx("div",{className:"label",style:{marginBottom:8},children:"Avatar"}),p.jsx("div",{className:"avatar-grid",style:{marginBottom:16},children:QB.map(M=>p.jsx("div",{className:`avatar-opt ${T===M?"selected":""}`,onClick:()=>{var ie;E(M),(ie=i.click)==null||ie.call(i)},children:M},M))}),p.jsx("button",{onClick:C,disabled:I||!A.trim(),className:"btn btn-primary btn-full",style:{fontSize:15,padding:"14px 0"},children:I?"⏳ Saving…":"💾 Save Changes"})]})]})}),f&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>m(!1),children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:M=>M.stopPropagation(),children:[p.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:()=>m(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),p.jsx("button",{onClick:N,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const XB=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"],JB=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#00b4ff","#ff6a00","#00ff88","#ff00ff","#ffffff","#f5a623"];function ZB(){const{user:t,profile:e,refreshProfile:n}=Dn(),r=bn(),i=br(),[s,o]=b.useState((e==null?void 0:e.displayName)||""),[a,l]=b.useState((e==null?void 0:e.avatar)||"🎯"),[c,h]=b.useState((e==null?void 0:e.color)||"#00ffcc"),[f,m]=b.useState(localStorage.getItem("sfxTheme")||"classic"),[v,w]=b.useState(DB()),[A,P]=b.useState(!1),[T,E]=b.useState(!1),[I,D]=b.useState("idle"),[F,V]=b.useState(!1);b.useEffect(()=>{e&&(o(e.displayName||""),l(e.avatar||"🎯"),h(e.color||"#00ffcc"))},[e]);const S=async()=>{var R;s.trim()&&(P(!0),await fA(t.uid,{displayName:s.trim(),avatar:a,color:c}),await n(t.uid),(R=i.click)==null||R.call(i),P(!1),E(!0),setTimeout(()=>E(!1),2e3))},y=R=>{NB(R),m(R),setTimeout(()=>{var x,Te;return(Te=(x=br()).click)==null?void 0:Te.call(x)},50)},C=R=>{bB(R),w(R),setTimeout(()=>{var x,Te;return(Te=(x=br()).click)==null?void 0:Te.call(x)},30)},k=async()=>{await pA()},N=async()=>{D("requesting");const R=await jB(t.uid);D(R?"granted":"denied")};return p.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[p.jsxs("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain",padding:"14px 14px 24px",display:"flex",flexDirection:"column",alignItems:"center"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:4},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px",flexShrink:0},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,letterSpacing:2},children:"⚙️ PROFILE"}),p.jsx("button",{onClick:()=>V(!0),style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:5,flexShrink:0,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"6px 10px",fontSize:11,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Sign Out"})]}),p.jsx("div",{style:{fontSize:64,marginBottom:6,textAlign:"center"},children:a}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,textAlign:"center",marginBottom:2,color:c},children:s||"Player"}),p.jsx("div",{style:{fontSize:11,color:"var(--ink3)",textAlign:"center",marginBottom:4},children:t==null?void 0:t.email}),(e==null?void 0:e.shortId)&&p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:8,padding:"4px 12px",fontSize:11,marginBottom:16},children:[p.jsx("span",{style:{color:"var(--ink3)"},children:"🪪 Player ID:"}),p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",letterSpacing:2,color:"var(--c3)",fontSize:13},children:["#",e.shortId]})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsxs("div",{style:{marginBottom:16},children:[p.jsx("div",{className:"label",children:"Display Name"}),p.jsx("input",{type:"text",value:s,onChange:R=>o(R.target.value),maxLength:20,placeholder:"Your name",enterKeyHint:"done",onKeyDown:R=>R.key==="Enter"&&R.target.blur()})]}),p.jsxs("div",{style:{marginBottom:16},children:[p.jsx("div",{className:"label",children:"Avatar"}),p.jsx("div",{className:"avatar-grid",children:XB.map(R=>p.jsx("div",{className:`avatar-opt ${a===R?"selected":""}`,onClick:()=>{var x;l(R),(x=i.click)==null||x.call(i)},children:R},R))})]}),p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Name Color"}),p.jsx("div",{className:"color-row",children:JB.map(R=>p.jsx("div",{className:`color-dot ${c===R?"selected":""}`,style:{background:R},onClick:()=>{var x;h(R),(x=i.click)==null||x.call(i)}},R))})]})]})}),e&&p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"📊 Your Stats"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[{label:"WINS",val:e.wins||0,color:"var(--c1)"},{label:"LOSSES",val:e.losses||0,color:"var(--c2)"},{label:"WIN RATE",val:`${e.winRate||0}%`,color:"var(--c3)"},{label:"STREAK",val:`${e.streak||0}🔥`,color:"var(--c3)"},{label:"GAMES",val:e.total||0,color:"var(--c4)"}].map(R=>p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"12px 0",textAlign:"center"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:R.color},children:R.val}),p.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:R.label})]},R.label))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🔊 Volume"}),p.jsx("div",{style:{display:"flex",gap:8},children:rv.map(R=>p.jsxs("button",{onClick:()=>C(R.id),style:{flex:1,padding:"10px 0",border:"2px solid",borderColor:v===R.id?"var(--c1)":"var(--edge2)",background:v===R.id?"rgba(0,255,204,0.1)":"var(--panel)",borderRadius:"var(--r)",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,WebkitTapHighlightColor:"transparent"},children:[p.jsx("span",{style:{fontSize:18},children:R.icon}),p.jsx("span",{style:{fontSize:9,fontWeight:700,letterSpacing:1,textTransform:"uppercase",color:v===R.id?"var(--c1)":"var(--ink3)"},children:R.label})]},R.id))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🎵 Sound Theme"}),p.jsx("div",{className:"sfx-grid",children:PB.map(R=>p.jsxs("div",{className:`sfx-opt ${f===R.id?"active":""}`,onClick:()=>y(R.id),children:[p.jsx("div",{className:"sfx-icon",children:R.icon}),p.jsx("div",{className:"sfx-name",children:R.name}),p.jsx("div",{className:"sfx-desc",children:R.desc})]},R.id))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🔔 Notifications"}),p.jsx("div",{className:"card",children:p.jsxs("div",{className:"card-body",children:[p.jsx("p",{style:{fontSize:13,color:"var(--ink2)",marginBottom:12,lineHeight:1.6},children:"Get notified when friends challenge you or it's your turn."}),p.jsx("button",{className:"btn btn-purple btn-full",onClick:N,disabled:I==="requesting"||I==="granted",children:I==="granted"?"✅ Notifications Enabled":I==="denied"?"❌ Permission Denied":I==="requesting"?"⏳ Requesting…":"🔔 Enable Notifications"})]})})]}),p.jsx("div",{style:{width:"100%",maxWidth:440,marginTop:24},children:p.jsx("button",{onClick:()=>V(!0),className:"btn btn-full",style:{background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",color:"var(--c2)",fontSize:13},children:"🚪 Sign Out of DiNGo"})})]}),p.jsx("div",{style:{flexShrink:0,background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"10px 14px",paddingBottom:"calc(10px + env(safe-area-inset-bottom, 0px))",display:"flex",gap:10},children:p.jsx("button",{onClick:S,disabled:A||!s.trim(),className:"btn btn-primary btn-full",style:{fontSize:15,padding:"14px 0"},children:T?"✅ Profile Saved!":A?"⏳ Saving…":"💾 Save Profile"})}),F&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>V(!1),children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:R=>R.stopPropagation(),children:[p.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:()=>V(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),p.jsx("button",{onClick:k,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const ST=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#ffffff"];function hg({board:t,selected:e,onCellClick:n,disabled:r=!1,highlightCells:i=[]}){const s=new Set(_B(t,e)),o=yA(t,e),a=new Set(i),l={};return o.forEach((c,h)=>{c.forEach(f=>{l[f]||(l[f]=ST[Math.min(h,ST.length-1)])})}),p.jsx("div",{className:"board-wrap",children:p.jsx("div",{className:"board",children:t.map((c,h)=>{const f=e.includes(c),m=s.has(h),v=a.has(c),w=l[h];return p.jsx("div",{className:`cell ${f?"crossed":""}`,style:{cursor:r||f?"default":"pointer",background:m?`rgba(${w==="#00ffcc"?"0,255,204":w==="#ff2d55"?"255,45,85":w==="#ffcc00"?"255,204,0":w==="#7b61ff"?"123,97,255":"255,255,255"}, 0.15)`:void 0,borderColor:m?w:v?"var(--c3)":void 0,color:m?w:v&&!f?"var(--c3)":void 0,boxShadow:m?`0 0 12px ${w}88, inset 0 0 8px ${w}22`:v?"0 0 0 3px var(--c3), 0 0 14px rgba(255,204,0,0.5)":void 0,animation:m?"winPulse 2s ease-in-out infinite":v?"winPulse 0.9s ease infinite":void 0,fontWeight:m||v?900:void 0,transition:"all 0.3s ease"},onClick:()=>!r&&!f&&n&&n(c),children:c},c)})})})}function EA({show:t,isWin:e,tie:n,title:r,sub:i,onPlayAgain:s,onHome:o,showPlayAgain:a=!0}){const l=n?"🤝":e?"🎉":"💀",c=n?"var(--c3)":e?"var(--c1)":"var(--c2)";return p.jsx("div",{className:`win-overlay ${t?"show":""}`,children:p.jsxs("div",{className:"win-card",children:[p.jsx("div",{className:"win-emoji",children:l}),p.jsx("div",{className:"win-title",style:{color:c},children:r}),p.jsx("div",{className:"win-sub",children:i}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[a&&p.jsx("button",{className:"btn btn-primary btn-full",onClick:s,children:"↺ Play Again"}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:o,children:"🏠 Home"})]})]})})}async function TA(t,e){const n=ln(Ye,"users",t);try{await kn(n,{total:Xs(1),wins:Xs(e?1:0),losses:Xs(e?0:1),streak:e?Xs(1):0});const r=await Xd(n);if(r.exists()){const i=r.data(),s=i.total||1,o=i.wins||0;await kn(n,{winRate:Math.round(o/s*100)})}}catch(r){console.error("recordResult error:",r)}}async function e5(){try{const t=Ni(lr(Ye,"users"),aj("wins","desc"),Xl(50));return(await Is(t)).docs.map((n,r)=>({rank:r+1,uid:n.id,...n.data()}))}catch(t){return console.error("getLeaderboard error:",t),[]}}async function IA({p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a,mode:l,botLevel:c}){try{await Ex(lr(Ye,"matches"),{p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a||0,mode:l||"multiplayer",botLevel:c||null,timestamp:Zd(),tsNum:Date.now()}),l!=="bot"?(Rp(t),Rp(e)):Rp(t)}catch(h){console.error("saveMatch error:",h)}}async function Rp(t){try{const[e,n]=await Promise.all([Is(Ni(lr(Ye,"matches"),zr("p1Uid","==",t),Xl(25))),Is(Ni(lr(Ye,"matches"),zr("p2Uid","==",t),Xl(25)))]),r=new Set,i=[];[...e.docs,...n.docs].forEach(o=>{r.has(o.id)||(r.add(o.id),i.push(o))}),i.sort((o,a)=>(a.data().tsNum||0)-(o.data().tsNum||0));const s=i.slice(10);s.length>0&&await Promise.all(s.map(o=>hj(o.ref)))}catch(e){console.warn("trimUserHistory error:",e)}}async function t5(t){try{const[e,n]=await Promise.all([Is(Ni(lr(Ye,"matches"),zr("p1Uid","==",t),Xl(15))),Is(Ni(lr(Ye,"matches"),zr("p2Uid","==",t),Xl(15)))]),r=new Set,i=[];return[...e.docs,...n.docs].forEach(s=>{r.has(s.id)||(r.add(s.id),i.push({id:s.id,...s.data()}))}),i.sort((s,o)=>{var c,h;const a=s.tsNum||(((c=s.timestamp)==null?void 0:c.seconds)||0)*1e3;return(o.tsNum||(((h=o.timestamp)==null?void 0:h.seconds)||0)*1e3)-a}).slice(0,10)}catch(e){return console.error("getMyHistory error:",e),[]}}const kc=[{id:"easy",label:"Easy",icon:"🟢",color:"var(--c1)"},{id:"medium",label:"Medium",icon:"🟡",color:"var(--c3)"},{id:"hard",label:"Hard",icon:"🔴",color:"var(--c2)"},{id:"expert",label:"Expert",icon:"🟣",color:"var(--c4)"},{id:"nightmare",label:"Nightmare",icon:"🖤",color:"#ff4444"},{id:"godmode",label:"GodMode",icon:"👑",color:"var(--c3)"}],xc={easy:"Noob-Bot",medium:"Mid-Bot",hard:"Hard-Bot",expert:"Expert-Bot",nightmare:"Nightmare",godmode:"GodMode"},Rc=5,Ac=25;function n5(){var z,X,Q;const{user:t,profile:e}=Dn(),n=bn(),r=br(),[i,s]=b.useState("select"),[o,a]=b.useState("medium"),[l,c]=b.useState([]),[h,f]=b.useState([]),[m,v]=b.useState([]),[w,A]=b.useState(!0),[P,T]=b.useState(0),[E,I]=b.useState(0),[D,F]=b.useState(null),[V,S]=b.useState(Ac),[y,C]=b.useState(!1),k=b.useRef(null),N=b.useRef(null),R=b.useRef([]);b.useEffect(()=>{R.current=m},[m]);const x=()=>{var ae;const K=ea(),q=ea();c(K),f(q),v([]),R.current=[],A(!0),T(0),I(0),F(null),s("game"),N.current=Date.now(),(ae=r.click)==null||ae.call(r)};b.useEffect(()=>{if(!(i!=="game"||!w||D))return S(Ac),k.current=setInterval(()=>{S(K=>{if(K<=1){clearInterval(k.current);const q=l.filter(ae=>!R.current.includes(ae));if(q.length>0){const ae=q[Math.floor(Math.random()*q.length)];Te(ae)}return Ac}return K-1})},1e3),()=>clearInterval(k.current)},[w,i,D]);const Te=K=>{var Me,Ee;if(!w||D||R.current.includes(K))return;clearInterval(k.current),(Me=r.cross)==null||Me.call(r);const q=[...R.current,K];v(q);const ae=kt(l,q);if(ae>P&&((Ee=r.line)==null||Ee.call(r)),T(ae),ae>=Rc){ie(!0,q);return}A(!1),M(q)},M=K=>{const q={easy:500,medium:800,hard:1e3,expert:1200,nightmare:1400,godmode:1600}[o]||800;C(!0),setTimeout(()=>{var Be,ze;C(!1);const ae=yB(o,K,l,h);if(ae==null){A(!0);return}(Be=r.cross)==null||Be.call(r);const Me=[...K,ae];v(Me);const Ee=kt(h,Me);if(Ee>E&&((ze=r.line)==null||ze.call(r)),I(Ee),Ee>=Rc){ie(!1,Me);return}A(!0)},q)},ie=async(K,q)=>{var Me,Ee;const ae=Math.round((Date.now()-N.current)/1e3);if(F({won:K,tie:!1,title:K?"🎉 YOU WIN!":"🤖 BOT WINS!",sub:K?["Domination! 👑","You crushed it! 🔥","GG! Lethal ⚡"][Math.floor(Math.random()*3)]:["Bot outsmarted you 🤖","GG, rematch? 💪","Bot.exe wins 😤"][Math.floor(Math.random()*3)]}),K?(Me=r.win)==null||Me.call(r):(Ee=r.lose)==null||Ee.call(r),s("over"),t)try{await TA(t.uid,K),await IA({p1Uid:t.uid,p2Uid:"bot",p1Name:(e==null?void 0:e.displayName)||"Player",p2Name:xc[o],winner:K?t.uid:"bot",p1Lines:kt(l,q),p2Lines:kt(h,q),duration:ae,mode:"bot",botLevel:o})}catch(Be){console.error("endGame save error:",Be)}};if(i==="select")return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🤖 VS BOT"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{className:"label",style:{marginBottom:14},children:"Choose Difficulty"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:20},children:kc.map(K=>p.jsxs("button",{className:`diff-btn ${o===K.id?"active":""}`,style:{borderColor:o===K.id?K.color:void 0,color:o===K.id?K.color:void 0},onClick:()=>{var q;a(K.id),(q=r.click)==null||q.call(r)},children:[p.jsx("span",{style:{fontSize:20},children:K.icon}),K.label]},K.id))}),p.jsxs("div",{style:{background:"var(--panel2)",borderRadius:"var(--r)",padding:12,marginBottom:20,textAlign:"center"},children:[p.jsx("span",{style:{fontSize:28},children:(z=kc.find(K=>K.id===o))==null?void 0:z.icon}),p.jsx("div",{style:{fontWeight:700,marginTop:6},children:xc[o]}),p.jsx("div",{className:"muted small",style:{marginTop:4},children:{easy:"Random moves — great for beginners",medium:"Basic strategy — fair challenge",hard:"Aggressive play — tough",expert:"Win-first AI — very tough",nightmare:"Near-unbeatable AI",godmode:"Maximum difficulty — can you win?"}[o]})]}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:x,children:"⚡ Start Game"})]})})]});const ke=V/Ac*100;return p.jsxs("div",{className:"screen",style:{paddingTop:10,paddingBottom:20},children:[p.jsxs("div",{style:{width:"100%",maxWidth:440,marginBottom:10,display:"flex",alignItems:"center",gap:10},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:11},onClick:()=>n("/"),children:"🏠"}),p.jsx("div",{style:{flex:1,textAlign:"center"},children:p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:14,letterSpacing:2,color:"var(--c1)"},children:[(X=kc.find(K=>K.id===o))==null?void 0:X.icon," ",xc[o].toUpperCase()]})}),p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18},children:[p.jsx("span",{style:{color:"var(--c1)"},children:P}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 6px"},children:"·"}),p.jsx("span",{style:{color:"var(--c2)"},children:E})]})]}),p.jsxs("div",{className:"player-row",style:{maxWidth:440,marginBottom:8},children:[p.jsx("span",{style:{fontSize:28},children:(e==null?void 0:e.avatar)||"🎯"}),p.jsxs("div",{children:[p.jsx("div",{className:"player-name",children:(e==null?void 0:e.displayName)||"You"}),p.jsxs("div",{className:"player-lines",children:[P," / ",Rc," lines"]})]}),w&&!y&&!D&&p.jsx("span",{className:"turn-badge",style:{marginLeft:"auto"},children:"YOUR TURN"})]}),w&&!y&&!D&&p.jsx("div",{className:"timer-bar-wrap",style:{maxWidth:440,marginBottom:8},children:p.jsx("div",{className:"timer-bar",style:{width:`${ke}%`,background:V<=5?"var(--c2)":"var(--c1)"}})}),y&&p.jsx("div",{style:{textAlign:"center",fontSize:12,color:"var(--ink2)",marginBottom:8,letterSpacing:2,textTransform:"uppercase"},children:"🤖 Bot is thinking…"}),p.jsx(hg,{board:l,selected:m,onCellClick:Te,disabled:!w||y||!!D}),p.jsxs("div",{className:"player-row",style:{maxWidth:440,marginTop:14},children:[p.jsx("span",{style:{fontSize:28},children:(Q=kc.find(K=>K.id===o))==null?void 0:Q.icon}),p.jsxs("div",{children:[p.jsx("div",{className:"player-name",children:xc[o]}),p.jsxs("div",{className:"player-lines",children:[E," / ",Rc," lines"]})]}),!w&&y&&p.jsx("span",{className:"turn-badge",style:{marginLeft:"auto",background:"var(--c2)"},children:"BOT TURN"})]}),p.jsx("div",{style:{marginTop:8,opacity:.55},children:p.jsx(hg,{board:h,selected:m,disabled:!0})}),p.jsx(EA,{show:!!D,isWin:D==null?void 0:D.won,tie:!1,title:D==null?void 0:D.title,sub:D==null?void 0:D.sub,onPlayAgain:x,onHome:()=>n("/")})]})}function CT(){return Array(25).fill(0)}function r5({onConfirm:t}){const[e,n]=b.useState(CT()),r=e.filter(l=>l!==0).length+1,i=l=>{if(e[l]!==0||r>25)return;const c=[...e];c[l]=r,n(c)},s=()=>n(ea()),o=()=>n(CT()),a=e.every(l=>l!==0);return p.jsxs("div",{style:{width:"100%",maxWidth:440,display:"flex",flexDirection:"column",alignItems:"center",gap:14},children:[p.jsx("div",{className:"card",style:{width:"100%"},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18,letterSpacing:2,marginBottom:6},children:"🎲 SET UP YOUR BOARD"}),p.jsx("div",{style:{fontSize:12,color:"var(--ink2)",lineHeight:1.6,marginBottom:14},children:"Click each cell to fill numbers 1–25 in your chosen order, or hit Shuffle for a random arrangement."}),!a&&p.jsxs("div",{style:{textAlign:"center",fontSize:13,marginBottom:10},children:[p.jsx("span",{style:{color:"var(--c1)",fontWeight:800,fontSize:18},children:r}),p.jsx("span",{style:{color:"var(--ink2)"},children:" — click a cell to place this number"})]}),a&&p.jsx("div",{style:{textAlign:"center",fontSize:13,color:"var(--c1)",fontWeight:800,marginBottom:10},children:"✅ Board complete! Ready to play."}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:5,marginBottom:14},children:e.map((l,c)=>p.jsx("button",{onClick:()=>i(c),disabled:l!==0,style:{aspectRatio:"1",border:"2px solid",borderColor:l!==0?"var(--c1)":"var(--edge2)",background:l!==0?"rgba(0,255,204,0.1)":"var(--panel)",borderRadius:8,cursor:l!==0?"default":"pointer",fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(12px,3.5vw,18px)",color:l!==0?"var(--c1)":"var(--ink3)",fontWeight:700,transition:"all 0.15s",WebkitTapHighlightColor:"transparent"},children:l!==0?l:""},c))}),p.jsxs("div",{style:{display:"flex",gap:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{flex:1},onClick:o,children:"🗑 Clear"}),p.jsx("button",{className:"btn btn-ghost",style:{flex:1},onClick:s,children:"🔀 Shuffle"})]})]})}),p.jsx("button",{className:"btn btn-primary btn-full",disabled:!a,onClick:()=>t(e),style:{fontSize:15,padding:"14px 0",opacity:a?1:.4},children:a?"✅ Confirm Board & Continue →":`Fill ${25-e.filter(l=>l!==0).length} more cells…`})]})}function i5(){const{mode:t}=JS(),{user:e,profile:n}=Dn(),r=bn(),i=br(),[s,o]=b.useState("setup"),[a,l]=b.useState([]),[c,h]=b.useState(""),[f,m]=b.useState(""),[v,w]=b.useState("idle"),[A,P]=b.useState(""),T=b.useRef(null),E={uid:e==null?void 0:e.uid,name:(n==null?void 0:n.displayName)||"Player",avatar:(n==null?void 0:n.avatar)||"🎯"},I=async V=>{var S;if(l(V),(S=i.click)==null||S.call(i),o("action"),t==="create"){w("waiting");const y=Xy();h(y),await Jy(y,E,V);const C=Zy(y,k=>{var N,R;(N=k==null?void 0:k.players)!=null&&N.p2&&((R=k==null?void 0:k.gameState)==null?void 0:R.status)==="playing"&&(C(),r(`/game/${y}`,{state:{role:"p1",board:V}})),k||(w("error"),P("Room expired."))});T.current=C}},D=async()=>{var S;const V=f.trim().toUpperCase();if(V.length!==4){P("Enter a 4-character room code.");return}w("joining"),P("");try{await gA(V,E,a),(S=i.click)==null||S.call(i),r(`/game/${V}`,{state:{role:"p2",board:a}})}catch(y){w("idle"),P(y.message||"Could not join room. Check the code.")}},F=async()=>{T.current&&T.current(),c&&await cg(c),r("/")};return s==="setup"?p.jsxs("div",{className:"screen",style:{justifyContent:"flex-start",paddingBottom:60},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:t==="create"?"⚡ CREATE ROOM":"🔗 JOIN ROOM"})]}),p.jsx(r5,{onConfirm:I})]}):t==="create"?p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:F,children:"← Cancel"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"⚡ CREATE ROOM"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",style:{textAlign:"center"},children:[p.jsx("div",{className:"label",style:{marginBottom:8},children:"ROOM CODE"}),p.jsx("div",{className:"room-code-display",children:c}),p.jsx("div",{className:"room-status",children:"Share this code with your friend"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,justifyContent:"center",marginBottom:20},children:[p.jsx("div",{className:"spinner"}),p.jsx("span",{className:"muted small",children:"Waiting for opponent…"})]}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:()=>{var V;return(V=navigator.clipboard)==null?void 0:V.writeText(c)},style:{marginBottom:10},children:"📋 Copy Code"}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:F,children:"Cancel"})]})})]}):p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🔗 JOIN ROOM"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{fontSize:48,textAlign:"center",marginBottom:16},children:"🔗"}),p.jsx("div",{className:"label",children:"Room Code"}),p.jsx("input",{type:"text",placeholder:"ABCD",value:f,onChange:V=>m(V.target.value.toUpperCase().slice(0,4)),onKeyDown:V=>V.key==="Enter"&&D(),style:{textAlign:"center",fontSize:28,letterSpacing:10,fontFamily:"'Black Han Sans',sans-serif",marginBottom:16}}),A&&p.jsx("div",{style:{color:"var(--c2)",fontSize:13,marginBottom:14,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px"},children:A}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:D,disabled:v==="joining"||f.length!==4,children:v==="joining"?"⏳ Joining…":"🎮 Join Game"})]})})]})}const vn=5,Zc=30,dg=5,s5=["👍","🔥","😂","😱","🎯","💀","🏆","😤","🤯","👏","😈","🫡","❤️","😎","🤑","💪"],kT=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#ffffff"],xT=[{id:"time",icon:"⏰",tip:"+20s"},{id:"hint",icon:"💡",tip:"Hint"},{id:"double",icon:"2️⃣",tip:"Pick 2"},{id:"fifty",icon:"🎯",tip:"50/50"},{id:"shield",icon:"🛡️",tip:"Shield"}];function RT({timeLeft:t,maxTime:e=Zc,size:n=52,active:r}){const i=(n-6)/2,s=2*Math.PI*i,o=r?Math.max(0,t/e):1,a=t<=5?"#ff2d55":t<=10?"#ffcc00":"#00ffcc";return p.jsxs("svg",{width:n,height:n,style:{position:"absolute",top:0,left:0,pointerEvents:"none"},children:[p.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:"rgba(255,255,255,0.07)",strokeWidth:4}),r&&p.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:a,strokeWidth:4,strokeDasharray:s,strokeDashoffset:s*(1-o),strokeLinecap:"round",transform:`rotate(-90 ${n/2} ${n/2})`,style:{transition:"stroke-dashoffset 1s linear, stroke 0.4s"}})]})}function AT({count:t,max:e=dg}){return p.jsx("div",{style:{display:"flex",gap:2},children:Array.from({length:e}).map((n,r)=>p.jsx("span",{style:{fontSize:10,opacity:r<t?1:.18},children:"❤️"},r))})}function o5(){var mt,Wi;const{roomId:t}=JS(),{state:e}=Td(),{user:n,profile:r}=Dn(),i=bn(),s=br(),o=(e==null?void 0:e.role)||"p1",a=o==="p1"?"p2":"p1",[l,c]=b.useState(null),[h,f]=b.useState(Zc),[m,v]=b.useState(null),[w,A]=b.useState(!1),[P,T]=b.useState(!1),[E,I]=b.useState(0),[D,F]=b.useState(""),[V,S]=b.useState(""),[y,C]=b.useState({time:!0,hint:!0,double:!0,fifty:!0,shield:!0}),[k,N]=b.useState(!1),[R,x]=b.useState(!1),[Te,M]=b.useState([]),[ie,ke]=b.useState({p1:!1,p2:!1,newRoomId:null}),[z,X]=b.useState(!1),Q=b.useRef(!1),K=b.useRef(Date.now()),q=b.useRef(null),ae=b.useRef(null),Me=b.useRef(0),Ee=b.useRef({}),Be=b.useRef(0),ze=b.useRef((e==null?void 0:e.board)||[]),le=l==null?void 0:l.gameState,un=(le==null?void 0:le.calledNumbers)||[],pt=(le==null?void 0:le[`${o}Board`])||ze.current,dr=(le==null?void 0:le[`${a}Board`])||[],yn=(le==null?void 0:le[`${o}Lines`])||0,Ws=(le==null?void 0:le[`${a}Lines`])||0,$s=(le==null?void 0:le[`${o}Chances`])??dg,ma=(le==null?void 0:le[`${a}Chances`])??dg,It=(le==null?void 0:le.turn)===o,Kr=(mt=l==null?void 0:l.players)==null?void 0:mt[a],Qr=(Wi=l==null?void 0:l.players)==null?void 0:Wi[o];b.useEffect(()=>{const Z=Zy(t,te=>{var Je,De,Ze,Dt;if(c(te),!(te!=null&&te.gameState))return;const Re=te.gameState;if(te.rematch&&(ke(te.rematch),te.rematch.newRoomId&&Q.current)){const He=ze.current.length===25?ze.current:Array.from({length:25},(We,fr)=>fr+1);Z(),i(`/game/${te.rematch.newRoomId}`,{state:{role:o,board:He},replace:!0});return}if(te.chat){const He=Object.values(te.chat).sort((fr,Uu)=>(fr.ts||0)-(Uu.ts||0)),We=He[He.length-1];We&&(We.ts||0)>Be.current&&Date.now()-(We.ts||0)<8e3&&(Be.current=We.ts,We.sender===o?(F(We.text),clearTimeout(Ee.current.my),Ee.current.my=setTimeout(()=>F(""),4e3)):(S(We.text),(Je=s.ping)==null||Je.call(s),clearTimeout(Ee.current.opp),Ee.current.opp=setTimeout(()=>S(""),4e3)))}if((Re.winner||Re.tie)&&!Q.current){Q.current=!0,clearInterval(q.current);const He=!!Re.tie,We=Re.winner===o;v({won:He?null:We,tie:He,title:He?"🤝 IT'S A TIE!":We?"🎉 YOU WIN!":"😔 YOU LOST!",sub:He?"Both earn a point!":We?["Domination! 👑","Flawless! ⚡","Champion! 🏆"][Math.floor(Math.random()*3)]:["GG, rematch? 💪","They got lucky 😤","Next time! 🤝"][Math.floor(Math.random()*3)]}),We||He?(De=s.win)==null||De.call(s):(Ze=s.lose)==null||Ze.call(s),_a(He,We,Re,te)}Re[`${a}Exited`]&&!Q.current&&(Q.current=!0,clearInterval(q.current),v({won:!0,tie:!1,title:"🏆 OPPONENT LEFT",sub:"You win by default!"}),(Dt=s.win)==null||Dt.call(s))});return()=>{Z(),clearInterval(q.current),clearInterval(ae.current)}},[t]),b.useEffect(()=>{var Z;yn>Me.current&&((Z=s.line)==null||Z.call(s),Me.current=yn)},[yn]),b.useEffect(()=>{pt.length===25&&(ze.current=pt)},[pt]),b.useEffect(()=>{if(!(le!=null&&le.turnStartedAt)||m)return;clearInterval(q.current);const Z=Math.floor((Date.now()-le.turnStartedAt)/1e3),te=Math.max(0,Zc-Z);return f(te),q.current=setInterval(()=>{f(Re=>Re<=1?(clearInterval(q.current),It&&!m&&!Q.current&&(R?(x(!1),f(Zc)):ju()),0):Re-1)},1e3),()=>clearInterval(q.current)},[le==null?void 0:le.turnStartedAt,le==null?void 0:le.turn]);const ju=async()=>{const Z=Array.from({length:25},(We,fr)=>fr+1).filter(We=>!un.includes(We));if(Z.length===0)return;const te=Z[Math.floor(Math.random()*Z.length)],Re=[...un,te],Je=o==="p1"?pt:dr,De=o==="p2"?pt:dr,Ze=kt(Je,Re),Dt=kt(De,Re),He=$s-1;if(He<=0){await Ha(t,a);return}if(Ze>=vn&&Dt>=vn){await wT(t);return}if(Ze>=vn){await Ha(t,"p1");return}if(Dt>=vn){await Ha(t,"p2");return}await fB(t,o,Re,Ze,Dt,He)},ga=async Z=>{var Dt;if(m||Q.current||!It&&!k||un.includes(Z)||pt.length===0)return;clearInterval(q.current),M([]),(Dt=s.cross)==null||Dt.call(s);const te=[...un,Z],Re=o==="p1"?pt:dr,Je=o==="p2"?pt:dr,De=kt(Re.length?Re:pt,te),Ze=kt(Je.length?Je:[],te);if(k){N(!1),await $a(t,o,te,De,Ze,!0);return}if(!Q.current){if(De>=vn&&Ze>=vn){await $a(t,o,te,De,Ze,!1),await wT(t);return}if(De>=vn){await $a(t,o,te,De,Ze,!1),await Ha(t,"p1");return}if(Ze>=vn){await $a(t,o,te,De,Ze,!1),await Ha(t,"p2");return}}await $a(t,o,te,De,Ze,!1)},Fu=Z=>{var te;if(!(!y[Z]||!It||m)&&((te=s.click)==null||te.call(s),C(Re=>({...Re,[Z]:!1})),Z==="time"&&f(Re=>Re+20),Z==="shield"&&x(!0),Z==="double"&&N(!0),Z==="hint"||Z==="fifty")){const Je=pt.filter(De=>!un.includes(De)).map(De=>({n:De,lines:kt(pt,[...un,De])})).sort((De,Ze)=>Ze.lines-De.lines);M(Je.slice(0,Z==="fifty"?2:1).map(De=>De.n)),setTimeout(()=>M([]),7e3)}},gf=async Z=>{if(P)return;await pB(t,{text:Z,isEmoji:!0,sender:o,senderName:(r==null?void 0:r.displayName)||"Me"}),A(!1),T(!0);let te=3;I(te),ae.current=setInterval(()=>{te--,I(te),te<=0&&(clearInterval(ae.current),T(!1),I(0))},1e3)},_a=async(Z,te,Re,Je)=>{var Ze,Dt;if(!n)return;const De=Math.round((Date.now()-K.current)/1e3);try{await TA(n.uid,Z?!1:te);const He=(Ze=Je==null?void 0:Je.players)==null?void 0:Ze.p1,We=(Dt=Je==null?void 0:Je.players)==null?void 0:Dt.p2;He&&We&&o==="p1"&&await IA({p1Uid:He.uid,p2Uid:We.uid,p1Name:He.name,p2Name:We.name,winner:Z?null:Re.winner==="p1"?He.uid:We.uid,p1Lines:Re.p1Lines,p2Lines:Re.p2Lines,duration:De,mode:"multiplayer"})}catch(He){console.error("matchEnd error:",He)}},ya=async()=>{if(z)return;X(!0);const Z={uid:n==null?void 0:n.uid,name:(r==null?void 0:r.displayName)||"Player",avatar:(r==null?void 0:r.avatar)||"🎯",role:o};try{const te=await gB(t,o,ze.current,Z);te&&i(`/game/${te}`,{state:{role:"p1",board:ze.current},replace:!0})}catch(te){console.error("Rematch error:",te),X(!1)}},Hs=async()=>{clearInterval(q.current),await mB(t,o),i("/")};if(!l)return p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:14},children:[p.jsx("div",{className:"spinner"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)"},children:"Connecting to room…"})]});if((le==null?void 0:le.status)==="waiting")return p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:14},children:[p.jsx("div",{className:"spinner"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)"},children:"Waiting for opponent…"}),p.jsx("button",{className:"btn btn-ghost",onClick:Hs,children:"Cancel"})]});const xe=48;return p.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[p.jsx("div",{style:{background:"var(--panel)",borderBottom:"2px solid var(--edge2)",padding:"6px 8px",flexShrink:0},children:p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:4},children:[p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[p.jsxs("div",{style:{position:"relative",width:xe,height:xe,flexShrink:0},children:[p.jsx("div",{style:{width:xe,height:xe,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${It?"var(--c1)":"var(--edge)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,transition:"border-color 0.3s"},children:(Qr==null?void 0:Qr.avatar)||(r==null?void 0:r.avatar)||"🎯"}),p.jsx(RT,{timeLeft:h,size:xe,active:It&&!m}),R&&p.jsx("div",{style:{position:"absolute",bottom:-2,right:-2,fontSize:10},children:"🛡️"})]}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:800,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:70},children:(Qr==null?void 0:Qr.name)||(r==null?void 0:r.displayName)||"You"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[yn,"/",vn]}),It&&!m&&p.jsx("div",{style:{fontSize:8,fontWeight:800,color:"var(--c1)",letterSpacing:1},children:k?"2️⃣ Pick 2nd":`${h}s`})]})]}),D&&p.jsx("div",{style:{marginTop:3,fontSize:14,background:"rgba(0,255,204,0.1)",border:"1px solid rgba(0,255,204,0.3)",borderRadius:8,padding:"2px 6px",display:"inline-block"},children:D}),p.jsx("div",{style:{display:"flex",gap:2,marginTop:3,flexWrap:"wrap"},children:xT.map(Z=>p.jsx("button",{onClick:()=>Fu(Z.id),disabled:!y[Z.id]||!It||!!m,title:Z.tip,style:{fontSize:12,padding:"2px 3px",background:y[Z.id]?"var(--panel2)":"transparent",border:`2px solid ${y[Z.id]?"var(--edge2)":"transparent"}`,borderRadius:4,cursor:y[Z.id]&&It?"pointer":"default",opacity:y[Z.id]?It?1:.35:.1,WebkitTapHighlightColor:"transparent"},children:Z.icon},Z.id))}),p.jsx("div",{style:{marginTop:2},children:p.jsx(AT,{count:$s})})]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,minWidth:44,paddingTop:2},children:[p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,lineHeight:1},children:[p.jsx("span",{style:{color:"var(--c1)"},children:yn}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 1px"},children:":"}),p.jsx("span",{style:{color:"var(--c2)"},children:Ws})]}),p.jsxs("div",{style:{fontSize:7,letterSpacing:1.5,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700},children:["#",t]})]}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,flexDirection:"row-reverse"},children:[p.jsxs("div",{style:{position:"relative",width:xe,height:xe,flexShrink:0},children:[p.jsx("div",{style:{width:xe,height:xe,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${It?"var(--edge)":"var(--c2)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,transition:"border-color 0.3s"},children:(Kr==null?void 0:Kr.avatar)||"🎯"}),p.jsx(RT,{timeLeft:h,size:xe,active:!It&&!m})]}),p.jsxs("div",{style:{flex:1,minWidth:0,textAlign:"right"},children:[p.jsx("div",{style:{fontWeight:800,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:70,marginLeft:"auto"},children:(Kr==null?void 0:Kr.name)||"Opponent"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[Ws,"/",vn]}),!It&&!m&&p.jsxs("div",{style:{fontSize:8,fontWeight:800,color:"var(--c2)",letterSpacing:1},children:[h,"s"]})]})]}),V&&p.jsx("div",{style:{marginTop:3,fontSize:14,background:"rgba(255,45,85,0.1)",border:"1px solid rgba(255,45,85,0.3)",borderRadius:8,padding:"2px 6px",display:"flex",justifyContent:"flex-end"},children:V}),p.jsx("div",{style:{display:"flex",gap:2,marginTop:3,justifyContent:"flex-end"},children:xT.map(Z=>p.jsx("div",{style:{fontSize:12,padding:"2px 3px",background:"var(--panel2)",border:"2px solid var(--edge)",borderRadius:4,opacity:.2},children:Z.icon},Z.id))}),p.jsx("div",{style:{marginTop:2,display:"flex",justifyContent:"flex-end"},children:p.jsx(AT,{count:ma})})]})]})}),p.jsxs("div",{style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"4px 8px"},children:[p.jsxs("div",{style:{marginBottom:5,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:11,color:"var(--ink2)"},children:m?"🏁 Game Over":It?"👆 Your turn — tap to call a number":"⏳ Opponent choosing…"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink3)",marginTop:1},children:[un.length,"/25 called"]}),Te.length>0&&p.jsxs("div",{style:{fontSize:11,color:"var(--c3)",marginTop:2,fontWeight:700},children:["💡 Try: ",Te.join(" or ")]}),k&&p.jsx("div",{style:{fontSize:11,color:"var(--c3)",fontWeight:800,marginTop:2,animation:"blink 0.8s infinite"},children:"2️⃣ PICK YOUR 2ND!"})]}),p.jsx(hg,{board:pt,selected:un,onCellClick:ga,disabled:!It&&!k||!!m||pt.length===0,highlightCells:Te}),p.jsxs("div",{style:{marginTop:8,display:"flex",gap:4,alignItems:"center"},children:[Array.from({length:vn}).map((Z,te)=>p.jsx("div",{style:{width:28,height:6,borderRadius:3,background:te<yn?kT[Math.min(te,4)]:"var(--edge)",boxShadow:te<yn?`0 0 6px ${kT[te]}88`:"none",transition:"all 0.4s"}},te)),p.jsxs("span",{style:{fontSize:10,color:"var(--ink2)",marginLeft:3},children:[yn,"/",vn]})]})]}),p.jsxs("div",{style:{background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"5px 8px",flexShrink:0},children:[w&&p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:3,justifyContent:"center",paddingBottom:5},children:s5.map(Z=>p.jsx("button",{onClick:()=>gf(Z),disabled:P,style:{fontSize:19,background:"none",border:"none",cursor:"pointer",padding:"2px 3px",borderRadius:4,opacity:P?.3:1,WebkitTapHighlightColor:"transparent"},children:Z},Z))}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[p.jsx("button",{onClick:()=>!P&&A(Z=>!Z),disabled:P,style:{background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"6px 10px",fontSize:11,fontWeight:700,color:P?"var(--ink3)":"var(--ink)",cursor:P?"not-allowed":"pointer",WebkitTapHighlightColor:"transparent"},children:P?`⏱${E}s`:w?"✕":"😊"}),p.jsx("div",{style:{flex:1}}),p.jsx("button",{onClick:Hs,style:{background:"transparent",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"6px 12px",fontSize:11,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Leave Room"})]})]}),p.jsx(EA,{show:!!m,isWin:m==null?void 0:m.won,tie:m==null?void 0:m.tie,title:m==null?void 0:m.title,sub:z?"⏳ Waiting for opponent to accept rematch…":m==null?void 0:m.sub,onPlayAgain:ya,onHome:Hs,showPlayAgain:!z||!ie.newRoomId})]})}function a5(){const{user:t}=Dn(),e=bn(),[n,r]=b.useState([]),[i,s]=b.useState(!0);b.useEffect(()=>{e5().then(l=>{r(l),s(!1)})},[]);const o=l=>l===1?{color:"var(--c3)",fontSize:22}:l===2?{color:"#aaa",fontSize:20}:l===3?{color:"#cd7f32",fontSize:18}:{color:"var(--ink3)",fontSize:16},a=l=>l===1?"🥇":l===2?"🥈":l===3?"🥉":`#${l}`;return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>e("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🏆 LEADERBOARD"})]}),i?p.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:p.jsx("div",{className:"spinner"})}):p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{style:{padding:"4px 0"},children:[n.length===0&&p.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:"No players yet. Be the first!"}),n.map(l=>p.jsxs("div",{className:"lb-row",style:{background:l.uid===(t==null?void 0:t.uid)?"rgba(0,255,204,0.05)":"transparent"},children:[p.jsx("div",{style:{...o(l.rank),fontFamily:"'Black Han Sans',sans-serif",width:36,textAlign:"center"},children:a(l.rank)}),p.jsx("div",{style:{fontSize:24},children:l.avatar||"🎯"}),p.jsxs("div",{style:{flex:1},children:[p.jsxs("div",{style:{fontWeight:700,fontSize:14},children:[l.displayName,l.uid===(t==null?void 0:t.uid)&&p.jsx("span",{style:{fontSize:10,color:"var(--c1)",marginLeft:6},children:"YOU"})]}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[l.total||0," games · ",l.winRate||0,"% WR"]})]}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:"var(--c1)"},children:l.wins||0}),p.jsx("div",{style:{fontSize:10,color:"var(--ink3)",letterSpacing:1,textTransform:"uppercase"},children:"wins"})]})]},l.uid))]})})]})}async function SA(t,e,n){const r=Ni(lr(Ye,"friendRequests"),zr("from","==",t),zr("to","==",e));return(await Is(r)).empty?(await Ex(lr(Ye,"friendRequests"),{from:t,to:e,fromName:n,status:"pending",timestamp:Zd()}),{success:!0}):{error:"Request already sent"}}async function l5(t,e,n){await kn(ln(Ye,"friendRequests",t),{status:"accepted"}),await kn(ln(Ye,"users",e),{friends:RE(n)}),await kn(ln(Ye,"users",n),{friends:RE(e)})}async function u5(t){await kn(ln(Ye,"friendRequests",t),{status:"declined"})}async function c5(t,e){await kn(ln(Ye,"users",t),{friends:AE(e)}),await kn(ln(Ye,"users",e),{friends:AE(t)})}function h5(t,e){const n=Ni(lr(Ye,"friendRequests"),zr("to","==",t));return dj(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i.filter(s=>s.status==="pending"))},r=>{console.error("Friend requests error:",r),e([])})}async function d5(t){if(!t||t.length===0)return[];const e=[];for(const n of t)try{const r=await Xd(ln(Ye,"users",n));r.exists()&&e.push({uid:n,...r.data()})}catch{}return e}function f5(){var Te;const{user:t,profile:e,refreshProfile:n}=Dn(),r=bn(),i=br(),[s,o]=b.useState("friends"),[a,l]=b.useState([]),[c,h]=b.useState([]),[f,m]=b.useState(""),[v,w]=b.useState([]),[A,P]=b.useState(!1),[T,E]=b.useState(!0),[I,D]=b.useState({}),F=b.useRef({}),V=b.useRef(null);b.useEffect(()=>{if(!(e!=null&&e.friends)){E(!1);return}d5(e.friends).then(M=>{l(M),E(!1)}).catch(()=>E(!1))},[(Te=e==null?void 0:e.friends)==null?void 0:Te.length]),b.useEffect(()=>{if(!t)return;const M=h5(t.uid,ie=>h(ie));return V.current=M,()=>M==null?void 0:M()},[t==null?void 0:t.uid]),b.useEffect(()=>()=>{Object.values(F.current).forEach(M=>M==null?void 0:M())},[]);const S=async M=>{var ke,z,X;const ie=I[M.uid];if((ie==null?void 0:ie.status)==="waiting"){(z=(ke=F.current)[ie.roomId])==null||z.call(ke),delete F.current[ie.roomId],await EB(M.uid,ie.inviteId).catch(()=>{}),await cg(ie.roomId).catch(()=>{}),D(Q=>({...Q,[M.uid]:{status:"idle"}}));return}D(Q=>({...Q,[M.uid]:{status:"sending"}})),(X=i.click)==null||X.call(i);try{const Q=ea(),K={uid:t.uid,name:(e==null?void 0:e.displayName)||"Player",avatar:(e==null?void 0:e.avatar)||"🎯",role:"p1"},{roomId:q,inviteId:ae}=await wB(M.uid,K,Q);D(Ee=>({...Ee,[M.uid]:{status:"waiting",roomId:q,inviteId:ae}})),Jn("⚔️ Invite sent!",`Waiting for ${M.displayName}…`,"success");const Me=Zy(q,Ee=>{var Be;(Be=Ee==null?void 0:Ee.players)!=null&&Be.p2&&(Me(),delete F.current[q],D(ze=>({...ze,[M.uid]:{status:"idle"}})),r(`/game/${q}`,{state:{role:"p1",board:Q}}))});F.current[q]=Me,setTimeout(async()=>{const Ee=I[M.uid];D(Be=>{var ze,le,un;return((ze=Be[M.uid])==null?void 0:ze.roomId)!==q?Be:((un=(le=F.current)[q])==null||un.call(le),delete F.current[q],cg(q).catch(()=>{}),Jn("⏰ Invite expired",`${M.displayName} didn't respond`,"info"),{...Be,[M.uid]:{status:"idle"}})})},47e3)}catch(Q){console.error("Challenge error:",Q),D(K=>({...K,[M.uid]:{status:"idle"}})),Jn("Error","Could not send invite. Try again.","error")}},y=async()=>{if(f.trim()){P(!0),w([]);try{const M=await sB(f.trim());w(M.filter(ie=>ie.uid!==t.uid))}catch{Jn("Search failed","Try again","error")}P(!1)}},C=async M=>{const ie=await SA(t.uid,M.uid,(e==null?void 0:e.displayName)||"Player");ie.error?Jn("⚠️ "+ie.error,"","info"):Jn("✅ Request Sent!",`Sent to ${M.displayName}`,"success")},k=async M=>{await l5(M.id,t.uid,M.from),await n(t.uid),Jn("👥 Friends!",`You and ${M.fromName} are now friends`,"success")},N=async M=>u5(M.id),R=async M=>{await c5(t.uid,M),await n(t.uid),l(ie=>ie.filter(ke=>ke.uid!==M))},x=[{id:"friends",label:`Friends (${a.length})`},{id:"requests",label:`Requests${c.length>0?` (${c.length})`:""}`,badge:c.length},{id:"search",label:"🔍 Find"}];return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:14,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"👥 FRIENDS"})]}),p.jsx("div",{style:{display:"flex",gap:6,width:"100%",maxWidth:440,marginBottom:14},children:x.map(M=>p.jsxs("button",{onClick:()=>o(M.id),style:{flex:1,padding:"9px 6px",border:"2px solid",borderColor:s===M.id?"var(--c1)":"var(--edge2)",borderRadius:"var(--r)",background:s===M.id?"rgba(0,255,204,0.1)":"var(--panel)",color:s===M.id?"var(--c1)":"var(--ink2)",fontSize:11,fontWeight:700,cursor:"pointer",WebkitTapHighlightColor:"transparent",position:"relative"},children:[M.label,M.badge>0&&s!==M.id&&p.jsx("span",{style:{position:"absolute",top:-6,right:-4,background:"var(--c2)",color:"#fff",fontSize:10,fontWeight:700,borderRadius:"50%",width:17,height:17,display:"flex",alignItems:"center",justifyContent:"center"},children:M.badge})]},M.id))}),s==="friends"&&p.jsx("div",{className:"card",style:{maxWidth:440},children:T?p.jsx("div",{style:{display:"flex",justifyContent:"center",padding:32},children:p.jsx("div",{className:"spinner"})}):a.length===0?p.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[p.jsx("div",{style:{fontSize:40,marginBottom:10},children:"👥"}),p.jsx("div",{style:{fontWeight:700},children:"No friends yet"}),p.jsx("div",{style:{fontSize:13,marginTop:4},children:"Search to find and add players!"}),p.jsx("button",{className:"btn btn-primary",style:{marginTop:14},onClick:()=>o("search"),children:"Find Players"})]}):a.map(M=>{const ie=I[M.uid],ke=(ie==null?void 0:ie.status)==="waiting",z=(ie==null?void 0:ie.status)==="sending";return p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderBottom:"1px solid var(--edge)",flexWrap:"wrap"},children:[p.jsx("span",{style:{fontSize:26,flexShrink:0},children:M.avatar||"🎯"}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:M.displayName}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginTop:2},children:[p.jsx("div",{style:{width:7,height:7,borderRadius:"50%",flexShrink:0,background:M.isOnline?"var(--c1)":"var(--ink3)",boxShadow:M.isOnline?"0 0 5px var(--c1)":"none"}}),p.jsx("span",{style:{fontSize:10,color:"var(--ink3)"},children:M.isOnline?"Online":"Offline"}),p.jsxs("span",{style:{fontSize:10,color:"var(--ink3)"},children:["· ",M.wins||0,"W"]})]}),(ke||z)&&p.jsxs("div",{style:{marginTop:4,display:"flex",alignItems:"center",gap:5,background:"rgba(255,204,0,0.1)",border:"1px solid rgba(255,204,0,0.35)",borderRadius:6,padding:"3px 8px",display:"inline-flex"},children:[p.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c3)",animation:"blink 1s infinite"}}),p.jsx("span",{style:{fontSize:10,color:"var(--c3)",fontWeight:700},children:z?"Sending…":"Waiting for response…"})]})]}),p.jsx("button",{onClick:()=>S(M),disabled:z,title:ke?"Cancel invite":M.isOnline?"Challenge to a match":"Player is offline",style:{flexShrink:0,background:ke?"rgba(255,204,0,0.15)":M.isOnline?"rgba(0,255,204,0.1)":"transparent",border:`2px solid ${ke?"var(--c3)":M.isOnline?"var(--c1)":"var(--edge2)"}`,borderRadius:8,padding:"6px 10px",fontSize:12,fontWeight:800,color:ke?"var(--c3)":M.isOnline?"var(--c1)":"var(--ink3)",cursor:z?"not-allowed":"pointer",WebkitTapHighlightColor:"transparent",opacity:z?.5:1,letterSpacing:.5},children:z?"⏳":ke?"✕ Cancel":"⚔️ Challenge"}),p.jsx("button",{onClick:()=>R(M.uid),title:"Remove friend",style:{flexShrink:0,background:"none",border:"2px solid var(--edge2)",borderRadius:6,padding:"6px 8px",fontSize:11,color:"var(--ink3)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"Remove"})]},M.uid)})}),s==="requests"&&p.jsx("div",{className:"card",style:{maxWidth:440},children:c.length===0?p.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[p.jsx("div",{style:{fontSize:40,marginBottom:10},children:"📭"}),p.jsx("div",{style:{fontWeight:700},children:"No pending requests"}),p.jsx("div",{style:{fontSize:13,marginTop:4},children:"When someone adds you, it appears here."})]}):c.map(M=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("span",{style:{fontSize:28},children:"🎯"}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:700,fontSize:14},children:M.fromName||"Unknown"}),p.jsx("div",{style:{fontSize:12,color:"var(--ink2)",marginTop:2},children:"Wants to be friends"})]}),p.jsx("button",{onClick:()=>k(M),style:{background:"var(--c1)",color:"#000",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer",marginRight:4},children:"✓ Accept"}),p.jsx("button",{onClick:()=>N(M),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"8px 10px",fontSize:12,color:"var(--ink2)",cursor:"pointer"},children:"✕"})]},M.id))}),s==="search"&&p.jsxs("div",{style:{width:"100%",maxWidth:440},children:[p.jsxs("div",{style:{display:"flex",gap:8,marginBottom:14},children:[p.jsx("input",{type:"text",placeholder:"Search by username…",value:f,onChange:M=>m(M.target.value),onKeyDown:M=>M.key==="Enter"&&y(),style:{flex:1},enterKeyHint:"search"}),p.jsx("button",{className:"btn btn-primary",onClick:y,disabled:A,style:{padding:"0 16px"},children:A?"…":"🔍"})]}),v.length>0&&p.jsx("div",{className:"card",children:v.map(M=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("span",{style:{fontSize:26},children:M.avatar||"🎯"}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:700,fontSize:14},children:M.displayName}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[M.wins||0,"W · ",M.losses||0,"L"]})]}),p.jsx("button",{onClick:()=>C(M),style:{background:"var(--c4)",color:"#fff",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer"},children:"+ Add"})]},M.uid))}),f&&!A&&v.length===0&&p.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",padding:24,fontSize:14},children:['No players found for "',f,'"']})]})]})}function p5(t){if(!t)return"—";try{return(t!=null&&t.toDate?t.toDate():t!=null&&t.seconds?new Date(t.seconds*1e3):new Date(t)).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"—"}}function m5(t){if(!t)return"—";const e=Math.floor(t/60),n=t%60;return e>0?`${e}m ${n}s`:`${n}s`}function g5(){const{user:t,profile:e}=Dn(),n=bn(),[r,i]=b.useState([]),[s,o]=b.useState(!0),[a,l]=b.useState({});b.useEffect(()=>{t&&t5(t.uid).then(h=>{const f=h.filter(m=>m.mode!=="bot"&&m.p2Uid!=="bot"&&m.p2Uid!=="BOT");i(f),o(!1)}).catch(()=>o(!1))},[t]);const c=async h=>{const f=h.p1Uid===t.uid,m=f?h.p2Uid:h.p1Uid,v=f?h.p2Name:h.p1Name;if(!m||m===t.uid)return;l(A=>({...A,[h.id]:"loading"}));const w=await SA(t.uid,m,(e==null?void 0:e.displayName)||"Player");w.error?(Jn("Already sent",w.error,"info"),l(A=>({...A,[h.id]:"done"}))):(Jn("✅ Request Sent!",`Friend request sent to ${v}`,"success"),l(A=>({...A,[h.id]:"done"})))};return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"📊 HISTORY"})]}),s?p.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:p.jsx("div",{className:"spinner"})}):r.length===0?p.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",paddingTop:60},children:[p.jsx("div",{style:{fontSize:52,marginBottom:14},children:"🎮"}),p.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:6},children:"No multiplayer games yet!"}),p.jsx("div",{style:{fontSize:13},children:"Play against real opponents — your match history appears here."}),p.jsx("button",{className:"btn btn-primary",style:{marginTop:20},onClick:()=>n("/"),children:"Play Now"})]}):p.jsx("div",{className:"card",style:{maxWidth:440},children:r.map(h=>{const f=h.p1Uid===t.uid,m=h.winner===t.uid,v=f?h.p1Lines:h.p2Lines,w=f?h.p2Lines:h.p1Lines,A=f?h.p2Name:h.p1Name,P=f?h.p2Uid:h.p1Uid,T=a[h.id];return p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("div",{style:{fontSize:26,width:34,textAlign:"center",flexShrink:0},children:m?"🏆":"💀"}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["vs ",A||"Unknown"]}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[p5(h.timestamp||h.tsNum)," · ",m5(h.duration)]})]}),p.jsxs("div",{style:{textAlign:"right",marginRight:6},children:[p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:16},children:[p.jsx("span",{style:{color:"var(--c1)"},children:v??"—"}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 3px"},children:"–"}),p.jsx("span",{style:{color:"var(--c2)"},children:w??"—"})]}),p.jsx("div",{style:{fontSize:10,fontWeight:800,color:m?"var(--c1)":"var(--c2)",letterSpacing:1},children:m?"WIN":"LOSS"})]}),P&&P!==t.uid&&p.jsx("button",{onClick:()=>c(h),disabled:T==="loading"||T==="done",title:`Add ${A} as friend`,style:{fontSize:16,background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"5px 8px",cursor:T?"not-allowed":"pointer",color:T==="done"?"var(--c1)":"var(--c4)",flexShrink:0,WebkitTapHighlightColor:"transparent",opacity:T==="done"?.5:1},children:T==="loading"?"⏳":T==="done"?"✅":"👥+"})]},h.id)})})]})}function CA(){return p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:p.jsx("div",{className:"spinner"})})}function Qi({children:t}){const{user:e,loading:n}=Dn();return n?p.jsx(CA,{}):e?t:p.jsx(nC,{to:"/login",replace:!0})}function _5(){const{user:t,loading:e}=Dn();return e?p.jsx(CA,{}):t?p.jsx(YB,{}):p.jsx(BB,{})}function y5(){return b.useEffect(()=>{FB(t=>{var e,n;Jn(((e=t.notification)==null?void 0:e.title)||"DiNGo",((n=t.notification)==null?void 0:n.body)||"","info")})},[]),p.jsxs(_b,{children:[p.jsx(dB,{}),p.jsx(OB,{}),p.jsxs(pb,{children:[p.jsx(Mn,{path:"/",element:p.jsx(_5,{})}),p.jsx(Mn,{path:"/login",element:p.jsx(zB,{})}),p.jsx(Mn,{path:"/profile",element:p.jsx(Qi,{children:p.jsx(ZB,{})})}),p.jsx(Mn,{path:"/bot",element:p.jsx(Qi,{children:p.jsx(n5,{})})}),p.jsx(Mn,{path:"/room/:mode",element:p.jsx(Qi,{children:p.jsx(i5,{})})}),p.jsx(Mn,{path:"/game/:roomId",element:p.jsx(Qi,{children:p.jsx(o5,{})})}),p.jsx(Mn,{path:"/leaderboard",element:p.jsx(Qi,{children:p.jsx(a5,{})})}),p.jsx(Mn,{path:"/friends",element:p.jsx(Qi,{children:p.jsx(f5,{})})}),p.jsx(Mn,{path:"/history",element:p.jsx(Qi,{children:p.jsx(g5,{})})}),p.jsx(Mn,{path:"*",element:p.jsx(nC,{to:"/",replace:!0})})]})]})}function v5(){return p.jsx(hB,{children:p.jsx(y5,{})})}Ap.createRoot(document.getElementById("root")).render(p.jsx(UT.StrictMode,{children:p.jsx(v5,{})}));
