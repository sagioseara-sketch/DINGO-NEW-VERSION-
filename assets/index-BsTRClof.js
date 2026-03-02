function t1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function n1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var DT={exports:{}},ad={},OT={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu=Symbol.for("react.element"),r1=Symbol.for("react.portal"),i1=Symbol.for("react.fragment"),s1=Symbol.for("react.strict_mode"),o1=Symbol.for("react.profiler"),a1=Symbol.for("react.provider"),l1=Symbol.for("react.context"),u1=Symbol.for("react.forward_ref"),c1=Symbol.for("react.suspense"),h1=Symbol.for("react.memo"),d1=Symbol.for("react.lazy"),Zv=Symbol.iterator;function f1(t){return t===null||typeof t!="object"?null:(t=Zv&&t[Zv]||t["@@iterator"],typeof t=="function"?t:null)}var LT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},MT=Object.assign,VT={};function na(t,e,n){this.props=t,this.context=e,this.refs=VT,this.updater=n||LT}na.prototype.isReactComponent={};na.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};na.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jT(){}jT.prototype=na.prototype;function wg(t,e,n){this.props=t,this.context=e,this.refs=VT,this.updater=n||LT}var Eg=wg.prototype=new jT;Eg.constructor=wg;MT(Eg,na.prototype);Eg.isPureReactComponent=!0;var ew=Array.isArray,FT=Object.prototype.hasOwnProperty,Tg={current:null},UT={key:!0,ref:!0,__self:!0,__source:!0};function BT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)FT.call(e,r)&&!UT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:uu,type:t,key:s,ref:o,props:i,_owner:Tg.current}}function p1(t,e){return{$$typeof:uu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ig(t){return typeof t=="object"&&t!==null&&t.$$typeof===uu}function m1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tw=/\/+/g;function Vf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m1(""+t.key):e.toString(36)}function Dc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case uu:case r1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vf(o,0):r,ew(i)?(n="",t!=null&&(n=t.replace(tw,"$&/")+"/"),Dc(i,e,n,"",function(c){return c})):i!=null&&(Ig(i)&&(i=p1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(tw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ew(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Vf(s,a);o+=Dc(s,e,n,l,i)}else if(l=f1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Vf(s,a++),o+=Dc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sc(t,e,n){if(t==null)return t;var r=[],i=0;return Dc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function g1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Oc={transition:null},_1={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Oc,ReactCurrentOwner:Tg};function zT(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:sc,forEach:function(t,e,n){sc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sc(t,function(){e++}),e},toArray:function(t){return sc(t,function(e){return e})||[]},only:function(t){if(!Ig(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=na;de.Fragment=i1;de.Profiler=o1;de.PureComponent=wg;de.StrictMode=s1;de.Suspense=c1;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_1;de.act=zT;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=MT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Tg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)FT.call(e,l)&&!UT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:uu,type:t.type,key:i,ref:s,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:l1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:a1,_context:t},t.Consumer=t};de.createElement=BT;de.createFactory=function(t){var e=BT.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:u1,render:t}};de.isValidElement=Ig;de.lazy=function(t){return{$$typeof:d1,_payload:{_status:-1,_result:t},_init:g1}};de.memo=function(t,e){return{$$typeof:h1,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Oc.transition;Oc.transition={};try{t()}finally{Oc.transition=e}};de.unstable_act=zT;de.useCallback=function(t,e){return Xt.current.useCallback(t,e)};de.useContext=function(t){return Xt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Xt.current.useEffect(t,e)};de.useId=function(){return Xt.current.useId()};de.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Xt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};de.useRef=function(t){return Xt.current.useRef(t)};de.useState=function(t){return Xt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Xt.current.useTransition()};de.version="18.3.1";OT.exports=de;var b=OT.exports;const WT=n1(b),y1=t1({__proto__:null,default:WT},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=b,w1=Symbol.for("react.element"),E1=Symbol.for("react.fragment"),T1=Object.prototype.hasOwnProperty,I1=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S1={key:!0,ref:!0,__self:!0,__source:!0};function $T(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)T1.call(e,r)&&!S1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:w1,type:t,key:s,ref:o,props:i,_owner:I1.current}}ad.Fragment=E1;ad.jsx=$T;ad.jsxs=$T;DT.exports=ad;var p=DT.exports,Op={},HT={exports:{}},_n={},qT={exports:{}},KT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,X){var Q=z.length;z.push(X);e:for(;0<Q;){var G=Q-1>>>1,q=z[G];if(0<i(q,X))z[G]=X,z[Q]=q,Q=G;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var X=z[0],Q=z.pop();if(Q!==X){z[0]=Q;e:for(var G=0,q=z.length,ae=q>>>1;G<ae;){var Oe=2*(G+1)-1,Ee=z[Oe],Be=Oe+1,ze=z[Be];if(0>i(Ee,Q))Be<q&&0>i(ze,Ee)?(z[G]=ze,z[Be]=Q,G=Be):(z[G]=Ee,z[Oe]=Q,G=Oe);else if(Be<q&&0>i(ze,Q))z[G]=ze,z[Be]=Q,G=Be;else break e}}return X}function i(z,X){var Q=z.sortIndex-X.sortIndex;return Q!==0?Q:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,m=3,v=!1,w=!1,A=!1,P=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=z)r(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function D(z){if(A=!1,I(z),!w)if(n(l)!==null)w=!0,ie(F);else{var X=n(c);X!==null&&ke(D,X.startTime-z)}}function F(z,X){w=!1,A&&(A=!1,T(y),y=-1),v=!0;var Q=m;try{for(I(X),f=n(l);f!==null&&(!(f.expirationTime>X)||z&&!N());){var G=f.callback;if(typeof G=="function"){f.callback=null,m=f.priorityLevel;var q=G(f.expirationTime<=X);X=t.unstable_now(),typeof q=="function"?f.callback=q:f===n(l)&&r(l),I(X)}else r(l);f=n(l)}if(f!==null)var ae=!0;else{var Oe=n(c);Oe!==null&&ke(D,Oe.startTime-X),ae=!1}return ae}finally{f=null,m=Q,v=!1}}var V=!1,S=null,y=-1,C=5,k=-1;function N(){return!(t.unstable_now()-k<C)}function R(){if(S!==null){var z=t.unstable_now();k=z;var X=!0;try{X=S(!0,z)}finally{X?x():(V=!1,S=null)}}else V=!1}var x;if(typeof E=="function")x=function(){E(R)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,M=Te.port2;Te.port1.onmessage=R,x=function(){M.postMessage(null)}}else x=function(){P(R,0)};function ie(z){S=z,V||(V=!0,x())}function ke(z,X){y=P(function(){z(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){w||v||(w=!0,ie(F))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var Q=m;m=X;try{return z()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=m;m=z;try{return X()}finally{m=Q}},t.unstable_scheduleCallback=function(z,X,Q){var G=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?G+Q:G):Q=G,z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=Q+q,z={id:h++,callback:X,priorityLevel:z,startTime:Q,expirationTime:q,sortIndex:-1},Q>G?(z.sortIndex=Q,e(c,z),n(l)===null&&z===n(c)&&(A?(T(y),y=-1):A=!0,ke(D,Q-G))):(z.sortIndex=q,e(l,z),w||v||(w=!0,ie(F))),z},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(z){var X=m;return function(){var Q=m;m=X;try{return z.apply(this,arguments)}finally{m=Q}}}})(KT);qT.exports=KT;var C1=qT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1=b,gn=C1;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var GT=new Set,Il={};function bs(t,e){Ao(t,e),Ao(t+"Capture",e)}function Ao(t,e){for(Il[t]=e,t=0;t<e.length;t++)GT.add(e[t])}var Or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lp=Object.prototype.hasOwnProperty,x1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nw={},rw={};function R1(t){return Lp.call(rw,t)?!0:Lp.call(nw,t)?!1:x1.test(t)?rw[t]=!0:(nw[t]=!0,!1)}function A1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P1(t,e,n,r){if(e===null||typeof e>"u"||A1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sg=/[\-:]([a-z])/g;function Cg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sg,Cg);Dt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sg,Cg);Dt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sg,Cg);Dt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kg(t,e,n,r){var i=Dt.hasOwnProperty(e)?Dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P1(e,n,i,r)&&(n=null),r||i===null?R1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $r=k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oc=Symbol.for("react.element"),no=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),xg=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),QT=Symbol.for("react.provider"),YT=Symbol.for("react.context"),Rg=Symbol.for("react.forward_ref"),Vp=Symbol.for("react.suspense"),jp=Symbol.for("react.suspense_list"),Ag=Symbol.for("react.memo"),ei=Symbol.for("react.lazy"),XT=Symbol.for("react.offscreen"),iw=Symbol.iterator;function ba(t){return t===null||typeof t!="object"?null:(t=iw&&t[iw]||t["@@iterator"],typeof t=="function"?t:null)}var Ye=Object.assign,jf;function Ka(t){if(jf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jf=e&&e[1]||""}return`
`+jf+t}var Ff=!1;function Uf(t,e){if(!t||Ff)return"";Ff=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ff=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ka(t):""}function N1(t){switch(t.tag){case 5:return Ka(t.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 2:case 15:return t=Uf(t.type,!1),t;case 11:return t=Uf(t.type.render,!1),t;case 1:return t=Uf(t.type,!0),t;default:return""}}function Fp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ro:return"Fragment";case no:return"Portal";case Mp:return"Profiler";case xg:return"StrictMode";case Vp:return"Suspense";case jp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case YT:return(t.displayName||"Context")+".Consumer";case QT:return(t._context.displayName||"Context")+".Provider";case Rg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ag:return e=t.displayName||null,e!==null?e:Fp(t.type)||"Memo";case ei:e=t._payload,t=t._init;try{return Fp(t(e))}catch{}}return null}function b1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fp(e);case 8:return e===xg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Si(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function JT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D1(t){var e=JT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ac(t){t._valueTracker||(t._valueTracker=D1(t))}function ZT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=JT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Up(t,e){var n=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Si(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eI(t,e){e=e.checked,e!=null&&kg(t,"checked",e,!1)}function Bp(t,e){eI(t,e);var n=Si(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zp(t,e.type,n):e.hasOwnProperty("defaultValue")&&zp(t,e.type,Si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ow(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zp(t,e,n){(e!=="number"||nh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ga=Array.isArray;function _o(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Si(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function aw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Ga(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Si(n)}}function tI(t,e){var n=Si(e.value),r=Si(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function lw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $p(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lc,rI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lc=lc||document.createElement("div"),lc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O1=["Webkit","ms","Moz","O"];Object.keys(nl).forEach(function(t){O1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),nl[e]=nl[t]})});function iI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||nl.hasOwnProperty(t)&&nl[t]?(""+e).trim():e+"px"}function sI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var L1=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hp(t,e){if(e){if(L1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function qp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kp=null;function Pg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gp=null,yo=null,vo=null;function uw(t){if(t=du(t)){if(typeof Gp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=dd(e),Gp(t.stateNode,t.type,e))}}function oI(t){yo?vo?vo.push(t):vo=[t]:yo=t}function aI(){if(yo){var t=yo,e=vo;if(vo=yo=null,uw(t),e)for(t=0;t<e.length;t++)uw(e[t])}}function lI(t,e){return t(e)}function uI(){}var Bf=!1;function cI(t,e,n){if(Bf)return t(e,n);Bf=!0;try{return lI(t,e,n)}finally{Bf=!1,(yo!==null||vo!==null)&&(uI(),aI())}}function Cl(t,e){var n=t.stateNode;if(n===null)return null;var r=dd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Qp=!1;if(Or)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){Qp=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{Qp=!1}function M1(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var rl=!1,rh=null,ih=!1,Yp=null,V1={onError:function(t){rl=!0,rh=t}};function j1(t,e,n,r,i,s,o,a,l){rl=!1,rh=null,M1.apply(V1,arguments)}function F1(t,e,n,r,i,s,o,a,l){if(j1.apply(this,arguments),rl){if(rl){var c=rh;rl=!1,rh=null}else throw Error(B(198));ih||(ih=!0,Yp=c)}}function Ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cw(t){if(Ds(t)!==t)throw Error(B(188))}function U1(t){var e=t.alternate;if(!e){if(e=Ds(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cw(i),t;if(s===r)return cw(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function dI(t){return t=U1(t),t!==null?fI(t):null}function fI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fI(t);if(e!==null)return e;t=t.sibling}return null}var pI=gn.unstable_scheduleCallback,hw=gn.unstable_cancelCallback,B1=gn.unstable_shouldYield,z1=gn.unstable_requestPaint,rt=gn.unstable_now,W1=gn.unstable_getCurrentPriorityLevel,Ng=gn.unstable_ImmediatePriority,mI=gn.unstable_UserBlockingPriority,sh=gn.unstable_NormalPriority,$1=gn.unstable_LowPriority,gI=gn.unstable_IdlePriority,ld=null,tr=null;function H1(t){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(ld,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:G1,q1=Math.log,K1=Math.LN2;function G1(t){return t>>>=0,t===0?32:31-(q1(t)/K1|0)|0}var uc=64,cc=4194304;function Qa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Qa(a):(s&=o,s!==0&&(r=Qa(s)))}else o=n&~i,o!==0?r=Qa(o):s!==0&&(r=Qa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zn(e),i=1<<n,r|=t[n],e&=~i;return r}function Q1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Q1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _I(){var t=uc;return uc<<=1,!(uc&4194240)&&(uc=64),t}function zf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function X1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ie=0;function yI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vI,Dg,wI,EI,TI,Jp=!1,hc=[],di=null,fi=null,pi=null,kl=new Map,xl=new Map,ni=[],J1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dw(t,e){switch(t){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":kl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(e.pointerId)}}function Oa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=du(e),e!==null&&Dg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Z1(t,e,n,r,i){switch(e){case"focusin":return di=Oa(di,t,e,n,r,i),!0;case"dragenter":return fi=Oa(fi,t,e,n,r,i),!0;case"mouseover":return pi=Oa(pi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return kl.set(s,Oa(kl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xl.set(s,Oa(xl.get(s)||null,t,e,n,r,i)),!0}return!1}function II(t){var e=ts(t.target);if(e!==null){var n=Ds(e);if(n!==null){if(e=n.tag,e===13){if(e=hI(n),e!==null){t.blockedOn=e,TI(t.priority,function(){wI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kp=r,n.target.dispatchEvent(r),Kp=null}else return e=du(n),e!==null&&Dg(e),t.blockedOn=n,!1;e.shift()}return!0}function fw(t,e,n){Lc(t)&&n.delete(e)}function eP(){Jp=!1,di!==null&&Lc(di)&&(di=null),fi!==null&&Lc(fi)&&(fi=null),pi!==null&&Lc(pi)&&(pi=null),kl.forEach(fw),xl.forEach(fw)}function La(t,e){t.blockedOn===e&&(t.blockedOn=null,Jp||(Jp=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,eP)))}function Rl(t){function e(i){return La(i,t)}if(0<hc.length){La(hc[0],t);for(var n=1;n<hc.length;n++){var r=hc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(di!==null&&La(di,t),fi!==null&&La(fi,t),pi!==null&&La(pi,t),kl.forEach(e),xl.forEach(e),n=0;n<ni.length;n++)r=ni[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ni.length&&(n=ni[0],n.blockedOn===null);)II(n),n.blockedOn===null&&ni.shift()}var wo=$r.ReactCurrentBatchConfig,ah=!0;function tP(t,e,n,r){var i=Ie,s=wo.transition;wo.transition=null;try{Ie=1,Og(t,e,n,r)}finally{Ie=i,wo.transition=s}}function nP(t,e,n,r){var i=Ie,s=wo.transition;wo.transition=null;try{Ie=4,Og(t,e,n,r)}finally{Ie=i,wo.transition=s}}function Og(t,e,n,r){if(ah){var i=Zp(t,e,n,r);if(i===null)Jf(t,e,r,lh,n),dw(t,r);else if(Z1(i,t,e,n,r))r.stopPropagation();else if(dw(t,r),e&4&&-1<J1.indexOf(t)){for(;i!==null;){var s=du(i);if(s!==null&&vI(s),s=Zp(t,e,n,r),s===null&&Jf(t,e,r,lh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jf(t,e,r,null,n)}}var lh=null;function Zp(t,e,n,r){if(lh=null,t=Pg(r),t=ts(t),t!==null)if(e=Ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return lh=t,null}function SI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W1()){case Ng:return 1;case mI:return 4;case sh:case $1:return 16;case gI:return 536870912;default:return 16}default:return 16}}var ai=null,Lg=null,Mc=null;function CI(){if(Mc)return Mc;var t,e=Lg,n=e.length,r,i="value"in ai?ai.value:ai.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Mc=i.slice(t,1<r?1-r:void 0)}function Vc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dc(){return!0}function pw(){return!1}function yn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dc:pw,this.isPropagationStopped=pw,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mg=yn(ra),hu=Ye({},ra,{view:0,detail:0}),rP=yn(hu),Wf,$f,Ma,ud=Ye({},hu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ma&&(Ma&&t.type==="mousemove"?(Wf=t.screenX-Ma.screenX,$f=t.screenY-Ma.screenY):$f=Wf=0,Ma=t),Wf)},movementY:function(t){return"movementY"in t?t.movementY:$f}}),mw=yn(ud),iP=Ye({},ud,{dataTransfer:0}),sP=yn(iP),oP=Ye({},hu,{relatedTarget:0}),Hf=yn(oP),aP=Ye({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),lP=yn(aP),uP=Ye({},ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cP=yn(uP),hP=Ye({},ra,{data:0}),gw=yn(hP),dP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pP[t])?!!e[t]:!1}function Vg(){return mP}var gP=Ye({},hu,{key:function(t){if(t.key){var e=dP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vg,charCode:function(t){return t.type==="keypress"?Vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_P=yn(gP),yP=Ye({},ud,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_w=yn(yP),vP=Ye({},hu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vg}),wP=yn(vP),EP=Ye({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),TP=yn(EP),IP=Ye({},ud,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SP=yn(IP),CP=[9,13,27,32],jg=Or&&"CompositionEvent"in window,il=null;Or&&"documentMode"in document&&(il=document.documentMode);var kP=Or&&"TextEvent"in window&&!il,kI=Or&&(!jg||il&&8<il&&11>=il),yw=" ",vw=!1;function xI(t,e){switch(t){case"keyup":return CP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function RI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function xP(t,e){switch(t){case"compositionend":return RI(e);case"keypress":return e.which!==32?null:(vw=!0,yw);case"textInput":return t=e.data,t===yw&&vw?null:t;default:return null}}function RP(t,e){if(io)return t==="compositionend"||!jg&&xI(t,e)?(t=CI(),Mc=Lg=ai=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kI&&e.locale!=="ko"?null:e.data;default:return null}}var AP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ww(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AP[t.type]:e==="textarea"}function AI(t,e,n,r){oI(r),e=uh(e,"onChange"),0<e.length&&(n=new Mg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var sl=null,Al=null;function PP(t){UI(t,0)}function cd(t){var e=ao(t);if(ZT(e))return t}function NP(t,e){if(t==="change")return e}var PI=!1;if(Or){var qf;if(Or){var Kf="oninput"in document;if(!Kf){var Ew=document.createElement("div");Ew.setAttribute("oninput","return;"),Kf=typeof Ew.oninput=="function"}qf=Kf}else qf=!1;PI=qf&&(!document.documentMode||9<document.documentMode)}function Tw(){sl&&(sl.detachEvent("onpropertychange",NI),Al=sl=null)}function NI(t){if(t.propertyName==="value"&&cd(Al)){var e=[];AI(e,Al,t,Pg(t)),cI(PP,e)}}function bP(t,e,n){t==="focusin"?(Tw(),sl=e,Al=n,sl.attachEvent("onpropertychange",NI)):t==="focusout"&&Tw()}function DP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cd(Al)}function OP(t,e){if(t==="click")return cd(e)}function LP(t,e){if(t==="input"||t==="change")return cd(e)}function MP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:MP;function Pl(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lp.call(e,i)||!Kn(t[i],e[i]))return!1}return!0}function Iw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sw(t,e){var n=Iw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iw(n)}}function bI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function DI(){for(var t=window,e=nh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nh(t.document)}return e}function Fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VP(t){var e=DI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bI(n.ownerDocument.documentElement,n)){if(r!==null&&Fg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sw(n,s);var o=Sw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jP=Or&&"documentMode"in document&&11>=document.documentMode,so=null,em=null,ol=null,tm=!1;function Cw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tm||so==null||so!==nh(r)||(r=so,"selectionStart"in r&&Fg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ol&&Pl(ol,r)||(ol=r,r=uh(em,"onSelect"),0<r.length&&(e=new Mg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=so)))}function fc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oo={animationend:fc("Animation","AnimationEnd"),animationiteration:fc("Animation","AnimationIteration"),animationstart:fc("Animation","AnimationStart"),transitionend:fc("Transition","TransitionEnd")},Gf={},OI={};Or&&(OI=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function hd(t){if(Gf[t])return Gf[t];if(!oo[t])return t;var e=oo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in OI)return Gf[t]=e[n];return t}var LI=hd("animationend"),MI=hd("animationiteration"),VI=hd("animationstart"),jI=hd("transitionend"),FI=new Map,kw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Li(t,e){FI.set(t,e),bs(e,[t])}for(var Qf=0;Qf<kw.length;Qf++){var Yf=kw[Qf],FP=Yf.toLowerCase(),UP=Yf[0].toUpperCase()+Yf.slice(1);Li(FP,"on"+UP)}Li(LI,"onAnimationEnd");Li(MI,"onAnimationIteration");Li(VI,"onAnimationStart");Li("dblclick","onDoubleClick");Li("focusin","onFocus");Li("focusout","onBlur");Li(jI,"onTransitionEnd");Ao("onMouseEnter",["mouseout","mouseover"]);Ao("onMouseLeave",["mouseout","mouseover"]);Ao("onPointerEnter",["pointerout","pointerover"]);Ao("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ya));function xw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,F1(r,e,void 0,t),t.currentTarget=null}function UI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;xw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;xw(i,a,c),s=l}}}if(ih)throw t=Yp,ih=!1,Yp=null,t}function Me(t,e){var n=e[om];n===void 0&&(n=e[om]=new Set);var r=t+"__bubble";n.has(r)||(BI(e,t,2,!1),n.add(r))}function Xf(t,e,n){var r=0;e&&(r|=4),BI(n,t,r,e)}var pc="_reactListening"+Math.random().toString(36).slice(2);function Nl(t){if(!t[pc]){t[pc]=!0,GT.forEach(function(n){n!=="selectionchange"&&(BP.has(n)||Xf(n,!1,t),Xf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pc]||(e[pc]=!0,Xf("selectionchange",!1,e))}}function BI(t,e,n,r){switch(SI(e)){case 1:var i=tP;break;case 4:i=nP;break;default:i=Og}n=i.bind(null,e,n,t),i=void 0,!Qp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ts(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}cI(function(){var c=s,h=Pg(n),f=[];e:{var m=FI.get(t);if(m!==void 0){var v=Mg,w=t;switch(t){case"keypress":if(Vc(n)===0)break e;case"keydown":case"keyup":v=_P;break;case"focusin":w="focus",v=Hf;break;case"focusout":w="blur",v=Hf;break;case"beforeblur":case"afterblur":v=Hf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=mw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=sP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wP;break;case LI:case MI:case VI:v=lP;break;case jI:v=TP;break;case"scroll":v=rP;break;case"wheel":v=SP;break;case"copy":case"cut":case"paste":v=cP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=_w}var A=(e&4)!==0,P=!A&&t==="scroll",T=A?m!==null?m+"Capture":null:m;A=[];for(var E=c,I;E!==null;){I=E;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,T!==null&&(D=Cl(E,T),D!=null&&A.push(bl(E,D,I)))),P)break;E=E.return}0<A.length&&(m=new v(m,w,null,n,h),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Kp&&(w=n.relatedTarget||n.fromElement)&&(ts(w)||w[Lr]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?ts(w):null,w!==null&&(P=Ds(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(A=mw,D="onMouseLeave",T="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(A=_w,D="onPointerLeave",T="onPointerEnter",E="pointer"),P=v==null?m:ao(v),I=w==null?m:ao(w),m=new A(D,E+"leave",v,n,h),m.target=P,m.relatedTarget=I,D=null,ts(h)===c&&(A=new A(T,E+"enter",w,n,h),A.target=I,A.relatedTarget=P,D=A),P=D,v&&w)t:{for(A=v,T=w,E=0,I=A;I;I=Ys(I))E++;for(I=0,D=T;D;D=Ys(D))I++;for(;0<E-I;)A=Ys(A),E--;for(;0<I-E;)T=Ys(T),I--;for(;E--;){if(A===T||T!==null&&A===T.alternate)break t;A=Ys(A),T=Ys(T)}A=null}else A=null;v!==null&&Rw(f,m,v,A,!1),w!==null&&P!==null&&Rw(f,P,w,A,!0)}}e:{if(m=c?ao(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var F=NP;else if(ww(m))if(PI)F=LP;else{F=DP;var V=bP}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=OP);if(F&&(F=F(t,c))){AI(f,F,n,h);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&zp(m,"number",m.value)}switch(V=c?ao(c):window,t){case"focusin":(ww(V)||V.contentEditable==="true")&&(so=V,em=c,ol=null);break;case"focusout":ol=em=so=null;break;case"mousedown":tm=!0;break;case"contextmenu":case"mouseup":case"dragend":tm=!1,Cw(f,n,h);break;case"selectionchange":if(jP)break;case"keydown":case"keyup":Cw(f,n,h)}var S;if(jg)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else io?xI(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(kI&&n.locale!=="ko"&&(io||y!=="onCompositionStart"?y==="onCompositionEnd"&&io&&(S=CI()):(ai=h,Lg="value"in ai?ai.value:ai.textContent,io=!0)),V=uh(c,y),0<V.length&&(y=new gw(y,t,null,n,h),f.push({event:y,listeners:V}),S?y.data=S:(S=RI(n),S!==null&&(y.data=S)))),(S=kP?xP(t,n):RP(t,n))&&(c=uh(c,"onBeforeInput"),0<c.length&&(h=new gw("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=S))}UI(f,e)})}function bl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Cl(t,n),s!=null&&r.unshift(bl(t,s,i)),s=Cl(t,e),s!=null&&r.push(bl(t,s,i))),t=t.return}return r}function Ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Cl(n,s),l!=null&&o.unshift(bl(n,l,a))):i||(l=Cl(n,s),l!=null&&o.push(bl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zP=/\r\n?/g,WP=/\u0000|\uFFFD/g;function Aw(t){return(typeof t=="string"?t:""+t).replace(zP,`
`).replace(WP,"")}function mc(t,e,n){if(e=Aw(e),Aw(t)!==e&&n)throw Error(B(425))}function ch(){}var nm=null,rm=null;function im(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sm=typeof setTimeout=="function"?setTimeout:void 0,$P=typeof clearTimeout=="function"?clearTimeout:void 0,Pw=typeof Promise=="function"?Promise:void 0,HP=typeof queueMicrotask=="function"?queueMicrotask:typeof Pw<"u"?function(t){return Pw.resolve(null).then(t).catch(qP)}:sm;function qP(t){setTimeout(function(){throw t})}function Zf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Rl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rl(e)}function mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ia=Math.random().toString(36).slice(2),Zn="__reactFiber$"+ia,Dl="__reactProps$"+ia,Lr="__reactContainer$"+ia,om="__reactEvents$"+ia,KP="__reactListeners$"+ia,GP="__reactHandles$"+ia;function ts(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nw(t);t!==null;){if(n=t[Zn])return n;t=Nw(t)}return e}t=n,n=t.parentNode}return null}function du(t){return t=t[Zn]||t[Lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function dd(t){return t[Dl]||null}var am=[],lo=-1;function Mi(t){return{current:t}}function je(t){0>lo||(t.current=am[lo],am[lo]=null,lo--)}function De(t,e){lo++,am[lo]=t.current,t.current=e}var Ci={},Wt=Mi(Ci),rn=Mi(!1),ps=Ci;function Po(t,e){var n=t.type.contextTypes;if(!n)return Ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function sn(t){return t=t.childContextTypes,t!=null}function hh(){je(rn),je(Wt)}function bw(t,e,n){if(Wt.current!==Ci)throw Error(B(168));De(Wt,e),De(rn,n)}function zI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,b1(t)||"Unknown",i));return Ye({},n,r)}function dh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ci,ps=Wt.current,De(Wt,t),De(rn,rn.current),!0}function Dw(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=zI(t,e,ps),r.__reactInternalMemoizedMergedChildContext=t,je(rn),je(Wt),De(Wt,t)):je(rn),De(rn,n)}var vr=null,fd=!1,ep=!1;function WI(t){vr===null?vr=[t]:vr.push(t)}function QP(t){fd=!0,WI(t)}function Vi(){if(!ep&&vr!==null){ep=!0;var t=0,e=Ie;try{var n=vr;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vr=null,fd=!1}catch(i){throw vr!==null&&(vr=vr.slice(t+1)),pI(Ng,Vi),i}finally{Ie=e,ep=!1}}return null}var uo=[],co=0,fh=null,ph=0,En=[],Tn=0,ms=null,Er=1,Tr="";function Yi(t,e){uo[co++]=ph,uo[co++]=fh,fh=t,ph=e}function $I(t,e,n){En[Tn++]=Er,En[Tn++]=Tr,En[Tn++]=ms,ms=t;var r=Er;t=Tr;var i=32-zn(r)-1;r&=~(1<<i),n+=1;var s=32-zn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Er=1<<32-zn(e)+i|n<<i|r,Tr=s+t}else Er=1<<s|n<<i|r,Tr=t}function Ug(t){t.return!==null&&(Yi(t,1),$I(t,1,0))}function Bg(t){for(;t===fh;)fh=uo[--co],uo[co]=null,ph=uo[--co],uo[co]=null;for(;t===ms;)ms=En[--Tn],En[Tn]=null,Tr=En[--Tn],En[Tn]=null,Er=En[--Tn],En[Tn]=null}var pn=null,dn=null,$e=!1,jn=null;function HI(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ow(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,dn=mi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ms!==null?{id:Er,overflow:Tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,dn=null,!0):!1;default:return!1}}function lm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function um(t){if($e){var e=dn;if(e){var n=e;if(!Ow(t,e)){if(lm(t))throw Error(B(418));e=mi(n.nextSibling);var r=pn;e&&Ow(t,e)?HI(r,n):(t.flags=t.flags&-4097|2,$e=!1,pn=t)}}else{if(lm(t))throw Error(B(418));t.flags=t.flags&-4097|2,$e=!1,pn=t}}}function Lw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function gc(t){if(t!==pn)return!1;if(!$e)return Lw(t),$e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!im(t.type,t.memoizedProps)),e&&(e=dn)){if(lm(t))throw qI(),Error(B(418));for(;e;)HI(t,e),e=mi(e.nextSibling)}if(Lw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=mi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=pn?mi(t.stateNode.nextSibling):null;return!0}function qI(){for(var t=dn;t;)t=mi(t.nextSibling)}function No(){dn=pn=null,$e=!1}function zg(t){jn===null?jn=[t]:jn.push(t)}var YP=$r.ReactCurrentBatchConfig;function Va(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function _c(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mw(t){var e=t._init;return e(t._payload)}function KI(t){function e(T,E){if(t){var I=T.deletions;I===null?(T.deletions=[E],T.flags|=16):I.push(E)}}function n(T,E){if(!t)return null;for(;E!==null;)e(T,E),E=E.sibling;return null}function r(T,E){for(T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function i(T,E){return T=vi(T,E),T.index=0,T.sibling=null,T}function s(T,E,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<E?(T.flags|=2,E):I):(T.flags|=2,E)):(T.flags|=1048576,E)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,E,I,D){return E===null||E.tag!==6?(E=ap(I,T.mode,D),E.return=T,E):(E=i(E,I),E.return=T,E)}function l(T,E,I,D){var F=I.type;return F===ro?h(T,E,I.props.children,D,I.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ei&&Mw(F)===E.type)?(D=i(E,I.props),D.ref=Va(T,E,I),D.return=T,D):(D=$c(I.type,I.key,I.props,null,T.mode,D),D.ref=Va(T,E,I),D.return=T,D)}function c(T,E,I,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==I.containerInfo||E.stateNode.implementation!==I.implementation?(E=lp(I,T.mode,D),E.return=T,E):(E=i(E,I.children||[]),E.return=T,E)}function h(T,E,I,D,F){return E===null||E.tag!==7?(E=cs(I,T.mode,D,F),E.return=T,E):(E=i(E,I),E.return=T,E)}function f(T,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return E=ap(""+E,T.mode,I),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case oc:return I=$c(E.type,E.key,E.props,null,T.mode,I),I.ref=Va(T,null,E),I.return=T,I;case no:return E=lp(E,T.mode,I),E.return=T,E;case ei:var D=E._init;return f(T,D(E._payload),I)}if(Ga(E)||ba(E))return E=cs(E,T.mode,I,null),E.return=T,E;_c(T,E)}return null}function m(T,E,I,D){var F=E!==null?E.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:a(T,E,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case oc:return I.key===F?l(T,E,I,D):null;case no:return I.key===F?c(T,E,I,D):null;case ei:return F=I._init,m(T,E,F(I._payload),D)}if(Ga(I)||ba(I))return F!==null?null:h(T,E,I,D,null);_c(T,I)}return null}function v(T,E,I,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(I)||null,a(E,T,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case oc:return T=T.get(D.key===null?I:D.key)||null,l(E,T,D,F);case no:return T=T.get(D.key===null?I:D.key)||null,c(E,T,D,F);case ei:var V=D._init;return v(T,E,I,V(D._payload),F)}if(Ga(D)||ba(D))return T=T.get(I)||null,h(E,T,D,F,null);_c(E,D)}return null}function w(T,E,I,D){for(var F=null,V=null,S=E,y=E=0,C=null;S!==null&&y<I.length;y++){S.index>y?(C=S,S=null):C=S.sibling;var k=m(T,S,I[y],D);if(k===null){S===null&&(S=C);break}t&&S&&k.alternate===null&&e(T,S),E=s(k,E,y),V===null?F=k:V.sibling=k,V=k,S=C}if(y===I.length)return n(T,S),$e&&Yi(T,y),F;if(S===null){for(;y<I.length;y++)S=f(T,I[y],D),S!==null&&(E=s(S,E,y),V===null?F=S:V.sibling=S,V=S);return $e&&Yi(T,y),F}for(S=r(T,S);y<I.length;y++)C=v(S,T,y,I[y],D),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?y:C.key),E=s(C,E,y),V===null?F=C:V.sibling=C,V=C);return t&&S.forEach(function(N){return e(T,N)}),$e&&Yi(T,y),F}function A(T,E,I,D){var F=ba(I);if(typeof F!="function")throw Error(B(150));if(I=F.call(I),I==null)throw Error(B(151));for(var V=F=null,S=E,y=E=0,C=null,k=I.next();S!==null&&!k.done;y++,k=I.next()){S.index>y?(C=S,S=null):C=S.sibling;var N=m(T,S,k.value,D);if(N===null){S===null&&(S=C);break}t&&S&&N.alternate===null&&e(T,S),E=s(N,E,y),V===null?F=N:V.sibling=N,V=N,S=C}if(k.done)return n(T,S),$e&&Yi(T,y),F;if(S===null){for(;!k.done;y++,k=I.next())k=f(T,k.value,D),k!==null&&(E=s(k,E,y),V===null?F=k:V.sibling=k,V=k);return $e&&Yi(T,y),F}for(S=r(T,S);!k.done;y++,k=I.next())k=v(S,T,y,k.value,D),k!==null&&(t&&k.alternate!==null&&S.delete(k.key===null?y:k.key),E=s(k,E,y),V===null?F=k:V.sibling=k,V=k);return t&&S.forEach(function(R){return e(T,R)}),$e&&Yi(T,y),F}function P(T,E,I,D){if(typeof I=="object"&&I!==null&&I.type===ro&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case oc:e:{for(var F=I.key,V=E;V!==null;){if(V.key===F){if(F=I.type,F===ro){if(V.tag===7){n(T,V.sibling),E=i(V,I.props.children),E.return=T,T=E;break e}}else if(V.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ei&&Mw(F)===V.type){n(T,V.sibling),E=i(V,I.props),E.ref=Va(T,V,I),E.return=T,T=E;break e}n(T,V);break}else e(T,V);V=V.sibling}I.type===ro?(E=cs(I.props.children,T.mode,D,I.key),E.return=T,T=E):(D=$c(I.type,I.key,I.props,null,T.mode,D),D.ref=Va(T,E,I),D.return=T,T=D)}return o(T);case no:e:{for(V=I.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===I.containerInfo&&E.stateNode.implementation===I.implementation){n(T,E.sibling),E=i(E,I.children||[]),E.return=T,T=E;break e}else{n(T,E);break}else e(T,E);E=E.sibling}E=lp(I,T.mode,D),E.return=T,T=E}return o(T);case ei:return V=I._init,P(T,E,V(I._payload),D)}if(Ga(I))return w(T,E,I,D);if(ba(I))return A(T,E,I,D);_c(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,E!==null&&E.tag===6?(n(T,E.sibling),E=i(E,I),E.return=T,T=E):(n(T,E),E=ap(I,T.mode,D),E.return=T,T=E),o(T)):n(T,E)}return P}var bo=KI(!0),GI=KI(!1),mh=Mi(null),gh=null,ho=null,Wg=null;function $g(){Wg=ho=gh=null}function Hg(t){var e=mh.current;je(mh),t._currentValue=e}function cm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Eo(t,e){gh=t,Wg=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(Wg!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(gh===null)throw Error(B(308));ho=t,gh.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var ns=null;function qg(t){ns===null?ns=[t]:ns.push(t)}function QI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mr(t,r)}function Mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ti=!1;function Kg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function YI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mr(t,n)}return i=r.interleaved,i===null?(e.next=e,qg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mr(t,n)}function jc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bg(t,n)}}function Vw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _h(t,e,n,r){var i=t.updateQueue;ti=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,A=a;switch(m=e,v=n,A.tag){case 1:if(w=A.payload,typeof w=="function"){f=w.call(v,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=A.payload,m=typeof w=="function"?w.call(v,f,m):w,m==null)break e;f=Ye({},f,m);break e;case 2:ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,l=f):h=h.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_s|=o,t.lanes=o,t.memoizedState=f}}function jw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var fu={},nr=Mi(fu),Ol=Mi(fu),Ll=Mi(fu);function rs(t){if(t===fu)throw Error(B(174));return t}function Gg(t,e){switch(De(Ll,e),De(Ol,t),De(nr,fu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$p(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$p(e,t)}je(nr),De(nr,e)}function Do(){je(nr),je(Ol),je(Ll)}function XI(t){rs(Ll.current);var e=rs(nr.current),n=$p(e,t.type);e!==n&&(De(Ol,t),De(nr,n))}function Qg(t){Ol.current===t&&(je(nr),je(Ol))}var qe=Mi(0);function yh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tp=[];function Yg(){for(var t=0;t<tp.length;t++)tp[t]._workInProgressVersionPrimary=null;tp.length=0}var Fc=$r.ReactCurrentDispatcher,np=$r.ReactCurrentBatchConfig,gs=0,Qe=null,ht=null,yt=null,vh=!1,al=!1,Ml=0,XP=0;function Vt(){throw Error(B(321))}function Xg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Jg(t,e,n,r,i,s){if(gs=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fc.current=t===null||t.memoizedState===null?tN:nN,t=n(r,i),al){s=0;do{if(al=!1,Ml=0,25<=s)throw Error(B(301));s+=1,yt=ht=null,e.updateQueue=null,Fc.current=rN,t=n(r,i)}while(al)}if(Fc.current=wh,e=ht!==null&&ht.next!==null,gs=0,yt=ht=Qe=null,vh=!1,e)throw Error(B(300));return t}function Zg(){var t=Ml!==0;return Ml=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Qe.memoizedState=yt=t:yt=yt.next=t,yt}function xn(){if(ht===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=yt===null?Qe.memoizedState:yt.next;if(e!==null)yt=e,ht=t;else{if(t===null)throw Error(B(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?Qe.memoizedState=yt=t:yt=yt.next=t}return yt}function Vl(t,e){return typeof e=="function"?e(t):e}function rp(t){var e=xn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=ht,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((gs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Qe.lanes|=h,_s|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Kn(r,e.memoizedState)||(tn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Qe.lanes|=s,_s|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ip(t){var e=xn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function JI(){}function ZI(t,e){var n=Qe,r=xn(),i=e(),s=!Kn(r.memoizedState,i);if(s&&(r.memoizedState=i,tn=!0),r=r.queue,e_(nS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,jl(9,tS.bind(null,n,r,i,e),void 0,null),Tt===null)throw Error(B(349));gs&30||eS(n,e,i)}return i}function eS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tS(t,e,n,r){e.value=n,e.getSnapshot=r,rS(e)&&iS(t)}function nS(t,e,n){return n(function(){rS(e)&&iS(t)})}function rS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function iS(t){var e=Mr(t,1);e!==null&&Wn(e,t,1,-1)}function Fw(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vl,lastRenderedState:t},e.queue=t,t=t.dispatch=eN.bind(null,Qe,t),[e.memoizedState,t]}function jl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sS(){return xn().memoizedState}function Uc(t,e,n,r){var i=Xn();Qe.flags|=t,i.memoizedState=jl(1|e,n,void 0,r===void 0?null:r)}function pd(t,e,n,r){var i=xn();r=r===void 0?null:r;var s=void 0;if(ht!==null){var o=ht.memoizedState;if(s=o.destroy,r!==null&&Xg(r,o.deps)){i.memoizedState=jl(e,n,s,r);return}}Qe.flags|=t,i.memoizedState=jl(1|e,n,s,r)}function Uw(t,e){return Uc(8390656,8,t,e)}function e_(t,e){return pd(2048,8,t,e)}function oS(t,e){return pd(4,2,t,e)}function aS(t,e){return pd(4,4,t,e)}function lS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uS(t,e,n){return n=n!=null?n.concat([t]):null,pd(4,4,lS.bind(null,e,t),n)}function t_(){}function cS(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hS(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dS(t,e,n){return gs&21?(Kn(n,e)||(n=_I(),Qe.lanes|=n,_s|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function JP(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=np.transition;np.transition={};try{t(!1),e()}finally{Ie=n,np.transition=r}}function fS(){return xn().memoizedState}function ZP(t,e,n){var r=yi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pS(t))mS(e,n);else if(n=QI(t,e,n,r),n!==null){var i=Gt();Wn(n,t,r,i),gS(n,e,r)}}function eN(t,e,n){var r=yi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pS(t))mS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(i.next=i,qg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=QI(t,e,i,r),n!==null&&(i=Gt(),Wn(n,t,r,i),gS(n,e,r))}}function pS(t){var e=t.alternate;return t===Qe||e!==null&&e===Qe}function mS(t,e){al=vh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bg(t,n)}}var wh={readContext:kn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},tN={readContext:kn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Uw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4194308,4,lS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uc(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZP.bind(null,Qe,t),[r.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Fw,useDebugValue:t_,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Fw(!1),e=t[0];return t=JP.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Qe,i=Xn();if($e){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Tt===null)throw Error(B(349));gs&30||eS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Uw(nS.bind(null,r,s,t),[t]),r.flags|=2048,jl(9,tS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Tt.identifierPrefix;if($e){var n=Tr,r=Er;n=(r&~(1<<32-zn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ml++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nN={readContext:kn,useCallback:cS,useContext:kn,useEffect:e_,useImperativeHandle:uS,useInsertionEffect:oS,useLayoutEffect:aS,useMemo:hS,useReducer:rp,useRef:sS,useState:function(){return rp(Vl)},useDebugValue:t_,useDeferredValue:function(t){var e=xn();return dS(e,ht.memoizedState,t)},useTransition:function(){var t=rp(Vl)[0],e=xn().memoizedState;return[t,e]},useMutableSource:JI,useSyncExternalStore:ZI,useId:fS,unstable_isNewReconciler:!1},rN={readContext:kn,useCallback:cS,useContext:kn,useEffect:e_,useImperativeHandle:uS,useInsertionEffect:oS,useLayoutEffect:aS,useMemo:hS,useReducer:ip,useRef:sS,useState:function(){return ip(Vl)},useDebugValue:t_,useDeferredValue:function(t){var e=xn();return ht===null?e.memoizedState=t:dS(e,ht.memoizedState,t)},useTransition:function(){var t=ip(Vl)[0],e=xn().memoizedState;return[t,e]},useMutableSource:JI,useSyncExternalStore:ZI,useId:fS,unstable_isNewReconciler:!1};function Mn(t,e){if(t&&t.defaultProps){e=Ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var md={isMounted:function(t){return(t=t._reactInternals)?Ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=yi(t),s=xr(r,i);s.payload=e,n!=null&&(s.callback=n),e=gi(t,s,i),e!==null&&(Wn(e,t,i,r),jc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=yi(t),s=xr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gi(t,s,i),e!==null&&(Wn(e,t,i,r),jc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),r=yi(t),i=xr(n,r);i.tag=2,e!=null&&(i.callback=e),e=gi(t,i,r),e!==null&&(Wn(e,t,r,n),jc(e,t,r))}};function Bw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Pl(n,r)||!Pl(i,s):!0}function _S(t,e,n){var r=!1,i=Ci,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(i=sn(e)?ps:Wt.current,r=e.contextTypes,s=(r=r!=null)?Po(t,i):Ci),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=md,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&md.enqueueReplaceState(e,e.state,null)}function dm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Kg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kn(s):(s=sn(e)?ps:Wt.current,i.context=Po(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&md.enqueueReplaceState(i,i.state,null),_h(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Oo(t,e){try{var n="",r=e;do n+=N1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iN=typeof WeakMap=="function"?WeakMap:Map;function yS(t,e,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Th||(Th=!0,Im=r),fm(t,e)},n}function vS(t,e,n){n=xr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fm(t,e),typeof r!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ww(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yN.bind(null,t,e,n),e.then(t,t))}function $w(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xr(-1,1),e.tag=2,gi(n,e,1))),n.lanes|=1),t)}var sN=$r.ReactCurrentOwner,tn=!1;function qt(t,e,n,r){e.child=t===null?GI(e,null,n,r):bo(e,t.child,n,r)}function qw(t,e,n,r,i){n=n.render;var s=e.ref;return Eo(e,i),r=Jg(t,e,n,r,s,i),n=Zg(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vr(t,e,i)):($e&&n&&Ug(e),e.flags|=1,qt(t,e,r,i),e.child)}function Kw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!u_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wS(t,e,s,r,i)):(t=$c(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pl,n(o,r)&&t.ref===e.ref)return Vr(t,e,i)}return e.flags|=1,t=vi(s,r),t.ref=e.ref,t.return=e,e.child=t}function wS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Pl(s,r)&&t.ref===e.ref)if(tn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,Vr(t,e,i)}return pm(t,e,n,r,i)}function ES(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(po,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,De(po,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,De(po,hn),hn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,De(po,hn),hn|=r;return qt(t,e,i,n),e.child}function TS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pm(t,e,n,r,i){var s=sn(n)?ps:Wt.current;return s=Po(e,s),Eo(e,i),n=Jg(t,e,n,r,s,i),r=Zg(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vr(t,e,i)):($e&&r&&Ug(e),e.flags|=1,qt(t,e,n,i),e.child)}function Gw(t,e,n,r,i){if(sn(n)){var s=!0;dh(e)}else s=!1;if(Eo(e,i),e.stateNode===null)Bc(t,e),_S(e,n,r),dm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=sn(n)?ps:Wt.current,c=Po(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&zw(e,o,r,c),ti=!1;var m=e.memoizedState;o.state=m,_h(e,r,o,i),l=e.memoizedState,a!==r||m!==l||rn.current||ti?(typeof h=="function"&&(hm(e,n,h,r),l=e.memoizedState),(a=ti||Bw(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,YI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Mn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=sn(n)?ps:Wt.current,l=Po(e,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&zw(e,o,r,l),ti=!1,m=e.memoizedState,o.state=m,_h(e,r,o,i);var w=e.memoizedState;a!==f||m!==w||rn.current||ti?(typeof v=="function"&&(hm(e,n,v,r),w=e.memoizedState),(c=ti||Bw(e,n,c,r,m,w,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return mm(t,e,n,r,s,i)}function mm(t,e,n,r,i,s){TS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Dw(e,n,!1),Vr(t,e,s);r=e.stateNode,sN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bo(e,t.child,null,s),e.child=bo(e,null,a,s)):qt(t,e,a,s),e.memoizedState=r.state,i&&Dw(e,n,!0),e.child}function IS(t){var e=t.stateNode;e.pendingContext?bw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bw(t,e.context,!1),Gg(t,e.containerInfo)}function Qw(t,e,n,r,i){return No(),zg(i),e.flags|=256,qt(t,e,n,r),e.child}var gm={dehydrated:null,treeContext:null,retryLane:0};function _m(t){return{baseLanes:t,cachePool:null,transitions:null}}function SS(t,e,n){var r=e.pendingProps,i=qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),De(qe,i&1),t===null)return um(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yd(o,r,0,null),t=cs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_m(n),e.memoizedState=gm,t):n_(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=vi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=vi(a,s):(s=cs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_m(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gm,r}return s=t.child,t=s.sibling,r=vi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function n_(t,e){return e=yd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yc(t,e,n,r){return r!==null&&zg(r),bo(e,t.child,null,n),t=n_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sp(Error(B(422))),yc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yd({mode:"visible",children:r.children},i,0,null),s=cs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bo(e,t.child,null,o),e.child.memoizedState=_m(o),e.memoizedState=gm,s);if(!(e.mode&1))return yc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=sp(s,r,void 0),yc(t,e,o,r)}if(a=(o&t.childLanes)!==0,tn||a){if(r=Tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mr(t,i),Wn(r,t,i,-1))}return l_(),r=sp(Error(B(421))),yc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dn=mi(i.nextSibling),pn=e,$e=!0,jn=null,t!==null&&(En[Tn++]=Er,En[Tn++]=Tr,En[Tn++]=ms,Er=t.id,Tr=t.overflow,ms=e),e=n_(e,r.children),e.flags|=4096,e)}function Yw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cm(t.return,e,n)}function op(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function CS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qt(t,e,r.children,n),r=qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yw(t,n,e);else if(t.tag===19)Yw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(De(qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),op(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}op(e,!0,n,null,s);break;case"together":op(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_s|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aN(t,e,n){switch(e.tag){case 3:IS(e),No();break;case 5:XI(e);break;case 1:sn(e.type)&&dh(e);break;case 4:Gg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;De(mh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(De(qe,qe.current&1),e.flags|=128,null):n&e.child.childLanes?SS(t,e,n):(De(qe,qe.current&1),t=Vr(t,e,n),t!==null?t.sibling:null);De(qe,qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return CS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(qe,qe.current),r)break;return null;case 22:case 23:return e.lanes=0,ES(t,e,n)}return Vr(t,e,n)}var kS,ym,xS,RS;kS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ym=function(){};xS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,rs(nr.current);var s=null;switch(n){case"input":i=Up(t,i),r=Up(t,r),s=[];break;case"select":i=Ye({},i,{value:void 0}),r=Ye({},r,{value:void 0}),s=[];break;case"textarea":i=Wp(t,i),r=Wp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ch)}Hp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Il.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Il.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Me("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};RS=function(t,e,n,r){n!==r&&(e.flags|=4)};function ja(t,e){if(!$e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lN(t,e,n){var r=e.pendingProps;switch(Bg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return sn(e.type)&&hh(),jt(e),null;case 3:return r=e.stateNode,Do(),je(rn),je(Wt),Yg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(km(jn),jn=null))),ym(t,e),jt(e),null;case 5:Qg(e);var i=rs(Ll.current);if(n=e.type,t!==null&&e.stateNode!=null)xS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return jt(e),null}if(t=rs(nr.current),gc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zn]=e,r[Dl]=s,t=(e.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<Ya.length;i++)Me(Ya[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":sw(r,s),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Me("invalid",r);break;case"textarea":aw(r,s),Me("invalid",r)}Hp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&mc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&mc(r.textContent,a,t),i=["children",""+a]):Il.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Me("scroll",r)}switch(n){case"input":ac(r),ow(r,s,!0);break;case"textarea":ac(r),lw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ch)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zn]=e,t[Dl]=r,kS(t,e,!1,!1),e.stateNode=t;e:{switch(o=qp(n,r),n){case"dialog":Me("cancel",t),Me("close",t),i=r;break;case"iframe":case"object":case"embed":Me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ya.length;i++)Me(Ya[i],t);i=r;break;case"source":Me("error",t),i=r;break;case"img":case"image":case"link":Me("error",t),Me("load",t),i=r;break;case"details":Me("toggle",t),i=r;break;case"input":sw(t,r),i=Up(t,r),Me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ye({},r,{value:void 0}),Me("invalid",t);break;case"textarea":aw(t,r),i=Wp(t,r),Me("invalid",t);break;default:i=r}Hp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?sI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sl(t,l):typeof l=="number"&&Sl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Il.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Me("scroll",t):l!=null&&kg(t,s,l,o))}switch(n){case"input":ac(t),ow(t,r,!1);break;case"textarea":ac(t),lw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Si(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_o(t,!!r.multiple,s,!1):r.defaultValue!=null&&_o(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ch)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)RS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=rs(Ll.current),rs(nr.current),gc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zn]=e,(s=r.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:mc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zn]=e,e.stateNode=r}return jt(e),null;case 13:if(je(qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($e&&dn!==null&&e.mode&1&&!(e.flags&128))qI(),No(),e.flags|=98560,s=!1;else if(s=gc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Zn]=e}else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else jn!==null&&(km(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||qe.current&1?ft===0&&(ft=3):l_())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Do(),ym(t,e),t===null&&Nl(e.stateNode.containerInfo),jt(e),null;case 10:return Hg(e.type._context),jt(e),null;case 17:return sn(e.type)&&hh(),jt(e),null;case 19:if(je(qe),s=e.memoizedState,s===null)return jt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ja(s,!1);else{if(ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yh(t),o!==null){for(e.flags|=128,ja(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return De(qe,qe.current&1|2),e.child}t=t.sibling}s.tail!==null&&rt()>Lo&&(e.flags|=128,r=!0,ja(s,!1),e.lanes=4194304)}else{if(!r)if(t=yh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ja(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return jt(e),null}else 2*rt()-s.renderingStartTime>Lo&&n!==1073741824&&(e.flags|=128,r=!0,ja(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rt(),e.sibling=null,n=qe.current,De(qe,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return a_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function uN(t,e){switch(Bg(e),e.tag){case 1:return sn(e.type)&&hh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Do(),je(rn),je(Wt),Yg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qg(e),null;case 13:if(je(qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));No()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(qe),null;case 4:return Do(),null;case 10:return Hg(e.type._context),null;case 22:case 23:return a_(),null;case 24:return null;default:return null}}var vc=!1,Bt=!1,cN=typeof WeakSet=="function"?WeakSet:Set,K=null;function fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){et(t,e,r)}else n.current=null}function vm(t,e,n){try{n()}catch(r){et(t,e,r)}}var Xw=!1;function hN(t,e){if(nm=ah,t=DI(),Fg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rm={focusedElem:t,selectionRange:n},ah=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var A=w.memoizedProps,P=w.memoizedState,T=e.stateNode,E=T.getSnapshotBeforeUpdate(e.elementType===e.type?A:Mn(e.type,A),P);T.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(D){et(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return w=Xw,Xw=!1,w}function ll(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vm(e,n,s)}i=i.next}while(i!==r)}}function gd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function AS(t){var e=t.alternate;e!==null&&(t.alternate=null,AS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Dl],delete e[om],delete e[KP],delete e[GP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function PS(t){return t.tag===5||t.tag===3||t.tag===4}function Jw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||PS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Em(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ch));else if(r!==4&&(t=t.child,t!==null))for(Em(t,e,n),t=t.sibling;t!==null;)Em(t,e,n),t=t.sibling}function Tm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tm(t,e,n),t=t.sibling;t!==null;)Tm(t,e,n),t=t.sibling}var xt=null,Vn=!1;function Jr(t,e,n){for(n=n.child;n!==null;)NS(t,e,n),n=n.sibling}function NS(t,e,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(ld,n)}catch{}switch(n.tag){case 5:Bt||fo(n,e);case 6:var r=xt,i=Vn;xt=null,Jr(t,e,n),xt=r,Vn=i,xt!==null&&(Vn?(t=xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(Vn?(t=xt,n=n.stateNode,t.nodeType===8?Zf(t.parentNode,n):t.nodeType===1&&Zf(t,n),Rl(t)):Zf(xt,n.stateNode));break;case 4:r=xt,i=Vn,xt=n.stateNode.containerInfo,Vn=!0,Jr(t,e,n),xt=r,Vn=i;break;case 0:case 11:case 14:case 15:if(!Bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vm(n,e,o),i=i.next}while(i!==r)}Jr(t,e,n);break;case 1:if(!Bt&&(fo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){et(n,e,a)}Jr(t,e,n);break;case 21:Jr(t,e,n);break;case 22:n.mode&1?(Bt=(r=Bt)||n.memoizedState!==null,Jr(t,e,n),Bt=r):Jr(t,e,n);break;default:Jr(t,e,n)}}function Zw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cN),e.forEach(function(r){var i=wN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xt=a.stateNode,Vn=!1;break e;case 3:xt=a.stateNode.containerInfo,Vn=!0;break e;case 4:xt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(xt===null)throw Error(B(160));NS(s,o,i),xt=null,Vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){et(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bS(e,t),e=e.sibling}function bS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Yn(t),r&4){try{ll(3,t,t.return),gd(3,t)}catch(A){et(t,t.return,A)}try{ll(5,t,t.return)}catch(A){et(t,t.return,A)}}break;case 1:On(e,t),Yn(t),r&512&&n!==null&&fo(n,n.return);break;case 5:if(On(e,t),Yn(t),r&512&&n!==null&&fo(n,n.return),t.flags&32){var i=t.stateNode;try{Sl(i,"")}catch(A){et(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&eI(i,s),qp(a,o);var c=qp(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?sI(i,f):h==="dangerouslySetInnerHTML"?rI(i,f):h==="children"?Sl(i,f):kg(i,h,f,c)}switch(a){case"input":Bp(i,s);break;case"textarea":tI(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?_o(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?_o(i,!!s.multiple,s.defaultValue,!0):_o(i,!!s.multiple,s.multiple?[]:"",!1))}i[Dl]=s}catch(A){et(t,t.return,A)}}break;case 6:if(On(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){et(t,t.return,A)}}break;case 3:if(On(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rl(e.containerInfo)}catch(A){et(t,t.return,A)}break;case 4:On(e,t),Yn(t);break;case 13:On(e,t),Yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(s_=rt())),r&4&&Zw(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||h,On(e,t),Bt=c):On(e,t),Yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(K=t,h=t.child;h!==null;){for(f=K=h;K!==null;){switch(m=K,v=m.child,m.tag){case 0:case 11:case 14:case 15:ll(4,m,m.return);break;case 1:fo(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(A){et(r,n,A)}}break;case 5:fo(m,m.return);break;case 22:if(m.memoizedState!==null){t0(f);continue}}v!==null?(v.return=m,K=v):t0(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=iI("display",o))}catch(A){et(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){et(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:On(e,t),Yn(t),r&4&&Zw(t);break;case 21:break;default:On(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(PS(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sl(i,""),r.flags&=-33);var s=Jw(t);Tm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Jw(t);Em(t,a,o);break;default:throw Error(B(161))}}catch(l){et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dN(t,e,n){K=t,DS(t)}function DS(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=vc;var c=Bt;if(vc=o,(Bt=l)&&!c)for(K=i;K!==null;)o=K,l=o.child,o.tag===22&&o.memoizedState!==null?n0(i):l!==null?(l.return=o,K=l):n0(i);for(;s!==null;)K=s,DS(s),s=s.sibling;K=i,vc=a,Bt=c}e0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):e0(t)}}function e0(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||gd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Rl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Bt||e.flags&512&&wm(e)}catch(m){et(e,e.return,m)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function t0(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function n0(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gd(4,e)}catch(l){et(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){et(e,i,l)}}var s=e.return;try{wm(e)}catch(l){et(e,s,l)}break;case 5:var o=e.return;try{wm(e)}catch(l){et(e,o,l)}}}catch(l){et(e,e.return,l)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var fN=Math.ceil,Eh=$r.ReactCurrentDispatcher,r_=$r.ReactCurrentOwner,Cn=$r.ReactCurrentBatchConfig,ge=0,Tt=null,ot=null,At=0,hn=0,po=Mi(0),ft=0,Fl=null,_s=0,_d=0,i_=0,ul=null,Zt=null,s_=0,Lo=1/0,_r=null,Th=!1,Im=null,_i=null,wc=!1,li=null,Ih=0,cl=0,Sm=null,zc=-1,Wc=0;function Gt(){return ge&6?rt():zc!==-1?zc:zc=rt()}function yi(t){return t.mode&1?ge&2&&At!==0?At&-At:YP.transition!==null?(Wc===0&&(Wc=_I()),Wc):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:SI(t.type)),t):1}function Wn(t,e,n,r){if(50<cl)throw cl=0,Sm=null,Error(B(185));cu(t,n,r),(!(ge&2)||t!==Tt)&&(t===Tt&&(!(ge&2)&&(_d|=n),ft===4&&ri(t,At)),on(t,r),n===1&&ge===0&&!(e.mode&1)&&(Lo=rt()+500,fd&&Vi()))}function on(t,e){var n=t.callbackNode;Y1(t,e);var r=oh(t,t===Tt?At:0);if(r===0)n!==null&&hw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hw(n),e===1)t.tag===0?QP(r0.bind(null,t)):WI(r0.bind(null,t)),HP(function(){!(ge&6)&&Vi()}),n=null;else{switch(yI(r)){case 1:n=Ng;break;case 4:n=mI;break;case 16:n=sh;break;case 536870912:n=gI;break;default:n=sh}n=BS(n,OS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function OS(t,e){if(zc=-1,Wc=0,ge&6)throw Error(B(327));var n=t.callbackNode;if(To()&&t.callbackNode!==n)return null;var r=oh(t,t===Tt?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sh(t,r);else{e=r;var i=ge;ge|=2;var s=MS();(Tt!==t||At!==e)&&(_r=null,Lo=rt()+500,us(t,e));do try{gN();break}catch(a){LS(t,a)}while(!0);$g(),Eh.current=s,ge=i,ot!==null?e=0:(Tt=null,At=0,e=ft)}if(e!==0){if(e===2&&(i=Xp(t),i!==0&&(r=i,e=Cm(t,i))),e===1)throw n=Fl,us(t,0),ri(t,r),on(t,rt()),n;if(e===6)ri(t,r);else{if(i=t.current.alternate,!(r&30)&&!pN(i)&&(e=Sh(t,r),e===2&&(s=Xp(t),s!==0&&(r=s,e=Cm(t,s))),e===1))throw n=Fl,us(t,0),ri(t,r),on(t,rt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Xi(t,Zt,_r);break;case 3:if(ri(t,r),(r&130023424)===r&&(e=s_+500-rt(),10<e)){if(oh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sm(Xi.bind(null,t,Zt,_r),e);break}Xi(t,Zt,_r);break;case 4:if(ri(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=rt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fN(r/1960))-r,10<r){t.timeoutHandle=sm(Xi.bind(null,t,Zt,_r),r);break}Xi(t,Zt,_r);break;case 5:Xi(t,Zt,_r);break;default:throw Error(B(329))}}}return on(t,rt()),t.callbackNode===n?OS.bind(null,t):null}function Cm(t,e){var n=ul;return t.current.memoizedState.isDehydrated&&(us(t,e).flags|=256),t=Sh(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&km(e)),t}function km(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function pN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ri(t,e){for(e&=~i_,e&=~_d,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),r=1<<n;t[n]=-1,e&=~r}}function r0(t){if(ge&6)throw Error(B(327));To();var e=oh(t,0);if(!(e&1))return on(t,rt()),null;var n=Sh(t,e);if(t.tag!==0&&n===2){var r=Xp(t);r!==0&&(e=r,n=Cm(t,r))}if(n===1)throw n=Fl,us(t,0),ri(t,e),on(t,rt()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xi(t,Zt,_r),on(t,rt()),null}function o_(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(Lo=rt()+500,fd&&Vi())}}function ys(t){li!==null&&li.tag===0&&!(ge&6)&&To();var e=ge;ge|=1;var n=Cn.transition,r=Ie;try{if(Cn.transition=null,Ie=1,t)return t()}finally{Ie=r,Cn.transition=n,ge=e,!(ge&6)&&Vi()}}function a_(){hn=po.current,je(po)}function us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$P(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(Bg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hh();break;case 3:Do(),je(rn),je(Wt),Yg();break;case 5:Qg(r);break;case 4:Do();break;case 13:je(qe);break;case 19:je(qe);break;case 10:Hg(r.type._context);break;case 22:case 23:a_()}n=n.return}if(Tt=t,ot=t=vi(t.current,null),At=hn=e,ft=0,Fl=null,i_=_d=_s=0,Zt=ul=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ns=null}return t}function LS(t,e){do{var n=ot;try{if($g(),Fc.current=wh,vh){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vh=!1}if(gs=0,yt=ht=Qe=null,al=!1,Ml=0,r_.current=null,n===null||n.return===null){ft=1,Fl=e,ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=At,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=$w(o);if(v!==null){v.flags&=-257,Hw(v,o,a,s,e),v.mode&1&&Ww(s,c,e),e=v,l=c;var w=e.updateQueue;if(w===null){var A=new Set;A.add(l),e.updateQueue=A}else w.add(l);break e}else{if(!(e&1)){Ww(s,c,e),l_();break e}l=Error(B(426))}}else if($e&&a.mode&1){var P=$w(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Hw(P,o,a,s,e),zg(Oo(l,a));break e}}s=l=Oo(l,a),ft!==4&&(ft=2),ul===null?ul=[s]:ul.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=yS(s,l,e);Vw(s,T);break e;case 1:a=l;var E=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(_i===null||!_i.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=vS(s,a,e);Vw(s,D);break e}}s=s.return}while(s!==null)}jS(n)}catch(F){e=F,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(!0)}function MS(){var t=Eh.current;return Eh.current=wh,t===null?wh:t}function l_(){(ft===0||ft===3||ft===2)&&(ft=4),Tt===null||!(_s&268435455)&&!(_d&268435455)||ri(Tt,At)}function Sh(t,e){var n=ge;ge|=2;var r=MS();(Tt!==t||At!==e)&&(_r=null,us(t,e));do try{mN();break}catch(i){LS(t,i)}while(!0);if($g(),ge=n,Eh.current=r,ot!==null)throw Error(B(261));return Tt=null,At=0,ft}function mN(){for(;ot!==null;)VS(ot)}function gN(){for(;ot!==null&&!B1();)VS(ot)}function VS(t){var e=US(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?jS(t):ot=e,r_.current=null}function jS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uN(n,e),n!==null){n.flags&=32767,ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ft=6,ot=null;return}}else if(n=lN(n,e,hn),n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);ft===0&&(ft=5)}function Xi(t,e,n){var r=Ie,i=Cn.transition;try{Cn.transition=null,Ie=1,_N(t,e,n,r)}finally{Cn.transition=i,Ie=r}return null}function _N(t,e,n,r){do To();while(li!==null);if(ge&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(X1(t,s),t===Tt&&(ot=Tt=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wc||(wc=!0,BS(sh,function(){return To(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=Ie;Ie=1;var a=ge;ge|=4,r_.current=null,hN(t,n),bS(n,t),VP(rm),ah=!!nm,rm=nm=null,t.current=n,dN(n),z1(),ge=a,Ie=o,Cn.transition=s}else t.current=n;if(wc&&(wc=!1,li=t,Ih=i),s=t.pendingLanes,s===0&&(_i=null),H1(n.stateNode),on(t,rt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Th)throw Th=!1,t=Im,Im=null,t;return Ih&1&&t.tag!==0&&To(),s=t.pendingLanes,s&1?t===Sm?cl++:(cl=0,Sm=t):cl=0,Vi(),null}function To(){if(li!==null){var t=yI(Ih),e=Cn.transition,n=Ie;try{if(Cn.transition=null,Ie=16>t?16:t,li===null)var r=!1;else{if(t=li,li=null,Ih=0,ge&6)throw Error(B(331));var i=ge;for(ge|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(K=c;K!==null;){var h=K;switch(h.tag){case 0:case 11:case 15:ll(8,h,s)}var f=h.child;if(f!==null)f.return=h,K=f;else for(;K!==null;){h=K;var m=h.sibling,v=h.return;if(AS(h),h===c){K=null;break}if(m!==null){m.return=v,K=m;break}K=v}}}var w=s.alternate;if(w!==null){var A=w.child;if(A!==null){w.child=null;do{var P=A.sibling;A.sibling=null,A=P}while(A!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ll(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,K=T;break e}K=s.return}}var E=t.current;for(K=E;K!==null;){o=K;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,K=I;else e:for(o=E;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gd(9,a)}}catch(F){et(a,a.return,F)}if(a===o){K=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,K=D;break e}K=a.return}}if(ge=i,Vi(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(ld,t)}catch{}r=!0}return r}finally{Ie=n,Cn.transition=e}}return!1}function i0(t,e,n){e=Oo(n,e),e=yS(t,e,1),t=gi(t,e,1),e=Gt(),t!==null&&(cu(t,1,e),on(t,e))}function et(t,e,n){if(t.tag===3)i0(t,t,n);else for(;e!==null;){if(e.tag===3){i0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_i===null||!_i.has(r))){t=Oo(n,t),t=vS(e,t,1),e=gi(e,t,1),t=Gt(),e!==null&&(cu(e,1,t),on(e,t));break}}e=e.return}}function yN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(At&n)===n&&(ft===4||ft===3&&(At&130023424)===At&&500>rt()-s_?us(t,0):i_|=n),on(t,e)}function FS(t,e){e===0&&(t.mode&1?(e=cc,cc<<=1,!(cc&130023424)&&(cc=4194304)):e=1);var n=Gt();t=Mr(t,e),t!==null&&(cu(t,e,n),on(t,n))}function vN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),FS(t,n)}function wN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),FS(t,n)}var US;US=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,aN(t,e,n);tn=!!(t.flags&131072)}else tn=!1,$e&&e.flags&1048576&&$I(e,ph,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bc(t,e),t=e.pendingProps;var i=Po(e,Wt.current);Eo(e,n),i=Jg(null,e,r,t,i,n);var s=Zg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(r)?(s=!0,dh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kg(e),i.updater=md,e.stateNode=i,i._reactInternals=e,dm(e,r,t,n),e=mm(null,e,r,!0,s,n)):(e.tag=0,$e&&s&&Ug(e),qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TN(r),t=Mn(r,t),i){case 0:e=pm(null,e,r,t,n);break e;case 1:e=Gw(null,e,r,t,n);break e;case 11:e=qw(null,e,r,t,n);break e;case 14:e=Kw(null,e,r,Mn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),pm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Gw(t,e,r,i,n);case 3:e:{if(IS(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,YI(t,e),_h(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Oo(Error(B(423)),e),e=Qw(t,e,r,n,i);break e}else if(r!==i){i=Oo(Error(B(424)),e),e=Qw(t,e,r,n,i);break e}else for(dn=mi(e.stateNode.containerInfo.firstChild),pn=e,$e=!0,jn=null,n=GI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(No(),r===i){e=Vr(t,e,n);break e}qt(t,e,r,n)}e=e.child}return e;case 5:return XI(e),t===null&&um(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,im(r,i)?o=null:s!==null&&im(r,s)&&(e.flags|=32),TS(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&um(e),null;case 13:return SS(t,e,n);case 4:return Gg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bo(e,null,r,n):qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),qw(t,e,r,i,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,De(mh,r._currentValue),r._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===i.children&&!rn.current){e=Vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=xr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Eo(e,n),i=kn(i),r=r(i),e.flags|=1,qt(t,e,r,n),e.child;case 14:return r=e.type,i=Mn(r,e.pendingProps),i=Mn(r.type,i),Kw(t,e,r,i,n);case 15:return wS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Bc(t,e),e.tag=1,sn(r)?(t=!0,dh(e)):t=!1,Eo(e,n),_S(e,r,i),dm(e,r,i,n),mm(null,e,r,!0,t,n);case 19:return CS(t,e,n);case 22:return ES(t,e,n)}throw Error(B(156,e.tag))};function BS(t,e){return pI(t,e)}function EN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new EN(t,e,n,r)}function u_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TN(t){if(typeof t=="function")return u_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rg)return 11;if(t===Ag)return 14}return 2}function vi(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $c(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")u_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ro:return cs(n.children,i,s,e);case xg:o=8,i|=8;break;case Mp:return t=In(12,n,e,i|2),t.elementType=Mp,t.lanes=s,t;case Vp:return t=In(13,n,e,i),t.elementType=Vp,t.lanes=s,t;case jp:return t=In(19,n,e,i),t.elementType=jp,t.lanes=s,t;case XT:return yd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case QT:o=10;break e;case YT:o=9;break e;case Rg:o=11;break e;case Ag:o=14;break e;case ei:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=In(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function cs(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function yd(t,e,n,r){return t=In(22,t,r,e),t.elementType=XT,t.lanes=n,t.stateNode={isHidden:!1},t}function ap(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function lp(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zf(0),this.expirationTimes=zf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function c_(t,e,n,r,i,s,o,a,l){return t=new IN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kg(s),t}function SN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zS(t){if(!t)return Ci;t=t._reactInternals;e:{if(Ds(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(sn(n))return zI(t,n,e)}return e}function WS(t,e,n,r,i,s,o,a,l){return t=c_(n,r,!0,t,i,s,o,a,l),t.context=zS(null),n=t.current,r=Gt(),i=yi(n),s=xr(r,i),s.callback=e??null,gi(n,s,i),t.current.lanes=i,cu(t,i,r),on(t,r),t}function vd(t,e,n,r){var i=e.current,s=Gt(),o=yi(i);return n=zS(n),e.context===null?e.context=n:e.pendingContext=n,e=xr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gi(i,e,o),t!==null&&(Wn(t,i,o,s),jc(t,i,o)),o}function Ch(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function s0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function h_(t,e){s0(t,e),(t=t.alternate)&&s0(t,e)}function CN(){return null}var $S=typeof reportError=="function"?reportError:function(t){console.error(t)};function d_(t){this._internalRoot=t}wd.prototype.render=d_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));vd(t,e,null,null)};wd.prototype.unmount=d_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ys(function(){vd(null,t,null,null)}),e[Lr]=null}};function wd(t){this._internalRoot=t}wd.prototype.unstable_scheduleHydration=function(t){if(t){var e=EI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ni.length&&e!==0&&e<ni[n].priority;n++);ni.splice(n,0,t),n===0&&II(t)}};function f_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ed(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function o0(){}function kN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ch(o);s.call(c)}}var o=WS(e,r,t,0,null,!1,!1,"",o0);return t._reactRootContainer=o,t[Lr]=o.current,Nl(t.nodeType===8?t.parentNode:t),ys(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ch(l);a.call(c)}}var l=c_(t,0,!1,null,null,!1,!1,"",o0);return t._reactRootContainer=l,t[Lr]=l.current,Nl(t.nodeType===8?t.parentNode:t),ys(function(){vd(e,l,n,r)}),l}function Td(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ch(o);a.call(l)}}vd(e,o,t,i)}else o=kN(n,e,t,i,r);return Ch(o)}vI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qa(e.pendingLanes);n!==0&&(bg(e,n|1),on(e,rt()),!(ge&6)&&(Lo=rt()+500,Vi()))}break;case 13:ys(function(){var r=Mr(t,1);if(r!==null){var i=Gt();Wn(r,t,1,i)}}),h_(t,1)}};Dg=function(t){if(t.tag===13){var e=Mr(t,134217728);if(e!==null){var n=Gt();Wn(e,t,134217728,n)}h_(t,134217728)}};wI=function(t){if(t.tag===13){var e=yi(t),n=Mr(t,e);if(n!==null){var r=Gt();Wn(n,t,e,r)}h_(t,e)}};EI=function(){return Ie};TI=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};Gp=function(t,e,n){switch(e){case"input":if(Bp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=dd(r);if(!i)throw Error(B(90));ZT(r),Bp(r,i)}}}break;case"textarea":tI(t,n);break;case"select":e=n.value,e!=null&&_o(t,!!n.multiple,e,!1)}};lI=o_;uI=ys;var xN={usingClientEntryPoint:!1,Events:[du,ao,dd,oI,aI,o_]},Fa={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RN={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dI(t),t===null?null:t.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||CN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{ld=Ec.inject(RN),tr=Ec}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xN;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f_(e))throw Error(B(200));return SN(t,e,null,n)};_n.createRoot=function(t,e){if(!f_(t))throw Error(B(299));var n=!1,r="",i=$S;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=c_(t,1,!1,null,null,n,!1,r,i),t[Lr]=e.current,Nl(t.nodeType===8?t.parentNode:t),new d_(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=dI(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return ys(t)};_n.hydrate=function(t,e,n){if(!Ed(e))throw Error(B(200));return Td(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!f_(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$S;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=WS(e,null,t,1,n??null,i,!1,s,o),t[Lr]=e.current,Nl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wd(e)};_n.render=function(t,e,n){if(!Ed(e))throw Error(B(200));return Td(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!Ed(t))throw Error(B(40));return t._reactRootContainer?(ys(function(){Td(null,null,t,!1,function(){t._reactRootContainer=null,t[Lr]=null})}),!0):!1};_n.unstable_batchedUpdates=o_;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ed(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Td(t,e,n,!1,r)};_n.version="18.3.1-next-f1338f8080-20240426";function HS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(HS)}catch(t){console.error(t)}}HS(),HT.exports=_n;var AN=HT.exports,a0=AN;Op.createRoot=a0.createRoot,Op.hydrateRoot=a0.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ul.apply(this,arguments)}var ui;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ui||(ui={}));const l0="popstate";function PN(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Os(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),xm("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:qS(s))}function r(i,s){Id(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return bN(e,n,r,t)}function lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Id(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NN(){return Math.random().toString(36).substr(2,8)}function u0(t,e){return{usr:t.state,key:t.key,idx:e}}function xm(t,e,n,r){return n===void 0&&(n=null),Ul({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:n,key:e&&e.key||r||NN()})}function qS(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function bN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ui.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Ul({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=ui.Pop;let P=h(),T=P==null?null:P-c;c=P,l&&l({action:a,location:A.location,delta:T})}function m(P,T){a=ui.Push;let E=xm(A.location,P,T);n&&n(E,P),c=h()+1;let I=u0(E,c),D=A.createHref(E);try{o.pushState(I,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}s&&l&&l({action:a,location:A.location,delta:1})}function v(P,T){a=ui.Replace;let E=xm(A.location,P,T);n&&n(E,P),c=h();let I=u0(E,c),D=A.createHref(E);o.replaceState(I,"",D),s&&l&&l({action:a,location:A.location,delta:0})}function w(P){let T=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof P=="string"?P:qS(P);return E=E.replace(/ $/,"%20"),lt(T,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,T)}let A={get action(){return a},get location(){return t(i,o)},listen(P){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(l0,f),l=P,()=>{i.removeEventListener(l0,f),l=null}},createHref(P){return e(i,P)},createURL:w,encodeLocation(P){let T=w(P);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:v,go(P){return o.go(P)}};return A}var c0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(c0||(c0={}));function DN(t,e,n){return n===void 0&&(n="/"),ON(t,e,n)}function ON(t,e,n,r){let i=typeof e=="string"?Os(e):e,s=QS(i.pathname||"/",n);if(s==null)return null;let o=KS(t);LN(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=KN(s);a=$N(o[l],c)}return a}function KS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(lt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=hs([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(lt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),KS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:zN(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of GS(s.path))i(s,o,l)}),e}function GS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=GS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function LN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const MN=/^:[\w-]+$/,VN=3,jN=2,FN=1,UN=10,BN=-2,h0=t=>t==="*";function zN(t,e){let n=t.split("/"),r=n.length;return n.some(h0)&&(r+=BN),e&&(r+=jN),n.filter(i=>!h0(i)).reduce((i,s)=>i+(MN.test(s)?VN:s===""?FN:UN),r)}function WN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function $N(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=HN({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),m=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:hs([s,f.pathname]),pathnameBase:JN(hs([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=hs([s,f.pathnameBase]))}return o}function HN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:v}=h;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const w=a[f];return v&&!w?c[m]=void 0:c[m]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function qN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Id(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function KN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Id(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function QS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const GN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,QN=t=>GN.test(t);function YN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Os(t):t,s;if(n)if(QN(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Id(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=d0(n.substring(1),"/"):s=d0(n,e)}else s=e;return{pathname:s,search:ZN(r),hash:eb(i)}}function d0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function up(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function XN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function YS(t,e){let n=XN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function XS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Os(t):(i=Ul({},t),lt(!i.pathname||!i.pathname.includes("?"),up("?","pathname","search",i)),lt(!i.pathname||!i.pathname.includes("#"),up("#","pathname","hash",i)),lt(!i.search||!i.search.includes("#"),up("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=YN(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const hs=t=>t.join("/").replace(/\/\/+/g,"/"),JN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ZN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const JS=["post","put","patch","delete"];new Set(JS);const nb=["get",...JS];new Set(nb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bl.apply(this,arguments)}const p_=b.createContext(null),rb=b.createContext(null),pu=b.createContext(null),Sd=b.createContext(null),ji=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ZS=b.createContext(null);function mu(){return b.useContext(Sd)!=null}function Cd(){return mu()||lt(!1),b.useContext(Sd).location}function eC(t){b.useContext(pu).static||b.useLayoutEffect(t)}function Nn(){let{isDataRoute:t}=b.useContext(ji);return t?gb():ib()}function ib(){mu()||lt(!1);let t=b.useContext(p_),{basename:e,future:n,navigator:r}=b.useContext(pu),{matches:i}=b.useContext(ji),{pathname:s}=Cd(),o=JSON.stringify(YS(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return eC(()=>{a.current=!0}),b.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=XS(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:hs([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function tC(){let{matches:t}=b.useContext(ji),e=t[t.length-1];return e?e.params:{}}function sb(t,e){return ob(t,e)}function ob(t,e,n,r){mu()||lt(!1);let{navigator:i}=b.useContext(pu),{matches:s}=b.useContext(ji),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Cd(),h;if(e){var f;let P=typeof e=="string"?Os(e):e;l==="/"||(f=P.pathname)!=null&&f.startsWith(l)||lt(!1),h=P}else h=c;let m=h.pathname||"/",v=m;if(l!=="/"){let P=l.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let w=DN(t,{pathname:v}),A=hb(w&&w.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:hs([l,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?l:hs([l,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&A?b.createElement(Sd.Provider,{value:{location:Bl({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ui.Pop}},A):A}function ab(){let t=mb(),e=tb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const lb=b.createElement(ab,null);class ub extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(ji.Provider,{value:this.props.routeContext},b.createElement(ZS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cb(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(p_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(ji.Provider,{value:e},r)}function hb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||lt(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:v}=n,w=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||w){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let v,w=!1,A=null,P=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||lb,l&&(c<0&&m===0?(_b("route-fallback"),w=!0,P=null):c===m&&(w=!0,P=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),E=()=>{let I;return v?I=A:w?I=P:f.route.Component?I=b.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=h,b.createElement(cb,{match:f,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?b.createElement(ub,{location:n.location,revalidation:n.revalidation,component:A,error:v,children:E(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):E()},null)}var nC=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(nC||{}),rC=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(rC||{});function db(t){let e=b.useContext(p_);return e||lt(!1),e}function fb(t){let e=b.useContext(rb);return e||lt(!1),e}function pb(t){let e=b.useContext(ji);return e||lt(!1),e}function iC(t){let e=pb(),n=e.matches[e.matches.length-1];return n.route.id||lt(!1),n.route.id}function mb(){var t;let e=b.useContext(ZS),n=fb(),r=iC();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function gb(){let{router:t}=db(nC.UseNavigateStable),e=iC(rC.UseNavigateStable),n=b.useRef(!1);return eC(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bl({fromRouteId:e},s)))},[t,e])}const f0={};function _b(t,e,n){f0[t]||(f0[t]=!0)}function yb(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function sC(t){let{to:e,replace:n,state:r,relative:i}=t;mu()||lt(!1);let{future:s,static:o}=b.useContext(pu),{matches:a}=b.useContext(ji),{pathname:l}=Cd(),c=Nn(),h=XS(e,YS(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(h);return b.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Ln(t){lt(!1)}function vb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ui.Pop,navigator:s,static:o=!1,future:a}=t;mu()&&lt(!1);let l=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:l,navigator:s,static:o,future:Bl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Os(r));let{pathname:h="/",search:f="",hash:m="",state:v=null,key:w="default"}=r,A=b.useMemo(()=>{let P=QS(h,l);return P==null?null:{location:{pathname:P,search:f,hash:m,state:v,key:w},navigationType:i}},[l,h,f,m,v,w,i]);return A==null?null:b.createElement(pu.Provider,{value:c},b.createElement(Sd.Provider,{children:n,value:A}))}function wb(t){let{children:e,location:n}=t;return sb(Rm(e),n)}new Promise(()=>{});function Rm(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Rm(r.props.children,s));return}r.type!==Ln&&lt(!1),!r.props.index||!r.props.children||lt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Rm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Eb="6";try{window.__reactRouterVersion=Eb}catch{}const Tb="startTransition",p0=y1[Tb];function Ib(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=PN({window:i,v5Compat:!0}));let o=s.current,[a,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=b.useCallback(f=>{c&&p0?p0(()=>l(f)):l(f)},[l,c]);return b.useLayoutEffect(()=>o.listen(h),[o,h]),b.useEffect(()=>yb(r),[r]),b.createElement(vb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var m0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(m0||(m0={}));var g0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(g0||(g0={}));var _0={};/**
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
 */const oC={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const W=function(t,e){if(!t)throw sa(e)},sa=function(t){return new Error("Firebase Database ("+oC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const aC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},m_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(m=64)),r.push(n[h],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Cb;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lC=function(t){const e=aC(t);return m_.encodeByteArray(e,!0)},kh=function(t){return lC(t).replace(/\./g,"")},xh=function(t){try{return m_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kb(t){return uC(void 0,t)}function uC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xb(n)||(t[n]=uC(t[n],e[n]));return t}function xb(t){return t!=="__proto__"}/**
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
 */function Rb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ab=()=>Rb().__FIREBASE_DEFAULTS__,Pb=()=>{if(typeof process>"u"||typeof _0>"u")return;const t=_0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xh(t[1]);return e&&JSON.parse(e)},kd=()=>{try{return Ab()||Pb()||Nb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cC=t=>{var e,n;return(n=(e=kd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hC=t=>{const e=cC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dC=()=>{var t;return(t=kd())===null||t===void 0?void 0:t.config},fC=t=>{var e;return(e=kd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function pC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kh(JSON.stringify(n)),kh(JSON.stringify(o)),""].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function bb(){var t;const e=(t=kd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Db(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ob(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lb(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mb(){return oC.NODE_ADMIN===!0}function Vb(){return!bb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gC(){try{return typeof indexedDB=="object"}catch{return!1}}function _C(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function jb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Fb="FirebaseError";class ur extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Fb,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ub(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ur(i,a,r)}}function Ub(t,e){return t.replace(Bb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bb=/\{\$([^}]+)}/g;/**
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
 */function zl(t){return JSON.parse(t)}function dt(t){return JSON.stringify(t)}/**
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
 */const yC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=zl(xh(s[0])||""),n=zl(xh(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},zb=function(t){const e=yC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Wb=function(t){const e=yC(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function cr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Mo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ah(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Vo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(y0(s)&&y0(o)){if(!Vo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function y0(t){return t!==null&&typeof t=="object"}/**
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
 */function oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ja(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class $b{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const m=(i<<5|i>>>27)+c+l+h+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Hb(t,e){const n=new qb(t,e);return n.subscribe.bind(n)}class qb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Kb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=cp),i.error===void 0&&(i.error=cp),i.complete===void 0&&(i.complete=cp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cp(){}function jo(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Gb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,W(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}class Rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Qb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new er;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xb(e))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ji){return this.instances.has(e)}getOptions(e=Ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ji){return this.component?this.component.multipleInstances?e:Ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yb(t){return t===Ji?void 0:t}function Xb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Jb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Zb={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},e2=fe.INFO,t2={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},n2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=t2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rd{constructor(e){this.name=e,this._logLevel=e2,this._logHandler=n2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const r2=(t,e)=>e.some(n=>t instanceof n);let v0,w0;function i2(){return v0||(v0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s2(){return w0||(w0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vC=new WeakMap,Am=new WeakMap,wC=new WeakMap,hp=new WeakMap,__=new WeakMap;function o2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vC.set(n,t)}).catch(()=>{}),__.set(e,t),e}function a2(t){if(Am.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Am.set(t,e)}let Pm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Am.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function l2(t){Pm=t(Pm)}function u2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dp(this),e,...n);return wC.set(r,e.sort?e.sort():[e]),Rr(r)}:s2().includes(t)?function(...e){return t.apply(dp(this),e),Rr(vC.get(this))}:function(...e){return Rr(t.apply(dp(this),e))}}function c2(t){return typeof t=="function"?u2(t):(t instanceof IDBTransaction&&a2(t),r2(t,i2())?new Proxy(t,Pm):t)}function Rr(t){if(t instanceof IDBRequest)return o2(t);if(hp.has(t))return hp.get(t);const e=c2(t);return e!==t&&(hp.set(t,e),__.set(e,t)),e}const dp=t=>__.get(t);function Ad(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function fp(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Rr(n).then(()=>{})}const h2=["get","getKey","getAll","getAllKeys","count"],d2=["put","add","delete","clear"],pp=new Map;function E0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pp.get(e))return pp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=d2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||h2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return pp.set(e,s),s}l2(t=>({...t,get:(e,n,r)=>E0(e,n)||t.get(e,n,r),has:(e,n)=>!!E0(e,n)||t.has(e,n)}));/**
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
 */class f2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function p2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nm="@firebase/app",T0="0.10.13";/**
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
 */const jr=new Rd("@firebase/app"),m2="@firebase/app-compat",g2="@firebase/analytics-compat",_2="@firebase/analytics",y2="@firebase/app-check-compat",v2="@firebase/app-check",w2="@firebase/auth",E2="@firebase/auth-compat",T2="@firebase/database",I2="@firebase/data-connect",S2="@firebase/database-compat",C2="@firebase/functions",k2="@firebase/functions-compat",x2="@firebase/installations",R2="@firebase/installations-compat",A2="@firebase/messaging",P2="@firebase/messaging-compat",N2="@firebase/performance",b2="@firebase/performance-compat",D2="@firebase/remote-config",O2="@firebase/remote-config-compat",L2="@firebase/storage",M2="@firebase/storage-compat",V2="@firebase/firestore",j2="@firebase/vertexai-preview",F2="@firebase/firestore-compat",U2="firebase",B2="10.14.1";/**
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
 */const bm="[DEFAULT]",z2={[Nm]:"fire-core",[m2]:"fire-core-compat",[_2]:"fire-analytics",[g2]:"fire-analytics-compat",[v2]:"fire-app-check",[y2]:"fire-app-check-compat",[w2]:"fire-auth",[E2]:"fire-auth-compat",[T2]:"fire-rtdb",[I2]:"fire-data-connect",[S2]:"fire-rtdb-compat",[C2]:"fire-fn",[k2]:"fire-fn-compat",[x2]:"fire-iid",[R2]:"fire-iid-compat",[A2]:"fire-fcm",[P2]:"fire-fcm-compat",[N2]:"fire-perf",[b2]:"fire-perf-compat",[D2]:"fire-rc",[O2]:"fire-rc-compat",[L2]:"fire-gcs",[M2]:"fire-gcs-compat",[V2]:"fire-fst",[F2]:"fire-fst-compat",[j2]:"fire-vertex","fire-js":"fire-js",[U2]:"fire-js-all"};/**
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
 */const Ph=new Map,W2=new Map,Dm=new Map;function I0(t,e){try{t.container.addComponent(e)}catch(n){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gn(t){const e=t.name;if(Dm.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;Dm.set(e,t);for(const n of Ph.values())I0(n,t);for(const n of W2.values())I0(n,t);return!0}function Ms(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Un(t){return t.settings!==void 0}/**
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
 */const $2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wi=new Ls("app","Firebase",$2);/**
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
 */class H2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=B2;function EC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wi.create("bad-app-name",{appName:String(i)});if(n||(n=dC()),!n)throw wi.create("no-options");const s=Ph.get(i);if(s){if(Vo(n,s.options)&&Vo(r,s.config))return s;throw wi.create("duplicate-app",{appName:i})}const o=new Jb(i);for(const l of Dm.values())o.addComponent(l);const a=new H2(n,r,o);return Ph.set(i,a),a}function Pd(t=bm){const e=Ph.get(t);if(!e&&t===bm&&dC())return EC();if(!e)throw wi.create("no-app",{appName:t});return e}function an(t,e,n){var r;let i=(r=z2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(a.join(" "));return}Gn(new Rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const q2="firebase-heartbeat-database",K2=1,Wl="firebase-heartbeat-store";let mp=null;function TC(){return mp||(mp=Ad(q2,K2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wl)}catch(n){console.warn(n)}}}}).catch(t=>{throw wi.create("idb-open",{originalErrorMessage:t.message})})),mp}async function G2(t){try{const n=(await TC()).transaction(Wl),r=await n.objectStore(Wl).get(IC(t));return await n.done,r}catch(e){if(e instanceof ur)jr.warn(e.message);else{const n=wi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(n.message)}}}async function S0(t,e){try{const r=(await TC()).transaction(Wl,"readwrite");await r.objectStore(Wl).put(e,IC(t)),await r.done}catch(n){if(n instanceof ur)jr.warn(n.message);else{const r=wi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jr.warn(r.message)}}}function IC(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Q2=1024,Y2=30*24*60*60*1e3;class X2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Z2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=C0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Y2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){jr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=C0(),{heartbeatsToSend:r,unsentEntries:i}=J2(this._heartbeatsCache.heartbeats),s=kh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return jr.warn(n),""}}}function C0(){return new Date().toISOString().substring(0,10)}function J2(t,e=Q2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),k0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),k0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Z2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gC()?_C().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await G2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return S0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return S0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function k0(t){return kh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function eD(t){Gn(new Rn("platform-logger",e=>new f2(e),"PRIVATE")),Gn(new Rn("heartbeat",e=>new X2(e),"PRIVATE")),an(Nm,T0,t),an(Nm,T0,"esm2017"),an("fire-js","")}eD("");function y_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function SC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tD=SC,CC=new Ls("auth","Firebase",SC());/**
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
 */const Nh=new Rd("@firebase/auth");function nD(t,...e){Nh.logLevel<=fe.WARN&&Nh.warn(`Auth (${Vs}): ${t}`,...e)}function Hc(t,...e){Nh.logLevel<=fe.ERROR&&Nh.error(`Auth (${Vs}): ${t}`,...e)}/**
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
 */function An(t,...e){throw w_(t,...e)}function $n(t,...e){return w_(t,...e)}function v_(t,e,n){const r=Object.assign(Object.assign({},tD()),{[e]:n});return new Ls("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return v_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&An(t,"argument-error"),v_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return CC.create(t,...e)}function ne(t,e,...n){if(!t)throw w_(e,...n)}function Ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hc(e),new Error(e)}function Fr(t,e){t||Ir(e)}/**
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
 */function Om(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iD(){return x0()==="http:"||x0()==="https:"}function x0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iD()||Ob()||"connection"in navigator)?navigator.onLine:!0}function oD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fr(n>e,"Short delay should be less than long delay!"),this.isMobile=g_()||mC()}get(){return sD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function E_(t,e){Fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lD=new gu(3e4,6e4);function Fi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,r,i={}){return xC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=oa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return Db()||(c.referrerPolicy="no-referrer"),kC.fetch()(RC(t,t.config.apiHost,n,a),c)})}async function xC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aD),e);try{const i=new cD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Tc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Tc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw v_(t,h,c);An(t,h)}}catch(i){if(i instanceof ur)throw i;An(t,"network-request-failed",{message:String(i)})}}async function _u(t,e,n,r,i={}){const s=await Hr(t,e,n,r,i);return"mfaPendingCredential"in s&&An(t,"multi-factor-auth-required",{_serverResponse:s}),s}function RC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?E_(t.config,i):`${t.config.apiScheme}://${i}`}function uD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),lD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$n(t,e,r);return i.customData._tokenResponse=n,i}function R0(t){return t!==void 0&&t.enterprise!==void 0}class hD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function dD(t,e){return Hr(t,"GET","/v2/recaptchaConfig",Fi(t,e))}/**
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
 */async function fD(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function AC(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function hl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pD(t,e=!1){const n=we(t),r=await n.getIdToken(e),i=T_(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hl(gp(i.auth_time)),issuedAtTime:hl(gp(i.iat)),expirationTime:hl(gp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gp(t){return Number(t)*1e3}function T_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hc("JWT malformed, contained fewer than 3 sections"),null;try{const i=xh(n);return i?JSON.parse(i):(Hc("Failed to decode base64 JWT payload"),null)}catch(i){return Hc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function A0(t){const e=T_(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ur&&mD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hl(this.lastLoginAt),this.creationTime=hl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fo(t,AC(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?PC(s.providerUserInfo):[],a=yD(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function _D(t){const e=we(t);await bh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function PC(t){return t.map(e=>{var{providerId:n}=e,r=y_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vD(t,e){const n=await xC(t,{},async()=>{const r=oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=RC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wD(t,e){return Hr(t,"POST","/v2/accounts:revokeToken",Fi(t,e))}/**
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
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):A0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=A0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await vD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Io;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
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
 */function Zr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=y_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fo(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pD(this,e)}reload(){return _D(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await Fo(this,fD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:D,isAnonymous:F,providerData:V,stsTokenManager:S}=n;ne(I&&S,e,"internal-error");const y=Io.fromJSON(this.name,S);ne(typeof I=="string",e,"internal-error"),Zr(f,e.name),Zr(m,e.name),ne(typeof D=="boolean",e,"internal-error"),ne(typeof F=="boolean",e,"internal-error"),Zr(v,e.name),Zr(w,e.name),Zr(A,e.name),Zr(P,e.name),Zr(T,e.name),Zr(E,e.name);const C=new Sr({uid:I,auth:e,email:m,emailVerified:D,displayName:f,isAnonymous:F,photoURL:w,phoneNumber:v,tenantId:A,stsTokenManager:y,createdAt:T,lastLoginAt:E});return V&&Array.isArray(V)&&(C.providerData=V.map(k=>Object.assign({},k))),P&&(C._redirectEventId=P),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Io;i.updateFromServerResponse(n);const s=new Sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?PC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Io;a.updateFromIdToken(r);const l=new Sr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const P0=new Map;function Cr(t){Fr(t instanceof Function,"Expected a class definition");let e=P0.get(t);return e?(Fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,P0.set(t,e),e)}/**
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
 */class NC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}NC.type="NONE";const N0=NC;/**
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
 */function qc(t,e,n){return`firebase:${t}:${e}:${n}`}class So{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qc(this.userKey,i.apiKey,s),this.fullPersistenceKey=qc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new So(Cr(N0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Cr(N0);const o=qc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Sr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new So(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new So(s,e,r))}}/**
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
 */function b0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VC(e))return"Blackberry";if(jC(e))return"Webos";if(DC(e))return"Safari";if((e.includes("chrome/")||OC(e))&&!e.includes("edge/"))return"Chrome";if(MC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bC(t=$t()){return/firefox\//i.test(t)}function DC(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OC(t=$t()){return/crios\//i.test(t)}function LC(t=$t()){return/iemobile/i.test(t)}function MC(t=$t()){return/android/i.test(t)}function VC(t=$t()){return/blackberry/i.test(t)}function jC(t=$t()){return/webos/i.test(t)}function I_(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ED(t=$t()){var e;return I_(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TD(){return Lb()&&document.documentMode===10}function FC(t=$t()){return I_(t)||MC(t)||jC(t)||VC(t)||/windows phone/i.test(t)||LC(t)}/**
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
 */function UC(t,e=[]){let n;switch(t){case"Browser":n=b0($t());break;case"Worker":n=`${b0($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
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
 */class ID{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SD(t,e={}){return Hr(t,"GET","/v2/passwordPolicy",Fi(t,e))}/**
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
 */const CD=6;class kD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class xD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new D0(this),this.idTokenSubscription=new D0(this),this.beforeStateQueue=new ID(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await So.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await AC(this,{idToken:e}),r=await Sr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(Ar(this));const n=e?we(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SD(this),n=new kD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ls("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cr(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await So.create(this,[Cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ui(t){return we(t)}class D0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hb(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RD(t){Nd=t}function BC(t){return Nd.loadJS(t)}function AD(){return Nd.recaptchaEnterpriseScript}function PD(){return Nd.gapiScript}function ND(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bD="recaptcha-enterprise",DD="NO_RECAPTCHA";class OD{constructor(e){this.type=bD,this.auth=Ui(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{dD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new hD(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;R0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(DD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&R0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=AD();l.length!==0&&(l+=a),BC(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function O0(t,e,n,r=!1){const i=new OD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Mm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await O0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await O0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function LD(t,e){const n=Ms(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vo(s,e??{}))return i;An(i,"already-initialized")}return n.initialize({options:e})}function MD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VD(t,e,n){const r=Ui(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=zC(e),{host:o,port:a}=jD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),FD()}function zC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jD(t){const e=zC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:L0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:L0(o)}}}function L0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class S_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,n){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}async function UD(t,e){return Hr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function BD(t,e){return _u(t,"POST","/v1/accounts:signInWithPassword",Fi(t,e))}/**
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
 */async function zD(t,e){return _u(t,"POST","/v1/accounts:signInWithEmailLink",Fi(t,e))}async function WD(t,e){return _u(t,"POST","/v1/accounts:signInWithEmailLink",Fi(t,e))}/**
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
 */class $l extends S_{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $l(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $l(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mm(e,n,"signInWithPassword",BD);case"emailLink":return zD(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mm(e,r,"signUpPassword",UD);case"emailLink":return WD(e,{idToken:n,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Co(t,e){return _u(t,"POST","/v1/accounts:signInWithIdp",Fi(t,e))}/**
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
 */const $D="http://localhost";class vs extends S_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=y_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Co(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Co(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Co(e,n)}buildRequest(){const e={requestUri:$D,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oa(n)}return e}}/**
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
 */function HD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qD(t){const e=Xa(Ja(t)).link,n=e?Xa(Ja(e)).deep_link_id:null,r=Xa(Ja(t)).deep_link_id;return(r?Xa(Ja(r)).link:null)||r||n||e||t}class C_{constructor(e){var n,r,i,s,o,a;const l=Xa(Ja(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=HD((i=l.mode)!==null&&i!==void 0?i:null);ne(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qD(e);try{return new C_(n)}catch{return null}}}/**
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
 */class aa{constructor(){this.providerId=aa.PROVIDER_ID}static credential(e,n){return $l._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=C_.parseLink(n);return ne(r,"argument-error"),$l._fromEmailAndCode(e,r.code,r.tenantId)}}aa.PROVIDER_ID="password";aa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";aa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class k_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yu extends k_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ii extends yu{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";ii.PROVIDER_ID="facebook.com";/**
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
 */class wr extends yu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vs._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
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
 */class si extends yu{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
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
 */class oi extends yu{constructor(){super("twitter.com")}static credential(e,n){return vs._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return oi.credential(n,r)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
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
 */async function KD(t,e){return _u(t,"POST","/v1/accounts:signUp",Fi(t,e))}/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sr._fromIdTokenResponse(e,r,i),o=M0(r);return new ws({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=M0(r);return new ws({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function M0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Dh extends ur{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Dh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Dh(e,n,r,i)}}function WC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Dh._fromErrorAndOperation(t,s,e,r):s})}async function GD(t,e,n=!1){const r=await Fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",r)}/**
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
 */async function QD(t,e,n=!1){const{auth:r}=t;if(Un(r.app))return Promise.reject(Ar(r));const i="reauthenticate";try{const s=await Fo(t,WC(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=T_(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),ws._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&An(r,"user-mismatch"),s}}/**
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
 */async function $C(t,e,n=!1){if(Un(t.app))return Promise.reject(Ar(t));const r="signIn",i=await WC(t,r,e),s=await ws._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function YD(t,e){return $C(Ui(t),e)}/**
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
 */async function HC(t){const e=Ui(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XD(t,e,n){if(Un(t.app))return Promise.reject(Ar(t));const r=Ui(t),o=await Mm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&HC(t),l}),a=await ws._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function JD(t,e,n){return Un(t.app)?Promise.reject(Ar(t)):YD(we(t),aa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&HC(t),r})}/**
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
 */async function ZD(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function eO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=we(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fo(r,ZD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function tO(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function nO(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function rO(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}function iO(t){return we(t).signOut()}const Oh="__sak";/**
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
 */class qC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oh,"1"),this.storage.removeItem(Oh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sO=1e3,oO=10;class KC extends qC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=FC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KC.type="LOCAL";const aO=KC;/**
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
 */class GC extends qC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GC.type="SESSION";const QC=GC;/**
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
 */function lO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await lO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bd.receivers=[];/**
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
 */function x_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=x_("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rr(){return window}function cO(t){rr().location.href=t}/**
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
 */function YC(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function hO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fO(){return YC()?self:null}/**
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
 */const XC="firebaseLocalStorageDb",pO=1,Lh="firebaseLocalStorage",JC="fbase_key";class vu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dd(t,e){return t.transaction([Lh],e?"readwrite":"readonly").objectStore(Lh)}function mO(){const t=indexedDB.deleteDatabase(XC);return new vu(t).toPromise()}function Vm(){const t=indexedDB.open(XC,pO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lh,{keyPath:JC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lh)?e(r):(r.close(),await mO(),e(await Vm()))})})}async function V0(t,e,n){const r=Dd(t,!0).put({[JC]:e,value:n});return new vu(r).toPromise()}async function gO(t,e){const n=Dd(t,!1).get(e),r=await new vu(n).toPromise();return r===void 0?null:r.value}function j0(t,e){const n=Dd(t,!0).delete(e);return new vu(n).toPromise()}const _O=800,yO=3;class ZC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bd._getInstance(fO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hO(),!this.activeServiceWorker)return;this.sender=new uO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vm();return await V0(e,Oh,"1"),await j0(e,Oh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>V0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>j0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dd(i,!1).getAll();return new vu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_O)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZC.type="LOCAL";const vO=ZC;new gu(3e4,6e4);/**
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
 */function ek(t,e){return e?Cr(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class R_ extends S_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Co(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wO(t){return $C(t.auth,new R_(t),t.bypassAuthState)}function EO(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),QD(n,new R_(t),t.bypassAuthState)}async function TO(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),GD(n,new R_(t),t.bypassAuthState)}/**
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
 */class tk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wO;case"linkViaPopup":case"linkViaRedirect":return TO;case"reauthViaPopup":case"reauthViaRedirect":return EO;default:An(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IO=new gu(2e3,1e4);async function SO(t,e,n){if(Un(t.app))return Promise.reject($n(t,"operation-not-supported-in-this-environment"));const r=Ui(t);rD(t,e,k_);const i=ek(r,n);return new is(r,"signInViaPopup",e,i).executeNotNull()}class is extends tk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=x_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IO.get())};e()}}is.currentPopupAction=null;/**
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
 */const CO="pendingRedirect",Kc=new Map;class kO extends tk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Kc.get(this.auth._key());if(!e){try{const r=await xO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Kc.set(this.auth._key(),e)}return this.bypassAuthState||Kc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xO(t,e){const n=PO(e),r=AO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RO(t,e){Kc.set(t._key(),e)}function AO(t){return Cr(t._redirectPersistence)}function PO(t){return qc(CO,t.config.apiKey,t.name)}async function NO(t,e,n=!1){if(Un(t.app))return Promise.reject(Ar(t));const r=Ui(t),i=ek(r,e),o=await new kO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const bO=10*60*1e3;class DO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bO&&this.cachedEventUids.clear(),this.cachedEventUids.has(F0(e))}saveEventToCache(e){this.cachedEventUids.add(F0(e)),this.lastProcessedEventTime=Date.now()}}function F0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nk(t);default:return!1}}/**
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
 */async function LO(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
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
 */const MO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VO=/^https?/;async function jO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LO(t);for(const n of e)try{if(FO(n))return}catch{}An(t,"unauthorized-domain")}function FO(t){const e=Om(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VO.test(n))return!1;if(MO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const UO=new gu(3e4,6e4);function U0(){const t=rr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BO(t){return new Promise((e,n)=>{var r,i,s;function o(){U0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{U0(),n($n(t,"network-request-failed"))},timeout:UO.get()})}if(!((i=(r=rr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rr().gapi)===null||s===void 0)&&s.load)o();else{const a=ND("iframefcb");return rr()[a]=()=>{gapi.load?o():n($n(t,"network-request-failed"))},BC(`${PD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gc=null,e})}let Gc=null;function zO(t){return Gc=Gc||BO(t),Gc}/**
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
 */const WO=new gu(5e3,15e3),$O="__/auth/iframe",HO="emulator/auth/iframe",qO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GO(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?E_(e,HO):`https://${t.config.authDomain}/${$O}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},i=KO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oa(r).slice(1)}`}async function QO(t){const e=await zO(t),n=rr().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:GO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),a=rr().setTimeout(()=>{s(o)},WO.get());function l(){rr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const YO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XO=500,JO=600,ZO="_blank",eL="http://localhost";class B0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tL(t,e,n,r=XO,i=JO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=$t().toLowerCase();n&&(a=OC(c)?ZO:n),bC(c)&&(e=e||eL,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(ED(c)&&a!=="_self")return nL(e||"",a),new B0(null);const f=window.open(e||"",a,h);ne(f,t,"popup-blocked");try{f.focus()}catch{}return new B0(f)}function nL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rL="__/auth/handler",iL="emulator/auth/handler",sL=encodeURIComponent("fac");async function z0(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:i};if(e instanceof k_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof yu){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${sL}=${encodeURIComponent(l)}`:"";return`${oL(t)}?${oa(a).slice(1)}${c}`}function oL({config:t}){return t.emulator?E_(t,iL):`https://${t.authDomain}/${rL}`}/**
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
 */const _p="webStorageSupport";class aL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QC,this._completeRedirectFn=NO,this._overrideRedirectResult=RO}async _openPopup(e,n,r,i){var s;Fr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await z0(e,n,r,Om(),i);return tL(e,o,x_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await z0(e,n,r,Om(),i);return cO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QO(e),r=new DO(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_p,{type:_p},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_p];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return FC()||DC()||I_()}}const lL=aL;var W0="@firebase/auth",$0="1.7.9";/**
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
 */class uL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hL(t){Gn(new Rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UC(t)},c=new xD(r,i,s,l);return MD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gn(new Rn("auth-internal",e=>{const n=Ui(e.getProvider("auth").getImmediate());return(r=>new uL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(W0,$0,cL(t)),an(W0,$0,"esm2017")}/**
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
 */const dL=5*60,fL=fC("authIdTokenMaxAge")||dL;let H0=null;const pL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fL)return;const i=n==null?void 0:n.token;H0!==i&&(H0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mL(t=Pd()){const e=Ms(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LD(t,{popupRedirectResolver:lL,persistence:[vO,aO,QC]}),r=fC("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=pL(s.toString());nO(n,o,()=>o(n.currentUser)),tO(n,a=>o(a))}}const i=cC("auth");return i&&VD(n,`http://${i}`),n}function gL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}RD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hL("Browser");var _L="firebase",yL="10.14.1";/**
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
 */an(_L,yL,"app");var q0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds,rk;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,y){function C(){}C.prototype=y.prototype,S.D=y.prototype,S.prototype=new C,S.prototype.constructor=S,S.C=function(k,N,R){for(var x=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)x[Te-2]=arguments[Te];return y.prototype[N].apply(k,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,y,C){C||(C=0);var k=Array(16);if(typeof y=="string")for(var N=0;16>N;++N)k[N]=y.charCodeAt(C++)|y.charCodeAt(C++)<<8|y.charCodeAt(C++)<<16|y.charCodeAt(C++)<<24;else for(N=0;16>N;++N)k[N]=y[C++]|y[C++]<<8|y[C++]<<16|y[C++]<<24;y=S.g[0],C=S.g[1],N=S.g[2];var R=S.g[3],x=y+(R^C&(N^R))+k[0]+3614090360&4294967295;y=C+(x<<7&4294967295|x>>>25),x=R+(N^y&(C^N))+k[1]+3905402710&4294967295,R=y+(x<<12&4294967295|x>>>20),x=N+(C^R&(y^C))+k[2]+606105819&4294967295,N=R+(x<<17&4294967295|x>>>15),x=C+(y^N&(R^y))+k[3]+3250441966&4294967295,C=N+(x<<22&4294967295|x>>>10),x=y+(R^C&(N^R))+k[4]+4118548399&4294967295,y=C+(x<<7&4294967295|x>>>25),x=R+(N^y&(C^N))+k[5]+1200080426&4294967295,R=y+(x<<12&4294967295|x>>>20),x=N+(C^R&(y^C))+k[6]+2821735955&4294967295,N=R+(x<<17&4294967295|x>>>15),x=C+(y^N&(R^y))+k[7]+4249261313&4294967295,C=N+(x<<22&4294967295|x>>>10),x=y+(R^C&(N^R))+k[8]+1770035416&4294967295,y=C+(x<<7&4294967295|x>>>25),x=R+(N^y&(C^N))+k[9]+2336552879&4294967295,R=y+(x<<12&4294967295|x>>>20),x=N+(C^R&(y^C))+k[10]+4294925233&4294967295,N=R+(x<<17&4294967295|x>>>15),x=C+(y^N&(R^y))+k[11]+2304563134&4294967295,C=N+(x<<22&4294967295|x>>>10),x=y+(R^C&(N^R))+k[12]+1804603682&4294967295,y=C+(x<<7&4294967295|x>>>25),x=R+(N^y&(C^N))+k[13]+4254626195&4294967295,R=y+(x<<12&4294967295|x>>>20),x=N+(C^R&(y^C))+k[14]+2792965006&4294967295,N=R+(x<<17&4294967295|x>>>15),x=C+(y^N&(R^y))+k[15]+1236535329&4294967295,C=N+(x<<22&4294967295|x>>>10),x=y+(N^R&(C^N))+k[1]+4129170786&4294967295,y=C+(x<<5&4294967295|x>>>27),x=R+(C^N&(y^C))+k[6]+3225465664&4294967295,R=y+(x<<9&4294967295|x>>>23),x=N+(y^C&(R^y))+k[11]+643717713&4294967295,N=R+(x<<14&4294967295|x>>>18),x=C+(R^y&(N^R))+k[0]+3921069994&4294967295,C=N+(x<<20&4294967295|x>>>12),x=y+(N^R&(C^N))+k[5]+3593408605&4294967295,y=C+(x<<5&4294967295|x>>>27),x=R+(C^N&(y^C))+k[10]+38016083&4294967295,R=y+(x<<9&4294967295|x>>>23),x=N+(y^C&(R^y))+k[15]+3634488961&4294967295,N=R+(x<<14&4294967295|x>>>18),x=C+(R^y&(N^R))+k[4]+3889429448&4294967295,C=N+(x<<20&4294967295|x>>>12),x=y+(N^R&(C^N))+k[9]+568446438&4294967295,y=C+(x<<5&4294967295|x>>>27),x=R+(C^N&(y^C))+k[14]+3275163606&4294967295,R=y+(x<<9&4294967295|x>>>23),x=N+(y^C&(R^y))+k[3]+4107603335&4294967295,N=R+(x<<14&4294967295|x>>>18),x=C+(R^y&(N^R))+k[8]+1163531501&4294967295,C=N+(x<<20&4294967295|x>>>12),x=y+(N^R&(C^N))+k[13]+2850285829&4294967295,y=C+(x<<5&4294967295|x>>>27),x=R+(C^N&(y^C))+k[2]+4243563512&4294967295,R=y+(x<<9&4294967295|x>>>23),x=N+(y^C&(R^y))+k[7]+1735328473&4294967295,N=R+(x<<14&4294967295|x>>>18),x=C+(R^y&(N^R))+k[12]+2368359562&4294967295,C=N+(x<<20&4294967295|x>>>12),x=y+(C^N^R)+k[5]+4294588738&4294967295,y=C+(x<<4&4294967295|x>>>28),x=R+(y^C^N)+k[8]+2272392833&4294967295,R=y+(x<<11&4294967295|x>>>21),x=N+(R^y^C)+k[11]+1839030562&4294967295,N=R+(x<<16&4294967295|x>>>16),x=C+(N^R^y)+k[14]+4259657740&4294967295,C=N+(x<<23&4294967295|x>>>9),x=y+(C^N^R)+k[1]+2763975236&4294967295,y=C+(x<<4&4294967295|x>>>28),x=R+(y^C^N)+k[4]+1272893353&4294967295,R=y+(x<<11&4294967295|x>>>21),x=N+(R^y^C)+k[7]+4139469664&4294967295,N=R+(x<<16&4294967295|x>>>16),x=C+(N^R^y)+k[10]+3200236656&4294967295,C=N+(x<<23&4294967295|x>>>9),x=y+(C^N^R)+k[13]+681279174&4294967295,y=C+(x<<4&4294967295|x>>>28),x=R+(y^C^N)+k[0]+3936430074&4294967295,R=y+(x<<11&4294967295|x>>>21),x=N+(R^y^C)+k[3]+3572445317&4294967295,N=R+(x<<16&4294967295|x>>>16),x=C+(N^R^y)+k[6]+76029189&4294967295,C=N+(x<<23&4294967295|x>>>9),x=y+(C^N^R)+k[9]+3654602809&4294967295,y=C+(x<<4&4294967295|x>>>28),x=R+(y^C^N)+k[12]+3873151461&4294967295,R=y+(x<<11&4294967295|x>>>21),x=N+(R^y^C)+k[15]+530742520&4294967295,N=R+(x<<16&4294967295|x>>>16),x=C+(N^R^y)+k[2]+3299628645&4294967295,C=N+(x<<23&4294967295|x>>>9),x=y+(N^(C|~R))+k[0]+4096336452&4294967295,y=C+(x<<6&4294967295|x>>>26),x=R+(C^(y|~N))+k[7]+1126891415&4294967295,R=y+(x<<10&4294967295|x>>>22),x=N+(y^(R|~C))+k[14]+2878612391&4294967295,N=R+(x<<15&4294967295|x>>>17),x=C+(R^(N|~y))+k[5]+4237533241&4294967295,C=N+(x<<21&4294967295|x>>>11),x=y+(N^(C|~R))+k[12]+1700485571&4294967295,y=C+(x<<6&4294967295|x>>>26),x=R+(C^(y|~N))+k[3]+2399980690&4294967295,R=y+(x<<10&4294967295|x>>>22),x=N+(y^(R|~C))+k[10]+4293915773&4294967295,N=R+(x<<15&4294967295|x>>>17),x=C+(R^(N|~y))+k[1]+2240044497&4294967295,C=N+(x<<21&4294967295|x>>>11),x=y+(N^(C|~R))+k[8]+1873313359&4294967295,y=C+(x<<6&4294967295|x>>>26),x=R+(C^(y|~N))+k[15]+4264355552&4294967295,R=y+(x<<10&4294967295|x>>>22),x=N+(y^(R|~C))+k[6]+2734768916&4294967295,N=R+(x<<15&4294967295|x>>>17),x=C+(R^(N|~y))+k[13]+1309151649&4294967295,C=N+(x<<21&4294967295|x>>>11),x=y+(N^(C|~R))+k[4]+4149444226&4294967295,y=C+(x<<6&4294967295|x>>>26),x=R+(C^(y|~N))+k[11]+3174756917&4294967295,R=y+(x<<10&4294967295|x>>>22),x=N+(y^(R|~C))+k[2]+718787259&4294967295,N=R+(x<<15&4294967295|x>>>17),x=C+(R^(N|~y))+k[9]+3951481745&4294967295,S.g[0]=S.g[0]+y&4294967295,S.g[1]=S.g[1]+(N+(x<<21&4294967295|x>>>11))&4294967295,S.g[2]=S.g[2]+N&4294967295,S.g[3]=S.g[3]+R&4294967295}r.prototype.u=function(S,y){y===void 0&&(y=S.length);for(var C=y-this.blockSize,k=this.B,N=this.h,R=0;R<y;){if(N==0)for(;R<=C;)i(this,S,R),R+=this.blockSize;if(typeof S=="string"){for(;R<y;)if(k[N++]=S.charCodeAt(R++),N==this.blockSize){i(this,k),N=0;break}}else for(;R<y;)if(k[N++]=S[R++],N==this.blockSize){i(this,k),N=0;break}}this.h=N,this.o+=y},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var y=1;y<S.length-8;++y)S[y]=0;var C=8*this.o;for(y=S.length-8;y<S.length;++y)S[y]=C&255,C/=256;for(this.u(S),S=Array(16),y=C=0;4>y;++y)for(var k=0;32>k;k+=8)S[C++]=this.g[y]>>>k&255;return S};function s(S,y){var C=a;return Object.prototype.hasOwnProperty.call(C,S)?C[S]:C[S]=y(S)}function o(S,y){this.h=y;for(var C=[],k=!0,N=S.length-1;0<=N;N--){var R=S[N]|0;k&&R==y||(C[N]=R,k=!1)}this.g=C}var a={};function l(S){return-128<=S&&128>S?s(S,function(y){return new o([y|0],0>y?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return P(c(-S));for(var y=[],C=1,k=0;S>=C;k++)y[k]=S/C|0,C*=4294967296;return new o(y,0)}function h(S,y){if(S.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S.charAt(0)=="-")return P(h(S.substring(1),y));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(y,8)),k=f,N=0;N<S.length;N+=8){var R=Math.min(8,S.length-N),x=parseInt(S.substring(N,N+R),y);8>R?(R=c(Math.pow(y,R)),k=k.j(R).add(c(x))):(k=k.j(C),k=k.add(c(x)))}return k}var f=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var S=0,y=1,C=0;C<this.g.length;C++){var k=this.i(C);S+=(0<=k?k:4294967296+k)*y,y*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(w(this))return"0";if(A(this))return"-"+P(this).toString(S);for(var y=c(Math.pow(S,6)),C=this,k="";;){var N=D(C,y).g;C=T(C,N.j(y));var R=((0<C.g.length?C.g[0]:C.h)>>>0).toString(S);if(C=N,w(C))return R+k;for(;6>R.length;)R="0"+R;k=R+k}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function w(S){if(S.h!=0)return!1;for(var y=0;y<S.g.length;y++)if(S.g[y]!=0)return!1;return!0}function A(S){return S.h==-1}t.l=function(S){return S=T(this,S),A(S)?-1:w(S)?0:1};function P(S){for(var y=S.g.length,C=[],k=0;k<y;k++)C[k]=~S.g[k];return new o(C,~S.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(S){for(var y=Math.max(this.g.length,S.g.length),C=[],k=0,N=0;N<=y;N++){var R=k+(this.i(N)&65535)+(S.i(N)&65535),x=(R>>>16)+(this.i(N)>>>16)+(S.i(N)>>>16);k=x>>>16,R&=65535,x&=65535,C[N]=x<<16|R}return new o(C,C[C.length-1]&-2147483648?-1:0)};function T(S,y){return S.add(P(y))}t.j=function(S){if(w(this)||w(S))return f;if(A(this))return A(S)?P(this).j(P(S)):P(P(this).j(S));if(A(S))return P(this.j(P(S)));if(0>this.l(v)&&0>S.l(v))return c(this.m()*S.m());for(var y=this.g.length+S.g.length,C=[],k=0;k<2*y;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<S.g.length;N++){var R=this.i(k)>>>16,x=this.i(k)&65535,Te=S.i(N)>>>16,M=S.i(N)&65535;C[2*k+2*N]+=x*M,E(C,2*k+2*N),C[2*k+2*N+1]+=R*M,E(C,2*k+2*N+1),C[2*k+2*N+1]+=x*Te,E(C,2*k+2*N+1),C[2*k+2*N+2]+=R*Te,E(C,2*k+2*N+2)}for(k=0;k<y;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=y;k<2*y;k++)C[k]=0;return new o(C,0)};function E(S,y){for(;(S[y]&65535)!=S[y];)S[y+1]+=S[y]>>>16,S[y]&=65535,y++}function I(S,y){this.g=S,this.h=y}function D(S,y){if(w(y))throw Error("division by zero");if(w(S))return new I(f,f);if(A(S))return y=D(P(S),y),new I(P(y.g),P(y.h));if(A(y))return y=D(S,P(y)),new I(P(y.g),y.h);if(30<S.g.length){if(A(S)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var C=m,k=y;0>=k.l(S);)C=F(C),k=F(k);var N=V(C,1),R=V(k,1);for(k=V(k,2),C=V(C,2);!w(k);){var x=R.add(k);0>=x.l(S)&&(N=N.add(C),R=x),k=V(k,1),C=V(C,1)}return y=T(S,N.j(y)),new I(N,y)}for(N=f;0<=S.l(y);){for(C=Math.max(1,Math.floor(S.m()/y.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),R=c(C),x=R.j(y);A(x)||0<x.l(S);)C-=k,R=c(C),x=R.j(y);w(R)&&(R=m),N=N.add(R),S=T(S,x)}return new I(N,S)}t.A=function(S){return D(this,S).h},t.and=function(S){for(var y=Math.max(this.g.length,S.g.length),C=[],k=0;k<y;k++)C[k]=this.i(k)&S.i(k);return new o(C,this.h&S.h)},t.or=function(S){for(var y=Math.max(this.g.length,S.g.length),C=[],k=0;k<y;k++)C[k]=this.i(k)|S.i(k);return new o(C,this.h|S.h)},t.xor=function(S){for(var y=Math.max(this.g.length,S.g.length),C=[],k=0;k<y;k++)C[k]=this.i(k)^S.i(k);return new o(C,this.h^S.h)};function F(S){for(var y=S.g.length+1,C=[],k=0;k<y;k++)C[k]=S.i(k)<<1|S.i(k-1)>>>31;return new o(C,S.h)}function V(S,y){var C=y>>5;y%=32;for(var k=S.g.length-C,N=[],R=0;R<k;R++)N[R]=0<y?S.i(R+C)>>>y|S.i(R+C+1)<<32-y:S.i(R+C);return new o(N,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rk=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ds=o}).apply(typeof q0<"u"?q0:typeof self<"u"?self:typeof window<"u"?window:{});var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ik,Za,sk,Qc,jm,ok,ak,lk;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,g){return u==Array.prototype||u==Object.prototype||(u[d]=g.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ic=="object"&&Ic];for(var d=0;d<u.length;++d){var g=u[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var g=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var O=u[_];if(!(O in g))break e;g=g[O]}u=u[u.length-1],_=g[u],d=d(_),d!=_&&d!=null&&e(g,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var g=0,_=!1,O={next:function(){if(!_&&g<u.length){var L=g++;return{value:d(L,u[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,g){return u.call.apply(u.bind,arguments)}function f(u,d,g){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),u.apply(d,O)}}return function(){return u.apply(d,arguments)}}function m(u,d,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function v(u,d){var g=Array.prototype.slice.call(arguments,1);return function(){var _=g.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function w(u,d){function g(){}g.prototype=d.prototype,u.aa=d.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(_,O,L){for(var $=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)$[Ae-2]=arguments[Ae];return d.prototype[O].apply(_,$)}}function A(u){const d=u.length;if(0<d){const g=Array(d);for(let _=0;_<d;_++)g[_]=u[_];return g}return[]}function P(u,d){for(let g=1;g<arguments.length;g++){const _=arguments[g];if(l(_)){const O=u.length||0,L=_.length||0;u.length=O+L;for(let $=0;$<L;$++)u[O+$]=_[$]}else u.push(_)}}class T{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(u){return/^[\s\xa0]*$/.test(u)}function I(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function D(u){return D[" "](u),u}D[" "]=function(){};var F=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function V(u,d,g){for(const _ in u)d.call(g,u[_],_,u)}function S(u,d){for(const g in u)d.call(void 0,u[g],g,u)}function y(u){const d={};for(const g in u)d[g]=u[g];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,d){let g,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(g in _)u[g]=_[g];for(let L=0;L<C.length;L++)g=C[L],Object.prototype.hasOwnProperty.call(_,g)&&(u[g]=_[g])}}function N(u){var d=1;u=u.split(":");const g=[];for(;0<d&&u.length;)g.push(u.shift()),d--;return u.length&&g.push(u.join(":")),g}function R(u){a.setTimeout(()=>{throw u},0)}function x(){var u=X;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class Te{constructor(){this.h=this.g=null}add(d,g){const _=M.get();_.set(d,g),this.h?this.h.next=_:this.g=_,this.h=_}}var M=new T(()=>new ie,u=>u.reset());class ie{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,z=!1,X=new Te,Q=()=>{const u=a.Promise.resolve(void 0);ke=()=>{u.then(G)}};var G=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(g){R(g)}var d=M;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}z=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Oe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return u}();function Ee(u,d){if(ae.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(F){e:{try{D(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else g=="mouseover"?d=u.fromElement:g=="mouseout"&&(d=u.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Be[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ee.aa.h.call(this)}}w(Ee,ae);var Be={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),le=0;function un(u,d,g,_,O){this.listener=u,this.proxy=null,this.src=d,this.type=g,this.capture=!!_,this.ha=O,this.key=++le,this.da=this.fa=!1}function pt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function dr(u){this.src=u,this.g={},this.h=0}dr.prototype.add=function(u,d,g,_,O){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var $=Ws(u,d,_,O);return-1<$?(d=u[$],g||(d.fa=!1)):(d=new un(d,this.src,L,!!_,O),d.fa=g,u.push(d)),d};function vn(u,d){var g=d.type;if(g in u.g){var _=u.g[g],O=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=O)&&Array.prototype.splice.call(_,O,1),L&&(pt(d),u.g[g].length==0&&(delete u.g[g],u.h--))}}function Ws(u,d,g,_){for(var O=0;O<u.length;++O){var L=u[O];if(!L.da&&L.listener==d&&L.capture==!!g&&L.ha==_)return O}return-1}var $s="closure_lm_"+(1e6*Math.random()|0),ga={};function Ct(u,d,g,_,O){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Ct(u,d[L],g,_,O);return null}return g=Hs(g),u&&u[ze]?u.K(d,g,c(_)?!!_.capture:!1,O):Kr(u,d,g,!1,_,O)}function Kr(u,d,g,_,O,L){if(!d)throw Error("Invalid event type");var $=c(O)?!!O.capture:!!O,Ae=ya(u);if(Ae||(u[$s]=Ae=new dr(u)),g=Ae.add(d,g,_,$,L),g.proxy)return g;if(_=Gr(),g.proxy=_,_.src=u,_.listener=g,u.addEventListener)Oe||(O=$),O===void 0&&(O=!1),u.addEventListener(d.toString(),_,O);else if(u.attachEvent)u.attachEvent(zu(d.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Gr(){function u(g){return d.call(u.src,u.listener,g)}const d=Tf;return u}function Bu(u,d,g,_,O){if(Array.isArray(d))for(var L=0;L<d.length;L++)Bu(u,d[L],g,_,O);else _=c(_)?!!_.capture:!!_,g=Hs(g),u&&u[ze]?(u=u.i,d=String(d).toString(),d in u.g&&(L=u.g[d],g=Ws(L,g,_,O),-1<g&&(pt(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete u.g[d],u.h--)))):u&&(u=ya(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Ws(d,g,_,O)),(g=-1<u?d[u]:null)&&_a(g))}function _a(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[ze])vn(d.i,u);else{var g=u.type,_=u.proxy;d.removeEventListener?d.removeEventListener(g,_,u.capture):d.detachEvent?d.detachEvent(zu(g),_):d.addListener&&d.removeListener&&d.removeListener(_),(g=ya(d))?(vn(g,u),g.h==0&&(g.src=null,d[$s]=null)):pt(u)}}}function zu(u){return u in ga?ga[u]:ga[u]="on"+u}function Tf(u,d){if(u.da)u=!0;else{d=new Ee(d,this);var g=u.listener,_=u.ha||u.src;u.fa&&_a(u),u=g.call(_,d)}return u}function ya(u){return u=u[$s],u instanceof dr?u:null}var va="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hs(u){return typeof u=="function"?u:(u[va]||(u[va]=function(d){return u.handleEvent(d)}),u[va])}function xe(){q.call(this),this.i=new dr(this),this.M=this,this.F=null}w(xe,q),xe.prototype[ze]=!0,xe.prototype.removeEventListener=function(u,d,g,_){Bu(this,u,d,g,_)};function mt(u,d){var g,_=u.F;if(_)for(g=[];_;_=_.F)g.push(_);if(u=u.M,_=d.type||d,typeof d=="string")d=new ae(d,u);else if(d instanceof ae)d.target=d.target||u;else{var O=d;d=new ae(_,u),k(d,O)}if(O=!0,g)for(var L=g.length-1;0<=L;L--){var $=d.g=g[L];O=Wi($,_,!0,d)&&O}if($=d.g=u,O=Wi($,_,!0,d)&&O,O=Wi($,_,!1,d)&&O,g)for(L=0;L<g.length;L++)$=d.g=g[L],O=Wi($,_,!1,d)&&O}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var g=u.g[d],_=0;_<g.length;_++)pt(g[_]);delete u.g[d],u.h--}}this.F=null},xe.prototype.K=function(u,d,g,_){return this.i.add(String(u),d,!1,g,_)},xe.prototype.L=function(u,d,g,_){return this.i.add(String(u),d,!0,g,_)};function Wi(u,d,g,_){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,L=0;L<d.length;++L){var $=d[L];if($&&!$.da&&$.capture==g){var Ae=$.listener,kt=$.ha||$.src;$.fa&&vn(u.i,$),O=Ae.call(kt,_)!==!1&&O}}return O&&!_.defaultPrevented}function Z(u,d,g){if(typeof u=="function")g&&(u=m(u,g));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function te(u){u.g=Z(()=>{u.g=null,u.i&&(u.i=!1,te(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class Re extends q{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(u){q.call(this),this.h=u,this.g={}}w(Xe,q);var Ne=[];function Je(u){V(u.g,function(d,g){this.g.hasOwnProperty(g)&&_a(d)},u),u.g={}}Xe.prototype.N=function(){Xe.aa.N.call(this),Je(this)},Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ot=a.JSON.stringify,He=a.JSON.parse,We=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function fr(){}fr.prototype.h=null;function Wu(u){return u.h||(u.h=u.i())}function uv(){}var wa={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function If(){ae.call(this,"d")}w(If,ae);function Sf(){ae.call(this,"c")}w(Sf,ae);var $i={},cv=null;function $u(){return cv=cv||new xe}$i.La="serverreachability";function hv(u){ae.call(this,$i.La,u)}w(hv,ae);function Ea(u){const d=$u();mt(d,new hv(d))}$i.STAT_EVENT="statevent";function dv(u,d){ae.call(this,$i.STAT_EVENT,u),this.stat=d}w(dv,ae);function Ht(u){const d=$u();mt(d,new dv(d,u))}$i.Ma="timingevent";function fv(u,d){ae.call(this,$i.Ma,u),this.size=d}w(fv,ae);function Ta(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function Ia(){this.g=!0}Ia.prototype.xa=function(){this.g=!1};function bA(u,d,g,_,O,L){u.info(function(){if(u.g)if(L)for(var $="",Ae=L.split("&"),kt=0;kt<Ae.length;kt++){var _e=Ae[kt].split("=");if(1<_e.length){var Lt=_e[0];_e=_e[1];var Mt=Lt.split("_");$=2<=Mt.length&&Mt[1]=="type"?$+(Lt+"="+_e+"&"):$+(Lt+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+d+`
`+g+`
`+$})}function DA(u,d,g,_,O,L,$){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+d+`
`+g+`
`+L+" "+$})}function qs(u,d,g,_){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+LA(u,g)+(_?" "+_:"")})}function OA(u,d){u.info(function(){return"TIMEOUT: "+d})}Ia.prototype.info=function(){};function LA(u,d){if(!u.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var _=g[u];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<O.length;$++)O[$]=""}}}}return Ot(g)}catch{return d}}var Hu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cf;function qu(){}w(qu,fr),qu.prototype.g=function(){return new XMLHttpRequest},qu.prototype.i=function(){return{}},Cf=new qu;function Qr(u,d,g,_){this.j=u,this.i=d,this.l=g,this.R=_||1,this.U=new Xe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mv}function mv(){this.i=null,this.g="",this.h=!1}var gv={},kf={};function xf(u,d,g){u.L=1,u.v=Yu(pr(d)),u.m=g,u.P=!0,_v(u,null)}function _v(u,d){u.F=Date.now(),Ku(u),u.A=pr(u.v);var g=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),Nv(g.i,"t",_),u.C=0,g=u.j.J,u.h=new mv,u.g=Qv(u.j,g?d:null,!u.m),0<u.O&&(u.M=new Re(m(u.Y,u,u.g),u.O)),d=u.U,g=u.g,_=u.ca;var O="readystatechange";Array.isArray(O)||(O&&(Ne[0]=O.toString()),O=Ne);for(var L=0;L<O.length;L++){var $=Ct(g,O[L],_||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),Ea(),bA(u.i,u.u,u.A,u.l,u.R,u.m)}Qr.prototype.ca=function(u){u=u.target;const d=this.M;d&&mr(u)==3?d.j():this.Y(u)},Qr.prototype.Y=function(u){try{if(u==this.g)e:{const Mt=mr(this.g);var d=this.g.Ba();const Qs=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||jv(this.g)))){this.J||Mt!=4||d==7||(d==8||0>=Qs?Ea(3):Ea(2)),Rf(this);var g=this.g.Z();this.X=g;t:if(yv(this)){var _=jv(this.g);u="";var O=_.length,L=mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hi(this),Sa(this);var $="";break t}this.h.i=new a.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,u+=this.h.i.decode(_[d],{stream:!(L&&d==O-1)});_.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=g==200,DA(this.i,this.u,this.A,this.l,this.R,Mt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,kt=this.g;if((Ae=kt.g?kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(Ae)){var _e=Ae;break t}}_e=null}if(g=_e)qs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Af(this,g);else{this.o=!1,this.s=3,Ht(12),Hi(this),Sa(this);break e}}if(this.P){g=!0;let Dn;for(;!this.J&&this.C<$.length;)if(Dn=MA(this,$),Dn==kf){Mt==4&&(this.s=4,Ht(14),g=!1),qs(this.i,this.l,null,"[Incomplete Response]");break}else if(Dn==gv){this.s=4,Ht(15),qs(this.i,this.l,$,"[Invalid Chunk]"),g=!1;break}else qs(this.i,this.l,Dn,null),Af(this,Dn);if(yv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||$.length!=0||this.h.h||(this.s=1,Ht(16),g=!1),this.o=this.o&&g,!g)qs(this.i,this.l,$,"[Invalid Chunked Response]"),Hi(this),Sa(this);else if(0<$.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Lf(Lt),Lt.M=!0,Ht(11))}}else qs(this.i,this.l,$,null),Af(this,$);Mt==4&&Hi(this),this.o&&!this.J&&(Mt==4?Hv(this.j,this):(this.o=!1,Ku(this)))}else ZA(this.g),g==400&&0<$.indexOf("Unknown SID")?(this.s=3,Ht(12)):(this.s=0,Ht(13)),Hi(this),Sa(this)}}}catch{}finally{}};function yv(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function MA(u,d){var g=u.C,_=d.indexOf(`
`,g);return _==-1?kf:(g=Number(d.substring(g,_)),isNaN(g)?gv:(_+=1,_+g>d.length?kf:(d=d.slice(_,_+g),u.C=_+g,d)))}Qr.prototype.cancel=function(){this.J=!0,Hi(this)};function Ku(u){u.S=Date.now()+u.I,vv(u,u.I)}function vv(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ta(m(u.ba,u),d)}function Rf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Qr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(OA(this.i,this.A),this.L!=2&&(Ea(),Ht(17)),Hi(this),this.s=2,Sa(this)):vv(this,this.S-u)};function Sa(u){u.j.G==0||u.J||Hv(u.j,u)}function Hi(u){Rf(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,Je(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function Af(u,d){try{var g=u.j;if(g.G!=0&&(g.g==u||Pf(g.h,u))){if(!u.K&&Pf(g.h,u)&&g.G==3){try{var _=g.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)nc(g),ec(g);else break e;Of(g),Ht(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=Ta(m(g.Za,g),6e3));if(1>=Tv(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Ki(g,11)}else if((u.K||g.g==u)&&nc(g),!E(d))for(O=g.Da.g.parse(d),d=0;d<O.length;d++){let _e=O[d];if(g.T=_e[0],_e=_e[1],g.G==2)if(_e[0]=="c"){g.K=_e[1],g.ia=_e[2];const Lt=_e[3];Lt!=null&&(g.la=Lt,g.j.info("VER="+g.la));const Mt=_e[4];Mt!=null&&(g.Aa=Mt,g.j.info("SVER="+g.Aa));const Qs=_e[5];Qs!=null&&typeof Qs=="number"&&0<Qs&&(_=1.5*Qs,g.L=_,g.j.info("backChannelRequestTimeoutMs_="+_)),_=g;const Dn=u.g;if(Dn){const ic=Dn.g?Dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ic){var L=_.h;L.g||ic.indexOf("spdy")==-1&&ic.indexOf("quic")==-1&&ic.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Nf(L,L.h),L.h=null))}if(_.D){const Mf=Dn.g?Dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Mf&&(_.ya=Mf,Le(_.I,_.D,Mf))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),_=g;var $=u;if(_.qa=Gv(_,_.J?_.ia:null,_.W),$.K){Iv(_.h,$);var Ae=$,kt=_.L;kt&&(Ae.I=kt),Ae.B&&(Rf(Ae),Ku(Ae)),_.g=$}else Wv(_);0<g.i.length&&tc(g)}else _e[0]!="stop"&&_e[0]!="close"||Ki(g,7);else g.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Ki(g,7):Df(g):_e[0]!="noop"&&g.l&&g.l.ta(_e),g.v=0)}}Ea(4)}catch{}}var VA=class{constructor(u,d){this.g=u,this.map=d}};function wv(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ev(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Tv(u){return u.h?1:u.g?u.g.size:0}function Pf(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function Nf(u,d){u.g?u.g.add(d):u.h=d}function Iv(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}wv.prototype.cancel=function(){if(this.i=Sv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Sv(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const g of u.g.values())d=d.concat(g.D);return d}return A(u.i)}function jA(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],g=u.length,_=0;_<g;_++)d.push(u[_]);return d}d=[],g=0;for(_ in u)d[g++]=u[_];return d}function FA(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var g=0;g<u;g++)d.push(g);return d}d=[],g=0;for(const _ in u)d[g++]=_;return d}}}function Cv(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var g=FA(u),_=jA(u),O=_.length,L=0;L<O;L++)d.call(void 0,_[L],g&&g[L],u)}var kv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UA(u,d){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var _=u[g].indexOf("="),O=null;if(0<=_){var L=u[g].substring(0,_);O=u[g].substring(_+1)}else L=u[g];d(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function qi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof qi){this.h=u.h,Gu(this,u.j),this.o=u.o,this.g=u.g,Qu(this,u.s),this.l=u.l;var d=u.i,g=new xa;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),xv(this,g),this.m=u.m}else u&&(d=String(u).match(kv))?(this.h=!1,Gu(this,d[1]||"",!0),this.o=Ca(d[2]||""),this.g=Ca(d[3]||"",!0),Qu(this,d[4]),this.l=Ca(d[5]||"",!0),xv(this,d[6]||"",!0),this.m=Ca(d[7]||"")):(this.h=!1,this.i=new xa(null,this.h))}qi.prototype.toString=function(){var u=[],d=this.j;d&&u.push(ka(d,Rv,!0),":");var g=this.g;return(g||d=="file")&&(u.push("//"),(d=this.o)&&u.push(ka(d,Rv,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(ka(g,g.charAt(0)=="/"?WA:zA,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",ka(g,HA)),u.join("")};function pr(u){return new qi(u)}function Gu(u,d,g){u.j=g?Ca(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Qu(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function xv(u,d,g){d instanceof xa?(u.i=d,qA(u.i,u.h)):(g||(d=ka(d,$A)),u.i=new xa(d,u.h))}function Le(u,d,g){u.i.set(d,g)}function Yu(u){return Le(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ca(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ka(u,d,g){return typeof u=="string"?(u=encodeURI(u).replace(d,BA),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function BA(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Rv=/[#\/\?@]/g,zA=/[#\?:]/g,WA=/[#\?]/g,$A=/[#\?@]/g,HA=/#/g;function xa(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Yr(u){u.g||(u.g=new Map,u.h=0,u.i&&UA(u.i,function(d,g){u.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=xa.prototype,t.add=function(u,d){Yr(this),this.i=null,u=Ks(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(d),this.h+=1,this};function Av(u,d){Yr(u),d=Ks(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function Pv(u,d){return Yr(u),d=Ks(u,d),u.g.has(d)}t.forEach=function(u,d){Yr(this),this.g.forEach(function(g,_){g.forEach(function(O){u.call(d,O,_,this)},this)},this)},t.na=function(){Yr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let _=0;_<d.length;_++){const O=u[_];for(let L=0;L<O.length;L++)g.push(d[_])}return g},t.V=function(u){Yr(this);let d=[];if(typeof u=="string")Pv(this,u)&&(d=d.concat(this.g.get(Ks(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)d=d.concat(u[g])}return d},t.set=function(u,d){return Yr(this),this.i=null,u=Ks(this,u),Pv(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function Nv(u,d,g){Av(u,d),0<g.length&&(u.i=null,u.g.set(Ks(u,d),A(g)),u.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var _=d[g];const L=encodeURIComponent(String(_)),$=this.V(_);for(_=0;_<$.length;_++){var O=L;$[_]!==""&&(O+="="+encodeURIComponent(String($[_]))),u.push(O)}}return this.i=u.join("&")};function Ks(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function qA(u,d){d&&!u.j&&(Yr(u),u.i=null,u.g.forEach(function(g,_){var O=_.toLowerCase();_!=O&&(Av(this,_),Nv(this,O,g))},u)),u.j=d}function KA(u,d){const g=new Ia;if(a.Image){const _=new Image;_.onload=v(Xr,g,"TestLoadImage: loaded",!0,d,_),_.onerror=v(Xr,g,"TestLoadImage: error",!1,d,_),_.onabort=v(Xr,g,"TestLoadImage: abort",!1,d,_),_.ontimeout=v(Xr,g,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else d(!1)}function GA(u,d){const g=new Ia,_=new AbortController,O=setTimeout(()=>{_.abort(),Xr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:_.signal}).then(L=>{clearTimeout(O),L.ok?Xr(g,"TestPingServer: ok",!0,d):Xr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),Xr(g,"TestPingServer: error",!1,d)})}function Xr(u,d,g,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(g)}catch{}}function QA(){this.g=new We}function YA(u,d,g){const _=g||"";try{Cv(u,function(O,L){let $=O;c(O)&&($=Ot(O)),d.push(_+L+"="+encodeURIComponent($))})}catch(O){throw d.push(_+"type="+encodeURIComponent("_badmap")),O}}function Xu(u){this.l=u.Ub||null,this.j=u.eb||!1}w(Xu,fr),Xu.prototype.g=function(){return new Ju(this.l,this.j)},Xu.prototype.i=function(u){return function(){return u}}({});function Ju(u,d){xe.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Ju,xe),t=Ju.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Aa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ra(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Aa(this)),this.g&&(this.readyState=3,Aa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function bv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?Ra(this):Aa(this),this.readyState==3&&bv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Ra(this))},t.Qa=function(u){this.g&&(this.response=u,Ra(this))},t.ga=function(){this.g&&Ra(this)};function Ra(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Aa(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=d.next();return u.join(`\r
`)};function Aa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ju.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Dv(u){let d="";return V(u,function(g,_){d+=_,d+=":",d+=g,d+=`\r
`}),d}function bf(u,d,g){e:{for(_ in g){var _=!1;break e}_=!0}_||(g=Dv(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):Le(u,d,g))}function Ze(u){xe.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Ze,xe);var XA=/^https?$/i,JA=["POST","PUT"];t=Ze.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,g,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cf.g(),this.v=this.o?Wu(this.o):Wu(Cf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(L){Ov(this,L);return}if(u=g||"",g=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)g.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())g.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),O=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(JA,d,void 0))||_||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of g)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vv(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){Ov(this,L)}};function Ov(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,Lv(u),Zu(u)}function Lv(u){u.A||(u.A=!0,mt(u,"complete"),mt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,mt(this,"complete"),mt(this,"abort"),Zu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zu(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Mv(this):this.bb())},t.bb=function(){Mv(this)};function Mv(u){if(u.h&&typeof o<"u"&&(!u.v[1]||mr(u)!=4||u.Z()!=2)){if(u.u&&mr(u)==4)Z(u.Ea,0,u);else if(mt(u,"readystatechange"),mr(u)==4){u.h=!1;try{const $=u.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var _;if(_=$===0){var O=String(u.D).match(kv)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),_=!XA.test(O?O.toLowerCase():"")}g=_}if(g)mt(u,"complete"),mt(u,"success");else{u.m=6;try{var L=2<mr(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",Lv(u)}}finally{Zu(u)}}}}function Zu(u,d){if(u.g){Vv(u);const g=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||mt(u,"ready");try{g.onreadystatechange=_}catch{}}}function Vv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function mr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<mr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),He(d)}};function jv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ZA(u){const d={};u=(u.g&&2<=mr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(E(u[_]))continue;var g=N(u[_]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=d[O]||[];d[O]=L,L.push(g)}S(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pa(u,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||d}function Fv(u){this.Aa=0,this.i=[],this.j=new Ia,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pa("baseRetryDelayMs",5e3,u),this.cb=Pa("retryDelaySeedMs",1e4,u),this.Wa=Pa("forwardChannelMaxRetries",2,u),this.wa=Pa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new wv(u&&u.concurrentRequestLimit),this.Da=new QA,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Fv.prototype,t.la=8,t.G=1,t.connect=function(u,d,g,_){Ht(0),this.W=u,this.H=d||{},g&&_!==void 0&&(this.H.OSID=g,this.H.OAID=_),this.F=this.X,this.I=Gv(this,null,this.W),tc(this)};function Df(u){if(Uv(u),u.G==3){var d=u.U++,g=pr(u.I);if(Le(g,"SID",u.K),Le(g,"RID",d),Le(g,"TYPE","terminate"),Na(u,g),d=new Qr(u,u.j,d),d.L=2,d.v=Yu(pr(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=Qv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ku(d)}Kv(u)}function ec(u){u.g&&(Lf(u),u.g.cancel(),u.g=null)}function Uv(u){ec(u),u.u&&(a.clearTimeout(u.u),u.u=null),nc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function tc(u){if(!Ev(u.h)&&!u.s){u.s=!0;var d=u.Ga;ke||Q(),z||(ke(),z=!0),X.add(d,u),u.B=0}}function e1(u,d){return Tv(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ta(m(u.Ga,u,d),qv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const O=new Qr(this,this.j,u);let L=this.o;if(this.S&&(L?(L=y(L),k(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var _=this.i[g];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=zv(this,O,d),g=pr(this.I),Le(g,"RID",u),Le(g,"CVER",22),this.D&&Le(g,"X-HTTP-Session-Id",this.D),Na(this,g),L&&(this.O?d="headers="+encodeURIComponent(String(Dv(L)))+"&"+d:this.m&&bf(g,this.m,L)),Nf(this.h,O),this.Ua&&Le(g,"TYPE","init"),this.P?(Le(g,"$req",d),Le(g,"SID","null"),O.T=!0,xf(O,g,null)):xf(O,g,d),this.G=2}}else this.G==3&&(u?Bv(this,u):this.i.length==0||Ev(this.h)||Bv(this))};function Bv(u,d){var g;d?g=d.l:g=u.U++;const _=pr(u.I);Le(_,"SID",u.K),Le(_,"RID",g),Le(_,"AID",u.T),Na(u,_),u.m&&u.o&&bf(_,u.m,u.o),g=new Qr(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),d&&(u.i=d.D.concat(u.i)),d=zv(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Nf(u.h,g),xf(g,_,d)}function Na(u,d){u.H&&V(u.H,function(g,_){Le(d,_,g)}),u.l&&Cv({},function(g,_){Le(d,_,g)})}function zv(u,d,g){g=Math.min(u.i.length,g);var _=u.l?m(u.l.Na,u.l,u):null;e:{var O=u.i;let L=-1;for(;;){const $=["count="+g];L==-1?0<g?(L=O[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let Ae=!0;for(let kt=0;kt<g;kt++){let _e=O[kt].g;const Lt=O[kt].map;if(_e-=L,0>_e)L=Math.max(0,O[kt].g-100),Ae=!1;else try{YA(Lt,$,"req"+_e+"_")}catch{_&&_(Lt)}}if(Ae){_=$.join("&");break e}}}return u=u.i.splice(0,g),d.D=u,_}function Wv(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;ke||Q(),z||(ke(),z=!0),X.add(d,u),u.v=0}}function Of(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ta(m(u.Fa,u),qv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,$v(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ta(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ht(10),ec(this),$v(this))};function Lf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function $v(u){u.g=new Qr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=pr(u.qa);Le(d,"RID","rpc"),Le(d,"SID",u.K),Le(d,"AID",u.T),Le(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&Le(d,"TO",u.ja),Le(d,"TYPE","xmlhttp"),Na(u,d),u.m&&u.o&&bf(d,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Yu(pr(d)),g.m=null,g.P=!0,_v(g,u)}t.Za=function(){this.C!=null&&(this.C=null,ec(this),Of(this),Ht(19))};function nc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Hv(u,d){var g=null;if(u.g==d){nc(u),Lf(u),u.g=null;var _=2}else if(Pf(u.h,d))g=d.D,Iv(u.h,d),_=1;else return;if(u.G!=0){if(d.o)if(_==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var O=u.B;_=$u(),mt(_,new fv(_,g)),tc(u)}else Wv(u);else if(O=d.s,O==3||O==0&&0<d.X||!(_==1&&e1(u,d)||_==2&&Of(u)))switch(g&&0<g.length&&(d=u.h,d.i=d.i.concat(g)),O){case 1:Ki(u,5);break;case 4:Ki(u,10);break;case 3:Ki(u,6);break;default:Ki(u,2)}}}function qv(u,d){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*d}function Ki(u,d){if(u.j.info("Error code "+d),d==2){var g=m(u.fb,u),_=u.Xa;const O=!_;_=new qi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Gu(_,"https"),Yu(_),O?KA(_.toString(),g):GA(_.toString(),g)}else Ht(2);u.G=0,u.l&&u.l.sa(d),Kv(u),Uv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function Kv(u){if(u.G=0,u.ka=[],u.l){const d=Sv(u.h);(d.length!=0||u.i.length!=0)&&(P(u.ka,d),P(u.ka,u.i),u.h.i.length=0,A(u.i),u.i.length=0),u.l.ra()}}function Gv(u,d,g){var _=g instanceof qi?pr(g):new qi(g);if(_.g!="")d&&(_.g=d+"."+_.g),Qu(_,_.s);else{var O=a.location;_=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var L=new qi(null);_&&Gu(L,_),d&&(L.g=d),O&&Qu(L,O),g&&(L.l=g),_=L}return g=u.D,d=u.ya,g&&d&&Le(_,g,d),Le(_,"VER",u.la),Na(u,_),_}function Qv(u,d,g){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Ze(new Xu({eb:g})):new Ze(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yv(){}t=Yv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function rc(){}rc.prototype.g=function(u,d){return new cn(u,d)};function cn(u,d){xe.call(this),this.g=new Fv(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!E(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Gs(this)}w(cn,xe),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Df(this.g)},cn.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=Ot(u),u=g);d.i.push(new VA(d.Ya++,u)),d.G==3&&tc(d)},cn.prototype.N=function(){this.g.l=null,delete this.j,Df(this.g),delete this.g,cn.aa.N.call(this)};function Xv(u){If.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const g in d){u=g;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}w(Xv,If);function Jv(){Sf.call(this),this.status=1}w(Jv,Sf);function Gs(u){this.g=u}w(Gs,Yv),Gs.prototype.ua=function(){mt(this.g,"a")},Gs.prototype.ta=function(u){mt(this.g,new Xv(u))},Gs.prototype.sa=function(u){mt(this.g,new Jv)},Gs.prototype.ra=function(){mt(this.g,"b")},rc.prototype.createWebChannel=rc.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,lk=function(){return new rc},ak=function(){return $u()},ok=$i,jm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hu.NO_ERROR=0,Hu.TIMEOUT=8,Hu.HTTP_ERROR=6,Qc=Hu,pv.COMPLETE="complete",sk=pv,uv.EventType=wa,wa.OPEN="a",wa.CLOSE="b",wa.ERROR="c",wa.MESSAGE="d",xe.prototype.listen=xe.prototype.K,Za=uv,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,ik=Ze}).apply(typeof Ic<"u"?Ic:typeof self<"u"?self:typeof window<"u"?window:{});const K0="@firebase/firestore";/**
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
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let la="10.14.0";/**
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
 */const Es=new Rd("@firebase/firestore");function Ua(){return Es.logLevel}function Y(t,...e){if(Es.logLevel<=fe.DEBUG){const n=e.map(A_);Es.debug(`Firestore (${la}): ${t}`,...n)}}function Ur(t,...e){if(Es.logLevel<=fe.ERROR){const n=e.map(A_);Es.error(`Firestore (${la}): ${t}`,...n)}}function Ts(t,...e){if(Es.logLevel<=fe.WARN){const n=e.map(A_);Es.warn(`Firestore (${la}): ${t}`,...n)}}function A_(t){if(typeof t=="string")return t;try{/**
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${la}) INTERNAL ASSERTION FAILED: `+t;throw Ur(e),new Error(e)}function Se(t,e){t||re()}function oe(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends ur{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class uk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ck{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ut.UNAUTHENTICATED))}shutdown(){}}class vL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wL{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new uk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new Ut(e)}}class EL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new EL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Se(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new IL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function CL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class P_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Uo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new ut(0,0))}static max(){return new se(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Hl{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends Hl{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const kL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Hl{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return kL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ve.fromString(e))}static fromName(e){return new J(Ve.fromString(e).popFirst(5))}static empty(){return new J(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ve(e.slice()))}}function xL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new ki(i,J.empty(),e)}function RL(t){return new ki(t.readTime,t.key,-1)}class ki{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ki(se.min(),J.empty(),-1)}static max(){return new ki(se.max(),J.empty(),-1)}}function AL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const PL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wu(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==PL)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Eu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class N_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}N_.oe=-1;function Od(t){return t==null}function Mh(t){return t===0&&1/t==-1/0}function DL(t){return typeof t=="number"&&Number.isInteger(t)&&!Mh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function G0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let ct=class Fm{constructor(e,n){this.comparator=e,this.root=n||Ei.EMPTY}insert(e,n){return new Fm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ei.BLACK,null,null))}remove(e){return new Fm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ei.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sc(this.root,e,this.comparator,!0)}},Sc=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ei=class gr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??gr.RED,this.left=i??gr.EMPTY,this.right=s??gr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new gr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}};Ei.EMPTY=null,Ei.RED=!0,Ei.BLACK=!1;Ei.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ei(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Q0(this.data.getIterator())}getIteratorFrom(e){return new Q0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class Q0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new fn([])}unionWith(e){let n=new Pt(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Uo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class dk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dk("Invalid base64 string: "+s):s}}(e);return new It(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const OL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(t){if(Se(!!t),typeof t=="string"){let e=0;const n=OL.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Is(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */function b_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function D_(t){const e=t.mapValue.fields.__previous_value__;return b_(e)?D_(e):e}function ql(t){const e=xi(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class LL{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Bo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cc={mapValue:{}};function Ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?b_(t)?4:VL(t)?9007199254740991:ML(t)?10:11:re()}function ar(t,e){if(t===e)return!0;const n=Ss(t);if(n!==Ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ql(t).isEqual(ql(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xi(i.timestampValue),a=xi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Is(i.bytesValue).isEqual(Is(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return nt(i.geoPointValue.latitude)===nt(s.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return nt(i.integerValue)===nt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=nt(i.doubleValue),a=nt(s.doubleValue);return o===a?Mh(o)===Mh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Uo(t.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(G0(o)!==G0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ar(o[l],a[l])))return!1;return!0}(t,e);default:return re()}}function Kl(t,e){return(t.values||[]).find(n=>ar(n,e))!==void 0}function zo(t,e){if(t===e)return 0;const n=Ss(t),r=Ss(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=nt(s.integerValue||s.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Y0(t.timestampValue,e.timestampValue);case 4:return Y0(ql(t),ql(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Is(s),l=Is(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ye(a[c],l[c]);if(h!==0)return h}return ye(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ye(nt(s.latitude),nt(o.latitude));return a!==0?a:ye(nt(s.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return X0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},m=o.fields||{},v=(a=f.value)===null||a===void 0?void 0:a.arrayValue,w=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=ye(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:X0(v,w)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Cc.mapValue&&o===Cc.mapValue)return 0;if(s===Cc.mapValue)return 1;if(o===Cc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=ye(l[f],h[f]);if(m!==0)return m;const v=zo(a[l[f]],c[h[f]]);if(v!==0)return v}return ye(l.length,h.length)}(t.mapValue,e.mapValue);default:throw re()}}function Y0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=xi(t),r=xi(e),i=ye(n.seconds,r.seconds);return i!==0?i:ye(n.nanos,r.nanos)}function X0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=zo(n[i],r[i]);if(s)return s}return ye(n.length,r.length)}function Wo(t){return Um(t)}function Um(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Um(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Um(n.fields[o])}`;return i+"}"}(t.mapValue):re()}function J0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bm(t){return!!t&&"integerValue"in t}function O_(t){return!!t&&"arrayValue"in t}function Z0(t){return!!t&&"nullValue"in t}function eE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yc(t){return!!t&&"mapValue"in t}function ML(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function dl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return js(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=dl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dl(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=dl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){js(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new en(dl(this.value))}}function fk(t){const e=[];return js(t.fields,(n,r)=>{const i=new Et([n]);if(Yc(r)){const s=fk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
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
 */class zt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new zt(e,0,se.min(),se.min(),se.min(),en.empty(),0)}static newFoundDocument(e,n,r,i){return new zt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new zt(e,2,n,se.min(),se.min(),en.empty(),0)}static newUnknownDocument(e,n){return new zt(e,3,n,se.min(),se.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vh{constructor(e,n){this.position=e,this.inclusive=n}}function tE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=zo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function nE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ar(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gl{constructor(e,n="asc"){this.field=e,this.dir=n}}function jL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pk{}class at extends pk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UL(e,n,r):n==="array-contains"?new WL(e,r):n==="in"?new $L(e,r):n==="not-in"?new HL(e,r):n==="array-contains-any"?new qL(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BL(e,r):new zL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zo(n,this.value)):n!==null&&Ss(this.value)===Ss(n)&&this.matchesComparison(zo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends pk{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Qn(e,n)}matches(e){return mk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mk(t){return t.op==="and"}function gk(t){return FL(t)&&mk(t)}function FL(t){for(const e of t.filters)if(e instanceof Qn)return!1;return!0}function zm(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+Wo(t.value);if(gk(t))return t.filters.map(e=>zm(e)).join(",");{const e=t.filters.map(n=>zm(n)).join(",");return`${t.op}(${e})`}}function _k(t,e){return t instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.field.isEqual(i.field)&&ar(r.value,i.value)}(t,e):t instanceof Qn?function(r,i){return i instanceof Qn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&_k(o,i.filters[a]),!0):!1}(t,e):void re()}function yk(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${Wo(n.value)}`}(t):t instanceof Qn?function(n){return n.op.toString()+" {"+n.getFilters().map(yk).join(" ,")+"}"}(t):"Filter"}class UL extends at{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class BL extends at{constructor(e,n){super(e,"in",n),this.keys=vk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zL extends at{constructor(e,n){super(e,"not-in",n),this.keys=vk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class WL extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return O_(n)&&Kl(n.arrayValue,this.value)}}class $L extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Kl(this.value.arrayValue,n)}}class HL extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Kl(this.value.arrayValue,n)}}class qL extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!O_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Kl(this.value.arrayValue,r))}}/**
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
 */class KL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function rE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KL(t,e,n,r,i,s,o)}function L_(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Od(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wo(r)).join(",")),e.ue=n}return e.ue}function M_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_k(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nE(t.startAt,e.startAt)&&nE(t.endAt,e.endAt)}function Wm(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ua{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function GL(t,e,n,r,i,s,o,a){return new ua(t,e,n,r,i,s,o,a)}function Ld(t){return new ua(t)}function iE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wk(t){return t.collectionGroup!==null}function fl(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Pt(Et.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Gl(s,r))}),n.has(Et.keyField().canonicalString())||e.ce.push(new Gl(Et.keyField(),r))}return e.ce}function ir(t){const e=oe(t);return e.le||(e.le=QL(e,fl(t))),e.le}function QL(t,e){if(t.limitType==="F")return rE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Gl(i.field,s)});const n=t.endAt?new Vh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vh(t.startAt.position,t.startAt.inclusive):null;return rE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $m(t,e){const n=t.filters.concat([e]);return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jh(t,e,n){return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Md(t,e){return M_(ir(t),ir(e))&&t.limitType===e.limitType}function Ek(t){return`${L_(ir(t))}|lt:${t.limitType}`}function Zs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>yk(i)).join(", ")}]`),Od(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Wo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Wo(i)).join(",")),`Target(${r})`}(ir(t))}; limitType=${t.limitType})`}function Vd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of fl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=tE(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,fl(r),i)||r.endAt&&!function(o,a,l){const c=tE(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,fl(r),i))}(t,e)}function YL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tk(t){return(e,n)=>{let r=!1;for(const i of fl(t)){const s=XL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XL(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?zo(l,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
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
 */class ca{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hk(this.inner)}size(){return this.innerSize}}/**
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
 */const JL=new ct(J.comparator);function Br(){return JL}const Ik=new ct(J.comparator);function el(...t){let e=Ik;for(const n of t)e=e.insert(n.key,n);return e}function Sk(t){let e=Ik;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ss(){return pl()}function Ck(){return pl()}function pl(){return new ca(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZL=new ct(J.comparator),eM=new Pt(J.comparator);function pe(...t){let e=eM;for(const n of t)e=e.add(n);return e}const tM=new Pt(ye);function nM(){return tM}/**
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
 */function V_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mh(e)?"-0":e}}function kk(t){return{integerValue:""+t}}function xk(t,e){return DL(e)?kk(e):V_(t,e)}/**
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
 */class jd{constructor(){this._=void 0}}function rM(t,e,n){return t instanceof Ql?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&b_(s)&&(s=D_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof $o?Ak(t,e):t instanceof Ho?Pk(t,e):function(i,s){const o=Rk(i,s),a=sE(o)+sE(i.Pe);return Bm(o)&&Bm(i.Pe)?kk(a):V_(i.serializer,a)}(t,e)}function iM(t,e,n){return t instanceof $o?Ak(t,e):t instanceof Ho?Pk(t,e):n}function Rk(t,e){return t instanceof Yl?function(r){return Bm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ql extends jd{}class $o extends jd{constructor(e){super(),this.elements=e}}function Ak(t,e){const n=Nk(e);for(const r of t.elements)n.some(i=>ar(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ho extends jd{constructor(e){super(),this.elements=e}}function Pk(t,e){let n=Nk(e);for(const r of t.elements)n=n.filter(i=>!ar(i,r));return{arrayValue:{values:n}}}class Yl extends jd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function sE(t){return nt(t.integerValue||t.doubleValue)}function Nk(t){return O_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Fd{constructor(e,n){this.field=e,this.transform=n}}function sM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof $o&&i instanceof $o||r instanceof Ho&&i instanceof Ho?Uo(r.elements,i.elements,ar):r instanceof Yl&&i instanceof Yl?ar(r.Pe,i.Pe):r instanceof Ql&&i instanceof Ql}(t.transform,e.transform)}class oM{constructor(e,n){this.version=e,this.transformResults=n}}class Hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Hn}static exists(e){return new Hn(void 0,e)}static updateTime(e){return new Hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ud{}function bk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ok(t.key,Hn.none()):new Tu(t.key,t.data,Hn.none());{const n=t.data,r=en.empty();let i=new Pt(Et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Bi(t.key,r,new fn(i.toArray()),Hn.none())}}function aM(t,e,n){t instanceof Tu?function(i,s,o){const a=i.value.clone(),l=aE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Bi?function(i,s,o){if(!Xc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=aE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Dk(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ml(t,e,n,r){return t instanceof Tu?function(s,o,a,l){if(!Xc(s.precondition,o))return a;const c=s.value.clone(),h=lE(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Bi?function(s,o,a,l){if(!Xc(s.precondition,o))return a;const c=lE(s.fieldTransforms,l,o),h=o.data;return h.setAll(Dk(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Xc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Rk(r.transform,i||null);s!=null&&(n===null&&(n=en.empty()),n.set(r.field,s))}return n||null}function oE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Uo(r,i,(s,o)=>sM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tu extends Ud{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bi extends Ud{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Dk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function aE(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,iM(o,a,n[i]))}return r}function lE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rM(s,o,e))}return r}class Ok extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uM extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ml(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ml(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ck();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=bk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&Uo(this.mutations,e.mutations,(n,r)=>oE(n,r))&&Uo(this.baseMutations,e.baseMutations,(n,r)=>oE(n,r))}}class j_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return ZL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new j_(e,n,r,i)}}/**
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
 */class hM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,me;function fM(t){switch(t){default:return re();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function Lk(t){if(t===void 0)return Ur("GRPC error has no .code"),j.UNKNOWN;switch(t){case st.OK:return j.OK;case st.CANCELLED:return j.CANCELLED;case st.UNKNOWN:return j.UNKNOWN;case st.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case st.INTERNAL:return j.INTERNAL;case st.UNAVAILABLE:return j.UNAVAILABLE;case st.UNAUTHENTICATED:return j.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case st.NOT_FOUND:return j.NOT_FOUND;case st.ALREADY_EXISTS:return j.ALREADY_EXISTS;case st.PERMISSION_DENIED:return j.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case st.ABORTED:return j.ABORTED;case st.OUT_OF_RANGE:return j.OUT_OF_RANGE;case st.UNIMPLEMENTED:return j.UNIMPLEMENTED;case st.DATA_LOSS:return j.DATA_LOSS;default:return re()}}(me=st||(st={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pM(){return new TextEncoder}/**
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
 */const mM=new ds([4294967295,4294967295],0);function uE(t){const e=pM().encode(t),n=new rk;return n.update(e),new Uint8Array(n.digest())}function cE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ds([n,r],0),new ds([i,s],0)]}class F_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new tl(`Invalid padding: ${n}`);if(r<0)throw new tl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new tl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new tl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ds.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ds.fromNumber(r)));return i.compare(mM)===1&&(i=new ds([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=uE(e),[r,i]=cE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new F_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=uE(e),[r,i]=cE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class tl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Iu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bd(se.min(),i,new ct(ye),Br(),pe())}}class Iu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Iu(r,n,pe(),pe(),pe())}}/**
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
 */class Jc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Mk{constructor(e,n){this.targetId=e,this.me=n}}class Vk{constructor(e,n,r=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class hE{constructor(){this.fe=0,this.ge=fE(),this.pe=It.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=pe(),n=pe(),r=pe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new Iu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=fE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Br(),this.qe=dE(),this.Qe=new ct(ye)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Wm(s))if(r===0){const o=new J(s.path);this.Ue(n,o,zt.newNoDocument(o,se.min()))}else Se(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Is(r).toUint8Array()}catch(l){if(l instanceof dk)return Ts("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new F_(o,i,s)}catch(l){return Ts(l instanceof tl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Wm(a.target)){const l=new J(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,zt.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=pe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Bd(e,n,this.Qe,this.ke,r);return this.ke=Br(),this.qe=dE(),this.Qe=new ct(ye),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new hE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Pt(ye),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function dE(){return new ct(J.comparator)}function fE(){return new ct(J.comparator)}const _M={asc:"ASCENDING",desc:"DESCENDING"},yM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vM={and:"AND",or:"OR"};class wM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hm(t,e){return t.useProto3Json||Od(e)?e:{value:e}}function Fh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function EM(t,e){return Fh(t,e.toTimestamp())}function sr(t){return Se(!!t),se.fromTimestamp(function(n){const r=xi(n);return new ut(r.seconds,r.nanos)}(t))}function U_(t,e){return qm(t,e).canonicalString()}function qm(t,e){const n=function(i){return new Ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Fk(t){const e=Ve.fromString(t);return Se($k(e)),e}function Km(t,e){return U_(t.databaseId,e.path)}function yp(t,e){const n=Fk(e);if(n.get(1)!==t.databaseId.projectId)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(Bk(n))}function Uk(t,e){return U_(t.databaseId,e)}function TM(t){const e=Fk(t);return e.length===4?Ve.emptyPath():Bk(e)}function Gm(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bk(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pE(t,e,n){return{name:Km(t,e),fields:n.value.mapValue.fields}}function IM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Se(h===void 0||typeof h=="string"),It.fromBase64String(h||"")):(Se(h===void 0||h instanceof Buffer||h instanceof Uint8Array),It.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:Lk(c.code);return new H(h,c.message||"")}(o);n=new Vk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yp(t,r.document.name),s=sr(r.document.updateTime),o=r.document.createTime?sr(r.document.createTime):se.min(),a=new en({mapValue:{fields:r.document.fields}}),l=zt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Jc(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yp(t,r.document),s=r.readTime?sr(r.readTime):se.min(),o=zt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yp(t,r.document),s=r.removedTargetIds||[];n=new Jc([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dM(i,s),a=r.targetId;n=new Mk(a,o)}}return n}function SM(t,e){let n;if(e instanceof Tu)n={update:pE(t,e.key,e.value)};else if(e instanceof Ok)n={delete:Km(t,e.key)};else if(e instanceof Bi)n={update:pE(t,e.key,e.data),updateMask:DM(e.fieldMask)};else{if(!(e instanceof uM))return re();n={verify:Km(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ql)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ho)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:EM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(t,e.precondition)),n}function CM(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?sr(i.updateTime):sr(s);return o.isEqual(se.min())&&(o=sr(s)),new oM(o,i.transformResults||[])}(n,e))):[]}function kM(t,e){return{documents:[Uk(t,e.path)]}}function xM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Uk(t,i);const s=function(c){if(c.length!==0)return Wk(Qn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:eo(m.field),direction:PM(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Hm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function RM(t){let e=TM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=zk(f);return m instanceof Qn&&gk(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(w){return new Gl(to(w.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Od(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,v=f.values||[];return new Vh(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new Vh(v,m)}(n.endAt)),GL(e,i,o,s,a,"F",l,c)}function AM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=to(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=to(n.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=to(n.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=to(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return at.create(to(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qn.create(n.compositeFilter.filters.map(r=>zk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function PM(t){return _M[t]}function NM(t){return yM[t]}function bM(t){return vM[t]}function eo(t){return{fieldPath:t.canonicalString()}}function to(t){return Et.fromServerFormat(t.fieldPath)}function Wk(t){return t instanceof at?function(n){if(n.op==="=="){if(eE(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NAN"}};if(Z0(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(eE(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NAN"}};if(Z0(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(n.field),op:NM(n.op),value:n.value}}}(t):t instanceof Qn?function(n){const r=n.getFilters().map(i=>Wk(i));return r.length===1?r[0]:{compositeFilter:{op:bM(n.op),filters:r}}}(t):re()}function DM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $k(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ci{constructor(e,n,r,i,s=se.min(),o=se.min(),a=It.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class OM{constructor(e){this.ct=e}}function LM(t){const e=RM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jh(e,e.limit,"L"):e}/**
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
 */class MM{constructor(){this.un=new VM}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(ki.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class VM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pt(Ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pt(Ve.comparator)).toArray()}}/**
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
 */class jM{constructor(){this.changes=new ca(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class UM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ml(r.mutation,i,fn.empty(),ut.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const i=ss();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=el();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ss();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Br();const o=pl(),a=function(){return pl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Bi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ml(h.mutation,c,h.mutation.getFieldMask(),ut.now())):o.set(c.key,fn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new FM(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=pl();let i=new ct((o,a)=>o-a),s=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||fn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||pe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=Ck();h.forEach(m=>{if(!s.has(m)){const v=bk(n.get(m),r.get(m));v!==null&&f.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(ss());let a=-1,l=s;return o.next(c=>U.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,pe())).next(h=>({batchId:a,changes:Sk(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=el();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=el();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,l=>{const c=function(f,m){return new ua(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,zt.newInvalidDocument(h)))});let a=el();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&ml(h.mutation,c,fn.empty(),ut.now()),Vd(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class BM{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sr(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:LM(i.bundledQuery),readTime:sr(i.readTime)}}(n)),U.resolve()}}/**
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
 */class zM{constructor(){this.overlays=new ct(J.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ss();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=ss(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ct((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ss(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ss(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hM(n,r));let s=this.Ir.get(n);s===void 0&&(s=pe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class WM{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class B_{constructor(){this.Tr=new Pt(_t.Er),this.dr=new Pt(_t.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new _t(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new _t(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new Ve([])),r=new _t(n,e),i=new _t(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new Ve([])),r=new _t(n,e),i=new _t(n,e+1);let s=pe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _t(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _t{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||ye(e.wr,n.wr)}static Ar(e,n){return ye(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
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
 */class $M{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Pt(_t.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new _t(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _t(n,0),i=new _t(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pt(ye);return n.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new _t(new J(s),0);let a=new Pt(ye);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new _t(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new _t(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HM{constructor(e){this.Mr=e,this.docs=function(){return new ct(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():zt.newInvalidDocument(n))}getEntries(e,n){let r=Br();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():zt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Br();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||AL(RL(h),r)<=0||(i.has(h.key)||Vd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qM(this)}getSize(e){return U.resolve(this.size)}}class qM extends jM{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class KM{constructor(e){this.persistence=e,this.Nr=new ca(n=>L_(n),M_),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new B_,this.targetCount=0,this.kr=qo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new qo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class GM{constructor(e,n){this.qr={},this.overlays={},this.Qr=new N_(0),this.Kr=!1,this.Kr=!0,this.$r=new WM,this.referenceDelegate=e(this),this.Ur=new KM(this),this.indexManager=new MM,this.remoteDocumentCache=function(i){return new HM(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new OM(n),this.Gr=new BM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new $M(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new QM(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class QM extends NL{constructor(e){super(),this.currentSequenceNumber=e}}class z_{constructor(e){this.persistence=e,this.Jr=new B_,this.Yr=null}static Zr(e){return new z_(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class W_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=pe(),i=pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new W_(e,n.fromCache,r,i)}}/**
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
 */class YM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class XM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Vb()?8:bL($t())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new YM;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ua()<=fe.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Zs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Ua()<=fe.DEBUG&&Y("QueryEngine","Query:",Zs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ua()<=fe.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Zs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(n))):U.resolve())}Yi(e,n){if(iE(n))return U.resolve(null);let r=ir(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=jh(n,null,"F"),r=ir(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=pe(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,jh(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return iE(n)||i.isEqual(se.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(Ua()<=fe.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zs(n)),this.rs(e,o,n,xL(i,-1)).next(a=>a))})}ts(e,n){let r=new Pt(Tk(e));return n.forEach((i,s)=>{Vd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ua()<=fe.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Zs(n)),this.Ji.getDocumentsMatchingQuery(e,n,ki.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class JM{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ct(ye),this._s=new ca(s=>L_(s),M_),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function ZM(t,e,n,r){return new JM(t,e,n,r)}async function Hk(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=pe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function eV(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,m=f.keys();let v=U.resolve();return m.forEach(w=>{v=v.next(()=>h.getEntry(l,w)).next(A=>{const P=c.docVersions.get(w);Se(P!==null),A.version.compareTo(P)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=pe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function qk(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function tV(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(It.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(f,v),function(A,P,T){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,v,h)&&a.push(n.Ur.updateTargetData(s,v))});let l=Br(),c=pe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(nV(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(se.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function nV(t,e,n){let r=pe(),i=pe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Br();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function rV(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iV(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new ci(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Qm(t,e,n){const r=oe(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Eu(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function mE(t,e,n){const r=oe(t);let i=se.min(),s=pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=oe(l),m=f._s.get(h);return m!==void 0?U.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,ir(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:pe())).next(a=>(sV(r,YL(e),a),{documents:a,Ts:s})))}function sV(t,e,n){let r=t.us.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class gE{constructor(){this.activeTargetIds=nM()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oV{constructor(){this.so=new gE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new gE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aV{_o(e){}shutdown(){}}/**
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
 */class _E{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kc=null;function vp(){return kc===null?kc=function(){return 268435456+Math.round(2147483648*Math.random())}():kc++,"0x"+kc.toString(16)}/**
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
 */const lV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class uV{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ft="WebChannelConnection";class cV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=vp(),l=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ts("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+la}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=lV[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=vp();return new Promise((o,a)=>{const l=new ik;l.setWithCredentials(!0),l.listenOnce(sk.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qc.NO_ERROR:const h=l.getResponseJson();Y(Ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Qc.TIMEOUT:Y(Ft,`RPC '${e}' ${s} timed out`),a(new H(j.DEADLINE_EXCEEDED,"Request time out"));break;case Qc.HTTP_ERROR:const f=l.getStatus();if(Y(Ft,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const w=function(P){const T=P.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(T)>=0?T:j.UNKNOWN}(v.status);a(new H(w,v.message))}else a(new H(j.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(j.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Y(Ft,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Y(Ft,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=vp(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lk(),a=ak(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");Y(Ft,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,v=!1;const w=new uV({Io:P=>{v?Y(Ft,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(Y(Ft,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),Y(Ft,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},To:()=>f.close()}),A=(P,T,E)=>{P.listen(T,I=>{try{E(I)}catch(D){setTimeout(()=>{throw D},0)}})};return A(f,Za.EventType.OPEN,()=>{v||(Y(Ft,`RPC '${e}' stream ${i} transport opened.`),w.yo())}),A(f,Za.EventType.CLOSE,()=>{v||(v=!0,Y(Ft,`RPC '${e}' stream ${i} transport closed`),w.So())}),A(f,Za.EventType.ERROR,P=>{v||(v=!0,Ts(Ft,`RPC '${e}' stream ${i} transport errored:`,P),w.So(new H(j.UNAVAILABLE,"The operation could not be completed")))}),A(f,Za.EventType.MESSAGE,P=>{var T;if(!v){const E=P.data[0];Se(!!E);const I=E,D=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(D){Y(Ft,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let V=function(C){const k=st[C];if(k!==void 0)return Lk(k)}(F),S=D.message;V===void 0&&(V=j.INTERNAL,S="Unknown error status: "+F+" with message "+D.message),v=!0,w.So(new H(V,S)),f.close()}else Y(Ft,`RPC '${e}' stream ${i} received:`,E),w.bo(E)}}),A(a,ok.STAT_EVENT,P=>{P.stat===jm.PROXY?Y(Ft,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===jm.NOPROXY&&Y(Ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.wo()},0),w}}function wp(){return typeof document<"u"?document:null}/**
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
 */function zd(t){return new wM(t,!0)}/**
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
 */class Kk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Gk{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Kk(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Ur(n.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hV extends Gk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=IM(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?sr(o.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Gm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Wm(l)?{documents:kM(s,l)}:{query:xM(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=jk(s,o.resumeToken);const c=Hm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){a.readTime=Fh(s,o.snapshotVersion.toTimestamp());const c=Hm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=AM(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Gm(this.serializer),n.removeTarget=e,this.a_(n)}}class dV extends Gk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=CM(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Gm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>SM(this.serializer,r))};this.a_(n)}}/**
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
 */class fV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,qm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,qm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class pV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ur(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class mV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Fs(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=oe(l);c.L_.add(4),await Su(c),c.q_.set("Unknown"),c.L_.delete(4),await Wd(c)}(this))})}),this.q_=new pV(r,i)}}async function Wd(t){if(Fs(t))for(const e of t.B_)await e(!0)}async function Su(t){for(const e of t.B_)await e(!1)}function Qk(t,e){const n=oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),K_(n)?q_(n):ha(n).r_()&&H_(n,e))}function $_(t,e){const n=oe(t),r=ha(n);n.N_.delete(e),r.r_()&&Yk(n,e),n.N_.size===0&&(r.r_()?r.o_():Fs(n)&&n.q_.set("Unknown"))}function H_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ha(t).A_(e)}function Yk(t,e){t.Q_.xe(e),ha(t).R_(e)}function q_(t){t.Q_=new gM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ha(t).start(),t.q_.v_()}function K_(t){return Fs(t)&&!ha(t).n_()&&t.N_.size>0}function Fs(t){return oe(t).L_.size===0}function Xk(t){t.Q_=void 0}async function gV(t){t.q_.set("Online")}async function _V(t){t.N_.forEach((e,n)=>{H_(t,e)})}async function yV(t,e){Xk(t),K_(t)?(t.q_.M_(e),q_(t)):t.q_.set("Unknown")}async function vV(t,e,n){if(t.q_.set("Online"),e instanceof Vk&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uh(t,r)}else if(e instanceof Jc?t.Q_.Ke(e):e instanceof Mk?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await qk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(It.EMPTY_BYTE_STRING,h.snapshotVersion)),Yk(s,l);const f=new ci(h.target,l,c,h.sequenceNumber);H_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Uh(t,r)}}async function Uh(t,e,n){if(!Eu(e))throw e;t.L_.add(1),await Su(t),t.q_.set("Offline"),n||(n=()=>qk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Wd(t)})}function Jk(t,e){return e().catch(n=>Uh(t,n,e))}async function $d(t){const e=oe(t),n=Ri(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;wV(e);)try{const i=await rV(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,EV(e,i)}catch(i){await Uh(e,i)}Zk(e)&&ex(e)}function wV(t){return Fs(t)&&t.O_.length<10}function EV(t,e){t.O_.push(e);const n=Ri(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Zk(t){return Fs(t)&&!Ri(t).n_()&&t.O_.length>0}function ex(t){Ri(t).start()}async function TV(t){Ri(t).p_()}async function IV(t){const e=Ri(t);for(const n of t.O_)e.m_(n.mutations)}async function SV(t,e,n){const r=t.O_.shift(),i=j_.from(r,e,n);await Jk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $d(t)}async function CV(t,e){e&&Ri(t).V_&&await async function(r,i){if(function(o){return fM(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Ri(r).s_(),await Jk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $d(r)}}(t,e),Zk(t)&&ex(t)}async function yE(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=Fs(n);n.L_.add(3),await Su(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Wd(n)}async function kV(t,e){const n=oe(t);e?(n.L_.delete(2),await Wd(n)):e||(n.L_.add(2),await Su(n),n.q_.set("Unknown"))}function ha(t){return t.K_||(t.K_=function(n,r,i){const s=oe(n);return s.w_(),new hV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:gV.bind(null,t),Ro:_V.bind(null,t),mo:yV.bind(null,t),d_:vV.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),K_(t)?q_(t):t.q_.set("Unknown")):(await t.K_.stop(),Xk(t))})),t.K_}function Ri(t){return t.U_||(t.U_=function(n,r,i){const s=oe(n);return s.w_(),new dV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:TV.bind(null,t),mo:CV.bind(null,t),f_:IV.bind(null,t),g_:SV.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await $d(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class G_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new G_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Q_(t,e){if(Ur("AsyncQueue",`${e}: ${t}`),Eu(t))return new H(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ko{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=el(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new ko(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class vE{constructor(){this.W_=new ct(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ko{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ko(e,n,ko.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Md(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class xV{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class RV{constructor(){this.queries=wE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=wE(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new H(j.ABORTED,"Firestore shutting down"))}}function wE(){return new ca(t=>Ek(t),Md)}async function Y_(t,e){const n=oe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new xV,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Q_(o,`Initialization of query '${Zs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&J_(n)}async function X_(t,e){const n=oe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AV(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&J_(n)}function PV(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function J_(t){t.Y_.forEach(e=>{e.next()})}var Ym,EE;(EE=Ym||(Ym={})).ea="default",EE.Cache="cache";class Z_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ko(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ym.Cache}}/**
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
 */class tx{constructor(e){this.key=e}}class nx{constructor(e){this.key=e}}class NV{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=pe(),this.mutatedKeys=pe(),this.Aa=Tk(e),this.Ra=new ko(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new vE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),v=Vd(this.query,f)?f:null,w=!!m&&this.mutatedKeys.has(m.key),A=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let P=!1;m&&v?m.data.isEqual(v.data)?w!==A&&(r.track({type:3,doc:v}),P=!0):this.ga(m,v)||(r.track({type:2,doc:v}),P=!0,(l&&this.Aa(v,l)>0||c&&this.Aa(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),P=!0):m&&!v&&(r.track({type:1,doc:m}),P=!0,(l||c)&&(a=!0)),P&&(v?(o=o.add(v),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(v,w){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return A(v)-A(w)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Ko(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new vE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=pe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new nx(r))}),this.da.forEach(r=>{e.has(r)||n.push(new tx(r))}),n}ba(e){this.Ta=e.Ts,this.da=pe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ko.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class bV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DV{constructor(e){this.key=e,this.va=!1}}class OV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ca(a=>Ek(a),Md),this.Ma=new Map,this.xa=new Set,this.Oa=new ct(J.comparator),this.Na=new Map,this.La=new B_,this.Ba={},this.ka=new Map,this.qa=qo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function LV(t,e,n=!0){const r=lx(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await rx(r,e,n,!0),i}async function MV(t,e){const n=lx(t);await rx(n,e,!0,!1)}async function rx(t,e,n,r){const i=await iV(t.localStore,ir(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await VV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Qk(t.remoteStore,i),a}async function VV(t,e,n,r,i){t.Ka=(f,m,v)=>async function(A,P,T,E){let I=P.view.ma(T);I.ns&&(I=await mE(A.localStore,P.query,!1).then(({documents:S})=>P.view.ma(S,I)));const D=E&&E.targetChanges.get(P.targetId),F=E&&E.targetMismatches.get(P.targetId)!=null,V=P.view.applyChanges(I,A.isPrimaryClient,D,F);return IE(A,P.targetId,V.wa),V.snapshot}(t,f,m,v);const s=await mE(t.localStore,e,!0),o=new NV(e,s.Ts),a=o.ma(s.documents),l=Iu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);IE(t,n,c.wa);const h=new bV(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function jV(t,e,n){const r=oe(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Md(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&$_(r.remoteStore,i.targetId),Xm(r,i.targetId)}).catch(wu)):(Xm(r,i.targetId),await Qm(r.localStore,i.targetId,!0))}async function FV(t,e){const n=oe(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$_(n.remoteStore,r.targetId))}async function UV(t,e,n){const r=KV(t);try{const i=await function(o,a){const l=oe(o),c=ut.now(),h=a.reduce((v,w)=>v.add(w.key),pe());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let w=Br(),A=pe();return l.cs.getEntries(v,h).next(P=>{w=P,w.forEach((T,E)=>{E.isValidDocument()||(A=A.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,w)).next(P=>{f=P;const T=[];for(const E of a){const I=lM(E,f.get(E.key).overlayedDocument);I!=null&&T.push(new Bi(E.key,I,fk(I.value.mapValue),Hn.exists(!0)))}return l.mutationQueue.addMutationBatch(v,c,T,a)}).next(P=>{m=P;const T=P.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(v,P.batchId,T)})}).then(()=>({batchId:m.batchId,changes:Sk(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new ct(ye)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Cu(r,i.changes),await $d(r.remoteStore)}catch(i){const s=Q_(i,"Failed to persist write");n.reject(s)}}async function ix(t,e){const n=oe(t);try{const r=await tV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Se(o.va):i.removedDocuments.size>0&&(Se(o.va),o.va=!1))}),await Cu(n,r,e)}catch(r){await wu(r)}}function TE(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=oe(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&J_(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BV(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ct(J.comparator);o=o.insert(s,zt.newNoDocument(s,se.min()));const a=pe().add(s),l=new Bd(se.min(),new Map,new ct(ye),o,a);await ix(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),ey(r)}else await Qm(r.localStore,e,!1).then(()=>Xm(r,e,n)).catch(wu)}async function zV(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await eV(n.localStore,e);ox(n,r,null),sx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cu(n,i)}catch(i){await wu(i)}}async function WV(t,e,n){const r=oe(t);try{const i=await function(o,a){const l=oe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Se(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);ox(r,e,n),sx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cu(r,i)}catch(i){await wu(i)}}function sx(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function ox(t,e,n){const r=oe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Xm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ax(t,r)})}function ax(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&($_(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ey(t))}function IE(t,e,n){for(const r of n)r instanceof tx?(t.La.addReference(r.key,e),$V(t,r)):r instanceof nx?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ax(t,r.key)):re()}function $V(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),ey(t))}function ey(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(Ve.fromString(e)),r=t.qa.next();t.Na.set(r,new DV(n)),t.Oa=t.Oa.insert(n,r),Qk(t.remoteStore,new ci(ir(Ld(n.path)),r,"TargetPurposeLimboResolution",N_.oe))}}async function Cu(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=W_.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=oe(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,m=>U.forEach(m.$i,v=>h.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>U.forEach(m.Ui,v=>h.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!Eu(f))throw f;Y("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=h.os.get(m),w=v.snapshotVersion,A=v.withLastLimboFreeSnapshotVersion(w);h.os=h.os.insert(m,A)}}}(r.localStore,s))}async function HV(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await Hk(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new H(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cu(n,r.hs)}}function qV(t,e){const n=oe(t),r=n.Na.get(e);if(r&&r.va)return pe().add(r.key);{let i=pe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function lx(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ix.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BV.bind(null,e),e.Ca.d_=AV.bind(null,e.eventManager),e.Ca.$a=PV.bind(null,e.eventManager),e}function KV(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WV.bind(null,e),e}class Bh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return ZM(this.persistence,new XM,e.initialUser,this.serializer)}Ga(e){return new GM(z_.Zr,this.serializer)}Wa(e){return new oV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bh.provider={build:()=>new Bh};class Jm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>TE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HV.bind(null,this.syncEngine),await kV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RV}()}createDatastore(e){const n=zd(e.databaseInfo.databaseId),r=function(s){return new cV(s)}(e.databaseInfo);return function(s,o,a,l){return new fV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new mV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>TE(this.syncEngine,n,0),function(){return _E.D()?new _E:new aV}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new OV(i,s,o,a,l,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);Y("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Su(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jm.provider={build:()=>new Jm};/**
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
 */class ty{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class GV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ut.UNAUTHENTICATED,this.clientId=P_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Q_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ep(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Hk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function SE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QV(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>yE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>yE(e.remoteStore,i)),t._onlineComponents=e}async function QV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ep(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ts("Error using user provided cache. Falling back to memory cache: "+n),await Ep(t,new Bh)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Ep(t,new Bh);return t._offlineComponents}async function ux(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await SE(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await SE(t,new Jm))),t._onlineComponents}function YV(t){return ux(t).then(e=>e.syncEngine)}async function zh(t){const e=await ux(t),n=e.eventManager;return n.onListen=LV.bind(null,e.syncEngine),n.onUnlisten=jV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=MV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FV.bind(null,e.syncEngine),n}function XV(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new ty({next:m=>{h.Za(),o.enqueueAndForget(()=>X_(s,f));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new H(j.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?c.reject(new H(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Z_(Ld(a.path),h,{includeMetadataChanges:!0,_a:!0});return Y_(s,f)}(await zh(t),t.asyncQueue,e,n,r)),r.promise}function JV(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new ty({next:m=>{h.Za(),o.enqueueAndForget(()=>X_(s,f)),m.fromCache&&l.source==="server"?c.reject(new H(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Z_(a,h,{includeMetadataChanges:!0,_a:!0});return Y_(s,f)}(await zh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function cx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const CE=new Map;/**
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
 */function hx(t,e,n){if(!n)throw new H(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dx(t,e,n,r){if(e===!0&&r===!0)throw new H(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kE(t){if(!J.isDocumentKey(t))throw new H(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xE(t){if(J.isDocumentKey(t))throw new H(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hd(t);throw new H(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ZV(t,e){if(e<=0)throw new H(j.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class RE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new RE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new RE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ck;switch(r.type){case"firstParty":return new TL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=CE.get(n);r&&(Y("ComponentProvider","Removing Datastore"),CE.delete(n),r.terminate())}(this),Promise.resolve()}}function fx(t,e,n,r={}){var i;const s=(t=ln(t,qd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ut.MOCK_USER;else{a=pC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ut(c)}t._authCredentials=new vL(new uk(a,l))}}/**
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
 */class hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hr(this.firestore,e,this._query)}}class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class Nr extends hr{constructor(e,n,r){super(e,n,Ld(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new J(e))}withConverter(e){return new Nr(this.firestore,e,this._path)}}function Ai(t,e,...n){if(t=we(t),hx("collection","path",e),t instanceof qd){const r=Ve.fromString(e,...n);return xE(r),new Nr(t,null,r)}{if(!(t instanceof Nt||t instanceof Nr))throw new H(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return xE(r),new Nr(t.firestore,null,r)}}function Qt(t,e,...n){if(t=we(t),arguments.length===1&&(e=P_.newId()),hx("doc","path",e),t instanceof qd){const r=Ve.fromString(e,...n);return kE(r),new Nt(t,null,new J(r))}{if(!(t instanceof Nt||t instanceof Nr))throw new H(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return kE(r),new Nt(t.firestore,t instanceof Nr?t.converter:null,new J(r))}}/**
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
 */class AE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Kk(this,"async_queue_retry"),this.Vu=()=>{const r=wp();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=wp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=wp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Pr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Eu(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ur("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=G_.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function PE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class zr extends qd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new AE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new AE(e),this._firestoreClient=void 0,await e}}}function px(t,e){const n=typeof t=="object"?t:Pd(),r=typeof t=="string"?t:"(default)",i=Ms(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hC("firestore");s&&fx(i,...s)}return i}function ku(t){if(t._terminated)throw new H(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ej(t),t._firestoreClient}function ej(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new LL(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,cx(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new GV(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(It.fromBase64String(e))}catch(n){throw new H(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zi{constructor(e){this._methodName=e}}/**
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
 */class Kd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */class Gd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const tj=/^__.*__$/;class nj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Bi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tu(e,this.data,n,this.fieldTransforms)}}class mx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Bi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Qd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Qd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Wh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(gx(this.Cu)&&tj.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class rj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zd(e)}Qu(e,n,r,i=!1){return new Qd({Cu:e,methodName:n,qu:r,path:Et.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yd(t){const e=t._freezeSettings(),n=zd(t._databaseId);return new rj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _x(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);oy("Data must be an object, but it was:",o,r);const a=vx(r,o);let l,c;if(s.merge)l=new fn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=Zm(e,f,n);if(!o.contains(m))throw new H(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ex(h,m)||h.push(m)}l=new fn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new nj(new en(a),l,c)}class Xd extends zi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xd}}function yx(t,e,n){return new Qd({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ny extends zi{_toFieldTransform(e){return new Fd(e.path,new Ql)}isEqual(e){return e instanceof ny}}class ry extends zi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=yx(this,e,!0),r=this.Ku.map(s=>Us(s,n)),i=new $o(r);return new Fd(e.path,i)}isEqual(e){return e instanceof ry&&Vo(this.Ku,e.Ku)}}class iy extends zi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=yx(this,e,!0),r=this.Ku.map(s=>Us(s,n)),i=new Ho(r);return new Fd(e.path,i)}isEqual(e){return e instanceof iy&&Vo(this.Ku,e.Ku)}}class sy extends zi{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Yl(e.serializer,xk(e.serializer,this.$u));return new Fd(e.path,n)}isEqual(e){return e instanceof sy&&this.$u===e.$u}}function ij(t,e,n,r){const i=t.Qu(1,e,n);oy("Data must be an object, but it was:",i,r);const s=[],o=en.empty();js(r,(l,c)=>{const h=ay(e,l,n);c=we(c);const f=i.Nu(h);if(c instanceof Xd)s.push(h);else{const m=Us(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new fn(s);return new mx(o,a,i.fieldTransforms)}function sj(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Zm(e,r,n)],l=[i];if(s.length%2!=0)throw new H(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Zm(e,s[m])),l.push(s[m+1]);const c=[],h=en.empty();for(let m=a.length-1;m>=0;--m)if(!Ex(c,a[m])){const v=a[m];let w=l[m];w=we(w);const A=o.Nu(v);if(w instanceof Xd)c.push(v);else{const P=Us(w,A);P!=null&&(c.push(v),h.set(v,P))}}const f=new fn(c);return new mx(h,f,o.fieldTransforms)}function oj(t,e,n,r=!1){return Us(n,t.Qu(r?4:3,e))}function Us(t,e){if(wx(t=we(t)))return oy("Unsupported field value:",e,t),vx(t,e);if(t instanceof zi)return function(r,i){if(!gx(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Us(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ut.fromDate(r);return{timestampValue:Fh(i.serializer,s)}}if(r instanceof ut){const s=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fh(i.serializer,s)}}if(r instanceof Kd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cs)return{bytesValue:jk(i.serializer,r._byteString)};if(r instanceof Nt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:U_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Gd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return V_(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Hd(r)}`)}(t,e)}function vx(t,e){const n={};return hk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):js(t,(r,i)=>{const s=Us(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function wx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof Kd||t instanceof Cs||t instanceof Nt||t instanceof zi||t instanceof Gd)}function oy(t,e,n){if(!wx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Hd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Zm(t,e,n){if((e=we(e))instanceof xu)return e._internalPath;if(typeof e=="string")return ay(t,e);throw Wh("Field path arguments must be of type string or ",t,!1,void 0,n)}const aj=new RegExp("[~\\*/\\[\\]]");function ay(t,e,n){if(e.search(aj)>=0)throw Wh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xu(...e.split("."))._internalPath}catch{throw Wh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new H(j.INVALID_ARGUMENT,a+t+l)}function Ex(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Tx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lj extends Tx{data(){return super.data()}}function Jd(t,e){return typeof e=="string"?ay(t,e):e instanceof xu?e._internalPath:e._delegate._internalPath}/**
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
 */function Ix(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ly{}class Zd extends ly{}function Go(t,e,...n){let r=[];e instanceof ly&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ef).length,a=s.filter(l=>l instanceof Ru).length;if(o>1||o>0&&a>0)throw new H(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ru extends Zd{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ru(e,n,r)}_apply(e){const n=this._parse(e);return Cx(e._query,n),new hr(e.firestore,e.converter,$m(e._query,n))}_parse(e){const n=Yd(e.firestore);return function(s,o,a,l,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new H(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){bE(f,h);const v=[];for(const w of f)v.push(NE(l,s,w));m={arrayValue:{values:v}}}else m=NE(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||bE(f,h),m=oj(a,o,f,h==="in"||h==="not-in");return at.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Qo(t,e,n){const r=e,i=Jd("where",t);return Ru._create(i,r,n)}class ef extends ly{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ef(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Cx(o,l),o=$m(o,l)}(e._query,n),new hr(e.firestore,e.converter,$m(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tf extends Zd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new tf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new H(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Gl(s,o)}(e._query,this._field,this._direction);return new hr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ua(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Sx(t,e="asc"){const n=e,r=Jd("orderBy",t);return tf._create(r,n)}class nf extends Zd{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new nf(e,n,r)}_apply(e){return new hr(e.firestore,e.converter,jh(e._query,this._limit,this._limitType))}}function $h(t){return ZV("limit",t),nf._create("limit",t,"F")}function NE(t,e,n){if(typeof(n=we(n))=="string"){if(n==="")throw new H(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wk(e)&&n.indexOf("/")!==-1)throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!J.isDocumentKey(r))throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return J0(t,new J(r))}if(n instanceof Nt)return J0(t,n._key);throw new H(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hd(n)}.`)}function bE(t,e){if(!Array.isArray(t)||t.length===0)throw new H(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Cx(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class kx{convertValue(e,n="none"){switch(Ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return js(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>nt(o.doubleValue));return new Gd(s)}convertGeoPoint(e){return new Kd(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=D_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ql(e));default:return null}}convertTimestamp(e){const n=xi(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Se($k(r));const i=new Bo(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||Ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function xx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uy extends Tx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class gl extends uy{data(e={}){return super.data(e)}}class cy{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gl(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new mo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new mo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:uj(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
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
 */function Au(t){t=ln(t,Nt);const e=ln(t.firestore,zr);return XV(ku(e),t._key).then(n=>Px(e,t,n))}class hy extends kx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function Xl(t){t=ln(t,hr);const e=ln(t.firestore,zr),n=ku(e),r=new hy(e);return Ix(t._query),JV(n,t._query).then(i=>new cy(e,r,t,i))}function Rx(t,e,n){t=ln(t,Nt);const r=ln(t.firestore,zr),i=xx(t.converter,e);return rf(r,[_x(Yd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Hn.none())])}function mn(t,e,n,...r){t=ln(t,Nt);const i=ln(t.firestore,zr),s=Yd(i);let o;return o=typeof(e=we(e))=="string"||e instanceof xu?sj(s,"updateDoc",t._key,e,n,r):ij(s,"updateDoc",t._key,e),rf(i,[o.toMutation(t._key,Hn.exists(!0))])}function dy(t,e){const n=ln(t.firestore,zr),r=Qt(t),i=xx(t.converter,e);return rf(n,[_x(Yd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Hn.exists(!1))]).then(()=>r)}function Ax(t,...e){var n,r,i;t=we(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||PE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(PE(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof Nt)c=ln(t.firestore,zr),h=Ld(t._key.path),l={next:f=>{e[o]&&e[o](Px(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ln(t,hr);c=ln(f.firestore,zr),h=f._query;const m=new hy(c);l={next:v=>{e[o]&&e[o](new cy(c,m,f,v))},error:e[o+1],complete:e[o+2]},Ix(t._query)}return function(m,v,w,A){const P=new ty(A),T=new Z_(v,P,w);return m.asyncQueue.enqueueAndForget(async()=>Y_(await zh(m),T)),()=>{P.Za(),m.asyncQueue.enqueueAndForget(async()=>X_(await zh(m),T))}}(ku(c),h,a,l)}function rf(t,e){return function(r,i){const s=new Pr;return r.asyncQueue.enqueueAndForget(async()=>UV(await YV(r),i,s)),s.promise}(ku(t),e)}function Px(t,e,n){const r=n.docs.get(e._key),i=new hy(t);return new uy(t,i,e._key,r,new mo(n.hasPendingWrites,n.fromCache),e.converter)}function Pu(){return new ny("serverTimestamp")}function eg(...t){return new ry("arrayUnion",t)}function tg(...t){return new iy("arrayRemove",t)}function Zi(t){return new sy("increment",t)}(function(e,n=!0){(function(i){la=i})(Vs),Gn(new Rn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new zr(new wL(r.getProvider("auth-internal")),new SL(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),an(K0,"4.7.3",e),an(K0,"4.7.3","esm2017")})();const cj=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:kx,Bytes:Cs,CollectionReference:Nr,DocumentReference:Nt,DocumentSnapshot:uy,FieldPath:xu,FieldValue:zi,Firestore:zr,FirestoreError:H,GeoPoint:Kd,Query:hr,QueryCompositeFilterConstraint:ef,QueryConstraint:Zd,QueryDocumentSnapshot:gl,QueryFieldFilterConstraint:Ru,QueryLimitConstraint:nf,QueryOrderByConstraint:tf,QuerySnapshot:cy,SnapshotMetadata:mo,Timestamp:ut,VectorValue:Gd,_AutoId:P_,_ByteString:It,_DatabaseId:Bo,_DocumentKey:J,_EmptyAuthCredentialsProvider:ck,_FieldPath:Et,_cast:ln,_logWarn:Ts,_validateIsNotUsedTogether:dx,addDoc:dy,arrayRemove:tg,arrayUnion:eg,collection:Ai,connectFirestoreEmulator:fx,doc:Qt,ensureFirestoreConfigured:ku,executeWrite:rf,getDoc:Au,getDocs:Xl,getFirestore:px,increment:Zi,limit:$h,onSnapshot:Ax,orderBy:Sx,query:Go,serverTimestamp:Pu,setDoc:Rx,updateDoc:mn,where:Qo},Symbol.toStringTag,{value:"Module"}));var DE={};const OE="@firebase/database",LE="1.0.8";/**
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
 */let Nx="";function hj(t){Nx=t}/**
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
 */class dj{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),dt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:zl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class fj{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return cr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const bx=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dj(e)}}catch{}return new fj},os=bx("localStorage"),pj=bx("sessionStorage");/**
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
 */const xo=new Rd("@firebase/database"),mj=function(){let t=1;return function(){return t++}}(),Dx=function(t){const e=Gb(t),n=new $b;n.update(e);const r=n.digest();return m_.encodeByteArray(r)},Nu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Nu.apply(null,r):typeof r=="object"?e+=dt(r):e+=r,e+=" "}return e};let _l=null,ME=!0;const gj=function(t,e){W(!0,"Can't turn on custom loggers persistently."),xo.logLevel=fe.VERBOSE,_l=xo.log.bind(xo)},wt=function(...t){if(ME===!0&&(ME=!1,_l===null&&pj.get("logging_enabled")===!0&&gj()),_l){const e=Nu.apply(null,t);_l(e)}},bu=function(t){return function(...e){wt(t,...e)}},ng=function(...t){const e="FIREBASE INTERNAL ERROR: "+Nu(...t);xo.error(e)},Wr=function(...t){const e=`FIREBASE FATAL ERROR: ${Nu(...t)}`;throw xo.error(e),new Error(e)},Yt=function(...t){const e="FIREBASE WARNING: "+Nu(...t);xo.warn(e)},_j=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},yj=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yo="[MIN_NAME]",ks="[MAX_NAME]",Bs=function(t,e){if(t===e)return 0;if(t===Yo||e===ks)return-1;if(e===Yo||t===ks)return 1;{const n=VE(t),r=VE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},vj=function(t,e){return t===e?0:t<e?-1:1},Ba=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+dt(e))},fy=function(t){if(typeof t!="object"||t===null)return dt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=dt(e[r]),n+=":",n+=fy(t[e[r]]);return n+="}",n},Ox=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function St(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Lx=function(t){W(!sf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},wj=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ej=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Tj(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Ij=new RegExp("^-?(0*)\\d{1,10}$"),Sj=-2147483648,Cj=2147483647,VE=function(t){if(Ij.test(t)){const e=Number(t);if(e>=Sj&&e<=Cj)return e}return null},da=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},kj=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class xj{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Rj{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yt(e)}}class Zc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zc.OWNER="owner";/**
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
 */const py="5",Mx="v",Vx="s",jx="r",Fx="f",Ux=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bx="ls",zx="p",rg="ac",Wx="websocket",$x="long_polling";/**
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
 */class Hx{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=os.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&os.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Aj(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qx(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let r;if(e===Wx)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===$x)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Aj(t)&&(n.ns=t.namespace);const i=[];return St(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Pj{constructor(){this.counters_={}}incrementCounter(e,n=1){cr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return kb(this.counters_)}}/**
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
 */const Tp={},Ip={};function my(t){const e=t.toString();return Tp[e]||(Tp[e]=new Pj),Tp[e]}function Nj(t,e){const n=t.toString();return Ip[n]||(Ip[n]=e()),Ip[n]}/**
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
 */class bj{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&da(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const jE="start",Dj="close",Oj="pLPCommand",Lj="pRTLPCB",Kx="id",Gx="pw",Qx="ser",Mj="cb",Vj="seg",jj="ts",Fj="d",Uj="dframe",Yx=1870,Xx=30,Bj=Yx-Xx,zj=25e3,Wj=3e4;class go{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bu(e),this.stats_=my(n),this.urlFn=l=>(this.appCheckToken&&(l[rg]=this.appCheckToken),qx(n,$x,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bj(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Wj)),yj(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gy((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jE)this.id=a,this.password=l;else if(o===Dj)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[jE]="t",r[Qx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Mj]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Mx]=py,this.transportSessionId&&(r[Vx]=this.transportSessionId),this.lastSessionId&&(r[Bx]=this.lastSessionId),this.applicationId&&(r[zx]=this.applicationId),this.appCheckToken&&(r[rg]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ux.test(location.hostname)&&(r[jx]=Fx);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){go.forceAllow_=!0}static forceDisallow(){go.forceDisallow_=!0}static isAvailable(){return go.forceAllow_?!0:!go.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wj()&&!Ej()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=lC(n),i=Ox(r,Bj);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Uj]="t",r[Kx]=e,r[Gx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mj(),window[Oj+this.uniqueCallbackIdentifier]=e,window[Lj+this.uniqueCallbackIdentifier]=n,this.myIFrame=gy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){wt("frame writing exception"),a.stack&&wt(a.stack),wt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Kx]=this.myID,e[Gx]=this.myPW,e[Qx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Xx+r.length<=Yx;){const o=this.pendingSegs.shift();r=r+"&"+Vj+i+"="+o.seg+"&"+jj+i+"="+o.ts+"&"+Fj+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(zj)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const $j=16384,Hj=45e3;let Hh=null;typeof MozWebSocket<"u"?Hh=MozWebSocket:typeof WebSocket<"u"&&(Hh=WebSocket);class Fn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bu(this.connId),this.stats_=my(n),this.connURL=Fn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Mx]=py,typeof location<"u"&&location.hostname&&Ux.test(location.hostname)&&(o[jx]=Fx),n&&(o[Vx]=n),r&&(o[Bx]=r),i&&(o[rg]=i),s&&(o[zx]=s),qx(e,Wx,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,os.set("previous_websocket_failure",!0);try{let r;Mb(),this.mySock=new Hh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Hh!==null&&!Fn.forceDisallow_}static previouslyFailed(){return os.isInMemoryStorage||os.get("previous_websocket_failure")===!0}markConnectionHealthy(){os.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=zl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ox(n,$j);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Hj))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Fn.responsesRequiredToBeHealthy=2;Fn.healthyTimeout=3e4;/**
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
 */class Jl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[go,Fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Fn&&Fn.isAvailable();let r=n&&!Fn.previouslyFailed();if(e.webSocketOnly&&(n||Yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Fn];else{const i=this.transports_=[];for(const s of Jl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Jl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jl.globalTransportInitialized_=!1;/**
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
 */const qj=6e4,Kj=5e3,Gj=10*1024,Qj=100*1024,Sp="t",FE="d",Yj="s",UE="r",Xj="e",BE="o",zE="a",WE="n",$E="p",Jj="h";class Zj{constructor(e,n,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bu("c:"+this.id+":"),this.transportManager_=new Jl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=yl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Qj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sp in e){const n=e[Sp];n===zE?this.upgradeIfSecondaryHealthy_():n===UE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===BE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ba("t",e),r=Ba("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$E,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:WE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ba("t",e),r=Ba("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ba(Sp,e);if(FE in e){const r=e[FE];if(n===Jj){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===WE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Yj?this.onConnectionShutdown_(r):n===UE?this.onReset_(r):n===Xj?ng("Server Error: "+r):n===BE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ng("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),py!==r&&Yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),yl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qj))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Kj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$E,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(os.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Jx{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Zx{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class qh extends Zx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!g_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qh}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const HE=32,qE=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Ce("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pi(t){return t.pieces_.length-t.pieceNum_}function Pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ce(t.pieces_,e)}function _y(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function eF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Zl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function eR(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ce(e,0)}function Ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ce(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function Kt(t,e){const n=ue(t),r=ue(e);if(n===null)return e;if(n===r)return Kt(Pe(t),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function tF(t,e){const n=Zl(t,0),r=Zl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Bs(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function yy(t,e){if(Pi(t)!==Pi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Sn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Pi(t)>Pi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class nF{constructor(e,n){this.errorPrefix_=n,this.parts_=Zl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=xd(this.parts_[r]);tR(this)}}function rF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=xd(e),tR(t)}function iF(t){const e=t.parts_.pop();t.byteLength_-=xd(e),t.parts_.length>0&&(t.byteLength_-=1)}function tR(t){if(t.byteLength_>qE)throw new Error(t.errorPrefix_+"has a key path longer than "+qE+" bytes ("+t.byteLength_+").");if(t.parts_.length>HE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+HE+") or object contains a cycle "+es(t))}function es(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class vy extends Zx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new vy}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const za=1e3,sF=60*5*1e3,KE=30*1e3,oF=1.3,aF=3e4,lF="server_kill",GE=3;class br extends Jx{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=br.nextPersistentConnectionId_++,this.log_=bu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=za,this.maxReconnectDelay_=sF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(dt(s)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new er,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;br.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&cr(e,"w")){const r=Mo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Wb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=KE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+dt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ng("Unrecognized action received from server: "+dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=za,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=za,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>aF&&(this.reconnectDelay_=za),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+br.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){W(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?wt("getToken() completed but was canceled"):(wt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new Zj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Yt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(lF)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Yt(f),l())}}}interrupt(e){wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rh(this.interruptReasons_)&&(this.reconnectDelay_=za,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>fy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ce(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){wt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=GE&&(this.reconnectDelay_=KE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){wt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=GE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Nx.replace(/\./g,"-")]=1,g_()?e["framework.cordova"]=1:mC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qh.getInstance().currentlyOnline();return Rh(this.interruptReasons_)&&e}}br.nextPersistentConnectionId_=0;br.nextConnectionId_=0;/**
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
 */class of{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new he(Yo,e),i=new he(Yo,n);return this.compare(r,i)!==0}minPost(){return he.MIN}}/**
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
 */let xc;class nR extends of{static get __EMPTY_NODE(){return xc}static set __EMPTY_NODE(e){xc=e}compare(e,n){return Bs(e.name,n.name)}isDefinedOn(e){throw sa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(ks,xc)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,xc)}toString(){return".key"}}const Ro=new nR;/**
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
 */class Rc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class vt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??vt.RED,this.left=i??nn.EMPTY_NODE,this.right=s??nn.EMPTY_NODE}copy(e,n,r,i,s){return new vt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return nn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return nn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}vt.RED=!0;vt.BLACK=!1;class uF{copy(e,n,r,i,s){return this}insert(e,n,r){return new vt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nn{constructor(e,n=nn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,vt.BLACK,null,null))}remove(e){return new nn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,vt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Rc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Rc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Rc(this.root_,null,this.comparator_,!0,e)}}nn.EMPTY_NODE=new uF;/**
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
 */function cF(t,e){return Bs(t.name,e.name)}function wy(t,e){return Bs(t,e)}/**
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
 */let ig;function hF(t){ig=t}const rR=function(t){return typeof t=="number"?"number:"+Lx(t):"string:"+t},iR=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&cr(e,".sv"),"Priority must be a string or number.")}else W(t===ig||t.isEmpty(),"priority of unexpected type.");W(t===ig||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let QE;class gt{constructor(e,n=gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),iR(this.priorityNode_)}static set __childrenNodeConstructor(e){QE=e}static get __childrenNodeConstructor(){return QE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:ue(e)===".priority"?this.priorityNode_:gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ue(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(W(r!==".priority"||Pi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rR(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Lx(this.value_):e+=this.value_,this.lazyHash_=Dx(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof gt.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=gt.VALUE_TYPE_ORDER.indexOf(n),s=gt.VALUE_TYPE_ORDER.indexOf(r);return W(i>=0,"Unknown leaf type: "+n),W(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let sR,oR;function dF(t){sR=t}function fF(t){oR=t}class pF extends of{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Bs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(ks,new gt("[PRIORITY-POST]",oR))}makePost(e,n){const r=sR(e);return new he(n,new gt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ge=new pF;/**
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
 */const mF=Math.log(2);class gF{constructor(e){const n=s=>parseInt(Math.log(s)/mF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Kh=function(t,e,n,r){t.sort(e);const i=function(l,c){const h=c-l;let f,m;if(h===0)return null;if(h===1)return f=t[l],m=n?n(f):f,new vt(m,f.node,vt.BLACK,null,null);{const v=parseInt(h/2,10)+l,w=i(l,v),A=i(v+1,c);return f=t[v],m=n?n(f):f,new vt(m,f.node,vt.BLACK,w,A)}},s=function(l){let c=null,h=null,f=t.length;const m=function(w,A){const P=f-w,T=f;f-=w;const E=i(P+1,T),I=t[P],D=n?n(I):I;v(new vt(D,I.node,A,null,E))},v=function(w){c?(c.left=w,c=w):(h=w,c=w)};for(let w=0;w<l.count;++w){const A=l.nextBitIsOne(),P=Math.pow(2,l.count-(w+1));A?m(P,vt.BLACK):(m(P,vt.BLACK),m(P,vt.RED))}return h},o=new gF(t.length),a=s(o);return new nn(r||e,a)};/**
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
 */let Cp;const Xs={};class kr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return W(Xs&&Ge,"ChildrenNode.ts has not been loaded"),Cp=Cp||new kr({".priority":Xs},{".priority":Ge}),Cp}get(e){const n=Mo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nn?n:null}hasIndex(e){return cr(this.indexSet_,e.toString())}addIndex(e,n){W(e!==Ro,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(he.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Kh(r,e.getCompare()):a=Xs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new kr(h,c)}addToIndexes(e,n){const r=Ah(this.indexes_,(i,s)=>{const o=Mo(this.indexSet_,s);if(W(o,"Missing index implementation for "+s),i===Xs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(he.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Kh(a,o.getCompare())}else return Xs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new he(e.name,a))),l.insert(e,e.node)}});return new kr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ah(this.indexes_,i=>{if(i===Xs)return i;{const s=n.get(e.name);return s?i.remove(new he(e.name,s)):i}});return new kr(r,this.indexSet_)}}/**
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
 */let Wa;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&iR(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wa||(Wa=new ee(new nn(wy),null,kr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wa}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wa:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new he(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Wa:this.priorityNode_;return new ee(i,o,s)}}updateChild(e,n){const r=ue(e);if(r===null)return n;{W(ue(e)!==".priority"||Pi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Pe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ge,(o,a)=>{n[o]=a.val(e),r++,s&&ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+rR(this.getPriority().val())+":"),this.forEachChild(Ge,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Dx(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new he(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Du?-1:0}withIndex(e){if(e===Ro||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ro||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ge),i=n.getIterator(Ge);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ro?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _F extends ee{constructor(){super(new nn(wy),ee.EMPTY_NODE,kr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Du=new _F;Object.defineProperties(he,{MIN:{value:new he(Yo,ee.EMPTY_NODE)},MAX:{value:new he(ks,Du)}});nR.__EMPTY_NODE=ee.EMPTY_NODE;gt.__childrenNodeConstructor=ee;hF(Du);fF(Du);/**
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
 */const yF=!0;function tt(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new gt(n,tt(e))}if(!(t instanceof Array)&&yF){const n=[];let r=!1;if(St(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=tt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new he(o,l)))}}),n.length===0)return ee.EMPTY_NODE;const s=Kh(n,cF,o=>o.name,wy);if(r){const o=Kh(n,Ge.getCompare());return new ee(s,tt(e),new kr({".priority":o},{".priority":Ge}))}else return new ee(s,tt(e),kr.Default)}else{let n=ee.EMPTY_NODE;return St(t,(r,i)=>{if(cr(t,r)&&r.substring(0,1)!=="."){const s=tt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(tt(e))}}dF(tt);/**
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
 */class vF extends of{constructor(e){super(),this.indexPath_=e,W(!ce(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Bs(e.name,n.name):s}makePost(e,n){const r=tt(e),i=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new he(n,i)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Du);return new he(ks,e)}toString(){return Zl(this.indexPath_,0).join("/")}}/**
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
 */class wF extends of{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Bs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const r=tt(e);return new he(n,r)}toString(){return".value"}}const EF=new wF;/**
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
 */function aR(t){return{type:"value",snapshotNode:t}}function Xo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function eu(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function tu(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function TF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ey{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){W(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(eu(n,a)):W(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Xo(n,r)):o.trackChildChange(tu(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ge,(i,s)=>{n.hasChild(i)||r.trackChildChange(eu(i,s))}),n.isLeafNode()||n.forEachChild(Ge,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(tu(i,s,o))}else r.trackChildChange(Xo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class nu{constructor(e){this.indexedFilter_=new Ey(e.getIndex()),this.index_=e.getIndex(),this.startPost_=nu.getStartPost_(e),this.endPost_=nu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new he(n,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ee.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ee.EMPTY_NODE);const s=this;return n.forEachChild(Ge,(o,a)=>{s.matches(new he(o,a))||(i=i.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class IF{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new nu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new he(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ee.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ee.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,v)=>f(v,m)}else o=this.index_.getCompare();const a=e;W(a.numChildren()===this.limit_,"");const l=new he(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const v=m==null?1:o(m,l);if(h&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(tu(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(eu(n,f));const A=a.updateImmediateChild(n,ee.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(Xo(m.name,m.node)),A.updateImmediateChild(m.name,m.node)):A}}else return r.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(eu(c.name,c.node)),s.trackChildChange(Xo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ee.EMPTY_NODE)):e}}/**
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
 */class Ty{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yo}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ks}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ge}copy(){const e=new Ty;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function SF(t){return t.loadsAllData()?new Ey(t.getIndex()):t.hasLimit()?new IF(t):new nu(t)}function YE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ge?n="$priority":t.index_===EF?n="$value":t.index_===Ro?n="$key":(W(t.index_ instanceof vF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=dt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=dt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+dt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=dt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+dt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function XE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ge&&(e.i=t.index_.toString()),e}/**
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
 */class Gh extends Jx{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=bu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Gh.getListenId_(e,r),a={};this.listens_[o]=a;const l=YE(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Mo(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Gh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=YE(e._queryParams),r=e._path.toString(),i=new er;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oa(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=zl(a.responseText)}catch{Yt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Yt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class CF{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Qh(){return{value:null,children:new Map}}function fa(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ue(e);t.children.has(r)||t.children.set(r,Qh());const i=t.children.get(r);e=Pe(e),fa(i,e,n)}}function sg(t,e){if(ce(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Ge,(r,i)=>{fa(t,new Ce(r),i)}),sg(t,e)}}else if(t.children.size>0){const n=ue(e);return e=Pe(e),t.children.has(n)&&sg(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function og(t,e,n){t.value!==null?n(e,t.value):kF(t,(r,i)=>{const s=new Ce(e.toString()+"/"+r);og(i,s,n)})}function kF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class xF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&St(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const JE=10*1e3,RF=30*1e3,AF=5*60*1e3;class PF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xF(e);const r=JE+(RF-JE)*Math.random();yl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;St(e,(i,s)=>{s>0&&cr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),yl(this.reportStats_.bind(this),Math.floor(Math.random()*2*AF))}}/**
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
 */var Bn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Bn||(Bn={}));function Iy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Cy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Yh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Bn.ACK_USER_WRITE,this.source=Iy()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new Yh(ve(),n,this.revert)}}else return W(ue(this.path)===e,"operationForChild called for unrelated child."),new Yh(Pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class ru{constructor(e,n){this.source=e,this.path=n,this.type=Bn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new ru(this.source,ve()):new ru(this.source,Pe(this.path))}}/**
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
 */class xs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Bn.OVERWRITE}operationForChild(e){return ce(this.path)?new xs(this.source,ve(),this.snap.getImmediateChild(e)):new xs(this.source,Pe(this.path),this.snap)}}/**
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
 */class Jo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Bn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new xs(this.source,ve(),n.value):new Jo(this.source,ve(),n)}else return W(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jo(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ni{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class NF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(TF(o.childName,o.snapshotNode))}),$a(t,i,"child_removed",e,r,n),$a(t,i,"child_added",e,r,n),$a(t,i,"child_moved",s,r,n),$a(t,i,"child_changed",e,r,n),$a(t,i,"value",e,r,n),i}function $a(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>OF(t,a,l)),o.forEach(a=>{const l=DF(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function DF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function OF(t,e,n){if(e.childName==null||n.childName==null)throw sa("Should only compare child_ events.");const r=new he(e.childName,e.snapshotNode),i=new he(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function af(t,e){return{eventCache:t,serverCache:e}}function vl(t,e,n,r){return af(new Ni(e,n,r),t.serverCache)}function lR(t,e,n,r){return af(t.eventCache,new Ni(e,n,r))}function Xh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Rs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let kp;const LF=()=>(kp||(kp=new nn(vj)),kp);class be{constructor(e,n=LF()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return St(e,(r,i)=>{n=n.set(new Ce(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(ce(e))return null;{const r=ue(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Pe(e),n);return s!=null?{path:Ke(new Ce(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=ue(e),r=this.children.get(n);return r!==null?r.subtree(Pe(e)):new be(null)}}set(e,n){if(ce(e))return new be(n,this.children);{const r=ue(e),s=(this.children.get(r)||new be(null)).set(Pe(e),n),o=this.children.insert(r,s);return new be(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=ue(e),r=this.children.get(n);if(r){const i=r.remove(Pe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new be(null):new be(this.value,s)}else return this}}get(e){if(ce(e))return this.value;{const n=ue(e),r=this.children.get(n);return r?r.get(Pe(e)):null}}setTree(e,n){if(ce(e))return n;{const r=ue(e),s=(this.children.get(r)||new be(null)).setTree(Pe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new be(this.value,o)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ce(e))return null;{const s=ue(e),o=this.children.get(s);return o?o.findOnPath_(Pe(e),Ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const i=ue(e),s=this.children.get(i);return s?s.foreachOnPath_(Pe(e),Ke(n,i),r):new be(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class qn{constructor(e){this.writeTree_=e}static empty(){return new qn(new be(null))}}function wl(t,e,n){if(ce(e))return new qn(new be(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Kt(i,e);return s=s.updateChild(o,n),new qn(t.writeTree_.set(i,s))}else{const i=new be(n),s=t.writeTree_.setTree(e,i);return new qn(s)}}}function ag(t,e,n){let r=t;return St(n,(i,s)=>{r=wl(r,Ke(e,i),s)}),r}function ZE(t,e){if(ce(e))return qn.empty();{const n=t.writeTree_.setTree(e,new be(null));return new qn(n)}}function lg(t,e){return zs(t,e)!=null}function zs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Kt(n.path,e)):null}function eT(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ge,(r,i)=>{e.push(new he(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new he(r,i.value))}),e}function Ti(t,e){if(ce(e))return t;{const n=zs(t,e);return n!=null?new qn(new be(n)):new qn(t.writeTree_.subtree(e))}}function ug(t){return t.writeTree_.isEmpty()}function Zo(t,e){return uR(ve(),t.writeTree_,e)}function uR(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(W(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=uR(Ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ke(t,".priority"),r)),n}}/**
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
 */function lf(t,e){return fR(e,t)}function MF(t,e,n,r,i){W(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=wl(t.visibleWrites,e,n)),t.lastWriteId=r}function VF(t,e,n,r){W(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ag(t.visibleWrites,e,n),t.lastWriteId=r}function jF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function FF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&UF(a,r.path)?i=!1:Sn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return BF(t),!0;if(r.snap)t.visibleWrites=ZE(t.visibleWrites,r.path);else{const a=r.children;St(a,l=>{t.visibleWrites=ZE(t.visibleWrites,Ke(r.path,l))})}return!0}else return!1}function UF(t,e){if(t.snap)return Sn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Sn(Ke(t.path,n),e))return!0;return!1}function BF(t){t.visibleWrites=cR(t.allWrites,zF,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zF(t){return t.visible}function cR(t,e,n){let r=qn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Sn(n,o)?(a=Kt(n,o),r=wl(r,a,s.snap)):Sn(o,n)&&(a=Kt(o,n),r=wl(r,ve(),s.snap.getChild(a)));else if(s.children){if(Sn(n,o))a=Kt(n,o),r=ag(r,a,s.children);else if(Sn(o,n))if(a=Kt(o,n),ce(a))r=ag(r,ve(),s.children);else{const l=Mo(s.children,ue(a));if(l){const c=l.getChild(Pe(a));r=wl(r,ve(),c)}}}else throw sa("WriteRecord should have .snap or .children")}}return r}function hR(t,e,n,r,i){if(!r&&!i){const s=zs(t.visibleWrites,e);if(s!=null)return s;{const o=Ti(t.visibleWrites,e);if(ug(o))return n;if(n==null&&!lg(o,ve()))return null;{const a=n||ee.EMPTY_NODE;return Zo(o,a)}}}else{const s=Ti(t.visibleWrites,e);if(!i&&ug(s))return n;if(!i&&n==null&&!lg(s,ve()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Sn(c.path,e)||Sn(e,c.path))},a=cR(t.allWrites,o,e),l=n||ee.EMPTY_NODE;return Zo(a,l)}}}function WF(t,e,n){let r=ee.EMPTY_NODE;const i=zs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ge,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ti(t.visibleWrites,e);return n.forEachChild(Ge,(o,a)=>{const l=Zo(Ti(s,new Ce(o)),a);r=r.updateImmediateChild(o,l)}),eT(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ti(t.visibleWrites,e);return eT(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $F(t,e,n,r,i){W(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ke(e,n);if(lg(t.visibleWrites,s))return null;{const o=Ti(t.visibleWrites,s);return ug(o)?i.getChild(n):Zo(o,i.getChild(n))}}function HF(t,e,n,r){const i=Ke(e,n),s=zs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ti(t.visibleWrites,i);return Zo(o,r.getNode().getImmediateChild(n))}else return null}function qF(t,e){return zs(t.visibleWrites,e)}function KF(t,e,n,r,i,s,o){let a;const l=Ti(t.visibleWrites,e),c=zs(l,ve());if(c!=null)a=c;else if(n!=null)a=Zo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=m.getNext();for(;v&&h.length<i;)f(v,r)!==0&&h.push(v),v=m.getNext();return h}else return[]}function GF(){return{visibleWrites:qn.empty(),allWrites:[],lastWriteId:-1}}function Jh(t,e,n,r){return hR(t.writeTree,t.treePath,e,n,r)}function ky(t,e){return WF(t.writeTree,t.treePath,e)}function tT(t,e,n,r){return $F(t.writeTree,t.treePath,e,n,r)}function Zh(t,e){return qF(t.writeTree,Ke(t.treePath,e))}function QF(t,e,n,r,i,s){return KF(t.writeTree,t.treePath,e,n,r,i,s)}function xy(t,e,n){return HF(t.writeTree,t.treePath,e,n)}function dR(t,e){return fR(Ke(t.treePath,e),t.writeTree)}function fR(t,e){return{treePath:t,writeTree:e}}/**
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
 */class YF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,tu(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,eu(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Xo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,tu(r,e.snapshotNode,i.oldSnap));else throw sa("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class XF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const pR=new XF;class Ry{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ni(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rs(this.viewCache_),s=QF(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function JF(t){return{filter:t}}function ZF(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function e4(t,e,n,r,i){const s=new YF;let o,a;if(n.type===Bn.OVERWRITE){const c=n;c.source.fromUser?o=cg(t,e,c.path,c.snap,r,i,s):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=ed(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Bn.MERGE){const c=n;c.source.fromUser?o=n4(t,e,c.path,c.children,r,i,s):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=hg(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Bn.ACK_USER_WRITE){const c=n;c.revert?o=s4(t,e,c.path,r,i,s):o=r4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Bn.LISTEN_COMPLETE)o=i4(t,e,n.path,r,s);else throw sa("Unknown operation type: "+n.type);const l=s.getChanges();return t4(e,o,l),{viewCache:o,changes:l}}function t4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Xh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(aR(Xh(e)))}}function mR(t,e,n,r,i,s){const o=e.eventCache;if(Zh(r,n)!=null)return e;{let a,l;if(ce(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Rs(e),h=c instanceof ee?c:ee.EMPTY_NODE,f=ky(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Jh(r,Rs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ue(n);if(c===".priority"){W(Pi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=tT(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Pe(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const m=tT(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(c).updateChild(h,m):f=o.getNode().getImmediateChild(c)}else f=xy(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return vl(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function ed(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(ce(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),v,null)}else{const v=ue(n);if(!l.isCompleteForPath(n)&&Pi(n)>1)return e;const w=Pe(n),P=l.getNode().getImmediateChild(v).updateChild(w,r);v===".priority"?c=h.updatePriority(l.getNode(),P):c=h.updateChild(l.getNode(),v,P,w,pR,null)}const f=lR(e,c,l.isFullyInitialized()||ce(n),h.filtersNodes()),m=new Ry(i,f,s);return mR(t,f,n,i,m,a)}function cg(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const h=new Ry(i,e,s);if(ce(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=vl(e,c,!0,t.filter.filtersNodes());else{const f=ue(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=vl(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Pe(n),v=a.getNode().getImmediateChild(f);let w;if(ce(m))w=r;else{const A=h.getCompleteChild(f);A!=null?_y(m)===".priority"&&A.getChild(eR(m)).isEmpty()?w=A:w=A.updateChild(m,r):w=ee.EMPTY_NODE}if(v.equals(w))l=e;else{const A=t.filter.updateChild(a.getNode(),f,w,m,h,o);l=vl(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function nT(t,e){return t.eventCache.isCompleteForChild(e)}function n4(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=Ke(n,l);nT(e,ue(h))&&(a=cg(t,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=Ke(n,l);nT(e,ue(h))||(a=cg(t,a,h,c,i,s,o))}),a}function rT(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function hg(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ce(n)?c=r:c=new be(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),w=rT(t,v,m);l=ed(t,l,new Ce(f),w,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const v=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!v){const w=e.serverCache.getNode().getImmediateChild(f),A=rT(t,w,m);l=ed(t,l,new Ce(f),A,i,s,o,a)}}),l}function r4(t,e,n,r,i,s,o){if(Zh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ed(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ce(n)){let c=new be(null);return l.getNode().forEachChild(Ro,(h,f)=>{c=c.set(new Ce(h),f)}),hg(t,e,n,c,i,s,a,o)}else return e}else{let c=new be(null);return r.foreach((h,f)=>{const m=Ke(n,h);l.isCompleteForPath(m)&&(c=c.set(h,l.getNode().getChild(m)))}),hg(t,e,n,c,i,s,a,o)}}function i4(t,e,n,r,i){const s=e.serverCache,o=lR(e,s.getNode(),s.isFullyInitialized()||ce(n),s.isFiltered());return mR(t,o,n,r,pR,i)}function s4(t,e,n,r,i,s){let o;if(Zh(r,n)!=null)return e;{const a=new Ry(r,e,i),l=e.eventCache.getNode();let c;if(ce(n)||ue(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Jh(r,Rs(e));else{const f=e.serverCache.getNode();W(f instanceof ee,"serverChildren would be complete if leaf node"),h=ky(r,f)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=ue(n);let f=xy(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?c=t.filter.updateChild(l,h,f,Pe(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,ee.EMPTY_NODE,Pe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jh(r,Rs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Zh(r,ve())!=null,vl(e,c,o,t.filter.filtersNodes())}}/**
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
 */class o4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ey(r.getIndex()),s=SF(r);this.processor_=JF(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ee.EMPTY_NODE,a.getNode(),null),h=new Ni(l,o.isFullyInitialized(),i.filtersNodes()),f=new Ni(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=af(f,h),this.eventGenerator_=new NF(this.query_)}get query(){return this.query_}}function a4(t){return t.viewCache_.serverCache.getNode()}function l4(t){return Xh(t.viewCache_)}function u4(t,e){const n=Rs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function iT(t){return t.eventRegistrations_.length===0}function c4(t,e){t.eventRegistrations_.push(e)}function sT(t,e,n){const r=[];if(n){W(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function oT(t,e,n,r){e.type===Bn.MERGE&&e.source.queryId!==null&&(W(Rs(t.viewCache_),"We should always have a full cache before handling merges"),W(Xh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=e4(t.processor_,i,e,n,r);return ZF(t.processor_,s.viewCache),W(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,gR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function h4(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ge,(s,o)=>{r.push(Xo(s,o))}),n.isFullyInitialized()&&r.push(aR(n.getNode())),gR(t,r,n.getNode(),e)}function gR(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return bF(t.eventGenerator_,e,n,i)}/**
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
 */let td;class _R{constructor(){this.views=new Map}}function d4(t){W(!td,"__referenceConstructor has already been defined"),td=t}function f4(){return W(td,"Reference.ts has not been loaded"),td}function p4(t){return t.views.size===0}function Ay(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return W(s!=null,"SyncTree gave us an op for an invalid query."),oT(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(oT(o,e,n,r));return s}}function yR(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Jh(n,i?r:null),l=!1;a?l=!0:r instanceof ee?(a=ky(n,r),l=!1):(a=ee.EMPTY_NODE,l=!1);const c=af(new Ni(a,l,!1),new Ni(r,i,!1));return new o4(e,c)}return o}function m4(t,e,n,r,i,s){const o=yR(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),c4(o,n),h4(o,n)}function g4(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=bi(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(sT(c,n,r)),iT(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(sT(l,n,r)),iT(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!bi(t)&&s.push(new(f4())(e._repo,e._path)),{removed:s,events:o}}function vR(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ii(t,e){let n=null;for(const r of t.views.values())n=n||u4(r,e);return n}function wR(t,e){if(e._queryParams.loadsAllData())return uf(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ER(t,e){return wR(t,e)!=null}function bi(t){return uf(t)!=null}function uf(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let nd;function _4(t){W(!nd,"__referenceConstructor has already been defined"),nd=t}function y4(){return W(nd,"Reference.ts has not been loaded"),nd}let v4=1;class aT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=GF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function TR(t,e,n,r,i){return MF(t.pendingWriteTree_,e,n,r,i),i?pa(t,new xs(Iy(),e,n)):[]}function w4(t,e,n,r){VF(t.pendingWriteTree_,e,n,r);const i=be.fromObject(n);return pa(t,new Jo(Iy(),e,i))}function hi(t,e,n=!1){const r=jF(t.pendingWriteTree_,e);if(FF(t.pendingWriteTree_,e)){let s=new be(null);return r.snap!=null?s=s.set(ve(),!0):St(r.children,o=>{s=s.set(new Ce(o),!0)}),pa(t,new Yh(r.path,s,n))}else return[]}function Ou(t,e,n){return pa(t,new xs(Sy(),e,n))}function E4(t,e,n){const r=be.fromObject(n);return pa(t,new Jo(Sy(),e,r))}function T4(t,e){return pa(t,new ru(Sy(),e))}function I4(t,e,n){const r=Ny(t,n);if(r){const i=by(r),s=i.path,o=i.queryId,a=Kt(s,e),l=new ru(Cy(o),a);return Dy(t,s,l)}else return[]}function rd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||ER(o,e))){const l=g4(o,e,n,r);p4(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,v)=>bi(v));if(h&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const v=k4(m);for(let w=0;w<v.length;++w){const A=v[w],P=A.query,T=kR(t,A);t.listenProvider_.startListening(El(P),iu(t,P),T.hashFn,T.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(El(e),null):c.forEach(m=>{const v=t.queryToTagMap.get(cf(m));t.listenProvider_.stopListening(El(m),v)}))}x4(t,c)}return a}function IR(t,e,n,r){const i=Ny(t,r);if(i!=null){const s=by(i),o=s.path,a=s.queryId,l=Kt(o,e),c=new xs(Cy(a),l,n);return Dy(t,o,c)}else return[]}function S4(t,e,n,r){const i=Ny(t,r);if(i){const s=by(i),o=s.path,a=s.queryId,l=Kt(o,e),c=be.fromObject(n),h=new Jo(Cy(a),l,c);return Dy(t,o,h)}else return[]}function dg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,v)=>{const w=Kt(m,i);s=s||Ii(v,w),o=o||bi(v)});let a=t.syncPointTree_.get(i);a?(o=o||bi(a),s=s||Ii(a,ve())):(a=new _R,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ee.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,w)=>{const A=Ii(w,ve());A&&(s=s.updateImmediateChild(v,A))}));const c=ER(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=cf(e);W(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const v=R4();t.queryToTagMap.set(m,v),t.tagToQueryMap.set(v,m)}const h=lf(t.pendingWriteTree_,i);let f=m4(a,e,n,h,s,l);if(!c&&!o&&!r){const m=wR(a,e);f=f.concat(A4(t,e,m))}return f}function Py(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Kt(o,e),c=Ii(a,l);if(c)return c});return hR(i,e,s,n,!0)}function C4(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Kt(c,n);r=r||Ii(h,f)});let i=t.syncPointTree_.get(n);i?r=r||Ii(i,ve()):(i=new _R,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ni(r,!0,!1):null,a=lf(t.pendingWriteTree_,e._path),l=yR(i,e,a,s?o.getNode():ee.EMPTY_NODE,s);return l4(l)}function pa(t,e){return SR(e,t.syncPointTree_,null,lf(t.pendingWriteTree_,ve()))}function SR(t,e,n,r){if(ce(t.path))return CR(t,e,n,r);{const i=e.get(ve());n==null&&i!=null&&(n=Ii(i,ve()));let s=[];const o=ue(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=dR(r,o);s=s.concat(SR(a,l,c,h))}return i&&(s=s.concat(Ay(i,t,r,n))),s}}function CR(t,e,n,r){const i=e.get(ve());n==null&&i!=null&&(n=Ii(i,ve()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=dR(r,o),h=t.operationForChild(o);h&&(s=s.concat(CR(h,a,l,c)))}),i&&(s=s.concat(Ay(i,t,r,n))),s}function kR(t,e){const n=e.query,r=iu(t,n);return{hashFn:()=>(a4(e)||ee.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?I4(t,n._path,r):T4(t,n._path);{const s=Tj(i,n);return rd(t,n,null,s)}}}}function iu(t,e){const n=cf(e);return t.queryToTagMap.get(n)}function cf(t){return t._path.toString()+"$"+t._queryIdentifier}function Ny(t,e){return t.tagToQueryMap.get(e)}function by(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ce(t.substr(0,e))}}function Dy(t,e,n){const r=t.syncPointTree_.get(e);W(r,"Missing sync point for query tag that we're tracking");const i=lf(t.pendingWriteTree_,e);return Ay(r,n,i,null)}function k4(t){return t.fold((e,n,r)=>{if(n&&bi(n))return[uf(n)];{let i=[];return n&&(i=vR(n)),St(r,(s,o)=>{i=i.concat(o)}),i}})}function El(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(y4())(t._repo,t._path):t}function x4(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=cf(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function R4(){return v4++}function A4(t,e,n){const r=e._path,i=iu(t,e),s=kR(t,n),o=t.listenProvider_.startListening(El(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)W(!bi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,f)=>{if(!ce(c)&&h&&bi(h))return[uf(h).query];{let m=[];return h&&(m=m.concat(vR(h).map(v=>v.query))),St(f,(v,w)=>{m=m.concat(w)}),m}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(El(h),iu(t,h))}}return o}/**
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
 */class Oy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Oy(n)}node(){return this.node_}}class Ly{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new Ly(this.syncTree_,n)}node(){return Py(this.syncTree_,this.path_)}}const P4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},lT=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return N4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return b4(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},N4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},b4=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&W(!1,"Unexpected increment value: "+r);const i=e.node();if(W(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},xR=function(t,e,n,r){return My(e,new Ly(n,t),r)},RR=function(t,e,n){return My(t,new Oy(e),n)};function My(t,e,n){const r=t.getPriority().val(),i=lT(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=lT(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new gt(a,tt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new gt(i))),o.forEachChild(Ge,(a,l)=>{const c=My(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Vy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function jy(t,e){let n=e instanceof Ce?e:new Ce(e),r=t,i=ue(n);for(;i!==null;){const s=Mo(r.node.children,i)||{children:{},childCount:0};r=new Vy(i,r,s),n=Pe(n),i=ue(n)}return r}function ma(t){return t.node.value}function AR(t,e){t.node.value=e,fg(t)}function PR(t){return t.node.childCount>0}function D4(t){return ma(t)===void 0&&!PR(t)}function hf(t,e){St(t.node.children,(n,r)=>{e(new Vy(n,t,r))})}function NR(t,e,n,r){n&&e(t),hf(t,i=>{NR(i,e,!0)})}function O4(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Lu(t){return new Ce(t.parent===null?t.name:Lu(t.parent)+"/"+t.name)}function fg(t){t.parent!==null&&L4(t.parent,t.name,t)}function L4(t,e,n){const r=D4(n),i=cr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,fg(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,fg(t))}/**
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
 */const M4=/[\[\].#$\/\u0000-\u001F\u007F]/,V4=/[\[\].#$\u0000-\u001F\u007F]/,xp=10*1024*1024,Fy=function(t){return typeof t=="string"&&t.length!==0&&!M4.test(t)},bR=function(t){return typeof t=="string"&&t.length!==0&&!V4.test(t)},j4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bR(t)},DR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!sf(t)||t&&typeof t=="object"&&cr(t,".sv")},id=function(t,e,n,r){r&&e===void 0||df(jo(t,"value"),e,n)},df=function(t,e,n){const r=n instanceof Ce?new nF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+es(r));if(typeof e=="function")throw new Error(t+"contains a function "+es(r)+" with contents = "+e.toString());if(sf(e))throw new Error(t+"contains "+e.toString()+" "+es(r));if(typeof e=="string"&&e.length>xp/3&&xd(e)>xp)throw new Error(t+"contains a string greater than "+xp+" utf8 bytes "+es(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(St(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Fy(o)))throw new Error(t+" contains an invalid key ("+o+") "+es(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rF(r,o),df(t,a,r),iF(r)}),i&&s)throw new Error(t+' contains ".value" child '+es(r)+" in addition to actual children.")}},F4=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Zl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Fy(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(tF);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Sn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},OR=function(t,e,n,r){const i=jo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];St(e,(o,a)=>{const l=new Ce(o);if(df(i,a,Ke(n,l)),_y(l)===".priority"&&!DR(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),F4(i,s)},U4=function(t,e,n){if(sf(e))throw new Error(jo(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!DR(e))throw new Error(jo(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},LR=function(t,e,n,r){if(!bR(n))throw new Error(jo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},B4=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),LR(t,e,n)},as=function(t,e){if(ue(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},z4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!j4(n))throw new Error(jo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class W4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ff(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!yy(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function MR(t,e,n){ff(t,n),VR(t,r=>yy(r,e))}function Pn(t,e,n){ff(t,n),VR(t,r=>Sn(r,e)||Sn(e,r))}function VR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?($4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();_l&&wt("event: "+n.toString()),da(r)}}}/**
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
 */const H4="repo_interrupt",q4=25;class K4{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new W4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qh(),this.transactionQueueTree_=new Vy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function G4(t,e,n){if(t.stats_=my(t.repoInfo_),t.forceRestClient_||kj())t.server_=new Gh(t.repoInfo_,(r,i,s,o)=>{uT(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cT(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{dt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new br(t.repoInfo_,e,(r,i,s,o)=>{uT(t,r,i,s,o)},r=>{cT(t,r)},r=>{Q4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Nj(t.repoInfo_,()=>new PF(t.stats_,t.server_)),t.infoData_=new CF,t.infoSyncTree_=new aT({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ou(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Uy(t,"connected",!1),t.serverSyncTree_=new aT({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Pn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function jR(t){const n=t.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pf(t){return P4({timestamp:jR(t)})}function uT(t,e,n,r,i){t.dataUpdateCount++;const s=new Ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Ah(n,c=>tt(c));o=S4(t.serverSyncTree_,s,l,i)}else{const l=tt(n);o=IR(t.serverSyncTree_,s,l,i)}else if(r){const l=Ah(n,c=>tt(c));o=E4(t.serverSyncTree_,s,l)}else{const l=tt(n);o=Ou(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ea(t,s)),Pn(t.eventQueue_,a,o)}function cT(t,e){Uy(t,"connected",e),e===!1&&Z4(t)}function Q4(t,e){St(e,(n,r)=>{Uy(t,n,r)})}function Uy(t,e,n){const r=new Ce("/.info/"+e),i=tt(n);t.infoData_.updateSnapshot(r,i);const s=Ou(t.infoSyncTree_,r,i);Pn(t.eventQueue_,r,s)}function By(t){return t.nextWriteId_++}function Y4(t,e,n){const r=C4(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=tt(i).withIndex(e._queryParams.getIndex());dg(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ou(t.serverSyncTree_,e._path,s);else{const a=iu(t.serverSyncTree_,e);o=IR(t.serverSyncTree_,e._path,s,a)}return Pn(t.eventQueue_,e._path,o),rd(t.serverSyncTree_,e,n,null,!0),s},i=>(Mu(t,"get for query "+dt(e)+" failed: "+i),Promise.reject(new Error(i))))}function X4(t,e,n,r,i){Mu(t,"set",{path:e.toString(),value:n,priority:r});const s=pf(t),o=tt(n,r),a=Py(t.serverSyncTree_,e),l=RR(o,a,s),c=By(t),h=TR(t.serverSyncTree_,e,l,c,!0);ff(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,v)=>{const w=m==="ok";w||Yt("set at "+e+" failed: "+m);const A=hi(t.serverSyncTree_,c,!w);Pn(t.eventQueue_,e,A),Di(t,i,m,v)});const f=Wy(t,e);ea(t,f),Pn(t.eventQueue_,f,[])}function J4(t,e,n,r){Mu(t,"update",{path:e.toString(),value:n});let i=!0;const s=pf(t),o={};if(St(n,(a,l)=>{i=!1,o[a]=xR(Ke(e,a),tt(l),t.serverSyncTree_,s)}),i)wt("update() called with empty data.  Don't do anything."),Di(t,r,"ok",void 0);else{const a=By(t),l=w4(t.serverSyncTree_,e,o,a);ff(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Yt("update at "+e+" failed: "+c);const m=hi(t.serverSyncTree_,a,!f),v=m.length>0?ea(t,e):e;Pn(t.eventQueue_,v,m),Di(t,r,c,h)}),St(n,c=>{const h=Wy(t,Ke(e,c));ea(t,h)}),Pn(t.eventQueue_,e,[])}}function Z4(t){Mu(t,"onDisconnectEvents");const e=pf(t),n=Qh();og(t.onDisconnect_,ve(),(i,s)=>{const o=xR(i,s,t.serverSyncTree_,e);fa(n,i,o)});let r=[];og(n,ve(),(i,s)=>{r=r.concat(Ou(t.serverSyncTree_,i,s));const o=Wy(t,i);ea(t,o)}),t.onDisconnect_=Qh(),Pn(t.eventQueue_,ve(),r)}function eU(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&sg(t.onDisconnect_,e),Di(t,n,r,i)})}function hT(t,e,n,r){const i=tt(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&fa(t.onDisconnect_,e,i),Di(t,r,s,o)})}function tU(t,e,n,r,i){const s=tt(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&fa(t.onDisconnect_,e,s),Di(t,i,o,a)})}function nU(t,e,n,r){if(Rh(n)){wt("onDisconnect().update() called with empty data.  Don't do anything."),Di(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&St(n,(o,a)=>{const l=tt(a);fa(t.onDisconnect_,Ke(e,o),l)}),Di(t,r,i,s)})}function rU(t,e,n){let r;ue(e._path)===".info"?r=dg(t.infoSyncTree_,e,n):r=dg(t.serverSyncTree_,e,n),MR(t.eventQueue_,e._path,r)}function pg(t,e,n){let r;ue(e._path)===".info"?r=rd(t.infoSyncTree_,e,n):r=rd(t.serverSyncTree_,e,n),MR(t.eventQueue_,e._path,r)}function iU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(H4)}function Mu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),wt(n,...e)}function Di(t,e,n,r){e&&da(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function FR(t,e,n){return Py(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function zy(t,e=t.transactionQueueTree_){if(e||mf(t,e),ma(e)){const n=BR(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&sU(t,Lu(e),n)}else PR(e)&&hf(e,n=>{zy(t,n)})}function sU(t,e,n){const r=n.map(c=>c.currentWriteId),i=FR(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];W(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Kt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Mu(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(hi(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();mf(t,jy(t.transactionQueueTree_,e)),zy(t,t.transactionQueueTree_),Pn(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)da(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Yt("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}ea(t,e)}},o)}function ea(t,e){const n=UR(t,e),r=Lu(n),i=BR(t,n);return oU(t,i,r),r}function oU(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Kt(n,l.path);let h=!1,f;if(W(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,i=i.concat(hi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=q4)h=!0,f="maxretry",i=i.concat(hi(t.serverSyncTree_,l.currentWriteId,!0));else{const m=FR(t,l.path,o);l.currentInputSnapshot=m;const v=e[a].update(m.val());if(v!==void 0){df("transaction failed: Data returned ",v,l.path);let w=tt(v);typeof v=="object"&&v!=null&&cr(v,".priority")||(w=w.updatePriority(m.getPriority()));const P=l.currentWriteId,T=pf(t),E=RR(w,m,T);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=E,l.currentWriteId=By(t),o.splice(o.indexOf(P),1),i=i.concat(TR(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),i=i.concat(hi(t.serverSyncTree_,P,!0))}else h=!0,f="nodata",i=i.concat(hi(t.serverSyncTree_,l.currentWriteId,!0))}Pn(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}mf(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)da(r[a]);zy(t,t.transactionQueueTree_)}function UR(t,e){let n,r=t.transactionQueueTree_;for(n=ue(e);n!==null&&ma(r)===void 0;)r=jy(r,n),e=Pe(e),n=ue(e);return r}function BR(t,e){const n=[];return zR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function zR(t,e,n){const r=ma(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);hf(e,i=>{zR(t,i,n)})}function mf(t,e){const n=ma(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,AR(e,n.length>0?n:void 0)}hf(e,r=>{mf(t,r)})}function Wy(t,e){const n=Lu(UR(t,e)),r=jy(t.transactionQueueTree_,e);return O4(r,i=>{Rp(t,i)}),Rp(t,r),NR(r,i=>{Rp(t,i)}),n}function Rp(t,e){const n=ma(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(W(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(W(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?AR(e,void 0):n.length=s+1,Pn(t.eventQueue_,Lu(e),i);for(let o=0;o<r.length;o++)da(r[o])}}/**
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
 */function aU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const dT=function(t,e){const n=uU(t),r=n.namespace;n.domain==="firebase.com"&&Wr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_j();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Hx(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ce(n.pathString)}},uU=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=aU(t.substring(h,f)));const m=lU(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),n=e.substring(w+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const fT="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",cU=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=fT.charAt(n%64),n=Math.floor(n/64);W(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=fT.charAt(e[i]);return W(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class hU{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+dt(this.snapshot.exportVal())}}class dU{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class WR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return W(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class fU{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new er;return eU(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){as("OnDisconnect.remove",this._path);const e=new er;return hT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){as("OnDisconnect.set",this._path),id("OnDisconnect.set",e,this._path,!1);const n=new er;return hT(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){as("OnDisconnect.setWithPriority",this._path),id("OnDisconnect.setWithPriority",e,this._path,!1),U4("OnDisconnect.setWithPriority",n);const r=new er;return tU(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){as("OnDisconnect.update",this._path),OR("OnDisconnect.update",e,this._path);const n=new er;return nU(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class $y{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ce(this._path)?null:_y(this._path)}get ref(){return new qr(this._repo,this._path)}get _queryIdentifier(){const e=XE(this._queryParams),n=fy(e);return n==="{}"?"default":n}get _queryObject(){return XE(this._queryParams)}isEqual(e){if(e=we(e),!(e instanceof $y))return!1;const n=this._repo===e._repo,r=yy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+eF(this._path)}}class qr extends $y{constructor(e,n){super(e,n,new Ty,!1)}get parent(){const e=eR(this._path);return e===null?null:new qr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class su{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ce(e),r=ou(this.ref,e);return new su(this._node.getChild(n),r,Ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new su(i,ou(this.ref,r),Ge)))}hasChild(e){const n=new Ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fe(t,e){return t=we(t),t._checkNotDeleted("ref"),e!==void 0?ou(t._root,e):t._root}function ou(t,e){return t=we(t),ue(t._path)===null?B4("child","path",e):LR("child","path",e),new qr(t._repo,Ke(t._path,e))}function pU(t){return t=we(t),new fU(t._repo,t._path)}function $R(t,e){t=we(t),as("push",t._path),id("push",e,t._path,!0);const n=jR(t._repo),r=cU(n),i=ou(t,r),s=ou(t,r);let o;return e!=null?o=Oi(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function gf(t){return as("remove",t._path),Oi(t,null)}function Oi(t,e){t=we(t),as("set",t._path),id("set",e,t._path,!1);const n=new er;return X4(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function lr(t,e){OR("update",e,t._path);const n=new er;return J4(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function HR(t){t=we(t);const e=new WR(()=>{}),n=new _f(e);return Y4(t._repo,t,n).then(r=>new su(r,new qr(t._repo,t._path),t._queryParams.getIndex()))}class _f{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new hU("value",this,new su(e.snapshotNode,new qr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dU(this,e,n):null}matches(e){return e instanceof _f?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mU(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(h,f)=>{pg(t._repo,t,a),l(h,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new WR(n,s||void 0),a=new _f(o);return rU(t._repo,t,a),()=>pg(t._repo,t,a)}function yf(t,e,n,r){return mU(t,"value",e,n,r)}function qR(t,e,n){pg(t._repo,t,null)}d4(qr);_4(qr);/**
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
 */const gU="FIREBASE_DATABASE_EMULATOR_HOST",mg={};let _U=!1;function yU(t,e,n,r){t.repoInfo_=new Hx(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function vU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=dT(s,i),a=o.repoInfo,l;typeof process<"u"&&DE&&(l=DE[gU]),l?(s=`http://${l}?ns=${a.namespace}`,o=dT(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new Rj(t.name,t.options,e);z4("Invalid Firebase Database URL",o),ce(o.path)||Wr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=EU(a,t,c,new xj(t.name,n));return new TU(h,t)}function wU(t,e){const n=mg[e];(!n||n[t.key]!==t)&&Wr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),iU(t),delete n[t.key]}function EU(t,e,n,r){let i=mg[e.name];i||(i={},mg[e.name]=i);let s=i[t.toURLString()];return s&&Wr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new K4(t,_U,n,r),i[t.toURLString()]=s,s}class TU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(G4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qr(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wr("Cannot call "+e+" on a deleted database.")}}function IU(t=Pd(),e){const n=Ms(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=hC("database");r&&SU(n,...r)}return n}function SU(t,e,n,r={}){t=we(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zc(Zc.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:pC(r.mockUserToken,t.app.options.projectId);s=new Zc(o)}yU(i,e,n,s)}/**
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
 */function CU(t){hj(Vs),Gn(new Rn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return vU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),an(OE,LE,t),an(OE,LE,"esm2017")}br.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};br.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};CU();const KR="@firebase/installations",Hy="0.6.9";/**
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
 */const GR=1e4,QR=`w:${Hy}`,YR="FIS_v2",kU="https://firebaseinstallations.googleapis.com/v1",xU=60*60*1e3,RU="installations",AU="Installations";/**
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
 */const PU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},As=new Ls(RU,AU,PU);function XR(t){return t instanceof ur&&t.code.includes("request-failed")}/**
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
 */function JR({projectId:t}){return`${kU}/projects/${t}/installations`}function ZR(t){return{token:t.token,requestStatus:2,expiresIn:bU(t.expiresIn),creationTime:Date.now()}}async function eA(t,e){const r=(await e.json()).error;return As.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function tA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function NU(t,{refreshToken:e}){const n=tA(t);return n.append("Authorization",DU(e)),n}async function nA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bU(t){return Number(t.replace("s","000"))}function DU(t){return`${YR} ${t}`}/**
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
 */async function OU({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=JR(t),i=tA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:YR,appId:t.appId,sdkVersion:QR},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await nA(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ZR(c.authToken)}}else throw await eA("Create Installation",l)}/**
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
 */function rA(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function LU(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const MU=/^[cdef][\w-]{21}$/,gg="";function VU(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=jU(t);return MU.test(n)?n:gg}catch{return gg}}function jU(t){return LU(t).substr(0,22)}/**
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
 */function vf(t){return`${t.appName}!${t.appId}`}/**
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
 */const iA=new Map;function sA(t,e){const n=vf(t);oA(n,e),FU(n,e)}function oA(t,e){const n=iA.get(t);if(n)for(const r of n)r(e)}function FU(t,e){const n=UU();n&&n.postMessage({key:t,fid:e}),BU()}let ls=null;function UU(){return!ls&&"BroadcastChannel"in self&&(ls=new BroadcastChannel("[Firebase] FID Change"),ls.onmessage=t=>{oA(t.data.key,t.data.fid)}),ls}function BU(){iA.size===0&&ls&&(ls.close(),ls=null)}/**
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
 */const zU="firebase-installations-database",WU=1,Ps="firebase-installations-store";let Ap=null;function qy(){return Ap||(Ap=Ad(zU,WU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ps)}}})),Ap}async function sd(t,e){const n=vf(t),i=(await qy()).transaction(Ps,"readwrite"),s=i.objectStore(Ps),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&sA(t,e.fid),e}async function aA(t){const e=vf(t),r=(await qy()).transaction(Ps,"readwrite");await r.objectStore(Ps).delete(e),await r.done}async function wf(t,e){const n=vf(t),i=(await qy()).transaction(Ps,"readwrite"),s=i.objectStore(Ps),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&sA(t,a.fid),a}/**
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
 */async function Ky(t){let e;const n=await wf(t.appConfig,r=>{const i=$U(r),s=HU(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===gg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function $U(t){const e=t||{fid:VU(),registrationStatus:0};return lA(e)}function HU(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(As.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=qU(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KU(t)}:{installationEntry:e}}async function qU(t,e){try{const n=await OU(t,e);return sd(t.appConfig,n)}catch(n){throw XR(n)&&n.customData.serverCode===409?await aA(t.appConfig):await sd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function KU(t){let e=await pT(t.appConfig);for(;e.registrationStatus===1;)await rA(100),e=await pT(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ky(t);return r||n}return e}function pT(t){return wf(t,e=>{if(!e)throw As.create("installation-not-found");return lA(e)})}function lA(t){return GU(t)?{fid:t.fid,registrationStatus:0}:t}function GU(t){return t.registrationStatus===1&&t.registrationTime+GR<Date.now()}/**
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
 */async function QU({appConfig:t,heartbeatServiceProvider:e},n){const r=YU(t,n),i=NU(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:QR,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await nA(()=>fetch(r,a));if(l.ok){const c=await l.json();return ZR(c)}else throw await eA("Generate Auth Token",l)}function YU(t,{fid:e}){return`${JR(t)}/${e}/authTokens:generate`}/**
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
 */async function Gy(t,e=!1){let n;const r=await wf(t.appConfig,s=>{if(!uA(s))throw As.create("not-registered");const o=s.authToken;if(!e&&ZU(o))return s;if(o.requestStatus===1)return n=XU(t,e),s;{if(!navigator.onLine)throw As.create("app-offline");const a=t3(s);return n=JU(t,a),a}});return n?await n:r.authToken}async function XU(t,e){let n=await mT(t.appConfig);for(;n.authToken.requestStatus===1;)await rA(100),n=await mT(t.appConfig);const r=n.authToken;return r.requestStatus===0?Gy(t,e):r}function mT(t){return wf(t,e=>{if(!uA(e))throw As.create("not-registered");const n=e.authToken;return n3(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JU(t,e){try{const n=await QU(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await sd(t.appConfig,r),n}catch(n){if(XR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await aA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await sd(t.appConfig,r)}throw n}}function uA(t){return t!==void 0&&t.registrationStatus===2}function ZU(t){return t.requestStatus===2&&!e3(t)}function e3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+xU}function t3(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function n3(t){return t.requestStatus===1&&t.requestTime+GR<Date.now()}/**
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
 */async function r3(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ky(e);return r?r.catch(console.error):Gy(e).catch(console.error),n.fid}/**
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
 */async function i3(t,e=!1){const n=t;return await s3(n),(await Gy(n,e)).token}async function s3(t){const{registrationPromise:e}=await Ky(t);e&&await e}/**
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
 */function o3(t){if(!t||!t.options)throw Pp("App Configuration");if(!t.name)throw Pp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Pp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Pp(t){return As.create("missing-app-config-values",{valueName:t})}/**
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
 */const cA="installations",a3="installations-internal",l3=t=>{const e=t.getProvider("app").getImmediate(),n=o3(e),r=Ms(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},u3=t=>{const e=t.getProvider("app").getImmediate(),n=Ms(e,cA).getImmediate();return{getId:()=>r3(n),getToken:i=>i3(n,i)}};function c3(){Gn(new Rn(cA,l3,"PUBLIC")),Gn(new Rn(a3,u3,"PRIVATE"))}c3();an(KR,Hy);an(KR,Hy,"esm2017");/**
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
 */const h3="/firebase-messaging-sw.js",d3="/firebase-cloud-messaging-push-scope",hA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",f3="https://fcmregistrations.googleapis.com/v1",dA="google.c.a.c_id",p3="google.c.a.c_l",m3="google.c.a.ts",g3="google.c.a.e";var gT;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(gT||(gT={}));/**
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
 */function yr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function _3(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Np="fcm_token_details_db",y3=5,_T="fcm_token_object_Store";async function v3(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Np))return null;let e=null;return(await Ad(Np,y3,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(_T))return;const l=o.objectStore(_T),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:yr(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:yr(h.auth),p256dh:yr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:yr(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:yr(h.auth),p256dh:yr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:yr(h.vapidKey)}}}}}})).close(),await fp(Np),await fp("fcm_vapid_details_db"),await fp("undefined"),w3(e)?e:null}function w3(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const E3="firebase-messaging-database",T3=1,Ns="firebase-messaging-store";let bp=null;function Qy(){return bp||(bp=Ad(E3,T3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ns)}}})),bp}async function fA(t){const e=Xy(t),r=await(await Qy()).transaction(Ns).objectStore(Ns).get(e);if(r)return r;{const i=await v3(t.appConfig.senderId);if(i)return await Yy(t,i),i}}async function Yy(t,e){const n=Xy(t),i=(await Qy()).transaction(Ns,"readwrite");return await i.objectStore(Ns).put(e,n),await i.done,e}async function I3(t){const e=Xy(t),r=(await Qy()).transaction(Ns,"readwrite");await r.objectStore(Ns).delete(e),await r.done}function Xy({appConfig:t}){return t.appId}/**
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
 */const S3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},bt=new Ls("messaging","Messaging",S3);/**
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
 */async function C3(t,e){const n=await Zy(t),r=mA(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Jy(t.appConfig),i)).json()}catch(o){throw bt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw bt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw bt.create("token-subscribe-no-token");return s.token}async function k3(t,e){const n=await Zy(t),r=mA(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Jy(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw bt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw bt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw bt.create("token-update-no-token");return s.token}async function pA(t,e){const r={method:"DELETE",headers:await Zy(t)};try{const s=await(await fetch(`${Jy(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw bt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw bt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Jy({projectId:t}){return`${f3}/projects/${t}/registrations`}async function Zy({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function mA({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==hA&&(i.web.applicationPubKey=r),i}/**
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
 */const x3=7*24*60*60*1e3;async function R3(t){const e=await N3(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:yr(e.getKey("auth")),p256dh:yr(e.getKey("p256dh"))},r=await fA(t.firebaseDependencies);if(r){if(b3(r.subscriptionOptions,n))return Date.now()>=r.createTime+x3?P3(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await pA(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return yT(t.firebaseDependencies,n)}else return yT(t.firebaseDependencies,n)}async function A3(t){const e=await fA(t.firebaseDependencies);e&&(await pA(t.firebaseDependencies,e.token),await I3(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function P3(t,e){try{const n=await k3(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Yy(t.firebaseDependencies,r),n}catch(n){throw n}}async function yT(t,e){const r={token:await C3(t,e),createTime:Date.now(),subscriptionOptions:e};return await Yy(t,r),r.token}async function N3(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_3(e)})}function b3(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function vT(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return D3(e,t),O3(e,t),L3(e,t),e}function D3(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function O3(t,e){e.data&&(t.data=e.data)}function L3(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function M3(t){return typeof t=="object"&&!!t&&dA in t}/**
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
 */function V3(t){if(!t||!t.options)throw Dp("App Configuration Object");if(!t.name)throw Dp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Dp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Dp(t){return bt.create("missing-app-config-values",{valueName:t})}/**
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
 */class j3{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=V3(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function gA(t){try{t.swRegistration=await navigator.serviceWorker.register(h3,{scope:d3}),t.swRegistration.update().catch(()=>{})}catch(e){throw bt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function F3(t,e){if(!e&&!t.swRegistration&&await gA(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw bt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function U3(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=hA)}/**
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
 */async function _A(t,e){if(!navigator)throw bt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw bt.create("permission-blocked");return await U3(t,e==null?void 0:e.vapidKey),await F3(t,e==null?void 0:e.serviceWorkerRegistration),R3(t)}/**
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
 */async function B3(t,e,n){const r=z3(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[dA],message_name:n[p3],message_time:n[m3],message_device_time:Math.floor(Date.now()/1e3)})}function z3(t){switch(t){case au.NOTIFICATION_CLICKED:return"notification_open";case au.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function W3(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===au.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(vT(n)):t.onMessageHandler.next(vT(n)));const r=n.data;M3(r)&&r[g3]==="1"&&await B3(t,n.messageType,r)}const wT="@firebase/messaging",ET="0.12.12";/**
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
 */const $3=t=>{const e=new j3(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>W3(e,n)),e},H3=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>_A(e,r)}};function q3(){Gn(new Rn("messaging",$3,"PUBLIC")),Gn(new Rn("messaging-internal",H3,"PRIVATE")),an(wT,ET),an(wT,ET,"esm2017")}/**
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
 */async function ev(){try{await _C()}catch{return!1}return typeof window<"u"&&gC()&&jb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function K3(t){if(!navigator)throw bt.create("only-available-in-window");return t.swRegistration||await gA(t),A3(t)}/**
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
 */function G3(t,e){if(!navigator)throw bt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function yA(t=Pd()){return ev().then(e=>{if(!e)throw bt.create("unsupported-browser")},e=>{throw bt.create("indexed-db-unsupported")}),Ms(we(t),"messaging").getImmediate()}async function Q3(t,e){return t=we(t),_A(t,e)}function Y3(t){return t=we(t),K3(t)}function X3(t,e){return t=we(t),G3(t,e)}q3();const vA=Object.freeze(Object.defineProperty({__proto__:null,deleteToken:Y3,getMessaging:yA,getToken:Q3,isSupported:ev,onMessage:X3},Symbol.toStringTag,{value:"Module"})),J3={apiKey:"AIzaSyAbAb2YcqvSaahSV_UITjQtk8UArYSaDdY",authDomain:"dingo-new-version.firebaseapp.com",databaseURL:"https://dingo-new-version-default-rtdb.firebaseio.com",projectId:"dingo-new-version",storageBucket:"dingo-new-version.firebasestorage.app",messagingSenderId:"245470329002",appId:"1:245470329002:web:f0fae2a906e773629578d3"},Z3="GG6zruC_lQSTKwuBvOudnROxxtXFMGufChhrzU7M6vQ",Ef=EC(J3),Vu=mL(Ef),it=px(Ef),Ue=IU(Ef);let lu=null;ev().then(t=>{t&&(lu=yA(Ef))}).catch(()=>{});const eB="modulepreload",tB=function(t){return"/DINGO-NEW-VERSION-/"+t},TT={},tv=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=tB(l),l in TT)return;TT[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":eB,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,v)=>{f.addEventListener("load",m),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function nB(){return String(Math.floor(1e7+Math.random()*9e7))}async function wA(t,e){const n=Qt(it,"users",t);(await Au(n)).exists()?await mn(n,{isOnline:!0}):await Rx(n,{displayName:e.displayName||"Player",email:e.email||"",avatar:e.avatar||"🎯",color:e.color||"#00ffcc",shortId:nB(),wins:0,losses:0,total:0,winRate:0,streak:0,friends:[],isOnline:!0,fcmToken:null,createdAt:Pu()})}async function rB(t){const e=await Au(Qt(it,"users",t));return e.exists()?{uid:t,...e.data()}:null}async function EA(t,e){await mn(Qt(it,"users",t),e)}async function IT(t,e){try{await mn(Qt(it,"users",t),{isOnline:e,lastSeen:Pu()})}catch{}}async function iB(t,e){await mn(Qt(it,"users",t),{fcmToken:e})}async function sB(t){const{collection:e,query:n,where:r,getDocs:i}=await tv(async()=>{const{collection:a,query:l,where:c,getDocs:h}=await Promise.resolve().then(()=>cj);return{collection:a,query:l,where:c,getDocs:h}},void 0),s=n(e(it,"users"),r("displayName",">=",t),r("displayName","<=",t+""));return(await i(s)).docs.map(a=>({uid:a.id,...a.data()}))}const oB=new wr;function aB(t){return rO(Vu,t)}async function lB(t,e){return(await JD(Vu,t,e)).user}async function uB(t,e,n){const r=await XD(Vu,t,e);return await eO(r.user,{displayName:n}),await wA(r.user.uid,{displayName:n,email:t,avatar:"🎯",color:"#00ffcc"}),r.user}async function cB(){const t=await SO(Vu,oB);return await wA(t.user.uid,{displayName:t.user.displayName||"Player",email:t.user.email,avatar:"🎯",color:"#00ffcc"}),t.user}async function TA(){await iO(Vu)}const IA=b.createContext(null);function bn(){return b.useContext(IA)}function hB({children:t}){const[e,n]=b.useState(null),[r,i]=b.useState(null),[s,o]=b.useState(!0),a=async l=>{if(!l)return;const c=await rB(l);i(c)};return b.useEffect(()=>{const l=aB(async h=>{n(h),h?(await a(h.uid),IT(h.uid,!0)):i(null),o(!1)}),c=()=>{e&&IT(e.uid,!1)};return window.addEventListener("beforeunload",c),()=>{l(),window.removeEventListener("beforeunload",c)}},[]),p.jsx(IA.Provider,{value:{user:e,profile:r,loading:s,refreshProfile:a},children:t})}function dB(){const[t,e]=b.useState([]);return b.useEffect(()=>{const n=r=>{const i=Date.now();e(s=>[...s,{id:i,...r.detail}]),setTimeout(()=>{e(s=>s.filter(o=>o.id!==i))},3500)};return window.addEventListener("dingo-toast",n),()=>window.removeEventListener("dingo-toast",n)},[]),t.length?p.jsx("div",{className:"toast-container",children:t.map(n=>p.jsx("div",{className:`toast ${n.type||"info"}`,children:p.jsxs("div",{children:[p.jsx("div",{className:"toast-title",children:n.title}),n.body&&p.jsx("div",{className:"toast-body",children:n.body})]})},n.id))}):null}function nv(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function rv(t,e,n){await Oi(Fe(Ue,`rooms/${t}`),{gameState:{status:"waiting",turn:"p1",p1Board:n,p2Board:[],calledNumbers:[],p1Lines:0,p2Lines:0,p1Chances:5,p2Chances:5,winner:null,tie:!1,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{...e,role:"p1"}},rematch:{p1:!1,p2:!1,newRoomId:null}})}async function SA(t,e,n){var s;const r=await HR(Fe(Ue,`rooms/${t}`));if(!r.exists())throw new Error("Room not found");const i=r.val();if((s=i.players)!=null&&s.p2)throw new Error("Room is full");return await lr(Fe(Ue,`rooms/${t}`),{"players/p2":{...e,role:"p2"},"gameState/p2Board":n,"gameState/status":"playing","gameState/turnStartedAt":Date.now()}),i}function iv(t,e){const n=Fe(Ue,`rooms/${t}`);return yf(n,r=>e(r.val())),()=>qR(n)}async function Ha(t,e,n,r,i,s=!1){const o=e==="p1"?"p2":"p1",a={"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i};s||(a["gameState/turn"]=o,a["gameState/turnStartedAt"]=Date.now()),await lr(Fe(Ue,`rooms/${t}`),a)}async function fB(t,e,n,r,i,s){const o=e==="p1"?"p2":"p1";await lr(Fe(Ue,`rooms/${t}`),{"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i,[`gameState/${e}Chances`]:s,"gameState/turn":o,"gameState/turnStartedAt":Date.now()})}async function qa(t,e){await lr(Fe(Ue,`rooms/${t}/gameState`),{winner:e,status:"finished",tie:!1})}async function ST(t){await lr(Fe(Ue,`rooms/${t}/gameState`),{winner:null,tie:!0,status:"finished"})}async function pB(t,e){await $R(Fe(Ue,`rooms/${t}/chat`),{...e,ts:Date.now()})}async function mB(t,e){await lr(Fe(Ue,`rooms/${t}/gameState`),{[`${e}Exited`]:!0})}async function gB(t,e,n,r){await lr(Fe(Ue,`rooms/${t}/rematch`),{[e]:!0});const s=(await HR(Fe(Ue,`rooms/${t}/rematch`))).val()||{};if(!s.p1||!s.p2||s.newRoomId)return null;const o=nv();return await rv(o,r,n),await lr(Fe(Ue,`rooms/${t}/rematch`),{newRoomId:o}),o}async function _g(t){try{await gf(Fe(Ue,`rooms/${t}`))}catch{}}const sv=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]];function ta(){const t=Array.from({length:25},(e,n)=>n+1);for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Rt(t,e){if(!t||t.length===0)return 0;const n=new Set(e);return sv.filter(r=>r.every(i=>n.has(t[i]))).length}function CA(t,e){if(!t||t.length===0)return[];const n=new Set(e);return sv.filter(r=>r.every(i=>n.has(t[i])))}function _B(t,e){const n=new Set;return CA(t,e).forEach(r=>r.forEach(i=>n.add(i))),[...n]}function od(t,e,n){const r=new Set([...e,n]);let i=0;for(const s of sv){const o=s.filter(a=>r.has(t[a])).length;o===5?i+=1e6:o===4?i+=5e4:o===3?i+=1e3:o===2?i+=20:o===1&&(i+=1)}return i}function Js(t,e,n,r,i){const s=od(t,n,r),o=od(e,n,r);return s+o*i}function yB(t,e,n,r){var s;const i=Array.from({length:25},(o,a)=>a+1).filter(o=>!e.includes(o));if(i.length===0)return null;if(t==="easy")return i[Math.floor(Math.random()*i.length)];if(t==="medium")return i.reduce((o,a)=>od(r,e,a)>od(r,e,o)?a:o,i[0]);if(t==="hard"){for(const o of i)if(Rt(r,[...e,o])>=5)return o;for(const o of i)if(Rt(n,[...e,o])>=5)return o;return i.reduce((o,a)=>Js(r,n,e,a,.4)>Js(r,n,e,o,.4)?a:o,i[0])}if(t==="expert"){for(const o of i)if(Rt(r,[...e,o])>=5)return o;for(const o of i)if(Rt(n,[...e,o])>=5)return o;for(const o of i)if(Rt(n,[...e,o])>=4)return o;return i.reduce((o,a)=>Js(r,n,e,a,.7)>Js(r,n,e,o,.7)?a:o,i[0])}if(t==="nightmare"||t==="godmode"){for(const a of i)if(Rt(r,[...e,a])>=5)return a;for(const a of i)if(Rt(n,[...e,a])>=5)return a;if(t==="godmode"){const a=i.map(l=>({num:l,oppLines:Rt(n,[...e,l])})).sort((l,c)=>c.oppLines-l.oppLines);if(((s=a[0])==null?void 0:s.oppLines)>=4)return a[0].num}const o=t==="godmode"?1.2:.9;return i.reduce((a,l)=>Js(r,n,e,l,o)>Js(r,n,e,a,o)?l:a,i[0])}return i[Math.floor(Math.random()*i.length)]}const vB=45e3;async function wB(t,e,n){const r=nv();await rv(r,e,n);const i=$R(Fe(Ue,`invites/${t}`));return await Oi(i,{fromUid:e.uid,fromName:e.name,fromAvatar:e.avatar||"🎯",roomId:r,sentAt:Date.now(),expiresAt:Date.now()+vB}),{roomId:r,inviteId:i.key}}async function eh(t,e){try{await gf(Fe(Ue,`invites/${t}/${e}`))}catch{}}async function EB(t,e){return eh(t,e)}function TB(t,e){const n=Fe(Ue,`invites/${t}`);return yf(n,r=>{if(!r.exists()){e(null);return}const i=r.val(),s=Date.now(),o=Object.entries(i).filter(([,a])=>a.expiresAt>s).map(([a,l])=>({id:a,...l})).sort((a,l)=>a.sentAt-l.sentAt);e(o.length>0?o[0]:null)},()=>e(null)),()=>qR(n)}function IB(){try{return new(window.AudioContext||window.webkitAudioContext)}catch{return null}}let Gi=null;function ov(){return Gi||(Gi=IB()),(Gi==null?void 0:Gi.state)==="suspended"&&Gi.resume(),Gi}function av(){const t=parseFloat(localStorage.getItem("sfxVolume")??"0.75");return isNaN(t)?.75:Math.max(0,Math.min(1,t))}function or(t,e=.1,n="sine",r=.1){const i=av();if(i===0)return;const s=ov();if(!s)return;const o=s.createOscillator(),a=s.createGain();o.connect(a),a.connect(s.destination),o.type=n,o.frequency.value=t,a.gain.setValueAtTime(e*i,s.currentTime),a.gain.exponentialRampToValueAtTime(.001,s.currentTime+r),o.start(),o.stop(s.currentTime+r)}function fs(t,e,n=.1,r="sine"){const i=av();if(i===0)return;const s=ov();if(!s)return;const o=s.createOscillator(),a=s.createGain();o.connect(a),a.connect(s.destination),o.type=r,o.frequency.setValueAtTime(t,s.currentTime),o.frequency.exponentialRampToValueAtTime(e,s.currentTime+.15),a.gain.setValueAtTime(n*i,s.currentTime),a.gain.exponentialRampToValueAtTime(.001,s.currentTime+.15),o.start(),o.stop(s.currentTime+.15)}function ju(t,e=.1,n="sine"){t.forEach((r,i)=>setTimeout(()=>or(r,e,n,.3),i*60))}function SB(t=.05,e=100){const n=av();if(n===0)return;const r=ov();if(!r)return;const i=r.createBuffer(1,r.sampleRate*.05,r.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const o=r.createBufferSource(),a=r.createBiquadFilter(),l=r.createGain();o.buffer=i,a.type="highpass",a.frequency.value=e,o.connect(a),a.connect(l),l.connect(r.destination),l.gain.setValueAtTime(t*n,r.currentTime),l.gain.exponentialRampToValueAtTime(.001,r.currentTime+.05),o.start(),o.stop(r.currentTime+.05)}function Fu(t=1){[523,659,784,1047].forEach((e,n)=>setTimeout(()=>or(e,.15,"square",.2/t),n*100/t))}function Uu(t=1){[400,320,250].forEach((e,n)=>setTimeout(()=>or(e,.1,"sawtooth",.25/t),n*120/t))}const kA={click:()=>or(880,.05,"square",.1),cross:()=>or(660,.1,"square",.15),line:()=>ju([523,659,784],.2),win:()=>Fu(),lose:()=>Uu(),ping:()=>or(1200,.05,"sine",.08)},CB={click:()=>SB(.03,80),cross:()=>fs(800,200,.12,"sawtooth"),line:()=>ju([400,500,600],.18,"sawtooth"),win:()=>Fu(1.2),lose:()=>Uu(.8),ping:()=>or(1400,.03,"sine",.06)},kB={click:()=>fs(300,600,.08,"sine"),cross:()=>fs(600,100,.15,"sine"),line:()=>ju([261,329,392],.25,"sine"),win:()=>Fu(.9),lose:()=>Uu(.7),ping:()=>fs(800,1200,.06,"sine")},xB={click:()=>or(220,.04,"sine",.2),cross:()=>or(330,.06,"sine",.25),line:()=>ju([261,329,392],.12,"sine"),win:()=>Fu(.6),lose:()=>Uu(.5),ping:()=>or(440,.03,"sine",.15)},RB={click:()=>fs(400,800,.08,"square"),cross:()=>fs(200,1e3,.12,"square"),line:()=>ju([523,784,1047],.18,"square"),win:()=>Fu(1.4),lose:()=>Uu(1.2),ping:()=>fs(600,1400,.05,"square")},AB={classic:kA,ninja:CB,space:kB,lofi:xB,arcade:RB},PB=[{id:"classic",name:"Classic",icon:"🎮",desc:"Retro 8-bit bleeps"},{id:"ninja",name:"Ninja",icon:"🥷",desc:"Sharp sword slashes"},{id:"space",name:"Space",icon:"🌌",desc:"Sci-fi laser sounds"},{id:"lofi",name:"LoFi",icon:"🎵",desc:"Chill warm tones"},{id:"arcade",name:"Arcade",icon:"🕹️",desc:"Classic arcade bleeps"}],lv=[{id:"mute",label:"Mute",icon:"🔇",value:0},{id:"low",label:"Low",icon:"🔈",value:.2},{id:"med",label:"Med",icon:"🔉",value:.5},{id:"high",label:"High",icon:"🔊",value:.75},{id:"max",label:"Max",icon:"📢",value:1}];function Dr(){const t=localStorage.getItem("sfxTheme")||"classic",e=AB[t]||kA;return{click:()=>e.click(),cross:()=>e.cross(),line:()=>e.line(),win:()=>e.win(),lose:()=>e.lose(),ping:()=>e.ping()}}function NB(t){localStorage.setItem("sfxTheme",t)}function bB(t){const e=lv.find(r=>r.id===t),n=e?e.value:parseFloat(t);localStorage.setItem("sfxVolume",String(isNaN(n)?.75:n))}function DB(){const t=parseFloat(localStorage.getItem("sfxVolume")??"0.75"),e=lv.find(n=>Math.abs(n.value-t)<.01);return(e==null?void 0:e.id)||"high"}const CT=45;function OB(){const{user:t,profile:e}=bn(),n=Nn(),r=Dr(),[i,s]=b.useState(null),[o,a]=b.useState(CT),[l,c]=b.useState(!1),h=b.useRef(null),f=b.useRef(null);f.current=i,b.useEffect(()=>{if(!(t!=null&&t.uid))return;const I=TB(t.uid,D=>{var V;if(!D){s(null);return}(V=r.ping)==null||V.call(r),s(D),c(!1);const F=Math.max(0,Math.round((D.expiresAt-Date.now())/1e3));a(F),clearInterval(h.current),h.current=setInterval(()=>{a(S=>S<=1?(clearInterval(h.current),f.current&&(eh(t.uid,f.current.id).catch(()=>{}),s(null)),0):S-1)},1e3)});return()=>{I(),clearInterval(h.current)}},[t==null?void 0:t.uid]);const m=async()=>{if(!(!i||l)){c(!0),clearInterval(h.current);try{const I=ta(),D={uid:t.uid,name:(e==null?void 0:e.displayName)||"Player",avatar:(e==null?void 0:e.avatar)||"🎯"};await SA(i.roomId,D,I),await eh(t.uid,i.id),s(null),n(`/game/${i.roomId}`,{state:{role:"p2",board:I}})}catch(I){console.error("Accept invite error:",I),c(!1)}}},v=async()=>{i&&(clearInterval(h.current),await eh(t.uid,i.id).catch(()=>{}),s(null))};if(!i)return null;const w=44,A=(w-5)/2,P=2*Math.PI*A,T=o/CT,E=o<=10?"#ff2d55":o<=20?"#ffcc00":"#00ffcc";return p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1e3,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,animation:"toastIn 0.3s ease"},children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--c1)",borderRadius:20,padding:"28px 24px",width:"100%",maxWidth:320,textAlign:"center",boxShadow:"0 0 40px rgba(0,255,204,0.2), 8px 8px 0 rgba(0,0,0,0.5)",position:"relative",overflow:"hidden"},children:[p.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,var(--c1),var(--c4))"}}),p.jsxs("div",{style:{position:"relative",width:w,height:w,margin:"0 auto 16px"},children:[p.jsx("div",{style:{width:w,height:w,borderRadius:"50%",background:"var(--panel2)",border:"2px solid var(--edge2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22},children:i.fromAvatar}),p.jsxs("svg",{width:w,height:w,style:{position:"absolute",top:0,left:0,pointerEvents:"none"},children:[p.jsx("circle",{cx:w/2,cy:w/2,r:A,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:4}),p.jsx("circle",{cx:w/2,cy:w/2,r:A,fill:"none",stroke:E,strokeWidth:4,strokeDasharray:P,strokeDashoffset:P*(1-T),strokeLinecap:"round",transform:`rotate(-90 ${w/2} ${w/2})`,style:{transition:"stroke-dashoffset 1s linear, stroke 0.4s"}})]}),p.jsxs("div",{style:{position:"absolute",bottom:-4,right:-8,background:E,color:"#000",fontSize:10,fontWeight:800,borderRadius:10,padding:"1px 5px",fontFamily:"'Black Han Sans',sans-serif"},children:[o,"s"]})]}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18,letterSpacing:1.5,marginBottom:4},children:"⚔️ MATCH INVITE"}),p.jsx("div",{style:{fontWeight:800,fontSize:16,marginBottom:4,color:"var(--ink)"},children:i.fromName}),p.jsxs("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:["challenges you to a match!",p.jsx("br",{}),p.jsxs("span",{style:{fontSize:11,color:E},children:["Expires in ",o,"s"]})]}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:v,style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink2)",WebkitTapHighlightColor:"transparent"},children:"✕ Decline"}),p.jsx("button",{onClick:m,disabled:l,style:{flex:2,padding:"12px 0",background:"var(--c1)",border:"none",borderRadius:"var(--r)",fontWeight:800,fontSize:13,cursor:"pointer",color:"#000",boxShadow:"3px 3px 0 rgba(0,255,204,0.3)",WebkitTapHighlightColor:"transparent",opacity:l?.6:1},children:l?"⏳ Joining…":"⚔️ Accept!"})]})]})})}let LB=null;async function MB(t){if(!lu)return null;try{const{getToken:e}=await tv(async()=>{const{getToken:i}=await Promise.resolve().then(()=>vA);return{getToken:i}},void 0);if(await Notification.requestPermission()!=="granted")return null;const r=await e(lu,{vapidKey:Z3});return r&&(LB=r,await iB(t,r)),r}catch(e){return console.warn("Notification setup failed:",e),null}}function VB(t){if(!lu)return()=>{};tv(async()=>{const{onMessage:e}=await Promise.resolve().then(()=>vA);return{onMessage:e}},void 0).then(({onMessage:e})=>{e(lu,n=>{t(n)})})}function Jn(t,e,n="info"){const r=new CustomEvent("dingo-toast",{detail:{title:t,body:e,type:n}});window.dispatchEvent(r)}const jB=[{icon:"🎯",title:"Your Unique Board",desc:"You and your opponent each get a 5×5 grid with the same 25 numbers (1–25) arranged in different random positions."},{icon:"📣",title:"Call a Number",desc:'On your turn, tap any number on your board to "call" it. That number instantly gets marked on BOTH boards — wherever it appears.'},{icon:"📏",title:"Complete Lines",desc:"Mark 5 numbers in a row — horizontally, vertically, or diagonally — to complete a line. Each player is racing to form lines on their own board layout."},{icon:"🏆",title:"Win the Match",desc:"First player to complete 5 full lines wins! If the last call completes both boards simultaneously, it's a TIE and both players earn a point."},{icon:"❤️",title:"5 Chances Per Player",desc:"Each player has 5 lives. If your timer runs out, you auto-pick a random number and lose one life. Lose all 5 lives and your opponent wins automatically."},{icon:"🎁",title:"Lifelines",desc:"Use your 5 lifelines strategically: ⏰ Extra time, 💡 Best move hint, 2️⃣ Pick twice, 🎯 50/50 hints, 🛡️ Shield against timeout."},{icon:"🤖",title:"Solo vs Bot",desc:"Not ready for live players? Challenge one of 6 AI difficulty levels — from Easy all the way up to GodMode."}];function FB(){const t=Nn(),[e,n]=b.useState(!1);return p.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px 48px",overflowY:"auto",WebkitOverflowScrolling:"touch"},children:[p.jsxs("div",{style:{position:"relative",marginBottom:6,textAlign:"center"},children:[p.jsx("div",{style:{position:"absolute",top:6,left:6,right:0,fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--c1)",lineHeight:.9,opacity:.25,letterSpacing:-2,pointerEvents:"none",userSelect:"none"},children:"DiNGo"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--ink)",lineHeight:.9,letterSpacing:-2,position:"relative",textShadow:"0 0 40px rgba(0,255,204,0.2)"},children:"DiNGo"})]}),p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"var(--panel2)",border:"2px solid var(--c1)",borderRadius:"var(--r)",padding:"5px 14px",fontSize:9,letterSpacing:3,textTransform:"uppercase",fontWeight:700,color:"var(--c1)",marginBottom:28},children:[p.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),"Live Multiplayer Bingo"]}),p.jsxs("p",{style:{fontSize:15,color:"var(--ink2)",textAlign:"center",maxWidth:280,lineHeight:1.75,marginBottom:32},children:["Call numbers. Build lines.",p.jsx("br",{}),p.jsx("strong",{style:{color:"var(--ink)"},children:"Beat your opponent to 5."})]}),p.jsx("div",{style:{display:"flex",width:"100%",maxWidth:340,border:"2px solid var(--edge2)",borderRadius:"var(--r)",overflow:"hidden",marginBottom:36},children:[{n:"5×5",l:"Grid"},{n:"6",l:"AI Levels"},{n:"5",l:"Lifelines"}].map((r,i)=>p.jsxs("div",{style:{flex:1,textAlign:"center",padding:"14px 0",background:"var(--panel)",borderRight:i<2?"2px solid var(--edge2)":"none"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,color:"var(--ink)"},children:r.n}),p.jsx("div",{style:{fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:r.l})]},i))}),p.jsxs("div",{style:{width:"100%",maxWidth:340,display:"flex",flexDirection:"column",gap:12},children:[p.jsx("button",{className:"btn btn-primary btn-full",style:{fontSize:16,padding:"16px 0",letterSpacing:2,boxShadow:"0 0 24px rgba(0,255,204,0.3), 4px 4px 0 rgba(0,255,204,0.2)"},onClick:()=>t("/login"),children:"🎮 Get Started"}),p.jsx("button",{className:"btn btn-ghost btn-full",style:{borderColor:"rgba(0,255,204,0.35)",color:"var(--c1)",fontSize:13},onClick:()=>n(!0),children:"📖 How to Play"})]}),e&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.9)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>n(!1),children:p.jsxs("div",{style:{background:"var(--panel)",borderRadius:"20px 20px 0 0",border:"2px solid var(--edge2)",borderBottom:"none",width:"100%",maxWidth:480,maxHeight:"88vh",overflowY:"auto",WebkitOverflowScrolling:"touch"},onClick:r=>r.stopPropagation(),children:[p.jsx("div",{style:{height:4,background:"linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))",borderRadius:"20px 20px 0 0"}}),p.jsxs("div",{style:{padding:"18px 18px 36px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:22},children:[p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,letterSpacing:3},children:"HOW TO PLAY"}),p.jsx("button",{onClick:()=>n(!1),style:{background:"none",border:"2px solid var(--edge2)",color:"var(--ink2)",width:34,height:34,borderRadius:8,cursor:"pointer",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),jB.map((r,i)=>p.jsxs("div",{style:{display:"flex",gap:14,marginBottom:22,alignItems:"flex-start"},children:[p.jsx("div",{style:{fontSize:32,flexShrink:0,lineHeight:1,width:52,height:52,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--panel2)",borderRadius:12,border:"2px solid var(--edge2)"},children:r.icon}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:800,fontSize:14,marginBottom:4},children:r.title}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",lineHeight:1.6},children:r.desc})]})]},i)),p.jsx("button",{className:"btn btn-primary btn-full",style:{marginTop:4,fontSize:14},onClick:()=>n(!1),children:"Got it! Let's Play 🎮"})]})]})})]})}function UB(){const{user:t,loading:e}=bn(),n=Nn(),[r,i]=b.useState("login"),[s,o]=b.useState(""),[a,l]=b.useState(""),[c,h]=b.useState(""),[f,m]=b.useState(""),[v,w]=b.useState(!1),[A,P]=b.useState("");b.useEffect(()=>{!e&&t&&n("/",{replace:!0})},[t,e]);const T=async()=>{m(""),P(""),w(!0);try{if(r==="login")await lB(s,a);else{if(!c.trim()){m("Please enter your name"),w(!1);return}if(a.length<6){m("Password must be at least 6 characters"),w(!1);return}await uB(s,a,c.trim()),P("✅ Account created! Signing you in…")}}catch(I){m(kT(I.code))}w(!1)},E=async()=>{m(""),P(""),w(!0);try{await cB()}catch(I){m(kT(I.code))}w(!1)};return e||t?p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:p.jsx("div",{className:"spinner"})}):p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:20,paddingTop:40},children:[p.jsxs("div",{className:"text-center",style:{marginBottom:28},children:[p.jsx("div",{className:"hero-logo","data-text":"DiNGo",style:{fontSize:"clamp(72px,18vw,100px)"},children:"DiNGo"}),p.jsx("div",{className:"sub",style:{marginTop:6,letterSpacing:2},children:"LIVE MULTIPLAYER BINGO"})]}),p.jsx("div",{className:"card",style:{maxWidth:400},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{display:"flex",gap:8,marginBottom:20},children:["login","register"].map(I=>p.jsx("button",{className:`btn ${r===I?"btn-primary":"btn-ghost"}`,style:{flex:1},onClick:()=>{i(I),m(""),P("")},children:I==="login"?"🎮 Sign In":"🚀 Sign Up"},I))}),r==="register"&&p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Your Name"}),p.jsx("input",{type:"text",placeholder:"KGames",value:c,onChange:I=>h(I.target.value),maxLength:20,enterKeyHint:"next"})]}),p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Email"}),p.jsx("input",{type:"email",placeholder:"you@email.com",value:s,onChange:I=>o(I.target.value),enterKeyHint:"next"})]}),p.jsxs("div",{style:{marginBottom:18},children:[p.jsx("div",{className:"label",children:"Password"}),p.jsx("input",{type:"password",placeholder:"••••••••",value:a,onChange:I=>l(I.target.value),onKeyDown:I=>I.key==="Enter"&&T(),enterKeyHint:"done"})]}),f&&p.jsx("div",{style:{background:"rgba(255,45,85,0.12)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c2)"},children:f}),A&&p.jsxs("div",{style:{background:"rgba(0,255,204,0.12)",border:"2px solid var(--c1)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c1)",display:"flex",alignItems:"center",gap:8},children:[p.jsx("div",{className:"spinner",style:{width:16,height:16,borderWidth:2}}),A]}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:T,disabled:v,children:v?"⏳ Please wait…":r==="login"?"🎮 Sign In":"🚀 Create Account"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,margin:"16px 0"},children:[p.jsx("div",{className:"divider",style:{flex:1}}),p.jsx("span",{className:"muted small",children:"or"}),p.jsx("div",{className:"divider",style:{flex:1}})]}),p.jsxs("button",{className:"btn btn-ghost btn-full",onClick:E,disabled:v,style:{border:"2px solid var(--edge2)"},children:[p.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",width:18,alt:""}),"Continue with Google"]})]})})]})}function kT(t){return{"auth/user-not-found":"No account found with that email.","auth/wrong-password":"Wrong password. Try again.","auth/invalid-credential":"Wrong email or password. Try again.","auth/email-already-in-use":"Email already in use — try signing in instead.","auth/weak-password":"Password must be at least 6 characters.","auth/invalid-email":"Invalid email address.","auth/popup-closed-by-user":"Google sign-in was cancelled.","auth/too-many-requests":"Too many attempts. Please wait a minute."}[t]||"Something went wrong. Please try again."}function BB(t,e,n){const r=Fe(Ue,`online/${t}`),i={uid:t,name:e,avatar:n,ts:Date.now()};Oi(r,i).catch(()=>{}),pU(r).remove();const s=setInterval(()=>{Oi(r,{...i,ts:Date.now()}).catch(()=>{})},25e3);return()=>{clearInterval(s),gf(r).catch(()=>{})}}function zB(t){const e=Fe(Ue,"online");return yf(e,r=>{t(r.exists()?Object.keys(r.val()||{}).length:0)},()=>t(0))}function WB(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function $B(t,e,n,r){await Oi(Fe(Ue,`queue/${t}`),{uid:t,name:e,avatar:n,board:r,timestamp:Date.now(),roomId:null,role:null})}function Tl(t){gf(Fe(Ue,`queue/${t}`)).catch(()=>{})}function HB(t,e,n,r,i){const s=Fe(Ue,"queue"),o=yf(s,async a=>{var w;const l=a.val();if(!l||!l[t])return;if(l[t].roomId){o(),Tl(t),i(l[t].roomId,l[t].role||"p2");return}const c=Object.entries(l).filter(([A,P])=>A!==t&&!P.roomId).sort((A,P)=>A[1].timestamp-P[1].timestamp);if(c.length===0)return;const[h,f]=c[0];if((((w=l[t])==null?void 0:w.timestamp)||0)>f.timestamp)return;const v=WB();try{await Oi(Fe(Ue,`rooms/${v}`),{gameState:{status:"playing",turn:"p1",p1Board:r,p2Board:f.board||[],calledNumbers:[],p1Lines:0,p2Lines:0,p1Chances:5,p2Chances:5,winner:null,tie:!1,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{uid:t,name:e,avatar:n||"🎯",role:"p1"},p2:{uid:h,name:f.name,avatar:f.avatar||"🎯",role:"p2"}},rematch:{p1:!1,p2:!1,newRoomId:null}}),await lr(Fe(Ue,`queue/${t}`),{roomId:v,role:"p1"}),await lr(Fe(Ue,`queue/${h}`),{roomId:v,role:"p2"}),o(),Tl(t),i(v,"p1")}catch(A){console.error("Matchmaking error:",A)}});return o}const qB=[{icon:"🤖",title:"vs Bot",sub:"6 AI levels",path:"/bot"},{icon:"⚡",title:"Create Room",sub:"Invite a friend",path:"/room/create"},{icon:"🔗",title:"Join Room",sub:"Enter room code",path:"/room/join"},{icon:"🏆",title:"Leaderboard",sub:"Top players",path:"/leaderboard"},{icon:"👥",title:"Friends",sub:"Add & challenge",path:"/friends"},{icon:"📊",title:"History",sub:"Past games",path:"/history"}],KB=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"];function GB(){const{user:t,profile:e,refreshProfile:n}=bn(),r=Nn(),i=Dr(),[s,o]=b.useState(0),[a,l]=b.useState(!1),[c,h]=b.useState(0),[f,m]=b.useState(!1),[v,w]=b.useState(!1),[A,P]=b.useState(""),[T,E]=b.useState(""),[I,D]=b.useState(!1),F=b.useRef(null),V=b.useRef(null),S=b.useRef(null);b.useEffect(()=>{if(!t||!e)return;const M=BB(t.uid,e.displayName||"Player",e.avatar||"🎯"),ie=zB(o);return()=>{M(),ie()}},[t==null?void 0:t.uid,e==null?void 0:e.displayName]),b.useEffect(()=>()=>{t!=null&&t.uid&&Tl(t.uid),clearInterval(V.current),F.current&&F.current()},[t==null?void 0:t.uid]);const y=()=>{P((e==null?void 0:e.displayName)||""),E((e==null?void 0:e.avatar)||"🎯"),w(!0)},C=async()=>{var M;A.trim()&&(D(!0),await EA(t.uid,{displayName:A.trim(),avatar:T}),await n(t.uid),D(!1),w(!1),(M=i.click)==null||M.call(i))},k=async()=>{var ke;if(a){Tl(t.uid),F.current&&(F.current(),F.current=null),clearInterval(V.current),l(!1),h(0);return}(ke=i.click)==null||ke.call(i);const M=ta();S.current=M,l(!0),h(0),V.current=setInterval(()=>h(z=>z+1),1e3),await $B(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",M);const ie=HB(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",M,(z,X)=>{clearInterval(V.current),l(!1),r(`/game/${z}`,{state:{role:X,board:M}})});F.current=ie},N=async()=>{a&&(Tl(t.uid),F.current&&F.current(),clearInterval(V.current)),await TA()},R=M=>{var ie;(ie=i.click)==null||ie.call(i),r(M)},x=(e==null?void 0:e.color)||"#00ffcc",Te=e!=null&&e.displayName?e.displayName.length>10?e.displayName.slice(0,10)+"…":e.displayName:"Player";return p.jsxs("div",{className:"screen",style:{paddingTop:14,paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",maxWidth:440,marginBottom:18,gap:8},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:30,letterSpacing:1,lineHeight:1},children:"DiNGo"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:2},children:[p.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),p.jsxs("span",{style:{fontSize:10,color:"var(--c1)",fontWeight:700,letterSpacing:1.5,textTransform:"uppercase"},children:[s," Online"]})]})]}),p.jsxs("button",{onClick:y,style:{display:"flex",alignItems:"center",gap:7,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:10,padding:"6px 10px",cursor:"pointer",flexShrink:0,maxWidth:160,WebkitTapHighlightColor:"transparent"},children:[p.jsx("span",{style:{fontSize:24,flexShrink:0},children:(e==null?void 0:e.avatar)||"🎯"}),p.jsxs("div",{style:{textAlign:"left",overflow:"hidden"},children:[p.jsx("div",{style:{fontWeight:700,fontSize:12,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:x},children:Te}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)",whiteSpace:"nowrap"},children:[(e==null?void 0:e.wins)||0,"W · ",(e==null?void 0:e.streak)||0,"🔥"]})]}),p.jsx("span",{style:{fontSize:10,color:"var(--ink3)",flexShrink:0},children:"✏️"})]}),p.jsx("button",{onClick:()=>R("/profile"),title:"Full Profile & Settings",style:{width:36,height:36,borderRadius:8,flexShrink:0,background:"var(--panel)",border:"2px solid var(--edge2)",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},children:"⚙️"}),p.jsx("button",{onClick:()=>m(!0),title:"Sign Out",style:{width:36,height:36,borderRadius:8,flexShrink:0,background:"var(--panel)",border:"2px solid var(--edge2)",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},children:"🚪"})]}),(e==null?void 0:e.shortId)&&p.jsx("div",{style:{width:"100%",maxWidth:440,marginBottom:14},children:p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:8,padding:"4px 12px",fontSize:11},children:[p.jsx("span",{style:{color:"var(--ink3)"},children:"🪪 Player ID:"}),p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",letterSpacing:2,color:"var(--c3)",fontSize:13},children:["#",e.shortId]})]})}),p.jsx("div",{style:{width:"100%",maxWidth:440,marginBottom:18},children:p.jsx("button",{onClick:k,style:{width:"100%",padding:"15px 20px",background:a?"var(--c2)":"var(--c1)",border:"none",borderRadius:"var(--r)",fontFamily:"'Space Grotesk',sans-serif",fontWeight:800,fontSize:14,letterSpacing:1.5,textTransform:"uppercase",color:"#000",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,WebkitTapHighlightColor:"transparent"},children:a?p.jsxs(p.Fragment,{children:[p.jsx("span",{style:{animation:"spin 1s linear infinite",display:"inline-block"},children:"⏳"})," Searching… ",c,"s · Tap to Cancel"]}):"⚡ PLAY NOW — Auto Match"})}),p.jsx("div",{className:"menu-grid",children:qB.map(M=>p.jsxs("div",{className:"menu-card",onClick:()=>R(M.path),children:[p.jsx("div",{className:"menu-icon",children:M.icon}),p.jsx("div",{className:"menu-title",children:M.title}),p.jsx("div",{className:"menu-sub",children:M.sub})]},M.path))}),p.jsx("div",{style:{marginTop:18,width:"100%",maxWidth:440,display:"flex",gap:8},children:[{label:"WINS",val:(e==null?void 0:e.wins)||0,color:"var(--c1)"},{label:"LOSSES",val:(e==null?void 0:e.losses)||0,color:"var(--c2)"},{label:"STREAK",val:`${(e==null?void 0:e.streak)||0}🔥`,color:"var(--c3)"}].map(M=>p.jsxs("div",{style:{flex:1,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"10px 0",textAlign:"center"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,color:M.color},children:M.val}),p.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:2},children:M.label})]},M.label))}),v&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:800,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>w(!1),children:p.jsxs("div",{style:{background:"var(--panel)",borderRadius:"20px 20px 0 0",border:"2px solid var(--edge2)",borderBottom:"none",width:"100%",maxWidth:480,maxHeight:"75vh",overflowY:"auto",WebkitOverflowScrolling:"touch"},onClick:M=>M.stopPropagation(),children:[p.jsx("div",{style:{height:4,background:"linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))",borderRadius:"20px 20px 0 0"}}),p.jsxs("div",{style:{padding:"16px 16px 32px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,letterSpacing:2},children:"✏️ QUICK EDIT"}),p.jsx("button",{onClick:()=>w(!1),style:{background:"none",border:"2px solid var(--edge2)",color:"var(--ink2)",width:32,height:32,borderRadius:8,cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),p.jsx("div",{style:{textAlign:"center",fontSize:52,marginBottom:12},children:T}),p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Display Name"}),p.jsx("input",{type:"text",value:A,onChange:M=>P(M.target.value),maxLength:20,placeholder:"Your name",enterKeyHint:"done",onKeyDown:M=>M.key==="Enter"&&M.target.blur()})]}),p.jsx("div",{className:"label",style:{marginBottom:8},children:"Avatar"}),p.jsx("div",{className:"avatar-grid",style:{marginBottom:16},children:KB.map(M=>p.jsx("div",{className:`avatar-opt ${T===M?"selected":""}`,onClick:()=>{var ie;E(M),(ie=i.click)==null||ie.call(i)},children:M},M))}),p.jsx("button",{onClick:C,disabled:I||!A.trim(),className:"btn btn-primary btn-full",style:{fontSize:15,padding:"14px 0"},children:I?"⏳ Saving…":"💾 Save Changes"})]})]})}),f&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>m(!1),children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:M=>M.stopPropagation(),children:[p.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:()=>m(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),p.jsx("button",{onClick:N,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const QB=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"],YB=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#00b4ff","#ff6a00","#00ff88","#ff00ff","#ffffff","#f5a623"];function XB(){const{user:t,profile:e,refreshProfile:n}=bn(),r=Nn(),i=Dr(),[s,o]=b.useState((e==null?void 0:e.displayName)||""),[a,l]=b.useState((e==null?void 0:e.avatar)||"🎯"),[c,h]=b.useState((e==null?void 0:e.color)||"#00ffcc"),[f,m]=b.useState(localStorage.getItem("sfxTheme")||"classic"),[v,w]=b.useState(DB()),[A,P]=b.useState(!1),[T,E]=b.useState(!1),[I,D]=b.useState("idle"),[F,V]=b.useState(!1);b.useEffect(()=>{e&&(o(e.displayName||""),l(e.avatar||"🎯"),h(e.color||"#00ffcc"))},[e]);const S=async()=>{var R;s.trim()&&(P(!0),await EA(t.uid,{displayName:s.trim(),avatar:a,color:c}),await n(t.uid),(R=i.click)==null||R.call(i),P(!1),E(!0),setTimeout(()=>E(!1),2e3))},y=R=>{NB(R),m(R),setTimeout(()=>{var x,Te;return(Te=(x=Dr()).click)==null?void 0:Te.call(x)},50)},C=R=>{bB(R),w(R),setTimeout(()=>{var x,Te;return(Te=(x=Dr()).click)==null?void 0:Te.call(x)},30)},k=async()=>{await TA()},N=async()=>{D("requesting");const R=await MB(t.uid);D(R?"granted":"denied")};return p.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[p.jsxs("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain",padding:"14px 14px 24px",display:"flex",flexDirection:"column",alignItems:"center"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:4},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px",flexShrink:0},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,letterSpacing:2},children:"⚙️ PROFILE"}),p.jsx("button",{onClick:()=>V(!0),style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:5,flexShrink:0,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"6px 10px",fontSize:11,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Sign Out"})]}),p.jsx("div",{style:{fontSize:64,marginBottom:6,textAlign:"center"},children:a}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,textAlign:"center",marginBottom:2,color:c},children:s||"Player"}),p.jsx("div",{style:{fontSize:11,color:"var(--ink3)",textAlign:"center",marginBottom:4},children:t==null?void 0:t.email}),(e==null?void 0:e.shortId)&&p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:8,padding:"4px 12px",fontSize:11,marginBottom:16},children:[p.jsx("span",{style:{color:"var(--ink3)"},children:"🪪 Player ID:"}),p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",letterSpacing:2,color:"var(--c3)",fontSize:13},children:["#",e.shortId]})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsxs("div",{style:{marginBottom:16},children:[p.jsx("div",{className:"label",children:"Display Name"}),p.jsx("input",{type:"text",value:s,onChange:R=>o(R.target.value),maxLength:20,placeholder:"Your name",enterKeyHint:"done",onKeyDown:R=>R.key==="Enter"&&R.target.blur()})]}),p.jsxs("div",{style:{marginBottom:16},children:[p.jsx("div",{className:"label",children:"Avatar"}),p.jsx("div",{className:"avatar-grid",children:QB.map(R=>p.jsx("div",{className:`avatar-opt ${a===R?"selected":""}`,onClick:()=>{var x;l(R),(x=i.click)==null||x.call(i)},children:R},R))})]}),p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Name Color"}),p.jsx("div",{className:"color-row",children:YB.map(R=>p.jsx("div",{className:`color-dot ${c===R?"selected":""}`,style:{background:R},onClick:()=>{var x;h(R),(x=i.click)==null||x.call(i)}},R))})]})]})}),e&&p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"📊 Your Stats"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[{label:"WINS",val:e.wins||0,color:"var(--c1)"},{label:"LOSSES",val:e.losses||0,color:"var(--c2)"},{label:"WIN RATE",val:`${e.winRate||0}%`,color:"var(--c3)"},{label:"STREAK",val:`${e.streak||0}🔥`,color:"var(--c3)"},{label:"GAMES",val:e.total||0,color:"var(--c4)"}].map(R=>p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"12px 0",textAlign:"center"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:R.color},children:R.val}),p.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:R.label})]},R.label))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🔊 Volume"}),p.jsx("div",{style:{display:"flex",gap:8},children:lv.map(R=>p.jsxs("button",{onClick:()=>C(R.id),style:{flex:1,padding:"10px 0",border:"2px solid",borderColor:v===R.id?"var(--c1)":"var(--edge2)",background:v===R.id?"rgba(0,255,204,0.1)":"var(--panel)",borderRadius:"var(--r)",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,WebkitTapHighlightColor:"transparent"},children:[p.jsx("span",{style:{fontSize:18},children:R.icon}),p.jsx("span",{style:{fontSize:9,fontWeight:700,letterSpacing:1,textTransform:"uppercase",color:v===R.id?"var(--c1)":"var(--ink3)"},children:R.label})]},R.id))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🎵 Sound Theme"}),p.jsx("div",{className:"sfx-grid",children:PB.map(R=>p.jsxs("div",{className:`sfx-opt ${f===R.id?"active":""}`,onClick:()=>y(R.id),children:[p.jsx("div",{className:"sfx-icon",children:R.icon}),p.jsx("div",{className:"sfx-name",children:R.name}),p.jsx("div",{className:"sfx-desc",children:R.desc})]},R.id))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🔔 Notifications"}),p.jsx("div",{className:"card",children:p.jsxs("div",{className:"card-body",children:[p.jsx("p",{style:{fontSize:13,color:"var(--ink2)",marginBottom:12,lineHeight:1.6},children:"Get notified when friends challenge you or it's your turn."}),p.jsx("button",{className:"btn btn-purple btn-full",onClick:N,disabled:I==="requesting"||I==="granted",children:I==="granted"?"✅ Notifications Enabled":I==="denied"?"❌ Permission Denied":I==="requesting"?"⏳ Requesting…":"🔔 Enable Notifications"})]})})]}),p.jsx("div",{style:{width:"100%",maxWidth:440,marginTop:24},children:p.jsx("button",{onClick:()=>V(!0),className:"btn btn-full",style:{background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",color:"var(--c2)",fontSize:13},children:"🚪 Sign Out of DiNGo"})})]}),p.jsx("div",{style:{flexShrink:0,background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"10px 14px",paddingBottom:"calc(10px + env(safe-area-inset-bottom, 0px))",display:"flex",gap:10},children:p.jsx("button",{onClick:S,disabled:A||!s.trim(),className:"btn btn-primary btn-full",style:{fontSize:15,padding:"14px 0"},children:T?"✅ Profile Saved!":A?"⏳ Saving…":"💾 Save Profile"})}),F&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>V(!1),children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:R=>R.stopPropagation(),children:[p.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:()=>V(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),p.jsx("button",{onClick:k,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const xT=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#ffffff"];function yg({board:t,selected:e,onCellClick:n,disabled:r=!1,highlightCells:i=[]}){const s=new Set(_B(t,e)),o=CA(t,e),a=new Set(i),l={};return o.forEach((c,h)=>{c.forEach(f=>{l[f]||(l[f]=xT[Math.min(h,xT.length-1)])})}),p.jsx("div",{className:"board-wrap",children:p.jsx("div",{className:"board",children:t.map((c,h)=>{const f=e.includes(c),m=s.has(h),v=a.has(c),w=l[h];return p.jsx("div",{className:`cell ${f?"crossed":""}`,style:{cursor:r||f?"default":"pointer",background:m?`rgba(${w==="#00ffcc"?"0,255,204":w==="#ff2d55"?"255,45,85":w==="#ffcc00"?"255,204,0":w==="#7b61ff"?"123,97,255":"255,255,255"}, 0.15)`:void 0,borderColor:m?w:v?"var(--c3)":void 0,color:m?w:v&&!f?"var(--c3)":void 0,boxShadow:m?`0 0 12px ${w}88, inset 0 0 8px ${w}22`:v?"0 0 0 3px var(--c3), 0 0 14px rgba(255,204,0,0.5)":void 0,animation:m?"winPulse 2s ease-in-out infinite":v?"winPulse 0.9s ease infinite":void 0,fontWeight:m||v?900:void 0,transition:"all 0.3s ease"},onClick:()=>!r&&!f&&n&&n(c),children:c},c)})})})}function xA({show:t,isWin:e,tie:n,title:r,sub:i,onPlayAgain:s,onHome:o,showPlayAgain:a=!0}){const l=n?"🤝":e?"🎉":"💀",c=n?"var(--c3)":e?"var(--c1)":"var(--c2)";return p.jsx("div",{className:`win-overlay ${t?"show":""}`,children:p.jsxs("div",{className:"win-card",children:[p.jsx("div",{className:"win-emoji",children:l}),p.jsx("div",{className:"win-title",style:{color:c},children:r}),p.jsx("div",{className:"win-sub",children:i}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[a&&p.jsx("button",{className:"btn btn-primary btn-full",onClick:s,children:"↺ Play Again"}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:o,children:"🏠 Home"})]})]})})}async function RA(t,e){const n=Qt(it,"users",t);try{await mn(n,{total:Zi(1),wins:Zi(e?1:0),losses:Zi(e?0:1),streak:e?Zi(1):0});const r=await Au(n);if(r.exists()){const i=r.data(),s=i.total||1,o=i.wins||0;await mn(n,{winRate:Math.round(o/s*100)})}}catch(r){console.error("recordResult error:",r)}}async function JB(){try{const t=Go(Ai(it,"users"),Sx("wins","desc"),$h(50));return(await Xl(t)).docs.map((n,r)=>({rank:r+1,uid:n.id,...n.data()}))}catch(t){return console.error("getLeaderboard error:",t),[]}}async function AA({p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a,mode:l,botLevel:c}){try{await dy(Ai(it,"matches"),{p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a||0,mode:l||"multiplayer",botLevel:c||null,timestamp:Pu(),tsNum:Date.now()})}catch(h){console.error("saveMatch error:",h)}}async function ZB(t){try{const[e,n]=await Promise.all([Xl(Go(Ai(it,"matches"),Qo("p1Uid","==",t),$h(15))),Xl(Go(Ai(it,"matches"),Qo("p2Uid","==",t),$h(15)))]),r=new Set,i=[];return[...e.docs,...n.docs].forEach(s=>{r.has(s.id)||(r.add(s.id),i.push({id:s.id,...s.data()}))}),i.sort((s,o)=>{var c,h;const a=s.tsNum||((c=s.timestamp)==null?void 0:c.seconds)*1e3||0;return(o.tsNum||((h=o.timestamp)==null?void 0:h.seconds)*1e3||0)-a}).slice(0,20)}catch(e){return console.error("getMyHistory error:",e),[]}}const Ac=[{id:"easy",label:"Easy",icon:"🟢",color:"var(--c1)"},{id:"medium",label:"Medium",icon:"🟡",color:"var(--c3)"},{id:"hard",label:"Hard",icon:"🔴",color:"var(--c2)"},{id:"expert",label:"Expert",icon:"🟣",color:"var(--c4)"},{id:"nightmare",label:"Nightmare",icon:"🖤",color:"#ff4444"},{id:"godmode",label:"GodMode",icon:"👑",color:"var(--c3)"}],Pc={easy:"Noob-Bot",medium:"Mid-Bot",hard:"Hard-Bot",expert:"Expert-Bot",nightmare:"Nightmare",godmode:"GodMode"},Nc=5,bc=25;function e5(){var z,X,Q;const{user:t,profile:e}=bn(),n=Nn(),r=Dr(),[i,s]=b.useState("select"),[o,a]=b.useState("medium"),[l,c]=b.useState([]),[h,f]=b.useState([]),[m,v]=b.useState([]),[w,A]=b.useState(!0),[P,T]=b.useState(0),[E,I]=b.useState(0),[D,F]=b.useState(null),[V,S]=b.useState(bc),[y,C]=b.useState(!1),k=b.useRef(null),N=b.useRef(null),R=b.useRef([]);b.useEffect(()=>{R.current=m},[m]);const x=()=>{var ae;const G=ta(),q=ta();c(G),f(q),v([]),R.current=[],A(!0),T(0),I(0),F(null),s("game"),N.current=Date.now(),(ae=r.click)==null||ae.call(r)};b.useEffect(()=>{if(!(i!=="game"||!w||D))return S(bc),k.current=setInterval(()=>{S(G=>{if(G<=1){clearInterval(k.current);const q=l.filter(ae=>!R.current.includes(ae));if(q.length>0){const ae=q[Math.floor(Math.random()*q.length)];Te(ae)}return bc}return G-1})},1e3),()=>clearInterval(k.current)},[w,i,D]);const Te=G=>{var Oe,Ee;if(!w||D||R.current.includes(G))return;clearInterval(k.current),(Oe=r.cross)==null||Oe.call(r);const q=[...R.current,G];v(q);const ae=Rt(l,q);if(ae>P&&((Ee=r.line)==null||Ee.call(r)),T(ae),ae>=Nc){ie(!0,q);return}A(!1),M(q)},M=G=>{const q={easy:500,medium:800,hard:1e3,expert:1200,nightmare:1400,godmode:1600}[o]||800;C(!0),setTimeout(()=>{var Be,ze;C(!1);const ae=yB(o,G,l,h);if(ae==null){A(!0);return}(Be=r.cross)==null||Be.call(r);const Oe=[...G,ae];v(Oe);const Ee=Rt(h,Oe);if(Ee>E&&((ze=r.line)==null||ze.call(r)),I(Ee),Ee>=Nc){ie(!1,Oe);return}A(!0)},q)},ie=async(G,q)=>{var Oe,Ee;const ae=Math.round((Date.now()-N.current)/1e3);if(F({won:G,tie:!1,title:G?"🎉 YOU WIN!":"🤖 BOT WINS!",sub:G?["Domination! 👑","You crushed it! 🔥","GG! Lethal ⚡"][Math.floor(Math.random()*3)]:["Bot outsmarted you 🤖","GG, rematch? 💪","Bot.exe wins 😤"][Math.floor(Math.random()*3)]}),G?(Oe=r.win)==null||Oe.call(r):(Ee=r.lose)==null||Ee.call(r),s("over"),t)try{await RA(t.uid,G),await AA({p1Uid:t.uid,p2Uid:"bot",p1Name:(e==null?void 0:e.displayName)||"Player",p2Name:Pc[o],winner:G?t.uid:"bot",p1Lines:Rt(l,q),p2Lines:Rt(h,q),duration:ae,mode:"bot",botLevel:o})}catch(Be){console.error("endGame save error:",Be)}};if(i==="select")return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🤖 VS BOT"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{className:"label",style:{marginBottom:14},children:"Choose Difficulty"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:20},children:Ac.map(G=>p.jsxs("button",{className:`diff-btn ${o===G.id?"active":""}`,style:{borderColor:o===G.id?G.color:void 0,color:o===G.id?G.color:void 0},onClick:()=>{var q;a(G.id),(q=r.click)==null||q.call(r)},children:[p.jsx("span",{style:{fontSize:20},children:G.icon}),G.label]},G.id))}),p.jsxs("div",{style:{background:"var(--panel2)",borderRadius:"var(--r)",padding:12,marginBottom:20,textAlign:"center"},children:[p.jsx("span",{style:{fontSize:28},children:(z=Ac.find(G=>G.id===o))==null?void 0:z.icon}),p.jsx("div",{style:{fontWeight:700,marginTop:6},children:Pc[o]}),p.jsx("div",{className:"muted small",style:{marginTop:4},children:{easy:"Random moves — great for beginners",medium:"Basic strategy — fair challenge",hard:"Aggressive play — tough",expert:"Win-first AI — very tough",nightmare:"Near-unbeatable AI",godmode:"Maximum difficulty — can you win?"}[o]})]}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:x,children:"⚡ Start Game"})]})})]});const ke=V/bc*100;return p.jsxs("div",{className:"screen",style:{paddingTop:10,paddingBottom:20},children:[p.jsxs("div",{style:{width:"100%",maxWidth:440,marginBottom:10,display:"flex",alignItems:"center",gap:10},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:11},onClick:()=>n("/"),children:"🏠"}),p.jsx("div",{style:{flex:1,textAlign:"center"},children:p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:14,letterSpacing:2,color:"var(--c1)"},children:[(X=Ac.find(G=>G.id===o))==null?void 0:X.icon," ",Pc[o].toUpperCase()]})}),p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18},children:[p.jsx("span",{style:{color:"var(--c1)"},children:P}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 6px"},children:"·"}),p.jsx("span",{style:{color:"var(--c2)"},children:E})]})]}),p.jsxs("div",{className:"player-row",style:{maxWidth:440,marginBottom:8},children:[p.jsx("span",{style:{fontSize:28},children:(e==null?void 0:e.avatar)||"🎯"}),p.jsxs("div",{children:[p.jsx("div",{className:"player-name",children:(e==null?void 0:e.displayName)||"You"}),p.jsxs("div",{className:"player-lines",children:[P," / ",Nc," lines"]})]}),w&&!y&&!D&&p.jsx("span",{className:"turn-badge",style:{marginLeft:"auto"},children:"YOUR TURN"})]}),w&&!y&&!D&&p.jsx("div",{className:"timer-bar-wrap",style:{maxWidth:440,marginBottom:8},children:p.jsx("div",{className:"timer-bar",style:{width:`${ke}%`,background:V<=5?"var(--c2)":"var(--c1)"}})}),y&&p.jsx("div",{style:{textAlign:"center",fontSize:12,color:"var(--ink2)",marginBottom:8,letterSpacing:2,textTransform:"uppercase"},children:"🤖 Bot is thinking…"}),p.jsx(yg,{board:l,selected:m,onCellClick:Te,disabled:!w||y||!!D}),p.jsxs("div",{className:"player-row",style:{maxWidth:440,marginTop:14},children:[p.jsx("span",{style:{fontSize:28},children:(Q=Ac.find(G=>G.id===o))==null?void 0:Q.icon}),p.jsxs("div",{children:[p.jsx("div",{className:"player-name",children:Pc[o]}),p.jsxs("div",{className:"player-lines",children:[E," / ",Nc," lines"]})]}),!w&&y&&p.jsx("span",{className:"turn-badge",style:{marginLeft:"auto",background:"var(--c2)"},children:"BOT TURN"})]}),p.jsx("div",{style:{marginTop:8,opacity:.55},children:p.jsx(yg,{board:h,selected:m,disabled:!0})}),p.jsx(xA,{show:!!D,isWin:D==null?void 0:D.won,tie:!1,title:D==null?void 0:D.title,sub:D==null?void 0:D.sub,onPlayAgain:x,onHome:()=>n("/")})]})}function RT(){return Array(25).fill(0)}function t5({onConfirm:t}){const[e,n]=b.useState(RT()),r=e.filter(l=>l!==0).length+1,i=l=>{if(e[l]!==0||r>25)return;const c=[...e];c[l]=r,n(c)},s=()=>n(ta()),o=()=>n(RT()),a=e.every(l=>l!==0);return p.jsxs("div",{style:{width:"100%",maxWidth:440,display:"flex",flexDirection:"column",alignItems:"center",gap:14},children:[p.jsx("div",{className:"card",style:{width:"100%"},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18,letterSpacing:2,marginBottom:6},children:"🎲 SET UP YOUR BOARD"}),p.jsx("div",{style:{fontSize:12,color:"var(--ink2)",lineHeight:1.6,marginBottom:14},children:"Click each cell to fill numbers 1–25 in your chosen order, or hit Shuffle for a random arrangement."}),!a&&p.jsxs("div",{style:{textAlign:"center",fontSize:13,marginBottom:10},children:[p.jsx("span",{style:{color:"var(--c1)",fontWeight:800,fontSize:18},children:r}),p.jsx("span",{style:{color:"var(--ink2)"},children:" — click a cell to place this number"})]}),a&&p.jsx("div",{style:{textAlign:"center",fontSize:13,color:"var(--c1)",fontWeight:800,marginBottom:10},children:"✅ Board complete! Ready to play."}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:5,marginBottom:14},children:e.map((l,c)=>p.jsx("button",{onClick:()=>i(c),disabled:l!==0,style:{aspectRatio:"1",border:"2px solid",borderColor:l!==0?"var(--c1)":"var(--edge2)",background:l!==0?"rgba(0,255,204,0.1)":"var(--panel)",borderRadius:8,cursor:l!==0?"default":"pointer",fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(12px,3.5vw,18px)",color:l!==0?"var(--c1)":"var(--ink3)",fontWeight:700,transition:"all 0.15s",WebkitTapHighlightColor:"transparent"},children:l!==0?l:""},c))}),p.jsxs("div",{style:{display:"flex",gap:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{flex:1},onClick:o,children:"🗑 Clear"}),p.jsx("button",{className:"btn btn-ghost",style:{flex:1},onClick:s,children:"🔀 Shuffle"})]})]})}),p.jsx("button",{className:"btn btn-primary btn-full",disabled:!a,onClick:()=>t(e),style:{fontSize:15,padding:"14px 0",opacity:a?1:.4},children:a?"✅ Confirm Board & Continue →":`Fill ${25-e.filter(l=>l!==0).length} more cells…`})]})}function n5(){const{mode:t}=tC(),{user:e,profile:n}=bn(),r=Nn(),i=Dr(),[s,o]=b.useState("setup"),[a,l]=b.useState([]),[c,h]=b.useState(""),[f,m]=b.useState(""),[v,w]=b.useState("idle"),[A,P]=b.useState(""),T=b.useRef(null),E={uid:e==null?void 0:e.uid,name:(n==null?void 0:n.displayName)||"Player",avatar:(n==null?void 0:n.avatar)||"🎯"},I=async V=>{var S;if(l(V),(S=i.click)==null||S.call(i),o("action"),t==="create"){w("waiting");const y=nv();h(y),await rv(y,E,V);const C=iv(y,k=>{var N,R;(N=k==null?void 0:k.players)!=null&&N.p2&&((R=k==null?void 0:k.gameState)==null?void 0:R.status)==="playing"&&(C(),r(`/game/${y}`,{state:{role:"p1",board:V}})),k||(w("error"),P("Room expired."))});T.current=C}},D=async()=>{var S;const V=f.trim().toUpperCase();if(V.length!==4){P("Enter a 4-character room code.");return}w("joining"),P("");try{await SA(V,E,a),(S=i.click)==null||S.call(i),r(`/game/${V}`,{state:{role:"p2",board:a}})}catch(y){w("idle"),P(y.message||"Could not join room. Check the code.")}},F=async()=>{T.current&&T.current(),c&&await _g(c),r("/")};return s==="setup"?p.jsxs("div",{className:"screen",style:{justifyContent:"flex-start",paddingBottom:60},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:t==="create"?"⚡ CREATE ROOM":"🔗 JOIN ROOM"})]}),p.jsx(t5,{onConfirm:I})]}):t==="create"?p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:F,children:"← Cancel"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"⚡ CREATE ROOM"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",style:{textAlign:"center"},children:[p.jsx("div",{className:"label",style:{marginBottom:8},children:"ROOM CODE"}),p.jsx("div",{className:"room-code-display",children:c}),p.jsx("div",{className:"room-status",children:"Share this code with your friend"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,justifyContent:"center",marginBottom:20},children:[p.jsx("div",{className:"spinner"}),p.jsx("span",{className:"muted small",children:"Waiting for opponent…"})]}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:()=>{var V;return(V=navigator.clipboard)==null?void 0:V.writeText(c)},style:{marginBottom:10},children:"📋 Copy Code"}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:F,children:"Cancel"})]})})]}):p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🔗 JOIN ROOM"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{fontSize:48,textAlign:"center",marginBottom:16},children:"🔗"}),p.jsx("div",{className:"label",children:"Room Code"}),p.jsx("input",{type:"text",placeholder:"ABCD",value:f,onChange:V=>m(V.target.value.toUpperCase().slice(0,4)),onKeyDown:V=>V.key==="Enter"&&D(),style:{textAlign:"center",fontSize:28,letterSpacing:10,fontFamily:"'Black Han Sans',sans-serif",marginBottom:16}}),A&&p.jsx("div",{style:{color:"var(--c2)",fontSize:13,marginBottom:14,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px"},children:A}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:D,disabled:v==="joining"||f.length!==4,children:v==="joining"?"⏳ Joining…":"🎮 Join Game"})]})})]})}const wn=5,th=30,vg=5,r5=["👍","🔥","😂","😱","🎯","💀","🏆","😤","🤯","👏","😈","🫡","❤️","😎","🤑","💪"],AT=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#ffffff"],PT=[{id:"time",icon:"⏰",tip:"+20s"},{id:"hint",icon:"💡",tip:"Hint"},{id:"double",icon:"2️⃣",tip:"Pick 2"},{id:"fifty",icon:"🎯",tip:"50/50"},{id:"shield",icon:"🛡️",tip:"Shield"}];function NT({timeLeft:t,maxTime:e=th,size:n=52,active:r}){const i=(n-6)/2,s=2*Math.PI*i,o=r?Math.max(0,t/e):1,a=t<=5?"#ff2d55":t<=10?"#ffcc00":"#00ffcc";return p.jsxs("svg",{width:n,height:n,style:{position:"absolute",top:0,left:0,pointerEvents:"none"},children:[p.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:"rgba(255,255,255,0.07)",strokeWidth:4}),r&&p.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:a,strokeWidth:4,strokeDasharray:s,strokeDashoffset:s*(1-o),strokeLinecap:"round",transform:`rotate(-90 ${n/2} ${n/2})`,style:{transition:"stroke-dashoffset 1s linear, stroke 0.4s"}})]})}function bT({count:t,max:e=vg}){return p.jsx("div",{style:{display:"flex",gap:2},children:Array.from({length:e}).map((n,r)=>p.jsx("span",{style:{fontSize:10,opacity:r<t?1:.18},children:"❤️"},r))})}function i5(){var mt,Wi;const{roomId:t}=tC(),{state:e}=Cd(),{user:n,profile:r}=bn(),i=Nn(),s=Dr(),o=(e==null?void 0:e.role)||"p1",a=o==="p1"?"p2":"p1",[l,c]=b.useState(null),[h,f]=b.useState(th),[m,v]=b.useState(null),[w,A]=b.useState(!1),[P,T]=b.useState(!1),[E,I]=b.useState(0),[D,F]=b.useState(""),[V,S]=b.useState(""),[y,C]=b.useState({time:!0,hint:!0,double:!0,fifty:!0,shield:!0}),[k,N]=b.useState(!1),[R,x]=b.useState(!1),[Te,M]=b.useState([]),[ie,ke]=b.useState({p1:!1,p2:!1,newRoomId:null}),[z,X]=b.useState(!1),Q=b.useRef(!1),G=b.useRef(Date.now()),q=b.useRef(null),ae=b.useRef(null),Oe=b.useRef(0),Ee=b.useRef({}),Be=b.useRef(0),ze=b.useRef((e==null?void 0:e.board)||[]),le=l==null?void 0:l.gameState,un=(le==null?void 0:le.calledNumbers)||[],pt=(le==null?void 0:le[`${o}Board`])||ze.current,dr=(le==null?void 0:le[`${a}Board`])||[],vn=(le==null?void 0:le[`${o}Lines`])||0,Ws=(le==null?void 0:le[`${a}Lines`])||0,$s=(le==null?void 0:le[`${o}Chances`])??vg,ga=(le==null?void 0:le[`${a}Chances`])??vg,Ct=(le==null?void 0:le.turn)===o,Kr=(mt=l==null?void 0:l.players)==null?void 0:mt[a],Gr=(Wi=l==null?void 0:l.players)==null?void 0:Wi[o];b.useEffect(()=>{const Z=iv(t,te=>{var Xe,Ne,Je,Ot;if(c(te),!(te!=null&&te.gameState))return;const Re=te.gameState;if(te.rematch&&(ke(te.rematch),te.rematch.newRoomId&&Q.current)){const He=ze.current.length===25?ze.current:Array.from({length:25},(We,fr)=>fr+1);Z(),i(`/game/${te.rematch.newRoomId}`,{state:{role:o,board:He},replace:!0});return}if(te.chat){const He=Object.values(te.chat).sort((fr,Wu)=>(fr.ts||0)-(Wu.ts||0)),We=He[He.length-1];We&&(We.ts||0)>Be.current&&Date.now()-(We.ts||0)<8e3&&(Be.current=We.ts,We.sender===o?(F(We.text),clearTimeout(Ee.current.my),Ee.current.my=setTimeout(()=>F(""),4e3)):(S(We.text),(Xe=s.ping)==null||Xe.call(s),clearTimeout(Ee.current.opp),Ee.current.opp=setTimeout(()=>S(""),4e3)))}if((Re.winner||Re.tie)&&!Q.current){Q.current=!0,clearInterval(q.current);const He=!!Re.tie,We=Re.winner===o;v({won:He?null:We,tie:He,title:He?"🤝 IT'S A TIE!":We?"🎉 YOU WIN!":"😔 YOU LOST!",sub:He?"Both earn a point!":We?["Domination! 👑","Flawless! ⚡","Champion! 🏆"][Math.floor(Math.random()*3)]:["GG, rematch? 💪","They got lucky 😤","Next time! 🤝"][Math.floor(Math.random()*3)]}),We||He?(Ne=s.win)==null||Ne.call(s):(Je=s.lose)==null||Je.call(s),ya(He,We,Re,te)}Re[`${a}Exited`]&&!Q.current&&(Q.current=!0,clearInterval(q.current),v({won:!0,tie:!1,title:"🏆 OPPONENT LEFT",sub:"You win by default!"}),(Ot=s.win)==null||Ot.call(s))});return()=>{Z(),clearInterval(q.current),clearInterval(ae.current)}},[t]),b.useEffect(()=>{var Z;vn>Oe.current&&((Z=s.line)==null||Z.call(s),Oe.current=vn)},[vn]),b.useEffect(()=>{pt.length===25&&(ze.current=pt)},[pt]),b.useEffect(()=>{if(!(le!=null&&le.turnStartedAt)||m)return;clearInterval(q.current);const Z=Math.floor((Date.now()-le.turnStartedAt)/1e3),te=Math.max(0,th-Z);return f(te),q.current=setInterval(()=>{f(Re=>Re<=1?(clearInterval(q.current),Ct&&!m&&!Q.current&&(R?(x(!1),f(th)):Bu()),0):Re-1)},1e3),()=>clearInterval(q.current)},[le==null?void 0:le.turnStartedAt,le==null?void 0:le.turn]);const Bu=async()=>{const Z=Array.from({length:25},(We,fr)=>fr+1).filter(We=>!un.includes(We));if(Z.length===0)return;const te=Z[Math.floor(Math.random()*Z.length)],Re=[...un,te],Xe=o==="p1"?pt:dr,Ne=o==="p2"?pt:dr,Je=Rt(Xe,Re),Ot=Rt(Ne,Re),He=$s-1;if(He<=0){await qa(t,a);return}if(Je>=wn&&Ot>=wn){await ST(t);return}if(Je>=wn){await qa(t,"p1");return}if(Ot>=wn){await qa(t,"p2");return}await fB(t,o,Re,Je,Ot,He)},_a=async Z=>{var Ot;if(m||Q.current||!Ct&&!k||un.includes(Z)||pt.length===0)return;clearInterval(q.current),M([]),(Ot=s.cross)==null||Ot.call(s);const te=[...un,Z],Re=o==="p1"?pt:dr,Xe=o==="p2"?pt:dr,Ne=Rt(Re.length?Re:pt,te),Je=Rt(Xe.length?Xe:[],te);if(k){N(!1),await Ha(t,o,te,Ne,Je,!0);return}if(!Q.current){if(Ne>=wn&&Je>=wn){await Ha(t,o,te,Ne,Je,!1),await ST(t);return}if(Ne>=wn){await Ha(t,o,te,Ne,Je,!1),await qa(t,"p1");return}if(Je>=wn){await Ha(t,o,te,Ne,Je,!1),await qa(t,"p2");return}}await Ha(t,o,te,Ne,Je,!1)},zu=Z=>{var te;if(!(!y[Z]||!Ct||m)&&((te=s.click)==null||te.call(s),C(Re=>({...Re,[Z]:!1})),Z==="time"&&f(Re=>Re+20),Z==="shield"&&x(!0),Z==="double"&&N(!0),Z==="hint"||Z==="fifty")){const Xe=pt.filter(Ne=>!un.includes(Ne)).map(Ne=>({n:Ne,lines:Rt(pt,[...un,Ne])})).sort((Ne,Je)=>Je.lines-Ne.lines);M(Xe.slice(0,Z==="fifty"?2:1).map(Ne=>Ne.n)),setTimeout(()=>M([]),7e3)}},Tf=async Z=>{if(P)return;await pB(t,{text:Z,isEmoji:!0,sender:o,senderName:(r==null?void 0:r.displayName)||"Me"}),A(!1),T(!0);let te=3;I(te),ae.current=setInterval(()=>{te--,I(te),te<=0&&(clearInterval(ae.current),T(!1),I(0))},1e3)},ya=async(Z,te,Re,Xe)=>{var Je,Ot;if(!n)return;const Ne=Math.round((Date.now()-G.current)/1e3);try{await RA(n.uid,Z?!1:te);const He=(Je=Xe==null?void 0:Xe.players)==null?void 0:Je.p1,We=(Ot=Xe==null?void 0:Xe.players)==null?void 0:Ot.p2;He&&We&&o==="p1"&&await AA({p1Uid:He.uid,p2Uid:We.uid,p1Name:He.name,p2Name:We.name,winner:Z?null:Re.winner==="p1"?He.uid:We.uid,p1Lines:Re.p1Lines,p2Lines:Re.p2Lines,duration:Ne,mode:"multiplayer"})}catch(He){console.error("matchEnd error:",He)}},va=async()=>{if(z)return;X(!0);const Z={uid:n==null?void 0:n.uid,name:(r==null?void 0:r.displayName)||"Player",avatar:(r==null?void 0:r.avatar)||"🎯",role:o};try{const te=await gB(t,o,ze.current,Z);te&&i(`/game/${te}`,{state:{role:"p1",board:ze.current},replace:!0})}catch(te){console.error("Rematch error:",te),X(!1)}},Hs=async()=>{clearInterval(q.current),await mB(t,o),i("/")};if(!l)return p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:14},children:[p.jsx("div",{className:"spinner"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)"},children:"Connecting to room…"})]});if((le==null?void 0:le.status)==="waiting")return p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:14},children:[p.jsx("div",{className:"spinner"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)"},children:"Waiting for opponent…"}),p.jsx("button",{className:"btn btn-ghost",onClick:Hs,children:"Cancel"})]});const xe=48;return p.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[p.jsx("div",{style:{background:"var(--panel)",borderBottom:"2px solid var(--edge2)",padding:"6px 8px",flexShrink:0},children:p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:4},children:[p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[p.jsxs("div",{style:{position:"relative",width:xe,height:xe,flexShrink:0},children:[p.jsx("div",{style:{width:xe,height:xe,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${Ct?"var(--c1)":"var(--edge)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,transition:"border-color 0.3s"},children:(Gr==null?void 0:Gr.avatar)||(r==null?void 0:r.avatar)||"🎯"}),p.jsx(NT,{timeLeft:h,size:xe,active:Ct&&!m}),R&&p.jsx("div",{style:{position:"absolute",bottom:-2,right:-2,fontSize:10},children:"🛡️"})]}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:800,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:70},children:(Gr==null?void 0:Gr.name)||(r==null?void 0:r.displayName)||"You"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[vn,"/",wn]}),Ct&&!m&&p.jsx("div",{style:{fontSize:8,fontWeight:800,color:"var(--c1)",letterSpacing:1},children:k?"2️⃣ Pick 2nd":`${h}s`})]})]}),D&&p.jsx("div",{style:{marginTop:3,fontSize:14,background:"rgba(0,255,204,0.1)",border:"1px solid rgba(0,255,204,0.3)",borderRadius:8,padding:"2px 6px",display:"inline-block"},children:D}),p.jsx("div",{style:{display:"flex",gap:2,marginTop:3,flexWrap:"wrap"},children:PT.map(Z=>p.jsx("button",{onClick:()=>zu(Z.id),disabled:!y[Z.id]||!Ct||!!m,title:Z.tip,style:{fontSize:12,padding:"2px 3px",background:y[Z.id]?"var(--panel2)":"transparent",border:`2px solid ${y[Z.id]?"var(--edge2)":"transparent"}`,borderRadius:4,cursor:y[Z.id]&&Ct?"pointer":"default",opacity:y[Z.id]?Ct?1:.35:.1,WebkitTapHighlightColor:"transparent"},children:Z.icon},Z.id))}),p.jsx("div",{style:{marginTop:2},children:p.jsx(bT,{count:$s})})]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,minWidth:44,paddingTop:2},children:[p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,lineHeight:1},children:[p.jsx("span",{style:{color:"var(--c1)"},children:vn}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 1px"},children:":"}),p.jsx("span",{style:{color:"var(--c2)"},children:Ws})]}),p.jsxs("div",{style:{fontSize:7,letterSpacing:1.5,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700},children:["#",t]})]}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,flexDirection:"row-reverse"},children:[p.jsxs("div",{style:{position:"relative",width:xe,height:xe,flexShrink:0},children:[p.jsx("div",{style:{width:xe,height:xe,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${Ct?"var(--edge)":"var(--c2)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,transition:"border-color 0.3s"},children:(Kr==null?void 0:Kr.avatar)||"🎯"}),p.jsx(NT,{timeLeft:h,size:xe,active:!Ct&&!m})]}),p.jsxs("div",{style:{flex:1,minWidth:0,textAlign:"right"},children:[p.jsx("div",{style:{fontWeight:800,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:70,marginLeft:"auto"},children:(Kr==null?void 0:Kr.name)||"Opponent"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[Ws,"/",wn]}),!Ct&&!m&&p.jsxs("div",{style:{fontSize:8,fontWeight:800,color:"var(--c2)",letterSpacing:1},children:[h,"s"]})]})]}),V&&p.jsx("div",{style:{marginTop:3,fontSize:14,background:"rgba(255,45,85,0.1)",border:"1px solid rgba(255,45,85,0.3)",borderRadius:8,padding:"2px 6px",display:"flex",justifyContent:"flex-end"},children:V}),p.jsx("div",{style:{display:"flex",gap:2,marginTop:3,justifyContent:"flex-end"},children:PT.map(Z=>p.jsx("div",{style:{fontSize:12,padding:"2px 3px",background:"var(--panel2)",border:"2px solid var(--edge)",borderRadius:4,opacity:.2},children:Z.icon},Z.id))}),p.jsx("div",{style:{marginTop:2,display:"flex",justifyContent:"flex-end"},children:p.jsx(bT,{count:ga})})]})]})}),p.jsxs("div",{style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"4px 8px"},children:[p.jsxs("div",{style:{marginBottom:5,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:11,color:"var(--ink2)"},children:m?"🏁 Game Over":Ct?"👆 Your turn — tap to call a number":"⏳ Opponent choosing…"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink3)",marginTop:1},children:[un.length,"/25 called"]}),Te.length>0&&p.jsxs("div",{style:{fontSize:11,color:"var(--c3)",marginTop:2,fontWeight:700},children:["💡 Try: ",Te.join(" or ")]}),k&&p.jsx("div",{style:{fontSize:11,color:"var(--c3)",fontWeight:800,marginTop:2,animation:"blink 0.8s infinite"},children:"2️⃣ PICK YOUR 2ND!"})]}),p.jsx(yg,{board:pt,selected:un,onCellClick:_a,disabled:!Ct&&!k||!!m||pt.length===0,highlightCells:Te}),p.jsxs("div",{style:{marginTop:8,display:"flex",gap:4,alignItems:"center"},children:[Array.from({length:wn}).map((Z,te)=>p.jsx("div",{style:{width:28,height:6,borderRadius:3,background:te<vn?AT[Math.min(te,4)]:"var(--edge)",boxShadow:te<vn?`0 0 6px ${AT[te]}88`:"none",transition:"all 0.4s"}},te)),p.jsxs("span",{style:{fontSize:10,color:"var(--ink2)",marginLeft:3},children:[vn,"/",wn]})]})]}),p.jsxs("div",{style:{background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"5px 8px",flexShrink:0},children:[w&&p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:3,justifyContent:"center",paddingBottom:5},children:r5.map(Z=>p.jsx("button",{onClick:()=>Tf(Z),disabled:P,style:{fontSize:19,background:"none",border:"none",cursor:"pointer",padding:"2px 3px",borderRadius:4,opacity:P?.3:1,WebkitTapHighlightColor:"transparent"},children:Z},Z))}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[p.jsx("button",{onClick:()=>!P&&A(Z=>!Z),disabled:P,style:{background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"6px 10px",fontSize:11,fontWeight:700,color:P?"var(--ink3)":"var(--ink)",cursor:P?"not-allowed":"pointer",WebkitTapHighlightColor:"transparent"},children:P?`⏱${E}s`:w?"✕":"😊"}),p.jsx("div",{style:{flex:1}}),p.jsx("button",{onClick:Hs,style:{background:"transparent",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"6px 12px",fontSize:11,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Leave Room"})]})]}),p.jsx(xA,{show:!!m,isWin:m==null?void 0:m.won,tie:m==null?void 0:m.tie,title:m==null?void 0:m.title,sub:z?"⏳ Waiting for opponent to accept rematch…":m==null?void 0:m.sub,onPlayAgain:va,onHome:Hs,showPlayAgain:!z||!ie.newRoomId})]})}function s5(){const{user:t}=bn(),e=Nn(),[n,r]=b.useState([]),[i,s]=b.useState(!0);b.useEffect(()=>{JB().then(l=>{r(l),s(!1)})},[]);const o=l=>l===1?{color:"var(--c3)",fontSize:22}:l===2?{color:"#aaa",fontSize:20}:l===3?{color:"#cd7f32",fontSize:18}:{color:"var(--ink3)",fontSize:16},a=l=>l===1?"🥇":l===2?"🥈":l===3?"🥉":`#${l}`;return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>e("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🏆 LEADERBOARD"})]}),i?p.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:p.jsx("div",{className:"spinner"})}):p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{style:{padding:"4px 0"},children:[n.length===0&&p.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:"No players yet. Be the first!"}),n.map(l=>p.jsxs("div",{className:"lb-row",style:{background:l.uid===(t==null?void 0:t.uid)?"rgba(0,255,204,0.05)":"transparent"},children:[p.jsx("div",{style:{...o(l.rank),fontFamily:"'Black Han Sans',sans-serif",width:36,textAlign:"center"},children:a(l.rank)}),p.jsx("div",{style:{fontSize:24},children:l.avatar||"🎯"}),p.jsxs("div",{style:{flex:1},children:[p.jsxs("div",{style:{fontWeight:700,fontSize:14},children:[l.displayName,l.uid===(t==null?void 0:t.uid)&&p.jsx("span",{style:{fontSize:10,color:"var(--c1)",marginLeft:6},children:"YOU"})]}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[l.total||0," games · ",l.winRate||0,"% WR"]})]}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:"var(--c1)"},children:l.wins||0}),p.jsx("div",{style:{fontSize:10,color:"var(--ink3)",letterSpacing:1,textTransform:"uppercase"},children:"wins"})]})]},l.uid))]})})]})}async function PA(t,e,n){const r=Go(Ai(it,"friendRequests"),Qo("from","==",t),Qo("to","==",e));return(await Xl(r)).empty?(await dy(Ai(it,"friendRequests"),{from:t,to:e,fromName:n,status:"pending",timestamp:Pu()}),{success:!0}):{error:"Request already sent"}}async function o5(t,e,n){await mn(Qt(it,"friendRequests",t),{status:"accepted"}),await mn(Qt(it,"users",e),{friends:eg(n)}),await mn(Qt(it,"users",n),{friends:eg(e)})}async function a5(t){await mn(Qt(it,"friendRequests",t),{status:"declined"})}async function l5(t,e){await mn(Qt(it,"users",t),{friends:tg(e)}),await mn(Qt(it,"users",e),{friends:tg(t)})}function u5(t,e){const n=Go(Ai(it,"friendRequests"),Qo("to","==",t));return Ax(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i.filter(s=>s.status==="pending"))},r=>{console.error("Friend requests error:",r),e([])})}async function c5(t){if(!t||t.length===0)return[];const e=[];for(const n of t)try{const r=await Au(Qt(it,"users",n));r.exists()&&e.push({uid:n,...r.data()})}catch{}return e}function h5(){var Te;const{user:t,profile:e,refreshProfile:n}=bn(),r=Nn(),i=Dr(),[s,o]=b.useState("friends"),[a,l]=b.useState([]),[c,h]=b.useState([]),[f,m]=b.useState(""),[v,w]=b.useState([]),[A,P]=b.useState(!1),[T,E]=b.useState(!0),[I,D]=b.useState({}),F=b.useRef({}),V=b.useRef(null);b.useEffect(()=>{if(!(e!=null&&e.friends)){E(!1);return}c5(e.friends).then(M=>{l(M),E(!1)}).catch(()=>E(!1))},[(Te=e==null?void 0:e.friends)==null?void 0:Te.length]),b.useEffect(()=>{if(!t)return;const M=u5(t.uid,ie=>h(ie));return V.current=M,()=>M==null?void 0:M()},[t==null?void 0:t.uid]),b.useEffect(()=>()=>{Object.values(F.current).forEach(M=>M==null?void 0:M())},[]);const S=async M=>{var ke,z,X;const ie=I[M.uid];if((ie==null?void 0:ie.status)==="waiting"){(z=(ke=F.current)[ie.roomId])==null||z.call(ke),delete F.current[ie.roomId],await EB(M.uid,ie.inviteId).catch(()=>{}),await _g(ie.roomId).catch(()=>{}),D(Q=>({...Q,[M.uid]:{status:"idle"}}));return}D(Q=>({...Q,[M.uid]:{status:"sending"}})),(X=i.click)==null||X.call(i);try{const Q=ta(),G={uid:t.uid,name:(e==null?void 0:e.displayName)||"Player",avatar:(e==null?void 0:e.avatar)||"🎯",role:"p1"},{roomId:q,inviteId:ae}=await wB(M.uid,G,Q);D(Ee=>({...Ee,[M.uid]:{status:"waiting",roomId:q,inviteId:ae}})),Jn("⚔️ Invite sent!",`Waiting for ${M.displayName}…`,"success");const Oe=iv(q,Ee=>{var Be;(Be=Ee==null?void 0:Ee.players)!=null&&Be.p2&&(Oe(),delete F.current[q],D(ze=>({...ze,[M.uid]:{status:"idle"}})),r(`/game/${q}`,{state:{role:"p1",board:Q}}))});F.current[q]=Oe,setTimeout(async()=>{const Ee=I[M.uid];D(Be=>{var ze,le,un;return((ze=Be[M.uid])==null?void 0:ze.roomId)!==q?Be:((un=(le=F.current)[q])==null||un.call(le),delete F.current[q],_g(q).catch(()=>{}),Jn("⏰ Invite expired",`${M.displayName} didn't respond`,"info"),{...Be,[M.uid]:{status:"idle"}})})},47e3)}catch(Q){console.error("Challenge error:",Q),D(G=>({...G,[M.uid]:{status:"idle"}})),Jn("Error","Could not send invite. Try again.","error")}},y=async()=>{if(f.trim()){P(!0),w([]);try{const M=await sB(f.trim());w(M.filter(ie=>ie.uid!==t.uid))}catch{Jn("Search failed","Try again","error")}P(!1)}},C=async M=>{const ie=await PA(t.uid,M.uid,(e==null?void 0:e.displayName)||"Player");ie.error?Jn("⚠️ "+ie.error,"","info"):Jn("✅ Request Sent!",`Sent to ${M.displayName}`,"success")},k=async M=>{await o5(M.id,t.uid,M.from),await n(t.uid),Jn("👥 Friends!",`You and ${M.fromName} are now friends`,"success")},N=async M=>a5(M.id),R=async M=>{await l5(t.uid,M),await n(t.uid),l(ie=>ie.filter(ke=>ke.uid!==M))},x=[{id:"friends",label:`Friends (${a.length})`},{id:"requests",label:`Requests${c.length>0?` (${c.length})`:""}`,badge:c.length},{id:"search",label:"🔍 Find"}];return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:14,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"👥 FRIENDS"})]}),p.jsx("div",{style:{display:"flex",gap:6,width:"100%",maxWidth:440,marginBottom:14},children:x.map(M=>p.jsxs("button",{onClick:()=>o(M.id),style:{flex:1,padding:"9px 6px",border:"2px solid",borderColor:s===M.id?"var(--c1)":"var(--edge2)",borderRadius:"var(--r)",background:s===M.id?"rgba(0,255,204,0.1)":"var(--panel)",color:s===M.id?"var(--c1)":"var(--ink2)",fontSize:11,fontWeight:700,cursor:"pointer",WebkitTapHighlightColor:"transparent",position:"relative"},children:[M.label,M.badge>0&&s!==M.id&&p.jsx("span",{style:{position:"absolute",top:-6,right:-4,background:"var(--c2)",color:"#fff",fontSize:10,fontWeight:700,borderRadius:"50%",width:17,height:17,display:"flex",alignItems:"center",justifyContent:"center"},children:M.badge})]},M.id))}),s==="friends"&&p.jsx("div",{className:"card",style:{maxWidth:440},children:T?p.jsx("div",{style:{display:"flex",justifyContent:"center",padding:32},children:p.jsx("div",{className:"spinner"})}):a.length===0?p.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[p.jsx("div",{style:{fontSize:40,marginBottom:10},children:"👥"}),p.jsx("div",{style:{fontWeight:700},children:"No friends yet"}),p.jsx("div",{style:{fontSize:13,marginTop:4},children:"Search to find and add players!"}),p.jsx("button",{className:"btn btn-primary",style:{marginTop:14},onClick:()=>o("search"),children:"Find Players"})]}):a.map(M=>{const ie=I[M.uid],ke=(ie==null?void 0:ie.status)==="waiting",z=(ie==null?void 0:ie.status)==="sending";return p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderBottom:"1px solid var(--edge)",flexWrap:"wrap"},children:[p.jsx("span",{style:{fontSize:26,flexShrink:0},children:M.avatar||"🎯"}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:M.displayName}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginTop:2},children:[p.jsx("div",{style:{width:7,height:7,borderRadius:"50%",flexShrink:0,background:M.isOnline?"var(--c1)":"var(--ink3)",boxShadow:M.isOnline?"0 0 5px var(--c1)":"none"}}),p.jsx("span",{style:{fontSize:10,color:"var(--ink3)"},children:M.isOnline?"Online":"Offline"}),p.jsxs("span",{style:{fontSize:10,color:"var(--ink3)"},children:["· ",M.wins||0,"W"]})]}),(ke||z)&&p.jsxs("div",{style:{marginTop:4,display:"flex",alignItems:"center",gap:5,background:"rgba(255,204,0,0.1)",border:"1px solid rgba(255,204,0,0.35)",borderRadius:6,padding:"3px 8px",display:"inline-flex"},children:[p.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c3)",animation:"blink 1s infinite"}}),p.jsx("span",{style:{fontSize:10,color:"var(--c3)",fontWeight:700},children:z?"Sending…":"Waiting for response…"})]})]}),p.jsx("button",{onClick:()=>S(M),disabled:z,title:ke?"Cancel invite":M.isOnline?"Challenge to a match":"Player is offline",style:{flexShrink:0,background:ke?"rgba(255,204,0,0.15)":M.isOnline?"rgba(0,255,204,0.1)":"transparent",border:`2px solid ${ke?"var(--c3)":M.isOnline?"var(--c1)":"var(--edge2)"}`,borderRadius:8,padding:"6px 10px",fontSize:12,fontWeight:800,color:ke?"var(--c3)":M.isOnline?"var(--c1)":"var(--ink3)",cursor:z?"not-allowed":"pointer",WebkitTapHighlightColor:"transparent",opacity:z?.5:1,letterSpacing:.5},children:z?"⏳":ke?"✕ Cancel":"⚔️ Challenge"}),p.jsx("button",{onClick:()=>R(M.uid),title:"Remove friend",style:{flexShrink:0,background:"none",border:"2px solid var(--edge2)",borderRadius:6,padding:"6px 8px",fontSize:11,color:"var(--ink3)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"Remove"})]},M.uid)})}),s==="requests"&&p.jsx("div",{className:"card",style:{maxWidth:440},children:c.length===0?p.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[p.jsx("div",{style:{fontSize:40,marginBottom:10},children:"📭"}),p.jsx("div",{style:{fontWeight:700},children:"No pending requests"}),p.jsx("div",{style:{fontSize:13,marginTop:4},children:"When someone adds you, it appears here."})]}):c.map(M=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("span",{style:{fontSize:28},children:"🎯"}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:700,fontSize:14},children:M.fromName||"Unknown"}),p.jsx("div",{style:{fontSize:12,color:"var(--ink2)",marginTop:2},children:"Wants to be friends"})]}),p.jsx("button",{onClick:()=>k(M),style:{background:"var(--c1)",color:"#000",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer",marginRight:4},children:"✓ Accept"}),p.jsx("button",{onClick:()=>N(M),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"8px 10px",fontSize:12,color:"var(--ink2)",cursor:"pointer"},children:"✕"})]},M.id))}),s==="search"&&p.jsxs("div",{style:{width:"100%",maxWidth:440},children:[p.jsxs("div",{style:{display:"flex",gap:8,marginBottom:14},children:[p.jsx("input",{type:"text",placeholder:"Search by username…",value:f,onChange:M=>m(M.target.value),onKeyDown:M=>M.key==="Enter"&&y(),style:{flex:1},enterKeyHint:"search"}),p.jsx("button",{className:"btn btn-primary",onClick:y,disabled:A,style:{padding:"0 16px"},children:A?"…":"🔍"})]}),v.length>0&&p.jsx("div",{className:"card",children:v.map(M=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("span",{style:{fontSize:26},children:M.avatar||"🎯"}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:700,fontSize:14},children:M.displayName}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[M.wins||0,"W · ",M.losses||0,"L"]})]}),p.jsx("button",{onClick:()=>C(M),style:{background:"var(--c4)",color:"#fff",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer"},children:"+ Add"})]},M.uid))}),f&&!A&&v.length===0&&p.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",padding:24,fontSize:14},children:['No players found for "',f,'"']})]})]})}function d5(t){if(!t)return"—";try{return(t!=null&&t.toDate?t.toDate():t!=null&&t.seconds?new Date(t.seconds*1e3):new Date(t)).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"—"}}function f5(t){if(!t)return"—";const e=Math.floor(t/60),n=t%60;return e>0?`${e}m ${n}s`:`${n}s`}function p5(){const{user:t,profile:e}=bn(),n=Nn(),[r,i]=b.useState([]),[s,o]=b.useState(!0),[a,l]=b.useState({});b.useEffect(()=>{t&&ZB(t.uid).then(h=>{const f=h.filter(m=>m.mode!=="bot"&&m.p2Uid!=="bot"&&m.p2Uid!=="BOT");i(f),o(!1)}).catch(()=>o(!1))},[t]);const c=async h=>{const f=h.p1Uid===t.uid,m=f?h.p2Uid:h.p1Uid,v=f?h.p2Name:h.p1Name;if(!m||m===t.uid)return;l(A=>({...A,[h.id]:"loading"}));const w=await PA(t.uid,m,(e==null?void 0:e.displayName)||"Player");w.error?(Jn("Already sent",w.error,"info"),l(A=>({...A,[h.id]:"done"}))):(Jn("✅ Request Sent!",`Friend request sent to ${v}`,"success"),l(A=>({...A,[h.id]:"done"})))};return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"📊 HISTORY"})]}),s?p.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:p.jsx("div",{className:"spinner"})}):r.length===0?p.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",paddingTop:60},children:[p.jsx("div",{style:{fontSize:52,marginBottom:14},children:"🎮"}),p.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:6},children:"No multiplayer games yet!"}),p.jsx("div",{style:{fontSize:13},children:"Play against real opponents — your match history appears here."}),p.jsx("button",{className:"btn btn-primary",style:{marginTop:20},onClick:()=>n("/"),children:"Play Now"})]}):p.jsx("div",{className:"card",style:{maxWidth:440},children:r.map(h=>{const f=h.p1Uid===t.uid,m=h.winner===t.uid,v=f?h.p1Lines:h.p2Lines,w=f?h.p2Lines:h.p1Lines,A=f?h.p2Name:h.p1Name,P=f?h.p2Uid:h.p1Uid,T=a[h.id];return p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("div",{style:{fontSize:26,width:34,textAlign:"center",flexShrink:0},children:m?"🏆":"💀"}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["vs ",A||"Unknown"]}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[d5(h.timestamp||h.tsNum)," · ",f5(h.duration)]})]}),p.jsxs("div",{style:{textAlign:"right",marginRight:6},children:[p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:16},children:[p.jsx("span",{style:{color:"var(--c1)"},children:v??"—"}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 3px"},children:"–"}),p.jsx("span",{style:{color:"var(--c2)"},children:w??"—"})]}),p.jsx("div",{style:{fontSize:10,fontWeight:800,color:m?"var(--c1)":"var(--c2)",letterSpacing:1},children:m?"WIN":"LOSS"})]}),P&&P!==t.uid&&p.jsx("button",{onClick:()=>c(h),disabled:T==="loading"||T==="done",title:`Add ${A} as friend`,style:{fontSize:16,background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"5px 8px",cursor:T?"not-allowed":"pointer",color:T==="done"?"var(--c1)":"var(--c4)",flexShrink:0,WebkitTapHighlightColor:"transparent",opacity:T==="done"?.5:1},children:T==="loading"?"⏳":T==="done"?"✅":"👥+"})]},h.id)})})]})}function NA(){return p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:p.jsx("div",{className:"spinner"})})}function Qi({children:t}){const{user:e,loading:n}=bn();return n?p.jsx(NA,{}):e?t:p.jsx(sC,{to:"/login",replace:!0})}function m5(){const{user:t,loading:e}=bn();return e?p.jsx(NA,{}):t?p.jsx(GB,{}):p.jsx(FB,{})}function g5(){return b.useEffect(()=>{VB(t=>{var e,n;Jn(((e=t.notification)==null?void 0:e.title)||"DiNGo",((n=t.notification)==null?void 0:n.body)||"","info")})},[]),p.jsxs(Ib,{children:[p.jsx(dB,{}),p.jsx(OB,{}),p.jsxs(wb,{children:[p.jsx(Ln,{path:"/",element:p.jsx(m5,{})}),p.jsx(Ln,{path:"/login",element:p.jsx(UB,{})}),p.jsx(Ln,{path:"/profile",element:p.jsx(Qi,{children:p.jsx(XB,{})})}),p.jsx(Ln,{path:"/bot",element:p.jsx(Qi,{children:p.jsx(e5,{})})}),p.jsx(Ln,{path:"/room/:mode",element:p.jsx(Qi,{children:p.jsx(n5,{})})}),p.jsx(Ln,{path:"/game/:roomId",element:p.jsx(Qi,{children:p.jsx(i5,{})})}),p.jsx(Ln,{path:"/leaderboard",element:p.jsx(Qi,{children:p.jsx(s5,{})})}),p.jsx(Ln,{path:"/friends",element:p.jsx(Qi,{children:p.jsx(h5,{})})}),p.jsx(Ln,{path:"/history",element:p.jsx(Qi,{children:p.jsx(p5,{})})}),p.jsx(Ln,{path:"*",element:p.jsx(sC,{to:"/",replace:!0})})]})]})}function _5(){return p.jsx(hB,{children:p.jsx(g5,{})})}Op.createRoot(document.getElementById("root")).render(p.jsx(WT.StrictMode,{children:p.jsx(_5,{})}));
