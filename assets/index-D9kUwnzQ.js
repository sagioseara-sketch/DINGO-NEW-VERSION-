function Bx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wT={exports:{}},Xh={},ET={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu=Symbol.for("react.element"),Wx=Symbol.for("react.portal"),$x=Symbol.for("react.fragment"),Hx=Symbol.for("react.strict_mode"),qx=Symbol.for("react.profiler"),Gx=Symbol.for("react.provider"),Kx=Symbol.for("react.context"),Qx=Symbol.for("react.forward_ref"),Yx=Symbol.for("react.suspense"),Xx=Symbol.for("react.memo"),Jx=Symbol.for("react.lazy"),Wv=Symbol.iterator;function Zx(t){return t===null||typeof t!="object"?null:(t=Wv&&t[Wv]||t["@@iterator"],typeof t=="function"?t:null)}var TT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},IT=Object.assign,ST={};function Yo(t,e,n){this.props=t,this.context=e,this.refs=ST,this.updater=n||TT}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function CT(){}CT.prototype=Yo.prototype;function hg(t,e,n){this.props=t,this.context=e,this.refs=ST,this.updater=n||TT}var dg=hg.prototype=new CT;dg.constructor=hg;IT(dg,Yo.prototype);dg.isPureReactComponent=!0;var $v=Array.isArray,kT=Object.prototype.hasOwnProperty,fg={current:null},RT={key:!0,ref:!0,__self:!0,__source:!0};function AT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kT.call(e,r)&&!RT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:iu,type:t,key:s,ref:o,props:i,_owner:fg.current}}function e1(t,e){return{$$typeof:iu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pg(t){return typeof t=="object"&&t!==null&&t.$$typeof===iu}function t1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hv=/\/+/g;function xf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?t1(""+t.key):e.toString(36)}function Ic(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case iu:case Wx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xf(o,0):r,$v(i)?(n="",t!=null&&(n=t.replace(Hv,"$&/")+"/"),Ic(i,e,n,"",function(c){return c})):i!=null&&(pg(i)&&(i=e1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$v(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+xf(s,a);o+=Ic(s,e,n,u,i)}else if(u=Zx(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+xf(s,a++),o+=Ic(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yu(t,e,n){if(t==null)return t;var r=[],i=0;return Ic(t,r,"","",function(s){return e.call(n,s,i++)}),r}function n1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},Sc={transition:null},r1={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:Sc,ReactCurrentOwner:fg};function xT(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Yu,forEach:function(t,e,n){Yu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yu(t,function(){e++}),e},toArray:function(t){return Yu(t,function(e){return e})||[]},only:function(t){if(!pg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=Yo;he.Fragment=$x;he.Profiler=qx;he.PureComponent=hg;he.StrictMode=Hx;he.Suspense=Yx;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;he.act=xT;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=IT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)kT.call(e,u)&&!RT.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:iu,type:t.type,key:i,ref:s,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:Kx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gx,_context:t},t.Consumer=t};he.createElement=AT;he.createFactory=function(t){var e=AT.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:Qx,render:t}};he.isValidElement=pg;he.lazy=function(t){return{$$typeof:Jx,_payload:{_status:-1,_result:t},_init:n1}};he.memo=function(t,e){return{$$typeof:Xx,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Sc.transition;Sc.transition={};try{t()}finally{Sc.transition=e}};he.unstable_act=xT;he.useCallback=function(t,e){return Ht.current.useCallback(t,e)};he.useContext=function(t){return Ht.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)};he.useEffect=function(t,e){return Ht.current.useEffect(t,e)};he.useId=function(){return Ht.current.useId()};he.useImperativeHandle=function(t,e,n){return Ht.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Ht.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Ht.current.useReducer(t,e,n)};he.useRef=function(t){return Ht.current.useRef(t)};he.useState=function(t){return Ht.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Ht.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Ht.current.useTransition()};he.version="18.3.1";ET.exports=he;var D=ET.exports;const PT=zx(D),i1=Bx({__proto__:null,default:PT},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1=D,o1=Symbol.for("react.element"),a1=Symbol.for("react.fragment"),l1=Object.prototype.hasOwnProperty,u1=s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c1={key:!0,ref:!0,__self:!0,__source:!0};function NT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)l1.call(e,r)&&!c1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:o1,type:t,key:s,ref:o,props:i,_owner:u1.current}}Xh.Fragment=a1;Xh.jsx=NT;Xh.jsxs=NT;wT.exports=Xh;var g=wT.exports,Rp={},bT={exports:{}},fn={},DT={exports:{}},OT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Y){var Z=W.length;W.push(Y);e:for(;0<Z;){var H=Z-1>>>1,se=W[H];if(0<i(se,Y))W[H]=Y,W[Z]=se,Z=H;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Y=W[0],Z=W.pop();if(Z!==Y){W[0]=Z;e:for(var H=0,se=W.length,te=se>>>1;H<te;){var We=2*(H+1)-1,at=W[We],$e=We+1,mn=W[$e];if(0>i(at,Z))$e<se&&0>i(mn,at)?(W[H]=mn,W[$e]=Z,H=$e):(W[H]=at,W[We]=Z,H=We);else if($e<se&&0>i(mn,Z))W[H]=mn,W[$e]=Z,H=$e;else break e}}return Y}function i(W,Y){var Z=W.sortIndex-Y.sortIndex;return Z!==0?Z:W.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,p=3,_=!1,E=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(W){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=W)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function O(W){if(A=!1,C(W),!E)if(n(u)!==null)E=!0,Rn(V);else{var Y=n(c);Y!==null&&At(O,Y.startTime-W)}}function V(W,Y){E=!1,A&&(A=!1,I(v),v=-1),_=!0;var Z=p;try{for(C(Y),f=n(u);f!==null&&(!(f.expirationTime>Y)||W&&!x());){var H=f.callback;if(typeof H=="function"){f.callback=null,p=f.priorityLevel;var se=H(f.expirationTime<=Y);Y=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(u)&&r(u),C(Y)}else r(u);f=n(u)}if(f!==null)var te=!0;else{var We=n(c);We!==null&&At(O,We.startTime-Y),te=!1}return te}finally{f=null,p=Z,_=!1}}var j=!1,k=null,v=-1,S=5,w=-1;function x(){return!(t.unstable_now()-w<S)}function P(){if(k!==null){var W=t.unstable_now();w=W;var Y=!0;try{Y=k(!0,W)}finally{Y?R():(j=!1,k=null)}}else j=!1}var R;if(typeof T=="function")R=function(){T(P)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,Gt=ot.port2;ot.port1.onmessage=P,R=function(){Gt.postMessage(null)}}else R=function(){N(P,0)};function Rn(W){k=W,j||(j=!0,R())}function At(W,Y){v=N(function(){W(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){E||_||(E=!0,Rn(V))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(p){case 1:case 2:case 3:var Y=3;break;default:Y=p}var Z=p;p=Y;try{return W()}finally{p=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Y){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Z=p;p=W;try{return Y()}finally{p=Z}},t.unstable_scheduleCallback=function(W,Y,Z){var H=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?H+Z:H):Z=H,W){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Z+se,W={id:h++,callback:Y,priorityLevel:W,startTime:Z,expirationTime:se,sortIndex:-1},Z>H?(W.sortIndex=Z,e(c,W),n(u)===null&&W===n(c)&&(A?(I(v),v=-1):A=!0,At(O,Z-H))):(W.sortIndex=se,e(u,W),E||_||(E=!0,Rn(V))),W},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(W){var Y=p;return function(){var Z=p;p=Y;try{return W.apply(this,arguments)}finally{p=Z}}}})(OT);DT.exports=OT;var h1=DT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1=D,dn=h1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var LT=new Set,_l={};function ks(t,e){Io(t,e),Io(t+"Capture",e)}function Io(t,e){for(_l[t]=e,t=0;t<e.length;t++)LT.add(e[t])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ap=Object.prototype.hasOwnProperty,f1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qv={},Gv={};function p1(t){return Ap.call(Gv,t)?!0:Ap.call(qv,t)?!1:f1.test(t)?Gv[t]=!0:(qv[t]=!0,!1)}function m1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g1(t,e,n,r){if(e===null||typeof e>"u"||m1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var mg=/[\-:]([a-z])/g;function gg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mg,gg);Rt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mg,gg);Rt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mg,gg);Rt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _g(t,e,n,r){var i=Rt.hasOwnProperty(e)?Rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g1(e,n,i,r)&&(n=null),r||i===null?p1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Br=d1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xu=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),yg=Symbol.for("react.strict_mode"),xp=Symbol.for("react.profiler"),MT=Symbol.for("react.provider"),VT=Symbol.for("react.context"),vg=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Np=Symbol.for("react.suspense_list"),wg=Symbol.for("react.memo"),Yr=Symbol.for("react.lazy"),FT=Symbol.for("react.offscreen"),Kv=Symbol.iterator;function ka(t){return t===null||typeof t!="object"?null:(t=Kv&&t[Kv]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,Pf;function za(t){if(Pf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pf=e&&e[1]||""}return`
`+Pf+t}var Nf=!1;function bf(t,e){if(!t||Nf)return"";Nf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Nf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?za(t):""}function _1(t){switch(t.tag){case 5:return za(t.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 2:case 15:return t=bf(t.type,!1),t;case 11:return t=bf(t.type.render,!1),t;case 1:return t=bf(t.type,!0),t;default:return""}}function bp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xs:return"Fragment";case Ys:return"Portal";case xp:return"Profiler";case yg:return"StrictMode";case Pp:return"Suspense";case Np:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case VT:return(t.displayName||"Context")+".Consumer";case MT:return(t._context.displayName||"Context")+".Provider";case vg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wg:return e=t.displayName||null,e!==null?e:bp(t.type)||"Memo";case Yr:e=t._payload,t=t._init;try{return bp(t(e))}catch{}}return null}function y1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bp(e);case 8:return e===yg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v1(t){var e=jT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ju(t){t._valueTracker||(t._valueTracker=v1(t))}function UT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dp(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function BT(t,e){e=e.checked,e!=null&&_g(t,"checked",e,!1)}function Op(t,e){BT(t,e);var n=wi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lp(t,e.type,wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lp(t,e,n){(e!=="number"||qc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wa=Array.isArray;function co(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Mp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Wa(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wi(n)}}function zT(t,e){var n=wi(e.value),r=wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function WT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?WT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zu,$T=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zu=Zu||document.createElement("div"),Zu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w1=["Webkit","ms","Moz","O"];Object.keys(Xa).forEach(function(t){w1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xa[e]=Xa[t]})});function HT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xa.hasOwnProperty(t)&&Xa[t]?(""+e).trim():e+"px"}function qT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=HT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var E1=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fp(t,e){if(e){if(E1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function jp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Up=null;function Eg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bp=null,ho=null,fo=null;function Zv(t){if(t=au(t)){if(typeof Bp!="function")throw Error(U(280));var e=t.stateNode;e&&(e=nd(e),Bp(t.stateNode,t.type,e))}}function GT(t){ho?fo?fo.push(t):fo=[t]:ho=t}function KT(){if(ho){var t=ho,e=fo;if(fo=ho=null,Zv(t),e)for(t=0;t<e.length;t++)Zv(e[t])}}function QT(t,e){return t(e)}function YT(){}var Df=!1;function XT(t,e,n){if(Df)return t(e,n);Df=!0;try{return QT(t,e,n)}finally{Df=!1,(ho!==null||fo!==null)&&(YT(),KT())}}function vl(t,e){var n=t.stateNode;if(n===null)return null;var r=nd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var zp=!1;if(Pr)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){zp=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{zp=!1}function T1(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ja=!1,Gc=null,Kc=!1,Wp=null,I1={onError:function(t){Ja=!0,Gc=t}};function S1(t,e,n,r,i,s,o,a,u){Ja=!1,Gc=null,T1.apply(I1,arguments)}function C1(t,e,n,r,i,s,o,a,u){if(S1.apply(this,arguments),Ja){if(Ja){var c=Gc;Ja=!1,Gc=null}else throw Error(U(198));Kc||(Kc=!0,Wp=c)}}function Rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function JT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ew(t){if(Rs(t)!==t)throw Error(U(188))}function k1(t){var e=t.alternate;if(!e){if(e=Rs(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ew(i),t;if(s===r)return ew(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function ZT(t){return t=k1(t),t!==null?eI(t):null}function eI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eI(t);if(e!==null)return e;t=t.sibling}return null}var tI=dn.unstable_scheduleCallback,tw=dn.unstable_cancelCallback,R1=dn.unstable_shouldYield,A1=dn.unstable_requestPaint,qe=dn.unstable_now,x1=dn.unstable_getCurrentPriorityLevel,Tg=dn.unstable_ImmediatePriority,nI=dn.unstable_UserBlockingPriority,Qc=dn.unstable_NormalPriority,P1=dn.unstable_LowPriority,rI=dn.unstable_IdlePriority,Jh=null,Xn=null;function N1(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Jh,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:O1,b1=Math.log,D1=Math.LN2;function O1(t){return t>>>=0,t===0?32:31-(b1(t)/D1|0)|0}var ec=64,tc=4194304;function $a(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=$a(a):(s&=o,s!==0&&(r=$a(s)))}else o=n&~i,o!==0?r=$a(o):s!==0&&(r=$a(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Vn(e),i=1<<n,r|=t[n],e&=~i;return r}function L1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=L1(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function $p(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iI(){var t=ec;return ec<<=1,!(ec&4194240)&&(ec=64),t}function Of(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function su(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function V1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ig(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var we=0;function sI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var oI,Sg,aI,lI,uI,Hp=!1,nc=[],li=null,ui=null,ci=null,wl=new Map,El=new Map,Jr=[],F1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nw(t,e){switch(t){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":ui=null;break;case"mouseover":case"mouseout":ci=null;break;case"pointerover":case"pointerout":wl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(e.pointerId)}}function Aa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=au(e),e!==null&&Sg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function j1(t,e,n,r,i){switch(e){case"focusin":return li=Aa(li,t,e,n,r,i),!0;case"dragenter":return ui=Aa(ui,t,e,n,r,i),!0;case"mouseover":return ci=Aa(ci,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return wl.set(s,Aa(wl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,El.set(s,Aa(El.get(s)||null,t,e,n,r,i)),!0}return!1}function cI(t){var e=Qi(t.target);if(e!==null){var n=Rs(e);if(n!==null){if(e=n.tag,e===13){if(e=JT(n),e!==null){t.blockedOn=e,uI(t.priority,function(){aI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Up=r,n.target.dispatchEvent(r),Up=null}else return e=au(n),e!==null&&Sg(e),t.blockedOn=n,!1;e.shift()}return!0}function rw(t,e,n){Cc(t)&&n.delete(e)}function U1(){Hp=!1,li!==null&&Cc(li)&&(li=null),ui!==null&&Cc(ui)&&(ui=null),ci!==null&&Cc(ci)&&(ci=null),wl.forEach(rw),El.forEach(rw)}function xa(t,e){t.blockedOn===e&&(t.blockedOn=null,Hp||(Hp=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,U1)))}function Tl(t){function e(i){return xa(i,t)}if(0<nc.length){xa(nc[0],t);for(var n=1;n<nc.length;n++){var r=nc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(li!==null&&xa(li,t),ui!==null&&xa(ui,t),ci!==null&&xa(ci,t),wl.forEach(e),El.forEach(e),n=0;n<Jr.length;n++)r=Jr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jr.length&&(n=Jr[0],n.blockedOn===null);)cI(n),n.blockedOn===null&&Jr.shift()}var po=Br.ReactCurrentBatchConfig,Xc=!0;function B1(t,e,n,r){var i=we,s=po.transition;po.transition=null;try{we=1,Cg(t,e,n,r)}finally{we=i,po.transition=s}}function z1(t,e,n,r){var i=we,s=po.transition;po.transition=null;try{we=4,Cg(t,e,n,r)}finally{we=i,po.transition=s}}function Cg(t,e,n,r){if(Xc){var i=qp(t,e,n,r);if(i===null)$f(t,e,r,Jc,n),nw(t,r);else if(j1(i,t,e,n,r))r.stopPropagation();else if(nw(t,r),e&4&&-1<F1.indexOf(t)){for(;i!==null;){var s=au(i);if(s!==null&&oI(s),s=qp(t,e,n,r),s===null&&$f(t,e,r,Jc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $f(t,e,r,null,n)}}var Jc=null;function qp(t,e,n,r){if(Jc=null,t=Eg(r),t=Qi(t),t!==null)if(e=Rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=JT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jc=t,null}function hI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x1()){case Tg:return 1;case nI:return 4;case Qc:case P1:return 16;case rI:return 536870912;default:return 16}default:return 16}}var ri=null,kg=null,kc=null;function dI(){if(kc)return kc;var t,e=kg,n=e.length,r,i="value"in ri?ri.value:ri.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return kc=i.slice(t,1<r?1-r:void 0)}function Rc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rc(){return!0}function iw(){return!1}function pn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rc:iw,this.isPropagationStopped=iw,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rc)},persist:function(){},isPersistent:rc}),e}var Xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rg=pn(Xo),ou=Ve({},Xo,{view:0,detail:0}),W1=pn(ou),Lf,Mf,Pa,Zh=Ve({},ou,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ag,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pa&&(Pa&&t.type==="mousemove"?(Lf=t.screenX-Pa.screenX,Mf=t.screenY-Pa.screenY):Mf=Lf=0,Pa=t),Lf)},movementY:function(t){return"movementY"in t?t.movementY:Mf}}),sw=pn(Zh),$1=Ve({},Zh,{dataTransfer:0}),H1=pn($1),q1=Ve({},ou,{relatedTarget:0}),Vf=pn(q1),G1=Ve({},Xo,{animationName:0,elapsedTime:0,pseudoElement:0}),K1=pn(G1),Q1=Ve({},Xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Y1=pn(Q1),X1=Ve({},Xo,{data:0}),ow=pn(X1),J1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eP[t])?!!e[t]:!1}function Ag(){return tP}var nP=Ve({},ou,{key:function(t){if(t.key){var e=J1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ag,charCode:function(t){return t.type==="keypress"?Rc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rP=pn(nP),iP=Ve({},Zh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),aw=pn(iP),sP=Ve({},ou,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ag}),oP=pn(sP),aP=Ve({},Xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),lP=pn(aP),uP=Ve({},Zh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cP=pn(uP),hP=[9,13,27,32],xg=Pr&&"CompositionEvent"in window,Za=null;Pr&&"documentMode"in document&&(Za=document.documentMode);var dP=Pr&&"TextEvent"in window&&!Za,fI=Pr&&(!xg||Za&&8<Za&&11>=Za),lw=" ",uw=!1;function pI(t,e){switch(t){case"keyup":return hP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function fP(t,e){switch(t){case"compositionend":return mI(e);case"keypress":return e.which!==32?null:(uw=!0,lw);case"textInput":return t=e.data,t===lw&&uw?null:t;default:return null}}function pP(t,e){if(Js)return t==="compositionend"||!xg&&pI(t,e)?(t=dI(),kc=kg=ri=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fI&&e.locale!=="ko"?null:e.data;default:return null}}var mP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mP[t.type]:e==="textarea"}function gI(t,e,n,r){GT(r),e=Zc(e,"onChange"),0<e.length&&(n=new Rg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var el=null,Il=null;function gP(t){RI(t,0)}function ed(t){var e=to(t);if(UT(e))return t}function _P(t,e){if(t==="change")return e}var _I=!1;if(Pr){var Ff;if(Pr){var jf="oninput"in document;if(!jf){var hw=document.createElement("div");hw.setAttribute("oninput","return;"),jf=typeof hw.oninput=="function"}Ff=jf}else Ff=!1;_I=Ff&&(!document.documentMode||9<document.documentMode)}function dw(){el&&(el.detachEvent("onpropertychange",yI),Il=el=null)}function yI(t){if(t.propertyName==="value"&&ed(Il)){var e=[];gI(e,Il,t,Eg(t)),XT(gP,e)}}function yP(t,e,n){t==="focusin"?(dw(),el=e,Il=n,el.attachEvent("onpropertychange",yI)):t==="focusout"&&dw()}function vP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ed(Il)}function wP(t,e){if(t==="click")return ed(e)}function EP(t,e){if(t==="input"||t==="change")return ed(e)}function TP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:TP;function Sl(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ap.call(e,i)||!zn(t[i],e[i]))return!1}return!0}function fw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pw(t,e){var n=fw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fw(n)}}function vI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wI(){for(var t=window,e=qc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qc(t.document)}return e}function Pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IP(t){var e=wI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vI(n.ownerDocument.documentElement,n)){if(r!==null&&Pg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=pw(n,s);var o=pw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SP=Pr&&"documentMode"in document&&11>=document.documentMode,Zs=null,Gp=null,tl=null,Kp=!1;function mw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kp||Zs==null||Zs!==qc(r)||(r=Zs,"selectionStart"in r&&Pg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tl&&Sl(tl,r)||(tl=r,r=Zc(Gp,"onSelect"),0<r.length&&(e=new Rg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zs)))}function ic(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var eo={animationend:ic("Animation","AnimationEnd"),animationiteration:ic("Animation","AnimationIteration"),animationstart:ic("Animation","AnimationStart"),transitionend:ic("Transition","TransitionEnd")},Uf={},EI={};Pr&&(EI=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function td(t){if(Uf[t])return Uf[t];if(!eo[t])return t;var e=eo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in EI)return Uf[t]=e[n];return t}var TI=td("animationend"),II=td("animationiteration"),SI=td("animationstart"),CI=td("transitionend"),kI=new Map,gw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pi(t,e){kI.set(t,e),ks(e,[t])}for(var Bf=0;Bf<gw.length;Bf++){var zf=gw[Bf],CP=zf.toLowerCase(),kP=zf[0].toUpperCase()+zf.slice(1);Pi(CP,"on"+kP)}Pi(TI,"onAnimationEnd");Pi(II,"onAnimationIteration");Pi(SI,"onAnimationStart");Pi("dblclick","onDoubleClick");Pi("focusin","onFocus");Pi("focusout","onBlur");Pi(CI,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);ks("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ks("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ks("onBeforeInput",["compositionend","keypress","textInput","paste"]);ks("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ks("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ks("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function _w(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,C1(r,e,void 0,t),t.currentTarget=null}function RI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;_w(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;_w(i,a,c),s=u}}}if(Kc)throw t=Wp,Kc=!1,Wp=null,t}function xe(t,e){var n=e[Zp];n===void 0&&(n=e[Zp]=new Set);var r=t+"__bubble";n.has(r)||(AI(e,t,2,!1),n.add(r))}function Wf(t,e,n){var r=0;e&&(r|=4),AI(n,t,r,e)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Cl(t){if(!t[sc]){t[sc]=!0,LT.forEach(function(n){n!=="selectionchange"&&(RP.has(n)||Wf(n,!1,t),Wf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sc]||(e[sc]=!0,Wf("selectionchange",!1,e))}}function AI(t,e,n,r){switch(hI(e)){case 1:var i=B1;break;case 4:i=z1;break;default:i=Cg}n=i.bind(null,e,n,t),i=void 0,!zp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $f(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Qi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}XT(function(){var c=s,h=Eg(n),f=[];e:{var p=kI.get(t);if(p!==void 0){var _=Rg,E=t;switch(t){case"keypress":if(Rc(n)===0)break e;case"keydown":case"keyup":_=rP;break;case"focusin":E="focus",_=Vf;break;case"focusout":E="blur",_=Vf;break;case"beforeblur":case"afterblur":_=Vf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=sw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=H1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=oP;break;case TI:case II:case SI:_=K1;break;case CI:_=lP;break;case"scroll":_=W1;break;case"wheel":_=cP;break;case"copy":case"cut":case"paste":_=Y1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=aw}var A=(e&4)!==0,N=!A&&t==="scroll",I=A?p!==null?p+"Capture":null:p;A=[];for(var T=c,C;T!==null;){C=T;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,I!==null&&(O=vl(T,I),O!=null&&A.push(kl(T,O,C)))),N)break;T=T.return}0<A.length&&(p=new _(p,E,null,n,h),f.push({event:p,listeners:A}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==Up&&(E=n.relatedTarget||n.fromElement)&&(Qi(E)||E[Nr]))break e;if((_||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,_?(E=n.relatedTarget||n.toElement,_=c,E=E?Qi(E):null,E!==null&&(N=Rs(E),E!==N||E.tag!==5&&E.tag!==6)&&(E=null)):(_=null,E=c),_!==E)){if(A=sw,O="onMouseLeave",I="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(A=aw,O="onPointerLeave",I="onPointerEnter",T="pointer"),N=_==null?p:to(_),C=E==null?p:to(E),p=new A(O,T+"leave",_,n,h),p.target=N,p.relatedTarget=C,O=null,Qi(h)===c&&(A=new A(I,T+"enter",E,n,h),A.target=C,A.relatedTarget=N,O=A),N=O,_&&E)t:{for(A=_,I=E,T=0,C=A;C;C=$s(C))T++;for(C=0,O=I;O;O=$s(O))C++;for(;0<T-C;)A=$s(A),T--;for(;0<C-T;)I=$s(I),C--;for(;T--;){if(A===I||I!==null&&A===I.alternate)break t;A=$s(A),I=$s(I)}A=null}else A=null;_!==null&&yw(f,p,_,A,!1),E!==null&&N!==null&&yw(f,N,E,A,!0)}}e:{if(p=c?to(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var V=_P;else if(cw(p))if(_I)V=EP;else{V=vP;var j=yP}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(V=wP);if(V&&(V=V(t,c))){gI(f,V,n,h);break e}j&&j(t,p,c),t==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&Lp(p,"number",p.value)}switch(j=c?to(c):window,t){case"focusin":(cw(j)||j.contentEditable==="true")&&(Zs=j,Gp=c,tl=null);break;case"focusout":tl=Gp=Zs=null;break;case"mousedown":Kp=!0;break;case"contextmenu":case"mouseup":case"dragend":Kp=!1,mw(f,n,h);break;case"selectionchange":if(SP)break;case"keydown":case"keyup":mw(f,n,h)}var k;if(xg)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Js?pI(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(fI&&n.locale!=="ko"&&(Js||v!=="onCompositionStart"?v==="onCompositionEnd"&&Js&&(k=dI()):(ri=h,kg="value"in ri?ri.value:ri.textContent,Js=!0)),j=Zc(c,v),0<j.length&&(v=new ow(v,t,null,n,h),f.push({event:v,listeners:j}),k?v.data=k:(k=mI(n),k!==null&&(v.data=k)))),(k=dP?fP(t,n):pP(t,n))&&(c=Zc(c,"onBeforeInput"),0<c.length&&(h=new ow("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=k))}RI(f,e)})}function kl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vl(t,n),s!=null&&r.unshift(kl(t,s,i)),s=vl(t,e),s!=null&&r.push(kl(t,s,i))),t=t.return}return r}function $s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=vl(n,s),u!=null&&o.unshift(kl(n,u,a))):i||(u=vl(n,s),u!=null&&o.push(kl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AP=/\r\n?/g,xP=/\u0000|\uFFFD/g;function vw(t){return(typeof t=="string"?t:""+t).replace(AP,`
`).replace(xP,"")}function oc(t,e,n){if(e=vw(e),vw(t)!==e&&n)throw Error(U(425))}function eh(){}var Qp=null,Yp=null;function Xp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jp=typeof setTimeout=="function"?setTimeout:void 0,PP=typeof clearTimeout=="function"?clearTimeout:void 0,ww=typeof Promise=="function"?Promise:void 0,NP=typeof queueMicrotask=="function"?queueMicrotask:typeof ww<"u"?function(t){return ww.resolve(null).then(t).catch(bP)}:Jp;function bP(t){setTimeout(function(){throw t})}function Hf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Tl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Tl(e)}function hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ew(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Jo,Rl="__reactProps$"+Jo,Nr="__reactContainer$"+Jo,Zp="__reactEvents$"+Jo,DP="__reactListeners$"+Jo,OP="__reactHandles$"+Jo;function Qi(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nr]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ew(t);t!==null;){if(n=t[Qn])return n;t=Ew(t)}return e}t=n,n=t.parentNode}return null}function au(t){return t=t[Qn]||t[Nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function to(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function nd(t){return t[Rl]||null}var em=[],no=-1;function Ni(t){return{current:t}}function Ne(t){0>no||(t.current=em[no],em[no]=null,no--)}function Re(t,e){no++,em[no]=t.current,t.current=e}var Ei={},Vt=Ni(Ei),Jt=Ni(!1),ls=Ei;function So(t,e){var n=t.type.contextTypes;if(!n)return Ei;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Zt(t){return t=t.childContextTypes,t!=null}function th(){Ne(Jt),Ne(Vt)}function Tw(t,e,n){if(Vt.current!==Ei)throw Error(U(168));Re(Vt,e),Re(Jt,n)}function xI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,y1(t)||"Unknown",i));return Ve({},n,r)}function nh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ei,ls=Vt.current,Re(Vt,t),Re(Jt,Jt.current),!0}function Iw(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=xI(t,e,ls),r.__reactInternalMemoizedMergedChildContext=t,Ne(Jt),Ne(Vt),Re(Vt,t)):Ne(Jt),Re(Jt,n)}var gr=null,rd=!1,qf=!1;function PI(t){gr===null?gr=[t]:gr.push(t)}function LP(t){rd=!0,PI(t)}function bi(){if(!qf&&gr!==null){qf=!0;var t=0,e=we;try{var n=gr;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,rd=!1}catch(i){throw gr!==null&&(gr=gr.slice(t+1)),tI(Tg,bi),i}finally{we=e,qf=!1}}return null}var ro=[],io=0,rh=null,ih=0,_n=[],yn=0,us=null,yr=1,vr="";function $i(t,e){ro[io++]=ih,ro[io++]=rh,rh=t,ih=e}function NI(t,e,n){_n[yn++]=yr,_n[yn++]=vr,_n[yn++]=us,us=t;var r=yr;t=vr;var i=32-Vn(r)-1;r&=~(1<<i),n+=1;var s=32-Vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yr=1<<32-Vn(e)+i|n<<i|r,vr=s+t}else yr=1<<s|n<<i|r,vr=t}function Ng(t){t.return!==null&&($i(t,1),NI(t,1,0))}function bg(t){for(;t===rh;)rh=ro[--io],ro[io]=null,ih=ro[--io],ro[io]=null;for(;t===us;)us=_n[--yn],_n[yn]=null,vr=_n[--yn],_n[yn]=null,yr=_n[--yn],_n[yn]=null}var cn=null,ln=null,be=!1,Dn=null;function bI(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,ln=hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=us!==null?{id:yr,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,ln=null,!0):!1;default:return!1}}function tm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nm(t){if(be){var e=ln;if(e){var n=e;if(!Sw(t,e)){if(tm(t))throw Error(U(418));e=hi(n.nextSibling);var r=cn;e&&Sw(t,e)?bI(r,n):(t.flags=t.flags&-4097|2,be=!1,cn=t)}}else{if(tm(t))throw Error(U(418));t.flags=t.flags&-4097|2,be=!1,cn=t}}}function Cw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function ac(t){if(t!==cn)return!1;if(!be)return Cw(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xp(t.type,t.memoizedProps)),e&&(e=ln)){if(tm(t))throw DI(),Error(U(418));for(;e;)bI(t,e),e=hi(e.nextSibling)}if(Cw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=cn?hi(t.stateNode.nextSibling):null;return!0}function DI(){for(var t=ln;t;)t=hi(t.nextSibling)}function Co(){ln=cn=null,be=!1}function Dg(t){Dn===null?Dn=[t]:Dn.push(t)}var MP=Br.ReactCurrentBatchConfig;function Na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function lc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kw(t){var e=t._init;return e(t._payload)}function OI(t){function e(I,T){if(t){var C=I.deletions;C===null?(I.deletions=[T],I.flags|=16):C.push(T)}}function n(I,T){if(!t)return null;for(;T!==null;)e(I,T),T=T.sibling;return null}function r(I,T){for(I=new Map;T!==null;)T.key!==null?I.set(T.key,T):I.set(T.index,T),T=T.sibling;return I}function i(I,T){return I=mi(I,T),I.index=0,I.sibling=null,I}function s(I,T,C){return I.index=C,t?(C=I.alternate,C!==null?(C=C.index,C<T?(I.flags|=2,T):C):(I.flags|=2,T)):(I.flags|=1048576,T)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,T,C,O){return T===null||T.tag!==6?(T=Zf(C,I.mode,O),T.return=I,T):(T=i(T,C),T.return=I,T)}function u(I,T,C,O){var V=C.type;return V===Xs?h(I,T,C.props.children,O,C.key):T!==null&&(T.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Yr&&kw(V)===T.type)?(O=i(T,C.props),O.ref=Na(I,T,C),O.return=I,O):(O=Oc(C.type,C.key,C.props,null,I.mode,O),O.ref=Na(I,T,C),O.return=I,O)}function c(I,T,C,O){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=ep(C,I.mode,O),T.return=I,T):(T=i(T,C.children||[]),T.return=I,T)}function h(I,T,C,O,V){return T===null||T.tag!==7?(T=ss(C,I.mode,O,V),T.return=I,T):(T=i(T,C),T.return=I,T)}function f(I,T,C){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Zf(""+T,I.mode,C),T.return=I,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Xu:return C=Oc(T.type,T.key,T.props,null,I.mode,C),C.ref=Na(I,null,T),C.return=I,C;case Ys:return T=ep(T,I.mode,C),T.return=I,T;case Yr:var O=T._init;return f(I,O(T._payload),C)}if(Wa(T)||ka(T))return T=ss(T,I.mode,C,null),T.return=I,T;lc(I,T)}return null}function p(I,T,C,O){var V=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return V!==null?null:a(I,T,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Xu:return C.key===V?u(I,T,C,O):null;case Ys:return C.key===V?c(I,T,C,O):null;case Yr:return V=C._init,p(I,T,V(C._payload),O)}if(Wa(C)||ka(C))return V!==null?null:h(I,T,C,O,null);lc(I,C)}return null}function _(I,T,C,O,V){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(C)||null,a(T,I,""+O,V);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Xu:return I=I.get(O.key===null?C:O.key)||null,u(T,I,O,V);case Ys:return I=I.get(O.key===null?C:O.key)||null,c(T,I,O,V);case Yr:var j=O._init;return _(I,T,C,j(O._payload),V)}if(Wa(O)||ka(O))return I=I.get(C)||null,h(T,I,O,V,null);lc(T,O)}return null}function E(I,T,C,O){for(var V=null,j=null,k=T,v=T=0,S=null;k!==null&&v<C.length;v++){k.index>v?(S=k,k=null):S=k.sibling;var w=p(I,k,C[v],O);if(w===null){k===null&&(k=S);break}t&&k&&w.alternate===null&&e(I,k),T=s(w,T,v),j===null?V=w:j.sibling=w,j=w,k=S}if(v===C.length)return n(I,k),be&&$i(I,v),V;if(k===null){for(;v<C.length;v++)k=f(I,C[v],O),k!==null&&(T=s(k,T,v),j===null?V=k:j.sibling=k,j=k);return be&&$i(I,v),V}for(k=r(I,k);v<C.length;v++)S=_(k,I,v,C[v],O),S!==null&&(t&&S.alternate!==null&&k.delete(S.key===null?v:S.key),T=s(S,T,v),j===null?V=S:j.sibling=S,j=S);return t&&k.forEach(function(x){return e(I,x)}),be&&$i(I,v),V}function A(I,T,C,O){var V=ka(C);if(typeof V!="function")throw Error(U(150));if(C=V.call(C),C==null)throw Error(U(151));for(var j=V=null,k=T,v=T=0,S=null,w=C.next();k!==null&&!w.done;v++,w=C.next()){k.index>v?(S=k,k=null):S=k.sibling;var x=p(I,k,w.value,O);if(x===null){k===null&&(k=S);break}t&&k&&x.alternate===null&&e(I,k),T=s(x,T,v),j===null?V=x:j.sibling=x,j=x,k=S}if(w.done)return n(I,k),be&&$i(I,v),V;if(k===null){for(;!w.done;v++,w=C.next())w=f(I,w.value,O),w!==null&&(T=s(w,T,v),j===null?V=w:j.sibling=w,j=w);return be&&$i(I,v),V}for(k=r(I,k);!w.done;v++,w=C.next())w=_(k,I,v,w.value,O),w!==null&&(t&&w.alternate!==null&&k.delete(w.key===null?v:w.key),T=s(w,T,v),j===null?V=w:j.sibling=w,j=w);return t&&k.forEach(function(P){return e(I,P)}),be&&$i(I,v),V}function N(I,T,C,O){if(typeof C=="object"&&C!==null&&C.type===Xs&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Xu:e:{for(var V=C.key,j=T;j!==null;){if(j.key===V){if(V=C.type,V===Xs){if(j.tag===7){n(I,j.sibling),T=i(j,C.props.children),T.return=I,I=T;break e}}else if(j.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Yr&&kw(V)===j.type){n(I,j.sibling),T=i(j,C.props),T.ref=Na(I,j,C),T.return=I,I=T;break e}n(I,j);break}else e(I,j);j=j.sibling}C.type===Xs?(T=ss(C.props.children,I.mode,O,C.key),T.return=I,I=T):(O=Oc(C.type,C.key,C.props,null,I.mode,O),O.ref=Na(I,T,C),O.return=I,I=O)}return o(I);case Ys:e:{for(j=C.key;T!==null;){if(T.key===j)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){n(I,T.sibling),T=i(T,C.children||[]),T.return=I,I=T;break e}else{n(I,T);break}else e(I,T);T=T.sibling}T=ep(C,I.mode,O),T.return=I,I=T}return o(I);case Yr:return j=C._init,N(I,T,j(C._payload),O)}if(Wa(C))return E(I,T,C,O);if(ka(C))return A(I,T,C,O);lc(I,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,T!==null&&T.tag===6?(n(I,T.sibling),T=i(T,C),T.return=I,I=T):(n(I,T),T=Zf(C,I.mode,O),T.return=I,I=T),o(I)):n(I,T)}return N}var ko=OI(!0),LI=OI(!1),sh=Ni(null),oh=null,so=null,Og=null;function Lg(){Og=so=oh=null}function Mg(t){var e=sh.current;Ne(sh),t._currentValue=e}function rm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mo(t,e){oh=t,Og=so=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(Og!==t)if(t={context:t,memoizedValue:e,next:null},so===null){if(oh===null)throw Error(U(308));so=t,oh.dependencies={lanes:0,firstContext:t}}else so=so.next=t;return e}var Yi=null;function Vg(t){Yi===null?Yi=[t]:Yi.push(t)}function MI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Vg(e)):(n.next=i.next,i.next=n),e.interleaved=n,br(t,r)}function br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xr=!1;function Fg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function VI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function di(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,br(t,n)}return i=r.interleaved,i===null?(e.next=e,Vg(r)):(e.next=i.next,i.next=e),r.interleaved=e,br(t,n)}function Ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ig(t,n)}}function Rw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ah(t,e,n,r){var i=t.updateQueue;Xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,A=a;switch(p=e,_=n,A.tag){case 1:if(E=A.payload,typeof E=="function"){f=E.call(_,f,p);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=A.payload,p=typeof E=="function"?E.call(_,f,p):E,p==null)break e;f=Ve({},f,p);break e;case 2:Xr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=f):h=h.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hs|=o,t.lanes=o,t.memoizedState=f}}function Aw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var lu={},Jn=Ni(lu),Al=Ni(lu),xl=Ni(lu);function Xi(t){if(t===lu)throw Error(U(174));return t}function jg(t,e){switch(Re(xl,e),Re(Al,t),Re(Jn,lu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vp(e,t)}Ne(Jn),Re(Jn,e)}function Ro(){Ne(Jn),Ne(Al),Ne(xl)}function FI(t){Xi(xl.current);var e=Xi(Jn.current),n=Vp(e,t.type);e!==n&&(Re(Al,t),Re(Jn,n))}function Ug(t){Al.current===t&&(Ne(Jn),Ne(Al))}var De=Ni(0);function lh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gf=[];function Bg(){for(var t=0;t<Gf.length;t++)Gf[t]._workInProgressVersionPrimary=null;Gf.length=0}var xc=Br.ReactCurrentDispatcher,Kf=Br.ReactCurrentBatchConfig,cs=0,Me=null,rt=null,dt=null,uh=!1,nl=!1,Pl=0,VP=0;function Nt(){throw Error(U(321))}function zg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Wg(t,e,n,r,i,s){if(cs=s,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xc.current=t===null||t.memoizedState===null?BP:zP,t=n(r,i),nl){s=0;do{if(nl=!1,Pl=0,25<=s)throw Error(U(301));s+=1,dt=rt=null,e.updateQueue=null,xc.current=WP,t=n(r,i)}while(nl)}if(xc.current=ch,e=rt!==null&&rt.next!==null,cs=0,dt=rt=Me=null,uh=!1,e)throw Error(U(300));return t}function $g(){var t=Pl!==0;return Pl=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Me.memoizedState=dt=t:dt=dt.next=t,dt}function In(){if(rt===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=dt===null?Me.memoizedState:dt.next;if(e!==null)dt=e,rt=t;else{if(t===null)throw Error(U(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},dt===null?Me.memoizedState=dt=t:dt=dt.next=t}return dt}function Nl(t,e){return typeof e=="function"?e(t):e}function Qf(t){var e=In(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=rt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((cs&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Me.lanes|=h,hs|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,zn(r,e.memoizedState)||(Yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Me.lanes|=s,hs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yf(t){var e=In(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zn(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function jI(){}function UI(t,e){var n=Me,r=In(),i=e(),s=!zn(r.memoizedState,i);if(s&&(r.memoizedState=i,Yt=!0),r=r.queue,Hg(WI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,bl(9,zI.bind(null,n,r,i,e),void 0,null),gt===null)throw Error(U(349));cs&30||BI(n,e,i)}return i}function BI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zI(t,e,n,r){e.value=n,e.getSnapshot=r,$I(e)&&HI(t)}function WI(t,e,n){return n(function(){$I(e)&&HI(t)})}function $I(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function HI(t){var e=br(t,1);e!==null&&Fn(e,t,1,-1)}function xw(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nl,lastRenderedState:t},e.queue=t,t=t.dispatch=UP.bind(null,Me,t),[e.memoizedState,t]}function bl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qI(){return In().memoizedState}function Pc(t,e,n,r){var i=Kn();Me.flags|=t,i.memoizedState=bl(1|e,n,void 0,r===void 0?null:r)}function id(t,e,n,r){var i=In();r=r===void 0?null:r;var s=void 0;if(rt!==null){var o=rt.memoizedState;if(s=o.destroy,r!==null&&zg(r,o.deps)){i.memoizedState=bl(e,n,s,r);return}}Me.flags|=t,i.memoizedState=bl(1|e,n,s,r)}function Pw(t,e){return Pc(8390656,8,t,e)}function Hg(t,e){return id(2048,8,t,e)}function GI(t,e){return id(4,2,t,e)}function KI(t,e){return id(4,4,t,e)}function QI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function YI(t,e,n){return n=n!=null?n.concat([t]):null,id(4,4,QI.bind(null,e,t),n)}function qg(){}function XI(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function JI(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ZI(t,e,n){return cs&21?(zn(n,e)||(n=iI(),Me.lanes|=n,hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function FP(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=Kf.transition;Kf.transition={};try{t(!1),e()}finally{we=n,Kf.transition=r}}function eS(){return In().memoizedState}function jP(t,e,n){var r=pi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tS(t))nS(e,n);else if(n=MI(t,e,n,r),n!==null){var i=zt();Fn(n,t,r,i),rS(n,e,r)}}function UP(t,e,n){var r=pi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tS(t))nS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,zn(a,o)){var u=e.interleaved;u===null?(i.next=i,Vg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=MI(t,e,i,r),n!==null&&(i=zt(),Fn(n,t,r,i),rS(n,e,r))}}function tS(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function nS(t,e){nl=uh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ig(t,n)}}var ch={readContext:Tn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},BP={readContext:Tn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:Pw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pc(4194308,4,QI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pc(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jP.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:xw,useDebugValue:qg,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=xw(!1),e=t[0];return t=FP.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,i=Kn();if(be){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),gt===null)throw Error(U(349));cs&30||BI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Pw(WI.bind(null,r,s,t),[t]),r.flags|=2048,bl(9,zI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=gt.identifierPrefix;if(be){var n=vr,r=yr;n=(r&~(1<<32-Vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zP={readContext:Tn,useCallback:XI,useContext:Tn,useEffect:Hg,useImperativeHandle:YI,useInsertionEffect:GI,useLayoutEffect:KI,useMemo:JI,useReducer:Qf,useRef:qI,useState:function(){return Qf(Nl)},useDebugValue:qg,useDeferredValue:function(t){var e=In();return ZI(e,rt.memoizedState,t)},useTransition:function(){var t=Qf(Nl)[0],e=In().memoizedState;return[t,e]},useMutableSource:jI,useSyncExternalStore:UI,useId:eS,unstable_isNewReconciler:!1},WP={readContext:Tn,useCallback:XI,useContext:Tn,useEffect:Hg,useImperativeHandle:YI,useInsertionEffect:GI,useLayoutEffect:KI,useMemo:JI,useReducer:Yf,useRef:qI,useState:function(){return Yf(Nl)},useDebugValue:qg,useDeferredValue:function(t){var e=In();return rt===null?e.memoizedState=t:ZI(e,rt.memoizedState,t)},useTransition:function(){var t=Yf(Nl)[0],e=In().memoizedState;return[t,e]},useMutableSource:jI,useSyncExternalStore:UI,useId:eS,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function im(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sd={isMounted:function(t){return(t=t._reactInternals)?Rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=zt(),i=pi(t),s=Sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=di(t,s,i),e!==null&&(Fn(e,t,i,r),Ac(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=zt(),i=pi(t),s=Sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=di(t,s,i),e!==null&&(Fn(e,t,i,r),Ac(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),r=pi(t),i=Sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=di(t,i,r),e!==null&&(Fn(e,t,r,n),Ac(e,t,r))}};function Nw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Sl(n,r)||!Sl(i,s):!0}function iS(t,e,n){var r=!1,i=Ei,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(i=Zt(e)?ls:Vt.current,r=e.contextTypes,s=(r=r!=null)?So(t,i):Ei),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&sd.enqueueReplaceState(e,e.state,null)}function sm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Fg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Tn(s):(s=Zt(e)?ls:Vt.current,i.context=So(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(im(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&sd.enqueueReplaceState(i,i.state,null),ah(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",r=e;do n+=_1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function om(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $P=typeof WeakMap=="function"?WeakMap:Map;function sS(t,e,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dh||(dh=!0,gm=r),om(t,e)},n}function oS(t,e,n){n=Sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){om(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){om(t,e),typeof r!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $P;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=iN.bind(null,t,e,n),e.then(t,t))}function Ow(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sr(-1,1),e.tag=2,di(n,e,1))),n.lanes|=1),t)}var HP=Br.ReactCurrentOwner,Yt=!1;function Ut(t,e,n,r){e.child=t===null?LI(e,null,n,r):ko(e,t.child,n,r)}function Mw(t,e,n,r,i){n=n.render;var s=e.ref;return mo(e,i),r=Wg(t,e,n,r,s,i),n=$g(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dr(t,e,i)):(be&&n&&Ng(e),e.flags|=1,Ut(t,e,r,i),e.child)}function Vw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!e_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,aS(t,e,s,r,i)):(t=Oc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Sl,n(o,r)&&t.ref===e.ref)return Dr(t,e,i)}return e.flags|=1,t=mi(s,r),t.ref=e.ref,t.return=e,e.child=t}function aS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Sl(s,r)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,Dr(t,e,i)}return am(t,e,n,r,i)}function lS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(ao,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(ao,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Re(ao,an),an|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Re(ao,an),an|=r;return Ut(t,e,i,n),e.child}function uS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function am(t,e,n,r,i){var s=Zt(n)?ls:Vt.current;return s=So(e,s),mo(e,i),n=Wg(t,e,n,r,s,i),r=$g(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dr(t,e,i)):(be&&r&&Ng(e),e.flags|=1,Ut(t,e,n,i),e.child)}function Fw(t,e,n,r,i){if(Zt(n)){var s=!0;nh(e)}else s=!1;if(mo(e,i),e.stateNode===null)Nc(t,e),iS(e,n,r),sm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Tn(c):(c=Zt(n)?ls:Vt.current,c=So(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&bw(e,o,r,c),Xr=!1;var p=e.memoizedState;o.state=p,ah(e,r,o,i),u=e.memoizedState,a!==r||p!==u||Jt.current||Xr?(typeof h=="function"&&(im(e,n,h,r),u=e.memoizedState),(a=Xr||Nw(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,VI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tn(u):(u=Zt(n)?ls:Vt.current,u=So(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&bw(e,o,r,u),Xr=!1,p=e.memoizedState,o.state=p,ah(e,r,o,i);var E=e.memoizedState;a!==f||p!==E||Jt.current||Xr?(typeof _=="function"&&(im(e,n,_,r),E=e.memoizedState),(c=Xr||Nw(e,n,c,r,p,E,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return lm(t,e,n,r,s,i)}function lm(t,e,n,r,i,s){uS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Iw(e,n,!1),Dr(t,e,s);r=e.stateNode,HP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ko(e,t.child,null,s),e.child=ko(e,null,a,s)):Ut(t,e,a,s),e.memoizedState=r.state,i&&Iw(e,n,!0),e.child}function cS(t){var e=t.stateNode;e.pendingContext?Tw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tw(t,e.context,!1),jg(t,e.containerInfo)}function jw(t,e,n,r,i){return Co(),Dg(i),e.flags|=256,Ut(t,e,n,r),e.child}var um={dehydrated:null,treeContext:null,retryLane:0};function cm(t){return{baseLanes:t,cachePool:null,transitions:null}}function hS(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re(De,i&1),t===null)return nm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ld(o,r,0,null),t=ss(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cm(n),e.memoizedState=um,t):Gg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mi(a,s):(s=ss(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?cm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=um,r}return s=t.child,t=s.sibling,r=mi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gg(t,e){return e=ld({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uc(t,e,n,r){return r!==null&&Dg(r),ko(e,t.child,null,n),t=Gg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xf(Error(U(422))),uc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ld({mode:"visible",children:r.children},i,0,null),s=ss(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ko(e,t.child,null,o),e.child.memoizedState=cm(o),e.memoizedState=um,s);if(!(e.mode&1))return uc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=Xf(s,r,void 0),uc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Yt||a){if(r=gt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,br(t,i),Fn(r,t,i,-1))}return Zg(),r=Xf(Error(U(421))),uc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ln=hi(i.nextSibling),cn=e,be=!0,Dn=null,t!==null&&(_n[yn++]=yr,_n[yn++]=vr,_n[yn++]=us,yr=t.id,vr=t.overflow,us=e),e=Gg(e,r.children),e.flags|=4096,e)}function Uw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rm(t.return,e,n)}function Jf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uw(t,n,e);else if(t.tag===19)Uw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&lh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Jf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&lh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Jf(e,!0,n,null,s);break;case"together":Jf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=mi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GP(t,e,n){switch(e.tag){case 3:cS(e),Co();break;case 5:FI(e);break;case 1:Zt(e.type)&&nh(e);break;case 4:jg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(sh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?hS(t,e,n):(Re(De,De.current&1),t=Dr(t,e,n),t!==null?t.sibling:null);Re(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,lS(t,e,n)}return Dr(t,e,n)}var fS,hm,pS,mS;fS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hm=function(){};pS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xi(Jn.current);var s=null;switch(n){case"input":i=Dp(t,i),r=Dp(t,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=Mp(t,i),r=Mp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=eh)}Fp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_l.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_l.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&xe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};mS=function(t,e,n,r){n!==r&&(e.flags|=4)};function ba(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function KP(t,e,n){var r=e.pendingProps;switch(bg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return Zt(e.type)&&th(),bt(e),null;case 3:return r=e.stateNode,Ro(),Ne(Jt),Ne(Vt),Bg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ac(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(vm(Dn),Dn=null))),hm(t,e),bt(e),null;case 5:Ug(e);var i=Xi(xl.current);if(n=e.type,t!==null&&e.stateNode!=null)pS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return bt(e),null}if(t=Xi(Jn.current),ac(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qn]=e,r[Rl]=s,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Ha.length;i++)xe(Ha[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Qv(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":Xv(r,s),xe("invalid",r)}Fp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&oc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oc(r.textContent,a,t),i=["children",""+a]):_l.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Ju(r),Yv(r,s,!0);break;case"textarea":Ju(r),Jv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=eh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=WT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qn]=e,t[Rl]=r,fS(t,e,!1,!1),e.stateNode=t;e:{switch(o=jp(n,r),n){case"dialog":xe("cancel",t),xe("close",t),i=r;break;case"iframe":case"object":case"embed":xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ha.length;i++)xe(Ha[i],t);i=r;break;case"source":xe("error",t),i=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),i=r;break;case"details":xe("toggle",t),i=r;break;case"input":Qv(t,r),i=Dp(t,r),xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),xe("invalid",t);break;case"textarea":Xv(t,r),i=Mp(t,r),xe("invalid",t);break;default:i=r}Fp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?qT(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$T(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&yl(t,u):typeof u=="number"&&yl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_l.hasOwnProperty(s)?u!=null&&s==="onScroll"&&xe("scroll",t):u!=null&&_g(t,s,u,o))}switch(n){case"input":Ju(t),Yv(t,r,!1);break;case"textarea":Ju(t),Jv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?co(t,!!r.multiple,s,!1):r.defaultValue!=null&&co(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=eh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return bt(e),null;case 6:if(t&&e.stateNode!=null)mS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Xi(xl.current),Xi(Jn.current),ac(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qn]=e,(s=r.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:oc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qn]=e,e.stateNode=r}return bt(e),null;case 13:if(Ne(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&ln!==null&&e.mode&1&&!(e.flags&128))DI(),Co(),e.flags|=98560,s=!1;else if(s=ac(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Qn]=e}else Co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bt(e),s=!1}else Dn!==null&&(vm(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?st===0&&(st=3):Zg())),e.updateQueue!==null&&(e.flags|=4),bt(e),null);case 4:return Ro(),hm(t,e),t===null&&Cl(e.stateNode.containerInfo),bt(e),null;case 10:return Mg(e.type._context),bt(e),null;case 17:return Zt(e.type)&&th(),bt(e),null;case 19:if(Ne(De),s=e.memoizedState,s===null)return bt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ba(s,!1);else{if(st!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lh(t),o!==null){for(e.flags|=128,ba(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>xo&&(e.flags|=128,r=!0,ba(s,!1),e.lanes=4194304)}else{if(!r)if(t=lh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ba(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return bt(e),null}else 2*qe()-s.renderingStartTime>xo&&n!==1073741824&&(e.flags|=128,r=!0,ba(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=De.current,Re(De,r?n&1|2:n&1),e):(bt(e),null);case 22:case 23:return Jg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?an&1073741824&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function QP(t,e){switch(bg(e),e.tag){case 1:return Zt(e.type)&&th(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ro(),Ne(Jt),Ne(Vt),Bg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ug(e),null;case 13:if(Ne(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(De),null;case 4:return Ro(),null;case 10:return Mg(e.type._context),null;case 22:case 23:return Jg(),null;case 24:return null;default:return null}}var cc=!1,Lt=!1,YP=typeof WeakSet=="function"?WeakSet:Set,q=null;function oo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function dm(t,e,n){try{n()}catch(r){Be(t,e,r)}}var Bw=!1;function XP(t,e){if(Qp=Xc,t=wI(),Pg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)p=f,f=_;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(u=o),(_=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yp={focusedElem:t,selectionRange:n},Xc=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var A=E.memoizedProps,N=E.memoizedState,I=e.stateNode,T=I.getSnapshotBeforeUpdate(e.elementType===e.type?A:Nn(e.type,A),N);I.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Be(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return E=Bw,Bw=!1,E}function rl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dm(e,n,s)}i=i.next}while(i!==r)}}function od(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gS(t){var e=t.alternate;e!==null&&(t.alternate=null,gS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Rl],delete e[Zp],delete e[DP],delete e[OP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _S(t){return t.tag===5||t.tag===3||t.tag===4}function zw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_S(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=eh));else if(r!==4&&(t=t.child,t!==null))for(pm(t,e,n),t=t.sibling;t!==null;)pm(t,e,n),t=t.sibling}function mm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mm(t,e,n),t=t.sibling;t!==null;)mm(t,e,n),t=t.sibling}var Et=null,bn=!1;function Kr(t,e,n){for(n=n.child;n!==null;)yS(t,e,n),n=n.sibling}function yS(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Jh,n)}catch{}switch(n.tag){case 5:Lt||oo(n,e);case 6:var r=Et,i=bn;Et=null,Kr(t,e,n),Et=r,bn=i,Et!==null&&(bn?(t=Et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Et.removeChild(n.stateNode));break;case 18:Et!==null&&(bn?(t=Et,n=n.stateNode,t.nodeType===8?Hf(t.parentNode,n):t.nodeType===1&&Hf(t,n),Tl(t)):Hf(Et,n.stateNode));break;case 4:r=Et,i=bn,Et=n.stateNode.containerInfo,bn=!0,Kr(t,e,n),Et=r,bn=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dm(n,e,o),i=i.next}while(i!==r)}Kr(t,e,n);break;case 1:if(!Lt&&(oo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Be(n,e,a)}Kr(t,e,n);break;case 21:Kr(t,e,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,Kr(t,e,n),Lt=r):Kr(t,e,n);break;default:Kr(t,e,n)}}function Ww(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YP),e.forEach(function(r){var i=oN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Et=a.stateNode,bn=!1;break e;case 3:Et=a.stateNode.containerInfo,bn=!0;break e;case 4:Et=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(Et===null)throw Error(U(160));yS(s,o,i),Et=null,bn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vS(e,t),e=e.sibling}function vS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),Gn(t),r&4){try{rl(3,t,t.return),od(3,t)}catch(A){Be(t,t.return,A)}try{rl(5,t,t.return)}catch(A){Be(t,t.return,A)}}break;case 1:xn(e,t),Gn(t),r&512&&n!==null&&oo(n,n.return);break;case 5:if(xn(e,t),Gn(t),r&512&&n!==null&&oo(n,n.return),t.flags&32){var i=t.stateNode;try{yl(i,"")}catch(A){Be(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&BT(i,s),jp(a,o);var c=jp(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?qT(i,f):h==="dangerouslySetInnerHTML"?$T(i,f):h==="children"?yl(i,f):_g(i,h,f,c)}switch(a){case"input":Op(i,s);break;case"textarea":zT(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?co(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?co(i,!!s.multiple,s.defaultValue,!0):co(i,!!s.multiple,s.multiple?[]:"",!1))}i[Rl]=s}catch(A){Be(t,t.return,A)}}break;case 6:if(xn(e,t),Gn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Be(t,t.return,A)}}break;case 3:if(xn(e,t),Gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tl(e.containerInfo)}catch(A){Be(t,t.return,A)}break;case 4:xn(e,t),Gn(t);break;case 13:xn(e,t),Gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Yg=qe())),r&4&&Ww(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Lt=(c=Lt)||h,xn(e,t),Lt=c):xn(e,t),Gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(f=q=h;q!==null;){switch(p=q,_=p.child,p.tag){case 0:case 11:case 14:case 15:rl(4,p,p.return);break;case 1:oo(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(A){Be(r,n,A)}}break;case 5:oo(p,p.return);break;case 22:if(p.memoizedState!==null){Hw(f);continue}}_!==null?(_.return=p,q=_):Hw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=HT("display",o))}catch(A){Be(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){Be(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xn(e,t),Gn(t),r&4&&Ww(t);break;case 21:break;default:xn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_S(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yl(i,""),r.flags&=-33);var s=zw(t);mm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zw(t);pm(t,a,o);break;default:throw Error(U(161))}}catch(u){Be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JP(t,e,n){q=t,wS(t)}function wS(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Lt;a=cc;var c=Lt;if(cc=o,(Lt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?qw(i):u!==null?(u.return=o,q=u):qw(i);for(;s!==null;)q=s,wS(s),s=s.sibling;q=i,cc=a,Lt=c}$w(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):$w(t)}}function $w(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||od(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Aw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Aw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Tl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Lt||e.flags&512&&fm(e)}catch(p){Be(e,e.return,p)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Hw(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function qw(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{od(4,e)}catch(u){Be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Be(e,i,u)}}var s=e.return;try{fm(e)}catch(u){Be(e,s,u)}break;case 5:var o=e.return;try{fm(e)}catch(u){Be(e,o,u)}}}catch(u){Be(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var ZP=Math.ceil,hh=Br.ReactCurrentDispatcher,Kg=Br.ReactCurrentOwner,En=Br.ReactCurrentBatchConfig,me=0,gt=null,Qe=null,It=0,an=0,ao=Ni(0),st=0,Dl=null,hs=0,ad=0,Qg=0,il=null,Kt=null,Yg=0,xo=1/0,pr=null,dh=!1,gm=null,fi=null,hc=!1,ii=null,fh=0,sl=0,_m=null,bc=-1,Dc=0;function zt(){return me&6?qe():bc!==-1?bc:bc=qe()}function pi(t){return t.mode&1?me&2&&It!==0?It&-It:MP.transition!==null?(Dc===0&&(Dc=iI()),Dc):(t=we,t!==0||(t=window.event,t=t===void 0?16:hI(t.type)),t):1}function Fn(t,e,n,r){if(50<sl)throw sl=0,_m=null,Error(U(185));su(t,n,r),(!(me&2)||t!==gt)&&(t===gt&&(!(me&2)&&(ad|=n),st===4&&Zr(t,It)),en(t,r),n===1&&me===0&&!(e.mode&1)&&(xo=qe()+500,rd&&bi()))}function en(t,e){var n=t.callbackNode;M1(t,e);var r=Yc(t,t===gt?It:0);if(r===0)n!==null&&tw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&tw(n),e===1)t.tag===0?LP(Gw.bind(null,t)):PI(Gw.bind(null,t)),NP(function(){!(me&6)&&bi()}),n=null;else{switch(sI(r)){case 1:n=Tg;break;case 4:n=nI;break;case 16:n=Qc;break;case 536870912:n=rI;break;default:n=Qc}n=AS(n,ES.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ES(t,e){if(bc=-1,Dc=0,me&6)throw Error(U(327));var n=t.callbackNode;if(go()&&t.callbackNode!==n)return null;var r=Yc(t,t===gt?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ph(t,r);else{e=r;var i=me;me|=2;var s=IS();(gt!==t||It!==e)&&(pr=null,xo=qe()+500,is(t,e));do try{nN();break}catch(a){TS(t,a)}while(!0);Lg(),hh.current=s,me=i,Qe!==null?e=0:(gt=null,It=0,e=st)}if(e!==0){if(e===2&&(i=$p(t),i!==0&&(r=i,e=ym(t,i))),e===1)throw n=Dl,is(t,0),Zr(t,r),en(t,qe()),n;if(e===6)Zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!eN(i)&&(e=ph(t,r),e===2&&(s=$p(t),s!==0&&(r=s,e=ym(t,s))),e===1))throw n=Dl,is(t,0),Zr(t,r),en(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Hi(t,Kt,pr);break;case 3:if(Zr(t,r),(r&130023424)===r&&(e=Yg+500-qe(),10<e)){if(Yc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jp(Hi.bind(null,t,Kt,pr),e);break}Hi(t,Kt,pr);break;case 4:if(Zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ZP(r/1960))-r,10<r){t.timeoutHandle=Jp(Hi.bind(null,t,Kt,pr),r);break}Hi(t,Kt,pr);break;case 5:Hi(t,Kt,pr);break;default:throw Error(U(329))}}}return en(t,qe()),t.callbackNode===n?ES.bind(null,t):null}function ym(t,e){var n=il;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=ph(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&vm(e)),t}function vm(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function eN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zr(t,e){for(e&=~Qg,e&=~ad,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),r=1<<n;t[n]=-1,e&=~r}}function Gw(t){if(me&6)throw Error(U(327));go();var e=Yc(t,0);if(!(e&1))return en(t,qe()),null;var n=ph(t,e);if(t.tag!==0&&n===2){var r=$p(t);r!==0&&(e=r,n=ym(t,r))}if(n===1)throw n=Dl,is(t,0),Zr(t,e),en(t,qe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hi(t,Kt,pr),en(t,qe()),null}function Xg(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(xo=qe()+500,rd&&bi())}}function ds(t){ii!==null&&ii.tag===0&&!(me&6)&&go();var e=me;me|=1;var n=En.transition,r=we;try{if(En.transition=null,we=1,t)return t()}finally{we=r,En.transition=n,me=e,!(me&6)&&bi()}}function Jg(){an=ao.current,Ne(ao)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PP(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(bg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&th();break;case 3:Ro(),Ne(Jt),Ne(Vt),Bg();break;case 5:Ug(r);break;case 4:Ro();break;case 13:Ne(De);break;case 19:Ne(De);break;case 10:Mg(r.type._context);break;case 22:case 23:Jg()}n=n.return}if(gt=t,Qe=t=mi(t.current,null),It=an=e,st=0,Dl=null,Qg=ad=hs=0,Kt=il=null,Yi!==null){for(e=0;e<Yi.length;e++)if(n=Yi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yi=null}return t}function TS(t,e){do{var n=Qe;try{if(Lg(),xc.current=ch,uh){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uh=!1}if(cs=0,dt=rt=Me=null,nl=!1,Pl=0,Kg.current=null,n===null||n.return===null){st=1,Dl=e,Qe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=It,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Ow(o);if(_!==null){_.flags&=-257,Lw(_,o,a,s,e),_.mode&1&&Dw(s,c,e),e=_,u=c;var E=e.updateQueue;if(E===null){var A=new Set;A.add(u),e.updateQueue=A}else E.add(u);break e}else{if(!(e&1)){Dw(s,c,e),Zg();break e}u=Error(U(426))}}else if(be&&a.mode&1){var N=Ow(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Lw(N,o,a,s,e),Dg(Ao(u,a));break e}}s=u=Ao(u,a),st!==4&&(st=2),il===null?il=[s]:il.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=sS(s,u,e);Rw(s,I);break e;case 1:a=u;var T=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(fi===null||!fi.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=oS(s,a,e);Rw(s,O);break e}}s=s.return}while(s!==null)}CS(n)}catch(V){e=V,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function IS(){var t=hh.current;return hh.current=ch,t===null?ch:t}function Zg(){(st===0||st===3||st===2)&&(st=4),gt===null||!(hs&268435455)&&!(ad&268435455)||Zr(gt,It)}function ph(t,e){var n=me;me|=2;var r=IS();(gt!==t||It!==e)&&(pr=null,is(t,e));do try{tN();break}catch(i){TS(t,i)}while(!0);if(Lg(),me=n,hh.current=r,Qe!==null)throw Error(U(261));return gt=null,It=0,st}function tN(){for(;Qe!==null;)SS(Qe)}function nN(){for(;Qe!==null&&!R1();)SS(Qe)}function SS(t){var e=RS(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?CS(t):Qe=e,Kg.current=null}function CS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QP(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{st=6,Qe=null;return}}else if(n=KP(n,e,an),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);st===0&&(st=5)}function Hi(t,e,n){var r=we,i=En.transition;try{En.transition=null,we=1,rN(t,e,n,r)}finally{En.transition=i,we=r}return null}function rN(t,e,n,r){do go();while(ii!==null);if(me&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(V1(t,s),t===gt&&(Qe=gt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hc||(hc=!0,AS(Qc,function(){return go(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=we;we=1;var a=me;me|=4,Kg.current=null,XP(t,n),vS(n,t),IP(Yp),Xc=!!Qp,Yp=Qp=null,t.current=n,JP(n),A1(),me=a,we=o,En.transition=s}else t.current=n;if(hc&&(hc=!1,ii=t,fh=i),s=t.pendingLanes,s===0&&(fi=null),N1(n.stateNode),en(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dh)throw dh=!1,t=gm,gm=null,t;return fh&1&&t.tag!==0&&go(),s=t.pendingLanes,s&1?t===_m?sl++:(sl=0,_m=t):sl=0,bi(),null}function go(){if(ii!==null){var t=sI(fh),e=En.transition,n=we;try{if(En.transition=null,we=16>t?16:t,ii===null)var r=!1;else{if(t=ii,ii=null,fh=0,me&6)throw Error(U(331));var i=me;for(me|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:rl(8,h,s)}var f=h.child;if(f!==null)f.return=h,q=f;else for(;q!==null;){h=q;var p=h.sibling,_=h.return;if(gS(h),h===c){q=null;break}if(p!==null){p.return=_,q=p;break}q=_}}}var E=s.alternate;if(E!==null){var A=E.child;if(A!==null){E.child=null;do{var N=A.sibling;A.sibling=null,A=N}while(A!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rl(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,q=I;break e}q=s.return}}var T=t.current;for(q=T;q!==null;){o=q;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,q=C;else e:for(o=T;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:od(9,a)}}catch(V){Be(a,a.return,V)}if(a===o){q=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,q=O;break e}q=a.return}}if(me=i,bi(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Jh,t)}catch{}r=!0}return r}finally{we=n,En.transition=e}}return!1}function Kw(t,e,n){e=Ao(n,e),e=sS(t,e,1),t=di(t,e,1),e=zt(),t!==null&&(su(t,1,e),en(t,e))}function Be(t,e,n){if(t.tag===3)Kw(t,t,n);else for(;e!==null;){if(e.tag===3){Kw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fi===null||!fi.has(r))){t=Ao(n,t),t=oS(e,t,1),e=di(e,t,1),t=zt(),e!==null&&(su(e,1,t),en(e,t));break}}e=e.return}}function iN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,gt===t&&(It&n)===n&&(st===4||st===3&&(It&130023424)===It&&500>qe()-Yg?is(t,0):Qg|=n),en(t,e)}function kS(t,e){e===0&&(t.mode&1?(e=tc,tc<<=1,!(tc&130023424)&&(tc=4194304)):e=1);var n=zt();t=br(t,e),t!==null&&(su(t,e,n),en(t,n))}function sN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kS(t,n)}function oN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),kS(t,n)}var RS;RS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,GP(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,be&&e.flags&1048576&&NI(e,ih,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nc(t,e),t=e.pendingProps;var i=So(e,Vt.current);mo(e,n),i=Wg(null,e,r,t,i,n);var s=$g();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(r)?(s=!0,nh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fg(e),i.updater=sd,e.stateNode=i,i._reactInternals=e,sm(e,r,t,n),e=lm(null,e,r,!0,s,n)):(e.tag=0,be&&s&&Ng(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lN(r),t=Nn(r,t),i){case 0:e=am(null,e,r,t,n);break e;case 1:e=Fw(null,e,r,t,n);break e;case 11:e=Mw(null,e,r,t,n);break e;case 14:e=Vw(null,e,r,Nn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),am(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Fw(t,e,r,i,n);case 3:e:{if(cS(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,VI(t,e),ah(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ao(Error(U(423)),e),e=jw(t,e,r,n,i);break e}else if(r!==i){i=Ao(Error(U(424)),e),e=jw(t,e,r,n,i);break e}else for(ln=hi(e.stateNode.containerInfo.firstChild),cn=e,be=!0,Dn=null,n=LI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Co(),r===i){e=Dr(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return FI(e),t===null&&nm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xp(r,i)?o=null:s!==null&&Xp(r,s)&&(e.flags|=32),uS(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&nm(e),null;case 13:return hS(t,e,n);case 4:return jg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ko(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Mw(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Re(sh,r._currentValue),r._currentValue=o,s!==null)if(zn(s.value,o)){if(s.children===i.children&&!Jt.current){e=Dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Sr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),rm(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mo(e,n),i=Tn(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=Nn(r,e.pendingProps),i=Nn(r.type,i),Vw(t,e,r,i,n);case 15:return aS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Nc(t,e),e.tag=1,Zt(r)?(t=!0,nh(e)):t=!1,mo(e,n),iS(e,r,i),sm(e,r,i,n),lm(null,e,r,!0,t,n);case 19:return dS(t,e,n);case 22:return lS(t,e,n)}throw Error(U(156,e.tag))};function AS(t,e){return tI(t,e)}function aN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,r){return new aN(t,e,n,r)}function e_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lN(t){if(typeof t=="function")return e_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vg)return 11;if(t===wg)return 14}return 2}function mi(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")e_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xs:return ss(n.children,i,s,e);case yg:o=8,i|=8;break;case xp:return t=vn(12,n,e,i|2),t.elementType=xp,t.lanes=s,t;case Pp:return t=vn(13,n,e,i),t.elementType=Pp,t.lanes=s,t;case Np:return t=vn(19,n,e,i),t.elementType=Np,t.lanes=s,t;case FT:return ld(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case MT:o=10;break e;case VT:o=9;break e;case vg:o=11;break e;case wg:o=14;break e;case Yr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=vn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ss(t,e,n,r){return t=vn(7,t,r,e),t.lanes=n,t}function ld(t,e,n,r){return t=vn(22,t,r,e),t.elementType=FT,t.lanes=n,t.stateNode={isHidden:!1},t}function Zf(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function ep(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Of(0),this.expirationTimes=Of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Of(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function t_(t,e,n,r,i,s,o,a,u){return t=new uN(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fg(s),t}function cN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function xS(t){if(!t)return Ei;t=t._reactInternals;e:{if(Rs(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Zt(n))return xI(t,n,e)}return e}function PS(t,e,n,r,i,s,o,a,u){return t=t_(n,r,!0,t,i,s,o,a,u),t.context=xS(null),n=t.current,r=zt(),i=pi(n),s=Sr(r,i),s.callback=e??null,di(n,s,i),t.current.lanes=i,su(t,i,r),en(t,r),t}function ud(t,e,n,r){var i=e.current,s=zt(),o=pi(i);return n=xS(n),e.context===null?e.context=n:e.pendingContext=n,e=Sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=di(i,e,o),t!==null&&(Fn(t,i,o,s),Ac(t,i,o)),o}function mh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function n_(t,e){Qw(t,e),(t=t.alternate)&&Qw(t,e)}function hN(){return null}var NS=typeof reportError=="function"?reportError:function(t){console.error(t)};function r_(t){this._internalRoot=t}cd.prototype.render=r_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ud(t,e,null,null)};cd.prototype.unmount=r_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ds(function(){ud(null,t,null,null)}),e[Nr]=null}};function cd(t){this._internalRoot=t}cd.prototype.unstable_scheduleHydration=function(t){if(t){var e=lI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jr.length&&e!==0&&e<Jr[n].priority;n++);Jr.splice(n,0,t),n===0&&cI(t)}};function i_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yw(){}function dN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=mh(o);s.call(c)}}var o=PS(e,r,t,0,null,!1,!1,"",Yw);return t._reactRootContainer=o,t[Nr]=o.current,Cl(t.nodeType===8?t.parentNode:t),ds(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=mh(u);a.call(c)}}var u=t_(t,0,!1,null,null,!1,!1,"",Yw);return t._reactRootContainer=u,t[Nr]=u.current,Cl(t.nodeType===8?t.parentNode:t),ds(function(){ud(e,u,n,r)}),u}function dd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=mh(o);a.call(u)}}ud(e,o,t,i)}else o=dN(n,e,t,i,r);return mh(o)}oI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$a(e.pendingLanes);n!==0&&(Ig(e,n|1),en(e,qe()),!(me&6)&&(xo=qe()+500,bi()))}break;case 13:ds(function(){var r=br(t,1);if(r!==null){var i=zt();Fn(r,t,1,i)}}),n_(t,1)}};Sg=function(t){if(t.tag===13){var e=br(t,134217728);if(e!==null){var n=zt();Fn(e,t,134217728,n)}n_(t,134217728)}};aI=function(t){if(t.tag===13){var e=pi(t),n=br(t,e);if(n!==null){var r=zt();Fn(n,t,e,r)}n_(t,e)}};lI=function(){return we};uI=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};Bp=function(t,e,n){switch(e){case"input":if(Op(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nd(r);if(!i)throw Error(U(90));UT(r),Op(r,i)}}}break;case"textarea":zT(t,n);break;case"select":e=n.value,e!=null&&co(t,!!n.multiple,e,!1)}};QT=Xg;YT=ds;var fN={usingClientEntryPoint:!1,Events:[au,to,nd,GT,KT,Xg]},Da={findFiberByHostInstance:Qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pN={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ZT(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||hN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{Jh=dc.inject(pN),Xn=dc}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fN;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!i_(e))throw Error(U(200));return cN(t,e,null,n)};fn.createRoot=function(t,e){if(!i_(t))throw Error(U(299));var n=!1,r="",i=NS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=t_(t,1,!1,null,null,n,!1,r,i),t[Nr]=e.current,Cl(t.nodeType===8?t.parentNode:t),new r_(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=ZT(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return ds(t)};fn.hydrate=function(t,e,n){if(!hd(e))throw Error(U(200));return dd(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!i_(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=NS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=PS(e,null,t,1,n??null,i,!1,s,o),t[Nr]=e.current,Cl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cd(e)};fn.render=function(t,e,n){if(!hd(e))throw Error(U(200));return dd(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!hd(t))throw Error(U(40));return t._reactRootContainer?(ds(function(){dd(null,null,t,!1,function(){t._reactRootContainer=null,t[Nr]=null})}),!0):!1};fn.unstable_batchedUpdates=Xg;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hd(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return dd(t,e,n,!1,r)};fn.version="18.3.1-next-f1338f8080-20240426";function bS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bS)}catch(t){console.error(t)}}bS(),bT.exports=fn;var mN=bT.exports,Xw=mN;Rp.createRoot=Xw.createRoot,Rp.hydrateRoot=Xw.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ol(){return Ol=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ol.apply(this,arguments)}var si;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(si||(si={}));const Jw="popstate";function gN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return wm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:DS(i)}return yN(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function s_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _N(){return Math.random().toString(36).substr(2,8)}function Zw(t,e){return{usr:t.state,key:t.key,idx:e}}function wm(t,e,n,r){return n===void 0&&(n=null),Ol({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zo(e):e,{state:n,key:e&&e.key||r||_N()})}function DS(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function yN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=si.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Ol({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=si.Pop;let N=h(),I=N==null?null:N-c;c=N,u&&u({action:a,location:A.location,delta:I})}function p(N,I){a=si.Push;let T=wm(A.location,N,I);c=h()+1;let C=Zw(T,c),O=A.createHref(T);try{o.pushState(C,"",O)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(O)}s&&u&&u({action:a,location:A.location,delta:1})}function _(N,I){a=si.Replace;let T=wm(A.location,N,I);c=h();let C=Zw(T,c),O=A.createHref(T);o.replaceState(C,"",O),s&&u&&u({action:a,location:A.location,delta:0})}function E(N){let I=i.location.origin!=="null"?i.location.origin:i.location.href,T=typeof N=="string"?N:DS(N);return T=T.replace(/ $/,"%20"),Ze(I,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,I)}let A={get action(){return a},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Jw,f),u=N,()=>{i.removeEventListener(Jw,f),u=null}},createHref(N){return e(i,N)},createURL:E,encodeLocation(N){let I=E(N);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:p,replace:_,go(N){return o.go(N)}};return A}var e0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(e0||(e0={}));function vN(t,e,n){return n===void 0&&(n="/"),wN(t,e,n)}function wN(t,e,n,r){let i=typeof e=="string"?Zo(e):e,s=MS(i.pathname||"/",n);if(s==null)return null;let o=OS(t);EN(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=DN(s);a=PN(o[u],c)}return a}function OS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=os([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),OS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:AN(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of LS(s.path))i(s,o,u)}),e}function LS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=LS(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function EN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const TN=/^:[\w-]+$/,IN=3,SN=2,CN=1,kN=10,RN=-2,t0=t=>t==="*";function AN(t,e){let n=t.split("/"),r=n.length;return n.some(t0)&&(r+=RN),e&&(r+=SN),n.filter(i=>!t0(i)).reduce((i,s)=>i+(TN.test(s)?IN:s===""?CN:kN),r)}function xN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function PN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=NN({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:os([s,f.pathname]),pathnameBase:FN(os([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=os([s,f.pathnameBase]))}return o}function NN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=bN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:_}=h;if(p==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const E=a[f];return _&&!E?c[p]=void 0:c[p]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function bN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),s_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function DN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return s_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function MS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const ON=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,LN=t=>ON.test(t);function MN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zo(t):t,s;if(n)if(LN(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),s_(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=n0(n.substring(1),"/"):s=n0(n,e)}else s=e;return{pathname:s,search:jN(r),hash:UN(i)}}function n0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function VN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function VS(t,e){let n=VN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function FS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zo(t):(i=Ol({},t),Ze(!i.pathname||!i.pathname.includes("?"),tp("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),tp("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),tp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=MN(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const os=t=>t.join("/").replace(/\/\/+/g,"/"),FN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,UN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function BN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const jS=["post","put","patch","delete"];new Set(jS);const zN=["get",...jS];new Set(zN);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ll(){return Ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ll.apply(this,arguments)}const o_=D.createContext(null),WN=D.createContext(null),uu=D.createContext(null),fd=D.createContext(null),Di=D.createContext({outlet:null,matches:[],isDataRoute:!1}),US=D.createContext(null);function cu(){return D.useContext(fd)!=null}function pd(){return cu()||Ze(!1),D.useContext(fd).location}function BS(t){D.useContext(uu).static||D.useLayoutEffect(t)}function ir(){let{isDataRoute:t}=D.useContext(Di);return t?nb():$N()}function $N(){cu()||Ze(!1);let t=D.useContext(o_),{basename:e,future:n,navigator:r}=D.useContext(uu),{matches:i}=D.useContext(Di),{pathname:s}=pd(),o=JSON.stringify(VS(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return BS(()=>{a.current=!0}),D.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=FS(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:os([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function zS(){let{matches:t}=D.useContext(Di),e=t[t.length-1];return e?e.params:{}}function HN(t,e){return qN(t,e)}function qN(t,e,n,r){cu()||Ze(!1);let{navigator:i}=D.useContext(uu),{matches:s}=D.useContext(Di),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=pd(),h;if(e){var f;let N=typeof e=="string"?Zo(e):e;u==="/"||(f=N.pathname)!=null&&f.startsWith(u)||Ze(!1),h=N}else h=c;let p=h.pathname||"/",_=p;if(u!=="/"){let N=u.replace(/^\//,"").split("/");_="/"+p.replace(/^\//,"").split("/").slice(N.length).join("/")}let E=vN(t,{pathname:_}),A=XN(E&&E.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:os([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:os([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&A?D.createElement(fd.Provider,{value:{location:Ll({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:si.Pop}},A):A}function GN(){let t=tb(),e=BN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const KN=D.createElement(GN,null);class QN extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Di.Provider,{value:this.props.routeContext},D.createElement(US.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function YN(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(o_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Di.Provider,{value:e},r)}function XN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Ze(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:_}=n,E=f.route.loader&&p[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||E){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,p)=>{let _,E=!1,A=null,N=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||KN,u&&(c<0&&p===0?(rb("route-fallback"),E=!0,N=null):c===p&&(E=!0,N=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,p+1)),T=()=>{let C;return _?C=A:E?C=N:f.route.Component?C=D.createElement(f.route.Component,null):f.route.element?C=f.route.element:C=h,D.createElement(YN,{match:f,routeContext:{outlet:h,matches:I,isDataRoute:n!=null},children:C})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?D.createElement(QN,{location:n.location,revalidation:n.revalidation,component:A,error:_,children:T(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):T()},null)}var WS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(WS||{}),$S=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($S||{});function JN(t){let e=D.useContext(o_);return e||Ze(!1),e}function ZN(t){let e=D.useContext(WN);return e||Ze(!1),e}function eb(t){let e=D.useContext(Di);return e||Ze(!1),e}function HS(t){let e=eb(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function tb(){var t;let e=D.useContext(US),n=ZN(),r=HS();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function nb(){let{router:t}=JN(WS.UseNavigateStable),e=HS($S.UseNavigateStable),n=D.useRef(!1);return BS(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ll({fromRouteId:e},s)))},[t,e])}const r0={};function rb(t,e,n){r0[t]||(r0[t]=!0)}function ib(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function qS(t){let{to:e,replace:n,state:r,relative:i}=t;cu()||Ze(!1);let{future:s,static:o}=D.useContext(uu),{matches:a}=D.useContext(Di),{pathname:u}=pd(),c=ir(),h=FS(e,VS(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(h);return D.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Pn(t){Ze(!1)}function sb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=si.Pop,navigator:s,static:o=!1,future:a}=t;cu()&&Ze(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:Ll({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Zo(r));let{pathname:h="/",search:f="",hash:p="",state:_=null,key:E="default"}=r,A=D.useMemo(()=>{let N=MS(h,u);return N==null?null:{location:{pathname:N,search:f,hash:p,state:_,key:E},navigationType:i}},[u,h,f,p,_,E,i]);return A==null?null:D.createElement(uu.Provider,{value:c},D.createElement(fd.Provider,{children:n,value:A}))}function ob(t){let{children:e,location:n}=t;return HN(Em(e),n)}new Promise(()=>{});function Em(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Em(r.props.children,s));return}r.type!==Pn&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Em(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ab="6";try{window.__reactRouterVersion=ab}catch{}const lb="startTransition",i0=i1[lb];function ub(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=gN({window:i,v5Compat:!0}));let o=s.current,[a,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=D.useCallback(f=>{c&&i0?i0(()=>u(f)):u(f)},[u,c]);return D.useLayoutEffect(()=>o.listen(h),[o,h]),D.useEffect(()=>ib(r),[r]),D.createElement(sb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var s0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(s0||(s0={}));var o0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(o0||(o0={}));var a0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw ea(e)},ea=function(t){return new Error("Firebase Database ("+GS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},a_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(p=64)),r.push(n[h],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(KS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new hb;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QS=function(t){const e=KS(t);return a_.encodeByteArray(e,!0)},gh=function(t){return QS(t).replace(/\./g,"")},_h=function(t){try{return a_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t){return YS(void 0,t)}function YS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fb(n)||(t[n]=YS(t[n],e[n]));return t}function fb(t){return t!=="__proto__"}/**
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
 */function pb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mb=()=>pb().__FIREBASE_DEFAULTS__,gb=()=>{if(typeof process>"u"||typeof a0>"u")return;const t=a0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_b=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_h(t[1]);return e&&JSON.parse(e)},md=()=>{try{return mb()||gb()||_b()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},XS=t=>{var e,n;return(n=(e=md())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JS=t=>{const e=XS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ZS=()=>{var t;return(t=md())===null||t===void 0?void 0:t.config},eC=t=>{var e;return(e=md())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function tC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gh(JSON.stringify(n)),gh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function l_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function yb(){var t;const e=(t=md())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Eb(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tb(){return GS.NODE_ADMIN===!0}function Ib(){return!yb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rC(){try{return typeof indexedDB=="object"}catch{return!1}}function iC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Sb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="FirebaseError";class sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cb,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sr(i,a,r)}}function kb(t,e){return t.replace(Rb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Rb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t){return JSON.parse(t)}function it(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ml(_h(s[0])||""),n=Ml(_h(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Ab=function(t){const e=sC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xb=function(t){const e=sC(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Po(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vh(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(l0(s)&&l0(o)){if(!No(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function l0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ga(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const p=(i<<5|i>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Nb(t,e){const n=new bb(t,e);return n.subscribe.bind(n)}class bb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Db(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=np),i.error===void 0&&(i.error=np),i.complete===void 0&&(i.complete=np);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Db(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function np(){}function bo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ve(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Yn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vb(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mb(t){return t===qi?void 0:t}function Vb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const jb={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Ub=de.INFO,Bb={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},zb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Bb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _d{constructor(e){this.name=e,this._logLevel=Ub,this._logHandler=zb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Wb=(t,e)=>e.some(n=>t instanceof n);let u0,c0;function $b(){return u0||(u0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hb(){return c0||(c0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oC=new WeakMap,Tm=new WeakMap,aC=new WeakMap,rp=new WeakMap,u_=new WeakMap;function qb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oC.set(n,t)}).catch(()=>{}),u_.set(e,t),e}function Gb(t){if(Tm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Tm.set(t,e)}let Im={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kb(t){Im=t(Im)}function Qb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ip(this),e,...n);return aC.set(r,e.sort?e.sort():[e]),Cr(r)}:Hb().includes(t)?function(...e){return t.apply(ip(this),e),Cr(oC.get(this))}:function(...e){return Cr(t.apply(ip(this),e))}}function Yb(t){return typeof t=="function"?Qb(t):(t instanceof IDBTransaction&&Gb(t),Wb(t,$b())?new Proxy(t,Im):t)}function Cr(t){if(t instanceof IDBRequest)return qb(t);if(rp.has(t))return rp.get(t);const e=Yb(t);return e!==t&&(rp.set(t,e),u_.set(e,t)),e}const ip=t=>u_.get(t);function yd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Cr(o.result),u.oldVersion,u.newVersion,Cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function sp(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Cr(n).then(()=>{})}const Xb=["get","getKey","getAll","getAllKeys","count"],Jb=["put","add","delete","clear"],op=new Map;function h0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(op.get(e))return op.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Jb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Xb.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return op.set(e,s),s}Kb(t=>({...t,get:(e,n,r)=>h0(e,n)||t.get(e,n,r),has:(e,n)=>!!h0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sm="@firebase/app",d0="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new _d("@firebase/app"),tD="@firebase/app-compat",nD="@firebase/analytics-compat",rD="@firebase/analytics",iD="@firebase/app-check-compat",sD="@firebase/app-check",oD="@firebase/auth",aD="@firebase/auth-compat",lD="@firebase/database",uD="@firebase/data-connect",cD="@firebase/database-compat",hD="@firebase/functions",dD="@firebase/functions-compat",fD="@firebase/installations",pD="@firebase/installations-compat",mD="@firebase/messaging",gD="@firebase/messaging-compat",_D="@firebase/performance",yD="@firebase/performance-compat",vD="@firebase/remote-config",wD="@firebase/remote-config-compat",ED="@firebase/storage",TD="@firebase/storage-compat",ID="@firebase/firestore",SD="@firebase/vertexai-preview",CD="@firebase/firestore-compat",kD="firebase",RD="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="[DEFAULT]",AD={[Sm]:"fire-core",[tD]:"fire-core-compat",[rD]:"fire-analytics",[nD]:"fire-analytics-compat",[sD]:"fire-app-check",[iD]:"fire-app-check-compat",[oD]:"fire-auth",[aD]:"fire-auth-compat",[lD]:"fire-rtdb",[uD]:"fire-data-connect",[cD]:"fire-rtdb-compat",[hD]:"fire-fn",[dD]:"fire-fn-compat",[fD]:"fire-iid",[pD]:"fire-iid-compat",[mD]:"fire-fcm",[gD]:"fire-fcm-compat",[_D]:"fire-perf",[yD]:"fire-perf-compat",[vD]:"fire-rc",[wD]:"fire-rc-compat",[ED]:"fire-gcs",[TD]:"fire-gcs-compat",[ID]:"fire-fst",[CD]:"fire-fst-compat",[SD]:"fire-vertex","fire-js":"fire-js",[kD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Map,xD=new Map,km=new Map;function f0(t,e){try{t.container.addComponent(e)}catch(n){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(km.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;km.set(e,t);for(const n of wh.values())f0(n,t);for(const n of xD.values())f0(n,t);return!0}function xs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new As("app","Firebase",PD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=RD;function lC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gi.create("bad-app-name",{appName:String(i)});if(n||(n=ZS()),!n)throw gi.create("no-options");const s=wh.get(i);if(s){if(No(n,s.options)&&No(r,s.config))return s;throw gi.create("duplicate-app",{appName:i})}const o=new Fb(i);for(const u of km.values())o.addComponent(u);const a=new ND(n,r,o);return wh.set(i,a),a}function vd(t=Cm){const e=wh.get(t);if(!e&&t===Cm&&ZS())return lC();if(!e)throw gi.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let i=(r=AD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(a.join(" "));return}Wn(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const bD="firebase-heartbeat-database",DD=1,Vl="firebase-heartbeat-store";let ap=null;function uC(){return ap||(ap=yd(bD,DD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vl)}catch(n){console.warn(n)}}}}).catch(t=>{throw gi.create("idb-open",{originalErrorMessage:t.message})})),ap}async function OD(t){try{const n=(await uC()).transaction(Vl),r=await n.objectStore(Vl).get(cC(t));return await n.done,r}catch(e){if(e instanceof sr)Or.warn(e.message);else{const n=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(n.message)}}}async function p0(t,e){try{const r=(await uC()).transaction(Vl,"readwrite");await r.objectStore(Vl).put(e,cC(t)),await r.done}catch(n){if(n instanceof sr)Or.warn(n.message);else{const r=gi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Or.warn(r.message)}}}function cC(t){return`${t.name}!${t.options.appId}`}/**
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
 */const LD=1024,MD=30*24*60*60*1e3;class VD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=m0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=MD}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=m0(),{heartbeatsToSend:r,unsentEntries:i}=FD(this._heartbeatsCache.heartbeats),s=gh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Or.warn(n),""}}}function m0(){return new Date().toISOString().substring(0,10)}function FD(t,e=LD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),g0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),g0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rC()?iC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return p0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return p0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function g0(t){return gh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(t){Wn(new Sn("platform-logger",e=>new Zb(e),"PRIVATE")),Wn(new Sn("heartbeat",e=>new VD(e),"PRIVATE")),tn(Sm,d0,t),tn(Sm,d0,"esm2017"),tn("fire-js","")}UD("");function c_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function hC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BD=hC,dC=new As("auth","Firebase",hC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new _d("@firebase/auth");function zD(t,...e){Eh.logLevel<=de.WARN&&Eh.warn(`Auth (${Ps}): ${t}`,...e)}function Lc(t,...e){Eh.logLevel<=de.ERROR&&Eh.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,...e){throw d_(t,...e)}function jn(t,...e){return d_(t,...e)}function h_(t,e,n){const r=Object.assign(Object.assign({},BD()),{[e]:n});return new As("auth","Firebase",r).create(e,{appName:t.name})}function kr(t){return h_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function WD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Cn(t,"argument-error"),h_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function d_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dC.create(t,...e)}function J(t,e,...n){if(!t)throw d_(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lc(e),new Error(e)}function Lr(t,e){t||wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $D(){return _0()==="http:"||_0()==="https:"}function _0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($D()||wb()||"connection"in navigator)?navigator.onLine:!0}function qD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lr(n>e,"Short delay should be less than long delay!"),this.isMobile=l_()||nC()}get(){return HD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t,e){Lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=new hu(3e4,6e4);function Oi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zr(t,e,n,r,i={}){return pC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ta(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return vb()||(c.referrerPolicy="no-referrer"),fC.fetch()(mC(t,t.config.apiHost,n,a),c)})}async function pC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GD),e);try{const i=new YD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw fc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw fc(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw fc(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw h_(t,h,c);Cn(t,h)}}catch(i){if(i instanceof sr)throw i;Cn(t,"network-request-failed",{message:String(i)})}}async function du(t,e,n,r,i={}){const s=await zr(t,e,n,r,i);return"mfaPendingCredential"in s&&Cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?f_(t.config,i):`${t.config.apiScheme}://${i}`}function QD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jn(this.auth,"network-request-failed")),KD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jn(t,e,r);return i.customData._tokenResponse=n,i}function y0(t){return t!==void 0&&t.enterprise!==void 0}class XD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function JD(t,e){return zr(t,"GET","/v2/recaptchaConfig",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZD(t,e){return zr(t,"POST","/v1/accounts:delete",e)}async function gC(t,e){return zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e2(t,e=!1){const n=ve(t),r=await n.getIdToken(e),i=p_(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ol(lp(i.auth_time)),issuedAtTime:ol(lp(i.iat)),expirationTime:ol(lp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lp(t){return Number(t)*1e3}function p_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lc("JWT malformed, contained fewer than 3 sections"),null;try{const i=_h(n);return i?JSON.parse(i):(Lc("Failed to decode base64 JWT payload"),null)}catch(i){return Lc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function v0(t){const e=p_(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sr&&t2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function t2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ol(this.lastLoginAt),this.creationTime=ol(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Do(t,gC(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_C(s.providerUserInfo):[],a=i2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Am(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function r2(t){const e=ve(t);await Th(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _C(t){return t.map(e=>{var{providerId:n}=e,r=c_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s2(t,e){const n=await pC(t,{},async()=>{const r=ta({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function o2(t,e){return zr(t,"POST","/v2/accounts:revokeToken",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):v0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=v0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await s2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _o;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=c_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Am(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Do(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return e2(this,e)}reload(){return r2(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Th(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(kr(this.auth));const e=await this.getIdToken();return await Do(this,ZD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:O,isAnonymous:V,providerData:j,stsTokenManager:k}=n;J(C&&k,e,"internal-error");const v=_o.fromJSON(this.name,k);J(typeof C=="string",e,"internal-error"),Qr(f,e.name),Qr(p,e.name),J(typeof O=="boolean",e,"internal-error"),J(typeof V=="boolean",e,"internal-error"),Qr(_,e.name),Qr(E,e.name),Qr(A,e.name),Qr(N,e.name),Qr(I,e.name),Qr(T,e.name);const S=new Er({uid:C,auth:e,email:p,emailVerified:O,displayName:f,isAnonymous:V,photoURL:E,phoneNumber:_,tenantId:A,stsTokenManager:v,createdAt:I,lastLoginAt:T});return j&&Array.isArray(j)&&(S.providerData=j.map(w=>Object.assign({},w))),N&&(S._redirectEventId=N),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new _o;i.updateFromServerResponse(n);const s=new Er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Th(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_C(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new _o;a.updateFromIdToken(r);const u=new Er({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Am(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new Map;function Tr(t){Lr(t instanceof Function,"Expected a class definition");let e=w0.get(t);return e?(Lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yC.type="NONE";const E0=yC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e,n){return`firebase:${t}:${e}:${n}`}class yo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yo(Tr(E0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Tr(E0);const o=Mc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Er._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new yo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new yo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SC(e))return"Blackberry";if(CC(e))return"Webos";if(wC(e))return"Safari";if((e.includes("chrome/")||EC(e))&&!e.includes("edge/"))return"Chrome";if(IC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vC(t=Ft()){return/firefox\//i.test(t)}function wC(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function EC(t=Ft()){return/crios\//i.test(t)}function TC(t=Ft()){return/iemobile/i.test(t)}function IC(t=Ft()){return/android/i.test(t)}function SC(t=Ft()){return/blackberry/i.test(t)}function CC(t=Ft()){return/webos/i.test(t)}function m_(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function a2(t=Ft()){var e;return m_(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function l2(){return Eb()&&document.documentMode===10}function kC(t=Ft()){return m_(t)||IC(t)||CC(t)||SC(t)||/windows phone/i.test(t)||TC(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t,e=[]){let n;switch(t){case"Browser":n=T0(Ft());break;case"Worker":n=`${T0(Ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
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
 */class u2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function c2(t,e={}){return zr(t,"GET","/v2/passwordPolicy",Oi(t,e))}/**
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
 */const h2=6;class d2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:h2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new I0(this),this.idTokenSubscription=new I0(this),this.beforeStateQueue=new u2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gC(this,{idToken:e}),r=await Er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Th(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(kr(this));const n=e?ve(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await c2(this),n=new d2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await o2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tr(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[Tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=RC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Li(t){return ve(t)}class I0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nb(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function p2(t){wd=t}function AC(t){return wd.loadJS(t)}function m2(){return wd.recaptchaEnterpriseScript}function g2(){return wd.gapiScript}function _2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const y2="recaptcha-enterprise",v2="NO_RECAPTCHA";class w2{constructor(e){this.type=y2,this.auth=Li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{JD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new XD(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;y0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(v2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&y0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=m2();u.length!==0&&(u+=a),AC(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function S0(t,e,n,r=!1){const i=new w2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await S0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await S0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(t,e){const n=xs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(No(s,e??{}))return i;Cn(i,"already-initialized")}return n.initialize({options:e})}function T2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function I2(t,e,n){const r=Li(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=xC(e),{host:o,port:a}=S2(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),C2()}function xC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S2(t){const e=xC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:C0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:C0(o)}}}function C0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function C2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}async function k2(t,e){return zr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(t,e){return du(t,"POST","/v1/accounts:signInWithPassword",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(t,e){return du(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}async function x2(t,e){return du(t,"POST","/v1/accounts:signInWithEmailLink",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends g_{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xm(e,n,"signInWithPassword",R2);case"emailLink":return A2(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xm(e,r,"signUpPassword",k2);case"emailLink":return x2(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t,e){return du(t,"POST","/v1/accounts:signInWithIdp",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="http://localhost";class fs extends g_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=c_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vo(e,n)}buildRequest(){const e={requestUri:P2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ta(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function b2(t){const e=qa(Ga(t)).link,n=e?qa(Ga(e)).deep_link_id:null,r=qa(Ga(t)).deep_link_id;return(r?qa(Ga(r)).link:null)||r||n||e||t}class __{constructor(e){var n,r,i,s,o,a;const u=qa(Ga(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=N2((i=u.mode)!==null&&i!==void 0?i:null);J(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=b2(e);try{return new __(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this.providerId=na.PROVIDER_ID}static credential(e,n){return Fl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=__.parseLink(n);return J(r,"argument-error"),Fl._fromEmailAndCode(e,r.code,r.tenantId)}}na.PROVIDER_ID="password";na.EMAIL_PASSWORD_SIGN_IN_METHOD="password";na.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends fu{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends fu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends fu{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends fu{constructor(){super("twitter.com")}static credential(e,n){return fs._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ni.credential(n,r)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D2(t,e){return du(t,"POST","/v1/accounts:signUp",Oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Er._fromIdTokenResponse(e,r,i),o=k0(r);return new ps({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=k0(r);return new ps({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function k0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih extends sr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ih.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ih(e,n,r,i)}}function PC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ih._fromErrorAndOperation(t,s,e,r):s})}async function O2(t,e,n=!1){const r=await Do(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ps._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t,e,n=!1){const{auth:r}=t;if(Ln(r.app))return Promise.reject(kr(r));const i="reauthenticate";try{const s=await Do(t,PC(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=p_(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),ps._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e,n=!1){if(Ln(t.app))return Promise.reject(kr(t));const r="signIn",i=await PC(t,r,e),s=await ps._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function M2(t,e){return NC(Li(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t){const e=Li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function V2(t,e,n){if(Ln(t.app))return Promise.reject(kr(t));const r=Li(t),o=await xm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",D2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&bC(t),u}),a=await ps._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function F2(t,e,n){return Ln(t.app)?Promise.reject(kr(t)):M2(ve(t),na.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bC(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e){return zr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ve(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Do(r,j2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function B2(t,e,n,r){return ve(t).onIdTokenChanged(e,n,r)}function z2(t,e,n){return ve(t).beforeAuthStateChanged(e,n)}function W2(t,e,n,r){return ve(t).onAuthStateChanged(e,n,r)}function $2(t){return ve(t).signOut()}const Sh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sh,"1"),this.storage.removeItem(Sh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=1e3,q2=10;class OC extends DC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);l2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,q2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},H2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}OC.type="LOCAL";const G2=OC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC extends DC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}LC.type="SESSION";const MC=LC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ed(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await K2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ed.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=v_("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}function Y2(t){Zn().location.href=t}/**
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
 */function VC(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function X2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Z2(){return VC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="firebaseLocalStorageDb",eO=1,Ch="firebaseLocalStorage",jC="fbase_key";class pu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Td(t,e){return t.transaction([Ch],e?"readwrite":"readonly").objectStore(Ch)}function tO(){const t=indexedDB.deleteDatabase(FC);return new pu(t).toPromise()}function Pm(){const t=indexedDB.open(FC,eO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ch,{keyPath:jC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ch)?e(r):(r.close(),await tO(),e(await Pm()))})})}async function R0(t,e,n){const r=Td(t,!0).put({[jC]:e,value:n});return new pu(r).toPromise()}async function nO(t,e){const n=Td(t,!1).get(e),r=await new pu(n).toPromise();return r===void 0?null:r.value}function A0(t,e){const n=Td(t,!0).delete(e);return new pu(n).toPromise()}const rO=800,iO=3;class UC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return VC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ed._getInstance(Z2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X2(),!this.activeServiceWorker)return;this.sender=new Q2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pm();return await R0(e,Sh,"1"),await A0(e,Sh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>R0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>A0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Td(i,!1).getAll();return new pu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UC.type="LOCAL";const sO=UC;new hu(3e4,6e4);/**
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
 */function BC(t,e){return e?Tr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_ extends g_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oO(t){return NC(t.auth,new w_(t),t.bypassAuthState)}function aO(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),L2(n,new w_(t),t.bypassAuthState)}async function lO(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),O2(n,new w_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oO;case"linkViaPopup":case"linkViaRedirect":return lO;case"reauthViaPopup":case"reauthViaRedirect":return aO;default:Cn(this.auth,"internal-error")}}resolve(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO=new hu(2e3,1e4);async function cO(t,e,n){if(Ln(t.app))return Promise.reject(jn(t,"operation-not-supported-in-this-environment"));const r=Li(t);WD(t,e,y_);const i=BC(r,n);return new Ji(r,"signInViaPopup",e,i).executeNotNull()}class Ji extends zC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ji.currentPopupAction&&Ji.currentPopupAction.cancel(),Ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Lr(this.filter.length===1,"Popup operations only handle one event");const e=v_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uO.get())};e()}}Ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO="pendingRedirect",Vc=new Map;class dO extends zC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vc.get(this.auth._key());if(!e){try{const r=await fO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vc.set(this.auth._key(),e)}return this.bypassAuthState||Vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fO(t,e){const n=gO(e),r=mO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pO(t,e){Vc.set(t._key(),e)}function mO(t){return Tr(t._redirectPersistence)}function gO(t){return Mc(hO,t.config.apiKey,t.name)}async function _O(t,e,n=!1){if(Ln(t.app))return Promise.reject(kr(t));const r=Li(t),i=BC(r,e),o=await new dO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=10*60*1e3;class vO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yO&&this.cachedEventUids.clear(),this.cachedEventUids.has(x0(e))}saveEventToCache(e){this.cachedEventUids.add(x0(e)),this.lastProcessedEventTime=Date.now()}}function x0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EO(t,e={}){return zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IO=/^https?/;async function SO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EO(t);for(const n of e)try{if(CO(n))return}catch{}Cn(t,"unauthorized-domain")}function CO(t){const e=Rm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IO.test(n))return!1;if(TO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const kO=new hu(3e4,6e4);function P0(){const t=Zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RO(t){return new Promise((e,n)=>{var r,i,s;function o(){P0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{P0(),n(jn(t,"network-request-failed"))},timeout:kO.get()})}if(!((i=(r=Zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Zn().gapi)===null||s===void 0)&&s.load)o();else{const a=_2("iframefcb");return Zn()[a]=()=>{gapi.load?o():n(jn(t,"network-request-failed"))},AC(`${g2()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Fc=null,e})}let Fc=null;function AO(t){return Fc=Fc||RO(t),Fc}/**
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
 */const xO=new hu(5e3,15e3),PO="__/auth/iframe",NO="emulator/auth/iframe",bO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OO(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?f_(e,NO):`https://${t.config.authDomain}/${PO}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},i=DO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ta(r).slice(1)}`}async function LO(t){const e=await AO(t),n=Zn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:OO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),a=Zn().setTimeout(()=>{s(o)},xO.get());function u(){Zn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const MO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VO=500,FO=600,jO="_blank",UO="http://localhost";class N0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BO(t,e,n,r=VO,i=FO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},MO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ft().toLowerCase();n&&(a=EC(c)?jO:n),vC(c)&&(e=e||UO,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[_,E])=>`${p}${_}=${E},`,"");if(a2(c)&&a!=="_self")return zO(e||"",a),new N0(null);const f=window.open(e||"",a,h);J(f,t,"popup-blocked");try{f.focus()}catch{}return new N0(f)}function zO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const WO="__/auth/handler",$O="emulator/auth/handler",HO=encodeURIComponent("fac");async function b0(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:i};if(e instanceof y_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof fu){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${HO}=${encodeURIComponent(u)}`:"";return`${qO(t)}?${ta(a).slice(1)}${c}`}function qO({config:t}){return t.emulator?f_(t,$O):`https://${t.authDomain}/${WO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="webStorageSupport";class GO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=MC,this._completeRedirectFn=_O,this._overrideRedirectResult=pO}async _openPopup(e,n,r,i){var s;Lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await b0(e,n,r,Rm(),i);return BO(e,o,v_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await b0(e,n,r,Rm(),i);return Y2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LO(e),r=new vO(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(up,{type:up},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[up];o!==void 0&&n(!!o),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kC()||wC()||m_()}}const KO=GO;var D0="@firebase/auth",O0="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XO(t){Wn(new Sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:RC(t)},c=new f2(r,i,s,u);return T2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new Sn("auth-internal",e=>{const n=Li(e.getProvider("auth").getImmediate());return(r=>new QO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(D0,O0,YO(t)),tn(D0,O0,"esm2017")}/**
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
 */const JO=5*60,ZO=eC("authIdTokenMaxAge")||JO;let L0=null;const eL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZO)return;const i=n==null?void 0:n.token;L0!==i&&(L0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tL(t=vd()){const e=xs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=E2(t,{popupRedirectResolver:KO,persistence:[sO,G2,MC]}),r=eC("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eL(s.toString());z2(n,o,()=>o(n.currentUser)),B2(n,a=>o(a))}}const i=XS("auth");return i&&I2(n,`http://${i}`),n}function nL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}p2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=jn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XO("Browser");var rL="firebase",iL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(rL,iL,"app");var M0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as,$C;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,v){function S(){}S.prototype=v.prototype,k.D=v.prototype,k.prototype=new S,k.prototype.constructor=k,k.C=function(w,x,P){for(var R=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)R[ot-2]=arguments[ot];return v.prototype[x].apply(w,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(k,v,S){S||(S=0);var w=Array(16);if(typeof v=="string")for(var x=0;16>x;++x)w[x]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(x=0;16>x;++x)w[x]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=k.g[0],S=k.g[1],x=k.g[2];var P=k.g[3],R=v+(P^S&(x^P))+w[0]+3614090360&4294967295;v=S+(R<<7&4294967295|R>>>25),R=P+(x^v&(S^x))+w[1]+3905402710&4294967295,P=v+(R<<12&4294967295|R>>>20),R=x+(S^P&(v^S))+w[2]+606105819&4294967295,x=P+(R<<17&4294967295|R>>>15),R=S+(v^x&(P^v))+w[3]+3250441966&4294967295,S=x+(R<<22&4294967295|R>>>10),R=v+(P^S&(x^P))+w[4]+4118548399&4294967295,v=S+(R<<7&4294967295|R>>>25),R=P+(x^v&(S^x))+w[5]+1200080426&4294967295,P=v+(R<<12&4294967295|R>>>20),R=x+(S^P&(v^S))+w[6]+2821735955&4294967295,x=P+(R<<17&4294967295|R>>>15),R=S+(v^x&(P^v))+w[7]+4249261313&4294967295,S=x+(R<<22&4294967295|R>>>10),R=v+(P^S&(x^P))+w[8]+1770035416&4294967295,v=S+(R<<7&4294967295|R>>>25),R=P+(x^v&(S^x))+w[9]+2336552879&4294967295,P=v+(R<<12&4294967295|R>>>20),R=x+(S^P&(v^S))+w[10]+4294925233&4294967295,x=P+(R<<17&4294967295|R>>>15),R=S+(v^x&(P^v))+w[11]+2304563134&4294967295,S=x+(R<<22&4294967295|R>>>10),R=v+(P^S&(x^P))+w[12]+1804603682&4294967295,v=S+(R<<7&4294967295|R>>>25),R=P+(x^v&(S^x))+w[13]+4254626195&4294967295,P=v+(R<<12&4294967295|R>>>20),R=x+(S^P&(v^S))+w[14]+2792965006&4294967295,x=P+(R<<17&4294967295|R>>>15),R=S+(v^x&(P^v))+w[15]+1236535329&4294967295,S=x+(R<<22&4294967295|R>>>10),R=v+(x^P&(S^x))+w[1]+4129170786&4294967295,v=S+(R<<5&4294967295|R>>>27),R=P+(S^x&(v^S))+w[6]+3225465664&4294967295,P=v+(R<<9&4294967295|R>>>23),R=x+(v^S&(P^v))+w[11]+643717713&4294967295,x=P+(R<<14&4294967295|R>>>18),R=S+(P^v&(x^P))+w[0]+3921069994&4294967295,S=x+(R<<20&4294967295|R>>>12),R=v+(x^P&(S^x))+w[5]+3593408605&4294967295,v=S+(R<<5&4294967295|R>>>27),R=P+(S^x&(v^S))+w[10]+38016083&4294967295,P=v+(R<<9&4294967295|R>>>23),R=x+(v^S&(P^v))+w[15]+3634488961&4294967295,x=P+(R<<14&4294967295|R>>>18),R=S+(P^v&(x^P))+w[4]+3889429448&4294967295,S=x+(R<<20&4294967295|R>>>12),R=v+(x^P&(S^x))+w[9]+568446438&4294967295,v=S+(R<<5&4294967295|R>>>27),R=P+(S^x&(v^S))+w[14]+3275163606&4294967295,P=v+(R<<9&4294967295|R>>>23),R=x+(v^S&(P^v))+w[3]+4107603335&4294967295,x=P+(R<<14&4294967295|R>>>18),R=S+(P^v&(x^P))+w[8]+1163531501&4294967295,S=x+(R<<20&4294967295|R>>>12),R=v+(x^P&(S^x))+w[13]+2850285829&4294967295,v=S+(R<<5&4294967295|R>>>27),R=P+(S^x&(v^S))+w[2]+4243563512&4294967295,P=v+(R<<9&4294967295|R>>>23),R=x+(v^S&(P^v))+w[7]+1735328473&4294967295,x=P+(R<<14&4294967295|R>>>18),R=S+(P^v&(x^P))+w[12]+2368359562&4294967295,S=x+(R<<20&4294967295|R>>>12),R=v+(S^x^P)+w[5]+4294588738&4294967295,v=S+(R<<4&4294967295|R>>>28),R=P+(v^S^x)+w[8]+2272392833&4294967295,P=v+(R<<11&4294967295|R>>>21),R=x+(P^v^S)+w[11]+1839030562&4294967295,x=P+(R<<16&4294967295|R>>>16),R=S+(x^P^v)+w[14]+4259657740&4294967295,S=x+(R<<23&4294967295|R>>>9),R=v+(S^x^P)+w[1]+2763975236&4294967295,v=S+(R<<4&4294967295|R>>>28),R=P+(v^S^x)+w[4]+1272893353&4294967295,P=v+(R<<11&4294967295|R>>>21),R=x+(P^v^S)+w[7]+4139469664&4294967295,x=P+(R<<16&4294967295|R>>>16),R=S+(x^P^v)+w[10]+3200236656&4294967295,S=x+(R<<23&4294967295|R>>>9),R=v+(S^x^P)+w[13]+681279174&4294967295,v=S+(R<<4&4294967295|R>>>28),R=P+(v^S^x)+w[0]+3936430074&4294967295,P=v+(R<<11&4294967295|R>>>21),R=x+(P^v^S)+w[3]+3572445317&4294967295,x=P+(R<<16&4294967295|R>>>16),R=S+(x^P^v)+w[6]+76029189&4294967295,S=x+(R<<23&4294967295|R>>>9),R=v+(S^x^P)+w[9]+3654602809&4294967295,v=S+(R<<4&4294967295|R>>>28),R=P+(v^S^x)+w[12]+3873151461&4294967295,P=v+(R<<11&4294967295|R>>>21),R=x+(P^v^S)+w[15]+530742520&4294967295,x=P+(R<<16&4294967295|R>>>16),R=S+(x^P^v)+w[2]+3299628645&4294967295,S=x+(R<<23&4294967295|R>>>9),R=v+(x^(S|~P))+w[0]+4096336452&4294967295,v=S+(R<<6&4294967295|R>>>26),R=P+(S^(v|~x))+w[7]+1126891415&4294967295,P=v+(R<<10&4294967295|R>>>22),R=x+(v^(P|~S))+w[14]+2878612391&4294967295,x=P+(R<<15&4294967295|R>>>17),R=S+(P^(x|~v))+w[5]+4237533241&4294967295,S=x+(R<<21&4294967295|R>>>11),R=v+(x^(S|~P))+w[12]+1700485571&4294967295,v=S+(R<<6&4294967295|R>>>26),R=P+(S^(v|~x))+w[3]+2399980690&4294967295,P=v+(R<<10&4294967295|R>>>22),R=x+(v^(P|~S))+w[10]+4293915773&4294967295,x=P+(R<<15&4294967295|R>>>17),R=S+(P^(x|~v))+w[1]+2240044497&4294967295,S=x+(R<<21&4294967295|R>>>11),R=v+(x^(S|~P))+w[8]+1873313359&4294967295,v=S+(R<<6&4294967295|R>>>26),R=P+(S^(v|~x))+w[15]+4264355552&4294967295,P=v+(R<<10&4294967295|R>>>22),R=x+(v^(P|~S))+w[6]+2734768916&4294967295,x=P+(R<<15&4294967295|R>>>17),R=S+(P^(x|~v))+w[13]+1309151649&4294967295,S=x+(R<<21&4294967295|R>>>11),R=v+(x^(S|~P))+w[4]+4149444226&4294967295,v=S+(R<<6&4294967295|R>>>26),R=P+(S^(v|~x))+w[11]+3174756917&4294967295,P=v+(R<<10&4294967295|R>>>22),R=x+(v^(P|~S))+w[2]+718787259&4294967295,x=P+(R<<15&4294967295|R>>>17),R=S+(P^(x|~v))+w[9]+3951481745&4294967295,k.g[0]=k.g[0]+v&4294967295,k.g[1]=k.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+P&4294967295}r.prototype.u=function(k,v){v===void 0&&(v=k.length);for(var S=v-this.blockSize,w=this.B,x=this.h,P=0;P<v;){if(x==0)for(;P<=S;)i(this,k,P),P+=this.blockSize;if(typeof k=="string"){for(;P<v;)if(w[x++]=k.charCodeAt(P++),x==this.blockSize){i(this,w),x=0;break}}else for(;P<v;)if(w[x++]=k[P++],x==this.blockSize){i(this,w),x=0;break}}this.h=x,this.o+=v},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var v=1;v<k.length-8;++v)k[v]=0;var S=8*this.o;for(v=k.length-8;v<k.length;++v)k[v]=S&255,S/=256;for(this.u(k),k=Array(16),v=S=0;4>v;++v)for(var w=0;32>w;w+=8)k[S++]=this.g[v]>>>w&255;return k};function s(k,v){var S=a;return Object.prototype.hasOwnProperty.call(S,k)?S[k]:S[k]=v(k)}function o(k,v){this.h=v;for(var S=[],w=!0,x=k.length-1;0<=x;x--){var P=k[x]|0;w&&P==v||(S[x]=P,w=!1)}this.g=S}var a={};function u(k){return-128<=k&&128>k?s(k,function(v){return new o([v|0],0>v?-1:0)}):new o([k|0],0>k?-1:0)}function c(k){if(isNaN(k)||!isFinite(k))return f;if(0>k)return N(c(-k));for(var v=[],S=1,w=0;k>=S;w++)v[w]=k/S|0,S*=4294967296;return new o(v,0)}function h(k,v){if(k.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k.charAt(0)=="-")return N(h(k.substring(1),v));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),w=f,x=0;x<k.length;x+=8){var P=Math.min(8,k.length-x),R=parseInt(k.substring(x,x+P),v);8>P?(P=c(Math.pow(v,P)),w=w.j(P).add(c(R))):(w=w.j(S),w=w.add(c(R)))}return w}var f=u(0),p=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-N(this).m();for(var k=0,v=1,S=0;S<this.g.length;S++){var w=this.i(S);k+=(0<=w?w:4294967296+w)*v,v*=4294967296}return k},t.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(E(this))return"0";if(A(this))return"-"+N(this).toString(k);for(var v=c(Math.pow(k,6)),S=this,w="";;){var x=O(S,v).g;S=I(S,x.j(v));var P=((0<S.g.length?S.g[0]:S.h)>>>0).toString(k);if(S=x,E(S))return P+w;for(;6>P.length;)P="0"+P;w=P+w}},t.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function E(k){if(k.h!=0)return!1;for(var v=0;v<k.g.length;v++)if(k.g[v]!=0)return!1;return!0}function A(k){return k.h==-1}t.l=function(k){return k=I(this,k),A(k)?-1:E(k)?0:1};function N(k){for(var v=k.g.length,S=[],w=0;w<v;w++)S[w]=~k.g[w];return new o(S,~k.h).add(p)}t.abs=function(){return A(this)?N(this):this},t.add=function(k){for(var v=Math.max(this.g.length,k.g.length),S=[],w=0,x=0;x<=v;x++){var P=w+(this.i(x)&65535)+(k.i(x)&65535),R=(P>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);w=R>>>16,P&=65535,R&=65535,S[x]=R<<16|P}return new o(S,S[S.length-1]&-2147483648?-1:0)};function I(k,v){return k.add(N(v))}t.j=function(k){if(E(this)||E(k))return f;if(A(this))return A(k)?N(this).j(N(k)):N(N(this).j(k));if(A(k))return N(this.j(N(k)));if(0>this.l(_)&&0>k.l(_))return c(this.m()*k.m());for(var v=this.g.length+k.g.length,S=[],w=0;w<2*v;w++)S[w]=0;for(w=0;w<this.g.length;w++)for(var x=0;x<k.g.length;x++){var P=this.i(w)>>>16,R=this.i(w)&65535,ot=k.i(x)>>>16,Gt=k.i(x)&65535;S[2*w+2*x]+=R*Gt,T(S,2*w+2*x),S[2*w+2*x+1]+=P*Gt,T(S,2*w+2*x+1),S[2*w+2*x+1]+=R*ot,T(S,2*w+2*x+1),S[2*w+2*x+2]+=P*ot,T(S,2*w+2*x+2)}for(w=0;w<v;w++)S[w]=S[2*w+1]<<16|S[2*w];for(w=v;w<2*v;w++)S[w]=0;return new o(S,0)};function T(k,v){for(;(k[v]&65535)!=k[v];)k[v+1]+=k[v]>>>16,k[v]&=65535,v++}function C(k,v){this.g=k,this.h=v}function O(k,v){if(E(v))throw Error("division by zero");if(E(k))return new C(f,f);if(A(k))return v=O(N(k),v),new C(N(v.g),N(v.h));if(A(v))return v=O(k,N(v)),new C(N(v.g),v.h);if(30<k.g.length){if(A(k)||A(v))throw Error("slowDivide_ only works with positive integers.");for(var S=p,w=v;0>=w.l(k);)S=V(S),w=V(w);var x=j(S,1),P=j(w,1);for(w=j(w,2),S=j(S,2);!E(w);){var R=P.add(w);0>=R.l(k)&&(x=x.add(S),P=R),w=j(w,1),S=j(S,1)}return v=I(k,x.j(v)),new C(x,v)}for(x=f;0<=k.l(v);){for(S=Math.max(1,Math.floor(k.m()/v.m())),w=Math.ceil(Math.log(S)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),P=c(S),R=P.j(v);A(R)||0<R.l(k);)S-=w,P=c(S),R=P.j(v);E(P)&&(P=p),x=x.add(P),k=I(k,R)}return new C(x,k)}t.A=function(k){return O(this,k).h},t.and=function(k){for(var v=Math.max(this.g.length,k.g.length),S=[],w=0;w<v;w++)S[w]=this.i(w)&k.i(w);return new o(S,this.h&k.h)},t.or=function(k){for(var v=Math.max(this.g.length,k.g.length),S=[],w=0;w<v;w++)S[w]=this.i(w)|k.i(w);return new o(S,this.h|k.h)},t.xor=function(k){for(var v=Math.max(this.g.length,k.g.length),S=[],w=0;w<v;w++)S[w]=this.i(w)^k.i(w);return new o(S,this.h^k.h)};function V(k){for(var v=k.g.length+1,S=[],w=0;w<v;w++)S[w]=k.i(w)<<1|k.i(w-1)>>>31;return new o(S,k.h)}function j(k,v){var S=v>>5;v%=32;for(var w=k.g.length-S,x=[],P=0;P<w;P++)x[P]=0<v?k.i(P+S)>>>v|k.i(P+S+1)<<32-v:k.i(P+S);return new o(x,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$C=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,as=o}).apply(typeof M0<"u"?M0:typeof self<"u"?self:typeof window<"u"?window:{});var pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HC,Ka,qC,jc,Nm,GC,KC,QC;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof pc=="object"&&pc];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var b=l[y];if(!(b in m))break e;m=m[b]}l=l[l.length-1],y=m[l],d=d(y),d!=y&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,y=!1,b={next:function(){if(!y&&m<l.length){var L=m++;return{value:d(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,y),l.apply(d,b)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function _(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function E(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,b,L){for(var z=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)z[Ie-2]=arguments[Ie];return d.prototype[b].apply(y,z)}}function A(l){const d=l.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=l[y];return m}return[]}function N(l,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const b=l.length||0,L=y.length||0;l.length=b+L;for(let z=0;z<L;z++)l[b+z]=y[z]}else l.push(y)}}class I{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function T(l){return/^[\s\xa0]*$/.test(l)}function C(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var V=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function j(l,d,m){for(const y in l)d.call(m,l[y],y,l)}function k(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function v(l){const d={};for(const m in l)d[m]=l[m];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(l,d){let m,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(m in y)l[m]=y[m];for(let L=0;L<S.length;L++)m=S[L],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function x(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function P(l){a.setTimeout(()=>{throw l},0)}function R(){var l=Y;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class ot{constructor(){this.h=this.g=null}add(d,m){const y=Gt.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var Gt=new I(()=>new Rn,l=>l.reset());class Rn{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let At,W=!1,Y=new ot,Z=()=>{const l=a.Promise.resolve(void 0);At=()=>{l.then(H)}};var H=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(m){P(m)}var d=Gt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}W=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var We=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function at(l,d){if(te.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(V){e:{try{O(d.nodeName);var b=!0;break e}catch{}b=!1}b||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:$e[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&at.aa.h.call(this)}}E(at,te);var $e={2:"touch",3:"pen",4:"mouse"};at.prototype.h=function(){at.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var mn="closure_listenable_"+(1e6*Math.random()|0),ae=0;function Hn(l,d,m,y,b){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=b,this.key=++ae,this.da=this.fa=!1}function ur(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function rn(l){this.src=l,this.g={},this.h=0}rn.prototype.add=function(l,d,m,y,b){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var z=Vs(l,d,y,b);return-1<z?(d=l[z],m||(d.fa=!1)):(d=new Hn(d,this.src,L,!!y,b),d.fa=m,l.push(d)),d};function Ms(l,d){var m=d.type;if(m in l.g){var y=l.g[m],b=Array.prototype.indexOf.call(y,d,void 0),L;(L=0<=b)&&Array.prototype.splice.call(y,b,1),L&&(ur(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Vs(l,d,m,y){for(var b=0;b<l.length;++b){var L=l[b];if(!L.da&&L.listener==d&&L.capture==!!m&&L.ha==y)return b}return-1}var da="closure_lm_"+(1e6*Math.random()|0),lt={};function cr(l,d,m,y,b){if(Array.isArray(d)){for(var L=0;L<d.length;L++)cr(l,d[L],m,y,b);return null}return m=sn(m),l&&l[mn]?l.K(d,m,c(y)?!!y.capture:!1,b):$r(l,d,m,!1,y,b)}function $r(l,d,m,y,b,L){if(!d)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,Ie=Fs(l);if(Ie||(l[da]=Ie=new rn(l)),m=Ie.add(d,m,y,z,L),m.proxy)return m;if(y=df(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)We||(b=z),b===void 0&&(b=!1),l.addEventListener(d.toString(),y,b);else if(l.attachEvent)l.attachEvent(Ou(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function df(){function l(m){return d.call(l.src,l.listener,m)}const d=ff;return l}function Du(l,d,m,y,b){if(Array.isArray(d))for(var L=0;L<d.length;L++)Du(l,d[L],m,y,b);else y=c(y)?!!y.capture:!!y,m=sn(m),l&&l[mn]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],m=Vs(L,m,y,b),-1<m&&(ur(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=Fs(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Vs(d,m,y,b)),(m=-1<l?d[l]:null)&&fa(m))}function fa(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[mn])Ms(d.i,l);else{var m=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(m,y,l.capture):d.detachEvent?d.detachEvent(Ou(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=Fs(d))?(Ms(m,l),m.h==0&&(m.src=null,d[da]=null)):ur(l)}}}function Ou(l){return l in lt?lt[l]:lt[l]="on"+l}function ff(l,d){if(l.da)l=!0;else{d=new at(d,this);var m=l.listener,y=l.ha||l.src;l.fa&&fa(l),l=m.call(y,d)}return l}function Fs(l){return l=l[da],l instanceof rn?l:null}var js="__closure_events_fn_"+(1e9*Math.random()>>>0);function sn(l){return typeof l=="function"?l:(l[js]||(l[js]=function(d){return l.handleEvent(d)}),l[js])}function nt(){se.call(this),this.i=new rn(this),this.M=this,this.F=null}E(nt,se),nt.prototype[mn]=!0,nt.prototype.removeEventListener=function(l,d,m,y){Du(this,l,d,m,y)};function ut(l,d){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new te(d,l);else if(d instanceof te)d.target=d.target||l;else{var b=d;d=new te(y,l),w(d,b)}if(b=!0,m)for(var L=m.length-1;0<=L;L--){var z=d.g=m[L];b=Q(z,y,!0,d)&&b}if(z=d.g=l,b=Q(z,y,!0,d)&&b,b=Q(z,y,!1,d)&&b,m)for(L=0;L<m.length;L++)z=d.g=m[L],b=Q(z,y,!1,d)&&b}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],y=0;y<m.length;y++)ur(m[y]);delete l.g[d],l.h--}}this.F=null},nt.prototype.K=function(l,d,m,y){return this.i.add(String(l),d,!1,m,y)},nt.prototype.L=function(l,d,m,y){return this.i.add(String(l),d,!0,m,y)};function Q(l,d,m,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var b=!0,L=0;L<d.length;++L){var z=d[L];if(z&&!z.da&&z.capture==m){var Ie=z.listener,wt=z.ha||z.src;z.fa&&Ms(l.i,z),b=Ie.call(wt,y)!==!1&&b}}return b&&!y.defaultPrevented}function oe(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Ce(l){l.g=oe(()=>{l.g=null,l.i&&(l.i=!1,Ce(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Fe extends se{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ce(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ie(l){se.call(this),this.h=l,this.g={}}E(ie,se);var je=[];function vt(l){j(l.g,function(d,m){this.g.hasOwnProperty(m)&&fa(d)},l),l.g={}}ie.prototype.N=function(){ie.aa.N.call(this),vt(this)},ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qn=a.JSON.stringify,gx=a.JSON.parse,_x=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function pf(){}pf.prototype.h=null;function Jy(l){return l.h||(l.h=l.i())}function Zy(){}var pa={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mf(){te.call(this,"d")}E(mf,te);function gf(){te.call(this,"c")}E(gf,te);var Fi={},ev=null;function Lu(){return ev=ev||new nt}Fi.La="serverreachability";function tv(l){te.call(this,Fi.La,l)}E(tv,te);function ma(l){const d=Lu();ut(d,new tv(d))}Fi.STAT_EVENT="statevent";function nv(l,d){te.call(this,Fi.STAT_EVENT,l),this.stat=d}E(nv,te);function jt(l){const d=Lu();ut(d,new nv(d,l))}Fi.Ma="timingevent";function rv(l,d){te.call(this,Fi.Ma,l),this.size=d}E(rv,te);function ga(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function _a(){this.g=!0}_a.prototype.xa=function(){this.g=!1};function yx(l,d,m,y,b,L){l.info(function(){if(l.g)if(L)for(var z="",Ie=L.split("&"),wt=0;wt<Ie.length;wt++){var ge=Ie[wt].split("=");if(1<ge.length){var xt=ge[0];ge=ge[1];var Pt=xt.split("_");z=2<=Pt.length&&Pt[1]=="type"?z+(xt+"="+ge+"&"):z+(xt+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+d+`
`+m+`
`+z})}function vx(l,d,m,y,b,L,z){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+d+`
`+m+`
`+L+" "+z})}function Us(l,d,m,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ex(l,m)+(y?" "+y:"")})}function wx(l,d){l.info(function(){return"TIMEOUT: "+d})}_a.prototype.info=function(){};function Ex(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var b=y[1];if(Array.isArray(b)&&!(1>b.length)){var L=b[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return qn(m)}catch{return d}}var Mu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},iv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_f;function Vu(){}E(Vu,pf),Vu.prototype.g=function(){return new XMLHttpRequest},Vu.prototype.i=function(){return{}},_f=new Vu;function Hr(l,d,m,y){this.j=l,this.i=d,this.l=m,this.R=y||1,this.U=new ie(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sv}function sv(){this.i=null,this.g="",this.h=!1}var ov={},yf={};function vf(l,d,m){l.L=1,l.v=Bu(hr(d)),l.m=m,l.P=!0,av(l,null)}function av(l,d){l.F=Date.now(),Fu(l),l.A=hr(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Ev(m.i,"t",y),l.C=0,m=l.j.J,l.h=new sv,l.g=jv(l.j,m?d:null,!l.m),0<l.O&&(l.M=new Fe(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,y=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(je[0]=b.toString()),b=je);for(var L=0;L<b.length;L++){var z=cr(m,b[L],y||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),ma(),yx(l.i,l.u,l.A,l.l,l.R,l.m)}Hr.prototype.ca=function(l){l=l.target;const d=this.M;d&&dr(l)==3?d.j():this.Y(l)},Hr.prototype.Y=function(l){try{if(l==this.g)e:{const Pt=dr(this.g);var d=this.g.Ba();const Ws=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||Av(this.g)))){this.J||Pt!=4||d==7||(d==8||0>=Ws?ma(3):ma(2)),wf(this);var m=this.g.Z();this.X=m;t:if(lv(this)){var y=Av(this.g);l="";var b=y.length,L=dr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ji(this),ya(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<b;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(L&&d==b-1)});y.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,vx(this.i,this.u,this.A,this.l,this.R,Pt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,wt=this.g;if((Ie=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(Ie)){var ge=Ie;break t}}ge=null}if(m=ge)Us(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ef(this,m);else{this.o=!1,this.s=3,jt(12),ji(this),ya(this);break e}}if(this.P){m=!0;let An;for(;!this.J&&this.C<z.length;)if(An=Tx(this,z),An==yf){Pt==4&&(this.s=4,jt(14),m=!1),Us(this.i,this.l,null,"[Incomplete Response]");break}else if(An==ov){this.s=4,jt(15),Us(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else Us(this.i,this.l,An,null),Ef(this,An);if(lv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||z.length!=0||this.h.h||(this.s=1,jt(16),m=!1),this.o=this.o&&m,!m)Us(this.i,this.l,z,"[Invalid Chunked Response]"),ji(this),ya(this);else if(0<z.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Rf(xt),xt.M=!0,jt(11))}}else Us(this.i,this.l,z,null),Ef(this,z);Pt==4&&ji(this),this.o&&!this.J&&(Pt==4?Lv(this.j,this):(this.o=!1,Fu(this)))}else jx(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),ji(this),ya(this)}}}catch{}finally{}};function lv(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Tx(l,d){var m=l.C,y=d.indexOf(`
`,m);return y==-1?yf:(m=Number(d.substring(m,y)),isNaN(m)?ov:(y+=1,y+m>d.length?yf:(d=d.slice(y,y+m),l.C=y+m,d)))}Hr.prototype.cancel=function(){this.J=!0,ji(this)};function Fu(l){l.S=Date.now()+l.I,uv(l,l.I)}function uv(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ga(p(l.ba,l),d)}function wf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Hr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(wx(this.i,this.A),this.L!=2&&(ma(),jt(17)),ji(this),this.s=2,ya(this)):uv(this,this.S-l)};function ya(l){l.j.G==0||l.J||Lv(l.j,l)}function ji(l){wf(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,vt(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Ef(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||Tf(m.h,l))){if(!l.K&&Tf(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Gu(m),Hu(m);else break e;kf(m),jt(18)}}else m.za=b[1],0<m.za-m.T&&37500>b[2]&&m.F&&m.v==0&&!m.C&&(m.C=ga(p(m.Za,m),6e3));if(1>=dv(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Bi(m,11)}else if((l.K||m.g==l)&&Gu(m),!T(d))for(b=m.Da.g.parse(d),d=0;d<b.length;d++){let ge=b[d];if(m.T=ge[0],ge=ge[1],m.G==2)if(ge[0]=="c"){m.K=ge[1],m.ia=ge[2];const xt=ge[3];xt!=null&&(m.la=xt,m.j.info("VER="+m.la));const Pt=ge[4];Pt!=null&&(m.Aa=Pt,m.j.info("SVER="+m.Aa));const Ws=ge[5];Ws!=null&&typeof Ws=="number"&&0<Ws&&(y=1.5*Ws,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const An=l.g;if(An){const Qu=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qu){var L=y.h;L.g||Qu.indexOf("spdy")==-1&&Qu.indexOf("quic")==-1&&Qu.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(If(L,L.h),L.h=null))}if(y.D){const Af=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;Af&&(y.ya=Af,Ae(y.I,y.D,Af))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var z=l;if(y.qa=Fv(y,y.J?y.ia:null,y.W),z.K){fv(y.h,z);var Ie=z,wt=y.L;wt&&(Ie.I=wt),Ie.B&&(wf(Ie),Fu(Ie)),y.g=z}else Dv(y);0<m.i.length&&qu(m)}else ge[0]!="stop"&&ge[0]!="close"||Bi(m,7);else m.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?Bi(m,7):Cf(m):ge[0]!="noop"&&m.l&&m.l.ta(ge),m.v=0)}}ma(4)}catch{}}var Ix=class{constructor(l,d){this.g=l,this.map=d}};function cv(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hv(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function dv(l){return l.h?1:l.g?l.g.size:0}function Tf(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function If(l,d){l.g?l.g.add(d):l.h=d}function fv(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}cv.prototype.cancel=function(){if(this.i=pv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function pv(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return A(l.i)}function Sx(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,y=0;y<m;y++)d.push(l[y]);return d}d=[],m=0;for(y in l)d[m++]=l[y];return d}function Cx(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const y in l)d[m++]=y;return d}}}function mv(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=Cx(l),y=Sx(l),b=y.length,L=0;L<b;L++)d.call(void 0,y[L],m&&m[L],l)}var gv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kx(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),b=null;if(0<=y){var L=l[m].substring(0,y);b=l[m].substring(y+1)}else L=l[m];d(L,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ui(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ui){this.h=l.h,ju(this,l.j),this.o=l.o,this.g=l.g,Uu(this,l.s),this.l=l.l;var d=l.i,m=new Ea;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),_v(this,m),this.m=l.m}else l&&(d=String(l).match(gv))?(this.h=!1,ju(this,d[1]||"",!0),this.o=va(d[2]||""),this.g=va(d[3]||"",!0),Uu(this,d[4]),this.l=va(d[5]||"",!0),_v(this,d[6]||"",!0),this.m=va(d[7]||"")):(this.h=!1,this.i=new Ea(null,this.h))}Ui.prototype.toString=function(){var l=[],d=this.j;d&&l.push(wa(d,yv,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(wa(d,yv,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(wa(m,m.charAt(0)=="/"?xx:Ax,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",wa(m,Nx)),l.join("")};function hr(l){return new Ui(l)}function ju(l,d,m){l.j=m?va(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Uu(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function _v(l,d,m){d instanceof Ea?(l.i=d,bx(l.i,l.h)):(m||(d=wa(d,Px)),l.i=new Ea(d,l.h))}function Ae(l,d,m){l.i.set(d,m)}function Bu(l){return Ae(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function va(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function wa(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,Rx),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Rx(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var yv=/[#\/\?@]/g,Ax=/[#\?:]/g,xx=/[#\?]/g,Px=/[#\?@]/g,Nx=/#/g;function Ea(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function qr(l){l.g||(l.g=new Map,l.h=0,l.i&&kx(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Ea.prototype,t.add=function(l,d){qr(this),this.i=null,l=Bs(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function vv(l,d){qr(l),d=Bs(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function wv(l,d){return qr(l),d=Bs(l,d),l.g.has(d)}t.forEach=function(l,d){qr(this),this.g.forEach(function(m,y){m.forEach(function(b){l.call(d,b,y,this)},this)},this)},t.na=function(){qr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const b=l[y];for(let L=0;L<b.length;L++)m.push(d[y])}return m},t.V=function(l){qr(this);let d=[];if(typeof l=="string")wv(this,l)&&(d=d.concat(this.g.get(Bs(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return qr(this),this.i=null,l=Bs(this,l),wv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Ev(l,d,m){vv(l,d),0<m.length&&(l.i=null,l.g.set(Bs(l,d),A(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const L=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var b=L;z[y]!==""&&(b+="="+encodeURIComponent(String(z[y]))),l.push(b)}}return this.i=l.join("&")};function Bs(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function bx(l,d){d&&!l.j&&(qr(l),l.i=null,l.g.forEach(function(m,y){var b=y.toLowerCase();y!=b&&(vv(this,y),Ev(this,b,m))},l)),l.j=d}function Dx(l,d){const m=new _a;if(a.Image){const y=new Image;y.onload=_(Gr,m,"TestLoadImage: loaded",!0,d,y),y.onerror=_(Gr,m,"TestLoadImage: error",!1,d,y),y.onabort=_(Gr,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=_(Gr,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function Ox(l,d){const m=new _a,y=new AbortController,b=setTimeout(()=>{y.abort(),Gr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(b),L.ok?Gr(m,"TestPingServer: ok",!0,d):Gr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),Gr(m,"TestPingServer: error",!1,d)})}function Gr(l,d,m,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(m)}catch{}}function Lx(){this.g=new _x}function Mx(l,d,m){const y=m||"";try{mv(l,function(b,L){let z=b;c(b)&&(z=qn(b)),d.push(y+L+"="+encodeURIComponent(z))})}catch(b){throw d.push(y+"type="+encodeURIComponent("_badmap")),b}}function zu(l){this.l=l.Ub||null,this.j=l.eb||!1}E(zu,pf),zu.prototype.g=function(){return new Wu(this.l,this.j)},zu.prototype.i=function(l){return function(){return l}}({});function Wu(l,d){nt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Wu,nt),t=Wu.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Ia(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ta(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ia(this)),this.g&&(this.readyState=3,Ia(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ta(this):Ia(this),this.readyState==3&&Tv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ta(this))},t.Qa=function(l){this.g&&(this.response=l,Ta(this))},t.ga=function(){this.g&&Ta(this)};function Ta(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ia(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function Ia(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Iv(l){let d="";return j(l,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function Sf(l,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Iv(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Ae(l,d,m))}function Ue(l){nt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Ue,nt);var Vx=/^https?$/i,Fx=["POST","PUT"];t=Ue.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_f.g(),this.v=this.o?Jy(this.o):Jy(_f),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){Sv(this,L);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)m.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())m.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Fx,d,void 0))||y||b||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of m)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rv(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){Sv(this,L)}};function Sv(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Cv(l),$u(l)}function Cv(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),$u(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$u(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?kv(this):this.bb())},t.bb=function(){kv(this)};function kv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||dr(l)!=4||l.Z()!=2)){if(l.u&&dr(l)==4)oe(l.Ea,0,l);else if(ut(l,"readystatechange"),dr(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=z===0){var b=String(l.D).match(gv)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),y=!Vx.test(b?b.toLowerCase():"")}m=y}if(m)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var L=2<dr(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",Cv(l)}}finally{$u(l)}}}}function $u(l,d){if(l.g){Rv(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ut(l,"ready");try{m.onreadystatechange=y}catch{}}}function Rv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function dr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<dr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),gx(d)}};function Av(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function jx(l){const d={};l=(l.g&&2<=dr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(T(l[y]))continue;var m=x(l[y]);const b=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=d[b]||[];d[b]=L,L.push(m)}k(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sa(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function xv(l){this.Aa=0,this.i=[],this.j=new _a,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sa("baseRetryDelayMs",5e3,l),this.cb=Sa("retryDelaySeedMs",1e4,l),this.Wa=Sa("forwardChannelMaxRetries",2,l),this.wa=Sa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new cv(l&&l.concurrentRequestLimit),this.Da=new Lx,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xv.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,y){jt(0),this.W=l,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Fv(this,null,this.W),qu(this)};function Cf(l){if(Pv(l),l.G==3){var d=l.U++,m=hr(l.I);if(Ae(m,"SID",l.K),Ae(m,"RID",d),Ae(m,"TYPE","terminate"),Ca(l,m),d=new Hr(l,l.j,d),d.L=2,d.v=Bu(hr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=jv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Fu(d)}Vv(l)}function Hu(l){l.g&&(Rf(l),l.g.cancel(),l.g=null)}function Pv(l){Hu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Gu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function qu(l){if(!hv(l.h)&&!l.s){l.s=!0;var d=l.Ga;At||Z(),W||(At(),W=!0),Y.add(d,l),l.B=0}}function Ux(l,d){return dv(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ga(p(l.Ga,l,d),Mv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new Hr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=v(L),w(L,this.S)):L=this.S),this.m!==null||this.O||(b.H=L,L=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=bv(this,b,d),m=hr(this.I),Ae(m,"RID",l),Ae(m,"CVER",22),this.D&&Ae(m,"X-HTTP-Session-Id",this.D),Ca(this,m),L&&(this.O?d="headers="+encodeURIComponent(String(Iv(L)))+"&"+d:this.m&&Sf(m,this.m,L)),If(this.h,b),this.Ua&&Ae(m,"TYPE","init"),this.P?(Ae(m,"$req",d),Ae(m,"SID","null"),b.T=!0,vf(b,m,null)):vf(b,m,d),this.G=2}}else this.G==3&&(l?Nv(this,l):this.i.length==0||hv(this.h)||Nv(this))};function Nv(l,d){var m;d?m=d.l:m=l.U++;const y=hr(l.I);Ae(y,"SID",l.K),Ae(y,"RID",m),Ae(y,"AID",l.T),Ca(l,y),l.m&&l.o&&Sf(y,l.m,l.o),m=new Hr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=bv(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),If(l.h,m),vf(m,y,d)}function Ca(l,d){l.H&&j(l.H,function(m,y){Ae(d,y,m)}),l.l&&mv({},function(m,y){Ae(d,y,m)})}function bv(l,d,m){m=Math.min(l.i.length,m);var y=l.l?p(l.l.Na,l.l,l):null;e:{var b=l.i;let L=-1;for(;;){const z=["count="+m];L==-1?0<m?(L=b[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let Ie=!0;for(let wt=0;wt<m;wt++){let ge=b[wt].g;const xt=b[wt].map;if(ge-=L,0>ge)L=Math.max(0,b[wt].g-100),Ie=!1;else try{Mx(xt,z,"req"+ge+"_")}catch{y&&y(xt)}}if(Ie){y=z.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,y}function Dv(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;At||Z(),W||(At(),W=!0),Y.add(d,l),l.v=0}}function kf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ga(p(l.Fa,l),Mv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Ov(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ga(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),Hu(this),Ov(this))};function Rf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Ov(l){l.g=new Hr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=hr(l.qa);Ae(d,"RID","rpc"),Ae(d,"SID",l.K),Ae(d,"AID",l.T),Ae(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ae(d,"TO",l.ja),Ae(d,"TYPE","xmlhttp"),Ca(l,d),l.m&&l.o&&Sf(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Bu(hr(d)),m.m=null,m.P=!0,av(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Hu(this),kf(this),jt(19))};function Gu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Lv(l,d){var m=null;if(l.g==d){Gu(l),Rf(l),l.g=null;var y=2}else if(Tf(l.h,d))m=d.D,fv(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var b=l.B;y=Lu(),ut(y,new rv(y,m)),qu(l)}else Dv(l);else if(b=d.s,b==3||b==0&&0<d.X||!(y==1&&Ux(l,d)||y==2&&kf(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),b){case 1:Bi(l,5);break;case 4:Bi(l,10);break;case 3:Bi(l,6);break;default:Bi(l,2)}}}function Mv(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function Bi(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),y=l.Xa;const b=!y;y=new Ui(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ju(y,"https"),Bu(y),b?Dx(y.toString(),m):Ox(y.toString(),m)}else jt(2);l.G=0,l.l&&l.l.sa(d),Vv(l),Pv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function Vv(l){if(l.G=0,l.ka=[],l.l){const d=pv(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Fv(l,d,m){var y=m instanceof Ui?hr(m):new Ui(m);if(y.g!="")d&&(y.g=d+"."+y.g),Uu(y,y.s);else{var b=a.location;y=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;var L=new Ui(null);y&&ju(L,y),d&&(L.g=d),b&&Uu(L,b),m&&(L.l=m),y=L}return m=l.D,d=l.ya,m&&d&&Ae(y,m,d),Ae(y,"VER",l.la),Ca(l,y),y}function jv(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ue(new zu({eb:m})):new Ue(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uv(){}t=Uv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ku(){}Ku.prototype.g=function(l,d){return new on(l,d)};function on(l,d){nt.call(this),this.g=new xv(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!T(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new zs(this)}E(on,nt),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Cf(this.g)},on.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=qn(l),l=m);d.i.push(new Ix(d.Ya++,l)),d.G==3&&qu(d)},on.prototype.N=function(){this.g.l=null,delete this.j,Cf(this.g),delete this.g,on.aa.N.call(this)};function Bv(l){mf.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}E(Bv,mf);function zv(){gf.call(this),this.status=1}E(zv,gf);function zs(l){this.g=l}E(zs,Uv),zs.prototype.ua=function(){ut(this.g,"a")},zs.prototype.ta=function(l){ut(this.g,new Bv(l))},zs.prototype.sa=function(l){ut(this.g,new zv)},zs.prototype.ra=function(){ut(this.g,"b")},Ku.prototype.createWebChannel=Ku.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,QC=function(){return new Ku},KC=function(){return Lu()},GC=Fi,Nm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mu.NO_ERROR=0,Mu.TIMEOUT=8,Mu.HTTP_ERROR=6,jc=Mu,iv.COMPLETE="complete",qC=iv,Zy.EventType=pa,pa.OPEN="a",pa.CLOSE="b",pa.ERROR="c",pa.MESSAGE="d",nt.prototype.listen=nt.prototype.K,Ka=Zy,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,HC=Ue}).apply(typeof pc<"u"?pc:typeof self<"u"?self:typeof window<"u"?window:{});const V0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new _d("@firebase/firestore");function Oa(){return ms.logLevel}function G(t,...e){if(ms.logLevel<=de.DEBUG){const n=e.map(E_);ms.debug(`Firestore (${ra}): ${t}`,...n)}}function Mr(t,...e){if(ms.logLevel<=de.ERROR){const n=e.map(E_);ms.error(`Firestore (${ra}): ${t}`,...n)}}function gs(t,...e){if(ms.logLevel<=de.WARN){const n=e.map(E_);ms.warn(`Firestore (${ra}): ${t}`,...n)}}function E_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${ra}) INTERNAL ASSERTION FAILED: `+t;throw Mr(e),new Error(e)}function Ee(t,e){t||ee()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class sL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oL{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new YC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Ot(e)}}class aL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new aL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ee(this.o===void 0);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new uL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=hL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function Oo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new et(0,0))}static max(){return new ne(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends jl{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const dL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends jl{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return dL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Pe.fromString(e))}static fromName(e){return new K(Pe.fromString(e).popFirst(5))}static empty(){return new K(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Pe(e.slice()))}}function fL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new Ti(i,K.empty(),e)}function pL(t){return new Ti(t.readTime,t.key,-1)}class Ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ti(ne.min(),K.empty(),-1)}static max(){return new Ti(ne.max(),K.empty(),-1)}}function mL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _L{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==gL)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function yL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class I_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}I_.oe=-1;function Id(t){return t==null}function kh(t){return t===0&&1/t==-1/0}function vL(t){return typeof t=="number"&&Number.isInteger(t)&&!kh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt=class bm{constructor(e,n){this.comparator=e,this.root=n||_i.EMPTY}insert(e,n){return new bm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_i.BLACK,null,null))}remove(e){return new bm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_i.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mc(this.root,e,this.comparator,!1)}getReverseIterator(){return new mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mc(this.root,e,this.comparator,!0)}},mc=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},_i=class fr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fr.RED,this.left=i??fr.EMPTY,this.right=s??fr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new fr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return fr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return fr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}};_i.EMPTY=null,_i.RED=!0,_i.BLACK=!1;_i.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new _i(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new j0(this.data.getIterator())}getIteratorFrom(e){return new j0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class j0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new un([])}unionWith(e){let n=new St(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Oo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ZC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ZC("Invalid base64 string: "+s):s}}(e);return new _t(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const wL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=wL.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _s(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function C_(t){const e=t.mapValue.fields.__previous_value__;return S_(e)?C_(e):e}function Ul(t){const e=Ii(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc={mapValue:{}};function ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?S_(t)?4:IL(t)?9007199254740991:TL(t)?10:11:ee()}function rr(t,e){if(t===e)return!0;const n=ys(t);if(n!==ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ul(t).isEqual(Ul(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ii(i.timestampValue),a=Ii(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _s(i.bytesValue).isEqual(_s(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return He(i.geoPointValue.latitude)===He(s.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return He(i.integerValue)===He(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=He(i.doubleValue),a=He(s.doubleValue);return o===a?kh(o)===kh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Oo(t.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(F0(o)!==F0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!rr(o[u],a[u])))return!1;return!0}(t,e);default:return ee()}}function Bl(t,e){return(t.values||[]).find(n=>rr(n,e))!==void 0}function Mo(t,e){if(t===e)return 0;const n=ys(t),r=ys(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=He(s.integerValue||s.doubleValue),u=He(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return U0(t.timestampValue,e.timestampValue);case 4:return U0(Ul(t),Ul(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(s,o){const a=_s(s),u=_s(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=_e(a[c],u[c]);if(h!==0)return h}return _e(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=_e(He(s.latitude),He(o.latitude));return a!==0?a:_e(He(s.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return B0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},p=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,E=(u=p.value)===null||u===void 0?void 0:u.arrayValue,A=_e(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:B0(_,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===gc.mapValue&&o===gc.mapValue)return 0;if(s===gc.mapValue)return 1;if(o===gc.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=_e(u[f],h[f]);if(p!==0)return p;const _=Mo(a[u[f]],c[h[f]]);if(_!==0)return _}return _e(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ee()}}function U0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Ii(t),r=Ii(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function B0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Mo(n[i],r[i]);if(s)return s}return _e(n.length,r.length)}function Vo(t){return Dm(t)}function Dm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ii(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _s(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dm(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function z0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Om(t){return!!t&&"integerValue"in t}function k_(t){return!!t&&"arrayValue"in t}function W0(t){return!!t&&"nullValue"in t}function $0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uc(t){return!!t&&"mapValue"in t}function TL(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function al(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ns(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=al(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=al(t.arrayValue.values[n]);return e}return Object.assign({},t)}function IL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=al(n)}setAll(e){let n=mt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=al(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Uc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Uc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ns(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Qt(al(this.value))}}function ek(t){const e=[];return Ns(t.fields,(n,r)=>{const i=new mt([n]);if(Uc(r)){const s=ek(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Mt(e,0,ne.min(),ne.min(),ne.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,i){return new Mt(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new Mt(e,2,n,ne.min(),ne.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,ne.min(),ne.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Rh{constructor(e,n){this.position=e,this.inclusive=n}}function H0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Mo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function q0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zl{constructor(e,n="asc"){this.field=e,this.dir=n}}function SL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tk{}class Ye extends tk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kL(e,n,r):n==="array-contains"?new xL(e,r):n==="in"?new PL(e,r):n==="not-in"?new NL(e,r):n==="array-contains-any"?new bL(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RL(e,r):new AL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mo(n,this.value)):n!==null&&ys(this.value)===ys(n)&&this.matchesComparison(Mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends tk{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new $n(e,n)}matches(e){return nk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nk(t){return t.op==="and"}function rk(t){return CL(t)&&nk(t)}function CL(t){for(const e of t.filters)if(e instanceof $n)return!1;return!0}function Lm(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Vo(t.value);if(rk(t))return t.filters.map(e=>Lm(e)).join(",");{const e=t.filters.map(n=>Lm(n)).join(",");return`${t.op}(${e})`}}function ik(t,e){return t instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.field.isEqual(i.field)&&rr(r.value,i.value)}(t,e):t instanceof $n?function(r,i){return i instanceof $n&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ik(o,i.filters[a]),!0):!1}(t,e):void ee()}function sk(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Vo(n.value)}`}(t):t instanceof $n?function(n){return n.op.toString()+" {"+n.getFilters().map(sk).join(" ,")+"}"}(t):"Filter"}class kL extends Ye{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class RL extends Ye{constructor(e,n){super(e,"in",n),this.keys=ok("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AL extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=ok("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ok(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class xL extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return k_(n)&&Bl(n.arrayValue,this.value)}}class PL extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bl(this.value.arrayValue,n)}}class NL extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bl(this.value.arrayValue,n)}}class bL extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!k_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function G0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DL(t,e,n,r,i,s,o)}function R_(t){const e=re(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Lm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Id(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vo(r)).join(",")),e.ue=n}return e.ue}function A_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ik(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!q0(t.startAt,e.startAt)&&q0(t.endAt,e.endAt)}function Mm(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function OL(t,e,n,r,i,s,o,a){return new ia(t,e,n,r,i,s,o,a)}function Sd(t){return new ia(t)}function K0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ak(t){return t.collectionGroup!==null}function ll(t){const e=re(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new St(mt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new zl(s,r))}),n.has(mt.keyField().canonicalString())||e.ce.push(new zl(mt.keyField(),r))}return e.ce}function er(t){const e=re(t);return e.le||(e.le=LL(e,ll(t))),e.le}function LL(t,e){if(t.limitType==="F")return G0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new zl(i.field,s)});const n=t.endAt?new Rh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rh(t.startAt.position,t.startAt.inclusive):null;return G0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vm(t,e){const n=t.filters.concat([e]);return new ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ah(t,e,n){return new ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cd(t,e){return A_(er(t),er(e))&&t.limitType===e.limitType}function lk(t){return`${R_(er(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>sk(i)).join(", ")}]`),Id(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vo(i)).join(",")),`Target(${r})`}(er(t))}; limitType=${t.limitType})`}function kd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ll(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=H0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ll(r),i)||r.endAt&&!function(o,a,u){const c=H0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ll(r),i))}(t,e)}function ML(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uk(t){return(e,n)=>{let r=!1;for(const i of ll(t)){const s=VL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VL(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Mo(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ns(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return JC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=new tt(K.comparator);function Vr(){return FL}const ck=new tt(K.comparator);function Qa(...t){let e=ck;for(const n of t)e=e.insert(n.key,n);return e}function hk(t){let e=ck;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zi(){return ul()}function dk(){return ul()}function ul(){return new sa(t=>t.toString(),(t,e)=>t.isEqual(e))}const jL=new tt(K.comparator),UL=new St(K.comparator);function fe(...t){let e=UL;for(const n of t)e=e.add(n);return e}const BL=new St(_e);function zL(){return BL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kh(e)?"-0":e}}function fk(t){return{integerValue:""+t}}function pk(t,e){return vL(e)?fk(e):x_(t,e)}/**
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
 */class Rd{constructor(){this._=void 0}}function WL(t,e,n){return t instanceof Wl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&S_(s)&&(s=C_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Fo?gk(t,e):t instanceof jo?_k(t,e):function(i,s){const o=mk(i,s),a=Q0(o)+Q0(i.Pe);return Om(o)&&Om(i.Pe)?fk(a):x_(i.serializer,a)}(t,e)}function $L(t,e,n){return t instanceof Fo?gk(t,e):t instanceof jo?_k(t,e):n}function mk(t,e){return t instanceof $l?function(r){return Om(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Wl extends Rd{}class Fo extends Rd{constructor(e){super(),this.elements=e}}function gk(t,e){const n=yk(e);for(const r of t.elements)n.some(i=>rr(i,r))||n.push(r);return{arrayValue:{values:n}}}class jo extends Rd{constructor(e){super(),this.elements=e}}function _k(t,e){let n=yk(e);for(const r of t.elements)n=n.filter(i=>!rr(i,r));return{arrayValue:{values:n}}}class $l extends Rd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Q0(t){return He(t.integerValue||t.doubleValue)}function yk(t){return k_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.field=e,this.transform=n}}function HL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Fo&&i instanceof Fo||r instanceof jo&&i instanceof jo?Oo(r.elements,i.elements,rr):r instanceof $l&&i instanceof $l?rr(r.Pe,i.Pe):r instanceof Wl&&i instanceof Wl}(t.transform,e.transform)}class qL{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xd{}function vk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ek(t.key,Un.none()):new _u(t.key,t.data,Un.none());{const n=t.data,r=Qt.empty();let i=new St(mt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Mi(t.key,r,new un(i.toArray()),Un.none())}}function GL(t,e,n){t instanceof _u?function(i,s,o){const a=i.value.clone(),u=X0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Mi?function(i,s,o){if(!Bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=X0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(wk(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function cl(t,e,n,r){return t instanceof _u?function(s,o,a,u){if(!Bc(s.precondition,o))return a;const c=s.value.clone(),h=J0(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mi?function(s,o,a,u){if(!Bc(s.precondition,o))return a;const c=J0(s.fieldTransforms,u,o),h=o.data;return h.setAll(wk(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function KL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mk(r.transform,i||null);s!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,s))}return n||null}function Y0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Oo(r,i,(s,o)=>HL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _u extends xd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mi extends xd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function X0(t,e,n){const r=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,$L(o,a,n[i]))}return r}function J0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,WL(s,o,e))}return r}class Ek extends xd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QL extends xd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=cl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=cl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=vk(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Oo(this.mutations,e.mutations,(n,r)=>Y0(n,r))&&Oo(this.baseMutations,e.baseMutations,(n,r)=>Y0(n,r))}}class P_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length);let i=function(){return jL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new P_(e,n,r,i)}}/**
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
 */class XL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class JL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,pe;function ZL(t){switch(t){default:return ee();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Tk(t){if(t===void 0)return Mr("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ke.OK:return M.OK;case Ke.CANCELLED:return M.CANCELLED;case Ke.UNKNOWN:return M.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return M.INTERNAL;case Ke.UNAVAILABLE:return M.UNAVAILABLE;case Ke.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ke.NOT_FOUND:return M.NOT_FOUND;case Ke.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ke.ABORTED:return M.ABORTED;case Ke.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ke.DATA_LOSS:return M.DATA_LOSS;default:return ee()}}(pe=Ke||(Ke={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eM(){return new TextEncoder}/**
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
 */const tM=new as([4294967295,4294967295],0);function Z0(t){const e=eM().encode(t),n=new $C;return n.update(e),new Uint8Array(n.digest())}function eE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new as([n,r],0),new as([i,s],0)]}class N_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ya(`Invalid padding: ${n}`);if(r<0)throw new Ya(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ya(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ya(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=as.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(as.fromNumber(r)));return i.compare(tM)===1&&(i=new as([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Z0(e),[r,i]=eE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new N_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Z0(e),[r,i]=eE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,yu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pd(ne.min(),i,new tt(_e),Vr(),fe())}}class yu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yu(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Ik{constructor(e,n){this.targetId=e,this.me=n}}class Sk{constructor(e,n,r=_t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class tE{constructor(){this.fe=0,this.ge=rE(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new yu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=rE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class nM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Vr(),this.qe=nE(),this.Qe=new tt(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Mm(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Mt.newNoDocument(o,ne.min()))}else Ee(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=_s(r).toUint8Array()}catch(u){if(u instanceof ZC)return gs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new N_(o,i,s)}catch(u){return gs(u instanceof Ya?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Mm(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Mt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=fe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Pd(e,n,this.Qe,this.ke,r);return this.ke=Vr(),this.qe=nE(),this.Qe=new tt(_e),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new tE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new St(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new tE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function nE(){return new tt(K.comparator)}function rE(){return new tt(K.comparator)}const rM={asc:"ASCENDING",desc:"DESCENDING"},iM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sM={and:"AND",or:"OR"};class oM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fm(t,e){return t.useProto3Json||Id(e)?e:{value:e}}function xh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ck(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aM(t,e){return xh(t,e.toTimestamp())}function tr(t){return Ee(!!t),ne.fromTimestamp(function(n){const r=Ii(n);return new et(r.seconds,r.nanos)}(t))}function b_(t,e){return jm(t,e).canonicalString()}function jm(t,e){const n=function(i){return new Pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kk(t){const e=Pe.fromString(t);return Ee(Nk(e)),e}function Um(t,e){return b_(t.databaseId,e.path)}function cp(t,e){const n=kk(e);if(n.get(1)!==t.databaseId.projectId)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Ak(n))}function Rk(t,e){return b_(t.databaseId,e)}function lM(t){const e=kk(t);return e.length===4?Pe.emptyPath():Ak(e)}function Bm(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ak(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function iE(t,e,n){return{name:Um(t,e),fields:n.value.mapValue.fields}}function uM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Ee(h===void 0||typeof h=="string"),_t.fromBase64String(h||"")):(Ee(h===void 0||h instanceof Buffer||h instanceof Uint8Array),_t.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?M.UNKNOWN:Tk(c.code);return new $(h,c.message||"")}(o);n=new Sk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cp(t,r.document.name),s=tr(r.document.updateTime),o=r.document.createTime?tr(r.document.createTime):ne.min(),a=new Qt({mapValue:{fields:r.document.fields}}),u=Mt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new zc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cp(t,r.document),s=r.readTime?tr(r.readTime):ne.min(),o=Mt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new zc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cp(t,r.document),s=r.removedTargetIds||[];n=new zc([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new JL(i,s),a=r.targetId;n=new Ik(a,o)}}return n}function cM(t,e){let n;if(e instanceof _u)n={update:iE(t,e.key,e.value)};else if(e instanceof Ek)n={delete:Um(t,e.key)};else if(e instanceof Mi)n={update:iE(t,e.key,e.data),updateMask:vM(e.fieldMask)};else{if(!(e instanceof QL))return ee();n={verify:Um(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Wl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $l)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:aM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function hM(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?tr(i.updateTime):tr(s);return o.isEqual(ne.min())&&(o=tr(s)),new qL(o,i.transformResults||[])}(n,e))):[]}function dM(t,e){return{documents:[Rk(t,e.path)]}}function fM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Rk(t,i);const s=function(c){if(c.length!==0)return Pk($n.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Ks(p.field),direction:gM(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Fm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function pM(t){let e=lM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=xk(f);return p instanceof $n&&rk(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(E){return new zl(Qs(E.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Id(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,_=f.values||[];return new Rh(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,_=f.values||[];return new Rh(_,p)}(n.endAt)),OL(e,i,o,s,a,"F",u,c)}function mM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qs(n.unaryFilter.field);return Ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qs(n.unaryFilter.field);return Ye.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(Qs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $n.create(n.compositeFilter.filters.map(r=>xk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function gM(t){return rM[t]}function _M(t){return iM[t]}function yM(t){return sM[t]}function Ks(t){return{fieldPath:t.canonicalString()}}function Qs(t){return mt.fromServerFormat(t.fieldPath)}function Pk(t){return t instanceof Ye?function(n){if(n.op==="=="){if($0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NAN"}};if(W0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NAN"}};if(W0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(n.field),op:_M(n.op),value:n.value}}}(t):t instanceof $n?function(n){const r=n.getFilters().map(i=>Pk(i));return r.length===1?r[0]:{compositeFilter:{op:yM(n.op),filters:r}}}(t):ee()}function vM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,r,i,s=ne.min(),o=ne.min(),a=_t.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new oi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.ct=e}}function EM(t){const e=pM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ah(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(){this.un=new IM}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Ti.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class IM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new St(Pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new St(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Uo(0)}static kn(){return new Uo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(){this.changes=new sa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class CM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&cl(r.mutation,i,un.empty(),et.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Zi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Vr();const o=ul(),a=function(){return ul()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Mi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),cl(h.mutation,c,h.mutation.getFieldMask(),et.now())):o.set(c.key,un.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new CM(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ul();let i=new tt((o,a)=>o-a),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||un.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||fe()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=dk();h.forEach(p=>{if(!s.has(p)){const _=vk(n.get(p),r.get(p));_!==null&&f.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ak(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Zi());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,fe())).next(h=>({batchId:a,changes:hk(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Qa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Qa();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(f,p){return new ia(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Mt.newInvalidDocument(h)))});let a=Qa();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&cl(h.mutation,c,un.empty(),et.now()),kd(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:tr(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:EM(i.bundledQuery),readTime:tr(i.readTime)}}(n)),F.resolve()}}/**
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
 */class AM{constructor(){this.overlays=new tt(K.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Zi(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new tt((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Zi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Zi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new XL(n,r));let s=this.Ir.get(n);s===void 0&&(s=fe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class xM{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.Tr=new St(ht.Er),this.dr=new St(ht.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ht(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ht(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Pe([])),r=new ht(n,e),i=new ht(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Pe([])),r=new ht(n,e),i=new ht(n,e+1);let s=fe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ht(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ht{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new St(ht.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new YL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new ht(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ht(n,0),i=new ht(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new St(_e);return n.forEach(i=>{const s=new ht(i,0),o=new ht(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new ht(new K(s),0);let a=new St(_e);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new ht(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ht(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e){this.Mr=e,this.docs=function(){return new tt(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=Vr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Mt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vr();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||mL(pL(h),r)<=0||(i.has(h.key)||kd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bM(this)}getSize(e){return F.resolve(this.size)}}class bM extends SM{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e){this.persistence=e,this.Nr=new sa(n=>R_(n),A_),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Lr=0,this.Br=new D_,this.targetCount=0,this.kr=Uo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Uo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,n){this.qr={},this.overlays={},this.Qr=new I_(0),this.Kr=!1,this.Kr=!0,this.$r=new xM,this.referenceDelegate=e(this),this.Ur=new DM(this),this.indexManager=new TM,this.remoteDocumentCache=function(i){return new NM(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new wM(n),this.Gr=new RM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new PM(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new LM(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class LM extends _L{constructor(e){super(),this.currentSequenceNumber=e}}class O_{constructor(e){this.persistence=e,this.Jr=new D_,this.Yr=null}static Zr(e){return new O_(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ne.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new L_(e,n.fromCache,r,i)}}/**
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
 */class MM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ib()?8:yL(Ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new MM;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Oa()<=de.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Oa()<=de.DEBUG&&G("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Oa()<=de.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(n))):F.resolve())}Yi(e,n){if(K0(n))return F.resolve(null);let r=er(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ah(n,null,"F"),r=er(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Ah(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return K0(n)||i.isEqual(ne.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Oa()<=de.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gs(n)),this.rs(e,o,n,fL(i,-1)).next(a=>a))})}ts(e,n){let r=new St(uk(e));return n.forEach((i,s)=>{kd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Oa()<=de.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ti.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new tt(_e),this._s=new sa(s=>R_(s),A_),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function jM(t,e,n,r){return new FM(t,e,n,r)}async function bk(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=fe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function UM(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,p=f.keys();let _=F.resolve();return p.forEach(E=>{_=_.next(()=>h.getEntry(u,E)).next(A=>{const N=c.docVersions.get(E);Ee(N!==null),A.version.compareTo(N)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=fe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Dk(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function BM(t,e){const n=re(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(_t.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(f,_),function(A,N,I){return A.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(p,_,h)&&a.push(n.Ur.updateTargetData(s,_))});let u=Vr(),c=fe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(zM(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(ne.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function zM(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function WM(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $M(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new oi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function zm(t,e,n){const r=re(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!gu(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function sE(t,e,n){const r=re(t);let i=ne.min(),s=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=re(u),p=f._s.get(h);return p!==void 0?F.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,er(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ne.min(),n?s:fe())).next(a=>(HM(r,ML(e),a),{documents:a,Ts:s})))}function HM(t,e,n){let r=t.us.get(e)||ne.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class oE{constructor(){this.activeTargetIds=zL()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qM{constructor(){this.so=new oE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new oE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _c=null;function hp(){return _c===null?_c=function(){return 268435456+Math.round(2147483648*Math.random())}():_c++,"0x"+_c.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class YM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=hp(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(G("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw gs("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ra}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=KM[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=hp();return new Promise((o,a)=>{const u=new HC;u.setWithCredentials(!0),u.listenOnce(qC.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case jc.NO_ERROR:const h=u.getResponseJson();G(Dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case jc.TIMEOUT:G(Dt,`RPC '${e}' ${s} timed out`),a(new $(M.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const f=u.getStatus();if(G(Dt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const E=function(N){const I=N.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(I)>=0?I:M.UNKNOWN}(_.status);a(new $(E,_.message))}else a(new $(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new $(M.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{G(Dt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(Dt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=hp(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QC(),a=KC(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");G(Dt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let p=!1,_=!1;const E=new QM({Io:N=>{_?G(Dt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(p||(G(Dt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),G(Dt,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},To:()=>f.close()}),A=(N,I,T)=>{N.listen(I,C=>{try{T(C)}catch(O){setTimeout(()=>{throw O},0)}})};return A(f,Ka.EventType.OPEN,()=>{_||(G(Dt,`RPC '${e}' stream ${i} transport opened.`),E.yo())}),A(f,Ka.EventType.CLOSE,()=>{_||(_=!0,G(Dt,`RPC '${e}' stream ${i} transport closed`),E.So())}),A(f,Ka.EventType.ERROR,N=>{_||(_=!0,gs(Dt,`RPC '${e}' stream ${i} transport errored:`,N),E.So(new $(M.UNAVAILABLE,"The operation could not be completed")))}),A(f,Ka.EventType.MESSAGE,N=>{var I;if(!_){const T=N.data[0];Ee(!!T);const C=T,O=C.error||((I=C[0])===null||I===void 0?void 0:I.error);if(O){G(Dt,`RPC '${e}' stream ${i} received error:`,O);const V=O.status;let j=function(S){const w=Ke[S];if(w!==void 0)return Tk(w)}(V),k=O.message;j===void 0&&(j=M.INTERNAL,k="Unknown error status: "+V+" with message "+O.message),_=!0,E.So(new $(j,k)),f.close()}else G(Dt,`RPC '${e}' stream ${i} received:`,T),E.bo(T)}}),A(a,GC.STAT_EVENT,N=>{N.stat===Nm.PROXY?G(Dt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Nm.NOPROXY&&G(Dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function dp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){return new oM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ok(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Mr(n.toString()),Mr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XM extends Lk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=uM(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?tr(o.readTime):ne.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Bm(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Mm(u)?{documents:dM(s,u)}:{query:fM(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ck(s,o.resumeToken);const c=Fm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ne.min())>0){a.readTime=xh(s,o.snapshotVersion.toTimestamp());const c=Fm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=mM(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Bm(this.serializer),n.removeTarget=e,this.a_(n)}}class JM extends Lk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=hM(e.writeResults,e.commitTime),r=tr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Bm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cM(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,jm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,jm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class eV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Mr(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{bs(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=re(u);c.L_.add(4),await vu(c),c.q_.set("Unknown"),c.L_.delete(4),await bd(c)}(this))})}),this.q_=new eV(r,i)}}async function bd(t){if(bs(t))for(const e of t.B_)await e(!0)}async function vu(t){for(const e of t.B_)await e(!1)}function Mk(t,e){const n=re(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),j_(n)?F_(n):oa(n).r_()&&V_(n,e))}function M_(t,e){const n=re(t),r=oa(n);n.N_.delete(e),r.r_()&&Vk(n,e),n.N_.size===0&&(r.r_()?r.o_():bs(n)&&n.q_.set("Unknown"))}function V_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oa(t).A_(e)}function Vk(t,e){t.Q_.xe(e),oa(t).R_(e)}function F_(t){t.Q_=new nM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),oa(t).start(),t.q_.v_()}function j_(t){return bs(t)&&!oa(t).n_()&&t.N_.size>0}function bs(t){return re(t).L_.size===0}function Fk(t){t.Q_=void 0}async function nV(t){t.q_.set("Online")}async function rV(t){t.N_.forEach((e,n)=>{V_(t,e)})}async function iV(t,e){Fk(t),j_(t)?(t.q_.M_(e),F_(t)):t.q_.set("Unknown")}async function sV(t,e,n){if(t.q_.set("Online"),e instanceof Sk&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ph(t,r)}else if(e instanceof zc?t.Q_.Ke(e):e instanceof Ik?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ne.min()))try{const r=await Dk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(_t.EMPTY_BYTE_STRING,h.snapshotVersion)),Vk(s,u);const f=new oi(h.target,u,c,h.sequenceNumber);V_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Ph(t,r)}}async function Ph(t,e,n){if(!gu(e))throw e;t.L_.add(1),await vu(t),t.q_.set("Offline"),n||(n=()=>Dk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await bd(t)})}function jk(t,e){return e().catch(n=>Ph(t,n,e))}async function Dd(t){const e=re(t),n=Si(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;oV(e);)try{const i=await WM(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,aV(e,i)}catch(i){await Ph(e,i)}Uk(e)&&Bk(e)}function oV(t){return bs(t)&&t.O_.length<10}function aV(t,e){t.O_.push(e);const n=Si(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Uk(t){return bs(t)&&!Si(t).n_()&&t.O_.length>0}function Bk(t){Si(t).start()}async function lV(t){Si(t).p_()}async function uV(t){const e=Si(t);for(const n of t.O_)e.m_(n.mutations)}async function cV(t,e,n){const r=t.O_.shift(),i=P_.from(r,e,n);await jk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Dd(t)}async function hV(t,e){e&&Si(t).V_&&await async function(r,i){if(function(o){return ZL(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();Si(r).s_(),await jk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Dd(r)}}(t,e),Uk(t)&&Bk(t)}async function lE(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=bs(n);n.L_.add(3),await vu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await bd(n)}async function dV(t,e){const n=re(t);e?(n.L_.delete(2),await bd(n)):e||(n.L_.add(2),await vu(n),n.q_.set("Unknown"))}function oa(t){return t.K_||(t.K_=function(n,r,i){const s=re(n);return s.w_(),new XM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:nV.bind(null,t),Ro:rV.bind(null,t),mo:iV.bind(null,t),d_:sV.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),j_(t)?F_(t):t.q_.set("Unknown")):(await t.K_.stop(),Fk(t))})),t.K_}function Si(t){return t.U_||(t.U_=function(n,r,i){const s=re(n);return s.w_(),new JM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:lV.bind(null,t),mo:hV.bind(null,t),f_:uV.bind(null,t),g_:cV.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Dd(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new U_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function B_(t,e){if(Mr("AsyncQueue",`${e}: ${t}`),gu(t))return new $(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Qa(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new wo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new wo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.W_=new tt(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bo(e,n,wo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class pV{constructor(){this.queries=cE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=re(n),s=i.queries;i.queries=cE(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new $(M.ABORTED,"Firestore shutting down"))}}function cE(){return new sa(t=>lk(t),Cd)}async function z_(t,e){const n=re(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new fV,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=B_(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&$_(n)}async function W_(t,e){const n=re(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mV(t,e){const n=re(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&$_(n)}function gV(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function $_(t){t.Y_.forEach(e=>{e.next()})}var Wm,hE;(hE=Wm||(Wm={})).ea="default",hE.Cache="cache";class H_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Wm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.key=e}}class Wk{constructor(e){this.key=e}}class _V{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=uk(e),this.Ra=new wo(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new uE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),_=kd(this.query,f)?f:null,E=!!p&&this.mutatedKeys.has(p.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;p&&_?p.data.isEqual(_.data)?E!==A&&(r.track({type:3,doc:_}),N=!0):this.ga(p,_)||(r.track({type:2,doc:_}),N=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),N=!0):p&&!_&&(r.track({type:1,doc:p}),N=!0,(u||c)&&(a=!0)),N&&(_?(o=o.add(_),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(_,E){const A=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return A(_)-A(E)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Bo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new uE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Wk(r))}),this.da.forEach(r=>{e.has(r)||n.push(new zk(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Bo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class yV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vV{constructor(e){this.key=e,this.va=!1}}class wV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new sa(a=>lk(a),Cd),this.Ma=new Map,this.xa=new Set,this.Oa=new tt(K.comparator),this.Na=new Map,this.La=new D_,this.Ba={},this.ka=new Map,this.qa=Uo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function EV(t,e,n=!0){const r=Qk(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await $k(r,e,n,!0),i}async function TV(t,e){const n=Qk(t);await $k(n,e,!0,!1)}async function $k(t,e,n,r){const i=await $M(t.localStore,er(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await IV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Mk(t.remoteStore,i),a}async function IV(t,e,n,r,i){t.Ka=(f,p,_)=>async function(A,N,I,T){let C=N.view.ma(I);C.ns&&(C=await sE(A.localStore,N.query,!1).then(({documents:k})=>N.view.ma(k,C)));const O=T&&T.targetChanges.get(N.targetId),V=T&&T.targetMismatches.get(N.targetId)!=null,j=N.view.applyChanges(C,A.isPrimaryClient,O,V);return fE(A,N.targetId,j.wa),j.snapshot}(t,f,p,_);const s=await sE(t.localStore,e,!0),o=new _V(e,s.Ts),a=o.ma(s.documents),u=yu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);fE(t,n,c.wa);const h=new yV(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function SV(t,e,n){const r=re(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Cd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&M_(r.remoteStore,i.targetId),$m(r,i.targetId)}).catch(mu)):($m(r,i.targetId),await zm(r.localStore,i.targetId,!0))}async function CV(t,e){const n=re(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),M_(n.remoteStore,r.targetId))}async function kV(t,e,n){const r=DV(t);try{const i=await function(o,a){const u=re(o),c=et.now(),h=a.reduce((_,E)=>_.add(E.key),fe());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let E=Vr(),A=fe();return u.cs.getEntries(_,h).next(N=>{E=N,E.forEach((I,T)=>{T.isValidDocument()||(A=A.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,E)).next(N=>{f=N;const I=[];for(const T of a){const C=KL(T,f.get(T.key).overlayedDocument);C!=null&&I.push(new Mi(T.key,C,ek(C.value.mapValue),Un.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,I,a)}).next(N=>{p=N;const I=N.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(_,N.batchId,I)})}).then(()=>({batchId:p.batchId,changes:hk(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new tt(_e)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await wu(r,i.changes),await Dd(r.remoteStore)}catch(i){const s=B_(i,"Failed to persist write");n.reject(s)}}async function Hk(t,e){const n=re(t);try{const r=await BM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Ee(o.va):i.removedDocuments.size>0&&(Ee(o.va),o.va=!1))}),await wu(n,r,e)}catch(r){await mu(r)}}function dE(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=re(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&$_(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RV(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new tt(K.comparator);o=o.insert(s,Mt.newNoDocument(s,ne.min()));const a=fe().add(s),u=new Pd(ne.min(),new Map,new tt(_e),o,a);await Hk(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),q_(r)}else await zm(r.localStore,e,!1).then(()=>$m(r,e,n)).catch(mu)}async function AV(t,e){const n=re(t),r=e.batch.batchId;try{const i=await UM(n.localStore,e);Gk(n,r,null),qk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wu(n,i)}catch(i){await mu(i)}}async function xV(t,e,n){const r=re(t);try{const i=await function(o,a){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Ee(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Gk(r,e,n),qk(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wu(r,i)}catch(i){await mu(i)}}function qk(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Gk(t,e,n){const r=re(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function $m(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Kk(t,r)})}function Kk(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(M_(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),q_(t))}function fE(t,e,n){for(const r of n)r instanceof zk?(t.La.addReference(r.key,e),PV(t,r)):r instanceof Wk?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Kk(t,r.key)):ee()}function PV(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),q_(t))}function q_(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Pe.fromString(e)),r=t.qa.next();t.Na.set(r,new vV(n)),t.Oa=t.Oa.insert(n,r),Mk(t.remoteStore,new oi(er(Sd(n.path)),r,"TargetPurposeLimboResolution",I_.oe))}}async function wu(t,e,n){const r=re(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=L_.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=re(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,p=>F.forEach(p.$i,_=>h.persistence.referenceDelegate.addReference(f,p.targetId,_)).next(()=>F.forEach(p.Ui,_=>h.persistence.referenceDelegate.removeReference(f,p.targetId,_)))))}catch(f){if(!gu(f))throw f;G("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const _=h.os.get(p),E=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(E);h.os=h.os.insert(p,A)}}}(r.localStore,s))}async function NV(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await bk(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new $(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wu(n,r.hs)}}function bV(t,e){const n=re(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function Qk(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RV.bind(null,e),e.Ca.d_=mV.bind(null,e.eventManager),e.Ca.$a=gV.bind(null,e.eventManager),e}function DV(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xV.bind(null,e),e}class Nh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return jM(this.persistence,new VM,e.initialUser,this.serializer)}Ga(e){return new OM(O_.Zr,this.serializer)}Wa(e){return new qM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nh.provider={build:()=>new Nh};class Hm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NV.bind(null,this.syncEngine),await dV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pV}()}createDatastore(e){const n=Nd(e.databaseInfo.databaseId),r=function(s){return new YM(s)}(e.databaseInfo);return function(s,o,a,u){return new ZM(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new tV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>dE(this.syncEngine,n,0),function(){return aE.D()?new aE:new GM}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new wV(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=re(i);G("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await vu(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Hm.provider={build:()=>new Hm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class G_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Mr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ot.UNAUTHENTICATED,this.clientId=T_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=B_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fp(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LV(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>lE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>lE(e.remoteStore,i)),t._onlineComponents=e}async function LV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await fp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await fp(t,new Nh)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await fp(t,new Nh);return t._offlineComponents}async function Yk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await pE(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await pE(t,new Hm))),t._onlineComponents}function MV(t){return Yk(t).then(e=>e.syncEngine)}async function bh(t){const e=await Yk(t),n=e.eventManager;return n.onListen=EV.bind(null,e.syncEngine),n.onUnlisten=SV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=CV.bind(null,e.syncEngine),n}function VV(t,e,n={}){const r=new Rr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new G_({next:p=>{h.Za(),o.enqueueAndForget(()=>W_(s,f));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new $(M.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&u&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new H_(Sd(a.path),h,{includeMetadataChanges:!0,_a:!0});return z_(s,f)}(await bh(t),t.asyncQueue,e,n,r)),r.promise}function FV(t,e,n={}){const r=new Rr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new G_({next:p=>{h.Za(),o.enqueueAndForget(()=>W_(s,f)),p.fromCache&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new H_(a,h,{includeMetadataChanges:!0,_a:!0});return z_(s,f)}(await bh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Xk(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t,e,n){if(!n)throw new $(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Zk(t,e,n,r){if(e===!0&&r===!0)throw new $(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gE(t){if(!K.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _E(t){if(K.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Od(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function nn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Od(t);throw new $(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function jV(t,e){if(e<=0)throw new $(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xk((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ld{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XC;switch(r.type){case"firstParty":return new lL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=mE.get(n);r&&(G("ComponentProvider","Removing Datastore"),mE.delete(n),r.terminate())}(this),Promise.resolve()}}function eR(t,e,n,r={}){var i;const s=(t=nn(t,Ld))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Ot.MOCK_USER;else{a=tC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ot(c)}t._authCredentials=new sL(new YC(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ar(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Ar extends ar{constructor(e,n,r){super(e,n,Sd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new K(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function Ci(t,e,...n){if(t=ve(t),Jk("collection","path",e),t instanceof Ld){const r=Pe.fromString(e,...n);return _E(r),new Ar(t,null,r)}{if(!(t instanceof Ct||t instanceof Ar))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return _E(r),new Ar(t.firestore,null,r)}}function Wt(t,e,...n){if(t=ve(t),arguments.length===1&&(e=T_.newId()),Jk("doc","path",e),t instanceof Ld){const r=Pe.fromString(e,...n);return gE(r),new Ct(t,null,new K(r))}{if(!(t instanceof Ct||t instanceof Ar))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return gE(r),new Ct(t.firestore,t instanceof Ar?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ok(this,"async_queue_retry"),this.Vu=()=>{const r=dp();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=dp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=dp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Rr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!gu(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Mr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=U_.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function wE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Fr extends Ld{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new vE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vE(e),this._firestoreClient=void 0,await e}}}function tR(t,e){const n=typeof t=="object"?t:vd(),r=typeof t=="string"?t:"(default)",i=xs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=JS("firestore");s&&eR(i,...s)}return i}function Eu(t){if(t._terminated)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||UV(t),t._firestoreClient}function UV(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new EL(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Xk(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new OV(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vs(_t.fromBase64String(e))}catch(n){throw new $(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vs(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class Vd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BV=/^__.*__$/;class zV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new _u(e,this.data,n,this.fieldTransforms)}}class nR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function rR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Fd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Fd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Dh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(rR(this.Cu)&&BV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class WV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nd(e)}Qu(e,n,r,i=!1){return new Fd({Cu:e,methodName:n,qu:r,path:mt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jd(t){const e=t._freezeSettings(),n=Nd(t._databaseId);return new WV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iR(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);J_("Data must be an object, but it was:",o,r);const a=oR(r,o);let u,c;if(s.merge)u=new un(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=qm(e,f,n);if(!o.contains(p))throw new $(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);lR(h,p)||h.push(p)}u=new un(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new zV(new Qt(a),u,c)}class Ud extends Vi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ud}}function sR(t,e,n){return new Fd({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class K_ extends Vi{_toFieldTransform(e){return new Ad(e.path,new Wl)}isEqual(e){return e instanceof K_}}class Q_ extends Vi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=sR(this,e,!0),r=this.Ku.map(s=>Ds(s,n)),i=new Fo(r);return new Ad(e.path,i)}isEqual(e){return e instanceof Q_&&No(this.Ku,e.Ku)}}class Y_ extends Vi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=sR(this,e,!0),r=this.Ku.map(s=>Ds(s,n)),i=new jo(r);return new Ad(e.path,i)}isEqual(e){return e instanceof Y_&&No(this.Ku,e.Ku)}}class X_ extends Vi{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new $l(e.serializer,pk(e.serializer,this.$u));return new Ad(e.path,n)}isEqual(e){return e instanceof X_&&this.$u===e.$u}}function $V(t,e,n,r){const i=t.Qu(1,e,n);J_("Data must be an object, but it was:",i,r);const s=[],o=Qt.empty();Ns(r,(u,c)=>{const h=Z_(e,u,n);c=ve(c);const f=i.Nu(h);if(c instanceof Ud)s.push(h);else{const p=Ds(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new un(s);return new nR(o,a,i.fieldTransforms)}function HV(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[qm(e,r,n)],u=[i];if(s.length%2!=0)throw new $(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(qm(e,s[p])),u.push(s[p+1]);const c=[],h=Qt.empty();for(let p=a.length-1;p>=0;--p)if(!lR(c,a[p])){const _=a[p];let E=u[p];E=ve(E);const A=o.Nu(_);if(E instanceof Ud)c.push(_);else{const N=Ds(E,A);N!=null&&(c.push(_),h.set(_,N))}}const f=new un(c);return new nR(h,f,o.fieldTransforms)}function qV(t,e,n,r=!1){return Ds(n,t.Qu(r?4:3,e))}function Ds(t,e){if(aR(t=ve(t)))return J_("Unsupported field value:",e,t),oR(t,e);if(t instanceof Vi)return function(r,i){if(!rR(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ds(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=et.fromDate(r);return{timestampValue:xh(i.serializer,s)}}if(r instanceof et){const s=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xh(i.serializer,s)}}if(r instanceof Md)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vs)return{bytesValue:Ck(i.serializer,r._byteString)};if(r instanceof Ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:b_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Vd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return x_(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Od(r)}`)}(t,e)}function oR(t,e){const n={};return JC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ns(t,(r,i)=>{const s=Ds(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function aR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof Md||t instanceof vs||t instanceof Ct||t instanceof Vi||t instanceof Vd)}function J_(t,e,n){if(!aR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Od(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function qm(t,e,n){if((e=ve(e))instanceof Tu)return e._internalPath;if(typeof e=="string")return Z_(t,e);throw Dh("Field path arguments must be of type string or ",t,!1,void 0,n)}const GV=new RegExp("[~\\*/\\[\\]]");function Z_(t,e,n){if(e.search(GV)>=0)throw Dh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tu(...e.split("."))._internalPath}catch{throw Dh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(M.INVALID_ARGUMENT,a+t+u)}function lR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KV extends uR{data(){return super.data()}}function Bd(t,e){return typeof e=="string"?Z_(t,e):e instanceof Tu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ey{}class zd extends ey{}function zo(t,e,...n){let r=[];e instanceof ey&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Wd).length,a=s.filter(u=>u instanceof Iu).length;if(o>1||o>0&&a>0)throw new $(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Iu extends zd{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Iu(e,n,r)}_apply(e){const n=this._parse(e);return dR(e._query,n),new ar(e.firestore,e.converter,Vm(e._query,n))}_parse(e){const n=jd(e.firestore);return function(s,o,a,u,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){TE(f,h);const _=[];for(const E of f)_.push(EE(u,s,E));p={arrayValue:{values:_}}}else p=EE(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||TE(f,h),p=qV(a,o,f,h==="in"||h==="not-in");return Ye.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Wo(t,e,n){const r=e,i=Bd("where",t);return Iu._create(i,r,n)}class Wd extends ey{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)dR(o,u),o=Vm(o,u)}(e._query,n),new ar(e.firestore,e.converter,Vm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $d extends zd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $d(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zl(s,o)}(e._query,this._field,this._direction);return new ar(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ia(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function hR(t,e="asc"){const n=e,r=Bd("orderBy",t);return $d._create(r,n)}class Hd extends zd{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Hd(e,n,r)}_apply(e){return new ar(e.firestore,e.converter,Ah(e._query,this._limit,this._limitType))}}function Oh(t){return jV("limit",t),Hd._create("limit",t,"F")}function EE(t,e,n){if(typeof(n=ve(n))=="string"){if(n==="")throw new $(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ak(e)&&n.indexOf("/")!==-1)throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!K.isDocumentKey(r))throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return z0(t,new K(r))}if(n instanceof Ct)return z0(t,n._key);throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Od(n)}.`)}function TE(t,e){if(!Array.isArray(t)||t.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dR(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class fR{convertValue(e,n="none"){switch(ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ns(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>He(o.doubleValue));return new Vd(s)}convertGeoPoint(e){return new Md(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=C_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ul(e));default:return null}}convertTimestamp(e){const n=Ii(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);Ee(Nk(r));const i=new Lo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Mr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ty extends uR{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class hl extends ty{data(e={}){return super.data(e)}}class ny{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new hl(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new hl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new lo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new hl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new lo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:QV(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){t=nn(t,Ct);const e=nn(t.firestore,Fr);return VV(Eu(e),t._key).then(n=>_R(e,t,n))}class ry extends fR{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function Hl(t){t=nn(t,ar);const e=nn(t.firestore,Fr),n=Eu(e),r=new ry(e);return cR(t._query),FV(n,t._query).then(i=>new ny(e,r,t,i))}function mR(t,e,n){t=nn(t,Ct);const r=nn(t.firestore,Fr),i=pR(t.converter,e);return qd(r,[iR(jd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Un.none())])}function hn(t,e,n,...r){t=nn(t,Ct);const i=nn(t.firestore,Fr),s=jd(i);let o;return o=typeof(e=ve(e))=="string"||e instanceof Tu?HV(s,"updateDoc",t._key,e,n,r):$V(s,"updateDoc",t._key,e),qd(i,[o.toMutation(t._key,Un.exists(!0))])}function iy(t,e){const n=nn(t.firestore,Fr),r=Wt(t),i=pR(t.converter,e);return qd(n,[iR(jd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Un.exists(!1))]).then(()=>r)}function gR(t,...e){var n,r,i;t=ve(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||wE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(wE(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof Ct)c=nn(t.firestore,Fr),h=Sd(t._key.path),u={next:f=>{e[o]&&e[o](_R(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=nn(t,ar);c=nn(f.firestore,Fr),h=f._query;const p=new ry(c);u={next:_=>{e[o]&&e[o](new ny(c,p,f,_))},error:e[o+1],complete:e[o+2]},cR(t._query)}return function(p,_,E,A){const N=new G_(A),I=new H_(_,N,E);return p.asyncQueue.enqueueAndForget(async()=>z_(await bh(p),I)),()=>{N.Za(),p.asyncQueue.enqueueAndForget(async()=>W_(await bh(p),I))}}(Eu(c),h,a,u)}function qd(t,e){return function(r,i){const s=new Rr;return r.asyncQueue.enqueueAndForget(async()=>kV(await MV(r),i,s)),s.promise}(Eu(t),e)}function _R(t,e,n){const r=n.docs.get(e._key),i=new ry(t);return new ty(t,i,e._key,r,new lo(n.hasPendingWrites,n.fromCache),e.converter)}function Cu(){return new K_("serverTimestamp")}function Gm(...t){return new Q_("arrayUnion",t)}function Km(...t){return new Y_("arrayRemove",t)}function Gi(t){return new X_("increment",t)}(function(e,n=!0){(function(i){ra=i})(Ps),Wn(new Sn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Fr(new oL(r.getProvider("auth-internal")),new cL(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),tn(V0,"4.7.3",e),tn(V0,"4.7.3","esm2017")})();const YV=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:fR,Bytes:vs,CollectionReference:Ar,DocumentReference:Ct,DocumentSnapshot:ty,FieldPath:Tu,FieldValue:Vi,Firestore:Fr,FirestoreError:$,GeoPoint:Md,Query:ar,QueryCompositeFilterConstraint:Wd,QueryConstraint:zd,QueryDocumentSnapshot:hl,QueryFieldFilterConstraint:Iu,QueryLimitConstraint:Hd,QueryOrderByConstraint:$d,QuerySnapshot:ny,SnapshotMetadata:lo,Timestamp:et,VectorValue:Vd,_AutoId:T_,_ByteString:_t,_DatabaseId:Lo,_DocumentKey:K,_EmptyAuthCredentialsProvider:XC,_FieldPath:mt,_cast:nn,_logWarn:gs,_validateIsNotUsedTogether:Zk,addDoc:iy,arrayRemove:Km,arrayUnion:Gm,collection:Ci,connectFirestoreEmulator:eR,doc:Wt,ensureFirestoreConfigured:Eu,executeWrite:qd,getDoc:Su,getDocs:Hl,getFirestore:tR,increment:Gi,limit:Oh,onSnapshot:gR,orderBy:hR,query:zo,serverTimestamp:Cu,setDoc:mR,updateDoc:hn,where:Wo},Symbol.toStringTag,{value:"Module"}));var IE={};const SE="@firebase/database",CE="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yR="";function XV(t){yR=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ml(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return or(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new JV(e)}}catch{}return new ZV},es=vR("localStorage"),eF=vR("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new _d("@firebase/database"),tF=function(){let t=1;return function(){return t++}}(),wR=function(t){const e=Ob(t),n=new Pb;n.update(e);const r=n.digest();return a_.encodeByteArray(r)},ku=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ku.apply(null,r):typeof r=="object"?e+=it(r):e+=r,e+=" "}return e};let dl=null,kE=!0;const nF=function(t,e){B(!0,"Can't turn on custom loggers persistently."),Eo.logLevel=de.VERBOSE,dl=Eo.log.bind(Eo)},pt=function(...t){if(kE===!0&&(kE=!1,dl===null&&eF.get("logging_enabled")===!0&&nF()),dl){const e=ku.apply(null,t);dl(e)}},Ru=function(t){return function(...e){pt(t,...e)}},Qm=function(...t){const e="FIREBASE INTERNAL ERROR: "+ku(...t);Eo.error(e)},jr=function(...t){const e=`FIREBASE FATAL ERROR: ${ku(...t)}`;throw Eo.error(e),new Error(e)},$t=function(...t){const e="FIREBASE WARNING: "+ku(...t);Eo.warn(e)},rF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},iF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$o="[MIN_NAME]",ws="[MAX_NAME]",Os=function(t,e){if(t===e)return 0;if(t===$o||e===ws)return-1;if(e===$o||t===ws)return 1;{const n=RE(t),r=RE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},sF=function(t,e){return t===e?0:t<e?-1:1},La=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},sy=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=it(e[r]),n+=":",n+=sy(t[e[r]]);return n+="}",n},ER=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function yt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const TR=function(t){B(!Gd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let p=parseInt(h.substr(u,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},oF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},aF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lF(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const uF=new RegExp("^-?(0*)\\d{1,10}$"),cF=-2147483648,hF=2147483647,RE=function(t){if(uF.test(t)){const e=Number(t);if(e>=cF&&e<=hF)return e}return null},aa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $t("Exception was thrown by user callback.",n),e},Math.floor(0))}},dF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class fF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){$t(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$t(e)}}class Wc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="5",IR="v",SR="s",CR="r",kR="f",RR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,AR="ls",xR="p",Ym="ac",PR="websocket",NR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=es.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&es.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function DR(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===PR)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===NR)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mF(t)&&(n.ns=t.namespace);const i=[];return yt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(){this.counters_={}}incrementCounter(e,n=1){or(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return db(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp={},mp={};function ay(t){const e=t.toString();return pp[e]||(pp[e]=new gF),pp[e]}function _F(t,e){const n=t.toString();return mp[n]||(mp[n]=e()),mp[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&aa(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="start",vF="close",wF="pLPCommand",EF="pRTLPCB",OR="id",LR="pw",MR="ser",TF="cb",IF="seg",SF="ts",CF="d",kF="dframe",VR=1870,FR=30,RF=VR-FR,AF=25e3,xF=3e4;class uo{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ru(e),this.stats_=ay(n),this.urlFn=u=>(this.appCheckToken&&(u[Ym]=this.appCheckToken),DR(n,NR,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xF)),iF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ly((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===AE)this.id=a,this.password=u;else if(o===vF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[AE]="t",r[MR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[TF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[IR]=oy,this.transportSessionId&&(r[SR]=this.transportSessionId),this.lastSessionId&&(r[AR]=this.lastSessionId),this.applicationId&&(r[xR]=this.applicationId),this.appCheckToken&&(r[Ym]=this.appCheckToken),typeof location<"u"&&location.hostname&&RR.test(location.hostname)&&(r[CR]=kR);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){uo.forceAllow_=!0}static forceDisallow(){uo.forceDisallow_=!0}static isAvailable(){return uo.forceAllow_?!0:!uo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!oF()&&!aF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=QS(n),i=ER(r,RF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[kF]="t",r[OR]=e,r[LR]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ly{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tF(),window[wF+this.uniqueCallbackIdentifier]=e,window[EF+this.uniqueCallbackIdentifier]=n,this.myIFrame=ly.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pt("frame writing exception"),a.stack&&pt(a.stack),pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[OR]=this.myID,e[LR]=this.myPW,e[MR]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+FR+r.length<=VR;){const o=this.pendingSegs.shift();r=r+"&"+IF+i+"="+o.seg+"&"+SF+i+"="+o.ts+"&"+CF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(AF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PF=16384,NF=45e3;let Lh=null;typeof MozWebSocket<"u"?Lh=MozWebSocket:typeof WebSocket<"u"&&(Lh=WebSocket);class On{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ru(this.connId),this.stats_=ay(n),this.connURL=On.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[IR]=oy,typeof location<"u"&&location.hostname&&RR.test(location.hostname)&&(o[CR]=kR),n&&(o[SR]=n),r&&(o[AR]=r),i&&(o[Ym]=i),s&&(o[xR]=s),DR(e,PR,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,es.set("previous_websocket_failure",!0);try{let r;Tb(),this.mySock=new Lh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Lh!==null&&!On.forceDisallow_}static previouslyFailed(){return es.isInMemoryStorage||es.get("previous_websocket_failure")===!0}markConnectionHealthy(){es.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ml(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ER(n,PF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(NF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}On.responsesRequiredToBeHealthy=2;On.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[uo,On]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=On&&On.isAvailable();let r=n&&!On.previouslyFailed();if(e.webSocketOnly&&(n||$t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[On];else{const i=this.transports_=[];for(const s of ql.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ql.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ql.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bF=6e4,DF=5e3,OF=10*1024,LF=100*1024,gp="t",xE="d",MF="s",PE="r",VF="e",NE="o",bE="a",DE="n",OE="p",FF="h";class jF{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ru("c:"+this.id+":"),this.transportManager_=new ql(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>LF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>OF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gp in e){const n=e[gp];n===bE?this.upgradeIfSecondaryHealthy_():n===PE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===NE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=La("t",e),r=La("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:OE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:DE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=La("t",e),r=La("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=La(gp,e);if(xE in e){const r=e[xE];if(n===FF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===DE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===MF?this.onConnectionShutdown_(r):n===PE?this.onReset_(r):n===VF?Qm("Server Error: "+r):n===NE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),oy!==r&&$t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),fl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(DF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:OE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(es.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends UR{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!l_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Mh}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=32,ME=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Te("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ki(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function uy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function UF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Gl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function BR(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function Oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Te(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Bt(t,e){const n=le(t),r=le(e);if(n===null)return e;if(n===r)return Bt(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function BF(t,e){const n=Gl(t,0),r=Gl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Os(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function cy(t,e){if(ki(t)!==ki(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function wn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ki(t)>ki(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class zF{constructor(e,n){this.errorPrefix_=n,this.parts_=Gl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=gd(this.parts_[r]);zR(this)}}function WF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gd(e),zR(t)}function $F(t){const e=t.parts_.pop();t.byteLength_-=gd(e),t.parts_.length>0&&(t.byteLength_-=1)}function zR(t){if(t.byteLength_>ME)throw new Error(t.errorPrefix_+"has a key path longer than "+ME+" bytes ("+t.byteLength_+").");if(t.parts_.length>LE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+LE+") or object contains a cycle "+Ki(t))}function Ki(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy extends UR{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new hy}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=1e3,HF=60*5*1e3,VE=30*1e3,qF=1.3,GF=3e4,KF="server_kill",FE=3;class xr extends jR{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=xr.nextPersistentConnectionId_++,this.log_=Ru("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ma,this.maxReconnectDelay_=HF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(it(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Yn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;xr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&or(e,"w")){const r=Po(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();$t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=VE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ab(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qm("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>GF&&(this.reconnectDelay_=Ma),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new jF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{$t(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(KF)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&$t(f),u())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yh(this.interruptReasons_)&&(this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>sy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Te(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=FE&&(this.reconnectDelay_=VE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=FE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yR.replace(/\./g,"-")]=1,l_()?e["framework.cordova"]=1:nC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mh.getInstance().currentlyOnline();return yh(this.interruptReasons_)&&e}}xr.nextPersistentConnectionId_=0;xr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ce($o,e),i=new ce($o,n);return this.compare(r,i)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc;class WR extends Kd{static get __EMPTY_NODE(){return yc}static set __EMPTY_NODE(e){yc=e}compare(e,n){return Os(e.name,n.name)}isDefinedOn(e){throw ea("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(ws,yc)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,yc)}toString(){return".key"}}const To=new WR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ft.RED,this.left=i??Xt.EMPTY_NODE,this.right=s??Xt.EMPTY_NODE}copy(e,n,r,i,s){return new ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Xt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ft.RED=!0;ft.BLACK=!1;class QF{copy(e,n,r,i,s){return this}insert(e,n,r){return new ft(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xt{constructor(e,n=Xt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ft.BLACK,null,null))}remove(e){return new Xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ft.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vc(this.root_,null,this.comparator_,!0,e)}}Xt.EMPTY_NODE=new QF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YF(t,e){return Os(t.name,e.name)}function dy(t,e){return Os(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xm;function XF(t){Xm=t}const $R=function(t){return typeof t=="number"?"number:"+TR(t):"string:"+t},HR=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&or(e,".sv"),"Priority must be a string or number.")}else B(t===Xm||t.isEmpty(),"priority of unexpected type.");B(t===Xm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jE;class ct{constructor(e,n=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),HR(this.priorityNode_)}static set __childrenNodeConstructor(e){jE=e}static get __childrenNodeConstructor(){return jE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:le(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||ki(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$R(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=TR(this.value_):e+=this.value_,this.lazyHash_=wR(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ct.VALUE_TYPE_ORDER.indexOf(n),s=ct.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qR,GR;function JF(t){qR=t}function ZF(t){GR=t}class e4 extends Kd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Os(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(ws,new ct("[PRIORITY-POST]",GR))}makePost(e,n){const r=qR(e);return new ce(n,new ct("[PRIORITY-POST]",r))}toString(){return".priority"}}const Le=new e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4=Math.log(2);class n4{constructor(e){const n=s=>parseInt(Math.log(s)/t4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vh=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let f,p;if(h===0)return null;if(h===1)return f=t[u],p=n?n(f):f,new ft(p,f.node,ft.BLACK,null,null);{const _=parseInt(h/2,10)+u,E=i(u,_),A=i(_+1,c);return f=t[_],p=n?n(f):f,new ft(p,f.node,ft.BLACK,E,A)}},s=function(u){let c=null,h=null,f=t.length;const p=function(E,A){const N=f-E,I=f;f-=E;const T=i(N+1,I),C=t[N],O=n?n(C):C;_(new ft(O,C.node,A,null,T))},_=function(E){c?(c.left=E,c=E):(h=E,c=E)};for(let E=0;E<u.count;++E){const A=u.nextBitIsOne(),N=Math.pow(2,u.count-(E+1));A?p(N,ft.BLACK):(p(N,ft.BLACK),p(N,ft.RED))}return h},o=new n4(t.length),a=s(o);return new Xt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _p;const Hs={};class Ir{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(Hs&&Le,"ChildrenNode.ts has not been loaded"),_p=_p||new Ir({".priority":Hs},{".priority":Le}),_p}get(e){const n=Po(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Xt?n:null}hasIndex(e){return or(this.indexSet_,e.toString())}addIndex(e,n){B(e!==To,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ce.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Vh(r,e.getCompare()):a=Hs;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new Ir(h,c)}addToIndexes(e,n){const r=vh(this.indexes_,(i,s)=>{const o=Po(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===Hs)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ce.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Vh(a,o.getCompare())}else return Hs;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ce(e.name,a))),u.insert(e,e.node)}});return new Ir(r,this.indexSet_)}removeFromIndexes(e,n){const r=vh(this.indexes_,i=>{if(i===Hs)return i;{const s=n.get(e.name);return s?i.remove(new ce(e.name,s)):i}});return new Ir(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&HR(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Va||(Va=new X(new Xt(dy),null,Ir.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Va}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Va:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ce(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Va:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=le(e);if(r===null)return n;{B(le(e)!==".priority"||ki(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Se(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Le,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$R(this.getPriority().val())+":"),this.forEachChild(Le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wR(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ce(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Au?-1:0}withIndex(e){if(e===To||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===To||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Le),i=n.getIterator(Le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===To?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class r4 extends X{constructor(){super(new Xt(dy),X.EMPTY_NODE,Ir.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Au=new r4;Object.defineProperties(ce,{MIN:{value:new ce($o,X.EMPTY_NODE)},MAX:{value:new ce(ws,Au)}});WR.__EMPTY_NODE=X.EMPTY_NODE;ct.__childrenNodeConstructor=X;XF(Au);ZF(Au);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4=!0;function ze(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ct(n,ze(e))}if(!(t instanceof Array)&&i4){const n=[];let r=!1;if(yt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=ze(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ce(o,u)))}}),n.length===0)return X.EMPTY_NODE;const s=Vh(n,YF,o=>o.name,dy);if(r){const o=Vh(n,Le.getCompare());return new X(s,ze(e),new Ir({".priority":o},{".priority":Le}))}else return new X(s,ze(e),Ir.Default)}else{let n=X.EMPTY_NODE;return yt(t,(r,i)=>{if(or(t,r)&&r.substring(0,1)!=="."){const s=ze(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ze(e))}}JF(ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4 extends Kd{constructor(e){super(),this.indexPath_=e,B(!ue(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Os(e.name,n.name):s}makePost(e,n){const r=ze(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new ce(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Au);return new ce(ws,e)}toString(){return Gl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4 extends Kd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Os(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const r=ze(e);return new ce(n,r)}toString(){return".value"}}const a4=new o4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){return{type:"value",snapshotNode:t}}function Ho(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Kl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ql(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function l4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Kl(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ho(n,r)):o.trackChildChange(Ql(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Le,(i,s)=>{n.hasChild(i)||r.trackChildChange(Kl(i,s))}),n.isLeafNode()||n.forEachChild(Le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ql(i,s,o))}else r.trackChildChange(Ho(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this.indexedFilter_=new fy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Yl.getStartPost_(e),this.endPost_=Yl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ce(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild(Le,(o,a)=>{s.matches(new ce(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Yl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ce(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,_)=>f(_,p)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new ce(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,u);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Ql(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Kl(n,f));const A=a.updateImmediateChild(n,X.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(Ho(p.name,p.node)),A.updateImmediateChild(p.name,p.node)):A}}else return r.isEmpty()?e:h&&o(c,u)>=0?(s!=null&&(s.trackChildChange(Kl(c.name,c.node)),s.trackChildChange(Ho(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$o}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ws}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new py;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function c4(t){return t.loadsAllData()?new fy(t.getIndex()):t.hasLimit()?new u4(t):new Yl(t)}function UE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Le?n="$priority":t.index_===a4?n="$value":t.index_===To?n="$key":(B(t.index_ instanceof s4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=it(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+it(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=it(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+it(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function BE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends jR{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ru("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fh.getListenId_(e,r),a={};this.listens_[o]=a;const u=UE(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Po(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Fh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=UE(e._queryParams),r=e._path.toString(),i=new Yn;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ta(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Ml(a.responseText)}catch{$t("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&$t("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){return{value:null,children:new Map}}function la(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,jh());const i=t.children.get(r);e=Se(e),la(i,e,n)}}function Jm(t,e){if(ue(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Le,(r,i)=>{la(t,new Te(r),i)}),Jm(t,e)}}else if(t.children.size>0){const n=le(e);return e=Se(e),t.children.has(n)&&Jm(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Zm(t,e,n){t.value!==null?n(e,t.value):d4(t,(r,i)=>{const s=new Te(e.toString()+"/"+r);Zm(i,s,n)})}function d4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&yt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=10*1e3,p4=30*1e3,m4=5*60*1e3;class g4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new f4(e);const r=zE+(p4-zE)*Math.random();fl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;yt(e,(i,s)=>{s>0&&or(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),fl(this.reportStats_.bind(this),Math.floor(Math.random()*2*m4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mn||(Mn={}));function my(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _y(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Mn.ACK_USER_WRITE,this.source=my()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new Uh(ye(),n,this.revert)}}else return B(le(this.path)===e,"operationForChild called for unrelated child."),new Uh(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.source=e,this.path=n,this.type=Mn.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new Xl(this.source,ye()):new Xl(this.source,Se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Mn.OVERWRITE}operationForChild(e){return ue(this.path)?new Es(this.source,ye(),this.snap.getImmediateChild(e)):new Es(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Mn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Es(this.source,ye(),n.value):new qo(this.source,ye(),n)}else return B(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qo(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function y4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(l4(o.childName,o.snapshotNode))}),Fa(t,i,"child_removed",e,r,n),Fa(t,i,"child_added",e,r,n),Fa(t,i,"child_moved",s,r,n),Fa(t,i,"child_changed",e,r,n),Fa(t,i,"value",e,r,n),i}function Fa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>w4(t,a,u)),o.forEach(a=>{const u=v4(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function v4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function w4(t,e,n){if(e.childName==null||n.childName==null)throw ea("Should only compare child_ events.");const r=new ce(e.childName,e.snapshotNode),i=new ce(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t,e){return{eventCache:t,serverCache:e}}function pl(t,e,n,r){return Qd(new Ri(e,n,r),t.serverCache)}function QR(t,e,n,r){return Qd(t.eventCache,new Ri(e,n,r))}function Bh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ts(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yp;const E4=()=>(yp||(yp=new Xt(sF)),yp);class ke{constructor(e,n=E4()){this.value=e,this.children=n}static fromObject(e){let n=new ke(null);return yt(e,(r,i)=>{n=n.set(new Te(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(ue(e))return null;{const r=le(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Se(e),n);return s!=null?{path:Oe(new Te(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=le(e),r=this.children.get(n);return r!==null?r.subtree(Se(e)):new ke(null)}}set(e,n){if(ue(e))return new ke(n,this.children);{const r=le(e),s=(this.children.get(r)||new ke(null)).set(Se(e),n),o=this.children.insert(r,s);return new ke(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=le(e),r=this.children.get(n);if(r){const i=r.remove(Se(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ke(null):new ke(this.value,s)}else return this}}get(e){if(ue(e))return this.value;{const n=le(e),r=this.children.get(n);return r?r.get(Se(e)):null}}setTree(e,n){if(ue(e))return n;{const r=le(e),s=(this.children.get(r)||new ke(null)).setTree(Se(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ke(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Oe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ue(e))return null;{const s=le(e),o=this.children.get(s);return o?o.findOnPath_(Se(e),Oe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const i=le(e),s=this.children.get(i);return s?s.foreachOnPath_(Se(e),Oe(n,i),r):new ke(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.writeTree_=e}static empty(){return new Bn(new ke(null))}}function ml(t,e,n){if(ue(e))return new Bn(new ke(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Bt(i,e);return s=s.updateChild(o,n),new Bn(t.writeTree_.set(i,s))}else{const i=new ke(n),s=t.writeTree_.setTree(e,i);return new Bn(s)}}}function eg(t,e,n){let r=t;return yt(n,(i,s)=>{r=ml(r,Oe(e,i),s)}),r}function WE(t,e){if(ue(e))return Bn.empty();{const n=t.writeTree_.setTree(e,new ke(null));return new Bn(n)}}function tg(t,e){return Ls(t,e)!=null}function Ls(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Bt(n.path,e)):null}function $E(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(r,i)=>{e.push(new ce(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ce(r,i.value))}),e}function yi(t,e){if(ue(e))return t;{const n=Ls(t,e);return n!=null?new Bn(new ke(n)):new Bn(t.writeTree_.subtree(e))}}function ng(t){return t.writeTree_.isEmpty()}function Go(t,e){return YR(ye(),t.writeTree_,e)}function YR(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=YR(Oe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Oe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e){return eA(e,t)}function T4(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ml(t.visibleWrites,e,n)),t.lastWriteId=r}function I4(t,e,n,r){B(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=eg(t.visibleWrites,e,n),t.lastWriteId=r}function S4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function C4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&k4(a,r.path)?i=!1:wn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return R4(t),!0;if(r.snap)t.visibleWrites=WE(t.visibleWrites,r.path);else{const a=r.children;yt(a,u=>{t.visibleWrites=WE(t.visibleWrites,Oe(r.path,u))})}return!0}else return!1}function k4(t,e){if(t.snap)return wn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&wn(Oe(t.path,n),e))return!0;return!1}function R4(t){t.visibleWrites=XR(t.allWrites,A4,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function A4(t){return t.visible}function XR(t,e,n){let r=Bn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)wn(n,o)?(a=Bt(n,o),r=ml(r,a,s.snap)):wn(o,n)&&(a=Bt(o,n),r=ml(r,ye(),s.snap.getChild(a)));else if(s.children){if(wn(n,o))a=Bt(n,o),r=eg(r,a,s.children);else if(wn(o,n))if(a=Bt(o,n),ue(a))r=eg(r,ye(),s.children);else{const u=Po(s.children,le(a));if(u){const c=u.getChild(Se(a));r=ml(r,ye(),c)}}}else throw ea("WriteRecord should have .snap or .children")}}return r}function JR(t,e,n,r,i){if(!r&&!i){const s=Ls(t.visibleWrites,e);if(s!=null)return s;{const o=yi(t.visibleWrites,e);if(ng(o))return n;if(n==null&&!tg(o,ye()))return null;{const a=n||X.EMPTY_NODE;return Go(o,a)}}}else{const s=yi(t.visibleWrites,e);if(!i&&ng(s))return n;if(!i&&n==null&&!tg(s,ye()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(wn(c.path,e)||wn(e,c.path))},a=XR(t.allWrites,o,e),u=n||X.EMPTY_NODE;return Go(a,u)}}}function x4(t,e,n){let r=X.EMPTY_NODE;const i=Ls(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=yi(t.visibleWrites,e);return n.forEachChild(Le,(o,a)=>{const u=Go(yi(s,new Te(o)),a);r=r.updateImmediateChild(o,u)}),$E(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=yi(t.visibleWrites,e);return $E(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function P4(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Oe(e,n);if(tg(t.visibleWrites,s))return null;{const o=yi(t.visibleWrites,s);return ng(o)?i.getChild(n):Go(o,i.getChild(n))}}function N4(t,e,n,r){const i=Oe(e,n),s=Ls(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=yi(t.visibleWrites,i);return Go(o,r.getNode().getImmediateChild(n))}else return null}function b4(t,e){return Ls(t.visibleWrites,e)}function D4(t,e,n,r,i,s,o){let a;const u=yi(t.visibleWrites,e),c=Ls(u,ye());if(c!=null)a=c;else if(n!=null)a=Go(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=p.getNext();for(;_&&h.length<i;)f(_,r)!==0&&h.push(_),_=p.getNext();return h}else return[]}function O4(){return{visibleWrites:Bn.empty(),allWrites:[],lastWriteId:-1}}function zh(t,e,n,r){return JR(t.writeTree,t.treePath,e,n,r)}function yy(t,e){return x4(t.writeTree,t.treePath,e)}function HE(t,e,n,r){return P4(t.writeTree,t.treePath,e,n,r)}function Wh(t,e){return b4(t.writeTree,Oe(t.treePath,e))}function L4(t,e,n,r,i,s){return D4(t.writeTree,t.treePath,e,n,r,i,s)}function vy(t,e,n){return N4(t.writeTree,t.treePath,e,n)}function ZR(t,e){return eA(Oe(t.treePath,e),t.writeTree)}function eA(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ql(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Kl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ho(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ql(r,e.snapshotNode,i.oldSnap));else throw ea("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const tA=new V4;class wy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ri(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ts(this.viewCache_),s=L4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F4(t){return{filter:t}}function j4(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function U4(t,e,n,r,i){const s=new M4;let o,a;if(n.type===Mn.OVERWRITE){const c=n;c.source.fromUser?o=rg(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=$h(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Mn.MERGE){const c=n;c.source.fromUser?o=z4(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ig(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Mn.ACK_USER_WRITE){const c=n;c.revert?o=H4(t,e,c.path,r,i,s):o=W4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Mn.LISTEN_COMPLETE)o=$4(t,e,n.path,r,s);else throw ea("Unknown operation type: "+n.type);const u=s.getChanges();return B4(e,o,u),{viewCache:o,changes:u}}function B4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Bh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(KR(Bh(e)))}}function nA(t,e,n,r,i,s){const o=e.eventCache;if(Wh(r,n)!=null)return e;{let a,u;if(ue(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ts(e),h=c instanceof X?c:X.EMPTY_NODE,f=yy(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=zh(r,Ts(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=le(n);if(c===".priority"){B(ki(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=HE(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Se(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const p=HE(r,n,o.getNode(),u);p!=null?f=o.getNode().getImmediateChild(c).updateChild(h,p):f=o.getNode().getImmediateChild(c)}else f=vy(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return pl(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function $h(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),_,null)}else{const _=le(n);if(!u.isCompleteForPath(n)&&ki(n)>1)return e;const E=Se(n),N=u.getNode().getImmediateChild(_).updateChild(E,r);_===".priority"?c=h.updatePriority(u.getNode(),N):c=h.updateChild(u.getNode(),_,N,E,tA,null)}const f=QR(e,c,u.isFullyInitialized()||ue(n),h.filtersNodes()),p=new wy(i,f,s);return nA(t,f,n,i,p,a)}function rg(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new wy(i,e,s);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=pl(e,c,!0,t.filter.filtersNodes());else{const f=le(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=pl(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Se(n),_=a.getNode().getImmediateChild(f);let E;if(ue(p))E=r;else{const A=h.getCompleteChild(f);A!=null?uy(p)===".priority"&&A.getChild(BR(p)).isEmpty()?E=A:E=A.updateChild(p,r):E=X.EMPTY_NODE}if(_.equals(E))u=e;else{const A=t.filter.updateChild(a.getNode(),f,E,p,h,o);u=pl(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function qE(t,e){return t.eventCache.isCompleteForChild(e)}function z4(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=Oe(n,u);qE(e,le(h))&&(a=rg(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=Oe(n,u);qE(e,le(h))||(a=rg(t,a,h,c,i,s,o))}),a}function GE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ig(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ue(n)?c=r:c=new ke(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),E=GE(t,_,p);u=$h(t,u,new Te(f),E,i,s,o,a)}}),c.children.inorderTraversal((f,p)=>{const _=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!_){const E=e.serverCache.getNode().getImmediateChild(f),A=GE(t,E,p);u=$h(t,u,new Te(f),A,i,s,o,a)}}),u}function W4(t,e,n,r,i,s,o){if(Wh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ue(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return $h(t,e,n,u.getNode().getChild(n),i,s,a,o);if(ue(n)){let c=new ke(null);return u.getNode().forEachChild(To,(h,f)=>{c=c.set(new Te(h),f)}),ig(t,e,n,c,i,s,a,o)}else return e}else{let c=new ke(null);return r.foreach((h,f)=>{const p=Oe(n,h);u.isCompleteForPath(p)&&(c=c.set(h,u.getNode().getChild(p)))}),ig(t,e,n,c,i,s,a,o)}}function $4(t,e,n,r,i){const s=e.serverCache,o=QR(e,s.getNode(),s.isFullyInitialized()||ue(n),s.isFiltered());return nA(t,o,n,r,tA,i)}function H4(t,e,n,r,i,s){let o;if(Wh(r,n)!=null)return e;{const a=new wy(r,e,i),u=e.eventCache.getNode();let c;if(ue(n)||le(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=zh(r,Ts(e));else{const f=e.serverCache.getNode();B(f instanceof X,"serverChildren would be complete if leaf node"),h=yy(r,f)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=le(n);let f=vy(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,Se(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,X.EMPTY_NODE,Se(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zh(r,Ts(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Wh(r,ye())!=null,pl(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new fy(r.getIndex()),s=c4(r);this.processor_=F4(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),h=new Ri(u,o.isFullyInitialized(),i.filtersNodes()),f=new Ri(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Qd(f,h),this.eventGenerator_=new _4(this.query_)}get query(){return this.query_}}function G4(t){return t.viewCache_.serverCache.getNode()}function K4(t){return Bh(t.viewCache_)}function Q4(t,e){const n=Ts(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function KE(t){return t.eventRegistrations_.length===0}function Y4(t,e){t.eventRegistrations_.push(e)}function QE(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function YE(t,e,n,r){e.type===Mn.MERGE&&e.source.queryId!==null&&(B(Ts(t.viewCache_),"We should always have a full cache before handling merges"),B(Bh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=U4(t.processor_,i,e,n,r);return j4(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,rA(t,s.changes,s.viewCache.eventCache.getNode(),null)}function X4(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(s,o)=>{r.push(Ho(s,o))}),n.isFullyInitialized()&&r.push(KR(n.getNode())),rA(t,r,n.getNode(),e)}function rA(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return y4(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh;class iA{constructor(){this.views=new Map}}function J4(t){B(!Hh,"__referenceConstructor has already been defined"),Hh=t}function Z4(){return B(Hh,"Reference.ts has not been loaded"),Hh}function ej(t){return t.views.size===0}function Ey(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),YE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(YE(o,e,n,r));return s}}function sA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=zh(n,i?r:null),u=!1;a?u=!0:r instanceof X?(a=yy(n,r),u=!1):(a=X.EMPTY_NODE,u=!1);const c=Qd(new Ri(a,u,!1),new Ri(r,i,!1));return new q4(e,c)}return o}function tj(t,e,n,r,i,s){const o=sA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Y4(o,n),X4(o,n)}function nj(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Ai(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(QE(c,n,r)),KE(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(QE(u,n,r)),KE(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!Ai(t)&&s.push(new(Z4())(e._repo,e._path)),{removed:s,events:o}}function oA(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vi(t,e){let n=null;for(const r of t.views.values())n=n||Q4(r,e);return n}function aA(t,e){if(e._queryParams.loadsAllData())return Xd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function lA(t,e){return aA(t,e)!=null}function Ai(t){return Xd(t)!=null}function Xd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qh;function rj(t){B(!qh,"__referenceConstructor has already been defined"),qh=t}function ij(){return B(qh,"Reference.ts has not been loaded"),qh}let sj=1;class XE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=O4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uA(t,e,n,r,i){return T4(t.pendingWriteTree_,e,n,r,i),i?ua(t,new Es(my(),e,n)):[]}function oj(t,e,n,r){I4(t.pendingWriteTree_,e,n,r);const i=ke.fromObject(n);return ua(t,new qo(my(),e,i))}function ai(t,e,n=!1){const r=S4(t.pendingWriteTree_,e);if(C4(t.pendingWriteTree_,e)){let s=new ke(null);return r.snap!=null?s=s.set(ye(),!0):yt(r.children,o=>{s=s.set(new Te(o),!0)}),ua(t,new Uh(r.path,s,n))}else return[]}function xu(t,e,n){return ua(t,new Es(gy(),e,n))}function aj(t,e,n){const r=ke.fromObject(n);return ua(t,new qo(gy(),e,r))}function lj(t,e){return ua(t,new Xl(gy(),e))}function uj(t,e,n){const r=Iy(t,n);if(r){const i=Sy(r),s=i.path,o=i.queryId,a=Bt(s,e),u=new Xl(_y(o),a);return Cy(t,s,u)}else return[]}function Gh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||lA(o,e))){const u=nj(o,e,n,r);ej(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const h=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(p,_)=>Ai(_));if(h&&!f){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const _=dj(p);for(let E=0;E<_.length;++E){const A=_[E],N=A.query,I=fA(t,A);t.listenProvider_.startListening(gl(N),Jl(t,N),I.hashFn,I.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(gl(e),null):c.forEach(p=>{const _=t.queryToTagMap.get(Jd(p));t.listenProvider_.stopListening(gl(p),_)}))}fj(t,c)}return a}function cA(t,e,n,r){const i=Iy(t,r);if(i!=null){const s=Sy(i),o=s.path,a=s.queryId,u=Bt(o,e),c=new Es(_y(a),u,n);return Cy(t,o,c)}else return[]}function cj(t,e,n,r){const i=Iy(t,r);if(i){const s=Sy(i),o=s.path,a=s.queryId,u=Bt(o,e),c=ke.fromObject(n),h=new qo(_y(a),u,c);return Cy(t,o,h)}else return[]}function sg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const E=Bt(p,i);s=s||vi(_,E),o=o||Ai(_)});let a=t.syncPointTree_.get(i);a?(o=o||Ai(a),s=s||vi(a,ye())):(a=new iA,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,E)=>{const A=vi(E,ye());A&&(s=s.updateImmediateChild(_,A))}));const c=lA(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=Jd(e);B(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=pj();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const h=Yd(t.pendingWriteTree_,i);let f=tj(a,e,n,h,s,u);if(!c&&!o&&!r){const p=aA(a,e);f=f.concat(mj(t,e,p))}return f}function Ty(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Bt(o,e),c=vi(a,u);if(c)return c});return JR(i,e,s,n,!0)}function hj(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Bt(c,n);r=r||vi(h,f)});let i=t.syncPointTree_.get(n);i?r=r||vi(i,ye()):(i=new iA,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ri(r,!0,!1):null,a=Yd(t.pendingWriteTree_,e._path),u=sA(i,e,a,s?o.getNode():X.EMPTY_NODE,s);return K4(u)}function ua(t,e){return hA(e,t.syncPointTree_,null,Yd(t.pendingWriteTree_,ye()))}function hA(t,e,n,r){if(ue(t.path))return dA(t,e,n,r);{const i=e.get(ye());n==null&&i!=null&&(n=vi(i,ye()));let s=[];const o=le(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=ZR(r,o);s=s.concat(hA(a,u,c,h))}return i&&(s=s.concat(Ey(i,t,r,n))),s}}function dA(t,e,n,r){const i=e.get(ye());n==null&&i!=null&&(n=vi(i,ye()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=ZR(r,o),h=t.operationForChild(o);h&&(s=s.concat(dA(h,a,u,c)))}),i&&(s=s.concat(Ey(i,t,r,n))),s}function fA(t,e){const n=e.query,r=Jl(t,n);return{hashFn:()=>(G4(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?uj(t,n._path,r):lj(t,n._path);{const s=lF(i,n);return Gh(t,n,null,s)}}}}function Jl(t,e){const n=Jd(e);return t.queryToTagMap.get(n)}function Jd(t){return t._path.toString()+"$"+t._queryIdentifier}function Iy(t,e){return t.tagToQueryMap.get(e)}function Sy(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function Cy(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=Yd(t.pendingWriteTree_,e);return Ey(r,n,i,null)}function dj(t){return t.fold((e,n,r)=>{if(n&&Ai(n))return[Xd(n)];{let i=[];return n&&(i=oA(n)),yt(r,(s,o)=>{i=i.concat(o)}),i}})}function gl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ij())(t._repo,t._path):t}function fj(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Jd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function pj(){return sj++}function mj(t,e,n){const r=e._path,i=Jl(t,e),s=fA(t,n),o=t.listenProvider_.startListening(gl(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!Ai(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!ue(c)&&h&&Ai(h))return[Xd(h).query];{let p=[];return h&&(p=p.concat(oA(h).map(_=>_.query))),yt(f,(_,E)=>{p=p.concat(E)}),p}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(gl(h),Jl(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ky(n)}node(){return this.node_}}class Ry{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Oe(this.path_,e);return new Ry(this.syncTree_,n)}node(){return Ty(this.syncTree_,this.path_)}}const gj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},JE=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _j(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yj(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_j=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},yj=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},pA=function(t,e,n,r){return Ay(e,new Ry(n,t),r)},mA=function(t,e,n){return Ay(t,new ky(e),n)};function Ay(t,e,n){const r=t.getPriority().val(),i=JE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=JE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ct(a,ze(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ct(i))),o.forEachChild(Le,(a,u)=>{const c=Ay(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Py(t,e){let n=e instanceof Te?e:new Te(e),r=t,i=le(n);for(;i!==null;){const s=Po(r.node.children,i)||{children:{},childCount:0};r=new xy(i,r,s),n=Se(n),i=le(n)}return r}function ca(t){return t.node.value}function gA(t,e){t.node.value=e,og(t)}function _A(t){return t.node.childCount>0}function vj(t){return ca(t)===void 0&&!_A(t)}function Zd(t,e){yt(t.node.children,(n,r)=>{e(new xy(n,t,r))})}function yA(t,e,n,r){n&&e(t),Zd(t,i=>{yA(i,e,!0)})}function wj(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Pu(t){return new Te(t.parent===null?t.name:Pu(t.parent)+"/"+t.name)}function og(t){t.parent!==null&&Ej(t.parent,t.name,t)}function Ej(t,e,n){const r=vj(n),i=or(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,og(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,og(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tj=/[\[\].#$\/\u0000-\u001F\u007F]/,Ij=/[\[\].#$\u0000-\u001F\u007F]/,vp=10*1024*1024,Ny=function(t){return typeof t=="string"&&t.length!==0&&!Tj.test(t)},vA=function(t){return typeof t=="string"&&t.length!==0&&!Ij.test(t)},Sj=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vA(t)},wA=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Gd(t)||t&&typeof t=="object"&&or(t,".sv")},Kh=function(t,e,n,r){r&&e===void 0||ef(bo(t,"value"),e,n)},ef=function(t,e,n){const r=n instanceof Te?new zF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ki(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ki(r)+" with contents = "+e.toString());if(Gd(e))throw new Error(t+"contains "+e.toString()+" "+Ki(r));if(typeof e=="string"&&e.length>vp/3&&gd(e)>vp)throw new Error(t+"contains a string greater than "+vp+" utf8 bytes "+Ki(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(yt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ny(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ki(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WF(r,o),ef(t,a,r),$F(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ki(r)+" in addition to actual children.")}},Cj=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Gl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ny(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(BF);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&wn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},EA=function(t,e,n,r){const i=bo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];yt(e,(o,a)=>{const u=new Te(o);if(ef(i,a,Oe(n,u)),uy(u)===".priority"&&!wA(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),Cj(i,s)},kj=function(t,e,n){if(Gd(e))throw new Error(bo(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!wA(e))throw new Error(bo(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},TA=function(t,e,n,r){if(!vA(n))throw new Error(bo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Rj=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),TA(t,e,n)},ts=function(t,e){if(le(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Aj=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ny(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Sj(n))throw new Error(bo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!cy(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function IA(t,e,n){tf(t,n),SA(t,r=>cy(r,e))}function kn(t,e,n){tf(t,n),SA(t,r=>wn(r,e)||wn(e,r))}function SA(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Pj(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Pj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();dl&&pt("event: "+n.toString()),aa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nj="repo_interrupt",bj=25;class Dj{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jh(),this.transactionQueueTree_=new xy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Oj(t,e,n){if(t.stats_=ay(t.repoInfo_),t.forceRestClient_||dF())t.server_=new Fh(t.repoInfo_,(r,i,s,o)=>{ZE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>eT(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xr(t.repoInfo_,e,(r,i,s,o)=>{ZE(t,r,i,s,o)},r=>{eT(t,r)},r=>{Lj(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=_F(t.repoInfo_,()=>new g4(t.stats_,t.server_)),t.infoData_=new h4,t.infoSyncTree_=new XE({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=xu(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),by(t,"connected",!1),t.serverSyncTree_=new XE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);kn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function CA(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function nf(t){return gj({timestamp:CA(t)})}function ZE(t,e,n,r,i){t.dataUpdateCount++;const s=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=vh(n,c=>ze(c));o=cj(t.serverSyncTree_,s,u,i)}else{const u=ze(n);o=cA(t.serverSyncTree_,s,u,i)}else if(r){const u=vh(n,c=>ze(c));o=aj(t.serverSyncTree_,s,u)}else{const u=ze(n);o=xu(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Ko(t,s)),kn(t.eventQueue_,a,o)}function eT(t,e){by(t,"connected",e),e===!1&&jj(t)}function Lj(t,e){yt(e,(n,r)=>{by(t,n,r)})}function by(t,e,n){const r=new Te("/.info/"+e),i=ze(n);t.infoData_.updateSnapshot(r,i);const s=xu(t.infoSyncTree_,r,i);kn(t.eventQueue_,r,s)}function Dy(t){return t.nextWriteId_++}function Mj(t,e,n){const r=hj(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ze(i).withIndex(e._queryParams.getIndex());sg(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=xu(t.serverSyncTree_,e._path,s);else{const a=Jl(t.serverSyncTree_,e);o=cA(t.serverSyncTree_,e._path,s,a)}return kn(t.eventQueue_,e._path,o),Gh(t.serverSyncTree_,e,n,null,!0),s},i=>(Nu(t,"get for query "+it(e)+" failed: "+i),Promise.reject(new Error(i))))}function Vj(t,e,n,r,i){Nu(t,"set",{path:e.toString(),value:n,priority:r});const s=nf(t),o=ze(n,r),a=Ty(t.serverSyncTree_,e),u=mA(o,a,s),c=Dy(t),h=uA(t.serverSyncTree_,e,u,c,!0);tf(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(p,_)=>{const E=p==="ok";E||$t("set at "+e+" failed: "+p);const A=ai(t.serverSyncTree_,c,!E);kn(t.eventQueue_,e,A),xi(t,i,p,_)});const f=Ly(t,e);Ko(t,f),kn(t.eventQueue_,f,[])}function Fj(t,e,n,r){Nu(t,"update",{path:e.toString(),value:n});let i=!0;const s=nf(t),o={};if(yt(n,(a,u)=>{i=!1,o[a]=pA(Oe(e,a),ze(u),t.serverSyncTree_,s)}),i)pt("update() called with empty data.  Don't do anything."),xi(t,r,"ok",void 0);else{const a=Dy(t),u=oj(t.serverSyncTree_,e,o,a);tf(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||$t("update at "+e+" failed: "+c);const p=ai(t.serverSyncTree_,a,!f),_=p.length>0?Ko(t,e):e;kn(t.eventQueue_,_,p),xi(t,r,c,h)}),yt(n,c=>{const h=Ly(t,Oe(e,c));Ko(t,h)}),kn(t.eventQueue_,e,[])}}function jj(t){Nu(t,"onDisconnectEvents");const e=nf(t),n=jh();Zm(t.onDisconnect_,ye(),(i,s)=>{const o=pA(i,s,t.serverSyncTree_,e);la(n,i,o)});let r=[];Zm(n,ye(),(i,s)=>{r=r.concat(xu(t.serverSyncTree_,i,s));const o=Ly(t,i);Ko(t,o)}),t.onDisconnect_=jh(),kn(t.eventQueue_,ye(),r)}function Uj(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Jm(t.onDisconnect_,e),xi(t,n,r,i)})}function tT(t,e,n,r){const i=ze(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&la(t.onDisconnect_,e,i),xi(t,r,s,o)})}function Bj(t,e,n,r,i){const s=ze(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&la(t.onDisconnect_,e,s),xi(t,i,o,a)})}function zj(t,e,n,r){if(yh(n)){pt("onDisconnect().update() called with empty data.  Don't do anything."),xi(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&yt(n,(o,a)=>{const u=ze(a);la(t.onDisconnect_,Oe(e,o),u)}),xi(t,r,i,s)})}function Wj(t,e,n){let r;le(e._path)===".info"?r=sg(t.infoSyncTree_,e,n):r=sg(t.serverSyncTree_,e,n),IA(t.eventQueue_,e._path,r)}function kA(t,e,n){let r;le(e._path)===".info"?r=Gh(t.infoSyncTree_,e,n):r=Gh(t.serverSyncTree_,e,n),IA(t.eventQueue_,e._path,r)}function $j(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Nj)}function Nu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pt(n,...e)}function xi(t,e,n,r){e&&aa(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function RA(t,e,n){return Ty(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function Oy(t,e=t.transactionQueueTree_){if(e||rf(t,e),ca(e)){const n=xA(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Hj(t,Pu(e),n)}else _A(e)&&Zd(e,n=>{Oy(t,n)})}function Hj(t,e,n){const r=n.map(c=>c.currentWriteId),i=RA(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Bt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Nu(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(ai(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();rf(t,Py(t.transactionQueueTree_,e)),Oy(t,t.transactionQueueTree_),kn(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)aa(f[p])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{$t("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Ko(t,e)}},o)}function Ko(t,e){const n=AA(t,e),r=Pu(n),i=xA(t,n);return qj(t,i,r),r}function qj(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Bt(n,u.path);let h=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,i=i.concat(ai(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=bj)h=!0,f="maxretry",i=i.concat(ai(t.serverSyncTree_,u.currentWriteId,!0));else{const p=RA(t,u.path,o);u.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){ef("transaction failed: Data returned ",_,u.path);let E=ze(_);typeof _=="object"&&_!=null&&or(_,".priority")||(E=E.updatePriority(p.getPriority()));const N=u.currentWriteId,I=nf(t),T=mA(E,p,I);u.currentOutputSnapshotRaw=E,u.currentOutputSnapshotResolved=T,u.currentWriteId=Dy(t),o.splice(o.indexOf(N),1),i=i.concat(uA(t.serverSyncTree_,u.path,T,u.currentWriteId,u.applyLocally)),i=i.concat(ai(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",i=i.concat(ai(t.serverSyncTree_,u.currentWriteId,!0))}kn(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}rf(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)aa(r[a]);Oy(t,t.transactionQueueTree_)}function AA(t,e){let n,r=t.transactionQueueTree_;for(n=le(e);n!==null&&ca(r)===void 0;)r=Py(r,n),e=Se(e),n=le(e);return r}function xA(t,e){const n=[];return PA(t,e,n),n.sort((r,i)=>r.order-i.order),n}function PA(t,e,n){const r=ca(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Zd(e,i=>{PA(t,i,n)})}function rf(t,e){const n=ca(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,gA(e,n.length>0?n:void 0)}Zd(e,r=>{rf(t,r)})}function Ly(t,e){const n=Pu(AA(t,e)),r=Py(t.transactionQueueTree_,e);return wj(r,i=>{wp(t,i)}),wp(t,r),yA(r,i=>{wp(t,i)}),n}function wp(t,e){const n=ca(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ai(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?gA(e,void 0):n.length=s+1,kn(t.eventQueue_,Pu(e),i);for(let o=0;o<r.length;o++)aa(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gj(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Kj(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):$t(`Invalid query segment '${n}' in query '${t}'`)}return e}const nT=function(t,e){const n=Qj(t),r=n.namespace;n.domain==="firebase.com"&&jr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&jr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rF();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bR(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Te(n.pathString)}},Qj=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=Gj(t.substring(h,f)));const p=Kj(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Yj=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=rT.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=rT.charAt(e[i]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xj{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+it(this.snapshot.exportVal())}}class Jj{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Zj{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Yn;return Uj(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){ts("OnDisconnect.remove",this._path);const e=new Yn;return tT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){ts("OnDisconnect.set",this._path),Kh("OnDisconnect.set",e,this._path,!1);const n=new Yn;return tT(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){ts("OnDisconnect.setWithPriority",this._path),Kh("OnDisconnect.setWithPriority",e,this._path,!1),kj("OnDisconnect.setWithPriority",n);const r=new Yn;return Bj(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){ts("OnDisconnect.update",this._path),EA("OnDisconnect.update",e,this._path);const n=new Yn;return zj(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ue(this._path)?null:uy(this._path)}get ref(){return new Wr(this._repo,this._path)}get _queryIdentifier(){const e=BE(this._queryParams),n=sy(e);return n==="{}"?"default":n}get _queryObject(){return BE(this._queryParams)}isEqual(e){if(e=ve(e),!(e instanceof My))return!1;const n=this._repo===e._repo,r=cy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+UF(this._path)}}class Wr extends My{constructor(e,n){super(e,n,new py,!1)}get parent(){const e=BR(this._path);return e===null?null:new Wr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Zl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),r=eu(this.ref,e);return new Zl(this._node.getChild(n),r,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Zl(i,eu(this.ref,r),Le)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xe(t,e){return t=ve(t),t._checkNotDeleted("ref"),e!==void 0?eu(t._root,e):t._root}function eu(t,e){return t=ve(t),le(t._path)===null?Rj("child","path",e):TA("child","path",e),new Wr(t._repo,Oe(t._path,e))}function eU(t){return t=ve(t),new Zj(t._repo,t._path)}function tU(t,e){t=ve(t),ts("push",t._path),Kh("push",e,t._path,!0);const n=CA(t._repo),r=Yj(n),i=eu(t,r),s=eu(t,r);let o;return e!=null?o=ha(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Vy(t){return ts("remove",t._path),ha(t,null)}function ha(t,e){t=ve(t),ts("set",t._path),Kh("set",e,t._path,!1);const n=new Yn;return Vj(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ur(t,e){EA("update",e,t._path);const n=new Yn;return Fj(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function nU(t){t=ve(t);const e=new NA(()=>{}),n=new sf(e);return Mj(t._repo,t,n).then(r=>new Zl(r,new Wr(t._repo,t._path),t._queryParams.getIndex()))}class sf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Xj("value",this,new Zl(e.snapshotNode,new Wr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Jj(this,e,n):null}matches(e){return e instanceof sf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function rU(t,e,n,r,i){const s=new NA(n,void 0),o=new sf(s);return Wj(t._repo,t,o),()=>kA(t._repo,t,o)}function Fy(t,e,n,r){return rU(t,"value",e)}function iU(t,e,n){kA(t._repo,t,null)}J4(Wr);rj(Wr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sU="FIREBASE_DATABASE_EMULATOR_HOST",ag={};let oU=!1;function aU(t,e,n,r){t.repoInfo_=new bR(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function lU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||jr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=nT(s,i),a=o.repoInfo,u;typeof process<"u"&&IE&&(u=IE[sU]),u?(s=`http://${u}?ns=${a.namespace}`,o=nT(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new pF(t.name,t.options,e);Aj("Invalid Firebase Database URL",o),ue(o.path)||jr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=cU(a,t,c,new fF(t.name,n));return new hU(h,t)}function uU(t,e){const n=ag[e];(!n||n[t.key]!==t)&&jr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$j(t),delete n[t.key]}function cU(t,e,n,r){let i=ag[e.name];i||(i={},ag[e.name]=i);let s=i[t.toURLString()];return s&&jr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Dj(t,oU,n,r),i[t.toURLString()]=s,s}class hU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Oj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wr(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jr("Cannot call "+e+" on a deleted database.")}}function dU(t=vd(),e){const n=xs(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=JS("database");r&&fU(n,...r)}return n}function fU(t,e,n,r={}){t=ve(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&jr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&jr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Wc(Wc.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:tC(r.mockUserToken,t.app.options.projectId);s=new Wc(o)}aU(i,e,n,s)}/**
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
 */function pU(t){XV(Ps),Wn(new Sn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return lU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),tn(SE,CE,t),tn(SE,CE,"esm2017")}xr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};pU();const bA="@firebase/installations",jy="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=1e4,OA=`w:${jy}`,LA="FIS_v2",mU="https://firebaseinstallations.googleapis.com/v1",gU=60*60*1e3,_U="installations",yU="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Is=new As(_U,yU,vU);function MA(t){return t instanceof sr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA({projectId:t}){return`${mU}/projects/${t}/installations`}function FA(t){return{token:t.token,requestStatus:2,expiresIn:EU(t.expiresIn),creationTime:Date.now()}}async function jA(t,e){const r=(await e.json()).error;return Is.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function UA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function wU(t,{refreshToken:e}){const n=UA(t);return n.append("Authorization",TU(e)),n}async function BA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function EU(t){return Number(t.replace("s","000"))}function TU(t){return`${LA} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IU({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=VA(t),i=UA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:LA,appId:t.appId,sdkVersion:OA},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await BA(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:FA(c.authToken)}}else throw await jA("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SU(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CU=/^[cdef][\w-]{21}$/,lg="";function kU(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=RU(t);return CU.test(n)?n:lg}catch{return lg}}function RU(t){return SU(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=new Map;function $A(t,e){const n=of(t);HA(n,e),AU(n,e)}function HA(t,e){const n=WA.get(t);if(n)for(const r of n)r(e)}function AU(t,e){const n=xU();n&&n.postMessage({key:t,fid:e}),PU()}let ns=null;function xU(){return!ns&&"BroadcastChannel"in self&&(ns=new BroadcastChannel("[Firebase] FID Change"),ns.onmessage=t=>{HA(t.data.key,t.data.fid)}),ns}function PU(){WA.size===0&&ns&&(ns.close(),ns=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NU="firebase-installations-database",bU=1,Ss="firebase-installations-store";let Ep=null;function Uy(){return Ep||(Ep=yd(NU,bU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ss)}}})),Ep}async function Qh(t,e){const n=of(t),i=(await Uy()).transaction(Ss,"readwrite"),s=i.objectStore(Ss),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&$A(t,e.fid),e}async function qA(t){const e=of(t),r=(await Uy()).transaction(Ss,"readwrite");await r.objectStore(Ss).delete(e),await r.done}async function af(t,e){const n=of(t),i=(await Uy()).transaction(Ss,"readwrite"),s=i.objectStore(Ss),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&$A(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(t){let e;const n=await af(t.appConfig,r=>{const i=DU(r),s=OU(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===lg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function DU(t){const e=t||{fid:kU(),registrationStatus:0};return GA(e)}function OU(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Is.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=LU(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MU(t)}:{installationEntry:e}}async function LU(t,e){try{const n=await IU(t,e);return Qh(t.appConfig,n)}catch(n){throw MA(n)&&n.customData.serverCode===409?await qA(t.appConfig):await Qh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function MU(t){let e=await iT(t.appConfig);for(;e.registrationStatus===1;)await zA(100),e=await iT(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await By(t);return r||n}return e}function iT(t){return af(t,e=>{if(!e)throw Is.create("installation-not-found");return GA(e)})}function GA(t){return VU(t)?{fid:t.fid,registrationStatus:0}:t}function VU(t){return t.registrationStatus===1&&t.registrationTime+DA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FU({appConfig:t,heartbeatServiceProvider:e},n){const r=jU(t,n),i=wU(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:OA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await BA(()=>fetch(r,a));if(u.ok){const c=await u.json();return FA(c)}else throw await jA("Generate Auth Token",u)}function jU(t,{fid:e}){return`${VA(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(t,e=!1){let n;const r=await af(t.appConfig,s=>{if(!KA(s))throw Is.create("not-registered");const o=s.authToken;if(!e&&zU(o))return s;if(o.requestStatus===1)return n=UU(t,e),s;{if(!navigator.onLine)throw Is.create("app-offline");const a=$U(s);return n=BU(t,a),a}});return n?await n:r.authToken}async function UU(t,e){let n=await sT(t.appConfig);for(;n.authToken.requestStatus===1;)await zA(100),n=await sT(t.appConfig);const r=n.authToken;return r.requestStatus===0?zy(t,e):r}function sT(t){return af(t,e=>{if(!KA(e))throw Is.create("not-registered");const n=e.authToken;return HU(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function BU(t,e){try{const n=await FU(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Qh(t.appConfig,r),n}catch(n){if(MA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qh(t.appConfig,r)}throw n}}function KA(t){return t!==void 0&&t.registrationStatus===2}function zU(t){return t.requestStatus===2&&!WU(t)}function WU(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+gU}function $U(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function HU(t){return t.requestStatus===1&&t.requestTime+DA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qU(t){const e=t,{installationEntry:n,registrationPromise:r}=await By(e);return r?r.catch(console.error):zy(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GU(t,e=!1){const n=t;return await KU(n),(await zy(n,e)).token}async function KU(t){const{registrationPromise:e}=await By(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QU(t){if(!t||!t.options)throw Tp("App Configuration");if(!t.name)throw Tp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tp(t){return Is.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="installations",YU="installations-internal",XU=t=>{const e=t.getProvider("app").getImmediate(),n=QU(e),r=xs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},JU=t=>{const e=t.getProvider("app").getImmediate(),n=xs(e,QA).getImmediate();return{getId:()=>qU(n),getToken:i=>GU(n,i)}};function ZU(){Wn(new Sn(QA,XU,"PUBLIC")),Wn(new Sn(YU,JU,"PRIVATE"))}ZU();tn(bA,jy);tn(bA,jy,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eB="/firebase-messaging-sw.js",tB="/firebase-cloud-messaging-push-scope",YA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",nB="https://fcmregistrations.googleapis.com/v1",XA="google.c.a.c_id",rB="google.c.a.c_l",iB="google.c.a.ts",sB="google.c.a.e";var oT;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(oT||(oT={}));/**
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
 */var tu;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(tu||(tu={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function oB(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="fcm_token_details_db",aB=5,aT="fcm_token_object_Store";async function lB(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Ip))return null;let e=null;return(await yd(Ip,aB,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(aT))return;const u=o.objectStore(aT),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:mr(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:mr(h.auth),p256dh:mr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:mr(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:mr(h.auth),p256dh:mr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:mr(h.vapidKey)}}}}}})).close(),await sp(Ip),await sp("fcm_vapid_details_db"),await sp("undefined"),uB(e)?e:null}function uB(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cB="firebase-messaging-database",hB=1,Cs="firebase-messaging-store";let Sp=null;function Wy(){return Sp||(Sp=yd(cB,hB,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cs)}}})),Sp}async function JA(t){const e=Hy(t),r=await(await Wy()).transaction(Cs).objectStore(Cs).get(e);if(r)return r;{const i=await lB(t.appConfig.senderId);if(i)return await $y(t,i),i}}async function $y(t,e){const n=Hy(t),i=(await Wy()).transaction(Cs,"readwrite");return await i.objectStore(Cs).put(e,n),await i.done,e}async function dB(t){const e=Hy(t),r=(await Wy()).transaction(Cs,"readwrite");await r.objectStore(Cs).delete(e),await r.done}function Hy({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fB={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},kt=new As("messaging","Messaging",fB);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pB(t,e){const n=await Gy(t),r=ex(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(qy(t.appConfig),i)).json()}catch(o){throw kt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw kt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw kt.create("token-subscribe-no-token");return s.token}async function mB(t,e){const n=await Gy(t),r=ex(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${qy(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw kt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw kt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw kt.create("token-update-no-token");return s.token}async function ZA(t,e){const r={method:"DELETE",headers:await Gy(t)};try{const s=await(await fetch(`${qy(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw kt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw kt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function qy({projectId:t}){return`${nB}/projects/${t}/registrations`}async function Gy({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ex({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==YA&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gB=7*24*60*60*1e3;async function _B(t){const e=await wB(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:mr(e.getKey("auth")),p256dh:mr(e.getKey("p256dh"))},r=await JA(t.firebaseDependencies);if(r){if(EB(r.subscriptionOptions,n))return Date.now()>=r.createTime+gB?vB(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ZA(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return lT(t.firebaseDependencies,n)}else return lT(t.firebaseDependencies,n)}async function yB(t){const e=await JA(t.firebaseDependencies);e&&(await ZA(t.firebaseDependencies,e.token),await dB(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function vB(t,e){try{const n=await mB(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await $y(t.firebaseDependencies,r),n}catch(n){throw n}}async function lT(t,e){const r={token:await pB(t,e),createTime:Date.now(),subscriptionOptions:e};return await $y(t,r),r.token}async function wB(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:oB(e)})}function EB(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return TB(e,t),IB(e,t),SB(e,t),e}function TB(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function IB(t,e){e.data&&(t.data=e.data)}function SB(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CB(t){return typeof t=="object"&&!!t&&XA in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kB(t){if(!t||!t.options)throw Cp("App Configuration Object");if(!t.name)throw Cp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Cp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Cp(t){return kt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RB{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=kB(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(t){try{t.swRegistration=await navigator.serviceWorker.register(eB,{scope:tB}),t.swRegistration.update().catch(()=>{})}catch(e){throw kt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AB(t,e){if(!e&&!t.swRegistration&&await tx(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw kt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xB(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=YA)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nx(t,e){if(!navigator)throw kt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw kt.create("permission-blocked");return await xB(t,e==null?void 0:e.vapidKey),await AB(t,e==null?void 0:e.serviceWorkerRegistration),_B(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PB(t,e,n){const r=NB(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[XA],message_name:n[rB],message_time:n[iB],message_device_time:Math.floor(Date.now()/1e3)})}function NB(t){switch(t){case tu.NOTIFICATION_CLICKED:return"notification_open";case tu.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bB(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===tu.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(uT(n)):t.onMessageHandler.next(uT(n)));const r=n.data;CB(r)&&r[sB]==="1"&&await PB(t,n.messageType,r)}const cT="@firebase/messaging",hT="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB=t=>{const e=new RB(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>bB(e,n)),e},OB=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>nx(e,r)}};function LB(){Wn(new Sn("messaging",DB,"PUBLIC")),Wn(new Sn("messaging-internal",OB,"PRIVATE")),tn(cT,hT),tn(cT,hT,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(){try{await iC()}catch{return!1}return typeof window<"u"&&rC()&&Sb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MB(t){if(!navigator)throw kt.create("only-available-in-window");return t.swRegistration||await tx(t),yB(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VB(t,e){if(!navigator)throw kt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t=vd()){return Ky().then(e=>{if(!e)throw kt.create("unsupported-browser")},e=>{throw kt.create("indexed-db-unsupported")}),xs(ve(t),"messaging").getImmediate()}async function FB(t,e){return t=ve(t),nx(t,e)}function jB(t){return t=ve(t),MB(t)}function UB(t,e){return t=ve(t),VB(t,e)}LB();const ix=Object.freeze(Object.defineProperty({__proto__:null,deleteToken:jB,getMessaging:rx,getToken:FB,isSupported:Ky,onMessage:UB},Symbol.toStringTag,{value:"Module"})),BB={apiKey:"AIzaSyAbAb2YcqvSaahSV_UITjQtk8UArYSaDdY",authDomain:"dingo-new-version.firebaseapp.com",databaseURL:"https://dingo-new-version-default-rtdb.firebaseio.com",projectId:"dingo-new-version",storageBucket:"dingo-new-version.firebasestorage.app",messagingSenderId:"245470329002",appId:"1:245470329002:web:f0fae2a906e773629578d3"},zB="GG6zruC_lQSTKwuBvOudnROxxtXFMGufChhrzU7M6vQ",lf=lC(BB),bu=tL(lf),Ge=tR(lf),Je=dU(lf);let nu=null;Ky().then(t=>{t&&(nu=rx(lf))}).catch(()=>{});const WB="modulepreload",$B=function(t,e){return new URL(t,e).href},dT={},Qy=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=$B(c,r),c in dT)return;dT[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!r)for(let E=o.length-1;E>=0;E--){const A=o[E];if(A.href===c&&(!h||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":WB,h||(_.as="script"),_.crossOrigin="",_.href=c,u&&_.setAttribute("nonce",u),document.head.appendChild(_),h)return new Promise((E,A)=>{_.addEventListener("load",E),_.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};async function sx(t,e){const n=Wt(Ge,"users",t);(await Su(n)).exists()?await hn(n,{isOnline:!0}):await mR(n,{displayName:e.displayName||"Player",email:e.email||"",avatar:e.avatar||"🎯",color:e.color||"#00ffcc",wins:0,losses:0,total:0,winRate:0,friends:[],isOnline:!0,fcmToken:null,createdAt:Cu()})}async function HB(t){const e=await Su(Wt(Ge,"users",t));return e.exists()?{uid:t,...e.data()}:null}async function qB(t,e){await hn(Wt(Ge,"users",t),e)}async function fT(t,e){try{await hn(Wt(Ge,"users",t),{isOnline:e,lastSeen:Cu()})}catch{}}async function GB(t,e){await hn(Wt(Ge,"users",t),{fcmToken:e})}async function KB(t){const{collection:e,query:n,where:r,getDocs:i}=await Qy(async()=>{const{collection:a,query:u,where:c,getDocs:h}=await Promise.resolve().then(()=>YV);return{collection:a,query:u,where:c,getDocs:h}},void 0,import.meta.url),s=n(e(Ge,"users"),r("displayName",">=",t),r("displayName","<=",t+""));return(await i(s)).docs.map(a=>({uid:a.id,...a.data()}))}const QB=new _r;function YB(t){return W2(bu,t)}async function XB(t,e){return(await F2(bu,t,e)).user}async function JB(t,e,n){const r=await V2(bu,t,e);return await U2(r.user,{displayName:n}),await sx(r.user.uid,{displayName:n,email:t,avatar:"🎯",color:"#00ffcc"}),r.user}async function ZB(){const t=await cO(bu,QB);return await sx(t.user.uid,{displayName:t.user.displayName||"Player",email:t.user.email,avatar:"🎯",color:"#00ffcc"}),t.user}async function ox(){await $2(bu)}const ax=D.createContext(null);function lr(){return D.useContext(ax)}function e3({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(null),[s,o]=D.useState(!0),a=async u=>{if(!u)return;const c=await HB(u);i(c)};return D.useEffect(()=>{const u=YB(async h=>{n(h),h?(await a(h.uid),fT(h.uid,!0)):i(null),o(!1)}),c=()=>{e&&fT(e.uid,!1)};return window.addEventListener("beforeunload",c),()=>{u(),window.removeEventListener("beforeunload",c)}},[]),g.jsx(ax.Provider,{value:{user:e,profile:r,loading:s,refreshProfile:a},children:t})}function t3(){const[t,e]=D.useState([]);return D.useEffect(()=>{const n=r=>{const i=Date.now();e(s=>[...s,{id:i,...r.detail}]),setTimeout(()=>{e(s=>s.filter(o=>o.id!==i))},3500)};return window.addEventListener("dingo-toast",n),()=>window.removeEventListener("dingo-toast",n)},[]),t.length?g.jsx("div",{className:"toast-container",children:t.map(n=>g.jsx("div",{className:`toast ${n.type||"info"}`,children:g.jsxs("div",{children:[g.jsx("div",{className:"toast-title",children:n.title}),n.body&&g.jsx("div",{className:"toast-body",children:n.body})]})},n.id))}):null}let n3=null;async function r3(t){if(!nu)return null;try{const{getToken:e}=await Qy(async()=>{const{getToken:i}=await Promise.resolve().then(()=>ix);return{getToken:i}},void 0,import.meta.url);if(await Notification.requestPermission()!=="granted")return null;const r=await e(nu,{vapidKey:zB});return r&&(n3=r,await GB(t,r)),r}catch(e){return console.warn("Notification setup failed:",e),null}}function i3(t){if(!nu)return()=>{};Qy(async()=>{const{onMessage:e}=await Promise.resolve().then(()=>ix);return{onMessage:e}},void 0,import.meta.url).then(({onMessage:e})=>{e(nu,n=>{t(n)})})}function rs(t,e,n="info"){const r=new CustomEvent("dingo-toast",{detail:{title:t,body:e,type:n}});window.dispatchEvent(r)}const s3=[{icon:"🎯",title:"Your Unique Board",desc:"You and your opponent each get a 5×5 grid with the same 25 numbers (1–25) arranged in different random positions."},{icon:"📣",title:"Call a Number",desc:'On your turn, tap any number on your board to "call" it. That number instantly gets marked on BOTH boards — wherever it appears.'},{icon:"📏",title:"Complete Lines",desc:"Mark 5 numbers in a row — horizontally, vertically, or diagonally — to complete a line. Each player is racing to form lines on their own board layout."},{icon:"🏆",title:"Win the Match",desc:"First player to complete 5 full lines wins! If the last call completes both boards simultaneously, it's a TIE and both players earn a point."},{icon:"❤️",title:"5 Chances Per Player",desc:"Each player has 5 lives. If your timer runs out, you auto-pick a random number and lose one life. Lose all 5 lives and your opponent wins automatically."},{icon:"🎁",title:"Lifelines",desc:"Use your 5 lifelines strategically: ⏰ Extra time, 💡 Best move hint, 2️⃣ Pick twice, 🎯 50/50 hints, 🛡️ Shield against timeout."},{icon:"🤖",title:"Solo vs Bot",desc:"Not ready for live players? Challenge one of 6 AI difficulty levels — from Easy all the way up to GodMode."}];function o3(){const t=ir(),[e,n]=D.useState(!1);return g.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px 48px",overflowY:"auto",WebkitOverflowScrolling:"touch"},children:[g.jsxs("div",{style:{position:"relative",marginBottom:6,textAlign:"center"},children:[g.jsx("div",{style:{position:"absolute",top:6,left:6,right:0,fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--c1)",lineHeight:.9,opacity:.25,letterSpacing:-2,pointerEvents:"none",userSelect:"none"},children:"DiNGo"}),g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--ink)",lineHeight:.9,letterSpacing:-2,position:"relative",textShadow:"0 0 40px rgba(0,255,204,0.2)"},children:"DiNGo"})]}),g.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"var(--panel2)",border:"2px solid var(--c1)",borderRadius:"var(--r)",padding:"5px 14px",fontSize:9,letterSpacing:3,textTransform:"uppercase",fontWeight:700,color:"var(--c1)",marginBottom:28},children:[g.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),"Live Multiplayer Bingo"]}),g.jsxs("p",{style:{fontSize:15,color:"var(--ink2)",textAlign:"center",maxWidth:280,lineHeight:1.75,marginBottom:32},children:["Call numbers. Build lines.",g.jsx("br",{}),g.jsx("strong",{style:{color:"var(--ink)"},children:"Beat your opponent to 5."})]}),g.jsx("div",{style:{display:"flex",width:"100%",maxWidth:340,border:"2px solid var(--edge2)",borderRadius:"var(--r)",overflow:"hidden",marginBottom:36},children:[{n:"5×5",l:"Grid"},{n:"6",l:"AI Levels"},{n:"5",l:"Lifelines"}].map((r,i)=>g.jsxs("div",{style:{flex:1,textAlign:"center",padding:"14px 0",background:"var(--panel)",borderRight:i<2?"2px solid var(--edge2)":"none"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,color:"var(--ink)"},children:r.n}),g.jsx("div",{style:{fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:r.l})]},i))}),g.jsxs("div",{style:{width:"100%",maxWidth:340,display:"flex",flexDirection:"column",gap:12},children:[g.jsx("button",{className:"btn btn-primary btn-full",style:{fontSize:16,padding:"16px 0",letterSpacing:2,boxShadow:"0 0 24px rgba(0,255,204,0.3), 4px 4px 0 rgba(0,255,204,0.2)"},onClick:()=>t("/login"),children:"🎮 Get Started"}),g.jsx("button",{className:"btn btn-ghost btn-full",style:{borderColor:"rgba(0,255,204,0.35)",color:"var(--c1)",fontSize:13},onClick:()=>n(!0),children:"📖 How to Play"})]}),e&&g.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.9)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>n(!1),children:g.jsxs("div",{style:{background:"var(--panel)",borderRadius:"20px 20px 0 0",border:"2px solid var(--edge2)",borderBottom:"none",width:"100%",maxWidth:480,maxHeight:"88vh",overflowY:"auto",WebkitOverflowScrolling:"touch"},onClick:r=>r.stopPropagation(),children:[g.jsx("div",{style:{height:4,background:"linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))",borderRadius:"20px 20px 0 0"}}),g.jsxs("div",{style:{padding:"18px 18px 36px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:22},children:[g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,letterSpacing:3},children:"HOW TO PLAY"}),g.jsx("button",{onClick:()=>n(!1),style:{background:"none",border:"2px solid var(--edge2)",color:"var(--ink2)",width:34,height:34,borderRadius:8,cursor:"pointer",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),s3.map((r,i)=>g.jsxs("div",{style:{display:"flex",gap:14,marginBottom:22,alignItems:"flex-start"},children:[g.jsx("div",{style:{fontSize:32,flexShrink:0,lineHeight:1,width:52,height:52,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--panel2)",borderRadius:12,border:"2px solid var(--edge2)"},children:r.icon}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:800,fontSize:14,marginBottom:4},children:r.title}),g.jsx("div",{style:{fontSize:13,color:"var(--ink2)",lineHeight:1.6},children:r.desc})]})]},i)),g.jsx("button",{className:"btn btn-primary btn-full",style:{marginTop:4,fontSize:14},onClick:()=>n(!1),children:"Got it! Let's Play 🎮"})]})]})})]})}function a3(){const[t,e]=D.useState("login"),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,a]=D.useState(""),[u,c]=D.useState(""),[h,f]=D.useState(!1),p=async()=>{c(""),f(!0);try{if(t==="login")await XB(n,i);else{if(!o.trim()){c("Please enter your name"),f(!1);return}await JB(n,i,o.trim())}}catch(E){c(pT(E.code))}f(!1)},_=async()=>{c(""),f(!0);try{await ZB()}catch(E){c(pT(E.code))}f(!1)};return g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:20,paddingTop:40},children:[g.jsxs("div",{className:"text-center",style:{marginBottom:28},children:[g.jsx("div",{className:"hero-logo","data-text":"DiNGo",style:{fontSize:"clamp(72px,18vw,100px)"},children:"DiNGo"}),g.jsx("div",{className:"sub",style:{marginTop:6,letterSpacing:2},children:"LIVE MULTIPLAYER BINGO"})]}),g.jsx("div",{className:"card",style:{maxWidth:400},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{style:{display:"flex",gap:8,marginBottom:20},children:["login","register"].map(E=>g.jsx("button",{className:`btn ${t===E?"btn-primary":"btn-ghost"}`,style:{flex:1},onClick:()=>{e(E),c("")},children:E==="login"?"Sign In":"Sign Up"},E))}),t==="register"&&g.jsxs("div",{style:{marginBottom:14},children:[g.jsx("div",{className:"label",children:"Your Name"}),g.jsx("input",{type:"text",placeholder:"KGames",value:o,onChange:E=>a(E.target.value),maxLength:20})]}),g.jsxs("div",{style:{marginBottom:14},children:[g.jsx("div",{className:"label",children:"Email"}),g.jsx("input",{type:"email",placeholder:"you@email.com",value:n,onChange:E=>r(E.target.value)})]}),g.jsxs("div",{style:{marginBottom:18},children:[g.jsx("div",{className:"label",children:"Password"}),g.jsx("input",{type:"password",placeholder:"••••••••",value:i,onChange:E=>s(E.target.value),onKeyDown:E=>E.key==="Enter"&&p()})]}),u&&g.jsx("div",{style:{background:"rgba(255,45,85,0.12)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c2)"},children:u}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:p,disabled:h,children:h?"⏳ Please wait…":t==="login"?"🎮 Sign In":"🚀 Create Account"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,margin:"16px 0"},children:[g.jsx("div",{className:"divider",style:{flex:1}}),g.jsx("span",{className:"muted small",children:"or"}),g.jsx("div",{className:"divider",style:{flex:1}})]}),g.jsxs("button",{className:"btn btn-ghost btn-full",onClick:_,disabled:h,style:{border:"2px solid var(--edge2)"},children:[g.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",width:18,alt:""}),"Continue with Google"]})]})})]})}function pT(t){switch(t){case"auth/user-not-found":return"No account with that email.";case"auth/wrong-password":return"Wrong password. Try again.";case"auth/email-already-in-use":return"Email already in use. Try signing in.";case"auth/weak-password":return"Password must be at least 6 characters.";case"auth/invalid-email":return"Invalid email address.";case"auth/popup-closed-by-user":return"Google sign-in was cancelled.";default:return"Something went wrong. Please try again."}}function l3(){try{return new(window.AudioContext||window.webkitAudioContext)}catch{return null}}let zi=null;function Yy(){return zi||(zi=l3()),(zi==null?void 0:zi.state)==="suspended"&&zi.resume(),zi}const lx={click:()=>nr(880,.05,"square",.1),cross:()=>nr(660,.1,"square",.15),line:()=>uf([523,659,784],.2),win:()=>cf(),lose:()=>hf(),ping:()=>nr(1200,.05,"sine",.08)},u3={click:()=>_3(.03,80),cross:()=>$c(800,200,.12,"sawtooth"),line:()=>uf([400,500,600],.18,"sawtooth"),win:()=>cf(1.2),lose:()=>hf(.8),ping:()=>nr(1400,.03,"sine",.06)},c3={click:()=>$c(300,600,.08,"sine"),cross:()=>$c(600,100,.15,"sine"),line:()=>uf([261,329,392],.25,"sine"),win:()=>cf(.9),lose:()=>hf(.7),ping:()=>$c(800,1200,.06,"sine")},h3={click:()=>nr(220,.04,"sine",.2),cross:()=>nr(330,.06,"sine",.25),line:()=>uf([261,329,392],.12,"sine"),win:()=>cf(.6),lose:()=>hf(.5),ping:()=>nr(440,.03,"sine",.15)},d3={classic:lx,ninja:u3,space:c3,lofi:h3},f3=[{id:"classic",name:"Classic",icon:"🎮",desc:"Retro 8-bit bleeps"},{id:"ninja",name:"Ninja",icon:"🥷",desc:"Sharp sword slashes"},{id:"space",name:"Space",icon:"🌌",desc:"Sci-fi laser sounds"},{id:"lofi",name:"LoFi",icon:"🎵",desc:"Chill warm tones"}];function Qo(){const t=localStorage.getItem("sfxTheme")||"classic",e=d3[t]||lx,n=localStorage.getItem("sfxMuted")==="true";return{click:()=>!n&&e.click(),cross:()=>!n&&e.cross(),line:()=>!n&&e.line(),win:()=>!n&&e.win(),lose:()=>!n&&e.lose(),ping:()=>!n&&e.ping()}}function p3(t){localStorage.setItem("sfxTheme",t)}function m3(){const t=localStorage.getItem("sfxMuted")==="true";return localStorage.setItem("sfxMuted",String(!t)),!t}function g3(){return localStorage.getItem("sfxMuted")==="true"}function nr(t,e=.1,n="sine",r=.1){const i=Yy();if(!i)return;const s=i.createOscillator(),o=i.createGain();s.connect(o),o.connect(i.destination),s.type=n,s.frequency.value=t,o.gain.setValueAtTime(e,i.currentTime),o.gain.exponentialRampToValueAtTime(.001,i.currentTime+r),s.start(),s.stop(i.currentTime+r)}function $c(t,e,n=.1,r="sine"){const i=Yy();if(!i)return;const s=i.createOscillator(),o=i.createGain();s.connect(o),o.connect(i.destination),s.type=r,s.frequency.setValueAtTime(t,i.currentTime),s.frequency.exponentialRampToValueAtTime(e,i.currentTime+.15),o.gain.setValueAtTime(n,i.currentTime),o.gain.exponentialRampToValueAtTime(.001,i.currentTime+.15),s.start(),s.stop(i.currentTime+.15)}function uf(t,e=.1,n="sine"){t.forEach((r,i)=>{setTimeout(()=>nr(r,e,n,.3),i*60)})}function _3(t=.05,e=100){const n=Yy();if(!n)return;const r=n.createBuffer(1,n.sampleRate*.05,n.sampleRate),i=r.getChannelData(0);for(let u=0;u<i.length;u++)i[u]=Math.random()*2-1;const s=n.createBufferSource(),o=n.createBiquadFilter(),a=n.createGain();s.buffer=r,o.type="highpass",o.frequency.value=e,s.connect(o),o.connect(a),a.connect(n.destination),a.gain.setValueAtTime(t,n.currentTime),a.gain.exponentialRampToValueAtTime(.001,n.currentTime+.05),s.start(),s.stop(n.currentTime+.05)}function cf(t=1){[523,659,784,1047].forEach((n,r)=>{setTimeout(()=>nr(n,.15,"square",.2/t),r*100/t)})}function hf(t=1){[400,320,250].forEach((n,r)=>{setTimeout(()=>nr(n,.1,"sawtooth",.25/t),r*120/t)})}function y3(t,e,n){const r=Xe(Je,`online/${t}`);return ha(r,{uid:t,name:e,avatar:n,ts:Date.now()}),eU(r).remove(),()=>Vy(r)}function v3(t){const e=Xe(Je,"online");return Fy(e,r=>{t(r.exists()?Object.keys(r.val()||{}).length:0)})}function w3(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function E3(t,e,n,r){await ha(Xe(Je,`queue/${t}`),{uid:t,name:e,avatar:n,board:r,timestamp:Date.now(),roomId:null,role:null})}function kp(t){Vy(Xe(Je,`queue/${t}`)).catch(()=>{})}function T3(t,e,n,r,i){const s=Xe(Je,"queue"),o=Fy(s,async a=>{var _;const u=a.val();if(!u||!u[t])return;if(u[t].roomId){o(),i(u[t].roomId,u[t].role||"p2");return}const c=Object.entries(u).filter(([E,A])=>E!==t&&!A.roomId).sort((E,A)=>E[1].timestamp-A[1].timestamp);if(c.length===0)return;const[h,f]=c[0];if((((_=u[t])==null?void 0:_.timestamp)||0)<=f.timestamp){const E=w3();try{await ha(Xe(Je,`rooms/${E}`),{gameState:{status:"playing",turn:"p1",p1Board:r,p2Board:f.board||[],p1Selected:[],p2Selected:[],p1Lines:0,p2Lines:0,winner:null,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{uid:t,name:e,avatar:n||"🎯",role:"p1"},p2:{uid:h,name:f.name,avatar:f.avatar||"🎯",role:"p2"}},rematch:{p1:!1,p2:!1}}),await Ur(Xe(Je,`queue/${t}`),{roomId:E,role:"p1"}),await Ur(Xe(Je,`queue/${h}`),{roomId:E,role:"p2"}),o(),i(E,"p1")}catch(A){console.error("Matchmaking error:",A)}}});return o}const Xy=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]];function ru(){const t=Array.from({length:25},(e,n)=>n+1);for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Tt(t,e){if(!t||t.length===0)return 0;const n=new Set(e);return Xy.filter(r=>r.every(i=>n.has(t[i]))).length}function ux(t,e){if(!t||t.length===0)return[];const n=new Set(e);return Xy.filter(r=>r.every(i=>n.has(t[i])))}function I3(t,e){const n=new Set;return ux(t,e).forEach(r=>r.forEach(i=>n.add(i))),[...n]}function Yh(t,e,n){const r=new Set([...e,n]);let i=0;for(const s of Xy){const o=s.filter(a=>r.has(t[a])).length;o===5?i+=1e6:o===4?i+=5e4:o===3?i+=1e3:o===2?i+=20:o===1&&(i+=1)}return i}function qs(t,e,n,r,i){const s=Yh(t,n,r),o=Yh(e,n,r);return s+o*i}function S3(t,e,n,r){var s;const i=Array.from({length:25},(o,a)=>a+1).filter(o=>!e.includes(o));if(i.length===0)return null;if(t==="easy")return i[Math.floor(Math.random()*i.length)];if(t==="medium")return i.reduce((o,a)=>Yh(r,e,a)>Yh(r,e,o)?a:o,i[0]);if(t==="hard"){for(const o of i)if(Tt(r,[...e,o])>=5)return o;for(const o of i)if(Tt(n,[...e,o])>=5)return o;return i.reduce((o,a)=>qs(r,n,e,a,.4)>qs(r,n,e,o,.4)?a:o,i[0])}if(t==="expert"){for(const o of i)if(Tt(r,[...e,o])>=5)return o;for(const o of i)if(Tt(n,[...e,o])>=5)return o;for(const o of i)if(Tt(n,[...e,o])>=4)return o;return i.reduce((o,a)=>qs(r,n,e,a,.7)>qs(r,n,e,o,.7)?a:o,i[0])}if(t==="nightmare"||t==="godmode"){for(const a of i)if(Tt(r,[...e,a])>=5)return a;for(const a of i)if(Tt(n,[...e,a])>=5)return a;if(t==="godmode"){const a=i.map(u=>({num:u,oppLines:Tt(n,[...e,u])})).sort((u,c)=>c.oppLines-u.oppLines);if(((s=a[0])==null?void 0:s.oppLines)>=4)return a[0].num}const o=t==="godmode"?1.2:.9;return i.reduce((a,u)=>qs(r,n,e,u,o)>qs(r,n,e,a,o)?u:a,i[0])}return i[Math.floor(Math.random()*i.length)]}const C3=[{icon:"🤖",title:"vs Bot",sub:"6 AI levels",path:"/bot"},{icon:"⚡",title:"Create Room",sub:"Invite a friend",path:"/room/create"},{icon:"🔗",title:"Join Room",sub:"Enter room code",path:"/room/join"},{icon:"🏆",title:"Leaderboard",sub:"Top players",path:"/leaderboard"},{icon:"👥",title:"Friends",sub:"Add & challenge",path:"/friends"},{icon:"📊",title:"History",sub:"Past games",path:"/history"}];function k3(){const{user:t,profile:e}=lr(),n=ir(),r=Qo(),[i,s]=D.useState(0),[o,a]=D.useState(!1),[u,c]=D.useState(0),[h,f]=D.useState(!1),p=D.useRef(null),_=D.useRef(null),E=D.useRef(null);D.useEffect(()=>{if(!t||!e)return;const C=y3(t.uid,e.displayName||"Player",e.avatar||"🎯"),O=v3(s);return()=>{C(),O()}},[t==null?void 0:t.uid,e==null?void 0:e.displayName]),D.useEffect(()=>()=>{t!=null&&t.uid&&kp(t.uid),clearInterval(_.current),p.current&&p.current()},[t==null?void 0:t.uid]);const A=async()=>{if(o){kp(t.uid),p.current&&(p.current(),p.current=null),clearInterval(_.current),a(!1),c(0);return}r.click&&r.click();const C=ru();E.current=C,a(!0),c(0),_.current=setInterval(()=>c(V=>V+1),1e3),await E3(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",C);const O=T3(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",C,(V,j)=>{clearInterval(_.current),a(!1),n(`/game/${V}`,{state:{role:j,board:C}})});p.current=O},N=async()=>{o&&(kp(t.uid),p.current&&p.current(),clearInterval(_.current)),await ox()},I=C=>{r.click&&r.click(),n(C)},T=e!=null&&e.displayName?e.displayName.length>10?e.displayName.slice(0,10)+"…":e.displayName:"Player";return g.jsxs("div",{className:"screen",style:{paddingTop:14,paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",maxWidth:440,marginBottom:18,gap:8},children:[g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:30,letterSpacing:1,lineHeight:1},children:"DiNGo"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:2},children:[g.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),g.jsxs("span",{style:{fontSize:10,color:"var(--c1)",fontWeight:700,letterSpacing:1.5,textTransform:"uppercase"},children:[i," Online"]})]})]}),g.jsxs("button",{onClick:()=>I("/profile"),style:{display:"flex",alignItems:"center",gap:7,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:10,padding:"6px 10px",cursor:"pointer",flexShrink:0,maxWidth:160,WebkitTapHighlightColor:"transparent"},children:[g.jsx("span",{style:{fontSize:24,flexShrink:0},children:(e==null?void 0:e.avatar)||"🎯"}),g.jsxs("div",{style:{textAlign:"left",overflow:"hidden"},children:[g.jsx("div",{style:{fontWeight:700,fontSize:12,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:T}),g.jsxs("div",{style:{fontSize:10,color:"var(--c1)",whiteSpace:"nowrap"},children:[(e==null?void 0:e.wins)||0,"W · ",(e==null?void 0:e.streak)||0,"🔥"]})]}),g.jsx("span",{style:{fontSize:11,color:"var(--ink3)",flexShrink:0},children:"✏️"})]}),g.jsx("button",{onClick:()=>f(!0),title:"Sign Out",style:{width:36,height:36,borderRadius:8,flexShrink:0,background:"var(--panel)",border:"2px solid var(--edge2)",fontSize:17,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},children:"🚪"})]}),g.jsxs("div",{style:{width:"100%",maxWidth:440,marginBottom:18},children:[g.jsx("button",{onClick:A,style:{width:"100%",padding:"15px 20px",background:o?"var(--c2)":"var(--c1)",border:"none",borderRadius:"var(--r)",fontFamily:"'Space Grotesk',sans-serif",fontWeight:800,fontSize:14,letterSpacing:1.5,textTransform:"uppercase",color:"#000",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,WebkitTapHighlightColor:"transparent"},children:o?g.jsxs(g.Fragment,{children:[g.jsx("span",{style:{animation:"spin 1s linear infinite",display:"inline-block"},children:"⏳"})," Searching… ",u,"s · Tap to Cancel"]}):"⚡ PLAY NOW — Auto Match"}),o&&g.jsx("div",{style:{textAlign:"center",fontSize:12,color:"var(--ink2)",marginTop:6},children:"Finding an opponent for you…"})]}),g.jsx("div",{className:"menu-grid",children:C3.map(C=>g.jsxs("div",{className:"menu-card",onClick:()=>I(C.path),children:[g.jsx("div",{className:"menu-icon",children:C.icon}),g.jsx("div",{className:"menu-title",children:C.title}),g.jsx("div",{className:"menu-sub",children:C.sub})]},C.path))}),g.jsx("div",{style:{marginTop:18,width:"100%",maxWidth:440,display:"flex",gap:8},children:[{label:"WINS",val:(e==null?void 0:e.wins)||0,color:"var(--c1)"},{label:"LOSSES",val:(e==null?void 0:e.losses)||0,color:"var(--c2)"},{label:"STREAK",val:`${(e==null?void 0:e.streak)||0}🔥`,color:"var(--c3)"}].map(C=>g.jsxs("div",{style:{flex:1,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"10px 0",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,color:C.color},children:C.val}),g.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:2},children:C.label})]},C.label))}),h&&g.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>f(!1),children:g.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:C=>C.stopPropagation(),children:[g.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),g.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),g.jsxs("div",{style:{display:"flex",gap:10},children:[g.jsx("button",{onClick:()=>f(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),g.jsx("button",{onClick:N,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const R3=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"],A3=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#00b4ff","#ff6a00","#00ff88","#ff00ff","#ffffff","#f5a623"];function x3(){const{user:t,profile:e,refreshProfile:n}=lr(),r=ir(),i=Qo(),[s,o]=D.useState((e==null?void 0:e.displayName)||""),[a,u]=D.useState((e==null?void 0:e.avatar)||"🎯"),[c,h]=D.useState((e==null?void 0:e.color)||"#00ffcc"),[f,p]=D.useState(localStorage.getItem("sfxTheme")||"classic"),[_,E]=D.useState(g3()),[A,N]=D.useState(!1),[I,T]=D.useState(!1),[C,O]=D.useState("idle"),[V,j]=D.useState(!1);D.useEffect(()=>{e&&(o(e.displayName||""),u(e.avatar||"🎯"),h(e.color||"#00ffcc"))},[e]);const k=async()=>{s.trim()&&(N(!0),await qB(t.uid,{displayName:s.trim(),avatar:a,color:c}),await n(t.uid),i.click&&i.click(),N(!1),T(!0),setTimeout(()=>T(!1),2e3))},v=P=>{p3(P),p(P),setTimeout(()=>Qo().click(),50)},S=()=>{const P=m3();E(P)},w=async()=>{await ox()},x=async()=>{O("requesting");const P=await r3(t.uid);O(P?"granted":"denied")};return g.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[g.jsxs("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain",padding:"14px 14px 24px",display:"flex",flexDirection:"column",alignItems:"center"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:4},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px",flexShrink:0},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,letterSpacing:2},children:"⚙️ PROFILE"}),g.jsx("button",{onClick:()=>j(!0),style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:5,flexShrink:0,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"6px 10px",fontSize:11,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Sign Out"})]}),g.jsx("div",{style:{fontSize:64,marginBottom:6,textAlign:"center"},children:a}),g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,textAlign:"center",marginBottom:2},children:s||"Player"}),g.jsx("div",{style:{fontSize:12,color:"var(--ink2)",textAlign:"center",marginBottom:20},children:t==null?void 0:t.email}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",children:[g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("div",{className:"label",children:"Display Name"}),g.jsx("input",{type:"text",value:s,onChange:P=>o(P.target.value),maxLength:20,placeholder:"Your name",enterKeyHint:"done",onKeyDown:P=>P.key==="Enter"&&P.target.blur()}),g.jsx("div",{style:{fontSize:11,color:"var(--ink3)",marginTop:5},children:"Other players search and find you by this name"})]}),g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("div",{className:"label",children:"Avatar"}),g.jsx("div",{className:"avatar-grid",children:R3.map(P=>g.jsx("div",{className:`avatar-opt ${a===P?"selected":""}`,onClick:()=>{u(P),i.click&&i.click()},children:P},P))})]}),g.jsxs("div",{children:[g.jsx("div",{className:"label",children:"Profile Color"}),g.jsx("div",{className:"color-row",children:A3.map(P=>g.jsx("div",{className:`color-dot ${c===P?"selected":""}`,style:{background:P},onClick:()=>{h(P),i.click&&i.click()}},P))})]})]})}),e&&g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"📊 Your Stats"}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[{label:"WINS",val:e.wins||0,color:"var(--c1)"},{label:"LOSSES",val:e.losses||0,color:"var(--c2)"},{label:"WIN RATE",val:`${e.winRate||0}%`,color:"var(--c3)"},{label:"STREAK",val:`${e.streak||0}🔥`,color:"var(--c3)"},{label:"GAMES",val:e.total||0,color:"var(--c4)"}].map(P=>g.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"12px 0",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:P.color},children:P.val}),g.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:P.label})]},P.label))})]}),g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"🔊 Sound Theme"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[g.jsx("span",{style:{fontSize:13,color:"var(--ink2)"},children:"Volume"}),g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 14px",marginLeft:"auto"},onClick:S,children:_?"🔇 Muted":"🔊 On"})]}),g.jsx("div",{className:"sfx-grid",children:f3.map(P=>g.jsxs("div",{className:`sfx-opt ${f===P.id?"active":""}`,onClick:()=>v(P.id),children:[g.jsx("div",{className:"sfx-icon",children:P.icon}),g.jsx("div",{className:"sfx-name",children:P.name}),g.jsx("div",{className:"sfx-desc",children:P.desc})]},P.id))})]}),g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"🔔 Notifications"}),g.jsx("div",{className:"card",children:g.jsxs("div",{className:"card-body",children:[g.jsx("p",{style:{fontSize:13,color:"var(--ink2)",marginBottom:12,lineHeight:1.6},children:"Get notified when friends challenge you or it's your turn."}),g.jsx("button",{className:"btn btn-purple btn-full",onClick:x,disabled:C==="requesting"||C==="granted",children:C==="granted"?"✅ Notifications Enabled":C==="denied"?"❌ Permission Denied — check browser settings":C==="requesting"?"⏳ Requesting…":"🔔 Enable Notifications"})]})})]}),g.jsx("div",{style:{width:"100%",maxWidth:440,marginTop:24},children:g.jsx("button",{onClick:()=>j(!0),className:"btn btn-full",style:{background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",color:"var(--c2)",fontSize:13},children:"🚪 Sign Out of DiNGo"})})]})," ",g.jsx("div",{style:{flexShrink:0,background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"10px 14px",paddingBottom:"calc(10px + env(safe-area-inset-bottom, 0px))",display:"flex",gap:10},children:g.jsx("button",{onClick:k,disabled:A||!s.trim(),className:"btn btn-primary btn-full",style:{fontSize:15,padding:"14px 0"},children:I?"✅ Profile Saved!":A?"⏳ Saving…":"💾 Save Profile"})}),V&&g.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>j(!1),children:g.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:P=>P.stopPropagation(),children:[g.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),g.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),g.jsxs("div",{style:{display:"flex",gap:10},children:[g.jsx("button",{onClick:()=>j(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),g.jsx("button",{onClick:w,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const mT=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#ffffff"];function ug({board:t,selected:e,onCellClick:n,disabled:r=!1,highlightCells:i=[]}){const s=new Set(I3(t,e)),o=ux(t,e),a=new Set(i),u={};return o.forEach((c,h)=>{c.forEach(f=>{u[f]||(u[f]=mT[Math.min(h,mT.length-1)])})}),g.jsx("div",{className:"board-wrap",children:g.jsx("div",{className:"board",children:t.map((c,h)=>{const f=e.includes(c),p=s.has(h),_=a.has(c),E=u[h];return g.jsx("div",{className:`cell ${f?"crossed":""}`,style:{cursor:r||f?"default":"pointer",background:p?`rgba(${E==="#00ffcc"?"0,255,204":E==="#ff2d55"?"255,45,85":E==="#ffcc00"?"255,204,0":E==="#7b61ff"?"123,97,255":"255,255,255"}, 0.15)`:void 0,borderColor:p?E:_?"var(--c3)":void 0,color:p?E:_&&!f?"var(--c3)":void 0,boxShadow:p?`0 0 12px ${E}88, inset 0 0 8px ${E}22`:_?"0 0 0 3px var(--c3), 0 0 14px rgba(255,204,0,0.5)":void 0,animation:p?"winPulse 2s ease-in-out infinite":_?"winPulse 0.9s ease infinite":void 0,fontWeight:p||_?900:void 0,transition:"all 0.3s ease"},onClick:()=>!r&&!f&&n&&n(c),children:c},c)})})})}function cx({show:t,isWin:e,tie:n,title:r,sub:i,onPlayAgain:s,onHome:o,showPlayAgain:a=!0}){const u=n?"🤝":e?"🎉":"💀",c=n?"var(--c3)":e?"var(--c1)":"var(--c2)";return g.jsx("div",{className:`win-overlay ${t?"show":""}`,children:g.jsxs("div",{className:"win-card",children:[g.jsx("div",{className:"win-emoji",children:u}),g.jsx("div",{className:"win-title",style:{color:c},children:r}),g.jsx("div",{className:"win-sub",children:i}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[a&&g.jsx("button",{className:"btn btn-primary btn-full",onClick:s,children:"↺ Play Again"}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:o,children:"🏠 Home"})]})]})})}async function hx(t,e){const n=Wt(Ge,"users",t);try{await hn(n,{total:Gi(1),wins:Gi(e?1:0),losses:Gi(e?0:1),streak:e?Gi(1):0});const r=await Su(n);if(r.exists()){const i=r.data(),s=i.total||1,o=i.wins||0;await hn(n,{winRate:Math.round(o/s*100)})}}catch(r){console.error("recordResult error:",r)}}async function P3(){try{const t=zo(Ci(Ge,"users"),hR("wins","desc"),Oh(50));return(await Hl(t)).docs.map((n,r)=>({rank:r+1,uid:n.id,...n.data()}))}catch(t){return console.error("getLeaderboard error:",t),[]}}async function dx({p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a,mode:u,botLevel:c}){try{await iy(Ci(Ge,"matches"),{p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a||0,mode:u||"multiplayer",botLevel:c||null,timestamp:Cu(),tsNum:Date.now()})}catch(h){console.error("saveMatch error:",h)}}async function N3(t){try{const[e,n]=await Promise.all([Hl(zo(Ci(Ge,"matches"),Wo("p1Uid","==",t),Oh(15))),Hl(zo(Ci(Ge,"matches"),Wo("p2Uid","==",t),Oh(15)))]),r=new Set,i=[];return[...e.docs,...n.docs].forEach(s=>{r.has(s.id)||(r.add(s.id),i.push({id:s.id,...s.data()}))}),i.sort((s,o)=>{var c,h;const a=s.tsNum||((c=s.timestamp)==null?void 0:c.seconds)*1e3||0;return(o.tsNum||((h=o.timestamp)==null?void 0:h.seconds)*1e3||0)-a}).slice(0,20)}catch(e){return console.error("getMyHistory error:",e),[]}}const ja=[{id:"easy",label:"Easy",icon:"🟢",color:"var(--c1)"},{id:"medium",label:"Medium",icon:"🟡",color:"var(--c3)"},{id:"hard",label:"Hard",icon:"🔴",color:"var(--c2)"},{id:"expert",label:"Expert",icon:"🟣",color:"var(--c4)"},{id:"nightmare",label:"Nightmare",icon:"🖤",color:"#ff4444"},{id:"godmode",label:"GodMode",icon:"👑",color:"var(--c3)"}],wc={easy:"Noob-Bot",medium:"Mid-Bot",hard:"Hard-Bot",expert:"Expert-Bot",nightmare:"Nightmare",godmode:"GodMode"},Ec=5,Tc=20;function b3(){var Y,Z;const{user:t,profile:e}=lr(),n=ir(),[r,i]=D.useState("select"),[s,o]=D.useState("medium"),[a,u]=D.useState([]),[c,h]=D.useState([]),[f,p]=D.useState([]),[_,E]=D.useState([]),[A,N]=D.useState(!0),[I,T]=D.useState(0),[C,O]=D.useState(0),[V,j]=D.useState(null),[k,v]=D.useState(Tc),[S,w]=D.useState(!1),x=D.useRef(null),P=D.useRef(null),R=Qo(),ot=()=>{const H=ru(),se=ru();u(H),h(se),p([]),E([]),N(!0),T(0),O(0),j(null),i("game"),P.current=Date.now(),R.click()};D.useEffect(()=>{if(!(r!=="game"||!A||V))return v(Tc),x.current=setInterval(()=>{v(H=>{if(H<=1){clearInterval(x.current);const se=a.filter(te=>!f.includes(te));if(se.length>0){const te=se[Math.floor(Math.random()*se.length)];Gt(te,!0)}return Tc}return H-1})},1e3),()=>clearInterval(x.current)},[A,r,V,f]);const Gt=(H,se=!1)=>{if(!A||V)return;clearInterval(x.current),R.cross();const te=[...f,H];p(te);const We=Tt(a,te);if(We>I&&We>0&&R.line(),T(We),We>=Ec){At(!0,te);return}N(!1),Rn(te)},Rn=H=>{const se={easy:500,medium:800,hard:1e3,expert:1200,nightmare:1400,godmode:1600}[s]||800;w(!0),setTimeout(()=>{w(!1);const te=S3(s,H,a,c);if(te==null){N(!0);return}R.cross();const at=[...H,te];p(at);const $e=Tt(c,at);if($e>C&&$e>0&&R.line(),O($e),$e>=Ec){At(!1,at);return}N(!0)},se)},At=async(H,se)=>{const te=Math.round((Date.now()-P.current)/1e3),We=H?["Domination! 👑","You crushed it! 🔥","GG! Lethal ⚡","Champion energy! 💎"]:["Bot outsmarted you 🤖","GG, rematch? 💪","Bot.exe wins 😤"];if(j({won:H,title:H?"🎉 YOU WIN!":"🤖 BOT WINS!",sub:We[Math.floor(Math.random()*We.length)]}),H?R.win():R.lose(),i("over"),t){await hx(t.uid,H);const at=Tt(a,se),$e=Tt(c,se);await dx({p1Uid:t.uid,p2Uid:"bot",p1Name:(e==null?void 0:e.displayName)||"Player",p2Name:wc[s],winner:H?t.uid:"bot",p1Lines:at,p2Lines:$e,duration:te,mode:"bot",botLevel:s})}};if(r==="select")return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🤖 VS BOT"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{className:"label",style:{marginBottom:14},children:"Choose Difficulty"}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:20},children:ja.map(H=>g.jsxs("button",{className:`diff-btn ${s===H.id?"active":""}`,style:{borderColor:s===H.id?H.color:void 0,color:s===H.id?H.color:void 0},onClick:()=>{o(H.id),R.click()},children:[g.jsx("span",{style:{fontSize:20},children:H.icon}),H.label]},H.id))}),g.jsx("div",{style:{background:"var(--panel2)",borderRadius:"var(--r)",padding:12,marginBottom:20},children:ja.find(H=>H.id===s)&&g.jsxs("div",{style:{textAlign:"center"},children:[g.jsx("span",{style:{fontSize:28},children:ja.find(H=>H.id===s).icon}),g.jsx("div",{style:{fontWeight:700,marginTop:6},children:wc[s]}),g.jsx("div",{className:"muted small",style:{marginTop:4},children:{easy:"Random moves — good for beginners",medium:"Basic strategy — fair challenge",hard:"Aggressive blocking — tough",expert:"Win-first + blocking — very tough",nightmare:"Lookahead AI — near-unbeatable",godmode:"Maximum difficulty — can you win?"}[s]})]})}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:ot,children:"⚡ Start Game"})]})})]});const W=k/Tc*100;return g.jsxs("div",{className:"screen",style:{paddingTop:10,paddingBottom:20},children:[g.jsxs("div",{style:{width:"100%",maxWidth:440,marginBottom:10,display:"flex",alignItems:"center",gap:10},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:11},onClick:()=>n("/"),children:"🏠"}),g.jsx("div",{style:{flex:1,textAlign:"center"},children:g.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:14,letterSpacing:2,color:"var(--c1)"},children:[(Y=ja.find(H=>H.id===s))==null?void 0:Y.icon," ",wc[s].toUpperCase()]})}),g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18},children:[g.jsx("span",{style:{color:"var(--c1)"},children:I}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 6px"},children:"·"}),g.jsx("span",{style:{color:"var(--c2)"},children:C})]})]}),g.jsxs("div",{className:"player-row",style:{maxWidth:440,marginBottom:8},children:[g.jsx("span",{style:{fontSize:28},children:(e==null?void 0:e.avatar)||"🎯"}),g.jsxs("div",{children:[g.jsx("div",{className:"player-name",children:(e==null?void 0:e.displayName)||"You"}),g.jsxs("div",{className:"player-lines",children:[I," / ",Ec," lines"]})]}),A&&!S&&g.jsx("span",{className:"turn-badge",style:{marginLeft:"auto"},children:"YOUR TURN"})]}),A&&!S&&g.jsx("div",{className:"timer-bar-wrap",style:{maxWidth:440,marginBottom:8},children:g.jsx("div",{className:"timer-bar",style:{width:`${W}%`,background:k<=5?"var(--c2)":"var(--c1)"}})}),S&&g.jsx("div",{style:{textAlign:"center",fontSize:12,color:"var(--ink2)",marginBottom:8,letterSpacing:2,textTransform:"uppercase"},children:"🤖 Bot is thinking…"}),g.jsx(ug,{board:a,selected:f,onCellClick:Gt,disabled:!A||S||!!V}),g.jsxs("div",{className:"player-row",style:{maxWidth:440,marginTop:14},children:[g.jsx("span",{style:{fontSize:28},children:(Z=ja.find(H=>H.id===s))==null?void 0:Z.icon}),g.jsxs("div",{children:[g.jsx("div",{className:"player-name",children:wc[s]}),g.jsxs("div",{className:"player-lines",children:[C," / ",Ec," lines"]})]}),!A&&S&&g.jsx("span",{className:"turn-badge",style:{marginLeft:"auto",background:"var(--c2)"},children:"BOT TURN"})]}),g.jsx("div",{style:{marginTop:8,opacity:.6},children:g.jsx(ug,{board:c,selected:f,disabled:!0})}),g.jsx(cx,{show:!!V,isWin:V==null?void 0:V.won,title:V==null?void 0:V.title,sub:V==null?void 0:V.sub,onPlayAgain:ot,onHome:()=>n("/")})]})}function D3(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function O3(t,e,n){await ha(Xe(Je,`rooms/${t}`),{gameState:{status:"waiting",turn:"p1",p1Board:n,p2Board:[],calledNumbers:[],p1Lines:0,p2Lines:0,p1Chances:5,p2Chances:5,winner:null,tie:!1,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{...e,role:"p1"}},rematch:{p1:!1,p2:!1}})}async function L3(t,e,n){var s;const r=await nU(Xe(Je,`rooms/${t}`));if(!r.exists())throw new Error("Room not found");const i=r.val();if((s=i.players)!=null&&s.p2)throw new Error("Room is full");return await Ur(Xe(Je,`rooms/${t}`),{"players/p2":{...e,role:"p2"},"gameState/p2Board":n,"gameState/status":"playing","gameState/turnStartedAt":Date.now()}),i}function fx(t,e){const n=Xe(Je,`rooms/${t}`);return Fy(n,r=>e(r.val())),()=>iU(n)}async function Ua(t,e,n,r,i,s=!1){const o=e==="p1"?"p2":"p1",a={"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i};s||(a["gameState/turn"]=o,a["gameState/turnStartedAt"]=Date.now()),await Ur(Xe(Je,`rooms/${t}`),a)}async function M3(t,e,n,r,i,s){const o=e==="p1"?"p2":"p1",a={"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i,[`gameState/${e}Chances`]:s,"gameState/turn":o,"gameState/turnStartedAt":Date.now()};await Ur(Xe(Je,`rooms/${t}`),a)}async function Ba(t,e){await Ur(Xe(Je,`rooms/${t}/gameState`),{winner:e,status:"finished",tie:!1})}async function gT(t){await Ur(Xe(Je,`rooms/${t}/gameState`),{winner:null,tie:!0,status:"finished"})}async function V3(t,e){await tU(Xe(Je,`rooms/${t}/chat`),{...e,ts:Date.now()})}async function F3(t,e){await Ur(Xe(Je,`rooms/${t}/gameState`),{[`${e}Exited`]:!0})}async function j3(t,e){await Ur(Xe(Je,`rooms/${t}/rematch`),{[e]:!0})}async function U3(t){try{await Vy(Xe(Je,`rooms/${t}`))}catch{}}function B3(){const{mode:t}=zS(),{user:e,profile:n}=lr(),r=ir(),i=Qo(),[s,o]=D.useState(""),[a,u]=D.useState(""),[c,h]=D.useState("idle"),[f,p]=D.useState(""),_=D.useState(()=>ru())[0],E={uid:e==null?void 0:e.uid,name:(n==null?void 0:n.displayName)||"Player",avatar:(n==null?void 0:n.avatar)||"🎯"},A=async()=>{h("waiting");const T=D3();o(T),await O3(T,E,_),i.click();const C=fx(T,O=>{var V,j;(V=O==null?void 0:O.players)!=null&&V.p2&&((j=O==null?void 0:O.gameState)==null?void 0:j.status)==="playing"&&(C(),r(`/game/${T}`,{state:{role:"p1",board:_,roomData:O}})),O||(h("error"),p("Room expired."))})},N=async()=>{const T=a.trim().toUpperCase();if(T.length!==4){p("Enter a 4-character room code.");return}h("joining"),p("");try{const C=await L3(T,E,_);i.click(),r(`/game/${T}`,{state:{role:"p2",board:_,roomData:C}})}catch(C){h("idle"),p(C.message||"Could not join room. Check the code.")}},I=async()=>{s&&await U3(s),r("/")};return t==="create"?g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:I,children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"⚡ CREATE ROOM"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",style:{textAlign:"center"},children:[c==="idle"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{fontSize:48,marginBottom:16},children:"⚡"}),g.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:8},children:"Create a Private Room"}),g.jsx("div",{className:"muted small",style:{marginBottom:24},children:"Share the code with a friend. They join, you battle!"}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:A,children:"🎮 Create Room"})]}),c==="waiting"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"label",style:{marginBottom:8},children:"ROOM CODE"}),g.jsx("div",{className:"room-code-display",children:s}),g.jsx("div",{className:"room-status",children:"Share this code with your friend"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,justifyContent:"center",marginBottom:20},children:[g.jsx("div",{className:"spinner"}),g.jsx("span",{className:"muted small",children:"Waiting for opponent…"})]}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:()=>{var T;(T=navigator.clipboard)==null||T.writeText(s)},style:{marginBottom:10},children:"📋 Copy Code"}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:I,children:"Cancel"})]})]})})]}):g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🔗 JOIN ROOM"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{style:{fontSize:48,textAlign:"center",marginBottom:16},children:"🔗"}),g.jsx("div",{className:"label",children:"Room Code"}),g.jsx("input",{type:"text",placeholder:"ABCD",value:a,onChange:T=>u(T.target.value.toUpperCase().slice(0,4)),onKeyDown:T=>T.key==="Enter"&&N(),style:{textAlign:"center",fontSize:28,letterSpacing:10,fontFamily:"'Black Han Sans',sans-serif",marginBottom:16}}),f&&g.jsx("div",{style:{color:"var(--c2)",fontSize:13,marginBottom:14,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px"},children:f}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:N,disabled:c==="joining"||a.length!==4,children:c==="joining"?"⏳ Joining…":"🎮 Join Game"})]})})]})}const gn=5,Hc=30,cg=5,z3=["👍","🔥","😂","😱","🎯","💀","🏆","😤","🤯","👏","😈","🫡","❤️","😎","🤑","💪"];function _T({timeLeft:t,maxTime:e=Hc,size:n=60,active:r}){const i=(n-6)/2,s=2*Math.PI*i,o=r?Math.max(0,t/e):1,a=s*(1-o),u=t<=5?"#ff2d55":t<=10?"#ffcc00":"#00ffcc";return g.jsxs("svg",{width:n,height:n,style:{position:"absolute",top:0,left:0,pointerEvents:"none"},children:[g.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:"rgba(255,255,255,0.07)",strokeWidth:4}),r&&g.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:u,strokeWidth:4,strokeDasharray:s,strokeDashoffset:a,strokeLinecap:"round",transform:`rotate(-90 ${n/2} ${n/2})`,style:{transition:"stroke-dashoffset 1s linear, stroke 0.4s"}})]})}function yT({count:t,max:e=cg}){return g.jsx("div",{style:{display:"flex",gap:3},children:Array.from({length:e}).map((n,r)=>g.jsx("span",{style:{fontSize:11,opacity:r<t?1:.2},children:"❤️"},r))})}const vT=[{id:"time",icon:"⏰",tip:"+20s"},{id:"hint",icon:"💡",tip:"Hint"},{id:"double",icon:"2️⃣",tip:"Pick 2"},{id:"fifty",icon:"🎯",tip:"50/50"},{id:"shield",icon:"🛡️",tip:"Shield"}];function W3(){var nt,ut;const{roomId:t}=zS(),{state:e}=pd(),{user:n,profile:r}=lr(),i=ir(),s=Qo(),o=(e==null?void 0:e.role)||"p1",a=o==="p1"?"p2":"p1",u=D.useRef((e==null?void 0:e.board)||ru()).current,[c,h]=D.useState(null),[f,p]=D.useState(Hc),[_,E]=D.useState(null),[A,N]=D.useState(!1),[I,T]=D.useState(!1),[C,O]=D.useState(0),[V,j]=D.useState(""),[k,v]=D.useState(""),[S,w]=D.useState({time:!0,hint:!0,double:!0,fifty:!0,shield:!0}),[x,P]=D.useState(!1),[R,ot]=D.useState(!1),[Gt,Rn]=D.useState([]),[At,W]=D.useState({p1:!1,p2:!1}),[Y,Z]=D.useState(0),H=D.useRef(!1),se=D.useRef(Date.now()),te=D.useRef(null),We=D.useRef(null),at=D.useRef(0),$e=D.useRef({}),mn=D.useRef(0),ae=c==null?void 0:c.gameState,Hn=(ae==null?void 0:ae.calledNumbers)||[],ur=(ae==null?void 0:ae[`${a}Board`])||[],rn=(ae==null?void 0:ae[`${o}Lines`])||0,Ms=(ae==null?void 0:ae[`${a}Lines`])||0,Vs=(ae==null?void 0:ae[`${o}Chances`])??cg,da=(ae==null?void 0:ae[`${a}Chances`])??cg,lt=(ae==null?void 0:ae.turn)===o,cr=(nt=c==null?void 0:c.players)==null?void 0:nt[a],$r=(ut=c==null?void 0:c.players)==null?void 0:ut[o];D.useEffect(()=>{const Q=fx(t,oe=>{if(h(oe),!(oe!=null&&oe.gameState))return;const Ce=oe.gameState;if(oe.rematch&&W(oe.rematch),oe.chat){const Fe=Object.values(oe.chat).sort((je,vt)=>(je.ts||0)-(vt.ts||0)),ie=Fe[Fe.length-1];ie&&(ie.ts||0)>mn.current&&Date.now()-(ie.ts||0)<8e3&&(mn.current=ie.ts,ie.sender===o?(j(ie.text),clearTimeout($e.current.my),$e.current.my=setTimeout(()=>j(""),4e3)):(v(ie.text),s.ping&&s.ping(),clearTimeout($e.current.opp),$e.current.opp=setTimeout(()=>v(""),4e3)))}if((Ce.winner||Ce.tie)&&!H.current){H.current=!0,clearInterval(te.current);const Fe=Ce.tie,ie=Ce.winner===o;E({won:Fe?null:ie,tie:Fe,title:Fe?"🤝 IT'S A TIE!":ie?"🎉 YOU WIN!":"😔 YOU LOST!",sub:Fe?"Both of you get a point!":ie?["Domination! 👑","Flawless! ⚡","Champion! 🏆"][Math.floor(Math.random()*3)]:["GG, rematch? 💪","They got lucky 😤","Next time! 🤝"][Math.floor(Math.random()*3)]}),Fe?s.win&&s.win():ie?s.win():s.lose(),ff(Fe,Ce.winner===o,Ce)}Ce[`${a}Exited`]&&!H.current&&(H.current=!0,clearInterval(te.current),E({won:!0,tie:!1,title:"🏆 OPPONENT LEFT",sub:"You win by default!"}),s.win&&s.win())});return()=>Q()},[t]),D.useEffect(()=>{rn>at.current&&(s.line&&s.line(),Z(Q=>Q+1),at.current=rn)},[rn]),D.useEffect(()=>{if(!(ae!=null&&ae.turnStartedAt)||_)return;clearInterval(te.current);const Q=Math.floor((Date.now()-ae.turnStartedAt)/1e3),oe=Math.max(0,Hc-Q);return p(oe),te.current=setInterval(()=>{p(Ce=>Ce<=1?(clearInterval(te.current),lt&&!_&&!H.current&&(R?(ot(!1),p(Hc)):df()),0):Ce-1)},1e3),()=>clearInterval(te.current)},[ae==null?void 0:ae.turnStartedAt,ae==null?void 0:ae.turn]);const df=async()=>{const Q=Array.from({length:25},(vt,qn)=>qn+1).filter(vt=>!Hn.includes(vt));if(Q.length===0)return;const oe=Q[Math.floor(Math.random()*Q.length)],Ce=[...Hn,oe],Fe=Tt((ae==null?void 0:ae.p1Board)||u,Ce),ie=Tt(ur.length?ur:[],Ce),je=Vs-1;if(je<=0){await Ba(t,a);return}Fe>=gn&&ie>=gn?await gT(t):Fe>=gn?await Ba(t,"p1"):ie>=gn?await Ba(t,"p2"):await M3(t,o,Ce,Fe,ie,je)},Du=async Q=>{if(_||H.current||!lt&&!x||Hn.includes(Q))return;clearInterval(te.current),Rn([]),s.cross&&s.cross();const oe=[...Hn,Q],Ce=o==="p1"?u:ur,Fe=o==="p2"?u:ur,ie=Tt(Ce.length?Ce:u,oe),je=Tt(Fe.length?Fe:[],oe);if(x){P(!1),await Ua(t,o,oe,ie,je,!0);return}if(!H.current){if(ie>=gn&&je>=gn){await Ua(t,o,oe,ie,je,!1),await gT(t);return}else if(ie>=gn){await Ua(t,o,oe,ie,je,!1),await Ba(t,"p1");return}else if(je>=gn){await Ua(t,o,oe,ie,je,!1),await Ba(t,"p2");return}}await Ua(t,o,oe,ie,je,!1)},fa=Q=>{if(!(!S[Q]||!lt||_)&&(s.click&&s.click(),w(oe=>({...oe,[Q]:!1})),Q==="time"&&p(oe=>oe+20),Q==="shield"&&ot(!0),Q==="double"&&P(!0),Q==="hint"||Q==="fifty")){const Ce=u.filter(ie=>!Hn.includes(ie)).map(ie=>{const je=[...Hn,ie],vt=Tt(u,je);return{n:ie,lines:vt}}).sort((ie,je)=>je.lines-ie.lines),Fe=Q==="fifty"?2:1;Rn(Ce.slice(0,Fe).map(ie=>ie.n)),setTimeout(()=>Rn([]),7e3)}},Ou=async Q=>{if(I)return;await V3(t,{text:Q,isEmoji:!0,sender:o,senderName:(r==null?void 0:r.displayName)||"Me"}),N(!1),T(!0);let oe=3;O(oe),We.current=setInterval(()=>{oe--,O(oe),oe<=0&&(clearInterval(We.current),T(!1),O(0))},1e3)},ff=async(Q,oe,Ce)=>{var ie,je;if(!n)return;const Fe=Math.round((Date.now()-se.current)/1e3);try{await hx(n.uid,Q?!1:oe);const vt=(ie=c==null?void 0:c.players)==null?void 0:ie.p1,qn=(je=c==null?void 0:c.players)==null?void 0:je.p2;vt&&qn&&o==="p1"&&await dx({p1Uid:vt.uid,p2Uid:qn.uid,p1Name:vt.name,p2Name:qn.name,winner:Q?null:Ce.winner==="p1"?vt.uid:qn.uid,p1Lines:Ce.p1Lines,p2Lines:Ce.p2Lines,duration:Fe,mode:"multiplayer"})}catch(vt){console.error("matchEnd error:",vt)}},Fs=async()=>{clearInterval(te.current),await F3(t,o),i("/")};if(D.useEffect(()=>{At.p1&&At.p2&&i("/room/create")},[At]),!c)return g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:12},children:[g.jsx("div",{className:"spinner"}),g.jsx("div",{style:{fontSize:12,color:"var(--ink2)"},children:"Connecting to room…"})]});const js=(ae==null?void 0:ae.status)==="waiting",sn=52;return g.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[g.jsx("div",{style:{background:"var(--panel)",borderBottom:"2px solid var(--edge2)",padding:"8px 10px 6px",flexShrink:0},children:g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:6},children:[g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsxs("div",{style:{position:"relative",width:sn,height:sn,flexShrink:0},children:[g.jsx("div",{style:{width:sn,height:sn,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${lt?"var(--c1)":"var(--edge)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,transition:"border-color 0.3s"},children:($r==null?void 0:$r.avatar)||(r==null?void 0:r.avatar)||"🎯"}),g.jsx(_T,{timeLeft:f,size:sn,active:lt&&!_}),R&&g.jsx("div",{style:{position:"absolute",bottom:-2,right:-2,fontSize:11},children:"🛡️"})]}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsx("div",{style:{fontWeight:800,fontSize:12,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:80},children:($r==null?void 0:$r.name)||(r==null?void 0:r.displayName)||"You"}),g.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[rn,"/",gn," lines"]}),lt&&!_&&g.jsx("div",{style:{fontSize:8,fontWeight:800,letterSpacing:1.5,textTransform:"uppercase",color:"var(--c1)",marginTop:1},children:x?"2️⃣ Pick 2nd!":`Your turn ${f}s`})]})]}),V&&g.jsx("div",{style:{marginTop:4,fontSize:16,background:"rgba(0,255,204,0.1)",border:"1px solid rgba(0,255,204,0.3)",borderRadius:8,padding:"2px 8px",display:"inline-block",maxWidth:"100%"},children:V}),g.jsx("div",{style:{display:"flex",gap:3,marginTop:5,flexWrap:"wrap"},children:vT.map(Q=>g.jsx("button",{onClick:()=>fa(Q.id),disabled:!S[Q.id]||!lt||!!_,title:Q.tip,style:{fontSize:13,padding:"2px 4px",background:S[Q.id]?"var(--panel2)":"transparent",border:`2px solid ${S[Q.id]?"var(--edge2)":"transparent"}`,borderRadius:5,cursor:S[Q.id]&&lt?"pointer":"default",opacity:S[Q.id]?lt?1:.35:.12,WebkitTapHighlightColor:"transparent"},children:Q.icon},Q.id))}),g.jsx("div",{style:{marginTop:4},children:g.jsx(yT,{count:Vs})})]}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:4,flexShrink:0},children:[g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,letterSpacing:1,lineHeight:1},children:[g.jsx("span",{style:{color:"var(--c1)"},children:rn}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 2px"},children:":"}),g.jsx("span",{style:{color:"var(--c2)"},children:Ms})]}),g.jsx("div",{style:{fontSize:7,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:2},children:"SCORE"}),g.jsxs("div",{style:{fontSize:9,color:"var(--ink3)",marginTop:3,letterSpacing:.5},children:["#",t]})]}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexDirection:"row-reverse"},children:[g.jsxs("div",{style:{position:"relative",width:sn,height:sn,flexShrink:0},children:[g.jsx("div",{style:{width:sn,height:sn,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${lt?"var(--edge)":"var(--c2)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,transition:"border-color 0.3s"},children:(cr==null?void 0:cr.avatar)||"🎯"}),g.jsx(_T,{timeLeft:f,size:sn,active:!lt&&!_})]}),g.jsxs("div",{style:{flex:1,minWidth:0,textAlign:"right"},children:[g.jsx("div",{style:{fontWeight:800,fontSize:12,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:80,marginLeft:"auto"},children:(cr==null?void 0:cr.name)||"Opponent"}),g.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[Ms,"/",gn," lines"]}),!lt&&!_&&g.jsxs("div",{style:{fontSize:8,fontWeight:800,letterSpacing:1.5,textTransform:"uppercase",color:"var(--c2)",marginTop:1},children:["Their turn ",f,"s"]})]})]}),k&&g.jsx("div",{style:{marginTop:4,fontSize:16,background:"rgba(255,45,85,0.1)",border:"1px solid rgba(255,45,85,0.3)",borderRadius:8,padding:"2px 8px",display:"flex",justifyContent:"flex-end"},children:k}),g.jsx("div",{style:{display:"flex",gap:3,marginTop:5,justifyContent:"flex-end"},children:vT.map(Q=>g.jsx("div",{style:{fontSize:13,padding:"2px 4px",background:"var(--panel2)",border:"2px solid var(--edge)",borderRadius:5,opacity:.25},children:Q.icon},Q.id))}),g.jsx("div",{style:{marginTop:4,display:"flex",justifyContent:"flex-end"},children:g.jsx(yT,{count:da})})]})]})}),g.jsxs("div",{style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"6px 10px"},children:[g.jsxs("div",{style:{marginBottom:6,textAlign:"center"},children:[g.jsx("div",{style:{fontSize:11,color:"var(--ink2)",letterSpacing:.5},children:_?"🏁 Game Over":js?"⏳ Waiting for opponent…":lt?"👆 Your board — tap to call a number":"⏳ Opponent is choosing…"}),g.jsxs("div",{style:{fontSize:10,color:"var(--ink3)",marginTop:2},children:[Hn.length," / 25 numbers called"]}),Gt.length>0&&g.jsxs("div",{style:{fontSize:11,color:"var(--c3)",marginTop:3,fontWeight:700},children:["💡 Try: ",Gt.join(" or ")]}),x&&g.jsx("div",{style:{fontSize:11,color:"var(--c3)",fontWeight:800,marginTop:3,animation:"blink 0.8s infinite"},children:"2️⃣ PICK YOUR 2ND NUMBER!"})]}),g.jsx(ug,{board:u,selected:Hn,onCellClick:Du,disabled:!lt&&!x||!!_||js,highlightCells:Gt}),g.jsxs("div",{style:{marginTop:10,display:"flex",gap:5,alignItems:"center"},children:[Array.from({length:gn}).map((Q,oe)=>g.jsx("div",{style:{width:32,height:7,borderRadius:4,background:oe<rn?"var(--c1)":"var(--edge)",boxShadow:oe<rn?"0 0 8px var(--c1)88":"none",transition:"all 0.4s ease"}},oe)),g.jsxs("span",{style:{fontSize:11,color:"var(--ink2)",marginLeft:4},children:[rn,"/",gn]})]})]}),g.jsxs("div",{style:{background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"6px 10px",flexShrink:0},children:[A&&g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,justifyContent:"center",paddingBottom:6},children:z3.map(Q=>g.jsx("button",{onClick:()=>Ou(Q),disabled:I,style:{fontSize:22,background:"none",border:"none",cursor:"pointer",padding:"3px 5px",borderRadius:6,opacity:I?.3:1,WebkitTapHighlightColor:"transparent"},children:Q},Q))}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[g.jsx("button",{onClick:()=>!I&&N(Q=>!Q),disabled:I,style:{background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"7px 12px",fontSize:12,fontWeight:700,color:I?"var(--ink3)":"var(--ink)",cursor:I?"not-allowed":"pointer",WebkitTapHighlightColor:"transparent"},children:I?`⏱ ${C}s`:A?"✕ Close":"😊 React"}),g.jsx("div",{style:{flex:1}}),g.jsx("button",{onClick:Fs,style:{background:"transparent",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"7px 12px",fontSize:12,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Leave"})]})]}),g.jsx(cx,{show:!!_,isWin:_==null?void 0:_.won,title:_==null?void 0:_.title,sub:_==null?void 0:_.sub,onPlayAgain:()=>j3(t,o),onHome:Fs})]})}function $3(){const{user:t}=lr(),e=ir(),[n,r]=D.useState([]),[i,s]=D.useState(!0);D.useEffect(()=>{P3().then(u=>{r(u),s(!1)})},[]);const o=u=>u===1?{color:"var(--c3)",fontSize:22}:u===2?{color:"#aaa",fontSize:20}:u===3?{color:"#cd7f32",fontSize:18}:{color:"var(--ink3)",fontSize:16},a=u=>u===1?"🥇":u===2?"🥈":u===3?"🥉":`#${u}`;return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>e("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🏆 LEADERBOARD"})]}),i?g.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:g.jsx("div",{className:"spinner"})}):g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{style:{padding:"4px 0"},children:[n.length===0&&g.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:"No players yet. Be the first!"}),n.map(u=>g.jsxs("div",{className:"lb-row",style:{background:u.uid===(t==null?void 0:t.uid)?"rgba(0,255,204,0.05)":"transparent"},children:[g.jsx("div",{style:{...o(u.rank),fontFamily:"'Black Han Sans',sans-serif",width:36,textAlign:"center"},children:a(u.rank)}),g.jsx("div",{style:{fontSize:24},children:u.avatar||"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsxs("div",{style:{fontWeight:700,fontSize:14},children:[u.displayName,u.uid===(t==null?void 0:t.uid)&&g.jsx("span",{style:{fontSize:10,color:"var(--c1)",marginLeft:6},children:"YOU"})]}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[u.total||0," games · ",u.winRate||0,"% WR"]})]}),g.jsxs("div",{style:{textAlign:"right"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:"var(--c1)"},children:u.wins||0}),g.jsx("div",{style:{fontSize:10,color:"var(--ink3)",letterSpacing:1,textTransform:"uppercase"},children:"wins"})]})]},u.uid))]})})]})}async function px(t,e,n){const r=zo(Ci(Ge,"friendRequests"),Wo("from","==",t),Wo("to","==",e));return(await Hl(r)).empty?(await iy(Ci(Ge,"friendRequests"),{from:t,to:e,fromName:n,status:"pending",timestamp:Cu()}),{success:!0}):{error:"Request already sent"}}async function H3(t,e,n){await hn(Wt(Ge,"friendRequests",t),{status:"accepted"}),await hn(Wt(Ge,"users",e),{friends:Gm(n)}),await hn(Wt(Ge,"users",n),{friends:Gm(e)})}async function q3(t){await hn(Wt(Ge,"friendRequests",t),{status:"declined"})}async function G3(t,e){await hn(Wt(Ge,"users",t),{friends:Km(e)}),await hn(Wt(Ge,"users",e),{friends:Km(t)})}function K3(t,e){const n=zo(Ci(Ge,"friendRequests"),Wo("to","==",t));return gR(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i.filter(s=>s.status==="pending"))},r=>{console.error("Friend requests error:",r),e([])})}async function Q3(t){if(!t||t.length===0)return[];const e=[];for(const n of t)try{const r=await Su(Wt(Ge,"users",n));r.exists()&&e.push({uid:n,...r.data()})}catch{}return e}function Y3(){var S;const{user:t,profile:e,refreshProfile:n}=lr(),r=ir(),[i,s]=D.useState("friends"),[o,a]=D.useState([]),[u,c]=D.useState([]),[h,f]=D.useState(""),[p,_]=D.useState([]),[E,A]=D.useState(!1),[N,I]=D.useState(!0),T=D.useRef(null);D.useEffect(()=>{if(!(e!=null&&e.friends)){I(!1);return}Q3(e.friends).then(w=>{a(w),I(!1)}).catch(()=>I(!1))},[(S=e==null?void 0:e.friends)==null?void 0:S.length]),D.useEffect(()=>{if(!t)return;const w=K3(t.uid,x=>{c(x)});return T.current=w,()=>{T.current&&T.current()}},[t==null?void 0:t.uid]);const C=async()=>{if(h.trim()){A(!0),_([]);try{const w=await KB(h.trim());_(w.filter(x=>x.uid!==t.uid))}catch{rs("Search failed","Try again","error")}A(!1)}},O=async w=>{const x=await px(t.uid,w.uid,(e==null?void 0:e.displayName)||"Player");x.error?rs("⚠️ "+x.error,"","info"):rs("✅ Request Sent!",`Sent to ${w.displayName}`,"success")},V=async w=>{await H3(w.id,t.uid,w.from),await n(t.uid),rs("👥 Friends!",`You and ${w.fromName} are now friends`,"success")},j=async w=>{await q3(w.id)},k=async w=>{await G3(t.uid,w),await n(t.uid),a(x=>x.filter(P=>P.uid!==w))},v=[{id:"friends",label:`Friends (${o.length})`},{id:"requests",label:`Requests ${u.length>0?`(${u.length})`:""}`,badge:u.length},{id:"search",label:"🔍 Find"}];return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:14,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"👥 FRIENDS"})]}),g.jsx("div",{style:{display:"flex",gap:6,width:"100%",maxWidth:440,marginBottom:14},children:v.map(w=>g.jsxs("button",{onClick:()=>s(w.id),style:{flex:1,padding:"9px 6px",border:"2px solid",borderColor:i===w.id?"var(--c1)":"var(--edge2)",borderRadius:"var(--r)",background:i===w.id?"rgba(0,255,204,0.1)":"var(--panel)",color:i===w.id?"var(--c1)":"var(--ink2)",fontSize:11,fontWeight:700,cursor:"pointer",WebkitTapHighlightColor:"transparent",position:"relative"},children:[w.label,w.badge>0&&i!==w.id&&g.jsx("span",{style:{position:"absolute",top:-6,right:-4,background:"var(--c2)",color:"#fff",fontSize:10,fontWeight:700,borderRadius:"50%",width:17,height:17,display:"flex",alignItems:"center",justifyContent:"center"},children:w.badge})]},w.id))}),i==="friends"&&g.jsx("div",{className:"card",style:{maxWidth:440},children:N?g.jsx("div",{style:{display:"flex",justifyContent:"center",padding:32},children:g.jsx("div",{className:"spinner"})}):o.length===0?g.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[g.jsx("div",{style:{fontSize:40,marginBottom:10},children:"👥"}),g.jsx("div",{style:{fontWeight:700},children:"No friends yet"}),g.jsx("div",{style:{fontSize:13,marginTop:4},children:"Search to find and add players!"}),g.jsx("button",{className:"btn btn-primary",style:{marginTop:14},onClick:()=>s("search"),children:"Find Players"})]}):o.map(w=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("span",{style:{fontSize:26},children:w.avatar||"🎯"}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.displayName}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[w.wins||0,"W · ",w.losses||0,"L"]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[g.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:w.isOnline?"var(--c1)":"var(--ink3)",boxShadow:w.isOnline?"0 0 6px var(--c1)":"none"}}),g.jsx("span",{style:{fontSize:10,color:"var(--ink3)"},children:w.isOnline?"Online":"Offline"})]}),g.jsx("button",{onClick:()=>k(w.uid),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:6,padding:"4px 10px",fontSize:11,color:"var(--ink3)",cursor:"pointer"},children:"Remove"})]},w.uid))}),i==="requests"&&g.jsx("div",{className:"card",style:{maxWidth:440},children:u.length===0?g.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[g.jsx("div",{style:{fontSize:40,marginBottom:10},children:"📭"}),g.jsx("div",{style:{fontWeight:700},children:"No pending requests"}),g.jsx("div",{style:{fontSize:13,marginTop:4},children:"When someone adds you, it appears here."})]}):u.map(w=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("span",{style:{fontSize:28},children:"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.fromName||"Unknown"}),g.jsx("div",{style:{fontSize:12,color:"var(--ink2)",marginTop:2},children:"Wants to be friends"})]}),g.jsx("button",{onClick:()=>V(w),style:{background:"var(--c1)",color:"#000",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer",marginRight:4},children:"✓ Accept"}),g.jsx("button",{onClick:()=>j(w),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"8px 10px",fontSize:12,color:"var(--ink2)",cursor:"pointer"},children:"✕"})]},w.id))}),i==="search"&&g.jsxs("div",{style:{width:"100%",maxWidth:440},children:[g.jsxs("div",{style:{display:"flex",gap:8,marginBottom:14},children:[g.jsx("input",{type:"text",placeholder:"Search username…",value:h,onChange:w=>f(w.target.value),onKeyDown:w=>w.key==="Enter"&&C(),style:{flex:1}}),g.jsx("button",{className:"btn btn-primary",onClick:C,disabled:E,style:{padding:"0 16px"},children:E?"…":"🔍"})]}),p.length>0&&g.jsx("div",{className:"card",children:p.map(w=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("span",{style:{fontSize:26},children:w.avatar||"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.displayName}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[w.wins||0,"W · ",w.losses||0,"L"]})]}),g.jsx("button",{onClick:()=>O(w),style:{background:"var(--c4)",color:"#fff",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer"},children:"+ Add"})]},w.uid))}),h&&!E&&p.length===0&&g.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",padding:24,fontSize:14},children:['No players found for "',h,'"']})]})]})}function X3(t){if(!t)return"—";try{return(t!=null&&t.toDate?t.toDate():t!=null&&t.seconds?new Date(t.seconds*1e3):new Date(t)).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"—"}}function J3(t){if(!t)return"—";const e=Math.floor(t/60),n=t%60;return e>0?`${e}m ${n}s`:`${n}s`}function Z3(){const{user:t,profile:e}=lr(),n=ir(),[r,i]=D.useState([]),[s,o]=D.useState(!0),[a,u]=D.useState({});D.useEffect(()=>{t&&N3(t.uid).then(h=>{i(h),o(!1)}).catch(()=>o(!1))},[t]);const c=async h=>{const f=h.p1Uid===t.uid,p=f?h.p2Uid:h.p1Uid,_=f?h.p2Name:h.p1Name;if(!p||p==="bot"||p===t.uid)return;u(A=>({...A,[h.id]:!0}));const E=await px(t.uid,p,(e==null?void 0:e.displayName)||"Player");E.error?rs("Already sent",E.error,"info"):rs("✅ Request Sent!",`Friend request sent to ${_}`,"success"),u(A=>({...A,[h.id]:!1}))};return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"📊 HISTORY"})]}),s?g.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:g.jsx("div",{className:"spinner"})}):r.length===0?g.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",paddingTop:60},children:[g.jsx("div",{style:{fontSize:52,marginBottom:14},children:"🎮"}),g.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:6},children:"No games yet!"}),g.jsx("div",{style:{fontSize:13},children:"Play your first game — it will appear here."}),g.jsx("button",{className:"btn btn-primary",style:{marginTop:20},onClick:()=>n("/"),children:"Play Now"})]}):g.jsx("div",{className:"card",style:{maxWidth:440},children:r.map(h=>{const f=h.p1Uid===t.uid,p=h.winner===t.uid,_=f?h.p1Lines:h.p2Lines,E=f?h.p2Lines:h.p1Lines,A=f?h.p2Name:h.p1Name,N=f?h.p2Uid:h.p1Uid,I=h.mode==="bot"||N==="bot";return g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("div",{style:{fontSize:28,width:36,textAlign:"center",flexShrink:0},children:p?"🏆":"💀"}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["vs ",I?`🤖 ${h.botLevel||"Bot"}`:A||"Unknown"]}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[X3(h.timestamp||h.tsNum)," · ",J3(h.duration)]})]}),g.jsxs("div",{style:{textAlign:"right",marginRight:6},children:[g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:17},children:[g.jsx("span",{style:{color:"var(--c1)"},children:_??"—"}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 3px"},children:"–"}),g.jsx("span",{style:{color:"var(--c2)"},children:E??"—"})]}),g.jsx("div",{style:{fontSize:10,fontWeight:800,color:p?"var(--c1)":"var(--c2)",letterSpacing:1},children:p?"WIN":"LOSS"})]}),!I&&N&&N!==t.uid&&g.jsx("button",{onClick:()=>c(h),disabled:a[h.id],title:`Add ${A} as friend`,style:{fontSize:18,background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"4px 7px",cursor:"pointer",color:"var(--c4)",flexShrink:0,WebkitTapHighlightColor:"transparent"},children:a[h.id]?"⏳":"👥+"})]},h.id)})})]})}function mx(){return g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:g.jsx("div",{className:"spinner"})})}function Wi({children:t}){const{user:e,loading:n}=lr();return n?g.jsx(mx,{}):e?t:g.jsx(qS,{to:"/login",replace:!0})}function e6(){const{user:t,loading:e}=lr();return e?g.jsx(mx,{}):t?g.jsx(k3,{}):g.jsx(o3,{})}function t6(){return D.useEffect(()=>{i3(t=>{var e,n;rs(((e=t.notification)==null?void 0:e.title)||"DiNGo",((n=t.notification)==null?void 0:n.body)||"","info")})},[]),g.jsxs(ub,{basename:"/DINGO-NEW-VERSION-",children:[g.jsx(t3,{}),g.jsxs(ob,{children:[g.jsx(Pn,{path:"/",element:g.jsx(e6,{})}),g.jsx(Pn,{path:"/login",element:g.jsx(a3,{})}),g.jsx(Pn,{path:"/profile",element:g.jsx(Wi,{children:g.jsx(x3,{})})}),g.jsx(Pn,{path:"/bot",element:g.jsx(Wi,{children:g.jsx(b3,{})})}),g.jsx(Pn,{path:"/room/:mode",element:g.jsx(Wi,{children:g.jsx(B3,{})})}),g.jsx(Pn,{path:"/game/:roomId",element:g.jsx(Wi,{children:g.jsx(W3,{})})}),g.jsx(Pn,{path:"/leaderboard",element:g.jsx(Wi,{children:g.jsx($3,{})})}),g.jsx(Pn,{path:"/friends",element:g.jsx(Wi,{children:g.jsx(Y3,{})})}),g.jsx(Pn,{path:"/history",element:g.jsx(Wi,{children:g.jsx(Z3,{})})}),g.jsx(Pn,{path:"*",element:g.jsx(qS,{to:"/",replace:!0})})]})]})}function n6(){return g.jsx(e3,{children:g.jsx(t6,{})})}Rp.createRoot(document.getElementById("root")).render(g.jsx(PT.StrictMode,{children:g.jsx(n6,{})}));
