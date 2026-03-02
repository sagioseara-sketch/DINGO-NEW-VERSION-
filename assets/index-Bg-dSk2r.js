function ZA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function e1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var AT={exports:{}},od={},PT={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu=Symbol.for("react.element"),t1=Symbol.for("react.portal"),n1=Symbol.for("react.fragment"),r1=Symbol.for("react.strict_mode"),i1=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),o1=Symbol.for("react.context"),a1=Symbol.for("react.forward_ref"),l1=Symbol.for("react.suspense"),u1=Symbol.for("react.memo"),c1=Symbol.for("react.lazy"),Qv=Symbol.iterator;function h1(t){return t===null||typeof t!="object"?null:(t=Qv&&t[Qv]||t["@@iterator"],typeof t=="function"?t:null)}var NT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bT=Object.assign,DT={};function ta(t,e,n){this.props=t,this.context=e,this.refs=DT,this.updater=n||NT}ta.prototype.isReactComponent={};ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function OT(){}OT.prototype=ta.prototype;function vg(t,e,n){this.props=t,this.context=e,this.refs=DT,this.updater=n||NT}var wg=vg.prototype=new OT;wg.constructor=vg;bT(wg,ta.prototype);wg.isPureReactComponent=!0;var Yv=Array.isArray,LT=Object.prototype.hasOwnProperty,Eg={current:null},MT={key:!0,ref:!0,__self:!0,__source:!0};function VT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)LT.call(e,r)&&!MT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:uu,type:t,key:s,ref:o,props:i,_owner:Eg.current}}function d1(t,e){return{$$typeof:uu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tg(t){return typeof t=="object"&&t!==null&&t.$$typeof===uu}function f1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xv=/\/+/g;function Mf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f1(""+t.key):e.toString(36)}function Dc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case uu:case t1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Mf(o,0):r,Yv(i)?(n="",t!=null&&(n=t.replace(Xv,"$&/")+"/"),Dc(i,e,n,"",function(c){return c})):i!=null&&(Tg(i)&&(i=d1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Mf(s,a);o+=Dc(s,e,n,l,i)}else if(l=h1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Mf(s,a++),o+=Dc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sc(t,e,n){if(t==null)return t;var r=[],i=0;return Dc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function p1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Oc={transition:null},m1={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Oc,ReactCurrentOwner:Eg};function jT(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:sc,forEach:function(t,e,n){sc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sc(t,function(){e++}),e},toArray:function(t){return sc(t,function(e){return e})||[]},only:function(t){if(!Tg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=ta;he.Fragment=n1;he.Profiler=i1;he.PureComponent=vg;he.StrictMode=r1;he.Suspense=l1;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;he.act=jT;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Eg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)LT.call(e,l)&&!MT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:uu,type:t.type,key:i,ref:s,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:o1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s1,_context:t},t.Consumer=t};he.createElement=VT;he.createFactory=function(t){var e=VT.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:a1,render:t}};he.isValidElement=Tg;he.lazy=function(t){return{$$typeof:c1,_payload:{_status:-1,_result:t},_init:p1}};he.memo=function(t,e){return{$$typeof:u1,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Oc.transition;Oc.transition={};try{t()}finally{Oc.transition=e}};he.unstable_act=jT;he.useCallback=function(t,e){return Xt.current.useCallback(t,e)};he.useContext=function(t){return Xt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};he.useEffect=function(t,e){return Xt.current.useEffect(t,e)};he.useId=function(){return Xt.current.useId()};he.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Xt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};he.useRef=function(t){return Xt.current.useRef(t)};he.useState=function(t){return Xt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Xt.current.useTransition()};he.version="18.3.1";PT.exports=he;var b=PT.exports;const FT=e1(b),g1=ZA({__proto__:null,default:FT},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _1=b,y1=Symbol.for("react.element"),v1=Symbol.for("react.fragment"),w1=Object.prototype.hasOwnProperty,E1=_1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T1={key:!0,ref:!0,__self:!0,__source:!0};function UT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)w1.call(e,r)&&!T1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:y1,type:t,key:s,ref:o,props:i,_owner:E1.current}}od.Fragment=v1;od.jsx=UT;od.jsxs=UT;AT.exports=od;var p=AT.exports,Op={},BT={exports:{}},gn={},zT={exports:{}},WT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var X=z.length;z.push(Y);e:for(;0<X;){var G=X-1>>>1,K=z[G];if(0<i(K,Y))z[G]=Y,z[X]=K,X=G;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],X=z.pop();if(X!==Y){z[0]=X;e:for(var G=0,K=z.length,oe=K>>>1;G<oe;){var qe=2*(G+1)-1,Le=z[qe],It=qe+1,lt=z[It];if(0>i(Le,X))It<K&&0>i(lt,Le)?(z[G]=lt,z[It]=X,G=It):(z[G]=Le,z[qe]=X,G=qe);else if(It<K&&0>i(lt,X))z[G]=lt,z[It]=X,G=It;else break e}}return Y}function i(z,Y){var X=z.sortIndex-Y.sortIndex;return X!==0?X:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,m=3,v=!1,E=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=z)r(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function O(z){if(A=!1,C(z),!E)if(n(l)!==null)E=!0,tt(j);else{var Y=n(c);Y!==null&&Dt(O,Y.startTime-z)}}function j(z,Y){E=!1,A&&(A=!1,I(y),y=-1),v=!0;var X=m;try{for(C(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||z&&!P());){var G=f.callback;if(typeof G=="function"){f.callback=null,m=f.priorityLevel;var K=G(f.expirationTime<=Y);Y=t.unstable_now(),typeof K=="function"?f.callback=K:f===n(l)&&r(l),C(Y)}else r(l);f=n(l)}if(f!==null)var oe=!0;else{var qe=n(c);qe!==null&&Dt(O,qe.startTime-Y),oe=!1}return oe}finally{f=null,m=X,v=!1}}var M=!1,S=null,y=-1,k=5,w=-1;function P(){return!(t.unstable_now()-w<k)}function R(){if(S!==null){var z=t.unstable_now();w=z;var Y=!0;try{Y=S(!0,z)}finally{Y?x():(M=!1,S=null)}}else M=!1}var x;if(typeof T=="function")x=function(){T(R)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Z=Ie.port2;Ie.port1.onmessage=R,x=function(){Z.postMessage(null)}}else x=function(){N(R,0)};function tt(z){S=z,M||(M=!0,x())}function Dt(z,Y){y=N(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){E||v||(E=!0,tt(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var X=m;m=Y;try{return z()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=m;m=z;try{return Y()}finally{m=X}},t.unstable_scheduleCallback=function(z,Y,X){var G=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?G+X:G):X=G,z){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=X+K,z={id:h++,callback:Y,priorityLevel:z,startTime:X,expirationTime:K,sortIndex:-1},X>G?(z.sortIndex=X,e(c,z),n(l)===null&&z===n(c)&&(A?(I(y),y=-1):A=!0,Dt(O,X-G))):(z.sortIndex=K,e(l,z),E||v||(E=!0,tt(j))),z},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(z){var Y=m;return function(){var X=m;m=Y;try{return z.apply(this,arguments)}finally{m=X}}}})(WT);zT.exports=WT;var I1=zT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S1=b,mn=I1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $T=new Set,Tl={};function bs(t,e){Ao(t,e),Ao(t+"Capture",e)}function Ao(t,e){for(Tl[t]=e,t=0;t<e.length;t++)$T.add(e[t])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lp=Object.prototype.hasOwnProperty,C1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jv={},Zv={};function k1(t){return Lp.call(Zv,t)?!0:Lp.call(Jv,t)?!1:C1.test(t)?Zv[t]=!0:(Jv[t]=!0,!1)}function x1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R1(t,e,n,r){if(e===null||typeof e>"u"||x1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ig=/[\-:]([a-z])/g;function Sg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ig,Sg);bt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ig,Sg);bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ig,Sg);bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cg(t,e,n,r){var i=bt.hasOwnProperty(e)?bt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R1(e,n,i,r)&&(n=null),r||i===null?k1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zr=S1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oc=Symbol.for("react.element"),no=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),kg=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),HT=Symbol.for("react.provider"),qT=Symbol.for("react.context"),xg=Symbol.for("react.forward_ref"),Vp=Symbol.for("react.suspense"),jp=Symbol.for("react.suspense_list"),Rg=Symbol.for("react.memo"),Jr=Symbol.for("react.lazy"),GT=Symbol.for("react.offscreen"),ew=Symbol.iterator;function Na(t){return t===null||typeof t!="object"?null:(t=ew&&t[ew]||t["@@iterator"],typeof t=="function"?t:null)}var He=Object.assign,Vf;function qa(t){if(Vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vf=e&&e[1]||""}return`
`+Vf+t}var jf=!1;function Ff(t,e){if(!t||jf)return"";jf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qa(t):""}function A1(t){switch(t.tag){case 5:return qa(t.type);case 16:return qa("Lazy");case 13:return qa("Suspense");case 19:return qa("SuspenseList");case 0:case 2:case 15:return t=Ff(t.type,!1),t;case 11:return t=Ff(t.type.render,!1),t;case 1:return t=Ff(t.type,!0),t;default:return""}}function Fp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ro:return"Fragment";case no:return"Portal";case Mp:return"Profiler";case kg:return"StrictMode";case Vp:return"Suspense";case jp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qT:return(t.displayName||"Context")+".Consumer";case HT:return(t._context.displayName||"Context")+".Provider";case xg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rg:return e=t.displayName||null,e!==null?e:Fp(t.type)||"Memo";case Jr:e=t._payload,t=t._init;try{return Fp(t(e))}catch{}}return null}function P1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fp(e);case 8:return e===kg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ii(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function KT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function N1(t){var e=KT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ac(t){t._valueTracker||(t._valueTracker=N1(t))}function QT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=KT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function th(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Up(t,e){var n=e.checked;return He({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ii(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function YT(t,e){e=e.checked,e!=null&&Cg(t,"checked",e,!1)}function Bp(t,e){YT(t,e);var n=Ii(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zp(t,e.type,n):e.hasOwnProperty("defaultValue")&&zp(t,e.type,Ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zp(t,e,n){(e!=="number"||th(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ga=Array.isArray;function _o(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ii(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return He({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Ga(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ii(n)}}function XT(t,e){var n=Ii(e.value),r=Ii(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function iw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function JT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $p(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?JT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lc,ZT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lc=lc||document.createElement("div"),lc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Il(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var tl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b1=["Webkit","ms","Moz","O"];Object.keys(tl).forEach(function(t){b1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),tl[e]=tl[t]})});function eI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||tl.hasOwnProperty(t)&&tl[t]?(""+e).trim():e+"px"}function tI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var D1=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hp(t,e){if(e){if(D1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function qp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gp=null;function Ag(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kp=null,yo=null,vo=null;function sw(t){if(t=du(t)){if(typeof Kp!="function")throw Error(U(280));var e=t.stateNode;e&&(e=hd(e),Kp(t.stateNode,t.type,e))}}function nI(t){yo?vo?vo.push(t):vo=[t]:yo=t}function rI(){if(yo){var t=yo,e=vo;if(vo=yo=null,sw(t),e)for(t=0;t<e.length;t++)sw(e[t])}}function iI(t,e){return t(e)}function sI(){}var Uf=!1;function oI(t,e,n){if(Uf)return t(e,n);Uf=!0;try{return iI(t,e,n)}finally{Uf=!1,(yo!==null||vo!==null)&&(sI(),rI())}}function Sl(t,e){var n=t.stateNode;if(n===null)return null;var r=hd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Qp=!1;if(br)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Qp=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Qp=!1}function O1(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var nl=!1,nh=null,rh=!1,Yp=null,L1={onError:function(t){nl=!0,nh=t}};function M1(t,e,n,r,i,s,o,a,l){nl=!1,nh=null,O1.apply(L1,arguments)}function V1(t,e,n,r,i,s,o,a,l){if(M1.apply(this,arguments),nl){if(nl){var c=nh;nl=!1,nh=null}else throw Error(U(198));rh||(rh=!0,Yp=c)}}function Ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function aI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ow(t){if(Ds(t)!==t)throw Error(U(188))}function j1(t){var e=t.alternate;if(!e){if(e=Ds(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ow(i),t;if(s===r)return ow(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function lI(t){return t=j1(t),t!==null?uI(t):null}function uI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uI(t);if(e!==null)return e;t=t.sibling}return null}var cI=mn.unstable_scheduleCallback,aw=mn.unstable_cancelCallback,F1=mn.unstable_shouldYield,U1=mn.unstable_requestPaint,Ze=mn.unstable_now,B1=mn.unstable_getCurrentPriorityLevel,Pg=mn.unstable_ImmediatePriority,hI=mn.unstable_UserBlockingPriority,ih=mn.unstable_NormalPriority,z1=mn.unstable_LowPriority,dI=mn.unstable_IdlePriority,ad=null,er=null;function W1(t){if(er&&typeof er.onCommitFiberRoot=="function")try{er.onCommitFiberRoot(ad,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:q1,$1=Math.log,H1=Math.LN2;function q1(t){return t>>>=0,t===0?32:31-($1(t)/H1|0)|0}var uc=64,cc=4194304;function Ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ka(a):(s&=o,s!==0&&(r=Ka(s)))}else o=n&~i,o!==0?r=Ka(o):s!==0&&(r=Ka(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bn(e),i=1<<n,r|=t[n],e&=~i;return r}function G1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=G1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fI(){var t=uc;return uc<<=1,!(uc&4194240)&&(uc=64),t}function Bf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function Q1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ng(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var we=0;function pI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mI,bg,gI,_I,yI,Jp=!1,hc=[],ci=null,hi=null,di=null,Cl=new Map,kl=new Map,ei=[],Y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lw(t,e){switch(t){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":Cl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(e.pointerId)}}function Da(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=du(e),e!==null&&bg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function X1(t,e,n,r,i){switch(e){case"focusin":return ci=Da(ci,t,e,n,r,i),!0;case"dragenter":return hi=Da(hi,t,e,n,r,i),!0;case"mouseover":return di=Da(di,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Cl.set(s,Da(Cl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,kl.set(s,Da(kl.get(s)||null,t,e,n,r,i)),!0}return!1}function vI(t){var e=Zi(t.target);if(e!==null){var n=Ds(e);if(n!==null){if(e=n.tag,e===13){if(e=aI(n),e!==null){t.blockedOn=e,yI(t.priority,function(){gI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gp=r,n.target.dispatchEvent(r),Gp=null}else return e=du(n),e!==null&&bg(e),t.blockedOn=n,!1;e.shift()}return!0}function uw(t,e,n){Lc(t)&&n.delete(e)}function J1(){Jp=!1,ci!==null&&Lc(ci)&&(ci=null),hi!==null&&Lc(hi)&&(hi=null),di!==null&&Lc(di)&&(di=null),Cl.forEach(uw),kl.forEach(uw)}function Oa(t,e){t.blockedOn===e&&(t.blockedOn=null,Jp||(Jp=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,J1)))}function xl(t){function e(i){return Oa(i,t)}if(0<hc.length){Oa(hc[0],t);for(var n=1;n<hc.length;n++){var r=hc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ci!==null&&Oa(ci,t),hi!==null&&Oa(hi,t),di!==null&&Oa(di,t),Cl.forEach(e),kl.forEach(e),n=0;n<ei.length;n++)r=ei[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ei.length&&(n=ei[0],n.blockedOn===null);)vI(n),n.blockedOn===null&&ei.shift()}var wo=zr.ReactCurrentBatchConfig,oh=!0;function Z1(t,e,n,r){var i=we,s=wo.transition;wo.transition=null;try{we=1,Dg(t,e,n,r)}finally{we=i,wo.transition=s}}function eP(t,e,n,r){var i=we,s=wo.transition;wo.transition=null;try{we=4,Dg(t,e,n,r)}finally{we=i,wo.transition=s}}function Dg(t,e,n,r){if(oh){var i=Zp(t,e,n,r);if(i===null)Xf(t,e,r,ah,n),lw(t,r);else if(X1(i,t,e,n,r))r.stopPropagation();else if(lw(t,r),e&4&&-1<Y1.indexOf(t)){for(;i!==null;){var s=du(i);if(s!==null&&mI(s),s=Zp(t,e,n,r),s===null&&Xf(t,e,r,ah,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xf(t,e,r,null,n)}}var ah=null;function Zp(t,e,n,r){if(ah=null,t=Ag(r),t=Zi(t),t!==null)if(e=Ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=aI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ah=t,null}function wI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B1()){case Pg:return 1;case hI:return 4;case ih:case z1:return 16;case dI:return 536870912;default:return 16}default:return 16}}var si=null,Og=null,Mc=null;function EI(){if(Mc)return Mc;var t,e=Og,n=e.length,r,i="value"in si?si.value:si.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Mc=i.slice(t,1<r?1-r:void 0)}function Vc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dc(){return!0}function cw(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dc:cw,this.isPropagationStopped=cw,this}return He(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),e}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lg=_n(na),hu=He({},na,{view:0,detail:0}),tP=_n(hu),zf,Wf,La,ld=He({},hu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==La&&(La&&t.type==="mousemove"?(zf=t.screenX-La.screenX,Wf=t.screenY-La.screenY):Wf=zf=0,La=t),zf)},movementY:function(t){return"movementY"in t?t.movementY:Wf}}),hw=_n(ld),nP=He({},ld,{dataTransfer:0}),rP=_n(nP),iP=He({},hu,{relatedTarget:0}),$f=_n(iP),sP=He({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),oP=_n(sP),aP=He({},na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lP=_n(aP),uP=He({},na,{data:0}),dw=_n(uP),cP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dP[t])?!!e[t]:!1}function Mg(){return fP}var pP=He({},hu,{key:function(t){if(t.key){var e=cP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mg,charCode:function(t){return t.type==="keypress"?Vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mP=_n(pP),gP=He({},ld,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fw=_n(gP),_P=He({},hu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mg}),yP=_n(_P),vP=He({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),wP=_n(vP),EP=He({},ld,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TP=_n(EP),IP=[9,13,27,32],Vg=br&&"CompositionEvent"in window,rl=null;br&&"documentMode"in document&&(rl=document.documentMode);var SP=br&&"TextEvent"in window&&!rl,TI=br&&(!Vg||rl&&8<rl&&11>=rl),pw=" ",mw=!1;function II(t,e){switch(t){case"keyup":return IP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function SI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function CP(t,e){switch(t){case"compositionend":return SI(e);case"keypress":return e.which!==32?null:(mw=!0,pw);case"textInput":return t=e.data,t===pw&&mw?null:t;default:return null}}function kP(t,e){if(io)return t==="compositionend"||!Vg&&II(t,e)?(t=EI(),Mc=Og=si=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return TI&&e.locale!=="ko"?null:e.data;default:return null}}var xP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xP[t.type]:e==="textarea"}function CI(t,e,n,r){nI(r),e=lh(e,"onChange"),0<e.length&&(n=new Lg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var il=null,Rl=null;function RP(t){MI(t,0)}function ud(t){var e=ao(t);if(QT(e))return t}function AP(t,e){if(t==="change")return e}var kI=!1;if(br){var Hf;if(br){var qf="oninput"in document;if(!qf){var _w=document.createElement("div");_w.setAttribute("oninput","return;"),qf=typeof _w.oninput=="function"}Hf=qf}else Hf=!1;kI=Hf&&(!document.documentMode||9<document.documentMode)}function yw(){il&&(il.detachEvent("onpropertychange",xI),Rl=il=null)}function xI(t){if(t.propertyName==="value"&&ud(Rl)){var e=[];CI(e,Rl,t,Ag(t)),oI(RP,e)}}function PP(t,e,n){t==="focusin"?(yw(),il=e,Rl=n,il.attachEvent("onpropertychange",xI)):t==="focusout"&&yw()}function NP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ud(Rl)}function bP(t,e){if(t==="click")return ud(e)}function DP(t,e){if(t==="input"||t==="change")return ud(e)}function OP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:OP;function Al(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lp.call(e,i)||!qn(t[i],e[i]))return!1}return!0}function vw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ww(t,e){var n=vw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vw(n)}}function RI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?RI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function AI(){for(var t=window,e=th();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=th(t.document)}return e}function jg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LP(t){var e=AI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&RI(n.ownerDocument.documentElement,n)){if(r!==null&&jg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ww(n,s);var o=ww(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var MP=br&&"documentMode"in document&&11>=document.documentMode,so=null,em=null,sl=null,tm=!1;function Ew(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tm||so==null||so!==th(r)||(r=so,"selectionStart"in r&&jg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sl&&Al(sl,r)||(sl=r,r=lh(em,"onSelect"),0<r.length&&(e=new Lg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=so)))}function fc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oo={animationend:fc("Animation","AnimationEnd"),animationiteration:fc("Animation","AnimationIteration"),animationstart:fc("Animation","AnimationStart"),transitionend:fc("Transition","TransitionEnd")},Gf={},PI={};br&&(PI=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function cd(t){if(Gf[t])return Gf[t];if(!oo[t])return t;var e=oo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in PI)return Gf[t]=e[n];return t}var NI=cd("animationend"),bI=cd("animationiteration"),DI=cd("animationstart"),OI=cd("transitionend"),LI=new Map,Tw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(t,e){LI.set(t,e),bs(e,[t])}for(var Kf=0;Kf<Tw.length;Kf++){var Qf=Tw[Kf],VP=Qf.toLowerCase(),jP=Qf[0].toUpperCase()+Qf.slice(1);Di(VP,"on"+jP)}Di(NI,"onAnimationEnd");Di(bI,"onAnimationIteration");Di(DI,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(OI,"onTransitionEnd");Ao("onMouseEnter",["mouseout","mouseover"]);Ao("onMouseLeave",["mouseout","mouseover"]);Ao("onPointerEnter",["pointerout","pointerover"]);Ao("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function Iw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,V1(r,e,void 0,t),t.currentTarget=null}function MI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Iw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Iw(i,a,c),s=l}}}if(rh)throw t=Yp,rh=!1,Yp=null,t}function be(t,e){var n=e[om];n===void 0&&(n=e[om]=new Set);var r=t+"__bubble";n.has(r)||(VI(e,t,2,!1),n.add(r))}function Yf(t,e,n){var r=0;e&&(r|=4),VI(n,t,r,e)}var pc="_reactListening"+Math.random().toString(36).slice(2);function Pl(t){if(!t[pc]){t[pc]=!0,$T.forEach(function(n){n!=="selectionchange"&&(FP.has(n)||Yf(n,!1,t),Yf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pc]||(e[pc]=!0,Yf("selectionchange",!1,e))}}function VI(t,e,n,r){switch(wI(e)){case 1:var i=Z1;break;case 4:i=eP;break;default:i=Dg}n=i.bind(null,e,n,t),i=void 0,!Qp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Zi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}oI(function(){var c=s,h=Ag(n),f=[];e:{var m=LI.get(t);if(m!==void 0){var v=Lg,E=t;switch(t){case"keypress":if(Vc(n)===0)break e;case"keydown":case"keyup":v=mP;break;case"focusin":E="focus",v=$f;break;case"focusout":E="blur",v=$f;break;case"beforeblur":case"afterblur":v=$f;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=hw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=rP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=yP;break;case NI:case bI:case DI:v=oP;break;case OI:v=wP;break;case"scroll":v=tP;break;case"wheel":v=TP;break;case"copy":case"cut":case"paste":v=lP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=fw}var A=(e&4)!==0,N=!A&&t==="scroll",I=A?m!==null?m+"Capture":null:m;A=[];for(var T=c,C;T!==null;){C=T;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,I!==null&&(O=Sl(T,I),O!=null&&A.push(Nl(T,O,C)))),N)break;T=T.return}0<A.length&&(m=new v(m,E,null,n,h),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Gp&&(E=n.relatedTarget||n.fromElement)&&(Zi(E)||E[Dr]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(E=n.relatedTarget||n.toElement,v=c,E=E?Zi(E):null,E!==null&&(N=Ds(E),E!==N||E.tag!==5&&E.tag!==6)&&(E=null)):(v=null,E=c),v!==E)){if(A=hw,O="onMouseLeave",I="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(A=fw,O="onPointerLeave",I="onPointerEnter",T="pointer"),N=v==null?m:ao(v),C=E==null?m:ao(E),m=new A(O,T+"leave",v,n,h),m.target=N,m.relatedTarget=C,O=null,Zi(h)===c&&(A=new A(I,T+"enter",E,n,h),A.target=C,A.relatedTarget=N,O=A),N=O,v&&E)t:{for(A=v,I=E,T=0,C=A;C;C=Ys(C))T++;for(C=0,O=I;O;O=Ys(O))C++;for(;0<T-C;)A=Ys(A),T--;for(;0<C-T;)I=Ys(I),C--;for(;T--;){if(A===I||I!==null&&A===I.alternate)break t;A=Ys(A),I=Ys(I)}A=null}else A=null;v!==null&&Sw(f,m,v,A,!1),E!==null&&N!==null&&Sw(f,N,E,A,!0)}}e:{if(m=c?ao(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var j=AP;else if(gw(m))if(kI)j=DP;else{j=NP;var M=PP}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=bP);if(j&&(j=j(t,c))){CI(f,j,n,h);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&zp(m,"number",m.value)}switch(M=c?ao(c):window,t){case"focusin":(gw(M)||M.contentEditable==="true")&&(so=M,em=c,sl=null);break;case"focusout":sl=em=so=null;break;case"mousedown":tm=!0;break;case"contextmenu":case"mouseup":case"dragend":tm=!1,Ew(f,n,h);break;case"selectionchange":if(MP)break;case"keydown":case"keyup":Ew(f,n,h)}var S;if(Vg)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else io?II(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(TI&&n.locale!=="ko"&&(io||y!=="onCompositionStart"?y==="onCompositionEnd"&&io&&(S=EI()):(si=h,Og="value"in si?si.value:si.textContent,io=!0)),M=lh(c,y),0<M.length&&(y=new dw(y,t,null,n,h),f.push({event:y,listeners:M}),S?y.data=S:(S=SI(n),S!==null&&(y.data=S)))),(S=SP?CP(t,n):kP(t,n))&&(c=lh(c,"onBeforeInput"),0<c.length&&(h=new dw("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=S))}MI(f,e)})}function Nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Sl(t,n),s!=null&&r.unshift(Nl(t,s,i)),s=Sl(t,e),s!=null&&r.push(Nl(t,s,i))),t=t.return}return r}function Ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Sl(n,s),l!=null&&o.unshift(Nl(n,l,a))):i||(l=Sl(n,s),l!=null&&o.push(Nl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var UP=/\r\n?/g,BP=/\u0000|\uFFFD/g;function Cw(t){return(typeof t=="string"?t:""+t).replace(UP,`
`).replace(BP,"")}function mc(t,e,n){if(e=Cw(e),Cw(t)!==e&&n)throw Error(U(425))}function uh(){}var nm=null,rm=null;function im(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sm=typeof setTimeout=="function"?setTimeout:void 0,zP=typeof clearTimeout=="function"?clearTimeout:void 0,kw=typeof Promise=="function"?Promise:void 0,WP=typeof queueMicrotask=="function"?queueMicrotask:typeof kw<"u"?function(t){return kw.resolve(null).then(t).catch($P)}:sm;function $P(t){setTimeout(function(){throw t})}function Jf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xl(e)}function fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ra=Math.random().toString(36).slice(2),Jn="__reactFiber$"+ra,bl="__reactProps$"+ra,Dr="__reactContainer$"+ra,om="__reactEvents$"+ra,HP="__reactListeners$"+ra,qP="__reactHandles$"+ra;function Zi(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dr]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xw(t);t!==null;){if(n=t[Jn])return n;t=xw(t)}return e}t=n,n=t.parentNode}return null}function du(t){return t=t[Jn]||t[Dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function hd(t){return t[bl]||null}var am=[],lo=-1;function Oi(t){return{current:t}}function Oe(t){0>lo||(t.current=am[lo],am[lo]=null,lo--)}function Pe(t,e){lo++,am[lo]=t.current,t.current=e}var Si={},Wt=Oi(Si),rn=Oi(!1),fs=Si;function Po(t,e){var n=t.type.contextTypes;if(!n)return Si;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function sn(t){return t=t.childContextTypes,t!=null}function ch(){Oe(rn),Oe(Wt)}function Rw(t,e,n){if(Wt.current!==Si)throw Error(U(168));Pe(Wt,e),Pe(rn,n)}function jI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,P1(t)||"Unknown",i));return He({},n,r)}function hh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Si,fs=Wt.current,Pe(Wt,t),Pe(rn,rn.current),!0}function Aw(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=jI(t,e,fs),r.__reactInternalMemoizedMergedChildContext=t,Oe(rn),Oe(Wt),Pe(Wt,t)):Oe(rn),Pe(rn,n)}var yr=null,dd=!1,Zf=!1;function FI(t){yr===null?yr=[t]:yr.push(t)}function GP(t){dd=!0,FI(t)}function Li(){if(!Zf&&yr!==null){Zf=!0;var t=0,e=we;try{var n=yr;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yr=null,dd=!1}catch(i){throw yr!==null&&(yr=yr.slice(t+1)),cI(Pg,Li),i}finally{we=e,Zf=!1}}return null}var uo=[],co=0,dh=null,fh=0,wn=[],En=0,ps=null,wr=1,Er="";function Ki(t,e){uo[co++]=fh,uo[co++]=dh,dh=t,fh=e}function UI(t,e,n){wn[En++]=wr,wn[En++]=Er,wn[En++]=ps,ps=t;var r=wr;t=Er;var i=32-Bn(r)-1;r&=~(1<<i),n+=1;var s=32-Bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wr=1<<32-Bn(e)+i|n<<i|r,Er=s+t}else wr=1<<s|n<<i|r,Er=t}function Fg(t){t.return!==null&&(Ki(t,1),UI(t,1,0))}function Ug(t){for(;t===dh;)dh=uo[--co],uo[co]=null,fh=uo[--co],uo[co]=null;for(;t===ps;)ps=wn[--En],wn[En]=null,Er=wn[--En],wn[En]=null,wr=wn[--En],wn[En]=null}var fn=null,hn=null,Ve=!1,Vn=null;function BI(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,hn=fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ps!==null?{id:wr,overflow:Er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,hn=null,!0):!1;default:return!1}}function lm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function um(t){if(Ve){var e=hn;if(e){var n=e;if(!Pw(t,e)){if(lm(t))throw Error(U(418));e=fi(n.nextSibling);var r=fn;e&&Pw(t,e)?BI(r,n):(t.flags=t.flags&-4097|2,Ve=!1,fn=t)}}else{if(lm(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ve=!1,fn=t}}}function Nw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function gc(t){if(t!==fn)return!1;if(!Ve)return Nw(t),Ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!im(t.type,t.memoizedProps)),e&&(e=hn)){if(lm(t))throw zI(),Error(U(418));for(;e;)BI(t,e),e=fi(e.nextSibling)}if(Nw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=fn?fi(t.stateNode.nextSibling):null;return!0}function zI(){for(var t=hn;t;)t=fi(t.nextSibling)}function No(){hn=fn=null,Ve=!1}function Bg(t){Vn===null?Vn=[t]:Vn.push(t)}var KP=zr.ReactCurrentBatchConfig;function Ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function _c(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bw(t){var e=t._init;return e(t._payload)}function WI(t){function e(I,T){if(t){var C=I.deletions;C===null?(I.deletions=[T],I.flags|=16):C.push(T)}}function n(I,T){if(!t)return null;for(;T!==null;)e(I,T),T=T.sibling;return null}function r(I,T){for(I=new Map;T!==null;)T.key!==null?I.set(T.key,T):I.set(T.index,T),T=T.sibling;return I}function i(I,T){return I=_i(I,T),I.index=0,I.sibling=null,I}function s(I,T,C){return I.index=C,t?(C=I.alternate,C!==null?(C=C.index,C<T?(I.flags|=2,T):C):(I.flags|=2,T)):(I.flags|=1048576,T)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,T,C,O){return T===null||T.tag!==6?(T=op(C,I.mode,O),T.return=I,T):(T=i(T,C),T.return=I,T)}function l(I,T,C,O){var j=C.type;return j===ro?h(I,T,C.props.children,O,C.key):T!==null&&(T.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Jr&&bw(j)===T.type)?(O=i(T,C.props),O.ref=Ma(I,T,C),O.return=I,O):(O=$c(C.type,C.key,C.props,null,I.mode,O),O.ref=Ma(I,T,C),O.return=I,O)}function c(I,T,C,O){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=ap(C,I.mode,O),T.return=I,T):(T=i(T,C.children||[]),T.return=I,T)}function h(I,T,C,O,j){return T===null||T.tag!==7?(T=us(C,I.mode,O,j),T.return=I,T):(T=i(T,C),T.return=I,T)}function f(I,T,C){if(typeof T=="string"&&T!==""||typeof T=="number")return T=op(""+T,I.mode,C),T.return=I,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case oc:return C=$c(T.type,T.key,T.props,null,I.mode,C),C.ref=Ma(I,null,T),C.return=I,C;case no:return T=ap(T,I.mode,C),T.return=I,T;case Jr:var O=T._init;return f(I,O(T._payload),C)}if(Ga(T)||Na(T))return T=us(T,I.mode,C,null),T.return=I,T;_c(I,T)}return null}function m(I,T,C,O){var j=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return j!==null?null:a(I,T,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case oc:return C.key===j?l(I,T,C,O):null;case no:return C.key===j?c(I,T,C,O):null;case Jr:return j=C._init,m(I,T,j(C._payload),O)}if(Ga(C)||Na(C))return j!==null?null:h(I,T,C,O,null);_c(I,C)}return null}function v(I,T,C,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(C)||null,a(T,I,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case oc:return I=I.get(O.key===null?C:O.key)||null,l(T,I,O,j);case no:return I=I.get(O.key===null?C:O.key)||null,c(T,I,O,j);case Jr:var M=O._init;return v(I,T,C,M(O._payload),j)}if(Ga(O)||Na(O))return I=I.get(C)||null,h(T,I,O,j,null);_c(T,O)}return null}function E(I,T,C,O){for(var j=null,M=null,S=T,y=T=0,k=null;S!==null&&y<C.length;y++){S.index>y?(k=S,S=null):k=S.sibling;var w=m(I,S,C[y],O);if(w===null){S===null&&(S=k);break}t&&S&&w.alternate===null&&e(I,S),T=s(w,T,y),M===null?j=w:M.sibling=w,M=w,S=k}if(y===C.length)return n(I,S),Ve&&Ki(I,y),j;if(S===null){for(;y<C.length;y++)S=f(I,C[y],O),S!==null&&(T=s(S,T,y),M===null?j=S:M.sibling=S,M=S);return Ve&&Ki(I,y),j}for(S=r(I,S);y<C.length;y++)k=v(S,I,y,C[y],O),k!==null&&(t&&k.alternate!==null&&S.delete(k.key===null?y:k.key),T=s(k,T,y),M===null?j=k:M.sibling=k,M=k);return t&&S.forEach(function(P){return e(I,P)}),Ve&&Ki(I,y),j}function A(I,T,C,O){var j=Na(C);if(typeof j!="function")throw Error(U(150));if(C=j.call(C),C==null)throw Error(U(151));for(var M=j=null,S=T,y=T=0,k=null,w=C.next();S!==null&&!w.done;y++,w=C.next()){S.index>y?(k=S,S=null):k=S.sibling;var P=m(I,S,w.value,O);if(P===null){S===null&&(S=k);break}t&&S&&P.alternate===null&&e(I,S),T=s(P,T,y),M===null?j=P:M.sibling=P,M=P,S=k}if(w.done)return n(I,S),Ve&&Ki(I,y),j;if(S===null){for(;!w.done;y++,w=C.next())w=f(I,w.value,O),w!==null&&(T=s(w,T,y),M===null?j=w:M.sibling=w,M=w);return Ve&&Ki(I,y),j}for(S=r(I,S);!w.done;y++,w=C.next())w=v(S,I,y,w.value,O),w!==null&&(t&&w.alternate!==null&&S.delete(w.key===null?y:w.key),T=s(w,T,y),M===null?j=w:M.sibling=w,M=w);return t&&S.forEach(function(R){return e(I,R)}),Ve&&Ki(I,y),j}function N(I,T,C,O){if(typeof C=="object"&&C!==null&&C.type===ro&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case oc:e:{for(var j=C.key,M=T;M!==null;){if(M.key===j){if(j=C.type,j===ro){if(M.tag===7){n(I,M.sibling),T=i(M,C.props.children),T.return=I,I=T;break e}}else if(M.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Jr&&bw(j)===M.type){n(I,M.sibling),T=i(M,C.props),T.ref=Ma(I,M,C),T.return=I,I=T;break e}n(I,M);break}else e(I,M);M=M.sibling}C.type===ro?(T=us(C.props.children,I.mode,O,C.key),T.return=I,I=T):(O=$c(C.type,C.key,C.props,null,I.mode,O),O.ref=Ma(I,T,C),O.return=I,I=O)}return o(I);case no:e:{for(M=C.key;T!==null;){if(T.key===M)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){n(I,T.sibling),T=i(T,C.children||[]),T.return=I,I=T;break e}else{n(I,T);break}else e(I,T);T=T.sibling}T=ap(C,I.mode,O),T.return=I,I=T}return o(I);case Jr:return M=C._init,N(I,T,M(C._payload),O)}if(Ga(C))return E(I,T,C,O);if(Na(C))return A(I,T,C,O);_c(I,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,T!==null&&T.tag===6?(n(I,T.sibling),T=i(T,C),T.return=I,I=T):(n(I,T),T=op(C,I.mode,O),T.return=I,I=T),o(I)):n(I,T)}return N}var bo=WI(!0),$I=WI(!1),ph=Oi(null),mh=null,ho=null,zg=null;function Wg(){zg=ho=mh=null}function $g(t){var e=ph.current;Oe(ph),t._currentValue=e}function cm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Eo(t,e){mh=t,zg=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(zg!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(mh===null)throw Error(U(308));ho=t,mh.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var es=null;function Hg(t){es===null?es=[t]:es.push(t)}function HI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Hg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Or(t,r)}function Or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zr=!1;function qg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Or(t,n)}return i=r.interleaved,i===null?(e.next=e,Hg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Or(t,n)}function jc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ng(t,n)}}function Dw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gh(t,e,n,r){var i=t.updateQueue;Zr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,A=a;switch(m=e,v=n,A.tag){case 1:if(E=A.payload,typeof E=="function"){f=E.call(v,f,m);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=A.payload,m=typeof E=="function"?E.call(v,f,m):E,m==null)break e;f=He({},f,m);break e;case 2:Zr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,l=f):h=h.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gs|=o,t.lanes=o,t.memoizedState=f}}function Ow(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var fu={},tr=Oi(fu),Dl=Oi(fu),Ol=Oi(fu);function ts(t){if(t===fu)throw Error(U(174));return t}function Gg(t,e){switch(Pe(Ol,e),Pe(Dl,t),Pe(tr,fu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$p(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$p(e,t)}Oe(tr),Pe(tr,e)}function Do(){Oe(tr),Oe(Dl),Oe(Ol)}function GI(t){ts(Ol.current);var e=ts(tr.current),n=$p(e,t.type);e!==n&&(Pe(Dl,t),Pe(tr,n))}function Kg(t){Dl.current===t&&(Oe(tr),Oe(Dl))}var Be=Oi(0);function _h(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ep=[];function Qg(){for(var t=0;t<ep.length;t++)ep[t]._workInProgressVersionPrimary=null;ep.length=0}var Fc=zr.ReactCurrentDispatcher,tp=zr.ReactCurrentBatchConfig,ms=0,$e=null,ut=null,gt=null,yh=!1,ol=!1,Ll=0,QP=0;function Vt(){throw Error(U(321))}function Yg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function Xg(t,e,n,r,i,s){if(ms=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fc.current=t===null||t.memoizedState===null?ZP:eN,t=n(r,i),ol){s=0;do{if(ol=!1,Ll=0,25<=s)throw Error(U(301));s+=1,gt=ut=null,e.updateQueue=null,Fc.current=tN,t=n(r,i)}while(ol)}if(Fc.current=vh,e=ut!==null&&ut.next!==null,ms=0,gt=ut=$e=null,yh=!1,e)throw Error(U(300));return t}function Jg(){var t=Ll!==0;return Ll=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?$e.memoizedState=gt=t:gt=gt.next=t,gt}function kn(){if(ut===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=gt===null?$e.memoizedState:gt.next;if(e!==null)gt=e,ut=t;else{if(t===null)throw Error(U(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},gt===null?$e.memoizedState=gt=t:gt=gt.next=t}return gt}function Ml(t,e){return typeof e=="function"?e(t):e}function np(t){var e=kn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((ms&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,$e.lanes|=h,gs|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,qn(r,e.memoizedState)||(tn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,$e.lanes|=s,gs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rp(t){var e=kn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function KI(){}function QI(t,e){var n=$e,r=kn(),i=e(),s=!qn(r.memoizedState,i);if(s&&(r.memoizedState=i,tn=!0),r=r.queue,Zg(JI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,Vl(9,XI.bind(null,n,r,i,e),void 0,null),wt===null)throw Error(U(349));ms&30||YI(n,e,i)}return i}function YI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function XI(t,e,n,r){e.value=n,e.getSnapshot=r,ZI(e)&&eS(t)}function JI(t,e,n){return n(function(){ZI(e)&&eS(t)})}function ZI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function eS(t){var e=Or(t,1);e!==null&&zn(e,t,1,-1)}function Lw(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ml,lastRenderedState:t},e.queue=t,t=t.dispatch=JP.bind(null,$e,t),[e.memoizedState,t]}function Vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tS(){return kn().memoizedState}function Uc(t,e,n,r){var i=Xn();$e.flags|=t,i.memoizedState=Vl(1|e,n,void 0,r===void 0?null:r)}function fd(t,e,n,r){var i=kn();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&Yg(r,o.deps)){i.memoizedState=Vl(e,n,s,r);return}}$e.flags|=t,i.memoizedState=Vl(1|e,n,s,r)}function Mw(t,e){return Uc(8390656,8,t,e)}function Zg(t,e){return fd(2048,8,t,e)}function nS(t,e){return fd(4,2,t,e)}function rS(t,e){return fd(4,4,t,e)}function iS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sS(t,e,n){return n=n!=null?n.concat([t]):null,fd(4,4,iS.bind(null,e,t),n)}function e_(){}function oS(t,e){var n=kn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aS(t,e){var n=kn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lS(t,e,n){return ms&21?(qn(n,e)||(n=fI(),$e.lanes|=n,gs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function YP(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=tp.transition;tp.transition={};try{t(!1),e()}finally{we=n,tp.transition=r}}function uS(){return kn().memoizedState}function XP(t,e,n){var r=gi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cS(t))hS(e,n);else if(n=HI(t,e,n,r),n!==null){var i=Kt();zn(n,t,r,i),dS(n,e,r)}}function JP(t,e,n){var r=gi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cS(t))hS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(i.next=i,Hg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=HI(t,e,i,r),n!==null&&(i=Kt(),zn(n,t,r,i),dS(n,e,r))}}function cS(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function hS(t,e){ol=yh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ng(t,n)}}var vh={readContext:Cn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},ZP={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Mw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4194308,4,iS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uc(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=XP.bind(null,$e,t),[r.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Lw,useDebugValue:e_,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Lw(!1),e=t[0];return t=YP.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$e,i=Xn();if(Ve){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),wt===null)throw Error(U(349));ms&30||YI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Mw(JI.bind(null,r,s,t),[t]),r.flags|=2048,Vl(9,XI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=wt.identifierPrefix;if(Ve){var n=Er,r=wr;n=(r&~(1<<32-Bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ll++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eN={readContext:Cn,useCallback:oS,useContext:Cn,useEffect:Zg,useImperativeHandle:sS,useInsertionEffect:nS,useLayoutEffect:rS,useMemo:aS,useReducer:np,useRef:tS,useState:function(){return np(Ml)},useDebugValue:e_,useDeferredValue:function(t){var e=kn();return lS(e,ut.memoizedState,t)},useTransition:function(){var t=np(Ml)[0],e=kn().memoizedState;return[t,e]},useMutableSource:KI,useSyncExternalStore:QI,useId:uS,unstable_isNewReconciler:!1},tN={readContext:Cn,useCallback:oS,useContext:Cn,useEffect:Zg,useImperativeHandle:sS,useInsertionEffect:nS,useLayoutEffect:rS,useMemo:aS,useReducer:rp,useRef:tS,useState:function(){return rp(Ml)},useDebugValue:e_,useDeferredValue:function(t){var e=kn();return ut===null?e.memoizedState=t:lS(e,ut.memoizedState,t)},useTransition:function(){var t=rp(Ml)[0],e=kn().memoizedState;return[t,e]},useMutableSource:KI,useSyncExternalStore:QI,useId:uS,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=He({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:He({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pd={isMounted:function(t){return(t=t._reactInternals)?Ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=gi(t),s=kr(r,i);s.payload=e,n!=null&&(s.callback=n),e=pi(t,s,i),e!==null&&(zn(e,t,i,r),jc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=gi(t),s=kr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pi(t,s,i),e!==null&&(zn(e,t,i,r),jc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),r=gi(t),i=kr(n,r);i.tag=2,e!=null&&(i.callback=e),e=pi(t,i,r),e!==null&&(zn(e,t,r,n),jc(e,t,r))}};function Vw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Al(n,r)||!Al(i,s):!0}function fS(t,e,n){var r=!1,i=Si,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(i=sn(e)?fs:Wt.current,r=e.contextTypes,s=(r=r!=null)?Po(t,i):Si),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pd.enqueueReplaceState(e,e.state,null)}function dm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},qg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Cn(s):(s=sn(e)?fs:Wt.current,i.context=Po(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pd.enqueueReplaceState(i,i.state,null),gh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Oo(t,e){try{var n="",r=e;do n+=A1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ip(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nN=typeof WeakMap=="function"?WeakMap:Map;function pS(t,e,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Eh||(Eh=!0,Im=r),fm(t,e)},n}function mS(t,e,n){n=kr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fm(t,e),typeof r!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gN.bind(null,t,e,n),e.then(t,t))}function Uw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kr(-1,1),e.tag=2,pi(n,e,1))),n.lanes|=1),t)}var rN=zr.ReactCurrentOwner,tn=!1;function qt(t,e,n,r){e.child=t===null?$I(e,null,n,r):bo(e,t.child,n,r)}function zw(t,e,n,r,i){n=n.render;var s=e.ref;return Eo(e,i),r=Xg(t,e,n,r,s,i),n=Jg(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Ve&&n&&Fg(e),e.flags|=1,qt(t,e,r,i),e.child)}function Ww(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!l_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gS(t,e,s,r,i)):(t=$c(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Al,n(o,r)&&t.ref===e.ref)return Lr(t,e,i)}return e.flags|=1,t=_i(s,r),t.ref=e.ref,t.return=e,e.child=t}function gS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Al(s,r)&&t.ref===e.ref)if(tn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,Lr(t,e,i)}return pm(t,e,n,r,i)}function _S(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(po,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(po,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Pe(po,cn),cn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Pe(po,cn),cn|=r;return qt(t,e,i,n),e.child}function yS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pm(t,e,n,r,i){var s=sn(n)?fs:Wt.current;return s=Po(e,s),Eo(e,i),n=Xg(t,e,n,r,s,i),r=Jg(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Ve&&r&&Fg(e),e.flags|=1,qt(t,e,n,i),e.child)}function $w(t,e,n,r,i){if(sn(n)){var s=!0;hh(e)}else s=!1;if(Eo(e,i),e.stateNode===null)Bc(t,e),fS(e,n,r),dm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=sn(n)?fs:Wt.current,c=Po(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&jw(e,o,r,c),Zr=!1;var m=e.memoizedState;o.state=m,gh(e,r,o,i),l=e.memoizedState,a!==r||m!==l||rn.current||Zr?(typeof h=="function"&&(hm(e,n,h,r),l=e.memoizedState),(a=Zr||Vw(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ln(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=sn(n)?fs:Wt.current,l=Po(e,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&jw(e,o,r,l),Zr=!1,m=e.memoizedState,o.state=m,gh(e,r,o,i);var E=e.memoizedState;a!==f||m!==E||rn.current||Zr?(typeof v=="function"&&(hm(e,n,v,r),E=e.memoizedState),(c=Zr||Vw(e,n,c,r,m,E,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return mm(t,e,n,r,s,i)}function mm(t,e,n,r,i,s){yS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Aw(e,n,!1),Lr(t,e,s);r=e.stateNode,rN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bo(e,t.child,null,s),e.child=bo(e,null,a,s)):qt(t,e,a,s),e.memoizedState=r.state,i&&Aw(e,n,!0),e.child}function vS(t){var e=t.stateNode;e.pendingContext?Rw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rw(t,e.context,!1),Gg(t,e.containerInfo)}function Hw(t,e,n,r,i){return No(),Bg(i),e.flags|=256,qt(t,e,n,r),e.child}var gm={dehydrated:null,treeContext:null,retryLane:0};function _m(t){return{baseLanes:t,cachePool:null,transitions:null}}function wS(t,e,n){var r=e.pendingProps,i=Be.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Pe(Be,i&1),t===null)return um(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_d(o,r,0,null),t=us(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_m(n),e.memoizedState=gm,t):t_(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=_i(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_i(a,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_m(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gm,r}return s=t.child,t=s.sibling,r=_i(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function t_(t,e){return e=_d({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yc(t,e,n,r){return r!==null&&Bg(r),bo(e,t.child,null,n),t=t_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ip(Error(U(422))),yc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_d({mode:"visible",children:r.children},i,0,null),s=us(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bo(e,t.child,null,o),e.child.memoizedState=_m(o),e.memoizedState=gm,s);if(!(e.mode&1))return yc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=ip(s,r,void 0),yc(t,e,o,r)}if(a=(o&t.childLanes)!==0,tn||a){if(r=wt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Or(t,i),zn(r,t,i,-1))}return a_(),r=ip(Error(U(421))),yc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_N.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,hn=fi(i.nextSibling),fn=e,Ve=!0,Vn=null,t!==null&&(wn[En++]=wr,wn[En++]=Er,wn[En++]=ps,wr=t.id,Er=t.overflow,ps=e),e=t_(e,r.children),e.flags|=4096,e)}function qw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cm(t.return,e,n)}function sp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ES(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qt(t,e,r.children,n),r=Be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qw(t,n,e);else if(t.tag===19)qw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(Be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_h(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),sp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_h(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}sp(e,!0,n,null,s);break;case"together":sp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=_i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sN(t,e,n){switch(e.tag){case 3:vS(e),No();break;case 5:GI(e);break;case 1:sn(e.type)&&hh(e);break;case 4:Gg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(ph,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Be,Be.current&1),e.flags|=128,null):n&e.child.childLanes?wS(t,e,n):(Pe(Be,Be.current&1),t=Lr(t,e,n),t!==null?t.sibling:null);Pe(Be,Be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ES(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(Be,Be.current),r)break;return null;case 22:case 23:return e.lanes=0,_S(t,e,n)}return Lr(t,e,n)}var TS,ym,IS,SS;TS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ym=function(){};IS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ts(tr.current);var s=null;switch(n){case"input":i=Up(t,i),r=Up(t,r),s=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),s=[];break;case"textarea":i=Wp(t,i),r=Wp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uh)}Hp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Tl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Tl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&be("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};SS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Va(t,e){if(!Ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oN(t,e,n){var r=e.pendingProps;switch(Ug(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return sn(e.type)&&ch(),jt(e),null;case 3:return r=e.stateNode,Do(),Oe(rn),Oe(Wt),Qg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(km(Vn),Vn=null))),ym(t,e),jt(e),null;case 5:Kg(e);var i=ts(Ol.current);if(n=e.type,t!==null&&e.stateNode!=null)IS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return jt(e),null}if(t=ts(tr.current),gc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jn]=e,r[bl]=s,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<Qa.length;i++)be(Qa[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":tw(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":rw(r,s),be("invalid",r)}Hp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&mc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&mc(r.textContent,a,t),i=["children",""+a]):Tl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":ac(r),nw(r,s,!0);break;case"textarea":ac(r),iw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=uh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=JT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jn]=e,t[bl]=r,TS(t,e,!1,!1),e.stateNode=t;e:{switch(o=qp(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qa.length;i++)be(Qa[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":tw(t,r),i=Up(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),be("invalid",t);break;case"textarea":rw(t,r),i=Wp(t,r),be("invalid",t);break;default:i=r}Hp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ZT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Il(t,l):typeof l=="number"&&Il(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Tl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&be("scroll",t):l!=null&&Cg(t,s,l,o))}switch(n){case"input":ac(t),nw(t,r,!1);break;case"textarea":ac(t),iw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ii(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_o(t,!!r.multiple,s,!1):r.defaultValue!=null&&_o(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=uh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)SS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ts(Ol.current),ts(tr.current),gc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jn]=e,(s=r.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:mc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jn]=e,e.stateNode=r}return jt(e),null;case 13:if(Oe(Be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ve&&hn!==null&&e.mode&1&&!(e.flags&128))zI(),No(),e.flags|=98560,s=!1;else if(s=gc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Jn]=e}else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Vn!==null&&(km(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Be.current&1?ht===0&&(ht=3):a_())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Do(),ym(t,e),t===null&&Pl(e.stateNode.containerInfo),jt(e),null;case 10:return $g(e.type._context),jt(e),null;case 17:return sn(e.type)&&ch(),jt(e),null;case 19:if(Oe(Be),s=e.memoizedState,s===null)return jt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Va(s,!1);else{if(ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_h(t),o!==null){for(e.flags|=128,Va(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(Be,Be.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>Lo&&(e.flags|=128,r=!0,Va(s,!1),e.lanes=4194304)}else{if(!r)if(t=_h(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ve)return jt(e),null}else 2*Ze()-s.renderingStartTime>Lo&&n!==1073741824&&(e.flags|=128,r=!0,Va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,n=Be.current,Pe(Be,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return o_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?cn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function aN(t,e){switch(Ug(e),e.tag){case 1:return sn(e.type)&&ch(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Do(),Oe(rn),Oe(Wt),Qg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kg(e),null;case 13:if(Oe(Be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));No()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Oe(Be),null;case 4:return Do(),null;case 10:return $g(e.type._context),null;case 22:case 23:return o_(),null;case 24:return null;default:return null}}var vc=!1,Bt=!1,lN=typeof WeakSet=="function"?WeakSet:Set,H=null;function fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(t,e,r)}else n.current=null}function vm(t,e,n){try{n()}catch(r){Ye(t,e,r)}}var Gw=!1;function uN(t,e){if(nm=oh,t=AI(),jg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rm={focusedElem:t,selectionRange:n},oh=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var A=E.memoizedProps,N=E.memoizedState,I=e.stateNode,T=I.getSnapshotBeforeUpdate(e.elementType===e.type?A:Ln(e.type,A),N);I.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Ye(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return E=Gw,Gw=!1,E}function al(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vm(e,n,s)}i=i.next}while(i!==r)}}function md(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function CS(t){var e=t.alternate;e!==null&&(t.alternate=null,CS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[bl],delete e[om],delete e[HP],delete e[qP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kS(t){return t.tag===5||t.tag===3||t.tag===4}function Kw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Em(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uh));else if(r!==4&&(t=t.child,t!==null))for(Em(t,e,n),t=t.sibling;t!==null;)Em(t,e,n),t=t.sibling}function Tm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tm(t,e,n),t=t.sibling;t!==null;)Tm(t,e,n),t=t.sibling}var kt=null,Mn=!1;function Yr(t,e,n){for(n=n.child;n!==null;)xS(t,e,n),n=n.sibling}function xS(t,e,n){if(er&&typeof er.onCommitFiberUnmount=="function")try{er.onCommitFiberUnmount(ad,n)}catch{}switch(n.tag){case 5:Bt||fo(n,e);case 6:var r=kt,i=Mn;kt=null,Yr(t,e,n),kt=r,Mn=i,kt!==null&&(Mn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Mn?(t=kt,n=n.stateNode,t.nodeType===8?Jf(t.parentNode,n):t.nodeType===1&&Jf(t,n),xl(t)):Jf(kt,n.stateNode));break;case 4:r=kt,i=Mn,kt=n.stateNode.containerInfo,Mn=!0,Yr(t,e,n),kt=r,Mn=i;break;case 0:case 11:case 14:case 15:if(!Bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vm(n,e,o),i=i.next}while(i!==r)}Yr(t,e,n);break;case 1:if(!Bt&&(fo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ye(n,e,a)}Yr(t,e,n);break;case 21:Yr(t,e,n);break;case 22:n.mode&1?(Bt=(r=Bt)||n.memoizedState!==null,Yr(t,e,n),Bt=r):Yr(t,e,n);break;default:Yr(t,e,n)}}function Qw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lN),e.forEach(function(r){var i=yN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Mn=!1;break e;case 3:kt=a.stateNode.containerInfo,Mn=!0;break e;case 4:kt=a.stateNode.containerInfo,Mn=!0;break e}a=a.return}if(kt===null)throw Error(U(160));xS(s,o,i),kt=null,Mn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ye(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)RS(e,t),e=e.sibling}function RS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Yn(t),r&4){try{al(3,t,t.return),md(3,t)}catch(A){Ye(t,t.return,A)}try{al(5,t,t.return)}catch(A){Ye(t,t.return,A)}}break;case 1:Dn(e,t),Yn(t),r&512&&n!==null&&fo(n,n.return);break;case 5:if(Dn(e,t),Yn(t),r&512&&n!==null&&fo(n,n.return),t.flags&32){var i=t.stateNode;try{Il(i,"")}catch(A){Ye(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&YT(i,s),qp(a,o);var c=qp(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?tI(i,f):h==="dangerouslySetInnerHTML"?ZT(i,f):h==="children"?Il(i,f):Cg(i,h,f,c)}switch(a){case"input":Bp(i,s);break;case"textarea":XT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?_o(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?_o(i,!!s.multiple,s.defaultValue,!0):_o(i,!!s.multiple,s.multiple?[]:"",!1))}i[bl]=s}catch(A){Ye(t,t.return,A)}}break;case 6:if(Dn(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Ye(t,t.return,A)}}break;case 3:if(Dn(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xl(e.containerInfo)}catch(A){Ye(t,t.return,A)}break;case 4:Dn(e,t),Yn(t);break;case 13:Dn(e,t),Yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(i_=Ze())),r&4&&Qw(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||h,Dn(e,t),Bt=c):Dn(e,t),Yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(H=t,h=t.child;h!==null;){for(f=H=h;H!==null;){switch(m=H,v=m.child,m.tag){case 0:case 11:case 14:case 15:al(4,m,m.return);break;case 1:fo(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(A){Ye(r,n,A)}}break;case 5:fo(m,m.return);break;case 22:if(m.memoizedState!==null){Xw(f);continue}}v!==null?(v.return=m,H=v):Xw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=eI("display",o))}catch(A){Ye(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){Ye(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),Yn(t),r&4&&Qw(t);break;case 21:break;default:Dn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kS(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Il(i,""),r.flags&=-33);var s=Kw(t);Tm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Kw(t);Em(t,a,o);break;default:throw Error(U(161))}}catch(l){Ye(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cN(t,e,n){H=t,AS(t)}function AS(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=vc;var c=Bt;if(vc=o,(Bt=l)&&!c)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?Jw(i):l!==null?(l.return=o,H=l):Jw(i);for(;s!==null;)H=s,AS(s),s=s.sibling;H=i,vc=a,Bt=c}Yw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Yw(t)}}function Yw(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||md(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ow(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ow(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&xl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Bt||e.flags&512&&wm(e)}catch(m){Ye(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Xw(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Jw(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{md(4,e)}catch(l){Ye(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ye(e,i,l)}}var s=e.return;try{wm(e)}catch(l){Ye(e,s,l)}break;case 5:var o=e.return;try{wm(e)}catch(l){Ye(e,o,l)}}}catch(l){Ye(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var hN=Math.ceil,wh=zr.ReactCurrentDispatcher,n_=zr.ReactCurrentOwner,Sn=zr.ReactCurrentBatchConfig,me=0,wt=null,rt=null,Rt=0,cn=0,po=Oi(0),ht=0,jl=null,gs=0,gd=0,r_=0,ll=null,Zt=null,i_=0,Lo=1/0,gr=null,Eh=!1,Im=null,mi=null,wc=!1,oi=null,Th=0,ul=0,Sm=null,zc=-1,Wc=0;function Kt(){return me&6?Ze():zc!==-1?zc:zc=Ze()}function gi(t){return t.mode&1?me&2&&Rt!==0?Rt&-Rt:KP.transition!==null?(Wc===0&&(Wc=fI()),Wc):(t=we,t!==0||(t=window.event,t=t===void 0?16:wI(t.type)),t):1}function zn(t,e,n,r){if(50<ul)throw ul=0,Sm=null,Error(U(185));cu(t,n,r),(!(me&2)||t!==wt)&&(t===wt&&(!(me&2)&&(gd|=n),ht===4&&ti(t,Rt)),on(t,r),n===1&&me===0&&!(e.mode&1)&&(Lo=Ze()+500,dd&&Li()))}function on(t,e){var n=t.callbackNode;K1(t,e);var r=sh(t,t===wt?Rt:0);if(r===0)n!==null&&aw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&aw(n),e===1)t.tag===0?GP(Zw.bind(null,t)):FI(Zw.bind(null,t)),WP(function(){!(me&6)&&Li()}),n=null;else{switch(pI(r)){case 1:n=Pg;break;case 4:n=hI;break;case 16:n=ih;break;case 536870912:n=dI;break;default:n=ih}n=VS(n,PS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function PS(t,e){if(zc=-1,Wc=0,me&6)throw Error(U(327));var n=t.callbackNode;if(To()&&t.callbackNode!==n)return null;var r=sh(t,t===wt?Rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ih(t,r);else{e=r;var i=me;me|=2;var s=bS();(wt!==t||Rt!==e)&&(gr=null,Lo=Ze()+500,ls(t,e));do try{pN();break}catch(a){NS(t,a)}while(!0);Wg(),wh.current=s,me=i,rt!==null?e=0:(wt=null,Rt=0,e=ht)}if(e!==0){if(e===2&&(i=Xp(t),i!==0&&(r=i,e=Cm(t,i))),e===1)throw n=jl,ls(t,0),ti(t,r),on(t,Ze()),n;if(e===6)ti(t,r);else{if(i=t.current.alternate,!(r&30)&&!dN(i)&&(e=Ih(t,r),e===2&&(s=Xp(t),s!==0&&(r=s,e=Cm(t,s))),e===1))throw n=jl,ls(t,0),ti(t,r),on(t,Ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Qi(t,Zt,gr);break;case 3:if(ti(t,r),(r&130023424)===r&&(e=i_+500-Ze(),10<e)){if(sh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sm(Qi.bind(null,t,Zt,gr),e);break}Qi(t,Zt,gr);break;case 4:if(ti(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hN(r/1960))-r,10<r){t.timeoutHandle=sm(Qi.bind(null,t,Zt,gr),r);break}Qi(t,Zt,gr);break;case 5:Qi(t,Zt,gr);break;default:throw Error(U(329))}}}return on(t,Ze()),t.callbackNode===n?PS.bind(null,t):null}function Cm(t,e){var n=ll;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=Ih(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&km(e)),t}function km(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function dN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ti(t,e){for(e&=~r_,e&=~gd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),r=1<<n;t[n]=-1,e&=~r}}function Zw(t){if(me&6)throw Error(U(327));To();var e=sh(t,0);if(!(e&1))return on(t,Ze()),null;var n=Ih(t,e);if(t.tag!==0&&n===2){var r=Xp(t);r!==0&&(e=r,n=Cm(t,r))}if(n===1)throw n=jl,ls(t,0),ti(t,e),on(t,Ze()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qi(t,Zt,gr),on(t,Ze()),null}function s_(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Lo=Ze()+500,dd&&Li())}}function _s(t){oi!==null&&oi.tag===0&&!(me&6)&&To();var e=me;me|=1;var n=Sn.transition,r=we;try{if(Sn.transition=null,we=1,t)return t()}finally{we=r,Sn.transition=n,me=e,!(me&6)&&Li()}}function o_(){cn=po.current,Oe(po)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zP(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(Ug(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ch();break;case 3:Do(),Oe(rn),Oe(Wt),Qg();break;case 5:Kg(r);break;case 4:Do();break;case 13:Oe(Be);break;case 19:Oe(Be);break;case 10:$g(r.type._context);break;case 22:case 23:o_()}n=n.return}if(wt=t,rt=t=_i(t.current,null),Rt=cn=e,ht=0,jl=null,r_=gd=gs=0,Zt=ll=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}es=null}return t}function NS(t,e){do{var n=rt;try{if(Wg(),Fc.current=vh,yh){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yh=!1}if(ms=0,gt=ut=$e=null,ol=!1,Ll=0,n_.current=null,n===null||n.return===null){ht=1,jl=e,rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Uw(o);if(v!==null){v.flags&=-257,Bw(v,o,a,s,e),v.mode&1&&Fw(s,c,e),e=v,l=c;var E=e.updateQueue;if(E===null){var A=new Set;A.add(l),e.updateQueue=A}else E.add(l);break e}else{if(!(e&1)){Fw(s,c,e),a_();break e}l=Error(U(426))}}else if(Ve&&a.mode&1){var N=Uw(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Bw(N,o,a,s,e),Bg(Oo(l,a));break e}}s=l=Oo(l,a),ht!==4&&(ht=2),ll===null?ll=[s]:ll.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=pS(s,l,e);Dw(s,I);break e;case 1:a=l;var T=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(mi===null||!mi.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=mS(s,a,e);Dw(s,O);break e}}s=s.return}while(s!==null)}OS(n)}catch(j){e=j,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(!0)}function bS(){var t=wh.current;return wh.current=vh,t===null?vh:t}function a_(){(ht===0||ht===3||ht===2)&&(ht=4),wt===null||!(gs&268435455)&&!(gd&268435455)||ti(wt,Rt)}function Ih(t,e){var n=me;me|=2;var r=bS();(wt!==t||Rt!==e)&&(gr=null,ls(t,e));do try{fN();break}catch(i){NS(t,i)}while(!0);if(Wg(),me=n,wh.current=r,rt!==null)throw Error(U(261));return wt=null,Rt=0,ht}function fN(){for(;rt!==null;)DS(rt)}function pN(){for(;rt!==null&&!F1();)DS(rt)}function DS(t){var e=MS(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?OS(t):rt=e,n_.current=null}function OS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aN(n,e),n!==null){n.flags&=32767,rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ht=6,rt=null;return}}else if(n=oN(n,e,cn),n!==null){rt=n;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);ht===0&&(ht=5)}function Qi(t,e,n){var r=we,i=Sn.transition;try{Sn.transition=null,we=1,mN(t,e,n,r)}finally{Sn.transition=i,we=r}return null}function mN(t,e,n,r){do To();while(oi!==null);if(me&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Q1(t,s),t===wt&&(rt=wt=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wc||(wc=!0,VS(ih,function(){return To(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var o=we;we=1;var a=me;me|=4,n_.current=null,uN(t,n),RS(n,t),LP(rm),oh=!!nm,rm=nm=null,t.current=n,cN(n),U1(),me=a,we=o,Sn.transition=s}else t.current=n;if(wc&&(wc=!1,oi=t,Th=i),s=t.pendingLanes,s===0&&(mi=null),W1(n.stateNode),on(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eh)throw Eh=!1,t=Im,Im=null,t;return Th&1&&t.tag!==0&&To(),s=t.pendingLanes,s&1?t===Sm?ul++:(ul=0,Sm=t):ul=0,Li(),null}function To(){if(oi!==null){var t=pI(Th),e=Sn.transition,n=we;try{if(Sn.transition=null,we=16>t?16:t,oi===null)var r=!1;else{if(t=oi,oi=null,Th=0,me&6)throw Error(U(331));var i=me;for(me|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(H=c;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:al(8,h,s)}var f=h.child;if(f!==null)f.return=h,H=f;else for(;H!==null;){h=H;var m=h.sibling,v=h.return;if(CS(h),h===c){H=null;break}if(m!==null){m.return=v,H=m;break}H=v}}}var E=s.alternate;if(E!==null){var A=E.child;if(A!==null){E.child=null;do{var N=A.sibling;A.sibling=null,A=N}while(A!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:al(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var T=t.current;for(H=T;H!==null;){o=H;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,H=C;else e:for(o=T;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:md(9,a)}}catch(j){Ye(a,a.return,j)}if(a===o){H=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,H=O;break e}H=a.return}}if(me=i,Li(),er&&typeof er.onPostCommitFiberRoot=="function")try{er.onPostCommitFiberRoot(ad,t)}catch{}r=!0}return r}finally{we=n,Sn.transition=e}}return!1}function e0(t,e,n){e=Oo(n,e),e=pS(t,e,1),t=pi(t,e,1),e=Kt(),t!==null&&(cu(t,1,e),on(t,e))}function Ye(t,e,n){if(t.tag===3)e0(t,t,n);else for(;e!==null;){if(e.tag===3){e0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mi===null||!mi.has(r))){t=Oo(n,t),t=mS(e,t,1),e=pi(e,t,1),t=Kt(),e!==null&&(cu(e,1,t),on(e,t));break}}e=e.return}}function gN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,wt===t&&(Rt&n)===n&&(ht===4||ht===3&&(Rt&130023424)===Rt&&500>Ze()-i_?ls(t,0):r_|=n),on(t,e)}function LS(t,e){e===0&&(t.mode&1?(e=cc,cc<<=1,!(cc&130023424)&&(cc=4194304)):e=1);var n=Kt();t=Or(t,e),t!==null&&(cu(t,e,n),on(t,n))}function _N(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),LS(t,n)}function yN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),LS(t,n)}var MS;MS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,sN(t,e,n);tn=!!(t.flags&131072)}else tn=!1,Ve&&e.flags&1048576&&UI(e,fh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bc(t,e),t=e.pendingProps;var i=Po(e,Wt.current);Eo(e,n),i=Xg(null,e,r,t,i,n);var s=Jg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(r)?(s=!0,hh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qg(e),i.updater=pd,e.stateNode=i,i._reactInternals=e,dm(e,r,t,n),e=mm(null,e,r,!0,s,n)):(e.tag=0,Ve&&s&&Fg(e),qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=wN(r),t=Ln(r,t),i){case 0:e=pm(null,e,r,t,n);break e;case 1:e=$w(null,e,r,t,n);break e;case 11:e=zw(null,e,r,t,n);break e;case 14:e=Ww(null,e,r,Ln(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),pm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),$w(t,e,r,i,n);case 3:e:{if(vS(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qI(t,e),gh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Oo(Error(U(423)),e),e=Hw(t,e,r,n,i);break e}else if(r!==i){i=Oo(Error(U(424)),e),e=Hw(t,e,r,n,i);break e}else for(hn=fi(e.stateNode.containerInfo.firstChild),fn=e,Ve=!0,Vn=null,n=$I(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(No(),r===i){e=Lr(t,e,n);break e}qt(t,e,r,n)}e=e.child}return e;case 5:return GI(e),t===null&&um(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,im(r,i)?o=null:s!==null&&im(r,s)&&(e.flags|=32),yS(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&um(e),null;case 13:return wS(t,e,n);case 4:return Gg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bo(e,null,r,n):qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),zw(t,e,r,i,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Pe(ph,r._currentValue),r._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===i.children&&!rn.current){e=Lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=kr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Eo(e,n),i=Cn(i),r=r(i),e.flags|=1,qt(t,e,r,n),e.child;case 14:return r=e.type,i=Ln(r,e.pendingProps),i=Ln(r.type,i),Ww(t,e,r,i,n);case 15:return gS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Bc(t,e),e.tag=1,sn(r)?(t=!0,hh(e)):t=!1,Eo(e,n),fS(e,r,i),dm(e,r,i,n),mm(null,e,r,!0,t,n);case 19:return ES(t,e,n);case 22:return _S(t,e,n)}throw Error(U(156,e.tag))};function VS(t,e){return cI(t,e)}function vN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,r){return new vN(t,e,n,r)}function l_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wN(t){if(typeof t=="function")return l_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xg)return 11;if(t===Rg)return 14}return 2}function _i(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $c(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")l_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ro:return us(n.children,i,s,e);case kg:o=8,i|=8;break;case Mp:return t=Tn(12,n,e,i|2),t.elementType=Mp,t.lanes=s,t;case Vp:return t=Tn(13,n,e,i),t.elementType=Vp,t.lanes=s,t;case jp:return t=Tn(19,n,e,i),t.elementType=jp,t.lanes=s,t;case GT:return _d(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case HT:o=10;break e;case qT:o=9;break e;case xg:o=11;break e;case Rg:o=14;break e;case Jr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function us(t,e,n,r){return t=Tn(7,t,r,e),t.lanes=n,t}function _d(t,e,n,r){return t=Tn(22,t,r,e),t.elementType=GT,t.lanes=n,t.stateNode={isHidden:!1},t}function op(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function ap(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bf(0),this.expirationTimes=Bf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function u_(t,e,n,r,i,s,o,a,l){return t=new EN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qg(s),t}function TN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jS(t){if(!t)return Si;t=t._reactInternals;e:{if(Ds(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(sn(n))return jI(t,n,e)}return e}function FS(t,e,n,r,i,s,o,a,l){return t=u_(n,r,!0,t,i,s,o,a,l),t.context=jS(null),n=t.current,r=Kt(),i=gi(n),s=kr(r,i),s.callback=e??null,pi(n,s,i),t.current.lanes=i,cu(t,i,r),on(t,r),t}function yd(t,e,n,r){var i=e.current,s=Kt(),o=gi(i);return n=jS(n),e.context===null?e.context=n:e.pendingContext=n,e=kr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pi(i,e,o),t!==null&&(zn(t,i,o,s),jc(t,i,o)),o}function Sh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function t0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function c_(t,e){t0(t,e),(t=t.alternate)&&t0(t,e)}function IN(){return null}var US=typeof reportError=="function"?reportError:function(t){console.error(t)};function h_(t){this._internalRoot=t}vd.prototype.render=h_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));yd(t,e,null,null)};vd.prototype.unmount=h_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){yd(null,t,null,null)}),e[Dr]=null}};function vd(t){this._internalRoot=t}vd.prototype.unstable_scheduleHydration=function(t){if(t){var e=_I();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ei.length&&e!==0&&e<ei[n].priority;n++);ei.splice(n,0,t),n===0&&vI(t)}};function d_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function n0(){}function SN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Sh(o);s.call(c)}}var o=FS(e,r,t,0,null,!1,!1,"",n0);return t._reactRootContainer=o,t[Dr]=o.current,Pl(t.nodeType===8?t.parentNode:t),_s(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Sh(l);a.call(c)}}var l=u_(t,0,!1,null,null,!1,!1,"",n0);return t._reactRootContainer=l,t[Dr]=l.current,Pl(t.nodeType===8?t.parentNode:t),_s(function(){yd(e,l,n,r)}),l}function Ed(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Sh(o);a.call(l)}}yd(e,o,t,i)}else o=SN(n,e,t,i,r);return Sh(o)}mI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ka(e.pendingLanes);n!==0&&(Ng(e,n|1),on(e,Ze()),!(me&6)&&(Lo=Ze()+500,Li()))}break;case 13:_s(function(){var r=Or(t,1);if(r!==null){var i=Kt();zn(r,t,1,i)}}),c_(t,1)}};bg=function(t){if(t.tag===13){var e=Or(t,134217728);if(e!==null){var n=Kt();zn(e,t,134217728,n)}c_(t,134217728)}};gI=function(t){if(t.tag===13){var e=gi(t),n=Or(t,e);if(n!==null){var r=Kt();zn(n,t,e,r)}c_(t,e)}};_I=function(){return we};yI=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};Kp=function(t,e,n){switch(e){case"input":if(Bp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hd(r);if(!i)throw Error(U(90));QT(r),Bp(r,i)}}}break;case"textarea":XT(t,n);break;case"select":e=n.value,e!=null&&_o(t,!!n.multiple,e,!1)}};iI=s_;sI=_s;var CN={usingClientEntryPoint:!1,Events:[du,ao,hd,nI,rI,s_]},ja={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kN={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lI(t),t===null?null:t.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||IN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{ad=Ec.inject(kN),er=Ec}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CN;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d_(e))throw Error(U(200));return TN(t,e,null,n)};gn.createRoot=function(t,e){if(!d_(t))throw Error(U(299));var n=!1,r="",i=US;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=u_(t,1,!1,null,null,n,!1,r,i),t[Dr]=e.current,Pl(t.nodeType===8?t.parentNode:t),new h_(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=lI(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return _s(t)};gn.hydrate=function(t,e,n){if(!wd(e))throw Error(U(200));return Ed(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!d_(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=US;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=FS(e,null,t,1,n??null,i,!1,s,o),t[Dr]=e.current,Pl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vd(e)};gn.render=function(t,e,n){if(!wd(e))throw Error(U(200));return Ed(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!wd(t))throw Error(U(40));return t._reactRootContainer?(_s(function(){Ed(null,null,t,!1,function(){t._reactRootContainer=null,t[Dr]=null})}),!0):!1};gn.unstable_batchedUpdates=s_;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wd(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Ed(t,e,n,!1,r)};gn.version="18.3.1-next-f1338f8080-20240426";function BS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(BS)}catch(t){console.error(t)}}BS(),BT.exports=gn;var xN=BT.exports,r0=xN;Op.createRoot=r0.createRoot,Op.hydrateRoot=r0.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fl.apply(this,arguments)}var ai;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ai||(ai={}));const i0="popstate";function RN(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Os(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),xm("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:zS(s))}function r(i,s){Td(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return PN(e,n,r,t)}function st(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Td(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AN(){return Math.random().toString(36).substr(2,8)}function s0(t,e){return{usr:t.state,key:t.key,idx:e}}function xm(t,e,n,r){return n===void 0&&(n=null),Fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:n,key:e&&e.key||r||AN()})}function zS(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ai.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Fl({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=ai.Pop;let N=h(),I=N==null?null:N-c;c=N,l&&l({action:a,location:A.location,delta:I})}function m(N,I){a=ai.Push;let T=xm(A.location,N,I);n&&n(T,N),c=h()+1;let C=s0(T,c),O=A.createHref(T);try{o.pushState(C,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&l&&l({action:a,location:A.location,delta:1})}function v(N,I){a=ai.Replace;let T=xm(A.location,N,I);n&&n(T,N),c=h();let C=s0(T,c),O=A.createHref(T);o.replaceState(C,"",O),s&&l&&l({action:a,location:A.location,delta:0})}function E(N){let I=i.location.origin!=="null"?i.location.origin:i.location.href,T=typeof N=="string"?N:zS(N);return T=T.replace(/ $/,"%20"),st(I,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,I)}let A={get action(){return a},get location(){return t(i,o)},listen(N){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(i0,f),l=N,()=>{i.removeEventListener(i0,f),l=null}},createHref(N){return e(i,N)},createURL:E,encodeLocation(N){let I=E(N);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:v,go(N){return o.go(N)}};return A}var o0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(o0||(o0={}));function NN(t,e,n){return n===void 0&&(n="/"),bN(t,e,n)}function bN(t,e,n,r){let i=typeof e=="string"?Os(e):e,s=HS(i.pathname||"/",n);if(s==null)return null;let o=WS(t);DN(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=HN(s);a=zN(o[l],c)}return a}function WS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(st(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=cs([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(st(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),WS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:UN(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of $S(s.path))i(s,o,l)}),e}function $S(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$S(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function DN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:BN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ON=/^:[\w-]+$/,LN=3,MN=2,VN=1,jN=10,FN=-2,a0=t=>t==="*";function UN(t,e){let n=t.split("/"),r=n.length;return n.some(a0)&&(r+=FN),e&&(r+=MN),n.filter(i=>!a0(i)).reduce((i,s)=>i+(ON.test(s)?LN:s===""?VN:jN),r)}function BN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function zN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=WN({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),m=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:cs([s,f.pathname]),pathnameBase:YN(cs([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=cs([s,f.pathnameBase]))}return o}function WN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$N(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:v}=h;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const E=a[f];return v&&!E?c[m]=void 0:c[m]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function $N(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Td(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function HN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Td(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function HS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const qN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,GN=t=>qN.test(t);function KN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Os(t):t,s;if(n)if(GN(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Td(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=l0(n.substring(1),"/"):s=l0(n,e)}else s=e;return{pathname:s,search:XN(r),hash:JN(i)}}function l0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function QN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function qS(t,e){let n=QN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function GS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Os(t):(i=Fl({},t),st(!i.pathname||!i.pathname.includes("?"),lp("?","pathname","search",i)),st(!i.pathname||!i.pathname.includes("#"),lp("#","pathname","hash",i)),st(!i.search||!i.search.includes("#"),lp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=KN(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const cs=t=>t.join("/").replace(/\/\/+/g,"/"),YN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),XN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,JN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ZN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const KS=["post","put","patch","delete"];new Set(KS);const eb=["get",...KS];new Set(eb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ul.apply(this,arguments)}const f_=b.createContext(null),tb=b.createContext(null),pu=b.createContext(null),Id=b.createContext(null),Mi=b.createContext({outlet:null,matches:[],isDataRoute:!1}),QS=b.createContext(null);function mu(){return b.useContext(Id)!=null}function Sd(){return mu()||st(!1),b.useContext(Id).location}function YS(t){b.useContext(pu).static||b.useLayoutEffect(t)}function Pn(){let{isDataRoute:t}=b.useContext(Mi);return t?pb():nb()}function nb(){mu()||st(!1);let t=b.useContext(f_),{basename:e,future:n,navigator:r}=b.useContext(pu),{matches:i}=b.useContext(Mi),{pathname:s}=Sd(),o=JSON.stringify(qS(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return YS(()=>{a.current=!0}),b.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=GS(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:cs([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function XS(){let{matches:t}=b.useContext(Mi),e=t[t.length-1];return e?e.params:{}}function rb(t,e){return ib(t,e)}function ib(t,e,n,r){mu()||st(!1);let{navigator:i}=b.useContext(pu),{matches:s}=b.useContext(Mi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Sd(),h;if(e){var f;let N=typeof e=="string"?Os(e):e;l==="/"||(f=N.pathname)!=null&&f.startsWith(l)||st(!1),h=N}else h=c;let m=h.pathname||"/",v=m;if(l!=="/"){let N=l.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let E=NN(t,{pathname:v}),A=ub(E&&E.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:cs([l,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?l:cs([l,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&A?b.createElement(Id.Provider,{value:{location:Ul({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ai.Pop}},A):A}function sb(){let t=fb(),e=ZN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const ob=b.createElement(sb,null);class ab extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Mi.Provider,{value:this.props.routeContext},b.createElement(QS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lb(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(f_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Mi.Provider,{value:e},r)}function ub(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||st(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:v}=n,E=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||E){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let v,E=!1,A=null,N=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||ob,l&&(c<0&&m===0?(mb("route-fallback"),E=!0,N=null):c===m&&(E=!0,N=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),T=()=>{let C;return v?C=A:E?C=N:f.route.Component?C=b.createElement(f.route.Component,null):f.route.element?C=f.route.element:C=h,b.createElement(lb,{match:f,routeContext:{outlet:h,matches:I,isDataRoute:n!=null},children:C})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?b.createElement(ab,{location:n.location,revalidation:n.revalidation,component:A,error:v,children:T(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):T()},null)}var JS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(JS||{}),ZS=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ZS||{});function cb(t){let e=b.useContext(f_);return e||st(!1),e}function hb(t){let e=b.useContext(tb);return e||st(!1),e}function db(t){let e=b.useContext(Mi);return e||st(!1),e}function eC(t){let e=db(),n=e.matches[e.matches.length-1];return n.route.id||st(!1),n.route.id}function fb(){var t;let e=b.useContext(QS),n=hb(),r=eC();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function pb(){let{router:t}=cb(JS.UseNavigateStable),e=eC(ZS.UseNavigateStable),n=b.useRef(!1);return YS(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ul({fromRouteId:e},s)))},[t,e])}const u0={};function mb(t,e,n){u0[t]||(u0[t]=!0)}function gb(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function tC(t){let{to:e,replace:n,state:r,relative:i}=t;mu()||st(!1);let{future:s,static:o}=b.useContext(pu),{matches:a}=b.useContext(Mi),{pathname:l}=Sd(),c=Pn(),h=GS(e,qS(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(h);return b.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function On(t){st(!1)}function _b(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ai.Pop,navigator:s,static:o=!1,future:a}=t;mu()&&st(!1);let l=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:l,navigator:s,static:o,future:Ul({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Os(r));let{pathname:h="/",search:f="",hash:m="",state:v=null,key:E="default"}=r,A=b.useMemo(()=>{let N=HS(h,l);return N==null?null:{location:{pathname:N,search:f,hash:m,state:v,key:E},navigationType:i}},[l,h,f,m,v,E,i]);return A==null?null:b.createElement(pu.Provider,{value:c},b.createElement(Id.Provider,{children:n,value:A}))}function yb(t){let{children:e,location:n}=t;return rb(Rm(e),n)}new Promise(()=>{});function Rm(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Rm(r.props.children,s));return}r.type!==On&&st(!1),!r.props.index||!r.props.children||st(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Rm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vb="6";try{window.__reactRouterVersion=vb}catch{}const wb="startTransition",c0=g1[wb];function Eb(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=RN({window:i,v5Compat:!0}));let o=s.current,[a,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=b.useCallback(f=>{c&&c0?c0(()=>l(f)):l(f)},[l,c]);return b.useLayoutEffect(()=>o.listen(h),[o,h]),b.useEffect(()=>gb(r),[r]),b.createElement(_b,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var h0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(h0||(h0={}));var d0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(d0||(d0={}));var f0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw ia(e)},ia=function(t){return new Error("Firebase Database ("+nC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},p_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(m=64)),r.push(n[h],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Ib;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ib extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iC=function(t){const e=rC(t);return p_.encodeByteArray(e,!0)},Ch=function(t){return iC(t).replace(/\./g,"")},kh=function(t){try{return p_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){return sC(void 0,t)}function sC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Cb(n)||(t[n]=sC(t[n],e[n]));return t}function Cb(t){return t!=="__proto__"}/**
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
 */function kb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xb=()=>kb().__FIREBASE_DEFAULTS__,Rb=()=>{if(typeof process>"u"||typeof f0>"u")return;const t=f0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ab=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kh(t[1]);return e&&JSON.parse(e)},Cd=()=>{try{return xb()||Rb()||Ab()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oC=t=>{var e,n;return(n=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aC=t=>{const e=oC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lC=()=>{var t;return(t=Cd())===null||t===void 0?void 0:t.config},uC=t=>{var e;return(e=Cd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ch(JSON.stringify(n)),Ch(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function m_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function Pb(){var t;const e=(t=Cd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Db(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ob(){return nC.NODE_ADMIN===!0}function Lb(){return!Pb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dC(){try{return typeof indexedDB=="object"}catch{return!1}}function fC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Mb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="FirebaseError";class lr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Vb,Object.setPrototypeOf(this,lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new lr(i,a,r)}}function jb(t,e){return t.replace(Fb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Fb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){return JSON.parse(t)}function ct(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Bl(kh(s[0])||""),n=Bl(kh(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Ub=function(t){const e=pC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Bb=function(t){const e=pC(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Mo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rh(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Vo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(p0(s)&&p0(o)){if(!Vo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function p0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const m=(i<<5|i>>>27)+c+l+h+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Wb(t,e){const n=new $b(t,e);return n.subscribe.bind(n)}class $b{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Hb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=up),i.error===void 0&&(i.error=up),i.complete===void 0&&(i.complete=up);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function up(){}function jo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ve(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yi="[DEFAULT]";/**
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
 */class Gb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qb(e))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yi){return this.instances.has(e)}getOptions(e=Yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yi){return this.component?this.component.multipleInstances?e:Yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kb(t){return t===Yi?void 0:t}function Qb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Yb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const Xb={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Jb=de.INFO,Zb={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},e2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Zb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xd{constructor(e){this.name=e,this._logLevel=Jb,this._logHandler=e2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const t2=(t,e)=>e.some(n=>t instanceof n);let m0,g0;function n2(){return m0||(m0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function r2(){return g0||(g0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mC=new WeakMap,Am=new WeakMap,gC=new WeakMap,cp=new WeakMap,g_=new WeakMap;function i2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mC.set(n,t)}).catch(()=>{}),g_.set(e,t),e}function s2(t){if(Am.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Am.set(t,e)}let Pm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Am.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function o2(t){Pm=t(Pm)}function a2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hp(this),e,...n);return gC.set(r,e.sort?e.sort():[e]),xr(r)}:r2().includes(t)?function(...e){return t.apply(hp(this),e),xr(mC.get(this))}:function(...e){return xr(t.apply(hp(this),e))}}function l2(t){return typeof t=="function"?a2(t):(t instanceof IDBTransaction&&s2(t),t2(t,n2())?new Proxy(t,Pm):t)}function xr(t){if(t instanceof IDBRequest)return i2(t);if(cp.has(t))return cp.get(t);const e=l2(t);return e!==t&&(cp.set(t,e),g_.set(e,t)),e}const hp=t=>g_.get(t);function Rd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xr(o.result),l.oldVersion,l.newVersion,xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function dp(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),xr(n).then(()=>{})}const u2=["get","getKey","getAll","getAllKeys","count"],c2=["put","add","delete","clear"],fp=new Map;function _0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fp.get(e))return fp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=c2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||u2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return fp.set(e,s),s}o2(t=>({...t,get:(e,n,r)=>_0(e,n)||t.get(e,n,r),has:(e,n)=>!!_0(e,n)||t.has(e,n)}));/**
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
 */class h2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(d2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function d2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nm="@firebase/app",y0="0.10.13";/**
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
 */const Mr=new xd("@firebase/app"),f2="@firebase/app-compat",p2="@firebase/analytics-compat",m2="@firebase/analytics",g2="@firebase/app-check-compat",_2="@firebase/app-check",y2="@firebase/auth",v2="@firebase/auth-compat",w2="@firebase/database",E2="@firebase/data-connect",T2="@firebase/database-compat",I2="@firebase/functions",S2="@firebase/functions-compat",C2="@firebase/installations",k2="@firebase/installations-compat",x2="@firebase/messaging",R2="@firebase/messaging-compat",A2="@firebase/performance",P2="@firebase/performance-compat",N2="@firebase/remote-config",b2="@firebase/remote-config-compat",D2="@firebase/storage",O2="@firebase/storage-compat",L2="@firebase/firestore",M2="@firebase/vertexai-preview",V2="@firebase/firestore-compat",j2="firebase",F2="10.14.1";/**
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
 */const bm="[DEFAULT]",U2={[Nm]:"fire-core",[f2]:"fire-core-compat",[m2]:"fire-analytics",[p2]:"fire-analytics-compat",[_2]:"fire-app-check",[g2]:"fire-app-check-compat",[y2]:"fire-auth",[v2]:"fire-auth-compat",[w2]:"fire-rtdb",[E2]:"fire-data-connect",[T2]:"fire-rtdb-compat",[I2]:"fire-fn",[S2]:"fire-fn-compat",[C2]:"fire-iid",[k2]:"fire-iid-compat",[x2]:"fire-fcm",[R2]:"fire-fcm-compat",[A2]:"fire-perf",[P2]:"fire-perf-compat",[N2]:"fire-rc",[b2]:"fire-rc-compat",[D2]:"fire-gcs",[O2]:"fire-gcs-compat",[L2]:"fire-fst",[V2]:"fire-fst-compat",[M2]:"fire-vertex","fire-js":"fire-js",[j2]:"fire-js-all"};/**
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
 */const Ah=new Map,B2=new Map,Dm=new Map;function v0(t,e){try{t.container.addComponent(e)}catch(n){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gn(t){const e=t.name;if(Dm.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Dm.set(e,t);for(const n of Ah.values())v0(n,t);for(const n of B2.values())v0(n,t);return!0}function Ms(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Fn(t){return t.settings!==void 0}/**
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
 */const z2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new Ls("app","Firebase",z2);/**
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
 */class W2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=F2;function _C(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yi.create("bad-app-name",{appName:String(i)});if(n||(n=lC()),!n)throw yi.create("no-options");const s=Ah.get(i);if(s){if(Vo(n,s.options)&&Vo(r,s.config))return s;throw yi.create("duplicate-app",{appName:i})}const o=new Yb(i);for(const l of Dm.values())o.addComponent(l);const a=new W2(n,r,o);return Ah.set(i,a),a}function Ad(t=bm){const e=Ah.get(t);if(!e&&t===bm&&lC())return _C();if(!e)throw yi.create("no-app",{appName:t});return e}function an(t,e,n){var r;let i=(r=U2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(a.join(" "));return}Gn(new xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $2="firebase-heartbeat-database",H2=1,zl="firebase-heartbeat-store";let pp=null;function yC(){return pp||(pp=Rd($2,H2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zl)}catch(n){console.warn(n)}}}}).catch(t=>{throw yi.create("idb-open",{originalErrorMessage:t.message})})),pp}async function q2(t){try{const n=(await yC()).transaction(zl),r=await n.objectStore(zl).get(vC(t));return await n.done,r}catch(e){if(e instanceof lr)Mr.warn(e.message);else{const n=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(n.message)}}}async function w0(t,e){try{const r=(await yC()).transaction(zl,"readwrite");await r.objectStore(zl).put(e,vC(t)),await r.done}catch(n){if(n instanceof lr)Mr.warn(n.message);else{const r=yi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mr.warn(r.message)}}}function vC(t){return`${t.name}!${t.options.appId}`}/**
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
 */const G2=1024,K2=30*24*60*60*1e3;class Q2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new X2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=E0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=K2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=E0(),{heartbeatsToSend:r,unsentEntries:i}=Y2(this._heartbeatsCache.heartbeats),s=Ch(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mr.warn(n),""}}}function E0(){return new Date().toISOString().substring(0,10)}function Y2(t,e=G2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),T0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),T0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class X2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dC()?fC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await q2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return w0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return w0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function T0(t){return Ch(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function J2(t){Gn(new xn("platform-logger",e=>new h2(e),"PRIVATE")),Gn(new xn("heartbeat",e=>new Q2(e),"PRIVATE")),an(Nm,y0,t),an(Nm,y0,"esm2017"),an("fire-js","")}J2("");function __(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function wC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Z2=wC,EC=new Ls("auth","Firebase",wC());/**
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
 */const Ph=new xd("@firebase/auth");function eD(t,...e){Ph.logLevel<=de.WARN&&Ph.warn(`Auth (${Vs}): ${t}`,...e)}function Hc(t,...e){Ph.logLevel<=de.ERROR&&Ph.error(`Auth (${Vs}): ${t}`,...e)}/**
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
 */function Rn(t,...e){throw v_(t,...e)}function Wn(t,...e){return v_(t,...e)}function y_(t,e,n){const r=Object.assign(Object.assign({},Z2()),{[e]:n});return new Ls("auth","Firebase",r).create(e,{appName:t.name})}function Rr(t){return y_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rn(t,"argument-error"),y_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function v_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return EC.create(t,...e)}function ne(t,e,...n){if(!t)throw v_(e,...n)}function Tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hc(e),new Error(e)}function Vr(t,e){t||Tr(e)}/**
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
 */function Om(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nD(){return I0()==="http:"||I0()==="https:"}function I0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nD()||bb()||"connection"in navigator)?navigator.onLine:!0}function iD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vr(n>e,"Short delay should be less than long delay!"),this.isMobile=m_()||hC()}get(){return rD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function w_(t,e){Vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class TC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oD=new gu(3e4,6e4);function Vi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wr(t,e,n,r,i={}){return IC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=sa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return Nb()||(c.referrerPolicy="no-referrer"),TC.fetch()(SC(t,t.config.apiHost,n,a),c)})}async function IC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sD),e);try{const i=new lD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Tc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Tc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw y_(t,h,c);Rn(t,h)}}catch(i){if(i instanceof lr)throw i;Rn(t,"network-request-failed",{message:String(i)})}}async function _u(t,e,n,r,i={}){const s=await Wr(t,e,n,r,i);return"mfaPendingCredential"in s&&Rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function SC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?w_(t.config,i):`${t.config.apiScheme}://${i}`}function aD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wn(this.auth,"network-request-failed")),oD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wn(t,e,r);return i.customData._tokenResponse=n,i}function S0(t){return t!==void 0&&t.enterprise!==void 0}class uD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return aD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cD(t,e){return Wr(t,"GET","/v2/recaptchaConfig",Vi(t,e))}/**
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
 */async function hD(t,e){return Wr(t,"POST","/v1/accounts:delete",e)}async function CC(t,e){return Wr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function cl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dD(t,e=!1){const n=ve(t),r=await n.getIdToken(e),i=E_(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cl(mp(i.auth_time)),issuedAtTime:cl(mp(i.iat)),expirationTime:cl(mp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mp(t){return Number(t)*1e3}function E_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hc("JWT malformed, contained fewer than 3 sections"),null;try{const i=kh(n);return i?JSON.parse(i):(Hc("Failed to decode base64 JWT payload"),null)}catch(i){return Hc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function C0(t){const e=E_(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof lr&&fD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cl(this.lastLoginAt),this.creationTime=cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fo(t,CC(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kC(s.providerUserInfo):[],a=gD(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function mD(t){const e=ve(t);await Nh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kC(t){return t.map(e=>{var{providerId:n}=e,r=__(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _D(t,e){const n=await IC(t,{},async()=>{const r=sa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=SC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",TC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yD(t,e){return Wr(t,"POST","/v2/accounts:revokeToken",Vi(t,e))}/**
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
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):C0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=C0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _D(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Io;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
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
 */function Xr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ir{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=__(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fo(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dD(this,e)}reload(){return mD(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fn(this.auth.app))return Promise.reject(Rr(this.auth));const e=await this.getIdToken();return await Fo(this,hD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:O,isAnonymous:j,providerData:M,stsTokenManager:S}=n;ne(C&&S,e,"internal-error");const y=Io.fromJSON(this.name,S);ne(typeof C=="string",e,"internal-error"),Xr(f,e.name),Xr(m,e.name),ne(typeof O=="boolean",e,"internal-error"),ne(typeof j=="boolean",e,"internal-error"),Xr(v,e.name),Xr(E,e.name),Xr(A,e.name),Xr(N,e.name),Xr(I,e.name),Xr(T,e.name);const k=new Ir({uid:C,auth:e,email:m,emailVerified:O,displayName:f,isAnonymous:j,photoURL:E,phoneNumber:v,tenantId:A,stsTokenManager:y,createdAt:I,lastLoginAt:T});return M&&Array.isArray(M)&&(k.providerData=M.map(w=>Object.assign({},w))),N&&(k._redirectEventId=N),k}static async _fromIdTokenResponse(e,n,r=!1){const i=new Io;i.updateFromServerResponse(n);const s=new Ir({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?kC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Io;a.updateFromIdToken(r);const l=new Ir({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const k0=new Map;function Sr(t){Vr(t instanceof Function,"Expected a class definition");let e=k0.get(t);return e?(Vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,k0.set(t,e),e)}/**
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
 */class xC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xC.type="NONE";const x0=xC;/**
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
 */function qc(t,e,n){return`firebase:${t}:${e}:${n}`}class So{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qc(this.userKey,i.apiKey,s),this.fullPersistenceKey=qc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new So(Sr(x0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Sr(x0);const o=qc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Ir._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new So(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new So(s,e,r))}}/**
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
 */function R0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DC(e))return"Blackberry";if(OC(e))return"Webos";if(AC(e))return"Safari";if((e.includes("chrome/")||PC(e))&&!e.includes("edge/"))return"Chrome";if(bC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RC(t=$t()){return/firefox\//i.test(t)}function AC(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PC(t=$t()){return/crios\//i.test(t)}function NC(t=$t()){return/iemobile/i.test(t)}function bC(t=$t()){return/android/i.test(t)}function DC(t=$t()){return/blackberry/i.test(t)}function OC(t=$t()){return/webos/i.test(t)}function T_(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vD(t=$t()){var e;return T_(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wD(){return Db()&&document.documentMode===10}function LC(t=$t()){return T_(t)||bC(t)||OC(t)||DC(t)||/windows phone/i.test(t)||NC(t)}/**
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
 */function MC(t,e=[]){let n;switch(t){case"Browser":n=R0($t());break;case"Worker":n=`${R0($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
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
 */class ED{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function TD(t,e={}){return Wr(t,"GET","/v2/passwordPolicy",Vi(t,e))}/**
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
 */const ID=6;class SD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ID,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class CD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new A0(this),this.idTokenSubscription=new A0(this),this.beforeStateQueue=new ED(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=EC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await So.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await CC(this,{idToken:e}),r=await Ir._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fn(this.app))return Promise.reject(Rr(this));const n=e?ve(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fn(this.app)?Promise.reject(Rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fn(this.app)?Promise.reject(Rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TD(this),n=new SD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ls("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sr(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await So.create(this,[Sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=MC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ji(t){return ve(t)}class A0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wb(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kD(t){Pd=t}function VC(t){return Pd.loadJS(t)}function xD(){return Pd.recaptchaEnterpriseScript}function RD(){return Pd.gapiScript}function AD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const PD="recaptcha-enterprise",ND="NO_RECAPTCHA";class bD{constructor(e){this.type=PD,this.auth=ji(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{cD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new uD(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;S0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ND)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&S0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=xD();l.length!==0&&(l+=a),VC(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function P0(t,e,n,r=!1){const i=new bD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Mm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await P0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await P0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function DD(t,e){const n=Ms(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vo(s,e??{}))return i;Rn(i,"already-initialized")}return n.initialize({options:e})}function OD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function LD(t,e,n){const r=ji(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=jC(e),{host:o,port:a}=MD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),VD()}function jC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MD(t){const e=jC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:N0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:N0(o)}}}function N0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class I_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,n){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}async function jD(t,e){return Wr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function FD(t,e){return _u(t,"POST","/v1/accounts:signInWithPassword",Vi(t,e))}/**
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
 */async function UD(t,e){return _u(t,"POST","/v1/accounts:signInWithEmailLink",Vi(t,e))}async function BD(t,e){return _u(t,"POST","/v1/accounts:signInWithEmailLink",Vi(t,e))}/**
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
 */class Wl extends I_{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mm(e,n,"signInWithPassword",FD);case"emailLink":return UD(e,{email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mm(e,r,"signUpPassword",jD);case"emailLink":return BD(e,{idToken:n,email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Co(t,e){return _u(t,"POST","/v1/accounts:signInWithIdp",Vi(t,e))}/**
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
 */const zD="http://localhost";class ys extends I_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=__(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ys(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Co(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Co(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Co(e,n)}buildRequest(){const e={requestUri:zD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sa(n)}return e}}/**
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
 */function WD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $D(t){const e=Ya(Xa(t)).link,n=e?Ya(Xa(e)).deep_link_id:null,r=Ya(Xa(t)).deep_link_id;return(r?Ya(Xa(r)).link:null)||r||n||e||t}class S_{constructor(e){var n,r,i,s,o,a;const l=Ya(Xa(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=WD((i=l.mode)!==null&&i!==void 0?i:null);ne(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$D(e);try{return new S_(n)}catch{return null}}}/**
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
 */class oa{constructor(){this.providerId=oa.PROVIDER_ID}static credential(e,n){return Wl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=S_.parseLink(n);return ne(r,"argument-error"),Wl._fromEmailAndCode(e,r.code,r.tenantId)}}oa.PROVIDER_ID="password";oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class C_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yu extends C_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ni extends yu{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";ni.PROVIDER_ID="facebook.com";/**
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
 */class vr extends yu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
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
 */class ri extends yu{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
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
 */class ii extends yu{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ii.credential(n,r)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
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
 */async function HD(t,e){return _u(t,"POST","/v1/accounts:signUp",Vi(t,e))}/**
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
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ir._fromIdTokenResponse(e,r,i),o=b0(r);return new vs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=b0(r);return new vs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function b0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bh extends lr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bh(e,n,r,i)}}function FC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bh._fromErrorAndOperation(t,s,e,r):s})}async function qD(t,e,n=!1){const r=await Fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
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
 */async function GD(t,e,n=!1){const{auth:r}=t;if(Fn(r.app))return Promise.reject(Rr(r));const i="reauthenticate";try{const s=await Fo(t,FC(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=E_(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),vs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rn(r,"user-mismatch"),s}}/**
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
 */async function UC(t,e,n=!1){if(Fn(t.app))return Promise.reject(Rr(t));const r="signIn",i=await FC(t,r,e),s=await vs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function KD(t,e){return UC(ji(t),e)}/**
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
 */async function BC(t){const e=ji(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QD(t,e,n){if(Fn(t.app))return Promise.reject(Rr(t));const r=ji(t),o=await Mm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&BC(t),l}),a=await vs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function YD(t,e,n){return Fn(t.app)?Promise.reject(Rr(t)):KD(ve(t),oa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&BC(t),r})}/**
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
 */async function XD(t,e){return Wr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function JD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ve(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fo(r,XD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ZD(t,e,n,r){return ve(t).onIdTokenChanged(e,n,r)}function eO(t,e,n){return ve(t).beforeAuthStateChanged(e,n)}function tO(t,e,n,r){return ve(t).onAuthStateChanged(e,n,r)}function nO(t){return ve(t).signOut()}const Dh="__sak";/**
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
 */class zC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dh,"1"),this.storage.removeItem(Dh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rO=1e3,iO=10;class WC extends zC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=LC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}WC.type="LOCAL";const sO=WC;/**
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
 */class $C extends zC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$C.type="SESSION";const HC=$C;/**
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
 */function oO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await oO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nd.receivers=[];/**
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
 */function k_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=k_("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nr(){return window}function lO(t){nr().location.href=t}/**
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
 */function qC(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function uO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hO(){return qC()?self:null}/**
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
 */const GC="firebaseLocalStorageDb",dO=1,Oh="firebaseLocalStorage",KC="fbase_key";class vu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bd(t,e){return t.transaction([Oh],e?"readwrite":"readonly").objectStore(Oh)}function fO(){const t=indexedDB.deleteDatabase(GC);return new vu(t).toPromise()}function Vm(){const t=indexedDB.open(GC,dO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oh,{keyPath:KC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oh)?e(r):(r.close(),await fO(),e(await Vm()))})})}async function D0(t,e,n){const r=bd(t,!0).put({[KC]:e,value:n});return new vu(r).toPromise()}async function pO(t,e){const n=bd(t,!1).get(e),r=await new vu(n).toPromise();return r===void 0?null:r.value}function O0(t,e){const n=bd(t,!0).delete(e);return new vu(n).toPromise()}const mO=800,gO=3;class QC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nd._getInstance(hO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uO(),!this.activeServiceWorker)return;this.sender=new aO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vm();return await D0(e,Dh,"1"),await O0(e,Dh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>D0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>O0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bd(i,!1).getAll();return new vu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}QC.type="LOCAL";const _O=QC;new gu(3e4,6e4);/**
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
 */function YC(t,e){return e?Sr(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class x_ extends I_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Co(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yO(t){return UC(t.auth,new x_(t),t.bypassAuthState)}function vO(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),GD(n,new x_(t),t.bypassAuthState)}async function wO(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),qD(n,new x_(t),t.bypassAuthState)}/**
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
 */class XC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yO;case"linkViaPopup":case"linkViaRedirect":return wO;case"reauthViaPopup":case"reauthViaRedirect":return vO;default:Rn(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EO=new gu(2e3,1e4);async function TO(t,e,n){if(Fn(t.app))return Promise.reject(Wn(t,"operation-not-supported-in-this-environment"));const r=ji(t);tD(t,e,C_);const i=YC(r,n);return new ns(r,"signInViaPopup",e,i).executeNotNull()}class ns extends XC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=k_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EO.get())};e()}}ns.currentPopupAction=null;/**
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
 */const IO="pendingRedirect",Gc=new Map;class SO extends XC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gc.get(this.auth._key());if(!e){try{const r=await CO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gc.set(this.auth._key(),e)}return this.bypassAuthState||Gc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CO(t,e){const n=RO(e),r=xO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kO(t,e){Gc.set(t._key(),e)}function xO(t){return Sr(t._redirectPersistence)}function RO(t){return qc(IO,t.config.apiKey,t.name)}async function AO(t,e,n=!1){if(Fn(t.app))return Promise.reject(Rr(t));const r=ji(t),i=YC(r,e),o=await new SO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const PO=10*60*1e3;class NO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!JC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PO&&this.cachedEventUids.clear(),this.cachedEventUids.has(L0(e))}saveEventToCache(e){this.cachedEventUids.add(L0(e)),this.lastProcessedEventTime=Date.now()}}function L0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function JC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return JC(t);default:return!1}}/**
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
 */async function DO(t,e={}){return Wr(t,"GET","/v1/projects",e)}/**
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
 */const OO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LO=/^https?/;async function MO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DO(t);for(const n of e)try{if(VO(n))return}catch{}Rn(t,"unauthorized-domain")}function VO(t){const e=Om(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!LO.test(n))return!1;if(OO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jO=new gu(3e4,6e4);function M0(){const t=nr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FO(t){return new Promise((e,n)=>{var r,i,s;function o(){M0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{M0(),n(Wn(t,"network-request-failed"))},timeout:jO.get()})}if(!((i=(r=nr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nr().gapi)===null||s===void 0)&&s.load)o();else{const a=AD("iframefcb");return nr()[a]=()=>{gapi.load?o():n(Wn(t,"network-request-failed"))},VC(`${RD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Kc=null,e})}let Kc=null;function UO(t){return Kc=Kc||FO(t),Kc}/**
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
 */const BO=new gu(5e3,15e3),zO="__/auth/iframe",WO="emulator/auth/iframe",$O={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qO(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?w_(e,WO):`https://${t.config.authDomain}/${zO}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},i=HO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sa(r).slice(1)}`}async function GO(t){const e=await UO(t),n=nr().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:qO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$O,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Wn(t,"network-request-failed"),a=nr().setTimeout(()=>{s(o)},BO.get());function l(){nr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const KO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QO=500,YO=600,XO="_blank",JO="http://localhost";class V0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZO(t,e,n,r=QO,i=YO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},KO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=$t().toLowerCase();n&&(a=PC(c)?XO:n),RC(c)&&(e=e||JO,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[v,E])=>`${m}${v}=${E},`,"");if(vD(c)&&a!=="_self")return eL(e||"",a),new V0(null);const f=window.open(e||"",a,h);ne(f,t,"popup-blocked");try{f.focus()}catch{}return new V0(f)}function eL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tL="__/auth/handler",nL="emulator/auth/handler",rL=encodeURIComponent("fac");async function j0(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:i};if(e instanceof C_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof yu){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${rL}=${encodeURIComponent(l)}`:"";return`${iL(t)}?${sa(a).slice(1)}${c}`}function iL({config:t}){return t.emulator?w_(t,nL):`https://${t.authDomain}/${tL}`}/**
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
 */const gp="webStorageSupport";class sL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=HC,this._completeRedirectFn=AO,this._overrideRedirectResult=kO}async _openPopup(e,n,r,i){var s;Vr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await j0(e,n,r,Om(),i);return ZO(e,o,k_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await j0(e,n,r,Om(),i);return lO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GO(e),r=new NO(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gp,{type:gp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gp];o!==void 0&&n(!!o),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return LC()||AC()||T_()}}const oL=sL;var F0="@firebase/auth",U0="1.7.9";/**
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
 */class aL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uL(t){Gn(new xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:MC(t)},c=new CD(r,i,s,l);return OD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gn(new xn("auth-internal",e=>{const n=ji(e.getProvider("auth").getImmediate());return(r=>new aL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(F0,U0,lL(t)),an(F0,U0,"esm2017")}/**
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
 */const cL=5*60,hL=uC("authIdTokenMaxAge")||cL;let B0=null;const dL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hL)return;const i=n==null?void 0:n.token;B0!==i&&(B0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fL(t=Ad()){const e=Ms(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DD(t,{popupRedirectResolver:oL,persistence:[_O,sO,HC]}),r=uC("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=dL(s.toString());eO(n,o,()=>o(n.currentUser)),ZD(n,a=>o(a))}}const i=oC("auth");return i&&LD(n,`http://${i}`),n}function pL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uL("Browser");var mL="firebase",gL="10.14.1";/**
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
 */an(mL,gL,"app");var z0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hs,ZC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,y){function k(){}k.prototype=y.prototype,S.D=y.prototype,S.prototype=new k,S.prototype.constructor=S,S.C=function(w,P,R){for(var x=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)x[Ie-2]=arguments[Ie];return y.prototype[P].apply(w,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,y,k){k||(k=0);var w=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)w[P]=y.charCodeAt(k++)|y.charCodeAt(k++)<<8|y.charCodeAt(k++)<<16|y.charCodeAt(k++)<<24;else for(P=0;16>P;++P)w[P]=y[k++]|y[k++]<<8|y[k++]<<16|y[k++]<<24;y=S.g[0],k=S.g[1],P=S.g[2];var R=S.g[3],x=y+(R^k&(P^R))+w[0]+3614090360&4294967295;y=k+(x<<7&4294967295|x>>>25),x=R+(P^y&(k^P))+w[1]+3905402710&4294967295,R=y+(x<<12&4294967295|x>>>20),x=P+(k^R&(y^k))+w[2]+606105819&4294967295,P=R+(x<<17&4294967295|x>>>15),x=k+(y^P&(R^y))+w[3]+3250441966&4294967295,k=P+(x<<22&4294967295|x>>>10),x=y+(R^k&(P^R))+w[4]+4118548399&4294967295,y=k+(x<<7&4294967295|x>>>25),x=R+(P^y&(k^P))+w[5]+1200080426&4294967295,R=y+(x<<12&4294967295|x>>>20),x=P+(k^R&(y^k))+w[6]+2821735955&4294967295,P=R+(x<<17&4294967295|x>>>15),x=k+(y^P&(R^y))+w[7]+4249261313&4294967295,k=P+(x<<22&4294967295|x>>>10),x=y+(R^k&(P^R))+w[8]+1770035416&4294967295,y=k+(x<<7&4294967295|x>>>25),x=R+(P^y&(k^P))+w[9]+2336552879&4294967295,R=y+(x<<12&4294967295|x>>>20),x=P+(k^R&(y^k))+w[10]+4294925233&4294967295,P=R+(x<<17&4294967295|x>>>15),x=k+(y^P&(R^y))+w[11]+2304563134&4294967295,k=P+(x<<22&4294967295|x>>>10),x=y+(R^k&(P^R))+w[12]+1804603682&4294967295,y=k+(x<<7&4294967295|x>>>25),x=R+(P^y&(k^P))+w[13]+4254626195&4294967295,R=y+(x<<12&4294967295|x>>>20),x=P+(k^R&(y^k))+w[14]+2792965006&4294967295,P=R+(x<<17&4294967295|x>>>15),x=k+(y^P&(R^y))+w[15]+1236535329&4294967295,k=P+(x<<22&4294967295|x>>>10),x=y+(P^R&(k^P))+w[1]+4129170786&4294967295,y=k+(x<<5&4294967295|x>>>27),x=R+(k^P&(y^k))+w[6]+3225465664&4294967295,R=y+(x<<9&4294967295|x>>>23),x=P+(y^k&(R^y))+w[11]+643717713&4294967295,P=R+(x<<14&4294967295|x>>>18),x=k+(R^y&(P^R))+w[0]+3921069994&4294967295,k=P+(x<<20&4294967295|x>>>12),x=y+(P^R&(k^P))+w[5]+3593408605&4294967295,y=k+(x<<5&4294967295|x>>>27),x=R+(k^P&(y^k))+w[10]+38016083&4294967295,R=y+(x<<9&4294967295|x>>>23),x=P+(y^k&(R^y))+w[15]+3634488961&4294967295,P=R+(x<<14&4294967295|x>>>18),x=k+(R^y&(P^R))+w[4]+3889429448&4294967295,k=P+(x<<20&4294967295|x>>>12),x=y+(P^R&(k^P))+w[9]+568446438&4294967295,y=k+(x<<5&4294967295|x>>>27),x=R+(k^P&(y^k))+w[14]+3275163606&4294967295,R=y+(x<<9&4294967295|x>>>23),x=P+(y^k&(R^y))+w[3]+4107603335&4294967295,P=R+(x<<14&4294967295|x>>>18),x=k+(R^y&(P^R))+w[8]+1163531501&4294967295,k=P+(x<<20&4294967295|x>>>12),x=y+(P^R&(k^P))+w[13]+2850285829&4294967295,y=k+(x<<5&4294967295|x>>>27),x=R+(k^P&(y^k))+w[2]+4243563512&4294967295,R=y+(x<<9&4294967295|x>>>23),x=P+(y^k&(R^y))+w[7]+1735328473&4294967295,P=R+(x<<14&4294967295|x>>>18),x=k+(R^y&(P^R))+w[12]+2368359562&4294967295,k=P+(x<<20&4294967295|x>>>12),x=y+(k^P^R)+w[5]+4294588738&4294967295,y=k+(x<<4&4294967295|x>>>28),x=R+(y^k^P)+w[8]+2272392833&4294967295,R=y+(x<<11&4294967295|x>>>21),x=P+(R^y^k)+w[11]+1839030562&4294967295,P=R+(x<<16&4294967295|x>>>16),x=k+(P^R^y)+w[14]+4259657740&4294967295,k=P+(x<<23&4294967295|x>>>9),x=y+(k^P^R)+w[1]+2763975236&4294967295,y=k+(x<<4&4294967295|x>>>28),x=R+(y^k^P)+w[4]+1272893353&4294967295,R=y+(x<<11&4294967295|x>>>21),x=P+(R^y^k)+w[7]+4139469664&4294967295,P=R+(x<<16&4294967295|x>>>16),x=k+(P^R^y)+w[10]+3200236656&4294967295,k=P+(x<<23&4294967295|x>>>9),x=y+(k^P^R)+w[13]+681279174&4294967295,y=k+(x<<4&4294967295|x>>>28),x=R+(y^k^P)+w[0]+3936430074&4294967295,R=y+(x<<11&4294967295|x>>>21),x=P+(R^y^k)+w[3]+3572445317&4294967295,P=R+(x<<16&4294967295|x>>>16),x=k+(P^R^y)+w[6]+76029189&4294967295,k=P+(x<<23&4294967295|x>>>9),x=y+(k^P^R)+w[9]+3654602809&4294967295,y=k+(x<<4&4294967295|x>>>28),x=R+(y^k^P)+w[12]+3873151461&4294967295,R=y+(x<<11&4294967295|x>>>21),x=P+(R^y^k)+w[15]+530742520&4294967295,P=R+(x<<16&4294967295|x>>>16),x=k+(P^R^y)+w[2]+3299628645&4294967295,k=P+(x<<23&4294967295|x>>>9),x=y+(P^(k|~R))+w[0]+4096336452&4294967295,y=k+(x<<6&4294967295|x>>>26),x=R+(k^(y|~P))+w[7]+1126891415&4294967295,R=y+(x<<10&4294967295|x>>>22),x=P+(y^(R|~k))+w[14]+2878612391&4294967295,P=R+(x<<15&4294967295|x>>>17),x=k+(R^(P|~y))+w[5]+4237533241&4294967295,k=P+(x<<21&4294967295|x>>>11),x=y+(P^(k|~R))+w[12]+1700485571&4294967295,y=k+(x<<6&4294967295|x>>>26),x=R+(k^(y|~P))+w[3]+2399980690&4294967295,R=y+(x<<10&4294967295|x>>>22),x=P+(y^(R|~k))+w[10]+4293915773&4294967295,P=R+(x<<15&4294967295|x>>>17),x=k+(R^(P|~y))+w[1]+2240044497&4294967295,k=P+(x<<21&4294967295|x>>>11),x=y+(P^(k|~R))+w[8]+1873313359&4294967295,y=k+(x<<6&4294967295|x>>>26),x=R+(k^(y|~P))+w[15]+4264355552&4294967295,R=y+(x<<10&4294967295|x>>>22),x=P+(y^(R|~k))+w[6]+2734768916&4294967295,P=R+(x<<15&4294967295|x>>>17),x=k+(R^(P|~y))+w[13]+1309151649&4294967295,k=P+(x<<21&4294967295|x>>>11),x=y+(P^(k|~R))+w[4]+4149444226&4294967295,y=k+(x<<6&4294967295|x>>>26),x=R+(k^(y|~P))+w[11]+3174756917&4294967295,R=y+(x<<10&4294967295|x>>>22),x=P+(y^(R|~k))+w[2]+718787259&4294967295,P=R+(x<<15&4294967295|x>>>17),x=k+(R^(P|~y))+w[9]+3951481745&4294967295,S.g[0]=S.g[0]+y&4294967295,S.g[1]=S.g[1]+(P+(x<<21&4294967295|x>>>11))&4294967295,S.g[2]=S.g[2]+P&4294967295,S.g[3]=S.g[3]+R&4294967295}r.prototype.u=function(S,y){y===void 0&&(y=S.length);for(var k=y-this.blockSize,w=this.B,P=this.h,R=0;R<y;){if(P==0)for(;R<=k;)i(this,S,R),R+=this.blockSize;if(typeof S=="string"){for(;R<y;)if(w[P++]=S.charCodeAt(R++),P==this.blockSize){i(this,w),P=0;break}}else for(;R<y;)if(w[P++]=S[R++],P==this.blockSize){i(this,w),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var y=1;y<S.length-8;++y)S[y]=0;var k=8*this.o;for(y=S.length-8;y<S.length;++y)S[y]=k&255,k/=256;for(this.u(S),S=Array(16),y=k=0;4>y;++y)for(var w=0;32>w;w+=8)S[k++]=this.g[y]>>>w&255;return S};function s(S,y){var k=a;return Object.prototype.hasOwnProperty.call(k,S)?k[S]:k[S]=y(S)}function o(S,y){this.h=y;for(var k=[],w=!0,P=S.length-1;0<=P;P--){var R=S[P]|0;w&&R==y||(k[P]=R,w=!1)}this.g=k}var a={};function l(S){return-128<=S&&128>S?s(S,function(y){return new o([y|0],0>y?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return N(c(-S));for(var y=[],k=1,w=0;S>=k;w++)y[w]=S/k|0,k*=4294967296;return new o(y,0)}function h(S,y){if(S.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S.charAt(0)=="-")return N(h(S.substring(1),y));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=c(Math.pow(y,8)),w=f,P=0;P<S.length;P+=8){var R=Math.min(8,S.length-P),x=parseInt(S.substring(P,P+R),y);8>R?(R=c(Math.pow(y,R)),w=w.j(R).add(c(x))):(w=w.j(k),w=w.add(c(x)))}return w}var f=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-N(this).m();for(var S=0,y=1,k=0;k<this.g.length;k++){var w=this.i(k);S+=(0<=w?w:4294967296+w)*y,y*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(E(this))return"0";if(A(this))return"-"+N(this).toString(S);for(var y=c(Math.pow(S,6)),k=this,w="";;){var P=O(k,y).g;k=I(k,P.j(y));var R=((0<k.g.length?k.g[0]:k.h)>>>0).toString(S);if(k=P,E(k))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function E(S){if(S.h!=0)return!1;for(var y=0;y<S.g.length;y++)if(S.g[y]!=0)return!1;return!0}function A(S){return S.h==-1}t.l=function(S){return S=I(this,S),A(S)?-1:E(S)?0:1};function N(S){for(var y=S.g.length,k=[],w=0;w<y;w++)k[w]=~S.g[w];return new o(k,~S.h).add(m)}t.abs=function(){return A(this)?N(this):this},t.add=function(S){for(var y=Math.max(this.g.length,S.g.length),k=[],w=0,P=0;P<=y;P++){var R=w+(this.i(P)&65535)+(S.i(P)&65535),x=(R>>>16)+(this.i(P)>>>16)+(S.i(P)>>>16);w=x>>>16,R&=65535,x&=65535,k[P]=x<<16|R}return new o(k,k[k.length-1]&-2147483648?-1:0)};function I(S,y){return S.add(N(y))}t.j=function(S){if(E(this)||E(S))return f;if(A(this))return A(S)?N(this).j(N(S)):N(N(this).j(S));if(A(S))return N(this.j(N(S)));if(0>this.l(v)&&0>S.l(v))return c(this.m()*S.m());for(var y=this.g.length+S.g.length,k=[],w=0;w<2*y;w++)k[w]=0;for(w=0;w<this.g.length;w++)for(var P=0;P<S.g.length;P++){var R=this.i(w)>>>16,x=this.i(w)&65535,Ie=S.i(P)>>>16,Z=S.i(P)&65535;k[2*w+2*P]+=x*Z,T(k,2*w+2*P),k[2*w+2*P+1]+=R*Z,T(k,2*w+2*P+1),k[2*w+2*P+1]+=x*Ie,T(k,2*w+2*P+1),k[2*w+2*P+2]+=R*Ie,T(k,2*w+2*P+2)}for(w=0;w<y;w++)k[w]=k[2*w+1]<<16|k[2*w];for(w=y;w<2*y;w++)k[w]=0;return new o(k,0)};function T(S,y){for(;(S[y]&65535)!=S[y];)S[y+1]+=S[y]>>>16,S[y]&=65535,y++}function C(S,y){this.g=S,this.h=y}function O(S,y){if(E(y))throw Error("division by zero");if(E(S))return new C(f,f);if(A(S))return y=O(N(S),y),new C(N(y.g),N(y.h));if(A(y))return y=O(S,N(y)),new C(N(y.g),y.h);if(30<S.g.length){if(A(S)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var k=m,w=y;0>=w.l(S);)k=j(k),w=j(w);var P=M(k,1),R=M(w,1);for(w=M(w,2),k=M(k,2);!E(w);){var x=R.add(w);0>=x.l(S)&&(P=P.add(k),R=x),w=M(w,1),k=M(k,1)}return y=I(S,P.j(y)),new C(P,y)}for(P=f;0<=S.l(y);){for(k=Math.max(1,Math.floor(S.m()/y.m())),w=Math.ceil(Math.log(k)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=c(k),x=R.j(y);A(x)||0<x.l(S);)k-=w,R=c(k),x=R.j(y);E(R)&&(R=m),P=P.add(R),S=I(S,x)}return new C(P,S)}t.A=function(S){return O(this,S).h},t.and=function(S){for(var y=Math.max(this.g.length,S.g.length),k=[],w=0;w<y;w++)k[w]=this.i(w)&S.i(w);return new o(k,this.h&S.h)},t.or=function(S){for(var y=Math.max(this.g.length,S.g.length),k=[],w=0;w<y;w++)k[w]=this.i(w)|S.i(w);return new o(k,this.h|S.h)},t.xor=function(S){for(var y=Math.max(this.g.length,S.g.length),k=[],w=0;w<y;w++)k[w]=this.i(w)^S.i(w);return new o(k,this.h^S.h)};function j(S){for(var y=S.g.length+1,k=[],w=0;w<y;w++)k[w]=S.i(w)<<1|S.i(w-1)>>>31;return new o(k,S.h)}function M(S,y){var k=y>>5;y%=32;for(var w=S.g.length-k,P=[],R=0;R<w;R++)P[R]=0<y?S.i(R+k)>>>y|S.i(R+k+1)<<32-y:S.i(R+k);return new o(P,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ZC=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,hs=o}).apply(typeof z0<"u"?z0:typeof self<"u"?self:typeof window<"u"?window:{});var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ek,Ja,tk,Qc,jm,nk,rk,ik;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,g){return u==Array.prototype||u==Object.prototype||(u[d]=g.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ic=="object"&&Ic];for(var d=0;d<u.length;++d){var g=u[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var g=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var D=u[_];if(!(D in g))break e;g=g[D]}u=u[u.length-1],_=g[u],d=d(_),d!=_&&d!=null&&e(g,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var g=0,_=!1,D={next:function(){if(!_&&g<u.length){var L=g++;return{value:d(L,u[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,g){return u.call.apply(u.bind,arguments)}function f(u,d,g){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),u.apply(d,D)}}return function(){return u.apply(d,arguments)}}function m(u,d,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function v(u,d){var g=Array.prototype.slice.call(arguments,1);return function(){var _=g.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function E(u,d){function g(){}g.prototype=d.prototype,u.aa=d.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(_,D,L){for(var W=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)W[ke-2]=arguments[ke];return d.prototype[D].apply(_,W)}}function A(u){const d=u.length;if(0<d){const g=Array(d);for(let _=0;_<d;_++)g[_]=u[_];return g}return[]}function N(u,d){for(let g=1;g<arguments.length;g++){const _=arguments[g];if(l(_)){const D=u.length||0,L=_.length||0;u.length=D+L;for(let W=0;W<L;W++)u[D+W]=_[W]}else u.push(_)}}class I{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function T(u){return/^[\s\xa0]*$/.test(u)}function C(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var j=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function M(u,d,g){for(const _ in u)d.call(g,u[_],_,u)}function S(u,d){for(const g in u)d.call(void 0,u[g],g,u)}function y(u){const d={};for(const g in u)d[g]=u[g];return d}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(u,d){let g,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(g in _)u[g]=_[g];for(let L=0;L<k.length;L++)g=k[L],Object.prototype.hasOwnProperty.call(_,g)&&(u[g]=_[g])}}function P(u){var d=1;u=u.split(":");const g=[];for(;0<d&&u.length;)g.push(u.shift()),d--;return u.length&&g.push(u.join(":")),g}function R(u){a.setTimeout(()=>{throw u},0)}function x(){var u=Y;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class Ie{constructor(){this.h=this.g=null}add(d,g){const _=Z.get();_.set(d,g),this.h?this.h.next=_:this.g=_,this.h=_}}var Z=new I(()=>new tt,u=>u.reset());class tt{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Dt,z=!1,Y=new Ie,X=()=>{const u=a.Promise.resolve(void 0);Dt=()=>{u.then(G)}};var G=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(g){R(g)}var d=Z;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}z=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var qe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return u}();function Le(u,d){if(oe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(j){e:{try{O(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else g=="mouseover"?d=u.fromElement:g=="mouseout"&&(d=u.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:It[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Le.aa.h.call(this)}}E(Le,oe);var It={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),ae=0;function Qn(u,d,g,_,D){this.listener=u,this.proxy=null,this.src=d,this.type=g,this.capture=!!_,this.ha=D,this.key=++ae,this.da=this.fa=!1}function dt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function hr(u){this.src=u,this.g={},this.h=0}hr.prototype.add=function(u,d,g,_,D){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var W=Ws(u,d,_,D);return-1<W?(d=u[W],g||(d.fa=!1)):(d=new Qn(d,this.src,L,!!_,D),d.fa=g,u.push(d)),d};function yn(u,d){var g=d.type;if(g in u.g){var _=u.g[g],D=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=D)&&Array.prototype.splice.call(_,D,1),L&&(dt(d),u.g[g].length==0&&(delete u.g[g],u.h--))}}function Ws(u,d,g,_){for(var D=0;D<u.length;++D){var L=u[D];if(!L.da&&L.listener==d&&L.capture==!!g&&L.ha==_)return D}return-1}var $s="closure_lm_"+(1e6*Math.random()|0),ma={};function St(u,d,g,_,D){if(Array.isArray(d)){for(var L=0;L<d.length;L++)St(u,d[L],g,_,D);return null}return g=Hs(g),u&&u[lt]?u.K(d,g,c(_)?!!_.capture:!1,D):Hr(u,d,g,!1,_,D)}function Hr(u,d,g,_,D,L){if(!d)throw Error("Invalid event type");var W=c(D)?!!D.capture:!!D,ke=_a(u);if(ke||(u[$s]=ke=new hr(u)),g=ke.add(d,g,_,W,L),g.proxy)return g;if(_=qr(),g.proxy=_,_.src=u,_.listener=g,u.addEventListener)qe||(D=W),D===void 0&&(D=!1),u.addEventListener(d.toString(),_,D);else if(u.attachEvent)u.attachEvent(zu(d.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return g}function qr(){function u(g){return d.call(u.src,u.listener,g)}const d=Ef;return u}function Bu(u,d,g,_,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)Bu(u,d[L],g,_,D);else _=c(_)?!!_.capture:!!_,g=Hs(g),u&&u[lt]?(u=u.i,d=String(d).toString(),d in u.g&&(L=u.g[d],g=Ws(L,g,_,D),-1<g&&(dt(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete u.g[d],u.h--)))):u&&(u=_a(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Ws(d,g,_,D)),(g=-1<u?d[u]:null)&&ga(g))}function ga(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[lt])yn(d.i,u);else{var g=u.type,_=u.proxy;d.removeEventListener?d.removeEventListener(g,_,u.capture):d.detachEvent?d.detachEvent(zu(g),_):d.addListener&&d.removeListener&&d.removeListener(_),(g=_a(d))?(yn(g,u),g.h==0&&(g.src=null,d[$s]=null)):dt(u)}}}function zu(u){return u in ma?ma[u]:ma[u]="on"+u}function Ef(u,d){if(u.da)u=!0;else{d=new Le(d,this);var g=u.listener,_=u.ha||u.src;u.fa&&ga(u),u=g.call(_,d)}return u}function _a(u){return u=u[$s],u instanceof hr?u:null}var ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hs(u){return typeof u=="function"?u:(u[ya]||(u[ya]=function(d){return u.handleEvent(d)}),u[ya])}function Se(){K.call(this),this.i=new hr(this),this.M=this,this.F=null}E(Se,K),Se.prototype[lt]=!0,Se.prototype.removeEventListener=function(u,d,g,_){Bu(this,u,d,g,_)};function ft(u,d){var g,_=u.F;if(_)for(g=[];_;_=_.F)g.push(_);if(u=u.M,_=d.type||d,typeof d=="string")d=new oe(d,u);else if(d instanceof oe)d.target=d.target||u;else{var D=d;d=new oe(_,u),w(d,D)}if(D=!0,g)for(var L=g.length-1;0<=L;L--){var W=d.g=g[L];D=Bi(W,_,!0,d)&&D}if(W=d.g=u,D=Bi(W,_,!0,d)&&D,D=Bi(W,_,!1,d)&&D,g)for(L=0;L<g.length;L++)W=d.g=g[L],D=Bi(W,_,!1,d)&&D}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var g=u.g[d],_=0;_<g.length;_++)dt(g[_]);delete u.g[d],u.h--}}this.F=null},Se.prototype.K=function(u,d,g,_){return this.i.add(String(u),d,!1,g,_)},Se.prototype.L=function(u,d,g,_){return this.i.add(String(u),d,!0,g,_)};function Bi(u,d,g,_){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,L=0;L<d.length;++L){var W=d[L];if(W&&!W.da&&W.capture==g){var ke=W.listener,Ct=W.ha||W.src;W.fa&&yn(u.i,W),D=ke.call(Ct,_)!==!1&&D}}return D&&!_.defaultPrevented}function J(u,d,g){if(typeof u=="function")g&&(u=m(u,g));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function te(u){u.g=J(()=>{u.g=null,u.i&&(u.i=!1,te(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class Ce extends K{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(u){K.call(this),this.h=u,this.g={}}E(Ge,K);var Re=[];function Ke(u){M(u.g,function(d,g){this.g.hasOwnProperty(g)&&ga(d)},u),u.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),Ke(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ot=a.JSON.stringify,Ue=a.JSON.parse,Me=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function dr(){}dr.prototype.h=null;function Wu(u){return u.h||(u.h=u.i())}function sv(){}var va={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tf(){oe.call(this,"d")}E(Tf,oe);function If(){oe.call(this,"c")}E(If,oe);var zi={},ov=null;function $u(){return ov=ov||new Se}zi.La="serverreachability";function av(u){oe.call(this,zi.La,u)}E(av,oe);function wa(u){const d=$u();ft(d,new av(d))}zi.STAT_EVENT="statevent";function lv(u,d){oe.call(this,zi.STAT_EVENT,u),this.stat=d}E(lv,oe);function Ht(u){const d=$u();ft(d,new lv(d,u))}zi.Ma="timingevent";function uv(u,d){oe.call(this,zi.Ma,u),this.size=d}E(uv,oe);function Ea(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function Ta(){this.g=!0}Ta.prototype.xa=function(){this.g=!1};function PA(u,d,g,_,D,L){u.info(function(){if(u.g)if(L)for(var W="",ke=L.split("&"),Ct=0;Ct<ke.length;Ct++){var ge=ke[Ct].split("=");if(1<ge.length){var Lt=ge[0];ge=ge[1];var Mt=Lt.split("_");W=2<=Mt.length&&Mt[1]=="type"?W+(Lt+"="+ge+"&"):W+(Lt+"=redacted&")}}else W=null;else W=L;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+d+`
`+g+`
`+W})}function NA(u,d,g,_,D,L,W){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+d+`
`+g+`
`+L+" "+W})}function qs(u,d,g,_){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+DA(u,g)+(_?" "+_:"")})}function bA(u,d){u.info(function(){return"TIMEOUT: "+d})}Ta.prototype.info=function(){};function DA(u,d){if(!u.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var _=g[u];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return Ot(g)}catch{return d}}var Hu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sf;function qu(){}E(qu,dr),qu.prototype.g=function(){return new XMLHttpRequest},qu.prototype.i=function(){return{}},Sf=new qu;function Gr(u,d,g,_){this.j=u,this.i=d,this.l=g,this.R=_||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hv}function hv(){this.i=null,this.g="",this.h=!1}var dv={},Cf={};function kf(u,d,g){u.L=1,u.v=Yu(fr(d)),u.m=g,u.P=!0,fv(u,null)}function fv(u,d){u.F=Date.now(),Gu(u),u.A=fr(u.v);var g=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),xv(g.i,"t",_),u.C=0,g=u.j.J,u.h=new hv,u.g=Hv(u.j,g?d:null,!u.m),0<u.O&&(u.M=new Ce(m(u.Y,u,u.g),u.O)),d=u.U,g=u.g,_=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(Re[0]=D.toString()),D=Re);for(var L=0;L<D.length;L++){var W=St(g,D[L],_||d.handleEvent,!1,d.h||d);if(!W)break;d.g[W.key]=W}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),wa(),PA(u.i,u.u,u.A,u.l,u.R,u.m)}Gr.prototype.ca=function(u){u=u.target;const d=this.M;d&&pr(u)==3?d.j():this.Y(u)},Gr.prototype.Y=function(u){try{if(u==this.g)e:{const Mt=pr(this.g);var d=this.g.Ba();const Qs=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||Ov(this.g)))){this.J||Mt!=4||d==7||(d==8||0>=Qs?wa(3):wa(2)),xf(this);var g=this.g.Z();this.X=g;t:if(pv(this)){var _=Ov(this.g);u="";var D=_.length,L=pr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wi(this),Ia(this);var W="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,u+=this.h.i.decode(_[d],{stream:!(L&&d==D-1)});_.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=g==200,NA(this.i,this.u,this.A,this.l,this.R,Mt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Ct=this.g;if((ke=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(ke)){var ge=ke;break t}}ge=null}if(g=ge)qs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rf(this,g);else{this.o=!1,this.s=3,Ht(12),Wi(this),Ia(this);break e}}if(this.P){g=!0;let bn;for(;!this.J&&this.C<W.length;)if(bn=OA(this,W),bn==Cf){Mt==4&&(this.s=4,Ht(14),g=!1),qs(this.i,this.l,null,"[Incomplete Response]");break}else if(bn==dv){this.s=4,Ht(15),qs(this.i,this.l,W,"[Invalid Chunk]"),g=!1;break}else qs(this.i,this.l,bn,null),Rf(this,bn);if(pv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||W.length!=0||this.h.h||(this.s=1,Ht(16),g=!1),this.o=this.o&&g,!g)qs(this.i,this.l,W,"[Invalid Chunked Response]"),Wi(this),Ia(this);else if(0<W.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Of(Lt),Lt.M=!0,Ht(11))}}else qs(this.i,this.l,W,null),Rf(this,W);Mt==4&&Wi(this),this.o&&!this.J&&(Mt==4?Bv(this.j,this):(this.o=!1,Gu(this)))}else XA(this.g),g==400&&0<W.indexOf("Unknown SID")?(this.s=3,Ht(12)):(this.s=0,Ht(13)),Wi(this),Ia(this)}}}catch{}finally{}};function pv(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function OA(u,d){var g=u.C,_=d.indexOf(`
`,g);return _==-1?Cf:(g=Number(d.substring(g,_)),isNaN(g)?dv:(_+=1,_+g>d.length?Cf:(d=d.slice(_,_+g),u.C=_+g,d)))}Gr.prototype.cancel=function(){this.J=!0,Wi(this)};function Gu(u){u.S=Date.now()+u.I,mv(u,u.I)}function mv(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ea(m(u.ba,u),d)}function xf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Gr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(bA(this.i,this.A),this.L!=2&&(wa(),Ht(17)),Wi(this),this.s=2,Ia(this)):mv(this,this.S-u)};function Ia(u){u.j.G==0||u.J||Bv(u.j,u)}function Wi(u){xf(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,Ke(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function Rf(u,d){try{var g=u.j;if(g.G!=0&&(g.g==u||Af(g.h,u))){if(!u.K&&Af(g.h,u)&&g.G==3){try{var _=g.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)nc(g),ec(g);else break e;Df(g),Ht(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=Ea(m(g.Za,g),6e3));if(1>=yv(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Hi(g,11)}else if((u.K||g.g==u)&&nc(g),!T(d))for(D=g.Da.g.parse(d),d=0;d<D.length;d++){let ge=D[d];if(g.T=ge[0],ge=ge[1],g.G==2)if(ge[0]=="c"){g.K=ge[1],g.ia=ge[2];const Lt=ge[3];Lt!=null&&(g.la=Lt,g.j.info("VER="+g.la));const Mt=ge[4];Mt!=null&&(g.Aa=Mt,g.j.info("SVER="+g.Aa));const Qs=ge[5];Qs!=null&&typeof Qs=="number"&&0<Qs&&(_=1.5*Qs,g.L=_,g.j.info("backChannelRequestTimeoutMs_="+_)),_=g;const bn=u.g;if(bn){const ic=bn.g?bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ic){var L=_.h;L.g||ic.indexOf("spdy")==-1&&ic.indexOf("quic")==-1&&ic.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Pf(L,L.h),L.h=null))}if(_.D){const Lf=bn.g?bn.g.getResponseHeader("X-HTTP-Session-Id"):null;Lf&&(_.ya=Lf,Ne(_.I,_.D,Lf))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),_=g;var W=u;if(_.qa=$v(_,_.J?_.ia:null,_.W),W.K){vv(_.h,W);var ke=W,Ct=_.L;Ct&&(ke.I=Ct),ke.B&&(xf(ke),Gu(ke)),_.g=W}else Fv(_);0<g.i.length&&tc(g)}else ge[0]!="stop"&&ge[0]!="close"||Hi(g,7);else g.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?Hi(g,7):bf(g):ge[0]!="noop"&&g.l&&g.l.ta(ge),g.v=0)}}wa(4)}catch{}}var LA=class{constructor(u,d){this.g=u,this.map=d}};function gv(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _v(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function yv(u){return u.h?1:u.g?u.g.size:0}function Af(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function Pf(u,d){u.g?u.g.add(d):u.h=d}function vv(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}gv.prototype.cancel=function(){if(this.i=wv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function wv(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const g of u.g.values())d=d.concat(g.D);return d}return A(u.i)}function MA(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],g=u.length,_=0;_<g;_++)d.push(u[_]);return d}d=[],g=0;for(_ in u)d[g++]=u[_];return d}function VA(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var g=0;g<u;g++)d.push(g);return d}d=[],g=0;for(const _ in u)d[g++]=_;return d}}}function Ev(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var g=VA(u),_=MA(u),D=_.length,L=0;L<D;L++)d.call(void 0,_[L],g&&g[L],u)}var Tv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jA(u,d){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var _=u[g].indexOf("="),D=null;if(0<=_){var L=u[g].substring(0,_);D=u[g].substring(_+1)}else L=u[g];d(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function $i(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof $i){this.h=u.h,Ku(this,u.j),this.o=u.o,this.g=u.g,Qu(this,u.s),this.l=u.l;var d=u.i,g=new ka;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),Iv(this,g),this.m=u.m}else u&&(d=String(u).match(Tv))?(this.h=!1,Ku(this,d[1]||"",!0),this.o=Sa(d[2]||""),this.g=Sa(d[3]||"",!0),Qu(this,d[4]),this.l=Sa(d[5]||"",!0),Iv(this,d[6]||"",!0),this.m=Sa(d[7]||"")):(this.h=!1,this.i=new ka(null,this.h))}$i.prototype.toString=function(){var u=[],d=this.j;d&&u.push(Ca(d,Sv,!0),":");var g=this.g;return(g||d=="file")&&(u.push("//"),(d=this.o)&&u.push(Ca(d,Sv,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(Ca(g,g.charAt(0)=="/"?BA:UA,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",Ca(g,WA)),u.join("")};function fr(u){return new $i(u)}function Ku(u,d,g){u.j=g?Sa(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Qu(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function Iv(u,d,g){d instanceof ka?(u.i=d,$A(u.i,u.h)):(g||(d=Ca(d,zA)),u.i=new ka(d,u.h))}function Ne(u,d,g){u.i.set(d,g)}function Yu(u){return Ne(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Sa(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ca(u,d,g){return typeof u=="string"?(u=encodeURI(u).replace(d,FA),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function FA(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Sv=/[#\/\?@]/g,UA=/[#\?:]/g,BA=/[#\?]/g,zA=/[#\?@]/g,WA=/#/g;function ka(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Kr(u){u.g||(u.g=new Map,u.h=0,u.i&&jA(u.i,function(d,g){u.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=ka.prototype,t.add=function(u,d){Kr(this),this.i=null,u=Gs(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(d),this.h+=1,this};function Cv(u,d){Kr(u),d=Gs(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function kv(u,d){return Kr(u),d=Gs(u,d),u.g.has(d)}t.forEach=function(u,d){Kr(this),this.g.forEach(function(g,_){g.forEach(function(D){u.call(d,D,_,this)},this)},this)},t.na=function(){Kr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let _=0;_<d.length;_++){const D=u[_];for(let L=0;L<D.length;L++)g.push(d[_])}return g},t.V=function(u){Kr(this);let d=[];if(typeof u=="string")kv(this,u)&&(d=d.concat(this.g.get(Gs(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)d=d.concat(u[g])}return d},t.set=function(u,d){return Kr(this),this.i=null,u=Gs(this,u),kv(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function xv(u,d,g){Cv(u,d),0<g.length&&(u.i=null,u.g.set(Gs(u,d),A(g)),u.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var _=d[g];const L=encodeURIComponent(String(_)),W=this.V(_);for(_=0;_<W.length;_++){var D=L;W[_]!==""&&(D+="="+encodeURIComponent(String(W[_]))),u.push(D)}}return this.i=u.join("&")};function Gs(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function $A(u,d){d&&!u.j&&(Kr(u),u.i=null,u.g.forEach(function(g,_){var D=_.toLowerCase();_!=D&&(Cv(this,_),xv(this,D,g))},u)),u.j=d}function HA(u,d){const g=new Ta;if(a.Image){const _=new Image;_.onload=v(Qr,g,"TestLoadImage: loaded",!0,d,_),_.onerror=v(Qr,g,"TestLoadImage: error",!1,d,_),_.onabort=v(Qr,g,"TestLoadImage: abort",!1,d,_),_.ontimeout=v(Qr,g,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else d(!1)}function qA(u,d){const g=new Ta,_=new AbortController,D=setTimeout(()=>{_.abort(),Qr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:_.signal}).then(L=>{clearTimeout(D),L.ok?Qr(g,"TestPingServer: ok",!0,d):Qr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Qr(g,"TestPingServer: error",!1,d)})}function Qr(u,d,g,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(g)}catch{}}function GA(){this.g=new Me}function KA(u,d,g){const _=g||"";try{Ev(u,function(D,L){let W=D;c(D)&&(W=Ot(D)),d.push(_+L+"="+encodeURIComponent(W))})}catch(D){throw d.push(_+"type="+encodeURIComponent("_badmap")),D}}function Xu(u){this.l=u.Ub||null,this.j=u.eb||!1}E(Xu,dr),Xu.prototype.g=function(){return new Ju(this.l,this.j)},Xu.prototype.i=function(u){return function(){return u}}({});function Ju(u,d){Se.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Ju,Se),t=Ju.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Ra(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xa(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ra(this)),this.g&&(this.readyState=3,Ra(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?xa(this):Ra(this),this.readyState==3&&Rv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,xa(this))},t.Qa=function(u){this.g&&(this.response=u,xa(this))},t.ga=function(){this.g&&xa(this)};function xa(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ra(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=d.next();return u.join(`\r
`)};function Ra(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ju.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Av(u){let d="";return M(u,function(g,_){d+=_,d+=":",d+=g,d+=`\r
`}),d}function Nf(u,d,g){e:{for(_ in g){var _=!1;break e}_=!0}_||(g=Av(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):Ne(u,d,g))}function Qe(u){Se.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Qe,Se);var QA=/^https?$/i,YA=["POST","PUT"];t=Qe.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,g,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sf.g(),this.v=this.o?Wu(this.o):Wu(Sf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(L){Pv(this,L);return}if(u=g||"",g=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)g.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())g.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(YA,d,void 0))||_||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,W]of g)this.g.setRequestHeader(L,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dv(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){Pv(this,L)}};function Pv(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,Nv(u),Zu(u)}function Nv(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),Zu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zu(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?bv(this):this.bb())},t.bb=function(){bv(this)};function bv(u){if(u.h&&typeof o<"u"&&(!u.v[1]||pr(u)!=4||u.Z()!=2)){if(u.u&&pr(u)==4)J(u.Ea,0,u);else if(ft(u,"readystatechange"),pr(u)==4){u.h=!1;try{const W=u.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var _;if(_=W===0){var D=String(u.D).match(Tv)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),_=!QA.test(D?D.toLowerCase():"")}g=_}if(g)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var L=2<pr(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",Nv(u)}}finally{Zu(u)}}}}function Zu(u,d){if(u.g){Dv(u);const g=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||ft(u,"ready");try{g.onreadystatechange=_}catch{}}}function Dv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function pr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<pr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),Ue(d)}};function Ov(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function XA(u){const d={};u=(u.g&&2<=pr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(T(u[_]))continue;var g=P(u[_]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=d[D]||[];d[D]=L,L.push(g)}S(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Aa(u,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||d}function Lv(u){this.Aa=0,this.i=[],this.j=new Ta,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Aa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Aa("baseRetryDelayMs",5e3,u),this.cb=Aa("retryDelaySeedMs",1e4,u),this.Wa=Aa("forwardChannelMaxRetries",2,u),this.wa=Aa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new gv(u&&u.concurrentRequestLimit),this.Da=new GA,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Lv.prototype,t.la=8,t.G=1,t.connect=function(u,d,g,_){Ht(0),this.W=u,this.H=d||{},g&&_!==void 0&&(this.H.OSID=g,this.H.OAID=_),this.F=this.X,this.I=$v(this,null,this.W),tc(this)};function bf(u){if(Mv(u),u.G==3){var d=u.U++,g=fr(u.I);if(Ne(g,"SID",u.K),Ne(g,"RID",d),Ne(g,"TYPE","terminate"),Pa(u,g),d=new Gr(u,u.j,d),d.L=2,d.v=Yu(fr(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=Hv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Gu(d)}Wv(u)}function ec(u){u.g&&(Of(u),u.g.cancel(),u.g=null)}function Mv(u){ec(u),u.u&&(a.clearTimeout(u.u),u.u=null),nc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function tc(u){if(!_v(u.h)&&!u.s){u.s=!0;var d=u.Ga;Dt||X(),z||(Dt(),z=!0),Y.add(d,u),u.B=0}}function JA(u,d){return yv(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ea(m(u.Ga,u,d),zv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new Gr(this,this.j,u);let L=this.o;if(this.S&&(L?(L=y(L),w(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var _=this.i[g];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=jv(this,D,d),g=fr(this.I),Ne(g,"RID",u),Ne(g,"CVER",22),this.D&&Ne(g,"X-HTTP-Session-Id",this.D),Pa(this,g),L&&(this.O?d="headers="+encodeURIComponent(String(Av(L)))+"&"+d:this.m&&Nf(g,this.m,L)),Pf(this.h,D),this.Ua&&Ne(g,"TYPE","init"),this.P?(Ne(g,"$req",d),Ne(g,"SID","null"),D.T=!0,kf(D,g,null)):kf(D,g,d),this.G=2}}else this.G==3&&(u?Vv(this,u):this.i.length==0||_v(this.h)||Vv(this))};function Vv(u,d){var g;d?g=d.l:g=u.U++;const _=fr(u.I);Ne(_,"SID",u.K),Ne(_,"RID",g),Ne(_,"AID",u.T),Pa(u,_),u.m&&u.o&&Nf(_,u.m,u.o),g=new Gr(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),d&&(u.i=d.D.concat(u.i)),d=jv(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Pf(u.h,g),kf(g,_,d)}function Pa(u,d){u.H&&M(u.H,function(g,_){Ne(d,_,g)}),u.l&&Ev({},function(g,_){Ne(d,_,g)})}function jv(u,d,g){g=Math.min(u.i.length,g);var _=u.l?m(u.l.Na,u.l,u):null;e:{var D=u.i;let L=-1;for(;;){const W=["count="+g];L==-1?0<g?(L=D[0].g,W.push("ofs="+L)):L=0:W.push("ofs="+L);let ke=!0;for(let Ct=0;Ct<g;Ct++){let ge=D[Ct].g;const Lt=D[Ct].map;if(ge-=L,0>ge)L=Math.max(0,D[Ct].g-100),ke=!1;else try{KA(Lt,W,"req"+ge+"_")}catch{_&&_(Lt)}}if(ke){_=W.join("&");break e}}}return u=u.i.splice(0,g),d.D=u,_}function Fv(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;Dt||X(),z||(Dt(),z=!0),Y.add(d,u),u.v=0}}function Df(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ea(m(u.Fa,u),zv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Uv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ea(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ht(10),ec(this),Uv(this))};function Of(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Uv(u){u.g=new Gr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=fr(u.qa);Ne(d,"RID","rpc"),Ne(d,"SID",u.K),Ne(d,"AID",u.T),Ne(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ne(d,"TO",u.ja),Ne(d,"TYPE","xmlhttp"),Pa(u,d),u.m&&u.o&&Nf(d,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Yu(fr(d)),g.m=null,g.P=!0,fv(g,u)}t.Za=function(){this.C!=null&&(this.C=null,ec(this),Df(this),Ht(19))};function nc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Bv(u,d){var g=null;if(u.g==d){nc(u),Of(u),u.g=null;var _=2}else if(Af(u.h,d))g=d.D,vv(u.h,d),_=1;else return;if(u.G!=0){if(d.o)if(_==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var D=u.B;_=$u(),ft(_,new uv(_,g)),tc(u)}else Fv(u);else if(D=d.s,D==3||D==0&&0<d.X||!(_==1&&JA(u,d)||_==2&&Df(u)))switch(g&&0<g.length&&(d=u.h,d.i=d.i.concat(g)),D){case 1:Hi(u,5);break;case 4:Hi(u,10);break;case 3:Hi(u,6);break;default:Hi(u,2)}}}function zv(u,d){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*d}function Hi(u,d){if(u.j.info("Error code "+d),d==2){var g=m(u.fb,u),_=u.Xa;const D=!_;_=new $i(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ku(_,"https"),Yu(_),D?HA(_.toString(),g):qA(_.toString(),g)}else Ht(2);u.G=0,u.l&&u.l.sa(d),Wv(u),Mv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function Wv(u){if(u.G=0,u.ka=[],u.l){const d=wv(u.h);(d.length!=0||u.i.length!=0)&&(N(u.ka,d),N(u.ka,u.i),u.h.i.length=0,A(u.i),u.i.length=0),u.l.ra()}}function $v(u,d,g){var _=g instanceof $i?fr(g):new $i(g);if(_.g!="")d&&(_.g=d+"."+_.g),Qu(_,_.s);else{var D=a.location;_=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var L=new $i(null);_&&Ku(L,_),d&&(L.g=d),D&&Qu(L,D),g&&(L.l=g),_=L}return g=u.D,d=u.ya,g&&d&&Ne(_,g,d),Ne(_,"VER",u.la),Pa(u,_),_}function Hv(u,d,g){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Qe(new Xu({eb:g})):new Qe(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qv(){}t=qv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function rc(){}rc.prototype.g=function(u,d){return new un(u,d)};function un(u,d){Se.call(this),this.g=new Lv(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!T(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Ks(this)}E(un,Se),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){bf(this.g)},un.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=Ot(u),u=g);d.i.push(new LA(d.Ya++,u)),d.G==3&&tc(d)},un.prototype.N=function(){this.g.l=null,delete this.j,bf(this.g),delete this.g,un.aa.N.call(this)};function Gv(u){Tf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const g in d){u=g;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}E(Gv,Tf);function Kv(){If.call(this),this.status=1}E(Kv,If);function Ks(u){this.g=u}E(Ks,qv),Ks.prototype.ua=function(){ft(this.g,"a")},Ks.prototype.ta=function(u){ft(this.g,new Gv(u))},Ks.prototype.sa=function(u){ft(this.g,new Kv)},Ks.prototype.ra=function(){ft(this.g,"b")},rc.prototype.createWebChannel=rc.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,ik=function(){return new rc},rk=function(){return $u()},nk=zi,jm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hu.NO_ERROR=0,Hu.TIMEOUT=8,Hu.HTTP_ERROR=6,Qc=Hu,cv.COMPLETE="complete",tk=cv,sv.EventType=va,va.OPEN="a",va.CLOSE="b",va.ERROR="c",va.MESSAGE="d",Se.prototype.listen=Se.prototype.K,Ja=sv,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,ek=Qe}).apply(typeof Ic<"u"?Ic:typeof self<"u"?self:typeof window<"u"?window:{});const W0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ws=new xd("@firebase/firestore");function Fa(){return ws.logLevel}function q(t,...e){if(ws.logLevel<=de.DEBUG){const n=e.map(R_);ws.debug(`Firestore (${aa}): ${t}`,...n)}}function jr(t,...e){if(ws.logLevel<=de.ERROR){const n=e.map(R_);ws.error(`Firestore (${aa}): ${t}`,...n)}}function Es(t,...e){if(ws.logLevel<=de.WARN){const n=e.map(R_);ws.warn(`Firestore (${aa}): ${t}`,...n)}}function R_(t){if(typeof t=="string")return t;try{/**
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${aa}) INTERNAL ASSERTION FAILED: `+t;throw jr(e),new Error(e)}function Ee(t,e){t||re()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends lr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ok{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ut.UNAUTHENTICATED))}shutdown(){}}class _L{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yL{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new sk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Ut(e)}}class vL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ee(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new EL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function IL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=IL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Uo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new ot(0,0))}static max(){return new ie(new ot(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $l.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $l?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends $l{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const SL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends $l{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return SL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(De.fromString(e))}static fromName(e){return new Q(De.fromString(e).popFirst(5))}static empty(){return new Q(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new De(e.slice()))}}function CL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new Ci(i,Q.empty(),e)}function kL(t){return new Ci(t.readTime,t.key,-1)}class Ci{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ci(ie.min(),Q.empty(),-1)}static max(){return new Ci(ie.max(),Q.empty(),-1)}}function xL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const RL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==RL)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function PL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Eu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class P_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}P_.oe=-1;function Dd(t){return t==null}function Lh(t){return t===0&&1/t==-1/0}function NL(t){return typeof t=="number"&&Number.isInteger(t)&&!Lh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ak(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let at=class Fm{constructor(e,n){this.comparator=e,this.root=n||vi.EMPTY}insert(e,n){return new Fm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vi.BLACK,null,null))}remove(e){return new Fm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sc(this.root,e,this.comparator,!0)}},Sc=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},vi=class mr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mr.RED,this.left=i??mr.EMPTY,this.right=s??mr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new mr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}};vi.EMPTY=null,vi.RED=!0,vi.BLACK=!1;vi.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,s){return this}insert(e,n,r){return new vi(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new H0(this.data.getIterator())}getIteratorFrom(e){return new H0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new At(this.comparator);return n.data=e,n}}class H0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new At(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Uo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lk("Invalid base64 string: "+s):s}}(e);return new Et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const bL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ki(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=bL.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ts(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */function N_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function b_(t){const e=t.mapValue.fields.__previous_value__;return N_(e)?b_(e):e}function Hl(t){const e=ki(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Bo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cc={mapValue:{}};function Is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?N_(t)?4:LL(t)?9007199254740991:OL(t)?10:11:re()}function or(t,e){if(t===e)return!0;const n=Is(t);if(n!==Is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hl(t).isEqual(Hl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ki(i.timestampValue),a=ki(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ts(i.bytesValue).isEqual(Ts(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Je(i.geoPointValue.latitude)===Je(s.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Je(i.integerValue)===Je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Je(i.doubleValue),a=Je(s.doubleValue);return o===a?Lh(o)===Lh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Uo(t.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if($0(o)!==$0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!or(o[l],a[l])))return!1;return!0}(t,e);default:return re()}}function ql(t,e){return(t.values||[]).find(n=>or(n,e))!==void 0}function zo(t,e){if(t===e)return 0;const n=Is(t),r=Is(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Je(s.integerValue||s.doubleValue),l=Je(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return q0(t.timestampValue,e.timestampValue);case 4:return q0(Hl(t),Hl(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ts(s),l=Ts(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=_e(a[c],l[c]);if(h!==0)return h}return _e(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=_e(Je(s.latitude),Je(o.latitude));return a!==0?a:_e(Je(s.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return G0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},m=o.fields||{},v=(a=f.value)===null||a===void 0?void 0:a.arrayValue,E=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=_e(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:G0(v,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Cc.mapValue&&o===Cc.mapValue)return 0;if(s===Cc.mapValue)return 1;if(o===Cc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=_e(l[f],h[f]);if(m!==0)return m;const v=zo(a[l[f]],c[h[f]]);if(v!==0)return v}return _e(l.length,h.length)}(t.mapValue,e.mapValue);default:throw re()}}function q0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=ki(t),r=ki(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function G0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=zo(n[i],r[i]);if(s)return s}return _e(n.length,r.length)}function Wo(t){return Um(t)}function Um(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ki(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Um(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Um(n.fields[o])}`;return i+"}"}(t.mapValue):re()}function K0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bm(t){return!!t&&"integerValue"in t}function D_(t){return!!t&&"arrayValue"in t}function Q0(t){return!!t&&"nullValue"in t}function Y0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yc(t){return!!t&&"mapValue"in t}function OL(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function hl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return js(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hl(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=hl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){js(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new en(hl(this.value))}}function uk(t){const e=[];return js(t.fields,(n,r)=>{const i=new vt([n]);if(Yc(r)){const s=uk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new zt(e,0,ie.min(),ie.min(),ie.min(),en.empty(),0)}static newFoundDocument(e,n,r,i){return new zt(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new zt(e,2,n,ie.min(),ie.min(),en.empty(),0)}static newUnknownDocument(e,n){return new zt(e,3,n,ie.min(),ie.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mh{constructor(e,n){this.position=e,this.inclusive=n}}function X0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=zo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function J0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!or(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gl{constructor(e,n="asc"){this.field=e,this.dir=n}}function ML(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ck{}class it extends ck{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jL(e,n,r):n==="array-contains"?new BL(e,r):n==="in"?new zL(e,r):n==="not-in"?new WL(e,r):n==="array-contains-any"?new $L(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FL(e,r):new UL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zo(n,this.value)):n!==null&&Is(this.value)===Is(n)&&this.matchesComparison(zo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends ck{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kn(e,n)}matches(e){return hk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hk(t){return t.op==="and"}function dk(t){return VL(t)&&hk(t)}function VL(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}function zm(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+Wo(t.value);if(dk(t))return t.filters.map(e=>zm(e)).join(",");{const e=t.filters.map(n=>zm(n)).join(",");return`${t.op}(${e})`}}function fk(t,e){return t instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&or(r.value,i.value)}(t,e):t instanceof Kn?function(r,i){return i instanceof Kn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&fk(o,i.filters[a]),!0):!1}(t,e):void re()}function pk(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${Wo(n.value)}`}(t):t instanceof Kn?function(n){return n.op.toString()+" {"+n.getFilters().map(pk).join(" ,")+"}"}(t):"Filter"}class jL extends it{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class FL extends it{constructor(e,n){super(e,"in",n),this.keys=mk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UL extends it{constructor(e,n){super(e,"not-in",n),this.keys=mk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class BL extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return D_(n)&&ql(n.arrayValue,this.value)}}class zL extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ql(this.value.arrayValue,n)}}class WL extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(ql(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ql(this.value.arrayValue,n)}}class $L extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!D_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ql(this.value.arrayValue,r))}}/**
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
 */class HL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Z0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new HL(t,e,n,r,i,s,o)}function O_(t){const e=se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Dd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wo(r)).join(",")),e.ue=n}return e.ue}function L_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ML(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!J0(t.startAt,e.startAt)&&J0(t.endAt,e.endAt)}function Wm(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qL(t,e,n,r,i,s,o,a){return new la(t,e,n,r,i,s,o,a)}function Od(t){return new la(t)}function eE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gk(t){return t.collectionGroup!==null}function dl(t){const e=se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new At(vt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Gl(s,r))}),n.has(vt.keyField().canonicalString())||e.ce.push(new Gl(vt.keyField(),r))}return e.ce}function rr(t){const e=se(t);return e.le||(e.le=GL(e,dl(t))),e.le}function GL(t,e){if(t.limitType==="F")return Z0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Gl(i.field,s)});const n=t.endAt?new Mh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Mh(t.startAt.position,t.startAt.inclusive):null;return Z0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $m(t,e){const n=t.filters.concat([e]);return new la(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Vh(t,e,n){return new la(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ld(t,e){return L_(rr(t),rr(e))&&t.limitType===e.limitType}function _k(t){return`${O_(rr(t))}|lt:${t.limitType}`}function Zs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>pk(i)).join(", ")}]`),Dd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Wo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Wo(i)).join(",")),`Target(${r})`}(rr(t))}; limitType=${t.limitType})`}function Md(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of dl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=X0(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,dl(r),i)||r.endAt&&!function(o,a,l){const c=X0(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,dl(r),i))}(t,e)}function KL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yk(t){return(e,n)=>{let r=!1;for(const i of dl(t)){const s=QL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function QL(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?zo(l,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ak(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL=new at(Q.comparator);function Fr(){return YL}const vk=new at(Q.comparator);function Za(...t){let e=vk;for(const n of t)e=e.insert(n.key,n);return e}function wk(t){let e=vk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rs(){return fl()}function Ek(){return fl()}function fl(){return new ua(t=>t.toString(),(t,e)=>t.isEqual(e))}const XL=new at(Q.comparator),JL=new At(Q.comparator);function fe(...t){let e=JL;for(const n of t)e=e.add(n);return e}const ZL=new At(_e);function eM(){return ZL}/**
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
 */function M_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lh(e)?"-0":e}}function Tk(t){return{integerValue:""+t}}function Ik(t,e){return NL(e)?Tk(e):M_(t,e)}/**
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
 */class Vd{constructor(){this._=void 0}}function tM(t,e,n){return t instanceof Kl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&N_(s)&&(s=b_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof $o?Ck(t,e):t instanceof Ho?kk(t,e):function(i,s){const o=Sk(i,s),a=tE(o)+tE(i.Pe);return Bm(o)&&Bm(i.Pe)?Tk(a):M_(i.serializer,a)}(t,e)}function nM(t,e,n){return t instanceof $o?Ck(t,e):t instanceof Ho?kk(t,e):n}function Sk(t,e){return t instanceof Ql?function(r){return Bm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Kl extends Vd{}class $o extends Vd{constructor(e){super(),this.elements=e}}function Ck(t,e){const n=xk(e);for(const r of t.elements)n.some(i=>or(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ho extends Vd{constructor(e){super(),this.elements=e}}function kk(t,e){let n=xk(e);for(const r of t.elements)n=n.filter(i=>!or(i,r));return{arrayValue:{values:n}}}class Ql extends Vd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function tE(t){return Je(t.integerValue||t.doubleValue)}function xk(t){return D_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n){this.field=e,this.transform=n}}function rM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof $o&&i instanceof $o||r instanceof Ho&&i instanceof Ho?Uo(r.elements,i.elements,or):r instanceof Ql&&i instanceof Ql?or(r.Pe,i.Pe):r instanceof Kl&&i instanceof Kl}(t.transform,e.transform)}class iM{constructor(e,n){this.version=e,this.transformResults=n}}class $n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fd{}function Rk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Pk(t.key,$n.none()):new Tu(t.key,t.data,$n.none());{const n=t.data,r=en.empty();let i=new At(vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fi(t.key,r,new dn(i.toArray()),$n.none())}}function sM(t,e,n){t instanceof Tu?function(i,s,o){const a=i.value.clone(),l=rE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fi?function(i,s,o){if(!Xc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=rE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Ak(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pl(t,e,n,r){return t instanceof Tu?function(s,o,a,l){if(!Xc(s.precondition,o))return a;const c=s.value.clone(),h=iE(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fi?function(s,o,a,l){if(!Xc(s.precondition,o))return a;const c=iE(s.fieldTransforms,l,o),h=o.data;return h.setAll(Ak(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Xc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function oM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Sk(r.transform,i||null);s!=null&&(n===null&&(n=en.empty()),n.set(r.field,s))}return n||null}function nE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Uo(r,i,(s,o)=>rM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tu extends Fd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fi extends Fd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ak(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rE(t,e,n){const r=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,nM(o,a,n[i]))}return r}function iE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tM(s,o,e))}return r}class Pk extends Fd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aM extends Fd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ek();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Rk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Uo(this.mutations,e.mutations,(n,r)=>nE(n,r))&&Uo(this.baseMutations,e.baseMutations,(n,r)=>nE(n,r))}}class V_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length);let i=function(){return XL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new V_(e,n,r,i)}}/**
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
 */class uM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,pe;function hM(t){switch(t){default:return re();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Nk(t){if(t===void 0)return jr("GRPC error has no .code"),V.UNKNOWN;switch(t){case nt.OK:return V.OK;case nt.CANCELLED:return V.CANCELLED;case nt.UNKNOWN:return V.UNKNOWN;case nt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case nt.INTERNAL:return V.INTERNAL;case nt.UNAVAILABLE:return V.UNAVAILABLE;case nt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case nt.NOT_FOUND:return V.NOT_FOUND;case nt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case nt.ABORTED:return V.ABORTED;case nt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case nt.DATA_LOSS:return V.DATA_LOSS;default:return re()}}(pe=nt||(nt={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function dM(){return new TextEncoder}/**
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
 */const fM=new hs([4294967295,4294967295],0);function sE(t){const e=dM().encode(t),n=new ZC;return n.update(e),new Uint8Array(n.digest())}function oE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new hs([n,r],0),new hs([i,s],0)]}class j_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new el(`Invalid padding: ${n}`);if(r<0)throw new el(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new el(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new el(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(hs.fromNumber(r)));return i.compare(fM)===1&&(i=new hs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=sE(e),[r,i]=oE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new j_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=sE(e),[r,i]=oE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class el extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Iu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ud(ie.min(),i,new at(_e),Fr(),fe())}}class Iu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Iu(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class bk{constructor(e,n){this.targetId=e,this.me=n}}class Dk{constructor(e,n,r=Et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class aE{constructor(){this.fe=0,this.ge=uE(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new Iu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=uE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fr(),this.qe=lE(),this.Qe=new at(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Wm(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,zt.newNoDocument(o,ie.min()))}else Ee(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ts(r).toUint8Array()}catch(l){if(l instanceof lk)return Es("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new j_(o,i,s)}catch(l){return Es(l instanceof el?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Wm(a.target)){const l=new Q(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,zt.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=fe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ud(e,n,this.Qe,this.ke,r);return this.ke=Fr(),this.qe=lE(),this.Qe=new at(_e),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new aE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new At(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new aE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function lE(){return new at(Q.comparator)}function uE(){return new at(Q.comparator)}const mM={asc:"ASCENDING",desc:"DESCENDING"},gM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_M={and:"AND",or:"OR"};class yM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hm(t,e){return t.useProto3Json||Dd(e)?e:{value:e}}function jh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ok(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vM(t,e){return jh(t,e.toTimestamp())}function ir(t){return Ee(!!t),ie.fromTimestamp(function(n){const r=ki(n);return new ot(r.seconds,r.nanos)}(t))}function F_(t,e){return qm(t,e).canonicalString()}function qm(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Lk(t){const e=De.fromString(t);return Ee(Uk(e)),e}function Gm(t,e){return F_(t.databaseId,e.path)}function _p(t,e){const n=Lk(e);if(n.get(1)!==t.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(Vk(n))}function Mk(t,e){return F_(t.databaseId,e)}function wM(t){const e=Lk(t);return e.length===4?De.emptyPath():Vk(e)}function Km(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vk(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cE(t,e,n){return{name:Gm(t,e),fields:n.value.mapValue.fields}}function EM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Ee(h===void 0||typeof h=="string"),Et.fromBase64String(h||"")):(Ee(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Et.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?V.UNKNOWN:Nk(c.code);return new $(h,c.message||"")}(o);n=new Dk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_p(t,r.document.name),s=ir(r.document.updateTime),o=r.document.createTime?ir(r.document.createTime):ie.min(),a=new en({mapValue:{fields:r.document.fields}}),l=zt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Jc(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_p(t,r.document),s=r.readTime?ir(r.readTime):ie.min(),o=zt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_p(t,r.document),s=r.removedTargetIds||[];n=new Jc([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new cM(i,s),a=r.targetId;n=new bk(a,o)}}return n}function TM(t,e){let n;if(e instanceof Tu)n={update:cE(t,e.key,e.value)};else if(e instanceof Pk)n={delete:Gm(t,e.key)};else if(e instanceof Fi)n={update:cE(t,e.key,e.data),updateMask:NM(e.fieldMask)};else{if(!(e instanceof aM))return re();n={verify:Gm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Kl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ho)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ql)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(t,e.precondition)),n}function IM(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ir(i.updateTime):ir(s);return o.isEqual(ie.min())&&(o=ir(s)),new iM(o,i.transformResults||[])}(n,e))):[]}function SM(t,e){return{documents:[Mk(t,e.path)]}}function CM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mk(t,i);const s=function(c){if(c.length!==0)return Fk(Kn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:eo(m.field),direction:RM(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Hm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function kM(t){let e=wM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=jk(f);return m instanceof Kn&&dk(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(E){return new Gl(to(E.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Dd(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,v=f.values||[];return new Mh(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new Mh(v,m)}(n.endAt)),qL(e,i,o,s,a,"F",l,c)}function xM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=to(n.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=to(n.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=to(n.unaryFilter.field);return it.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=to(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return it.create(to(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kn.create(n.compositeFilter.filters.map(r=>jk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function RM(t){return mM[t]}function AM(t){return gM[t]}function PM(t){return _M[t]}function eo(t){return{fieldPath:t.canonicalString()}}function to(t){return vt.fromServerFormat(t.fieldPath)}function Fk(t){return t instanceof it?function(n){if(n.op==="=="){if(Y0(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NAN"}};if(Q0(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Y0(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NAN"}};if(Q0(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(n.field),op:AM(n.op),value:n.value}}}(t):t instanceof Kn?function(n){const r=n.getFilters().map(i=>Fk(i));return r.length===1?r[0]:{compositeFilter:{op:PM(n.op),filters:r}}}(t):re()}function NM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r,i,s=ie.min(),o=ie.min(),a=Et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(e){this.ct=e}}function DM(t){const e=kM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vh(e,e.limit,"L"):e}/**
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
 */class OM{constructor(){this.un=new LM}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Ci.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class LM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new At(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new At(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class MM{constructor(){this.changes=new ua(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&pl(r.mutation,i,dn.empty(),ot.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=rs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Za();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=rs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Fr();const o=fl(),a=function(){return fl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Fi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),pl(h.mutation,c,h.mutation.getFieldMask(),ot.now())):o.set(c.key,dn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new VM(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fl();let i=new at((o,a)=>o-a),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||dn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=Ek();h.forEach(m=>{if(!s.has(m)){const v=Rk(n.get(m),r.get(m));v!==null&&f.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(rs());let a=-1,l=s;return o.next(c=>F.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,fe())).next(h=>({batchId:a,changes:wk(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Za();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Za();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,l=>{const c=function(f,m){return new la(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,zt.newInvalidDocument(h)))});let a=Za();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&pl(h.mutation,c,dn.empty(),ot.now()),Md(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class FM{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ir(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:DM(i.bundledQuery),readTime:ir(i.readTime)}}(n)),F.resolve()}}/**
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
 */class UM{constructor(){this.overlays=new at(Q.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rs();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=rs(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new at((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=rs(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=rs(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uM(n,r));let s=this.Ir.get(n);s===void 0&&(s=fe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class BM{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.Tr=new At(mt.Er),this.dr=new At(mt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new mt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new mt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new De([])),r=new mt(n,e),i=new mt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new De([])),r=new mt(n,e),i=new mt(n,e+1);let s=fe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new mt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new At(mt.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new mt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),i=new mt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new At(_e);return n.forEach(i=>{const s=new mt(i,0),o=new mt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new mt(new Q(s),0);let a=new At(_e);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new mt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new mt(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e){this.Mr=e,this.docs=function(){return new at(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():zt.newInvalidDocument(n))}getEntries(e,n){let r=Fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():zt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fr();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||xL(kL(h),r)<=0||(i.has(h.key)||Md(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $M(this)}getSize(e){return F.resolve(this.size)}}class $M extends MM{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e){this.persistence=e,this.Nr=new ua(n=>O_(n),L_),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new U_,this.targetCount=0,this.kr=qo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new qo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e,n){this.qr={},this.overlays={},this.Qr=new P_(0),this.Kr=!1,this.Kr=!0,this.$r=new BM,this.referenceDelegate=e(this),this.Ur=new HM(this),this.indexManager=new OM,this.remoteDocumentCache=function(i){return new WM(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new bM(n),this.Gr=new FM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new zM(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new GM(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class GM extends AL{constructor(e){super(),this.currentSequenceNumber=e}}class B_{constructor(e){this.persistence=e,this.Jr=new U_,this.Yr=null}static Zr(e){return new B_(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new z_(e,n.fromCache,r,i)}}/**
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
 */class KM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Lb()?8:PL($t())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new KM;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Fa()<=de.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Zs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Fa()<=de.DEBUG&&q("QueryEngine","Query:",Zs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Fa()<=de.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Zs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(n))):F.resolve())}Yi(e,n){if(eE(n))return F.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Vh(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,Vh(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return eE(n)||i.isEqual(ie.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Fa()<=de.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zs(n)),this.rs(e,o,n,CL(i,-1)).next(a=>a))})}ts(e,n){let r=new At(yk(e));return n.forEach((i,s)=>{Md(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Fa()<=de.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Zs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ci.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class YM{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new at(_e),this._s=new ua(s=>O_(s),L_),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function XM(t,e,n,r){return new YM(t,e,n,r)}async function Bk(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=fe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function JM(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,m=f.keys();let v=F.resolve();return m.forEach(E=>{v=v.next(()=>h.getEntry(l,E)).next(A=>{const N=c.docVersions.get(E);Ee(N!==null),A.version.compareTo(N)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=fe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function zk(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ZM(t,e){const n=se(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(Et.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(f,v),function(A,N,I){return A.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,v,h)&&a.push(n.Ur.updateTargetData(s,v))});let l=Fr(),c=fe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(eV(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(ie.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function eV(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fr();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function tV(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nV(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new li(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Qm(t,e,n){const r=se(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Eu(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function hE(t,e,n){const r=se(t);let i=ie.min(),s=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=se(l),m=f._s.get(h);return m!==void 0?F.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,rr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ie.min(),n?s:fe())).next(a=>(rV(r,KL(e),a),{documents:a,Ts:s})))}function rV(t,e,n){let r=t.us.get(e)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class dE{constructor(){this.activeTargetIds=eM()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iV{constructor(){this.so=new dE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new dE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sV{_o(e){}shutdown(){}}/**
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
 */class fE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kc=null;function yp(){return kc===null?kc=function(){return 268435456+Math.round(2147483648*Math.random())}():kc++,"0x"+kc.toString(16)}/**
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
 */const oV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class lV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=yp(),l=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(q("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Es("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+aa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=oV[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=yp();return new Promise((o,a)=>{const l=new ek;l.setWithCredentials(!0),l.listenOnce(tk.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qc.NO_ERROR:const h=l.getResponseJson();q(Ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Qc.TIMEOUT:q(Ft,`RPC '${e}' ${s} timed out`),a(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case Qc.HTTP_ERROR:const f=l.getStatus();if(q(Ft,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const E=function(N){const I=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(I)>=0?I:V.UNKNOWN}(v.status);a(new $(E,v.message))}else a(new $(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(V.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{q(Ft,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(Ft,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=yp(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ik(),a=rk(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");q(Ft,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,v=!1;const E=new aV({Io:N=>{v?q(Ft,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(q(Ft,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),q(Ft,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},To:()=>f.close()}),A=(N,I,T)=>{N.listen(I,C=>{try{T(C)}catch(O){setTimeout(()=>{throw O},0)}})};return A(f,Ja.EventType.OPEN,()=>{v||(q(Ft,`RPC '${e}' stream ${i} transport opened.`),E.yo())}),A(f,Ja.EventType.CLOSE,()=>{v||(v=!0,q(Ft,`RPC '${e}' stream ${i} transport closed`),E.So())}),A(f,Ja.EventType.ERROR,N=>{v||(v=!0,Es(Ft,`RPC '${e}' stream ${i} transport errored:`,N),E.So(new $(V.UNAVAILABLE,"The operation could not be completed")))}),A(f,Ja.EventType.MESSAGE,N=>{var I;if(!v){const T=N.data[0];Ee(!!T);const C=T,O=C.error||((I=C[0])===null||I===void 0?void 0:I.error);if(O){q(Ft,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let M=function(k){const w=nt[k];if(w!==void 0)return Nk(w)}(j),S=O.message;M===void 0&&(M=V.INTERNAL,S="Unknown error status: "+j+" with message "+O.message),v=!0,E.So(new $(M,S)),f.close()}else q(Ft,`RPC '${e}' stream ${i} received:`,T),E.bo(T)}}),A(a,nk.STAT_EVENT,N=>{N.stat===jm.PROXY?q(Ft,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===jm.NOPROXY&&q(Ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function vp(){return typeof document<"u"?document:null}/**
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
 */function Bd(t){return new yM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Wk(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(jr(n.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uV extends $k{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=EM(this.serializer,e),r=function(s){if(!("targetChange"in s))return ie.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?ir(o.readTime):ie.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Km(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Wm(l)?{documents:SM(s,l)}:{query:CM(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ok(s,o.resumeToken);const c=Hm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ie.min())>0){a.readTime=jh(s,o.snapshotVersion.toTimestamp());const c=Hm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=xM(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Km(this.serializer),n.removeTarget=e,this.a_(n)}}class cV extends $k{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=IM(e.writeResults,e.commitTime),r=ir(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Km(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TM(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,qm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,qm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class dV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(jr(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Fs(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=se(l);c.L_.add(4),await Su(c),c.q_.set("Unknown"),c.L_.delete(4),await zd(c)}(this))})}),this.q_=new dV(r,i)}}async function zd(t){if(Fs(t))for(const e of t.B_)await e(!0)}async function Su(t){for(const e of t.B_)await e(!1)}function Hk(t,e){const n=se(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),q_(n)?H_(n):ca(n).r_()&&$_(n,e))}function W_(t,e){const n=se(t),r=ca(n);n.N_.delete(e),r.r_()&&qk(n,e),n.N_.size===0&&(r.r_()?r.o_():Fs(n)&&n.q_.set("Unknown"))}function $_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ca(t).A_(e)}function qk(t,e){t.Q_.xe(e),ca(t).R_(e)}function H_(t){t.Q_=new pM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ca(t).start(),t.q_.v_()}function q_(t){return Fs(t)&&!ca(t).n_()&&t.N_.size>0}function Fs(t){return se(t).L_.size===0}function Gk(t){t.Q_=void 0}async function pV(t){t.q_.set("Online")}async function mV(t){t.N_.forEach((e,n)=>{$_(t,e)})}async function gV(t,e){Gk(t),q_(t)?(t.q_.M_(e),H_(t)):t.q_.set("Unknown")}async function _V(t,e,n){if(t.q_.set("Online"),e instanceof Dk&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fh(t,r)}else if(e instanceof Jc?t.Q_.Ke(e):e instanceof bk?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ie.min()))try{const r=await zk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(Et.EMPTY_BYTE_STRING,h.snapshotVersion)),qk(s,l);const f=new li(h.target,l,c,h.sequenceNumber);$_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Fh(t,r)}}async function Fh(t,e,n){if(!Eu(e))throw e;t.L_.add(1),await Su(t),t.q_.set("Offline"),n||(n=()=>zk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await zd(t)})}function Kk(t,e){return e().catch(n=>Fh(t,n,e))}async function Wd(t){const e=se(t),n=xi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;yV(e);)try{const i=await tV(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,vV(e,i)}catch(i){await Fh(e,i)}Qk(e)&&Yk(e)}function yV(t){return Fs(t)&&t.O_.length<10}function vV(t,e){t.O_.push(e);const n=xi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Qk(t){return Fs(t)&&!xi(t).n_()&&t.O_.length>0}function Yk(t){xi(t).start()}async function wV(t){xi(t).p_()}async function EV(t){const e=xi(t);for(const n of t.O_)e.m_(n.mutations)}async function TV(t,e,n){const r=t.O_.shift(),i=V_.from(r,e,n);await Kk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wd(t)}async function IV(t,e){e&&xi(t).V_&&await async function(r,i){if(function(o){return hM(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();xi(r).s_(),await Kk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wd(r)}}(t,e),Qk(t)&&Yk(t)}async function pE(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Fs(n);n.L_.add(3),await Su(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await zd(n)}async function SV(t,e){const n=se(t);e?(n.L_.delete(2),await zd(n)):e||(n.L_.add(2),await Su(n),n.q_.set("Unknown"))}function ca(t){return t.K_||(t.K_=function(n,r,i){const s=se(n);return s.w_(),new uV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:pV.bind(null,t),Ro:mV.bind(null,t),mo:gV.bind(null,t),d_:_V.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),q_(t)?H_(t):t.q_.set("Unknown")):(await t.K_.stop(),Gk(t))})),t.K_}function xi(t){return t.U_||(t.U_=function(n,r,i){const s=se(n);return s.w_(),new cV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:wV.bind(null,t),mo:IV.bind(null,t),f_:EV.bind(null,t),g_:TV.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Wd(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new G_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function K_(t,e){if(jr("AsyncQueue",`${e}: ${t}`),Eu(t))return new $(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Za(),this.sortedSet=new at(this.comparator)}static emptySet(e){return new ko(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class mE{constructor(){this.W_=new at(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Go{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Go(e,n,ko.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ld(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class kV{constructor(){this.queries=gE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=se(n),s=i.queries;i.queries=gE(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function gE(){return new ua(t=>_k(t),Ld)}async function Q_(t,e){const n=se(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new CV,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=K_(o,`Initialization of query '${Zs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&X_(n)}async function Y_(t,e){const n=se(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xV(t,e){const n=se(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&X_(n)}function RV(t,e,n){const r=se(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function X_(t){t.Y_.forEach(e=>{e.next()})}var Ym,_E;(_E=Ym||(Ym={})).ea="default",_E.Cache="cache";class J_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Go(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ym.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.key=e}}class Jk{constructor(e){this.key=e}}class AV{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=yk(e),this.Ra=new ko(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new mE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),v=Md(this.query,f)?f:null,E=!!m&&this.mutatedKeys.has(m.key),A=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;m&&v?m.data.isEqual(v.data)?E!==A&&(r.track({type:3,doc:v}),N=!0):this.ga(m,v)||(r.track({type:2,doc:v}),N=!0,(l&&this.Aa(v,l)>0||c&&this.Aa(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),N=!0):m&&!v&&(r.track({type:1,doc:m}),N=!0,(l||c)&&(a=!0)),N&&(v?(o=o.add(v),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(v,E){const A=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return A(v)-A(E)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Go(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new mE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Jk(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Xk(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Go.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class PV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NV{constructor(e){this.key=e,this.va=!1}}class bV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ua(a=>_k(a),Ld),this.Ma=new Map,this.xa=new Set,this.Oa=new at(Q.comparator),this.Na=new Map,this.La=new U_,this.Ba={},this.ka=new Map,this.qa=qo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function DV(t,e,n=!0){const r=ix(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Zk(r,e,n,!0),i}async function OV(t,e){const n=ix(t);await Zk(n,e,!0,!1)}async function Zk(t,e,n,r){const i=await nV(t.localStore,rr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await LV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Hk(t.remoteStore,i),a}async function LV(t,e,n,r,i){t.Ka=(f,m,v)=>async function(A,N,I,T){let C=N.view.ma(I);C.ns&&(C=await hE(A.localStore,N.query,!1).then(({documents:S})=>N.view.ma(S,C)));const O=T&&T.targetChanges.get(N.targetId),j=T&&T.targetMismatches.get(N.targetId)!=null,M=N.view.applyChanges(C,A.isPrimaryClient,O,j);return vE(A,N.targetId,M.wa),M.snapshot}(t,f,m,v);const s=await hE(t.localStore,e,!0),o=new AV(e,s.Ts),a=o.ma(s.documents),l=Iu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);vE(t,n,c.wa);const h=new PV(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function MV(t,e,n){const r=se(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Ld(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&W_(r.remoteStore,i.targetId),Xm(r,i.targetId)}).catch(wu)):(Xm(r,i.targetId),await Qm(r.localStore,i.targetId,!0))}async function VV(t,e){const n=se(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),W_(n.remoteStore,r.targetId))}async function jV(t,e,n){const r=HV(t);try{const i=await function(o,a){const l=se(o),c=ot.now(),h=a.reduce((v,E)=>v.add(E.key),fe());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let E=Fr(),A=fe();return l.cs.getEntries(v,h).next(N=>{E=N,E.forEach((I,T)=>{T.isValidDocument()||(A=A.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,E)).next(N=>{f=N;const I=[];for(const T of a){const C=oM(T,f.get(T.key).overlayedDocument);C!=null&&I.push(new Fi(T.key,C,uk(C.value.mapValue),$n.exists(!0)))}return l.mutationQueue.addMutationBatch(v,c,I,a)}).next(N=>{m=N;const I=N.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(v,N.batchId,I)})}).then(()=>({batchId:m.batchId,changes:wk(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new at(_e)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Cu(r,i.changes),await Wd(r.remoteStore)}catch(i){const s=K_(i,"Failed to persist write");n.reject(s)}}async function ex(t,e){const n=se(t);try{const r=await ZM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Ee(o.va):i.removedDocuments.size>0&&(Ee(o.va),o.va=!1))}),await Cu(n,r,e)}catch(r){await wu(r)}}function yE(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=se(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&X_(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FV(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new at(Q.comparator);o=o.insert(s,zt.newNoDocument(s,ie.min()));const a=fe().add(s),l=new Ud(ie.min(),new Map,new at(_e),o,a);await ex(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),Z_(r)}else await Qm(r.localStore,e,!1).then(()=>Xm(r,e,n)).catch(wu)}async function UV(t,e){const n=se(t),r=e.batch.batchId;try{const i=await JM(n.localStore,e);nx(n,r,null),tx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cu(n,i)}catch(i){await wu(i)}}async function BV(t,e,n){const r=se(t);try{const i=await function(o,a){const l=se(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Ee(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);nx(r,e,n),tx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cu(r,i)}catch(i){await wu(i)}}function tx(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function nx(t,e,n){const r=se(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Xm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||rx(t,r)})}function rx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(W_(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Z_(t))}function vE(t,e,n){for(const r of n)r instanceof Xk?(t.La.addReference(r.key,e),zV(t,r)):r instanceof Jk?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||rx(t,r.key)):re()}function zV(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Z_(t))}function Z_(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(De.fromString(e)),r=t.qa.next();t.Na.set(r,new NV(n)),t.Oa=t.Oa.insert(n,r),Hk(t.remoteStore,new li(rr(Od(n.path)),r,"TargetPurposeLimboResolution",P_.oe))}}async function Cu(t,e,n){const r=se(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=z_.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=se(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,m=>F.forEach(m.$i,v=>h.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>F.forEach(m.Ui,v=>h.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!Eu(f))throw f;q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=h.os.get(m),E=v.snapshotVersion,A=v.withLastLimboFreeSnapshotVersion(E);h.os=h.os.insert(m,A)}}}(r.localStore,s))}async function WV(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await Bk(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new $(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cu(n,r.hs)}}function $V(t,e){const n=se(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function ix(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ex.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$V.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FV.bind(null,e),e.Ca.d_=xV.bind(null,e.eventManager),e.Ca.$a=RV.bind(null,e.eventManager),e}function HV(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BV.bind(null,e),e}class Uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return XM(this.persistence,new QM,e.initialUser,this.serializer)}Ga(e){return new qM(B_.Zr,this.serializer)}Wa(e){return new iV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uh.provider={build:()=>new Uh};class Jm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WV.bind(null,this.syncEngine),await SV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kV}()}createDatastore(e){const n=Bd(e.databaseInfo.databaseId),r=function(s){return new lV(s)}(e.databaseInfo);return function(s,o,a,l){return new hV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new fV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yE(this.syncEngine,n,0),function(){return fE.D()?new fE:new sV}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new bV(i,s,o,a,l,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=se(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Su(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jm.provider={build:()=>new Jm};/**
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
 */class ey{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ut.UNAUTHENTICATED,this.clientId=A_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=K_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wp(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Bk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GV(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>pE(e.remoteStore,i)),t._onlineComponents=e}async function GV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await wp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Es("Error using user provided cache. Falling back to memory cache: "+n),await wp(t,new Uh)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await wp(t,new Uh);return t._offlineComponents}async function sx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await wE(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await wE(t,new Jm))),t._onlineComponents}function KV(t){return sx(t).then(e=>e.syncEngine)}async function Bh(t){const e=await sx(t),n=e.eventManager;return n.onListen=DV.bind(null,e.syncEngine),n.onUnlisten=MV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=OV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VV.bind(null,e.syncEngine),n}function QV(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new ey({next:m=>{h.Za(),o.enqueueAndForget(()=>Y_(s,f));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new $(V.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new J_(Od(a.path),h,{includeMetadataChanges:!0,_a:!0});return Q_(s,f)}(await Bh(t),t.asyncQueue,e,n,r)),r.promise}function YV(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new ey({next:m=>{h.Za(),o.enqueueAndForget(()=>Y_(s,f)),m.fromCache&&l.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new J_(a,h,{includeMetadataChanges:!0,_a:!0});return Q_(s,f)}(await Bh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const EE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t,e,n){if(!n)throw new $(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lx(t,e,n,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function TE(t){if(!Q.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function IE(t){if(Q.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $d(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$d(t);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function XV(t,e){if(e<=0)throw new $(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class SE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ox((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new SE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new SE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ok;switch(r.type){case"firstParty":return new wL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=EE.get(n);r&&(q("ComponentProvider","Removing Datastore"),EE.delete(n),r.terminate())}(this),Promise.resolve()}}function ux(t,e,n,r={}){var i;const s=(t=ln(t,Hd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ut.MOCK_USER;else{a=cC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ut(c)}t._authCredentials=new _L(new sk(a,l))}}/**
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
 */class cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cr(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Pr extends cr{constructor(e,n,r){super(e,n,Od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new Q(e))}withConverter(e){return new Pr(this.firestore,e,this._path)}}function Ri(t,e,...n){if(t=ve(t),ax("collection","path",e),t instanceof Hd){const r=De.fromString(e,...n);return IE(r),new Pr(t,null,r)}{if(!(t instanceof Pt||t instanceof Pr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return IE(r),new Pr(t.firestore,null,r)}}function Qt(t,e,...n){if(t=ve(t),arguments.length===1&&(e=A_.newId()),ax("doc","path",e),t instanceof Hd){const r=De.fromString(e,...n);return TE(r),new Pt(t,null,new Q(r))}{if(!(t instanceof Pt||t instanceof Pr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return TE(r),new Pt(t.firestore,t instanceof Pr?t.converter:null,new Q(r))}}/**
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
 */class CE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Wk(this,"async_queue_retry"),this.Vu=()=>{const r=vp();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=vp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=vp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ar;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Eu(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw jr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=G_.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function kE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ur extends Hd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new CE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new CE(e),this._firestoreClient=void 0,await e}}}function cx(t,e){const n=typeof t=="object"?t:Ad(),r=typeof t=="string"?t:"(default)",i=Ms(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=aC("firestore");s&&ux(i,...s)}return i}function ku(t){if(t._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||JV(t),t._firestoreClient}function JV(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new DL(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ox(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new qV(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ss(Et.fromBase64String(e))}catch(n){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ss(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ui{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */const ZV=/^__.*__$/;class ej{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tu(e,this.data,n,this.fieldTransforms)}}class hx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Kd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Kd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return zh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(dx(this.Cu)&&ZV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class tj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bd(e)}Qu(e,n,r,i=!1){return new Kd({Cu:e,methodName:n,qu:r,path:vt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qd(t){const e=t._freezeSettings(),n=Bd(t._databaseId);return new tj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fx(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);sy("Data must be an object, but it was:",o,r);const a=mx(r,o);let l,c;if(s.merge)l=new dn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=Zm(e,f,n);if(!o.contains(m))throw new $(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);_x(h,m)||h.push(m)}l=new dn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new ej(new en(a),l,c)}class Yd extends Ui{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yd}}function px(t,e,n){return new Kd({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ty extends Ui{_toFieldTransform(e){return new jd(e.path,new Kl)}isEqual(e){return e instanceof ty}}class ny extends Ui{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=px(this,e,!0),r=this.Ku.map(s=>Us(s,n)),i=new $o(r);return new jd(e.path,i)}isEqual(e){return e instanceof ny&&Vo(this.Ku,e.Ku)}}class ry extends Ui{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=px(this,e,!0),r=this.Ku.map(s=>Us(s,n)),i=new Ho(r);return new jd(e.path,i)}isEqual(e){return e instanceof ry&&Vo(this.Ku,e.Ku)}}class iy extends Ui{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Ql(e.serializer,Ik(e.serializer,this.$u));return new jd(e.path,n)}isEqual(e){return e instanceof iy&&this.$u===e.$u}}function nj(t,e,n,r){const i=t.Qu(1,e,n);sy("Data must be an object, but it was:",i,r);const s=[],o=en.empty();js(r,(l,c)=>{const h=oy(e,l,n);c=ve(c);const f=i.Nu(h);if(c instanceof Yd)s.push(h);else{const m=Us(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new dn(s);return new hx(o,a,i.fieldTransforms)}function rj(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Zm(e,r,n)],l=[i];if(s.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Zm(e,s[m])),l.push(s[m+1]);const c=[],h=en.empty();for(let m=a.length-1;m>=0;--m)if(!_x(c,a[m])){const v=a[m];let E=l[m];E=ve(E);const A=o.Nu(v);if(E instanceof Yd)c.push(v);else{const N=Us(E,A);N!=null&&(c.push(v),h.set(v,N))}}const f=new dn(c);return new hx(h,f,o.fieldTransforms)}function ij(t,e,n,r=!1){return Us(n,t.Qu(r?4:3,e))}function Us(t,e){if(gx(t=ve(t)))return sy("Unsupported field value:",e,t),mx(t,e);if(t instanceof Ui)return function(r,i){if(!dx(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Us(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ik(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ot.fromDate(r);return{timestampValue:jh(i.serializer,s)}}if(r instanceof ot){const s=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jh(i.serializer,s)}}if(r instanceof qd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ss)return{bytesValue:Ok(i.serializer,r._byteString)};if(r instanceof Pt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:F_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Gd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return M_(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${$d(r)}`)}(t,e)}function mx(t,e){const n={};return ak(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):js(t,(r,i)=>{const s=Us(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function gx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof qd||t instanceof Ss||t instanceof Pt||t instanceof Ui||t instanceof Gd)}function sy(t,e,n){if(!gx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=$d(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Zm(t,e,n){if((e=ve(e))instanceof xu)return e._internalPath;if(typeof e=="string")return oy(t,e);throw zh("Field path arguments must be of type string or ",t,!1,void 0,n)}const sj=new RegExp("[~\\*/\\[\\]]");function oy(t,e,n){if(e.search(sj)>=0)throw zh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xu(...e.split("."))._internalPath}catch{throw zh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(V.INVALID_ARGUMENT,a+t+l)}function _x(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class yx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class oj extends yx{data(){return super.data()}}function Xd(t,e){return typeof e=="string"?oy(t,e):e instanceof xu?e._internalPath:e._delegate._internalPath}/**
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
 */function vx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ay{}class Jd extends ay{}function Ko(t,e,...n){let r=[];e instanceof ay&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Zd).length,a=s.filter(l=>l instanceof Ru).length;if(o>1||o>0&&a>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ru extends Jd{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ru(e,n,r)}_apply(e){const n=this._parse(e);return Ex(e._query,n),new cr(e.firestore,e.converter,$m(e._query,n))}_parse(e){const n=Qd(e.firestore);return function(s,o,a,l,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){RE(f,h);const v=[];for(const E of f)v.push(xE(l,s,E));m={arrayValue:{values:v}}}else m=xE(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||RE(f,h),m=ij(a,o,f,h==="in"||h==="not-in");return it.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Qo(t,e,n){const r=e,i=Xd("where",t);return Ru._create(i,r,n)}class Zd extends ay{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Ex(o,l),o=$m(o,l)}(e._query,n),new cr(e.firestore,e.converter,$m(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ef extends Jd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ef(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Gl(s,o)}(e._query,this._field,this._direction);return new cr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new la(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function wx(t,e="asc"){const n=e,r=Xd("orderBy",t);return ef._create(r,n)}class tf extends Jd{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new tf(e,n,r)}_apply(e){return new cr(e.firestore,e.converter,Vh(e._query,this._limit,this._limitType))}}function Wh(t){return XV("limit",t),tf._create("limit",t,"F")}function xE(t,e,n){if(typeof(n=ve(n))=="string"){if(n==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gk(e)&&n.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!Q.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return K0(t,new Q(r))}if(n instanceof Pt)return K0(t,n._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$d(n)}.`)}function RE(t,e){if(!Array.isArray(t)||t.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ex(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Tx{convertValue(e,n="none"){switch(Is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return js(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Je(o.doubleValue));return new Gd(s)}convertGeoPoint(e){return new qd(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=b_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hl(e));default:return null}}convertTimestamp(e){const n=ki(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Ee(Uk(r));const i=new Bo(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||jr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Ix(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ly extends yx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ml extends ly{data(e={}){return super.data(e)}}class uy{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ml(i._firestore,i._userDataWriter,a.doc.key,a.doc,new mo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ml(i._firestore,i._userDataWriter,a.doc.key,a.doc,new mo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:aj(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
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
 */function Au(t){t=ln(t,Pt);const e=ln(t.firestore,Ur);return QV(ku(e),t._key).then(n=>kx(e,t,n))}class cy extends Tx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function Yl(t){t=ln(t,cr);const e=ln(t.firestore,Ur),n=ku(e),r=new cy(e);return vx(t._query),YV(n,t._query).then(i=>new uy(e,r,t,i))}function Sx(t,e,n){t=ln(t,Pt);const r=ln(t.firestore,Ur),i=Ix(t.converter,e);return nf(r,[fx(Qd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,$n.none())])}function pn(t,e,n,...r){t=ln(t,Pt);const i=ln(t.firestore,Ur),s=Qd(i);let o;return o=typeof(e=ve(e))=="string"||e instanceof xu?rj(s,"updateDoc",t._key,e,n,r):nj(s,"updateDoc",t._key,e),nf(i,[o.toMutation(t._key,$n.exists(!0))])}function hy(t,e){const n=ln(t.firestore,Ur),r=Qt(t),i=Ix(t.converter,e);return nf(n,[fx(Qd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,$n.exists(!1))]).then(()=>r)}function Cx(t,...e){var n,r,i;t=ve(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||kE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(kE(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof Pt)c=ln(t.firestore,Ur),h=Od(t._key.path),l={next:f=>{e[o]&&e[o](kx(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ln(t,cr);c=ln(f.firestore,Ur),h=f._query;const m=new cy(c);l={next:v=>{e[o]&&e[o](new uy(c,m,f,v))},error:e[o+1],complete:e[o+2]},vx(t._query)}return function(m,v,E,A){const N=new ey(A),I=new J_(v,N,E);return m.asyncQueue.enqueueAndForget(async()=>Q_(await Bh(m),I)),()=>{N.Za(),m.asyncQueue.enqueueAndForget(async()=>Y_(await Bh(m),I))}}(ku(c),h,a,l)}function nf(t,e){return function(r,i){const s=new Ar;return r.asyncQueue.enqueueAndForget(async()=>jV(await KV(r),i,s)),s.promise}(ku(t),e)}function kx(t,e,n){const r=n.docs.get(e._key),i=new cy(t);return new ly(t,i,e._key,r,new mo(n.hasPendingWrites,n.fromCache),e.converter)}function Pu(){return new ty("serverTimestamp")}function eg(...t){return new ny("arrayUnion",t)}function tg(...t){return new ry("arrayRemove",t)}function Xi(t){return new iy("increment",t)}(function(e,n=!0){(function(i){aa=i})(Vs),Gn(new xn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ur(new yL(r.getProvider("auth-internal")),new TL(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),an(W0,"4.7.3",e),an(W0,"4.7.3","esm2017")})();const lj=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Tx,Bytes:Ss,CollectionReference:Pr,DocumentReference:Pt,DocumentSnapshot:ly,FieldPath:xu,FieldValue:Ui,Firestore:Ur,FirestoreError:$,GeoPoint:qd,Query:cr,QueryCompositeFilterConstraint:Zd,QueryConstraint:Jd,QueryDocumentSnapshot:ml,QueryFieldFilterConstraint:Ru,QueryLimitConstraint:tf,QueryOrderByConstraint:ef,QuerySnapshot:uy,SnapshotMetadata:mo,Timestamp:ot,VectorValue:Gd,_AutoId:A_,_ByteString:Et,_DatabaseId:Bo,_DocumentKey:Q,_EmptyAuthCredentialsProvider:ok,_FieldPath:vt,_cast:ln,_logWarn:Es,_validateIsNotUsedTogether:lx,addDoc:hy,arrayRemove:tg,arrayUnion:eg,collection:Ri,connectFirestoreEmulator:ux,doc:Qt,ensureFirestoreConfigured:ku,executeWrite:nf,getDoc:Au,getDocs:Yl,getFirestore:cx,increment:Xi,limit:Wh,onSnapshot:Cx,orderBy:wx,query:Ko,serverTimestamp:Pu,setDoc:Sx,updateDoc:pn,where:Qo},Symbol.toStringTag,{value:"Module"}));var AE={};const PE="@firebase/database",NE="1.0.8";/**
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
 */let xx="";function uj(t){xx=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cj{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hj{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ur(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cj(e)}}catch{}return new hj},is=Rx("localStorage"),dj=Rx("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new xd("@firebase/database"),fj=function(){let t=1;return function(){return t++}}(),Ax=function(t){const e=qb(t),n=new zb;n.update(e);const r=n.digest();return p_.encodeByteArray(r)},Nu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Nu.apply(null,r):typeof r=="object"?e+=ct(r):e+=r,e+=" "}return e};let gl=null,bE=!0;const pj=function(t,e){B(!0,"Can't turn on custom loggers persistently."),xo.logLevel=de.VERBOSE,gl=xo.log.bind(xo)},yt=function(...t){if(bE===!0&&(bE=!1,gl===null&&dj.get("logging_enabled")===!0&&pj()),gl){const e=Nu.apply(null,t);gl(e)}},bu=function(t){return function(...e){yt(t,...e)}},ng=function(...t){const e="FIREBASE INTERNAL ERROR: "+Nu(...t);xo.error(e)},Br=function(...t){const e=`FIREBASE FATAL ERROR: ${Nu(...t)}`;throw xo.error(e),new Error(e)},Yt=function(...t){const e="FIREBASE WARNING: "+Nu(...t);xo.warn(e)},mj=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gj=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yo="[MIN_NAME]",Cs="[MAX_NAME]",Bs=function(t,e){if(t===e)return 0;if(t===Yo||e===Cs)return-1;if(e===Yo||t===Cs)return 1;{const n=DE(t),r=DE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},_j=function(t,e){return t===e?0:t<e?-1:1},Ua=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ct(e))},dy=function(t){if(typeof t!="object"||t===null)return ct(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ct(e[r]),n+=":",n+=dy(t[e[r]]);return n+="}",n},Px=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Nx=function(t){B(!rf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},yj=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vj=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wj(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Ej=new RegExp("^-?(0*)\\d{1,10}$"),Tj=-2147483648,Ij=2147483647,DE=function(t){if(Ej.test(t)){const e=Number(t);if(e>=Tj&&e<=Ij)return e}return null},ha=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Sj=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_l=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Cj{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kj{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yt(e)}}class Zc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="5",bx="v",Dx="s",Ox="r",Lx="f",Mx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vx="ls",jx="p",rg="ac",Fx="websocket",Ux="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=is.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&is.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xj(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zx(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===Fx)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ux)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xj(t)&&(n.ns=t.namespace);const i=[];return Tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(){this.counters_={}}incrementCounter(e,n=1){ur(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Sb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep={},Tp={};function py(t){const e=t.toString();return Ep[e]||(Ep[e]=new Rj),Ep[e]}function Aj(t,e){const n=t.toString();return Tp[n]||(Tp[n]=e()),Tp[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ha(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="start",Nj="close",bj="pLPCommand",Dj="pRTLPCB",Wx="id",$x="pw",Hx="ser",Oj="cb",Lj="seg",Mj="ts",Vj="d",jj="dframe",qx=1870,Gx=30,Fj=qx-Gx,Uj=25e3,Bj=3e4;class go{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bu(e),this.stats_=py(n),this.urlFn=l=>(this.appCheckToken&&(l[rg]=this.appCheckToken),zx(n,Ux,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Pj(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Bj)),gj(()=>{if(this.isClosed_)return;this.scriptTagHolder=new my((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===OE)this.id=a,this.password=l;else if(o===Nj)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[OE]="t",r[Hx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Oj]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bx]=fy,this.transportSessionId&&(r[Dx]=this.transportSessionId),this.lastSessionId&&(r[Vx]=this.lastSessionId),this.applicationId&&(r[jx]=this.applicationId),this.appCheckToken&&(r[rg]=this.appCheckToken),typeof location<"u"&&location.hostname&&Mx.test(location.hostname)&&(r[Ox]=Lx);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){go.forceAllow_=!0}static forceDisallow(){go.forceDisallow_=!0}static isAvailable(){return go.forceAllow_?!0:!go.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yj()&&!vj()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=iC(n),i=Px(r,Fj);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[jj]="t",r[Wx]=e,r[$x]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ct(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class my{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fj(),window[bj+this.uniqueCallbackIdentifier]=e,window[Dj+this.uniqueCallbackIdentifier]=n,this.myIFrame=my.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){yt("frame writing exception"),a.stack&&yt(a.stack),yt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||yt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wx]=this.myID,e[$x]=this.myPW,e[Hx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gx+r.length<=qx;){const o=this.pendingSegs.shift();r=r+"&"+Lj+i+"="+o.seg+"&"+Mj+i+"="+o.ts+"&"+Vj+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Uj)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zj=16384,Wj=45e3;let $h=null;typeof MozWebSocket<"u"?$h=MozWebSocket:typeof WebSocket<"u"&&($h=WebSocket);class jn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bu(this.connId),this.stats_=py(n),this.connURL=jn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[bx]=fy,typeof location<"u"&&location.hostname&&Mx.test(location.hostname)&&(o[Ox]=Lx),n&&(o[Dx]=n),r&&(o[Vx]=r),i&&(o[rg]=i),s&&(o[jx]=s),zx(e,Fx,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,is.set("previous_websocket_failure",!0);try{let r;Ob(),this.mySock=new $h(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){jn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&$h!==null&&!jn.forceDisallow_}static previouslyFailed(){return is.isInMemoryStorage||is.get("previous_websocket_failure")===!0}markConnectionHealthy(){is.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Bl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Px(n,zj);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Wj))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jn.responsesRequiredToBeHealthy=2;jn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[go,jn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=jn&&jn.isAvailable();let r=n&&!jn.previouslyFailed();if(e.webSocketOnly&&(n||Yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[jn];else{const i=this.transports_=[];for(const s of Xl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Xl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $j=6e4,Hj=5e3,qj=10*1024,Gj=100*1024,Ip="t",LE="d",Kj="s",ME="r",Qj="e",VE="o",jE="a",FE="n",UE="p",Yj="h";class Xj{constructor(e,n,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bu("c:"+this.id+":"),this.transportManager_=new Xl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_l(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Gj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ip in e){const n=e[Ip];n===jE?this.upgradeIfSecondaryHealthy_():n===ME?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===VE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ua("t",e),r=Ua("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:UE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:FE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ua("t",e),r=Ua("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ua(Ip,e);if(LE in e){const r=e[LE];if(n===Yj){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===FE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Kj?this.onConnectionShutdown_(r):n===ME?this.onReset_(r):n===Qj?ng("Server Error: "+r):n===VE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ng("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fy!==r&&Yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_l(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($j))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_l(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Hj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:UE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(is.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends Qx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!m_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hh}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=32,zE=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Te("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ai(t){return t.pieces_.length-t.pieceNum_}function xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function gy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Jj(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Jl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Yx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function ze(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Te(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Gt(t,e){const n=le(t),r=le(e);if(n===null)return e;if(n===r)return Gt(xe(t),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Zj(t,e){const n=Jl(t,0),r=Jl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Bs(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function _y(t,e){if(Ai(t)!==Ai(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function In(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ai(t)>Ai(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class eF{constructor(e,n){this.errorPrefix_=n,this.parts_=Jl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=kd(this.parts_[r]);Xx(this)}}function tF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=kd(e),Xx(t)}function nF(t){const e=t.parts_.pop();t.byteLength_-=kd(e),t.parts_.length>0&&(t.byteLength_-=1)}function Xx(t){if(t.byteLength_>zE)throw new Error(t.errorPrefix_+"has a key path longer than "+zE+" bytes ("+t.byteLength_+").");if(t.parts_.length>BE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+BE+") or object contains a cycle "+Ji(t))}function Ji(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy extends Qx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new yy}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=1e3,rF=60*5*1e3,WE=30*1e3,iF=1.3,sF=3e4,oF="server_kill",$E=3;class Nr extends Kx{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Nr.nextPersistentConnectionId_++,this.log_=bu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ba,this.maxReconnectDelay_=rF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ct(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Zn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Nr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ur(e,"w")){const r=Mo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Bb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=WE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ub(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ng("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ba,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ba,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sF&&(this.reconnectDelay_=Ba),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?yt("getToken() completed but was canceled"):(yt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new Xj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Yt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(oF)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Yt(f),l())}}}interrupt(e){yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xh(this.interruptReasons_)&&(this.reconnectDelay_=Ba,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>dy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Te(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){yt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$E&&(this.reconnectDelay_=WE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){yt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$E&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xx.replace(/\./g,"-")]=1,m_()?e["framework.cordova"]=1:hC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hh.getInstance().currentlyOnline();return xh(this.interruptReasons_)&&e}}Nr.nextPersistentConnectionId_=0;Nr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ce(Yo,e),i=new ce(Yo,n);return this.compare(r,i)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;class Jx extends sf{static get __EMPTY_NODE(){return xc}static set __EMPTY_NODE(e){xc=e}compare(e,n){return Bs(e.name,n.name)}isDefinedOn(e){throw ia("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(Cs,xc)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,xc)}toString(){return".key"}}const Ro=new Jx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_t.RED,this.left=i??nn.EMPTY_NODE,this.right=s??nn.EMPTY_NODE}copy(e,n,r,i,s){return new _t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return nn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return nn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_t.RED=!0;_t.BLACK=!1;class aF{copy(e,n,r,i,s){return this}insert(e,n,r){return new _t(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nn{constructor(e,n=nn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_t.BLACK,null,null))}remove(e){return new nn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_t.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Rc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Rc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Rc(this.root_,null,this.comparator_,!0,e)}}nn.EMPTY_NODE=new aF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lF(t,e){return Bs(t.name,e.name)}function vy(t,e){return Bs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig;function uF(t){ig=t}const Zx=function(t){return typeof t=="number"?"number:"+Nx(t):"string:"+t},eR=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ur(e,".sv"),"Priority must be a string or number.")}else B(t===ig||t.isEmpty(),"priority of unexpected type.");B(t===ig||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HE;class pt{constructor(e,n=pt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),eR(this.priorityNode_)}static set __childrenNodeConstructor(e){HE=e}static get __childrenNodeConstructor(){return HE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:le(e)===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||Ai(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pt.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Nx(this.value_):e+=this.value_,this.lazyHash_=Ax(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pt.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=pt.VALUE_TYPE_ORDER.indexOf(n),s=pt.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tR,nR;function cF(t){tR=t}function hF(t){nR=t}class dF extends sf{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Bs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(Cs,new pt("[PRIORITY-POST]",nR))}makePost(e,n){const r=tR(e);return new ce(n,new pt("[PRIORITY-POST]",r))}toString(){return".priority"}}const We=new dF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fF=Math.log(2);class pF{constructor(e){const n=s=>parseInt(Math.log(s)/fF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qh=function(t,e,n,r){t.sort(e);const i=function(l,c){const h=c-l;let f,m;if(h===0)return null;if(h===1)return f=t[l],m=n?n(f):f,new _t(m,f.node,_t.BLACK,null,null);{const v=parseInt(h/2,10)+l,E=i(l,v),A=i(v+1,c);return f=t[v],m=n?n(f):f,new _t(m,f.node,_t.BLACK,E,A)}},s=function(l){let c=null,h=null,f=t.length;const m=function(E,A){const N=f-E,I=f;f-=E;const T=i(N+1,I),C=t[N],O=n?n(C):C;v(new _t(O,C.node,A,null,T))},v=function(E){c?(c.left=E,c=E):(h=E,c=E)};for(let E=0;E<l.count;++E){const A=l.nextBitIsOne(),N=Math.pow(2,l.count-(E+1));A?m(N,_t.BLACK):(m(N,_t.BLACK),m(N,_t.RED))}return h},o=new pF(t.length),a=s(o);return new nn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sp;const Xs={};class Cr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(Xs&&We,"ChildrenNode.ts has not been loaded"),Sp=Sp||new Cr({".priority":Xs},{".priority":We}),Sp}get(e){const n=Mo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nn?n:null}hasIndex(e){return ur(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Ro,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ce.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=qh(r,e.getCompare()):a=Xs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Cr(h,c)}addToIndexes(e,n){const r=Rh(this.indexes_,(i,s)=>{const o=Mo(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===Xs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ce.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),qh(a,o.getCompare())}else return Xs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ce(e.name,a))),l.insert(e,e.node)}});return new Cr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Rh(this.indexes_,i=>{if(i===Xs)return i;{const s=n.get(e.name);return s?i.remove(new ce(e.name,s)):i}});return new Cr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&eR(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return za||(za=new ee(new nn(vy),null,Cr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||za}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?za:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ce(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?za:this.priorityNode_;return new ee(i,o,s)}}updateChild(e,n){const r=le(e);if(r===null)return n;{B(le(e)!==".priority"||Ai(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(xe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(We,(o,a)=>{n[o]=a.val(e),r++,s&&ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zx(this.getPriority().val())+":"),this.forEachChild(We,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ax(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ce(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Du?-1:0}withIndex(e){if(e===Ro||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ro||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(We),i=n.getIterator(We);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ro?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mF extends ee{constructor(){super(new nn(vy),ee.EMPTY_NODE,Cr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Du=new mF;Object.defineProperties(ce,{MIN:{value:new ce(Yo,ee.EMPTY_NODE)},MAX:{value:new ce(Cs,Du)}});Jx.__EMPTY_NODE=ee.EMPTY_NODE;pt.__childrenNodeConstructor=ee;uF(Du);hF(Du);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=!0;function Xe(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pt(n,Xe(e))}if(!(t instanceof Array)&&gF){const n=[];let r=!1;if(Tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Xe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ce(o,l)))}}),n.length===0)return ee.EMPTY_NODE;const s=qh(n,lF,o=>o.name,vy);if(r){const o=qh(n,We.getCompare());return new ee(s,Xe(e),new Cr({".priority":o},{".priority":We}))}else return new ee(s,Xe(e),Cr.Default)}else{let n=ee.EMPTY_NODE;return Tt(t,(r,i)=>{if(ur(t,r)&&r.substring(0,1)!=="."){const s=Xe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Xe(e))}}cF(Xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F extends sf{constructor(e){super(),this.indexPath_=e,B(!ue(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Bs(e.name,n.name):s}makePost(e,n){const r=Xe(e),i=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new ce(n,i)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Du);return new ce(Cs,e)}toString(){return Jl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF extends sf{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Bs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const r=Xe(e);return new ce(n,r)}toString(){return".value"}}const vF=new yF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t){return{type:"value",snapshotNode:t}}function Xo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function eu(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function wF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Zl(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Xo(n,r)):o.trackChildChange(eu(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(We,(i,s)=>{n.hasChild(i)||r.trackChildChange(Zl(i,s))}),n.isLeafNode()||n.forEachChild(We,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(eu(i,s,o))}else r.trackChildChange(Xo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.indexedFilter_=new wy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=tu.getStartPost_(e),this.endPost_=tu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ce(n,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ee.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ee.EMPTY_NODE);const s=this;return n.forEachChild(We,(o,a)=>{s.matches(new ce(o,a))||(i=i.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new tu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ce(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ee.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ee.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,v)=>f(v,m)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const l=new ce(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const v=m==null?1:o(m,l);if(h&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(eu(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Zl(n,f));const A=a.updateImmediateChild(n,ee.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(Xo(m.name,m.node)),A.updateImmediateChild(m.name,m.node)):A}}else return r.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Zl(c.name,c.node)),s.trackChildChange(Xo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yo}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new Ey;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function TF(t){return t.loadsAllData()?new wy(t.getIndex()):t.hasLimit()?new EF(t):new tu(t)}function qE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===We?n="$priority":t.index_===vF?n="$value":t.index_===Ro?n="$key":(B(t.index_ instanceof _F,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ct(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ct(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ct(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ct(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ct(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function GE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==We&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh extends Kx{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=bu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Gh.getListenId_(e,r),a={};this.listens_[o]=a;const l=qE(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Mo(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Gh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=qE(e._queryParams),r=e._path.toString(),i=new Zn;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sa(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Bl(a.responseText)}catch{Yt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Yt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(){return{value:null,children:new Map}}function da(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,Kh());const i=t.children.get(r);e=xe(e),da(i,e,n)}}function sg(t,e){if(ue(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(We,(r,i)=>{da(t,new Te(r),i)}),sg(t,e)}}else if(t.children.size>0){const n=le(e);return e=xe(e),t.children.has(n)&&sg(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function og(t,e,n){t.value!==null?n(e,t.value):SF(t,(r,i)=>{const s=new Te(e.toString()+"/"+r);og(i,s,n)})}function SF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=10*1e3,kF=30*1e3,xF=5*60*1e3;class RF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new CF(e);const r=KE+(kF-KE)*Math.random();_l(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Tt(e,(i,s)=>{s>0&&ur(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),_l(this.reportStats_.bind(this),Math.floor(Math.random()*2*xF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Un;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Un||(Un={}));function Ty(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Iy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Un.ACK_USER_WRITE,this.source=Ty()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new Qh(ye(),n,this.revert)}}else return B(le(this.path)===e,"operationForChild called for unrelated child."),new Qh(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n){this.source=e,this.path=n,this.type=Un.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new nu(this.source,ye()):new nu(this.source,xe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Un.OVERWRITE}operationForChild(e){return ue(this.path)?new ks(this.source,ye(),this.snap.getImmediateChild(e)):new ks(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Un.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new ks(this.source,ye(),n.value):new Jo(this.source,ye(),n)}else return B(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jo(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function PF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(wF(o.childName,o.snapshotNode))}),Wa(t,i,"child_removed",e,r,n),Wa(t,i,"child_added",e,r,n),Wa(t,i,"child_moved",s,r,n),Wa(t,i,"child_changed",e,r,n),Wa(t,i,"value",e,r,n),i}function Wa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>bF(t,a,l)),o.forEach(a=>{const l=NF(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function NF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bF(t,e,n){if(e.childName==null||n.childName==null)throw ia("Should only compare child_ events.");const r=new ce(e.childName,e.snapshotNode),i=new ce(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e){return{eventCache:t,serverCache:e}}function yl(t,e,n,r){return of(new Pi(e,n,r),t.serverCache)}function iR(t,e,n,r){return of(t.eventCache,new Pi(e,n,r))}function Yh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cp;const DF=()=>(Cp||(Cp=new nn(_j)),Cp);class Ae{constructor(e,n=DF()){this.value=e,this.children=n}static fromObject(e){let n=new Ae(null);return Tt(e,(r,i)=>{n=n.set(new Te(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(ue(e))return null;{const r=le(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(xe(e),n);return s!=null?{path:ze(new Te(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=le(e),r=this.children.get(n);return r!==null?r.subtree(xe(e)):new Ae(null)}}set(e,n){if(ue(e))return new Ae(n,this.children);{const r=le(e),s=(this.children.get(r)||new Ae(null)).set(xe(e),n),o=this.children.insert(r,s);return new Ae(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=le(e),r=this.children.get(n);if(r){const i=r.remove(xe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ae(null):new Ae(this.value,s)}else return this}}get(e){if(ue(e))return this.value;{const n=le(e),r=this.children.get(n);return r?r.get(xe(e)):null}}setTree(e,n){if(ue(e))return n;{const r=le(e),s=(this.children.get(r)||new Ae(null)).setTree(xe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ae(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ze(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ue(e))return null;{const s=le(e),o=this.children.get(s);return o?o.findOnPath_(xe(e),ze(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const i=le(e),s=this.children.get(i);return s?s.foreachOnPath_(xe(e),ze(n,i),r):new Ae(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ze(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.writeTree_=e}static empty(){return new Hn(new Ae(null))}}function vl(t,e,n){if(ue(e))return new Hn(new Ae(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Gt(i,e);return s=s.updateChild(o,n),new Hn(t.writeTree_.set(i,s))}else{const i=new Ae(n),s=t.writeTree_.setTree(e,i);return new Hn(s)}}}function ag(t,e,n){let r=t;return Tt(n,(i,s)=>{r=vl(r,ze(e,i),s)}),r}function QE(t,e){if(ue(e))return Hn.empty();{const n=t.writeTree_.setTree(e,new Ae(null));return new Hn(n)}}function lg(t,e){return zs(t,e)!=null}function zs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Gt(n.path,e)):null}function YE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(We,(r,i)=>{e.push(new ce(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ce(r,i.value))}),e}function wi(t,e){if(ue(e))return t;{const n=zs(t,e);return n!=null?new Hn(new Ae(n)):new Hn(t.writeTree_.subtree(e))}}function ug(t){return t.writeTree_.isEmpty()}function Zo(t,e){return sR(ye(),t.writeTree_,e)}function sR(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=sR(ze(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ze(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t,e){return uR(e,t)}function OF(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=vl(t.visibleWrites,e,n)),t.lastWriteId=r}function LF(t,e,n,r){B(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ag(t.visibleWrites,e,n),t.lastWriteId=r}function MF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function VF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jF(a,r.path)?i=!1:In(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return FF(t),!0;if(r.snap)t.visibleWrites=QE(t.visibleWrites,r.path);else{const a=r.children;Tt(a,l=>{t.visibleWrites=QE(t.visibleWrites,ze(r.path,l))})}return!0}else return!1}function jF(t,e){if(t.snap)return In(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&In(ze(t.path,n),e))return!0;return!1}function FF(t){t.visibleWrites=oR(t.allWrites,UF,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function UF(t){return t.visible}function oR(t,e,n){let r=Hn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)In(n,o)?(a=Gt(n,o),r=vl(r,a,s.snap)):In(o,n)&&(a=Gt(o,n),r=vl(r,ye(),s.snap.getChild(a)));else if(s.children){if(In(n,o))a=Gt(n,o),r=ag(r,a,s.children);else if(In(o,n))if(a=Gt(o,n),ue(a))r=ag(r,ye(),s.children);else{const l=Mo(s.children,le(a));if(l){const c=l.getChild(xe(a));r=vl(r,ye(),c)}}}else throw ia("WriteRecord should have .snap or .children")}}return r}function aR(t,e,n,r,i){if(!r&&!i){const s=zs(t.visibleWrites,e);if(s!=null)return s;{const o=wi(t.visibleWrites,e);if(ug(o))return n;if(n==null&&!lg(o,ye()))return null;{const a=n||ee.EMPTY_NODE;return Zo(o,a)}}}else{const s=wi(t.visibleWrites,e);if(!i&&ug(s))return n;if(!i&&n==null&&!lg(s,ye()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(In(c.path,e)||In(e,c.path))},a=oR(t.allWrites,o,e),l=n||ee.EMPTY_NODE;return Zo(a,l)}}}function BF(t,e,n){let r=ee.EMPTY_NODE;const i=zs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(We,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=wi(t.visibleWrites,e);return n.forEachChild(We,(o,a)=>{const l=Zo(wi(s,new Te(o)),a);r=r.updateImmediateChild(o,l)}),YE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=wi(t.visibleWrites,e);return YE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function zF(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ze(e,n);if(lg(t.visibleWrites,s))return null;{const o=wi(t.visibleWrites,s);return ug(o)?i.getChild(n):Zo(o,i.getChild(n))}}function WF(t,e,n,r){const i=ze(e,n),s=zs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=wi(t.visibleWrites,i);return Zo(o,r.getNode().getImmediateChild(n))}else return null}function $F(t,e){return zs(t.visibleWrites,e)}function HF(t,e,n,r,i,s,o){let a;const l=wi(t.visibleWrites,e),c=zs(l,ye());if(c!=null)a=c;else if(n!=null)a=Zo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=m.getNext();for(;v&&h.length<i;)f(v,r)!==0&&h.push(v),v=m.getNext();return h}else return[]}function qF(){return{visibleWrites:Hn.empty(),allWrites:[],lastWriteId:-1}}function Xh(t,e,n,r){return aR(t.writeTree,t.treePath,e,n,r)}function Cy(t,e){return BF(t.writeTree,t.treePath,e)}function XE(t,e,n,r){return zF(t.writeTree,t.treePath,e,n,r)}function Jh(t,e){return $F(t.writeTree,ze(t.treePath,e))}function GF(t,e,n,r,i,s){return HF(t.writeTree,t.treePath,e,n,r,i,s)}function ky(t,e,n){return WF(t.writeTree,t.treePath,e,n)}function lR(t,e){return uR(ze(t.treePath,e),t.writeTree)}function uR(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,eu(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Zl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Xo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,eu(r,e.snapshotNode,i.oldSnap));else throw ia("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const cR=new QF;class xy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Pi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ky(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xs(this.viewCache_),s=GF(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YF(t){return{filter:t}}function XF(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function JF(t,e,n,r,i){const s=new KF;let o,a;if(n.type===Un.OVERWRITE){const c=n;c.source.fromUser?o=cg(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=Zh(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Un.MERGE){const c=n;c.source.fromUser?o=e4(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=hg(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Un.ACK_USER_WRITE){const c=n;c.revert?o=r4(t,e,c.path,r,i,s):o=t4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Un.LISTEN_COMPLETE)o=n4(t,e,n.path,r,s);else throw ia("Unknown operation type: "+n.type);const l=s.getChanges();return ZF(e,o,l),{viewCache:o,changes:l}}function ZF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Yh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(rR(Yh(e)))}}function hR(t,e,n,r,i,s){const o=e.eventCache;if(Jh(r,n)!=null)return e;{let a,l;if(ue(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xs(e),h=c instanceof ee?c:ee.EMPTY_NODE,f=Cy(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Xh(r,xs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=le(n);if(c===".priority"){B(Ai(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=XE(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=xe(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const m=XE(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(c).updateChild(h,m):f=o.getNode().getImmediateChild(c)}else f=ky(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return yl(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function Zh(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),v,null)}else{const v=le(n);if(!l.isCompleteForPath(n)&&Ai(n)>1)return e;const E=xe(n),N=l.getNode().getImmediateChild(v).updateChild(E,r);v===".priority"?c=h.updatePriority(l.getNode(),N):c=h.updateChild(l.getNode(),v,N,E,cR,null)}const f=iR(e,c,l.isFullyInitialized()||ue(n),h.filtersNodes()),m=new xy(i,f,s);return hR(t,f,n,i,m,a)}function cg(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const h=new xy(i,e,s);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=yl(e,c,!0,t.filter.filtersNodes());else{const f=le(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=yl(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=xe(n),v=a.getNode().getImmediateChild(f);let E;if(ue(m))E=r;else{const A=h.getCompleteChild(f);A!=null?gy(m)===".priority"&&A.getChild(Yx(m)).isEmpty()?E=A:E=A.updateChild(m,r):E=ee.EMPTY_NODE}if(v.equals(E))l=e;else{const A=t.filter.updateChild(a.getNode(),f,E,m,h,o);l=yl(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function JE(t,e){return t.eventCache.isCompleteForChild(e)}function e4(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=ze(n,l);JE(e,le(h))&&(a=cg(t,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=ze(n,l);JE(e,le(h))||(a=cg(t,a,h,c,i,s,o))}),a}function ZE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function hg(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ue(n)?c=r:c=new Ae(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),E=ZE(t,v,m);l=Zh(t,l,new Te(f),E,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const v=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!v){const E=e.serverCache.getNode().getImmediateChild(f),A=ZE(t,E,m);l=Zh(t,l,new Te(f),A,i,s,o,a)}}),l}function t4(t,e,n,r,i,s,o){if(Jh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Zh(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ue(n)){let c=new Ae(null);return l.getNode().forEachChild(Ro,(h,f)=>{c=c.set(new Te(h),f)}),hg(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ae(null);return r.foreach((h,f)=>{const m=ze(n,h);l.isCompleteForPath(m)&&(c=c.set(h,l.getNode().getChild(m)))}),hg(t,e,n,c,i,s,a,o)}}function n4(t,e,n,r,i){const s=e.serverCache,o=iR(e,s.getNode(),s.isFullyInitialized()||ue(n),s.isFiltered());return hR(t,o,n,r,cR,i)}function r4(t,e,n,r,i,s){let o;if(Jh(r,n)!=null)return e;{const a=new xy(r,e,i),l=e.eventCache.getNode();let c;if(ue(n)||le(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Xh(r,xs(e));else{const f=e.serverCache.getNode();B(f instanceof ee,"serverChildren would be complete if leaf node"),h=Cy(r,f)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=le(n);let f=ky(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?c=t.filter.updateChild(l,h,f,xe(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,ee.EMPTY_NODE,xe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xh(r,xs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Jh(r,ye())!=null,yl(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new wy(r.getIndex()),s=TF(r);this.processor_=YF(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ee.EMPTY_NODE,a.getNode(),null),h=new Pi(l,o.isFullyInitialized(),i.filtersNodes()),f=new Pi(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=of(f,h),this.eventGenerator_=new AF(this.query_)}get query(){return this.query_}}function s4(t){return t.viewCache_.serverCache.getNode()}function o4(t){return Yh(t.viewCache_)}function a4(t,e){const n=xs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function eT(t){return t.eventRegistrations_.length===0}function l4(t,e){t.eventRegistrations_.push(e)}function tT(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function nT(t,e,n,r){e.type===Un.MERGE&&e.source.queryId!==null&&(B(xs(t.viewCache_),"We should always have a full cache before handling merges"),B(Yh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=JF(t.processor_,i,e,n,r);return XF(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,dR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function u4(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(We,(s,o)=>{r.push(Xo(s,o))}),n.isFullyInitialized()&&r.push(rR(n.getNode())),dR(t,r,n.getNode(),e)}function dR(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return PF(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ed;class fR{constructor(){this.views=new Map}}function c4(t){B(!ed,"__referenceConstructor has already been defined"),ed=t}function h4(){return B(ed,"Reference.ts has not been loaded"),ed}function d4(t){return t.views.size===0}function Ry(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),nT(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(nT(o,e,n,r));return s}}function pR(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Xh(n,i?r:null),l=!1;a?l=!0:r instanceof ee?(a=Cy(n,r),l=!1):(a=ee.EMPTY_NODE,l=!1);const c=of(new Pi(a,l,!1),new Pi(r,i,!1));return new i4(e,c)}return o}function f4(t,e,n,r,i,s){const o=pR(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),l4(o,n),u4(o,n)}function p4(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Ni(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(tT(c,n,r)),eT(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(tT(l,n,r)),eT(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ni(t)&&s.push(new(h4())(e._repo,e._path)),{removed:s,events:o}}function mR(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ei(t,e){let n=null;for(const r of t.views.values())n=n||a4(r,e);return n}function gR(t,e){if(e._queryParams.loadsAllData())return lf(t);{const r=e._queryIdentifier;return t.views.get(r)}}function _R(t,e){return gR(t,e)!=null}function Ni(t){return lf(t)!=null}function lf(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td;function m4(t){B(!td,"__referenceConstructor has already been defined"),td=t}function g4(){return B(td,"Reference.ts has not been loaded"),td}let _4=1;class rT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=qF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yR(t,e,n,r,i){return OF(t.pendingWriteTree_,e,n,r,i),i?fa(t,new ks(Ty(),e,n)):[]}function y4(t,e,n,r){LF(t.pendingWriteTree_,e,n,r);const i=Ae.fromObject(n);return fa(t,new Jo(Ty(),e,i))}function ui(t,e,n=!1){const r=MF(t.pendingWriteTree_,e);if(VF(t.pendingWriteTree_,e)){let s=new Ae(null);return r.snap!=null?s=s.set(ye(),!0):Tt(r.children,o=>{s=s.set(new Te(o),!0)}),fa(t,new Qh(r.path,s,n))}else return[]}function Ou(t,e,n){return fa(t,new ks(Iy(),e,n))}function v4(t,e,n){const r=Ae.fromObject(n);return fa(t,new Jo(Iy(),e,r))}function w4(t,e){return fa(t,new nu(Iy(),e))}function E4(t,e,n){const r=Py(t,n);if(r){const i=Ny(r),s=i.path,o=i.queryId,a=Gt(s,e),l=new nu(Sy(o),a);return by(t,s,l)}else return[]}function nd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||_R(o,e))){const l=p4(o,e,n,r);d4(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,v)=>Ni(v));if(h&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const v=S4(m);for(let E=0;E<v.length;++E){const A=v[E],N=A.query,I=TR(t,A);t.listenProvider_.startListening(wl(N),ru(t,N),I.hashFn,I.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(wl(e),null):c.forEach(m=>{const v=t.queryToTagMap.get(uf(m));t.listenProvider_.stopListening(wl(m),v)}))}C4(t,c)}return a}function vR(t,e,n,r){const i=Py(t,r);if(i!=null){const s=Ny(i),o=s.path,a=s.queryId,l=Gt(o,e),c=new ks(Sy(a),l,n);return by(t,o,c)}else return[]}function T4(t,e,n,r){const i=Py(t,r);if(i){const s=Ny(i),o=s.path,a=s.queryId,l=Gt(o,e),c=Ae.fromObject(n),h=new Jo(Sy(a),l,c);return by(t,o,h)}else return[]}function dg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,v)=>{const E=Gt(m,i);s=s||Ei(v,E),o=o||Ni(v)});let a=t.syncPointTree_.get(i);a?(o=o||Ni(a),s=s||Ei(a,ye())):(a=new fR,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ee.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,E)=>{const A=Ei(E,ye());A&&(s=s.updateImmediateChild(v,A))}));const c=_R(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=uf(e);B(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const v=k4();t.queryToTagMap.set(m,v),t.tagToQueryMap.set(v,m)}const h=af(t.pendingWriteTree_,i);let f=f4(a,e,n,h,s,l);if(!c&&!o&&!r){const m=gR(a,e);f=f.concat(x4(t,e,m))}return f}function Ay(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Gt(o,e),c=Ei(a,l);if(c)return c});return aR(i,e,s,n,!0)}function I4(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Gt(c,n);r=r||Ei(h,f)});let i=t.syncPointTree_.get(n);i?r=r||Ei(i,ye()):(i=new fR,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Pi(r,!0,!1):null,a=af(t.pendingWriteTree_,e._path),l=pR(i,e,a,s?o.getNode():ee.EMPTY_NODE,s);return o4(l)}function fa(t,e){return wR(e,t.syncPointTree_,null,af(t.pendingWriteTree_,ye()))}function wR(t,e,n,r){if(ue(t.path))return ER(t,e,n,r);{const i=e.get(ye());n==null&&i!=null&&(n=Ei(i,ye()));let s=[];const o=le(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=lR(r,o);s=s.concat(wR(a,l,c,h))}return i&&(s=s.concat(Ry(i,t,r,n))),s}}function ER(t,e,n,r){const i=e.get(ye());n==null&&i!=null&&(n=Ei(i,ye()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=lR(r,o),h=t.operationForChild(o);h&&(s=s.concat(ER(h,a,l,c)))}),i&&(s=s.concat(Ry(i,t,r,n))),s}function TR(t,e){const n=e.query,r=ru(t,n);return{hashFn:()=>(s4(e)||ee.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?E4(t,n._path,r):w4(t,n._path);{const s=wj(i,n);return nd(t,n,null,s)}}}}function ru(t,e){const n=uf(e);return t.queryToTagMap.get(n)}function uf(t){return t._path.toString()+"$"+t._queryIdentifier}function Py(t,e){return t.tagToQueryMap.get(e)}function Ny(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function by(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=af(t.pendingWriteTree_,e);return Ry(r,n,i,null)}function S4(t){return t.fold((e,n,r)=>{if(n&&Ni(n))return[lf(n)];{let i=[];return n&&(i=mR(n)),Tt(r,(s,o)=>{i=i.concat(o)}),i}})}function wl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(g4())(t._repo,t._path):t}function C4(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=uf(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function k4(){return _4++}function x4(t,e,n){const r=e._path,i=ru(t,e),s=TR(t,n),o=t.listenProvider_.startListening(wl(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!Ni(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,f)=>{if(!ue(c)&&h&&Ni(h))return[lf(h).query];{let m=[];return h&&(m=m.concat(mR(h).map(v=>v.query))),Tt(f,(v,E)=>{m=m.concat(E)}),m}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(wl(h),ru(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Dy(n)}node(){return this.node_}}class Oy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ze(this.path_,e);return new Oy(this.syncTree_,n)}node(){return Ay(this.syncTree_,this.path_)}}const R4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},iT=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return A4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return P4(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},A4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},P4=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},IR=function(t,e,n,r){return Ly(e,new Oy(n,t),r)},SR=function(t,e,n){return Ly(t,new Dy(e),n)};function Ly(t,e,n){const r=t.getPriority().val(),i=iT(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=iT(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new pt(a,Xe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new pt(i))),o.forEachChild(We,(a,l)=>{const c=Ly(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Vy(t,e){let n=e instanceof Te?e:new Te(e),r=t,i=le(n);for(;i!==null;){const s=Mo(r.node.children,i)||{children:{},childCount:0};r=new My(i,r,s),n=xe(n),i=le(n)}return r}function pa(t){return t.node.value}function CR(t,e){t.node.value=e,fg(t)}function kR(t){return t.node.childCount>0}function N4(t){return pa(t)===void 0&&!kR(t)}function cf(t,e){Tt(t.node.children,(n,r)=>{e(new My(n,t,r))})}function xR(t,e,n,r){n&&e(t),cf(t,i=>{xR(i,e,!0)})}function b4(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Lu(t){return new Te(t.parent===null?t.name:Lu(t.parent)+"/"+t.name)}function fg(t){t.parent!==null&&D4(t.parent,t.name,t)}function D4(t,e,n){const r=N4(n),i=ur(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,fg(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,fg(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4=/[\[\].#$\/\u0000-\u001F\u007F]/,L4=/[\[\].#$\u0000-\u001F\u007F]/,kp=10*1024*1024,jy=function(t){return typeof t=="string"&&t.length!==0&&!O4.test(t)},RR=function(t){return typeof t=="string"&&t.length!==0&&!L4.test(t)},M4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),RR(t)},AR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!rf(t)||t&&typeof t=="object"&&ur(t,".sv")},rd=function(t,e,n,r){r&&e===void 0||hf(jo(t,"value"),e,n)},hf=function(t,e,n){const r=n instanceof Te?new eF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ji(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ji(r)+" with contents = "+e.toString());if(rf(e))throw new Error(t+"contains "+e.toString()+" "+Ji(r));if(typeof e=="string"&&e.length>kp/3&&kd(e)>kp)throw new Error(t+"contains a string greater than "+kp+" utf8 bytes "+Ji(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!jy(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ji(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tF(r,o),hf(t,a,r),nF(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ji(r)+" in addition to actual children.")}},V4=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Jl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!jy(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Zj);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&In(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},PR=function(t,e,n,r){const i=jo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Tt(e,(o,a)=>{const l=new Te(o);if(hf(i,a,ze(n,l)),gy(l)===".priority"&&!AR(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),V4(i,s)},j4=function(t,e,n){if(rf(e))throw new Error(jo(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!AR(e))throw new Error(jo(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},NR=function(t,e,n,r){if(!RR(n))throw new Error(jo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},F4=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),NR(t,e,n)},ss=function(t,e){if(le(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},U4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!jy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!M4(n))throw new Error(jo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function df(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!_y(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function bR(t,e,n){df(t,n),DR(t,r=>_y(r,e))}function An(t,e,n){df(t,n),DR(t,r=>In(r,e)||In(e,r))}function DR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(z4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function z4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();gl&&yt("event: "+n.toString()),ha(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4="repo_interrupt",$4=25;class H4{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new B4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kh(),this.transactionQueueTree_=new My,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function q4(t,e,n){if(t.stats_=py(t.repoInfo_),t.forceRestClient_||Sj())t.server_=new Gh(t.repoInfo_,(r,i,s,o)=>{sT(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>oT(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Nr(t.repoInfo_,e,(r,i,s,o)=>{sT(t,r,i,s,o)},r=>{oT(t,r)},r=>{G4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Aj(t.repoInfo_,()=>new RF(t.stats_,t.server_)),t.infoData_=new IF,t.infoSyncTree_=new rT({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ou(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fy(t,"connected",!1),t.serverSyncTree_=new rT({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);An(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function OR(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ff(t){return R4({timestamp:OR(t)})}function sT(t,e,n,r,i){t.dataUpdateCount++;const s=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Rh(n,c=>Xe(c));o=T4(t.serverSyncTree_,s,l,i)}else{const l=Xe(n);o=vR(t.serverSyncTree_,s,l,i)}else if(r){const l=Rh(n,c=>Xe(c));o=v4(t.serverSyncTree_,s,l)}else{const l=Xe(n);o=Ou(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ea(t,s)),An(t.eventQueue_,a,o)}function oT(t,e){Fy(t,"connected",e),e===!1&&X4(t)}function G4(t,e){Tt(e,(n,r)=>{Fy(t,n,r)})}function Fy(t,e,n){const r=new Te("/.info/"+e),i=Xe(n);t.infoData_.updateSnapshot(r,i);const s=Ou(t.infoSyncTree_,r,i);An(t.eventQueue_,r,s)}function Uy(t){return t.nextWriteId_++}function K4(t,e,n){const r=I4(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Xe(i).withIndex(e._queryParams.getIndex());dg(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ou(t.serverSyncTree_,e._path,s);else{const a=ru(t.serverSyncTree_,e);o=vR(t.serverSyncTree_,e._path,s,a)}return An(t.eventQueue_,e._path,o),nd(t.serverSyncTree_,e,n,null,!0),s},i=>(Mu(t,"get for query "+ct(e)+" failed: "+i),Promise.reject(new Error(i))))}function Q4(t,e,n,r,i){Mu(t,"set",{path:e.toString(),value:n,priority:r});const s=ff(t),o=Xe(n,r),a=Ay(t.serverSyncTree_,e),l=SR(o,a,s),c=Uy(t),h=yR(t.serverSyncTree_,e,l,c,!0);df(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,v)=>{const E=m==="ok";E||Yt("set at "+e+" failed: "+m);const A=ui(t.serverSyncTree_,c,!E);An(t.eventQueue_,e,A),bi(t,i,m,v)});const f=zy(t,e);ea(t,f),An(t.eventQueue_,f,[])}function Y4(t,e,n,r){Mu(t,"update",{path:e.toString(),value:n});let i=!0;const s=ff(t),o={};if(Tt(n,(a,l)=>{i=!1,o[a]=IR(ze(e,a),Xe(l),t.serverSyncTree_,s)}),i)yt("update() called with empty data.  Don't do anything."),bi(t,r,"ok",void 0);else{const a=Uy(t),l=y4(t.serverSyncTree_,e,o,a);df(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Yt("update at "+e+" failed: "+c);const m=ui(t.serverSyncTree_,a,!f),v=m.length>0?ea(t,e):e;An(t.eventQueue_,v,m),bi(t,r,c,h)}),Tt(n,c=>{const h=zy(t,ze(e,c));ea(t,h)}),An(t.eventQueue_,e,[])}}function X4(t){Mu(t,"onDisconnectEvents");const e=ff(t),n=Kh();og(t.onDisconnect_,ye(),(i,s)=>{const o=IR(i,s,t.serverSyncTree_,e);da(n,i,o)});let r=[];og(n,ye(),(i,s)=>{r=r.concat(Ou(t.serverSyncTree_,i,s));const o=zy(t,i);ea(t,o)}),t.onDisconnect_=Kh(),An(t.eventQueue_,ye(),r)}function J4(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&sg(t.onDisconnect_,e),bi(t,n,r,i)})}function aT(t,e,n,r){const i=Xe(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&da(t.onDisconnect_,e,i),bi(t,r,s,o)})}function Z4(t,e,n,r,i){const s=Xe(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&da(t.onDisconnect_,e,s),bi(t,i,o,a)})}function eU(t,e,n,r){if(xh(n)){yt("onDisconnect().update() called with empty data.  Don't do anything."),bi(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Tt(n,(o,a)=>{const l=Xe(a);da(t.onDisconnect_,ze(e,o),l)}),bi(t,r,i,s)})}function tU(t,e,n){let r;le(e._path)===".info"?r=dg(t.infoSyncTree_,e,n):r=dg(t.serverSyncTree_,e,n),bR(t.eventQueue_,e._path,r)}function pg(t,e,n){let r;le(e._path)===".info"?r=nd(t.infoSyncTree_,e,n):r=nd(t.serverSyncTree_,e,n),bR(t.eventQueue_,e._path,r)}function nU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(W4)}function Mu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),yt(n,...e)}function bi(t,e,n,r){e&&ha(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function LR(t,e,n){return Ay(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function By(t,e=t.transactionQueueTree_){if(e||pf(t,e),pa(e)){const n=VR(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&rU(t,Lu(e),n)}else kR(e)&&cf(e,n=>{By(t,n)})}function rU(t,e,n){const r=n.map(c=>c.currentWriteId),i=LR(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Gt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Mu(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(ui(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();pf(t,Vy(t.transactionQueueTree_,e)),By(t,t.transactionQueueTree_),An(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)ha(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Yt("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}ea(t,e)}},o)}function ea(t,e){const n=MR(t,e),r=Lu(n),i=VR(t,n);return iU(t,i,r),r}function iU(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Gt(n,l.path);let h=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,i=i.concat(ui(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=$4)h=!0,f="maxretry",i=i.concat(ui(t.serverSyncTree_,l.currentWriteId,!0));else{const m=LR(t,l.path,o);l.currentInputSnapshot=m;const v=e[a].update(m.val());if(v!==void 0){hf("transaction failed: Data returned ",v,l.path);let E=Xe(v);typeof v=="object"&&v!=null&&ur(v,".priority")||(E=E.updatePriority(m.getPriority()));const N=l.currentWriteId,I=ff(t),T=SR(E,m,I);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=T,l.currentWriteId=Uy(t),o.splice(o.indexOf(N),1),i=i.concat(yR(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),i=i.concat(ui(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",i=i.concat(ui(t.serverSyncTree_,l.currentWriteId,!0))}An(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}pf(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ha(r[a]);By(t,t.transactionQueueTree_)}function MR(t,e){let n,r=t.transactionQueueTree_;for(n=le(e);n!==null&&pa(r)===void 0;)r=Vy(r,n),e=xe(e),n=le(e);return r}function VR(t,e){const n=[];return jR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function jR(t,e,n){const r=pa(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);cf(e,i=>{jR(t,i,n)})}function pf(t,e){const n=pa(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,CR(e,n.length>0?n:void 0)}cf(e,r=>{pf(t,r)})}function zy(t,e){const n=Lu(MR(t,e)),r=Vy(t.transactionQueueTree_,e);return b4(r,i=>{xp(t,i)}),xp(t,r),xR(r,i=>{xp(t,i)}),n}function xp(t,e){const n=pa(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ui(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?CR(e,void 0):n.length=s+1,An(t.eventQueue_,Lu(e),i);for(let o=0;o<r.length;o++)ha(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function oU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const lT=function(t,e){const n=aU(t),r=n.namespace;n.domain==="firebase.com"&&Br(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Br("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mj();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Bx(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Te(n.pathString)}},aU=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=sU(t.substring(h,f)));const m=oU(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",lU=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=uT.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=uT.charAt(e[i]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ct(this.snapshot.exportVal())}}class cU{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class hU{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Zn;return J4(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ss("OnDisconnect.remove",this._path);const e=new Zn;return aT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ss("OnDisconnect.set",this._path),rd("OnDisconnect.set",e,this._path,!1);const n=new Zn;return aT(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){ss("OnDisconnect.setWithPriority",this._path),rd("OnDisconnect.setWithPriority",e,this._path,!1),j4("OnDisconnect.setWithPriority",n);const r=new Zn;return Z4(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){ss("OnDisconnect.update",this._path),PR("OnDisconnect.update",e,this._path);const n=new Zn;return eU(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Wy{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ue(this._path)?null:gy(this._path)}get ref(){return new $r(this._repo,this._path)}get _queryIdentifier(){const e=GE(this._queryParams),n=dy(e);return n==="{}"?"default":n}get _queryObject(){return GE(this._queryParams)}isEqual(e){if(e=ve(e),!(e instanceof Wy))return!1;const n=this._repo===e._repo,r=_y(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Jj(this._path)}}class $r extends Wy{constructor(e,n){super(e,n,new Ey,!1)}get parent(){const e=Yx(this._path);return e===null?null:new $r(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class iu{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),r=su(this.ref,e);return new iu(this._node.getChild(n),r,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new iu(i,su(this.ref,r),We)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function je(t,e){return t=ve(t),t._checkNotDeleted("ref"),e!==void 0?su(t._root,e):t._root}function su(t,e){return t=ve(t),le(t._path)===null?F4("child","path",e):NR("child","path",e),new $r(t._repo,ze(t._path,e))}function dU(t){return t=ve(t),new hU(t._repo,t._path)}function fU(t,e){t=ve(t),ss("push",t._path),rd("push",e,t._path,!0);const n=OR(t._repo),r=lU(n),i=su(t,r),s=su(t,r);let o;return e!=null?o=Rs(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function mf(t){return ss("remove",t._path),Rs(t,null)}function Rs(t,e){t=ve(t),ss("set",t._path),rd("set",e,t._path,!1);const n=new Zn;return Q4(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ar(t,e){PR("update",e,t._path);const n=new Zn;return Y4(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function UR(t){t=ve(t);const e=new FR(()=>{}),n=new gf(e);return K4(t._repo,t,n).then(r=>new iu(r,new $r(t._repo,t._path),t._queryParams.getIndex()))}class gf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new uU("value",this,new iu(e.snapshotNode,new $r(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cU(this,e,n):null}matches(e){return e instanceof gf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function pU(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(h,f)=>{pg(t._repo,t,a),l(h,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new FR(n,s||void 0),a=new gf(o);return tU(t._repo,t,a),()=>pg(t._repo,t,a)}function _f(t,e,n,r){return pU(t,"value",e,n,r)}function BR(t,e,n){pg(t._repo,t,null)}c4($r);m4($r);/**
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
 */const mU="FIREBASE_DATABASE_EMULATOR_HOST",mg={};let gU=!1;function _U(t,e,n,r){t.repoInfo_=new Bx(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function yU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Br("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),yt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lT(s,i),a=o.repoInfo,l;typeof process<"u"&&AE&&(l=AE[mU]),l?(s=`http://${l}?ns=${a.namespace}`,o=lT(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new kj(t.name,t.options,e);U4("Invalid Firebase Database URL",o),ue(o.path)||Br("Database URL must point to the root of a Firebase Database (not including a child path).");const h=wU(a,t,c,new Cj(t.name,n));return new EU(h,t)}function vU(t,e){const n=mg[e];(!n||n[t.key]!==t)&&Br(`Database ${e}(${t.repoInfo_}) has already been deleted.`),nU(t),delete n[t.key]}function wU(t,e,n,r){let i=mg[e.name];i||(i={},mg[e.name]=i);let s=i[t.toURLString()];return s&&Br("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new H4(t,gU,n,r),i[t.toURLString()]=s,s}class EU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(q4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $r(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Br("Cannot call "+e+" on a deleted database.")}}function TU(t=Ad(),e){const n=Ms(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=aC("database");r&&IU(n,...r)}return n}function IU(t,e,n,r={}){t=ve(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Br("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Br('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zc(Zc.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:cC(r.mockUserToken,t.app.options.projectId);s=new Zc(o)}_U(i,e,n,s)}/**
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
 */function SU(t){uj(Vs),Gn(new xn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return yU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),an(PE,NE,t),an(PE,NE,"esm2017")}Nr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};SU();const zR="@firebase/installations",$y="0.6.9";/**
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
 */const WR=1e4,$R=`w:${$y}`,HR="FIS_v2",CU="https://firebaseinstallations.googleapis.com/v1",kU=60*60*1e3,xU="installations",RU="Installations";/**
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
 */const AU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},As=new Ls(xU,RU,AU);function qR(t){return t instanceof lr&&t.code.includes("request-failed")}/**
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
 */function GR({projectId:t}){return`${CU}/projects/${t}/installations`}function KR(t){return{token:t.token,requestStatus:2,expiresIn:NU(t.expiresIn),creationTime:Date.now()}}async function QR(t,e){const r=(await e.json()).error;return As.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function YR({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function PU(t,{refreshToken:e}){const n=YR(t);return n.append("Authorization",bU(e)),n}async function XR(t){const e=await t();return e.status>=500&&e.status<600?t():e}function NU(t){return Number(t.replace("s","000"))}function bU(t){return`${HR} ${t}`}/**
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
 */async function DU({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=GR(t),i=YR(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:HR,appId:t.appId,sdkVersion:$R},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await XR(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:KR(c.authToken)}}else throw await QR("Create Installation",l)}/**
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
 */function JR(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function OU(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const LU=/^[cdef][\w-]{21}$/,gg="";function MU(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=VU(t);return LU.test(n)?n:gg}catch{return gg}}function VU(t){return OU(t).substr(0,22)}/**
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
 */function yf(t){return`${t.appName}!${t.appId}`}/**
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
 */const ZR=new Map;function eA(t,e){const n=yf(t);tA(n,e),jU(n,e)}function tA(t,e){const n=ZR.get(t);if(n)for(const r of n)r(e)}function jU(t,e){const n=FU();n&&n.postMessage({key:t,fid:e}),UU()}let os=null;function FU(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=t=>{tA(t.data.key,t.data.fid)}),os}function UU(){ZR.size===0&&os&&(os.close(),os=null)}/**
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
 */const BU="firebase-installations-database",zU=1,Ps="firebase-installations-store";let Rp=null;function Hy(){return Rp||(Rp=Rd(BU,zU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ps)}}})),Rp}async function id(t,e){const n=yf(t),i=(await Hy()).transaction(Ps,"readwrite"),s=i.objectStore(Ps),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&eA(t,e.fid),e}async function nA(t){const e=yf(t),r=(await Hy()).transaction(Ps,"readwrite");await r.objectStore(Ps).delete(e),await r.done}async function vf(t,e){const n=yf(t),i=(await Hy()).transaction(Ps,"readwrite"),s=i.objectStore(Ps),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&eA(t,a.fid),a}/**
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
 */async function qy(t){let e;const n=await vf(t.appConfig,r=>{const i=WU(r),s=$U(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===gg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WU(t){const e=t||{fid:MU(),registrationStatus:0};return rA(e)}function $U(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(As.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=HU(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qU(t)}:{installationEntry:e}}async function HU(t,e){try{const n=await DU(t,e);return id(t.appConfig,n)}catch(n){throw qR(n)&&n.customData.serverCode===409?await nA(t.appConfig):await id(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function qU(t){let e=await cT(t.appConfig);for(;e.registrationStatus===1;)await JR(100),e=await cT(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qy(t);return r||n}return e}function cT(t){return vf(t,e=>{if(!e)throw As.create("installation-not-found");return rA(e)})}function rA(t){return GU(t)?{fid:t.fid,registrationStatus:0}:t}function GU(t){return t.registrationStatus===1&&t.registrationTime+WR<Date.now()}/**
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
 */async function KU({appConfig:t,heartbeatServiceProvider:e},n){const r=QU(t,n),i=PU(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:$R,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await XR(()=>fetch(r,a));if(l.ok){const c=await l.json();return KR(c)}else throw await QR("Generate Auth Token",l)}function QU(t,{fid:e}){return`${GR(t)}/${e}/authTokens:generate`}/**
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
 */async function Gy(t,e=!1){let n;const r=await vf(t.appConfig,s=>{if(!iA(s))throw As.create("not-registered");const o=s.authToken;if(!e&&JU(o))return s;if(o.requestStatus===1)return n=YU(t,e),s;{if(!navigator.onLine)throw As.create("app-offline");const a=eB(s);return n=XU(t,a),a}});return n?await n:r.authToken}async function YU(t,e){let n=await hT(t.appConfig);for(;n.authToken.requestStatus===1;)await JR(100),n=await hT(t.appConfig);const r=n.authToken;return r.requestStatus===0?Gy(t,e):r}function hT(t){return vf(t,e=>{if(!iA(e))throw As.create("not-registered");const n=e.authToken;return tB(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function XU(t,e){try{const n=await KU(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await id(t.appConfig,r),n}catch(n){if(qR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await id(t.appConfig,r)}throw n}}function iA(t){return t!==void 0&&t.registrationStatus===2}function JU(t){return t.requestStatus===2&&!ZU(t)}function ZU(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+kU}function eB(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function tB(t){return t.requestStatus===1&&t.requestTime+WR<Date.now()}/**
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
 */async function nB(t){const e=t,{installationEntry:n,registrationPromise:r}=await qy(e);return r?r.catch(console.error):Gy(e).catch(console.error),n.fid}/**
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
 */async function rB(t,e=!1){const n=t;return await iB(n),(await Gy(n,e)).token}async function iB(t){const{registrationPromise:e}=await qy(t);e&&await e}/**
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
 */function sB(t){if(!t||!t.options)throw Ap("App Configuration");if(!t.name)throw Ap("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ap(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ap(t){return As.create("missing-app-config-values",{valueName:t})}/**
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
 */const sA="installations",oB="installations-internal",aB=t=>{const e=t.getProvider("app").getImmediate(),n=sB(e),r=Ms(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},lB=t=>{const e=t.getProvider("app").getImmediate(),n=Ms(e,sA).getImmediate();return{getId:()=>nB(n),getToken:i=>rB(n,i)}};function uB(){Gn(new xn(sA,aB,"PUBLIC")),Gn(new xn(oB,lB,"PRIVATE"))}uB();an(zR,$y);an(zR,$y,"esm2017");/**
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
 */const cB="/firebase-messaging-sw.js",hB="/firebase-cloud-messaging-push-scope",oA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",dB="https://fcmregistrations.googleapis.com/v1",aA="google.c.a.c_id",fB="google.c.a.c_l",pB="google.c.a.ts",mB="google.c.a.e";var dT;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(dT||(dT={}));/**
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
 */var ou;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(ou||(ou={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function gB(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Pp="fcm_token_details_db",_B=5,fT="fcm_token_object_Store";async function yB(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Pp))return null;let e=null;return(await Rd(Pp,_B,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(fT))return;const l=o.objectStore(fT),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:_r(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:_r(h.auth),p256dh:_r(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:_r(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:_r(h.auth),p256dh:_r(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:_r(h.vapidKey)}}}}}})).close(),await dp(Pp),await dp("fcm_vapid_details_db"),await dp("undefined"),vB(e)?e:null}function vB(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const wB="firebase-messaging-database",EB=1,Ns="firebase-messaging-store";let Np=null;function Ky(){return Np||(Np=Rd(wB,EB,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ns)}}})),Np}async function lA(t){const e=Yy(t),r=await(await Ky()).transaction(Ns).objectStore(Ns).get(e);if(r)return r;{const i=await yB(t.appConfig.senderId);if(i)return await Qy(t,i),i}}async function Qy(t,e){const n=Yy(t),i=(await Ky()).transaction(Ns,"readwrite");return await i.objectStore(Ns).put(e,n),await i.done,e}async function TB(t){const e=Yy(t),r=(await Ky()).transaction(Ns,"readwrite");await r.objectStore(Ns).delete(e),await r.done}function Yy({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IB={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Nt=new Ls("messaging","Messaging",IB);/**
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
 */async function SB(t,e){const n=await Jy(t),r=cA(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Xy(t.appConfig),i)).json()}catch(o){throw Nt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Nt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Nt.create("token-subscribe-no-token");return s.token}async function CB(t,e){const n=await Jy(t),r=cA(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Xy(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Nt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Nt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Nt.create("token-update-no-token");return s.token}async function uA(t,e){const r={method:"DELETE",headers:await Jy(t)};try{const s=await(await fetch(`${Xy(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Nt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Nt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Xy({projectId:t}){return`${dB}/projects/${t}/registrations`}async function Jy({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function cA({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==oA&&(i.web.applicationPubKey=r),i}/**
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
 */const kB=7*24*60*60*1e3;async function xB(t){const e=await PB(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:_r(e.getKey("auth")),p256dh:_r(e.getKey("p256dh"))},r=await lA(t.firebaseDependencies);if(r){if(NB(r.subscriptionOptions,n))return Date.now()>=r.createTime+kB?AB(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await uA(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return pT(t.firebaseDependencies,n)}else return pT(t.firebaseDependencies,n)}async function RB(t){const e=await lA(t.firebaseDependencies);e&&(await uA(t.firebaseDependencies,e.token),await TB(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function AB(t,e){try{const n=await CB(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Qy(t.firebaseDependencies,r),n}catch(n){throw n}}async function pT(t,e){const r={token:await SB(t,e),createTime:Date.now(),subscriptionOptions:e};return await Qy(t,r),r.token}async function PB(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:gB(e)})}function NB(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function mT(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return bB(e,t),DB(e,t),OB(e,t),e}function bB(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function DB(t,e){e.data&&(t.data=e.data)}function OB(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function LB(t){return typeof t=="object"&&!!t&&aA in t}/**
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
 */function MB(t){if(!t||!t.options)throw bp("App Configuration Object");if(!t.name)throw bp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw bp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function bp(t){return Nt.create("missing-app-config-values",{valueName:t})}/**
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
 */class VB{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=MB(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function hA(t){try{t.swRegistration=await navigator.serviceWorker.register(cB,{scope:hB}),t.swRegistration.update().catch(()=>{})}catch(e){throw Nt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function jB(t,e){if(!e&&!t.swRegistration&&await hA(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Nt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function FB(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=oA)}/**
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
 */async function dA(t,e){if(!navigator)throw Nt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Nt.create("permission-blocked");return await FB(t,e==null?void 0:e.vapidKey),await jB(t,e==null?void 0:e.serviceWorkerRegistration),xB(t)}/**
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
 */async function UB(t,e,n){const r=BB(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[aA],message_name:n[fB],message_time:n[pB],message_device_time:Math.floor(Date.now()/1e3)})}function BB(t){switch(t){case ou.NOTIFICATION_CLICKED:return"notification_open";case ou.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zB(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ou.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(mT(n)):t.onMessageHandler.next(mT(n)));const r=n.data;LB(r)&&r[mB]==="1"&&await UB(t,n.messageType,r)}const gT="@firebase/messaging",_T="0.12.12";/**
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
 */const WB=t=>{const e=new VB(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>zB(e,n)),e},$B=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>dA(e,r)}};function HB(){Gn(new xn("messaging",WB,"PUBLIC")),Gn(new xn("messaging-internal",$B,"PRIVATE")),an(gT,_T),an(gT,_T,"esm2017")}/**
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
 */async function Zy(){try{await fC()}catch{return!1}return typeof window<"u"&&dC()&&Mb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function qB(t){if(!navigator)throw Nt.create("only-available-in-window");return t.swRegistration||await hA(t),RB(t)}/**
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
 */function GB(t,e){if(!navigator)throw Nt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t=Ad()){return Zy().then(e=>{if(!e)throw Nt.create("unsupported-browser")},e=>{throw Nt.create("indexed-db-unsupported")}),Ms(ve(t),"messaging").getImmediate()}async function KB(t,e){return t=ve(t),dA(t,e)}function QB(t){return t=ve(t),qB(t)}function YB(t,e){return t=ve(t),GB(t,e)}HB();const pA=Object.freeze(Object.defineProperty({__proto__:null,deleteToken:QB,getMessaging:fA,getToken:KB,isSupported:Zy,onMessage:YB},Symbol.toStringTag,{value:"Module"})),XB={apiKey:"AIzaSyAbAb2YcqvSaahSV_UITjQtk8UArYSaDdY",authDomain:"dingo-new-version.firebaseapp.com",databaseURL:"https://dingo-new-version-default-rtdb.firebaseio.com",projectId:"dingo-new-version",storageBucket:"dingo-new-version.firebasestorage.app",messagingSenderId:"245470329002",appId:"1:245470329002:web:f0fae2a906e773629578d3"},JB="GG6zruC_lQSTKwuBvOudnROxxtXFMGufChhrzU7M6vQ",wf=_C(XB),Vu=fL(wf),et=cx(wf),Fe=TU(wf);let au=null;Zy().then(t=>{t&&(au=fA(wf))}).catch(()=>{});const ZB="modulepreload",e3=function(t){return"/DINGO-NEW-VERSION-/"+t},yT={},ev=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=e3(l),l in yT)return;yT[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":ZB,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,v)=>{f.addEventListener("load",m),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function t3(){return String(Math.floor(1e7+Math.random()*9e7))}async function mA(t,e){const n=Qt(et,"users",t);(await Au(n)).exists()?await pn(n,{isOnline:!0}):await Sx(n,{displayName:e.displayName||"Player",email:e.email||"",avatar:e.avatar||"🎯",color:e.color||"#00ffcc",shortId:t3(),wins:0,losses:0,total:0,winRate:0,streak:0,friends:[],isOnline:!0,fcmToken:null,createdAt:Pu()})}async function n3(t){const e=await Au(Qt(et,"users",t));return e.exists()?{uid:t,...e.data()}:null}async function gA(t,e){await pn(Qt(et,"users",t),e)}async function vT(t,e){try{await pn(Qt(et,"users",t),{isOnline:e,lastSeen:Pu()})}catch{}}async function r3(t,e){await pn(Qt(et,"users",t),{fcmToken:e})}async function i3(t){const{collection:e,query:n,where:r,getDocs:i}=await ev(async()=>{const{collection:a,query:l,where:c,getDocs:h}=await Promise.resolve().then(()=>lj);return{collection:a,query:l,where:c,getDocs:h}},void 0),s=n(e(et,"users"),r("displayName",">=",t),r("displayName","<=",t+""));return(await i(s)).docs.map(a=>({uid:a.id,...a.data()}))}const s3=new vr;function o3(t){return tO(Vu,t)}async function a3(t,e){return(await YD(Vu,t,e)).user}async function l3(t,e,n){const r=await QD(Vu,t,e);return await JD(r.user,{displayName:n}),await mA(r.user.uid,{displayName:n,email:t,avatar:"🎯",color:"#00ffcc"}),r.user}async function u3(){const t=await TO(Vu,s3);return await mA(t.user.uid,{displayName:t.user.displayName||"Player",email:t.user.email,avatar:"🎯",color:"#00ffcc"}),t.user}async function _A(){await nO(Vu)}const yA=b.createContext(null);function Nn(){return b.useContext(yA)}function c3({children:t}){const[e,n]=b.useState(null),[r,i]=b.useState(null),[s,o]=b.useState(!0),a=async l=>{if(!l)return;const c=await n3(l);i(c)};return b.useEffect(()=>{const l=o3(async h=>{n(h),h?(await a(h.uid),vT(h.uid,!0)):i(null),o(!1)}),c=()=>{e&&vT(e.uid,!1)};return window.addEventListener("beforeunload",c),()=>{l(),window.removeEventListener("beforeunload",c)}},[]),p.jsx(yA.Provider,{value:{user:e,profile:r,loading:s,refreshProfile:a},children:t})}function h3(){const[t,e]=b.useState([]);return b.useEffect(()=>{const n=r=>{const i=Date.now();e(s=>[...s,{id:i,...r.detail}]),setTimeout(()=>{e(s=>s.filter(o=>o.id!==i))},3500)};return window.addEventListener("dingo-toast",n),()=>window.removeEventListener("dingo-toast",n)},[]),t.length?p.jsx("div",{className:"toast-container",children:t.map(n=>p.jsx("div",{className:`toast ${n.type||"info"}`,children:p.jsxs("div",{children:[p.jsx("div",{className:"toast-title",children:n.title}),n.body&&p.jsx("div",{className:"toast-body",children:n.body})]})},n.id))}):null}function vA(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function wA(t,e,n){await Rs(je(Fe,`rooms/${t}`),{gameState:{status:"waiting",turn:"p1",p1Board:n,p2Board:[],calledNumbers:[],p1Lines:0,p2Lines:0,p1Chances:5,p2Chances:5,winner:null,tie:!1,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{...e,role:"p1"}},rematch:{p1:!1,p2:!1,newRoomId:null}})}async function EA(t,e,n){var s;const r=await UR(je(Fe,`rooms/${t}`));if(!r.exists())throw new Error("Room not found");const i=r.val();if((s=i.players)!=null&&s.p2)throw new Error("Room is full");return await ar(je(Fe,`rooms/${t}`),{"players/p2":{...e,role:"p2"},"gameState/p2Board":n,"gameState/status":"playing","gameState/turnStartedAt":Date.now()}),i}function TA(t,e){const n=je(Fe,`rooms/${t}`);return _f(n,r=>e(r.val())),()=>BR(n)}async function $a(t,e,n,r,i,s=!1){const o=e==="p1"?"p2":"p1",a={"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i};s||(a["gameState/turn"]=o,a["gameState/turnStartedAt"]=Date.now()),await ar(je(Fe,`rooms/${t}`),a)}async function d3(t,e,n,r,i,s){const o=e==="p1"?"p2":"p1";await ar(je(Fe,`rooms/${t}`),{"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i,[`gameState/${e}Chances`]:s,"gameState/turn":o,"gameState/turnStartedAt":Date.now()})}async function Ha(t,e){await ar(je(Fe,`rooms/${t}/gameState`),{winner:e,status:"finished",tie:!1})}async function wT(t){await ar(je(Fe,`rooms/${t}/gameState`),{winner:null,tie:!0,status:"finished"})}async function f3(t,e){await fU(je(Fe,`rooms/${t}/chat`),{...e,ts:Date.now()})}async function p3(t,e){await ar(je(Fe,`rooms/${t}/gameState`),{[`${e}Exited`]:!0})}async function m3(t,e,n,r){await ar(je(Fe,`rooms/${t}/rematch`),{[e]:!0});const s=(await UR(je(Fe,`rooms/${t}/rematch`))).val()||{};if(!s.p1||!s.p2||s.newRoomId)return null;const o=vA();return await wA(o,r,n),await ar(je(Fe,`rooms/${t}/rematch`),{newRoomId:o}),o}async function g3(t){try{await mf(je(Fe,`rooms/${t}`))}catch{}}const tv=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]];function lu(){const t=Array.from({length:25},(e,n)=>n+1);for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function xt(t,e){if(!t||t.length===0)return 0;const n=new Set(e);return tv.filter(r=>r.every(i=>n.has(t[i]))).length}function IA(t,e){if(!t||t.length===0)return[];const n=new Set(e);return tv.filter(r=>r.every(i=>n.has(t[i])))}function _3(t,e){const n=new Set;return IA(t,e).forEach(r=>r.forEach(i=>n.add(i))),[...n]}function sd(t,e,n){const r=new Set([...e,n]);let i=0;for(const s of tv){const o=s.filter(a=>r.has(t[a])).length;o===5?i+=1e6:o===4?i+=5e4:o===3?i+=1e3:o===2?i+=20:o===1&&(i+=1)}return i}function Js(t,e,n,r,i){const s=sd(t,n,r),o=sd(e,n,r);return s+o*i}function y3(t,e,n,r){var s;const i=Array.from({length:25},(o,a)=>a+1).filter(o=>!e.includes(o));if(i.length===0)return null;if(t==="easy")return i[Math.floor(Math.random()*i.length)];if(t==="medium")return i.reduce((o,a)=>sd(r,e,a)>sd(r,e,o)?a:o,i[0]);if(t==="hard"){for(const o of i)if(xt(r,[...e,o])>=5)return o;for(const o of i)if(xt(n,[...e,o])>=5)return o;return i.reduce((o,a)=>Js(r,n,e,a,.4)>Js(r,n,e,o,.4)?a:o,i[0])}if(t==="expert"){for(const o of i)if(xt(r,[...e,o])>=5)return o;for(const o of i)if(xt(n,[...e,o])>=5)return o;for(const o of i)if(xt(n,[...e,o])>=4)return o;return i.reduce((o,a)=>Js(r,n,e,a,.7)>Js(r,n,e,o,.7)?a:o,i[0])}if(t==="nightmare"||t==="godmode"){for(const a of i)if(xt(r,[...e,a])>=5)return a;for(const a of i)if(xt(n,[...e,a])>=5)return a;if(t==="godmode"){const a=i.map(l=>({num:l,oppLines:xt(n,[...e,l])})).sort((l,c)=>c.oppLines-l.oppLines);if(((s=a[0])==null?void 0:s.oppLines)>=4)return a[0].num}const o=t==="godmode"?1.2:.9;return i.reduce((a,l)=>Js(r,n,e,l,o)>Js(r,n,e,a,o)?l:a,i[0])}return i[Math.floor(Math.random()*i.length)]}async function Dp(t,e){try{await mf(je(Fe,`invites/${t}/${e}`))}catch{}}function v3(t,e){const n=je(Fe,`invites/${t}`);return _f(n,r=>{if(!r.exists()){e(null);return}const i=r.val(),s=Date.now(),o=Object.entries(i).filter(([,a])=>a.expiresAt>s).map(([a,l])=>({id:a,...l})).sort((a,l)=>a.sentAt-l.sentAt);e(o.length>0?o[0]:null)},()=>e(null)),()=>BR(n)}function w3(){try{return new(window.AudioContext||window.webkitAudioContext)}catch{return null}}let qi=null;function nv(){return qi||(qi=w3()),(qi==null?void 0:qi.state)==="suspended"&&qi.resume(),qi}function rv(){const t=parseFloat(localStorage.getItem("sfxVolume")??"0.75");return isNaN(t)?.75:Math.max(0,Math.min(1,t))}function sr(t,e=.1,n="sine",r=.1){const i=rv();if(i===0)return;const s=nv();if(!s)return;const o=s.createOscillator(),a=s.createGain();o.connect(a),a.connect(s.destination),o.type=n,o.frequency.value=t,a.gain.setValueAtTime(e*i,s.currentTime),a.gain.exponentialRampToValueAtTime(.001,s.currentTime+r),o.start(),o.stop(s.currentTime+r)}function ds(t,e,n=.1,r="sine"){const i=rv();if(i===0)return;const s=nv();if(!s)return;const o=s.createOscillator(),a=s.createGain();o.connect(a),a.connect(s.destination),o.type=r,o.frequency.setValueAtTime(t,s.currentTime),o.frequency.exponentialRampToValueAtTime(e,s.currentTime+.15),a.gain.setValueAtTime(n*i,s.currentTime),a.gain.exponentialRampToValueAtTime(.001,s.currentTime+.15),o.start(),o.stop(s.currentTime+.15)}function ju(t,e=.1,n="sine"){t.forEach((r,i)=>setTimeout(()=>sr(r,e,n,.3),i*60))}function E3(t=.05,e=100){const n=rv();if(n===0)return;const r=nv();if(!r)return;const i=r.createBuffer(1,r.sampleRate*.05,r.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const o=r.createBufferSource(),a=r.createBiquadFilter(),l=r.createGain();o.buffer=i,a.type="highpass",a.frequency.value=e,o.connect(a),a.connect(l),l.connect(r.destination),l.gain.setValueAtTime(t*n,r.currentTime),l.gain.exponentialRampToValueAtTime(.001,r.currentTime+.05),o.start(),o.stop(r.currentTime+.05)}function Fu(t=1){[523,659,784,1047].forEach((e,n)=>setTimeout(()=>sr(e,.15,"square",.2/t),n*100/t))}function Uu(t=1){[400,320,250].forEach((e,n)=>setTimeout(()=>sr(e,.1,"sawtooth",.25/t),n*120/t))}const SA={click:()=>sr(880,.05,"square",.1),cross:()=>sr(660,.1,"square",.15),line:()=>ju([523,659,784],.2),win:()=>Fu(),lose:()=>Uu(),ping:()=>sr(1200,.05,"sine",.08)},T3={click:()=>E3(.03,80),cross:()=>ds(800,200,.12,"sawtooth"),line:()=>ju([400,500,600],.18,"sawtooth"),win:()=>Fu(1.2),lose:()=>Uu(.8),ping:()=>sr(1400,.03,"sine",.06)},I3={click:()=>ds(300,600,.08,"sine"),cross:()=>ds(600,100,.15,"sine"),line:()=>ju([261,329,392],.25,"sine"),win:()=>Fu(.9),lose:()=>Uu(.7),ping:()=>ds(800,1200,.06,"sine")},S3={click:()=>sr(220,.04,"sine",.2),cross:()=>sr(330,.06,"sine",.25),line:()=>ju([261,329,392],.12,"sine"),win:()=>Fu(.6),lose:()=>Uu(.5),ping:()=>sr(440,.03,"sine",.15)},C3={click:()=>ds(400,800,.08,"square"),cross:()=>ds(200,1e3,.12,"square"),line:()=>ju([523,784,1047],.18,"square"),win:()=>Fu(1.4),lose:()=>Uu(1.2),ping:()=>ds(600,1400,.05,"square")},k3={classic:SA,ninja:T3,space:I3,lofi:S3,arcade:C3},x3=[{id:"classic",name:"Classic",icon:"🎮",desc:"Retro 8-bit bleeps"},{id:"ninja",name:"Ninja",icon:"🥷",desc:"Sharp sword slashes"},{id:"space",name:"Space",icon:"🌌",desc:"Sci-fi laser sounds"},{id:"lofi",name:"LoFi",icon:"🎵",desc:"Chill warm tones"},{id:"arcade",name:"Arcade",icon:"🕹️",desc:"Classic arcade bleeps"}],iv=[{id:"mute",label:"Mute",icon:"🔇",value:0},{id:"low",label:"Low",icon:"🔈",value:.2},{id:"med",label:"Med",icon:"🔉",value:.5},{id:"high",label:"High",icon:"🔊",value:.75},{id:"max",label:"Max",icon:"📢",value:1}];function Ti(){const t=localStorage.getItem("sfxTheme")||"classic",e=k3[t]||SA;return{click:()=>e.click(),cross:()=>e.cross(),line:()=>e.line(),win:()=>e.win(),lose:()=>e.lose(),ping:()=>e.ping()}}function R3(t){localStorage.setItem("sfxTheme",t)}function A3(t){const e=iv.find(r=>r.id===t),n=e?e.value:parseFloat(t);localStorage.setItem("sfxVolume",String(isNaN(n)?.75:n))}function P3(){const t=parseFloat(localStorage.getItem("sfxVolume")??"0.75"),e=iv.find(n=>Math.abs(n.value-t)<.01);return(e==null?void 0:e.id)||"high"}const ET=45;function N3(){const{user:t,profile:e}=Nn(),n=Pn(),r=Ti(),[i,s]=b.useState(null),[o,a]=b.useState(ET),[l,c]=b.useState(!1),h=b.useRef(null),f=b.useRef(null);f.current=i,b.useEffect(()=>{if(!(t!=null&&t.uid))return;const C=v3(t.uid,O=>{var M;if(!O){s(null);return}(M=r.ping)==null||M.call(r),s(O),c(!1);const j=Math.max(0,Math.round((O.expiresAt-Date.now())/1e3));a(j),clearInterval(h.current),h.current=setInterval(()=>{a(S=>S<=1?(clearInterval(h.current),f.current&&(Dp(t.uid,f.current.id).catch(()=>{}),s(null)),0):S-1)},1e3)});return()=>{C(),clearInterval(h.current)}},[t==null?void 0:t.uid]);const m=async()=>{if(!(!i||l)){c(!0),clearInterval(h.current);try{const C=lu(),O={uid:t.uid,name:(e==null?void 0:e.displayName)||"Player",avatar:(e==null?void 0:e.avatar)||"🎯"};await EA(i.roomId,O,C),await Dp(t.uid,i.id),s(null),n(`/game/${i.roomId}`,{state:{role:"p2",board:C}})}catch(C){console.error("Accept invite error:",C),c(!1)}}},v=async()=>{i&&(clearInterval(h.current),await Dp(t.uid,i.id).catch(()=>{}),s(null))};if(!i)return null;const E=44,A=(E-5)/2,N=2*Math.PI*A,I=o/ET,T=o<=10?"#ff2d55":o<=20?"#ffcc00":"#00ffcc";return p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1e3,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,animation:"toastIn 0.3s ease"},children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--c1)",borderRadius:20,padding:"28px 24px",width:"100%",maxWidth:320,textAlign:"center",boxShadow:"0 0 40px rgba(0,255,204,0.2), 8px 8px 0 rgba(0,0,0,0.5)",position:"relative",overflow:"hidden"},children:[p.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,var(--c1),var(--c4))"}}),p.jsxs("div",{style:{position:"relative",width:E,height:E,margin:"0 auto 16px"},children:[p.jsx("div",{style:{width:E,height:E,borderRadius:"50%",background:"var(--panel2)",border:"2px solid var(--edge2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22},children:i.fromAvatar}),p.jsxs("svg",{width:E,height:E,style:{position:"absolute",top:0,left:0,pointerEvents:"none"},children:[p.jsx("circle",{cx:E/2,cy:E/2,r:A,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:4}),p.jsx("circle",{cx:E/2,cy:E/2,r:A,fill:"none",stroke:T,strokeWidth:4,strokeDasharray:N,strokeDashoffset:N*(1-I),strokeLinecap:"round",transform:`rotate(-90 ${E/2} ${E/2})`,style:{transition:"stroke-dashoffset 1s linear, stroke 0.4s"}})]}),p.jsxs("div",{style:{position:"absolute",bottom:-4,right:-8,background:T,color:"#000",fontSize:10,fontWeight:800,borderRadius:10,padding:"1px 5px",fontFamily:"'Black Han Sans',sans-serif"},children:[o,"s"]})]}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18,letterSpacing:1.5,marginBottom:4},children:"⚔️ MATCH INVITE"}),p.jsx("div",{style:{fontWeight:800,fontSize:16,marginBottom:4,color:"var(--ink)"},children:i.fromName}),p.jsxs("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:["challenges you to a match!",p.jsx("br",{}),p.jsxs("span",{style:{fontSize:11,color:T},children:["Expires in ",o,"s"]})]}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:v,style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink2)",WebkitTapHighlightColor:"transparent"},children:"✕ Decline"}),p.jsx("button",{onClick:m,disabled:l,style:{flex:2,padding:"12px 0",background:"var(--c1)",border:"none",borderRadius:"var(--r)",fontWeight:800,fontSize:13,cursor:"pointer",color:"#000",boxShadow:"3px 3px 0 rgba(0,255,204,0.3)",WebkitTapHighlightColor:"transparent",opacity:l?.6:1},children:l?"⏳ Joining…":"⚔️ Accept!"})]})]})})}let b3=null;async function D3(t){if(!au)return null;try{const{getToken:e}=await ev(async()=>{const{getToken:i}=await Promise.resolve().then(()=>pA);return{getToken:i}},void 0);if(await Notification.requestPermission()!=="granted")return null;const r=await e(au,{vapidKey:JB});return r&&(b3=r,await r3(t,r)),r}catch(e){return console.warn("Notification setup failed:",e),null}}function O3(t){if(!au)return()=>{};ev(async()=>{const{onMessage:e}=await Promise.resolve().then(()=>pA);return{onMessage:e}},void 0).then(({onMessage:e})=>{e(au,n=>{t(n)})})}function as(t,e,n="info"){const r=new CustomEvent("dingo-toast",{detail:{title:t,body:e,type:n}});window.dispatchEvent(r)}const L3=[{icon:"🎯",title:"Your Unique Board",desc:"You and your opponent each get a 5×5 grid with the same 25 numbers (1–25) arranged in different random positions."},{icon:"📣",title:"Call a Number",desc:'On your turn, tap any number on your board to "call" it. That number instantly gets marked on BOTH boards — wherever it appears.'},{icon:"📏",title:"Complete Lines",desc:"Mark 5 numbers in a row — horizontally, vertically, or diagonally — to complete a line. Each player is racing to form lines on their own board layout."},{icon:"🏆",title:"Win the Match",desc:"First player to complete 5 full lines wins! If the last call completes both boards simultaneously, it's a TIE and both players earn a point."},{icon:"❤️",title:"5 Chances Per Player",desc:"Each player has 5 lives. If your timer runs out, you auto-pick a random number and lose one life. Lose all 5 lives and your opponent wins automatically."},{icon:"🎁",title:"Lifelines",desc:"Use your 5 lifelines strategically: ⏰ Extra time, 💡 Best move hint, 2️⃣ Pick twice, 🎯 50/50 hints, 🛡️ Shield against timeout."},{icon:"🤖",title:"Solo vs Bot",desc:"Not ready for live players? Challenge one of 6 AI difficulty levels — from Easy all the way up to GodMode."}];function M3(){const t=Pn(),[e,n]=b.useState(!1);return p.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px 48px",overflowY:"auto",WebkitOverflowScrolling:"touch"},children:[p.jsxs("div",{style:{position:"relative",marginBottom:6,textAlign:"center"},children:[p.jsx("div",{style:{position:"absolute",top:6,left:6,right:0,fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--c1)",lineHeight:.9,opacity:.25,letterSpacing:-2,pointerEvents:"none",userSelect:"none"},children:"DiNGo"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--ink)",lineHeight:.9,letterSpacing:-2,position:"relative",textShadow:"0 0 40px rgba(0,255,204,0.2)"},children:"DiNGo"})]}),p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"var(--panel2)",border:"2px solid var(--c1)",borderRadius:"var(--r)",padding:"5px 14px",fontSize:9,letterSpacing:3,textTransform:"uppercase",fontWeight:700,color:"var(--c1)",marginBottom:28},children:[p.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),"Live Multiplayer Bingo"]}),p.jsxs("p",{style:{fontSize:15,color:"var(--ink2)",textAlign:"center",maxWidth:280,lineHeight:1.75,marginBottom:32},children:["Call numbers. Build lines.",p.jsx("br",{}),p.jsx("strong",{style:{color:"var(--ink)"},children:"Beat your opponent to 5."})]}),p.jsx("div",{style:{display:"flex",width:"100%",maxWidth:340,border:"2px solid var(--edge2)",borderRadius:"var(--r)",overflow:"hidden",marginBottom:36},children:[{n:"5×5",l:"Grid"},{n:"6",l:"AI Levels"},{n:"5",l:"Lifelines"}].map((r,i)=>p.jsxs("div",{style:{flex:1,textAlign:"center",padding:"14px 0",background:"var(--panel)",borderRight:i<2?"2px solid var(--edge2)":"none"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,color:"var(--ink)"},children:r.n}),p.jsx("div",{style:{fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:r.l})]},i))}),p.jsxs("div",{style:{width:"100%",maxWidth:340,display:"flex",flexDirection:"column",gap:12},children:[p.jsx("button",{className:"btn btn-primary btn-full",style:{fontSize:16,padding:"16px 0",letterSpacing:2,boxShadow:"0 0 24px rgba(0,255,204,0.3), 4px 4px 0 rgba(0,255,204,0.2)"},onClick:()=>t("/login"),children:"🎮 Get Started"}),p.jsx("button",{className:"btn btn-ghost btn-full",style:{borderColor:"rgba(0,255,204,0.35)",color:"var(--c1)",fontSize:13},onClick:()=>n(!0),children:"📖 How to Play"})]}),e&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.9)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>n(!1),children:p.jsxs("div",{style:{background:"var(--panel)",borderRadius:"20px 20px 0 0",border:"2px solid var(--edge2)",borderBottom:"none",width:"100%",maxWidth:480,maxHeight:"88vh",overflowY:"auto",WebkitOverflowScrolling:"touch"},onClick:r=>r.stopPropagation(),children:[p.jsx("div",{style:{height:4,background:"linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))",borderRadius:"20px 20px 0 0"}}),p.jsxs("div",{style:{padding:"18px 18px 36px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:22},children:[p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,letterSpacing:3},children:"HOW TO PLAY"}),p.jsx("button",{onClick:()=>n(!1),style:{background:"none",border:"2px solid var(--edge2)",color:"var(--ink2)",width:34,height:34,borderRadius:8,cursor:"pointer",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),L3.map((r,i)=>p.jsxs("div",{style:{display:"flex",gap:14,marginBottom:22,alignItems:"flex-start"},children:[p.jsx("div",{style:{fontSize:32,flexShrink:0,lineHeight:1,width:52,height:52,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--panel2)",borderRadius:12,border:"2px solid var(--edge2)"},children:r.icon}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:800,fontSize:14,marginBottom:4},children:r.title}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",lineHeight:1.6},children:r.desc})]})]},i)),p.jsx("button",{className:"btn btn-primary btn-full",style:{marginTop:4,fontSize:14},onClick:()=>n(!1),children:"Got it! Let's Play 🎮"})]})]})})]})}function V3(){const{user:t,loading:e}=Nn(),n=Pn(),[r,i]=b.useState("login"),[s,o]=b.useState(""),[a,l]=b.useState(""),[c,h]=b.useState(""),[f,m]=b.useState(""),[v,E]=b.useState(!1),[A,N]=b.useState("");b.useEffect(()=>{!e&&t&&n("/",{replace:!0})},[t,e]);const I=async()=>{m(""),N(""),E(!0);try{if(r==="login")await a3(s,a);else{if(!c.trim()){m("Please enter your name"),E(!1);return}if(a.length<6){m("Password must be at least 6 characters"),E(!1);return}await l3(s,a,c.trim()),N("✅ Account created! Signing you in…")}}catch(C){m(TT(C.code))}E(!1)},T=async()=>{m(""),N(""),E(!0);try{await u3()}catch(C){m(TT(C.code))}E(!1)};return e||t?p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:p.jsx("div",{className:"spinner"})}):p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:20,paddingTop:40},children:[p.jsxs("div",{className:"text-center",style:{marginBottom:28},children:[p.jsx("div",{className:"hero-logo","data-text":"DiNGo",style:{fontSize:"clamp(72px,18vw,100px)"},children:"DiNGo"}),p.jsx("div",{className:"sub",style:{marginTop:6,letterSpacing:2},children:"LIVE MULTIPLAYER BINGO"})]}),p.jsx("div",{className:"card",style:{maxWidth:400},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{display:"flex",gap:8,marginBottom:20},children:["login","register"].map(C=>p.jsx("button",{className:`btn ${r===C?"btn-primary":"btn-ghost"}`,style:{flex:1},onClick:()=>{i(C),m(""),N("")},children:C==="login"?"🎮 Sign In":"🚀 Sign Up"},C))}),r==="register"&&p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Your Name"}),p.jsx("input",{type:"text",placeholder:"KGames",value:c,onChange:C=>h(C.target.value),maxLength:20,enterKeyHint:"next"})]}),p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Email"}),p.jsx("input",{type:"email",placeholder:"you@email.com",value:s,onChange:C=>o(C.target.value),enterKeyHint:"next"})]}),p.jsxs("div",{style:{marginBottom:18},children:[p.jsx("div",{className:"label",children:"Password"}),p.jsx("input",{type:"password",placeholder:"••••••••",value:a,onChange:C=>l(C.target.value),onKeyDown:C=>C.key==="Enter"&&I(),enterKeyHint:"done"})]}),f&&p.jsx("div",{style:{background:"rgba(255,45,85,0.12)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c2)"},children:f}),A&&p.jsxs("div",{style:{background:"rgba(0,255,204,0.12)",border:"2px solid var(--c1)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c1)",display:"flex",alignItems:"center",gap:8},children:[p.jsx("div",{className:"spinner",style:{width:16,height:16,borderWidth:2}}),A]}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:I,disabled:v,children:v?"⏳ Please wait…":r==="login"?"🎮 Sign In":"🚀 Create Account"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,margin:"16px 0"},children:[p.jsx("div",{className:"divider",style:{flex:1}}),p.jsx("span",{className:"muted small",children:"or"}),p.jsx("div",{className:"divider",style:{flex:1}})]}),p.jsxs("button",{className:"btn btn-ghost btn-full",onClick:T,disabled:v,style:{border:"2px solid var(--edge2)"},children:[p.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",width:18,alt:""}),"Continue with Google"]})]})})]})}function TT(t){return{"auth/user-not-found":"No account found with that email.","auth/wrong-password":"Wrong password. Try again.","auth/invalid-credential":"Wrong email or password. Try again.","auth/email-already-in-use":"Email already in use — try signing in instead.","auth/weak-password":"Password must be at least 6 characters.","auth/invalid-email":"Invalid email address.","auth/popup-closed-by-user":"Google sign-in was cancelled.","auth/too-many-requests":"Too many attempts. Please wait a minute."}[t]||"Something went wrong. Please try again."}function j3(t,e,n){const r=je(Fe,`online/${t}`),i={uid:t,name:e,avatar:n,ts:Date.now()};Rs(r,i).catch(()=>{}),dU(r).remove();const s=setInterval(()=>{Rs(r,{...i,ts:Date.now()}).catch(()=>{})},25e3);return()=>{clearInterval(s),mf(r).catch(()=>{})}}function F3(t){const e=je(Fe,"online");return _f(e,r=>{t(r.exists()?Object.keys(r.val()||{}).length:0)},()=>t(0))}function U3(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function B3(t,e,n,r){await Rs(je(Fe,`queue/${t}`),{uid:t,name:e,avatar:n,board:r,timestamp:Date.now(),roomId:null,role:null})}function El(t){mf(je(Fe,`queue/${t}`)).catch(()=>{})}function z3(t,e,n,r,i){const s=je(Fe,"queue"),o=_f(s,async a=>{var E;const l=a.val();if(!l||!l[t])return;if(l[t].roomId){o(),El(t),i(l[t].roomId,l[t].role||"p2");return}const c=Object.entries(l).filter(([A,N])=>A!==t&&!N.roomId).sort((A,N)=>A[1].timestamp-N[1].timestamp);if(c.length===0)return;const[h,f]=c[0];if((((E=l[t])==null?void 0:E.timestamp)||0)>f.timestamp)return;const v=U3();try{await Rs(je(Fe,`rooms/${v}`),{gameState:{status:"playing",turn:"p1",p1Board:r,p2Board:f.board||[],calledNumbers:[],p1Lines:0,p2Lines:0,p1Chances:5,p2Chances:5,winner:null,tie:!1,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{uid:t,name:e,avatar:n||"🎯",role:"p1"},p2:{uid:h,name:f.name,avatar:f.avatar||"🎯",role:"p2"}},rematch:{p1:!1,p2:!1,newRoomId:null}}),await ar(je(Fe,`queue/${t}`),{roomId:v,role:"p1"}),await ar(je(Fe,`queue/${h}`),{roomId:v,role:"p2"}),o(),El(t),i(v,"p1")}catch(A){console.error("Matchmaking error:",A)}});return o}const W3=[{icon:"🤖",title:"vs Bot",sub:"6 AI levels",path:"/bot"},{icon:"⚡",title:"Create Room",sub:"Invite a friend",path:"/room/create"},{icon:"🔗",title:"Join Room",sub:"Enter room code",path:"/room/join"},{icon:"🏆",title:"Leaderboard",sub:"Top players",path:"/leaderboard"},{icon:"👥",title:"Friends",sub:"Add & challenge",path:"/friends"},{icon:"📊",title:"History",sub:"Past games",path:"/history"}],$3=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"];function H3(){const{user:t,profile:e,refreshProfile:n}=Nn(),r=Pn(),i=Ti(),[s,o]=b.useState(0),[a,l]=b.useState(!1),[c,h]=b.useState(0),[f,m]=b.useState(!1),[v,E]=b.useState(!1),[A,N]=b.useState(""),[I,T]=b.useState(""),[C,O]=b.useState(!1),j=b.useRef(null),M=b.useRef(null),S=b.useRef(null);b.useEffect(()=>{if(!t||!e)return;const Z=j3(t.uid,e.displayName||"Player",e.avatar||"🎯"),tt=F3(o);return()=>{Z(),tt()}},[t==null?void 0:t.uid,e==null?void 0:e.displayName]),b.useEffect(()=>()=>{t!=null&&t.uid&&El(t.uid),clearInterval(M.current),j.current&&j.current()},[t==null?void 0:t.uid]);const y=()=>{N((e==null?void 0:e.displayName)||""),T((e==null?void 0:e.avatar)||"🎯"),E(!0)},k=async()=>{var Z;A.trim()&&(O(!0),await gA(t.uid,{displayName:A.trim(),avatar:I}),await n(t.uid),O(!1),E(!1),(Z=i.click)==null||Z.call(i))},w=async()=>{var Dt;if(a){El(t.uid),j.current&&(j.current(),j.current=null),clearInterval(M.current),l(!1),h(0);return}(Dt=i.click)==null||Dt.call(i);const Z=lu();S.current=Z,l(!0),h(0),M.current=setInterval(()=>h(z=>z+1),1e3),await B3(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",Z);const tt=z3(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",Z,(z,Y)=>{clearInterval(M.current),l(!1),r(`/game/${z}`,{state:{role:Y,board:Z}})});j.current=tt},P=async()=>{a&&(El(t.uid),j.current&&j.current(),clearInterval(M.current)),await _A()},R=Z=>{var tt;(tt=i.click)==null||tt.call(i),r(Z)},x=(e==null?void 0:e.color)||"#00ffcc",Ie=e!=null&&e.displayName?e.displayName.length>10?e.displayName.slice(0,10)+"…":e.displayName:"Player";return p.jsxs("div",{className:"screen",style:{paddingTop:14,paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",maxWidth:440,marginBottom:18,gap:8},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:30,letterSpacing:1,lineHeight:1},children:"DiNGo"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:2},children:[p.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),p.jsxs("span",{style:{fontSize:10,color:"var(--c1)",fontWeight:700,letterSpacing:1.5,textTransform:"uppercase"},children:[s," Online"]})]})]}),p.jsxs("button",{onClick:y,style:{display:"flex",alignItems:"center",gap:7,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:10,padding:"6px 10px",cursor:"pointer",flexShrink:0,maxWidth:160,WebkitTapHighlightColor:"transparent"},children:[p.jsx("span",{style:{fontSize:24,flexShrink:0},children:(e==null?void 0:e.avatar)||"🎯"}),p.jsxs("div",{style:{textAlign:"left",overflow:"hidden"},children:[p.jsx("div",{style:{fontWeight:700,fontSize:12,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:x},children:Ie}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)",whiteSpace:"nowrap"},children:[(e==null?void 0:e.wins)||0,"W · ",(e==null?void 0:e.streak)||0,"🔥"]})]}),p.jsx("span",{style:{fontSize:10,color:"var(--ink3)",flexShrink:0},children:"✏️"})]}),p.jsx("button",{onClick:()=>R("/profile"),title:"Full Profile & Settings",style:{width:36,height:36,borderRadius:8,flexShrink:0,background:"var(--panel)",border:"2px solid var(--edge2)",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},children:"⚙️"}),p.jsx("button",{onClick:()=>m(!0),title:"Sign Out",style:{width:36,height:36,borderRadius:8,flexShrink:0,background:"var(--panel)",border:"2px solid var(--edge2)",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},children:"🚪"})]}),(e==null?void 0:e.shortId)&&p.jsx("div",{style:{width:"100%",maxWidth:440,marginBottom:14},children:p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:8,padding:"4px 12px",fontSize:11},children:[p.jsx("span",{style:{color:"var(--ink3)"},children:"🪪 Player ID:"}),p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",letterSpacing:2,color:"var(--c3)",fontSize:13},children:["#",e.shortId]})]})}),p.jsx("div",{style:{width:"100%",maxWidth:440,marginBottom:18},children:p.jsx("button",{onClick:w,style:{width:"100%",padding:"15px 20px",background:a?"var(--c2)":"var(--c1)",border:"none",borderRadius:"var(--r)",fontFamily:"'Space Grotesk',sans-serif",fontWeight:800,fontSize:14,letterSpacing:1.5,textTransform:"uppercase",color:"#000",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,WebkitTapHighlightColor:"transparent"},children:a?p.jsxs(p.Fragment,{children:[p.jsx("span",{style:{animation:"spin 1s linear infinite",display:"inline-block"},children:"⏳"})," Searching… ",c,"s · Tap to Cancel"]}):"⚡ PLAY NOW — Auto Match"})}),p.jsx("div",{className:"menu-grid",children:W3.map(Z=>p.jsxs("div",{className:"menu-card",onClick:()=>R(Z.path),children:[p.jsx("div",{className:"menu-icon",children:Z.icon}),p.jsx("div",{className:"menu-title",children:Z.title}),p.jsx("div",{className:"menu-sub",children:Z.sub})]},Z.path))}),p.jsx("div",{style:{marginTop:18,width:"100%",maxWidth:440,display:"flex",gap:8},children:[{label:"WINS",val:(e==null?void 0:e.wins)||0,color:"var(--c1)"},{label:"LOSSES",val:(e==null?void 0:e.losses)||0,color:"var(--c2)"},{label:"STREAK",val:`${(e==null?void 0:e.streak)||0}🔥`,color:"var(--c3)"}].map(Z=>p.jsxs("div",{style:{flex:1,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"10px 0",textAlign:"center"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,color:Z.color},children:Z.val}),p.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:2},children:Z.label})]},Z.label))}),v&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:800,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>E(!1),children:p.jsxs("div",{style:{background:"var(--panel)",borderRadius:"20px 20px 0 0",border:"2px solid var(--edge2)",borderBottom:"none",width:"100%",maxWidth:480,maxHeight:"75vh",overflowY:"auto",WebkitOverflowScrolling:"touch"},onClick:Z=>Z.stopPropagation(),children:[p.jsx("div",{style:{height:4,background:"linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))",borderRadius:"20px 20px 0 0"}}),p.jsxs("div",{style:{padding:"16px 16px 32px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,letterSpacing:2},children:"✏️ QUICK EDIT"}),p.jsx("button",{onClick:()=>E(!1),style:{background:"none",border:"2px solid var(--edge2)",color:"var(--ink2)",width:32,height:32,borderRadius:8,cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),p.jsx("div",{style:{textAlign:"center",fontSize:52,marginBottom:12},children:I}),p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Display Name"}),p.jsx("input",{type:"text",value:A,onChange:Z=>N(Z.target.value),maxLength:20,placeholder:"Your name",enterKeyHint:"done",onKeyDown:Z=>Z.key==="Enter"&&Z.target.blur()})]}),p.jsx("div",{className:"label",style:{marginBottom:8},children:"Avatar"}),p.jsx("div",{className:"avatar-grid",style:{marginBottom:16},children:$3.map(Z=>p.jsx("div",{className:`avatar-opt ${I===Z?"selected":""}`,onClick:()=>{var tt;T(Z),(tt=i.click)==null||tt.call(i)},children:Z},Z))}),p.jsx("button",{onClick:k,disabled:C||!A.trim(),className:"btn btn-primary btn-full",style:{fontSize:15,padding:"14px 0"},children:C?"⏳ Saving…":"💾 Save Changes"})]})]})}),f&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>m(!1),children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:Z=>Z.stopPropagation(),children:[p.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:()=>m(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),p.jsx("button",{onClick:P,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const q3=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"],G3=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#00b4ff","#ff6a00","#00ff88","#ff00ff","#ffffff","#f5a623"];function K3(){const{user:t,profile:e,refreshProfile:n}=Nn(),r=Pn(),i=Ti(),[s,o]=b.useState((e==null?void 0:e.displayName)||""),[a,l]=b.useState((e==null?void 0:e.avatar)||"🎯"),[c,h]=b.useState((e==null?void 0:e.color)||"#00ffcc"),[f,m]=b.useState(localStorage.getItem("sfxTheme")||"classic"),[v,E]=b.useState(P3()),[A,N]=b.useState(!1),[I,T]=b.useState(!1),[C,O]=b.useState("idle"),[j,M]=b.useState(!1);b.useEffect(()=>{e&&(o(e.displayName||""),l(e.avatar||"🎯"),h(e.color||"#00ffcc"))},[e]);const S=async()=>{var R;s.trim()&&(N(!0),await gA(t.uid,{displayName:s.trim(),avatar:a,color:c}),await n(t.uid),(R=i.click)==null||R.call(i),N(!1),T(!0),setTimeout(()=>T(!1),2e3))},y=R=>{R3(R),m(R),setTimeout(()=>{var x,Ie;return(Ie=(x=Ti()).click)==null?void 0:Ie.call(x)},50)},k=R=>{A3(R),E(R),setTimeout(()=>{var x,Ie;return(Ie=(x=Ti()).click)==null?void 0:Ie.call(x)},30)},w=async()=>{await _A()},P=async()=>{O("requesting");const R=await D3(t.uid);O(R?"granted":"denied")};return p.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[p.jsxs("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain",padding:"14px 14px 24px",display:"flex",flexDirection:"column",alignItems:"center"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:4},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px",flexShrink:0},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,letterSpacing:2},children:"⚙️ PROFILE"}),p.jsx("button",{onClick:()=>M(!0),style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:5,flexShrink:0,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"6px 10px",fontSize:11,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Sign Out"})]}),p.jsx("div",{style:{fontSize:64,marginBottom:6,textAlign:"center"},children:a}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,textAlign:"center",marginBottom:2,color:c},children:s||"Player"}),p.jsx("div",{style:{fontSize:11,color:"var(--ink3)",textAlign:"center",marginBottom:4},children:t==null?void 0:t.email}),(e==null?void 0:e.shortId)&&p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:8,padding:"4px 12px",fontSize:11,marginBottom:16},children:[p.jsx("span",{style:{color:"var(--ink3)"},children:"🪪 Player ID:"}),p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",letterSpacing:2,color:"var(--c3)",fontSize:13},children:["#",e.shortId]})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsxs("div",{style:{marginBottom:16},children:[p.jsx("div",{className:"label",children:"Display Name"}),p.jsx("input",{type:"text",value:s,onChange:R=>o(R.target.value),maxLength:20,placeholder:"Your name",enterKeyHint:"done",onKeyDown:R=>R.key==="Enter"&&R.target.blur()})]}),p.jsxs("div",{style:{marginBottom:16},children:[p.jsx("div",{className:"label",children:"Avatar"}),p.jsx("div",{className:"avatar-grid",children:q3.map(R=>p.jsx("div",{className:`avatar-opt ${a===R?"selected":""}`,onClick:()=>{var x;l(R),(x=i.click)==null||x.call(i)},children:R},R))})]}),p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Name Color"}),p.jsx("div",{className:"color-row",children:G3.map(R=>p.jsx("div",{className:`color-dot ${c===R?"selected":""}`,style:{background:R},onClick:()=>{var x;h(R),(x=i.click)==null||x.call(i)}},R))})]})]})}),e&&p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"📊 Your Stats"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[{label:"WINS",val:e.wins||0,color:"var(--c1)"},{label:"LOSSES",val:e.losses||0,color:"var(--c2)"},{label:"WIN RATE",val:`${e.winRate||0}%`,color:"var(--c3)"},{label:"STREAK",val:`${e.streak||0}🔥`,color:"var(--c3)"},{label:"GAMES",val:e.total||0,color:"var(--c4)"}].map(R=>p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"12px 0",textAlign:"center"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:R.color},children:R.val}),p.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:R.label})]},R.label))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🔊 Volume"}),p.jsx("div",{style:{display:"flex",gap:8},children:iv.map(R=>p.jsxs("button",{onClick:()=>k(R.id),style:{flex:1,padding:"10px 0",border:"2px solid",borderColor:v===R.id?"var(--c1)":"var(--edge2)",background:v===R.id?"rgba(0,255,204,0.1)":"var(--panel)",borderRadius:"var(--r)",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,WebkitTapHighlightColor:"transparent"},children:[p.jsx("span",{style:{fontSize:18},children:R.icon}),p.jsx("span",{style:{fontSize:9,fontWeight:700,letterSpacing:1,textTransform:"uppercase",color:v===R.id?"var(--c1)":"var(--ink3)"},children:R.label})]},R.id))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🎵 Sound Theme"}),p.jsx("div",{className:"sfx-grid",children:x3.map(R=>p.jsxs("div",{className:`sfx-opt ${f===R.id?"active":""}`,onClick:()=>y(R.id),children:[p.jsx("div",{className:"sfx-icon",children:R.icon}),p.jsx("div",{className:"sfx-name",children:R.name}),p.jsx("div",{className:"sfx-desc",children:R.desc})]},R.id))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🔔 Notifications"}),p.jsx("div",{className:"card",children:p.jsxs("div",{className:"card-body",children:[p.jsx("p",{style:{fontSize:13,color:"var(--ink2)",marginBottom:12,lineHeight:1.6},children:"Get notified when friends challenge you or it's your turn."}),p.jsx("button",{className:"btn btn-purple btn-full",onClick:P,disabled:C==="requesting"||C==="granted",children:C==="granted"?"✅ Notifications Enabled":C==="denied"?"❌ Permission Denied":C==="requesting"?"⏳ Requesting…":"🔔 Enable Notifications"})]})})]}),p.jsx("div",{style:{width:"100%",maxWidth:440,marginTop:24},children:p.jsx("button",{onClick:()=>M(!0),className:"btn btn-full",style:{background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",color:"var(--c2)",fontSize:13},children:"🚪 Sign Out of DiNGo"})})]}),p.jsx("div",{style:{flexShrink:0,background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"10px 14px",paddingBottom:"calc(10px + env(safe-area-inset-bottom, 0px))",display:"flex",gap:10},children:p.jsx("button",{onClick:S,disabled:A||!s.trim(),className:"btn btn-primary btn-full",style:{fontSize:15,padding:"14px 0"},children:I?"✅ Profile Saved!":A?"⏳ Saving…":"💾 Save Profile"})}),j&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>M(!1),children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:R=>R.stopPropagation(),children:[p.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:()=>M(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),p.jsx("button",{onClick:w,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const IT=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#ffffff"];function _g({board:t,selected:e,onCellClick:n,disabled:r=!1,highlightCells:i=[]}){const s=new Set(_3(t,e)),o=IA(t,e),a=new Set(i),l={};return o.forEach((c,h)=>{c.forEach(f=>{l[f]||(l[f]=IT[Math.min(h,IT.length-1)])})}),p.jsx("div",{className:"board-wrap",children:p.jsx("div",{className:"board",children:t.map((c,h)=>{const f=e.includes(c),m=s.has(h),v=a.has(c),E=l[h];return p.jsx("div",{className:`cell ${f?"crossed":""}`,style:{cursor:r||f?"default":"pointer",background:m?`rgba(${E==="#00ffcc"?"0,255,204":E==="#ff2d55"?"255,45,85":E==="#ffcc00"?"255,204,0":E==="#7b61ff"?"123,97,255":"255,255,255"}, 0.15)`:void 0,borderColor:m?E:v?"var(--c3)":void 0,color:m?E:v&&!f?"var(--c3)":void 0,boxShadow:m?`0 0 12px ${E}88, inset 0 0 8px ${E}22`:v?"0 0 0 3px var(--c3), 0 0 14px rgba(255,204,0,0.5)":void 0,animation:m?"winPulse 2s ease-in-out infinite":v?"winPulse 0.9s ease infinite":void 0,fontWeight:m||v?900:void 0,transition:"all 0.3s ease"},onClick:()=>!r&&!f&&n&&n(c),children:c},c)})})})}function CA({show:t,isWin:e,tie:n,title:r,sub:i,onPlayAgain:s,onHome:o,showPlayAgain:a=!0}){const l=n?"🤝":e?"🎉":"💀",c=n?"var(--c3)":e?"var(--c1)":"var(--c2)";return p.jsx("div",{className:`win-overlay ${t?"show":""}`,children:p.jsxs("div",{className:"win-card",children:[p.jsx("div",{className:"win-emoji",children:l}),p.jsx("div",{className:"win-title",style:{color:c},children:r}),p.jsx("div",{className:"win-sub",children:i}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[a&&p.jsx("button",{className:"btn btn-primary btn-full",onClick:s,children:"↺ Play Again"}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:o,children:"🏠 Home"})]})]})})}async function kA(t,e){const n=Qt(et,"users",t);try{await pn(n,{total:Xi(1),wins:Xi(e?1:0),losses:Xi(e?0:1),streak:e?Xi(1):0});const r=await Au(n);if(r.exists()){const i=r.data(),s=i.total||1,o=i.wins||0;await pn(n,{winRate:Math.round(o/s*100)})}}catch(r){console.error("recordResult error:",r)}}async function Q3(){try{const t=Ko(Ri(et,"users"),wx("wins","desc"),Wh(50));return(await Yl(t)).docs.map((n,r)=>({rank:r+1,uid:n.id,...n.data()}))}catch(t){return console.error("getLeaderboard error:",t),[]}}async function xA({p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a,mode:l,botLevel:c}){try{await hy(Ri(et,"matches"),{p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a||0,mode:l||"multiplayer",botLevel:c||null,timestamp:Pu(),tsNum:Date.now()})}catch(h){console.error("saveMatch error:",h)}}async function Y3(t){try{const[e,n]=await Promise.all([Yl(Ko(Ri(et,"matches"),Qo("p1Uid","==",t),Wh(15))),Yl(Ko(Ri(et,"matches"),Qo("p2Uid","==",t),Wh(15)))]),r=new Set,i=[];return[...e.docs,...n.docs].forEach(s=>{r.has(s.id)||(r.add(s.id),i.push({id:s.id,...s.data()}))}),i.sort((s,o)=>{var c,h;const a=s.tsNum||((c=s.timestamp)==null?void 0:c.seconds)*1e3||0;return(o.tsNum||((h=o.timestamp)==null?void 0:h.seconds)*1e3||0)-a}).slice(0,20)}catch(e){return console.error("getMyHistory error:",e),[]}}const Ac=[{id:"easy",label:"Easy",icon:"🟢",color:"var(--c1)"},{id:"medium",label:"Medium",icon:"🟡",color:"var(--c3)"},{id:"hard",label:"Hard",icon:"🔴",color:"var(--c2)"},{id:"expert",label:"Expert",icon:"🟣",color:"var(--c4)"},{id:"nightmare",label:"Nightmare",icon:"🖤",color:"#ff4444"},{id:"godmode",label:"GodMode",icon:"👑",color:"var(--c3)"}],Pc={easy:"Noob-Bot",medium:"Mid-Bot",hard:"Hard-Bot",expert:"Expert-Bot",nightmare:"Nightmare",godmode:"GodMode"},Nc=5,bc=25;function X3(){var z,Y,X;const{user:t,profile:e}=Nn(),n=Pn(),r=Ti(),[i,s]=b.useState("select"),[o,a]=b.useState("medium"),[l,c]=b.useState([]),[h,f]=b.useState([]),[m,v]=b.useState([]),[E,A]=b.useState(!0),[N,I]=b.useState(0),[T,C]=b.useState(0),[O,j]=b.useState(null),[M,S]=b.useState(bc),[y,k]=b.useState(!1),w=b.useRef(null),P=b.useRef(null),R=b.useRef([]);b.useEffect(()=>{R.current=m},[m]);const x=()=>{var oe;const G=lu(),K=lu();c(G),f(K),v([]),R.current=[],A(!0),I(0),C(0),j(null),s("game"),P.current=Date.now(),(oe=r.click)==null||oe.call(r)};b.useEffect(()=>{if(!(i!=="game"||!E||O))return S(bc),w.current=setInterval(()=>{S(G=>{if(G<=1){clearInterval(w.current);const K=l.filter(oe=>!R.current.includes(oe));if(K.length>0){const oe=K[Math.floor(Math.random()*K.length)];Ie(oe)}return bc}return G-1})},1e3),()=>clearInterval(w.current)},[E,i,O]);const Ie=G=>{var qe,Le;if(!E||O||R.current.includes(G))return;clearInterval(w.current),(qe=r.cross)==null||qe.call(r);const K=[...R.current,G];v(K);const oe=xt(l,K);if(oe>N&&((Le=r.line)==null||Le.call(r)),I(oe),oe>=Nc){tt(!0,K);return}A(!1),Z(K)},Z=G=>{const K={easy:500,medium:800,hard:1e3,expert:1200,nightmare:1400,godmode:1600}[o]||800;k(!0),setTimeout(()=>{var It,lt;k(!1);const oe=y3(o,G,l,h);if(oe==null){A(!0);return}(It=r.cross)==null||It.call(r);const qe=[...G,oe];v(qe);const Le=xt(h,qe);if(Le>T&&((lt=r.line)==null||lt.call(r)),C(Le),Le>=Nc){tt(!1,qe);return}A(!0)},K)},tt=async(G,K)=>{var qe,Le;const oe=Math.round((Date.now()-P.current)/1e3);if(j({won:G,tie:!1,title:G?"🎉 YOU WIN!":"🤖 BOT WINS!",sub:G?["Domination! 👑","You crushed it! 🔥","GG! Lethal ⚡"][Math.floor(Math.random()*3)]:["Bot outsmarted you 🤖","GG, rematch? 💪","Bot.exe wins 😤"][Math.floor(Math.random()*3)]}),G?(qe=r.win)==null||qe.call(r):(Le=r.lose)==null||Le.call(r),s("over"),t)try{await kA(t.uid,G),await xA({p1Uid:t.uid,p2Uid:"bot",p1Name:(e==null?void 0:e.displayName)||"Player",p2Name:Pc[o],winner:G?t.uid:"bot",p1Lines:xt(l,K),p2Lines:xt(h,K),duration:oe,mode:"bot",botLevel:o})}catch(It){console.error("endGame save error:",It)}};if(i==="select")return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🤖 VS BOT"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{className:"label",style:{marginBottom:14},children:"Choose Difficulty"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:20},children:Ac.map(G=>p.jsxs("button",{className:`diff-btn ${o===G.id?"active":""}`,style:{borderColor:o===G.id?G.color:void 0,color:o===G.id?G.color:void 0},onClick:()=>{var K;a(G.id),(K=r.click)==null||K.call(r)},children:[p.jsx("span",{style:{fontSize:20},children:G.icon}),G.label]},G.id))}),p.jsxs("div",{style:{background:"var(--panel2)",borderRadius:"var(--r)",padding:12,marginBottom:20,textAlign:"center"},children:[p.jsx("span",{style:{fontSize:28},children:(z=Ac.find(G=>G.id===o))==null?void 0:z.icon}),p.jsx("div",{style:{fontWeight:700,marginTop:6},children:Pc[o]}),p.jsx("div",{className:"muted small",style:{marginTop:4},children:{easy:"Random moves — great for beginners",medium:"Basic strategy — fair challenge",hard:"Aggressive play — tough",expert:"Win-first AI — very tough",nightmare:"Near-unbeatable AI",godmode:"Maximum difficulty — can you win?"}[o]})]}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:x,children:"⚡ Start Game"})]})})]});const Dt=M/bc*100;return p.jsxs("div",{className:"screen",style:{paddingTop:10,paddingBottom:20},children:[p.jsxs("div",{style:{width:"100%",maxWidth:440,marginBottom:10,display:"flex",alignItems:"center",gap:10},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:11},onClick:()=>n("/"),children:"🏠"}),p.jsx("div",{style:{flex:1,textAlign:"center"},children:p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:14,letterSpacing:2,color:"var(--c1)"},children:[(Y=Ac.find(G=>G.id===o))==null?void 0:Y.icon," ",Pc[o].toUpperCase()]})}),p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18},children:[p.jsx("span",{style:{color:"var(--c1)"},children:N}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 6px"},children:"·"}),p.jsx("span",{style:{color:"var(--c2)"},children:T})]})]}),p.jsxs("div",{className:"player-row",style:{maxWidth:440,marginBottom:8},children:[p.jsx("span",{style:{fontSize:28},children:(e==null?void 0:e.avatar)||"🎯"}),p.jsxs("div",{children:[p.jsx("div",{className:"player-name",children:(e==null?void 0:e.displayName)||"You"}),p.jsxs("div",{className:"player-lines",children:[N," / ",Nc," lines"]})]}),E&&!y&&!O&&p.jsx("span",{className:"turn-badge",style:{marginLeft:"auto"},children:"YOUR TURN"})]}),E&&!y&&!O&&p.jsx("div",{className:"timer-bar-wrap",style:{maxWidth:440,marginBottom:8},children:p.jsx("div",{className:"timer-bar",style:{width:`${Dt}%`,background:M<=5?"var(--c2)":"var(--c1)"}})}),y&&p.jsx("div",{style:{textAlign:"center",fontSize:12,color:"var(--ink2)",marginBottom:8,letterSpacing:2,textTransform:"uppercase"},children:"🤖 Bot is thinking…"}),p.jsx(_g,{board:l,selected:m,onCellClick:Ie,disabled:!E||y||!!O}),p.jsxs("div",{className:"player-row",style:{maxWidth:440,marginTop:14},children:[p.jsx("span",{style:{fontSize:28},children:(X=Ac.find(G=>G.id===o))==null?void 0:X.icon}),p.jsxs("div",{children:[p.jsx("div",{className:"player-name",children:Pc[o]}),p.jsxs("div",{className:"player-lines",children:[T," / ",Nc," lines"]})]}),!E&&y&&p.jsx("span",{className:"turn-badge",style:{marginLeft:"auto",background:"var(--c2)"},children:"BOT TURN"})]}),p.jsx("div",{style:{marginTop:8,opacity:.55},children:p.jsx(_g,{board:h,selected:m,disabled:!0})}),p.jsx(CA,{show:!!O,isWin:O==null?void 0:O.won,tie:!1,title:O==null?void 0:O.title,sub:O==null?void 0:O.sub,onPlayAgain:x,onHome:()=>n("/")})]})}function ST(){return Array(25).fill(0)}function J3({onConfirm:t}){const[e,n]=b.useState(ST()),r=e.filter(l=>l!==0).length+1,i=l=>{if(e[l]!==0||r>25)return;const c=[...e];c[l]=r,n(c)},s=()=>n(lu()),o=()=>n(ST()),a=e.every(l=>l!==0);return p.jsxs("div",{style:{width:"100%",maxWidth:440,display:"flex",flexDirection:"column",alignItems:"center",gap:14},children:[p.jsx("div",{className:"card",style:{width:"100%"},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18,letterSpacing:2,marginBottom:6},children:"🎲 SET UP YOUR BOARD"}),p.jsx("div",{style:{fontSize:12,color:"var(--ink2)",lineHeight:1.6,marginBottom:14},children:"Click each cell to fill numbers 1–25 in your chosen order, or hit Shuffle for a random arrangement."}),!a&&p.jsxs("div",{style:{textAlign:"center",fontSize:13,marginBottom:10},children:[p.jsx("span",{style:{color:"var(--c1)",fontWeight:800,fontSize:18},children:r}),p.jsx("span",{style:{color:"var(--ink2)"},children:" — click a cell to place this number"})]}),a&&p.jsx("div",{style:{textAlign:"center",fontSize:13,color:"var(--c1)",fontWeight:800,marginBottom:10},children:"✅ Board complete! Ready to play."}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:5,marginBottom:14},children:e.map((l,c)=>p.jsx("button",{onClick:()=>i(c),disabled:l!==0,style:{aspectRatio:"1",border:"2px solid",borderColor:l!==0?"var(--c1)":"var(--edge2)",background:l!==0?"rgba(0,255,204,0.1)":"var(--panel)",borderRadius:8,cursor:l!==0?"default":"pointer",fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(12px,3.5vw,18px)",color:l!==0?"var(--c1)":"var(--ink3)",fontWeight:700,transition:"all 0.15s",WebkitTapHighlightColor:"transparent"},children:l!==0?l:""},c))}),p.jsxs("div",{style:{display:"flex",gap:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{flex:1},onClick:o,children:"🗑 Clear"}),p.jsx("button",{className:"btn btn-ghost",style:{flex:1},onClick:s,children:"🔀 Shuffle"})]})]})}),p.jsx("button",{className:"btn btn-primary btn-full",disabled:!a,onClick:()=>t(e),style:{fontSize:15,padding:"14px 0",opacity:a?1:.4},children:a?"✅ Confirm Board & Continue →":`Fill ${25-e.filter(l=>l!==0).length} more cells…`})]})}function Z3(){const{mode:t}=XS(),{user:e,profile:n}=Nn(),r=Pn(),i=Ti(),[s,o]=b.useState("setup"),[a,l]=b.useState([]),[c,h]=b.useState(""),[f,m]=b.useState(""),[v,E]=b.useState("idle"),[A,N]=b.useState(""),I=b.useRef(null),T={uid:e==null?void 0:e.uid,name:(n==null?void 0:n.displayName)||"Player",avatar:(n==null?void 0:n.avatar)||"🎯"},C=async M=>{var S;if(l(M),(S=i.click)==null||S.call(i),o("action"),t==="create"){E("waiting");const y=vA();h(y),await wA(y,T,M);const k=TA(y,w=>{var P,R;(P=w==null?void 0:w.players)!=null&&P.p2&&((R=w==null?void 0:w.gameState)==null?void 0:R.status)==="playing"&&(k(),r(`/game/${y}`,{state:{role:"p1",board:M}})),w||(E("error"),N("Room expired."))});I.current=k}},O=async()=>{var S;const M=f.trim().toUpperCase();if(M.length!==4){N("Enter a 4-character room code.");return}E("joining"),N("");try{await EA(M,T,a),(S=i.click)==null||S.call(i),r(`/game/${M}`,{state:{role:"p2",board:a}})}catch(y){E("idle"),N(y.message||"Could not join room. Check the code.")}},j=async()=>{I.current&&I.current(),c&&await g3(c),r("/")};return s==="setup"?p.jsxs("div",{className:"screen",style:{justifyContent:"flex-start",paddingBottom:60},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:t==="create"?"⚡ CREATE ROOM":"🔗 JOIN ROOM"})]}),p.jsx(J3,{onConfirm:C})]}):t==="create"?p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:j,children:"← Cancel"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"⚡ CREATE ROOM"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",style:{textAlign:"center"},children:[p.jsx("div",{className:"label",style:{marginBottom:8},children:"ROOM CODE"}),p.jsx("div",{className:"room-code-display",children:c}),p.jsx("div",{className:"room-status",children:"Share this code with your friend"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,justifyContent:"center",marginBottom:20},children:[p.jsx("div",{className:"spinner"}),p.jsx("span",{className:"muted small",children:"Waiting for opponent…"})]}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:()=>{var M;return(M=navigator.clipboard)==null?void 0:M.writeText(c)},style:{marginBottom:10},children:"📋 Copy Code"}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:j,children:"Cancel"})]})})]}):p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🔗 JOIN ROOM"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{fontSize:48,textAlign:"center",marginBottom:16},children:"🔗"}),p.jsx("div",{className:"label",children:"Room Code"}),p.jsx("input",{type:"text",placeholder:"ABCD",value:f,onChange:M=>m(M.target.value.toUpperCase().slice(0,4)),onKeyDown:M=>M.key==="Enter"&&O(),style:{textAlign:"center",fontSize:28,letterSpacing:10,fontFamily:"'Black Han Sans',sans-serif",marginBottom:16}}),A&&p.jsx("div",{style:{color:"var(--c2)",fontSize:13,marginBottom:14,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px"},children:A}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:O,disabled:v==="joining"||f.length!==4,children:v==="joining"?"⏳ Joining…":"🎮 Join Game"})]})})]})}const vn=5,eh=30,yg=5,e5=["👍","🔥","😂","😱","🎯","💀","🏆","😤","🤯","👏","😈","🫡","❤️","😎","🤑","💪"],CT=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#ffffff"],kT=[{id:"time",icon:"⏰",tip:"+20s"},{id:"hint",icon:"💡",tip:"Hint"},{id:"double",icon:"2️⃣",tip:"Pick 2"},{id:"fifty",icon:"🎯",tip:"50/50"},{id:"shield",icon:"🛡️",tip:"Shield"}];function xT({timeLeft:t,maxTime:e=eh,size:n=52,active:r}){const i=(n-6)/2,s=2*Math.PI*i,o=r?Math.max(0,t/e):1,a=t<=5?"#ff2d55":t<=10?"#ffcc00":"#00ffcc";return p.jsxs("svg",{width:n,height:n,style:{position:"absolute",top:0,left:0,pointerEvents:"none"},children:[p.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:"rgba(255,255,255,0.07)",strokeWidth:4}),r&&p.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:a,strokeWidth:4,strokeDasharray:s,strokeDashoffset:s*(1-o),strokeLinecap:"round",transform:`rotate(-90 ${n/2} ${n/2})`,style:{transition:"stroke-dashoffset 1s linear, stroke 0.4s"}})]})}function RT({count:t,max:e=yg}){return p.jsx("div",{style:{display:"flex",gap:2},children:Array.from({length:e}).map((n,r)=>p.jsx("span",{style:{fontSize:10,opacity:r<t?1:.18},children:"❤️"},r))})}function t5(){var ft,Bi;const{roomId:t}=XS(),{state:e}=Sd(),{user:n,profile:r}=Nn(),i=Pn(),s=Ti(),o=(e==null?void 0:e.role)||"p1",a=o==="p1"?"p2":"p1",[l,c]=b.useState(null),[h,f]=b.useState(eh),[m,v]=b.useState(null),[E,A]=b.useState(!1),[N,I]=b.useState(!1),[T,C]=b.useState(0),[O,j]=b.useState(""),[M,S]=b.useState(""),[y,k]=b.useState({time:!0,hint:!0,double:!0,fifty:!0,shield:!0}),[w,P]=b.useState(!1),[R,x]=b.useState(!1),[Ie,Z]=b.useState([]),[tt,Dt]=b.useState({p1:!1,p2:!1,newRoomId:null}),[z,Y]=b.useState(!1),X=b.useRef(!1),G=b.useRef(Date.now()),K=b.useRef(null),oe=b.useRef(null),qe=b.useRef(0),Le=b.useRef({}),It=b.useRef(0),lt=b.useRef((e==null?void 0:e.board)||[]),ae=l==null?void 0:l.gameState,Qn=(ae==null?void 0:ae.calledNumbers)||[],dt=(ae==null?void 0:ae[`${o}Board`])||lt.current,hr=(ae==null?void 0:ae[`${a}Board`])||[],yn=(ae==null?void 0:ae[`${o}Lines`])||0,Ws=(ae==null?void 0:ae[`${a}Lines`])||0,$s=(ae==null?void 0:ae[`${o}Chances`])??yg,ma=(ae==null?void 0:ae[`${a}Chances`])??yg,St=(ae==null?void 0:ae.turn)===o,Hr=(ft=l==null?void 0:l.players)==null?void 0:ft[a],qr=(Bi=l==null?void 0:l.players)==null?void 0:Bi[o];b.useEffect(()=>{const J=TA(t,te=>{var Ge,Re,Ke,Ot;if(c(te),!(te!=null&&te.gameState))return;const Ce=te.gameState;if(te.rematch&&(Dt(te.rematch),te.rematch.newRoomId&&X.current)){const Ue=lt.current.length===25?lt.current:Array.from({length:25},(Me,dr)=>dr+1);J(),i(`/game/${te.rematch.newRoomId}`,{state:{role:o,board:Ue},replace:!0});return}if(te.chat){const Ue=Object.values(te.chat).sort((dr,Wu)=>(dr.ts||0)-(Wu.ts||0)),Me=Ue[Ue.length-1];Me&&(Me.ts||0)>It.current&&Date.now()-(Me.ts||0)<8e3&&(It.current=Me.ts,Me.sender===o?(j(Me.text),clearTimeout(Le.current.my),Le.current.my=setTimeout(()=>j(""),4e3)):(S(Me.text),(Ge=s.ping)==null||Ge.call(s),clearTimeout(Le.current.opp),Le.current.opp=setTimeout(()=>S(""),4e3)))}if((Ce.winner||Ce.tie)&&!X.current){X.current=!0,clearInterval(K.current);const Ue=!!Ce.tie,Me=Ce.winner===o;v({won:Ue?null:Me,tie:Ue,title:Ue?"🤝 IT'S A TIE!":Me?"🎉 YOU WIN!":"😔 YOU LOST!",sub:Ue?"Both earn a point!":Me?["Domination! 👑","Flawless! ⚡","Champion! 🏆"][Math.floor(Math.random()*3)]:["GG, rematch? 💪","They got lucky 😤","Next time! 🤝"][Math.floor(Math.random()*3)]}),Me||Ue?(Re=s.win)==null||Re.call(s):(Ke=s.lose)==null||Ke.call(s),_a(Ue,Me,Ce,te)}Ce[`${a}Exited`]&&!X.current&&(X.current=!0,clearInterval(K.current),v({won:!0,tie:!1,title:"🏆 OPPONENT LEFT",sub:"You win by default!"}),(Ot=s.win)==null||Ot.call(s))});return()=>{J(),clearInterval(K.current),clearInterval(oe.current)}},[t]),b.useEffect(()=>{var J;yn>qe.current&&((J=s.line)==null||J.call(s),qe.current=yn)},[yn]),b.useEffect(()=>{dt.length===25&&(lt.current=dt)},[dt]),b.useEffect(()=>{if(!(ae!=null&&ae.turnStartedAt)||m)return;clearInterval(K.current);const J=Math.floor((Date.now()-ae.turnStartedAt)/1e3),te=Math.max(0,eh-J);return f(te),K.current=setInterval(()=>{f(Ce=>Ce<=1?(clearInterval(K.current),St&&!m&&!X.current&&(R?(x(!1),f(eh)):Bu()),0):Ce-1)},1e3),()=>clearInterval(K.current)},[ae==null?void 0:ae.turnStartedAt,ae==null?void 0:ae.turn]);const Bu=async()=>{const J=Array.from({length:25},(Me,dr)=>dr+1).filter(Me=>!Qn.includes(Me));if(J.length===0)return;const te=J[Math.floor(Math.random()*J.length)],Ce=[...Qn,te],Ge=o==="p1"?dt:hr,Re=o==="p2"?dt:hr,Ke=xt(Ge,Ce),Ot=xt(Re,Ce),Ue=$s-1;if(Ue<=0){await Ha(t,a);return}if(Ke>=vn&&Ot>=vn){await wT(t);return}if(Ke>=vn){await Ha(t,"p1");return}if(Ot>=vn){await Ha(t,"p2");return}await d3(t,o,Ce,Ke,Ot,Ue)},ga=async J=>{var Ot;if(m||X.current||!St&&!w||Qn.includes(J)||dt.length===0)return;clearInterval(K.current),Z([]),(Ot=s.cross)==null||Ot.call(s);const te=[...Qn,J],Ce=o==="p1"?dt:hr,Ge=o==="p2"?dt:hr,Re=xt(Ce.length?Ce:dt,te),Ke=xt(Ge.length?Ge:[],te);if(w){P(!1),await $a(t,o,te,Re,Ke,!0);return}if(!X.current){if(Re>=vn&&Ke>=vn){await $a(t,o,te,Re,Ke,!1),await wT(t);return}if(Re>=vn){await $a(t,o,te,Re,Ke,!1),await Ha(t,"p1");return}if(Ke>=vn){await $a(t,o,te,Re,Ke,!1),await Ha(t,"p2");return}}await $a(t,o,te,Re,Ke,!1)},zu=J=>{var te;if(!(!y[J]||!St||m)&&((te=s.click)==null||te.call(s),k(Ce=>({...Ce,[J]:!1})),J==="time"&&f(Ce=>Ce+20),J==="shield"&&x(!0),J==="double"&&P(!0),J==="hint"||J==="fifty")){const Ge=dt.filter(Re=>!Qn.includes(Re)).map(Re=>({n:Re,lines:xt(dt,[...Qn,Re])})).sort((Re,Ke)=>Ke.lines-Re.lines);Z(Ge.slice(0,J==="fifty"?2:1).map(Re=>Re.n)),setTimeout(()=>Z([]),7e3)}},Ef=async J=>{if(N)return;await f3(t,{text:J,isEmoji:!0,sender:o,senderName:(r==null?void 0:r.displayName)||"Me"}),A(!1),I(!0);let te=3;C(te),oe.current=setInterval(()=>{te--,C(te),te<=0&&(clearInterval(oe.current),I(!1),C(0))},1e3)},_a=async(J,te,Ce,Ge)=>{var Ke,Ot;if(!n)return;const Re=Math.round((Date.now()-G.current)/1e3);try{await kA(n.uid,J?!1:te);const Ue=(Ke=Ge==null?void 0:Ge.players)==null?void 0:Ke.p1,Me=(Ot=Ge==null?void 0:Ge.players)==null?void 0:Ot.p2;Ue&&Me&&o==="p1"&&await xA({p1Uid:Ue.uid,p2Uid:Me.uid,p1Name:Ue.name,p2Name:Me.name,winner:J?null:Ce.winner==="p1"?Ue.uid:Me.uid,p1Lines:Ce.p1Lines,p2Lines:Ce.p2Lines,duration:Re,mode:"multiplayer"})}catch(Ue){console.error("matchEnd error:",Ue)}},ya=async()=>{if(z)return;Y(!0);const J={uid:n==null?void 0:n.uid,name:(r==null?void 0:r.displayName)||"Player",avatar:(r==null?void 0:r.avatar)||"🎯",role:o};try{const te=await m3(t,o,lt.current,J);te&&i(`/game/${te}`,{state:{role:"p1",board:lt.current},replace:!0})}catch(te){console.error("Rematch error:",te),Y(!1)}},Hs=async()=>{clearInterval(K.current),await p3(t,o),i("/")};if(!l)return p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:14},children:[p.jsx("div",{className:"spinner"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)"},children:"Connecting to room…"})]});if((ae==null?void 0:ae.status)==="waiting")return p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:14},children:[p.jsx("div",{className:"spinner"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)"},children:"Waiting for opponent…"}),p.jsx("button",{className:"btn btn-ghost",onClick:Hs,children:"Cancel"})]});const Se=48;return p.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[p.jsx("div",{style:{background:"var(--panel)",borderBottom:"2px solid var(--edge2)",padding:"6px 8px",flexShrink:0},children:p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:4},children:[p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[p.jsxs("div",{style:{position:"relative",width:Se,height:Se,flexShrink:0},children:[p.jsx("div",{style:{width:Se,height:Se,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${St?"var(--c1)":"var(--edge)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,transition:"border-color 0.3s"},children:(qr==null?void 0:qr.avatar)||(r==null?void 0:r.avatar)||"🎯"}),p.jsx(xT,{timeLeft:h,size:Se,active:St&&!m}),R&&p.jsx("div",{style:{position:"absolute",bottom:-2,right:-2,fontSize:10},children:"🛡️"})]}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:800,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:70},children:(qr==null?void 0:qr.name)||(r==null?void 0:r.displayName)||"You"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[yn,"/",vn]}),St&&!m&&p.jsx("div",{style:{fontSize:8,fontWeight:800,color:"var(--c1)",letterSpacing:1},children:w?"2️⃣ Pick 2nd":`${h}s`})]})]}),O&&p.jsx("div",{style:{marginTop:3,fontSize:14,background:"rgba(0,255,204,0.1)",border:"1px solid rgba(0,255,204,0.3)",borderRadius:8,padding:"2px 6px",display:"inline-block"},children:O}),p.jsx("div",{style:{display:"flex",gap:2,marginTop:3,flexWrap:"wrap"},children:kT.map(J=>p.jsx("button",{onClick:()=>zu(J.id),disabled:!y[J.id]||!St||!!m,title:J.tip,style:{fontSize:12,padding:"2px 3px",background:y[J.id]?"var(--panel2)":"transparent",border:`2px solid ${y[J.id]?"var(--edge2)":"transparent"}`,borderRadius:4,cursor:y[J.id]&&St?"pointer":"default",opacity:y[J.id]?St?1:.35:.1,WebkitTapHighlightColor:"transparent"},children:J.icon},J.id))}),p.jsx("div",{style:{marginTop:2},children:p.jsx(RT,{count:$s})})]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,minWidth:44,paddingTop:2},children:[p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,lineHeight:1},children:[p.jsx("span",{style:{color:"var(--c1)"},children:yn}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 1px"},children:":"}),p.jsx("span",{style:{color:"var(--c2)"},children:Ws})]}),p.jsxs("div",{style:{fontSize:7,letterSpacing:1.5,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700},children:["#",t]})]}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,flexDirection:"row-reverse"},children:[p.jsxs("div",{style:{position:"relative",width:Se,height:Se,flexShrink:0},children:[p.jsx("div",{style:{width:Se,height:Se,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${St?"var(--edge)":"var(--c2)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,transition:"border-color 0.3s"},children:(Hr==null?void 0:Hr.avatar)||"🎯"}),p.jsx(xT,{timeLeft:h,size:Se,active:!St&&!m})]}),p.jsxs("div",{style:{flex:1,minWidth:0,textAlign:"right"},children:[p.jsx("div",{style:{fontWeight:800,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:70,marginLeft:"auto"},children:(Hr==null?void 0:Hr.name)||"Opponent"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[Ws,"/",vn]}),!St&&!m&&p.jsxs("div",{style:{fontSize:8,fontWeight:800,color:"var(--c2)",letterSpacing:1},children:[h,"s"]})]})]}),M&&p.jsx("div",{style:{marginTop:3,fontSize:14,background:"rgba(255,45,85,0.1)",border:"1px solid rgba(255,45,85,0.3)",borderRadius:8,padding:"2px 6px",display:"flex",justifyContent:"flex-end"},children:M}),p.jsx("div",{style:{display:"flex",gap:2,marginTop:3,justifyContent:"flex-end"},children:kT.map(J=>p.jsx("div",{style:{fontSize:12,padding:"2px 3px",background:"var(--panel2)",border:"2px solid var(--edge)",borderRadius:4,opacity:.2},children:J.icon},J.id))}),p.jsx("div",{style:{marginTop:2,display:"flex",justifyContent:"flex-end"},children:p.jsx(RT,{count:ma})})]})]})}),p.jsxs("div",{style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"4px 8px"},children:[p.jsxs("div",{style:{marginBottom:5,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:11,color:"var(--ink2)"},children:m?"🏁 Game Over":St?"👆 Your turn — tap to call a number":"⏳ Opponent choosing…"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink3)",marginTop:1},children:[Qn.length,"/25 called"]}),Ie.length>0&&p.jsxs("div",{style:{fontSize:11,color:"var(--c3)",marginTop:2,fontWeight:700},children:["💡 Try: ",Ie.join(" or ")]}),w&&p.jsx("div",{style:{fontSize:11,color:"var(--c3)",fontWeight:800,marginTop:2,animation:"blink 0.8s infinite"},children:"2️⃣ PICK YOUR 2ND!"})]}),p.jsx(_g,{board:dt,selected:Qn,onCellClick:ga,disabled:!St&&!w||!!m||dt.length===0,highlightCells:Ie}),p.jsxs("div",{style:{marginTop:8,display:"flex",gap:4,alignItems:"center"},children:[Array.from({length:vn}).map((J,te)=>p.jsx("div",{style:{width:28,height:6,borderRadius:3,background:te<yn?CT[Math.min(te,4)]:"var(--edge)",boxShadow:te<yn?`0 0 6px ${CT[te]}88`:"none",transition:"all 0.4s"}},te)),p.jsxs("span",{style:{fontSize:10,color:"var(--ink2)",marginLeft:3},children:[yn,"/",vn]})]})]}),p.jsxs("div",{style:{background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"5px 8px",flexShrink:0},children:[E&&p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:3,justifyContent:"center",paddingBottom:5},children:e5.map(J=>p.jsx("button",{onClick:()=>Ef(J),disabled:N,style:{fontSize:19,background:"none",border:"none",cursor:"pointer",padding:"2px 3px",borderRadius:4,opacity:N?.3:1,WebkitTapHighlightColor:"transparent"},children:J},J))}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[p.jsx("button",{onClick:()=>!N&&A(J=>!J),disabled:N,style:{background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"6px 10px",fontSize:11,fontWeight:700,color:N?"var(--ink3)":"var(--ink)",cursor:N?"not-allowed":"pointer",WebkitTapHighlightColor:"transparent"},children:N?`⏱${T}s`:E?"✕":"😊"}),p.jsx("div",{style:{flex:1}}),p.jsx("button",{onClick:Hs,style:{background:"transparent",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"6px 12px",fontSize:11,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Leave Room"})]})]}),p.jsx(CA,{show:!!m,isWin:m==null?void 0:m.won,tie:m==null?void 0:m.tie,title:m==null?void 0:m.title,sub:z?"⏳ Waiting for opponent to accept rematch…":m==null?void 0:m.sub,onPlayAgain:ya,onHome:Hs,showPlayAgain:!z||!tt.newRoomId})]})}function n5(){const{user:t}=Nn(),e=Pn(),[n,r]=b.useState([]),[i,s]=b.useState(!0);b.useEffect(()=>{Q3().then(l=>{r(l),s(!1)})},[]);const o=l=>l===1?{color:"var(--c3)",fontSize:22}:l===2?{color:"#aaa",fontSize:20}:l===3?{color:"#cd7f32",fontSize:18}:{color:"var(--ink3)",fontSize:16},a=l=>l===1?"🥇":l===2?"🥈":l===3?"🥉":`#${l}`;return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>e("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🏆 LEADERBOARD"})]}),i?p.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:p.jsx("div",{className:"spinner"})}):p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{style:{padding:"4px 0"},children:[n.length===0&&p.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:"No players yet. Be the first!"}),n.map(l=>p.jsxs("div",{className:"lb-row",style:{background:l.uid===(t==null?void 0:t.uid)?"rgba(0,255,204,0.05)":"transparent"},children:[p.jsx("div",{style:{...o(l.rank),fontFamily:"'Black Han Sans',sans-serif",width:36,textAlign:"center"},children:a(l.rank)}),p.jsx("div",{style:{fontSize:24},children:l.avatar||"🎯"}),p.jsxs("div",{style:{flex:1},children:[p.jsxs("div",{style:{fontWeight:700,fontSize:14},children:[l.displayName,l.uid===(t==null?void 0:t.uid)&&p.jsx("span",{style:{fontSize:10,color:"var(--c1)",marginLeft:6},children:"YOU"})]}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[l.total||0," games · ",l.winRate||0,"% WR"]})]}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:"var(--c1)"},children:l.wins||0}),p.jsx("div",{style:{fontSize:10,color:"var(--ink3)",letterSpacing:1,textTransform:"uppercase"},children:"wins"})]})]},l.uid))]})})]})}async function RA(t,e,n){const r=Ko(Ri(et,"friendRequests"),Qo("from","==",t),Qo("to","==",e));return(await Yl(r)).empty?(await hy(Ri(et,"friendRequests"),{from:t,to:e,fromName:n,status:"pending",timestamp:Pu()}),{success:!0}):{error:"Request already sent"}}async function r5(t,e,n){await pn(Qt(et,"friendRequests",t),{status:"accepted"}),await pn(Qt(et,"users",e),{friends:eg(n)}),await pn(Qt(et,"users",n),{friends:eg(e)})}async function i5(t){await pn(Qt(et,"friendRequests",t),{status:"declined"})}async function s5(t,e){await pn(Qt(et,"users",t),{friends:tg(e)}),await pn(Qt(et,"users",e),{friends:tg(t)})}function o5(t,e){const n=Ko(Ri(et,"friendRequests"),Qo("to","==",t));return Cx(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i.filter(s=>s.status==="pending"))},r=>{console.error("Friend requests error:",r),e([])})}async function a5(t){if(!t||t.length===0)return[];const e=[];for(const n of t)try{const r=await Au(Qt(et,"users",n));r.exists()&&e.push({uid:n,...r.data()})}catch{}return e}function l5(){var k;const{user:t,profile:e,refreshProfile:n}=Nn(),r=Pn(),[i,s]=b.useState("friends"),[o,a]=b.useState([]),[l,c]=b.useState([]),[h,f]=b.useState(""),[m,v]=b.useState([]),[E,A]=b.useState(!1),[N,I]=b.useState(!0),T=b.useRef(null);b.useEffect(()=>{if(!(e!=null&&e.friends)){I(!1);return}a5(e.friends).then(w=>{a(w),I(!1)}).catch(()=>I(!1))},[(k=e==null?void 0:e.friends)==null?void 0:k.length]),b.useEffect(()=>{if(!t)return;const w=o5(t.uid,P=>{c(P)});return T.current=w,()=>{T.current&&T.current()}},[t==null?void 0:t.uid]);const C=async()=>{if(h.trim()){A(!0),v([]);try{const w=await i3(h.trim());v(w.filter(P=>P.uid!==t.uid))}catch{as("Search failed","Try again","error")}A(!1)}},O=async w=>{const P=await RA(t.uid,w.uid,(e==null?void 0:e.displayName)||"Player");P.error?as("⚠️ "+P.error,"","info"):as("✅ Request Sent!",`Sent to ${w.displayName}`,"success")},j=async w=>{await r5(w.id,t.uid,w.from),await n(t.uid),as("👥 Friends!",`You and ${w.fromName} are now friends`,"success")},M=async w=>{await i5(w.id)},S=async w=>{await s5(t.uid,w),await n(t.uid),a(P=>P.filter(R=>R.uid!==w))},y=[{id:"friends",label:`Friends (${o.length})`},{id:"requests",label:`Requests ${l.length>0?`(${l.length})`:""}`,badge:l.length},{id:"search",label:"🔍 Find"}];return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:14,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"👥 FRIENDS"})]}),p.jsx("div",{style:{display:"flex",gap:6,width:"100%",maxWidth:440,marginBottom:14},children:y.map(w=>p.jsxs("button",{onClick:()=>s(w.id),style:{flex:1,padding:"9px 6px",border:"2px solid",borderColor:i===w.id?"var(--c1)":"var(--edge2)",borderRadius:"var(--r)",background:i===w.id?"rgba(0,255,204,0.1)":"var(--panel)",color:i===w.id?"var(--c1)":"var(--ink2)",fontSize:11,fontWeight:700,cursor:"pointer",WebkitTapHighlightColor:"transparent",position:"relative"},children:[w.label,w.badge>0&&i!==w.id&&p.jsx("span",{style:{position:"absolute",top:-6,right:-4,background:"var(--c2)",color:"#fff",fontSize:10,fontWeight:700,borderRadius:"50%",width:17,height:17,display:"flex",alignItems:"center",justifyContent:"center"},children:w.badge})]},w.id))}),i==="friends"&&p.jsx("div",{className:"card",style:{maxWidth:440},children:N?p.jsx("div",{style:{display:"flex",justifyContent:"center",padding:32},children:p.jsx("div",{className:"spinner"})}):o.length===0?p.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[p.jsx("div",{style:{fontSize:40,marginBottom:10},children:"👥"}),p.jsx("div",{style:{fontWeight:700},children:"No friends yet"}),p.jsx("div",{style:{fontSize:13,marginTop:4},children:"Search to find and add players!"}),p.jsx("button",{className:"btn btn-primary",style:{marginTop:14},onClick:()=>s("search"),children:"Find Players"})]}):o.map(w=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("span",{style:{fontSize:26},children:w.avatar||"🎯"}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.displayName}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[w.wins||0,"W · ",w.losses||0,"L"]})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[p.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:w.isOnline?"var(--c1)":"var(--ink3)",boxShadow:w.isOnline?"0 0 6px var(--c1)":"none"}}),p.jsx("span",{style:{fontSize:10,color:"var(--ink3)"},children:w.isOnline?"Online":"Offline"})]}),p.jsx("button",{onClick:()=>S(w.uid),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:6,padding:"4px 10px",fontSize:11,color:"var(--ink3)",cursor:"pointer"},children:"Remove"})]},w.uid))}),i==="requests"&&p.jsx("div",{className:"card",style:{maxWidth:440},children:l.length===0?p.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[p.jsx("div",{style:{fontSize:40,marginBottom:10},children:"📭"}),p.jsx("div",{style:{fontWeight:700},children:"No pending requests"}),p.jsx("div",{style:{fontSize:13,marginTop:4},children:"When someone adds you, it appears here."})]}):l.map(w=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("span",{style:{fontSize:28},children:"🎯"}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.fromName||"Unknown"}),p.jsx("div",{style:{fontSize:12,color:"var(--ink2)",marginTop:2},children:"Wants to be friends"})]}),p.jsx("button",{onClick:()=>j(w),style:{background:"var(--c1)",color:"#000",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer",marginRight:4},children:"✓ Accept"}),p.jsx("button",{onClick:()=>M(w),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"8px 10px",fontSize:12,color:"var(--ink2)",cursor:"pointer"},children:"✕"})]},w.id))}),i==="search"&&p.jsxs("div",{style:{width:"100%",maxWidth:440},children:[p.jsxs("div",{style:{display:"flex",gap:8,marginBottom:14},children:[p.jsx("input",{type:"text",placeholder:"Search username…",value:h,onChange:w=>f(w.target.value),onKeyDown:w=>w.key==="Enter"&&C(),style:{flex:1}}),p.jsx("button",{className:"btn btn-primary",onClick:C,disabled:E,style:{padding:"0 16px"},children:E?"…":"🔍"})]}),m.length>0&&p.jsx("div",{className:"card",children:m.map(w=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("span",{style:{fontSize:26},children:w.avatar||"🎯"}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.displayName}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[w.wins||0,"W · ",w.losses||0,"L"]})]}),p.jsx("button",{onClick:()=>O(w),style:{background:"var(--c4)",color:"#fff",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer"},children:"+ Add"})]},w.uid))}),h&&!E&&m.length===0&&p.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",padding:24,fontSize:14},children:['No players found for "',h,'"']})]})]})}function u5(t){if(!t)return"—";try{return(t!=null&&t.toDate?t.toDate():t!=null&&t.seconds?new Date(t.seconds*1e3):new Date(t)).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"—"}}function c5(t){if(!t)return"—";const e=Math.floor(t/60),n=t%60;return e>0?`${e}m ${n}s`:`${n}s`}function h5(){const{user:t,profile:e}=Nn(),n=Pn(),[r,i]=b.useState([]),[s,o]=b.useState(!0),[a,l]=b.useState({});b.useEffect(()=>{t&&Y3(t.uid).then(h=>{const f=h.filter(m=>m.mode!=="bot"&&m.p2Uid!=="bot"&&m.p2Uid!=="BOT");i(f),o(!1)}).catch(()=>o(!1))},[t]);const c=async h=>{const f=h.p1Uid===t.uid,m=f?h.p2Uid:h.p1Uid,v=f?h.p2Name:h.p1Name;if(!m||m===t.uid)return;l(A=>({...A,[h.id]:"loading"}));const E=await RA(t.uid,m,(e==null?void 0:e.displayName)||"Player");E.error?(as("Already sent",E.error,"info"),l(A=>({...A,[h.id]:"done"}))):(as("✅ Request Sent!",`Friend request sent to ${v}`,"success"),l(A=>({...A,[h.id]:"done"})))};return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"📊 HISTORY"})]}),s?p.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:p.jsx("div",{className:"spinner"})}):r.length===0?p.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",paddingTop:60},children:[p.jsx("div",{style:{fontSize:52,marginBottom:14},children:"🎮"}),p.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:6},children:"No multiplayer games yet!"}),p.jsx("div",{style:{fontSize:13},children:"Play against real opponents — your match history appears here."}),p.jsx("button",{className:"btn btn-primary",style:{marginTop:20},onClick:()=>n("/"),children:"Play Now"})]}):p.jsx("div",{className:"card",style:{maxWidth:440},children:r.map(h=>{const f=h.p1Uid===t.uid,m=h.winner===t.uid,v=f?h.p1Lines:h.p2Lines,E=f?h.p2Lines:h.p1Lines,A=f?h.p2Name:h.p1Name,N=f?h.p2Uid:h.p1Uid,I=a[h.id];return p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("div",{style:{fontSize:26,width:34,textAlign:"center",flexShrink:0},children:m?"🏆":"💀"}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["vs ",A||"Unknown"]}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[u5(h.timestamp||h.tsNum)," · ",c5(h.duration)]})]}),p.jsxs("div",{style:{textAlign:"right",marginRight:6},children:[p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:16},children:[p.jsx("span",{style:{color:"var(--c1)"},children:v??"—"}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 3px"},children:"–"}),p.jsx("span",{style:{color:"var(--c2)"},children:E??"—"})]}),p.jsx("div",{style:{fontSize:10,fontWeight:800,color:m?"var(--c1)":"var(--c2)",letterSpacing:1},children:m?"WIN":"LOSS"})]}),N&&N!==t.uid&&p.jsx("button",{onClick:()=>c(h),disabled:I==="loading"||I==="done",title:`Add ${A} as friend`,style:{fontSize:16,background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"5px 8px",cursor:I?"not-allowed":"pointer",color:I==="done"?"var(--c1)":"var(--c4)",flexShrink:0,WebkitTapHighlightColor:"transparent",opacity:I==="done"?.5:1},children:I==="loading"?"⏳":I==="done"?"✅":"👥+"})]},h.id)})})]})}function AA(){return p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:p.jsx("div",{className:"spinner"})})}function Gi({children:t}){const{user:e,loading:n}=Nn();return n?p.jsx(AA,{}):e?t:p.jsx(tC,{to:"/login",replace:!0})}function d5(){const{user:t,loading:e}=Nn();return e?p.jsx(AA,{}):t?p.jsx(H3,{}):p.jsx(M3,{})}function f5(){return b.useEffect(()=>{O3(t=>{var e,n;as(((e=t.notification)==null?void 0:e.title)||"DiNGo",((n=t.notification)==null?void 0:n.body)||"","info")})},[]),p.jsxs(Eb,{children:[p.jsx(h3,{}),p.jsx(N3,{}),p.jsxs(yb,{children:[p.jsx(On,{path:"/",element:p.jsx(d5,{})}),p.jsx(On,{path:"/login",element:p.jsx(V3,{})}),p.jsx(On,{path:"/profile",element:p.jsx(Gi,{children:p.jsx(K3,{})})}),p.jsx(On,{path:"/bot",element:p.jsx(Gi,{children:p.jsx(X3,{})})}),p.jsx(On,{path:"/room/:mode",element:p.jsx(Gi,{children:p.jsx(Z3,{})})}),p.jsx(On,{path:"/game/:roomId",element:p.jsx(Gi,{children:p.jsx(t5,{})})}),p.jsx(On,{path:"/leaderboard",element:p.jsx(Gi,{children:p.jsx(n5,{})})}),p.jsx(On,{path:"/friends",element:p.jsx(Gi,{children:p.jsx(l5,{})})}),p.jsx(On,{path:"/history",element:p.jsx(Gi,{children:p.jsx(h5,{})})}),p.jsx(On,{path:"*",element:p.jsx(tC,{to:"/",replace:!0})})]})]})}function p5(){return p.jsx(c3,{children:p.jsx(f5,{})})}Op.createRoot(document.getElementById("root")).render(p.jsx(FT.StrictMode,{children:p.jsx(p5,{})}));
