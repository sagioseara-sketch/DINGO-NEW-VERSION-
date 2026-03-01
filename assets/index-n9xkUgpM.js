function RP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function AP(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iT={exports:{}},Th={},sT={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pl=Symbol.for("react.element"),kP=Symbol.for("react.portal"),PP=Symbol.for("react.fragment"),NP=Symbol.for("react.strict_mode"),xP=Symbol.for("react.profiler"),bP=Symbol.for("react.provider"),OP=Symbol.for("react.context"),DP=Symbol.for("react.forward_ref"),LP=Symbol.for("react.suspense"),MP=Symbol.for("react.memo"),VP=Symbol.for("react.lazy"),xv=Symbol.iterator;function FP(t){return t===null||typeof t!="object"?null:(t=xv&&t[xv]||t["@@iterator"],typeof t=="function"?t:null)}var oT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aT=Object.assign,lT={};function Ao(t,e,n){this.props=t,this.context=e,this.refs=lT,this.updater=n||oT}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uT(){}uT.prototype=Ao.prototype;function $m(t,e,n){this.props=t,this.context=e,this.refs=lT,this.updater=n||oT}var qm=$m.prototype=new uT;qm.constructor=$m;aT(qm,Ao.prototype);qm.isPureReactComponent=!0;var bv=Array.isArray,cT=Object.prototype.hasOwnProperty,Hm={current:null},hT={key:!0,ref:!0,__self:!0,__source:!0};function dT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cT.call(e,r)&&!hT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Pl,type:t,key:s,ref:o,props:i,_owner:Hm.current}}function jP(t,e){return{$$typeof:Pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pl}function UP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ov=/\/+/g;function af(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UP(""+t.key):e.toString(36)}function Xu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pl:case kP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+af(o,0):r,bv(i)?(n="",t!=null&&(n=t.replace(Ov,"$&/")+"/"),Xu(i,e,n,"",function(c){return c})):i!=null&&(Gm(i)&&(i=jP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ov,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+af(s,a);o+=Xu(s,e,n,u,i)}else if(u=FP(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+af(s,a++),o+=Xu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Iu(t,e,n){if(t==null)return t;var r=[],i=0;return Xu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},Ju={transition:null},zP={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:Ju,ReactCurrentOwner:Hm};function fT(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:Iu,forEach:function(t,e,n){Iu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Iu(t,function(){e++}),e},toArray:function(t){return Iu(t,function(e){return e})||[]},only:function(t){if(!Gm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=Ao;le.Fragment=PP;le.Profiler=xP;le.PureComponent=$m;le.StrictMode=NP;le.Suspense=LP;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zP;le.act=fT;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=aT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)cT.call(e,u)&&!hT.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Pl,type:t.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:OP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bP,_context:t},t.Consumer=t};le.createElement=dT;le.createFactory=function(t){var e=dT.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:DP,render:t}};le.isValidElement=Gm;le.lazy=function(t){return{$$typeof:VP,_payload:{_status:-1,_result:t},_init:BP}};le.memo=function(t,e){return{$$typeof:MP,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Ju.transition;Ju.transition={};try{t()}finally{Ju.transition=e}};le.unstable_act=fT;le.useCallback=function(t,e){return Ft.current.useCallback(t,e)};le.useContext=function(t){return Ft.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};le.useEffect=function(t,e){return Ft.current.useEffect(t,e)};le.useId=function(){return Ft.current.useId()};le.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Ft.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};le.useRef=function(t){return Ft.current.useRef(t)};le.useState=function(t){return Ft.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Ft.current.useTransition()};le.version="18.3.1";sT.exports=le;var M=sT.exports;const pT=AP(M),WP=RP({__proto__:null,default:pT},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $P=M,qP=Symbol.for("react.element"),HP=Symbol.for("react.fragment"),GP=Object.prototype.hasOwnProperty,KP=$P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QP={key:!0,ref:!0,__self:!0,__source:!0};function mT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GP.call(e,r)&&!QP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qP,type:t,key:s,ref:o,props:i,_owner:KP.current}}Th.Fragment=HP;Th.jsx=mT;Th.jsxs=mT;iT.exports=Th;var g=iT.exports,sp={},gT={exports:{}},an={},_T={exports:{}},yT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Q){var J=W.length;W.push(Q);e:for(;0<J;){var G=J-1>>>1,ne=W[G];if(0<i(ne,Q))W[G]=Q,W[J]=ne,J=G;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Q=W[0],J=W.pop();if(J!==Q){W[0]=J;e:for(var G=0,ne=W.length,oe=ne>>>1;G<oe;){var je=2*(G+1)-1,lt=W[je],Ye=je+1,re=W[Ye];if(0>i(lt,J))Ye<ne&&0>i(re,lt)?(W[G]=re,W[Ye]=J,G=Ye):(W[G]=lt,W[je]=J,G=je);else if(Ye<ne&&0>i(re,J))W[G]=re,W[Ye]=J,G=Ye;else break e}}return Q}function i(W,Q){var J=W.sortIndex-Q.sortIndex;return J!==0?J:W.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,y=!1,I=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(W){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=W)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function D(W){if(P=!1,A(W),!I)if(n(u)!==null)I=!0,Pt(O);else{var Q=n(c);Q!==null&&Qe(D,Q.startTime-W)}}function O(W,Q){I=!1,P&&(P=!1,T(v),v=-1),y=!0;var J=m;try{for(A(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||W&&!k());){var G=f.callback;if(typeof G=="function"){f.callback=null,m=f.priorityLevel;var ne=G(f.expirationTime<=Q);Q=t.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(u)&&r(u),A(Q)}else r(u);f=n(u)}if(f!==null)var oe=!0;else{var je=n(c);je!==null&&Qe(D,je.startTime-Q),oe=!1}return oe}finally{f=null,m=J,y=!1}}var j=!1,E=null,v=-1,S=5,R=-1;function k(){return!(t.unstable_now()-R<S)}function x(){if(E!==null){var W=t.unstable_now();R=W;var Q=!0;try{Q=E(!0,W)}finally{Q?C():(j=!1,E=null)}}else j=!1}var C;if(typeof w=="function")C=function(){w(x)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Qt=Ke.port2;Ke.port1.onmessage=x,C=function(){Qt.postMessage(null)}}else C=function(){N(x,0)};function Pt(W){E=W,j||(j=!0,C())}function Qe(W,Q){v=N(function(){W(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){I||y||(I=!0,Pt(O))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return W()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var J=m;m=W;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(W,Q,J){var G=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?G+J:G):J=G,W){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=J+ne,W={id:h++,callback:Q,priorityLevel:W,startTime:J,expirationTime:ne,sortIndex:-1},J>G?(W.sortIndex=J,e(c,W),n(u)===null&&W===n(c)&&(P?(T(v),v=-1):P=!0,Qe(D,J-G))):(W.sortIndex=ne,e(u,W),I||y||(I=!0,Pt(O))),W},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(W){var Q=m;return function(){var J=m;m=Q;try{return W.apply(this,arguments)}finally{m=J}}}})(yT);_T.exports=yT;var YP=_T.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XP=M,on=YP;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vT=new Set,$a={};function us(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for($a[t]=e,t=0;t<e.length;t++)vT.add(e[t])}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),op=Object.prototype.hasOwnProperty,JP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dv={},Lv={};function ZP(t){return op.call(Lv,t)?!0:op.call(Dv,t)?!1:JP.test(t)?Lv[t]=!0:(Dv[t]=!0,!1)}function eN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tN(t,e,n,r){if(e===null||typeof e>"u"||eN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gt[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gt[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gt[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gt[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gt[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gt[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gt[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gt[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gt[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Km=/[\-:]([a-z])/g;function Qm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Km,Qm);gt[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Km,Qm);gt[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Km,Qm);gt[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gt[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});gt.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gt[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ym(t,e,n,r){var i=gt.hasOwnProperty(e)?gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tN(e,n,i,r)&&(n=null),r||i===null?ZP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kr=XP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Su=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Xm=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),wT=Symbol.for("react.provider"),ET=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),lp=Symbol.for("react.suspense"),up=Symbol.for("react.suspense_list"),Zm=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),TT=Symbol.for("react.offscreen"),Mv=Symbol.iterator;function ea(t){return t===null||typeof t!="object"?null:(t=Mv&&t[Mv]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,lf;function pa(t){if(lf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lf=e&&e[1]||""}return`
`+lf+t}var uf=!1;function cf(t,e){if(!t||uf)return"";uf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{uf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function nN(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=cf(t.type,!1),t;case 11:return t=cf(t.type.render,!1),t;case 1:return t=cf(t.type,!0),t;default:return""}}function cp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case Ps:return"Portal";case ap:return"Profiler";case Xm:return"StrictMode";case lp:return"Suspense";case up:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ET:return(t.displayName||"Context")+".Consumer";case wT:return(t._context.displayName||"Context")+".Provider";case Jm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zm:return e=t.displayName||null,e!==null?e:cp(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return cp(t(e))}catch{}}return null}function rN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cp(e);case 8:return e===Xm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function li(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function IT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iN(t){var e=IT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cu(t){t._valueTracker||(t._valueTracker=iN(t))}function ST(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=IT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hp(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=li(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function CT(t,e){e=e.checked,e!=null&&Ym(t,"checked",e,!1)}function dp(t,e){CT(t,e);var n=li(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fp(t,e.type,n):e.hasOwnProperty("defaultValue")&&fp(t,e.type,li(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fp(t,e,n){(e!=="number"||wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function Ws(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+li(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ma(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:li(n)}}function RT(t,e){var n=li(e.value),r=li(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Uv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function AT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?AT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ru,kT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ru=Ru||document.createElement("div"),Ru.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ru.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sN=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){sN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function PT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function NT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=PT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var oN=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gp(t,e){if(e){if(oN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function _p(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yp=null;function eg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vp=null,$s=null,qs=null;function Bv(t){if(t=bl(t)){if(typeof vp!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Ah(e),vp(t.stateNode,t.type,e))}}function xT(t){$s?qs?qs.push(t):qs=[t]:$s=t}function bT(){if($s){var t=$s,e=qs;if(qs=$s=null,Bv(t),e)for(t=0;t<e.length;t++)Bv(e[t])}}function OT(t,e){return t(e)}function DT(){}var hf=!1;function LT(t,e,n){if(hf)return t(e,n);hf=!0;try{return OT(t,e,n)}finally{hf=!1,($s!==null||qs!==null)&&(DT(),bT())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Ah(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var wp=!1;if(yr)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){wp=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{wp=!1}function aN(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ca=!1,Ec=null,Tc=!1,Ep=null,lN={onError:function(t){Ca=!0,Ec=t}};function uN(t,e,n,r,i,s,o,a,u){Ca=!1,Ec=null,aN.apply(lN,arguments)}function cN(t,e,n,r,i,s,o,a,u){if(uN.apply(this,arguments),Ca){if(Ca){var c=Ec;Ca=!1,Ec=null}else throw Error(U(198));Tc||(Tc=!0,Ep=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function MT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zv(t){if(cs(t)!==t)throw Error(U(188))}function hN(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zv(i),t;if(s===r)return zv(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function VT(t){return t=hN(t),t!==null?FT(t):null}function FT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=FT(t);if(e!==null)return e;t=t.sibling}return null}var jT=on.unstable_scheduleCallback,Wv=on.unstable_cancelCallback,dN=on.unstable_shouldYield,fN=on.unstable_requestPaint,Fe=on.unstable_now,pN=on.unstable_getCurrentPriorityLevel,tg=on.unstable_ImmediatePriority,UT=on.unstable_UserBlockingPriority,Ic=on.unstable_NormalPriority,mN=on.unstable_LowPriority,BT=on.unstable_IdlePriority,Ih=null,Un=null;function gN(t){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Ih,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:vN,_N=Math.log,yN=Math.LN2;function vN(t){return t>>>=0,t===0?32:31-(_N(t)/yN|0)|0}var Au=64,ku=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ga(a):(s&=o,s!==0&&(r=ga(s)))}else o=n&~i,o!==0?r=ga(o):s!==0&&(r=ga(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kn(e),i=1<<n,r|=t[n],e&=~i;return r}function wN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=wN(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Tp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zT(){var t=Au;return Au<<=1,!(Au&4194240)&&(Au=64),t}function df(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Nl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function TN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-kn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ng(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function WT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $T,rg,qT,HT,GT,Ip=!1,Pu=[],Yr=null,Xr=null,Jr=null,Ga=new Map,Ka=new Map,Ur=[],IN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $v(t,e){switch(t){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(e.pointerId)}}function na(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bl(e),e!==null&&rg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function SN(t,e,n,r,i){switch(e){case"focusin":return Yr=na(Yr,t,e,n,r,i),!0;case"dragenter":return Xr=na(Xr,t,e,n,r,i),!0;case"mouseover":return Jr=na(Jr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ga.set(s,na(Ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ka.set(s,na(Ka.get(s)||null,t,e,n,r,i)),!0}return!1}function KT(t){var e=Oi(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=MT(n),e!==null){t.blockedOn=e,GT(t.priority,function(){qT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yp=r,n.target.dispatchEvent(r),yp=null}else return e=bl(n),e!==null&&rg(e),t.blockedOn=n,!1;e.shift()}return!0}function qv(t,e,n){Zu(t)&&n.delete(e)}function CN(){Ip=!1,Yr!==null&&Zu(Yr)&&(Yr=null),Xr!==null&&Zu(Xr)&&(Xr=null),Jr!==null&&Zu(Jr)&&(Jr=null),Ga.forEach(qv),Ka.forEach(qv)}function ra(t,e){t.blockedOn===e&&(t.blockedOn=null,Ip||(Ip=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,CN)))}function Qa(t){function e(i){return ra(i,t)}if(0<Pu.length){ra(Pu[0],t);for(var n=1;n<Pu.length;n++){var r=Pu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yr!==null&&ra(Yr,t),Xr!==null&&ra(Xr,t),Jr!==null&&ra(Jr,t),Ga.forEach(e),Ka.forEach(e),n=0;n<Ur.length;n++)r=Ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ur.length&&(n=Ur[0],n.blockedOn===null);)KT(n),n.blockedOn===null&&Ur.shift()}var Hs=kr.ReactCurrentBatchConfig,Cc=!0;function RN(t,e,n,r){var i=_e,s=Hs.transition;Hs.transition=null;try{_e=1,ig(t,e,n,r)}finally{_e=i,Hs.transition=s}}function AN(t,e,n,r){var i=_e,s=Hs.transition;Hs.transition=null;try{_e=4,ig(t,e,n,r)}finally{_e=i,Hs.transition=s}}function ig(t,e,n,r){if(Cc){var i=Sp(t,e,n,r);if(i===null)Tf(t,e,r,Rc,n),$v(t,r);else if(SN(i,t,e,n,r))r.stopPropagation();else if($v(t,r),e&4&&-1<IN.indexOf(t)){for(;i!==null;){var s=bl(i);if(s!==null&&$T(s),s=Sp(t,e,n,r),s===null&&Tf(t,e,r,Rc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Tf(t,e,r,null,n)}}var Rc=null;function Sp(t,e,n,r){if(Rc=null,t=eg(r),t=Oi(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=MT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rc=t,null}function QT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pN()){case tg:return 1;case UT:return 4;case Ic:case mN:return 16;case BT:return 536870912;default:return 16}default:return 16}}var qr=null,sg=null,ec=null;function YT(){if(ec)return ec;var t,e=sg,n=e.length,r,i="value"in qr?qr.value:qr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ec=i.slice(t,1<r?1-r:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nu(){return!0}function Hv(){return!1}function ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nu:Hv,this.isPropagationStopped=Hv,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nu)},persist:function(){},isPersistent:Nu}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},og=ln(ko),xl=be({},ko,{view:0,detail:0}),kN=ln(xl),ff,pf,ia,Sh=be({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ag,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(ff=t.screenX-ia.screenX,pf=t.screenY-ia.screenY):pf=ff=0,ia=t),ff)},movementY:function(t){return"movementY"in t?t.movementY:pf}}),Gv=ln(Sh),PN=be({},Sh,{dataTransfer:0}),NN=ln(PN),xN=be({},xl,{relatedTarget:0}),mf=ln(xN),bN=be({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),ON=ln(bN),DN=be({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LN=ln(DN),MN=be({},ko,{data:0}),Kv=ln(MN),VN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jN[t])?!!e[t]:!1}function ag(){return UN}var BN=be({},xl,{key:function(t){if(t.key){var e=VN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ag,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zN=ln(BN),WN=be({},Sh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qv=ln(WN),$N=be({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ag}),qN=ln($N),HN=be({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),GN=ln(HN),KN=be({},Sh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QN=ln(KN),YN=[9,13,27,32],lg=yr&&"CompositionEvent"in window,Ra=null;yr&&"documentMode"in document&&(Ra=document.documentMode);var XN=yr&&"TextEvent"in window&&!Ra,XT=yr&&(!lg||Ra&&8<Ra&&11>=Ra),Yv=" ",Xv=!1;function JT(t,e){switch(t){case"keyup":return YN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ZT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function JN(t,e){switch(t){case"compositionend":return ZT(e);case"keypress":return e.which!==32?null:(Xv=!0,Yv);case"textInput":return t=e.data,t===Yv&&Xv?null:t;default:return null}}function ZN(t,e){if(xs)return t==="compositionend"||!lg&&JT(t,e)?(t=YT(),ec=sg=qr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return XT&&e.locale!=="ko"?null:e.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ex[t.type]:e==="textarea"}function eI(t,e,n,r){xT(r),e=Ac(e,"onChange"),0<e.length&&(n=new og("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Aa=null,Ya=null;function tx(t){hI(t,0)}function Ch(t){var e=Ds(t);if(ST(e))return t}function nx(t,e){if(t==="change")return e}var tI=!1;if(yr){var gf;if(yr){var _f="oninput"in document;if(!_f){var Zv=document.createElement("div");Zv.setAttribute("oninput","return;"),_f=typeof Zv.oninput=="function"}gf=_f}else gf=!1;tI=gf&&(!document.documentMode||9<document.documentMode)}function ew(){Aa&&(Aa.detachEvent("onpropertychange",nI),Ya=Aa=null)}function nI(t){if(t.propertyName==="value"&&Ch(Ya)){var e=[];eI(e,Ya,t,eg(t)),LT(tx,e)}}function rx(t,e,n){t==="focusin"?(ew(),Aa=e,Ya=n,Aa.attachEvent("onpropertychange",nI)):t==="focusout"&&ew()}function ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ch(Ya)}function sx(t,e){if(t==="click")return Ch(e)}function ox(t,e){if(t==="input"||t==="change")return Ch(e)}function ax(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:ax;function Xa(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!op.call(e,i)||!On(t[i],e[i]))return!1}return!0}function tw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nw(t,e){var n=tw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tw(n)}}function rI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iI(){for(var t=window,e=wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wc(t.document)}return e}function ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lx(t){var e=iI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rI(n.ownerDocument.documentElement,n)){if(r!==null&&ug(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nw(n,s);var o=nw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ux=yr&&"documentMode"in document&&11>=document.documentMode,bs=null,Cp=null,ka=null,Rp=!1;function rw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rp||bs==null||bs!==wc(r)||(r=bs,"selectionStart"in r&&ug(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ka&&Xa(ka,r)||(ka=r,r=Ac(Cp,"onSelect"),0<r.length&&(e=new og("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bs)))}function xu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:xu("Animation","AnimationEnd"),animationiteration:xu("Animation","AnimationIteration"),animationstart:xu("Animation","AnimationStart"),transitionend:xu("Transition","TransitionEnd")},yf={},sI={};yr&&(sI=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Rh(t){if(yf[t])return yf[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sI)return yf[t]=e[n];return t}var oI=Rh("animationend"),aI=Rh("animationiteration"),lI=Rh("animationstart"),uI=Rh("transitionend"),cI=new Map,iw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gi(t,e){cI.set(t,e),us(e,[t])}for(var vf=0;vf<iw.length;vf++){var wf=iw[vf],cx=wf.toLowerCase(),hx=wf[0].toUpperCase()+wf.slice(1);gi(cx,"on"+hx)}gi(oI,"onAnimationEnd");gi(aI,"onAnimationIteration");gi(lI,"onAnimationStart");gi("dblclick","onDoubleClick");gi("focusin","onFocus");gi("focusout","onBlur");gi(uI,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function sw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cN(r,e,void 0,t),t.currentTarget=null}function hI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;sw(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;sw(i,a,c),s=u}}}if(Tc)throw t=Ep,Tc=!1,Ep=null,t}function Re(t,e){var n=e[xp];n===void 0&&(n=e[xp]=new Set);var r=t+"__bubble";n.has(r)||(dI(e,t,2,!1),n.add(r))}function Ef(t,e,n){var r=0;e&&(r|=4),dI(n,t,r,e)}var bu="_reactListening"+Math.random().toString(36).slice(2);function Ja(t){if(!t[bu]){t[bu]=!0,vT.forEach(function(n){n!=="selectionchange"&&(dx.has(n)||Ef(n,!1,t),Ef(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bu]||(e[bu]=!0,Ef("selectionchange",!1,e))}}function dI(t,e,n,r){switch(QT(e)){case 1:var i=RN;break;case 4:i=AN;break;default:i=ig}n=i.bind(null,e,n,t),i=void 0,!wp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Tf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Oi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}LT(function(){var c=s,h=eg(n),f=[];e:{var m=cI.get(t);if(m!==void 0){var y=og,I=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":y=zN;break;case"focusin":I="focus",y=mf;break;case"focusout":I="blur",y=mf;break;case"beforeblur":case"afterblur":y=mf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Gv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=NN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=qN;break;case oI:case aI:case lI:y=ON;break;case uI:y=GN;break;case"scroll":y=kN;break;case"wheel":y=QN;break;case"copy":case"cut":case"paste":y=LN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Qv}var P=(e&4)!==0,N=!P&&t==="scroll",T=P?m!==null?m+"Capture":null:m;P=[];for(var w=c,A;w!==null;){A=w;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,T!==null&&(D=Ha(w,T),D!=null&&P.push(Za(w,D,A)))),N)break;w=w.return}0<P.length&&(m=new y(m,I,null,n,h),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==yp&&(I=n.relatedTarget||n.fromElement)&&(Oi(I)||I[vr]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(I=n.relatedTarget||n.toElement,y=c,I=I?Oi(I):null,I!==null&&(N=cs(I),I!==N||I.tag!==5&&I.tag!==6)&&(I=null)):(y=null,I=c),y!==I)){if(P=Gv,D="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=Qv,D="onPointerLeave",T="onPointerEnter",w="pointer"),N=y==null?m:Ds(y),A=I==null?m:Ds(I),m=new P(D,w+"leave",y,n,h),m.target=N,m.relatedTarget=A,D=null,Oi(h)===c&&(P=new P(T,w+"enter",I,n,h),P.target=A,P.relatedTarget=N,D=P),N=D,y&&I)t:{for(P=y,T=I,w=0,A=P;A;A=Is(A))w++;for(A=0,D=T;D;D=Is(D))A++;for(;0<w-A;)P=Is(P),w--;for(;0<A-w;)T=Is(T),A--;for(;w--;){if(P===T||T!==null&&P===T.alternate)break t;P=Is(P),T=Is(T)}P=null}else P=null;y!==null&&ow(f,m,y,P,!1),I!==null&&N!==null&&ow(f,N,I,P,!0)}}e:{if(m=c?Ds(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var O=nx;else if(Jv(m))if(tI)O=ox;else{O=ix;var j=rx}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=sx);if(O&&(O=O(t,c))){eI(f,O,n,h);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&fp(m,"number",m.value)}switch(j=c?Ds(c):window,t){case"focusin":(Jv(j)||j.contentEditable==="true")&&(bs=j,Cp=c,ka=null);break;case"focusout":ka=Cp=bs=null;break;case"mousedown":Rp=!0;break;case"contextmenu":case"mouseup":case"dragend":Rp=!1,rw(f,n,h);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":rw(f,n,h)}var E;if(lg)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else xs?JT(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(XT&&n.locale!=="ko"&&(xs||v!=="onCompositionStart"?v==="onCompositionEnd"&&xs&&(E=YT()):(qr=h,sg="value"in qr?qr.value:qr.textContent,xs=!0)),j=Ac(c,v),0<j.length&&(v=new Kv(v,t,null,n,h),f.push({event:v,listeners:j}),E?v.data=E:(E=ZT(n),E!==null&&(v.data=E)))),(E=XN?JN(t,n):ZN(t,n))&&(c=Ac(c,"onBeforeInput"),0<c.length&&(h=new Kv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}hI(f,e)})}function Za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ac(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ha(t,n),s!=null&&r.unshift(Za(t,s,i)),s=Ha(t,e),s!=null&&r.push(Za(t,s,i))),t=t.return}return r}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ow(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ha(n,s),u!=null&&o.unshift(Za(n,u,a))):i||(u=Ha(n,s),u!=null&&o.push(Za(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fx=/\r\n?/g,px=/\u0000|\uFFFD/g;function aw(t){return(typeof t=="string"?t:""+t).replace(fx,`
`).replace(px,"")}function Ou(t,e,n){if(e=aw(e),aw(t)!==e&&n)throw Error(U(425))}function kc(){}var Ap=null,kp=null;function Pp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Np=typeof setTimeout=="function"?setTimeout:void 0,mx=typeof clearTimeout=="function"?clearTimeout:void 0,lw=typeof Promise=="function"?Promise:void 0,gx=typeof queueMicrotask=="function"?queueMicrotask:typeof lw<"u"?function(t){return lw.resolve(null).then(t).catch(_x)}:Np;function _x(t){setTimeout(function(){throw t})}function If(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qa(e)}function Zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function uw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Po=Math.random().toString(36).slice(2),jn="__reactFiber$"+Po,el="__reactProps$"+Po,vr="__reactContainer$"+Po,xp="__reactEvents$"+Po,yx="__reactListeners$"+Po,vx="__reactHandles$"+Po;function Oi(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vr]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=uw(t);t!==null;){if(n=t[jn])return n;t=uw(t)}return e}t=n,n=t.parentNode}return null}function bl(t){return t=t[jn]||t[vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Ah(t){return t[el]||null}var bp=[],Ls=-1;function _i(t){return{current:t}}function ke(t){0>Ls||(t.current=bp[Ls],bp[Ls]=null,Ls--)}function Se(t,e){Ls++,bp[Ls]=t.current,t.current=e}var ui={},At=_i(ui),$t=_i(!1),$i=ui;function no(t,e){var n=t.type.contextTypes;if(!n)return ui;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function Pc(){ke($t),ke(At)}function cw(t,e,n){if(At.current!==ui)throw Error(U(168));Se(At,e),Se($t,n)}function fI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,rN(t)||"Unknown",i));return be({},n,r)}function Nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ui,$i=At.current,Se(At,t),Se($t,$t.current),!0}function hw(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=fI(t,e,$i),r.__reactInternalMemoizedMergedChildContext=t,ke($t),ke(At),Se(At,t)):ke($t),Se($t,n)}var ir=null,kh=!1,Sf=!1;function pI(t){ir===null?ir=[t]:ir.push(t)}function wx(t){kh=!0,pI(t)}function yi(){if(!Sf&&ir!==null){Sf=!0;var t=0,e=_e;try{var n=ir;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ir=null,kh=!1}catch(i){throw ir!==null&&(ir=ir.slice(t+1)),jT(tg,yi),i}finally{_e=e,Sf=!1}}return null}var Ms=[],Vs=0,xc=null,bc=0,un=[],cn=0,qi=null,or=1,ar="";function Pi(t,e){Ms[Vs++]=bc,Ms[Vs++]=xc,xc=t,bc=e}function mI(t,e,n){un[cn++]=or,un[cn++]=ar,un[cn++]=qi,qi=t;var r=or;t=ar;var i=32-kn(r)-1;r&=~(1<<i),n+=1;var s=32-kn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,or=1<<32-kn(e)+i|n<<i|r,ar=s+t}else or=1<<s|n<<i|r,ar=t}function cg(t){t.return!==null&&(Pi(t,1),mI(t,1,0))}function hg(t){for(;t===xc;)xc=Ms[--Vs],Ms[Vs]=null,bc=Ms[--Vs],Ms[Vs]=null;for(;t===qi;)qi=un[--cn],un[cn]=null,ar=un[--cn],un[cn]=null,or=un[--cn],un[cn]=null}var nn=null,en=null,Pe=!1,Sn=null;function gI(t,e){var n=hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nn=t,en=Zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nn=t,en=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qi!==null?{id:or,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nn=t,en=null,!0):!1;default:return!1}}function Op(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dp(t){if(Pe){var e=en;if(e){var n=e;if(!dw(t,e)){if(Op(t))throw Error(U(418));e=Zr(n.nextSibling);var r=nn;e&&dw(t,e)?gI(r,n):(t.flags=t.flags&-4097|2,Pe=!1,nn=t)}}else{if(Op(t))throw Error(U(418));t.flags=t.flags&-4097|2,Pe=!1,nn=t}}}function fw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function Du(t){if(t!==nn)return!1;if(!Pe)return fw(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pp(t.type,t.memoizedProps)),e&&(e=en)){if(Op(t))throw _I(),Error(U(418));for(;e;)gI(t,e),e=Zr(e.nextSibling)}if(fw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){en=Zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}en=null}}else en=nn?Zr(t.stateNode.nextSibling):null;return!0}function _I(){for(var t=en;t;)t=Zr(t.nextSibling)}function ro(){en=nn=null,Pe=!1}function dg(t){Sn===null?Sn=[t]:Sn.push(t)}var Ex=kr.ReactCurrentBatchConfig;function sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Lu(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pw(t){var e=t._init;return e(t._payload)}function yI(t){function e(T,w){if(t){var A=T.deletions;A===null?(T.deletions=[w],T.flags|=16):A.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function i(T,w){return T=ri(T,w),T.index=0,T.sibling=null,T}function s(T,w,A){return T.index=A,t?(A=T.alternate,A!==null?(A=A.index,A<w?(T.flags|=2,w):A):(T.flags|=2,w)):(T.flags|=1048576,w)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,w,A,D){return w===null||w.tag!==6?(w=xf(A,T.mode,D),w.return=T,w):(w=i(w,A),w.return=T,w)}function u(T,w,A,D){var O=A.type;return O===Ns?h(T,w,A.props.children,D,A.key):w!==null&&(w.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Fr&&pw(O)===w.type)?(D=i(w,A.props),D.ref=sa(T,w,A),D.return=T,D):(D=lc(A.type,A.key,A.props,null,T.mode,D),D.ref=sa(T,w,A),D.return=T,D)}function c(T,w,A,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=bf(A,T.mode,D),w.return=T,w):(w=i(w,A.children||[]),w.return=T,w)}function h(T,w,A,D,O){return w===null||w.tag!==7?(w=Bi(A,T.mode,D,O),w.return=T,w):(w=i(w,A),w.return=T,w)}function f(T,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=xf(""+w,T.mode,A),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Su:return A=lc(w.type,w.key,w.props,null,T.mode,A),A.ref=sa(T,null,w),A.return=T,A;case Ps:return w=bf(w,T.mode,A),w.return=T,w;case Fr:var D=w._init;return f(T,D(w._payload),A)}if(ma(w)||ea(w))return w=Bi(w,T.mode,A,null),w.return=T,w;Lu(T,w)}return null}function m(T,w,A,D){var O=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return O!==null?null:a(T,w,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Su:return A.key===O?u(T,w,A,D):null;case Ps:return A.key===O?c(T,w,A,D):null;case Fr:return O=A._init,m(T,w,O(A._payload),D)}if(ma(A)||ea(A))return O!==null?null:h(T,w,A,D,null);Lu(T,A)}return null}function y(T,w,A,D,O){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(A)||null,a(w,T,""+D,O);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Su:return T=T.get(D.key===null?A:D.key)||null,u(w,T,D,O);case Ps:return T=T.get(D.key===null?A:D.key)||null,c(w,T,D,O);case Fr:var j=D._init;return y(T,w,A,j(D._payload),O)}if(ma(D)||ea(D))return T=T.get(A)||null,h(w,T,D,O,null);Lu(w,D)}return null}function I(T,w,A,D){for(var O=null,j=null,E=w,v=w=0,S=null;E!==null&&v<A.length;v++){E.index>v?(S=E,E=null):S=E.sibling;var R=m(T,E,A[v],D);if(R===null){E===null&&(E=S);break}t&&E&&R.alternate===null&&e(T,E),w=s(R,w,v),j===null?O=R:j.sibling=R,j=R,E=S}if(v===A.length)return n(T,E),Pe&&Pi(T,v),O;if(E===null){for(;v<A.length;v++)E=f(T,A[v],D),E!==null&&(w=s(E,w,v),j===null?O=E:j.sibling=E,j=E);return Pe&&Pi(T,v),O}for(E=r(T,E);v<A.length;v++)S=y(E,T,v,A[v],D),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),w=s(S,w,v),j===null?O=S:j.sibling=S,j=S);return t&&E.forEach(function(k){return e(T,k)}),Pe&&Pi(T,v),O}function P(T,w,A,D){var O=ea(A);if(typeof O!="function")throw Error(U(150));if(A=O.call(A),A==null)throw Error(U(151));for(var j=O=null,E=w,v=w=0,S=null,R=A.next();E!==null&&!R.done;v++,R=A.next()){E.index>v?(S=E,E=null):S=E.sibling;var k=m(T,E,R.value,D);if(k===null){E===null&&(E=S);break}t&&E&&k.alternate===null&&e(T,E),w=s(k,w,v),j===null?O=k:j.sibling=k,j=k,E=S}if(R.done)return n(T,E),Pe&&Pi(T,v),O;if(E===null){for(;!R.done;v++,R=A.next())R=f(T,R.value,D),R!==null&&(w=s(R,w,v),j===null?O=R:j.sibling=R,j=R);return Pe&&Pi(T,v),O}for(E=r(T,E);!R.done;v++,R=A.next())R=y(E,T,v,R.value,D),R!==null&&(t&&R.alternate!==null&&E.delete(R.key===null?v:R.key),w=s(R,w,v),j===null?O=R:j.sibling=R,j=R);return t&&E.forEach(function(x){return e(T,x)}),Pe&&Pi(T,v),O}function N(T,w,A,D){if(typeof A=="object"&&A!==null&&A.type===Ns&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Su:e:{for(var O=A.key,j=w;j!==null;){if(j.key===O){if(O=A.type,O===Ns){if(j.tag===7){n(T,j.sibling),w=i(j,A.props.children),w.return=T,T=w;break e}}else if(j.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Fr&&pw(O)===j.type){n(T,j.sibling),w=i(j,A.props),w.ref=sa(T,j,A),w.return=T,T=w;break e}n(T,j);break}else e(T,j);j=j.sibling}A.type===Ns?(w=Bi(A.props.children,T.mode,D,A.key),w.return=T,T=w):(D=lc(A.type,A.key,A.props,null,T.mode,D),D.ref=sa(T,w,A),D.return=T,T=D)}return o(T);case Ps:e:{for(j=A.key;w!==null;){if(w.key===j)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(T,w.sibling),w=i(w,A.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=bf(A,T.mode,D),w.return=T,T=w}return o(T);case Fr:return j=A._init,N(T,w,j(A._payload),D)}if(ma(A))return I(T,w,A,D);if(ea(A))return P(T,w,A,D);Lu(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(T,w.sibling),w=i(w,A),w.return=T,T=w):(n(T,w),w=xf(A,T.mode,D),w.return=T,T=w),o(T)):n(T,w)}return N}var io=yI(!0),vI=yI(!1),Oc=_i(null),Dc=null,Fs=null,fg=null;function pg(){fg=Fs=Dc=null}function mg(t){var e=Oc.current;ke(Oc),t._currentValue=e}function Lp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){Dc=t,fg=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function pn(t){var e=t._currentValue;if(fg!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Dc===null)throw Error(U(308));Fs=t,Dc.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Di=null;function gg(t){Di===null?Di=[t]:Di.push(t)}function wI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gg(e)):(n.next=i.next,i.next=n),e.interleaved=n,wr(t,r)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jr=!1;function _g(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function EI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ei(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wr(t,n)}return i=r.interleaved,i===null?(e.next=e,gg(r)):(e.next=i.next,i.next=e),r.interleaved=e,wr(t,n)}function nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ng(t,n)}}function mw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lc(t,e,n,r){var i=t.updateQueue;jr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,P=a;switch(m=e,y=n,P.tag){case 1:if(I=P.payload,typeof I=="function"){f=I.call(y,f,m);break e}f=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=P.payload,m=typeof I=="function"?I.call(y,f,m):I,m==null)break e;f=be({},f,m);break e;case 2:jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=f):h=h.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gi|=o,t.lanes=o,t.memoizedState=f}}function gw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Ol={},Bn=_i(Ol),tl=_i(Ol),nl=_i(Ol);function Li(t){if(t===Ol)throw Error(U(174));return t}function yg(t,e){switch(Se(nl,e),Se(tl,t),Se(Bn,Ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mp(e,t)}ke(Bn),Se(Bn,e)}function so(){ke(Bn),ke(tl),ke(nl)}function TI(t){Li(nl.current);var e=Li(Bn.current),n=mp(e,t.type);e!==n&&(Se(tl,t),Se(Bn,n))}function vg(t){tl.current===t&&(ke(Bn),ke(tl))}var Ne=_i(0);function Mc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cf=[];function wg(){for(var t=0;t<Cf.length;t++)Cf[t]._workInProgressVersionPrimary=null;Cf.length=0}var rc=kr.ReactCurrentDispatcher,Rf=kr.ReactCurrentBatchConfig,Hi=0,xe=null,Xe=null,rt=null,Vc=!1,Pa=!1,rl=0,Tx=0;function Et(){throw Error(U(321))}function Eg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function Tg(t,e,n,r,i,s){if(Hi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rc.current=t===null||t.memoizedState===null?Rx:Ax,t=n(r,i),Pa){s=0;do{if(Pa=!1,rl=0,25<=s)throw Error(U(301));s+=1,rt=Xe=null,e.updateQueue=null,rc.current=kx,t=n(r,i)}while(Pa)}if(rc.current=Fc,e=Xe!==null&&Xe.next!==null,Hi=0,rt=Xe=xe=null,Vc=!1,e)throw Error(U(300));return t}function Ig(){var t=rl!==0;return rl=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?xe.memoizedState=rt=t:rt=rt.next=t,rt}function mn(){if(Xe===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=rt===null?xe.memoizedState:rt.next;if(e!==null)rt=e,Xe=t;else{if(t===null)throw Error(U(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},rt===null?xe.memoizedState=rt=t:rt=rt.next=t}return rt}function il(t,e){return typeof e=="function"?e(t):e}function Af(t){var e=mn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Hi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,xe.lanes|=h,Gi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,On(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kf(t){var e=mn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);On(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function II(){}function SI(t,e){var n=xe,r=mn(),i=e(),s=!On(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,Sg(AI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,sl(9,RI.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(U(349));Hi&30||CI(n,e,i)}return i}function CI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function RI(t,e,n,r){e.value=n,e.getSnapshot=r,kI(e)&&PI(t)}function AI(t,e,n){return n(function(){kI(e)&&PI(t)})}function kI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function PI(t){var e=wr(t,1);e!==null&&Pn(e,t,1,-1)}function _w(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:t},e.queue=t,t=t.dispatch=Cx.bind(null,xe,t),[e.memoizedState,t]}function sl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function NI(){return mn().memoizedState}function ic(t,e,n,r){var i=Fn();xe.flags|=t,i.memoizedState=sl(1|e,n,void 0,r===void 0?null:r)}function Ph(t,e,n,r){var i=mn();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&Eg(r,o.deps)){i.memoizedState=sl(e,n,s,r);return}}xe.flags|=t,i.memoizedState=sl(1|e,n,s,r)}function yw(t,e){return ic(8390656,8,t,e)}function Sg(t,e){return Ph(2048,8,t,e)}function xI(t,e){return Ph(4,2,t,e)}function bI(t,e){return Ph(4,4,t,e)}function OI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function DI(t,e,n){return n=n!=null?n.concat([t]):null,Ph(4,4,OI.bind(null,e,t),n)}function Cg(){}function LI(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Eg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function MI(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Eg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function VI(t,e,n){return Hi&21?(On(n,e)||(n=zT(),xe.lanes|=n,Gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function Ix(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Rf.transition;Rf.transition={};try{t(!1),e()}finally{_e=n,Rf.transition=r}}function FI(){return mn().memoizedState}function Sx(t,e,n){var r=ni(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jI(t))UI(e,n);else if(n=wI(t,e,n,r),n!==null){var i=Lt();Pn(n,t,r,i),BI(n,e,r)}}function Cx(t,e,n){var r=ni(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jI(t))UI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,On(a,o)){var u=e.interleaved;u===null?(i.next=i,gg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=wI(t,e,i,r),n!==null&&(i=Lt(),Pn(n,t,r,i),BI(n,e,r))}}function jI(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function UI(t,e){Pa=Vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function BI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ng(t,n)}}var Fc={readContext:pn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},Rx={readContext:pn,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:pn,useEffect:yw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ic(4194308,4,OI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return ic(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Sx.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:_w,useDebugValue:Cg,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=_w(!1),e=t[0];return t=Ix.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=Fn();if(Pe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),ot===null)throw Error(U(349));Hi&30||CI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,yw(AI.bind(null,r,s,t),[t]),r.flags|=2048,sl(9,RI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Fn(),e=ot.identifierPrefix;if(Pe){var n=ar,r=or;n=(r&~(1<<32-kn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Tx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ax={readContext:pn,useCallback:LI,useContext:pn,useEffect:Sg,useImperativeHandle:DI,useInsertionEffect:xI,useLayoutEffect:bI,useMemo:MI,useReducer:Af,useRef:NI,useState:function(){return Af(il)},useDebugValue:Cg,useDeferredValue:function(t){var e=mn();return VI(e,Xe.memoizedState,t)},useTransition:function(){var t=Af(il)[0],e=mn().memoizedState;return[t,e]},useMutableSource:II,useSyncExternalStore:SI,useId:FI,unstable_isNewReconciler:!1},kx={readContext:pn,useCallback:LI,useContext:pn,useEffect:Sg,useImperativeHandle:DI,useInsertionEffect:xI,useLayoutEffect:bI,useMemo:MI,useReducer:kf,useRef:NI,useState:function(){return kf(il)},useDebugValue:Cg,useDeferredValue:function(t){var e=mn();return Xe===null?e.memoizedState=t:VI(e,Xe.memoizedState,t)},useTransition:function(){var t=kf(il)[0],e=mn().memoizedState;return[t,e]},useMutableSource:II,useSyncExternalStore:SI,useId:FI,unstable_isNewReconciler:!1};function Tn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nh={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=ni(t),s=dr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,i),e!==null&&(Pn(e,t,i,r),nc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=ni(t),s=dr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,i),e!==null&&(Pn(e,t,i,r),nc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=ni(t),i=dr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ei(t,i,r),e!==null&&(Pn(e,t,r,n),nc(e,t,r))}};function vw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xa(n,r)||!Xa(i,s):!0}function zI(t,e,n){var r=!1,i=ui,s=e.contextType;return typeof s=="object"&&s!==null?s=pn(s):(i=qt(e)?$i:At.current,r=e.contextTypes,s=(r=r!=null)?no(t,i):ui),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ww(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nh.enqueueReplaceState(e,e.state,null)}function Vp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_g(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pn(s):(s=qt(e)?$i:At.current,i.context=no(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nh.enqueueReplaceState(i,i.state,null),Lc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",r=e;do n+=nN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Px=typeof WeakMap=="function"?WeakMap:Map;function WI(t,e,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Uc||(Uc=!0,Kp=r),Fp(t,e)},n}function $I(t,e,n){n=dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fp(t,e),typeof r!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ew(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Px;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Wx.bind(null,t,e,n),e.then(t,t))}function Tw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Iw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dr(-1,1),e.tag=2,ei(n,e,1))),n.lanes|=1),t)}var Nx=kr.ReactCurrentOwner,zt=!1;function Ot(t,e,n,r){e.child=t===null?vI(e,null,n,r):io(e,t.child,n,r)}function Sw(t,e,n,r,i){n=n.render;var s=e.ref;return Gs(e,i),r=Tg(t,e,n,r,s,i),n=Ig(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Pe&&n&&cg(e),e.flags|=1,Ot(t,e,r,i),e.child)}function Cw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Og(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,qI(t,e,s,r,i)):(t=lc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(o,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=ri(s,r),t.ref=e.ref,t.return=e,e.child=t}function qI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xa(s,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,Er(t,e,i)}return jp(t,e,n,r,i)}function HI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Us,Zt),Zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(Us,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(Us,Zt),Zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Se(Us,Zt),Zt|=r;return Ot(t,e,i,n),e.child}function GI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jp(t,e,n,r,i){var s=qt(n)?$i:At.current;return s=no(e,s),Gs(e,i),n=Tg(t,e,n,r,s,i),r=Ig(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Pe&&r&&cg(e),e.flags|=1,Ot(t,e,n,i),e.child)}function Rw(t,e,n,r,i){if(qt(n)){var s=!0;Nc(e)}else s=!1;if(Gs(e,i),e.stateNode===null)sc(t,e),zI(e,n,r),Vp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pn(c):(c=qt(n)?$i:At.current,c=no(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&ww(e,o,r,c),jr=!1;var m=e.memoizedState;o.state=m,Lc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||$t.current||jr?(typeof h=="function"&&(Mp(e,n,h,r),u=e.memoizedState),(a=jr||vw(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,EI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Tn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=pn(u):(u=qt(n)?$i:At.current,u=no(e,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&ww(e,o,r,u),jr=!1,m=e.memoizedState,o.state=m,Lc(e,r,o,i);var I=e.memoizedState;a!==f||m!==I||$t.current||jr?(typeof y=="function"&&(Mp(e,n,y,r),I=e.memoizedState),(c=jr||vw(e,n,c,r,m,I,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Up(t,e,n,r,s,i)}function Up(t,e,n,r,i,s){GI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hw(e,n,!1),Er(t,e,s);r=e.stateNode,Nx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=io(e,t.child,null,s),e.child=io(e,null,a,s)):Ot(t,e,a,s),e.memoizedState=r.state,i&&hw(e,n,!0),e.child}function KI(t){var e=t.stateNode;e.pendingContext?cw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cw(t,e.context,!1),yg(t,e.containerInfo)}function Aw(t,e,n,r,i){return ro(),dg(i),e.flags|=256,Ot(t,e,n,r),e.child}var Bp={dehydrated:null,treeContext:null,retryLane:0};function zp(t){return{baseLanes:t,cachePool:null,transitions:null}}function QI(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Ne,i&1),t===null)return Dp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oh(o,r,0,null),t=Bi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zp(n),e.memoizedState=Bp,t):Rg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return xx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ri(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ri(a,s):(s=Bi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bp,r}return s=t.child,t=s.sibling,r=ri(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rg(t,e){return e=Oh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mu(t,e,n,r){return r!==null&&dg(r),io(e,t.child,null,n),t=Rg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pf(Error(U(422))),Mu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Oh({mode:"visible",children:r.children},i,0,null),s=Bi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&io(e,t.child,null,o),e.child.memoizedState=zp(o),e.memoizedState=Bp,s);if(!(e.mode&1))return Mu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=Pf(s,r,void 0),Mu(t,e,o,r)}if(a=(o&t.childLanes)!==0,zt||a){if(r=ot,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wr(t,i),Pn(r,t,i,-1))}return bg(),r=Pf(Error(U(421))),Mu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$x.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,en=Zr(i.nextSibling),nn=e,Pe=!0,Sn=null,t!==null&&(un[cn++]=or,un[cn++]=ar,un[cn++]=qi,or=t.id,ar=t.overflow,qi=e),e=Rg(e,r.children),e.flags|=4096,e)}function kw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lp(t.return,e,n)}function Nf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function YI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ot(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kw(t,n,e);else if(t.tag===19)kw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Mc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Mc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nf(e,!0,n,null,s);break;case"together":Nf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=ri(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ri(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bx(t,e,n){switch(e.tag){case 3:KI(e),ro();break;case 5:TI(e);break;case 1:qt(e.type)&&Nc(e);break;case 4:yg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(Oc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?QI(t,e,n):(Se(Ne,Ne.current&1),t=Er(t,e,n),t!==null?t.sibling:null);Se(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return YI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,HI(t,e,n)}return Er(t,e,n)}var XI,Wp,JI,ZI;XI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wp=function(){};JI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Li(Bn.current);var s=null;switch(n){case"input":i=hp(t,i),r=hp(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=pp(t,i),r=pp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kc)}gp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($a.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($a.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Re("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ZI=function(t,e,n,r){n!==r&&(e.flags|=4)};function oa(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ox(t,e,n){var r=e.pendingProps;switch(hg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return qt(e.type)&&Pc(),Tt(e),null;case 3:return r=e.stateNode,so(),ke($t),ke(At),wg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Du(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Sn!==null&&(Xp(Sn),Sn=null))),Wp(t,e),Tt(e),null;case 5:vg(e);var i=Li(nl.current);if(n=e.type,t!==null&&e.stateNode!=null)JI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Tt(e),null}if(t=Li(Bn.current),Du(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jn]=e,r[el]=s,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<_a.length;i++)Re(_a[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":Vv(r,s),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Re("invalid",r);break;case"textarea":jv(r,s),Re("invalid",r)}gp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ou(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ou(r.textContent,a,t),i=["children",""+a]):$a.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":Cu(r),Fv(r,s,!0);break;case"textarea":Cu(r),Uv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=AT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jn]=e,t[el]=r,XI(t,e,!1,!1),e.stateNode=t;e:{switch(o=_p(n,r),n){case"dialog":Re("cancel",t),Re("close",t),i=r;break;case"iframe":case"object":case"embed":Re("load",t),i=r;break;case"video":case"audio":for(i=0;i<_a.length;i++)Re(_a[i],t);i=r;break;case"source":Re("error",t),i=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),i=r;break;case"details":Re("toggle",t),i=r;break;case"input":Vv(t,r),i=hp(t,r),Re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Re("invalid",t);break;case"textarea":jv(t,r),i=pp(t,r),Re("invalid",t);break;default:i=r}gp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?NT(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kT(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&qa(t,u):typeof u=="number"&&qa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($a.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Re("scroll",t):u!=null&&Ym(t,s,u,o))}switch(n){case"input":Cu(t),Fv(t,r,!1);break;case"textarea":Cu(t),Uv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+li(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ws(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=kc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tt(e),null;case 6:if(t&&e.stateNode!=null)ZI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Li(nl.current),Li(Bn.current),Du(e)){if(r=e.stateNode,n=e.memoizedProps,r[jn]=e,(s=r.nodeValue!==n)&&(t=nn,t!==null))switch(t.tag){case 3:Ou(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ou(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jn]=e,e.stateNode=r}return Tt(e),null;case 13:if(ke(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&en!==null&&e.mode&1&&!(e.flags&128))_I(),ro(),e.flags|=98560,s=!1;else if(s=Du(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[jn]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tt(e),s=!1}else Sn!==null&&(Xp(Sn),Sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?et===0&&(et=3):bg())),e.updateQueue!==null&&(e.flags|=4),Tt(e),null);case 4:return so(),Wp(t,e),t===null&&Ja(e.stateNode.containerInfo),Tt(e),null;case 10:return mg(e.type._context),Tt(e),null;case 17:return qt(e.type)&&Pc(),Tt(e),null;case 19:if(ke(Ne),s=e.memoizedState,s===null)return Tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)oa(s,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Mc(t),o!==null){for(e.flags|=128,oa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>ao&&(e.flags|=128,r=!0,oa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Mc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return Tt(e),null}else 2*Fe()-s.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,r=!0,oa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Ne.current,Se(Ne,r?n&1|2:n&1),e):(Tt(e),null);case 22:case 23:return xg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function Dx(t,e){switch(hg(e),e.tag){case 1:return qt(e.type)&&Pc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),ke($t),ke(At),wg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vg(e),null;case 13:if(ke(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Ne),null;case 4:return so(),null;case 10:return mg(e.type._context),null;case 22:case 23:return xg(),null;case 24:return null;default:return null}}var Vu=!1,Ct=!1,Lx=typeof WeakSet=="function"?WeakSet:Set,q=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function $p(t,e,n){try{n()}catch(r){De(t,e,r)}}var Pw=!1;function Mx(t,e){if(Ap=Cc,t=iI(),ug(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kp={focusedElem:t,selectionRange:n},Cc=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var P=I.memoizedProps,N=I.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:Tn(e.type,P),N);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){De(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return I=Pw,Pw=!1,I}function Na(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$p(e,n,s)}i=i.next}while(i!==r)}}function xh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eS(t){var e=t.alternate;e!==null&&(t.alternate=null,eS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[el],delete e[xp],delete e[yx],delete e[vx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tS(t){return t.tag===5||t.tag===3||t.tag===4}function Nw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kc));else if(r!==4&&(t=t.child,t!==null))for(Hp(t,e,n),t=t.sibling;t!==null;)Hp(t,e,n),t=t.sibling}function Gp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gp(t,e,n),t=t.sibling;t!==null;)Gp(t,e,n),t=t.sibling}var ct=null,In=!1;function Lr(t,e,n){for(n=n.child;n!==null;)nS(t,e,n),n=n.sibling}function nS(t,e,n){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Ih,n)}catch{}switch(n.tag){case 5:Ct||js(n,e);case 6:var r=ct,i=In;ct=null,Lr(t,e,n),ct=r,In=i,ct!==null&&(In?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(In?(t=ct,n=n.stateNode,t.nodeType===8?If(t.parentNode,n):t.nodeType===1&&If(t,n),Qa(t)):If(ct,n.stateNode));break;case 4:r=ct,i=In,ct=n.stateNode.containerInfo,In=!0,Lr(t,e,n),ct=r,In=i;break;case 0:case 11:case 14:case 15:if(!Ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$p(n,e,o),i=i.next}while(i!==r)}Lr(t,e,n);break;case 1:if(!Ct&&(js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){De(n,e,a)}Lr(t,e,n);break;case 21:Lr(t,e,n);break;case 22:n.mode&1?(Ct=(r=Ct)||n.memoizedState!==null,Lr(t,e,n),Ct=r):Lr(t,e,n);break;default:Lr(t,e,n)}}function xw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Lx),e.forEach(function(r){var i=qx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,In=!1;break e;case 3:ct=a.stateNode.containerInfo,In=!0;break e;case 4:ct=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(ct===null)throw Error(U(160));nS(s,o,i),ct=null,In=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rS(e,t),e=e.sibling}function rS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Vn(t),r&4){try{Na(3,t,t.return),xh(3,t)}catch(P){De(t,t.return,P)}try{Na(5,t,t.return)}catch(P){De(t,t.return,P)}}break;case 1:wn(e,t),Vn(t),r&512&&n!==null&&js(n,n.return);break;case 5:if(wn(e,t),Vn(t),r&512&&n!==null&&js(n,n.return),t.flags&32){var i=t.stateNode;try{qa(i,"")}catch(P){De(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&CT(i,s),_p(a,o);var c=_p(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?NT(i,f):h==="dangerouslySetInnerHTML"?kT(i,f):h==="children"?qa(i,f):Ym(i,h,f,c)}switch(a){case"input":dp(i,s);break;case"textarea":RT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ws(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ws(i,!!s.multiple,s.defaultValue,!0):Ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[el]=s}catch(P){De(t,t.return,P)}}break;case 6:if(wn(e,t),Vn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){De(t,t.return,P)}}break;case 3:if(wn(e,t),Vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qa(e.containerInfo)}catch(P){De(t,t.return,P)}break;case 4:wn(e,t),Vn(t);break;case 13:wn(e,t),Vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pg=Fe())),r&4&&xw(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ct=(c=Ct)||h,wn(e,t),Ct=c):wn(e,t),Vn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(f=q=h;q!==null;){switch(m=q,y=m.child,m.tag){case 0:case 11:case 14:case 15:Na(4,m,m.return);break;case 1:js(m,m.return);var I=m.stateNode;if(typeof I.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(P){De(r,n,P)}}break;case 5:js(m,m.return);break;case 22:if(m.memoizedState!==null){Ow(f);continue}}y!==null?(y.return=m,q=y):Ow(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=PT("display",o))}catch(P){De(t,t.return,P)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){De(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:wn(e,t),Vn(t),r&4&&xw(t);break;case 21:break;default:wn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tS(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qa(i,""),r.flags&=-33);var s=Nw(t);Gp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Nw(t);Hp(t,a,o);break;default:throw Error(U(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vx(t,e,n){q=t,iS(t)}function iS(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ct;a=Vu;var c=Ct;if(Vu=o,(Ct=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Dw(i):u!==null?(u.return=o,q=u):Dw(i);for(;s!==null;)q=s,iS(s),s=s.sibling;q=i,Vu=a,Ct=c}bw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):bw(t)}}function bw(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ct||xh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Qa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ct||e.flags&512&&qp(e)}catch(m){De(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Ow(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Dw(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xh(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{qp(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{qp(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var Fx=Math.ceil,jc=kr.ReactCurrentDispatcher,Ag=kr.ReactCurrentOwner,fn=kr.ReactCurrentBatchConfig,de=0,ot=null,ze=null,dt=0,Zt=0,Us=_i(0),et=0,ol=null,Gi=0,bh=0,kg=0,xa=null,Ut=null,Pg=0,ao=1/0,nr=null,Uc=!1,Kp=null,ti=null,Fu=!1,Hr=null,Bc=0,ba=0,Qp=null,oc=-1,ac=0;function Lt(){return de&6?Fe():oc!==-1?oc:oc=Fe()}function ni(t){return t.mode&1?de&2&&dt!==0?dt&-dt:Ex.transition!==null?(ac===0&&(ac=zT()),ac):(t=_e,t!==0||(t=window.event,t=t===void 0?16:QT(t.type)),t):1}function Pn(t,e,n,r){if(50<ba)throw ba=0,Qp=null,Error(U(185));Nl(t,n,r),(!(de&2)||t!==ot)&&(t===ot&&(!(de&2)&&(bh|=n),et===4&&Br(t,dt)),Ht(t,r),n===1&&de===0&&!(e.mode&1)&&(ao=Fe()+500,kh&&yi()))}function Ht(t,e){var n=t.callbackNode;EN(t,e);var r=Sc(t,t===ot?dt:0);if(r===0)n!==null&&Wv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wv(n),e===1)t.tag===0?wx(Lw.bind(null,t)):pI(Lw.bind(null,t)),gx(function(){!(de&6)&&yi()}),n=null;else{switch(WT(r)){case 1:n=tg;break;case 4:n=UT;break;case 16:n=Ic;break;case 536870912:n=BT;break;default:n=Ic}n=dS(n,sS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sS(t,e){if(oc=-1,ac=0,de&6)throw Error(U(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var r=Sc(t,t===ot?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=zc(t,r);else{e=r;var i=de;de|=2;var s=aS();(ot!==t||dt!==e)&&(nr=null,ao=Fe()+500,Ui(t,e));do try{Bx();break}catch(a){oS(t,a)}while(!0);pg(),jc.current=s,de=i,ze!==null?e=0:(ot=null,dt=0,e=et)}if(e!==0){if(e===2&&(i=Tp(t),i!==0&&(r=i,e=Yp(t,i))),e===1)throw n=ol,Ui(t,0),Br(t,r),Ht(t,Fe()),n;if(e===6)Br(t,r);else{if(i=t.current.alternate,!(r&30)&&!jx(i)&&(e=zc(t,r),e===2&&(s=Tp(t),s!==0&&(r=s,e=Yp(t,s))),e===1))throw n=ol,Ui(t,0),Br(t,r),Ht(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Ni(t,Ut,nr);break;case 3:if(Br(t,r),(r&130023424)===r&&(e=Pg+500-Fe(),10<e)){if(Sc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Np(Ni.bind(null,t,Ut,nr),e);break}Ni(t,Ut,nr);break;case 4:if(Br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-kn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fx(r/1960))-r,10<r){t.timeoutHandle=Np(Ni.bind(null,t,Ut,nr),r);break}Ni(t,Ut,nr);break;case 5:Ni(t,Ut,nr);break;default:throw Error(U(329))}}}return Ht(t,Fe()),t.callbackNode===n?sS.bind(null,t):null}function Yp(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(Ui(t,e).flags|=256),t=zc(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&Xp(e)),t}function Xp(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function jx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!On(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Br(t,e){for(e&=~kg,e&=~bh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),r=1<<n;t[n]=-1,e&=~r}}function Lw(t){if(de&6)throw Error(U(327));Ks();var e=Sc(t,0);if(!(e&1))return Ht(t,Fe()),null;var n=zc(t,e);if(t.tag!==0&&n===2){var r=Tp(t);r!==0&&(e=r,n=Yp(t,r))}if(n===1)throw n=ol,Ui(t,0),Br(t,e),Ht(t,Fe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ni(t,Ut,nr),Ht(t,Fe()),null}function Ng(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(ao=Fe()+500,kh&&yi())}}function Ki(t){Hr!==null&&Hr.tag===0&&!(de&6)&&Ks();var e=de;de|=1;var n=fn.transition,r=_e;try{if(fn.transition=null,_e=1,t)return t()}finally{_e=r,fn.transition=n,de=e,!(de&6)&&yi()}}function xg(){Zt=Us.current,ke(Us)}function Ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mx(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(hg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pc();break;case 3:so(),ke($t),ke(At),wg();break;case 5:vg(r);break;case 4:so();break;case 13:ke(Ne);break;case 19:ke(Ne);break;case 10:mg(r.type._context);break;case 22:case 23:xg()}n=n.return}if(ot=t,ze=t=ri(t.current,null),dt=Zt=e,et=0,ol=null,kg=bh=Gi=0,Ut=xa=null,Di!==null){for(e=0;e<Di.length;e++)if(n=Di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Di=null}return t}function oS(t,e){do{var n=ze;try{if(pg(),rc.current=Fc,Vc){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vc=!1}if(Hi=0,rt=Xe=xe=null,Pa=!1,rl=0,Ag.current=null,n===null||n.return===null){et=1,ol=e,ze=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=dt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Tw(o);if(y!==null){y.flags&=-257,Iw(y,o,a,s,e),y.mode&1&&Ew(s,c,e),e=y,u=c;var I=e.updateQueue;if(I===null){var P=new Set;P.add(u),e.updateQueue=P}else I.add(u);break e}else{if(!(e&1)){Ew(s,c,e),bg();break e}u=Error(U(426))}}else if(Pe&&a.mode&1){var N=Tw(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Iw(N,o,a,s,e),dg(oo(u,a));break e}}s=u=oo(u,a),et!==4&&(et=2),xa===null?xa=[s]:xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=WI(s,u,e);mw(s,T);break e;case 1:a=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ti===null||!ti.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=$I(s,a,e);mw(s,D);break e}}s=s.return}while(s!==null)}uS(n)}catch(O){e=O,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function aS(){var t=jc.current;return jc.current=Fc,t===null?Fc:t}function bg(){(et===0||et===3||et===2)&&(et=4),ot===null||!(Gi&268435455)&&!(bh&268435455)||Br(ot,dt)}function zc(t,e){var n=de;de|=2;var r=aS();(ot!==t||dt!==e)&&(nr=null,Ui(t,e));do try{Ux();break}catch(i){oS(t,i)}while(!0);if(pg(),de=n,jc.current=r,ze!==null)throw Error(U(261));return ot=null,dt=0,et}function Ux(){for(;ze!==null;)lS(ze)}function Bx(){for(;ze!==null&&!dN();)lS(ze)}function lS(t){var e=hS(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?uS(t):ze=e,Ag.current=null}function uS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Dx(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,ze=null;return}}else if(n=Ox(n,e,Zt),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);et===0&&(et=5)}function Ni(t,e,n){var r=_e,i=fn.transition;try{fn.transition=null,_e=1,zx(t,e,n,r)}finally{fn.transition=i,_e=r}return null}function zx(t,e,n,r){do Ks();while(Hr!==null);if(de&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TN(t,s),t===ot&&(ze=ot=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fu||(Fu=!0,dS(Ic,function(){return Ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=fn.transition,fn.transition=null;var o=_e;_e=1;var a=de;de|=4,Ag.current=null,Mx(t,n),rS(n,t),lx(kp),Cc=!!Ap,kp=Ap=null,t.current=n,Vx(n),fN(),de=a,_e=o,fn.transition=s}else t.current=n;if(Fu&&(Fu=!1,Hr=t,Bc=i),s=t.pendingLanes,s===0&&(ti=null),gN(n.stateNode),Ht(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uc)throw Uc=!1,t=Kp,Kp=null,t;return Bc&1&&t.tag!==0&&Ks(),s=t.pendingLanes,s&1?t===Qp?ba++:(ba=0,Qp=t):ba=0,yi(),null}function Ks(){if(Hr!==null){var t=WT(Bc),e=fn.transition,n=_e;try{if(fn.transition=null,_e=16>t?16:t,Hr===null)var r=!1;else{if(t=Hr,Hr=null,Bc=0,de&6)throw Error(U(331));var i=de;for(de|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:Na(8,h,s)}var f=h.child;if(f!==null)f.return=h,q=f;else for(;q!==null;){h=q;var m=h.sibling,y=h.return;if(eS(h),h===c){q=null;break}if(m!==null){m.return=y,q=m;break}q=y}}}var I=s.alternate;if(I!==null){var P=I.child;if(P!==null){I.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,q=T;break e}q=s.return}}var w=t.current;for(q=w;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=w;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xh(9,a)}}catch(O){De(a,a.return,O)}if(a===o){q=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,q=D;break e}q=a.return}}if(de=i,yi(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Ih,t)}catch{}r=!0}return r}finally{_e=n,fn.transition=e}}return!1}function Mw(t,e,n){e=oo(n,e),e=WI(t,e,1),t=ei(t,e,1),e=Lt(),t!==null&&(Nl(t,1,e),Ht(t,e))}function De(t,e,n){if(t.tag===3)Mw(t,t,n);else for(;e!==null;){if(e.tag===3){Mw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ti===null||!ti.has(r))){t=oo(n,t),t=$I(e,t,1),e=ei(e,t,1),t=Lt(),e!==null&&(Nl(e,1,t),Ht(e,t));break}}e=e.return}}function Wx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(dt&n)===n&&(et===4||et===3&&(dt&130023424)===dt&&500>Fe()-Pg?Ui(t,0):kg|=n),Ht(t,e)}function cS(t,e){e===0&&(t.mode&1?(e=ku,ku<<=1,!(ku&130023424)&&(ku=4194304)):e=1);var n=Lt();t=wr(t,e),t!==null&&(Nl(t,e,n),Ht(t,n))}function $x(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cS(t,n)}function qx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),cS(t,n)}var hS;hS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,bx(t,e,n);zt=!!(t.flags&131072)}else zt=!1,Pe&&e.flags&1048576&&mI(e,bc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sc(t,e),t=e.pendingProps;var i=no(e,At.current);Gs(e,n),i=Tg(null,e,r,t,i,n);var s=Ig();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,Nc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_g(e),i.updater=Nh,e.stateNode=i,i._reactInternals=e,Vp(e,r,t,n),e=Up(null,e,r,!0,s,n)):(e.tag=0,Pe&&s&&cg(e),Ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Gx(r),t=Tn(r,t),i){case 0:e=jp(null,e,r,t,n);break e;case 1:e=Rw(null,e,r,t,n);break e;case 11:e=Sw(null,e,r,t,n);break e;case 14:e=Cw(null,e,r,Tn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),jp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),Rw(t,e,r,i,n);case 3:e:{if(KI(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,EI(t,e),Lc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=oo(Error(U(423)),e),e=Aw(t,e,r,n,i);break e}else if(r!==i){i=oo(Error(U(424)),e),e=Aw(t,e,r,n,i);break e}else for(en=Zr(e.stateNode.containerInfo.firstChild),nn=e,Pe=!0,Sn=null,n=vI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),r===i){e=Er(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return TI(e),t===null&&Dp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pp(r,i)?o=null:s!==null&&Pp(r,s)&&(e.flags|=32),GI(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&Dp(e),null;case 13:return QI(t,e,n);case 4:return yg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=io(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),Sw(t,e,r,i,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(Oc,r._currentValue),r._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===i.children&&!$t.current){e=Er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=dr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Lp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gs(e,n),i=pn(i),r=r(i),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,i=Tn(r,e.pendingProps),i=Tn(r.type,i),Cw(t,e,r,i,n);case 15:return qI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),sc(t,e),e.tag=1,qt(r)?(t=!0,Nc(e)):t=!1,Gs(e,n),zI(e,r,i),Vp(e,r,i,n),Up(null,e,r,!0,t,n);case 19:return YI(t,e,n);case 22:return HI(t,e,n)}throw Error(U(156,e.tag))};function dS(t,e){return jT(t,e)}function Hx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(t,e,n,r){return new Hx(t,e,n,r)}function Og(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gx(t){if(typeof t=="function")return Og(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jm)return 11;if(t===Zm)return 14}return 2}function ri(t,e){var n=t.alternate;return n===null?(n=hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Og(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Bi(n.children,i,s,e);case Xm:o=8,i|=8;break;case ap:return t=hn(12,n,e,i|2),t.elementType=ap,t.lanes=s,t;case lp:return t=hn(13,n,e,i),t.elementType=lp,t.lanes=s,t;case up:return t=hn(19,n,e,i),t.elementType=up,t.lanes=s,t;case TT:return Oh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wT:o=10;break e;case ET:o=9;break e;case Jm:o=11;break e;case Zm:o=14;break e;case Fr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=hn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Bi(t,e,n,r){return t=hn(7,t,r,e),t.lanes=n,t}function Oh(t,e,n,r){return t=hn(22,t,r,e),t.elementType=TT,t.lanes=n,t.stateNode={isHidden:!1},t}function xf(t,e,n){return t=hn(6,t,null,e),t.lanes=n,t}function bf(t,e,n){return e=hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Kx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=df(0),this.expirationTimes=df(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=df(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dg(t,e,n,r,i,s,o,a,u){return t=new Kx(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_g(s),t}function Qx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fS(t){if(!t)return ui;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(qt(n))return fI(t,n,e)}return e}function pS(t,e,n,r,i,s,o,a,u){return t=Dg(n,r,!0,t,i,s,o,a,u),t.context=fS(null),n=t.current,r=Lt(),i=ni(n),s=dr(r,i),s.callback=e??null,ei(n,s,i),t.current.lanes=i,Nl(t,i,r),Ht(t,r),t}function Dh(t,e,n,r){var i=e.current,s=Lt(),o=ni(i);return n=fS(n),e.context===null?e.context=n:e.pendingContext=n,e=dr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ei(i,e,o),t!==null&&(Pn(t,i,o,s),nc(t,i,o)),o}function Wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lg(t,e){Vw(t,e),(t=t.alternate)&&Vw(t,e)}function Yx(){return null}var mS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mg(t){this._internalRoot=t}Lh.prototype.render=Mg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Dh(t,e,null,null)};Lh.prototype.unmount=Mg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ki(function(){Dh(null,t,null,null)}),e[vr]=null}};function Lh(t){this._internalRoot=t}Lh.prototype.unstable_scheduleHydration=function(t){if(t){var e=HT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ur.length&&e!==0&&e<Ur[n].priority;n++);Ur.splice(n,0,t),n===0&&KT(t)}};function Vg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fw(){}function Xx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Wc(o);s.call(c)}}var o=pS(e,r,t,0,null,!1,!1,"",Fw);return t._reactRootContainer=o,t[vr]=o.current,Ja(t.nodeType===8?t.parentNode:t),Ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Wc(u);a.call(c)}}var u=Dg(t,0,!1,null,null,!1,!1,"",Fw);return t._reactRootContainer=u,t[vr]=u.current,Ja(t.nodeType===8?t.parentNode:t),Ki(function(){Dh(e,u,n,r)}),u}function Vh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Wc(o);a.call(u)}}Dh(e,o,t,i)}else o=Xx(n,e,t,i,r);return Wc(o)}$T=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(ng(e,n|1),Ht(e,Fe()),!(de&6)&&(ao=Fe()+500,yi()))}break;case 13:Ki(function(){var r=wr(t,1);if(r!==null){var i=Lt();Pn(r,t,1,i)}}),Lg(t,1)}};rg=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=Lt();Pn(e,t,134217728,n)}Lg(t,134217728)}};qT=function(t){if(t.tag===13){var e=ni(t),n=wr(t,e);if(n!==null){var r=Lt();Pn(n,t,e,r)}Lg(t,e)}};HT=function(){return _e};GT=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};vp=function(t,e,n){switch(e){case"input":if(dp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ah(r);if(!i)throw Error(U(90));ST(r),dp(r,i)}}}break;case"textarea":RT(t,n);break;case"select":e=n.value,e!=null&&Ws(t,!!n.multiple,e,!1)}};OT=Ng;DT=Ki;var Jx={usingClientEntryPoint:!1,Events:[bl,Ds,Ah,xT,bT,Ng]},aa={findFiberByHostInstance:Oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zx={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=VT(t),t===null?null:t.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||Yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{Ih=ju.inject(Zx),Un=ju}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jx;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vg(e))throw Error(U(200));return Qx(t,e,null,n)};an.createRoot=function(t,e){if(!Vg(t))throw Error(U(299));var n=!1,r="",i=mS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dg(t,1,!1,null,null,n,!1,r,i),t[vr]=e.current,Ja(t.nodeType===8?t.parentNode:t),new Mg(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=VT(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return Ki(t)};an.hydrate=function(t,e,n){if(!Mh(e))throw Error(U(200));return Vh(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!Vg(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pS(e,null,t,1,n??null,i,!1,s,o),t[vr]=e.current,Ja(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lh(e)};an.render=function(t,e,n){if(!Mh(e))throw Error(U(200));return Vh(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!Mh(t))throw Error(U(40));return t._reactRootContainer?(Ki(function(){Vh(null,null,t,!1,function(){t._reactRootContainer=null,t[vr]=null})}),!0):!1};an.unstable_batchedUpdates=Ng;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mh(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Vh(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function gS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gS)}catch(t){console.error(t)}}gS(),gT.exports=an;var e1=gT.exports,jw=e1;sp.createRoot=jw.createRoot,sp.hydrateRoot=jw.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},al.apply(this,arguments)}var Gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gr||(Gr={}));const Uw="popstate";function t1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Jp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_S(i)}return r1(e,n,null,t)}function $e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Fg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function n1(){return Math.random().toString(36).substr(2,8)}function Bw(t,e){return{usr:t.state,key:t.key,idx:e}}function Jp(t,e,n,r){return n===void 0&&(n=null),al({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?No(e):e,{state:n,key:e&&e.key||r||n1()})}function _S(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function No(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function r1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Gr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(al({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Gr.Pop;let N=h(),T=N==null?null:N-c;c=N,u&&u({action:a,location:P.location,delta:T})}function m(N,T){a=Gr.Push;let w=Jp(P.location,N,T);c=h()+1;let A=Bw(w,c),D=P.createHref(w);try{o.pushState(A,"",D)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(D)}s&&u&&u({action:a,location:P.location,delta:1})}function y(N,T){a=Gr.Replace;let w=Jp(P.location,N,T);c=h();let A=Bw(w,c),D=P.createHref(w);o.replaceState(A,"",D),s&&u&&u({action:a,location:P.location,delta:0})}function I(N){let T=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof N=="string"?N:_S(N);return w=w.replace(/ $/,"%20"),$e(T,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,T)}let P={get action(){return a},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Uw,f),u=N,()=>{i.removeEventListener(Uw,f),u=null}},createHref(N){return e(i,N)},createURL:I,encodeLocation(N){let T=I(N);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:y,go(N){return o.go(N)}};return P}var zw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zw||(zw={}));function i1(t,e,n){return n===void 0&&(n="/"),s1(t,e,n)}function s1(t,e,n,r){let i=typeof e=="string"?No(e):e,s=wS(i.pathname||"/",n);if(s==null)return null;let o=yS(t);o1(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=y1(s);a=m1(o[u],c)}return a}function yS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&($e(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=zi([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&($e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),yS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:f1(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of vS(s.path))i(s,o,u)}),e}function vS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=vS(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function o1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:p1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const a1=/^:[\w-]+$/,l1=3,u1=2,c1=1,h1=10,d1=-2,Ww=t=>t==="*";function f1(t,e){let n=t.split("/"),r=n.length;return n.some(Ww)&&(r+=d1),e&&(r+=u1),n.filter(i=>!Ww(i)).reduce((i,s)=>i+(a1.test(s)?l1:s===""?c1:h1),r)}function p1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function m1(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=g1({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:zi([s,f.pathname]),pathnameBase:I1(zi([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=zi([s,f.pathnameBase]))}return o}function g1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=_1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:y}=h;if(m==="*"){let P=a[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const I=a[f];return y&&!I?c[m]=void 0:c[m]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function _1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Fg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function y1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Fg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const v1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w1=t=>v1.test(t);function E1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?No(t):t,s;if(n)if(w1(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Fg(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=$w(n.substring(1),"/"):s=$w(n,e)}else s=e;return{pathname:s,search:S1(r),hash:C1(i)}}function $w(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Of(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function T1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ES(t,e){let n=T1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function TS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=No(t):(i=al({},t),$e(!i.pathname||!i.pathname.includes("?"),Of("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),Of("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),Of("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=E1(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const zi=t=>t.join("/").replace(/\/\/+/g,"/"),I1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),S1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,C1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function R1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const IS=["post","put","patch","delete"];new Set(IS);const A1=["get",...IS];new Set(A1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ll.apply(this,arguments)}const jg=M.createContext(null),k1=M.createContext(null),Dl=M.createContext(null),Fh=M.createContext(null),vi=M.createContext({outlet:null,matches:[],isDataRoute:!1}),SS=M.createContext(null);function Ll(){return M.useContext(Fh)!=null}function jh(){return Ll()||$e(!1),M.useContext(Fh).location}function CS(t){M.useContext(Dl).static||M.useLayoutEffect(t)}function Pr(){let{isDataRoute:t}=M.useContext(vi);return t?B1():P1()}function P1(){Ll()||$e(!1);let t=M.useContext(jg),{basename:e,future:n,navigator:r}=M.useContext(Dl),{matches:i}=M.useContext(vi),{pathname:s}=jh(),o=JSON.stringify(ES(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return CS(()=>{a.current=!0}),M.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=TS(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:zi([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function RS(){let{matches:t}=M.useContext(vi),e=t[t.length-1];return e?e.params:{}}function N1(t,e){return x1(t,e)}function x1(t,e,n,r){Ll()||$e(!1);let{navigator:i}=M.useContext(Dl),{matches:s}=M.useContext(vi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=jh(),h;if(e){var f;let N=typeof e=="string"?No(e):e;u==="/"||(f=N.pathname)!=null&&f.startsWith(u)||$e(!1),h=N}else h=c;let m=h.pathname||"/",y=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let I=i1(t,{pathname:y}),P=M1(I&&I.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:zi([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:zi([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&P?M.createElement(Fh.Provider,{value:{location:ll({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Gr.Pop}},P):P}function b1(){let t=U1(),e=R1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const O1=M.createElement(b1,null);class D1 extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(vi.Provider,{value:this.props.routeContext},M.createElement(SS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function L1(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(jg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(vi.Provider,{value:e},r)}function M1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||$e(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:y}=n,I=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||I){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let y,I=!1,P=null,N=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,P=f.route.errorElement||O1,u&&(c<0&&m===0?(z1("route-fallback"),I=!0,N=null):c===m&&(I=!0,N=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),w=()=>{let A;return y?A=P:I?A=N:f.route.Component?A=M.createElement(f.route.Component,null):f.route.element?A=f.route.element:A=h,M.createElement(L1,{match:f,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:A})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?M.createElement(D1,{location:n.location,revalidation:n.revalidation,component:P,error:y,children:w(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):w()},null)}var AS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(AS||{}),kS=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(kS||{});function V1(t){let e=M.useContext(jg);return e||$e(!1),e}function F1(t){let e=M.useContext(k1);return e||$e(!1),e}function j1(t){let e=M.useContext(vi);return e||$e(!1),e}function PS(t){let e=j1(),n=e.matches[e.matches.length-1];return n.route.id||$e(!1),n.route.id}function U1(){var t;let e=M.useContext(SS),n=F1(),r=PS();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function B1(){let{router:t}=V1(AS.UseNavigateStable),e=PS(kS.UseNavigateStable),n=M.useRef(!1);return CS(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ll({fromRouteId:e},s)))},[t,e])}const qw={};function z1(t,e,n){qw[t]||(qw[t]=!0)}function W1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Zp(t){let{to:e,replace:n,state:r,relative:i}=t;Ll()||$e(!1);let{future:s,static:o}=M.useContext(Dl),{matches:a}=M.useContext(vi),{pathname:u}=jh(),c=Pr(),h=TS(e,ES(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(h);return M.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function En(t){$e(!1)}function $1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gr.Pop,navigator:s,static:o=!1,future:a}=t;Ll()&&$e(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:s,static:o,future:ll({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=No(r));let{pathname:h="/",search:f="",hash:m="",state:y=null,key:I="default"}=r,P=M.useMemo(()=>{let N=wS(h,u);return N==null?null:{location:{pathname:N,search:f,hash:m,state:y,key:I},navigationType:i}},[u,h,f,m,y,I,i]);return P==null?null:M.createElement(Dl.Provider,{value:c},M.createElement(Fh.Provider,{children:n,value:P}))}function q1(t){let{children:e,location:n}=t;return N1(em(e),n)}new Promise(()=>{});function em(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,em(r.props.children,s));return}r.type!==En&&$e(!1),!r.props.index||!r.props.children||$e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=em(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const H1="6";try{window.__reactRouterVersion=H1}catch{}const G1="startTransition",Hw=WP[G1];function K1(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=t1({window:i,v5Compat:!0}));let o=s.current,[a,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=M.useCallback(f=>{c&&Hw?Hw(()=>u(f)):u(f)},[u,c]);return M.useLayoutEffect(()=>o.listen(h),[o,h]),M.useEffect(()=>W1(r),[r]),M.createElement($1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Gw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gw||(Gw={}));var Kw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Kw||(Kw={}));var Qw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw xo(e)},xo=function(t){return new Error("Firebase Database ("+NS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Q1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ug={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(n[h],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Q1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Y1;const m=s<<2|a>>4;if(r.push(m),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const I=c<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Y1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bS=function(t){const e=xS(t);return Ug.encodeByteArray(e,!0)},$c=function(t){return bS(t).replace(/\./g,"")},qc=function(t){try{return Ug.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t){return OS(void 0,t)}function OS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!J1(n)||(t[n]=OS(t[n],e[n]));return t}function J1(t){return t!=="__proto__"}/**
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
 */function Z1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eb=()=>Z1().__FIREBASE_DEFAULTS__,tb=()=>{if(typeof process>"u"||typeof Qw>"u")return;const t=Qw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qc(t[1]);return e&&JSON.parse(e)},Uh=()=>{try{return eb()||tb()||nb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},DS=t=>{var e,n;return(n=(e=Uh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LS=t=>{const e=DS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},MS=()=>{var t;return(t=Uh())===null||t===void 0?void 0:t.config},VS=t=>{var e;return(e=Uh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function FS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$c(JSON.stringify(n)),$c(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function rb(){var t;const e=(t=Uh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ib(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ob(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ab(){return NS.NODE_ADMIN===!0}function lb(){return!rb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function US(){try{return typeof indexedDB=="object"}catch{return!1}}function BS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ub(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cb,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qn(i,a,r)}}function hb(t,e){return t.replace(db,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const db=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t){return JSON.parse(t)}function Ze(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ul(qc(s[0])||""),n=ul(qc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},fb=function(t){const e=zS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pb=function(t){const e=zS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function lo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function tm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function uo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yw(s)&&Yw(o)){if(!uo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ya(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function va(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const m=(i<<5|i>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function gb(t,e){const n=new _b(t,e);return n.subscribe.bind(n)}class _b{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Df),i.error===void 0&&(i.error=Df),i.complete===void 0&&(i.complete=Df);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Df(){}function Bh(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ge(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xi="[DEFAULT]";/**
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
 */class wb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ml;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tb(e))try{this.getOrInitializeService({instanceIdentifier:xi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xi){return this.instances.has(e)}getOptions(e=xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Eb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xi){return this.component?this.component.multipleInstances?e:xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eb(t){return t===xi?void 0:t}function Tb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ib{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Sb={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Cb=ue.INFO,Rb={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Ab=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Rb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wh{constructor(e){this.name=e,this._logLevel=Cb,this._logHandler=Ab,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const kb=(t,e)=>e.some(n=>t instanceof n);let Xw,Jw;function Pb(){return Xw||(Xw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nb(){return Jw||(Jw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WS=new WeakMap,nm=new WeakMap,$S=new WeakMap,Lf=new WeakMap,zg=new WeakMap;function xb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&WS.set(n,t)}).catch(()=>{}),zg.set(e,t),e}function bb(t){if(nm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nm.set(t,e)}let rm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$S.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ob(t){rm=t(rm)}function Db(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mf(this),e,...n);return $S.set(r,e.sort?e.sort():[e]),fr(r)}:Nb().includes(t)?function(...e){return t.apply(Mf(this),e),fr(WS.get(this))}:function(...e){return fr(t.apply(Mf(this),e))}}function Lb(t){return typeof t=="function"?Db(t):(t instanceof IDBTransaction&&bb(t),kb(t,Pb())?new Proxy(t,rm):t)}function fr(t){if(t instanceof IDBRequest)return xb(t);if(Lf.has(t))return Lf.get(t);const e=Lb(t);return e!==t&&(Lf.set(t,e),zg.set(e,t)),e}const Mf=t=>zg.get(t);function $h(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(fr(o.result),u.oldVersion,u.newVersion,fr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function Vf(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),fr(n).then(()=>{})}const Mb=["get","getKey","getAll","getAllKeys","count"],Vb=["put","add","delete","clear"],Ff=new Map;function Zw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ff.get(e))return Ff.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Vb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Mb.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Ff.set(e,s),s}Ob(t=>({...t,get:(e,n,r)=>Zw(e,n)||t.get(e,n,r),has:(e,n)=>!!Zw(e,n)||t.has(e,n)}));/**
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
 */class Fb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const im="@firebase/app",eE="0.10.13";/**
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
 */const Tr=new Wh("@firebase/app"),Ub="@firebase/app-compat",Bb="@firebase/analytics-compat",zb="@firebase/analytics",Wb="@firebase/app-check-compat",$b="@firebase/app-check",qb="@firebase/auth",Hb="@firebase/auth-compat",Gb="@firebase/database",Kb="@firebase/data-connect",Qb="@firebase/database-compat",Yb="@firebase/functions",Xb="@firebase/functions-compat",Jb="@firebase/installations",Zb="@firebase/installations-compat",eO="@firebase/messaging",tO="@firebase/messaging-compat",nO="@firebase/performance",rO="@firebase/performance-compat",iO="@firebase/remote-config",sO="@firebase/remote-config-compat",oO="@firebase/storage",aO="@firebase/storage-compat",lO="@firebase/firestore",uO="@firebase/vertexai-preview",cO="@firebase/firestore-compat",hO="firebase",dO="10.14.1";/**
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
 */const sm="[DEFAULT]",fO={[im]:"fire-core",[Ub]:"fire-core-compat",[zb]:"fire-analytics",[Bb]:"fire-analytics-compat",[$b]:"fire-app-check",[Wb]:"fire-app-check-compat",[qb]:"fire-auth",[Hb]:"fire-auth-compat",[Gb]:"fire-rtdb",[Kb]:"fire-data-connect",[Qb]:"fire-rtdb-compat",[Yb]:"fire-fn",[Xb]:"fire-fn-compat",[Jb]:"fire-iid",[Zb]:"fire-iid-compat",[eO]:"fire-fcm",[tO]:"fire-fcm-compat",[nO]:"fire-perf",[rO]:"fire-perf-compat",[iO]:"fire-rc",[sO]:"fire-rc-compat",[oO]:"fire-gcs",[aO]:"fire-gcs-compat",[lO]:"fire-fst",[cO]:"fire-fst-compat",[uO]:"fire-vertex","fire-js":"fire-js",[hO]:"fire-js-all"};/**
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
 */const Gc=new Map,pO=new Map,om=new Map;function tE(t,e){try{t.container.addComponent(e)}catch(n){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(om.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;om.set(e,t);for(const n of Gc.values())tE(n,t);for(const n of pO.values())tE(n,t);return!0}function ds(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rn(t){return t.settings!==void 0}/**
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
 */const mO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ii=new hs("app","Firebase",mO);/**
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
 */class gO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=dO;function qS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ii.create("bad-app-name",{appName:String(i)});if(n||(n=MS()),!n)throw ii.create("no-options");const s=Gc.get(i);if(s){if(uo(n,s.options)&&uo(r,s.config))return s;throw ii.create("duplicate-app",{appName:i})}const o=new Ib(i);for(const u of om.values())o.addComponent(u);const a=new gO(n,r,o);return Gc.set(i,a),a}function qh(t=sm){const e=Gc.get(t);if(!e&&t===sm&&MS())return qS();if(!e)throw ii.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let i=(r=fO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(a.join(" "));return}Dn(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _O="firebase-heartbeat-database",yO=1,cl="firebase-heartbeat-store";let jf=null;function HS(){return jf||(jf=$h(_O,yO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(cl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ii.create("idb-open",{originalErrorMessage:t.message})})),jf}async function vO(t){try{const n=(await HS()).transaction(cl),r=await n.objectStore(cl).get(GS(t));return await n.done,r}catch(e){if(e instanceof Qn)Tr.warn(e.message);else{const n=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(n.message)}}}async function nE(t,e){try{const r=(await HS()).transaction(cl,"readwrite");await r.objectStore(cl).put(e,GS(t)),await r.done}catch(n){if(n instanceof Qn)Tr.warn(n.message);else{const r=ii.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tr.warn(r.message)}}}function GS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wO=1024,EO=30*24*60*60*1e3;class TO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rE();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=EO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rE(),{heartbeatsToSend:r,unsentEntries:i}=IO(this._heartbeatsCache.heartbeats),s=$c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Tr.warn(n),""}}}function rE(){return new Date().toISOString().substring(0,10)}function IO(t,e=wO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),iE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),iE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return US()?BS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function iE(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function CO(t){Dn(new gn("platform-logger",e=>new Fb(e),"PRIVATE")),Dn(new gn("heartbeat",e=>new TO(e),"PRIVATE")),Gt(im,eE,t),Gt(im,eE,"esm2017"),Gt("fire-js","")}CO("");function Wg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function KS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RO=KS,QS=new hs("auth","Firebase",KS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Wh("@firebase/auth");function AO(t,...e){Kc.logLevel<=ue.WARN&&Kc.warn(`Auth (${fs}): ${t}`,...e)}function uc(t,...e){Kc.logLevel<=ue.ERROR&&Kc.error(`Auth (${fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw qg(t,...e)}function Nn(t,...e){return qg(t,...e)}function $g(t,e,n){const r=Object.assign(Object.assign({},RO()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function pr(t){return $g(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kO(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&_n(t,"argument-error"),$g(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return QS.create(t,...e)}function X(t,e,...n){if(!t)throw qg(e,...n)}function lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uc(e),new Error(e)}function Ir(t,e){t||lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PO(){return sE()==="http:"||sE()==="https:"}function sE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PO()||sb()||"connection"in navigator)?navigator.onLine:!0}function xO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ir(n>e,"Short delay should be less than long delay!"),this.isMobile=Bg()||jS()}get(){return NO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e){Ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=new Vl(3e4,6e4);function wi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,i={}){return XS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=bo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return ib()||(c.referrerPolicy="no-referrer"),YS.fetch()(JS(t,t.config.apiHost,n,a),c)})}async function XS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bO),e);try{const i=new LO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Uu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Uu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Uu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $g(t,h,c);_n(t,h)}}catch(i){if(i instanceof Qn)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function Fl(t,e,n,r,i={}){const s=await Nr(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function JS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hg(t.config,i):`${t.config.apiScheme}://${i}`}function DO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),OO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Uu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nn(t,e,r);return i.customData._tokenResponse=n,i}function oE(t){return t!==void 0&&t.enterprise!==void 0}class MO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function VO(t,e){return Nr(t,"GET","/v2/recaptchaConfig",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function ZS(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jO(t,e=!1){const n=ge(t),r=await n.getIdToken(e),i=Gg(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oa(Uf(i.auth_time)),issuedAtTime:Oa(Uf(i.iat)),expirationTime:Oa(Uf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Uf(t){return Number(t)*1e3}function Gg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uc("JWT malformed, contained fewer than 3 sections"),null;try{const i=qc(n);return i?JSON.parse(i):(uc("Failed to decode base64 JWT payload"),null)}catch(i){return uc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aE(t){const e=Gg(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&UO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oa(this.lastLoginAt),this.creationTime=Oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await co(t,ZS(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?eC(s.providerUserInfo):[],a=WO(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function zO(t){const e=ge(t);await Qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function eC(t){return t.map(e=>{var{providerId:n}=e,r=Wg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $O(t,e){const n=await XS(t,{},async()=>{const r=bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=JS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",YS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qO(t,e){return Nr(t,"POST","/v2/accounts:revokeToken",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=aE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $O(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jO(this,e)}reload(){return zO(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await co(this,FO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:D,isAnonymous:O,providerData:j,stsTokenManager:E}=n;X(A&&E,e,"internal-error");const v=Qs.fromJSON(this.name,E);X(typeof A=="string",e,"internal-error"),Mr(f,e.name),Mr(m,e.name),X(typeof D=="boolean",e,"internal-error"),X(typeof O=="boolean",e,"internal-error"),Mr(y,e.name),Mr(I,e.name),Mr(P,e.name),Mr(N,e.name),Mr(T,e.name),Mr(w,e.name);const S=new ur({uid:A,auth:e,email:m,emailVerified:D,displayName:f,isAnonymous:O,photoURL:I,phoneNumber:y,tenantId:P,stsTokenManager:v,createdAt:T,lastLoginAt:w});return j&&Array.isArray(j)&&(S.providerData=j.map(R=>Object.assign({},R))),N&&(S._redirectEventId=N),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qs;i.updateFromServerResponse(n);const s=new ur({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?eC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Qs;a.updateFromIdToken(r);const u=new ur({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new lm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=new Map;function cr(t){Ir(t instanceof Function,"Expected a class definition");let e=lE.get(t);return e?(Ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lE.set(t,e),e)}/**
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
 */class tC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tC.type="NONE";const uE=tC;/**
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
 */function cc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cc(this.userKey,i.apiKey,s),this.fullPersistenceKey=cc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ys(cr(uE),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||cr(uE);const o=cc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=ur._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ys(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ys(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aC(e))return"Blackberry";if(lC(e))return"Webos";if(rC(e))return"Safari";if((e.includes("chrome/")||iC(e))&&!e.includes("edge/"))return"Chrome";if(oC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nC(t=kt()){return/firefox\//i.test(t)}function rC(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iC(t=kt()){return/crios\//i.test(t)}function sC(t=kt()){return/iemobile/i.test(t)}function oC(t=kt()){return/android/i.test(t)}function aC(t=kt()){return/blackberry/i.test(t)}function lC(t=kt()){return/webos/i.test(t)}function Kg(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HO(t=kt()){var e;return Kg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GO(){return ob()&&document.documentMode===10}function uC(t=kt()){return Kg(t)||oC(t)||lC(t)||aC(t)||/windows phone/i.test(t)||sC(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t,e=[]){let n;switch(t){case"Browser":n=cE(kt());break;case"Worker":n=`${cE(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
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
 */class KO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function QO(t,e={}){return Nr(t,"GET","/v2/passwordPolicy",wi(t,e))}/**
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
 */const YO=6;class XO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hE(this),this.idTokenSubscription=new hE(this),this.beforeStateQueue=new KO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=QS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ZS(this,{idToken:e}),r=await ur._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(pr(this));const n=e?ge(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QO(this),n=new XO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cr(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ys.create(this,[cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ei(t){return ge(t)}class hE{constructor(e){this.auth=e,this.observer=null,this.addObserver=gb(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZO(t){Hh=t}function hC(t){return Hh.loadJS(t)}function eD(){return Hh.recaptchaEnterpriseScript}function tD(){return Hh.gapiScript}function nD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rD="recaptcha-enterprise",iD="NO_RECAPTCHA";class sD{constructor(e){this.type=rD,this.auth=Ei(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{VO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new MO(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;oE(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(iD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&oE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=eD();u.length!==0&&(u+=a),hC(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function dE(t,e,n,r=!1){const i=new sD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function um(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await dE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await dE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(t,e){const n=ds(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(uo(s,e??{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function aD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lD(t,e,n){const r=Ei(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=dC(e),{host:o,port:a}=uD(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),cD()}function dC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uD(t){const e=dC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fE(o)}}}function fE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lr("not implemented")}_getIdTokenResponse(e){return lr("not implemented")}_linkToIdToken(e,n){return lr("not implemented")}_getReauthenticationResolver(e){return lr("not implemented")}}async function hD(t,e){return Nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(t,e){return Fl(t,"POST","/v1/accounts:signInWithPassword",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fD(t,e){return Fl(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}async function pD(t,e){return Fl(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Qg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return um(e,n,"signInWithPassword",dD);case"emailLink":return fD(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return um(e,r,"signUpPassword",hD);case"emailLink":return pD(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t,e){return Fl(t,"POST","/v1/accounts:signInWithIdp",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD="http://localhost";class Qi extends Qg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xs(e,n)}buildRequest(){const e={requestUri:mD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _D(t){const e=ya(va(t)).link,n=e?ya(va(e)).deep_link_id:null,r=ya(va(t)).deep_link_id;return(r?ya(va(r)).link:null)||r||n||e||t}class Yg{constructor(e){var n,r,i,s,o,a;const u=ya(va(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=gD((i=u.mode)!==null&&i!==void 0?i:null);X(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_D(e);try{return new Yg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.providerId=Oo.PROVIDER_ID}static credential(e,n){return hl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yg.parseLink(n);return X(r,"argument-error"),hl._fromEmailAndCode(e,r.code,r.tenantId)}}Oo.PROVIDER_ID="password";Oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jl extends Xg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends jl{constructor(){super("facebook.com")}static credential(e){return Qi._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends jl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends jl{constructor(){super("github.com")}static credential(e){return Qi._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch{return null}}}Wr.GITHUB_SIGN_IN_METHOD="github.com";Wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends jl{constructor(){super("twitter.com")}static credential(e,n){return Qi._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(t,e){return Fl(t,"POST","/v1/accounts:signUp",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ur._fromIdTokenResponse(e,r,i),o=pE(r);return new Yi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=pE(r);return new Yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function pE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends Qn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yc(e,n,r,i)}}function fC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yc._fromErrorAndOperation(t,s,e,r):s})}async function vD(t,e,n=!1){const r=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yi._forOperation(t,"link",r)}/**
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
 */async function wD(t,e,n=!1){const{auth:r}=t;if(Rn(r.app))return Promise.reject(pr(r));const i="reauthenticate";try{const s=await co(t,fC(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Gg(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Yi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e,n=!1){if(Rn(t.app))return Promise.reject(pr(t));const r="signIn",i=await fC(t,r,e),s=await Yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ED(t,e){return pC(Ei(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t){const e=Ei(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TD(t,e,n){if(Rn(t.app))return Promise.reject(pr(t));const r=Ei(t),o=await um(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yD).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&mC(t),u}),a=await Yi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function ID(t,e,n){return Rn(t.app)?Promise.reject(pr(t)):ED(ge(t),Oo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mC(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD(t,e){return Nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ge(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await co(r,SD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function RD(t,e,n,r){return ge(t).onIdTokenChanged(e,n,r)}function AD(t,e,n){return ge(t).beforeAuthStateChanged(e,n)}function kD(t,e,n,r){return ge(t).onAuthStateChanged(e,n,r)}function PD(t){return ge(t).signOut()}const Xc="__sak";/**
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
 */class gC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xc,"1"),this.storage.removeItem(Xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=1e3,xD=10;class _C extends gC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ND)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_C.type="LOCAL";const bD=_C;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC extends gC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yC.type="SESSION";const vC=yC;/**
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
 */function OD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await OD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class DD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Jg("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return window}function LD(t){zn().location.href=t}/**
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
 */function wC(){return typeof zn().WorkerGlobalScope<"u"&&typeof zn().importScripts=="function"}async function MD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FD(){return wC()?self:null}/**
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
 */const EC="firebaseLocalStorageDb",jD=1,Jc="firebaseLocalStorage",TC="fbase_key";class Ul{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kh(t,e){return t.transaction([Jc],e?"readwrite":"readonly").objectStore(Jc)}function UD(){const t=indexedDB.deleteDatabase(EC);return new Ul(t).toPromise()}function cm(){const t=indexedDB.open(EC,jD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jc,{keyPath:TC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jc)?e(r):(r.close(),await UD(),e(await cm()))})})}async function mE(t,e,n){const r=Kh(t,!0).put({[TC]:e,value:n});return new Ul(r).toPromise()}async function BD(t,e){const n=Kh(t,!1).get(e),r=await new Ul(n).toPromise();return r===void 0?null:r.value}function gE(t,e){const n=Kh(t,!0).delete(e);return new Ul(n).toPromise()}const zD=800,WD=3;class IC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gh._getInstance(FD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MD(),!this.activeServiceWorker)return;this.sender=new DD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cm();return await mE(e,Xc,"1"),await gE(e,Xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kh(i,!1).getAll();return new Ul(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IC.type="LOCAL";const $D=IC;new Vl(3e4,6e4);/**
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
 */function SC(t,e){return e?cr(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zg extends Qg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qD(t){return pC(t.auth,new Zg(t),t.bypassAuthState)}function HD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),wD(n,new Zg(t),t.bypassAuthState)}async function GD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),vD(n,new Zg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qD;case"linkViaPopup":case"linkViaRedirect":return GD;case"reauthViaPopup":case"reauthViaRedirect":return HD;default:_n(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=new Vl(2e3,1e4);async function QD(t,e,n){if(Rn(t.app))return Promise.reject(Nn(t,"operation-not-supported-in-this-environment"));const r=Ei(t);kO(t,e,Xg);const i=SC(r,n);return new Mi(r,"signInViaPopup",e,i).executeNotNull()}class Mi extends CC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mi.currentPopupAction&&Mi.currentPopupAction.cancel(),Mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=Jg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KD.get())};e()}}Mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD="pendingRedirect",hc=new Map;class XD extends CC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hc.get(this.auth._key());if(!e){try{const r=await JD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hc.set(this.auth._key(),e)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JD(t,e){const n=tL(e),r=eL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ZD(t,e){hc.set(t._key(),e)}function eL(t){return cr(t._redirectPersistence)}function tL(t){return cc(YD,t.config.apiKey,t.name)}async function nL(t,e,n=!1){if(Rn(t.app))return Promise.reject(pr(t));const r=Ei(t),i=SC(r,e),o=await new XD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=10*60*1e3;class iL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rL&&this.cachedEventUids.clear(),this.cachedEventUids.has(_E(e))}saveEventToCache(e){this.cachedEventUids.add(_E(e)),this.lastProcessedEventTime=Date.now()}}function _E(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oL(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lL=/^https?/;async function uL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oL(t);for(const n of e)try{if(cL(n))return}catch{}_n(t,"unauthorized-domain")}function cL(t){const e=am(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lL.test(n))return!1;if(aL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hL=new Vl(3e4,6e4);function yE(){const t=zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dL(t){return new Promise((e,n)=>{var r,i,s;function o(){yE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yE(),n(Nn(t,"network-request-failed"))},timeout:hL.get()})}if(!((i=(r=zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zn().gapi)===null||s===void 0)&&s.load)o();else{const a=nD("iframefcb");return zn()[a]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},hC(`${tD()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw dc=null,e})}let dc=null;function fL(t){return dc=dc||dL(t),dc}/**
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
 */const pL=new Vl(5e3,15e3),mL="__/auth/iframe",gL="emulator/auth/iframe",_L={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vL(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hg(e,gL):`https://${t.config.authDomain}/${mL}`,r={apiKey:e.apiKey,appName:t.name,v:fs},i=yL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${bo(r).slice(1)}`}async function wL(t){const e=await fL(t),n=zn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:vL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_L,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),a=zn().setTimeout(()=>{s(o)},pL.get());function u(){zn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const EL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TL=500,IL=600,SL="_blank",CL="http://localhost";class vE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RL(t,e,n,r=TL,i=IL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},EL),{width:r.toString(),height:i.toString(),top:s,left:o}),c=kt().toLowerCase();n&&(a=iC(c)?SL:n),nC(c)&&(e=e||CL,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[y,I])=>`${m}${y}=${I},`,"");if(HO(c)&&a!=="_self")return AL(e||"",a),new vE(null);const f=window.open(e||"",a,h);X(f,t,"popup-blocked");try{f.focus()}catch{}return new vE(f)}function AL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kL="__/auth/handler",PL="emulator/auth/handler",NL=encodeURIComponent("fac");async function wE(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:i};if(e instanceof Xg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof jl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${NL}=${encodeURIComponent(u)}`:"";return`${xL(t)}?${bo(a).slice(1)}${c}`}function xL({config:t}){return t.emulator?Hg(t,PL):`https://${t.authDomain}/${kL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="webStorageSupport";class bL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vC,this._completeRedirectFn=nL,this._overrideRedirectResult=ZD}async _openPopup(e,n,r,i){var s;Ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wE(e,n,r,am(),i);return RL(e,o,Jg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wE(e,n,r,am(),i);return LD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wL(e),r=new iL(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bf,{type:Bf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bf];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uC()||rC()||Kg()}}const OL=bL;var EE="@firebase/auth",TE="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ML(t){Dn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cC(t)},c=new JO(r,i,s,u);return aD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new gn("auth-internal",e=>{const n=Ei(e.getProvider("auth").getImmediate());return(r=>new DL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(EE,TE,LL(t)),Gt(EE,TE,"esm2017")}/**
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
 */const VL=5*60,FL=VS("authIdTokenMaxAge")||VL;let IE=null;const jL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FL)return;const i=n==null?void 0:n.token;IE!==i&&(IE=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function UL(t=qh()){const e=ds(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oD(t,{popupRedirectResolver:OL,persistence:[$D,bD,vC]}),r=VS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=jL(s.toString());AD(n,o,()=>o(n.currentUser)),RD(n,a=>o(a))}}const i=DS("auth");return i&&lD(n,`http://${i}`),n}function BL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ZO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ML("Browser");var zL="firebase",WL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(zL,WL,"app");var SE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wi,AC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function S(){}S.prototype=v.prototype,E.D=v.prototype,E.prototype=new S,E.prototype.constructor=E,E.C=function(R,k,x){for(var C=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)C[Ke-2]=arguments[Ke];return v.prototype[k].apply(R,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,S){S||(S=0);var R=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)R[k]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(k=0;16>k;++k)R[k]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=E.g[0],S=E.g[1],k=E.g[2];var x=E.g[3],C=v+(x^S&(k^x))+R[0]+3614090360&4294967295;v=S+(C<<7&4294967295|C>>>25),C=x+(k^v&(S^k))+R[1]+3905402710&4294967295,x=v+(C<<12&4294967295|C>>>20),C=k+(S^x&(v^S))+R[2]+606105819&4294967295,k=x+(C<<17&4294967295|C>>>15),C=S+(v^k&(x^v))+R[3]+3250441966&4294967295,S=k+(C<<22&4294967295|C>>>10),C=v+(x^S&(k^x))+R[4]+4118548399&4294967295,v=S+(C<<7&4294967295|C>>>25),C=x+(k^v&(S^k))+R[5]+1200080426&4294967295,x=v+(C<<12&4294967295|C>>>20),C=k+(S^x&(v^S))+R[6]+2821735955&4294967295,k=x+(C<<17&4294967295|C>>>15),C=S+(v^k&(x^v))+R[7]+4249261313&4294967295,S=k+(C<<22&4294967295|C>>>10),C=v+(x^S&(k^x))+R[8]+1770035416&4294967295,v=S+(C<<7&4294967295|C>>>25),C=x+(k^v&(S^k))+R[9]+2336552879&4294967295,x=v+(C<<12&4294967295|C>>>20),C=k+(S^x&(v^S))+R[10]+4294925233&4294967295,k=x+(C<<17&4294967295|C>>>15),C=S+(v^k&(x^v))+R[11]+2304563134&4294967295,S=k+(C<<22&4294967295|C>>>10),C=v+(x^S&(k^x))+R[12]+1804603682&4294967295,v=S+(C<<7&4294967295|C>>>25),C=x+(k^v&(S^k))+R[13]+4254626195&4294967295,x=v+(C<<12&4294967295|C>>>20),C=k+(S^x&(v^S))+R[14]+2792965006&4294967295,k=x+(C<<17&4294967295|C>>>15),C=S+(v^k&(x^v))+R[15]+1236535329&4294967295,S=k+(C<<22&4294967295|C>>>10),C=v+(k^x&(S^k))+R[1]+4129170786&4294967295,v=S+(C<<5&4294967295|C>>>27),C=x+(S^k&(v^S))+R[6]+3225465664&4294967295,x=v+(C<<9&4294967295|C>>>23),C=k+(v^S&(x^v))+R[11]+643717713&4294967295,k=x+(C<<14&4294967295|C>>>18),C=S+(x^v&(k^x))+R[0]+3921069994&4294967295,S=k+(C<<20&4294967295|C>>>12),C=v+(k^x&(S^k))+R[5]+3593408605&4294967295,v=S+(C<<5&4294967295|C>>>27),C=x+(S^k&(v^S))+R[10]+38016083&4294967295,x=v+(C<<9&4294967295|C>>>23),C=k+(v^S&(x^v))+R[15]+3634488961&4294967295,k=x+(C<<14&4294967295|C>>>18),C=S+(x^v&(k^x))+R[4]+3889429448&4294967295,S=k+(C<<20&4294967295|C>>>12),C=v+(k^x&(S^k))+R[9]+568446438&4294967295,v=S+(C<<5&4294967295|C>>>27),C=x+(S^k&(v^S))+R[14]+3275163606&4294967295,x=v+(C<<9&4294967295|C>>>23),C=k+(v^S&(x^v))+R[3]+4107603335&4294967295,k=x+(C<<14&4294967295|C>>>18),C=S+(x^v&(k^x))+R[8]+1163531501&4294967295,S=k+(C<<20&4294967295|C>>>12),C=v+(k^x&(S^k))+R[13]+2850285829&4294967295,v=S+(C<<5&4294967295|C>>>27),C=x+(S^k&(v^S))+R[2]+4243563512&4294967295,x=v+(C<<9&4294967295|C>>>23),C=k+(v^S&(x^v))+R[7]+1735328473&4294967295,k=x+(C<<14&4294967295|C>>>18),C=S+(x^v&(k^x))+R[12]+2368359562&4294967295,S=k+(C<<20&4294967295|C>>>12),C=v+(S^k^x)+R[5]+4294588738&4294967295,v=S+(C<<4&4294967295|C>>>28),C=x+(v^S^k)+R[8]+2272392833&4294967295,x=v+(C<<11&4294967295|C>>>21),C=k+(x^v^S)+R[11]+1839030562&4294967295,k=x+(C<<16&4294967295|C>>>16),C=S+(k^x^v)+R[14]+4259657740&4294967295,S=k+(C<<23&4294967295|C>>>9),C=v+(S^k^x)+R[1]+2763975236&4294967295,v=S+(C<<4&4294967295|C>>>28),C=x+(v^S^k)+R[4]+1272893353&4294967295,x=v+(C<<11&4294967295|C>>>21),C=k+(x^v^S)+R[7]+4139469664&4294967295,k=x+(C<<16&4294967295|C>>>16),C=S+(k^x^v)+R[10]+3200236656&4294967295,S=k+(C<<23&4294967295|C>>>9),C=v+(S^k^x)+R[13]+681279174&4294967295,v=S+(C<<4&4294967295|C>>>28),C=x+(v^S^k)+R[0]+3936430074&4294967295,x=v+(C<<11&4294967295|C>>>21),C=k+(x^v^S)+R[3]+3572445317&4294967295,k=x+(C<<16&4294967295|C>>>16),C=S+(k^x^v)+R[6]+76029189&4294967295,S=k+(C<<23&4294967295|C>>>9),C=v+(S^k^x)+R[9]+3654602809&4294967295,v=S+(C<<4&4294967295|C>>>28),C=x+(v^S^k)+R[12]+3873151461&4294967295,x=v+(C<<11&4294967295|C>>>21),C=k+(x^v^S)+R[15]+530742520&4294967295,k=x+(C<<16&4294967295|C>>>16),C=S+(k^x^v)+R[2]+3299628645&4294967295,S=k+(C<<23&4294967295|C>>>9),C=v+(k^(S|~x))+R[0]+4096336452&4294967295,v=S+(C<<6&4294967295|C>>>26),C=x+(S^(v|~k))+R[7]+1126891415&4294967295,x=v+(C<<10&4294967295|C>>>22),C=k+(v^(x|~S))+R[14]+2878612391&4294967295,k=x+(C<<15&4294967295|C>>>17),C=S+(x^(k|~v))+R[5]+4237533241&4294967295,S=k+(C<<21&4294967295|C>>>11),C=v+(k^(S|~x))+R[12]+1700485571&4294967295,v=S+(C<<6&4294967295|C>>>26),C=x+(S^(v|~k))+R[3]+2399980690&4294967295,x=v+(C<<10&4294967295|C>>>22),C=k+(v^(x|~S))+R[10]+4293915773&4294967295,k=x+(C<<15&4294967295|C>>>17),C=S+(x^(k|~v))+R[1]+2240044497&4294967295,S=k+(C<<21&4294967295|C>>>11),C=v+(k^(S|~x))+R[8]+1873313359&4294967295,v=S+(C<<6&4294967295|C>>>26),C=x+(S^(v|~k))+R[15]+4264355552&4294967295,x=v+(C<<10&4294967295|C>>>22),C=k+(v^(x|~S))+R[6]+2734768916&4294967295,k=x+(C<<15&4294967295|C>>>17),C=S+(x^(k|~v))+R[13]+1309151649&4294967295,S=k+(C<<21&4294967295|C>>>11),C=v+(k^(S|~x))+R[4]+4149444226&4294967295,v=S+(C<<6&4294967295|C>>>26),C=x+(S^(v|~k))+R[11]+3174756917&4294967295,x=v+(C<<10&4294967295|C>>>22),C=k+(v^(x|~S))+R[2]+718787259&4294967295,k=x+(C<<15&4294967295|C>>>17),C=S+(x^(k|~v))+R[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,E.g[2]=E.g[2]+k&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var S=v-this.blockSize,R=this.B,k=this.h,x=0;x<v;){if(k==0)for(;x<=S;)i(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<v;)if(R[k++]=E.charCodeAt(x++),k==this.blockSize){i(this,R),k=0;break}}else for(;x<v;)if(R[k++]=E[x++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var S=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=S&255,S/=256;for(this.u(E),E=Array(16),v=S=0;4>v;++v)for(var R=0;32>R;R+=8)E[S++]=this.g[v]>>>R&255;return E};function s(E,v){var S=a;return Object.prototype.hasOwnProperty.call(S,E)?S[E]:S[E]=v(E)}function o(E,v){this.h=v;for(var S=[],R=!0,k=E.length-1;0<=k;k--){var x=E[k]|0;R&&x==v||(S[k]=x,R=!1)}this.g=S}var a={};function u(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return N(c(-E));for(var v=[],S=1,R=0;E>=S;R++)v[R]=E/S|0,S*=4294967296;return new o(v,0)}function h(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return N(h(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),R=f,k=0;k<E.length;k+=8){var x=Math.min(8,E.length-k),C=parseInt(E.substring(k,k+x),v);8>x?(x=c(Math.pow(v,x)),R=R.j(x).add(c(C))):(R=R.j(S),R=R.add(c(C)))}return R}var f=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var E=0,v=1,S=0;S<this.g.length;S++){var R=this.i(S);E+=(0<=R?R:4294967296+R)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(I(this))return"0";if(P(this))return"-"+N(this).toString(E);for(var v=c(Math.pow(E,6)),S=this,R="";;){var k=D(S,v).g;S=T(S,k.j(v));var x=((0<S.g.length?S.g[0]:S.h)>>>0).toString(E);if(S=k,I(S))return x+R;for(;6>x.length;)x="0"+x;R=x+R}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function I(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=T(this,E),P(E)?-1:I(E)?0:1};function N(E){for(var v=E.g.length,S=[],R=0;R<v;R++)S[R]=~E.g[R];return new o(S,~E.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],R=0,k=0;k<=v;k++){var x=R+(this.i(k)&65535)+(E.i(k)&65535),C=(x>>>16)+(this.i(k)>>>16)+(E.i(k)>>>16);R=C>>>16,x&=65535,C&=65535,S[k]=C<<16|x}return new o(S,S[S.length-1]&-2147483648?-1:0)};function T(E,v){return E.add(N(v))}t.j=function(E){if(I(this)||I(E))return f;if(P(this))return P(E)?N(this).j(N(E)):N(N(this).j(E));if(P(E))return N(this.j(N(E)));if(0>this.l(y)&&0>E.l(y))return c(this.m()*E.m());for(var v=this.g.length+E.g.length,S=[],R=0;R<2*v;R++)S[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<E.g.length;k++){var x=this.i(R)>>>16,C=this.i(R)&65535,Ke=E.i(k)>>>16,Qt=E.i(k)&65535;S[2*R+2*k]+=C*Qt,w(S,2*R+2*k),S[2*R+2*k+1]+=x*Qt,w(S,2*R+2*k+1),S[2*R+2*k+1]+=C*Ke,w(S,2*R+2*k+1),S[2*R+2*k+2]+=x*Ke,w(S,2*R+2*k+2)}for(R=0;R<v;R++)S[R]=S[2*R+1]<<16|S[2*R];for(R=v;R<2*v;R++)S[R]=0;return new o(S,0)};function w(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function A(E,v){this.g=E,this.h=v}function D(E,v){if(I(v))throw Error("division by zero");if(I(E))return new A(f,f);if(P(E))return v=D(N(E),v),new A(N(v.g),N(v.h));if(P(v))return v=D(E,N(v)),new A(N(v.g),v.h);if(30<E.g.length){if(P(E)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var S=m,R=v;0>=R.l(E);)S=O(S),R=O(R);var k=j(S,1),x=j(R,1);for(R=j(R,2),S=j(S,2);!I(R);){var C=x.add(R);0>=C.l(E)&&(k=k.add(S),x=C),R=j(R,1),S=j(S,1)}return v=T(E,k.j(v)),new A(k,v)}for(k=f;0<=E.l(v);){for(S=Math.max(1,Math.floor(E.m()/v.m())),R=Math.ceil(Math.log(S)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),x=c(S),C=x.j(v);P(C)||0<C.l(E);)S-=R,x=c(S),C=x.j(v);I(x)&&(x=m),k=k.add(x),E=T(E,C)}return new A(k,E)}t.A=function(E){return D(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)&E.i(R);return new o(S,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)|E.i(R);return new o(S,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)^E.i(R);return new o(S,this.h^E.h)};function O(E){for(var v=E.g.length+1,S=[],R=0;R<v;R++)S[R]=E.i(R)<<1|E.i(R-1)>>>31;return new o(S,E.h)}function j(E,v){var S=v>>5;v%=32;for(var R=E.g.length-S,k=[],x=0;x<R;x++)k[x]=0<v?E.i(x+S)>>>v|E.i(x+S+1)<<32-v:E.i(x+S);return new o(k,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,AC=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Wi=o}).apply(typeof SE<"u"?SE:typeof self<"u"?self:typeof window<"u"?window:{});var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kC,wa,PC,fc,hm,NC,xC,bC;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bu=="object"&&Bu];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var b=l[_];if(!(b in p))break e;p=p[b]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,_=!1,b={next:function(){if(!_&&p<l.length){var L=p++;return{value:d(L,l[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,_),l.apply(d,b)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function y(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function I(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,b,L){for(var z=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)z[Ee-2]=arguments[Ee];return d.prototype[b].apply(_,z)}}function P(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function N(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const b=l.length||0,L=_.length||0;l.length=b+L;for(let z=0;z<L;z++)l[b+z]=_[z]}else l.push(_)}}class T{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var O=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function j(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function E(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function v(l){const d={};for(const p in l)d[p]=l[p];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,d){let p,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(p in _)l[p]=_[p];for(let L=0;L<S.length;L++)p=S[L],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function k(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function x(l){a.setTimeout(()=>{throw l},0)}function C(){var l=Q;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Ke{constructor(){this.h=this.g=null}add(d,p){const _=Qt.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Qt=new T(()=>new Pt,l=>l.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,W=!1,Q=new Ke,J=()=>{const l=a.Promise.resolve(void 0);Qe=()=>{l.then(G)}};var G=()=>{for(var l;l=C();){try{l.h.call(l.g)}catch(p){x(p)}var d=Qt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}W=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var je=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function lt(l,d){if(oe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(O){e:{try{D(d.nodeName);var b=!0;break e}catch{}b=!1}b||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ye[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&lt.aa.h.call(this)}}I(lt,oe);var Ye={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var re="closure_listenable_"+(1e6*Math.random()|0),we=0;function Ue(l,d,p,_,b){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=b,this.key=++we,this.da=this.fa=!1}function Nt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Mn(l){this.src=l,this.g={},this.h=0}Mn.prototype.add=function(l,d,p,_,b){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var z=Xt(l,d,_,b);return-1<z?(d=l[z],p||(d.fa=!1)):(d=new Ue(d,this.src,L,!!_,b),d.fa=p,l.push(d)),d};function Yt(l,d){var p=d.type;if(p in l.g){var _=l.g[p],b=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=b)&&Array.prototype.splice.call(_,b,1),L&&(Nt(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Xt(l,d,p,_){for(var b=0;b<l.length;++b){var L=l[b];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==_)return b}return-1}var jd="closure_lm_"+(1e6*Math.random()|0),Ud={};function by(l,d,p,_,b){if(Array.isArray(d)){for(var L=0;L<d.length;L++)by(l,d[L],p,_,b);return null}return p=Ly(p),l&&l[re]?l.K(d,p,c(_)?!!_.capture:!1,b):Xk(l,d,p,!1,_,b)}function Xk(l,d,p,_,b,L){if(!d)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,Ee=zd(l);if(Ee||(l[jd]=Ee=new Mn(l)),p=Ee.add(d,p,_,z,L),p.proxy)return p;if(_=Jk(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)je||(b=z),b===void 0&&(b=!1),l.addEventListener(d.toString(),_,b);else if(l.attachEvent)l.attachEvent(Dy(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Jk(){function l(p){return d.call(l.src,l.listener,p)}const d=Zk;return l}function Oy(l,d,p,_,b){if(Array.isArray(d))for(var L=0;L<d.length;L++)Oy(l,d[L],p,_,b);else _=c(_)?!!_.capture:!!_,p=Ly(p),l&&l[re]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],p=Xt(L,p,_,b),-1<p&&(Nt(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=zd(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Xt(d,p,_,b)),(p=-1<l?d[l]:null)&&Bd(p))}function Bd(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[re])Yt(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(Dy(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=zd(d))?(Yt(p,l),p.h==0&&(p.src=null,d[jd]=null)):Nt(l)}}}function Dy(l){return l in Ud?Ud[l]:Ud[l]="on"+l}function Zk(l,d){if(l.da)l=!0;else{d=new lt(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&Bd(l),l=p.call(_,d)}return l}function zd(l){return l=l[jd],l instanceof Mn?l:null}var Wd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ly(l){return typeof l=="function"?l:(l[Wd]||(l[Wd]=function(d){return l.handleEvent(d)}),l[Wd])}function yt(){ne.call(this),this.i=new Mn(this),this.M=this,this.F=null}I(yt,ne),yt.prototype[re]=!0,yt.prototype.removeEventListener=function(l,d,p,_){Oy(this,l,d,p,_)};function xt(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new oe(d,l);else if(d instanceof oe)d.target=d.target||l;else{var b=d;d=new oe(_,l),R(d,b)}if(b=!0,p)for(var L=p.length-1;0<=L;L--){var z=d.g=p[L];b=au(z,_,!0,d)&&b}if(z=d.g=l,b=au(z,_,!0,d)&&b,b=au(z,_,!1,d)&&b,p)for(L=0;L<p.length;L++)z=d.g=p[L],b=au(z,_,!1,d)&&b}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)Nt(p[_]);delete l.g[d],l.h--}}this.F=null},yt.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},yt.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function au(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var b=!0,L=0;L<d.length;++L){var z=d[L];if(z&&!z.da&&z.capture==p){var Ee=z.listener,ut=z.ha||z.src;z.fa&&Yt(l.i,z),b=Ee.call(ut,_)!==!1&&b}}return b&&!_.defaultPrevented}function My(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Vy(l){l.g=My(()=>{l.g=null,l.i&&(l.i=!1,Vy(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class eP extends ne{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Vy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bo(l){ne.call(this),this.h=l,this.g={}}I(Bo,ne);var Fy=[];function jy(l){j(l.g,function(d,p){this.g.hasOwnProperty(p)&&Bd(d)},l),l.g={}}Bo.prototype.N=function(){Bo.aa.N.call(this),jy(this)},Bo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $d=a.JSON.stringify,tP=a.JSON.parse,nP=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function qd(){}qd.prototype.h=null;function Uy(l){return l.h||(l.h=l.i())}function By(){}var zo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hd(){oe.call(this,"d")}I(Hd,oe);function Gd(){oe.call(this,"c")}I(Gd,oe);var Si={},zy=null;function lu(){return zy=zy||new yt}Si.La="serverreachability";function Wy(l){oe.call(this,Si.La,l)}I(Wy,oe);function Wo(l){const d=lu();xt(d,new Wy(d))}Si.STAT_EVENT="statevent";function $y(l,d){oe.call(this,Si.STAT_EVENT,l),this.stat=d}I($y,oe);function bt(l){const d=lu();xt(d,new $y(d,l))}Si.Ma="timingevent";function qy(l,d){oe.call(this,Si.Ma,l),this.size=d}I(qy,oe);function $o(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function qo(){this.g=!0}qo.prototype.xa=function(){this.g=!1};function rP(l,d,p,_,b,L){l.info(function(){if(l.g)if(L)for(var z="",Ee=L.split("&"),ut=0;ut<Ee.length;ut++){var fe=Ee[ut].split("=");if(1<fe.length){var vt=fe[0];fe=fe[1];var wt=vt.split("_");z=2<=wt.length&&wt[1]=="type"?z+(vt+"="+fe+"&"):z+(vt+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+d+`
`+p+`
`+z})}function iP(l,d,p,_,b,L,z){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+d+`
`+p+`
`+L+" "+z})}function vs(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+oP(l,p)+(_?" "+_:"")})}function sP(l,d){l.info(function(){return"TIMEOUT: "+d})}qo.prototype.info=function(){};function oP(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var b=_[1];if(Array.isArray(b)&&!(1>b.length)){var L=b[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return $d(p)}catch{return d}}var uu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kd;function cu(){}I(cu,qd),cu.prototype.g=function(){return new XMLHttpRequest},cu.prototype.i=function(){return{}},Kd=new cu;function br(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new Bo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gy}function Gy(){this.i=null,this.g="",this.h=!1}var Ky={},Qd={};function Yd(l,d,p){l.L=1,l.v=pu(Zn(d)),l.m=p,l.P=!0,Qy(l,null)}function Qy(l,d){l.F=Date.now(),hu(l),l.A=Zn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),uv(p.i,"t",_),l.C=0,p=l.j.J,l.h=new Gy,l.g=Av(l.j,p?d:null,!l.m),0<l.O&&(l.M=new eP(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(Fy[0]=b.toString()),b=Fy);for(var L=0;L<b.length;L++){var z=by(p,b[L],_||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Wo(),rP(l.i,l.u,l.A,l.l,l.R,l.m)}br.prototype.ca=function(l){l=l.target;const d=this.M;d&&er(l)==3?d.j():this.Y(l)},br.prototype.Y=function(l){try{if(l==this.g)e:{const wt=er(this.g);var d=this.g.Ba();const Ts=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||gv(this.g)))){this.J||wt!=4||d==7||(d==8||0>=Ts?Wo(3):Wo(2)),Xd(this);var p=this.g.Z();this.X=p;t:if(Yy(this)){var _=gv(this.g);l="";var b=_.length,L=er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ci(this),Ho(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<b;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(L&&d==b-1)});_.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,iP(this.i,this.u,this.A,this.l,this.R,wt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,ut=this.g;if((Ee=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ee)){var fe=Ee;break t}}fe=null}if(p=fe)vs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jd(this,p);else{this.o=!1,this.s=3,bt(12),Ci(this),Ho(this);break e}}if(this.P){p=!0;let vn;for(;!this.J&&this.C<z.length;)if(vn=aP(this,z),vn==Qd){wt==4&&(this.s=4,bt(14),p=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(vn==Ky){this.s=4,bt(15),vs(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else vs(this.i,this.l,vn,null),Jd(this,vn);if(Yy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||z.length!=0||this.h.h||(this.s=1,bt(16),p=!1),this.o=this.o&&p,!p)vs(this.i,this.l,z,"[Invalid Chunked Response]"),Ci(this),Ho(this);else if(0<z.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),sf(vt),vt.M=!0,bt(11))}}else vs(this.i,this.l,z,null),Jd(this,z);wt==4&&Ci(this),this.o&&!this.J&&(wt==4?Iv(this.j,this):(this.o=!1,hu(this)))}else SP(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Ci(this),Ho(this)}}}catch{}finally{}};function Yy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function aP(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?Qd:(p=Number(d.substring(p,_)),isNaN(p)?Ky:(_+=1,_+p>d.length?Qd:(d=d.slice(_,_+p),l.C=_+p,d)))}br.prototype.cancel=function(){this.J=!0,Ci(this)};function hu(l){l.S=Date.now()+l.I,Xy(l,l.I)}function Xy(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=$o(m(l.ba,l),d)}function Xd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}br.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(sP(this.i,this.A),this.L!=2&&(Wo(),bt(17)),Ci(this),this.s=2,Ho(this)):Xy(this,this.S-l)};function Ho(l){l.j.G==0||l.J||Iv(l.j,l)}function Ci(l){Xd(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,jy(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Jd(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Zd(p.h,l))){if(!l.K&&Zd(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)wu(p),yu(p);else break e;rf(p),bt(18)}}else p.za=b[1],0<p.za-p.T&&37500>b[2]&&p.F&&p.v==0&&!p.C&&(p.C=$o(m(p.Za,p),6e3));if(1>=ev(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ai(p,11)}else if((l.K||p.g==l)&&wu(p),!w(d))for(b=p.Da.g.parse(d),d=0;d<b.length;d++){let fe=b[d];if(p.T=fe[0],fe=fe[1],p.G==2)if(fe[0]=="c"){p.K=fe[1],p.ia=fe[2];const vt=fe[3];vt!=null&&(p.la=vt,p.j.info("VER="+p.la));const wt=fe[4];wt!=null&&(p.Aa=wt,p.j.info("SVER="+p.Aa));const Ts=fe[5];Ts!=null&&typeof Ts=="number"&&0<Ts&&(_=1.5*Ts,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const vn=l.g;if(vn){const Tu=vn.g?vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tu){var L=_.h;L.g||Tu.indexOf("spdy")==-1&&Tu.indexOf("quic")==-1&&Tu.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ef(L,L.h),L.h=null))}if(_.D){const of=vn.g?vn.g.getResponseHeader("X-HTTP-Session-Id"):null;of&&(_.ya=of,Ce(_.I,_.D,of))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var z=l;if(_.qa=Rv(_,_.J?_.ia:null,_.W),z.K){tv(_.h,z);var Ee=z,ut=_.L;ut&&(Ee.I=ut),Ee.B&&(Xd(Ee),hu(Ee)),_.g=z}else Ev(_);0<p.i.length&&vu(p)}else fe[0]!="stop"&&fe[0]!="close"||Ai(p,7);else p.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?Ai(p,7):nf(p):fe[0]!="noop"&&p.l&&p.l.ta(fe),p.v=0)}}Wo(4)}catch{}}var lP=class{constructor(l,d){this.g=l,this.map=d}};function Jy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ev(l){return l.h?1:l.g?l.g.size:0}function Zd(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function ef(l,d){l.g?l.g.add(d):l.h=d}function tv(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Jy.prototype.cancel=function(){if(this.i=nv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function nv(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return P(l.i)}function uP(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function cP(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function rv(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=cP(l),_=uP(l),b=_.length,L=0;L<b;L++)d.call(void 0,_[L],p&&p[L],l)}var iv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hP(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),b=null;if(0<=_){var L=l[p].substring(0,_);b=l[p].substring(_+1)}else L=l[p];d(L,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ri(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ri){this.h=l.h,du(this,l.j),this.o=l.o,this.g=l.g,fu(this,l.s),this.l=l.l;var d=l.i,p=new Qo;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),sv(this,p),this.m=l.m}else l&&(d=String(l).match(iv))?(this.h=!1,du(this,d[1]||"",!0),this.o=Go(d[2]||""),this.g=Go(d[3]||"",!0),fu(this,d[4]),this.l=Go(d[5]||"",!0),sv(this,d[6]||"",!0),this.m=Go(d[7]||"")):(this.h=!1,this.i=new Qo(null,this.h))}Ri.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Ko(d,ov,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Ko(d,ov,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Ko(p,p.charAt(0)=="/"?pP:fP,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Ko(p,gP)),l.join("")};function Zn(l){return new Ri(l)}function du(l,d,p){l.j=p?Go(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function fu(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function sv(l,d,p){d instanceof Qo?(l.i=d,_P(l.i,l.h)):(p||(d=Ko(d,mP)),l.i=new Qo(d,l.h))}function Ce(l,d,p){l.i.set(d,p)}function pu(l){return Ce(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Go(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ko(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,dP),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function dP(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ov=/[#\/\?@]/g,fP=/[#\?:]/g,pP=/[#\?]/g,mP=/[#\?@]/g,gP=/#/g;function Qo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Or(l){l.g||(l.g=new Map,l.h=0,l.i&&hP(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Qo.prototype,t.add=function(l,d){Or(this),this.i=null,l=ws(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function av(l,d){Or(l),d=ws(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function lv(l,d){return Or(l),d=ws(l,d),l.g.has(d)}t.forEach=function(l,d){Or(this),this.g.forEach(function(p,_){p.forEach(function(b){l.call(d,b,_,this)},this)},this)},t.na=function(){Or(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const b=l[_];for(let L=0;L<b.length;L++)p.push(d[_])}return p},t.V=function(l){Or(this);let d=[];if(typeof l=="string")lv(this,l)&&(d=d.concat(this.g.get(ws(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return Or(this),this.i=null,l=ws(this,l),lv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function uv(l,d,p){av(l,d),0<p.length&&(l.i=null,l.g.set(ws(l,d),P(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const L=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var b=L;z[_]!==""&&(b+="="+encodeURIComponent(String(z[_]))),l.push(b)}}return this.i=l.join("&")};function ws(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function _P(l,d){d&&!l.j&&(Or(l),l.i=null,l.g.forEach(function(p,_){var b=_.toLowerCase();_!=b&&(av(this,_),uv(this,b,p))},l)),l.j=d}function yP(l,d){const p=new qo;if(a.Image){const _=new Image;_.onload=y(Dr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=y(Dr,p,"TestLoadImage: error",!1,d,_),_.onabort=y(Dr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=y(Dr,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function vP(l,d){const p=new qo,_=new AbortController,b=setTimeout(()=>{_.abort(),Dr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(L=>{clearTimeout(b),L.ok?Dr(p,"TestPingServer: ok",!0,d):Dr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),Dr(p,"TestPingServer: error",!1,d)})}function Dr(l,d,p,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(p)}catch{}}function wP(){this.g=new nP}function EP(l,d,p){const _=p||"";try{rv(l,function(b,L){let z=b;c(b)&&(z=$d(b)),d.push(_+L+"="+encodeURIComponent(z))})}catch(b){throw d.push(_+"type="+encodeURIComponent("_badmap")),b}}function mu(l){this.l=l.Ub||null,this.j=l.eb||!1}I(mu,qd),mu.prototype.g=function(){return new gu(this.l,this.j)},mu.prototype.i=function(l){return function(){return l}}({});function gu(l,d){yt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(gu,yt),t=gu.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Xo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Xo(this)),this.g&&(this.readyState=3,Xo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function cv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Yo(this):Xo(this),this.readyState==3&&cv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Yo(this))},t.Qa=function(l){this.g&&(this.response=l,Yo(this))},t.ga=function(){this.g&&Yo(this)};function Yo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Xo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Xo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(gu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function hv(l){let d="";return j(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function tf(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=hv(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ce(l,d,p))}function Oe(l){yt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Oe,yt);var TP=/^https?$/i,IP=["POST","PUT"];t=Oe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kd.g(),this.v=this.o?Uy(this.o):Uy(Kd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){dv(this,L);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)p.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())p.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(IP,d,void 0))||_||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of p)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mv(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){dv(this,L)}};function dv(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,fv(l),_u(l)}function fv(l){l.A||(l.A=!0,xt(l,"complete"),xt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,xt(this,"complete"),xt(this,"abort"),_u(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_u(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?pv(this):this.bb())},t.bb=function(){pv(this)};function pv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||er(l)!=4||l.Z()!=2)){if(l.u&&er(l)==4)My(l.Ea,0,l);else if(xt(l,"readystatechange"),er(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=z===0){var b=String(l.D).match(iv)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),_=!TP.test(b?b.toLowerCase():"")}p=_}if(p)xt(l,"complete"),xt(l,"success");else{l.m=6;try{var L=2<er(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",fv(l)}}finally{_u(l)}}}}function _u(l,d){if(l.g){mv(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||xt(l,"ready");try{p.onreadystatechange=_}catch{}}}function mv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function er(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<er(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),tP(d)}};function gv(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function SP(l){const d={};l=(l.g&&2<=er(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(w(l[_]))continue;var p=k(l[_]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[b]||[];d[b]=L,L.push(p)}E(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jo(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function _v(l){this.Aa=0,this.i=[],this.j=new qo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jo("baseRetryDelayMs",5e3,l),this.cb=Jo("retryDelaySeedMs",1e4,l),this.Wa=Jo("forwardChannelMaxRetries",2,l),this.wa=Jo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Jy(l&&l.concurrentRequestLimit),this.Da=new wP,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_v.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,_){bt(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Rv(this,null,this.W),vu(this)};function nf(l){if(yv(l),l.G==3){var d=l.U++,p=Zn(l.I);if(Ce(p,"SID",l.K),Ce(p,"RID",d),Ce(p,"TYPE","terminate"),Zo(l,p),d=new br(l,l.j,d),d.L=2,d.v=pu(Zn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Av(d.j,null),d.g.ea(d.v)),d.F=Date.now(),hu(d)}Cv(l)}function yu(l){l.g&&(sf(l),l.g.cancel(),l.g=null)}function yv(l){yu(l),l.u&&(a.clearTimeout(l.u),l.u=null),wu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function vu(l){if(!Zy(l.h)&&!l.s){l.s=!0;var d=l.Ga;Qe||J(),W||(Qe(),W=!0),Q.add(d,l),l.B=0}}function CP(l,d){return ev(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=$o(m(l.Ga,l,d),Sv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new br(this,this.j,l);let L=this.o;if(this.S&&(L?(L=v(L),R(L,this.S)):L=this.S),this.m!==null||this.O||(b.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=wv(this,b,d),p=Zn(this.I),Ce(p,"RID",l),Ce(p,"CVER",22),this.D&&Ce(p,"X-HTTP-Session-Id",this.D),Zo(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(hv(L)))+"&"+d:this.m&&tf(p,this.m,L)),ef(this.h,b),this.Ua&&Ce(p,"TYPE","init"),this.P?(Ce(p,"$req",d),Ce(p,"SID","null"),b.T=!0,Yd(b,p,null)):Yd(b,p,d),this.G=2}}else this.G==3&&(l?vv(this,l):this.i.length==0||Zy(this.h)||vv(this))};function vv(l,d){var p;d?p=d.l:p=l.U++;const _=Zn(l.I);Ce(_,"SID",l.K),Ce(_,"RID",p),Ce(_,"AID",l.T),Zo(l,_),l.m&&l.o&&tf(_,l.m,l.o),p=new br(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=wv(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ef(l.h,p),Yd(p,_,d)}function Zo(l,d){l.H&&j(l.H,function(p,_){Ce(d,_,p)}),l.l&&rv({},function(p,_){Ce(d,_,p)})}function wv(l,d,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var b=l.i;let L=-1;for(;;){const z=["count="+p];L==-1?0<p?(L=b[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let Ee=!0;for(let ut=0;ut<p;ut++){let fe=b[ut].g;const vt=b[ut].map;if(fe-=L,0>fe)L=Math.max(0,b[ut].g-100),Ee=!1;else try{EP(vt,z,"req"+fe+"_")}catch{_&&_(vt)}}if(Ee){_=z.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function Ev(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Qe||J(),W||(Qe(),W=!0),Q.add(d,l),l.v=0}}function rf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=$o(m(l.Fa,l),Sv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Tv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=$o(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),yu(this),Tv(this))};function sf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Tv(l){l.g=new br(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Zn(l.qa);Ce(d,"RID","rpc"),Ce(d,"SID",l.K),Ce(d,"AID",l.T),Ce(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ce(d,"TO",l.ja),Ce(d,"TYPE","xmlhttp"),Zo(l,d),l.m&&l.o&&tf(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=pu(Zn(d)),p.m=null,p.P=!0,Qy(p,l)}t.Za=function(){this.C!=null&&(this.C=null,yu(this),rf(this),bt(19))};function wu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Iv(l,d){var p=null;if(l.g==d){wu(l),sf(l),l.g=null;var _=2}else if(Zd(l.h,d))p=d.D,tv(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var b=l.B;_=lu(),xt(_,new qy(_,p)),vu(l)}else Ev(l);else if(b=d.s,b==3||b==0&&0<d.X||!(_==1&&CP(l,d)||_==2&&rf(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),b){case 1:Ai(l,5);break;case 4:Ai(l,10);break;case 3:Ai(l,6);break;default:Ai(l,2)}}}function Sv(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function Ai(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),_=l.Xa;const b=!_;_=new Ri(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||du(_,"https"),pu(_),b?yP(_.toString(),p):vP(_.toString(),p)}else bt(2);l.G=0,l.l&&l.l.sa(d),Cv(l),yv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Cv(l){if(l.G=0,l.ka=[],l.l){const d=nv(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function Rv(l,d,p){var _=p instanceof Ri?Zn(p):new Ri(p);if(_.g!="")d&&(_.g=d+"."+_.g),fu(_,_.s);else{var b=a.location;_=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;var L=new Ri(null);_&&du(L,_),d&&(L.g=d),b&&fu(L,b),p&&(L.l=p),_=L}return p=l.D,d=l.ya,p&&d&&Ce(_,p,d),Ce(_,"VER",l.la),Zo(l,_),_}function Av(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Oe(new mu({eb:p})):new Oe(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kv(){}t=kv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Eu(){}Eu.prototype.g=function(l,d){return new Jt(l,d)};function Jt(l,d){yt.call(this),this.g=new _v(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!w(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Es(this)}I(Jt,yt),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){nf(this.g)},Jt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=$d(l),l=p);d.i.push(new lP(d.Ya++,l)),d.G==3&&vu(d)},Jt.prototype.N=function(){this.g.l=null,delete this.j,nf(this.g),delete this.g,Jt.aa.N.call(this)};function Pv(l){Hd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}I(Pv,Hd);function Nv(){Gd.call(this),this.status=1}I(Nv,Gd);function Es(l){this.g=l}I(Es,kv),Es.prototype.ua=function(){xt(this.g,"a")},Es.prototype.ta=function(l){xt(this.g,new Pv(l))},Es.prototype.sa=function(l){xt(this.g,new Nv)},Es.prototype.ra=function(){xt(this.g,"b")},Eu.prototype.createWebChannel=Eu.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,bC=function(){return new Eu},xC=function(){return lu()},NC=Si,hm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},uu.NO_ERROR=0,uu.TIMEOUT=8,uu.HTTP_ERROR=6,fc=uu,Hy.COMPLETE="complete",PC=Hy,By.EventType=zo,zo.OPEN="a",zo.CLOSE="b",zo.ERROR="c",zo.MESSAGE="d",yt.prototype.listen=yt.prototype.K,wa=By,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,kC=Oe}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});const CE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Wh("@firebase/firestore");function la(){return Xi.logLevel}function H(t,...e){if(Xi.logLevel<=ue.DEBUG){const n=e.map(e_);Xi.debug(`Firestore (${Do}): ${t}`,...n)}}function Sr(t,...e){if(Xi.logLevel<=ue.ERROR){const n=e.map(e_);Xi.error(`Firestore (${Do}): ${t}`,...n)}}function Ji(t,...e){if(Xi.logLevel<=ue.WARN){const n=e.map(e_);Xi.warn(`Firestore (${Do}): ${t}`,...n)}}function e_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Do}) INTERNAL ASSERTION FAILED: `+t;throw Sr(e),new Error(e)}function ye(t,e){t||Z()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class $L{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qL{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new OC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new St(e)}}class HL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class GL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new HL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ye(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new KL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=YL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function ho(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new qe(0,0))}static max(){return new ee(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return dl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends dl{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const XL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends dl{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return XL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ae.fromString(e))}static fromName(e){return new K(Ae.fromString(e).popFirst(5))}static empty(){return new K(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ae(e.slice()))}}function JL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new ci(i,K.empty(),e)}function ZL(t){return new ci(t.readTime,t.key,-1)}class ci{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ci(ee.min(),K.empty(),-1)}static max(){return new ci(ee.max(),K.empty(),-1)}}function eM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==tM)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function rM(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class n_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}n_.oe=-1;function Qh(t){return t==null}function Zc(t){return t===0&&1/t==-1/0}function iM(t){return typeof t=="number"&&Number.isInteger(t)&&!Zc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ge=class dm{constructor(e,n){this.comparator=e,this.root=n||si.EMPTY}insert(e,n){return new dm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,si.BLACK,null,null))}remove(e){return new dm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,si.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zu(this.root,e,this.comparator,!0)}},zu=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},si=class tr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tr.RED,this.left=i??tr.EMPTY,this.right=s??tr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}};si.EMPTY=null,si.RED=!0,si.BLACK=!1;si.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new si(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new AE(this.data.getIterator())}getIteratorFrom(e){return new AE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class AE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new tn([])}unionWith(e){let n=new ft(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class MC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new MC("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const sM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(t){if(ye(!!t),typeof t=="string"){let e=0;const n=sM.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zi(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function i_(t){const e=t.mapValue.fields.__previous_value__;return r_(e)?i_(e):e}function fl(t){const e=hi(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class fo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu={mapValue:{}};function es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?r_(t)?4:lM(t)?9007199254740991:aM(t)?10:11:Z()}function Hn(t,e){if(t===e)return!0;const n=es(t);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fl(t).isEqual(fl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hi(i.timestampValue),a=hi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Zi(i.bytesValue).isEqual(Zi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),a=Ve(s.doubleValue);return o===a?Zc(o)===Zc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ho(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(RE(o)!==RE(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Hn(o[u],a[u])))return!1;return!0}(t,e);default:return Z()}}function pl(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function po(t,e){if(t===e)return 0;const n=es(t),r=es(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ve(s.integerValue||s.doubleValue),u=Ve(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return kE(t.timestampValue,e.timestampValue);case 4:return kE(fl(t),fl(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Zi(s),u=Zi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=pe(a[c],u[c]);if(h!==0)return h}return pe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=pe(Ve(s.latitude),Ve(o.latitude));return a!==0?a:pe(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return PE(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},m=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,I=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=pe(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:PE(y,I)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Wu.mapValue&&o===Wu.mapValue)return 0;if(s===Wu.mapValue)return 1;if(o===Wu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=pe(u[f],h[f]);if(m!==0)return m;const y=po(a[u[f]],c[h[f]]);if(y!==0)return y}return pe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Z()}}function kE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=hi(t),r=hi(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function PE(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=po(n[i],r[i]);if(s)return s}return pe(n.length,r.length)}function mo(t){return fm(t)}function fm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=fm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${fm(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function NE(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pm(t){return!!t&&"integerValue"in t}function s_(t){return!!t&&"arrayValue"in t}function xE(t){return!!t&&"nullValue"in t}function bE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pc(t){return!!t&&"mapValue"in t}function aM(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Da(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Da(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Da(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(n)}setAll(e){let n=st.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Da(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Bt(Da(this.value))}}function VC(t){const e=[];return ps(t.fields,(n,r)=>{const i=new st([n]);if(pc(r)){const s=VC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Rt(e,0,ee.min(),ee.min(),ee.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,i){return new Rt(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new Rt(e,2,n,ee.min(),ee.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,ee.min(),ee.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eh{constructor(e,n){this.position=e,this.inclusive=n}}function OE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=po(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function DE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function uM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class FC{}class We extends FC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hM(e,n,r):n==="array-contains"?new pM(e,r):n==="in"?new mM(e,r):n==="not-in"?new gM(e,r):n==="array-contains-any"?new _M(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dM(e,r):new fM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(po(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends FC{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ln(e,n)}matches(e){return jC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function jC(t){return t.op==="and"}function UC(t){return cM(t)&&jC(t)}function cM(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function mm(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+mo(t.value);if(UC(t))return t.filters.map(e=>mm(e)).join(",");{const e=t.filters.map(n=>mm(n)).join(",");return`${t.op}(${e})`}}function BC(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Hn(r.value,i.value)}(t,e):t instanceof Ln?function(r,i){return i instanceof Ln&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&BC(o,i.filters[a]),!0):!1}(t,e):void Z()}function zC(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${mo(n.value)}`}(t):t instanceof Ln?function(n){return n.op.toString()+" {"+n.getFilters().map(zC).join(" ,")+"}"}(t):"Filter"}class hM extends We{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class dM extends We{constructor(e,n){super(e,"in",n),this.keys=WC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fM extends We{constructor(e,n){super(e,"not-in",n),this.keys=WC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class pM extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return s_(n)&&pl(n.arrayValue,this.value)}}class mM extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pl(this.value.arrayValue,n)}}class gM extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(pl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pl(this.value.arrayValue,n)}}class _M extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!s_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pl(this.value.arrayValue,r))}}/**
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
 */class yM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function LE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yM(t,e,n,r,i,s,o)}function o_(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mo(r)).join(",")),e.ue=n}return e.ue}function a_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!BC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!DE(t.startAt,e.startAt)&&DE(t.endAt,e.endAt)}function gm(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vM(t,e,n,r,i,s,o,a){return new Lo(t,e,n,r,i,s,o,a)}function Yh(t){return new Lo(t)}function ME(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $C(t){return t.collectionGroup!==null}function La(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(st.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ml(s,r))}),n.has(st.keyField().canonicalString())||e.ce.push(new ml(st.keyField(),r))}return e.ce}function Wn(t){const e=te(t);return e.le||(e.le=wM(e,La(t))),e.le}function wM(t,e){if(t.limitType==="F")return LE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ml(i.field,s)});const n=t.endAt?new eh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eh(t.startAt.position,t.startAt.inclusive):null;return LE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _m(t,e){const n=t.filters.concat([e]);return new Lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function th(t,e,n){return new Lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xh(t,e){return a_(Wn(t),Wn(e))&&t.limitType===e.limitType}function qC(t){return`${o_(Wn(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>zC(i)).join(", ")}]`),Qh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>mo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>mo(i)).join(",")),`Target(${r})`}(Wn(t))}; limitType=${t.limitType})`}function Jh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of La(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=OE(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,La(r),i)||r.endAt&&!function(o,a,u){const c=OE(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,La(r),i))}(t,e)}function EM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HC(t){return(e,n)=>{let r=!1;for(const i of La(t)){const s=TM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TM(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?po(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=new Ge(K.comparator);function Cr(){return IM}const GC=new Ge(K.comparator);function Ea(...t){let e=GC;for(const n of t)e=e.insert(n.key,n);return e}function KC(t){let e=GC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vi(){return Ma()}function QC(){return Ma()}function Ma(){return new Mo(t=>t.toString(),(t,e)=>t.isEqual(e))}const SM=new Ge(K.comparator),CM=new ft(K.comparator);function ce(...t){let e=CM;for(const n of t)e=e.add(n);return e}const RM=new ft(pe);function AM(){return RM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zc(e)?"-0":e}}function YC(t){return{integerValue:""+t}}function XC(t,e){return iM(e)?YC(e):l_(t,e)}/**
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
 */class Zh{constructor(){this._=void 0}}function kM(t,e,n){return t instanceof gl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&r_(s)&&(s=i_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof go?ZC(t,e):t instanceof _o?eR(t,e):function(i,s){const o=JC(i,s),a=VE(o)+VE(i.Pe);return pm(o)&&pm(i.Pe)?YC(a):l_(i.serializer,a)}(t,e)}function PM(t,e,n){return t instanceof go?ZC(t,e):t instanceof _o?eR(t,e):n}function JC(t,e){return t instanceof _l?function(r){return pm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class gl extends Zh{}class go extends Zh{constructor(e){super(),this.elements=e}}function ZC(t,e){const n=tR(e);for(const r of t.elements)n.some(i=>Hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class _o extends Zh{constructor(e){super(),this.elements=e}}function eR(t,e){let n=tR(e);for(const r of t.elements)n=n.filter(i=>!Hn(i,r));return{arrayValue:{values:n}}}class _l extends Zh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function VE(t){return Ve(t.integerValue||t.doubleValue)}function tR(t){return s_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n){this.field=e,this.transform=n}}function NM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof go&&i instanceof go||r instanceof _o&&i instanceof _o?ho(r.elements,i.elements,Hn):r instanceof _l&&i instanceof _l?Hn(r.Pe,i.Pe):r instanceof gl&&i instanceof gl}(t.transform,e.transform)}class xM{constructor(e,n){this.version=e,this.transformResults=n}}class xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class td{}function nR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iR(t.key,xn.none()):new Wl(t.key,t.data,xn.none());{const n=t.data,r=Bt.empty();let i=new ft(st.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ti(t.key,r,new tn(i.toArray()),xn.none())}}function bM(t,e,n){t instanceof Wl?function(i,s,o){const a=i.value.clone(),u=jE(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ti?function(i,s,o){if(!mc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=jE(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(rR(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Va(t,e,n,r){return t instanceof Wl?function(s,o,a,u){if(!mc(s.precondition,o))return a;const c=s.value.clone(),h=UE(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ti?function(s,o,a,u){if(!mc(s.precondition,o))return a;const c=UE(s.fieldTransforms,u,o),h=o.data;return h.setAll(rR(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return mc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function OM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=JC(r.transform,i||null);s!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,s))}return n||null}function FE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ho(r,i,(s,o)=>NM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wl extends td{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ti extends td{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jE(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,PM(o,a,n[i]))}return r}function UE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,kM(s,o,e))}return r}class iR extends td{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DM extends td{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&bM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=QC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=nR(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,(n,r)=>FE(n,r))&&ho(this.baseMutations,e.baseMutations,(n,r)=>FE(n,r))}}class u_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=function(){return SM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new u_(e,n,r,i)}}/**
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
 */class MM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class VM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,he;function FM(t){switch(t){default:return Z();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function sR(t){if(t===void 0)return Sr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Be.OK:return V.OK;case Be.CANCELLED:return V.CANCELLED;case Be.UNKNOWN:return V.UNKNOWN;case Be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Be.INTERNAL:return V.INTERNAL;case Be.UNAVAILABLE:return V.UNAVAILABLE;case Be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Be.NOT_FOUND:return V.NOT_FOUND;case Be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Be.ABORTED:return V.ABORTED;case Be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Be.DATA_LOSS:return V.DATA_LOSS;default:return Z()}}(he=Be||(Be={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jM(){return new TextEncoder}/**
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
 */const UM=new Wi([4294967295,4294967295],0);function BE(t){const e=jM().encode(t),n=new AC;return n.update(e),new Uint8Array(n.digest())}function zE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wi([n,r],0),new Wi([i,s],0)]}class c_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ta(`Invalid padding: ${n}`);if(r<0)throw new Ta(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ta(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ta(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Wi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Wi.fromNumber(r)));return i.compare(UM)===1&&(i=new Wi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=BE(e),[r,i]=zE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new c_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=BE(e),[r,i]=zE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$l.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nd(ee.min(),i,new Ge(pe),Cr(),ce())}}class $l{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $l(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class oR{constructor(e,n){this.targetId=e,this.me=n}}class aR{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class WE{constructor(){this.fe=0,this.ge=qE(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),n=ce(),r=ce();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new $l(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=qE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class BM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cr(),this.qe=$E(),this.Qe=new Ge(pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(gm(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Rt.newNoDocument(o,ee.min()))}else ye(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Zi(r).toUint8Array()}catch(u){if(u instanceof MC)return Ji("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new c_(o,i,s)}catch(u){return Ji(u instanceof Ta?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&gm(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Rt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ce();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new nd(e,n,this.Qe,this.ke,r);return this.ke=Cr(),this.qe=$E(),this.Qe=new Ge(pe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new WE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ft(pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new WE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $E(){return new Ge(K.comparator)}function qE(){return new Ge(K.comparator)}const zM={asc:"ASCENDING",desc:"DESCENDING"},WM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$M={and:"AND",or:"OR"};class qM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ym(t,e){return t.useProto3Json||Qh(e)?e:{value:e}}function nh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function HM(t,e){return nh(t,e.toTimestamp())}function $n(t){return ye(!!t),ee.fromTimestamp(function(n){const r=hi(n);return new qe(r.seconds,r.nanos)}(t))}function h_(t,e){return vm(t,e).canonicalString()}function vm(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uR(t){const e=Ae.fromString(t);return ye(pR(e)),e}function wm(t,e){return h_(t.databaseId,e.path)}function zf(t,e){const n=uR(e);if(n.get(1)!==t.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(hR(n))}function cR(t,e){return h_(t.databaseId,e)}function GM(t){const e=uR(t);return e.length===4?Ae.emptyPath():hR(e)}function Em(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hR(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function HE(t,e,n){return{name:wm(t,e),fields:n.value.mapValue.fields}}function KM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ye(h===void 0||typeof h=="string"),at.fromBase64String(h||"")):(ye(h===void 0||h instanceof Buffer||h instanceof Uint8Array),at.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?V.UNKNOWN:sR(c.code);return new $(h,c.message||"")}(o);n=new aR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zf(t,r.document.name),s=$n(r.document.updateTime),o=r.document.createTime?$n(r.document.createTime):ee.min(),a=new Bt({mapValue:{fields:r.document.fields}}),u=Rt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new gc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zf(t,r.document),s=r.readTime?$n(r.readTime):ee.min(),o=Rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new gc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zf(t,r.document),s=r.removedTargetIds||[];n=new gc([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new VM(i,s),a=r.targetId;n=new oR(a,o)}}return n}function QM(t,e){let n;if(e instanceof Wl)n={update:HE(t,e.key,e.value)};else if(e instanceof iR)n={delete:wm(t,e.key)};else if(e instanceof Ti)n={update:HE(t,e.key,e.data),updateMask:i2(e.fieldMask)};else{if(!(e instanceof DM))return Z();n={verify:wm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof gl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _l)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:HM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function YM(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?$n(i.updateTime):$n(s);return o.isEqual(ee.min())&&(o=$n(s)),new xM(o,i.transformResults||[])}(n,e))):[]}function XM(t,e){return{documents:[cR(t,e.path)]}}function JM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cR(t,i);const s=function(c){if(c.length!==0)return fR(Ln.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Rs(m.field),direction:t2(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ym(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function ZM(t){let e=GM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=dR(f);return m instanceof Ln&&UC(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(I){return new ml(As(I.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Qh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,y=f.values||[];return new eh(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,y=f.values||[];return new eh(y,m)}(n.endAt)),vM(e,i,o,s,a,"F",u,c)}function e2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=As(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=As(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=As(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return We.create(As(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ln.create(n.compositeFilter.filters.map(r=>dR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function t2(t){return zM[t]}function n2(t){return WM[t]}function r2(t){return $M[t]}function Rs(t){return{fieldPath:t.canonicalString()}}function As(t){return st.fromServerFormat(t.fieldPath)}function fR(t){return t instanceof We?function(n){if(n.op==="=="){if(bE(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NAN"}};if(xE(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bE(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NOT_NAN"}};if(xE(n.value))return{unaryFilter:{field:Rs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rs(n.field),op:n2(n.op),value:n.value}}}(t):t instanceof Ln?function(n){const r=n.getFilters().map(i=>fR(i));return r.length===1?r[0]:{compositeFilter:{op:r2(n.op),filters:r}}}(t):Z()}function i2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.ct=e}}function o2(t){const e=ZM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?th(e,e.limit,"L"):e}/**
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
 */class a2{constructor(){this.un=new l2}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ci.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class l2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ft(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ft(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new yo(0)}static kn(){return new yo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(){this.changes=new Mo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class c2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Va(r.mutation,i,tn.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=Vi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ea();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Cr();const o=Ma(),a=function(){return Ma()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ti)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Va(h.mutation,c,h.mutation.getFieldMask(),qe.now())):o.set(c.key,tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new c2(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ma();let i=new Ge((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||tn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||ce()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=QC();h.forEach(m=>{if(!s.has(m)){const y=nR(n.get(m),r.get(m));y!==null&&f.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$C(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Vi());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ce())).next(h=>({batchId:a,changes:KC(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Ea();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ea();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(f,m){return new Lo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Rt.newInvalidDocument(h)))});let a=Ea();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Va(h.mutation,c,tn.empty(),qe.now()),Jh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:$n(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:o2(i.bundledQuery),readTime:$n(i.readTime)}}(n)),F.resolve()}}/**
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
 */class f2{constructor(){this.overlays=new Ge(K.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Vi(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ge((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Vi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Vi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MM(n,r));let s=this.Ir.get(n);s===void 0&&(s=ce(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class p2{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.Tr=new ft(nt.Er),this.dr=new ft(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ae([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ae([])),r=new nt(n,e),i=new nt(n,e+1);let s=ce();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||pe(e.wr,n.wr)}static Ar(e,n){return pe(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ft(nt.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(pe);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new nt(new K(s),0);let a=new ft(pe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.Mr=e,this.docs=function(){return new Ge(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Rt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cr();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||eM(ZL(h),r)<=0||(i.has(h.key)||Jh(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _2(this)}getSize(e){return F.resolve(this.size)}}class _2 extends u2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e){this.persistence=e,this.Nr=new Mo(n=>o_(n),a_),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new d_,this.targetCount=0,this.kr=yo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new yo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new n_(0),this.Kr=!1,this.Kr=!0,this.$r=new p2,this.referenceDelegate=e(this),this.Ur=new y2(this),this.indexManager=new a2,this.remoteDocumentCache=function(i){return new g2(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new s2(n),this.Gr=new d2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new f2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new m2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new w2(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class w2 extends nM{constructor(e){super(),this.currentSequenceNumber=e}}class f_{constructor(e){this.persistence=e,this.Jr=new d_,this.Yr=null}static Zr(e){return new f_(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new p_(e,n.fromCache,r,i)}}/**
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
 */class E2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class T2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return lb()?8:rM(kt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new E2;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(la()<=ue.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(la()<=ue.DEBUG&&H("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(la()<=ue.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wn(n))):F.resolve())}Yi(e,n){if(ME(n))return F.resolve(null);let r=Wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=th(n,null,"F"),r=Wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,th(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return ME(n)||i.isEqual(ee.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(la()<=ue.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cs(n)),this.rs(e,o,n,JL(i,-1)).next(a=>a))})}ts(e,n){let r=new ft(HC(e));return n.forEach((i,s)=>{Jh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return la()<=ue.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.Ji.getDocumentsMatchingQuery(e,n,ci.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ge(pe),this._s=new Mo(s=>o_(s),a_),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new h2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function S2(t,e,n,r){return new I2(t,e,n,r)}async function mR(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ce();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function C2(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let y=F.resolve();return m.forEach(I=>{y=y.next(()=>h.getEntry(u,I)).next(P=>{const N=c.docVersions.get(I);ye(N!==null),P.version.compareTo(N)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),h.addEntry(P)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ce();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function gR(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function R2(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(at.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(f,y),function(P,N,T){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,y,h)&&a.push(n.Ur.updateTargetData(s,y))});let u=Cr(),c=ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(A2(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(ee.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function A2(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function k2(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function P2(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Tm(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zl(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function GE(t,e,n){const r=te(t);let i=ee.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=te(u),m=f._s.get(h);return m!==void 0?F.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,Wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ce())).next(a=>(N2(r,EM(e),a),{documents:a,Ts:s})))}function N2(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class KE{constructor(){this.activeTargetIds=AM()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class x2{constructor(){this.so=new KE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new KE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class b2{_o(e){}shutdown(){}}/**
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
 */class QE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $u=null;function Wf(){return $u===null?$u=function(){return 268435456+Math.round(2147483648*Math.random())}():$u++,"0x"+$u.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class L2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Wf(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(H("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ji("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Do}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=O2[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Wf();return new Promise((o,a)=>{const u=new kC;u.setWithCredentials(!0),u.listenOnce(PC.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case fc.NO_ERROR:const h=u.getResponseJson();H(It,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case fc.TIMEOUT:H(It,`RPC '${e}' ${s} timed out`),a(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case fc.HTTP_ERROR:const f=u.getStatus();if(H(It,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const I=function(N){const T=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(y.status);a(new $(I,y.message))}else a(new $(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new $(V.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(It,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(It,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Wf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bC(),a=xC(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");H(It,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,y=!1;const I=new D2({Io:N=>{y?H(It,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(H(It,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),H(It,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},To:()=>f.close()}),P=(N,T,w)=>{N.listen(T,A=>{try{w(A)}catch(D){setTimeout(()=>{throw D},0)}})};return P(f,wa.EventType.OPEN,()=>{y||(H(It,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),P(f,wa.EventType.CLOSE,()=>{y||(y=!0,H(It,`RPC '${e}' stream ${i} transport closed`),I.So())}),P(f,wa.EventType.ERROR,N=>{y||(y=!0,Ji(It,`RPC '${e}' stream ${i} transport errored:`,N),I.So(new $(V.UNAVAILABLE,"The operation could not be completed")))}),P(f,wa.EventType.MESSAGE,N=>{var T;if(!y){const w=N.data[0];ye(!!w);const A=w,D=A.error||((T=A[0])===null||T===void 0?void 0:T.error);if(D){H(It,`RPC '${e}' stream ${i} received error:`,D);const O=D.status;let j=function(S){const R=Be[S];if(R!==void 0)return sR(R)}(O),E=D.message;j===void 0&&(j=V.INTERNAL,E="Unknown error status: "+O+" with message "+D.message),y=!0,I.So(new $(j,E)),f.close()}else H(It,`RPC '${e}' stream ${i} received:`,w),I.bo(w)}}),P(a,NC.STAT_EVENT,N=>{N.stat===hm.PROXY?H(It,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===hm.NOPROXY&&H(It,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function $f(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){return new qM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _R(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class M2 extends yR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=KM(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?$n(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Em(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=gm(u)?{documents:XM(s,u)}:{query:JM(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=lR(s,o.resumeToken);const c=ym(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=nh(s,o.snapshotVersion.toTimestamp());const c=ym(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=e2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Em(this.serializer),n.removeTarget=e,this.a_(n)}}class V2 extends yR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=YM(e.writeResults,e.commitTime),r=$n(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Em(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QM(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,vm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,vm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class j2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Sr(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ms(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=te(u);c.L_.add(4),await ql(c),c.q_.set("Unknown"),c.L_.delete(4),await id(c)}(this))})}),this.q_=new j2(r,i)}}async function id(t){if(ms(t))for(const e of t.B_)await e(!0)}async function ql(t){for(const e of t.B_)await e(!1)}function vR(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),y_(n)?__(n):Vo(n).r_()&&g_(n,e))}function m_(t,e){const n=te(t),r=Vo(n);n.N_.delete(e),r.r_()&&wR(n,e),n.N_.size===0&&(r.r_()?r.o_():ms(n)&&n.q_.set("Unknown"))}function g_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vo(t).A_(e)}function wR(t,e){t.Q_.xe(e),Vo(t).R_(e)}function __(t){t.Q_=new BM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Vo(t).start(),t.q_.v_()}function y_(t){return ms(t)&&!Vo(t).n_()&&t.N_.size>0}function ms(t){return te(t).L_.size===0}function ER(t){t.Q_=void 0}async function B2(t){t.q_.set("Online")}async function z2(t){t.N_.forEach((e,n)=>{g_(t,e)})}async function W2(t,e){ER(t),y_(t)?(t.q_.M_(e),__(t)):t.q_.set("Unknown")}async function $2(t,e,n){if(t.q_.set("Online"),e instanceof aR&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rh(t,r)}else if(e instanceof gc?t.Q_.Ke(e):e instanceof oR?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await gR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(at.EMPTY_BYTE_STRING,h.snapshotVersion)),wR(s,u);const f=new Kr(h.target,u,c,h.sequenceNumber);g_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await rh(t,r)}}async function rh(t,e,n){if(!zl(e))throw e;t.L_.add(1),await ql(t),t.q_.set("Offline"),n||(n=()=>gR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await id(t)})}function TR(t,e){return e().catch(n=>rh(t,n,e))}async function sd(t){const e=te(t),n=di(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;q2(e);)try{const i=await k2(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,H2(e,i)}catch(i){await rh(e,i)}IR(e)&&SR(e)}function q2(t){return ms(t)&&t.O_.length<10}function H2(t,e){t.O_.push(e);const n=di(t);n.r_()&&n.V_&&n.m_(e.mutations)}function IR(t){return ms(t)&&!di(t).n_()&&t.O_.length>0}function SR(t){di(t).start()}async function G2(t){di(t).p_()}async function K2(t){const e=di(t);for(const n of t.O_)e.m_(n.mutations)}async function Q2(t,e,n){const r=t.O_.shift(),i=u_.from(r,e,n);await TR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sd(t)}async function Y2(t,e){e&&di(t).V_&&await async function(r,i){if(function(o){return FM(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();di(r).s_(),await TR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await sd(r)}}(t,e),IR(t)&&SR(t)}async function YE(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ms(n);n.L_.add(3),await ql(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await id(n)}async function X2(t,e){const n=te(t);e?(n.L_.delete(2),await id(n)):e||(n.L_.add(2),await ql(n),n.q_.set("Unknown"))}function Vo(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new M2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:B2.bind(null,t),Ro:z2.bind(null,t),mo:W2.bind(null,t),d_:$2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),y_(t)?__(t):t.q_.set("Unknown")):(await t.K_.stop(),ER(t))})),t.K_}function di(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new V2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:G2.bind(null,t),mo:Y2.bind(null,t),f_:K2.bind(null,t),g_:Q2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await sd(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new v_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function w_(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),zl(t))return new $(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ea(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new Js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.W_=new Ge(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vo(e,n,Js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Z2{constructor(){this.queries=JE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=JE(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function JE(){return new Mo(t=>qC(t),Xh)}async function E_(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new J2,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=w_(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&I_(n)}async function T_(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function eV(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&I_(n)}function tV(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function I_(t){t.Y_.forEach(e=>{e.next()})}var Im,ZE;(ZE=Im||(Im={})).ea="default",ZE.Cache="cache";class S_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Im.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.key=e}}class RR{constructor(e){this.key=e}}class nV{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=HC(e),this.Ra=new Js(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new XE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),y=Jh(this.query,f)?f:null,I=!!m&&this.mutatedKeys.has(m.key),P=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let N=!1;m&&y?m.data.isEqual(y.data)?I!==P&&(r.track({type:3,doc:y}),N=!0):this.ga(m,y)||(r.track({type:2,doc:y}),N=!0,(u&&this.Aa(y,u)>0||c&&this.Aa(y,c)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),N=!0):m&&!y&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(a=!0)),N&&(y?(o=o.add(y),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(y,I){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return P(y)-P(I)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new vo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new XE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new RR(r))}),this.da.forEach(r=>{e.has(r)||n.push(new CR(r))}),n}ba(e){this.Ta=e.Ts,this.da=ce();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return vo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class rV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iV{constructor(e){this.key=e,this.va=!1}}class sV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Mo(a=>qC(a),Xh),this.Ma=new Map,this.xa=new Set,this.Oa=new Ge(K.comparator),this.Na=new Map,this.La=new d_,this.Ba={},this.ka=new Map,this.qa=yo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function oV(t,e,n=!0){const r=bR(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await AR(r,e,n,!0),i}async function aV(t,e){const n=bR(t);await AR(n,e,!0,!1)}async function AR(t,e,n,r){const i=await P2(t.localStore,Wn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await lV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&vR(t.remoteStore,i),a}async function lV(t,e,n,r,i){t.Ka=(f,m,y)=>async function(P,N,T,w){let A=N.view.ma(T);A.ns&&(A=await GE(P.localStore,N.query,!1).then(({documents:E})=>N.view.ma(E,A)));const D=w&&w.targetChanges.get(N.targetId),O=w&&w.targetMismatches.get(N.targetId)!=null,j=N.view.applyChanges(A,P.isPrimaryClient,D,O);return t0(P,N.targetId,j.wa),j.snapshot}(t,f,m,y);const s=await GE(t.localStore,e,!0),o=new nV(e,s.Ts),a=o.ma(s.documents),u=$l.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);t0(t,n,c.wa);const h=new rV(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function uV(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Xh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Tm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&m_(r.remoteStore,i.targetId),Sm(r,i.targetId)}).catch(Bl)):(Sm(r,i.targetId),await Tm(r.localStore,i.targetId,!0))}async function cV(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),m_(n.remoteStore,r.targetId))}async function hV(t,e,n){const r=yV(t);try{const i=await function(o,a){const u=te(o),c=qe.now(),h=a.reduce((y,I)=>y.add(I.key),ce());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let I=Cr(),P=ce();return u.cs.getEntries(y,h).next(N=>{I=N,I.forEach((T,w)=>{w.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,I)).next(N=>{f=N;const T=[];for(const w of a){const A=OM(w,f.get(w.key).overlayedDocument);A!=null&&T.push(new Ti(w.key,A,VC(A.value.mapValue),xn.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,T,a)}).next(N=>{m=N;const T=N.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(y,N.batchId,T)})}).then(()=>({batchId:m.batchId,changes:KC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ge(pe)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Hl(r,i.changes),await sd(r.remoteStore)}catch(i){const s=w_(i,"Failed to persist write");n.reject(s)}}async function kR(t,e){const n=te(t);try{const r=await R2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ye(o.va):i.removedDocuments.size>0&&(ye(o.va),o.va=!1))}),await Hl(n,r,e)}catch(r){await Bl(r)}}function e0(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=te(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&I_(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dV(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ge(K.comparator);o=o.insert(s,Rt.newNoDocument(s,ee.min()));const a=ce().add(s),u=new nd(ee.min(),new Map,new Ge(pe),o,a);await kR(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),C_(r)}else await Tm(r.localStore,e,!1).then(()=>Sm(r,e,n)).catch(Bl)}async function fV(t,e){const n=te(t),r=e.batch.batchId;try{const i=await C2(n.localStore,e);NR(n,r,null),PR(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hl(n,i)}catch(i){await Bl(i)}}async function pV(t,e,n){const r=te(t);try{const i=await function(o,a){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ye(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);NR(r,e,n),PR(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Hl(r,i)}catch(i){await Bl(i)}}function PR(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function NR(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Sm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||xR(t,r)})}function xR(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(m_(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),C_(t))}function t0(t,e,n){for(const r of n)r instanceof CR?(t.La.addReference(r.key,e),mV(t,r)):r instanceof RR?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||xR(t,r.key)):Z()}function mV(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),C_(t))}function C_(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ae.fromString(e)),r=t.qa.next();t.Na.set(r,new iV(n)),t.Oa=t.Oa.insert(n,r),vR(t.remoteStore,new Kr(Wn(Yh(n.path)),r,"TargetPurposeLimboResolution",n_.oe))}}async function Hl(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=p_.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=te(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,m=>F.forEach(m.$i,y=>h.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>F.forEach(m.Ui,y=>h.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!zl(f))throw f;H("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const y=h.os.get(m),I=y.snapshotVersion,P=y.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(m,P)}}}(r.localStore,s))}async function gV(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await mR(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new $(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hl(n,r.hs)}}function _V(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return ce().add(r.key);{let i=ce();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function bR(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_V.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dV.bind(null,e),e.Ca.d_=eV.bind(null,e.eventManager),e.Ca.$a=tV.bind(null,e.eventManager),e}function yV(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pV.bind(null,e),e}class ih{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return S2(this.persistence,new T2,e.initialUser,this.serializer)}Ga(e){return new v2(f_.Zr,this.serializer)}Wa(e){return new x2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ih.provider={build:()=>new ih};class Cm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>e0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gV.bind(null,this.syncEngine),await X2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Z2}()}createDatastore(e){const n=rd(e.databaseInfo.databaseId),r=function(s){return new L2(s)}(e.databaseInfo);return function(s,o,a,u){return new F2(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new U2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>e0(this.syncEngine,n,0),function(){return QE.D()?new QE:new b2}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new sV(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ql(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Cm.provider={build:()=>new Cm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class R_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=St.UNAUTHENTICATED,this.clientId=t_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=w_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qf(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function n0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wV(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>YE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>YE(e.remoteStore,i)),t._onlineComponents=e}async function wV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await qf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ji("Error using user provided cache. Falling back to memory cache: "+n),await qf(t,new ih)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await qf(t,new ih);return t._offlineComponents}async function OR(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await n0(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await n0(t,new Cm))),t._onlineComponents}function EV(t){return OR(t).then(e=>e.syncEngine)}async function sh(t){const e=await OR(t),n=e.eventManager;return n.onListen=oV.bind(null,e.syncEngine),n.onUnlisten=uV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=aV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cV.bind(null,e.syncEngine),n}function TV(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new R_({next:m=>{h.Za(),o.enqueueAndForget(()=>T_(s,f));const y=m.docs.has(a);!y&&m.fromCache?c.reject(new $(V.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new S_(Yh(a.path),h,{includeMetadataChanges:!0,_a:!0});return E_(s,f)}(await sh(t),t.asyncQueue,e,n,r)),r.promise}function IV(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new R_({next:m=>{h.Za(),o.enqueueAndForget(()=>T_(s,f)),m.fromCache&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new S_(a,h,{includeMetadataChanges:!0,_a:!0});return E_(s,f)}(await sh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function DR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t,e,n){if(!n)throw new $(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MR(t,e,n,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function i0(t){if(!K.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function s0(t){if(K.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function od(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=od(t);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function SV(t,e){if(e<=0)throw new $(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ad{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new o0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new o0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new DC;switch(r.type){case"firstParty":return new GL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=r0.get(n);r&&(H("ComponentProvider","Removing Datastore"),r0.delete(n),r.terminate())}(this),Promise.resolve()}}function VR(t,e,n,r={}){var i;const s=(t=Kt(t,ad))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=St.MOCK_USER;else{a=FS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new St(c)}t._authCredentials=new $L(new OC(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xn(this.firestore,e,this._query)}}class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class gr extends Xn{constructor(e,n,r){super(e,n,Yh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new K(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function ts(t,e,...n){if(t=ge(t),LR("collection","path",e),t instanceof ad){const r=Ae.fromString(e,...n);return s0(r),new gr(t,null,r)}{if(!(t instanceof pt||t instanceof gr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return s0(r),new gr(t.firestore,null,r)}}function Mt(t,e,...n){if(t=ge(t),arguments.length===1&&(e=t_.newId()),LR("doc","path",e),t instanceof ad){const r=Ae.fromString(e,...n);return i0(r),new pt(t,null,new K(r))}{if(!(t instanceof pt||t instanceof gr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return i0(r),new pt(t.firestore,t instanceof gr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _R(this,"async_queue_retry"),this.Vu=()=>{const r=$f();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=$f();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=$f();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new mr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!zl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Sr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=v_.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function l0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Rr extends ad{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new a0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new a0(e),this._firestoreClient=void 0,await e}}}function FR(t,e){const n=typeof t=="object"?t:qh(),r=typeof t=="string"?t:"(default)",i=ds(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=LS("firestore");s&&VR(i,...s)}return i}function Gl(t){if(t._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CV(t),t._firestoreClient}function CV(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new oM(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,DR(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new vV(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(at.fromBase64String(e))}catch(n){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ns(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */class ud{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV=/^__.*__$/;class AV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ti(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wl(e,this.data,n,this.fieldTransforms)}}class jR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ti(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function UR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class cd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new cd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return oh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(UR(this.Cu)&&RV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class kV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rd(e)}Qu(e,n,r,i=!1){return new cd({Cu:e,methodName:n,qu:r,path:st.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hd(t){const e=t._freezeSettings(),n=rd(t._databaseId);return new kV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BR(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);x_("Data must be an object, but it was:",o,r);const a=WR(r,o);let u,c;if(s.merge)u=new tn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=Rm(e,f,n);if(!o.contains(m))throw new $(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);qR(h,m)||h.push(m)}u=new tn(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new AV(new Bt(a),u,c)}class dd extends Ii{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dd}}function zR(t,e,n){return new cd({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class A_ extends Ii{_toFieldTransform(e){return new ed(e.path,new gl)}isEqual(e){return e instanceof A_}}class k_ extends Ii{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=zR(this,e,!0),r=this.Ku.map(s=>gs(s,n)),i=new go(r);return new ed(e.path,i)}isEqual(e){return e instanceof k_&&uo(this.Ku,e.Ku)}}class P_ extends Ii{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=zR(this,e,!0),r=this.Ku.map(s=>gs(s,n)),i=new _o(r);return new ed(e.path,i)}isEqual(e){return e instanceof P_&&uo(this.Ku,e.Ku)}}class N_ extends Ii{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new _l(e.serializer,XC(e.serializer,this.$u));return new ed(e.path,n)}isEqual(e){return e instanceof N_&&this.$u===e.$u}}function PV(t,e,n,r){const i=t.Qu(1,e,n);x_("Data must be an object, but it was:",i,r);const s=[],o=Bt.empty();ps(r,(u,c)=>{const h=b_(e,u,n);c=ge(c);const f=i.Nu(h);if(c instanceof dd)s.push(h);else{const m=gs(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new tn(s);return new jR(o,a,i.fieldTransforms)}function NV(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Rm(e,r,n)],u=[i];if(s.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Rm(e,s[m])),u.push(s[m+1]);const c=[],h=Bt.empty();for(let m=a.length-1;m>=0;--m)if(!qR(c,a[m])){const y=a[m];let I=u[m];I=ge(I);const P=o.Nu(y);if(I instanceof dd)c.push(y);else{const N=gs(I,P);N!=null&&(c.push(y),h.set(y,N))}}const f=new tn(c);return new jR(h,f,o.fieldTransforms)}function xV(t,e,n,r=!1){return gs(n,t.Qu(r?4:3,e))}function gs(t,e){if($R(t=ge(t)))return x_("Unsupported field value:",e,t),WR(t,e);if(t instanceof Ii)return function(r,i){if(!UR(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=gs(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:nh(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nh(i.serializer,s)}}if(r instanceof ld)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ns)return{bytesValue:lR(i.serializer,r._byteString)};if(r instanceof pt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:h_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ud)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return l_(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${od(r)}`)}(t,e)}function WR(t,e){const n={};return LC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,i)=>{const s=gs(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $R(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof ld||t instanceof ns||t instanceof pt||t instanceof Ii||t instanceof ud)}function x_(t,e,n){if(!$R(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=od(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Rm(t,e,n){if((e=ge(e))instanceof Kl)return e._internalPath;if(typeof e=="string")return b_(t,e);throw oh("Field path arguments must be of type string or ",t,!1,void 0,n)}const bV=new RegExp("[~\\*/\\[\\]]");function b_(t,e,n){if(e.search(bV)>=0)throw oh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kl(...e.split("."))._internalPath}catch{throw oh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(V.INVALID_ARGUMENT,a+t+u)}function qR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OV extends HR{data(){return super.data()}}function fd(t,e){return typeof e=="string"?b_(t,e):e instanceof Kl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class O_{}class pd extends O_{}function Ql(t,e,...n){let r=[];e instanceof O_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof md).length,a=s.filter(u=>u instanceof Yl).length;if(o>1||o>0&&a>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Yl extends pd{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yl(e,n,r)}_apply(e){const n=this._parse(e);return KR(e._query,n),new Xn(e.firestore,e.converter,_m(e._query,n))}_parse(e){const n=hd(e.firestore);return function(s,o,a,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){c0(f,h);const y=[];for(const I of f)y.push(u0(u,s,I));m={arrayValue:{values:y}}}else m=u0(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||c0(f,h),m=xV(a,o,f,h==="in"||h==="not-in");return We.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function wo(t,e,n){const r=e,i=fd("where",t);return Yl._create(i,r,n)}class md extends O_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new md(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)KR(o,u),o=_m(o,u)}(e._query,n),new Xn(e.firestore,e.converter,_m(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gd extends pd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gd(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ml(s,o)}(e._query,this._field,this._direction);return new Xn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Lo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function D_(t,e="asc"){const n=e,r=fd("orderBy",t);return gd._create(r,n)}class _d extends pd{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new _d(e,n,r)}_apply(e){return new Xn(e.firestore,e.converter,th(e._query,this._limit,this._limitType))}}function L_(t){return SV("limit",t),_d._create("limit",t,"F")}function u0(t,e,n){if(typeof(n=ge(n))=="string"){if(n==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$C(e)&&n.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!K.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return NE(t,new K(r))}if(n instanceof pt)return NE(t,n._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${od(n)}.`)}function c0(t,e){if(!Array.isArray(t)||t.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KR(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class QR{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ve(o.doubleValue));return new ud(s)}convertGeoPoint(e){return new ld(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=i_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fl(e));default:return null}}convertTimestamp(e){const n=hi(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);ye(pR(r));const i=new fo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class M_ extends HR{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fa extends M_{data(e={}){return super.data(e)}}class V_{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Bs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fa(this._firestore,this._userDataWriter,r.key,r,new Bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Fa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Bs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Fa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Bs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:DV(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t){t=Kt(t,pt);const e=Kt(t.firestore,Rr);return TV(Gl(e),t._key).then(n=>ZR(e,t,n))}class F_ extends QR{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function vd(t){t=Kt(t,Xn);const e=Kt(t.firestore,Rr),n=Gl(e),r=new F_(e);return GR(t._query),IV(n,t._query).then(i=>new V_(e,r,t,i))}function XR(t,e,n){t=Kt(t,pt);const r=Kt(t.firestore,Rr),i=YR(t.converter,e);return wd(r,[BR(hd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xn.none())])}function rn(t,e,n,...r){t=Kt(t,pt);const i=Kt(t.firestore,Rr),s=hd(i);let o;return o=typeof(e=ge(e))=="string"||e instanceof Kl?NV(s,"updateDoc",t._key,e,n,r):PV(s,"updateDoc",t._key,e),wd(i,[o.toMutation(t._key,xn.exists(!0))])}function j_(t,e){const n=Kt(t.firestore,Rr),r=Mt(t),i=YR(t.converter,e);return wd(n,[BR(hd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xn.exists(!1))]).then(()=>r)}function JR(t,...e){var n,r,i;t=ge(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||l0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(l0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof pt)c=Kt(t.firestore,Rr),h=Yh(t._key.path),u={next:f=>{e[o]&&e[o](ZR(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Kt(t,Xn);c=Kt(f.firestore,Rr),h=f._query;const m=new F_(c);u={next:y=>{e[o]&&e[o](new V_(c,m,f,y))},error:e[o+1],complete:e[o+2]},GR(t._query)}return function(m,y,I,P){const N=new R_(P),T=new S_(y,N,I);return m.asyncQueue.enqueueAndForget(async()=>E_(await sh(m),T)),()=>{N.Za(),m.asyncQueue.enqueueAndForget(async()=>T_(await sh(m),T))}}(Gl(c),h,a,u)}function wd(t,e){return function(r,i){const s=new mr;return r.asyncQueue.enqueueAndForget(async()=>hV(await EV(r),i,s)),s.promise}(Gl(t),e)}function ZR(t,e,n){const r=n.docs.get(e._key),i=new F_(t);return new M_(t,i,e._key,r,new Bs(n.hasPendingWrites,n.fromCache),e.converter)}function Xl(){return new A_("serverTimestamp")}function Am(...t){return new k_("arrayUnion",t)}function km(...t){return new P_("arrayRemove",t)}function ks(t){return new N_("increment",t)}(function(e,n=!0){(function(i){Do=i})(fs),Dn(new gn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Rr(new qL(r.getProvider("auth-internal")),new QL(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fo(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Gt(CE,"4.7.3",e),Gt(CE,"4.7.3","esm2017")})();const eA=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:QR,Bytes:ns,CollectionReference:gr,DocumentReference:pt,DocumentSnapshot:M_,FieldPath:Kl,FieldValue:Ii,Firestore:Rr,FirestoreError:$,GeoPoint:ld,Query:Xn,QueryCompositeFilterConstraint:md,QueryConstraint:pd,QueryDocumentSnapshot:Fa,QueryFieldFilterConstraint:Yl,QueryLimitConstraint:_d,QueryOrderByConstraint:gd,QuerySnapshot:V_,SnapshotMetadata:Bs,Timestamp:qe,VectorValue:ud,_AutoId:t_,_ByteString:at,_DatabaseId:fo,_DocumentKey:K,_EmptyAuthCredentialsProvider:DC,_FieldPath:st,_cast:Kt,_logWarn:Ji,_validateIsNotUsedTogether:MR,addDoc:j_,arrayRemove:km,arrayUnion:Am,collection:ts,connectFirestoreEmulator:VR,doc:Mt,ensureFirestoreConfigured:Gl,executeWrite:wd,getDoc:yd,getDocs:vd,getFirestore:FR,increment:ks,limit:L_,onSnapshot:JR,orderBy:D_,query:Ql,serverTimestamp:Xl,setDoc:XR,updateDoc:rn,where:wo},Symbol.toStringTag,{value:"Module"}));var h0={};const d0="@firebase/database",f0="1.0.8";/**
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
 */let tA="";function LV(t){tA=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ul(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new MV(e)}}catch{}return new VV},Fi=nA("localStorage"),FV=nA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Wh("@firebase/database"),jV=function(){let t=1;return function(){return t++}}(),rA=function(t){const e=vb(t),n=new mb;n.update(e);const r=n.digest();return Ug.encodeByteArray(r)},Jl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Jl.apply(null,r):typeof r=="object"?e+=Ze(r):e+=r,e+=" "}return e};let ja=null,p0=!0;const UV=function(t,e){B(!0,"Can't turn on custom loggers persistently."),Zs.logLevel=ue.VERBOSE,ja=Zs.log.bind(Zs)},ht=function(...t){if(p0===!0&&(p0=!1,ja===null&&FV.get("logging_enabled")===!0&&UV()),ja){const e=Jl.apply(null,t);ja(e)}},Zl=function(t){return function(...e){ht(t,...e)}},Pm=function(...t){const e="FIREBASE INTERNAL ERROR: "+Jl(...t);Zs.error(e)},Ar=function(...t){const e=`FIREBASE FATAL ERROR: ${Jl(...t)}`;throw Zs.error(e),new Error(e)},Vt=function(...t){const e="FIREBASE WARNING: "+Jl(...t);Zs.warn(e)},BV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},U_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},zV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Eo="[MIN_NAME]",rs="[MAX_NAME]",_s=function(t,e){if(t===e)return 0;if(t===Eo||e===rs)return-1;if(e===Eo||t===rs)return 1;{const n=m0(t),r=m0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},WV=function(t,e){return t===e?0:t<e?-1:1},ua=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ze(e))},B_=function(t){if(typeof t!="object"||t===null)return Ze(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ze(e[r]),n+=":",n+=B_(t[e[r]]);return n+="}",n},iA=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function _t(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sA=function(t){B(!U_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(h.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},$V=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function HV(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const GV=new RegExp("^-?(0*)\\d{1,10}$"),KV=-2147483648,QV=2147483647,m0=function(t){if(GV.test(t)){const e=Number(t);if(e>=KV&&e<=QV)return e}return null},Fo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},YV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ua=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class XV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class _c{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_c.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="5",oA="v",aA="s",lA="r",uA="f",cA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hA="ls",dA="p",Nm="ac",fA="websocket",pA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ZV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gA(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===fA)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pA)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ZV(t)&&(n.ns=t.namespace);const i=[];return _t(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(){this.counters_={}}incrementCounter(e,n=1){Yn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return X1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf={},Gf={};function W_(t){const e=t.toString();return Hf[e]||(Hf[e]=new eF),Hf[e]}function tF(t,e){const n=t.toString();return Gf[n]||(Gf[n]=e()),Gf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Fo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="start",rF="close",iF="pLPCommand",sF="pRTLPCB",_A="id",yA="pw",vA="ser",oF="cb",aF="seg",lF="ts",uF="d",cF="dframe",wA=1870,EA=30,hF=wA-EA,dF=25e3,fF=3e4;class zs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zl(e),this.stats_=W_(n),this.urlFn=u=>(this.appCheckToken&&(u[Nm]=this.appCheckToken),gA(n,pA,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new nF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fF)),zV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $_((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===g0)this.id=a,this.password=u;else if(o===rF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[g0]="t",r[vA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[oF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[oA]=z_,this.transportSessionId&&(r[aA]=this.transportSessionId),this.lastSessionId&&(r[hA]=this.lastSessionId),this.applicationId&&(r[dA]=this.applicationId),this.appCheckToken&&(r[Nm]=this.appCheckToken),typeof location<"u"&&location.hostname&&cA.test(location.hostname)&&(r[lA]=uA);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zs.forceAllow_=!0}static forceDisallow(){zs.forceDisallow_=!0}static isAvailable(){return zs.forceAllow_?!0:!zs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$V()&&!qV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bS(n),i=iA(r,hF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[cF]="t",r[_A]=e,r[yA]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $_{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jV(),window[iF+this.uniqueCallbackIdentifier]=e,window[sF+this.uniqueCallbackIdentifier]=n,this.myIFrame=$_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ht("frame writing exception"),a.stack&&ht(a.stack),ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_A]=this.myID,e[yA]=this.myPW,e[vA]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+EA+r.length<=wA;){const o=this.pendingSegs.shift();r=r+"&"+aF+i+"="+o.seg+"&"+lF+i+"="+o.ts+"&"+uF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(dF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pF=16384,mF=45e3;let ah=null;typeof MozWebSocket<"u"?ah=MozWebSocket:typeof WebSocket<"u"&&(ah=WebSocket);class Cn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zl(this.connId),this.stats_=W_(n),this.connURL=Cn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[oA]=z_,typeof location<"u"&&location.hostname&&cA.test(location.hostname)&&(o[lA]=uA),n&&(o[aA]=n),r&&(o[hA]=r),i&&(o[Nm]=i),s&&(o[dA]=s),gA(e,fA,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fi.set("previous_websocket_failure",!0);try{let r;ab(),this.mySock=new ah(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ah!==null&&!Cn.forceDisallow_}static previouslyFailed(){return Fi.isInMemoryStorage||Fi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ul(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=iA(n,pF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Cn.responsesRequiredToBeHealthy=2;Cn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[zs,Cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Cn&&Cn.isAvailable();let r=n&&!Cn.previouslyFailed();if(e.webSocketOnly&&(n||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Cn];else{const i=this.transports_=[];for(const s of yl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);yl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=6e4,_F=5e3,yF=10*1024,vF=100*1024,Kf="t",_0="d",wF="s",y0="r",EF="e",v0="o",w0="a",E0="n",T0="p",TF="h";class IF{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zl("c:"+this.id+":"),this.transportManager_=new yl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ua(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>yF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Kf in e){const n=e[Kf];n===w0?this.upgradeIfSecondaryHealthy_():n===y0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===v0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ua("t",e),r=ua("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:T0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:w0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:E0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ua("t",e),r=ua("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ua(Kf,e);if(_0 in e){const r=e[_0];if(n===TF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===E0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wF?this.onConnectionShutdown_(r):n===y0?this.onReset_(r):n===EF?Pm("Server Error: "+r):n===v0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),z_!==r&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ua(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ua(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_F))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:T0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends IA{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new lh}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=32,S0=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new ve("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fi(t){return t.pieces_.length-t.pieceNum_}function Ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function q_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function SF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function SA(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ve(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function Dt(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return Dt(Ie(t),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function CF(t,e){const n=vl(t,0),r=vl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=_s(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function H_(t,e){if(fi(t)!==fi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fi(t)>fi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class RF{constructor(e,n){this.errorPrefix_=n,this.parts_=vl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=zh(this.parts_[r]);CA(this)}}function AF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zh(e),CA(t)}function kF(t){const e=t.parts_.pop();t.byteLength_-=zh(e),t.parts_.length>0&&(t.byteLength_-=1)}function CA(t){if(t.byteLength_>S0)throw new Error(t.errorPrefix_+"has a key path longer than "+S0+" bytes ("+t.byteLength_+").");if(t.parts_.length>I0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+I0+") or object contains a cycle "+bi(t))}function bi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_ extends IA{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new G_}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=1e3,PF=60*5*1e3,C0=30*1e3,NF=1.3,xF=3e4,bF="server_kill",R0=3;class _r extends TA{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=_r.nextPersistentConnectionId_++,this.log_=Zl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ca,this.maxReconnectDelay_=PF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");G_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&lh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ze(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ml,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;_r.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yn(e,"w")){const r=lo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=C0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Pm("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xF&&(this.reconnectDelay_=ca),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_r.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new IF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Vt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(bF)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Vt(f),u())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],tm(this.interruptReasons_)&&(this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>B_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=R0&&(this.reconnectDelay_=C0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=R0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tA.replace(/\./g,"-")]=1,Bg()?e["framework.cordova"]=1:jS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=lh.getInstance().currentlyOnline();return tm(this.interruptReasons_)&&e}}_r.nextPersistentConnectionId_=0;_r.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new se(Eo,e),i=new se(Eo,n);return this.compare(r,i)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu;class RA extends Ed{static get __EMPTY_NODE(){return qu}static set __EMPTY_NODE(e){qu=e}compare(e,n){return _s(e.name,n.name)}isDefinedOn(e){throw xo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(rs,qu)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,qu)}toString(){return".key"}}const eo=new RA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??Wt.EMPTY_NODE,this.right=s??Wt.EMPTY_NODE}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Wt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class OF{copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Wt{constructor(e,n=Wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new Wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Hu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Hu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Hu(this.root_,null,this.comparator_,!0,e)}}Wt.EMPTY_NODE=new OF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DF(t,e){return _s(t.name,e.name)}function K_(t,e){return _s(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xm;function LF(t){xm=t}const AA=function(t){return typeof t=="number"?"number:"+sA(t):"string:"+t},kA=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yn(e,".sv"),"Priority must be a string or number.")}else B(t===xm||t.isEmpty(),"priority of unexpected type.");B(t===xm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A0;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kA(this.priorityNode_)}static set __childrenNodeConstructor(e){A0=e}static get __childrenNodeConstructor(){return A0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:ie(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||fi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AA(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sA(this.value_):e+=this.value_,this.lazyHash_=rA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(n),s=tt.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PA,NA;function MF(t){PA=t}function VF(t){NA=t}class FF extends Ed{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?_s(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(rs,new tt("[PRIORITY-POST]",NA))}makePost(e,n){const r=PA(e);return new se(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Me=new FF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jF=Math.log(2);class UF{constructor(e){const n=s=>parseInt(Math.log(s)/jF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const uh=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let f,m;if(h===0)return null;if(h===1)return f=t[u],m=n?n(f):f,new it(m,f.node,it.BLACK,null,null);{const y=parseInt(h/2,10)+u,I=i(u,y),P=i(y+1,c);return f=t[y],m=n?n(f):f,new it(m,f.node,it.BLACK,I,P)}},s=function(u){let c=null,h=null,f=t.length;const m=function(I,P){const N=f-I,T=f;f-=I;const w=i(N+1,T),A=t[N],D=n?n(A):A;y(new it(D,A.node,P,null,w))},y=function(I){c?(c.left=I,c=I):(h=I,c=I)};for(let I=0;I<u.count;++I){const P=u.nextBitIsOne(),N=Math.pow(2,u.count-(I+1));P?m(N,it.BLACK):(m(N,it.BLACK),m(N,it.RED))}return h},o=new UF(t.length),a=s(o);return new Wt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qf;const Ss={};class hr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(Ss&&Me,"ChildrenNode.ts has not been loaded"),Qf=Qf||new hr({".priority":Ss},{".priority":Me}),Qf}get(e){const n=lo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Wt?n:null}hasIndex(e){return Yn(this.indexSet_,e.toString())}addIndex(e,n){B(e!==eo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(se.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=uh(r,e.getCompare()):a=Ss;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new hr(h,c)}addToIndexes(e,n){const r=Hc(this.indexes_,(i,s)=>{const o=lo(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===Ss)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(se.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),uh(a,o.getCompare())}else return Ss;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new se(e.name,a))),u.insert(e,e.node)}});return new hr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Hc(this.indexes_,i=>{if(i===Ss)return i;{const s=n.get(e.name);return s?i.remove(new se(e.name,s)):i}});return new hr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;class Y{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&kA(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ha||(ha=new Y(new Wt(K_),null,hr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ha}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ha:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new se(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ha:this.priorityNode_;return new Y(i,o,s)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{B(ie(e)!==".priority"||fi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ie(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Me,(o,a)=>{n[o]=a.val(e),r++,s&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AA(this.getPriority().val())+":"),this.forEachChild(Me,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rA(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new se(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===eu?-1:0}withIndex(e){if(e===eo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===eo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Me),i=n.getIterator(Me);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===eo?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BF extends Y{constructor(){super(new Wt(K_),Y.EMPTY_NODE,hr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const eu=new BF;Object.defineProperties(se,{MIN:{value:new se(Eo,Y.EMPTY_NODE)},MAX:{value:new se(rs,eu)}});RA.__EMPTY_NODE=Y.EMPTY_NODE;tt.__childrenNodeConstructor=Y;LF(eu);VF(eu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zF=!0;function Je(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,Je(e))}if(!(t instanceof Array)&&zF){const n=[];let r=!1;if(_t(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Je(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new se(o,u)))}}),n.length===0)return Y.EMPTY_NODE;const s=uh(n,DF,o=>o.name,K_);if(r){const o=uh(n,Me.getCompare());return new Y(s,Je(e),new hr({".priority":o},{".priority":Me}))}else return new Y(s,Je(e),hr.Default)}else{let n=Y.EMPTY_NODE;return _t(t,(r,i)=>{if(Yn(t,r)&&r.substring(0,1)!=="."){const s=Je(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Je(e))}}MF(Je);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF extends Ed{constructor(e){super(),this.indexPath_=e,B(!ae(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?_s(e.name,n.name):s}makePost(e,n){const r=Je(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,eu);return new se(rs,e)}toString(){return vl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F extends Ed{compare(e,n){const r=e.node.compareTo(n.node);return r===0?_s(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const r=Je(e);return new se(n,r)}toString(){return".value"}}const qF=new $F;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){return{type:"value",snapshotNode:t}}function To(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function wl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function El(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function HF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(wl(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(To(n,r)):o.trackChildChange(El(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Me,(i,s)=>{n.hasChild(i)||r.trackChildChange(wl(i,s))}),n.isLeafNode()||n.forEachChild(Me,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(El(i,s,o))}else r.trackChildChange(To(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.indexedFilter_=new Q_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tl.getStartPost_(e),this.endPost_=Tl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new se(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const s=this;return n.forEachChild(Me,(o,a)=>{s.matches(new se(o,a))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Tl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new se(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,y)=>f(y,m)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new se(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const y=m==null?1:o(m,u);if(h&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(El(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(wl(n,f));const P=a.updateImmediateChild(n,Y.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(To(m.name,m.node)),P.updateImmediateChild(m.name,m.node)):P}}else return r.isEmpty()?e:h&&o(c,u)>=0?(s!=null&&(s.trackChildChange(wl(c.name,c.node)),s.trackChildChange(To(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Eo}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new Y_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function KF(t){return t.loadsAllData()?new Q_(t.getIndex()):t.hasLimit()?new GF(t):new Tl(t)}function k0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===qF?n="$value":t.index_===eo?n="$key":(B(t.index_ instanceof WF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ze(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ze(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ze(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ze(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function P0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends TA{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Zl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ch.getListenId_(e,r),a={};this.listens_[o]=a;const u=k0(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),lo(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=ch.getListenId_(e,n);delete this.listens_[r]}get(e){const n=k0(e._queryParams),r=e._path.toString(),i=new Ml;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=ul(a.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QF{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(){return{value:null,children:new Map}}function bA(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,hh());const i=t.children.get(r);e=Ie(e),bA(i,e,n)}}function bm(t,e,n){t.value!==null?n(e,t.value):YF(t,(r,i)=>{const s=new ve(e.toString()+"/"+r);bm(i,s,n)})}function YF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&_t(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=10*1e3,JF=30*1e3,ZF=5*60*1e3;class e4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new XF(e);const r=N0+(JF-N0)*Math.random();Ua(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;_t(e,(i,s)=>{s>0&&Yn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ua(this.reportStats_.bind(this),Math.floor(Math.random()*2*ZF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(An||(An={}));function X_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function J_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Z_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=An.ACK_USER_WRITE,this.source=X_()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new dh(me(),n,this.revert)}}else return B(ie(this.path)===e,"operationForChild called for unrelated child."),new dh(Ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n){this.source=e,this.path=n,this.type=An.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new Il(this.source,me()):new Il(this.source,Ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=An.OVERWRITE}operationForChild(e){return ae(this.path)?new is(this.source,me(),this.snap.getImmediateChild(e)):new is(this.source,Ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=An.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new is(this.source,me(),n.value):new Io(this.source,me(),n)}else return B(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Io(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function n4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(HF(o.childName,o.snapshotNode))}),da(t,i,"child_removed",e,r,n),da(t,i,"child_added",e,r,n),da(t,i,"child_moved",s,r,n),da(t,i,"child_changed",e,r,n),da(t,i,"value",e,r,n),i}function da(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>i4(t,a,u)),o.forEach(a=>{const u=r4(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function r4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function i4(t,e,n){if(e.childName==null||n.childName==null)throw xo("Should only compare child_ events.");const r=new se(e.childName,e.snapshotNode),i=new se(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t,e){return{eventCache:t,serverCache:e}}function Ba(t,e,n,r){return Td(new pi(e,n,r),t.serverCache)}function OA(t,e,n,r){return Td(t.eventCache,new pi(e,n,r))}function fh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ss(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yf;const s4=()=>(Yf||(Yf=new Wt(WV)),Yf);class Te{constructor(e,n=s4()){this.value=e,this.children=n}static fromObject(e){let n=new Te(null);return _t(e,(r,i)=>{n=n.set(new ve(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ae(e))return null;{const r=ie(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ie(e),n);return s!=null?{path:Le(new ve(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(Ie(e)):new Te(null)}}set(e,n){if(ae(e))return new Te(n,this.children);{const r=ie(e),s=(this.children.get(r)||new Te(null)).set(Ie(e),n),o=this.children.insert(r,s);return new Te(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const i=r.remove(Ie(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Te(null):new Te(this.value,s)}else return this}}get(e){if(ae(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(Ie(e)):null}}setTree(e,n){if(ae(e))return n;{const r=ie(e),s=(this.children.get(r)||new Te(null)).setTree(Ie(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Te(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ae(e))return null;{const s=ie(e),o=this.children.get(s);return o?o.findOnPath_(Ie(e),Le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(ae(e))return this;{this.value&&r(n,this.value);const i=ie(e),s=this.children.get(i);return s?s.foreachOnPath_(Ie(e),Le(n,i),r):new Te(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.writeTree_=e}static empty(){return new bn(new Te(null))}}function za(t,e,n){if(ae(e))return new bn(new Te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Dt(i,e);return s=s.updateChild(o,n),new bn(t.writeTree_.set(i,s))}else{const i=new Te(n),s=t.writeTree_.setTree(e,i);return new bn(s)}}}function Om(t,e,n){let r=t;return _t(n,(i,s)=>{r=za(r,Le(e,i),s)}),r}function x0(t,e){if(ae(e))return bn.empty();{const n=t.writeTree_.setTree(e,new Te(null));return new bn(n)}}function Dm(t,e){return ys(t,e)!=null}function ys(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Dt(n.path,e)):null}function b0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(r,i)=>{e.push(new se(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new se(r,i.value))}),e}function oi(t,e){if(ae(e))return t;{const n=ys(t,e);return n!=null?new bn(new Te(n)):new bn(t.writeTree_.subtree(e))}}function Lm(t){return t.writeTree_.isEmpty()}function So(t,e){return DA(me(),t.writeTree_,e)}function DA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=DA(Le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Le(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t,e){return FA(e,t)}function o4(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=za(t.visibleWrites,e,n)),t.lastWriteId=r}function a4(t,e,n,r){B(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Om(t.visibleWrites,e,n),t.lastWriteId=r}function l4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function u4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&c4(a,r.path)?i=!1:dn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return h4(t),!0;if(r.snap)t.visibleWrites=x0(t.visibleWrites,r.path);else{const a=r.children;_t(a,u=>{t.visibleWrites=x0(t.visibleWrites,Le(r.path,u))})}return!0}else return!1}function c4(t,e){if(t.snap)return dn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dn(Le(t.path,n),e))return!0;return!1}function h4(t){t.visibleWrites=LA(t.allWrites,d4,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function d4(t){return t.visible}function LA(t,e,n){let r=bn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)dn(n,o)?(a=Dt(n,o),r=za(r,a,s.snap)):dn(o,n)&&(a=Dt(o,n),r=za(r,me(),s.snap.getChild(a)));else if(s.children){if(dn(n,o))a=Dt(n,o),r=Om(r,a,s.children);else if(dn(o,n))if(a=Dt(o,n),ae(a))r=Om(r,me(),s.children);else{const u=lo(s.children,ie(a));if(u){const c=u.getChild(Ie(a));r=za(r,me(),c)}}}else throw xo("WriteRecord should have .snap or .children")}}return r}function MA(t,e,n,r,i){if(!r&&!i){const s=ys(t.visibleWrites,e);if(s!=null)return s;{const o=oi(t.visibleWrites,e);if(Lm(o))return n;if(n==null&&!Dm(o,me()))return null;{const a=n||Y.EMPTY_NODE;return So(o,a)}}}else{const s=oi(t.visibleWrites,e);if(!i&&Lm(s))return n;if(!i&&n==null&&!Dm(s,me()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(dn(c.path,e)||dn(e,c.path))},a=LA(t.allWrites,o,e),u=n||Y.EMPTY_NODE;return So(a,u)}}}function f4(t,e,n){let r=Y.EMPTY_NODE;const i=ys(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Me,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=oi(t.visibleWrites,e);return n.forEachChild(Me,(o,a)=>{const u=So(oi(s,new ve(o)),a);r=r.updateImmediateChild(o,u)}),b0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=oi(t.visibleWrites,e);return b0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function p4(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Le(e,n);if(Dm(t.visibleWrites,s))return null;{const o=oi(t.visibleWrites,s);return Lm(o)?i.getChild(n):So(o,i.getChild(n))}}function m4(t,e,n,r){const i=Le(e,n),s=ys(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=oi(t.visibleWrites,i);return So(o,r.getNode().getImmediateChild(n))}else return null}function g4(t,e){return ys(t.visibleWrites,e)}function _4(t,e,n,r,i,s,o){let a;const u=oi(t.visibleWrites,e),c=ys(u,me());if(c!=null)a=c;else if(n!=null)a=So(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=m.getNext();for(;y&&h.length<i;)f(y,r)!==0&&h.push(y),y=m.getNext();return h}else return[]}function y4(){return{visibleWrites:bn.empty(),allWrites:[],lastWriteId:-1}}function ph(t,e,n,r){return MA(t.writeTree,t.treePath,e,n,r)}function ey(t,e){return f4(t.writeTree,t.treePath,e)}function O0(t,e,n,r){return p4(t.writeTree,t.treePath,e,n,r)}function mh(t,e){return g4(t.writeTree,Le(t.treePath,e))}function v4(t,e,n,r,i,s){return _4(t.writeTree,t.treePath,e,n,r,i,s)}function ty(t,e,n){return m4(t.writeTree,t.treePath,e,n)}function VA(t,e){return FA(Le(t.treePath,e),t.writeTree)}function FA(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,El(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,wl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,To(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,El(r,e.snapshotNode,i.oldSnap));else throw xo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const jA=new E4;class ny{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new pi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ty(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ss(this.viewCache_),s=v4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T4(t){return{filter:t}}function I4(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function S4(t,e,n,r,i){const s=new w4;let o,a;if(n.type===An.OVERWRITE){const c=n;c.source.fromUser?o=Mm(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=gh(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===An.MERGE){const c=n;c.source.fromUser?o=R4(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Vm(t,e,c.path,c.children,r,i,a,s))}else if(n.type===An.ACK_USER_WRITE){const c=n;c.revert?o=P4(t,e,c.path,r,i,s):o=A4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===An.LISTEN_COMPLETE)o=k4(t,e,n.path,r,s);else throw xo("Unknown operation type: "+n.type);const u=s.getChanges();return C4(e,o,u),{viewCache:o,changes:u}}function C4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=fh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(xA(fh(e)))}}function UA(t,e,n,r,i,s){const o=e.eventCache;if(mh(r,n)!=null)return e;{let a,u;if(ae(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ss(e),h=c instanceof Y?c:Y.EMPTY_NODE,f=ey(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=ph(r,ss(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ie(n);if(c===".priority"){B(fi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=O0(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ie(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=O0(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(h,m):f=o.getNode().getImmediateChild(c)}else f=ty(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return Ba(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function gh(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(ae(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const y=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),y,null)}else{const y=ie(n);if(!u.isCompleteForPath(n)&&fi(n)>1)return e;const I=Ie(n),N=u.getNode().getImmediateChild(y).updateChild(I,r);y===".priority"?c=h.updatePriority(u.getNode(),N):c=h.updateChild(u.getNode(),y,N,I,jA,null)}const f=OA(e,c,u.isFullyInitialized()||ae(n),h.filtersNodes()),m=new ny(i,f,s);return UA(t,f,n,i,m,a)}function Mm(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new ny(i,e,s);if(ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Ba(e,c,!0,t.filter.filtersNodes());else{const f=ie(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Ba(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Ie(n),y=a.getNode().getImmediateChild(f);let I;if(ae(m))I=r;else{const P=h.getCompleteChild(f);P!=null?q_(m)===".priority"&&P.getChild(SA(m)).isEmpty()?I=P:I=P.updateChild(m,r):I=Y.EMPTY_NODE}if(y.equals(I))u=e;else{const P=t.filter.updateChild(a.getNode(),f,I,m,h,o);u=Ba(e,P,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function D0(t,e){return t.eventCache.isCompleteForChild(e)}function R4(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=Le(n,u);D0(e,ie(h))&&(a=Mm(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=Le(n,u);D0(e,ie(h))||(a=Mm(t,a,h,c,i,s,o))}),a}function L0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Vm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ae(n)?c=r:c=new Te(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),I=L0(t,y,m);u=gh(t,u,new ve(f),I,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!y){const I=e.serverCache.getNode().getImmediateChild(f),P=L0(t,I,m);u=gh(t,u,new ve(f),P,i,s,o,a)}}),u}function A4(t,e,n,r,i,s,o){if(mh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ae(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return gh(t,e,n,u.getNode().getChild(n),i,s,a,o);if(ae(n)){let c=new Te(null);return u.getNode().forEachChild(eo,(h,f)=>{c=c.set(new ve(h),f)}),Vm(t,e,n,c,i,s,a,o)}else return e}else{let c=new Te(null);return r.foreach((h,f)=>{const m=Le(n,h);u.isCompleteForPath(m)&&(c=c.set(h,u.getNode().getChild(m)))}),Vm(t,e,n,c,i,s,a,o)}}function k4(t,e,n,r,i){const s=e.serverCache,o=OA(e,s.getNode(),s.isFullyInitialized()||ae(n),s.isFiltered());return UA(t,o,n,r,jA,i)}function P4(t,e,n,r,i,s){let o;if(mh(r,n)!=null)return e;{const a=new ny(r,e,i),u=e.eventCache.getNode();let c;if(ae(n)||ie(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ph(r,ss(e));else{const f=e.serverCache.getNode();B(f instanceof Y,"serverChildren would be complete if leaf node"),h=ey(r,f)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=ie(n);let f=ty(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,Ie(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,Y.EMPTY_NODE,Ie(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ph(r,ss(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||mh(r,me())!=null,Ba(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Q_(r.getIndex()),s=KF(r);this.processor_=T4(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),h=new pi(u,o.isFullyInitialized(),i.filtersNodes()),f=new pi(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Td(f,h),this.eventGenerator_=new t4(this.query_)}get query(){return this.query_}}function x4(t){return t.viewCache_.serverCache.getNode()}function b4(t){return fh(t.viewCache_)}function O4(t,e){const n=ss(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function M0(t){return t.eventRegistrations_.length===0}function D4(t,e){t.eventRegistrations_.push(e)}function V0(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function F0(t,e,n,r){e.type===An.MERGE&&e.source.queryId!==null&&(B(ss(t.viewCache_),"We should always have a full cache before handling merges"),B(fh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=S4(t.processor_,i,e,n,r);return I4(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,BA(t,s.changes,s.viewCache.eventCache.getNode(),null)}function L4(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(s,o)=>{r.push(To(s,o))}),n.isFullyInitialized()&&r.push(xA(n.getNode())),BA(t,r,n.getNode(),e)}function BA(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return n4(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h;class zA{constructor(){this.views=new Map}}function M4(t){B(!_h,"__referenceConstructor has already been defined"),_h=t}function V4(){return B(_h,"Reference.ts has not been loaded"),_h}function F4(t){return t.views.size===0}function ry(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),F0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(F0(o,e,n,r));return s}}function WA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ph(n,i?r:null),u=!1;a?u=!0:r instanceof Y?(a=ey(n,r),u=!1):(a=Y.EMPTY_NODE,u=!1);const c=Td(new pi(a,u,!1),new pi(r,i,!1));return new N4(e,c)}return o}function j4(t,e,n,r,i,s){const o=WA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),D4(o,n),L4(o,n)}function U4(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=mi(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(V0(c,n,r)),M0(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(V0(u,n,r)),M0(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!mi(t)&&s.push(new(V4())(e._repo,e._path)),{removed:s,events:o}}function $A(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ai(t,e){let n=null;for(const r of t.views.values())n=n||O4(r,e);return n}function qA(t,e){if(e._queryParams.loadsAllData())return Sd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function HA(t,e){return qA(t,e)!=null}function mi(t){return Sd(t)!=null}function Sd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh;function B4(t){B(!yh,"__referenceConstructor has already been defined"),yh=t}function z4(){return B(yh,"Reference.ts has not been loaded"),yh}let W4=1;class j0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=y4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function GA(t,e,n,r,i){return o4(t.pendingWriteTree_,e,n,r,i),i?jo(t,new is(X_(),e,n)):[]}function $4(t,e,n,r){a4(t.pendingWriteTree_,e,n,r);const i=Te.fromObject(n);return jo(t,new Io(X_(),e,i))}function Qr(t,e,n=!1){const r=l4(t.pendingWriteTree_,e);if(u4(t.pendingWriteTree_,e)){let s=new Te(null);return r.snap!=null?s=s.set(me(),!0):_t(r.children,o=>{s=s.set(new ve(o),!0)}),jo(t,new dh(r.path,s,n))}else return[]}function tu(t,e,n){return jo(t,new is(J_(),e,n))}function q4(t,e,n){const r=Te.fromObject(n);return jo(t,new Io(J_(),e,r))}function H4(t,e){return jo(t,new Il(J_(),e))}function G4(t,e,n){const r=sy(t,n);if(r){const i=oy(r),s=i.path,o=i.queryId,a=Dt(s,e),u=new Il(Z_(o),a);return ay(t,s,u)}else return[]}function vh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||HA(o,e))){const u=U4(o,e,n,r);F4(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const h=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,y)=>mi(y));if(h&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const y=Y4(m);for(let I=0;I<y.length;++I){const P=y[I],N=P.query,T=XA(t,P);t.listenProvider_.startListening(Wa(N),Sl(t,N),T.hashFn,T.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Wa(e),null):c.forEach(m=>{const y=t.queryToTagMap.get(Cd(m));t.listenProvider_.stopListening(Wa(m),y)}))}X4(t,c)}return a}function KA(t,e,n,r){const i=sy(t,r);if(i!=null){const s=oy(i),o=s.path,a=s.queryId,u=Dt(o,e),c=new is(Z_(a),u,n);return ay(t,o,c)}else return[]}function K4(t,e,n,r){const i=sy(t,r);if(i){const s=oy(i),o=s.path,a=s.queryId,u=Dt(o,e),c=Te.fromObject(n),h=new Io(Z_(a),u,c);return ay(t,o,h)}else return[]}function Fm(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,y)=>{const I=Dt(m,i);s=s||ai(y,I),o=o||mi(y)});let a=t.syncPointTree_.get(i);a?(o=o||mi(a),s=s||ai(a,me())):(a=new zA,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=Y.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,I)=>{const P=ai(I,me());P&&(s=s.updateImmediateChild(y,P))}));const c=HA(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=Cd(e);B(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const y=J4();t.queryToTagMap.set(m,y),t.tagToQueryMap.set(y,m)}const h=Id(t.pendingWriteTree_,i);let f=j4(a,e,n,h,s,u);if(!c&&!o&&!r){const m=qA(a,e);f=f.concat(Z4(t,e,m))}return f}function iy(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Dt(o,e),c=ai(a,u);if(c)return c});return MA(i,e,s,n,!0)}function Q4(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Dt(c,n);r=r||ai(h,f)});let i=t.syncPointTree_.get(n);i?r=r||ai(i,me()):(i=new zA,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new pi(r,!0,!1):null,a=Id(t.pendingWriteTree_,e._path),u=WA(i,e,a,s?o.getNode():Y.EMPTY_NODE,s);return b4(u)}function jo(t,e){return QA(e,t.syncPointTree_,null,Id(t.pendingWriteTree_,me()))}function QA(t,e,n,r){if(ae(t.path))return YA(t,e,n,r);{const i=e.get(me());n==null&&i!=null&&(n=ai(i,me()));let s=[];const o=ie(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=VA(r,o);s=s.concat(QA(a,u,c,h))}return i&&(s=s.concat(ry(i,t,r,n))),s}}function YA(t,e,n,r){const i=e.get(me());n==null&&i!=null&&(n=ai(i,me()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=VA(r,o),h=t.operationForChild(o);h&&(s=s.concat(YA(h,a,u,c)))}),i&&(s=s.concat(ry(i,t,r,n))),s}function XA(t,e){const n=e.query,r=Sl(t,n);return{hashFn:()=>(x4(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?G4(t,n._path,r):H4(t,n._path);{const s=HV(i,n);return vh(t,n,null,s)}}}}function Sl(t,e){const n=Cd(e);return t.queryToTagMap.get(n)}function Cd(t){return t._path.toString()+"$"+t._queryIdentifier}function sy(t,e){return t.tagToQueryMap.get(e)}function oy(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function ay(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=Id(t.pendingWriteTree_,e);return ry(r,n,i,null)}function Y4(t){return t.fold((e,n,r)=>{if(n&&mi(n))return[Sd(n)];{let i=[];return n&&(i=$A(n)),_t(r,(s,o)=>{i=i.concat(o)}),i}})}function Wa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(z4())(t._repo,t._path):t}function X4(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Cd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function J4(){return W4++}function Z4(t,e,n){const r=e._path,i=Sl(t,e),s=XA(t,n),o=t.listenProvider_.startListening(Wa(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!mi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!ae(c)&&h&&mi(h))return[Sd(h).query];{let m=[];return h&&(m=m.concat($A(h).map(y=>y.query))),_t(f,(y,I)=>{m=m.concat(I)}),m}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(Wa(h),Sl(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ly(n)}node(){return this.node_}}class uy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new uy(this.syncTree_,n)}node(){return iy(this.syncTree_,this.path_)}}const ej=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},U0=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nj(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},nj=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},JA=function(t,e,n,r){return cy(e,new uy(n,t),r)},ZA=function(t,e,n){return cy(t,new ly(e),n)};function cy(t,e,n){const r=t.getPriority().val(),i=U0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=U0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new tt(a,Je(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new tt(i))),o.forEachChild(Me,(a,u)=>{const c=cy(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function dy(t,e){let n=e instanceof ve?e:new ve(e),r=t,i=ie(n);for(;i!==null;){const s=lo(r.node.children,i)||{children:{},childCount:0};r=new hy(i,r,s),n=Ie(n),i=ie(n)}return r}function Uo(t){return t.node.value}function ek(t,e){t.node.value=e,jm(t)}function tk(t){return t.node.childCount>0}function rj(t){return Uo(t)===void 0&&!tk(t)}function Rd(t,e){_t(t.node.children,(n,r)=>{e(new hy(n,t,r))})}function nk(t,e,n,r){n&&e(t),Rd(t,i=>{nk(i,e,!0)})}function ij(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function nu(t){return new ve(t.parent===null?t.name:nu(t.parent)+"/"+t.name)}function jm(t){t.parent!==null&&sj(t.parent,t.name,t)}function sj(t,e,n){const r=rj(n),i=Yn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,jm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oj=/[\[\].#$\/\u0000-\u001F\u007F]/,aj=/[\[\].#$\u0000-\u001F\u007F]/,Xf=10*1024*1024,fy=function(t){return typeof t=="string"&&t.length!==0&&!oj.test(t)},rk=function(t){return typeof t=="string"&&t.length!==0&&!aj.test(t)},lj=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rk(t)},uj=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!U_(t)||t&&typeof t=="object"&&Yn(t,".sv")},ik=function(t,e,n,r){r&&e===void 0||Ad(Bh(t,"value"),e,n)},Ad=function(t,e,n){const r=n instanceof ve?new RF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+bi(r));if(typeof e=="function")throw new Error(t+"contains a function "+bi(r)+" with contents = "+e.toString());if(U_(e))throw new Error(t+"contains "+e.toString()+" "+bi(r));if(typeof e=="string"&&e.length>Xf/3&&zh(e)>Xf)throw new Error(t+"contains a string greater than "+Xf+" utf8 bytes "+bi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(_t(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!fy(o)))throw new Error(t+" contains an invalid key ("+o+") "+bi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);AF(r,o),Ad(t,a,r),kF(r)}),i&&s)throw new Error(t+' contains ".value" child '+bi(r)+" in addition to actual children.")}},cj=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=vl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!fy(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(CF);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&dn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},hj=function(t,e,n,r){const i=Bh(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];_t(e,(o,a)=>{const u=new ve(o);if(Ad(i,a,Le(n,u)),q_(u)===".priority"&&!uj(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),cj(i,s)},sk=function(t,e,n,r){if(!rk(n))throw new Error(Bh(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},dj=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sk(t,e,n)},py=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},fj=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lj(n))throw new Error(Bh(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!H_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ok(t,e,n){kd(t,n),ak(t,r=>H_(r,e))}function yn(t,e,n){kd(t,n),ak(t,r=>dn(r,e)||dn(e,r))}function ak(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(mj(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ja&&ht("event: "+n.toString()),Fo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gj="repo_interrupt",_j=25;class yj{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hh(),this.transactionQueueTree_=new hy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vj(t,e,n){if(t.stats_=W_(t.repoInfo_),t.forceRestClient_||YV())t.server_=new ch(t.repoInfo_,(r,i,s,o)=>{B0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>z0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new _r(t.repoInfo_,e,(r,i,s,o)=>{B0(t,r,i,s,o)},r=>{z0(t,r)},r=>{wj(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=tF(t.repoInfo_,()=>new e4(t.stats_,t.server_)),t.infoData_=new QF,t.infoSyncTree_=new j0({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=tu(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),my(t,"connected",!1),t.serverSyncTree_=new j0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);yn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function lk(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Pd(t){return ej({timestamp:lk(t)})}function B0(t,e,n,r,i){t.dataUpdateCount++;const s=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Hc(n,c=>Je(c));o=K4(t.serverSyncTree_,s,u,i)}else{const u=Je(n);o=KA(t.serverSyncTree_,s,u,i)}else if(r){const u=Hc(n,c=>Je(c));o=q4(t.serverSyncTree_,s,u)}else{const u=Je(n);o=tu(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Co(t,s)),yn(t.eventQueue_,a,o)}function z0(t,e){my(t,"connected",e),e===!1&&Sj(t)}function wj(t,e){_t(e,(n,r)=>{my(t,n,r)})}function my(t,e,n){const r=new ve("/.info/"+e),i=Je(n);t.infoData_.updateSnapshot(r,i);const s=tu(t.infoSyncTree_,r,i);yn(t.eventQueue_,r,s)}function gy(t){return t.nextWriteId_++}function Ej(t,e,n){const r=Q4(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Je(i).withIndex(e._queryParams.getIndex());Fm(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=tu(t.serverSyncTree_,e._path,s);else{const a=Sl(t.serverSyncTree_,e);o=KA(t.serverSyncTree_,e._path,s,a)}return yn(t.eventQueue_,e._path,o),vh(t.serverSyncTree_,e,n,null,!0),s},i=>(ru(t,"get for query "+Ze(e)+" failed: "+i),Promise.reject(new Error(i))))}function Tj(t,e,n,r,i){ru(t,"set",{path:e.toString(),value:n,priority:r});const s=Pd(t),o=Je(n,r),a=iy(t.serverSyncTree_,e),u=ZA(o,a,s),c=gy(t),h=GA(t.serverSyncTree_,e,u,c,!0);kd(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,y)=>{const I=m==="ok";I||Vt("set at "+e+" failed: "+m);const P=Qr(t.serverSyncTree_,c,!I);yn(t.eventQueue_,e,P),Um(t,i,m,y)});const f=yy(t,e);Co(t,f),yn(t.eventQueue_,f,[])}function Ij(t,e,n,r){ru(t,"update",{path:e.toString(),value:n});let i=!0;const s=Pd(t),o={};if(_t(n,(a,u)=>{i=!1,o[a]=JA(Le(e,a),Je(u),t.serverSyncTree_,s)}),i)ht("update() called with empty data.  Don't do anything."),Um(t,r,"ok",void 0);else{const a=gy(t),u=$4(t.serverSyncTree_,e,o,a);kd(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Vt("update at "+e+" failed: "+c);const m=Qr(t.serverSyncTree_,a,!f),y=m.length>0?Co(t,e):e;yn(t.eventQueue_,y,m),Um(t,r,c,h)}),_t(n,c=>{const h=yy(t,Le(e,c));Co(t,h)}),yn(t.eventQueue_,e,[])}}function Sj(t){ru(t,"onDisconnectEvents");const e=Pd(t),n=hh();bm(t.onDisconnect_,me(),(i,s)=>{const o=JA(i,s,t.serverSyncTree_,e);bA(n,i,o)});let r=[];bm(n,me(),(i,s)=>{r=r.concat(tu(t.serverSyncTree_,i,s));const o=yy(t,i);Co(t,o)}),t.onDisconnect_=hh(),yn(t.eventQueue_,me(),r)}function Cj(t,e,n){let r;ie(e._path)===".info"?r=Fm(t.infoSyncTree_,e,n):r=Fm(t.serverSyncTree_,e,n),ok(t.eventQueue_,e._path,r)}function uk(t,e,n){let r;ie(e._path)===".info"?r=vh(t.infoSyncTree_,e,n):r=vh(t.serverSyncTree_,e,n),ok(t.eventQueue_,e._path,r)}function Rj(t){t.persistentConnection_&&t.persistentConnection_.interrupt(gj)}function ru(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ht(n,...e)}function Um(t,e,n,r){e&&Fo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ck(t,e,n){return iy(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function _y(t,e=t.transactionQueueTree_){if(e||Nd(t,e),Uo(e)){const n=dk(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Aj(t,nu(e),n)}else tk(e)&&Rd(e,n=>{_y(t,n)})}function Aj(t,e,n){const r=n.map(c=>c.currentWriteId),i=ck(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Dt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{ru(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Qr(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Nd(t,dy(t.transactionQueueTree_,e)),_y(t,t.transactionQueueTree_),yn(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)Fo(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Vt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Co(t,e)}},o)}function Co(t,e){const n=hk(t,e),r=nu(n),i=dk(t,n);return kj(t,i,r),r}function kj(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Dt(n,u.path);let h=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,i=i.concat(Qr(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=_j)h=!0,f="maxretry",i=i.concat(Qr(t.serverSyncTree_,u.currentWriteId,!0));else{const m=ck(t,u.path,o);u.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){Ad("transaction failed: Data returned ",y,u.path);let I=Je(y);typeof y=="object"&&y!=null&&Yn(y,".priority")||(I=I.updatePriority(m.getPriority()));const N=u.currentWriteId,T=Pd(t),w=ZA(I,m,T);u.currentOutputSnapshotRaw=I,u.currentOutputSnapshotResolved=w,u.currentWriteId=gy(t),o.splice(o.indexOf(N),1),i=i.concat(GA(t.serverSyncTree_,u.path,w,u.currentWriteId,u.applyLocally)),i=i.concat(Qr(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",i=i.concat(Qr(t.serverSyncTree_,u.currentWriteId,!0))}yn(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Nd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Fo(r[a]);_y(t,t.transactionQueueTree_)}function hk(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&Uo(r)===void 0;)r=dy(r,n),e=Ie(e),n=ie(e);return r}function dk(t,e){const n=[];return fk(t,e,n),n.sort((r,i)=>r.order-i.order),n}function fk(t,e,n){const r=Uo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Rd(e,i=>{fk(t,i,n)})}function Nd(t,e){const n=Uo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ek(e,n.length>0?n:void 0)}Rd(e,r=>{Nd(t,r)})}function yy(t,e){const n=nu(hk(t,e)),r=dy(t.transactionQueueTree_,e);return ij(r,i=>{Jf(t,i)}),Jf(t,r),nk(r,i=>{Jf(t,i)}),n}function Jf(t,e){const n=Uo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ek(e,void 0):n.length=s+1,yn(t.eventQueue_,nu(e),i);for(let o=0;o<r.length;o++)Fo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pj(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Nj(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const W0=function(t,e){const n=xj(t),r=n.namespace;n.domain==="firebase.com"&&Ar(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||BV();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mA(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ve(n.pathString)}},xj=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=Pj(t.substring(h,f)));const m=Nj(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const I=e.indexOf(".");r=e.substring(0,I).toLowerCase(),n=e.substring(I+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",bj=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=$0.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=$0.charAt(e[i]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ze(this.snapshot.exportVal())}}class Dj{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ae(this._path)?null:q_(this._path)}get ref(){return new xr(this._repo,this._path)}get _queryIdentifier(){const e=P0(this._queryParams),n=B_(e);return n==="{}"?"default":n}get _queryObject(){return P0(this._queryParams)}isEqual(e){if(e=ge(e),!(e instanceof vy))return!1;const n=this._repo===e._repo,r=H_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+SF(this._path)}}class xr extends vy{constructor(e,n){super(e,n,new Y_,!1)}get parent(){const e=SA(this._path);return e===null?null:new xr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=Rl(this.ref,e);return new Cl(this._node.getChild(n),r,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Cl(i,Rl(this.ref,r),Me)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Gn(t,e){return t=ge(t),t._checkNotDeleted("ref"),e!==void 0?Rl(t._root,e):t._root}function Rl(t,e){return t=ge(t),ie(t._path)===null?dj("child","path",e):sk("child","path",e),new xr(t._repo,Le(t._path,e))}function Lj(t,e){t=ge(t),py("push",t._path),ik("push",e,t._path,!0);const n=lk(t._repo),r=bj(n),i=Rl(t,r),s=Rl(t,r);let o;return e!=null?o=wy(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Mj(t){return py("remove",t._path),wy(t,null)}function wy(t,e){t=ge(t),py("set",t._path),ik("set",e,t._path,!1);const n=new Ml;return Tj(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function iu(t,e){hj("update",e,t._path);const n=new Ml;return Ij(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Vj(t){t=ge(t);const e=new pk(()=>{}),n=new xd(e);return Ej(t._repo,t,n).then(r=>new Cl(r,new xr(t._repo,t._path),t._queryParams.getIndex()))}class xd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Oj("value",this,new Cl(e.snapshotNode,new xr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Dj(this,e,n):null}matches(e){return e instanceof xd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Fj(t,e,n,r,i){const s=new pk(n,void 0),o=new xd(s);return Cj(t._repo,t,o),()=>uk(t._repo,t,o)}function jj(t,e,n,r){return Fj(t,"value",e)}function Uj(t,e,n){uk(t._repo,t,null)}M4(xr);B4(xr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bj="FIREBASE_DATABASE_EMULATOR_HOST",Bm={};let zj=!1;function Wj(t,e,n,r){t.repoInfo_=new mA(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function $j(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=W0(s,i),a=o.repoInfo,u;typeof process<"u"&&h0&&(u=h0[Bj]),u?(s=`http://${u}?ns=${a.namespace}`,o=W0(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new JV(t.name,t.options,e);fj("Invalid Firebase Database URL",o),ae(o.path)||Ar("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Hj(a,t,c,new XV(t.name,n));return new Gj(h,t)}function qj(t,e){const n=Bm[e];(!n||n[t.key]!==t)&&Ar(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Rj(t),delete n[t.key]}function Hj(t,e,n,r){let i=Bm[e.name];i||(i={},Bm[e.name]=i);let s=i[t.toURLString()];return s&&Ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new yj(t,zj,n,r),i[t.toURLString()]=s,s}class Gj{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xr(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qj(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ar("Cannot call "+e+" on a deleted database.")}}function Kj(t=qh(),e){const n=ds(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=LS("database");r&&Qj(n,...r)}return n}function Qj(t,e,n,r={}){t=ge(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ar("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ar('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new _c(_c.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:FS(r.mockUserToken,t.app.options.projectId);s=new _c(o)}Wj(i,e,n,s)}/**
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
 */function Yj(t){LV(fs),Dn(new gn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return $j(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Gt(d0,f0,t),Gt(d0,f0,"esm2017")}_r.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_r.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Yj();const mk="@firebase/installations",Ey="0.6.9";/**
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
 */const gk=1e4,_k=`w:${Ey}`,yk="FIS_v2",Xj="https://firebaseinstallations.googleapis.com/v1",Jj=60*60*1e3,Zj="installations",eU="Installations";/**
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
 */const tU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},os=new hs(Zj,eU,tU);function vk(t){return t instanceof Qn&&t.code.includes("request-failed")}/**
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
 */function wk({projectId:t}){return`${Xj}/projects/${t}/installations`}function Ek(t){return{token:t.token,requestStatus:2,expiresIn:rU(t.expiresIn),creationTime:Date.now()}}async function Tk(t,e){const r=(await e.json()).error;return os.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ik({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function nU(t,{refreshToken:e}){const n=Ik(t);return n.append("Authorization",iU(e)),n}async function Sk(t){const e=await t();return e.status>=500&&e.status<600?t():e}function rU(t){return Number(t.replace("s","000"))}function iU(t){return`${yk} ${t}`}/**
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
 */async function sU({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=wk(t),i=Ik(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:yk,appId:t.appId,sdkVersion:_k},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await Sk(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Ek(c.authToken)}}else throw await Tk("Create Installation",u)}/**
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
 */function Ck(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function oU(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const aU=/^[cdef][\w-]{21}$/,zm="";function lU(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=uU(t);return aU.test(n)?n:zm}catch{return zm}}function uU(t){return oU(t).substr(0,22)}/**
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
 */function bd(t){return`${t.appName}!${t.appId}`}/**
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
 */const Rk=new Map;function Ak(t,e){const n=bd(t);kk(n,e),cU(n,e)}function kk(t,e){const n=Rk.get(t);if(n)for(const r of n)r(e)}function cU(t,e){const n=hU();n&&n.postMessage({key:t,fid:e}),dU()}let ji=null;function hU(){return!ji&&"BroadcastChannel"in self&&(ji=new BroadcastChannel("[Firebase] FID Change"),ji.onmessage=t=>{kk(t.data.key,t.data.fid)}),ji}function dU(){Rk.size===0&&ji&&(ji.close(),ji=null)}/**
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
 */const fU="firebase-installations-database",pU=1,as="firebase-installations-store";let Zf=null;function Ty(){return Zf||(Zf=$h(fU,pU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}})),Zf}async function wh(t,e){const n=bd(t),i=(await Ty()).transaction(as,"readwrite"),s=i.objectStore(as),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Ak(t,e.fid),e}async function Pk(t){const e=bd(t),r=(await Ty()).transaction(as,"readwrite");await r.objectStore(as).delete(e),await r.done}async function Od(t,e){const n=bd(t),i=(await Ty()).transaction(as,"readwrite"),s=i.objectStore(as),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Ak(t,a.fid),a}/**
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
 */async function Iy(t){let e;const n=await Od(t.appConfig,r=>{const i=mU(r),s=gU(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===zm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function mU(t){const e=t||{fid:lU(),registrationStatus:0};return Nk(e)}function gU(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(os.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_U(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yU(t)}:{installationEntry:e}}async function _U(t,e){try{const n=await sU(t,e);return wh(t.appConfig,n)}catch(n){throw vk(n)&&n.customData.serverCode===409?await Pk(t.appConfig):await wh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function yU(t){let e=await q0(t.appConfig);for(;e.registrationStatus===1;)await Ck(100),e=await q0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Iy(t);return r||n}return e}function q0(t){return Od(t,e=>{if(!e)throw os.create("installation-not-found");return Nk(e)})}function Nk(t){return vU(t)?{fid:t.fid,registrationStatus:0}:t}function vU(t){return t.registrationStatus===1&&t.registrationTime+gk<Date.now()}/**
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
 */async function wU({appConfig:t,heartbeatServiceProvider:e},n){const r=EU(t,n),i=nU(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:_k,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await Sk(()=>fetch(r,a));if(u.ok){const c=await u.json();return Ek(c)}else throw await Tk("Generate Auth Token",u)}function EU(t,{fid:e}){return`${wk(t)}/${e}/authTokens:generate`}/**
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
 */async function Sy(t,e=!1){let n;const r=await Od(t.appConfig,s=>{if(!xk(s))throw os.create("not-registered");const o=s.authToken;if(!e&&SU(o))return s;if(o.requestStatus===1)return n=TU(t,e),s;{if(!navigator.onLine)throw os.create("app-offline");const a=RU(s);return n=IU(t,a),a}});return n?await n:r.authToken}async function TU(t,e){let n=await H0(t.appConfig);for(;n.authToken.requestStatus===1;)await Ck(100),n=await H0(t.appConfig);const r=n.authToken;return r.requestStatus===0?Sy(t,e):r}function H0(t){return Od(t,e=>{if(!xk(e))throw os.create("not-registered");const n=e.authToken;return AU(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function IU(t,e){try{const n=await wU(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await wh(t.appConfig,r),n}catch(n){if(vk(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Pk(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wh(t.appConfig,r)}throw n}}function xk(t){return t!==void 0&&t.registrationStatus===2}function SU(t){return t.requestStatus===2&&!CU(t)}function CU(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Jj}function RU(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function AU(t){return t.requestStatus===1&&t.requestTime+gk<Date.now()}/**
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
 */async function kU(t){const e=t,{installationEntry:n,registrationPromise:r}=await Iy(e);return r?r.catch(console.error):Sy(e).catch(console.error),n.fid}/**
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
 */async function PU(t,e=!1){const n=t;return await NU(n),(await Sy(n,e)).token}async function NU(t){const{registrationPromise:e}=await Iy(t);e&&await e}/**
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
 */function xU(t){if(!t||!t.options)throw ep("App Configuration");if(!t.name)throw ep("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ep(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ep(t){return os.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk="installations",bU="installations-internal",OU=t=>{const e=t.getProvider("app").getImmediate(),n=xU(e),r=ds(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},DU=t=>{const e=t.getProvider("app").getImmediate(),n=ds(e,bk).getImmediate();return{getId:()=>kU(n),getToken:i=>PU(n,i)}};function LU(){Dn(new gn(bk,OU,"PUBLIC")),Dn(new gn(bU,DU,"PRIVATE"))}LU();Gt(mk,Ey);Gt(mk,Ey,"esm2017");/**
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
 */const MU="/firebase-messaging-sw.js",VU="/firebase-cloud-messaging-push-scope",Ok="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",FU="https://fcmregistrations.googleapis.com/v1",Dk="google.c.a.c_id",jU="google.c.a.c_l",UU="google.c.a.ts",BU="google.c.a.e";var G0;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(G0||(G0={}));/**
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
 */var Al;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Al||(Al={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function zU(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const tp="fcm_token_details_db",WU=5,K0="fcm_token_object_Store";async function $U(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(tp))return null;let e=null;return(await $h(tp,WU,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(K0))return;const u=o.objectStore(K0),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:rr(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:rr(h.auth),p256dh:rr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:rr(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:rr(h.auth),p256dh:rr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:rr(h.vapidKey)}}}}}})).close(),await Vf(tp),await Vf("fcm_vapid_details_db"),await Vf("undefined"),qU(e)?e:null}function qU(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const HU="firebase-messaging-database",GU=1,ls="firebase-messaging-store";let np=null;function Cy(){return np||(np=$h(HU,GU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ls)}}})),np}async function Lk(t){const e=Ay(t),r=await(await Cy()).transaction(ls).objectStore(ls).get(e);if(r)return r;{const i=await $U(t.appConfig.senderId);if(i)return await Ry(t,i),i}}async function Ry(t,e){const n=Ay(t),i=(await Cy()).transaction(ls,"readwrite");return await i.objectStore(ls).put(e,n),await i.done,e}async function KU(t){const e=Ay(t),r=(await Cy()).transaction(ls,"readwrite");await r.objectStore(ls).delete(e),await r.done}function Ay({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},mt=new hs("messaging","Messaging",QU);/**
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
 */async function YU(t,e){const n=await Py(t),r=Vk(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(ky(t.appConfig),i)).json()}catch(o){throw mt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw mt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw mt.create("token-subscribe-no-token");return s.token}async function XU(t,e){const n=await Py(t),r=Vk(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${ky(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw mt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw mt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw mt.create("token-update-no-token");return s.token}async function Mk(t,e){const r={method:"DELETE",headers:await Py(t)};try{const s=await(await fetch(`${ky(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw mt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw mt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function ky({projectId:t}){return`${FU}/projects/${t}/registrations`}async function Py({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Vk({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==Ok&&(i.web.applicationPubKey=r),i}/**
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
 */const JU=7*24*60*60*1e3;async function ZU(t){const e=await nB(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:rr(e.getKey("auth")),p256dh:rr(e.getKey("p256dh"))},r=await Lk(t.firebaseDependencies);if(r){if(rB(r.subscriptionOptions,n))return Date.now()>=r.createTime+JU?tB(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Mk(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Q0(t.firebaseDependencies,n)}else return Q0(t.firebaseDependencies,n)}async function eB(t){const e=await Lk(t.firebaseDependencies);e&&(await Mk(t.firebaseDependencies,e.token),await KU(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function tB(t,e){try{const n=await XU(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Ry(t.firebaseDependencies,r),n}catch(n){throw n}}async function Q0(t,e){const r={token:await YU(t,e),createTime:Date.now(),subscriptionOptions:e};return await Ry(t,r),r.token}async function nB(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:zU(e)})}function rB(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return iB(e,t),sB(e,t),oB(e,t),e}function iB(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function sB(t,e){e.data&&(t.data=e.data)}function oB(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
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
 */function aB(t){return typeof t=="object"&&!!t&&Dk in t}/**
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
 */function lB(t){if(!t||!t.options)throw rp("App Configuration Object");if(!t.name)throw rp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw rp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function rp(t){return mt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uB{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=lB(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t){try{t.swRegistration=await navigator.serviceWorker.register(MU,{scope:VU}),t.swRegistration.update().catch(()=>{})}catch(e){throw mt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cB(t,e){if(!e&&!t.swRegistration&&await Fk(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw mt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hB(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Ok)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e){if(!navigator)throw mt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw mt.create("permission-blocked");return await hB(t,e==null?void 0:e.vapidKey),await cB(t,e==null?void 0:e.serviceWorkerRegistration),ZU(t)}/**
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
 */async function dB(t,e,n){const r=fB(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Dk],message_name:n[jU],message_time:n[UU],message_device_time:Math.floor(Date.now()/1e3)})}function fB(t){switch(t){case Al.NOTIFICATION_CLICKED:return"notification_open";case Al.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pB(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Al.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Y0(n)):t.onMessageHandler.next(Y0(n)));const r=n.data;aB(r)&&r[BU]==="1"&&await dB(t,n.messageType,r)}const X0="@firebase/messaging",J0="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mB=t=>{const e=new uB(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>pB(e,n)),e},gB=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>jk(e,r)}};function _B(){Dn(new gn("messaging",mB,"PUBLIC")),Dn(new gn("messaging-internal",gB,"PRIVATE")),Gt(X0,J0),Gt(X0,J0,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(){try{await BS()}catch{return!1}return typeof window<"u"&&US()&&ub()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yB(t){if(!navigator)throw mt.create("only-available-in-window");return t.swRegistration||await Fk(t),eB(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vB(t,e){if(!navigator)throw mt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t=qh()){return Ny().then(e=>{if(!e)throw mt.create("unsupported-browser")},e=>{throw mt.create("indexed-db-unsupported")}),ds(ge(t),"messaging").getImmediate()}async function wB(t,e){return t=ge(t),jk(t,e)}function EB(t){return t=ge(t),yB(t)}function TB(t,e){return t=ge(t),vB(t,e)}_B();const Bk=Object.freeze(Object.defineProperty({__proto__:null,deleteToken:EB,getMessaging:Uk,getToken:wB,isSupported:Ny,onMessage:TB},Symbol.toStringTag,{value:"Module"})),IB={apiKey:"AIzaSyAbAb2YcqvSaahSV_UITjQtk8UArYSaDdY",authDomain:"dingo-new-version.firebaseapp.com",databaseURL:"https://dingo-new-version-default-rtdb.firebaseio.com",projectId:"dingo-new-version",storageBucket:"dingo-new-version.firebasestorage.app",messagingSenderId:"245470329002",appId:"1:245470329002:web:f0fae2a906e773629578d3"},SB="GG6zruC_lQSTKwuBvOudnROxxtXFMGufChhrzU7M6vQ",Dd=qS(IB),su=UL(Dd),He=FR(Dd),Kn=Kj(Dd);let kl=null;Ny().then(t=>{t&&(kl=Uk(Dd))}).catch(()=>{});const CB="modulepreload",RB=function(t){return"/DINGO-NEW-VERSION-/"+t},Z0={},Ld=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=RB(u),u in Z0)return;Z0[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":CB,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,y)=>{f.addEventListener("load",m),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};async function zk(t,e){const n=Mt(He,"users",t);(await yd(n)).exists()?await rn(n,{isOnline:!0}):await XR(n,{displayName:e.displayName||"Player",email:e.email||"",avatar:e.avatar||"🎯",color:e.color||"#00ffcc",wins:0,losses:0,total:0,winRate:0,friends:[],isOnline:!0,fcmToken:null,createdAt:Xl()})}async function AB(t){const e=await yd(Mt(He,"users",t));return e.exists()?{uid:t,...e.data()}:null}async function kB(t,e){await rn(Mt(He,"users",t),e)}async function eT(t,e){try{await rn(Mt(He,"users",t),{isOnline:e,lastSeen:Xl()})}catch{}}async function PB(t,e){await rn(Mt(He,"users",t),{fcmToken:e})}async function NB(t){const{collection:e,query:n,where:r,getDocs:i}=await Ld(async()=>{const{collection:a,query:u,where:c,getDocs:h}=await Promise.resolve().then(()=>eA);return{collection:a,query:u,where:c,getDocs:h}},void 0),s=n(e(He,"users"),r("displayName",">=",t),r("displayName","<=",t+""));return(await i(s)).docs.map(a=>({uid:a.id,...a.data()}))}const xB=new sr;function bB(t){return kD(su,t)}async function OB(t,e){return(await ID(su,t,e)).user}async function DB(t,e,n){const r=await TD(su,t,e);return await CD(r.user,{displayName:n}),await zk(r.user.uid,{displayName:n,email:t,avatar:"🎯",color:"#00ffcc"}),r.user}async function LB(){const t=await QD(su,xB);return await zk(t.user.uid,{displayName:t.user.displayName||"Player",email:t.user.email,avatar:"🎯",color:"#00ffcc"}),t.user}async function MB(){await PD(su)}const Wk=M.createContext(null);function Jn(){return M.useContext(Wk)}function VB({children:t}){const[e,n]=M.useState(null),[r,i]=M.useState(null),[s,o]=M.useState(!0),a=async u=>{if(!u)return;const c=await AB(u);i(c)};return M.useEffect(()=>{const u=bB(async h=>{n(h),h?(await a(h.uid),eT(h.uid,!0)):i(null),o(!1)}),c=()=>{e&&eT(e.uid,!1)};return window.addEventListener("beforeunload",c),()=>{u(),window.removeEventListener("beforeunload",c)}},[]),g.jsx(Wk.Provider,{value:{user:e,profile:r,loading:s,refreshProfile:a},children:t})}function FB(){const[t,e]=M.useState([]);return M.useEffect(()=>{const n=r=>{const i=Date.now();e(s=>[...s,{id:i,...r.detail}]),setTimeout(()=>{e(s=>s.filter(o=>o.id!==i))},3500)};return window.addEventListener("dingo-toast",n),()=>window.removeEventListener("dingo-toast",n)},[]),t.length?g.jsx("div",{className:"toast-container",children:t.map(n=>g.jsx("div",{className:`toast ${n.type||"info"}`,children:g.jsxs("div",{children:[g.jsx("div",{className:"toast-title",children:n.title}),n.body&&g.jsx("div",{className:"toast-body",children:n.body})]})},n.id))}):null}let jB=null;async function UB(t){if(!kl)return null;try{const{getToken:e}=await Ld(async()=>{const{getToken:i}=await Promise.resolve().then(()=>Bk);return{getToken:i}},void 0);if(await Notification.requestPermission()!=="granted")return null;const r=await e(kl,{vapidKey:SB});return r&&(jB=r,await PB(t,r)),r}catch(e){return console.warn("Notification setup failed:",e),null}}function BB(t){if(!kl)return()=>{};Ld(async()=>{const{onMessage:e}=await Promise.resolve().then(()=>Bk);return{onMessage:e}},void 0).then(({onMessage:e})=>{e(kl,n=>{t(n)})})}function yc(t,e,n="info"){const r=new CustomEvent("dingo-toast",{detail:{title:t,body:e,type:n}});window.dispatchEvent(r)}function zB(){const[t,e]=M.useState("login"),[n,r]=M.useState(""),[i,s]=M.useState(""),[o,a]=M.useState(""),[u,c]=M.useState(""),[h,f]=M.useState(!1),m=async()=>{c(""),f(!0);try{if(t==="login")await OB(n,i);else{if(!o.trim()){c("Please enter your name"),f(!1);return}await DB(n,i,o.trim())}}catch(I){c(tT(I.code))}f(!1)},y=async()=>{c(""),f(!0);try{await LB()}catch(I){c(tT(I.code))}f(!1)};return g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:20,paddingTop:40},children:[g.jsxs("div",{className:"text-center",style:{marginBottom:28},children:[g.jsx("div",{className:"hero-logo","data-text":"DiNGo",style:{fontSize:"clamp(72px,18vw,100px)"},children:"DiNGo"}),g.jsx("div",{className:"sub",style:{marginTop:6,letterSpacing:2},children:"LIVE MULTIPLAYER BINGO"})]}),g.jsx("div",{className:"card",style:{maxWidth:400},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{style:{display:"flex",gap:8,marginBottom:20},children:["login","register"].map(I=>g.jsx("button",{className:`btn ${t===I?"btn-primary":"btn-ghost"}`,style:{flex:1},onClick:()=>{e(I),c("")},children:I==="login"?"Sign In":"Sign Up"},I))}),t==="register"&&g.jsxs("div",{style:{marginBottom:14},children:[g.jsx("div",{className:"label",children:"Your Name"}),g.jsx("input",{type:"text",placeholder:"KGames",value:o,onChange:I=>a(I.target.value),maxLength:20})]}),g.jsxs("div",{style:{marginBottom:14},children:[g.jsx("div",{className:"label",children:"Email"}),g.jsx("input",{type:"email",placeholder:"you@email.com",value:n,onChange:I=>r(I.target.value)})]}),g.jsxs("div",{style:{marginBottom:18},children:[g.jsx("div",{className:"label",children:"Password"}),g.jsx("input",{type:"password",placeholder:"••••••••",value:i,onChange:I=>s(I.target.value),onKeyDown:I=>I.key==="Enter"&&m()})]}),u&&g.jsx("div",{style:{background:"rgba(255,45,85,0.12)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c2)"},children:u}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:m,disabled:h,children:h?"⏳ Please wait…":t==="login"?"🎮 Sign In":"🚀 Create Account"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,margin:"16px 0"},children:[g.jsx("div",{className:"divider",style:{flex:1}}),g.jsx("span",{className:"muted small",children:"or"}),g.jsx("div",{className:"divider",style:{flex:1}})]}),g.jsxs("button",{className:"btn btn-ghost btn-full",onClick:y,disabled:h,style:{border:"2px solid var(--edge2)"},children:[g.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",width:18,alt:""}),"Continue with Google"]})]})})]})}function tT(t){switch(t){case"auth/user-not-found":return"No account with that email.";case"auth/wrong-password":return"Wrong password. Try again.";case"auth/email-already-in-use":return"Email already in use. Try signing in.";case"auth/weak-password":return"Password must be at least 6 characters.";case"auth/invalid-email":return"Invalid email address.";case"auth/popup-closed-by-user":return"Google sign-in was cancelled.";default:return"Something went wrong. Please try again."}}function WB(){try{return new(window.AudioContext||window.webkitAudioContext)}catch{return null}}let ki=null;function xy(){return ki||(ki=WB()),(ki==null?void 0:ki.state)==="suspended"&&ki.resume(),ki}const $k={click:()=>qn(880,.05,"square",.1),cross:()=>qn(660,.1,"square",.15),line:()=>Md([523,659,784],.2),win:()=>Vd(),lose:()=>Fd(),ping:()=>qn(1200,.05,"sine",.08)},$B={click:()=>XB(.03,80),cross:()=>vc(800,200,.12,"sawtooth"),line:()=>Md([400,500,600],.18,"sawtooth"),win:()=>Vd(1.2),lose:()=>Fd(.8),ping:()=>qn(1400,.03,"sine",.06)},qB={click:()=>vc(300,600,.08,"sine"),cross:()=>vc(600,100,.15,"sine"),line:()=>Md([261,329,392],.25,"sine"),win:()=>Vd(.9),lose:()=>Fd(.7),ping:()=>vc(800,1200,.06,"sine")},HB={click:()=>qn(220,.04,"sine",.2),cross:()=>qn(330,.06,"sine",.25),line:()=>Md([261,329,392],.12,"sine"),win:()=>Vd(.6),lose:()=>Fd(.5),ping:()=>qn(440,.03,"sine",.15)},GB={classic:$k,ninja:$B,space:qB,lofi:HB},KB=[{id:"classic",name:"Classic",icon:"🎮",desc:"Retro 8-bit bleeps"},{id:"ninja",name:"Ninja",icon:"🥷",desc:"Sharp sword slashes"},{id:"space",name:"Space",icon:"🌌",desc:"Sci-fi laser sounds"},{id:"lofi",name:"LoFi",icon:"🎵",desc:"Chill warm tones"}];function Ro(){const t=localStorage.getItem("sfxTheme")||"classic",e=GB[t]||$k,n=localStorage.getItem("sfxMuted")==="true";return{click:()=>!n&&e.click(),cross:()=>!n&&e.cross(),line:()=>!n&&e.line(),win:()=>!n&&e.win(),lose:()=>!n&&e.lose(),ping:()=>!n&&e.ping()}}function QB(){const t=localStorage.getItem("sfxMuted")==="true";return localStorage.setItem("sfxMuted",String(!t)),!t}function YB(){return localStorage.getItem("sfxMuted")==="true"}function qn(t,e=.1,n="sine",r=.1){const i=xy();if(!i)return;const s=i.createOscillator(),o=i.createGain();s.connect(o),o.connect(i.destination),s.type=n,s.frequency.value=t,o.gain.setValueAtTime(e,i.currentTime),o.gain.exponentialRampToValueAtTime(.001,i.currentTime+r),s.start(),s.stop(i.currentTime+r)}function vc(t,e,n=.1,r="sine"){const i=xy();if(!i)return;const s=i.createOscillator(),o=i.createGain();s.connect(o),o.connect(i.destination),s.type=r,s.frequency.setValueAtTime(t,i.currentTime),s.frequency.exponentialRampToValueAtTime(e,i.currentTime+.15),o.gain.setValueAtTime(n,i.currentTime),o.gain.exponentialRampToValueAtTime(.001,i.currentTime+.15),s.start(),s.stop(i.currentTime+.15)}function Md(t,e=.1,n="sine"){t.forEach((r,i)=>{setTimeout(()=>qn(r,e,n,.3),i*60)})}function XB(t=.05,e=100){const n=xy();if(!n)return;const r=n.createBuffer(1,n.sampleRate*.05,n.sampleRate),i=r.getChannelData(0);for(let u=0;u<i.length;u++)i[u]=Math.random()*2-1;const s=n.createBufferSource(),o=n.createBiquadFilter(),a=n.createGain();s.buffer=r,o.type="highpass",o.frequency.value=e,s.connect(o),o.connect(a),a.connect(n.destination),a.gain.setValueAtTime(t,n.currentTime),a.gain.exponentialRampToValueAtTime(.001,n.currentTime+.05),s.start(),s.stop(n.currentTime+.05)}function Vd(t=1){[523,659,784,1047].forEach((n,r)=>{setTimeout(()=>qn(n,.15,"square",.2/t),r*100/t)})}function Fd(t=1){[400,320,250].forEach((n,r)=>{setTimeout(()=>qn(n,.1,"sawtooth",.25/t),r*120/t)})}const JB=[{icon:"🤖",title:"vs Bot",sub:"Solo vs AI",path:"/bot"},{icon:"⚡",title:"Create Room",sub:"Host & invite",path:"/room/create"},{icon:"🔗",title:"Join Room",sub:"Enter code",path:"/room/join"},{icon:"🏆",title:"Leaderboard",sub:"Top players",path:"/leaderboard"},{icon:"👥",title:"Friends",sub:"Add & challenge",path:"/friends"},{icon:"📊",title:"History",sub:"Past games",path:"/history"}];function ZB(){const{profile:t}=Jn(),e=Pr(),n=Ro(),r=i=>{n.click(),e(i)};return g.jsxs("div",{className:"screen",style:{paddingTop:24,paddingBottom:80},children:[g.jsxs("div",{className:"text-center",style:{marginBottom:24},children:[g.jsx("div",{className:"hero-logo","data-text":"DiNGo",children:"DiNGo"}),g.jsxs("div",{className:"hero-badge",children:[g.jsx("span",{className:"dot"}),"LIVE MULTIPLAYER BINGO"]})]}),t&&g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:20,width:"100%",maxWidth:380},children:[g.jsx("span",{style:{fontSize:32},children:t.avatar||"🎯"}),g.jsxs("div",{children:[g.jsxs("div",{style:{fontWeight:700,fontSize:16},children:["Hey, ",t.displayName,"!"]}),g.jsxs("div",{className:"muted small",children:[t.wins||0,"W · ",t.losses||0,"L · ",t.winRate||0,"% WR"]})]}),g.jsx("button",{className:"btn btn-ghost",style:{marginLeft:"auto",padding:"6px 12px",fontSize:11},onClick:()=>r("/profile"),children:"⚙️ Edit"})]}),g.jsx("div",{className:"menu-grid",children:JB.map(i=>g.jsxs("div",{className:"menu-card",onClick:()=>r(i.path),children:[g.jsx("div",{className:"menu-icon",children:i.icon}),g.jsx("div",{className:"menu-title",children:i.title}),g.jsx("div",{className:"menu-sub",children:i.sub})]},i.path))}),g.jsx("div",{style:{marginTop:20,width:"100%",maxWidth:380,display:"flex",gap:8},children:[{label:"WINS",val:(t==null?void 0:t.wins)||0,color:"var(--c1)"},{label:"LOSSES",val:(t==null?void 0:t.losses)||0,color:"var(--c2)"},{label:"GAMES",val:(t==null?void 0:t.total)||0,color:"var(--c4)"}].map(i=>g.jsxs("div",{style:{flex:1,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"10px 0",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,color:i.color},children:i.val}),g.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:2},children:i.label})]},i.label))})]})}const e3=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"],t3=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#00b4ff","#ff6a00","#00ff88","#ff00ff","#ffffff","#f5a623"];function n3(){const{user:t,profile:e,refreshProfile:n}=Jn(),r=Pr(),i=Ro(),[s,o]=M.useState((e==null?void 0:e.displayName)||""),[a,u]=M.useState((e==null?void 0:e.avatar)||"🎯"),[c,h]=M.useState((e==null?void 0:e.color)||"#00ffcc"),[f,m]=M.useState(localStorage.getItem("sfxTheme")||"classic"),[y,I]=M.useState(YB()),[P,N]=M.useState(!1),[T,w]=M.useState("idle");M.useEffect(()=>{e&&(o(e.displayName||""),u(e.avatar||"🎯"),h(e.color||"#00ffcc"))},[e]);const A=async()=>{s.trim()&&(N(!0),await kB(t.uid,{displayName:s.trim(),avatar:a,color:c}),await n(t.uid),i.click(),N(!1))},D=E=>{setSfxTheme(E),m(E),setTimeout(()=>Ro().click(),50)},O=()=>{const E=QB();I(E)},j=async()=>{w("requesting");const E=await UB(t.uid);w(E?"granted":"denied")};return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"PROFILE"})]}),g.jsx("div",{style:{fontSize:64,marginBottom:8,textAlign:"center"},children:a}),g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,textAlign:"center",marginBottom:4},children:s||"Player"}),g.jsx("div",{className:"muted small text-center",style:{marginBottom:20},children:t==null?void 0:t.email}),g.jsx("div",{className:"card",children:g.jsxs("div",{className:"card-body",children:[g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("div",{className:"label",children:"Display Name"}),g.jsx("input",{type:"text",value:s,onChange:E=>o(E.target.value),maxLength:20,placeholder:"Your name"})]}),g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("div",{className:"label",children:"Avatar"}),g.jsx("div",{className:"avatar-grid",children:e3.map(E=>g.jsx("div",{className:`avatar-opt ${a===E?"selected":""}`,onClick:()=>{u(E),i.click()},children:E},E))})]}),g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("div",{className:"label",children:"Color"}),g.jsx("div",{className:"color-row",children:t3.map(E=>g.jsx("div",{className:`color-dot ${c===E?"selected":""}`,style:{background:E},onClick:()=>{h(E),i.click()}},E))})]}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:A,disabled:P,children:P?"Saving…":"✅ Save Profile"})]})}),g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"🔊 Sound Theme"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12},children:[g.jsx("span",{className:"muted small",children:"Volume"}),g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 14px",marginLeft:"auto"},onClick:O,children:y?"🔇 Muted":"🔊 On"})]}),g.jsx("div",{className:"sfx-grid",children:KB.map(E=>g.jsxs("div",{className:`sfx-opt ${f===E.id?"active":""}`,onClick:()=>D(E.id),children:[g.jsx("div",{className:"sfx-icon",children:E.icon}),g.jsx("div",{className:"sfx-name",children:E.name}),g.jsx("div",{className:"sfx-desc",children:E.desc})]},E.id))})]}),g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"🔔 Push Notifications"}),g.jsx("div",{className:"card",children:g.jsxs("div",{className:"card-body",children:[g.jsx("p",{className:"muted small",style:{marginBottom:12,lineHeight:1.6},children:"Get notified when a friend challenges you or your rank changes."}),g.jsx("button",{className:"btn btn-purple btn-full",onClick:j,disabled:T==="requesting"||T==="granted",children:T==="granted"?"✅ Notifications Enabled":T==="denied"?"❌ Permission Denied":T==="requesting"?"⏳ Requesting…":"🔔 Enable Notifications"})]})})]}),e&&g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"📊 Your Stats"}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[{label:"WINS",val:e.wins||0,color:"var(--c1)"},{label:"LOSSES",val:e.losses||0,color:"var(--c2)"},{label:"WIN RATE",val:`${e.winRate||0}%`,color:"var(--c3)"}].map(E=>g.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"12px 0",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,color:E.color},children:E.val}),g.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:E.label})]},E.label))})]}),g.jsx("div",{style:{width:"100%",maxWidth:440,marginTop:20,marginBottom:20},children:g.jsx("button",{className:"btn btn-ghost btn-full",style:{borderColor:"var(--c2)",color:"var(--c2)"},onClick:()=>MB(),children:"🚪 Sign Out"})})]})}const sn=[];for(let t=0;t<5;t++){const e=t*5;sn.push([e,e+1,e+2,e+3,e+4])}for(let t=0;t<5;t++)sn.push([t,t+5,t+10,t+15,t+20]);sn.push([0,6,12,18,24],[4,8,12,16,20]);function Wm(){const t=Array.from({length:25},(e,n)=>n+1);for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Ia(t,e){return sn.filter(n=>n.every(r=>e.includes(t[r]))).length}function r3(t,e){const n=new Set;return sn.forEach(r=>{r.every(i=>e.includes(t[i]))&&r.forEach(i=>n.add(i))}),[...n]}function ou(t){return Array.from({length:25},(e,n)=>n+1).filter(e=>!t.includes(e))}function nT(t,e,n){const r=ou(t);return r[Math.floor(Math.random()*r.length)]}function i3(t,e,n){const r=ou(t),i={};return r.forEach(s=>{i[s]=0;const o=n.indexOf(s);sn.forEach(a=>{if(a.includes(o)){const u=a.filter(c=>t.includes(n[c])).length;i[s]+=u*10}})}),r.reduce((s,o)=>i[o]>i[s]?o:s,r[0])}function qk(t,e,n){const r=ou(t),i={};return r.forEach(s=>{i[s]=0;const o=n.indexOf(s),a=e.indexOf(s);sn.forEach(f=>{if(f.includes(o)){const m=f.filter(y=>t.includes(n[y])).length;m===4?i[s]+=2e5:m===3?i[s]+=15e3:m===2?i[s]+=1500:m===1?i[s]+=150:i[s]+=15}if(f.includes(a)){const m=f.filter(y=>t.includes(e[y])).length;m===4?i[s]+=18e4:m===3?i[s]+=3e4:m===2?i[s]+=3e3:m===1?i[s]+=300:i[s]+=30}});const u=[...t,s],c=e.map(f=>u.includes(f)?1:0);let h=0;sn.forEach(f=>{f.every(m=>c[m])&&h++}),i[s]-=h*12e4}),r.reduce((s,o)=>i[o]>i[s]?o:s,r[0])}function s3(t,e,n){const r=ou(t);for(const i of sn){const s=i.map(a=>n[a]),o=s.filter(a=>!t.includes(a));if(o.length===1&&r.includes(o[0])&&s.filter(a=>t.includes(a)).length===4)return o[0]}for(const i of sn){const s=i.map(a=>e[a]),o=s.filter(a=>!t.includes(a));if(o.length===1&&r.includes(o[0])&&s.filter(a=>t.includes(a)).length===4)return o[0]}return qk(t,e,n)}function Hk(t,e,n){const r=ou(t);for(const a of sn){const u=a.map(h=>n[h]),c=u.filter(h=>!t.includes(h));if(c.length===1&&r.includes(c[0])&&u.filter(h=>t.includes(h)).length===4)return c[0]}for(const a of sn){const u=a.map(h=>e[h]),c=u.filter(h=>!t.includes(h));if(c.length===1&&r.includes(c[0])&&u.filter(h=>t.includes(h)).length===4)return c[0]}function i(a){let u=0;return sn.forEach(c=>{const h=c.filter(m=>a.includes(n[m])).length,f=c.filter(m=>a.includes(e[m])).length;h===5?u+=1e6:h===4?u+=5e4:h===3?u+=2e3:h===2&&(u+=200),f===5?u-=8e5:f===4?u-=4e4:f===3&&(u-=1500)}),u}let s=-1/0,o=r[0];return r.forEach(a=>{const u=[...t,a],c=i(u)-i(t),h=r.filter(y=>y!==a).slice(0,8);let f=-1/0;h.forEach(y=>{const I=[...u,y],P=i(I)-i(u);P>f&&(f=P)});const m=c-f*.85;m>s&&(s=m,o=a)}),o}function o3(t,e,n){return Hk(t,e,n)}function a3(t,e,n,r){switch(t){case"easy":return nT(e);case"medium":return i3(e,n,r);case"hard":return qk(e,n,r);case"expert":return s3(e,n,r);case"nightmare":return Hk(e,n,r);case"godmode":return o3(e,n,r);default:return nT(e)}}function Eh({board:t,selected:e,onCellClick:n,disabled:r=!1}){const i=new Set(r3(t,e));return g.jsx("div",{className:"board-wrap",children:g.jsx("div",{className:"board",children:t.map((s,o)=>{const a=e.includes(s),u=i.has(o);return g.jsx("div",{className:`cell ${a?"crossed":""} ${u?"win-line":""}`,onClick:()=>!r&&!a&&n&&n(s),style:{cursor:r||a?"default":"pointer"},children:s},s)})})})}function Gk({show:t,isWin:e,title:n,sub:r,onPlayAgain:i,onHome:s,showPlayAgain:o=!0}){return g.jsx("div",{className:`win-overlay ${t?"show":""}`,children:g.jsxs("div",{className:"win-card",children:[g.jsx("div",{className:"win-emoji",children:e?"🎉":"💀"}),g.jsx("div",{className:"win-title",style:{color:e?"var(--c1)":"var(--c2)"},children:n}),g.jsx("div",{className:"win-sub",children:r}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[o&&g.jsx("button",{className:"btn btn-primary btn-full",onClick:i,children:"↺ Play Again"}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:s,children:"🏠 Home"})]})]})})}async function Kk(t,e){const n=Mt(He,"users",t),i={total:ks(1),wins:ks(e?1:0),losses:ks(e?0:1)};await rn(n,i);const{getDoc:s}=await Ld(async()=>{const{getDoc:a}=await Promise.resolve().then(()=>eA);return{getDoc:a}},void 0),o=await s(n);if(o.exists()){const a=o.data(),u=a.total||0,c=a.wins||0,h=u>0?Math.round(c/u*100):0;await rn(n,{winRate:h})}}async function l3(){const t=Ql(ts(He,"users"),D_("wins","desc"),L_(50));return(await vd(t)).docs.map((n,r)=>({rank:r+1,uid:n.id,...n.data()}))}async function Qk({p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a,mode:u,botLevel:c}){await j_(ts(He,"matches"),{players:[t,e],p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a,mode:u,botLevel:c||null,timestamp:Xl()})}async function u3(t){const e=Ql(ts(He,"matches"),wo("players","array-contains",t),D_("timestamp","desc"),L_(20));return(await vd(e)).docs.map(r=>({id:r.id,...r.data()}))}const fa=[{id:"easy",label:"Easy",icon:"🟢",color:"var(--c1)"},{id:"medium",label:"Medium",icon:"🟡",color:"var(--c3)"},{id:"hard",label:"Hard",icon:"🔴",color:"var(--c2)"},{id:"expert",label:"Expert",icon:"🟣",color:"var(--c4)"},{id:"nightmare",label:"Nightmare",icon:"🖤",color:"#ff4444"},{id:"godmode",label:"GodMode",icon:"👑",color:"var(--c3)"}],Gu={easy:"Noob-Bot",medium:"Mid-Bot",hard:"Hard-Bot",expert:"Expert-Bot",nightmare:"Nightmare",godmode:"GodMode"},Ku=5,Qu=20;function c3(){var Q,J;const{user:t,profile:e}=Jn(),n=Pr(),[r,i]=M.useState("select"),[s,o]=M.useState("medium"),[a,u]=M.useState([]),[c,h]=M.useState([]),[f,m]=M.useState([]),[y,I]=M.useState([]),[P,N]=M.useState(!0),[T,w]=M.useState(0),[A,D]=M.useState(0),[O,j]=M.useState(null),[E,v]=M.useState(Qu),[S,R]=M.useState(!1),k=M.useRef(null),x=M.useRef(null),C=Ro(),Ke=()=>{const G=Wm(),ne=Wm();u(G),h(ne),m([]),I([]),N(!0),w(0),D(0),j(null),i("game"),x.current=Date.now(),C.click()};M.useEffect(()=>{if(!(r!=="game"||!P||O))return v(Qu),k.current=setInterval(()=>{v(G=>{if(G<=1){clearInterval(k.current);const ne=a.filter(oe=>!f.includes(oe));if(ne.length>0){const oe=ne[Math.floor(Math.random()*ne.length)];Qt(oe,!0)}return Qu}return G-1})},1e3),()=>clearInterval(k.current)},[P,r,O,f]);const Qt=(G,ne=!1)=>{if(!P||O)return;clearInterval(k.current),C.cross();const oe=[...f,G];m(oe);const je=Ia(a,oe);if(je>T&&je>0&&C.line(),w(je),je>=Ku){Qe(!0,oe);return}N(!1),Pt(oe)},Pt=G=>{const ne={easy:500,medium:800,hard:1e3,expert:1200,nightmare:1400,godmode:1600}[s]||800;R(!0),setTimeout(()=>{R(!1);const oe=a3(s,G,a,c);if(oe==null){N(!0);return}C.cross();const lt=[...G,oe];m(lt);const Ye=Ia(c,lt);if(Ye>A&&Ye>0&&C.line(),D(Ye),Ye>=Ku){Qe(!1,lt);return}N(!0)},ne)},Qe=async(G,ne)=>{const oe=Math.round((Date.now()-x.current)/1e3),je=G?["Domination! 👑","You crushed it! 🔥","GG! Lethal ⚡","Champion energy! 💎"]:["Bot outsmarted you 🤖","GG, rematch? 💪","Bot.exe wins 😤"];if(j({won:G,title:G?"🎉 YOU WIN!":"🤖 BOT WINS!",sub:je[Math.floor(Math.random()*je.length)]}),G?C.win():C.lose(),i("over"),t){await Kk(t.uid,G);const lt=Ia(a,ne),Ye=Ia(c,ne);await Qk({p1Uid:t.uid,p2Uid:"bot",p1Name:(e==null?void 0:e.displayName)||"Player",p2Name:Gu[s],winner:G?t.uid:"bot",p1Lines:lt,p2Lines:Ye,duration:oe,mode:"bot",botLevel:s})}};if(r==="select")return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🤖 VS BOT"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{className:"label",style:{marginBottom:14},children:"Choose Difficulty"}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:20},children:fa.map(G=>g.jsxs("button",{className:`diff-btn ${s===G.id?"active":""}`,style:{borderColor:s===G.id?G.color:void 0,color:s===G.id?G.color:void 0},onClick:()=>{o(G.id),C.click()},children:[g.jsx("span",{style:{fontSize:20},children:G.icon}),G.label]},G.id))}),g.jsx("div",{style:{background:"var(--panel2)",borderRadius:"var(--r)",padding:12,marginBottom:20},children:fa.find(G=>G.id===s)&&g.jsxs("div",{style:{textAlign:"center"},children:[g.jsx("span",{style:{fontSize:28},children:fa.find(G=>G.id===s).icon}),g.jsx("div",{style:{fontWeight:700,marginTop:6},children:Gu[s]}),g.jsx("div",{className:"muted small",style:{marginTop:4},children:{easy:"Random moves — good for beginners",medium:"Basic strategy — fair challenge",hard:"Aggressive blocking — tough",expert:"Win-first + blocking — very tough",nightmare:"Lookahead AI — near-unbeatable",godmode:"Maximum difficulty — can you win?"}[s]})]})}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:Ke,children:"⚡ Start Game"})]})})]});const W=E/Qu*100;return g.jsxs("div",{className:"screen",style:{paddingTop:10,paddingBottom:20},children:[g.jsxs("div",{style:{width:"100%",maxWidth:440,marginBottom:10,display:"flex",alignItems:"center",gap:10},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:11},onClick:()=>n("/"),children:"🏠"}),g.jsx("div",{style:{flex:1,textAlign:"center"},children:g.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:14,letterSpacing:2,color:"var(--c1)"},children:[(Q=fa.find(G=>G.id===s))==null?void 0:Q.icon," ",Gu[s].toUpperCase()]})}),g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18},children:[g.jsx("span",{style:{color:"var(--c1)"},children:T}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 6px"},children:"·"}),g.jsx("span",{style:{color:"var(--c2)"},children:A})]})]}),g.jsxs("div",{className:"player-row",style:{maxWidth:440,marginBottom:8},children:[g.jsx("span",{style:{fontSize:28},children:(e==null?void 0:e.avatar)||"🎯"}),g.jsxs("div",{children:[g.jsx("div",{className:"player-name",children:(e==null?void 0:e.displayName)||"You"}),g.jsxs("div",{className:"player-lines",children:[T," / ",Ku," lines"]})]}),P&&!S&&g.jsx("span",{className:"turn-badge",style:{marginLeft:"auto"},children:"YOUR TURN"})]}),P&&!S&&g.jsx("div",{className:"timer-bar-wrap",style:{maxWidth:440,marginBottom:8},children:g.jsx("div",{className:"timer-bar",style:{width:`${W}%`,background:E<=5?"var(--c2)":"var(--c1)"}})}),S&&g.jsx("div",{style:{textAlign:"center",fontSize:12,color:"var(--ink2)",marginBottom:8,letterSpacing:2,textTransform:"uppercase"},children:"🤖 Bot is thinking…"}),g.jsx(Eh,{board:a,selected:f,onCellClick:Qt,disabled:!P||S||!!O}),g.jsxs("div",{className:"player-row",style:{maxWidth:440,marginTop:14},children:[g.jsx("span",{style:{fontSize:28},children:(J=fa.find(G=>G.id===s))==null?void 0:J.icon}),g.jsxs("div",{children:[g.jsx("div",{className:"player-name",children:Gu[s]}),g.jsxs("div",{className:"player-lines",children:[A," / ",Ku," lines"]})]}),!P&&S&&g.jsx("span",{className:"turn-badge",style:{marginLeft:"auto",background:"var(--c2)"},children:"BOT TURN"})]}),g.jsx("div",{style:{marginTop:8,opacity:.6},children:g.jsx(Eh,{board:c,selected:f,disabled:!0})}),g.jsx(Gk,{show:!!O,isWin:O==null?void 0:O.won,title:O==null?void 0:O.title,sub:O==null?void 0:O.sub,onPlayAgain:Ke,onHome:()=>n("/")})]})}function h3(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function d3(t,e,n){await wy(Gn(Kn,`rooms/${t}`),{gameState:{status:"waiting",turn:"p1",p1Board:n,p2Board:[],p1Selected:[],p2Selected:[],p1Lines:0,p2Lines:0,winner:null,p1Exited:!1,p2Exited:!1,createdAt:Date.now()},players:{p1:{...e,role:"p1"}},rematch:{p1:!1,p2:!1}})}async function f3(t,e,n){var s;const r=await Vj(Gn(Kn,`rooms/${t}`));if(!r.exists())throw new Error("Room not found");const i=r.val();if((s=i.players)!=null&&s.p2)throw new Error("Room is full");return await iu(Gn(Kn,`rooms/${t}`),{"players/p2":{...e,role:"p2"},"gameState/p2Board":n,"gameState/status":"playing"}),i}function Yk(t,e){const n=Gn(Kn,`rooms/${t}`);return jj(n,r=>e(r.val())),()=>Uj(n)}async function p3(t,e,n,r,i){const s=e==="p1"?"p2":"p1",o={[`gameState/${e}Selected`]:r,[`gameState/${e}Lines`]:i,"gameState/turn":s};await iu(Gn(Kn,`rooms/${t}`),o)}async function m3(t,e){await iu(Gn(Kn,`rooms/${t}/gameState`),{winner:e,status:"finished"})}async function rT(t,e){await Lj(Gn(Kn,`rooms/${t}/chat`),{...e,ts:Date.now()})}async function g3(t,e){await iu(Gn(Kn,`rooms/${t}/gameState`),{[`${e}Exited`]:!0})}async function _3(t,e){await iu(Gn(Kn,`rooms/${t}/rematch`),{[e]:!0})}async function y3(t){try{await Mj(Gn(Kn,`rooms/${t}`))}catch{}}function v3(){const{mode:t}=RS(),{user:e,profile:n}=Jn(),r=Pr(),i=Ro(),[s,o]=M.useState(""),[a,u]=M.useState(""),[c,h]=M.useState("idle"),[f,m]=M.useState(""),y=M.useState(()=>Wm())[0],I={uid:e==null?void 0:e.uid,name:(n==null?void 0:n.displayName)||"Player",avatar:(n==null?void 0:n.avatar)||"🎯"},P=async()=>{h("waiting");const w=h3();o(w),await d3(w,I,y),i.click();const A=Yk(w,D=>{var O,j;(O=D==null?void 0:D.players)!=null&&O.p2&&((j=D==null?void 0:D.gameState)==null?void 0:j.status)==="playing"&&(A(),r(`/game/${w}`,{state:{role:"p1",board:y,roomData:D}})),D||(h("error"),m("Room expired."))})},N=async()=>{const w=a.trim().toUpperCase();if(w.length!==4){m("Enter a 4-character room code.");return}h("joining"),m("");try{const A=await f3(w,I,y);i.click(),r(`/game/${w}`,{state:{role:"p2",board:y,roomData:A}})}catch(A){h("idle"),m(A.message||"Could not join room. Check the code.")}},T=async()=>{s&&await y3(s),r("/")};return t==="create"?g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:T,children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"⚡ CREATE ROOM"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",style:{textAlign:"center"},children:[c==="idle"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{fontSize:48,marginBottom:16},children:"⚡"}),g.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:8},children:"Create a Private Room"}),g.jsx("div",{className:"muted small",style:{marginBottom:24},children:"Share the code with a friend. They join, you battle!"}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:P,children:"🎮 Create Room"})]}),c==="waiting"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"label",style:{marginBottom:8},children:"ROOM CODE"}),g.jsx("div",{className:"room-code-display",children:s}),g.jsx("div",{className:"room-status",children:"Share this code with your friend"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,justifyContent:"center",marginBottom:20},children:[g.jsx("div",{className:"spinner"}),g.jsx("span",{className:"muted small",children:"Waiting for opponent…"})]}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:()=>{var w;(w=navigator.clipboard)==null||w.writeText(s)},style:{marginBottom:10},children:"📋 Copy Code"}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:T,children:"Cancel"})]})]})})]}):g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🔗 JOIN ROOM"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{style:{fontSize:48,textAlign:"center",marginBottom:16},children:"🔗"}),g.jsx("div",{className:"label",children:"Room Code"}),g.jsx("input",{type:"text",placeholder:"ABCD",value:a,onChange:w=>u(w.target.value.toUpperCase().slice(0,4)),onKeyDown:w=>w.key==="Enter"&&N(),style:{textAlign:"center",fontSize:28,letterSpacing:10,fontFamily:"'Black Han Sans',sans-serif",marginBottom:16}}),f&&g.jsx("div",{style:{color:"var(--c2)",fontSize:13,marginBottom:14,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px"},children:f}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:N,disabled:c==="joining"||a.length!==4,children:c==="joining"?"⏳ Joining…":"🎮 Join Game"})]})})]})}const ip=5,Yu=25,w3=["👍","🔥","😂","😱","🎯","💀","🏆","😤","🤯","👏","😈","🫡"];function E3(){var Ye;const{roomId:t}=RS(),{state:e}=jh(),{user:n,profile:r}=Jn(),i=Pr(),s=Ro(),o=(e==null?void 0:e.role)||"p1",a=(e==null?void 0:e.board)||[],u=o==="p1"?"p2":"p1",[c,h]=M.useState(null),[f,m]=M.useState(!1),[y,I]=M.useState([]),[P,N]=M.useState(""),[T,w]=M.useState(null),[A,D]=M.useState(Yu),[O,j]=M.useState({p1:!1,p2:!1}),E=M.useRef(null),v=M.useRef(Date.now()),S=M.useRef(!1),R=M.useRef(null),k=c==null?void 0:c.gameState,x=k?k[`${o}Selected`]||[]:[],C=k?k[`${u}Selected`]||[]:[],Ke=k&&k[`${o}Lines`]||0,Qt=k&&k[`${u}Lines`]||0,Pt=(k==null?void 0:k.turn)===o,Qe=(Ye=c==null?void 0:c.players)==null?void 0:Ye[u];M.useEffect(()=>{const re=Yk(t,we=>{if(h(we),we!=null&&we.chat){const Nt=Object.values(we.chat).slice(-40);I(Nt)}we!=null&&we.rematch&&j(we.rematch);const Ue=we==null?void 0:we.gameState;if(Ue!=null&&Ue.winner&&!S.current){S.current=!0;const Nt=Ue.winner===o,Mn=Nt?["Domination! 👑","Flawless! ⚡","You crushed it 🔥"]:["GG, rematch? 💪","Bot beat you… jk 😤","Respect the grind 🤝"];w({won:Nt,title:Nt?"🎉 YOU WIN!":"😔 YOU LOST!",sub:Mn[Math.floor(Math.random()*Mn.length)]}),Nt?s.win():s.lose(),Q(Nt,Ue)}Ue!=null&&Ue[`${u}Exited`]&&!S.current&&(S.current=!0,w({won:!0,title:"🏆 OPPONENT LEFT",sub:"You win by default!"}),s.win())});return()=>{re()}},[t]),M.useEffect(()=>{if(!(!Pt||T))return D(Yu),E.current=setInterval(()=>{D(re=>{if(re<=1){clearInterval(E.current);const we=a.filter(Ue=>!x.includes(Ue));if(we.length>0){const Ue=we[Math.floor(Math.random()*we.length)];W(Ue)}return Yu}return re-1})},1e3),()=>clearInterval(E.current)},[Pt,T,x]),M.useEffect(()=>{var re;(re=R.current)==null||re.scrollIntoView({behavior:"smooth"})},[y]);const W=async re=>{if(!Pt||T||x.includes(re))return;clearInterval(E.current),s.cross();const we=[...x,re],Ue=Ia(a,we);Ue>Ke&&s.line(),await p3(t,o,re,we,Ue),Ue>=ip&&await m3(t,o)},Q=async(re,we)=>{var Nt,Mn;const Ue=Math.round((Date.now()-v.current)/1e3);if(n&&o==="p1"){await Kk(n.uid,re);const Yt=(Nt=c==null?void 0:c.players)==null?void 0:Nt.p1,Xt=(Mn=c==null?void 0:c.players)==null?void 0:Mn.p2;await Qk({p1Uid:(Yt==null?void 0:Yt.uid)||"p1",p2Uid:(Xt==null?void 0:Xt.uid)||"p2",p1Name:(Yt==null?void 0:Yt.name)||"P1",p2Name:(Xt==null?void 0:Xt.name)||"P2",winner:we.winner==="p1"?Yt==null?void 0:Yt.uid:Xt==null?void 0:Xt.uid,p1Lines:we.p1Lines||0,p2Lines:we.p2Lines||0,duration:Ue,mode:"multiplayer"})}},J=async re=>{await rT(t,{text:re,isEmoji:!0,sender:o,senderName:(r==null?void 0:r.displayName)||"Me"}),m(!1)},G=async()=>{P.trim()&&(await rT(t,{text:P.trim(),isEmoji:!1,sender:o,senderName:(r==null?void 0:r.displayName)||"Me"}),N(""))},ne=async()=>{await g3(t,o),i("/")},oe=async()=>{await _3(t,o)};if(M.useEffect(()=>{O.p1&&O.p2&&i("/room/create")},[O]),!c)return g.jsxs("div",{className:"screen",style:{justifyContent:"center",alignItems:"center"},children:[g.jsx("div",{className:"spinner"}),g.jsx("div",{className:"muted small",style:{marginTop:12},children:"Connecting…"})]});const je=A/Yu*100,lt=(k==null?void 0:k[`${u}Board`])||[];return g.jsxs("div",{className:"screen",style:{paddingTop:10,paddingBottom:20},children:[g.jsxs("div",{style:{width:"100%",maxWidth:440,display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:11},onClick:ne,children:"🏠"}),g.jsx("div",{style:{flex:1,textAlign:"center"},children:g.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:13,letterSpacing:2,color:"var(--c4)"},children:["ROOM ",t]})}),g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18},children:[g.jsx("span",{style:{color:"var(--c1)"},children:Ke}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 4px"},children:"–"}),g.jsx("span",{style:{color:"var(--c2)"},children:Qt})]})]}),g.jsxs("div",{className:"player-row",style:{maxWidth:440,marginBottom:6},children:[g.jsx("span",{style:{fontSize:26},children:(Qe==null?void 0:Qe.avatar)||"🎯"}),g.jsxs("div",{children:[g.jsx("div",{className:"player-name",children:(Qe==null?void 0:Qe.name)||"Opponent"}),g.jsxs("div",{className:"player-lines",children:[Qt," / ",ip," lines"]})]}),!Pt&&g.jsx("span",{className:"turn-badge",style:{marginLeft:"auto",background:"var(--c2)"},children:"THEIR TURN"})]}),g.jsx("div",{style:{opacity:.55,marginBottom:14},children:g.jsx(Eh,{board:lt,selected:C,disabled:!0})}),g.jsxs("div",{className:"player-row",style:{maxWidth:440,marginBottom:6},children:[g.jsx("span",{style:{fontSize:26},children:(r==null?void 0:r.avatar)||"🎯"}),g.jsxs("div",{children:[g.jsx("div",{className:"player-name",children:(r==null?void 0:r.displayName)||"You"}),g.jsxs("div",{className:"player-lines",children:[Ke," / ",ip," lines"]})]}),Pt&&g.jsx("span",{className:"turn-badge",style:{marginLeft:"auto"},children:"YOUR TURN"})]}),Pt&&!T&&g.jsx("div",{className:"timer-bar-wrap",style:{maxWidth:440,marginBottom:6},children:g.jsx("div",{className:"timer-bar",style:{width:`${je}%`,background:A<=5?"var(--c2)":"var(--c1)"}})}),g.jsx(Eh,{board:a,selected:x,onCellClick:W,disabled:!Pt||!!T}),g.jsx("button",{className:"chat-fab",onClick:()=>m(re=>!re),children:"💬"}),g.jsxs("div",{className:`chat-panel ${f?"open":""}`,children:[g.jsxs("div",{className:"chat-messages",style:{maxHeight:120},children:[y.map((re,we)=>g.jsx("div",{className:`chat-msg ${re.sender===o?"mine":""}`,children:g.jsx("div",{className:`chat-bubble${re.isEmoji?" emoji-only":""}`,style:{fontSize:re.isEmoji?22:13},children:re.text})},we)),g.jsx("div",{ref:R})]}),g.jsx("div",{className:"chat-emoji-bar",children:w3.map(re=>g.jsx("button",{className:"emoji-btn",onClick:()=>J(re),children:re},re))}),g.jsxs("div",{className:"chat-input-row",children:[g.jsx("input",{className:"chat-input",type:"text",placeholder:"Type…",value:P,onChange:re=>N(re.target.value),onKeyDown:re=>re.key==="Enter"&&G(),style:{padding:"8px 10px",fontSize:13}}),g.jsx("button",{className:"btn btn-primary",style:{padding:"8px 12px"},onClick:G,children:"➤"})]})]}),g.jsx(Gk,{show:!!T,isWin:T==null?void 0:T.won,title:T==null?void 0:T.title,sub:T==null?void 0:T.sub,onPlayAgain:oe,onHome:ne,showPlayAgain:!0})]})}function T3(){const{user:t}=Jn(),e=Pr(),[n,r]=M.useState([]),[i,s]=M.useState(!0);M.useEffect(()=>{l3().then(u=>{r(u),s(!1)})},[]);const o=u=>u===1?{color:"var(--c3)",fontSize:22}:u===2?{color:"#aaa",fontSize:20}:u===3?{color:"#cd7f32",fontSize:18}:{color:"var(--ink3)",fontSize:16},a=u=>u===1?"🥇":u===2?"🥈":u===3?"🥉":`#${u}`;return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>e("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🏆 LEADERBOARD"})]}),i?g.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:g.jsx("div",{className:"spinner"})}):g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{style:{padding:"4px 0"},children:[n.length===0&&g.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:"No players yet. Be the first!"}),n.map(u=>g.jsxs("div",{className:"lb-row",style:{background:u.uid===(t==null?void 0:t.uid)?"rgba(0,255,204,0.05)":"transparent"},children:[g.jsx("div",{style:{...o(u.rank),fontFamily:"'Black Han Sans',sans-serif",width:36,textAlign:"center"},children:a(u.rank)}),g.jsx("div",{style:{fontSize:24},children:u.avatar||"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsxs("div",{style:{fontWeight:700,fontSize:14},children:[u.displayName,u.uid===(t==null?void 0:t.uid)&&g.jsx("span",{style:{fontSize:10,color:"var(--c1)",marginLeft:6},children:"YOU"})]}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[u.total||0," games · ",u.winRate||0,"% WR"]})]}),g.jsxs("div",{style:{textAlign:"right"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:"var(--c1)"},children:u.wins||0}),g.jsx("div",{style:{fontSize:10,color:"var(--ink3)",letterSpacing:1,textTransform:"uppercase"},children:"wins"})]})]},u.uid))]})})]})}async function I3(t,e,n){const r=Ql(ts(He,"friendRequests"),wo("from","==",t),wo("to","==",e));return(await vd(r)).empty?(await j_(ts(He,"friendRequests"),{from:t,to:e,fromName:n,status:"pending",timestamp:Xl()}),{success:!0}):{error:"Request already sent"}}async function S3(t,e,n){await rn(Mt(He,"friendRequests",t),{status:"accepted"}),await rn(Mt(He,"users",e),{friends:Am(n)}),await rn(Mt(He,"users",n),{friends:Am(e)})}async function C3(t){await rn(Mt(He,"friendRequests",t),{status:"declined"})}async function R3(t,e){await rn(Mt(He,"users",t),{friends:km(e)}),await rn(Mt(He,"users",e),{friends:km(t)})}function A3(t,e){const n=Ql(ts(He,"friendRequests"),wo("to","==",t),wo("status","==","pending"));return JR(n,r=>{e(r.docs.map(i=>({id:i.id,...i.data()})))})}async function k3(t){if(!t||t.length===0)return[];const e=[];for(const n of t){const r=await yd(Mt(He,"users",n));r.exists()&&e.push({uid:n,...r.data()})}return e}function P3(){const{user:t,profile:e,refreshProfile:n}=Jn(),r=Pr(),[i,s]=M.useState([]),[o,a]=M.useState([]),[u,c]=M.useState(""),[h,f]=M.useState([]),[m,y]=M.useState(!1),[I,P]=M.useState("friends");M.useEffect(()=>{e!=null&&e.friends&&k3(e.friends).then(s)},[e]),M.useEffect(()=>t?A3(t.uid,a):void 0,[t]);const N=async()=>{if(!u.trim())return;y(!0);const O=await NB(u.trim());f(O.filter(j=>j.uid!==t.uid)),y(!1)},T=async O=>{const j=await I3(t.uid,O.uid,e.displayName);j.error?yc("⚠️ Already sent",j.error,"info"):yc("✅ Request Sent",`Friend request sent to ${O.displayName}`,"success")},w=async O=>{await S3(O.id,t.uid,O.from),await n(t.uid),yc("✅ Friends!",`You and ${O.fromName} are now friends.`,"success")},A=async O=>{await C3(O.id)},D=async O=>{await R3(t.uid,O),await n(t.uid),s(j=>j.filter(E=>E.uid!==O))};return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"👥 FRIENDS"}),o.length>0&&g.jsx("span",{style:{background:"var(--c2)",color:"#fff",fontSize:11,fontWeight:700,borderRadius:"50%",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"auto"},children:o.length})]}),g.jsx("div",{style:{display:"flex",gap:8,width:"100%",maxWidth:440,marginBottom:16},children:[{id:"friends",label:`Friends (${i.length})`},{id:"requests",label:`Requests ${o.length>0?`(${o.length})`:""}`},{id:"search",label:"🔍 Find"}].map(O=>g.jsx("button",{className:`btn ${I===O.id?"btn-primary":"btn-ghost"}`,style:{flex:1,padding:"8px 6px",fontSize:11},onClick:()=>P(O.id),children:O.label},O.id))}),I==="friends"&&g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{children:[i.length===0&&g.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:["No friends yet.",g.jsx("br",{}),g.jsx("span",{style:{fontSize:13},children:"Search for players to add!"})]}),i.map(O=>g.jsxs("div",{className:"friend-row",children:[g.jsx("div",{style:{fontSize:26},children:O.avatar||"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:O.displayName}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[O.wins||0,"W · ",O.losses||0,"L"]})]}),g.jsx("div",{style:{marginRight:10},children:O.isOnline?g.jsx("div",{className:"online-dot"}):g.jsx("div",{className:"offline-dot"})}),g.jsx("button",{className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:11},onClick:()=>D(O.uid),children:"Remove"})]},O.uid))]})}),I==="requests"&&g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{children:[o.length===0&&g.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:"No pending requests."}),o.map(O=>g.jsxs("div",{className:"friend-row",children:[g.jsx("div",{style:{fontSize:26},children:"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:O.fromName}),g.jsx("div",{className:"muted small",children:"Wants to be friends"})]}),g.jsxs("div",{style:{display:"flex",gap:6},children:[g.jsx("button",{className:"btn btn-primary",style:{padding:"6px 12px",fontSize:11},onClick:()=>w(O),children:"✓ Accept"}),g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 10px",fontSize:11},onClick:()=>A(O),children:"✕"})]})]},O.id))]})}),I==="search"&&g.jsxs("div",{style:{width:"100%",maxWidth:440},children:[g.jsxs("div",{style:{display:"flex",gap:8,marginBottom:14},children:[g.jsx("input",{type:"text",placeholder:"Search by name…",value:u,onChange:O=>c(O.target.value),onKeyDown:O=>O.key==="Enter"&&N(),style:{flex:1}}),g.jsx("button",{className:"btn btn-primary",onClick:N,disabled:m,children:m?"…":"🔍"})]}),h.length>0&&g.jsx("div",{className:"card",children:h.map(O=>g.jsxs("div",{className:"friend-row",children:[g.jsx("div",{style:{fontSize:26},children:O.avatar||"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:O.displayName}),g.jsxs("div",{className:"muted small",children:[O.wins||0,"W · ",O.losses||0,"L"]})]}),g.jsx("button",{className:"btn btn-primary",style:{padding:"6px 12px",fontSize:11},onClick:()=>T(O),children:"+ Add"})]},O.uid))}),h.length===0&&u&&!m&&g.jsx("div",{style:{textAlign:"center",color:"var(--ink2)",padding:20},children:"No players found."})]})]})}function N3(t){if(!t)return"—";const e=Math.floor(t/60),n=t%60;return e>0?`${e}m ${n}s`:`${n}s`}function x3(t){return t?(t.toDate?t.toDate():new Date(t)).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function b3(){const{user:t}=Jn(),e=Pr(),[n,r]=M.useState([]),[i,s]=M.useState(!0);return M.useEffect(()=>{t&&u3(t.uid).then(o=>{r(o),s(!1)})},[t]),g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>e("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"📊 HISTORY"})]}),i?g.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:g.jsx("div",{className:"spinner"})}):n.length===0?g.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",paddingTop:60},children:[g.jsx("div",{style:{fontSize:48,marginBottom:12},children:"🎮"}),g.jsx("div",{style:{fontWeight:700,marginBottom:4},children:"No games yet"}),g.jsx("div",{style:{fontSize:13},children:"Play your first game to see history here!"})]}):g.jsx("div",{className:"card",style:{maxWidth:440},children:n.map(o=>{const a=o.winner===t.uid,u=o.p1Uid===t.uid,c=u?o.p1Lines:o.p2Lines,h=u?o.p2Lines:o.p1Lines,f=u?o.p2Name:o.p1Name;return g.jsxs("div",{className:"history-row",children:[g.jsx("div",{style:{fontSize:28,width:36,textAlign:"center"},children:a?"🏆":"💀"}),g.jsxs("div",{style:{flex:1},children:[g.jsxs("div",{style:{fontWeight:700,fontSize:14},children:["vs ",f||(o.mode==="bot"?`🤖 ${o.botLevel||"Bot"}`:"Unknown")]}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[x3(o.timestamp)," · ",N3(o.duration)]})]}),g.jsxs("div",{style:{textAlign:"right"},children:[g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18},children:[g.jsx("span",{style:{color:"var(--c1)"},children:c||0}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 4px"},children:"–"}),g.jsx("span",{style:{color:"var(--c2)"},children:h||0})]}),g.jsx("div",{className:a?"result-win":"result-loss",children:a?"WIN":"LOSS"})]})]},o.id)})})]})}function Vr({children:t}){const{user:e,loading:n}=Jn();return n?g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:g.jsx("div",{className:"spinner"})}):e?t:g.jsx(Zp,{to:"/login",replace:!0})}function O3(){const{user:t}=Jn();return M.useEffect(()=>{BB(n=>{var r,i;yc(((r=n.notification)==null?void 0:r.title)||"DiNGo",((i=n.notification)==null?void 0:i.body)||"","info")})},[]),g.jsxs(K1,{basename:"/DINGO-NEW-VERSION-/",children:[g.jsx(FB,{}),g.jsxs(q1,{children:[g.jsx(En,{path:"/login",element:t?g.jsx(Zp,{to:"/",replace:!0}):g.jsx(zB,{})}),g.jsx(En,{path:"/",element:g.jsx(Vr,{children:g.jsx(ZB,{})})}),g.jsx(En,{path:"/profile",element:g.jsx(Vr,{children:g.jsx(n3,{})})}),g.jsx(En,{path:"/bot",element:g.jsx(Vr,{children:g.jsx(c3,{})})}),g.jsx(En,{path:"/room/:mode",element:g.jsx(Vr,{children:g.jsx(v3,{})})}),g.jsx(En,{path:"/game/:roomId",element:g.jsx(Vr,{children:g.jsx(E3,{})})}),g.jsx(En,{path:"/leaderboard",element:g.jsx(Vr,{children:g.jsx(T3,{})})}),g.jsx(En,{path:"/friends",element:g.jsx(Vr,{children:g.jsx(P3,{})})}),g.jsx(En,{path:"/history",element:g.jsx(Vr,{children:g.jsx(b3,{})})}),g.jsx(En,{path:"*",element:g.jsx(Zp,{to:"/",replace:!0})})]})]})}function D3(){return g.jsx(VB,{children:g.jsx(O3,{})})}sp.createRoot(document.getElementById("root")).render(g.jsx(pT.StrictMode,{children:g.jsx(D3,{})}));
