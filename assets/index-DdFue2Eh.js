function XR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function JR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var OT={exports:{}},ud={},LT={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fu=Symbol.for("react.element"),ZR=Symbol.for("react.portal"),eA=Symbol.for("react.fragment"),tA=Symbol.for("react.strict_mode"),nA=Symbol.for("react.profiler"),rA=Symbol.for("react.provider"),iA=Symbol.for("react.context"),sA=Symbol.for("react.forward_ref"),oA=Symbol.for("react.suspense"),aA=Symbol.for("react.memo"),lA=Symbol.for("react.lazy"),Jv=Symbol.iterator;function uA(t){return t===null||typeof t!="object"?null:(t=Jv&&t[Jv]||t["@@iterator"],typeof t=="function"?t:null)}var MT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},VT=Object.assign,jT={};function ra(t,e,n){this.props=t,this.context=e,this.refs=jT,this.updater=n||MT}ra.prototype.isReactComponent={};ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function FT(){}FT.prototype=ra.prototype;function _g(t,e,n){this.props=t,this.context=e,this.refs=jT,this.updater=n||MT}var vg=_g.prototype=new FT;vg.constructor=_g;VT(vg,ra.prototype);vg.isPureReactComponent=!0;var Zv=Array.isArray,UT=Object.prototype.hasOwnProperty,wg={current:null},BT={key:!0,ref:!0,__self:!0,__source:!0};function zT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)UT.call(e,r)&&!BT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fu,type:t,key:s,ref:o,props:i,_owner:wg.current}}function cA(t,e){return{$$typeof:fu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Eg(t){return typeof t=="object"&&t!==null&&t.$$typeof===fu}function hA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var e0=/\/+/g;function Mf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hA(""+t.key):e.toString(36)}function Lc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fu:case ZR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Mf(o,0):r,Zv(i)?(n="",t!=null&&(n=t.replace(e0,"$&/")+"/"),Lc(i,e,n,"",function(c){return c})):i!=null&&(Eg(i)&&(i=cA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(e0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Zv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Mf(s,a);o+=Lc(s,e,n,l,i)}else if(l=uA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Mf(s,a++),o+=Lc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ac(t,e,n){if(t==null)return t;var r=[],i=0;return Lc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function dA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Mc={transition:null},fA={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Mc,ReactCurrentOwner:wg};function WT(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:ac,forEach:function(t,e,n){ac(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ac(t,function(){e++}),e},toArray:function(t){return ac(t,function(e){return e})||[]},only:function(t){if(!Eg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=ra;de.Fragment=eA;de.Profiler=nA;de.PureComponent=_g;de.StrictMode=tA;de.Suspense=oA;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fA;de.act=WT;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=VT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)UT.call(e,l)&&!BT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:fu,type:t.type,key:i,ref:s,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:iA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rA,_context:t},t.Consumer=t};de.createElement=zT;de.createFactory=function(t){var e=zT.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:sA,render:t}};de.isValidElement=Eg;de.lazy=function(t){return{$$typeof:lA,_payload:{_status:-1,_result:t},_init:dA}};de.memo=function(t,e){return{$$typeof:aA,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Mc.transition;Mc.transition={};try{t()}finally{Mc.transition=e}};de.unstable_act=WT;de.useCallback=function(t,e){return Yt.current.useCallback(t,e)};de.useContext=function(t){return Yt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Yt.current.useEffect(t,e)};de.useId=function(){return Yt.current.useId()};de.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Yt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};de.useRef=function(t){return Yt.current.useRef(t)};de.useState=function(t){return Yt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Yt.current.useTransition()};de.version="18.3.1";LT.exports=de;var b=LT.exports;const $T=JR(b),pA=XR({__proto__:null,default:$T},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mA=b,gA=Symbol.for("react.element"),yA=Symbol.for("react.fragment"),_A=Object.prototype.hasOwnProperty,vA=mA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wA={key:!0,ref:!0,__self:!0,__source:!0};function HT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_A.call(e,r)&&!wA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gA,type:t,key:s,ref:o,props:i,_owner:vA.current}}ud.Fragment=yA;ud.jsx=HT;ud.jsxs=HT;OT.exports=ud;var p=OT.exports,Lp={},qT={exports:{}},yn={},GT={exports:{}},KT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var te=$.length;$.push(Q);e:for(;0<te;){var H=te-1>>>1,j=$[H];if(0<i(j,Q))$[H]=Q,$[te]=j,te=H;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],te=$.pop();if(te!==Q){$[0]=te;e:for(var H=0,j=$.length,X=j>>>1;H<X;){var me=2*(H+1)-1,Ce=$[me],Ae=me+1,he=$[Ae];if(0>i(Ce,te))Ae<j&&0>i(he,Ce)?($[H]=he,$[Ae]=te,H=Ae):($[H]=Ce,$[me]=te,H=me);else if(Ae<j&&0>i(he,te))$[H]=he,$[Ae]=te,H=Ae;else break e}}return Q}function i($,Q){var te=$.sortIndex-Q.sortIndex;return te!==0?te:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,m=3,w=!1,E=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function O($){if(A=!1,k($),!E)if(n(l)!==null)E=!0,bt(F);else{var Q=n(c);Q!==null&&Et(O,Q.startTime-$)}}function F($,Q){E=!1,A&&(A=!1,I(v),v=-1),w=!0;var te=m;try{for(k(Q),f=n(l);f!==null&&(!(f.expirationTime>Q)||$&&!P());){var H=f.callback;if(typeof H=="function"){f.callback=null,m=f.priorityLevel;var j=H(f.expirationTime<=Q);Q=t.unstable_now(),typeof j=="function"?f.callback=j:f===n(l)&&r(l),k(Q)}else r(l);f=n(l)}if(f!==null)var X=!0;else{var me=n(c);me!==null&&Et(O,me.startTime-Q),X=!1}return X}finally{f=null,m=te,w=!1}}var M=!1,C=null,v=-1,S=5,x=-1;function P(){return!(t.unstable_now()-x<S)}function R(){if(C!==null){var $=t.unstable_now();x=$;var Q=!0;try{Q=C(!0,$)}finally{Q?_():(M=!1,C=null)}}else M=!1}var _;if(typeof T=="function")_=function(){T(R)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,nt=oe.port2;oe.port1.onmessage=R,_=function(){nt.postMessage(null)}}else _=function(){N(R,0)};function bt($){C=$,M||(M=!0,_())}function Et($,Q){v=N(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){E||w||(E=!0,bt(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var te=m;m=Q;try{return $()}finally{m=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var te=m;m=$;try{return Q()}finally{m=te}},t.unstable_scheduleCallback=function($,Q,te){var H=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?H+te:H):te=H,$){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=te+j,$={id:h++,callback:Q,priorityLevel:$,startTime:te,expirationTime:j,sortIndex:-1},te>H?($.sortIndex=te,e(c,$),n(l)===null&&$===n(c)&&(A?(I(v),v=-1):A=!0,Et(O,te-H))):($.sortIndex=j,e(l,$),E||w||(E=!0,bt(F))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var Q=m;return function(){var te=m;m=Q;try{return $.apply(this,arguments)}finally{m=te}}}})(KT);GT.exports=KT;var EA=GT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TA=b,gn=EA;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var QT=new Set,kl={};function Ds(t,e){bo(t,e),bo(t+"Capture",e)}function bo(t,e){for(kl[t]=e,t=0;t<e.length;t++)QT.add(e[t])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mp=Object.prototype.hasOwnProperty,IA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t0={},n0={};function SA(t){return Mp.call(n0,t)?!0:Mp.call(t0,t)?!1:IA.test(t)?n0[t]=!0:(t0[t]=!0,!1)}function CA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kA(t,e,n,r){if(e===null||typeof e>"u"||CA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tg=/[\-:]([a-z])/g;function Ig(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tg,Ig);Pt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tg,Ig);Pt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tg,Ig);Pt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sg(t,e,n,r){var i=Pt.hasOwnProperty(e)?Pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kA(e,n,i,r)&&(n=null),r||i===null?SA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wr=TA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lc=Symbol.for("react.element"),oo=Symbol.for("react.portal"),ao=Symbol.for("react.fragment"),Cg=Symbol.for("react.strict_mode"),Vp=Symbol.for("react.profiler"),YT=Symbol.for("react.provider"),XT=Symbol.for("react.context"),kg=Symbol.for("react.forward_ref"),jp=Symbol.for("react.suspense"),Fp=Symbol.for("react.suspense_list"),xg=Symbol.for("react.memo"),ni=Symbol.for("react.lazy"),JT=Symbol.for("react.offscreen"),r0=Symbol.iterator;function La(t){return t===null||typeof t!="object"?null:(t=r0&&t[r0]||t["@@iterator"],typeof t=="function"?t:null)}var Qe=Object.assign,Vf;function Ya(t){if(Vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vf=e&&e[1]||""}return`
`+Vf+t}var jf=!1;function Ff(t,e){if(!t||jf)return"";jf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ya(t):""}function xA(t){switch(t.tag){case 5:return Ya(t.type);case 16:return Ya("Lazy");case 13:return Ya("Suspense");case 19:return Ya("SuspenseList");case 0:case 2:case 15:return t=Ff(t.type,!1),t;case 11:return t=Ff(t.type.render,!1),t;case 1:return t=Ff(t.type,!0),t;default:return""}}function Up(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ao:return"Fragment";case oo:return"Portal";case Vp:return"Profiler";case Cg:return"StrictMode";case jp:return"Suspense";case Fp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case XT:return(t.displayName||"Context")+".Consumer";case YT:return(t._context.displayName||"Context")+".Provider";case kg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xg:return e=t.displayName||null,e!==null?e:Up(t.type)||"Memo";case ni:e=t._payload,t=t._init;try{return Up(t(e))}catch{}}return null}function RA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Up(e);case 8:return e===Cg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ri(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ZT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AA(t){var e=ZT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uc(t){t._valueTracker||(t._valueTracker=AA(t))}function eI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ZT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bp(t,e){var n=e.checked;return Qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function i0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ri(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tI(t,e){e=e.checked,e!=null&&Sg(t,"checked",e,!1)}function zp(t,e){tI(t,e);var n=Ri(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wp(t,e.type,Ri(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function s0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wp(t,e,n){(e!=="number"||sh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xa=Array.isArray;function wo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ri(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $p(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function o0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Xa(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ri(n)}}function nI(t,e){var n=Ri(e.value),r=Ri(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function a0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cc,iI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cc=cc||document.createElement("div"),cc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ol={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PA=["Webkit","ms","Moz","O"];Object.keys(ol).forEach(function(t){PA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ol[e]=ol[t]})});function sI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ol.hasOwnProperty(t)&&ol[t]?(""+e).trim():e+"px"}function oI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var NA=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qp(t,e){if(e){if(NA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Gp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kp=null;function Rg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qp=null,Eo=null,To=null;function l0(t){if(t=gu(t)){if(typeof Qp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=pd(e),Qp(t.stateNode,t.type,e))}}function aI(t){Eo?To?To.push(t):To=[t]:Eo=t}function lI(){if(Eo){var t=Eo,e=To;if(To=Eo=null,l0(t),e)for(t=0;t<e.length;t++)l0(e[t])}}function uI(t,e){return t(e)}function cI(){}var Uf=!1;function hI(t,e,n){if(Uf)return t(e,n);Uf=!0;try{return uI(t,e,n)}finally{Uf=!1,(Eo!==null||To!==null)&&(cI(),lI())}}function Rl(t,e){var n=t.stateNode;if(n===null)return null;var r=pd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Yp=!1;if(br)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){Yp=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{Yp=!1}function bA(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var al=!1,oh=null,ah=!1,Xp=null,DA={onError:function(t){al=!0,oh=t}};function OA(t,e,n,r,i,s,o,a,l){al=!1,oh=null,bA.apply(DA,arguments)}function LA(t,e,n,r,i,s,o,a,l){if(OA.apply(this,arguments),al){if(al){var c=oh;al=!1,oh=null}else throw Error(B(198));ah||(ah=!0,Xp=c)}}function Os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function u0(t){if(Os(t)!==t)throw Error(B(188))}function MA(t){var e=t.alternate;if(!e){if(e=Os(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return u0(i),t;if(s===r)return u0(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function fI(t){return t=MA(t),t!==null?pI(t):null}function pI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pI(t);if(e!==null)return e;t=t.sibling}return null}var mI=gn.unstable_scheduleCallback,c0=gn.unstable_cancelCallback,VA=gn.unstable_shouldYield,jA=gn.unstable_requestPaint,tt=gn.unstable_now,FA=gn.unstable_getCurrentPriorityLevel,Ag=gn.unstable_ImmediatePriority,gI=gn.unstable_UserBlockingPriority,lh=gn.unstable_NormalPriority,UA=gn.unstable_LowPriority,yI=gn.unstable_IdlePriority,cd=null,nr=null;function BA(t){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(cd,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:$A,zA=Math.log,WA=Math.LN2;function $A(t){return t>>>=0,t===0?32:31-(zA(t)/WA|0)|0}var hc=64,dc=4194304;function Ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ja(a):(s&=o,s!==0&&(r=Ja(s)))}else o=n&~i,o!==0?r=Ja(o):s!==0&&(r=Ja(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$n(e),i=1<<n,r|=t[n],e&=~i;return r}function HA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=HA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Jp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _I(){var t=hc;return hc<<=1,!(hc&4194240)&&(hc=64),t}function Bf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function GA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ke=0;function vI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wI,Ng,EI,TI,II,Zp=!1,fc=[],pi=null,mi=null,gi=null,Al=new Map,Pl=new Map,ii=[],KA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function h0(t,e){switch(t){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":mi=null;break;case"mouseover":case"mouseout":gi=null;break;case"pointerover":case"pointerout":Al.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(e.pointerId)}}function Va(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=gu(e),e!==null&&Ng(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QA(t,e,n,r,i){switch(e){case"focusin":return pi=Va(pi,t,e,n,r,i),!0;case"dragenter":return mi=Va(mi,t,e,n,r,i),!0;case"mouseover":return gi=Va(gi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Al.set(s,Va(Al.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pl.set(s,Va(Pl.get(s)||null,t,e,n,r,i)),!0}return!1}function SI(t){var e=rs(t.target);if(e!==null){var n=Os(e);if(n!==null){if(e=n.tag,e===13){if(e=dI(n),e!==null){t.blockedOn=e,II(t.priority,function(){EI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=em(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kp=r,n.target.dispatchEvent(r),Kp=null}else return e=gu(n),e!==null&&Ng(e),t.blockedOn=n,!1;e.shift()}return!0}function d0(t,e,n){Vc(t)&&n.delete(e)}function YA(){Zp=!1,pi!==null&&Vc(pi)&&(pi=null),mi!==null&&Vc(mi)&&(mi=null),gi!==null&&Vc(gi)&&(gi=null),Al.forEach(d0),Pl.forEach(d0)}function ja(t,e){t.blockedOn===e&&(t.blockedOn=null,Zp||(Zp=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,YA)))}function Nl(t){function e(i){return ja(i,t)}if(0<fc.length){ja(fc[0],t);for(var n=1;n<fc.length;n++){var r=fc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pi!==null&&ja(pi,t),mi!==null&&ja(mi,t),gi!==null&&ja(gi,t),Al.forEach(e),Pl.forEach(e),n=0;n<ii.length;n++)r=ii[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ii.length&&(n=ii[0],n.blockedOn===null);)SI(n),n.blockedOn===null&&ii.shift()}var Io=Wr.ReactCurrentBatchConfig,ch=!0;function XA(t,e,n,r){var i=ke,s=Io.transition;Io.transition=null;try{ke=1,bg(t,e,n,r)}finally{ke=i,Io.transition=s}}function JA(t,e,n,r){var i=ke,s=Io.transition;Io.transition=null;try{ke=4,bg(t,e,n,r)}finally{ke=i,Io.transition=s}}function bg(t,e,n,r){if(ch){var i=em(t,e,n,r);if(i===null)Xf(t,e,r,hh,n),h0(t,r);else if(QA(i,t,e,n,r))r.stopPropagation();else if(h0(t,r),e&4&&-1<KA.indexOf(t)){for(;i!==null;){var s=gu(i);if(s!==null&&wI(s),s=em(t,e,n,r),s===null&&Xf(t,e,r,hh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xf(t,e,r,null,n)}}var hh=null;function em(t,e,n,r){if(hh=null,t=Rg(r),t=rs(t),t!==null)if(e=Os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hh=t,null}function CI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FA()){case Ag:return 1;case gI:return 4;case lh:case UA:return 16;case yI:return 536870912;default:return 16}default:return 16}}var ui=null,Dg=null,jc=null;function kI(){if(jc)return jc;var t,e=Dg,n=e.length,r,i="value"in ui?ui.value:ui.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return jc=i.slice(t,1<r?1-r:void 0)}function Fc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pc(){return!0}function f0(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pc:f0,this.isPropagationStopped=f0,this}return Qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pc)},persist:function(){},isPersistent:pc}),e}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Og=_n(ia),mu=Qe({},ia,{view:0,detail:0}),ZA=_n(mu),zf,Wf,Fa,hd=Qe({},mu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fa&&(Fa&&t.type==="mousemove"?(zf=t.screenX-Fa.screenX,Wf=t.screenY-Fa.screenY):Wf=zf=0,Fa=t),zf)},movementY:function(t){return"movementY"in t?t.movementY:Wf}}),p0=_n(hd),eP=Qe({},hd,{dataTransfer:0}),tP=_n(eP),nP=Qe({},mu,{relatedTarget:0}),$f=_n(nP),rP=Qe({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),iP=_n(rP),sP=Qe({},ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oP=_n(sP),aP=Qe({},ia,{data:0}),m0=_n(aP),lP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cP[t])?!!e[t]:!1}function Lg(){return hP}var dP=Qe({},mu,{key:function(t){if(t.key){var e=lP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lg,charCode:function(t){return t.type==="keypress"?Fc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fP=_n(dP),pP=Qe({},hd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g0=_n(pP),mP=Qe({},mu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lg}),gP=_n(mP),yP=Qe({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),_P=_n(yP),vP=Qe({},hd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wP=_n(vP),EP=[9,13,27,32],Mg=br&&"CompositionEvent"in window,ll=null;br&&"documentMode"in document&&(ll=document.documentMode);var TP=br&&"TextEvent"in window&&!ll,xI=br&&(!Mg||ll&&8<ll&&11>=ll),y0=" ",_0=!1;function RI(t,e){switch(t){case"keyup":return EP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function AI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lo=!1;function IP(t,e){switch(t){case"compositionend":return AI(e);case"keypress":return e.which!==32?null:(_0=!0,y0);case"textInput":return t=e.data,t===y0&&_0?null:t;default:return null}}function SP(t,e){if(lo)return t==="compositionend"||!Mg&&RI(t,e)?(t=kI(),jc=Dg=ui=null,lo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xI&&e.locale!=="ko"?null:e.data;default:return null}}var CP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CP[t.type]:e==="textarea"}function PI(t,e,n,r){aI(r),e=dh(e,"onChange"),0<e.length&&(n=new Og("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ul=null,bl=null;function kP(t){BI(t,0)}function dd(t){var e=ho(t);if(eI(e))return t}function xP(t,e){if(t==="change")return e}var NI=!1;if(br){var Hf;if(br){var qf="oninput"in document;if(!qf){var w0=document.createElement("div");w0.setAttribute("oninput","return;"),qf=typeof w0.oninput=="function"}Hf=qf}else Hf=!1;NI=Hf&&(!document.documentMode||9<document.documentMode)}function E0(){ul&&(ul.detachEvent("onpropertychange",bI),bl=ul=null)}function bI(t){if(t.propertyName==="value"&&dd(bl)){var e=[];PI(e,bl,t,Rg(t)),hI(kP,e)}}function RP(t,e,n){t==="focusin"?(E0(),ul=e,bl=n,ul.attachEvent("onpropertychange",bI)):t==="focusout"&&E0()}function AP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dd(bl)}function PP(t,e){if(t==="click")return dd(e)}function NP(t,e){if(t==="input"||t==="change")return dd(e)}function bP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:bP;function Dl(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mp.call(e,i)||!Kn(t[i],e[i]))return!1}return!0}function T0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function I0(t,e){var n=T0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=T0(n)}}function DI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?DI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function OI(){for(var t=window,e=sh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sh(t.document)}return e}function Vg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function DP(t){var e=OI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&DI(n.ownerDocument.documentElement,n)){if(r!==null&&Vg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=I0(n,s);var o=I0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OP=br&&"documentMode"in document&&11>=document.documentMode,uo=null,tm=null,cl=null,nm=!1;function S0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nm||uo==null||uo!==sh(r)||(r=uo,"selectionStart"in r&&Vg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cl&&Dl(cl,r)||(cl=r,r=dh(tm,"onSelect"),0<r.length&&(e=new Og("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=uo)))}function mc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var co={animationend:mc("Animation","AnimationEnd"),animationiteration:mc("Animation","AnimationIteration"),animationstart:mc("Animation","AnimationStart"),transitionend:mc("Transition","TransitionEnd")},Gf={},LI={};br&&(LI=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function fd(t){if(Gf[t])return Gf[t];if(!co[t])return t;var e=co[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in LI)return Gf[t]=e[n];return t}var MI=fd("animationend"),VI=fd("animationiteration"),jI=fd("animationstart"),FI=fd("transitionend"),UI=new Map,C0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ji(t,e){UI.set(t,e),Ds(e,[t])}for(var Kf=0;Kf<C0.length;Kf++){var Qf=C0[Kf],LP=Qf.toLowerCase(),MP=Qf[0].toUpperCase()+Qf.slice(1);ji(LP,"on"+MP)}ji(MI,"onAnimationEnd");ji(VI,"onAnimationIteration");ji(jI,"onAnimationStart");ji("dblclick","onDoubleClick");ji("focusin","onFocus");ji("focusout","onBlur");ji(FI,"onTransitionEnd");bo("onMouseEnter",["mouseout","mouseover"]);bo("onMouseLeave",["mouseout","mouseover"]);bo("onPointerEnter",["pointerout","pointerover"]);bo("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function k0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LA(r,e,void 0,t),t.currentTarget=null}function BI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;k0(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;k0(i,a,c),s=l}}}if(ah)throw t=Xp,ah=!1,Xp=null,t}function je(t,e){var n=e[am];n===void 0&&(n=e[am]=new Set);var r=t+"__bubble";n.has(r)||(zI(e,t,2,!1),n.add(r))}function Yf(t,e,n){var r=0;e&&(r|=4),zI(n,t,r,e)}var gc="_reactListening"+Math.random().toString(36).slice(2);function Ol(t){if(!t[gc]){t[gc]=!0,QT.forEach(function(n){n!=="selectionchange"&&(VP.has(n)||Yf(n,!1,t),Yf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gc]||(e[gc]=!0,Yf("selectionchange",!1,e))}}function zI(t,e,n,r){switch(CI(e)){case 1:var i=XA;break;case 4:i=JA;break;default:i=bg}n=i.bind(null,e,n,t),i=void 0,!Yp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=rs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}hI(function(){var c=s,h=Rg(n),f=[];e:{var m=UI.get(t);if(m!==void 0){var w=Og,E=t;switch(t){case"keypress":if(Fc(n)===0)break e;case"keydown":case"keyup":w=fP;break;case"focusin":E="focus",w=$f;break;case"focusout":E="blur",w=$f;break;case"beforeblur":case"afterblur":w=$f;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=p0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=tP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=gP;break;case MI:case VI:case jI:w=iP;break;case FI:w=_P;break;case"scroll":w=ZA;break;case"wheel":w=wP;break;case"copy":case"cut":case"paste":w=oP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=g0}var A=(e&4)!==0,N=!A&&t==="scroll",I=A?m!==null?m+"Capture":null:m;A=[];for(var T=c,k;T!==null;){k=T;var O=k.stateNode;if(k.tag===5&&O!==null&&(k=O,I!==null&&(O=Rl(T,I),O!=null&&A.push(Ll(T,O,k)))),N)break;T=T.return}0<A.length&&(m=new w(m,E,null,n,h),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==Kp&&(E=n.relatedTarget||n.fromElement)&&(rs(E)||E[Dr]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(E=n.relatedTarget||n.toElement,w=c,E=E?rs(E):null,E!==null&&(N=Os(E),E!==N||E.tag!==5&&E.tag!==6)&&(E=null)):(w=null,E=c),w!==E)){if(A=p0,O="onMouseLeave",I="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(A=g0,O="onPointerLeave",I="onPointerEnter",T="pointer"),N=w==null?m:ho(w),k=E==null?m:ho(E),m=new A(O,T+"leave",w,n,h),m.target=N,m.relatedTarget=k,O=null,rs(h)===c&&(A=new A(I,T+"enter",E,n,h),A.target=k,A.relatedTarget=N,O=A),N=O,w&&E)t:{for(A=w,I=E,T=0,k=A;k;k=Js(k))T++;for(k=0,O=I;O;O=Js(O))k++;for(;0<T-k;)A=Js(A),T--;for(;0<k-T;)I=Js(I),k--;for(;T--;){if(A===I||I!==null&&A===I.alternate)break t;A=Js(A),I=Js(I)}A=null}else A=null;w!==null&&x0(f,m,w,A,!1),E!==null&&N!==null&&x0(f,N,E,A,!0)}}e:{if(m=c?ho(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var F=xP;else if(v0(m))if(NI)F=NP;else{F=AP;var M=RP}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=PP);if(F&&(F=F(t,c))){PI(f,F,n,h);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Wp(m,"number",m.value)}switch(M=c?ho(c):window,t){case"focusin":(v0(M)||M.contentEditable==="true")&&(uo=M,tm=c,cl=null);break;case"focusout":cl=tm=uo=null;break;case"mousedown":nm=!0;break;case"contextmenu":case"mouseup":case"dragend":nm=!1,S0(f,n,h);break;case"selectionchange":if(OP)break;case"keydown":case"keyup":S0(f,n,h)}var C;if(Mg)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else lo?RI(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(xI&&n.locale!=="ko"&&(lo||v!=="onCompositionStart"?v==="onCompositionEnd"&&lo&&(C=kI()):(ui=h,Dg="value"in ui?ui.value:ui.textContent,lo=!0)),M=dh(c,v),0<M.length&&(v=new m0(v,t,null,n,h),f.push({event:v,listeners:M}),C?v.data=C:(C=AI(n),C!==null&&(v.data=C)))),(C=TP?IP(t,n):SP(t,n))&&(c=dh(c,"onBeforeInput"),0<c.length&&(h=new m0("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=C))}BI(f,e)})}function Ll(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Rl(t,n),s!=null&&r.unshift(Ll(t,s,i)),s=Rl(t,e),s!=null&&r.push(Ll(t,s,i))),t=t.return}return r}function Js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function x0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Rl(n,s),l!=null&&o.unshift(Ll(n,l,a))):i||(l=Rl(n,s),l!=null&&o.push(Ll(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jP=/\r\n?/g,FP=/\u0000|\uFFFD/g;function R0(t){return(typeof t=="string"?t:""+t).replace(jP,`
`).replace(FP,"")}function yc(t,e,n){if(e=R0(e),R0(t)!==e&&n)throw Error(B(425))}function fh(){}var rm=null,im=null;function sm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var om=typeof setTimeout=="function"?setTimeout:void 0,UP=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,BP=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(t){return A0.resolve(null).then(t).catch(zP)}:om;function zP(t){setTimeout(function(){throw t})}function Jf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Nl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Nl(e)}function yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function P0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var sa=Math.random().toString(36).slice(2),er="__reactFiber$"+sa,Ml="__reactProps$"+sa,Dr="__reactContainer$"+sa,am="__reactEvents$"+sa,WP="__reactListeners$"+sa,$P="__reactHandles$"+sa;function rs(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dr]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=P0(t);t!==null;){if(n=t[er])return n;t=P0(t)}return e}t=n,n=t.parentNode}return null}function gu(t){return t=t[er]||t[Dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ho(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function pd(t){return t[Ml]||null}var lm=[],fo=-1;function Fi(t){return{current:t}}function Ue(t){0>fo||(t.current=lm[fo],lm[fo]=null,fo--)}function Me(t,e){fo++,lm[fo]=t.current,t.current=e}var Ai={},Wt=Fi(Ai),rn=Fi(!1),gs=Ai;function Do(t,e){var n=t.type.contextTypes;if(!n)return Ai;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function sn(t){return t=t.childContextTypes,t!=null}function ph(){Ue(rn),Ue(Wt)}function N0(t,e,n){if(Wt.current!==Ai)throw Error(B(168));Me(Wt,e),Me(rn,n)}function WI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,RA(t)||"Unknown",i));return Qe({},n,r)}function mh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ai,gs=Wt.current,Me(Wt,t),Me(rn,rn.current),!0}function b0(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=WI(t,e,gs),r.__reactInternalMemoizedMergedChildContext=t,Ue(rn),Ue(Wt),Me(Wt,t)):Ue(rn),Me(rn,n)}var _r=null,md=!1,Zf=!1;function $I(t){_r===null?_r=[t]:_r.push(t)}function HP(t){md=!0,$I(t)}function Ui(){if(!Zf&&_r!==null){Zf=!0;var t=0,e=ke;try{var n=_r;for(ke=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_r=null,md=!1}catch(i){throw _r!==null&&(_r=_r.slice(t+1)),mI(Ag,Ui),i}finally{ke=e,Zf=!1}}return null}var po=[],mo=0,gh=null,yh=0,En=[],Tn=0,ys=null,Er=1,Tr="";function Zi(t,e){po[mo++]=yh,po[mo++]=gh,gh=t,yh=e}function HI(t,e,n){En[Tn++]=Er,En[Tn++]=Tr,En[Tn++]=ys,ys=t;var r=Er;t=Tr;var i=32-$n(r)-1;r&=~(1<<i),n+=1;var s=32-$n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Er=1<<32-$n(e)+i|n<<i|r,Tr=s+t}else Er=1<<s|n<<i|r,Tr=t}function jg(t){t.return!==null&&(Zi(t,1),HI(t,1,0))}function Fg(t){for(;t===gh;)gh=po[--mo],po[mo]=null,yh=po[--mo],po[mo]=null;for(;t===ys;)ys=En[--Tn],En[Tn]=null,Tr=En[--Tn],En[Tn]=null,Er=En[--Tn],En[Tn]=null}var mn=null,fn=null,Be=!1,Un=null;function qI(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function D0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,fn=yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ys!==null?{id:Er,overflow:Tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,fn=null,!0):!1;default:return!1}}function um(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cm(t){if(Be){var e=fn;if(e){var n=e;if(!D0(t,e)){if(um(t))throw Error(B(418));e=yi(n.nextSibling);var r=mn;e&&D0(t,e)?qI(r,n):(t.flags=t.flags&-4097|2,Be=!1,mn=t)}}else{if(um(t))throw Error(B(418));t.flags=t.flags&-4097|2,Be=!1,mn=t}}}function O0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function _c(t){if(t!==mn)return!1;if(!Be)return O0(t),Be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sm(t.type,t.memoizedProps)),e&&(e=fn)){if(um(t))throw GI(),Error(B(418));for(;e;)qI(t,e),e=yi(e.nextSibling)}if(O0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=mn?yi(t.stateNode.nextSibling):null;return!0}function GI(){for(var t=fn;t;)t=yi(t.nextSibling)}function Oo(){fn=mn=null,Be=!1}function Ug(t){Un===null?Un=[t]:Un.push(t)}var qP=Wr.ReactCurrentBatchConfig;function Ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function vc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function L0(t){var e=t._init;return e(t._payload)}function KI(t){function e(I,T){if(t){var k=I.deletions;k===null?(I.deletions=[T],I.flags|=16):k.push(T)}}function n(I,T){if(!t)return null;for(;T!==null;)e(I,T),T=T.sibling;return null}function r(I,T){for(I=new Map;T!==null;)T.key!==null?I.set(T.key,T):I.set(T.index,T),T=T.sibling;return I}function i(I,T){return I=Ei(I,T),I.index=0,I.sibling=null,I}function s(I,T,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<T?(I.flags|=2,T):k):(I.flags|=2,T)):(I.flags|=1048576,T)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,T,k,O){return T===null||T.tag!==6?(T=op(k,I.mode,O),T.return=I,T):(T=i(T,k),T.return=I,T)}function l(I,T,k,O){var F=k.type;return F===ao?h(I,T,k.props.children,O,k.key):T!==null&&(T.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ni&&L0(F)===T.type)?(O=i(T,k.props),O.ref=Ua(I,T,k),O.return=I,O):(O=qc(k.type,k.key,k.props,null,I.mode,O),O.ref=Ua(I,T,k),O.return=I,O)}function c(I,T,k,O){return T===null||T.tag!==4||T.stateNode.containerInfo!==k.containerInfo||T.stateNode.implementation!==k.implementation?(T=ap(k,I.mode,O),T.return=I,T):(T=i(T,k.children||[]),T.return=I,T)}function h(I,T,k,O,F){return T===null||T.tag!==7?(T=ds(k,I.mode,O,F),T.return=I,T):(T=i(T,k),T.return=I,T)}function f(I,T,k){if(typeof T=="string"&&T!==""||typeof T=="number")return T=op(""+T,I.mode,k),T.return=I,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case lc:return k=qc(T.type,T.key,T.props,null,I.mode,k),k.ref=Ua(I,null,T),k.return=I,k;case oo:return T=ap(T,I.mode,k),T.return=I,T;case ni:var O=T._init;return f(I,O(T._payload),k)}if(Xa(T)||La(T))return T=ds(T,I.mode,k,null),T.return=I,T;vc(I,T)}return null}function m(I,T,k,O){var F=T!==null?T.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return F!==null?null:a(I,T,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case lc:return k.key===F?l(I,T,k,O):null;case oo:return k.key===F?c(I,T,k,O):null;case ni:return F=k._init,m(I,T,F(k._payload),O)}if(Xa(k)||La(k))return F!==null?null:h(I,T,k,O,null);vc(I,k)}return null}function w(I,T,k,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(k)||null,a(T,I,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case lc:return I=I.get(O.key===null?k:O.key)||null,l(T,I,O,F);case oo:return I=I.get(O.key===null?k:O.key)||null,c(T,I,O,F);case ni:var M=O._init;return w(I,T,k,M(O._payload),F)}if(Xa(O)||La(O))return I=I.get(k)||null,h(T,I,O,F,null);vc(T,O)}return null}function E(I,T,k,O){for(var F=null,M=null,C=T,v=T=0,S=null;C!==null&&v<k.length;v++){C.index>v?(S=C,C=null):S=C.sibling;var x=m(I,C,k[v],O);if(x===null){C===null&&(C=S);break}t&&C&&x.alternate===null&&e(I,C),T=s(x,T,v),M===null?F=x:M.sibling=x,M=x,C=S}if(v===k.length)return n(I,C),Be&&Zi(I,v),F;if(C===null){for(;v<k.length;v++)C=f(I,k[v],O),C!==null&&(T=s(C,T,v),M===null?F=C:M.sibling=C,M=C);return Be&&Zi(I,v),F}for(C=r(I,C);v<k.length;v++)S=w(C,I,v,k[v],O),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?v:S.key),T=s(S,T,v),M===null?F=S:M.sibling=S,M=S);return t&&C.forEach(function(P){return e(I,P)}),Be&&Zi(I,v),F}function A(I,T,k,O){var F=La(k);if(typeof F!="function")throw Error(B(150));if(k=F.call(k),k==null)throw Error(B(151));for(var M=F=null,C=T,v=T=0,S=null,x=k.next();C!==null&&!x.done;v++,x=k.next()){C.index>v?(S=C,C=null):S=C.sibling;var P=m(I,C,x.value,O);if(P===null){C===null&&(C=S);break}t&&C&&P.alternate===null&&e(I,C),T=s(P,T,v),M===null?F=P:M.sibling=P,M=P,C=S}if(x.done)return n(I,C),Be&&Zi(I,v),F;if(C===null){for(;!x.done;v++,x=k.next())x=f(I,x.value,O),x!==null&&(T=s(x,T,v),M===null?F=x:M.sibling=x,M=x);return Be&&Zi(I,v),F}for(C=r(I,C);!x.done;v++,x=k.next())x=w(C,I,v,x.value,O),x!==null&&(t&&x.alternate!==null&&C.delete(x.key===null?v:x.key),T=s(x,T,v),M===null?F=x:M.sibling=x,M=x);return t&&C.forEach(function(R){return e(I,R)}),Be&&Zi(I,v),F}function N(I,T,k,O){if(typeof k=="object"&&k!==null&&k.type===ao&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case lc:e:{for(var F=k.key,M=T;M!==null;){if(M.key===F){if(F=k.type,F===ao){if(M.tag===7){n(I,M.sibling),T=i(M,k.props.children),T.return=I,I=T;break e}}else if(M.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ni&&L0(F)===M.type){n(I,M.sibling),T=i(M,k.props),T.ref=Ua(I,M,k),T.return=I,I=T;break e}n(I,M);break}else e(I,M);M=M.sibling}k.type===ao?(T=ds(k.props.children,I.mode,O,k.key),T.return=I,I=T):(O=qc(k.type,k.key,k.props,null,I.mode,O),O.ref=Ua(I,T,k),O.return=I,I=O)}return o(I);case oo:e:{for(M=k.key;T!==null;){if(T.key===M)if(T.tag===4&&T.stateNode.containerInfo===k.containerInfo&&T.stateNode.implementation===k.implementation){n(I,T.sibling),T=i(T,k.children||[]),T.return=I,I=T;break e}else{n(I,T);break}else e(I,T);T=T.sibling}T=ap(k,I.mode,O),T.return=I,I=T}return o(I);case ni:return M=k._init,N(I,T,M(k._payload),O)}if(Xa(k))return E(I,T,k,O);if(La(k))return A(I,T,k,O);vc(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,T!==null&&T.tag===6?(n(I,T.sibling),T=i(T,k),T.return=I,I=T):(n(I,T),T=op(k,I.mode,O),T.return=I,I=T),o(I)):n(I,T)}return N}var Lo=KI(!0),QI=KI(!1),_h=Fi(null),vh=null,go=null,Bg=null;function zg(){Bg=go=vh=null}function Wg(t){var e=_h.current;Ue(_h),t._currentValue=e}function hm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function So(t,e){vh=t,Bg=go=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(Bg!==t)if(t={context:t,memoizedValue:e,next:null},go===null){if(vh===null)throw Error(B(308));go=t,vh.dependencies={lanes:0,firstContext:t}}else go=go.next=t;return e}var is=null;function $g(t){is===null?is=[t]:is.push(t)}function YI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$g(e)):(n.next=i.next,i.next=n),e.interleaved=n,Or(t,r)}function Or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ri=!1;function Hg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function XI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _i(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Or(t,n)}return i=r.interleaved,i===null?(e.next=e,$g(r)):(e.next=i.next,i.next=e),r.interleaved=e,Or(t,n)}function Uc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pg(t,n)}}function M0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wh(t,e,n,r){var i=t.updateQueue;ri=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,A=a;switch(m=e,w=n,A.tag){case 1:if(E=A.payload,typeof E=="function"){f=E.call(w,f,m);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=A.payload,m=typeof E=="function"?E.call(w,f,m):E,m==null)break e;f=Qe({},f,m);break e;case 2:ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=w,l=f):h=h.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vs|=o,t.lanes=o,t.memoizedState=f}}function V0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var yu={},rr=Fi(yu),Vl=Fi(yu),jl=Fi(yu);function ss(t){if(t===yu)throw Error(B(174));return t}function qg(t,e){switch(Me(jl,e),Me(Vl,t),Me(rr,yu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hp(e,t)}Ue(rr),Me(rr,e)}function Mo(){Ue(rr),Ue(Vl),Ue(jl)}function JI(t){ss(jl.current);var e=ss(rr.current),n=Hp(e,t.type);e!==n&&(Me(Vl,t),Me(rr,n))}function Gg(t){Vl.current===t&&(Ue(rr),Ue(Vl))}var He=Fi(0);function Eh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ep=[];function Kg(){for(var t=0;t<ep.length;t++)ep[t]._workInProgressVersionPrimary=null;ep.length=0}var Bc=Wr.ReactCurrentDispatcher,tp=Wr.ReactCurrentBatchConfig,_s=0,Ke=null,ut=null,gt=null,Th=!1,hl=!1,Fl=0,GP=0;function Mt(){throw Error(B(321))}function Qg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Yg(t,e,n,r,i,s){if(_s=s,Ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bc.current=t===null||t.memoizedState===null?XP:JP,t=n(r,i),hl){s=0;do{if(hl=!1,Fl=0,25<=s)throw Error(B(301));s+=1,gt=ut=null,e.updateQueue=null,Bc.current=ZP,t=n(r,i)}while(hl)}if(Bc.current=Ih,e=ut!==null&&ut.next!==null,_s=0,gt=ut=Ke=null,Th=!1,e)throw Error(B(300));return t}function Xg(){var t=Fl!==0;return Fl=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ke.memoizedState=gt=t:gt=gt.next=t,gt}function An(){if(ut===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=gt===null?Ke.memoizedState:gt.next;if(e!==null)gt=e,ut=t;else{if(t===null)throw Error(B(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},gt===null?Ke.memoizedState=gt=t:gt=gt.next=t}return gt}function Ul(t,e){return typeof e=="function"?e(t):e}function np(t){var e=An(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((_s&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ke.lanes|=h,vs|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Kn(r,e.memoizedState)||(tn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ke.lanes|=s,vs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rp(t){var e=An(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ZI(){}function eS(t,e){var n=Ke,r=An(),i=e(),s=!Kn(r.memoizedState,i);if(s&&(r.memoizedState=i,tn=!0),r=r.queue,Jg(rS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,Bl(9,nS.bind(null,n,r,i,e),void 0,null),vt===null)throw Error(B(349));_s&30||tS(n,e,i)}return i}function tS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nS(t,e,n,r){e.value=n,e.getSnapshot=r,iS(e)&&sS(t)}function rS(t,e,n){return n(function(){iS(e)&&sS(t)})}function iS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function sS(t){var e=Or(t,1);e!==null&&Hn(e,t,1,-1)}function j0(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ul,lastRenderedState:t},e.queue=t,t=t.dispatch=YP.bind(null,Ke,t),[e.memoizedState,t]}function Bl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function oS(){return An().memoizedState}function zc(t,e,n,r){var i=Zn();Ke.flags|=t,i.memoizedState=Bl(1|e,n,void 0,r===void 0?null:r)}function gd(t,e,n,r){var i=An();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&Qg(r,o.deps)){i.memoizedState=Bl(e,n,s,r);return}}Ke.flags|=t,i.memoizedState=Bl(1|e,n,s,r)}function F0(t,e){return zc(8390656,8,t,e)}function Jg(t,e){return gd(2048,8,t,e)}function aS(t,e){return gd(4,2,t,e)}function lS(t,e){return gd(4,4,t,e)}function uS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cS(t,e,n){return n=n!=null?n.concat([t]):null,gd(4,4,uS.bind(null,e,t),n)}function Zg(){}function hS(t,e){var n=An();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dS(t,e){var n=An();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fS(t,e,n){return _s&21?(Kn(n,e)||(n=_I(),Ke.lanes|=n,vs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function KP(t,e){var n=ke;ke=n!==0&&4>n?n:4,t(!0);var r=tp.transition;tp.transition={};try{t(!1),e()}finally{ke=n,tp.transition=r}}function pS(){return An().memoizedState}function QP(t,e,n){var r=wi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mS(t))gS(e,n);else if(n=YI(t,e,n,r),n!==null){var i=Kt();Hn(n,t,r,i),yS(n,e,r)}}function YP(t,e,n){var r=wi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mS(t))gS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(i.next=i,$g(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=YI(t,e,i,r),n!==null&&(i=Kt(),Hn(n,t,r,i),yS(n,e,r))}}function mS(t){var e=t.alternate;return t===Ke||e!==null&&e===Ke}function gS(t,e){hl=Th=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pg(t,n)}}var Ih={readContext:Rn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},XP={readContext:Rn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:F0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zc(4194308,4,uS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zc(4194308,4,t,e)},useInsertionEffect:function(t,e){return zc(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QP.bind(null,Ke,t),[r.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:j0,useDebugValue:Zg,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=j0(!1),e=t[0];return t=KP.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ke,i=Zn();if(Be){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),vt===null)throw Error(B(349));_s&30||tS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,F0(rS.bind(null,r,s,t),[t]),r.flags|=2048,Bl(9,nS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=vt.identifierPrefix;if(Be){var n=Tr,r=Er;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JP={readContext:Rn,useCallback:hS,useContext:Rn,useEffect:Jg,useImperativeHandle:cS,useInsertionEffect:aS,useLayoutEffect:lS,useMemo:dS,useReducer:np,useRef:oS,useState:function(){return np(Ul)},useDebugValue:Zg,useDeferredValue:function(t){var e=An();return fS(e,ut.memoizedState,t)},useTransition:function(){var t=np(Ul)[0],e=An().memoizedState;return[t,e]},useMutableSource:ZI,useSyncExternalStore:eS,useId:pS,unstable_isNewReconciler:!1},ZP={readContext:Rn,useCallback:hS,useContext:Rn,useEffect:Jg,useImperativeHandle:cS,useInsertionEffect:aS,useLayoutEffect:lS,useMemo:dS,useReducer:rp,useRef:oS,useState:function(){return rp(Ul)},useDebugValue:Zg,useDeferredValue:function(t){var e=An();return ut===null?e.memoizedState=t:fS(e,ut.memoizedState,t)},useTransition:function(){var t=rp(Ul)[0],e=An().memoizedState;return[t,e]},useMutableSource:ZI,useSyncExternalStore:eS,useId:pS,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=Qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yd={isMounted:function(t){return(t=t._reactInternals)?Os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=wi(t),s=xr(r,i);s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&(Hn(e,t,i,r),Uc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=wi(t),s=xr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&(Hn(e,t,i,r),Uc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),r=wi(t),i=xr(n,r);i.tag=2,e!=null&&(i.callback=e),e=_i(t,i,r),e!==null&&(Hn(e,t,r,n),Uc(e,t,r))}};function U0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Dl(n,r)||!Dl(i,s):!0}function _S(t,e,n){var r=!1,i=Ai,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(i=sn(e)?gs:Wt.current,r=e.contextTypes,s=(r=r!=null)?Do(t,i):Ai),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function B0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yd.enqueueReplaceState(e,e.state,null)}function fm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Hg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rn(s):(s=sn(e)?gs:Wt.current,i.context=Do(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yd.enqueueReplaceState(i,i.state,null),wh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e){try{var n="",r=e;do n+=xA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ip(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eN=typeof WeakMap=="function"?WeakMap:Map;function vS(t,e,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ch||(Ch=!0,Sm=r),pm(t,e)},n}function wS(t,e,n){n=xr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){pm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pm(t,e),typeof r!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function z0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pN.bind(null,t,e,n),e.then(t,t))}function W0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xr(-1,1),e.tag=2,_i(n,e,1))),n.lanes|=1),t)}var tN=Wr.ReactCurrentOwner,tn=!1;function qt(t,e,n,r){e.child=t===null?QI(e,null,n,r):Lo(e,t.child,n,r)}function H0(t,e,n,r,i){n=n.render;var s=e.ref;return So(e,i),r=Yg(t,e,n,r,s,i),n=Xg(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Be&&n&&jg(e),e.flags|=1,qt(t,e,r,i),e.child)}function q0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ay(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ES(t,e,s,r,i)):(t=qc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Dl,n(o,r)&&t.ref===e.ref)return Lr(t,e,i)}return e.flags|=1,t=Ei(s,r),t.ref=e.ref,t.return=e,e.child=t}function ES(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Dl(s,r)&&t.ref===e.ref)if(tn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,Lr(t,e,i)}return mm(t,e,n,r,i)}function TS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(_o,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(_o,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(_o,dn),dn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(_o,dn),dn|=r;return qt(t,e,i,n),e.child}function IS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mm(t,e,n,r,i){var s=sn(n)?gs:Wt.current;return s=Do(e,s),So(e,i),n=Yg(t,e,n,r,s,i),r=Xg(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Be&&r&&jg(e),e.flags|=1,qt(t,e,n,i),e.child)}function G0(t,e,n,r,i){if(sn(n)){var s=!0;mh(e)}else s=!1;if(So(e,i),e.stateNode===null)Wc(t,e),_S(e,n,r),fm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=sn(n)?gs:Wt.current,c=Do(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&B0(e,o,r,c),ri=!1;var m=e.memoizedState;o.state=m,wh(e,r,o,i),l=e.memoizedState,a!==r||m!==l||rn.current||ri?(typeof h=="function"&&(dm(e,n,h,r),l=e.memoizedState),(a=ri||U0(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,XI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=sn(n)?gs:Wt.current,l=Do(e,l));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&B0(e,o,r,l),ri=!1,m=e.memoizedState,o.state=m,wh(e,r,o,i);var E=e.memoizedState;a!==f||m!==E||rn.current||ri?(typeof w=="function"&&(dm(e,n,w,r),E=e.memoizedState),(c=ri||U0(e,n,c,r,m,E,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return gm(t,e,n,r,s,i)}function gm(t,e,n,r,i,s){IS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&b0(e,n,!1),Lr(t,e,s);r=e.stateNode,tN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Lo(e,t.child,null,s),e.child=Lo(e,null,a,s)):qt(t,e,a,s),e.memoizedState=r.state,i&&b0(e,n,!0),e.child}function SS(t){var e=t.stateNode;e.pendingContext?N0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&N0(t,e.context,!1),qg(t,e.containerInfo)}function K0(t,e,n,r,i){return Oo(),Ug(i),e.flags|=256,qt(t,e,n,r),e.child}var ym={dehydrated:null,treeContext:null,retryLane:0};function _m(t){return{baseLanes:t,cachePool:null,transitions:null}}function CS(t,e,n){var r=e.pendingProps,i=He.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(He,i&1),t===null)return cm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wd(o,r,0,null),t=ds(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_m(n),e.memoizedState=ym,t):ey(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return nN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ei(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ei(a,s):(s=ds(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_m(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ym,r}return s=t.child,t=s.sibling,r=Ei(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ey(t,e){return e=wd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wc(t,e,n,r){return r!==null&&Ug(r),Lo(e,t.child,null,n),t=ey(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ip(Error(B(422))),wc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wd({mode:"visible",children:r.children},i,0,null),s=ds(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Lo(e,t.child,null,o),e.child.memoizedState=_m(o),e.memoizedState=ym,s);if(!(e.mode&1))return wc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=ip(s,r,void 0),wc(t,e,o,r)}if(a=(o&t.childLanes)!==0,tn||a){if(r=vt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Or(t,i),Hn(r,t,i,-1))}return oy(),r=ip(Error(B(421))),wc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,fn=yi(i.nextSibling),mn=e,Be=!0,Un=null,t!==null&&(En[Tn++]=Er,En[Tn++]=Tr,En[Tn++]=ys,Er=t.id,Tr=t.overflow,ys=e),e=ey(e,r.children),e.flags|=4096,e)}function Q0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hm(t.return,e,n)}function sp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qt(t,e,r.children,n),r=He.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Q0(t,n,e);else if(t.tag===19)Q0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(He,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Eh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),sp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Eh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}sp(e,!0,n,null,s);break;case"together":sp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Ei(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ei(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rN(t,e,n){switch(e.tag){case 3:SS(e),Oo();break;case 5:JI(e);break;case 1:sn(e.type)&&mh(e);break;case 4:qg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(_h,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(He,He.current&1),e.flags|=128,null):n&e.child.childLanes?CS(t,e,n):(Me(He,He.current&1),t=Lr(t,e,n),t!==null?t.sibling:null);Me(He,He.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(He,He.current),r)break;return null;case 22:case 23:return e.lanes=0,TS(t,e,n)}return Lr(t,e,n)}var xS,vm,RS,AS;xS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vm=function(){};RS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ss(rr.current);var s=null;switch(n){case"input":i=Bp(t,i),r=Bp(t,r),s=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),s=[];break;case"textarea":i=$p(t,i),r=$p(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fh)}qp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(kl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(kl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&je("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};AS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ba(t,e){if(!Be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iN(t,e,n){var r=e.pendingProps;switch(Fg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return sn(e.type)&&ph(),Vt(e),null;case 3:return r=e.stateNode,Mo(),Ue(rn),Ue(Wt),Kg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_c(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(xm(Un),Un=null))),vm(t,e),Vt(e),null;case 5:Gg(e);var i=ss(jl.current);if(n=e.type,t!==null&&e.stateNode!=null)RS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Vt(e),null}if(t=ss(rr.current),_c(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[er]=e,r[Ml]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<Za.length;i++)je(Za[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":i0(r,s),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},je("invalid",r);break;case"textarea":o0(r,s),je("invalid",r)}qp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yc(r.textContent,a,t),i=["children",""+a]):kl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&je("scroll",r)}switch(n){case"input":uc(r),s0(r,s,!0);break;case"textarea":uc(r),a0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[er]=e,t[Ml]=r,xS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gp(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Za.length;i++)je(Za[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":i0(t,r),i=Bp(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),je("invalid",t);break;case"textarea":o0(t,r),i=$p(t,r),je("invalid",t);break;default:i=r}qp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?oI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&iI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xl(t,l):typeof l=="number"&&xl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(kl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&je("scroll",t):l!=null&&Sg(t,s,l,o))}switch(n){case"input":uc(t),s0(t,r,!1);break;case"textarea":uc(t),a0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ri(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wo(t,!!r.multiple,s,!1):r.defaultValue!=null&&wo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)AS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ss(jl.current),ss(rr.current),_c(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(s=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:yc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return Vt(e),null;case 13:if(Ue(He),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Be&&fn!==null&&e.mode&1&&!(e.flags&128))GI(),Oo(),e.flags|=98560,s=!1;else if(s=_c(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[er]=e}else Oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Un!==null&&(xm(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||He.current&1?ht===0&&(ht=3):oy())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Mo(),vm(t,e),t===null&&Ol(e.stateNode.containerInfo),Vt(e),null;case 10:return Wg(e.type._context),Vt(e),null;case 17:return sn(e.type)&&ph(),Vt(e),null;case 19:if(Ue(He),s=e.memoizedState,s===null)return Vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ba(s,!1);else{if(ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Eh(t),o!==null){for(e.flags|=128,Ba(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(He,He.current&1|2),e.child}t=t.sibling}s.tail!==null&&tt()>jo&&(e.flags|=128,r=!0,Ba(s,!1),e.lanes=4194304)}else{if(!r)if(t=Eh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ba(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Be)return Vt(e),null}else 2*tt()-s.renderingStartTime>jo&&n!==1073741824&&(e.flags|=128,r=!0,Ba(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tt(),e.sibling=null,n=He.current,Me(He,r?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return sy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function sN(t,e){switch(Fg(e),e.tag){case 1:return sn(e.type)&&ph(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mo(),Ue(rn),Ue(Wt),Kg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gg(e),null;case 13:if(Ue(He),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ue(He),null;case 4:return Mo(),null;case 10:return Wg(e.type._context),null;case 22:case 23:return sy(),null;case 24:return null;default:return null}}var Ec=!1,Ut=!1,oN=typeof WeakSet=="function"?WeakSet:Set,G=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Je(t,e,r)}else n.current=null}function wm(t,e,n){try{n()}catch(r){Je(t,e,r)}}var Y0=!1;function aN(t,e){if(rm=ch,t=OI(),Vg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(im={focusedElem:t,selectionRange:n},ch=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var A=E.memoizedProps,N=E.memoizedState,I=e.stateNode,T=I.getSnapshotBeforeUpdate(e.elementType===e.type?A:jn(e.type,A),N);I.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(O){Je(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return E=Y0,Y0=!1,E}function dl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wm(e,n,s)}i=i.next}while(i!==r)}}function _d(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Em(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function PS(t){var e=t.alternate;e!==null&&(t.alternate=null,PS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[Ml],delete e[am],delete e[WP],delete e[$P])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function NS(t){return t.tag===5||t.tag===3||t.tag===4}function X0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||NS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fh));else if(r!==4&&(t=t.child,t!==null))for(Tm(t,e,n),t=t.sibling;t!==null;)Tm(t,e,n),t=t.sibling}function Im(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Im(t,e,n),t=t.sibling;t!==null;)Im(t,e,n),t=t.sibling}var It=null,Fn=!1;function ei(t,e,n){for(n=n.child;n!==null;)bS(t,e,n),n=n.sibling}function bS(t,e,n){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(cd,n)}catch{}switch(n.tag){case 5:Ut||yo(n,e);case 6:var r=It,i=Fn;It=null,ei(t,e,n),It=r,Fn=i,It!==null&&(Fn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Fn?(t=It,n=n.stateNode,t.nodeType===8?Jf(t.parentNode,n):t.nodeType===1&&Jf(t,n),Nl(t)):Jf(It,n.stateNode));break;case 4:r=It,i=Fn,It=n.stateNode.containerInfo,Fn=!0,ei(t,e,n),It=r,Fn=i;break;case 0:case 11:case 14:case 15:if(!Ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wm(n,e,o),i=i.next}while(i!==r)}ei(t,e,n);break;case 1:if(!Ut&&(yo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Je(n,e,a)}ei(t,e,n);break;case 21:ei(t,e,n);break;case 22:n.mode&1?(Ut=(r=Ut)||n.memoizedState!==null,ei(t,e,n),Ut=r):ei(t,e,n);break;default:ei(t,e,n)}}function J0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oN),e.forEach(function(r){var i=gN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Fn=!1;break e;case 3:It=a.stateNode.containerInfo,Fn=!0;break e;case 4:It=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(It===null)throw Error(B(160));bS(s,o,i),It=null,Fn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Je(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)DS(e,t),e=e.sibling}function DS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mn(e,t),Jn(t),r&4){try{dl(3,t,t.return),_d(3,t)}catch(A){Je(t,t.return,A)}try{dl(5,t,t.return)}catch(A){Je(t,t.return,A)}}break;case 1:Mn(e,t),Jn(t),r&512&&n!==null&&yo(n,n.return);break;case 5:if(Mn(e,t),Jn(t),r&512&&n!==null&&yo(n,n.return),t.flags&32){var i=t.stateNode;try{xl(i,"")}catch(A){Je(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tI(i,s),Gp(a,o);var c=Gp(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?oI(i,f):h==="dangerouslySetInnerHTML"?iI(i,f):h==="children"?xl(i,f):Sg(i,h,f,c)}switch(a){case"input":zp(i,s);break;case"textarea":nI(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?wo(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?wo(i,!!s.multiple,s.defaultValue,!0):wo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ml]=s}catch(A){Je(t,t.return,A)}}break;case 6:if(Mn(e,t),Jn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Je(t,t.return,A)}}break;case 3:if(Mn(e,t),Jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nl(e.containerInfo)}catch(A){Je(t,t.return,A)}break;case 4:Mn(e,t),Jn(t);break;case 13:Mn(e,t),Jn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ry=tt())),r&4&&J0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ut=(c=Ut)||h,Mn(e,t),Ut=c):Mn(e,t),Jn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(G=t,h=t.child;h!==null;){for(f=G=h;G!==null;){switch(m=G,w=m.child,m.tag){case 0:case 11:case 14:case 15:dl(4,m,m.return);break;case 1:yo(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(A){Je(r,n,A)}}break;case 5:yo(m,m.return);break;case 22:if(m.memoizedState!==null){ew(f);continue}}w!==null?(w.return=m,G=w):ew(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sI("display",o))}catch(A){Je(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){Je(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mn(e,t),Jn(t),r&4&&J0(t);break;case 21:break;default:Mn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(NS(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xl(i,""),r.flags&=-33);var s=X0(t);Im(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=X0(t);Tm(t,a,o);break;default:throw Error(B(161))}}catch(l){Je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lN(t,e,n){G=t,OS(t)}function OS(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ec;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ut;a=Ec;var c=Ut;if(Ec=o,(Ut=l)&&!c)for(G=i;G!==null;)o=G,l=o.child,o.tag===22&&o.memoizedState!==null?tw(i):l!==null?(l.return=o,G=l):tw(i);for(;s!==null;)G=s,OS(s),s=s.sibling;G=i,Ec=a,Ut=c}Z0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):Z0(t)}}function Z0(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ut||_d(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&V0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}V0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Nl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ut||e.flags&512&&Em(e)}catch(m){Je(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function ew(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function tw(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_d(4,e)}catch(l){Je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Je(e,i,l)}}var s=e.return;try{Em(e)}catch(l){Je(e,s,l)}break;case 5:var o=e.return;try{Em(e)}catch(l){Je(e,o,l)}}}catch(l){Je(e,e.return,l)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var uN=Math.ceil,Sh=Wr.ReactCurrentDispatcher,ty=Wr.ReactCurrentOwner,Cn=Wr.ReactCurrentBatchConfig,_e=0,vt=null,st=null,xt=0,dn=0,_o=Fi(0),ht=0,zl=null,vs=0,vd=0,ny=0,fl=null,Zt=null,ry=0,jo=1/0,gr=null,Ch=!1,Sm=null,vi=null,Tc=!1,ci=null,kh=0,pl=0,Cm=null,$c=-1,Hc=0;function Kt(){return _e&6?tt():$c!==-1?$c:$c=tt()}function wi(t){return t.mode&1?_e&2&&xt!==0?xt&-xt:qP.transition!==null?(Hc===0&&(Hc=_I()),Hc):(t=ke,t!==0||(t=window.event,t=t===void 0?16:CI(t.type)),t):1}function Hn(t,e,n,r){if(50<pl)throw pl=0,Cm=null,Error(B(185));pu(t,n,r),(!(_e&2)||t!==vt)&&(t===vt&&(!(_e&2)&&(vd|=n),ht===4&&si(t,xt)),on(t,r),n===1&&_e===0&&!(e.mode&1)&&(jo=tt()+500,md&&Ui()))}function on(t,e){var n=t.callbackNode;qA(t,e);var r=uh(t,t===vt?xt:0);if(r===0)n!==null&&c0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&c0(n),e===1)t.tag===0?HP(nw.bind(null,t)):$I(nw.bind(null,t)),BP(function(){!(_e&6)&&Ui()}),n=null;else{switch(vI(r)){case 1:n=Ag;break;case 4:n=gI;break;case 16:n=lh;break;case 536870912:n=yI;break;default:n=lh}n=zS(n,LS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function LS(t,e){if($c=-1,Hc=0,_e&6)throw Error(B(327));var n=t.callbackNode;if(Co()&&t.callbackNode!==n)return null;var r=uh(t,t===vt?xt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xh(t,r);else{e=r;var i=_e;_e|=2;var s=VS();(vt!==t||xt!==e)&&(gr=null,jo=tt()+500,hs(t,e));do try{dN();break}catch(a){MS(t,a)}while(!0);zg(),Sh.current=s,_e=i,st!==null?e=0:(vt=null,xt=0,e=ht)}if(e!==0){if(e===2&&(i=Jp(t),i!==0&&(r=i,e=km(t,i))),e===1)throw n=zl,hs(t,0),si(t,r),on(t,tt()),n;if(e===6)si(t,r);else{if(i=t.current.alternate,!(r&30)&&!cN(i)&&(e=xh(t,r),e===2&&(s=Jp(t),s!==0&&(r=s,e=km(t,s))),e===1))throw n=zl,hs(t,0),si(t,r),on(t,tt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:es(t,Zt,gr);break;case 3:if(si(t,r),(r&130023424)===r&&(e=ry+500-tt(),10<e)){if(uh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=om(es.bind(null,t,Zt,gr),e);break}es(t,Zt,gr);break;case 4:if(si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=tt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uN(r/1960))-r,10<r){t.timeoutHandle=om(es.bind(null,t,Zt,gr),r);break}es(t,Zt,gr);break;case 5:es(t,Zt,gr);break;default:throw Error(B(329))}}}return on(t,tt()),t.callbackNode===n?LS.bind(null,t):null}function km(t,e){var n=fl;return t.current.memoizedState.isDehydrated&&(hs(t,e).flags|=256),t=xh(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&xm(e)),t}function xm(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function cN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function si(t,e){for(e&=~ny,e&=~vd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),r=1<<n;t[n]=-1,e&=~r}}function nw(t){if(_e&6)throw Error(B(327));Co();var e=uh(t,0);if(!(e&1))return on(t,tt()),null;var n=xh(t,e);if(t.tag!==0&&n===2){var r=Jp(t);r!==0&&(e=r,n=km(t,r))}if(n===1)throw n=zl,hs(t,0),si(t,e),on(t,tt()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,Zt,gr),on(t,tt()),null}function iy(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(jo=tt()+500,md&&Ui())}}function ws(t){ci!==null&&ci.tag===0&&!(_e&6)&&Co();var e=_e;_e|=1;var n=Cn.transition,r=ke;try{if(Cn.transition=null,ke=1,t)return t()}finally{ke=r,Cn.transition=n,_e=e,!(_e&6)&&Ui()}}function sy(){dn=_o.current,Ue(_o)}function hs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UP(n)),st!==null)for(n=st.return;n!==null;){var r=n;switch(Fg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ph();break;case 3:Mo(),Ue(rn),Ue(Wt),Kg();break;case 5:Gg(r);break;case 4:Mo();break;case 13:Ue(He);break;case 19:Ue(He);break;case 10:Wg(r.type._context);break;case 22:case 23:sy()}n=n.return}if(vt=t,st=t=Ei(t.current,null),xt=dn=e,ht=0,zl=null,ny=vd=vs=0,Zt=fl=null,is!==null){for(e=0;e<is.length;e++)if(n=is[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}is=null}return t}function MS(t,e){do{var n=st;try{if(zg(),Bc.current=Ih,Th){for(var r=Ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Th=!1}if(_s=0,gt=ut=Ke=null,hl=!1,Fl=0,ty.current=null,n===null||n.return===null){ht=1,zl=e,st=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=W0(o);if(w!==null){w.flags&=-257,$0(w,o,a,s,e),w.mode&1&&z0(s,c,e),e=w,l=c;var E=e.updateQueue;if(E===null){var A=new Set;A.add(l),e.updateQueue=A}else E.add(l);break e}else{if(!(e&1)){z0(s,c,e),oy();break e}l=Error(B(426))}}else if(Be&&a.mode&1){var N=W0(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),$0(N,o,a,s,e),Ug(Vo(l,a));break e}}s=l=Vo(l,a),ht!==4&&(ht=2),fl===null?fl=[s]:fl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=vS(s,l,e);M0(s,I);break e;case 1:a=l;var T=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(vi===null||!vi.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=wS(s,a,e);M0(s,O);break e}}s=s.return}while(s!==null)}FS(n)}catch(F){e=F,st===n&&n!==null&&(st=n=n.return);continue}break}while(!0)}function VS(){var t=Sh.current;return Sh.current=Ih,t===null?Ih:t}function oy(){(ht===0||ht===3||ht===2)&&(ht=4),vt===null||!(vs&268435455)&&!(vd&268435455)||si(vt,xt)}function xh(t,e){var n=_e;_e|=2;var r=VS();(vt!==t||xt!==e)&&(gr=null,hs(t,e));do try{hN();break}catch(i){MS(t,i)}while(!0);if(zg(),_e=n,Sh.current=r,st!==null)throw Error(B(261));return vt=null,xt=0,ht}function hN(){for(;st!==null;)jS(st)}function dN(){for(;st!==null&&!VA();)jS(st)}function jS(t){var e=BS(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?FS(t):st=e,ty.current=null}function FS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sN(n,e),n!==null){n.flags&=32767,st=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ht=6,st=null;return}}else if(n=iN(n,e,dn),n!==null){st=n;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);ht===0&&(ht=5)}function es(t,e,n){var r=ke,i=Cn.transition;try{Cn.transition=null,ke=1,fN(t,e,n,r)}finally{Cn.transition=i,ke=r}return null}function fN(t,e,n,r){do Co();while(ci!==null);if(_e&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GA(t,s),t===vt&&(st=vt=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tc||(Tc=!0,zS(lh,function(){return Co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=ke;ke=1;var a=_e;_e|=4,ty.current=null,aN(t,n),DS(n,t),DP(im),ch=!!rm,im=rm=null,t.current=n,lN(n),jA(),_e=a,ke=o,Cn.transition=s}else t.current=n;if(Tc&&(Tc=!1,ci=t,kh=i),s=t.pendingLanes,s===0&&(vi=null),BA(n.stateNode),on(t,tt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ch)throw Ch=!1,t=Sm,Sm=null,t;return kh&1&&t.tag!==0&&Co(),s=t.pendingLanes,s&1?t===Cm?pl++:(pl=0,Cm=t):pl=0,Ui(),null}function Co(){if(ci!==null){var t=vI(kh),e=Cn.transition,n=ke;try{if(Cn.transition=null,ke=16>t?16:t,ci===null)var r=!1;else{if(t=ci,ci=null,kh=0,_e&6)throw Error(B(331));var i=_e;for(_e|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(G=c;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:dl(8,h,s)}var f=h.child;if(f!==null)f.return=h,G=f;else for(;G!==null;){h=G;var m=h.sibling,w=h.return;if(PS(h),h===c){G=null;break}if(m!==null){m.return=w,G=m;break}G=w}}}var E=s.alternate;if(E!==null){var A=E.child;if(A!==null){E.child=null;do{var N=A.sibling;A.sibling=null,A=N}while(A!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:dl(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,G=I;break e}G=s.return}}var T=t.current;for(G=T;G!==null;){o=G;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,G=k;else e:for(o=T;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_d(9,a)}}catch(F){Je(a,a.return,F)}if(a===o){G=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,G=O;break e}G=a.return}}if(_e=i,Ui(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(cd,t)}catch{}r=!0}return r}finally{ke=n,Cn.transition=e}}return!1}function rw(t,e,n){e=Vo(n,e),e=vS(t,e,1),t=_i(t,e,1),e=Kt(),t!==null&&(pu(t,1,e),on(t,e))}function Je(t,e,n){if(t.tag===3)rw(t,t,n);else for(;e!==null;){if(e.tag===3){rw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vi===null||!vi.has(r))){t=Vo(n,t),t=wS(e,t,1),e=_i(e,t,1),t=Kt(),e!==null&&(pu(e,1,t),on(e,t));break}}e=e.return}}function pN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,vt===t&&(xt&n)===n&&(ht===4||ht===3&&(xt&130023424)===xt&&500>tt()-ry?hs(t,0):ny|=n),on(t,e)}function US(t,e){e===0&&(t.mode&1?(e=dc,dc<<=1,!(dc&130023424)&&(dc=4194304)):e=1);var n=Kt();t=Or(t,e),t!==null&&(pu(t,e,n),on(t,n))}function mN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),US(t,n)}function gN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),US(t,n)}var BS;BS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,rN(t,e,n);tn=!!(t.flags&131072)}else tn=!1,Be&&e.flags&1048576&&HI(e,yh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wc(t,e),t=e.pendingProps;var i=Do(e,Wt.current);So(e,n),i=Yg(null,e,r,t,i,n);var s=Xg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(r)?(s=!0,mh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hg(e),i.updater=yd,e.stateNode=i,i._reactInternals=e,fm(e,r,t,n),e=gm(null,e,r,!0,s,n)):(e.tag=0,Be&&s&&jg(e),qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_N(r),t=jn(r,t),i){case 0:e=mm(null,e,r,t,n);break e;case 1:e=G0(null,e,r,t,n);break e;case 11:e=H0(null,e,r,t,n);break e;case 14:e=q0(null,e,r,jn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),mm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),G0(t,e,r,i,n);case 3:e:{if(SS(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,XI(t,e),wh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vo(Error(B(423)),e),e=K0(t,e,r,n,i);break e}else if(r!==i){i=Vo(Error(B(424)),e),e=K0(t,e,r,n,i);break e}else for(fn=yi(e.stateNode.containerInfo.firstChild),mn=e,Be=!0,Un=null,n=QI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oo(),r===i){e=Lr(t,e,n);break e}qt(t,e,r,n)}e=e.child}return e;case 5:return JI(e),t===null&&cm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,sm(r,i)?o=null:s!==null&&sm(r,s)&&(e.flags|=32),IS(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&cm(e),null;case 13:return CS(t,e,n);case 4:return qg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Lo(e,null,r,n):qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),H0(t,e,r,i,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(_h,r._currentValue),r._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===i.children&&!rn.current){e=Lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=xr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,So(e,n),i=Rn(i),r=r(i),e.flags|=1,qt(t,e,r,n),e.child;case 14:return r=e.type,i=jn(r,e.pendingProps),i=jn(r.type,i),q0(t,e,r,i,n);case 15:return ES(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Wc(t,e),e.tag=1,sn(r)?(t=!0,mh(e)):t=!1,So(e,n),_S(e,r,i),fm(e,r,i,n),gm(null,e,r,!0,t,n);case 19:return kS(t,e,n);case 22:return TS(t,e,n)}throw Error(B(156,e.tag))};function zS(t,e){return mI(t,e)}function yN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new yN(t,e,n,r)}function ay(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _N(t){if(typeof t=="function")return ay(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kg)return 11;if(t===xg)return 14}return 2}function Ei(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ay(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ao:return ds(n.children,i,s,e);case Cg:o=8,i|=8;break;case Vp:return t=In(12,n,e,i|2),t.elementType=Vp,t.lanes=s,t;case jp:return t=In(13,n,e,i),t.elementType=jp,t.lanes=s,t;case Fp:return t=In(19,n,e,i),t.elementType=Fp,t.lanes=s,t;case JT:return wd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case YT:o=10;break e;case XT:o=9;break e;case kg:o=11;break e;case xg:o=14;break e;case ni:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=In(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ds(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function wd(t,e,n,r){return t=In(22,t,r,e),t.elementType=JT,t.lanes=n,t.stateNode={isHidden:!1},t}function op(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function ap(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bf(0),this.expirationTimes=Bf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ly(t,e,n,r,i,s,o,a,l){return t=new vN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hg(s),t}function wN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function WS(t){if(!t)return Ai;t=t._reactInternals;e:{if(Os(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(sn(n))return WI(t,n,e)}return e}function $S(t,e,n,r,i,s,o,a,l){return t=ly(n,r,!0,t,i,s,o,a,l),t.context=WS(null),n=t.current,r=Kt(),i=wi(n),s=xr(r,i),s.callback=e??null,_i(n,s,i),t.current.lanes=i,pu(t,i,r),on(t,r),t}function Ed(t,e,n,r){var i=e.current,s=Kt(),o=wi(i);return n=WS(n),e.context===null?e.context=n:e.pendingContext=n,e=xr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_i(i,e,o),t!==null&&(Hn(t,i,o,s),Uc(t,i,o)),o}function Rh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function iw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function uy(t,e){iw(t,e),(t=t.alternate)&&iw(t,e)}function EN(){return null}var HS=typeof reportError=="function"?reportError:function(t){console.error(t)};function cy(t){this._internalRoot=t}Td.prototype.render=cy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Ed(t,e,null,null)};Td.prototype.unmount=cy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ws(function(){Ed(null,t,null,null)}),e[Dr]=null}};function Td(t){this._internalRoot=t}Td.prototype.unstable_scheduleHydration=function(t){if(t){var e=TI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ii.length&&e!==0&&e<ii[n].priority;n++);ii.splice(n,0,t),n===0&&SI(t)}};function hy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sw(){}function TN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Rh(o);s.call(c)}}var o=$S(e,r,t,0,null,!1,!1,"",sw);return t._reactRootContainer=o,t[Dr]=o.current,Ol(t.nodeType===8?t.parentNode:t),ws(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Rh(l);a.call(c)}}var l=ly(t,0,!1,null,null,!1,!1,"",sw);return t._reactRootContainer=l,t[Dr]=l.current,Ol(t.nodeType===8?t.parentNode:t),ws(function(){Ed(e,l,n,r)}),l}function Sd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Rh(o);a.call(l)}}Ed(e,o,t,i)}else o=TN(n,e,t,i,r);return Rh(o)}wI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ja(e.pendingLanes);n!==0&&(Pg(e,n|1),on(e,tt()),!(_e&6)&&(jo=tt()+500,Ui()))}break;case 13:ws(function(){var r=Or(t,1);if(r!==null){var i=Kt();Hn(r,t,1,i)}}),uy(t,1)}};Ng=function(t){if(t.tag===13){var e=Or(t,134217728);if(e!==null){var n=Kt();Hn(e,t,134217728,n)}uy(t,134217728)}};EI=function(t){if(t.tag===13){var e=wi(t),n=Or(t,e);if(n!==null){var r=Kt();Hn(n,t,e,r)}uy(t,e)}};TI=function(){return ke};II=function(t,e){var n=ke;try{return ke=t,e()}finally{ke=n}};Qp=function(t,e,n){switch(e){case"input":if(zp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=pd(r);if(!i)throw Error(B(90));eI(r),zp(r,i)}}}break;case"textarea":nI(t,n);break;case"select":e=n.value,e!=null&&wo(t,!!n.multiple,e,!1)}};uI=iy;cI=ws;var IN={usingClientEntryPoint:!1,Events:[gu,ho,pd,aI,lI,iy]},za={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SN={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fI(t),t===null?null:t.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||EN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{cd=Ic.inject(SN),nr=Ic}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IN;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hy(e))throw Error(B(200));return wN(t,e,null,n)};yn.createRoot=function(t,e){if(!hy(t))throw Error(B(299));var n=!1,r="",i=HS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ly(t,1,!1,null,null,n,!1,r,i),t[Dr]=e.current,Ol(t.nodeType===8?t.parentNode:t),new cy(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=fI(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return ws(t)};yn.hydrate=function(t,e,n){if(!Id(e))throw Error(B(200));return Sd(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!hy(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=HS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$S(e,null,t,1,n??null,i,!1,s,o),t[Dr]=e.current,Ol(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Td(e)};yn.render=function(t,e,n){if(!Id(e))throw Error(B(200));return Sd(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Id(t))throw Error(B(40));return t._reactRootContainer?(ws(function(){Sd(null,null,t,!1,function(){t._reactRootContainer=null,t[Dr]=null})}),!0):!1};yn.unstable_batchedUpdates=iy;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Id(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Sd(t,e,n,!1,r)};yn.version="18.3.1-next-f1338f8080-20240426";function qS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qS)}catch(t){console.error(t)}}qS(),qT.exports=yn;var CN=qT.exports,ow=CN;Lp.createRoot=ow.createRoot,Lp.hydrateRoot=ow.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wl(){return Wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wl.apply(this,arguments)}var hi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hi||(hi={}));const aw="popstate";function kN(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Ls(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Rm("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:GS(s))}function r(i,s){Cd(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return RN(e,n,r,t)}function at(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Cd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xN(){return Math.random().toString(36).substr(2,8)}function lw(t,e){return{usr:t.state,key:t.key,idx:e}}function Rm(t,e,n,r){return n===void 0&&(n=null),Wl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ls(e):e,{state:n,key:e&&e.key||r||xN()})}function GS(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ls(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function RN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=hi.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Wl({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=hi.Pop;let N=h(),I=N==null?null:N-c;c=N,l&&l({action:a,location:A.location,delta:I})}function m(N,I){a=hi.Push;let T=Rm(A.location,N,I);n&&n(T,N),c=h()+1;let k=lw(T,c),O=A.createHref(T);try{o.pushState(k,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(O)}s&&l&&l({action:a,location:A.location,delta:1})}function w(N,I){a=hi.Replace;let T=Rm(A.location,N,I);n&&n(T,N),c=h();let k=lw(T,c),O=A.createHref(T);o.replaceState(k,"",O),s&&l&&l({action:a,location:A.location,delta:0})}function E(N){let I=i.location.origin!=="null"?i.location.origin:i.location.href,T=typeof N=="string"?N:GS(N);return T=T.replace(/ $/,"%20"),at(I,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,I)}let A={get action(){return a},get location(){return t(i,o)},listen(N){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(aw,f),l=N,()=>{i.removeEventListener(aw,f),l=null}},createHref(N){return e(i,N)},createURL:E,encodeLocation(N){let I=E(N);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:w,go(N){return o.go(N)}};return A}var uw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(uw||(uw={}));function AN(t,e,n){return n===void 0&&(n="/"),PN(t,e,n)}function PN(t,e,n,r){let i=typeof e=="string"?Ls(e):e,s=YS(i.pathname||"/",n);if(s==null)return null;let o=KS(t);NN(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=WN(s);a=UN(o[l],c)}return a}function KS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(at(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=fs([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(at(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),KS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:jN(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of QS(s.path))i(s,o,l)}),e}function QS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=QS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function NN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bN=/^:[\w-]+$/,DN=3,ON=2,LN=1,MN=10,VN=-2,cw=t=>t==="*";function jN(t,e){let n=t.split("/"),r=n.length;return n.some(cw)&&(r+=VN),e&&(r+=ON),n.filter(i=>!cw(i)).reduce((i,s)=>i+(bN.test(s)?DN:s===""?LN:MN),r)}function FN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=BN({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),m=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:fs([s,f.pathname]),pathnameBase:KN(fs([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=fs([s,f.pathnameBase]))}return o}function BN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:w}=h;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const E=a[f];return w&&!E?c[m]=void 0:c[m]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function zN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Cd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Cd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function YS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const $N=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HN=t=>$N.test(t);function qN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ls(t):t,s;if(n)if(HN(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Cd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=hw(n.substring(1),"/"):s=hw(n,e)}else s=e;return{pathname:s,search:QN(r),hash:YN(i)}}function hw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function XS(t,e){let n=GN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function JS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ls(t):(i=Wl({},t),at(!i.pathname||!i.pathname.includes("?"),lp("?","pathname","search",i)),at(!i.pathname||!i.pathname.includes("#"),lp("#","pathname","hash",i)),at(!i.search||!i.search.includes("#"),lp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=qN(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const fs=t=>t.join("/").replace(/\/\/+/g,"/"),KN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),QN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function XN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ZS=["post","put","patch","delete"];new Set(ZS);const JN=["get",...ZS];new Set(JN);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $l(){return $l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$l.apply(this,arguments)}const dy=b.createContext(null),ZN=b.createContext(null),_u=b.createContext(null),kd=b.createContext(null),Bi=b.createContext({outlet:null,matches:[],isDataRoute:!1}),eC=b.createContext(null);function vu(){return b.useContext(kd)!=null}function xd(){return vu()||at(!1),b.useContext(kd).location}function tC(t){b.useContext(_u).static||b.useLayoutEffect(t)}function Dn(){let{isDataRoute:t}=b.useContext(Bi);return t?db():eb()}function eb(){vu()||at(!1);let t=b.useContext(dy),{basename:e,future:n,navigator:r}=b.useContext(_u),{matches:i}=b.useContext(Bi),{pathname:s}=xd(),o=JSON.stringify(XS(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return tC(()=>{a.current=!0}),b.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=JS(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:fs([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function nC(){let{matches:t}=b.useContext(Bi),e=t[t.length-1];return e?e.params:{}}function tb(t,e){return nb(t,e)}function nb(t,e,n,r){vu()||at(!1);let{navigator:i}=b.useContext(_u),{matches:s}=b.useContext(Bi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=xd(),h;if(e){var f;let N=typeof e=="string"?Ls(e):e;l==="/"||(f=N.pathname)!=null&&f.startsWith(l)||at(!1),h=N}else h=c;let m=h.pathname||"/",w=m;if(l!=="/"){let N=l.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let E=AN(t,{pathname:w}),A=ab(E&&E.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:fs([l,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?l:fs([l,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&A?b.createElement(kd.Provider,{value:{location:$l({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:hi.Pop}},A):A}function rb(){let t=hb(),e=XN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const ib=b.createElement(rb,null);class sb extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Bi.Provider,{value:this.props.routeContext},b.createElement(eC.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ob(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(dy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Bi.Provider,{value:e},r)}function ab(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||at(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:w}=n,E=f.route.loader&&m[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||E){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let w,E=!1,A=null,N=null;n&&(w=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||ib,l&&(c<0&&m===0?(fb("route-fallback"),E=!0,N=null):c===m&&(E=!0,N=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),T=()=>{let k;return w?k=A:E?k=N:f.route.Component?k=b.createElement(f.route.Component,null):f.route.element?k=f.route.element:k=h,b.createElement(ob,{match:f,routeContext:{outlet:h,matches:I,isDataRoute:n!=null},children:k})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?b.createElement(sb,{location:n.location,revalidation:n.revalidation,component:A,error:w,children:T(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):T()},null)}var rC=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(rC||{}),iC=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(iC||{});function lb(t){let e=b.useContext(dy);return e||at(!1),e}function ub(t){let e=b.useContext(ZN);return e||at(!1),e}function cb(t){let e=b.useContext(Bi);return e||at(!1),e}function sC(t){let e=cb(),n=e.matches[e.matches.length-1];return n.route.id||at(!1),n.route.id}function hb(){var t;let e=b.useContext(eC),n=ub(),r=sC();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function db(){let{router:t}=lb(rC.UseNavigateStable),e=sC(iC.UseNavigateStable),n=b.useRef(!1);return tC(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,$l({fromRouteId:e},s)))},[t,e])}const dw={};function fb(t,e,n){dw[t]||(dw[t]=!0)}function pb(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function oC(t){let{to:e,replace:n,state:r,relative:i}=t;vu()||at(!1);let{future:s,static:o}=b.useContext(_u),{matches:a}=b.useContext(Bi),{pathname:l}=xd(),c=Dn(),h=JS(e,XS(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(h);return b.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Vn(t){at(!1)}function mb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hi.Pop,navigator:s,static:o=!1,future:a}=t;vu()&&at(!1);let l=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:l,navigator:s,static:o,future:$l({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ls(r));let{pathname:h="/",search:f="",hash:m="",state:w=null,key:E="default"}=r,A=b.useMemo(()=>{let N=YS(h,l);return N==null?null:{location:{pathname:N,search:f,hash:m,state:w,key:E},navigationType:i}},[l,h,f,m,w,E,i]);return A==null?null:b.createElement(_u.Provider,{value:c},b.createElement(kd.Provider,{children:n,value:A}))}function gb(t){let{children:e,location:n}=t;return tb(Am(e),n)}new Promise(()=>{});function Am(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Am(r.props.children,s));return}r.type!==Vn&&at(!1),!r.props.index||!r.props.children||at(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Am(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yb="6";try{window.__reactRouterVersion=yb}catch{}const _b="startTransition",fw=pA[_b];function vb(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=kN({window:i,v5Compat:!0}));let o=s.current,[a,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=b.useCallback(f=>{c&&fw?fw(()=>l(f)):l(f)},[l,c]);return b.useLayoutEffect(()=>o.listen(h),[o,h]),b.useEffect(()=>pb(r),[r]),b.createElement(mb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var pw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(pw||(pw={}));var mw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mw||(mw={}));var gw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw oa(e)},oa=function(t){return new Error("Firebase Database ("+aC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,w=c&63;l||(w=64,o||(m=64)),r.push(n[h],n[f],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Eb;const m=s<<2|a>>4;if(r.push(m),c!==64){const w=a<<4&240|c>>2;if(r.push(w),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Eb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uC=function(t){const e=lC(t);return fy.encodeByteArray(e,!0)},Ah=function(t){return uC(t).replace(/\./g,"")},Ph=function(t){try{return fy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t){return cC(void 0,t)}function cC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ib(n)||(t[n]=cC(t[n],e[n]));return t}function Ib(t){return t!=="__proto__"}/**
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
 */function Sb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cb=()=>Sb().__FIREBASE_DEFAULTS__,kb=()=>{if(typeof process>"u"||typeof gw>"u")return;const t=gw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ph(t[1]);return e&&JSON.parse(e)},Rd=()=>{try{return Cb()||kb()||xb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hC=t=>{var e,n;return(n=(e=Rd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dC=t=>{const e=hC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fC=()=>{var t;return(t=Rd())===null||t===void 0?void 0:t.config},pC=t=>{var e;return(e=Rd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function mC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ah(JSON.stringify(n)),Ah(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function py(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function Rb(){var t;const e=(t=Rd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ab(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nb(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bb(){return aC.NODE_ADMIN===!0}function Db(){return!Rb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yC(){try{return typeof indexedDB=="object"}catch{return!1}}function _C(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Ob(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Lb,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ms.prototype.create)}}class Ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Mb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cr(i,a,r)}}function Mb(t,e){return t.replace(Vb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Vb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){return JSON.parse(t)}function ct(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Hl(Ph(s[0])||""),n=Hl(Ph(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},jb=function(t){const e=vC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Fb=function(t){const e=vC(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bh(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Uo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yw(s)&&yw(o)){if(!Uo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function el(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function tl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const m=(i<<5|i>>>27)+c+l+h+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Bb(t,e){const n=new zb(t,e);return n.subscribe.bind(n)}class zb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=up),i.error===void 0&&(i.error=up),i.complete===void 0&&(i.complete=up);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function up(){}function Bo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,z(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ad=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class Pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ts="[DEFAULT]";/**
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
 */class Hb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gb(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qb(t){return t===ts?void 0:t}function Gb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Qb={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Yb=fe.INFO,Xb={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Jb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Xb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=Yb,this._logHandler=Jb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Zb=(t,e)=>e.some(n=>t instanceof n);let _w,vw;function e2(){return _w||(_w=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function t2(){return vw||(vw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wC=new WeakMap,Pm=new WeakMap,EC=new WeakMap,cp=new WeakMap,my=new WeakMap;function n2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wC.set(n,t)}).catch(()=>{}),my.set(e,t),e}function r2(t){if(Pm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pm.set(t,e)}let Nm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||EC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function i2(t){Nm=t(Nm)}function s2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hp(this),e,...n);return EC.set(r,e.sort?e.sort():[e]),Rr(r)}:t2().includes(t)?function(...e){return t.apply(hp(this),e),Rr(wC.get(this))}:function(...e){return Rr(t.apply(hp(this),e))}}function o2(t){return typeof t=="function"?s2(t):(t instanceof IDBTransaction&&r2(t),Zb(t,e2())?new Proxy(t,Nm):t)}function Rr(t){if(t instanceof IDBRequest)return n2(t);if(cp.has(t))return cp.get(t);const e=o2(t);return e!==t&&(cp.set(t,e),my.set(e,t)),e}const hp=t=>my.get(t);function Nd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function dp(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Rr(n).then(()=>{})}const a2=["get","getKey","getAll","getAllKeys","count"],l2=["put","add","delete","clear"],fp=new Map;function ww(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fp.get(e))return fp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=l2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||a2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return fp.set(e,s),s}i2(t=>({...t,get:(e,n,r)=>ww(e,n)||t.get(e,n,r),has:(e,n)=>!!ww(e,n)||t.has(e,n)}));/**
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
 */class u2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(c2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function c2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bm="@firebase/app",Ew="0.10.13";/**
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
 */const Mr=new Pd("@firebase/app"),h2="@firebase/app-compat",d2="@firebase/analytics-compat",f2="@firebase/analytics",p2="@firebase/app-check-compat",m2="@firebase/app-check",g2="@firebase/auth",y2="@firebase/auth-compat",_2="@firebase/database",v2="@firebase/data-connect",w2="@firebase/database-compat",E2="@firebase/functions",T2="@firebase/functions-compat",I2="@firebase/installations",S2="@firebase/installations-compat",C2="@firebase/messaging",k2="@firebase/messaging-compat",x2="@firebase/performance",R2="@firebase/performance-compat",A2="@firebase/remote-config",P2="@firebase/remote-config-compat",N2="@firebase/storage",b2="@firebase/storage-compat",D2="@firebase/firestore",O2="@firebase/vertexai-preview",L2="@firebase/firestore-compat",M2="firebase",V2="10.14.1";/**
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
 */const Dm="[DEFAULT]",j2={[bm]:"fire-core",[h2]:"fire-core-compat",[f2]:"fire-analytics",[d2]:"fire-analytics-compat",[m2]:"fire-app-check",[p2]:"fire-app-check-compat",[g2]:"fire-auth",[y2]:"fire-auth-compat",[_2]:"fire-rtdb",[v2]:"fire-data-connect",[w2]:"fire-rtdb-compat",[E2]:"fire-fn",[T2]:"fire-fn-compat",[I2]:"fire-iid",[S2]:"fire-iid-compat",[C2]:"fire-fcm",[k2]:"fire-fcm-compat",[x2]:"fire-perf",[R2]:"fire-perf-compat",[A2]:"fire-rc",[P2]:"fire-rc-compat",[N2]:"fire-gcs",[b2]:"fire-gcs-compat",[D2]:"fire-fst",[L2]:"fire-fst-compat",[O2]:"fire-vertex","fire-js":"fire-js",[M2]:"fire-js-all"};/**
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
 */const Dh=new Map,F2=new Map,Om=new Map;function Tw(t,e){try{t.container.addComponent(e)}catch(n){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(Om.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Om.set(e,t);for(const n of Dh.values())Tw(n,t);for(const n of F2.values())Tw(n,t);return!0}function Vs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zn(t){return t.settings!==void 0}/**
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
 */const U2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ti=new Ms("app","Firebase",U2);/**
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
 */class B2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ti.create("app-deleted",{appName:this._name})}}/**
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
 */const js=V2;function TC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ti.create("bad-app-name",{appName:String(i)});if(n||(n=fC()),!n)throw Ti.create("no-options");const s=Dh.get(i);if(s){if(Uo(n,s.options)&&Uo(r,s.config))return s;throw Ti.create("duplicate-app",{appName:i})}const o=new Kb(i);for(const l of Om.values())o.addComponent(l);const a=new B2(n,r,o);return Dh.set(i,a),a}function bd(t=Dm){const e=Dh.get(t);if(!e&&t===Dm&&fC())return TC();if(!e)throw Ti.create("no-app",{appName:t});return e}function an(t,e,n){var r;let i=(r=j2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(a.join(" "));return}Qn(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const z2="firebase-heartbeat-database",W2=1,ql="firebase-heartbeat-store";let pp=null;function IC(){return pp||(pp=Nd(z2,W2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ql)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ti.create("idb-open",{originalErrorMessage:t.message})})),pp}async function $2(t){try{const n=(await IC()).transaction(ql),r=await n.objectStore(ql).get(SC(t));return await n.done,r}catch(e){if(e instanceof cr)Mr.warn(e.message);else{const n=Ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(n.message)}}}async function Iw(t,e){try{const r=(await IC()).transaction(ql,"readwrite");await r.objectStore(ql).put(e,SC(t)),await r.done}catch(n){if(n instanceof cr)Mr.warn(n.message);else{const r=Ti.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mr.warn(r.message)}}}function SC(t){return`${t.name}!${t.options.appId}`}/**
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
 */const H2=1024,q2=30*24*60*60*1e3;class G2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=q2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sw(),{heartbeatsToSend:r,unsentEntries:i}=K2(this._heartbeatsCache.heartbeats),s=Ah(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mr.warn(n),""}}}function Sw(){return new Date().toISOString().substring(0,10)}function K2(t,e=H2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Q2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yC()?_C().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cw(t){return Ah(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Y2(t){Qn(new Pn("platform-logger",e=>new u2(e),"PRIVATE")),Qn(new Pn("heartbeat",e=>new G2(e),"PRIVATE")),an(bm,Ew,t),an(bm,Ew,"esm2017"),an("fire-js","")}Y2("");function gy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function CC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const X2=CC,kC=new Ms("auth","Firebase",CC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new Pd("@firebase/auth");function J2(t,...e){Oh.logLevel<=fe.WARN&&Oh.warn(`Auth (${js}): ${t}`,...e)}function Gc(t,...e){Oh.logLevel<=fe.ERROR&&Oh.error(`Auth (${js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,...e){throw _y(t,...e)}function qn(t,...e){return _y(t,...e)}function yy(t,e,n){const r=Object.assign(Object.assign({},X2()),{[e]:n});return new Ms("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return yy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Z2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Nn(t,"argument-error"),yy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _y(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kC.create(t,...e)}function ne(t,e,...n){if(!t)throw _y(e,...n)}function Ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gc(e),new Error(e)}function Vr(t,e){t||Ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eD(){return kw()==="http:"||kw()==="https:"}function kw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eD()||Pb()||"connection"in navigator)?navigator.onLine:!0}function nD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vr(n>e,"Short delay should be less than long delay!"),this.isMobile=py()||gC()}get(){return tD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t,e){Vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=new wu(3e4,6e4);function zi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $r(t,e,n,r,i={}){return RC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=aa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return Ab()||(c.referrerPolicy="no-referrer"),xC.fetch()(AC(t,t.config.apiHost,n,a),c)})}async function RC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rD),e);try{const i=new oD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Sc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw yy(t,h,c);Nn(t,h)}}catch(i){if(i instanceof cr)throw i;Nn(t,"network-request-failed",{message:String(i)})}}async function Eu(t,e,n,r,i={}){const s=await $r(t,e,n,r,i);return"mfaPendingCredential"in s&&Nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function AC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?vy(t.config,i):`${t.config.apiScheme}://${i}`}function sD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qn(this.auth,"network-request-failed")),iD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qn(t,e,r);return i.customData._tokenResponse=n,i}function xw(t){return t!==void 0&&t.enterprise!==void 0}class aD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function lD(t,e){return $r(t,"GET","/v2/recaptchaConfig",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD(t,e){return $r(t,"POST","/v1/accounts:delete",e)}async function PC(t,e){return $r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cD(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=wy(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ml(mp(i.auth_time)),issuedAtTime:ml(mp(i.iat)),expirationTime:ml(mp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mp(t){return Number(t)*1e3}function wy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ph(n);return i?JSON.parse(i):(Gc("Failed to decode base64 JWT payload"),null)}catch(i){return Gc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rw(t){const e=wy(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&hD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ml(this.lastLoginAt),this.creationTime=ml(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zo(t,PC(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?NC(s.providerUserInfo):[],a=pD(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function fD(t){const e=Te(t);await Lh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function NC(t){return t.map(e=>{var{providerId:n}=e,r=gy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD(t,e){const n=await RC(t,{},async()=>{const r=aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=AC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gD(t,e){return $r(t,"POST","/v2/accounts:revokeToken",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Rw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ko;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ko,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zo(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cD(this,e)}reload(){return fD(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await zo(this,uD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:k,emailVerified:O,isAnonymous:F,providerData:M,stsTokenManager:C}=n;ne(k&&C,e,"internal-error");const v=ko.fromJSON(this.name,C);ne(typeof k=="string",e,"internal-error"),ti(f,e.name),ti(m,e.name),ne(typeof O=="boolean",e,"internal-error"),ne(typeof F=="boolean",e,"internal-error"),ti(w,e.name),ti(E,e.name),ti(A,e.name),ti(N,e.name),ti(I,e.name),ti(T,e.name);const S=new Sr({uid:k,auth:e,email:m,emailVerified:O,displayName:f,isAnonymous:F,photoURL:E,phoneNumber:w,tenantId:A,stsTokenManager:v,createdAt:I,lastLoginAt:T});return M&&Array.isArray(M)&&(S.providerData=M.map(x=>Object.assign({},x))),N&&(S._redirectEventId=N),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new ko;i.updateFromServerResponse(n);const s=new Sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Lh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?NC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ko;a.updateFromIdToken(r);const l=new Sr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Mm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=new Map;function Cr(t){Vr(t instanceof Function,"Expected a class definition");let e=Aw.get(t);return e?(Vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Aw.set(t,e),e)}/**
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
 */class bC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bC.type="NONE";const Pw=bC;/**
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
 */function Kc(t,e,n){return`firebase:${t}:${e}:${n}`}class xo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Kc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Kc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xo(Cr(Pw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Cr(Pw);const o=Kc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Sr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new xo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(MC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jC(e))return"Blackberry";if(FC(e))return"Webos";if(OC(e))return"Safari";if((e.includes("chrome/")||LC(e))&&!e.includes("edge/"))return"Chrome";if(VC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DC(t=$t()){return/firefox\//i.test(t)}function OC(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LC(t=$t()){return/crios\//i.test(t)}function MC(t=$t()){return/iemobile/i.test(t)}function VC(t=$t()){return/android/i.test(t)}function jC(t=$t()){return/blackberry/i.test(t)}function FC(t=$t()){return/webos/i.test(t)}function Ey(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yD(t=$t()){var e;return Ey(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _D(){return Nb()&&document.documentMode===10}function UC(t=$t()){return Ey(t)||VC(t)||FC(t)||jC(t)||/windows phone/i.test(t)||MC(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t,e=[]){let n;switch(t){case"Browser":n=Nw($t());break;case"Worker":n=`${Nw($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class vD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wD(t,e={}){return $r(t,"GET","/v2/passwordPolicy",zi(t,e))}/**
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
 */const ED=6;class TD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ED,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bw(this),this.idTokenSubscription=new bw(this),this.beforeStateQueue=new vD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await PC(this,{idToken:e}),r=await Sr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(Ar(this));const n=e?Te(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wD(this),n=new TD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cr(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&J2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wi(t){return Te(t)}class bw{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bb(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SD(t){Dd=t}function zC(t){return Dd.loadJS(t)}function CD(){return Dd.recaptchaEnterpriseScript}function kD(){return Dd.gapiScript}function xD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RD="recaptcha-enterprise",AD="NO_RECAPTCHA";class PD{constructor(e){this.type=RD,this.auth=Wi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{lD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new aD(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;xw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(AD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&xw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=CD();l.length!==0&&(l+=a),zC(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Dw(t,e,n,r=!1){const i=new PD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Vm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Dw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Dw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t,e){const n=Vs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Uo(s,e??{}))return i;Nn(i,"already-initialized")}return n.initialize({options:e})}function bD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DD(t,e,n){const r=Wi(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=WC(e),{host:o,port:a}=OD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),LD()}function WC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OD(t){const e=WC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ow(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ow(o)}}}function Ow(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,n){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}async function MD(t,e){return $r(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(t,e){return Eu(t,"POST","/v1/accounts:signInWithPassword",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(t,e){return Eu(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}async function FD(t,e){return Eu(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Ty{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Gl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vm(e,n,"signInWithPassword",VD);case"emailLink":return jD(e,{email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vm(e,r,"signUpPassword",MD);case"emailLink":return FD(e,{idToken:n,email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e){return Eu(t,"POST","/v1/accounts:signInWithIdp",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="http://localhost";class Es extends Ty{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Es(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ro(e,n)}buildRequest(){const e={requestUri:UD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=aa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zD(t){const e=el(tl(t)).link,n=e?el(tl(e)).deep_link_id:null,r=el(tl(t)).deep_link_id;return(r?el(tl(r)).link:null)||r||n||e||t}class Iy{constructor(e){var n,r,i,s,o,a;const l=el(tl(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=BD((i=l.mode)!==null&&i!==void 0?i:null);ne(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zD(e);try{return new Iy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.providerId=la.PROVIDER_ID}static credential(e,n){return Gl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Iy.parseLink(n);return ne(r,"argument-error"),Gl._fromEmailAndCode(e,r.code,r.tenantId)}}la.PROVIDER_ID="password";la.EMAIL_PASSWORD_SIGN_IN_METHOD="password";la.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tu extends Sy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Tu{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Tu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Es._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Tu{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.GITHUB_SIGN_IN_METHOD="github.com";ai.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Tu{constructor(){super("twitter.com")}static credential(e,n){return Es._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return li.credential(n,r)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WD(t,e){return Eu(t,"POST","/v1/accounts:signUp",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sr._fromIdTokenResponse(e,r,i),o=Lw(r);return new Ts({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lw(r);return new Ts({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends cr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mh(e,n,r,i)}}function $C(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mh._fromErrorAndOperation(t,s,e,r):s})}async function $D(t,e,n=!1){const r=await zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ts._forOperation(t,"link",r)}/**
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
 */async function HD(t,e,n=!1){const{auth:r}=t;if(zn(r.app))return Promise.reject(Ar(r));const i="reauthenticate";try{const s=await zo(t,$C(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=wy(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),Ts._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e,n=!1){if(zn(t.app))return Promise.reject(Ar(t));const r="signIn",i=await $C(t,r,e),s=await Ts._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function qD(t,e){return HC(Wi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t){const e=Wi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GD(t,e,n){if(zn(t.app))return Promise.reject(Ar(t));const r=Wi(t),o=await Vm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&qC(t),l}),a=await Ts._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function KD(t,e,n){return zn(t.app)?Promise.reject(Ar(t)):qD(Te(t),la.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qC(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(t,e){return $r(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Te(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await zo(r,QD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function XD(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function JD(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function ZD(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function eO(t){return Te(t).signOut()}const Vh="__sak";/**
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
 */class GC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vh,"1"),this.storage.removeItem(Vh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=1e3,nO=10;class KC extends GC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=UC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_D()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KC.type="LOCAL";const rO=KC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC extends GC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}QC.type="SESSION";const YC=QC;/**
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
 */function iO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Od{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Od(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await iO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Od.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Cy("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}function oO(t){ir().location.href=t}/**
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
 */function XC(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function aO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uO(){return XC()?self:null}/**
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
 */const JC="firebaseLocalStorageDb",cO=1,jh="firebaseLocalStorage",ZC="fbase_key";class Iu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ld(t,e){return t.transaction([jh],e?"readwrite":"readonly").objectStore(jh)}function hO(){const t=indexedDB.deleteDatabase(JC);return new Iu(t).toPromise()}function jm(){const t=indexedDB.open(JC,cO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jh,{keyPath:ZC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jh)?e(r):(r.close(),await hO(),e(await jm()))})})}async function Mw(t,e,n){const r=Ld(t,!0).put({[ZC]:e,value:n});return new Iu(r).toPromise()}async function dO(t,e){const n=Ld(t,!1).get(e),r=await new Iu(n).toPromise();return r===void 0?null:r.value}function Vw(t,e){const n=Ld(t,!0).delete(e);return new Iu(n).toPromise()}const fO=800,pO=3;class ek{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Od._getInstance(uO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aO(),!this.activeServiceWorker)return;this.sender=new sO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jm();return await Mw(e,Vh,"1"),await Vw(e,Vh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ld(i,!1).getAll();return new Iu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ek.type="LOCAL";const mO=ek;new wu(3e4,6e4);/**
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
 */function tk(t,e){return e?Cr(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ky extends Ty{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gO(t){return HC(t.auth,new ky(t),t.bypassAuthState)}function yO(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),HD(n,new ky(t),t.bypassAuthState)}async function _O(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),$D(n,new ky(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gO;case"linkViaPopup":case"linkViaRedirect":return _O;case"reauthViaPopup":case"reauthViaRedirect":return yO;default:Nn(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=new wu(2e3,1e4);async function wO(t,e,n){if(zn(t.app))return Promise.reject(qn(t,"operation-not-supported-in-this-environment"));const r=Wi(t);Z2(t,e,Sy);const i=tk(r,n);return new os(r,"signInViaPopup",e,i).executeNotNull()}class os extends nk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=Cy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vO.get())};e()}}os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO="pendingRedirect",Qc=new Map;class TO extends nk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qc.get(this.auth._key());if(!e){try{const r=await IO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qc.set(this.auth._key(),e)}return this.bypassAuthState||Qc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IO(t,e){const n=kO(e),r=CO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SO(t,e){Qc.set(t._key(),e)}function CO(t){return Cr(t._redirectPersistence)}function kO(t){return Kc(EO,t.config.apiKey,t.name)}async function xO(t,e,n=!1){if(zn(t.app))return Promise.reject(Ar(t));const r=Wi(t),i=tk(r,e),o=await new TO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=10*60*1e3;class AO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RO&&this.cachedEventUids.clear(),this.cachedEventUids.has(jw(e))}saveEventToCache(e){this.cachedEventUids.add(jw(e)),this.lastProcessedEventTime=Date.now()}}function jw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t,e={}){return $r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DO=/^https?/;async function OO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NO(t);for(const n of e)try{if(LO(n))return}catch{}Nn(t,"unauthorized-domain")}function LO(t){const e=Lm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DO.test(n))return!1;if(bO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const MO=new wu(3e4,6e4);function Fw(){const t=ir().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VO(t){return new Promise((e,n)=>{var r,i,s;function o(){Fw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fw(),n(qn(t,"network-request-failed"))},timeout:MO.get()})}if(!((i=(r=ir().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ir().gapi)===null||s===void 0)&&s.load)o();else{const a=xD("iframefcb");return ir()[a]=()=>{gapi.load?o():n(qn(t,"network-request-failed"))},zC(`${kD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yc=null,e})}let Yc=null;function jO(t){return Yc=Yc||VO(t),Yc}/**
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
 */const FO=new wu(5e3,15e3),UO="__/auth/iframe",BO="emulator/auth/iframe",zO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $O(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vy(e,BO):`https://${t.config.authDomain}/${UO}`,r={apiKey:e.apiKey,appName:t.name,v:js},i=WO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${aa(r).slice(1)}`}async function HO(t){const e=await jO(t),n=ir().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:$O(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qn(t,"network-request-failed"),a=ir().setTimeout(()=>{s(o)},FO.get());function l(){ir().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const qO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GO=500,KO=600,QO="_blank",YO="http://localhost";class Uw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XO(t,e,n,r=GO,i=KO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=$t().toLowerCase();n&&(a=LC(c)?QO:n),DC(c)&&(e=e||YO,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[w,E])=>`${m}${w}=${E},`,"");if(yD(c)&&a!=="_self")return JO(e||"",a),new Uw(null);const f=window.open(e||"",a,h);ne(f,t,"popup-blocked");try{f.focus()}catch{}return new Uw(f)}function JO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ZO="__/auth/handler",eL="emulator/auth/handler",tL=encodeURIComponent("fac");async function Bw(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:i};if(e instanceof Sy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Tu){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${tL}=${encodeURIComponent(l)}`:"";return`${nL(t)}?${aa(a).slice(1)}${c}`}function nL({config:t}){return t.emulator?vy(t,eL):`https://${t.authDomain}/${ZO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="webStorageSupport";class rL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=YC,this._completeRedirectFn=xO,this._overrideRedirectResult=SO}async _openPopup(e,n,r,i){var s;Vr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Bw(e,n,r,Lm(),i);return XO(e,o,Cy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Bw(e,n,r,Lm(),i);return oO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HO(e),r=new AO(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gp,{type:gp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gp];o!==void 0&&n(!!o),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return UC()||OC()||Ey()}}const iL=rL;var zw="@firebase/auth",Ww="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aL(t){Qn(new Pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BC(t)},c=new ID(r,i,s,l);return bD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qn(new Pn("auth-internal",e=>{const n=Wi(e.getProvider("auth").getImmediate());return(r=>new sL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(zw,Ww,oL(t)),an(zw,Ww,"esm2017")}/**
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
 */const lL=5*60,uL=pC("authIdTokenMaxAge")||lL;let $w=null;const cL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uL)return;const i=n==null?void 0:n.token;$w!==i&&($w=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hL(t=bd()){const e=Vs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ND(t,{popupRedirectResolver:iL,persistence:[mO,rO,YC]}),r=pC("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=cL(s.toString());JD(n,o,()=>o(n.currentUser)),XD(n,a=>o(a))}}const i=hC("auth");return i&&DD(n,`http://${i}`),n}function dL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}SD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aL("Browser");var fL="firebase",pL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(fL,pL,"app");var Hw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ps,ik;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,v){function S(){}S.prototype=v.prototype,C.D=v.prototype,C.prototype=new S,C.prototype.constructor=C,C.C=function(x,P,R){for(var _=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)_[oe-2]=arguments[oe];return v.prototype[P].apply(x,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,v,S){S||(S=0);var x=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)x[P]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(P=0;16>P;++P)x[P]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=C.g[0],S=C.g[1],P=C.g[2];var R=C.g[3],_=v+(R^S&(P^R))+x[0]+3614090360&4294967295;v=S+(_<<7&4294967295|_>>>25),_=R+(P^v&(S^P))+x[1]+3905402710&4294967295,R=v+(_<<12&4294967295|_>>>20),_=P+(S^R&(v^S))+x[2]+606105819&4294967295,P=R+(_<<17&4294967295|_>>>15),_=S+(v^P&(R^v))+x[3]+3250441966&4294967295,S=P+(_<<22&4294967295|_>>>10),_=v+(R^S&(P^R))+x[4]+4118548399&4294967295,v=S+(_<<7&4294967295|_>>>25),_=R+(P^v&(S^P))+x[5]+1200080426&4294967295,R=v+(_<<12&4294967295|_>>>20),_=P+(S^R&(v^S))+x[6]+2821735955&4294967295,P=R+(_<<17&4294967295|_>>>15),_=S+(v^P&(R^v))+x[7]+4249261313&4294967295,S=P+(_<<22&4294967295|_>>>10),_=v+(R^S&(P^R))+x[8]+1770035416&4294967295,v=S+(_<<7&4294967295|_>>>25),_=R+(P^v&(S^P))+x[9]+2336552879&4294967295,R=v+(_<<12&4294967295|_>>>20),_=P+(S^R&(v^S))+x[10]+4294925233&4294967295,P=R+(_<<17&4294967295|_>>>15),_=S+(v^P&(R^v))+x[11]+2304563134&4294967295,S=P+(_<<22&4294967295|_>>>10),_=v+(R^S&(P^R))+x[12]+1804603682&4294967295,v=S+(_<<7&4294967295|_>>>25),_=R+(P^v&(S^P))+x[13]+4254626195&4294967295,R=v+(_<<12&4294967295|_>>>20),_=P+(S^R&(v^S))+x[14]+2792965006&4294967295,P=R+(_<<17&4294967295|_>>>15),_=S+(v^P&(R^v))+x[15]+1236535329&4294967295,S=P+(_<<22&4294967295|_>>>10),_=v+(P^R&(S^P))+x[1]+4129170786&4294967295,v=S+(_<<5&4294967295|_>>>27),_=R+(S^P&(v^S))+x[6]+3225465664&4294967295,R=v+(_<<9&4294967295|_>>>23),_=P+(v^S&(R^v))+x[11]+643717713&4294967295,P=R+(_<<14&4294967295|_>>>18),_=S+(R^v&(P^R))+x[0]+3921069994&4294967295,S=P+(_<<20&4294967295|_>>>12),_=v+(P^R&(S^P))+x[5]+3593408605&4294967295,v=S+(_<<5&4294967295|_>>>27),_=R+(S^P&(v^S))+x[10]+38016083&4294967295,R=v+(_<<9&4294967295|_>>>23),_=P+(v^S&(R^v))+x[15]+3634488961&4294967295,P=R+(_<<14&4294967295|_>>>18),_=S+(R^v&(P^R))+x[4]+3889429448&4294967295,S=P+(_<<20&4294967295|_>>>12),_=v+(P^R&(S^P))+x[9]+568446438&4294967295,v=S+(_<<5&4294967295|_>>>27),_=R+(S^P&(v^S))+x[14]+3275163606&4294967295,R=v+(_<<9&4294967295|_>>>23),_=P+(v^S&(R^v))+x[3]+4107603335&4294967295,P=R+(_<<14&4294967295|_>>>18),_=S+(R^v&(P^R))+x[8]+1163531501&4294967295,S=P+(_<<20&4294967295|_>>>12),_=v+(P^R&(S^P))+x[13]+2850285829&4294967295,v=S+(_<<5&4294967295|_>>>27),_=R+(S^P&(v^S))+x[2]+4243563512&4294967295,R=v+(_<<9&4294967295|_>>>23),_=P+(v^S&(R^v))+x[7]+1735328473&4294967295,P=R+(_<<14&4294967295|_>>>18),_=S+(R^v&(P^R))+x[12]+2368359562&4294967295,S=P+(_<<20&4294967295|_>>>12),_=v+(S^P^R)+x[5]+4294588738&4294967295,v=S+(_<<4&4294967295|_>>>28),_=R+(v^S^P)+x[8]+2272392833&4294967295,R=v+(_<<11&4294967295|_>>>21),_=P+(R^v^S)+x[11]+1839030562&4294967295,P=R+(_<<16&4294967295|_>>>16),_=S+(P^R^v)+x[14]+4259657740&4294967295,S=P+(_<<23&4294967295|_>>>9),_=v+(S^P^R)+x[1]+2763975236&4294967295,v=S+(_<<4&4294967295|_>>>28),_=R+(v^S^P)+x[4]+1272893353&4294967295,R=v+(_<<11&4294967295|_>>>21),_=P+(R^v^S)+x[7]+4139469664&4294967295,P=R+(_<<16&4294967295|_>>>16),_=S+(P^R^v)+x[10]+3200236656&4294967295,S=P+(_<<23&4294967295|_>>>9),_=v+(S^P^R)+x[13]+681279174&4294967295,v=S+(_<<4&4294967295|_>>>28),_=R+(v^S^P)+x[0]+3936430074&4294967295,R=v+(_<<11&4294967295|_>>>21),_=P+(R^v^S)+x[3]+3572445317&4294967295,P=R+(_<<16&4294967295|_>>>16),_=S+(P^R^v)+x[6]+76029189&4294967295,S=P+(_<<23&4294967295|_>>>9),_=v+(S^P^R)+x[9]+3654602809&4294967295,v=S+(_<<4&4294967295|_>>>28),_=R+(v^S^P)+x[12]+3873151461&4294967295,R=v+(_<<11&4294967295|_>>>21),_=P+(R^v^S)+x[15]+530742520&4294967295,P=R+(_<<16&4294967295|_>>>16),_=S+(P^R^v)+x[2]+3299628645&4294967295,S=P+(_<<23&4294967295|_>>>9),_=v+(P^(S|~R))+x[0]+4096336452&4294967295,v=S+(_<<6&4294967295|_>>>26),_=R+(S^(v|~P))+x[7]+1126891415&4294967295,R=v+(_<<10&4294967295|_>>>22),_=P+(v^(R|~S))+x[14]+2878612391&4294967295,P=R+(_<<15&4294967295|_>>>17),_=S+(R^(P|~v))+x[5]+4237533241&4294967295,S=P+(_<<21&4294967295|_>>>11),_=v+(P^(S|~R))+x[12]+1700485571&4294967295,v=S+(_<<6&4294967295|_>>>26),_=R+(S^(v|~P))+x[3]+2399980690&4294967295,R=v+(_<<10&4294967295|_>>>22),_=P+(v^(R|~S))+x[10]+4293915773&4294967295,P=R+(_<<15&4294967295|_>>>17),_=S+(R^(P|~v))+x[1]+2240044497&4294967295,S=P+(_<<21&4294967295|_>>>11),_=v+(P^(S|~R))+x[8]+1873313359&4294967295,v=S+(_<<6&4294967295|_>>>26),_=R+(S^(v|~P))+x[15]+4264355552&4294967295,R=v+(_<<10&4294967295|_>>>22),_=P+(v^(R|~S))+x[6]+2734768916&4294967295,P=R+(_<<15&4294967295|_>>>17),_=S+(R^(P|~v))+x[13]+1309151649&4294967295,S=P+(_<<21&4294967295|_>>>11),_=v+(P^(S|~R))+x[4]+4149444226&4294967295,v=S+(_<<6&4294967295|_>>>26),_=R+(S^(v|~P))+x[11]+3174756917&4294967295,R=v+(_<<10&4294967295|_>>>22),_=P+(v^(R|~S))+x[2]+718787259&4294967295,P=R+(_<<15&4294967295|_>>>17),_=S+(R^(P|~v))+x[9]+3951481745&4294967295,C.g[0]=C.g[0]+v&4294967295,C.g[1]=C.g[1]+(P+(_<<21&4294967295|_>>>11))&4294967295,C.g[2]=C.g[2]+P&4294967295,C.g[3]=C.g[3]+R&4294967295}r.prototype.u=function(C,v){v===void 0&&(v=C.length);for(var S=v-this.blockSize,x=this.B,P=this.h,R=0;R<v;){if(P==0)for(;R<=S;)i(this,C,R),R+=this.blockSize;if(typeof C=="string"){for(;R<v;)if(x[P++]=C.charCodeAt(R++),P==this.blockSize){i(this,x),P=0;break}}else for(;R<v;)if(x[P++]=C[R++],P==this.blockSize){i(this,x),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var v=1;v<C.length-8;++v)C[v]=0;var S=8*this.o;for(v=C.length-8;v<C.length;++v)C[v]=S&255,S/=256;for(this.u(C),C=Array(16),v=S=0;4>v;++v)for(var x=0;32>x;x+=8)C[S++]=this.g[v]>>>x&255;return C};function s(C,v){var S=a;return Object.prototype.hasOwnProperty.call(S,C)?S[C]:S[C]=v(C)}function o(C,v){this.h=v;for(var S=[],x=!0,P=C.length-1;0<=P;P--){var R=C[P]|0;x&&R==v||(S[P]=R,x=!1)}this.g=S}var a={};function l(C){return-128<=C&&128>C?s(C,function(v){return new o([v|0],0>v?-1:0)}):new o([C|0],0>C?-1:0)}function c(C){if(isNaN(C)||!isFinite(C))return f;if(0>C)return N(c(-C));for(var v=[],S=1,x=0;C>=S;x++)v[x]=C/S|0,S*=4294967296;return new o(v,0)}function h(C,v){if(C.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C.charAt(0)=="-")return N(h(C.substring(1),v));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),x=f,P=0;P<C.length;P+=8){var R=Math.min(8,C.length-P),_=parseInt(C.substring(P,P+R),v);8>R?(R=c(Math.pow(v,R)),x=x.j(R).add(c(_))):(x=x.j(S),x=x.add(c(_)))}return x}var f=l(0),m=l(1),w=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-N(this).m();for(var C=0,v=1,S=0;S<this.g.length;S++){var x=this.i(S);C+=(0<=x?x:4294967296+x)*v,v*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(E(this))return"0";if(A(this))return"-"+N(this).toString(C);for(var v=c(Math.pow(C,6)),S=this,x="";;){var P=O(S,v).g;S=I(S,P.j(v));var R=((0<S.g.length?S.g[0]:S.h)>>>0).toString(C);if(S=P,E(S))return R+x;for(;6>R.length;)R="0"+R;x=R+x}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function E(C){if(C.h!=0)return!1;for(var v=0;v<C.g.length;v++)if(C.g[v]!=0)return!1;return!0}function A(C){return C.h==-1}t.l=function(C){return C=I(this,C),A(C)?-1:E(C)?0:1};function N(C){for(var v=C.g.length,S=[],x=0;x<v;x++)S[x]=~C.g[x];return new o(S,~C.h).add(m)}t.abs=function(){return A(this)?N(this):this},t.add=function(C){for(var v=Math.max(this.g.length,C.g.length),S=[],x=0,P=0;P<=v;P++){var R=x+(this.i(P)&65535)+(C.i(P)&65535),_=(R>>>16)+(this.i(P)>>>16)+(C.i(P)>>>16);x=_>>>16,R&=65535,_&=65535,S[P]=_<<16|R}return new o(S,S[S.length-1]&-2147483648?-1:0)};function I(C,v){return C.add(N(v))}t.j=function(C){if(E(this)||E(C))return f;if(A(this))return A(C)?N(this).j(N(C)):N(N(this).j(C));if(A(C))return N(this.j(N(C)));if(0>this.l(w)&&0>C.l(w))return c(this.m()*C.m());for(var v=this.g.length+C.g.length,S=[],x=0;x<2*v;x++)S[x]=0;for(x=0;x<this.g.length;x++)for(var P=0;P<C.g.length;P++){var R=this.i(x)>>>16,_=this.i(x)&65535,oe=C.i(P)>>>16,nt=C.i(P)&65535;S[2*x+2*P]+=_*nt,T(S,2*x+2*P),S[2*x+2*P+1]+=R*nt,T(S,2*x+2*P+1),S[2*x+2*P+1]+=_*oe,T(S,2*x+2*P+1),S[2*x+2*P+2]+=R*oe,T(S,2*x+2*P+2)}for(x=0;x<v;x++)S[x]=S[2*x+1]<<16|S[2*x];for(x=v;x<2*v;x++)S[x]=0;return new o(S,0)};function T(C,v){for(;(C[v]&65535)!=C[v];)C[v+1]+=C[v]>>>16,C[v]&=65535,v++}function k(C,v){this.g=C,this.h=v}function O(C,v){if(E(v))throw Error("division by zero");if(E(C))return new k(f,f);if(A(C))return v=O(N(C),v),new k(N(v.g),N(v.h));if(A(v))return v=O(C,N(v)),new k(N(v.g),v.h);if(30<C.g.length){if(A(C)||A(v))throw Error("slowDivide_ only works with positive integers.");for(var S=m,x=v;0>=x.l(C);)S=F(S),x=F(x);var P=M(S,1),R=M(x,1);for(x=M(x,2),S=M(S,2);!E(x);){var _=R.add(x);0>=_.l(C)&&(P=P.add(S),R=_),x=M(x,1),S=M(S,1)}return v=I(C,P.j(v)),new k(P,v)}for(P=f;0<=C.l(v);){for(S=Math.max(1,Math.floor(C.m()/v.m())),x=Math.ceil(Math.log(S)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),R=c(S),_=R.j(v);A(_)||0<_.l(C);)S-=x,R=c(S),_=R.j(v);E(R)&&(R=m),P=P.add(R),C=I(C,_)}return new k(P,C)}t.A=function(C){return O(this,C).h},t.and=function(C){for(var v=Math.max(this.g.length,C.g.length),S=[],x=0;x<v;x++)S[x]=this.i(x)&C.i(x);return new o(S,this.h&C.h)},t.or=function(C){for(var v=Math.max(this.g.length,C.g.length),S=[],x=0;x<v;x++)S[x]=this.i(x)|C.i(x);return new o(S,this.h|C.h)},t.xor=function(C){for(var v=Math.max(this.g.length,C.g.length),S=[],x=0;x<v;x++)S[x]=this.i(x)^C.i(x);return new o(S,this.h^C.h)};function F(C){for(var v=C.g.length+1,S=[],x=0;x<v;x++)S[x]=C.i(x)<<1|C.i(x-1)>>>31;return new o(S,C.h)}function M(C,v){var S=v>>5;v%=32;for(var x=C.g.length-S,P=[],R=0;R<x;R++)P[R]=0<v?C.i(R+S)>>>v|C.i(R+S+1)<<32-v:C.i(R+S);return new o(P,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ik=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ps=o}).apply(typeof Hw<"u"?Hw:typeof self<"u"?self:typeof window<"u"?window:{});var Cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sk,nl,ok,Xc,Fm,ak,lk,uk;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,g){return u==Array.prototype||u==Object.prototype||(u[d]=g.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cc=="object"&&Cc];for(var d=0;d<u.length;++d){var g=u[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var g=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var D=u[y];if(!(D in g))break e;g=g[D]}u=u[u.length-1],y=g[u],d=d(y),d!=y&&d!=null&&e(g,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var g=0,y=!1,D={next:function(){if(!y&&g<u.length){var L=g++;return{value:d(L,u[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,g){return u.call.apply(u.bind,arguments)}function f(u,d,g){if(!u)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),u.apply(d,D)}}return function(){return u.apply(d,arguments)}}function m(u,d,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function w(u,d){var g=Array.prototype.slice.call(arguments,1);return function(){var y=g.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function E(u,d){function g(){}g.prototype=d.prototype,u.aa=d.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(y,D,L){for(var W=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)W[Pe-2]=arguments[Pe];return d.prototype[D].apply(y,W)}}function A(u){const d=u.length;if(0<d){const g=Array(d);for(let y=0;y<d;y++)g[y]=u[y];return g}return[]}function N(u,d){for(let g=1;g<arguments.length;g++){const y=arguments[g];if(l(y)){const D=u.length||0,L=y.length||0;u.length=D+L;for(let W=0;W<L;W++)u[D+W]=y[W]}else u.push(y)}}class I{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function T(u){return/^[\s\xa0]*$/.test(u)}function k(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var F=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function M(u,d,g){for(const y in u)d.call(g,u[y],y,u)}function C(u,d){for(const g in u)d.call(void 0,u[g],g,u)}function v(u){const d={};for(const g in u)d[g]=u[g];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,d){let g,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(g in y)u[g]=y[g];for(let L=0;L<S.length;L++)g=S[L],Object.prototype.hasOwnProperty.call(y,g)&&(u[g]=y[g])}}function P(u){var d=1;u=u.split(":");const g=[];for(;0<d&&u.length;)g.push(u.shift()),d--;return u.length&&g.push(u.join(":")),g}function R(u){a.setTimeout(()=>{throw u},0)}function _(){var u=Q;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class oe{constructor(){this.h=this.g=null}add(d,g){const y=nt.get();y.set(d,g),this.h?this.h.next=y:this.g=y,this.h=y}}var nt=new I(()=>new bt,u=>u.reset());class bt{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Et,$=!1,Q=new oe,te=()=>{const u=a.Promise.resolve(void 0);Et=()=>{u.then(H)}};var H=()=>{for(var u;u=_();){try{u.h.call(u.g)}catch(g){R(g)}var d=nt;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}$=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return u}();function Ce(u,d){if(X.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(F){e:{try{O(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else g=="mouseover"?d=u.fromElement:g=="mouseout"&&(d=u.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ae[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}E(Ce,X);var Ae={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),Gr=0;function ae(u,d,g,y,D){this.listener=u,this.proxy=null,this.src=d,this.type=g,this.capture=!!y,this.ha=D,this.key=++Gr,this.da=this.fa=!1}function cn(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ft(u){this.src=u,this.g={},this.h=0}ft.prototype.add=function(u,d,g,y,D){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var W=vn(u,d,y,D);return-1<W?(d=u[W],g||(d.fa=!1)):(d=new ae(d,this.src,L,!!y,D),d.fa=g,u.push(d)),d};function Kr(u,d){var g=d.type;if(g in u.g){var y=u.g[g],D=Array.prototype.indexOf.call(y,d,void 0),L;(L=0<=D)&&Array.prototype.splice.call(y,D,1),L&&(cn(d),u.g[g].length==0&&(delete u.g[g],u.h--))}}function vn(u,d,g,y){for(var D=0;D<u.length;++D){var L=u[D];if(!L.da&&L.listener==d&&L.capture==!!g&&L.ha==y)return D}return-1}var qs="closure_lm_"+(1e6*Math.random()|0),Gs={};function zu(u,d,g,y,D){if(Array.isArray(d)){for(var L=0;L<d.length;L++)zu(u,d[L],g,y,D);return null}return g=$u(g),u&&u[he]?u.K(d,g,c(y)?!!y.capture:!1,D):Dt(u,d,g,!1,y,D)}function Dt(u,d,g,y,D,L){if(!d)throw Error("Invalid event type");var W=c(D)?!!D.capture:!!D,Pe=wa(u);if(Pe||(u[qs]=Pe=new ft(u)),g=Pe.add(d,g,y,W,L),g.proxy)return g;if(y=Qr(),g.proxy=y,y.src=u,y.listener=g,u.addEventListener)me||(D=W),D===void 0&&(D=!1),u.addEventListener(d.toString(),y,D);else if(u.attachEvent)u.attachEvent(Wu(d.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Qr(){function u(g){return d.call(u.src,u.listener,g)}const d=Ef;return u}function dr(u,d,g,y,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)dr(u,d[L],g,y,D);else y=c(y)?!!y.capture:!!y,g=$u(g),u&&u[he]?(u=u.i,d=String(d).toString(),d in u.g&&(L=u.g[d],g=vn(L,g,y,D),-1<g&&(cn(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete u.g[d],u.h--)))):u&&(u=wa(u))&&(d=u.g[d.toString()],u=-1,d&&(u=vn(d,g,y,D)),(g=-1<u?d[u]:null)&&va(g))}function va(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[he])Kr(d.i,u);else{var g=u.type,y=u.proxy;d.removeEventListener?d.removeEventListener(g,y,u.capture):d.detachEvent?d.detachEvent(Wu(g),y):d.addListener&&d.removeListener&&d.removeListener(y),(g=wa(d))?(Kr(g,u),g.h==0&&(g.src=null,d[qs]=null)):cn(u)}}}function Wu(u){return u in Gs?Gs[u]:Gs[u]="on"+u}function Ef(u,d){if(u.da)u=!0;else{d=new Ce(d,this);var g=u.listener,y=u.ha||u.src;u.fa&&va(u),u=g.call(y,d)}return u}function wa(u){return u=u[qs],u instanceof ft?u:null}var Ea="__closure_events_fn_"+(1e9*Math.random()>>>0);function $u(u){return typeof u=="function"?u:(u[Ea]||(u[Ea]=function(d){return u.handleEvent(d)}),u[Ea])}function rt(){j.call(this),this.i=new ft(this),this.M=this,this.F=null}E(rt,j),rt.prototype[he]=!0,rt.prototype.removeEventListener=function(u,d,g,y){dr(this,u,d,g,y)};function be(u,d){var g,y=u.F;if(y)for(g=[];y;y=y.F)g.push(y);if(u=u.M,y=d.type||d,typeof d=="string")d=new X(d,u);else if(d instanceof X)d.target=d.target||u;else{var D=d;d=new X(y,u),x(d,D)}if(D=!0,g)for(var L=g.length-1;0<=L;L--){var W=d.g=g[L];D=Hi(W,y,!0,d)&&D}if(W=d.g=u,D=Hi(W,y,!0,d)&&D,D=Hi(W,y,!1,d)&&D,g)for(L=0;L<g.length;L++)W=d.g=g[L],D=Hi(W,y,!1,d)&&D}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var g=u.g[d],y=0;y<g.length;y++)cn(g[y]);delete u.g[d],u.h--}}this.F=null},rt.prototype.K=function(u,d,g,y){return this.i.add(String(u),d,!1,g,y)},rt.prototype.L=function(u,d,g,y){return this.i.add(String(u),d,!0,g,y)};function Hi(u,d,g,y){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,L=0;L<d.length;++L){var W=d[L];if(W&&!W.da&&W.capture==g){var Pe=W.listener,Tt=W.ha||W.src;W.fa&&Kr(u.i,W),D=Pe.call(Tt,y)!==!1&&D}}return D&&!y.defaultPrevented}function Ta(u,d,g){if(typeof u=="function")g&&(u=m(u,g));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function Y(u){u.g=Ta(()=>{u.g=null,u.i&&(u.i=!1,Y(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class Z extends j{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ge(u){j.call(this),this.h=u,this.g={}}E(ge,j);var Ye=[];function De(u){M(u.g,function(d,g){this.g.hasOwnProperty(g)&&va(d)},u),u.g={}}ge.prototype.N=function(){ge.aa.N.call(this),De(this)},ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var We=a.JSON.stringify,Jt=a.JSON.parse,$e=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Oe(){}Oe.prototype.h=null;function Yr(u){return u.h||(u.h=u.i())}function Hu(){}var Ia={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tf(){X.call(this,"d")}E(Tf,X);function If(){X.call(this,"c")}E(If,X);var qi={},uv=null;function qu(){return uv=uv||new rt}qi.La="serverreachability";function cv(u){X.call(this,qi.La,u)}E(cv,X);function Sa(u){const d=qu();be(d,new cv(d))}qi.STAT_EVENT="statevent";function hv(u,d){X.call(this,qi.STAT_EVENT,u),this.stat=d}E(hv,X);function Ht(u){const d=qu();be(d,new hv(d,u))}qi.Ma="timingevent";function dv(u,d){X.call(this,qi.Ma,u),this.size=d}E(dv,X);function Ca(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function ka(){this.g=!0}ka.prototype.xa=function(){this.g=!1};function RR(u,d,g,y,D,L){u.info(function(){if(u.g)if(L)for(var W="",Pe=L.split("&"),Tt=0;Tt<Pe.length;Tt++){var ve=Pe[Tt].split("=");if(1<ve.length){var Ot=ve[0];ve=ve[1];var Lt=Ot.split("_");W=2<=Lt.length&&Lt[1]=="type"?W+(Ot+"="+ve+"&"):W+(Ot+"=redacted&")}}else W=null;else W=L;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+d+`
`+g+`
`+W})}function AR(u,d,g,y,D,L,W){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+d+`
`+g+`
`+L+" "+W})}function Ks(u,d,g,y){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+NR(u,g)+(y?" "+y:"")})}function PR(u,d){u.info(function(){return"TIMEOUT: "+d})}ka.prototype.info=function(){};function NR(u,d){if(!u.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var y=g[u];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return We(g)}catch{return d}}var Gu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sf;function Ku(){}E(Ku,Oe),Ku.prototype.g=function(){return new XMLHttpRequest},Ku.prototype.i=function(){return{}},Sf=new Ku;function Xr(u,d,g,y){this.j=u,this.i=d,this.l=g,this.R=y||1,this.U=new ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pv}function pv(){this.i=null,this.g="",this.h=!1}var mv={},Cf={};function kf(u,d,g){u.L=1,u.v=Ju(fr(d)),u.m=g,u.P=!0,gv(u,null)}function gv(u,d){u.F=Date.now(),Qu(u),u.A=fr(u.v);var g=u.A,y=u.R;Array.isArray(y)||(y=[String(y)]),Pv(g.i,"t",y),u.C=0,g=u.j.J,u.h=new pv,u.g=Kv(u.j,g?d:null,!u.m),0<u.O&&(u.M=new Z(m(u.Y,u,u.g),u.O)),d=u.U,g=u.g,y=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(Ye[0]=D.toString()),D=Ye);for(var L=0;L<D.length;L++){var W=zu(g,D[L],y||d.handleEvent,!1,d.h||d);if(!W)break;d.g[W.key]=W}d=u.H?v(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),Sa(),RR(u.i,u.u,u.A,u.l,u.R,u.m)}Xr.prototype.ca=function(u){u=u.target;const d=this.M;d&&pr(u)==3?d.j():this.Y(u)},Xr.prototype.Y=function(u){try{if(u==this.g)e:{const Lt=pr(this.g);var d=this.g.Ba();const Xs=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||Vv(this.g)))){this.J||Lt!=4||d==7||(d==8||0>=Xs?Sa(3):Sa(2)),xf(this);var g=this.g.Z();this.X=g;t:if(yv(this)){var y=Vv(this.g);u="";var D=y.length,L=pr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gi(this),xa(this);var W="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,u+=this.h.i.decode(y[d],{stream:!(L&&d==D-1)});y.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=g==200,AR(this.i,this.u,this.A,this.l,this.R,Lt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Tt=this.g;if((Pe=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(Pe)){var ve=Pe;break t}}ve=null}if(g=ve)Ks(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rf(this,g);else{this.o=!1,this.s=3,Ht(12),Gi(this),xa(this);break e}}if(this.P){g=!0;let Ln;for(;!this.J&&this.C<W.length;)if(Ln=bR(this,W),Ln==Cf){Lt==4&&(this.s=4,Ht(14),g=!1),Ks(this.i,this.l,null,"[Incomplete Response]");break}else if(Ln==mv){this.s=4,Ht(15),Ks(this.i,this.l,W,"[Invalid Chunk]"),g=!1;break}else Ks(this.i,this.l,Ln,null),Rf(this,Ln);if(yv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||W.length!=0||this.h.h||(this.s=1,Ht(16),g=!1),this.o=this.o&&g,!g)Ks(this.i,this.l,W,"[Invalid Chunked Response]"),Gi(this),xa(this);else if(0<W.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Of(Ot),Ot.M=!0,Ht(11))}}else Ks(this.i,this.l,W,null),Rf(this,W);Lt==4&&Gi(this),this.o&&!this.J&&(Lt==4?$v(this.j,this):(this.o=!1,Qu(this)))}else QR(this.g),g==400&&0<W.indexOf("Unknown SID")?(this.s=3,Ht(12)):(this.s=0,Ht(13)),Gi(this),xa(this)}}}catch{}finally{}};function yv(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function bR(u,d){var g=u.C,y=d.indexOf(`
`,g);return y==-1?Cf:(g=Number(d.substring(g,y)),isNaN(g)?mv:(y+=1,y+g>d.length?Cf:(d=d.slice(y,y+g),u.C=y+g,d)))}Xr.prototype.cancel=function(){this.J=!0,Gi(this)};function Qu(u){u.S=Date.now()+u.I,_v(u,u.I)}function _v(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ca(m(u.ba,u),d)}function xf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Xr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(PR(this.i,this.A),this.L!=2&&(Sa(),Ht(17)),Gi(this),this.s=2,xa(this)):_v(this,this.S-u)};function xa(u){u.j.G==0||u.J||$v(u.j,u)}function Gi(u){xf(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,De(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function Rf(u,d){try{var g=u.j;if(g.G!=0&&(g.g==u||Af(g.h,u))){if(!u.K&&Af(g.h,u)&&g.G==3){try{var y=g.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)ic(g),nc(g);else break e;Df(g),Ht(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=Ca(m(g.Za,g),6e3));if(1>=Ev(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Qi(g,11)}else if((u.K||g.g==u)&&ic(g),!T(d))for(D=g.Da.g.parse(d),d=0;d<D.length;d++){let ve=D[d];if(g.T=ve[0],ve=ve[1],g.G==2)if(ve[0]=="c"){g.K=ve[1],g.ia=ve[2];const Ot=ve[3];Ot!=null&&(g.la=Ot,g.j.info("VER="+g.la));const Lt=ve[4];Lt!=null&&(g.Aa=Lt,g.j.info("SVER="+g.Aa));const Xs=ve[5];Xs!=null&&typeof Xs=="number"&&0<Xs&&(y=1.5*Xs,g.L=y,g.j.info("backChannelRequestTimeoutMs_="+y)),y=g;const Ln=u.g;if(Ln){const oc=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oc){var L=y.h;L.g||oc.indexOf("spdy")==-1&&oc.indexOf("quic")==-1&&oc.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Pf(L,L.h),L.h=null))}if(y.D){const Lf=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Lf&&(y.ya=Lf,Ve(y.I,y.D,Lf))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),y=g;var W=u;if(y.qa=Gv(y,y.J?y.ia:null,y.W),W.K){Tv(y.h,W);var Pe=W,Tt=y.L;Tt&&(Pe.I=Tt),Pe.B&&(xf(Pe),Qu(Pe)),y.g=W}else zv(y);0<g.i.length&&rc(g)}else ve[0]!="stop"&&ve[0]!="close"||Qi(g,7);else g.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Qi(g,7):bf(g):ve[0]!="noop"&&g.l&&g.l.ta(ve),g.v=0)}}Sa(4)}catch{}}var DR=class{constructor(u,d){this.g=u,this.map=d}};function vv(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wv(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ev(u){return u.h?1:u.g?u.g.size:0}function Af(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function Pf(u,d){u.g?u.g.add(d):u.h=d}function Tv(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}vv.prototype.cancel=function(){if(this.i=Iv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Iv(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const g of u.g.values())d=d.concat(g.D);return d}return A(u.i)}function OR(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],g=u.length,y=0;y<g;y++)d.push(u[y]);return d}d=[],g=0;for(y in u)d[g++]=u[y];return d}function LR(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var g=0;g<u;g++)d.push(g);return d}d=[],g=0;for(const y in u)d[g++]=y;return d}}}function Sv(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var g=LR(u),y=OR(u),D=y.length,L=0;L<D;L++)d.call(void 0,y[L],g&&g[L],u)}var Cv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MR(u,d){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var y=u[g].indexOf("="),D=null;if(0<=y){var L=u[g].substring(0,y);D=u[g].substring(y+1)}else L=u[g];d(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ki(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ki){this.h=u.h,Yu(this,u.j),this.o=u.o,this.g=u.g,Xu(this,u.s),this.l=u.l;var d=u.i,g=new Pa;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),kv(this,g),this.m=u.m}else u&&(d=String(u).match(Cv))?(this.h=!1,Yu(this,d[1]||"",!0),this.o=Ra(d[2]||""),this.g=Ra(d[3]||"",!0),Xu(this,d[4]),this.l=Ra(d[5]||"",!0),kv(this,d[6]||"",!0),this.m=Ra(d[7]||"")):(this.h=!1,this.i=new Pa(null,this.h))}Ki.prototype.toString=function(){var u=[],d=this.j;d&&u.push(Aa(d,xv,!0),":");var g=this.g;return(g||d=="file")&&(u.push("//"),(d=this.o)&&u.push(Aa(d,xv,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(Aa(g,g.charAt(0)=="/"?FR:jR,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",Aa(g,BR)),u.join("")};function fr(u){return new Ki(u)}function Yu(u,d,g){u.j=g?Ra(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Xu(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function kv(u,d,g){d instanceof Pa?(u.i=d,zR(u.i,u.h)):(g||(d=Aa(d,UR)),u.i=new Pa(d,u.h))}function Ve(u,d,g){u.i.set(d,g)}function Ju(u){return Ve(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ra(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Aa(u,d,g){return typeof u=="string"?(u=encodeURI(u).replace(d,VR),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function VR(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var xv=/[#\/\?@]/g,jR=/[#\?:]/g,FR=/[#\?]/g,UR=/[#\?@]/g,BR=/#/g;function Pa(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Jr(u){u.g||(u.g=new Map,u.h=0,u.i&&MR(u.i,function(d,g){u.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=Pa.prototype,t.add=function(u,d){Jr(this),this.i=null,u=Qs(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(d),this.h+=1,this};function Rv(u,d){Jr(u),d=Qs(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function Av(u,d){return Jr(u),d=Qs(u,d),u.g.has(d)}t.forEach=function(u,d){Jr(this),this.g.forEach(function(g,y){g.forEach(function(D){u.call(d,D,y,this)},this)},this)},t.na=function(){Jr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let y=0;y<d.length;y++){const D=u[y];for(let L=0;L<D.length;L++)g.push(d[y])}return g},t.V=function(u){Jr(this);let d=[];if(typeof u=="string")Av(this,u)&&(d=d.concat(this.g.get(Qs(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)d=d.concat(u[g])}return d},t.set=function(u,d){return Jr(this),this.i=null,u=Qs(this,u),Av(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function Pv(u,d,g){Rv(u,d),0<g.length&&(u.i=null,u.g.set(Qs(u,d),A(g)),u.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var y=d[g];const L=encodeURIComponent(String(y)),W=this.V(y);for(y=0;y<W.length;y++){var D=L;W[y]!==""&&(D+="="+encodeURIComponent(String(W[y]))),u.push(D)}}return this.i=u.join("&")};function Qs(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function zR(u,d){d&&!u.j&&(Jr(u),u.i=null,u.g.forEach(function(g,y){var D=y.toLowerCase();y!=D&&(Rv(this,y),Pv(this,D,g))},u)),u.j=d}function WR(u,d){const g=new ka;if(a.Image){const y=new Image;y.onload=w(Zr,g,"TestLoadImage: loaded",!0,d,y),y.onerror=w(Zr,g,"TestLoadImage: error",!1,d,y),y.onabort=w(Zr,g,"TestLoadImage: abort",!1,d,y),y.ontimeout=w(Zr,g,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else d(!1)}function $R(u,d){const g=new ka,y=new AbortController,D=setTimeout(()=>{y.abort(),Zr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:y.signal}).then(L=>{clearTimeout(D),L.ok?Zr(g,"TestPingServer: ok",!0,d):Zr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Zr(g,"TestPingServer: error",!1,d)})}function Zr(u,d,g,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(g)}catch{}}function HR(){this.g=new $e}function qR(u,d,g){const y=g||"";try{Sv(u,function(D,L){let W=D;c(D)&&(W=We(D)),d.push(y+L+"="+encodeURIComponent(W))})}catch(D){throw d.push(y+"type="+encodeURIComponent("_badmap")),D}}function Zu(u){this.l=u.Ub||null,this.j=u.eb||!1}E(Zu,Oe),Zu.prototype.g=function(){return new ec(this.l,this.j)},Zu.prototype.i=function(u){return function(){return u}}({});function ec(u,d){rt.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(ec,rt),t=ec.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,ba(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Na(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ba(this)),this.g&&(this.readyState=3,ba(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?Na(this):ba(this),this.readyState==3&&Nv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Na(this))},t.Qa=function(u){this.g&&(this.response=u,Na(this))},t.ga=function(){this.g&&Na(this)};function Na(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ba(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=d.next();return u.join(`\r
`)};function ba(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function bv(u){let d="";return M(u,function(g,y){d+=y,d+=":",d+=g,d+=`\r
`}),d}function Nf(u,d,g){e:{for(y in g){var y=!1;break e}y=!0}y||(g=bv(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):Ve(u,d,g))}function Xe(u){rt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Xe,rt);var GR=/^https?$/i,KR=["POST","PUT"];t=Xe.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,g,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sf.g(),this.v=this.o?Yr(this.o):Yr(Sf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(L){Dv(this,L);return}if(u=g||"",g=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)g.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())g.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(KR,d,void 0))||y||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,W]of g)this.g.setRequestHeader(L,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mv(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){Dv(this,L)}};function Dv(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,Ov(u),tc(u)}function Ov(u){u.A||(u.A=!0,be(u,"complete"),be(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,be(this,"complete"),be(this,"abort"),tc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tc(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Lv(this):this.bb())},t.bb=function(){Lv(this)};function Lv(u){if(u.h&&typeof o<"u"&&(!u.v[1]||pr(u)!=4||u.Z()!=2)){if(u.u&&pr(u)==4)Ta(u.Ea,0,u);else if(be(u,"readystatechange"),pr(u)==4){u.h=!1;try{const W=u.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var y;if(y=W===0){var D=String(u.D).match(Cv)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!GR.test(D?D.toLowerCase():"")}g=y}if(g)be(u,"complete"),be(u,"success");else{u.m=6;try{var L=2<pr(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",Ov(u)}}finally{tc(u)}}}}function tc(u,d){if(u.g){Mv(u);const g=u.g,y=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||be(u,"ready");try{g.onreadystatechange=y}catch{}}}function Mv(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function pr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<pr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),Jt(d)}};function Vv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function QR(u){const d={};u=(u.g&&2<=pr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(T(u[y]))continue;var g=P(u[y]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=d[D]||[];d[D]=L,L.push(g)}C(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Da(u,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||d}function jv(u){this.Aa=0,this.i=[],this.j=new ka,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Da("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Da("baseRetryDelayMs",5e3,u),this.cb=Da("retryDelaySeedMs",1e4,u),this.Wa=Da("forwardChannelMaxRetries",2,u),this.wa=Da("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new vv(u&&u.concurrentRequestLimit),this.Da=new HR,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jv.prototype,t.la=8,t.G=1,t.connect=function(u,d,g,y){Ht(0),this.W=u,this.H=d||{},g&&y!==void 0&&(this.H.OSID=g,this.H.OAID=y),this.F=this.X,this.I=Gv(this,null,this.W),rc(this)};function bf(u){if(Fv(u),u.G==3){var d=u.U++,g=fr(u.I);if(Ve(g,"SID",u.K),Ve(g,"RID",d),Ve(g,"TYPE","terminate"),Oa(u,g),d=new Xr(u,u.j,d),d.L=2,d.v=Ju(fr(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=Kv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Qu(d)}qv(u)}function nc(u){u.g&&(Of(u),u.g.cancel(),u.g=null)}function Fv(u){nc(u),u.u&&(a.clearTimeout(u.u),u.u=null),ic(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function rc(u){if(!wv(u.h)&&!u.s){u.s=!0;var d=u.Ga;Et||te(),$||(Et(),$=!0),Q.add(d,u),u.B=0}}function YR(u,d){return Ev(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ca(m(u.Ga,u,d),Hv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new Xr(this,this.j,u);let L=this.o;if(this.S&&(L?(L=v(L),x(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var y=this.i[g];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Bv(this,D,d),g=fr(this.I),Ve(g,"RID",u),Ve(g,"CVER",22),this.D&&Ve(g,"X-HTTP-Session-Id",this.D),Oa(this,g),L&&(this.O?d="headers="+encodeURIComponent(String(bv(L)))+"&"+d:this.m&&Nf(g,this.m,L)),Pf(this.h,D),this.Ua&&Ve(g,"TYPE","init"),this.P?(Ve(g,"$req",d),Ve(g,"SID","null"),D.T=!0,kf(D,g,null)):kf(D,g,d),this.G=2}}else this.G==3&&(u?Uv(this,u):this.i.length==0||wv(this.h)||Uv(this))};function Uv(u,d){var g;d?g=d.l:g=u.U++;const y=fr(u.I);Ve(y,"SID",u.K),Ve(y,"RID",g),Ve(y,"AID",u.T),Oa(u,y),u.m&&u.o&&Nf(y,u.m,u.o),g=new Xr(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),d&&(u.i=d.D.concat(u.i)),d=Bv(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Pf(u.h,g),kf(g,y,d)}function Oa(u,d){u.H&&M(u.H,function(g,y){Ve(d,y,g)}),u.l&&Sv({},function(g,y){Ve(d,y,g)})}function Bv(u,d,g){g=Math.min(u.i.length,g);var y=u.l?m(u.l.Na,u.l,u):null;e:{var D=u.i;let L=-1;for(;;){const W=["count="+g];L==-1?0<g?(L=D[0].g,W.push("ofs="+L)):L=0:W.push("ofs="+L);let Pe=!0;for(let Tt=0;Tt<g;Tt++){let ve=D[Tt].g;const Ot=D[Tt].map;if(ve-=L,0>ve)L=Math.max(0,D[Tt].g-100),Pe=!1;else try{qR(Ot,W,"req"+ve+"_")}catch{y&&y(Ot)}}if(Pe){y=W.join("&");break e}}}return u=u.i.splice(0,g),d.D=u,y}function zv(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;Et||te(),$||(Et(),$=!0),Q.add(d,u),u.v=0}}function Df(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ca(m(u.Fa,u),Hv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Wv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ca(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ht(10),nc(this),Wv(this))};function Of(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Wv(u){u.g=new Xr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=fr(u.qa);Ve(d,"RID","rpc"),Ve(d,"SID",u.K),Ve(d,"AID",u.T),Ve(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ve(d,"TO",u.ja),Ve(d,"TYPE","xmlhttp"),Oa(u,d),u.m&&u.o&&Nf(d,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Ju(fr(d)),g.m=null,g.P=!0,gv(g,u)}t.Za=function(){this.C!=null&&(this.C=null,nc(this),Df(this),Ht(19))};function ic(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function $v(u,d){var g=null;if(u.g==d){ic(u),Of(u),u.g=null;var y=2}else if(Af(u.h,d))g=d.D,Tv(u.h,d),y=1;else return;if(u.G!=0){if(d.o)if(y==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var D=u.B;y=qu(),be(y,new dv(y,g)),rc(u)}else zv(u);else if(D=d.s,D==3||D==0&&0<d.X||!(y==1&&YR(u,d)||y==2&&Df(u)))switch(g&&0<g.length&&(d=u.h,d.i=d.i.concat(g)),D){case 1:Qi(u,5);break;case 4:Qi(u,10);break;case 3:Qi(u,6);break;default:Qi(u,2)}}}function Hv(u,d){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*d}function Qi(u,d){if(u.j.info("Error code "+d),d==2){var g=m(u.fb,u),y=u.Xa;const D=!y;y=new Ki(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Yu(y,"https"),Ju(y),D?WR(y.toString(),g):$R(y.toString(),g)}else Ht(2);u.G=0,u.l&&u.l.sa(d),qv(u),Fv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function qv(u){if(u.G=0,u.ka=[],u.l){const d=Iv(u.h);(d.length!=0||u.i.length!=0)&&(N(u.ka,d),N(u.ka,u.i),u.h.i.length=0,A(u.i),u.i.length=0),u.l.ra()}}function Gv(u,d,g){var y=g instanceof Ki?fr(g):new Ki(g);if(y.g!="")d&&(y.g=d+"."+y.g),Xu(y,y.s);else{var D=a.location;y=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var L=new Ki(null);y&&Yu(L,y),d&&(L.g=d),D&&Xu(L,D),g&&(L.l=g),y=L}return g=u.D,d=u.ya,g&&d&&Ve(y,g,d),Ve(y,"VER",u.la),Oa(u,y),y}function Kv(u,d,g){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Xe(new Zu({eb:g})):new Xe(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qv(){}t=Qv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function sc(){}sc.prototype.g=function(u,d){return new hn(u,d)};function hn(u,d){rt.call(this),this.g=new jv(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!T(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Ys(this)}E(hn,rt),hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){bf(this.g)},hn.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=We(u),u=g);d.i.push(new DR(d.Ya++,u)),d.G==3&&rc(d)},hn.prototype.N=function(){this.g.l=null,delete this.j,bf(this.g),delete this.g,hn.aa.N.call(this)};function Yv(u){Tf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const g in d){u=g;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}E(Yv,Tf);function Xv(){If.call(this),this.status=1}E(Xv,If);function Ys(u){this.g=u}E(Ys,Qv),Ys.prototype.ua=function(){be(this.g,"a")},Ys.prototype.ta=function(u){be(this.g,new Yv(u))},Ys.prototype.sa=function(u){be(this.g,new Xv)},Ys.prototype.ra=function(){be(this.g,"b")},sc.prototype.createWebChannel=sc.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,uk=function(){return new sc},lk=function(){return qu()},ak=qi,Fm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gu.NO_ERROR=0,Gu.TIMEOUT=8,Gu.HTTP_ERROR=6,Xc=Gu,fv.COMPLETE="complete",ok=fv,Hu.EventType=Ia,Ia.OPEN="a",Ia.CLOSE="b",Ia.ERROR="c",Ia.MESSAGE="d",rt.prototype.listen=rt.prototype.K,nl=Hu,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,sk=Xe}).apply(typeof Cc<"u"?Cc:typeof self<"u"?self:typeof window<"u"?window:{});const qw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let ua="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Pd("@firebase/firestore");function Wa(){return Is.logLevel}function K(t,...e){if(Is.logLevel<=fe.DEBUG){const n=e.map(xy);Is.debug(`Firestore (${ua}): ${t}`,...n)}}function jr(t,...e){if(Is.logLevel<=fe.ERROR){const n=e.map(xy);Is.error(`Firestore (${ua}): ${t}`,...n)}}function Wo(t,...e){if(Is.logLevel<=fe.WARN){const n=e.map(xy);Is.warn(`Firestore (${ua}): ${t}`,...n)}}function xy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${ua}) INTERNAL ASSERTION FAILED: `+t;throw jr(e),new Error(e)}function xe(t,e){t||re()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ck{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ft.UNAUTHENTICATED))}shutdown(){}}class gL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yL{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new ck(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new Ft(e)}}class _L{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _L(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new wL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function $o(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new dt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new dt(0,0))}static max(){return new ie(new dt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Kl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Kl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Kl{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const IL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Kl{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return IL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Fe.fromString(e))}static fromName(e){return new J(Fe.fromString(e).popFirst(5))}static empty(){return new J(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Fe(e.slice()))}}function SL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new dt(n+1,0):new dt(n,r));return new Pi(i,J.empty(),e)}function CL(t){return new Pi(t.readTime,t.key,-1)}class Pi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pi(ie.min(),J.empty(),-1)}static max(){return new Pi(ie.max(),J.empty(),-1)}}function kL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==xL)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function AL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Cu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ry{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ry.oe=-1;function Md(t){return t==null}function Fh(t){return t===0&&1/t==-1/0}function PL(t){return typeof t=="number"&&Number.isInteger(t)&&!Fh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lt=class Um{constructor(e,n){this.comparator=e,this.root=n||Ii.EMPTY}insert(e,n){return new Um(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ii.BLACK,null,null))}remove(e){return new Um(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ii.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kc(this.root,e,this.comparator,!1)}getReverseIterator(){return new kc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kc(this.root,e,this.comparator,!0)}},kc=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ii=class mr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mr.RED,this.left=i??mr.EMPTY,this.right=s??mr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new mr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}};Ii.EMPTY=null,Ii.RED=!0,Ii.BLACK=!1;Ii.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ii(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Kw(this.data.getIterator())}getIteratorFrom(e){return new Kw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class Kw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new pn([])}unionWith(e){let n=new Rt(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $o(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class fk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new fk("Invalid base64 string: "+s):s}}(e);return new Nt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const NL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(t){if(xe(!!t),typeof t=="string"){let e=0;const n=NL.exec(t);if(xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ss(t){return typeof t=="string"?Nt.fromBase64String(t):Nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Py(t){const e=t.mapValue.fields.__previous_value__;return Ay(e)?Py(e):e}function Ql(t){const e=Ni(t.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Yl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc={mapValue:{}};function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ay(t)?4:OL(t)?9007199254740991:DL(t)?10:11:re()}function ar(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ql(t).isEqual(Ql(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ni(i.timestampValue),a=Ni(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ss(i.bytesValue).isEqual(Ss(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return et(i.geoPointValue.latitude)===et(s.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return et(i.integerValue)===et(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=et(i.doubleValue),a=et(s.doubleValue);return o===a?Fh(o)===Fh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return $o(t.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Gw(o)!==Gw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ar(o[l],a[l])))return!1;return!0}(t,e);default:return re()}}function Xl(t,e){return(t.values||[]).find(n=>ar(n,e))!==void 0}function Ho(t,e){if(t===e)return 0;const n=Cs(t),r=Cs(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=et(s.integerValue||s.doubleValue),l=et(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Qw(t.timestampValue,e.timestampValue);case 4:return Qw(Ql(t),Ql(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ss(s),l=Ss(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=we(a[c],l[c]);if(h!==0)return h}return we(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=we(et(s.latitude),et(o.latitude));return a!==0?a:we(et(s.longitude),et(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},m=o.fields||{},w=(a=f.value)===null||a===void 0?void 0:a.arrayValue,E=(l=m.value)===null||l===void 0?void 0:l.arrayValue,A=we(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:Yw(w,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===xc.mapValue&&o===xc.mapValue)return 0;if(s===xc.mapValue)return 1;if(o===xc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=we(l[f],h[f]);if(m!==0)return m;const w=Ho(a[l[f]],c[h[f]]);if(w!==0)return w}return we(l.length,h.length)}(t.mapValue,e.mapValue);default:throw re()}}function Qw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Ni(t),r=Ni(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function Yw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ho(n[i],r[i]);if(s)return s}return we(n.length,r.length)}function qo(t){return Bm(t)}function Bm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ni(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bm(n.fields[o])}`;return i+"}"}(t.mapValue):re()}function Xw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zm(t){return!!t&&"integerValue"in t}function Ny(t){return!!t&&"arrayValue"in t}function Jw(t){return!!t&&"nullValue"in t}function Zw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jc(t){return!!t&&"mapValue"in t}function DL(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function gl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Jc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gl(n)}setAll(e){let n=kt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=gl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Jc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Jc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new en(gl(this.value))}}function pk(t){const e=[];return Fs(t.fields,(n,r)=>{const i=new kt([n]);if(Jc(r)){const s=pk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Bt(e,0,ie.min(),ie.min(),ie.min(),en.empty(),0)}static newFoundDocument(e,n,r,i){return new Bt(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new Bt(e,2,n,ie.min(),ie.min(),en.empty(),0)}static newUnknownDocument(e,n){return new Bt(e,3,n,ie.min(),ie.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Uh{constructor(e,n){this.position=e,this.inclusive=n}}function eE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Ho(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ar(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jl{constructor(e,n="asc"){this.field=e,this.dir=n}}function LL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class mk{}class ot extends mk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VL(e,n,r):n==="array-contains"?new UL(e,r):n==="in"?new BL(e,r):n==="not-in"?new zL(e,r):n==="array-contains-any"?new WL(e,r):new ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jL(e,r):new FL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ho(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.matchesComparison(Ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends mk{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Yn(e,n)}matches(e){return gk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gk(t){return t.op==="and"}function yk(t){return ML(t)&&gk(t)}function ML(t){for(const e of t.filters)if(e instanceof Yn)return!1;return!0}function Wm(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+qo(t.value);if(yk(t))return t.filters.map(e=>Wm(e)).join(",");{const e=t.filters.map(n=>Wm(n)).join(",");return`${t.op}(${e})`}}function _k(t,e){return t instanceof ot?function(r,i){return i instanceof ot&&r.op===i.op&&r.field.isEqual(i.field)&&ar(r.value,i.value)}(t,e):t instanceof Yn?function(r,i){return i instanceof Yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&_k(o,i.filters[a]),!0):!1}(t,e):void re()}function vk(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${qo(n.value)}`}(t):t instanceof Yn?function(n){return n.op.toString()+" {"+n.getFilters().map(vk).join(" ,")+"}"}(t):"Filter"}class VL extends ot{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class jL extends ot{constructor(e,n){super(e,"in",n),this.keys=wk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FL extends ot{constructor(e,n){super(e,"not-in",n),this.keys=wk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class UL extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ny(n)&&Xl(n.arrayValue,this.value)}}class BL extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xl(this.value.arrayValue,n)}}class zL extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xl(this.value.arrayValue,n)}}class WL extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ny(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xl(this.value.arrayValue,r))}}/**
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
 */class $L{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function nE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $L(t,e,n,r,i,s,o)}function by(t){const e=se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Md(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qo(r)).join(",")),e.ue=n}return e.ue}function Dy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_k(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tE(t.startAt,e.startAt)&&tE(t.endAt,e.endAt)}function $m(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function HL(t,e,n,r,i,s,o,a){return new ca(t,e,n,r,i,s,o,a)}function Vd(t){return new ca(t)}function rE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ek(t){return t.collectionGroup!==null}function yl(t){const e=se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Rt(kt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Jl(s,r))}),n.has(kt.keyField().canonicalString())||e.ce.push(new Jl(kt.keyField(),r))}return e.ce}function sr(t){const e=se(t);return e.le||(e.le=qL(e,yl(t))),e.le}function qL(t,e){if(t.limitType==="F")return nE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Jl(i.field,s)});const n=t.endAt?new Uh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Uh(t.startAt.position,t.startAt.inclusive):null;return nE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hm(t,e){const n=t.filters.concat([e]);return new ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bh(t,e,n){return new ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jd(t,e){return Dy(sr(t),sr(e))&&t.limitType===e.limitType}function Tk(t){return`${by(sr(t))}|lt:${t.limitType}`}function ro(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>vk(i)).join(", ")}]`),Md(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qo(i)).join(",")),`Target(${r})`}(sr(t))}; limitType=${t.limitType})`}function Fd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of yl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=eE(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,yl(r),i)||r.endAt&&!function(o,a,l){const c=eE(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,yl(r),i))}(t,e)}function GL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ik(t){return(e,n)=>{let r=!1;for(const i of yl(t)){const s=KL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KL(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Ho(l,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return dk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL=new lt(J.comparator);function Fr(){return QL}const Sk=new lt(J.comparator);function rl(...t){let e=Sk;for(const n of t)e=e.insert(n.key,n);return e}function Ck(t){let e=Sk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function as(){return _l()}function kk(){return _l()}function _l(){return new ha(t=>t.toString(),(t,e)=>t.isEqual(e))}const YL=new lt(J.comparator),XL=new Rt(J.comparator);function pe(...t){let e=XL;for(const n of t)e=e.add(n);return e}const JL=new Rt(we);function ZL(){return JL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fh(e)?"-0":e}}function xk(t){return{integerValue:""+t}}function Rk(t,e){return PL(e)?xk(e):Oy(t,e)}/**
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
 */class Ud{constructor(){this._=void 0}}function eM(t,e,n){return t instanceof Zl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ay(s)&&(s=Py(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Go?Pk(t,e):t instanceof Ko?Nk(t,e):function(i,s){const o=Ak(i,s),a=iE(o)+iE(i.Pe);return zm(o)&&zm(i.Pe)?xk(a):Oy(i.serializer,a)}(t,e)}function tM(t,e,n){return t instanceof Go?Pk(t,e):t instanceof Ko?Nk(t,e):n}function Ak(t,e){return t instanceof eu?function(r){return zm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Zl extends Ud{}class Go extends Ud{constructor(e){super(),this.elements=e}}function Pk(t,e){const n=bk(e);for(const r of t.elements)n.some(i=>ar(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ko extends Ud{constructor(e){super(),this.elements=e}}function Nk(t,e){let n=bk(e);for(const r of t.elements)n=n.filter(i=>!ar(i,r));return{arrayValue:{values:n}}}class eu extends Ud{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function iE(t){return et(t.integerValue||t.doubleValue)}function bk(t){return Ny(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n){this.field=e,this.transform=n}}function nM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Go&&i instanceof Go||r instanceof Ko&&i instanceof Ko?$o(r.elements,i.elements,ar):r instanceof eu&&i instanceof eu?ar(r.Pe,i.Pe):r instanceof Zl&&i instanceof Zl}(t.transform,e.transform)}class rM{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zd{}function Dk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ly(t.key,kn.none()):new ku(t.key,t.data,kn.none());{const n=t.data,r=en.empty();let i=new Rt(kt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new $i(t.key,r,new pn(i.toArray()),kn.none())}}function iM(t,e,n){t instanceof ku?function(i,s,o){const a=i.value.clone(),l=oE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof $i?function(i,s,o){if(!Zc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=oE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Ok(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vl(t,e,n,r){return t instanceof ku?function(s,o,a,l){if(!Zc(s.precondition,o))return a;const c=s.value.clone(),h=aE(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof $i?function(s,o,a,l){if(!Zc(s.precondition,o))return a;const c=aE(s.fieldTransforms,l,o),h=o.data;return h.setAll(Ok(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Zc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function sM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Ak(r.transform,i||null);s!=null&&(n===null&&(n=en.empty()),n.set(r.field,s))}return n||null}function sE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&$o(r,i,(s,o)=>nM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ku extends zd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $i extends zd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ok(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function oE(t,e,n){const r=new Map;xe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,tM(o,a,n[i]))}return r}function aE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,eM(s,o,e))}return r}class Ly extends zd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oM extends zd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&iM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Dk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&$o(this.mutations,e.mutations,(n,r)=>sE(n,r))&&$o(this.baseMutations,e.baseMutations,(n,r)=>sE(n,r))}}class My{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){xe(e.mutations.length===r.length);let i=function(){return YL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new My(e,n,r,i)}}/**
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
 */class lM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,ye;function cM(t){switch(t){default:return re();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Lk(t){if(t===void 0)return jr("GRPC error has no .code"),V.UNKNOWN;switch(t){case it.OK:return V.OK;case it.CANCELLED:return V.CANCELLED;case it.UNKNOWN:return V.UNKNOWN;case it.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case it.INTERNAL:return V.INTERNAL;case it.UNAVAILABLE:return V.UNAVAILABLE;case it.UNAUTHENTICATED:return V.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case it.NOT_FOUND:return V.NOT_FOUND;case it.ALREADY_EXISTS:return V.ALREADY_EXISTS;case it.PERMISSION_DENIED:return V.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case it.ABORTED:return V.ABORTED;case it.OUT_OF_RANGE:return V.OUT_OF_RANGE;case it.UNIMPLEMENTED:return V.UNIMPLEMENTED;case it.DATA_LOSS:return V.DATA_LOSS;default:return re()}}(ye=it||(it={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hM(){return new TextEncoder}/**
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
 */const dM=new ps([4294967295,4294967295],0);function lE(t){const e=hM().encode(t),n=new ik;return n.update(e),new Uint8Array(n.digest())}function uE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ps([n,r],0),new ps([i,s],0)]}class Vy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new il(`Invalid padding: ${n}`);if(r<0)throw new il(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new il(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new il(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ps.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ps.fromNumber(r)));return i.compare(dM)===1&&(i=new ps([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=lE(e),[r,i]=uE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Vy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=lE(e),[r,i]=uE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,xu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wd(ie.min(),i,new lt(we),Fr(),pe())}}class xu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xu(r,n,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Mk{constructor(e,n){this.targetId=e,this.me=n}}class Vk{constructor(e,n,r=Nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class cE{constructor(){this.fe=0,this.ge=dE(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=pe(),n=pe(),r=pe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new xu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=dE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fr(),this.qe=hE(),this.Qe=new lt(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if($m(s))if(r===0){const o=new J(s.path);this.Ue(n,o,Bt.newNoDocument(o,ie.min()))}else xe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ss(r).toUint8Array()}catch(l){if(l instanceof fk)return Wo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Vy(o,i,s)}catch(l){return Wo(l instanceof il?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&$m(a.target)){const l=new J(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Bt.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=pe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Wd(e,n,this.Qe,this.ke,r);return this.ke=Fr(),this.qe=hE(),this.Qe=new lt(we),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new cE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Rt(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new cE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function hE(){return new lt(J.comparator)}function dE(){return new lt(J.comparator)}const pM={asc:"ASCENDING",desc:"DESCENDING"},mM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gM={and:"AND",or:"OR"};class yM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qm(t,e){return t.useProto3Json||Md(e)?e:{value:e}}function zh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _M(t,e){return zh(t,e.toTimestamp())}function or(t){return xe(!!t),ie.fromTimestamp(function(n){const r=Ni(n);return new dt(r.seconds,r.nanos)}(t))}function jy(t,e){return Gm(t,e).canonicalString()}function Gm(t,e){const n=function(i){return new Fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Fk(t){const e=Fe.fromString(t);return xe($k(e)),e}function Km(t,e){return jy(t.databaseId,e.path)}function yp(t,e){const n=Fk(e);if(n.get(1)!==t.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(Bk(n))}function Uk(t,e){return jy(t.databaseId,e)}function vM(t){const e=Fk(t);return e.length===4?Fe.emptyPath():Bk(e)}function Qm(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bk(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fE(t,e,n){return{name:Km(t,e),fields:n.value.mapValue.fields}}function wM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(xe(h===void 0||typeof h=="string"),Nt.fromBase64String(h||"")):(xe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Nt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?V.UNKNOWN:Lk(c.code);return new q(h,c.message||"")}(o);n=new Vk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yp(t,r.document.name),s=or(r.document.updateTime),o=r.document.createTime?or(r.document.createTime):ie.min(),a=new en({mapValue:{fields:r.document.fields}}),l=Bt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new eh(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yp(t,r.document),s=r.readTime?or(r.readTime):ie.min(),o=Bt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new eh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yp(t,r.document),s=r.removedTargetIds||[];n=new eh([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new uM(i,s),a=r.targetId;n=new Mk(a,o)}}return n}function EM(t,e){let n;if(e instanceof ku)n={update:fE(t,e.key,e.value)};else if(e instanceof Ly)n={delete:Km(t,e.key)};else if(e instanceof $i)n={update:fE(t,e.key,e.data),updateMask:PM(e.fieldMask)};else{if(!(e instanceof oM))return re();n={verify:Km(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Zl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof eu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_M(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(t,e.precondition)),n}function TM(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?or(i.updateTime):or(s);return o.isEqual(ie.min())&&(o=or(s)),new rM(o,i.transformResults||[])}(n,e))):[]}function IM(t,e){return{documents:[Uk(t,e.path)]}}function SM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Uk(t,i);const s=function(c){if(c.length!==0)return Wk(Yn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:io(m.field),direction:xM(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=qm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function CM(t){let e=vM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){xe(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=zk(f);return m instanceof Yn&&yk(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(E){return new Jl(so(E.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Md(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,w=f.values||[];return new Uh(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,w=f.values||[];return new Uh(w,m)}(n.endAt)),HL(e,i,o,s,a,"F",l,c)}function kM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=so(n.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=so(n.unaryFilter.field);return ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=so(n.unaryFilter.field);return ot.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=so(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(so(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yn.create(n.compositeFilter.filters.map(r=>zk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function xM(t){return pM[t]}function RM(t){return mM[t]}function AM(t){return gM[t]}function io(t){return{fieldPath:t.canonicalString()}}function so(t){return kt.fromServerFormat(t.fieldPath)}function Wk(t){return t instanceof ot?function(n){if(n.op==="=="){if(Zw(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NAN"}};if(Jw(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zw(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NOT_NAN"}};if(Jw(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:io(n.field),op:RM(n.op),value:n.value}}}(t):t instanceof Yn?function(n){const r=n.getFilters().map(i=>Wk(i));return r.length===1?r[0]:{compositeFilter:{op:AM(n.op),filters:r}}}(t):re()}function PM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $k(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r,i,s=ie.min(),o=ie.min(),a=Nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e){this.ct=e}}function bM(t){const e=CM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bh(e,e.limit,"L"):e}/**
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
 */class DM{constructor(){this.un=new OM}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Pi.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Pi.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class OM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Rt(Fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Rt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Qo(0)}static kn(){return new Qo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(){this.changes=new ha(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class MM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vl(r.mutation,i,pn.empty(),dt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const i=as();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=rl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=as();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Fr();const o=_l(),a=function(){return _l()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof $i)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),vl(h.mutation,c,h.mutation.getFieldMask(),dt.now())):o.set(c.key,pn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new MM(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=_l();let i=new lt((o,a)=>o-a),s=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||pn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||pe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=kk();h.forEach(m=>{if(!s.has(m)){const w=Dk(n.get(m),r.get(m));w!==null&&f.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ek(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(as());let a=-1,l=s;return o.next(c=>U.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,pe())).next(h=>({batchId:a,changes:Ck(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=rl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=rl();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,l=>{const c=function(f,m){return new ca(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Bt.newInvalidDocument(h)))});let a=rl();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&vl(h.mutation,c,pn.empty(),dt.now()),Fd(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:or(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:bM(i.bundledQuery),readTime:or(i.readTime)}}(n)),U.resolve()}}/**
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
 */class FM{constructor(){this.overlays=new lt(J.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=as();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=as(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new lt((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=as(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=as(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lM(n,r));let s=this.Ir.get(n);s===void 0&&(s=pe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class UM{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.Tr=new Rt(mt.Er),this.dr=new Rt(mt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new mt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new mt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new Fe([])),r=new mt(n,e),i=new mt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new Fe([])),r=new mt(n,e),i=new mt(n,e+1);let s=pe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new mt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Rt(mt.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new mt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),i=new mt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Rt(we);return n.forEach(i=>{const s=new mt(i,0),o=new mt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new mt(new J(s),0);let a=new Rt(we);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){xe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new mt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new mt(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.Mr=e,this.docs=function(){return new lt(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Bt.newInvalidDocument(n))}getEntries(e,n){let r=Fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Bt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fr();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||kL(CL(h),r)<=0||(i.has(h.key)||Fd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WM(this)}getSize(e){return U.resolve(this.size)}}class WM extends LM{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e){this.persistence=e,this.Nr=new ha(n=>by(n),Dy),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Fy,this.targetCount=0,this.kr=Qo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Qo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ry(0),this.Kr=!1,this.Kr=!0,this.$r=new UM,this.referenceDelegate=e(this),this.Ur=new $M(this),this.indexManager=new DM,this.remoteDocumentCache=function(i){return new zM(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new NM(n),this.Gr=new jM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new BM(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new qM(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class qM extends RL{constructor(e){super(),this.currentSequenceNumber=e}}class Uy{constructor(e){this.persistence=e,this.Jr=new Fy,this.Yr=null}static Zr(e){return new Uy(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=pe(),i=pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new By(e,n.fromCache,r,i)}}/**
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
 */class GM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Db()?8:AL($t())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new GM;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Wa()<=fe.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",ro(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Wa()<=fe.DEBUG&&K("QueryEngine","Query:",ro(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Wa()<=fe.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",ro(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(n))):U.resolve())}Yi(e,n){if(rE(n))return U.resolve(null);let r=sr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Bh(n,null,"F"),r=sr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=pe(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,Bh(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return rE(n)||i.isEqual(ie.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(Wa()<=fe.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ro(n)),this.rs(e,o,n,SL(i,-1)).next(a=>a))})}ts(e,n){let r=new Rt(Ik(e));return n.forEach((i,s)=>{Fd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Wa()<=fe.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",ro(n)),this.Ji.getDocumentsMatchingQuery(e,n,Pi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new lt(we),this._s=new ha(s=>by(s),Dy),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function YM(t,e,n,r){return new QM(t,e,n,r)}async function Hk(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=pe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function XM(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,m=f.keys();let w=U.resolve();return m.forEach(E=>{w=w.next(()=>h.getEntry(l,E)).next(A=>{const N=c.docVersions.get(E);xe(N!==null),A.version.compareTo(N)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=pe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function qk(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function JM(t,e){const n=se(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(Nt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),i=i.insert(f,w),function(A,N,I){return A.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,w,h)&&a.push(n.Ur.updateTargetData(s,w))});let l=Fr(),c=pe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(ZM(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(ie.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function ZM(t,e,n){let r=pe(),i=pe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fr();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function eV(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function tV(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new di(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ym(t,e,n){const r=se(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Cu(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function pE(t,e,n){const r=se(t);let i=ie.min(),s=pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=se(l),m=f._s.get(h);return m!==void 0?U.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,sr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ie.min(),n?s:pe())).next(a=>(nV(r,GL(e),a),{documents:a,Ts:s})))}function nV(t,e,n){let r=t.us.get(e)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class mE{constructor(){this.activeTargetIds=ZL()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rV{constructor(){this.so=new mE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new mE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iV{_o(e){}shutdown(){}}/**
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
 */class gE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rc=null;function _p(){return Rc===null?Rc=function(){return 268435456+Math.round(2147483648*Math.random())}():Rc++,"0x"+Rc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class aV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=_p(),l=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(K("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Wo("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ua}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=sV[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=_p();return new Promise((o,a)=>{const l=new sk;l.setWithCredentials(!0),l.listenOnce(ok.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Xc.NO_ERROR:const h=l.getResponseJson();K(jt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Xc.TIMEOUT:K(jt,`RPC '${e}' ${s} timed out`),a(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case Xc.HTTP_ERROR:const f=l.getStatus();if(K(jt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const E=function(N){const I=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(I)>=0?I:V.UNKNOWN}(w.status);a(new q(E,w.message))}else a(new q(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(V.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{K(jt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);K(jt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=_p(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uk(),a=lk(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");K(jt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,w=!1;const E=new oV({Io:N=>{w?K(jt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(K(jt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),K(jt,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},To:()=>f.close()}),A=(N,I,T)=>{N.listen(I,k=>{try{T(k)}catch(O){setTimeout(()=>{throw O},0)}})};return A(f,nl.EventType.OPEN,()=>{w||(K(jt,`RPC '${e}' stream ${i} transport opened.`),E.yo())}),A(f,nl.EventType.CLOSE,()=>{w||(w=!0,K(jt,`RPC '${e}' stream ${i} transport closed`),E.So())}),A(f,nl.EventType.ERROR,N=>{w||(w=!0,Wo(jt,`RPC '${e}' stream ${i} transport errored:`,N),E.So(new q(V.UNAVAILABLE,"The operation could not be completed")))}),A(f,nl.EventType.MESSAGE,N=>{var I;if(!w){const T=N.data[0];xe(!!T);const k=T,O=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(O){K(jt,`RPC '${e}' stream ${i} received error:`,O);const F=O.status;let M=function(S){const x=it[S];if(x!==void 0)return Lk(x)}(F),C=O.message;M===void 0&&(M=V.INTERNAL,C="Unknown error status: "+F+" with message "+O.message),w=!0,E.So(new q(M,C)),f.close()}else K(jt,`RPC '${e}' stream ${i} received:`,T),E.bo(T)}}),A(a,ak.STAT_EVENT,N=>{N.stat===Fm.PROXY?K(jt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Fm.NOPROXY&&K(jt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function vp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t){return new yM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Gk(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(jr(n.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lV extends Kk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=wM(this.serializer,e),r=function(s){if(!("targetChange"in s))return ie.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?or(o.readTime):ie.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Qm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=$m(l)?{documents:IM(s,l)}:{query:SM(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=jk(s,o.resumeToken);const c=qm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ie.min())>0){a.readTime=zh(s,o.snapshotVersion.toTimestamp());const c=qm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=kM(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Qm(this.serializer),n.removeTarget=e,this.a_(n)}}class uV extends Kk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=TM(e.writeResults,e.commitTime),r=or(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Qm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>EM(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Gm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Gm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class hV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(jr(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Us(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=se(l);c.L_.add(4),await Ru(c),c.q_.set("Unknown"),c.L_.delete(4),await Hd(c)}(this))})}),this.q_=new hV(r,i)}}async function Hd(t){if(Us(t))for(const e of t.B_)await e(!0)}async function Ru(t){for(const e of t.B_)await e(!1)}function Qk(t,e){const n=se(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Hy(n)?$y(n):da(n).r_()&&Wy(n,e))}function zy(t,e){const n=se(t),r=da(n);n.N_.delete(e),r.r_()&&Yk(n,e),n.N_.size===0&&(r.r_()?r.o_():Us(n)&&n.q_.set("Unknown"))}function Wy(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}da(t).A_(e)}function Yk(t,e){t.Q_.xe(e),da(t).R_(e)}function $y(t){t.Q_=new fM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),da(t).start(),t.q_.v_()}function Hy(t){return Us(t)&&!da(t).n_()&&t.N_.size>0}function Us(t){return se(t).L_.size===0}function Xk(t){t.Q_=void 0}async function fV(t){t.q_.set("Online")}async function pV(t){t.N_.forEach((e,n)=>{Wy(t,e)})}async function mV(t,e){Xk(t),Hy(t)?(t.q_.M_(e),$y(t)):t.q_.set("Unknown")}async function gV(t,e,n){if(t.q_.set("Online"),e instanceof Vk&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wh(t,r)}else if(e instanceof eh?t.Q_.Ke(e):e instanceof Mk?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ie.min()))try{const r=await qk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(Nt.EMPTY_BYTE_STRING,h.snapshotVersion)),Yk(s,l);const f=new di(h.target,l,c,h.sequenceNumber);Wy(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Wh(t,r)}}async function Wh(t,e,n){if(!Cu(e))throw e;t.L_.add(1),await Ru(t),t.q_.set("Offline"),n||(n=()=>qk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Hd(t)})}function Jk(t,e){return e().catch(n=>Wh(t,n,e))}async function qd(t){const e=se(t),n=bi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;yV(e);)try{const i=await eV(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,_V(e,i)}catch(i){await Wh(e,i)}Zk(e)&&ex(e)}function yV(t){return Us(t)&&t.O_.length<10}function _V(t,e){t.O_.push(e);const n=bi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Zk(t){return Us(t)&&!bi(t).n_()&&t.O_.length>0}function ex(t){bi(t).start()}async function vV(t){bi(t).p_()}async function wV(t){const e=bi(t);for(const n of t.O_)e.m_(n.mutations)}async function EV(t,e,n){const r=t.O_.shift(),i=My.from(r,e,n);await Jk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qd(t)}async function TV(t,e){e&&bi(t).V_&&await async function(r,i){if(function(o){return cM(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();bi(r).s_(),await Jk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qd(r)}}(t,e),Zk(t)&&ex(t)}async function yE(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Us(n);n.L_.add(3),await Ru(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Hd(n)}async function IV(t,e){const n=se(t);e?(n.L_.delete(2),await Hd(n)):e||(n.L_.add(2),await Ru(n),n.q_.set("Unknown"))}function da(t){return t.K_||(t.K_=function(n,r,i){const s=se(n);return s.w_(),new lV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:fV.bind(null,t),Ro:pV.bind(null,t),mo:mV.bind(null,t),d_:gV.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Hy(t)?$y(t):t.q_.set("Unknown")):(await t.K_.stop(),Xk(t))})),t.K_}function bi(t){return t.U_||(t.U_=function(n,r,i){const s=se(n);return s.w_(),new uV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:vV.bind(null,t),mo:TV.bind(null,t),f_:wV.bind(null,t),g_:EV.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await qd(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new qy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gy(t,e){if(jr("AsyncQueue",`${e}: ${t}`),Cu(t))return new q(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=rl(),this.sortedSet=new lt(this.comparator)}static emptySet(e){return new Ao(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ao;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.W_=new lt(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Yo{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Yo(e,n,Ao.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class CV{constructor(){this.queries=vE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=se(n),s=i.queries;i.queries=vE(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new q(V.ABORTED,"Firestore shutting down"))}}function vE(){return new ha(t=>Tk(t),jd)}async function Ky(t,e){const n=se(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new SV,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Gy(o,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Yy(n)}async function Qy(t,e){const n=se(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kV(t,e){const n=se(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Yy(n)}function xV(t,e,n){const r=se(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Yy(t){t.Y_.forEach(e=>{e.next()})}var Xm,wE;(wE=Xm||(Xm={})).ea="default",wE.Cache="cache";class Xy{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Yo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.key=e}}class nx{constructor(e){this.key=e}}class RV{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=pe(),this.mutatedKeys=pe(),this.Aa=Ik(e),this.Ra=new Ao(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new _E,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),w=Fd(this.query,f)?f:null,E=!!m&&this.mutatedKeys.has(m.key),A=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;m&&w?m.data.isEqual(w.data)?E!==A&&(r.track({type:3,doc:w}),N=!0):this.ga(m,w)||(r.track({type:2,doc:w}),N=!0,(l&&this.Aa(w,l)>0||c&&this.Aa(w,c)<0)&&(a=!0)):!m&&w?(r.track({type:0,doc:w}),N=!0):m&&!w&&(r.track({type:1,doc:m}),N=!0,(l||c)&&(a=!0)),N&&(w?(o=o.add(w),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(w,E){const A=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return A(w)-A(E)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Yo(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _E,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=pe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new nx(r))}),this.da.forEach(r=>{e.has(r)||n.push(new tx(r))}),n}ba(e){this.Ta=e.Ts,this.da=pe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Yo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class AV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PV{constructor(e){this.key=e,this.va=!1}}class NV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ha(a=>Tk(a),jd),this.Ma=new Map,this.xa=new Set,this.Oa=new lt(J.comparator),this.Na=new Map,this.La=new Fy,this.Ba={},this.ka=new Map,this.qa=Qo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function bV(t,e,n=!0){const r=lx(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await rx(r,e,n,!0),i}async function DV(t,e){const n=lx(t);await rx(n,e,!0,!1)}async function rx(t,e,n,r){const i=await tV(t.localStore,sr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await OV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Qk(t.remoteStore,i),a}async function OV(t,e,n,r,i){t.Ka=(f,m,w)=>async function(A,N,I,T){let k=N.view.ma(I);k.ns&&(k=await pE(A.localStore,N.query,!1).then(({documents:C})=>N.view.ma(C,k)));const O=T&&T.targetChanges.get(N.targetId),F=T&&T.targetMismatches.get(N.targetId)!=null,M=N.view.applyChanges(k,A.isPrimaryClient,O,F);return TE(A,N.targetId,M.wa),M.snapshot}(t,f,m,w);const s=await pE(t.localStore,e,!0),o=new RV(e,s.Ts),a=o.ma(s.documents),l=xu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);TE(t,n,c.wa);const h=new AV(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function LV(t,e,n){const r=se(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!jd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ym(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&zy(r.remoteStore,i.targetId),Jm(r,i.targetId)}).catch(Su)):(Jm(r,i.targetId),await Ym(r.localStore,i.targetId,!0))}async function MV(t,e){const n=se(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),zy(n.remoteStore,r.targetId))}async function VV(t,e,n){const r=$V(t);try{const i=await function(o,a){const l=se(o),c=dt.now(),h=a.reduce((w,E)=>w.add(E.key),pe());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let E=Fr(),A=pe();return l.cs.getEntries(w,h).next(N=>{E=N,E.forEach((I,T)=>{T.isValidDocument()||(A=A.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,E)).next(N=>{f=N;const I=[];for(const T of a){const k=sM(T,f.get(T.key).overlayedDocument);k!=null&&I.push(new $i(T.key,k,pk(k.value.mapValue),kn.exists(!0)))}return l.mutationQueue.addMutationBatch(w,c,I,a)}).next(N=>{m=N;const I=N.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(w,N.batchId,I)})}).then(()=>({batchId:m.batchId,changes:Ck(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new lt(we)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Au(r,i.changes),await qd(r.remoteStore)}catch(i){const s=Gy(i,"Failed to persist write");n.reject(s)}}async function ix(t,e){const n=se(t);try{const r=await JM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(xe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?xe(o.va):i.removedDocuments.size>0&&(xe(o.va),o.va=!1))}),await Au(n,r,e)}catch(r){await Su(r)}}function EE(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=se(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&Yy(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jV(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new lt(J.comparator);o=o.insert(s,Bt.newNoDocument(s,ie.min()));const a=pe().add(s),l=new Wd(ie.min(),new Map,new lt(we),o,a);await ix(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),Jy(r)}else await Ym(r.localStore,e,!1).then(()=>Jm(r,e,n)).catch(Su)}async function FV(t,e){const n=se(t),r=e.batch.batchId;try{const i=await XM(n.localStore,e);ox(n,r,null),sx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Au(n,i)}catch(i){await Su(i)}}async function UV(t,e,n){const r=se(t);try{const i=await function(o,a){const l=se(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(xe(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);ox(r,e,n),sx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Au(r,i)}catch(i){await Su(i)}}function sx(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function ox(t,e,n){const r=se(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Jm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ax(t,r)})}function ax(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(zy(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Jy(t))}function TE(t,e,n){for(const r of n)r instanceof tx?(t.La.addReference(r.key,e),BV(t,r)):r instanceof nx?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ax(t,r.key)):re()}function BV(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),Jy(t))}function Jy(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(Fe.fromString(e)),r=t.qa.next();t.Na.set(r,new PV(n)),t.Oa=t.Oa.insert(n,r),Qk(t.remoteStore,new di(sr(Vd(n.path)),r,"TargetPurposeLimboResolution",Ry.oe))}}async function Au(t,e,n){const r=se(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=By.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=se(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,m=>U.forEach(m.$i,w=>h.persistence.referenceDelegate.addReference(f,m.targetId,w)).next(()=>U.forEach(m.Ui,w=>h.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))}catch(f){if(!Cu(f))throw f;K("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const w=h.os.get(m),E=w.snapshotVersion,A=w.withLastLimboFreeSnapshotVersion(E);h.os=h.os.insert(m,A)}}}(r.localStore,s))}async function zV(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await Hk(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new q(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Au(n,r.hs)}}function WV(t,e){const n=se(t),r=n.Na.get(e);if(r&&r.va)return pe().add(r.key);{let i=pe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function lx(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ix.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jV.bind(null,e),e.Ca.d_=kV.bind(null,e.eventManager),e.Ca.$a=xV.bind(null,e.eventManager),e}function $V(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UV.bind(null,e),e}class $h{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$d(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return YM(this.persistence,new KM,e.initialUser,this.serializer)}Ga(e){return new HM(Uy.Zr,this.serializer)}Wa(e){return new rV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$h.provider={build:()=>new $h};class Zm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>EE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zV.bind(null,this.syncEngine),await IV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CV}()}createDatastore(e){const n=$d(e.databaseInfo.databaseId),r=function(s){return new aV(s)}(e.databaseInfo);return function(s,o,a,l){return new cV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new dV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>EE(this.syncEngine,n,0),function(){return gE.D()?new gE:new iV}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new NV(i,s,o,a,l,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=se(i);K("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ru(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zm.provider={build:()=>new Zm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ft.UNAUTHENTICATED,this.clientId=hk.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wp(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Hk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function IE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qV(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>yE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>yE(e.remoteStore,i)),t._onlineComponents=e}async function qV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await wp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Wo("Error using user provided cache. Falling back to memory cache: "+n),await wp(t,new $h)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await wp(t,new $h);return t._offlineComponents}async function ux(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await IE(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await IE(t,new Zm))),t._onlineComponents}function GV(t){return ux(t).then(e=>e.syncEngine)}async function Hh(t){const e=await ux(t),n=e.eventManager;return n.onListen=bV.bind(null,e.syncEngine),n.onUnlisten=LV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=DV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MV.bind(null,e.syncEngine),n}function KV(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new Zy({next:m=>{h.Za(),o.enqueueAndForget(()=>Qy(s,f));const w=m.docs.has(a);!w&&m.fromCache?c.reject(new q(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Xy(Vd(a.path),h,{includeMetadataChanges:!0,_a:!0});return Ky(s,f)}(await Hh(t),t.asyncQueue,e,n,r)),r.promise}function QV(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new Zy({next:m=>{h.Za(),o.enqueueAndForget(()=>Qy(s,f)),m.fromCache&&l.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Xy(a,h,{includeMetadataChanges:!0,_a:!0});return Ky(s,f)}(await Hh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const SE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t,e,n){if(!n)throw new q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YV(t,e,n,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function CE(t){if(!J.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kE(t){if(J.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gd(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function XV(t,e){if(e<=0)throw new q(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mL;switch(r.type){case"firstParty":return new vL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=SE.get(n);r&&(K("ComponentProvider","Removing Datastore"),SE.delete(n),r.terminate())}(this),Promise.resolve()}}function JV(t,e,n,r={}){var i;const s=(t=ln(t,Kd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ft.MOCK_USER;else{a=mC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ft(c)}t._authCredentials=new gL(new ck(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class Si extends Hr{constructor(e,n,r){super(e,n,Vd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new J(e))}withConverter(e){return new Si(this.firestore,e,this._path)}}function Xn(t,e,...n){if(t=Te(t),hx("collection","path",e),t instanceof Kd){const r=Fe.fromString(e,...n);return kE(r),new Si(t,null,r)}{if(!(t instanceof zt||t instanceof Si))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return kE(r),new Si(t.firestore,null,r)}}function un(t,e,...n){if(t=Te(t),arguments.length===1&&(e=hk.newId()),hx("doc","path",e),t instanceof Kd){const r=Fe.fromString(e,...n);return CE(r),new zt(t,null,new J(r))}{if(!(t instanceof zt||t instanceof Si))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return CE(r),new zt(t.firestore,t instanceof Si?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Gk(this,"async_queue_retry"),this.Vu=()=>{const r=vp();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=vp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=vp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Pr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Cu(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw jr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=qy.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function AE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ur extends Kd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new RE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new RE(e),this._firestoreClient=void 0,await e}}}function ZV(t,e){const n=typeof t=="object"?t:bd(),r=typeof t=="string"?t:"(default)",i=Vs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dC("firestore");s&&JV(i,...s)}return i}function Qd(t){if(t._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||e4(t),t._firestoreClient}function e4(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new bL(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,cx(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new HV(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xo(Nt.fromBase64String(e))}catch(n){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xo(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */class t_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4=/^__.*__$/;class n4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $i(e,this.data,this.fieldMask,n,this.fieldTransforms):new ku(e,this.data,n,this.fieldTransforms)}}class dx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new $i(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Xd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Xd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return qh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(fx(this.Cu)&&t4.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class r4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$d(e)}Qu(e,n,r,i=!1){return new Xd({Cu:e,methodName:n,qu:r,path:kt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jd(t){const e=t._freezeSettings(),n=$d(t._databaseId);return new r4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function px(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);o_("Data must be an object, but it was:",o,r);const a=gx(r,o);let l,c;if(s.merge)l=new pn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=eg(e,f,n);if(!o.contains(m))throw new q(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);_x(h,m)||h.push(m)}l=new pn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new n4(new en(a),l,c)}class Zd extends Bs{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zd}}function mx(t,e,n){return new Xd({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class n_ extends Bs{_toFieldTransform(e){return new Bd(e.path,new Zl)}isEqual(e){return e instanceof n_}}class r_ extends Bs{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=mx(this,e,!0),r=this.Ku.map(s=>zs(s,n)),i=new Go(r);return new Bd(e.path,i)}isEqual(e){return e instanceof r_&&Uo(this.Ku,e.Ku)}}class i_ extends Bs{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=mx(this,e,!0),r=this.Ku.map(s=>zs(s,n)),i=new Ko(r);return new Bd(e.path,i)}isEqual(e){return e instanceof i_&&Uo(this.Ku,e.Ku)}}class s_ extends Bs{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new eu(e.serializer,Rk(e.serializer,this.$u));return new Bd(e.path,n)}isEqual(e){return e instanceof s_&&this.$u===e.$u}}function i4(t,e,n,r){const i=t.Qu(1,e,n);o_("Data must be an object, but it was:",i,r);const s=[],o=en.empty();Fs(r,(l,c)=>{const h=a_(e,l,n);c=Te(c);const f=i.Nu(h);if(c instanceof Zd)s.push(h);else{const m=zs(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new pn(s);return new dx(o,a,i.fieldTransforms)}function s4(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[eg(e,r,n)],l=[i];if(s.length%2!=0)throw new q(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(eg(e,s[m])),l.push(s[m+1]);const c=[],h=en.empty();for(let m=a.length-1;m>=0;--m)if(!_x(c,a[m])){const w=a[m];let E=l[m];E=Te(E);const A=o.Nu(w);if(E instanceof Zd)c.push(w);else{const N=zs(E,A);N!=null&&(c.push(w),h.set(w,N))}}const f=new pn(c);return new dx(h,f,o.fieldTransforms)}function o4(t,e,n,r=!1){return zs(n,t.Qu(r?4:3,e))}function zs(t,e){if(yx(t=Te(t)))return o_("Unsupported field value:",e,t),gx(t,e);if(t instanceof Bs)return function(r,i){if(!fx(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=zs(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Rk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=dt.fromDate(r);return{timestampValue:zh(i.serializer,s)}}if(r instanceof dt){const s=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zh(i.serializer,s)}}if(r instanceof e_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xo)return{bytesValue:jk(i.serializer,r._byteString)};if(r instanceof zt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:jy(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof t_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Oy(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Gd(r)}`)}(t,e)}function gx(t,e){const n={};return dk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fs(t,(r,i)=>{const s=zs(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof e_||t instanceof Xo||t instanceof zt||t instanceof Bs||t instanceof t_)}function o_(t,e,n){if(!yx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Gd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function eg(t,e,n){if((e=Te(e))instanceof Yd)return e._internalPath;if(typeof e=="string")return a_(t,e);throw qh("Field path arguments must be of type string or ",t,!1,void 0,n)}const a4=new RegExp("[~\\*/\\[\\]]");function a_(t,e,n){if(e.search(a4)>=0)throw qh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yd(...e.split("."))._internalPath}catch{throw qh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new q(V.INVALID_ARGUMENT,a+t+l)}function _x(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new l4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ef("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class l4 extends vx{data(){return super.data()}}function ef(t,e){return typeof e=="string"?a_(t,e):e instanceof Yd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class l_{}class u_ extends l_{}function Br(t,e,...n){let r=[];e instanceof l_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof c_).length,a=s.filter(l=>l instanceof tf).length;if(o>1||o>0&&a>0)throw new q(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class tf extends u_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tf(e,n,r)}_apply(e){const n=this._parse(e);return Ex(e._query,n),new Hr(e.firestore,e.converter,Hm(e._query,n))}_parse(e){const n=Jd(e.firestore);return function(s,o,a,l,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){NE(f,h);const w=[];for(const E of f)w.push(PE(l,s,E));m={arrayValue:{values:w}}}else m=PE(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||NE(f,h),m=o4(a,o,f,h==="in"||h==="not-in");return ot.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function lr(t,e,n){const r=e,i=ef("where",t);return tf._create(i,r,n)}class c_ extends l_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new c_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Ex(o,l),o=Hm(o,l)}(e._query,n),new Hr(e.firestore,e.converter,Hm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class h_ extends u_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new h_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Jl(s,o)}(e._query,this._field,this._direction);return new Hr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ca(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function u4(t,e="asc"){const n=e,r=ef("orderBy",t);return h_._create(r,n)}class d_ extends u_{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new d_(e,n,r)}_apply(e){return new Hr(e.firestore,e.converter,Bh(e._query,this._limit,this._limitType))}}function tu(t){return XV("limit",t),d_._create("limit",t,"F")}function PE(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new q(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ek(e)&&n.indexOf("/")!==-1)throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!J.isDocumentKey(r))throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xw(t,new J(r))}if(n instanceof zt)return Xw(t,n._key);throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gd(n)}.`)}function NE(t,e){if(!Array.isArray(t)||t.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ex(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class c4{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>et(o.doubleValue));return new t_(s)}convertGeoPoint(e){return new e_(et(e.latitude),et(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Py(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ql(e));default:return null}}convertTimestamp(e){const n=Ni(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);xe($k(r));const i=new Yl(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||jr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ix extends vx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new th(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ef("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class th extends Ix{data(e={}){return super.data(e)}}class Sx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new sl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new th(this._firestore,this._userDataWriter,r.key,r,new sl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new th(i._firestore,i._userDataWriter,a.doc.key,a.doc,new sl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new th(i._firestore,i._userDataWriter,a.doc.key,a.doc,new sl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:h4(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function h4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){t=ln(t,zt);const e=ln(t.firestore,Ur);return KV(Qd(e),t._key).then(n=>kx(e,t,n))}class f_ extends c4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function Di(t){t=ln(t,Hr);const e=ln(t.firestore,Ur),n=Qd(e),r=new f_(e);return wx(t._query),QV(n,t._query).then(i=>new Sx(e,r,t,i))}function d4(t,e,n){t=ln(t,zt);const r=ln(t.firestore,Ur),i=Tx(t.converter,e);return rf(r,[px(Jd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,kn.none())])}function xn(t,e,n,...r){t=ln(t,zt);const i=ln(t.firestore,Ur),s=Jd(i);let o;return o=typeof(e=Te(e))=="string"||e instanceof Yd?s4(s,"updateDoc",t._key,e,n,r):i4(s,"updateDoc",t._key,e),rf(i,[o.toMutation(t._key,kn.exists(!0))])}function f4(t){return rf(ln(t.firestore,Ur),[new Ly(t._key,kn.none())])}function Cx(t,e){const n=ln(t.firestore,Ur),r=un(t),i=Tx(t.converter,e);return rf(n,[px(Jd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,kn.exists(!1))]).then(()=>r)}function p4(t,...e){var n,r,i;t=Te(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||AE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(AE(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof zt)c=ln(t.firestore,Ur),h=Vd(t._key.path),l={next:f=>{e[o]&&e[o](kx(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ln(t,Hr);c=ln(f.firestore,Ur),h=f._query;const m=new f_(c);l={next:w=>{e[o]&&e[o](new Sx(c,m,f,w))},error:e[o+1],complete:e[o+2]},wx(t._query)}return function(m,w,E,A){const N=new Zy(A),I=new Xy(w,N,E);return m.asyncQueue.enqueueAndForget(async()=>Ky(await Hh(m),I)),()=>{N.Za(),m.asyncQueue.enqueueAndForget(async()=>Qy(await Hh(m),I))}}(Qd(c),h,a,l)}function rf(t,e){return function(r,i){const s=new Pr;return r.asyncQueue.enqueueAndForget(async()=>VV(await GV(r),i,s)),s.promise}(Qd(t),e)}function kx(t,e,n){const r=n.docs.get(e._key),i=new f_(t);return new Ix(t,i,e._key,r,new sl(n.hasPendingWrites,n.fromCache),e.converter)}function sf(){return new n_("serverTimestamp")}function bE(...t){return new r_("arrayUnion",t)}function DE(...t){return new i_("arrayRemove",t)}function Zs(t){return new s_("increment",t)}(function(e,n=!0){(function(i){ua=i})(js),Qn(new Pn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ur(new yL(r.getProvider("auth-internal")),new EL(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yl(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),an(qw,"4.7.3",e),an(qw,"4.7.3","esm2017")})();var OE={};const LE="@firebase/database",ME="1.0.8";/**
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
 */let xx="";function m4(t){xx=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return hr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new g4(e)}}catch{}return new y4},ls=Rx("localStorage"),_4=Rx("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Pd("@firebase/database"),v4=function(){let t=1;return function(){return t++}}(),Ax=function(t){const e=$b(t),n=new Ub;n.update(e);const r=n.digest();return fy.encodeByteArray(r)},Pu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Pu.apply(null,r):typeof r=="object"?e+=ct(r):e+=r,e+=" "}return e};let wl=null,VE=!0;const w4=function(t,e){z(!0,"Can't turn on custom loggers persistently."),Po.logLevel=fe.VERBOSE,wl=Po.log.bind(Po)},_t=function(...t){if(VE===!0&&(VE=!1,wl===null&&_4.get("logging_enabled")===!0&&w4()),wl){const e=Pu.apply(null,t);wl(e)}},Nu=function(t){return function(...e){_t(t,...e)}},tg=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pu(...t);Po.error(e)},zr=function(...t){const e=`FIREBASE FATAL ERROR: ${Pu(...t)}`;throw Po.error(e),new Error(e)},Qt=function(...t){const e="FIREBASE WARNING: "+Pu(...t);Po.warn(e)},E4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},of=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},T4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Jo="[MIN_NAME]",ks="[MAX_NAME]",Ws=function(t,e){if(t===e)return 0;if(t===Jo||e===ks)return-1;if(e===Jo||t===ks)return 1;{const n=jE(t),r=jE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},I4=function(t,e){return t===e?0:t<e?-1:1},$a=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ct(e))},p_=function(t){if(typeof t!="object"||t===null)return ct(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ct(e[r]),n+=":",n+=p_(t[e[r]]);return n+="}",n},Px=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Nx=function(t){z(!of(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},S4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},C4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function k4(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const x4=new RegExp("^-?(0*)\\d{1,10}$"),R4=-2147483648,A4=2147483647,jE=function(t){if(x4.test(t)){const e=Number(t);if(e>=R4&&e<=A4)return e}return null},fa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},P4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},El=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class N4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qt(e)}}class nh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="5",bx="v",Dx="s",Ox="r",Lx="f",Mx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vx="ls",jx="p",ng="ac",Fx="websocket",Ux="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function D4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zx(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(e===Fx)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ux)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);D4(t)&&(n.ns=t.namespace);const i=[];return wt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(){this.counters_={}}incrementCounter(e,n=1){hr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Tb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep={},Tp={};function g_(t){const e=t.toString();return Ep[e]||(Ep[e]=new O4),Ep[e]}function L4(t,e){const n=t.toString();return Tp[n]||(Tp[n]=e()),Tp[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&fa(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="start",V4="close",j4="pLPCommand",F4="pRTLPCB",Wx="id",$x="pw",Hx="ser",U4="cb",B4="seg",z4="ts",W4="d",$4="dframe",qx=1870,Gx=30,H4=qx-Gx,q4=25e3,G4=3e4;class vo{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nu(e),this.stats_=g_(n),this.urlFn=l=>(this.appCheckToken&&(l[ng]=this.appCheckToken),zx(n,Ux,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new M4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(G4)),T4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new y_((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===FE)this.id=a,this.password=l;else if(o===V4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[FE]="t",r[Hx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[U4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bx]=m_,this.transportSessionId&&(r[Dx]=this.transportSessionId),this.lastSessionId&&(r[Vx]=this.lastSessionId),this.applicationId&&(r[jx]=this.applicationId),this.appCheckToken&&(r[ng]=this.appCheckToken),typeof location<"u"&&location.hostname&&Mx.test(location.hostname)&&(r[Ox]=Lx);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vo.forceAllow_=!0}static forceDisallow(){vo.forceDisallow_=!0}static isAvailable(){return vo.forceAllow_?!0:!vo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!S4()&&!C4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=uC(n),i=Px(r,H4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[$4]="t",r[Wx]=e,r[$x]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ct(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class y_{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=v4(),window[j4+this.uniqueCallbackIdentifier]=e,window[F4+this.uniqueCallbackIdentifier]=n,this.myIFrame=y_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_t("frame writing exception"),a.stack&&_t(a.stack),_t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wx]=this.myID,e[$x]=this.myPW,e[Hx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gx+r.length<=qx;){const o=this.pendingSegs.shift();r=r+"&"+B4+i+"="+o.seg+"&"+z4+i+"="+o.ts+"&"+W4+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(q4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4=16384,Q4=45e3;let Gh=null;typeof MozWebSocket<"u"?Gh=MozWebSocket:typeof WebSocket<"u"&&(Gh=WebSocket);class Bn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nu(this.connId),this.stats_=g_(n),this.connURL=Bn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[bx]=m_,typeof location<"u"&&location.hostname&&Mx.test(location.hostname)&&(o[Ox]=Lx),n&&(o[Dx]=n),r&&(o[Vx]=r),i&&(o[ng]=i),s&&(o[jx]=s),zx(e,Fx,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ls.set("previous_websocket_failure",!0);try{let r;bb(),this.mySock=new Gh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Bn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Gh!==null&&!Bn.forceDisallow_}static previouslyFailed(){return ls.isInMemoryStorage||ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Hl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Px(n,K4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Q4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bn.responsesRequiredToBeHealthy=2;Bn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vo,Bn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Bn&&Bn.isAvailable();let r=n&&!Bn.previouslyFailed();if(e.webSocketOnly&&(n||Qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Bn];else{const i=this.transports_=[];for(const s of nu.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);nu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}nu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y4=6e4,X4=5e3,J4=10*1024,Z4=100*1024,Ip="t",UE="d",ej="s",BE="r",tj="e",zE="o",WE="a",$E="n",HE="p",nj="h";class rj{constructor(e,n,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nu("c:"+this.id+":"),this.transportManager_=new nu(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=El(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Z4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>J4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ip in e){const n=e[Ip];n===WE?this.upgradeIfSecondaryHealthy_():n===BE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===zE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$a("t",e),r=$a("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:HE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:WE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$E,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$a("t",e),r=$a("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$a(Ip,e);if(UE in e){const r=e[UE];if(n===nj){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===$E){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ej?this.onConnectionShutdown_(r):n===BE?this.onReset_(r):n===tj?tg("Server Error: "+r):n===zE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tg("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),m_!==r&&Qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),El(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Y4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):El(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(X4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:HE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qx{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends Qx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!py()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Kh}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=32,GE=768;class Re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ee(){return new Re("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Oi(t){return t.pieces_.length-t.pieceNum_}function Ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Re(t.pieces_,e)}function __(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ij(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ru(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Yx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Re(e,0)}function qe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Re(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Gt(t,e){const n=le(t),r=le(e);if(n===null)return e;if(n===r)return Gt(Ne(t),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function sj(t,e){const n=ru(t,0),r=ru(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ws(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function v_(t,e){if(Oi(t)!==Oi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Sn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Oi(t)>Oi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class oj{constructor(e,n){this.errorPrefix_=n,this.parts_=ru(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ad(this.parts_[r]);Xx(this)}}function aj(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ad(e),Xx(t)}function lj(t){const e=t.parts_.pop();t.byteLength_-=Ad(e),t.parts_.length>0&&(t.byteLength_-=1)}function Xx(t){if(t.byteLength_>GE)throw new Error(t.errorPrefix_+"has a key path longer than "+GE+" bytes ("+t.byteLength_+").");if(t.parts_.length>qE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qE+") or object contains a cycle "+ns(t))}function ns(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_ extends Qx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new w_}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=1e3,uj=60*5*1e3,KE=30*1e3,cj=1.3,hj=3e4,dj="server_kill",QE=3;class Nr extends Kx{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Nr.nextPersistentConnectionId_++,this.log_=Nu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ha,this.maxReconnectDelay_=uj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");w_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Kh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ct(s)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new tr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Nr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&hr(e,"w")){const r=Fo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Fb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=KE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):tg("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ha,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ha,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hj&&(this.reconnectDelay_=Ha),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new rj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,w=>{Qt(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(dj)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Qt(f),l())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nh(this.interruptReasons_)&&(this.reconnectDelay_=Ha,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>p_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=QE&&(this.reconnectDelay_=KE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=QE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xx.replace(/\./g,"-")]=1,py()?e["framework.cordova"]=1:gC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Kh.getInstance().currentlyOnline();return Nh(this.interruptReasons_)&&e}}Nr.nextPersistentConnectionId_=0;Nr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class af{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ce(Jo,e),i=new ce(Jo,n);return this.compare(r,i)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac;class Jx extends af{static get __EMPTY_NODE(){return Ac}static set __EMPTY_NODE(e){Ac=e}compare(e,n){return Ws(e.name,n.name)}isDefinedOn(e){throw oa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(ks,Ac)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,Ac)}toString(){return".key"}}const No=new Jx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class yt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??yt.RED,this.left=i??nn.EMPTY_NODE,this.right=s??nn.EMPTY_NODE}copy(e,n,r,i,s){return new yt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return nn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return nn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}yt.RED=!0;yt.BLACK=!1;class fj{copy(e,n,r,i,s){return this}insert(e,n,r){return new yt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nn{constructor(e,n=nn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,yt.BLACK,null,null))}remove(e){return new nn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,yt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Pc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Pc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Pc(this.root_,null,this.comparator_,!0,e)}}nn.EMPTY_NODE=new fj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pj(t,e){return Ws(t.name,e.name)}function E_(t,e){return Ws(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rg;function mj(t){rg=t}const Zx=function(t){return typeof t=="number"?"number:"+Nx(t):"string:"+t},e1=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hr(e,".sv"),"Priority must be a string or number.")}else z(t===rg||t.isEmpty(),"priority of unexpected type.");z(t===rg||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YE;class pt{constructor(e,n=pt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),e1(this.priorityNode_)}static set __childrenNodeConstructor(e){YE=e}static get __childrenNodeConstructor(){return YE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:le(e)===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||Oi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Nx(this.value_):e+=this.value_,this.lazyHash_=Ax(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pt.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=pt.VALUE_TYPE_ORDER.indexOf(n),s=pt.VALUE_TYPE_ORDER.indexOf(r);return z(i>=0,"Unknown leaf type: "+n),z(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t1,n1;function gj(t){t1=t}function yj(t){n1=t}class _j extends af{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ws(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(ks,new pt("[PRIORITY-POST]",n1))}makePost(e,n){const r=t1(e);return new ce(n,new pt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ge=new _j;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vj=Math.log(2);class wj{constructor(e){const n=s=>parseInt(Math.log(s)/vj,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qh=function(t,e,n,r){t.sort(e);const i=function(l,c){const h=c-l;let f,m;if(h===0)return null;if(h===1)return f=t[l],m=n?n(f):f,new yt(m,f.node,yt.BLACK,null,null);{const w=parseInt(h/2,10)+l,E=i(l,w),A=i(w+1,c);return f=t[w],m=n?n(f):f,new yt(m,f.node,yt.BLACK,E,A)}},s=function(l){let c=null,h=null,f=t.length;const m=function(E,A){const N=f-E,I=f;f-=E;const T=i(N+1,I),k=t[N],O=n?n(k):k;w(new yt(O,k.node,A,null,T))},w=function(E){c?(c.left=E,c=E):(h=E,c=E)};for(let E=0;E<l.count;++E){const A=l.nextBitIsOne(),N=Math.pow(2,l.count-(E+1));A?m(N,yt.BLACK):(m(N,yt.BLACK),m(N,yt.RED))}return h},o=new wj(t.length),a=s(o);return new nn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sp;const eo={};class kr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(eo&&Ge,"ChildrenNode.ts has not been loaded"),Sp=Sp||new kr({".priority":eo},{".priority":Ge}),Sp}get(e){const n=Fo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nn?n:null}hasIndex(e){return hr(this.indexSet_,e.toString())}addIndex(e,n){z(e!==No,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ce.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Qh(r,e.getCompare()):a=eo;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new kr(h,c)}addToIndexes(e,n){const r=bh(this.indexes_,(i,s)=>{const o=Fo(this.indexSet_,s);if(z(o,"Missing index implementation for "+s),i===eo)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ce.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Qh(a,o.getCompare())}else return eo;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ce(e.name,a))),l.insert(e,e.node)}});return new kr(r,this.indexSet_)}removeFromIndexes(e,n){const r=bh(this.indexes_,i=>{if(i===eo)return i;{const s=n.get(e.name);return s?i.remove(new ce(e.name,s)):i}});return new kr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&e1(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qa||(qa=new ee(new nn(E_),null,kr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qa}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qa:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ce(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?qa:this.priorityNode_;return new ee(i,o,s)}}updateChild(e,n){const r=le(e);if(r===null)return n;{z(le(e)!==".priority"||Oi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ne(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ge,(o,a)=>{n[o]=a.val(e),r++,s&&ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zx(this.getPriority().val())+":"),this.forEachChild(Ge,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ax(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ce(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bu?-1:0}withIndex(e){if(e===No||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===No||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ge),i=n.getIterator(Ge);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===No?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ej extends ee{constructor(){super(new nn(E_),ee.EMPTY_NODE,kr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const bu=new Ej;Object.defineProperties(ce,{MIN:{value:new ce(Jo,ee.EMPTY_NODE)},MAX:{value:new ce(ks,bu)}});Jx.__EMPTY_NODE=ee.EMPTY_NODE;pt.__childrenNodeConstructor=ee;mj(bu);yj(bu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tj=!0;function Ze(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pt(n,Ze(e))}if(!(t instanceof Array)&&Tj){const n=[];let r=!1;if(wt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ze(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ce(o,l)))}}),n.length===0)return ee.EMPTY_NODE;const s=Qh(n,pj,o=>o.name,E_);if(r){const o=Qh(n,Ge.getCompare());return new ee(s,Ze(e),new kr({".priority":o},{".priority":Ge}))}else return new ee(s,Ze(e),kr.Default)}else{let n=ee.EMPTY_NODE;return wt(t,(r,i)=>{if(hr(t,r)&&r.substring(0,1)!=="."){const s=Ze(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ze(e))}}gj(Ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ij extends af{constructor(e){super(),this.indexPath_=e,z(!ue(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ws(e.name,n.name):s}makePost(e,n){const r=Ze(e),i=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new ce(n,i)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,bu);return new ce(ks,e)}toString(){return ru(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj extends af{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ws(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const r=Ze(e);return new ce(n,r)}toString(){return".value"}}const Cj=new Sj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(t){return{type:"value",snapshotNode:t}}function Zo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function iu(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function su(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kj(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(iu(n,a)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Zo(n,r)):o.trackChildChange(su(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ge,(i,s)=>{n.hasChild(i)||r.trackChildChange(iu(i,s))}),n.isLeafNode()||n.forEachChild(Ge,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(su(i,s,o))}else r.trackChildChange(Zo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.indexedFilter_=new T_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ou.getStartPost_(e),this.endPost_=ou.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ce(n,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ee.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ee.EMPTY_NODE);const s=this;return n.forEachChild(Ge,(o,a)=>{s.matches(new ce(o,a))||(i=i.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xj{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ou(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ce(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ee.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ee.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,w)=>f(w,m)}else o=this.index_.getCompare();const a=e;z(a.numChildren()===this.limit_,"");const l=new ce(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const w=m==null?1:o(m,l);if(h&&!r.isEmpty()&&w>=0)return s!=null&&s.trackChildChange(su(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(iu(n,f));const A=a.updateImmediateChild(n,ee.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(Zo(m.name,m.node)),A.updateImmediateChild(m.name,m.node)):A}}else return r.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(iu(c.name,c.node)),s.trackChildChange(Zo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jo}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ks}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ge}copy(){const e=new I_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rj(t){return t.loadsAllData()?new T_(t.getIndex()):t.hasLimit()?new xj(t):new ou(t)}function XE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ge?n="$priority":t.index_===Cj?n="$value":t.index_===No?n="$key":(z(t.index_ instanceof Ij,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ct(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ct(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ct(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ct(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ct(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function JE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ge&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends Kx{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Nu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Yh.getListenId_(e,r),a={};this.listens_[o]=a;const l=XE(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Fo(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Yh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=XE(e._queryParams),r=e._path.toString(),i=new tr;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+aa(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Hl(a.responseText)}catch{Qt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Qt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){return{value:null,children:new Map}}function pa(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,Xh());const i=t.children.get(r);e=Ne(e),pa(i,e,n)}}function ig(t,e){if(ue(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Ge,(r,i)=>{pa(t,new Re(r),i)}),ig(t,e)}}else if(t.children.size>0){const n=le(e);return e=Ne(e),t.children.has(n)&&ig(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function sg(t,e,n){t.value!==null?n(e,t.value):Pj(t,(r,i)=>{const s=new Re(e.toString()+"/"+r);sg(i,s,n)})}function Pj(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&wt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=10*1e3,bj=30*1e3,Dj=5*60*1e3;class Oj{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Nj(e);const r=ZE+(bj-ZE)*Math.random();El(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;wt(e,(i,s)=>{s>0&&hr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),El(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dj))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wn||(Wn={}));function S_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function C_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function k_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Wn.ACK_USER_WRITE,this.source=S_()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Re(e));return new Jh(Ee(),n,this.revert)}}else return z(le(this.path)===e,"operationForChild called for unrelated child."),new Jh(Ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.source=e,this.path=n,this.type=Wn.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new au(this.source,Ee()):new au(this.source,Ne(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Wn.OVERWRITE}operationForChild(e){return ue(this.path)?new xs(this.source,Ee(),this.snap.getImmediateChild(e)):new xs(this.source,Ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Wn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Re(e));return n.isEmpty()?null:n.value?new xs(this.source,Ee(),n.value):new ea(this.source,Ee(),n)}else return z(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ea(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Mj(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(kj(o.childName,o.snapshotNode))}),Ga(t,i,"child_removed",e,r,n),Ga(t,i,"child_added",e,r,n),Ga(t,i,"child_moved",s,r,n),Ga(t,i,"child_changed",e,r,n),Ga(t,i,"value",e,r,n),i}function Ga(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>jj(t,a,l)),o.forEach(a=>{const l=Vj(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Vj(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jj(t,e,n){if(e.childName==null||n.childName==null)throw oa("Should only compare child_ events.");const r=new ce(e.childName,e.snapshotNode),i=new ce(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t,e){return{eventCache:t,serverCache:e}}function Tl(t,e,n,r){return lf(new Li(e,n,r),t.serverCache)}function i1(t,e,n,r){return lf(t.eventCache,new Li(e,n,r))}function Zh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Rs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cp;const Fj=()=>(Cp||(Cp=new nn(I4)),Cp);class Le{constructor(e,n=Fj()){this.value=e,this.children=n}static fromObject(e){let n=new Le(null);return wt(e,(r,i)=>{n=n.set(new Re(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ee(),value:this.value};if(ue(e))return null;{const r=le(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ne(e),n);return s!=null?{path:qe(new Re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=le(e),r=this.children.get(n);return r!==null?r.subtree(Ne(e)):new Le(null)}}set(e,n){if(ue(e))return new Le(n,this.children);{const r=le(e),s=(this.children.get(r)||new Le(null)).set(Ne(e),n),o=this.children.insert(r,s);return new Le(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Le(null):new Le(null,this.children);{const n=le(e),r=this.children.get(n);if(r){const i=r.remove(Ne(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Le(null):new Le(this.value,s)}else return this}}get(e){if(ue(e))return this.value;{const n=le(e),r=this.children.get(n);return r?r.get(Ne(e)):null}}setTree(e,n){if(ue(e))return n;{const r=le(e),s=(this.children.get(r)||new Le(null)).setTree(Ne(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Le(this.value,o)}}fold(e){return this.fold_(Ee(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(qe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ee(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ue(e))return null;{const s=le(e),o=this.children.get(s);return o?o.findOnPath_(Ne(e),qe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ee(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const i=le(e),s=this.children.get(i);return s?s.foreachOnPath_(Ne(e),qe(n,i),r):new Le(null)}}foreach(e){this.foreach_(Ee(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(qe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.writeTree_=e}static empty(){return new Gn(new Le(null))}}function Il(t,e,n){if(ue(e))return new Gn(new Le(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Gt(i,e);return s=s.updateChild(o,n),new Gn(t.writeTree_.set(i,s))}else{const i=new Le(n),s=t.writeTree_.setTree(e,i);return new Gn(s)}}}function og(t,e,n){let r=t;return wt(n,(i,s)=>{r=Il(r,qe(e,i),s)}),r}function eT(t,e){if(ue(e))return Gn.empty();{const n=t.writeTree_.setTree(e,new Le(null));return new Gn(n)}}function ag(t,e){return $s(t,e)!=null}function $s(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Gt(n.path,e)):null}function tT(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ge,(r,i)=>{e.push(new ce(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ce(r,i.value))}),e}function Ci(t,e){if(ue(e))return t;{const n=$s(t,e);return n!=null?new Gn(new Le(n)):new Gn(t.writeTree_.subtree(e))}}function lg(t){return t.writeTree_.isEmpty()}function ta(t,e){return s1(Ee(),t.writeTree_,e)}function s1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(z(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=s1(qe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(qe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){return u1(e,t)}function Uj(t,e,n,r,i){z(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Il(t.visibleWrites,e,n)),t.lastWriteId=r}function Bj(t,e,n,r){z(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=og(t.visibleWrites,e,n),t.lastWriteId=r}function zj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Wj(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$j(a,r.path)?i=!1:Sn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Hj(t),!0;if(r.snap)t.visibleWrites=eT(t.visibleWrites,r.path);else{const a=r.children;wt(a,l=>{t.visibleWrites=eT(t.visibleWrites,qe(r.path,l))})}return!0}else return!1}function $j(t,e){if(t.snap)return Sn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Sn(qe(t.path,n),e))return!0;return!1}function Hj(t){t.visibleWrites=o1(t.allWrites,qj,Ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qj(t){return t.visible}function o1(t,e,n){let r=Gn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Sn(n,o)?(a=Gt(n,o),r=Il(r,a,s.snap)):Sn(o,n)&&(a=Gt(o,n),r=Il(r,Ee(),s.snap.getChild(a)));else if(s.children){if(Sn(n,o))a=Gt(n,o),r=og(r,a,s.children);else if(Sn(o,n))if(a=Gt(o,n),ue(a))r=og(r,Ee(),s.children);else{const l=Fo(s.children,le(a));if(l){const c=l.getChild(Ne(a));r=Il(r,Ee(),c)}}}else throw oa("WriteRecord should have .snap or .children")}}return r}function a1(t,e,n,r,i){if(!r&&!i){const s=$s(t.visibleWrites,e);if(s!=null)return s;{const o=Ci(t.visibleWrites,e);if(lg(o))return n;if(n==null&&!ag(o,Ee()))return null;{const a=n||ee.EMPTY_NODE;return ta(o,a)}}}else{const s=Ci(t.visibleWrites,e);if(!i&&lg(s))return n;if(!i&&n==null&&!ag(s,Ee()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Sn(c.path,e)||Sn(e,c.path))},a=o1(t.allWrites,o,e),l=n||ee.EMPTY_NODE;return ta(a,l)}}}function Gj(t,e,n){let r=ee.EMPTY_NODE;const i=$s(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ge,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ci(t.visibleWrites,e);return n.forEachChild(Ge,(o,a)=>{const l=ta(Ci(s,new Re(o)),a);r=r.updateImmediateChild(o,l)}),tT(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ci(t.visibleWrites,e);return tT(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Kj(t,e,n,r,i){z(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=qe(e,n);if(ag(t.visibleWrites,s))return null;{const o=Ci(t.visibleWrites,s);return lg(o)?i.getChild(n):ta(o,i.getChild(n))}}function Qj(t,e,n,r){const i=qe(e,n),s=$s(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ci(t.visibleWrites,i);return ta(o,r.getNode().getImmediateChild(n))}else return null}function Yj(t,e){return $s(t.visibleWrites,e)}function Xj(t,e,n,r,i,s,o){let a;const l=Ci(t.visibleWrites,e),c=$s(l,Ee());if(c!=null)a=c;else if(n!=null)a=ta(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let w=m.getNext();for(;w&&h.length<i;)f(w,r)!==0&&h.push(w),w=m.getNext();return h}else return[]}function Jj(){return{visibleWrites:Gn.empty(),allWrites:[],lastWriteId:-1}}function ed(t,e,n,r){return a1(t.writeTree,t.treePath,e,n,r)}function x_(t,e){return Gj(t.writeTree,t.treePath,e)}function nT(t,e,n,r){return Kj(t.writeTree,t.treePath,e,n,r)}function td(t,e){return Yj(t.writeTree,qe(t.treePath,e))}function Zj(t,e,n,r,i,s){return Xj(t.writeTree,t.treePath,e,n,r,i,s)}function R_(t,e,n){return Qj(t.writeTree,t.treePath,e,n)}function l1(t,e){return u1(qe(t.treePath,e),t.writeTree)}function u1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,su(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,iu(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Zo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,su(r,e.snapshotNode,i.oldSnap));else throw oa("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const c1=new tF;class A_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Li(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return R_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rs(this.viewCache_),s=Zj(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nF(t){return{filter:t}}function rF(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function iF(t,e,n,r,i){const s=new eF;let o,a;if(n.type===Wn.OVERWRITE){const c=n;c.source.fromUser?o=ug(t,e,c.path,c.snap,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=nd(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Wn.MERGE){const c=n;c.source.fromUser?o=oF(t,e,c.path,c.children,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=cg(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Wn.ACK_USER_WRITE){const c=n;c.revert?o=uF(t,e,c.path,r,i,s):o=aF(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Wn.LISTEN_COMPLETE)o=lF(t,e,n.path,r,s);else throw oa("Unknown operation type: "+n.type);const l=s.getChanges();return sF(e,o,l),{viewCache:o,changes:l}}function sF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Zh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(r1(Zh(e)))}}function h1(t,e,n,r,i,s){const o=e.eventCache;if(td(r,n)!=null)return e;{let a,l;if(ue(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Rs(e),h=c instanceof ee?c:ee.EMPTY_NODE,f=x_(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=ed(r,Rs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=le(n);if(c===".priority"){z(Oi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=nT(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ne(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const m=nT(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(c).updateChild(h,m):f=o.getNode().getImmediateChild(c)}else f=R_(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return Tl(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function nd(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const w=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),w,null)}else{const w=le(n);if(!l.isCompleteForPath(n)&&Oi(n)>1)return e;const E=Ne(n),N=l.getNode().getImmediateChild(w).updateChild(E,r);w===".priority"?c=h.updatePriority(l.getNode(),N):c=h.updateChild(l.getNode(),w,N,E,c1,null)}const f=i1(e,c,l.isFullyInitialized()||ue(n),h.filtersNodes()),m=new A_(i,f,s);return h1(t,f,n,i,m,a)}function ug(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const h=new A_(i,e,s);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Tl(e,c,!0,t.filter.filtersNodes());else{const f=le(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Tl(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Ne(n),w=a.getNode().getImmediateChild(f);let E;if(ue(m))E=r;else{const A=h.getCompleteChild(f);A!=null?__(m)===".priority"&&A.getChild(Yx(m)).isEmpty()?E=A:E=A.updateChild(m,r):E=ee.EMPTY_NODE}if(w.equals(E))l=e;else{const A=t.filter.updateChild(a.getNode(),f,E,m,h,o);l=Tl(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function rT(t,e){return t.eventCache.isCompleteForChild(e)}function oF(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=qe(n,l);rT(e,le(h))&&(a=ug(t,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=qe(n,l);rT(e,le(h))||(a=ug(t,a,h,c,i,s,o))}),a}function iT(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function cg(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ue(n)?c=r:c=new Le(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const w=e.serverCache.getNode().getImmediateChild(f),E=iT(t,w,m);l=nd(t,l,new Re(f),E,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const w=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!w){const E=e.serverCache.getNode().getImmediateChild(f),A=iT(t,E,m);l=nd(t,l,new Re(f),A,i,s,o,a)}}),l}function aF(t,e,n,r,i,s,o){if(td(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return nd(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ue(n)){let c=new Le(null);return l.getNode().forEachChild(No,(h,f)=>{c=c.set(new Re(h),f)}),cg(t,e,n,c,i,s,a,o)}else return e}else{let c=new Le(null);return r.foreach((h,f)=>{const m=qe(n,h);l.isCompleteForPath(m)&&(c=c.set(h,l.getNode().getChild(m)))}),cg(t,e,n,c,i,s,a,o)}}function lF(t,e,n,r,i){const s=e.serverCache,o=i1(e,s.getNode(),s.isFullyInitialized()||ue(n),s.isFiltered());return h1(t,o,n,r,c1,i)}function uF(t,e,n,r,i,s){let o;if(td(r,n)!=null)return e;{const a=new A_(r,e,i),l=e.eventCache.getNode();let c;if(ue(n)||le(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ed(r,Rs(e));else{const f=e.serverCache.getNode();z(f instanceof ee,"serverChildren would be complete if leaf node"),h=x_(r,f)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=le(n);let f=R_(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?c=t.filter.updateChild(l,h,f,Ne(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,ee.EMPTY_NODE,Ne(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ed(r,Rs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||td(r,Ee())!=null,Tl(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new T_(r.getIndex()),s=Rj(r);this.processor_=nF(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ee.EMPTY_NODE,a.getNode(),null),h=new Li(l,o.isFullyInitialized(),i.filtersNodes()),f=new Li(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=lf(f,h),this.eventGenerator_=new Lj(this.query_)}get query(){return this.query_}}function hF(t){return t.viewCache_.serverCache.getNode()}function dF(t){return Zh(t.viewCache_)}function fF(t,e){const n=Rs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function sT(t){return t.eventRegistrations_.length===0}function pF(t,e){t.eventRegistrations_.push(e)}function oT(t,e,n){const r=[];if(n){z(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function aT(t,e,n,r){e.type===Wn.MERGE&&e.source.queryId!==null&&(z(Rs(t.viewCache_),"We should always have a full cache before handling merges"),z(Zh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=iF(t.processor_,i,e,n,r);return rF(t.processor_,s.viewCache),z(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,d1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function mF(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ge,(s,o)=>{r.push(Zo(s,o))}),n.isFullyInitialized()&&r.push(r1(n.getNode())),d1(t,r,n.getNode(),e)}function d1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Mj(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd;class f1{constructor(){this.views=new Map}}function gF(t){z(!rd,"__referenceConstructor has already been defined"),rd=t}function yF(){return z(rd,"Reference.ts has not been loaded"),rd}function _F(t){return t.views.size===0}function P_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return z(s!=null,"SyncTree gave us an op for an invalid query."),aT(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(aT(o,e,n,r));return s}}function p1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ed(n,i?r:null),l=!1;a?l=!0:r instanceof ee?(a=x_(n,r),l=!1):(a=ee.EMPTY_NODE,l=!1);const c=lf(new Li(a,l,!1),new Li(r,i,!1));return new cF(e,c)}return o}function vF(t,e,n,r,i,s){const o=p1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),pF(o,n),mF(o,n)}function wF(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Mi(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(oT(c,n,r)),sT(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(oT(l,n,r)),sT(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Mi(t)&&s.push(new(yF())(e._repo,e._path)),{removed:s,events:o}}function m1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ki(t,e){let n=null;for(const r of t.views.values())n=n||fF(r,e);return n}function g1(t,e){if(e._queryParams.loadsAllData())return cf(t);{const r=e._queryIdentifier;return t.views.get(r)}}function y1(t,e){return g1(t,e)!=null}function Mi(t){return cf(t)!=null}function cf(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id;function EF(t){z(!id,"__referenceConstructor has already been defined"),id=t}function TF(){return z(id,"Reference.ts has not been loaded"),id}let IF=1;class lT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Le(null),this.pendingWriteTree_=Jj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _1(t,e,n,r,i){return Uj(t.pendingWriteTree_,e,n,r,i),i?ma(t,new xs(S_(),e,n)):[]}function SF(t,e,n,r){Bj(t.pendingWriteTree_,e,n,r);const i=Le.fromObject(n);return ma(t,new ea(S_(),e,i))}function fi(t,e,n=!1){const r=zj(t.pendingWriteTree_,e);if(Wj(t.pendingWriteTree_,e)){let s=new Le(null);return r.snap!=null?s=s.set(Ee(),!0):wt(r.children,o=>{s=s.set(new Re(o),!0)}),ma(t,new Jh(r.path,s,n))}else return[]}function Du(t,e,n){return ma(t,new xs(C_(),e,n))}function CF(t,e,n){const r=Le.fromObject(n);return ma(t,new ea(C_(),e,r))}function kF(t,e){return ma(t,new au(C_(),e))}function xF(t,e,n){const r=b_(t,n);if(r){const i=D_(r),s=i.path,o=i.queryId,a=Gt(s,e),l=new au(k_(o),a);return O_(t,s,l)}else return[]}function sd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||y1(o,e))){const l=wF(o,e,n,r);_F(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,w)=>Mi(w));if(h&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const w=PF(m);for(let E=0;E<w.length;++E){const A=w[E],N=A.query,I=T1(t,A);t.listenProvider_.startListening(Sl(N),lu(t,N),I.hashFn,I.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Sl(e),null):c.forEach(m=>{const w=t.queryToTagMap.get(hf(m));t.listenProvider_.stopListening(Sl(m),w)}))}NF(t,c)}return a}function v1(t,e,n,r){const i=b_(t,r);if(i!=null){const s=D_(i),o=s.path,a=s.queryId,l=Gt(o,e),c=new xs(k_(a),l,n);return O_(t,o,c)}else return[]}function RF(t,e,n,r){const i=b_(t,r);if(i){const s=D_(i),o=s.path,a=s.queryId,l=Gt(o,e),c=Le.fromObject(n),h=new ea(k_(a),l,c);return O_(t,o,h)}else return[]}function hg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,w)=>{const E=Gt(m,i);s=s||ki(w,E),o=o||Mi(w)});let a=t.syncPointTree_.get(i);a?(o=o||Mi(a),s=s||ki(a,Ee())):(a=new f1,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ee.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((w,E)=>{const A=ki(E,Ee());A&&(s=s.updateImmediateChild(w,A))}));const c=y1(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=hf(e);z(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const w=bF();t.queryToTagMap.set(m,w),t.tagToQueryMap.set(w,m)}const h=uf(t.pendingWriteTree_,i);let f=vF(a,e,n,h,s,l);if(!c&&!o&&!r){const m=g1(a,e);f=f.concat(DF(t,e,m))}return f}function N_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Gt(o,e),c=ki(a,l);if(c)return c});return a1(i,e,s,n,!0)}function AF(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Gt(c,n);r=r||ki(h,f)});let i=t.syncPointTree_.get(n);i?r=r||ki(i,Ee()):(i=new f1,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Li(r,!0,!1):null,a=uf(t.pendingWriteTree_,e._path),l=p1(i,e,a,s?o.getNode():ee.EMPTY_NODE,s);return dF(l)}function ma(t,e){return w1(e,t.syncPointTree_,null,uf(t.pendingWriteTree_,Ee()))}function w1(t,e,n,r){if(ue(t.path))return E1(t,e,n,r);{const i=e.get(Ee());n==null&&i!=null&&(n=ki(i,Ee()));let s=[];const o=le(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=l1(r,o);s=s.concat(w1(a,l,c,h))}return i&&(s=s.concat(P_(i,t,r,n))),s}}function E1(t,e,n,r){const i=e.get(Ee());n==null&&i!=null&&(n=ki(i,Ee()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=l1(r,o),h=t.operationForChild(o);h&&(s=s.concat(E1(h,a,l,c)))}),i&&(s=s.concat(P_(i,t,r,n))),s}function T1(t,e){const n=e.query,r=lu(t,n);return{hashFn:()=>(hF(e)||ee.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?xF(t,n._path,r):kF(t,n._path);{const s=k4(i,n);return sd(t,n,null,s)}}}}function lu(t,e){const n=hf(e);return t.queryToTagMap.get(n)}function hf(t){return t._path.toString()+"$"+t._queryIdentifier}function b_(t,e){return t.tagToQueryMap.get(e)}function D_(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Re(t.substr(0,e))}}function O_(t,e,n){const r=t.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const i=uf(t.pendingWriteTree_,e);return P_(r,n,i,null)}function PF(t){return t.fold((e,n,r)=>{if(n&&Mi(n))return[cf(n)];{let i=[];return n&&(i=m1(n)),wt(r,(s,o)=>{i=i.concat(o)}),i}})}function Sl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(TF())(t._repo,t._path):t}function NF(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=hf(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function bF(){return IF++}function DF(t,e,n){const r=e._path,i=lu(t,e),s=T1(t,n),o=t.listenProvider_.startListening(Sl(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)z(!Mi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,f)=>{if(!ue(c)&&h&&Mi(h))return[cf(h).query];{let m=[];return h&&(m=m.concat(m1(h).map(w=>w.query))),wt(f,(w,E)=>{m=m.concat(E)}),m}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(Sl(h),lu(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new L_(n)}node(){return this.node_}}class M_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=qe(this.path_,e);return new M_(this.syncTree_,n)}node(){return N_(this.syncTree_,this.path_)}}const OF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},uT=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return LF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return MF(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},LF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},MF=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},I1=function(t,e,n,r){return V_(e,new M_(n,t),r)},S1=function(t,e,n){return V_(t,new L_(e),n)};function V_(t,e,n){const r=t.getPriority().val(),i=uT(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=uT(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new pt(a,Ze(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new pt(i))),o.forEachChild(Ge,(a,l)=>{const c=V_(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function F_(t,e){let n=e instanceof Re?e:new Re(e),r=t,i=le(n);for(;i!==null;){const s=Fo(r.node.children,i)||{children:{},childCount:0};r=new j_(i,r,s),n=Ne(n),i=le(n)}return r}function ga(t){return t.node.value}function C1(t,e){t.node.value=e,dg(t)}function k1(t){return t.node.childCount>0}function VF(t){return ga(t)===void 0&&!k1(t)}function df(t,e){wt(t.node.children,(n,r)=>{e(new j_(n,t,r))})}function x1(t,e,n,r){n&&e(t),df(t,i=>{x1(i,e,!0)})}function jF(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ou(t){return new Re(t.parent===null?t.name:Ou(t.parent)+"/"+t.name)}function dg(t){t.parent!==null&&FF(t.parent,t.name,t)}function FF(t,e,n){const r=VF(n),i=hr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,dg(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,dg(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UF=/[\[\].#$\/\u0000-\u001F\u007F]/,BF=/[\[\].#$\u0000-\u001F\u007F]/,kp=10*1024*1024,U_=function(t){return typeof t=="string"&&t.length!==0&&!UF.test(t)},R1=function(t){return typeof t=="string"&&t.length!==0&&!BF.test(t)},zF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),R1(t)},A1=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!of(t)||t&&typeof t=="object"&&hr(t,".sv")},od=function(t,e,n,r){r&&e===void 0||ff(Bo(t,"value"),e,n)},ff=function(t,e,n){const r=n instanceof Re?new oj(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ns(r));if(typeof e=="function")throw new Error(t+"contains a function "+ns(r)+" with contents = "+e.toString());if(of(e))throw new Error(t+"contains "+e.toString()+" "+ns(r));if(typeof e=="string"&&e.length>kp/3&&Ad(e)>kp)throw new Error(t+"contains a string greater than "+kp+" utf8 bytes "+ns(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(wt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!U_(o)))throw new Error(t+" contains an invalid key ("+o+") "+ns(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aj(r,o),ff(t,a,r),lj(r)}),i&&s)throw new Error(t+' contains ".value" child '+ns(r)+" in addition to actual children.")}},WF=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ru(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!U_(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(sj);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Sn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},P1=function(t,e,n,r){const i=Bo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];wt(e,(o,a)=>{const l=new Re(o);if(ff(i,a,qe(n,l)),__(l)===".priority"&&!A1(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),WF(i,s)},$F=function(t,e,n){if(of(e))throw new Error(Bo(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!A1(e))throw new Error(Bo(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},N1=function(t,e,n,r){if(!R1(n))throw new Error(Bo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HF=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),N1(t,e,n)},us=function(t,e){if(le(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},qF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!U_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zF(n))throw new Error(Bo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!v_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function b1(t,e,n){pf(t,n),D1(t,r=>v_(r,e))}function bn(t,e,n){pf(t,n),D1(t,r=>Sn(r,e)||Sn(e,r))}function D1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(KF(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();wl&&_t("event: "+n.toString()),fa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QF="repo_interrupt",YF=25;class XF{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new GF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xh(),this.transactionQueueTree_=new j_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JF(t,e,n){if(t.stats_=g_(t.repoInfo_),t.forceRestClient_||P4())t.server_=new Yh(t.repoInfo_,(r,i,s,o)=>{cT(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>hT(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Nr(t.repoInfo_,e,(r,i,s,o)=>{cT(t,r,i,s,o)},r=>{hT(t,r)},r=>{ZF(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=L4(t.repoInfo_,()=>new Oj(t.stats_,t.server_)),t.infoData_=new Aj,t.infoSyncTree_=new lT({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Du(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),B_(t,"connected",!1),t.serverSyncTree_=new lT({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);bn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function O1(t){const n=t.infoData_.getNode(new Re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function mf(t){return OF({timestamp:O1(t)})}function cT(t,e,n,r,i){t.dataUpdateCount++;const s=new Re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=bh(n,c=>Ze(c));o=RF(t.serverSyncTree_,s,l,i)}else{const l=Ze(n);o=v1(t.serverSyncTree_,s,l,i)}else if(r){const l=bh(n,c=>Ze(c));o=CF(t.serverSyncTree_,s,l)}else{const l=Ze(n);o=Du(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=na(t,s)),bn(t.eventQueue_,a,o)}function hT(t,e){B_(t,"connected",e),e===!1&&rU(t)}function ZF(t,e){wt(e,(n,r)=>{B_(t,n,r)})}function B_(t,e,n){const r=new Re("/.info/"+e),i=Ze(n);t.infoData_.updateSnapshot(r,i);const s=Du(t.infoSyncTree_,r,i);bn(t.eventQueue_,r,s)}function z_(t){return t.nextWriteId_++}function eU(t,e,n){const r=AF(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ze(i).withIndex(e._queryParams.getIndex());hg(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Du(t.serverSyncTree_,e._path,s);else{const a=lu(t.serverSyncTree_,e);o=v1(t.serverSyncTree_,e._path,s,a)}return bn(t.eventQueue_,e._path,o),sd(t.serverSyncTree_,e,n,null,!0),s},i=>(Lu(t,"get for query "+ct(e)+" failed: "+i),Promise.reject(new Error(i))))}function tU(t,e,n,r,i){Lu(t,"set",{path:e.toString(),value:n,priority:r});const s=mf(t),o=Ze(n,r),a=N_(t.serverSyncTree_,e),l=S1(o,a,s),c=z_(t),h=_1(t.serverSyncTree_,e,l,c,!0);pf(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,w)=>{const E=m==="ok";E||Qt("set at "+e+" failed: "+m);const A=fi(t.serverSyncTree_,c,!E);bn(t.eventQueue_,e,A),Vi(t,i,m,w)});const f=$_(t,e);na(t,f),bn(t.eventQueue_,f,[])}function nU(t,e,n,r){Lu(t,"update",{path:e.toString(),value:n});let i=!0;const s=mf(t),o={};if(wt(n,(a,l)=>{i=!1,o[a]=I1(qe(e,a),Ze(l),t.serverSyncTree_,s)}),i)_t("update() called with empty data.  Don't do anything."),Vi(t,r,"ok",void 0);else{const a=z_(t),l=SF(t.serverSyncTree_,e,o,a);pf(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Qt("update at "+e+" failed: "+c);const m=fi(t.serverSyncTree_,a,!f),w=m.length>0?na(t,e):e;bn(t.eventQueue_,w,m),Vi(t,r,c,h)}),wt(n,c=>{const h=$_(t,qe(e,c));na(t,h)}),bn(t.eventQueue_,e,[])}}function rU(t){Lu(t,"onDisconnectEvents");const e=mf(t),n=Xh();sg(t.onDisconnect_,Ee(),(i,s)=>{const o=I1(i,s,t.serverSyncTree_,e);pa(n,i,o)});let r=[];sg(n,Ee(),(i,s)=>{r=r.concat(Du(t.serverSyncTree_,i,s));const o=$_(t,i);na(t,o)}),t.onDisconnect_=Xh(),bn(t.eventQueue_,Ee(),r)}function iU(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&ig(t.onDisconnect_,e),Vi(t,n,r,i)})}function dT(t,e,n,r){const i=Ze(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&pa(t.onDisconnect_,e,i),Vi(t,r,s,o)})}function sU(t,e,n,r,i){const s=Ze(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&pa(t.onDisconnect_,e,s),Vi(t,i,o,a)})}function oU(t,e,n,r){if(Nh(n)){_t("onDisconnect().update() called with empty data.  Don't do anything."),Vi(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&wt(n,(o,a)=>{const l=Ze(a);pa(t.onDisconnect_,qe(e,o),l)}),Vi(t,r,i,s)})}function aU(t,e,n){let r;le(e._path)===".info"?r=hg(t.infoSyncTree_,e,n):r=hg(t.serverSyncTree_,e,n),b1(t.eventQueue_,e._path,r)}function fg(t,e,n){let r;le(e._path)===".info"?r=sd(t.infoSyncTree_,e,n):r=sd(t.serverSyncTree_,e,n),b1(t.eventQueue_,e._path,r)}function lU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(QF)}function Lu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_t(n,...e)}function Vi(t,e,n,r){e&&fa(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function L1(t,e,n){return N_(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function W_(t,e=t.transactionQueueTree_){if(e||gf(t,e),ga(e)){const n=V1(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&uU(t,Ou(e),n)}else k1(e)&&df(e,n=>{W_(t,n)})}function uU(t,e,n){const r=n.map(c=>c.currentWriteId),i=L1(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];z(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Gt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Lu(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(fi(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();gf(t,F_(t.transactionQueueTree_,e)),W_(t,t.transactionQueueTree_),bn(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)fa(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Qt("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}na(t,e)}},o)}function na(t,e){const n=M1(t,e),r=Ou(n),i=V1(t,n);return cU(t,i,r),r}function cU(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Gt(n,l.path);let h=!1,f;if(z(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,i=i.concat(fi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=YF)h=!0,f="maxretry",i=i.concat(fi(t.serverSyncTree_,l.currentWriteId,!0));else{const m=L1(t,l.path,o);l.currentInputSnapshot=m;const w=e[a].update(m.val());if(w!==void 0){ff("transaction failed: Data returned ",w,l.path);let E=Ze(w);typeof w=="object"&&w!=null&&hr(w,".priority")||(E=E.updatePriority(m.getPriority()));const N=l.currentWriteId,I=mf(t),T=S1(E,m,I);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=T,l.currentWriteId=z_(t),o.splice(o.indexOf(N),1),i=i.concat(_1(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),i=i.concat(fi(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",i=i.concat(fi(t.serverSyncTree_,l.currentWriteId,!0))}bn(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}gf(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)fa(r[a]);W_(t,t.transactionQueueTree_)}function M1(t,e){let n,r=t.transactionQueueTree_;for(n=le(e);n!==null&&ga(r)===void 0;)r=F_(r,n),e=Ne(e),n=le(e);return r}function V1(t,e){const n=[];return j1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function j1(t,e,n){const r=ga(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);df(e,i=>{j1(t,i,n)})}function gf(t,e){const n=ga(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,C1(e,n.length>0?n:void 0)}df(e,r=>{gf(t,r)})}function $_(t,e){const n=Ou(M1(t,e)),r=F_(t.transactionQueueTree_,e);return jF(r,i=>{xp(t,i)}),xp(t,r),x1(r,i=>{xp(t,i)}),n}function xp(t,e){const n=ga(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?C1(e,void 0):n.length=s+1,bn(t.eventQueue_,Ou(e),i);for(let o=0;o<r.length;o++)fa(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function dU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const fT=function(t,e){const n=fU(t),r=n.namespace;n.domain==="firebase.com"&&zr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||E4();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Bx(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Re(n.pathString)}},fU=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=hU(t.substring(h,f)));const m=dU(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const w=e.slice(0,c);if(w.toLowerCase()==="localhost")n="localhost";else if(w.split(".").length<=2)n=w;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pU=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=pT.charAt(n%64),n=Math.floor(n/64);z(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=pT.charAt(e[i]);return z(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mU{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ct(this.snapshot.exportVal())}}class gU{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class yU{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new tr;return iU(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){us("OnDisconnect.remove",this._path);const e=new tr;return dT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){us("OnDisconnect.set",this._path),od("OnDisconnect.set",e,this._path,!1);const n=new tr;return dT(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){us("OnDisconnect.setWithPriority",this._path),od("OnDisconnect.setWithPriority",e,this._path,!1),$F("OnDisconnect.setWithPriority",n);const r=new tr;return sU(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){us("OnDisconnect.update",this._path),P1("OnDisconnect.update",e,this._path);const n=new tr;return oU(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ue(this._path)?null:__(this._path)}get ref(){return new qr(this._repo,this._path)}get _queryIdentifier(){const e=JE(this._queryParams),n=p_(e);return n==="{}"?"default":n}get _queryObject(){return JE(this._queryParams)}isEqual(e){if(e=Te(e),!(e instanceof H_))return!1;const n=this._repo===e._repo,r=v_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ij(this._path)}}class qr extends H_{constructor(e,n){super(e,n,new I_,!1)}get parent(){const e=Yx(this._path);return e===null?null:new qr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class uu{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Re(e),r=cu(this.ref,e);return new uu(this._node.getChild(n),r,Ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new uu(i,cu(this.ref,r),Ge)))}hasChild(e){const n=new Re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ie(t,e){return t=Te(t),t._checkNotDeleted("ref"),e!==void 0?cu(t._root,e):t._root}function cu(t,e){return t=Te(t),le(t._path)===null?HF("child","path",e):N1("child","path",e),new qr(t._repo,qe(t._path,e))}function _U(t){return t=Te(t),new yU(t._repo,t._path)}function U1(t,e){t=Te(t),us("push",t._path),od("push",e,t._path,!0);const n=O1(t._repo),r=pU(n),i=cu(t,r),s=cu(t,r);let o;return e!=null?o=ya(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Hs(t){return us("remove",t._path),ya(t,null)}function ya(t,e){t=Te(t),us("set",t._path),od("set",e,t._path,!1);const n=new tr;return tU(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ur(t,e){P1("update",e,t._path);const n=new tr;return nU(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function q_(t){t=Te(t);const e=new F1(()=>{}),n=new yf(e);return eU(t._repo,t,n).then(r=>new uu(r,new qr(t._repo,t._path),t._queryParams.getIndex()))}class yf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new mU("value",this,new uu(e.snapshotNode,new qr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gU(this,e,n):null}matches(e){return e instanceof yf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function vU(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(h,f)=>{fg(t._repo,t,a),l(h,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new F1(n,s||void 0),a=new yf(o);return aU(t._repo,t,a),()=>fg(t._repo,t,a)}function _a(t,e,n,r){return vU(t,"value",e,n,r)}function G_(t,e,n){fg(t._repo,t,null)}gF(qr);EF(qr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wU="FIREBASE_DATABASE_EMULATOR_HOST",pg={};let EU=!1;function TU(t,e,n,r){t.repoInfo_=new Bx(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function IU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||zr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fT(s,i),a=o.repoInfo,l;typeof process<"u"&&OE&&(l=OE[wU]),l?(s=`http://${l}?ns=${a.namespace}`,o=fT(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new b4(t.name,t.options,e);qF("Invalid Firebase Database URL",o),ue(o.path)||zr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=CU(a,t,c,new N4(t.name,n));return new kU(h,t)}function SU(t,e){const n=pg[e];(!n||n[t.key]!==t)&&zr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lU(t),delete n[t.key]}function CU(t,e,n,r){let i=pg[e.name];i||(i={},pg[e.name]=i);let s=i[t.toURLString()];return s&&zr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new XF(t,EU,n,r),i[t.toURLString()]=s,s}class kU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qr(this._repo,Ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zr("Cannot call "+e+" on a deleted database.")}}function xU(t=bd(),e){const n=Vs(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=dC("database");r&&RU(n,...r)}return n}function RU(t,e,n,r={}){t=Te(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&zr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new nh(nh.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:mC(r.mockUserToken,t.app.options.projectId);s=new nh(o)}TU(i,e,n,s)}/**
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
 */function AU(t){m4(js),Qn(new Pn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return IU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),an(LE,ME,t),an(LE,ME,"esm2017")}Nr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};AU();const B1="@firebase/installations",K_="0.6.9";/**
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
 */const z1=1e4,W1=`w:${K_}`,$1="FIS_v2",PU="https://firebaseinstallations.googleapis.com/v1",NU=60*60*1e3,bU="installations",DU="Installations";/**
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
 */const OU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},As=new Ms(bU,DU,OU);function H1(t){return t instanceof cr&&t.code.includes("request-failed")}/**
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
 */function q1({projectId:t}){return`${PU}/projects/${t}/installations`}function G1(t){return{token:t.token,requestStatus:2,expiresIn:MU(t.expiresIn),creationTime:Date.now()}}async function K1(t,e){const r=(await e.json()).error;return As.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Q1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function LU(t,{refreshToken:e}){const n=Q1(t);return n.append("Authorization",VU(e)),n}async function Y1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function MU(t){return Number(t.replace("s","000"))}function VU(t){return`${$1} ${t}`}/**
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
 */async function jU({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=q1(t),i=Q1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:$1,appId:t.appId,sdkVersion:W1},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Y1(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:G1(c.authToken)}}else throw await K1("Create Installation",l)}/**
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
 */function X1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function FU(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const UU=/^[cdef][\w-]{21}$/,mg="";function BU(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=zU(t);return UU.test(n)?n:mg}catch{return mg}}function zU(t){return FU(t).substr(0,22)}/**
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
 */function _f(t){return`${t.appName}!${t.appId}`}/**
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
 */const J1=new Map;function Z1(t,e){const n=_f(t);eR(n,e),WU(n,e)}function eR(t,e){const n=J1.get(t);if(n)for(const r of n)r(e)}function WU(t,e){const n=$U();n&&n.postMessage({key:t,fid:e}),HU()}let cs=null;function $U(){return!cs&&"BroadcastChannel"in self&&(cs=new BroadcastChannel("[Firebase] FID Change"),cs.onmessage=t=>{eR(t.data.key,t.data.fid)}),cs}function HU(){J1.size===0&&cs&&(cs.close(),cs=null)}/**
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
 */const qU="firebase-installations-database",GU=1,Ps="firebase-installations-store";let Rp=null;function Q_(){return Rp||(Rp=Nd(qU,GU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ps)}}})),Rp}async function ad(t,e){const n=_f(t),i=(await Q_()).transaction(Ps,"readwrite"),s=i.objectStore(Ps),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Z1(t,e.fid),e}async function tR(t){const e=_f(t),r=(await Q_()).transaction(Ps,"readwrite");await r.objectStore(Ps).delete(e),await r.done}async function vf(t,e){const n=_f(t),i=(await Q_()).transaction(Ps,"readwrite"),s=i.objectStore(Ps),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Z1(t,a.fid),a}/**
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
 */async function Y_(t){let e;const n=await vf(t.appConfig,r=>{const i=KU(r),s=QU(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===mg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function KU(t){const e=t||{fid:BU(),registrationStatus:0};return nR(e)}function QU(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(As.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=YU(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:XU(t)}:{installationEntry:e}}async function YU(t,e){try{const n=await jU(t,e);return ad(t.appConfig,n)}catch(n){throw H1(n)&&n.customData.serverCode===409?await tR(t.appConfig):await ad(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function XU(t){let e=await mT(t.appConfig);for(;e.registrationStatus===1;)await X1(100),e=await mT(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Y_(t);return r||n}return e}function mT(t){return vf(t,e=>{if(!e)throw As.create("installation-not-found");return nR(e)})}function nR(t){return JU(t)?{fid:t.fid,registrationStatus:0}:t}function JU(t){return t.registrationStatus===1&&t.registrationTime+z1<Date.now()}/**
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
 */async function ZU({appConfig:t,heartbeatServiceProvider:e},n){const r=e3(t,n),i=LU(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:W1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Y1(()=>fetch(r,a));if(l.ok){const c=await l.json();return G1(c)}else throw await K1("Generate Auth Token",l)}function e3(t,{fid:e}){return`${q1(t)}/${e}/authTokens:generate`}/**
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
 */async function X_(t,e=!1){let n;const r=await vf(t.appConfig,s=>{if(!rR(s))throw As.create("not-registered");const o=s.authToken;if(!e&&r3(o))return s;if(o.requestStatus===1)return n=t3(t,e),s;{if(!navigator.onLine)throw As.create("app-offline");const a=s3(s);return n=n3(t,a),a}});return n?await n:r.authToken}async function t3(t,e){let n=await gT(t.appConfig);for(;n.authToken.requestStatus===1;)await X1(100),n=await gT(t.appConfig);const r=n.authToken;return r.requestStatus===0?X_(t,e):r}function gT(t){return vf(t,e=>{if(!rR(e))throw As.create("not-registered");const n=e.authToken;return o3(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function n3(t,e){try{const n=await ZU(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ad(t.appConfig,r),n}catch(n){if(H1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tR(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ad(t.appConfig,r)}throw n}}function rR(t){return t!==void 0&&t.registrationStatus===2}function r3(t){return t.requestStatus===2&&!i3(t)}function i3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+NU}function s3(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function o3(t){return t.requestStatus===1&&t.requestTime+z1<Date.now()}/**
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
 */async function a3(t){const e=t,{installationEntry:n,registrationPromise:r}=await Y_(e);return r?r.catch(console.error):X_(e).catch(console.error),n.fid}/**
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
 */async function l3(t,e=!1){const n=t;return await u3(n),(await X_(n,e)).token}async function u3(t){const{registrationPromise:e}=await Y_(t);e&&await e}/**
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
 */function c3(t){if(!t||!t.options)throw Ap("App Configuration");if(!t.name)throw Ap("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ap(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ap(t){return As.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="installations",h3="installations-internal",d3=t=>{const e=t.getProvider("app").getImmediate(),n=c3(e),r=Vs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},f3=t=>{const e=t.getProvider("app").getImmediate(),n=Vs(e,iR).getImmediate();return{getId:()=>a3(n),getToken:i=>l3(n,i)}};function p3(){Qn(new Pn(iR,d3,"PUBLIC")),Qn(new Pn(h3,f3,"PRIVATE"))}p3();an(B1,K_);an(B1,K_,"esm2017");/**
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
 */const m3="/firebase-messaging-sw.js",g3="/firebase-cloud-messaging-push-scope",sR="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",y3="https://fcmregistrations.googleapis.com/v1",oR="google.c.a.c_id",_3="google.c.a.c_l",v3="google.c.a.ts",w3="google.c.a.e";var yT;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(yT||(yT={}));/**
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
 */var hu;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(hu||(hu={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function E3(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Pp="fcm_token_details_db",T3=5,_T="fcm_token_object_Store";async function I3(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Pp))return null;let e=null;return(await Nd(Pp,T3,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(_T))return;const l=o.objectStore(_T),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:yr(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:yr(h.auth),p256dh:yr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:yr(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:yr(h.auth),p256dh:yr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:yr(h.vapidKey)}}}}}})).close(),await dp(Pp),await dp("fcm_vapid_details_db"),await dp("undefined"),S3(e)?e:null}function S3(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const C3="firebase-messaging-database",k3=1,Ns="firebase-messaging-store";let Np=null;function J_(){return Np||(Np=Nd(C3,k3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ns)}}})),Np}async function aR(t){const e=ev(t),r=await(await J_()).transaction(Ns).objectStore(Ns).get(e);if(r)return r;{const i=await I3(t.appConfig.senderId);if(i)return await Z_(t,i),i}}async function Z_(t,e){const n=ev(t),i=(await J_()).transaction(Ns,"readwrite");return await i.objectStore(Ns).put(e,n),await i.done,e}async function x3(t){const e=ev(t),r=(await J_()).transaction(Ns,"readwrite");await r.objectStore(Ns).delete(e),await r.done}function ev({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},At=new Ms("messaging","Messaging",R3);/**
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
 */async function A3(t,e){const n=await nv(t),r=uR(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(tv(t.appConfig),i)).json()}catch(o){throw At.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw At.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw At.create("token-subscribe-no-token");return s.token}async function P3(t,e){const n=await nv(t),r=uR(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${tv(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw At.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw At.create("token-update-failed",{errorInfo:o})}if(!s.token)throw At.create("token-update-no-token");return s.token}async function lR(t,e){const r={method:"DELETE",headers:await nv(t)};try{const s=await(await fetch(`${tv(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw At.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw At.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function tv({projectId:t}){return`${y3}/projects/${t}/registrations`}async function nv({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function uR({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==sR&&(i.web.applicationPubKey=r),i}/**
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
 */const N3=7*24*60*60*1e3;async function b3(t){const e=await L3(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:yr(e.getKey("auth")),p256dh:yr(e.getKey("p256dh"))},r=await aR(t.firebaseDependencies);if(r){if(M3(r.subscriptionOptions,n))return Date.now()>=r.createTime+N3?O3(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await lR(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return vT(t.firebaseDependencies,n)}else return vT(t.firebaseDependencies,n)}async function D3(t){const e=await aR(t.firebaseDependencies);e&&(await lR(t.firebaseDependencies,e.token),await x3(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function O3(t,e){try{const n=await P3(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Z_(t.firebaseDependencies,r),n}catch(n){throw n}}async function vT(t,e){const r={token:await A3(t,e),createTime:Date.now(),subscriptionOptions:e};return await Z_(t,r),r.token}async function L3(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:E3(e)})}function M3(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return V3(e,t),j3(e,t),F3(e,t),e}function V3(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function j3(t,e){e.data&&(t.data=e.data)}function F3(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function U3(t){return typeof t=="object"&&!!t&&oR in t}/**
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
 */function B3(t){if(!t||!t.options)throw bp("App Configuration Object");if(!t.name)throw bp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw bp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function bp(t){return At.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z3{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=B3(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(t){try{t.swRegistration=await navigator.serviceWorker.register(m3,{scope:g3}),t.swRegistration.update().catch(()=>{})}catch(e){throw At.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W3(t,e){if(!e&&!t.swRegistration&&await cR(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw At.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $3(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=sR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t,e){if(!navigator)throw At.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw At.create("permission-blocked");return await $3(t,e==null?void 0:e.vapidKey),await W3(t,e==null?void 0:e.serviceWorkerRegistration),b3(t)}/**
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
 */async function H3(t,e,n){const r=q3(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[oR],message_name:n[_3],message_time:n[v3],message_device_time:Math.floor(Date.now()/1e3)})}function q3(t){switch(t){case hu.NOTIFICATION_CLICKED:return"notification_open";case hu.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G3(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===hu.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(wT(n)):t.onMessageHandler.next(wT(n)));const r=n.data;U3(r)&&r[w3]==="1"&&await H3(t,n.messageType,r)}const ET="@firebase/messaging",TT="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K3=t=>{const e=new z3(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>G3(e,n)),e},Q3=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>hR(e,r)}};function Y3(){Qn(new Pn("messaging",K3,"PUBLIC")),Qn(new Pn("messaging-internal",Q3,"PRIVATE")),an(ET,TT),an(ET,TT,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(){try{await _C()}catch{return!1}return typeof window<"u"&&yC()&&Ob()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X3(t){if(!navigator)throw At.create("only-available-in-window");return t.swRegistration||await cR(t),D3(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J3(t,e){if(!navigator)throw At.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t=bd()){return rv().then(e=>{if(!e)throw At.create("unsupported-browser")},e=>{throw At.create("indexed-db-unsupported")}),Vs(Te(t),"messaging").getImmediate()}async function Z3(t,e){return t=Te(t),hR(t,e)}function eB(t){return t=Te(t),X3(t)}function tB(t,e){return t=Te(t),J3(t,e)}Y3();const fR=Object.freeze(Object.defineProperty({__proto__:null,deleteToken:eB,getMessaging:dR,getToken:Z3,isSupported:rv,onMessage:tB},Symbol.toStringTag,{value:"Module"})),nB={apiKey:"AIzaSyAbAb2YcqvSaahSV_UITjQtk8UArYSaDdY",authDomain:"dingo-new-version.firebaseapp.com",databaseURL:"https://dingo-new-version-default-rtdb.firebaseio.com",projectId:"dingo-new-version",storageBucket:"dingo-new-version.firebasestorage.app",messagingSenderId:"245470329002",appId:"1:245470329002:web:f0fae2a906e773629578d3"},rB="GG6zruC_lQSTKwuBvOudnROxxtXFMGufChhrzU7M6vQ",wf=TC(nB),Mu=hL(wf),ze=ZV(wf),Se=xU(wf);let du=null;rv().then(t=>{t&&(du=dR(wf))}).catch(()=>{});function iB(){return String(Math.floor(1e7+Math.random()*9e7))}async function pR(t,e){const n=un(ze,"users",t);(await nf(n)).exists()?await xn(n,{isOnline:!0}):await d4(n,{displayName:e.displayName||"Player",email:e.email||"",avatar:e.avatar||"🎯",color:e.color||"#00ffcc",shortId:iB(),wins:0,losses:0,total:0,winRate:0,streak:0,friends:[],isOnline:!0,fcmToken:null,createdAt:sf()})}async function sB(t){const e=await nf(un(ze,"users",t));return e.exists()?{uid:t,...e.data()}:null}async function mR(t,e){const{shortId:n,...r}=e;await xn(un(ze,"users",t),r)}async function IT(t,e){try{await xn(un(ze,"users",t),{isOnline:e,lastSeen:sf()})}catch{}}async function oB(t,e){await xn(un(ze,"users",t),{fcmToken:e})}async function aB(t){const e=Br(Xn(ze,"users"),lr("displayName",">=",t),lr("displayName","<=",t+""));return(await Di(e)).docs.map(r=>({uid:r.id,...r.data()}))}async function lB(t){const e=String(t).replace(/^#/,"").trim();if(!e)return[];try{const n=Br(Xn(ze,"users"),lr("shortId","==",e));return(await Di(n)).docs.map(i=>({uid:i.id,...i.data()}))}catch(n){return console.error("searchUserByShortId error:",n),[]}}const uB=new wr;function cB(t){return ZD(Mu,t)}async function hB(t,e){return(await KD(Mu,t,e)).user}async function dB(t,e,n){const r=await GD(Mu,t,e);return await YD(r.user,{displayName:n}),await pR(r.user.uid,{displayName:n,email:t,avatar:"🎯",color:"#00ffcc"}),r.user}async function fB(){const t=await wO(Mu,uB);return await pR(t.user.uid,{displayName:t.user.displayName||"Player",email:t.user.email,avatar:"🎯",color:"#00ffcc"}),t.user}async function gR(){await eO(Mu)}const yR=b.createContext(null);function On(){return b.useContext(yR)}function pB({children:t}){const[e,n]=b.useState(null),[r,i]=b.useState(null),[s,o]=b.useState(!0),a=async l=>{if(!l)return;const c=await sB(l);i(c)};return b.useEffect(()=>{const l=cB(async h=>{n(h),h?(await a(h.uid),IT(h.uid,!0)):i(null),o(!1)}),c=()=>{e&&IT(e.uid,!1)};return window.addEventListener("beforeunload",c),()=>{l(),window.removeEventListener("beforeunload",c)}},[]),p.jsx(yR.Provider,{value:{user:e,profile:r,loading:s,refreshProfile:a},children:t})}function mB(){const[t,e]=b.useState([]);return b.useEffect(()=>{const n=r=>{const i=Date.now();e(s=>[...s,{id:i,...r.detail}]),setTimeout(()=>{e(s=>s.filter(o=>o.id!==i))},3500)};return window.addEventListener("dingo-toast",n),()=>window.removeEventListener("dingo-toast",n)},[]),t.length?p.jsx("div",{className:"toast-container",children:t.map(n=>p.jsx("div",{className:`toast ${n.type||"info"}`,children:p.jsxs("div",{children:[p.jsx("div",{className:"toast-title",children:n.title}),n.body&&p.jsx("div",{className:"toast-body",children:n.body})]})},n.id))}):null}function iv(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function sv(t,e,n){await ya(Ie(Se,`rooms/${t}`),{gameState:{status:"waiting",turn:"p1",p1Board:n,p2Board:[],calledNumbers:[],p1Lines:0,p2Lines:0,p1Chances:5,p2Chances:5,winner:null,tie:!1,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{...e,role:"p1"}},rematch:{p1:!1,p2:!1,newRoomId:null}})}async function ov(t,e,n){var s;const r=await q_(Ie(Se,`rooms/${t}`));if(!r.exists())throw new Error("Room not found");const i=r.val();if((s=i.players)!=null&&s.p2)throw new Error("Room is full");return await ur(Ie(Se,`rooms/${t}`),{"players/p2":{...e,role:"p2"},"gameState/p2Board":n,"gameState/status":"playing","gameState/turnStartedAt":Date.now()}),i}function _R(t,e){const n=Ie(Se,`rooms/${t}`);return _a(n,r=>e(r.val())),()=>G_(n)}async function Ka(t,e,n,r,i,s=!1){const o={"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i};s||(o["gameState/turn"]=e==="p1"?"p2":"p1",o["gameState/turnStartedAt"]=Date.now()),await ur(Ie(Se,`rooms/${t}`),o)}async function gB(t,e,n,r,i,s){await ur(Ie(Se,`rooms/${t}`),{"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i,[`gameState/${e}Chances`]:s,"gameState/turn":e==="p1"?"p2":"p1","gameState/turnStartedAt":Date.now()})}function vR(t){setTimeout(()=>{Hs(Ie(Se,`rooms/${t}`)).catch(()=>{})},3*60*1e3)}async function Qa(t,e){await ur(Ie(Se,`rooms/${t}/gameState`),{winner:e,status:"finished",tie:!1}),vR(t)}async function ST(t){await ur(Ie(Se,`rooms/${t}/gameState`),{winner:null,tie:!0,status:"finished"}),vR(t)}async function yB(t,e){await U1(Ie(Se,`rooms/${t}/chat`),{...e,ts:Date.now()})}async function _B(t,e){await ur(Ie(Se,`rooms/${t}/gameState`),{[`${e}Exited`]:!0})}async function vB(t){try{await Hs(Ie(Se,`rooms/${t}`))}catch{}}async function wB(t,e,n,r){await ur(Ie(Se,`rooms/${t}/rematch`),{[e]:!0});const s=(await q_(Ie(Se,`rooms/${t}/rematch`))).val()||{};if(!s.p1||!s.p2||s.newRoomId)return null;const o=iv();return await sv(o,r,n),await ur(Ie(Se,`rooms/${t}/rematch`),{newRoomId:o}),o}async function EB(t,e,n,r,i){const s=iv();await sv(s,{uid:t,name:e,avatar:n},i);const o=Ie(Se,`invites/${r}`),a=await U1(o,{from:t,fromName:e,fromAvatar:n,roomId:s,ts:Date.now(),status:"pending"});return{roomId:s,inviteId:a.key}}function TB(t,e){const n=Ie(Se,`invites/${t}`);return _a(n,r=>{if(!r.exists()){e([]);return}const i=r.val(),s=Object.entries(i).map(([o,a])=>({id:o,...a})).filter(o=>o.status==="pending").sort((o,a)=>a.ts-o.ts);e(s)},()=>e([])),()=>G_(n)}async function IB(t,e,n,r){const i=await q_(Ie(Se,`invites/${t}/${e}`));if(!i.exists())throw new Error("Invite no longer valid");const s=i.val();return await Hs(Ie(Se,`invites/${t}/${e}`)),await ov(s.roomId,n,r),s.roomId}async function SB(t,e){try{await Hs(Ie(Se,`invites/${t}/${e}`))}catch{}}const av=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]];function bs(){const t=Array.from({length:25},(e,n)=>n+1);for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function St(t,e){if(!t||t.length===0)return 0;const n=new Set(e);return av.filter(r=>r.every(i=>n.has(t[i]))).length}function wR(t,e){if(!t||t.length===0)return[];const n=new Set(e);return av.filter(r=>r.every(i=>n.has(t[i])))}function CB(t,e){const n=new Set;return wR(t,e).forEach(r=>r.forEach(i=>n.add(i))),[...n]}function ld(t,e,n){const r=new Set([...e,n]);let i=0;for(const s of av){const o=s.filter(a=>r.has(t[a])).length;o===5?i+=1e6:o===4?i+=5e4:o===3?i+=1e3:o===2?i+=20:o===1&&(i+=1)}return i}function to(t,e,n,r,i){const s=ld(t,n,r),o=ld(e,n,r);return s+o*i}function kB(t,e,n,r){var s;const i=Array.from({length:25},(o,a)=>a+1).filter(o=>!e.includes(o));if(i.length===0)return null;if(t==="easy")return i[Math.floor(Math.random()*i.length)];if(t==="medium")return i.reduce((o,a)=>ld(r,e,a)>ld(r,e,o)?a:o,i[0]);if(t==="hard"){for(const o of i)if(St(r,[...e,o])>=5)return o;for(const o of i)if(St(n,[...e,o])>=5)return o;return i.reduce((o,a)=>to(r,n,e,a,.4)>to(r,n,e,o,.4)?a:o,i[0])}if(t==="expert"){for(const o of i)if(St(r,[...e,o])>=5)return o;for(const o of i)if(St(n,[...e,o])>=5)return o;for(const o of i)if(St(n,[...e,o])>=4)return o;return i.reduce((o,a)=>to(r,n,e,a,.7)>to(r,n,e,o,.7)?a:o,i[0])}if(t==="nightmare"||t==="godmode"){for(const a of i)if(St(r,[...e,a])>=5)return a;for(const a of i)if(St(n,[...e,a])>=5)return a;if(t==="godmode"){const a=i.map(l=>({num:l,oppLines:St(n,[...e,l])})).sort((l,c)=>c.oppLines-l.oppLines);if(((s=a[0])==null?void 0:s.oppLines)>=4)return a[0].num}const o=t==="godmode"?1.2:.9;return i.reduce((a,l)=>to(r,n,e,l,o)>to(r,n,e,a,o)?l:a,i[0])}return i[Math.floor(Math.random()*i.length)]}async function Dp(t,e){try{await Hs(Ie(Se,`invites/${t}/${e}`))}catch{}}function xB(t,e){const n=Ie(Se,`invites/${t}`);return _a(n,r=>{if(!r.exists()){e(null);return}const i=r.val(),s=Date.now(),o=Object.entries(i).filter(([,a])=>a.expiresAt>s).map(([a,l])=>({id:a,...l})).sort((a,l)=>a.sentAt-l.sentAt);e(o.length>0?o[0]:null)},()=>e(null)),()=>G_(n)}function RB(){try{return new(window.AudioContext||window.webkitAudioContext)}catch{return null}}let Yi=null;function Vu(){return Yi||(Yi=RB()),(Yi==null?void 0:Yi.state)==="suspended"&&Yi.resume(),Yi}function ju(){const t=parseFloat(localStorage.getItem("sfxVolume")??"0.75");return isNaN(t)?.75:Math.max(0,Math.min(1,t))}function Ct(t,e=.1,n="sine",r=.1){const i=ju();if(i===0)return;const s=Vu();if(!s)return;const o=s.createOscillator(),a=s.createGain();o.connect(a),a.connect(s.destination),o.type=n,o.frequency.value=t,a.gain.setValueAtTime(e*i,s.currentTime),a.gain.exponentialRampToValueAtTime(.001,s.currentTime+r),o.start(),o.stop(s.currentTime+r)}function ms(t,e,n=.1,r="sine"){const i=ju();if(i===0)return;const s=Vu();if(!s)return;const o=s.createOscillator(),a=s.createGain();o.connect(a),a.connect(s.destination),o.type=r,o.frequency.setValueAtTime(t,s.currentTime),o.frequency.exponentialRampToValueAtTime(e,s.currentTime+.15),a.gain.setValueAtTime(n*i,s.currentTime),a.gain.exponentialRampToValueAtTime(.001,s.currentTime+.15),o.start(),o.stop(s.currentTime+.15)}function Fu(t,e=.1,n="sine"){t.forEach((r,i)=>setTimeout(()=>Ct(r,e,n,.3),i*60))}function rh(t=.05,e=100){const n=ju();if(n===0)return;const r=Vu();if(!r)return;const i=r.createBuffer(1,r.sampleRate*.05,r.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const o=r.createBufferSource(),a=r.createBiquadFilter(),l=r.createGain();o.buffer=i,a.type="highpass",a.frequency.value=e,o.connect(a),a.connect(l),l.connect(r.destination),l.gain.setValueAtTime(t*n,r.currentTime),l.gain.exponentialRampToValueAtTime(.001,r.currentTime+.05),o.start(),o.stop(r.currentTime+.05)}function Xi(t=.08,e=200,n=.12){const r=ju();if(r===0)return;const i=Vu();if(!i)return;const s=i.createBuffer(1,i.sampleRate*n,i.sampleRate),o=s.getChannelData(0);for(let h=0;h<o.length;h++)o[h]=Math.random()*2-1;const a=i.createBufferSource(),l=i.createBiquadFilter(),c=i.createGain();a.buffer=s,l.type="bandpass",l.frequency.value=e,a.connect(l),l.connect(c),c.connect(i.destination),c.gain.setValueAtTime(t*r,i.currentTime),c.gain.exponentialRampToValueAtTime(.001,i.currentTime+n),a.start(),a.stop(i.currentTime+n)}function no(t,e=.12){const n=ju();if(n===0)return;const r=Vu();if(!r)return;const i=r.createOscillator(),s=r.createGain(),o=r.createOscillator(),a=r.createGain();i.connect(s),s.connect(r.destination),o.connect(a),a.connect(r.destination),i.type="sine",i.frequency.value=t,o.type="sine",o.frequency.value=t*2,s.gain.setValueAtTime(e*n,r.currentTime),s.gain.exponentialRampToValueAtTime(.001,r.currentTime+.8),a.gain.setValueAtTime(e*.3*n,r.currentTime),a.gain.exponentialRampToValueAtTime(.001,r.currentTime+.4),i.start(),i.stop(r.currentTime+.8),o.start(),o.stop(r.currentTime+.4)}function Uu(t=1){[523,659,784,1047].forEach((e,n)=>setTimeout(()=>Ct(e,.15,"square",.2/t),n*100/t))}function Bu(t=1){[400,320,250].forEach((e,n)=>setTimeout(()=>Ct(e,.1,"sawtooth",.25/t),n*120/t))}const ER={click:()=>Ct(880,.05,"square",.1),cross:()=>Ct(660,.1,"square",.15),line:()=>Fu([523,659,784],.2),win:()=>Uu(),lose:()=>Bu(),ping:()=>Ct(1200,.05,"sine",.08)},AB={click:()=>rh(.03,80),cross:()=>ms(800,200,.12,"sawtooth"),line:()=>Fu([400,500,600],.18,"sawtooth"),win:()=>Uu(1.2),lose:()=>Bu(.8),ping:()=>Ct(1400,.03,"sine",.06)},PB={click:()=>ms(300,600,.08,"sine"),cross:()=>ms(600,100,.15,"sine"),line:()=>Fu([261,329,392],.25,"sine"),win:()=>Uu(.9),lose:()=>Bu(.7),ping:()=>ms(800,1200,.06,"sine")},NB={click:()=>Ct(220,.04,"sine",.2),cross:()=>Ct(330,.06,"sine",.25),line:()=>Fu([261,329,392],.12,"sine"),win:()=>Uu(.6),lose:()=>Bu(.5),ping:()=>Ct(440,.03,"sine",.15)},bB={click:()=>ms(400,800,.08,"square"),cross:()=>ms(200,1e3,.12,"square"),line:()=>Fu([523,784,1047],.18,"square"),win:()=>Uu(1.4),lose:()=>Bu(1.2),ping:()=>ms(600,1400,.05,"square")},DB={click:()=>no(880,.08),cross:()=>no(659,.12),line:()=>{[523,659,784].forEach((t,e)=>setTimeout(()=>no(t,.14),e*80))},win:()=>{[523,587,659,698,784,880,988,1047].forEach((t,e)=>setTimeout(()=>no(t,.14),e*80))},lose:()=>{[440,392,349,294].forEach((t,e)=>setTimeout(()=>no(t,.12),e*110))},ping:()=>no(1100,.06)},OB={click:()=>rh(.04,4e3),cross:()=>Xi(.1,300,.15),line:()=>{Xi(.14,120,.2),setTimeout(()=>Xi(.1,300,.15),80)},win:()=>{[0,60,120,180,220,260].forEach(t=>setTimeout(()=>rh(.06,1e3),t)),setTimeout(()=>Xi(.2,800,.4),300)},lose:()=>{Xi(.1,200,.2),setTimeout(()=>Xi(.08,150,.3),150),setTimeout(()=>Xi(.06,100,.4),350)},ping:()=>rh(.03,8e3)},LB={click:()=>Ct(1200,.06,"square",.04),cross:()=>{Ct(400,.1,"square",.05),setTimeout(()=>Ct(800,.1,"square",.05),50)},line:()=>{[523,659,784,1047].forEach((t,e)=>setTimeout(()=>Ct(t,.14,"square",.06),e*55))},win:()=>{[659,659,659,523,659,784,392].forEach((e,n)=>setTimeout(()=>Ct(e,.15,"square",.1),n*90))},lose:()=>{[494,440,392,349,294].forEach((t,e)=>setTimeout(()=>Ct(t,.1,"square",.12),e*100))},ping:()=>Ct(1400,.04,"square",.03)},MB={classic:ER,ninja:AB,space:PB,lofi:NB,arcade:bB,piano:DB,drums:OB,chiptune:LB},VB=[{id:"classic",name:"Classic",icon:"🎮",desc:"Retro 8-bit bleeps"},{id:"ninja",name:"Ninja",icon:"🥷",desc:"Sharp sword slashes"},{id:"space",name:"Space",icon:"🌌",desc:"Sci-fi laser sounds"},{id:"lofi",name:"LoFi",icon:"🎵",desc:"Chill warm tones"},{id:"arcade",name:"Arcade",icon:"🕹️",desc:"Classic arcade bleeps"},{id:"piano",name:"Piano",icon:"🎹",desc:"Warm musical piano keys"},{id:"drums",name:"Drums",icon:"🥁",desc:"Punchy percussion hits"},{id:"chiptune",name:"Chiptune",icon:"👾",desc:"NES / Game Boy 8-bit"}],lv=[{id:"mute",label:"Mute",icon:"🔇",value:0},{id:"low",label:"Low",icon:"🔈",value:.2},{id:"med",label:"Med",icon:"🔉",value:.5},{id:"high",label:"High",icon:"🔊",value:.75},{id:"max",label:"Max",icon:"📢",value:1}];function xi(){const t=localStorage.getItem("sfxTheme")||"classic",e=MB[t]||ER;return{click:()=>e.click(),cross:()=>e.cross(),line:()=>e.line(),win:()=>e.win(),lose:()=>e.lose(),ping:()=>e.ping()}}function jB(t){localStorage.setItem("sfxTheme",t)}function FB(t){const e=lv.find(r=>r.id===t),n=e?e.value:parseFloat(t);localStorage.setItem("sfxVolume",String(isNaN(n)?.75:n))}function UB(){const t=parseFloat(localStorage.getItem("sfxVolume")??"0.75"),e=lv.find(n=>Math.abs(n.value-t)<.01);return(e==null?void 0:e.id)||"high"}const CT=45;function BB(){const{user:t,profile:e}=On(),n=Dn(),r=xi(),[i,s]=b.useState(null),[o,a]=b.useState(CT),[l,c]=b.useState(!1),h=b.useRef(null),f=b.useRef(null);f.current=i,b.useEffect(()=>{if(!(t!=null&&t.uid))return;const k=xB(t.uid,O=>{var M;if(!O){s(null);return}(M=r.ping)==null||M.call(r),s(O),c(!1);const F=Math.max(0,Math.round((O.expiresAt-Date.now())/1e3));a(F),clearInterval(h.current),h.current=setInterval(()=>{a(C=>C<=1?(clearInterval(h.current),f.current&&(Dp(t.uid,f.current.id).catch(()=>{}),s(null)),0):C-1)},1e3)});return()=>{k(),clearInterval(h.current)}},[t==null?void 0:t.uid]);const m=async()=>{if(!(!i||l)){c(!0),clearInterval(h.current);try{const k=bs(),O={uid:t.uid,name:(e==null?void 0:e.displayName)||"Player",avatar:(e==null?void 0:e.avatar)||"🎯"};await ov(i.roomId,O,k),await Dp(t.uid,i.id),s(null),n(`/game/${i.roomId}`,{state:{role:"p2",board:k}})}catch(k){console.error("Accept invite error:",k),c(!1)}}},w=async()=>{i&&(clearInterval(h.current),await Dp(t.uid,i.id).catch(()=>{}),s(null))};if(!i)return null;const E=44,A=(E-5)/2,N=2*Math.PI*A,I=o/CT,T=o<=10?"#ff2d55":o<=20?"#ffcc00":"#00ffcc";return p.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1e3,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,animation:"toastIn 0.3s ease"},children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--c1)",borderRadius:20,padding:"28px 24px",width:"100%",maxWidth:320,textAlign:"center",boxShadow:"0 0 40px rgba(0,255,204,0.2), 8px 8px 0 rgba(0,0,0,0.5)",position:"relative",overflow:"hidden"},children:[p.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,var(--c1),var(--c4))"}}),p.jsxs("div",{style:{position:"relative",width:E,height:E,margin:"0 auto 16px"},children:[p.jsx("div",{style:{width:E,height:E,borderRadius:"50%",background:"var(--panel2)",border:"2px solid var(--edge2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22},children:i.fromAvatar}),p.jsxs("svg",{width:E,height:E,style:{position:"absolute",top:0,left:0,pointerEvents:"none"},children:[p.jsx("circle",{cx:E/2,cy:E/2,r:A,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:4}),p.jsx("circle",{cx:E/2,cy:E/2,r:A,fill:"none",stroke:T,strokeWidth:4,strokeDasharray:N,strokeDashoffset:N*(1-I),strokeLinecap:"round",transform:`rotate(-90 ${E/2} ${E/2})`,style:{transition:"stroke-dashoffset 1s linear, stroke 0.4s"}})]}),p.jsxs("div",{style:{position:"absolute",bottom:-4,right:-8,background:T,color:"#000",fontSize:10,fontWeight:800,borderRadius:10,padding:"1px 5px",fontFamily:"'Black Han Sans',sans-serif"},children:[o,"s"]})]}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18,letterSpacing:1.5,marginBottom:4},children:"⚔️ MATCH INVITE"}),p.jsx("div",{style:{fontWeight:800,fontSize:16,marginBottom:4,color:"var(--ink)"},children:i.fromName}),p.jsxs("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:["challenges you to a match!",p.jsx("br",{}),p.jsxs("span",{style:{fontSize:11,color:T},children:["Expires in ",o,"s"]})]}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:w,style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink2)",WebkitTapHighlightColor:"transparent"},children:"✕ Decline"}),p.jsx("button",{onClick:m,disabled:l,style:{flex:2,padding:"12px 0",background:"var(--c1)",border:"none",borderRadius:"var(--r)",fontWeight:800,fontSize:13,cursor:"pointer",color:"#000",boxShadow:"3px 3px 0 rgba(0,255,204,0.3)",WebkitTapHighlightColor:"transparent",opacity:l?.6:1},children:l?"⏳ Joining…":"⚔️ Accept!"})]})]})})}const zB="modulepreload",WB=function(t){return"/DINGO-NEW-VERSION-/"+t},kT={},TR=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=WB(l),l in kT)return;kT[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":zB,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,w)=>{f.addEventListener("load",m),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};let $B=null;async function HB(t){if(!du)return null;try{const{getToken:e}=await TR(async()=>{const{getToken:i}=await Promise.resolve().then(()=>fR);return{getToken:i}},void 0);if(await Notification.requestPermission()!=="granted")return null;const r=await e(du,{vapidKey:rB});return r&&($B=r,await oB(t,r)),r}catch(e){return console.warn("Notification setup failed:",e),null}}function qB(t){if(!du)return()=>{};TR(async()=>{const{onMessage:e}=await Promise.resolve().then(()=>fR);return{onMessage:e}},void 0).then(({onMessage:e})=>{e(du,n=>{t(n)})})}function vr(t,e,n="info"){const r=new CustomEvent("dingo-toast",{detail:{title:t,body:e,type:n}});window.dispatchEvent(r)}const GB=[{icon:"🎯",title:"Your Unique Board",desc:"You and your opponent each get a 5×5 grid with the same 25 numbers (1–25) arranged in different random positions."},{icon:"📣",title:"Call a Number",desc:'On your turn, tap any number on your board to "call" it. That number instantly gets marked on BOTH boards — wherever it appears.'},{icon:"📏",title:"Complete Lines",desc:"Mark 5 numbers in a row — horizontally, vertically, or diagonally — to complete a line. Each player is racing to form lines on their own board layout."},{icon:"🏆",title:"Win the Match",desc:"First player to complete 5 full lines wins! If the last call completes both boards simultaneously, it's a TIE and both players earn a point."},{icon:"❤️",title:"5 Chances Per Player",desc:"Each player has 5 lives. If your timer runs out, you auto-pick a random number and lose one life. Lose all 5 lives and your opponent wins automatically."},{icon:"🎁",title:"Lifelines",desc:"Use your 5 lifelines strategically: ⏰ Extra time, 💡 Best move hint, 2️⃣ Pick twice, 🎯 50/50 hints, 🛡️ Shield against timeout."},{icon:"🤖",title:"Solo vs Bot",desc:"Not ready for live players? Challenge one of 6 AI difficulty levels — from Easy all the way up to GodMode."}];function KB(){const t=Dn(),[e,n]=b.useState(!1);return p.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px 48px",overflowY:"auto",WebkitOverflowScrolling:"touch"},children:[p.jsxs("div",{style:{position:"relative",marginBottom:6,textAlign:"center"},children:[p.jsx("div",{style:{position:"absolute",top:6,left:6,right:0,fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--c1)",lineHeight:.9,opacity:.25,letterSpacing:-2,pointerEvents:"none",userSelect:"none"},children:"DiNGo"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--ink)",lineHeight:.9,letterSpacing:-2,position:"relative",textShadow:"0 0 40px rgba(0,255,204,0.2)"},children:"DiNGo"})]}),p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"var(--panel2)",border:"2px solid var(--c1)",borderRadius:"var(--r)",padding:"5px 14px",fontSize:9,letterSpacing:3,textTransform:"uppercase",fontWeight:700,color:"var(--c1)",marginBottom:28},children:[p.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),"Live Multiplayer Bingo"]}),p.jsxs("p",{style:{fontSize:15,color:"var(--ink2)",textAlign:"center",maxWidth:280,lineHeight:1.75,marginBottom:32},children:["Call numbers. Build lines.",p.jsx("br",{}),p.jsx("strong",{style:{color:"var(--ink)"},children:"Beat your opponent to 5."})]}),p.jsx("div",{style:{display:"flex",width:"100%",maxWidth:340,border:"2px solid var(--edge2)",borderRadius:"var(--r)",overflow:"hidden",marginBottom:36},children:[{n:"5×5",l:"Grid"},{n:"6",l:"AI Levels"},{n:"5",l:"Lifelines"}].map((r,i)=>p.jsxs("div",{style:{flex:1,textAlign:"center",padding:"14px 0",background:"var(--panel)",borderRight:i<2?"2px solid var(--edge2)":"none"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,color:"var(--ink)"},children:r.n}),p.jsx("div",{style:{fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:r.l})]},i))}),p.jsxs("div",{style:{width:"100%",maxWidth:340,display:"flex",flexDirection:"column",gap:12},children:[p.jsx("button",{className:"btn btn-primary btn-full",style:{fontSize:16,padding:"16px 0",letterSpacing:2,boxShadow:"0 0 24px rgba(0,255,204,0.3), 4px 4px 0 rgba(0,255,204,0.2)"},onClick:()=>t("/login"),children:"🎮 Get Started"}),p.jsx("button",{className:"btn btn-ghost btn-full",style:{borderColor:"rgba(0,255,204,0.35)",color:"var(--c1)",fontSize:13},onClick:()=>n(!0),children:"📖 How to Play"})]}),e&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.9)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>n(!1),children:p.jsxs("div",{style:{background:"var(--panel)",borderRadius:"20px 20px 0 0",border:"2px solid var(--edge2)",borderBottom:"none",width:"100%",maxWidth:480,maxHeight:"88vh",overflowY:"auto",WebkitOverflowScrolling:"touch"},onClick:r=>r.stopPropagation(),children:[p.jsx("div",{style:{height:4,background:"linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))",borderRadius:"20px 20px 0 0"}}),p.jsxs("div",{style:{padding:"18px 18px 36px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:22},children:[p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,letterSpacing:3},children:"HOW TO PLAY"}),p.jsx("button",{onClick:()=>n(!1),style:{background:"none",border:"2px solid var(--edge2)",color:"var(--ink2)",width:34,height:34,borderRadius:8,cursor:"pointer",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),GB.map((r,i)=>p.jsxs("div",{style:{display:"flex",gap:14,marginBottom:22,alignItems:"flex-start"},children:[p.jsx("div",{style:{fontSize:32,flexShrink:0,lineHeight:1,width:52,height:52,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--panel2)",borderRadius:12,border:"2px solid var(--edge2)"},children:r.icon}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:800,fontSize:14,marginBottom:4},children:r.title}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",lineHeight:1.6},children:r.desc})]})]},i)),p.jsx("button",{className:"btn btn-primary btn-full",style:{marginTop:4,fontSize:14},onClick:()=>n(!1),children:"Got it! Let's Play 🎮"})]})]})})]})}function QB(){const{user:t,loading:e}=On(),n=Dn(),[r,i]=b.useState("login"),[s,o]=b.useState(""),[a,l]=b.useState(""),[c,h]=b.useState(""),[f,m]=b.useState(""),[w,E]=b.useState(!1),[A,N]=b.useState("");b.useEffect(()=>{!e&&t&&n("/",{replace:!0})},[t,e]);const I=async()=>{m(""),N(""),E(!0);try{if(r==="login")await hB(s,a);else{if(!c.trim()){m("Please enter your name"),E(!1);return}if(a.length<6){m("Password must be at least 6 characters"),E(!1);return}await dB(s,a,c.trim()),N("✅ Account created! Signing you in…")}}catch(k){m(xT(k.code))}E(!1)},T=async()=>{m(""),N(""),E(!0);try{await fB()}catch(k){m(xT(k.code))}E(!1)};return e||t?p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:p.jsx("div",{className:"spinner"})}):p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:20,paddingTop:40},children:[p.jsxs("div",{className:"text-center",style:{marginBottom:28},children:[p.jsx("div",{className:"hero-logo","data-text":"DiNGo",style:{fontSize:"clamp(72px,18vw,100px)"},children:"DiNGo"}),p.jsx("div",{className:"sub",style:{marginTop:6,letterSpacing:2},children:"LIVE MULTIPLAYER BINGO"})]}),p.jsx("div",{className:"card",style:{maxWidth:400},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{display:"flex",gap:8,marginBottom:20},children:["login","register"].map(k=>p.jsx("button",{className:`btn ${r===k?"btn-primary":"btn-ghost"}`,style:{flex:1},onClick:()=>{i(k),m(""),N("")},children:k==="login"?"🎮 Sign In":"🚀 Sign Up"},k))}),r==="register"&&p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Your Name"}),p.jsx("input",{type:"text",placeholder:"KGames",value:c,onChange:k=>h(k.target.value),maxLength:20,enterKeyHint:"next"})]}),p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Email"}),p.jsx("input",{type:"email",placeholder:"you@email.com",value:s,onChange:k=>o(k.target.value),enterKeyHint:"next"})]}),p.jsxs("div",{style:{marginBottom:18},children:[p.jsx("div",{className:"label",children:"Password"}),p.jsx("input",{type:"password",placeholder:"••••••••",value:a,onChange:k=>l(k.target.value),onKeyDown:k=>k.key==="Enter"&&I(),enterKeyHint:"done"})]}),f&&p.jsx("div",{style:{background:"rgba(255,45,85,0.12)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c2)"},children:f}),A&&p.jsxs("div",{style:{background:"rgba(0,255,204,0.12)",border:"2px solid var(--c1)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c1)",display:"flex",alignItems:"center",gap:8},children:[p.jsx("div",{className:"spinner",style:{width:16,height:16,borderWidth:2}}),A]}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:I,disabled:w,children:w?"⏳ Please wait…":r==="login"?"🎮 Sign In":"🚀 Create Account"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,margin:"16px 0"},children:[p.jsx("div",{className:"divider",style:{flex:1}}),p.jsx("span",{className:"muted small",children:"or"}),p.jsx("div",{className:"divider",style:{flex:1}})]}),p.jsxs("button",{className:"btn btn-ghost btn-full",onClick:T,disabled:w,style:{border:"2px solid var(--edge2)"},children:[p.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",width:18,alt:""}),"Continue with Google"]})]})})]})}function xT(t){return{"auth/user-not-found":"No account found with that email.","auth/wrong-password":"Wrong password. Try again.","auth/invalid-credential":"Wrong email or password. Try again.","auth/email-already-in-use":"Email already in use — try signing in instead.","auth/weak-password":"Password must be at least 6 characters.","auth/invalid-email":"Invalid email address.","auth/popup-closed-by-user":"Google sign-in was cancelled.","auth/too-many-requests":"Too many attempts. Please wait a minute."}[t]||"Something went wrong. Please try again."}function YB(t,e,n){const r=Ie(Se,`online/${t}`),i=Ie(Se,".info/connected"),s=_a(i,o=>{o.val()===!0&&(_U(r).remove(),ya(r,{uid:t,name:e,avatar:n,ts:Date.now()}).catch(()=>{}))});return()=>{s(),Hs(r).catch(()=>{})}}function XB(t){const e=Ie(Se,"online");return _a(e,r=>t(r.exists()?Object.keys(r.val()||{}).length:0),()=>t(0))}function JB(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function ZB(t,e,n,r){await ya(Ie(Se,`queue/${t}`),{uid:t,name:e,avatar:n,board:r,timestamp:Date.now(),roomId:null,role:null})}function Cl(t){Hs(Ie(Se,`queue/${t}`)).catch(()=>{})}function e5(t,e,n,r,i){const s=Ie(Se,"queue");let o=!1;const a=_a(s,async l=>{var A;if(o)return;const c=l.val();if(!c||!c[t])return;if(c[t].roomId){if(o)return;o=!0,a(),Cl(t),i(c[t].roomId,c[t].role||"p2");return}const h=Object.entries(c).filter(([N,I])=>N!==t&&!I.roomId).sort((N,I)=>N[1].timestamp-I[1].timestamp);if(h.length===0)return;const[f,m]=h[0];if((((A=c[t])==null?void 0:A.timestamp)||0)>m.timestamp||o)return;o=!0,a();const E=JB();try{await ya(Ie(Se,`rooms/${E}`),{gameState:{status:"playing",turn:"p1",p1Board:r,p2Board:m.board||[],calledNumbers:[],p1Lines:0,p2Lines:0,p1Chances:5,p2Chances:5,winner:null,tie:!1,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{uid:t,name:e,avatar:n||"🎯",role:"p1"},p2:{uid:f,name:m.name,avatar:m.avatar||"🎯",role:"p2"}},rematch:{p1:!1,p2:!1,newRoomId:null}}),await ur(Ie(Se,`queue/${t}`),{roomId:E,role:"p1"}),await ur(Ie(Se,`queue/${f}`),{roomId:E,role:"p2"}),Cl(t),i(E,"p1")}catch(N){console.error("Matchmaking error:",N),o=!1}});return a}const t5=[{icon:"🤖",title:"vs Bot",sub:"6 AI levels",path:"/bot"},{icon:"⚡",title:"Create Room",sub:"Invite a friend",path:"/room/create"},{icon:"🔗",title:"Join Room",sub:"Enter room code",path:"/room/join"},{icon:"🏆",title:"Leaderboard",sub:"Top players",path:"/leaderboard"},{icon:"👥",title:"Friends",sub:"Add & challenge",path:"/friends"},{icon:"📊",title:"History",sub:"Past games",path:"/history"}],n5=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"];function r5(){const{user:t,profile:e,refreshProfile:n}=On(),r=Dn(),i=xi(),[s,o]=b.useState(0),[a,l]=b.useState(!1),[c,h]=b.useState(0),[f,m]=b.useState(!1),[w,E]=b.useState(!1),[A,N]=b.useState(""),[I,T]=b.useState(""),[k,O]=b.useState(!1),[F,M]=b.useState([]),[C,v]=b.useState(null),S=b.useRef(null),x=b.useRef(null),P=b.useRef(null),R=b.useRef(null);b.useEffect(()=>{if(!t||!e)return;const j=YB(t.uid,e.displayName||"Player",e.avatar||"🎯"),X=XB(o);return()=>{j(),X()}},[t==null?void 0:t.uid,e==null?void 0:e.displayName]),b.useEffect(()=>{if(!t)return;const j=TB(t.uid,M);return R.current=j,()=>j()},[t==null?void 0:t.uid]),b.useEffect(()=>()=>{t!=null&&t.uid&&Cl(t.uid),clearInterval(x.current),S.current&&S.current()},[t==null?void 0:t.uid]);const _=()=>{N((e==null?void 0:e.displayName)||""),T((e==null?void 0:e.avatar)||"🎯"),E(!0)},oe=async()=>{var j;A.trim()&&(O(!0),await mR(t.uid,{displayName:A.trim(),avatar:I}),await n(t.uid),O(!1),E(!1),(j=i.click)==null||j.call(i))},nt=async j=>{var X;if(!C){v(j.id);try{const me=bs(),Ce={uid:t.uid,name:(e==null?void 0:e.displayName)||"Player",avatar:(e==null?void 0:e.avatar)||"🎯"},Ae=await IB(t.uid,j.id,Ce,me);(X=i.click)==null||X.call(i),r(`/game/${Ae}`,{state:{role:"p2",board:me}})}catch(me){console.error("Accept invite error:",me),M(Ce=>Ce.filter(Ae=>Ae.id!==j.id)),v(null)}}},bt=async j=>{await SB(t.uid,j.id),M(X=>X.filter(me=>me.id!==j.id))},Et=async()=>{var me;if(a){Cl(t.uid),S.current&&(S.current(),S.current=null),clearInterval(x.current),l(!1),h(0);return}(me=i.click)==null||me.call(i);const j=bs();P.current=j,l(!0),h(0),x.current=setInterval(()=>h(Ce=>Ce+1),1e3),await ZB(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",j);const X=e5(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",j,(Ce,Ae)=>{clearInterval(x.current),l(!1),r(`/game/${Ce}`,{state:{role:Ae,board:j}})});S.current=X},$=async()=>{a&&(Cl(t.uid),S.current&&S.current(),clearInterval(x.current)),await gR()},Q=j=>{var X;(X=i.click)==null||X.call(i),r(j)},te=(e==null?void 0:e.color)||"#00ffcc",H=e!=null&&e.displayName?e.displayName.length>10?e.displayName.slice(0,10)+"…":e.displayName:"Player";return p.jsxs("div",{className:"screen",style:{paddingTop:14,paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",maxWidth:440,marginBottom:18,gap:8},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:30,letterSpacing:1,lineHeight:1},children:"DiNGo"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:2},children:[p.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),p.jsxs("span",{style:{fontSize:10,color:"var(--c1)",fontWeight:700,letterSpacing:1.5,textTransform:"uppercase"},children:[s," Online"]})]})]}),p.jsxs("button",{onClick:_,style:{display:"flex",alignItems:"center",gap:7,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:10,padding:"6px 10px",cursor:"pointer",flexShrink:0,maxWidth:160,WebkitTapHighlightColor:"transparent"},children:[p.jsx("span",{style:{fontSize:24,flexShrink:0},children:(e==null?void 0:e.avatar)||"🎯"}),p.jsxs("div",{style:{textAlign:"left",overflow:"hidden"},children:[p.jsx("div",{style:{fontWeight:700,fontSize:12,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:te},children:H}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)",whiteSpace:"nowrap"},children:[(e==null?void 0:e.wins)||0,"W · ",(e==null?void 0:e.streak)||0,"🔥"]})]}),p.jsx("span",{style:{fontSize:10,color:"var(--ink3)",flexShrink:0},children:"✏️"})]}),p.jsx("button",{onClick:()=>Q("/profile"),title:"Full Profile & Settings",style:{width:36,height:36,borderRadius:8,flexShrink:0,background:"var(--panel)",border:"2px solid var(--edge2)",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},children:"⚙️"}),p.jsx("button",{onClick:()=>m(!0),title:"Sign Out",style:{width:36,height:36,borderRadius:8,flexShrink:0,background:"var(--panel)",border:"2px solid var(--edge2)",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},children:"🚪"})]}),(e==null?void 0:e.shortId)&&p.jsx("div",{style:{width:"100%",maxWidth:440,marginBottom:14},children:p.jsxs("div",{onClick:()=>{var j;return(j=navigator.clipboard)==null?void 0:j.writeText("#"+e.shortId).then(()=>{}).catch(()=>{})},style:{display:"inline-flex",alignItems:"center",gap:6,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:8,padding:"4px 12px",fontSize:11,cursor:"pointer",WebkitTapHighlightColor:"transparent"},title:"Tap to copy Player ID",children:[p.jsx("span",{style:{color:"var(--ink3)"},children:"🪪 Player ID:"}),p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",letterSpacing:2,color:"var(--c3)",fontSize:13},children:["#",e.shortId]}),p.jsx("span",{style:{fontSize:9,color:"var(--ink3)"},children:"📋"})]})}),F.length>0&&p.jsx("div",{style:{width:"100%",maxWidth:440,marginBottom:14,display:"flex",flexDirection:"column",gap:8},children:F.map(j=>p.jsxs("div",{style:{background:"rgba(123,97,255,0.12)",border:"2px solid var(--c4)",borderRadius:"var(--r)",padding:"10px 12px",display:"flex",alignItems:"center",gap:10},children:[p.jsx("span",{style:{fontSize:26,flexShrink:0},children:j.fromAvatar||"🎯"}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:j.fromName||"A friend"}),p.jsx("div",{style:{fontSize:11,color:"var(--ink2)"},children:"🎮 Challenged you to a match!"})]}),p.jsx("button",{onClick:()=>bt(j),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:6,padding:"5px 8px",fontSize:11,color:"var(--ink3)",cursor:"pointer",flexShrink:0},children:"✕"}),p.jsx("button",{onClick:()=>nt(j),disabled:C===j.id,style:{background:"var(--c4)",color:"#fff",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer",flexShrink:0,WebkitTapHighlightColor:"transparent",opacity:C===j.id?.5:1},children:C===j.id?"⏳":"✓ Accept"})]},j.id))}),p.jsx("div",{style:{width:"100%",maxWidth:440,marginBottom:18},children:p.jsx("button",{onClick:Et,style:{width:"100%",padding:"15px 20px",background:a?"var(--c2)":"var(--c1)",border:"none",borderRadius:"var(--r)",fontFamily:"'Space Grotesk',sans-serif",fontWeight:800,fontSize:14,letterSpacing:1.5,textTransform:"uppercase",color:"#000",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,WebkitTapHighlightColor:"transparent"},children:a?p.jsxs(p.Fragment,{children:[p.jsx("span",{style:{animation:"spin 1s linear infinite",display:"inline-block"},children:"⏳"})," Searching… ",c,"s · Tap to Cancel"]}):"⚡ PLAY NOW — Auto Match"})}),p.jsx("div",{className:"menu-grid",children:t5.map(j=>p.jsxs("div",{className:"menu-card",onClick:()=>Q(j.path),children:[p.jsx("div",{className:"menu-icon",children:j.icon}),p.jsxs("div",{className:"menu-title",children:[j.title,j.path==="/friends"&&F.length>0&&p.jsx("span",{style:{marginLeft:6,background:"var(--c2)",color:"#fff",borderRadius:"50%",width:16,height:16,fontSize:9,fontWeight:800,display:"inline-flex",alignItems:"center",justifyContent:"center"},children:F.length})]}),p.jsx("div",{className:"menu-sub",children:j.sub})]},j.path))}),p.jsx("div",{style:{marginTop:18,width:"100%",maxWidth:440,display:"flex",gap:8},children:[{label:"WINS",val:(e==null?void 0:e.wins)||0,color:"var(--c1)"},{label:"LOSSES",val:(e==null?void 0:e.losses)||0,color:"var(--c2)"},{label:"STREAK",val:`${(e==null?void 0:e.streak)||0}🔥`,color:"var(--c3)"}].map(j=>p.jsxs("div",{style:{flex:1,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"10px 0",textAlign:"center"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,color:j.color},children:j.val}),p.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:2},children:j.label})]},j.label))}),w&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:800,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>E(!1),children:p.jsxs("div",{style:{background:"var(--panel)",borderRadius:"20px 20px 0 0",border:"2px solid var(--edge2)",borderBottom:"none",width:"100%",maxWidth:480,maxHeight:"75vh",overflowY:"auto",WebkitOverflowScrolling:"touch"},onClick:j=>j.stopPropagation(),children:[p.jsx("div",{style:{height:4,background:"linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))",borderRadius:"20px 20px 0 0"}}),p.jsxs("div",{style:{padding:"16px 16px 32px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,letterSpacing:2},children:"✏️ QUICK EDIT"}),p.jsx("button",{onClick:()=>E(!1),style:{background:"none",border:"2px solid var(--edge2)",color:"var(--ink2)",width:32,height:32,borderRadius:8,cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),p.jsx("div",{style:{textAlign:"center",fontSize:52,marginBottom:12},children:I}),p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("div",{className:"label",children:"Display Name"}),p.jsx("input",{type:"text",value:A,onChange:j=>N(j.target.value),maxLength:20,placeholder:"Your name",enterKeyHint:"done",onKeyDown:j=>j.key==="Enter"&&j.target.blur()})]}),p.jsx("div",{className:"label",style:{marginBottom:8},children:"Avatar"}),p.jsx("div",{className:"avatar-grid",style:{marginBottom:16},children:n5.map(j=>p.jsx("div",{className:`avatar-opt ${I===j?"selected":""}`,onClick:()=>{var X;T(j),(X=i.click)==null||X.call(i)},children:j},j))}),p.jsx("button",{onClick:oe,disabled:k||!A.trim(),className:"btn btn-primary btn-full",style:{fontSize:15,padding:"14px 0"},children:k?"⏳ Saving…":"💾 Save Changes"})]})]})}),f&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>m(!1),children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:j=>j.stopPropagation(),children:[p.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:()=>m(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),p.jsx("button",{onClick:$,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const i5=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"],s5=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#00b4ff","#ff6a00","#00ff88","#ff00ff","#ffffff","#f5a623"];function o5(){const{user:t,profile:e,refreshProfile:n}=On(),r=Dn(),i=xi(),[s,o]=b.useState((e==null?void 0:e.displayName)||""),[a,l]=b.useState((e==null?void 0:e.avatar)||"🎯"),[c,h]=b.useState((e==null?void 0:e.color)||"#00ffcc"),[f,m]=b.useState(localStorage.getItem("sfxTheme")||"classic"),[w,E]=b.useState(UB()),[A,N]=b.useState(!1),[I,T]=b.useState(!1),[k,O]=b.useState("idle"),[F,M]=b.useState(!1);b.useEffect(()=>{e&&(o(e.displayName||""),l(e.avatar||"🎯"),h(e.color||"#00ffcc"))},[e]);const C=async()=>{var R;s.trim()&&(N(!0),await mR(t.uid,{displayName:s.trim(),avatar:a,color:c}),await n(t.uid),(R=i.click)==null||R.call(i),N(!1),T(!0),setTimeout(()=>T(!1),2e3))},v=R=>{jB(R),m(R),setTimeout(()=>{var _,oe;return(oe=(_=xi()).click)==null?void 0:oe.call(_)},50)},S=R=>{FB(R),E(R),setTimeout(()=>{var _,oe;return(oe=(_=xi()).click)==null?void 0:oe.call(_)},30)},x=async()=>{await gR()},P=async()=>{O("requesting");const R=await HB(t.uid);O(R?"granted":"denied")};return p.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[p.jsxs("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain",padding:"14px 14px 24px",display:"flex",flexDirection:"column",alignItems:"center"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:4},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px",flexShrink:0},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,letterSpacing:2},children:"⚙️ PROFILE"}),p.jsx("button",{onClick:()=>M(!0),style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:5,flexShrink:0,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"6px 10px",fontSize:11,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Sign Out"})]}),p.jsx("div",{style:{fontSize:64,marginBottom:6,textAlign:"center"},children:a}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,textAlign:"center",marginBottom:2,color:c},children:s||"Player"}),p.jsx("div",{style:{fontSize:11,color:"var(--ink3)",textAlign:"center",marginBottom:4},children:t==null?void 0:t.email}),(e==null?void 0:e.shortId)&&p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:8,padding:"4px 12px",fontSize:11,marginBottom:16},children:[p.jsx("span",{style:{color:"var(--ink3)"},children:"🪪 Player ID:"}),p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",letterSpacing:2,color:"var(--c3)",fontSize:13},children:["#",e.shortId]})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsxs("div",{style:{marginBottom:16},children:[p.jsx("div",{className:"label",children:"Display Name"}),p.jsx("input",{type:"text",value:s,onChange:R=>o(R.target.value),maxLength:20,placeholder:"Your name",enterKeyHint:"done",onKeyDown:R=>R.key==="Enter"&&R.target.blur()})]}),p.jsxs("div",{style:{marginBottom:16},children:[p.jsx("div",{className:"label",children:"Avatar"}),p.jsx("div",{className:"avatar-grid",children:i5.map(R=>p.jsx("div",{className:`avatar-opt ${a===R?"selected":""}`,onClick:()=>{var _;l(R),(_=i.click)==null||_.call(i)},children:R},R))})]}),p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Name Color"}),p.jsx("div",{className:"color-row",children:s5.map(R=>p.jsx("div",{className:`color-dot ${c===R?"selected":""}`,style:{background:R},onClick:()=>{var _;h(R),(_=i.click)==null||_.call(i)}},R))})]})]})}),e&&p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"📊 Your Stats"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[{label:"WINS",val:e.wins||0,color:"var(--c1)"},{label:"LOSSES",val:e.losses||0,color:"var(--c2)"},{label:"WIN RATE",val:`${e.winRate||0}%`,color:"var(--c3)"},{label:"STREAK",val:`${e.streak||0}🔥`,color:"var(--c3)"},{label:"GAMES",val:e.total||0,color:"var(--c4)"}].map(R=>p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"12px 0",textAlign:"center"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:R.color},children:R.val}),p.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:R.label})]},R.label))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🔊 Volume"}),p.jsx("div",{style:{display:"flex",gap:8},children:lv.map(R=>p.jsxs("button",{onClick:()=>S(R.id),style:{flex:1,padding:"10px 0",border:"2px solid",borderColor:w===R.id?"var(--c1)":"var(--edge2)",background:w===R.id?"rgba(0,255,204,0.1)":"var(--panel)",borderRadius:"var(--r)",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,WebkitTapHighlightColor:"transparent"},children:[p.jsx("span",{style:{fontSize:18},children:R.icon}),p.jsx("span",{style:{fontSize:9,fontWeight:700,letterSpacing:1,textTransform:"uppercase",color:w===R.id?"var(--c1)":"var(--ink3)"},children:R.label})]},R.id))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🎵 Sound Theme"}),p.jsx("div",{className:"sfx-grid",children:VB.map(R=>p.jsxs("div",{className:`sfx-opt ${f===R.id?"active":""}`,onClick:()=>v(R.id),children:[p.jsx("div",{className:"sfx-icon",children:R.icon}),p.jsx("div",{className:"sfx-name",children:R.name}),p.jsx("div",{className:"sfx-desc",children:R.desc})]},R.id))})]}),p.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[p.jsx("div",{className:"section-head",children:"🔔 Notifications"}),p.jsx("div",{className:"card",children:p.jsxs("div",{className:"card-body",children:[p.jsx("p",{style:{fontSize:13,color:"var(--ink2)",marginBottom:12,lineHeight:1.6},children:"Get notified when friends challenge you or it's your turn."}),p.jsx("button",{className:"btn btn-purple btn-full",onClick:P,disabled:k==="requesting"||k==="granted",children:k==="granted"?"✅ Notifications Enabled":k==="denied"?"❌ Permission Denied":k==="requesting"?"⏳ Requesting…":"🔔 Enable Notifications"})]})})]}),p.jsx("div",{style:{width:"100%",maxWidth:440,marginTop:24},children:p.jsx("button",{onClick:()=>M(!0),className:"btn btn-full",style:{background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",color:"var(--c2)",fontSize:13},children:"🚪 Sign Out of DiNGo"})})]}),p.jsx("div",{style:{flexShrink:0,background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"10px 14px",paddingBottom:"calc(10px + env(safe-area-inset-bottom, 0px))",display:"flex",gap:10},children:p.jsx("button",{onClick:C,disabled:A||!s.trim(),className:"btn btn-primary btn-full",style:{fontSize:15,padding:"14px 0"},children:I?"✅ Profile Saved!":A?"⏳ Saving…":"💾 Save Profile"})}),F&&p.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>M(!1),children:p.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:R=>R.stopPropagation(),children:[p.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:()=>M(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),p.jsx("button",{onClick:x,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const RT=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#ffffff"];function gg({board:t,selected:e,onCellClick:n,disabled:r=!1,highlightCells:i=[]}){const s=new Set(CB(t,e)),o=wR(t,e),a=new Set(i),l={};return o.forEach((c,h)=>{c.forEach(f=>{l[f]||(l[f]=RT[Math.min(h,RT.length-1)])})}),p.jsx("div",{className:"board-wrap",children:p.jsx("div",{className:"board",children:t.map((c,h)=>{const f=e.includes(c),m=s.has(h),w=a.has(c),E=l[h];return p.jsx("div",{className:`cell ${f?"crossed":""}`,style:{cursor:r||f?"default":"pointer",background:m?`rgba(${E==="#00ffcc"?"0,255,204":E==="#ff2d55"?"255,45,85":E==="#ffcc00"?"255,204,0":E==="#7b61ff"?"123,97,255":"255,255,255"}, 0.15)`:void 0,borderColor:m?E:w?"var(--c3)":void 0,color:m?E:w&&!f?"var(--c3)":void 0,boxShadow:m?`0 0 12px ${E}88, inset 0 0 8px ${E}22`:w?"0 0 0 3px var(--c3), 0 0 14px rgba(255,204,0,0.5)":void 0,animation:m?"winPulse 2s ease-in-out infinite":w?"winPulse 0.9s ease infinite":void 0,fontWeight:m||w?900:void 0,transition:"all 0.3s ease"},onClick:()=>!r&&!f&&n&&n(c),children:c},c)})})})}function IR({show:t,isWin:e,tie:n,title:r,sub:i,onPlayAgain:s,onHome:o,showPlayAgain:a=!0}){const l=n?"🤝":e?"🎉":"💀",c=n?"var(--c3)":e?"var(--c1)":"var(--c2)";return p.jsx("div",{className:`win-overlay ${t?"show":""}`,children:p.jsxs("div",{className:"win-card",children:[p.jsx("div",{className:"win-emoji",children:l}),p.jsx("div",{className:"win-title",style:{color:c},children:r}),p.jsx("div",{className:"win-sub",children:i}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[a&&p.jsx("button",{className:"btn btn-primary btn-full",onClick:s,children:"↺ Play Again"}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:o,children:"🏠 Home"})]})]})})}async function SR(t,e){const n=un(ze,"users",t);try{await xn(n,{total:Zs(1),wins:Zs(e?1:0),losses:Zs(e?0:1),streak:e?Zs(1):0});const r=await nf(n);if(r.exists()){const i=r.data(),s=i.total||1,o=i.wins||0;await xn(n,{winRate:Math.round(o/s*100)})}}catch(r){console.error("recordResult error:",r)}}async function a5(){try{const t=Br(Xn(ze,"users"),u4("wins","desc"),tu(50));return(await Di(t)).docs.map((n,r)=>({rank:r+1,uid:n.id,...n.data()}))}catch(t){return console.error("getLeaderboard error:",t),[]}}async function CR({p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a,mode:l,botLevel:c}){try{await Cx(Xn(ze,"matches"),{p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a||0,mode:l||"multiplayer",botLevel:c||null,timestamp:sf(),tsNum:Date.now()}),l!=="bot"?(Op(t),Op(e)):Op(t)}catch(h){console.error("saveMatch error:",h)}}async function Op(t){try{const[e,n]=await Promise.all([Di(Br(Xn(ze,"matches"),lr("p1Uid","==",t),tu(25))),Di(Br(Xn(ze,"matches"),lr("p2Uid","==",t),tu(25)))]),r=new Set,i=[];[...e.docs,...n.docs].forEach(o=>{r.has(o.id)||(r.add(o.id),i.push(o))}),i.sort((o,a)=>(a.data().tsNum||0)-(o.data().tsNum||0));const s=i.slice(10);s.length>0&&await Promise.all(s.map(o=>f4(o.ref)))}catch(e){console.warn("trimUserHistory error:",e)}}async function l5(t){try{const[e,n]=await Promise.all([Di(Br(Xn(ze,"matches"),lr("p1Uid","==",t),tu(15))),Di(Br(Xn(ze,"matches"),lr("p2Uid","==",t),tu(15)))]),r=new Set,i=[];return[...e.docs,...n.docs].forEach(s=>{r.has(s.id)||(r.add(s.id),i.push({id:s.id,...s.data()}))}),i.sort((s,o)=>{var c,h;const a=s.tsNum||(((c=s.timestamp)==null?void 0:c.seconds)||0)*1e3;return(o.tsNum||(((h=o.timestamp)==null?void 0:h.seconds)||0)*1e3)-a}).slice(0,10)}catch(e){return console.error("getMyHistory error:",e),[]}}const Nc=[{id:"easy",label:"Easy",icon:"🟢",color:"var(--c1)"},{id:"medium",label:"Medium",icon:"🟡",color:"var(--c3)"},{id:"hard",label:"Hard",icon:"🔴",color:"var(--c2)"},{id:"expert",label:"Expert",icon:"🟣",color:"var(--c4)"},{id:"nightmare",label:"Nightmare",icon:"🖤",color:"#ff4444"},{id:"godmode",label:"GodMode",icon:"👑",color:"var(--c3)"}],bc={easy:"Noob-Bot",medium:"Mid-Bot",hard:"Hard-Bot",expert:"Expert-Bot",nightmare:"Nightmare",godmode:"GodMode"},Dc=5,Oc=25;function u5(){var $,Q,te;const{user:t,profile:e}=On(),n=Dn(),r=xi(),[i,s]=b.useState("select"),[o,a]=b.useState("medium"),[l,c]=b.useState([]),[h,f]=b.useState([]),[m,w]=b.useState([]),[E,A]=b.useState(!0),[N,I]=b.useState(0),[T,k]=b.useState(0),[O,F]=b.useState(null),[M,C]=b.useState(Oc),[v,S]=b.useState(!1),x=b.useRef(null),P=b.useRef(null),R=b.useRef([]);b.useEffect(()=>{R.current=m},[m]);const _=()=>{var X;const H=bs(),j=bs();c(H),f(j),w([]),R.current=[],A(!0),I(0),k(0),F(null),s("game"),P.current=Date.now(),(X=r.click)==null||X.call(r)};b.useEffect(()=>{if(!(i!=="game"||!E||O))return C(Oc),x.current=setInterval(()=>{C(H=>{if(H<=1){clearInterval(x.current);const j=l.filter(X=>!R.current.includes(X));if(j.length>0){const X=j[Math.floor(Math.random()*j.length)];oe(X)}return Oc}return H-1})},1e3),()=>clearInterval(x.current)},[E,i,O]);const oe=H=>{var me,Ce;if(!E||O||R.current.includes(H))return;clearInterval(x.current),(me=r.cross)==null||me.call(r);const j=[...R.current,H];w(j);const X=St(l,j);if(X>N&&((Ce=r.line)==null||Ce.call(r)),I(X),X>=Dc){bt(!0,j);return}A(!1),nt(j)},nt=H=>{const j={easy:500,medium:800,hard:1e3,expert:1200,nightmare:1400,godmode:1600}[o]||800;S(!0),setTimeout(()=>{var Ae,he;S(!1);const X=kB(o,H,l,h);if(X==null){A(!0);return}(Ae=r.cross)==null||Ae.call(r);const me=[...H,X];w(me);const Ce=St(h,me);if(Ce>T&&((he=r.line)==null||he.call(r)),k(Ce),Ce>=Dc){bt(!1,me);return}A(!0)},j)},bt=async(H,j)=>{var me,Ce;const X=Math.round((Date.now()-P.current)/1e3);if(F({won:H,tie:!1,title:H?"🎉 YOU WIN!":"🤖 BOT WINS!",sub:H?["Domination! 👑","You crushed it! 🔥","GG! Lethal ⚡"][Math.floor(Math.random()*3)]:["Bot outsmarted you 🤖","GG, rematch? 💪","Bot.exe wins 😤"][Math.floor(Math.random()*3)]}),H?(me=r.win)==null||me.call(r):(Ce=r.lose)==null||Ce.call(r),s("over"),t)try{await SR(t.uid,H),await CR({p1Uid:t.uid,p2Uid:"bot",p1Name:(e==null?void 0:e.displayName)||"Player",p2Name:bc[o],winner:H?t.uid:"bot",p1Lines:St(l,j),p2Lines:St(h,j),duration:X,mode:"bot",botLevel:o})}catch(Ae){console.error("endGame save error:",Ae)}};if(i==="select")return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🤖 VS BOT"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{className:"label",style:{marginBottom:14},children:"Choose Difficulty"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:20},children:Nc.map(H=>p.jsxs("button",{className:`diff-btn ${o===H.id?"active":""}`,style:{borderColor:o===H.id?H.color:void 0,color:o===H.id?H.color:void 0},onClick:()=>{var j;a(H.id),(j=r.click)==null||j.call(r)},children:[p.jsx("span",{style:{fontSize:20},children:H.icon}),H.label]},H.id))}),p.jsxs("div",{style:{background:"var(--panel2)",borderRadius:"var(--r)",padding:12,marginBottom:20,textAlign:"center"},children:[p.jsx("span",{style:{fontSize:28},children:($=Nc.find(H=>H.id===o))==null?void 0:$.icon}),p.jsx("div",{style:{fontWeight:700,marginTop:6},children:bc[o]}),p.jsx("div",{className:"muted small",style:{marginTop:4},children:{easy:"Random moves — great for beginners",medium:"Basic strategy — fair challenge",hard:"Aggressive play — tough",expert:"Win-first AI — very tough",nightmare:"Near-unbeatable AI",godmode:"Maximum difficulty — can you win?"}[o]})]}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:_,children:"⚡ Start Game"})]})})]});const Et=M/Oc*100;return p.jsxs("div",{className:"screen",style:{paddingTop:10,paddingBottom:20},children:[p.jsxs("div",{style:{width:"100%",maxWidth:440,marginBottom:10,display:"flex",alignItems:"center",gap:10},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:11},onClick:()=>n("/"),children:"🏠"}),p.jsx("div",{style:{flex:1,textAlign:"center"},children:p.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:14,letterSpacing:2,color:"var(--c1)"},children:[(Q=Nc.find(H=>H.id===o))==null?void 0:Q.icon," ",bc[o].toUpperCase()]})}),p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18},children:[p.jsx("span",{style:{color:"var(--c1)"},children:N}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 6px"},children:"·"}),p.jsx("span",{style:{color:"var(--c2)"},children:T})]})]}),p.jsxs("div",{className:"player-row",style:{maxWidth:440,marginBottom:8},children:[p.jsx("span",{style:{fontSize:28},children:(e==null?void 0:e.avatar)||"🎯"}),p.jsxs("div",{children:[p.jsx("div",{className:"player-name",children:(e==null?void 0:e.displayName)||"You"}),p.jsxs("div",{className:"player-lines",children:[N," / ",Dc," lines"]})]}),E&&!v&&!O&&p.jsx("span",{className:"turn-badge",style:{marginLeft:"auto"},children:"YOUR TURN"})]}),E&&!v&&!O&&p.jsx("div",{className:"timer-bar-wrap",style:{maxWidth:440,marginBottom:8},children:p.jsx("div",{className:"timer-bar",style:{width:`${Et}%`,background:M<=5?"var(--c2)":"var(--c1)"}})}),v&&p.jsx("div",{style:{textAlign:"center",fontSize:12,color:"var(--ink2)",marginBottom:8,letterSpacing:2,textTransform:"uppercase"},children:"🤖 Bot is thinking…"}),p.jsx(gg,{board:l,selected:m,onCellClick:oe,disabled:!E||v||!!O}),p.jsxs("div",{className:"player-row",style:{maxWidth:440,marginTop:14},children:[p.jsx("span",{style:{fontSize:28},children:(te=Nc.find(H=>H.id===o))==null?void 0:te.icon}),p.jsxs("div",{children:[p.jsx("div",{className:"player-name",children:bc[o]}),p.jsxs("div",{className:"player-lines",children:[T," / ",Dc," lines"]})]}),!E&&v&&p.jsx("span",{className:"turn-badge",style:{marginLeft:"auto",background:"var(--c2)"},children:"BOT TURN"})]}),p.jsx("div",{style:{marginTop:8,opacity:.55},children:p.jsx(gg,{board:h,selected:m,disabled:!0})}),p.jsx(IR,{show:!!O,isWin:O==null?void 0:O.won,tie:!1,title:O==null?void 0:O.title,sub:O==null?void 0:O.sub,onPlayAgain:_,onHome:()=>n("/")})]})}function AT(){return Array(25).fill(0)}function c5({onConfirm:t}){const[e,n]=b.useState(AT()),r=e.filter(l=>l!==0).length+1,i=l=>{if(e[l]!==0||r>25)return;const c=[...e];c[l]=r,n(c)},s=()=>n(bs()),o=()=>n(AT()),a=e.every(l=>l!==0);return p.jsxs("div",{style:{width:"100%",maxWidth:440,display:"flex",flexDirection:"column",alignItems:"center",gap:14},children:[p.jsx("div",{className:"card",style:{width:"100%"},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18,letterSpacing:2,marginBottom:6},children:"🎲 SET UP YOUR BOARD"}),p.jsx("div",{style:{fontSize:12,color:"var(--ink2)",lineHeight:1.6,marginBottom:14},children:"Click each cell to fill numbers 1–25 in your chosen order, or hit Shuffle for a random arrangement."}),!a&&p.jsxs("div",{style:{textAlign:"center",fontSize:13,marginBottom:10},children:[p.jsx("span",{style:{color:"var(--c1)",fontWeight:800,fontSize:18},children:r}),p.jsx("span",{style:{color:"var(--ink2)"},children:" — click a cell to place this number"})]}),a&&p.jsx("div",{style:{textAlign:"center",fontSize:13,color:"var(--c1)",fontWeight:800,marginBottom:10},children:"✅ Board complete! Ready to play."}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:5,marginBottom:14},children:e.map((l,c)=>p.jsx("button",{onClick:()=>i(c),disabled:l!==0,style:{aspectRatio:"1",border:"2px solid",borderColor:l!==0?"var(--c1)":"var(--edge2)",background:l!==0?"rgba(0,255,204,0.1)":"var(--panel)",borderRadius:8,cursor:l!==0?"default":"pointer",fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(12px,3.5vw,18px)",color:l!==0?"var(--c1)":"var(--ink3)",fontWeight:700,transition:"all 0.15s",WebkitTapHighlightColor:"transparent"},children:l!==0?l:""},c))}),p.jsxs("div",{style:{display:"flex",gap:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{flex:1},onClick:o,children:"🗑 Clear"}),p.jsx("button",{className:"btn btn-ghost",style:{flex:1},onClick:s,children:"🔀 Shuffle"})]})]})}),p.jsx("button",{className:"btn btn-primary btn-full",disabled:!a,onClick:()=>t(e),style:{fontSize:15,padding:"14px 0",opacity:a?1:.4},children:a?"✅ Confirm Board & Continue →":`Fill ${25-e.filter(l=>l!==0).length} more cells…`})]})}function h5(){const{mode:t}=nC(),{user:e,profile:n}=On(),r=Dn(),i=xi(),[s,o]=b.useState("setup"),[a,l]=b.useState([]),[c,h]=b.useState(""),[f,m]=b.useState(""),[w,E]=b.useState("idle"),[A,N]=b.useState(""),I=b.useRef(null),T={uid:e==null?void 0:e.uid,name:(n==null?void 0:n.displayName)||"Player",avatar:(n==null?void 0:n.avatar)||"🎯"},k=async M=>{var C;if(l(M),(C=i.click)==null||C.call(i),o("action"),t==="create"){E("waiting");const v=iv();h(v),await sv(v,T,M);const S=_R(v,x=>{var P,R;(P=x==null?void 0:x.players)!=null&&P.p2&&((R=x==null?void 0:x.gameState)==null?void 0:R.status)==="playing"&&(S(),r(`/game/${v}`,{state:{role:"p1",board:M}})),x||(E("error"),N("Room expired."))});I.current=S}},O=async()=>{var C;const M=f.trim().toUpperCase();if(M.length!==4){N("Enter a 4-character room code.");return}E("joining"),N("");try{await ov(M,T,a),(C=i.click)==null||C.call(i),r(`/game/${M}`,{state:{role:"p2",board:a}})}catch(v){E("idle"),N(v.message||"Could not join room. Check the code.")}},F=async()=>{I.current&&I.current(),c&&await vB(c),r("/")};return s==="setup"?p.jsxs("div",{className:"screen",style:{justifyContent:"flex-start",paddingBottom:60},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:t==="create"?"⚡ CREATE ROOM":"🔗 JOIN ROOM"})]}),p.jsx(c5,{onConfirm:k})]}):t==="create"?p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:F,children:"← Cancel"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"⚡ CREATE ROOM"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",style:{textAlign:"center"},children:[p.jsx("div",{className:"label",style:{marginBottom:8},children:"ROOM CODE"}),p.jsx("div",{className:"room-code-display",children:c}),p.jsx("div",{className:"room-status",children:"Share this code with your friend"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,justifyContent:"center",marginBottom:20},children:[p.jsx("div",{className:"spinner"}),p.jsx("span",{className:"muted small",children:"Waiting for opponent…"})]}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:()=>{var M;return(M=navigator.clipboard)==null?void 0:M.writeText(c)},style:{marginBottom:10},children:"📋 Copy Code"}),p.jsx("button",{className:"btn btn-ghost btn-full",onClick:F,children:"Cancel"})]})})]}):p.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🔗 JOIN ROOM"})]}),p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{className:"card-body",children:[p.jsx("div",{style:{fontSize:48,textAlign:"center",marginBottom:16},children:"🔗"}),p.jsx("div",{className:"label",children:"Room Code"}),p.jsx("input",{type:"text",placeholder:"ABCD",value:f,onChange:M=>m(M.target.value.toUpperCase().slice(0,4)),onKeyDown:M=>M.key==="Enter"&&O(),style:{textAlign:"center",fontSize:28,letterSpacing:10,fontFamily:"'Black Han Sans',sans-serif",marginBottom:16}}),A&&p.jsx("div",{style:{color:"var(--c2)",fontSize:13,marginBottom:14,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px"},children:A}),p.jsx("button",{className:"btn btn-primary btn-full",onClick:O,disabled:w==="joining"||f.length!==4,children:w==="joining"?"⏳ Joining…":"🎮 Join Game"})]})})]})}const wn=5,ih=30,yg=5,d5=["👍","🔥","😂","😱","🎯","💀","🏆","😤","🤯","👏","😈","🫡","❤️","😎","🤑","💪"],PT=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#ffffff"],NT=[{id:"time",icon:"⏰",tip:"+20s"},{id:"hint",icon:"💡",tip:"Hint"},{id:"double",icon:"2️⃣",tip:"Pick 2"},{id:"fifty",icon:"🎯",tip:"50/50"},{id:"shield",icon:"🛡️",tip:"Shield"}];function bT({timeLeft:t,maxTime:e=ih,size:n=52,active:r}){const i=(n-6)/2,s=2*Math.PI*i,o=r?Math.max(0,t/e):1,a=t<=5?"#ff2d55":t<=10?"#ffcc00":"#00ffcc";return p.jsxs("svg",{width:n,height:n,style:{position:"absolute",top:0,left:0,pointerEvents:"none"},children:[p.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:"rgba(255,255,255,0.07)",strokeWidth:4}),r&&p.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:a,strokeWidth:4,strokeDasharray:s,strokeDashoffset:s*(1-o),strokeLinecap:"round",transform:`rotate(-90 ${n/2} ${n/2})`,style:{transition:"stroke-dashoffset 1s linear, stroke 0.4s"}})]})}function DT({count:t,max:e=yg}){return p.jsx("div",{style:{display:"flex",gap:2},children:Array.from({length:e}).map((n,r)=>p.jsx("span",{style:{fontSize:10,opacity:r<t?1:.18},children:"❤️"},r))})}function f5(){var Hi,Ta;const{roomId:t}=nC(),{state:e}=xd(),{user:n,profile:r}=On(),i=Dn(),s=xi(),o=e==null?void 0:e.role,[a,l]=b.useState(null),[c,h]=b.useState(ih),[f,m]=b.useState(null),[w,E]=b.useState(!1),[A,N]=b.useState(!1),[I,T]=b.useState(0),[k,O]=b.useState(""),[F,M]=b.useState(""),[C,v]=b.useState({time:!0,hint:!0,double:!0,fifty:!0,shield:!0}),[S,x]=b.useState(!1),[P,R]=b.useState(!1),[_,oe]=b.useState([]),[nt,bt]=b.useState({p1:!1,p2:!1,newRoomId:null}),[Et,$]=b.useState(!1),Q=b.useRef(!1),te=b.useRef(Date.now()),H=b.useRef(null),j=b.useRef(null),X=b.useRef(0),me=b.useRef({}),Ce=b.useRef(0),Ae=b.useRef((e==null?void 0:e.board)||[]),he=b.useMemo(()=>{var Y,Z,ge,Ye;return!a||!n?o||"p1":((Z=(Y=a.players)==null?void 0:Y.p1)==null?void 0:Z.uid)===n.uid?"p1":((Ye=(ge=a.players)==null?void 0:ge.p2)==null?void 0:Ye.uid)===n.uid?"p2":o||"p1"},[a,n,o]),Gr=he==="p1"?"p2":"p1",ae=a==null?void 0:a.gameState,cn=(ae==null?void 0:ae.calledNumbers)||[],ft=(ae==null?void 0:ae[`${he}Board`])||Ae.current,Kr=(ae==null?void 0:ae[`${Gr}Board`])||[],vn=(ae==null?void 0:ae[`${he}Lines`])||0,qs=(ae==null?void 0:ae[`${Gr}Lines`])||0,Gs=(ae==null?void 0:ae[`${he}Chances`])??yg,zu=(ae==null?void 0:ae[`${Gr}Chances`])??yg,Dt=(ae==null?void 0:ae.turn)===he,Qr=(Hi=a==null?void 0:a.players)==null?void 0:Hi[Gr],dr=(Ta=a==null?void 0:a.players)==null?void 0:Ta[he];b.useEffect(()=>{const Y=_R(t,Z=>{var Ye,De,We,Jt;if(l(Z),!(Z!=null&&Z.gameState))return;const ge=Z.gameState;if(Z.rematch&&(bt(Z.rematch),Z.rematch.newRoomId&&Q.current)){const $e=Ae.current.length===25?Ae.current:Array.from({length:25},(Oe,Yr)=>Yr+1);Y(),i(`/game/${Z.rematch.newRoomId}`,{state:{role:he,board:$e},replace:!0});return}if(Z.chat){const $e=Object.values(Z.chat).sort((Yr,Hu)=>(Yr.ts||0)-(Hu.ts||0)),Oe=$e[$e.length-1];Oe&&(Oe.ts||0)>Ce.current&&Date.now()-(Oe.ts||0)<8e3&&(Ce.current=Oe.ts,Oe.sender===he?(O(Oe.text),clearTimeout(me.current.my),me.current.my=setTimeout(()=>O(""),4e3)):(M(Oe.text),(Ye=s.ping)==null||Ye.call(s),clearTimeout(me.current.opp),me.current.opp=setTimeout(()=>M(""),4e3)))}if((ge.winner||ge.tie)&&!Q.current){Q.current=!0,clearInterval(H.current);const $e=!!ge.tie,Oe=ge.winner===he;m({won:$e?null:Oe,tie:$e,title:$e?"🤝 IT'S A TIE!":Oe?"🎉 YOU WIN!":"😔 YOU LOST!",sub:$e?"Both earn a point!":Oe?["Domination! 👑","Flawless! ⚡","Champion! 🏆"][Math.floor(Math.random()*3)]:["GG, rematch? 💪","They got lucky 😤","Next time! 🤝"][Math.floor(Math.random()*3)]}),Oe||$e?(De=s.win)==null||De.call(s):(We=s.lose)==null||We.call(s),Ea($e,Oe,ge,Z)}ge[`${Gr}Exited`]&&!Q.current&&(Q.current=!0,clearInterval(H.current),m({won:!0,tie:!1,title:"🏆 OPPONENT LEFT",sub:"You win by default!"}),(Jt=s.win)==null||Jt.call(s))});return()=>{Y(),clearInterval(H.current),clearInterval(j.current)}},[t]),b.useEffect(()=>{var Y;vn>X.current&&((Y=s.line)==null||Y.call(s),X.current=vn)},[vn]),b.useEffect(()=>{ft.length===25&&(Ae.current=ft)},[ft]),b.useEffect(()=>{if(!(ae!=null&&ae.turnStartedAt)||f)return;clearInterval(H.current);const Y=Math.floor((Date.now()-ae.turnStartedAt)/1e3),Z=Math.max(0,ih-Y);return h(Z),H.current=setInterval(()=>{h(ge=>ge<=1?(clearInterval(H.current),Dt&&!f&&!Q.current&&(P?(R(!1),h(ih)):va()),0):ge-1)},1e3),()=>clearInterval(H.current)},[ae==null?void 0:ae.turnStartedAt,ae==null?void 0:ae.turn]);const va=async()=>{const Y=Array.from({length:25},(Oe,Yr)=>Yr+1).filter(Oe=>!cn.includes(Oe));if(Y.length===0)return;const Z=Y[Math.floor(Math.random()*Y.length)],ge=[...cn,Z],Ye=he==="p1"?ft:Kr,De=he==="p2"?ft:Kr,We=St(Ye,ge),Jt=St(De,ge),$e=Gs-1;if($e<=0){await Qa(t,Gr);return}if(We>=wn&&Jt>=wn){await ST(t);return}if(We>=wn){await Qa(t,"p1");return}if(Jt>=wn){await Qa(t,"p2");return}await gB(t,he,ge,We,Jt,$e)},Wu=async Y=>{var Jt;if(f||Q.current||!Dt&&!S||cn.includes(Y)||ft.length===0)return;clearInterval(H.current),oe([]),(Jt=s.cross)==null||Jt.call(s);const Z=[...cn,Y],ge=he==="p1"?ft:Kr,Ye=he==="p2"?ft:Kr,De=St(ge.length?ge:ft,Z),We=St(Ye.length?Ye:[],Z);if(S){x(!1),await Ka(t,he,Z,De,We,!0);return}if(!Q.current){if(De>=wn&&We>=wn){await Ka(t,he,Z,De,We,!1),await ST(t);return}if(De>=wn){await Ka(t,he,Z,De,We,!1),await Qa(t,"p1");return}if(We>=wn){await Ka(t,he,Z,De,We,!1),await Qa(t,"p2");return}}await Ka(t,he,Z,De,We,!1)},Ef=Y=>{var Z;if(!(!C[Y]||!Dt||f)&&((Z=s.click)==null||Z.call(s),v(ge=>({...ge,[Y]:!1})),Y==="time"&&h(ge=>ge+20),Y==="shield"&&R(!0),Y==="double"&&x(!0),Y==="hint"||Y==="fifty")){const Ye=ft.filter(De=>!cn.includes(De)).map(De=>({n:De,lines:St(ft,[...cn,De])})).sort((De,We)=>We.lines-De.lines);oe(Ye.slice(0,Y==="fifty"?2:1).map(De=>De.n)),setTimeout(()=>oe([]),7e3)}},wa=async Y=>{if(A)return;await yB(t,{text:Y,isEmoji:!0,sender:he,senderName:(r==null?void 0:r.displayName)||"Me"}),E(!1),N(!0);let Z=3;T(Z),j.current=setInterval(()=>{Z--,T(Z),Z<=0&&(clearInterval(j.current),N(!1),T(0))},1e3)},Ea=async(Y,Z,ge,Ye)=>{var We,Jt;if(!n)return;const De=Math.round((Date.now()-te.current)/1e3);try{await SR(n.uid,Y?!1:Z);const $e=(We=Ye==null?void 0:Ye.players)==null?void 0:We.p1,Oe=(Jt=Ye==null?void 0:Ye.players)==null?void 0:Jt.p2;$e&&Oe&&he==="p1"&&await CR({p1Uid:$e.uid,p2Uid:Oe.uid,p1Name:$e.name,p2Name:Oe.name,winner:Y?null:ge.winner==="p1"?$e.uid:Oe.uid,p1Lines:ge.p1Lines,p2Lines:ge.p2Lines,duration:De,mode:"multiplayer"})}catch($e){console.error("matchEnd error:",$e)}},$u=async()=>{if(Et)return;$(!0);const Y={uid:n==null?void 0:n.uid,name:(r==null?void 0:r.displayName)||"Player",avatar:(r==null?void 0:r.avatar)||"🎯",role:he};try{const Z=await wB(t,he,Ae.current,Y);Z&&i(`/game/${Z}`,{state:{role:"p1",board:Ae.current},replace:!0})}catch(Z){console.error("Rematch error:",Z),$(!1)}},rt=async()=>{clearInterval(H.current),await _B(t,he).catch(()=>{}),i("/")};if(!a)return p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:14,background:"var(--bg)"},children:[p.jsx("div",{className:"spinner"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)"},children:"Connecting to room…"}),p.jsx("button",{className:"btn btn-ghost",style:{marginTop:8},onClick:()=>i("/"),children:"← Back to Home"})]});if((ae==null?void 0:ae.status)==="waiting")return p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:14,background:"var(--bg)"},children:[p.jsx("div",{className:"spinner"}),p.jsx("div",{style:{fontSize:13,color:"var(--ink2)"},children:"Waiting for opponent…"}),p.jsx("button",{className:"btn btn-ghost",onClick:rt,children:"🚪 Cancel & Leave"})]});const be=48;return p.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[p.jsx("div",{style:{background:"var(--panel)",borderBottom:"2px solid var(--edge2)",padding:"6px 8px",flexShrink:0},children:p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:4},children:[p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[p.jsxs("div",{style:{position:"relative",width:be,height:be,flexShrink:0},children:[p.jsx("div",{style:{width:be,height:be,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${Dt?"var(--c1)":"var(--edge)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,transition:"border-color 0.3s"},children:(dr==null?void 0:dr.avatar)||(r==null?void 0:r.avatar)||"🎯"}),p.jsx(bT,{timeLeft:c,size:be,active:Dt&&!f}),P&&p.jsx("div",{style:{position:"absolute",bottom:-2,right:-2,fontSize:10},children:"🛡️"})]}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:800,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:70},children:(dr==null?void 0:dr.name)||(r==null?void 0:r.displayName)||"You"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[vn,"/",wn]}),Dt&&!f&&p.jsx("div",{style:{fontSize:8,fontWeight:800,color:"var(--c1)",letterSpacing:1},children:S?"2️⃣ Pick 2nd":`${c}s`})]})]}),k&&p.jsx("div",{style:{marginTop:3,fontSize:14,background:"rgba(0,255,204,0.1)",border:"1px solid rgba(0,255,204,0.3)",borderRadius:8,padding:"2px 6px",display:"inline-block"},children:k}),p.jsx("div",{style:{display:"flex",gap:2,marginTop:3,flexWrap:"wrap"},children:NT.map(Y=>p.jsx("button",{onClick:()=>Ef(Y.id),disabled:!C[Y.id]||!Dt||!!f,title:Y.tip,style:{fontSize:12,padding:"2px 3px",background:C[Y.id]?"var(--panel2)":"transparent",border:`2px solid ${C[Y.id]?"var(--edge2)":"transparent"}`,borderRadius:4,cursor:C[Y.id]&&Dt?"pointer":"default",opacity:C[Y.id]?Dt?1:.35:.1,WebkitTapHighlightColor:"transparent"},children:Y.icon},Y.id))}),p.jsx("div",{style:{marginTop:2},children:p.jsx(DT,{count:Gs})})]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,minWidth:44,paddingTop:2},children:[p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,lineHeight:1},children:[p.jsx("span",{style:{color:"var(--c1)"},children:vn}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 1px"},children:":"}),p.jsx("span",{style:{color:"var(--c2)"},children:qs})]}),p.jsxs("div",{style:{fontSize:7,letterSpacing:1.5,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700},children:["#",t]})]}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,flexDirection:"row-reverse"},children:[p.jsxs("div",{style:{position:"relative",width:be,height:be,flexShrink:0},children:[p.jsx("div",{style:{width:be,height:be,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${Dt?"var(--edge)":"var(--c2)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,transition:"border-color 0.3s"},children:(Qr==null?void 0:Qr.avatar)||"🎯"}),p.jsx(bT,{timeLeft:c,size:be,active:!Dt&&!f})]}),p.jsxs("div",{style:{flex:1,minWidth:0,textAlign:"right"},children:[p.jsx("div",{style:{fontWeight:800,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:70,marginLeft:"auto"},children:(Qr==null?void 0:Qr.name)||"Opponent"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[qs,"/",wn]}),!Dt&&!f&&p.jsxs("div",{style:{fontSize:8,fontWeight:800,color:"var(--c2)",letterSpacing:1},children:[c,"s"]})]})]}),F&&p.jsx("div",{style:{marginTop:3,fontSize:14,background:"rgba(255,45,85,0.1)",border:"1px solid rgba(255,45,85,0.3)",borderRadius:8,padding:"2px 6px",display:"flex",justifyContent:"flex-end"},children:F}),p.jsx("div",{style:{display:"flex",gap:2,marginTop:3,justifyContent:"flex-end"},children:NT.map(Y=>p.jsx("div",{style:{fontSize:12,padding:"2px 3px",background:"var(--panel2)",border:"2px solid var(--edge)",borderRadius:4,opacity:.2},children:Y.icon},Y.id))}),p.jsx("div",{style:{marginTop:2,display:"flex",justifyContent:"flex-end"},children:p.jsx(DT,{count:zu})})]})]})}),p.jsxs("div",{style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"4px 8px"},children:[p.jsxs("div",{style:{marginBottom:5,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:11,color:"var(--ink2)"},children:f?"🏁 Game Over":Dt?"👆 Your turn — tap to call a number":"⏳ Opponent choosing…"}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink3)",marginTop:1},children:[cn.length,"/25 called"]}),_.length>0&&p.jsxs("div",{style:{fontSize:11,color:"var(--c3)",marginTop:2,fontWeight:700},children:["💡 Try: ",_.join(" or ")]}),S&&p.jsx("div",{style:{fontSize:11,color:"var(--c3)",fontWeight:800,marginTop:2,animation:"blink 0.8s infinite"},children:"2️⃣ PICK YOUR 2ND!"})]}),p.jsx(gg,{board:ft,selected:cn,onCellClick:Wu,disabled:!Dt&&!S||!!f||ft.length===0,highlightCells:_}),p.jsxs("div",{style:{marginTop:8,display:"flex",gap:4,alignItems:"center"},children:[Array.from({length:wn}).map((Y,Z)=>p.jsx("div",{style:{width:28,height:6,borderRadius:3,background:Z<vn?PT[Math.min(Z,4)]:"var(--edge)",boxShadow:Z<vn?`0 0 6px ${PT[Z]}88`:"none",transition:"all 0.4s"}},Z)),p.jsxs("span",{style:{fontSize:10,color:"var(--ink2)",marginLeft:3},children:[vn,"/",wn]})]})]}),p.jsxs("div",{style:{background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"5px 8px",flexShrink:0},children:[w&&p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:3,justifyContent:"center",paddingBottom:5},children:d5.map(Y=>p.jsx("button",{onClick:()=>wa(Y),disabled:A,style:{fontSize:19,background:"none",border:"none",cursor:"pointer",padding:"2px 3px",borderRadius:4,opacity:A?.3:1,WebkitTapHighlightColor:"transparent"},children:Y},Y))}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[p.jsx("button",{onClick:()=>!A&&E(Y=>!Y),disabled:A,style:{background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"6px 10px",fontSize:11,fontWeight:700,color:A?"var(--ink3)":"var(--ink)",cursor:A?"not-allowed":"pointer",WebkitTapHighlightColor:"transparent"},children:A?`⏱${I}s`:w?"✕":"😊"}),p.jsx("div",{style:{flex:1}}),p.jsx("button",{onClick:rt,style:{background:"transparent",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"6px 12px",fontSize:11,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Leave Room"})]})]}),p.jsx(IR,{show:!!f,isWin:f==null?void 0:f.won,tie:f==null?void 0:f.tie,title:f==null?void 0:f.title,sub:Et?"⏳ Waiting for opponent to accept rematch…":f==null?void 0:f.sub,onPlayAgain:$u,onHome:rt,showPlayAgain:!Et||!nt.newRoomId})]})}function p5(){const{user:t}=On(),e=Dn(),[n,r]=b.useState([]),[i,s]=b.useState(!0);b.useEffect(()=>{a5().then(l=>{r(l),s(!1)})},[]);const o=l=>l===1?{color:"var(--c3)",fontSize:22}:l===2?{color:"#aaa",fontSize:20}:l===3?{color:"#cd7f32",fontSize:18}:{color:"var(--ink3)",fontSize:16},a=l=>l===1?"🥇":l===2?"🥈":l===3?"🥉":`#${l}`;return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>e("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🏆 LEADERBOARD"})]}),i?p.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:p.jsx("div",{className:"spinner"})}):p.jsx("div",{className:"card",style:{maxWidth:440},children:p.jsxs("div",{style:{padding:"4px 0"},children:[n.length===0&&p.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:"No players yet. Be the first!"}),n.map(l=>p.jsxs("div",{className:"lb-row",style:{background:l.uid===(t==null?void 0:t.uid)?"rgba(0,255,204,0.05)":"transparent"},children:[p.jsx("div",{style:{...o(l.rank),fontFamily:"'Black Han Sans',sans-serif",width:36,textAlign:"center"},children:a(l.rank)}),p.jsx("div",{style:{fontSize:24},children:l.avatar||"🎯"}),p.jsxs("div",{style:{flex:1},children:[p.jsxs("div",{style:{fontWeight:700,fontSize:14},children:[l.displayName,l.uid===(t==null?void 0:t.uid)&&p.jsx("span",{style:{fontSize:10,color:"var(--c1)",marginLeft:6},children:"YOU"})]}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[l.total||0," games · ",l.winRate||0,"% WR"]})]}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:"var(--c1)"},children:l.wins||0}),p.jsx("div",{style:{fontSize:10,color:"var(--ink3)",letterSpacing:1,textTransform:"uppercase"},children:"wins"})]})]},l.uid))]})})]})}async function kR(t,e,n){const r=Br(Xn(ze,"friendRequests"),lr("from","==",t),lr("to","==",e));return(await Di(r)).empty?(await Cx(Xn(ze,"friendRequests"),{from:t,to:e,fromName:n,status:"pending",timestamp:sf()}),{success:!0}):{error:"Request already sent"}}async function m5(t,e,n){await xn(un(ze,"friendRequests",t),{status:"accepted"}),await xn(un(ze,"users",e),{friends:bE(n)}),await xn(un(ze,"users",n),{friends:bE(e)})}async function g5(t){await xn(un(ze,"friendRequests",t),{status:"declined"})}async function y5(t,e){await xn(un(ze,"users",t),{friends:DE(e)}),await xn(un(ze,"users",e),{friends:DE(t)})}function _5(t,e){const n=Br(Xn(ze,"friendRequests"),lr("to","==",t));return p4(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i.filter(s=>s.status==="pending"))},r=>{console.error("Friend requests error:",r),e([])})}async function v5(t){if(!t||t.length===0)return[];const e=[];for(const n of t)try{const r=await nf(un(ze,"users",n));r.exists()&&e.push({uid:n,...r.data()})}catch{}return e}function w5(){var R;const{user:t,profile:e,refreshProfile:n}=On(),r=Dn(),[i,s]=b.useState("friends"),[o,a]=b.useState([]),[l,c]=b.useState([]),[h,f]=b.useState(""),[m,w]=b.useState([]),[E,A]=b.useState(!1),[N,I]=b.useState(!0),[T,k]=b.useState({}),O=b.useRef(null);b.useEffect(()=>{if(!(e!=null&&e.friends)){I(!1);return}v5(e.friends).then(_=>{a(_),I(!1)}).catch(()=>I(!1))},[(R=e==null?void 0:e.friends)==null?void 0:R.length]),b.useEffect(()=>{if(!t)return;const _=_5(t.uid,oe=>c(oe));return O.current=_,()=>{O.current&&O.current()}},[t==null?void 0:t.uid]);const F=async()=>{if(!h.trim())return;A(!0),w([]);const _=h.trim(),oe=/^#?\d{6,9}$/.test(_);try{const nt=oe?await lB(_):await aB(_);w(nt.filter(bt=>bt.uid!==t.uid))}catch{vr("Search failed","Try again","error")}A(!1)},M=async _=>{const oe=await kR(t.uid,_.uid,(e==null?void 0:e.displayName)||"Player");oe.error?vr("⚠️ "+oe.error,"","info"):vr("✅ Request Sent!",`Sent to ${_.displayName}`,"success")},C=async _=>{await m5(_.id,t.uid,_.from),await n(t.uid),vr("👥 Friends!",`You and ${_.fromName} are now friends`,"success")},v=async _=>{await g5(_.id)},S=async _=>{await y5(t.uid,_),await n(t.uid),a(oe=>oe.filter(nt=>nt.uid!==_))},x=async _=>{if(!T[_.uid]){k(oe=>({...oe,[_.uid]:"pending"}));try{const oe=bs(),nt={uid:t.uid,name:(e==null?void 0:e.displayName)||"Player",avatar:(e==null?void 0:e.avatar)||"🎯"},{roomId:bt}=await EB(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",_.uid,oe);vr("🎮 Challenge Sent!",`Waiting for ${_.displayName} to accept…`,"success"),r(`/game/${bt}`,{state:{role:"p1",board:oe}})}catch(oe){console.error("Challenge error:",oe),vr("❌ Failed","Could not send challenge. Try again.","error"),k(nt=>({...nt,[_.uid]:null}))}}},P=[{id:"friends",label:`Friends (${o.length})`},{id:"requests",label:`Requests${l.length>0?` (${l.length})`:""}`,badge:l.length},{id:"search",label:"🔍 Find"}];return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:14,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"👥 FRIENDS"})]}),p.jsx("div",{style:{display:"flex",gap:6,width:"100%",maxWidth:440,marginBottom:14},children:P.map(_=>p.jsxs("button",{onClick:()=>s(_.id),style:{flex:1,padding:"9px 6px",border:"2px solid",borderColor:i===_.id?"var(--c1)":"var(--edge2)",borderRadius:"var(--r)",background:i===_.id?"rgba(0,255,204,0.1)":"var(--panel)",color:i===_.id?"var(--c1)":"var(--ink2)",fontSize:11,fontWeight:700,cursor:"pointer",WebkitTapHighlightColor:"transparent",position:"relative"},children:[_.label,_.badge>0&&i!==_.id&&p.jsx("span",{style:{position:"absolute",top:-6,right:-4,background:"var(--c2)",color:"#fff",fontSize:10,fontWeight:700,borderRadius:"50%",width:17,height:17,display:"flex",alignItems:"center",justifyContent:"center"},children:_.badge})]},_.id))}),i==="friends"&&p.jsx("div",{className:"card",style:{maxWidth:440},children:N?p.jsx("div",{style:{display:"flex",justifyContent:"center",padding:32},children:p.jsx("div",{className:"spinner"})}):o.length===0?p.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[p.jsx("div",{style:{fontSize:40,marginBottom:10},children:"👥"}),p.jsx("div",{style:{fontWeight:700},children:"No friends yet"}),p.jsx("div",{style:{fontSize:13,marginTop:4},children:"Search by name or Player ID to add players!"}),p.jsx("button",{className:"btn btn-primary",style:{marginTop:14},onClick:()=>s("search"),children:"Find Players"})]}):o.map(_=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("span",{style:{fontSize:26},children:_.avatar||"🎯"}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:700,fontSize:14,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:_.displayName}),p.jsxs("div",{style:{fontSize:10,color:"var(--ink2)",marginTop:1},children:[_.wins||0,"W · ",_.losses||0,"L",_.shortId&&p.jsxs("span",{style:{marginLeft:8,color:"var(--c3)",fontFamily:"'Black Han Sans',sans-serif",letterSpacing:1},children:["#",_.shortId]})]})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[p.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:_.isOnline?"var(--c1)":"var(--ink3)",boxShadow:_.isOnline?"0 0 6px var(--c1)":"none"}}),p.jsx("button",{onClick:()=>x(_),disabled:!!T[_.uid],title:`Challenge ${_.displayName} to a match`,style:{background:T[_.uid]?"var(--panel2)":"var(--c4)",color:"#fff",border:"none",borderRadius:7,padding:"6px 10px",fontWeight:700,fontSize:11,cursor:T[_.uid]?"not-allowed":"pointer",WebkitTapHighlightColor:"transparent",opacity:T[_.uid]?.5:1},children:T[_.uid]?"⏳":"🎮"}),p.jsx("button",{onClick:()=>S(_.uid),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:6,padding:"4px 8px",fontSize:11,color:"var(--ink3)",cursor:"pointer"},children:"✕"})]})]},_.uid))}),i==="requests"&&p.jsx("div",{className:"card",style:{maxWidth:440},children:l.length===0?p.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[p.jsx("div",{style:{fontSize:40,marginBottom:10},children:"📭"}),p.jsx("div",{style:{fontWeight:700},children:"No pending requests"}),p.jsx("div",{style:{fontSize:13,marginTop:4},children:"When someone adds you, it appears here."})]}):l.map(_=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("span",{style:{fontSize:28},children:"🎯"}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:700,fontSize:14},children:_.fromName||"Unknown"}),p.jsx("div",{style:{fontSize:12,color:"var(--ink2)",marginTop:2},children:"Wants to be friends"})]}),p.jsx("button",{onClick:()=>C(_),style:{background:"var(--c1)",color:"#000",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer",marginRight:4},children:"✓ Accept"}),p.jsx("button",{onClick:()=>v(_),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"8px 10px",fontSize:12,color:"var(--ink2)",cursor:"pointer"},children:"✕"})]},_.id))}),i==="search"&&p.jsxs("div",{style:{width:"100%",maxWidth:440},children:[p.jsxs("div",{style:{fontSize:11,color:"var(--ink3)",marginBottom:8,paddingLeft:2,lineHeight:1.6},children:["Search by display name, or enter a Player ID like ",p.jsx("span",{style:{color:"var(--c3)",fontFamily:"'Black Han Sans',sans-serif"},children:"#12345678"})]}),p.jsxs("div",{style:{display:"flex",gap:8,marginBottom:14},children:[p.jsx("input",{type:"text",placeholder:"Name or #PlayerID…",value:h,onChange:_=>f(_.target.value),onKeyDown:_=>_.key==="Enter"&&F(),style:{flex:1}}),p.jsx("button",{className:"btn btn-primary",onClick:F,disabled:E,style:{padding:"0 16px"},children:E?"…":"🔍"})]}),m.length>0&&p.jsx("div",{className:"card",children:m.map(_=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("span",{style:{fontSize:26},children:_.avatar||"🎯"}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsx("div",{style:{fontWeight:700,fontSize:14,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:_.displayName}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[_.wins||0,"W · ",_.losses||0,"L",_.shortId&&p.jsxs("span",{style:{marginLeft:8,color:"var(--c3)",fontFamily:"'Black Han Sans',sans-serif",fontSize:11,letterSpacing:1},children:["#",_.shortId]})]})]}),p.jsx("button",{onClick:()=>M(_),style:{background:"var(--c4)",color:"#fff",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer"},children:"+ Add"})]},_.uid))}),h&&!E&&m.length===0&&p.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",padding:24,fontSize:14},children:['No players found for "',h,'"']})]})]})}function E5(t){if(!t)return"—";try{return(t!=null&&t.toDate?t.toDate():t!=null&&t.seconds?new Date(t.seconds*1e3):new Date(t)).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"—"}}function T5(t){if(!t)return"—";const e=Math.floor(t/60),n=t%60;return e>0?`${e}m ${n}s`:`${n}s`}function I5(){const{user:t,profile:e}=On(),n=Dn(),[r,i]=b.useState([]),[s,o]=b.useState(!0),[a,l]=b.useState({});b.useEffect(()=>{t&&l5(t.uid).then(h=>{const f=h.filter(m=>m.mode!=="bot"&&m.p2Uid!=="bot"&&m.p2Uid!=="BOT");i(f),o(!1)}).catch(()=>o(!1))},[t]);const c=async h=>{const f=h.p1Uid===t.uid,m=f?h.p2Uid:h.p1Uid,w=f?h.p2Name:h.p1Name;if(!m||m===t.uid)return;l(A=>({...A,[h.id]:"loading"}));const E=await kR(t.uid,m,(e==null?void 0:e.displayName)||"Player");E.error?(vr("Already sent",E.error,"info"),l(A=>({...A,[h.id]:"done"}))):(vr("✅ Request Sent!",`Friend request sent to ${w}`,"success"),l(A=>({...A,[h.id]:"done"})))};return p.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[p.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),p.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"📊 HISTORY"})]}),s?p.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:p.jsx("div",{className:"spinner"})}):r.length===0?p.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",paddingTop:60},children:[p.jsx("div",{style:{fontSize:52,marginBottom:14},children:"🎮"}),p.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:6},children:"No multiplayer games yet!"}),p.jsx("div",{style:{fontSize:13},children:"Play against real opponents — your match history appears here."}),p.jsx("button",{className:"btn btn-primary",style:{marginTop:20},onClick:()=>n("/"),children:"Play Now"})]}):p.jsx("div",{className:"card",style:{maxWidth:440},children:r.map(h=>{const f=h.p1Uid===t.uid,m=h.winner===t.uid,w=f?h.p1Lines:h.p2Lines,E=f?h.p2Lines:h.p1Lines,A=f?h.p2Name:h.p1Name,N=f?h.p2Uid:h.p1Uid,I=a[h.id];return p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[p.jsx("div",{style:{fontSize:26,width:34,textAlign:"center",flexShrink:0},children:m?"🏆":"💀"}),p.jsxs("div",{style:{flex:1,minWidth:0},children:[p.jsxs("div",{style:{fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["vs ",A||"Unknown"]}),p.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[E5(h.timestamp||h.tsNum)," · ",T5(h.duration)]})]}),p.jsxs("div",{style:{textAlign:"right",marginRight:6},children:[p.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:16},children:[p.jsx("span",{style:{color:"var(--c1)"},children:w??"—"}),p.jsx("span",{style:{color:"var(--ink3)",margin:"0 3px"},children:"–"}),p.jsx("span",{style:{color:"var(--c2)"},children:E??"—"})]}),p.jsx("div",{style:{fontSize:10,fontWeight:800,color:m?"var(--c1)":"var(--c2)",letterSpacing:1},children:m?"WIN":"LOSS"})]}),N&&N!==t.uid&&p.jsx("button",{onClick:()=>c(h),disabled:I==="loading"||I==="done",title:`Add ${A} as friend`,style:{fontSize:16,background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"5px 8px",cursor:I?"not-allowed":"pointer",color:I==="done"?"var(--c1)":"var(--c4)",flexShrink:0,WebkitTapHighlightColor:"transparent",opacity:I==="done"?.5:1},children:I==="loading"?"⏳":I==="done"?"✅":"👥+"})]},h.id)})})]})}function xR(){return p.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:p.jsx("div",{className:"spinner"})})}function Ji({children:t}){const{user:e,loading:n}=On();return n?p.jsx(xR,{}):e?t:p.jsx(oC,{to:"/login",replace:!0})}function S5(){const{user:t,loading:e}=On();return e?p.jsx(xR,{}):t?p.jsx(r5,{}):p.jsx(KB,{})}function C5(){return b.useEffect(()=>{qB(t=>{var e,n;vr(((e=t.notification)==null?void 0:e.title)||"DiNGo",((n=t.notification)==null?void 0:n.body)||"","info")})},[]),p.jsxs(vb,{children:[p.jsx(mB,{}),p.jsx(BB,{}),p.jsxs(gb,{children:[p.jsx(Vn,{path:"/",element:p.jsx(S5,{})}),p.jsx(Vn,{path:"/login",element:p.jsx(QB,{})}),p.jsx(Vn,{path:"/profile",element:p.jsx(Ji,{children:p.jsx(o5,{})})}),p.jsx(Vn,{path:"/bot",element:p.jsx(Ji,{children:p.jsx(u5,{})})}),p.jsx(Vn,{path:"/room/:mode",element:p.jsx(Ji,{children:p.jsx(h5,{})})}),p.jsx(Vn,{path:"/game/:roomId",element:p.jsx(Ji,{children:p.jsx(f5,{})})}),p.jsx(Vn,{path:"/leaderboard",element:p.jsx(Ji,{children:p.jsx(p5,{})})}),p.jsx(Vn,{path:"/friends",element:p.jsx(Ji,{children:p.jsx(w5,{})})}),p.jsx(Vn,{path:"/history",element:p.jsx(Ji,{children:p.jsx(I5,{})})}),p.jsx(Vn,{path:"*",element:p.jsx(oC,{to:"/",replace:!0})})]})]})}function k5(){return p.jsx(pB,{children:p.jsx(C5,{})})}Lp.createRoot(document.getElementById("root")).render(p.jsx($T.StrictMode,{children:p.jsx(k5,{})}));
