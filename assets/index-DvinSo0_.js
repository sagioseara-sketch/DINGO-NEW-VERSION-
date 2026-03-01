function Vx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mT={exports:{}},qh={},gT={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zl=Symbol.for("react.element"),jx=Symbol.for("react.portal"),Ux=Symbol.for("react.fragment"),Bx=Symbol.for("react.strict_mode"),zx=Symbol.for("react.profiler"),Wx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),qx=Symbol.for("react.forward_ref"),Hx=Symbol.for("react.suspense"),Gx=Symbol.for("react.memo"),Kx=Symbol.for("react.lazy"),Vv=Symbol.iterator;function Qx(t){return t===null||typeof t!="object"?null:(t=Vv&&t[Vv]||t["@@iterator"],typeof t=="function"?t:null)}var _T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yT=Object.assign,vT={};function $o(t,e,n){this.props=t,this.context=e,this.refs=vT,this.updater=n||_T}$o.prototype.isReactComponent={};$o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wT(){}wT.prototype=$o.prototype;function ig(t,e,n){this.props=t,this.context=e,this.refs=vT,this.updater=n||_T}var sg=ig.prototype=new wT;sg.constructor=ig;yT(sg,$o.prototype);sg.isPureReactComponent=!0;var Fv=Array.isArray,ET=Object.prototype.hasOwnProperty,og={current:null},TT={key:!0,ref:!0,__self:!0,__source:!0};function IT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ET.call(e,r)&&!TT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zl,type:t,key:s,ref:o,props:i,_owner:og.current}}function Yx(t,e){return{$$typeof:Zl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ag(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zl}function Xx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jv=/\/+/g;function Sf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xx(""+t.key):e.toString(36)}function vc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zl:case jx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sf(o,0):r,Fv(i)?(n="",t!=null&&(n=t.replace(jv,"$&/")+"/"),vc(i,e,n,"",function(c){return c})):i!=null&&(ag(i)&&(i=Yx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Sf(s,a);o+=vc(s,e,n,u,i)}else if(u=Qx(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Sf(s,a++),o+=vc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hu(t,e,n){if(t==null)return t;var r=[],i=0;return vc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Jx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},wc={transition:null},Zx={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:wc,ReactCurrentOwner:og};function ST(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Hu,forEach:function(t,e,n){Hu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hu(t,function(){e++}),e},toArray:function(t){return Hu(t,function(e){return e})||[]},only:function(t){if(!ag(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=$o;ue.Fragment=Ux;ue.Profiler=zx;ue.PureComponent=ig;ue.StrictMode=Bx;ue.Suspense=Hx;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx;ue.act=ST;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=yT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=og.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)ET.call(e,u)&&!TT.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Zl,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:$x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wx,_context:t},t.Consumer=t};ue.createElement=IT;ue.createFactory=function(t){var e=IT.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:qx,render:t}};ue.isValidElement=ag;ue.lazy=function(t){return{$$typeof:Kx,_payload:{_status:-1,_result:t},_init:Jx}};ue.memo=function(t,e){return{$$typeof:Gx,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=wc.transition;wc.transition={};try{t()}finally{wc.transition=e}};ue.unstable_act=ST;ue.useCallback=function(t,e){return Bt.current.useCallback(t,e)};ue.useContext=function(t){return Bt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Bt.current.useEffect(t,e)};ue.useId=function(){return Bt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Bt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};ue.useRef=function(t){return Bt.current.useRef(t)};ue.useState=function(t){return Bt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Bt.current.useTransition()};ue.version="18.3.1";gT.exports=ue;var D=gT.exports;const CT=Fx(D),eP=Vx({__proto__:null,default:CT},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tP=D,nP=Symbol.for("react.element"),rP=Symbol.for("react.fragment"),iP=Object.prototype.hasOwnProperty,sP=tP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oP={key:!0,ref:!0,__self:!0,__source:!0};function RT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iP.call(e,r)&&!oP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nP,type:t,key:s,ref:o,props:i,_owner:sP.current}}qh.Fragment=rP;qh.jsx=RT;qh.jsxs=RT;mT.exports=qh;var g=mT.exports,Ep={},kT={exports:{}},hn={},AT={exports:{}},xT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Q){var Z=W.length;W.push(Q);e:for(;0<Z;){var H=Z-1>>>1,se=W[H];if(0<i(se,Q))W[H]=Q,W[Z]=se,Z=H;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Q=W[0],Z=W.pop();if(Z!==Q){W[0]=Z;e:for(var H=0,se=W.length,ie=se>>>1;H<ie;){var ze=2*(H+1)-1,He=W[ze],Ze=ze+1,de=W[Ze];if(0>i(He,Z))Ze<se&&0>i(de,He)?(W[H]=de,W[Ze]=Z,H=Ze):(W[H]=He,W[ze]=Z,H=ze);else if(Ze<se&&0>i(de,Z))W[H]=de,W[Ze]=Z,H=Ze;else break e}}return Q}function i(W,Q){var Z=W.sortIndex-Q.sortIndex;return Z!==0?Z:W.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,p=3,_=!1,I=!1,R=!1,P=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(W){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=W)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function O(W){if(R=!1,A(W),!I)if(n(u)!==null)I=!0,en(V);else{var Q=n(c);Q!==null&&It(O,Q.startTime-W)}}function V(W,Q){I=!1,R&&(R=!1,S(v),v=-1),_=!0;var Z=p;try{for(A(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||W&&!x());){var H=f.callback;if(typeof H=="function"){f.callback=null,p=f.priorityLevel;var se=H(f.expirationTime<=Q);Q=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(u)&&r(u),A(Q)}else r(u);f=n(u)}if(f!==null)var ie=!0;else{var ze=n(c);ze!==null&&It(O,ze.startTime-Q),ie=!1}return ie}finally{f=null,p=Z,_=!1}}var U=!1,T=null,v=-1,C=5,w=-1;function x(){return!(t.unstable_now()-w<C)}function N(){if(T!==null){var W=t.unstable_now();w=W;var Q=!0;try{Q=T(!0,W)}finally{Q?k():(U=!1,T=null)}}else U=!1}var k;if(typeof E=="function")k=function(){E(N)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Wt=rt.port2;rt.port1.onmessage=N,k=function(){Wt.postMessage(null)}}else k=function(){P(N,0)};function en(W){T=W,U||(U=!0,k())}function It(W,Q){v=P(function(){W(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){I||_||(I=!0,en(V))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var Z=p;p=Q;try{return W()}finally{p=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Z=p;p=W;try{return Q()}finally{p=Z}},t.unstable_scheduleCallback=function(W,Q,Z){var H=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?H+Z:H):Z=H,W){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Z+se,W={id:h++,callback:Q,priorityLevel:W,startTime:Z,expirationTime:se,sortIndex:-1},Z>H?(W.sortIndex=Z,e(c,W),n(u)===null&&W===n(c)&&(R?(S(v),v=-1):R=!0,It(O,Z-H))):(W.sortIndex=se,e(u,W),I||_||(I=!0,en(V))),W},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(W){var Q=p;return function(){var Z=p;p=Q;try{return W.apply(this,arguments)}finally{p=Z}}}})(xT);AT.exports=xT;var aP=AT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lP=D,cn=aP;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var PT=new Set,dl={};function Ts(t,e){_o(t,e),_o(t+"Capture",e)}function _o(t,e){for(dl[t]=e,t=0;t<e.length;t++)PT.add(e[t])}var Ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tp=Object.prototype.hasOwnProperty,uP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uv={},Bv={};function cP(t){return Tp.call(Bv,t)?!0:Tp.call(Uv,t)?!1:uP.test(t)?Bv[t]=!0:(Uv[t]=!0,!1)}function hP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dP(t,e,n,r){if(e===null||typeof e>"u"||hP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tt[t]=new zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tt[e]=new zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tt[t]=new zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tt[t]=new zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tt[t]=new zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tt[t]=new zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tt[t]=new zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tt[t]=new zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tt[t]=new zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var lg=/[\-:]([a-z])/g;function ug(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lg,ug);Tt[e]=new zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lg,ug);Tt[e]=new zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lg,ug);Tt[e]=new zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tt[t]=new zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tt[t]=new zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cg(t,e,n,r){var i=Tt.hasOwnProperty(e)?Tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dP(e,n,i,r)&&(n=null),r||i===null?cP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dr=lP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gu=Symbol.for("react.element"),$s=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),hg=Symbol.for("react.strict_mode"),Ip=Symbol.for("react.profiler"),NT=Symbol.for("react.provider"),bT=Symbol.for("react.context"),dg=Symbol.for("react.forward_ref"),Sp=Symbol.for("react.suspense"),Cp=Symbol.for("react.suspense_list"),fg=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),DT=Symbol.for("react.offscreen"),zv=Symbol.iterator;function Ta(t){return t===null||typeof t!="object"?null:(t=zv&&t[zv]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,Cf;function Ma(t){if(Cf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cf=e&&e[1]||""}return`
`+Cf+t}var Rf=!1;function kf(t,e){if(!t||Rf)return"";Rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Rf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ma(t):""}function fP(t){switch(t.tag){case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return t=kf(t.type,!1),t;case 11:return t=kf(t.type.render,!1),t;case 1:return t=kf(t.type,!0),t;default:return""}}function Rp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case $s:return"Portal";case Ip:return"Profiler";case hg:return"StrictMode";case Sp:return"Suspense";case Cp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bT:return(t.displayName||"Context")+".Consumer";case NT:return(t._context.displayName||"Context")+".Provider";case dg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fg:return e=t.displayName||null,e!==null?e:Rp(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return Rp(t(e))}catch{}}return null}function pP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rp(e);case 8:return e===hg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function OT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mP(t){var e=OT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ku(t){t._valueTracker||(t._valueTracker=mP(t))}function LT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=OT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kp(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function MT(t,e){e=e.checked,e!=null&&cg(t,"checked",e,!1)}function Ap(t,e){MT(t,e);var n=di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xp(t,e.type,n):e.hasOwnProperty("defaultValue")&&xp(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $v(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xp(t,e,n){(e!=="number"||Bc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Va=Array.isArray;function io(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Pp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Va(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:di(n)}}function VT(t,e){var n=di(e.value),r=di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function FT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Np(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?FT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qu,jT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qu=Qu||document.createElement("div"),Qu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gP=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){gP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function UT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function BT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=UT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _P=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bp(t,e){if(e){if(_P[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Dp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Op=null;function pg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lp=null,so=null,oo=null;function Gv(t){if(t=nu(t)){if(typeof Lp!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Yh(e),Lp(t.stateNode,t.type,e))}}function zT(t){so?oo?oo.push(t):oo=[t]:so=t}function WT(){if(so){var t=so,e=oo;if(oo=so=null,Gv(t),e)for(t=0;t<e.length;t++)Gv(e[t])}}function $T(t,e){return t(e)}function qT(){}var Af=!1;function HT(t,e,n){if(Af)return t(e,n);Af=!0;try{return $T(t,e,n)}finally{Af=!1,(so!==null||oo!==null)&&(qT(),WT())}}function pl(t,e){var n=t.stateNode;if(n===null)return null;var r=Yh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Mp=!1;if(Ir)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){Mp=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{Mp=!1}function yP(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ga=!1,zc=null,Wc=!1,Vp=null,vP={onError:function(t){Ga=!0,zc=t}};function wP(t,e,n,r,i,s,o,a,u){Ga=!1,zc=null,yP.apply(vP,arguments)}function EP(t,e,n,r,i,s,o,a,u){if(wP.apply(this,arguments),Ga){if(Ga){var c=zc;Ga=!1,zc=null}else throw Error(j(198));Wc||(Wc=!0,Vp=c)}}function Is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function GT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kv(t){if(Is(t)!==t)throw Error(j(188))}function TP(t){var e=t.alternate;if(!e){if(e=Is(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kv(i),t;if(s===r)return Kv(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function KT(t){return t=TP(t),t!==null?QT(t):null}function QT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=QT(t);if(e!==null)return e;t=t.sibling}return null}var YT=cn.unstable_scheduleCallback,Qv=cn.unstable_cancelCallback,IP=cn.unstable_shouldYield,SP=cn.unstable_requestPaint,$e=cn.unstable_now,CP=cn.unstable_getCurrentPriorityLevel,mg=cn.unstable_ImmediatePriority,XT=cn.unstable_UserBlockingPriority,$c=cn.unstable_NormalPriority,RP=cn.unstable_LowPriority,JT=cn.unstable_IdlePriority,Hh=null,Hn=null;function kP(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(Hh,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:PP,AP=Math.log,xP=Math.LN2;function PP(t){return t>>>=0,t===0?32:31-(AP(t)/xP|0)|0}var Yu=64,Xu=4194304;function Fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fa(a):(s&=o,s!==0&&(r=Fa(s)))}else o=n&~i,o!==0?r=Fa(o):s!==0&&(r=Fa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bn(e),i=1<<n,r|=t[n],e&=~i;return r}function NP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=NP(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Fp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ZT(){var t=Yu;return Yu<<=1,!(Yu&4194240)&&(Yu=64),t}function xf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function DP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function eI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tI,_g,nI,rI,iI,jp=!1,Ju=[],ei=null,ti=null,ni=null,ml=new Map,gl=new Map,$r=[],OP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yv(t,e){switch(t){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":ml.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(e.pointerId)}}function Sa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=nu(e),e!==null&&_g(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LP(t,e,n,r,i){switch(e){case"focusin":return ei=Sa(ei,t,e,n,r,i),!0;case"dragenter":return ti=Sa(ti,t,e,n,r,i),!0;case"mouseover":return ni=Sa(ni,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ml.set(s,Sa(ml.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,gl.set(s,Sa(gl.get(s)||null,t,e,n,r,i)),!0}return!1}function sI(t){var e=$i(t.target);if(e!==null){var n=Is(e);if(n!==null){if(e=n.tag,e===13){if(e=GT(n),e!==null){t.blockedOn=e,iI(t.priority,function(){nI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Up(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Op=r,n.target.dispatchEvent(r),Op=null}else return e=nu(n),e!==null&&_g(e),t.blockedOn=n,!1;e.shift()}return!0}function Xv(t,e,n){Ec(t)&&n.delete(e)}function MP(){jp=!1,ei!==null&&Ec(ei)&&(ei=null),ti!==null&&Ec(ti)&&(ti=null),ni!==null&&Ec(ni)&&(ni=null),ml.forEach(Xv),gl.forEach(Xv)}function Ca(t,e){t.blockedOn===e&&(t.blockedOn=null,jp||(jp=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,MP)))}function _l(t){function e(i){return Ca(i,t)}if(0<Ju.length){Ca(Ju[0],t);for(var n=1;n<Ju.length;n++){var r=Ju[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ei!==null&&Ca(ei,t),ti!==null&&Ca(ti,t),ni!==null&&Ca(ni,t),ml.forEach(e),gl.forEach(e),n=0;n<$r.length;n++)r=$r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$r.length&&(n=$r[0],n.blockedOn===null);)sI(n),n.blockedOn===null&&$r.shift()}var ao=Dr.ReactCurrentBatchConfig,Hc=!0;function VP(t,e,n,r){var i=Ee,s=ao.transition;ao.transition=null;try{Ee=1,yg(t,e,n,r)}finally{Ee=i,ao.transition=s}}function FP(t,e,n,r){var i=Ee,s=ao.transition;ao.transition=null;try{Ee=4,yg(t,e,n,r)}finally{Ee=i,ao.transition=s}}function yg(t,e,n,r){if(Hc){var i=Up(t,e,n,r);if(i===null)jf(t,e,r,Gc,n),Yv(t,r);else if(LP(i,t,e,n,r))r.stopPropagation();else if(Yv(t,r),e&4&&-1<OP.indexOf(t)){for(;i!==null;){var s=nu(i);if(s!==null&&tI(s),s=Up(t,e,n,r),s===null&&jf(t,e,r,Gc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else jf(t,e,r,null,n)}}var Gc=null;function Up(t,e,n,r){if(Gc=null,t=pg(r),t=$i(t),t!==null)if(e=Is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=GT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gc=t,null}function oI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CP()){case mg:return 1;case XT:return 4;case $c:case RP:return 16;case JT:return 536870912;default:return 16}default:return 16}}var Qr=null,vg=null,Tc=null;function aI(){if(Tc)return Tc;var t,e=vg,n=e.length,r,i="value"in Qr?Qr.value:Qr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tc=i.slice(t,1<r?1-r:void 0)}function Ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zu(){return!0}function Jv(){return!1}function dn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zu:Jv,this.isPropagationStopped=Jv,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zu)},persist:function(){},isPersistent:Zu}),e}var qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wg=dn(qo),tu=Fe({},qo,{view:0,detail:0}),jP=dn(tu),Pf,Nf,Ra,Gh=Fe({},tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ra&&(Ra&&t.type==="mousemove"?(Pf=t.screenX-Ra.screenX,Nf=t.screenY-Ra.screenY):Nf=Pf=0,Ra=t),Pf)},movementY:function(t){return"movementY"in t?t.movementY:Nf}}),Zv=dn(Gh),UP=Fe({},Gh,{dataTransfer:0}),BP=dn(UP),zP=Fe({},tu,{relatedTarget:0}),bf=dn(zP),WP=Fe({},qo,{animationName:0,elapsedTime:0,pseudoElement:0}),$P=dn(WP),qP=Fe({},qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HP=dn(qP),GP=Fe({},qo,{data:0}),ew=dn(GP),KP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YP[t])?!!e[t]:!1}function Eg(){return XP}var JP=Fe({},tu,{key:function(t){if(t.key){var e=KP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eg,charCode:function(t){return t.type==="keypress"?Ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZP=dn(JP),e1=Fe({},Gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tw=dn(e1),t1=Fe({},tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eg}),n1=dn(t1),r1=Fe({},qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),i1=dn(r1),s1=Fe({},Gh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o1=dn(s1),a1=[9,13,27,32],Tg=Ir&&"CompositionEvent"in window,Ka=null;Ir&&"documentMode"in document&&(Ka=document.documentMode);var l1=Ir&&"TextEvent"in window&&!Ka,lI=Ir&&(!Tg||Ka&&8<Ka&&11>=Ka),nw=" ",rw=!1;function uI(t,e){switch(t){case"keyup":return a1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function u1(t,e){switch(t){case"compositionend":return cI(e);case"keypress":return e.which!==32?null:(rw=!0,nw);case"textInput":return t=e.data,t===nw&&rw?null:t;default:return null}}function c1(t,e){if(Hs)return t==="compositionend"||!Tg&&uI(t,e)?(t=aI(),Tc=vg=Qr=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lI&&e.locale!=="ko"?null:e.data;default:return null}}var h1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!h1[t.type]:e==="textarea"}function hI(t,e,n,r){zT(r),e=Kc(e,"onChange"),0<e.length&&(n=new wg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qa=null,yl=null;function d1(t){TI(t,0)}function Kh(t){var e=Qs(t);if(LT(e))return t}function f1(t,e){if(t==="change")return e}var dI=!1;if(Ir){var Df;if(Ir){var Of="oninput"in document;if(!Of){var sw=document.createElement("div");sw.setAttribute("oninput","return;"),Of=typeof sw.oninput=="function"}Df=Of}else Df=!1;dI=Df&&(!document.documentMode||9<document.documentMode)}function ow(){Qa&&(Qa.detachEvent("onpropertychange",fI),yl=Qa=null)}function fI(t){if(t.propertyName==="value"&&Kh(yl)){var e=[];hI(e,yl,t,pg(t)),HT(d1,e)}}function p1(t,e,n){t==="focusin"?(ow(),Qa=e,yl=n,Qa.attachEvent("onpropertychange",fI)):t==="focusout"&&ow()}function m1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kh(yl)}function g1(t,e){if(t==="click")return Kh(e)}function _1(t,e){if(t==="input"||t==="change")return Kh(e)}function y1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:y1;function vl(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tp.call(e,i)||!Vn(t[i],e[i]))return!1}return!0}function aw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lw(t,e){var n=aw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=aw(n)}}function pI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mI(){for(var t=window,e=Bc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bc(t.document)}return e}function Ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v1(t){var e=mI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pI(n.ownerDocument.documentElement,n)){if(r!==null&&Ig(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lw(n,s);var o=lw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var w1=Ir&&"documentMode"in document&&11>=document.documentMode,Gs=null,Bp=null,Ya=null,zp=!1;function uw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zp||Gs==null||Gs!==Bc(r)||(r=Gs,"selectionStart"in r&&Ig(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ya&&vl(Ya,r)||(Ya=r,r=Kc(Bp,"onSelect"),0<r.length&&(e=new wg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gs)))}function ec(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:ec("Animation","AnimationEnd"),animationiteration:ec("Animation","AnimationIteration"),animationstart:ec("Animation","AnimationStart"),transitionend:ec("Transition","TransitionEnd")},Lf={},gI={};Ir&&(gI=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Qh(t){if(Lf[t])return Lf[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gI)return Lf[t]=e[n];return t}var _I=Qh("animationend"),yI=Qh("animationiteration"),vI=Qh("animationstart"),wI=Qh("transitionend"),EI=new Map,cw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ti(t,e){EI.set(t,e),Ts(e,[t])}for(var Mf=0;Mf<cw.length;Mf++){var Vf=cw[Mf],E1=Vf.toLowerCase(),T1=Vf[0].toUpperCase()+Vf.slice(1);Ti(E1,"on"+T1)}Ti(_I,"onAnimationEnd");Ti(yI,"onAnimationIteration");Ti(vI,"onAnimationStart");Ti("dblclick","onDoubleClick");Ti("focusin","onFocus");Ti("focusout","onBlur");Ti(wI,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function hw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,EP(r,e,void 0,t),t.currentTarget=null}function TI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;hw(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;hw(i,a,c),s=u}}}if(Wc)throw t=Vp,Wc=!1,Vp=null,t}function Pe(t,e){var n=e[Gp];n===void 0&&(n=e[Gp]=new Set);var r=t+"__bubble";n.has(r)||(II(e,t,2,!1),n.add(r))}function Ff(t,e,n){var r=0;e&&(r|=4),II(n,t,r,e)}var tc="_reactListening"+Math.random().toString(36).slice(2);function wl(t){if(!t[tc]){t[tc]=!0,PT.forEach(function(n){n!=="selectionchange"&&(I1.has(n)||Ff(n,!1,t),Ff(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tc]||(e[tc]=!0,Ff("selectionchange",!1,e))}}function II(t,e,n,r){switch(oI(e)){case 1:var i=VP;break;case 4:i=FP;break;default:i=yg}n=i.bind(null,e,n,t),i=void 0,!Mp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$i(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}HT(function(){var c=s,h=pg(n),f=[];e:{var p=EI.get(t);if(p!==void 0){var _=wg,I=t;switch(t){case"keypress":if(Ic(n)===0)break e;case"keydown":case"keyup":_=ZP;break;case"focusin":I="focus",_=bf;break;case"focusout":I="blur",_=bf;break;case"beforeblur":case"afterblur":_=bf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Zv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=BP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=n1;break;case _I:case yI:case vI:_=$P;break;case wI:_=i1;break;case"scroll":_=jP;break;case"wheel":_=o1;break;case"copy":case"cut":case"paste":_=HP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=tw}var R=(e&4)!==0,P=!R&&t==="scroll",S=R?p!==null?p+"Capture":null:p;R=[];for(var E=c,A;E!==null;){A=E;var O=A.stateNode;if(A.tag===5&&O!==null&&(A=O,S!==null&&(O=pl(E,S),O!=null&&R.push(El(E,O,A)))),P)break;E=E.return}0<R.length&&(p=new _(p,I,null,n,h),f.push({event:p,listeners:R}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==Op&&(I=n.relatedTarget||n.fromElement)&&($i(I)||I[Sr]))break e;if((_||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,_?(I=n.relatedTarget||n.toElement,_=c,I=I?$i(I):null,I!==null&&(P=Is(I),I!==P||I.tag!==5&&I.tag!==6)&&(I=null)):(_=null,I=c),_!==I)){if(R=Zv,O="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(R=tw,O="onPointerLeave",S="onPointerEnter",E="pointer"),P=_==null?p:Qs(_),A=I==null?p:Qs(I),p=new R(O,E+"leave",_,n,h),p.target=P,p.relatedTarget=A,O=null,$i(h)===c&&(R=new R(S,E+"enter",I,n,h),R.target=A,R.relatedTarget=P,O=R),P=O,_&&I)t:{for(R=_,S=I,E=0,A=R;A;A=Fs(A))E++;for(A=0,O=S;O;O=Fs(O))A++;for(;0<E-A;)R=Fs(R),E--;for(;0<A-E;)S=Fs(S),A--;for(;E--;){if(R===S||S!==null&&R===S.alternate)break t;R=Fs(R),S=Fs(S)}R=null}else R=null;_!==null&&dw(f,p,_,R,!1),I!==null&&P!==null&&dw(f,P,I,R,!0)}}e:{if(p=c?Qs(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var V=f1;else if(iw(p))if(dI)V=_1;else{V=m1;var U=p1}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(V=g1);if(V&&(V=V(t,c))){hI(f,V,n,h);break e}U&&U(t,p,c),t==="focusout"&&(U=p._wrapperState)&&U.controlled&&p.type==="number"&&xp(p,"number",p.value)}switch(U=c?Qs(c):window,t){case"focusin":(iw(U)||U.contentEditable==="true")&&(Gs=U,Bp=c,Ya=null);break;case"focusout":Ya=Bp=Gs=null;break;case"mousedown":zp=!0;break;case"contextmenu":case"mouseup":case"dragend":zp=!1,uw(f,n,h);break;case"selectionchange":if(w1)break;case"keydown":case"keyup":uw(f,n,h)}var T;if(Tg)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Hs?uI(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(lI&&n.locale!=="ko"&&(Hs||v!=="onCompositionStart"?v==="onCompositionEnd"&&Hs&&(T=aI()):(Qr=h,vg="value"in Qr?Qr.value:Qr.textContent,Hs=!0)),U=Kc(c,v),0<U.length&&(v=new ew(v,t,null,n,h),f.push({event:v,listeners:U}),T?v.data=T:(T=cI(n),T!==null&&(v.data=T)))),(T=l1?u1(t,n):c1(t,n))&&(c=Kc(c,"onBeforeInput"),0<c.length&&(h=new ew("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}TI(f,e)})}function El(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=pl(t,n),s!=null&&r.unshift(El(t,s,i)),s=pl(t,e),s!=null&&r.push(El(t,s,i))),t=t.return}return r}function Fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=pl(n,s),u!=null&&o.unshift(El(n,u,a))):i||(u=pl(n,s),u!=null&&o.push(El(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var S1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function fw(t){return(typeof t=="string"?t:""+t).replace(S1,`
`).replace(C1,"")}function nc(t,e,n){if(e=fw(e),fw(t)!==e&&n)throw Error(j(425))}function Qc(){}var Wp=null,$p=null;function qp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hp=typeof setTimeout=="function"?setTimeout:void 0,R1=typeof clearTimeout=="function"?clearTimeout:void 0,pw=typeof Promise=="function"?Promise:void 0,k1=typeof queueMicrotask=="function"?queueMicrotask:typeof pw<"u"?function(t){return pw.resolve(null).then(t).catch(A1)}:Hp;function A1(t){setTimeout(function(){throw t})}function Uf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_l(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_l(e)}function ri(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ho=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ho,Tl="__reactProps$"+Ho,Sr="__reactContainer$"+Ho,Gp="__reactEvents$"+Ho,x1="__reactListeners$"+Ho,P1="__reactHandles$"+Ho;function $i(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sr]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mw(t);t!==null;){if(n=t[$n])return n;t=mw(t)}return e}t=n,n=t.parentNode}return null}function nu(t){return t=t[$n]||t[Sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Yh(t){return t[Tl]||null}var Kp=[],Ys=-1;function Ii(t){return{current:t}}function be(t){0>Ys||(t.current=Kp[Ys],Kp[Ys]=null,Ys--)}function ke(t,e){Ys++,Kp[Ys]=t.current,t.current=e}var fi={},Dt=Ii(fi),Qt=Ii(!1),rs=fi;function yo(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Yt(t){return t=t.childContextTypes,t!=null}function Yc(){be(Qt),be(Dt)}function gw(t,e,n){if(Dt.current!==fi)throw Error(j(168));ke(Dt,e),ke(Qt,n)}function SI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,pP(t)||"Unknown",i));return Fe({},n,r)}function Xc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,rs=Dt.current,ke(Dt,t),ke(Qt,Qt.current),!0}function _w(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=SI(t,e,rs),r.__reactInternalMemoizedMergedChildContext=t,be(Qt),be(Dt),ke(Dt,t)):be(Qt),ke(Qt,n)}var ur=null,Xh=!1,Bf=!1;function CI(t){ur===null?ur=[t]:ur.push(t)}function N1(t){Xh=!0,CI(t)}function Si(){if(!Bf&&ur!==null){Bf=!0;var t=0,e=Ee;try{var n=ur;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ur=null,Xh=!1}catch(i){throw ur!==null&&(ur=ur.slice(t+1)),YT(mg,Si),i}finally{Ee=e,Bf=!1}}return null}var Xs=[],Js=0,Jc=null,Zc=0,fn=[],pn=0,is=null,hr=1,dr="";function Fi(t,e){Xs[Js++]=Zc,Xs[Js++]=Jc,Jc=t,Zc=e}function RI(t,e,n){fn[pn++]=hr,fn[pn++]=dr,fn[pn++]=is,is=t;var r=hr;t=dr;var i=32-bn(r)-1;r&=~(1<<i),n+=1;var s=32-bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hr=1<<32-bn(e)+i|n<<i|r,dr=s+t}else hr=1<<s|n<<i|r,dr=t}function Sg(t){t.return!==null&&(Fi(t,1),RI(t,1,0))}function Cg(t){for(;t===Jc;)Jc=Xs[--Js],Xs[Js]=null,Zc=Xs[--Js],Xs[Js]=null;for(;t===is;)is=fn[--pn],fn[pn]=null,dr=fn[--pn],fn[pn]=null,hr=fn[--pn],fn[pn]=null}var an=null,sn=null,De=!1,An=null;function kI(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,an=t,sn=ri(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,an=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:hr,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,an=t,sn=null,!0):!1;default:return!1}}function Qp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yp(t){if(De){var e=sn;if(e){var n=e;if(!yw(t,e)){if(Qp(t))throw Error(j(418));e=ri(n.nextSibling);var r=an;e&&yw(t,e)?kI(r,n):(t.flags=t.flags&-4097|2,De=!1,an=t)}}else{if(Qp(t))throw Error(j(418));t.flags=t.flags&-4097|2,De=!1,an=t}}}function vw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function rc(t){if(t!==an)return!1;if(!De)return vw(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qp(t.type,t.memoizedProps)),e&&(e=sn)){if(Qp(t))throw AI(),Error(j(418));for(;e;)kI(t,e),e=ri(e.nextSibling)}if(vw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=ri(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=an?ri(t.stateNode.nextSibling):null;return!0}function AI(){for(var t=sn;t;)t=ri(t.nextSibling)}function vo(){sn=an=null,De=!1}function Rg(t){An===null?An=[t]:An.push(t)}var b1=Dr.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ic(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ww(t){var e=t._init;return e(t._payload)}function xI(t){function e(S,E){if(t){var A=S.deletions;A===null?(S.deletions=[E],S.flags|=16):A.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function i(S,E){return S=ai(S,E),S.index=0,S.sibling=null,S}function s(S,E,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<E?(S.flags|=2,E):A):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,E,A,O){return E===null||E.tag!==6?(E=Kf(A,S.mode,O),E.return=S,E):(E=i(E,A),E.return=S,E)}function u(S,E,A,O){var V=A.type;return V===qs?h(S,E,A.props.children,O,A.key):E!==null&&(E.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===zr&&ww(V)===E.type)?(O=i(E,A.props),O.ref=ka(S,E,A),O.return=S,O):(O=Pc(A.type,A.key,A.props,null,S.mode,O),O.ref=ka(S,E,A),O.return=S,O)}function c(S,E,A,O){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=Qf(A,S.mode,O),E.return=S,E):(E=i(E,A.children||[]),E.return=S,E)}function h(S,E,A,O,V){return E===null||E.tag!==7?(E=es(A,S.mode,O,V),E.return=S,E):(E=i(E,A),E.return=S,E)}function f(S,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Kf(""+E,S.mode,A),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Gu:return A=Pc(E.type,E.key,E.props,null,S.mode,A),A.ref=ka(S,null,E),A.return=S,A;case $s:return E=Qf(E,S.mode,A),E.return=S,E;case zr:var O=E._init;return f(S,O(E._payload),A)}if(Va(E)||Ta(E))return E=es(E,S.mode,A,null),E.return=S,E;ic(S,E)}return null}function p(S,E,A,O){var V=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return V!==null?null:a(S,E,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Gu:return A.key===V?u(S,E,A,O):null;case $s:return A.key===V?c(S,E,A,O):null;case zr:return V=A._init,p(S,E,V(A._payload),O)}if(Va(A)||Ta(A))return V!==null?null:h(S,E,A,O,null);ic(S,A)}return null}function _(S,E,A,O,V){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(A)||null,a(E,S,""+O,V);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Gu:return S=S.get(O.key===null?A:O.key)||null,u(E,S,O,V);case $s:return S=S.get(O.key===null?A:O.key)||null,c(E,S,O,V);case zr:var U=O._init;return _(S,E,A,U(O._payload),V)}if(Va(O)||Ta(O))return S=S.get(A)||null,h(E,S,O,V,null);ic(E,O)}return null}function I(S,E,A,O){for(var V=null,U=null,T=E,v=E=0,C=null;T!==null&&v<A.length;v++){T.index>v?(C=T,T=null):C=T.sibling;var w=p(S,T,A[v],O);if(w===null){T===null&&(T=C);break}t&&T&&w.alternate===null&&e(S,T),E=s(w,E,v),U===null?V=w:U.sibling=w,U=w,T=C}if(v===A.length)return n(S,T),De&&Fi(S,v),V;if(T===null){for(;v<A.length;v++)T=f(S,A[v],O),T!==null&&(E=s(T,E,v),U===null?V=T:U.sibling=T,U=T);return De&&Fi(S,v),V}for(T=r(S,T);v<A.length;v++)C=_(T,S,v,A[v],O),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?v:C.key),E=s(C,E,v),U===null?V=C:U.sibling=C,U=C);return t&&T.forEach(function(x){return e(S,x)}),De&&Fi(S,v),V}function R(S,E,A,O){var V=Ta(A);if(typeof V!="function")throw Error(j(150));if(A=V.call(A),A==null)throw Error(j(151));for(var U=V=null,T=E,v=E=0,C=null,w=A.next();T!==null&&!w.done;v++,w=A.next()){T.index>v?(C=T,T=null):C=T.sibling;var x=p(S,T,w.value,O);if(x===null){T===null&&(T=C);break}t&&T&&x.alternate===null&&e(S,T),E=s(x,E,v),U===null?V=x:U.sibling=x,U=x,T=C}if(w.done)return n(S,T),De&&Fi(S,v),V;if(T===null){for(;!w.done;v++,w=A.next())w=f(S,w.value,O),w!==null&&(E=s(w,E,v),U===null?V=w:U.sibling=w,U=w);return De&&Fi(S,v),V}for(T=r(S,T);!w.done;v++,w=A.next())w=_(T,S,v,w.value,O),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?v:w.key),E=s(w,E,v),U===null?V=w:U.sibling=w,U=w);return t&&T.forEach(function(N){return e(S,N)}),De&&Fi(S,v),V}function P(S,E,A,O){if(typeof A=="object"&&A!==null&&A.type===qs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Gu:e:{for(var V=A.key,U=E;U!==null;){if(U.key===V){if(V=A.type,V===qs){if(U.tag===7){n(S,U.sibling),E=i(U,A.props.children),E.return=S,S=E;break e}}else if(U.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===zr&&ww(V)===U.type){n(S,U.sibling),E=i(U,A.props),E.ref=ka(S,U,A),E.return=S,S=E;break e}n(S,U);break}else e(S,U);U=U.sibling}A.type===qs?(E=es(A.props.children,S.mode,O,A.key),E.return=S,S=E):(O=Pc(A.type,A.key,A.props,null,S.mode,O),O.ref=ka(S,E,A),O.return=S,S=O)}return o(S);case $s:e:{for(U=A.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(S,E.sibling),E=i(E,A.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=Qf(A,S.mode,O),E.return=S,S=E}return o(S);case zr:return U=A._init,P(S,E,U(A._payload),O)}if(Va(A))return I(S,E,A,O);if(Ta(A))return R(S,E,A,O);ic(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(S,E.sibling),E=i(E,A),E.return=S,S=E):(n(S,E),E=Kf(A,S.mode,O),E.return=S,S=E),o(S)):n(S,E)}return P}var wo=xI(!0),PI=xI(!1),eh=Ii(null),th=null,Zs=null,kg=null;function Ag(){kg=Zs=th=null}function xg(t){var e=eh.current;be(eh),t._currentValue=e}function Xp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function lo(t,e){th=t,kg=Zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gt=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(kg!==t)if(t={context:t,memoizedValue:e,next:null},Zs===null){if(th===null)throw Error(j(308));Zs=t,th.dependencies={lanes:0,firstContext:t}}else Zs=Zs.next=t;return e}var qi=null;function Pg(t){qi===null?qi=[t]:qi.push(t)}function NI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Pg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cr(t,r)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wr=!1;function Ng(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _r(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ii(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cr(t,n)}return i=r.interleaved,i===null?(e.next=e,Pg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cr(t,n)}function Sc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gg(t,n)}}function Ew(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nh(t,e,n,r){var i=t.updateQueue;Wr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,R=a;switch(p=e,_=n,R.tag){case 1:if(I=R.payload,typeof I=="function"){f=I.call(_,f,p);break e}f=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=R.payload,p=typeof I=="function"?I.call(_,f,p):I,p==null)break e;f=Fe({},f,p);break e;case 2:Wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=f):h=h.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);os|=o,t.lanes=o,t.memoizedState=f}}function Tw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var ru={},Gn=Ii(ru),Il=Ii(ru),Sl=Ii(ru);function Hi(t){if(t===ru)throw Error(j(174));return t}function bg(t,e){switch(ke(Sl,e),ke(Il,t),ke(Gn,ru),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Np(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Np(e,t)}be(Gn),ke(Gn,e)}function Eo(){be(Gn),be(Il),be(Sl)}function DI(t){Hi(Sl.current);var e=Hi(Gn.current),n=Np(e,t.type);e!==n&&(ke(Il,t),ke(Gn,n))}function Dg(t){Il.current===t&&(be(Gn),be(Il))}var Oe=Ii(0);function rh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zf=[];function Og(){for(var t=0;t<zf.length;t++)zf[t]._workInProgressVersionPrimary=null;zf.length=0}var Cc=Dr.ReactCurrentDispatcher,Wf=Dr.ReactCurrentBatchConfig,ss=0,Ve=null,et=null,ot=null,ih=!1,Xa=!1,Cl=0,D1=0;function kt(){throw Error(j(321))}function Lg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Mg(t,e,n,r,i,s){if(ss=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cc.current=t===null||t.memoizedState===null?V1:F1,t=n(r,i),Xa){s=0;do{if(Xa=!1,Cl=0,25<=s)throw Error(j(301));s+=1,ot=et=null,e.updateQueue=null,Cc.current=j1,t=n(r,i)}while(Xa)}if(Cc.current=sh,e=et!==null&&et.next!==null,ss=0,ot=et=Ve=null,ih=!1,e)throw Error(j(300));return t}function Vg(){var t=Cl!==0;return Cl=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Ve.memoizedState=ot=t:ot=ot.next=t,ot}function vn(){if(et===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=ot===null?Ve.memoizedState:ot.next;if(e!==null)ot=e,et=t;else{if(t===null)throw Error(j(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},ot===null?Ve.memoizedState=ot=t:ot=ot.next=t}return ot}function Rl(t,e){return typeof e=="function"?e(t):e}function $f(t){var e=vn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((ss&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Ve.lanes|=h,os|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Vn(r,e.memoizedState)||(Gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,os|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qf(t){var e=vn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Vn(s,e.memoizedState)||(Gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function OI(){}function LI(t,e){var n=Ve,r=vn(),i=e(),s=!Vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Gt=!0),r=r.queue,Fg(FI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,kl(9,VI.bind(null,n,r,i,e),void 0,null),dt===null)throw Error(j(349));ss&30||MI(n,e,i)}return i}function MI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function VI(t,e,n,r){e.value=n,e.getSnapshot=r,jI(e)&&UI(t)}function FI(t,e,n){return n(function(){jI(e)&&UI(t)})}function jI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function UI(t){var e=Cr(t,1);e!==null&&Dn(e,t,1,-1)}function Iw(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rl,lastRenderedState:t},e.queue=t,t=t.dispatch=M1.bind(null,Ve,t),[e.memoizedState,t]}function kl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function BI(){return vn().memoizedState}function Rc(t,e,n,r){var i=Wn();Ve.flags|=t,i.memoizedState=kl(1|e,n,void 0,r===void 0?null:r)}function Jh(t,e,n,r){var i=vn();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&Lg(r,o.deps)){i.memoizedState=kl(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=kl(1|e,n,s,r)}function Sw(t,e){return Rc(8390656,8,t,e)}function Fg(t,e){return Jh(2048,8,t,e)}function zI(t,e){return Jh(4,2,t,e)}function WI(t,e){return Jh(4,4,t,e)}function $I(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qI(t,e,n){return n=n!=null?n.concat([t]):null,Jh(4,4,$I.bind(null,e,t),n)}function jg(){}function HI(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function GI(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function KI(t,e,n){return ss&21?(Vn(n,e)||(n=ZT(),Ve.lanes|=n,os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gt=!0),t.memoizedState=n)}function O1(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Wf.transition;Wf.transition={};try{t(!1),e()}finally{Ee=n,Wf.transition=r}}function QI(){return vn().memoizedState}function L1(t,e,n){var r=oi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},YI(t))XI(e,n);else if(n=NI(t,e,n,r),n!==null){var i=Ft();Dn(n,t,r,i),JI(n,e,r)}}function M1(t,e,n){var r=oi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(YI(t))XI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Vn(a,o)){var u=e.interleaved;u===null?(i.next=i,Pg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=NI(t,e,i,r),n!==null&&(i=Ft(),Dn(n,t,r,i),JI(n,e,r))}}function YI(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function XI(t,e){Xa=ih=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function JI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gg(t,n)}}var sh={readContext:yn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},V1={readContext:yn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:Sw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4194308,4,$I.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rc(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=L1.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Iw,useDebugValue:jg,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Iw(!1),e=t[0];return t=O1.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=Wn();if(De){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),dt===null)throw Error(j(349));ss&30||MI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sw(FI.bind(null,r,s,t),[t]),r.flags|=2048,kl(9,VI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=dt.identifierPrefix;if(De){var n=dr,r=hr;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Cl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=D1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},F1={readContext:yn,useCallback:HI,useContext:yn,useEffect:Fg,useImperativeHandle:qI,useInsertionEffect:zI,useLayoutEffect:WI,useMemo:GI,useReducer:$f,useRef:BI,useState:function(){return $f(Rl)},useDebugValue:jg,useDeferredValue:function(t){var e=vn();return KI(e,et.memoizedState,t)},useTransition:function(){var t=$f(Rl)[0],e=vn().memoizedState;return[t,e]},useMutableSource:OI,useSyncExternalStore:LI,useId:QI,unstable_isNewReconciler:!1},j1={readContext:yn,useCallback:HI,useContext:yn,useEffect:Fg,useImperativeHandle:qI,useInsertionEffect:zI,useLayoutEffect:WI,useMemo:GI,useReducer:qf,useRef:BI,useState:function(){return qf(Rl)},useDebugValue:jg,useDeferredValue:function(t){var e=vn();return et===null?e.memoizedState=t:KI(e,et.memoizedState,t)},useTransition:function(){var t=qf(Rl)[0],e=vn().memoizedState;return[t,e]},useMutableSource:OI,useSyncExternalStore:LI,useId:QI,unstable_isNewReconciler:!1};function Rn(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zh={isMounted:function(t){return(t=t._reactInternals)?Is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ft(),i=oi(t),s=_r(r,i);s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(Dn(e,t,i,r),Sc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ft(),i=oi(t),s=_r(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(Dn(e,t,i,r),Sc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ft(),r=oi(t),i=_r(n,r);i.tag=2,e!=null&&(i.callback=e),e=ii(t,i,r),e!==null&&(Dn(e,t,r,n),Sc(e,t,r))}};function Cw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vl(n,r)||!vl(i,s):!0}function ZI(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=yn(s):(i=Yt(e)?rs:Dt.current,r=e.contextTypes,s=(r=r!=null)?yo(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zh.enqueueReplaceState(e,e.state,null)}function Zp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ng(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=yn(s):(s=Yt(e)?rs:Dt.current,i.context=yo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zh.enqueueReplaceState(i,i.state,null),nh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function To(t,e){try{var n="",r=e;do n+=fP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function em(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var U1=typeof WeakMap=="function"?WeakMap:Map;function eS(t,e,n){n=_r(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ah||(ah=!0,cm=r),em(t,e)},n}function tS(t,e,n){n=_r(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){em(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){em(t,e),typeof r!="function"&&(si===null?si=new Set([this]):si.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function kw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new U1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=eN.bind(null,t,e,n),e.then(t,t))}function Aw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_r(-1,1),e.tag=2,ii(n,e,1))),n.lanes|=1),t)}var B1=Dr.ReactCurrentOwner,Gt=!1;function Mt(t,e,n,r){e.child=t===null?PI(e,null,n,r):wo(e,t.child,n,r)}function Pw(t,e,n,r,i){n=n.render;var s=e.ref;return lo(e,i),r=Mg(t,e,n,r,s,i),n=Vg(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rr(t,e,i)):(De&&n&&Sg(e),e.flags|=1,Mt(t,e,r,i),e.child)}function Nw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nS(t,e,s,r,i)):(t=Pc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vl,n(o,r)&&t.ref===e.ref)return Rr(t,e,i)}return e.flags|=1,t=ai(s,r),t.ref=e.ref,t.return=e,e.child=t}function nS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vl(s,r)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Gt=!0);else return e.lanes=t.lanes,Rr(t,e,i)}return tm(t,e,n,r,i)}function rS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(to,rn),rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(to,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(to,rn),rn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(to,rn),rn|=r;return Mt(t,e,i,n),e.child}function iS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tm(t,e,n,r,i){var s=Yt(n)?rs:Dt.current;return s=yo(e,s),lo(e,i),n=Mg(t,e,n,r,s,i),r=Vg(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rr(t,e,i)):(De&&r&&Sg(e),e.flags|=1,Mt(t,e,n,i),e.child)}function bw(t,e,n,r,i){if(Yt(n)){var s=!0;Xc(e)}else s=!1;if(lo(e,i),e.stateNode===null)kc(t,e),ZI(e,n,r),Zp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=yn(c):(c=Yt(n)?rs:Dt.current,c=yo(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Rw(e,o,r,c),Wr=!1;var p=e.memoizedState;o.state=p,nh(e,r,o,i),u=e.memoizedState,a!==r||p!==u||Qt.current||Wr?(typeof h=="function"&&(Jp(e,n,h,r),u=e.memoizedState),(a=Wr||Cw(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,bI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Rn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=yn(u):(u=Yt(n)?rs:Dt.current,u=yo(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&Rw(e,o,r,u),Wr=!1,p=e.memoizedState,o.state=p,nh(e,r,o,i);var I=e.memoizedState;a!==f||p!==I||Qt.current||Wr?(typeof _=="function"&&(Jp(e,n,_,r),I=e.memoizedState),(c=Wr||Cw(e,n,c,r,p,I,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return nm(t,e,n,r,s,i)}function nm(t,e,n,r,i,s){iS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&_w(e,n,!1),Rr(t,e,s);r=e.stateNode,B1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wo(e,t.child,null,s),e.child=wo(e,null,a,s)):Mt(t,e,a,s),e.memoizedState=r.state,i&&_w(e,n,!0),e.child}function sS(t){var e=t.stateNode;e.pendingContext?gw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gw(t,e.context,!1),bg(t,e.containerInfo)}function Dw(t,e,n,r,i){return vo(),Rg(i),e.flags|=256,Mt(t,e,n,r),e.child}var rm={dehydrated:null,treeContext:null,retryLane:0};function im(t){return{baseLanes:t,cachePool:null,transitions:null}}function oS(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Oe,i&1),t===null)return Yp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nd(o,r,0,null),t=es(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=im(n),e.memoizedState=rm,t):Ug(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return z1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ai(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ai(a,s):(s=es(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?im(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rm,r}return s=t.child,t=s.sibling,r=ai(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ug(t,e){return e=nd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sc(t,e,n,r){return r!==null&&Rg(r),wo(e,t.child,null,n),t=Ug(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function z1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hf(Error(j(422))),sc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nd({mode:"visible",children:r.children},i,0,null),s=es(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&wo(e,t.child,null,o),e.child.memoizedState=im(o),e.memoizedState=rm,s);if(!(e.mode&1))return sc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=Hf(s,r,void 0),sc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Gt||a){if(r=dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cr(t,i),Dn(r,t,i,-1))}return Hg(),r=Hf(Error(j(421))),sc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,sn=ri(i.nextSibling),an=e,De=!0,An=null,t!==null&&(fn[pn++]=hr,fn[pn++]=dr,fn[pn++]=is,hr=t.id,dr=t.overflow,is=e),e=Ug(e,r.children),e.flags|=4096,e)}function Ow(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xp(t.return,e,n)}function Gf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function aS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Mt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ow(t,n,e);else if(t.tag===19)Ow(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gf(e,!0,n,null,s);break;case"together":Gf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=ai(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ai(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function W1(t,e,n){switch(e.tag){case 3:sS(e),vo();break;case 5:DI(e);break;case 1:Yt(e.type)&&Xc(e);break;case 4:bg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(eh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?oS(t,e,n):(ke(Oe,Oe.current&1),t=Rr(t,e,n),t!==null?t.sibling:null);ke(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return aS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,rS(t,e,n)}return Rr(t,e,n)}var lS,sm,uS,cS;lS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sm=function(){};uS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hi(Gn.current);var s=null;switch(n){case"input":i=kp(t,i),r=kp(t,r),s=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),s=[];break;case"textarea":i=Pp(t,i),r=Pp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qc)}bp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(dl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(dl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Pe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Aa(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $1(t,e,n){var r=e.pendingProps;switch(Cg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return Yt(e.type)&&Yc(),At(e),null;case 3:return r=e.stateNode,Eo(),be(Qt),be(Dt),Og(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(rc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(fm(An),An=null))),sm(t,e),At(e),null;case 5:Dg(e);var i=Hi(Sl.current);if(n=e.type,t!==null&&e.stateNode!=null)uS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return At(e),null}if(t=Hi(Gn.current),rc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$n]=e,r[Tl]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<ja.length;i++)Pe(ja[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Wv(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":qv(r,s),Pe("invalid",r)}bp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&nc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nc(r.textContent,a,t),i=["children",""+a]):dl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Ku(r),$v(r,s,!0);break;case"textarea":Ku(r),Hv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=FT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$n]=e,t[Tl]=r,lS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dp(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ja.length;i++)Pe(ja[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":Wv(t,r),i=kp(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":qv(t,r),i=Pp(t,r),Pe("invalid",t);break;default:i=r}bp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?BT(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&jT(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&fl(t,u):typeof u=="number"&&fl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(dl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Pe("scroll",t):u!=null&&cg(t,s,u,o))}switch(n){case"input":Ku(t),$v(t,r,!1);break;case"textarea":Ku(t),Hv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?io(t,!!r.multiple,s,!1):r.defaultValue!=null&&io(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return At(e),null;case 6:if(t&&e.stateNode!=null)cS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Hi(Sl.current),Hi(Gn.current),rc(e)){if(r=e.stateNode,n=e.memoizedProps,r[$n]=e,(s=r.nodeValue!==n)&&(t=an,t!==null))switch(t.tag){case 3:nc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return At(e),null;case 13:if(be(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&sn!==null&&e.mode&1&&!(e.flags&128))AI(),vo(),e.flags|=98560,s=!1;else if(s=rc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[$n]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),s=!1}else An!==null&&(fm(An),An=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?nt===0&&(nt=3):Hg())),e.updateQueue!==null&&(e.flags|=4),At(e),null);case 4:return Eo(),sm(t,e),t===null&&wl(e.stateNode.containerInfo),At(e),null;case 10:return xg(e.type._context),At(e),null;case 17:return Yt(e.type)&&Yc(),At(e),null;case 19:if(be(Oe),s=e.memoizedState,s===null)return At(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Aa(s,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rh(t),o!==null){for(e.flags|=128,Aa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&$e()>Io&&(e.flags|=128,r=!0,Aa(s,!1),e.lanes=4194304)}else{if(!r)if(t=rh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return At(e),null}else 2*$e()-s.renderingStartTime>Io&&n!==1073741824&&(e.flags|=128,r=!0,Aa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$e(),e.sibling=null,n=Oe.current,ke(Oe,r?n&1|2:n&1),e):(At(e),null);case 22:case 23:return qg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rn&1073741824&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function q1(t,e){switch(Cg(e),e.tag){case 1:return Yt(e.type)&&Yc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Eo(),be(Qt),be(Dt),Og(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dg(e),null;case 13:if(be(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(Oe),null;case 4:return Eo(),null;case 10:return xg(e.type._context),null;case 22:case 23:return qg(),null;case 24:return null;default:return null}}var oc=!1,Nt=!1,H1=typeof WeakSet=="function"?WeakSet:Set,q=null;function eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function om(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var Lw=!1;function G1(t,e){if(Wp=Hc,t=mI(),Ig(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)p=f,f=_;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(u=o),(_=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($p={focusedElem:t,selectionRange:n},Hc=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var R=I.memoizedProps,P=I.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?R:Rn(e.type,R),P);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(O){Ue(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return I=Lw,Lw=!1,I}function Ja(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&om(e,n,s)}i=i.next}while(i!==r)}}function ed(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function am(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hS(t){var e=t.alternate;e!==null&&(t.alternate=null,hS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Tl],delete e[Gp],delete e[x1],delete e[P1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dS(t){return t.tag===5||t.tag===3||t.tag===4}function Mw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qc));else if(r!==4&&(t=t.child,t!==null))for(lm(t,e,n),t=t.sibling;t!==null;)lm(t,e,n),t=t.sibling}function um(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(um(t,e,n),t=t.sibling;t!==null;)um(t,e,n),t=t.sibling}var _t=null,kn=!1;function Ur(t,e,n){for(n=n.child;n!==null;)fS(t,e,n),n=n.sibling}function fS(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(Hh,n)}catch{}switch(n.tag){case 5:Nt||eo(n,e);case 6:var r=_t,i=kn;_t=null,Ur(t,e,n),_t=r,kn=i,_t!==null&&(kn?(t=_t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_t.removeChild(n.stateNode));break;case 18:_t!==null&&(kn?(t=_t,n=n.stateNode,t.nodeType===8?Uf(t.parentNode,n):t.nodeType===1&&Uf(t,n),_l(t)):Uf(_t,n.stateNode));break;case 4:r=_t,i=kn,_t=n.stateNode.containerInfo,kn=!0,Ur(t,e,n),_t=r,kn=i;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&om(n,e,o),i=i.next}while(i!==r)}Ur(t,e,n);break;case 1:if(!Nt&&(eo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ue(n,e,a)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(Nt=(r=Nt)||n.memoizedState!==null,Ur(t,e,n),Nt=r):Ur(t,e,n);break;default:Ur(t,e,n)}}function Vw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new H1),e.forEach(function(r){var i=nN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_t=a.stateNode,kn=!1;break e;case 3:_t=a.stateNode.containerInfo,kn=!0;break e;case 4:_t=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(_t===null)throw Error(j(160));fS(s,o,i),_t=null,kn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ue(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pS(e,t),e=e.sibling}function pS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),zn(t),r&4){try{Ja(3,t,t.return),ed(3,t)}catch(R){Ue(t,t.return,R)}try{Ja(5,t,t.return)}catch(R){Ue(t,t.return,R)}}break;case 1:Sn(e,t),zn(t),r&512&&n!==null&&eo(n,n.return);break;case 5:if(Sn(e,t),zn(t),r&512&&n!==null&&eo(n,n.return),t.flags&32){var i=t.stateNode;try{fl(i,"")}catch(R){Ue(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&MT(i,s),Dp(a,o);var c=Dp(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?BT(i,f):h==="dangerouslySetInnerHTML"?jT(i,f):h==="children"?fl(i,f):cg(i,h,f,c)}switch(a){case"input":Ap(i,s);break;case"textarea":VT(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?io(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?io(i,!!s.multiple,s.defaultValue,!0):io(i,!!s.multiple,s.multiple?[]:"",!1))}i[Tl]=s}catch(R){Ue(t,t.return,R)}}break;case 6:if(Sn(e,t),zn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ue(t,t.return,R)}}break;case 3:if(Sn(e,t),zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_l(e.containerInfo)}catch(R){Ue(t,t.return,R)}break;case 4:Sn(e,t),zn(t);break;case 13:Sn(e,t),zn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wg=$e())),r&4&&Vw(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Nt=(c=Nt)||h,Sn(e,t),Nt=c):Sn(e,t),zn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(f=q=h;q!==null;){switch(p=q,_=p.child,p.tag){case 0:case 11:case 14:case 15:Ja(4,p,p.return);break;case 1:eo(p,p.return);var I=p.stateNode;if(typeof I.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(R){Ue(r,n,R)}}break;case 5:eo(p,p.return);break;case 22:if(p.memoizedState!==null){jw(f);continue}}_!==null?(_.return=p,q=_):jw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=UT("display",o))}catch(R){Ue(t,t.return,R)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(R){Ue(t,t.return,R)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Sn(e,t),zn(t),r&4&&Vw(t);break;case 21:break;default:Sn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dS(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fl(i,""),r.flags&=-33);var s=Mw(t);um(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Mw(t);lm(t,a,o);break;default:throw Error(j(161))}}catch(u){Ue(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function K1(t,e,n){q=t,mS(t)}function mS(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||oc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Nt;a=oc;var c=Nt;if(oc=o,(Nt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Uw(i):u!==null?(u.return=o,q=u):Uw(i);for(;s!==null;)q=s,mS(s),s=s.sibling;q=i,oc=a,Nt=c}Fw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Fw(t)}}function Fw(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||ed(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&_l(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Nt||e.flags&512&&am(e)}catch(p){Ue(e,e.return,p)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function jw(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Uw(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ed(4,e)}catch(u){Ue(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ue(e,i,u)}}var s=e.return;try{am(e)}catch(u){Ue(e,s,u)}break;case 5:var o=e.return;try{am(e)}catch(u){Ue(e,o,u)}}}catch(u){Ue(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var Q1=Math.ceil,oh=Dr.ReactCurrentDispatcher,Bg=Dr.ReactCurrentOwner,_n=Dr.ReactCurrentBatchConfig,ge=0,dt=null,Ke=null,yt=0,rn=0,to=Ii(0),nt=0,Al=null,os=0,td=0,zg=0,Za=null,qt=null,Wg=0,Io=1/0,ar=null,ah=!1,cm=null,si=null,ac=!1,Yr=null,lh=0,el=0,hm=null,Ac=-1,xc=0;function Ft(){return ge&6?$e():Ac!==-1?Ac:Ac=$e()}function oi(t){return t.mode&1?ge&2&&yt!==0?yt&-yt:b1.transition!==null?(xc===0&&(xc=ZT()),xc):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:oI(t.type)),t):1}function Dn(t,e,n,r){if(50<el)throw el=0,hm=null,Error(j(185));eu(t,n,r),(!(ge&2)||t!==dt)&&(t===dt&&(!(ge&2)&&(td|=n),nt===4&&qr(t,yt)),Xt(t,r),n===1&&ge===0&&!(e.mode&1)&&(Io=$e()+500,Xh&&Si()))}function Xt(t,e){var n=t.callbackNode;bP(t,e);var r=qc(t,t===dt?yt:0);if(r===0)n!==null&&Qv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qv(n),e===1)t.tag===0?N1(Bw.bind(null,t)):CI(Bw.bind(null,t)),k1(function(){!(ge&6)&&Si()}),n=null;else{switch(eI(r)){case 1:n=mg;break;case 4:n=XT;break;case 16:n=$c;break;case 536870912:n=JT;break;default:n=$c}n=IS(n,gS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gS(t,e){if(Ac=-1,xc=0,ge&6)throw Error(j(327));var n=t.callbackNode;if(uo()&&t.callbackNode!==n)return null;var r=qc(t,t===dt?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uh(t,r);else{e=r;var i=ge;ge|=2;var s=yS();(dt!==t||yt!==e)&&(ar=null,Io=$e()+500,Zi(t,e));do try{J1();break}catch(a){_S(t,a)}while(!0);Ag(),oh.current=s,ge=i,Ke!==null?e=0:(dt=null,yt=0,e=nt)}if(e!==0){if(e===2&&(i=Fp(t),i!==0&&(r=i,e=dm(t,i))),e===1)throw n=Al,Zi(t,0),qr(t,r),Xt(t,$e()),n;if(e===6)qr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Y1(i)&&(e=uh(t,r),e===2&&(s=Fp(t),s!==0&&(r=s,e=dm(t,s))),e===1))throw n=Al,Zi(t,0),qr(t,r),Xt(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:ji(t,qt,ar);break;case 3:if(qr(t,r),(r&130023424)===r&&(e=Wg+500-$e(),10<e)){if(qc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hp(ji.bind(null,t,qt,ar),e);break}ji(t,qt,ar);break;case 4:if(qr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Q1(r/1960))-r,10<r){t.timeoutHandle=Hp(ji.bind(null,t,qt,ar),r);break}ji(t,qt,ar);break;case 5:ji(t,qt,ar);break;default:throw Error(j(329))}}}return Xt(t,$e()),t.callbackNode===n?gS.bind(null,t):null}function dm(t,e){var n=Za;return t.current.memoizedState.isDehydrated&&(Zi(t,e).flags|=256),t=uh(t,e),t!==2&&(e=qt,qt=n,e!==null&&fm(e)),t}function fm(t){qt===null?qt=t:qt.push.apply(qt,t)}function Y1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qr(t,e){for(e&=~zg,e&=~td,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),r=1<<n;t[n]=-1,e&=~r}}function Bw(t){if(ge&6)throw Error(j(327));uo();var e=qc(t,0);if(!(e&1))return Xt(t,$e()),null;var n=uh(t,e);if(t.tag!==0&&n===2){var r=Fp(t);r!==0&&(e=r,n=dm(t,r))}if(n===1)throw n=Al,Zi(t,0),qr(t,e),Xt(t,$e()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ji(t,qt,ar),Xt(t,$e()),null}function $g(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(Io=$e()+500,Xh&&Si())}}function as(t){Yr!==null&&Yr.tag===0&&!(ge&6)&&uo();var e=ge;ge|=1;var n=_n.transition,r=Ee;try{if(_n.transition=null,Ee=1,t)return t()}finally{Ee=r,_n.transition=n,ge=e,!(ge&6)&&Si()}}function qg(){rn=to.current,be(to)}function Zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,R1(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Cg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yc();break;case 3:Eo(),be(Qt),be(Dt),Og();break;case 5:Dg(r);break;case 4:Eo();break;case 13:be(Oe);break;case 19:be(Oe);break;case 10:xg(r.type._context);break;case 22:case 23:qg()}n=n.return}if(dt=t,Ke=t=ai(t.current,null),yt=rn=e,nt=0,Al=null,zg=td=os=0,qt=Za=null,qi!==null){for(e=0;e<qi.length;e++)if(n=qi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qi=null}return t}function _S(t,e){do{var n=Ke;try{if(Ag(),Cc.current=sh,ih){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ih=!1}if(ss=0,ot=et=Ve=null,Xa=!1,Cl=0,Bg.current=null,n===null||n.return===null){nt=1,Al=e,Ke=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=yt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Aw(o);if(_!==null){_.flags&=-257,xw(_,o,a,s,e),_.mode&1&&kw(s,c,e),e=_,u=c;var I=e.updateQueue;if(I===null){var R=new Set;R.add(u),e.updateQueue=R}else I.add(u);break e}else{if(!(e&1)){kw(s,c,e),Hg();break e}u=Error(j(426))}}else if(De&&a.mode&1){var P=Aw(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),xw(P,o,a,s,e),Rg(To(u,a));break e}}s=u=To(u,a),nt!==4&&(nt=2),Za===null?Za=[s]:Za.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=eS(s,u,e);Ew(s,S);break e;case 1:a=u;var E=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(si===null||!si.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=tS(s,a,e);Ew(s,O);break e}}s=s.return}while(s!==null)}wS(n)}catch(V){e=V,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function yS(){var t=oh.current;return oh.current=sh,t===null?sh:t}function Hg(){(nt===0||nt===3||nt===2)&&(nt=4),dt===null||!(os&268435455)&&!(td&268435455)||qr(dt,yt)}function uh(t,e){var n=ge;ge|=2;var r=yS();(dt!==t||yt!==e)&&(ar=null,Zi(t,e));do try{X1();break}catch(i){_S(t,i)}while(!0);if(Ag(),ge=n,oh.current=r,Ke!==null)throw Error(j(261));return dt=null,yt=0,nt}function X1(){for(;Ke!==null;)vS(Ke)}function J1(){for(;Ke!==null&&!IP();)vS(Ke)}function vS(t){var e=TS(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?wS(t):Ke=e,Bg.current=null}function wS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=q1(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Ke=null;return}}else if(n=$1(n,e,rn),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);nt===0&&(nt=5)}function ji(t,e,n){var r=Ee,i=_n.transition;try{_n.transition=null,Ee=1,Z1(t,e,n,r)}finally{_n.transition=i,Ee=r}return null}function Z1(t,e,n,r){do uo();while(Yr!==null);if(ge&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DP(t,s),t===dt&&(Ke=dt=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ac||(ac=!0,IS($c,function(){return uo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_n.transition,_n.transition=null;var o=Ee;Ee=1;var a=ge;ge|=4,Bg.current=null,G1(t,n),pS(n,t),v1($p),Hc=!!Wp,$p=Wp=null,t.current=n,K1(n),SP(),ge=a,Ee=o,_n.transition=s}else t.current=n;if(ac&&(ac=!1,Yr=t,lh=i),s=t.pendingLanes,s===0&&(si=null),kP(n.stateNode),Xt(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ah)throw ah=!1,t=cm,cm=null,t;return lh&1&&t.tag!==0&&uo(),s=t.pendingLanes,s&1?t===hm?el++:(el=0,hm=t):el=0,Si(),null}function uo(){if(Yr!==null){var t=eI(lh),e=_n.transition,n=Ee;try{if(_n.transition=null,Ee=16>t?16:t,Yr===null)var r=!1;else{if(t=Yr,Yr=null,lh=0,ge&6)throw Error(j(331));var i=ge;for(ge|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:Ja(8,h,s)}var f=h.child;if(f!==null)f.return=h,q=f;else for(;q!==null;){h=q;var p=h.sibling,_=h.return;if(hS(h),h===c){q=null;break}if(p!==null){p.return=_,q=p;break}q=_}}}var I=s.alternate;if(I!==null){var R=I.child;if(R!==null){I.child=null;do{var P=R.sibling;R.sibling=null,R=P}while(R!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ja(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,q=S;break e}q=s.return}}var E=t.current;for(q=E;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=E;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ed(9,a)}}catch(V){Ue(a,a.return,V)}if(a===o){q=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,q=O;break e}q=a.return}}if(ge=i,Si(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(Hh,t)}catch{}r=!0}return r}finally{Ee=n,_n.transition=e}}return!1}function zw(t,e,n){e=To(n,e),e=eS(t,e,1),t=ii(t,e,1),e=Ft(),t!==null&&(eu(t,1,e),Xt(t,e))}function Ue(t,e,n){if(t.tag===3)zw(t,t,n);else for(;e!==null;){if(e.tag===3){zw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(si===null||!si.has(r))){t=To(n,t),t=tS(e,t,1),e=ii(e,t,1),t=Ft(),e!==null&&(eu(e,1,t),Xt(e,t));break}}e=e.return}}function eN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ft(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(yt&n)===n&&(nt===4||nt===3&&(yt&130023424)===yt&&500>$e()-Wg?Zi(t,0):zg|=n),Xt(t,e)}function ES(t,e){e===0&&(t.mode&1?(e=Xu,Xu<<=1,!(Xu&130023424)&&(Xu=4194304)):e=1);var n=Ft();t=Cr(t,e),t!==null&&(eu(t,e,n),Xt(t,n))}function tN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ES(t,n)}function nN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),ES(t,n)}var TS;TS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gt=!1,W1(t,e,n);Gt=!!(t.flags&131072)}else Gt=!1,De&&e.flags&1048576&&RI(e,Zc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;kc(t,e),t=e.pendingProps;var i=yo(e,Dt.current);lo(e,n),i=Mg(null,e,r,t,i,n);var s=Vg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(r)?(s=!0,Xc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ng(e),i.updater=Zh,e.stateNode=i,i._reactInternals=e,Zp(e,r,t,n),e=nm(null,e,r,!0,s,n)):(e.tag=0,De&&s&&Sg(e),Mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(kc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=iN(r),t=Rn(r,t),i){case 0:e=tm(null,e,r,t,n);break e;case 1:e=bw(null,e,r,t,n);break e;case 11:e=Pw(null,e,r,t,n);break e;case 14:e=Nw(null,e,r,Rn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),tm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),bw(t,e,r,i,n);case 3:e:{if(sS(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,bI(t,e),nh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=To(Error(j(423)),e),e=Dw(t,e,r,n,i);break e}else if(r!==i){i=To(Error(j(424)),e),e=Dw(t,e,r,n,i);break e}else for(sn=ri(e.stateNode.containerInfo.firstChild),an=e,De=!0,An=null,n=PI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),r===i){e=Rr(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return DI(e),t===null&&Yp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,qp(r,i)?o=null:s!==null&&qp(r,s)&&(e.flags|=32),iS(t,e),Mt(t,e,o,n),e.child;case 6:return t===null&&Yp(e),null;case 13:return oS(t,e,n);case 4:return bg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wo(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),Pw(t,e,r,i,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(eh,r._currentValue),r._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===i.children&&!Qt.current){e=Rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=_r(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,lo(e,n),i=yn(i),r=r(i),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,i=Rn(r,e.pendingProps),i=Rn(r.type,i),Nw(t,e,r,i,n);case 15:return nS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rn(r,i),kc(t,e),e.tag=1,Yt(r)?(t=!0,Xc(e)):t=!1,lo(e,n),ZI(e,r,i),Zp(e,r,i,n),nm(null,e,r,!0,t,n);case 19:return aS(t,e,n);case 22:return rS(t,e,n)}throw Error(j(156,e.tag))};function IS(t,e){return YT(t,e)}function rN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new rN(t,e,n,r)}function Gg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iN(t){if(typeof t=="function")return Gg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dg)return 11;if(t===fg)return 14}return 2}function ai(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qs:return es(n.children,i,s,e);case hg:o=8,i|=8;break;case Ip:return t=mn(12,n,e,i|2),t.elementType=Ip,t.lanes=s,t;case Sp:return t=mn(13,n,e,i),t.elementType=Sp,t.lanes=s,t;case Cp:return t=mn(19,n,e,i),t.elementType=Cp,t.lanes=s,t;case DT:return nd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case NT:o=10;break e;case bT:o=9;break e;case dg:o=11;break e;case fg:o=14;break e;case zr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function es(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function nd(t,e,n,r){return t=mn(22,t,r,e),t.elementType=DT,t.lanes=n,t.stateNode={isHidden:!1},t}function Kf(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Qf(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xf(0),this.expirationTimes=xf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kg(t,e,n,r,i,s,o,a,u){return t=new sN(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ng(s),t}function oN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function SS(t){if(!t)return fi;t=t._reactInternals;e:{if(Is(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Yt(n))return SI(t,n,e)}return e}function CS(t,e,n,r,i,s,o,a,u){return t=Kg(n,r,!0,t,i,s,o,a,u),t.context=SS(null),n=t.current,r=Ft(),i=oi(n),s=_r(r,i),s.callback=e??null,ii(n,s,i),t.current.lanes=i,eu(t,i,r),Xt(t,r),t}function rd(t,e,n,r){var i=e.current,s=Ft(),o=oi(i);return n=SS(n),e.context===null?e.context=n:e.pendingContext=n,e=_r(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ii(i,e,o),t!==null&&(Dn(t,i,o,s),Sc(t,i,o)),o}function ch(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ww(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qg(t,e){Ww(t,e),(t=t.alternate)&&Ww(t,e)}function aN(){return null}var RS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yg(t){this._internalRoot=t}id.prototype.render=Yg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));rd(t,e,null,null)};id.prototype.unmount=Yg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;as(function(){rd(null,t,null,null)}),e[Sr]=null}};function id(t){this._internalRoot=t}id.prototype.unstable_scheduleHydration=function(t){if(t){var e=rI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$r.length&&e!==0&&e<$r[n].priority;n++);$r.splice(n,0,t),n===0&&sI(t)}};function Xg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $w(){}function lN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ch(o);s.call(c)}}var o=CS(e,r,t,0,null,!1,!1,"",$w);return t._reactRootContainer=o,t[Sr]=o.current,wl(t.nodeType===8?t.parentNode:t),as(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ch(u);a.call(c)}}var u=Kg(t,0,!1,null,null,!1,!1,"",$w);return t._reactRootContainer=u,t[Sr]=u.current,wl(t.nodeType===8?t.parentNode:t),as(function(){rd(e,u,n,r)}),u}function od(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ch(o);a.call(u)}}rd(e,o,t,i)}else o=lN(n,e,t,i,r);return ch(o)}tI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fa(e.pendingLanes);n!==0&&(gg(e,n|1),Xt(e,$e()),!(ge&6)&&(Io=$e()+500,Si()))}break;case 13:as(function(){var r=Cr(t,1);if(r!==null){var i=Ft();Dn(r,t,1,i)}}),Qg(t,1)}};_g=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=Ft();Dn(e,t,134217728,n)}Qg(t,134217728)}};nI=function(t){if(t.tag===13){var e=oi(t),n=Cr(t,e);if(n!==null){var r=Ft();Dn(n,t,e,r)}Qg(t,e)}};rI=function(){return Ee};iI=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};Lp=function(t,e,n){switch(e){case"input":if(Ap(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yh(r);if(!i)throw Error(j(90));LT(r),Ap(r,i)}}}break;case"textarea":VT(t,n);break;case"select":e=n.value,e!=null&&io(t,!!n.multiple,e,!1)}};$T=$g;qT=as;var uN={usingClientEntryPoint:!1,Events:[nu,Qs,Yh,zT,WT,$g]},xa={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cN={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=KT(t),t===null?null:t.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||aN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Hh=lc.inject(cN),Hn=lc}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uN;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xg(e))throw Error(j(200));return oN(t,e,null,n)};hn.createRoot=function(t,e){if(!Xg(t))throw Error(j(299));var n=!1,r="",i=RS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kg(t,1,!1,null,null,n,!1,r,i),t[Sr]=e.current,wl(t.nodeType===8?t.parentNode:t),new Yg(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=KT(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return as(t)};hn.hydrate=function(t,e,n){if(!sd(e))throw Error(j(200));return od(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Xg(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=RS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=CS(e,null,t,1,n??null,i,!1,s,o),t[Sr]=e.current,wl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new id(e)};hn.render=function(t,e,n){if(!sd(e))throw Error(j(200));return od(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!sd(t))throw Error(j(40));return t._reactRootContainer?(as(function(){od(null,null,t,!1,function(){t._reactRootContainer=null,t[Sr]=null})}),!0):!1};hn.unstable_batchedUpdates=$g;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sd(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return od(t,e,n,!1,r)};hn.version="18.3.1-next-f1338f8080-20240426";function kS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kS)}catch(t){console.error(t)}}kS(),kT.exports=hn;var hN=kT.exports,qw=hN;Ep.createRoot=qw.createRoot,Ep.hydrateRoot=qw.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xl.apply(this,arguments)}var Xr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xr||(Xr={}));const Hw="popstate";function dN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return pm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:AS(i)}return pN(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fN(){return Math.random().toString(36).substr(2,8)}function Gw(t,e){return{usr:t.state,key:t.key,idx:e}}function pm(t,e,n,r){return n===void 0&&(n=null),xl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Go(e):e,{state:n,key:e&&e.key||r||fN()})}function AS(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Go(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function pN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Xr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(xl({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Xr.Pop;let P=h(),S=P==null?null:P-c;c=P,u&&u({action:a,location:R.location,delta:S})}function p(P,S){a=Xr.Push;let E=pm(R.location,P,S);c=h()+1;let A=Gw(E,c),O=R.createHref(E);try{o.pushState(A,"",O)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(O)}s&&u&&u({action:a,location:R.location,delta:1})}function _(P,S){a=Xr.Replace;let E=pm(R.location,P,S);c=h();let A=Gw(E,c),O=R.createHref(E);o.replaceState(A,"",O),s&&u&&u({action:a,location:R.location,delta:0})}function I(P){let S=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof P=="string"?P:AS(P);return E=E.replace(/ $/,"%20"),Ye(S,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,S)}let R={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Hw,f),u=P,()=>{i.removeEventListener(Hw,f),u=null}},createHref(P){return e(i,P)},createURL:I,encodeLocation(P){let S=I(P);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:p,replace:_,go(P){return o.go(P)}};return R}var Kw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Kw||(Kw={}));function mN(t,e,n){return n===void 0&&(n="/"),gN(t,e,n)}function gN(t,e,n,r){let i=typeof e=="string"?Go(e):e,s=NS(i.pathname||"/",n);if(s==null)return null;let o=xS(t);_N(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=xN(s);a=RN(o[u],c)}return a}function xS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ye(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ts([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:SN(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of PS(s.path))i(s,o,u)}),e}function PS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=PS(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function _N(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:CN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yN=/^:[\w-]+$/,vN=3,wN=2,EN=1,TN=10,IN=-2,Qw=t=>t==="*";function SN(t,e){let n=t.split("/"),r=n.length;return n.some(Qw)&&(r+=IN),e&&(r+=wN),n.filter(i=>!Qw(i)).reduce((i,s)=>i+(yN.test(s)?vN:s===""?EN:TN),r)}function CN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function RN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=kN({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:ts([s,f.pathname]),pathnameBase:ON(ts([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=ts([s,f.pathnameBase]))}return o}function kN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=AN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:_}=h;if(p==="*"){let R=a[f]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const I=a[f];return _&&!I?c[p]=void 0:c[p]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function AN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function xN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function NS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const PN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NN=t=>PN.test(t);function bN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Go(t):t,s;if(n)if(NN(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Jg(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Yw(n.substring(1),"/"):s=Yw(n,e)}else s=e;return{pathname:s,search:LN(r),hash:MN(i)}}function Yw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function DN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bS(t,e){let n=DN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function DS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Go(t):(i=xl({},t),Ye(!i.pathname||!i.pathname.includes("?"),Yf("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),Yf("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),Yf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=bN(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const ts=t=>t.join("/").replace(/\/\/+/g,"/"),ON=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),LN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function VN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const OS=["post","put","patch","delete"];new Set(OS);const FN=["get",...OS];new Set(FN);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pl.apply(this,arguments)}const Zg=D.createContext(null),jN=D.createContext(null),iu=D.createContext(null),ad=D.createContext(null),Ci=D.createContext({outlet:null,matches:[],isDataRoute:!1}),LS=D.createContext(null);function su(){return D.useContext(ad)!=null}function ld(){return su()||Ye(!1),D.useContext(ad).location}function MS(t){D.useContext(iu).static||D.useLayoutEffect(t)}function Zn(){let{isDataRoute:t}=D.useContext(Ci);return t?JN():UN()}function UN(){su()||Ye(!1);let t=D.useContext(Zg),{basename:e,future:n,navigator:r}=D.useContext(iu),{matches:i}=D.useContext(Ci),{pathname:s}=ld(),o=JSON.stringify(bS(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return MS(()=>{a.current=!0}),D.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=DS(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ts([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function VS(){let{matches:t}=D.useContext(Ci),e=t[t.length-1];return e?e.params:{}}function BN(t,e){return zN(t,e)}function zN(t,e,n,r){su()||Ye(!1);let{navigator:i}=D.useContext(iu),{matches:s}=D.useContext(Ci),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ld(),h;if(e){var f;let P=typeof e=="string"?Go(e):e;u==="/"||(f=P.pathname)!=null&&f.startsWith(u)||Ye(!1),h=P}else h=c;let p=h.pathname||"/",_=p;if(u!=="/"){let P=u.replace(/^\//,"").split("/");_="/"+p.replace(/^\//,"").split("/").slice(P.length).join("/")}let I=mN(t,{pathname:_}),R=GN(I&&I.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:ts([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:ts([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&R?D.createElement(ad.Provider,{value:{location:Pl({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Xr.Pop}},R):R}function WN(){let t=XN(),e=VN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const $N=D.createElement(WN,null);class qN extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Ci.Provider,{value:this.props.routeContext},D.createElement(LS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HN(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(Zg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Ci.Provider,{value:e},r)}function GN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Ye(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:_}=n,I=f.route.loader&&p[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||I){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,p)=>{let _,I=!1,R=null,P=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,R=f.route.errorElement||$N,u&&(c<0&&p===0?(ZN("route-fallback"),I=!0,P=null):c===p&&(I=!0,P=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,p+1)),E=()=>{let A;return _?A=R:I?A=P:f.route.Component?A=D.createElement(f.route.Component,null):f.route.element?A=f.route.element:A=h,D.createElement(HN,{match:f,routeContext:{outlet:h,matches:S,isDataRoute:n!=null},children:A})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?D.createElement(qN,{location:n.location,revalidation:n.revalidation,component:R,error:_,children:E(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):E()},null)}var FS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(FS||{}),jS=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(jS||{});function KN(t){let e=D.useContext(Zg);return e||Ye(!1),e}function QN(t){let e=D.useContext(jN);return e||Ye(!1),e}function YN(t){let e=D.useContext(Ci);return e||Ye(!1),e}function US(t){let e=YN(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function XN(){var t;let e=D.useContext(LS),n=QN(),r=US();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function JN(){let{router:t}=KN(FS.UseNavigateStable),e=US(jS.UseNavigateStable),n=D.useRef(!1);return MS(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Pl({fromRouteId:e},s)))},[t,e])}const Xw={};function ZN(t,e,n){Xw[t]||(Xw[t]=!0)}function eb(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function BS(t){let{to:e,replace:n,state:r,relative:i}=t;su()||Ye(!1);let{future:s,static:o}=D.useContext(iu),{matches:a}=D.useContext(Ci),{pathname:u}=ld(),c=Zn(),h=DS(e,bS(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(h);return D.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Cn(t){Ye(!1)}function tb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xr.Pop,navigator:s,static:o=!1,future:a}=t;su()&&Ye(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:Pl({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Go(r));let{pathname:h="/",search:f="",hash:p="",state:_=null,key:I="default"}=r,R=D.useMemo(()=>{let P=NS(h,u);return P==null?null:{location:{pathname:P,search:f,hash:p,state:_,key:I},navigationType:i}},[u,h,f,p,_,I,i]);return R==null?null:D.createElement(iu.Provider,{value:c},D.createElement(ad.Provider,{children:n,value:R}))}function nb(t){let{children:e,location:n}=t;return BN(mm(e),n)}new Promise(()=>{});function mm(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,mm(r.props.children,s));return}r.type!==Cn&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=mm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const rb="6";try{window.__reactRouterVersion=rb}catch{}const ib="startTransition",Jw=eP[ib];function sb(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=dN({window:i,v5Compat:!0}));let o=s.current,[a,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=D.useCallback(f=>{c&&Jw?Jw(()=>u(f)):u(f)},[u,c]);return D.useLayoutEffect(()=>o.listen(h),[o,h]),D.useEffect(()=>eb(r),[r]),D.createElement(tb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Zw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Zw||(Zw={}));var eE;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(eE||(eE={}));var tE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw Ko(e)},Ko=function(t){return new Error("Firebase Database ("+zS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ob=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},e_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(p=64)),r.push(n[h],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(WS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ob(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new ab;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const I=c<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ab extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $S=function(t){const e=WS(t);return e_.encodeByteArray(e,!0)},hh=function(t){return $S(t).replace(/\./g,"")},dh=function(t){try{return e_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){return qS(void 0,t)}function qS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ub(n)||(t[n]=qS(t[n],e[n]));return t}function ub(t){return t!=="__proto__"}/**
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
 */function cb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hb=()=>cb().__FIREBASE_DEFAULTS__,db=()=>{if(typeof process>"u"||typeof tE>"u")return;const t=tE.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dh(t[1]);return e&&JSON.parse(e)},ud=()=>{try{return hb()||db()||fb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},HS=t=>{var e,n;return(n=(e=ud())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},GS=t=>{const e=HS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},KS=()=>{var t;return(t=ud())===null||t===void 0?void 0:t.config},QS=t=>{var e;return(e=ud())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function YS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[hh(JSON.stringify(n)),hh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function t_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function pb(){var t;const e=(t=ud())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _b(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yb(){return zS.NODE_ADMIN===!0}function vb(){return!pb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JS(){try{return typeof indexedDB=="object"}catch{return!1}}function ZS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function wb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Eb,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ss.prototype.create)}}class Ss{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Tb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new er(i,a,r)}}function Tb(t,e){return t.replace(Ib,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ib=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Nl(dh(s[0])||""),n=Nl(dh(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Sb=function(t){const e=eC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Cb=function(t){const e=eC(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function So(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ph(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Co(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(nE(s)&&nE(o)){if(!Co(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function nE(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ua(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ba(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const p=(i<<5|i>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function kb(t,e){const n=new Ab(t,e);return n.subscribe.bind(n)}class Ab{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xf),i.error===void 0&&(i.error=Xf),i.complete===void 0&&(i.complete=Xf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xf(){}function Ro(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Db(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bb(t){return t===Ui?void 0:t}function Db(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Lb={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Mb=ce.INFO,Vb={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Fb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Vb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hd{constructor(e){this.name=e,this._logLevel=Mb,this._logHandler=Fb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const jb=(t,e)=>e.some(n=>t instanceof n);let rE,iE;function Ub(){return rE||(rE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bb(){return iE||(iE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tC=new WeakMap,gm=new WeakMap,nC=new WeakMap,Jf=new WeakMap,n_=new WeakMap;function zb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tC.set(n,t)}).catch(()=>{}),n_.set(e,t),e}function Wb(t){if(gm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gm.set(t,e)}let _m={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $b(t){_m=t(_m)}function qb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zf(this),e,...n);return nC.set(r,e.sort?e.sort():[e]),yr(r)}:Bb().includes(t)?function(...e){return t.apply(Zf(this),e),yr(tC.get(this))}:function(...e){return yr(t.apply(Zf(this),e))}}function Hb(t){return typeof t=="function"?qb(t):(t instanceof IDBTransaction&&Wb(t),jb(t,Ub())?new Proxy(t,_m):t)}function yr(t){if(t instanceof IDBRequest)return zb(t);if(Jf.has(t))return Jf.get(t);const e=Hb(t);return e!==t&&(Jf.set(t,e),n_.set(e,t)),e}const Zf=t=>n_.get(t);function dd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(yr(o.result),u.oldVersion,u.newVersion,yr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function ep(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),yr(n).then(()=>{})}const Gb=["get","getKey","getAll","getAllKeys","count"],Kb=["put","add","delete","clear"],tp=new Map;function sE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tp.get(e))return tp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Kb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gb.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return tp.set(e,s),s}$b(t=>({...t,get:(e,n,r)=>sE(e,n)||t.get(e,n,r),has:(e,n)=>!!sE(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ym="@firebase/app",oE="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new hd("@firebase/app"),Xb="@firebase/app-compat",Jb="@firebase/analytics-compat",Zb="@firebase/analytics",eD="@firebase/app-check-compat",tD="@firebase/app-check",nD="@firebase/auth",rD="@firebase/auth-compat",iD="@firebase/database",sD="@firebase/data-connect",oD="@firebase/database-compat",aD="@firebase/functions",lD="@firebase/functions-compat",uD="@firebase/installations",cD="@firebase/installations-compat",hD="@firebase/messaging",dD="@firebase/messaging-compat",fD="@firebase/performance",pD="@firebase/performance-compat",mD="@firebase/remote-config",gD="@firebase/remote-config-compat",_D="@firebase/storage",yD="@firebase/storage-compat",vD="@firebase/firestore",wD="@firebase/vertexai-preview",ED="@firebase/firestore-compat",TD="firebase",ID="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="[DEFAULT]",SD={[ym]:"fire-core",[Xb]:"fire-core-compat",[Zb]:"fire-analytics",[Jb]:"fire-analytics-compat",[tD]:"fire-app-check",[eD]:"fire-app-check-compat",[nD]:"fire-auth",[rD]:"fire-auth-compat",[iD]:"fire-rtdb",[sD]:"fire-data-connect",[oD]:"fire-rtdb-compat",[aD]:"fire-fn",[lD]:"fire-fn-compat",[uD]:"fire-iid",[cD]:"fire-iid-compat",[hD]:"fire-fcm",[dD]:"fire-fcm-compat",[fD]:"fire-perf",[pD]:"fire-perf-compat",[mD]:"fire-rc",[gD]:"fire-rc-compat",[_D]:"fire-gcs",[yD]:"fire-gcs-compat",[vD]:"fire-fst",[ED]:"fire-fst-compat",[wD]:"fire-vertex","fire-js":"fire-js",[TD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=new Map,CD=new Map,wm=new Map;function aE(t,e){try{t.container.addComponent(e)}catch(n){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(wm.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;wm.set(e,t);for(const n of mh.values())aE(n,t);for(const n of CD.values())aE(n,t);return!0}function Cs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},li=new Ss("app","Firebase",RD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw li.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=ID;function rC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw li.create("bad-app-name",{appName:String(i)});if(n||(n=KS()),!n)throw li.create("no-options");const s=mh.get(i);if(s){if(Co(n,s.options)&&Co(r,s.config))return s;throw li.create("duplicate-app",{appName:i})}const o=new Ob(i);for(const u of wm.values())o.addComponent(u);const a=new kD(n,r,o);return mh.set(i,a),a}function fd(t=vm){const e=mh.get(t);if(!e&&t===vm&&KS())return rC();if(!e)throw li.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let i=(r=SD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(a.join(" "));return}Fn(new wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const AD="firebase-heartbeat-database",xD=1,bl="firebase-heartbeat-store";let np=null;function iC(){return np||(np=dd(AD,xD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bl)}catch(n){console.warn(n)}}}}).catch(t=>{throw li.create("idb-open",{originalErrorMessage:t.message})})),np}async function PD(t){try{const n=(await iC()).transaction(bl),r=await n.objectStore(bl).get(sC(t));return await n.done,r}catch(e){if(e instanceof er)kr.warn(e.message);else{const n=li.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(n.message)}}}async function lE(t,e){try{const r=(await iC()).transaction(bl,"readwrite");await r.objectStore(bl).put(e,sC(t)),await r.done}catch(n){if(n instanceof er)kr.warn(n.message);else{const r=li.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kr.warn(r.message)}}}function sC(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ND=1024,bD=30*24*60*60*1e3;class DD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uE();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bD}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uE(),{heartbeatsToSend:r,unsentEntries:i}=OD(this._heartbeatsCache.heartbeats),s=hh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return kr.warn(n),""}}}function uE(){return new Date().toISOString().substring(0,10)}function OD(t,e=ND){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JS()?ZS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cE(t){return hh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t){Fn(new wn("platform-logger",e=>new Qb(e),"PRIVATE")),Fn(new wn("heartbeat",e=>new DD(e),"PRIVATE")),Jt(ym,oE,t),Jt(ym,oE,"esm2017"),Jt("fire-js","")}MD("");function r_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function oC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VD=oC,aC=new Ss("auth","Firebase",oC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new hd("@firebase/auth");function FD(t,...e){gh.logLevel<=ce.WARN&&gh.warn(`Auth (${Rs}): ${t}`,...e)}function Nc(t,...e){gh.logLevel<=ce.ERROR&&gh.error(`Auth (${Rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw s_(t,...e)}function On(t,...e){return s_(t,...e)}function i_(t,e,n){const r=Object.assign(Object.assign({},VD()),{[e]:n});return new Ss("auth","Firebase",r).create(e,{appName:t.name})}function vr(t){return i_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&En(t,"argument-error"),i_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function s_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aC.create(t,...e)}function X(t,e,...n){if(!t)throw s_(e,...n)}function fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nc(e),new Error(e)}function Ar(t,e){t||fr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UD(){return hE()==="http:"||hE()==="https:"}function hE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UD()||gb()||"connection"in navigator)?navigator.onLine:!0}function zD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ar(n>e,"Short delay should be less than long delay!"),this.isMobile=t_()||XS()}get(){return BD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t,e){Ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=new ou(3e4,6e4);function Ri(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Or(t,e,n,r,i={}){return uC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return mb()||(c.referrerPolicy="no-referrer"),lC.fetch()(cC(t,t.config.apiHost,n,a),c)})}async function uC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WD),e);try{const i=new HD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw uc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw uc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw uc(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw uc(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw i_(t,h,c);En(t,h)}}catch(i){if(i instanceof er)throw i;En(t,"network-request-failed",{message:String(i)})}}async function au(t,e,n,r,i={}){const s=await Or(t,e,n,r,i);return"mfaPendingCredential"in s&&En(t,"multi-factor-auth-required",{_serverResponse:s}),s}function cC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?o_(t.config,i):`${t.config.apiScheme}://${i}`}function qD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class HD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),$D.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=On(t,e,r);return i.customData._tokenResponse=n,i}function dE(t){return t!==void 0&&t.enterprise!==void 0}class GD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function KD(t,e){return Or(t,"GET","/v2/recaptchaConfig",Ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function hC(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YD(t,e=!1){const n=we(t),r=await n.getIdToken(e),i=a_(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:tl(rp(i.auth_time)),issuedAtTime:tl(rp(i.iat)),expirationTime:tl(rp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rp(t){return Number(t)*1e3}function a_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nc("JWT malformed, contained fewer than 3 sections"),null;try{const i=dh(n);return i?JSON.parse(i):(Nc("Failed to decode base64 JWT payload"),null)}catch(i){return Nc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fE(t){const e=a_(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&XD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=tl(this.lastLoginAt),this.creationTime=tl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _h(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ko(t,hC(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dC(s.providerUserInfo):[],a=eO(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Tm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function ZD(t){const e=we(t);await _h(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dC(t){return t.map(e=>{var{providerId:n}=e,r=r_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO(t,e){const n=await uC(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=cC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nO(t,e){return Or(t,"POST","/v2/accounts:revokeToken",Ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=fE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new co;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return fr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=r_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Tm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YD(this,e)}reload(){return ZD(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _h(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await ko(this,QD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:O,isAnonymous:V,providerData:U,stsTokenManager:T}=n;X(A&&T,e,"internal-error");const v=co.fromJSON(this.name,T);X(typeof A=="string",e,"internal-error"),Br(f,e.name),Br(p,e.name),X(typeof O=="boolean",e,"internal-error"),X(typeof V=="boolean",e,"internal-error"),Br(_,e.name),Br(I,e.name),Br(R,e.name),Br(P,e.name),Br(S,e.name),Br(E,e.name);const C=new pr({uid:A,auth:e,email:p,emailVerified:O,displayName:f,isAnonymous:V,photoURL:I,phoneNumber:_,tenantId:R,stsTokenManager:v,createdAt:S,lastLoginAt:E});return U&&Array.isArray(U)&&(C.providerData=U.map(w=>Object.assign({},w))),P&&(C._redirectEventId=P),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new co;i.updateFromServerResponse(n);const s=new pr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _h(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?dC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new co;a.updateFromIdToken(r);const u=new pr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Tm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=new Map;function mr(t){Ar(t instanceof Function,"Expected a class definition");let e=pE.get(t);return e?(Ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fC.type="NONE";const mE=fC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t,e,n){return`firebase:${t}:${e}:${n}`}class ho{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bc(this.userKey,i.apiKey,s),this.fullPersistenceKey=bc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ho(mr(mE),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||mr(mE);const o=bc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=pr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ho(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ho(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_C(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vC(e))return"Blackberry";if(wC(e))return"Webos";if(mC(e))return"Safari";if((e.includes("chrome/")||gC(e))&&!e.includes("edge/"))return"Chrome";if(yC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pC(t=Ot()){return/firefox\//i.test(t)}function mC(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gC(t=Ot()){return/crios\//i.test(t)}function _C(t=Ot()){return/iemobile/i.test(t)}function yC(t=Ot()){return/android/i.test(t)}function vC(t=Ot()){return/blackberry/i.test(t)}function wC(t=Ot()){return/webos/i.test(t)}function l_(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rO(t=Ot()){var e;return l_(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iO(){return _b()&&document.documentMode===10}function EC(t=Ot()){return l_(t)||yC(t)||wC(t)||vC(t)||/windows phone/i.test(t)||_C(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e=[]){let n;switch(t){case"Browser":n=gE(Ot());break;case"Worker":n=`${gE(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
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
 */class sO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function oO(t,e={}){return Or(t,"GET","/v2/passwordPolicy",Ri(t,e))}/**
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
 */const aO=6;class lO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _E(this),this.idTokenSubscription=new _E(this),this.beforeStateQueue=new sO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hC(this,{idToken:e}),r=await pr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _h(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(vr(this));const n=e?we(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oO(this),n=new lO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ss("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mr(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[mr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ki(t){return we(t)}class _E{constructor(e){this.auth=e,this.observer=null,this.addObserver=kb(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cO(t){pd=t}function IC(t){return pd.loadJS(t)}function hO(){return pd.recaptchaEnterpriseScript}function dO(){return pd.gapiScript}function fO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pO="recaptcha-enterprise",mO="NO_RECAPTCHA";class gO{constructor(e){this.type=pO,this.auth=ki(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{KD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new GD(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;dE(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(mO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&dE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=hO();u.length!==0&&(u+=a),IC(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function yE(t,e,n,r=!1){const i=new gO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Im(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await yE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(t,e){const n=Cs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Co(s,e??{}))return i;En(i,"already-initialized")}return n.initialize({options:e})}function yO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vO(t,e,n){const r=ki(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=SC(e),{host:o,port:a}=wO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),EO()}function SC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wO(t){const e=SC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vE(o)}}}function vE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fr("not implemented")}_getIdTokenResponse(e){return fr("not implemented")}_linkToIdToken(e,n){return fr("not implemented")}_getReauthenticationResolver(e){return fr("not implemented")}}async function TO(t,e){return Or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IO(t,e){return au(t,"POST","/v1/accounts:signInWithPassword",Ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SO(t,e){return au(t,"POST","/v1/accounts:signInWithEmailLink",Ri(t,e))}async function CO(t,e){return au(t,"POST","/v1/accounts:signInWithEmailLink",Ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends u_{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Dl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Dl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Im(e,n,"signInWithPassword",IO);case"emailLink":return SO(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Im(e,r,"signUpPassword",TO);case"emailLink":return CO(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e){return au(t,"POST","/v1/accounts:signInWithIdp",Ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO="http://localhost";class ls extends u_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=r_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ls(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fo(e,n)}buildRequest(){const e={requestUri:RO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AO(t){const e=Ua(Ba(t)).link,n=e?Ua(Ba(e)).deep_link_id:null,r=Ua(Ba(t)).deep_link_id;return(r?Ua(Ba(r)).link:null)||r||n||e||t}class c_{constructor(e){var n,r,i,s,o,a;const u=Ua(Ba(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=kO((i=u.mode)!==null&&i!==void 0?i:null);X(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=AO(e);try{return new c_(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.providerId=Yo.PROVIDER_ID}static credential(e,n){return Dl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=c_.parseLink(n);return X(r,"argument-error"),Dl._fromEmailAndCode(e,r.code,r.tenantId)}}Yo.PROVIDER_ID="password";Yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends h_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends lu{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends lu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends lu{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.GITHUB_SIGN_IN_METHOD="github.com";Gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends lu{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kr.credential(n,r)}catch{return null}}}Kr.TWITTER_SIGN_IN_METHOD="twitter.com";Kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(t,e){return au(t,"POST","/v1/accounts:signUp",Ri(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pr._fromIdTokenResponse(e,r,i),o=wE(r);return new us({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wE(r);return new us({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh extends er{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new yh(e,n,r,i)}}function CC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yh._fromErrorAndOperation(t,s,e,r):s})}async function PO(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t,e,n=!1){const{auth:r}=t;if(Pn(r.app))return Promise.reject(vr(r));const i="reauthenticate";try{const s=await ko(t,CC(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=a_(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),us._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e,n=!1){if(Pn(t.app))return Promise.reject(vr(t));const r="signIn",i=await CC(t,r,e),s=await us._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function bO(t,e){return RC(ki(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t){const e=ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DO(t,e,n){if(Pn(t.app))return Promise.reject(vr(t));const r=ki(t),o=await Im(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xO).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&kC(t),u}),a=await us._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function OO(t,e,n){return Pn(t.app)?Promise.reject(vr(t)):bO(we(t),Yo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kC(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LO(t,e){return Or(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=we(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ko(r,LO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function VO(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function FO(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function jO(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}function UO(t){return we(t).signOut()}const vh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vh,"1"),this.storage.removeItem(vh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=1e3,zO=10;class xC extends AC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=EC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);iO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xC.type="LOCAL";const WO=xC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC extends AC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}PC.type="SESSION";const NC=PC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new md(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await $O(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}md.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=d_("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function HO(t){Kn().location.href=t}/**
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
 */function bC(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function GO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QO(){return bC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="firebaseLocalStorageDb",YO=1,wh="firebaseLocalStorage",OC="fbase_key";class uu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gd(t,e){return t.transaction([wh],e?"readwrite":"readonly").objectStore(wh)}function XO(){const t=indexedDB.deleteDatabase(DC);return new uu(t).toPromise()}function Sm(){const t=indexedDB.open(DC,YO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wh,{keyPath:OC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wh)?e(r):(r.close(),await XO(),e(await Sm()))})})}async function EE(t,e,n){const r=gd(t,!0).put({[OC]:e,value:n});return new uu(r).toPromise()}async function JO(t,e){const n=gd(t,!1).get(e),r=await new uu(n).toPromise();return r===void 0?null:r.value}function TE(t,e){const n=gd(t,!0).delete(e);return new uu(n).toPromise()}const ZO=800,e2=3;class LC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>e2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=md._getInstance(QO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GO(),!this.activeServiceWorker)return;this.sender=new qO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sm();return await EE(e,vh,"1"),await TE(e,vh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>EE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>TE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gd(i,!1).getAll();return new uu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}LC.type="LOCAL";const t2=LC;new ou(3e4,6e4);/**
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
 */function MC(t,e){return e?mr(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_ extends u_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function n2(t){return RC(t.auth,new f_(t),t.bypassAuthState)}function r2(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),NO(n,new f_(t),t.bypassAuthState)}async function i2(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),PO(n,new f_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return n2;case"linkViaPopup":case"linkViaRedirect":return i2;case"reauthViaPopup":case"reauthViaRedirect":return r2;default:En(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=new ou(2e3,1e4);async function o2(t,e,n){if(Pn(t.app))return Promise.reject(On(t,"operation-not-supported-in-this-environment"));const r=ki(t);jD(t,e,h_);const i=MC(r,n);return new Gi(r,"signInViaPopup",e,i).executeNotNull()}class Gi extends VC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gi.currentPopupAction&&Gi.currentPopupAction.cancel(),Gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=d_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s2.get())};e()}}Gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2="pendingRedirect",Dc=new Map;class l2 extends VC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dc.get(this.auth._key());if(!e){try{const r=await u2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dc.set(this.auth._key(),e)}return this.bypassAuthState||Dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u2(t,e){const n=d2(e),r=h2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function c2(t,e){Dc.set(t._key(),e)}function h2(t){return mr(t._redirectPersistence)}function d2(t){return bc(a2,t.config.apiKey,t.name)}async function f2(t,e,n=!1){if(Pn(t.app))return Promise.reject(vr(t));const r=ki(t),i=MC(r,e),o=await new l2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=10*60*1e3;class m2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!FC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p2&&this.cachedEventUids.clear(),this.cachedEventUids.has(IE(e))}saveEventToCache(e){this.cachedEventUids.add(IE(e)),this.lastProcessedEventTime=Date.now()}}function IE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function FC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return FC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v2=/^https?/;async function w2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _2(t);for(const n of e)try{if(E2(n))return}catch{}En(t,"unauthorized-domain")}function E2(t){const e=Em(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!v2.test(n))return!1;if(y2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const T2=new ou(3e4,6e4);function SE(){const t=Kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I2(t){return new Promise((e,n)=>{var r,i,s;function o(){SE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{SE(),n(On(t,"network-request-failed"))},timeout:T2.get()})}if(!((i=(r=Kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Kn().gapi)===null||s===void 0)&&s.load)o();else{const a=fO("iframefcb");return Kn()[a]=()=>{gapi.load?o():n(On(t,"network-request-failed"))},IC(`${dO()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Oc=null,e})}let Oc=null;function S2(t){return Oc=Oc||I2(t),Oc}/**
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
 */const C2=new ou(5e3,15e3),R2="__/auth/iframe",k2="emulator/auth/iframe",A2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function P2(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?o_(e,k2):`https://${t.config.authDomain}/${R2}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},i=x2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qo(r).slice(1)}`}async function N2(t){const e=await S2(t),n=Kn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:P2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),a=Kn().setTimeout(()=>{s(o)},C2.get());function u(){Kn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const b2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D2=500,O2=600,L2="_blank",M2="http://localhost";class CE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V2(t,e,n,r=D2,i=O2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},b2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ot().toLowerCase();n&&(a=gC(c)?L2:n),pC(c)&&(e=e||M2,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[_,I])=>`${p}${_}=${I},`,"");if(rO(c)&&a!=="_self")return F2(e||"",a),new CE(null);const f=window.open(e||"",a,h);X(f,t,"popup-blocked");try{f.focus()}catch{}return new CE(f)}function F2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const j2="__/auth/handler",U2="emulator/auth/handler",B2=encodeURIComponent("fac");async function RE(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:i};if(e instanceof h_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof lu){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${B2}=${encodeURIComponent(u)}`:"";return`${z2(t)}?${Qo(a).slice(1)}${c}`}function z2({config:t}){return t.emulator?o_(t,U2):`https://${t.authDomain}/${j2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="webStorageSupport";class W2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NC,this._completeRedirectFn=f2,this._overrideRedirectResult=c2}async _openPopup(e,n,r,i){var s;Ar((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await RE(e,n,r,Em(),i);return V2(e,o,d_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await RE(e,n,r,Em(),i);return HO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ar(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await N2(e),r=new m2(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ip,{type:ip},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ip];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=w2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return EC()||mC()||l_()}}const $2=W2;var kE="@firebase/auth",AE="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function G2(t){Fn(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TC(t)},c=new uO(r,i,s,u);return yO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new wn("auth-internal",e=>{const n=ki(e.getProvider("auth").getImmediate());return(r=>new q2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(kE,AE,H2(t)),Jt(kE,AE,"esm2017")}/**
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
 */const K2=5*60,Q2=QS("authIdTokenMaxAge")||K2;let xE=null;const Y2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Q2)return;const i=n==null?void 0:n.token;xE!==i&&(xE=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function X2(t=fd()){const e=Cs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_O(t,{popupRedirectResolver:$2,persistence:[t2,WO,NC]}),r=QS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Y2(s.toString());FO(n,o,()=>o(n.currentUser)),VO(n,a=>o(a))}}const i=HS("auth");return i&&vO(n,`http://${i}`),n}function J2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=On("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",J2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});G2("Browser");var Z2="firebase",eL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(Z2,eL,"app");var PE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,jC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function C(){}C.prototype=v.prototype,T.D=v.prototype,T.prototype=new C,T.prototype.constructor=T,T.C=function(w,x,N){for(var k=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)k[rt-2]=arguments[rt];return v.prototype[x].apply(w,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,C){C||(C=0);var w=Array(16);if(typeof v=="string")for(var x=0;16>x;++x)w[x]=v.charCodeAt(C++)|v.charCodeAt(C++)<<8|v.charCodeAt(C++)<<16|v.charCodeAt(C++)<<24;else for(x=0;16>x;++x)w[x]=v[C++]|v[C++]<<8|v[C++]<<16|v[C++]<<24;v=T.g[0],C=T.g[1],x=T.g[2];var N=T.g[3],k=v+(N^C&(x^N))+w[0]+3614090360&4294967295;v=C+(k<<7&4294967295|k>>>25),k=N+(x^v&(C^x))+w[1]+3905402710&4294967295,N=v+(k<<12&4294967295|k>>>20),k=x+(C^N&(v^C))+w[2]+606105819&4294967295,x=N+(k<<17&4294967295|k>>>15),k=C+(v^x&(N^v))+w[3]+3250441966&4294967295,C=x+(k<<22&4294967295|k>>>10),k=v+(N^C&(x^N))+w[4]+4118548399&4294967295,v=C+(k<<7&4294967295|k>>>25),k=N+(x^v&(C^x))+w[5]+1200080426&4294967295,N=v+(k<<12&4294967295|k>>>20),k=x+(C^N&(v^C))+w[6]+2821735955&4294967295,x=N+(k<<17&4294967295|k>>>15),k=C+(v^x&(N^v))+w[7]+4249261313&4294967295,C=x+(k<<22&4294967295|k>>>10),k=v+(N^C&(x^N))+w[8]+1770035416&4294967295,v=C+(k<<7&4294967295|k>>>25),k=N+(x^v&(C^x))+w[9]+2336552879&4294967295,N=v+(k<<12&4294967295|k>>>20),k=x+(C^N&(v^C))+w[10]+4294925233&4294967295,x=N+(k<<17&4294967295|k>>>15),k=C+(v^x&(N^v))+w[11]+2304563134&4294967295,C=x+(k<<22&4294967295|k>>>10),k=v+(N^C&(x^N))+w[12]+1804603682&4294967295,v=C+(k<<7&4294967295|k>>>25),k=N+(x^v&(C^x))+w[13]+4254626195&4294967295,N=v+(k<<12&4294967295|k>>>20),k=x+(C^N&(v^C))+w[14]+2792965006&4294967295,x=N+(k<<17&4294967295|k>>>15),k=C+(v^x&(N^v))+w[15]+1236535329&4294967295,C=x+(k<<22&4294967295|k>>>10),k=v+(x^N&(C^x))+w[1]+4129170786&4294967295,v=C+(k<<5&4294967295|k>>>27),k=N+(C^x&(v^C))+w[6]+3225465664&4294967295,N=v+(k<<9&4294967295|k>>>23),k=x+(v^C&(N^v))+w[11]+643717713&4294967295,x=N+(k<<14&4294967295|k>>>18),k=C+(N^v&(x^N))+w[0]+3921069994&4294967295,C=x+(k<<20&4294967295|k>>>12),k=v+(x^N&(C^x))+w[5]+3593408605&4294967295,v=C+(k<<5&4294967295|k>>>27),k=N+(C^x&(v^C))+w[10]+38016083&4294967295,N=v+(k<<9&4294967295|k>>>23),k=x+(v^C&(N^v))+w[15]+3634488961&4294967295,x=N+(k<<14&4294967295|k>>>18),k=C+(N^v&(x^N))+w[4]+3889429448&4294967295,C=x+(k<<20&4294967295|k>>>12),k=v+(x^N&(C^x))+w[9]+568446438&4294967295,v=C+(k<<5&4294967295|k>>>27),k=N+(C^x&(v^C))+w[14]+3275163606&4294967295,N=v+(k<<9&4294967295|k>>>23),k=x+(v^C&(N^v))+w[3]+4107603335&4294967295,x=N+(k<<14&4294967295|k>>>18),k=C+(N^v&(x^N))+w[8]+1163531501&4294967295,C=x+(k<<20&4294967295|k>>>12),k=v+(x^N&(C^x))+w[13]+2850285829&4294967295,v=C+(k<<5&4294967295|k>>>27),k=N+(C^x&(v^C))+w[2]+4243563512&4294967295,N=v+(k<<9&4294967295|k>>>23),k=x+(v^C&(N^v))+w[7]+1735328473&4294967295,x=N+(k<<14&4294967295|k>>>18),k=C+(N^v&(x^N))+w[12]+2368359562&4294967295,C=x+(k<<20&4294967295|k>>>12),k=v+(C^x^N)+w[5]+4294588738&4294967295,v=C+(k<<4&4294967295|k>>>28),k=N+(v^C^x)+w[8]+2272392833&4294967295,N=v+(k<<11&4294967295|k>>>21),k=x+(N^v^C)+w[11]+1839030562&4294967295,x=N+(k<<16&4294967295|k>>>16),k=C+(x^N^v)+w[14]+4259657740&4294967295,C=x+(k<<23&4294967295|k>>>9),k=v+(C^x^N)+w[1]+2763975236&4294967295,v=C+(k<<4&4294967295|k>>>28),k=N+(v^C^x)+w[4]+1272893353&4294967295,N=v+(k<<11&4294967295|k>>>21),k=x+(N^v^C)+w[7]+4139469664&4294967295,x=N+(k<<16&4294967295|k>>>16),k=C+(x^N^v)+w[10]+3200236656&4294967295,C=x+(k<<23&4294967295|k>>>9),k=v+(C^x^N)+w[13]+681279174&4294967295,v=C+(k<<4&4294967295|k>>>28),k=N+(v^C^x)+w[0]+3936430074&4294967295,N=v+(k<<11&4294967295|k>>>21),k=x+(N^v^C)+w[3]+3572445317&4294967295,x=N+(k<<16&4294967295|k>>>16),k=C+(x^N^v)+w[6]+76029189&4294967295,C=x+(k<<23&4294967295|k>>>9),k=v+(C^x^N)+w[9]+3654602809&4294967295,v=C+(k<<4&4294967295|k>>>28),k=N+(v^C^x)+w[12]+3873151461&4294967295,N=v+(k<<11&4294967295|k>>>21),k=x+(N^v^C)+w[15]+530742520&4294967295,x=N+(k<<16&4294967295|k>>>16),k=C+(x^N^v)+w[2]+3299628645&4294967295,C=x+(k<<23&4294967295|k>>>9),k=v+(x^(C|~N))+w[0]+4096336452&4294967295,v=C+(k<<6&4294967295|k>>>26),k=N+(C^(v|~x))+w[7]+1126891415&4294967295,N=v+(k<<10&4294967295|k>>>22),k=x+(v^(N|~C))+w[14]+2878612391&4294967295,x=N+(k<<15&4294967295|k>>>17),k=C+(N^(x|~v))+w[5]+4237533241&4294967295,C=x+(k<<21&4294967295|k>>>11),k=v+(x^(C|~N))+w[12]+1700485571&4294967295,v=C+(k<<6&4294967295|k>>>26),k=N+(C^(v|~x))+w[3]+2399980690&4294967295,N=v+(k<<10&4294967295|k>>>22),k=x+(v^(N|~C))+w[10]+4293915773&4294967295,x=N+(k<<15&4294967295|k>>>17),k=C+(N^(x|~v))+w[1]+2240044497&4294967295,C=x+(k<<21&4294967295|k>>>11),k=v+(x^(C|~N))+w[8]+1873313359&4294967295,v=C+(k<<6&4294967295|k>>>26),k=N+(C^(v|~x))+w[15]+4264355552&4294967295,N=v+(k<<10&4294967295|k>>>22),k=x+(v^(N|~C))+w[6]+2734768916&4294967295,x=N+(k<<15&4294967295|k>>>17),k=C+(N^(x|~v))+w[13]+1309151649&4294967295,C=x+(k<<21&4294967295|k>>>11),k=v+(x^(C|~N))+w[4]+4149444226&4294967295,v=C+(k<<6&4294967295|k>>>26),k=N+(C^(v|~x))+w[11]+3174756917&4294967295,N=v+(k<<10&4294967295|k>>>22),k=x+(v^(N|~C))+w[2]+718787259&4294967295,x=N+(k<<15&4294967295|k>>>17),k=C+(N^(x|~v))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(x+(k<<21&4294967295|k>>>11))&4294967295,T.g[2]=T.g[2]+x&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var C=v-this.blockSize,w=this.B,x=this.h,N=0;N<v;){if(x==0)for(;N<=C;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<v;)if(w[x++]=T.charCodeAt(N++),x==this.blockSize){i(this,w),x=0;break}}else for(;N<v;)if(w[x++]=T[N++],x==this.blockSize){i(this,w),x=0;break}}this.h=x,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var C=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=C&255,C/=256;for(this.u(T),T=Array(16),v=C=0;4>v;++v)for(var w=0;32>w;w+=8)T[C++]=this.g[v]>>>w&255;return T};function s(T,v){var C=a;return Object.prototype.hasOwnProperty.call(C,T)?C[T]:C[T]=v(T)}function o(T,v){this.h=v;for(var C=[],w=!0,x=T.length-1;0<=x;x--){var N=T[x]|0;w&&N==v||(C[x]=N,w=!1)}this.g=C}var a={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return P(c(-T));for(var v=[],C=1,w=0;T>=C;w++)v[w]=T/C|0,C*=4294967296;return new o(v,0)}function h(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return P(h(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(v,8)),w=f,x=0;x<T.length;x+=8){var N=Math.min(8,T.length-x),k=parseInt(T.substring(x,x+N),v);8>N?(N=c(Math.pow(v,N)),w=w.j(N).add(c(k))):(w=w.j(C),w=w.add(c(k)))}return w}var f=u(0),p=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-P(this).m();for(var T=0,v=1,C=0;C<this.g.length;C++){var w=this.i(C);T+=(0<=w?w:4294967296+w)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(I(this))return"0";if(R(this))return"-"+P(this).toString(T);for(var v=c(Math.pow(T,6)),C=this,w="";;){var x=O(C,v).g;C=S(C,x.j(v));var N=((0<C.g.length?C.g[0]:C.h)>>>0).toString(T);if(C=x,I(C))return N+w;for(;6>N.length;)N="0"+N;w=N+w}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function I(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function R(T){return T.h==-1}t.l=function(T){return T=S(this,T),R(T)?-1:I(T)?0:1};function P(T){for(var v=T.g.length,C=[],w=0;w<v;w++)C[w]=~T.g[w];return new o(C,~T.h).add(p)}t.abs=function(){return R(this)?P(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),C=[],w=0,x=0;x<=v;x++){var N=w+(this.i(x)&65535)+(T.i(x)&65535),k=(N>>>16)+(this.i(x)>>>16)+(T.i(x)>>>16);w=k>>>16,N&=65535,k&=65535,C[x]=k<<16|N}return new o(C,C[C.length-1]&-2147483648?-1:0)};function S(T,v){return T.add(P(v))}t.j=function(T){if(I(this)||I(T))return f;if(R(this))return R(T)?P(this).j(P(T)):P(P(this).j(T));if(R(T))return P(this.j(P(T)));if(0>this.l(_)&&0>T.l(_))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,C=[],w=0;w<2*v;w++)C[w]=0;for(w=0;w<this.g.length;w++)for(var x=0;x<T.g.length;x++){var N=this.i(w)>>>16,k=this.i(w)&65535,rt=T.i(x)>>>16,Wt=T.i(x)&65535;C[2*w+2*x]+=k*Wt,E(C,2*w+2*x),C[2*w+2*x+1]+=N*Wt,E(C,2*w+2*x+1),C[2*w+2*x+1]+=k*rt,E(C,2*w+2*x+1),C[2*w+2*x+2]+=N*rt,E(C,2*w+2*x+2)}for(w=0;w<v;w++)C[w]=C[2*w+1]<<16|C[2*w];for(w=v;w<2*v;w++)C[w]=0;return new o(C,0)};function E(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function A(T,v){this.g=T,this.h=v}function O(T,v){if(I(v))throw Error("division by zero");if(I(T))return new A(f,f);if(R(T))return v=O(P(T),v),new A(P(v.g),P(v.h));if(R(v))return v=O(T,P(v)),new A(P(v.g),v.h);if(30<T.g.length){if(R(T)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var C=p,w=v;0>=w.l(T);)C=V(C),w=V(w);var x=U(C,1),N=U(w,1);for(w=U(w,2),C=U(C,2);!I(w);){var k=N.add(w);0>=k.l(T)&&(x=x.add(C),N=k),w=U(w,1),C=U(C,1)}return v=S(T,x.j(v)),new A(x,v)}for(x=f;0<=T.l(v);){for(C=Math.max(1,Math.floor(T.m()/v.m())),w=Math.ceil(Math.log(C)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),N=c(C),k=N.j(v);R(k)||0<k.l(T);)C-=w,N=c(C),k=N.j(v);I(N)&&(N=p),x=x.add(N),T=S(T,k)}return new A(x,T)}t.A=function(T){return O(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),C=[],w=0;w<v;w++)C[w]=this.i(w)&T.i(w);return new o(C,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),C=[],w=0;w<v;w++)C[w]=this.i(w)|T.i(w);return new o(C,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),C=[],w=0;w<v;w++)C[w]=this.i(w)^T.i(w);return new o(C,this.h^T.h)};function V(T){for(var v=T.g.length+1,C=[],w=0;w<v;w++)C[w]=T.i(w)<<1|T.i(w-1)>>>31;return new o(C,T.h)}function U(T,v){var C=v>>5;v%=32;for(var w=T.g.length-C,x=[],N=0;N<w;N++)x[N]=0<v?T.i(N+C)>>>v|T.i(N+C+1)<<32-v:T.i(N+C);return new o(x,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jC=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ns=o}).apply(typeof PE<"u"?PE:typeof self<"u"?self:typeof window<"u"?window:{});var cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var UC,za,BC,Lc,Cm,zC,WC,$C;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof cc=="object"&&cc];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var b=l[y];if(!(b in m))break e;m=m[b]}l=l[l.length-1],y=m[l],d=d(y),d!=y&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,y=!1,b={next:function(){if(!y&&m<l.length){var L=m++;return{value:d(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,y),l.apply(d,b)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function _(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function I(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,b,L){for(var z=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)z[Se-2]=arguments[Se];return d.prototype[b].apply(y,z)}}function R(l){const d=l.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=l[y];return m}return[]}function P(l,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const b=l.length||0,L=y.length||0;l.length=b+L;for(let z=0;z<L;z++)l[b+z]=y[z]}else l.push(y)}}class S{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var V=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function U(l,d,m){for(const y in l)d.call(m,l[y],y,l)}function T(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function v(l){const d={};for(const m in l)d[m]=l[m];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(l,d){let m,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(m in y)l[m]=y[m];for(let L=0;L<C.length;L++)m=C[L],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function x(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function N(l){a.setTimeout(()=>{throw l},0)}function k(){var l=Q;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class rt{constructor(){this.h=this.g=null}add(d,m){const y=Wt.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var Wt=new S(()=>new en,l=>l.reset());class en{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let It,W=!1,Q=new rt,Z=()=>{const l=a.Promise.resolve(void 0);It=()=>{l.then(H)}};var H=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(m){N(m)}var d=Wt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}W=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var ze=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function He(l,d){if(ie.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(V){e:{try{O(d.nodeName);var b=!0;break e}catch{}b=!1}b||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ze[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&He.aa.h.call(this)}}I(He,ie);var Ze={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var de="closure_listenable_"+(1e6*Math.random()|0),Mr=0;function Pi(l,d,m,y,b){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=b,this.key=++Mr,this.da=this.fa=!1}function Ni(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function mt(l){this.src=l,this.g={},this.h=0}mt.prototype.add=function(l,d,m,y,b){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var z=Bn(l,d,y,b);return-1<z?(d=l[z],m||(d.fa=!1)):(d=new Pi(d,this.src,L,!!y,b),d.fa=m,l.push(d)),d};function Un(l,d){var m=d.type;if(m in l.g){var y=l.g[m],b=Array.prototype.indexOf.call(y,d,void 0),L;(L=0<=b)&&Array.prototype.splice.call(y,b,1),L&&(Ni(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Bn(l,d,m,y){for(var b=0;b<l.length;++b){var L=l[b];if(!L.da&&L.listener==d&&L.capture==!!m&&L.ha==y)return b}return-1}var oa="closure_lm_"+(1e6*Math.random()|0),bs={};function xu(l,d,m,y,b){if(Array.isArray(d)){for(var L=0;L<d.length;L++)xu(l,d[L],m,y,b);return null}return m=Ae(m),l&&l[de]?l.K(d,m,c(y)?!!y.capture:!1,b):of(l,d,m,!1,y,b)}function of(l,d,m,y,b,L){if(!d)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,Se=J(l);if(Se||(l[oa]=Se=new mt(l)),m=Se.add(d,m,y,z,L),m.proxy)return m;if(y=af(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)ze||(b=z),b===void 0&&(b=!1),l.addEventListener(d.toString(),y,b);else if(l.attachEvent)l.attachEvent(la(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function af(){function l(m){return d.call(l.src,l.listener,m)}const d=Pu;return l}function aa(l,d,m,y,b){if(Array.isArray(d))for(var L=0;L<d.length;L++)aa(l,d[L],m,y,b);else y=c(y)?!!y.capture:!!y,m=Ae(m),l&&l[de]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],m=Bn(L,m,y,b),-1<m&&(Ni(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=J(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Bn(d,m,y,b)),(m=-1<l?d[l]:null)&&$t(m))}function $t(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[de])Un(d.i,l);else{var m=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(m,y,l.capture):d.detachEvent?d.detachEvent(la(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=J(d))?(Un(m,l),m.h==0&&(m.src=null,d[oa]=null)):Ni(l)}}}function la(l){return l in bs?bs[l]:bs[l]="on"+l}function Pu(l,d){if(l.da)l=!0;else{d=new He(d,this);var m=l.listener,y=l.ha||l.src;l.fa&&$t(l),l=m.call(y,d)}return l}function J(l){return l=l[oa],l instanceof mt?l:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ae(l){return typeof l=="function"?l:(l[re]||(l[re]=function(d){return l.handleEvent(d)}),l[re])}function pe(){se.call(this),this.i=new mt(this),this.M=this,this.F=null}I(pe,se),pe.prototype[de]=!0,pe.prototype.removeEventListener=function(l,d,m,y){aa(this,l,d,m,y)};function fe(l,d){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new ie(d,l);else if(d instanceof ie)d.target=d.target||l;else{var b=d;d=new ie(y,l),w(d,b)}if(b=!0,m)for(var L=m.length-1;0<=L;L--){var z=d.g=m[L];b=St(z,y,!0,d)&&b}if(z=d.g=l,b=St(z,y,!0,d)&&b,b=St(z,y,!1,d)&&b,m)for(L=0;L<m.length;L++)z=d.g=m[L],b=St(z,y,!1,d)&&b}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],y=0;y<m.length;y++)Ni(m[y]);delete l.g[d],l.h--}}this.F=null},pe.prototype.K=function(l,d,m,y){return this.i.add(String(l),d,!1,m,y)},pe.prototype.L=function(l,d,m,y){return this.i.add(String(l),d,!0,m,y)};function St(l,d,m,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var b=!0,L=0;L<d.length;++L){var z=d[L];if(z&&!z.da&&z.capture==m){var Se=z.listener,gt=z.ha||z.src;z.fa&&Un(l.i,z),b=Se.call(gt,y)!==!1&&b}}return b&&!y.defaultPrevented}function tn(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Ds(l){l.g=tn(()=>{l.g=null,l.i&&(l.i=!1,Ds(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class hx extends se{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ds(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ua(l){se.call(this),this.h=l,this.g={}}I(ua,se);var $y=[];function qy(l){U(l.g,function(d,m){this.g.hasOwnProperty(m)&&$t(d)},l),l.g={}}ua.prototype.N=function(){ua.aa.N.call(this),qy(this)},ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lf=a.JSON.stringify,dx=a.JSON.parse,fx=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function uf(){}uf.prototype.h=null;function Hy(l){return l.h||(l.h=l.i())}function Gy(){}var ca={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cf(){ie.call(this,"d")}I(cf,ie);function hf(){ie.call(this,"c")}I(hf,ie);var bi={},Ky=null;function Nu(){return Ky=Ky||new pe}bi.La="serverreachability";function Qy(l){ie.call(this,bi.La,l)}I(Qy,ie);function ha(l){const d=Nu();fe(d,new Qy(d))}bi.STAT_EVENT="statevent";function Yy(l,d){ie.call(this,bi.STAT_EVENT,l),this.stat=d}I(Yy,ie);function Lt(l){const d=Nu();fe(d,new Yy(d,l))}bi.Ma="timingevent";function Xy(l,d){ie.call(this,bi.Ma,l),this.size=d}I(Xy,ie);function da(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function fa(){this.g=!0}fa.prototype.xa=function(){this.g=!1};function px(l,d,m,y,b,L){l.info(function(){if(l.g)if(L)for(var z="",Se=L.split("&"),gt=0;gt<Se.length;gt++){var _e=Se[gt].split("=");if(1<_e.length){var Ct=_e[0];_e=_e[1];var Rt=Ct.split("_");z=2<=Rt.length&&Rt[1]=="type"?z+(Ct+"="+_e+"&"):z+(Ct+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+d+`
`+m+`
`+z})}function mx(l,d,m,y,b,L,z){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+d+`
`+m+`
`+L+" "+z})}function Os(l,d,m,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+_x(l,m)+(y?" "+y:"")})}function gx(l,d){l.info(function(){return"TIMEOUT: "+d})}fa.prototype.info=function(){};function _x(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var b=y[1];if(Array.isArray(b)&&!(1>b.length)){var L=b[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return lf(m)}catch{return d}}var bu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},df;function Du(){}I(Du,uf),Du.prototype.g=function(){return new XMLHttpRequest},Du.prototype.i=function(){return{}},df=new Du;function Vr(l,d,m,y){this.j=l,this.i=d,this.l=m,this.R=y||1,this.U=new ua(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zy}function Zy(){this.i=null,this.g="",this.h=!1}var ev={},ff={};function pf(l,d,m){l.L=1,l.v=Vu(ir(d)),l.m=m,l.P=!0,tv(l,null)}function tv(l,d){l.F=Date.now(),Ou(l),l.A=ir(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),mv(m.i,"t",y),l.C=0,m=l.j.J,l.h=new Zy,l.g=Dv(l.j,m?d:null,!l.m),0<l.O&&(l.M=new hx(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,y=l.ca;var b="readystatechange";Array.isArray(b)||(b&&($y[0]=b.toString()),b=$y);for(var L=0;L<b.length;L++){var z=xu(m,b[L],y||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),ha(),px(l.i,l.u,l.A,l.l,l.R,l.m)}Vr.prototype.ca=function(l){l=l.target;const d=this.M;d&&sr(l)==3?d.j():this.Y(l)},Vr.prototype.Y=function(l){try{if(l==this.g)e:{const Rt=sr(this.g);var d=this.g.Ba();const Vs=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Tv(this.g)))){this.J||Rt!=4||d==7||(d==8||0>=Vs?ha(3):ha(2)),mf(this);var m=this.g.Z();this.X=m;t:if(nv(this)){var y=Tv(this.g);l="";var b=y.length,L=sr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Di(this),pa(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<b;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(L&&d==b-1)});y.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,mx(this.i,this.u,this.A,this.l,this.R,Rt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,gt=this.g;if((Se=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(Se)){var _e=Se;break t}}_e=null}if(m=_e)Os(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gf(this,m);else{this.o=!1,this.s=3,Lt(12),Di(this),pa(this);break e}}if(this.P){m=!0;let In;for(;!this.J&&this.C<z.length;)if(In=yx(this,z),In==ff){Rt==4&&(this.s=4,Lt(14),m=!1),Os(this.i,this.l,null,"[Incomplete Response]");break}else if(In==ev){this.s=4,Lt(15),Os(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else Os(this.i,this.l,In,null),gf(this,In);if(nv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||z.length!=0||this.h.h||(this.s=1,Lt(16),m=!1),this.o=this.o&&m,!m)Os(this.i,this.l,z,"[Invalid Chunked Response]"),Di(this),pa(this);else if(0<z.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Tf(Ct),Ct.M=!0,Lt(11))}}else Os(this.i,this.l,z,null),gf(this,z);Rt==4&&Di(this),this.o&&!this.J&&(Rt==4?xv(this.j,this):(this.o=!1,Ou(this)))}else Lx(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Di(this),pa(this)}}}catch{}finally{}};function nv(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function yx(l,d){var m=l.C,y=d.indexOf(`
`,m);return y==-1?ff:(m=Number(d.substring(m,y)),isNaN(m)?ev:(y+=1,y+m>d.length?ff:(d=d.slice(y,y+m),l.C=y+m,d)))}Vr.prototype.cancel=function(){this.J=!0,Di(this)};function Ou(l){l.S=Date.now()+l.I,rv(l,l.I)}function rv(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=da(p(l.ba,l),d)}function mf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Vr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(gx(this.i,this.A),this.L!=2&&(ha(),Lt(17)),Di(this),this.s=2,pa(this)):rv(this,this.S-l)};function pa(l){l.j.G==0||l.J||xv(l.j,l)}function Di(l){mf(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,qy(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function gf(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||_f(m.h,l))){if(!l.K&&_f(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Wu(m),Bu(m);else break e;Ef(m),Lt(18)}}else m.za=b[1],0<m.za-m.T&&37500>b[2]&&m.F&&m.v==0&&!m.C&&(m.C=da(p(m.Za,m),6e3));if(1>=ov(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Li(m,11)}else if((l.K||m.g==l)&&Wu(m),!E(d))for(b=m.Da.g.parse(d),d=0;d<b.length;d++){let _e=b[d];if(m.T=_e[0],_e=_e[1],m.G==2)if(_e[0]=="c"){m.K=_e[1],m.ia=_e[2];const Ct=_e[3];Ct!=null&&(m.la=Ct,m.j.info("VER="+m.la));const Rt=_e[4];Rt!=null&&(m.Aa=Rt,m.j.info("SVER="+m.Aa));const Vs=_e[5];Vs!=null&&typeof Vs=="number"&&0<Vs&&(y=1.5*Vs,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const In=l.g;if(In){const qu=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qu){var L=y.h;L.g||qu.indexOf("spdy")==-1&&qu.indexOf("quic")==-1&&qu.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(yf(L,L.h),L.h=null))}if(y.D){const If=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;If&&(y.ya=If,xe(y.I,y.D,If))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var z=l;if(y.qa=bv(y,y.J?y.ia:null,y.W),z.K){av(y.h,z);var Se=z,gt=y.L;gt&&(Se.I=gt),Se.B&&(mf(Se),Ou(Se)),y.g=z}else kv(y);0<m.i.length&&zu(m)}else _e[0]!="stop"&&_e[0]!="close"||Li(m,7);else m.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Li(m,7):wf(m):_e[0]!="noop"&&m.l&&m.l.ta(_e),m.v=0)}}ha(4)}catch{}}var vx=class{constructor(l,d){this.g=l,this.map=d}};function iv(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sv(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ov(l){return l.h?1:l.g?l.g.size:0}function _f(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function yf(l,d){l.g?l.g.add(d):l.h=d}function av(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}iv.prototype.cancel=function(){if(this.i=lv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function lv(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return R(l.i)}function wx(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,y=0;y<m;y++)d.push(l[y]);return d}d=[],m=0;for(y in l)d[m++]=l[y];return d}function Ex(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const y in l)d[m++]=y;return d}}}function uv(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=Ex(l),y=wx(l),b=y.length,L=0;L<b;L++)d.call(void 0,y[L],m&&m[L],l)}var cv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tx(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),b=null;if(0<=y){var L=l[m].substring(0,y);b=l[m].substring(y+1)}else L=l[m];d(L,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Oi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Oi){this.h=l.h,Lu(this,l.j),this.o=l.o,this.g=l.g,Mu(this,l.s),this.l=l.l;var d=l.i,m=new _a;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),hv(this,m),this.m=l.m}else l&&(d=String(l).match(cv))?(this.h=!1,Lu(this,d[1]||"",!0),this.o=ma(d[2]||""),this.g=ma(d[3]||"",!0),Mu(this,d[4]),this.l=ma(d[5]||"",!0),hv(this,d[6]||"",!0),this.m=ma(d[7]||"")):(this.h=!1,this.i=new _a(null,this.h))}Oi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(ga(d,dv,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(ga(d,dv,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(ga(m,m.charAt(0)=="/"?Cx:Sx,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",ga(m,kx)),l.join("")};function ir(l){return new Oi(l)}function Lu(l,d,m){l.j=m?ma(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Mu(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function hv(l,d,m){d instanceof _a?(l.i=d,Ax(l.i,l.h)):(m||(d=ga(d,Rx)),l.i=new _a(d,l.h))}function xe(l,d,m){l.i.set(d,m)}function Vu(l){return xe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ma(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ga(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,Ix),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ix(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var dv=/[#\/\?@]/g,Sx=/[#\?:]/g,Cx=/[#\?]/g,Rx=/[#\?@]/g,kx=/#/g;function _a(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Fr(l){l.g||(l.g=new Map,l.h=0,l.i&&Tx(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=_a.prototype,t.add=function(l,d){Fr(this),this.i=null,l=Ls(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function fv(l,d){Fr(l),d=Ls(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function pv(l,d){return Fr(l),d=Ls(l,d),l.g.has(d)}t.forEach=function(l,d){Fr(this),this.g.forEach(function(m,y){m.forEach(function(b){l.call(d,b,y,this)},this)},this)},t.na=function(){Fr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const b=l[y];for(let L=0;L<b.length;L++)m.push(d[y])}return m},t.V=function(l){Fr(this);let d=[];if(typeof l=="string")pv(this,l)&&(d=d.concat(this.g.get(Ls(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return Fr(this),this.i=null,l=Ls(this,l),pv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function mv(l,d,m){fv(l,d),0<m.length&&(l.i=null,l.g.set(Ls(l,d),R(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const L=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var b=L;z[y]!==""&&(b+="="+encodeURIComponent(String(z[y]))),l.push(b)}}return this.i=l.join("&")};function Ls(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Ax(l,d){d&&!l.j&&(Fr(l),l.i=null,l.g.forEach(function(m,y){var b=y.toLowerCase();y!=b&&(fv(this,y),mv(this,b,m))},l)),l.j=d}function xx(l,d){const m=new fa;if(a.Image){const y=new Image;y.onload=_(jr,m,"TestLoadImage: loaded",!0,d,y),y.onerror=_(jr,m,"TestLoadImage: error",!1,d,y),y.onabort=_(jr,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=_(jr,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function Px(l,d){const m=new fa,y=new AbortController,b=setTimeout(()=>{y.abort(),jr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(b),L.ok?jr(m,"TestPingServer: ok",!0,d):jr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),jr(m,"TestPingServer: error",!1,d)})}function jr(l,d,m,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(m)}catch{}}function Nx(){this.g=new fx}function bx(l,d,m){const y=m||"";try{uv(l,function(b,L){let z=b;c(b)&&(z=lf(b)),d.push(y+L+"="+encodeURIComponent(z))})}catch(b){throw d.push(y+"type="+encodeURIComponent("_badmap")),b}}function Fu(l){this.l=l.Ub||null,this.j=l.eb||!1}I(Fu,uf),Fu.prototype.g=function(){return new ju(this.l,this.j)},Fu.prototype.i=function(l){return function(){return l}}({});function ju(l,d){pe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(ju,pe),t=ju.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,va(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ya(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,va(this)),this.g&&(this.readyState=3,va(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function gv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?ya(this):va(this),this.readyState==3&&gv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ya(this))},t.Qa=function(l){this.g&&(this.response=l,ya(this))},t.ga=function(){this.g&&ya(this)};function ya(l){l.readyState=4,l.l=null,l.j=null,l.v=null,va(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function va(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ju.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function _v(l){let d="";return U(l,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function vf(l,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=_v(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):xe(l,d,m))}function je(l){pe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(je,pe);var Dx=/^https?$/i,Ox=["POST","PUT"];t=je.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():df.g(),this.v=this.o?Hy(this.o):Hy(df),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){yv(this,L);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)m.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())m.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Ox,d,void 0))||y||b||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of m)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ev(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){yv(this,L)}};function yv(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,vv(l),Uu(l)}function vv(l){l.A||(l.A=!0,fe(l,"complete"),fe(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,fe(this,"complete"),fe(this,"abort"),Uu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Uu(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wv(this):this.bb())},t.bb=function(){wv(this)};function wv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||sr(l)!=4||l.Z()!=2)){if(l.u&&sr(l)==4)tn(l.Ea,0,l);else if(fe(l,"readystatechange"),sr(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=z===0){var b=String(l.D).match(cv)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),y=!Dx.test(b?b.toLowerCase():"")}m=y}if(m)fe(l,"complete"),fe(l,"success");else{l.m=6;try{var L=2<sr(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",vv(l)}}finally{Uu(l)}}}}function Uu(l,d){if(l.g){Ev(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||fe(l,"ready");try{m.onreadystatechange=y}catch{}}}function Ev(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function sr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<sr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),dx(d)}};function Tv(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Lx(l){const d={};l=(l.g&&2<=sr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(E(l[y]))continue;var m=x(l[y]);const b=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=d[b]||[];d[b]=L,L.push(m)}T(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wa(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function Iv(l){this.Aa=0,this.i=[],this.j=new fa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wa("baseRetryDelayMs",5e3,l),this.cb=wa("retryDelaySeedMs",1e4,l),this.Wa=wa("forwardChannelMaxRetries",2,l),this.wa=wa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new iv(l&&l.concurrentRequestLimit),this.Da=new Nx,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Iv.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,y){Lt(0),this.W=l,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=bv(this,null,this.W),zu(this)};function wf(l){if(Sv(l),l.G==3){var d=l.U++,m=ir(l.I);if(xe(m,"SID",l.K),xe(m,"RID",d),xe(m,"TYPE","terminate"),Ea(l,m),d=new Vr(l,l.j,d),d.L=2,d.v=Vu(ir(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Dv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ou(d)}Nv(l)}function Bu(l){l.g&&(Tf(l),l.g.cancel(),l.g=null)}function Sv(l){Bu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Wu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function zu(l){if(!sv(l.h)&&!l.s){l.s=!0;var d=l.Ga;It||Z(),W||(It(),W=!0),Q.add(d,l),l.B=0}}function Mx(l,d){return ov(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=da(p(l.Ga,l,d),Pv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new Vr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=v(L),w(L,this.S)):L=this.S),this.m!==null||this.O||(b.H=L,L=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Rv(this,b,d),m=ir(this.I),xe(m,"RID",l),xe(m,"CVER",22),this.D&&xe(m,"X-HTTP-Session-Id",this.D),Ea(this,m),L&&(this.O?d="headers="+encodeURIComponent(String(_v(L)))+"&"+d:this.m&&vf(m,this.m,L)),yf(this.h,b),this.Ua&&xe(m,"TYPE","init"),this.P?(xe(m,"$req",d),xe(m,"SID","null"),b.T=!0,pf(b,m,null)):pf(b,m,d),this.G=2}}else this.G==3&&(l?Cv(this,l):this.i.length==0||sv(this.h)||Cv(this))};function Cv(l,d){var m;d?m=d.l:m=l.U++;const y=ir(l.I);xe(y,"SID",l.K),xe(y,"RID",m),xe(y,"AID",l.T),Ea(l,y),l.m&&l.o&&vf(y,l.m,l.o),m=new Vr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Rv(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),yf(l.h,m),pf(m,y,d)}function Ea(l,d){l.H&&U(l.H,function(m,y){xe(d,y,m)}),l.l&&uv({},function(m,y){xe(d,y,m)})}function Rv(l,d,m){m=Math.min(l.i.length,m);var y=l.l?p(l.l.Na,l.l,l):null;e:{var b=l.i;let L=-1;for(;;){const z=["count="+m];L==-1?0<m?(L=b[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let Se=!0;for(let gt=0;gt<m;gt++){let _e=b[gt].g;const Ct=b[gt].map;if(_e-=L,0>_e)L=Math.max(0,b[gt].g-100),Se=!1;else try{bx(Ct,z,"req"+_e+"_")}catch{y&&y(Ct)}}if(Se){y=z.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,y}function kv(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;It||Z(),W||(It(),W=!0),Q.add(d,l),l.v=0}}function Ef(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=da(p(l.Fa,l),Pv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Av(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=da(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Bu(this),Av(this))};function Tf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Av(l){l.g=new Vr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=ir(l.qa);xe(d,"RID","rpc"),xe(d,"SID",l.K),xe(d,"AID",l.T),xe(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&xe(d,"TO",l.ja),xe(d,"TYPE","xmlhttp"),Ea(l,d),l.m&&l.o&&vf(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Vu(ir(d)),m.m=null,m.P=!0,tv(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Bu(this),Ef(this),Lt(19))};function Wu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function xv(l,d){var m=null;if(l.g==d){Wu(l),Tf(l),l.g=null;var y=2}else if(_f(l.h,d))m=d.D,av(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var b=l.B;y=Nu(),fe(y,new Xy(y,m)),zu(l)}else kv(l);else if(b=d.s,b==3||b==0&&0<d.X||!(y==1&&Mx(l,d)||y==2&&Ef(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),b){case 1:Li(l,5);break;case 4:Li(l,10);break;case 3:Li(l,6);break;default:Li(l,2)}}}function Pv(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function Li(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),y=l.Xa;const b=!y;y=new Oi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Lu(y,"https"),Vu(y),b?xx(y.toString(),m):Px(y.toString(),m)}else Lt(2);l.G=0,l.l&&l.l.sa(d),Nv(l),Sv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function Nv(l){if(l.G=0,l.ka=[],l.l){const d=lv(l.h);(d.length!=0||l.i.length!=0)&&(P(l.ka,d),P(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function bv(l,d,m){var y=m instanceof Oi?ir(m):new Oi(m);if(y.g!="")d&&(y.g=d+"."+y.g),Mu(y,y.s);else{var b=a.location;y=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;var L=new Oi(null);y&&Lu(L,y),d&&(L.g=d),b&&Mu(L,b),m&&(L.l=m),y=L}return m=l.D,d=l.ya,m&&d&&xe(y,m,d),xe(y,"VER",l.la),Ea(l,y),y}function Dv(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new je(new Fu({eb:m})):new je(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ov(){}t=Ov.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $u(){}$u.prototype.g=function(l,d){return new nn(l,d)};function nn(l,d){pe.call(this),this.g=new Iv(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!E(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Ms(this)}I(nn,pe),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){wf(this.g)},nn.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=lf(l),l=m);d.i.push(new vx(d.Ya++,l)),d.G==3&&zu(d)},nn.prototype.N=function(){this.g.l=null,delete this.j,wf(this.g),delete this.g,nn.aa.N.call(this)};function Lv(l){cf.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}I(Lv,cf);function Mv(){hf.call(this),this.status=1}I(Mv,hf);function Ms(l){this.g=l}I(Ms,Ov),Ms.prototype.ua=function(){fe(this.g,"a")},Ms.prototype.ta=function(l){fe(this.g,new Lv(l))},Ms.prototype.sa=function(l){fe(this.g,new Mv)},Ms.prototype.ra=function(){fe(this.g,"b")},$u.prototype.createWebChannel=$u.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,$C=function(){return new $u},WC=function(){return Nu()},zC=bi,Cm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bu.NO_ERROR=0,bu.TIMEOUT=8,bu.HTTP_ERROR=6,Lc=bu,Jy.COMPLETE="complete",BC=Jy,Gy.EventType=ca,ca.OPEN="a",ca.CLOSE="b",ca.ERROR="c",ca.MESSAGE="d",pe.prototype.listen=pe.prototype.K,za=Gy,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,UC=je}).apply(typeof cc<"u"?cc:typeof self<"u"?self:typeof window<"u"?window:{});const NE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new hd("@firebase/firestore");function Pa(){return cs.logLevel}function G(t,...e){if(cs.logLevel<=ce.DEBUG){const n=e.map(p_);cs.debug(`Firestore (${Xo}): ${t}`,...n)}}function xr(t,...e){if(cs.logLevel<=ce.ERROR){const n=e.map(p_);cs.error(`Firestore (${Xo}): ${t}`,...n)}}function hs(t,...e){if(cs.logLevel<=ce.WARN){const n=e.map(p_);cs.warn(`Firestore (${Xo}): ${t}`,...n)}}function p_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Xo}) INTERNAL ASSERTION FAILED: `+t;throw xr(e),new Error(e)}function Te(t,e){t||ee()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends er{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class tL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nL{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new qC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Pt(e)}}class rL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class iL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new rL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Te(this.o===void 0);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new sL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=aL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Ao(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Xe(0,0))}static max(){return new te(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ol.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ol?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends Ol{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const lL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Ol{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return lL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ne.fromString(e))}static fromName(e){return new K(Ne.fromString(e).popFirst(5))}static empty(){return new K(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ne(e.slice()))}}function uL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new pi(i,K.empty(),e)}function cL(t){return new pi(t.readTime,t.key,-1)}class pi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pi(te.min(),K.empty(),-1)}static max(){return new pi(te.max(),K.empty(),-1)}}function hL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cu(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==dL)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function pL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function hu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class g_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}g_.oe=-1;function _d(t){return t==null}function Eh(t){return t===0&&1/t==-1/0}function mL(t){return typeof t=="number"&&Number.isInteger(t)&&!Eh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function GC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Je=class Rm{constructor(e,n){this.comparator=e,this.root=n||ui.EMPTY}insert(e,n){return new Rm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ui.BLACK,null,null))}remove(e){return new Rm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ui.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hc(this.root,e,this.comparator,!1)}getReverseIterator(){return new hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hc(this.root,e,this.comparator,!0)}},hc=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ui=class or{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??or.RED,this.left=i??or.EMPTY,this.right=s??or.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new or(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return or.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return or.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,or.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,or.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}};ui.EMPTY=null,ui.RED=!0,ui.BLACK=!1;ui.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ui(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new DE(this.data.getIterator())}getIteratorFrom(e){return new DE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class DE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new on([])}unionWith(e){let n=new vt(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class KC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new KC("Invalid base64 string: "+s):s}}(e);return new ft(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const gL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(t){if(Te(!!t),typeof t=="string"){let e=0;const n=gL.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ds(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function y_(t){const e=t.mapValue.fields.__previous_value__;return __(e)?y_(e):e}function Ll(t){const e=mi(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc={mapValue:{}};function fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?__(t)?4:vL(t)?9007199254740991:yL(t)?10:11:ee()}function Jn(t,e){if(t===e)return!0;const n=fs(t);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ll(t).isEqual(Ll(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mi(i.timestampValue),a=mi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ds(i.bytesValue).isEqual(ds(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return We(i.geoPointValue.latitude)===We(s.geoPointValue.latitude)&&We(i.geoPointValue.longitude)===We(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return We(i.integerValue)===We(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=We(i.doubleValue),a=We(s.doubleValue);return o===a?Eh(o)===Eh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ao(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(bE(o)!==bE(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Jn(o[u],a[u])))return!1;return!0}(t,e);default:return ee()}}function Ml(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function Po(t,e){if(t===e)return 0;const n=fs(t),r=fs(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=We(s.integerValue||s.doubleValue),u=We(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return OE(t.timestampValue,e.timestampValue);case 4:return OE(Ll(t),Ll(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ds(s),u=ds(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ye(a[c],u[c]);if(h!==0)return h}return ye(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ye(We(s.latitude),We(o.latitude));return a!==0?a:ye(We(s.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return LE(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},p=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,I=(u=p.value)===null||u===void 0?void 0:u.arrayValue,R=ye(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:LE(_,I)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===dc.mapValue&&o===dc.mapValue)return 0;if(s===dc.mapValue)return 1;if(o===dc.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=ye(u[f],h[f]);if(p!==0)return p;const _=Po(a[u[f]],c[h[f]]);if(_!==0)return _}return ye(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ee()}}function OE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=mi(t),r=mi(e),i=ye(n.seconds,r.seconds);return i!==0?i:ye(n.nanos,r.nanos)}function LE(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Po(n[i],r[i]);if(s)return s}return ye(n.length,r.length)}function No(t){return km(t)}function km(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=km(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${km(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function ME(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Am(t){return!!t&&"integerValue"in t}function v_(t){return!!t&&"arrayValue"in t}function VE(t){return!!t&&"nullValue"in t}function FE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mc(t){return!!t&&"mapValue"in t}function yL(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function nl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=nl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=nl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=nl(n)}setAll(e){let n=ut.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=nl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Mc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Mc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ks(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ht(nl(this.value))}}function QC(t){const e=[];return ks(t.fields,(n,r)=>{const i=new ut([n]);if(Mc(r)){const s=QC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new on(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,te.min(),te.min(),te.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,i){return new bt(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new bt(e,2,n,te.min(),te.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,te.min(),te.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Th{constructor(e,n){this.position=e,this.inclusive=n}}function jE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Po(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function UE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vl{constructor(e,n="asc"){this.field=e,this.dir=n}}function wL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class YC{}class Qe extends YC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TL(e,n,r):n==="array-contains"?new CL(e,r):n==="in"?new RL(e,r):n==="not-in"?new kL(e,r):n==="array-contains-any"?new AL(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new IL(e,r):new SL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Po(n,this.value)):n!==null&&fs(this.value)===fs(n)&&this.matchesComparison(Po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends YC{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new jn(e,n)}matches(e){return XC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function XC(t){return t.op==="and"}function JC(t){return EL(t)&&XC(t)}function EL(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function xm(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+No(t.value);if(JC(t))return t.filters.map(e=>xm(e)).join(",");{const e=t.filters.map(n=>xm(n)).join(",");return`${t.op}(${e})`}}function ZC(t,e){return t instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&Jn(r.value,i.value)}(t,e):t instanceof jn?function(r,i){return i instanceof jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ZC(o,i.filters[a]),!0):!1}(t,e):void ee()}function eR(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${No(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(eR).join(" ,")+"}"}(t):"Filter"}class TL extends Qe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class IL extends Qe{constructor(e,n){super(e,"in",n),this.keys=tR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SL extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=tR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class CL extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return v_(n)&&Ml(n.arrayValue,this.value)}}class RL extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ml(this.value.arrayValue,n)}}class kL extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ml(this.value.arrayValue,n)}}class AL extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!v_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ml(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function BE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xL(t,e,n,r,i,s,o)}function w_(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_d(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>No(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>No(r)).join(",")),e.ue=n}return e.ue}function E_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ZC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!UE(t.startAt,e.startAt)&&UE(t.endAt,e.endAt)}function Pm(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function PL(t,e,n,r,i,s,o,a){return new Jo(t,e,n,r,i,s,o,a)}function yd(t){return new Jo(t)}function zE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nR(t){return t.collectionGroup!==null}function rl(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new vt(ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Vl(s,r))}),n.has(ut.keyField().canonicalString())||e.ce.push(new Vl(ut.keyField(),r))}return e.ce}function Qn(t){const e=ne(t);return e.le||(e.le=NL(e,rl(t))),e.le}function NL(t,e){if(t.limitType==="F")return BE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Vl(i.field,s)});const n=t.endAt?new Th(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Th(t.startAt.position,t.startAt.inclusive):null;return BE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nm(t,e){const n=t.filters.concat([e]);return new Jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ih(t,e,n){return new Jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vd(t,e){return E_(Qn(t),Qn(e))&&t.limitType===e.limitType}function rR(t){return`${w_(Qn(t))}|lt:${t.limitType}`}function Bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>eR(i)).join(", ")}]`),_d(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>No(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>No(i)).join(",")),`Target(${r})`}(Qn(t))}; limitType=${t.limitType})`}function wd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of rl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=jE(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,rl(r),i)||r.endAt&&!function(o,a,u){const c=jE(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,rl(r),i))}(t,e)}function bL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iR(t){return(e,n)=>{let r=!1;for(const i of rl(t)){const s=DL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function DL(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Po(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return GC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL=new Je(K.comparator);function Pr(){return OL}const sR=new Je(K.comparator);function Wa(...t){let e=sR;for(const n of t)e=e.insert(n.key,n);return e}function oR(t){let e=sR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ki(){return il()}function aR(){return il()}function il(){return new Zo(t=>t.toString(),(t,e)=>t.isEqual(e))}const LL=new Je(K.comparator),ML=new vt(K.comparator);function he(...t){let e=ML;for(const n of t)e=e.add(n);return e}const VL=new vt(ye);function FL(){return VL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eh(e)?"-0":e}}function lR(t){return{integerValue:""+t}}function uR(t,e){return mL(e)?lR(e):T_(t,e)}/**
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
 */class Ed{constructor(){this._=void 0}}function jL(t,e,n){return t instanceof Fl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&__(s)&&(s=y_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof bo?hR(t,e):t instanceof Do?dR(t,e):function(i,s){const o=cR(i,s),a=WE(o)+WE(i.Pe);return Am(o)&&Am(i.Pe)?lR(a):T_(i.serializer,a)}(t,e)}function UL(t,e,n){return t instanceof bo?hR(t,e):t instanceof Do?dR(t,e):n}function cR(t,e){return t instanceof jl?function(r){return Am(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Fl extends Ed{}class bo extends Ed{constructor(e){super(),this.elements=e}}function hR(t,e){const n=fR(e);for(const r of t.elements)n.some(i=>Jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Do extends Ed{constructor(e){super(),this.elements=e}}function dR(t,e){let n=fR(e);for(const r of t.elements)n=n.filter(i=>!Jn(i,r));return{arrayValue:{values:n}}}class jl extends Ed{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function WE(t){return We(t.integerValue||t.doubleValue)}function fR(t){return v_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.field=e,this.transform=n}}function BL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof bo&&i instanceof bo||r instanceof Do&&i instanceof Do?Ao(r.elements,i.elements,Jn):r instanceof jl&&i instanceof jl?Jn(r.Pe,i.Pe):r instanceof Fl&&i instanceof Fl}(t.transform,e.transform)}class zL{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Id{}function pR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gR(t.key,Ln.none()):new du(t.key,t.data,Ln.none());{const n=t.data,r=Ht.empty();let i=new vt(ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ai(t.key,r,new on(i.toArray()),Ln.none())}}function WL(t,e,n){t instanceof du?function(i,s,o){const a=i.value.clone(),u=qE(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ai?function(i,s,o){if(!Vc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=qE(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(mR(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function sl(t,e,n,r){return t instanceof du?function(s,o,a,u){if(!Vc(s.precondition,o))return a;const c=s.value.clone(),h=HE(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ai?function(s,o,a,u){if(!Vc(s.precondition,o))return a;const c=HE(s.fieldTransforms,u,o),h=o.data;return h.setAll(mR(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Vc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function $L(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cR(r.transform,i||null);s!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,s))}return n||null}function $E(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ao(r,i,(s,o)=>BL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class du extends Id{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ai extends Id{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qE(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,UL(o,a,n[i]))}return r}function HE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jL(s,o,e))}return r}class gR extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qL extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=sl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=sl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=pR(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,(n,r)=>$E(n,r))&&Ao(this.baseMutations,e.baseMutations,(n,r)=>$E(n,r))}}class I_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return LL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new I_(e,n,r,i)}}/**
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
 */class GL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class KL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,me;function QL(t){switch(t){default:return ee();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function _R(t){if(t===void 0)return xr("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ge.OK:return M.OK;case Ge.CANCELLED:return M.CANCELLED;case Ge.UNKNOWN:return M.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return M.INTERNAL;case Ge.UNAVAILABLE:return M.UNAVAILABLE;case Ge.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ge.NOT_FOUND:return M.NOT_FOUND;case Ge.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ge.ABORTED:return M.ABORTED;case Ge.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ge.DATA_LOSS:return M.DATA_LOSS;default:return ee()}}(me=Ge||(Ge={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YL(){return new TextEncoder}/**
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
 */const XL=new ns([4294967295,4294967295],0);function GE(t){const e=YL().encode(t),n=new jC;return n.update(e),new Uint8Array(n.digest())}function KE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ns([n,r],0),new ns([i,s],0)]}class S_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $a(`Invalid padding: ${n}`);if(r<0)throw new $a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $a(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ns.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ns.fromNumber(r)));return i.compare(XL)===1&&(i=new ns([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=GE(e),[r,i]=KE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new S_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=GE(e),[r,i]=KE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,fu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sd(te.min(),i,new Je(ye),Pr(),he())}}class fu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fu(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class yR{constructor(e,n){this.targetId=e,this.me=n}}class vR{constructor(e,n,r=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class QE{constructor(){this.fe=0,this.ge=XE(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),n=he(),r=he();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new fu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=XE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class JL{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pr(),this.qe=YE(),this.Qe=new Je(ye)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Pm(s))if(r===0){const o=new K(s.path);this.Ue(n,o,bt.newNoDocument(o,te.min()))}else Te(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ds(r).toUint8Array()}catch(u){if(u instanceof KC)return hs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new S_(o,i,s)}catch(u){return hs(u instanceof $a?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Pm(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,bt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=he();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Sd(e,n,this.Qe,this.ke,r);return this.ke=Pr(),this.qe=YE(),this.Qe=new Je(ye),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new QE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new vt(ye),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new QE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function YE(){return new Je(K.comparator)}function XE(){return new Je(K.comparator)}const ZL={asc:"ASCENDING",desc:"DESCENDING"},eM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tM={and:"AND",or:"OR"};class nM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bm(t,e){return t.useProto3Json||_d(e)?e:{value:e}}function Sh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rM(t,e){return Sh(t,e.toTimestamp())}function Yn(t){return Te(!!t),te.fromTimestamp(function(n){const r=mi(n);return new Xe(r.seconds,r.nanos)}(t))}function C_(t,e){return Dm(t,e).canonicalString()}function Dm(t,e){const n=function(i){return new Ne(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ER(t){const e=Ne.fromString(t);return Te(RR(e)),e}function Om(t,e){return C_(t.databaseId,e.path)}function sp(t,e){const n=ER(e);if(n.get(1)!==t.databaseId.projectId)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(IR(n))}function TR(t,e){return C_(t.databaseId,e)}function iM(t){const e=ER(t);return e.length===4?Ne.emptyPath():IR(e)}function Lm(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IR(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function JE(t,e,n){return{name:Om(t,e),fields:n.value.mapValue.fields}}function sM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Te(h===void 0||typeof h=="string"),ft.fromBase64String(h||"")):(Te(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ft.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?M.UNKNOWN:_R(c.code);return new $(h,c.message||"")}(o);n=new vR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sp(t,r.document.name),s=Yn(r.document.updateTime),o=r.document.createTime?Yn(r.document.createTime):te.min(),a=new Ht({mapValue:{fields:r.document.fields}}),u=bt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Fc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sp(t,r.document),s=r.readTime?Yn(r.readTime):te.min(),o=bt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Fc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sp(t,r.document),s=r.removedTargetIds||[];n=new Fc([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new KL(i,s),a=r.targetId;n=new yR(a,o)}}return n}function oM(t,e){let n;if(e instanceof du)n={update:JE(t,e.key,e.value)};else if(e instanceof gR)n={delete:Om(t,e.key)};else if(e instanceof Ai)n={update:JE(t,e.key,e.data),updateMask:mM(e.fieldMask)};else{if(!(e instanceof qL))return ee();n={verify:Om(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof bo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Do)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof jl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:rM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function aM(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Yn(i.updateTime):Yn(s);return o.isEqual(te.min())&&(o=Yn(s)),new zL(o,i.transformResults||[])}(n,e))):[]}function lM(t,e){return{documents:[TR(t,e.path)]}}function uM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=TR(t,i);const s=function(c){if(c.length!==0)return CR(jn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:zs(p.field),direction:dM(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function cM(t){let e=iM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=SR(f);return p instanceof jn&&JC(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(I){return new Vl(Ws(I.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,_d(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,_=f.values||[];return new Th(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,_=f.values||[];return new Th(_,p)}(n.endAt)),PL(e,i,o,s,a,"F",u,c)}function hM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ws(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ws(n.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ws(n.unaryFilter.field);return Qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ws(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Ws(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>SR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function dM(t){return ZL[t]}function fM(t){return eM[t]}function pM(t){return tM[t]}function zs(t){return{fieldPath:t.canonicalString()}}function Ws(t){return ut.fromServerFormat(t.fieldPath)}function CR(t){return t instanceof Qe?function(n){if(n.op==="=="){if(FE(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NAN"}};if(VE(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(FE(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NAN"}};if(VE(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(n.field),op:fM(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(i=>CR(i));return r.length===1?r[0]:{compositeFilter:{op:pM(n.op),filters:r}}}(t):ee()}function mM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r,i,s=te.min(),o=te.min(),a=ft.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e){this.ct=e}}function _M(t){const e=cM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ih(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(){this.un=new vM}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(pi.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class vM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new vt(Ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new vt(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Oo(0)}static kn(){return new Oo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(){this.changes=new Zo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class EM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&sl(r.mutation,i,on.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=Ki();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Wa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ki();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Pr();const o=il(),a=function(){return il()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ai)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),sl(h.mutation,c,h.mutation.getFieldMask(),Xe.now())):o.set(c.key,on.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new EM(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=il();let i=new Je((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||on.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||he()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=aR();h.forEach(p=>{if(!s.has(p)){const _=pR(n.get(p),r.get(p));_!==null&&f.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Ki());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,he())).next(h=>({batchId:a,changes:oR(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Wa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Wa();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(f,p){return new Jo(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,bt.newInvalidDocument(h)))});let a=Wa();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&sl(h.mutation,c,on.empty(),Xe.now()),wd(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:_M(i.bundledQuery),readTime:Yn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class SM{constructor(){this.overlays=new Je(K.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ki();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Ki(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Ki(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ki(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GL(n,r));let s=this.Ir.get(n);s===void 0&&(s=he(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class CM{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.Tr=new vt(st.Er),this.dr=new vt(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new st(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ne([])),r=new st(n,e),i=new st(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ne([])),r=new st(n,e),i=new st(n,e+1);let s=he();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new st(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ye(e.wr,n.wr)}static Ar(e,n){return ye(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new vt(st.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new vt(ye);return n.forEach(i=>{const s=new st(i,0),o=new st(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new st(new K(s),0);let a=new vt(ye);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new st(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new st(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e){this.Mr=e,this.docs=function(){return new Je(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Pr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():bt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pr();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||hL(cL(h),r)<=0||(i.has(h.key)||wd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AM(this)}getSize(e){return F.resolve(this.size)}}class AM extends wM{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e){this.persistence=e,this.Nr=new Zo(n=>w_(n),E_),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new R_,this.targetCount=0,this.kr=Oo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Oo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n){this.qr={},this.overlays={},this.Qr=new g_(0),this.Kr=!1,this.Kr=!0,this.$r=new CM,this.referenceDelegate=e(this),this.Ur=new xM(this),this.indexManager=new yM,this.remoteDocumentCache=function(i){return new kM(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new gM(n),this.Gr=new IM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new RM(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new NM(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class NM extends fL{constructor(e){super(),this.currentSequenceNumber=e}}class k_{constructor(e){this.persistence=e,this.Jr=new R_,this.Yr=null}static Zr(e){return new k_(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new A_(e,n.fromCache,r,i)}}/**
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
 */class bM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return vb()?8:pL(Ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new bM;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Pa()<=ce.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Pa()<=ce.DEBUG&&G("QueryEngine","Query:",Bs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Pa()<=ce.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(n))):F.resolve())}Yi(e,n){if(zE(n))return F.resolve(null);let r=Qn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ih(n,null,"F"),r=Qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Ih(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return zE(n)||i.isEqual(te.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Pa()<=ce.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bs(n)),this.rs(e,o,n,uL(i,-1)).next(a=>a))})}ts(e,n){let r=new vt(iR(e));return n.forEach((i,s)=>{wd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Pa()<=ce.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Bs(n)),this.Ji.getDocumentsMatchingQuery(e,n,pi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Je(ye),this._s=new Zo(s=>w_(s),E_),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function LM(t,e,n,r){return new OM(t,e,n,r)}async function kR(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=he();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function MM(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,p=f.keys();let _=F.resolve();return p.forEach(I=>{_=_.next(()=>h.getEntry(u,I)).next(R=>{const P=c.docVersions.get(I);Te(P!==null),R.version.compareTo(P)<0&&(f.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),h.addEntry(R)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=he();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function AR(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function VM(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(ft.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(f,_),function(R,P,S){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,_,h)&&a.push(n.Ur.updateTargetData(s,_))});let u=Pr(),c=he();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(FM(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(te.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function FM(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function jM(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function UM(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Mm(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hu(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function ZE(t,e,n){const r=ne(t);let i=te.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ne(u),p=f._s.get(h);return p!==void 0?F.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,Qn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:he())).next(a=>(BM(r,bL(e),a),{documents:a,Ts:s})))}function BM(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class e0{constructor(){this.activeTargetIds=FL()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zM{constructor(){this.so=new e0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new e0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fc=null;function op(){return fc===null?fc=function(){return 268435456+Math.round(2147483648*Math.random())}():fc++,"0x"+fc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class HM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=op(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(G("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw hs("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=$M[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=op();return new Promise((o,a)=>{const u=new UC;u.setWithCredentials(!0),u.listenOnce(BC.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Lc.NO_ERROR:const h=u.getResponseJson();G(xt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Lc.TIMEOUT:G(xt,`RPC '${e}' ${s} timed out`),a(new $(M.DEADLINE_EXCEEDED,"Request time out"));break;case Lc.HTTP_ERROR:const f=u.getStatus();if(G(xt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const I=function(P){const S=P.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(_.status);a(new $(I,_.message))}else a(new $(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new $(M.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{G(xt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(xt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=op(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$C(),a=WC(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");G(xt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let p=!1,_=!1;const I=new qM({Io:P=>{_?G(xt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(G(xt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),G(xt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},To:()=>f.close()}),R=(P,S,E)=>{P.listen(S,A=>{try{E(A)}catch(O){setTimeout(()=>{throw O},0)}})};return R(f,za.EventType.OPEN,()=>{_||(G(xt,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),R(f,za.EventType.CLOSE,()=>{_||(_=!0,G(xt,`RPC '${e}' stream ${i} transport closed`),I.So())}),R(f,za.EventType.ERROR,P=>{_||(_=!0,hs(xt,`RPC '${e}' stream ${i} transport errored:`,P),I.So(new $(M.UNAVAILABLE,"The operation could not be completed")))}),R(f,za.EventType.MESSAGE,P=>{var S;if(!_){const E=P.data[0];Te(!!E);const A=E,O=A.error||((S=A[0])===null||S===void 0?void 0:S.error);if(O){G(xt,`RPC '${e}' stream ${i} received error:`,O);const V=O.status;let U=function(C){const w=Ge[C];if(w!==void 0)return _R(w)}(V),T=O.message;U===void 0&&(U=M.INTERNAL,T="Unknown error status: "+V+" with message "+O.message),_=!0,I.So(new $(U,T)),f.close()}else G(xt,`RPC '${e}' stream ${i} received:`,E),I.bo(E)}}),R(a,zC.STAT_EVENT,P=>{P.stat===Cm.PROXY?G(xt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Cm.NOPROXY&&G(xt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function ap(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){return new nM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xR(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GM extends PR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=sM(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Yn(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Lm(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Pm(u)?{documents:lM(s,u)}:{query:uM(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wR(s,o.resumeToken);const c=bm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=Sh(s,o.snapshotVersion.toTimestamp());const c=bm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=hM(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Lm(this.serializer),n.removeTarget=e,this.a_(n)}}class KM extends PR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Te(!!e.streamToken),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=aM(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Lm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oM(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Dm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Dm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class YM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xr(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{As(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.L_.add(4),await pu(c),c.q_.set("Unknown"),c.L_.delete(4),await Rd(c)}(this))})}),this.q_=new YM(r,i)}}async function Rd(t){if(As(t))for(const e of t.B_)await e(!0)}async function pu(t){for(const e of t.B_)await e(!1)}function NR(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),b_(n)?N_(n):ea(n).r_()&&P_(n,e))}function x_(t,e){const n=ne(t),r=ea(n);n.N_.delete(e),r.r_()&&bR(n,e),n.N_.size===0&&(r.r_()?r.o_():As(n)&&n.q_.set("Unknown"))}function P_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ea(t).A_(e)}function bR(t,e){t.Q_.xe(e),ea(t).R_(e)}function N_(t){t.Q_=new JL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ea(t).start(),t.q_.v_()}function b_(t){return As(t)&&!ea(t).n_()&&t.N_.size>0}function As(t){return ne(t).L_.size===0}function DR(t){t.Q_=void 0}async function JM(t){t.q_.set("Online")}async function ZM(t){t.N_.forEach((e,n)=>{P_(t,e)})}async function eV(t,e){DR(t),b_(t)?(t.q_.M_(e),N_(t)):t.q_.set("Unknown")}async function tV(t,e,n){if(t.q_.set("Online"),e instanceof vR&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ch(t,r)}else if(e instanceof Fc?t.Q_.Ke(e):e instanceof yR?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await AR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(ft.EMPTY_BYTE_STRING,h.snapshotVersion)),bR(s,u);const f=new Jr(h.target,u,c,h.sequenceNumber);P_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Ch(t,r)}}async function Ch(t,e,n){if(!hu(e))throw e;t.L_.add(1),await pu(t),t.q_.set("Offline"),n||(n=()=>AR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Rd(t)})}function OR(t,e){return e().catch(n=>Ch(t,n,e))}async function kd(t){const e=ne(t),n=gi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;nV(e);)try{const i=await jM(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,rV(e,i)}catch(i){await Ch(e,i)}LR(e)&&MR(e)}function nV(t){return As(t)&&t.O_.length<10}function rV(t,e){t.O_.push(e);const n=gi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function LR(t){return As(t)&&!gi(t).n_()&&t.O_.length>0}function MR(t){gi(t).start()}async function iV(t){gi(t).p_()}async function sV(t){const e=gi(t);for(const n of t.O_)e.m_(n.mutations)}async function oV(t,e,n){const r=t.O_.shift(),i=I_.from(r,e,n);await OR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await kd(t)}async function aV(t,e){e&&gi(t).V_&&await async function(r,i){if(function(o){return QL(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();gi(r).s_(),await OR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await kd(r)}}(t,e),LR(t)&&MR(t)}async function n0(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=As(n);n.L_.add(3),await pu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Rd(n)}async function lV(t,e){const n=ne(t);e?(n.L_.delete(2),await Rd(n)):e||(n.L_.add(2),await pu(n),n.q_.set("Unknown"))}function ea(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new GM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:JM.bind(null,t),Ro:ZM.bind(null,t),mo:eV.bind(null,t),d_:tV.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),b_(t)?N_(t):t.q_.set("Unknown")):(await t.K_.stop(),DR(t))})),t.K_}function gi(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new KM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:iV.bind(null,t),mo:aV.bind(null,t),f_:sV.bind(null,t),g_:oV.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await kd(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new D_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function O_(t,e){if(xr("AsyncQueue",`${e}: ${t}`),hu(t))return new $(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Wa(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.W_=new Je(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Lo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Lo(e,n,po.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class cV{constructor(){this.queries=i0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=i0(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new $(M.ABORTED,"Firestore shutting down"))}}function i0(){return new Zo(t=>rR(t),vd)}async function L_(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new uV,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=O_(o,`Initialization of query '${Bs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&V_(n)}async function M_(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function hV(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&V_(n)}function dV(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function V_(t){t.Y_.forEach(e=>{e.next()})}var Vm,s0;(s0=Vm||(Vm={})).ea="default",s0.Cache="cache";class F_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Vm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.key=e}}class FR{constructor(e){this.key=e}}class fV{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=he(),this.mutatedKeys=he(),this.Aa=iR(e),this.Ra=new po(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new r0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),_=wd(this.query,f)?f:null,I=!!p&&this.mutatedKeys.has(p.key),R=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;p&&_?p.data.isEqual(_.data)?I!==R&&(r.track({type:3,doc:_}),P=!0):this.ga(p,_)||(r.track({type:2,doc:_}),P=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),P=!0):p&&!_&&(r.track({type:1,doc:p}),P=!0,(u||c)&&(a=!0)),P&&(_?(o=o.add(_),s=R?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(_,I){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return R(_)-R(I)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Lo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new r0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=he(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new FR(r))}),this.da.forEach(r=>{e.has(r)||n.push(new VR(r))}),n}ba(e){this.Ta=e.Ts,this.da=he();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Lo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class pV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mV{constructor(e){this.key=e,this.va=!1}}class gV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Zo(a=>rR(a),vd),this.Ma=new Map,this.xa=new Set,this.Oa=new Je(K.comparator),this.Na=new Map,this.La=new R_,this.Ba={},this.ka=new Map,this.qa=Oo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function _V(t,e,n=!0){const r=$R(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await jR(r,e,n,!0),i}async function yV(t,e){const n=$R(t);await jR(n,e,!0,!1)}async function jR(t,e,n,r){const i=await UM(t.localStore,Qn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await vV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&NR(t.remoteStore,i),a}async function vV(t,e,n,r,i){t.Ka=(f,p,_)=>async function(R,P,S,E){let A=P.view.ma(S);A.ns&&(A=await ZE(R.localStore,P.query,!1).then(({documents:T})=>P.view.ma(T,A)));const O=E&&E.targetChanges.get(P.targetId),V=E&&E.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(A,R.isPrimaryClient,O,V);return a0(R,P.targetId,U.wa),U.snapshot}(t,f,p,_);const s=await ZE(t.localStore,e,!0),o=new fV(e,s.Ts),a=o.ma(s.documents),u=fu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);a0(t,n,c.wa);const h=new pV(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function wV(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!vd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Mm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&x_(r.remoteStore,i.targetId),Fm(r,i.targetId)}).catch(cu)):(Fm(r,i.targetId),await Mm(r.localStore,i.targetId,!0))}async function EV(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),x_(n.remoteStore,r.targetId))}async function TV(t,e,n){const r=xV(t);try{const i=await function(o,a){const u=ne(o),c=Xe.now(),h=a.reduce((_,I)=>_.add(I.key),he());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let I=Pr(),R=he();return u.cs.getEntries(_,h).next(P=>{I=P,I.forEach((S,E)=>{E.isValidDocument()||(R=R.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,I)).next(P=>{f=P;const S=[];for(const E of a){const A=$L(E,f.get(E.key).overlayedDocument);A!=null&&S.push(new Ai(E.key,A,QC(A.value.mapValue),Ln.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,S,a)}).next(P=>{p=P;const S=P.applyToLocalDocumentSet(f,R);return u.documentOverlayCache.saveOverlays(_,P.batchId,S)})}).then(()=>({batchId:p.batchId,changes:oR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Je(ye)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await mu(r,i.changes),await kd(r.remoteStore)}catch(i){const s=O_(i,"Failed to persist write");n.reject(s)}}async function UR(t,e){const n=ne(t);try{const r=await VM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Te(o.va):i.removedDocuments.size>0&&(Te(o.va),o.va=!1))}),await mu(n,r,e)}catch(r){await cu(r)}}function o0(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ne(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&V_(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IV(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Je(K.comparator);o=o.insert(s,bt.newNoDocument(s,te.min()));const a=he().add(s),u=new Sd(te.min(),new Map,new Je(ye),o,a);await UR(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),j_(r)}else await Mm(r.localStore,e,!1).then(()=>Fm(r,e,n)).catch(cu)}async function SV(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await MM(n.localStore,e);zR(n,r,null),BR(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mu(n,i)}catch(i){await cu(i)}}async function CV(t,e,n){const r=ne(t);try{const i=await function(o,a){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Te(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);zR(r,e,n),BR(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mu(r,i)}catch(i){await cu(i)}}function BR(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function zR(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Fm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||WR(t,r)})}function WR(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(x_(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),j_(t))}function a0(t,e,n){for(const r of n)r instanceof VR?(t.La.addReference(r.key,e),RV(t,r)):r instanceof FR?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||WR(t,r.key)):ee()}function RV(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),j_(t))}function j_(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ne.fromString(e)),r=t.qa.next();t.Na.set(r,new mV(n)),t.Oa=t.Oa.insert(n,r),NR(t.remoteStore,new Jr(Qn(yd(n.path)),r,"TargetPurposeLimboResolution",g_.oe))}}async function mu(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=A_.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,p=>F.forEach(p.$i,_=>h.persistence.referenceDelegate.addReference(f,p.targetId,_)).next(()=>F.forEach(p.Ui,_=>h.persistence.referenceDelegate.removeReference(f,p.targetId,_)))))}catch(f){if(!hu(f))throw f;G("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const _=h.os.get(p),I=_.snapshotVersion,R=_.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(p,R)}}}(r.localStore,s))}async function kV(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await kR(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new $(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mu(n,r.hs)}}function AV(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return he().add(r.key);{let i=he();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function $R(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=UR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IV.bind(null,e),e.Ca.d_=hV.bind(null,e.eventManager),e.Ca.$a=dV.bind(null,e.eventManager),e}function xV(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CV.bind(null,e),e}class Rh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return LM(this.persistence,new DM,e.initialUser,this.serializer)}Ga(e){return new PM(k_.Zr,this.serializer)}Wa(e){return new zM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rh.provider={build:()=>new Rh};class jm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>o0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kV.bind(null,this.syncEngine),await lV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cV}()}createDatastore(e){const n=Cd(e.databaseInfo.databaseId),r=function(s){return new HM(s)}(e.databaseInfo);return function(s,o,a,u){return new QM(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new XM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>o0(this.syncEngine,n,0),function(){return t0.D()?new t0:new WM}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new gV(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);G("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await pu(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}jm.provider={build:()=>new jm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class U_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=m_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=O_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lp(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await kR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function l0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NV(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>n0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>n0(e.remoteStore,i)),t._onlineComponents=e}async function NV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await lp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;hs("Error using user provided cache. Falling back to memory cache: "+n),await lp(t,new Rh)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await lp(t,new Rh);return t._offlineComponents}async function qR(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await l0(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await l0(t,new jm))),t._onlineComponents}function bV(t){return qR(t).then(e=>e.syncEngine)}async function kh(t){const e=await qR(t),n=e.eventManager;return n.onListen=_V.bind(null,e.syncEngine),n.onUnlisten=wV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=EV.bind(null,e.syncEngine),n}function DV(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new U_({next:p=>{h.Za(),o.enqueueAndForget(()=>M_(s,f));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new $(M.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&u&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new F_(yd(a.path),h,{includeMetadataChanges:!0,_a:!0});return L_(s,f)}(await kh(t),t.asyncQueue,e,n,r)),r.promise}function OV(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new U_({next:p=>{h.Za(),o.enqueueAndForget(()=>M_(s,f)),p.fromCache&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new F_(a,h,{includeMetadataChanges:!0,_a:!0});return L_(s,f)}(await kh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function HR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t,e,n){if(!n)throw new $(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KR(t,e,n,r){if(e===!0&&r===!0)throw new $(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function c0(t){if(!K.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function h0(t){if(K.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ad(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ad(t);throw new $(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function LV(t,e){if(e<=0)throw new $(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=HR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HC;switch(r.type){case"firstParty":return new iL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=u0.get(n);r&&(G("ComponentProvider","Removing Datastore"),u0.delete(n),r.terminate())}(this),Promise.resolve()}}function QR(t,e,n,r={}){var i;const s=(t=Zt(t,xd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Pt.MOCK_USER;else{a=YS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Pt(c)}t._authCredentials=new tL(new qC(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nr(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Er extends nr{constructor(e,n,r){super(e,n,yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new K(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function _i(t,e,...n){if(t=we(t),GR("collection","path",e),t instanceof xd){const r=Ne.fromString(e,...n);return h0(r),new Er(t,null,r)}{if(!(t instanceof wt||t instanceof Er))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return h0(r),new Er(t.firestore,null,r)}}function jt(t,e,...n){if(t=we(t),arguments.length===1&&(e=m_.newId()),GR("doc","path",e),t instanceof xd){const r=Ne.fromString(e,...n);return c0(r),new wt(t,null,new K(r))}{if(!(t instanceof wt||t instanceof Er))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return c0(r),new wt(t.firestore,t instanceof Er?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new xR(this,"async_queue_retry"),this.Vu=()=>{const r=ap();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ap();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ap();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new wr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!hu(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw xr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=D_.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function p0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Nr extends xd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new f0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new f0(e),this._firestoreClient=void 0,await e}}}function YR(t,e){const n=typeof t=="object"?t:fd(),r=typeof t=="string"?t:"(default)",i=Cs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=GS("firestore");s&&QR(i,...s)}return i}function gu(t){if(t._terminated)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||MV(t),t._firestoreClient}function MV(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new _L(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,HR(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new PV(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ps(ft.fromBase64String(e))}catch(n){throw new $(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ps(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */class Nd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VV=/^__.*__$/;class FV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new du(e,this.data,n,this.fieldTransforms)}}class XR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function JR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class bd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new bd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ah(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(JR(this.Cu)&&VV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class jV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cd(e)}Qu(e,n,r,i=!1){return new bd({Cu:e,methodName:n,qu:r,path:ut.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dd(t){const e=t._freezeSettings(),n=Cd(t._databaseId);return new jV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ZR(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);q_("Data must be an object, but it was:",o,r);const a=tk(r,o);let u,c;if(s.merge)u=new on(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=Um(e,f,n);if(!o.contains(p))throw new $(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);rk(h,p)||h.push(p)}u=new on(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new FV(new Ht(a),u,c)}class Od extends xi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Od}}function ek(t,e,n){return new bd({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class B_ extends xi{_toFieldTransform(e){return new Td(e.path,new Fl)}isEqual(e){return e instanceof B_}}class z_ extends xi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=ek(this,e,!0),r=this.Ku.map(s=>xs(s,n)),i=new bo(r);return new Td(e.path,i)}isEqual(e){return e instanceof z_&&Co(this.Ku,e.Ku)}}class W_ extends xi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=ek(this,e,!0),r=this.Ku.map(s=>xs(s,n)),i=new Do(r);return new Td(e.path,i)}isEqual(e){return e instanceof W_&&Co(this.Ku,e.Ku)}}class $_ extends xi{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new jl(e.serializer,uR(e.serializer,this.$u));return new Td(e.path,n)}isEqual(e){return e instanceof $_&&this.$u===e.$u}}function UV(t,e,n,r){const i=t.Qu(1,e,n);q_("Data must be an object, but it was:",i,r);const s=[],o=Ht.empty();ks(r,(u,c)=>{const h=H_(e,u,n);c=we(c);const f=i.Nu(h);if(c instanceof Od)s.push(h);else{const p=xs(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new on(s);return new XR(o,a,i.fieldTransforms)}function BV(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Um(e,r,n)],u=[i];if(s.length%2!=0)throw new $(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Um(e,s[p])),u.push(s[p+1]);const c=[],h=Ht.empty();for(let p=a.length-1;p>=0;--p)if(!rk(c,a[p])){const _=a[p];let I=u[p];I=we(I);const R=o.Nu(_);if(I instanceof Od)c.push(_);else{const P=xs(I,R);P!=null&&(c.push(_),h.set(_,P))}}const f=new on(c);return new XR(h,f,o.fieldTransforms)}function zV(t,e,n,r=!1){return xs(n,t.Qu(r?4:3,e))}function xs(t,e){if(nk(t=we(t)))return q_("Unsupported field value:",e,t),tk(t,e);if(t instanceof xi)return function(r,i){if(!JR(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=xs(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Xe.fromDate(r);return{timestampValue:Sh(i.serializer,s)}}if(r instanceof Xe){const s=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sh(i.serializer,s)}}if(r instanceof Pd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ps)return{bytesValue:wR(i.serializer,r._byteString)};if(r instanceof wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:C_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Nd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return T_(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ad(r)}`)}(t,e)}function tk(t,e){const n={};return GC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(t,(r,i)=>{const s=xs(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function nk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Pd||t instanceof ps||t instanceof wt||t instanceof xi||t instanceof Nd)}function q_(t,e,n){if(!nk(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ad(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Um(t,e,n){if((e=we(e))instanceof _u)return e._internalPath;if(typeof e=="string")return H_(t,e);throw Ah("Field path arguments must be of type string or ",t,!1,void 0,n)}const WV=new RegExp("[~\\*/\\[\\]]");function H_(t,e,n){if(e.search(WV)>=0)throw Ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _u(...e.split("."))._internalPath}catch{throw Ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ah(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(M.INVALID_ARGUMENT,a+t+u)}function rk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $V(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ld("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $V extends ik{data(){return super.data()}}function Ld(t,e){return typeof e=="string"?H_(t,e):e instanceof _u?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class G_{}class Md extends G_{}function Mo(t,e,...n){let r=[];e instanceof G_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Vd).length,a=s.filter(u=>u instanceof yu).length;if(o>1||o>0&&a>0)throw new $(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class yu extends Md{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yu(e,n,r)}_apply(e){const n=this._parse(e);return ak(e._query,n),new nr(e.firestore,e.converter,Nm(e._query,n))}_parse(e){const n=Dd(e.firestore);return function(s,o,a,u,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){g0(f,h);const _=[];for(const I of f)_.push(m0(u,s,I));p={arrayValue:{values:_}}}else p=m0(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||g0(f,h),p=zV(a,o,f,h==="in"||h==="not-in");return Qe.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Vo(t,e,n){const r=e,i=Ld("where",t);return yu._create(i,r,n)}class Vd extends G_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)ak(o,u),o=Nm(o,u)}(e._query,n),new nr(e.firestore,e.converter,Nm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fd extends Md{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Fd(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vl(s,o)}(e._query,this._field,this._direction);return new nr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Jo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ok(t,e="asc"){const n=e,r=Ld("orderBy",t);return Fd._create(r,n)}class jd extends Md{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new jd(e,n,r)}_apply(e){return new nr(e.firestore,e.converter,Ih(e._query,this._limit,this._limitType))}}function xh(t){return LV("limit",t),jd._create("limit",t,"F")}function m0(t,e,n){if(typeof(n=we(n))=="string"){if(n==="")throw new $(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nR(e)&&n.indexOf("/")!==-1)throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!K.isDocumentKey(r))throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ME(t,new K(r))}if(n instanceof wt)return ME(t,n._key);throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ad(n)}.`)}function g0(t,e){if(!Array.isArray(t)||t.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ak(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class lk{convertValue(e,n="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ks(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>We(o.doubleValue));return new Nd(s)}convertGeoPoint(e){return new Pd(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=y_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ll(e));default:return null}}convertTimestamp(e){const n=mi(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Te(RR(r));const i=new xo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||xr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class K_ extends ik{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ld("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ol extends K_{data(e={}){return super.data(e)}}class Q_{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new no(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ol(this._firestore,this._userDataWriter,r.key,r,new no(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new ol(i._firestore,i._userDataWriter,a.doc.key,a.doc,new no(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new ol(i._firestore,i._userDataWriter,a.doc.key,a.doc,new no(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:qV(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t){t=Zt(t,wt);const e=Zt(t.firestore,Nr);return DV(gu(e),t._key).then(n=>dk(e,t,n))}class Y_ extends lk{constructor(e){super(),this.firestore=e}convertBytes(e){return new ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function Ul(t){t=Zt(t,nr);const e=Zt(t.firestore,Nr),n=gu(e),r=new Y_(e);return sk(t._query),OV(n,t._query).then(i=>new Q_(e,r,t,i))}function ck(t,e,n){t=Zt(t,wt);const r=Zt(t.firestore,Nr),i=uk(t.converter,e);return Ud(r,[ZR(Dd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ln.none())])}function ln(t,e,n,...r){t=Zt(t,wt);const i=Zt(t.firestore,Nr),s=Dd(i);let o;return o=typeof(e=we(e))=="string"||e instanceof _u?BV(s,"updateDoc",t._key,e,n,r):UV(s,"updateDoc",t._key,e),Ud(i,[o.toMutation(t._key,Ln.exists(!0))])}function X_(t,e){const n=Zt(t.firestore,Nr),r=jt(t),i=uk(t.converter,e);return Ud(n,[ZR(Dd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ln.exists(!1))]).then(()=>r)}function hk(t,...e){var n,r,i;t=we(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||p0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(p0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof wt)c=Zt(t.firestore,Nr),h=yd(t._key.path),u={next:f=>{e[o]&&e[o](dk(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Zt(t,nr);c=Zt(f.firestore,Nr),h=f._query;const p=new Y_(c);u={next:_=>{e[o]&&e[o](new Q_(c,p,f,_))},error:e[o+1],complete:e[o+2]},sk(t._query)}return function(p,_,I,R){const P=new U_(R),S=new F_(_,P,I);return p.asyncQueue.enqueueAndForget(async()=>L_(await kh(p),S)),()=>{P.Za(),p.asyncQueue.enqueueAndForget(async()=>M_(await kh(p),S))}}(gu(c),h,a,u)}function Ud(t,e){return function(r,i){const s=new wr;return r.asyncQueue.enqueueAndForget(async()=>TV(await bV(r),i,s)),s.promise}(gu(t),e)}function dk(t,e,n){const r=n.docs.get(e._key),i=new Y_(t);return new K_(t,i,e._key,r,new no(n.hasPendingWrites,n.fromCache),e.converter)}function wu(){return new B_("serverTimestamp")}function Bm(...t){return new z_("arrayUnion",t)}function zm(...t){return new W_("arrayRemove",t)}function Bi(t){return new $_("increment",t)}(function(e,n=!0){(function(i){Xo=i})(Rs),Fn(new wn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Nr(new nL(r.getProvider("auth-internal")),new oL(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Jt(NE,"4.7.3",e),Jt(NE,"4.7.3","esm2017")})();const HV=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:lk,Bytes:ps,CollectionReference:Er,DocumentReference:wt,DocumentSnapshot:K_,FieldPath:_u,FieldValue:xi,Firestore:Nr,FirestoreError:$,GeoPoint:Pd,Query:nr,QueryCompositeFilterConstraint:Vd,QueryConstraint:Md,QueryDocumentSnapshot:ol,QueryFieldFilterConstraint:yu,QueryLimitConstraint:jd,QueryOrderByConstraint:Fd,QuerySnapshot:Q_,SnapshotMetadata:no,Timestamp:Xe,VectorValue:Nd,_AutoId:m_,_ByteString:ft,_DatabaseId:xo,_DocumentKey:K,_EmptyAuthCredentialsProvider:HC,_FieldPath:ut,_cast:Zt,_logWarn:hs,_validateIsNotUsedTogether:KR,addDoc:X_,arrayRemove:zm,arrayUnion:Bm,collection:_i,connectFirestoreEmulator:QR,doc:jt,ensureFirestoreConfigured:gu,executeWrite:Ud,getDoc:vu,getDocs:Ul,getFirestore:YR,increment:Bi,limit:xh,onSnapshot:hk,orderBy:ok,query:Mo,serverTimestamp:wu,setDoc:ck,updateDoc:ln,where:Vo},Symbol.toStringTag,{value:"Module"}));var _0={};const y0="@firebase/database",v0="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fk="";function GV(t){fk=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Nl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KV(e)}}catch{}return new QV},Qi=pk("localStorage"),YV=pk("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new hd("@firebase/database"),XV=function(){let t=1;return function(){return t++}}(),mk=function(t){const e=Pb(t),n=new Rb;n.update(e);const r=n.digest();return e_.encodeByteArray(r)},Eu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Eu.apply(null,r):typeof r=="object"?e+=tt(r):e+=r,e+=" "}return e};let al=null,w0=!0;const JV=function(t,e){B(!0,"Can't turn on custom loggers persistently."),mo.logLevel=ce.VERBOSE,al=mo.log.bind(mo)},lt=function(...t){if(w0===!0&&(w0=!1,al===null&&YV.get("logging_enabled")===!0&&JV()),al){const e=Eu.apply(null,t);al(e)}},Tu=function(t){return function(...e){lt(t,...e)}},Wm=function(...t){const e="FIREBASE INTERNAL ERROR: "+Eu(...t);mo.error(e)},br=function(...t){const e=`FIREBASE FATAL ERROR: ${Eu(...t)}`;throw mo.error(e),new Error(e)},Ut=function(...t){const e="FIREBASE WARNING: "+Eu(...t);mo.warn(e)},ZV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},eF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Fo="[MIN_NAME]",ms="[MAX_NAME]",Ps=function(t,e){if(t===e)return 0;if(t===Fo||e===ms)return-1;if(e===Fo||t===ms)return 1;{const n=E0(t),r=E0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},tF=function(t,e){return t===e?0:t<e?-1:1},Na=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},J_=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=tt(e[r]),n+=":",n+=J_(t[e[r]]);return n+="}",n},gk=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _k=function(t){B(!Bd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let p=parseInt(h.substr(u,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},nF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function iF(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const sF=new RegExp("^-?(0*)\\d{1,10}$"),oF=-2147483648,aF=2147483647,E0=function(t){if(sF.test(t)){const e=Number(t);if(e>=oF&&e<=aF)return e}return null},ta=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},lF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ll=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class uF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}}class jc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}jc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="5",yk="v",vk="s",wk="r",Ek="f",Tk=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ik="ls",Sk="p",$m="ac",Ck="websocket",Rk="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ak(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===Ck)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Rk)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hF(t)&&(n.ns=t.namespace);const i=[];return pt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(){this.counters_={}}incrementCounter(e,n=1){tr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up={},cp={};function ey(t){const e=t.toString();return up[e]||(up[e]=new dF),up[e]}function fF(t,e){const n=t.toString();return cp[n]||(cp[n]=e()),cp[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ta(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="start",mF="close",gF="pLPCommand",_F="pRTLPCB",xk="id",Pk="pw",Nk="ser",yF="cb",vF="seg",wF="ts",EF="d",TF="dframe",bk=1870,Dk=30,IF=bk-Dk,SF=25e3,CF=3e4;class ro{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tu(e),this.stats_=ey(n),this.urlFn=u=>(this.appCheckToken&&(u[$m]=this.appCheckToken),Ak(n,Rk,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new pF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(CF)),eF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ty((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===T0)this.id=a,this.password=u;else if(o===mF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[T0]="t",r[Nk]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[yF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[yk]=Z_,this.transportSessionId&&(r[vk]=this.transportSessionId),this.lastSessionId&&(r[Ik]=this.lastSessionId),this.applicationId&&(r[Sk]=this.applicationId),this.appCheckToken&&(r[$m]=this.appCheckToken),typeof location<"u"&&location.hostname&&Tk.test(location.hostname)&&(r[wk]=Ek);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ro.forceAllow_=!0}static forceDisallow(){ro.forceDisallow_=!0}static isAvailable(){return ro.forceAllow_?!0:!ro.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nF()&&!rF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$S(n),i=gk(r,IF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[TF]="t",r[xk]=e,r[Pk]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ty{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=XV(),window[gF+this.uniqueCallbackIdentifier]=e,window[_F+this.uniqueCallbackIdentifier]=n,this.myIFrame=ty.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lt("frame writing exception"),a.stack&&lt(a.stack),lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xk]=this.myID,e[Pk]=this.myPW,e[Nk]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dk+r.length<=bk;){const o=this.pendingSegs.shift();r=r+"&"+vF+i+"="+o.seg+"&"+wF+i+"="+o.ts+"&"+EF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(SF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RF=16384,kF=45e3;let Ph=null;typeof MozWebSocket<"u"?Ph=MozWebSocket:typeof WebSocket<"u"&&(Ph=WebSocket);class xn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tu(this.connId),this.stats_=ey(n),this.connURL=xn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[yk]=Z_,typeof location<"u"&&location.hostname&&Tk.test(location.hostname)&&(o[wk]=Ek),n&&(o[vk]=n),r&&(o[Ik]=r),i&&(o[$m]=i),s&&(o[Sk]=s),Ak(e,Ck,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qi.set("previous_websocket_failure",!0);try{let r;yb(),this.mySock=new Ph(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ph!==null&&!xn.forceDisallow_}static previouslyFailed(){return Qi.isInMemoryStorage||Qi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Nl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gk(n,RF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xn.responsesRequiredToBeHealthy=2;xn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ro,xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xn&&xn.isAvailable();let r=n&&!xn.previouslyFailed();if(e.webSocketOnly&&(n||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xn];else{const i=this.transports_=[];for(const s of Bl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Bl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AF=6e4,xF=5e3,PF=10*1024,NF=100*1024,hp="t",I0="d",bF="s",S0="r",DF="e",C0="o",R0="a",k0="n",A0="p",OF="h";class LF{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tu("c:"+this.id+":"),this.transportManager_=new Bl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ll(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>NF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>PF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hp in e){const n=e[hp];n===R0?this.upgradeIfSecondaryHealthy_():n===S0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===C0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Na("t",e),r=Na("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:A0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:R0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:k0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Na("t",e),r=Na("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Na(hp,e);if(I0 in e){const r=e[I0];if(n===OF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===k0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bF?this.onConnectionShutdown_(r):n===S0?this.onReset_(r):n===DF?Wm("Server Error: "+r):n===C0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Z_!==r&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ll(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ll(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:A0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends Lk{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!t_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Nh}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=32,P0=768;class Ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Ie("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yi(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ie(t.pieces_,e)}function ny(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function MF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mk(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ie(e,0)}function Le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ie(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function Vt(t,e){const n=oe(t),r=oe(e);if(n===null)return e;if(n===r)return Vt(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function VF(t,e){const n=zl(t,0),r=zl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ps(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function ry(t,e){if(yi(t)!==yi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(yi(t)>yi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class FF{constructor(e,n){this.errorPrefix_=n,this.parts_=zl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=cd(this.parts_[r]);Vk(this)}}function jF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=cd(e),Vk(t)}function UF(t){const e=t.parts_.pop();t.byteLength_-=cd(e),t.parts_.length>0&&(t.byteLength_-=1)}function Vk(t){if(t.byteLength_>P0)throw new Error(t.errorPrefix_+"has a key path longer than "+P0+" bytes ("+t.byteLength_+").");if(t.parts_.length>x0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+x0+") or object contains a cycle "+zi(t))}function zi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends Lk{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new iy}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=1e3,BF=60*5*1e3,N0=30*1e3,zF=1.3,WF=3e4,$F="server_kill",b0=3;class Tr extends Ok{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Tr.nextPersistentConnectionId_++,this.log_=Tu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ba,this.maxReconnectDelay_=BF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");iy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Nh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(tt(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new qn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;Tr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tr(e,"w")){const r=So(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Cb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=N0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wm("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ba,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ba,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>WF&&(this.reconnectDelay_=ba),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new LF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ut(_+" ("+this.repoInfo_.toString()+")"),this.interrupt($F)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ut(f),u())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fh(this.interruptReasons_)&&(this.reconnectDelay_=ba,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>J_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=b0&&(this.reconnectDelay_=N0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=b0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fk.replace(/\./g,"-")]=1,t_()?e["framework.cordova"]=1:XS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Nh.getInstance().currentlyOnline();return fh(this.interruptReasons_)&&e}}Tr.nextPersistentConnectionId_=0;Tr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new le(Fo,e),i=new le(Fo,n);return this.compare(r,i)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;class Fk extends zd{static get __EMPTY_NODE(){return pc}static set __EMPTY_NODE(e){pc=e}compare(e,n){return Ps(e.name,n.name)}isDefinedOn(e){throw Ko("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(ms,pc)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,pc)}toString(){return".key"}}const go=new Fk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??Kt.EMPTY_NODE,this.right=s??Kt.EMPTY_NODE}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Kt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}at.RED=!0;at.BLACK=!1;class qF{copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,n=Kt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Kt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,at.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,at.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new mc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new mc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new mc(this.root_,null,this.comparator_,!0,e)}}Kt.EMPTY_NODE=new qF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HF(t,e){return Ps(t.name,e.name)}function sy(t,e){return Ps(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qm;function GF(t){qm=t}const jk=function(t){return typeof t=="number"?"number:"+_k(t):"string:"+t},Uk=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tr(e,".sv"),"Priority must be a string or number.")}else B(t===qm||t.isEmpty(),"priority of unexpected type.");B(t===qm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D0;class it{constructor(e,n=it.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Uk(this.priorityNode_)}static set __childrenNodeConstructor(e){D0=e}static get __childrenNodeConstructor(){return D0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new it(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:oe(e)===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:it.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=oe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||yi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,it.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jk(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_k(this.value_):e+=this.value_,this.lazyHash_=mk(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===it.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof it.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=it.VALUE_TYPE_ORDER.indexOf(n),s=it.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}it.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bk,zk;function KF(t){Bk=t}function QF(t){zk=t}class YF extends zd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ps(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(ms,new it("[PRIORITY-POST]",zk))}makePost(e,n){const r=Bk(e);return new le(n,new it("[PRIORITY-POST]",r))}toString(){return".priority"}}const Me=new YF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XF=Math.log(2);class JF{constructor(e){const n=s=>parseInt(Math.log(s)/XF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bh=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let f,p;if(h===0)return null;if(h===1)return f=t[u],p=n?n(f):f,new at(p,f.node,at.BLACK,null,null);{const _=parseInt(h/2,10)+u,I=i(u,_),R=i(_+1,c);return f=t[_],p=n?n(f):f,new at(p,f.node,at.BLACK,I,R)}},s=function(u){let c=null,h=null,f=t.length;const p=function(I,R){const P=f-I,S=f;f-=I;const E=i(P+1,S),A=t[P],O=n?n(A):A;_(new at(O,A.node,R,null,E))},_=function(I){c?(c.left=I,c=I):(h=I,c=I)};for(let I=0;I<u.count;++I){const R=u.nextBitIsOne(),P=Math.pow(2,u.count-(I+1));R?p(P,at.BLACK):(p(P,at.BLACK),p(P,at.RED))}return h},o=new JF(t.length),a=s(o);return new Kt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dp;const js={};class gr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(js&&Me,"ChildrenNode.ts has not been loaded"),dp=dp||new gr({".priority":js},{".priority":Me}),dp}get(e){const n=So(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Kt?n:null}hasIndex(e){return tr(this.indexSet_,e.toString())}addIndex(e,n){B(e!==go,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(le.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=bh(r,e.getCompare()):a=js;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new gr(h,c)}addToIndexes(e,n){const r=ph(this.indexes_,(i,s)=>{const o=So(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===js)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(le.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),bh(a,o.getCompare())}else return js;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new le(e.name,a))),u.insert(e,e.node)}});return new gr(r,this.indexSet_)}removeFromIndexes(e,n){const r=ph(this.indexes_,i=>{if(i===js)return i;{const s=n.get(e.name);return s?i.remove(new le(e.name,s)):i}});return new gr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da;class Y{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Uk(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Da||(Da=new Y(new Kt(sy),null,gr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Da}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Da:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new le(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Da:this.priorityNode_;return new Y(i,o,s)}}updateChild(e,n){const r=oe(e);if(r===null)return n;{B(oe(e)!==".priority"||yi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Me,(o,a)=>{n[o]=a.val(e),r++,s&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+jk(this.getPriority().val())+":"),this.forEachChild(Me,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":mk(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new le(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Iu?-1:0}withIndex(e){if(e===go||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===go||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Me),i=n.getIterator(Me);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===go?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ZF extends Y{constructor(){super(new Kt(sy),Y.EMPTY_NODE,gr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const Iu=new ZF;Object.defineProperties(le,{MIN:{value:new le(Fo,Y.EMPTY_NODE)},MAX:{value:new le(ms,Iu)}});Fk.__EMPTY_NODE=Y.EMPTY_NODE;it.__childrenNodeConstructor=Y;GF(Iu);QF(Iu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=!0;function Be(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new it(n,Be(e))}if(!(t instanceof Array)&&e4){const n=[];let r=!1;if(pt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Be(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new le(o,u)))}}),n.length===0)return Y.EMPTY_NODE;const s=bh(n,HF,o=>o.name,sy);if(r){const o=bh(n,Me.getCompare());return new Y(s,Be(e),new gr({".priority":o},{".priority":Me}))}else return new Y(s,Be(e),gr.Default)}else{let n=Y.EMPTY_NODE;return pt(t,(r,i)=>{if(tr(t,r)&&r.substring(0,1)!=="."){const s=Be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Be(e))}}KF(Be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4 extends zd{constructor(e){super(),this.indexPath_=e,B(!ae(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ps(e.name,n.name):s}makePost(e,n){const r=Be(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new le(n,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,Iu);return new le(ms,e)}toString(){return zl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4 extends zd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ps(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const r=Be(e);return new le(n,r)}toString(){return".value"}}const r4=new n4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t){return{type:"value",snapshotNode:t}}function jo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Wl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $l(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function i4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Wl(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(jo(n,r)):o.trackChildChange($l(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Me,(i,s)=>{n.hasChild(i)||r.trackChildChange(Wl(i,s))}),n.isLeafNode()||n.forEachChild(Me,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange($l(i,s,o))}else r.trackChildChange(jo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.indexedFilter_=new oy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ql.getStartPost_(e),this.endPost_=ql.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new le(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const s=this;return n.forEachChild(Me,(o,a)=>{s.matches(new le(o,a))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ql(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new le(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,_)=>f(_,p)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new le(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,u);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange($l(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Wl(n,f));const R=a.updateImmediateChild(n,Y.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(jo(p.name,p.node)),R.updateImmediateChild(p.name,p.node)):R}}else return r.isEmpty()?e:h&&o(c,u)>=0?(s!=null&&(s.trackChildChange(Wl(c.name,c.node)),s.trackChildChange(jo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fo}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ms}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new ay;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function o4(t){return t.loadsAllData()?new oy(t.getIndex()):t.hasLimit()?new s4(t):new ql(t)}function O0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===r4?n="$value":t.index_===go?n="$key":(B(t.index_ instanceof t4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=tt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+tt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=tt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function L0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh extends Ok{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Tu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Dh.getListenId_(e,r),a={};this.listens_[o]=a;const u=O0(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),So(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Dh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=O0(e._queryParams),r=e._path.toString(),i=new qn;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Nl(a.responseText)}catch{Ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){return{value:null,children:new Map}}function na(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=oe(e);t.children.has(r)||t.children.set(r,Oh());const i=t.children.get(r);e=Ce(e),na(i,e,n)}}function Hm(t,e){if(ae(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Me,(r,i)=>{na(t,new Ie(r),i)}),Hm(t,e)}}else if(t.children.size>0){const n=oe(e);return e=Ce(e),t.children.has(n)&&Hm(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Gm(t,e,n){t.value!==null?n(e,t.value):l4(t,(r,i)=>{const s=new Ie(e.toString()+"/"+r);Gm(i,s,n)})}function l4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=10*1e3,c4=30*1e3,h4=5*60*1e3;class d4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new u4(e);const r=M0+(c4-M0)*Math.random();ll(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;pt(e,(i,s)=>{s>0&&tr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ll(this.reportStats_.bind(this),Math.floor(Math.random()*2*h4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nn||(Nn={}));function ly(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function uy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Nn.ACK_USER_WRITE,this.source=ly()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ie(e));return new Lh(ve(),n,this.revert)}}else return B(oe(this.path)===e,"operationForChild called for unrelated child."),new Lh(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.source=e,this.path=n,this.type=Nn.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new Hl(this.source,ve()):new Hl(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Nn.OVERWRITE}operationForChild(e){return ae(this.path)?new gs(this.source,ve(),this.snap.getImmediateChild(e)):new gs(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Nn.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new Ie(e));return n.isEmpty()?null:n.value?new gs(this.source,ve(),n.value):new Uo(this.source,ve(),n)}else return B(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Uo(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function p4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(i4(o.childName,o.snapshotNode))}),Oa(t,i,"child_removed",e,r,n),Oa(t,i,"child_added",e,r,n),Oa(t,i,"child_moved",s,r,n),Oa(t,i,"child_changed",e,r,n),Oa(t,i,"value",e,r,n),i}function Oa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>g4(t,a,u)),o.forEach(a=>{const u=m4(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function m4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function g4(t,e,n){if(e.childName==null||n.childName==null)throw Ko("Should only compare child_ events.");const r=new le(e.childName,e.snapshotNode),i=new le(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e){return{eventCache:t,serverCache:e}}function ul(t,e,n,r){return Wd(new vi(e,n,r),t.serverCache)}function $k(t,e,n,r){return Wd(t.eventCache,new vi(e,n,r))}function Mh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _s(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fp;const _4=()=>(fp||(fp=new Kt(tF)),fp);class Re{constructor(e,n=_4()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return pt(e,(r,i)=>{n=n.set(new Ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(ae(e))return null;{const r=oe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:Le(new Ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=oe(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new Re(null)}}set(e,n){if(ae(e))return new Re(n,this.children);{const r=oe(e),s=(this.children.get(r)||new Re(null)).set(Ce(e),n),o=this.children.insert(r,s);return new Re(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=oe(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Re(null):new Re(this.value,s)}else return this}}get(e){if(ae(e))return this.value;{const n=oe(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(ae(e))return n;{const r=oe(e),s=(this.children.get(r)||new Re(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Re(this.value,o)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ae(e))return null;{const s=oe(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,r){if(ae(e))return this;{this.value&&r(n,this.value);const i=oe(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Le(n,i),r):new Re(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.writeTree_=e}static empty(){return new Mn(new Re(null))}}function cl(t,e,n){if(ae(e))return new Mn(new Re(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Vt(i,e);return s=s.updateChild(o,n),new Mn(t.writeTree_.set(i,s))}else{const i=new Re(n),s=t.writeTree_.setTree(e,i);return new Mn(s)}}}function Km(t,e,n){let r=t;return pt(n,(i,s)=>{r=cl(r,Le(e,i),s)}),r}function V0(t,e){if(ae(e))return Mn.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new Mn(n)}}function Qm(t,e){return Ns(t,e)!=null}function Ns(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Vt(n.path,e)):null}function F0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(r,i)=>{e.push(new le(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new le(r,i.value))}),e}function ci(t,e){if(ae(e))return t;{const n=Ns(t,e);return n!=null?new Mn(new Re(n)):new Mn(t.writeTree_.subtree(e))}}function Ym(t){return t.writeTree_.isEmpty()}function Bo(t,e){return qk(ve(),t.writeTree_,e)}function qk(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=qk(Le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Le(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t,e){return Qk(e,t)}function y4(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=cl(t.visibleWrites,e,n)),t.lastWriteId=r}function v4(t,e,n,r){B(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Km(t.visibleWrites,e,n),t.lastWriteId=r}function w4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function E4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&T4(a,r.path)?i=!1:gn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return I4(t),!0;if(r.snap)t.visibleWrites=V0(t.visibleWrites,r.path);else{const a=r.children;pt(a,u=>{t.visibleWrites=V0(t.visibleWrites,Le(r.path,u))})}return!0}else return!1}function T4(t,e){if(t.snap)return gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gn(Le(t.path,n),e))return!0;return!1}function I4(t){t.visibleWrites=Hk(t.allWrites,S4,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function S4(t){return t.visible}function Hk(t,e,n){let r=Mn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)gn(n,o)?(a=Vt(n,o),r=cl(r,a,s.snap)):gn(o,n)&&(a=Vt(o,n),r=cl(r,ve(),s.snap.getChild(a)));else if(s.children){if(gn(n,o))a=Vt(n,o),r=Km(r,a,s.children);else if(gn(o,n))if(a=Vt(o,n),ae(a))r=Km(r,ve(),s.children);else{const u=So(s.children,oe(a));if(u){const c=u.getChild(Ce(a));r=cl(r,ve(),c)}}}else throw Ko("WriteRecord should have .snap or .children")}}return r}function Gk(t,e,n,r,i){if(!r&&!i){const s=Ns(t.visibleWrites,e);if(s!=null)return s;{const o=ci(t.visibleWrites,e);if(Ym(o))return n;if(n==null&&!Qm(o,ve()))return null;{const a=n||Y.EMPTY_NODE;return Bo(o,a)}}}else{const s=ci(t.visibleWrites,e);if(!i&&Ym(s))return n;if(!i&&n==null&&!Qm(s,ve()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(gn(c.path,e)||gn(e,c.path))},a=Hk(t.allWrites,o,e),u=n||Y.EMPTY_NODE;return Bo(a,u)}}}function C4(t,e,n){let r=Y.EMPTY_NODE;const i=Ns(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Me,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ci(t.visibleWrites,e);return n.forEachChild(Me,(o,a)=>{const u=Bo(ci(s,new Ie(o)),a);r=r.updateImmediateChild(o,u)}),F0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ci(t.visibleWrites,e);return F0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function R4(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Le(e,n);if(Qm(t.visibleWrites,s))return null;{const o=ci(t.visibleWrites,s);return Ym(o)?i.getChild(n):Bo(o,i.getChild(n))}}function k4(t,e,n,r){const i=Le(e,n),s=Ns(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ci(t.visibleWrites,i);return Bo(o,r.getNode().getImmediateChild(n))}else return null}function A4(t,e){return Ns(t.visibleWrites,e)}function x4(t,e,n,r,i,s,o){let a;const u=ci(t.visibleWrites,e),c=Ns(u,ve());if(c!=null)a=c;else if(n!=null)a=Bo(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=p.getNext();for(;_&&h.length<i;)f(_,r)!==0&&h.push(_),_=p.getNext();return h}else return[]}function P4(){return{visibleWrites:Mn.empty(),allWrites:[],lastWriteId:-1}}function Vh(t,e,n,r){return Gk(t.writeTree,t.treePath,e,n,r)}function hy(t,e){return C4(t.writeTree,t.treePath,e)}function j0(t,e,n,r){return R4(t.writeTree,t.treePath,e,n,r)}function Fh(t,e){return A4(t.writeTree,Le(t.treePath,e))}function N4(t,e,n,r,i,s){return x4(t.writeTree,t.treePath,e,n,r,i,s)}function dy(t,e,n){return k4(t.writeTree,t.treePath,e,n)}function Kk(t,e){return Qk(Le(t.treePath,e),t.writeTree)}function Qk(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,$l(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Wl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,jo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,$l(r,e.snapshotNode,i.oldSnap));else throw Ko("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Yk=new D4;class fy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new vi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_s(this.viewCache_),s=N4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O4(t){return{filter:t}}function L4(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function M4(t,e,n,r,i){const s=new b4;let o,a;if(n.type===Nn.OVERWRITE){const c=n;c.source.fromUser?o=Xm(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=jh(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Nn.MERGE){const c=n;c.source.fromUser?o=F4(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Jm(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Nn.ACK_USER_WRITE){const c=n;c.revert?o=B4(t,e,c.path,r,i,s):o=j4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Nn.LISTEN_COMPLETE)o=U4(t,e,n.path,r,s);else throw Ko("Unknown operation type: "+n.type);const u=s.getChanges();return V4(e,o,u),{viewCache:o,changes:u}}function V4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Mh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Wk(Mh(e)))}}function Xk(t,e,n,r,i,s){const o=e.eventCache;if(Fh(r,n)!=null)return e;{let a,u;if(ae(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_s(e),h=c instanceof Y?c:Y.EMPTY_NODE,f=hy(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Vh(r,_s(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=oe(n);if(c===".priority"){B(yi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=j0(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ce(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const p=j0(r,n,o.getNode(),u);p!=null?f=o.getNode().getImmediateChild(c).updateChild(h,p):f=o.getNode().getImmediateChild(c)}else f=dy(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return ul(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function jh(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(ae(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),_,null)}else{const _=oe(n);if(!u.isCompleteForPath(n)&&yi(n)>1)return e;const I=Ce(n),P=u.getNode().getImmediateChild(_).updateChild(I,r);_===".priority"?c=h.updatePriority(u.getNode(),P):c=h.updateChild(u.getNode(),_,P,I,Yk,null)}const f=$k(e,c,u.isFullyInitialized()||ae(n),h.filtersNodes()),p=new fy(i,f,s);return Xk(t,f,n,i,p,a)}function Xm(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new fy(i,e,s);if(ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=ul(e,c,!0,t.filter.filtersNodes());else{const f=oe(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=ul(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Ce(n),_=a.getNode().getImmediateChild(f);let I;if(ae(p))I=r;else{const R=h.getCompleteChild(f);R!=null?ny(p)===".priority"&&R.getChild(Mk(p)).isEmpty()?I=R:I=R.updateChild(p,r):I=Y.EMPTY_NODE}if(_.equals(I))u=e;else{const R=t.filter.updateChild(a.getNode(),f,I,p,h,o);u=ul(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function U0(t,e){return t.eventCache.isCompleteForChild(e)}function F4(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=Le(n,u);U0(e,oe(h))&&(a=Xm(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=Le(n,u);U0(e,oe(h))||(a=Xm(t,a,h,c,i,s,o))}),a}function B0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Jm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ae(n)?c=r:c=new Re(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),I=B0(t,_,p);u=jh(t,u,new Ie(f),I,i,s,o,a)}}),c.children.inorderTraversal((f,p)=>{const _=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!_){const I=e.serverCache.getNode().getImmediateChild(f),R=B0(t,I,p);u=jh(t,u,new Ie(f),R,i,s,o,a)}}),u}function j4(t,e,n,r,i,s,o){if(Fh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ae(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return jh(t,e,n,u.getNode().getChild(n),i,s,a,o);if(ae(n)){let c=new Re(null);return u.getNode().forEachChild(go,(h,f)=>{c=c.set(new Ie(h),f)}),Jm(t,e,n,c,i,s,a,o)}else return e}else{let c=new Re(null);return r.foreach((h,f)=>{const p=Le(n,h);u.isCompleteForPath(p)&&(c=c.set(h,u.getNode().getChild(p)))}),Jm(t,e,n,c,i,s,a,o)}}function U4(t,e,n,r,i){const s=e.serverCache,o=$k(e,s.getNode(),s.isFullyInitialized()||ae(n),s.isFiltered());return Xk(t,o,n,r,Yk,i)}function B4(t,e,n,r,i,s){let o;if(Fh(r,n)!=null)return e;{const a=new fy(r,e,i),u=e.eventCache.getNode();let c;if(ae(n)||oe(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Vh(r,_s(e));else{const f=e.serverCache.getNode();B(f instanceof Y,"serverChildren would be complete if leaf node"),h=hy(r,f)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=oe(n);let f=dy(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,Ce(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,Y.EMPTY_NODE,Ce(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vh(r,_s(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Fh(r,ve())!=null,ul(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new oy(r.getIndex()),s=o4(r);this.processor_=O4(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),h=new vi(u,o.isFullyInitialized(),i.filtersNodes()),f=new vi(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Wd(f,h),this.eventGenerator_=new f4(this.query_)}get query(){return this.query_}}function W4(t){return t.viewCache_.serverCache.getNode()}function $4(t){return Mh(t.viewCache_)}function q4(t,e){const n=_s(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function z0(t){return t.eventRegistrations_.length===0}function H4(t,e){t.eventRegistrations_.push(e)}function W0(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function $0(t,e,n,r){e.type===Nn.MERGE&&e.source.queryId!==null&&(B(_s(t.viewCache_),"We should always have a full cache before handling merges"),B(Mh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=M4(t.processor_,i,e,n,r);return L4(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Jk(t,s.changes,s.viewCache.eventCache.getNode(),null)}function G4(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(s,o)=>{r.push(jo(s,o))}),n.isFullyInitialized()&&r.push(Wk(n.getNode())),Jk(t,r,n.getNode(),e)}function Jk(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return p4(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh;class Zk{constructor(){this.views=new Map}}function K4(t){B(!Uh,"__referenceConstructor has already been defined"),Uh=t}function Q4(){return B(Uh,"Reference.ts has not been loaded"),Uh}function Y4(t){return t.views.size===0}function py(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),$0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat($0(o,e,n,r));return s}}function eA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Vh(n,i?r:null),u=!1;a?u=!0:r instanceof Y?(a=hy(n,r),u=!1):(a=Y.EMPTY_NODE,u=!1);const c=Wd(new vi(a,u,!1),new vi(r,i,!1));return new z4(e,c)}return o}function X4(t,e,n,r,i,s){const o=eA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),H4(o,n),G4(o,n)}function J4(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=wi(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(W0(c,n,r)),z0(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(W0(u,n,r)),z0(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!wi(t)&&s.push(new(Q4())(e._repo,e._path)),{removed:s,events:o}}function tA(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hi(t,e){let n=null;for(const r of t.views.values())n=n||q4(r,e);return n}function nA(t,e){if(e._queryParams.loadsAllData())return qd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function rA(t,e){return nA(t,e)!=null}function wi(t){return qd(t)!=null}function qd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bh;function Z4(t){B(!Bh,"__referenceConstructor has already been defined"),Bh=t}function ej(){return B(Bh,"Reference.ts has not been loaded"),Bh}let tj=1;class q0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=P4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iA(t,e,n,r,i){return y4(t.pendingWriteTree_,e,n,r,i),i?ra(t,new gs(ly(),e,n)):[]}function nj(t,e,n,r){v4(t.pendingWriteTree_,e,n,r);const i=Re.fromObject(n);return ra(t,new Uo(ly(),e,i))}function Zr(t,e,n=!1){const r=w4(t.pendingWriteTree_,e);if(E4(t.pendingWriteTree_,e)){let s=new Re(null);return r.snap!=null?s=s.set(ve(),!0):pt(r.children,o=>{s=s.set(new Ie(o),!0)}),ra(t,new Lh(r.path,s,n))}else return[]}function Su(t,e,n){return ra(t,new gs(uy(),e,n))}function rj(t,e,n){const r=Re.fromObject(n);return ra(t,new Uo(uy(),e,r))}function ij(t,e){return ra(t,new Hl(uy(),e))}function sj(t,e,n){const r=gy(t,n);if(r){const i=_y(r),s=i.path,o=i.queryId,a=Vt(s,e),u=new Hl(cy(o),a);return yy(t,s,u)}else return[]}function zh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||rA(o,e))){const u=J4(o,e,n,r);Y4(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const h=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(p,_)=>wi(_));if(h&&!f){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const _=lj(p);for(let I=0;I<_.length;++I){const R=_[I],P=R.query,S=lA(t,R);t.listenProvider_.startListening(hl(P),Gl(t,P),S.hashFn,S.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(hl(e),null):c.forEach(p=>{const _=t.queryToTagMap.get(Hd(p));t.listenProvider_.stopListening(hl(p),_)}))}uj(t,c)}return a}function sA(t,e,n,r){const i=gy(t,r);if(i!=null){const s=_y(i),o=s.path,a=s.queryId,u=Vt(o,e),c=new gs(cy(a),u,n);return yy(t,o,c)}else return[]}function oj(t,e,n,r){const i=gy(t,r);if(i){const s=_y(i),o=s.path,a=s.queryId,u=Vt(o,e),c=Re.fromObject(n),h=new Uo(cy(a),u,c);return yy(t,o,h)}else return[]}function Zm(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const I=Vt(p,i);s=s||hi(_,I),o=o||wi(_)});let a=t.syncPointTree_.get(i);a?(o=o||wi(a),s=s||hi(a,ve())):(a=new Zk,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=Y.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,I)=>{const R=hi(I,ve());R&&(s=s.updateImmediateChild(_,R))}));const c=rA(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=Hd(e);B(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=cj();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const h=$d(t.pendingWriteTree_,i);let f=X4(a,e,n,h,s,u);if(!c&&!o&&!r){const p=nA(a,e);f=f.concat(hj(t,e,p))}return f}function my(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Vt(o,e),c=hi(a,u);if(c)return c});return Gk(i,e,s,n,!0)}function aj(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Vt(c,n);r=r||hi(h,f)});let i=t.syncPointTree_.get(n);i?r=r||hi(i,ve()):(i=new Zk,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new vi(r,!0,!1):null,a=$d(t.pendingWriteTree_,e._path),u=eA(i,e,a,s?o.getNode():Y.EMPTY_NODE,s);return $4(u)}function ra(t,e){return oA(e,t.syncPointTree_,null,$d(t.pendingWriteTree_,ve()))}function oA(t,e,n,r){if(ae(t.path))return aA(t,e,n,r);{const i=e.get(ve());n==null&&i!=null&&(n=hi(i,ve()));let s=[];const o=oe(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=Kk(r,o);s=s.concat(oA(a,u,c,h))}return i&&(s=s.concat(py(i,t,r,n))),s}}function aA(t,e,n,r){const i=e.get(ve());n==null&&i!=null&&(n=hi(i,ve()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=Kk(r,o),h=t.operationForChild(o);h&&(s=s.concat(aA(h,a,u,c)))}),i&&(s=s.concat(py(i,t,r,n))),s}function lA(t,e){const n=e.query,r=Gl(t,n);return{hashFn:()=>(W4(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?sj(t,n._path,r):ij(t,n._path);{const s=iF(i,n);return zh(t,n,null,s)}}}}function Gl(t,e){const n=Hd(e);return t.queryToTagMap.get(n)}function Hd(t){return t._path.toString()+"$"+t._queryIdentifier}function gy(t,e){return t.tagToQueryMap.get(e)}function _y(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ie(t.substr(0,e))}}function yy(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=$d(t.pendingWriteTree_,e);return py(r,n,i,null)}function lj(t){return t.fold((e,n,r)=>{if(n&&wi(n))return[qd(n)];{let i=[];return n&&(i=tA(n)),pt(r,(s,o)=>{i=i.concat(o)}),i}})}function hl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ej())(t._repo,t._path):t}function uj(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Hd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function cj(){return tj++}function hj(t,e,n){const r=e._path,i=Gl(t,e),s=lA(t,n),o=t.listenProvider_.startListening(hl(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!wi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!ae(c)&&h&&wi(h))return[qd(h).query];{let p=[];return h&&(p=p.concat(tA(h).map(_=>_.query))),pt(f,(_,I)=>{p=p.concat(I)}),p}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(hl(h),Gl(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vy(n)}node(){return this.node_}}class wy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new wy(this.syncTree_,n)}node(){return my(this.syncTree_,this.path_)}}const dj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},H0=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return pj(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},pj=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},uA=function(t,e,n,r){return Ey(e,new wy(n,t),r)},cA=function(t,e,n){return Ey(t,new vy(e),n)};function Ey(t,e,n){const r=t.getPriority().val(),i=H0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=H0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new it(a,Be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new it(i))),o.forEachChild(Me,(a,u)=>{const c=Ey(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Iy(t,e){let n=e instanceof Ie?e:new Ie(e),r=t,i=oe(n);for(;i!==null;){const s=So(r.node.children,i)||{children:{},childCount:0};r=new Ty(i,r,s),n=Ce(n),i=oe(n)}return r}function ia(t){return t.node.value}function hA(t,e){t.node.value=e,eg(t)}function dA(t){return t.node.childCount>0}function mj(t){return ia(t)===void 0&&!dA(t)}function Gd(t,e){pt(t.node.children,(n,r)=>{e(new Ty(n,t,r))})}function fA(t,e,n,r){n&&e(t),Gd(t,i=>{fA(i,e,!0)})}function gj(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Cu(t){return new Ie(t.parent===null?t.name:Cu(t.parent)+"/"+t.name)}function eg(t){t.parent!==null&&_j(t.parent,t.name,t)}function _j(t,e,n){const r=mj(n),i=tr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,eg(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,eg(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yj=/[\[\].#$\/\u0000-\u001F\u007F]/,vj=/[\[\].#$\u0000-\u001F\u007F]/,pp=10*1024*1024,Sy=function(t){return typeof t=="string"&&t.length!==0&&!yj.test(t)},pA=function(t){return typeof t=="string"&&t.length!==0&&!vj.test(t)},wj=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pA(t)},mA=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Bd(t)||t&&typeof t=="object"&&tr(t,".sv")},Wh=function(t,e,n,r){r&&e===void 0||Kd(Ro(t,"value"),e,n)},Kd=function(t,e,n){const r=n instanceof Ie?new FF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zi(r));if(typeof e=="function")throw new Error(t+"contains a function "+zi(r)+" with contents = "+e.toString());if(Bd(e))throw new Error(t+"contains "+e.toString()+" "+zi(r));if(typeof e=="string"&&e.length>pp/3&&cd(e)>pp)throw new Error(t+"contains a string greater than "+pp+" utf8 bytes "+zi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(pt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Sy(o)))throw new Error(t+" contains an invalid key ("+o+") "+zi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jF(r,o),Kd(t,a,r),UF(r)}),i&&s)throw new Error(t+' contains ".value" child '+zi(r)+" in addition to actual children.")}},Ej=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=zl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Sy(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(VF);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&gn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},gA=function(t,e,n,r){const i=Ro(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];pt(e,(o,a)=>{const u=new Ie(o);if(Kd(i,a,Le(n,u)),ny(u)===".priority"&&!mA(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),Ej(i,s)},Tj=function(t,e,n){if(Bd(e))throw new Error(Ro(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!mA(e))throw new Error(Ro(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},_A=function(t,e,n,r){if(!pA(n))throw new Error(Ro(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ij=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_A(t,e,n)},Yi=function(t,e){if(oe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Sj=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wj(n))throw new Error(Ro(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ry(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function yA(t,e,n){Qd(t,n),vA(t,r=>ry(r,e))}function Tn(t,e,n){Qd(t,n),vA(t,r=>gn(r,e)||gn(e,r))}function vA(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Rj(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Rj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();al&&lt("event: "+n.toString()),ta(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kj="repo_interrupt",Aj=25;class xj{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Cj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oh(),this.transactionQueueTree_=new Ty,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Pj(t,e,n){if(t.stats_=ey(t.repoInfo_),t.forceRestClient_||lF())t.server_=new Dh(t.repoInfo_,(r,i,s,o)=>{G0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>K0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Tr(t.repoInfo_,e,(r,i,s,o)=>{G0(t,r,i,s,o)},r=>{K0(t,r)},r=>{Nj(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=fF(t.repoInfo_,()=>new d4(t.stats_,t.server_)),t.infoData_=new a4,t.infoSyncTree_=new q0({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Su(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cy(t,"connected",!1),t.serverSyncTree_=new q0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);Tn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function wA(t){const n=t.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yd(t){return dj({timestamp:wA(t)})}function G0(t,e,n,r,i){t.dataUpdateCount++;const s=new Ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=ph(n,c=>Be(c));o=oj(t.serverSyncTree_,s,u,i)}else{const u=Be(n);o=sA(t.serverSyncTree_,s,u,i)}else if(r){const u=ph(n,c=>Be(c));o=rj(t.serverSyncTree_,s,u)}else{const u=Be(n);o=Su(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=zo(t,s)),Tn(t.eventQueue_,a,o)}function K0(t,e){Cy(t,"connected",e),e===!1&&Lj(t)}function Nj(t,e){pt(e,(n,r)=>{Cy(t,n,r)})}function Cy(t,e,n){const r=new Ie("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(r,i);const s=Su(t.infoSyncTree_,r,i);Tn(t.eventQueue_,r,s)}function Ry(t){return t.nextWriteId_++}function bj(t,e,n){const r=aj(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Be(i).withIndex(e._queryParams.getIndex());Zm(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Su(t.serverSyncTree_,e._path,s);else{const a=Gl(t.serverSyncTree_,e);o=sA(t.serverSyncTree_,e._path,s,a)}return Tn(t.eventQueue_,e._path,o),zh(t.serverSyncTree_,e,n,null,!0),s},i=>(Ru(t,"get for query "+tt(e)+" failed: "+i),Promise.reject(new Error(i))))}function Dj(t,e,n,r,i){Ru(t,"set",{path:e.toString(),value:n,priority:r});const s=Yd(t),o=Be(n,r),a=my(t.serverSyncTree_,e),u=cA(o,a,s),c=Ry(t),h=iA(t.serverSyncTree_,e,u,c,!0);Qd(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(p,_)=>{const I=p==="ok";I||Ut("set at "+e+" failed: "+p);const R=Zr(t.serverSyncTree_,c,!I);Tn(t.eventQueue_,e,R),Ei(t,i,p,_)});const f=Ay(t,e);zo(t,f),Tn(t.eventQueue_,f,[])}function Oj(t,e,n,r){Ru(t,"update",{path:e.toString(),value:n});let i=!0;const s=Yd(t),o={};if(pt(n,(a,u)=>{i=!1,o[a]=uA(Le(e,a),Be(u),t.serverSyncTree_,s)}),i)lt("update() called with empty data.  Don't do anything."),Ei(t,r,"ok",void 0);else{const a=Ry(t),u=nj(t.serverSyncTree_,e,o,a);Qd(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Ut("update at "+e+" failed: "+c);const p=Zr(t.serverSyncTree_,a,!f),_=p.length>0?zo(t,e):e;Tn(t.eventQueue_,_,p),Ei(t,r,c,h)}),pt(n,c=>{const h=Ay(t,Le(e,c));zo(t,h)}),Tn(t.eventQueue_,e,[])}}function Lj(t){Ru(t,"onDisconnectEvents");const e=Yd(t),n=Oh();Gm(t.onDisconnect_,ve(),(i,s)=>{const o=uA(i,s,t.serverSyncTree_,e);na(n,i,o)});let r=[];Gm(n,ve(),(i,s)=>{r=r.concat(Su(t.serverSyncTree_,i,s));const o=Ay(t,i);zo(t,o)}),t.onDisconnect_=Oh(),Tn(t.eventQueue_,ve(),r)}function Mj(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Hm(t.onDisconnect_,e),Ei(t,n,r,i)})}function Q0(t,e,n,r){const i=Be(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&na(t.onDisconnect_,e,i),Ei(t,r,s,o)})}function Vj(t,e,n,r,i){const s=Be(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&na(t.onDisconnect_,e,s),Ei(t,i,o,a)})}function Fj(t,e,n,r){if(fh(n)){lt("onDisconnect().update() called with empty data.  Don't do anything."),Ei(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&pt(n,(o,a)=>{const u=Be(a);na(t.onDisconnect_,Le(e,o),u)}),Ei(t,r,i,s)})}function jj(t,e,n){let r;oe(e._path)===".info"?r=Zm(t.infoSyncTree_,e,n):r=Zm(t.serverSyncTree_,e,n),yA(t.eventQueue_,e._path,r)}function EA(t,e,n){let r;oe(e._path)===".info"?r=zh(t.infoSyncTree_,e,n):r=zh(t.serverSyncTree_,e,n),yA(t.eventQueue_,e._path,r)}function Uj(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kj)}function Ru(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function Ei(t,e,n,r){e&&ta(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function TA(t,e,n){return my(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function ky(t,e=t.transactionQueueTree_){if(e||Xd(t,e),ia(e)){const n=SA(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Bj(t,Cu(e),n)}else dA(e)&&Gd(e,n=>{ky(t,n)})}function Bj(t,e,n){const r=n.map(c=>c.currentWriteId),i=TA(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Vt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Ru(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Zr(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Xd(t,Iy(t.transactionQueueTree_,e)),ky(t,t.transactionQueueTree_),Tn(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)ta(f[p])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ut("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}zo(t,e)}},o)}function zo(t,e){const n=IA(t,e),r=Cu(n),i=SA(t,n);return zj(t,i,r),r}function zj(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Vt(n,u.path);let h=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,i=i.concat(Zr(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=Aj)h=!0,f="maxretry",i=i.concat(Zr(t.serverSyncTree_,u.currentWriteId,!0));else{const p=TA(t,u.path,o);u.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){Kd("transaction failed: Data returned ",_,u.path);let I=Be(_);typeof _=="object"&&_!=null&&tr(_,".priority")||(I=I.updatePriority(p.getPriority()));const P=u.currentWriteId,S=Yd(t),E=cA(I,p,S);u.currentOutputSnapshotRaw=I,u.currentOutputSnapshotResolved=E,u.currentWriteId=Ry(t),o.splice(o.indexOf(P),1),i=i.concat(iA(t.serverSyncTree_,u.path,E,u.currentWriteId,u.applyLocally)),i=i.concat(Zr(t.serverSyncTree_,P,!0))}else h=!0,f="nodata",i=i.concat(Zr(t.serverSyncTree_,u.currentWriteId,!0))}Tn(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Xd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ta(r[a]);ky(t,t.transactionQueueTree_)}function IA(t,e){let n,r=t.transactionQueueTree_;for(n=oe(e);n!==null&&ia(r)===void 0;)r=Iy(r,n),e=Ce(e),n=oe(e);return r}function SA(t,e){const n=[];return CA(t,e,n),n.sort((r,i)=>r.order-i.order),n}function CA(t,e,n){const r=ia(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Gd(e,i=>{CA(t,i,n)})}function Xd(t,e){const n=ia(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,hA(e,n.length>0?n:void 0)}Gd(e,r=>{Xd(t,r)})}function Ay(t,e){const n=Cu(IA(t,e)),r=Iy(t.transactionQueueTree_,e);return gj(r,i=>{mp(t,i)}),mp(t,r),fA(r,i=>{mp(t,i)}),n}function mp(t,e){const n=ia(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Zr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?hA(e,void 0):n.length=s+1,Tn(t.eventQueue_,Cu(e),i);for(let o=0;o<r.length;o++)ta(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wj(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $j(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const Y0=function(t,e){const n=qj(t),r=n.namespace;n.domain==="firebase.com"&&br(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&br("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ZV();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kk(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ie(n.pathString)}},qj=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=Wj(t.substring(h,f)));const p=$j(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const I=e.indexOf(".");r=e.substring(0,I).toLowerCase(),n=e.substring(I+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Hj=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=X0.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=X0.charAt(e[i]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tt(this.snapshot.exportVal())}}class Kj{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Qj{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new qn;return Mj(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Yi("OnDisconnect.remove",this._path);const e=new qn;return Q0(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Yi("OnDisconnect.set",this._path),Wh("OnDisconnect.set",e,this._path,!1);const n=new qn;return Q0(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Yi("OnDisconnect.setWithPriority",this._path),Wh("OnDisconnect.setWithPriority",e,this._path,!1),Tj("OnDisconnect.setWithPriority",n);const r=new qn;return Vj(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Yi("OnDisconnect.update",this._path),gA("OnDisconnect.update",e,this._path);const n=new qn;return Fj(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ae(this._path)?null:ny(this._path)}get ref(){return new Lr(this._repo,this._path)}get _queryIdentifier(){const e=L0(this._queryParams),n=J_(e);return n==="{}"?"default":n}get _queryObject(){return L0(this._queryParams)}isEqual(e){if(e=we(e),!(e instanceof xy))return!1;const n=this._repo===e._repo,r=ry(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+MF(this._path)}}class Lr extends xy{constructor(e,n){super(e,n,new ay,!1)}get parent(){const e=Mk(this._path);return e===null?null:new Lr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ie(e),r=Ql(this.ref,e);return new Kl(this._node.getChild(n),r,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Kl(i,Ql(this.ref,r),Me)))}hasChild(e){const n=new Ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ct(t,e){return t=we(t),t._checkNotDeleted("ref"),e!==void 0?Ql(t._root,e):t._root}function Ql(t,e){return t=we(t),oe(t._path)===null?Ij("child","path",e):_A("child","path",e),new Lr(t._repo,Le(t._path,e))}function Yj(t){return t=we(t),new Qj(t._repo,t._path)}function Xj(t,e){t=we(t),Yi("push",t._path),Wh("push",e,t._path,!0);const n=wA(t._repo),r=Hj(n),i=Ql(t,r),s=Ql(t,r);let o;return e!=null?o=sa(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Py(t){return Yi("remove",t._path),sa(t,null)}function sa(t,e){t=we(t),Yi("set",t._path),Wh("set",e,t._path,!1);const n=new qn;return Dj(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ys(t,e){gA("update",e,t._path);const n=new qn;return Oj(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Jj(t){t=we(t);const e=new RA(()=>{}),n=new Jd(e);return bj(t._repo,t,n).then(r=>new Kl(r,new Lr(t._repo,t._path),t._queryParams.getIndex()))}class Jd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Gj("value",this,new Kl(e.snapshotNode,new Lr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Kj(this,e,n):null}matches(e){return e instanceof Jd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Zj(t,e,n,r,i){const s=new RA(n,void 0),o=new Jd(s);return jj(t._repo,t,o),()=>EA(t._repo,t,o)}function Ny(t,e,n,r){return Zj(t,"value",e)}function eU(t,e,n){EA(t._repo,t,null)}K4(Lr);Z4(Lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tU="FIREBASE_DATABASE_EMULATOR_HOST",tg={};let nU=!1;function rU(t,e,n,r){t.repoInfo_=new kk(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function iU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||br("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Y0(s,i),a=o.repoInfo,u;typeof process<"u"&&_0&&(u=_0[tU]),u?(s=`http://${u}?ns=${a.namespace}`,o=Y0(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new cF(t.name,t.options,e);Sj("Invalid Firebase Database URL",o),ae(o.path)||br("Database URL must point to the root of a Firebase Database (not including a child path).");const h=oU(a,t,c,new uF(t.name,n));return new aU(h,t)}function sU(t,e){const n=tg[e];(!n||n[t.key]!==t)&&br(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Uj(t),delete n[t.key]}function oU(t,e,n,r){let i=tg[e.name];i||(i={},tg[e.name]=i);let s=i[t.toURLString()];return s&&br("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new xj(t,nU,n,r),i[t.toURLString()]=s,s}class aU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Pj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lr(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&br("Cannot call "+e+" on a deleted database.")}}function lU(t=fd(),e){const n=Cs(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=GS("database");r&&uU(n,...r)}return n}function uU(t,e,n,r={}){t=we(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&br("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&br('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new jc(jc.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:YS(r.mockUserToken,t.app.options.projectId);s=new jc(o)}rU(i,e,n,s)}/**
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
 */function cU(t){GV(Rs),Fn(new wn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return iU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Jt(y0,v0,t),Jt(y0,v0,"esm2017")}Tr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};cU();const kA="@firebase/installations",by="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=1e4,xA=`w:${by}`,PA="FIS_v2",hU="https://firebaseinstallations.googleapis.com/v1",dU=60*60*1e3,fU="installations",pU="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vs=new Ss(fU,pU,mU);function NA(t){return t instanceof er&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA({projectId:t}){return`${hU}/projects/${t}/installations`}function DA(t){return{token:t.token,requestStatus:2,expiresIn:_U(t.expiresIn),creationTime:Date.now()}}async function OA(t,e){const r=(await e.json()).error;return vs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function LA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function gU(t,{refreshToken:e}){const n=LA(t);return n.append("Authorization",yU(e)),n}async function MA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _U(t){return Number(t.replace("s","000"))}function yU(t){return`${PA} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vU({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=bA(t),i=LA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:PA,appId:t.appId,sdkVersion:xA},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await MA(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:DA(c.authToken)}}else throw await OA("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wU(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EU=/^[cdef][\w-]{21}$/,ng="";function TU(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=IU(t);return EU.test(n)?n:ng}catch{return ng}}function IU(t){return wU(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=new Map;function jA(t,e){const n=Zd(t);UA(n,e),SU(n,e)}function UA(t,e){const n=FA.get(t);if(n)for(const r of n)r(e)}function SU(t,e){const n=CU();n&&n.postMessage({key:t,fid:e}),RU()}let Xi=null;function CU(){return!Xi&&"BroadcastChannel"in self&&(Xi=new BroadcastChannel("[Firebase] FID Change"),Xi.onmessage=t=>{UA(t.data.key,t.data.fid)}),Xi}function RU(){FA.size===0&&Xi&&(Xi.close(),Xi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kU="firebase-installations-database",AU=1,ws="firebase-installations-store";let gp=null;function Dy(){return gp||(gp=dd(kU,AU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ws)}}})),gp}async function $h(t,e){const n=Zd(t),i=(await Dy()).transaction(ws,"readwrite"),s=i.objectStore(ws),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&jA(t,e.fid),e}async function BA(t){const e=Zd(t),r=(await Dy()).transaction(ws,"readwrite");await r.objectStore(ws).delete(e),await r.done}async function ef(t,e){const n=Zd(t),i=(await Dy()).transaction(ws,"readwrite"),s=i.objectStore(ws),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&jA(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy(t){let e;const n=await ef(t.appConfig,r=>{const i=xU(r),s=PU(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ng?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xU(t){const e=t||{fid:TU(),registrationStatus:0};return zA(e)}function PU(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(vs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=NU(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bU(t)}:{installationEntry:e}}async function NU(t,e){try{const n=await vU(t,e);return $h(t.appConfig,n)}catch(n){throw NA(n)&&n.customData.serverCode===409?await BA(t.appConfig):await $h(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bU(t){let e=await J0(t.appConfig);for(;e.registrationStatus===1;)await VA(100),e=await J0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Oy(t);return r||n}return e}function J0(t){return ef(t,e=>{if(!e)throw vs.create("installation-not-found");return zA(e)})}function zA(t){return DU(t)?{fid:t.fid,registrationStatus:0}:t}function DU(t){return t.registrationStatus===1&&t.registrationTime+AA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OU({appConfig:t,heartbeatServiceProvider:e},n){const r=LU(t,n),i=gU(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:xA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await MA(()=>fetch(r,a));if(u.ok){const c=await u.json();return DA(c)}else throw await OA("Generate Auth Token",u)}function LU(t,{fid:e}){return`${bA(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(t,e=!1){let n;const r=await ef(t.appConfig,s=>{if(!WA(s))throw vs.create("not-registered");const o=s.authToken;if(!e&&FU(o))return s;if(o.requestStatus===1)return n=MU(t,e),s;{if(!navigator.onLine)throw vs.create("app-offline");const a=UU(s);return n=VU(t,a),a}});return n?await n:r.authToken}async function MU(t,e){let n=await Z0(t.appConfig);for(;n.authToken.requestStatus===1;)await VA(100),n=await Z0(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ly(t,e):r}function Z0(t){return ef(t,e=>{if(!WA(e))throw vs.create("not-registered");const n=e.authToken;return BU(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function VU(t,e){try{const n=await OU(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await $h(t.appConfig,r),n}catch(n){if(NA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await BA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $h(t.appConfig,r)}throw n}}function WA(t){return t!==void 0&&t.registrationStatus===2}function FU(t){return t.requestStatus===2&&!jU(t)}function jU(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+dU}function UU(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function BU(t){return t.requestStatus===1&&t.requestTime+AA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zU(t){const e=t,{installationEntry:n,registrationPromise:r}=await Oy(e);return r?r.catch(console.error):Ly(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WU(t,e=!1){const n=t;return await $U(n),(await Ly(n,e)).token}async function $U(t){const{registrationPromise:e}=await Oy(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qU(t){if(!t||!t.options)throw _p("App Configuration");if(!t.name)throw _p("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _p(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _p(t){return vs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="installations",HU="installations-internal",GU=t=>{const e=t.getProvider("app").getImmediate(),n=qU(e),r=Cs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},KU=t=>{const e=t.getProvider("app").getImmediate(),n=Cs(e,$A).getImmediate();return{getId:()=>zU(n),getToken:i=>WU(n,i)}};function QU(){Fn(new wn($A,GU,"PUBLIC")),Fn(new wn(HU,KU,"PRIVATE"))}QU();Jt(kA,by);Jt(kA,by,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YU="/firebase-messaging-sw.js",XU="/firebase-cloud-messaging-push-scope",qA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",JU="https://fcmregistrations.googleapis.com/v1",HA="google.c.a.c_id",ZU="google.c.a.c_l",eB="google.c.a.ts",tB="google.c.a.e";var eT;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(eT||(eT={}));/**
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
 */var Yl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Yl||(Yl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function nB(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="fcm_token_details_db",rB=5,tT="fcm_token_object_Store";async function iB(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(yp))return null;let e=null;return(await dd(yp,rB,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(tT))return;const u=o.objectStore(tT),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:lr(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:lr(h.auth),p256dh:lr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:lr(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:lr(h.auth),p256dh:lr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:lr(h.vapidKey)}}}}}})).close(),await ep(yp),await ep("fcm_vapid_details_db"),await ep("undefined"),sB(e)?e:null}function sB(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oB="firebase-messaging-database",aB=1,Es="firebase-messaging-store";let vp=null;function My(){return vp||(vp=dd(oB,aB,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Es)}}})),vp}async function GA(t){const e=Fy(t),r=await(await My()).transaction(Es).objectStore(Es).get(e);if(r)return r;{const i=await iB(t.appConfig.senderId);if(i)return await Vy(t,i),i}}async function Vy(t,e){const n=Fy(t),i=(await My()).transaction(Es,"readwrite");return await i.objectStore(Es).put(e,n),await i.done,e}async function lB(t){const e=Fy(t),r=(await My()).transaction(Es,"readwrite");await r.objectStore(Es).delete(e),await r.done}function Fy({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uB={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Et=new Ss("messaging","Messaging",uB);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cB(t,e){const n=await Uy(t),r=QA(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(jy(t.appConfig),i)).json()}catch(o){throw Et.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Et.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Et.create("token-subscribe-no-token");return s.token}async function hB(t,e){const n=await Uy(t),r=QA(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${jy(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Et.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Et.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Et.create("token-update-no-token");return s.token}async function KA(t,e){const r={method:"DELETE",headers:await Uy(t)};try{const s=await(await fetch(`${jy(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Et.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Et.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function jy({projectId:t}){return`${JU}/projects/${t}/registrations`}async function Uy({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function QA({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==qA&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dB=7*24*60*60*1e3;async function fB(t){const e=await gB(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:lr(e.getKey("auth")),p256dh:lr(e.getKey("p256dh"))},r=await GA(t.firebaseDependencies);if(r){if(_B(r.subscriptionOptions,n))return Date.now()>=r.createTime+dB?mB(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await KA(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return nT(t.firebaseDependencies,n)}else return nT(t.firebaseDependencies,n)}async function pB(t){const e=await GA(t.firebaseDependencies);e&&(await KA(t.firebaseDependencies,e.token),await lB(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function mB(t,e){try{const n=await hB(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Vy(t.firebaseDependencies,r),n}catch(n){throw n}}async function nT(t,e){const r={token:await cB(t,e),createTime:Date.now(),subscriptionOptions:e};return await Vy(t,r),r.token}async function gB(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:nB(e)})}function _B(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return yB(e,t),vB(e,t),wB(e,t),e}function yB(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function vB(t,e){e.data&&(t.data=e.data)}function wB(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EB(t){return typeof t=="object"&&!!t&&HA in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TB(t){if(!t||!t.options)throw wp("App Configuration Object");if(!t.name)throw wp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw wp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function wp(t){return Et.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IB{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=TB(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t){try{t.swRegistration=await navigator.serviceWorker.register(YU,{scope:XU}),t.swRegistration.update().catch(()=>{})}catch(e){throw Et.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SB(t,e){if(!e&&!t.swRegistration&&await YA(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Et.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CB(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=qA)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t,e){if(!navigator)throw Et.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Et.create("permission-blocked");return await CB(t,e==null?void 0:e.vapidKey),await SB(t,e==null?void 0:e.serviceWorkerRegistration),fB(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RB(t,e,n){const r=kB(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[HA],message_name:n[ZU],message_time:n[eB],message_device_time:Math.floor(Date.now()/1e3)})}function kB(t){switch(t){case Yl.NOTIFICATION_CLICKED:return"notification_open";case Yl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AB(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Yl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(rT(n)):t.onMessageHandler.next(rT(n)));const r=n.data;EB(r)&&r[tB]==="1"&&await RB(t,n.messageType,r)}const iT="@firebase/messaging",sT="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xB=t=>{const e=new IB(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>AB(e,n)),e},PB=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>XA(e,r)}};function NB(){Fn(new wn("messaging",xB,"PUBLIC")),Fn(new wn("messaging-internal",PB,"PRIVATE")),Jt(iT,sT),Jt(iT,sT,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(){try{await ZS()}catch{return!1}return typeof window<"u"&&JS()&&wb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bB(t){if(!navigator)throw Et.create("only-available-in-window");return t.swRegistration||await YA(t),pB(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DB(t,e){if(!navigator)throw Et.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t=fd()){return By().then(e=>{if(!e)throw Et.create("unsupported-browser")},e=>{throw Et.create("indexed-db-unsupported")}),Cs(we(t),"messaging").getImmediate()}async function OB(t,e){return t=we(t),XA(t,e)}function LB(t){return t=we(t),bB(t)}function MB(t,e){return t=we(t),DB(t,e)}NB();const ZA=Object.freeze(Object.defineProperty({__proto__:null,deleteToken:LB,getMessaging:JA,getToken:OB,isSupported:By,onMessage:MB},Symbol.toStringTag,{value:"Module"})),VB={apiKey:"AIzaSyAbAb2YcqvSaahSV_UITjQtk8UArYSaDdY",authDomain:"dingo-new-version.firebaseapp.com",databaseURL:"https://dingo-new-version-default-rtdb.firebaseio.com",projectId:"dingo-new-version",storageBucket:"dingo-new-version.firebasestorage.app",messagingSenderId:"245470329002",appId:"1:245470329002:web:f0fae2a906e773629578d3"},FB="GG6zruC_lQSTKwuBvOudnROxxtXFMGufChhrzU7M6vQ",tf=rC(VB),ku=X2(tf),qe=YR(tf),ht=lU(tf);let Xl=null;By().then(t=>{t&&(Xl=JA(tf))}).catch(()=>{});const jB="modulepreload",UB=function(t){return"/DINGO-NEW-VERSION-/"+t},oT={},zy=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=UB(u),u in oT)return;oT[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":jB,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((p,_)=>{f.addEventListener("load",p),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};async function ex(t,e){const n=jt(qe,"users",t);(await vu(n)).exists()?await ln(n,{isOnline:!0}):await ck(n,{displayName:e.displayName||"Player",email:e.email||"",avatar:e.avatar||"🎯",color:e.color||"#00ffcc",wins:0,losses:0,total:0,winRate:0,friends:[],isOnline:!0,fcmToken:null,createdAt:wu()})}async function BB(t){const e=await vu(jt(qe,"users",t));return e.exists()?{uid:t,...e.data()}:null}async function zB(t,e){await ln(jt(qe,"users",t),e)}async function aT(t,e){try{await ln(jt(qe,"users",t),{isOnline:e,lastSeen:wu()})}catch{}}async function WB(t,e){await ln(jt(qe,"users",t),{fcmToken:e})}async function $B(t){const{collection:e,query:n,where:r,getDocs:i}=await zy(async()=>{const{collection:a,query:u,where:c,getDocs:h}=await Promise.resolve().then(()=>HV);return{collection:a,query:u,where:c,getDocs:h}},void 0),s=n(e(qe,"users"),r("displayName",">=",t),r("displayName","<=",t+""));return(await i(s)).docs.map(a=>({uid:a.id,...a.data()}))}const qB=new cr;function HB(t){return jO(ku,t)}async function GB(t,e){return(await OO(ku,t,e)).user}async function KB(t,e,n){const r=await DO(ku,t,e);return await MO(r.user,{displayName:n}),await ex(r.user.uid,{displayName:n,email:t,avatar:"🎯",color:"#00ffcc"}),r.user}async function QB(){const t=await o2(ku,qB);return await ex(t.user.uid,{displayName:t.user.displayName||"Player",email:t.user.email,avatar:"🎯",color:"#00ffcc"}),t.user}async function YB(){await UO(ku)}const tx=D.createContext(null);function rr(){return D.useContext(tx)}function XB({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(null),[s,o]=D.useState(!0),a=async u=>{if(!u)return;const c=await BB(u);i(c)};return D.useEffect(()=>{const u=HB(async h=>{n(h),h?(await a(h.uid),aT(h.uid,!0)):i(null),o(!1)}),c=()=>{e&&aT(e.uid,!1)};return window.addEventListener("beforeunload",c),()=>{u(),window.removeEventListener("beforeunload",c)}},[]),g.jsx(tx.Provider,{value:{user:e,profile:r,loading:s,refreshProfile:a},children:t})}function JB(){const[t,e]=D.useState([]);return D.useEffect(()=>{const n=r=>{const i=Date.now();e(s=>[...s,{id:i,...r.detail}]),setTimeout(()=>{e(s=>s.filter(o=>o.id!==i))},3500)};return window.addEventListener("dingo-toast",n),()=>window.removeEventListener("dingo-toast",n)},[]),t.length?g.jsx("div",{className:"toast-container",children:t.map(n=>g.jsx("div",{className:`toast ${n.type||"info"}`,children:g.jsxs("div",{children:[g.jsx("div",{className:"toast-title",children:n.title}),n.body&&g.jsx("div",{className:"toast-body",children:n.body})]})},n.id))}):null}let ZB=null;async function e3(t){if(!Xl)return null;try{const{getToken:e}=await zy(async()=>{const{getToken:i}=await Promise.resolve().then(()=>ZA);return{getToken:i}},void 0);if(await Notification.requestPermission()!=="granted")return null;const r=await e(Xl,{vapidKey:FB});return r&&(ZB=r,await WB(t,r)),r}catch(e){return console.warn("Notification setup failed:",e),null}}function t3(t){if(!Xl)return()=>{};zy(async()=>{const{onMessage:e}=await Promise.resolve().then(()=>ZA);return{onMessage:e}},void 0).then(({onMessage:e})=>{e(Xl,n=>{t(n)})})}function Ji(t,e,n="info"){const r=new CustomEvent("dingo-toast",{detail:{title:t,body:e,type:n}});window.dispatchEvent(r)}function n3(){const t=Zn(),[e,n]=D.useState(!1),r=[{icon:"🎯",title:"Your Board",desc:"You get a 5×5 grid of numbers 1–25 in random order. Your opponent gets a different random board."},{icon:"👆",title:"Pick a Number",desc:"Tap any number on YOUR board to mark it. You and your opponent take turns picking."},{icon:"📏",title:"Complete Lines",desc:"Get 5 numbers in a row — across, down, or diagonally — to complete a line."},{icon:"🏆",title:"Win!",desc:"First player to complete 5 full lines wins the match!"},{icon:"🤖",title:"vs Bot",desc:"Play solo against 6 AI difficulty levels from Easy to GodMode."},{icon:"⚡",title:"Multiplayer",desc:"Use Play Now for instant auto-match, or create a private room and share the code with a friend."},{icon:"🎁",title:"Lifelines",desc:"Each game you get 5 lifelines: +20s, Hint, Double Pick, 50/50, and Shield. Use them wisely!"}];return g.jsxs("div",{style:{position:"fixed",inset:0,background:"var(--bg)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px 20px",overflowY:"auto"},children:[g.jsxs("div",{style:{position:"relative",textAlign:"center",marginBottom:6},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(82px,22vw,130px)",color:"var(--ink)",lineHeight:.9,letterSpacing:-2,position:"relative",zIndex:1},children:"DiNGo"}),g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(82px,22vw,130px)",color:"var(--c1)",lineHeight:.9,letterSpacing:-2,position:"absolute",top:4,left:4,right:0,opacity:.3,zIndex:0},children:"DiNGo"})]}),g.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"var(--panel2)",border:"2px solid var(--c1)",borderRadius:"var(--r)",padding:"4px 14px",fontSize:10,letterSpacing:3,textTransform:"uppercase",fontWeight:700,color:"var(--c1)",marginBottom:24},children:[g.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",animation:"blink 1.4s infinite"}}),"LIVE MULTIPLAYER BINGO"]}),g.jsxs("p",{style:{fontSize:14,color:"var(--ink2)",maxWidth:280,lineHeight:1.7,marginBottom:28,textAlign:"center"},children:["Build ",g.jsx("strong",{style:{color:"var(--ink)"},children:"5 lines"})," before your opponent.",g.jsx("br",{}),"Every board is different. Every move counts."]}),g.jsx("div",{style:{display:"flex",border:"2px solid var(--edge2)",borderRadius:"var(--r)",overflow:"hidden",marginBottom:32,width:"100%",maxWidth:320},children:[{num:"5×5",lbl:"Grid"},{num:"6",lbl:"AI Levels"},{num:"∞",lbl:"Players"}].map((i,s)=>g.jsxs("div",{style:{flex:1,padding:"12px 0",textAlign:"center",background:"var(--panel)",borderRight:s<2?"2px solid var(--edge2)":"none"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,color:"var(--ink)"},children:i.num}),g.jsx("div",{style:{fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700},children:i.lbl})]},s))}),g.jsxs("div",{style:{width:"100%",maxWidth:320,display:"flex",flexDirection:"column",gap:10},children:[g.jsx("button",{className:"btn btn-primary btn-full",style:{fontSize:15,padding:14},onClick:()=>t("/login"),children:"🎮 Get Started"}),g.jsx("button",{className:"btn btn-ghost btn-full",style:{borderColor:"rgba(0,255,204,0.4)",color:"var(--c1)"},onClick:()=>n(!0),children:"📖 How to Play"})]}),e&&g.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"flex-end",justifyContent:"center",padding:"0 0 0 0"},onClick:()=>n(!1),children:g.jsxs("div",{style:{background:"var(--panel)",borderRadius:"20px 20px 0 0",width:"100%",maxWidth:480,border:"2px solid var(--edge2)",borderBottom:"none",maxHeight:"85vh",overflowY:"auto",position:"relative"},onClick:i=>i.stopPropagation(),children:[g.jsx("div",{style:{height:3,background:"linear-gradient(90deg,var(--c1),var(--c2),var(--c3))",borderRadius:"20px 20px 0 0"}}),g.jsxs("div",{style:{padding:"20px 20px 32px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:3},children:"HOW TO PLAY"}),g.jsx("button",{onClick:()=>n(!1),style:{background:"none",border:"2px solid var(--edge2)",color:"var(--ink2)",width:32,height:32,borderRadius:7,cursor:"pointer",fontSize:14},children:"✕"})]}),r.map((i,s)=>g.jsxs("div",{style:{display:"flex",gap:14,marginBottom:18,alignItems:"flex-start"},children:[g.jsx("div",{style:{fontSize:30,flexShrink:0,lineHeight:1},children:i.icon}),g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,fontSize:14,marginBottom:3},children:i.title}),g.jsx("div",{style:{fontSize:13,color:"var(--ink2)",lineHeight:1.55},children:i.desc})]})]},s)),g.jsx("button",{className:"btn btn-primary btn-full",style:{marginTop:8},onClick:()=>n(!1),children:"Got it! Let's Play 🎮"})]})]})})]})}function r3(){const[t,e]=D.useState("login"),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,a]=D.useState(""),[u,c]=D.useState(""),[h,f]=D.useState(!1),p=async()=>{c(""),f(!0);try{if(t==="login")await GB(n,i);else{if(!o.trim()){c("Please enter your name"),f(!1);return}await KB(n,i,o.trim())}}catch(I){c(lT(I.code))}f(!1)},_=async()=>{c(""),f(!0);try{await QB()}catch(I){c(lT(I.code))}f(!1)};return g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:20,paddingTop:40},children:[g.jsxs("div",{className:"text-center",style:{marginBottom:28},children:[g.jsx("div",{className:"hero-logo","data-text":"DiNGo",style:{fontSize:"clamp(72px,18vw,100px)"},children:"DiNGo"}),g.jsx("div",{className:"sub",style:{marginTop:6,letterSpacing:2},children:"LIVE MULTIPLAYER BINGO"})]}),g.jsx("div",{className:"card",style:{maxWidth:400},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{style:{display:"flex",gap:8,marginBottom:20},children:["login","register"].map(I=>g.jsx("button",{className:`btn ${t===I?"btn-primary":"btn-ghost"}`,style:{flex:1},onClick:()=>{e(I),c("")},children:I==="login"?"Sign In":"Sign Up"},I))}),t==="register"&&g.jsxs("div",{style:{marginBottom:14},children:[g.jsx("div",{className:"label",children:"Your Name"}),g.jsx("input",{type:"text",placeholder:"KGames",value:o,onChange:I=>a(I.target.value),maxLength:20})]}),g.jsxs("div",{style:{marginBottom:14},children:[g.jsx("div",{className:"label",children:"Email"}),g.jsx("input",{type:"email",placeholder:"you@email.com",value:n,onChange:I=>r(I.target.value)})]}),g.jsxs("div",{style:{marginBottom:18},children:[g.jsx("div",{className:"label",children:"Password"}),g.jsx("input",{type:"password",placeholder:"••••••••",value:i,onChange:I=>s(I.target.value),onKeyDown:I=>I.key==="Enter"&&p()})]}),u&&g.jsx("div",{style:{background:"rgba(255,45,85,0.12)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c2)"},children:u}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:p,disabled:h,children:h?"⏳ Please wait…":t==="login"?"🎮 Sign In":"🚀 Create Account"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,margin:"16px 0"},children:[g.jsx("div",{className:"divider",style:{flex:1}}),g.jsx("span",{className:"muted small",children:"or"}),g.jsx("div",{className:"divider",style:{flex:1}})]}),g.jsxs("button",{className:"btn btn-ghost btn-full",onClick:_,disabled:h,style:{border:"2px solid var(--edge2)"},children:[g.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",width:18,alt:""}),"Continue with Google"]})]})})]})}function lT(t){switch(t){case"auth/user-not-found":return"No account with that email.";case"auth/wrong-password":return"Wrong password. Try again.";case"auth/email-already-in-use":return"Email already in use. Try signing in.";case"auth/weak-password":return"Password must be at least 6 characters.";case"auth/invalid-email":return"Invalid email address.";case"auth/popup-closed-by-user":return"Google sign-in was cancelled.";default:return"Something went wrong. Please try again."}}function i3(){try{return new(window.AudioContext||window.webkitAudioContext)}catch{return null}}let Mi=null;function Wy(){return Mi||(Mi=i3()),(Mi==null?void 0:Mi.state)==="suspended"&&Mi.resume(),Mi}const nx={click:()=>Xn(880,.05,"square",.1),cross:()=>Xn(660,.1,"square",.15),line:()=>nf([523,659,784],.2),win:()=>rf(),lose:()=>sf(),ping:()=>Xn(1200,.05,"sine",.08)},s3={click:()=>d3(.03,80),cross:()=>Uc(800,200,.12,"sawtooth"),line:()=>nf([400,500,600],.18,"sawtooth"),win:()=>rf(1.2),lose:()=>sf(.8),ping:()=>Xn(1400,.03,"sine",.06)},o3={click:()=>Uc(300,600,.08,"sine"),cross:()=>Uc(600,100,.15,"sine"),line:()=>nf([261,329,392],.25,"sine"),win:()=>rf(.9),lose:()=>sf(.7),ping:()=>Uc(800,1200,.06,"sine")},a3={click:()=>Xn(220,.04,"sine",.2),cross:()=>Xn(330,.06,"sine",.25),line:()=>nf([261,329,392],.12,"sine"),win:()=>rf(.6),lose:()=>sf(.5),ping:()=>Xn(440,.03,"sine",.15)},l3={classic:nx,ninja:s3,space:o3,lofi:a3},u3=[{id:"classic",name:"Classic",icon:"🎮",desc:"Retro 8-bit bleeps"},{id:"ninja",name:"Ninja",icon:"🥷",desc:"Sharp sword slashes"},{id:"space",name:"Space",icon:"🌌",desc:"Sci-fi laser sounds"},{id:"lofi",name:"LoFi",icon:"🎵",desc:"Chill warm tones"}];function Wo(){const t=localStorage.getItem("sfxTheme")||"classic",e=l3[t]||nx,n=localStorage.getItem("sfxMuted")==="true";return{click:()=>!n&&e.click(),cross:()=>!n&&e.cross(),line:()=>!n&&e.line(),win:()=>!n&&e.win(),lose:()=>!n&&e.lose(),ping:()=>!n&&e.ping()}}function c3(){const t=localStorage.getItem("sfxMuted")==="true";return localStorage.setItem("sfxMuted",String(!t)),!t}function h3(){return localStorage.getItem("sfxMuted")==="true"}function Xn(t,e=.1,n="sine",r=.1){const i=Wy();if(!i)return;const s=i.createOscillator(),o=i.createGain();s.connect(o),o.connect(i.destination),s.type=n,s.frequency.value=t,o.gain.setValueAtTime(e,i.currentTime),o.gain.exponentialRampToValueAtTime(.001,i.currentTime+r),s.start(),s.stop(i.currentTime+r)}function Uc(t,e,n=.1,r="sine"){const i=Wy();if(!i)return;const s=i.createOscillator(),o=i.createGain();s.connect(o),o.connect(i.destination),s.type=r,s.frequency.setValueAtTime(t,i.currentTime),s.frequency.exponentialRampToValueAtTime(e,i.currentTime+.15),o.gain.setValueAtTime(n,i.currentTime),o.gain.exponentialRampToValueAtTime(.001,i.currentTime+.15),s.start(),s.stop(i.currentTime+.15)}function nf(t,e=.1,n="sine"){t.forEach((r,i)=>{setTimeout(()=>Xn(r,e,n,.3),i*60)})}function d3(t=.05,e=100){const n=Wy();if(!n)return;const r=n.createBuffer(1,n.sampleRate*.05,n.sampleRate),i=r.getChannelData(0);for(let u=0;u<i.length;u++)i[u]=Math.random()*2-1;const s=n.createBufferSource(),o=n.createBiquadFilter(),a=n.createGain();s.buffer=r,o.type="highpass",o.frequency.value=e,s.connect(o),o.connect(a),a.connect(n.destination),a.gain.setValueAtTime(t,n.currentTime),a.gain.exponentialRampToValueAtTime(.001,n.currentTime+.05),s.start(),s.stop(n.currentTime+.05)}function rf(t=1){[523,659,784,1047].forEach((n,r)=>{setTimeout(()=>Xn(n,.15,"square",.2/t),r*100/t)})}function sf(t=1){[400,320,250].forEach((n,r)=>{setTimeout(()=>Xn(n,.1,"sawtooth",.25/t),r*120/t)})}function f3(t,e,n){const r=ct(ht,`online/${t}`);return sa(r,{uid:t,name:e,avatar:n,ts:Date.now()}),Yj(r).remove(),()=>Py(r)}function p3(t){const e=ct(ht,"online");return Ny(e,r=>{t(r.exists()?Object.keys(r.val()||{}).length:0)})}function m3(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function g3(t,e,n,r){await sa(ct(ht,`queue/${t}`),{uid:t,name:e,avatar:n,board:r,timestamp:Date.now(),roomId:null,role:null})}function uT(t){Py(ct(ht,`queue/${t}`)).catch(()=>{})}function _3(t,e,n,r,i){const s=ct(ht,"queue"),o=Ny(s,async a=>{var _;const u=a.val();if(!u||!u[t])return;if(u[t].roomId){o(),i(u[t].roomId,u[t].role||"p2");return}const c=Object.entries(u).filter(([I,R])=>I!==t&&!R.roomId).sort((I,R)=>I[1].timestamp-R[1].timestamp);if(c.length===0)return;const[h,f]=c[0];if((((_=u[t])==null?void 0:_.timestamp)||0)<=f.timestamp){const I=m3();try{await sa(ct(ht,`rooms/${I}`),{gameState:{status:"playing",turn:"p1",p1Board:r,p2Board:f.board||[],p1Selected:[],p2Selected:[],p1Lines:0,p2Lines:0,winner:null,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{uid:t,name:e,avatar:n||"🎯",role:"p1"},p2:{uid:h,name:f.name,avatar:f.avatar||"🎯",role:"p2"}},rematch:{p1:!1,p2:!1}}),await ys(ct(ht,`queue/${t}`),{roomId:I,role:"p1"}),await ys(ct(ht,`queue/${h}`),{roomId:I,role:"p2"}),o(),i(I,"p1")}catch(R){console.error("Matchmaking error:",R)}}});return o}const un=[];for(let t=0;t<5;t++){const e=t*5;un.push([e,e+1,e+2,e+3,e+4])}for(let t=0;t<5;t++)un.push([t,t+5,t+10,t+15,t+20]);un.push([0,6,12,18,24],[4,8,12,16,20]);function Jl(){const t=Array.from({length:25},(e,n)=>n+1);for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function qa(t,e){return un.filter(n=>n.every(r=>e.includes(t[r]))).length}function y3(t,e){const n=new Set;return un.forEach(r=>{r.every(i=>e.includes(t[i]))&&r.forEach(i=>n.add(i))}),[...n]}function Au(t){return Array.from({length:25},(e,n)=>n+1).filter(e=>!t.includes(e))}function cT(t,e,n){const r=Au(t);return r[Math.floor(Math.random()*r.length)]}function v3(t,e,n){const r=Au(t),i={};return r.forEach(s=>{i[s]=0;const o=n.indexOf(s);un.forEach(a=>{if(a.includes(o)){const u=a.filter(c=>t.includes(n[c])).length;i[s]+=u*10}})}),r.reduce((s,o)=>i[o]>i[s]?o:s,r[0])}function rx(t,e,n){const r=Au(t),i={};return r.forEach(s=>{i[s]=0;const o=n.indexOf(s),a=e.indexOf(s);un.forEach(f=>{if(f.includes(o)){const p=f.filter(_=>t.includes(n[_])).length;p===4?i[s]+=2e5:p===3?i[s]+=15e3:p===2?i[s]+=1500:p===1?i[s]+=150:i[s]+=15}if(f.includes(a)){const p=f.filter(_=>t.includes(e[_])).length;p===4?i[s]+=18e4:p===3?i[s]+=3e4:p===2?i[s]+=3e3:p===1?i[s]+=300:i[s]+=30}});const u=[...t,s],c=e.map(f=>u.includes(f)?1:0);let h=0;un.forEach(f=>{f.every(p=>c[p])&&h++}),i[s]-=h*12e4}),r.reduce((s,o)=>i[o]>i[s]?o:s,r[0])}function w3(t,e,n){const r=Au(t);for(const i of un){const s=i.map(a=>n[a]),o=s.filter(a=>!t.includes(a));if(o.length===1&&r.includes(o[0])&&s.filter(a=>t.includes(a)).length===4)return o[0]}for(const i of un){const s=i.map(a=>e[a]),o=s.filter(a=>!t.includes(a));if(o.length===1&&r.includes(o[0])&&s.filter(a=>t.includes(a)).length===4)return o[0]}return rx(t,e,n)}function ix(t,e,n){const r=Au(t);for(const a of un){const u=a.map(h=>n[h]),c=u.filter(h=>!t.includes(h));if(c.length===1&&r.includes(c[0])&&u.filter(h=>t.includes(h)).length===4)return c[0]}for(const a of un){const u=a.map(h=>e[h]),c=u.filter(h=>!t.includes(h));if(c.length===1&&r.includes(c[0])&&u.filter(h=>t.includes(h)).length===4)return c[0]}function i(a){let u=0;return un.forEach(c=>{const h=c.filter(p=>a.includes(n[p])).length,f=c.filter(p=>a.includes(e[p])).length;h===5?u+=1e6:h===4?u+=5e4:h===3?u+=2e3:h===2&&(u+=200),f===5?u-=8e5:f===4?u-=4e4:f===3&&(u-=1500)}),u}let s=-1/0,o=r[0];return r.forEach(a=>{const u=[...t,a],c=i(u)-i(t),h=r.filter(_=>_!==a).slice(0,8);let f=-1/0;h.forEach(_=>{const I=[...u,_],R=i(I)-i(u);R>f&&(f=R)});const p=c-f*.85;p>s&&(s=p,o=a)}),o}function E3(t,e,n){return ix(t,e,n)}function T3(t,e,n,r){switch(t){case"easy":return cT(e);case"medium":return v3(e,n,r);case"hard":return rx(e,n,r);case"expert":return w3(e,n,r);case"nightmare":return ix(e,n,r);case"godmode":return E3(e,n,r);default:return cT(e)}}const I3=[{icon:"🤖",title:"vs Bot",sub:"6 AI levels",path:"/bot"},{icon:"⚡",title:"Create Room",sub:"Invite a friend",path:"/room/create"},{icon:"🔗",title:"Join Room",sub:"Enter room code",path:"/room/join"},{icon:"🏆",title:"Leaderboard",sub:"Top players",path:"/leaderboard"},{icon:"👥",title:"Friends",sub:"Add & challenge",path:"/friends"},{icon:"📊",title:"History",sub:"Past games",path:"/history"}];function S3(){const{user:t,profile:e}=rr(),n=Zn(),r=Wo(),[i,s]=D.useState(0),[o,a]=D.useState(!1),[u,c]=D.useState(0),h=D.useRef(null),f=D.useRef(null),p=D.useRef(null);D.useEffect(()=>{if(!t||!e)return;const R=f3(t.uid,e.displayName||"Player",e.avatar||"🎯"),P=p3(s);return()=>{R(),P()}},[t==null?void 0:t.uid,e==null?void 0:e.displayName]),D.useEffect(()=>()=>{t!=null&&t.uid&&uT(t.uid),clearInterval(f.current),h.current&&h.current()},[t==null?void 0:t.uid]);const _=async()=>{if(o){uT(t.uid),h.current&&(h.current(),h.current=null),clearInterval(f.current),a(!1),c(0);return}r.click();const R=Jl();p.current=R,a(!0),c(0),f.current=setInterval(()=>c(S=>S+1),1e3),await g3(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",R);const P=_3(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",R,(S,E)=>{clearInterval(f.current),a(!1),n(`/game/${S}`,{state:{role:E,board:R,roomData:null}})});h.current=P},I=R=>{r.click(),n(R)};return g.jsxs("div",{className:"screen",style:{paddingTop:14,paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",maxWidth:440,marginBottom:18},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:30,letterSpacing:1,lineHeight:1},children:"DiNGo"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:2},children:[g.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),g.jsxs("span",{style:{fontSize:10,color:"var(--c1)",fontWeight:700,letterSpacing:2,textTransform:"uppercase"},children:[i," Online"]})]})]}),g.jsxs("button",{onClick:()=>I("/profile"),style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:10,padding:"7px 10px",cursor:"pointer"},children:[g.jsx("span",{style:{fontSize:26},children:(e==null?void 0:e.avatar)||"🎯"}),g.jsxs("div",{style:{textAlign:"left"},children:[g.jsx("div",{style:{fontWeight:700,fontSize:12,maxWidth:90,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(e==null?void 0:e.displayName)||"Player"}),g.jsxs("div",{style:{fontSize:10,color:"var(--c1)"},children:[(e==null?void 0:e.wins)||0,"W  ·  ",(e==null?void 0:e.streak)||0,"🔥"]})]}),g.jsx("span",{style:{fontSize:11,color:"var(--ink3)",marginLeft:2},children:"✏️"})]})]}),g.jsxs("div",{style:{width:"100%",maxWidth:440,marginBottom:18},children:[g.jsx("button",{onClick:_,style:{width:"100%",padding:"15px 20px",background:o?"var(--c2)":"var(--c1)",border:"none",borderRadius:"var(--r)",fontFamily:"'Space Grotesk',sans-serif",fontWeight:800,fontSize:15,letterSpacing:1.5,textTransform:"uppercase",color:"#000",cursor:"pointer",boxShadow:o?"4px 4px 0 rgba(255,45,85,0.3)":"4px 4px 0 rgba(0,255,204,0.3)",display:"flex",alignItems:"center",justifyContent:"center",gap:10},children:o?g.jsxs(g.Fragment,{children:[g.jsx("span",{style:{display:"inline-block",animation:"spin 1s linear infinite"},children:"⏳"}),"Searching… ",u,"s — Tap to Cancel"]}):"⚡ PLAY NOW — Auto Match"}),o&&g.jsx("div",{style:{textAlign:"center",fontSize:12,color:"var(--ink2)",marginTop:7,letterSpacing:.5},children:"Finding an opponent for you…"})]}),g.jsx("div",{className:"menu-grid",children:I3.map(R=>g.jsxs("div",{className:"menu-card",onClick:()=>I(R.path),children:[g.jsx("div",{className:"menu-icon",children:R.icon}),g.jsx("div",{className:"menu-title",children:R.title}),g.jsx("div",{className:"menu-sub",children:R.sub})]},R.path))}),g.jsx("div",{style:{marginTop:18,width:"100%",maxWidth:440,display:"flex",gap:8},children:[{label:"WINS",val:(e==null?void 0:e.wins)||0,color:"var(--c1)"},{label:"LOSSES",val:(e==null?void 0:e.losses)||0,color:"var(--c2)"},{label:"STREAK",val:`${(e==null?void 0:e.streak)||0}🔥`,color:"var(--c3)"}].map(R=>g.jsxs("div",{style:{flex:1,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"10px 0",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,color:R.color},children:R.val}),g.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:2},children:R.label})]},R.label))})]})}const C3=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"],R3=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#00b4ff","#ff6a00","#00ff88","#ff00ff","#ffffff","#f5a623"];function k3(){const{user:t,profile:e,refreshProfile:n}=rr(),r=Zn(),i=Wo(),[s,o]=D.useState((e==null?void 0:e.displayName)||""),[a,u]=D.useState((e==null?void 0:e.avatar)||"🎯"),[c,h]=D.useState((e==null?void 0:e.color)||"#00ffcc"),[f,p]=D.useState(localStorage.getItem("sfxTheme")||"classic"),[_,I]=D.useState(h3()),[R,P]=D.useState(!1),[S,E]=D.useState("idle");D.useEffect(()=>{e&&(o(e.displayName||""),u(e.avatar||"🎯"),h(e.color||"#00ffcc"))},[e]);const A=async()=>{s.trim()&&(P(!0),await zB(t.uid,{displayName:s.trim(),avatar:a,color:c}),await n(t.uid),i.click(),P(!1))},O=T=>{setSfxTheme(T),p(T),setTimeout(()=>Wo().click(),50)},V=()=>{const T=c3();I(T)},U=async()=>{E("requesting");const T=await e3(t.uid);E(T?"granted":"denied")};return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"PROFILE"})]}),g.jsx("div",{style:{fontSize:64,marginBottom:8,textAlign:"center"},children:a}),g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,textAlign:"center",marginBottom:4},children:s||"Player"}),g.jsx("div",{className:"muted small text-center",style:{marginBottom:20},children:t==null?void 0:t.email}),g.jsx("div",{className:"card",children:g.jsxs("div",{className:"card-body",children:[g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("div",{className:"label",children:"Display Name"}),g.jsx("input",{type:"text",value:s,onChange:T=>o(T.target.value),maxLength:20,placeholder:"Your name"})]}),g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("div",{className:"label",children:"Avatar"}),g.jsx("div",{className:"avatar-grid",children:C3.map(T=>g.jsx("div",{className:`avatar-opt ${a===T?"selected":""}`,onClick:()=>{u(T),i.click()},children:T},T))})]}),g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("div",{className:"label",children:"Color"}),g.jsx("div",{className:"color-row",children:R3.map(T=>g.jsx("div",{className:`color-dot ${c===T?"selected":""}`,style:{background:T},onClick:()=>{h(T),i.click()}},T))})]}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:A,disabled:R,children:R?"Saving…":"✅ Save Profile"})]})}),g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"🔊 Sound Theme"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12},children:[g.jsx("span",{className:"muted small",children:"Volume"}),g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 14px",marginLeft:"auto"},onClick:V,children:_?"🔇 Muted":"🔊 On"})]}),g.jsx("div",{className:"sfx-grid",children:u3.map(T=>g.jsxs("div",{className:`sfx-opt ${f===T.id?"active":""}`,onClick:()=>O(T.id),children:[g.jsx("div",{className:"sfx-icon",children:T.icon}),g.jsx("div",{className:"sfx-name",children:T.name}),g.jsx("div",{className:"sfx-desc",children:T.desc})]},T.id))})]}),g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"🔔 Push Notifications"}),g.jsx("div",{className:"card",children:g.jsxs("div",{className:"card-body",children:[g.jsx("p",{className:"muted small",style:{marginBottom:12,lineHeight:1.6},children:"Get notified when a friend challenges you or your rank changes."}),g.jsx("button",{className:"btn btn-purple btn-full",onClick:U,disabled:S==="requesting"||S==="granted",children:S==="granted"?"✅ Notifications Enabled":S==="denied"?"❌ Permission Denied":S==="requesting"?"⏳ Requesting…":"🔔 Enable Notifications"})]})})]}),e&&g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"📊 Your Stats"}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[{label:"WINS",val:e.wins||0,color:"var(--c1)"},{label:"LOSSES",val:e.losses||0,color:"var(--c2)"},{label:"WIN RATE",val:`${e.winRate||0}%`,color:"var(--c3)"}].map(T=>g.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"12px 0",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,color:T.color},children:T.val}),g.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:T.label})]},T.label))})]}),g.jsx("div",{style:{width:"100%",maxWidth:440,marginTop:20,marginBottom:20},children:g.jsx("button",{className:"btn btn-ghost btn-full",style:{borderColor:"var(--c2)",color:"var(--c2)"},onClick:()=>YB(),children:"🚪 Sign Out"})})]})}function rg({board:t,selected:e,onCellClick:n,disabled:r=!1}){const i=new Set(y3(t,e));return g.jsx("div",{className:"board-wrap",children:g.jsx("div",{className:"board",children:t.map((s,o)=>{const a=e.includes(s),u=i.has(o);return g.jsx("div",{className:`cell ${a?"crossed":""} ${u?"win-line":""}`,onClick:()=>!r&&!a&&n&&n(s),style:{cursor:r||a?"default":"pointer"},children:s},s)})})})}function sx({show:t,isWin:e,title:n,sub:r,onPlayAgain:i,onHome:s,showPlayAgain:o=!0}){return g.jsx("div",{className:`win-overlay ${t?"show":""}`,children:g.jsxs("div",{className:"win-card",children:[g.jsx("div",{className:"win-emoji",children:e?"🎉":"💀"}),g.jsx("div",{className:"win-title",style:{color:e?"var(--c1)":"var(--c2)"},children:n}),g.jsx("div",{className:"win-sub",children:r}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[o&&g.jsx("button",{className:"btn btn-primary btn-full",onClick:i,children:"↺ Play Again"}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:s,children:"🏠 Home"})]})]})})}async function ox(t,e){const n=jt(qe,"users",t);try{await ln(n,{total:Bi(1),wins:Bi(e?1:0),losses:Bi(e?0:1),streak:e?Bi(1):0});const r=await vu(n);if(r.exists()){const i=r.data(),s=i.total||1,o=i.wins||0;await ln(n,{winRate:Math.round(o/s*100)})}}catch(r){console.error("recordResult error:",r)}}async function A3(){try{const t=Mo(_i(qe,"users"),ok("wins","desc"),xh(50));return(await Ul(t)).docs.map((n,r)=>({rank:r+1,uid:n.id,...n.data()}))}catch(t){return console.error("getLeaderboard error:",t),[]}}async function ax({p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a,mode:u,botLevel:c}){try{await X_(_i(qe,"matches"),{p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a||0,mode:u||"multiplayer",botLevel:c||null,timestamp:wu(),tsNum:Date.now()})}catch(h){console.error("saveMatch error:",h)}}async function x3(t){try{const[e,n]=await Promise.all([Ul(Mo(_i(qe,"matches"),Vo("p1Uid","==",t),xh(15))),Ul(Mo(_i(qe,"matches"),Vo("p2Uid","==",t),xh(15)))]),r=new Set,i=[];return[...e.docs,...n.docs].forEach(s=>{r.has(s.id)||(r.add(s.id),i.push({id:s.id,...s.data()}))}),i.sort((s,o)=>{var c,h;const a=s.tsNum||((c=s.timestamp)==null?void 0:c.seconds)*1e3||0;return(o.tsNum||((h=o.timestamp)==null?void 0:h.seconds)*1e3||0)-a}).slice(0,20)}catch(e){return console.error("getMyHistory error:",e),[]}}const La=[{id:"easy",label:"Easy",icon:"🟢",color:"var(--c1)"},{id:"medium",label:"Medium",icon:"🟡",color:"var(--c3)"},{id:"hard",label:"Hard",icon:"🔴",color:"var(--c2)"},{id:"expert",label:"Expert",icon:"🟣",color:"var(--c4)"},{id:"nightmare",label:"Nightmare",icon:"🖤",color:"#ff4444"},{id:"godmode",label:"GodMode",icon:"👑",color:"var(--c3)"}],gc={easy:"Noob-Bot",medium:"Mid-Bot",hard:"Hard-Bot",expert:"Expert-Bot",nightmare:"Nightmare",godmode:"GodMode"},_c=5,yc=20;function P3(){var Q,Z;const{user:t,profile:e}=rr(),n=Zn(),[r,i]=D.useState("select"),[s,o]=D.useState("medium"),[a,u]=D.useState([]),[c,h]=D.useState([]),[f,p]=D.useState([]),[_,I]=D.useState([]),[R,P]=D.useState(!0),[S,E]=D.useState(0),[A,O]=D.useState(0),[V,U]=D.useState(null),[T,v]=D.useState(yc),[C,w]=D.useState(!1),x=D.useRef(null),N=D.useRef(null),k=Wo(),rt=()=>{const H=Jl(),se=Jl();u(H),h(se),p([]),I([]),P(!0),E(0),O(0),U(null),i("game"),N.current=Date.now(),k.click()};D.useEffect(()=>{if(!(r!=="game"||!R||V))return v(yc),x.current=setInterval(()=>{v(H=>{if(H<=1){clearInterval(x.current);const se=a.filter(ie=>!f.includes(ie));if(se.length>0){const ie=se[Math.floor(Math.random()*se.length)];Wt(ie,!0)}return yc}return H-1})},1e3),()=>clearInterval(x.current)},[R,r,V,f]);const Wt=(H,se=!1)=>{if(!R||V)return;clearInterval(x.current),k.cross();const ie=[...f,H];p(ie);const ze=qa(a,ie);if(ze>S&&ze>0&&k.line(),E(ze),ze>=_c){It(!0,ie);return}P(!1),en(ie)},en=H=>{const se={easy:500,medium:800,hard:1e3,expert:1200,nightmare:1400,godmode:1600}[s]||800;w(!0),setTimeout(()=>{w(!1);const ie=T3(s,H,a,c);if(ie==null){P(!0);return}k.cross();const He=[...H,ie];p(He);const Ze=qa(c,He);if(Ze>A&&Ze>0&&k.line(),O(Ze),Ze>=_c){It(!1,He);return}P(!0)},se)},It=async(H,se)=>{const ie=Math.round((Date.now()-N.current)/1e3),ze=H?["Domination! 👑","You crushed it! 🔥","GG! Lethal ⚡","Champion energy! 💎"]:["Bot outsmarted you 🤖","GG, rematch? 💪","Bot.exe wins 😤"];if(U({won:H,title:H?"🎉 YOU WIN!":"🤖 BOT WINS!",sub:ze[Math.floor(Math.random()*ze.length)]}),H?k.win():k.lose(),i("over"),t){await ox(t.uid,H);const He=qa(a,se),Ze=qa(c,se);await ax({p1Uid:t.uid,p2Uid:"bot",p1Name:(e==null?void 0:e.displayName)||"Player",p2Name:gc[s],winner:H?t.uid:"bot",p1Lines:He,p2Lines:Ze,duration:ie,mode:"bot",botLevel:s})}};if(r==="select")return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🤖 VS BOT"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{className:"label",style:{marginBottom:14},children:"Choose Difficulty"}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:20},children:La.map(H=>g.jsxs("button",{className:`diff-btn ${s===H.id?"active":""}`,style:{borderColor:s===H.id?H.color:void 0,color:s===H.id?H.color:void 0},onClick:()=>{o(H.id),k.click()},children:[g.jsx("span",{style:{fontSize:20},children:H.icon}),H.label]},H.id))}),g.jsx("div",{style:{background:"var(--panel2)",borderRadius:"var(--r)",padding:12,marginBottom:20},children:La.find(H=>H.id===s)&&g.jsxs("div",{style:{textAlign:"center"},children:[g.jsx("span",{style:{fontSize:28},children:La.find(H=>H.id===s).icon}),g.jsx("div",{style:{fontWeight:700,marginTop:6},children:gc[s]}),g.jsx("div",{className:"muted small",style:{marginTop:4},children:{easy:"Random moves — good for beginners",medium:"Basic strategy — fair challenge",hard:"Aggressive blocking — tough",expert:"Win-first + blocking — very tough",nightmare:"Lookahead AI — near-unbeatable",godmode:"Maximum difficulty — can you win?"}[s]})]})}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:rt,children:"⚡ Start Game"})]})})]});const W=T/yc*100;return g.jsxs("div",{className:"screen",style:{paddingTop:10,paddingBottom:20},children:[g.jsxs("div",{style:{width:"100%",maxWidth:440,marginBottom:10,display:"flex",alignItems:"center",gap:10},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:11},onClick:()=>n("/"),children:"🏠"}),g.jsx("div",{style:{flex:1,textAlign:"center"},children:g.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:14,letterSpacing:2,color:"var(--c1)"},children:[(Q=La.find(H=>H.id===s))==null?void 0:Q.icon," ",gc[s].toUpperCase()]})}),g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18},children:[g.jsx("span",{style:{color:"var(--c1)"},children:S}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 6px"},children:"·"}),g.jsx("span",{style:{color:"var(--c2)"},children:A})]})]}),g.jsxs("div",{className:"player-row",style:{maxWidth:440,marginBottom:8},children:[g.jsx("span",{style:{fontSize:28},children:(e==null?void 0:e.avatar)||"🎯"}),g.jsxs("div",{children:[g.jsx("div",{className:"player-name",children:(e==null?void 0:e.displayName)||"You"}),g.jsxs("div",{className:"player-lines",children:[S," / ",_c," lines"]})]}),R&&!C&&g.jsx("span",{className:"turn-badge",style:{marginLeft:"auto"},children:"YOUR TURN"})]}),R&&!C&&g.jsx("div",{className:"timer-bar-wrap",style:{maxWidth:440,marginBottom:8},children:g.jsx("div",{className:"timer-bar",style:{width:`${W}%`,background:T<=5?"var(--c2)":"var(--c1)"}})}),C&&g.jsx("div",{style:{textAlign:"center",fontSize:12,color:"var(--ink2)",marginBottom:8,letterSpacing:2,textTransform:"uppercase"},children:"🤖 Bot is thinking…"}),g.jsx(rg,{board:a,selected:f,onCellClick:Wt,disabled:!R||C||!!V}),g.jsxs("div",{className:"player-row",style:{maxWidth:440,marginTop:14},children:[g.jsx("span",{style:{fontSize:28},children:(Z=La.find(H=>H.id===s))==null?void 0:Z.icon}),g.jsxs("div",{children:[g.jsx("div",{className:"player-name",children:gc[s]}),g.jsxs("div",{className:"player-lines",children:[A," / ",_c," lines"]})]}),!R&&C&&g.jsx("span",{className:"turn-badge",style:{marginLeft:"auto",background:"var(--c2)"},children:"BOT TURN"})]}),g.jsx("div",{style:{marginTop:8,opacity:.6},children:g.jsx(rg,{board:c,selected:f,disabled:!0})}),g.jsx(sx,{show:!!V,isWin:V==null?void 0:V.won,title:V==null?void 0:V.title,sub:V==null?void 0:V.sub,onPlayAgain:rt,onHome:()=>n("/")})]})}function N3(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function b3(t,e,n){await sa(ct(ht,`rooms/${t}`),{gameState:{status:"waiting",turn:"p1",p1Board:n,p2Board:[],p1Selected:[],p2Selected:[],p1Lines:0,p2Lines:0,winner:null,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{...e,role:"p1"}},rematch:{p1:!1,p2:!1}})}async function D3(t,e,n){var s;const r=await Jj(ct(ht,`rooms/${t}`));if(!r.exists())throw new Error("Room not found");const i=r.val();if((s=i.players)!=null&&s.p2)throw new Error("Room is full");return await ys(ct(ht,`rooms/${t}`),{"players/p2":{...e,role:"p2"},"gameState/p2Board":n,"gameState/status":"playing","gameState/turnStartedAt":Date.now()}),i}function lx(t,e){const n=ct(ht,`rooms/${t}`);return Ny(n,r=>e(r.val())),()=>eU(n)}async function hT(t,e,n,r,i,s=!1){const o=e==="p1"?"p2":"p1",a={[`gameState/${e}Selected`]:r,[`gameState/${e}Lines`]:i};s||(a["gameState/turn"]=o,a["gameState/turnStartedAt"]=Date.now()),await ys(ct(ht,`rooms/${t}`),a)}async function dT(t,e){await ys(ct(ht,`rooms/${t}/gameState`),{winner:e,status:"finished"})}async function O3(t,e){await Xj(ct(ht,`rooms/${t}/chat`),{...e,ts:Date.now()})}async function L3(t,e){await ys(ct(ht,`rooms/${t}/gameState`),{[`${e}Exited`]:!0})}async function M3(t,e){await ys(ct(ht,`rooms/${t}/rematch`),{[e]:!0})}async function V3(t){try{await Py(ct(ht,`rooms/${t}`))}catch{}}function F3(){const{mode:t}=VS(),{user:e,profile:n}=rr(),r=Zn(),i=Wo(),[s,o]=D.useState(""),[a,u]=D.useState(""),[c,h]=D.useState("idle"),[f,p]=D.useState(""),_=D.useState(()=>Jl())[0],I={uid:e==null?void 0:e.uid,name:(n==null?void 0:n.displayName)||"Player",avatar:(n==null?void 0:n.avatar)||"🎯"},R=async()=>{h("waiting");const E=N3();o(E),await b3(E,I,_),i.click();const A=lx(E,O=>{var V,U;(V=O==null?void 0:O.players)!=null&&V.p2&&((U=O==null?void 0:O.gameState)==null?void 0:U.status)==="playing"&&(A(),r(`/game/${E}`,{state:{role:"p1",board:_,roomData:O}})),O||(h("error"),p("Room expired."))})},P=async()=>{const E=a.trim().toUpperCase();if(E.length!==4){p("Enter a 4-character room code.");return}h("joining"),p("");try{const A=await D3(E,I,_);i.click(),r(`/game/${E}`,{state:{role:"p2",board:_,roomData:A}})}catch(A){h("idle"),p(A.message||"Could not join room. Check the code.")}},S=async()=>{s&&await V3(s),r("/")};return t==="create"?g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:S,children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"⚡ CREATE ROOM"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",style:{textAlign:"center"},children:[c==="idle"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{fontSize:48,marginBottom:16},children:"⚡"}),g.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:8},children:"Create a Private Room"}),g.jsx("div",{className:"muted small",style:{marginBottom:24},children:"Share the code with a friend. They join, you battle!"}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:R,children:"🎮 Create Room"})]}),c==="waiting"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"label",style:{marginBottom:8},children:"ROOM CODE"}),g.jsx("div",{className:"room-code-display",children:s}),g.jsx("div",{className:"room-status",children:"Share this code with your friend"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,justifyContent:"center",marginBottom:20},children:[g.jsx("div",{className:"spinner"}),g.jsx("span",{className:"muted small",children:"Waiting for opponent…"})]}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:()=>{var E;(E=navigator.clipboard)==null||E.writeText(s)},style:{marginBottom:10},children:"📋 Copy Code"}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:S,children:"Cancel"})]})]})})]}):g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🔗 JOIN ROOM"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{style:{fontSize:48,textAlign:"center",marginBottom:16},children:"🔗"}),g.jsx("div",{className:"label",children:"Room Code"}),g.jsx("input",{type:"text",placeholder:"ABCD",value:a,onChange:E=>u(E.target.value.toUpperCase().slice(0,4)),onKeyDown:E=>E.key==="Enter"&&P(),style:{textAlign:"center",fontSize:28,letterSpacing:10,fontFamily:"'Black Han Sans',sans-serif",marginBottom:16}}),f&&g.jsx("div",{style:{color:"var(--c2)",fontSize:13,marginBottom:14,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px"},children:f}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:P,disabled:c==="joining"||a.length!==4,children:c==="joining"?"⏳ Joining…":"🎮 Join Game"})]})})]})}const Us=5,Wi=30,j3=["👍","🔥","😂","😱","🎯","💀","🏆","😤","🤯","👏","😈","🫡","❤️","🫶","😎","🤑"];function fT({timeLeft:t,maxTime:e=Wi,size:n=70,active:r}){const i=(n-8)/2,s=2*Math.PI*i,o=r?Math.max(0,t/e):1,a=s*(1-o),u=t<=5?"#ff2d55":t<=10?"#ffcc00":"#00ffcc";return g.jsxs("svg",{width:n,height:n,style:{position:"absolute",top:0,left:0,pointerEvents:"none"},children:[g.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:"rgba(255,255,255,0.08)",strokeWidth:5}),r&&g.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:u,strokeWidth:5,strokeDasharray:s,strokeDashoffset:a,strokeLinecap:"round",transform:`rotate(-90 ${n/2} ${n/2})`,style:{transition:"stroke-dashoffset 1s linear, stroke 0.4s"}})]})}const pT=[{id:"time",icon:"⏰",tip:"+20 Seconds"},{id:"hint",icon:"💡",tip:"Best Move Hint"},{id:"double",icon:"2️⃣",tip:"Pick 2 Numbers"},{id:"fifty",icon:"🎯",tip:"50/50 – Show 2 Best"},{id:"shield",icon:"🛡️",tip:"Block Auto-Timeout"}];function U3(){var la,Pu;const{roomId:t}=VS(),{state:e}=ld(),{user:n,profile:r}=rr(),i=Zn(),s=Wo(),o=(e==null?void 0:e.role)||"p1",a=D.useRef((e==null?void 0:e.board)||Jl()).current,u=o==="p1"?"p2":"p1",[c,h]=D.useState(null),[f,p]=D.useState(Wi),[_,I]=D.useState(null),[R,P]=D.useState(!1),[S,E]=D.useState(!1),[A,O]=D.useState(0),[V,U]=D.useState(""),[T,v]=D.useState(""),[C,w]=D.useState({time:!0,hint:!0,double:!0,fifty:!0,shield:!0}),[x,N]=D.useState(!1),[k,rt]=D.useState(!1),[Wt,en]=D.useState([]),[It,W]=D.useState({p1:!1,p2:!1}),[Q,Z]=D.useState([]),H=D.useRef(!1),se=D.useRef(Date.now()),ie=D.useRef(null),ze=D.useRef(null),He=D.useRef({}),Ze=D.useRef(0),de=c==null?void 0:c.gameState,Mr=(de==null?void 0:de[`${o}Selected`])||[];de!=null&&de[`${u}Selected`];const Pi=(de==null?void 0:de[`${o}Lines`])||0,Ni=(de==null?void 0:de[`${u}Lines`])||0,mt=(de==null?void 0:de.turn)===o,Un=(la=c==null?void 0:c.players)==null?void 0:la[u],Bn=(Pu=c==null?void 0:c.players)==null?void 0:Pu[o];D.useEffect(()=>{const J=lx(t,re=>{if(h(re),!re)return;if(re.rematch&&W(re.rematch),re.chat){const pe=Object.values(re.chat).sort((St,tn)=>(St.ts||0)-(tn.ts||0));Z(pe.slice(-40));const fe=pe[pe.length-1];fe&&(fe.ts||0)>Ze.current&&(Ze.current=fe.ts||0,Date.now()-fe.ts<8e3&&(fe.sender===o?(U(fe.text),clearTimeout(He.current.my),He.current.my=setTimeout(()=>U(""),4e3)):(v(fe.text),s.ping&&s.ping(),clearTimeout(He.current.opp),He.current.opp=setTimeout(()=>v(""),4e3))))}const Ae=re.gameState;if(Ae){if(Ae.winner&&!H.current){H.current=!0;const pe=Ae.winner===o;I({won:pe,title:pe?"🎉 YOU WIN!":"😔 YOU LOST!",sub:(pe?["Domination! 👑","Flawless! ⚡","You crushed it 🔥","Champion! 💎"]:["GG, rematch? 💪","They got lucky 😤","Next time! 🤝"])[Math.floor(Math.random()*4)]}),pe?s.win():s.lose(),af(pe,Ae)}Ae[`${u}Exited`]&&!H.current&&(H.current=!0,I({won:!0,title:"🏆 OPPONENT LEFT",sub:"You win by default!"}),s.win())}});return()=>J()},[t]),D.useEffect(()=>{if(!(de!=null&&de.turnStartedAt)||_)return;clearInterval(ie.current);const J=Math.floor((Date.now()-de.turnStartedAt)/1e3),re=Math.max(0,Wi-J);return p(re),ie.current=setInterval(()=>{p(Ae=>Ae<=1?(clearInterval(ie.current),mt&&!_&&(k?(rt(!1),p(Wi)):oa()),0):Ae-1)},1e3),()=>clearInterval(ie.current)},[de==null?void 0:de.turnStartedAt,de==null?void 0:de.turn]);const oa=()=>{const J=a.filter(re=>!Mr.includes(re));if(J.length>0){const re=J[Math.floor(Math.random()*J.length)];bs(re)}},bs=async J=>{if(_||Mr.includes(J)||!mt&&!x)return;clearInterval(ie.current),en([]),s.cross();const re=[...Mr,J],Ae=qa(a,re);if(Ae>Pi&&s.line(),x){N(!1),await hT(t,o,J,re,Ae,!0),Ae>=Us&&await dT(t,o);return}await hT(t,o,J,re,Ae,!1),Ae>=Us&&await dT(t,o)},xu=J=>{if(!(!C[J]||!mt||_)){if(s.click(),w(re=>({...re,[J]:!1})),J==="time"&&p(re=>Math.min(re+20,Wi+20)),J==="hint"){const re=a.filter(fe=>!Mr.includes(fe)),Ae=[6,7,8,11,12,13,16,17,18],pe=re.sort((fe,St)=>{const tn=Ae.includes(a.indexOf(fe))?-1:1,Ds=Ae.includes(a.indexOf(St))?-1:1;return tn-Ds});en(pe.slice(0,1)),setTimeout(()=>en([]),6e3)}if(J==="double"&&N(!0),J==="fifty"){const re=a.filter(fe=>!Mr.includes(fe)),Ae=[6,7,8,11,12,13,16,17,18],pe=re.sort((fe,St)=>{const tn=Ae.includes(a.indexOf(fe))?-1:1,Ds=Ae.includes(a.indexOf(St))?-1:1;return tn-Ds});en(pe.slice(0,2)),setTimeout(()=>en([]),6e3)}J==="shield"&&rt(!0)}},of=async J=>{if(S)return;await O3(t,{text:J,isEmoji:!0,sender:o,senderName:(r==null?void 0:r.displayName)||"Me"}),P(!1),E(!0);let re=3;O(re),ze.current=setInterval(()=>{re--,O(re),re<=0&&(clearInterval(ze.current),E(!1),O(0))},1e3)},af=async(J,re)=>{var pe,fe;const Ae=Math.round((Date.now()-se.current)/1e3);if(n&&o==="p1"){await ox(n.uid,J);const St=(pe=c==null?void 0:c.players)==null?void 0:pe.p1,tn=(fe=c==null?void 0:c.players)==null?void 0:fe.p2;St&&tn&&await ax({p1Uid:St.uid||"p1",p2Uid:tn.uid||"p2",p1Name:St.name||"P1",p2Name:tn.name||"P2",winner:re.winner==="p1"?St.uid:tn.uid,p1Lines:re.p1Lines||0,p2Lines:re.p2Lines||0,duration:Ae,mode:"multiplayer"})}},aa=async()=>{clearInterval(ie.current),await L3(t,o),i("/")};if(D.useEffect(()=>{It.p1&&It.p2&&i("/room/create")},[It]),!c)return g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"},children:[g.jsx("div",{className:"spinner"}),g.jsx("div",{style:{marginTop:12,color:"var(--ink2)",fontSize:12},children:"Connecting…"})]});const $t=70;return g.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[g.jsx("div",{style:{background:"var(--panel)",borderBottom:"2px solid var(--edge2)",padding:"10px 12px 8px",flexShrink:0},children:g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10},children:[g.jsxs("div",{style:{flex:1},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[g.jsxs("div",{style:{position:"relative",width:$t,height:$t,flexShrink:0},children:[g.jsx("div",{style:{width:$t,height:$t,borderRadius:"50%",background:"var(--panel2)",border:"2px solid var(--edge)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:34},children:(Bn==null?void 0:Bn.avatar)||(r==null?void 0:r.avatar)||"🎯"}),g.jsx(fT,{timeLeft:f,maxTime:Wi,size:$t,active:mt&&!_}),k&&g.jsx("div",{style:{position:"absolute",bottom:-2,right:-2,fontSize:14},children:"🛡️"})]}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsx("div",{style:{fontWeight:800,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(Bn==null?void 0:Bn.name)||(r==null?void 0:r.displayName)||"You"}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[Pi,"/",Us," lines"]}),mt&&!_&&g.jsx("div",{style:{fontSize:9,fontWeight:800,letterSpacing:2,textTransform:"uppercase",color:"var(--c1)",marginTop:1},children:x?"2️⃣ PICK 2nd!":`YOUR TURN • ${f}s`})]})]}),V&&g.jsx("div",{style:{marginTop:5,background:"rgba(0,255,204,0.1)",border:"2px solid rgba(0,255,204,0.3)",borderRadius:10,padding:"3px 10px",fontSize:15,display:"inline-block",maxWidth:"100%"},children:V}),g.jsx("div",{style:{display:"flex",gap:4,marginTop:6},children:pT.map(J=>g.jsx("button",{onClick:()=>xu(J.id),disabled:!C[J.id]||!mt||!!_,title:J.tip,style:{fontSize:15,padding:"3px 5px",background:C[J.id]?"var(--panel2)":"transparent",border:`2px solid ${C[J.id]?"var(--edge2)":"transparent"}`,borderRadius:6,cursor:C[J.id]&&mt?"pointer":"default",opacity:C[J.id]?mt?1:.35:.15,WebkitTapHighlightColor:"transparent"},children:J.icon},J.id))})]}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:6,flexShrink:0},children:[g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2,lineHeight:1},children:[g.jsx("span",{style:{color:"var(--c1)"},children:Pi}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 3px"},children:":"}),g.jsx("span",{style:{color:"var(--c2)"},children:Ni})]}),g.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:"SCORE"})]}),g.jsxs("div",{style:{flex:1},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexDirection:"row-reverse"},children:[g.jsxs("div",{style:{position:"relative",width:$t,height:$t,flexShrink:0},children:[g.jsx("div",{style:{width:$t,height:$t,borderRadius:"50%",background:"var(--panel2)",border:"2px solid var(--edge)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:34},children:(Un==null?void 0:Un.avatar)||"🎯"}),g.jsx(fT,{timeLeft:f,maxTime:Wi,size:$t,active:!mt&&!_})]}),g.jsxs("div",{style:{flex:1,minWidth:0,textAlign:"right"},children:[g.jsx("div",{style:{fontWeight:800,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(Un==null?void 0:Un.name)||"Opponent"}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[Ni,"/",Us," lines"]}),!mt&&!_&&g.jsxs("div",{style:{fontSize:9,fontWeight:800,letterSpacing:2,textTransform:"uppercase",color:"var(--c2)",marginTop:1},children:["THEIR TURN • ",f,"s"]})]})]}),T&&g.jsx("div",{style:{marginTop:5,background:"rgba(255,45,85,0.1)",border:"2px solid rgba(255,45,85,0.3)",borderRadius:10,padding:"3px 10px",fontSize:15,display:"flex",justifyContent:"flex-end"},children:g.jsx("span",{children:T})}),g.jsx("div",{style:{display:"flex",gap:4,marginTop:6,justifyContent:"flex-end"},children:pT.map((J,re)=>g.jsx("div",{style:{fontSize:13,padding:"3px 5px",background:"var(--panel2)",border:"2px solid var(--edge)",borderRadius:6,opacity:.35},children:J.icon},re))})]})]})}),g.jsxs("div",{style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"8px 12px"},children:[g.jsxs("div",{style:{marginBottom:6,textAlign:"center"},children:[g.jsx("div",{style:{fontSize:11,color:"var(--ink2)",letterSpacing:1,textTransform:"uppercase",fontWeight:700},children:_?"🏁 Game Over":mt?"👆 Your Board — Tap to Mark":"⏳ Opponent's turn…"}),Wt.length>0&&g.jsxs("div",{style:{fontSize:11,color:"var(--c3)",marginTop:3},children:["💡 Try: ",Wt.join(", ")]})]}),g.jsx(rg,{board:a,selected:Mr,onCellClick:bs,disabled:!mt&&!x||!!_,highlightCells:Wt}),g.jsxs("div",{style:{marginTop:10,display:"flex",gap:5,alignItems:"center"},children:[Array.from({length:Us}).map((J,re)=>g.jsx("div",{style:{width:34,height:8,borderRadius:4,background:re<Pi?"var(--c1)":"var(--edge)",transition:"background 0.3s"}},re)),g.jsxs("span",{style:{fontSize:11,color:"var(--ink2)",marginLeft:4},children:[Pi,"/",Us]})]})]}),g.jsxs("div",{style:{background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"8px 12px",flexShrink:0},children:[R&&g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center",paddingBottom:8},children:j3.map(J=>g.jsx("button",{onClick:()=>of(J),disabled:S,style:{fontSize:22,background:"none",border:"none",cursor:"pointer",padding:4,borderRadius:6,opacity:S?.35:1,WebkitTapHighlightColor:"transparent"},children:J},J))}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[g.jsx("button",{onClick:()=>!S&&P(J=>!J),disabled:S,style:{background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"7px 14px",fontSize:13,fontWeight:700,color:S?"var(--ink3)":"var(--ink)",cursor:S?"not-allowed":"pointer",WebkitTapHighlightColor:"transparent"},children:S?`⏱ ${A}s`:R?"✕ Close":"😊 React"}),g.jsxs("div",{style:{flex:1,textAlign:"center",fontSize:11,color:"var(--ink3)"},children:["ROOM: ",g.jsx("strong",{style:{color:"var(--c4)",letterSpacing:2},children:t})]}),g.jsx("button",{onClick:aa,style:{background:"transparent",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"7px 12px",fontSize:12,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Leave"})]})]}),g.jsx(sx,{show:!!_,isWin:_==null?void 0:_.won,title:_==null?void 0:_.title,sub:_==null?void 0:_.sub,onPlayAgain:()=>M3(t,o),onHome:aa})]})}function B3(){const{user:t}=rr(),e=Zn(),[n,r]=D.useState([]),[i,s]=D.useState(!0);D.useEffect(()=>{A3().then(u=>{r(u),s(!1)})},[]);const o=u=>u===1?{color:"var(--c3)",fontSize:22}:u===2?{color:"#aaa",fontSize:20}:u===3?{color:"#cd7f32",fontSize:18}:{color:"var(--ink3)",fontSize:16},a=u=>u===1?"🥇":u===2?"🥈":u===3?"🥉":`#${u}`;return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>e("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🏆 LEADERBOARD"})]}),i?g.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:g.jsx("div",{className:"spinner"})}):g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{style:{padding:"4px 0"},children:[n.length===0&&g.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:"No players yet. Be the first!"}),n.map(u=>g.jsxs("div",{className:"lb-row",style:{background:u.uid===(t==null?void 0:t.uid)?"rgba(0,255,204,0.05)":"transparent"},children:[g.jsx("div",{style:{...o(u.rank),fontFamily:"'Black Han Sans',sans-serif",width:36,textAlign:"center"},children:a(u.rank)}),g.jsx("div",{style:{fontSize:24},children:u.avatar||"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsxs("div",{style:{fontWeight:700,fontSize:14},children:[u.displayName,u.uid===(t==null?void 0:t.uid)&&g.jsx("span",{style:{fontSize:10,color:"var(--c1)",marginLeft:6},children:"YOU"})]}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[u.total||0," games · ",u.winRate||0,"% WR"]})]}),g.jsxs("div",{style:{textAlign:"right"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:"var(--c1)"},children:u.wins||0}),g.jsx("div",{style:{fontSize:10,color:"var(--ink3)",letterSpacing:1,textTransform:"uppercase"},children:"wins"})]})]},u.uid))]})})]})}async function ux(t,e,n){const r=Mo(_i(qe,"friendRequests"),Vo("from","==",t),Vo("to","==",e));return(await Ul(r)).empty?(await X_(_i(qe,"friendRequests"),{from:t,to:e,fromName:n,status:"pending",timestamp:wu()}),{success:!0}):{error:"Request already sent"}}async function z3(t,e,n){await ln(jt(qe,"friendRequests",t),{status:"accepted"}),await ln(jt(qe,"users",e),{friends:Bm(n)}),await ln(jt(qe,"users",n),{friends:Bm(e)})}async function W3(t){await ln(jt(qe,"friendRequests",t),{status:"declined"})}async function $3(t,e){await ln(jt(qe,"users",t),{friends:zm(e)}),await ln(jt(qe,"users",e),{friends:zm(t)})}function q3(t,e){const n=Mo(_i(qe,"friendRequests"),Vo("to","==",t));return hk(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i.filter(s=>s.status==="pending"))},r=>{console.error("Friend requests error:",r),e([])})}async function H3(t){if(!t||t.length===0)return[];const e=[];for(const n of t)try{const r=await vu(jt(qe,"users",n));r.exists()&&e.push({uid:n,...r.data()})}catch{}return e}function G3(){var C;const{user:t,profile:e,refreshProfile:n}=rr(),r=Zn(),[i,s]=D.useState("friends"),[o,a]=D.useState([]),[u,c]=D.useState([]),[h,f]=D.useState(""),[p,_]=D.useState([]),[I,R]=D.useState(!1),[P,S]=D.useState(!0),E=D.useRef(null);D.useEffect(()=>{if(!(e!=null&&e.friends)){S(!1);return}H3(e.friends).then(w=>{a(w),S(!1)}).catch(()=>S(!1))},[(C=e==null?void 0:e.friends)==null?void 0:C.length]),D.useEffect(()=>{if(!t)return;const w=q3(t.uid,x=>{c(x)});return E.current=w,()=>{E.current&&E.current()}},[t==null?void 0:t.uid]);const A=async()=>{if(h.trim()){R(!0),_([]);try{const w=await $B(h.trim());_(w.filter(x=>x.uid!==t.uid))}catch{Ji("Search failed","Try again","error")}R(!1)}},O=async w=>{const x=await ux(t.uid,w.uid,(e==null?void 0:e.displayName)||"Player");x.error?Ji("⚠️ "+x.error,"","info"):Ji("✅ Request Sent!",`Sent to ${w.displayName}`,"success")},V=async w=>{await z3(w.id,t.uid,w.from),await n(t.uid),Ji("👥 Friends!",`You and ${w.fromName} are now friends`,"success")},U=async w=>{await W3(w.id)},T=async w=>{await $3(t.uid,w),await n(t.uid),a(x=>x.filter(N=>N.uid!==w))},v=[{id:"friends",label:`Friends (${o.length})`},{id:"requests",label:`Requests ${u.length>0?`(${u.length})`:""}`,badge:u.length},{id:"search",label:"🔍 Find"}];return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:14,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"👥 FRIENDS"})]}),g.jsx("div",{style:{display:"flex",gap:6,width:"100%",maxWidth:440,marginBottom:14},children:v.map(w=>g.jsxs("button",{onClick:()=>s(w.id),style:{flex:1,padding:"9px 6px",border:"2px solid",borderColor:i===w.id?"var(--c1)":"var(--edge2)",borderRadius:"var(--r)",background:i===w.id?"rgba(0,255,204,0.1)":"var(--panel)",color:i===w.id?"var(--c1)":"var(--ink2)",fontSize:11,fontWeight:700,cursor:"pointer",WebkitTapHighlightColor:"transparent",position:"relative"},children:[w.label,w.badge>0&&i!==w.id&&g.jsx("span",{style:{position:"absolute",top:-6,right:-4,background:"var(--c2)",color:"#fff",fontSize:10,fontWeight:700,borderRadius:"50%",width:17,height:17,display:"flex",alignItems:"center",justifyContent:"center"},children:w.badge})]},w.id))}),i==="friends"&&g.jsx("div",{className:"card",style:{maxWidth:440},children:P?g.jsx("div",{style:{display:"flex",justifyContent:"center",padding:32},children:g.jsx("div",{className:"spinner"})}):o.length===0?g.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[g.jsx("div",{style:{fontSize:40,marginBottom:10},children:"👥"}),g.jsx("div",{style:{fontWeight:700},children:"No friends yet"}),g.jsx("div",{style:{fontSize:13,marginTop:4},children:"Search to find and add players!"}),g.jsx("button",{className:"btn btn-primary",style:{marginTop:14},onClick:()=>s("search"),children:"Find Players"})]}):o.map(w=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("span",{style:{fontSize:26},children:w.avatar||"🎯"}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.displayName}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[w.wins||0,"W · ",w.losses||0,"L"]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[g.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:w.isOnline?"var(--c1)":"var(--ink3)",boxShadow:w.isOnline?"0 0 6px var(--c1)":"none"}}),g.jsx("span",{style:{fontSize:10,color:"var(--ink3)"},children:w.isOnline?"Online":"Offline"})]}),g.jsx("button",{onClick:()=>T(w.uid),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:6,padding:"4px 10px",fontSize:11,color:"var(--ink3)",cursor:"pointer"},children:"Remove"})]},w.uid))}),i==="requests"&&g.jsx("div",{className:"card",style:{maxWidth:440},children:u.length===0?g.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[g.jsx("div",{style:{fontSize:40,marginBottom:10},children:"📭"}),g.jsx("div",{style:{fontWeight:700},children:"No pending requests"}),g.jsx("div",{style:{fontSize:13,marginTop:4},children:"When someone adds you, it appears here."})]}):u.map(w=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("span",{style:{fontSize:28},children:"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.fromName||"Unknown"}),g.jsx("div",{style:{fontSize:12,color:"var(--ink2)",marginTop:2},children:"Wants to be friends"})]}),g.jsx("button",{onClick:()=>V(w),style:{background:"var(--c1)",color:"#000",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer",marginRight:4},children:"✓ Accept"}),g.jsx("button",{onClick:()=>U(w),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"8px 10px",fontSize:12,color:"var(--ink2)",cursor:"pointer"},children:"✕"})]},w.id))}),i==="search"&&g.jsxs("div",{style:{width:"100%",maxWidth:440},children:[g.jsxs("div",{style:{display:"flex",gap:8,marginBottom:14},children:[g.jsx("input",{type:"text",placeholder:"Search username…",value:h,onChange:w=>f(w.target.value),onKeyDown:w=>w.key==="Enter"&&A(),style:{flex:1}}),g.jsx("button",{className:"btn btn-primary",onClick:A,disabled:I,style:{padding:"0 16px"},children:I?"…":"🔍"})]}),p.length>0&&g.jsx("div",{className:"card",children:p.map(w=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("span",{style:{fontSize:26},children:w.avatar||"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.displayName}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[w.wins||0,"W · ",w.losses||0,"L"]})]}),g.jsx("button",{onClick:()=>O(w),style:{background:"var(--c4)",color:"#fff",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer"},children:"+ Add"})]},w.uid))}),h&&!I&&p.length===0&&g.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",padding:24,fontSize:14},children:['No players found for "',h,'"']})]})]})}function K3(t){if(!t)return"—";try{return(t!=null&&t.toDate?t.toDate():t!=null&&t.seconds?new Date(t.seconds*1e3):new Date(t)).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"—"}}function Q3(t){if(!t)return"—";const e=Math.floor(t/60),n=t%60;return e>0?`${e}m ${n}s`:`${n}s`}function Y3(){const{user:t,profile:e}=rr(),n=Zn(),[r,i]=D.useState([]),[s,o]=D.useState(!0),[a,u]=D.useState({});D.useEffect(()=>{t&&x3(t.uid).then(h=>{i(h),o(!1)}).catch(()=>o(!1))},[t]);const c=async h=>{const f=h.p1Uid===t.uid,p=f?h.p2Uid:h.p1Uid,_=f?h.p2Name:h.p1Name;if(!p||p==="bot"||p===t.uid)return;u(R=>({...R,[h.id]:!0}));const I=await ux(t.uid,p,(e==null?void 0:e.displayName)||"Player");I.error?Ji("Already sent",I.error,"info"):Ji("✅ Request Sent!",`Friend request sent to ${_}`,"success"),u(R=>({...R,[h.id]:!1}))};return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"📊 HISTORY"})]}),s?g.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:g.jsx("div",{className:"spinner"})}):r.length===0?g.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",paddingTop:60},children:[g.jsx("div",{style:{fontSize:52,marginBottom:14},children:"🎮"}),g.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:6},children:"No games yet!"}),g.jsx("div",{style:{fontSize:13},children:"Play your first game — it will appear here."}),g.jsx("button",{className:"btn btn-primary",style:{marginTop:20},onClick:()=>n("/"),children:"Play Now"})]}):g.jsx("div",{className:"card",style:{maxWidth:440},children:r.map(h=>{const f=h.p1Uid===t.uid,p=h.winner===t.uid,_=f?h.p1Lines:h.p2Lines,I=f?h.p2Lines:h.p1Lines,R=f?h.p2Name:h.p1Name,P=f?h.p2Uid:h.p1Uid,S=h.mode==="bot"||P==="bot";return g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("div",{style:{fontSize:28,width:36,textAlign:"center",flexShrink:0},children:p?"🏆":"💀"}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["vs ",S?`🤖 ${h.botLevel||"Bot"}`:R||"Unknown"]}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[K3(h.timestamp||h.tsNum)," · ",Q3(h.duration)]})]}),g.jsxs("div",{style:{textAlign:"right",marginRight:6},children:[g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:17},children:[g.jsx("span",{style:{color:"var(--c1)"},children:_??"—"}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 3px"},children:"–"}),g.jsx("span",{style:{color:"var(--c2)"},children:I??"—"})]}),g.jsx("div",{style:{fontSize:10,fontWeight:800,color:p?"var(--c1)":"var(--c2)",letterSpacing:1},children:p?"WIN":"LOSS"})]}),!S&&P&&P!==t.uid&&g.jsx("button",{onClick:()=>c(h),disabled:a[h.id],title:`Add ${R} as friend`,style:{fontSize:18,background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"4px 7px",cursor:"pointer",color:"var(--c4)",flexShrink:0,WebkitTapHighlightColor:"transparent"},children:a[h.id]?"⏳":"👥+"})]},h.id)})})]})}function cx(){return g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:g.jsx("div",{className:"spinner"})})}function Vi({children:t}){const{user:e,loading:n}=rr();return n?g.jsx(cx,{}):e?t:g.jsx(BS,{to:"/login",replace:!0})}function X3(){const{user:t,loading:e}=rr();return e?g.jsx(cx,{}):t?g.jsx(S3,{}):g.jsx(n3,{})}function J3(){return D.useEffect(()=>{t3(t=>{var e,n;Ji(((e=t.notification)==null?void 0:e.title)||"DiNGo",((n=t.notification)==null?void 0:n.body)||"","info")})},[]),g.jsxs(sb,{basename:"/DINGO-NEW-VERSION-",children:[g.jsx(JB,{}),g.jsxs(nb,{children:[g.jsx(Cn,{path:"/",element:g.jsx(X3,{})}),g.jsx(Cn,{path:"/login",element:g.jsx(r3,{})}),g.jsx(Cn,{path:"/profile",element:g.jsx(Vi,{children:g.jsx(k3,{})})}),g.jsx(Cn,{path:"/bot",element:g.jsx(Vi,{children:g.jsx(P3,{})})}),g.jsx(Cn,{path:"/room/:mode",element:g.jsx(Vi,{children:g.jsx(F3,{})})}),g.jsx(Cn,{path:"/game/:roomId",element:g.jsx(Vi,{children:g.jsx(U3,{})})}),g.jsx(Cn,{path:"/leaderboard",element:g.jsx(Vi,{children:g.jsx(B3,{})})}),g.jsx(Cn,{path:"/friends",element:g.jsx(Vi,{children:g.jsx(G3,{})})}),g.jsx(Cn,{path:"/history",element:g.jsx(Vi,{children:g.jsx(Y3,{})})}),g.jsx(Cn,{path:"*",element:g.jsx(BS,{to:"/",replace:!0})})]})]})}function Z3(){return g.jsx(XB,{children:g.jsx(J3,{})})}Ep.createRoot(document.getElementById("root")).render(g.jsx(CT.StrictMode,{children:g.jsx(Z3,{})}));
