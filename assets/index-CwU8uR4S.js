function zx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Wx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ST={exports:{}},rd={},CT={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var au=Symbol.for("react.element"),$x=Symbol.for("react.portal"),Hx=Symbol.for("react.fragment"),qx=Symbol.for("react.strict_mode"),Gx=Symbol.for("react.profiler"),Kx=Symbol.for("react.provider"),Qx=Symbol.for("react.context"),Yx=Symbol.for("react.forward_ref"),Xx=Symbol.for("react.suspense"),Jx=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),qv=Symbol.iterator;function e1(t){return t===null||typeof t!="object"?null:(t=qv&&t[qv]||t["@@iterator"],typeof t=="function"?t:null)}var kT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},RT=Object.assign,AT={};function Zo(t,e,n){this.props=t,this.context=e,this.refs=AT,this.updater=n||kT}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xT(){}xT.prototype=Zo.prototype;function mg(t,e,n){this.props=t,this.context=e,this.refs=AT,this.updater=n||kT}var gg=mg.prototype=new xT;gg.constructor=mg;RT(gg,Zo.prototype);gg.isPureReactComponent=!0;var Gv=Array.isArray,PT=Object.prototype.hasOwnProperty,_g={current:null},NT={key:!0,ref:!0,__self:!0,__source:!0};function bT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)PT.call(e,r)&&!NT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:au,type:t,key:s,ref:o,props:i,_owner:_g.current}}function t1(t,e){return{$$typeof:au,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yg(t){return typeof t=="object"&&t!==null&&t.$$typeof===au}function n1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kv=/\/+/g;function Df(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n1(""+t.key):e.toString(36)}function Ac(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case au:case $x:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Df(o,0):r,Gv(i)?(n="",t!=null&&(n=t.replace(Kv,"$&/")+"/"),Ac(i,e,n,"",function(c){return c})):i!=null&&(yg(i)&&(i=t1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Kv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Df(s,a);o+=Ac(s,e,n,u,i)}else if(u=e1(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Df(s,a++),o+=Ac(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ec(t,e,n){if(t==null)return t;var r=[],i=0;return Ac(t,r,"","",function(s){return e.call(n,s,i++)}),r}function r1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},xc={transition:null},i1={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:xc,ReactCurrentOwner:_g};function DT(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:ec,forEach:function(t,e,n){ec(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ec(t,function(){e++}),e},toArray:function(t){return ec(t,function(e){return e})||[]},only:function(t){if(!yg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=Zo;ce.Fragment=Hx;ce.Profiler=Gx;ce.PureComponent=mg;ce.StrictMode=qx;ce.Suspense=Xx;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i1;ce.act=DT;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=RT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_g.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)PT.call(e,u)&&!NT.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:au,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:Qx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kx,_context:t},t.Consumer=t};ce.createElement=bT;ce.createFactory=function(t){var e=bT.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:Yx,render:t}};ce.isValidElement=yg;ce.lazy=function(t){return{$$typeof:Zx,_payload:{_status:-1,_result:t},_init:r1}};ce.memo=function(t,e){return{$$typeof:Jx,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=xc.transition;xc.transition={};try{t()}finally{xc.transition=e}};ce.unstable_act=DT;ce.useCallback=function(t,e){return Kt.current.useCallback(t,e)};ce.useContext=function(t){return Kt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Kt.current.useEffect(t,e)};ce.useId=function(){return Kt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Kt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};ce.useRef=function(t){return Kt.current.useRef(t)};ce.useState=function(t){return Kt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Kt.current.useTransition()};ce.version="18.3.1";CT.exports=ce;var O=CT.exports;const OT=Wx(O),s1=zx({__proto__:null,default:OT},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1=O,a1=Symbol.for("react.element"),l1=Symbol.for("react.fragment"),u1=Object.prototype.hasOwnProperty,c1=o1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h1={key:!0,ref:!0,__self:!0,__source:!0};function LT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)u1.call(e,r)&&!h1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:a1,type:t,key:s,ref:o,props:i,_owner:c1.current}}rd.Fragment=l1;rd.jsx=LT;rd.jsxs=LT;ST.exports=rd;var g=ST.exports,Pp={},MT={exports:{}},mn={},VT={exports:{}},FT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,J){var Y=W.length;W.push(J);e:for(;0<Y;){var G=Y-1>>>1,K=W[G];if(0<i(K,J))W[G]=J,W[Y]=K,Y=G;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var J=W[0],Y=W.pop();if(Y!==J){W[0]=Y;e:for(var G=0,K=W.length,se=K>>>1;G<se;){var ze=2*(G+1)-1,De=W[ze],Et=ze+1,ot=W[Et];if(0>i(De,Y))Et<K&&0>i(ot,De)?(W[G]=ot,W[Et]=Y,G=Et):(W[G]=De,W[ze]=Y,G=ze);else if(Et<K&&0>i(ot,Y))W[G]=ot,W[Et]=Y,G=Et;else break e}}return J}function i(W,J){var Y=W.sortIndex-J.sortIndex;return Y!==0?Y:W.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,p=3,y=!1,E=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(W){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=W)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function D(W){if(A=!1,I(W),!E)if(n(u)!==null)E=!0,qn(F);else{var J=n(c);J!==null&&an(D,J.startTime-W)}}function F(W,J){E=!1,A&&(A=!1,S(v),v=-1),y=!0;var Y=p;try{for(I(J),f=n(u);f!==null&&(!(f.expirationTime>J)||W&&!P());){var G=f.callback;if(typeof G=="function"){f.callback=null,p=f.priorityLevel;var K=G(f.expirationTime<=J);J=t.unstable_now(),typeof K=="function"?f.callback=K:f===n(u)&&r(u),I(J)}else r(u);f=n(u)}if(f!==null)var se=!0;else{var ze=n(c);ze!==null&&an(D,ze.startTime-J),se=!1}return se}finally{f=null,p=Y,y=!1}}var j=!1,k=null,v=-1,C=5,w=-1;function P(){return!(t.unstable_now()-w<C)}function x(){if(k!==null){var W=t.unstable_now();w=W;var J=!0;try{J=k(!0,W)}finally{J?R():(j=!1,k=null)}}else j=!1}var R;if(typeof T=="function")R=function(){T(x)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,on=st.port2;st.port1.onmessage=x,R=function(){on.postMessage(null)}}else R=function(){N(x,0)};function qn(W){k=W,j||(j=!0,R())}function an(W,J){v=N(function(){W(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){E||y||(E=!0,qn(F))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(p){case 1:case 2:case 3:var J=3;break;default:J=p}var Y=p;p=J;try{return W()}finally{p=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,J){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Y=p;p=W;try{return J()}finally{p=Y}},t.unstable_scheduleCallback=function(W,J,Y){var G=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?G+Y:G):Y=G,W){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=Y+K,W={id:h++,callback:J,priorityLevel:W,startTime:Y,expirationTime:K,sortIndex:-1},Y>G?(W.sortIndex=Y,e(c,W),n(u)===null&&W===n(c)&&(A?(S(v),v=-1):A=!0,an(D,Y-G))):(W.sortIndex=K,e(u,W),E||y||(E=!0,qn(F))),W},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(W){var J=p;return function(){var Y=p;p=J;try{return W.apply(this,arguments)}finally{p=Y}}}})(FT);VT.exports=FT;var d1=VT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1=O,pn=d1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jT=new Set,El={};function Ps(t,e){ko(t,e),ko(t+"Capture",e)}function ko(t,e){for(El[t]=e,t=0;t<e.length;t++)jT.add(e[t])}var Nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Np=Object.prototype.hasOwnProperty,p1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qv={},Yv={};function m1(t){return Np.call(Yv,t)?!0:Np.call(Qv,t)?!1:p1.test(t)?Yv[t]=!0:(Qv[t]=!0,!1)}function g1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _1(t,e,n,r){if(e===null||typeof e>"u"||g1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vg=/[\-:]([a-z])/g;function wg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vg,wg);Pt[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vg,wg);Pt[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vg,wg);Pt[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Eg(t,e,n,r){var i=Pt.hasOwnProperty(e)?Pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_1(e,n,i,r)&&(n=null),r||i===null?m1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zr=f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tc=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),Tg=Symbol.for("react.strict_mode"),bp=Symbol.for("react.profiler"),UT=Symbol.for("react.provider"),BT=Symbol.for("react.context"),Ig=Symbol.for("react.forward_ref"),Dp=Symbol.for("react.suspense"),Op=Symbol.for("react.suspense_list"),Sg=Symbol.for("react.memo"),Jr=Symbol.for("react.lazy"),zT=Symbol.for("react.offscreen"),Xv=Symbol.iterator;function Pa(t){return t===null||typeof t!="object"?null:(t=Xv&&t[Xv]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,Of;function Ha(t){if(Of===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Of=e&&e[1]||""}return`
`+Of+t}var Lf=!1;function Mf(t,e){if(!t||Lf)return"";Lf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Lf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ha(t):""}function y1(t){switch(t.tag){case 5:return Ha(t.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 2:case 15:return t=Mf(t.type,!1),t;case 11:return t=Mf(t.type.render,!1),t;case 1:return t=Mf(t.type,!0),t;default:return""}}function Lp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case eo:return"Fragment";case Zs:return"Portal";case bp:return"Profiler";case Tg:return"StrictMode";case Dp:return"Suspense";case Op:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case BT:return(t.displayName||"Context")+".Consumer";case UT:return(t._context.displayName||"Context")+".Provider";case Ig:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sg:return e=t.displayName||null,e!==null?e:Lp(t.type)||"Memo";case Jr:e=t._payload,t=t._init;try{return Lp(t(e))}catch{}}return null}function v1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lp(e);case 8:return e===Tg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ti(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function WT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function w1(t){var e=WT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nc(t){t._valueTracker||(t._valueTracker=w1(t))}function $T(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=WT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mp(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ti(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function HT(t,e){e=e.checked,e!=null&&Eg(t,"checked",e,!1)}function Vp(t,e){HT(t,e);var n=Ti(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fp(t,e.type,Ti(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fp(t,e,n){(e!=="number"||Xc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qa=Array.isArray;function po(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ti(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ew(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(qa(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ti(n)}}function qT(t,e){var n=Ti(e.value),r=Ti(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function tw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function GT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Up(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?GT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rc,KT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rc=rc||document.createElement("div"),rc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var el={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E1=["Webkit","ms","Moz","O"];Object.keys(el).forEach(function(t){E1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),el[e]=el[t]})});function QT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||el.hasOwnProperty(t)&&el[t]?(""+e).trim():e+"px"}function YT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=QT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var T1=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bp(t,e){if(e){if(T1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function zp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wp=null;function Cg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $p=null,mo=null,go=null;function nw(t){if(t=cu(t)){if(typeof $p!="function")throw Error(U(280));var e=t.stateNode;e&&(e=ld(e),$p(t.stateNode,t.type,e))}}function XT(t){mo?go?go.push(t):go=[t]:mo=t}function JT(){if(mo){var t=mo,e=go;if(go=mo=null,nw(t),e)for(t=0;t<e.length;t++)nw(e[t])}}function ZT(t,e){return t(e)}function eI(){}var Vf=!1;function tI(t,e,n){if(Vf)return t(e,n);Vf=!0;try{return ZT(t,e,n)}finally{Vf=!1,(mo!==null||go!==null)&&(eI(),JT())}}function Il(t,e){var n=t.stateNode;if(n===null)return null;var r=ld(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Hp=!1;if(Nr)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){Hp=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{Hp=!1}function I1(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var tl=!1,Jc=null,Zc=!1,qp=null,S1={onError:function(t){tl=!0,Jc=t}};function C1(t,e,n,r,i,s,o,a,u){tl=!1,Jc=null,I1.apply(S1,arguments)}function k1(t,e,n,r,i,s,o,a,u){if(C1.apply(this,arguments),tl){if(tl){var c=Jc;tl=!1,Jc=null}else throw Error(U(198));Zc||(Zc=!0,qp=c)}}function Ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rw(t){if(Ns(t)!==t)throw Error(U(188))}function R1(t){var e=t.alternate;if(!e){if(e=Ns(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rw(i),t;if(s===r)return rw(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function rI(t){return t=R1(t),t!==null?iI(t):null}function iI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iI(t);if(e!==null)return e;t=t.sibling}return null}var sI=pn.unstable_scheduleCallback,iw=pn.unstable_cancelCallback,A1=pn.unstable_shouldYield,x1=pn.unstable_requestPaint,Qe=pn.unstable_now,P1=pn.unstable_getCurrentPriorityLevel,kg=pn.unstable_ImmediatePriority,oI=pn.unstable_UserBlockingPriority,eh=pn.unstable_NormalPriority,N1=pn.unstable_LowPriority,aI=pn.unstable_IdlePriority,id=null,Jn=null;function b1(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(id,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:L1,D1=Math.log,O1=Math.LN2;function L1(t){return t>>>=0,t===0?32:31-(D1(t)/O1|0)|0}var ic=64,sc=4194304;function Ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function th(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ga(a):(s&=o,s!==0&&(r=Ga(s)))}else o=n&~i,o!==0?r=Ga(o):s!==0&&(r=Ga(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Fn(e),i=1<<n,r|=t[n],e&=~i;return r}function M1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=M1(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Gp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lI(){var t=ic;return ic<<=1,!(ic&4194240)&&(ic=64),t}function Ff(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function lu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function F1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Rg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function uI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cI,Ag,hI,dI,fI,Kp=!1,oc=[],ci=null,hi=null,di=null,Sl=new Map,Cl=new Map,ei=[],j1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sw(t,e){switch(t){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":Sl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(e.pointerId)}}function ba(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=cu(e),e!==null&&Ag(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function U1(t,e,n,r,i){switch(e){case"focusin":return ci=ba(ci,t,e,n,r,i),!0;case"dragenter":return hi=ba(hi,t,e,n,r,i),!0;case"mouseover":return di=ba(di,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Sl.set(s,ba(Sl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Cl.set(s,ba(Cl.get(s)||null,t,e,n,r,i)),!0}return!1}function pI(t){var e=Ji(t.target);if(e!==null){var n=Ns(e);if(n!==null){if(e=n.tag,e===13){if(e=nI(n),e!==null){t.blockedOn=e,fI(t.priority,function(){hI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wp=r,n.target.dispatchEvent(r),Wp=null}else return e=cu(n),e!==null&&Ag(e),t.blockedOn=n,!1;e.shift()}return!0}function ow(t,e,n){Pc(t)&&n.delete(e)}function B1(){Kp=!1,ci!==null&&Pc(ci)&&(ci=null),hi!==null&&Pc(hi)&&(hi=null),di!==null&&Pc(di)&&(di=null),Sl.forEach(ow),Cl.forEach(ow)}function Da(t,e){t.blockedOn===e&&(t.blockedOn=null,Kp||(Kp=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,B1)))}function kl(t){function e(i){return Da(i,t)}if(0<oc.length){Da(oc[0],t);for(var n=1;n<oc.length;n++){var r=oc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ci!==null&&Da(ci,t),hi!==null&&Da(hi,t),di!==null&&Da(di,t),Sl.forEach(e),Cl.forEach(e),n=0;n<ei.length;n++)r=ei[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ei.length&&(n=ei[0],n.blockedOn===null);)pI(n),n.blockedOn===null&&ei.shift()}var _o=zr.ReactCurrentBatchConfig,nh=!0;function z1(t,e,n,r){var i=ve,s=_o.transition;_o.transition=null;try{ve=1,xg(t,e,n,r)}finally{ve=i,_o.transition=s}}function W1(t,e,n,r){var i=ve,s=_o.transition;_o.transition=null;try{ve=4,xg(t,e,n,r)}finally{ve=i,_o.transition=s}}function xg(t,e,n,r){if(nh){var i=Qp(t,e,n,r);if(i===null)Kf(t,e,r,rh,n),sw(t,r);else if(U1(i,t,e,n,r))r.stopPropagation();else if(sw(t,r),e&4&&-1<j1.indexOf(t)){for(;i!==null;){var s=cu(i);if(s!==null&&cI(s),s=Qp(t,e,n,r),s===null&&Kf(t,e,r,rh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kf(t,e,r,null,n)}}var rh=null;function Qp(t,e,n,r){if(rh=null,t=Cg(r),t=Ji(t),t!==null)if(e=Ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rh=t,null}function mI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P1()){case kg:return 1;case oI:return 4;case eh:case N1:return 16;case aI:return 536870912;default:return 16}default:return 16}}var si=null,Pg=null,Nc=null;function gI(){if(Nc)return Nc;var t,e=Pg,n=e.length,r,i="value"in si?si.value:si.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Nc=i.slice(t,1<r?1-r:void 0)}function bc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ac(){return!0}function aw(){return!1}function gn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ac:aw,this.isPropagationStopped=aw,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ng=gn(ea),uu=Be({},ea,{view:0,detail:0}),$1=gn(uu),jf,Uf,Oa,sd=Be({},uu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oa&&(Oa&&t.type==="mousemove"?(jf=t.screenX-Oa.screenX,Uf=t.screenY-Oa.screenY):Uf=jf=0,Oa=t),jf)},movementY:function(t){return"movementY"in t?t.movementY:Uf}}),lw=gn(sd),H1=Be({},sd,{dataTransfer:0}),q1=gn(H1),G1=Be({},uu,{relatedTarget:0}),Bf=gn(G1),K1=Be({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Q1=gn(K1),Y1=Be({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X1=gn(Y1),J1=Be({},ea,{data:0}),uw=gn(J1),Z1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tP[t])?!!e[t]:!1}function bg(){return nP}var rP=Be({},uu,{key:function(t){if(t.key){var e=Z1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bg,charCode:function(t){return t.type==="keypress"?bc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iP=gn(rP),sP=Be({},sd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cw=gn(sP),oP=Be({},uu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bg}),aP=gn(oP),lP=Be({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),uP=gn(lP),cP=Be({},sd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hP=gn(cP),dP=[9,13,27,32],Dg=Nr&&"CompositionEvent"in window,nl=null;Nr&&"documentMode"in document&&(nl=document.documentMode);var fP=Nr&&"TextEvent"in window&&!nl,_I=Nr&&(!Dg||nl&&8<nl&&11>=nl),hw=" ",dw=!1;function yI(t,e){switch(t){case"keyup":return dP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var to=!1;function pP(t,e){switch(t){case"compositionend":return vI(e);case"keypress":return e.which!==32?null:(dw=!0,hw);case"textInput":return t=e.data,t===hw&&dw?null:t;default:return null}}function mP(t,e){if(to)return t==="compositionend"||!Dg&&yI(t,e)?(t=gI(),Nc=Pg=si=null,to=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _I&&e.locale!=="ko"?null:e.data;default:return null}}var gP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gP[t.type]:e==="textarea"}function wI(t,e,n,r){XT(r),e=ih(e,"onChange"),0<e.length&&(n=new Ng("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var rl=null,Rl=null;function _P(t){NI(t,0)}function od(t){var e=io(t);if($T(e))return t}function yP(t,e){if(t==="change")return e}var EI=!1;if(Nr){var zf;if(Nr){var Wf="oninput"in document;if(!Wf){var pw=document.createElement("div");pw.setAttribute("oninput","return;"),Wf=typeof pw.oninput=="function"}zf=Wf}else zf=!1;EI=zf&&(!document.documentMode||9<document.documentMode)}function mw(){rl&&(rl.detachEvent("onpropertychange",TI),Rl=rl=null)}function TI(t){if(t.propertyName==="value"&&od(Rl)){var e=[];wI(e,Rl,t,Cg(t)),tI(_P,e)}}function vP(t,e,n){t==="focusin"?(mw(),rl=e,Rl=n,rl.attachEvent("onpropertychange",TI)):t==="focusout"&&mw()}function wP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return od(Rl)}function EP(t,e){if(t==="click")return od(e)}function TP(t,e){if(t==="input"||t==="change")return od(e)}function IP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:IP;function Al(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Np.call(e,i)||!Wn(t[i],e[i]))return!1}return!0}function gw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _w(t,e){var n=gw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gw(n)}}function II(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?II(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function SI(){for(var t=window,e=Xc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xc(t.document)}return e}function Og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SP(t){var e=SI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&II(n.ownerDocument.documentElement,n)){if(r!==null&&Og(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_w(n,s);var o=_w(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CP=Nr&&"documentMode"in document&&11>=document.documentMode,no=null,Yp=null,il=null,Xp=!1;function yw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xp||no==null||no!==Xc(r)||(r=no,"selectionStart"in r&&Og(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),il&&Al(il,r)||(il=r,r=ih(Yp,"onSelect"),0<r.length&&(e=new Ng("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=no)))}function lc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ro={animationend:lc("Animation","AnimationEnd"),animationiteration:lc("Animation","AnimationIteration"),animationstart:lc("Animation","AnimationStart"),transitionend:lc("Transition","TransitionEnd")},$f={},CI={};Nr&&(CI=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function ad(t){if($f[t])return $f[t];if(!ro[t])return t;var e=ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in CI)return $f[t]=e[n];return t}var kI=ad("animationend"),RI=ad("animationiteration"),AI=ad("animationstart"),xI=ad("transitionend"),PI=new Map,vw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(t,e){PI.set(t,e),Ps(e,[t])}for(var Hf=0;Hf<vw.length;Hf++){var qf=vw[Hf],kP=qf.toLowerCase(),RP=qf[0].toUpperCase()+qf.slice(1);bi(kP,"on"+RP)}bi(kI,"onAnimationEnd");bi(RI,"onAnimationIteration");bi(AI,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(xI,"onTransitionEnd");ko("onMouseEnter",["mouseout","mouseover"]);ko("onMouseLeave",["mouseout","mouseover"]);ko("onPointerEnter",["pointerout","pointerover"]);ko("onPointerLeave",["pointerout","pointerover"]);Ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));function ww(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,k1(r,e,void 0,t),t.currentTarget=null}function NI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ww(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ww(i,a,c),s=u}}}if(Zc)throw t=qp,Zc=!1,qp=null,t}function Pe(t,e){var n=e[nm];n===void 0&&(n=e[nm]=new Set);var r=t+"__bubble";n.has(r)||(bI(e,t,2,!1),n.add(r))}function Gf(t,e,n){var r=0;e&&(r|=4),bI(n,t,r,e)}var uc="_reactListening"+Math.random().toString(36).slice(2);function xl(t){if(!t[uc]){t[uc]=!0,jT.forEach(function(n){n!=="selectionchange"&&(AP.has(n)||Gf(n,!1,t),Gf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uc]||(e[uc]=!0,Gf("selectionchange",!1,e))}}function bI(t,e,n,r){switch(mI(e)){case 1:var i=z1;break;case 4:i=W1;break;default:i=xg}n=i.bind(null,e,n,t),i=void 0,!Hp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ji(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}tI(function(){var c=s,h=Cg(n),f=[];e:{var p=PI.get(t);if(p!==void 0){var y=Ng,E=t;switch(t){case"keypress":if(bc(n)===0)break e;case"keydown":case"keyup":y=iP;break;case"focusin":E="focus",y=Bf;break;case"focusout":E="blur",y=Bf;break;case"beforeblur":case"afterblur":y=Bf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=lw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=aP;break;case kI:case RI:case AI:y=Q1;break;case xI:y=uP;break;case"scroll":y=$1;break;case"wheel":y=hP;break;case"copy":case"cut":case"paste":y=X1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=cw}var A=(e&4)!==0,N=!A&&t==="scroll",S=A?p!==null?p+"Capture":null:p;A=[];for(var T=c,I;T!==null;){I=T;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,S!==null&&(D=Il(T,S),D!=null&&A.push(Pl(T,D,I)))),N)break;T=T.return}0<A.length&&(p=new y(p,E,null,n,h),f.push({event:p,listeners:A}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==Wp&&(E=n.relatedTarget||n.fromElement)&&(Ji(E)||E[br]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(E=n.relatedTarget||n.toElement,y=c,E=E?Ji(E):null,E!==null&&(N=Ns(E),E!==N||E.tag!==5&&E.tag!==6)&&(E=null)):(y=null,E=c),y!==E)){if(A=lw,D="onMouseLeave",S="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(A=cw,D="onPointerLeave",S="onPointerEnter",T="pointer"),N=y==null?p:io(y),I=E==null?p:io(E),p=new A(D,T+"leave",y,n,h),p.target=N,p.relatedTarget=I,D=null,Ji(h)===c&&(A=new A(S,T+"enter",E,n,h),A.target=I,A.relatedTarget=N,D=A),N=D,y&&E)t:{for(A=y,S=E,T=0,I=A;I;I=Gs(I))T++;for(I=0,D=S;D;D=Gs(D))I++;for(;0<T-I;)A=Gs(A),T--;for(;0<I-T;)S=Gs(S),I--;for(;T--;){if(A===S||S!==null&&A===S.alternate)break t;A=Gs(A),S=Gs(S)}A=null}else A=null;y!==null&&Ew(f,p,y,A,!1),E!==null&&N!==null&&Ew(f,N,E,A,!0)}}e:{if(p=c?io(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var F=yP;else if(fw(p))if(EI)F=TP;else{F=wP;var j=vP}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(F=EP);if(F&&(F=F(t,c))){wI(f,F,n,h);break e}j&&j(t,p,c),t==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&Fp(p,"number",p.value)}switch(j=c?io(c):window,t){case"focusin":(fw(j)||j.contentEditable==="true")&&(no=j,Yp=c,il=null);break;case"focusout":il=Yp=no=null;break;case"mousedown":Xp=!0;break;case"contextmenu":case"mouseup":case"dragend":Xp=!1,yw(f,n,h);break;case"selectionchange":if(CP)break;case"keydown":case"keyup":yw(f,n,h)}var k;if(Dg)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else to?yI(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(_I&&n.locale!=="ko"&&(to||v!=="onCompositionStart"?v==="onCompositionEnd"&&to&&(k=gI()):(si=h,Pg="value"in si?si.value:si.textContent,to=!0)),j=ih(c,v),0<j.length&&(v=new uw(v,t,null,n,h),f.push({event:v,listeners:j}),k?v.data=k:(k=vI(n),k!==null&&(v.data=k)))),(k=fP?pP(t,n):mP(t,n))&&(c=ih(c,"onBeforeInput"),0<c.length&&(h=new uw("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=k))}NI(f,e)})}function Pl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ih(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Il(t,n),s!=null&&r.unshift(Pl(t,s,i)),s=Il(t,e),s!=null&&r.push(Pl(t,s,i))),t=t.return}return r}function Gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ew(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Il(n,s),u!=null&&o.unshift(Pl(n,u,a))):i||(u=Il(n,s),u!=null&&o.push(Pl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xP=/\r\n?/g,PP=/\u0000|\uFFFD/g;function Tw(t){return(typeof t=="string"?t:""+t).replace(xP,`
`).replace(PP,"")}function cc(t,e,n){if(e=Tw(e),Tw(t)!==e&&n)throw Error(U(425))}function sh(){}var Jp=null,Zp=null;function em(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tm=typeof setTimeout=="function"?setTimeout:void 0,NP=typeof clearTimeout=="function"?clearTimeout:void 0,Iw=typeof Promise=="function"?Promise:void 0,bP=typeof queueMicrotask=="function"?queueMicrotask:typeof Iw<"u"?function(t){return Iw.resolve(null).then(t).catch(DP)}:tm;function DP(t){setTimeout(function(){throw t})}function Qf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),kl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);kl(e)}function fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ta=Math.random().toString(36).slice(2),Yn="__reactFiber$"+ta,Nl="__reactProps$"+ta,br="__reactContainer$"+ta,nm="__reactEvents$"+ta,OP="__reactListeners$"+ta,LP="__reactHandles$"+ta;function Ji(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[br]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sw(t);t!==null;){if(n=t[Yn])return n;t=Sw(t)}return e}t=n,n=t.parentNode}return null}function cu(t){return t=t[Yn]||t[br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function ld(t){return t[Nl]||null}var rm=[],so=-1;function Di(t){return{current:t}}function be(t){0>so||(t.current=rm[so],rm[so]=null,so--)}function Ae(t,e){so++,rm[so]=t.current,t.current=e}var Ii={},Ut=Di(Ii),en=Di(!1),hs=Ii;function Ro(t,e){var n=t.type.contextTypes;if(!n)return Ii;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tn(t){return t=t.childContextTypes,t!=null}function oh(){be(en),be(Ut)}function Cw(t,e,n){if(Ut.current!==Ii)throw Error(U(168));Ae(Ut,e),Ae(en,n)}function DI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,v1(t)||"Unknown",i));return Be({},n,r)}function ah(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ii,hs=Ut.current,Ae(Ut,t),Ae(en,en.current),!0}function kw(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=DI(t,e,hs),r.__reactInternalMemoizedMergedChildContext=t,be(en),be(Ut),Ae(Ut,t)):be(en),Ae(en,n)}var _r=null,ud=!1,Yf=!1;function OI(t){_r===null?_r=[t]:_r.push(t)}function MP(t){ud=!0,OI(t)}function Oi(){if(!Yf&&_r!==null){Yf=!0;var t=0,e=ve;try{var n=_r;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_r=null,ud=!1}catch(i){throw _r!==null&&(_r=_r.slice(t+1)),sI(kg,Oi),i}finally{ve=e,Yf=!1}}return null}var oo=[],ao=0,lh=null,uh=0,vn=[],wn=0,ds=null,vr=1,wr="";function Gi(t,e){oo[ao++]=uh,oo[ao++]=lh,lh=t,uh=e}function LI(t,e,n){vn[wn++]=vr,vn[wn++]=wr,vn[wn++]=ds,ds=t;var r=vr;t=wr;var i=32-Fn(r)-1;r&=~(1<<i),n+=1;var s=32-Fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vr=1<<32-Fn(e)+i|n<<i|r,wr=s+t}else vr=1<<s|n<<i|r,wr=t}function Lg(t){t.return!==null&&(Gi(t,1),LI(t,1,0))}function Mg(t){for(;t===lh;)lh=oo[--ao],oo[ao]=null,uh=oo[--ao],oo[ao]=null;for(;t===ds;)ds=vn[--wn],vn[wn]=null,wr=vn[--wn],vn[wn]=null,vr=vn[--wn],vn[wn]=null}var dn=null,cn=null,Le=!1,On=null;function MI(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,cn=fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:vr,overflow:wr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,cn=null,!0):!1;default:return!1}}function im(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sm(t){if(Le){var e=cn;if(e){var n=e;if(!Rw(t,e)){if(im(t))throw Error(U(418));e=fi(n.nextSibling);var r=dn;e&&Rw(t,e)?MI(r,n):(t.flags=t.flags&-4097|2,Le=!1,dn=t)}}else{if(im(t))throw Error(U(418));t.flags=t.flags&-4097|2,Le=!1,dn=t}}}function Aw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function hc(t){if(t!==dn)return!1;if(!Le)return Aw(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!em(t.type,t.memoizedProps)),e&&(e=cn)){if(im(t))throw VI(),Error(U(418));for(;e;)MI(t,e),e=fi(e.nextSibling)}if(Aw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=dn?fi(t.stateNode.nextSibling):null;return!0}function VI(){for(var t=cn;t;)t=fi(t.nextSibling)}function Ao(){cn=dn=null,Le=!1}function Vg(t){On===null?On=[t]:On.push(t)}var VP=zr.ReactCurrentBatchConfig;function La(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function dc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xw(t){var e=t._init;return e(t._payload)}function FI(t){function e(S,T){if(t){var I=S.deletions;I===null?(S.deletions=[T],S.flags|=16):I.push(T)}}function n(S,T){if(!t)return null;for(;T!==null;)e(S,T),T=T.sibling;return null}function r(S,T){for(S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function i(S,T){return S=_i(S,T),S.index=0,S.sibling=null,S}function s(S,T,I){return S.index=I,t?(I=S.alternate,I!==null?(I=I.index,I<T?(S.flags|=2,T):I):(S.flags|=2,T)):(S.flags|=1048576,T)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,T,I,D){return T===null||T.tag!==6?(T=rp(I,S.mode,D),T.return=S,T):(T=i(T,I),T.return=S,T)}function u(S,T,I,D){var F=I.type;return F===eo?h(S,T,I.props.children,D,I.key):T!==null&&(T.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Jr&&xw(F)===T.type)?(D=i(T,I.props),D.ref=La(S,T,I),D.return=S,D):(D=jc(I.type,I.key,I.props,null,S.mode,D),D.ref=La(S,T,I),D.return=S,D)}function c(S,T,I,D){return T===null||T.tag!==4||T.stateNode.containerInfo!==I.containerInfo||T.stateNode.implementation!==I.implementation?(T=ip(I,S.mode,D),T.return=S,T):(T=i(T,I.children||[]),T.return=S,T)}function h(S,T,I,D,F){return T===null||T.tag!==7?(T=ls(I,S.mode,D,F),T.return=S,T):(T=i(T,I),T.return=S,T)}function f(S,T,I){if(typeof T=="string"&&T!==""||typeof T=="number")return T=rp(""+T,S.mode,I),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case tc:return I=jc(T.type,T.key,T.props,null,S.mode,I),I.ref=La(S,null,T),I.return=S,I;case Zs:return T=ip(T,S.mode,I),T.return=S,T;case Jr:var D=T._init;return f(S,D(T._payload),I)}if(qa(T)||Pa(T))return T=ls(T,S.mode,I,null),T.return=S,T;dc(S,T)}return null}function p(S,T,I,D){var F=T!==null?T.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:a(S,T,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case tc:return I.key===F?u(S,T,I,D):null;case Zs:return I.key===F?c(S,T,I,D):null;case Jr:return F=I._init,p(S,T,F(I._payload),D)}if(qa(I)||Pa(I))return F!==null?null:h(S,T,I,D,null);dc(S,I)}return null}function y(S,T,I,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(I)||null,a(T,S,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case tc:return S=S.get(D.key===null?I:D.key)||null,u(T,S,D,F);case Zs:return S=S.get(D.key===null?I:D.key)||null,c(T,S,D,F);case Jr:var j=D._init;return y(S,T,I,j(D._payload),F)}if(qa(D)||Pa(D))return S=S.get(I)||null,h(T,S,D,F,null);dc(T,D)}return null}function E(S,T,I,D){for(var F=null,j=null,k=T,v=T=0,C=null;k!==null&&v<I.length;v++){k.index>v?(C=k,k=null):C=k.sibling;var w=p(S,k,I[v],D);if(w===null){k===null&&(k=C);break}t&&k&&w.alternate===null&&e(S,k),T=s(w,T,v),j===null?F=w:j.sibling=w,j=w,k=C}if(v===I.length)return n(S,k),Le&&Gi(S,v),F;if(k===null){for(;v<I.length;v++)k=f(S,I[v],D),k!==null&&(T=s(k,T,v),j===null?F=k:j.sibling=k,j=k);return Le&&Gi(S,v),F}for(k=r(S,k);v<I.length;v++)C=y(k,S,v,I[v],D),C!==null&&(t&&C.alternate!==null&&k.delete(C.key===null?v:C.key),T=s(C,T,v),j===null?F=C:j.sibling=C,j=C);return t&&k.forEach(function(P){return e(S,P)}),Le&&Gi(S,v),F}function A(S,T,I,D){var F=Pa(I);if(typeof F!="function")throw Error(U(150));if(I=F.call(I),I==null)throw Error(U(151));for(var j=F=null,k=T,v=T=0,C=null,w=I.next();k!==null&&!w.done;v++,w=I.next()){k.index>v?(C=k,k=null):C=k.sibling;var P=p(S,k,w.value,D);if(P===null){k===null&&(k=C);break}t&&k&&P.alternate===null&&e(S,k),T=s(P,T,v),j===null?F=P:j.sibling=P,j=P,k=C}if(w.done)return n(S,k),Le&&Gi(S,v),F;if(k===null){for(;!w.done;v++,w=I.next())w=f(S,w.value,D),w!==null&&(T=s(w,T,v),j===null?F=w:j.sibling=w,j=w);return Le&&Gi(S,v),F}for(k=r(S,k);!w.done;v++,w=I.next())w=y(k,S,v,w.value,D),w!==null&&(t&&w.alternate!==null&&k.delete(w.key===null?v:w.key),T=s(w,T,v),j===null?F=w:j.sibling=w,j=w);return t&&k.forEach(function(x){return e(S,x)}),Le&&Gi(S,v),F}function N(S,T,I,D){if(typeof I=="object"&&I!==null&&I.type===eo&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case tc:e:{for(var F=I.key,j=T;j!==null;){if(j.key===F){if(F=I.type,F===eo){if(j.tag===7){n(S,j.sibling),T=i(j,I.props.children),T.return=S,S=T;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Jr&&xw(F)===j.type){n(S,j.sibling),T=i(j,I.props),T.ref=La(S,j,I),T.return=S,S=T;break e}n(S,j);break}else e(S,j);j=j.sibling}I.type===eo?(T=ls(I.props.children,S.mode,D,I.key),T.return=S,S=T):(D=jc(I.type,I.key,I.props,null,S.mode,D),D.ref=La(S,T,I),D.return=S,S=D)}return o(S);case Zs:e:{for(j=I.key;T!==null;){if(T.key===j)if(T.tag===4&&T.stateNode.containerInfo===I.containerInfo&&T.stateNode.implementation===I.implementation){n(S,T.sibling),T=i(T,I.children||[]),T.return=S,S=T;break e}else{n(S,T);break}else e(S,T);T=T.sibling}T=ip(I,S.mode,D),T.return=S,S=T}return o(S);case Jr:return j=I._init,N(S,T,j(I._payload),D)}if(qa(I))return E(S,T,I,D);if(Pa(I))return A(S,T,I,D);dc(S,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,T!==null&&T.tag===6?(n(S,T.sibling),T=i(T,I),T.return=S,S=T):(n(S,T),T=rp(I,S.mode,D),T.return=S,S=T),o(S)):n(S,T)}return N}var xo=FI(!0),jI=FI(!1),ch=Di(null),hh=null,lo=null,Fg=null;function jg(){Fg=lo=hh=null}function Ug(t){var e=ch.current;be(ch),t._currentValue=e}function om(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yo(t,e){hh=t,Fg=lo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(Fg!==t)if(t={context:t,memoizedValue:e,next:null},lo===null){if(hh===null)throw Error(U(308));lo=t,hh.dependencies={lanes:0,firstContext:t}}else lo=lo.next=t;return e}var Zi=null;function Bg(t){Zi===null?Zi=[t]:Zi.push(t)}function UI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dr(t,r)}function Dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zr=!1;function zg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function BI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dr(t,n)}return i=r.interleaved,i===null?(e.next=e,Bg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dr(t,n)}function Dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rg(t,n)}}function Pw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dh(t,e,n,r){var i=t.updateQueue;Zr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,A=a;switch(p=e,y=n,A.tag){case 1:if(E=A.payload,typeof E=="function"){f=E.call(y,f,p);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=A.payload,p=typeof E=="function"?E.call(y,f,p):E,p==null)break e;f=Be({},f,p);break e;case 2:Zr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=f):h=h.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=f}}function Nw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var hu={},Zn=Di(hu),bl=Di(hu),Dl=Di(hu);function es(t){if(t===hu)throw Error(U(174));return t}function Wg(t,e){switch(Ae(Dl,e),Ae(bl,t),Ae(Zn,hu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Up(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Up(e,t)}be(Zn),Ae(Zn,e)}function Po(){be(Zn),be(bl),be(Dl)}function zI(t){es(Dl.current);var e=es(Zn.current),n=Up(e,t.type);e!==n&&(Ae(bl,t),Ae(Zn,n))}function $g(t){bl.current===t&&(be(Zn),be(bl))}var Ve=Di(0);function fh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xf=[];function Hg(){for(var t=0;t<Xf.length;t++)Xf[t]._workInProgressVersionPrimary=null;Xf.length=0}var Oc=zr.ReactCurrentDispatcher,Jf=zr.ReactCurrentBatchConfig,fs=0,Ue=null,at=null,pt=null,ph=!1,sl=!1,Ol=0,FP=0;function Ot(){throw Error(U(321))}function qg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Gg(t,e,n,r,i,s){if(fs=s,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oc.current=t===null||t.memoizedState===null?zP:WP,t=n(r,i),sl){s=0;do{if(sl=!1,Ol=0,25<=s)throw Error(U(301));s+=1,pt=at=null,e.updateQueue=null,Oc.current=$P,t=n(r,i)}while(sl)}if(Oc.current=mh,e=at!==null&&at.next!==null,fs=0,pt=at=Ue=null,ph=!1,e)throw Error(U(300));return t}function Kg(){var t=Ol!==0;return Ol=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ue.memoizedState=pt=t:pt=pt.next=t,pt}function Cn(){if(at===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=pt===null?Ue.memoizedState:pt.next;if(e!==null)pt=e,at=t;else{if(t===null)throw Error(U(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},pt===null?Ue.memoizedState=pt=t:pt=pt.next=t}return pt}function Ll(t,e){return typeof e=="function"?e(t):e}function Zf(t){var e=Cn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=at,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((fs&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Ue.lanes|=h,ps|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Wn(r,e.memoizedState)||(Jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ue.lanes|=s,ps|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ep(t){var e=Cn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function WI(){}function $I(t,e){var n=Ue,r=Cn(),i=e(),s=!Wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Jt=!0),r=r.queue,Qg(GI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,Ml(9,qI.bind(null,n,r,i,e),void 0,null),yt===null)throw Error(U(349));fs&30||HI(n,e,i)}return i}function HI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qI(t,e,n,r){e.value=n,e.getSnapshot=r,KI(e)&&QI(t)}function GI(t,e,n){return n(function(){KI(e)&&QI(t)})}function KI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function QI(t){var e=Dr(t,1);e!==null&&jn(e,t,1,-1)}function bw(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ll,lastRenderedState:t},e.queue=t,t=t.dispatch=BP.bind(null,Ue,t),[e.memoizedState,t]}function Ml(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function YI(){return Cn().memoizedState}function Lc(t,e,n,r){var i=Qn();Ue.flags|=t,i.memoizedState=Ml(1|e,n,void 0,r===void 0?null:r)}function cd(t,e,n,r){var i=Cn();r=r===void 0?null:r;var s=void 0;if(at!==null){var o=at.memoizedState;if(s=o.destroy,r!==null&&qg(r,o.deps)){i.memoizedState=Ml(e,n,s,r);return}}Ue.flags|=t,i.memoizedState=Ml(1|e,n,s,r)}function Dw(t,e){return Lc(8390656,8,t,e)}function Qg(t,e){return cd(2048,8,t,e)}function XI(t,e){return cd(4,2,t,e)}function JI(t,e){return cd(4,4,t,e)}function ZI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function eS(t,e,n){return n=n!=null?n.concat([t]):null,cd(4,4,ZI.bind(null,e,t),n)}function Yg(){}function tS(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nS(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rS(t,e,n){return fs&21?(Wn(n,e)||(n=lI(),Ue.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function jP(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Jf.transition;Jf.transition={};try{t(!1),e()}finally{ve=n,Jf.transition=r}}function iS(){return Cn().memoizedState}function UP(t,e,n){var r=gi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sS(t))oS(e,n);else if(n=UI(t,e,n,r),n!==null){var i=Ht();jn(n,t,r,i),aS(n,e,r)}}function BP(t,e,n){var r=gi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sS(t))oS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Wn(a,o)){var u=e.interleaved;u===null?(i.next=i,Bg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=UI(t,e,i,r),n!==null&&(i=Ht(),jn(n,t,r,i),aS(n,e,r))}}function sS(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function oS(t,e){sl=ph=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function aS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rg(t,n)}}var mh={readContext:Sn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},zP={readContext:Sn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:Dw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4194308,4,ZI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lc(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=UP.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:bw,useDebugValue:Yg,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=bw(!1),e=t[0];return t=jP.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,i=Qn();if(Le){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),yt===null)throw Error(U(349));fs&30||HI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Dw(GI.bind(null,r,s,t),[t]),r.flags|=2048,Ml(9,qI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=yt.identifierPrefix;if(Le){var n=wr,r=vr;n=(r&~(1<<32-Fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ol++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WP={readContext:Sn,useCallback:tS,useContext:Sn,useEffect:Qg,useImperativeHandle:eS,useInsertionEffect:XI,useLayoutEffect:JI,useMemo:nS,useReducer:Zf,useRef:YI,useState:function(){return Zf(Ll)},useDebugValue:Yg,useDeferredValue:function(t){var e=Cn();return rS(e,at.memoizedState,t)},useTransition:function(){var t=Zf(Ll)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:WI,useSyncExternalStore:$I,useId:iS,unstable_isNewReconciler:!1},$P={readContext:Sn,useCallback:tS,useContext:Sn,useEffect:Qg,useImperativeHandle:eS,useInsertionEffect:XI,useLayoutEffect:JI,useMemo:nS,useReducer:ep,useRef:YI,useState:function(){return ep(Ll)},useDebugValue:Yg,useDeferredValue:function(t){var e=Cn();return at===null?e.memoizedState=t:rS(e,at.memoizedState,t)},useTransition:function(){var t=ep(Ll)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:WI,useSyncExternalStore:$I,useId:iS,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function am(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hd={isMounted:function(t){return(t=t._reactInternals)?Ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=gi(t),s=Cr(r,i);s.payload=e,n!=null&&(s.callback=n),e=pi(t,s,i),e!==null&&(jn(e,t,i,r),Dc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=gi(t),s=Cr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pi(t,s,i),e!==null&&(jn(e,t,i,r),Dc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=gi(t),i=Cr(n,r);i.tag=2,e!=null&&(i.callback=e),e=pi(t,i,r),e!==null&&(jn(e,t,r,n),Dc(e,t,r))}};function Ow(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Al(n,r)||!Al(i,s):!0}function lS(t,e,n){var r=!1,i=Ii,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(i=tn(e)?hs:Ut.current,r=e.contextTypes,s=(r=r!=null)?Ro(t,i):Ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hd.enqueueReplaceState(e,e.state,null)}function lm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Sn(s):(s=tn(e)?hs:Ut.current,i.context=Ro(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(am(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hd.enqueueReplaceState(i,i.state,null),dh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function No(t,e){try{var n="",r=e;do n+=y1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function um(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HP=typeof WeakMap=="function"?WeakMap:Map;function uS(t,e,n){n=Cr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_h||(_h=!0,vm=r),um(t,e)},n}function cS(t,e,n){n=Cr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){um(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){um(t,e),typeof r!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new HP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=sN.bind(null,t,e,n),e.then(t,t))}function Vw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cr(-1,1),e.tag=2,pi(n,e,1))),n.lanes|=1),t)}var qP=zr.ReactCurrentOwner,Jt=!1;function Wt(t,e,n,r){e.child=t===null?jI(e,null,n,r):xo(e,t.child,n,r)}function jw(t,e,n,r,i){n=n.render;var s=e.ref;return yo(e,i),r=Gg(t,e,n,r,s,i),n=Kg(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Or(t,e,i)):(Le&&n&&Lg(e),e.flags|=1,Wt(t,e,r,i),e.child)}function Uw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!i_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hS(t,e,s,r,i)):(t=jc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Al,n(o,r)&&t.ref===e.ref)return Or(t,e,i)}return e.flags|=1,t=_i(s,r),t.ref=e.ref,t.return=e,e.child=t}function hS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Al(s,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,Or(t,e,i)}return cm(t,e,n,r,i)}function dS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(co,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ae(co,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ae(co,un),un|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ae(co,un),un|=r;return Wt(t,e,i,n),e.child}function fS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cm(t,e,n,r,i){var s=tn(n)?hs:Ut.current;return s=Ro(e,s),yo(e,i),n=Gg(t,e,n,r,s,i),r=Kg(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Or(t,e,i)):(Le&&r&&Lg(e),e.flags|=1,Wt(t,e,n,i),e.child)}function Bw(t,e,n,r,i){if(tn(n)){var s=!0;ah(e)}else s=!1;if(yo(e,i),e.stateNode===null)Mc(t,e),lS(e,n,r),lm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Sn(c):(c=tn(n)?hs:Ut.current,c=Ro(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Lw(e,o,r,c),Zr=!1;var p=e.memoizedState;o.state=p,dh(e,r,o,i),u=e.memoizedState,a!==r||p!==u||en.current||Zr?(typeof h=="function"&&(am(e,n,h,r),u=e.memoizedState),(a=Zr||Ow(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,BI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:bn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Sn(u):(u=tn(n)?hs:Ut.current,u=Ro(e,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&Lw(e,o,r,u),Zr=!1,p=e.memoizedState,o.state=p,dh(e,r,o,i);var E=e.memoizedState;a!==f||p!==E||en.current||Zr?(typeof y=="function"&&(am(e,n,y,r),E=e.memoizedState),(c=Zr||Ow(e,n,c,r,p,E,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return hm(t,e,n,r,s,i)}function hm(t,e,n,r,i,s){fS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&kw(e,n,!1),Or(t,e,s);r=e.stateNode,qP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xo(e,t.child,null,s),e.child=xo(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=r.state,i&&kw(e,n,!0),e.child}function pS(t){var e=t.stateNode;e.pendingContext?Cw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cw(t,e.context,!1),Wg(t,e.containerInfo)}function zw(t,e,n,r,i){return Ao(),Vg(i),e.flags|=256,Wt(t,e,n,r),e.child}var dm={dehydrated:null,treeContext:null,retryLane:0};function fm(t){return{baseLanes:t,cachePool:null,transitions:null}}function mS(t,e,n){var r=e.pendingProps,i=Ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ae(Ve,i&1),t===null)return sm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pd(o,r,0,null),t=ls(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fm(n),e.memoizedState=dm,t):Xg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return GP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_i(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_i(a,s):(s=ls(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dm,r}return s=t.child,t=s.sibling,r=_i(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xg(t,e){return e=pd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fc(t,e,n,r){return r!==null&&Vg(r),xo(e,t.child,null,n),t=Xg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tp(Error(U(422))),fc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pd({mode:"visible",children:r.children},i,0,null),s=ls(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xo(e,t.child,null,o),e.child.memoizedState=fm(o),e.memoizedState=dm,s);if(!(e.mode&1))return fc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=tp(s,r,void 0),fc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Jt||a){if(r=yt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dr(t,i),jn(r,t,i,-1))}return r_(),r=tp(Error(U(421))),fc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=oN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,cn=fi(i.nextSibling),dn=e,Le=!0,On=null,t!==null&&(vn[wn++]=vr,vn[wn++]=wr,vn[wn++]=ds,vr=t.id,wr=t.overflow,ds=e),e=Xg(e,r.children),e.flags|=4096,e)}function Ww(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),om(t.return,e,n)}function np(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Wt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ww(t,n,e);else if(t.tag===19)Ww(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ae(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&fh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),np(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&fh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}np(e,!0,n,null,s);break;case"together":np(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=_i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KP(t,e,n){switch(e.tag){case 3:pS(e),Ao();break;case 5:zI(e);break;case 1:tn(e.type)&&ah(e);break;case 4:Wg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ae(ch,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?mS(t,e,n):(Ae(Ve,Ve.current&1),t=Or(t,e,n),t!==null?t.sibling:null);Ae(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,dS(t,e,n)}return Or(t,e,n)}var _S,pm,yS,vS;_S=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pm=function(){};yS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,es(Zn.current);var s=null;switch(n){case"input":i=Mp(t,i),r=Mp(t,r),s=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),s=[];break;case"textarea":i=jp(t,i),r=jp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sh)}Bp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(El.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(El.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Pe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};vS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ma(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function QP(t,e,n){var r=e.pendingProps;switch(Mg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return tn(e.type)&&oh(),Lt(e),null;case 3:return r=e.stateNode,Po(),be(en),be(Ut),Hg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(hc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(Tm(On),On=null))),pm(t,e),Lt(e),null;case 5:$g(e);var i=es(Dl.current);if(n=e.type,t!==null&&e.stateNode!=null)yS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Lt(e),null}if(t=es(Zn.current),hc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yn]=e,r[Nl]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<Ka.length;i++)Pe(Ka[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Jv(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":ew(r,s),Pe("invalid",r)}Bp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&cc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cc(r.textContent,a,t),i=["children",""+a]):El.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":nc(r),Zv(r,s,!0);break;case"textarea":nc(r),tw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=sh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=GT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yn]=e,t[Nl]=r,_S(t,e,!1,!1),e.stateNode=t;e:{switch(o=zp(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ka.length;i++)Pe(Ka[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":Jv(t,r),i=Mp(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":ew(t,r),i=jp(t,r),Pe("invalid",t);break;default:i=r}Bp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?YT(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&KT(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Tl(t,u):typeof u=="number"&&Tl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(El.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Pe("scroll",t):u!=null&&Eg(t,s,u,o))}switch(n){case"input":nc(t),Zv(t,r,!1);break;case"textarea":nc(t),tw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ti(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?po(t,!!r.multiple,s,!1):r.defaultValue!=null&&po(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=sh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Lt(e),null;case 6:if(t&&e.stateNode!=null)vS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=es(Dl.current),es(Zn.current),hc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(s=r.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:cc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return Lt(e),null;case 13:if(be(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&cn!==null&&e.mode&1&&!(e.flags&128))VI(),Ao(),e.flags|=98560,s=!1;else if(s=hc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Yn]=e}else Ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Lt(e),s=!1}else On!==null&&(Tm(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?ut===0&&(ut=3):r_())),e.updateQueue!==null&&(e.flags|=4),Lt(e),null);case 4:return Po(),pm(t,e),t===null&&xl(e.stateNode.containerInfo),Lt(e),null;case 10:return Ug(e.type._context),Lt(e),null;case 17:return tn(e.type)&&oh(),Lt(e),null;case 19:if(be(Ve),s=e.memoizedState,s===null)return Lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ma(s,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fh(t),o!==null){for(e.flags|=128,Ma(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ae(Ve,Ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Qe()>bo&&(e.flags|=128,r=!0,Ma(s,!1),e.lanes=4194304)}else{if(!r)if(t=fh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ma(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return Lt(e),null}else 2*Qe()-s.renderingStartTime>bo&&n!==1073741824&&(e.flags|=128,r=!0,Ma(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,n=Ve.current,Ae(Ve,r?n&1|2:n&1),e):(Lt(e),null);case 22:case 23:return n_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?un&1073741824&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function YP(t,e){switch(Mg(e),e.tag){case 1:return tn(e.type)&&oh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Po(),be(en),be(Ut),Hg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $g(e),null;case 13:if(be(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(Ve),null;case 4:return Po(),null;case 10:return Ug(e.type._context),null;case 22:case 23:return n_(),null;case 24:return null;default:return null}}var pc=!1,Ft=!1,XP=typeof WeakSet=="function"?WeakSet:Set,H=null;function uo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function mm(t,e,n){try{n()}catch(r){qe(t,e,r)}}var $w=!1;function JP(t,e){if(Jp=nh,t=SI(),Og(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(u=o),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zp={focusedElem:t,selectionRange:n},nh=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var A=E.memoizedProps,N=E.memoizedState,S=e.stateNode,T=S.getSnapshotBeforeUpdate(e.elementType===e.type?A:bn(e.type,A),N);S.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){qe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return E=$w,$w=!1,E}function ol(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mm(e,n,s)}i=i.next}while(i!==r)}}function dd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wS(t){var e=t.alternate;e!==null&&(t.alternate=null,wS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Nl],delete e[nm],delete e[OP],delete e[LP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ES(t){return t.tag===5||t.tag===3||t.tag===4}function Hw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ES(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _m(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sh));else if(r!==4&&(t=t.child,t!==null))for(_m(t,e,n),t=t.sibling;t!==null;)_m(t,e,n),t=t.sibling}function ym(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ym(t,e,n),t=t.sibling;t!==null;)ym(t,e,n),t=t.sibling}var St=null,Dn=!1;function Yr(t,e,n){for(n=n.child;n!==null;)TS(t,e,n),n=n.sibling}function TS(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(id,n)}catch{}switch(n.tag){case 5:Ft||uo(n,e);case 6:var r=St,i=Dn;St=null,Yr(t,e,n),St=r,Dn=i,St!==null&&(Dn?(t=St,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):St.removeChild(n.stateNode));break;case 18:St!==null&&(Dn?(t=St,n=n.stateNode,t.nodeType===8?Qf(t.parentNode,n):t.nodeType===1&&Qf(t,n),kl(t)):Qf(St,n.stateNode));break;case 4:r=St,i=Dn,St=n.stateNode.containerInfo,Dn=!0,Yr(t,e,n),St=r,Dn=i;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mm(n,e,o),i=i.next}while(i!==r)}Yr(t,e,n);break;case 1:if(!Ft&&(uo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,e,a)}Yr(t,e,n);break;case 21:Yr(t,e,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,Yr(t,e,n),Ft=r):Yr(t,e,n);break;default:Yr(t,e,n)}}function qw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XP),e.forEach(function(r){var i=aN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:St=a.stateNode,Dn=!1;break e;case 3:St=a.stateNode.containerInfo,Dn=!0;break e;case 4:St=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(St===null)throw Error(U(160));TS(s,o,i),St=null,Dn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)IS(e,t),e=e.sibling}function IS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Kn(t),r&4){try{ol(3,t,t.return),dd(3,t)}catch(A){qe(t,t.return,A)}try{ol(5,t,t.return)}catch(A){qe(t,t.return,A)}}break;case 1:Pn(e,t),Kn(t),r&512&&n!==null&&uo(n,n.return);break;case 5:if(Pn(e,t),Kn(t),r&512&&n!==null&&uo(n,n.return),t.flags&32){var i=t.stateNode;try{Tl(i,"")}catch(A){qe(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&HT(i,s),zp(a,o);var c=zp(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?YT(i,f):h==="dangerouslySetInnerHTML"?KT(i,f):h==="children"?Tl(i,f):Eg(i,h,f,c)}switch(a){case"input":Vp(i,s);break;case"textarea":qT(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?po(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?po(i,!!s.multiple,s.defaultValue,!0):po(i,!!s.multiple,s.multiple?[]:"",!1))}i[Nl]=s}catch(A){qe(t,t.return,A)}}break;case 6:if(Pn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){qe(t,t.return,A)}}break;case 3:if(Pn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kl(e.containerInfo)}catch(A){qe(t,t.return,A)}break;case 4:Pn(e,t),Kn(t);break;case 13:Pn(e,t),Kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(e_=Qe())),r&4&&qw(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(c=Ft)||h,Pn(e,t),Ft=c):Pn(e,t),Kn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(H=t,h=t.child;h!==null;){for(f=H=h;H!==null;){switch(p=H,y=p.child,p.tag){case 0:case 11:case 14:case 15:ol(4,p,p.return);break;case 1:uo(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(A){qe(r,n,A)}}break;case 5:uo(p,p.return);break;case 22:if(p.memoizedState!==null){Kw(f);continue}}y!==null?(y.return=p,H=y):Kw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=QT("display",o))}catch(A){qe(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){qe(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pn(e,t),Kn(t),r&4&&qw(t);break;case 21:break;default:Pn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ES(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tl(i,""),r.flags&=-33);var s=Hw(t);ym(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hw(t);_m(t,a,o);break;default:throw Error(U(161))}}catch(u){qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZP(t,e,n){H=t,SS(t)}function SS(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||pc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ft;a=pc;var c=Ft;if(pc=o,(Ft=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Qw(i):u!==null?(u.return=o,H=u):Qw(i);for(;s!==null;)H=s,SS(s),s=s.sibling;H=i,pc=a,Ft=c}Gw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Gw(t)}}function Gw(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||dd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&kl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ft||e.flags&512&&gm(e)}catch(p){qe(e,e.return,p)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Kw(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Qw(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dd(4,e)}catch(u){qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){qe(e,i,u)}}var s=e.return;try{gm(e)}catch(u){qe(e,s,u)}break;case 5:var o=e.return;try{gm(e)}catch(u){qe(e,o,u)}}}catch(u){qe(e,e.return,u)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var eN=Math.ceil,gh=zr.ReactCurrentDispatcher,Jg=zr.ReactCurrentOwner,In=zr.ReactCurrentBatchConfig,pe=0,yt=null,Je=null,kt=0,un=0,co=Di(0),ut=0,Vl=null,ps=0,fd=0,Zg=0,al=null,Yt=null,e_=0,bo=1/0,mr=null,_h=!1,vm=null,mi=null,mc=!1,oi=null,yh=0,ll=0,wm=null,Vc=-1,Fc=0;function Ht(){return pe&6?Qe():Vc!==-1?Vc:Vc=Qe()}function gi(t){return t.mode&1?pe&2&&kt!==0?kt&-kt:VP.transition!==null?(Fc===0&&(Fc=lI()),Fc):(t=ve,t!==0||(t=window.event,t=t===void 0?16:mI(t.type)),t):1}function jn(t,e,n,r){if(50<ll)throw ll=0,wm=null,Error(U(185));lu(t,n,r),(!(pe&2)||t!==yt)&&(t===yt&&(!(pe&2)&&(fd|=n),ut===4&&ti(t,kt)),nn(t,r),n===1&&pe===0&&!(e.mode&1)&&(bo=Qe()+500,ud&&Oi()))}function nn(t,e){var n=t.callbackNode;V1(t,e);var r=th(t,t===yt?kt:0);if(r===0)n!==null&&iw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&iw(n),e===1)t.tag===0?MP(Yw.bind(null,t)):OI(Yw.bind(null,t)),bP(function(){!(pe&6)&&Oi()}),n=null;else{switch(uI(r)){case 1:n=kg;break;case 4:n=oI;break;case 16:n=eh;break;case 536870912:n=aI;break;default:n=eh}n=bS(n,CS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function CS(t,e){if(Vc=-1,Fc=0,pe&6)throw Error(U(327));var n=t.callbackNode;if(vo()&&t.callbackNode!==n)return null;var r=th(t,t===yt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vh(t,r);else{e=r;var i=pe;pe|=2;var s=RS();(yt!==t||kt!==e)&&(mr=null,bo=Qe()+500,as(t,e));do try{rN();break}catch(a){kS(t,a)}while(!0);jg(),gh.current=s,pe=i,Je!==null?e=0:(yt=null,kt=0,e=ut)}if(e!==0){if(e===2&&(i=Gp(t),i!==0&&(r=i,e=Em(t,i))),e===1)throw n=Vl,as(t,0),ti(t,r),nn(t,Qe()),n;if(e===6)ti(t,r);else{if(i=t.current.alternate,!(r&30)&&!tN(i)&&(e=vh(t,r),e===2&&(s=Gp(t),s!==0&&(r=s,e=Em(t,s))),e===1))throw n=Vl,as(t,0),ti(t,r),nn(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Ki(t,Yt,mr);break;case 3:if(ti(t,r),(r&130023424)===r&&(e=e_+500-Qe(),10<e)){if(th(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tm(Ki.bind(null,t,Yt,mr),e);break}Ki(t,Yt,mr);break;case 4:if(ti(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eN(r/1960))-r,10<r){t.timeoutHandle=tm(Ki.bind(null,t,Yt,mr),r);break}Ki(t,Yt,mr);break;case 5:Ki(t,Yt,mr);break;default:throw Error(U(329))}}}return nn(t,Qe()),t.callbackNode===n?CS.bind(null,t):null}function Em(t,e){var n=al;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=vh(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&Tm(e)),t}function Tm(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function tN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ti(t,e){for(e&=~Zg,e&=~fd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),r=1<<n;t[n]=-1,e&=~r}}function Yw(t){if(pe&6)throw Error(U(327));vo();var e=th(t,0);if(!(e&1))return nn(t,Qe()),null;var n=vh(t,e);if(t.tag!==0&&n===2){var r=Gp(t);r!==0&&(e=r,n=Em(t,r))}if(n===1)throw n=Vl,as(t,0),ti(t,e),nn(t,Qe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ki(t,Yt,mr),nn(t,Qe()),null}function t_(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(bo=Qe()+500,ud&&Oi())}}function ms(t){oi!==null&&oi.tag===0&&!(pe&6)&&vo();var e=pe;pe|=1;var n=In.transition,r=ve;try{if(In.transition=null,ve=1,t)return t()}finally{ve=r,In.transition=n,pe=e,!(pe&6)&&Oi()}}function n_(){un=co.current,be(co)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NP(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(Mg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oh();break;case 3:Po(),be(en),be(Ut),Hg();break;case 5:$g(r);break;case 4:Po();break;case 13:be(Ve);break;case 19:be(Ve);break;case 10:Ug(r.type._context);break;case 22:case 23:n_()}n=n.return}if(yt=t,Je=t=_i(t.current,null),kt=un=e,ut=0,Vl=null,Zg=fd=ps=0,Yt=al=null,Zi!==null){for(e=0;e<Zi.length;e++)if(n=Zi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zi=null}return t}function kS(t,e){do{var n=Je;try{if(jg(),Oc.current=mh,ph){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ph=!1}if(fs=0,pt=at=Ue=null,sl=!1,Ol=0,Jg.current=null,n===null||n.return===null){ut=1,Vl=e,Je=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=kt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Vw(o);if(y!==null){y.flags&=-257,Fw(y,o,a,s,e),y.mode&1&&Mw(s,c,e),e=y,u=c;var E=e.updateQueue;if(E===null){var A=new Set;A.add(u),e.updateQueue=A}else E.add(u);break e}else{if(!(e&1)){Mw(s,c,e),r_();break e}u=Error(U(426))}}else if(Le&&a.mode&1){var N=Vw(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Fw(N,o,a,s,e),Vg(No(u,a));break e}}s=u=No(u,a),ut!==4&&(ut=2),al===null?al=[s]:al.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=uS(s,u,e);Pw(s,S);break e;case 1:a=u;var T=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(mi===null||!mi.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=cS(s,a,e);Pw(s,D);break e}}s=s.return}while(s!==null)}xS(n)}catch(F){e=F,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function RS(){var t=gh.current;return gh.current=mh,t===null?mh:t}function r_(){(ut===0||ut===3||ut===2)&&(ut=4),yt===null||!(ps&268435455)&&!(fd&268435455)||ti(yt,kt)}function vh(t,e){var n=pe;pe|=2;var r=RS();(yt!==t||kt!==e)&&(mr=null,as(t,e));do try{nN();break}catch(i){kS(t,i)}while(!0);if(jg(),pe=n,gh.current=r,Je!==null)throw Error(U(261));return yt=null,kt=0,ut}function nN(){for(;Je!==null;)AS(Je)}function rN(){for(;Je!==null&&!A1();)AS(Je)}function AS(t){var e=NS(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?xS(t):Je=e,Jg.current=null}function xS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YP(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,Je=null;return}}else if(n=QP(n,e,un),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);ut===0&&(ut=5)}function Ki(t,e,n){var r=ve,i=In.transition;try{In.transition=null,ve=1,iN(t,e,n,r)}finally{In.transition=i,ve=r}return null}function iN(t,e,n,r){do vo();while(oi!==null);if(pe&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(F1(t,s),t===yt&&(Je=yt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mc||(mc=!0,bS(eh,function(){return vo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=ve;ve=1;var a=pe;pe|=4,Jg.current=null,JP(t,n),IS(n,t),SP(Zp),nh=!!Jp,Zp=Jp=null,t.current=n,ZP(n),x1(),pe=a,ve=o,In.transition=s}else t.current=n;if(mc&&(mc=!1,oi=t,yh=i),s=t.pendingLanes,s===0&&(mi=null),b1(n.stateNode),nn(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_h)throw _h=!1,t=vm,vm=null,t;return yh&1&&t.tag!==0&&vo(),s=t.pendingLanes,s&1?t===wm?ll++:(ll=0,wm=t):ll=0,Oi(),null}function vo(){if(oi!==null){var t=uI(yh),e=In.transition,n=ve;try{if(In.transition=null,ve=16>t?16:t,oi===null)var r=!1;else{if(t=oi,oi=null,yh=0,pe&6)throw Error(U(331));var i=pe;for(pe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(H=c;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:ol(8,h,s)}var f=h.child;if(f!==null)f.return=h,H=f;else for(;H!==null;){h=H;var p=h.sibling,y=h.return;if(wS(h),h===c){H=null;break}if(p!==null){p.return=y,H=p;break}H=y}}}var E=s.alternate;if(E!==null){var A=E.child;if(A!==null){E.child=null;do{var N=A.sibling;A.sibling=null,A=N}while(A!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ol(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,H=S;break e}H=s.return}}var T=t.current;for(H=T;H!==null;){o=H;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,H=I;else e:for(o=T;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dd(9,a)}}catch(F){qe(a,a.return,F)}if(a===o){H=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,H=D;break e}H=a.return}}if(pe=i,Oi(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(id,t)}catch{}r=!0}return r}finally{ve=n,In.transition=e}}return!1}function Xw(t,e,n){e=No(n,e),e=uS(t,e,1),t=pi(t,e,1),e=Ht(),t!==null&&(lu(t,1,e),nn(t,e))}function qe(t,e,n){if(t.tag===3)Xw(t,t,n);else for(;e!==null;){if(e.tag===3){Xw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mi===null||!mi.has(r))){t=No(n,t),t=cS(e,t,1),e=pi(e,t,1),t=Ht(),e!==null&&(lu(e,1,t),nn(e,t));break}}e=e.return}}function sN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(kt&n)===n&&(ut===4||ut===3&&(kt&130023424)===kt&&500>Qe()-e_?as(t,0):Zg|=n),nn(t,e)}function PS(t,e){e===0&&(t.mode&1?(e=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):e=1);var n=Ht();t=Dr(t,e),t!==null&&(lu(t,e,n),nn(t,n))}function oN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),PS(t,n)}function aN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),PS(t,n)}var NS;NS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,KP(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,Le&&e.flags&1048576&&LI(e,uh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Mc(t,e),t=e.pendingProps;var i=Ro(e,Ut.current);yo(e,n),i=Gg(null,e,r,t,i,n);var s=Kg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(r)?(s=!0,ah(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zg(e),i.updater=hd,e.stateNode=i,i._reactInternals=e,lm(e,r,t,n),e=hm(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&Lg(e),Wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Mc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uN(r),t=bn(r,t),i){case 0:e=cm(null,e,r,t,n);break e;case 1:e=Bw(null,e,r,t,n);break e;case 11:e=jw(null,e,r,t,n);break e;case 14:e=Uw(null,e,r,bn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),cm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),Bw(t,e,r,i,n);case 3:e:{if(pS(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,BI(t,e),dh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=No(Error(U(423)),e),e=zw(t,e,r,n,i);break e}else if(r!==i){i=No(Error(U(424)),e),e=zw(t,e,r,n,i);break e}else for(cn=fi(e.stateNode.containerInfo.firstChild),dn=e,Le=!0,On=null,n=jI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ao(),r===i){e=Or(t,e,n);break e}Wt(t,e,r,n)}e=e.child}return e;case 5:return zI(e),t===null&&sm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,em(r,i)?o=null:s!==null&&em(r,s)&&(e.flags|=32),fS(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&sm(e),null;case 13:return mS(t,e,n);case 4:return Wg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xo(e,null,r,n):Wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),jw(t,e,r,i,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ae(ch,r._currentValue),r._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===i.children&&!en.current){e=Or(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Cr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),om(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),om(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yo(e,n),i=Sn(i),r=r(i),e.flags|=1,Wt(t,e,r,n),e.child;case 14:return r=e.type,i=bn(r,e.pendingProps),i=bn(r.type,i),Uw(t,e,r,i,n);case 15:return hS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),Mc(t,e),e.tag=1,tn(r)?(t=!0,ah(e)):t=!1,yo(e,n),lS(e,r,i),lm(e,r,i,n),hm(null,e,r,!0,t,n);case 19:return gS(t,e,n);case 22:return dS(t,e,n)}throw Error(U(156,e.tag))};function bS(t,e){return sI(t,e)}function lN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,r){return new lN(t,e,n,r)}function i_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uN(t){if(typeof t=="function")return i_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ig)return 11;if(t===Sg)return 14}return 2}function _i(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")i_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case eo:return ls(n.children,i,s,e);case Tg:o=8,i|=8;break;case bp:return t=En(12,n,e,i|2),t.elementType=bp,t.lanes=s,t;case Dp:return t=En(13,n,e,i),t.elementType=Dp,t.lanes=s,t;case Op:return t=En(19,n,e,i),t.elementType=Op,t.lanes=s,t;case zT:return pd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case UT:o=10;break e;case BT:o=9;break e;case Ig:o=11;break e;case Sg:o=14;break e;case Jr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=En(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ls(t,e,n,r){return t=En(7,t,r,e),t.lanes=n,t}function pd(t,e,n,r){return t=En(22,t,r,e),t.elementType=zT,t.lanes=n,t.stateNode={isHidden:!1},t}function rp(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function ip(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ff(0),this.expirationTimes=Ff(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ff(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function s_(t,e,n,r,i,s,o,a,u){return t=new cN(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zg(s),t}function hN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function DS(t){if(!t)return Ii;t=t._reactInternals;e:{if(Ns(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(tn(n))return DI(t,n,e)}return e}function OS(t,e,n,r,i,s,o,a,u){return t=s_(n,r,!0,t,i,s,o,a,u),t.context=DS(null),n=t.current,r=Ht(),i=gi(n),s=Cr(r,i),s.callback=e??null,pi(n,s,i),t.current.lanes=i,lu(t,i,r),nn(t,r),t}function md(t,e,n,r){var i=e.current,s=Ht(),o=gi(i);return n=DS(n),e.context===null?e.context=n:e.pendingContext=n,e=Cr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pi(i,e,o),t!==null&&(jn(t,i,o,s),Dc(t,i,o)),o}function wh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function o_(t,e){Jw(t,e),(t=t.alternate)&&Jw(t,e)}function dN(){return null}var LS=typeof reportError=="function"?reportError:function(t){console.error(t)};function a_(t){this._internalRoot=t}gd.prototype.render=a_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));md(t,e,null,null)};gd.prototype.unmount=a_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){md(null,t,null,null)}),e[br]=null}};function gd(t){this._internalRoot=t}gd.prototype.unstable_scheduleHydration=function(t){if(t){var e=dI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ei.length&&e!==0&&e<ei[n].priority;n++);ei.splice(n,0,t),n===0&&pI(t)}};function l_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zw(){}function fN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=wh(o);s.call(c)}}var o=OS(e,r,t,0,null,!1,!1,"",Zw);return t._reactRootContainer=o,t[br]=o.current,xl(t.nodeType===8?t.parentNode:t),ms(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=wh(u);a.call(c)}}var u=s_(t,0,!1,null,null,!1,!1,"",Zw);return t._reactRootContainer=u,t[br]=u.current,xl(t.nodeType===8?t.parentNode:t),ms(function(){md(e,u,n,r)}),u}function yd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=wh(o);a.call(u)}}md(e,o,t,i)}else o=fN(n,e,t,i,r);return wh(o)}cI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ga(e.pendingLanes);n!==0&&(Rg(e,n|1),nn(e,Qe()),!(pe&6)&&(bo=Qe()+500,Oi()))}break;case 13:ms(function(){var r=Dr(t,1);if(r!==null){var i=Ht();jn(r,t,1,i)}}),o_(t,1)}};Ag=function(t){if(t.tag===13){var e=Dr(t,134217728);if(e!==null){var n=Ht();jn(e,t,134217728,n)}o_(t,134217728)}};hI=function(t){if(t.tag===13){var e=gi(t),n=Dr(t,e);if(n!==null){var r=Ht();jn(n,t,e,r)}o_(t,e)}};dI=function(){return ve};fI=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};$p=function(t,e,n){switch(e){case"input":if(Vp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ld(r);if(!i)throw Error(U(90));$T(r),Vp(r,i)}}}break;case"textarea":qT(t,n);break;case"select":e=n.value,e!=null&&po(t,!!n.multiple,e,!1)}};ZT=t_;eI=ms;var pN={usingClientEntryPoint:!1,Events:[cu,io,ld,XT,JT,t_]},Va={findFiberByHostInstance:Ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mN={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rI(t),t===null?null:t.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||dN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{id=gc.inject(mN),Jn=gc}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pN;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!l_(e))throw Error(U(200));return hN(t,e,null,n)};mn.createRoot=function(t,e){if(!l_(t))throw Error(U(299));var n=!1,r="",i=LS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=s_(t,1,!1,null,null,n,!1,r,i),t[br]=e.current,xl(t.nodeType===8?t.parentNode:t),new a_(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=rI(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return ms(t)};mn.hydrate=function(t,e,n){if(!_d(e))throw Error(U(200));return yd(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!l_(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=LS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=OS(e,null,t,1,n??null,i,!1,s,o),t[br]=e.current,xl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gd(e)};mn.render=function(t,e,n){if(!_d(e))throw Error(U(200));return yd(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!_d(t))throw Error(U(40));return t._reactRootContainer?(ms(function(){yd(null,null,t,!1,function(){t._reactRootContainer=null,t[br]=null})}),!0):!1};mn.unstable_batchedUpdates=t_;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_d(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return yd(t,e,n,!1,r)};mn.version="18.3.1-next-f1338f8080-20240426";function MS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(MS)}catch(t){console.error(t)}}MS(),MT.exports=mn;var gN=MT.exports,e0=gN;Pp.createRoot=e0.createRoot,Pp.hydrateRoot=e0.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fl.apply(this,arguments)}var ai;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ai||(ai={}));const t0="popstate";function _N(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Im("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:VS(i)}return vN(e,n,null,t)}function nt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function u_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yN(){return Math.random().toString(36).substr(2,8)}function n0(t,e){return{usr:t.state,key:t.key,idx:e}}function Im(t,e,n,r){return n===void 0&&(n=null),Fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?na(e):e,{state:n,key:e&&e.key||r||yN()})}function VS(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function na(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function vN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ai.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Fl({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=ai.Pop;let N=h(),S=N==null?null:N-c;c=N,u&&u({action:a,location:A.location,delta:S})}function p(N,S){a=ai.Push;let T=Im(A.location,N,S);c=h()+1;let I=n0(T,c),D=A.createHref(T);try{o.pushState(I,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}s&&u&&u({action:a,location:A.location,delta:1})}function y(N,S){a=ai.Replace;let T=Im(A.location,N,S);c=h();let I=n0(T,c),D=A.createHref(T);o.replaceState(I,"",D),s&&u&&u({action:a,location:A.location,delta:0})}function E(N){let S=i.location.origin!=="null"?i.location.origin:i.location.href,T=typeof N=="string"?N:VS(N);return T=T.replace(/ $/,"%20"),nt(S,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,S)}let A={get action(){return a},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(t0,f),u=N,()=>{i.removeEventListener(t0,f),u=null}},createHref(N){return e(i,N)},createURL:E,encodeLocation(N){let S=E(N);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:p,replace:y,go(N){return o.go(N)}};return A}var r0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(r0||(r0={}));function wN(t,e,n){return n===void 0&&(n="/"),EN(t,e,n)}function EN(t,e,n,r){let i=typeof e=="string"?na(e):e,s=US(i.pathname||"/",n);if(s==null)return null;let o=FS(t);TN(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=ON(s);a=NN(o[u],c)}return a}function FS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(nt(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=us([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(nt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),FS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:xN(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of jS(s.path))i(s,o,u)}),e}function jS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=jS(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function TN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const IN=/^:[\w-]+$/,SN=3,CN=2,kN=1,RN=10,AN=-2,i0=t=>t==="*";function xN(t,e){let n=t.split("/"),r=n.length;return n.some(i0)&&(r+=AN),e&&(r+=CN),n.filter(i=>!i0(i)).reduce((i,s)=>i+(IN.test(s)?SN:s===""?kN:RN),r)}function PN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function NN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=bN({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:us([s,f.pathname]),pathnameBase:jN(us([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=us([s,f.pathnameBase]))}return o}function bN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=DN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:y}=h;if(p==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const E=a[f];return y&&!E?c[p]=void 0:c[p]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function DN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),u_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ON(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return u_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function US(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const LN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,MN=t=>LN.test(t);function VN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?na(t):t,s;if(n)if(MN(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),u_(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=s0(n.substring(1),"/"):s=s0(n,e)}else s=e;return{pathname:s,search:UN(r),hash:BN(i)}}function s0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function BS(t,e){let n=FN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=na(t):(i=Fl({},t),nt(!i.pathname||!i.pathname.includes("?"),sp("?","pathname","search",i)),nt(!i.pathname||!i.pathname.includes("#"),sp("#","pathname","hash",i)),nt(!i.search||!i.search.includes("#"),sp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=VN(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const us=t=>t.join("/").replace(/\/\/+/g,"/"),jN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),UN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,BN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const WS=["post","put","patch","delete"];new Set(WS);const WN=["get",...WS];new Set(WN);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jl.apply(this,arguments)}const c_=O.createContext(null),$N=O.createContext(null),du=O.createContext(null),vd=O.createContext(null),Li=O.createContext({outlet:null,matches:[],isDataRoute:!1}),$S=O.createContext(null);function fu(){return O.useContext(vd)!=null}function wd(){return fu()||nt(!1),O.useContext(vd).location}function HS(t){O.useContext(du).static||O.useLayoutEffect(t)}function sr(){let{isDataRoute:t}=O.useContext(Li);return t?rb():HN()}function HN(){fu()||nt(!1);let t=O.useContext(c_),{basename:e,future:n,navigator:r}=O.useContext(du),{matches:i}=O.useContext(Li),{pathname:s}=wd(),o=JSON.stringify(BS(i,n.v7_relativeSplatPath)),a=O.useRef(!1);return HS(()=>{a.current=!0}),O.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=zS(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:us([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function qS(){let{matches:t}=O.useContext(Li),e=t[t.length-1];return e?e.params:{}}function qN(t,e){return GN(t,e)}function GN(t,e,n,r){fu()||nt(!1);let{navigator:i}=O.useContext(du),{matches:s}=O.useContext(Li),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=wd(),h;if(e){var f;let N=typeof e=="string"?na(e):e;u==="/"||(f=N.pathname)!=null&&f.startsWith(u)||nt(!1),h=N}else h=c;let p=h.pathname||"/",y=p;if(u!=="/"){let N=u.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(N.length).join("/")}let E=wN(t,{pathname:y}),A=JN(E&&E.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:us([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:us([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&A?O.createElement(vd.Provider,{value:{location:jl({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ai.Pop}},A):A}function KN(){let t=nb(),e=zN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const QN=O.createElement(KN,null);class YN extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Li.Provider,{value:this.props.routeContext},O.createElement($S.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function XN(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(c_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Li.Provider,{value:e},r)}function JN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||nt(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:y}=n,E=f.route.loader&&p[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||E){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,p)=>{let y,E=!1,A=null,N=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||QN,u&&(c<0&&p===0?(ib("route-fallback"),E=!0,N=null):c===p&&(E=!0,N=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,p+1)),T=()=>{let I;return y?I=A:E?I=N:f.route.Component?I=O.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=h,O.createElement(XN,{match:f,routeContext:{outlet:h,matches:S,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?O.createElement(YN,{location:n.location,revalidation:n.revalidation,component:A,error:y,children:T(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):T()},null)}var GS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(GS||{}),KS=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(KS||{});function ZN(t){let e=O.useContext(c_);return e||nt(!1),e}function eb(t){let e=O.useContext($N);return e||nt(!1),e}function tb(t){let e=O.useContext(Li);return e||nt(!1),e}function QS(t){let e=tb(),n=e.matches[e.matches.length-1];return n.route.id||nt(!1),n.route.id}function nb(){var t;let e=O.useContext($S),n=eb(),r=QS();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function rb(){let{router:t}=ZN(GS.UseNavigateStable),e=QS(KS.UseNavigateStable),n=O.useRef(!1);return HS(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,jl({fromRouteId:e},s)))},[t,e])}const o0={};function ib(t,e,n){o0[t]||(o0[t]=!0)}function sb(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function YS(t){let{to:e,replace:n,state:r,relative:i}=t;fu()||nt(!1);let{future:s,static:o}=O.useContext(du),{matches:a}=O.useContext(Li),{pathname:u}=wd(),c=sr(),h=zS(e,BS(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(h);return O.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Nn(t){nt(!1)}function ob(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ai.Pop,navigator:s,static:o=!1,future:a}=t;fu()&&nt(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:jl({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=na(r));let{pathname:h="/",search:f="",hash:p="",state:y=null,key:E="default"}=r,A=O.useMemo(()=>{let N=US(h,u);return N==null?null:{location:{pathname:N,search:f,hash:p,state:y,key:E},navigationType:i}},[u,h,f,p,y,E,i]);return A==null?null:O.createElement(du.Provider,{value:c},O.createElement(vd.Provider,{children:n,value:A}))}function ab(t){let{children:e,location:n}=t;return qN(Sm(e),n)}new Promise(()=>{});function Sm(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,Sm(r.props.children,s));return}r.type!==Nn&&nt(!1),!r.props.index||!r.props.children||nt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Sm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const lb="6";try{window.__reactRouterVersion=lb}catch{}const ub="startTransition",a0=s1[ub];function cb(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=_N({window:i,v5Compat:!0}));let o=s.current,[a,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=O.useCallback(f=>{c&&a0?a0(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.useEffect(()=>sb(r),[r]),O.createElement(ob,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var l0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(l0||(l0={}));var u0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(u0||(u0={}));var c0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw ra(e)},ra=function(t){return new Error("Firebase Database ("+XS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},h_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(p=64)),r.push(n[h],n[f],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(JS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new db;const p=s<<2|a>>4;if(r.push(p),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class db extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZS=function(t){const e=JS(t);return h_.encodeByteArray(e,!0)},Eh=function(t){return ZS(t).replace(/\./g,"")},Th=function(t){try{return h_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t){return eC(void 0,t)}function eC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pb(n)||(t[n]=eC(t[n],e[n]));return t}function pb(t){return t!=="__proto__"}/**
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
 */function mb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gb=()=>mb().__FIREBASE_DEFAULTS__,_b=()=>{if(typeof process>"u"||typeof c0>"u")return;const t=c0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Th(t[1]);return e&&JSON.parse(e)},Ed=()=>{try{return gb()||_b()||yb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tC=t=>{var e,n;return(n=(e=Ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nC=t=>{const e=tC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rC=()=>{var t;return(t=Ed())===null||t===void 0?void 0:t.config},iC=t=>{var e;return(e=Ed())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function sC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Eh(JSON.stringify(n)),Eh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function d_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function vb(){var t;const e=(t=Ed())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Eb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tb(){const t=Bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ib(){return XS.NODE_ADMIN===!0}function Sb(){return!vb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aC(){try{return typeof indexedDB=="object"}catch{return!1}}function lC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Cb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="FirebaseError";class or extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kb,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bs.prototype.create)}}class bs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Rb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new or(i,a,r)}}function Rb(t,e){return t.replace(Ab,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ab=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t){return JSON.parse(t)}function lt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ul(Th(s[0])||""),n=Ul(Th(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},xb=function(t){const e=uC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Pb=function(t){const e=uC(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Do(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ih(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sh(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(h0(s)&&h0(o)){if(!Oo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function h0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const p=(i<<5|i>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function bb(t,e){const n=new Db(t,e);return n.subscribe.bind(n)}class Db{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ob(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=op),i.error===void 0&&(i.error=op),i.complete===void 0&&(i.complete=op);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ob(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function op(){}function Lo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Td=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ye(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fb(e))try{this.getOrInitializeService({instanceIdentifier:Qi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qi){return this.instances.has(e)}getOptions(e=Qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qi){return this.component?this.component.multipleInstances?e:Qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vb(t){return t===Qi?void 0:t}function Fb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Ub={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Bb=he.INFO,zb={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Wb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Id{constructor(e){this.name=e,this._logLevel=Bb,this._logHandler=Wb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ub[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const $b=(t,e)=>e.some(n=>t instanceof n);let d0,f0;function Hb(){return d0||(d0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qb(){return f0||(f0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cC=new WeakMap,Cm=new WeakMap,hC=new WeakMap,ap=new WeakMap,f_=new WeakMap;function Gb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cC.set(n,t)}).catch(()=>{}),f_.set(e,t),e}function Kb(t){if(Cm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Cm.set(t,e)}let km={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qb(t){km=t(km)}function Yb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lp(this),e,...n);return hC.set(r,e.sort?e.sort():[e]),kr(r)}:qb().includes(t)?function(...e){return t.apply(lp(this),e),kr(cC.get(this))}:function(...e){return kr(t.apply(lp(this),e))}}function Xb(t){return typeof t=="function"?Yb(t):(t instanceof IDBTransaction&&Kb(t),$b(t,Hb())?new Proxy(t,km):t)}function kr(t){if(t instanceof IDBRequest)return Gb(t);if(ap.has(t))return ap.get(t);const e=Xb(t);return e!==t&&(ap.set(t,e),f_.set(e,t)),e}const lp=t=>f_.get(t);function Sd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(kr(o.result),u.oldVersion,u.newVersion,kr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function up(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),kr(n).then(()=>{})}const Jb=["get","getKey","getAll","getAllKeys","count"],Zb=["put","add","delete","clear"],cp=new Map;function p0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cp.get(e))return cp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Zb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jb.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return cp.set(e,s),s}Qb(t=>({...t,get:(e,n,r)=>p0(e,n)||t.get(e,n,r),has:(e,n)=>!!p0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function t2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rm="@firebase/app",m0="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Id("@firebase/app"),n2="@firebase/app-compat",r2="@firebase/analytics-compat",i2="@firebase/analytics",s2="@firebase/app-check-compat",o2="@firebase/app-check",a2="@firebase/auth",l2="@firebase/auth-compat",u2="@firebase/database",c2="@firebase/data-connect",h2="@firebase/database-compat",d2="@firebase/functions",f2="@firebase/functions-compat",p2="@firebase/installations",m2="@firebase/installations-compat",g2="@firebase/messaging",_2="@firebase/messaging-compat",y2="@firebase/performance",v2="@firebase/performance-compat",w2="@firebase/remote-config",E2="@firebase/remote-config-compat",T2="@firebase/storage",I2="@firebase/storage-compat",S2="@firebase/firestore",C2="@firebase/vertexai-preview",k2="@firebase/firestore-compat",R2="firebase",A2="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="[DEFAULT]",x2={[Rm]:"fire-core",[n2]:"fire-core-compat",[i2]:"fire-analytics",[r2]:"fire-analytics-compat",[o2]:"fire-app-check",[s2]:"fire-app-check-compat",[a2]:"fire-auth",[l2]:"fire-auth-compat",[u2]:"fire-rtdb",[c2]:"fire-data-connect",[h2]:"fire-rtdb-compat",[d2]:"fire-fn",[f2]:"fire-fn-compat",[p2]:"fire-iid",[m2]:"fire-iid-compat",[g2]:"fire-fcm",[_2]:"fire-fcm-compat",[y2]:"fire-perf",[v2]:"fire-perf-compat",[w2]:"fire-rc",[E2]:"fire-rc-compat",[T2]:"fire-gcs",[I2]:"fire-gcs-compat",[S2]:"fire-fst",[k2]:"fire-fst-compat",[C2]:"fire-vertex","fire-js":"fire-js",[R2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Map,P2=new Map,xm=new Map;function g0(t,e){try{t.container.addComponent(e)}catch(n){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(xm.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;xm.set(e,t);for(const n of Ch.values())g0(n,t);for(const n of P2.values())g0(n,t);return!0}function Ds(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new bs("app","Firebase",N2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=A2;function dC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Am,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yi.create("bad-app-name",{appName:String(i)});if(n||(n=rC()),!n)throw yi.create("no-options");const s=Ch.get(i);if(s){if(Oo(n,s.options)&&Oo(r,s.config))return s;throw yi.create("duplicate-app",{appName:i})}const o=new jb(i);for(const u of xm.values())o.addComponent(u);const a=new b2(n,r,o);return Ch.set(i,a),a}function Cd(t=Am){const e=Ch.get(t);if(!e&&t===Am&&rC())return dC();if(!e)throw yi.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let i=(r=x2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(a.join(" "));return}$n(new kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const D2="firebase-heartbeat-database",O2=1,Bl="firebase-heartbeat-store";let hp=null;function fC(){return hp||(hp=Sd(D2,O2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bl)}catch(n){console.warn(n)}}}}).catch(t=>{throw yi.create("idb-open",{originalErrorMessage:t.message})})),hp}async function L2(t){try{const n=(await fC()).transaction(Bl),r=await n.objectStore(Bl).get(pC(t));return await n.done,r}catch(e){if(e instanceof or)Lr.warn(e.message);else{const n=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(n.message)}}}async function _0(t,e){try{const r=(await fC()).transaction(Bl,"readwrite");await r.objectStore(Bl).put(e,pC(t)),await r.done}catch(n){if(n instanceof or)Lr.warn(n.message);else{const r=yi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lr.warn(r.message)}}}function pC(t){return`${t.name}!${t.options.appId}`}/**
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
 */const M2=1024,V2=30*24*60*60*1e3;class F2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new U2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=y0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=V2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=y0(),{heartbeatsToSend:r,unsentEntries:i}=j2(this._heartbeatsCache.heartbeats),s=Eh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Lr.warn(n),""}}}function y0(){return new Date().toISOString().substring(0,10)}function j2(t,e=M2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),v0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),v0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class U2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aC()?lC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await L2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function v0(t){return Eh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(t){$n(new kn("platform-logger",e=>new e2(e),"PRIVATE")),$n(new kn("heartbeat",e=>new F2(e),"PRIVATE")),rn(Rm,m0,t),rn(Rm,m0,"esm2017"),rn("fire-js","")}B2("");function p_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function mC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const z2=mC,gC=new bs("auth","Firebase",mC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new Id("@firebase/auth");function W2(t,...e){kh.logLevel<=he.WARN&&kh.warn(`Auth (${Os}): ${t}`,...e)}function Uc(t,...e){kh.logLevel<=he.ERROR&&kh.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,...e){throw g_(t,...e)}function Un(t,...e){return g_(t,...e)}function m_(t,e,n){const r=Object.assign(Object.assign({},z2()),{[e]:n});return new bs("auth","Firebase",r).create(e,{appName:t.name})}function Rr(t){return m_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rn(t,"argument-error"),m_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function g_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gC.create(t,...e)}function te(t,e,...n){if(!t)throw g_(e,...n)}function Er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uc(e),new Error(e)}function Mr(t,e){t||Er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function H2(){return w0()==="http:"||w0()==="https:"}function w0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H2()||Eb()||"connection"in navigator)?navigator.onLine:!0}function G2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mr(n>e,"Short delay should be less than long delay!"),this.isMobile=d_()||oC()}get(){return q2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t,e){Mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=new pu(3e4,6e4);function Mi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wr(t,e,n,r,i={}){return yC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ia(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return wb()||(c.referrerPolicy="no-referrer"),_C.fetch()(vC(t,t.config.apiHost,n,a),c)})}async function yC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},K2),e);try{const i=new X2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _c(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _c(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw _c(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw _c(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw m_(t,h,c);Rn(t,h)}}catch(i){if(i instanceof or)throw i;Rn(t,"network-request-failed",{message:String(i)})}}async function mu(t,e,n,r,i={}){const s=await Wr(t,e,n,r,i);return"mfaPendingCredential"in s&&Rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function vC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?__(t.config,i):`${t.config.apiScheme}://${i}`}function Y2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class X2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Un(this.auth,"network-request-failed")),Q2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _c(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Un(t,e,r);return i.customData._tokenResponse=n,i}function E0(t){return t!==void 0&&t.enterprise!==void 0}class J2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Y2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Z2(t,e){return Wr(t,"GET","/v2/recaptchaConfig",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(t,e){return Wr(t,"POST","/v1/accounts:delete",e)}async function wC(t,e){return Wr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tD(t,e=!1){const n=ye(t),r=await n.getIdToken(e),i=y_(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ul(dp(i.auth_time)),issuedAtTime:ul(dp(i.iat)),expirationTime:ul(dp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dp(t){return Number(t)*1e3}function y_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Th(n);return i?JSON.parse(i):(Uc("Failed to decode base64 JWT payload"),null)}catch(i){return Uc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function T0(t){const e=y_(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof or&&nD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ul(this.lastLoginAt),this.creationTime=ul(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mo(t,wC(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?EC(s.providerUserInfo):[],a=sD(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function iD(t){const e=ye(t);await Rh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function EC(t){return t.map(e=>{var{providerId:n}=e,r=p_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD(t,e){const n=await yC(t,{},async()=>{const r=ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=vC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_C.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aD(t,e){return Wr(t,"POST","/v2/accounts:revokeToken",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):T0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=T0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await oD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new wo;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=p_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tD(this,e)}reload(){return iD(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Rh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(Rr(this.auth));const e=await this.getIdToken();return await Mo(this,eD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:D,isAnonymous:F,providerData:j,stsTokenManager:k}=n;te(I&&k,e,"internal-error");const v=wo.fromJSON(this.name,k);te(typeof I=="string",e,"internal-error"),Xr(f,e.name),Xr(p,e.name),te(typeof D=="boolean",e,"internal-error"),te(typeof F=="boolean",e,"internal-error"),Xr(y,e.name),Xr(E,e.name),Xr(A,e.name),Xr(N,e.name),Xr(S,e.name),Xr(T,e.name);const C=new Tr({uid:I,auth:e,email:p,emailVerified:D,displayName:f,isAnonymous:F,photoURL:E,phoneNumber:y,tenantId:A,stsTokenManager:v,createdAt:S,lastLoginAt:T});return j&&Array.isArray(j)&&(C.providerData=j.map(w=>Object.assign({},w))),N&&(C._redirectEventId=N),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new wo;i.updateFromServerResponse(n);const s=new Tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Rh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?EC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new wo;a.updateFromIdToken(r);const u=new Tr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Nm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new Map;function Ir(t){Mr(t instanceof Function,"Expected a class definition");let e=I0.get(t);return e?(Mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,I0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}TC.type="NONE";const S0=TC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t,e,n){return`firebase:${t}:${e}:${n}`}class Eo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Eo(Ir(S0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ir(S0);const o=Bc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Tr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Eo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Eo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(IC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(AC(e))return"Blackberry";if(xC(e))return"Webos";if(SC(e))return"Safari";if((e.includes("chrome/")||CC(e))&&!e.includes("edge/"))return"Chrome";if(RC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function IC(t=Bt()){return/firefox\//i.test(t)}function SC(t=Bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function CC(t=Bt()){return/crios\//i.test(t)}function kC(t=Bt()){return/iemobile/i.test(t)}function RC(t=Bt()){return/android/i.test(t)}function AC(t=Bt()){return/blackberry/i.test(t)}function xC(t=Bt()){return/webos/i.test(t)}function v_(t=Bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lD(t=Bt()){var e;return v_(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uD(){return Tb()&&document.documentMode===10}function PC(t=Bt()){return v_(t)||RC(t)||xC(t)||AC(t)||/windows phone/i.test(t)||kC(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t,e=[]){let n;switch(t){case"Browser":n=C0(Bt());break;case"Worker":n=`${C0(Bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
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
 */class cD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hD(t,e={}){return Wr(t,"GET","/v2/passwordPolicy",Mi(t,e))}/**
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
 */const dD=6;class fD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new k0(this),this.idTokenSubscription=new k0(this),this.beforeStateQueue=new cD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ir(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Eo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wC(this,{idToken:e}),r=await Tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=G2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(Rr(this));const n=e?ye(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(Rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(Rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hD(this),n=new fD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ir(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Eo.create(this,[Ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&W2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vi(t){return ye(t)}class k0{constructor(e){this.auth=e,this.observer=null,this.addObserver=bb(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mD(t){kd=t}function bC(t){return kd.loadJS(t)}function gD(){return kd.recaptchaEnterpriseScript}function _D(){return kd.gapiScript}function yD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vD="recaptcha-enterprise",wD="NO_RECAPTCHA";class ED{constructor(e){this.type=vD,this.auth=Vi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Z2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new J2(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;E0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(wD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&E0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=gD();u.length!==0&&(u+=a),bC(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function R0(t,e,n,r=!1){const i=new ED(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await R0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await R0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t,e){const n=Ds(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Oo(s,e??{}))return i;Rn(i,"already-initialized")}return n.initialize({options:e})}function ID(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function SD(t,e,n){const r=Vi(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=DC(e),{host:o,port:a}=CD(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),kD()}function DC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CD(t){const e=DC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:A0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:A0(o)}}}function A0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,n){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}async function RD(t,e){return Wr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(t,e){return mu(t,"POST","/v1/accounts:signInWithPassword",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xD(t,e){return mu(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}async function PD(t,e){return mu(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends w_{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new zl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bm(e,n,"signInWithPassword",AD);case"emailLink":return xD(e,{email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bm(e,r,"signUpPassword",RD);case"emailLink":return PD(e,{idToken:n,email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t,e){return mu(t,"POST","/v1/accounts:signInWithIdp",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND="http://localhost";class gs extends w_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=p_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return To(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,To(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,To(e,n)}buildRequest(){const e={requestUri:ND,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ia(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function DD(t){const e=Qa(Ya(t)).link,n=e?Qa(Ya(e)).deep_link_id:null,r=Qa(Ya(t)).deep_link_id;return(r?Qa(Ya(r)).link:null)||r||n||e||t}class E_{constructor(e){var n,r,i,s,o,a;const u=Qa(Ya(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=bD((i=u.mode)!==null&&i!==void 0?i:null);te(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=DD(e);try{return new E_(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.providerId=sa.PROVIDER_ID}static credential(e,n){return zl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=E_.parseLink(n);return te(r,"argument-error"),zl._fromEmailAndCode(e,r.code,r.tenantId)}}sa.PROVIDER_ID="password";sa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends T_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends gu{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";ni.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends gu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gs._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends gu{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends gu{constructor(){super("twitter.com")}static credential(e,n){return gs._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ii.credential(n,r)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OD(t,e){return mu(t,"POST","/v1/accounts:signUp",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tr._fromIdTokenResponse(e,r,i),o=x0(r);return new _s({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=x0(r);return new _s({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function x0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends or{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ah.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ah(e,n,r,i)}}function OC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ah._fromErrorAndOperation(t,s,e,r):s})}async function LD(t,e,n=!1){const r=await Mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _s._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MD(t,e,n=!1){const{auth:r}=t;if(Mn(r.app))return Promise.reject(Rr(r));const i="reauthenticate";try{const s=await Mo(t,OC(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=y_(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),_s._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(t,e,n=!1){if(Mn(t.app))return Promise.reject(Rr(t));const r="signIn",i=await OC(t,r,e),s=await _s._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function VD(t,e){return LC(Vi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(t){const e=Vi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FD(t,e,n){if(Mn(t.app))return Promise.reject(Rr(t));const r=Vi(t),o=await bm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OD).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&MC(t),u}),a=await _s._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function jD(t,e,n){return Mn(t.app)?Promise.reject(Rr(t)):VD(ye(t),sa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&MC(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(t,e){return Wr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ye(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Mo(r,UD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function zD(t,e,n,r){return ye(t).onIdTokenChanged(e,n,r)}function WD(t,e,n){return ye(t).beforeAuthStateChanged(e,n)}function $D(t,e,n,r){return ye(t).onAuthStateChanged(e,n,r)}function HD(t){return ye(t).signOut()}const xh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xh,"1"),this.storage.removeItem(xh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=1e3,GD=10;class FC extends VC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=PC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}FC.type="LOCAL";const KD=FC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC extends VC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jC.type="SESSION";const UC=jC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await QD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=I_("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return window}function XD(t){er().location.href=t}/**
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
 */function BC(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function JD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eO(){return BC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="firebaseLocalStorageDb",tO=1,Ph="firebaseLocalStorage",WC="fbase_key";class _u{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ad(t,e){return t.transaction([Ph],e?"readwrite":"readonly").objectStore(Ph)}function nO(){const t=indexedDB.deleteDatabase(zC);return new _u(t).toPromise()}function Dm(){const t=indexedDB.open(zC,tO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ph,{keyPath:WC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ph)?e(r):(r.close(),await nO(),e(await Dm()))})})}async function P0(t,e,n){const r=Ad(t,!0).put({[WC]:e,value:n});return new _u(r).toPromise()}async function rO(t,e){const n=Ad(t,!1).get(e),r=await new _u(n).toPromise();return r===void 0?null:r.value}function N0(t,e){const n=Ad(t,!0).delete(e);return new _u(n).toPromise()}const iO=800,sO=3;class $C{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return BC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rd._getInstance(eO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JD(),!this.activeServiceWorker)return;this.sender=new YD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dm();return await P0(e,xh,"1"),await N0(e,xh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>P0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>N0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ad(i,!1).getAll();return new _u(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$C.type="LOCAL";const oO=$C;new pu(3e4,6e4);/**
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
 */function HC(t,e){return e?Ir(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_ extends w_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return To(e,this._buildIdpRequest())}_linkToIdToken(e,n){return To(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return To(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aO(t){return LC(t.auth,new S_(t),t.bypassAuthState)}function lO(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),MD(n,new S_(t),t.bypassAuthState)}async function uO(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),LD(n,new S_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aO;case"linkViaPopup":case"linkViaRedirect":return uO;case"reauthViaPopup":case"reauthViaRedirect":return lO;default:Rn(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=new pu(2e3,1e4);async function hO(t,e,n){if(Mn(t.app))return Promise.reject(Un(t,"operation-not-supported-in-this-environment"));const r=Vi(t);$2(t,e,T_);const i=HC(r,n);return new ts(r,"signInViaPopup",e,i).executeNotNull()}class ts extends qC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=I_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cO.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO="pendingRedirect",zc=new Map;class fO extends qC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zc.get(this.auth._key());if(!e){try{const r=await pO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zc.set(this.auth._key(),e)}return this.bypassAuthState||zc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pO(t,e){const n=_O(e),r=gO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mO(t,e){zc.set(t._key(),e)}function gO(t){return Ir(t._redirectPersistence)}function _O(t){return Bc(dO,t.config.apiKey,t.name)}async function yO(t,e,n=!1){if(Mn(t.app))return Promise.reject(Rr(t));const r=Vi(t),i=HC(r,e),o=await new fO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=10*60*1e3;class wO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!GC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vO&&this.cachedEventUids.clear(),this.cachedEventUids.has(b0(e))}saveEventToCache(e){this.cachedEventUids.add(b0(e)),this.lastProcessedEventTime=Date.now()}}function b0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function GC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TO(t,e={}){return Wr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SO=/^https?/;async function CO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TO(t);for(const n of e)try{if(kO(n))return}catch{}Rn(t,"unauthorized-domain")}function kO(t){const e=Pm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SO.test(n))return!1;if(IO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RO=new pu(3e4,6e4);function D0(){const t=er().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AO(t){return new Promise((e,n)=>{var r,i,s;function o(){D0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{D0(),n(Un(t,"network-request-failed"))},timeout:RO.get()})}if(!((i=(r=er().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=er().gapi)===null||s===void 0)&&s.load)o();else{const a=yD("iframefcb");return er()[a]=()=>{gapi.load?o():n(Un(t,"network-request-failed"))},bC(`${_D()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Wc=null,e})}let Wc=null;function xO(t){return Wc=Wc||AO(t),Wc}/**
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
 */const PO=new pu(5e3,15e3),NO="__/auth/iframe",bO="emulator/auth/iframe",DO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LO(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?__(e,bO):`https://${t.config.authDomain}/${NO}`,r={apiKey:e.apiKey,appName:t.name,v:Os},i=OO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ia(r).slice(1)}`}async function MO(t){const e=await xO(t),n=er().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:LO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Un(t,"network-request-failed"),a=er().setTimeout(()=>{s(o)},PO.get());function u(){er().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const VO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FO=500,jO=600,UO="_blank",BO="http://localhost";class O0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zO(t,e,n,r=FO,i=jO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},VO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Bt().toLowerCase();n&&(a=CC(c)?UO:n),IC(c)&&(e=e||BO,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[y,E])=>`${p}${y}=${E},`,"");if(lD(c)&&a!=="_self")return WO(e||"",a),new O0(null);const f=window.open(e||"",a,h);te(f,t,"popup-blocked");try{f.focus()}catch{}return new O0(f)}function WO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $O="__/auth/handler",HO="emulator/auth/handler",qO=encodeURIComponent("fac");async function L0(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:i};if(e instanceof T_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ih(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof gu){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${qO}=${encodeURIComponent(u)}`:"";return`${GO(t)}?${ia(a).slice(1)}${c}`}function GO({config:t}){return t.emulator?__(t,HO):`https://${t.authDomain}/${$O}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="webStorageSupport";class KO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=UC,this._completeRedirectFn=yO,this._overrideRedirectResult=mO}async _openPopup(e,n,r,i){var s;Mr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await L0(e,n,r,Pm(),i);return zO(e,o,I_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await L0(e,n,r,Pm(),i);return XD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MO(e),r=new wO(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fp,{type:fp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fp];o!==void 0&&n(!!o),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return PC()||SC()||v_()}}const QO=KO;var M0="@firebase/auth",V0="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JO(t){$n(new kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NC(t)},c=new pD(r,i,s,u);return ID(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new kn("auth-internal",e=>{const n=Vi(e.getProvider("auth").getImmediate());return(r=>new YO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(M0,V0,XO(t)),rn(M0,V0,"esm2017")}/**
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
 */const ZO=5*60,eL=iC("authIdTokenMaxAge")||ZO;let F0=null;const tL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eL)return;const i=n==null?void 0:n.token;F0!==i&&(F0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nL(t=Cd()){const e=Ds(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TD(t,{popupRedirectResolver:QO,persistence:[oO,KD,UC]}),r=iC("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=tL(s.toString());WD(n,o,()=>o(n.currentUser)),zD(n,a=>o(a))}}const i=tC("auth");return i&&SD(n,`http://${i}`),n}function rL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JO("Browser");var iL="firebase",sL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(iL,sL,"app");var j0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs,KC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,v){function C(){}C.prototype=v.prototype,k.D=v.prototype,k.prototype=new C,k.prototype.constructor=k,k.C=function(w,P,x){for(var R=Array(arguments.length-2),st=2;st<arguments.length;st++)R[st-2]=arguments[st];return v.prototype[P].apply(w,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(k,v,C){C||(C=0);var w=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)w[P]=v.charCodeAt(C++)|v.charCodeAt(C++)<<8|v.charCodeAt(C++)<<16|v.charCodeAt(C++)<<24;else for(P=0;16>P;++P)w[P]=v[C++]|v[C++]<<8|v[C++]<<16|v[C++]<<24;v=k.g[0],C=k.g[1],P=k.g[2];var x=k.g[3],R=v+(x^C&(P^x))+w[0]+3614090360&4294967295;v=C+(R<<7&4294967295|R>>>25),R=x+(P^v&(C^P))+w[1]+3905402710&4294967295,x=v+(R<<12&4294967295|R>>>20),R=P+(C^x&(v^C))+w[2]+606105819&4294967295,P=x+(R<<17&4294967295|R>>>15),R=C+(v^P&(x^v))+w[3]+3250441966&4294967295,C=P+(R<<22&4294967295|R>>>10),R=v+(x^C&(P^x))+w[4]+4118548399&4294967295,v=C+(R<<7&4294967295|R>>>25),R=x+(P^v&(C^P))+w[5]+1200080426&4294967295,x=v+(R<<12&4294967295|R>>>20),R=P+(C^x&(v^C))+w[6]+2821735955&4294967295,P=x+(R<<17&4294967295|R>>>15),R=C+(v^P&(x^v))+w[7]+4249261313&4294967295,C=P+(R<<22&4294967295|R>>>10),R=v+(x^C&(P^x))+w[8]+1770035416&4294967295,v=C+(R<<7&4294967295|R>>>25),R=x+(P^v&(C^P))+w[9]+2336552879&4294967295,x=v+(R<<12&4294967295|R>>>20),R=P+(C^x&(v^C))+w[10]+4294925233&4294967295,P=x+(R<<17&4294967295|R>>>15),R=C+(v^P&(x^v))+w[11]+2304563134&4294967295,C=P+(R<<22&4294967295|R>>>10),R=v+(x^C&(P^x))+w[12]+1804603682&4294967295,v=C+(R<<7&4294967295|R>>>25),R=x+(P^v&(C^P))+w[13]+4254626195&4294967295,x=v+(R<<12&4294967295|R>>>20),R=P+(C^x&(v^C))+w[14]+2792965006&4294967295,P=x+(R<<17&4294967295|R>>>15),R=C+(v^P&(x^v))+w[15]+1236535329&4294967295,C=P+(R<<22&4294967295|R>>>10),R=v+(P^x&(C^P))+w[1]+4129170786&4294967295,v=C+(R<<5&4294967295|R>>>27),R=x+(C^P&(v^C))+w[6]+3225465664&4294967295,x=v+(R<<9&4294967295|R>>>23),R=P+(v^C&(x^v))+w[11]+643717713&4294967295,P=x+(R<<14&4294967295|R>>>18),R=C+(x^v&(P^x))+w[0]+3921069994&4294967295,C=P+(R<<20&4294967295|R>>>12),R=v+(P^x&(C^P))+w[5]+3593408605&4294967295,v=C+(R<<5&4294967295|R>>>27),R=x+(C^P&(v^C))+w[10]+38016083&4294967295,x=v+(R<<9&4294967295|R>>>23),R=P+(v^C&(x^v))+w[15]+3634488961&4294967295,P=x+(R<<14&4294967295|R>>>18),R=C+(x^v&(P^x))+w[4]+3889429448&4294967295,C=P+(R<<20&4294967295|R>>>12),R=v+(P^x&(C^P))+w[9]+568446438&4294967295,v=C+(R<<5&4294967295|R>>>27),R=x+(C^P&(v^C))+w[14]+3275163606&4294967295,x=v+(R<<9&4294967295|R>>>23),R=P+(v^C&(x^v))+w[3]+4107603335&4294967295,P=x+(R<<14&4294967295|R>>>18),R=C+(x^v&(P^x))+w[8]+1163531501&4294967295,C=P+(R<<20&4294967295|R>>>12),R=v+(P^x&(C^P))+w[13]+2850285829&4294967295,v=C+(R<<5&4294967295|R>>>27),R=x+(C^P&(v^C))+w[2]+4243563512&4294967295,x=v+(R<<9&4294967295|R>>>23),R=P+(v^C&(x^v))+w[7]+1735328473&4294967295,P=x+(R<<14&4294967295|R>>>18),R=C+(x^v&(P^x))+w[12]+2368359562&4294967295,C=P+(R<<20&4294967295|R>>>12),R=v+(C^P^x)+w[5]+4294588738&4294967295,v=C+(R<<4&4294967295|R>>>28),R=x+(v^C^P)+w[8]+2272392833&4294967295,x=v+(R<<11&4294967295|R>>>21),R=P+(x^v^C)+w[11]+1839030562&4294967295,P=x+(R<<16&4294967295|R>>>16),R=C+(P^x^v)+w[14]+4259657740&4294967295,C=P+(R<<23&4294967295|R>>>9),R=v+(C^P^x)+w[1]+2763975236&4294967295,v=C+(R<<4&4294967295|R>>>28),R=x+(v^C^P)+w[4]+1272893353&4294967295,x=v+(R<<11&4294967295|R>>>21),R=P+(x^v^C)+w[7]+4139469664&4294967295,P=x+(R<<16&4294967295|R>>>16),R=C+(P^x^v)+w[10]+3200236656&4294967295,C=P+(R<<23&4294967295|R>>>9),R=v+(C^P^x)+w[13]+681279174&4294967295,v=C+(R<<4&4294967295|R>>>28),R=x+(v^C^P)+w[0]+3936430074&4294967295,x=v+(R<<11&4294967295|R>>>21),R=P+(x^v^C)+w[3]+3572445317&4294967295,P=x+(R<<16&4294967295|R>>>16),R=C+(P^x^v)+w[6]+76029189&4294967295,C=P+(R<<23&4294967295|R>>>9),R=v+(C^P^x)+w[9]+3654602809&4294967295,v=C+(R<<4&4294967295|R>>>28),R=x+(v^C^P)+w[12]+3873151461&4294967295,x=v+(R<<11&4294967295|R>>>21),R=P+(x^v^C)+w[15]+530742520&4294967295,P=x+(R<<16&4294967295|R>>>16),R=C+(P^x^v)+w[2]+3299628645&4294967295,C=P+(R<<23&4294967295|R>>>9),R=v+(P^(C|~x))+w[0]+4096336452&4294967295,v=C+(R<<6&4294967295|R>>>26),R=x+(C^(v|~P))+w[7]+1126891415&4294967295,x=v+(R<<10&4294967295|R>>>22),R=P+(v^(x|~C))+w[14]+2878612391&4294967295,P=x+(R<<15&4294967295|R>>>17),R=C+(x^(P|~v))+w[5]+4237533241&4294967295,C=P+(R<<21&4294967295|R>>>11),R=v+(P^(C|~x))+w[12]+1700485571&4294967295,v=C+(R<<6&4294967295|R>>>26),R=x+(C^(v|~P))+w[3]+2399980690&4294967295,x=v+(R<<10&4294967295|R>>>22),R=P+(v^(x|~C))+w[10]+4293915773&4294967295,P=x+(R<<15&4294967295|R>>>17),R=C+(x^(P|~v))+w[1]+2240044497&4294967295,C=P+(R<<21&4294967295|R>>>11),R=v+(P^(C|~x))+w[8]+1873313359&4294967295,v=C+(R<<6&4294967295|R>>>26),R=x+(C^(v|~P))+w[15]+4264355552&4294967295,x=v+(R<<10&4294967295|R>>>22),R=P+(v^(x|~C))+w[6]+2734768916&4294967295,P=x+(R<<15&4294967295|R>>>17),R=C+(x^(P|~v))+w[13]+1309151649&4294967295,C=P+(R<<21&4294967295|R>>>11),R=v+(P^(C|~x))+w[4]+4149444226&4294967295,v=C+(R<<6&4294967295|R>>>26),R=x+(C^(v|~P))+w[11]+3174756917&4294967295,x=v+(R<<10&4294967295|R>>>22),R=P+(v^(x|~C))+w[2]+718787259&4294967295,P=x+(R<<15&4294967295|R>>>17),R=C+(x^(P|~v))+w[9]+3951481745&4294967295,k.g[0]=k.g[0]+v&4294967295,k.g[1]=k.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+x&4294967295}r.prototype.u=function(k,v){v===void 0&&(v=k.length);for(var C=v-this.blockSize,w=this.B,P=this.h,x=0;x<v;){if(P==0)for(;x<=C;)i(this,k,x),x+=this.blockSize;if(typeof k=="string"){for(;x<v;)if(w[P++]=k.charCodeAt(x++),P==this.blockSize){i(this,w),P=0;break}}else for(;x<v;)if(w[P++]=k[x++],P==this.blockSize){i(this,w),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var v=1;v<k.length-8;++v)k[v]=0;var C=8*this.o;for(v=k.length-8;v<k.length;++v)k[v]=C&255,C/=256;for(this.u(k),k=Array(16),v=C=0;4>v;++v)for(var w=0;32>w;w+=8)k[C++]=this.g[v]>>>w&255;return k};function s(k,v){var C=a;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=v(k)}function o(k,v){this.h=v;for(var C=[],w=!0,P=k.length-1;0<=P;P--){var x=k[P]|0;w&&x==v||(C[P]=x,w=!1)}this.g=C}var a={};function u(k){return-128<=k&&128>k?s(k,function(v){return new o([v|0],0>v?-1:0)}):new o([k|0],0>k?-1:0)}function c(k){if(isNaN(k)||!isFinite(k))return f;if(0>k)return N(c(-k));for(var v=[],C=1,w=0;k>=C;w++)v[w]=k/C|0,C*=4294967296;return new o(v,0)}function h(k,v){if(k.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k.charAt(0)=="-")return N(h(k.substring(1),v));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(v,8)),w=f,P=0;P<k.length;P+=8){var x=Math.min(8,k.length-P),R=parseInt(k.substring(P,P+x),v);8>x?(x=c(Math.pow(v,x)),w=w.j(x).add(c(R))):(w=w.j(C),w=w.add(c(R)))}return w}var f=u(0),p=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-N(this).m();for(var k=0,v=1,C=0;C<this.g.length;C++){var w=this.i(C);k+=(0<=w?w:4294967296+w)*v,v*=4294967296}return k},t.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(E(this))return"0";if(A(this))return"-"+N(this).toString(k);for(var v=c(Math.pow(k,6)),C=this,w="";;){var P=D(C,v).g;C=S(C,P.j(v));var x=((0<C.g.length?C.g[0]:C.h)>>>0).toString(k);if(C=P,E(C))return x+w;for(;6>x.length;)x="0"+x;w=x+w}},t.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function E(k){if(k.h!=0)return!1;for(var v=0;v<k.g.length;v++)if(k.g[v]!=0)return!1;return!0}function A(k){return k.h==-1}t.l=function(k){return k=S(this,k),A(k)?-1:E(k)?0:1};function N(k){for(var v=k.g.length,C=[],w=0;w<v;w++)C[w]=~k.g[w];return new o(C,~k.h).add(p)}t.abs=function(){return A(this)?N(this):this},t.add=function(k){for(var v=Math.max(this.g.length,k.g.length),C=[],w=0,P=0;P<=v;P++){var x=w+(this.i(P)&65535)+(k.i(P)&65535),R=(x>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);w=R>>>16,x&=65535,R&=65535,C[P]=R<<16|x}return new o(C,C[C.length-1]&-2147483648?-1:0)};function S(k,v){return k.add(N(v))}t.j=function(k){if(E(this)||E(k))return f;if(A(this))return A(k)?N(this).j(N(k)):N(N(this).j(k));if(A(k))return N(this.j(N(k)));if(0>this.l(y)&&0>k.l(y))return c(this.m()*k.m());for(var v=this.g.length+k.g.length,C=[],w=0;w<2*v;w++)C[w]=0;for(w=0;w<this.g.length;w++)for(var P=0;P<k.g.length;P++){var x=this.i(w)>>>16,R=this.i(w)&65535,st=k.i(P)>>>16,on=k.i(P)&65535;C[2*w+2*P]+=R*on,T(C,2*w+2*P),C[2*w+2*P+1]+=x*on,T(C,2*w+2*P+1),C[2*w+2*P+1]+=R*st,T(C,2*w+2*P+1),C[2*w+2*P+2]+=x*st,T(C,2*w+2*P+2)}for(w=0;w<v;w++)C[w]=C[2*w+1]<<16|C[2*w];for(w=v;w<2*v;w++)C[w]=0;return new o(C,0)};function T(k,v){for(;(k[v]&65535)!=k[v];)k[v+1]+=k[v]>>>16,k[v]&=65535,v++}function I(k,v){this.g=k,this.h=v}function D(k,v){if(E(v))throw Error("division by zero");if(E(k))return new I(f,f);if(A(k))return v=D(N(k),v),new I(N(v.g),N(v.h));if(A(v))return v=D(k,N(v)),new I(N(v.g),v.h);if(30<k.g.length){if(A(k)||A(v))throw Error("slowDivide_ only works with positive integers.");for(var C=p,w=v;0>=w.l(k);)C=F(C),w=F(w);var P=j(C,1),x=j(w,1);for(w=j(w,2),C=j(C,2);!E(w);){var R=x.add(w);0>=R.l(k)&&(P=P.add(C),x=R),w=j(w,1),C=j(C,1)}return v=S(k,P.j(v)),new I(P,v)}for(P=f;0<=k.l(v);){for(C=Math.max(1,Math.floor(k.m()/v.m())),w=Math.ceil(Math.log(C)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),x=c(C),R=x.j(v);A(R)||0<R.l(k);)C-=w,x=c(C),R=x.j(v);E(x)&&(x=p),P=P.add(x),k=S(k,R)}return new I(P,k)}t.A=function(k){return D(this,k).h},t.and=function(k){for(var v=Math.max(this.g.length,k.g.length),C=[],w=0;w<v;w++)C[w]=this.i(w)&k.i(w);return new o(C,this.h&k.h)},t.or=function(k){for(var v=Math.max(this.g.length,k.g.length),C=[],w=0;w<v;w++)C[w]=this.i(w)|k.i(w);return new o(C,this.h|k.h)},t.xor=function(k){for(var v=Math.max(this.g.length,k.g.length),C=[],w=0;w<v;w++)C[w]=this.i(w)^k.i(w);return new o(C,this.h^k.h)};function F(k){for(var v=k.g.length+1,C=[],w=0;w<v;w++)C[w]=k.i(w)<<1|k.i(w-1)>>>31;return new o(C,k.h)}function j(k,v){var C=v>>5;v%=32;for(var w=k.g.length-C,P=[],x=0;x<w;x++)P[x]=0<v?k.i(x+C)>>>v|k.i(x+C+1)<<32-v:k.i(x+C);return new o(P,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,KC=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,cs=o}).apply(typeof j0<"u"?j0:typeof self<"u"?self:typeof window<"u"?window:{});var yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var QC,Xa,YC,$c,Om,XC,JC,ZC;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yc=="object"&&yc];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var b=l[_];if(!(b in m))break e;m=m[b]}l=l[l.length-1],_=m[l],d=d(_),d!=_&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,_=!1,b={next:function(){if(!_&&m<l.length){var L=m++;return{value:d(L,l[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,_),l.apply(d,b)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function y(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function E(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(_,b,L){for(var z=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)z[Se-2]=arguments[Se];return d.prototype[b].apply(_,z)}}function A(l){const d=l.length;if(0<d){const m=Array(d);for(let _=0;_<d;_++)m[_]=l[_];return m}return[]}function N(l,d){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(u(_)){const b=l.length||0,L=_.length||0;l.length=b+L;for(let z=0;z<L;z++)l[b+z]=_[z]}else l.push(_)}}class S{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function T(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var F=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function j(l,d,m){for(const _ in l)d.call(m,l[_],_,l)}function k(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function v(l){const d={};for(const m in l)d[m]=l[m];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(l,d){let m,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(m in _)l[m]=_[m];for(let L=0;L<C.length;L++)m=C[L],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function P(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function x(l){a.setTimeout(()=>{throw l},0)}function R(){var l=J;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class st{constructor(){this.h=this.g=null}add(d,m){const _=on.get();_.set(d,m),this.h?this.h.next=_:this.g=_,this.h=_}}var on=new S(()=>new qn,l=>l.reset());class qn{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let an,W=!1,J=new st,Y=()=>{const l=a.Promise.resolve(void 0);an=()=>{l.then(G)}};var G=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(m){x(m)}var d=on;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}W=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ze=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function De(l,d){if(se.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(F){e:{try{D(d.nodeName);var b=!0;break e}catch{}b=!1}b||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Et[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&De.aa.h.call(this)}}E(De,se);var Et={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),oe=0;function Gn(l,d,m,_,b){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!_,this.ha=b,this.key=++oe,this.da=this.fa=!1}function ct(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function cr(l){this.src=l,this.g={},this.h=0}cr.prototype.add=function(l,d,m,_,b){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var z=Us(l,d,_,b);return-1<z?(d=l[z],m||(d.fa=!1)):(d=new Gn(d,this.src,L,!!_,b),d.fa=m,l.push(d)),d};function _n(l,d){var m=d.type;if(m in l.g){var _=l.g[m],b=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=b)&&Array.prototype.splice.call(_,b,1),L&&(ct(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Us(l,d,m,_){for(var b=0;b<l.length;++b){var L=l[b];if(!L.da&&L.listener==d&&L.capture==!!m&&L.ha==_)return b}return-1}var Bs="closure_lm_"+(1e6*Math.random()|0),pa={};function Tt(l,d,m,_,b){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Tt(l,d[L],m,_,b);return null}return m=zs(m),l&&l[ot]?l.K(d,m,c(_)?!!_.capture:!1,b):Hr(l,d,m,!1,_,b)}function Hr(l,d,m,_,b,L){if(!d)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,Se=ga(l);if(Se||(l[Bs]=Se=new cr(l)),m=Se.add(d,m,_,z,L),m.proxy)return m;if(_=qr(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)ze||(b=z),b===void 0&&(b=!1),l.addEventListener(d.toString(),_,b);else if(l.attachEvent)l.attachEvent(Vu(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function qr(){function l(m){return d.call(l.src,l.listener,m)}const d=yf;return l}function Mu(l,d,m,_,b){if(Array.isArray(d))for(var L=0;L<d.length;L++)Mu(l,d[L],m,_,b);else _=c(_)?!!_.capture:!!_,m=zs(m),l&&l[ot]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],m=Us(L,m,_,b),-1<m&&(ct(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=ga(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Us(d,m,_,b)),(m=-1<l?d[l]:null)&&ma(m))}function ma(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[ot])_n(d.i,l);else{var m=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(m,_,l.capture):d.detachEvent?d.detachEvent(Vu(m),_):d.addListener&&d.removeListener&&d.removeListener(_),(m=ga(d))?(_n(m,l),m.h==0&&(m.src=null,d[Bs]=null)):ct(l)}}}function Vu(l){return l in pa?pa[l]:pa[l]="on"+l}function yf(l,d){if(l.da)l=!0;else{d=new De(d,this);var m=l.listener,_=l.ha||l.src;l.fa&&ma(l),l=m.call(_,d)}return l}function ga(l){return l=l[Bs],l instanceof cr?l:null}var _a="__closure_events_fn_"+(1e9*Math.random()>>>0);function zs(l){return typeof l=="function"?l:(l[_a]||(l[_a]=function(d){return l.handleEvent(d)}),l[_a])}function Te(){K.call(this),this.i=new cr(this),this.M=this,this.F=null}E(Te,K),Te.prototype[ot]=!0,Te.prototype.removeEventListener=function(l,d,m,_){Mu(this,l,d,m,_)};function ht(l,d){var m,_=l.F;if(_)for(m=[];_;_=_.F)m.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new se(d,l);else if(d instanceof se)d.target=d.target||l;else{var b=d;d=new se(_,l),w(d,b)}if(b=!0,m)for(var L=m.length-1;0<=L;L--){var z=d.g=m[L];b=Ui(z,_,!0,d)&&b}if(z=d.g=l,b=Ui(z,_,!0,d)&&b,b=Ui(z,_,!1,d)&&b,m)for(L=0;L<m.length;L++)z=d.g=m[L],b=Ui(z,_,!1,d)&&b}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],_=0;_<m.length;_++)ct(m[_]);delete l.g[d],l.h--}}this.F=null},Te.prototype.K=function(l,d,m,_){return this.i.add(String(l),d,!1,m,_)},Te.prototype.L=function(l,d,m,_){return this.i.add(String(l),d,!0,m,_)};function Ui(l,d,m,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var b=!0,L=0;L<d.length;++L){var z=d[L];if(z&&!z.da&&z.capture==m){var Se=z.listener,It=z.ha||z.src;z.fa&&_n(l.i,z),b=Se.call(It,_)!==!1&&b}}return b&&!_.defaultPrevented}function X(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function ee(l){l.g=X(()=>{l.g=null,l.i&&(l.i=!1,ee(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Ie extends K{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ee(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(l){K.call(this),this.h=l,this.g={}}E(We,K);var ke=[];function $e(l){j(l.g,function(d,m){this.g.hasOwnProperty(m)&&ma(d)},l),l.g={}}We.prototype.N=function(){We.aa.N.call(this),$e(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nt=a.JSON.stringify,Me=a.JSON.parse,Oe=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function hr(){}hr.prototype.h=null;function Fu(l){return l.h||(l.h=l.i())}function nv(){}var ya={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vf(){se.call(this,"d")}E(vf,se);function wf(){se.call(this,"c")}E(wf,se);var Bi={},rv=null;function ju(){return rv=rv||new Te}Bi.La="serverreachability";function iv(l){se.call(this,Bi.La,l)}E(iv,se);function va(l){const d=ju();ht(d,new iv(d))}Bi.STAT_EVENT="statevent";function sv(l,d){se.call(this,Bi.STAT_EVENT,l),this.stat=d}E(sv,se);function zt(l){const d=ju();ht(d,new sv(d,l))}Bi.Ma="timingevent";function ov(l,d){se.call(this,Bi.Ma,l),this.size=d}E(ov,se);function wa(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Ea(){this.g=!0}Ea.prototype.xa=function(){this.g=!1};function vx(l,d,m,_,b,L){l.info(function(){if(l.g)if(L)for(var z="",Se=L.split("&"),It=0;It<Se.length;It++){var me=Se[It].split("=");if(1<me.length){var bt=me[0];me=me[1];var Dt=bt.split("_");z=2<=Dt.length&&Dt[1]=="type"?z+(bt+"="+me+"&"):z+(bt+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+d+`
`+m+`
`+z})}function wx(l,d,m,_,b,L,z){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+d+`
`+m+`
`+L+" "+z})}function Ws(l,d,m,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Tx(l,m)+(_?" "+_:"")})}function Ex(l,d){l.info(function(){return"TIMEOUT: "+d})}Ea.prototype.info=function(){};function Tx(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var _=m[l];if(!(2>_.length)){var b=_[1];if(Array.isArray(b)&&!(1>b.length)){var L=b[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return Nt(m)}catch{return d}}var Uu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},av={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ef;function Bu(){}E(Bu,hr),Bu.prototype.g=function(){return new XMLHttpRequest},Bu.prototype.i=function(){return{}},Ef=new Bu;function Gr(l,d,m,_){this.j=l,this.i=d,this.l=m,this.R=_||1,this.U=new We(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lv}function lv(){this.i=null,this.g="",this.h=!1}var uv={},Tf={};function If(l,d,m){l.L=1,l.v=Hu(dr(d)),l.m=m,l.P=!0,cv(l,null)}function cv(l,d){l.F=Date.now(),zu(l),l.A=dr(l.v);var m=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Sv(m.i,"t",_),l.C=0,m=l.j.J,l.h=new lv,l.g=zv(l.j,m?d:null,!l.m),0<l.O&&(l.M=new Ie(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,_=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(ke[0]=b.toString()),b=ke);for(var L=0;L<b.length;L++){var z=Tt(m,b[L],_||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),va(),vx(l.i,l.u,l.A,l.l,l.R,l.m)}Gr.prototype.ca=function(l){l=l.target;const d=this.M;d&&fr(l)==3?d.j():this.Y(l)},Gr.prototype.Y=function(l){try{if(l==this.g)e:{const Dt=fr(this.g);var d=this.g.Ba();const qs=this.g.Z();if(!(3>Dt)&&(Dt!=3||this.g&&(this.h.h||this.g.oa()||Nv(this.g)))){this.J||Dt!=4||d==7||(d==8||0>=qs?va(3):va(2)),Sf(this);var m=this.g.Z();this.X=m;t:if(hv(this)){var _=Nv(this.g);l="";var b=_.length,L=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zi(this),Ta(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<b;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(L&&d==b-1)});_.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,wx(this.i,this.u,this.A,this.l,this.R,Dt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,It=this.g;if((Se=It.g?It.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(Se)){var me=Se;break t}}me=null}if(m=me)Ws(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cf(this,m);else{this.o=!1,this.s=3,zt(12),zi(this),Ta(this);break e}}if(this.P){m=!0;let xn;for(;!this.J&&this.C<z.length;)if(xn=Ix(this,z),xn==Tf){Dt==4&&(this.s=4,zt(14),m=!1),Ws(this.i,this.l,null,"[Incomplete Response]");break}else if(xn==uv){this.s=4,zt(15),Ws(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else Ws(this.i,this.l,xn,null),Cf(this,xn);if(hv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Dt!=4||z.length!=0||this.h.h||(this.s=1,zt(16),m=!1),this.o=this.o&&m,!m)Ws(this.i,this.l,z,"[Invalid Chunked Response]"),zi(this),Ta(this);else if(0<z.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Nf(bt),bt.M=!0,zt(11))}}else Ws(this.i,this.l,z,null),Cf(this,z);Dt==4&&zi(this),this.o&&!this.J&&(Dt==4?Fv(this.j,this):(this.o=!1,zu(this)))}else Ux(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),zi(this),Ta(this)}}}catch{}finally{}};function hv(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Ix(l,d){var m=l.C,_=d.indexOf(`
`,m);return _==-1?Tf:(m=Number(d.substring(m,_)),isNaN(m)?uv:(_+=1,_+m>d.length?Tf:(d=d.slice(_,_+m),l.C=_+m,d)))}Gr.prototype.cancel=function(){this.J=!0,zi(this)};function zu(l){l.S=Date.now()+l.I,dv(l,l.I)}function dv(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wa(p(l.ba,l),d)}function Sf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Gr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Ex(this.i,this.A),this.L!=2&&(va(),zt(17)),zi(this),this.s=2,Ta(this)):dv(this,this.S-l)};function Ta(l){l.j.G==0||l.J||Fv(l.j,l)}function zi(l){Sf(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,$e(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Cf(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||kf(m.h,l))){if(!l.K&&kf(m.h,l)&&m.G==3){try{var _=m.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Xu(m),Qu(m);else break e;Pf(m),zt(18)}}else m.za=b[1],0<m.za-m.T&&37500>b[2]&&m.F&&m.v==0&&!m.C&&(m.C=wa(p(m.Za,m),6e3));if(1>=mv(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else $i(m,11)}else if((l.K||m.g==l)&&Xu(m),!T(d))for(b=m.Da.g.parse(d),d=0;d<b.length;d++){let me=b[d];if(m.T=me[0],me=me[1],m.G==2)if(me[0]=="c"){m.K=me[1],m.ia=me[2];const bt=me[3];bt!=null&&(m.la=bt,m.j.info("VER="+m.la));const Dt=me[4];Dt!=null&&(m.Aa=Dt,m.j.info("SVER="+m.Aa));const qs=me[5];qs!=null&&typeof qs=="number"&&0<qs&&(_=1.5*qs,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const xn=l.g;if(xn){const Zu=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zu){var L=_.h;L.g||Zu.indexOf("spdy")==-1&&Zu.indexOf("quic")==-1&&Zu.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Rf(L,L.h),L.h=null))}if(_.D){const bf=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;bf&&(_.ya=bf,xe(_.I,_.D,bf))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var z=l;if(_.qa=Bv(_,_.J?_.ia:null,_.W),z.K){gv(_.h,z);var Se=z,It=_.L;It&&(Se.I=It),Se.B&&(Sf(Se),zu(Se)),_.g=z}else Mv(_);0<m.i.length&&Yu(m)}else me[0]!="stop"&&me[0]!="close"||$i(m,7);else m.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?$i(m,7):xf(m):me[0]!="noop"&&m.l&&m.l.ta(me),m.v=0)}}va(4)}catch{}}var Sx=class{constructor(l,d){this.g=l,this.map=d}};function fv(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pv(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function mv(l){return l.h?1:l.g?l.g.size:0}function kf(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Rf(l,d){l.g?l.g.add(d):l.h=d}function gv(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}fv.prototype.cancel=function(){if(this.i=_v(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function _v(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return A(l.i)}function Cx(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,_=0;_<m;_++)d.push(l[_]);return d}d=[],m=0;for(_ in l)d[m++]=l[_];return d}function kx(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const _ in l)d[m++]=_;return d}}}function yv(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=kx(l),_=Cx(l),b=_.length,L=0;L<b;L++)d.call(void 0,_[L],m&&m[L],l)}var vv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rx(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var _=l[m].indexOf("="),b=null;if(0<=_){var L=l[m].substring(0,_);b=l[m].substring(_+1)}else L=l[m];d(L,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Wi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Wi){this.h=l.h,Wu(this,l.j),this.o=l.o,this.g=l.g,$u(this,l.s),this.l=l.l;var d=l.i,m=new Ca;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),wv(this,m),this.m=l.m}else l&&(d=String(l).match(vv))?(this.h=!1,Wu(this,d[1]||"",!0),this.o=Ia(d[2]||""),this.g=Ia(d[3]||"",!0),$u(this,d[4]),this.l=Ia(d[5]||"",!0),wv(this,d[6]||"",!0),this.m=Ia(d[7]||"")):(this.h=!1,this.i=new Ca(null,this.h))}Wi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Sa(d,Ev,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Sa(d,Ev,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Sa(m,m.charAt(0)=="/"?Px:xx,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Sa(m,bx)),l.join("")};function dr(l){return new Wi(l)}function Wu(l,d,m){l.j=m?Ia(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function $u(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function wv(l,d,m){d instanceof Ca?(l.i=d,Dx(l.i,l.h)):(m||(d=Sa(d,Nx)),l.i=new Ca(d,l.h))}function xe(l,d,m){l.i.set(d,m)}function Hu(l){return xe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ia(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Sa(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,Ax),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ax(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ev=/[#\/\?@]/g,xx=/[#\?:]/g,Px=/[#\?]/g,Nx=/[#\?@]/g,bx=/#/g;function Ca(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Kr(l){l.g||(l.g=new Map,l.h=0,l.i&&Rx(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Ca.prototype,t.add=function(l,d){Kr(this),this.i=null,l=$s(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function Tv(l,d){Kr(l),d=$s(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Iv(l,d){return Kr(l),d=$s(l,d),l.g.has(d)}t.forEach=function(l,d){Kr(this),this.g.forEach(function(m,_){m.forEach(function(b){l.call(d,b,_,this)},this)},this)},t.na=function(){Kr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let _=0;_<d.length;_++){const b=l[_];for(let L=0;L<b.length;L++)m.push(d[_])}return m},t.V=function(l){Kr(this);let d=[];if(typeof l=="string")Iv(this,l)&&(d=d.concat(this.g.get($s(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return Kr(this),this.i=null,l=$s(this,l),Iv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Sv(l,d,m){Tv(l,d),0<m.length&&(l.i=null,l.g.set($s(l,d),A(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var _=d[m];const L=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var b=L;z[_]!==""&&(b+="="+encodeURIComponent(String(z[_]))),l.push(b)}}return this.i=l.join("&")};function $s(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Dx(l,d){d&&!l.j&&(Kr(l),l.i=null,l.g.forEach(function(m,_){var b=_.toLowerCase();_!=b&&(Tv(this,_),Sv(this,b,m))},l)),l.j=d}function Ox(l,d){const m=new Ea;if(a.Image){const _=new Image;_.onload=y(Qr,m,"TestLoadImage: loaded",!0,d,_),_.onerror=y(Qr,m,"TestLoadImage: error",!1,d,_),_.onabort=y(Qr,m,"TestLoadImage: abort",!1,d,_),_.ontimeout=y(Qr,m,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function Lx(l,d){const m=new Ea,_=new AbortController,b=setTimeout(()=>{_.abort(),Qr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(L=>{clearTimeout(b),L.ok?Qr(m,"TestPingServer: ok",!0,d):Qr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),Qr(m,"TestPingServer: error",!1,d)})}function Qr(l,d,m,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(m)}catch{}}function Mx(){this.g=new Oe}function Vx(l,d,m){const _=m||"";try{yv(l,function(b,L){let z=b;c(b)&&(z=Nt(b)),d.push(_+L+"="+encodeURIComponent(z))})}catch(b){throw d.push(_+"type="+encodeURIComponent("_badmap")),b}}function qu(l){this.l=l.Ub||null,this.j=l.eb||!1}E(qu,hr),qu.prototype.g=function(){return new Gu(this.l,this.j)},qu.prototype.i=function(l){return function(){return l}}({});function Gu(l,d){Te.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Gu,Te),t=Gu.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Ra(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ka(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ra(this)),this.g&&(this.readyState=3,Ra(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?ka(this):Ra(this),this.readyState==3&&Cv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ka(this))},t.Qa=function(l){this.g&&(this.response=l,ka(this))},t.ga=function(){this.g&&ka(this)};function ka(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ra(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function Ra(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Gu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function kv(l){let d="";return j(l,function(m,_){d+=_,d+=":",d+=m,d+=`\r
`}),d}function Af(l,d,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=kv(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):xe(l,d,m))}function He(l){Te.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(He,Te);var Fx=/^https?$/i,jx=["POST","PUT"];t=He.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ef.g(),this.v=this.o?Fu(this.o):Fu(Ef),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){Rv(this,L);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)m.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())m.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(jx,d,void 0))||_||b||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of m)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pv(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){Rv(this,L)}};function Rv(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Av(l),Ku(l)}function Av(l){l.A||(l.A=!0,ht(l,"complete"),ht(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ht(this,"complete"),ht(this,"abort"),Ku(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ku(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xv(this):this.bb())},t.bb=function(){xv(this)};function xv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||fr(l)!=4||l.Z()!=2)){if(l.u&&fr(l)==4)X(l.Ea,0,l);else if(ht(l,"readystatechange"),fr(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var _;if(_=z===0){var b=String(l.D).match(vv)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),_=!Fx.test(b?b.toLowerCase():"")}m=_}if(m)ht(l,"complete"),ht(l,"success");else{l.m=6;try{var L=2<fr(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",Av(l)}}finally{Ku(l)}}}}function Ku(l,d){if(l.g){Pv(l);const m=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ht(l,"ready");try{m.onreadystatechange=_}catch{}}}function Pv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function fr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Me(d)}};function Nv(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ux(l){const d={};l=(l.g&&2<=fr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(T(l[_]))continue;var m=P(l[_]);const b=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=d[b]||[];d[b]=L,L.push(m)}k(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Aa(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function bv(l){this.Aa=0,this.i=[],this.j=new Ea,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Aa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Aa("baseRetryDelayMs",5e3,l),this.cb=Aa("retryDelaySeedMs",1e4,l),this.Wa=Aa("forwardChannelMaxRetries",2,l),this.wa=Aa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new fv(l&&l.concurrentRequestLimit),this.Da=new Mx,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=bv.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,_){zt(0),this.W=l,this.H=d||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=Bv(this,null,this.W),Yu(this)};function xf(l){if(Dv(l),l.G==3){var d=l.U++,m=dr(l.I);if(xe(m,"SID",l.K),xe(m,"RID",d),xe(m,"TYPE","terminate"),xa(l,m),d=new Gr(l,l.j,d),d.L=2,d.v=Hu(dr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=zv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),zu(d)}Uv(l)}function Qu(l){l.g&&(Nf(l),l.g.cancel(),l.g=null)}function Dv(l){Qu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Xu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Yu(l){if(!pv(l.h)&&!l.s){l.s=!0;var d=l.Ga;an||Y(),W||(an(),W=!0),J.add(d,l),l.B=0}}function Bx(l,d){return mv(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wa(p(l.Ga,l,d),jv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new Gr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=v(L),w(L,this.S)):L=this.S),this.m!==null||this.O||(b.H=L,L=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Lv(this,b,d),m=dr(this.I),xe(m,"RID",l),xe(m,"CVER",22),this.D&&xe(m,"X-HTTP-Session-Id",this.D),xa(this,m),L&&(this.O?d="headers="+encodeURIComponent(String(kv(L)))+"&"+d:this.m&&Af(m,this.m,L)),Rf(this.h,b),this.Ua&&xe(m,"TYPE","init"),this.P?(xe(m,"$req",d),xe(m,"SID","null"),b.T=!0,If(b,m,null)):If(b,m,d),this.G=2}}else this.G==3&&(l?Ov(this,l):this.i.length==0||pv(this.h)||Ov(this))};function Ov(l,d){var m;d?m=d.l:m=l.U++;const _=dr(l.I);xe(_,"SID",l.K),xe(_,"RID",m),xe(_,"AID",l.T),xa(l,_),l.m&&l.o&&Af(_,l.m,l.o),m=new Gr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Lv(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Rf(l.h,m),If(m,_,d)}function xa(l,d){l.H&&j(l.H,function(m,_){xe(d,_,m)}),l.l&&yv({},function(m,_){xe(d,_,m)})}function Lv(l,d,m){m=Math.min(l.i.length,m);var _=l.l?p(l.l.Na,l.l,l):null;e:{var b=l.i;let L=-1;for(;;){const z=["count="+m];L==-1?0<m?(L=b[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let Se=!0;for(let It=0;It<m;It++){let me=b[It].g;const bt=b[It].map;if(me-=L,0>me)L=Math.max(0,b[It].g-100),Se=!1;else try{Vx(bt,z,"req"+me+"_")}catch{_&&_(bt)}}if(Se){_=z.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,_}function Mv(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;an||Y(),W||(an(),W=!0),J.add(d,l),l.v=0}}function Pf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wa(p(l.Fa,l),jv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Vv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wa(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,zt(10),Qu(this),Vv(this))};function Nf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Vv(l){l.g=new Gr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=dr(l.qa);xe(d,"RID","rpc"),xe(d,"SID",l.K),xe(d,"AID",l.T),xe(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&xe(d,"TO",l.ja),xe(d,"TYPE","xmlhttp"),xa(l,d),l.m&&l.o&&Af(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Hu(dr(d)),m.m=null,m.P=!0,cv(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Qu(this),Pf(this),zt(19))};function Xu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Fv(l,d){var m=null;if(l.g==d){Xu(l),Nf(l),l.g=null;var _=2}else if(kf(l.h,d))m=d.D,gv(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var b=l.B;_=ju(),ht(_,new ov(_,m)),Yu(l)}else Mv(l);else if(b=d.s,b==3||b==0&&0<d.X||!(_==1&&Bx(l,d)||_==2&&Pf(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),b){case 1:$i(l,5);break;case 4:$i(l,10);break;case 3:$i(l,6);break;default:$i(l,2)}}}function jv(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function $i(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),_=l.Xa;const b=!_;_=new Wi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Wu(_,"https"),Hu(_),b?Ox(_.toString(),m):Lx(_.toString(),m)}else zt(2);l.G=0,l.l&&l.l.sa(d),Uv(l),Dv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))};function Uv(l){if(l.G=0,l.ka=[],l.l){const d=_v(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Bv(l,d,m){var _=m instanceof Wi?dr(m):new Wi(m);if(_.g!="")d&&(_.g=d+"."+_.g),$u(_,_.s);else{var b=a.location;_=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;var L=new Wi(null);_&&Wu(L,_),d&&(L.g=d),b&&$u(L,b),m&&(L.l=m),_=L}return m=l.D,d=l.ya,m&&d&&xe(_,m,d),xe(_,"VER",l.la),xa(l,_),_}function zv(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new He(new qu({eb:m})):new He(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wv(){}t=Wv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ju(){}Ju.prototype.g=function(l,d){return new ln(l,d)};function ln(l,d){Te.call(this),this.g=new bv(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!T(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Hs(this)}E(ln,Te),ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){xf(this.g)},ln.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Nt(l),l=m);d.i.push(new Sx(d.Ya++,l)),d.G==3&&Yu(d)},ln.prototype.N=function(){this.g.l=null,delete this.j,xf(this.g),delete this.g,ln.aa.N.call(this)};function $v(l){vf.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}E($v,vf);function Hv(){wf.call(this),this.status=1}E(Hv,wf);function Hs(l){this.g=l}E(Hs,Wv),Hs.prototype.ua=function(){ht(this.g,"a")},Hs.prototype.ta=function(l){ht(this.g,new $v(l))},Hs.prototype.sa=function(l){ht(this.g,new Hv)},Hs.prototype.ra=function(){ht(this.g,"b")},Ju.prototype.createWebChannel=Ju.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,ZC=function(){return new Ju},JC=function(){return ju()},XC=Bi,Om={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Uu.NO_ERROR=0,Uu.TIMEOUT=8,Uu.HTTP_ERROR=6,$c=Uu,av.COMPLETE="complete",YC=av,nv.EventType=ya,ya.OPEN="a",ya.CLOSE="b",ya.ERROR="c",ya.MESSAGE="d",Te.prototype.listen=Te.prototype.K,Xa=nv,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,QC=He}).apply(typeof yc<"u"?yc:typeof self<"u"?self:typeof window<"u"?window:{});const U0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Id("@firebase/firestore");function Fa(){return ys.logLevel}function q(t,...e){if(ys.logLevel<=he.DEBUG){const n=e.map(C_);ys.debug(`Firestore (${oa}): ${t}`,...n)}}function Vr(t,...e){if(ys.logLevel<=he.ERROR){const n=e.map(C_);ys.error(`Firestore (${oa}): ${t}`,...n)}}function vs(t,...e){if(ys.logLevel<=he.WARN){const n=e.map(C_);ys.warn(`Firestore (${oa}): ${t}`,...n)}}function C_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${oa}) INTERNAL ASSERTION FAILED: `+t;throw Vr(e),new Error(e)}function we(t,e){t||ne()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends or{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ek{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Vt.UNAUTHENTICATED))}shutdown(){}}class oL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aL{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new ek(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Vt(e)}}class lL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class uL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){we(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new cL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Vo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new rt(0,0))}static max(){return new re(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends Wl{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const fL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Wl{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return fL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ne.fromString(e))}static fromName(e){return new Q(Ne.fromString(e).popFirst(5))}static empty(){return new Q(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ne(e.slice()))}}function pL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new Si(i,Q.empty(),e)}function mL(t){return new Si(t.readTime,t.key,-1)}class Si{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Si(re.min(),Q.empty(),-1)}static max(){return new Si(re.max(),Q.empty(),-1)}}function gL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==_L)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function vL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function vu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class R_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}R_.oe=-1;function xd(t){return t==null}function Nh(t){return t===0&&1/t==-1/0}function wL(t){return typeof t=="number"&&Number.isInteger(t)&&!Nh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it=class Lm{constructor(e,n){this.comparator=e,this.root=n||vi.EMPTY}insert(e,n){return new Lm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vi.BLACK,null,null))}remove(e){return new Lm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vc(this.root,e,this.comparator,!1)}getReverseIterator(){return new vc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vc(this.root,e,this.comparator,!0)}},vc=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},vi=class pr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pr.RED,this.left=i??pr.EMPTY,this.right=s??pr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}};vi.EMPTY=null,vi.RED=!0,vi.BLACK=!1;vi.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,s){return this}insert(e,n,r){return new vi(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new z0(this.data.getIterator())}getIteratorFrom(e){return new z0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class z0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new hn([])}unionWith(e){let n=new Rt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class rk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new rk("Invalid base64 string: "+s):s}}(e);return new vt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const EL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(t){if(we(!!t),typeof t=="string"){let e=0;const n=EL.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function x_(t){const e=t.mapValue.fields.__previous_value__;return A_(e)?x_(e):e}function $l(t){const e=Ci(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Fo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc={mapValue:{}};function Es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?A_(t)?4:SL(t)?9007199254740991:IL(t)?10:11:ne()}function ir(t,e){if(t===e)return!0;const n=Es(t);if(n!==Es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $l(t).isEqual($l(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ci(i.timestampValue),a=Ci(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ws(i.bytesValue).isEqual(ws(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ke(i.geoPointValue.latitude)===Ke(s.geoPointValue.latitude)&&Ke(i.geoPointValue.longitude)===Ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ke(i.integerValue)===Ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ke(i.doubleValue),a=Ke(s.doubleValue);return o===a?Nh(o)===Nh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Vo(t.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(B0(o)!==B0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ir(o[u],a[u])))return!1;return!0}(t,e);default:return ne()}}function Hl(t,e){return(t.values||[]).find(n=>ir(n,e))!==void 0}function jo(t,e){if(t===e)return 0;const n=Es(t),r=Es(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ke(s.integerValue||s.doubleValue),u=Ke(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return W0(t.timestampValue,e.timestampValue);case 4:return W0($l(t),$l(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ws(s),u=ws(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ge(a[c],u[c]);if(h!==0)return h}return ge(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ge(Ke(s.latitude),Ke(o.latitude));return a!==0?a:ge(Ke(s.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},p=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,E=(u=p.value)===null||u===void 0?void 0:u.arrayValue,A=ge(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:$0(y,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===wc.mapValue&&o===wc.mapValue)return 0;if(s===wc.mapValue)return 1;if(o===wc.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=ge(u[f],h[f]);if(p!==0)return p;const y=jo(a[u[f]],c[h[f]]);if(y!==0)return y}return ge(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ne()}}function W0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Ci(t),r=Ci(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function $0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=jo(n[i],r[i]);if(s)return s}return ge(n.length,r.length)}function Uo(t){return Mm(t)}function Mm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ci(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ws(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mm(n.fields[o])}`;return i+"}"}(t.mapValue):ne()}function H0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vm(t){return!!t&&"integerValue"in t}function P_(t){return!!t&&"arrayValue"in t}function q0(t){return!!t&&"nullValue"in t}function G0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hc(t){return!!t&&"mapValue"in t}function IL(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function cl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=cl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cl(n)}setAll(e){let n=_t.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=cl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Hc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Hc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ls(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Xt(cl(this.value))}}function ik(t){const e=[];return Ls(t.fields,(n,r)=>{const i=new _t([n]);if(Hc(r)){const s=ik(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new jt(e,0,re.min(),re.min(),re.min(),Xt.empty(),0)}static newFoundDocument(e,n,r,i){return new jt(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new jt(e,2,n,re.min(),re.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,re.min(),re.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bh{constructor(e,n){this.position=e,this.inclusive=n}}function K0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=jo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Q0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ir(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ql{constructor(e,n="asc"){this.field=e,this.dir=n}}function CL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sk{}class Ze extends sk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RL(e,n,r):n==="array-contains"?new PL(e,r):n==="in"?new NL(e,r):n==="not-in"?new bL(e,r):n==="array-contains-any"?new DL(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AL(e,r):new xL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(jo(n,this.value)):n!==null&&Es(this.value)===Es(n)&&this.matchesComparison(jo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends sk{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Hn(e,n)}matches(e){return ok(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ok(t){return t.op==="and"}function ak(t){return kL(t)&&ok(t)}function kL(t){for(const e of t.filters)if(e instanceof Hn)return!1;return!0}function Fm(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Uo(t.value);if(ak(t))return t.filters.map(e=>Fm(e)).join(",");{const e=t.filters.map(n=>Fm(n)).join(",");return`${t.op}(${e})`}}function lk(t,e){return t instanceof Ze?function(r,i){return i instanceof Ze&&r.op===i.op&&r.field.isEqual(i.field)&&ir(r.value,i.value)}(t,e):t instanceof Hn?function(r,i){return i instanceof Hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&lk(o,i.filters[a]),!0):!1}(t,e):void ne()}function uk(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Uo(n.value)}`}(t):t instanceof Hn?function(n){return n.op.toString()+" {"+n.getFilters().map(uk).join(" ,")+"}"}(t):"Filter"}class RL extends Ze{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class AL extends Ze{constructor(e,n){super(e,"in",n),this.keys=ck("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xL extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=ck("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ck(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class PL extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return P_(n)&&Hl(n.arrayValue,this.value)}}class NL extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hl(this.value.arrayValue,n)}}class bL extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hl(this.value.arrayValue,n)}}class DL extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!P_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Y0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new OL(t,e,n,r,i,s,o)}function N_(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Uo(r)).join(",")),e.ue=n}return e.ue}function b_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Q0(t.startAt,e.startAt)&&Q0(t.endAt,e.endAt)}function jm(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function LL(t,e,n,r,i,s,o,a){return new aa(t,e,n,r,i,s,o,a)}function Pd(t){return new aa(t)}function X0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hk(t){return t.collectionGroup!==null}function hl(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Rt(_t.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ql(s,r))}),n.has(_t.keyField().canonicalString())||e.ce.push(new ql(_t.keyField(),r))}return e.ce}function tr(t){const e=ie(t);return e.le||(e.le=ML(e,hl(t))),e.le}function ML(t,e){if(t.limitType==="F")return Y0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ql(i.field,s)});const n=t.endAt?new bh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bh(t.startAt.position,t.startAt.inclusive):null;return Y0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Um(t,e){const n=t.filters.concat([e]);return new aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dh(t,e,n){return new aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nd(t,e){return b_(tr(t),tr(e))&&t.limitType===e.limitType}function dk(t){return`${N_(tr(t))}|lt:${t.limitType}`}function Ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>uk(i)).join(", ")}]`),xd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Uo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Uo(i)).join(",")),`Target(${r})`}(tr(t))}; limitType=${t.limitType})`}function bd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of hl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=K0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,hl(r),i)||r.endAt&&!function(o,a,u){const c=K0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,hl(r),i))}(t,e)}function VL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fk(t){return(e,n)=>{let r=!1;for(const i of hl(t)){const s=FL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function FL(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?jo(u,c):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ls(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return nk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL=new it(Q.comparator);function Fr(){return jL}const pk=new it(Q.comparator);function Ja(...t){let e=pk;for(const n of t)e=e.insert(n.key,n);return e}function mk(t){let e=pk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ns(){return dl()}function gk(){return dl()}function dl(){return new la(t=>t.toString(),(t,e)=>t.isEqual(e))}const UL=new it(Q.comparator),BL=new Rt(Q.comparator);function de(...t){let e=BL;for(const n of t)e=e.add(n);return e}const zL=new Rt(ge);function WL(){return zL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nh(e)?"-0":e}}function _k(t){return{integerValue:""+t}}function yk(t,e){return wL(e)?_k(e):D_(t,e)}/**
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
 */class Dd{constructor(){this._=void 0}}function $L(t,e,n){return t instanceof Gl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&A_(s)&&(s=x_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Bo?wk(t,e):t instanceof zo?Ek(t,e):function(i,s){const o=vk(i,s),a=J0(o)+J0(i.Pe);return Vm(o)&&Vm(i.Pe)?_k(a):D_(i.serializer,a)}(t,e)}function HL(t,e,n){return t instanceof Bo?wk(t,e):t instanceof zo?Ek(t,e):n}function vk(t,e){return t instanceof Kl?function(r){return Vm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Gl extends Dd{}class Bo extends Dd{constructor(e){super(),this.elements=e}}function wk(t,e){const n=Tk(e);for(const r of t.elements)n.some(i=>ir(i,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends Dd{constructor(e){super(),this.elements=e}}function Ek(t,e){let n=Tk(e);for(const r of t.elements)n=n.filter(i=>!ir(i,r));return{arrayValue:{values:n}}}class Kl extends Dd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function J0(t){return Ke(t.integerValue||t.doubleValue)}function Tk(t){return P_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n){this.field=e,this.transform=n}}function qL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Bo&&i instanceof Bo||r instanceof zo&&i instanceof zo?Vo(r.elements,i.elements,ir):r instanceof Kl&&i instanceof Kl?ir(r.Pe,i.Pe):r instanceof Gl&&i instanceof Gl}(t.transform,e.transform)}class GL{constructor(e,n){this.version=e,this.transformResults=n}}class Bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ld{}function Ik(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ck(t.key,Bn.none()):new wu(t.key,t.data,Bn.none());{const n=t.data,r=Xt.empty();let i=new Rt(_t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fi(t.key,r,new hn(i.toArray()),Bn.none())}}function KL(t,e,n){t instanceof wu?function(i,s,o){const a=i.value.clone(),u=eE(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fi?function(i,s,o){if(!qc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=eE(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Sk(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fl(t,e,n,r){return t instanceof wu?function(s,o,a,u){if(!qc(s.precondition,o))return a;const c=s.value.clone(),h=tE(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fi?function(s,o,a,u){if(!qc(s.precondition,o))return a;const c=tE(s.fieldTransforms,u,o),h=o.data;return h.setAll(Sk(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return qc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function QL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=vk(r.transform,i||null);s!=null&&(n===null&&(n=Xt.empty()),n.set(r.field,s))}return n||null}function Z0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vo(r,i,(s,o)=>qL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wu extends Ld{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fi extends Ld{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Sk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function eE(t,e,n){const r=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,HL(o,a,n[i]))}return r}function tE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$L(s,o,e))}return r}class Ck extends Ld{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YL extends Ld{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&KL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Ik(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Vo(this.mutations,e.mutations,(n,r)=>Z0(n,r))&&Vo(this.baseMutations,e.baseMutations,(n,r)=>Z0(n,r))}}class O_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){we(e.mutations.length===r.length);let i=function(){return UL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new O_(e,n,r,i)}}/**
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
 */class JL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,fe;function eM(t){switch(t){default:return ne();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function kk(t){if(t===void 0)return Vr("GRPC error has no .code"),M.UNKNOWN;switch(t){case Xe.OK:return M.OK;case Xe.CANCELLED:return M.CANCELLED;case Xe.UNKNOWN:return M.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return M.INTERNAL;case Xe.UNAVAILABLE:return M.UNAVAILABLE;case Xe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Xe.NOT_FOUND:return M.NOT_FOUND;case Xe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Xe.ABORTED:return M.ABORTED;case Xe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Xe.DATA_LOSS:return M.DATA_LOSS;default:return ne()}}(fe=Xe||(Xe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function tM(){return new TextEncoder}/**
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
 */const nM=new cs([4294967295,4294967295],0);function nE(t){const e=tM().encode(t),n=new KC;return n.update(e),new Uint8Array(n.digest())}function rE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cs([n,r],0),new cs([i,s],0)]}class L_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Za(`Invalid padding: ${n}`);if(r<0)throw new Za(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Za(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Za(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=cs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(cs.fromNumber(r)));return i.compare(nM)===1&&(i=new cs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=nE(e),[r,i]=rE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new L_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=nE(e),[r,i]=rE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Eu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Md(re.min(),i,new it(ge),Fr(),de())}}class Eu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Eu(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Rk{constructor(e,n){this.targetId=e,this.me=n}}class Ak{constructor(e,n,r=vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class iE{constructor(){this.fe=0,this.ge=oE(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=de(),n=de(),r=de();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new Eu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=oE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fr(),this.qe=sE(),this.Qe=new it(ge)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(jm(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,jt.newNoDocument(o,re.min()))}else we(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ws(r).toUint8Array()}catch(u){if(u instanceof rk)return vs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new L_(o,i,s)}catch(u){return vs(u instanceof Za?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&jm(a.target)){const u=new Q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,jt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=de();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Md(e,n,this.Qe,this.ke,r);return this.ke=Fr(),this.qe=sE(),this.Qe=new it(ge),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new iE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Rt(ge),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new iE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function sE(){return new it(Q.comparator)}function oE(){return new it(Q.comparator)}const iM={asc:"ASCENDING",desc:"DESCENDING"},sM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oM={and:"AND",or:"OR"};class aM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bm(t,e){return t.useProto3Json||xd(e)?e:{value:e}}function Oh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lM(t,e){return Oh(t,e.toTimestamp())}function nr(t){return we(!!t),re.fromTimestamp(function(n){const r=Ci(n);return new rt(r.seconds,r.nanos)}(t))}function M_(t,e){return zm(t,e).canonicalString()}function zm(t,e){const n=function(i){return new Ne(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Pk(t){const e=Ne.fromString(t);return we(Lk(e)),e}function Wm(t,e){return M_(t.databaseId,e.path)}function pp(t,e){const n=Pk(e);if(n.get(1)!==t.databaseId.projectId)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(bk(n))}function Nk(t,e){return M_(t.databaseId,e)}function uM(t){const e=Pk(t);return e.length===4?Ne.emptyPath():bk(e)}function $m(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bk(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function aE(t,e,n){return{name:Wm(t,e),fields:n.value.mapValue.fields}}function cM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(we(h===void 0||typeof h=="string"),vt.fromBase64String(h||"")):(we(h===void 0||h instanceof Buffer||h instanceof Uint8Array),vt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?M.UNKNOWN:kk(c.code);return new $(h,c.message||"")}(o);n=new Ak(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pp(t,r.document.name),s=nr(r.document.updateTime),o=r.document.createTime?nr(r.document.createTime):re.min(),a=new Xt({mapValue:{fields:r.document.fields}}),u=jt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Gc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pp(t,r.document),s=r.readTime?nr(r.readTime):re.min(),o=jt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Gc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pp(t,r.document),s=r.removedTargetIds||[];n=new Gc([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZL(i,s),a=r.targetId;n=new Rk(a,o)}}return n}function hM(t,e){let n;if(e instanceof wu)n={update:aE(t,e.key,e.value)};else if(e instanceof Ck)n={delete:Wm(t,e.key)};else if(e instanceof Fi)n={update:aE(t,e.key,e.data),updateMask:wM(e.fieldMask)};else{if(!(e instanceof YL))return ne();n={verify:Wm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Gl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Bo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Kl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne()}(t,e.precondition)),n}function dM(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?nr(i.updateTime):nr(s);return o.isEqual(re.min())&&(o=nr(s)),new GL(o,i.transformResults||[])}(n,e))):[]}function fM(t,e){return{documents:[Nk(t,e.path)]}}function pM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Nk(t,i);const s=function(c){if(c.length!==0)return Ok(Hn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Xs(p.field),direction:_M(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Bm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function mM(t){let e=uM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=Dk(f);return p instanceof Hn&&ak(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(E){return new ql(Js(E.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,xd(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,y=f.values||[];return new bh(y,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,y=f.values||[];return new bh(y,p)}(n.endAt)),LL(e,i,o,s,a,"F",u,c)}function gM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Js(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Js(n.unaryFilter.field);return Ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Js(n.unaryFilter.field);return Ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Js(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(Js(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Hn.create(n.compositeFilter.filters.map(r=>Dk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function _M(t){return iM[t]}function yM(t){return sM[t]}function vM(t){return oM[t]}function Xs(t){return{fieldPath:t.canonicalString()}}function Js(t){return _t.fromServerFormat(t.fieldPath)}function Ok(t){return t instanceof Ze?function(n){if(n.op==="=="){if(G0(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NAN"}};if(q0(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(G0(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NAN"}};if(q0(n.value))return{unaryFilter:{field:Xs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xs(n.field),op:yM(n.op),value:n.value}}}(t):t instanceof Hn?function(n){const r=n.getFilters().map(i=>Ok(i));return r.length===1?r[0]:{compositeFilter:{op:vM(n.op),filters:r}}}(t):ne()}function wM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r,i,s=re.min(),o=re.min(),a=vt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.ct=e}}function TM(t){const e=mM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(){this.un=new SM}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Si.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class SM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Rt(Ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Rt(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Wo(0)}static kn(){return new Wo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(){this.changes=new la(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fl(r.mutation,i,hn.empty(),rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ja();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Fr();const o=dl(),a=function(){return dl()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Fi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),fl(h.mutation,c,h.mutation.getFieldMask(),rt.now())):o.set(c.key,hn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new kM(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=dl();let i=new it((o,a)=>o-a),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||hn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||de()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=gk();h.forEach(p=>{if(!s.has(p)){const y=Ik(n.get(p),r.get(p));y!==null&&f.set(p,y),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(ns());let a=-1,u=s;return o.next(c=>V.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,de())).next(h=>({batchId:a,changes:mk(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Ja();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ja();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,u=>{const c=function(f,p){return new aa(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,jt.newInvalidDocument(h)))});let a=Ja();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&fl(h.mutation,c,hn.empty(),rt.now()),bd(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nr(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:TM(i.bundledQuery),readTime:nr(i.readTime)}}(n)),V.resolve()}}/**
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
 */class xM{constructor(){this.overlays=new it(Q.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ns();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=ns(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new it((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ns(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ns(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return V.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JL(n,r));let s=this.Ir.get(n);s===void 0&&(s=de(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class PM{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.Tr=new Rt(ft.Er),this.dr=new Rt(ft.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ft(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new Ne([])),r=new ft(n,e),i=new ft(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new Ne([])),r=new ft(n,e),i=new ft(n,e+1);let s=de();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ft(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||ge(e.wr,n.wr)}static Ar(e,n){return ge(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Rt(ft.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new ft(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),i=new ft(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Rt(ge);return n.forEach(i=>{const s=new ft(i,0),o=new ft(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new ft(new Q(s),0);let a=new Rt(ge);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),V.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new ft(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ft(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(e){this.Mr=e,this.docs=function(){return new it(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=Fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():jt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fr();const o=n.path,a=new Q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gL(mL(h),r)<=0||(i.has(h.key)||bd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DM(this)}getSize(e){return V.resolve(this.size)}}class DM extends CM{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e){this.persistence=e,this.Nr=new la(n=>N_(n),b_),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new V_,this.targetCount=0,this.kr=Wo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Wo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e,n){this.qr={},this.overlays={},this.Qr=new R_(0),this.Kr=!1,this.Kr=!0,this.$r=new PM,this.referenceDelegate=e(this),this.Ur=new OM(this),this.indexManager=new IM,this.remoteDocumentCache=function(i){return new bM(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new EM(n),this.Gr=new AM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new NM(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new MM(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class MM extends yL{constructor(e){super(),this.currentSequenceNumber=e}}class F_{constructor(e){this.persistence=e,this.Jr=new V_,this.Yr=null}static Zr(e){return new F_(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new j_(e,n.fromCache,r,i)}}/**
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
 */class VM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Sb()?8:vL(Bt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new VM;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Fa()<=he.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Fa()<=he.DEBUG&&q("QueryEngine","Query:",Ys(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Fa()<=he.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(n))):V.resolve())}Yi(e,n){if(X0(n))return V.resolve(null);let r=tr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dh(n,null,"F"),r=tr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Dh(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return X0(n)||i.isEqual(re.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(Fa()<=he.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ys(n)),this.rs(e,o,n,pL(i,-1)).next(a=>a))})}ts(e,n){let r=new Rt(fk(e));return n.forEach((i,s)=>{bd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Fa()<=he.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ys(n)),this.Ji.getDocumentsMatchingQuery(e,n,Si.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new it(ge),this._s=new la(s=>N_(s),b_),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function UM(t,e,n,r){return new jM(t,e,n,r)}async function Mk(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=de();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function BM(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,p=f.keys();let y=V.resolve();return p.forEach(E=>{y=y.next(()=>h.getEntry(u,E)).next(A=>{const N=c.docVersions.get(E);we(N!==null),A.version.compareTo(N)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=de();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Vk(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function zM(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let y=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(vt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(f,y),function(A,N,S){return A.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,y,h)&&a.push(n.Ur.updateTargetData(s,y))});let u=Fr(),c=de();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(WM(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(re.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return V.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function WM(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function $M(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HM(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new li(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Hm(t,e,n){const r=ie(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vu(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function lE(t,e,n){const r=ie(t);let i=re.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ie(u),p=f._s.get(h);return p!==void 0?V.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,tr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:de())).next(a=>(qM(r,VL(e),a),{documents:a,Ts:s})))}function qM(t,e,n){let r=t.us.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class uE{constructor(){this.activeTargetIds=WL()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GM{constructor(){this.so=new uE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new uE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ec=null;function mp(){return Ec===null?Ec=function(){return 268435456+Math.round(2147483648*Math.random())}():Ec++,"0x"+Ec.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class XM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=mp(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(q("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw vs("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=QM[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=mp();return new Promise((o,a)=>{const u=new QC;u.setWithCredentials(!0),u.listenOnce(YC.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case $c.NO_ERROR:const h=u.getResponseJson();q(Mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case $c.TIMEOUT:q(Mt,`RPC '${e}' ${s} timed out`),a(new $(M.DEADLINE_EXCEEDED,"Request time out"));break;case $c.HTTP_ERROR:const f=u.getStatus();if(q(Mt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p==null?void 0:p.error;if(y&&y.status&&y.message){const E=function(N){const S=N.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(y.status);a(new $(E,y.message))}else a(new $(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new $(M.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{q(Mt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(Mt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=mp(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ZC(),a=JC(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");q(Mt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let p=!1,y=!1;const E=new YM({Io:N=>{y?q(Mt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(p||(q(Mt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),q(Mt,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},To:()=>f.close()}),A=(N,S,T)=>{N.listen(S,I=>{try{T(I)}catch(D){setTimeout(()=>{throw D},0)}})};return A(f,Xa.EventType.OPEN,()=>{y||(q(Mt,`RPC '${e}' stream ${i} transport opened.`),E.yo())}),A(f,Xa.EventType.CLOSE,()=>{y||(y=!0,q(Mt,`RPC '${e}' stream ${i} transport closed`),E.So())}),A(f,Xa.EventType.ERROR,N=>{y||(y=!0,vs(Mt,`RPC '${e}' stream ${i} transport errored:`,N),E.So(new $(M.UNAVAILABLE,"The operation could not be completed")))}),A(f,Xa.EventType.MESSAGE,N=>{var S;if(!y){const T=N.data[0];we(!!T);const I=T,D=I.error||((S=I[0])===null||S===void 0?void 0:S.error);if(D){q(Mt,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let j=function(C){const w=Xe[C];if(w!==void 0)return kk(w)}(F),k=D.message;j===void 0&&(j=M.INTERNAL,k="Unknown error status: "+F+" with message "+D.message),y=!0,E.So(new $(j,k)),f.close()}else q(Mt,`RPC '${e}' stream ${i} received:`,T),E.bo(T)}}),A(a,XC.STAT_EVENT,N=>{N.stat===Om.PROXY?q(Mt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Om.NOPROXY&&q(Mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function gp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t){return new aM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Fk(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Vr(n.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JM extends jk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=cM(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?nr(o.readTime):re.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=$m(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=jm(u)?{documents:fM(s,u)}:{query:pM(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xk(s,o.resumeToken);const c=Bm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=Oh(s,o.snapshotVersion.toTimestamp());const c=Bm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=gM(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=$m(this.serializer),n.removeTarget=e,this.a_(n)}}class ZM extends jk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=dM(e.writeResults,e.commitTime),r=nr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=$m(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>hM(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,zm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,zm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class tV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vr(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ms(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ie(u);c.L_.add(4),await Tu(c),c.q_.set("Unknown"),c.L_.delete(4),await Fd(c)}(this))})}),this.q_=new tV(r,i)}}async function Fd(t){if(Ms(t))for(const e of t.B_)await e(!0)}async function Tu(t){for(const e of t.B_)await e(!1)}function Uk(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),W_(n)?z_(n):ua(n).r_()&&B_(n,e))}function U_(t,e){const n=ie(t),r=ua(n);n.N_.delete(e),r.r_()&&Bk(n,e),n.N_.size===0&&(r.r_()?r.o_():Ms(n)&&n.q_.set("Unknown"))}function B_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ua(t).A_(e)}function Bk(t,e){t.Q_.xe(e),ua(t).R_(e)}function z_(t){t.Q_=new rM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ua(t).start(),t.q_.v_()}function W_(t){return Ms(t)&&!ua(t).n_()&&t.N_.size>0}function Ms(t){return ie(t).L_.size===0}function zk(t){t.Q_=void 0}async function rV(t){t.q_.set("Online")}async function iV(t){t.N_.forEach((e,n)=>{B_(t,e)})}async function sV(t,e){zk(t),W_(t)?(t.q_.M_(e),z_(t)):t.q_.set("Unknown")}async function oV(t,e,n){if(t.q_.set("Online"),e instanceof Ak&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lh(t,r)}else if(e instanceof Gc?t.Q_.Ke(e):e instanceof Rk?t.Q_.He(e):t.Q_.We(e),!n.isEqual(re.min()))try{const r=await Vk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(vt.EMPTY_BYTE_STRING,h.snapshotVersion)),Bk(s,u);const f=new li(h.target,u,c,h.sequenceNumber);B_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Lh(t,r)}}async function Lh(t,e,n){if(!vu(e))throw e;t.L_.add(1),await Tu(t),t.q_.set("Offline"),n||(n=()=>Vk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Fd(t)})}function Wk(t,e){return e().catch(n=>Lh(t,n,e))}async function jd(t){const e=ie(t),n=ki(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;aV(e);)try{const i=await $M(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,lV(e,i)}catch(i){await Lh(e,i)}$k(e)&&Hk(e)}function aV(t){return Ms(t)&&t.O_.length<10}function lV(t,e){t.O_.push(e);const n=ki(t);n.r_()&&n.V_&&n.m_(e.mutations)}function $k(t){return Ms(t)&&!ki(t).n_()&&t.O_.length>0}function Hk(t){ki(t).start()}async function uV(t){ki(t).p_()}async function cV(t){const e=ki(t);for(const n of t.O_)e.m_(n.mutations)}async function hV(t,e,n){const r=t.O_.shift(),i=O_.from(r,e,n);await Wk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jd(t)}async function dV(t,e){e&&ki(t).V_&&await async function(r,i){if(function(o){return eM(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();ki(r).s_(),await Wk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await jd(r)}}(t,e),$k(t)&&Hk(t)}async function hE(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Ms(n);n.L_.add(3),await Tu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Fd(n)}async function fV(t,e){const n=ie(t);e?(n.L_.delete(2),await Fd(n)):e||(n.L_.add(2),await Tu(n),n.q_.set("Unknown"))}function ua(t){return t.K_||(t.K_=function(n,r,i){const s=ie(n);return s.w_(),new JM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:rV.bind(null,t),Ro:iV.bind(null,t),mo:sV.bind(null,t),d_:oV.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),W_(t)?z_(t):t.q_.set("Unknown")):(await t.K_.stop(),zk(t))})),t.K_}function ki(t){return t.U_||(t.U_=function(n,r,i){const s=ie(n);return s.w_(),new ZM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:uV.bind(null,t),mo:dV.bind(null,t),f_:cV.bind(null,t),g_:hV.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await jd(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new $_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function H_(t,e){if(Vr("AsyncQueue",`${e}: ${t}`),vu(t))return new $(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Ja(),this.sortedSet=new it(this.comparator)}static emptySet(e){return new Io(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Io)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Io;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.W_=new it(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class $o{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $o(e,n,Io.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class mV{constructor(){this.queries=fE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ie(n),s=i.queries;i.queries=fE(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new $(M.ABORTED,"Firestore shutting down"))}}function fE(){return new la(t=>dk(t),Nd)}async function q_(t,e){const n=ie(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new pV,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=H_(o,`Initialization of query '${Ys(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&K_(n)}async function G_(t,e){const n=ie(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function gV(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&K_(n)}function _V(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function K_(t){t.Y_.forEach(e=>{e.next()})}var qm,pE;(pE=qm||(qm={})).ea="default",pE.Cache="cache";class Q_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $o(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=$o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==qm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.key=e}}class Gk{constructor(e){this.key=e}}class yV{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=de(),this.mutatedKeys=de(),this.Aa=fk(e),this.Ra=new Io(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new dE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),y=bd(this.query,f)?f:null,E=!!p&&this.mutatedKeys.has(p.key),A=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let N=!1;p&&y?p.data.isEqual(y.data)?E!==A&&(r.track({type:3,doc:y}),N=!0):this.ga(p,y)||(r.track({type:2,doc:y}),N=!0,(u&&this.Aa(y,u)>0||c&&this.Aa(y,c)<0)&&(a=!0)):!p&&y?(r.track({type:0,doc:y}),N=!0):p&&!y&&(r.track({type:1,doc:p}),N=!0,(u||c)&&(a=!0)),N&&(y?(o=o.add(y),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(y,E){const A=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return A(y)-A(E)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new $o(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new dE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=de(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Gk(r))}),this.da.forEach(r=>{e.has(r)||n.push(new qk(r))}),n}ba(e){this.Ta=e.Ts,this.da=de();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return $o.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class vV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wV{constructor(e){this.key=e,this.va=!1}}class EV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new la(a=>dk(a),Nd),this.Ma=new Map,this.xa=new Set,this.Oa=new it(Q.comparator),this.Na=new Map,this.La=new V_,this.Ba={},this.ka=new Map,this.qa=Wo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function TV(t,e,n=!0){const r=Zk(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Kk(r,e,n,!0),i}async function IV(t,e){const n=Zk(t);await Kk(n,e,!0,!1)}async function Kk(t,e,n,r){const i=await HM(t.localStore,tr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await SV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Uk(t.remoteStore,i),a}async function SV(t,e,n,r,i){t.Ka=(f,p,y)=>async function(A,N,S,T){let I=N.view.ma(S);I.ns&&(I=await lE(A.localStore,N.query,!1).then(({documents:k})=>N.view.ma(k,I)));const D=T&&T.targetChanges.get(N.targetId),F=T&&T.targetMismatches.get(N.targetId)!=null,j=N.view.applyChanges(I,A.isPrimaryClient,D,F);return gE(A,N.targetId,j.wa),j.snapshot}(t,f,p,y);const s=await lE(t.localStore,e,!0),o=new yV(e,s.Ts),a=o.ma(s.documents),u=Eu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);gE(t,n,c.wa);const h=new vV(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function CV(t,e,n){const r=ie(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Nd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Hm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&U_(r.remoteStore,i.targetId),Gm(r,i.targetId)}).catch(yu)):(Gm(r,i.targetId),await Hm(r.localStore,i.targetId,!0))}async function kV(t,e){const n=ie(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),U_(n.remoteStore,r.targetId))}async function RV(t,e,n){const r=OV(t);try{const i=await function(o,a){const u=ie(o),c=rt.now(),h=a.reduce((y,E)=>y.add(E.key),de());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let E=Fr(),A=de();return u.cs.getEntries(y,h).next(N=>{E=N,E.forEach((S,T)=>{T.isValidDocument()||(A=A.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,E)).next(N=>{f=N;const S=[];for(const T of a){const I=QL(T,f.get(T.key).overlayedDocument);I!=null&&S.push(new Fi(T.key,I,ik(I.value.mapValue),Bn.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,S,a)}).next(N=>{p=N;const S=N.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(y,N.batchId,S)})}).then(()=>({batchId:p.batchId,changes:mk(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new it(ge)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Iu(r,i.changes),await jd(r.remoteStore)}catch(i){const s=H_(i,"Failed to persist write");n.reject(s)}}async function Qk(t,e){const n=ie(t);try{const r=await zM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?we(o.va):i.removedDocuments.size>0&&(we(o.va),o.va=!1))}),await Iu(n,r,e)}catch(r){await yu(r)}}function mE(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ie(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&K_(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AV(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new it(Q.comparator);o=o.insert(s,jt.newNoDocument(s,re.min()));const a=de().add(s),u=new Md(re.min(),new Map,new it(ge),o,a);await Qk(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Y_(r)}else await Hm(r.localStore,e,!1).then(()=>Gm(r,e,n)).catch(yu)}async function xV(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await BM(n.localStore,e);Xk(n,r,null),Yk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Iu(n,i)}catch(i){await yu(i)}}async function PV(t,e,n){const r=ie(t);try{const i=await function(o,a){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(we(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Xk(r,e,n),Yk(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Iu(r,i)}catch(i){await yu(i)}}function Yk(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Xk(t,e,n){const r=ie(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Gm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Jk(t,r)})}function Jk(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(U_(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Y_(t))}function gE(t,e,n){for(const r of n)r instanceof qk?(t.La.addReference(r.key,e),NV(t,r)):r instanceof Gk?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Jk(t,r.key)):ne()}function NV(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Y_(t))}function Y_(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(Ne.fromString(e)),r=t.qa.next();t.Na.set(r,new wV(n)),t.Oa=t.Oa.insert(n,r),Uk(t.remoteStore,new li(tr(Pd(n.path)),r,"TargetPurposeLimboResolution",R_.oe))}}async function Iu(t,e,n){const r=ie(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=j_.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=ie(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(c,p=>V.forEach(p.$i,y=>h.persistence.referenceDelegate.addReference(f,p.targetId,y)).next(()=>V.forEach(p.Ui,y=>h.persistence.referenceDelegate.removeReference(f,p.targetId,y)))))}catch(f){if(!vu(f))throw f;q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const y=h.os.get(p),E=y.snapshotVersion,A=y.withLastLimboFreeSnapshotVersion(E);h.os=h.os.insert(p,A)}}}(r.localStore,s))}async function bV(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await Mk(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new $(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Iu(n,r.hs)}}function DV(t,e){const n=ie(t),r=n.Na.get(e);if(r&&r.va)return de().add(r.key);{let i=de();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function Zk(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AV.bind(null,e),e.Ca.d_=gV.bind(null,e.eventManager),e.Ca.$a=_V.bind(null,e.eventManager),e}function OV(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PV.bind(null,e),e}class Mh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return UM(this.persistence,new FM,e.initialUser,this.serializer)}Ga(e){return new LM(F_.Zr,this.serializer)}Wa(e){return new GM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mh.provider={build:()=>new Mh};class Km{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bV.bind(null,this.syncEngine),await fV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mV}()}createDatastore(e){const n=Vd(e.databaseInfo.databaseId),r=function(s){return new XM(s)}(e.databaseInfo);return function(s,o,a,u){return new eV(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new nV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>mE(this.syncEngine,n,0),function(){return cE.D()?new cE:new KM}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new EV(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ie(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Tu(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Km.provider={build:()=>new Km};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class X_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Vt.UNAUTHENTICATED,this.clientId=k_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=H_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _p(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Mk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _E(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MV(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>hE(e.remoteStore,i)),t._onlineComponents=e}async function MV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await _p(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;vs("Error using user provided cache. Falling back to memory cache: "+n),await _p(t,new Mh)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await _p(t,new Mh);return t._offlineComponents}async function eR(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await _E(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await _E(t,new Km))),t._onlineComponents}function VV(t){return eR(t).then(e=>e.syncEngine)}async function Vh(t){const e=await eR(t),n=e.eventManager;return n.onListen=TV.bind(null,e.syncEngine),n.onUnlisten=CV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=IV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=kV.bind(null,e.syncEngine),n}function FV(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new X_({next:p=>{h.Za(),o.enqueueAndForget(()=>G_(s,f));const y=p.docs.has(a);!y&&p.fromCache?c.reject(new $(M.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&u&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new Q_(Pd(a.path),h,{includeMetadataChanges:!0,_a:!0});return q_(s,f)}(await Vh(t),t.asyncQueue,e,n,r)),r.promise}function jV(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new X_({next:p=>{h.Za(),o.enqueueAndForget(()=>G_(s,f)),p.fromCache&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new Q_(a,h,{includeMetadataChanges:!0,_a:!0});return q_(s,f)}(await Vh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function tR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t,e,n){if(!n)throw new $(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rR(t,e,n,r){if(e===!0&&r===!0)throw new $(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vE(t){if(!Q.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wE(t){if(Q.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ud(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ud(t);throw new $(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function UV(t,e){if(e<=0)throw new $(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new EE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new EE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tk;switch(r.type){case"firstParty":return new uL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yE.get(n);r&&(q("ComponentProvider","Removing Datastore"),yE.delete(n),r.terminate())}(this),Promise.resolve()}}function iR(t,e,n,r={}){var i;const s=(t=sn(t,Bd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Vt.MOCK_USER;else{a=sC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Vt(c)}t._authCredentials=new oL(new ek(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lr(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class xr extends lr{constructor(e,n,r){super(e,n,Pd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new Q(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function Ri(t,e,...n){if(t=ye(t),nR("collection","path",e),t instanceof Bd){const r=Ne.fromString(e,...n);return wE(r),new xr(t,null,r)}{if(!(t instanceof At||t instanceof xr))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return wE(r),new xr(t.firestore,null,r)}}function qt(t,e,...n){if(t=ye(t),arguments.length===1&&(e=k_.newId()),nR("doc","path",e),t instanceof Bd){const r=Ne.fromString(e,...n);return vE(r),new At(t,null,new Q(r))}{if(!(t instanceof At||t instanceof xr))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return vE(r),new At(t.firestore,t instanceof xr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Fk(this,"async_queue_retry"),this.Vu=()=>{const r=gp();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=gp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=gp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ar;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!vu(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Vr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=$_.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function IE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class jr extends Bd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new TE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new TE(e),this._firestoreClient=void 0,await e}}}function sR(t,e){const n=typeof t=="object"?t:Cd(),r=typeof t=="string"?t:"(default)",i=Ds(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nC("firestore");s&&iR(i,...s)}return i}function Su(t){if(t._terminated)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||BV(t),t._firestoreClient}function BV(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new TL(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,tR(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new LV(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(vt.fromBase64String(e))}catch(n){throw new $(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */class Wd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV=/^__.*__$/;class WV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new wu(e,this.data,n,this.fieldTransforms)}}class oR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class $d{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new $d(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Fh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(aR(this.Cu)&&zV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class $V{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vd(e)}Qu(e,n,r,i=!1){return new $d({Cu:e,methodName:n,qu:r,path:_t.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hd(t){const e=t._freezeSettings(),n=Vd(t._databaseId);return new $V(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lR(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);ny("Data must be an object, but it was:",o,r);const a=cR(r,o);let u,c;if(s.merge)u=new hn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=Qm(e,f,n);if(!o.contains(p))throw new $(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);dR(h,p)||h.push(p)}u=new hn(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new WV(new Xt(a),u,c)}class qd extends ji{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qd}}function uR(t,e,n){return new $d({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class J_ extends ji{_toFieldTransform(e){return new Od(e.path,new Gl)}isEqual(e){return e instanceof J_}}class Z_ extends ji{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=uR(this,e,!0),r=this.Ku.map(s=>Vs(s,n)),i=new Bo(r);return new Od(e.path,i)}isEqual(e){return e instanceof Z_&&Oo(this.Ku,e.Ku)}}class ey extends ji{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=uR(this,e,!0),r=this.Ku.map(s=>Vs(s,n)),i=new zo(r);return new Od(e.path,i)}isEqual(e){return e instanceof ey&&Oo(this.Ku,e.Ku)}}class ty extends ji{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Kl(e.serializer,yk(e.serializer,this.$u));return new Od(e.path,n)}isEqual(e){return e instanceof ty&&this.$u===e.$u}}function HV(t,e,n,r){const i=t.Qu(1,e,n);ny("Data must be an object, but it was:",i,r);const s=[],o=Xt.empty();Ls(r,(u,c)=>{const h=ry(e,u,n);c=ye(c);const f=i.Nu(h);if(c instanceof qd)s.push(h);else{const p=Vs(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new hn(s);return new oR(o,a,i.fieldTransforms)}function qV(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Qm(e,r,n)],u=[i];if(s.length%2!=0)throw new $(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Qm(e,s[p])),u.push(s[p+1]);const c=[],h=Xt.empty();for(let p=a.length-1;p>=0;--p)if(!dR(c,a[p])){const y=a[p];let E=u[p];E=ye(E);const A=o.Nu(y);if(E instanceof qd)c.push(y);else{const N=Vs(E,A);N!=null&&(c.push(y),h.set(y,N))}}const f=new hn(c);return new oR(h,f,o.fieldTransforms)}function GV(t,e,n,r=!1){return Vs(n,t.Qu(r?4:3,e))}function Vs(t,e){if(hR(t=ye(t)))return ny("Unsupported field value:",e,t),cR(t,e);if(t instanceof ji)return function(r,i){if(!aR(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Vs(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=rt.fromDate(r);return{timestampValue:Oh(i.serializer,s)}}if(r instanceof rt){const s=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oh(i.serializer,s)}}if(r instanceof zd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:xk(i.serializer,r._byteString)};if(r instanceof At){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:M_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Wd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return D_(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ud(r)}`)}(t,e)}function cR(t,e){const n={};return nk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(t,(r,i)=>{const s=Vs(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function hR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof zd||t instanceof Ts||t instanceof At||t instanceof ji||t instanceof Wd)}function ny(t,e,n){if(!hR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ud(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Qm(t,e,n){if((e=ye(e))instanceof Cu)return e._internalPath;if(typeof e=="string")return ry(t,e);throw Fh("Field path arguments must be of type string or ",t,!1,void 0,n)}const KV=new RegExp("[~\\*/\\[\\]]");function ry(t,e,n){if(e.search(KV)>=0)throw Fh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cu(...e.split("."))._internalPath}catch{throw Fh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(M.INVALID_ARGUMENT,a+t+u)}function dR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QV extends fR{data(){return super.data()}}function Gd(t,e){return typeof e=="string"?ry(t,e):e instanceof Cu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iy{}class Kd extends iy{}function Ho(t,e,...n){let r=[];e instanceof iy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Qd).length,a=s.filter(u=>u instanceof ku).length;if(o>1||o>0&&a>0)throw new $(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ku extends Kd{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ku(e,n,r)}_apply(e){const n=this._parse(e);return gR(e._query,n),new lr(e.firestore,e.converter,Um(e._query,n))}_parse(e){const n=Hd(e.firestore);return function(s,o,a,u,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){CE(f,h);const y=[];for(const E of f)y.push(SE(u,s,E));p={arrayValue:{values:y}}}else p=SE(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||CE(f,h),p=GV(a,o,f,h==="in"||h==="not-in");return Ze.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qo(t,e,n){const r=e,i=Gd("where",t);return ku._create(i,r,n)}class Qd extends iy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)gR(o,u),o=Um(o,u)}(e._query,n),new lr(e.firestore,e.converter,Um(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yd extends Kd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Yd(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ql(s,o)}(e._query,this._field,this._direction);return new lr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new aa(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function mR(t,e="asc"){const n=e,r=Gd("orderBy",t);return Yd._create(r,n)}class Xd extends Kd{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Xd(e,n,r)}_apply(e){return new lr(e.firestore,e.converter,Dh(e._query,this._limit,this._limitType))}}function jh(t){return UV("limit",t),Xd._create("limit",t,"F")}function SE(t,e,n){if(typeof(n=ye(n))=="string"){if(n==="")throw new $(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hk(e)&&n.indexOf("/")!==-1)throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!Q.isDocumentKey(r))throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return H0(t,new Q(r))}if(n instanceof At)return H0(t,n._key);throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ud(n)}.`)}function CE(t,e){if(!Array.isArray(t)||t.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gR(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class _R{convertValue(e,n="none"){switch(Es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ls(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ke(o.doubleValue));return new Wd(s)}convertGeoPoint(e){return new zd(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=x_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($l(e));default:return null}}convertTimestamp(e){const n=Ci(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);we(Lk(r));const i=new Fo(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||Vr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sy extends fR{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pl extends sy{data(e={}){return super.data(e)}}class oy{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ho(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pl(this._firestore,this._userDataWriter,r.key,r,new ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new pl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new pl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:YV(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){t=sn(t,At);const e=sn(t.firestore,jr);return FV(Su(e),t._key).then(n=>ER(e,t,n))}class ay extends _R{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function Ql(t){t=sn(t,lr);const e=sn(t.firestore,jr),n=Su(e),r=new ay(e);return pR(t._query),jV(n,t._query).then(i=>new oy(e,r,t,i))}function vR(t,e,n){t=sn(t,At);const r=sn(t.firestore,jr),i=yR(t.converter,e);return Jd(r,[lR(Hd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Bn.none())])}function fn(t,e,n,...r){t=sn(t,At);const i=sn(t.firestore,jr),s=Hd(i);let o;return o=typeof(e=ye(e))=="string"||e instanceof Cu?qV(s,"updateDoc",t._key,e,n,r):HV(s,"updateDoc",t._key,e),Jd(i,[o.toMutation(t._key,Bn.exists(!0))])}function ly(t,e){const n=sn(t.firestore,jr),r=qt(t),i=yR(t.converter,e);return Jd(n,[lR(Hd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Bn.exists(!1))]).then(()=>r)}function wR(t,...e){var n,r,i;t=ye(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||IE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(IE(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof At)c=sn(t.firestore,jr),h=Pd(t._key.path),u={next:f=>{e[o]&&e[o](ER(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=sn(t,lr);c=sn(f.firestore,jr),h=f._query;const p=new ay(c);u={next:y=>{e[o]&&e[o](new oy(c,p,f,y))},error:e[o+1],complete:e[o+2]},pR(t._query)}return function(p,y,E,A){const N=new X_(A),S=new Q_(y,N,E);return p.asyncQueue.enqueueAndForget(async()=>q_(await Vh(p),S)),()=>{N.Za(),p.asyncQueue.enqueueAndForget(async()=>G_(await Vh(p),S))}}(Su(c),h,a,u)}function Jd(t,e){return function(r,i){const s=new Ar;return r.asyncQueue.enqueueAndForget(async()=>RV(await VV(r),i,s)),s.promise}(Su(t),e)}function ER(t,e,n){const r=n.docs.get(e._key),i=new ay(t);return new sy(t,i,e._key,r,new ho(n.hasPendingWrites,n.fromCache),e.converter)}function Au(){return new J_("serverTimestamp")}function Ym(...t){return new Z_("arrayUnion",t)}function Xm(...t){return new ey("arrayRemove",t)}function Yi(t){return new ty("increment",t)}(function(e,n=!0){(function(i){oa=i})(Os),$n(new kn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new jr(new aL(r.getProvider("auth-internal")),new hL(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fo(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),rn(U0,"4.7.3",e),rn(U0,"4.7.3","esm2017")})();const XV=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:_R,Bytes:Ts,CollectionReference:xr,DocumentReference:At,DocumentSnapshot:sy,FieldPath:Cu,FieldValue:ji,Firestore:jr,FirestoreError:$,GeoPoint:zd,Query:lr,QueryCompositeFilterConstraint:Qd,QueryConstraint:Kd,QueryDocumentSnapshot:pl,QueryFieldFilterConstraint:ku,QueryLimitConstraint:Xd,QueryOrderByConstraint:Yd,QuerySnapshot:oy,SnapshotMetadata:ho,Timestamp:rt,VectorValue:Wd,_AutoId:k_,_ByteString:vt,_DatabaseId:Fo,_DocumentKey:Q,_EmptyAuthCredentialsProvider:tk,_FieldPath:_t,_cast:sn,_logWarn:vs,_validateIsNotUsedTogether:rR,addDoc:ly,arrayRemove:Xm,arrayUnion:Ym,collection:Ri,connectFirestoreEmulator:iR,doc:qt,ensureFirestoreConfigured:Su,executeWrite:Jd,getDoc:Ru,getDocs:Ql,getFirestore:sR,increment:Yi,limit:jh,onSnapshot:wR,orderBy:mR,query:Ho,serverTimestamp:Au,setDoc:vR,updateDoc:fn,where:qo},Symbol.toStringTag,{value:"Module"}));var kE={};const RE="@firebase/database",AE="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TR="";function JV(t){TR=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),lt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ul(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ar(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ZV(e)}}catch{}return new eF},rs=IR("localStorage"),tF=IR("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Id("@firebase/database"),nF=function(){let t=1;return function(){return t++}}(),SR=function(t){const e=Lb(t),n=new Nb;n.update(e);const r=n.digest();return h_.encodeByteArray(r)},xu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=xu.apply(null,r):typeof r=="object"?e+=lt(r):e+=r,e+=" "}return e};let ml=null,xE=!0;const rF=function(t,e){B(!0,"Can't turn on custom loggers persistently."),So.logLevel=he.VERBOSE,ml=So.log.bind(So)},gt=function(...t){if(xE===!0&&(xE=!1,ml===null&&tF.get("logging_enabled")===!0&&rF()),ml){const e=xu.apply(null,t);ml(e)}},Pu=function(t){return function(...e){gt(t,...e)}},Jm=function(...t){const e="FIREBASE INTERNAL ERROR: "+xu(...t);So.error(e)},Ur=function(...t){const e=`FIREBASE FATAL ERROR: ${xu(...t)}`;throw So.error(e),new Error(e)},Gt=function(...t){const e="FIREBASE WARNING: "+xu(...t);So.warn(e)},iF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Go="[MIN_NAME]",Is="[MAX_NAME]",Fs=function(t,e){if(t===e)return 0;if(t===Go||e===Is)return-1;if(e===Go||t===Is)return 1;{const n=PE(t),r=PE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},oF=function(t,e){return t===e?0:t<e?-1:1},ja=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+lt(e))},uy=function(t){if(typeof t!="object"||t===null)return lt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=lt(e[r]),n+=":",n+=uy(t[e[r]]);return n+="}",n},CR=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kR=function(t){B(!Zd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let p=parseInt(h.substr(u,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},aF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uF(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const cF=new RegExp("^-?(0*)\\d{1,10}$"),hF=-2147483648,dF=2147483647,PE=function(t){if(cF.test(t)){const e=Number(t);if(e>=hF&&e<=dF)return e}return null},ca=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},fF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Gt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Gt(e)}}class Kc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="5",RR="v",AR="s",xR="r",PR="f",NR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bR="ls",DR="p",Zm="ac",OR="websocket",LR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function VR(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===OR)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===LR)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gF(t)&&(n.ns=t.namespace);const i=[];return wt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(){this.counters_={}}incrementCounter(e,n=1){ar(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp={},vp={};function hy(t){const e=t.toString();return yp[e]||(yp[e]=new _F),yp[e]}function yF(t,e){const n=t.toString();return vp[n]||(vp[n]=e()),vp[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ca(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="start",wF="close",EF="pLPCommand",TF="pRTLPCB",FR="id",jR="pw",UR="ser",IF="cb",SF="seg",CF="ts",kF="d",RF="dframe",BR=1870,zR=30,AF=BR-zR,xF=25e3,PF=3e4;class fo{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pu(e),this.stats_=hy(n),this.urlFn=u=>(this.appCheckToken&&(u[Zm]=this.appCheckToken),VR(n,LR,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(PF)),sF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dy((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===NE)this.id=a,this.password=u;else if(o===wF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[NE]="t",r[UR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[IF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[RR]=cy,this.transportSessionId&&(r[AR]=this.transportSessionId),this.lastSessionId&&(r[bR]=this.lastSessionId),this.applicationId&&(r[DR]=this.applicationId),this.appCheckToken&&(r[Zm]=this.appCheckToken),typeof location<"u"&&location.hostname&&NR.test(location.hostname)&&(r[xR]=PR);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fo.forceAllow_=!0}static forceDisallow(){fo.forceDisallow_=!0}static isAvailable(){return fo.forceAllow_?!0:!fo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aF()&&!lF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ZS(n),i=CR(r,AF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[RF]="t",r[FR]=e,r[jR]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=lt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class dy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nF(),window[EF+this.uniqueCallbackIdentifier]=e,window[TF+this.uniqueCallbackIdentifier]=n,this.myIFrame=dy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){gt("frame writing exception"),a.stack&&gt(a.stack),gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[FR]=this.myID,e[jR]=this.myPW,e[UR]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zR+r.length<=BR;){const o=this.pendingSegs.shift();r=r+"&"+SF+i+"="+o.seg+"&"+CF+i+"="+o.ts+"&"+kF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(xF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NF=16384,bF=45e3;let Uh=null;typeof MozWebSocket<"u"?Uh=MozWebSocket:typeof WebSocket<"u"&&(Uh=WebSocket);class Ln{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pu(this.connId),this.stats_=hy(n),this.connURL=Ln.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[RR]=cy,typeof location<"u"&&location.hostname&&NR.test(location.hostname)&&(o[xR]=PR),n&&(o[AR]=n),r&&(o[bR]=r),i&&(o[Zm]=i),s&&(o[DR]=s),VR(e,OR,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rs.set("previous_websocket_failure",!0);try{let r;Ib(),this.mySock=new Uh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ln.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Uh!==null&&!Ln.forceDisallow_}static previouslyFailed(){return rs.isInMemoryStorage||rs.get("previous_websocket_failure")===!0}markConnectionHealthy(){rs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ul(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=CR(n,NF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ln.responsesRequiredToBeHealthy=2;Ln.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fo,Ln]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ln&&Ln.isAvailable();let r=n&&!Ln.previouslyFailed();if(e.webSocketOnly&&(n||Gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ln];else{const i=this.transports_=[];for(const s of Yl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Yl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DF=6e4,OF=5e3,LF=10*1024,MF=100*1024,wp="t",bE="d",VF="s",DE="r",FF="e",OE="o",LE="a",ME="n",VE="p",jF="h";class UF{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pu("c:"+this.id+":"),this.transportManager_=new Yl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=gl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>MF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wp in e){const n=e[wp];n===LE?this.upgradeIfSecondaryHealthy_():n===DE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===OE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ja("t",e),r=ja("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:VE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:LE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ME,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ja("t",e),r=ja("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ja(wp,e);if(bE in e){const r=e[bE];if(n===jF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ME){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===VF?this.onConnectionShutdown_(r):n===DE?this.onReset_(r):n===FF?Jm("Server Error: "+r):n===OE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cy!==r&&Gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),gl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(OF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:VE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh extends $R{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!d_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Bh}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=32,jE=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Ee("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ai(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function fy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function BF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function HR(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Fe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ee(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function $t(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return $t(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zF(t,e){const n=Xl(t,0),r=Xl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Fs(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function py(t,e){if(Ai(t)!==Ai(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ai(t)>Ai(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class WF{constructor(e,n){this.errorPrefix_=n,this.parts_=Xl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Td(this.parts_[r]);qR(this)}}function $F(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Td(e),qR(t)}function HF(t){const e=t.parts_.pop();t.byteLength_-=Td(e),t.parts_.length>0&&(t.byteLength_-=1)}function qR(t){if(t.byteLength_>jE)throw new Error(t.errorPrefix_+"has a key path longer than "+jE+" bytes ("+t.byteLength_+").");if(t.parts_.length>FE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+FE+") or object contains a cycle "+Xi(t))}function Xi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends $R{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new my}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=1e3,qF=60*5*1e3,UE=30*1e3,GF=1.3,KF=3e4,QF="server_kill",BE=3;class Pr extends WR{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Pr.nextPersistentConnectionId_++,this.log_=Pu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ua,this.maxReconnectDelay_=qF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");my.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(lt(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Xn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;Pr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ar(e,"w")){const r=Do(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Pb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=UE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+lt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Jm("Unrecognized action received from server: "+lt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ua,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ua,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KF&&(this.reconnectDelay_=Ua),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*GF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new UF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Gt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(QF)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Gt(f),u())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ih(this.interruptReasons_)&&(this.reconnectDelay_=Ua,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>uy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=BE&&(this.reconnectDelay_=UE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=BE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+TR.replace(/\./g,"-")]=1,d_()?e["framework.cordova"]=1:oC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bh.getInstance().currentlyOnline();return Ih(this.interruptReasons_)&&e}}Pr.nextPersistentConnectionId_=0;Pr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ue(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ue(Go,e),i=new ue(Go,n);return this.compare(r,i)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;class GR extends ef{static get __EMPTY_NODE(){return Tc}static set __EMPTY_NODE(e){Tc=e}compare(e,n){return Fs(e.name,n.name)}isDefinedOn(e){throw ra("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(Is,Tc)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,Tc)}toString(){return".key"}}const Co=new GR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mt.RED,this.left=i??Zt.EMPTY_NODE,this.right=s??Zt.EMPTY_NODE}copy(e,n,r,i,s){return new mt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Zt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Zt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}mt.RED=!0;mt.BLACK=!1;class YF{copy(e,n,r,i,s){return this}insert(e,n,r){return new mt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Zt{constructor(e,n=Zt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Zt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,mt.BLACK,null,null))}remove(e){return new Zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,mt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ic(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ic(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ic(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ic(this.root_,null,this.comparator_,!0,e)}}Zt.EMPTY_NODE=new YF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XF(t,e){return Fs(t.name,e.name)}function gy(t,e){return Fs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg;function JF(t){eg=t}const KR=function(t){return typeof t=="number"?"number:"+kR(t):"string:"+t},QR=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ar(e,".sv"),"Priority must be a string or number.")}else B(t===eg||t.isEmpty(),"priority of unexpected type.");B(t===eg||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zE;class dt{constructor(e,n=dt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),QR(this.priorityNode_)}static set __childrenNodeConstructor(e){zE=e}static get __childrenNodeConstructor(){return zE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new dt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ae(e)===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:dt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||Ai(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,dt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+KR(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kR(this.value_):e+=this.value_,this.lazyHash_=SR(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===dt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof dt.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=dt.VALUE_TYPE_ORDER.indexOf(n),s=dt.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}dt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YR,XR;function ZF(t){YR=t}function e4(t){XR=t}class t4 extends ef{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Fs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(Is,new dt("[PRIORITY-POST]",XR))}makePost(e,n){const r=YR(e);return new ue(n,new dt("[PRIORITY-POST]",r))}toString(){return".priority"}}const je=new t4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4=Math.log(2);class r4{constructor(e){const n=s=>parseInt(Math.log(s)/n4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zh=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let f,p;if(h===0)return null;if(h===1)return f=t[u],p=n?n(f):f,new mt(p,f.node,mt.BLACK,null,null);{const y=parseInt(h/2,10)+u,E=i(u,y),A=i(y+1,c);return f=t[y],p=n?n(f):f,new mt(p,f.node,mt.BLACK,E,A)}},s=function(u){let c=null,h=null,f=t.length;const p=function(E,A){const N=f-E,S=f;f-=E;const T=i(N+1,S),I=t[N],D=n?n(I):I;y(new mt(D,I.node,A,null,T))},y=function(E){c?(c.left=E,c=E):(h=E,c=E)};for(let E=0;E<u.count;++E){const A=u.nextBitIsOne(),N=Math.pow(2,u.count-(E+1));A?p(N,mt.BLACK):(p(N,mt.BLACK),p(N,mt.RED))}return h},o=new r4(t.length),a=s(o);return new Zt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ep;const Ks={};class Sr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(Ks&&je,"ChildrenNode.ts has not been loaded"),Ep=Ep||new Sr({".priority":Ks},{".priority":je}),Ep}get(e){const n=Do(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Zt?n:null}hasIndex(e){return ar(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Co,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ue.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=zh(r,e.getCompare()):a=Ks;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new Sr(h,c)}addToIndexes(e,n){const r=Sh(this.indexes_,(i,s)=>{const o=Do(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===Ks)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ue.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),zh(a,o.getCompare())}else return Ks;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ue(e.name,a))),u.insert(e,e.node)}});return new Sr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Sh(this.indexes_,i=>{if(i===Ks)return i;{const s=n.get(e.name);return s?i.remove(new ue(e.name,s)):i}});return new Sr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;class Z{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&QR(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ba||(Ba=new Z(new Zt(gy),null,Sr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ba}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ba:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ue(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ba:this.priorityNode_;return new Z(i,o,s)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{B(ae(e)!==".priority"||Ai(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(je,(o,a)=>{n[o]=a.val(e),r++,s&&Z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+KR(this.getPriority().val())+":"),this.forEachChild(je,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":SR(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ue(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ue.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nu?-1:0}withIndex(e){if(e===Co||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Co||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(je),i=n.getIterator(je);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Co?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class i4 extends Z{constructor(){super(new Zt(gy),Z.EMPTY_NODE,Sr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const Nu=new i4;Object.defineProperties(ue,{MIN:{value:new ue(Go,Z.EMPTY_NODE)},MAX:{value:new ue(Is,Nu)}});GR.__EMPTY_NODE=Z.EMPTY_NODE;dt.__childrenNodeConstructor=Z;JF(Nu);e4(Nu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4=!0;function Ge(t,e=null){if(t===null)return Z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new dt(n,Ge(e))}if(!(t instanceof Array)&&s4){const n=[];let r=!1;if(wt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Ge(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ue(o,u)))}}),n.length===0)return Z.EMPTY_NODE;const s=zh(n,XF,o=>o.name,gy);if(r){const o=zh(n,je.getCompare());return new Z(s,Ge(e),new Sr({".priority":o},{".priority":je}))}else return new Z(s,Ge(e),Sr.Default)}else{let n=Z.EMPTY_NODE;return wt(t,(r,i)=>{if(ar(t,r)&&r.substring(0,1)!=="."){const s=Ge(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ge(e))}}ZF(Ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4 extends ef{constructor(e){super(),this.indexPath_=e,B(!le(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Fs(e.name,n.name):s}makePost(e,n){const r=Ge(e),i=Z.EMPTY_NODE.updateChild(this.indexPath_,r);return new ue(n,i)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,Nu);return new ue(Is,e)}toString(){return Xl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4 extends ef{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const r=Ge(e);return new ue(n,r)}toString(){return".value"}}const l4=new a4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){return{type:"value",snapshotNode:t}}function Ko(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Jl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function u4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Jl(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ko(n,r)):o.trackChildChange(Zl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(je,(i,s)=>{n.hasChild(i)||r.trackChildChange(Jl(i,s))}),n.isLeafNode()||n.forEachChild(je,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Zl(i,s,o))}else r.trackChildChange(Ko(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.indexedFilter_=new _y(e.getIndex()),this.index_=e.getIndex(),this.startPost_=eu.getStartPost_(e),this.endPost_=eu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ue(n,r))||(r=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Z.EMPTY_NODE);const s=this;return n.forEachChild(je,(o,a)=>{s.matches(new ue(o,a))||(i=i.updateImmediateChild(o,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new eu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ue(n,r))||(r=Z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Z.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,y)=>f(y,p)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new ue(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const y=p==null?1:o(p,u);if(h&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(Zl(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Jl(n,f));const A=a.updateImmediateChild(n,Z.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(Ko(p.name,p.node)),A.updateImmediateChild(p.name,p.node)):A}}else return r.isEmpty()?e:h&&o(c,u)>=0?(s!=null&&(s.trackChildChange(Jl(c.name,c.node)),s.trackChildChange(Ko(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Go}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Is}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===je}copy(){const e=new yy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function h4(t){return t.loadsAllData()?new _y(t.getIndex()):t.hasLimit()?new c4(t):new eu(t)}function WE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===je?n="$priority":t.index_===l4?n="$value":t.index_===Co?n="$key":(B(t.index_ instanceof o4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=lt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=lt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+lt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=lt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+lt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $E(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==je&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends WR{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Pu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Wh.getListenId_(e,r),a={};this.listens_[o]=a;const u=WE(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Do(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Wh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=WE(e._queryParams),r=e._path.toString(),i=new Xn;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ia(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Ul(a.responseText)}catch{Gt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Gt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){return{value:null,children:new Map}}function ha(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,$h());const i=t.children.get(r);e=Ce(e),ha(i,e,n)}}function tg(t,e){if(le(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(je,(r,i)=>{ha(t,new Ee(r),i)}),tg(t,e)}}else if(t.children.size>0){const n=ae(e);return e=Ce(e),t.children.has(n)&&tg(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function ng(t,e,n){t.value!==null?n(e,t.value):f4(t,(r,i)=>{const s=new Ee(e.toString()+"/"+r);ng(i,s,n)})}function f4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&wt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=10*1e3,m4=30*1e3,g4=5*60*1e3;class _4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new p4(e);const r=HE+(m4-HE)*Math.random();gl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;wt(e,(i,s)=>{s>0&&ar(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),gl(this.reportStats_.bind(this),Math.floor(Math.random()*2*g4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Vn||(Vn={}));function vy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ey(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Vn.ACK_USER_WRITE,this.source=vy()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Hh(_e(),n,this.revert)}}else return B(ae(this.path)===e,"operationForChild called for unrelated child."),new Hh(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){this.source=e,this.path=n,this.type=Vn.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new tu(this.source,_e()):new tu(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Vn.OVERWRITE}operationForChild(e){return le(this.path)?new Ss(this.source,_e(),this.snap.getImmediateChild(e)):new Ss(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Vn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Ss(this.source,_e(),n.value):new Qo(this.source,_e(),n)}else return B(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qo(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function v4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(u4(o.childName,o.snapshotNode))}),za(t,i,"child_removed",e,r,n),za(t,i,"child_added",e,r,n),za(t,i,"child_moved",s,r,n),za(t,i,"child_changed",e,r,n),za(t,i,"value",e,r,n),i}function za(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>E4(t,a,u)),o.forEach(a=>{const u=w4(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function w4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function E4(t,e,n){if(e.childName==null||n.childName==null)throw ra("Should only compare child_ events.");const r=new ue(e.childName,e.snapshotNode),i=new ue(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t,e){return{eventCache:t,serverCache:e}}function _l(t,e,n,r){return tf(new xi(e,n,r),t.serverCache)}function ZR(t,e,n,r){return tf(t.eventCache,new xi(e,n,r))}function qh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Cs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tp;const T4=()=>(Tp||(Tp=new Zt(oF)),Tp);class Re{constructor(e,n=T4()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return wt(e,(r,i)=>{n=n.set(new Ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(le(e))return null;{const r=ae(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:Fe(new Ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new Re(null)}}set(e,n){if(le(e))return new Re(n,this.children);{const r=ae(e),s=(this.children.get(r)||new Re(null)).set(Ce(e),n),o=this.children.insert(r,s);return new Re(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Re(null):new Re(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(le(e))return n;{const r=ae(e),s=(this.children.get(r)||new Re(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Re(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Fe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(le(e))return null;{const s=ae(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Fe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const i=ae(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Fe(n,i),r):new Re(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Fe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.writeTree_=e}static empty(){return new zn(new Re(null))}}function yl(t,e,n){if(le(e))return new zn(new Re(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=$t(i,e);return s=s.updateChild(o,n),new zn(t.writeTree_.set(i,s))}else{const i=new Re(n),s=t.writeTree_.setTree(e,i);return new zn(s)}}}function rg(t,e,n){let r=t;return wt(n,(i,s)=>{r=yl(r,Fe(e,i),s)}),r}function qE(t,e){if(le(e))return zn.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new zn(n)}}function ig(t,e){return js(t,e)!=null}function js(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($t(n.path,e)):null}function GE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(je,(r,i)=>{e.push(new ue(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ue(r,i.value))}),e}function wi(t,e){if(le(e))return t;{const n=js(t,e);return n!=null?new zn(new Re(n)):new zn(t.writeTree_.subtree(e))}}function sg(t){return t.writeTree_.isEmpty()}function Yo(t,e){return eA(_e(),t.writeTree_,e)}function eA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=eA(Fe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Fe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e){return iA(e,t)}function I4(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=yl(t.visibleWrites,e,n)),t.lastWriteId=r}function S4(t,e,n,r){B(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=rg(t.visibleWrites,e,n),t.lastWriteId=r}function C4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function k4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&R4(a,r.path)?i=!1:Tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return A4(t),!0;if(r.snap)t.visibleWrites=qE(t.visibleWrites,r.path);else{const a=r.children;wt(a,u=>{t.visibleWrites=qE(t.visibleWrites,Fe(r.path,u))})}return!0}else return!1}function R4(t,e){if(t.snap)return Tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tn(Fe(t.path,n),e))return!0;return!1}function A4(t){t.visibleWrites=tA(t.allWrites,x4,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function x4(t){return t.visible}function tA(t,e,n){let r=zn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Tn(n,o)?(a=$t(n,o),r=yl(r,a,s.snap)):Tn(o,n)&&(a=$t(o,n),r=yl(r,_e(),s.snap.getChild(a)));else if(s.children){if(Tn(n,o))a=$t(n,o),r=rg(r,a,s.children);else if(Tn(o,n))if(a=$t(o,n),le(a))r=rg(r,_e(),s.children);else{const u=Do(s.children,ae(a));if(u){const c=u.getChild(Ce(a));r=yl(r,_e(),c)}}}else throw ra("WriteRecord should have .snap or .children")}}return r}function nA(t,e,n,r,i){if(!r&&!i){const s=js(t.visibleWrites,e);if(s!=null)return s;{const o=wi(t.visibleWrites,e);if(sg(o))return n;if(n==null&&!ig(o,_e()))return null;{const a=n||Z.EMPTY_NODE;return Yo(o,a)}}}else{const s=wi(t.visibleWrites,e);if(!i&&sg(s))return n;if(!i&&n==null&&!ig(s,_e()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Tn(c.path,e)||Tn(e,c.path))},a=tA(t.allWrites,o,e),u=n||Z.EMPTY_NODE;return Yo(a,u)}}}function P4(t,e,n){let r=Z.EMPTY_NODE;const i=js(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(je,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=wi(t.visibleWrites,e);return n.forEachChild(je,(o,a)=>{const u=Yo(wi(s,new Ee(o)),a);r=r.updateImmediateChild(o,u)}),GE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=wi(t.visibleWrites,e);return GE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function N4(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Fe(e,n);if(ig(t.visibleWrites,s))return null;{const o=wi(t.visibleWrites,s);return sg(o)?i.getChild(n):Yo(o,i.getChild(n))}}function b4(t,e,n,r){const i=Fe(e,n),s=js(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=wi(t.visibleWrites,i);return Yo(o,r.getNode().getImmediateChild(n))}else return null}function D4(t,e){return js(t.visibleWrites,e)}function O4(t,e,n,r,i,s,o){let a;const u=wi(t.visibleWrites,e),c=js(u,_e());if(c!=null)a=c;else if(n!=null)a=Yo(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=p.getNext();for(;y&&h.length<i;)f(y,r)!==0&&h.push(y),y=p.getNext();return h}else return[]}function L4(){return{visibleWrites:zn.empty(),allWrites:[],lastWriteId:-1}}function Gh(t,e,n,r){return nA(t.writeTree,t.treePath,e,n,r)}function Ty(t,e){return P4(t.writeTree,t.treePath,e)}function KE(t,e,n,r){return N4(t.writeTree,t.treePath,e,n,r)}function Kh(t,e){return D4(t.writeTree,Fe(t.treePath,e))}function M4(t,e,n,r,i,s){return O4(t.writeTree,t.treePath,e,n,r,i,s)}function Iy(t,e,n){return b4(t.writeTree,t.treePath,e,n)}function rA(t,e){return iA(Fe(t.treePath,e),t.writeTree)}function iA(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Zl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Jl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ko(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Zl(r,e.snapshotNode,i.oldSnap));else throw ra("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const sA=new F4;class Sy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new xi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Iy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Cs(this.viewCache_),s=M4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j4(t){return{filter:t}}function U4(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function B4(t,e,n,r,i){const s=new V4;let o,a;if(n.type===Vn.OVERWRITE){const c=n;c.source.fromUser?o=og(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=Qh(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Vn.MERGE){const c=n;c.source.fromUser?o=W4(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ag(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Vn.ACK_USER_WRITE){const c=n;c.revert?o=q4(t,e,c.path,r,i,s):o=$4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Vn.LISTEN_COMPLETE)o=H4(t,e,n.path,r,s);else throw ra("Unknown operation type: "+n.type);const u=s.getChanges();return z4(e,o,u),{viewCache:o,changes:u}}function z4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=qh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(JR(qh(e)))}}function oA(t,e,n,r,i,s){const o=e.eventCache;if(Kh(r,n)!=null)return e;{let a,u;if(le(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Cs(e),h=c instanceof Z?c:Z.EMPTY_NODE,f=Ty(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Gh(r,Cs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ae(n);if(c===".priority"){B(Ai(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=KE(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ce(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const p=KE(r,n,o.getNode(),u);p!=null?f=o.getNode().getImmediateChild(c).updateChild(h,p):f=o.getNode().getImmediateChild(c)}else f=Iy(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return _l(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function Qh(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const y=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),y,null)}else{const y=ae(n);if(!u.isCompleteForPath(n)&&Ai(n)>1)return e;const E=Ce(n),N=u.getNode().getImmediateChild(y).updateChild(E,r);y===".priority"?c=h.updatePriority(u.getNode(),N):c=h.updateChild(u.getNode(),y,N,E,sA,null)}const f=ZR(e,c,u.isFullyInitialized()||le(n),h.filtersNodes()),p=new Sy(i,f,s);return oA(t,f,n,i,p,a)}function og(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new Sy(i,e,s);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=_l(e,c,!0,t.filter.filtersNodes());else{const f=ae(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=_l(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Ce(n),y=a.getNode().getImmediateChild(f);let E;if(le(p))E=r;else{const A=h.getCompleteChild(f);A!=null?fy(p)===".priority"&&A.getChild(HR(p)).isEmpty()?E=A:E=A.updateChild(p,r):E=Z.EMPTY_NODE}if(y.equals(E))u=e;else{const A=t.filter.updateChild(a.getNode(),f,E,p,h,o);u=_l(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function QE(t,e){return t.eventCache.isCompleteForChild(e)}function W4(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=Fe(n,u);QE(e,ae(h))&&(a=og(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=Fe(n,u);QE(e,ae(h))||(a=og(t,a,h,c,i,s,o))}),a}function YE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ag(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;le(n)?c=r:c=new Re(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),E=YE(t,y,p);u=Qh(t,u,new Ee(f),E,i,s,o,a)}}),c.children.inorderTraversal((f,p)=>{const y=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!y){const E=e.serverCache.getNode().getImmediateChild(f),A=YE(t,E,p);u=Qh(t,u,new Ee(f),A,i,s,o,a)}}),u}function $4(t,e,n,r,i,s,o){if(Kh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(le(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Qh(t,e,n,u.getNode().getChild(n),i,s,a,o);if(le(n)){let c=new Re(null);return u.getNode().forEachChild(Co,(h,f)=>{c=c.set(new Ee(h),f)}),ag(t,e,n,c,i,s,a,o)}else return e}else{let c=new Re(null);return r.foreach((h,f)=>{const p=Fe(n,h);u.isCompleteForPath(p)&&(c=c.set(h,u.getNode().getChild(p)))}),ag(t,e,n,c,i,s,a,o)}}function H4(t,e,n,r,i){const s=e.serverCache,o=ZR(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return oA(t,o,n,r,sA,i)}function q4(t,e,n,r,i,s){let o;if(Kh(r,n)!=null)return e;{const a=new Sy(r,e,i),u=e.eventCache.getNode();let c;if(le(n)||ae(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Gh(r,Cs(e));else{const f=e.serverCache.getNode();B(f instanceof Z,"serverChildren would be complete if leaf node"),h=Ty(r,f)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=ae(n);let f=Iy(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,Ce(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,Z.EMPTY_NODE,Ce(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gh(r,Cs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Kh(r,_e())!=null,_l(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new _y(r.getIndex()),s=h4(r);this.processor_=j4(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(Z.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Z.EMPTY_NODE,a.getNode(),null),h=new xi(u,o.isFullyInitialized(),i.filtersNodes()),f=new xi(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=tf(f,h),this.eventGenerator_=new y4(this.query_)}get query(){return this.query_}}function K4(t){return t.viewCache_.serverCache.getNode()}function Q4(t){return qh(t.viewCache_)}function Y4(t,e){const n=Cs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function XE(t){return t.eventRegistrations_.length===0}function X4(t,e){t.eventRegistrations_.push(e)}function JE(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function ZE(t,e,n,r){e.type===Vn.MERGE&&e.source.queryId!==null&&(B(Cs(t.viewCache_),"We should always have a full cache before handling merges"),B(qh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=B4(t.processor_,i,e,n,r);return U4(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,aA(t,s.changes,s.viewCache.eventCache.getNode(),null)}function J4(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(je,(s,o)=>{r.push(Ko(s,o))}),n.isFullyInitialized()&&r.push(JR(n.getNode())),aA(t,r,n.getNode(),e)}function aA(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return v4(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yh;class lA{constructor(){this.views=new Map}}function Z4(t){B(!Yh,"__referenceConstructor has already been defined"),Yh=t}function ej(){return B(Yh,"Reference.ts has not been loaded"),Yh}function tj(t){return t.views.size===0}function Cy(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),ZE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ZE(o,e,n,r));return s}}function uA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Gh(n,i?r:null),u=!1;a?u=!0:r instanceof Z?(a=Ty(n,r),u=!1):(a=Z.EMPTY_NODE,u=!1);const c=tf(new xi(a,u,!1),new xi(r,i,!1));return new G4(e,c)}return o}function nj(t,e,n,r,i,s){const o=uA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),X4(o,n),J4(o,n)}function rj(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Pi(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(JE(c,n,r)),XE(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(JE(u,n,r)),XE(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!Pi(t)&&s.push(new(ej())(e._repo,e._path)),{removed:s,events:o}}function cA(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ei(t,e){let n=null;for(const r of t.views.values())n=n||Y4(r,e);return n}function hA(t,e){if(e._queryParams.loadsAllData())return rf(t);{const r=e._queryIdentifier;return t.views.get(r)}}function dA(t,e){return hA(t,e)!=null}function Pi(t){return rf(t)!=null}function rf(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xh;function ij(t){B(!Xh,"__referenceConstructor has already been defined"),Xh=t}function sj(){return B(Xh,"Reference.ts has not been loaded"),Xh}let oj=1;class eT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=L4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fA(t,e,n,r,i){return I4(t.pendingWriteTree_,e,n,r,i),i?da(t,new Ss(vy(),e,n)):[]}function aj(t,e,n,r){S4(t.pendingWriteTree_,e,n,r);const i=Re.fromObject(n);return da(t,new Qo(vy(),e,i))}function ui(t,e,n=!1){const r=C4(t.pendingWriteTree_,e);if(k4(t.pendingWriteTree_,e)){let s=new Re(null);return r.snap!=null?s=s.set(_e(),!0):wt(r.children,o=>{s=s.set(new Ee(o),!0)}),da(t,new Hh(r.path,s,n))}else return[]}function bu(t,e,n){return da(t,new Ss(wy(),e,n))}function lj(t,e,n){const r=Re.fromObject(n);return da(t,new Qo(wy(),e,r))}function uj(t,e){return da(t,new tu(wy(),e))}function cj(t,e,n){const r=Ry(t,n);if(r){const i=Ay(r),s=i.path,o=i.queryId,a=$t(s,e),u=new tu(Ey(o),a);return xy(t,s,u)}else return[]}function Jh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||dA(o,e))){const u=rj(o,e,n,r);tj(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const h=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(p,y)=>Pi(y));if(h&&!f){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const y=fj(p);for(let E=0;E<y.length;++E){const A=y[E],N=A.query,S=_A(t,A);t.listenProvider_.startListening(vl(N),nu(t,N),S.hashFn,S.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(vl(e),null):c.forEach(p=>{const y=t.queryToTagMap.get(sf(p));t.listenProvider_.stopListening(vl(p),y)}))}pj(t,c)}return a}function pA(t,e,n,r){const i=Ry(t,r);if(i!=null){const s=Ay(i),o=s.path,a=s.queryId,u=$t(o,e),c=new Ss(Ey(a),u,n);return xy(t,o,c)}else return[]}function hj(t,e,n,r){const i=Ry(t,r);if(i){const s=Ay(i),o=s.path,a=s.queryId,u=$t(o,e),c=Re.fromObject(n),h=new Qo(Ey(a),u,c);return xy(t,o,h)}else return[]}function lg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,y)=>{const E=$t(p,i);s=s||Ei(y,E),o=o||Pi(y)});let a=t.syncPointTree_.get(i);a?(o=o||Pi(a),s=s||Ei(a,_e())):(a=new lA,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=Z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,E)=>{const A=Ei(E,_e());A&&(s=s.updateImmediateChild(y,A))}));const c=dA(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=sf(e);B(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const y=mj();t.queryToTagMap.set(p,y),t.tagToQueryMap.set(y,p)}const h=nf(t.pendingWriteTree_,i);let f=nj(a,e,n,h,s,u);if(!c&&!o&&!r){const p=hA(a,e);f=f.concat(gj(t,e,p))}return f}function ky(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=$t(o,e),c=Ei(a,u);if(c)return c});return nA(i,e,s,n,!0)}function dj(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=$t(c,n);r=r||Ei(h,f)});let i=t.syncPointTree_.get(n);i?r=r||Ei(i,_e()):(i=new lA,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new xi(r,!0,!1):null,a=nf(t.pendingWriteTree_,e._path),u=uA(i,e,a,s?o.getNode():Z.EMPTY_NODE,s);return Q4(u)}function da(t,e){return mA(e,t.syncPointTree_,null,nf(t.pendingWriteTree_,_e()))}function mA(t,e,n,r){if(le(t.path))return gA(t,e,n,r);{const i=e.get(_e());n==null&&i!=null&&(n=Ei(i,_e()));let s=[];const o=ae(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=rA(r,o);s=s.concat(mA(a,u,c,h))}return i&&(s=s.concat(Cy(i,t,r,n))),s}}function gA(t,e,n,r){const i=e.get(_e());n==null&&i!=null&&(n=Ei(i,_e()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=rA(r,o),h=t.operationForChild(o);h&&(s=s.concat(gA(h,a,u,c)))}),i&&(s=s.concat(Cy(i,t,r,n))),s}function _A(t,e){const n=e.query,r=nu(t,n);return{hashFn:()=>(K4(e)||Z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?cj(t,n._path,r):uj(t,n._path);{const s=uF(i,n);return Jh(t,n,null,s)}}}}function nu(t,e){const n=sf(e);return t.queryToTagMap.get(n)}function sf(t){return t._path.toString()+"$"+t._queryIdentifier}function Ry(t,e){return t.tagToQueryMap.get(e)}function Ay(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function xy(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=nf(t.pendingWriteTree_,e);return Cy(r,n,i,null)}function fj(t){return t.fold((e,n,r)=>{if(n&&Pi(n))return[rf(n)];{let i=[];return n&&(i=cA(n)),wt(r,(s,o)=>{i=i.concat(o)}),i}})}function vl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(sj())(t._repo,t._path):t}function pj(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=sf(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function mj(){return oj++}function gj(t,e,n){const r=e._path,i=nu(t,e),s=_A(t,n),o=t.listenProvider_.startListening(vl(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!Pi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!le(c)&&h&&Pi(h))return[rf(h).query];{let p=[];return h&&(p=p.concat(cA(h).map(y=>y.query))),wt(f,(y,E)=>{p=p.concat(E)}),p}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(vl(h),nu(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Py(n)}node(){return this.node_}}class Ny{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Fe(this.path_,e);return new Ny(this.syncTree_,n)}node(){return ky(this.syncTree_,this.path_)}}const _j=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},tT=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vj(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},vj=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},yA=function(t,e,n,r){return by(e,new Ny(n,t),r)},vA=function(t,e,n){return by(t,new Py(e),n)};function by(t,e,n){const r=t.getPriority().val(),i=tT(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=tT(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new dt(a,Ge(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new dt(i))),o.forEachChild(je,(a,u)=>{const c=by(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Oy(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,i=ae(n);for(;i!==null;){const s=Do(r.node.children,i)||{children:{},childCount:0};r=new Dy(i,r,s),n=Ce(n),i=ae(n)}return r}function fa(t){return t.node.value}function wA(t,e){t.node.value=e,ug(t)}function EA(t){return t.node.childCount>0}function wj(t){return fa(t)===void 0&&!EA(t)}function of(t,e){wt(t.node.children,(n,r)=>{e(new Dy(n,t,r))})}function TA(t,e,n,r){n&&e(t),of(t,i=>{TA(i,e,!0)})}function Ej(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Du(t){return new Ee(t.parent===null?t.name:Du(t.parent)+"/"+t.name)}function ug(t){t.parent!==null&&Tj(t.parent,t.name,t)}function Tj(t,e,n){const r=wj(n),i=ar(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ug(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ug(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ij=/[\[\].#$\/\u0000-\u001F\u007F]/,Sj=/[\[\].#$\u0000-\u001F\u007F]/,Ip=10*1024*1024,Ly=function(t){return typeof t=="string"&&t.length!==0&&!Ij.test(t)},IA=function(t){return typeof t=="string"&&t.length!==0&&!Sj.test(t)},Cj=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),IA(t)},SA=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Zd(t)||t&&typeof t=="object"&&ar(t,".sv")},Zh=function(t,e,n,r){r&&e===void 0||af(Lo(t,"value"),e,n)},af=function(t,e,n){const r=n instanceof Ee?new WF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xi(r));if(typeof e=="function")throw new Error(t+"contains a function "+Xi(r)+" with contents = "+e.toString());if(Zd(e))throw new Error(t+"contains "+e.toString()+" "+Xi(r));if(typeof e=="string"&&e.length>Ip/3&&Td(e)>Ip)throw new Error(t+"contains a string greater than "+Ip+" utf8 bytes "+Xi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(wt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ly(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$F(r,o),af(t,a,r),HF(r)}),i&&s)throw new Error(t+' contains ".value" child '+Xi(r)+" in addition to actual children.")}},kj=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Xl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ly(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(zF);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Tn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},CA=function(t,e,n,r){const i=Lo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];wt(e,(o,a)=>{const u=new Ee(o);if(af(i,a,Fe(n,u)),fy(u)===".priority"&&!SA(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),kj(i,s)},Rj=function(t,e,n){if(Zd(e))throw new Error(Lo(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!SA(e))throw new Error(Lo(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},kA=function(t,e,n,r){if(!IA(n))throw new Error(Lo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Aj=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kA(t,e,n)},is=function(t,e){if(ae(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},xj=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ly(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Cj(n))throw new Error(Lo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!py(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function RA(t,e,n){lf(t,n),AA(t,r=>py(r,e))}function An(t,e,n){lf(t,n),AA(t,r=>Tn(r,e)||Tn(e,r))}function AA(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Nj(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Nj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ml&&gt("event: "+n.toString()),ca(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bj="repo_interrupt",Dj=25;class Oj{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Pj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$h(),this.transactionQueueTree_=new Dy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lj(t,e,n){if(t.stats_=hy(t.repoInfo_),t.forceRestClient_||fF())t.server_=new Wh(t.repoInfo_,(r,i,s,o)=>{nT(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>rT(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{lt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Pr(t.repoInfo_,e,(r,i,s,o)=>{nT(t,r,i,s,o)},r=>{rT(t,r)},r=>{Mj(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=yF(t.repoInfo_,()=>new _4(t.stats_,t.server_)),t.infoData_=new d4,t.infoSyncTree_=new eT({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=bu(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),My(t,"connected",!1),t.serverSyncTree_=new eT({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);An(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function xA(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uf(t){return _j({timestamp:xA(t)})}function nT(t,e,n,r,i){t.dataUpdateCount++;const s=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Sh(n,c=>Ge(c));o=hj(t.serverSyncTree_,s,u,i)}else{const u=Ge(n);o=pA(t.serverSyncTree_,s,u,i)}else if(r){const u=Sh(n,c=>Ge(c));o=lj(t.serverSyncTree_,s,u)}else{const u=Ge(n);o=bu(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Xo(t,s)),An(t.eventQueue_,a,o)}function rT(t,e){My(t,"connected",e),e===!1&&Uj(t)}function Mj(t,e){wt(e,(n,r)=>{My(t,n,r)})}function My(t,e,n){const r=new Ee("/.info/"+e),i=Ge(n);t.infoData_.updateSnapshot(r,i);const s=bu(t.infoSyncTree_,r,i);An(t.eventQueue_,r,s)}function Vy(t){return t.nextWriteId_++}function Vj(t,e,n){const r=dj(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ge(i).withIndex(e._queryParams.getIndex());lg(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=bu(t.serverSyncTree_,e._path,s);else{const a=nu(t.serverSyncTree_,e);o=pA(t.serverSyncTree_,e._path,s,a)}return An(t.eventQueue_,e._path,o),Jh(t.serverSyncTree_,e,n,null,!0),s},i=>(Ou(t,"get for query "+lt(e)+" failed: "+i),Promise.reject(new Error(i))))}function Fj(t,e,n,r,i){Ou(t,"set",{path:e.toString(),value:n,priority:r});const s=uf(t),o=Ge(n,r),a=ky(t.serverSyncTree_,e),u=vA(o,a,s),c=Vy(t),h=fA(t.serverSyncTree_,e,u,c,!0);lf(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(p,y)=>{const E=p==="ok";E||Gt("set at "+e+" failed: "+p);const A=ui(t.serverSyncTree_,c,!E);An(t.eventQueue_,e,A),Ni(t,i,p,y)});const f=jy(t,e);Xo(t,f),An(t.eventQueue_,f,[])}function jj(t,e,n,r){Ou(t,"update",{path:e.toString(),value:n});let i=!0;const s=uf(t),o={};if(wt(n,(a,u)=>{i=!1,o[a]=yA(Fe(e,a),Ge(u),t.serverSyncTree_,s)}),i)gt("update() called with empty data.  Don't do anything."),Ni(t,r,"ok",void 0);else{const a=Vy(t),u=aj(t.serverSyncTree_,e,o,a);lf(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Gt("update at "+e+" failed: "+c);const p=ui(t.serverSyncTree_,a,!f),y=p.length>0?Xo(t,e):e;An(t.eventQueue_,y,p),Ni(t,r,c,h)}),wt(n,c=>{const h=jy(t,Fe(e,c));Xo(t,h)}),An(t.eventQueue_,e,[])}}function Uj(t){Ou(t,"onDisconnectEvents");const e=uf(t),n=$h();ng(t.onDisconnect_,_e(),(i,s)=>{const o=yA(i,s,t.serverSyncTree_,e);ha(n,i,o)});let r=[];ng(n,_e(),(i,s)=>{r=r.concat(bu(t.serverSyncTree_,i,s));const o=jy(t,i);Xo(t,o)}),t.onDisconnect_=$h(),An(t.eventQueue_,_e(),r)}function Bj(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&tg(t.onDisconnect_,e),Ni(t,n,r,i)})}function iT(t,e,n,r){const i=Ge(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&ha(t.onDisconnect_,e,i),Ni(t,r,s,o)})}function zj(t,e,n,r,i){const s=Ge(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&ha(t.onDisconnect_,e,s),Ni(t,i,o,a)})}function Wj(t,e,n,r){if(Ih(n)){gt("onDisconnect().update() called with empty data.  Don't do anything."),Ni(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&wt(n,(o,a)=>{const u=Ge(a);ha(t.onDisconnect_,Fe(e,o),u)}),Ni(t,r,i,s)})}function $j(t,e,n){let r;ae(e._path)===".info"?r=lg(t.infoSyncTree_,e,n):r=lg(t.serverSyncTree_,e,n),RA(t.eventQueue_,e._path,r)}function cg(t,e,n){let r;ae(e._path)===".info"?r=Jh(t.infoSyncTree_,e,n):r=Jh(t.serverSyncTree_,e,n),RA(t.eventQueue_,e._path,r)}function Hj(t){t.persistentConnection_&&t.persistentConnection_.interrupt(bj)}function Ou(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function Ni(t,e,n,r){e&&ca(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function PA(t,e,n){return ky(t.serverSyncTree_,e,n)||Z.EMPTY_NODE}function Fy(t,e=t.transactionQueueTree_){if(e||cf(t,e),fa(e)){const n=bA(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&qj(t,Du(e),n)}else EA(e)&&of(e,n=>{Fy(t,n)})}function qj(t,e,n){const r=n.map(c=>c.currentWriteId),i=PA(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=$t(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Ou(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(ui(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();cf(t,Oy(t.transactionQueueTree_,e)),Fy(t,t.transactionQueueTree_),An(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)ca(f[p])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Gt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Xo(t,e)}},o)}function Xo(t,e){const n=NA(t,e),r=Du(n),i=bA(t,n);return Gj(t,i,r),r}function Gj(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=$t(n,u.path);let h=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,i=i.concat(ui(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=Dj)h=!0,f="maxretry",i=i.concat(ui(t.serverSyncTree_,u.currentWriteId,!0));else{const p=PA(t,u.path,o);u.currentInputSnapshot=p;const y=e[a].update(p.val());if(y!==void 0){af("transaction failed: Data returned ",y,u.path);let E=Ge(y);typeof y=="object"&&y!=null&&ar(y,".priority")||(E=E.updatePriority(p.getPriority()));const N=u.currentWriteId,S=uf(t),T=vA(E,p,S);u.currentOutputSnapshotRaw=E,u.currentOutputSnapshotResolved=T,u.currentWriteId=Vy(t),o.splice(o.indexOf(N),1),i=i.concat(fA(t.serverSyncTree_,u.path,T,u.currentWriteId,u.applyLocally)),i=i.concat(ui(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",i=i.concat(ui(t.serverSyncTree_,u.currentWriteId,!0))}An(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}cf(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ca(r[a]);Fy(t,t.transactionQueueTree_)}function NA(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&fa(r)===void 0;)r=Oy(r,n),e=Ce(e),n=ae(e);return r}function bA(t,e){const n=[];return DA(t,e,n),n.sort((r,i)=>r.order-i.order),n}function DA(t,e,n){const r=fa(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);of(e,i=>{DA(t,i,n)})}function cf(t,e){const n=fa(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,wA(e,n.length>0?n:void 0)}of(e,r=>{cf(t,r)})}function jy(t,e){const n=Du(NA(t,e)),r=Oy(t.transactionQueueTree_,e);return Ej(r,i=>{Sp(t,i)}),Sp(t,r),TA(r,i=>{Sp(t,i)}),n}function Sp(t,e){const n=fa(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ui(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?wA(e,void 0):n.length=s+1,An(t.eventQueue_,Du(e),i);for(let o=0;o<r.length;o++)ca(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kj(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Qj(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Gt(`Invalid query segment '${n}' in query '${t}'`)}return e}const sT=function(t,e){const n=Yj(t),r=n.namespace;n.domain==="firebase.com"&&Ur(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ur("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||iF();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new MR(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},Yj=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=Kj(t.substring(h,f)));const p=Qj(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Xj=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=oT.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=oT.charAt(e[i]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+lt(this.snapshot.exportVal())}}class Zj{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class eU{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Xn;return Bj(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){is("OnDisconnect.remove",this._path);const e=new Xn;return iT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){is("OnDisconnect.set",this._path),Zh("OnDisconnect.set",e,this._path,!1);const n=new Xn;return iT(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){is("OnDisconnect.setWithPriority",this._path),Zh("OnDisconnect.setWithPriority",e,this._path,!1),Rj("OnDisconnect.setWithPriority",n);const r=new Xn;return zj(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){is("OnDisconnect.update",this._path),CA("OnDisconnect.update",e,this._path);const n=new Xn;return Wj(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return le(this._path)?null:fy(this._path)}get ref(){return new $r(this._repo,this._path)}get _queryIdentifier(){const e=$E(this._queryParams),n=uy(e);return n==="{}"?"default":n}get _queryObject(){return $E(this._queryParams)}isEqual(e){if(e=ye(e),!(e instanceof Uy))return!1;const n=this._repo===e._repo,r=py(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+BF(this._path)}}class $r extends Uy{constructor(e,n){super(e,n,new yy,!1)}get parent(){const e=HR(this._path);return e===null?null:new $r(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ru{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),r=iu(this.ref,e);return new ru(this._node.getChild(n),r,je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ru(i,iu(this.ref,r),je)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function et(t,e){return t=ye(t),t._checkNotDeleted("ref"),e!==void 0?iu(t._root,e):t._root}function iu(t,e){return t=ye(t),ae(t._path)===null?Aj("child","path",e):kA("child","path",e),new $r(t._repo,Fe(t._path,e))}function tU(t){return t=ye(t),new eU(t._repo,t._path)}function nU(t,e){t=ye(t),is("push",t._path),Zh("push",e,t._path,!0);const n=xA(t._repo),r=Xj(n),i=iu(t,r),s=iu(t,r);let o;return e!=null?o=ks(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function By(t){return is("remove",t._path),ks(t,null)}function ks(t,e){t=ye(t),is("set",t._path),Zh("set",e,t._path,!1);const n=new Xn;return Fj(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Br(t,e){CA("update",e,t._path);const n=new Xn;return jj(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function rU(t){t=ye(t);const e=new OA(()=>{}),n=new hf(e);return Vj(t._repo,t,n).then(r=>new ru(r,new $r(t._repo,t._path),t._queryParams.getIndex()))}class hf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Jj("value",this,new ru(e.snapshotNode,new $r(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Zj(this,e,n):null}matches(e){return e instanceof hf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function iU(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const u=n,c=(h,f)=>{cg(t._repo,t,a),u(h,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new OA(n,s||void 0),a=new hf(o);return $j(t._repo,t,a),()=>cg(t._repo,t,a)}function zy(t,e,n,r){return iU(t,"value",e,n,r)}function sU(t,e,n){cg(t._repo,t,null)}Z4($r);ij($r);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU="FIREBASE_DATABASE_EMULATOR_HOST",hg={};let aU=!1;function lU(t,e,n,r){t.repoInfo_=new MR(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function uU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ur("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=sT(s,i),a=o.repoInfo,u;typeof process<"u"&&kE&&(u=kE[oU]),u?(s=`http://${u}?ns=${a.namespace}`,o=sT(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new mF(t.name,t.options,e);xj("Invalid Firebase Database URL",o),le(o.path)||Ur("Database URL must point to the root of a Firebase Database (not including a child path).");const h=hU(a,t,c,new pF(t.name,n));return new dU(h,t)}function cU(t,e){const n=hg[e];(!n||n[t.key]!==t)&&Ur(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Hj(t),delete n[t.key]}function hU(t,e,n,r){let i=hg[e.name];i||(i={},hg[e.name]=i);let s=i[t.toURLString()];return s&&Ur("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Oj(t,aU,n,r),i[t.toURLString()]=s,s}class dU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $r(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ur("Cannot call "+e+" on a deleted database.")}}function fU(t=Cd(),e){const n=Ds(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=nC("database");r&&pU(n,...r)}return n}function pU(t,e,n,r={}){t=ye(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ur("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ur('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Kc(Kc.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:sC(r.mockUserToken,t.app.options.projectId);s=new Kc(o)}lU(i,e,n,s)}/**
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
 */function mU(t){JV(Os),$n(new kn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return uU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),rn(RE,AE,t),rn(RE,AE,"esm2017")}Pr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};mU();const LA="@firebase/installations",Wy="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=1e4,VA=`w:${Wy}`,FA="FIS_v2",gU="https://firebaseinstallations.googleapis.com/v1",_U=60*60*1e3,yU="installations",vU="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rs=new bs(yU,vU,wU);function jA(t){return t instanceof or&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA({projectId:t}){return`${gU}/projects/${t}/installations`}function BA(t){return{token:t.token,requestStatus:2,expiresIn:TU(t.expiresIn),creationTime:Date.now()}}async function zA(t,e){const r=(await e.json()).error;return Rs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function WA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function EU(t,{refreshToken:e}){const n=WA(t);return n.append("Authorization",IU(e)),n}async function $A(t){const e=await t();return e.status>=500&&e.status<600?t():e}function TU(t){return Number(t.replace("s","000"))}function IU(t){return`${FA} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SU({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=UA(t),i=WA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:FA,appId:t.appId,sdkVersion:VA},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await $A(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:BA(c.authToken)}}else throw await zA("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CU(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kU=/^[cdef][\w-]{21}$/,dg="";function RU(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=AU(t);return kU.test(n)?n:dg}catch{return dg}}function AU(t){return CU(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new Map;function GA(t,e){const n=df(t);KA(n,e),xU(n,e)}function KA(t,e){const n=qA.get(t);if(n)for(const r of n)r(e)}function xU(t,e){const n=PU();n&&n.postMessage({key:t,fid:e}),NU()}let ss=null;function PU(){return!ss&&"BroadcastChannel"in self&&(ss=new BroadcastChannel("[Firebase] FID Change"),ss.onmessage=t=>{KA(t.data.key,t.data.fid)}),ss}function NU(){qA.size===0&&ss&&(ss.close(),ss=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU="firebase-installations-database",DU=1,As="firebase-installations-store";let Cp=null;function $y(){return Cp||(Cp=Sd(bU,DU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(As)}}})),Cp}async function ed(t,e){const n=df(t),i=(await $y()).transaction(As,"readwrite"),s=i.objectStore(As),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&GA(t,e.fid),e}async function QA(t){const e=df(t),r=(await $y()).transaction(As,"readwrite");await r.objectStore(As).delete(e),await r.done}async function ff(t,e){const n=df(t),i=(await $y()).transaction(As,"readwrite"),s=i.objectStore(As),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&GA(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hy(t){let e;const n=await ff(t.appConfig,r=>{const i=OU(r),s=LU(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===dg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function OU(t){const e=t||{fid:RU(),registrationStatus:0};return YA(e)}function LU(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Rs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=MU(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:VU(t)}:{installationEntry:e}}async function MU(t,e){try{const n=await SU(t,e);return ed(t.appConfig,n)}catch(n){throw jA(n)&&n.customData.serverCode===409?await QA(t.appConfig):await ed(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function VU(t){let e=await aT(t.appConfig);for(;e.registrationStatus===1;)await HA(100),e=await aT(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hy(t);return r||n}return e}function aT(t){return ff(t,e=>{if(!e)throw Rs.create("installation-not-found");return YA(e)})}function YA(t){return FU(t)?{fid:t.fid,registrationStatus:0}:t}function FU(t){return t.registrationStatus===1&&t.registrationTime+MA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jU({appConfig:t,heartbeatServiceProvider:e},n){const r=UU(t,n),i=EU(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:VA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await $A(()=>fetch(r,a));if(u.ok){const c=await u.json();return BA(c)}else throw await zA("Generate Auth Token",u)}function UU(t,{fid:e}){return`${UA(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(t,e=!1){let n;const r=await ff(t.appConfig,s=>{if(!XA(s))throw Rs.create("not-registered");const o=s.authToken;if(!e&&WU(o))return s;if(o.requestStatus===1)return n=BU(t,e),s;{if(!navigator.onLine)throw Rs.create("app-offline");const a=HU(s);return n=zU(t,a),a}});return n?await n:r.authToken}async function BU(t,e){let n=await lT(t.appConfig);for(;n.authToken.requestStatus===1;)await HA(100),n=await lT(t.appConfig);const r=n.authToken;return r.requestStatus===0?qy(t,e):r}function lT(t){return ff(t,e=>{if(!XA(e))throw Rs.create("not-registered");const n=e.authToken;return qU(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function zU(t,e){try{const n=await jU(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ed(t.appConfig,r),n}catch(n){if(jA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await QA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ed(t.appConfig,r)}throw n}}function XA(t){return t!==void 0&&t.registrationStatus===2}function WU(t){return t.requestStatus===2&&!$U(t)}function $U(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+_U}function HU(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function qU(t){return t.requestStatus===1&&t.requestTime+MA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GU(t){const e=t,{installationEntry:n,registrationPromise:r}=await Hy(e);return r?r.catch(console.error):qy(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KU(t,e=!1){const n=t;return await QU(n),(await qy(n,e)).token}async function QU(t){const{registrationPromise:e}=await Hy(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YU(t){if(!t||!t.options)throw kp("App Configuration");if(!t.name)throw kp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw kp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function kp(t){return Rs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="installations",XU="installations-internal",JU=t=>{const e=t.getProvider("app").getImmediate(),n=YU(e),r=Ds(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ZU=t=>{const e=t.getProvider("app").getImmediate(),n=Ds(e,JA).getImmediate();return{getId:()=>GU(n),getToken:i=>KU(n,i)}};function eB(){$n(new kn(JA,JU,"PUBLIC")),$n(new kn(XU,ZU,"PRIVATE"))}eB();rn(LA,Wy);rn(LA,Wy,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tB="/firebase-messaging-sw.js",nB="/firebase-cloud-messaging-push-scope",ZA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",rB="https://fcmregistrations.googleapis.com/v1",ex="google.c.a.c_id",iB="google.c.a.c_l",sB="google.c.a.ts",oB="google.c.a.e";var uT;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(uT||(uT={}));/**
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
 */var su;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(su||(su={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function aB(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="fcm_token_details_db",lB=5,cT="fcm_token_object_Store";async function uB(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Rp))return null;let e=null;return(await Sd(Rp,lB,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(cT))return;const u=o.objectStore(cT),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:gr(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:gr(h.auth),p256dh:gr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:gr(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:gr(h.auth),p256dh:gr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:gr(h.vapidKey)}}}}}})).close(),await up(Rp),await up("fcm_vapid_details_db"),await up("undefined"),cB(e)?e:null}function cB(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hB="firebase-messaging-database",dB=1,xs="firebase-messaging-store";let Ap=null;function Gy(){return Ap||(Ap=Sd(hB,dB,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xs)}}})),Ap}async function tx(t){const e=Qy(t),r=await(await Gy()).transaction(xs).objectStore(xs).get(e);if(r)return r;{const i=await uB(t.appConfig.senderId);if(i)return await Ky(t,i),i}}async function Ky(t,e){const n=Qy(t),i=(await Gy()).transaction(xs,"readwrite");return await i.objectStore(xs).put(e,n),await i.done,e}async function fB(t){const e=Qy(t),r=(await Gy()).transaction(xs,"readwrite");await r.objectStore(xs).delete(e),await r.done}function Qy({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pB={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},xt=new bs("messaging","Messaging",pB);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mB(t,e){const n=await Xy(t),r=rx(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Yy(t.appConfig),i)).json()}catch(o){throw xt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw xt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw xt.create("token-subscribe-no-token");return s.token}async function gB(t,e){const n=await Xy(t),r=rx(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Yy(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw xt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw xt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw xt.create("token-update-no-token");return s.token}async function nx(t,e){const r={method:"DELETE",headers:await Xy(t)};try{const s=await(await fetch(`${Yy(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw xt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw xt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Yy({projectId:t}){return`${rB}/projects/${t}/registrations`}async function Xy({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function rx({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==ZA&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _B=7*24*60*60*1e3;async function yB(t){const e=await EB(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:gr(e.getKey("auth")),p256dh:gr(e.getKey("p256dh"))},r=await tx(t.firebaseDependencies);if(r){if(TB(r.subscriptionOptions,n))return Date.now()>=r.createTime+_B?wB(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await nx(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return hT(t.firebaseDependencies,n)}else return hT(t.firebaseDependencies,n)}async function vB(t){const e=await tx(t.firebaseDependencies);e&&(await nx(t.firebaseDependencies,e.token),await fB(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function wB(t,e){try{const n=await gB(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Ky(t.firebaseDependencies,r),n}catch(n){throw n}}async function hT(t,e){const r={token:await mB(t,e),createTime:Date.now(),subscriptionOptions:e};return await Ky(t,r),r.token}async function EB(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:aB(e)})}function TB(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return IB(e,t),SB(e,t),CB(e,t),e}function IB(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function SB(t,e){e.data&&(t.data=e.data)}function CB(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kB(t){return typeof t=="object"&&!!t&&ex in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RB(t){if(!t||!t.options)throw xp("App Configuration Object");if(!t.name)throw xp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw xp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function xp(t){return xt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AB{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=RB(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(t){try{t.swRegistration=await navigator.serviceWorker.register(tB,{scope:nB}),t.swRegistration.update().catch(()=>{})}catch(e){throw xt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xB(t,e){if(!e&&!t.swRegistration&&await ix(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw xt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PB(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=ZA)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e){if(!navigator)throw xt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw xt.create("permission-blocked");return await PB(t,e==null?void 0:e.vapidKey),await xB(t,e==null?void 0:e.serviceWorkerRegistration),yB(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NB(t,e,n){const r=bB(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[ex],message_name:n[iB],message_time:n[sB],message_device_time:Math.floor(Date.now()/1e3)})}function bB(t){switch(t){case su.NOTIFICATION_CLICKED:return"notification_open";case su.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DB(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===su.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(dT(n)):t.onMessageHandler.next(dT(n)));const r=n.data;kB(r)&&r[oB]==="1"&&await NB(t,n.messageType,r)}const fT="@firebase/messaging",pT="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OB=t=>{const e=new AB(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>DB(e,n)),e},LB=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>sx(e,r)}};function MB(){$n(new kn("messaging",OB,"PUBLIC")),$n(new kn("messaging-internal",LB,"PRIVATE")),rn(fT,pT),rn(fT,pT,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(){try{await lC()}catch{return!1}return typeof window<"u"&&aC()&&Cb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VB(t){if(!navigator)throw xt.create("only-available-in-window");return t.swRegistration||await ix(t),vB(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FB(t,e){if(!navigator)throw xt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t=Cd()){return Jy().then(e=>{if(!e)throw xt.create("unsupported-browser")},e=>{throw xt.create("indexed-db-unsupported")}),Ds(ye(t),"messaging").getImmediate()}async function jB(t,e){return t=ye(t),sx(t,e)}function UB(t){return t=ye(t),VB(t)}function BB(t,e){return t=ye(t),FB(t,e)}MB();const ax=Object.freeze(Object.defineProperty({__proto__:null,deleteToken:UB,getMessaging:ox,getToken:jB,isSupported:Jy,onMessage:BB},Symbol.toStringTag,{value:"Module"})),zB={apiKey:"AIzaSyAbAb2YcqvSaahSV_UITjQtk8UArYSaDdY",authDomain:"dingo-new-version.firebaseapp.com",databaseURL:"https://dingo-new-version-default-rtdb.firebaseio.com",projectId:"dingo-new-version",storageBucket:"dingo-new-version.firebasestorage.app",messagingSenderId:"245470329002",appId:"1:245470329002:web:f0fae2a906e773629578d3"},WB="GG6zruC_lQSTKwuBvOudnROxxtXFMGufChhrzU7M6vQ",pf=dC(zB),Lu=nL(pf),Ye=sR(pf),tt=fU(pf);let ou=null;Jy().then(t=>{t&&(ou=ox(pf))}).catch(()=>{});const $B="modulepreload",HB=function(t,e){return new URL(t,e).href},mT={},Zy=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=HB(c,r),c in mT)return;mT[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!r)for(let E=o.length-1;E>=0;E--){const A=o[E];if(A.href===c&&(!h||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":$B,h||(y.as="script"),y.crossOrigin="",y.href=c,u&&y.setAttribute("nonce",u),document.head.appendChild(y),h)return new Promise((E,A)=>{y.addEventListener("load",E),y.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};async function lx(t,e){const n=qt(Ye,"users",t);(await Ru(n)).exists()?await fn(n,{isOnline:!0}):await vR(n,{displayName:e.displayName||"Player",email:e.email||"",avatar:e.avatar||"🎯",color:e.color||"#00ffcc",wins:0,losses:0,total:0,winRate:0,friends:[],isOnline:!0,fcmToken:null,createdAt:Au()})}async function qB(t){const e=await Ru(qt(Ye,"users",t));return e.exists()?{uid:t,...e.data()}:null}async function GB(t,e){await fn(qt(Ye,"users",t),e)}async function gT(t,e){try{await fn(qt(Ye,"users",t),{isOnline:e,lastSeen:Au()})}catch{}}async function KB(t,e){await fn(qt(Ye,"users",t),{fcmToken:e})}async function QB(t){const{collection:e,query:n,where:r,getDocs:i}=await Zy(async()=>{const{collection:a,query:u,where:c,getDocs:h}=await Promise.resolve().then(()=>XV);return{collection:a,query:u,where:c,getDocs:h}},void 0,import.meta.url),s=n(e(Ye,"users"),r("displayName",">=",t),r("displayName","<=",t+""));return(await i(s)).docs.map(a=>({uid:a.id,...a.data()}))}const YB=new yr;function XB(t){return $D(Lu,t)}async function JB(t,e){return(await jD(Lu,t,e)).user}async function ZB(t,e,n){const r=await FD(Lu,t,e);return await BD(r.user,{displayName:n}),await lx(r.user.uid,{displayName:n,email:t,avatar:"🎯",color:"#00ffcc"}),r.user}async function e3(){const t=await hO(Lu,YB);return await lx(t.user.uid,{displayName:t.user.displayName||"Player",email:t.user.email,avatar:"🎯",color:"#00ffcc"}),t.user}async function ux(){await HD(Lu)}const cx=O.createContext(null);function ur(){return O.useContext(cx)}function t3({children:t}){const[e,n]=O.useState(null),[r,i]=O.useState(null),[s,o]=O.useState(!0),a=async u=>{if(!u)return;const c=await qB(u);i(c)};return O.useEffect(()=>{const u=XB(async h=>{n(h),h?(await a(h.uid),gT(h.uid,!0)):i(null),o(!1)}),c=()=>{e&&gT(e.uid,!1)};return window.addEventListener("beforeunload",c),()=>{u(),window.removeEventListener("beforeunload",c)}},[]),g.jsx(cx.Provider,{value:{user:e,profile:r,loading:s,refreshProfile:a},children:t})}function n3(){const[t,e]=O.useState([]);return O.useEffect(()=>{const n=r=>{const i=Date.now();e(s=>[...s,{id:i,...r.detail}]),setTimeout(()=>{e(s=>s.filter(o=>o.id!==i))},3500)};return window.addEventListener("dingo-toast",n),()=>window.removeEventListener("dingo-toast",n)},[]),t.length?g.jsx("div",{className:"toast-container",children:t.map(n=>g.jsx("div",{className:`toast ${n.type||"info"}`,children:g.jsxs("div",{children:[g.jsx("div",{className:"toast-title",children:n.title}),n.body&&g.jsx("div",{className:"toast-body",children:n.body})]})},n.id))}):null}let r3=null;async function i3(t){if(!ou)return null;try{const{getToken:e}=await Zy(async()=>{const{getToken:i}=await Promise.resolve().then(()=>ax);return{getToken:i}},void 0,import.meta.url);if(await Notification.requestPermission()!=="granted")return null;const r=await e(ou,{vapidKey:WB});return r&&(r3=r,await KB(t,r)),r}catch(e){return console.warn("Notification setup failed:",e),null}}function s3(t){if(!ou)return()=>{};Zy(async()=>{const{onMessage:e}=await Promise.resolve().then(()=>ax);return{onMessage:e}},void 0,import.meta.url).then(({onMessage:e})=>{e(ou,n=>{t(n)})})}function os(t,e,n="info"){const r=new CustomEvent("dingo-toast",{detail:{title:t,body:e,type:n}});window.dispatchEvent(r)}const o3=[{icon:"🎯",title:"Your Unique Board",desc:"You and your opponent each get a 5×5 grid with the same 25 numbers (1–25) arranged in different random positions."},{icon:"📣",title:"Call a Number",desc:'On your turn, tap any number on your board to "call" it. That number instantly gets marked on BOTH boards — wherever it appears.'},{icon:"📏",title:"Complete Lines",desc:"Mark 5 numbers in a row — horizontally, vertically, or diagonally — to complete a line. Each player is racing to form lines on their own board layout."},{icon:"🏆",title:"Win the Match",desc:"First player to complete 5 full lines wins! If the last call completes both boards simultaneously, it's a TIE and both players earn a point."},{icon:"❤️",title:"5 Chances Per Player",desc:"Each player has 5 lives. If your timer runs out, you auto-pick a random number and lose one life. Lose all 5 lives and your opponent wins automatically."},{icon:"🎁",title:"Lifelines",desc:"Use your 5 lifelines strategically: ⏰ Extra time, 💡 Best move hint, 2️⃣ Pick twice, 🎯 50/50 hints, 🛡️ Shield against timeout."},{icon:"🤖",title:"Solo vs Bot",desc:"Not ready for live players? Challenge one of 6 AI difficulty levels — from Easy all the way up to GodMode."}];function a3(){const t=sr(),[e,n]=O.useState(!1);return g.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px 48px",overflowY:"auto",WebkitOverflowScrolling:"touch"},children:[g.jsxs("div",{style:{position:"relative",marginBottom:6,textAlign:"center"},children:[g.jsx("div",{style:{position:"absolute",top:6,left:6,right:0,fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--c1)",lineHeight:.9,opacity:.25,letterSpacing:-2,pointerEvents:"none",userSelect:"none"},children:"DiNGo"}),g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:"clamp(80px,22vw,130px)",color:"var(--ink)",lineHeight:.9,letterSpacing:-2,position:"relative",textShadow:"0 0 40px rgba(0,255,204,0.2)"},children:"DiNGo"})]}),g.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"var(--panel2)",border:"2px solid var(--c1)",borderRadius:"var(--r)",padding:"5px 14px",fontSize:9,letterSpacing:3,textTransform:"uppercase",fontWeight:700,color:"var(--c1)",marginBottom:28},children:[g.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),"Live Multiplayer Bingo"]}),g.jsxs("p",{style:{fontSize:15,color:"var(--ink2)",textAlign:"center",maxWidth:280,lineHeight:1.75,marginBottom:32},children:["Call numbers. Build lines.",g.jsx("br",{}),g.jsx("strong",{style:{color:"var(--ink)"},children:"Beat your opponent to 5."})]}),g.jsx("div",{style:{display:"flex",width:"100%",maxWidth:340,border:"2px solid var(--edge2)",borderRadius:"var(--r)",overflow:"hidden",marginBottom:36},children:[{n:"5×5",l:"Grid"},{n:"6",l:"AI Levels"},{n:"5",l:"Lifelines"}].map((r,i)=>g.jsxs("div",{style:{flex:1,textAlign:"center",padding:"14px 0",background:"var(--panel)",borderRight:i<2?"2px solid var(--edge2)":"none"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,color:"var(--ink)"},children:r.n}),g.jsx("div",{style:{fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:r.l})]},i))}),g.jsxs("div",{style:{width:"100%",maxWidth:340,display:"flex",flexDirection:"column",gap:12},children:[g.jsx("button",{className:"btn btn-primary btn-full",style:{fontSize:16,padding:"16px 0",letterSpacing:2,boxShadow:"0 0 24px rgba(0,255,204,0.3), 4px 4px 0 rgba(0,255,204,0.2)"},onClick:()=>t("/login"),children:"🎮 Get Started"}),g.jsx("button",{className:"btn btn-ghost btn-full",style:{borderColor:"rgba(0,255,204,0.35)",color:"var(--c1)",fontSize:13},onClick:()=>n(!0),children:"📖 How to Play"})]}),e&&g.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.9)",display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>n(!1),children:g.jsxs("div",{style:{background:"var(--panel)",borderRadius:"20px 20px 0 0",border:"2px solid var(--edge2)",borderBottom:"none",width:"100%",maxWidth:480,maxHeight:"88vh",overflowY:"auto",WebkitOverflowScrolling:"touch"},onClick:r=>r.stopPropagation(),children:[g.jsx("div",{style:{height:4,background:"linear-gradient(90deg,var(--c1),var(--c2),var(--c3),var(--c4))",borderRadius:"20px 20px 0 0"}}),g.jsxs("div",{style:{padding:"18px 18px 36px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:22},children:[g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:24,letterSpacing:3},children:"HOW TO PLAY"}),g.jsx("button",{onClick:()=>n(!1),style:{background:"none",border:"2px solid var(--edge2)",color:"var(--ink2)",width:34,height:34,borderRadius:8,cursor:"pointer",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),o3.map((r,i)=>g.jsxs("div",{style:{display:"flex",gap:14,marginBottom:22,alignItems:"flex-start"},children:[g.jsx("div",{style:{fontSize:32,flexShrink:0,lineHeight:1,width:52,height:52,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--panel2)",borderRadius:12,border:"2px solid var(--edge2)"},children:r.icon}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:800,fontSize:14,marginBottom:4},children:r.title}),g.jsx("div",{style:{fontSize:13,color:"var(--ink2)",lineHeight:1.6},children:r.desc})]})]},i)),g.jsx("button",{className:"btn btn-primary btn-full",style:{marginTop:4,fontSize:14},onClick:()=>n(!1),children:"Got it! Let's Play 🎮"})]})]})})]})}function l3(){const[t,e]=O.useState("login"),[n,r]=O.useState(""),[i,s]=O.useState(""),[o,a]=O.useState(""),[u,c]=O.useState(""),[h,f]=O.useState(!1),p=async()=>{c(""),f(!0);try{if(t==="login")await JB(n,i);else{if(!o.trim()){c("Please enter your name"),f(!1);return}await ZB(n,i,o.trim())}}catch(E){c(_T(E.code))}f(!1)},y=async()=>{c(""),f(!0);try{await e3()}catch(E){c(_T(E.code))}f(!1)};return g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:20,paddingTop:40},children:[g.jsxs("div",{className:"text-center",style:{marginBottom:28},children:[g.jsx("div",{className:"hero-logo","data-text":"DiNGo",style:{fontSize:"clamp(72px,18vw,100px)"},children:"DiNGo"}),g.jsx("div",{className:"sub",style:{marginTop:6,letterSpacing:2},children:"LIVE MULTIPLAYER BINGO"})]}),g.jsx("div",{className:"card",style:{maxWidth:400},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{style:{display:"flex",gap:8,marginBottom:20},children:["login","register"].map(E=>g.jsx("button",{className:`btn ${t===E?"btn-primary":"btn-ghost"}`,style:{flex:1},onClick:()=>{e(E),c("")},children:E==="login"?"Sign In":"Sign Up"},E))}),t==="register"&&g.jsxs("div",{style:{marginBottom:14},children:[g.jsx("div",{className:"label",children:"Your Name"}),g.jsx("input",{type:"text",placeholder:"KGames",value:o,onChange:E=>a(E.target.value),maxLength:20})]}),g.jsxs("div",{style:{marginBottom:14},children:[g.jsx("div",{className:"label",children:"Email"}),g.jsx("input",{type:"email",placeholder:"you@email.com",value:n,onChange:E=>r(E.target.value)})]}),g.jsxs("div",{style:{marginBottom:18},children:[g.jsx("div",{className:"label",children:"Password"}),g.jsx("input",{type:"password",placeholder:"••••••••",value:i,onChange:E=>s(E.target.value),onKeyDown:E=>E.key==="Enter"&&p()})]}),u&&g.jsx("div",{style:{background:"rgba(255,45,85,0.12)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px",marginBottom:14,fontSize:13,color:"var(--c2)"},children:u}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:p,disabled:h,children:h?"⏳ Please wait…":t==="login"?"🎮 Sign In":"🚀 Create Account"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,margin:"16px 0"},children:[g.jsx("div",{className:"divider",style:{flex:1}}),g.jsx("span",{className:"muted small",children:"or"}),g.jsx("div",{className:"divider",style:{flex:1}})]}),g.jsxs("button",{className:"btn btn-ghost btn-full",onClick:y,disabled:h,style:{border:"2px solid var(--edge2)"},children:[g.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",width:18,alt:""}),"Continue with Google"]})]})})]})}function _T(t){switch(t){case"auth/user-not-found":return"No account with that email.";case"auth/wrong-password":return"Wrong password. Try again.";case"auth/email-already-in-use":return"Email already in use. Try signing in.";case"auth/weak-password":return"Password must be at least 6 characters.";case"auth/invalid-email":return"Invalid email address.";case"auth/popup-closed-by-user":return"Google sign-in was cancelled.";default:return"Something went wrong. Please try again."}}function u3(){try{return new(window.AudioContext||window.webkitAudioContext)}catch{return null}}let Hi=null;function ev(){return Hi||(Hi=u3()),(Hi==null?void 0:Hi.state)==="suspended"&&Hi.resume(),Hi}const hx={click:()=>rr(880,.05,"square",.1),cross:()=>rr(660,.1,"square",.15),line:()=>mf([523,659,784],.2),win:()=>gf(),lose:()=>_f(),ping:()=>rr(1200,.05,"sine",.08)},c3={click:()=>y3(.03,80),cross:()=>Qc(800,200,.12,"sawtooth"),line:()=>mf([400,500,600],.18,"sawtooth"),win:()=>gf(1.2),lose:()=>_f(.8),ping:()=>rr(1400,.03,"sine",.06)},h3={click:()=>Qc(300,600,.08,"sine"),cross:()=>Qc(600,100,.15,"sine"),line:()=>mf([261,329,392],.25,"sine"),win:()=>gf(.9),lose:()=>_f(.7),ping:()=>Qc(800,1200,.06,"sine")},d3={click:()=>rr(220,.04,"sine",.2),cross:()=>rr(330,.06,"sine",.25),line:()=>mf([261,329,392],.12,"sine"),win:()=>gf(.6),lose:()=>_f(.5),ping:()=>rr(440,.03,"sine",.15)},f3={classic:hx,ninja:c3,space:h3,lofi:d3},p3=[{id:"classic",name:"Classic",icon:"🎮",desc:"Retro 8-bit bleeps"},{id:"ninja",name:"Ninja",icon:"🥷",desc:"Sharp sword slashes"},{id:"space",name:"Space",icon:"🌌",desc:"Sci-fi laser sounds"},{id:"lofi",name:"LoFi",icon:"🎵",desc:"Chill warm tones"}];function Jo(){const t=localStorage.getItem("sfxTheme")||"classic",e=f3[t]||hx,n=localStorage.getItem("sfxMuted")==="true";return{click:()=>!n&&e.click(),cross:()=>!n&&e.cross(),line:()=>!n&&e.line(),win:()=>!n&&e.win(),lose:()=>!n&&e.lose(),ping:()=>!n&&e.ping()}}function m3(t){localStorage.setItem("sfxTheme",t)}function g3(){const t=localStorage.getItem("sfxMuted")==="true";return localStorage.setItem("sfxMuted",String(!t)),!t}function _3(){return localStorage.getItem("sfxMuted")==="true"}function rr(t,e=.1,n="sine",r=.1){const i=ev();if(!i)return;const s=i.createOscillator(),o=i.createGain();s.connect(o),o.connect(i.destination),s.type=n,s.frequency.value=t,o.gain.setValueAtTime(e,i.currentTime),o.gain.exponentialRampToValueAtTime(.001,i.currentTime+r),s.start(),s.stop(i.currentTime+r)}function Qc(t,e,n=.1,r="sine"){const i=ev();if(!i)return;const s=i.createOscillator(),o=i.createGain();s.connect(o),o.connect(i.destination),s.type=r,s.frequency.setValueAtTime(t,i.currentTime),s.frequency.exponentialRampToValueAtTime(e,i.currentTime+.15),o.gain.setValueAtTime(n,i.currentTime),o.gain.exponentialRampToValueAtTime(.001,i.currentTime+.15),s.start(),s.stop(i.currentTime+.15)}function mf(t,e=.1,n="sine"){t.forEach((r,i)=>{setTimeout(()=>rr(r,e,n,.3),i*60)})}function y3(t=.05,e=100){const n=ev();if(!n)return;const r=n.createBuffer(1,n.sampleRate*.05,n.sampleRate),i=r.getChannelData(0);for(let u=0;u<i.length;u++)i[u]=Math.random()*2-1;const s=n.createBufferSource(),o=n.createBiquadFilter(),a=n.createGain();s.buffer=r,o.type="highpass",o.frequency.value=e,s.connect(o),o.connect(a),a.connect(n.destination),a.gain.setValueAtTime(t,n.currentTime),a.gain.exponentialRampToValueAtTime(.001,n.currentTime+.05),s.start(),s.stop(n.currentTime+.05)}function gf(t=1){[523,659,784,1047].forEach((n,r)=>{setTimeout(()=>rr(n,.15,"square",.2/t),r*100/t)})}function _f(t=1){[400,320,250].forEach((n,r)=>{setTimeout(()=>rr(n,.1,"sawtooth",.25/t),r*120/t)})}function v3(t,e,n){const r=et(tt,`online/${t}`),i={uid:t,name:e,avatar:n,ts:Date.now()};ks(r,i).catch(()=>{}),tU(r).remove();const s=setInterval(()=>{ks(r,{...i,ts:Date.now()}).catch(()=>{})},25e3);return()=>{clearInterval(s),By(r).catch(()=>{})}}function w3(t){const e=et(tt,"online");return zy(e,r=>{t(r.exists()?Object.keys(r.val()||{}).length:0)},()=>t(0))}function E3(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function T3(t,e,n,r){await ks(et(tt,`queue/${t}`),{uid:t,name:e,avatar:n,board:r,timestamp:Date.now(),roomId:null,role:null})}function wl(t){By(et(tt,`queue/${t}`)).catch(()=>{})}function I3(t,e,n,r,i){const s=et(tt,"queue"),o=zy(s,async a=>{var E;const u=a.val();if(!u||!u[t])return;if(u[t].roomId){o(),wl(t),i(u[t].roomId,u[t].role||"p2");return}const c=Object.entries(u).filter(([A,N])=>A!==t&&!N.roomId).sort((A,N)=>A[1].timestamp-N[1].timestamp);if(c.length===0)return;const[h,f]=c[0];if((((E=u[t])==null?void 0:E.timestamp)||0)>f.timestamp)return;const y=E3();try{await ks(et(tt,`rooms/${y}`),{gameState:{status:"playing",turn:"p1",p1Board:r,p2Board:f.board||[],calledNumbers:[],p1Lines:0,p2Lines:0,p1Chances:5,p2Chances:5,winner:null,tie:!1,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{uid:t,name:e,avatar:n||"🎯",role:"p1"},p2:{uid:h,name:f.name,avatar:f.avatar||"🎯",role:"p2"}},rematch:{p1:!1,p2:!1,newRoomId:null}}),await Br(et(tt,`queue/${t}`),{roomId:y,role:"p1"}),await Br(et(tt,`queue/${h}`),{roomId:y,role:"p2"}),o(),wl(t),i(y,"p1")}catch(A){console.error("Matchmaking error:",A)}});return o}const tv=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]];function td(){const t=Array.from({length:25},(e,n)=>n+1);for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Ct(t,e){if(!t||t.length===0)return 0;const n=new Set(e);return tv.filter(r=>r.every(i=>n.has(t[i]))).length}function dx(t,e){if(!t||t.length===0)return[];const n=new Set(e);return tv.filter(r=>r.every(i=>n.has(t[i])))}function S3(t,e){const n=new Set;return dx(t,e).forEach(r=>r.forEach(i=>n.add(i))),[...n]}function nd(t,e,n){const r=new Set([...e,n]);let i=0;for(const s of tv){const o=s.filter(a=>r.has(t[a])).length;o===5?i+=1e6:o===4?i+=5e4:o===3?i+=1e3:o===2?i+=20:o===1&&(i+=1)}return i}function Qs(t,e,n,r,i){const s=nd(t,n,r),o=nd(e,n,r);return s+o*i}function C3(t,e,n,r){var s;const i=Array.from({length:25},(o,a)=>a+1).filter(o=>!e.includes(o));if(i.length===0)return null;if(t==="easy")return i[Math.floor(Math.random()*i.length)];if(t==="medium")return i.reduce((o,a)=>nd(r,e,a)>nd(r,e,o)?a:o,i[0]);if(t==="hard"){for(const o of i)if(Ct(r,[...e,o])>=5)return o;for(const o of i)if(Ct(n,[...e,o])>=5)return o;return i.reduce((o,a)=>Qs(r,n,e,a,.4)>Qs(r,n,e,o,.4)?a:o,i[0])}if(t==="expert"){for(const o of i)if(Ct(r,[...e,o])>=5)return o;for(const o of i)if(Ct(n,[...e,o])>=5)return o;for(const o of i)if(Ct(n,[...e,o])>=4)return o;return i.reduce((o,a)=>Qs(r,n,e,a,.7)>Qs(r,n,e,o,.7)?a:o,i[0])}if(t==="nightmare"||t==="godmode"){for(const a of i)if(Ct(r,[...e,a])>=5)return a;for(const a of i)if(Ct(n,[...e,a])>=5)return a;if(t==="godmode"){const a=i.map(u=>({num:u,oppLines:Ct(n,[...e,u])})).sort((u,c)=>c.oppLines-u.oppLines);if(((s=a[0])==null?void 0:s.oppLines)>=4)return a[0].num}const o=t==="godmode"?1.2:.9;return i.reduce((a,u)=>Qs(r,n,e,u,o)>Qs(r,n,e,a,o)?u:a,i[0])}return i[Math.floor(Math.random()*i.length)]}const k3=[{icon:"🤖",title:"vs Bot",sub:"6 AI levels",path:"/bot"},{icon:"⚡",title:"Create Room",sub:"Invite a friend",path:"/room/create"},{icon:"🔗",title:"Join Room",sub:"Enter room code",path:"/room/join"},{icon:"🏆",title:"Leaderboard",sub:"Top players",path:"/leaderboard"},{icon:"👥",title:"Friends",sub:"Add & challenge",path:"/friends"},{icon:"📊",title:"History",sub:"Past games",path:"/history"}];function R3(){const{user:t,profile:e}=ur(),n=sr(),r=Jo(),[i,s]=O.useState(0),[o,a]=O.useState(!1),[u,c]=O.useState(0),[h,f]=O.useState(!1),p=O.useRef(null),y=O.useRef(null),E=O.useRef(null);O.useEffect(()=>{if(!t||!e)return;const I=v3(t.uid,e.displayName||"Player",e.avatar||"🎯"),D=w3(s);return()=>{I(),D()}},[t==null?void 0:t.uid,e==null?void 0:e.displayName]),O.useEffect(()=>()=>{t!=null&&t.uid&&wl(t.uid),clearInterval(y.current),p.current&&p.current()},[t==null?void 0:t.uid]);const A=async()=>{if(o){wl(t.uid),p.current&&(p.current(),p.current=null),clearInterval(y.current),a(!1),c(0);return}r.click&&r.click();const I=td();E.current=I,a(!0),c(0),y.current=setInterval(()=>c(F=>F+1),1e3),await T3(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",I);const D=I3(t.uid,(e==null?void 0:e.displayName)||"Player",(e==null?void 0:e.avatar)||"🎯",I,(F,j)=>{clearInterval(y.current),a(!1),n(`/game/${F}`,{state:{role:j,board:I}})});p.current=D},N=async()=>{o&&(wl(t.uid),p.current&&p.current(),clearInterval(y.current)),await ux()},S=I=>{r.click&&r.click(),n(I)},T=e!=null&&e.displayName?e.displayName.length>10?e.displayName.slice(0,10)+"…":e.displayName:"Player";return g.jsxs("div",{className:"screen",style:{paddingTop:14,paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",maxWidth:440,marginBottom:18,gap:8},children:[g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:30,letterSpacing:1,lineHeight:1},children:"DiNGo"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:2},children:[g.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--c1)",display:"inline-block",animation:"blink 1.4s infinite"}}),g.jsxs("span",{style:{fontSize:10,color:"var(--c1)",fontWeight:700,letterSpacing:1.5,textTransform:"uppercase"},children:[i," Online"]})]})]}),g.jsxs("button",{onClick:()=>S("/profile"),style:{display:"flex",alignItems:"center",gap:7,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:10,padding:"6px 10px",cursor:"pointer",flexShrink:0,maxWidth:160,WebkitTapHighlightColor:"transparent"},children:[g.jsx("span",{style:{fontSize:24,flexShrink:0},children:(e==null?void 0:e.avatar)||"🎯"}),g.jsxs("div",{style:{textAlign:"left",overflow:"hidden"},children:[g.jsx("div",{style:{fontWeight:700,fontSize:12,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:T}),g.jsxs("div",{style:{fontSize:10,color:"var(--c1)",whiteSpace:"nowrap"},children:[(e==null?void 0:e.wins)||0,"W · ",(e==null?void 0:e.streak)||0,"🔥"]})]}),g.jsx("span",{style:{fontSize:11,color:"var(--ink3)",flexShrink:0},children:"✏️"})]}),g.jsx("button",{onClick:()=>f(!0),title:"Sign Out",style:{width:36,height:36,borderRadius:8,flexShrink:0,background:"var(--panel)",border:"2px solid var(--edge2)",fontSize:17,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent"},children:"🚪"})]}),g.jsxs("div",{style:{width:"100%",maxWidth:440,marginBottom:18},children:[g.jsx("button",{onClick:A,style:{width:"100%",padding:"15px 20px",background:o?"var(--c2)":"var(--c1)",border:"none",borderRadius:"var(--r)",fontFamily:"'Space Grotesk',sans-serif",fontWeight:800,fontSize:14,letterSpacing:1.5,textTransform:"uppercase",color:"#000",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,WebkitTapHighlightColor:"transparent"},children:o?g.jsxs(g.Fragment,{children:[g.jsx("span",{style:{animation:"spin 1s linear infinite",display:"inline-block"},children:"⏳"})," Searching… ",u,"s · Tap to Cancel"]}):"⚡ PLAY NOW — Auto Match"}),o&&g.jsx("div",{style:{textAlign:"center",fontSize:12,color:"var(--ink2)",marginTop:6},children:"Finding an opponent for you…"})]}),g.jsx("div",{className:"menu-grid",children:k3.map(I=>g.jsxs("div",{className:"menu-card",onClick:()=>S(I.path),children:[g.jsx("div",{className:"menu-icon",children:I.icon}),g.jsx("div",{className:"menu-title",children:I.title}),g.jsx("div",{className:"menu-sub",children:I.sub})]},I.path))}),g.jsx("div",{style:{marginTop:18,width:"100%",maxWidth:440,display:"flex",gap:8},children:[{label:"WINS",val:(e==null?void 0:e.wins)||0,color:"var(--c1)"},{label:"LOSSES",val:(e==null?void 0:e.losses)||0,color:"var(--c2)"},{label:"STREAK",val:`${(e==null?void 0:e.streak)||0}🔥`,color:"var(--c3)"}].map(I=>g.jsxs("div",{style:{flex:1,background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"10px 0",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,color:I.color},children:I.val}),g.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:2},children:I.label})]},I.label))}),h&&g.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>f(!1),children:g.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:I=>I.stopPropagation(),children:[g.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),g.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),g.jsxs("div",{style:{display:"flex",gap:10},children:[g.jsx("button",{onClick:()=>f(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),g.jsx("button",{onClick:N,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const A3=["🎯","🔥","⚡","💎","🤖","👾","🥷","🎮","🏆","🌀","💀","🎲","🦊","🐉","⭐","🎭","🌊","🦁","🌈","💥","🎪","🚀","🧊","🎸","👑","🦄"],x3=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#00b4ff","#ff6a00","#00ff88","#ff00ff","#ffffff","#f5a623"];function P3(){const{user:t,profile:e,refreshProfile:n}=ur(),r=sr(),i=Jo(),[s,o]=O.useState((e==null?void 0:e.displayName)||""),[a,u]=O.useState((e==null?void 0:e.avatar)||"🎯"),[c,h]=O.useState((e==null?void 0:e.color)||"#00ffcc"),[f,p]=O.useState(localStorage.getItem("sfxTheme")||"classic"),[y,E]=O.useState(_3()),[A,N]=O.useState(!1),[S,T]=O.useState(!1),[I,D]=O.useState("idle"),[F,j]=O.useState(!1);O.useEffect(()=>{e&&(o(e.displayName||""),u(e.avatar||"🎯"),h(e.color||"#00ffcc"))},[e]);const k=async()=>{s.trim()&&(N(!0),await GB(t.uid,{displayName:s.trim(),avatar:a,color:c}),await n(t.uid),i.click&&i.click(),N(!1),T(!0),setTimeout(()=>T(!1),2e3))},v=x=>{m3(x),p(x),setTimeout(()=>Jo().click(),50)},C=()=>{const x=g3();E(x)},w=async()=>{await ux()},P=async()=>{D("requesting");const x=await i3(t.uid);D(x?"granted":"denied")};return g.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[g.jsxs("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain",padding:"14px 14px 24px",display:"flex",flexDirection:"column",alignItems:"center"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:4},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px",flexShrink:0},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,letterSpacing:2},children:"⚙️ PROFILE"}),g.jsx("button",{onClick:()=>j(!0),style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:5,flexShrink:0,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"6px 10px",fontSize:11,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Sign Out"})]}),g.jsx("div",{style:{fontSize:64,marginBottom:6,textAlign:"center"},children:a}),g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,textAlign:"center",marginBottom:2},children:s||"Player"}),g.jsx("div",{style:{fontSize:12,color:"var(--ink2)",textAlign:"center",marginBottom:20},children:t==null?void 0:t.email}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",children:[g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("div",{className:"label",children:"Display Name"}),g.jsx("input",{type:"text",value:s,onChange:x=>o(x.target.value),maxLength:20,placeholder:"Your name",enterKeyHint:"done",onKeyDown:x=>x.key==="Enter"&&x.target.blur()}),g.jsx("div",{style:{fontSize:11,color:"var(--ink3)",marginTop:5},children:"Other players search and find you by this name"})]}),g.jsxs("div",{style:{marginBottom:16},children:[g.jsx("div",{className:"label",children:"Avatar"}),g.jsx("div",{className:"avatar-grid",children:A3.map(x=>g.jsx("div",{className:`avatar-opt ${a===x?"selected":""}`,onClick:()=>{u(x),i.click&&i.click()},children:x},x))})]}),g.jsxs("div",{children:[g.jsx("div",{className:"label",children:"Profile Color"}),g.jsx("div",{className:"color-row",children:x3.map(x=>g.jsx("div",{className:`color-dot ${c===x?"selected":""}`,style:{background:x},onClick:()=>{h(x),i.click&&i.click()}},x))})]})]})}),e&&g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"📊 Your Stats"}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[{label:"WINS",val:e.wins||0,color:"var(--c1)"},{label:"LOSSES",val:e.losses||0,color:"var(--c2)"},{label:"WIN RATE",val:`${e.winRate||0}%`,color:"var(--c3)"},{label:"STREAK",val:`${e.streak||0}🔥`,color:"var(--c3)"},{label:"GAMES",val:e.total||0,color:"var(--c4)"}].map(x=>g.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"12px 0",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:x.color},children:x.val}),g.jsx("div",{style:{fontSize:8,letterSpacing:2,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700,marginTop:3},children:x.label})]},x.label))})]}),g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"🔊 Sound Theme"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[g.jsx("span",{style:{fontSize:13,color:"var(--ink2)"},children:"Volume"}),g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 14px",marginLeft:"auto"},onClick:C,children:y?"🔇 Muted":"🔊 On"})]}),g.jsx("div",{className:"sfx-grid",children:p3.map(x=>g.jsxs("div",{className:`sfx-opt ${f===x.id?"active":""}`,onClick:()=>v(x.id),children:[g.jsx("div",{className:"sfx-icon",children:x.icon}),g.jsx("div",{className:"sfx-name",children:x.name}),g.jsx("div",{className:"sfx-desc",children:x.desc})]},x.id))})]}),g.jsxs("div",{style:{width:"100%",maxWidth:440,marginTop:20},children:[g.jsx("div",{className:"section-head",children:"🔔 Notifications"}),g.jsx("div",{className:"card",children:g.jsxs("div",{className:"card-body",children:[g.jsx("p",{style:{fontSize:13,color:"var(--ink2)",marginBottom:12,lineHeight:1.6},children:"Get notified when friends challenge you or it's your turn."}),g.jsx("button",{className:"btn btn-purple btn-full",onClick:P,disabled:I==="requesting"||I==="granted",children:I==="granted"?"✅ Notifications Enabled":I==="denied"?"❌ Permission Denied — check browser settings":I==="requesting"?"⏳ Requesting…":"🔔 Enable Notifications"})]})})]}),g.jsx("div",{style:{width:"100%",maxWidth:440,marginTop:24},children:g.jsx("button",{onClick:()=>j(!0),className:"btn btn-full",style:{background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",color:"var(--c2)",fontSize:13},children:"🚪 Sign Out of DiNGo"})})]})," ",g.jsx("div",{style:{flexShrink:0,background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"10px 14px",paddingBottom:"calc(10px + env(safe-area-inset-bottom, 0px))",display:"flex",gap:10},children:g.jsx("button",{onClick:k,disabled:A||!s.trim(),className:"btn btn-primary btn-full",style:{fontSize:15,padding:"14px 0"},children:S?"✅ Profile Saved!":A?"⏳ Saving…":"💾 Save Profile"})}),F&&g.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>j(!1),children:g.jsxs("div",{style:{background:"var(--panel)",border:"2px solid var(--edge2)",borderRadius:"var(--r-lg)",padding:"28px 24px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"8px 8px 0 rgba(0,0,0,0.4)"},onClick:x=>x.stopPropagation(),children:[g.jsx("div",{style:{fontSize:44,marginBottom:12},children:"🚪"}),g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,marginBottom:8},children:"Sign Out?"}),g.jsx("div",{style:{fontSize:13,color:"var(--ink2)",marginBottom:24,lineHeight:1.6},children:"You'll be taken back to the welcome screen."}),g.jsxs("div",{style:{display:"flex",gap:10},children:[g.jsx("button",{onClick:()=>j(!1),style:{flex:1,padding:"12px 0",background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"var(--ink)"},children:"Cancel"}),g.jsx("button",{onClick:w,style:{flex:1,padding:"12px 0",background:"var(--c2)",border:"none",borderRadius:"var(--r)",fontWeight:700,fontSize:13,cursor:"pointer",color:"#fff"},children:"Sign Out"})]})]})})]})}const yT=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#ffffff"];function fg({board:t,selected:e,onCellClick:n,disabled:r=!1,highlightCells:i=[]}){const s=new Set(S3(t,e)),o=dx(t,e),a=new Set(i),u={};return o.forEach((c,h)=>{c.forEach(f=>{u[f]||(u[f]=yT[Math.min(h,yT.length-1)])})}),g.jsx("div",{className:"board-wrap",children:g.jsx("div",{className:"board",children:t.map((c,h)=>{const f=e.includes(c),p=s.has(h),y=a.has(c),E=u[h];return g.jsx("div",{className:`cell ${f?"crossed":""}`,style:{cursor:r||f?"default":"pointer",background:p?`rgba(${E==="#00ffcc"?"0,255,204":E==="#ff2d55"?"255,45,85":E==="#ffcc00"?"255,204,0":E==="#7b61ff"?"123,97,255":"255,255,255"}, 0.15)`:void 0,borderColor:p?E:y?"var(--c3)":void 0,color:p?E:y&&!f?"var(--c3)":void 0,boxShadow:p?`0 0 12px ${E}88, inset 0 0 8px ${E}22`:y?"0 0 0 3px var(--c3), 0 0 14px rgba(255,204,0,0.5)":void 0,animation:p?"winPulse 2s ease-in-out infinite":y?"winPulse 0.9s ease infinite":void 0,fontWeight:p||y?900:void 0,transition:"all 0.3s ease"},onClick:()=>!r&&!f&&n&&n(c),children:c},c)})})})}function fx({show:t,isWin:e,tie:n,title:r,sub:i,onPlayAgain:s,onHome:o,showPlayAgain:a=!0}){const u=n?"🤝":e?"🎉":"💀",c=n?"var(--c3)":e?"var(--c1)":"var(--c2)";return g.jsx("div",{className:`win-overlay ${t?"show":""}`,children:g.jsxs("div",{className:"win-card",children:[g.jsx("div",{className:"win-emoji",children:u}),g.jsx("div",{className:"win-title",style:{color:c},children:r}),g.jsx("div",{className:"win-sub",children:i}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[a&&g.jsx("button",{className:"btn btn-primary btn-full",onClick:s,children:"↺ Play Again"}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:o,children:"🏠 Home"})]})]})})}async function px(t,e){const n=qt(Ye,"users",t);try{await fn(n,{total:Yi(1),wins:Yi(e?1:0),losses:Yi(e?0:1),streak:e?Yi(1):0});const r=await Ru(n);if(r.exists()){const i=r.data(),s=i.total||1,o=i.wins||0;await fn(n,{winRate:Math.round(o/s*100)})}}catch(r){console.error("recordResult error:",r)}}async function N3(){try{const t=Ho(Ri(Ye,"users"),mR("wins","desc"),jh(50));return(await Ql(t)).docs.map((n,r)=>({rank:r+1,uid:n.id,...n.data()}))}catch(t){return console.error("getLeaderboard error:",t),[]}}async function mx({p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a,mode:u,botLevel:c}){try{await ly(Ri(Ye,"matches"),{p1Uid:t,p2Uid:e,p1Name:n,p2Name:r,winner:i,p1Lines:s,p2Lines:o,duration:a||0,mode:u||"multiplayer",botLevel:c||null,timestamp:Au(),tsNum:Date.now()})}catch(h){console.error("saveMatch error:",h)}}async function b3(t){try{const[e,n]=await Promise.all([Ql(Ho(Ri(Ye,"matches"),qo("p1Uid","==",t),jh(15))),Ql(Ho(Ri(Ye,"matches"),qo("p2Uid","==",t),jh(15)))]),r=new Set,i=[];return[...e.docs,...n.docs].forEach(s=>{r.has(s.id)||(r.add(s.id),i.push({id:s.id,...s.data()}))}),i.sort((s,o)=>{var c,h;const a=s.tsNum||((c=s.timestamp)==null?void 0:c.seconds)*1e3||0;return(o.tsNum||((h=o.timestamp)==null?void 0:h.seconds)*1e3||0)-a}).slice(0,20)}catch(e){return console.error("getMyHistory error:",e),[]}}const Sc=[{id:"easy",label:"Easy",icon:"🟢",color:"var(--c1)"},{id:"medium",label:"Medium",icon:"🟡",color:"var(--c3)"},{id:"hard",label:"Hard",icon:"🔴",color:"var(--c2)"},{id:"expert",label:"Expert",icon:"🟣",color:"var(--c4)"},{id:"nightmare",label:"Nightmare",icon:"🖤",color:"#ff4444"},{id:"godmode",label:"GodMode",icon:"👑",color:"var(--c3)"}],Cc={easy:"Noob-Bot",medium:"Mid-Bot",hard:"Hard-Bot",expert:"Expert-Bot",nightmare:"Nightmare",godmode:"GodMode"},kc=5,Rc=25;function D3(){var W,J,Y;const{user:t,profile:e}=ur(),n=sr(),r=Jo(),[i,s]=O.useState("select"),[o,a]=O.useState("medium"),[u,c]=O.useState([]),[h,f]=O.useState([]),[p,y]=O.useState([]),[E,A]=O.useState(!0),[N,S]=O.useState(0),[T,I]=O.useState(0),[D,F]=O.useState(null),[j,k]=O.useState(Rc),[v,C]=O.useState(!1),w=O.useRef(null),P=O.useRef(null),x=O.useRef([]);O.useEffect(()=>{x.current=p},[p]);const R=()=>{var se;const G=td(),K=td();c(G),f(K),y([]),x.current=[],A(!0),S(0),I(0),F(null),s("game"),P.current=Date.now(),(se=r.click)==null||se.call(r)};O.useEffect(()=>{if(!(i!=="game"||!E||D))return k(Rc),w.current=setInterval(()=>{k(G=>{if(G<=1){clearInterval(w.current);const K=u.filter(se=>!x.current.includes(se));if(K.length>0){const se=K[Math.floor(Math.random()*K.length)];st(se)}return Rc}return G-1})},1e3),()=>clearInterval(w.current)},[E,i,D]);const st=G=>{var ze,De;if(!E||D||x.current.includes(G))return;clearInterval(w.current),(ze=r.cross)==null||ze.call(r);const K=[...x.current,G];y(K);const se=Ct(u,K);if(se>N&&((De=r.line)==null||De.call(r)),S(se),se>=kc){qn(!0,K);return}A(!1),on(K)},on=G=>{const K={easy:500,medium:800,hard:1e3,expert:1200,nightmare:1400,godmode:1600}[o]||800;C(!0),setTimeout(()=>{var Et,ot;C(!1);const se=C3(o,G,u,h);if(se==null){A(!0);return}(Et=r.cross)==null||Et.call(r);const ze=[...G,se];y(ze);const De=Ct(h,ze);if(De>T&&((ot=r.line)==null||ot.call(r)),I(De),De>=kc){qn(!1,ze);return}A(!0)},K)},qn=async(G,K)=>{var ze,De;const se=Math.round((Date.now()-P.current)/1e3);if(F({won:G,tie:!1,title:G?"🎉 YOU WIN!":"🤖 BOT WINS!",sub:G?["Domination! 👑","You crushed it! 🔥","GG! Lethal ⚡"][Math.floor(Math.random()*3)]:["Bot outsmarted you 🤖","GG, rematch? 💪","Bot.exe wins 😤"][Math.floor(Math.random()*3)]}),G?(ze=r.win)==null||ze.call(r):(De=r.lose)==null||De.call(r),s("over"),t)try{await px(t.uid,G),await mx({p1Uid:t.uid,p2Uid:"bot",p1Name:(e==null?void 0:e.displayName)||"Player",p2Name:Cc[o],winner:G?t.uid:"bot",p1Lines:Ct(u,K),p2Lines:Ct(h,K),duration:se,mode:"bot",botLevel:o})}catch(Et){console.error("endGame save error:",Et)}};if(i==="select")return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🤖 VS BOT"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{className:"label",style:{marginBottom:14},children:"Choose Difficulty"}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:20},children:Sc.map(G=>g.jsxs("button",{className:`diff-btn ${o===G.id?"active":""}`,style:{borderColor:o===G.id?G.color:void 0,color:o===G.id?G.color:void 0},onClick:()=>{var K;a(G.id),(K=r.click)==null||K.call(r)},children:[g.jsx("span",{style:{fontSize:20},children:G.icon}),G.label]},G.id))}),g.jsxs("div",{style:{background:"var(--panel2)",borderRadius:"var(--r)",padding:12,marginBottom:20,textAlign:"center"},children:[g.jsx("span",{style:{fontSize:28},children:(W=Sc.find(G=>G.id===o))==null?void 0:W.icon}),g.jsx("div",{style:{fontWeight:700,marginTop:6},children:Cc[o]}),g.jsx("div",{className:"muted small",style:{marginTop:4},children:{easy:"Random moves — great for beginners",medium:"Basic strategy — fair challenge",hard:"Aggressive play — tough",expert:"Win-first AI — very tough",nightmare:"Near-unbeatable AI",godmode:"Maximum difficulty — can you win?"}[o]})]}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:R,children:"⚡ Start Game"})]})})]});const an=j/Rc*100;return g.jsxs("div",{className:"screen",style:{paddingTop:10,paddingBottom:20},children:[g.jsxs("div",{style:{width:"100%",maxWidth:440,marginBottom:10,display:"flex",alignItems:"center",gap:10},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:11},onClick:()=>n("/"),children:"🏠"}),g.jsx("div",{style:{flex:1,textAlign:"center"},children:g.jsxs("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:14,letterSpacing:2,color:"var(--c1)"},children:[(J=Sc.find(G=>G.id===o))==null?void 0:J.icon," ",Cc[o].toUpperCase()]})}),g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:18},children:[g.jsx("span",{style:{color:"var(--c1)"},children:N}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 6px"},children:"·"}),g.jsx("span",{style:{color:"var(--c2)"},children:T})]})]}),g.jsxs("div",{className:"player-row",style:{maxWidth:440,marginBottom:8},children:[g.jsx("span",{style:{fontSize:28},children:(e==null?void 0:e.avatar)||"🎯"}),g.jsxs("div",{children:[g.jsx("div",{className:"player-name",children:(e==null?void 0:e.displayName)||"You"}),g.jsxs("div",{className:"player-lines",children:[N," / ",kc," lines"]})]}),E&&!v&&!D&&g.jsx("span",{className:"turn-badge",style:{marginLeft:"auto"},children:"YOUR TURN"})]}),E&&!v&&!D&&g.jsx("div",{className:"timer-bar-wrap",style:{maxWidth:440,marginBottom:8},children:g.jsx("div",{className:"timer-bar",style:{width:`${an}%`,background:j<=5?"var(--c2)":"var(--c1)"}})}),v&&g.jsx("div",{style:{textAlign:"center",fontSize:12,color:"var(--ink2)",marginBottom:8,letterSpacing:2,textTransform:"uppercase"},children:"🤖 Bot is thinking…"}),g.jsx(fg,{board:u,selected:p,onCellClick:st,disabled:!E||v||!!D}),g.jsxs("div",{className:"player-row",style:{maxWidth:440,marginTop:14},children:[g.jsx("span",{style:{fontSize:28},children:(Y=Sc.find(G=>G.id===o))==null?void 0:Y.icon}),g.jsxs("div",{children:[g.jsx("div",{className:"player-name",children:Cc[o]}),g.jsxs("div",{className:"player-lines",children:[T," / ",kc," lines"]})]}),!E&&v&&g.jsx("span",{className:"turn-badge",style:{marginLeft:"auto",background:"var(--c2)"},children:"BOT TURN"})]}),g.jsx("div",{style:{marginTop:8,opacity:.55},children:g.jsx(fg,{board:h,selected:p,disabled:!0})}),g.jsx(fx,{show:!!D,isWin:D==null?void 0:D.won,tie:!1,title:D==null?void 0:D.title,sub:D==null?void 0:D.sub,onPlayAgain:R,onHome:()=>n("/")})]})}function O3(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";return Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("")}async function L3(t,e,n){await ks(et(tt,`rooms/${t}`),{gameState:{status:"waiting",turn:"p1",p1Board:n,p2Board:[],calledNumbers:[],p1Lines:0,p2Lines:0,p1Chances:5,p2Chances:5,winner:null,tie:!1,p1Exited:!1,p2Exited:!1,turnStartedAt:Date.now(),createdAt:Date.now()},players:{p1:{...e,role:"p1"}},rematch:{p1:!1,p2:!1}})}async function M3(t,e,n){var s;const r=await rU(et(tt,`rooms/${t}`));if(!r.exists())throw new Error("Room not found");const i=r.val();if((s=i.players)!=null&&s.p2)throw new Error("Room is full");return await Br(et(tt,`rooms/${t}`),{"players/p2":{...e,role:"p2"},"gameState/p2Board":n,"gameState/status":"playing","gameState/turnStartedAt":Date.now()}),i}function gx(t,e){const n=et(tt,`rooms/${t}`);return zy(n,r=>e(r.val())),()=>sU(n)}async function Wa(t,e,n,r,i,s=!1){const o=e==="p1"?"p2":"p1",a={"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i};s||(a["gameState/turn"]=o,a["gameState/turnStartedAt"]=Date.now()),await Br(et(tt,`rooms/${t}`),a)}async function V3(t,e,n,r,i,s){const o=e==="p1"?"p2":"p1",a={"gameState/calledNumbers":n,"gameState/p1Lines":r,"gameState/p2Lines":i,[`gameState/${e}Chances`]:s,"gameState/turn":o,"gameState/turnStartedAt":Date.now()};await Br(et(tt,`rooms/${t}`),a)}async function $a(t,e){await Br(et(tt,`rooms/${t}/gameState`),{winner:e,status:"finished",tie:!1})}async function vT(t){await Br(et(tt,`rooms/${t}/gameState`),{winner:null,tie:!0,status:"finished"})}async function F3(t,e){await nU(et(tt,`rooms/${t}/chat`),{...e,ts:Date.now()})}async function j3(t,e){await Br(et(tt,`rooms/${t}/gameState`),{[`${e}Exited`]:!0})}async function U3(t,e){await Br(et(tt,`rooms/${t}/rematch`),{[e]:!0})}async function B3(t){try{await By(et(tt,`rooms/${t}`))}catch{}}function z3(){const{mode:t}=qS(),{user:e,profile:n}=ur(),r=sr(),i=Jo(),[s,o]=O.useState(""),[a,u]=O.useState(""),[c,h]=O.useState("idle"),[f,p]=O.useState(""),y=O.useState(()=>td())[0],E={uid:e==null?void 0:e.uid,name:(n==null?void 0:n.displayName)||"Player",avatar:(n==null?void 0:n.avatar)||"🎯"},A=async()=>{h("waiting");const T=O3();o(T),await L3(T,E,y),i.click();const I=gx(T,D=>{var F,j;(F=D==null?void 0:D.players)!=null&&F.p2&&((j=D==null?void 0:D.gameState)==null?void 0:j.status)==="playing"&&(I(),r(`/game/${T}`,{state:{role:"p1",board:y,roomData:D}})),D||(h("error"),p("Room expired."))})},N=async()=>{const T=a.trim().toUpperCase();if(T.length!==4){p("Enter a 4-character room code.");return}h("joining"),p("");try{const I=await M3(T,E,y);i.click(),r(`/game/${T}`,{state:{role:"p2",board:y,roomData:I}})}catch(I){h("idle"),p(I.message||"Could not join room. Check the code.")}},S=async()=>{s&&await B3(s),r("/")};return t==="create"?g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:S,children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"⚡ CREATE ROOM"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",style:{textAlign:"center"},children:[c==="idle"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{fontSize:48,marginBottom:16},children:"⚡"}),g.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:8},children:"Create a Private Room"}),g.jsx("div",{className:"muted small",style:{marginBottom:24},children:"Share the code with a friend. They join, you battle!"}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:A,children:"🎮 Create Room"})]}),c==="waiting"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"label",style:{marginBottom:8},children:"ROOM CODE"}),g.jsx("div",{className:"room-code-display",children:s}),g.jsx("div",{className:"room-status",children:"Share this code with your friend"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,justifyContent:"center",marginBottom:20},children:[g.jsx("div",{className:"spinner"}),g.jsx("span",{className:"muted small",children:"Waiting for opponent…"})]}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:()=>{var T;(T=navigator.clipboard)==null||T.writeText(s)},style:{marginBottom:10},children:"📋 Copy Code"}),g.jsx("button",{className:"btn btn-ghost btn-full",onClick:S,children:"Cancel"})]})]})})]}):g.jsxs("div",{className:"screen",style:{justifyContent:"center",paddingBottom:40},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:20},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🔗 JOIN ROOM"})]}),g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{className:"card-body",children:[g.jsx("div",{style:{fontSize:48,textAlign:"center",marginBottom:16},children:"🔗"}),g.jsx("div",{className:"label",children:"Room Code"}),g.jsx("input",{type:"text",placeholder:"ABCD",value:a,onChange:T=>u(T.target.value.toUpperCase().slice(0,4)),onKeyDown:T=>T.key==="Enter"&&N(),style:{textAlign:"center",fontSize:28,letterSpacing:10,fontFamily:"'Black Han Sans',sans-serif",marginBottom:16}}),f&&g.jsx("div",{style:{color:"var(--c2)",fontSize:13,marginBottom:14,background:"rgba(255,45,85,0.1)",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"10px 12px"},children:f}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:N,disabled:c==="joining"||a.length!==4,children:c==="joining"?"⏳ Joining…":"🎮 Join Game"})]})})]})}const yn=5,Yc=30,pg=5,W3=["👍","🔥","😂","😱","🎯","💀","🏆","😤","🤯","👏","😈","🫡","❤️","😎","🤑","💪"],wT=["#00ffcc","#ff2d55","#ffcc00","#7b61ff","#ffffff"],ET=[{id:"time",icon:"⏰",tip:"+20s"},{id:"hint",icon:"💡",tip:"Hint"},{id:"double",icon:"2️⃣",tip:"Pick 2"},{id:"fifty",icon:"🎯",tip:"50/50"},{id:"shield",icon:"🛡️",tip:"Shield"}];function TT({timeLeft:t,maxTime:e=Yc,size:n=52,active:r}){const i=(n-6)/2,s=2*Math.PI*i,o=r?Math.max(0,t/e):1,a=t<=5?"#ff2d55":t<=10?"#ffcc00":"#00ffcc";return g.jsxs("svg",{width:n,height:n,style:{position:"absolute",top:0,left:0,pointerEvents:"none"},children:[g.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:"rgba(255,255,255,0.07)",strokeWidth:4}),r&&g.jsx("circle",{cx:n/2,cy:n/2,r:i,fill:"none",stroke:a,strokeWidth:4,strokeDasharray:s,strokeDashoffset:s*(1-o),strokeLinecap:"round",transform:`rotate(-90 ${n/2} ${n/2})`,style:{transition:"stroke-dashoffset 1s linear, stroke 0.4s"}})]})}function IT({count:t,max:e=pg}){return g.jsx("div",{style:{display:"flex",gap:2},children:Array.from({length:e}).map((n,r)=>g.jsx("span",{style:{fontSize:10,opacity:r<t?1:.18},children:"❤️"},r))})}function $3(){var ht,Ui;const{roomId:t}=qS(),{state:e}=wd(),{user:n,profile:r}=ur(),i=sr(),s=Jo(),o=(e==null?void 0:e.role)||"p1",a=o==="p1"?"p2":"p1",[u,c]=O.useState(null),[h,f]=O.useState(Yc),[p,y]=O.useState(null),[E,A]=O.useState(!1),[N,S]=O.useState(!1),[T,I]=O.useState(0),[D,F]=O.useState(""),[j,k]=O.useState(""),[v,C]=O.useState({time:!0,hint:!0,double:!0,fifty:!0,shield:!0}),[w,P]=O.useState(!1),[x,R]=O.useState(!1),[st,on]=O.useState([]),[qn,an]=O.useState({p1:!1,p2:!1,newRoomId:null}),[W,J]=O.useState(!1),Y=O.useRef(!1),G=O.useRef(Date.now()),K=O.useRef(null),se=O.useRef(null),ze=O.useRef(0),De=O.useRef({}),Et=O.useRef(0),ot=O.useRef((e==null?void 0:e.board)||[]),oe=u==null?void 0:u.gameState,Gn=(oe==null?void 0:oe.calledNumbers)||[],ct=(oe==null?void 0:oe[`${o}Board`])||ot.current,cr=(oe==null?void 0:oe[`${a}Board`])||[],_n=(oe==null?void 0:oe[`${o}Lines`])||0,Us=(oe==null?void 0:oe[`${a}Lines`])||0,Bs=(oe==null?void 0:oe[`${o}Chances`])??pg,pa=(oe==null?void 0:oe[`${a}Chances`])??pg,Tt=(oe==null?void 0:oe.turn)===o,Hr=(ht=u==null?void 0:u.players)==null?void 0:ht[a],qr=(Ui=u==null?void 0:u.players)==null?void 0:Ui[o];O.useEffect(()=>{const X=gx(t,ee=>{var We,ke,$e,Nt;if(c(ee),!(ee!=null&&ee.gameState))return;const Ie=ee.gameState;if(ee.rematch&&(an(ee.rematch),ee.rematch.newRoomId&&Y.current)){const Me=ot.current.length===25?ot.current:Array.from({length:25},(Oe,hr)=>hr+1);X(),i(`/game/${ee.rematch.newRoomId}`,{state:{role:o,board:Me},replace:!0});return}if(ee.chat){const Me=Object.values(ee.chat).sort((hr,Fu)=>(hr.ts||0)-(Fu.ts||0)),Oe=Me[Me.length-1];Oe&&(Oe.ts||0)>Et.current&&Date.now()-(Oe.ts||0)<8e3&&(Et.current=Oe.ts,Oe.sender===o?(F(Oe.text),clearTimeout(De.current.my),De.current.my=setTimeout(()=>F(""),4e3)):(k(Oe.text),(We=s.ping)==null||We.call(s),clearTimeout(De.current.opp),De.current.opp=setTimeout(()=>k(""),4e3)))}if((Ie.winner||Ie.tie)&&!Y.current){Y.current=!0,clearInterval(K.current);const Me=!!Ie.tie,Oe=Ie.winner===o;y({won:Me?null:Oe,tie:Me,title:Me?"🤝 IT'S A TIE!":Oe?"🎉 YOU WIN!":"😔 YOU LOST!",sub:Me?"Both earn a point!":Oe?["Domination! 👑","Flawless! ⚡","Champion! 🏆"][Math.floor(Math.random()*3)]:["GG, rematch? 💪","They got lucky 😤","Next time! 🤝"][Math.floor(Math.random()*3)]}),Oe||Me?(ke=s.win)==null||ke.call(s):($e=s.lose)==null||$e.call(s),ga(Me,Oe,Ie,ee)}Ie[`${a}Exited`]&&!Y.current&&(Y.current=!0,clearInterval(K.current),y({won:!0,tie:!1,title:"🏆 OPPONENT LEFT",sub:"You win by default!"}),(Nt=s.win)==null||Nt.call(s))});return()=>{X(),clearInterval(K.current),clearInterval(se.current)}},[t]),O.useEffect(()=>{var X;_n>ze.current&&((X=s.line)==null||X.call(s),ze.current=_n)},[_n]),O.useEffect(()=>{ct.length===25&&(ot.current=ct)},[ct]),O.useEffect(()=>{if(!(oe!=null&&oe.turnStartedAt)||p)return;clearInterval(K.current);const X=Math.floor((Date.now()-oe.turnStartedAt)/1e3),ee=Math.max(0,Yc-X);return f(ee),K.current=setInterval(()=>{f(Ie=>Ie<=1?(clearInterval(K.current),Tt&&!p&&!Y.current&&(x?(R(!1),f(Yc)):Mu()),0):Ie-1)},1e3),()=>clearInterval(K.current)},[oe==null?void 0:oe.turnStartedAt,oe==null?void 0:oe.turn]);const Mu=async()=>{const X=Array.from({length:25},(Oe,hr)=>hr+1).filter(Oe=>!Gn.includes(Oe));if(X.length===0)return;const ee=X[Math.floor(Math.random()*X.length)],Ie=[...Gn,ee],We=o==="p1"?ct:cr,ke=o==="p2"?ct:cr,$e=Ct(We,Ie),Nt=Ct(ke,Ie),Me=Bs-1;if(Me<=0){await $a(t,a);return}if($e>=yn&&Nt>=yn){await vT(t);return}if($e>=yn){await $a(t,"p1");return}if(Nt>=yn){await $a(t,"p2");return}await V3(t,o,Ie,$e,Nt,Me)},ma=async X=>{var Nt;if(p||Y.current||!Tt&&!w||Gn.includes(X)||ct.length===0)return;clearInterval(K.current),on([]),(Nt=s.cross)==null||Nt.call(s);const ee=[...Gn,X],Ie=o==="p1"?ct:cr,We=o==="p2"?ct:cr,ke=Ct(Ie.length?Ie:ct,ee),$e=Ct(We.length?We:[],ee);if(w){P(!1),await Wa(t,o,ee,ke,$e,!0);return}if(!Y.current){if(ke>=yn&&$e>=yn){await Wa(t,o,ee,ke,$e,!1),await vT(t);return}if(ke>=yn){await Wa(t,o,ee,ke,$e,!1),await $a(t,"p1");return}if($e>=yn){await Wa(t,o,ee,ke,$e,!1),await $a(t,"p2");return}}await Wa(t,o,ee,ke,$e,!1)},Vu=X=>{var ee;if(!(!v[X]||!Tt||p)&&((ee=s.click)==null||ee.call(s),C(Ie=>({...Ie,[X]:!1})),X==="time"&&f(Ie=>Ie+20),X==="shield"&&R(!0),X==="double"&&P(!0),X==="hint"||X==="fifty")){const We=ct.filter(ke=>!Gn.includes(ke)).map(ke=>({n:ke,lines:Ct(ct,[...Gn,ke])})).sort((ke,$e)=>$e.lines-ke.lines);on(We.slice(0,X==="fifty"?2:1).map(ke=>ke.n)),setTimeout(()=>on([]),7e3)}},yf=async X=>{if(N)return;await F3(t,{text:X,isEmoji:!0,sender:o,senderName:(r==null?void 0:r.displayName)||"Me"}),A(!1),S(!0);let ee=3;I(ee),se.current=setInterval(()=>{ee--,I(ee),ee<=0&&(clearInterval(se.current),S(!1),I(0))},1e3)},ga=async(X,ee,Ie,We)=>{var $e,Nt;if(!n)return;const ke=Math.round((Date.now()-G.current)/1e3);try{await px(n.uid,X?!1:ee);const Me=($e=We==null?void 0:We.players)==null?void 0:$e.p1,Oe=(Nt=We==null?void 0:We.players)==null?void 0:Nt.p2;Me&&Oe&&o==="p1"&&await mx({p1Uid:Me.uid,p2Uid:Oe.uid,p1Name:Me.name,p2Name:Oe.name,winner:X?null:Ie.winner==="p1"?Me.uid:Oe.uid,p1Lines:Ie.p1Lines,p2Lines:Ie.p2Lines,duration:ke,mode:"multiplayer"})}catch(Me){console.error("matchEnd error:",Me)}},_a=async()=>{if(W)return;J(!0);const X={uid:n==null?void 0:n.uid,name:(r==null?void 0:r.displayName)||"Player",avatar:(r==null?void 0:r.avatar)||"🎯",role:o};try{const ee=await U3(t,o,ot.current,X);ee&&i(`/game/${ee}`,{state:{role:"p1",board:ot.current},replace:!0})}catch(ee){console.error("Rematch error:",ee),J(!1)}},zs=async()=>{clearInterval(K.current),await j3(t,o),i("/")};if(!u)return g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:14},children:[g.jsx("div",{className:"spinner"}),g.jsx("div",{style:{fontSize:13,color:"var(--ink2)"},children:"Connecting to room…"})]});if((oe==null?void 0:oe.status)==="waiting")return g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",gap:14},children:[g.jsx("div",{className:"spinner"}),g.jsx("div",{style:{fontSize:13,color:"var(--ink2)"},children:"Waiting for opponent…"}),g.jsx("button",{className:"btn btn-ghost",onClick:zs,children:"Cancel"})]});const Te=48;return g.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--bg)"},children:[g.jsx("div",{style:{background:"var(--panel)",borderBottom:"2px solid var(--edge2)",padding:"6px 8px",flexShrink:0},children:g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:4},children:[g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[g.jsxs("div",{style:{position:"relative",width:Te,height:Te,flexShrink:0},children:[g.jsx("div",{style:{width:Te,height:Te,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${Tt?"var(--c1)":"var(--edge)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,transition:"border-color 0.3s"},children:(qr==null?void 0:qr.avatar)||(r==null?void 0:r.avatar)||"🎯"}),g.jsx(TT,{timeLeft:h,size:Te,active:Tt&&!p}),x&&g.jsx("div",{style:{position:"absolute",bottom:-2,right:-2,fontSize:10},children:"🛡️"})]}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsx("div",{style:{fontWeight:800,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:70},children:(qr==null?void 0:qr.name)||(r==null?void 0:r.displayName)||"You"}),g.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[_n,"/",yn]}),Tt&&!p&&g.jsx("div",{style:{fontSize:8,fontWeight:800,color:"var(--c1)",letterSpacing:1},children:w?"2️⃣ Pick 2nd":`${h}s`})]})]}),D&&g.jsx("div",{style:{marginTop:3,fontSize:14,background:"rgba(0,255,204,0.1)",border:"1px solid rgba(0,255,204,0.3)",borderRadius:8,padding:"2px 6px",display:"inline-block"},children:D}),g.jsx("div",{style:{display:"flex",gap:2,marginTop:3,flexWrap:"wrap"},children:ET.map(X=>g.jsx("button",{onClick:()=>Vu(X.id),disabled:!v[X.id]||!Tt||!!p,title:X.tip,style:{fontSize:12,padding:"2px 3px",background:v[X.id]?"var(--panel2)":"transparent",border:`2px solid ${v[X.id]?"var(--edge2)":"transparent"}`,borderRadius:4,cursor:v[X.id]&&Tt?"pointer":"default",opacity:v[X.id]?Tt?1:.35:.1,WebkitTapHighlightColor:"transparent"},children:X.icon},X.id))}),g.jsx("div",{style:{marginTop:2},children:g.jsx(IT,{count:Bs})})]}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,minWidth:44,paddingTop:2},children:[g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,lineHeight:1},children:[g.jsx("span",{style:{color:"var(--c1)"},children:_n}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 1px"},children:":"}),g.jsx("span",{style:{color:"var(--c2)"},children:Us})]}),g.jsxs("div",{style:{fontSize:7,letterSpacing:1.5,textTransform:"uppercase",color:"var(--ink3)",fontWeight:700},children:["#",t]})]}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,flexDirection:"row-reverse"},children:[g.jsxs("div",{style:{position:"relative",width:Te,height:Te,flexShrink:0},children:[g.jsx("div",{style:{width:Te,height:Te,borderRadius:"50%",background:"var(--panel2)",border:`2px solid ${Tt?"var(--edge)":"var(--c2)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,transition:"border-color 0.3s"},children:(Hr==null?void 0:Hr.avatar)||"🎯"}),g.jsx(TT,{timeLeft:h,size:Te,active:!Tt&&!p})]}),g.jsxs("div",{style:{flex:1,minWidth:0,textAlign:"right"},children:[g.jsx("div",{style:{fontWeight:800,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:70,marginLeft:"auto"},children:(Hr==null?void 0:Hr.name)||"Opponent"}),g.jsxs("div",{style:{fontSize:10,color:"var(--ink2)"},children:[Us,"/",yn]}),!Tt&&!p&&g.jsxs("div",{style:{fontSize:8,fontWeight:800,color:"var(--c2)",letterSpacing:1},children:[h,"s"]})]})]}),j&&g.jsx("div",{style:{marginTop:3,fontSize:14,background:"rgba(255,45,85,0.1)",border:"1px solid rgba(255,45,85,0.3)",borderRadius:8,padding:"2px 6px",display:"flex",justifyContent:"flex-end"},children:j}),g.jsx("div",{style:{display:"flex",gap:2,marginTop:3,justifyContent:"flex-end"},children:ET.map(X=>g.jsx("div",{style:{fontSize:12,padding:"2px 3px",background:"var(--panel2)",border:"2px solid var(--edge)",borderRadius:4,opacity:.2},children:X.icon},X.id))}),g.jsx("div",{style:{marginTop:2,display:"flex",justifyContent:"flex-end"},children:g.jsx(IT,{count:pa})})]})]})}),g.jsxs("div",{style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"4px 8px"},children:[g.jsxs("div",{style:{marginBottom:5,textAlign:"center"},children:[g.jsx("div",{style:{fontSize:11,color:"var(--ink2)"},children:p?"🏁 Game Over":Tt?"👆 Your turn — tap to call a number":"⏳ Opponent choosing…"}),g.jsxs("div",{style:{fontSize:10,color:"var(--ink3)",marginTop:1},children:[Gn.length,"/25 called"]}),st.length>0&&g.jsxs("div",{style:{fontSize:11,color:"var(--c3)",marginTop:2,fontWeight:700},children:["💡 Try: ",st.join(" or ")]}),w&&g.jsx("div",{style:{fontSize:11,color:"var(--c3)",fontWeight:800,marginTop:2,animation:"blink 0.8s infinite"},children:"2️⃣ PICK YOUR 2ND!"})]}),g.jsx(fg,{board:ct,selected:Gn,onCellClick:ma,disabled:!Tt&&!w||!!p||ct.length===0,highlightCells:st}),g.jsxs("div",{style:{marginTop:8,display:"flex",gap:4,alignItems:"center"},children:[Array.from({length:yn}).map((X,ee)=>g.jsx("div",{style:{width:28,height:6,borderRadius:3,background:ee<_n?wT[Math.min(ee,4)]:"var(--edge)",boxShadow:ee<_n?`0 0 6px ${wT[ee]}88`:"none",transition:"all 0.4s"}},ee)),g.jsxs("span",{style:{fontSize:10,color:"var(--ink2)",marginLeft:3},children:[_n,"/",yn]})]})]}),g.jsxs("div",{style:{background:"var(--panel)",borderTop:"2px solid var(--edge2)",padding:"5px 8px",flexShrink:0},children:[E&&g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:3,justifyContent:"center",paddingBottom:5},children:W3.map(X=>g.jsx("button",{onClick:()=>yf(X),disabled:N,style:{fontSize:19,background:"none",border:"none",cursor:"pointer",padding:"2px 3px",borderRadius:4,opacity:N?.3:1,WebkitTapHighlightColor:"transparent"},children:X},X))}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("button",{onClick:()=>!N&&A(X=>!X),disabled:N,style:{background:"var(--panel2)",border:"2px solid var(--edge2)",borderRadius:"var(--r)",padding:"6px 10px",fontSize:11,fontWeight:700,color:N?"var(--ink3)":"var(--ink)",cursor:N?"not-allowed":"pointer",WebkitTapHighlightColor:"transparent"},children:N?`⏱${T}s`:E?"✕":"😊"}),g.jsx("div",{style:{flex:1}}),g.jsx("button",{onClick:zs,style:{background:"transparent",border:"2px solid var(--c2)",borderRadius:"var(--r)",padding:"6px 12px",fontSize:11,fontWeight:700,color:"var(--c2)",cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:"🚪 Leave Room"})]})]}),g.jsx(fx,{show:!!p,isWin:p==null?void 0:p.won,tie:p==null?void 0:p.tie,title:p==null?void 0:p.title,sub:W?"⏳ Waiting for opponent to accept rematch…":p==null?void 0:p.sub,onPlayAgain:_a,onHome:zs,showPlayAgain:!W||!qn.newRoomId})]})}function H3(){const{user:t}=ur(),e=sr(),[n,r]=O.useState([]),[i,s]=O.useState(!0);O.useEffect(()=>{N3().then(u=>{r(u),s(!1)})},[]);const o=u=>u===1?{color:"var(--c3)",fontSize:22}:u===2?{color:"#aaa",fontSize:20}:u===3?{color:"#cd7f32",fontSize:18}:{color:"var(--ink3)",fontSize:16},a=u=>u===1?"🥇":u===2?"🥈":u===3?"🥉":`#${u}`;return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>e("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"🏆 LEADERBOARD"})]}),i?g.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:g.jsx("div",{className:"spinner"})}):g.jsx("div",{className:"card",style:{maxWidth:440},children:g.jsxs("div",{style:{padding:"4px 0"},children:[n.length===0&&g.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:"No players yet. Be the first!"}),n.map(u=>g.jsxs("div",{className:"lb-row",style:{background:u.uid===(t==null?void 0:t.uid)?"rgba(0,255,204,0.05)":"transparent"},children:[g.jsx("div",{style:{...o(u.rank),fontFamily:"'Black Han Sans',sans-serif",width:36,textAlign:"center"},children:a(u.rank)}),g.jsx("div",{style:{fontSize:24},children:u.avatar||"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsxs("div",{style:{fontWeight:700,fontSize:14},children:[u.displayName,u.uid===(t==null?void 0:t.uid)&&g.jsx("span",{style:{fontSize:10,color:"var(--c1)",marginLeft:6},children:"YOU"})]}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[u.total||0," games · ",u.winRate||0,"% WR"]})]}),g.jsxs("div",{style:{textAlign:"right"},children:[g.jsx("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:20,color:"var(--c1)"},children:u.wins||0}),g.jsx("div",{style:{fontSize:10,color:"var(--ink3)",letterSpacing:1,textTransform:"uppercase"},children:"wins"})]})]},u.uid))]})})]})}async function _x(t,e,n){const r=Ho(Ri(Ye,"friendRequests"),qo("from","==",t),qo("to","==",e));return(await Ql(r)).empty?(await ly(Ri(Ye,"friendRequests"),{from:t,to:e,fromName:n,status:"pending",timestamp:Au()}),{success:!0}):{error:"Request already sent"}}async function q3(t,e,n){await fn(qt(Ye,"friendRequests",t),{status:"accepted"}),await fn(qt(Ye,"users",e),{friends:Ym(n)}),await fn(qt(Ye,"users",n),{friends:Ym(e)})}async function G3(t){await fn(qt(Ye,"friendRequests",t),{status:"declined"})}async function K3(t,e){await fn(qt(Ye,"users",t),{friends:Xm(e)}),await fn(qt(Ye,"users",e),{friends:Xm(t)})}function Q3(t,e){const n=Ho(Ri(Ye,"friendRequests"),qo("to","==",t));return wR(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i.filter(s=>s.status==="pending"))},r=>{console.error("Friend requests error:",r),e([])})}async function Y3(t){if(!t||t.length===0)return[];const e=[];for(const n of t)try{const r=await Ru(qt(Ye,"users",n));r.exists()&&e.push({uid:n,...r.data()})}catch{}return e}function X3(){var C;const{user:t,profile:e,refreshProfile:n}=ur(),r=sr(),[i,s]=O.useState("friends"),[o,a]=O.useState([]),[u,c]=O.useState([]),[h,f]=O.useState(""),[p,y]=O.useState([]),[E,A]=O.useState(!1),[N,S]=O.useState(!0),T=O.useRef(null);O.useEffect(()=>{if(!(e!=null&&e.friends)){S(!1);return}Y3(e.friends).then(w=>{a(w),S(!1)}).catch(()=>S(!1))},[(C=e==null?void 0:e.friends)==null?void 0:C.length]),O.useEffect(()=>{if(!t)return;const w=Q3(t.uid,P=>{c(P)});return T.current=w,()=>{T.current&&T.current()}},[t==null?void 0:t.uid]);const I=async()=>{if(h.trim()){A(!0),y([]);try{const w=await QB(h.trim());y(w.filter(P=>P.uid!==t.uid))}catch{os("Search failed","Try again","error")}A(!1)}},D=async w=>{const P=await _x(t.uid,w.uid,(e==null?void 0:e.displayName)||"Player");P.error?os("⚠️ "+P.error,"","info"):os("✅ Request Sent!",`Sent to ${w.displayName}`,"success")},F=async w=>{await q3(w.id,t.uid,w.from),await n(t.uid),os("👥 Friends!",`You and ${w.fromName} are now friends`,"success")},j=async w=>{await G3(w.id)},k=async w=>{await K3(t.uid,w),await n(t.uid),a(P=>P.filter(x=>x.uid!==w))},v=[{id:"friends",label:`Friends (${o.length})`},{id:"requests",label:`Requests ${u.length>0?`(${u.length})`:""}`,badge:u.length},{id:"search",label:"🔍 Find"}];return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:14,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>r("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"👥 FRIENDS"})]}),g.jsx("div",{style:{display:"flex",gap:6,width:"100%",maxWidth:440,marginBottom:14},children:v.map(w=>g.jsxs("button",{onClick:()=>s(w.id),style:{flex:1,padding:"9px 6px",border:"2px solid",borderColor:i===w.id?"var(--c1)":"var(--edge2)",borderRadius:"var(--r)",background:i===w.id?"rgba(0,255,204,0.1)":"var(--panel)",color:i===w.id?"var(--c1)":"var(--ink2)",fontSize:11,fontWeight:700,cursor:"pointer",WebkitTapHighlightColor:"transparent",position:"relative"},children:[w.label,w.badge>0&&i!==w.id&&g.jsx("span",{style:{position:"absolute",top:-6,right:-4,background:"var(--c2)",color:"#fff",fontSize:10,fontWeight:700,borderRadius:"50%",width:17,height:17,display:"flex",alignItems:"center",justifyContent:"center"},children:w.badge})]},w.id))}),i==="friends"&&g.jsx("div",{className:"card",style:{maxWidth:440},children:N?g.jsx("div",{style:{display:"flex",justifyContent:"center",padding:32},children:g.jsx("div",{className:"spinner"})}):o.length===0?g.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[g.jsx("div",{style:{fontSize:40,marginBottom:10},children:"👥"}),g.jsx("div",{style:{fontWeight:700},children:"No friends yet"}),g.jsx("div",{style:{fontSize:13,marginTop:4},children:"Search to find and add players!"}),g.jsx("button",{className:"btn btn-primary",style:{marginTop:14},onClick:()=>s("search"),children:"Find Players"})]}):o.map(w=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("span",{style:{fontSize:26},children:w.avatar||"🎯"}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.displayName}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[w.wins||0,"W · ",w.losses||0,"L"]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[g.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:w.isOnline?"var(--c1)":"var(--ink3)",boxShadow:w.isOnline?"0 0 6px var(--c1)":"none"}}),g.jsx("span",{style:{fontSize:10,color:"var(--ink3)"},children:w.isOnline?"Online":"Offline"})]}),g.jsx("button",{onClick:()=>k(w.uid),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:6,padding:"4px 10px",fontSize:11,color:"var(--ink3)",cursor:"pointer"},children:"Remove"})]},w.uid))}),i==="requests"&&g.jsx("div",{className:"card",style:{maxWidth:440},children:u.length===0?g.jsxs("div",{style:{textAlign:"center",padding:32,color:"var(--ink2)"},children:[g.jsx("div",{style:{fontSize:40,marginBottom:10},children:"📭"}),g.jsx("div",{style:{fontWeight:700},children:"No pending requests"}),g.jsx("div",{style:{fontSize:13,marginTop:4},children:"When someone adds you, it appears here."})]}):u.map(w=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("span",{style:{fontSize:28},children:"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.fromName||"Unknown"}),g.jsx("div",{style:{fontSize:12,color:"var(--ink2)",marginTop:2},children:"Wants to be friends"})]}),g.jsx("button",{onClick:()=>F(w),style:{background:"var(--c1)",color:"#000",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer",marginRight:4},children:"✓ Accept"}),g.jsx("button",{onClick:()=>j(w),style:{background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"8px 10px",fontSize:12,color:"var(--ink2)",cursor:"pointer"},children:"✕"})]},w.id))}),i==="search"&&g.jsxs("div",{style:{width:"100%",maxWidth:440},children:[g.jsxs("div",{style:{display:"flex",gap:8,marginBottom:14},children:[g.jsx("input",{type:"text",placeholder:"Search username…",value:h,onChange:w=>f(w.target.value),onKeyDown:w=>w.key==="Enter"&&I(),style:{flex:1}}),g.jsx("button",{className:"btn btn-primary",onClick:I,disabled:E,style:{padding:"0 16px"},children:E?"…":"🔍"})]}),p.length>0&&g.jsx("div",{className:"card",children:p.map(w=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("span",{style:{fontSize:26},children:w.avatar||"🎯"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:14},children:w.displayName}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)"},children:[w.wins||0,"W · ",w.losses||0,"L"]})]}),g.jsx("button",{onClick:()=>D(w),style:{background:"var(--c4)",color:"#fff",border:"none",borderRadius:7,padding:"8px 14px",fontWeight:700,fontSize:12,cursor:"pointer"},children:"+ Add"})]},w.uid))}),h&&!E&&p.length===0&&g.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",padding:24,fontSize:14},children:['No players found for "',h,'"']})]})]})}function J3(t){if(!t)return"—";try{return(t!=null&&t.toDate?t.toDate():t!=null&&t.seconds?new Date(t.seconds*1e3):new Date(t)).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"—"}}function Z3(t){if(!t)return"—";const e=Math.floor(t/60),n=t%60;return e>0?`${e}m ${n}s`:`${n}s`}function e5(){const{user:t,profile:e}=ur(),n=sr(),[r,i]=O.useState([]),[s,o]=O.useState(!0),[a,u]=O.useState({});O.useEffect(()=>{t&&b3(t.uid).then(h=>{i(h),o(!1)}).catch(()=>o(!1))},[t]);const c=async h=>{const f=h.p1Uid===t.uid,p=f?h.p2Uid:h.p1Uid,y=f?h.p2Name:h.p1Name;if(!p||p==="bot"||p===t.uid)return;u(A=>({...A,[h.id]:!0}));const E=await _x(t.uid,p,(e==null?void 0:e.displayName)||"Player");E.error?os("Already sent",E.error,"info"):os("✅ Request Sent!",`Friend request sent to ${y}`,"success"),u(A=>({...A,[h.id]:!1}))};return g.jsxs("div",{className:"screen",style:{paddingBottom:80},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,width:"100%",maxWidth:440,marginBottom:16,paddingTop:8},children:[g.jsx("button",{className:"btn btn-ghost",style:{padding:"6px 12px"},onClick:()=>n("/"),children:"← Back"}),g.jsx("span",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:22,letterSpacing:2},children:"📊 HISTORY"})]}),s?g.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:40},children:g.jsx("div",{className:"spinner"})}):r.length===0?g.jsxs("div",{style:{textAlign:"center",color:"var(--ink2)",paddingTop:60},children:[g.jsx("div",{style:{fontSize:52,marginBottom:14},children:"🎮"}),g.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:6},children:"No games yet!"}),g.jsx("div",{style:{fontSize:13},children:"Play your first game — it will appear here."}),g.jsx("button",{className:"btn btn-primary",style:{marginTop:20},onClick:()=>n("/"),children:"Play Now"})]}):g.jsx("div",{className:"card",style:{maxWidth:440},children:r.map(h=>{const f=h.p1Uid===t.uid,p=h.winner===t.uid,y=f?h.p1Lines:h.p2Lines,E=f?h.p2Lines:h.p1Lines,A=f?h.p2Name:h.p1Name,N=f?h.p2Uid:h.p1Uid,S=h.mode==="bot"||N==="bot";return g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderBottom:"1px solid var(--edge)"},children:[g.jsx("div",{style:{fontSize:28,width:36,textAlign:"center",flexShrink:0},children:p?"🏆":"💀"}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["vs ",S?`🤖 ${h.botLevel||"Bot"}`:A||"Unknown"]}),g.jsxs("div",{style:{fontSize:11,color:"var(--ink2)",marginTop:2},children:[J3(h.timestamp||h.tsNum)," · ",Z3(h.duration)]})]}),g.jsxs("div",{style:{textAlign:"right",marginRight:6},children:[g.jsxs("div",{style:{fontFamily:"'Black Han Sans',sans-serif",fontSize:17},children:[g.jsx("span",{style:{color:"var(--c1)"},children:y??"—"}),g.jsx("span",{style:{color:"var(--ink3)",margin:"0 3px"},children:"–"}),g.jsx("span",{style:{color:"var(--c2)"},children:E??"—"})]}),g.jsx("div",{style:{fontSize:10,fontWeight:800,color:p?"var(--c1)":"var(--c2)",letterSpacing:1},children:p?"WIN":"LOSS"})]}),!S&&N&&N!==t.uid&&g.jsx("button",{onClick:()=>c(h),disabled:a[h.id],title:`Add ${A} as friend`,style:{fontSize:18,background:"none",border:"2px solid var(--edge2)",borderRadius:7,padding:"4px 7px",cursor:"pointer",color:"var(--c4)",flexShrink:0,WebkitTapHighlightColor:"transparent"},children:a[h.id]?"⏳":"👥+"})]},h.id)})})]})}function yx(){return g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:g.jsx("div",{className:"spinner"})})}function qi({children:t}){const{user:e,loading:n}=ur();return n?g.jsx(yx,{}):e?t:g.jsx(YS,{to:"/login",replace:!0})}function t5(){const{user:t,loading:e}=ur();return e?g.jsx(yx,{}):t?g.jsx(R3,{}):g.jsx(a3,{})}function n5(){return O.useEffect(()=>{s3(t=>{var e,n;os(((e=t.notification)==null?void 0:e.title)||"DiNGo",((n=t.notification)==null?void 0:n.body)||"","info")})},[]),g.jsxs(cb,{basename:"/DINGO-NEW-VERSION-",children:[g.jsx(n3,{}),g.jsxs(ab,{children:[g.jsx(Nn,{path:"/",element:g.jsx(t5,{})}),g.jsx(Nn,{path:"/login",element:g.jsx(l3,{})}),g.jsx(Nn,{path:"/profile",element:g.jsx(qi,{children:g.jsx(P3,{})})}),g.jsx(Nn,{path:"/bot",element:g.jsx(qi,{children:g.jsx(D3,{})})}),g.jsx(Nn,{path:"/room/:mode",element:g.jsx(qi,{children:g.jsx(z3,{})})}),g.jsx(Nn,{path:"/game/:roomId",element:g.jsx(qi,{children:g.jsx($3,{})})}),g.jsx(Nn,{path:"/leaderboard",element:g.jsx(qi,{children:g.jsx(H3,{})})}),g.jsx(Nn,{path:"/friends",element:g.jsx(qi,{children:g.jsx(X3,{})})}),g.jsx(Nn,{path:"/history",element:g.jsx(qi,{children:g.jsx(e5,{})})}),g.jsx(Nn,{path:"*",element:g.jsx(YS,{to:"/",replace:!0})})]})]})}function r5(){return g.jsx(t3,{children:g.jsx(n5,{})})}Pp.createRoot(document.getElementById("root")).render(g.jsx(OT.StrictMode,{children:g.jsx(r5,{})}));
