function Rv(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ea(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sm={exports:{}},na={},Cm={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),Vv=Symbol.for("react.portal"),Nv=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),Lv=Symbol.for("react.profiler"),jv=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),Ov=Symbol.for("react.forward_ref"),zv=Symbol.for("react.suspense"),_v=Symbol.for("react.memo"),Bv=Symbol.for("react.lazy"),Jf=Symbol.iterator;function Wv(e){return e===null||typeof e!="object"?null:(e=Jf&&e[Jf]||e["@@iterator"],typeof e=="function"?e:null)}var wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Em=Object.assign,km={};function ei(e,n,t){this.props=e,this.context=n,this.refs=km,this.updater=t||wm}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pm(){}Pm.prototype=ei.prototype;function ac(e,n,t){this.props=e,this.context=n,this.refs=km,this.updater=t||wm}var lc=ac.prototype=new Pm;lc.constructor=ac;Em(lc,ei.prototype);lc.isPureReactComponent=!0;var eh=Array.isArray,Tm=Object.prototype.hasOwnProperty,uc={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function bm(e,n,t){var r,i={},o=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)Tm.call(n,r)&&!Am.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:po,type:e,key:o,ref:s,props:i,_owner:uc.current}}function Uv(e,n){return{$$typeof:po,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function cc(e){return typeof e=="object"&&e!==null&&e.$$typeof===po}function Hv(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var nh=/\/+/g;function Ma(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Hv(""+e.key):n.toString(36)}function Yo(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case po:case Vv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ma(s,0):r,eh(i)?(t="",e!=null&&(t=e.replace(nh,"$&/")+"/"),Yo(i,n,t,"",function(u){return u})):i!=null&&(cc(i)&&(i=Uv(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(nh,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",eh(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ma(o,a);s+=Yo(o,n,t,l,i)}else if(l=Wv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ma(o,a++),s+=Yo(o,n,t,l,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function To(e,n,t){if(e==null)return e;var r=[],i=0;return Yo(e,r,"","",function(o){return n.call(t,o,i++)}),r}function $v(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},Zo={transition:null},Gv={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:Zo,ReactCurrentOwner:uc};function Dm(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:To,forEach:function(e,n,t){To(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return To(e,function(){n++}),n},toArray:function(e){return To(e,function(n){return n})||[]},only:function(e){if(!cc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=ei;X.Fragment=Nv;X.Profiler=Lv;X.PureComponent=ac;X.StrictMode=Mv;X.Suspense=zv;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gv;X.act=Dm;X.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Em({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=uc.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)Tm.call(n,l)&&!Am.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&a!==void 0?a[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:po,type:e.type,key:i,ref:o,props:r,_owner:s}};X.createContext=function(e){return e={$$typeof:Fv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jv,_context:e},e.Consumer=e};X.createElement=bm;X.createFactory=function(e){var n=bm.bind(null,e);return n.type=e,n};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:Ov,render:e}};X.isValidElement=cc;X.lazy=function(e){return{$$typeof:Bv,_payload:{_status:-1,_result:e},_init:$v}};X.memo=function(e,n){return{$$typeof:_v,type:e,compare:n===void 0?null:n}};X.startTransition=function(e){var n=Zo.transition;Zo.transition={};try{e()}finally{Zo.transition=n}};X.unstable_act=Dm;X.useCallback=function(e,n){return He.current.useCallback(e,n)};X.useContext=function(e){return He.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return He.current.useDeferredValue(e)};X.useEffect=function(e,n){return He.current.useEffect(e,n)};X.useId=function(){return He.current.useId()};X.useImperativeHandle=function(e,n,t){return He.current.useImperativeHandle(e,n,t)};X.useInsertionEffect=function(e,n){return He.current.useInsertionEffect(e,n)};X.useLayoutEffect=function(e,n){return He.current.useLayoutEffect(e,n)};X.useMemo=function(e,n){return He.current.useMemo(e,n)};X.useReducer=function(e,n,t){return He.current.useReducer(e,n,t)};X.useRef=function(e){return He.current.useRef(e)};X.useState=function(e){return He.current.useState(e)};X.useSyncExternalStore=function(e,n,t){return He.current.useSyncExternalStore(e,n,t)};X.useTransition=function(){return He.current.useTransition()};X.version="18.3.1";Cm.exports=X;var A=Cm.exports;const ta=ea(A),qv=Rv({__proto__:null,default:ta},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv=A,Qv=Symbol.for("react.element"),Xv=Symbol.for("react.fragment"),Yv=Object.prototype.hasOwnProperty,Zv=Kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jv={key:!0,ref:!0,__self:!0,__source:!0};function Im(e,n,t){var r,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)Yv.call(n,r)&&!Jv.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Qv,type:e,key:o,ref:s,props:i,_owner:Zv.current}}na.Fragment=Xv;na.jsx=Im;na.jsxs=Im;Sm.exports=na;var m=Sm.exports,Fl={},Rm={exports:{}},fn={},Vm={exports:{}},Nm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,z){var S=N.length;N.push(z);e:for(;0<S;){var _=S-1>>>1,Z=N[_];if(0<i(Z,z))N[_]=z,N[S]=Z,S=_;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],S=N.pop();if(S!==z){N[0]=S;e:for(var _=0,Z=N.length,E=Z>>>1;_<E;){var ye=2*(_+1)-1,Ge=N[ye],ne=ye+1,nn=N[ne];if(0>i(Ge,S))ne<Z&&0>i(nn,Ge)?(N[_]=nn,N[ne]=S,_=ne):(N[_]=Ge,N[ye]=S,_=ye);else if(ne<Z&&0>i(nn,S))N[_]=nn,N[ne]=S,_=ne;else break e}}return z}function i(N,z){var S=N.sortIndex-z.sortIndex;return S!==0?S:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,c=null,h=3,d=!1,p=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var z=t(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=N)r(u),z.sortIndex=z.expirationTime,n(l,z);else break;z=t(u)}}function w(N){if(x=!1,v(N),!p)if(t(l)!==null)p=!0,K(T);else{var z=t(u);z!==null&&te(w,z.startTime-N)}}function T(N,z){p=!1,x&&(x=!1,g(b),b=-1),d=!0;var S=h;try{for(v(z),c=t(l);c!==null&&(!(c.expirationTime>z)||N&&!j());){var _=c.callback;if(typeof _=="function"){c.callback=null,h=c.priorityLevel;var Z=_(c.expirationTime<=z);z=e.unstable_now(),typeof Z=="function"?c.callback=Z:c===t(l)&&r(l),v(z)}else r(l);c=t(l)}if(c!==null)var E=!0;else{var ye=t(u);ye!==null&&te(w,ye.startTime-z),E=!1}return E}finally{c=null,h=S,d=!1}}var k=!1,D=null,b=-1,L=5,P=-1;function j(){return!(e.unstable_now()-P<L)}function F(){if(D!==null){var N=e.unstable_now();P=N;var z=!0;try{z=D(!0,N)}finally{z?U():(k=!1,D=null)}}else k=!1}var U;if(typeof y=="function")U=function(){y(F)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,G=$.port2;$.port1.onmessage=F,U=function(){G.postMessage(null)}}else U=function(){C(F,0)};function K(N){D=N,k||(k=!0,U())}function te(N,z){b=C(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){p||d||(p=!0,K(T))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var S=h;h=z;try{return N()}finally{h=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var S=h;h=N;try{return z()}finally{h=S}},e.unstable_scheduleCallback=function(N,z,S){var _=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?_+S:_):S=_,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=S+Z,N={id:f++,callback:z,priorityLevel:N,startTime:S,expirationTime:Z,sortIndex:-1},S>_?(N.sortIndex=S,n(u,N),t(l)===null&&N===t(u)&&(x?(g(b),b=-1):x=!0,te(w,S-_))):(N.sortIndex=Z,n(l,N),p||d||(p=!0,K(T))),N},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(N){var z=h;return function(){var S=h;h=z;try{return N.apply(this,arguments)}finally{h=S}}}})(Nm);Vm.exports=Nm;var ex=Vm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx=A,un=ex;function R(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mm=new Set,Ui={};function lr(e,n){Br(e,n),Br(e+"Capture",n)}function Br(e,n){for(Ui[e]=n,e=0;e<n.length;e++)Mm.add(n[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ol=Object.prototype.hasOwnProperty,tx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,th={},rh={};function rx(e){return Ol.call(rh,e)?!0:Ol.call(th,e)?!1:tx.test(e)?rh[e]=!0:(th[e]=!0,!1)}function ix(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ox(e,n,t,r){if(n===null||typeof n>"u"||ix(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function $e(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Re[n]=new $e(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var fc=/[\-:]([a-z])/g;function hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(fc,hc);Re[n]=new $e(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(fc,hc);Re[n]=new $e(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(fc,hc);Re[n]=new $e(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function dc(e,n,t,r){var i=Re.hasOwnProperty(n)?Re[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ox(n,t,i,r)&&(t=null),r||i===null?rx(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var ot=nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ao=Symbol.for("react.element"),vr=Symbol.for("react.portal"),xr=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),jm=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),_l=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),gc=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Fm=Symbol.for("react.offscreen"),ih=Symbol.iterator;function ui(e){return e===null||typeof e!="object"?null:(e=ih&&e[ih]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,La;function Ci(e){if(La===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);La=n&&n[1]||""}return`
`+La+e}var ja=!1;function Fa(e,n){if(!e||ja)return"";ja=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ja=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ci(e):""}function sx(e){switch(e.tag){case 5:return Ci(e.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return e=Fa(e.type,!1),e;case 11:return e=Fa(e.type.render,!1),e;case 1:return e=Fa(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xr:return"Fragment";case vr:return"Portal";case zl:return"Profiler";case pc:return"StrictMode";case _l:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jm:return(e.displayName||"Context")+".Consumer";case Lm:return(e._context.displayName||"Context")+".Provider";case mc:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gc:return n=e.displayName||null,n!==null?n:Wl(e.type)||"Memo";case ht:n=e._payload,e=e._init;try{return Wl(e(n))}catch{}}return null}function ax(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(n);case 8:return n===pc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function It(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Om(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function lx(e){var n=Om(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bo(e){e._valueTracker||(e._valueTracker=lx(e))}function zm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Om(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,n){var t=n.checked;return ge({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function oh(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=It(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function _m(e,n){n=n.checked,n!=null&&dc(e,"checked",n,!1)}function Hl(e,n){_m(e,n);var t=It(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?$l(e,n.type,t):n.hasOwnProperty("defaultValue")&&$l(e,n.type,It(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function sh(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function $l(e,n,t){(n!=="number"||gs(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wi=Array.isArray;function Mr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+It(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Gl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(R(91));return ge({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ah(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(R(92));if(wi(t)){if(1<t.length)throw Error(R(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:It(t)}}function Bm(e,n){var t=It(n.value),r=It(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function lh(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Wm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ql(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Wm(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Do,Um=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Do.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Hi(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ux=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(e){ux.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ti[n]=Ti[e]})});function Hm(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ti.hasOwnProperty(e)&&Ti[e]?(""+n).trim():n+"px"}function $m(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Hm(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var cx=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kl(e,n){if(n){if(cx[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(R(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(R(61))}if(n.style!=null&&typeof n.style!="object")throw Error(R(62))}}function Ql(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xl=null;function yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,Lr=null,jr=null;function uh(e){if(e=yo(e)){if(typeof Yl!="function")throw Error(R(280));var n=e.stateNode;n&&(n=aa(n),Yl(e.stateNode,e.type,n))}}function Gm(e){Lr?jr?jr.push(e):jr=[e]:Lr=e}function qm(){if(Lr){var e=Lr,n=jr;if(jr=Lr=null,uh(e),n)for(e=0;e<n.length;e++)uh(n[e])}}function Km(e,n){return e(n)}function Qm(){}var Oa=!1;function Xm(e,n,t){if(Oa)return e(n,t);Oa=!0;try{return Km(e,n,t)}finally{Oa=!1,(Lr!==null||jr!==null)&&(Qm(),qm())}}function $i(e,n){var t=e.stateNode;if(t===null)return null;var r=aa(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(R(231,n,typeof t));return t}var Zl=!1;if(et)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{Zl=!1}function fx(e,n,t,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var Ai=!1,ys=null,vs=!1,Jl=null,hx={onError:function(e){Ai=!0,ys=e}};function dx(e,n,t,r,i,o,s,a,l){Ai=!1,ys=null,fx.apply(hx,arguments)}function px(e,n,t,r,i,o,s,a,l){if(dx.apply(this,arguments),Ai){if(Ai){var u=ys;Ai=!1,ys=null}else throw Error(R(198));vs||(vs=!0,Jl=u)}}function ur(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ym(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ch(e){if(ur(e)!==e)throw Error(R(188))}function mx(e){var n=e.alternate;if(!n){if(n=ur(e),n===null)throw Error(R(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return ch(i),e;if(o===r)return ch(i),n;o=o.sibling}throw Error(R(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===t){s=!0,t=i,r=o;break}if(a===r){s=!0,r=i,t=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===t){s=!0,t=o,r=i;break}if(a===r){s=!0,r=o,t=i;break}a=a.sibling}if(!s)throw Error(R(189))}}if(t.alternate!==r)throw Error(R(190))}if(t.tag!==3)throw Error(R(188));return t.stateNode.current===t?e:n}function Zm(e){return e=mx(e),e!==null?Jm(e):null}function Jm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Jm(e);if(n!==null)return n;e=e.sibling}return null}var eg=un.unstable_scheduleCallback,fh=un.unstable_cancelCallback,gx=un.unstable_shouldYield,yx=un.unstable_requestPaint,xe=un.unstable_now,vx=un.unstable_getCurrentPriorityLevel,vc=un.unstable_ImmediatePriority,ng=un.unstable_UserBlockingPriority,xs=un.unstable_NormalPriority,xx=un.unstable_LowPriority,tg=un.unstable_IdlePriority,ra=null,_n=null;function Sx(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(ra,e,void 0,(e.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Ex,Cx=Math.log,wx=Math.LN2;function Ex(e){return e>>>=0,e===0?32:31-(Cx(e)/wx|0)|0}var Io=64,Ro=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ss(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~i;a!==0?r=Ei(a):(o&=s,o!==0&&(r=Ei(o)))}else s=t&~i,s!==0?r=Ei(s):o!==0&&(r=Ei(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-In(n),i=1<<t,r|=e[t],n&=~i;return r}function kx(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Px(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-In(o),a=1<<s,l=i[s];l===-1?(!(a&t)||a&r)&&(i[s]=kx(a,n)):l<=n&&(e.expiredLanes|=a),o&=~a}}function eu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rg(){var e=Io;return Io<<=1,!(Io&4194240)&&(Io=64),e}function za(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function mo(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-In(n),e[n]=t}function Tx(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-In(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function xc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-In(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var re=0;function ig(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var og,Sc,sg,ag,lg,nu=!1,Vo=[],St=null,Ct=null,wt=null,Gi=new Map,qi=new Map,mt=[],Ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hh(e,n){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":Gi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(n.pointerId)}}function fi(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=yo(n),n!==null&&Sc(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function bx(e,n,t,r,i){switch(n){case"focusin":return St=fi(St,e,n,t,r,i),!0;case"dragenter":return Ct=fi(Ct,e,n,t,r,i),!0;case"mouseover":return wt=fi(wt,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Gi.set(o,fi(Gi.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qi.set(o,fi(qi.get(o)||null,e,n,t,r,i)),!0}return!1}function ug(e){var n=Kt(e.target);if(n!==null){var t=ur(n);if(t!==null){if(n=t.tag,n===13){if(n=Ym(t),n!==null){e.blockedOn=n,lg(e.priority,function(){sg(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=tu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Xl=r,t.target.dispatchEvent(r),Xl=null}else return n=yo(t),n!==null&&Sc(n),e.blockedOn=t,!1;n.shift()}return!0}function dh(e,n,t){Jo(e)&&t.delete(n)}function Dx(){nu=!1,St!==null&&Jo(St)&&(St=null),Ct!==null&&Jo(Ct)&&(Ct=null),wt!==null&&Jo(wt)&&(wt=null),Gi.forEach(dh),qi.forEach(dh)}function hi(e,n){e.blockedOn===n&&(e.blockedOn=null,nu||(nu=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,Dx)))}function Ki(e){function n(i){return hi(i,e)}if(0<Vo.length){hi(Vo[0],e);for(var t=1;t<Vo.length;t++){var r=Vo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&hi(St,e),Ct!==null&&hi(Ct,e),wt!==null&&hi(wt,e),Gi.forEach(n),qi.forEach(n),t=0;t<mt.length;t++)r=mt[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<mt.length&&(t=mt[0],t.blockedOn===null);)ug(t),t.blockedOn===null&&mt.shift()}var Fr=ot.ReactCurrentBatchConfig,Cs=!0;function Ix(e,n,t,r){var i=re,o=Fr.transition;Fr.transition=null;try{re=1,Cc(e,n,t,r)}finally{re=i,Fr.transition=o}}function Rx(e,n,t,r){var i=re,o=Fr.transition;Fr.transition=null;try{re=4,Cc(e,n,t,r)}finally{re=i,Fr.transition=o}}function Cc(e,n,t,r){if(Cs){var i=tu(e,n,t,r);if(i===null)Qa(e,n,r,ws,t),hh(e,r);else if(bx(i,e,n,t,r))r.stopPropagation();else if(hh(e,r),n&4&&-1<Ax.indexOf(e)){for(;i!==null;){var o=yo(i);if(o!==null&&og(o),o=tu(e,n,t,r),o===null&&Qa(e,n,r,ws,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Qa(e,n,r,null,t)}}var ws=null;function tu(e,n,t,r){if(ws=null,e=yc(r),e=Kt(e),e!==null)if(n=ur(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ym(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ws=e,null}function cg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vx()){case vc:return 1;case ng:return 4;case xs:case xx:return 16;case tg:return 536870912;default:return 16}default:return 16}}var yt=null,wc=null,es=null;function fg(){if(es)return es;var e,n=wc,t=n.length,r,i="value"in yt?yt.value:yt.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return es=i.slice(e,1<r?1-r:void 0)}function ns(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function No(){return!0}function ph(){return!1}function hn(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?No:ph,this.isPropagationStopped=ph,this}return ge(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),n}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=hn(ni),go=ge({},ni,{view:0,detail:0}),Vx=hn(go),_a,Ba,di,ia=ge({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==di&&(di&&e.type==="mousemove"?(_a=e.screenX-di.screenX,Ba=e.screenY-di.screenY):Ba=_a=0,di=e),_a)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),mh=hn(ia),Nx=ge({},ia,{dataTransfer:0}),Mx=hn(Nx),Lx=ge({},go,{relatedTarget:0}),Wa=hn(Lx),jx=ge({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=hn(jx),Ox=ge({},ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zx=hn(Ox),_x=ge({},ni,{data:0}),gh=hn(_x),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ux[e])?!!n[e]:!1}function kc(){return Hx}var $x=ge({},go,{key:function(e){if(e.key){var n=Bx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(e){return e.type==="keypress"?ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gx=hn($x),qx=ge({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yh=hn(qx),Kx=ge({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),Qx=hn(Kx),Xx=ge({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yx=hn(Xx),Zx=ge({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jx=hn(Zx),eS=[9,13,27,32],Pc=et&&"CompositionEvent"in window,bi=null;et&&"documentMode"in document&&(bi=document.documentMode);var nS=et&&"TextEvent"in window&&!bi,hg=et&&(!Pc||bi&&8<bi&&11>=bi),vh=" ",xh=!1;function dg(e,n){switch(e){case"keyup":return eS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function tS(e,n){switch(e){case"compositionend":return pg(n);case"keypress":return n.which!==32?null:(xh=!0,vh);case"textInput":return e=n.data,e===vh&&xh?null:e;default:return null}}function rS(e,n){if(Sr)return e==="compositionend"||!Pc&&dg(e,n)?(e=fg(),es=wc=yt=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hg&&n.locale!=="ko"?null:n.data;default:return null}}var iS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!iS[e.type]:n==="textarea"}function mg(e,n,t,r){Gm(r),n=Es(n,"onChange"),0<n.length&&(t=new Ec("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Di=null,Qi=null;function oS(e){Tg(e,0)}function oa(e){var n=Er(e);if(zm(n))return e}function sS(e,n){if(e==="change")return n}var gg=!1;if(et){var Ua;if(et){var Ha="oninput"in document;if(!Ha){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),Ha=typeof Ch.oninput=="function"}Ua=Ha}else Ua=!1;gg=Ua&&(!document.documentMode||9<document.documentMode)}function wh(){Di&&(Di.detachEvent("onpropertychange",yg),Qi=Di=null)}function yg(e){if(e.propertyName==="value"&&oa(Qi)){var n=[];mg(n,Qi,e,yc(e)),Xm(oS,n)}}function aS(e,n,t){e==="focusin"?(wh(),Di=n,Qi=t,Di.attachEvent("onpropertychange",yg)):e==="focusout"&&wh()}function lS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oa(Qi)}function uS(e,n){if(e==="click")return oa(n)}function cS(e,n){if(e==="input"||e==="change")return oa(n)}function fS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Nn=typeof Object.is=="function"?Object.is:fS;function Xi(e,n){if(Nn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Ol.call(n,i)||!Nn(e[i],n[i]))return!1}return!0}function Eh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kh(e,n){var t=Eh(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Eh(t)}}function vg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xg(){for(var e=window,n=gs();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=gs(e.document)}return n}function Tc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function hS(e){var n=xg(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&vg(t.ownerDocument.documentElement,t)){if(r!==null&&Tc(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kh(t,o);var s=kh(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dS=et&&"documentMode"in document&&11>=document.documentMode,Cr=null,ru=null,Ii=null,iu=!1;function Ph(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;iu||Cr==null||Cr!==gs(r)||(r=Cr,"selectionStart"in r&&Tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ii&&Xi(Ii,r)||(Ii=r,r=Es(ru,"onSelect"),0<r.length&&(n=new Ec("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Cr)))}function Mo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var wr={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},$a={},Sg={};et&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function sa(e){if($a[e])return $a[e];if(!wr[e])return e;var n=wr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Sg)return $a[e]=n[t];return e}var Cg=sa("animationend"),wg=sa("animationiteration"),Eg=sa("animationstart"),kg=sa("transitionend"),Pg=new Map,Th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,n){Pg.set(e,n),lr(n,[e])}for(var Ga=0;Ga<Th.length;Ga++){var qa=Th[Ga],pS=qa.toLowerCase(),mS=qa[0].toUpperCase()+qa.slice(1);Mt(pS,"on"+mS)}Mt(Cg,"onAnimationEnd");Mt(wg,"onAnimationIteration");Mt(Eg,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(kg,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function Ah(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,px(r,n,void 0,e),e.currentTarget=null}function Tg(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ah(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ah(i,a,u),o=l}}}if(vs)throw e=Jl,vs=!1,Jl=null,e}function le(e,n){var t=n[uu];t===void 0&&(t=n[uu]=new Set);var r=e+"__bubble";t.has(r)||(Ag(n,e,2,!1),t.add(r))}function Ka(e,n,t){var r=0;n&&(r|=4),Ag(t,e,r,n)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Yi(e){if(!e[Lo]){e[Lo]=!0,Mm.forEach(function(t){t!=="selectionchange"&&(gS.has(t)||Ka(t,!1,e),Ka(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Lo]||(n[Lo]=!0,Ka("selectionchange",!1,n))}}function Ag(e,n,t,r){switch(cg(n)){case 1:var i=Ix;break;case 4:i=Rx;break;default:i=Cc}t=i.bind(null,n,t,e),i=void 0,!Zl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Qa(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Kt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Xm(function(){var u=o,f=yc(t),c=[];e:{var h=Pg.get(e);if(h!==void 0){var d=Ec,p=e;switch(e){case"keypress":if(ns(t)===0)break e;case"keydown":case"keyup":d=Gx;break;case"focusin":p="focus",d=Wa;break;case"focusout":p="blur",d=Wa;break;case"beforeblur":case"afterblur":d=Wa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Qx;break;case Cg:case wg:case Eg:d=Fx;break;case kg:d=Yx;break;case"scroll":d=Vx;break;case"wheel":d=Jx;break;case"copy":case"cut":case"paste":d=zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=yh}var x=(n&4)!==0,C=!x&&e==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var y=u,v;y!==null;){v=y;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,g!==null&&(w=$i(y,g),w!=null&&x.push(Zi(y,w,v)))),C)break;y=y.return}0<x.length&&(h=new d(h,p,null,t,f),c.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",h&&t!==Xl&&(p=t.relatedTarget||t.fromElement)&&(Kt(p)||p[nt]))break e;if((d||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,d?(p=t.relatedTarget||t.toElement,d=u,p=p?Kt(p):null,p!==null&&(C=ur(p),p!==C||p.tag!==5&&p.tag!==6)&&(p=null)):(d=null,p=u),d!==p)){if(x=mh,w="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(x=yh,w="onPointerLeave",g="onPointerEnter",y="pointer"),C=d==null?h:Er(d),v=p==null?h:Er(p),h=new x(w,y+"leave",d,t,f),h.target=C,h.relatedTarget=v,w=null,Kt(f)===u&&(x=new x(g,y+"enter",p,t,f),x.target=v,x.relatedTarget=C,w=x),C=w,d&&p)n:{for(x=d,g=p,y=0,v=x;v;v=pr(v))y++;for(v=0,w=g;w;w=pr(w))v++;for(;0<y-v;)x=pr(x),y--;for(;0<v-y;)g=pr(g),v--;for(;y--;){if(x===g||g!==null&&x===g.alternate)break n;x=pr(x),g=pr(g)}x=null}else x=null;d!==null&&bh(c,h,d,x,!1),p!==null&&C!==null&&bh(c,C,p,x,!0)}}e:{if(h=u?Er(u):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var T=sS;else if(Sh(h))if(gg)T=cS;else{T=lS;var k=aS}else(d=h.nodeName)&&d.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=uS);if(T&&(T=T(e,u))){mg(c,T,t,f);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&$l(h,"number",h.value)}switch(k=u?Er(u):window,e){case"focusin":(Sh(k)||k.contentEditable==="true")&&(Cr=k,ru=u,Ii=null);break;case"focusout":Ii=ru=Cr=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Ph(c,t,f);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":Ph(c,t,f)}var D;if(Pc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Sr?dg(e,t)&&(b="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(hg&&t.locale!=="ko"&&(Sr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Sr&&(D=fg()):(yt=f,wc="value"in yt?yt.value:yt.textContent,Sr=!0)),k=Es(u,b),0<k.length&&(b=new gh(b,e,null,t,f),c.push({event:b,listeners:k}),D?b.data=D:(D=pg(t),D!==null&&(b.data=D)))),(D=nS?tS(e,t):rS(e,t))&&(u=Es(u,"onBeforeInput"),0<u.length&&(f=new gh("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:u}),f.data=D))}Tg(c,n)})}function Zi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Es(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$i(e,t),o!=null&&r.unshift(Zi(e,o,i)),o=$i(e,n),o!=null&&r.push(Zi(e,o,i))),e=e.return}return r}function pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bh(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=$i(t,o),l!=null&&s.unshift(Zi(t,l,a))):i||(l=$i(t,o),l!=null&&s.push(Zi(t,l,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var yS=/\r\n?/g,vS=/\u0000|\uFFFD/g;function Dh(e){return(typeof e=="string"?e:""+e).replace(yS,`
`).replace(vS,"")}function jo(e,n,t){if(n=Dh(n),Dh(e)!==n&&t)throw Error(R(425))}function ks(){}var ou=null,su=null;function au(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(e){return Ih.resolve(null).then(e).catch(CS)}:lu;function CS(e){setTimeout(function(){throw e})}function Xa(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Ki(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Ki(n)}function Et(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Rh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ti=Math.random().toString(36).slice(2),zn="__reactFiber$"+ti,Ji="__reactProps$"+ti,nt="__reactContainer$"+ti,uu="__reactEvents$"+ti,wS="__reactListeners$"+ti,ES="__reactHandles$"+ti;function Kt(e){var n=e[zn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[nt]||t[zn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Rh(e);e!==null;){if(t=e[zn])return t;e=Rh(e)}return n}e=t,t=e.parentNode}return null}function yo(e){return e=e[zn]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function aa(e){return e[Ji]||null}var cu=[],kr=-1;function Lt(e){return{current:e}}function ue(e){0>kr||(e.current=cu[kr],cu[kr]=null,kr--)}function ae(e,n){kr++,cu[kr]=e.current,e.current=n}var Rt={},Fe=Lt(Rt),Xe=Lt(!1),nr=Rt;function Wr(e,n){var t=e.type.contextTypes;if(!t)return Rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(e){return e=e.childContextTypes,e!=null}function Ps(){ue(Xe),ue(Fe)}function Vh(e,n,t){if(Fe.current!==Rt)throw Error(R(168));ae(Fe,n),ae(Xe,t)}function bg(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(R(108,ax(e)||"Unknown",i));return ge({},t,r)}function Ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,nr=Fe.current,ae(Fe,e),ae(Xe,Xe.current),!0}function Nh(e,n,t){var r=e.stateNode;if(!r)throw Error(R(169));t?(e=bg(e,n,nr),r.__reactInternalMemoizedMergedChildContext=e,ue(Xe),ue(Fe),ae(Fe,e)):ue(Xe),ae(Xe,t)}var qn=null,la=!1,Ya=!1;function Dg(e){qn===null?qn=[e]:qn.push(e)}function kS(e){la=!0,Dg(e)}function jt(){if(!Ya&&qn!==null){Ya=!0;var e=0,n=re;try{var t=qn;for(re=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}qn=null,la=!1}catch(i){throw qn!==null&&(qn=qn.slice(e+1)),eg(vc,jt),i}finally{re=n,Ya=!1}}return null}var Pr=[],Tr=0,As=null,bs=0,gn=[],yn=0,tr=null,Kn=1,Qn="";function Ut(e,n){Pr[Tr++]=bs,Pr[Tr++]=As,As=e,bs=n}function Ig(e,n,t){gn[yn++]=Kn,gn[yn++]=Qn,gn[yn++]=tr,tr=e;var r=Kn;e=Qn;var i=32-In(r)-1;r&=~(1<<i),t+=1;var o=32-In(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Kn=1<<32-In(n)+i|t<<i|r,Qn=o+e}else Kn=1<<o|t<<i|r,Qn=e}function Ac(e){e.return!==null&&(Ut(e,1),Ig(e,1,0))}function bc(e){for(;e===As;)As=Pr[--Tr],Pr[Tr]=null,bs=Pr[--Tr],Pr[Tr]=null;for(;e===tr;)tr=gn[--yn],gn[yn]=null,Qn=gn[--yn],gn[yn]=null,Kn=gn[--yn],gn[yn]=null}var an=null,sn=null,fe=!1,Dn=null;function Rg(e,n){var t=xn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Mh(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,an=e,sn=Et(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,an=e,sn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=tr!==null?{id:Kn,overflow:Qn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=xn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,an=e,sn=null,!0):!1;default:return!1}}function fu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hu(e){if(fe){var n=sn;if(n){var t=n;if(!Mh(e,n)){if(fu(e))throw Error(R(418));n=Et(t.nextSibling);var r=an;n&&Mh(e,n)?Rg(r,t):(e.flags=e.flags&-4097|2,fe=!1,an=e)}}else{if(fu(e))throw Error(R(418));e.flags=e.flags&-4097|2,fe=!1,an=e}}}function Lh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}function Fo(e){if(e!==an)return!1;if(!fe)return Lh(e),fe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!au(e.type,e.memoizedProps)),n&&(n=sn)){if(fu(e))throw Vg(),Error(R(418));for(;n;)Rg(e,n),n=Et(n.nextSibling)}if(Lh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){sn=Et(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}sn=null}}else sn=an?Et(e.stateNode.nextSibling):null;return!0}function Vg(){for(var e=sn;e;)e=Et(e.nextSibling)}function Ur(){sn=an=null,fe=!1}function Dc(e){Dn===null?Dn=[e]:Dn.push(e)}var PS=ot.ReactCurrentBatchConfig;function pi(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(R(309));var r=t.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(R(284));if(!t._owner)throw Error(R(290,e))}return e}function Oo(e,n){throw e=Object.prototype.toString.call(n),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function jh(e){var n=e._init;return n(e._payload)}function Ng(e){function n(g,y){if(e){var v=g.deletions;v===null?(g.deletions=[y],g.flags|=16):v.push(y)}}function t(g,y){if(!e)return null;for(;y!==null;)n(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=At(g,y),g.index=0,g.sibling=null,g}function o(g,y,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<y?(g.flags|=2,y):v):(g.flags|=2,y)):(g.flags|=1048576,y)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,y,v,w){return y===null||y.tag!==6?(y=il(v,g.mode,w),y.return=g,y):(y=i(y,v),y.return=g,y)}function l(g,y,v,w){var T=v.type;return T===xr?f(g,y,v.props.children,w,v.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ht&&jh(T)===y.type)?(w=i(y,v.props),w.ref=pi(g,y,v),w.return=g,w):(w=ls(v.type,v.key,v.props,null,g.mode,w),w.ref=pi(g,y,v),w.return=g,w)}function u(g,y,v,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=ol(v,g.mode,w),y.return=g,y):(y=i(y,v.children||[]),y.return=g,y)}function f(g,y,v,w,T){return y===null||y.tag!==7?(y=Jt(v,g.mode,w,T),y.return=g,y):(y=i(y,v),y.return=g,y)}function c(g,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=il(""+y,g.mode,v),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ao:return v=ls(y.type,y.key,y.props,null,g.mode,v),v.ref=pi(g,null,y),v.return=g,v;case vr:return y=ol(y,g.mode,v),y.return=g,y;case ht:var w=y._init;return c(g,w(y._payload),v)}if(wi(y)||ui(y))return y=Jt(y,g.mode,v,null),y.return=g,y;Oo(g,y)}return null}function h(g,y,v,w){var T=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(g,y,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ao:return v.key===T?l(g,y,v,w):null;case vr:return v.key===T?u(g,y,v,w):null;case ht:return T=v._init,h(g,y,T(v._payload),w)}if(wi(v)||ui(v))return T!==null?null:f(g,y,v,w,null);Oo(g,v)}return null}function d(g,y,v,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(v)||null,a(y,g,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ao:return g=g.get(w.key===null?v:w.key)||null,l(y,g,w,T);case vr:return g=g.get(w.key===null?v:w.key)||null,u(y,g,w,T);case ht:var k=w._init;return d(g,y,v,k(w._payload),T)}if(wi(w)||ui(w))return g=g.get(v)||null,f(y,g,w,T,null);Oo(y,w)}return null}function p(g,y,v,w){for(var T=null,k=null,D=y,b=y=0,L=null;D!==null&&b<v.length;b++){D.index>b?(L=D,D=null):L=D.sibling;var P=h(g,D,v[b],w);if(P===null){D===null&&(D=L);break}e&&D&&P.alternate===null&&n(g,D),y=o(P,y,b),k===null?T=P:k.sibling=P,k=P,D=L}if(b===v.length)return t(g,D),fe&&Ut(g,b),T;if(D===null){for(;b<v.length;b++)D=c(g,v[b],w),D!==null&&(y=o(D,y,b),k===null?T=D:k.sibling=D,k=D);return fe&&Ut(g,b),T}for(D=r(g,D);b<v.length;b++)L=d(D,g,b,v[b],w),L!==null&&(e&&L.alternate!==null&&D.delete(L.key===null?b:L.key),y=o(L,y,b),k===null?T=L:k.sibling=L,k=L);return e&&D.forEach(function(j){return n(g,j)}),fe&&Ut(g,b),T}function x(g,y,v,w){var T=ui(v);if(typeof T!="function")throw Error(R(150));if(v=T.call(v),v==null)throw Error(R(151));for(var k=T=null,D=y,b=y=0,L=null,P=v.next();D!==null&&!P.done;b++,P=v.next()){D.index>b?(L=D,D=null):L=D.sibling;var j=h(g,D,P.value,w);if(j===null){D===null&&(D=L);break}e&&D&&j.alternate===null&&n(g,D),y=o(j,y,b),k===null?T=j:k.sibling=j,k=j,D=L}if(P.done)return t(g,D),fe&&Ut(g,b),T;if(D===null){for(;!P.done;b++,P=v.next())P=c(g,P.value,w),P!==null&&(y=o(P,y,b),k===null?T=P:k.sibling=P,k=P);return fe&&Ut(g,b),T}for(D=r(g,D);!P.done;b++,P=v.next())P=d(D,g,b,P.value,w),P!==null&&(e&&P.alternate!==null&&D.delete(P.key===null?b:P.key),y=o(P,y,b),k===null?T=P:k.sibling=P,k=P);return e&&D.forEach(function(F){return n(g,F)}),fe&&Ut(g,b),T}function C(g,y,v,w){if(typeof v=="object"&&v!==null&&v.type===xr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ao:e:{for(var T=v.key,k=y;k!==null;){if(k.key===T){if(T=v.type,T===xr){if(k.tag===7){t(g,k.sibling),y=i(k,v.props.children),y.return=g,g=y;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ht&&jh(T)===k.type){t(g,k.sibling),y=i(k,v.props),y.ref=pi(g,k,v),y.return=g,g=y;break e}t(g,k);break}else n(g,k);k=k.sibling}v.type===xr?(y=Jt(v.props.children,g.mode,w,v.key),y.return=g,g=y):(w=ls(v.type,v.key,v.props,null,g.mode,w),w.ref=pi(g,y,v),w.return=g,g=w)}return s(g);case vr:e:{for(k=v.key;y!==null;){if(y.key===k)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){t(g,y.sibling),y=i(y,v.children||[]),y.return=g,g=y;break e}else{t(g,y);break}else n(g,y);y=y.sibling}y=ol(v,g.mode,w),y.return=g,g=y}return s(g);case ht:return k=v._init,C(g,y,k(v._payload),w)}if(wi(v))return p(g,y,v,w);if(ui(v))return x(g,y,v,w);Oo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(t(g,y.sibling),y=i(y,v),y.return=g,g=y):(t(g,y),y=il(v,g.mode,w),y.return=g,g=y),s(g)):t(g,y)}return C}var Hr=Ng(!0),Mg=Ng(!1),Ds=Lt(null),Is=null,Ar=null,Ic=null;function Rc(){Ic=Ar=Is=null}function Vc(e){var n=Ds.current;ue(Ds),e._currentValue=n}function du(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Or(e,n){Is=e,Ic=Ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Qe=!0),e.firstContext=null)}function Cn(e){var n=e._currentValue;if(Ic!==e)if(e={context:e,memoizedValue:n,next:null},Ar===null){if(Is===null)throw Error(R(308));Ar=e,Is.dependencies={lanes:0,firstContext:e}}else Ar=Ar.next=e;return n}var Qt=null;function Nc(e){Qt===null?Qt=[e]:Qt.push(e)}function Lg(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Nc(n)):(t.next=i.next,i.next=t),n.interleaved=t,tt(e,r)}function tt(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var dt=!1;function Mc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jg(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function kt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,tt(e,t)}return i=r.interleaved,i===null?(n.next=n,Nc(r)):(n.next=i.next,i.next=n),r.interleaved=n,tt(e,t)}function ts(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,xc(e,t)}}function Fh(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Rs(e,n,t,r){var i=e.updateQueue;dt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;s=0,f=u=l=null,a=o;do{var h=a.lane,d=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,x=a;switch(h=n,d=t,x.tag){case 1:if(p=x.payload,typeof p=="function"){c=p.call(d,c,h);break e}c=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=x.payload,h=typeof p=="function"?p.call(d,c,h):p,h==null)break e;c=ge({},c,h);break e;case 2:dt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else d={eventTime:d,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=d,l=c):f=f.next=d,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);ir|=s,e.lanes=s,e.memoizedState=c}}function Oh(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var vo={},Bn=Lt(vo),eo=Lt(vo),no=Lt(vo);function Xt(e){if(e===vo)throw Error(R(174));return e}function Lc(e,n){switch(ae(no,n),ae(eo,e),ae(Bn,vo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ql(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ql(n,e)}ue(Bn),ae(Bn,n)}function $r(){ue(Bn),ue(eo),ue(no)}function Fg(e){Xt(no.current);var n=Xt(Bn.current),t=ql(n,e.type);n!==t&&(ae(eo,e),ae(Bn,t))}function jc(e){eo.current===e&&(ue(Bn),ue(eo))}var he=Lt(0);function Vs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Za=[];function Fc(){for(var e=0;e<Za.length;e++)Za[e]._workInProgressVersionPrimary=null;Za.length=0}var rs=ot.ReactCurrentDispatcher,Ja=ot.ReactCurrentBatchConfig,rr=0,pe=null,Pe=null,Ae=null,Ns=!1,Ri=!1,to=0,TS=0;function Ve(){throw Error(R(321))}function Oc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Nn(e[t],n[t]))return!1;return!0}function zc(e,n,t,r,i,o){if(rr=o,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,rs.current=e===null||e.memoizedState===null?IS:RS,e=t(r,i),Ri){o=0;do{if(Ri=!1,to=0,25<=o)throw Error(R(301));o+=1,Ae=Pe=null,n.updateQueue=null,rs.current=VS,e=t(r,i)}while(Ri)}if(rs.current=Ms,n=Pe!==null&&Pe.next!==null,rr=0,Ae=Pe=pe=null,Ns=!1,n)throw Error(R(300));return e}function _c(){var e=to!==0;return to=0,e}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?pe.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function wn(){if(Pe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=Ae===null?pe.memoizedState:Ae.next;if(n!==null)Ae=n,Pe=e;else{if(e===null)throw Error(R(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ae===null?pe.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function ro(e,n){return typeof n=="function"?n(e):n}function el(e){var n=wn(),t=n.queue;if(t===null)throw Error(R(311));t.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((rr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,s=r):l=l.next=c,pe.lanes|=f,ir|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Nn(r,n.memoizedState)||(Qe=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,pe.lanes|=o,ir|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function nl(e){var n=wn(),t=n.queue;if(t===null)throw Error(R(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Nn(o,n.memoizedState)||(Qe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Og(){}function zg(e,n){var t=pe,r=wn(),i=n(),o=!Nn(r.memoizedState,i);if(o&&(r.memoizedState=i,Qe=!0),r=r.queue,Bc(Wg.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Ae!==null&&Ae.memoizedState.tag&1){if(t.flags|=2048,io(9,Bg.bind(null,t,r,i,n),void 0,null),be===null)throw Error(R(349));rr&30||_g(t,n,i)}return i}function _g(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=pe.updateQueue,n===null?(n={lastEffect:null,stores:null},pe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Bg(e,n,t,r){n.value=t,n.getSnapshot=r,Ug(n)&&Hg(e)}function Wg(e,n,t){return t(function(){Ug(n)&&Hg(e)})}function Ug(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Nn(e,t)}catch{return!0}}function Hg(e){var n=tt(e,1);n!==null&&Rn(n,e,1,-1)}function zh(e){var n=Fn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},n.queue=e,e=e.dispatch=DS.bind(null,pe,e),[n.memoizedState,e]}function io(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=pe.updateQueue,n===null?(n={lastEffect:null,stores:null},pe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function $g(){return wn().memoizedState}function is(e,n,t,r){var i=Fn();pe.flags|=e,i.memoizedState=io(1|n,t,void 0,r===void 0?null:r)}function ua(e,n,t,r){var i=wn();r=r===void 0?null:r;var o=void 0;if(Pe!==null){var s=Pe.memoizedState;if(o=s.destroy,r!==null&&Oc(r,s.deps)){i.memoizedState=io(n,t,o,r);return}}pe.flags|=e,i.memoizedState=io(1|n,t,o,r)}function _h(e,n){return is(8390656,8,e,n)}function Bc(e,n){return ua(2048,8,e,n)}function Gg(e,n){return ua(4,2,e,n)}function qg(e,n){return ua(4,4,e,n)}function Kg(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qg(e,n,t){return t=t!=null?t.concat([e]):null,ua(4,4,Kg.bind(null,n,e),t)}function Wc(){}function Xg(e,n){var t=wn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Oc(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Yg(e,n){var t=wn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Oc(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Zg(e,n,t){return rr&21?(Nn(t,n)||(t=rg(),pe.lanes|=t,ir|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=t)}function AS(e,n){var t=re;re=t!==0&&4>t?t:4,e(!0);var r=Ja.transition;Ja.transition={};try{e(!1),n()}finally{re=t,Ja.transition=r}}function Jg(){return wn().memoizedState}function bS(e,n,t){var r=Tt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ey(e))ny(n,t);else if(t=Lg(e,n,t,r),t!==null){var i=Ue();Rn(t,e,r,i),ty(t,n,r)}}function DS(e,n,t){var r=Tt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ey(e))ny(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,a=o(s,t);if(i.hasEagerState=!0,i.eagerState=a,Nn(a,s)){var l=n.interleaved;l===null?(i.next=i,Nc(n)):(i.next=l.next,l.next=i),n.interleaved=i;return}}catch{}finally{}t=Lg(e,n,i,r),t!==null&&(i=Ue(),Rn(t,e,r,i),ty(t,n,r))}}function ey(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function ny(e,n){Ri=Ns=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ty(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,xc(e,t)}}var Ms={readContext:Cn,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},IS={readContext:Cn,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:_h,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,is(4194308,4,Kg.bind(null,n,e),t)},useLayoutEffect:function(e,n){return is(4194308,4,e,n)},useInsertionEffect:function(e,n){return is(4,2,e,n)},useMemo:function(e,n){var t=Fn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Fn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=bS.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:zh,useDebugValue:Wc,useDeferredValue:function(e){return Fn().memoizedState=e},useTransition:function(){var e=zh(!1),n=e[0];return e=AS.bind(null,e[1]),Fn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=pe,i=Fn();if(fe){if(t===void 0)throw Error(R(407));t=t()}else{if(t=n(),be===null)throw Error(R(349));rr&30||_g(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,_h(Wg.bind(null,r,o,e),[e]),r.flags|=2048,io(9,Bg.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Fn(),n=be.identifierPrefix;if(fe){var t=Qn,r=Kn;t=(r&~(1<<32-In(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=to++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=TS++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},RS={readContext:Cn,useCallback:Xg,useContext:Cn,useEffect:Bc,useImperativeHandle:Qg,useInsertionEffect:Gg,useLayoutEffect:qg,useMemo:Yg,useReducer:el,useRef:$g,useState:function(){return el(ro)},useDebugValue:Wc,useDeferredValue:function(e){var n=wn();return Zg(n,Pe.memoizedState,e)},useTransition:function(){var e=el(ro)[0],n=wn().memoizedState;return[e,n]},useMutableSource:Og,useSyncExternalStore:zg,useId:Jg,unstable_isNewReconciler:!1},VS={readContext:Cn,useCallback:Xg,useContext:Cn,useEffect:Bc,useImperativeHandle:Qg,useInsertionEffect:Gg,useLayoutEffect:qg,useMemo:Yg,useReducer:nl,useRef:$g,useState:function(){return nl(ro)},useDebugValue:Wc,useDeferredValue:function(e){var n=wn();return Pe===null?n.memoizedState=e:Zg(n,Pe.memoizedState,e)},useTransition:function(){var e=nl(ro)[0],n=wn().memoizedState;return[e,n]},useMutableSource:Og,useSyncExternalStore:zg,useId:Jg,unstable_isNewReconciler:!1};function An(e,n){if(e&&e.defaultProps){n=ge({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function pu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ge({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ca={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ue(),i=Tt(e),o=Yn(r,i);o.payload=n,t!=null&&(o.callback=t),n=kt(e,o,i),n!==null&&(Rn(n,e,i,r),ts(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ue(),i=Tt(e),o=Yn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=kt(e,o,i),n!==null&&(Rn(n,e,i,r),ts(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ue(),r=Tt(e),i=Yn(t,r);i.tag=2,n!=null&&(i.callback=n),n=kt(e,i,r),n!==null&&(Rn(n,e,r,t),ts(n,e,r))}};function Bh(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!Xi(t,r)||!Xi(i,o):!0}function ry(e,n,t){var r=!1,i=Rt,o=n.contextType;return typeof o=="object"&&o!==null?o=Cn(o):(i=Ye(n)?nr:Fe.current,r=n.contextTypes,o=(r=r!=null)?Wr(e,i):Rt),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ca,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Wh(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ca.enqueueReplaceState(n,n.state,null)}function mu(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Mc(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=Cn(o):(o=Ye(n)?nr:Fe.current,i.context=Wr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(pu(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ca.enqueueReplaceState(i,i.state,null),Rs(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gr(e,n){try{var t="",r=n;do t+=sx(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function tl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function gu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var NS=typeof WeakMap=="function"?WeakMap:Map;function iy(e,n,t){t=Yn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){js||(js=!0,Tu=r),gu(e,n)},t}function oy(e,n,t){t=Yn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){gu(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){gu(e,n),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Uh(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new NS;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=qS.bind(null,e,n,t),n.then(e,e))}function Hh(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function $h(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Yn(-1,1),n.tag=2,kt(t,n,1))),t.lanes|=1),e)}var MS=ot.ReactCurrentOwner,Qe=!1;function _e(e,n,t,r){n.child=e===null?Mg(n,null,t,r):Hr(n,e.child,t,r)}function Gh(e,n,t,r,i){t=t.render;var o=n.ref;return Or(n,i),r=zc(e,n,t,r,o,i),t=_c(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rt(e,n,i)):(fe&&t&&Ac(n),n.flags|=1,_e(e,n,r,i),n.child)}function qh(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Xc(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,sy(e,n,o,r,i)):(e=ls(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:Xi,t(s,r)&&e.ref===n.ref)return rt(e,n,i)}return n.flags|=1,e=At(o,r),e.ref=n.ref,e.return=n,n.child=e}function sy(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Xi(o,r)&&e.ref===n.ref)if(Qe=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Qe=!0);else return n.lanes=e.lanes,rt(e,n,i)}return yu(e,n,t,r,i)}function ay(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Dr,on),on|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ae(Dr,on),on|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,ae(Dr,on),on|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,ae(Dr,on),on|=r;return _e(e,n,i,t),n.child}function ly(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function yu(e,n,t,r,i){var o=Ye(t)?nr:Fe.current;return o=Wr(n,o),Or(n,i),t=zc(e,n,t,r,o,i),r=_c(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,rt(e,n,i)):(fe&&r&&Ac(n),n.flags|=1,_e(e,n,t,i),n.child)}function Kh(e,n,t,r,i){if(Ye(t)){var o=!0;Ts(n)}else o=!1;if(Or(n,i),n.stateNode===null)os(e,n),ry(n,t,r),mu(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var l=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=Ye(t)?nr:Fe.current,u=Wr(n,u));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Wh(n,s,r,u),dt=!1;var h=n.memoizedState;s.state=h,Rs(n,r,s,i),l=n.memoizedState,a!==r||h!==l||Xe.current||dt?(typeof f=="function"&&(pu(n,t,f,r),l=n.memoizedState),(a=dt||Bh(n,t,a,r,h,l,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,jg(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:An(n.type,a),s.props=u,c=n.pendingProps,h=s.context,l=t.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=Ye(t)?nr:Fe.current,l=Wr(n,l));var d=t.getDerivedStateFromProps;(f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==c||h!==l)&&Wh(n,s,r,l),dt=!1,h=n.memoizedState,s.state=h,Rs(n,r,s,i);var p=n.memoizedState;a!==c||h!==p||Xe.current||dt?(typeof d=="function"&&(pu(n,t,d,r),p=n.memoizedState),(u=dt||Bh(n,t,u,r,h,p,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,p,l)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=p),s.props=r,s.state=p,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return vu(e,n,t,r,o,i)}function vu(e,n,t,r,i,o){ly(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&Nh(n,t,!1),rt(e,n,o);r=n.stateNode,MS.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=Hr(n,e.child,null,o),n.child=Hr(n,null,a,o)):_e(e,n,a,o),n.memoizedState=r.state,i&&Nh(n,t,!0),n.child}function uy(e){var n=e.stateNode;n.pendingContext?Vh(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Vh(e,n.context,!1),Lc(e,n.containerInfo)}function Qh(e,n,t,r,i){return Ur(),Dc(i),n.flags|=256,_e(e,n,t,r),n.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function Su(e){return{baseLanes:e,cachePool:null,transitions:null}}function cy(e,n,t){var r=n.pendingProps,i=he.current,o=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(he,i&1),e===null)return hu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,o?(r=n.mode,o=n.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=da(s,r,0,null),e=Jt(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Su(t),n.memoizedState=xu,e):Uc(n,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return LS(e,n,s,r,a,i,t);if(o){o=r.fallback,s=n.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=At(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=At(a,o):(o=Jt(o,s,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,s=e.child.memoizedState,s=s===null?Su(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=xu,r}return o=e.child,e=o.sibling,r=At(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Uc(e,n){return n=da({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function zo(e,n,t,r){return r!==null&&Dc(r),Hr(n,e.child,null,t),e=Uc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function LS(e,n,t,r,i,o,s){if(t)return n.flags&256?(n.flags&=-257,r=tl(Error(R(422))),zo(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=da({mode:"visible",children:r.children},i,0,null),o=Jt(o,i,s,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Hr(n,e.child,null,s),n.child.memoizedState=Su(s),n.memoizedState=xu,o);if(!(n.mode&1))return zo(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(R(419)),r=tl(o,r,void 0),zo(e,n,s,r)}if(a=(s&e.childLanes)!==0,Qe||a){if(r=be,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tt(e,i),Rn(r,e,i,-1))}return Qc(),r=tl(Error(R(421))),zo(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=KS.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,sn=Et(i.nextSibling),an=n,fe=!0,Dn=null,e!==null&&(gn[yn++]=Kn,gn[yn++]=Qn,gn[yn++]=tr,Kn=e.id,Qn=e.overflow,tr=n),n=Uc(n,r.children),n.flags|=4096,n)}function Xh(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),du(e.return,n,t)}function rl(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function fy(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,n,r.children,t),r=he.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xh(e,t,n);else if(e.tag===19)Xh(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(he,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Vs(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),rl(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Vs(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}rl(n,!0,t,null,o);break;case"together":rl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function os(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ir|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(R(153));if(n.child!==null){for(e=n.child,t=At(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=At(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function jS(e,n,t){switch(n.tag){case 3:uy(n),Ur();break;case 5:Fg(n);break;case 1:Ye(n.type)&&Ts(n);break;case 4:Lc(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ae(Ds,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ae(he,he.current&1),n.flags|=128,null):t&n.child.childLanes?cy(e,n,t):(ae(he,he.current&1),e=rt(e,n,t),e!==null?e.sibling:null);ae(he,he.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return fy(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(he,he.current),r)break;return null;case 22:case 23:return n.lanes=0,ay(e,n,t)}return rt(e,n,t)}var hy,Cu,dy,py;hy=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Cu=function(){};dy=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Xt(Bn.current);var o=null;switch(t){case"input":i=Ul(e,i),r=Ul(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=Gl(e,i),r=Gl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ks)}Kl(t,r);var s;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ui.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(t||(t={}),t[s]=l[s])}else t||(o||(o=[]),o.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};py=function(e,n,t,r){t!==r&&(n.flags|=4)};function mi(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function FS(e,n,t){var r=n.pendingProps;switch(bc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(n),null;case 1:return Ye(n.type)&&Ps(),Ne(n),null;case 3:return r=n.stateNode,$r(),ue(Xe),ue(Fe),Fc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Dn!==null&&(Du(Dn),Dn=null))),Cu(e,n),Ne(n),null;case 5:jc(n);var i=Xt(no.current);if(t=n.type,e!==null&&n.stateNode!=null)dy(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(R(166));return Ne(n),null}if(e=Xt(Bn.current),Fo(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[zn]=n,r[Ji]=o,e=(n.mode&1)!==0,t){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)le(ki[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":oh(r,o),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},le("invalid",r);break;case"textarea":ah(r,o),le("invalid",r)}Kl(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&jo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&jo(r.textContent,a,e),i=["children",""+a]):Ui.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&le("scroll",r)}switch(t){case"input":bo(r),sh(r,o,!0);break;case"textarea":bo(r),lh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ks)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wm(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[zn]=n,e[Ji]=r,hy(e,n,!1,!1),n.stateNode=e;e:{switch(s=Ql(t,r),t){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)le(ki[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":oh(e,r),i=Ul(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),le("invalid",e);break;case"textarea":ah(e,r),i=Gl(e,r),le("invalid",e);break;default:i=r}Kl(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?$m(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Um(e,l)):o==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Hi(e,l):typeof l=="number"&&Hi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ui.hasOwnProperty(o)?l!=null&&o==="onScroll"&&le("scroll",e):l!=null&&dc(e,o,l,s))}switch(t){case"input":bo(e),sh(e,r,!1);break;case"textarea":bo(e),lh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+It(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ks)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ne(n),null;case 6:if(e&&n.stateNode!=null)py(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(R(166));if(t=Xt(no.current),Xt(Bn.current),Fo(n)){if(r=n.stateNode,t=n.memoizedProps,r[zn]=n,(o=r.nodeValue!==t)&&(e=an,e!==null))switch(e.tag){case 3:jo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jo(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[zn]=n,n.stateNode=r}return Ne(n),null;case 13:if(ue(he),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&sn!==null&&n.mode&1&&!(n.flags&128))Vg(),Ur(),n.flags|=98560,o=!1;else if(o=Fo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[zn]=n}else Ur(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ne(n),o=!1}else Dn!==null&&(Du(Dn),Dn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||he.current&1?Te===0&&(Te=3):Qc())),n.updateQueue!==null&&(n.flags|=4),Ne(n),null);case 4:return $r(),Cu(e,n),e===null&&Yi(n.stateNode.containerInfo),Ne(n),null;case 10:return Vc(n.type._context),Ne(n),null;case 17:return Ye(n.type)&&Ps(),Ne(n),null;case 19:if(ue(he),o=n.memoizedState,o===null)return Ne(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)mi(o,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Vs(e),s!==null){for(n.flags|=128,mi(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ae(he,he.current&1|2),n.child}e=e.sibling}o.tail!==null&&xe()>qr&&(n.flags|=128,r=!0,mi(o,!1),n.lanes=4194304)}else{if(!r)if(e=Vs(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),mi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!fe)return Ne(n),null}else 2*xe()-o.renderingStartTime>qr&&t!==1073741824&&(n.flags|=128,r=!0,mi(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=xe(),n.sibling=null,t=he.current,ae(he,r?t&1|2:t&1),n):(Ne(n),null);case 22:case 23:return Kc(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?on&1073741824&&(Ne(n),n.subtreeFlags&6&&(n.flags|=8192)):Ne(n),null;case 24:return null;case 25:return null}throw Error(R(156,n.tag))}function OS(e,n){switch(bc(n),n.tag){case 1:return Ye(n.type)&&Ps(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $r(),ue(Xe),ue(Fe),Fc(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return jc(n),null;case 13:if(ue(he),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(R(340));Ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ue(he),null;case 4:return $r(),null;case 10:return Vc(n.type._context),null;case 22:case 23:return Kc(),null;case 24:return null;default:return null}}var _o=!1,Le=!1,zS=typeof WeakSet=="function"?WeakSet:Set,O=null;function br(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ve(e,n,r)}else t.current=null}function wu(e,n,t){try{t()}catch(r){ve(e,n,r)}}var Yh=!1;function _S(e,n){if(ou=Cs,e=xg(),Tc(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,a=-1,l=-1,u=0,f=0,c=e,h=null;n:for(;;){for(var d;c!==t||i!==0&&c.nodeType!==3||(a=s+i),c!==o||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(d=c.firstChild)!==null;)h=c,c=d;for(;;){if(c===e)break n;if(h===t&&++u===i&&(a=s),h===o&&++f===r&&(l=s),(d=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=d}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(su={focusedElem:e,selectionRange:t},Cs=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var p=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var x=p.memoizedProps,C=p.memoizedState,g=n.stateNode,y=g.getSnapshotBeforeUpdate(n.elementType===n.type?x:An(n.type,x),C);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){ve(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return p=Yh,Yh=!1,p}function Vi(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&wu(n,t,o)}i=i.next}while(i!==r)}}function fa(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Eu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function my(e){var n=e.alternate;n!==null&&(e.alternate=null,my(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[zn],delete n[Ji],delete n[uu],delete n[wS],delete n[ES])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gy(e){return e.tag===5||e.tag===3||e.tag===4}function Zh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ks));else if(r!==4&&(e=e.child,e!==null))for(ku(e,n,t),e=e.sibling;e!==null;)ku(e,n,t),e=e.sibling}function Pu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pu(e,n,t),e=e.sibling;e!==null;)Pu(e,n,t),e=e.sibling}var De=null,bn=!1;function ut(e,n,t){for(t=t.child;t!==null;)yy(e,n,t),t=t.sibling}function yy(e,n,t){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(ra,t)}catch{}switch(t.tag){case 5:Le||br(t,n);case 6:var r=De,i=bn;De=null,ut(e,n,t),De=r,bn=i,De!==null&&(bn?(e=De,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):De.removeChild(t.stateNode));break;case 18:De!==null&&(bn?(e=De,t=t.stateNode,e.nodeType===8?Xa(e.parentNode,t):e.nodeType===1&&Xa(e,t),Ki(e)):Xa(De,t.stateNode));break;case 4:r=De,i=bn,De=t.stateNode.containerInfo,bn=!0,ut(e,n,t),De=r,bn=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&wu(t,n,s),i=i.next}while(i!==r)}ut(e,n,t);break;case 1:if(!Le&&(br(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){ve(t,n,a)}ut(e,n,t);break;case 21:ut(e,n,t);break;case 22:t.mode&1?(Le=(r=Le)||t.memoizedState!==null,ut(e,n,t),Le=r):ut(e,n,t);break;default:ut(e,n,t)}}function Jh(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new zS),n.forEach(function(r){var i=QS.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Pn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,s=n,a=s;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,bn=!1;break e;case 3:De=a.stateNode.containerInfo,bn=!0;break e;case 4:De=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(De===null)throw Error(R(160));yy(o,s,i),De=null,bn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)vy(n,e),n=n.sibling}function vy(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pn(n,e),jn(e),r&4){try{Vi(3,e,e.return),fa(3,e)}catch(x){ve(e,e.return,x)}try{Vi(5,e,e.return)}catch(x){ve(e,e.return,x)}}break;case 1:Pn(n,e),jn(e),r&512&&t!==null&&br(t,t.return);break;case 5:if(Pn(n,e),jn(e),r&512&&t!==null&&br(t,t.return),e.flags&32){var i=e.stateNode;try{Hi(i,"")}catch(x){ve(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&_m(i,o),Ql(a,s);var u=Ql(a,o);for(s=0;s<l.length;s+=2){var f=l[s],c=l[s+1];f==="style"?$m(i,c):f==="dangerouslySetInnerHTML"?Um(i,c):f==="children"?Hi(i,c):dc(i,f,c,u)}switch(a){case"input":Hl(i,o);break;case"textarea":Bm(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var d=o.value;d!=null?Mr(i,!!o.multiple,d,!1):h!==!!o.multiple&&(o.defaultValue!=null?Mr(i,!!o.multiple,o.defaultValue,!0):Mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ji]=o}catch(x){ve(e,e.return,x)}}break;case 6:if(Pn(n,e),jn(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ve(e,e.return,x)}}break;case 3:if(Pn(n,e),jn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ki(n.containerInfo)}catch(x){ve(e,e.return,x)}break;case 4:Pn(n,e),jn(e);break;case 13:Pn(n,e),jn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gc=xe())),r&4&&Jh(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Le=(u=Le)||f,Pn(n,e),Le=u):Pn(n,e),jn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(c=O=f;O!==null;){switch(h=O,d=h.child,h.tag){case 0:case 11:case 14:case 15:Vi(4,h,h.return);break;case 1:br(h,h.return);var p=h.stateNode;if(typeof p.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,p.props=n.memoizedProps,p.state=n.memoizedState,p.componentWillUnmount()}catch(x){ve(r,t,x)}}break;case 5:br(h,h.return);break;case 22:if(h.memoizedState!==null){nd(c);continue}}d!==null?(d.return=h,O=d):nd(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hm("display",s))}catch(x){ve(e,e.return,x)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(x){ve(e,e.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Pn(n,e),jn(e),r&4&&Jh(e);break;case 21:break;default:Pn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(gy(t)){var r=t;break e}t=t.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var o=Zh(e);Pu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Zh(e);ku(e,a,s);break;default:throw Error(R(161))}}catch(l){ve(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function BS(e,n,t){O=e,xy(e)}function xy(e,n,t){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_o;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=_o;var u=Le;if(_o=s,(Le=l)&&!u)for(O=i;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?td(i):l!==null?(l.return=s,O=l):td(i);for(;o!==null;)O=o,xy(o),o=o.sibling;O=i,_o=a,Le=u}ed(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):ed(e)}}function ed(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Le||fa(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:An(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Oh(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Oh(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Ki(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Le||n.flags&512&&Eu(n)}catch(h){ve(n,n.return,h)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function nd(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function td(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{fa(4,n)}catch(l){ve(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(l){ve(n,i,l)}}var o=n.return;try{Eu(n)}catch(l){ve(n,o,l)}break;case 5:var s=n.return;try{Eu(n)}catch(l){ve(n,s,l)}}}catch(l){ve(n,n.return,l)}if(n===e){O=null;break}var a=n.sibling;if(a!==null){a.return=n.return,O=a;break}O=n.return}}var WS=Math.ceil,Ls=ot.ReactCurrentDispatcher,Hc=ot.ReactCurrentOwner,Sn=ot.ReactCurrentBatchConfig,ee=0,be=null,ke=null,Ie=0,on=0,Dr=Lt(0),Te=0,oo=null,ir=0,ha=0,$c=0,Ni=null,Ke=null,Gc=0,qr=1/0,Gn=null,js=!1,Tu=null,Pt=null,Bo=!1,vt=null,Fs=0,Mi=0,Au=null,ss=-1,as=0;function Ue(){return ee&6?xe():ss!==-1?ss:ss=xe()}function Tt(e){return e.mode&1?ee&2&&Ie!==0?Ie&-Ie:PS.transition!==null?(as===0&&(as=rg()),as):(e=re,e!==0||(e=window.event,e=e===void 0?16:cg(e.type)),e):1}function Rn(e,n,t,r){if(50<Mi)throw Mi=0,Au=null,Error(R(185));mo(e,t,r),(!(ee&2)||e!==be)&&(e===be&&(!(ee&2)&&(ha|=t),Te===4&&gt(e,Ie)),Ze(e,r),t===1&&ee===0&&!(n.mode&1)&&(qr=xe()+500,la&&jt()))}function Ze(e,n){var t=e.callbackNode;Px(e,n);var r=Ss(e,e===be?Ie:0);if(r===0)t!==null&&fh(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&fh(t),n===1)e.tag===0?kS(rd.bind(null,e)):Dg(rd.bind(null,e)),SS(function(){!(ee&6)&&jt()}),t=null;else{switch(ig(r)){case 1:t=vc;break;case 4:t=ng;break;case 16:t=xs;break;case 536870912:t=tg;break;default:t=xs}t=Ay(t,Sy.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Sy(e,n){if(ss=-1,as=0,ee&6)throw Error(R(327));var t=e.callbackNode;if(zr()&&e.callbackNode!==t)return null;var r=Ss(e,e===be?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Os(e,r);else{n=r;var i=ee;ee|=2;var o=wy();(be!==e||Ie!==n)&&(Gn=null,qr=xe()+500,Zt(e,n));do try{$S();break}catch(a){Cy(e,a)}while(!0);Rc(),Ls.current=o,ee=i,ke!==null?n=0:(be=null,Ie=0,n=Te)}if(n!==0){if(n===2&&(i=eu(e),i!==0&&(r=i,n=bu(e,i))),n===1)throw t=oo,Zt(e,0),gt(e,r),Ze(e,xe()),t;if(n===6)gt(e,r);else{if(i=e.current.alternate,!(r&30)&&!US(i)&&(n=Os(e,r),n===2&&(o=eu(e),o!==0&&(r=o,n=bu(e,o))),n===1))throw t=oo,Zt(e,0),gt(e,r),Ze(e,xe()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(R(345));case 2:Ht(e,Ke,Gn);break;case 3:if(gt(e,r),(r&130023424)===r&&(n=Gc+500-xe(),10<n)){if(Ss(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=lu(Ht.bind(null,e,Ke,Gn),n);break}Ht(e,Ke,Gn);break;case 4:if(gt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-In(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WS(r/1960))-r,10<r){e.timeoutHandle=lu(Ht.bind(null,e,Ke,Gn),r);break}Ht(e,Ke,Gn);break;case 5:Ht(e,Ke,Gn);break;default:throw Error(R(329))}}}return Ze(e,xe()),e.callbackNode===t?Sy.bind(null,e):null}function bu(e,n){var t=Ni;return e.current.memoizedState.isDehydrated&&(Zt(e,n).flags|=256),e=Os(e,n),e!==2&&(n=Ke,Ke=t,n!==null&&Du(n)),e}function Du(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function US(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Nn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gt(e,n){for(n&=~$c,n&=~ha,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-In(n),r=1<<t;e[t]=-1,n&=~r}}function rd(e){if(ee&6)throw Error(R(327));zr();var n=Ss(e,0);if(!(n&1))return Ze(e,xe()),null;var t=Os(e,n);if(e.tag!==0&&t===2){var r=eu(e);r!==0&&(n=r,t=bu(e,r))}if(t===1)throw t=oo,Zt(e,0),gt(e,n),Ze(e,xe()),t;if(t===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Ht(e,Ke,Gn),Ze(e,xe()),null}function qc(e,n){var t=ee;ee|=1;try{return e(n)}finally{ee=t,ee===0&&(qr=xe()+500,la&&jt())}}function or(e){vt!==null&&vt.tag===0&&!(ee&6)&&zr();var n=ee;ee|=1;var t=Sn.transition,r=re;try{if(Sn.transition=null,re=1,e)return e()}finally{re=r,Sn.transition=t,ee=n,!(ee&6)&&jt()}}function Kc(){on=Dr.current,ue(Dr)}function Zt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,xS(t)),ke!==null)for(t=ke.return;t!==null;){var r=t;switch(bc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ps();break;case 3:$r(),ue(Xe),ue(Fe),Fc();break;case 5:jc(r);break;case 4:$r();break;case 13:ue(he);break;case 19:ue(he);break;case 10:Vc(r.type._context);break;case 22:case 23:Kc()}t=t.return}if(be=e,ke=e=At(e.current,null),Ie=on=n,Te=0,oo=null,$c=ha=ir=0,Ke=Ni=null,Qt!==null){for(n=0;n<Qt.length;n++)if(t=Qt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}Qt=null}return e}function Cy(e,n){do{var t=ke;try{if(Rc(),rs.current=Ms,Ns){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ns=!1}if(rr=0,Ae=Pe=pe=null,Ri=!1,to=0,Hc.current=null,t===null||t.return===null){Te=1,oo=n,ke=null;break}e:{var o=e,s=t.return,a=t,l=n;if(n=Ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var d=Hh(s);if(d!==null){d.flags&=-257,$h(d,s,a,o,n),d.mode&1&&Uh(o,u,n),n=d,l=u;var p=n.updateQueue;if(p===null){var x=new Set;x.add(l),n.updateQueue=x}else p.add(l);break e}else{if(!(n&1)){Uh(o,u,n),Qc();break e}l=Error(R(426))}}else if(fe&&a.mode&1){var C=Hh(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),$h(C,s,a,o,n),Dc(Gr(l,a));break e}}o=l=Gr(l,a),Te!==4&&(Te=2),Ni===null?Ni=[o]:Ni.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=iy(o,l,n);Fh(o,g);break e;case 1:a=l;var y=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Pt===null||!Pt.has(v)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=oy(o,a,n);Fh(o,w);break e}}o=o.return}while(o!==null)}ky(t)}catch(T){n=T,ke===t&&t!==null&&(ke=t=t.return);continue}break}while(!0)}function wy(){var e=Ls.current;return Ls.current=Ms,e===null?Ms:e}function Qc(){(Te===0||Te===3||Te===2)&&(Te=4),be===null||!(ir&268435455)&&!(ha&268435455)||gt(be,Ie)}function Os(e,n){var t=ee;ee|=2;var r=wy();(be!==e||Ie!==n)&&(Gn=null,Zt(e,n));do try{HS();break}catch(i){Cy(e,i)}while(!0);if(Rc(),ee=t,Ls.current=r,ke!==null)throw Error(R(261));return be=null,Ie=0,Te}function HS(){for(;ke!==null;)Ey(ke)}function $S(){for(;ke!==null&&!gx();)Ey(ke)}function Ey(e){var n=Ty(e.alternate,e,on);e.memoizedProps=e.pendingProps,n===null?ky(e):ke=n,Hc.current=null}function ky(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=OS(t,n),t!==null){t.flags&=32767,ke=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,ke=null;return}}else if(t=FS(t,n,on),t!==null){ke=t;return}if(n=n.sibling,n!==null){ke=n;return}ke=n=e}while(n!==null);Te===0&&(Te=5)}function Ht(e,n,t){var r=re,i=Sn.transition;try{Sn.transition=null,re=1,GS(e,n,t,r)}finally{Sn.transition=i,re=r}return null}function GS(e,n,t,r){do zr();while(vt!==null);if(ee&6)throw Error(R(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Tx(e,o),e===be&&(ke=be=null,Ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Bo||(Bo=!0,Ay(xs,function(){return zr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Sn.transition,Sn.transition=null;var s=re;re=1;var a=ee;ee|=4,Hc.current=null,_S(e,t),vy(t,e),hS(su),Cs=!!ou,su=ou=null,e.current=t,BS(t),yx(),ee=a,re=s,Sn.transition=o}else e.current=t;if(Bo&&(Bo=!1,vt=e,Fs=i),o=e.pendingLanes,o===0&&(Pt=null),Sx(t.stateNode),Ze(e,xe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(js)throw js=!1,e=Tu,Tu=null,e;return Fs&1&&e.tag!==0&&zr(),o=e.pendingLanes,o&1?e===Au?Mi++:(Mi=0,Au=e):Mi=0,jt(),null}function zr(){if(vt!==null){var e=ig(Fs),n=Sn.transition,t=re;try{if(Sn.transition=null,re=16>e?16:e,vt===null)var r=!1;else{if(e=vt,vt=null,Fs=0,ee&6)throw Error(R(331));var i=ee;for(ee|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:Vi(8,f,o)}var c=f.child;if(c!==null)c.return=f,O=c;else for(;O!==null;){f=O;var h=f.sibling,d=f.return;if(my(f),f===u){O=null;break}if(h!==null){h.return=d,O=h;break}O=d}}}var p=o.alternate;if(p!==null){var x=p.child;if(x!==null){p.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,O=g;break e}O=o.return}}var y=e.current;for(O=y;O!==null;){s=O;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,O=v;else e:for(s=y;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fa(9,a)}}catch(T){ve(a,a.return,T)}if(a===s){O=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,O=w;break e}O=a.return}}if(ee=i,jt(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(ra,e)}catch{}r=!0}return r}finally{re=t,Sn.transition=n}}return!1}function id(e,n,t){n=Gr(t,n),n=iy(e,n,1),e=kt(e,n,1),n=Ue(),e!==null&&(mo(e,1,n),Ze(e,n))}function ve(e,n,t){if(e.tag===3)id(e,e,t);else for(;n!==null;){if(n.tag===3){id(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=Gr(t,e),e=oy(n,e,1),n=kt(n,e,1),e=Ue(),n!==null&&(mo(n,1,e),Ze(n,e));break}}n=n.return}}function qS(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ue(),e.pingedLanes|=e.suspendedLanes&t,be===e&&(Ie&t)===t&&(Te===4||Te===3&&(Ie&130023424)===Ie&&500>xe()-Gc?Zt(e,0):$c|=t),Ze(e,n)}function Py(e,n){n===0&&(e.mode&1?(n=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):n=1);var t=Ue();e=tt(e,n),e!==null&&(mo(e,n,t),Ze(e,t))}function KS(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Py(e,t)}function QS(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(n),Py(e,t)}var Ty;Ty=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Xe.current)Qe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Qe=!1,jS(e,n,t);Qe=!!(e.flags&131072)}else Qe=!1,fe&&n.flags&1048576&&Ig(n,bs,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;os(e,n),e=n.pendingProps;var i=Wr(n,Fe.current);Or(n,t),i=zc(null,n,r,e,i,t);var o=_c();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ye(r)?(o=!0,Ts(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mc(n),i.updater=ca,n.stateNode=i,i._reactInternals=n,mu(n,r,e,t),n=vu(null,n,r,!0,o,t)):(n.tag=0,fe&&o&&Ac(n),_e(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(os(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=YS(r),e=An(r,e),i){case 0:n=yu(null,n,r,e,t);break e;case 1:n=Kh(null,n,r,e,t);break e;case 11:n=Gh(null,n,r,e,t);break e;case 14:n=qh(null,n,r,An(r.type,e),t);break e}throw Error(R(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:An(r,i),yu(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:An(r,i),Kh(e,n,r,i,t);case 3:e:{if(uy(n),e===null)throw Error(R(387));r=n.pendingProps,o=n.memoizedState,i=o.element,jg(e,n),Rs(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Gr(Error(R(423)),n),n=Qh(e,n,r,t,i);break e}else if(r!==i){i=Gr(Error(R(424)),n),n=Qh(e,n,r,t,i);break e}else for(sn=Et(n.stateNode.containerInfo.firstChild),an=n,fe=!0,Dn=null,t=Mg(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ur(),r===i){n=rt(e,n,t);break e}_e(e,n,r,t)}n=n.child}return n;case 5:return Fg(n),e===null&&hu(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,au(r,i)?s=null:o!==null&&au(r,o)&&(n.flags|=32),ly(e,n),_e(e,n,s,t),n.child;case 6:return e===null&&hu(n),null;case 13:return cy(e,n,t);case 4:return Lc(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Hr(n,null,r,t):_e(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:An(r,i),Gh(e,n,r,i,t);case 7:return _e(e,n,n.pendingProps,t),n.child;case 8:return _e(e,n,n.pendingProps.children,t),n.child;case 12:return _e(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,ae(Ds,r._currentValue),r._currentValue=s,o!==null)if(Nn(o.value,s)){if(o.children===i.children&&!Xe.current){n=rt(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Yn(-1,t&-t),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),du(o.return,t,n),a.lanes|=t;break}l=l.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),du(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}_e(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Or(n,t),i=Cn(i),r=r(i),n.flags|=1,_e(e,n,r,t),n.child;case 14:return r=n.type,i=An(r,n.pendingProps),i=An(r.type,i),qh(e,n,r,i,t);case 15:return sy(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:An(r,i),os(e,n),n.tag=1,Ye(r)?(e=!0,Ts(n)):e=!1,Or(n,t),ry(n,r,i),mu(n,r,i,t),vu(null,n,r,!0,e,t);case 19:return fy(e,n,t);case 22:return ay(e,n,t)}throw Error(R(156,n.tag))};function Ay(e,n){return eg(e,n)}function XS(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(e,n,t,r){return new XS(e,n,t,r)}function Xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function YS(e){if(typeof e=="function")return Xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mc)return 11;if(e===gc)return 14}return 2}function At(e,n){var t=e.alternate;return t===null?(t=xn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ls(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")Xc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case xr:return Jt(t.children,i,o,n);case pc:s=8,i|=8;break;case zl:return e=xn(12,t,n,i|2),e.elementType=zl,e.lanes=o,e;case _l:return e=xn(13,t,n,i),e.elementType=_l,e.lanes=o,e;case Bl:return e=xn(19,t,n,i),e.elementType=Bl,e.lanes=o,e;case Fm:return da(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lm:s=10;break e;case jm:s=9;break e;case mc:s=11;break e;case gc:s=14;break e;case ht:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return n=xn(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Jt(e,n,t,r){return e=xn(7,e,r,n),e.lanes=t,e}function da(e,n,t,r){return e=xn(22,e,r,n),e.elementType=Fm,e.lanes=t,e.stateNode={isHidden:!1},e}function il(e,n,t){return e=xn(6,e,null,n),e.lanes=t,e}function ol(e,n,t){return n=xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ZS(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=za(0),this.expirationTimes=za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=za(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yc(e,n,t,r,i,o,s,a,l){return e=new ZS(e,n,t,a,l),n===1?(n=1,o===!0&&(n|=8)):n=0,o=xn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(o),e}function JS(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function by(e){if(!e)return Rt;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(R(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(R(171))}if(e.tag===1){var t=e.type;if(Ye(t))return bg(e,t,n)}return n}function Dy(e,n,t,r,i,o,s,a,l){return e=Yc(t,r,!0,e,i,o,s,a,l),e.context=by(null),t=e.current,r=Ue(),i=Tt(t),o=Yn(r,i),o.callback=n??null,kt(t,o,i),e.current.lanes=i,mo(e,i,r),Ze(e,r),e}function pa(e,n,t,r){var i=n.current,o=Ue(),s=Tt(i);return t=by(t),n.context===null?n.context=t:n.pendingContext=t,n=Yn(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=kt(i,n,s),e!==null&&(Rn(e,i,s,o),ts(e,i,s)),s}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function od(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Zc(e,n){od(e,n),(e=e.alternate)&&od(e,n)}function eC(){return null}var Iy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jc(e){this._internalRoot=e}ma.prototype.render=Jc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(R(409));pa(e,n,null,null)};ma.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;or(function(){pa(null,e,null,null)}),n[nt]=null}};function ma(e){this._internalRoot=e}ma.prototype.unstable_scheduleHydration=function(e){if(e){var n=ag();e={blockedOn:null,target:e,priority:n};for(var t=0;t<mt.length&&n!==0&&n<mt[t].priority;t++);mt.splice(t,0,e),t===0&&ug(e)}};function ef(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sd(){}function nC(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=zs(s);o.call(u)}}var s=Dy(n,r,e,0,null,!1,!1,"",sd);return e._reactRootContainer=s,e[nt]=s.current,Yi(e.nodeType===8?e.parentNode:e),or(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zs(l);a.call(u)}}var l=Yc(e,0,!1,null,null,!1,!1,"",sd);return e._reactRootContainer=l,e[nt]=l.current,Yi(e.nodeType===8?e.parentNode:e),or(function(){pa(n,l,t,r)}),l}function ya(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=zs(s);a.call(l)}}pa(n,s,e,i)}else s=nC(t,n,e,i,r);return zs(s)}og=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ei(n.pendingLanes);t!==0&&(xc(n,t|1),Ze(n,xe()),!(ee&6)&&(qr=xe()+500,jt()))}break;case 13:or(function(){var r=tt(e,1);if(r!==null){var i=Ue();Rn(r,e,1,i)}}),Zc(e,1)}};Sc=function(e){if(e.tag===13){var n=tt(e,134217728);if(n!==null){var t=Ue();Rn(n,e,134217728,t)}Zc(e,134217728)}};sg=function(e){if(e.tag===13){var n=Tt(e),t=tt(e,n);if(t!==null){var r=Ue();Rn(t,e,n,r)}Zc(e,n)}};ag=function(){return re};lg=function(e,n){var t=re;try{return re=e,n()}finally{re=t}};Yl=function(e,n,t){switch(n){case"input":if(Hl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=aa(r);if(!i)throw Error(R(90));zm(r),Hl(r,i)}}}break;case"textarea":Bm(e,t);break;case"select":n=t.value,n!=null&&Mr(e,!!t.multiple,n,!1)}};Km=qc;Qm=or;var tC={usingClientEntryPoint:!1,Events:[yo,Er,aa,Gm,qm,qc]},gi={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rC={bundleType:gi.bundleType,version:gi.version,rendererPackageName:gi.rendererPackageName,rendererConfig:gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zm(e),e===null?null:e.stateNode},findFiberByHostInstance:gi.findFiberByHostInstance||eC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{ra=Wo.inject(rC),_n=Wo}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tC;fn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(n))throw Error(R(200));return JS(e,n,null,t)};fn.createRoot=function(e,n){if(!ef(e))throw Error(R(299));var t=!1,r="",i=Iy;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Yc(e,1,!1,null,null,t,!1,r,i),e[nt]=n.current,Yi(e.nodeType===8?e.parentNode:e),new Jc(n)};fn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Zm(n),e=e===null?null:e.stateNode,e};fn.flushSync=function(e){return or(e)};fn.hydrate=function(e,n,t){if(!ga(n))throw Error(R(200));return ya(null,e,n,!0,t)};fn.hydrateRoot=function(e,n,t){if(!ef(e))throw Error(R(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=Iy;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Dy(n,null,e,1,t??null,i,!1,o,s),e[nt]=n.current,Yi(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new ma(n)};fn.render=function(e,n,t){if(!ga(n))throw Error(R(200));return ya(null,e,n,!1,t)};fn.unmountComponentAtNode=function(e){if(!ga(e))throw Error(R(40));return e._reactRootContainer?(or(function(){ya(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};fn.unstable_batchedUpdates=qc;fn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ga(t))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return ya(e,n,t,!1,r)};fn.version="18.3.1-next-f1338f8080-20240426";function Ry(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ry)}catch(e){console.error(e)}}Ry(),Rm.exports=fn;var iC=Rm.exports,ad=iC;Fl.createRoot=ad.createRoot,Fl.hydrateRoot=ad.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},so.apply(this,arguments)}var xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xt||(xt={}));const ld="popstate";function oC(e){e===void 0&&(e={});function n(r,i){let{pathname:o,search:s,hash:a}=r.location;return Iu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:_s(i)}return aC(n,t,null,e)}function me(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Vy(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function sC(){return Math.random().toString(36).substr(2,8)}function ud(e,n){return{usr:e.state,key:e.key,idx:n}}function Iu(e,n,t,r){return t===void 0&&(t=null),so({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ri(n):n,{state:t,key:n&&n.key||r||sC()})}function _s(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function ri(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function aC(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=xt.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(so({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function c(){a=xt.Pop;let C=f(),g=C==null?null:C-u;u=C,l&&l({action:a,location:x.location,delta:g})}function h(C,g){a=xt.Push;let y=Iu(x.location,C,g);u=f()+1;let v=ud(y,u),w=x.createHref(y);try{s.pushState(v,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}o&&l&&l({action:a,location:x.location,delta:1})}function d(C,g){a=xt.Replace;let y=Iu(x.location,C,g);u=f();let v=ud(y,u),w=x.createHref(y);s.replaceState(v,"",w),o&&l&&l({action:a,location:x.location,delta:0})}function p(C){let g=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof C=="string"?C:_s(C);return y=y.replace(/ $/,"%20"),me(g,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,g)}let x={get action(){return a},get location(){return e(i,s)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ld,c),l=C,()=>{i.removeEventListener(ld,c),l=null}},createHref(C){return n(i,C)},createURL:p,encodeLocation(C){let g=p(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:d,go(C){return s.go(C)}};return x}var cd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cd||(cd={}));function lC(e,n,t){return t===void 0&&(t="/"),uC(e,n,t)}function uC(e,n,t,r){let i=typeof n=="string"?ri(n):n,o=Kr(i.pathname||"/",t);if(o==null)return null;let s=Ny(e);cC(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=CC(o);a=xC(s[l],u)}return a}function Ny(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=bt([r,l.relativePath]),f=t.concat(l);o.children&&o.children.length>0&&(me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ny(o.children,n,f,u)),!(o.path==null&&!o.index)&&n.push({path:u,score:yC(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of My(o.path))i(o,s,l)}),n}function My(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=My(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function cC(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:vC(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const fC=/^:[\w-]+$/,hC=3,dC=2,pC=1,mC=10,gC=-2,fd=e=>e==="*";function yC(e,n){let t=e.split("/"),r=t.length;return t.some(fd)&&(r+=gC),n&&(r+=dC),t.filter(i=>!fd(i)).reduce((i,o)=>i+(fC.test(o)?hC:o===""?pC:mC),r)}function vC(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function xC(e,n,t){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,f=o==="/"?n:n.slice(o.length)||"/",c=Ru({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),h=l.route;if(!c)return null;Object.assign(i,c.params),s.push({params:i,pathname:bt([o,c.pathname]),pathnameBase:PC(bt([o,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(o=bt([o,c.pathnameBase]))}return s}function Ru(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=SC(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:h,isOptional:d}=f;if(h==="*"){let x=a[c]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const p=a[c];return d&&!p?u[h]=void 0:u[h]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function SC(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Vy(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function CC(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Vy(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Kr(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function wC(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?ri(e):e;return{pathname:t?t.startsWith("/")?t:EC(t,n):n,search:TC(r),hash:AC(i)}}function EC(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function sl(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kC(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function nf(e,n){let t=kC(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function tf(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ri(e):(i=so({},e),me(!i.pathname||!i.pathname.includes("?"),sl("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),sl("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),sl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=t;else{let c=n.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?n[c]:"/"}let l=wC(i,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const bt=e=>e.join("/").replace(/\/\/+/g,"/"),PC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),TC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,AC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ly=["post","put","patch","delete"];new Set(Ly);const DC=["get",...Ly];new Set(DC);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ao.apply(this,arguments)}const va=A.createContext(null),jy=A.createContext(null),st=A.createContext(null),xa=A.createContext(null),at=A.createContext({outlet:null,matches:[],isDataRoute:!1}),Fy=A.createContext(null);function IC(e,n){let{relative:t}=n===void 0?{}:n;ii()||me(!1);let{basename:r,navigator:i}=A.useContext(st),{hash:o,pathname:s,search:a}=Sa(e,{relative:t}),l=s;return r!=="/"&&(l=s==="/"?r:bt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function ii(){return A.useContext(xa)!=null}function Ft(){return ii()||me(!1),A.useContext(xa).location}function Oy(e){A.useContext(st).static||A.useLayoutEffect(e)}function zy(){let{isDataRoute:e}=A.useContext(at);return e?HC():RC()}function RC(){ii()||me(!1);let e=A.useContext(va),{basename:n,future:t,navigator:r}=A.useContext(st),{matches:i}=A.useContext(at),{pathname:o}=Ft(),s=JSON.stringify(nf(i,t.v7_relativeSplatPath)),a=A.useRef(!1);return Oy(()=>{a.current=!0}),A.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=tf(u,JSON.parse(s),o,f.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:bt([n,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[n,r,s,o,e])}function VC(){let{matches:e}=A.useContext(at),n=e[e.length-1];return n?n.params:{}}function Sa(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=A.useContext(st),{matches:i}=A.useContext(at),{pathname:o}=Ft(),s=JSON.stringify(nf(i,r.v7_relativeSplatPath));return A.useMemo(()=>tf(e,JSON.parse(s),o,t==="path"),[e,s,o,t])}function NC(e,n){return MC(e,n)}function MC(e,n,t,r){ii()||me(!1);let{navigator:i}=A.useContext(st),{matches:o}=A.useContext(at),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Ft(),f;if(n){var c;let C=typeof n=="string"?ri(n):n;l==="/"||(c=C.pathname)!=null&&c.startsWith(l)||me(!1),f=C}else f=u;let h=f.pathname||"/",d=h;if(l!=="/"){let C=l.replace(/^\//,"").split("/");d="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let p=lC(e,{pathname:d}),x=zC(p&&p.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:bt([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:bt([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,t,r);return n&&x?A.createElement(xa.Provider,{value:{location:ao({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:xt.Pop}},x):x}function LC(){let e=UC(),n=bC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},n),t?A.createElement("pre",{style:i},t):null,null)}const jC=A.createElement(LC,null);class FC extends A.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?A.createElement(at.Provider,{value:this.props.routeContext},A.createElement(Fy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function OC(e){let{routeContext:n,match:t,children:r}=e,i=A.useContext(va);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),A.createElement(at.Provider,{value:n},r)}function zC(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let s=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);f>=0||me(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let c=s[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:h,errors:d}=t,p=c.route.loader&&h[c.route.id]===void 0&&(!d||d[c.route.id]===void 0);if(c.route.lazy||p){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,c,h)=>{let d,p=!1,x=null,C=null;t&&(d=a&&c.route.id?a[c.route.id]:void 0,x=c.route.errorElement||jC,l&&(u<0&&h===0?($C("route-fallback"),p=!0,C=null):u===h&&(p=!0,C=c.route.hydrateFallbackElement||null)));let g=n.concat(s.slice(0,h+1)),y=()=>{let v;return d?v=x:p?v=C:c.route.Component?v=A.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=f,A.createElement(OC,{match:c,routeContext:{outlet:f,matches:g,isDataRoute:t!=null},children:v})};return t&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?A.createElement(FC,{location:t.location,revalidation:t.revalidation,component:x,error:d,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var _y=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_y||{}),By=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(By||{});function _C(e){let n=A.useContext(va);return n||me(!1),n}function BC(e){let n=A.useContext(jy);return n||me(!1),n}function WC(e){let n=A.useContext(at);return n||me(!1),n}function Wy(e){let n=WC(),t=n.matches[n.matches.length-1];return t.route.id||me(!1),t.route.id}function UC(){var e;let n=A.useContext(Fy),t=BC(),r=Wy();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function HC(){let{router:e}=_C(_y.UseNavigateStable),n=Wy(By.UseNavigateStable),t=A.useRef(!1);return Oy(()=>{t.current=!0}),A.useCallback(function(i,o){o===void 0&&(o={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ao({fromRouteId:n},o)))},[e,n])}const hd={};function $C(e,n,t){hd[e]||(hd[e]=!0)}function GC(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Vu(e){let{to:n,replace:t,state:r,relative:i}=e;ii()||me(!1);let{future:o,static:s}=A.useContext(st),{matches:a}=A.useContext(at),{pathname:l}=Ft(),u=zy(),f=tf(n,nf(a,o.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(f);return A.useEffect(()=>u(JSON.parse(c),{replace:t,state:r,relative:i}),[u,c,i,t,r]),null}function Tn(e){me(!1)}function qC(e){let{basename:n="/",children:t=null,location:r,navigationType:i=xt.Pop,navigator:o,static:s=!1,future:a}=e;ii()&&me(!1);let l=n.replace(/^\/*/,"/"),u=A.useMemo(()=>({basename:l,navigator:o,static:s,future:ao({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=ri(r));let{pathname:f="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,x=A.useMemo(()=>{let C=Kr(f,l);return C==null?null:{location:{pathname:C,search:c,hash:h,state:d,key:p},navigationType:i}},[l,f,c,h,d,p,i]);return x==null?null:A.createElement(st.Provider,{value:u},A.createElement(xa.Provider,{children:t,value:x}))}function KC(e){let{children:n,location:t}=e;return NC(Nu(n),t)}new Promise(()=>{});function Nu(e,n){n===void 0&&(n=[]);let t=[];return A.Children.forEach(e,(r,i)=>{if(!A.isValidElement(r))return;let o=[...n,i];if(r.type===A.Fragment){t.push.apply(t,Nu(r.props.children,o));return}r.type!==Tn&&me(!1),!r.props.index||!r.props.children||me(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Nu(r.props.children,o)),t.push(s)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bs(){return Bs=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Bs.apply(this,arguments)}function Uy(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function QC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function XC(e,n){return e.button===0&&(!n||n==="_self")&&!QC(e)}const YC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ZC=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],JC="6";try{window.__reactRouterVersion=JC}catch{}const ew=A.createContext({isTransitioning:!1}),nw="startTransition",dd=qv[nw];function tw(e){let{basename:n,children:t,future:r,window:i}=e,o=A.useRef();o.current==null&&(o.current=oC({window:i,v5Compat:!0}));let s=o.current,[a,l]=A.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=A.useCallback(c=>{u&&dd?dd(()=>l(c)):l(c)},[l,u]);return A.useLayoutEffect(()=>s.listen(f),[s,f]),A.useEffect(()=>GC(r),[r]),A.createElement(qC,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:s,future:r})}const rw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qr=A.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:f,viewTransition:c}=n,h=Uy(n,YC),{basename:d}=A.useContext(st),p,x=!1;if(typeof u=="string"&&iw.test(u)&&(p=u,rw))try{let v=new URL(window.location.href),w=u.startsWith("//")?new URL(v.protocol+u):new URL(u),T=Kr(w.pathname,d);w.origin===v.origin&&T!=null?u=T+w.search+w.hash:x=!0}catch{}let C=IC(u,{relative:i}),g=sw(u,{replace:s,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:c});function y(v){r&&r(v),v.defaultPrevented||g(v)}return A.createElement("a",Bs({},h,{href:p||C,onClick:x||o?r:y,ref:t,target:l}))}),al=A.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,viewTransition:u,children:f}=n,c=Uy(n,ZC),h=Sa(l,{relative:c.relative}),d=Ft(),p=A.useContext(jy),{navigator:x,basename:C}=A.useContext(st),g=p!=null&&aw(h)&&u===!0,y=x.encodeLocation?x.encodeLocation(h).pathname:h.pathname,v=d.pathname,w=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(v=v.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&C&&(w=Kr(w,C)||w);const T=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let k=v===y||!s&&v.startsWith(y)&&v.charAt(T)==="/",D=w!=null&&(w===y||!s&&w.startsWith(y)&&w.charAt(y.length)==="/"),b={isActive:k,isPending:D,isTransitioning:g},L=k?r:void 0,P;typeof o=="function"?P=o(b):P=[o,k?"active":null,D?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let j=typeof a=="function"?a(b):a;return A.createElement(Qr,Bs({},c,{"aria-current":L,className:P,ref:t,style:j,to:l,viewTransition:u}),typeof f=="function"?f(b):f)});var Mu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mu||(Mu={}));var pd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pd||(pd={}));function ow(e){let n=A.useContext(va);return n||me(!1),n}function sw(e,n){let{target:t,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=n===void 0?{}:n,l=zy(),u=Ft(),f=Sa(e,{relative:s});return A.useCallback(c=>{if(XC(c,t)){c.preventDefault();let h=r!==void 0?r:_s(u)===_s(f);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,f,r,i,t,e,o,s,a])}function aw(e,n){n===void 0&&(n={});let t=A.useContext(ew);t==null&&me(!1);let{basename:r}=ow(Mu.useViewTransitionState),i=Sa(e,{relative:n.relative});if(!t.isTransitioning)return!1;let o=Kr(t.currentLocation.pathname,r)||t.currentLocation.pathname,s=Kr(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Ru(i.pathname,s)!=null||Ru(i.pathname,o)!=null}var Hy={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var o="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(o=i(o,r(a)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return t.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var a in o)n.call(o,a)&&o[a]&&(s=i(s,a));return s}function i(o,s){return s?o?o+" "+s:o+s:o}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Hy);var lw=Hy.exports;const ll=ea(lw);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ce=(e,n)=>{const t=A.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:a="",children:l,...u},f)=>A.createElement("svg",{ref:f,...uw,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${cw(e)}`,a].join(" "),...u},[...n.map(([c,h])=>A.createElement(c,h)),...Array.isArray(l)?l:[l]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=Ce("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=Ce("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=Ce("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=Ce("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=Ce("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=Ce("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=Ce("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=Ce("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=Ce("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=Ce("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=Ce("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=Ce("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=Ce("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=Ce("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=Ce("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=Ce("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=Ce("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=Ce("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=Ce("TerminalSquare",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=Ce("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=Ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),yd=[{to:"/",label:"首頁"},{to:"/about",label:"關於我"},{to:"/projects",label:"專案"},{to:"/blog",label:"文章"},{to:"/cv",label:"CV"},{to:"/certifications",label:"證照"},{to:"/contact",label:"聯絡"}];function Sw(){const[e,n]=A.useState(!1),t=Ft();return A.useEffect(()=>{n(!1)},[t.pathname]),m.jsx("header",{className:"fixed left-1/2 top-4 z-40 w-[calc(100%-1.25rem)] max-w-6xl -translate-x-1/2",children:m.jsxs("nav",{className:"rounded-[1.15rem] border border-[#4ade8029] bg-[#030a10e3] px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6",children:[m.jsxs("div",{className:"flex items-center justify-between gap-4",children:[m.jsxs(al,{to:"/",className:"flex min-w-0 items-center gap-3 text-white",children:[m.jsxs("span",{className:"relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#4ade8050] bg-[radial-gradient(circle_at_top,#10321f_0%,#06110d_62%,#03070a_100%)] shadow-[0_0_12px_rgba(74,222,128,0.12)]",children:[m.jsx("span",{className:"pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(74,222,128,0.1)_48%,transparent_52%,transparent_100%)] opacity-80"}),m.jsx("span",{className:"pointer-events-none absolute inset-x-1 top-1 h-px bg-[#7dd3fc]/70"}),m.jsx("span",{className:"mono relative text-sm font-bold tracking-[-0.12em] text-[#86efac]",children:">_"})]}),m.jsxs("span",{className:"min-w-0",children:[m.jsx("span",{className:"mono block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#7dd3fc]",children:"Eric / Security Terminal"}),m.jsx("span",{className:"block truncate text-sm font-semibold text-zinc-100 sm:text-base",children:"資安筆記 / 專案 / 個人網站"})]})]}),m.jsx("button",{type:"button",className:"inline-flex items-center justify-center rounded-full border border-[#4ade8029] bg-[#4ade800d] p-2 text-[#bbf7d0] transition hover:bg-[#4ade8016] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80] sm:hidden",onClick:()=>n(r=>!r),"aria-label":"切換導航選單","aria-expanded":e,"aria-controls":"primary-navigation",children:e?m.jsx(xw,{className:"h-5 w-5"}):m.jsx(gw,{className:"h-5 w-5"})}),m.jsx("ul",{className:"hidden items-center gap-1 text-sm font-medium lg:flex xl:gap-2",children:yd.map(r=>m.jsx("li",{children:m.jsx(al,{to:r.to,className:({isActive:i})=>ll("inline-flex rounded-full px-3 py-2 font-semibold transition xl:px-4",i?"bg-[#4ade801f] text-[#a7f3d0] shadow-[inset_0_0_0_1px_rgba(74,222,128,0.35)]":"text-zinc-300 hover:bg-white/[0.06] hover:text-white"),children:r.label})},r.to))})]}),m.jsxs("div",{className:"mt-3 hidden items-center gap-2 border-t border-[#4ade8016] pt-3 text-[0.72rem] text-zinc-400 lg:flex",children:[m.jsx(sf,{className:"h-4 w-4 text-[#4ade80]"}),m.jsx("span",{className:"mono",children:"status: active / role: cybersecurity practitioner / notes online"})]}),m.jsx("ul",{id:"primary-navigation",className:ll("mt-3 grid gap-2 border-t border-[#4ade8016] pt-3 text-sm font-medium lg:hidden",e?"grid":"hidden"),children:yd.map(r=>m.jsx("li",{children:m.jsx(al,{to:r.to,className:({isActive:i})=>ll("block rounded-xl px-4 py-3 font-semibold transition",i?"bg-[#4ade801f] text-[#a7f3d0] shadow-[inset_0_0_0_1px_rgba(74,222,128,0.35)]":"bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]"),children:r.label})},r.to))})]})})}const Cw=[{label:"外包網站",href:"https://chiayicity.zeabur.app/"},{label:"iThome 鐵人賽",href:"https://ithelp.ithome.com.tw/users/20171891/ironman/8352"},{label:"舊版文章站",href:"https://and910805.github.io/eric_site/"},{label:"HackMD 筆記",href:"https://hackmd.io/@LKanFpXQTUSJayug7EHeiA"}];function ww(){return m.jsxs("footer",{className:"mx-auto w-full max-w-6xl px-4 py-8 text-[0.85rem] text-zinc-400 sm:px-8 lg:px-12",children:[m.jsxs("div",{className:"flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between",children:[m.jsxs("div",{className:"space-y-1",children:[m.jsxs("div",{className:"mono flex items-center gap-2 text-zinc-100",children:[m.jsx(Qy,{className:"h-4 w-4 text-[#4ade80]"}),"Eric Security Terminal"]}),m.jsx("div",{children:"cybersecurity / notes / projects / automation"})]}),m.jsx("ul",{className:"flex flex-wrap gap-x-4 gap-y-2 text-zinc-300",children:Cw.map(e=>m.jsx("li",{children:m.jsxs("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 transition hover:text-[#bbf7d0]",children:[m.jsx(Xr,{className:"h-3.5 w-3.5"}),e.label]})},e.href))})]}),m.jsxs("p",{className:"mono mt-6 text-xs text-zinc-600",children:["© ",new Date().getFullYear()," Eric Chuang · built with React + Vite · deployed on GitHub Pages"]})]})}function Ew(){const{pathname:e}=Ft();return A.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[e]),null}const Xy=A.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ca=A.createContext({}),af=A.createContext(null),wa=typeof document<"u",kw=wa?A.useLayoutEffect:A.useEffect,Yy=A.createContext({strict:!1}),lf=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Pw="framerAppearId",Zy="data-"+lf(Pw);function Tw(e,n,t,r){const{visualElement:i}=A.useContext(Ca),o=A.useContext(Yy),s=A.useContext(af),a=A.useContext(Xy).reducedMotion,l=A.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:n,parent:i,props:t,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;A.useInsertionEffect(()=>{u&&u.update(t,s)});const f=A.useRef(!!(t[Zy]&&!window.HandoffComplete));return kw(()=>{u&&(u.render(),f.current&&u.animationState&&u.animationState.animateChanges())}),A.useEffect(()=>{u&&(u.updateFeatures(),!f.current&&u.animationState&&u.animationState.animateChanges(),f.current&&(f.current=!1,window.HandoffComplete=!0))}),u}function Ir(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Aw(e,n,t){return A.useCallback(r=>{r&&e.mount&&e.mount(r),n&&(r?n.mount(r):n.unmount()),t&&(typeof t=="function"?t(r):Ir(t)&&(t.current=r))},[n])}function lo(e){return typeof e=="string"||Array.isArray(e)}function Ea(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const uf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cf=["initial",...uf];function ka(e){return Ea(e.animate)||cf.some(n=>lo(e[n]))}function Jy(e){return!!(ka(e)||e.variants)}function bw(e,n){if(ka(e)){const{initial:t,animate:r}=e;return{initial:t===!1||lo(t)?t:void 0,animate:lo(r)?r:void 0}}return e.inherit!==!1?n:{}}function Dw(e){const{initial:n,animate:t}=bw(e,A.useContext(Ca));return A.useMemo(()=>({initial:n,animate:t}),[vd(n),vd(t)])}function vd(e){return Array.isArray(e)?e.join(" "):e}const xd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},uo={};for(const e in xd)uo[e]={isEnabled:n=>xd[e].some(t=>!!n[t])};function Iw(e){for(const n in e)uo[n]={...uo[n],...e[n]}}const e0=A.createContext({}),n0=A.createContext({}),Rw=Symbol.for("motionComponentSymbol");function Vw({preloadedFeatures:e,createVisualElement:n,useRender:t,useVisualState:r,Component:i}){e&&Iw(e);function o(a,l){let u;const f={...A.useContext(Xy),...a,layoutId:Nw(a)},{isStatic:c}=f,h=Dw(a),d=r(a,c);if(!c&&wa){h.visualElement=Tw(i,d,f,n);const p=A.useContext(n0),x=A.useContext(Yy).strict;h.visualElement&&(u=h.visualElement.loadFeatures(f,x,e,p))}return A.createElement(Ca.Provider,{value:h},u&&h.visualElement?A.createElement(u,{visualElement:h.visualElement,...f}):null,t(i,a,Aw(d,h.visualElement,l),d,c,h.visualElement))}const s=A.forwardRef(o);return s[Rw]=i,s}function Nw({layoutId:e}){const n=A.useContext(e0).id;return n&&e!==void 0?n+"-"+e:e}function Mw(e){function n(r,i={}){return Vw(e(r,i))}if(typeof Proxy>"u")return n;const t=new Map;return new Proxy(n,{get:(r,i)=>(t.has(i)||t.set(i,n(i)),t.get(i))})}const Lw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ff(e){return typeof e!="string"||e.includes("-")?!1:!!(Lw.indexOf(e)>-1||/[A-Z]/.test(e))}const Ws={};function jw(e){Object.assign(Ws,e)}const xo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],cr=new Set(xo);function t0(e,{layout:n,layoutId:t}){return cr.has(e)||e.startsWith("origin")||(n||t!==void 0)&&(!!Ws[e]||e==="opacity")}const Je=e=>!!(e&&e.getVelocity),Fw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ow=xo.length;function zw(e,{enableHardwareAcceleration:n=!0,allowTransformNone:t=!0},r,i){let o="";for(let s=0;s<Ow;s++){const a=xo[s];if(e[a]!==void 0){const l=Fw[a]||a;o+=`${l}(${e[a]}) `}}return n&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):t&&r&&(o="none"),o}const r0=e=>n=>typeof n=="string"&&n.startsWith(e),i0=r0("--"),ju=r0("var(--"),_w=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Bw=(e,n)=>n&&typeof e=="number"?n.transform(e):e,Vt=(e,n,t)=>Math.min(Math.max(t,e),n),fr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Li={...fr,transform:e=>Vt(0,1,e)},Uo={...fr,default:1},ji=e=>Math.round(e*1e5)/1e5,Pa=/(-)?([\d]*\.?[\d])+/g,o0=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Ww=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function So(e){return typeof e=="string"}const Co=e=>({test:n=>So(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),ft=Co("deg"),Wn=Co("%"),W=Co("px"),Uw=Co("vh"),Hw=Co("vw"),Sd={...Wn,parse:e=>Wn.parse(e)/100,transform:e=>Wn.transform(e*100)},Cd={...fr,transform:Math.round},s0={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,size:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,rotate:ft,rotateX:ft,rotateY:ft,rotateZ:ft,scale:Uo,scaleX:Uo,scaleY:Uo,scaleZ:Uo,skew:ft,skewX:ft,skewY:ft,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:Li,originX:Sd,originY:Sd,originZ:W,zIndex:Cd,fillOpacity:Li,strokeOpacity:Li,numOctaves:Cd};function hf(e,n,t,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,u=!1,f=!0;for(const c in n){const h=n[c];if(i0(c)){o[c]=h;continue}const d=s0[c],p=Bw(h,d);if(cr.has(c)){if(l=!0,s[c]=p,!f)continue;h!==(d.default||0)&&(f=!1)}else c.startsWith("origin")?(u=!0,a[c]=p):i[c]=p}if(n.transform||(l||r?i.transform=zw(e.transform,t,f,r):i.transform&&(i.transform="none")),u){const{originX:c="50%",originY:h="50%",originZ:d=0}=a;i.transformOrigin=`${c} ${h} ${d}`}}const df=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function a0(e,n,t){for(const r in n)!Je(n[r])&&!t0(r,t)&&(e[r]=n[r])}function $w({transformTemplate:e},n,t){return A.useMemo(()=>{const r=df();return hf(r,n,{enableHardwareAcceleration:!t},e),Object.assign({},r.vars,r.style)},[n])}function Gw(e,n,t){const r=e.style||{},i={};return a0(i,r,e),Object.assign(i,$w(e,n,t)),e.transformValues?e.transformValues(i):i}function qw(e,n,t){const r={},i=Gw(e,n,t);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const Kw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Us(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Kw.has(e)}let l0=e=>!Us(e);function Qw(e){e&&(l0=n=>n.startsWith("on")?!Us(n):e(n))}try{Qw(require("@emotion/is-prop-valid").default)}catch{}function Xw(e,n,t){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(l0(i)||t===!0&&Us(i)||!n&&!Us(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function wd(e,n,t){return typeof e=="string"?e:W.transform(n+t*e)}function Yw(e,n,t){const r=wd(n,e.x,e.width),i=wd(t,e.y,e.height);return`${r} ${i}`}const Zw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Jw={offset:"strokeDashoffset",array:"strokeDasharray"};function e2(e,n,t=1,r=0,i=!0){e.pathLength=1;const o=i?Zw:Jw;e[o.offset]=W.transform(-r);const s=W.transform(n),a=W.transform(t);e[o.array]=`${s} ${a}`}function pf(e,{attrX:n,attrY:t,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},f,c,h){if(hf(e,u,f,h),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:p,dimensions:x}=e;d.transform&&(x&&(p.transform=d.transform),delete d.transform),x&&(i!==void 0||o!==void 0||p.transform)&&(p.transformOrigin=Yw(x,i!==void 0?i:.5,o!==void 0?o:.5)),n!==void 0&&(d.x=n),t!==void 0&&(d.y=t),r!==void 0&&(d.scale=r),s!==void 0&&e2(d,s,a,l,!1)}const u0=()=>({...df(),attrs:{}}),mf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function n2(e,n,t,r){const i=A.useMemo(()=>{const o=u0();return pf(o,n,{enableHardwareAcceleration:!1},mf(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[n]);if(e.style){const o={};a0(o,e.style,e),i.style={...o,...i.style}}return i}function t2(e=!1){return(t,r,i,{latestValues:o},s)=>{const l=(ff(t)?n2:qw)(r,o,s,t),f={...Xw(r,typeof t=="string",e),...l,ref:i},{children:c}=r,h=A.useMemo(()=>Je(c)?c.get():c,[c]);return A.createElement(t,{...f,children:h})}}function c0(e,{style:n,vars:t},r,i){Object.assign(e.style,n,i&&i.getProjectionStyles(r));for(const o in t)e.style.setProperty(o,t[o])}const f0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function h0(e,n,t,r){c0(e,n,void 0,r);for(const i in n.attrs)e.setAttribute(f0.has(i)?i:lf(i),n.attrs[i])}function gf(e,n){const{style:t}=e,r={};for(const i in t)(Je(t[i])||n.style&&Je(n.style[i])||t0(i,e))&&(r[i]=t[i]);return r}function d0(e,n){const t=gf(e,n);for(const r in e)if(Je(e[r])||Je(n[r])){const i=xo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;t[i]=e[r]}return t}function yf(e,n,t,r={},i={}){return typeof n=="function"&&(n=n(t!==void 0?t:e.custom,r,i)),typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"&&(n=n(t!==void 0?t:e.custom,r,i)),n}function r2(e){const n=A.useRef(null);return n.current===null&&(n.current=e()),n.current}const Hs=e=>Array.isArray(e),i2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),o2=e=>Hs(e)?e[e.length-1]||0:e;function us(e){const n=Je(e)?e.get():e;return i2(n)?n.toValue():n}function s2({scrapeMotionValuesFromProps:e,createRenderState:n,onMount:t},r,i,o){const s={latestValues:a2(r,i,o,e),renderState:n()};return t&&(s.mount=a=>t(r,a,s)),s}const p0=e=>(n,t)=>{const r=A.useContext(Ca),i=A.useContext(af),o=()=>s2(e,n,r,i);return t?o():r2(o)};function a2(e,n,t,r){const i={},o=r(e,{});for(const h in o)i[h]=us(o[h]);let{initial:s,animate:a}=e;const l=ka(e),u=Jy(e);n&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=n.initial),a===void 0&&(a=n.animate));let f=t?t.initial===!1:!1;f=f||s===!1;const c=f?a:s;return c&&typeof c!="boolean"&&!Ea(c)&&(Array.isArray(c)?c:[c]).forEach(d=>{const p=yf(e,d);if(!p)return;const{transitionEnd:x,transition:C,...g}=p;for(const y in g){let v=g[y];if(Array.isArray(v)){const w=f?v.length-1:0;v=v[w]}v!==null&&(i[y]=v)}for(const y in x)i[y]=x[y]}),i}const Se=e=>e;class Ed{constructor(){this.order=[],this.scheduled=new Set}add(n){if(!this.scheduled.has(n))return this.scheduled.add(n),this.order.push(n),!0}remove(n){const t=this.order.indexOf(n);t!==-1&&(this.order.splice(t,1),this.scheduled.delete(n))}clear(){this.order.length=0,this.scheduled.clear()}}function l2(e){let n=new Ed,t=new Ed,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,u=!1,f=!1)=>{const c=f&&i,h=c?n:t;return u&&s.add(l),h.add(l)&&c&&i&&(r=n.order.length),l},cancel:l=>{t.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[n,t]=[t,n],t.clear(),r=n.order.length,r)for(let u=0;u<r;u++){const f=n.order[u];f(l),s.has(f)&&(a.schedule(f),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const Ho=["prepare","read","update","preRender","render","postRender"],u2=40;function c2(e,n){let t=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Ho.reduce((c,h)=>(c[h]=l2(()=>t=!0),c),{}),s=c=>o[c].process(i),a=()=>{const c=performance.now();t=!1,i.delta=r?1e3/60:Math.max(Math.min(c-i.timestamp,u2),1),i.timestamp=c,i.isProcessing=!0,Ho.forEach(s),i.isProcessing=!1,t&&n&&(r=!1,e(a))},l=()=>{t=!0,r=!0,i.isProcessing||e(a)};return{schedule:Ho.reduce((c,h)=>{const d=o[h];return c[h]=(p,x=!1,C=!1)=>(t||l(),d.schedule(p,x,C)),c},{}),cancel:c=>Ho.forEach(h=>o[h].cancel(c)),state:i,steps:o}}const{schedule:ce,cancel:it,state:Me,steps:ul}=c2(typeof requestAnimationFrame<"u"?requestAnimationFrame:Se,!0),f2={useVisualState:p0({scrapeMotionValuesFromProps:d0,createRenderState:u0,onMount:(e,n,{renderState:t,latestValues:r})=>{ce.read(()=>{try{t.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}),ce.render(()=>{pf(t,r,{enableHardwareAcceleration:!1},mf(n.tagName),e.transformTemplate),h0(n,t)})}})},h2={useVisualState:p0({scrapeMotionValuesFromProps:gf,createRenderState:df})};function d2(e,{forwardMotionProps:n=!1},t,r){return{...ff(e)?f2:h2,preloadedFeatures:t,useRender:t2(n),createVisualElement:r,Component:e}}function Xn(e,n,t,r={passive:!0}){return e.addEventListener(n,t,r),()=>e.removeEventListener(n,t)}const m0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ta(e,n="page"){return{point:{x:e[n+"X"],y:e[n+"Y"]}}}const p2=e=>n=>m0(n)&&e(n,Ta(n));function Zn(e,n,t,r){return Xn(e,n,p2(t),r)}const m2=(e,n)=>t=>n(e(t)),Dt=(...e)=>e.reduce(m2);function g0(e){let n=null;return()=>{const t=()=>{n=null};return n===null?(n=e,t):!1}}const kd=g0("dragHorizontal"),Pd=g0("dragVertical");function y0(e){let n=!1;if(e==="y")n=Pd();else if(e==="x")n=kd();else{const t=kd(),r=Pd();t&&r?n=()=>{t(),r()}:(t&&t(),r&&r())}return n}function v0(){const e=y0(!0);return e?(e(),!1):!0}class Ot{constructor(n){this.isMounted=!1,this.node=n}update(){}}function Td(e,n){const t="pointer"+(n?"enter":"leave"),r="onHover"+(n?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||v0())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",n),a[r]&&ce.update(()=>a[r](o,s))};return Zn(e.current,t,i,{passive:!e.getProps()[r]})}class g2 extends Ot{mount(){this.unmount=Dt(Td(this.node,!0),Td(this.node,!1))}unmount(){}}class y2 extends Ot{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dt(Xn(this.node.current,"focus",()=>this.onFocus()),Xn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const x0=(e,n)=>n?e===n?!0:x0(e,n.parentElement):!1;function cl(e,n){if(!n)return;const t=new PointerEvent("pointer"+e);n(t,Ta(t))}class v2 extends Ot{constructor(){super(...arguments),this.removeStartListeners=Se,this.removeEndListeners=Se,this.removeAccessibleListeners=Se,this.startPointerPress=(n,t)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Zn(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:f,globalTapTarget:c}=this.node.getProps();ce.update(()=>{!c&&!x0(this.node.current,a.target)?f&&f(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=Zn(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Dt(o,s),this.startPress(n,t)},this.startAccessiblePress=()=>{const n=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||cl("up",(l,u)=>{const{onTap:f}=this.node.getProps();f&&ce.update(()=>f(l,u))})};this.removeEndListeners(),this.removeEndListeners=Xn(this.node.current,"keyup",s),cl("down",(a,l)=>{this.startPress(a,l)})},t=Xn(this.node.current,"keydown",n),r=()=>{this.isPressing&&cl("cancel",(o,s)=>this.cancelPress(o,s))},i=Xn(this.node.current,"blur",r);this.removeAccessibleListeners=Dt(t,i)}}startPress(n,t){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ce.update(()=>r(n,t))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!v0()}cancelPress(n,t){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ce.update(()=>r(n,t))}mount(){const n=this.node.getProps(),t=Zn(n.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(n.onTapStart||n.onPointerStart)}),r=Xn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Dt(t,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Fu=new WeakMap,fl=new WeakMap,x2=e=>{const n=Fu.get(e.target);n&&n(e)},S2=e=>{e.forEach(x2)};function C2({root:e,...n}){const t=e||document;fl.has(t)||fl.set(t,{});const r=fl.get(t),i=JSON.stringify(n);return r[i]||(r[i]=new IntersectionObserver(S2,{root:e,...n})),r[i]}function w2(e,n,t){const r=C2(n);return Fu.set(e,t),r.observe(e),()=>{Fu.delete(e),r.unobserve(e)}}const E2={some:0,all:1};class k2 extends Ot{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:t,margin:r,amount:i="some",once:o}=n,s={root:t?t.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:E2[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:f,onViewportLeave:c}=this.node.getProps(),h=u?f:c;h&&h(l)};return w2(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:t}=this.node;["amount","margin","root"].some(P2(n,t))&&this.startObserver()}unmount(){}}function P2({viewport:e={}},{viewport:n={}}={}){return t=>e[t]!==n[t]}const T2={inView:{Feature:k2},tap:{Feature:v2},focus:{Feature:y2},hover:{Feature:g2}};function S0(e,n){if(!Array.isArray(n))return!1;const t=n.length;if(t!==e.length)return!1;for(let r=0;r<t;r++)if(n[r]!==e[r])return!1;return!0}function A2(e){const n={};return e.values.forEach((t,r)=>n[r]=t.get()),n}function b2(e){const n={};return e.values.forEach((t,r)=>n[r]=t.getVelocity()),n}function Aa(e,n,t){const r=e.getProps();return yf(r,n,t!==void 0?t:r.custom,A2(e),b2(e))}let vf=Se;const er=e=>e*1e3,Jn=e=>e/1e3,D2={current:!1},C0=e=>Array.isArray(e)&&typeof e[0]=="number";function w0(e){return!!(!e||typeof e=="string"&&E0[e]||C0(e)||Array.isArray(e)&&e.every(w0))}const Pi=([e,n,t,r])=>`cubic-bezier(${e}, ${n}, ${t}, ${r})`,E0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Pi([0,.65,.55,1]),circOut:Pi([.55,0,1,.45]),backIn:Pi([.31,.01,.66,-.59]),backOut:Pi([.33,1.53,.69,.99])};function k0(e){if(e)return C0(e)?Pi(e):Array.isArray(e)?e.map(k0):E0[e]}function I2(e,n,t,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[n]:t};l&&(u.offset=l);const f=k0(a);return Array.isArray(f)&&(u.easing=f),e.animate(u,{delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function R2(e,{repeat:n,repeatType:t="loop"}){const r=n&&t!=="loop"&&n%2===1?0:e.length-1;return e[r]}const P0=(e,n,t)=>(((1-3*t+3*n)*e+(3*t-6*n))*e+3*n)*e,V2=1e-7,N2=12;function M2(e,n,t,r,i){let o,s,a=0;do s=n+(t-n)/2,o=P0(s,r,i)-e,o>0?t=s:n=s;while(Math.abs(o)>V2&&++a<N2);return s}function wo(e,n,t,r){if(e===n&&t===r)return Se;const i=o=>M2(o,0,1,e,t);return o=>o===0||o===1?o:P0(i(o),n,r)}const L2=wo(.42,0,1,1),j2=wo(0,0,.58,1),T0=wo(.42,0,.58,1),F2=e=>Array.isArray(e)&&typeof e[0]!="number",A0=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,b0=e=>n=>1-e(1-n),xf=e=>1-Math.sin(Math.acos(e)),D0=b0(xf),O2=A0(xf),I0=wo(.33,1.53,.69,.99),Sf=b0(I0),z2=A0(Sf),_2=e=>(e*=2)<1?.5*Sf(e):.5*(2-Math.pow(2,-10*(e-1))),B2={linear:Se,easeIn:L2,easeInOut:T0,easeOut:j2,circIn:xf,circInOut:O2,circOut:D0,backIn:Sf,backInOut:z2,backOut:I0,anticipate:_2},Ad=e=>{if(Array.isArray(e)){vf(e.length===4);const[n,t,r,i]=e;return wo(n,t,r,i)}else if(typeof e=="string")return B2[e];return e},Cf=(e,n)=>t=>!!(So(t)&&Ww.test(t)&&t.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(t,n)),R0=(e,n,t)=>r=>{if(!So(r))return r;const[i,o,s,a]=r.match(Pa);return{[e]:parseFloat(i),[n]:parseFloat(o),[t]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},W2=e=>Vt(0,255,e),hl={...fr,transform:e=>Math.round(W2(e))},Yt={test:Cf("rgb","red"),parse:R0("red","green","blue"),transform:({red:e,green:n,blue:t,alpha:r=1})=>"rgba("+hl.transform(e)+", "+hl.transform(n)+", "+hl.transform(t)+", "+ji(Li.transform(r))+")"};function U2(e){let n="",t="",r="",i="";return e.length>5?(n=e.substring(1,3),t=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(n=e.substring(1,2),t=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),n+=n,t+=t,r+=r,i+=i),{red:parseInt(n,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Ou={test:Cf("#"),parse:U2,transform:Yt.transform},Rr={test:Cf("hsl","hue"),parse:R0("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:t,alpha:r=1})=>"hsla("+Math.round(e)+", "+Wn.transform(ji(n))+", "+Wn.transform(ji(t))+", "+ji(Li.transform(r))+")"},ze={test:e=>Yt.test(e)||Ou.test(e)||Rr.test(e),parse:e=>Yt.test(e)?Yt.parse(e):Rr.test(e)?Rr.parse(e):Ou.parse(e),transform:e=>So(e)?e:e.hasOwnProperty("red")?Yt.transform(e):Rr.transform(e)},de=(e,n,t)=>-t*e+t*n+e;function dl(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function H2({hue:e,saturation:n,lightness:t,alpha:r}){e/=360,n/=100,t/=100;let i=0,o=0,s=0;if(!n)i=o=s=t;else{const a=t<.5?t*(1+n):t+n-t*n,l=2*t-a;i=dl(l,a,e+1/3),o=dl(l,a,e),s=dl(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const pl=(e,n,t)=>{const r=e*e;return Math.sqrt(Math.max(0,t*(n*n-r)+r))},$2=[Ou,Yt,Rr],G2=e=>$2.find(n=>n.test(e));function bd(e){const n=G2(e);let t=n.parse(e);return n===Rr&&(t=H2(t)),t}const V0=(e,n)=>{const t=bd(e),r=bd(n),i={...t};return o=>(i.red=pl(t.red,r.red,o),i.green=pl(t.green,r.green,o),i.blue=pl(t.blue,r.blue,o),i.alpha=de(t.alpha,r.alpha,o),Yt.transform(i))};function q2(e){var n,t;return isNaN(e)&&So(e)&&(((n=e.match(Pa))===null||n===void 0?void 0:n.length)||0)+(((t=e.match(o0))===null||t===void 0?void 0:t.length)||0)>0}const N0={regex:_w,countKey:"Vars",token:"${v}",parse:Se},M0={regex:o0,countKey:"Colors",token:"${c}",parse:ze.parse},L0={regex:Pa,countKey:"Numbers",token:"${n}",parse:fr.parse};function ml(e,{regex:n,countKey:t,token:r,parse:i}){const o=e.tokenised.match(n);o&&(e["num"+t]=o.length,e.tokenised=e.tokenised.replace(n,r),e.values.push(...o.map(i)))}function $s(e){const n=e.toString(),t={value:n,tokenised:n,values:[],numVars:0,numColors:0,numNumbers:0};return t.value.includes("var(--")&&ml(t,N0),ml(t,M0),ml(t,L0),t}function j0(e){return $s(e).values}function F0(e){const{values:n,numColors:t,numVars:r,tokenised:i}=$s(e),o=n.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(N0.token,s[l]):l<r+t?a=a.replace(M0.token,ze.transform(s[l])):a=a.replace(L0.token,ji(s[l]));return a}}const K2=e=>typeof e=="number"?0:e;function Q2(e){const n=j0(e);return F0(e)(n.map(K2))}const Nt={test:q2,parse:j0,createTransformer:F0,getAnimatableNone:Q2},O0=(e,n)=>t=>`${t>0?n:e}`;function z0(e,n){return typeof e=="number"?t=>de(e,n,t):ze.test(e)?V0(e,n):e.startsWith("var(")?O0(e,n):B0(e,n)}const _0=(e,n)=>{const t=[...e],r=t.length,i=e.map((o,s)=>z0(o,n[s]));return o=>{for(let s=0;s<r;s++)t[s]=i[s](o);return t}},X2=(e,n)=>{const t={...e,...n},r={};for(const i in t)e[i]!==void 0&&n[i]!==void 0&&(r[i]=z0(e[i],n[i]));return i=>{for(const o in r)t[o]=r[o](i);return t}},B0=(e,n)=>{const t=Nt.createTransformer(n),r=$s(e),i=$s(n);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Dt(_0(r.values,i.values),t):O0(e,n)},co=(e,n,t)=>{const r=n-e;return r===0?1:(t-e)/r},Dd=(e,n)=>t=>de(e,n,t);function Y2(e){return typeof e=="number"?Dd:typeof e=="string"?ze.test(e)?V0:B0:Array.isArray(e)?_0:typeof e=="object"?X2:Dd}function Z2(e,n,t){const r=[],i=t||Y2(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(n){const l=Array.isArray(n)?n[s]||Se:n;a=Dt(l,a)}r.push(a)}return r}function W0(e,n,{clamp:t=!0,ease:r,mixer:i}={}){const o=e.length;if(vf(o===n.length),o===1)return()=>n[0];e[0]>e[o-1]&&(e=[...e].reverse(),n=[...n].reverse());const s=Z2(n,r,i),a=s.length,l=u=>{let f=0;if(a>1)for(;f<e.length-2&&!(u<e[f+1]);f++);const c=co(e[f],e[f+1],u);return s[f](c)};return t?u=>l(Vt(e[0],e[o-1],u)):l}function J2(e,n){const t=e[e.length-1];for(let r=1;r<=n;r++){const i=co(0,n,r);e.push(de(t,1,i))}}function eE(e){const n=[0];return J2(n,e.length-1),n}function nE(e,n){return e.map(t=>t*n)}function tE(e,n){return e.map(()=>n||T0).splice(0,e.length-1)}function Gs({duration:e=300,keyframes:n,times:t,ease:r="easeInOut"}){const i=F2(r)?r.map(Ad):Ad(r),o={done:!1,value:n[0]},s=nE(t&&t.length===n.length?t:eE(n),e),a=W0(s,n,{ease:Array.isArray(i)?i:tE(n,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function U0(e,n){return n?e*(1e3/n):0}const rE=5;function H0(e,n,t){const r=Math.max(n-rE,0);return U0(t-e(r),n-r)}const gl=.001,iE=.01,oE=10,sE=.05,aE=1;function lE({duration:e=800,bounce:n=.25,velocity:t=0,mass:r=1}){let i,o,s=1-n;s=Vt(sE,aE,s),e=Vt(iE,oE,Jn(e)),s<1?(i=u=>{const f=u*s,c=f*e,h=f-t,d=zu(u,s),p=Math.exp(-c);return gl-h/d*p},o=u=>{const c=u*s*e,h=c*t+t,d=Math.pow(s,2)*Math.pow(u,2)*e,p=Math.exp(-c),x=zu(Math.pow(u,2),s);return(-i(u)+gl>0?-1:1)*((h-d)*p)/x}):(i=u=>{const f=Math.exp(-u*e),c=(u-t)*e+1;return-gl+f*c},o=u=>{const f=Math.exp(-u*e),c=(t-u)*(e*e);return f*c});const a=5/e,l=cE(i,o,a);if(e=er(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const uE=12;function cE(e,n,t){let r=t;for(let i=1;i<uE;i++)r=r-e(r)/n(r);return r}function zu(e,n){return e*Math.sqrt(1-n*n)}const fE=["duration","bounce"],hE=["stiffness","damping","mass"];function Id(e,n){return n.some(t=>e[t]!==void 0)}function dE(e){let n={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Id(e,hE)&&Id(e,fE)){const t=lE(e);n={...n,...t,mass:1},n.isResolvedFromDuration=!0}return n}function $0({keyframes:e,restDelta:n,restSpeed:t,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:f,velocity:c,isResolvedFromDuration:h}=dE({...r,velocity:-Jn(r.velocity||0)}),d=c||0,p=l/(2*Math.sqrt(a*u)),x=o-i,C=Jn(Math.sqrt(a/u)),g=Math.abs(x)<5;t||(t=g?.01:2),n||(n=g?.005:.5);let y;if(p<1){const v=zu(C,p);y=w=>{const T=Math.exp(-p*C*w);return o-T*((d+p*C*x)/v*Math.sin(v*w)+x*Math.cos(v*w))}}else if(p===1)y=v=>o-Math.exp(-C*v)*(x+(d+C*x)*v);else{const v=C*Math.sqrt(p*p-1);y=w=>{const T=Math.exp(-p*C*w),k=Math.min(v*w,300);return o-T*((d+p*C*x)*Math.sinh(k)+v*x*Math.cosh(k))/v}}return{calculatedDuration:h&&f||null,next:v=>{const w=y(v);if(h)s.done=v>=f;else{let T=d;v!==0&&(p<1?T=H0(y,v,w):T=0);const k=Math.abs(T)<=t,D=Math.abs(o-w)<=n;s.done=k&&D}return s.value=s.done?o:w,s}}}function Rd({keyframes:e,velocity:n=0,power:t=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:f}){const c=e[0],h={done:!1,value:c},d=b=>a!==void 0&&b<a||l!==void 0&&b>l,p=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let x=t*n;const C=c+x,g=s===void 0?C:s(C);g!==C&&(x=g-c);const y=b=>-x*Math.exp(-b/r),v=b=>g+y(b),w=b=>{const L=y(b),P=v(b);h.done=Math.abs(L)<=u,h.value=h.done?g:P};let T,k;const D=b=>{d(h.value)&&(T=b,k=$0({keyframes:[h.value,p(h.value)],velocity:H0(v,b,h.value),damping:i,stiffness:o,restDelta:u,restSpeed:f}))};return D(0),{calculatedDuration:null,next:b=>{let L=!1;return!k&&T===void 0&&(L=!0,w(b),D(b)),T!==void 0&&b>T?k.next(b-T):(!L&&w(b),h)}}}const pE=e=>{const n=({timestamp:t})=>e(t);return{start:()=>ce.update(n,!0),stop:()=>it(n),now:()=>Me.isProcessing?Me.timestamp:performance.now()}},Vd=2e4;function Nd(e){let n=0;const t=50;let r=e.next(n);for(;!r.done&&n<Vd;)n+=t,r=e.next(n);return n>=Vd?1/0:n}const mE={decay:Rd,inertia:Rd,tween:Gs,keyframes:Gs,spring:$0};function qs({autoplay:e=!0,delay:n=0,driver:t=pE,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:f,onUpdate:c,...h}){let d=1,p=!1,x,C;const g=()=>{C=new Promise(_=>{x=_})};g();let y;const v=mE[i]||Gs;let w;v!==Gs&&typeof r[0]!="number"&&(w=W0([0,100],r,{clamp:!1}),r=[0,100]);const T=v({...h,keyframes:r});let k;a==="mirror"&&(k=v({...h,keyframes:[...r].reverse(),velocity:-(h.velocity||0)}));let D="idle",b=null,L=null,P=null;T.calculatedDuration===null&&o&&(T.calculatedDuration=Nd(T));const{calculatedDuration:j}=T;let F=1/0,U=1/0;j!==null&&(F=j+s,U=F*(o+1)-s);let $=0;const G=_=>{if(L===null)return;d>0&&(L=Math.min(L,_)),d<0&&(L=Math.min(_-U/d,L)),b!==null?$=b:$=Math.round(_-L)*d;const Z=$-n*(d>=0?1:-1),E=d>=0?Z<0:Z>U;$=Math.max(Z,0),D==="finished"&&b===null&&($=U);let ye=$,Ge=T;if(o){const Ln=Math.min($,U)/F;let En=Math.floor(Ln),dn=Ln%1;!dn&&Ln>=1&&(dn=1),dn===1&&En--,En=Math.min(En,o+1),!!(En%2)&&(a==="reverse"?(dn=1-dn,s&&(dn-=s/F)):a==="mirror"&&(Ge=k)),ye=Vt(0,1,dn)*F}const ne=E?{done:!1,value:r[0]}:Ge.next(ye);w&&(ne.value=w(ne.value));let{done:nn}=ne;!E&&j!==null&&(nn=d>=0?$>=U:$<=0);const Mn=b===null&&(D==="finished"||D==="running"&&nn);return c&&c(ne.value),Mn&&N(),ne},K=()=>{y&&y.stop(),y=void 0},te=()=>{D="idle",K(),x(),g(),L=P=null},N=()=>{D="finished",f&&f(),K(),x()},z=()=>{if(p)return;y||(y=t(G));const _=y.now();l&&l(),b!==null?L=_-b:(!L||D==="finished")&&(L=_),D==="finished"&&g(),P=L,b=null,D="running",y.start()};e&&z();const S={then(_,Z){return C.then(_,Z)},get time(){return Jn($)},set time(_){_=er(_),$=_,b!==null||!y||d===0?b=_:L=y.now()-_/d},get duration(){const _=T.calculatedDuration===null?Nd(T):T.calculatedDuration;return Jn(_)},get speed(){return d},set speed(_){_===d||!y||(d=_,S.time=Jn($))},get state(){return D},play:z,pause:()=>{D="paused",b=$},stop:()=>{p=!0,D!=="idle"&&(D="idle",u&&u(),te())},cancel:()=>{P!==null&&G(P),te()},complete:()=>{D="finished"},sample:_=>(L=0,G(_))};return S}function gE(e){let n;return()=>(n===void 0&&(n=e()),n)}const yE=gE(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),vE=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),$o=10,xE=2e4,SE=(e,n)=>n.type==="spring"||e==="backgroundColor"||!w0(n.ease);function CE(e,n,{onUpdate:t,onComplete:r,...i}){if(!(yE()&&vE.has(n)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const f=()=>{l=new Promise(v=>{a=v})};f();let{keyframes:c,duration:h=300,ease:d,times:p}=i;if(SE(n,i)){const v=qs({...i,repeat:0,delay:0});let w={done:!1,value:c[0]};const T=[];let k=0;for(;!w.done&&k<xE;)w=v.sample(k),T.push(w.value),k+=$o;p=void 0,c=T,h=k-$o,d="linear"}const x=I2(e.owner.current,n,c,{...i,duration:h,ease:d,times:p}),C=()=>{u=!1,x.cancel()},g=()=>{u=!0,ce.update(C),a(),f()};return x.onfinish=()=>{u||(e.set(R2(c,i)),r&&r(),g())},{then(v,w){return l.then(v,w)},attachTimeline(v){return x.timeline=v,x.onfinish=null,Se},get time(){return Jn(x.currentTime||0)},set time(v){x.currentTime=er(v)},get speed(){return x.playbackRate},set speed(v){x.playbackRate=v},get duration(){return Jn(h)},play:()=>{s||(x.play(),it(C))},pause:()=>x.pause(),stop:()=>{if(s=!0,x.playState==="idle")return;const{currentTime:v}=x;if(v){const w=qs({...i,autoplay:!1});e.setWithVelocity(w.sample(v-$o).value,w.sample(v).value,$o)}g()},complete:()=>{u||x.finish()},cancel:g}}function wE({keyframes:e,delay:n,onUpdate:t,onComplete:r}){const i=()=>(t&&t(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:Se,pause:Se,stop:Se,then:o=>(o(),Promise.resolve()),cancel:Se,complete:Se});return n?qs({keyframes:[0,1],duration:0,delay:n,onComplete:i}):i()}const EE={type:"spring",stiffness:500,damping:25,restSpeed:10},kE=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),PE={type:"keyframes",duration:.8},TE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},AE=(e,{keyframes:n})=>n.length>2?PE:cr.has(e)?e.startsWith("scale")?kE(n[1]):EE:TE,_u=(e,n)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Nt.test(n)||n==="0")&&!n.startsWith("url(")),bE=new Set(["brightness","contrast","saturate","opacity"]);function DE(e){const[n,t]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[r]=t.match(Pa)||[];if(!r)return e;const i=t.replace(r,"");let o=bE.has(n)?1:0;return r!==t&&(o*=100),n+"("+o+i+")"}const IE=/([a-z-]*)\(.*?\)/g,Bu={...Nt,getAnimatableNone:e=>{const n=e.match(IE);return n?n.map(DE).join(" "):e}},RE={...s0,color:ze,backgroundColor:ze,outlineColor:ze,fill:ze,stroke:ze,borderColor:ze,borderTopColor:ze,borderRightColor:ze,borderBottomColor:ze,borderLeftColor:ze,filter:Bu,WebkitFilter:Bu},wf=e=>RE[e];function G0(e,n){let t=wf(e);return t!==Bu&&(t=Nt),t.getAnimatableNone?t.getAnimatableNone(n):void 0}const q0=e=>/^0[^.\s]+$/.test(e);function VE(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||q0(e)}function NE(e,n,t,r){const i=_u(n,t);let o;Array.isArray(t)?o=[...t]:o=[null,t];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?s:o[u-1]),VE(o[u])&&l.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(a=o[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const f=l[u];o[f]=G0(n,a)}return o}function ME({when:e,delay:n,delayChildren:t,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...f}){return!!Object.keys(f).length}function Ef(e,n){return e[n]||e.default||e}const LE={skipAnimations:!1},kf=(e,n,t,r={})=>i=>{const o=Ef(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-er(s);const l=NE(n,e,t,o),u=l[0],f=l[l.length-1],c=_u(e,u),h=_u(e,f);let d={keyframes:l,velocity:n.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:p=>{n.set(p),o.onUpdate&&o.onUpdate(p)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(ME(o)||(d={...d,...AE(e,d)}),d.duration&&(d.duration=er(d.duration)),d.repeatDelay&&(d.repeatDelay=er(d.repeatDelay)),!c||!h||D2.current||o.type===!1||LE.skipAnimations)return wE(d);if(!r.isHandoff&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate){const p=CE(n,e,d);if(p)return p}return qs(d)};function Ks(e){return!!(Je(e)&&e.add)}const K0=e=>/^\-?\d*\.?\d+$/.test(e);function Pf(e,n){e.indexOf(n)===-1&&e.push(n)}function Tf(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}class Af{constructor(){this.subscriptions=[]}add(n){return Pf(this.subscriptions,n),()=>Tf(this.subscriptions,n)}notify(n,t,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](n,t,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(n,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jE=e=>!isNaN(parseFloat(e));class FE{constructor(n,t={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=Me;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,ce.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ce.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=n,this.canTrackVelocity=jE(this.current),this.owner=t.owner}onChange(n){return this.on("change",n)}on(n,t){this.events[n]||(this.events[n]=new Af);const r=this.events[n].add(t);return n==="change"?()=>{r(),ce.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,t){this.passiveEffect=n,this.stopPassiveEffect=t}set(n,t=!0){!t||!this.passiveEffect?this.updateAndNotify(n,t):this.passiveEffect(n,this.updateAndNotify)}setWithVelocity(n,t,r){this.set(t),this.prev=n,this.timeDelta=r}jump(n){this.updateAndNotify(n),this.prev=n,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?U0(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=n(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Yr(e,n){return new FE(e,n)}const Q0=e=>n=>n.test(e),OE={test:e=>e==="auto",parse:e=>e},X0=[fr,W,Wn,ft,Hw,Uw,OE],yi=e=>X0.find(Q0(e)),zE=[...X0,ze,Nt],_E=e=>zE.find(Q0(e));function BE(e,n,t){e.hasValue(n)?e.getValue(n).set(t):e.addValue(n,Yr(t))}function WE(e,n){const t=Aa(e,n);let{transitionEnd:r={},transition:i={},...o}=t?e.makeTargetAnimatable(t,!1):{};o={...o,...r};for(const s in o){const a=o2(o[s]);BE(e,s,a)}}function UE(e,n,t){var r,i;const o=Object.keys(n).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],u=n[l];let f=null;Array.isArray(u)&&(f=u[0]),f===null&&(f=(i=(r=t[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:n[l]),f!=null&&(typeof f=="string"&&(K0(f)||q0(f))?f=parseFloat(f):!_E(f)&&Nt.test(u)&&(f=G0(l,u)),e.addValue(l,Yr(f,{owner:e})),t[l]===void 0&&(t[l]=f),f!==null&&e.setBaseTarget(l,f))}}function HE(e,n){return n?(n[e]||n.default||n).from:void 0}function $E(e,n,t){const r={};for(const i in e){const o=HE(i,n);if(o!==void 0)r[i]=o;else{const s=t.getValue(i);s&&(r[i]=s.get())}}return r}function GE({protectedKeys:e,needsAnimating:n},t){const r=e.hasOwnProperty(t)&&n[t]!==!0;return n[t]=!1,r}function qE(e,n){const t=e.get();if(Array.isArray(n)){for(let r=0;r<n.length;r++)if(n[r]!==t)return!0}else return t!==n}function Y0(e,n,{delay:t=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(n);const l=e.getValue("willChange");r&&(o=r);const u=[],f=i&&e.animationState&&e.animationState.getState()[i];for(const c in a){const h=e.getValue(c),d=a[c];if(!h||d===void 0||f&&GE(f,c))continue;const p={delay:t,elapsed:0,...Ef(o||{},c)};if(window.HandoffAppearAnimations){const g=e.getProps()[Zy];if(g){const y=window.HandoffAppearAnimations(g,c,h,ce);y!==null&&(p.elapsed=y,p.isHandoff=!0)}}let x=!p.isHandoff&&!qE(h,d);if(p.type==="spring"&&(h.getVelocity()||p.velocity)&&(x=!1),h.animation&&(x=!1),x)continue;h.start(kf(c,h,d,e.shouldReduceMotion&&cr.has(c)?{type:!1}:p));const C=h.animation;Ks(l)&&(l.add(c),C.then(()=>l.remove(c))),u.push(C)}return s&&Promise.all(u).then(()=>{s&&WE(e,s)}),u}function Wu(e,n,t={}){const r=Aa(e,n,t.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(i=t.transitionOverride);const o=r?()=>Promise.all(Y0(e,r,t)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:c}=i;return KE(e,n,u+l,f,c,t)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>u())}else return Promise.all([o(),s(t.delay)])}function KE(e,n,t=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(QE).forEach((u,f)=>{u.notify("AnimationStart",n),s.push(Wu(u,n,{...o,delay:t+l(f)}).then(()=>u.notify("AnimationComplete",n)))}),Promise.all(s)}function QE(e,n){return e.sortNodePosition(n)}function XE(e,n,t={}){e.notify("AnimationStart",n);let r;if(Array.isArray(n)){const i=n.map(o=>Wu(e,o,t));r=Promise.all(i)}else if(typeof n=="string")r=Wu(e,n,t);else{const i=typeof n=="function"?Aa(e,n,t.custom):n;r=Promise.all(Y0(e,i,t))}return r.then(()=>e.notify("AnimationComplete",n))}const YE=[...uf].reverse(),ZE=uf.length;function JE(e){return n=>Promise.all(n.map(({animation:t,options:r})=>XE(e,t,r)))}function ek(e){let n=JE(e);const t=tk();let r=!0;const i=(l,u)=>{const f=Aa(e,u);if(f){const{transition:c,transitionEnd:h,...d}=f;l={...l,...d,...h}}return l};function o(l){n=l(e)}function s(l,u){const f=e.getProps(),c=e.getVariantContext(!0)||{},h=[],d=new Set;let p={},x=1/0;for(let g=0;g<ZE;g++){const y=YE[g],v=t[y],w=f[y]!==void 0?f[y]:c[y],T=lo(w),k=y===u?v.isActive:null;k===!1&&(x=g);let D=w===c[y]&&w!==f[y]&&T;if(D&&r&&e.manuallyAnimateOnMount&&(D=!1),v.protectedKeys={...p},!v.isActive&&k===null||!w&&!v.prevProp||Ea(w)||typeof w=="boolean")continue;let L=nk(v.prevProp,w)||y===u&&v.isActive&&!D&&T||g>x&&T,P=!1;const j=Array.isArray(w)?w:[w];let F=j.reduce(i,{});k===!1&&(F={});const{prevResolvedValues:U={}}=v,$={...U,...F},G=K=>{L=!0,d.has(K)&&(P=!0,d.delete(K)),v.needsAnimating[K]=!0};for(const K in $){const te=F[K],N=U[K];if(p.hasOwnProperty(K))continue;let z=!1;Hs(te)&&Hs(N)?z=!S0(te,N):z=te!==N,z?te!==void 0?G(K):d.add(K):te!==void 0&&d.has(K)?G(K):v.protectedKeys[K]=!0}v.prevProp=w,v.prevResolvedValues=F,v.isActive&&(p={...p,...F}),r&&e.blockInitialAnimation&&(L=!1),L&&(!D||P)&&h.push(...j.map(K=>({animation:K,options:{type:y,...l}})))}if(d.size){const g={};d.forEach(y=>{const v=e.getBaseTarget(y);v!==void 0&&(g[y]=v)}),h.push({animation:g})}let C=!!h.length;return r&&(f.initial===!1||f.initial===f.animate)&&!e.manuallyAnimateOnMount&&(C=!1),r=!1,C?n(h):Promise.resolve()}function a(l,u,f){var c;if(t[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(d=>{var p;return(p=d.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),t[l].isActive=u;const h=s(f,l);for(const d in t)t[d].protectedKeys={};return h}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>t}}function nk(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!S0(n,e):!1}function Bt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function tk(){return{animate:Bt(!0),whileInView:Bt(),whileHover:Bt(),whileTap:Bt(),whileDrag:Bt(),whileFocus:Bt(),exit:Bt()}}class rk extends Ot{constructor(n){super(n),n.animationState||(n.animationState=ek(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();this.unmount(),Ea(n)&&(this.unmount=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:t}=this.node.prevProps||{};n!==t&&this.updateAnimationControlsSubscription()}unmount(){}}let ik=0;class ok extends Ot{constructor(){super(...arguments),this.id=ik++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:t,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===i)return;const o=this.node.animationState.setActive("exit",!n,{custom:r??this.node.getProps().custom});t&&!n&&o.then(()=>t(this.id))}mount(){const{register:n}=this.node.presenceContext||{};n&&(this.unmount=n(this.id))}unmount(){}}const sk={animation:{Feature:rk},exit:{Feature:ok}},Md=(e,n)=>Math.abs(e-n);function ak(e,n){const t=Md(e.x,n.x),r=Md(e.y,n.y);return Math.sqrt(t**2+r**2)}class Z0{constructor(n,t,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const c=vl(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,d=ak(c.offset,{x:0,y:0})>=3;if(!h&&!d)return;const{point:p}=c,{timestamp:x}=Me;this.history.push({...p,timestamp:x});const{onStart:C,onMove:g}=this.handlers;h||(C&&C(this.lastMoveEvent,c),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,c)},this.handlePointerMove=(c,h)=>{this.lastMoveEvent=c,this.lastMoveEventInfo=yl(h,this.transformPagePoint),ce.update(this.updatePoint,!0)},this.handlePointerUp=(c,h)=>{this.end();const{onEnd:d,onSessionEnd:p,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=vl(c.type==="pointercancel"?this.lastMoveEventInfo:yl(h,this.transformPagePoint),this.history);this.startEvent&&d&&d(c,C),p&&p(c,C)},!m0(n))return;this.dragSnapToOrigin=o,this.handlers=t,this.transformPagePoint=r,this.contextWindow=i||window;const s=Ta(n),a=yl(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=Me;this.history=[{...l,timestamp:u}];const{onSessionStart:f}=t;f&&f(n,vl(a,this.history)),this.removeListeners=Dt(Zn(this.contextWindow,"pointermove",this.handlePointerMove),Zn(this.contextWindow,"pointerup",this.handlePointerUp),Zn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),it(this.updatePoint)}}function yl(e,n){return n?{point:n(e.point)}:e}function Ld(e,n){return{x:e.x-n.x,y:e.y-n.y}}function vl({point:e},n){return{point:e,delta:Ld(e,J0(n)),offset:Ld(e,lk(n)),velocity:uk(n,.1)}}function lk(e){return e[0]}function J0(e){return e[e.length-1]}function uk(e,n){if(e.length<2)return{x:0,y:0};let t=e.length-1,r=null;const i=J0(e);for(;t>=0&&(r=e[t],!(i.timestamp-r.timestamp>er(n)));)t--;if(!r)return{x:0,y:0};const o=Jn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function cn(e){return e.max-e.min}function Uu(e,n=0,t=.01){return Math.abs(e-n)<=t}function jd(e,n,t,r=.5){e.origin=r,e.originPoint=de(n.min,n.max,e.origin),e.scale=cn(t)/cn(n),(Uu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=de(t.min,t.max,e.origin)-e.originPoint,(Uu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Fi(e,n,t,r){jd(e.x,n.x,t.x,r?r.originX:void 0),jd(e.y,n.y,t.y,r?r.originY:void 0)}function Fd(e,n,t){e.min=t.min+n.min,e.max=e.min+cn(n)}function ck(e,n,t){Fd(e.x,n.x,t.x),Fd(e.y,n.y,t.y)}function Od(e,n,t){e.min=n.min-t.min,e.max=e.min+cn(n)}function Oi(e,n,t){Od(e.x,n.x,t.x),Od(e.y,n.y,t.y)}function fk(e,{min:n,max:t},r){return n!==void 0&&e<n?e=r?de(n,e,r.min):Math.max(e,n):t!==void 0&&e>t&&(e=r?de(t,e,r.max):Math.min(e,t)),e}function zd(e,n,t){return{min:n!==void 0?e.min+n:void 0,max:t!==void 0?e.max+t-(e.max-e.min):void 0}}function hk(e,{top:n,left:t,bottom:r,right:i}){return{x:zd(e.x,t,i),y:zd(e.y,n,r)}}function _d(e,n){let t=n.min-e.min,r=n.max-e.max;return n.max-n.min<e.max-e.min&&([t,r]=[r,t]),{min:t,max:r}}function dk(e,n){return{x:_d(e.x,n.x),y:_d(e.y,n.y)}}function pk(e,n){let t=.5;const r=cn(e),i=cn(n);return i>r?t=co(n.min,n.max-r,e.min):r>i&&(t=co(e.min,e.max-i,n.min)),Vt(0,1,t)}function mk(e,n){const t={};return n.min!==void 0&&(t.min=n.min-e.min),n.max!==void 0&&(t.max=n.max-e.min),t}const Hu=.35;function gk(e=Hu){return e===!1?e=0:e===!0&&(e=Hu),{x:Bd(e,"left","right"),y:Bd(e,"top","bottom")}}function Bd(e,n,t){return{min:Wd(e,n),max:Wd(e,t)}}function Wd(e,n){return typeof e=="number"?e:e[n]||0}const Ud=()=>({translate:0,scale:1,origin:0,originPoint:0}),Vr=()=>({x:Ud(),y:Ud()}),Hd=()=>({min:0,max:0}),we=()=>({x:Hd(),y:Hd()});function mn(e){return[e("x"),e("y")]}function e1({top:e,left:n,right:t,bottom:r}){return{x:{min:n,max:t},y:{min:e,max:r}}}function yk({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function vk(e,n){if(!n)return e;const t=n({x:e.left,y:e.top}),r=n({x:e.right,y:e.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function xl(e){return e===void 0||e===1}function $u({scale:e,scaleX:n,scaleY:t}){return!xl(e)||!xl(n)||!xl(t)}function $t(e){return $u(e)||n1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function n1(e){return $d(e.x)||$d(e.y)}function $d(e){return e&&e!=="0%"}function Qs(e,n,t){const r=e-t,i=n*r;return t+i}function Gd(e,n,t,r,i){return i!==void 0&&(e=Qs(e,i,r)),Qs(e,t,r)+n}function Gu(e,n=0,t=1,r,i){e.min=Gd(e.min,n,t,r,i),e.max=Gd(e.max,n,t,r,i)}function t1(e,{x:n,y:t}){Gu(e.x,n.translate,n.scale,n.originPoint),Gu(e.y,t.translate,t.scale,t.originPoint)}function xk(e,n,t,r=!1){const i=t.length;if(!i)return;n.x=n.y=1;let o,s;for(let a=0;a<i;a++){o=t[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Nr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(n.x*=s.x.scale,n.y*=s.y.scale,t1(e,s)),r&&$t(o.latestValues)&&Nr(e,o.latestValues))}n.x=qd(n.x),n.y=qd(n.y)}function qd(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function pt(e,n){e.min=e.min+n,e.max=e.max+n}function Kd(e,n,[t,r,i]){const o=n[i]!==void 0?n[i]:.5,s=de(e.min,e.max,o);Gu(e,n[t],n[r],s,n.scale)}const Sk=["x","scaleX","originX"],Ck=["y","scaleY","originY"];function Nr(e,n){Kd(e.x,n,Sk),Kd(e.y,n,Ck)}function r1(e,n){return e1(vk(e.getBoundingClientRect(),n))}function wk(e,n,t){const r=r1(e,t),{scroll:i}=n;return i&&(pt(r.x,i.offset.x),pt(r.y,i.offset.y)),r}const i1=({current:e})=>e?e.ownerDocument.defaultView:null,Ek=new WeakMap;class kk{constructor(n){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=we(),this.visualElement=n}start(n,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=f=>{const{dragSnapToOrigin:c}=this.getProps();c?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ta(f,"page").point)},o=(f,c)=>{const{drag:h,dragPropagation:d,onDragStart:p}=this.getProps();if(h&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=y0(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),mn(C=>{let g=this.getAxisMotionValue(C).get()||0;if(Wn.test(g)){const{projection:y}=this.visualElement;if(y&&y.layout){const v=y.layout.layoutBox[C];v&&(g=cn(v)*(parseFloat(g)/100))}}this.originPoint[C]=g}),p&&ce.update(()=>p(f,c),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(f,c)=>{const{dragPropagation:h,dragDirectionLock:d,onDirectionLock:p,onDrag:x}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:C}=c;if(d&&this.currentDirection===null){this.currentDirection=Pk(C),this.currentDirection!==null&&p&&p(this.currentDirection);return}this.updateAxis("x",c.point,C),this.updateAxis("y",c.point,C),this.visualElement.render(),x&&x(f,c)},a=(f,c)=>this.stop(f,c),l=()=>mn(f=>{var c;return this.getAnimationState(f)==="paused"&&((c=this.getAxisMotionValue(f).animation)===null||c===void 0?void 0:c.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Z0(n,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:i1(this.visualElement)})}stop(n,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=t;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&ce.update(()=>o(n,t))}cancel(){this.isDragging=!1;const{projection:n,animationState:t}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(n,t,r){const{drag:i}=this.getProps();if(!r||!Go(n,i,this.currentDirection))return;const o=this.getAxisMotionValue(n);let s=this.originPoint[n]+r[n];this.constraints&&this.constraints[n]&&(s=fk(s,this.constraints[n],this.elastic[n])),o.set(s)}resolveConstraints(){var n;const{dragConstraints:t,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(n=this.visualElement.projection)===null||n===void 0?void 0:n.layout,o=this.constraints;t&&Ir(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=hk(i.layoutBox,t):this.constraints=!1,this.elastic=gk(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&mn(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=mk(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:t}=this.getProps();if(!n||!Ir(n))return!1;const r=n.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=wk(r,i.root,this.visualElement.getTransformPagePoint());let s=dk(i.layout.layoutBox,o);if(t){const a=t(yk(s));this.hasMutatedConstraints=!!a,a&&(s=e1(a))}return s}startAnimation(n){const{drag:t,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=mn(f=>{if(!Go(f,t,this.currentDirection))return;let c=l&&l[f]||{};s&&(c={min:0,max:0});const h=i?200:1e6,d=i?40:1e7,p={type:"inertia",velocity:r?n[f]:0,bounceStiffness:h,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...o,...c};return this.startAxisValueAnimation(f,p)});return Promise.all(u).then(a)}startAxisValueAnimation(n,t){const r=this.getAxisMotionValue(n);return r.start(kf(n,r,0,t))}stopAnimation(){mn(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){mn(n=>{var t;return(t=this.getAxisMotionValue(n).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(n){var t;return(t=this.getAxisMotionValue(n).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(n){const t="_drag"+n.toUpperCase(),r=this.visualElement.getProps(),i=r[t];return i||this.visualElement.getValue(n,(r.initial?r.initial[n]:void 0)||0)}snapToCursor(n){mn(t=>{const{drag:r}=this.getProps();if(!Go(t,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(t);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[t];o.set(n[t]-de(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Ir(t)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};mn(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=pk({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),mn(s=>{if(!Go(s,n,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(de(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;Ek.set(this.visualElement,this);const n=this.visualElement.current,t=Zn(n,"pointerdown",l=>{const{drag:u,dragListener:f=!0}=this.getProps();u&&f&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ir(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=Xn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(mn(f=>{const c=this.getAxisMotionValue(f);c&&(this.originPoint[f]+=l[f].translate,c.set(c.get()+l[f].translate))}),this.visualElement.render())});return()=>{s(),t(),o(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Hu,dragMomentum:a=!0}=n;return{...n,drag:t,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Go(e,n,t){return(n===!0||n===e)&&(t===null||t===e)}function Pk(e,n=10){let t=null;return Math.abs(e.y)>n?t="y":Math.abs(e.x)>n&&(t="x"),t}class Tk extends Ot{constructor(n){super(n),this.removeGroupControls=Se,this.removeListeners=Se,this.controls=new kk(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Se}unmount(){this.removeGroupControls(),this.removeListeners()}}const Qd=e=>(n,t)=>{e&&ce.update(()=>e(n,t))};class Ak extends Ot{constructor(){super(...arguments),this.removePointerDownListener=Se}onPointerDown(n){this.session=new Z0(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:i1(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:t,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Qd(n),onStart:Qd(t),onMove:r,onEnd:(o,s)=>{delete this.session,i&&ce.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Zn(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function bk(){const e=A.useContext(af);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:t,register:r}=e,i=A.useId();return A.useEffect(()=>r(i),[]),!n&&t?[!1,()=>t&&t(i)]:[!0]}const cs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Xd(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const vi={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const t=Xd(e,n.target.x),r=Xd(e,n.target.y);return`${t}% ${r}%`}},Dk={correct:(e,{treeScale:n,projectionDelta:t})=>{const r=e,i=Nt.parse(e);if(i.length>5)return r;const o=Nt.createTransformer(e),s=typeof i[0]!="number"?1:0,a=t.x.scale*n.x,l=t.y.scale*n.y;i[0+s]/=a,i[1+s]/=l;const u=de(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class Ik extends ta.Component{componentDidMount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=n;jw(Rk),o&&(t.group&&t.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),cs.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:t,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||n.layoutDependency!==t||t===void 0?s.willUpdate():this.safeToRemove(),n.isPresent!==o&&(o?s.promote():s.relegate()||ce.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),queueMicrotask(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:i}=n;i&&(i.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function o1(e){const[n,t]=bk(),r=A.useContext(e0);return ta.createElement(Ik,{...e,layoutGroup:r,switchLayoutGroup:A.useContext(n0),isPresent:n,safeToRemove:t})}const Rk={borderRadius:{...vi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:vi,borderTopRightRadius:vi,borderBottomLeftRadius:vi,borderBottomRightRadius:vi,boxShadow:Dk},s1=["TopLeft","TopRight","BottomLeft","BottomRight"],Vk=s1.length,Yd=e=>typeof e=="string"?parseFloat(e):e,Zd=e=>typeof e=="number"||W.test(e);function Nk(e,n,t,r,i,o){i?(e.opacity=de(0,t.opacity!==void 0?t.opacity:1,Mk(r)),e.opacityExit=de(n.opacity!==void 0?n.opacity:1,0,Lk(r))):o&&(e.opacity=de(n.opacity!==void 0?n.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let s=0;s<Vk;s++){const a=`border${s1[s]}Radius`;let l=Jd(n,a),u=Jd(t,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Zd(l)===Zd(u)?(e[a]=Math.max(de(Yd(l),Yd(u),r),0),(Wn.test(u)||Wn.test(l))&&(e[a]+="%")):e[a]=u}(n.rotate||t.rotate)&&(e.rotate=de(n.rotate||0,t.rotate||0,r))}function Jd(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const Mk=a1(0,.5,D0),Lk=a1(.5,.95,Se);function a1(e,n,t){return r=>r<e?0:r>n?1:t(co(e,n,r))}function ep(e,n){e.min=n.min,e.max=n.max}function pn(e,n){ep(e.x,n.x),ep(e.y,n.y)}function np(e,n,t,r,i){return e-=n,e=Qs(e,1/t,r),i!==void 0&&(e=Qs(e,1/i,r)),e}function jk(e,n=0,t=1,r=.5,i,o=e,s=e){if(Wn.test(n)&&(n=parseFloat(n),n=de(s.min,s.max,n/100)-s.min),typeof n!="number")return;let a=de(o.min,o.max,r);e===o&&(a-=n),e.min=np(e.min,n,t,a,i),e.max=np(e.max,n,t,a,i)}function tp(e,n,[t,r,i],o,s){jk(e,n[t],n[r],n[i],n.scale,o,s)}const Fk=["x","scaleX","originX"],Ok=["y","scaleY","originY"];function rp(e,n,t,r){tp(e.x,n,Fk,t?t.x:void 0,r?r.x:void 0),tp(e.y,n,Ok,t?t.y:void 0,r?r.y:void 0)}function ip(e){return e.translate===0&&e.scale===1}function l1(e){return ip(e.x)&&ip(e.y)}function zk(e,n){return e.x.min===n.x.min&&e.x.max===n.x.max&&e.y.min===n.y.min&&e.y.max===n.y.max}function u1(e,n){return Math.round(e.x.min)===Math.round(n.x.min)&&Math.round(e.x.max)===Math.round(n.x.max)&&Math.round(e.y.min)===Math.round(n.y.min)&&Math.round(e.y.max)===Math.round(n.y.max)}function op(e){return cn(e.x)/cn(e.y)}class _k{constructor(){this.members=[]}add(n){Pf(this.members,n),n.scheduleRender()}remove(n){if(Tf(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(n){const t=this.members.findIndex(i=>n===i);if(t===0)return!1;let r;for(let i=t;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(n,t){const r=this.lead;if(n!==r&&(this.prevLead=r,this.lead=n,n.show(),r)){r.instance&&r.scheduleRender(),n.scheduleRender(),n.resumeFrom=r,t&&(n.resumeFrom.preserveOpacity=!0),r.snapshot&&(n.snapshot=r.snapshot,n.snapshot.latestValues=r.animationValues||r.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:i}=n.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:t,resumingFrom:r}=n;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function sp(e,n,t){let r="";const i=e.x.translate/n.x,o=e.y.translate/n.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(n.x!==1||n.y!==1)&&(r+=`scale(${1/n.x}, ${1/n.y}) `),t){const{rotate:l,rotateX:u,rotateY:f}=t;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),f&&(r+=`rotateY(${f}deg) `)}const s=e.x.scale*n.x,a=e.y.scale*n.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const Bk=(e,n)=>e.depth-n.depth;class Wk{constructor(){this.children=[],this.isDirty=!1}add(n){Pf(this.children,n),this.isDirty=!0}remove(n){Tf(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(Bk),this.isDirty=!1,this.children.forEach(n)}}function Uk(e,n){const t=performance.now(),r=({timestamp:i})=>{const o=i-t;o>=n&&(it(r),e(o-n))};return ce.read(r,!0),()=>it(r)}function Hk(e){window.MotionDebug&&window.MotionDebug.record(e)}function $k(e){return e instanceof SVGElement&&e.tagName!=="svg"}function Gk(e,n,t){const r=Je(e)?e:Yr(e);return r.start(kf("",r,n,t)),r.animation}const ap=["","X","Y","Z"],qk={visibility:"hidden"},lp=1e3;let Kk=0;const Gt={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function c1({attachResizeListener:e,defaultParent:n,measureScroll:t,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=n==null?void 0:n()){this.id=Kk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Gt.totalNodes=Gt.resolvedTargetDeltas=Gt.recalculatedProjection=0,this.nodes.forEach(Yk),this.nodes.forEach(tP),this.nodes.forEach(rP),this.nodes.forEach(Zk),Hk(Gt)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Wk)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Af),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=$k(s),this.instance=s;const{layoutId:l,layout:u,visualElement:f}=this.options;if(f&&!f.current&&f.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let c;const h=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,c&&c(),c=Uk(h,250),cs.hasAnimatedSinceResize&&(cs.hasAnimatedSinceResize=!1,this.nodes.forEach(cp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&f&&(l||u)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:h,hasRelativeTargetChanged:d,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||f.getDefaultTransition()||lP,{onLayoutAnimationStart:C,onLayoutAnimationComplete:g}=f.getProps(),y=!this.targetLayout||!u1(this.targetLayout,p)||d,v=!h&&d;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||h&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(c,v);const w={...Ef(x,"layout"),onPlay:C,onComplete:g};(f.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else h||cp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,it(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(iP),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const c=this.path[f];c.shouldResetTransform=!0,c.updateScroll("snapshot"),c.options.layoutRoot&&c.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(up);return}this.isUpdating||this.nodes.forEach(eP),this.isUpdating=!1,this.nodes.forEach(nP),this.nodes.forEach(Qk),this.nodes.forEach(Xk),this.clearAllSnapshots();const a=performance.now();Me.delta=Vt(0,1e3/60,a-Me.timestamp),Me.timestamp=a,Me.isProcessing=!0,ul.update.process(Me),ul.preRender.process(Me),ul.render.process(Me),Me.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Jk),this.sharedNodes.forEach(oP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ce.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ce.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=we(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:t(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!l1(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,f=u!==this.prevTransformTemplateValue;s&&(a||$t(this.latestValues)||f)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),uP(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return we();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(pt(a.x,l.offset.x),pt(a.y,l.offset.y)),a}removeElementScroll(s){const a=we();pn(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:f,options:c}=u;if(u!==this.root&&f&&c.layoutScroll){if(f.isRoot){pn(a,s);const{scroll:h}=this.root;h&&(pt(a.x,-h.offset.x),pt(a.y,-h.offset.y))}pt(a.x,f.offset.x),pt(a.y,f.offset.y)}}return a}applyTransform(s,a=!1){const l=we();pn(l,s);for(let u=0;u<this.path.length;u++){const f=this.path[u];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Nr(l,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),$t(f.latestValues)&&Nr(l,f.latestValues)}return $t(this.latestValues)&&Nr(l,this.latestValues),l}removeTransform(s){const a=we();pn(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!$t(u.latestValues))continue;$u(u.latestValues)&&u.updateSnapshot();const f=we(),c=u.measurePageBox();pn(f,c),rp(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,f)}return $t(this.latestValues)&&rp(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Me.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:c,layoutId:h}=this.options;if(!(!this.layout||!(c||h))){if(this.resolvedRelativeTargetAt=Me.timestamp,!this.targetDelta&&!this.relativeTarget){const d=this.getClosestProjectingParent();d&&d.layout&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Oi(this.relativeTargetOrigin,this.layout.layoutBox,d.layout.layoutBox),pn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=we(),this.targetWithTransforms=we()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ck(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):pn(this.target,this.layout.layoutBox),t1(this.target,this.targetDelta)):pn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const d=this.getClosestProjectingParent();d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Oi(this.relativeTargetOrigin,this.target,d.target),pn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Gt.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||$u(this.parent.latestValues)||n1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Me.timestamp&&(u=!1),u)return;const{layout:f,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||c))return;pn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,d=this.treeScale.y;xk(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:p}=a;if(!p){this.projectionTransform&&(this.projectionDelta=Vr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Vr(),this.projectionDeltaWithTransform=Vr());const x=this.projectionTransform;Fi(this.projectionDelta,this.layoutCorrected,p,this.latestValues),this.projectionTransform=sp(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==h||this.treeScale.y!==d)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p)),Gt.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},f={...this.latestValues},c=Vr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=we(),d=l?l.source:void 0,p=this.layout?this.layout.source:void 0,x=d!==p,C=this.getStack(),g=!C||C.members.length<=1,y=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(aP));this.animationProgress=0;let v;this.mixTargetDelta=w=>{const T=w/1e3;fp(c.x,s.x,T),fp(c.y,s.y,T),this.setTargetDelta(c),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Oi(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),sP(this.relativeTarget,this.relativeTargetOrigin,h,T),v&&zk(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=we()),pn(v,this.relativeTarget)),x&&(this.animationValues=f,Nk(f,u,this.latestValues,T,y,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(it(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ce.update(()=>{cs.hasAnimatedSinceResize=!0,this.currentAnimation=Gk(0,lp,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(lp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:f}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&f1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||we();const c=cn(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+c;const h=cn(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}pn(a,l),Nr(a,f),Fi(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new _k),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let f=0;f<ap.length;f++){const c="rotate"+ap[f];l[c]&&(u[c]=l[c],s.setStaticValue(c,0))}s.render();for(const f in u)s.setStaticValue(f,u[f]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return qk;const u={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=us(s==null?void 0:s.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none",u;const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=us(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!$t(this.latestValues)&&(x.transform=f?f({},""):"none",this.hasProjected=!1),x}const h=c.animationValues||c.latestValues;this.applyTransformsToTarget(),u.transform=sp(this.projectionDeltaWithTransform,this.treeScale,h),f&&(u.transform=f(h,u.transform));const{x:d,y:p}=this.projectionDelta;u.transformOrigin=`${d.origin*100}% ${p.origin*100}% 0`,c.animationValues?u.opacity=c===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=c===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const x in Ws){if(h[x]===void 0)continue;const{correct:C,applyTo:g}=Ws[x],y=u.transform==="none"?h[x]:C(h[x],c);if(g){const v=g.length;for(let w=0;w<v;w++)u[g[w]]=y}else u[x]=y}return this.options.layoutId&&(u.pointerEvents=c===this?us(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(up),this.root.sharedNodes.clear()}}}function Qk(e){e.updateLayout()}function Xk(e){var n;const t=((n=e.resumeFrom)===null||n===void 0?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;o==="size"?mn(c=>{const h=s?t.measuredBox[c]:t.layoutBox[c],d=cn(h);h.min=r[c].min,h.max=h.min+d}):f1(o,t.layoutBox,r)&&mn(c=>{const h=s?t.measuredBox[c]:t.layoutBox[c],d=cn(r[c]);h.max=h.min+d,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[c].max=e.relativeTarget[c].min+d)});const a=Vr();Fi(a,r,t.layoutBox);const l=Vr();s?Fi(l,e.applyTransform(i,!0),t.measuredBox):Fi(l,r,t.layoutBox);const u=!l1(a);let f=!1;if(!e.resumeFrom){const c=e.getClosestProjectingParent();if(c&&!c.resumeFrom){const{snapshot:h,layout:d}=c;if(h&&d){const p=we();Oi(p,t.layoutBox,h.layoutBox);const x=we();Oi(x,r,d.layoutBox),u1(p,x)||(f=!0),c.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=p,e.relativeParent=c)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:f})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Yk(e){Gt.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Zk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Jk(e){e.clearSnapshot()}function up(e){e.clearMeasurements()}function eP(e){e.isLayoutDirty=!1}function nP(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function cp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function tP(e){e.resolveTargetDelta()}function rP(e){e.calcProjection()}function iP(e){e.resetRotation()}function oP(e){e.removeLeadSnapshot()}function fp(e,n,t){e.translate=de(n.translate,0,t),e.scale=de(n.scale,1,t),e.origin=n.origin,e.originPoint=n.originPoint}function hp(e,n,t,r){e.min=de(n.min,t.min,r),e.max=de(n.max,t.max,r)}function sP(e,n,t,r){hp(e.x,n.x,t.x,r),hp(e.y,n.y,t.y,r)}function aP(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const lP={duration:.45,ease:[.4,0,.1,1]},dp=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),pp=dp("applewebkit/")&&!dp("chrome/")?Math.round:Se;function mp(e){e.min=pp(e.min),e.max=pp(e.max)}function uP(e){mp(e.x),mp(e.y)}function f1(e,n,t){return e==="position"||e==="preserve-aspect"&&!Uu(op(n),op(t),.2)}const cP=c1({attachResizeListener:(e,n)=>Xn(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Sl={current:void 0},h1=c1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Sl.current){const e=new cP({});e.mount(window),e.setOptions({layoutScroll:!0}),Sl.current=e}return Sl.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),fP={pan:{Feature:Ak},drag:{Feature:Tk,ProjectionNode:h1,MeasureLayout:o1}},hP=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function dP(e){const n=hP.exec(e);if(!n)return[,];const[,t,r]=n;return[t,r]}function qu(e,n,t=1){const[r,i]=dP(e);if(!r)return;const o=window.getComputedStyle(n).getPropertyValue(r);if(o){const s=o.trim();return K0(s)?parseFloat(s):s}else return ju(i)?qu(i,n,t+1):i}function pP(e,{...n},t){const r=e.current;if(!(r instanceof Element))return{target:n,transitionEnd:t};t&&(t={...t}),e.values.forEach(i=>{const o=i.get();if(!ju(o))return;const s=qu(o,r);s&&i.set(s)});for(const i in n){const o=n[i];if(!ju(o))continue;const s=qu(o,r);s&&(n[i]=s,t||(t={}),t[i]===void 0&&(t[i]=o))}return{target:n,transitionEnd:t}}const mP=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),d1=e=>mP.has(e),gP=e=>Object.keys(e).some(d1),gp=e=>e===fr||e===W,yp=(e,n)=>parseFloat(e.split(", ")[n]),vp=(e,n)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return yp(i[1],n);{const o=r.match(/^matrix\((.+)\)$/);return o?yp(o[1],e):0}},yP=new Set(["x","y","z"]),vP=xo.filter(e=>!yP.has(e));function xP(e){const n=[];return vP.forEach(t=>{const r=e.getValue(t);r!==void 0&&(n.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),n.length&&e.render(),n}const Zr={width:({x:e},{paddingLeft:n="0",paddingRight:t="0"})=>e.max-e.min-parseFloat(n)-parseFloat(t),height:({y:e},{paddingTop:n="0",paddingBottom:t="0"})=>e.max-e.min-parseFloat(n)-parseFloat(t),top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:vp(4,13),y:vp(5,14)};Zr.translateX=Zr.x;Zr.translateY=Zr.y;const SP=(e,n,t)=>{const r=n.measureViewportBox(),i=n.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&n.setStaticValue("display",e.display||"block"),t.forEach(u=>{a[u]=Zr[u](r,o)}),n.render();const l=n.measureViewportBox();return t.forEach(u=>{const f=n.getValue(u);f&&f.jump(a[u]),e[u]=Zr[u](l,o)}),e},CP=(e,n,t={},r={})=>{n={...n},r={...r};const i=Object.keys(n).filter(d1);let o=[],s=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let f=t[l],c=yi(f);const h=n[l];let d;if(Hs(h)){const p=h.length,x=h[0]===null?1:0;f=h[x],c=yi(f);for(let C=x;C<p&&h[C]!==null;C++)d?vf(yi(h[C])===d):d=yi(h[C])}else d=yi(h);if(c!==d)if(gp(c)&&gp(d)){const p=u.get();typeof p=="string"&&u.set(parseFloat(p)),typeof h=="string"?n[l]=parseFloat(h):Array.isArray(h)&&d===W&&(n[l]=h.map(parseFloat))}else c!=null&&c.transform&&(d!=null&&d.transform)&&(f===0||h===0)?f===0?u.set(d.transform(f)):n[l]=c.transform(h):(s||(o=xP(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:n[l],u.jump(h))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=SP(n,e,a);return o.length&&o.forEach(([f,c])=>{e.getValue(f).set(c)}),e.render(),wa&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:n,transitionEnd:r}};function wP(e,n,t,r){return gP(n)?CP(e,n,t,r):{target:n,transitionEnd:r}}const EP=(e,n,t,r)=>{const i=pP(e,n,r);return n=i.target,r=i.transitionEnd,wP(e,n,t,r)},Ku={current:null},p1={current:!1};function kP(){if(p1.current=!0,!!wa)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>Ku.current=e.matches;e.addListener(n),n()}else Ku.current=!1}function PP(e,n,t){const{willChange:r}=n;for(const i in n){const o=n[i],s=t[i];if(Je(o))e.addValue(i,o),Ks(r)&&r.add(i);else if(Je(s))e.addValue(i,Yr(o,{owner:e})),Ks(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,Yr(a!==void 0?a:o,{owner:e}))}}for(const i in t)n[i]===void 0&&e.removeValue(i);return n}const xp=new WeakMap,m1=Object.keys(uo),TP=m1.length,Sp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],AP=cf.length;class bP{constructor({parent:n,props:t,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ce.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=t.initial?{...a}:{},this.renderState=l,this.parent=n,this.props=t,this.presenceContext=r,this.depth=n?n.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=ka(t),this.isVariantNode=Jy(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(t,{});for(const c in f){const h=f[c];a[c]!==void 0&&Je(h)&&(h.set(a[c],!1),Ks(u)&&u.add(c))}}scrapeMotionValuesFromProps(n,t){return{}}mount(n){this.current=n,xp.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),p1.current||kP(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ku.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){xp.delete(this.current),this.projection&&this.projection.unmount(),it(this.notifyUpdate),it(this.render),this.valueSubscriptions.forEach(n=>n()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features)this.features[n].unmount();this.current=null}bindToMotionValue(n,t){const r=cr.has(n),i=t.on("change",s=>{this.latestValues[n]=s,this.props.onUpdate&&ce.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(n,()=>{i(),o()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}loadFeatures({children:n,...t},r,i,o){let s,a;for(let l=0;l<TP;l++){const u=m1[l],{isEnabled:f,Feature:c,ProjectionNode:h,MeasureLayout:d}=uo[u];h&&(s=h),f(t)&&(!this.features[u]&&c&&(this.features[u]=new c(this)),d&&(a=d))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:f,dragConstraints:c,layoutScroll:h,layoutRoot:d}=t;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!f||c&&Ir(c),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:h,layoutRoot:d})}return a}updateFeatures(){for(const n in this.features){const t=this.features[n];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):we()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,t){this.latestValues[n]=t}makeTargetAnimatable(n,t=!0){return this.makeTargetAnimatableFromInstance(n,this.props,t)}update(n,t){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Sp.length;r++){const i=Sp[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=n["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=PP(this,this.scrapeMotionValuesFromProps(n,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(n=!1){if(n)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const t={};for(let r=0;r<AP;r++){const i=cf[r],o=this.props[i];(lo(o)||o===!1)&&(t[i]=o)}return t}addVariantChild(n){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(n),()=>t.variantChildren.delete(n)}addValue(n,t){t!==this.values.get(n)&&(this.removeValue(n),this.bindToMotionValue(n,t)),this.values.set(n,t),this.latestValues[n]=t.get()}removeValue(n){this.values.delete(n);const t=this.valueSubscriptions.get(n);t&&(t(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,t){if(this.props.values&&this.props.values[n])return this.props.values[n];let r=this.values.get(n);return r===void 0&&t!==void 0&&(r=Yr(t,{owner:this}),this.addValue(n,r)),r}readValue(n){var t;return this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(t=this.getBaseTargetFromProps(this.props,n))!==null&&t!==void 0?t:this.readValueFromInstance(this.current,n,this.options)}setBaseTarget(n,t){this.baseTarget[n]=t}getBaseTarget(n){var t;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(t=yf(this.props,r))===null||t===void 0?void 0:t[n]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,n);return o!==void 0&&!Je(o)?o:this.initialValues[n]!==void 0&&i===void 0?void 0:this.baseTarget[n]}on(n,t){return this.events[n]||(this.events[n]=new Af),this.events[n].add(t)}notify(n,...t){this.events[n]&&this.events[n].notify(...t)}}class g1 extends bP{sortInstanceNodePosition(n,t){return n.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(n,t){return n.style?n.style[t]:void 0}removeValueFromRenderState(n,{vars:t,style:r}){delete t[n],delete r[n]}makeTargetAnimatableFromInstance({transition:n,transitionEnd:t,...r},{transformValues:i},o){let s=$E(r,n||{},this);if(i&&(t&&(t=i(t)),r&&(r=i(r)),s&&(s=i(s))),o){UE(this,r,s);const a=EP(this,r,s,t);t=a.transitionEnd,r=a.target}return{transition:n,transitionEnd:t,...r}}}function DP(e){return window.getComputedStyle(e)}class IP extends g1{constructor(){super(...arguments),this.type="html"}readValueFromInstance(n,t){if(cr.has(t)){const r=wf(t);return r&&r.default||0}else{const r=DP(n),i=(i0(t)?r.getPropertyValue(t):r[t])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(n,{transformPagePoint:t}){return r1(n,t)}build(n,t,r,i){hf(n,t,r,i.transformTemplate)}scrapeMotionValuesFromProps(n,t){return gf(n,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;Je(n)&&(this.childSubscription=n.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}renderInstance(n,t,r,i){c0(n,t,r,i)}}class RP extends g1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(n,t){return n[t]}readValueFromInstance(n,t){if(cr.has(t)){const r=wf(t);return r&&r.default||0}return t=f0.has(t)?t:lf(t),n.getAttribute(t)}measureInstanceViewportBox(){return we()}scrapeMotionValuesFromProps(n,t){return d0(n,t)}build(n,t,r,i){pf(n,t,r,this.isSVGTag,i.transformTemplate)}renderInstance(n,t,r,i){h0(n,t,r,i)}mount(n){this.isSVGTag=mf(n.tagName),super.mount(n)}}const VP=(e,n)=>ff(e)?new RP(n,{enableHardwareAcceleration:!1}):new IP(n,{enableHardwareAcceleration:!0}),NP={layout:{ProjectionNode:h1,MeasureLayout:o1}},MP={...sk,...T2,...fP,...NP},fs=Mw((e,n)=>d2(e,n,MP,VP)),Be={email:"goole910805@gmail.com",githubUsername:"and910805",linkedinUrl:"https://www.linkedin.com/in/guan-lin-zhuang-410a48291",linkedinHandle:"guan-lin-zhuang-410a48291",lineId:"0966632722",location:"Taiwan / Remote",intro:"如果你想聊資安筆記、網站、後端工具、自動化或專案合作，可以從 Email、GitHub 或 LinkedIn 找到我。"},hs={user:"eric",role:"Cybersecurity Practitioner / Automation Builder",summary:"喜歡把問題拆開、驗證、記錄，再做成可以重複使用的工具。網站目前收斂成資安筆記、專案紀錄與學習軌跡。",groups:["security","backend","linux","cloud","notes"]},LP=[["user",hs.user],["role",hs.role],["groups",hs.groups.join(", ")],["focus","web security, vulnerability management, automation, Linux"],["status","building a personal security knowledge base"]];function jP(){return m.jsx("section",{children:m.jsxs("div",{className:"grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start",children:[m.jsxs(fs.div,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.45},className:"space-y-6",children:[m.jsxs("div",{className:"terminal-label",children:[m.jsx("span",{className:"terminal-dot"}),"profile / active"]}),m.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start",children:[m.jsxs("div",{className:"space-y-5",children:[m.jsxs("h1",{className:"section-title max-w-4xl",children:["$ whoami",m.jsx("span",{className:"mt-3 block bg-[linear-gradient(90deg,#4ade80_0%,#67e8f9_55%,#effff5_100%)] bg-clip-text text-transparent",children:"Eric"})]}),m.jsx("p",{className:"max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg",children:hs.summary})]}),m.jsx(fs.div,{initial:{opacity:0,scale:.96,y:10},animate:{opacity:1,scale:1,y:[0,-6,0]},transition:{opacity:{duration:.45,delay:.18},scale:{duration:.45,delay:.18},y:{duration:4.8,repeat:1/0,ease:"easeInOut"}},className:"mx-auto w-full max-w-[220px] lg:mx-0 lg:justify-self-center",children:m.jsxs("div",{className:"terminal-outline relative overflow-hidden rounded-2xl border-[#4ade80]/25 bg-[linear-gradient(180deg,rgba(6,18,26,0.96),rgba(2,10,16,0.98))] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.35),0_0_30px_rgba(74,222,128,0.12)] before:pointer-events-none before:absolute before:inset-[1px] before:rounded-[calc(1rem-1px)] before:border before:border-[#67e8f9]/10 before:content-['']",children:[m.jsxs("div",{className:"mb-2 flex items-center justify-between px-1",children:[m.jsx("span",{className:"mono text-[0.58rem] uppercase tracking-[0.26em] text-[#86efac]",children:"cert badge"}),m.jsx("span",{className:"h-2 w-2 rounded-full bg-[#4ade80] shadow-[0_0_12px_rgba(74,222,128,0.9)]"})]}),m.jsx("img",{src:"/CEHMASTER_5FB43496785F.png",alt:"CEH certification",className:"relative z-[1] h-auto w-full rounded-xl object-contain shadow-[0_12px_28px_rgba(0,0,0,0.25)]"}),m.jsx("div",{className:"pointer-events-none absolute inset-x-6 bottom-0 h-10 rounded-full bg-[#4ade80]/20 blur-2xl"})]})})]}),m.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",children:[m.jsxs(Qr,{to:"/blog",className:"terminal-button terminal-button--primary",children:["查看資安筆記",m.jsx(hw,{className:"h-4 w-4"})]}),m.jsx(Qr,{to:"/projects",className:"terminal-button terminal-button--ghost",children:"查看專案"})]}),m.jsxs("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:[m.jsxs("div",{className:"terminal-outline rounded-2xl px-4 py-3",children:[m.jsx("div",{className:"mono text-[0.72rem] uppercase tracking-[0.22em] text-[#99f6e4]",children:"email"}),m.jsxs("a",{href:`mailto:${Be.email}`,className:"mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#bbf7d0]",children:[m.jsx(qy,{className:"h-4 w-4 text-[#4ade80]"}),Be.email]})]}),m.jsxs("div",{className:"terminal-outline rounded-2xl px-4 py-3",children:[m.jsx("div",{className:"mono text-[0.72rem] uppercase tracking-[0.22em] text-[#99f6e4]",children:"github"}),m.jsxs("a",{href:`https://github.com/${Be.githubUsername}`,target:"_blank",rel:"noopener noreferrer",className:"mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#bbf7d0]",children:[m.jsx(of,{className:"h-4 w-4 text-[#4ade80]"}),Be.githubUsername]})]}),m.jsxs("div",{className:"terminal-outline rounded-2xl px-4 py-3",children:[m.jsx("div",{className:"mono text-[0.72rem] uppercase tracking-[0.22em] text-[#99f6e4]",children:"linkedin"}),m.jsxs("a",{href:Be.linkedinUrl,target:"_blank",rel:"noopener noreferrer",className:"mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#bbf7d0]",children:[m.jsx(Gy,{className:"h-4 w-4 text-[#4ade80]"}),Be.linkedinHandle]})]})]})]}),m.jsx(fs.aside,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},className:"glass-card",children:m.jsxs("div",{className:"glass-card__inner",children:[m.jsxs("div",{className:"flex items-center gap-2 text-[#86efac]",children:[m.jsx(sf,{className:"h-4 w-4"}),m.jsx("span",{className:"mono text-[0.72rem] uppercase tracking-[0.22em]",children:"identity"})]}),m.jsx("div",{className:"space-y-1",children:LP.slice(0,4).map(([e,n])=>m.jsxs("div",{className:"terminal-row",children:[m.jsx("span",{className:"terminal-key",children:e}),m.jsx("span",{className:"terminal-value",children:n})]},e))})]})})]})})}function FP({project:e}){return m.jsx(fs.article,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.35},className:"glass-card h-full",children:m.jsxs("div",{className:"glass-card__inner h-full",children:[m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{className:"flex items-start justify-between gap-4",children:[m.jsxs("div",{children:[m.jsx("p",{className:"mono text-xs font-semibold uppercase tracking-[0.24em] text-[#99f6e4]/80",children:e.category}),m.jsx("h3",{className:"mt-2 text-xl font-semibold leading-snug text-white",children:e.title})]}),e.year&&m.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300",children:e.year})]}),m.jsx("p",{className:"text-sm leading-7 text-zinc-300",children:e.description})]}),m.jsx("ul",{className:"flex flex-wrap gap-2 text-xs text-zinc-200",children:e.tech.map(n=>m.jsx("li",{className:"rounded-full border border-white/10 bg-white/5 px-3 py-1.5",children:n},n))}),m.jsxs("div",{className:"mt-auto flex flex-wrap gap-3 pt-2",children:[e.github&&m.jsxs("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-full bg-[#4ade80] px-4 py-2 text-sm font-semibold text-[#052012] transition hover:bg-[#6ee7a0]",children:[m.jsx(of,{className:"h-4 w-4"}),"GitHub"]}),e.demo&&m.jsxs("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#4ade8066] hover:bg-[#4ade800d]",children:[m.jsx(Xr,{className:"h-4 w-4"}),"查看"]})]})]})})}function sr({title:e,subtitle:n,children:t,align:r="left"}){const i=r==="center";return m.jsxs("section",{className:"mb-16 sm:mb-20",children:[m.jsxs("header",{className:i?"mx-auto mb-8 max-w-3xl text-center":"mb-8 max-w-3xl",children:[n&&m.jsx("div",{className:i?"mb-4 flex justify-center":"mb-4",children:m.jsxs("span",{className:"terminal-label",children:[m.jsx("span",{className:"terminal-dot"}),n]})}),m.jsx("h2",{className:"section-title",children:e})]}),t]})}const OP=[{title:"APT29 ATT&CK Simulation",slug:"apt29-attack-simulation",category:"Red Team / ATT&CK",year:"2023",description:"依照 MITRE ATT&CK 技術鏈整理 APT29 模擬流程，包含 Pupy、PoshC2、WebDAV 與 ELK/Kibana 偵測紀錄。",tech:["MITRE ATT&CK","Pupy","PoshC2","Kibana","Red Team"],github:"https://github.com/and910805/APT29",demo:null},{title:"RAT 2.0 Security Research Demo",slug:"rat-2-security-research",category:"Malware Research",year:"2024",description:"Python RAT 研究展示，聚焦 C2 連線、螢幕擷取、鍵盤監控與防禦視角，用於理解惡意程式行為。",tech:["Python","Socket","Windows","mss","pynput"],github:"https://github.com/and910805/Rat2.0",demo:null},{title:"Nessus Vulnerability Dashboard",slug:"nessus-vulnerability-dashboard",category:"Vulnerability Management",year:"2025",description:"把 Nessus 弱掃結果整理成可視化儀表板，協助追蹤風險等級、修補狀態與資產弱點分布。",tech:["Python","Streamlit","Plotly","SQLite","Nessus"],github:"https://github.com/and910805/Nessus-Vulnerability-Dashboard",demo:null},{title:"CEH LINE Quiz Bot",slug:"ceh-line-quiz-bot",category:"Learning Automation",year:"2025",description:"串接 Google Sheet 與 LINE API 的題庫機器人，用聊天方式練習 CEH 題目與資安觀念。",tech:["Google Apps Script","LINE API","Automation"],github:"https://github.com/and910805/CEH-robot",demo:null},{title:"Shipping Photo Manager",slug:"shipping-photo-manager",category:"Internal Tooling",year:"2024",description:"協助整理出貨照片與資料流程的小工具，降低人工命名、上傳與查找的摩擦。",tech:["Flask","Tkinter","REST API","Python"],github:"https://github.com/and910805/image-upload",demo:null},{title:"TaskGo",slug:"taskgo",category:"Productivity",year:"2024",description:"任務管理練習專案，結合 React、Flask、SQLite 與 JWT，實作基本登入與任務 CRUD。",tech:["React","Flask","SQLite","JWT","Tailwind CSS"],github:null,demo:null},{title:"Wedding Site",slug:"wedding-site",category:"Frontend Experience",year:"2024",description:"婚禮網站前端作品，使用 React、Vite 與 Framer Motion 做出流暢的頁面互動。",tech:["React","Vite","Framer Motion","Tailwind CSS"],github:"https://github.com/and910805/wedding-front",demo:"https://wedding-front.kuanlin.pro/"},{title:"Binary Search Game",slug:"binary-search-game",category:"Teaching / Game UX",year:"2024",description:"用遊戲方式解釋二分搜尋，把抽象演算法變成可以互動理解的學習流程。",tech:["React","Game UX","Teaching"],github:"https://github.com/and910805/Binary-Search-game",demo:"https://binary-search-game.kuanlin.pro/"},{title:"FarmGame",slug:"farmgame",category:"Game Prototype",year:"2024",description:"農場遊戲原型，練習 React 狀態管理、資源循環與輕量互動設計。",tech:["React","Zustand","Game Prototype"],github:"https://github.com/and910805/farmgame",demo:"https://farmgame.kuanlin.pro/"}];function zP(){return m.jsxs(m.Fragment,{children:[m.jsx(sr,{subtitle:"Projects",title:"$ ls ~/projects",children:m.jsx("div",{className:"max-w-4xl space-y-4 text-base leading-8 text-zinc-300",children:m.jsx("p",{children:"這裡整理資安研究、弱掃分析、自動化工具與前端作品。每個專案都保留重點技術、年份與連結，方便快速瀏覽。"})})}),m.jsx("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-3",children:OP.map(e=>m.jsx(FP,{project:e},e.title))})]})}const _P=["CEH / CEH Practical / CEH Master","Web security and defensive thinking","Vulnerability management","Python automation","React / Vite / Tailwind CSS","Flask / API / SQLite","Linux deployment and troubleshooting","Markdown knowledge-base writing"];function BP(){return m.jsxs(m.Fragment,{children:[m.jsx(sr,{subtitle:"About",title:"$ man eric",children:m.jsxs("div",{className:"max-w-4xl space-y-5 text-base leading-8 text-zinc-300",children:[m.jsx("p",{children:"我主要關注資安、後端工具、自動化與技術筆記整理。比起把作品做得很花，我更在意問題能不能被看懂、被驗證、被維護。"}),m.jsx("p",{children:"目前網站定位是個人知識庫與作品集：資安筆記放學習紀錄，專案放實作經驗，證照頁則整理已完成的能力驗證。"}),m.jsx("p",{children:"做事習慣是先觀察現況，再重現問題、修補、記錄。這也是這個網站想呈現的風格：像 terminal，但不要讓 terminal 搶走內容。"})]})}),m.jsx(sr,{subtitle:"Stack",title:"$ cat ~/skills.txt",children:m.jsx("ul",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-4",children:_P.map(e=>m.jsx("li",{className:"rounded-2xl border border-[#4ade8024] bg-[#4ade8008] px-4 py-4 text-sm leading-7 text-zinc-200",children:e},e))})})]})}const WP=[{icon:qy,label:"Email",value:Be.email,href:`mailto:${Be.email}`},{icon:of,label:"GitHub",value:Be.githubUsername,href:`https://github.com/${Be.githubUsername}`},{icon:Gy,label:"LinkedIn",value:Be.linkedinHandle,href:Be.linkedinUrl},{icon:Ky,label:"LINE",value:Be.lineId,href:null},{icon:mw,label:"Location",value:Be.location,href:null}];function UP(){return m.jsxs(m.Fragment,{children:[m.jsx(sr,{subtitle:"Contact",title:"$ contact",children:m.jsx("div",{className:"max-w-3xl space-y-4 text-base leading-8 text-zinc-300",children:m.jsx("p",{children:Be.intro})})}),m.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-5",children:WP.map(e=>{const n=m.jsx("div",{className:"glass-card h-full",children:m.jsxs("div",{className:"glass-card__inner",children:[m.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4ade8033] bg-[#4ade8012] text-[#86efac]",children:m.jsx(e.icon,{className:"h-5 w-5"})}),m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-sm font-semibold text-white",children:e.label}),m.jsx("p",{className:"break-all text-sm leading-7 text-zinc-300",children:e.value})]})]})});return e.href?m.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:n},e.label):m.jsx("div",{children:n},e.label)})})]})}const Cp=[{title:"Certified Ethical Hacker (CEH)",shortTitle:"CEH",issuer:"EC-Council",year:"2026",summary:"建立滲透測試、攻擊技術、弱點分析與防禦思維的基礎能力。",type:"PDF",href:"/certifications/ceh-certificate.pdf"},{title:"CEH Practical",shortTitle:"CEHP",issuer:"EC-Council",year:"2026",summary:"偏實作導向的測驗，涵蓋掃描、利用、枚舉、Web 與系統安全操作。",type:"PDF",href:"/certifications/ceh-practical-certificate.pdf"},{title:"CEH Master",shortTitle:"CEH Master",issuer:"EC-Council",year:"2026",summary:"結合 CEH 與 CEH Practical 的完整認證，代表理論與實作能力都完成驗證。",type:"Image",href:"/certifications/ceh-master-certificate.png",image:"/certifications/ceh-master-certificate.png"},{title:"iThome 2025 鐵人賽",shortTitle:"iThome",issuer:"iThome",year:"2025",summary:"完成 30 天資安文章系列，已整理進網站的 2025 iThome 鐵人賽分類。",type:"PDF",href:"/certifications/ithome-ironman-2025.pdf"}];function HP(){const e=Cp.filter(t=>["CEH","CEHP","CEH Master"].includes(t.shortTitle)),n=Cp.filter(t=>!e.includes(t));return m.jsxs(m.Fragment,{children:[m.jsx(sr,{subtitle:"Certifications",title:"$ certctl list",children:m.jsx("div",{className:"max-w-4xl space-y-4 text-base leading-8 text-zinc-300",children:m.jsx("p",{children:"這裡整理目前已完成的資安證照與寫作紀錄。證照代表能力驗證，文章則是把學習過程留下來，方便之後回查。"})})}),m.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]",children:[m.jsx("div",{className:"grid gap-5",children:e.map(t=>m.jsx("article",{className:"glass-card",children:m.jsxs("div",{className:"glass-card__inner",children:[m.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[m.jsxs("div",{children:[m.jsx("p",{className:"mono text-xs uppercase tracking-[0.22em] text-[#7dd3fc]",children:t.issuer}),m.jsx("h2",{className:"mt-2 text-2xl font-semibold text-white",children:t.title})]}),m.jsx("span",{className:"rounded-full border border-[#4ade8024] bg-[#4ade8008] px-3 py-1 text-xs font-semibold text-[#bbf7d0]",children:t.type})]}),m.jsx("p",{className:"text-sm leading-7 text-zinc-300",children:t.summary}),m.jsxs("div",{className:"flex flex-wrap gap-3",children:[m.jsxs("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"terminal-button terminal-button--primary",children:[m.jsx(Xr,{className:"h-4 w-4"}),"開啟證明"]}),m.jsxs("a",{href:t.href,download:!0,className:"terminal-button terminal-button--ghost",children:[m.jsx($y,{className:"h-4 w-4"}),"下載檔案"]})]})]})},t.title))}),m.jsxs("aside",{className:"space-y-5",children:[m.jsx("div",{className:"glass-card",children:m.jsxs("div",{className:"glass-card__inner",children:[m.jsx("p",{className:"mono text-xs uppercase tracking-[0.22em] text-[#7dd3fc]",children:"Preview"}),m.jsx("h2",{className:"text-xl font-semibold text-white",children:"CEH Master 證明預覽"}),m.jsx("a",{href:"/certifications/ceh-master-certificate.png",target:"_blank",rel:"noopener noreferrer",children:m.jsx("img",{src:"/certifications/ceh-master-certificate.png",alt:"CEH Master certificate preview",className:"w-full rounded-2xl border border-[#4ade8020] object-cover"})})]})}),m.jsx("div",{className:"glass-card",children:m.jsxs("div",{className:"glass-card__inner",children:[m.jsx("p",{className:"mono text-xs uppercase tracking-[0.22em] text-[#7dd3fc]",children:"Additional Proof"}),m.jsx("h2",{className:"text-xl font-semibold text-white",children:"其他紀錄"}),m.jsx("ul",{className:"space-y-3",children:n.map(t=>m.jsx("li",{className:"rounded-2xl border border-[#4ade8020] bg-[#4ade8006] p-4",children:m.jsxs("div",{className:"flex items-start gap-3",children:[m.jsx("div",{className:"mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#4ade8020] bg-white/5 text-zinc-200",children:m.jsx(rf,{className:"h-4 w-4"})}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs("div",{children:[m.jsx("p",{className:"font-semibold text-white",children:t.title}),m.jsx("p",{className:"text-sm leading-6 text-zinc-400",children:t.summary})]}),m.jsxs("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-sm font-semibold text-[#7dd3fc] transition hover:text-white",children:[m.jsx(Xr,{className:"h-4 w-4"}),"開啟紀錄"]})]})]})},t.title))})]})})]})]})]})}const wp=[{title:"CEHv13 筆記",platform:"HackMD",category:"證照筆記",description:"整理 CEH v13 的重點架構、觀念與考試準備內容，適合快速複習與建立整體學習地圖。",href:"https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/Sk3bRkqAkl"},{title:"CEHP 心得",platform:"HackMD",category:"證照心得",description:"聚焦 CEH Practical 的準備方向、實作感受與實際作答經驗，強調實戰型考試的思維差異。",href:"https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/H1Jt85DiZg"},{title:"CEHV13 考試心得",platform:"HackMD",category:"考試心得",description:"記錄 CEH v13 考試歷程與準備重點，幫助讀者理解考題面向與應試節奏。",href:"https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/Bk4l2UoLxl"},{title:"picoCTF 筆記",platform:"HackMD",category:"CTF 筆記",description:"整理 picoCTF 解題過程與技巧，適合資安入門與培養題感時參考。",href:"https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/rJqLG8Qdj"},{title:"打雜工程師的資安修煉路",platform:"iThome",category:"鐵人賽系列",description:"iThome 鐵人賽系列文章，完整呈現你持續輸出資安學習、實作與整理能力的內容軌跡。",href:"https://ithelp.ithome.com.tw/users/20171891/ironman/8352"}],$P=`---
title: CEH v13 筆記（持續更新中）

---





[TOC]

# CEH v13 筆記（無限停更中:D）
## 學習資源
https://ceh.cagy.org/

https://hackmd.io/@7ZcmfE2ETz-ntel2Ma6uTg/rJvhYym62

[freecram](https://www.freecram.com/ECCouncil-certification/312-50v13-exam-questions.html#) 可以免費看，但下載下來要錢，一次只能看五題就要輸入驗證碼


## 01 - Introduction to Ethical Hacking

### 常見資安法規（考試至少會出一題）
- **ISO/IEC 27001**：資訊安全管理系統標準
- **PCI DSS**：支付卡產業資料安全標準（常考！）
- **HIPAA**：美國醫療資訊保護法案
- **SOX**：美國薩班斯-奧克斯利法案，針對企業財報誠信
- **FISMA**：美國聯邦資訊安全管理法
- **GDPR**：歐盟通用資料保護規則
- **DPA**：英國資料保護法案

---
### 道德駭客是什麼？
- 經過授權進行系統弱點測試的駭客
- 模擬攻擊以強化系統防禦

### 為什麼需要道德駭客？
- 減少系統被惡意攻擊的風險
- 提升資訊安全意識與防護能力

### Ethical Hacking 的範圍與限制
- 僅限授權範圍內的測試
- 不得造成實質損害或中斷服務

### 技術與非技術能力
- 技術：網路、系統、程式、滲透測試
- 非技術：溝通、邏輯思維、法律意識

### AI-Driven Ethical Hacking
- AI 輔助漏洞掃描、模式分析
- 自動化報告與弱點偵測

### AI 如何幫助道德駭客？
- 減少人力負擔、快速分析大量資料
- 偵測複雜模式與新型攻擊手法

### AI 是否會取代道德駭客？
- AI 是輔助，不具備人類判斷與創造力
- 結合人機合作才能達到最佳成效

### ChatGPT 相關工具
- 用於生成測試腳本、攻擊模擬
- 撰寫報告與訓練材料

---

## 02 - Footprinting and Reconnaissance

### 情資蒐集分為：
- 主動（Active）：與目標互動，如掃描、Ping、Traceroute
- 被動（Passive）：不與目標互動，如公開資料、DNS 查詢

### 被動情蒐工具：
- GHDB（Google Hacking Database）
- Shodan
- Netcraft、DNSDumpster、Dig、Sublist3r
- Archive.org、Google Alert、EmailTrackerPro

### 情蒐框架與工具：
- Maltego
- Recon-ng
- OSINT Framework
- WinHTTrack

### MITRE ATT&CK Framework
- 紀錄攻擊者的行為、技術與手法（TTPs）
- 依照不同階段分類（Initial Access、Execution、Persistence 等）

### Diamond Model of Intrusion Analysis
- 四個要素：Adversary（攻擊者）、Infrastructure（基礎設施）、Capability（能力）、Victim（受害者）
- 強調事件之間的關聯性與關鍵資源鏈結

### Information Assurance（IA）
- 保證資訊的 CIAAN：Confidentiality、Integrity、Availability、Authentication、Non-repudiation

### Defense in Depth（縱深防禦）
- 多層防禦架構：防火牆、入侵偵測、身分驗證、加密等層層保護

### What is Risk？
- 威脅 × 脆弱性 × 資產價值 = 風險

### Risk Management
- 識別風險、評估風險、緩解風險、監控風險

### Cyber Threat Intelligence（CTI）
- **必考重點！**
- 分類層級：
  - Strategic（戰略層級）：政府政策、長期策略
  - Tactical（戰術層級）：攻擊手法、威脅趨勢
  - Operational（作戰層級）：攻擊計畫、特定目標
  - Technical（技術層級）：IP、Domain、Hash、漏洞
- 時效性：
  - 長期：Strategic、Tactical
  - 短期：Operational、Technical
- 資訊層級分類：
  - High Level（給管理者）
  - Low Level（給技術人員）

---

## 03 - Scanning Networks

### 網路掃描基本概念

網路掃描（Scanning）是駭客入侵前的重要階段，目的是識別目標主機的活動狀態、開放的服務埠、運行的作業系統與可能存在的漏洞。這個階段又可細分為：

- **Port Scanning（埠掃描）**：檢查目標主機哪些 TCP 或 UDP 埠是開啟的。
- **Network Scanning（網路掃描）**：識別活躍主機與其 IP 位址。
- **Vulnerability Scanning（漏洞掃描）**：檢查目標系統是否存在已知漏洞。

### 常見通訊協定

這些協定在掃描過程中經常使用，必須熟悉其用途與特性：

- **TCP（Transmission Control Protocol）**：連線導向、可靠傳輸。
- **UDP（User Datagram Protocol）**：無連線、快速但不保證送達。
- **ICMP**：用於錯誤訊息回報與網路診斷，如 ping、traceroute。
- **ARP**：解析 IP 位址為 MAC 位址。
- **DNS**：網域名稱解析。
- **DHCP**：自動配置 IP 位址。
- **SSDP / UPnP**：設備發現協定。

### TCP 封包標記（Flags）

| Flag | 說明 |
|------|------|
| SYN  | 建立連線請求 |
| ACK  | 對封包做確認回應 |
| FIN  | 結束連線 |
| RST  | 強制中斷連線 |
| PSH  | 要求立即傳送資料 |
| URG  | 緊急資料指示 |

### TCP 三次握手（Three-way Handshake）

| 客戶端 | → | 伺服器 |
|--------|---|--------|
| SYN    |   |        |
|        | ← | SYN+ACK |
| ACK    | → |        |

### OSI 七層模型 vs TCP/IP 模型

#### OSI 模型

| 層級 | 名稱           | 協定範例           |
|------|----------------|--------------------|
| 7    | 應用層         | HTTP, SNMP         |
| 6    | 表示層         | SSL, MIME, ASCII   |
| 5    | 會話層         | NetBIOS, RPC       |
| 4    | 傳輸層         | TCP, UDP           |
| 3    | 網路層         | IP, ICMP           |
| 2    | 資料鏈結層     | ARP, MAC           |
| 1    | 實體層         | Ethernet, Wi-Fi    |

#### TCP/IP 模型

| 層級 | 名稱           | 協定範例           |
|------|----------------|--------------------|
| 4    | 應用層         | HTTP, DNS          |
| 3    | 傳輸層         | TCP, UDP           |
| 2    | 網際層         | IP, ICMP           |
| 1    | 網路存取層     | ARP, MAC           |

### 掃描技術（Nmap 範例）
### Nmap 指令記憶整理 （超實用版）

#### ① 存活探測（Ping Scan 類）

| 指令 | 代表意思 | 怎麼背？ |
|:---|:---|:---|
| \`-sn\` | Ping Scan（不掃 port，只確認活著） | **s = skip port scan** |
| \`-PS\` | TCP SYN Ping | **S = SYN** |
| \`-PA\` | TCP ACK Ping | **A = ACK** |
| \`-PU\` | UDP Ping | **U = UDP** |
| \`-PE\` | ICMP Echo Request | **E = Echo（正常 ICMP Ping）** |
| \`-PP\` | ICMP Timestamp Request | **P = Ping Timestamp** |
| \`-PM\` | ICMP Address Mask Request | **M = Mask** |
| \`-PO\` | IP Protocol Ping | **O = prOtocol** |

✅ **背法：** \`P + 英文字母\` 就是「各種 Ping 類型」

---

#### ② Port 掃描類型（掃描手法）

| 指令 | 代表意思 | 怎麼背？ |
|:---|:---|:---|
| \`-sS\` | SYN Scan（半開掃描，Stealth Scan）| **sS = stealth SYN** |
| \`-sT\` | TCP Connect 掃描（正常 TCP 連線） | **sT = standard TCP** |
| \`-sU\` | UDP Scan | **sU = UDP** |
| \`-sA\` | ACK Scan | **sA = ACK** |
| \`-sN\` | Null Scan（TCP 標誌全關） | **sN = Null (nothing)** |
| \`-sX\` | Xmas Scan（TCP 特定標誌開啟） | **sX = Xmas tree lights** |
| \`-sF\` | FIN Scan（只開 FIN flag） | **sF = FIN** |
| \`-sO\` | IP Protocol 掃描 | **sO = prOtocol** |

✅ **背法：** \`-s\` 開頭的就是「掃 port 手法」，\`s = scan\`

---

### ③ 版本偵測 / 作業系統偵測 / Service 偵測

| 指令 | 代表意思 | 怎麼背？ |
|:---|:---|:---|
| \`-sV\` | 服務版本偵測（Version detection） | **sV = Service Version** |
| \`-O\` | 作業系統偵測（OS detection） | **O = OS** |
| \`-A\` | 強化掃描（包含 OS、版本、腳本、traceroute）| **A = All-in-One** |

✅ **背法：**
- \`-sV\` → 查服務版本  
- \`-O\` → 查作業系統  
- \`-A\` → 一次來全部

---

#### ④ 特別模式 / 其他小技巧

| 指令 | 代表意思 | 怎麼背？ |
|:---|:---|:---|
| \`-F\` | Fast mode（快速掃描，只掃常見 ports） | **F = Fast** |
| \`-T0\` ~ \`-T5\` | Timing Template（調整速度） | **T = Timing** |
| \`-p\` | 指定 Port | **p = port** |
| \`--top-ports 100\` | 掃前 100 個最熱門的 ports | **top-ports = 最夯 ports** |
| \`-v\` | Verbose 模式（詳細輸出） | **v = verbose** |
| \`-vv\` | 更詳細模式 | **vv = very verbose** |
| \`-d\` | Debug 模式 | **d = debug** |

---

### 🔥 整體背誦小技巧

| 流程 | 記法 |
|:---|:---|
| 確認活著？ | \`-sn + P系列（PS, PA, PU, PE...）\` |
| 掃 port？ | \`-sS\`, \`-sT\`, \`-sU\`, \`-sA\`... |
| 查服務版本？ | \`-sV\` |
| 查 OS？ | \`-O\` |
| 全部來？ | \`-A\` |
| 要快？ | \`-F\`, \`-T4\` |

---

### 📦 常見實戰組合（直接拿去抄用）

#### 找存活主機（不掃 port）

\`\`\`bash
nmap -sn -PS22,80,443 192.168.1.0/24

# 1. TCP Connect 掃描（完整連線）
- 使用三次握手完成連線。
- 不需 root 權限。
- 容易被 IDS 偵測。
\`\`\`bash
nmap -sT target.com
\`\`\`


| 作業系統     | TTL  | TCP Window Size |
|--------------|------|-----------------|
| Linux        | 64   | 5840            |
| Windows XP   | 128  | 65535           |
| Windows 2008 | 128  | 8192            |
| FreeBSD      | 64   | 5840            |



### 封包規避技巧（IDS/IPS）

#### - 封包分段（Fragmentation）
\`\`\`bash
nmap -f target.com
\`\`\`

#### - 改變封包長度
\`\`\`bash
nmap --data-length 50 target.com
\`\`\`

#### - 偽裝來源埠（避開防火牆）
\`\`\`bash
nmap --source-port 53 target.com
\`\`\`

#### - 偽造來源 IP（Decoy）
\`\`\`bash
nmap -D 192.168.1.5,192.168.1.6 target.com
\`\`\`

### Proxy & 匿名掃描

- **代理伺服器**：隱藏攻擊者真實 IP。
- **Proxy chaining**：多層代理鏈（如 Tor）。

### 掃描偵測工具

- **Wireshark**：封包擷取分析。
- **Snort**：入侵偵測系統。
- **Nmap**：主要掃描工具。
- **Hping**：自訂封包發送。

---


## 04 - Enumeration（列舉）

> **NOTE**: This may cross legal boundaries, you must have proper permission to perform these actions.

Enumeration 是主動與目標系統互動，取得帳號、資源、服務與設定等資訊的過程。它是滲透測試中的關鍵階段，能揭露潛在攻擊面。下列為重點項目：


---

### 🧩 常見可枚舉資訊
- 路由資訊
- SNMP 裝置資訊
- DNS 記錄與區域傳輸
- 機器名稱 / 網域名稱
- 使用者與群組名稱
- 應用程式與服務橫幅（Banner）
- 網路共享資源

### 📧 Email 枚舉
- 可萃取帳號、網域、通訊清單等資訊
- 常見指令：\`VRFY\`、\`EXPN\`、\`RCPT TO\`

### 🛡 預設密碼風險
- 有些系統未更改預設帳密，攻擊者可利用公知帳號登入系統

---

### 🔒 Active Directory（AD）& LDAP 枚舉
- 中央控管使用者、電腦與群組
- 可透過暴力破解或 LDAP 查詢列出資訊
- **常用 Port**：TCP/UDP \`389\`（LDAP）、\`636\`（LDAPS）

#### 可枚舉資訊：
- 使用者名稱、位址
- 憑證與權限資訊
- 群組結構與角色

#### 工具與指令：
\`\`\`bash
ldapsearch -x -h <IP> -b "DC=domain,DC=com"
nmap -p389 --script ldap* <IP>
enum4linux -u user -p pass <IP>
\`\`\`

---

### 🖥 NetBIOS / SMB（Windows 弱點常見）
- **Port**：137/UDP、138/UDP、139/TCP、445/TCP
- NetBIOS 名稱最長 15 字元，第 16 字元為服務尾碼

#### 常用工具：
\`\`\`bash
nbtstat -A <IP>
nmap -sU -p137 <IP>
enum4linux -U -P -S <IP>
smbclient //IP/share -U user
smbmap -H <IP>
rpcclient -U "" <IP>
\`\`\`

---

### 🌐 DNS 枚舉
[DNS Hacking 之 Subdomain Enumeration 的技巧與自動化挖掘](https://tech-blog.cymetrics.io/posts/crystal/dns-hacking-3/)
- **Port**：53/UDP
- 技巧：Zone Transfer、Snooping、DNSSEC 遍歷

#### 工具與指令：
\`\`\`bash
dig axfr @<ns-ip> <domain>
ldns-walk <domain>
amass enum -d <domain>
\`\`\`

---

### 📡 SNMP（簡易網管協定）
- **Port**：161/UDP、162/UDP (Trap)
- 協定版本：v1 / v2（無加密）/ v3（支援加密與驗證）
- 預設 Community String：\`public\`、\`private\`

#### 組成要素：
1. **Manager**：顯示與管理收集的資訊
2. **Agent**：裝置上執行、提供資料
3. **MIB（資訊庫）**：結構化儲存裝置資訊（Scaler / Tabular）

#### 工具與指令：
\`\`\`bash
snmpwalk -v2c -c public <IP>
snmp-check <IP>
onesixtyone -c dict.txt <IP>
snmpbulkwalk -v2c -c public <IP>
\`\`\`

---

### 📬 SMTP 枚舉
- **Port**：25/TCP
- 可使用 \`VRFY\`、\`EXPN\`、\`RCPT TO\` 測試帳號存在性

#### 工具：
\`\`\`bash
nmap --script smtp-enum-users -p25 <IP>
smtp-user-enum -M VRFY -U users.txt -t <IP>
swaks --to user@domain.com --server <IP>
\`\`\`

---

### ⏰ NTP（網路時間協定）
- **Port**：123/UDP
- 常見指令：
\`\`\`bash
ntpq -p <IP>
ntpdate -q <IP>
\`\`\`

---

### 📁 NFS / RPC
- **Port**：2049（NFS）、135（RPC）
- 列舉與掛載共享目錄

#### 工具：
\`\`\`bash
rpcinfo -p <IP>
showmount -e <IP>
mount -t nfs <IP>:<share> /mnt
nmap --script nfs-* <IP>
\`\`\`

---

### 🔐 IPsec 枚舉
- 工具：
\`\`\`bash
ike-scan <IP>
psk-crack -f wordlist.txt <capture.pcap>
\`\`\`

---

### ☎️ VoIP（SIP）
- 工具：
\`\`\`bash
svmap -p5060 <IP>
\`\`\`

---

### 📌 案例：尋找 Microsoft DC-FQDN
\`\`\`bash
nmap -p389 <IP-range>
nmap -p445,389,3268 -A <IP>

nslookup ip(Dc server)
dig -x ip
\`\`\`

---

### 🛠 其他工具
- **Global Network Inventory**：企業級資產盤點工具

---

## 05 - Vulnerability Analysis（漏洞分析）

漏洞分析是發掘系統、應用程式、服務中已知弱點的過程，通常是進入實際攻擊前的重要階段。可利用漏洞資料庫與自動化工具進行評估與風險確認。

---

### 📚 常見漏洞資料庫

| 資料庫名稱 | 說明 |
|------------|------|
| **NVD** (National Vulnerability Database) | 提供 CVE、CVSS 評分與修補建議 |
| **Exploit-DB** | 含大量真實可用 exploit 程式碼（包含 metasploit 模組） |
| **CWE** (Common Weakness Enumeration) | 軟體常見弱點分類，如邏輯錯誤、權限錯誤等 |
| **MSRC** | 微軟官方安全通報，彙整 Windows / Azure 等漏洞 |

---

### 🔍 常見漏洞掃描工具

| 工具名稱 | 說明 |
|----------|------|
| **OpenVAS** | 開源掃描器，支援報表與弱點評估（需 GVM） |
| **Nessus** | 商業工具，簽名庫完整、支援合規性報告 |
| **Nikto** | 快速找出 Web 弱點與錯誤設定 |
| **Nmap** vuln script | \`nmap --script vuln <IP>\` 自動執行服務弱點偵測腳本 |

---

### 🔁 漏洞分析流程

1. **資產盤點**：確認掃描範圍與服務類型（OS、Web、DB...）
2. **漏洞查詢**：依照版本搜尋 CVE、CWE 編號
3. **自動掃描**：透過工具產生詳細報告
4. **可用性驗證**：比對 Exploit-DB 或 Metasploit 模組
5. **風險評估**：依 CVSS 分數回報管理單位





## 06 - System Hacking（系統侵入）

系統駭侵是指取得對目標系統的未授權存取權限後，進行密碼破解、提權、資料隱匿、持久性植入、清除痕跡等活動。本章核心是「入侵－掌控－維持－隱匿」。

---
### 方法論

* Cracking Password
* Escalating Privileges
* Executing Applications
* Hiding Files
* Covering Tracks



### 🎯 系統入侵技術
#### 密碼攻擊類型補充

| 攻擊類型 | 說明 |
| -------- | -------- |
| 非電子攻擊     | 肩窺/社交工程/垃圾桶潛水     |
|主動線上攻擊|字典攻擊/暴力破解/雜湊注入|
|被動線上攻擊|封包嗅探/MITM/重放攻擊|
|離線攻擊|彩虹表/Distributed Network Attack|

#### 作業系統密碼檔案位置

* **Windows:** C:\\windows\\system32\\config\\SAM
* **Linux:** /etc/shadow
* **Domain Controller:** NTDS.dit
#### 密碼擷取與破解工具

| 工具名稱       | 說明 |
|----------------|------|
| **Pwdump7**     | 匯出 Windows SAM 檔中的雜湊密碼 |
| **Mimikatz**    | 取得明文密碼、hash、Kerberos ticket |
| **DSInternals** | 針對 Active Directory 進行雜湊導出 |
| **Hashcat**     | GPU 加速密碼破解工具，支援多種雜湊格式 |
| **PyCrack**     | Python 編寫的雜湊破解工具 |
| **John the Ripper (John)** | 傳統 CLI 破解工具，支援字典攻擊與彩虹表 |

#### 微軟認證協議比較
| 協議 | 特性 |
| -------- | -------- |
| LM     | 已淘汰，安全性低     |
|NTLMv1|使用 DES 易受破解|
|NTLMv2|改進安全性，仍存在 PTH 風險|
|Kerberos|現行標準，依賴 TGT/TGS 票證|

####  Kerberos 認證流程圖解
![deepseek_mermaid_20250421_f1979a](https://hackmd.io/_uploads/BJLe2UXkgx.png)


#### 字典檔攻擊技巧

- 使用 \`cewl\` 工具爬網站關鍵字製作字典檔
- 搭配 \`ncrack\` 工具對登入介面爆破

---

### 🧠 PTH（Pass The Hash）攻擊

> PTH 攻擊是利用已知的 NTLM 雜湊來模擬合法使用者登入，而不需知道明文密碼。

- 雜湊雖不可逆，但 Windows 認證系統允許使用 hash 來完成身份驗證
- 攻擊工具：\`Mimikatz\` + \`psexec\`, \`Impacket\` 模組

---

### 🔍 駭侵與橫向移動工具

- **Responder**：監聽 SMB/LLMNR 併誘導目標送出雜湊，配合 \`John\` 破解
- **Metasploit (msfconsole)**：
  - \`exploit\`, \`payload\`, \`post\` 模組
  - 支援 PTH、提權、Dump hash、自動化攻擊
  - 常用模組：
    - \`post/windows/gather/hashdump\`
    - \`post/windows/manage/enable_rdp\`
- **BloodHound**：圖形化 AD 權限分析工具，找出攻擊路徑
- **Docusnap**：企業用 IT 架構分析與網域視覺化工具
- **Powerview**：Windows AD 權限探索工具

---

### 🔼 權限提升技術（Privilege Escalation）

#### 常見提權方式

| 技術名稱            | 說明 |
|---------------------|------|
| **DLL Hijacking**   | 將惡意 DLL 命名與合法相同並置於目標目錄，程式會誤載入 |
| **Dylib Injection** | macOS 上類似 DLL Hijacking 的技術 |
| **Impersonation**   | 模擬更高權限帳戶的 Token 進行操作 |
| **UAC Bypass**      | 使用 Sticky Keys 或合法應用繞過使用者存取控制 |
| **ADCS Misconfig**  | Active Directory Certificate Services 誤設造成提權（考點！） |

#### UAC Bypass 方法

- 利用替換 Sticky Keys (\`sethc.exe\`)
- 建立假憑證或惡意 sideload
- 使用如 \`bypassuac_eventvwr\` 模組

---

### 📡 Pivoting & Relaying（跳板與轉送）

- **Pivoting**：透過已控制主機存取內網中其他主機
- **Relaying**：中繼 NTLM 認證封包到其他主機以取得權限

---

### 🧫 惡意程式植入與資料隱匿

#### 技術與工具

| 名稱             | 說明 |
|------------------|------|
| **Keylogger**     | 紀錄鍵盤輸入工具，可用於竊取帳密 |
| **Rootkits**      | 深入核心隱藏惡意程式，擋掉系統檢測機制 |
| **ADS（Alternate Data Stream）** | 利用 NTFS 隱藏檔案內容 \`dir /R\` 可偵測 |
| **Steganography** | 圖片/聲音中藏入資料，工具如 \`Snow\`, \`OpenStego\`, \`zsteg\` |

---

### 🧱 常見漏洞攻擊技術

#### Buffer Overflow

- 分為：
  - Stack-based（堆疊）
  - Heap-based（堆積）
- 步驟：
  1. Fuzz 測試輸入界線
  2. 找出 Offset（控制 EIP）
  3. 撰寫 Payload（Shellcode）
  4. 利用 \`msfvenom\` 產生惡意載荷
- 防禦繞過技術：ASLR、DEP

---

### 🧹 清除痕跡（Covering Tracks）

| 工具/指令                  | 功能 |
|----------------------------|------|
| **auditpol**               | 設定與停用事件稽核 |
| **clearev / clear-eventlog** | 清除事件紀錄 |
| **history -c**             | 清除 Bash 紀錄 |
| **cipher.exe /w**          | 清除未配置空間資料 |
| **fsutil**                 | 修改時間戳記 |
| **ipconfig /flushdns**     | 清除 DNS Cache |
| **CCleaner**               | 常用 GUI 系統痕跡清除工具 |

---

### 🛠 其他工具補充

| 名稱           | 說明 |
|----------------|------|
| **WMI / WinRM**| 遠端執行命令工具，可用於後門操作 |
| **Inspectre**  | 用於檢查與修補 Meltdown、Spectre 漏洞 |
| **Dependency Walker** | 檢查應用程式依賴 DLL，用來分析惡意 DLL  |

---

## 07 - Malware Threats（惡意程式威脅）

惡意程式威脅主要透過靜態分析、動態分析、與混合分析方式進行偵測與研究。需熟悉常用工具及病毒行為五大階段。

---

### 靜態分析（Static Analysis）

直接檢查檔案，不執行程式。

**工具：**
- **Detect It Easy（P329頁）** - 檢查檔案結構。
- **pdfid** - 分析 PDF 是否包含惡意指令。
- **YARA** - 撰寫特徵規則偵測惡意檔案。
- **PEiD** - 偵測檔案是否被加殼。
- **HashMyFiles** - 計算並比對檔案 Hash 值。

---

### 動態分析（Dynamic Analysis）

執行可疑檔案，觀察行為。

**工具：**
- **Process Explorer** - 檢查正在運行的程式。
- **Process Monitor** - 監控檔案、登錄檔與程序活動。
- **jv16 PowerTool** - 系統清理與優化工具（考試常出）。
- **Windows Service Manager** - 管理與分析 Windows 服務。
- **Autoruns** - 找出自動啟動的惡意程式。
- **SIEM 系統** - 分析 Logs（例如 PA File Sight、Tripwire）。
- **DriverView** - 查看系統驅動。
- **DnsQuerySniff** - 監控 DNS 查詢。
- **schtasks** - 查看系統排程任務。
- **Regshot** - 比較登錄檔改變。
- **Wireshark** - 監控可疑網路流量。

---

### 混合分析（Hybrid Analysis）

結合靜態與動態分析技術，透過自動化平台進行。

**常用工具：**
- **Cuckoo Sandbox**
- **Any.Run**

---

### 常見惡意程式類型

- **病毒（Virus）**：需依賴宿主檔案感染傳播。
- **蠕蟲（Worm）**：可自我複製傳播，不需要宿主檔案。
- **木馬（Trojan）**：偽裝成正常程式，實際暗中執行惡意操作。
- **勒索軟體（Ransomware）**：加密資料並勒索贖金。
- **Rootkit**：隱藏惡意活動，避免偵測。
- **間諜軟體（Spyware）**：暗中蒐集使用者資料。
- **後門（Backdoor）**：允許繞過正常驗證存取系統。

---

### 病毒偵測的五大階段（Static & Dynamic 5 Virus Methods）

1. **Scanning（掃描）**：檢查檔案或記憶體中是否有已知特徵碼。
2. **Integrity Checking（完整性檢查）**：比對檔案或系統狀態變化。
3. **Interception（攔截）**：即時攔截可疑行為或存取。
4. **Code Emulation（程式碼模擬）**：在虛擬環境中執行觀察程式行為。
5. **Heuristic Analysis（啟發式分析）**：基於行為與特徵推測是否為惡意程式。

---
## 08 - Sniffing（封包嗅探）

封包嗅探是攔截、監聽網路流量的技術，常被用於竊取密碼、會話資訊或分析流量行為。  
瞭解嗅探方式與防禦技巧是資訊安全的重要基礎。

---

### 🎯 封包嗅探的目的

- 竊取帳號密碼、Cookie、敏感資料
- 分析網路流量與使用模式
- 監控網路活動
- 搜集偵察情報

🔧 **推薦工具：ipscan** - 輕量且好用的 IP 掃描工具。

---

### 🧩 嗅探技術類型

- **被動嗅探（Passive Sniffing）** 📡  
  僅監聽流量，不產生額外干擾，適用於 Hub 環境。

- **主動嗅探（Active Sniffing）** 🚨  
  利用 ARP 欺騙、MAC Flooding 等方式主動引導流量，適用於 Switch 環境。

---

### 🛠️ 常見嗅探攻擊技術

- **ARP Spoofing/Poisoning（ARP 欺騙/污染）** 🎭
- **MAC Flooding（MAC 泛洪攻擊）** 🌊
- **DHCP Spoofing（DHCP 欺騙）** 📋
- **DNS Poisoning（DNS 污染）** 🧬

---

### 🧰 常見嗅探工具

- **Wireshark** 🐬：最常用的封包分析工具。
- **Tcpdump** 📜：命令列封包擷取分析。
- **Cain and Abel** 🥷：支援 ARP Spoofing、封包解密等功能。
- **Ettercap** 🧩：進行中間人攻擊與封包嗅探。
- **dsniff 套件** 🎯：包含 \`arpspoof\`、\`dnsspoof\`、\`filesnarf\` 等工具。
- **Nmap** 🛰️：除了掃描，也可輔助發動 ARP Spoofing。

---

### 🛡️ 防禦嗅探攻擊的方法

- ✅ 使用 **加密協定**（如 HTTPS、SSH、SFTP）
- ✅ 避免在公共 Wi-Fi 或不受信任網路中傳輸敏感資料
- ✅ 部署 **ARP 檢測工具**（如 XArp）
- ✅ 啟用 **Port Security**（限制 Switch 上可連接的 MAC 數量）
- ✅ 使用 **VPN** 加密網路流量
- ✅ 透過 VLAN 分割重要系統與一般網路流量

---

### 🔒 ARP Spoofing 防禦技巧

- 🔹 靜態設定 IP-MAC 對應表
- 🔹 監控 ARP 對應異常變更
- 🔹 啟用 **Dynamic ARP Inspection (DAI)**，自動阻擋 ARP 攻擊

---
## 09 - Social Engineering（社交工程）


社交工程是一種攻擊技術，透過操縱人類心理弱點（如信任、恐懼、好奇心）來取得敏感資訊或系統權限。相較於純技術攻擊，社交工程常更容易得逞，因此防禦人為因素是資訊安全的重要一環。

---

### 🎯 攻擊目的

- 獲取帳號密碼、個人/企業敏感資訊
- 取得未授權的系統或網路存取
- 社會工程可能作為更深層攻擊（如 APT、惡意軟體植入）的起點

---

### 🧠 常見攻擊類型

#### 🎣 Phishing（網路釣魚）
透過偽造郵件或網站誘使使用者輸入敏感資訊（如帳密、信用卡）。

#### 🎯 Spear Phishing（魚叉式釣魚）
針對特定個人或組織量身打造的釣魚攻擊，成功率更高。

#### 🐋 Whaling（捕鯨攻擊）
針對公司高層（如 CEO、CFO）進行釣魚，藉以入侵高權限系統。

#### 📞 Vishing（語音詐騙）
利用電話詐騙方式，冒充客服或主管來套取資訊。

#### 📱 Smishing（簡訊詐騙）
透過 SMS 發送惡意連結或偽造銀行通知，誘導點擊。

#### 🕵️ Pretexting（預設情境）
假冒某身份（如 IT、銀行、稽核員），騙取受害者信任。

#### 🧲 Baiting（誘餌攻擊）
放置 USB、光碟等惡意裝置，引誘受害者插入並執行惡意程式。

#### 🤝 Quid Pro Quo（互惠攻擊）
提供「免費技術支援」等好處，換取帳密或裝置訪問權限。

#### 🚪 Tailgating（尾隨進入）
在實體環境中尾隨他人進入有管制的區域。

#### 💘 Honey Trap（蜜罐陷阱）
利用假冒戀愛或吸引力，誘導受害者提供資訊或進行某些行為。

#### 🧠 Tabnabbing（標籤綁架）
惡意網站在背景變更頁籤內容，誘導輸入密碼等資料。

#### 🗣️ Elicitation（對話套話）
以非正式對話的方式，引導對方透露敏感資訊。

---

### 🛠️ 常用工具

| 工具名稱 | 功能說明 |
|----------|-----------|
| **Social Engineering Toolkit (SET)** | 支援釣魚網站、惡意 PDF、Java Applet 攻擊等多種社交工程方式 |
| **Metasploit** | 提供社交工程模組（如偽裝可執行檔、後門） |
| **Wifiphisher** | 建立惡意 Wi-Fi AP，進行 Fake Login 攻擊 |
| **ShellPhish** | 快速建立釣魚網站 |
| **King Phisher** | 進階釣魚測試框架，支援報表與模板 |
| **GoPhish** | 簡易釣魚模擬平台，適合教育訓練 |

---

### 🛡️ 防範方法

#### 🎓 員工資安教育
- 定期訓練員工辨識釣魚信、惡意連結、社交工程技巧
- 模擬攻擊演練（如使用 GoPhish）

#### 🔐 多因素驗證（MFA）
- 即使帳號密碼被竊，無第二驗證因素仍無法登入

#### 📵 資訊保密政策
- 減少公司員工在 LinkedIn、FB 等平台上洩露職位與工作資訊

#### 📣 回報與警覺機制
- 建立「可疑郵件回報」管道
- 對重複出現的釣魚攻擊建立 SIEM 通知或封鎖規則

#### 🏢 實體安全
- 實施門禁卡、門禁記錄、訪客識別
- 禁止 USB、可攜設備在未授權主機使用

---

### ✅ 小結

社交工程是滲透攻擊中最容易低成本且高成功率的手段之一。攻擊者可從公開資訊取得目標背景，再透過設計社交攻擊向量逐步取得存取權限。有效防範社交工程需從**人員訓練、技術防護、實體控管**三方面同時著手。

---

> 📌 **提醒：社交工程不是技術問題，是人性問題！**


## 10 - Denial-of-Service（拒絕服務攻擊）

拒絕服務（DoS）與分散式拒絕服務（DDoS）攻擊是破壞系統可用性的常見威脅，攻擊者藉由大量請求或漏洞利用，讓目標系統無法提供正常服務。

---

### ⚡ DoS vs DDoS

- **DoS（Denial of Service）**  
  單一來源發起，流量有限。

- **DDoS（Distributed Denial of Service）**  
  使用大量殭屍主機（Botnet）從不同來源同時發動攻擊，破壞力極大。

---

### 🕵️‍♂️ 如何尋找 Botnets？

- 利用 OSINT 或威脅情報平台搜尋 Botnet 活動。
- 分析流量異常與可疑通訊。

---

### 🎯 主要攻擊向量

#### 🌊 Volumetric Attack（流量型攻擊）

利用大量流量癱瘓網路或伺服器：

- **UDP Flood**：隨機 UDP 封包轟炸。
- **ICMP Flood（Ping Flood）**：密集 ICMP Echo 要求。
- **PoD（Ping of Death）**：異常大封包導致當機。
- **Smurf Attack**：利用 ICMP broadcast 產生放大攻擊。
- **SYN Flooding**：不斷發送 SYN，耗盡伺服器資源。
- **Fragment Attack**：碎片封包阻塞重組緩衝區。
- **Spoofed Session Attack**：偽造 IP 請求癱瘓資源。
- **HTTP GET/POST Flood**：慢速大量 HTTP 請求（如 Slowloris）。
- **DRDoS（反射型 DDoS）**：放大器伺服器（如 NTP、DNS）反射攻擊。

---

#### 📜 Protocol Attack（協定型攻擊）

針對協定本身漏洞進行攻擊：

- **SYN Flood**
- **ACK Flood**
- **RST Flood**
- **TCP State Exhaustion**
- **NTP Amplification**

---

#### 🖥️ Application Layer Attack（應用層攻擊）

針對應用系統，模擬正常行為隱蔽攻擊：

- **HTTP Flood**
- **Slowloris Attack**（保持大量半開連線）
- **Slow POST Attack**

---

### 🛠️ 攻擊工具範例

- **hping3**：產生各種 DoS 封包。
- **Low Orbit Ion Cannon (LOIC)**：簡單操作的大流量工具。
- **High Orbit Ion Cannon (HOIC)**：高效能 DDoS 工具。
- **Slowloris**：專攻 HTTP 應用層。

---

### 🛡️ 防禦對策

- 部署 **防火牆（Firewall）**、**入侵防禦系統（IPS/IDS）** 過濾異常流量。
- 啟用 **SYN Cookies**、**Fragment 檢查** 等防護技術。
- 使用 **DDoS 防護服務**（如 Cloudflare、AWS Shield）。
- 增設流量警報與自動縮減機制。
- 強化伺服器 TCP/IP 設定（例如 SYN Backlog、縮短 Timeout）。

---
## 11 - Session Hijacking（會話劫持）

會話劫持（Session Hijacking）是指駭客竊取合法使用者的會話 ID，繞過認證系統，取得系統或應用服務的存取權限。

---

### 🎯 會話劫持的種類

- **Active Attack（主動攻擊）**  
  駭客持續監控並篡改會話。

- **Passive Attack（被動攻擊）**  
  只監聽並蒐集會話資料，不直接干擾。

---

### 🧩 會話劫持的常見技術

#### 🎭 Session Sniffing（會話嗅探）

- 使用封包分析工具（如 Wireshark）攔截未加密的會話資訊。
- 常見於未加密 HTTP 通訊環境。

#### 🔥 Session Prediction（會話預測）

- 根據可預測的 Session ID 規則，暴力或推算出有效會話。

#### 🪤 Session Fixation（會話固定）

- 在用戶認證前，預先設置一個會話 ID，讓受害者使用。

#### 🔀 Cross-site Scripting (XSS)

- 利用 XSS 攻擊植入惡意程式碼，盜取 Cookie 與 Session ID。

#### 📡 Man-in-the-Middle (MITM)

- 攻擊者攔截雙方通訊，竊取或修改會話資料。

---

### 🛠️ 常用攻擊工具

- **Ettercap**：MITM 攻擊與封包修改。
- **Wireshark**：封包嗅探分析。
- **Burp Suite**：攔截與修改 HTTP 通訊。
- **Ferret and Hamster**：自動化 HTTP session 劫持。

---

### ⚡ 會話劫持的流程示意

1. 攻擊者監聽目標的網路流量。
2. 取得會話識別資訊（如 Cookie、Token）。
3. 使用劫持到的資料，偽裝成合法用戶。
4. 進行未授權存取或操控目標系統。

---

### 🛡️ 防禦對策

- **加密通訊（如 HTTPS）** 🔒
- **Session ID 設計應隨機且不可預測** 🎲
- **短期 Session Timeout 機制** ⏳
- **驗證 Client IP/裝置 Fingerprint** 🖐️
- **Cookie 設定 Secure 與 HttpOnly 屬性** 🍪
- **定期強制重新登入（Re-authentication）** 🔄

---








`,GP=`---
title: CEH V13 證照心得與準備方式分享

---

# CEH V13 證照心得與準備方式分享

> 考試日期：2025/07  
> 結果：通過 ✅

---
![CEH_2E345519D3F7](/blog-assets/ceh-v13-review/rkp74hpLeg.png)
![image](/blog-assets/ceh-v13-review/HJtBEnaIgx.png)

![image](/blog-assets/ceh-v13-review/rk433K38ee.png)
![image](/blog-assets/ceh-v13-review/SyVrWi28gx.png)

---

## 📌 考前準備提醒

在正式考試前，記得完成以下步驟，避免像我一樣考完才發現資料填錯還要補救 😅

1. 前往官方考試平台 **[https://www.eccexam.com/](https://www.eccexam.com/)** 註冊帳號。
2. 註冊後將你收到的 **考試證號**（Exam Eligibility Code）輸入上去完成綁定。
3. 注意！註冊時的 **名字一定要填正確（與證件一致）**，我就是名字順序填錯，考完後還得寄信給官方請他們協助修改（雖然最後有成功）。
4. 考試當天要攜帶兩樣東西：
   - **影印一份 EC-Council 原廠寄來的考試通知信**，上面會有你的考試證號。
   - **有效證件**，我本人是帶 **護照**，官方會確認名字、照片、證件號碼。

---

## 成績資訊（Exam Score Report）

| 題目數 | 考試時間 | 成績 | 通過標準 | 結果   |
|--------|----------|------|-----------|--------|
| 125 題 | 4 小時   | 120  | 未知      | 通過 ✅ |

---

## 考後心得

這次能夠順利拿下 CEH V13 證照，真的非常開心。整體準備時間加上上課以及考古題大約花了 1~1.5 個月。  
我認為如果**只靠上課而不刷題**，會有點危險，因為考試題目偏向知識應用與情境題，細節很多。

---

## 我的準備方式

### 1. 上課內容：打基礎

我上了五個星期的假日共五天40個小時，內容放在另外一篇：  
https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/Sk3bRkqAkl

---

### 2. 考古題刷題（必備）

我認為刷題是非常關鍵的一步。

- 熟悉題目類型與出題語氣
- 找出自己容易混淆的概念
- 模擬考試節奏與心態

---

### 3. 自製刷題工具：LINE Bot + Google Sheet + Apps Script

為了強化練習，我將整理好的考古題匯入 Google 試算表，並配合 Google Apps Script 製作了一個 LINE Bot：

![image](/blog-assets/ceh-v13-review/rkLyTDsLlx.png)

- 即時答題  
  ![image](/blog-assets/ceh-v13-review/S1AlpvoLle.png)

- 支援中英文題目  
  ![image](/blog-assets/ceh-v13-review/SyLz6Dj8lx.png)

- 自動隨機產生 Google 表單作為小測驗  
  ![image](/blog-assets/ceh-v13-review/H1Cp2PiUll.png)

---

## ❓ 為什麼後來開源？

當初我在分享文裡提到這個 LINE Bot 後，很多人來私訊跟我要機器人。  
但因為：  
- 我沒有時間幫大家維護程式  
- 使用人數太多會導致 **Google Drive 塞爆問卷**  
- LINE API 與 Google API 都有限額，可能影響服務  

與其一個個幫忙，不如 **直接公開程式碼**，讓大家可以自己部署、自己調整。  

程式碼已經放在 GitHub：  
👉 [CEH-robot (GitHub Repo)](https://github.com/and910805/CEH-robot/tree/mainer)

裡面有範例檔案和教學說明，大家可以依照需求去修改。  
也歡迎大家 fork / 發 PR，一起改進 🙌

---

## 題型與準備建議

| 主題                   | 出題類型       | 建議準備方式                                 |
|------------------------|----------------|----------------------------------------------|
| Enumeration            | 工具＋協定知識 | 熟悉 SNMP、LDAP、DNS 的工具與查詢方式        |
| Web Security           | 攻擊手法題     | XSS、SQLi、XXE、CSRF 的差異與防禦手法         |
| Vulnerability Scanning | 工具題         | Nessus、Nikto、OpenVAS 的功能與應用區別       |
| Risk Management        | 理論題         | CTI 四層級（Strategic / Tactical / ...）概念 |
| Tools / Parameters     | 工具題         | 熟悉 nmap、Metasploit 常見參數與使用場景     |

**還有很多很多，還是建議要刷題**

---

## 結語

這次 CEH 考試讓我收穫很多，也體會到：

> 上課是打底，刷題是關鍵，實作才是王道。
`,qP=`---
title: CEHP心得

---


---

# CEHP (Certified Ethical Hacker Practical) 考後心得


---
> 考試日期：2026/3  
> 結果：通過 ✅
> 對答率：20/20
> 花費時間：4小時多

![image](https://hackmd.io/_uploads/S1XjAcDsbe.png)

離上次考到CEH也快一年了，最近去上了恆毅總複習班，並順利考取CEHP，以下是一些我有寄起來的資訊，跟大家分享一下

[去年CEH心得分享](https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/Bk4l2UoLxl)

## 1. 考試基本規定與核心機制

CEHP 是一場長達 6 小時的純實作考試，總共包含 20 道題目，受試者必須答對 15 題才能取得證照。

| 項目 | 說明 | 實務細節 |
| --- | --- | --- |
| 考試時長 | 總計 6 小時 | 建議分配 1 小時進行網路枚舉，剩餘時間專注破題。 |
| 休息機制 | 一般可休息 2 至 3 次 | 休息需向監考官報備，且休息期間考試倒數不會停止。 |
| 題目提交 | 每題通常可提交 3 至 5 次答案 | 提交前請檢查 Flags 的大小寫、空白字元與特殊符號。 |
| 作答方式 | 可先跳過難題，再回頭作答 | 題目之間無前後關聯性，遇到卡關建議先執行下一題。 |
| 證照組合 | 通過 CEH (ANSI) 與 CEH Practical | 完成兩項後，系統會自動核發 CEH Master 勳章。 |

> 備註：實際規則可能因考場或監考平台（如 ProctorU 或 GoToMeeting）調整，考前應提前十分鐘進去準備。

---

## 2. 考試環境

在考試環境中，針對特定的 Linux 或 Windows 主機，通常會提供以下預設帳密供登入：

| 系統類型 | 帳號 | 密碼 |
| --- | --- | --- |
| Parrot Security (攻擊機) | attacker | toor |
| Windows 11 | admin | Pa$$w0rd |
| Nessus Web Client | admin | password |

---

## 3. 網路環境架構與掃描策略



### 網段架構
通常環境中會包含 **3 個不同的子網段**（例如：10.10.1.x, 172.16.x.x, 192.168.x.x）。
### 掃描邏輯與策略
* **精確導向掃描：** 部分題目會直接提供目標 IP 或所屬網段，並告知特定服務（如 Port 80 的 Web 服務或 Port 445 的 SMB）。此時應直接針對該 IP 進行全埠掃描與服務版本辨識。
* **全域搜索與枚舉：** 少部分難度較高的題目僅提供目標描述（如：找到一台執行特定舊版服務的主機）。此時必須對**所有 3 個網段**進行大規模掃描。

---

## 4. 攻擊機配置與工具分佈

考試會提供兩台核心攻擊機，分別代表 Windows 與 Linux 兩大體系，各自負責不同的攻擊任務。

| 機器類型 | 主要用途 | 技術備註 |
| --- | --- | --- |
| **Windows** | **GUI 工具大本營** | 桌面包含 \`CEH-Tools\` 資料夾，內含隱寫術工具、密碼分析器、靜態程式碼分析工具。 |
| **Parrot** | **CLI 指令工具與腳本** | 核心工具包含 Nmap, Metasploit, SQLMap, WPScan, Hashcat 等，適合自動化滲透。 |

---

## 5. 檔案傳輸

由於 Windows 機器內建較多圖形化分析工具（如針對隱寫術圖片的分析），而 Parrot 機器則強於資料產出，因此跨平台的檔案互傳非常重要。

### 跨平台傳檔 (Parrot <-> Windows)
在考試環境中，使用 Python 內建的 HTTP 伺服器是最有效率的方法：
1. **在來源機器啟動：** 於檔案所在目錄執行 \`python3 -m http.server 8080\`。
2. **在目標機器下載：** 開啟瀏覽器輸入 \`http://[來源IP]:8080\` 即可下載分析檔案。

> **實戰應用建議：** 在 Linux 掃描出的惡意程式丟給windows分析程式好用很多。



---

## QA 常見問題與解答

**1. 六小時會寫不完嗎？**
我覺得不會。雖然考試時間很長，但我大約花四小時就完成了。分享一下我的經驗：剛開始時因為太緊張，環境還不熟悉，光是前兩題就花了一個多小時。建議大家前幾題慢慢來，等手感順了、網路環境適應了，後面的解題速度會快很多。

**2. 可以用 AI 嗎？**
盡管用。官方目前的規則是允許使用網路資源的（Open Book），包含 Gemini、ChatGPT 等 AI 工具。如果你還是不放心，可以在考試開始時主動詢問監考官確認。在解密 Hash 或寫 Python 腳本時，AI 是非常有力的助手。

**3. 考完什麼時候可以領到證照？**
馬上。考完當下點擊提交後，系統會立即顯示你的分數與是否通過。監考官會幫你進行最後的確認並結束工作階段。接著回到 EC-Council 的 Aspen 平台，證照通常已經產出並開放下載了。

**4. 要多久會變成 CEH Master？**
這需要一點點作業時間。通常在考完 CEHP 後的兩天內，Aspen 平台會自動偵測到你同時擁有 ANSI（筆試）與 Practical（實作）證照，接著就會多出一張 CEH Master 的證照。

**5. 不會英文怎麼跟監考官溝通？**
不用擔心，溝通過程可以全程使用打字（Chat box）。你可以開著網頁翻譯，或是將監考官的指令貼到翻譯軟體中。如果真的需要說話，簡單的英文單字或用翻譯軟體唸出來也是可以溝通的。

**6. 考試環境會很卡（Lag）嗎？**
會有感延遲。因為是透過瀏覽器連線到遠端的虛擬機，滑鼠移動或輸入指令時會有很嚴重延遲，以及輸入法我不知道為什麼一直怪怪的。

**7. 答案（Flag）提交要注意什麼？**
答案通常是從靶機裡找到的字串。要注意字串前後有沒沒有打對，以及大小寫是否完全符合。

**8. 中途可以上廁所或喝水嗎？**
可以。你可以向監考官申請「Break」，通常可以休息 2 至 3 次。要注意休息期間考試計時是不會停止的。回來後，監考官可能會要求你再次拿著攝影機環繞房間一圈，確認環境安全。

**9. 可以使用自己的數位筆記嗎？**
可以。只要筆記是存在你電腦裡的電子檔、Google Doc 或自己的部落格，都可以開啟。但切記「不能看實體書或紙本筆記」，所有的參考資料都必須在螢幕上閱讀。



**10. 考試題目與 iLabs（官方實驗室）的關聯性？**
相似度非常高。如果你能熟練操作 iLabs 裡面的所有單元，尤其是網路掃描（Scanning）、Web 攻擊（SQLi, Cross-Site Scripting）、密碼破解（Password Cracking）與隱寫術（Steganography），那麼這場考試對你來說會非常輕鬆。題目邏輯幾乎與實驗室一模一樣，只是替換了目標 IP 與 Flag 內容。

**11. 覺得內建工具不好用，可以自行下載嗎？**
可以。考試環境基本上就是兩台可以上網的虛擬機，我在考試過程中就有在 Windows 攻擊機上下載了幾款自己比較順手的輔助工具來提升效率。

**12. 該如何有效準備這場考試？**
最推薦的方法是重複練習官方的 iLabs 實驗室，或是參加恆毅提供的總複習班。重點在於熟悉工具的操作指令與圖形化介面的位置，因為考試時會有連線延遲，熟悉度越高越能節省時間。

**13. 破解密碼用的字典檔（Wordlist）通常放在哪裡？**
在 Parrot Security 攻擊機中，常用的字典檔通常直接放在桌面（Desktop），路徑大約是：
* \`/home/attacker/Desktop/username.txt\`
* \`/home/attacker/Desktop/password.txt\`
如果桌面沒看到，也可以在 \`/home/attacker/\` 目錄下找找。

**14. 密碼破解（Cracking）的難度與策略？**
破解過程本身並不難，只要將桌面提供的使用者名稱與密碼字典檔然後用上hydra，基本上都能順利跑出答案。但「時間」是關鍵，強烈建議：**先讓破解程式在背景執行，同時間去解其他的題目**，不要坐在螢幕前死等結果。

**15. 還有其他問題可以聯絡你嗎？**
沒問題，如果對 CEH Master 或是 CEHP 有任何疑問，歡迎寫信給我交流：goole910805@gmail.com


---





`,KP=`---
title: Forensics社課3/24

---

# Forensics社課3/24
* <font size='5px' color='#FF7F50'>**介紹kali**</font>
* <font size='5px' color='#FF7F50'>**介紹picoCTF**</font>
* <font size='5px' color='#FF7F50'>**介紹鑑識**</font>
    * <font size='5px' color='#FF7F50'>**基本題目練習&&講解**</font>

## 介紹kali
### [<font color='deep red'>甚麼是kali?</font>](https://zh.wikipedia.org/zh-tw/Kali_Linux) <-網址
* 駭客的好工具
  <font color='blue'>原意是想設計給滲透測試使用，但在駭客手中就變他的攻擊利器</font>
* 設計用於數位鑑識和滲透測試
* 基於 Debian 的 Linux 發行版
### [<font color='deep red'>安裝kali</font>](https://ithelp.ithome.com.tw/articles/10298620) <-網址
* 按照網址內步驟，幫助我們安裝kali
* 最低要求

1. 安裝 Kali Linux 需要至少 3.8 GB 的硬碟空間。
2. i386 和 AMD64 架構需要至少 512 MB 的記憶體。
3. 可引導的 CD-DVD 光碟機或USB隨身碟。

* 建議要求
1. 10.0 GB 硬碟空間，最好是SSD。
2. 至少有 2048 MB RAM。
## 介紹picoCTF
### [<font color='deep red'>甚麼是picoCTF?</font>](https://picoctf.org/) <-網址
* picoCTF 是一個免費的資訊安全教育計畫，其中的原創內容建立在由美國卡內基．梅隆大學的資安專家們所建立的 CTF 框架上
* 簡單來說就是一個可以供大家做CTF的地方

### [<font color='deep red'>註冊、登入 picoCTF</font>](https://play.picoctf.org/login) <-網址
* 以後在家可以自己練習題目，大部分題目網路上都有解答
* 登入完可以按上方的Pratice
### <font color='deep red'>CTF常見領域分類</font>
CTF 比賽中，大概可以分成六大類的題型：

* Web Exploitation 網路弱點
* Cryptography 密碼學
* Reverse Engineering 逆向工程
* Forensics 鑑識學
* Pwn (Binary Exploitation)
(發音為：碰！) 這個不好翻譯，大致上就是尋找二進制檔案、執行檔的漏洞，或是取得 shell 控制權
* MISC 雜項

### [<font color='deep red'>想玩其他CTF平台?!</font>](https://dd13036.blogspot.com/2019/06/ctf.html) <-網址

## Foriensics 鑑識

[Wikipedia](https://zh.wikipedia.org/zh-tw/%E6%95%B8%E4%BD%8D%E9%91%91%E8%AD%98)
### <font color='deep red'>Steganography隱寫術</font>
隱寫技術的類型(Types of Steganography)
* 圖片隱寫(Image Steganography)
  <font color='deep blue'>相關工具：QuickStego、Steghide、zsteg、HxD、CryptaPix、BinWalk</font>
* 文件隱寫(Document Steganography)
  <font color='deep blue'>相關工具：StegoStick、StegJ</font>
* 影片隱寫(Video Steganography)
  <font color='deep blue'>相關工具：OmniHide、StegoStick、OpenPuff</font>
* 聲音隱寫(Audio Steganography)
  <font color='deep blue'>相關工具：WavSteg、AudioStego、DeepSound</font>
* 資料夾隱寫(Folder Steganography)
* 網頁隱寫(Web Steganography)
* 電子郵件隱寫(Email Steganography)
### <font color='deep red'>有趣工具和指令</font>
 * steghide 
 * binwalk
 * strings
 * grep
 * dd
 <font color='deep blue'>一個用於從一個位置複製二進制數據到另一個位置的命令行工具。</font>
 * wireshark
 <font color='deep blue'>網路封包分析工具，可用於檢查網路流量中的隱藏信息。</font>
 * hexdump
 <font color='deep blue'>一個在二進制文件中查看十六進制數據的命令行工具。</font>
 * exiftool
 <font color='deep blue'>一個用於讀取和編輯圖像、音頻、視頻和PDF等媒體文件的元數據的工具。</font>
 
 
#### steghide 
---
[參考資料1](https://ithelp.ithome.com.tw/m/articles/10278964)
[參考資料2](https://anwendeng.blogspot.com/2019/07/linuxsteganographysteghide.html)
[steghide官方網站](https://steghide.sourceforge.net/)

![](https://i.imgur.com/sjpsBJ8.jpg)
![](https://i.imgur.com/8RGT62O.png)


\`\`\`bash
$sudo apt－get install steghide #安裝
$steghide --help 查詢指令
$steghide embed -cf picture.jpg -ef secret.t
$steghide extract -sf picture.jpg
$steghide info picture.jpg
\`\`\`
 <font color='deep blue'>幫大家補充一點點linux最最最基本指令</font>
 \`\`\`bash
$wget 網址 #下載
$cd [directory] #到某個目的
$cd ../.#可以接相對路徑
$cd /[path]#可以接絕對路徑
$ls #列出本位置的所有資料，可以帶參數後面再講
$ls [directory]#可以目的
$pwd #查看目前位置
$touch file1 #建立單一檔案
$touch file1 file2#建立多重檔案
$mkdir dir #建立資料夾
$cp file1 file2#複製單一檔案
$cp file1 file2 file3 dir1#複製多重檔案，前三個檔案複製到後面那個dirl
$mv file1 file2#移動，可以更改黨名
$mv file1 file2 dir1#多重檔案移動
$rm file1 #刪除單一檔案，要刪除資料夾要-r遞迴
 \`\`\`
 
 
#### binwalk
---

 <font color='deep blue'>跟steghide區別</font>
![](https://i.imgur.com/ityc41v.png)
[安裝方式&&教學](https://cloud.tencent.com/developer/article/1515285)
\`\`\`bash
$binwalk --help
$binwalk file#可以分析
$binwalk -e file#文件提取
\`\`\`
[picoCTF練習簡單題目](https://play.picoctf.org/practice/challenge/129?category=4&page=1)
[picoCTF練習中級題目](
https://play.picoctf.org/practice/challenge/130?category=4&page=1)
為啥binwalk分析不出來steghide隱藏資訊?
![](https://i.imgur.com/zovxvJd.png)

#### strings
---
[參考資料](https://wangchujiang.com/linux-command/c/strings.html)
在文件中或二禁制文件中找尋可打印的字串
![](https://i.imgur.com/127CQAy.png)
[picoCTF練習簡單題目](https://play.picoctf.org/practice/challenge/44?category=4&page=1)
[picoCTF練習簡單題目](
https://play.picoctf.org/practice/challenge/265?category=4&page=1)
####  grep
---
[用法大全](https://blog.gtwang.org/linux/linux-grep-command-tutorial-examples/)
\`\`\`bash
$grep 關鍵字 檔案
$grep 關鍵字 檔案1 檔案2 ...
$grep 關鍵字 /kali/123.file
$grep 關鍵字 /kali/*.conf #在kali下所有.conf，尋找關鍵字
$grep -i 關鍵字 /kali/123.file #不分大小寫
$grep -n 關鍵字 /kali/123.file #顯示行數
$grep -v 關鍵字 /kali/123.file #反向搜尋除了關鍵字其他顯示
$grep -r 關鍵字 /kali/123.file #遞迴搜尋
$grep -A 1 關鍵字 /kali/123.file #多顯示後一行
$grep -B 1 關鍵字 /kali/123.file #多顯示前一行
$grep -C 1 關鍵字 /kali/123.file #多顯示前後各一行
\`\`\`
也可以與其他指令混用 |
\`\`\`bash
$strings file | grep picoCTF{.*}
\`\`\`
[picoCTF練習簡單題目](https://play.picoctf.org/practice/challenge/279?category=4&page=1)
[picoCTF練習簡單題目](https://play.picoctf.org/practice/challenge/19?category=4&page=2)
#### 最後
---
上面題目很多，大家可以加以練習，我覺得成長最快的方式是要記錄，做個筆記之類的，[這是我的筆記](https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/rJqLG8Qdj)，但其實大部分題目都找的到答案。


`,QP=`---
title: picoCTF

---

# picoCTF
<font size='5px' color='#FF1493' face="DFKai-sb"><b>

</b>
</font>
## <font size='10px'>Web Exploitation</font>
### <font size='6px'>題目GET aHEAD</font>
![](https://i.imgur.com/gWuXnHM.png)
* <font color='red'>提示</font>
    1. 他說可能我們用大於兩種的選擇
    2. 我們可以透過burpsuit類似工具來修改請求
* <font color='red'>解題思路</font>
    先打開F12看一下，我們會看到html裡面兩個按鈕請求不一樣。
    ![](https://i.imgur.com/FgXxGhS.png)
    一個是GET 跟POST當然根據提示我們還可以用別種請求試試看，
    這裡用到[curl指令](https://blog.techbridge.cc/2019/02/01/linux-curl-command-tutorial/)
    \`\`\`bash
    $curl -I URL
    \`\`\`
    就會顯示出來了
    ![](https://i.imgur.com/fsy8y7v.png)

### <font size='6px'>題目Cookies</font>

![](https://i.imgur.com/H58sjM3.png)
* <font color='red'>解題思路</font>

    看題目一定八九不離十跟cookie有關係，
    一樣打開F12->application 改改看cookie，
    會發現每改一次他輸出都不太一樣，可以順著這個思路去改改看，
    會發現在name=18時，可以看到我們的flag。
    
    不過這題是因為數字比較小，如果牠放到很後面，我們當然不可能慢慢點，
    所以我們可以通過寫程式方式，我這邊提供[別人的程式](https://github.com/JeffersonDing/CTF/blob/master/pico_CTF_2021/web/cookies/ape.py)，他用py迴圈去檢測，當然也可以直接在shell下 
    \`\`\`bash
    $for i in {1..100}; do #你要的指令curl之類的
    \`\`\`
### <font size='6px'>題目Insp3ct0r</font>
![](https://i.imgur.com/xos4X4E.png)
* <font color='red'>解題思路</font>
    題目說了要我們檢查code，我們就F12檢查吧，
    首先看到html他有註解沒有刪掉，而且看起來像旗幟
    ![](https://i.imgur.com/TSR4lOj.png)
    不過好像只給1/3的部分，我們接著找其他檔案。
    F12->Source 依序在js 跟css找到我們剩餘的flag。
    這題對新手蠻實用的，許多人架網站註解都會忘記刪掉。
    
### <font size='6px'>題目Scavenger Hunt</font>
![](https://i.imgur.com/Z3hvf4a.png)
* <font color='red'>解題思路</font>
    題目叫做尋寶獵人，且敘述說周圍隱藏者一些有趣的訊息，
    感覺就跟上一題很像，那我們一樣檢查網站的code，馬上就在html看到一小段flag，
    css第二段，可惜的是js沒有找到但他也提供我們訊息防止google引擎查詢，
    馬上就聯想到[robots.txt](https://www.newscan.com.tw/all-seo/robots-block-search-engines.htm)，我們訪問看看。
    ![](https://i.imgur.com/5sbYgRV.png)
    這裡也出現一段flag並出現提示，網頁適用阿帕契架的，那就有可能會有[.htaccess](https://www.newscan.com.tw/all-seo/block-search-engines-htaccess.htm)，我們在這裡找到第四段，接下來的提示是mac，那我們再找找看[.DS_Store](https://zh.wikipedia.org/zh-tw/.DS_Store)全部flag就找到了。
    
### <font size='6px'>題目where are the robots</font>
![](https://i.imgur.com/HghEyZa.png)
* <font color='red'>解題思路</font>
    題目寫哪裡有robots，還記得上一題我們才剛剛寫到robots.txt嗎，
    我們試試看直接去查看/robot.txt，發現他有阻止一個網站被找到，
    ![](https://i.imgur.com/yqFjquq.png)
    我們就去看看這是甚麼網站吧，很好進去答案就找到了:>

### <font size='6px'>題目logon</font>
![](https://i.imgur.com/plk8Aq4.png)
* <font color='red'>解題思路</font>
    題目說好像不會講檢查登入?除了joe，那我們猜測joe應該是root管理員，
    我先隨便打帳密進去，進去發現應該是權限不足? !，F12到處檢查一下，
    我發現cookie有一個admin=false看起來超奇怪的，我把它改成True，
    結果Flag就出來了
    
### <font size='6px'>題目dont-use-client-side</font>
![](https://i.imgur.com/z5epn6a.png)
* <font color='red'>解題思路</font>
    題目說沒有使用者? !不太懂他得意思，
    沒關係我們一樣F12看一下有沒有可以利用的咚咚，
    我看了一下Html裡面藏著js驗證指令
    ![](https://i.imgur.com/jP94WrL.png)
    細看發現，把後面按照split順序拼起來就是flag，
    <font color='	DeepPink'>picoCTF{no_clients_plz_7723ce}</font>
    我也懂了為啥叫做沒有使用者，因為他怎麼樣都不會進去。
    你正確他也不會跳轉，他只會跟你講對了而已。

### <font size='6px'>題目login</font>
![](https://i.imgur.com/UPc3LDI.png)
* <font color='red'>解題思路</font>
    打開F12，東看看西看看看到他的js，感覺很奇怪我們可以用[縮排網站](https://www.tutorialspoint.com/online_javascript_formatter.htm)幫忙縮排，
    然後縮完，會看到一串很像base64的密文
    ![](https://i.imgur.com/uAWw6C5.png)
，可以用線上[Decode解解看](https://emn178.github.io/online-tools/base64_decode.html)答案就出來了。

### <font size='6px'>題目Includes</font>
![](https://i.imgur.com/KbeYMm3.png)
* <font color='red'>解題思路</font>
    這題我是不太知道要考甚麼，他說去維基百科查include，好吧，
    一樣先看F12有啥東西，恩..js跟css註解就有答案了，完全不知道這題要考啥。

### <font size='6px'>題目Inspect HTML</font>
![](https://i.imgur.com/KhGDjbJ.png)
* <font color='red'>解題思路</font>
    題目叫做檢查html，那就F12一樣檢查看看吧，恩..又是註解。
    你看超簡單你只要會看F12就能解大部分題目了。

### <font size='6px'>題目Local Authority</font>
![](https://i.imgur.com/k9Iz5eD.png)
* <font color='red'>解題思路</font>
    看到題目這個名字，我以為是改cookie之類的，因為我點開也有admin咚咚，
    超奇怪但我試了幾次都沒有，我點開了提示，他說檢查看看網站是怎麼驗證的，
    那我們就登登看，發現會跳轉到login.php，我們打開看一下F12，
    他驗證的程式有沒有寫在裡面吧，欸發現了secure.js點開就會看到帳密，
    登進去flag就出來了。


### <font size='6px'>題目Search source</font>
![](https://i.imgur.com/uCBGBHO.png)
* <font color='red'>解題思路</font>
    題目說好像有留強大重大的神器?，不太懂不管我們一樣F12找找看，
    他的網站超級多的，為了效率我們ctrl+f搜尋picoCTF，結果發現在style.css，
    裡面出現flag。
### <font size='6px'>題目caas</font>
![](https://i.imgur.com/fiZoP7e.png)
* <font color='red'>解題思路</font>
    這題還蠻有趣的，點開網站看得出，他叫我們把訊息寫在網址後，
    就能跟這個cowsay互動，不管寫甚麼他都可以印出來，那我們試試看有沒有文件漏洞，
    我打上linux指令，盡然可以互動欸
    ![](https://i.imgur.com/TnRfj9j.png)
    那我們查查看這個falg.txt看起來超奇怪的檔案，
    在後面加cat falg.txt答案就出來了。
    ![](https://i.imgur.com/NCrbNhg.png)
    這個題目超有趣
### <font size='6px'>題目picobrowser</font>
![](https://i.imgur.com/TmOXYCq.png)
* <font color='red'>解題思路</font>
    這題我點網址進去，中間出現了flag看起來很奇怪，點點看，
    跳出了
    \`\`\`
    You're not picobrowser! 
    Mozilla/5.0 (Windows NT 10.0; Win64; x64)
    AppleWebKit/537.36 (KHTML, like Gecko) 
    Chrome/108.0.0.0 Safari/537.36
    \`\`\`
    反正就是要我用picobrowser才給我點，F12的右邊點更多，有一個
    more tool然後裡面有一個network conditions，點開可以改瀏覽器名字
    我們可以把它改成他要的picobrowser像這樣
    ![](https://i.imgur.com/5PfqYqA.png)
    重新點就可以了，flag就出來了
### <font size='6px'>題目Client-side-again</font>
![](https://i.imgur.com/wMMH3RS.png)
* <font color='red'>解題思路</font>
    他說我們能不能闖進這個超強門呢，恩不知道一樣F12打開，
    欸奇怪盡然沒有js或是css檔案，不過他要驗證一定會有js，所以應該是寫在
    html裡面，我們看一下，果然有一個很長的js code，我們複製用之前那個
    [js排版工具](https://www.tutorialspoint.com/online_javascript_formatter.htm)
    我們會看到一堆flag片段，我們按造順序把它組合起來就是答案了。
    不過組合過程偏麻煩，還要用到F12 console查看js變數，然後一個一個對照，
    我這裡就不做了，我傳別人寫好的[網址](https://ithelp.ithome.com.tw/articles/10246749)

### <font size='6px'>題目Web Gauntlet</font>
![](https://i.imgur.com/a9OfGvi.png)
* <font color='red'>解題思路</font>
    這題看提示似乎要我們用注入器，但是可能給我們另一個網址好像是他的過濾器，
    我們可以對應看看過濾器，下面是每個回合。
    1. 第一回合過濾器說不能用OR，那我們試試看admin' --
    2. 第二回合過濾器說不能用--，那我們用admin'/*
    3. 第三回合過濾器說不能用><，那等於上回合還可以用
    4. 第四回合過濾器說不能用admin，那我用字串結合的方式a'||'dmin'/*
    5. 第五回合過濾器說不能用union攻擊，那上回合一樣可以用
    最後他叫我們再去檢查看看filter.php，裡面就出現了全部回合的驗證步驟，
    以及flag註解，這題可以上網查sql注入清單一個一個是拉。
        
    


### <font size='6px'>題目Irish-Name-Repo 1</font>
![](https://i.imgur.com/4nXEwH1.png)

* <font color='red'>提示</font>
    1. 我想知道用戶是否保存在數據庫中？
    2. 嘗試考慮網站如何驗證您的登錄信息。

* <font color='red'>解題思路</font>

    從以上提示能判斷出，題目想要叫我們去看他的程式碼是怎麼判別登入的。
    首先F12 Elements 層層打開能看到一個login.php 用post
    
    ![](https://i.imgur.com/Uo47ufZ.png)
    
    我們試試看把debug 後面value改成1
    ![](https://i.imgur.com/64wOo3P.png)
    跳出這個sql的語法，那我就能試試看以前sql注入的漏洞
    參考網址:https://ithelp.ithome.com.tw/articles/10189201
    
    在username上打'OR 1=1 -- 便能破解
    ![](https://i.imgur.com/dr23RCw.png)
### <font size='6px'>題目Forbidden Paths</font>

![](https://i.imgur.com/DXRdObo.png)
* <font color='red'>解題思路</font>
    題目說flag在flag.txt上
    進到網頁我們會發現這個read看起來很可疑
    ![](https://i.imgur.com/RJyhu1T.png)
    又因為題目說nginx的index放在/usr/share/nginx/html下
    所以我用打了linex語法 ../../../../flag.txt
    便找到
![](https://i.imgur.com/yU5hXld.png)

### <font size='6px'>題目SQLiLite</font>

![](https://i.imgur.com/dLjoYlV.png)
* <font color='red'>解題思路</font>
     測試了一下發現也是sql注入
     一樣打'OR 1=1 -- 就可以登入
     當然他的flag藏起來了，這裡F12打開就可以看到
     ![](https://i.imgur.com/q32GJuq.png)
## <font size='10px'>Foriensics 鑑識</font>
 
 <font color='purple' size='6px'><span>基本工具</span> </font>
 * binwalk
 * [strings](https://eecsmt.com/linux/linux-strings/)
 ### <font size='6px'>題目Matryoshka doll </font>
 
 ![](https://i.imgur.com/YKl9YZV.png)
  * <font color='red'>解題思路</font>
     提示中跟我們講，有隱藏的文件那我們用binwalk掃掃看
     \`\`\`bash
     $binwalk -e dolls.jpg
     \`\`\`
     會發現隱藏文件出來了
     一層一層的解開會找到最後一層的flag.txt
 ### <font size='6px'>題目Glory of the Garden</font>
 
![](https://i.imgur.com/07N01LC.png)
 *  <font color='red'>解題思路</font> 
     直接點開裡面的圖長這樣
     ![](https://i.imgur.com/PO8gt1V.jpg)
     提示有說16禁制編輯器?
     我們先用vim打開看看，然後<font color='pink'>/picoCTf</font>就出現了，
     他藏在最後面
     ![](https://i.imgur.com/cH9EoIM.png)
 

 ### <font size='6px'>題目Enhance!</font>
 
 ![](https://i.imgur.com/VsfUMtq.png)

* <font color='red'>解題思路</font>
     strings指令用來檢視二進位檔案。
     用strings來檢查看看
     會發現答案藏在裡面
    \`\`\`bash
    $strings drawing.flag.svg
    \`\`\`
 ### <font size='6px'>題目Lookey here</font>
 
 ![](https://i.imgur.com/Ytk0J7E.png)
 
* <font color='red'>解題思路</font>
     需要了解grep用法 
     ．*代表所有字元都可替代
    \`\`\`bash
    $cat anthem.flag.txt | grep picoCTF{.*}
    \`\`\`

### <font size='6px'>題目Packets Primer</font>

![](https://i.imgur.com/1UtgW9q.png)

* <font color='red'>解題思路</font>
    用wireshark打開選擇任一個tcp
    右鍵點擊follow看他的tcp stream裡面就是我們找的flag

### <font size='6px'>題目Redaction gone wrong</font>

![](https://i.imgur.com/B13Ywjp.png)

* <font color='red'>解題思路</font>
    把下載完的pdf點開，發現有一部分是黑的
    ![](https://i.imgur.com/ETJfJoZ.png)
    我們試試將他反白就會發現最後一個是我們的flag

### <font size='6px'>題目So Meta</font>

![](https://i.imgur.com/dvMVJR1.png)

* <font color='red'>解題思路</font>
     二進制打開順便記得用grep查查看
    \`\`\`bash
    $strings pico_img.png | grep picoCTF{.*}
    \`\`\`
    可以找到我們的flag了
    
    
### <font size='6px'>題目shark on wire 1</font>

![](https://i.imgur.com/JLriV5c.png)

* <font color='red'>解題思路</font>
    提示要我們用wireshark以及檢查所有stream
    我們就一個一個檢查，檢查到第六個時找到了答案
    ![](https://i.imgur.com/TmCJGfb.png)
    
### <font size='6px'>題目extensions</font>

![](https://i.imgur.com/xfmzq9o.png)

* <font color='red'>解題思路</font>
    我們vim打開發現一堆亂碼，但開頭顯示png
    代表這有可能是一個png檔，我們將他改副檔名
    便成功找出flag

### <font size='6px'>題目What Lies Within</font>

![](https://i.imgur.com/FheIBKQ.png)

* <font color='red'>解題思路</font>
    提示叫我們找線上decode，那我們就找吧
    找[decode image](https://stylesuxx.github.io/steganography/)
    照片上傳上去flag就出來了

### <font size='6px'>題目MacroHard WeakEdge</font>

![](https://i.imgur.com/5bCz9iB.png)

* <font color='red'>解題思路</font>
    這題好難好麻煩，我看這個人的[解答](https://ctftime.org/writeup/26975)
    我列出幾點我比較不熟習
    1.     $7z -x file(解壓縮)
    2.     ls -la *(可以遞迴顯示)
    3.     echo "string" | base64 -d (解密)
    依序上面三點網址
    [7z](http://note.drx.tw/2008/04/command.html)
    [ls *](https://n.sfs.tw/mymedia/index/10365)
    [base64](https://shengyu7697.github.io/linux-base64/)

## <font size='10px'>General Skills</font>
[**grep指令**](https://blog.gtwang.org/linux/linux-grep-command-tutorial-examples/)
\`\`\`bash
$grep 關鍵字 檔案1 檔案2 ...
$grep 關鍵字 /kali/123.file
$grep 關鍵字 /kali/*.conf #在kali下所有.conf，尋找關鍵字
$grep -i 關鍵字 /kali/123.file #不分大小寫
$grep -n 關鍵字 /kali/123.file #顯示行數
$grep -v 關鍵字 /kali/123.file #反向搜尋除了關鍵字其他顯示
$grep -r 關鍵字 /kali/123.file #遞迴搜尋
$grep -A 1 關鍵字 /kali/123.file #多顯示後一行
$grep -B 1 關鍵字 /kali/123.file #多顯示前一行
$grep -B 1 關鍵字 /kali/123.file #多顯示前後各一行
\`\`\`

[**find指令**](https://blog.gtwang.org/linux/unix-linux-find-command-examples/)

\`\`\`bash
$find / -name "flag.txt" #從根目錄底下搜尋
$find / -name "flag.txt" 2>/dev/null #過濾掉報錯訊息
\`\`\`

### <font size='6px'>題目Big Zip</font> 

![](https://i.imgur.com/3dJD3J3.png)
* <font color='red'>解題思路</font>
    這題解壓縮完有許多txt檔跟資料夾
    要從這麼多資料一個一個找到flag
    是有點難，所以要透過grep來尋找
    \`\`\`bash
    $unzip  big-zip-files.zip
    $grep -r pico *
    \`\`\`
    
### <font size='6px'>題目First Find</font>
![](https://i.imgur.com/bI87fdh.png)
* <font color='red'>解題思路</font>
    此題跟上一題有異曲同工之妙
    解壓縮完看起來很多資料夾跟txt
    我們一樣用grep 遞迴去尋找
    \`\`\`bash
    $unzip  files.zip
    $grep -r pico *
    \`\`\`

### <font size='6px'>題目Based</font>
![](https://i.imgur.com/ZXMGTnd.png)

* <font color='red'>解題思路</font>
     反正就是nc連線過去會出現一堆題目，
     教你分別把二、八、十六進制轉成string
     我們可以用線上轉換器
     [二進制、十六進制to string](https://www.rapidtables.com/convert/number/binary-to-ascii.html)
     [八進制to string](http://www.unit-conversion.info/texttools/octal/)
     我不知道為啥第一個網站沒辦法八進制轉string
     回答完flag就跑出來了

### <font size='6px'>題目mus1c</font>
![](https://i.imgur.com/qOCPXw1.png)

* <font color='red' >解題思路</font>
     老實說這題我是看不懂要幹嘛，
     但提示有講到rockstar這程式語言
     我們就將他給的文件丟上去看看
     [網站](https://codewithrockstar.com/online)
     
     轉換發現看起來像是ASCII
     我們丟上去ASCII to string的[網站](https://codebeautify.org/ascii-to-text)
     發現出現<font color='blue'>rrrocknrn0113r</font>
     轉成<font color='pink'>picoCTF{rrrocknrn0113r}</font>
     就是答案了
    
### <font size='6px'>題目flag_shop</font>

![](https://i.imgur.com/gKHrvc2.png)

* <font color='red' >解題思路</font>
     這題我們先看他的程式<font color='blue'>store.c</font>
     然後看了一下提示，我猜是要把c程式用爆，
     c的int是有[大小限制的](https://openhome.cc/Gossip/CGossip/Datatype.html)
     我們是看看輸入會超過的範圍，他將會產生亂數使我們金額剩餘超大
     便可以買我們的flag了



`,XP=`**資安是一場長期戰爭，我想把戰場紀錄下來。**

還記得面試那天，主管提到公司剛上櫃，為了符合法規要求，需要一名專職的資安人員。 在那之前，所有 IT 事務幾乎都由一位資深 MIS 扛下。

> 不過因為專精領域不同，資安並沒有做到很深入，所以需要額外聘請專職。

**雖然代表很多事情都要自己來，但我相信這會是最快速的學習機會。** 抱著這樣的想法，我接下了這份工作。

雖說公司前期的資安設備不多， 但好在沒有對外公開的系統，外部攻擊面相對少。 但這也意味著，真正的挑戰會是 —— **如何讓資安更完整、更制度化。**

這個系列，會記錄我在第一年資安工作的點滴，分享一路上碰到的真實課題：

- **工具導入**：MDR、SOC、DLP、Nessus、ZAP、MFA、特權帳號管理，從零開始到落地。
- **制度推動**：ISO 27001 建置、ISMS 政策制定，以及合規過程的挑戰。
- **教育與演練**：社交工程演練、教育訓練，如何讓同仁真正有感。
- **雲端與裝置管理**：M365、Intune、Entra ID，以及公司手機的安全管理。
- **客戶稽核**：其實最麻煩的，往往是來自大型客戶的一堆資安要求，如何在有限資源下逐一滿足。

接下來的 30 天，我會用「第一年資安工程師」的視角，把真實遇到的問題、解法與心得一一寫下來。

---

**「如果你正準備踏入資安，或已在戰場上打拼，或許能在這系列找到共鳴。」**

---

原文連結：https://ithelp.ithome.com.tw/articles/10374837
`,YP=`![/blog-assets/ithome-2025/20171891UXsSIBCW7L.png](/blog-assets/ithome-2025/20171891UXsSIBCW7L.png)

> 是不是以為我要介紹 OWASP？ 今天不打算列一堆「情資平台清單」，而是針對公務繁忙、只能被動收信的資安工程師：只要訂閱幾個可靠來源，人家幫你整理好寄到信箱，這些也都是公開情資的一部分。

## 為什麼要「訂閱」而不是偶爾去逛？

- **早一步知道、少一步風險**：國際 0-day、RCE 或供應鏈事件常在 24–48 小時內快速演變，Email 訂閱能第一時間進信箱。以 The Hacker News 為例，提供即時新聞與週報。([The Hacker News](https://thehackernews.com/search/label/Rss%20feeds))
- **週會能直接用**：「資安人」整理在地案例與觀點，很適合拿來做週會簡報或內部宣導。([資訊安全](https://www.informationsecurity.com.tw/))
- **盡早準備資料**：重大事件發生後，通常幾天內就會被客戶或主管詢問「我們怎麼因應」。我會**先準備一頁式 PPT**放著，必要時直接拿出來講。
  > 例：最近的台積電供應鏈事件； 例：SharePoint 相關漏洞——若新聞指涉 **on-prem 版** CVE，而我們是 **SharePoint Online**，就要在簡報裡說明「由 Microsoft 代維運、修補，影響不同」，同時補上我們的權限與外分享檢查結果。 **「這就是公開情資帶來的第一手提醒：當主管或客戶問起，你能馬上拿出回應。」**

---

![/blog-assets/ithome-2025/20171891Q2irF2N7F1.png](/blog-assets/ithome-2025/20171891Q2irF2N7F1.png)

![/blog-assets/ithome-2025/201718910VgWKVY32o.png](/blog-assets/ithome-2025/201718910VgWKVY32o.png)

## 我訂閱的 3 個來源（以及各自的價值）

### 1) 資安人週報（在地視角）

- **重點濃縮**：整理台灣相關新聞、專欄與活動，適合做「本週摘要」與內部宣導。
- **怎麼拿到**：到官網註冊／訂閱電子報，新內容會寄到 Email。([資訊安全](https://www.informationsecurity.com.tw/))

### 2) The Hacker News（全球視角）

- **更新快、案例多**：新型攻擊、APT、0-day 與緩解建議常第一時間出現，能提早規劃防護。
- **怎麼拿到**：追蹤新聞／RSS／週報，新文會推播到信箱或閱讀器。([The Hacker News](https://thehackernews.com/search/label/Rss%20feeds))

### 3) TW-ISAC／TWCERT/CC（通報與聯防）

- **官方與聯防情資**：TWCERT/CC 維運的 TW-ISAC 與 TVN（Taiwan Vulnerability Note）提供公告、漏洞與預警；屬於**可作為稽核與事件通報依據**的來源。([twcert.org.tw](https://www.twcert.org.tw/tw/lp-103-1.html))
- **背景補充**：TWCERT/CC 是 MITRE 授權的 CNA，能協助指派國內產品的 CVE，公信力佳。([dsp.twse.com.tw](https://dsp.twse.com.tw/public/static/downloads/computerPlanningOperationsDepartment/01-%E5%8F%B0%E7%81%A3%E9%9B%BB%E8%85%A6%E7%B6%B2%E8%B7%AF%E5%8D%B1%E6%A9%9F%E8%99%95%E7%90%86%E6%9A%A8%E5%8D%94%E8%AA%BF%E4%B8%AD%E5%BF%83%28TWCERT%29%E6%9C%8D%E5%8B%99%E4%BB%8B%E7%B4%B9_20211216091733.pdf)、[iThome](https://www.ithome.com.tw/news/146035))

---

> 不是每個人都需要貴鬆鬆的威脅情資平台；**對多數團隊來說，訂閱幾個可靠來源，就足夠你在事件爆發時說得清楚、動得快速**。

**「而這些公開情資，就是最省成本的入門方式，幫助你在第一線把新聞轉成行動。」**

---

原文連結：https://ithelp.ithome.com.tw/articles/10374947
`,ZP=`![/blog-assets/ithome-2025/20171891eFUriHTRZ2.png](/blog-assets/ithome-2025/20171891eFUriHTRZ2.png)![/blog-assets/ithome-2025/20171891Xm2FaXlRMz.png](/blog-assets/ithome-2025/20171891Xm2FaXlRMz.png)

在一家公司裡，導入資安工具與服務的最大推力，往往來自 **法規要求**（ISO 27001、GDPR、金融業規範）與 **客戶稽核**，再加上長官對安全能力的期待。這些要求就像遊戲裡的任務 NPC：指定你必須拿到某些裝備才能闖關。 平時沒事可以撐著過日子，但遇到 BOSS（法規檢查 / 客戶審查），裝備不夠就會瞬間 Game Over。

---

## 公司常見裝備地圖（快速看表）

![/blog-assets/ithome-2025/20171891VJ2SD5m3Ko.png](/blog-assets/ithome-2025/20171891VJ2SD5m3Ko.png)

- **ISO/ISMS（ISO/IEC 27001）**：不是工具，是「制度＋程序＋文件」的地基。
- **EDR / MDR**：端點偵測與回應；MDR 為 24/7 外包代管。
- **SIEM / SOC**：集中日誌、關聯分析、告警監控。
- **防火牆 / WAF / IDS/IPS**：邊界/應用層防護。
- **VPN / MFA / PAM**：安全連線與特權存取管理。
- **加密 / DLP / 文件控管**：資料不外洩，對應 GDPR/DPA。
- **備份 / 災復**：確保 RTO/RPO。
- **弱點掃描（Nessus / OpenVAS / ZAP）**：ISO 控制項必備證據。
- **滲透測試**：高要求產業常見。
- **社交工程演練 / 教育訓練**：文化與落地的必要動作。
- **雲端安全（CSPM / CASB）**：雲使用普及後的加點。

> 記住：**ISO/ISMS 是任務線，裝備是破關條件**。

---

## 小錢辦大事：先用布甲活下去，再視情況換鐵裝

### 1) 自己管理（先不上託管）：端點防護的起手式

**做法**

- 先上 **EDR 授權**（許多防毒已內建 EDR 能力），由內部處理告警。
- 建立 **最小事件流程**：告警分級 → 快速隔離 → 情資回饋到防火牆封鎖。

**為什麼這樣做**

- **成本友善**：不上 MDR，費用可降一大截。
- **可交付稽核證據**：EDR 安裝覆蓋率、告警處理紀錄、隔離與封鎖憑證。

**何時升級到 MDR**

- 月均告警量 > 你的小組處理能力（例如每人每日>10 則需分析）。
- 需要 **7×24** 監控或客戶硬性要求。
- 曾發生延遲回應導致擴散的事故。

---

### 2) 開源自建 SIEM：用 Wazuh 先把盤子端起來

**定位**

- Wazuh 是常見的開源 **SIEM / XDR** 解法之一，適合預算有限但願意投入時間的團隊。

**優點**

- 省授權費、彈性高，可整合 EDR / Firewall / OS 日誌與弱掃結果。
- 能快速做出 **關聯規則 + 儀表板**，稽核時有畫面與告警證據可交。

**注意事項**

- **門檻**：主機資源、佈署（Server/Agent）、索引/儲存維運與規則調校。
- **人力**：要有人寫/調規則、控噪音、維持可靠度。

---

### 3) 自建：社交工程演練與員工教育訓練

**策略**

> Gofish 開源軟體 簡報自己做，勒索軟體、釣魚郵件、電腦資安

- 題材自己產出：釣魚郵件（假通知、假加班單）、勒索案例分享、軟體下載風險。

**優缺點**

- **優點**：成本近乎零、貼合公司情境、可快速迭代。
- **缺點**：耗時、需準備內容與管控投遞風險（避免影響營運）。

**可交付證據（稽核超好用）**

- 投遞名單與郵件樣本、點擊率/回報率統計、教育簽到與測驗分數、跟進改善清單。

---

## ISO 27001 是任務系統：把技術、流程、人串成主線

ISO/ISMS 不是「再買一個工具」，而是**讓所有裝備有章可循**：

---

## 結語

資安沒有「一套最強裝備」，只有「**當下最合適**」的組合。 先用 **布甲起手** 撐起基本盤。當量能與要求提升，再逐步升級鐵裝——**這才是可持續進化的養成路線**。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10374848
`,JP=`### 畢業後正式踏入資安職涯：Firewall，新手的第一道防線

畢業後正式踏入資安職涯，迎來的第一份正職工作。剛坐下還沒熟悉環境，主管就直接開口：

> 「你會看 Firewall 嗎？」

![/blog-assets/ithome-2025/20171891IQeBuzI90Q.jpg](/blog-assets/ithome-2025/20171891IQeBuzI90Q.jpg)

當下愣了一下，還沒來得及回答，桌上就多了一本厚到嚇人的 Palo Alto 防火牆操作手冊。 **幾百頁的設定、策略、規則說明**，瞬間像是 RPG 遊戲剛創角就被發了一本「防禦指南」。

> 只差沒附註：**請三天內看完。**

![/blog-assets/ithome-2025/20171891bGli5r07gP.png](/blog-assets/ithome-2025/20171891bGli5r07gP.png)

---

## 為什麼 Firewall 是第一道防線？

因為**防火牆就是公司的第一道防線**。 不論是駭客掃描、惡意流量，還是內網員工誤觸奇怪連結，第一個擋下來的就是它。 如果把資安比作城堡，Firewall 就是那道厚重的城門：

- 沒它，城門洞開。
- 配不好，誤擋正常流量，員工立刻抗議。
- 配太鬆，資安事件隨時爆。

---

## 新手的挑戰

對剛入行的新鮮人來說，看防火牆 log 就像看天書；在學校大概知道有哪些名詞，但把「書面」變「實戰」真的不簡單：

- **來源 IP／目的 IP**：一串數字，還要判斷是內部、外部，或是可疑來源。
- **Port number**：常見的 80（HTTP）、443（HTTPS）、53（DNS）還好；遇到冷門 port 就得查清楚是什麼服務、是否為業務需求。
- **Application（App-ID）**：不只 HTTP、DNS，還會辨識各式陌生應用，甚至遊戲與串流流量。
- **Security Rule**：每條 policy 都像一名守衛；你得知道它為什麼放行、為什麼阻擋、由誰建立。
- **NAT**：內外 IP 映射讓流量像披了斗篷，不小心就追錯對象。

最折磨的是——廠內還有一堆陌生機台，協定冷門、流量古怪，第一眼根本看不懂。於是你一邊翻「怪物圖鑑」一邊學判怪：哪些是「正常村民」的日常流量，哪些是「可疑怪獸」在伺機而動；就像在圖鑑上標註弱點一樣，養成快速識別潛在威脅的本能。

---

## 心得

回頭看，那本厚厚的 PA 手冊（Palo Alto Networks），不只是產品說明，而是我在資安職涯遇到的**第一個大魔王**。 熬過去之後，懂得怎麼下規則、怎麼看日誌、怎麼追封包，這些能力後來成了所有工作的基礎。

第一道防線雖然無聊又繁瑣，但就像**新手村的必修關卡**——不練好，後面的大 Boss 根本打不下去。 打敗大魔王後，技能樹彈出一排亮光，**就像打通任督二脈，內力開始源源不絕地流動**。

而 Palo Alto 作為大廠牌，設定相對複雜，卻也因此成為最好的磨刀石。 學會這一套後，再去碰其他防火牆（Fortinet、Check Point、Cisco FTD/ASA），就像換副武器一樣，很快就能上手。

---

> 這個系列沒有固定進度表，都是當天想到什麼就寫什麼。 本來今天想談 ISMS，但還是決定按戰鬥流程從 Firewall 開始。 歡迎分享你的新手經歷，一起交流！

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10375208
`,eT=`在資安工程師的世界裡，敵人不只有勒索病毒、APT、釣魚信…… 還有一種藏在辦公室抽屜、共用槽的恐怖怪物：

**「ISMS 文件」**。

如果把防火牆當作是鐵甲、EDR 當作神器， 那 ISMS（資訊安全管理系統）就是一本「**葵花寶典**」。 只不過這本就像尚未自宮前的無字天書，是**厚到能壓死人**的一疊政策、流程、紀錄表單。

![/blog-assets/ithome-2025/20171891H2Ajv5O8hb.jpg](/blog-assets/ithome-2025/20171891H2Ajv5O8hb.jpg)

---

## 前言：劇情背景

在我們公司，以前的 ISMS 文件全都塞在一階「資訊安全政策」裡， 就像遊戲剛開服時，只有一張大地圖，任務全擠在告示板上。

但隨著法規和客戶審查壓力越來越大，高層突然下令：

> 「把整套 ISMS 補齊！」

於是，身為新手資安工程師的我，正式踏上了這條修煉之路。

---

## 初遇：文件海的第一口鹹水

於是我想知道，到底「補齊」要補什麼，就決定深入研究 ISMS。 結果一翻才發現，原來不止一階，還有二階、三階、四階…… 瞬間就像誤觸彩蛋副本，越看越覺得自己等級不夠。

我一臉黑人問號：

> 「這是……啥？一階、二階、三階、四階文件？ 感覺要打到王城才看得懂的東西？」

- 角色等級：Lv.1 新手工程師
- 任務列表：Annex A 上百條控制措施
- 任務說明：一行行專業名詞（資產分類、風險評鑑、供應商安全）
- 任務道具：堆滿資料夾的 Word + Excel 表單

很快我就悟了： **這不是「讀完就懂」的文件，而是「看不懂才正常」的文件。**

---

## 文件怪物圖鑑

玩了一陣子後，我才發現文件其實分成四階，就像副本由大到小：

1. **政策（Policy）** – 主線劇情。公司高層大喊：「我們要保護資訊安全！」
2. **規範（Standard / Guideline）** – 裝備圖鑑。密碼要幾碼？權限怎麼分？
3. **程序（Procedure）** – 副本任務。事件發生時，誰要補血、誰要拉怪。
4. **紀錄（Record）** – 存檔紀錄。打王了？請截圖簽名，沒有證據一律不算。

---

## 第一次挑戰的痛點

1. **字太硬** 條文滿滿「應、需、必須」，讀起來比武功祕笈還難懂。 看到「應實施風險評鑑」時，我腦袋浮現的不是方法，而是：「這是謎題嗎？提示呢？」
2. **看不出關聯** 文件寫「定期審核存取權限」，我一開始以為那是 HR 的工作，結果後來才懂： 它跟我每天查的 log 直接掛勾。
3. **填表焦慮** 《資產盤點表》、《風險評鑑表》一拿到就想 Alt+F4。 想像一下，要為每台電腦寫價值和威脅，半夜還在糾結：「這台舊筆電算高風險嗎？萬一被偷呢？」
4. **補齊壓力** 發現我們缺二、三、四階文件，感覺像被告知： 「副本還有三章沒解鎖，請玩家自行補劇情。」 寫太嚴 → 每天自己卡關；寫太鬆 → 稽核員直接秒殺。 到最後才懂，這些文件如果沒拿捏好，不是防護盾，反而會變成自己設下的陷阱。

---

## 小攻略：如何不被文件秒殺

- **先看大地圖，不要迷路** → 把「P-D-C-A 循環」記熟：Plan＝風險評鑑、Do＝執行程序、Check＝審核紀錄、Act＝改善政策。 就像遊戲的循環任務系統，懂這個才不會迷路。
- **把文件對應到日常工作** → 防火牆 Log 保留一年 → Annex A.12.4。 → 開啟 MFA → Annex A.9.4。 → 設定 EDR 事件回應 → 對應「事件處理程序」。 這樣一來，文件不再只是紙上談兵，而是你的日常任務手冊。
- **別一口氣硬啃** → 文件太厚，像打大型副本，得拆章節慢慢推。 先從自己負責的區域開始，例如「網路安全」，推完再挑戰「人員安全」。 而且可以「回溯舊副本」：遇到新情境，反推回去補一個政策／程序，讓系統更完整。

---

## 結語：地獄，其實是新手教學

第一次看 ISMS 文件，真的像掉進地獄副本。 但後來才懂：它不是要嚇死你， 而是提醒你：

**資安不是只有裝備（工具），還要有規則（制度）和紀錄（證據）。**

就像打遊戲不能只有手速，還要會看地圖； 同理，資安工程師不能只有防毒和弱掃，還要能看懂政策文件。

因為最後 Boss 不是駭客，而是—— **稽核員（GM = Game Master，線上遊戲裡專門抓外掛、檢查你有沒有照規矩玩的管理員）。**

---

> 準備迎來這篇系列，第一個假日.. 這假日還要回老家，希望能夠可以完賽

---

原文連結：https://ithelp.ithome.com.tw/articles/10375130
`,nT=`我每次 Python 寫的程式都被 EDR 擋住 :D 還有一些機台軟體，每次安裝都會被隔離，有時候還誤以為「安裝失敗」，結果白白浪費好幾個小時在 debug。 這就是所謂的——神器雖好，但用起來一樣會先誤傷自己。

在資安工程師的領域中，除了防火牆這種鐵甲之外，還有一種更高階的裝備： **EDR（Endpoint Detection & Response）**。

如果防毒是站在門口的保全，專門認人臉、擋已知壞人； 那 EDR 就像是帶著放大鏡的警探，會盯著端點的一舉一動， 不只擋住可疑行為，還會幫你回放「犯案過程」，甚至一鍵把嫌犯抓起來。

---

## 為什麼有了防毒還需要 EDR？

> 防毒軟體就像舊時代的鎖頭，只能擋「已知小偷」。 但駭客不會乖乖排隊，他們會換裝、變身、用新招。 **EDR 能監控可疑行為、追蹤入侵路徑、事後還能復盤**，補上防毒缺不了的那一塊。

防毒負責「已知惡意檔案」，EDR 則補上「未知行為偵測 + 即時回應」。 兩者搭配起來，才能真正做到事半功倍。

---

## 初次使用體驗：神器也會亂叫

第一次部署 EDR，感覺很像拿到一把高階武器——帥氣，但也很吵。 因為一打開，它就瘋狂丟警報：

- **某主機執行可疑 PowerShell 指令**
- **某使用者開啟了不明巨集**
- **某電腦連上怪怪的 IP**

警報一多，我email完全不想打開...

更慘的是，當我在寫 Python 自動化腳本， 或工程師在安裝機台軟體時， EDR 常常誤判成惡意行為，把程式直接擋掉。 結果我們還得花時間排查：「到底是安裝失敗？還是 EDR 又出手了？」 這就是 EDR 的副作用——神器沒調教，先誤傷自家隊友。

---

## 技能樹解析

> 只用一家EDR，但我知道現在EDR有些會整合很多功能 以下是網路上的一些資料，有說錯再麻煩糾正:D

EDR（Endpoint Detection & Response）的核心功能通常圍繞端點上的持續監控、威脅識別與處置。以下是主要功能解析，基於標準定義並擴展用戶提及的沙箱與 USB 管控功能。這些功能並非所有 EDR 解決方案皆完全相同，視供應商而異，但以下為常見分類：

1. **偵測（Detection）** 識別端點上的異常行為，例如可疑 PowerShell 指令、Python subprocess 模組使用，或不尋常的網路連線。這通常透過行為分析、簽章比對和機器學習實現，目的是及早發現已知或未知威脅。
2. **回應（Response）** 自動或手動處置偵測到的威脅，例如隔離受感染主機、封鎖惡意程式，或終止可疑進程。這有助於快速遏止攻擊擴散。
3. **調查（Investigation）** 提供事件完整時間線和詳細記錄，包括檔案修改、進程呼叫和網路流量分析。像重播入侵過程，讓資安團隊還原攻擊路徑並收集證據。
4. **威脅獵捕（Threat Hunting）** 主動搜尋潛在風險，使用自訂查詢語法（如 IOC 指標）調查環境，例如針對異常 Python 環境或潛伏惡意程式進行深入掃描。

EDR 的功能不僅限於以上四項。許多現代 EDR 解決方案還整合額外能力，以提升防護效能。例如：

- **沙箱分析（Sandboxing）**：這是用戶提及的功能，用來將可疑檔案或程式隔離在虛擬環境中執行，觀察其行為是否惡意，而不影響實際端點。有些 EDR（如 Cisco Secure Endpoint 或 Bitdefender GravityZone）內建或雲端沙箱，能自動上傳檔案進行測試，偵測零日攻擊或進階持續威脅（APT）。 然而，沙箱並非所有 EDR 的標準核心功能，而是常見的擴展，尤其在與 EPP（Endpoint Protection Platform）結合時出現。
- **USB 管控（USB Device Control）**：這是用戶提及的額外功能，用來監控和管理 USB 裝置的存取權限，防止資料外洩或惡意裝置插入。許多 EDR 解決方案提供 USB 管控，能設定讀寫權限、封鎖特定裝置，或記錄 USB 使用行為，以強化端點安全並符合合規要求。 這功能通常可按裝置 ID、供應商或類型進行細粒度控制，適用於 Windows 等作業系統。
- **檔案隔離與還原（File Isolation and Remediation）**：自動隔離可疑檔案，並提供一鍵還原或刪除功能。
- **整合 AI/機器學習**：用於預測性偵測，減少誤報率，例如優化對 Python 等開發工具的判斷。
- **端點隔離與網路控制**：不僅封鎖程式，還能斷開端點網路連線，防止橫向移動。

## 神器要配合，才不會反噬

EDR 的確是神器，但如果不懂調整，它只會變成一把會亂叫的裝備。 真正能駕馭它的人，才算是從新手村畢業。

因為資安的戰場不是只有病毒， 還有那些會偽裝成「正常使用者」的怪物。 所以——**防毒負責守門，EDR 負責破案，兩者搭配才能事半功倍。**

> 假日寫得有點水:D

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10375289
`,tT=`本來以為進公司，掛上「資安工程師」這個名號後，我的世界就是防火牆、EDR、弱點掃描，跟駭客在暗網對決。 結果現實卻是：**IT 部門人少，很多雜事也會落到我身上。**

> 假日，寫一篇單純工作心得?

---

## 🎭 多重身份切換

- 早上 9:00 → 幫忙看 ERP Server 卡住，重啟服務。
- 上午 10:30 → User Line 我：「我電腦怎麼又不能連印表機？」
- 中午 12:00 → 正在吃飯，接到電話：「Wi-Fi 斷線，產線要刷卡不能進。」
- 下午 14:00 → 資安角色上線，跑 Nessus 弱點掃描，結果發現 Windows Patch 一堆沒補。
- 下午 15:30 → 突然被叫去查 AD 帳號權限，順便新增DNS設定
- 晚上 18:30 → 正準備下班，Teams 叮一聲：「這台電腦怎麼開不了，能不能來看一下？」

瞬間感覺自己像在演《奇異博士》，不斷在不同宇宙間切換身份。

---

## IT & 資安的模糊邊界

在中小企業，IT 和資安往往沒有明確界線。 有時候我一邊在思考 ISO 27001 條款，下一秒就蹲在地上幫人插網路線，或打開 DNS Manager 幫忙調 Zone Record。 甚至同事看到我走過來，第一句話常常不是「你最近在跑什麼專案？」 而是：「欸，你有沒有空？我的電腦怪怪的。」

---

## 自嘲的技能樹

如果把我的工作畫成遊戲技能樹，大概會是這樣：

- **資安主線任務**：弱掃、補丁、SIEM、EDR
- **IT 支線任務**：印表機排障、Wi-Fi 維護、ERP babysitter、AD & DNS babysitter
- **隱藏成就**：幫同事解釋為什麼 Teams 開不了，然後順便推廣資安意識

---

## 總結

雖然偶爾會覺得「這真的是資安工程師該做的嗎？」 但也因為這樣，我更了解整個 IT 環境的底層細節。

> 假日就產出不多:D 明天繼續努力

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10375678
`,rT=`想像一下：你的船在風平浪靜時就開始漏水——你會怎麼辦？在資安的世界裡，公司就像一艘航行中的大船，弱點就是那些你看不見的裂縫。不先檢查，等到海水灌進來，可能就來不及了。也因此稽核、法規、甚至客戶審查，總會要求：**「你們要定期做弱點掃描！」**

---

## 為什麼要弱點掃描？

很多人以為弱點掃描只是「檢查一下有沒有漏洞」。但在資安工程師眼裡，它其實有幾個關鍵任務：

1. **稽核必備**：ISO 27001 與各式資安/合規要求，都要能證明「我們有持續檢測並改善」。
2. **風險評估**：先知道洞在哪，才能在年度風險評鑑裡說清楚、排得出優先順序。
3. **決策依據**：報告是給主管/老闆評估是否投入資源用的（最後通常還是自己補 ）。
4. **成本控制**：事前修補的成本，通常遠低於事件爆發後的處置與商業損失。
5. **意識提升**：以報告帶動跨部門的安全討論與改善文化。

這些要素環環相扣，讓弱點掃描不只是例行公事，而是防禦體系的核心。

---

## 弱點掃描的分類

弱點掃描依「面向」分門別類；就像看診，要看骨頭會拍 X 光，不會去做胃鏡。

- **Web 弱掃**（OWASP ZAP、Burp Suite、Acunetix）： 專攻網站應用程式，找 SQL Injection、XSS 等問題。
- **網路／系統層弱掃**（Nessus、OpenVAS／GVM、Qualys/VMDR）： 從 OS、開放 Port、服務版本、組態下手，一次掃滿整個網段。
  > **Nessus 定位**：主力在主機/網路層；具備基礎 Web/CGI 檢查，但若要做完整 Web 掃描，建議用專業 DAST（ZAP／Burp／Acunetix），或採用 **Nessus Expert 的 WAS 模組／Tenable WAS**。
- **端點弱掃**（EDR／Agent）： 檢查電腦與伺服器的修補狀態與已知漏洞。
  > 現在有些 EDR 甚至能直接派送修補的 Patch。

快速對照表：

| 掃描類型 | 適用環境 | 推薦工具 |
| --- | --- | --- |
| Web 弱掃 | 有對外網站服務 | OWASP ZAP、Burp Suite、Acunetix |
| 網路層弱掃 | 內網有大量 Server | Nessus、OpenVAS／GVM、Qualys/VMDR |
| 端點弱掃 | 擔心用戶端未更新 | 各類 EDR／Agent 型工具 |

- 有對外網站服務 → **Web 弱掃必跑**（例行可用 ZAP，需要更完整可用 Acunetix／Tenable WAS）。
- 內網一堆 Server → 用 **Nessus／GVM** 或 **Qualys** 做盤點與定期掃描。
- 擔心員工電腦沒更新 → 用 **端點掃描**補刀。

**開源起步**：**ZAP**、**Greenbone Community（GVM 社群版）** 安裝不難、教學多、可輸出報告；成本低、社群活躍，很適合小團隊自建。

---

## 外包勇者 vs 自建工匠

公司決定要做弱點掃描後，接著就是經典二選一。不管哪種選擇，共通痛點都是：**報告再漂亮，修補還是得自己做**（除非另購代修服務）。

**外包勇者**

- **特點**：交給資安廠商，拿回厚實完整的 PDF 報告。
- **優點**：專業度高、報告精美，稽核官一看就懂。
- **缺點**：價格不菲；若未加購代修，仍需自家團隊落地修補。

**自建工匠**

- **特點**：自己買 **Nessus Pro** 或搭 **GVM** 規劃週期與範圍；也可採用雲端掃描平台（如 **Qualys/VMDR**）但由你們自行規劃與執行。
- **優點**：彈性大、頻率可控，成本通常較低。
- **缺點**：需投入人力維護工具與流程；修補依然在自己身上。
  > 類似先前說的「布甲 vs 鐵裝」：**GVM**、**ZAP** 都是免費開源，安裝不難、教學很多，也能輸出報告；新手跟著官方文件或 YouTube 教程就能上手。

無論選勇者還是工匠，最後都會發現：**報告只是序章，真正的挑戰在於「補」**。

---

## 結語：補洞才是真正考驗

弱點掃描像遊戲裡的「地圖探索」。找到紅點不難，難的是**誰要衝進去打怪、誰來收拾戰場**。

很多公司停在「我們有做掃描」這一步，卻忘了下一關才是關鍵：

- 排定修補時程
- 依風險分級決定優先順序
- 定期回報改善紀錄

弱點掃描看似帥氣，但資安工程師最常掉的血，不是在掃描那一刻，而是在**加班Patch**的過程。等系統穩穩的，你會發現：一切都值得。繼續你的資安冒險吧！

---

原文連結：https://ithelp.ithome.com.tw/articles/10375763
`,iT=`> 原本以為微軟不就 **Word、Excel** 而已？ 公司導入 M365 才發現：微軟的 **Security** 其實很全。 先聲明我沒買它股票（笑），但也必須說：**全＝好複雜(上手難)**。 有講錯再請修正啦~

> 明天會講微軟的**Zero Trust**到底在搞甚麼!

## Microsoft Security 家族速覽

- **Microsoft Entra**：身分與網路存取（Entra ID、MFA、CA、PIM、Identity Protection…）
- **Microsoft Defender**：威脅防護 / XDR（Defender for Endpoint / Office 365 / Identity / Cloud Apps、Defender for Cloud、Defender for IoT、EASM…）
- **Microsoft Intune**：端點與 App 管理（合規、MAM、端點安全原則，與 MDE/CA 聯動）
- **Microsoft Purview**：資料保護與合規（敏感度標籤、DLP、eDiscovery、Audit、Records、Insider Risk）
- **Microsoft Sentinel**： **SIEM + SOAR**
- **Microsoft Priva**：隱私與個資請求（DSR、隱私風險）
- **橫向能力**：**Secure Score / Defender XDR / Security Copilot**（態勢、事件關聯、AI 協助）

## 主要 M365 安全性方案分類

身分識別與存取管理、防護（威脅防禦）、資訊保護、端點安全，以及雲端安全性。

---

### 1) 身分識別與存取管理（門口保全）

- **Microsoft Entra ID（原 Azure AD）**：公司大門的門禁系統。管帳號、群組、應用授權；開啟 **MFA**、**條件式存取（CA）**、**封鎖舊式驗證**（POP/IMAP/SMTP AUTH/Basic），才像真的有保全在看門。
- **Entra ID Protection（風險式原則）**：偵測異常登入（異地／非常用裝置／已知洩漏帳密），必要時自動提高驗證強度或直接阻擋。＊
- **Privileged Identity Management（PIM）**：高權限 **Just-In-Time**（臨時升權＋審批＋逾時收回），讓全域管理員不常駐。＊
- **Passwordless**：Microsoft Authenticator、**FIDO2**、**Windows Hello for Business**，把密碼退居備援。
- **SSPR／Access Reviews**：**自助重設密碼**與**存取複核**，把帳號生命週期與權限健檢自動化。

> 上面這些都是 **Entra ID** 的內容；基礎沒打好，後面所有 M365 安全都進不去。依公司架構（純雲、混合 AD、B2B 協作）設計基線，別忘了 **兩個 break-glass 帳號**（長密碼、監控、從 CA 排除）與**全域封鎖舊式驗證**。 ＊註：Entra ID Protection／PIM 等屬進階功能，通常需要 **P2** 授權。

![/blog-assets/ithome-2025/20171891QaAr1hc8Lf.png](/blog-assets/ithome-2025/20171891QaAr1hc8Lf.png)

---

### 2) 威脅防護（城牆＋陷阱）

> Q：**Microsoft Defender 跟家用的是一樣的嗎？** A：不一樣。家用的「Microsoft Defender」是**個人/家用防護 App**；下面列的是**企業級 Defender 家族**（for Endpoint/Office 365/Identity/Cloud Apps…），有 **EDR、威脅情報、進階獵威、事件關聯** 等企業功能與管理主控台（security.microsoft.com）。

- **Microsoft Defender（企業）**：一套可串聯的防線，從**端點 → 信箱/協作 → 身分 → 雲端 App** 接力應戰。
- **Exchange Online Protection（EOP）**：信件進租戶的第一道關卡，**內建反垃圾／反惡意** 的基礎過濾。
- **Defender for Office 365（MDO）**：信箱與協作的保鑣；**Safe Links／Safe Attachments**、進階反詐騙，補上釣魚與**零時差（0-day）**。
- **Defender for Endpoint（MDE）**：端點 **NGAV + EDR**，外加 **ASR（攻擊面縮減）**、弱點曝險/修補建議、隔離與自動修復。
- **Defender for Identity（MDI）**：專盯 **On-prem AD** 的側門攻擊（Pass-the-Ticket、橫向移動等），像在走道埋紅外線。
- **Defender for Cloud Apps（CASB）**：雲端應用的交通警察；**Shadow IT** 探勘、OAuth App 風險、即時會話控管（可搭**條件式存取**）。

> 補充：**信箱的「垃圾信/惡意信」基礎防護主要由 EOP 負責；Defender for Office 365 是在 EOP 之上提供進階釣魚與 0-day 防護。**

## ![/blog-assets/ithome-2025/20171891WRgLvFHTaZ.png](/blog-assets/ithome-2025/20171891WRgLvFHTaZ.png)

---

### 3) 資訊保護（倉庫鎖＋盤點表）

- **Microsoft Purview**（資訊保護 + DLP + 治理 + 合規）：
  **資訊保護（敏感度標籤／加密）**：在文件與郵件貼「內部／機密」等標籤，可強制加密、限制轉寄/外傳，亦可條件式自動套用＊。
- **資料外洩防護（DLP）**：偵測信用卡/個資等敏感資訊並採取動作（警告、封鎖、加密）；涵蓋 Exchange、SharePoint、OneDrive、Teams，亦可延伸到端點＊。
- **治理與合規**：保留/刪除原則與記錄管理（Records）、審核追蹤（Audit）、電子蒐證（eDiscovery）、通訊稽核與**內部風險管理**（Insider Risk），讓「誰、何時、對什麼做了什麼」有跡可循。

＊註：部分進階功能（如自動標籤、Endpoint DLP、eDiscovery Premium、Insider Risk）需較高階授權。

![/blog-assets/ithome-2025/201718910zAiHjnhoM.png](/blog-assets/ithome-2025/201718910zAiHjnhoM.png)

[微軟 Purview 文件](https://learn.microsoft.com/zh-tw/purview/purview)

---

> 再來幾天稍微講一下各別產品是在做啥吧?

---

原文連結：https://ithelp.ithome.com.tw/articles/10375925
`,oT=`### 前言

> 講到 ZT（Zero Trust），就會想到大學時期的大專生計劃，我還拿這個當主題，但後來沒過

昨天說到 M365 不只是辦公室套件，今天要聊聊現在最流行的資安策略：**Zero Trust（零信任）**。 一句話總結：**「永不信任，始終驗證」**

![/blog-assets/ithome-2025/20171891gAGsA9HlG5.jpg](/blog-assets/ithome-2025/20171891gAGsA9HlG5.jpg)

---

### 1. 什麼是 Zero Trust？

- 不是單一產品，而是一套 **安全理念＋實作方法論**。
- 三大原則：
  **明確驗證（Verify explicitly）** → 每次登入都要檢查身份、裝置狀態、地點、異常行為。
- **最低權限存取（Least privilege access）** → 用到什麼權限就給多少，Just-in-time / Just-enough。
- **假設有缺口（Assume breach）** → 預設系統已經被滲透，重點是降低橫向移動的風險。

---

### 2. Zero Trust 的六大支柱

零信任拆成六大面向，組合起來就像一個完整的安全堡壘：

![/blog-assets/ithome-2025/20171891fc37LuSgR7.png](/blog-assets/ithome-2025/20171891fc37LuSgR7.png)

1. **身分（Identities）** → 誰在存取？帳號驗證、MFA、風險評估。
2. **端點（Endpoints）** → 從哪台裝置來？裝置合規性、Defender for Endpoint 偵測風險。
3. **應用程式（Applications）** → 存取哪些系統？SSO、Shadow IT 管控、條件式存取。
4. **資料（Data）** → 保護公司最重要的資產，Purview 敏感度標籤、DLP、自動加密。
5. **網路（Network）** → 確保傳輸過程安全，微分段、全流量加密、ML 偵測。
6. **基礎設施（Infrastructure）** → 後端伺服器與雲端服務，JIT 權限、異常行為即時阻擋。

---

### 3. 為什麼微軟版本的 Zero Trust 特別？

- 現代工作環境已經不再有「安全邊界」這種東西： 遠端上班、個人筆電、手機、跨組織協作，全部都是風險點。
  > 想想疫情的時候，大部分的人都居家上班 台 X 電，資料就是遠端時候被拍照！
- 微軟的優勢在於：它手上握有 **Entra ID（身份）、Intune + Defender for Endpoint（端點）、M365 全家桶（應用）、Purview（資料）**，幾乎能把六大支柱全部串起來。
- 簡單講：**你的帳號、電腦、郵件、雲端文件，微軟都有工具幫你驗證與控管。**

![/blog-assets/ithome-2025/20171891oVDsOSVmud.jpg](/blog-assets/ithome-2025/20171891oVDsOSVmud.jpg)

---

### 4. 零信任成熟度模型

零信任不是一蹴可幾，而是有不同的階段。分成 **傳統、進階、最佳** 三種層次，套用到六大支柱來看：

#### 身份（Identity）

- **傳統**：地端 AD，沒有 SSO，風險看不到。
- **進階**：混合身分、MFA、BYOD 也能套 DLP。
- **最佳**：即時風險分析，走向無密碼驗證（FIDO2、WHfB）。

#### 端點（Endpoint）

- **傳統**：電腦要插公司網路才算安全。
- **進階**：Intune、條件式存取檢查合規性。
- **最佳**：Defender for Endpoint 監控風險，異常就封鎖。

#### 應用程式（Applications）

- **傳統**：VPN 或內網存取。
- **進階**：雲端應用 SSO，開始管 Shadow IT。
- **最佳**：最低權限 + 持續驗證。

#### 基礎設施（Infrastructure）

- **傳統**：權限人工分配，VM 分散管理。
- **進階**：工作負載監控、JIT 權限。
- **最佳**：自動化存取分段，異常即時阻擋。

#### 網路（Network）

- **傳統**：內網平坦，流量未加密。
- **進階**：微分段、內網加密。
- **最佳**：全流量加密 + ML 偵測可疑流量。

#### 資料（Data）

- **傳統**：只靠邊界控制，檔案離開公司就失控。
- **進階**：敏感度標籤、DLP。
- **最佳**：AI 自動分類，標籤 + 加密 + 追蹤共享。

**換句話說，從「誰都能進公司大門」 → 「有守衛＋刷卡」 → 「還要人臉辨識＋AI 偵測你是不是在裝乖」的進化。**

---

> 越寫越像業配了…😅 不過微軟的好處就是：工具都在 M365 裡，剩下的就是你該如何去整合。 **「零信任不是不相信同事，而是幫大家多一層保險。」**

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10376085
`,sT=`## 前言

昨天講了 Zero Trust 的六大支柱，今天要挑一個大家最有感的：**資料（Data）**。 因為對公司來說，伺服器壞了可以重建，但 **資料外洩** 可能直接 GG。

> 這邊先聲明，我今天不是要聊什麼 3-2-1 備份法（3 個備份、2 種不同媒介、1 個異地保存），改天有機會再分享。今天的主題不是「怎麼救回資料」，而是「怎麼防止資料飛出去」。

想像一下：

> 一封 Excel 被傳到外部，裡面有上萬筆客戶電話與身分證字號。 你覺得新聞標題會寫「電腦壞掉」？還是「XX 公司洩漏個資」？

再想一個場景：

> 公司沒有禁止員工使用 Line、Google Drive、Gmail。 一名快離職的員工，被挖角時需要帶走設計圖，他只要一個滑鼠拖曳，就把檔案丟進 Line，**公司可能瞬間損失數千萬**。

在 Zero Trust 框架中，「資料（Data）」支柱強調 **分類、加密、可控**，而 DLP 就是實現這一點的關鍵工具。根據最新報告，2025 年 AI 驅動的攻擊（像是深偽、或自動化資料竊取）讓資料外洩風險增加了 15%。這意味著公司更需要關注「資料在移動中的保護」。

---

## 為什麼需要 DLP（Data Loss Prevention）？

DLP 的核心目標：**避免資料外洩、濫用或流向錯誤的人**。

近年來的統計數字：

- 一家公司因為資料外洩，平均損失超過 **400 萬美元**（全球平均約 444 萬美元，美國更高達 1022 萬美元）。
- 完全復原平均需要 **100 天以上**（實際平均識別 + 遏止時間約 277 天）。
- 而且只有不到 **1/5 的企業能真正恢復**（接近報告中的 12% 完全恢復率）。

這些數字背後，代表的不只是 IT 成本，而是 **商譽與客戶信任的流失**。

造成外洩風險的幾個趨勢：

- **邊界消失**：資料已經不只在內網，還散落在雲端、手機、筆電。
- **遠距辦公普及**：疫情後，檔案經常被存取在私人設備。
- **法規壓力**：GDPR、個資法、ISO 27001:2022 都要求「證明你有保護機敏資料」。

> 甚至連客戶都會有相關規定，要保護他們資料

而實務上，DLP 的落地往往分為四個階段：

1. **通知（Notification）** → 提醒員工有風險，培養正確行為。
2. **可視性（Visibility）** → 盤點哪些資料最敏感、流向何處。
3. **阻止（Prevention）** → 在風險發生時，主動擋下來。
4. **修復（Remediation）** → 調整流程，避免再次發生。

常見風險場景：

- 員工寄信夾帶機密檔案到 Gmail
- USB 隨手插，整包資料 copy 帶走
- 用 ChatGPT / 外部網站貼了公司內部程式碼
- 離職員工還能登入下載舊資料

2025 年的新趨勢：**「影子 AI」**（未經授權的 AI 工具使用），導致資料外洩事件增加 20%，因為員工常不小心將機敏資料輸入 ChatGPT 等外部平台。這跟前陣子 **Grok 4 外洩事件**、早期 GPT 被濫用的案例，都說明了 **AI 場景下的 DLP 更關鍵**。

---

## 市面上常見的 DLP 型態

DLP 大致可分成三個面向，每一種都有應用場景與限制：

1. **一般型 DLP**
  - 特點：管控 USB、郵件、印表機等資料流通途徑。
  - 應用：最貼近傳統 IT 環境，覆蓋面廣。
  - 挑戰：政策需要長時間訓練與調整，容易誤判。
    > 有時候只是想寄個午餐菜單，卻也被擋下來。
2. **雲端整合型 DLP**
  - 特點：與雲端郵件、雲端硬碟、協作平台緊密整合。
  - 應用：適合大量使用 SaaS 的組織，政策可跨平台套用。
  - 挑戰：依賴雲端供應商功能更新，政策彈性受限。
3. **輕量型 DLP（DLPP / 在地方案）**
  - 特點：偏重浮水印、檔案追蹤、操作記錄。
  - 應用：符合稽核與合規需求，重點在「有跡可循」。
  - 挑戰：較偏重內部資料流向，對跨境、跨平台管控有限。

不論是哪一種，**最難的不是工具，而是內部如何定義什麼才算「機敏資料」**。

另外值得注意：Email 仍是資料外洩的主要管道（佔超過 30% 事件），因此「郵件 DLP」常被獨立出來。近年也有更多方案開始與 **SASE（Secure Access Service Edge）** 結合，讓 DLP 可以涵蓋跨境雲端流量，成為完整的安全架構一環。

---

## 現在 DLP 的通用能力

現代 DLP 已經不只是關鍵字比對，而是結合更多技術來降低誤判與漏判，例如：

- **精確資料比對（Exact Data Matching, EDM）**：把資料庫裡的客戶名單轉成「指紋」，比對外洩內容是否一致。
- **文件指紋（Document Fingerprinting）**：上傳一份範本（例如合約），即使檔案被改寫也能偵測出來。
- **光學字元辨識（OCR）**：分析影像、PDF、截圖，把裡面的文字抽取出來。
- **使用者行為分析（UEBA）**：不是只看檔案，而是觀察「人」的行為（例如員工半夜大量下載檔案 → 風險分數拉高）。
- **AI/ML 分類**：利用機器學習自動判斷異常模式，把誤報率降到 5% 以下。

這些能力已經成為 **業界 baseline**，換句話說，如果一套 DLP 工具連 OCR、行為分析都沒有，就很難稱得上是「新一代方案」。

---

## DLP 的落地挑戰

- **誤判 vs 漏判**：太嚴格會影響員工工作，太鬆又擋不住。
- **教育問題**：員工常抱怨「為什麼我要多點這一步？」。
- **整合難度**：傳統 DLP 偏地端，但現代人手一支手機，行為難以全面限制。

例如：員工用 **私人手機拍照帶走設計圖**，這是傳統 DLP 完全無法偵測的。 因此許多公司會先導入 **浮水印／追蹤型方案**（如 IST），至少先做到「有跡可循」，再慢慢推進完整 DLP。

報告顯示，2025 年遠距辦公導致 **45% 外洩來自個人設備（BYOD）**。這也呼應 Zero Trust 的精神：DLP 必須與 **身分驗證、裝置合規** 整合，才能真正落地。

---

> 防火牆擋住的是「外面的人」， DLP 要擋的，卻是「裡面的人」。 而在 2025 年，DLP 也不只是「檔案不能帶走」的工具， 更是 **企業數位轉型、AI 時代下，守住信任最後一道防線的關鍵**。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10376246
`,aT=`昨天我們討論了**資料（Data）**，這是企業最擔心外洩的核心資產。要有效守護資料，下一步必須確認：**員工是用什麼裝置來存取這些資料**。

想像一下：一台多年未更新的 Windows 筆記型電腦連上公司網路，充滿漏洞且未安裝 EDR（端點偵測與回應），攻擊者早已潛伏其中。**即使資料保護再嚴密，也擋不住一台失守的裝置**。

---

## 為什麼需要管理裝置？

- **BYOD 風險**：員工自帶手機或筆電雖然方便，但可能未安裝防毒軟體、未加密或未更新，增加安全隱患。
- **裝置遺失導致外洩**：未啟用全碟加密的筆電遺失，等於直接將資料拱手讓人。
- **漏洞與威脅**：未套用補丁或未部署 EDR，等於在內網開啟一道後門，讓攻擊輕易擴散。

---

## 企業如何落實裝置管理

### MDM（Mobile Device Management，行動/端點裝置管理）

以 **Microsoft Intune** 為例，這是常見的 MDM 工具，與 Microsoft 365 生態高度整合，從註冊到政策執行、應用程式發佈與報表，都能在同一平台完成。

- **註冊與接管**：支援 Windows Autopilot、Android Enterprise 或 Apple ADE；裝置一登入公司帳號，即自動納管。
- **合規性政策**：強制螢幕鎖定、磁碟加密（BitLocker for Windows / FileVault for macOS）、作業系統安全更新，以及安全開機機制。
- **應用程式政策**：自動部署 Teams、Outlook 或公司專屬 App，並封鎖未經授權的應用程式。
- **不合規即阻擋**：如果裝置未通過政策檢查，就無法存取郵件、OneDrive 或 ERP 等系統。

### 條件式存取（Conditional Access）

同時評估「**使用者身分 + 裝置狀態**」，整合 Microsoft Entra ID（前 Azure AD）：

- 合規且受管裝置 → 直接允許存取。
- 陌生或不合規裝置 → 要求 **MFA（多因素驗證）**、僅允許 **Web 限制存取**，或直接封鎖。
- 針對行動裝置，建議啟用 **Require approved client app** + **Require app protection policy**，確保僅使用經核准的應用程式，並保護其中的資料。

### 磁碟加密與資料防護

- **BitLocker（Windows）** 或 **FileVault（macOS）**：確保裝置遺失時，資料無法被讀取。
- **DLP（Data Loss Prevention，資料遺失防護）**：限制 USB 傳輸或第三方雲端上傳；檔案僅允許儲存到 OneDrive for Business 或 SharePoint，防止外洩。

### 週期性合規檢查

- 透過 Intune 的報表與警示，定期檢視補丁、防毒軟體、防火牆及 EDR 狀態。
- 配合條件式存取，**不合規就不給登入**，確保持續合規。

---

## BYOD vs. 公司配發裝置：兩套策略並行

企業裡通常會遇到兩種狀況：有人想用自己手機（BYOD），有人則拿公司發的標準機。這時候要是硬套同一套規則，就像拿制服去逼大家週末也穿出門一樣——不實際。真正的解法是：**靈活＋安全要同時顧**。

> 拿我們公司當例子。最近因為政策，我先上線了「公司機」專案。透過 **Intune + Android Enterprise**，員工的桌面就像吃了定心丸——只有核准的 App，桌面和選單都依角色自動排好，Wi-Fi 自動連上公司網路，其他網路想都別想，外面亂七八糟的 App 更是直接擋掉。
>
> 當然，人生（跟資安）不會永遠只有「公司機」。未來我們還會導入 **BYOD**，針對產線員工、辦公室員工設計不同規則。畢竟，有些人只想快點用手機看 Teams，有些人卻需要完全被控管。不同族群，菜單當然不能一樣。

### A. BYOD（自帶裝置）：重點在「保護公司資料、不干擾個人隱私」

BYOD 適合重視便利的員工，管理原則是只針對公司應用程式與資料，不接管整台裝置。

**Intune 建議做法**：

- **MAM-WE（Mobile Application Management without Enrollment，無需註冊裝置的應用程式保護）** 只管理 Outlook、Teams 或 OneDrive 等公司 App 及其資料。
  禁止公司內容複製到 LINE 或個人雲端。
- 檔案**僅限**儲存到 OneDrive for Business。
- App 內資料加密，並強制 PIN 或生物辨識解鎖。

**條件式存取** 啟用 **Require approved client app** + **Require app protection policy** + **MFA**； 針對高風險登入（如陌生地點或裝置），可限制為 Web 存取或直接封鎖。

**平台微調（選用）**

- **Android**：使用 Work Profile 分隔公私資料，無需重置裝置。
- **iOS/iPadOS**：採用 User Enrollment 輕量註冊，保護隱私。

> **要點**：BYOD 不接管整台手機或筆電，只將**公司資料隔離在 App 的沙盒中**，確保公私分明。

### B. 公司配發裝置：重點在「全面控管」

公司裝置由 IT 完全掌控，目標是從硬體到軟體的全方位管理，適用於高安全需求情境。

**Intune 建議做法**：

- **註冊與開箱即用**
  **Windows Autopilot**：新裝置開箱連網，即自動加入 Entra ID、安裝 App 並套用政策。
- **Android Enterprise Fully Managed / Dedicated**：依情境選擇（Fully Managed 適合全面工作用；Dedicated 適用公用裝置），通常需重置裝置。
- **Apple ADE（Automated Device Enrollment） + Apple Business Manager**：支援無人值守註冊，開箱即納管。

**合規與安全基線**

- 套用 **Security Baselines**：強制 BitLocker/FileVault、密碼/生物辨識、韌體與驅動程式更新。
- 使用 **Update Rings** 控制 Windows 或 macOS 更新節奏，避免影響業務。

**應用程式白名單與周邊控制**

- 設定 Allowlist（允許清單），封鎖高風險 App。
- 管控 **USB/藍牙/可移除儲存**（透過 Intune Endpoint Security 或 Defender for Endpoint Device Control）。

**條件式存取**

- 僅 **Compliant（合規）** 裝置可存取敏感系統。
- 對高敏感應用，再疊加 **MFA**、位置或風險條件。

> **要點**：公司裝置**全面納管**，若違規或不合規，即**直接禁止登入**。

---

> **Zero Trust** 不僅驗證「你是誰」，還要檢查「你用什麼上線」。**BYOD 以 MAM 隔離資料、尊重隱私；公司裝置以 MDM 全面納管、違規即擋**。兩套策略並行，才能平衡員工體驗與企業安全。

---

原文連結：https://ithelp.ithome.com.tw/articles/10376390
`,lT=`還記得剛進公司的第一天，IT 交給我一組帳號密碼，叮嚀：「千萬不要外流」。 但現在光靠帳號密碼，已經很難抵擋駭客了。**密碼外洩、釣魚信、暴力破解**，都讓帳密組合變成資安界的「過時武器」。

在 Zero Trust 裡，**身份（Identity）** 被視為最重要的一環。因為駭客要進公司，第一件事就是「取得合法帳號」。 如果身份沒有管好，什麼防火牆、EDR、SIEM，最後都可能被繞過。

所以，我們必須確保：

- **帳號不會被濫用**（共用帳號是大忌）
- **離職帳號馬上關閉**（否則變後門）
- **權限符合最小化原則**（不用的權限要回收）
- **登入的人真的是本人**（這就是 MFA 的任務！）

---

## 為什麼現在一定要上 MFA？

近年許多勒索事件，都是**憑證外洩**後，攻擊者透過**合法的 SSL VPN／遠端入口**進到內網，再橫向移動散播勒索。 把「知道密碼」變成「還得證明本人」，能直接切斷這條最常見的攻擊路徑。

而且不論密碼再怎麼強，總有機會被竊取或破解；只有加上 MFA，才能有效降低風險。

![/blog-assets/ithome-2025/20171891QNZQll0jeM.png](/blog-assets/ithome-2025/20171891QNZQll0jeM.png)

---

## 稽核要求

現在不只 ISO/客戶審查，**多數供應商與雲服務**也把 MFA 視為基本門檻；特別是**管理者帳號**與**外部合作帳號**，幾乎一律強制。

---

## MFA 常見的使用場景

1. **開機／作業系統登入**
  - Windows、macOS 都可整合 MFA：如 **Windows Hello**（指紋／臉部／PIN）或安裝登入層外掛（推播／TOTP）。
  - 有些公司要求 **開機後先過 App 推播或 OTP** 才能進桌面。
2. **公司系統（內部／雲端）**
  - **ERP / 郵件 / 協作（如 O365、Google Workspace）**
  - 常見方式：**Authenticator App（Google/Microsoft 等）** 推播＋**數字配對**、或 **TOTP** 六位數碼。
3. **VPN／遠端連線**
  - 沒有 MFA 的 VPN = 把公司大門鑰匙放在馬路邊。
  - 多數 VPN 都支援：**RADIUS / SAML / OIDC** 串接 MFA。
  - 若需要「**開機前連線（Pre-logon/SBL）**」，可先用**機器憑證**掛上 VPN，使用者登入時再跑 **MFA**。
4. **伺服器與安全服務後台**
  - **EDR 中控台、SIEM、雲主控台**等高敏感入口，**優先**上 MFA（最好為 FIDO2/Passkey）。
5. **各種 SaaS 平台**
  - GitHub、AWS、GCP、Salesforce… 一律 **SSO + MFA**，不要散落本地獨立帳號。

---

## 現在的趨勢

- **FIDO2 / Passkey 無密碼** 以**裝置內私鑰 + 指紋/臉部**取代密碼，**天然抗釣魚**；**YubiKey** 這類硬體金鑰也屬此類。 Apple / Google / Microsoft 都已支援，正邁向「**無密碼時代**」。
- **推播改「數字配對」** 為防 MFA 疲勞轟炸，推播需使用**數字配對**（使用者需輸入螢幕顯示數字到手機 App），比單純按「接受」安全得多。
- **條件式/情境式 MFA** 依據**地點、裝置合規、風險分數**動態要求 MFA。 例如：內網＋受管裝置可放行；外部網路或風險高就強制 MFA。 （常見於 Entra ID、Okta、Ping 等 IdP；這裡僅點名，不做產品介紹。）

---

如果說密碼是**第一道鎖**，那 **身份管理**就是**鎖的規則**（誰能開、什麼時候能開），而 **MFA** 則是**第二把鎖**，會根據情境自動加強。 在攻擊手法越來越高明的今天，沒有 MFA，就像把大門只靠一條橡皮筋綁著。

所以，當有人說「我們公司不需要 MFA」時，你可以回他：

> **駭客才正等著感謝你呢。**

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10376102
`,uT=`又是週末了，請容許我偷懶一下，寫一篇心得文吧。 這篇不談技術細節，主要是想回顧一下開賽到現在我寫了些什麼。

老實說，這 14 天的文章有點隨性，每天都是當天臨時想到什麼就寫什麼，主題也很分散，從 Zero Trust、MFA、弱點掃描、到裝置管理，各種東西都碰了一點。雖然不像教科書一樣系統化，但至少是我在工作中實際接觸到、親身踩過坑的東西。

其實我一開始也會擔心：「資安除了 CTF，還能講什麼？」但寫著寫著，發現資安工程師日常就是最好的題材——從公司導入 M365，到管理 Intune、EDR，再到做 Nessus 弱掃、甚至被使用者問 Wi-Fi 掛掉怎麼辦。每一段經歷都能變成一篇小故事。

## 小回顧（Day 1 ~ Day 13）

這段時間其實寫過不少主題，簡單整理一下：

| Day | 主題 | 關鍵字 |
| --- | --- | --- |
| 1 | 法規推著我上場，學習讓我留下 | ISO、法規遵循 |
| 2 | 公開情資很重要 | 訂閱資安週報 |
| 3 | 鐵裝還是布甲？資安裝備選擇題 | 安全工具選型 |
| 4 | 公司的第一道防線 | Firewall、防火牆 |
| 5 | 文件地獄：葵花寶典？ | ISMS、資安政策 |
| 6 | EDR：手上那把神器 | 偵測、回應 |
| 7 | IT 部門人少，資安工程師的多重宇宙 | 多重身份、雜事 |
| 8 | 漏洞掃描大冒險 | Nessus、自建 vs 外包 |
| 9 | 什麼 M365 除了 Word，也有資安產品？ | Microsoft Security |
| 10 | 微軟有 Zero Trust 架構嗎？ | Zero Trust |
| 11 | 資料保護：別讓公司機密飛出去 | Data Protection |
| 12 | 即使資料保護再嚴密，也擋不住一台失守的裝置 | Device Management |
| 13 | 打帳密已經過時了？大門不只要鎖，還要驗明正身 | 多重要素驗證 |

回頭看，其實每天的題材都跟我的工作緊密相關。第一天是想定調「為什麼要寫這個方向」，後面就比較隨性，想到什麼就寫什麼，沒有特別去刻意規劃。但或許這樣也更貼近「一個資安工程師的真實日常」。

有時候還會想完蛋了，沒東西寫，結果隔天又冒出一堆想法~

> 最近還在家裡翻出一台舊筆電，乾脆直接灌成 Ubuntu，順手裝了 Wazuh Server，成了一個新的實驗平台。舊硬體能被重新利用，拿來玩資安實驗還挺香的。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10376400
`,cT=`前面談過 Zero Trust 的身分、裝置、資料，今天來到第四根柱子：**網路（Network）**。 老實說，這一塊其實跟傳統 IT 網路很像，像 CCNA 的考題一堆都在講 VLAN、防火牆、ACL。 但差別是：在 Zero Trust 的世界裡，這些技術不是「堆設備」，而是「切碎、限制、再加監控」。

---

## 傳統內網的問題

過去的企業網路設計常見這樣的邏輯：

- 只要連上 VPN → 等於進入「安全區域」。
- 內部網段都是平的 → 伺服器、用戶端、產線設備全混在一起。

結果就是： 駭客只要攻下其中一台機器，就能透過 **橫向移動（Lateral Movement）**，一路掃描、嘗試弱密碼、利用共享資源，最終取得 AD 控制權。 這就是為什麼常見的資安事件，都是「一台失守，整網淪陷」。

---

## Zero Trust 網路哲學：分段與限制

Zero Trust 的第四柱強調：**網路必須被切分，並且每個區塊都要最小化權限。**

### 1. 網段分離（Segmentation）

- **依部門區分 VLAN**：研發、財務、產線、訪客 → 各自獨立。
- **伺服器區域隔離**：AD、ERP、檔案伺服器不要跟用戶端在同一個平面。
- **OT 與 IT 網段分開**：產線機器與公司內部電腦必須斷開，只透過受控的閘道溝通。

### 2. 最小必要通道（Least Privilege Networking）

- ACL 與防火牆規則 → 只允許必須的應用連線。
  產線電腦只需要連 MES，就封掉其他不相關的通道。
- 財務電腦只要連 ERP，不該能掃整個 192.168.0.0/16。

採 **白名單模式**，而不是「預設放行、遇事再擋」。

### 3. 流量檢測（Traffic Monitoring）

- **東西向流量（East-West）監控**： 內部主機互相溝通的流量，比進出口流量更容易藏駭客活動。
- IDS/IPS、NDR、甚至 EDR 日誌，都要整合起來，才能偵測「異常的橫向移動」。
- **此時就需要 SIEM**： 把防火牆 Log、EDR Event、NDR Flow 全部集中，做關聯分析。
  例如：員工 PC 同時對多個伺服器發起 SMB 掃描 → 高風險。
- ERP 帳號在半夜從產線 VLAN 登入 → 立即告警。

---

## 實務案例

想像一個沒有分段的環境：

1. 一台員工筆電中標 → 駭客拿到 VPN 帳號。
2. 進內網後馬上橫掃，找到一台老舊伺服器弱密碼。
3. 取得更高權限後，成功跳到 AD Domain Controller。
4. 之後整個公司所有電腦都被勒索。

如果採用 Zero Trust：

- VPN 帳號只能進特定 VLAN。
- 產線 VLAN 與 AD VLAN 完全隔離。
- ERP 僅開放特定帳號、特定網段能連。
- 橫向掃描異常流量會被 SIEM 偵測到。

結果就是：駭客被困在一小塊網段，無法橫向擴散。

---

> **「沒有一張萬用通行證，每一步都要驗證。」** 這樣才能避免駭客利用一個破口就跑遍全公司。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10376885
`,fT=`> 很多人以為一定要掃 IP、跑掃描器才看得到風險。 其實 **不碰對方資產**，只靠公開資訊與指標，也能把自家對外面貌、第三方風險、外洩跡象抓個七八成。 **完全被動、合法合規**

---

## 一、先決條件：先畫好「邊界地圖」

> 先把會代表公司的外部識別盤點好，後續所有工具都靠這些關聯：

- **網域／子網域**：\`example.com\`、\`*.example.com\`
- **公司名稱／品牌別名**、產品名
- **ASN／公網 IP 範圍**（向 ISP 或內部網管確認）
- **雲端帳號標識**：Azure tenant name、AWS Account Alias、GCP Project 名稱
- **官方社群／套件命名空間**：GitHub Org、npm、PyPI、Docker Hub

---

## 二、Scorecard vs ASM：兩個視角，互補使用

- [**Security Scorecard／外部評分**](https://www.ithome.com.tw/review/135314)：第三方「從外看內」的體檢分數，常含 DNS posture、憑證配置、開放服務指標、垃圾郵件名譽、外洩關聯等。
  **用途**：對標同業、第三方風險管理（供應商）。

[**ASM／EASM（Attack Surface Management）**](https://www.checkpoint.com/tw/cyber-hub/cyber-security/what-is-external-attack-surface-management-easm/what-is-attack-surface-management/)：以**資產為中心**的外部盤點（網域、IP、雲資產、SaaS），持續監控「新長出來的東西」。

- **用途**：建立／維護「外部資產清冊」、偵測影子 IT。

---

## 三、「完全被動」的關鍵觀測面

1. **DNS posture與郵件防護**
  - 檢查 \`SPF / DKIM / DMARC\` 是否存在與策略強度（最終建議走到 \`p=reject\`；可先以 \`quarantine\` 過渡）。
  - 檢視 MX／NS 是否在可信供應商；清理外曝測試或過期紀錄。
  - 常見記錄速查：A（IPv4）、AAAA（IPv6）、MX（郵件）、CNAME（別名）、NS（名稱伺服器）、SOA（權威起始）、PTR（反查）、TXT（含 SPF）。
  - 工具示例（僅查公開 DNS，非掃描）：
    \`whois example.com\`（註冊資訊）
  - \`nslookup -type=MX example.com\`（查郵件伺服器）
  - \`nslookup -type=TXT example.com\`（看 SPF／DMARC）
  - \`host example.com\`、\`host 172.217.160.110\`（正反向快查）
2. **外網服務指紋（搜尋引擎型）**
  - 用 **Shodan／Censys** 的「搜尋／監控」功能，追蹤與你 **ASN／網域** 相關的服務變動（這是被動索引，不是你主動掃；免費版有查詢限額，建議付費訂閱持續監控）。
  - 檢查是否出現 **不該對外** 的服務（如資料庫、遠端桌面）。
3. **資料外洩跡象（帳密／文件）**
  - **Have I Been Pwned** 企業網域監控（需域名驗證）查歷史外洩。
  - **GitHub／套件倉庫**：確認組織空間未被偽冒；開 **Secret Scanning／Dependabot**（公開庫免費）。
  - **套件命名空間**：監控品牌 typosquatting。
  - **擴大公開線索**（僅觀測、不互動）：搜尋引擎、公司官網與新聞稿、社群（LinkedIn、X〔Twitter〕、Facebook、Instagram）、論壇……可能間接洩露員工結構、供應商、VPN 品牌、帳號命名規則等。
4. **雲端足跡**
  - 依雲供應商公開命名慣例交叉 CT／DNS，盤點 **公開端點／網站**；標記是否有 **列目錄／錯誤洩漏** 痕跡（只看，不碰）。
5. **品牌／網域仿冒**
  - 監控 **近似域（look-alike）** 的註冊與憑證簽發；標記可疑登入頁與釣魚跡象（截圖存證，交法務或反詐窗口）。
6. **第三方依賴／SaaS 曝險**
  - 列出代發郵件、客服、行銷、CDN、分析 SDK 等供應商清單，對照其外部事件公告／評分。
  - 檢查是否出現在已知供應鏈事件波及清單。
7. **開放目錄／備份檔被索引**
  - 以一般搜尋引擎（**僅限自家品牌／網域**）查是否收錄 **備份檔、暫存頁、測試報表** 等線索（不嘗試下載）。
8. **郵件名譽與黑名單**
  - 觀測寄信網域與來源 IP 是否上主要黑名單；名譽差不僅影響投遞，亦提高被濫用風險。

> **If you can’t name it, you can’t protect it.**

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10377098
`,hT=`> 越來越想不到寫啥了 XDD 每天在想要寫什麼，甚至都比寫的時間久

大家常聽到「帳號權限要設定好」，但「**特權帳號**」其實是另一回事：它能新增使用者、修改設定、存取敏感資料，甚至停擺整個服務。一旦外洩或被誤用，就可能引發全公司級災難。而且現在客戶稽核越來越嚴格，不只問「有沒有政策」，更要你拿出**實質證據**來證明一切都在掌控中。

> **駭客真正想要的不是進門，而是「鑰匙圈」**。 一把特權帳號，等於掌握整家公司。

---

## 什麼叫「特權帳號」？

把帳號想像成門禁卡：有些只能進大門，有些能開保險箱。後者就是特權帳號。它們擁有高權限，能執行關鍵操作。常見類型包括：

- **人員特權**：如 Domain Admin、本機系統管理員、資料庫管理員（DBA）、雲端租戶或訂閱層管理員（例如 Owner 或 Global Admin）。
- **服務／應用帳號**：用於排程任務或系統整合的非互動帳號（常被忽略，密碼不易輪替）。
- **緊急帳號（Break-glass）**：在 SSO 或 MFA 失效時的備用帳號（平時封存、需雙人授權開啟，並立即觸發告警）。
- **外包／臨時帳號**：供應商維護或短期專案使用（**必須設定時效與權限範圍**）。

---

## 特權帳號危險嗎?

特權帳號是資安弱點的放大鏡，不僅是外部攻擊的目標，人為錯誤也可能釀成大禍。幾個關鍵理由：

- **攻擊鏈的終點是升權**：滲透只是開胃菜，拿到特權才是主菜。之後能橫向移動、批量竄改、外洩機密，甚至勒索。
- **人為誤用也很可怕**：例如長期保留高權、多人共用同一帳號，或臨時開啟後忘記關閉——**就算不是駭客，也能造成意外**。
- **供應鏈壓力**：客戶與上游會要求證明：誰、何時、因何事使用了高權、做了什麼，以及**誰核准**？這已成為合約常見條款。

---

## 這裡就是 PAM 登場的地方（Privileged Access Management）

> **PAM 就是把鑰匙鎖進保險箱，借鑰匙要走流程，連線走專屬通道，且全程錄影。** 它把「政策」變成「可證明、可回放、可稽核」的流程與技術控制。

1. **密鑰保管與自動輪替（Vault & Rotation）**
  把 Domain Admin、DBA、設備管理介面、服務帳號等高權密碼／金鑰放進金庫，設定**定期自動換密碼**與**借出即換**，杜絕共用密碼與長期不換。
2. **即時、剛好夠用的權限（JIT／JEA）**
  平時不給高權，臨時升權必須**填寫事由＋時間盒（time-bound）**，過期自動收回；可以限制到**指令層級／作業範圍**。
3. **會話代理與側錄（Session Proxy & Recording）**
  RDP／SSH／SQL／Web 管理面板**必須經 PAM 閘道**，可控剪貼簿／檔案傳輸／命令白黑名單，並**錄影或記錄命令**，事後可回放。
4. **盤點與治理（Discovery & Governance）**
  自動掃描找出「遺失在角落」的特權與服務帳號，定期輸出**輪替合規率、使用軌跡、審批紀錄、外包時段存取**等報表，直接回答稽核題。

> 沒人能「直接」拿鑰匙，也不能「直接」開門；一切都要過金庫、過流程、走指定通道，而且留證據。

---

原文連結：https://ithelp.ithome.com.tw/articles/10377265
`,dT=`在資訊安全裡，很多人把心力放在「防止駭客入侵」，卻忘了一件更現實的事：

> **系統總有一天會壞，資料總有一天會丟。**

不論是硬碟故障、人為誤刪、勒索病毒，還是天災火災，最後能不能「活下去」，靠的就是備份。 試想一下你 DB 哪天突然壞掉，沒備份一年的資料都沒了，你看你會不會被炒魷魚。

## ![/blog-assets/ithome-2025/20171891AL8on83kKP.png](/blog-assets/ithome-2025/20171891AL8on83kKP.png)

## ISO 27001 與法規怎麼要求？

ISO/IEC 27001 明確規範：企業必須建立 **備份策略**，並確保能在災難後復原。 在金融業、醫療業，監管法規甚至會寫得更細：

- **多久內系統要能恢復運作？**
- **多久內要能還原到最新資料？**

這裡就會牽涉到兩個常聽到的名詞：

---

## 什麼是 RTO / RPO？

> 撰寫 ISMS 文件時，這兩個字一定會出現。 我第一次看到時還愣了一下：「這是什麼？RPG 嗎？」

- **RTO（Recovery Time Objective，復原時間目標）** → 系統掛掉後，要在多久時間內恢復？ 例如：銀行核心系統 RTO = 4 小時，代表不論發生什麼事，都得在 4 小時內重新上線。
- **RPO（Recovery Point Objective，復原點目標）** → 能接受多少資料遺失？ 例如：RPO = 15 分鐘，表示即使資料庫炸掉，最多只能回溯到 15 分鐘前的狀態。

![/blog-assets/ithome-2025/20171891oGuXFW1F4Y.jpg](/blog-assets/ithome-2025/20171891oGuXFW1F4Y.jpg) 圖片為[Manish Sharma](https://www.linkedin.com/pulse/design-reliability-driven-rto-rpo-manish-sharma)

| 名詞 | 全名 | 問題核心 | 舉例 |
| --- | --- | --- | --- |
| **RTO** | Recovery Time Objective | 多久能把系統救回來？ | 4 小時內恢復服務 |
| **RPO** | Recovery Point Objective | 能接受多少資料遺失？ | 最多回溯 15 分鐘前 |

這兩個數字，往往比「有沒有備份」更重要，因為它決定了業務能不能繼續運作。

---

## 為什麼要做年度災難復原演練？

很多公司都有備份，但實際出事時才發現：

- 備份檔雖然在，但根本壞掉打不開。
- 還原流程太複雜，沒人會操作。
- 還原速度太慢，根本達不到 RTO。

這就是為什麼 ISO 和法規會要求： **至少每年要做一次災難復原演練**，並且留存紀錄，確保備份不是紙上談兵。

---

備份不是為了應付稽核，而是為了公司在最壞情況下，還能繼續活下去。

> **沒有測過的備份 = 沒有備份。**

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10377454
`,pT=`> 昨天聊到 RTO（恢復時間目標）與 RPO（恢復點目標），今天來談談如何透過備份保護資料，確保在最壞情況下仍能快速復原。

---

## 最經典的 3-2-1 備份原則

**3-2-1 備份原則** 是業界公認的資料保護標準，簡單卻有效，能大幅降低資料遺失風險：

- **3**：保留**三份資料**（一份原始資料 + 兩份備份），確保單點故障不影響資料完整性。
- **2**：使用**兩種不同媒介**（例如硬碟和雲端），避免因硬體損壞（如硬碟壞軌）或網路問題導致備份不可用。
- **1**：至少**一份備份存放異地**（如雲端或另一地點的儲存設備），防止火災、水災或勒索病毒導致所有資料同時失效。

> 不要把雞蛋放在同一個籃子裡，分散風險才能保護資料。

![3-2-1 原則示意圖](3-2-1 原則示意圖)

---

## 常見的備份工具

以下是企業環境中常見的備份方式，以及它們的優缺點與建議：

### 1. NAS 備份

> 主流應該是Synology 或 QNAP 的 NAS（網路附加儲存）作為備份倉庫，成本低且管理方便。 一台應該幾十萬可以搞定

### 2. 專業備份軟體（Veeam / Commvault）

> 我自己是只用過Veeam，所以不太了解commvault

- **功能**：
  **自動排程**：定時備份，減少人工介入。
- **增量備份**：僅備份變更資料，節省儲存空間與時間。
- **還原測試**：模擬還原流程，確保備份可用。
- **異地複製**：將備份複製到雲端（如 Azure、AWS S3 Glacier）或另一地點。

### 3. 雲端備份

> 直接將資料備份到雲端（如 Azure Backup、Google Cloud Storage Nearline 或 AWS S3 Glacier）。

---

## 實務上？

1. **設定自動化排程** 使用 Veeam、Windows Server Backup 或 NAS 內建排程工具，確保備份定時執行，避免依賴人工操作。
2. **實現異地存放** 至少一份備份存放在雲端（如 Azure、AWS S3 Glacier）或另一地點的儲存設備，符合 3-2-1 原則。
3. **啟用快照與不可變備份** 在 NAS 或備份軟體中啟用快照功能，儲存歷史版本；使用不可變備份（Immutable Backup），設定一段時間內無法修改或刪除，防範勒索病毒。
4. **定期測試還原** 每季執行一次還原測試，模擬資料遺失場景，確認備份是否能快速復原，且資料完整無誤。
5. **分層備份策略** 針對不同資料類型（資料庫、檔案伺服器、虛擬機）制定不同備份頻率與方式。例如：
  - **資料庫**：每小時增量備份，每日完整備份。
  - **檔案伺服器**：每日增量備份，每週完整備份。
  - **虛擬機**：使用 Veeam 進行每日快照與異地複製。

---

> 明天講如何做災害復原

---

原文連結：https://ithelp.ithome.com.tw/articles/10377679
`,mT=`> 昨天聊到 **3-2-1 備份原則**，備份能確保資料還在，但光有備份，並不代表系統能夠快速恢復上線。 每年不管是 ISO 還是法規，總有個大魔王：**災害復原（Disaster Recovery, DR）**。 當然做這個DR的報告也很麻煩...

---

## 備份 ≠ 災害復原

- **備份**：重點是「確保資料還在」，像一張保險單。
- **災害復原（DR）**：重點是「讓服務回到運作狀態」，像發生車禍後的急診與治療流程。

DR 是讓企業在天災、人禍或設備故障後，**快速恢復營運或維持關鍵任務功能**。這不只是技術問題，更包含規劃、測試，甚至可能需要異地的 DR Site 或雲端資源來支撐。[相關連結](https://www.nutanix.com/zh_tw/info/disaster-recovery)

---

## 為什麼需要 DR？

1. **時間就是金錢** 停機不只是「不方便」，是直接的營收與商譽損失。產業統計顯示 **IT 停機平均成本可高達每分鐘 17,000 美元**，縮短 RTO 就是現金流保命。
2. **資料完整 ≠ 服務可用** 昨天的備份不代表今天能上線。如果重建環境要花三天，對客戶來說仍然是「停擺」。這就是 **RTO（恢復時間目標）/ RPO（復原點目標）** 的重要性。
3. **合規與稽核要求** ISO 27001 以及大客戶稽核，會要求不只要有備份，還要具備 **DR 計畫與演練證據**，證明「真的回得來」。
4. **降低單點風險** 火災、水災、地震、機房斷電、勒索軟體……任何一件事都可能讓主站與本地備份同時失效。**異地/異平台 DR** 才能把雞蛋分開放。

---

## ISO 27001:2022 的要求

在 ISO/IEC 27001:2022 中，**附錄 A 控制項 5.30「ICT 對營運持續的就緒度（ICT Readiness for Business Continuity）」** 明確指出：

- 高階管理者必須能在事故中快速做決策，確保業務不中斷。
- RTO 與 RPO 必須清楚定義，並在組織內廣泛傳達。
- 必須定期進行測試與演練，量測恢復時間、反應速度等關鍵指標。
- ICT 連續性計劃應包含：
  系統與流程的效能與容量需求
- 每個 ICT 服務的 RTO 與恢復方式
- 每個 ICT 資源的 RPO 與復原流程

換句話說，ISO 不只要你「有備份」，還要你證明系統真的能依照 RTO/RPO **在限定時間內復原**。

> 備份能確保「資料不會永遠消失」， 但只有 **災害復原計畫**，才能確保「公司能在風暴後繼續營運」。

---

原文連結：https://ithelp.ithome.com.tw/articles/10377737
`,gT=`倒數第二個假日啦～ 前幾天聊到的 **備份、零信任、帳號管理、災害復原、各種監控**，其實通通都是資安專責人員的日常。

以下引用數發部發佈的資料：

- [何謂資安專責人員](https://moda.gov.tw/ACS/laws/faq/03/636)
- [認可證照清單](https://www-api.moda.gov.tw/File/Get/acs/zh-tw/epCm7MlcYGOKmPH)

從法規面來看，資安專責人員需要具備**認可的資安證照**，並能建立制度與流程；但回到現實，多半是每天面對突發的資安議題，確保營運不中斷。 尤其在公司初期、或資安機制尚未完善時，這個角色還要負責**整體資安架構的部署與藍圖規劃**。

我一直覺得資安專責人員是「暗影中的守門人」：平常不顯眼，一出事大家第一個就會找你。 雖然壓力不小，但也因此更能感受到這份工作的價值。

> 但簡單來講，沒出事沒人覺得你有用；出事了你沒處理好也會被噴。XDD

---

原文連結：https://ithelp.ithome.com.tw/articles/10378065
`,yT=`> 分享一個朋友的故事。

剛進公司不久，他電腦突然變超卡， 還沒來得及寫信報修，電話就先響了：

「嗨～你電腦是不是怪怪的？我們這邊看到你 CPU 爆了。」

當下他整個愣住，只能心裡默默問一句： **「你們到底是怎麼知道的？」**

後來主管 casually 又補了一槍：

> 「其實我們隨時都看得到使用者在電腦上做什麼。」

那瞬間，他腦袋立刻閃回小時候電腦教室被老師**強制全螢幕接管**的畫面。 原來這不是童年陰影，而是在公司裡，真的有可能發生。

---

### 公司電腦上的「隱形眼睛」

大部分員工可能完全沒想過，其實公司常常會部署一些**神秘工具**，功能強大到你難以想像：

- **螢幕監控**：很像 AnyDesk，但不用你按「同意」，管理員就能即時看到你的螢幕畫面，**而且你永遠不知道他有沒有正在看**。
- **應用程式紀錄**：你開了 Word？Excel？開多久？都有 log。
- **檔案操作追蹤**：複製到 USB、壓縮打包，甚至傳到雲端，動作全都被攔截或上報。
- **聊天軟體偵測**：LINE、Telegram、WeChat 這類 IM，常被列為高風險，系統能偵測甚至禁止檔案傳輸。

說白了，這些工具就像你電腦裡的「黑盒子」，所有操作一清二楚。

> 所以啊，和另一半的不可告人對話…小心都被看光光。 聽起來很沒隱私？其實真的蠻沒隱私的 XDD

---

### 為什麼要這麼做？

雖然很像《中國天眼》，但背後其實有正當理由：

1. **防止機密外洩**：員工一個拖曳，就可能把幾千萬設計圖帶走。
2. **稽核要求**：大客戶、ISO 27001 都會要求「能不能追蹤使用者行為」。
3. **事件回溯**：真的出事時，至少能回頭查「誰、什麼時候、做了什麼」。

這些工具不是針對你，而是針對「風險」。 只是大部分員工不知道，自己其實早就處在「被保護、也被監控」的狀態。

---

在公司電腦上，永遠抱持一個心態：

> **「有人在看。」** 👀

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10378223
`,vT=`它就像是給汽車換機油：如果不做，引擎遲早會出大問題，系統可能因為安全漏洞而「爆炸」；但如果做得太急躁、貿然**全域**部署，又可能毀掉整個環境，導致服務中斷或**相容性**問題。因此，千萬不要一看到新的 KB 就立刻全域滾動（rollout）。相反，我們應該採用一個穩健的策略，讓更新變成**可控的日常操作**，而不是冒險的賭注。

> 當然，Patch Management 本身就是**資安控制**之一，ISO 或稽核都有相對的控制項。

---

### Patch Tuesday

![Microsoft Patch Tuesday](Microsoft Patch Tuesday)

[Wiki](https://zh.wikipedia.org/zh-tw/%E5%91%A8%E4%BA%8C%E8%A1%A5%E4%B8%81%E6%97%A5) 每月的**第二個星期二**是微軟的「Patch Tuesday」，主要更新發布日，通常包含安全修補、功能改進與累積更新。這就像一頓豐盛的主菜，值得**優先關注**。但**別盲裝**，先快速查看官方與社群資訊評估風險：

- **檢查 Release Health**：微軟的 Release Health 會列出已知問題（Known Issues)與暫緩保護。若某更新會導致特定硬體或軟體不相容，就先避開。
- **確認 KEV 清單**：KEV（Known Exploited Vulnerabilities）是 CISA 維護的**已遭利用**漏洞清單。若本次修補包含 KEV，代表已被攻擊者積極利用，需**加速部署**。

> KEV 情資也可關注 **TWCERT/CC** 與各大**資安電子報**。 上網查看是否有「災情」是必不可少的，尤其是**大版本**更新！若是**高風險漏洞（例如零日攻擊）**，原則上**先處理**，沒人想讓自家伺服器曝露在風險下。

---

### Ring Deployment

> 我也是寫今天才去了解，Ring Deployment，下面提供資訊參考：[What is Ring Deployment? A Guide to Phased Software Rollouts](https://www.ivanti.com/blog/ring-deployment)，不然我怕我說錯XDD

用**環狀部署**降低風險：先小圈驗證，再逐步擴散到更多系統與環境。這能把「一次全推」的災難機率降到最低。

---

### 浪子回頭：備份與回滾，確保退路

更新不是「破釜沉舟」。我們必須確保**能回頭**。在每次更新前，都要準備**備份與回滾**劇本，這是降低風險的關鍵步驟：

- **虛擬機環境**：使用 VM **快照（Snapshot） 或**系統映像（Image），以便快速還原。
- **資料庫**：確保有**可還原的備份點**（例如 SQL Server 交易記錄與時間點還原）。

> 理論上，關鍵伺服器都應該**有備份與快照**吧？

若在部署中「踩雷」（例如藍屏或服務崩潰），**立即回退**：停止該環的進一步推廣、暫緩到下一環，並通報影響範圍。這不僅能控制損害，也能累積經驗，避免下次重蹈覆轍。

---

**若有說錯，歡迎留言更正，謝謝～**

**最後**：想知道你的電腦最近的更新嗎？

\`\`\`
# 列出最近五筆已安裝的更新
$Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 5
\`\`\`

---

原文連結：https://ithelp.ithome.com.tw/articles/10378517
`,xT=`> 風險評鑑這位**每日必戰的 BOSS** 每年稽核必看.. 也是ISO/IEC 27001 的要求

當然他也是有好處，能幫組織及時發現潛在危機，並想出好方法應對。簡單來說，風險就像是「壞事可能發生，影響我們的核心資產」的可能性，尤其是當外面的威脅找到我們的弱點時，那你就等著被罵吧！

## 為什麼要跟「風險 BOSS」對決？

我們得想想，如果風險真的發生，組織能不能承受那一下打擊？這不僅是 ISMS 的「硬性任務」，還能在編預算前跟老闆說：「嘿，我們得買點新裝備防身！」

> 例如舊的firewall=高風險 那是不是就可以考慮添購新的

### 風險評鑑的超級好處（除了不被罵之外）

除了滿足 ISO/IEC 27001 的要求，讓組織通過稽核，這玩意兒還能讓你提前發現隱藏的「地雷」，避免小問題變成大災難。想像一下，沒有風險評鑑，就像是開車不看後照鏡，直接撞上後面的卡車！它能幫助組織優化資源分配，把錢花在刀口上，而不是亂撒網。像是那個舊 firewall，如果評鑑出它是高風險點，你就能理直氣壯地申請升級，變成「預防勝於治療」的英雄。更酷的是，它能提升整體資安意識，讓團隊從「被動挨打」變成「主動防禦」，長期下來，組織的韌性 UP UP，競爭力也跟著漲。

### 風險評鑑程序：一步步打敗 BOSS 的攻略指南

[參考ISMS優先落實執行策略](https://sites.google.com/email.nchu.edu.tw/isms-strategy/%E7%9B%B8%E9%97%9C%E7%A8%8B%E5%BA%8F%E6%9B%B8%E4%BF%AE%E8%A8%82%E5%8F%83%E8%80%83/b003%E9%A2%A8%E9%9A%AA%E8%A9%95%E9%91%91%E7%AE%A1%E7%90%862)

> 網路上也有流程範本可以去借鑒 基於 ISO/IEC 27001 的精神，風險評鑑不是隨便評評，而是有系統的流程。

**識別風險：找出隱藏敵人** 列出所有潛在風險來源：內部（員工失誤、系統老舊）、外部（駭客攻擊、自然災害）。識別資產（什麼東西重要？如客戶資料）、威脅（誰想搞我們？如病毒、競爭對手）、漏洞（哪裡弱？如沒加密的傳輸）。可以用問卷、訪談或工具掃描，別漏掉任何角落。例如，舊 firewall 就是個典型漏洞，威脅是太舊XDD。

**評估風險：算分數決定嚴重度** 對每個風險打分：可能性（低、中、高）、影響（輕微、重大、毀滅性）。用公式計算風險值，例如可能性 4 x 影響 5 = 風險分數 20（滿分 25 算高風險）。畫出風險矩陣：紅色區 = 馬上處理，黃色 = 監控，綠色 = 放鬆點。記得考慮殘餘風險（處理後剩多少）。

**風險處理：出招反擊** 決定策略：避免（別做那件事）、減輕（加控制措施，如升級 firewall）、轉移（買保險）、接受（低風險就認了）。列出行動計劃：誰負責、何時完成、預算多少。例如，高風險的舊 firewall → 計劃 Q4 升級到新一代防火牆。

**監控與審核：別讓 BOSS 復活** 不是做完就結束！定期追蹤處理進度，每季或每年審核一次。記錄一切到風險登錄冊，方便稽核時秀給審核員看。如果環境變了（新法規、新科技），馬上重評。最後，報告給高層：用圖表秀成果，讓老闆點頭說「好棒棒」。

這個程序不只符合標準，還能讓組織像有超能力一樣，預知危機。記得，風險評鑑是活的過程，不是死板的表格——多練習，就能變成你的資安神器！

> 題外話，原先想說30天應該很漫長，但現在寫著寫的也快寫完了XDD 加油，希望我還可以再想六篇題材

---

原文連結：https://ithelp.ithome.com.tw/articles/10378757
`,ST=`**垃圾郵件：資安戰場的第一道城門**

剛進公司時，我最怕的不是伺服器當機，而是員工慌張打電話：

> 「我好像點錯了一封信…」 **一封垃圾郵件，可能讓公司資料被鎖、帳號被盜，甚至損失百萬！千萬別手滑啊！**

垃圾郵件就像公司的第一道城門，跟防火牆一樣，守不住就完蛋啦！根據 [2025 年 Sophos 報告](https://news.sophos.com/en-us/2025/06/24/the-state-of-ransomware-2025/)，近 90% 的網路攻擊從一封釣魚郵件開始。垃圾郵件不再只是惱人的廣告，它是駭客的利器，藏著釣魚、病毒和冒用陷阱，隨時搞亂公司。

---

## 垃圾郵件的真面目：駭客的四大武器

垃圾郵件看似無害，背後危機四伏，以下是它們的「作案手法」：

1. **釣魚攻擊（Phishing）**
  - **特點**：假裝成老闆、銀行或客戶，騙你點擊惡意連結或輸入帳密。
  - **範例**：一封假財務部門的郵件，要求「緊急轉帳 $50,000」，可能讓公司血本無歸。
  - **危害**：偷帳號、搶資料，甚至癱瘓系統。2025 年，18% 的勒索病毒靠釣魚郵件發動（[Sophos 2025](https://news.sophos.com/en-us/2025/06/24/the-state-of-ransomware-2025/))。
2. **惡意軟體散布**
  - **特點**：附件或連結藏勒索病毒、木馬或間諜軟體，點擊就中招。
  - **範例**：一個偽裝成「發票.pdf」的 .exe 檔案，可能鎖住公司資料要贖金。
  - **數據**：2025 年 Sophos 報告顯示，70% 的勒索病毒從垃圾郵件來（[Sophos 年度威脅報告](https://news.sophos.com/en-us/2025/04/16/the-sophos-annual-threat-report-cybercrime-on-main-street-2025/))。
3. **冒用與詐騙（Spoofing & Social Engineering）**
  - **特點**：假冒公司網域或員工信箱，發看似正常的郵件，誘你洩露機密。
  - **範例**：假 IT 部門要求「更新密碼」，點進去卻是駭客的陷阱網站，超氣人！
  - **數據**：2025 年 Sophos 報告指出，30% 的冒用郵件騙到員工機密。
  - **危害**：害公司吃虧，還連累客戶，信任崩盤只能含淚收拾。
4. **大量垃圾郵件（Bulk Spam）**
  - **特點**：駭客盜用信箱狂發廣告或詐騙信，把公司網域拖進黑名單。
  - **範例**：員工信箱被駭，短時間寄出數萬封「中獎通知」，害公司郵件送不到客戶。
  - **影響**：網域進黑名單，客戶收不到信，業務直接 GG，誰來救救我？

---

## 為什麼好好的信總被丟進垃圾桶？

為什麼好好的信總被丟進垃圾桶？根據 [夏格飛](https://simular.co/blog/post/spf-dkim-dmarc-important-knowledge)，郵件協議沒內建安全驗證，駭客輕鬆假冒寄件人，搞出「自己寄給自己」的鬧劇。解決方法是設定 **SPF**（指定誰能寄信）、**DKIM**（加密簽章防竄改）、**DMARC**（處理驗證失敗與回報），確保郵件可信。沒設好這些，郵件可能被拒收或進垃圾桶。像 SendGrid 的「單一寄件人認證」也能幫忙，增加收件伺服器的信任。2025 年，這些驗證是寄信的基本門檻，不然重要通知信永遠到不了客戶收件匣。

> 公司用 Exchange Online 整天查隔離信，但閥值又不能降低 誤判率跟資安要取一個適當平衡

---

原文連結：https://ithelp.ithome.com.tw/articles/10378959
`,CT=`還記得我最早接觸資安的時候嗎？那時常常看到一堆神秘的代號：\`T1566\`、\`T1059\`、\`T1003\`……完全摸不著頭緒，心想這些數字到底在搞什麼鬼？我只聽過\`T65K2\`（當兵必備知識，哈哈！），結果現在要背的卻是另一套「資安軍規」。

> 會不會真的有人去查T65k2

但等我進公司後，才發現這些代號不是在唬人——**幾乎所有EDR（Endpoint Detection and Response）、SIEM（Security Information and Event Management）的事件記錄，都會用這些編號來描述攻擊手法**。如果你看不懂，就等於丟掉一半的情報，藍隊工作瞬間變得像霧裡看花。

---

## MITRE ATT&CK 到底是什麼？

![/blog-assets/ithome-2025/20171891Mo04h3xS5n.png](/blog-assets/ithome-2025/20171891Mo04h3xS5n.png)

[MITRE ATT&CK（Adversarial Tactics, Techniques, and Common Knowledge）](https://attack.mitre.org/)其實是一個**全球性的攻擊手法知識庫**，它把駭客的TTPs（Tactics戰術、Techniques技術、Procedures程序）整理成一張詳細的「攻擊地圖」。這不是枯燥的理論，而是基於真實威脅情報（如APT團體的案例）建構的框架，讓資安從業者能快速理解和應對攻擊。

- **戰術 (Tactics)**：駭客的目標，例如「初始存取（Initial Access）」、「橫向移動（Lateral Movement）」、「資料外洩（Exfiltration）」或「防禦規避（Defense Evasion）」。
- **技術 (Techniques)**：達成目標的具體方法，例如釣魚郵件（Phishing）、Pass-the-Hash憑證竊取，或惡意巨集（Malicious Macro）。
- **程序 (Procedures)**：更細部的實作細節，例如用\`Mimikatz\`工具來執行憑證傾印（Credential Dumping）。

舉例來說，\`T1566\` 就是 **Phishing（釣魚攻擊）**，這是駭客最愛的「開門紅」——透過偽造郵件或連結誘騙受害者點擊，進而植入惡意軟體。\`T1059\` 則是 **Command and Scripting Interpreter**，常見於濫用PowerShell執行惡意指令；\`T1003\` 是 **OS Credential Dumping**，專門偷系統憑證，讓駭客能假裝成合法用戶。

這些編號就像資安界的「通用語言」，無論是SIEM/EDR，都會在警報中標註它們，方便你一目了然：「哦，這是釣魚攻擊，我該檢查郵件伺服器！」

不過，知道這些代號可以做什麼呢? 明天我已經想好要寫啥

> 為什麼藍隊一定要學 MITRE ATT&CK？

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10379225
`,wT=`> 接續昨天的內容

對藍隊（防禦方）來說，MITRE ATT&CK 不是什麼「加分題」的選修，而是**必修的攻防劇本**。 它不像教科書那樣生硬，而是像一部懸疑大片，有完整的故事線，帶著你從駭客的角度一步步推進：

1. **初始存取（Initial Access）** 駭客怎麼敲門？（例如 \`T1566 - Phishing\`、\`T1190 - Exploit Public-Facing Application\`） → 藍隊該做的：郵件過濾、Web 應用防火牆。
2. **執行與持久化（Execution & Persistence）** 進來後怎麼安家？（\`T1059 - PowerShell\`、\`T1547 - Boot or Logon Autostart Execution\`） → 藍隊該做的：監控異常腳本、審查登錄項。
3. **權限提升與橫向移動（Privilege Escalation & Lateral Movement）** 怎麼爬到更高層？（\`T1068 - Exploitation for Privilege Escalation\`、\`T1021 - Remote Services\`） → 藍隊該做的：最小權限原則、網路分割。
4. **收集與外洩（Collection & Exfiltration）** 偷了什麼？怎麼運出去？（\`T1005 - Data from Local System\`、\`T1041 - Exfiltration Over C2 Channel\`） → 藍隊該做的：部署 DLP、監控異常流量。
5. **防禦規避與影響（Defense Evasion & Impact）** 怎麼擦屁股、留下傷害？（\`T1070 - Indicator Removal\`、\`T1490 - Inhibit System Recovery\`） → 藍隊該做的：審核日誌、強化備份。

掌握 ATT&CK，就不只是「看懂 SIEM」而已，更能**主動映射組織的防禦覆蓋率（Coverage）**，找出真正的缺口。

---

## 回憶：初探 APT

回想起之前，偶然接觸到APT，： 開始研究 **APT29（Cozy Bear，俄羅斯 APT 團體）** 的攻擊手法，並試著模擬。

當時的我對 MITRE ATT&CK 幾乎是零基礎，打開矩陣只覺得眼花撩亂，滿滿的 TTPs 看得頭昏腦脹。很多地方不懂，甚至有誤解，但也正是這樣的過程，讓我第一次真正「走進駭客劇本」。

我後來建了一個 GitHub 專案（[and910805/APT29](https://github.com/and910805/APT29)），把攻擊步驟記錄下來。專案基於 MITRE ATT&CK 的 Enterprise Matrix，模擬了一條完整流程：從初始存取到資料外洩，全程大約 20 步，涵蓋 Windows Server 2019 和 Windows 10 的環境。

現在回頭看，專案其實還能更好 ：像是加個 README 說明背景、多放幾張截圖，或更新近年的 APT29 攻擊技術。 但對我來說，這就是一個重要的里程碑。

畢竟這是我第一次嘗試，難免有錯誤或理解不到位，但正是這種跌跌撞撞的經驗，成為我後來工作上的基礎。 如果你有興趣考古或擴充，歡迎 fork 一起玩，也請多多指教！

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10379244
`,ET=`> 又是假日了，來個比較輕鬆的主題

剛入職的時候，公司還沒分得這麼細，**IT 的監控、資安的巡檢，全都一把抓**。 每天一到公司，除了要看 AD、DNS、核心系統有沒有掛掉，還得盯著一堆 log：

- 防火牆有沒有被 scan
- DNS 有沒有異常 query
- 伺服器 CPU/記憶體是不是爆了

說實話，那時候感覺自己像個「24 小時的看門狗」。

---

## 從 IT 監控 → 資安巡檢

隨著人力慢慢增加，日常的 IT 監控有同事分攤，我才有時間把重心放到「資安監控」。 現在我的日常大概是：

- **Firewall**：看有沒有異常流量、爆量連線
- **EDR**：端點有沒有中惡意程式，哪台電腦一直在爆告警
- **SIEM**：彙整 log，有沒有奇怪的帳號嘗試登入、異地存取
- **Outlook Online**：有沒有被意外隔離的信件，需要去釋放的

這些東西，說白了就是 **「證據 + 警報」**，沒有它們，你根本不知道發生了什麼。

---

## 為什麼要留日誌？

ISO 27001 也很明確：**日誌與監控是必須的控制措施**（Annex A 8.15 / 8.16）。

- 沒有 log → 事情發生後完全追不到
- 有 log 但不看 → 等於白做工
- 有 log 又有監控 → 才能在早期發現異常

想像一下： 一台電腦連續 10 分鐘爆 100 次錯誤登入，如果沒有人發現，可能就是 AD 被暴力破解的開端。

---

## 工具再多，還是要有人盯

SIEM、SOAR、AI 偵測再厲害，都只是輔助。 最關鍵的還是：**有人要每天打開來看，並且能判斷什麼是真正的威脅**。 不然就會落到「工具很多，但都是高級展示品」的窘境。

---

## 小結

> **「沒有監控，你什麼都不知道。」**

備份讓資料回得來、災害復原讓系統活得下去，但 **沒有監控，你根本不會知道什麼時候該啟動這些計畫**。 這就是日誌與監控的價值。

> 不過說真的還是希望企業注重資安這塊，多請點人 工具是冰冷的，但人的生活是真實的。別讓工程師的假日，綁在一封 EDR 郵件上。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10378945
`,kT=`**「如果想轉職資安，要從哪裡開始？」**

說真的，資安的範圍大到你會覺得無從下手。 一堆名詞：Nmap、SIEM、EDR、SOC、APT… 到底要先學哪一個？

其實最簡單的方法就是 —— **去看求職網站上的職缺**。 因為 JD（Job Description）才是最誠實的需求。

---

## 從職缺看真實技能需求

> 大部分資安工程師會寫這幾個

- **弱點掃描 / 漏洞管理**：會操作 Nessus、OpenVAS 或類似工具
- **事件偵測與回應**：有用過 SIEM、EDR，能看 log、追異常
- **網路與系統基礎**：熟悉 TCP/IP、DNS，能處理 Windows/Linux 基本設定
- **程式與自動化**：至少懂一門語言（Python、Go），或能寫 Script 來省時
- **雲端安全**：AWS / Azure / GCP 基本防護經驗（有的職缺會寫「佳」）
- **證照**：CEH、Security+、CISSP、ISO 27001 常被列為加分項
- **軟實力**：細心、邏輯思考、耐心、溝通協調、英文讀寫能力

你可以看到，不會有人要求「一定要會全部」，但 **基礎 IT + 一兩項專長** 幾乎是標配。

---

## 技術面的基礎

資安不是憑空長出來的，它是 **IT 的延伸**。 所以轉職資安，第一步還是要打好 IT 基礎：

- **網路**：TCP/IP、DNS、Routing、防火牆
  → 可以把 CCNA 當成入門證照
- **系統**：Windows / Linux 基本操作
- **程式**：能看懂程式碼、會寫 Script（Python/Shell）做自動化

如果你走比較硬派技術，可以挑戰 CTF 六大領域：

1. Web
2. Crypto
3. Pwn
4. Reverse
5. Forensics
6. Misc

幾乎涵蓋大學資工的必修課，對轉職的人來說，是很完整的技能地圖。

---

## 技術 + 管理的切入點

不是每個人都要當「滲透高手」。 另一條路是走「技術 + 管理」：

- 學 ISO 27001 的概念，理解資安制度
- 了解風險管理、法規（GDPR、PCI DSS、個資法）
- 能把技術轉成管理聽得懂的語言（報告、簡報）

> 很多公司缺的就是「會講人話的資安人」。

---

## 證照的現實

證照的確是好敲門磚，但要注意成本。

> 因為真的很貴啊..

- **IT 基礎**：CCNA、Linux Essentials
- **資安入門**：Security+、CEH
- **進階管理**：ISO 27001 LA / LI、CISSP

> 先挑 **CP 值高、能快速讓你跨進門檻的**。 證照不是保證工作，但會讓 HR 至少願意多看你一眼。

---

原文連結：https://ithelp.ithome.com.tw/articles/10379737
`,PT=`回顧

不知不覺，這個系列也走到尾聲了。 第一次參加鐵人賽，真的正如它的名字一樣──很難。 尤其我還一次報了兩個系列，結果 **DevSecOps 系列**在中途就沒能繼續更新。 但其實也不完全是沒時間，而是過程中踩了不少坑，例如天真地以為「今天發兩篇，明天就能休息」，結果後天文章上面直接寫著你 **已失敗**...。

原以為三十天很簡單，卻在第 20 天開始就明顯感受到題材枯竭。 回顧這段時間，我大致分享了 **資安工程師的日常工作**，以及在這條路上需要掌握的各種知識與心態。

在撰寫的同時，其實我也等於在整理自己一路以來的學習與經驗。 這些並不是教科書上的章節，而是每天可能遇到的真實場景。

當然過程中我也希望我的字眼是順暢且有趣，能讓讀者願意一直讀下去，所以不免俗也有借助 AI 來潤色。

---

## 文章總覽

> 希望這些主題能幫助對資安領域有興趣的人，至少摸到一點皮毛。

| Day | 主題 |
| --- | --- |
| 1 | Day 1- 法規推著我上場，學習讓我留下 |
| 2 | Day 2 - 公開情資很重要 |
| 3 | Day 3 - 鐵裝還是布甲？資安裝備選擇題 |
| 4 | Day 4 - 公司的第一道防線 |
| 5 | Day 5 - 文件地獄：葵花寶典? |
| 6 | Day 6 - EDR：手上那把神器 |
| 7 | Day 7 - IT 部門人少，資安工程師的多重宇宙 |
| 8 | Day 8 - 漏洞掃描大冒險：外包勇者 vs 自建工匠 |
| 9 | Day 9 - 什麼M365除了Word，也有資安產品? |
| 10 | Day 10 - 微軟有Zero Trust架構嗎? |
| 11 | Day 11 - 資料保護：別讓公司機密「長翅膀」飛出去 |
| 12 | Day 12 - 即使資料保護再嚴密，也擋不住一台失守的裝置 |
| 13 | Day 13 - 打帳密已經過時了?大門不只要鎖，還要驗明正身 |
| 14 | Day 14 - 資安工程師的週末小結 |
| 15 | Day 15 - 切碎內網，才能防止駭客橫向移動 |
| 16 | Day 16 - 不出手也能「看光光」：被動盤點你公司的對外曝險 |
| 17 | Day 17 - 為什麼一定要管「特權帳號」？ |
| 18 | Day 18 - 如果明天 DB 爆掉，你撐得住嗎？ |
| 19 | Day 19 - 如何打造一個可靠的備份策略？ |
| 20 | Day 20 — 為什麼要做災害復原？ |
| 21 | Day 21 - 資安專責人員 |
| 22 | Day 22 - 公司電腦上，還有隱私嗎？ |
| 23 | Day 23 - Patch Management 是一項既必要又棘手的任務。 |
| 24 | Day 24 - 風險評鑑：年度BOSS戰開打 |
| 25 | Day 25 - 一封垃圾郵件，可能就是資安危機的開端？ |
| 26 | Day 26 - 從T65K2到T1566：MITRE ATT&CK入門指南 |
| 27 | Day 27 - 為什麼藍隊要學MITRE ATT&CK？ |
| 28 | Day 28 - 沒有監控，你什麼都不知道 |
| 29 | Day 29 - 轉職資安人必備技能 |
| 30 | Day 30 - 尾聲：資安人的三十天 |

---

## 學校 vs. 公司

我一直覺得，**大學所學與公司實務之間，有很大的落差**。 在學校，我們習慣寫程式、做專題，可能用 VM 跑個小實驗就結束。 但一進公司，就會馬上被丟進一個完整的 IT 環境：

- **AD（Active Directory）**：帳號、群組、權限，錯一個就可能全公司登不進去。
- **DNS**：小小一筆設定錯誤，整個網路像失憶一樣。
- **ERP、MES、產線系統**：這些是公司營運的命脈，任何資安事件都可能造成實際金錢損失。

學校教的是基礎，但公司要的是能把基礎套進真實場景的人。 這也是為什麼我希望，這個系列能幫助剛踏入資安領域的朋友，有個更貼近實務的參考。

---

## 心得

資安領域瞬息萬變，每天都有新的威脅、工具、框架。 但我仍然希望這個產業能 **更包容新手、願意培育人才**。 畢竟，沒有人一開始就能看懂 \`T1566\` 或 \`CVE-2025-xxxx\`，大家都是從踩坑、出錯、被問倒中慢慢成長的。

如果你現在正覺得「自己什麼都不會」，那很正常。 重要的是保持好奇心，願意去翻、去試、去問。

---

## 結語

三十天的挑戰雖然告一段落，但資安的學習永遠不會結束。 對我來說，這更像是存了一個「里程碑存檔點」。 未來我還會繼續往前走，學更多東西，踩更多坑，再把故事寫下來。

當然，**明年我還是會再參加鐵人賽**。 只是這次經驗也讓我發現，臨時想到什麼就寫什麼，文章雖然真實，但缺乏系統性。 所以下一次，我會花點時間先規劃主題架構，讓整個系列更有脈絡，不只是「日更挑戰」，而是真正能幫助別人、也能沉澱自己的知識旅程。

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10379242
`,TT=`# Day 1 - 為什麼漏洞需要標準化通報？從 CVE 說起

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理  
> 本週主題：CVE 與 CNA 基礎

[![CVE Program 官方 Logo](/blog-assets/ithome-2026/cve-logo-official.svg)](https://www.cve.org/)

*CVE® Logo 來源：[CVE Program](https://www.cve.org/)，依官方 Logo Usage Guidelines 原樣使用。*

假設今天群組裡丟進三個連結：一篇研究者的 PoC、一份廠商公告，還有一則「這個洞正在被打」的情資。三個標題不一樣，描述方式也不一樣。第一個問題往往不是漏洞多嚴重，而是：**這三篇講的是同一件事嗎？**

這種場面在漏洞處理裡很普通。研究者習慣從攻擊手法切入，廠商關心受影響與修補版本，防禦端先看有沒有利用跡象，系統管理者只想知道今晚要不要加班更新。大家都沒有說錯，只是各自站在不同的位置說話。

這就是標準化漏洞通報存在的原因。CVE 不是為了取代完整的技術報告，而是提供一個共同識別漏洞的方式，讓不同角色能先對齊：「我們現在討論的是哪一個問題？」

![漏洞資訊從不同來源匯整到共同 CVE 識別，再連結修補、資產盤點與風險排序](/blog-assets/ithome-2026/day-01-disclosure-flow.svg)

## 三個標題，可能其實是同一個洞

以身分驗證繞過為例，研究者可能寫「某產品登入流程可被繞過」，廠商公告使用 \`Authentication bypass in product X\`，社群整理時又變成「未授權攻擊者可存取管理功能」。

如果沒有共同識別碼，後續追蹤會變得麻煩。維運人員不確定這三篇是不是同一個漏洞；資安平台可能把它們當成三個事件；不同資料庫之間也難以穩定關聯。

標準化的目的，就是降低這種混亂。CVE ID 讓漏洞有一個可被引用、查詢、關聯的識別方式，例如：

\`\`\`text
CVE-YYYY-NNNN
\`\`\`

它不是漏洞的全部內容，但它像是一個索引鍵。只要索引鍵穩定，後續的風險評分、弱點分類、修補資訊、利用狀態、資產盤點，都比較容易串在一起。

## CVE 解決的是「識別」問題，不是所有問題

很多人第一次接觸 CVE 時，會以為 CVE 就等於完整的漏洞分析報告。其實比較精準的說法是：CVE 主要解決漏洞識別與資訊交換問題。

一筆 CVE Record 通常會包含漏洞描述、受影響產品或版本、參考連結、CWE、CVSS 等資訊，但 CVE 本身並不保證所有細節都已經完整到可以重現漏洞。完整技術細節通常還是會出現在 vendor advisory、研究者文章、修補 commit、PoC 或其他公開資料裡。

所以在閱讀 CVE 時，可以把它當成一個入口：

- 先用 CVE ID 確認漏洞身分
- 再看描述理解問題輪廓
- 接著看受影響版本與參考資料
- 最後搭配 CVSS、EPSS、KEV、PoC 等資料做風險判斷

這樣比較不會把 CVE 當成萬能答案，也比較符合實務上的使用方式。

## 為什麼標準化對防禦者很重要？

對防禦者來說，漏洞資訊最大的挑戰通常不是「知不知道有漏洞」，而是「能不能快速判斷跟自己有沒有關係」。

標準化資訊至少帶來幾個好處。

第一，它讓資產盤點可以對應漏洞。當掃描器、SBOM、弱點管理平台、修補公告都能引用同一個 CVE ID，組織就比較容易回答：「我們有沒有受影響版本？」

第二，它讓風險排序更有基礎。CVSS 可以描述漏洞技術嚴重性，EPSS 可以補充被利用機率，CISA KEV 這類清單可以指出已知遭利用狀態。這些資料能被串接，很大一部分是因為 CVE ID 提供了共同的關聯點。

第三，它降低跨團隊溝通成本。工程、維運、資安、管理層在討論漏洞時，如果都能引用同一個識別碼，就比較不容易在名稱、版本、影響範圍上各說各話。

## 一個好的通報，不只是「有洞」

漏洞通報的品質，會直接影響後續修補與風險判斷。如果描述只寫「存在安全漏洞」或「可造成未授權存取」，讀者仍然會有很多疑問：

- 哪個產品或元件受影響？
- 哪些版本受影響？
- 攻擊者需要什麼條件？
- 成功利用後會造成什麼影響？
- 使用者該去哪裡看修補資訊？

因此，標準化不是把文字變得制式，而是讓必要資訊更容易被檢查、理解與重複使用。好的漏洞描述通常會盡量回答「誰、在哪裡、因為什麼問題、在什麼條件下、造成什麼影響」。

例如，比起這樣寫：

\`\`\`text
某系統存在漏洞，攻擊者可取得資料。
\`\`\`

更好的方向會是：

\`\`\`text
某產品在特定版本中，因為未正確限制某功能的存取權限，遠端已驗證攻擊者可能讀取原本不應存取的資料。
\`\`\`

這段仍然是泛化範例，但它至少把產品範圍、版本概念、攻擊條件、問題原因和影響方向放進同一句話裡。

## 先從 CVE 把地圖攤開

CVE 是這個系列的起點，因為很多漏洞知識都會圍繞它展開。

接下來幾天會依序拆開幾個常見但容易混在一起的概念：CVE ID、CVE Record、CNA、NVD、Vendor Advisory。之後會進入 CWE、CAPEC、CVSS、EPSS 等主題。

如果把漏洞通報想成一份資料表，CVE ID 像是主鍵；CWE 幫助描述弱點類型；CAPEC 描述攻擊模式；CVSS 描述技術嚴重程度；EPSS 補充利用可能性。這些資料不一定都能回答同一種問題，但合在一起，會讓漏洞資訊更容易被理解、搜尋、排序與處理。

![以 CVE ID 為中心，連結 CWE、CAPEC、CVSS、EPSS 與 KEV 的漏洞知識地圖](/blog-assets/ithome-2026/day-01-knowledge-map.svg)

## Day 1 先停在這裡

今天先建立一個基本觀念：漏洞需要標準化通報，不是因為大家喜歡填表，而是因為漏洞資訊會被很多角色重複使用。

CVE 的核心價值，是讓不同資料來源能對齊同一個漏洞。它不等於完整技術報告，也不等於風險的全部答案，但它是後續分類、評分、修補追蹤與風險管理的重要入口。

下一篇就從最常被混用的三個名詞下手：CVE ID、CVE Record、CVE List。平常聊天時混著說無妨，真的要查資料或寫系統時，它們可不能算同一樣東西。

## 參考資料

- CVE Program: https://www.cve.org/
- CVE Logo Usage Guidelines: https://www.cve.org/Resources/Media/LogoGuidelines/CVE-Logo-Usage-Guidelines.pdf
- CVE Record Format: https://github.com/CVEProject/cve-schema
- FIRST CVSS: https://www.first.org/cvss/
- FIRST EPSS: https://www.first.org/epss/
`,AT=`# Day 2 - CVE 是什麼？CVE ID、CVE Record、CVE List 的差異

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVE 與 CNA 基礎

「可以幫忙查一下這個 CVE 嗎？」

這句話通常不會有人聽不懂，但接著打開瀏覽器時，問題就來了：要確認的是編號、漏洞內容，還是公開狀態？三件事都能被簡稱成「查 CVE」，實際上查的是不同東西。

CVE Program 的術語表甚至直接把單獨使用的「CVE」標成 *Ambiguous*，也就是語意不夠明確。因為 CVE 可能指 CVE ID、CVE Record、CVE List，甚至是 CVE Program 本身。

這些名詞平常混著講不一定會出問題，但進入漏洞通報、資料交換或自動化處理後，差一個詞，指的可能就是不同層次的資料。

先暫時這樣記：ID 是門牌，Record 是門牌裡那份會更新的資料，List 則是收錄這些門牌與資料的總目錄。這個比喻不完全精確，但拿來分清楚三個層次很好用。

## 第一層：CVE ID 是識別碼

CVE ID 的格式看起來很簡單：

\`\`\`text
CVE-YYYY-NNNN
\`\`\`

它由三個部分組成：固定的 \`CVE\` 前綴、年份，以及四位以上的序號。

![CVE ID 由固定前綴、年份與四位以上序號組成](/blog-assets/ithome-2026/day-02-id-anatomy.svg)

例如：

\`\`\`text
CVE-2021-44228
\`\`\`

這裡有兩個很常見的誤解。

第一，年份不一定是漏洞被發現的年份。依 CVE Program 的說明，年份代表 CVE ID 被保留的年份，或漏洞公開的年份。因此，不能只看 ID 中的年份就推斷漏洞何時被研究者發現、何時通報廠商，或何時完成修補。

第二，最後一段不是固定四位數。四位只是最低長度，序號可以有五位、六位或更多位，也沒有規定上限。若系統用只接受 \`CVE-YYYY-NNNN\` 的正規表示式驗證，日後很可能漏掉合法的 CVE ID。

比較實用的格式概念會是：

\`\`\`regex
^CVE-[0-9]{4}-[0-9]{4,}$
\`\`\`

不過，格式正確只代表它「長得像」CVE ID，不代表這筆 ID 已公開、內容完整，甚至不代表它仍然有效。要知道這些狀態，就必須繼續看 CVE Record。

## 第二層：CVE Record 是漏洞資料

CVE ID 只回答「是哪一個漏洞」，CVE Record 才開始回答「這個漏洞是什麼」。

依 CVE Program 的現行說明，CVE Record 是由 CNA 提供、與 CVE ID 關聯的描述性資料，並以人類和機器都可讀的格式提供。公開紀錄至少會包含：

- CVE ID
- 簡短的漏洞描述
- 受影響產品與版本
- 相關公開參考資料

實際的 CVE Record 還可能包含 CWE、CVSS、問題類型、credits、受影響版本的狀態，以及 CNA 或 ADP 提供的其他資料。

可以把兩者想成資料庫的主鍵與資料列：CVE ID 是用來定位的 key；CVE Record 則是掛在這個 key 底下、可被更新與擴充的內容。

### CVE Record 不只有 Published

CVE Record 常見的三種狀態是：

| 狀態 | 代表意義 |
| --- | --- |
| \`RESERVED\` | CNA 已保留 CVE ID，用於協調與管理，但還沒有準備公開漏洞細節 |
| \`PUBLISHED\` | 必要資料已填入，CVE Record 已公開到 CVE List |
| \`REJECTED\` | 這個 CVE ID 與紀錄不應再使用 |

\`RESERVED\` 最容易造成誤解。看到一組 CVE ID，不代表一定能查到描述或受影響版本；它可能還在協調期間，公開頁面只顯示保留狀態。

\`REJECTED\` 也不是把資料完全刪除。被拒絕的紀錄仍會留在 CVE List，目的是讓查詢者知道這個 ID 已失效，避免它被重新使用，或讓不同資料來源繼續把它當成有效漏洞。

## 第三層：CVE List 是所有紀錄的目錄

CVE List 是所有 CVE Record 的集合。它不是單一漏洞，也不只是網頁上的搜尋結果，而是一份可供人員查詢、也可供系統下載與處理的公開目錄。

![CVE ID、CVE Record 與 CVE List 的三層關係](/blog-assets/ithome-2026/day-02-three-layers.svg)

CVE Program 在 GitHub 維護官方的 \`cvelistV5\` repository，提供 CVE JSON 5 格式的紀錄。對一般使用者來說，CVE 官網是搜尋與閱讀入口；對需要批次分析、資料同步或建立弱點平台的人來說，機器可讀的 CVE List 才是更重要的資料來源。

所以，「CVE List 有這個漏洞」比較精準的意思是：對應的 CVE Record 已存在於官方目錄中。至於內容是否已公開、是否被拒絕，仍要看該 Record 的狀態。

## 把三個名詞放回同一個情境

假設手上拿到 \`CVE-2021-44228\`。這串字是 **CVE ID**，作用是讓大家指向同一個漏洞；打開後看到的描述、產品、版本、references 與狀態，是 **CVE Record**；而能搜尋、下載並持續收錄其他 Record 的集合，就是 **CVE List**。

ID 本身不會隨描述更新而改號，Record 卻可能因版本範圍或 reference 修正而更新，List 也會持續新增與更新內容。這個區分對實務很有幫助。

當有人說「已經有 CVE」時，可以再確認：只是 ID 已被保留，還是 Record 已經 Published？當掃描器顯示一個 CVE ID 時，也可以確認它引用的是哪一版資料，以及是否有同步後續更新。

同樣地，不能因為找到 CVE ID，就直接假設 CVSS、CWE、修補版本或 PoC 一定存在。那些都是 Record 內容或外部資料來源提供的資訊，不是識別碼本身自帶的屬性。

## 實際查詢時怎麼走

拿到一組 ID 後，先確認它真的對應官方紀錄，再看 Record 是 Reserved、Published 還是 Rejected。若已公開，接著讀產品、版本、描述與 references；資料仍不足時，才往 vendor advisory、NVD、修補 commit 或其他情資來源延伸。

這幾步不複雜，卻能避免一個很常見的跳躍：找到編號，就以為已經理解漏洞。

## 回到開頭那句「查一下 CVE」

如果對方要的是編號，就查 CVE ID；要理解內容，就讀 CVE Record；要做搜尋、同步或批次處理，談的則是 CVE List。

平常口語上可以統稱 CVE，但在寫通報、設計 API、整理資料欄位或確認公開狀態時，最好把名詞說清楚。精準用詞不只是文字潔癖，它會直接影響後續的人如何理解與處理資料。

下一篇換個方向，不再拆資料，而是拆角色：CNA、Root、MITRE 與 NVD 到底各自在忙什麼。

## 參考資料

- CVE Program Terminology: https://www.cve.org/Resources/Media/Archives/OldWebsite/about/terminology.html
- CVE Program Process: https://www.cve.org/about/Process
- CVE Frequently Asked Questions: https://www.cve.org/Resources/Media/Archives/OldWebsite/about/faqs.html
- CVE List V5: https://github.com/CVEProject/cvelistV5
- CVE Record Format: https://github.com/CVEProject/cve-schema
`,bT=`# Day 3 - CNA 是什麼？CNA、Root CNA、MITRE、NVD 的角色

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVE 與 CNA 基礎

「這個 CVE 是 MITRE 發的嗎？」

「要申請 CVE，是不是去 NVD 填資料？」

這兩句都很常見，也剛好把 CVE 生態系最容易混淆的地方點了出來：名字都看過，但不一定知道它們分別在流程的哪一站。

CVE Program 並不是由單一組織集中處理全球所有漏洞。它採用分層、分工的架構，讓不同產品廠商、開源專案、安全組織與協調單位，可以在各自被授權的範圍內指派 CVE ID 並發布 CVE Record。

今天先把四個最常混在一起的角色拆開：CNA、Root、MITRE 與 NVD。

![CNA、Root、MITRE 與 NVD 在 CVE 生態系中的角色關係](/blog-assets/ithome-2026/day-03-role-map.png)

## CNA：實際處理指派與發布的角色

CNA 是 **CVE Numbering Authority** 的縮寫。依 CVE Program 的定義，CNA 是經授權、在特定 scope 內，負責定期指派 CVE ID 並發布對應 CVE Record 的組織。

關鍵字是 **scope**。

一個 CNA 的權限通常不是「任何漏洞都能處理」，而是有明確範圍，例如：

- 自己開發與維護的產品
- 特定開源專案或生態系
- 某個國家、產業或協調範圍
- 由研究或漏洞協調業務涵蓋的產品

因此，收到漏洞報告後，第一個問題往往不是嚴重度幾分，而是：「這個問題是否在自己的 scope 內？」若不在，應協助辨識更適合的 CNA 或依規則進行協調，而不是因為能看到漏洞就直接指派。

CNA 的核心工作通常包括：

1. 確認通報是否落在自身 scope。
2. 判斷問題是否符合 CVE Program 的漏洞與指派規則。
3. 避免與其他 CNA 重複指派。
4. 保留或指派 CVE ID。
5. 整理描述、受影響產品與版本、references 等資料。
6. 將 CVE Record 發布到 CVE List，並在需要時更新。

所以 CNA 不只是「發號碼的單位」。真正影響紀錄品質的，是它如何確認範圍、理解漏洞、整理資料與協調公開。

## Root：管理與支援 CNA 的角色

Root 位在 CNA 的上層，主要負責特定 scope 內的管理與治理。依目前 CVE Program 的架構，Root 可以管理 CNA、CNA of Last Resort，甚至其他 Root。

Root 常見的責任包括：

- 招募與 onboarding 新 CNA
- 提供規則、訓練與操作指引
- 管理下層 CNA 的帳號與 CVE ID 配額機制
- 確認 CNA 遵循 CVE Program 規則
- 處理 scope 重疊、爭議與升級事項
- 確保範圍內有 CNA-LR 可以承接沒有其他 CNA 處理的漏洞

可以把 CNA 理解為第一線的指派與發布角色，把 Root 理解為制度與品質治理角色。Root 不需要逐筆代替所有 CNA 撰寫紀錄，但要確保其管理範圍內的運作一致、可升級，也有人能處理責任空缺。

### Root 與 Top-Level Root

目前 CVE Program 的正式架構還有 **Top-Level Root（TL-Root）**。TL-Root 直接向 CVE Board 責任，並管理自己底下的 Root 與 CNA 階層。

這表示 CVE Program 不是單一路徑，而是多個具有不同 scope 的階層。遇到問題時，通常先從最接近產品或範圍的 CNA 開始；無法處理時，再依階層向 Root 或 TL-Root 升級。

## MITRE：一個組織，同時扮演多個角色

MITRE 容易讓人混淆，是因為它不是只扮演一個角色。

依 CVE Program 目前公開的組織架構與 partner 資訊，MITRE 同時具有：

- **Secretariat**：提供行政與後勤支援，維護 CVE Program 基礎設施。
- **Top-Level Root**：管理其 Root、CNA 與 CNA-LR 階層。
- **CNA-LR**：在其適用 scope 內，承接未被其他 CNA scope 涵蓋的漏洞。

因此，「MITRE 在維護 CVE Program」與「某筆 CVE Record 由 MITRE 處理」是兩件不同的事。很多 CVE Record 是由全球各地的 CNA 直接發布；只有在對應 scope 與流程下，MITRE 才會是該筆紀錄的指派或發布角色。

閱讀 CVE Record 時，應查看 CNA container 中的 provider metadata 或頁面標示，確認真正負責該筆紀錄的 CNA，而不是看到 CVE 就一律歸因於 MITRE。

## NVD：CVE 的下游豐富化資料庫

NVD 是 **National Vulnerability Database**，由美國 NIST 維護。它會接收已發布到 CVE List 的紀錄，再依 CVE references 與公開資訊進行 enrichment。

NVD 可能補充的內容包括：

- CVSS v4.0 與 CVSS v3.1 評分
- CWE 弱點分類
- CPE applicability statements
- reference tags 與其他可供弱點管理使用的 metadata

NVD 不負責替 CNA 指派 CVE ID，也不是 CVE Record 第一次發布的來源。更精準的資料流是：

\`\`\`text
CNA 發布 CVE Record → CVE List → NVD 收錄並進行 enrichment
\`\`\`

這也解釋了為什麼 CVE 官網與 NVD 顯示的欄位可能不同。CVE Record 可能已經 Published，但 NVD enrichment 尚未完成；也可能 CNA 提供了一組 CVSS，NVD 後續根據公開資料提供另一組評估。兩者不一定互相衝突，而是資料提供者與用途不同。

## 沿著一筆通報走一次

假設一份漏洞報告送到產品 CNA。CNA 先確認 scope、判斷是否符合指派規則，接著保留 ID、整理資料並發布 Record。遇到跨 scope、重複指派或治理問題時，Root 可能介入協調；再往上，TL-Root 與 Secretariat 維持整個 Program 的運作，而 MITRE 同時承擔其中幾種角色。

Record 公開後，NVD 才從下游接手，依公開資訊補上 CVSS、CWE、CPE 等 enrichment。換句話說，CNA 與 Root 位在「指派與發布」這條線上，NVD 位在「公開後分析」這條線上。MITRE 則不能只用一個框框概括，必須看當下談的是它的哪個角色。

## 實務上應該找誰？

如果要通報漏洞或申請 CVE ID，可以依這個順序思考：

1. 先查產品供應商或專案是否本身就是 CNA。
2. 若不是，查是否有涵蓋該產品、產業或協調範圍的 CNA。
3. 找不到適合的 CNA，再依 CVE Program 提供的管道尋求 CNA-LR 協助。
4. 不要把 NVD 當成 CVE ID 申請入口；NVD 是資料發布後的下游服務。

選對窗口能減少轉交時間，也能降低 scope 重疊與重複指派的風險。

## 下次別再找錯窗口

CVE Program 比較像一個分散合作的網路，不是一間把全球漏洞全部收進來處理的總公司。要通報或申請 ID，找 scope 合適的 CNA；遇到治理與升級問題，才往 Root 體系走；要看公開後的 NIST 分析，再開 NVD。

角色釐清後，下一篇就比較好走了：直接跟著一個漏洞，從發現一路走到公開。

## 參考資料

- CVE Program Structure: https://www.cve.org/ProgramOrganization/Structure
- CVE Partner Roles: https://www.cve.org/PartnerInformation/ListofPartners
- MITRE Partner Information: https://www.cve.org/PartnerInformation/ListofPartners/partner/mitre
- CNA Operational Rules: https://www.cve.org/resourcessupport/allresources/cnarules
- NVD CVEs and the NVD Process: https://nvd.nist.gov/general/cve-process
- NVD General Information: https://nvd.nist.gov/general
`,DT=`# Day 4 - 一個漏洞從發現到公開的生命週期

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVE 與 CNA 基礎

漏洞報告寄出去之後，研究者最常問的是：「什麼時候會有 CVE？」

這題沒有固定答案。有些問題很快就能確認產品、版本與影響；有些光是重現就要來回幾次，還可能碰上多家供應商、共用元件或公開時間協調。CVE ID 也不是按下按鈕就會立刻連同完整資料出現在網站上。

CVE Program 將主要流程整理成六個階段：

\`\`\`text
Discover → Report → Request → Reserve → Submit → Publish
\`\`\`

![CVE Program 官方 CVE Record lifecycle：Discover、Report、Request、Reserve、Submit、Publish](/blog-assets/ithome-2026/day-04-cve-record-lifecycle-official.jpg)

*圖：CVE Record Lifecycle，來源：[CVE Program Process](https://www.cve.org/about/Process)。*

這張圖看起來是一條直線，但實務上每個階段都可能需要補資料、重新確認，甚至回到前一步。接下來逐段拆開。

## 1. Discover：發現可能的漏洞

流程從某個人或組織發現疑似安全問題開始。發現者可能是研究人員、產品使用者、內部測試團隊、自動化掃描系統，或其他供應鏈參與者。

這個階段的重點是「可能的漏洞」，而不是已經確定能取得 CVE ID。

初步發現通常需要回答：

- 問題發生在哪個產品或元件？
- 哪些版本可能受影響？
- 是否能穩定重現？
- 需要什麼攻擊條件？
- 成功利用後可能造成什麼影響？

掃描器警告、程式崩潰或不預期行為都可以是線索，但還需要進一步確認根因與安全影響。

## 2. Report：通報給適合的窗口

發現者接著將問題通報給 CVE Program partner，實務上通常會先找產品供應商、專案維護者，或涵蓋該產品 scope 的 CNA。

選對窗口很重要。若產品本身已有 CNA，由最了解產品與版本的人處理，通常更容易確認受影響範圍與修補方式。找錯 CNA 則可能需要轉交，增加協調時間。

一份可處理的初始通報不一定要像完整研究報告，但至少應盡量包含：

- 產品與元件名稱
- 受影響版本或測試版本
- 重現步驟與必要條件
- 實際結果與預期結果
- 安全影響
- PoC、log、封包或 crash 資訊等證據
- 預計公開時間或已知公開狀態

若漏洞尚未公開，通報者與處理單位也要注意資訊揭露範圍，避免協調尚未完成就意外公開可利用細節。

## 3. Request：確認是否需要 CVE ID

收到通報後，CNA 會先確認問題是否在自身 scope，並依 CVE Program 規則判斷是否適合指派 CVE ID。

這裡不是單純按下「產生編號」。CNA 可能還要確認：

- 是否確實存在安全影響
- 是否已有其他 CVE ID
- 問題應算一個還是多個漏洞
- 是否與既有問題具有相同根因與修補方式
- 產品、版本與公開狀態是否足以支撐判斷

若 scope 不符，通報可能被引導到其他 CNA；若資訊不足，也可能先要求補件。這不等於否定漏洞，而是目前還不足以完成指派判斷。

## 4. Reserve：保留 CVE ID

符合條件後，CNA 可以保留一組 CVE ID。此時 Record 進入 \`RESERVED\` 狀態。

\`\`\`text
CVE-2026-NNNN  RESERVED
\`\`\`

\`RESERVED\` 代表這組 ID 已被用於早期協調與管理，但 CNA 還沒有準備好公開完整漏洞資料。它可以被放進修補流程、advisory 草稿或跨組織協調文件中，讓大家引用同一個識別碼。

需要特別注意：

- Reserved 不等於 Published。
- Reserved 不代表漏洞細節已可查詢。
- Reserved 不代表修補已完成。
- Reserved 也不代表外部一定完全不知道這組 ID。

如果 CVE ID 已在公開來源出現，但 Record 尚未發布，就可能形成 Reserved but Public 的情況。對使用者來說，這通常只表示「知道有這組 ID」，不代表已有足夠資料判斷風險。

## 5. Submit：整理並提交 CVE Record 資料

保留 ID 後，CNA 需要準備可公開的 CVE Record。依 CVE Program 的流程說明，資料包括但不限於：

- 受影響產品
- 受影響或已修補版本
- 漏洞類型、根因或影響
- 至少一個公開 reference

此階段常與廠商修補、advisory 撰寫及公開時間協調並行。CVE 描述要讓讀者知道「哪個產品因為什麼問題，在什麼條件下造成什麼影響」，references 則提供更完整的修補或技術資訊。

如果 Record 只寫「產品存在安全漏洞」，即使格式能送出，也很難支援後續的資產判斷、風險排序與修補追蹤。提交前的品質檢查，因此是整個流程中很重要的一段。

## 6. Publish：發布到 CVE List

當最低必要資料準備完成後，負責的 CNA 會將 CVE Record 發布到 CVE List。Record 狀態轉為 \`PUBLISHED\`，一般使用者可以在 CVE 官網搜尋，也可以透過機器可讀資料取得。

\`\`\`text
RESERVED → PUBLISHED
\`\`\`

發布後，下游系統才會開始各自的處理。例如 NVD 收錄 Published CVE 後，可能根據 references 與公開資訊補充 CVSS、CWE、CPE 與 reference tags。

因此，同一天內不同網站顯示的資料量可能不同：CVE Record 已發布，不代表每個掃描器、資料庫或情資平台都已同步完成。

## 發布不是流程的終點

官方 lifecycle 圖畫到 Publish，但公開後仍可能發生後續變化：

- 補充或修正受影響版本
- 更新描述與 references
- 新增 CVSS、CWE 或其他 ADP enrichment
- 修正錯誤的產品資訊
- 因重複指派或其他原因將 Record 改為 \`REJECTED\`

CVE Record 是可更新的資料，不是發布後就永遠不變的靜態公告。使用者在做風險判斷時，除了第一次發布日期，也應注意最後更新時間與資料來源。

## 一個簡化的時間線範例

假設某研究者發現產品的權限檢查缺失，流程可能是：

1. 研究者確認未授權帳號可以存取管理功能。
2. 透過廠商的安全通報管道送出報告。
3. 廠商確認問題，並由其 CNA 判斷符合 CVE 指派規則。
4. CNA 保留 CVE ID，供修補與 advisory 協調使用。
5. 廠商確認受影響版本、完成修補，並準備公開 reference。
6. CNA 發布 CVE Record，廠商同步發布 advisory。
7. NVD 與其他平台陸續收錄或補充資料。

這是一條理想化時間線。若涉及多家供應商、共享元件或 supply chain，scope、版本與公開時間的協調可能更複雜。

## 幾個容易看錯的時間點

拿到 CVE ID，不代表內容已經公開，它可能仍停在 Reserved；看到 Record Published，也不能直接推論修補已經提供，仍要打開 vendor advisory 與 references。ID 裡的年份同樣不是漏洞發現年份，不能拿來還原完整時間線。

至於 CVE.org 已經查得到、NVD 卻還沒有評分，通常只是下游 enrichment 尚未完成，不代表 CVE 無效。把這幾條時間線混在一起，才會產生「明明有 CVE，為什麼這裡還沒有資料」的疑問。

## 公開不是流程的句點

一個漏洞從發現到公開，大致經過：

\`\`\`text
發現 → 通報 → 請求與判斷 → 保留 ID → 整理資料 → 發布 Record
\`\`\`

真正困難的地方通常不在取得一組編號，而是確認 scope、避免重複、釐清受影響版本、整理可公開資料，以及協調適當的揭露時間。

下一篇打開實際的 CVE Record 結構，看識別資料、產品版本、影響與資料來源分別被放在哪裡。

## 參考資料

- CVE Program Process: https://www.cve.org/about/Process
- CVE Program Glossary: https://www.cve.org/ResourcesSupport/Glossary
- CNA Operational Rules: https://www.cve.org/resourcessupport/allresources/cnarules
- Reserve IDs and Publish Records for CNAs: https://www.cve.org/ReportRequest/ReserveIDsPublishRecordsForCNAs
- NVD CVEs and the NVD Process: https://nvd.nist.gov/general/cve-process
`,IT=`# Day 5 - CVE Record 裡通常包含哪些欄位？

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVE 與 CNA 基礎

第一次打開 CVE JSON，畫面不太友善。\`cveMetadata\`、\`containers\`、\`affected\`、\`problemTypes\` 一層包一層，很容易看幾行就回到網頁版，只留下「反正有描述和分數」的印象。

但只看描述和分數，往往會漏掉真正影響判斷的東西：資料是誰提供的、版本邊界怎麼寫、Record 後來有沒有更新。今天不打算背 schema，而是把一筆 Record 拆成幾個讀得懂的區塊。

## 先看整體：CVE JSON 5.x 的三個區塊

目前的 CVE Record 採用 CVE JSON 5.x 格式。若先忽略細節，可以把它理解成三層：

![CVE Record 結構示意：cveMetadata、CNA container 與可選的 ADP container](/blog-assets/ithome-2026/day-05-record-anatomy.png)

1. \`cveMetadata\`：這筆 Record 的識別、狀態與時間資料。
2. \`containers.cna\`：負責發布的 CNA 所提供的主要漏洞資料。
3. \`containers.adp\`：ADP 後續補充的 enrichment，可有零個或多個。

最外層還會看到 \`dataType\` 與 \`dataVersion\`，用來表明資料類型與格式版本。它們比較像機器讀取時的路標，不是漏洞本身的技術內容。

## cveMetadata：這筆紀錄是誰、由誰處理、處於什麼狀態

\`cveMetadata\` 回答的是 Record 身分與管理狀態。常見欄位包括：

- \`cveId\`：例如 \`CVE-2026-12345\`。
- \`assignerOrgId\`：指派這組 ID 的組織識別碼。
- \`state\`：常見為 \`PUBLISHED\` 或 \`REJECTED\`。
- \`dateReserved\`：ID 被保留的時間。
- \`datePublished\`：Record 首次發布的時間。
- \`dateUpdated\`：Record 最近更新的時間。

這些日期回答的是不同問題。\`dateReserved\` 不是公開日期，\`datePublished\` 也不表示當天才發現漏洞；\`dateUpdated\` 則可能因版本、描述或 reference 修正而改變。

閱讀時還要留意 \`state\`。如果狀態是 \`REJECTED\`，原本的 ID 可能因重複指派、不是安全問題或其他原因不再作為獨立漏洞使用。此時應閱讀 rejection reason，而不是沿用舊描述做判斷。

## containers.cna：CNA 發布的核心內容

一筆 Published Record 的主要內容通常放在 \`containers.cna\`。這裡的 CNA 是資料提供者，不代表所有欄位都一定由產品廠商填寫；實際來源仍取決於該筆漏洞由哪個 CNA 負責。

**先看 providerMetadata：誰提供這個 container**

這個區塊通常包含提供者的組織 ID、短名稱與更新時間。它能幫助讀者辨認這份 CNA container 是由哪個組織提交。

如果 Record 後來出現 ADP container，每個 container 也會有自己的 provider metadata，讓不同來源的資料不會混在一起。

**title 只是短標題**

\`title\` 用一行文字概括漏洞。好的標題通常會帶出產品、元件或弱點類型，例如「某元件的路徑穿越漏洞」，但它不是完整描述，也不適合承擔所有技術條件。

有些 Record 沒有 title，因此不能把它當成判斷漏洞內容的唯一入口。

**descriptions 才是人類可讀的漏洞描述**

\`descriptions\` 是陣列，通常至少包含語言代碼與文字內容。描述的核心任務，是讓讀者能回答：

- 哪個產品或元件有問題？
- 問題的根因或行為是什麼？
- 攻擊者需要哪些條件？
- 成功利用後會造成什麼影響？

例如，「某產品存在驗證不足」仍然太模糊；若能進一步說明未驗證的遠端攻擊者可透過特定介面修改設定，資訊才足以支援後續判斷。

描述也不等於完整技術報告。PoC、修補 commit、繞過方式或操作細節，通常會放在 advisory 或其他 references 中。

**affected：產品與版本範圍**

\`affected\` 是實務上最需要仔細看的區塊之一。常見資料包括：

- \`vendor\`：供應商或維護組織。
- \`product\`：受影響產品。
- \`versions\`：版本與狀態，例如 \`affected\`、\`unaffected\` 或 \`unknown\`。
- \`platforms\`：特定作業系統、硬體或執行平台。
- \`modules\`、\`programFiles\`、\`programRoutines\`：更細的受影響元件。
- \`defaultStatus\`：未逐一列出的版本預設狀態。

版本不一定只是一個固定字串，也可能是範圍：某版本起、某版本以前，或直到某個修補版本為止。閱讀時必須同時看邊界是否包含，以及 \`lessThan\`、\`lessThanOrEqual\` 等表示方式。

最危險的讀法，是看到產品名稱相同就直接判定資產受影響。產品分支、平台、模組、設定與版本邊界都可能改變結論。

**problemTypes：弱點分類**

\`problemTypes\` 常用來記錄 CWE，例如：

\`\`\`text
CWE-79: Improper Neutralization of Input During Web Page Generation
\`\`\`

它描述的是弱點類型或根因分類，不是另一個漏洞編號。CWE 可能由 CNA 提供，也可能在其他平台的 enrichment 中出現；有些 Record 則沒有足夠資訊選到精確 CWE。

與其為了填欄位勉強選一個看似接近的分類，不如先確認真正的失效機制。第 8 至 10 天會再完整討論 CWE 與根因判斷。

**metrics：嚴重程度資料**

\`metrics\` 可以承載 CVSS v3.1、CVSS v4.0 或其他評估資料，通常包含向量、分數與嚴重程度。

但要注意兩件事：

1. CVE ID 本身不自帶固定分數。
2. 不同資料提供者可能基於不同資訊與假設給出不同向量。

所以看到某網站的 CVSS 時，要一起確認版本、向量與評分來源。若 CNA container 沒有 metrics，也不代表這筆 CVE 無效。

**references：可公開查證的資料**

\`references\` 會列出與漏洞相關的公開網址，可能指向：

- Vendor security advisory
- 修補公告或 release notes
- Git commit、issue 或 pull request
- CERT/CC、協調單位或研究報告
- 技術分析與利用說明

有些 reference 還會帶 tags，例如 \`vendor-advisory\`、\`patch\` 或 \`exploit\`，幫助系統分類。不過 tag 只是提示，仍應打開原始頁面確認內容、版本與更新時間。

**還有 credits、timeline 與 supportingMedia**

Record 還可能包含：

- \`credits\`：致謝發現者、通報者或協調者。
- \`timeline\`：發現、通報、確認、公開等事件。
- \`supportingMedia\`：補充文字或媒體資料。
- \`solutions\`：修補或緩解方式。
- \`workarounds\`：暫時性替代措施。
- \`configurations\`：容易受影響的特定設定。
- \`exploits\`：已知利用資訊。

這些欄位很有價值，但不是每筆 Record 都會出現。缺少某個可選欄位，不應直接解讀成「沒有修補」、「沒有被利用」或「沒有人獲得致謝」。它可能只是資料未由該來源提供。

## containers.adp：由其他角色補充 enrichment

ADP 是 Authorized Data Publisher。它可以在 CNA 已發布的核心資料之外，加入額外分析或標準化內容，同時保留來源邊界。

這種設計很重要：如果 CNA 與後續分析者對評分或分類有不同判斷，資料不必互相覆蓋。讀者可以看到各自提供了什麼，再依用途決定採用方式。

因此，一筆 Record 裡同時出現多組 metrics 或 problem type 並不一定是資料衝突，也可能是不同 provider 的評估。比較時應看 container 與 \`providerMetadata\`，不能只抓第一個分數。

## 最低要求與常見欄位，不是同一件事

依 CVE Program 公開流程，發布 Record 時需要提供 CVE ID、簡短描述、受影響產品與版本，以及相關公開 references。實際 JSON schema 為了支援多語言、版本範圍、評分與 enrichment，能承載的欄位遠比最低發布資料多。

也就是說：

- CVSS 很常見，但不是判斷 CVE 是否存在的必要條件。
- CWE 很有用，但不是每筆都能立即精確分類。
- CPE 常在 NVD 使用，不應預設一定存在於 CNA container。
- 沒有 PoC，不代表沒有漏洞。
- 沒列 workaround，不代表一定沒有暫時措施，仍要查 vendor advisory。

把「沒有欄位」直接翻譯成「現實中不存在」，是讀漏洞資料時常見的推論錯誤。

## 真正查資料時，先看哪裡？

面對一筆陌生 CVE，通常先確認 ID、狀態與更新時間，再直接跳到 \`affected\` 看產品和版本。確定資產可能落在範圍內，才回頭細讀 description、CWE、CVSS 與 references。若有多個 container，還要看 provider，否則很容易把不同來源的評估混成同一份答案。

這個順序刻意把產品與版本放在分數前面。資產根本不在受影響範圍內，9.8 分也不是該資產的修補結論；反過來，Record 暫時沒有分數，也不是忽略它的理由。

CVE JSON 的欄位很多，不需要一次背完。先記住 metadata、CNA 核心資料與可選的 ADP enrichment，已經足夠應付大多數閱讀情境。下一篇再把視野拉遠，看看同一組 CVE ID 為什麼會出現在一堆不同網站上。

## 參考資料

- CVE Program Process: https://www.cve.org/about/Process
- CVE JSON 5 Schema: https://github.com/CVEProject/cve-schema
- CVE List V5 Repository: https://github.com/CVEProject/cvelistV5
- CVE Program Glossary: https://www.cve.org/ResourcesSupport/Glossary
`,RT=`# Day 6 - 漏洞資訊到底看誰？CVE/MITRE、NIST/NVD、CISA/KEV、FIRST 與 Vendor Advisory

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVE 與 CNA 基礎

把一組 CVE ID 貼進搜尋引擎，通常會同時看到 CVE.org、NVD、CISA、FIRST、廠商公告，外加幾個商業情資平台。每個頁面看起來都很正式，分數卻可能不一樣，受影響版本也不一定寫得同樣完整。

這時候問「哪個網站才是對的」其實問錯了。比較有用的問法是：**現在要找的是官方識別、技術評分、在野利用，還是修補方式？**

![漏洞資訊來源分工：CVE/MITRE、NIST/NVD、CISA/KEV、FIRST 與 Vendor Advisory](/blog-assets/ithome-2026/day-06-source-map.png)

## CVE Program：建立共同識別與基本紀錄

CVE Program 的核心任務，是用一致的 CVE ID 識別並描述公開的資安漏洞。CVE.org 上的 CVE List 是官方 CVE Record 集合。

它主要回答：

- 這個漏洞的官方 CVE ID 是什麼？
- Record 是 \`RESERVED\`、\`PUBLISHED\` 還是 \`REJECTED\`？
- 哪個 CNA 負責指派或發布？
- CNA 公開了哪些產品、版本、描述與 references？

CVE Program 是一個由多種角色共同運作的體系，不是所有 Record 都由 MITRE 單獨撰寫。產品廠商、研究組織、協調中心等 CNA，會在各自 scope 內指派 CVE ID 並發布 Record。

**那 MITRE 在哪裡？**

MITRE 在 CVE Program 中承擔 Secretariat、Top-Level Root 與 CNA of Last Resort 等職責，也維運 CVE 相關基礎服務。但「MITRE 管理 CVE Program」不等於「每一筆 CVE 都是 MITRE 發現、驗證或評分」。

閱讀 Record 時，應查看 assigner 與 CNA provider，而不是只因頁面位於 CVE.org 就把內容全部歸給 MITRE。

**適合查 CVE.org 的情境：**確認官方 ID、Record 狀態、CNA 原始資料與公開 references。

## NIST 與 NVD：把公開漏洞資料做成可分析的資料庫

NIST 是美國國家標準與技術研究院；NVD，也就是 National Vulnerability Database，是由 NIST 維運的漏洞資料庫。

NVD 會使用 CVE List 中的 Published CVE，並補充安全分析資料，例如：

- CVSS 評分與向量
- CWE 弱點分類
- CPE 產品與平台對應
- Reference tags
- 其他搜尋與分析所需資料

這類工作通常稱為 enrichment。它讓 CVE 更容易被資產管理、掃描器與風險流程使用，但 NVD 不是 CVE ID 的原始指派單位，也不是每一筆產品修補資訊的最終權威。

因此會出現幾種正常現象：

- CVE Record 已發布，NVD 頁面仍顯示待分析。
- CNA 與 NVD 都提供 CVSS，但向量或分數不同。
- NVD 的 CPE 尚未完整對應產品版本。
- Vendor advisory 已更新，NVD 尚未同步反映。

遇到差異時，不要只挑分數較高或頁面較熟悉的一方。先比較評分向量、分析時間、產品版本與各自引用的公開證據。

**適合查 NVD 的情境：**需要 NIST 提供的 CVSS/CWE/CPE enrichment，或要用結構化條件搜尋與交叉分析 CVE。

## CISA 與 KEV：哪些漏洞已知正在被利用？

CISA 是美國網路安全暨基礎設施安全局。它維護的 Known Exploited Vulnerabilities Catalog，通常簡稱 KEV，聚焦於已有在野利用證據的漏洞。

KEV 回答的不是「理論上最嚴重的是哪一個」，而是：

- 哪些漏洞已有遭實際利用的證據？
- 供應商或專案要求採取什麼行動？
- 美國聯邦民用行政部門的修補期限為何？

這也是 KEV 與 CVSS 最根本的差異。CVSS 描述漏洞在特定假設下的技術嚴重程度；KEV 提供的是已知利用狀態與修補優先順序的重要訊號。

一個 CVSS 9.8 的漏洞可能尚未出現在 KEV；一個分數較低的漏洞，若已被攻擊者大量利用，仍可能需要優先處理。CISA 也建議不只聯邦機關，其他組織同樣可把 KEV 納入漏洞管理優先排序。

不過，**不在 KEV 不等於沒有被利用**。它只表示目前未被納入該 catalog，不能被當成安全證明。

**適合查 CISA KEV 的情境：**確認 CVE 是否被列為已知在野利用，並把它作為修補優先級的強訊號。

## FIRST：維護評分與風險標準，不是另一個 CVE List

FIRST 是 Forum of Incident Response and Security Teams。它維護多項資安標準與規格，其中和漏洞管理最常遇到的是 CVSS；EPSS 也由 FIRST 提供相關資源與資料。

**CVSS 回答技術嚴重程度**

CVSS 透過一組 metric 與 vector 描述漏洞特性，最後形成分數與 severity。當資料來源標示 CVSS v3.1 或 v4.0，真正的計算規格與定義應回到 FIRST 文件查核。

FIRST 不會替全世界每一筆 CVE 決定唯一分數。實際評分可能由 CNA、NVD、廠商或其他分析者提供，因此同一 CVE 可能出現多組向量。

**EPSS 回答近期被利用的機率**

EPSS 是資料驅動的預測模型，估計已公開 CVE 在未來 30 天內遭到利用的機率。它和 CVSS 不可互相替代：

- CVSS：漏洞本身有多嚴重？
- EPSS：它近期有多可能被利用？
- KEV：是否已有符合收錄標準的在野利用證據？

這三種訊號放在一起，比只依 CVSS 高低排序更接近實際風險管理。第 22、23 天會再深入拆解 EPSS 與 CVSS 的差異。

**適合查 FIRST 的情境：**確認 CVSS 規格、向量定義、版本差異，以及查詢 EPSS 模型與分數資料。

## Vendor Advisory：產品版本、修補與緩解措施的第一手來源

當問題變成「手上的系統到底要不要修、怎麼修」，通常要回到產品供應商或開源專案的官方 advisory。

Vendor advisory 通常最適合回答：

- 哪些產品、分支與版本受影響？
- 哪個版本已修補？
- 修補程式、升級方式或 release notes 在哪裡？
- 有沒有 workaround 或 mitigation？
- 是否需要特定設定、模組或權限才會受影響？
- 供應商的 CVSS 評分與判斷依據是什麼？

這些資訊可能在 CVE Record 的 references 中出現，但資產處理時仍應打開原始 advisory，而不是只讀資料庫的摘要。

Vendor advisory 也不是永遠完美。它可能晚於研究者公告、更新版本範圍，或使用與其他來源不同的評分假設。因此仍要確認發布與更新日期，必要時比對修補 commit、CVE Record 與協調單位公告。

**適合查 Vendor Advisory 的情境：**確認產品是否受影響，以及取得官方修補版本、緩解方式與操作指引。

## 同一個 CVE 為什麼會有不同分數？

假設一筆 CVE 同時顯示：

\`\`\`text
CNA:  CVSS 8.1
NVD:  CVSS 9.8
\`\`\`

這不一定代表其中一方算錯。可能原因包括：

- 對所需權限的判斷不同。
- 對是否需要使用者互動的理解不同。
- CNA 掌握產品預設設定，NVD 依公開描述採用較一般化假設。
- 評分使用不同 CVSS 版本。
- Record 或 advisory 更新後，其中一方尚未重評。

正確比較方式是閱讀完整 vector，再回到描述、受影響設定與產品文件驗證每一個 metric。只比較 8.1 與 9.8，無法知道差異發生在哪裡。

## 實際查一個漏洞時怎麼走

處理一筆陌生 CVE，通常先到 CVE.org 確認 ID、Record 狀態、CNA 與 references。接著打開 vendor advisory 查受影響和修補版本；需要 NIST 的 CVSS、CWE、CPE enrichment 時再看 NVD。若正在排修補優先順序，就加查 CISA KEV 與 EPSS；對向量有疑問，再回 FIRST 的 CVSS 規格核對定義。

順序不是硬性規則。例如事件應變期間，可能會先查 KEV 與 vendor mitigation；研究評分差異時，則會優先打開 FIRST 規格。重點是每次引用資料，都知道它是誰提供、想回答哪個問題、何時更新。

## 幾句常聽到、但要多想一下的話

「NVD 就是 CVE 官網」不對，NVD 是使用 CVE 資料做 enrichment 的下游資料庫。「MITRE 會替每一筆 CVE 打分數」也不對，評分可能來自 CNA、NVD、廠商或其他 provider。

「沒在 KEV 就不急」更危險。KEV 是很強的優先訊號，卻不是全世界利用活動的完整清單。至於 vendor 說不受影響，也要先核對產品分支、部署方式和公告更新日期；使用下游重新封裝版本時，還得找對應發行者的公告。

最後只留一個判斷原則：不要找一個網站包辦所有答案。CVE Program 管識別與核心 Record，NVD 做分析補充，CISA 提供已知利用訊號，FIRST 維護評分規格，真正要升級哪一版，通常還是得回 vendor advisory。

下一篇會回到通報的起點：一封只寫「這裡有漏洞」的信，為什麼通常還不夠處理？

## 參考資料

- CVE Program Structure: https://www.cve.org/ProgramOrganization/Structure
- MITRE CVE Partner Information: https://www.cve.org/PartnerInformation/ListofPartners/partner/mitre
- NVD CVEs and the NVD Process: https://nvd.nist.gov/general/cve-process
- NVD General Information: https://nvd.nist.gov/general
- CISA Known Exploited Vulnerabilities Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- FIRST Standards: https://www.first.org/standards/
- FIRST CVSS: https://www.first.org/cvss/
- FIRST EPSS: https://www.first.org/epss/
`,VT=`# Day 7 - 寫漏洞通報時，什麼資訊是「必要」的？

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVE 與 CNA 基礎

有些漏洞報告只有一句話：

> 某某功能有漏洞，可以繞過權限，請確認。

這句話也許是真的，但收到的人幾乎一定得回信。哪個產品？測試版本是什麼？哪個功能？怎麼繞過？原本需要什麼權限，成功後又多拿到了什麼？

通報不是寫得越長越好。真正重要的是讓另一個沒坐在你旁邊的人，能夠找到同一個位置、看到同一個現象，最後理解它為什麼是安全問題。

這篇想談兩套容易混在一起的標準：一套是 **CVE Record 發布時最低要有什麼**，另一套是 **一份剛送進來的漏洞報告，怎樣才比較容易被處理**。兩者有重疊，但不是同一張清單。

## 先讓人找得到問題在哪裡

產品名稱聽起來是最不可能漏掉的資料，實際上卻常寫得不夠精確。

只寫「後台系統」或「API server」不夠。接手的人需要知道正式產品名稱、元件或模組，最好再附上取得版本資訊的方法。例如版本頁面、套件版本、commit hash、韌體編號，或可以辨認 build 的其他資訊。

版本也不要只寫「最新版」。報告送出那天的最新版，兩週後可能已經不同。比較穩定的寫法是：

\`\`\`text
測試產品：Example Server
測試版本：3.4.1
受影響元件：admin-api
測試環境：預設安裝，啟用 remote management
\`\`\`

如果已經測過多個版本，可以直接寫哪些確認受影響、哪些確認不受影響。這不只省下往返，也可能幫助維護者縮小問題是在哪次變更被引入。

## 重現步驟要讓別人走得回去

PoC 很有用，但一段可以執行的程式不一定等於完整重現步驟。接手的人還需要知道前置條件：使用什麼身分、功能是否預設開啟、資料要先處於什麼狀態，以及請求應該送到哪裡。

一份容易跟著操作的重現內容，通常會交代：

- 測試環境與必要設定
- 攻擊者原本擁有的權限
- 建立測試資料的方式
- 每一步操作或請求
- 實際看到的結果
- 正常情況下預期看到的結果

「實際結果」和「預期結果」最好都寫。以 IDOR 為例，只貼出一個回傳 \`200 OK\` 的 request，還不能證明跨越了授權邊界；如果補上「帳號 A 不屬於組織 B，卻能讀到組織 B 的文件」，安全影響就清楚多了。

log、封包、截圖與 crash dump 都可以當證據，但應該先移除 session token、個人資料與不必要的內部資訊。能用最小測試資料重現，就不要整包上傳真實環境資料。

## 不只說「能打」，還要說清楚安全邊界

同一個行為，在不同安全模型下可能有完全不同的意義。

例如一般使用者能修改自己的顯示名稱，通常是正常功能；能修改別人的角色，就可能是權限問題。HTML 被原樣儲存不一定就是 Stored XSS，還要看它是否進入瀏覽器可執行的 context，以及產品原本是否允許這類內容。

因此，影響描述最好能回答三件事：

1. 攻擊者從什麼起始權限出發？
2. 哪一條安全邊界被跨越？
3. 最後影響了機密性、完整性或可用性的哪一部分？

可以先用一句不誇大的話收斂：

\`\`\`text
低權限帳號可修改其他租戶的 webhook URL，可能使該租戶後續事件被傳送到攻擊者控制的端點。
\`\`\`

這比「可完全控制系統」更容易驗證，也比較不會讓真正重要的影響被誇張用語蓋掉。

## 一開始不知道根因，沒關係

研究者看到的通常是外部行為，不一定能取得原始碼。這時可以誠實區分「已確認」和「推測」。

\`\`\`text
已確認：修改 object ID 後可讀取其他帳號的檔案。
推測：後端可能只檢查檔案是否存在，未檢查 resource ownership。
\`\`\`

這種寫法比直接斷言某個 function 缺少檢查更可靠。維護者取得程式碼後，也比較容易回覆真正根因。

漏洞類型或 CWE 也是同樣道理。確定時可以提供候選分類；只有表面現象時，不必為了讓報告看起來完整而硬選一個 CWE。錯誤分類有時比暫時不分類更費時間，因為後面的人得先拆掉錯誤假設。

## 公開狀態與聯絡方式也很重要

漏洞是否已出現在 GitHub issue、社群貼文、影片或其他公開頁面，會影響協調方式。若已公開，直接附上 URL；若尚未公開，也可以說明預計揭露時間，讓對方知道時程壓力從哪裡來。

通報者還應留下穩定的聯絡方式，並說明是否希望致謝、致謝名稱怎麼寫。若涉及加密郵件，也可以附 public key。不要把緊急聯絡資訊只放在會過期的檔案分享連結裡。

至於揭露期限，與其丟一句「七天後公開」，不如交代日期、時區，以及什麼情況下願意調整。協調不代表無限期等待，但明確條件比模糊施壓更有用。

## CVE Record 的最低要求，和初始報告有什麼不同？

依 CNA Operational Rules v4.1.0，一筆要發布的 CVE Record 必須識別至少一個受影響產品、至少一個 \`affected\` 或 \`unknown\` 狀態、漏洞類型、文字描述，以及至少一個不是 CVE Record 自己的公開 reference。規則也要求至少一份英文描述，並建議提供修補版本。

這些是 **Record 發布要求**，不是說研究者第一次寄信就必須交出完整 CVE JSON。初始報告最重要的工作，是提供足夠證據讓問題能被定位、重現與判斷；產品版本、描述與公開 reference，可能在協調過程中繼續補齊。

反過來也一樣：一份已經能重現的好報告，仍不代表可以立刻公開 Record。受影響版本、公開 reference 或漏洞類型還不清楚時，CNA 可能需要繼續確認。

## 寄出前，做一次「陌生人測試」

把報告想像成交給一個第一次看到這套產品的人。他能不能只靠目前內容，找到版本、建立前置狀態、重做步驟，並解釋實際結果為何違反安全預期？

如果答案是可以，這份報告通常已經有很好的起點。若答案是「他應該知道我在說哪個頁面」，那就再補一點上下文。

第 7 天先把 CVE 與 CNA 基礎收在這裡。下一篇進入 CWE：為什麼一筆具體 CVE，還要再對應一個看起來更抽象的弱點分類？

## 參考資料

- CNA Operational Rules v4.1.0: https://www.cve.org/resourcessupport/allresources/cnarules
- CVE Program Process: https://www.cve.org/about/Process
- CVE Record Format: https://github.com/CVEProject/cve-schema

`,NT=`# Day 8 - CWE 是什麼？為什麼漏洞要對應 CWE

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

[![CWE 官方 Logo](/blog-assets/ithome-2026/cwe-logo-official.jpg)](https://cwe.mitre.org/)

*CWE Logo 來源：[CWE](https://cwe.mitre.org/)。*

看到 \`CVE-2026-XXXXX\`，知道的是「哪一個漏洞」；看到 \`CWE-79\`，知道的則是「這類問題通常錯在哪裡」。兩串編號長得很像，工作完全不同。

先看一段很小的程式：

\`\`\`javascript
result.innerHTML = req.query.name
\`\`\`

如果外部輸入未經適當處理就被放進 HTML，某個產品可能因此產生 XSS 漏洞。這個產品裡可被利用的具體 instance 可以有 CVE ID；背後「在產生網頁時，沒有正確處理輸入」這一類弱點，則可以用 CWE 描述。

## CWE 不是另一套漏洞編號

CWE 的全名是 **Common Weakness Enumeration**。官方把 weakness 定義成存在於軟體、韌體、硬體或服務元件中的某種條件；在特定情況下，它可能促成漏洞產生。

這裡的關鍵字是「類型」和「可能促成」。CWE 不會告訴你某台伺服器是否需要更新，也不會代替 vendor advisory。它比較像一套共同語言，讓開發者、研究者、掃描工具和漏洞資料庫談論同一種設計或實作缺陷。

可以這樣區分：

\`\`\`text
CVE：某個產品、某些版本中的具體漏洞
CWE：可能在許多產品中反覆出現的弱點類型
\`\`\`

同一個 CWE 可以對應大量 CVE；一筆 CVE 也可能牽涉不只一個 weakness。它們不是一對一關係。

## 為什麼只寫「XSS」還不太夠

「XSS」、「SQL Injection」和「Path Traversal」都是大家熟悉的漏洞名稱，但自然語言很容易遇到同義詞、縮寫和分類粒度不一的問題。

以 XSS 為例，有人寫 Cross-Site Scripting，有人只寫 script injection，有人從輸出編碼失敗來描述。CWE ID 讓資料比較容易被搜尋和統計，也能把讀者帶回一份包含定義、常見後果、偵測方式、緩解方式與相關弱點的知識條目。

這也是 CWE 對不同角色都有用的原因。漏洞處理人員可以整理根因分布，開發團隊能回頭改善 coding guideline，工具廠商可以對齊掃描規則，管理者則能觀察哪些 weakness 一直重複出現在不同產品。

如果一家公司一年修了十個不同 CVE，逐筆看只會得到十段事件；若其中六筆都指向同一類授權檢查問題，CWE 才讓這個趨勢比較容易被看見。

## Weakness 和 Vulnerability 差在哪裡？

CWE 官方 FAQ 的說法很實用：weakness 是可能在各種產品中導致漏洞的底層條件；vulnerability 則是這些 weakness 在特定產品中的具體 instance，而且能被利用並對機密性、完整性或可用性造成負面影響。

拿門鎖做一個不完全精確的比喻：

- 「鎖具設計沒有驗證鑰匙的某項特徵」是 weakness。
- 「某型號門鎖因此能被特製鑰匙打開」是具體 vulnerability。

前者描述共通的失效方式，後者帶著產品、版本、攻擊條件與實際影響。

這個區分也提醒一件事：看到危險的 coding pattern，不代表已經證明一筆可指派的漏洞。還需要確認它是否可達、是否跨越安全邊界，以及實際造成什麼影響。

## CWE 不是一張平面的清單

CWE 裡的條目有不同抽象層級。官方常見的四種 weakness abstraction 是 Pillar、Class、Base 與 Variant。

Pillar 最抽象，像一個很大的概念入口；Class 比 Pillar 具體，但通常仍不依賴特定語言或技術；Base 已經有足夠細節，可以推導偵測與預防方法；Variant 則更貼近特定資源、技術或 context。

例如 \`CWE-74: Injection\` 是較抽象的 Class，\`CWE-79: Cross-site Scripting\` 是更具體的 Base。若通報只確認「某種 injection」，卻硬選到很細的子類，分類可能超過現有證據；反過來，明明已經知道是 XSS，卻只停在 CWE-74，資訊又太寬。

因此，選 CWE 不是找名稱最像的那一條，而是找 **目前證據能支持、又盡量具體** 的層級。

## 一筆 CVE 為什麼可能看到不同 CWE？

同一個漏洞在 CNA、NVD 或其他 provider 那裡，偶爾會看到不同 CWE。原因不一定是誰粗心，也可能是：

- 一方依表面行為分類，另一方掌握了根因。
- 一方選較抽象的 Class，另一方選更具體的 Base。
- 漏洞由一連串 weakness 共同形成。
- Record 更新後，下游資料還沒同步。
- 公開資訊真的不足，只能先標成較寬的類型。

遇到差異時，先回到漏洞描述、受影響元件與修補內容。分類的目的是幫助理解，不是用編號投票決定答案。

## 不確定時，別急著猜最細的 CWE

假設看到「攻擊者可以下載任意檔案」，可能想到 Path Traversal，也可能是授權檢查缺失、外部可控檔名，甚至是多個問題串在一起。只有結果，還不足以證明根因。

比較穩妥的做法是先拆開：輸入如何進入系統、哪個檢查沒有發生、資料最後流向哪個敏感操作，以及修補實際改了什麼。修補若是在路徑正規化，和補上一段 ownership check，對應的 weakness 很可能不同。

這也是後面兩天要繼續談的內容：第 9 天會看 XSS、SQL Injection、Path Traversal、RCE 這些常見名稱在 CWE 裡怎麼落點；第 10 天則專門處理「不要只看表面現象，怎麼往根因靠近」。

## 參考資料

- CWE About: https://cwe.mitre.org/about/
- CWE Frequently Asked Questions: https://cwe.mitre.org/about/faq.html
- New to CWE: https://cwe.mitre.org/about/new_to_cwe.html
- CWE Glossary: https://cwe.mitre.org/documents/glossary/index.html
- CNA Operational Rules v4.1.0: https://www.cve.org/resourcessupport/allresources/cnarules
`,MT=`# Day 9 - 常見 CWE 怎麼分？從 XSS、SQL Injection、Path Traversal 到 RCE

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

漏洞名稱常把不同層次的概念混在一起。XSS、SQL Injection 與 Path Traversal 比較像失效方式；RCE 則描述攻擊成功後的結果。把四個詞並排，剛好可以看出選 CWE 時最常見的陷阱。

## XSS：不要只看到 \`<script>\`

XSS 常對應 \`CWE-79: Improper Neutralization of Input During Web Page Generation\`。重點不是 payload 裡有沒有 \`<script>\`，而是外部可控資料進入網頁輸出時，沒有依所在 context 做正確處理，最後能在其他使用者的瀏覽器中執行非預期內容。

同一段輸入放在 HTML body、attribute、JavaScript 字串或 URL，所需的處理方式都不同。因此「系統有做 HTML escape」不一定能回答所有 XSS 問題，還要看資料最後落在哪個 context。

如果輸入只會回顯給攻擊者自己，且沒有跨越信任邊界，也不能看到 alert 就立刻下結論。真正要確認的是誰控制輸入、誰載入輸出，以及執行後取得了哪個 origin 下的能力。

## SQL Injection：問題在查詢結構被改變

SQL Injection 最常對應 \`CWE-89\`。它不是單純「輸入含有單引號」，而是外部輸入被拼進 SQL 指令，使攻擊者能改變原本的查詢語意。

\`\`\`javascript
const sql = "SELECT * FROM users WHERE name = '" + name + "'"
\`\`\`

修補方向通常是參數化查詢，讓資料維持資料，不被解讀成 SQL 結構。只做黑名單、刪除單引號或替換關鍵字，往往會漏掉不同編碼、資料庫語法與其他注入位置。

看到資料庫錯誤也不等於已證明 SQL Injection。錯誤可能來自型別轉換、查詢逾時或其他程式問題。最好能證明輸入確實改變了 query behavior，例如布林條件、時間差或可控的結果集差異。

## Path Traversal：路徑走出了原本的邊界

Path Traversal 常見對應是 \`CWE-22\`。典型輸入是 \`../\`，但根因不是那兩個點本身，而是程式拿外部可控的路徑組合檔案位置，卻沒有把最後解析結果限制在允許的目錄內。

只做字串取代很容易被不同分隔符號、URL encoding、重複解碼、symbolic link 或平台差異繞過。較可靠的思路是先 canonicalize，再確認解析後的目標仍位於允許範圍，並搭配最小檔案權限。

這類案例還可能同時涉及 \`CWE-73: External Control of File Name or Path\`。選哪一個，要看已知資料能否證明 traversal，還是目前只知道攻擊者能控制檔名或路徑。

## RCE：它通常是 impact，不是 root cause

RCE 是 Remote Code Execution，描述遠端攻擊者最後能執行程式碼。它可能由很多不同 weakness 造成：

- OS Command Injection，常見為 \`CWE-78\`
- Code Injection，常見為 \`CWE-94\`
- Deserialization of Untrusted Data，常見為 \`CWE-502\`
- 記憶體破壞，例如 Out-of-bounds Write
- 上傳可執行檔案後被伺服器載入

所以「這是一個 RCE，CWE 就選 RCE」通常不夠精確。應往前問：攻擊者的資料經過哪條路徑，最後為什麼被當成指令、程式碼或物件執行？

## 用一條資料流來判斷

遇到名稱不確定時，可以追四個位置：input 從哪裡進來、途中經過哪些轉換、在哪個安全檢查失敗、最後進入哪個敏感 sink。

輸入進到 HTML renderer，可能往 CWE-79 查；進到 SQL parser，可能是 CWE-89；進到檔案系統 path resolver，可能是 CWE-22 或 CWE-73；進到 shell，則可能是 CWE-78。

分類不是關鍵字配對。明天會繼續往根因走：為什麼只寫「任意檔案讀取」或「RCE」仍然可能停在表面現象。

## 參考資料

- CWE-79: https://cwe.mitre.org/data/definitions/79.html
- CWE-89: https://cwe.mitre.org/data/definitions/89.html
- CWE-22: https://cwe.mitre.org/data/definitions/22.html
- CWE-78: https://cwe.mitre.org/data/definitions/78.html
- CWE Root Cause Mapping: https://cwe.mitre.org/documents/cwe_usage/guidance.html
`,LT=`# Day 10 - 不要只寫表面現象：CWE 與漏洞根因

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

「攻擊者可以讀取任意檔案。」

這句話很有價值，因為它說明了 impact；但拿來選 CWE，資訊仍然不夠。造成任意檔案讀取的原因可能是 Path Traversal、授權檢查缺失、符號連結處理錯誤，也可能是原本不該公開的 debug endpoint。

結果相同，不代表根因相同。

## Root Cause Mapping 在找什麼

CWE 將 Root Cause Mapping 描述為辨識漏洞底層成因，並把 CVE Record、bug ticket 或漏洞報告與適當 CWE 關聯。目的不是替漏洞貼一個好看的標籤，而是找出哪一類設計或實作問題應該被改善。

如果十筆漏洞都被標成「Information Disclosure」，只能知道資料外洩很多；如果能進一步看出其中六筆來自 missing authorization，開發流程才知道該把資源放在哪裡。

## 從 symptom 往前追

可以把分析拆成三層：

\`\`\`text
結果：讀到其他使用者的檔案
失效點：取檔前沒有驗證 resource ownership
根因：Authorization Missing / Incorrect Authorization
\`\`\`

另一個案例也可能有相同結果：

\`\`\`text
結果：讀到系統任意檔案
失效點：外部輸入可用 ../ 跳出允許目錄
根因：Path Traversal
\`\`\`

兩者都可以被描述成 arbitrary file read，修補位置卻完全不同。一個要補授權決策，一個要處理路徑解析與目錄限制。

## 修補內容常比 payload 更接近根因

PoC 告訴我們怎麼觸發問題，patch 則常透露真正少了哪個控制。

如果修補加入 prepared statement，可能支持 SQL Injection；若只是把錯誤訊息隱藏起來，則未必修掉注入。若 patch 加上 ownership check，比起看到 URL 裡有一個可改的 ID，更能支持 authorization 類 CWE。

當然，patch 也可能同時做重構或防禦加固，不能看到新增一個 validation 就直接決定根因。仍要把變更和可利用路徑對起來。

## 別選到不能拿來 mapping 的 CWE

CWE 條目會標示 Vulnerability Mapping 使用建議：\`ALLOWED\`、\`ALLOWED with careful review\`、\`DISCOURAGED\` 或 \`PROHIBITED\`。有些條目太抽象、是 Category，或不適合直接對應具體漏洞。

例如很寬的輸入驗證分類看起來什麼都能套，但可能遮住更具體的 injection、path traversal 或數值處理錯誤。官方建議能準確選 Base 或 Variant 時，就不要只停在過度抽象的 Class；若證據真的不足，選可允許 mapping 的較高層級，反而比猜一個錯誤細項可靠。

## 一條 weakness chain 可能不只一個節點

有些漏洞不是單一錯誤。外部輸入缺少驗證，進入不安全反序列化，最後載入攻擊者控制的 class，可能形成一條 weakness chain。

這時可以記錄多個相關 CWE，但要分清楚哪個是 primary root cause、哪個是後續 consequence。把每個看得到的現象全部塞進去，並不會自動變得更精確。

## 不知道時，保留不確定性

只有黑箱行為時，可以寫清楚「確認的 impact」與「推測的 root cause」。例如已確認未授權讀取，但無法判斷是 routing、ACL 還是 ownership check 出錯，就不要假裝掌握內部實作。

好的分類不是最細，而是剛好落在證據能支持的位置。明天開始看 CAPEC，從「系統為什麼會弱」轉到「攻擊者通常怎麼利用這些弱點」。

## 參考資料

- CWE Root Cause Mapping Guidance: https://cwe.mitre.org/documents/cwe_usage/guidance.html
- CWE Root Cause Mapping Quick Tips: https://cwe.mitre.org/documents/cwe_usage/quick_tips.html
- CWE FAQ: https://cwe.mitre.org/about/faq.html
`,jT=`# Day 11 - CAPEC 是什麼？它和 CWE 有什麼不同

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

CWE 在問「系統哪裡出了問題」，CAPEC 則把視角轉向攻擊者：「他通常怎麼利用這類問題？」

兩者會互相連結，但不是同一套編號換個名字。

## CAPEC 描述 Attack Pattern

CAPEC 全名是 Common Attack Pattern Enumeration and Classification。它是一份公開的攻擊模式目錄，用來整理攻擊者利用已知 weakness 時常見的做法、前置條件、執行流程與緩解方向。

例如：

- \`CAPEC-66\`：SQL Injection
- \`CAPEC-63\`：Cross-Site Scripting
- \`CAPEC-100\`：Overflow Buffers
- \`CAPEC-139\`：Relative Path Traversal

名稱和常見漏洞類型很接近，閱讀角度卻不同。CWE-89 說明「SQL 指令中沒有正確中和特殊元素」這個 weakness；CAPEC-66 關心攻擊者如何構造輸入、操弄 SQL query，最後讀取或修改資料。

## 同一個廚房，兩種調查方式

如果廚房的瓦斯管線接錯，CWE 比較像記錄設計或施工缺陷；CAPEC 則像整理有人會如何利用這個缺陷製造火災，以及過程中需要哪些條件。

前者適合開發、修補與根因分析，後者適合 threat modeling、攻擊情境設計與防禦驗證。

## CAPEC 裡通常有什麼

一筆 attack pattern 不只有名稱。依條目而異，可能包含 abstraction、description、likelihood、severity、prerequisites、skills required、resources required、execution flow、consequences、mitigations，以及與 CWE 或其他 CAPEC 的關係。

其中 execution flow 特別有用。它可能把攻擊拆成 Explore、Experiment、Exploit 等階段，讓讀者看到攻擊者不是突然送出完美 payload，而是先找入口、測試行為，再完成利用。

## CAPEC 不是 ATT&CK 的替代品

CAPEC 與 MITRE ATT&CK 都描述 adversary behavior，但使用情境不同。CAPEC 偏向 application security，整理如何利用 cyber-enabled capabilities 中的 weakness；ATT&CK 更偏向企業、行動裝置與 ICS 環境中，攻擊者在作戰生命週期使用的 tactics 與 techniques。

一個 SQL Injection 的利用方法適合 CAPEC；攻擊者取得 foothold 後如何 credential dumping、lateral movement，則更接近 ATT&CK。

## CVE Record 一定要填 CAPEC 嗎

不一定。CVE Record 的核心工作是識別與描述具體漏洞，CWE 常用來表示漏洞類型或原因；CAPEC 則適合在需要補充攻擊情境時使用。沒有 CAPEC，不代表 Record 不完整。

也不要看到 CWE 就機械式挑第一個 related CAPEC。CWE 與 CAPEC 可能是多對多關係，具體漏洞是否真的符合某個攻擊模式，仍要看 prerequisites 與 execution flow。

明天會繼續打開一筆 CAPEC，看看它如何把攻擊者行為拆成可閱讀、可驗證的步驟。

## 參考資料

- About CAPEC: https://capec.mitre.org/about/index.html
- CAPEC List: https://capec.mitre.org/data/index.html
- CAPEC and ATT&CK Comparison: https://capec.mitre.org/about/attack_comparison.html
`,FT=`# Day 12 - CAPEC 怎麼讀？把攻擊行為拆成幾個階段

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

讀 CAPEC 時，如果只看標題和編號，很容易把它當成另一份漏洞類型清單。真正有意思的地方，往往是條目中的 execution flow：它試著還原攻擊者從尋找入口到完成利用的過程。

以 Relative Path Traversal（\`CAPEC-139\`）為例，攻擊者通常不是一開始就知道伺服器的完整目錄結構。他可能先找出帶有檔名、路徑或下載參數的功能，再用不存在的檔案、不同層數的 \`../\`、編碼字元或平台分隔符號觀察回應。

這些小動作組合起來，才形成一個攻擊模式。

## Explore：先找得到入口

第一階段常是盤點可控制的位置。例如下載功能中的 \`file\`、語系切換中的 \`template\`，或圖片預覽 API 的 \`path\`。錯誤訊息、回應時間與 HTTP 狀態碼，都可能透露後端是否真的碰了檔案系統。

這裡還沒有證明漏洞。允許使用者提供檔名本身很正常，關鍵在於後端如何解析、正規化並限制最後的路徑。

## Experiment：測試邊界在哪裡

接著是試探。單純的 \`../\` 可能被擋，但 URL encoding、重複編碼、Windows 與 Unix 分隔符號，或應用程式與反向代理的解碼順序，都可能造成不同結果。

測試的目的不是無止境變換 payload，而是回答幾個問題：輸入在哪一層被解碼？應用程式有沒有 canonicalize？檢查發生在解析之前還是之後？錯誤回應是否能區分「檔案不存在」和「路徑不允許」？

## Exploit：取得原本不該取得的資源

確認能越過目錄邊界後，攻擊者才會嘗試讀取設定檔、憑證、原始碼或其他敏感資源。能讀到什麼，仍受執行帳號權限、容器掛載與作業系統存取控制限制。

因此，Path Traversal 不應自動被描述成「可讀取主機所有檔案」。比較準確的說法是：攻擊者可讓應用程式存取允許目錄之外、且該程序本身有權讀取的檔案。

## Execution flow 不是固定劇本

CAPEC 提供的是可重用的模式，不是每個案例都必須逐步照演。白箱測試可能直接從程式碼看到失效點，不需要探索；某些 API 也可能因錯誤訊息太少，無法用回應推測目錄結構。

使用 CAPEC 的價值，是檢查一份報告有沒有漏掉重要條件。例如只附上一個 payload，卻沒說入口在哪、需要登入嗎、回應如何證明越界、程序權限又限制了哪些結果。沿著攻擊階段追問，通常比單純要求「再給一個 PoC」更有效。

## 從攻擊模式回頭看防禦

每個階段都可能有不同防禦點：減少詳細錯誤可降低探索資訊；統一解碼與 canonicalization 可避免檢查落差；以 allowlist 對應伺服器端資源，可以避免直接接受路徑；最小權限則限制成功利用後的影響。

防禦不是只擋某個字串，而是打斷整條利用路徑。這也是 CAPEC 比單一 payload 更值得看的地方。

## 參考資料

- CAPEC-139 Relative Path Traversal: https://capec.mitre.org/data/definitions/139.html
- CAPEC Schema Elements: https://capec.mitre.org/data/help/schema.html
- About CAPEC: https://capec.mitre.org/about/index.html
`,OT=`# Day 13 - CVE、CWE、CAPEC 三者到底怎麼接在一起

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

看到一筆漏洞時，常會同時遇到 CVE、CWE 與 CAPEC。它們不是三套互相競爭的分類，而是在回答三個不同問題：發生了哪一件事、系統弱在哪裡，以及攻擊者可能怎麼利用。

先用一個假想案例串起來：某套文件系統的下載 API 接受外部路徑，解析後沒有確認目標仍位於附件目錄。未登入的遠端攻擊者可以用 \`../\` 讀取程序有權存取的設定檔。

## CVE：這一個具體漏洞是什麼

CVE Record 負責識別這個產品中的具體問題。它需要說清楚受影響產品與版本、漏洞條件、影響、參考資料，以及由誰發布或維護這筆紀錄。

CVE ID 不代表漏洞類型，也不直接代表嚴重程度。它是一個穩定識別符，讓公告、修補說明、掃描器和資產清單能指向同一件事。

## CWE：程式或設計弱在哪裡

在這個案例中，若證據支持路徑可跳出限制目錄，可能對應 \`CWE-22: Improper Limitation of a Pathname to a Restricted Directory\`。

CWE 把具體產品拿掉，保留可重用的弱點概念。其他語言、框架或產品也可能犯相同錯誤，因此可用來做根因統計、安全開發規範與測試設計。

## CAPEC：攻擊者如何把弱點變成結果

若要描述利用手法，\`CAPEC-139: Relative Path Traversal\` 會更接近攻擊者視角。它會談到尋找可控路徑、嘗試 traversal sequence、推測目錄結構，最後存取限制範圍外的資源。

CAPEC 不負責證明某個產品真的有漏洞。它提供的是通用攻擊模式，必須再和個案的入口、前置條件及行為相互驗證。

## 它們不是一對一關係

一筆 CVE 可能牽涉多個 CWE。例如檔案上傳缺少副檔名限制，又因伺服器設定而可直接執行，可能存在一條由 upload weakness 通往 code execution 的 chain。

同一個 CWE 也可能被多種攻擊模式利用；同一個 CAPEC 則可能連到多個相關 CWE。這些關聯是導覽，不是看到編號後就能自動完成 mapping 的公式。

## 實務上先後順序怎麼排

較穩定的順序是先建立具體事實：受影響版本、入口、權限、使用者互動、失效的控制與可觀察影響。接著才選證據支持的 CWE；需要補充威脅情境時，再查相關 CAPEC 是否吻合。

反過來先挑一個熱門攻擊名稱，再把案例硬塞進去，容易把結果誤當根因。例如「最後能 RCE」並不能告訴我們是 command injection、unsafe deserialization，還是 memory corruption。

一段好的通報描述，即使讀者沒點開 CWE 或 CAPEC，也應該能理解漏洞。分類編號是結構化補充，不是拿來代替事實敘述。

## 參考資料

- CVE Program: https://www.cve.org/
- CWE About: https://cwe.mitre.org/about/index.html
- CAPEC About: https://capec.mitre.org/about/index.html
- CWE/CAPEC Graphs: https://capec.mitre.org/data/graphs/3000.html
`,zT=`# Day 14 - 案例練習：一個漏洞如何選 CWE 與 CAPEC

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：弱點分類與攻擊模式

這次不從編號開始，而是先看一段假想報告：

> 某備份管理系統提供已登入管理員下載備份檔的 API。\`name\` 參數會與備份目錄組合後交給檔案讀取函式。伺服器只移除一次 \`../\`，但輸入經過 URL decoding 後仍可跳出備份目錄。攻擊者可讀取服務帳號有權存取的設定檔，其中可能含有資料庫連線資訊。

接下來逐步判斷，不急著搜尋「arbitrary file read CWE」。

## 先把已知事實圈出來

入口是下載 API；需要已登入且具有管理權限；可控資料是 \`name\`；失效控制是路徑處理；敏感操作是檔案讀取；影響範圍受服務帳號權限限制。

這些資訊同時會影響漏洞描述、CVSS 評估和 CWE 選擇。若報告只留下 payload，很多判斷就只能靠猜。

## 第一個候選：CWE-22

問題的核心是解析後的 pathname 沒有被限制在指定目錄，符合 \`CWE-22\` 的概念。報告也實際證明 traversal，而不只是能控制檔名，因此比僅使用較寬的 \`CWE-73: External Control of File Name or Path\` 更具體。

如果目前只知道使用者能提供任意檔名，卻沒有證明能越過預期目錄，選 CWE-22 就可能太早。精確度要跟著證據走。

## 要不要再加 Improper Input Validation

「輸入驗證不足」在日常溝通中沒有錯，但它太寬，幾乎可以套在所有 injection 與 traversal。當更具體的 root cause 已知時，優先記錄 CWE-22 通常更有分析價值。

至於「只移除一次 \`../\`」可以放進技術說明，讓讀者理解修補為什麼失敗；不必為每一個程式動作再塞一個 CWE。

## CAPEC 候選怎麼核對

\`CAPEC-139: Relative Path Traversal\` 的前置條件與流程符合這個案例：應用程式接受路徑相關輸入，攻擊者以相對路徑序列逃離限制位置，存取其他檔案。

不過，CAPEC 仍是補充。若最終 CVE Record 的資料模型或發布方流程沒有 CAPEC 欄位，並不影響 CWE-22 與描述本身成立。

## 描述可以怎麼寫

可以整理成：

> 某備份管理系統的 A 至 B 版本在下載備份檔時，未將 URL decoding 後的路徑限制於備份目錄。具有管理權限的遠端攻擊者可透過特製的 \`name\` 參數，讀取服務帳號有權存取的任意檔案，可能導致敏感設定資訊外洩。

這段話沒有寫「讀取整台主機所有檔案」，也沒有把資料庫憑證視為必然存在。它區分了已證明的能力與可能後果。

## 換一個細節，答案就可能不同

若路徑始終在備份目錄內，但一般帳號可以下載別人的備份，根因更可能是 authorization 或 ownership check，而不是 traversal。若 API 會把路徑交給 shell 解壓縮，且可插入命令，則要重新檢查 command injection。

漏洞分類不是替結果找一個相似名稱，而是找出哪個安全控制真正失效。這個習慣建立後，下一週看 CVSS 也會輕鬆一些，因為評分同樣依賴具體攻擊條件，而不是漏洞名稱。

## 參考資料

- CWE-22: https://cwe.mitre.org/data/definitions/22.html
- CWE-73: https://cwe.mitre.org/data/definitions/73.html
- CAPEC-139: https://capec.mitre.org/data/definitions/139.html
- CWE Root Cause Mapping Guidance: https://cwe.mitre.org/documents/cwe_usage/guidance.html
`,_T=`# Day 15 - CVSS 是什麼？先把嚴重度與風險分開

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

資安公告最醒目的位置，常是一個 9.8 或紅色 Critical。看到這個數字，人很自然會問：「那是不是應該立刻修？」

答案通常是「很可能要優先看」，但只靠 CVSS 還不能完成風險排序。CVSS 衡量的是漏洞的技術嚴重度，不知道你的系統是否對外、資產是否存在、資料有多重要，也不知道漏洞目前是否正被大量利用。

## CVSS 想解決的問題

Common Vulnerability Scoring System 提供一套共同語言，讓不同人可以用相同指標描述利用條件與技術影響，並產生 0.0 到 10.0 的分數。

它比「這個漏洞很嚴重」更可驗證。看到向量後，可以知道評分者認為攻擊是否需要網路可達、需要哪些權限、是否要求使用者操作，以及成功後會破壞哪些安全屬性。

分數不是標籤的替代品，向量才保留了判斷內容。兩個漏洞都得到 8.8，攻擊條件和影響可能完全不同。

## Base：漏洞本身的固有特徵

Base Metrics 描述在合理最壞情境下，跨時間與使用環境相對穩定的特徵。CVSS v3.1 會看 Attack Vector、Attack Complexity、Privileges Required、User Interaction、Scope，以及 Confidentiality、Integrity、Availability 影響。

Base Score 很適合由產品供應商或漏洞發布方提供，因為它不應依某一家使用者的網路架構而改變。某個管理介面在你的環境只開放內網，不代表漏洞的 Base Attack Vector 就一定從 Network 改成 Adjacent 或 Local；部署控制通常應放在環境風險評估處理。

## Temporal／Threat：隨時間改變的資訊

CVSS v3.1 稱為 Temporal Metrics，包含 exploit code maturity、remediation level 與 report confidence。CVSS v4.0 將這組概念調整為 Threat Metrics，聚焦 Exploit Maturity。

漏洞剛公開時可能沒有可用 exploit，幾週後卻出現可靠工具；正式修補也可能從無到有。這些資訊會變，因此不適合永久寫死成漏洞本身的屬性。

## Environmental：同一漏洞在不同地方不一樣

Environmental Metrics 讓使用者依自己的資產重要性與部署情境調整。例如同一個資訊洩漏，在公開測試機與存放客戶資料的核心系統上，組織風險不會相同。

這一組通常應由資產擁有者或防守方評估。漏洞發布方很難知道每個使用者的網路隔離、補償控制與業務需求。

## 嚴重度不是風險公式

實際風險至少還會碰到這些問題：環境裡是否有受影響版本、攻擊面是否可達、是否已有利用活動、資產價值多高、現有控制能否阻斷，以及修補本身會不會造成營運衝擊。

因此 CVSS 適合當成共同基準，不適合單獨扮演修補佇列。後面談 EPSS 與 KEV 時，會再把「技術影響」和「被利用的可能性／事實」接起來。

先記住一句就好：不要只抄分數，也要讀向量；不要把嚴重度分數，直接當成完整風險答案。

## 參考資料

- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide: https://www.first.org/cvss/v3-1/user-guide
- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
`,BT=`# Day 16 - 一篇讀懂 CVSS v3.1：從條件、Scope 到影響

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

CVSS v3.1 的 Base Vector 看起來像一串縮寫：

\`\`\`text
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
\`\`\`

與其背出 9.8，不如把它當成一段壓縮過的攻擊敘事：遠端可打、條件單純、不需權限、不需使用者互動，影響留在同一安全授權範圍內，且機密性、完整性、可用性都受到高度影響。

## Exploitability：攻擊要怎麼發生

\`Attack Vector\` 描述攻擊者必須位於哪個位置，從 Network、Adjacent、Local 到 Physical。它看的是利用路徑，不是受影響產品平常被叫作「網路設備」還是「桌面軟體」。

\`Attack Complexity\` 判斷是否存在攻擊者無法控制、且利用成功前必須具備的額外條件。需要精心設計 payload 不會自動變成 High；多數 exploit 都需要技術能力，這不是 AC 的判斷重點。

\`Privileges Required\` 是攻擊前已經需要的權限。不要把漏洞成功後取得的 root 權限倒填進去。\`User Interaction\` 則看攻擊者以外的使用者是否必須完成某個動作，例如開啟文件或點擊連結。

## Scope：v3.1 最容易卡住的地方

Scope 在問：受漏洞影響的元件，與承受後果的元件，是否由不同的 security authority 管理。

例如瀏覽器中的網站腳本若突破 sandbox 影響作業系統，可能涉及 Scope Changed。單純從一台主機橫向移動到另一台，不會因「影響擴大」就自動算 Changed；仍要看漏洞利用是否跨越了原本元件的授權範圍。

Scope 不是「影響很廣」的同義詞，也不是「從 user 變 root」就必然 Changed。這也是 v3.1 評分爭議最常出現的位置之一。

## Impact：C、I、A 受到多少影響

\`Confidentiality\` 看資訊是否被未授權揭露；\`Integrity\` 看資料或系統是否能被未授權修改；\`Availability\` 看服務或資源是否被中斷。三者各有 None、Low、High。

評分要以漏洞造成的直接、可合理預期結果為主。讀到一份低敏感度檔案，不應因為「說不定裡面有密碼」直接給 C:H；一次可恢復的程序 crash，也未必等同整個服務永久不可用。

## Temporal 與 Environmental 沒有消失

Base Vector 最常被引用，但 v3.1 還有 Temporal 與 Environmental Metrics。Temporal 能納入 exploit code maturity、修補狀態與報告可信度；Environmental 則可依部署調整 Modified Base Metrics，並設定 C、I、A Requirement。

正式通報常只提供 Base Score，並不表示其他組不重要，而是發布方通常不知道每個組織的環境。使用者把 9.8 原封不動套到所有資產，等於放棄了 CVSS 本來保留的環境調整能力。

## 讀向量的簡單順序

先讀 AV 到 UI，還原攻擊前置條件；再判斷 Scope；最後確認 C、I、A 是否有證據。遇到爭議時，不要從「我覺得應該是 High」開始，而是回到官方定義與實際攻擊路徑。

明天單獨看 v4.0。它不是把版本號加一，而是直接處理 v3.1 中幾個長期難以表達的問題。

## 參考資料

- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide: https://www.first.org/cvss/v3-1/user-guide
- CVSS v3.1 Calculator: https://www.first.org/cvss/calculator/3.1
`,WT=`# Day 17 - CVSS v4.0 改了什麼？不只是多一組縮寫

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

CVSS v4.0 在 2023 年正式發布。第一次打開向量，最直接的感受大概是：欄位又變多了。

\`\`\`text
CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N
\`\`\`

不過這次變動不是為了增加填表難度。v4.0 把 v3.1 難以表達的攻擊條件、跨系統影響與輔助資訊拆得更清楚，也試著避免 Base Score 被當成完整風險分數。

## Attack Requirements 獨立出來

v3.1 的 Attack Complexity 同時承擔不少概念。v4.0 新增 \`Attack Requirements\`（AT），專門描述成功利用是否依賴 vulnerable system 的部署或執行條件，例如特定競態狀態或中間人位置。

\`Attack Complexity\` 則更聚焦攻擊者為了避開或繞過防禦技術所需採取的動作。把兩者拆開後，評分理由比較容易說明，也比較不會把「payload 很難寫」誤當 AC:H。

## User Interaction 變成 Passive 與 Active

v3.1 的 UI 只有 None 和 Required。v4.0 將需要互動的情境分為 Passive 與 Active。

Passive 指使用者的正常行為讓漏洞得以觸發，但不需要刻意突破保護，例如載入惡意內容；Active 則需要使用者執行特定動作來破壞保護，例如忽略警告或匯入惡意檔案。這比所有情境都塞進 Required 更有區別力。

## Scope 退場，影響分成兩個系統

v4.0 移除 Scope，改用 Vulnerable System 的 \`VC/VI/VA\`，以及 Subsequent System 的 \`SC/SI/SA\`，分別記錄機密性、完整性與可用性影響。

這讓評分者可以直接說：漏洞位於哪個系統，主要後果又落在哪個後續系統，不必先把複雜關係壓成 Scope Changed，再共用一組 C/I/A。

## Temporal 改名 Threat，內容更聚焦

v4.0 的 Threat Metrics 保留 \`Exploit Maturity\`。狀態可表達尚未回報利用、已有概念驗證，或已觀察到攻擊。v3.1 Temporal 裡的 Remediation Level 與 Report Confidence 不再以相同方式參與這一組分數。

Environmental Metrics 仍然存在，讓使用者依自己的部署與安全需求調整。

## Supplemental Metrics 不改分數，但很有用

Safety、Automatable、Recovery、Value Density、Vulnerability Response Effort 與 Provider Urgency 等 Supplemental Metrics，用來補充分數難以承載的資訊。

它們不直接改變 CVSS 數值，卻能幫助消費者理解人身安全、自動化利用、復原方式或供應商評估。這種設計也提醒我們：並非所有決策資訊都應硬塞進一個 0 到 10 的數字。

## v3.1 分數不能直接換算成 v4.0

兩個版本的指標與公式不同，不能只把向量前綴替換，或期待同一漏洞得到相同分數。發布時應清楚標示版本，保留完整向量，也不要用「v4.0 分數較低」直接推論漏洞變得不重要。

FIRST 對 v4.0 分數使用 \`CVSS-B\`、\`CVSS-BT\`、\`CVSS-BE\`、\`CVSS-BTE\` 等 nomenclature，說明計算包含哪些 metric group。引用時把 nomenclature 一起帶上，比只留下裸分數更完整。

## 參考資料

- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
- CVSS v4.0 User Guide: https://www.first.org/cvss/v4-0/user-guide
- CVSS v4.0 Calculator: https://www.first.org/cvss/calculator/4.0
- CVSS v4.0 Release: https://www.first.org/cvss/v4-0/
`,UT=`# Day 18 - AV、AC 與 AT：攻擊距離和攻擊難度怎麼判斷

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

「這個漏洞很難利用，所以 AC 應該是 High。」

問題是，難在哪裡？需要高超的逆向能力、payload 要調很久、只能在同網段利用，或必須等服務碰巧進入特殊狀態，對 CVSS 而言是不同事情。

## Attack Vector 看的是利用位置

在 v3.1 與 v4.0 中，AV 都是在描述攻擊者必須從哪裡送出利用：

- Network：可經由網路協定跨越一個或多個網路邊界利用
- Adjacent：攻擊者必須位於邏輯或實體相鄰網路
- Local：需要本機存取能力，或讓本機使用者執行惡意內容
- Physical：必須實際接觸或操作設備

「服務只綁在 localhost」不一定讓 AV 直接變 Local。要看漏洞本身可利用的介面與合理部署；特定組織的 firewall 或網路隔離，通常屬於環境控制。反過來，透過電子郵件寄送惡意檔案，也不會只因郵件走網路就必然是 AV:N，還要看漏洞實際在何處被觸發。

## v3.1 的 Attack Complexity

v3.1 的 AC:L 表示除了攻擊者可控制的條件外，不需要額外特殊狀態；AC:H 則表示成功利用依賴攻擊者無法控制的條件，或需要先完成額外準備以克服那些條件。

官方 User Guide 特別提醒，社交工程本身與使用者互動應由 UI 表示，不要重複灌進 AC。需要寫一段複雜 exploit 也不等同 AC:H，因為評的是利用條件，不是研究成本。

## v4.0 為什麼多了 Attack Requirements

v4.0 將 \`AT\` 拆出來，描述 vulnerable system 中是否必須存在特定部署或執行條件。典型例子包括必須取得中間人位置，或利用成功依賴競態條件。

這時可分別表達：攻擊需要特殊系統條件（AT:P），以及攻擊者是否還必須採取可觀察、可重複的防禦繞過動作（AC:H）。兩者不再擠在同一格。

v4.0 的 AT 值為 None 或 Present。Present 不代表漏洞幾乎無法利用，而是承認利用並非在所有狀態下都成立。

## 三個容易混淆的例子

需要同一 Wi-Fi 網段才能送封包，首先影響的是 AV，不能只因距離受限就填 AC:H。

需要受害者打開惡意文件，主要是 UI；文件內容製作困難，不足以單獨證明 AC:H。

必須在極短時間窗競爭檔案操作，v3.1 可能反映在 AC:H；到了 v4.0，這類執行條件更適合檢查 AT:P。

## 寫下理由，比背答案重要

評分時可以替每個非直覺選項留一句理由，例如：「利用介面僅可從同一廣播網域存取，因此 AV:A」或「成功利用依賴非決定性的 race condition，因此 v4.0 AT:P」。

這些句子能讓另一位評分者重現判斷。若理由只剩「因為很難」，通常表示還沒把困難拆到正確指標。

## 參考資料

- CVSS v3.1 Specification, Base Metrics: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide: https://www.first.org/cvss/v3-1/user-guide
- CVSS v4.0 Specification, Base Metrics: https://www.first.org/cvss/v4-0/specification-document
`,HT=`# Day 19 - PR 與 UI：到底是誰必須先做什麼

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

一份報告寫著：「攻擊者登入後上傳檔案，管理員查看後就會執行 JavaScript。」

這短短一句至少包含兩種前置條件：攻擊者需要登入，以及另一位使用者需要查看內容。前者由 Privileges Required 處理，後者屬於 User Interaction。

## PR 看的是攻擊前已有的權限

\`Privileges Required\` 有 None、Low、High。判斷時間點是在漏洞利用開始之前，而不是成功之後。

攻擊者透過漏洞取得管理員權限，不能因此填 PR:H；若觸發入口完全不需登入，仍可能是 PR:N。相反地，只有系統管理員能進入的設定頁面存在 command injection，通常要考慮 PR:H，即使成功後能執行更高權限命令。

Low 與 High 的界線要看攻擊前權限能控制的範圍。一般使用者只能操作自己擁有的資源，通常較接近 Low；已能控制整個 vulnerable component 的設定或使用者，則可能是 High。不要只用角色名稱判斷，名為 operator 的帳號在不同產品可能權力差很多。

## UI 要找攻擊者以外的人

\`User Interaction\` 關心的是另一位使用者是否必須參與。受害者開啟文件、瀏覽頁面、點擊連結或匯入設定，都可能構成 UI。

攻擊者自己登入、自己按下送出按鈕，不算 UI:R；那是利用步驟的一部分，應由 PR 或其他攻擊條件反映。否則許多需要 HTTP request 的漏洞都會被誤判成需要使用者互動。

## Stored XSS 是很好的練習題

假設一般帳號可在留言欄儲存惡意內容，管理員檢視後觸發 XSS。Base 評估通常需要分別問：攻擊者建立留言是否要帳號？如果要，PR 可能是 Low；管理員是否必須載入該頁？如果是，UI 不是 None。

至於攻擊成功後能以管理員身分操作哪些功能，會影響後續的 C、I、A，而不是回頭改變 PR。

## v4.0 把 UI 拆得更細

v3.1 只有 None 與 Required。v4.0 則有 None、Passive、Active。

Passive 是使用者在正常操作中，無意間讓漏洞可被利用，例如瀏覽受到污染的頁面。Active 要求使用者採取較明確的動作來突破保護，例如忽略安全警告、開啟受保護內容或執行特定步驟。

區分時不要只看「有沒有點擊」。一次正常導覽點擊可能仍接近 Passive；關鍵是使用者是否必須主動顛覆保護機制，才能讓攻擊成功。

## 不要用社交工程成功率改寫指標

「管理員通常不會點」不是 UI 的值；「釣魚信做得很好」也不會把 UI 變成 None。CVSS 描述必要條件，不估算某一群使用者受騙的統計機率。

最實用的檢查方式，是把攻擊者和受害者的動作分兩行寫出來。誰需要什麼權限、誰必須做哪一步，通常就清楚了。

## 參考資料

- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 User Guide, Privileges Required: https://www.first.org/cvss/v3-1/user-guide
- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
`,$T=`# Day 20 - Scope 與 C／I／A：影響到底落在哪個系統

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

漏洞成功後「影響很大」，還不夠拿來完成 CVSS。要先分清楚被攻擊的元件、承受後果的系統，以及機密性、完整性、可用性各自損失多少。

這也是 v3.1 Scope 經常產生歧見，而 v4.0 決定換一種表達方式的原因。

## v3.1 Scope 在看 security authority

v3.1 的 Scope Unchanged 表示受漏洞影響的元件，與受到衝擊的資源由同一個 security authority 管理。Changed 則表示漏洞利用能影響另一個安全授權範圍內的資源。

虛擬機逃逸是常見例子：漏洞位於 guest，後果進入 hypervisor 或 host 管理的範圍。瀏覽器 renderer 突破 sandbox 影響更高權限元件，也可能符合 Changed。

但權限提升不一定等於 Scope Changed。如果同一作業系統的授權機制本來就管理低權限與 root 資源，仍需依元件與 authority 邊界判斷。影響多台主機也不會只因數量增加就自動 Changed。

## v4.0 改成直接描述兩端影響

v4.0 不再使用 Scope，而是分成 Vulnerable System 的 \`VC/VI/VA\`，以及 Subsequent System 的 \`SC/SI/SA\`。

評分者可以把漏洞所在系統的影響，與後續系統承受的影響分開。Stored XSS 位於網站應用，但後果可能發生在另一位使用者的瀏覽器安全情境；v4.0 能直接表示兩端，不必先把關係壓成一個 S:C。

Subsequent System 不是「任何間接商業損失」。仍要是漏洞利用造成、且可由技術安全屬性描述的後續系統影響。

## Confidentiality：能看到什麼

C:N 表示沒有機密性損失；Low 通常是部分資訊受到限制性影響；High 則是全面或嚴重的資訊揭露。

評估應以可存取資料的性質與範圍為依據。錯誤訊息洩漏一個安裝路徑，和下載整份客戶資料庫，不應只因都叫 information disclosure 就給一樣的值。

## Integrity：能改變什麼

Integrity 看攻擊者能否修改受保護資料或系統行為。只能更改自己原本就有權修改的內容，不是漏洞帶來的完整性影響；能竄改其他使用者資料、設定或執行流程，才是要評估的部分。

High 通常表示完整性保護遭到重大或全面破壞。不要因 payload 最後可以「執行一個命令」，就略過命令實際執行權限與可控制範圍。

## Availability：壞多久、壞多大

一次 request crash、單一 worker 重啟、整個服務無限期中斷，影響層次不同。若服務有自動復原且只有短暫資源消耗，A:L 可能比 A:H 合理；若攻擊可持續阻斷核心功能或需要人工重建，才更支持 High。

CVSS Base 評估合理最壞結果，但仍要是攻擊者可達成的結果，不是任意延伸的災難故事。

## 一個實用寫法

先寫兩句話：「漏洞位於哪個元件？成功後直接控制或破壞哪些資源？」再分別檢查 C、I、A。v3.1 接著判斷這些影響是否跨越 authority；v4.0 則把它們放到 vulnerable 或 subsequent system。

若無法清楚寫出受影響資源，分數通常也還沒有足夠依據。

## 參考資料

- CVSS v3.1 Specification, Scope and Impact: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 Scope Examples: https://www.first.org/cvss/v3-1/examples
- CVSS v4.0 Specification, Impact Metrics: https://www.first.org/cvss/v4-0/specification-document
`,GT=`# Day 21 - 從向量到分數：RCE 一定是 9.8 嗎

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

RCE 很嚴重，但「RCE = 9.8」不是 CVSS 規則。9.8 是一組特定 v3.1 Base Metrics 算出的結果：

\`\`\`text
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
\`\`\`

只要必要條件或實際影響不同，向量和分數就會改變。

## 先寫向量，再讓計算器算分

CVSS 公式包含 exploitability 與 impact 的權重、Scope 影響和向上取整規則。實務上應使用 FIRST 官方計算器或可信工具，不建議手算後只留下數字。

真正需要人工判斷的是每個 metric。工具能正確代公式，不能替你知道入口是否需要登入、使用者是否必須開檔，或程式碼最後以什麼權限執行。

## 需要登入的 RCE

假設一般使用者可在自己的專案設定中插入命令，伺服器會以受限服務帳號執行。若攻擊前需要低權限帳號，PR 就不會是 None；若只能從管理網路接觸，還要依漏洞本身和部署方式判斷 AV 或 Environmental Metrics。

「最後可執行命令」也不保證 C、I、A 全部 High。容器權限、檔案掛載、網路政策與可用命令，都可能限制技術影響。

## 要人開檔的 RCE

惡意文件觸發桌面程式碼執行時，往往需要受害者開啟檔案。v3.1 的 UI 可能是 Required；v4.0 還要判斷 Passive 或 Active。寄送管道在網路上，不代表 AV 就一定是 Network，應依漏洞觸發位置套用規格定義。

## 只在本機成立的權限提升

某些漏洞能執行任意程式碼，但攻擊者先要有本機帳號或執行能力。這類案例可能是 AV:L、PR:L，技術影響仍可很高，分數卻不會是遠端未驗證 RCE 常見的 9.8。

這不代表漏洞不重要。對多使用者主機、VDI、容器平台或已遭入侵的環境，本機提權可能是攻擊鏈中的關鍵一步。

## 分數相同，故事可能不同

CVSS 分數經過加權與四捨五入，不同向量可能落到同一數值。因此公告只寫「CVSS 8.8」會丟失大量資訊。至少應保留版本與完整向量，最好再附上各項判斷理由。

不同版本也不能直接比較。v4.0 改了 metric 與 scoring system，同一漏洞的 v3.1 與 v4.0 分數不同，不代表其中一個一定錯。

## 評分前的五句話

我習慣先回答五件事：攻擊從哪裡開始、依賴什麼額外條件、攻擊前要有何權限、是否需要另一位使用者參與、成功後實際影響哪些系統與資料。

這五句若寫不出來，先補漏洞事實；急著開計算器，只會把不確定性包裝成一個很精確的數字。

## 參考資料

- CVSS v3.1 Calculator: https://www.first.org/cvss/calculator/3.1
- CVSS v3.1 Specification: https://www.first.org/cvss/v3.1/specification-document
- CVSS v4.0 Calculator: https://www.first.org/cvss/calculator/4.0
- CVSS v4.0 Specification: https://www.first.org/cvss/v4-0/specification-document
`,qT=`# Day 22 - EPSS 是什麼？它預測的是未來 30 天

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

兩個 CVSS 都是 9.8 的漏洞，維運人員卻只能先修一個。這時再比較一次嚴重度沒有太大幫助，因為真正想問的是：「哪一個比較可能很快遭到利用？」

EPSS 就是為這個問題提供資料，但它不替你決定最終優先順序。

## 一個每天更新的機率估計

Exploit Prediction Scoring System 由 FIRST 維護。它利用公開可取得的漏洞與威脅資訊，估計某一個已發布 CVE 在未來 30 天內，出現野外利用活動的機率。

EPSS score 介於 0 到 1，也可以看成 0% 到 100%。例如 0.20 表示模型估計未來 30 天觀察到利用的機率為 20%，不是「漏洞有 20% 嚴重」，也不是「20% 的系統已遭入侵」。

分數每日更新。PoC、攻擊工具、社群關注與其他訊號改變後，同一 CVE 的 EPSS 可能跟著升降，因此引用時最好保留查詢日期。

## Percentile 是相對位置

EPSS 資料還提供 percentile。它回答這個分數在所有已評估 CVE 中排在哪個相對位置。

score 是模型的絕對機率估計，percentile 是相對排名。某筆 CVE 的機率看起來不高，仍可能位於很高 percentile，因為大多數漏洞被觀察利用的機率本來就低。兩個值不能互相替代。

## EPSS 不知道你的環境

模型不知道公司是否真的使用該產品、不知道服務是否對外，也不知道受影響資產承載的是公開測試資料還是核心交易。

它同樣不衡量利用成功後的衝擊。EPSS 高、技術影響低，和 EPSS 低、可能造成重大安全事故，是兩種不同決策情境。

因此 EPSS 是 prioritization input，不是完整風險分數。資產存在性、可達性、補償控制、業務影響與威脅情報仍要一起看。

## 為什麼不能拿 EPSS 當預言

機率不是承諾。高分漏洞可能在你的環境從未遭利用，低分漏洞也可能成為針對性攻擊入口。模型根據可觀察資料建立，而觀測本身必然有限，新的漏洞與小眾產品也可能缺乏足夠訊號。

比較健康的用法是縮小待處理清單。例如先從確實存在於環境的 CVE 中，找出 EPSS 較高者進一步檢查，而不是訂一條「低於 0.1 一律不修」的永久規則。

## 查詢時至少記三件事

記下 CVE ID、score 與查詢日期；需要比較整體相對位置時，再記 percentile。若將 EPSS 匯入內部系統，應按日更新，而不是在漏洞建立當天抓一次後永久保存。

明天會把 CVSS 與 EPSS 放在同一張決策圖裡看：一個談技術嚴重度，一個談近期利用機率，彼此互補但都不等於風險本身。

## 參考資料

- EPSS 官方網站: https://www.first.org/epss/
- EPSS Model: https://www.first.org/epss/model
- EPSS FAQ: https://www.first.org/epss/faq
- EPSS API: https://www.first.org/epss/api
`,KT=`# Day 23 - CVSS 高不等於一定被利用：怎麼和 EPSS 一起看

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

CVSS 與 EPSS 放在同一張報表時，最容易犯的錯是把兩個數字相乘，得到一個看似精密的「風險分數」。這樣做不是完全不能用，但必須先知道自己犧牲了什麼資訊。

CVSS 說明技術嚴重度與利用條件；EPSS 估計未來 30 天觀察到利用的機率。兩者量尺、更新頻率與問題都不同。

## 高 CVSS、低 EPSS

這類漏洞成功利用後可能造成重大衝擊，但目前公開世界裡的利用訊號較少。原因可能是產品部署量低、利用條件不穩定、細節尚未公開，也可能只是模型目前可見的資料不足。

不能因此直接延後。若受影響系統正好對外、資產價值高，或威脅模型顯示它是特定攻擊者會關注的入口，仍可能需要立即處理。

## 中等 CVSS、高 EPSS

這類漏洞技術影響未必是全面接管，但容易自動化、產品普及，或已出現大量利用訊號。若環境中有大量同類資產，累積風險可能比單一 Critical 更急。

常見例子是可被批次掃描的資訊洩漏、驗證繞過或服務中斷。只用「未達 9 分」篩選，會讓這些項目沉到清單後面。

## 四個步驟比一條公式好用

第一步先確認資產與版本。環境裡沒有受影響產品，後面的分數都只是情報；版本判斷不明時，先補 inventory 或驗證。

第二步看可達性與補償控制。Internet-facing、內網、只限管理平面，攻擊機會不同。

第三步把 CVSS 向量、EPSS score 與 KEV 等利用證據並列，不要只留下綜合數字。這樣決策者看得到「為什麼排前面」。

第四步再納入資產價值、資料敏感度、服務關鍵性與修補成本，形成自己的處置期限。

## EPSS 低不代表沒有 exploit

EPSS 是模型估計，不是 exploit database。某漏洞可能已有 PoC，卻因使用門檻、可靠度或觀測訊號而維持低分；也可能存在未公開或針對性的利用，模型尚未捕捉。

同樣地，EPSS 高不表示已確認遭到野外利用。要回答「是否有已知利用事實」，應查看 CISA KEV、供應商公告與可信威脅情報，而不是從機率反推事實。

## 保留原始欄位，日後才有辦法調整

組織可以設計自己的優先級規則，但最好保留 CVSS vector、版本、EPSS score 與日期、KEV 狀態、資產情境。當模型更新或業務門檻改變時，才能重新排序。

一個漂亮的總分很方便；幾個可解釋的欄位，才真正有利於處置和稽核。

## 參考資料

- EPSS FAQ: https://www.first.org/epss/faq
- EPSS Model: https://www.first.org/epss/model
- CVSS v4.0 User Guide: https://www.first.org/cvss/v4-0/user-guide
- CISA KEV Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
`,QT=`# Day 24 - KEV、Exploit、PoC：不要把三種證據混成一句話

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

「這個漏洞有 exploit。」

這句話可能代表研究員公開了一段只能讓程式 crash 的 PoC，也可能代表攻擊框架已有可靠模組，甚至是事件調查已確認攻擊者正在野外利用。差異很大，通報時不應用同一個詞帶過。

## PoC：證明某個主張成立

Proof of Concept 的目的，是以最小方式證明漏洞或其中一段利用條件。它可能只讓服務異常、顯示可控 instruction pointer，或讀出一小段資料。

PoC 不一定可靠、不一定跨版本，也不一定完成攻擊鏈。能 crash 的 memory corruption PoC，和穩定繞過保護並執行程式碼的 exploit，不是同一成熟度。

引用 PoC 時應說清楚它證明了什麼、測試版本、必要條件與來源。不要因為 GitHub 上出現檔案，就把「存在公開 exploit」寫成「已遭廣泛利用」。

## Exploit：把弱點轉成可利用結果

Exploit 通常比 PoC 更接近實際取得安全影響的程式或方法，但這個詞沒有單一可靠度保證。它可能要人工調整 offset、只支援特定環境，也可能已被整合到成熟工具中。

判讀時至少看來源、發布時間、支援版本、成功結果、是否需要先取得權限，以及是否有可信的獨立驗證。來路不明的 exploit code 本身也可能帶有惡意內容，不適合直接在工作環境執行。

## KEV：已知遭到野外利用的目錄

CISA 的 Known Exploited Vulnerabilities Catalog 收錄有證據顯示已在野外遭利用，且符合其納入條件的 CVE。對美國聯邦文職機關，BOD 22-01 另規定了修補要求；其他組織也可把 KEV 當作高價值排序依據。

KEV 是一份經策展的權威清單，不是世界上所有利用事件的完整全集。某 CVE 尚未列入，不能反推它從未被利用或不重要。

## 三句話分開寫

比起「已有 exploit」，更好的寫法是：

- 研究員已公開可重現服務崩潰的 PoC，尚未證明程式碼執行
- 某工具已加入針對特定版本的 exploit module
- CISA 已於某日將此 CVE 納入 KEV，表示有野外利用證據

每一句都能被查證，也不會把能力、成熟度與觀測事實混在一起。

## 時間戳記很重要

利用狀態會變。公告發布當天「尚無公開 PoC」，一週後可能已失效。撰寫時應加上截至日期與來源；資料庫也應把觀測狀態視為可更新欄位，而不是漏洞永遠不變的描述。

對防守方而言，KEV、可信事件情報與成熟 exploit 通常會顯著提高優先級。但最後仍要確認資產存在、版本與可達性。沒有受影響產品，清單再紅也不會直接變成環境事件。

## 參考資料

- CISA KEV Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- CISA BOD 22-01: https://www.cisa.gov/news-events/directives/bod-22-01-reducing-significant-risk-known-exploited-vulnerabilities
- CVSS v4.0 Exploit Maturity: https://www.first.org/cvss/v4-0/specification-document
- EPSS FAQ: https://www.first.org/epss/faq
`,XT=`# Day 25 - 漏洞類型整理：Injection、Memory Corruption、Auth Bypass、DoS

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

漏洞類型名稱常同時混著根因、利用方法與結果。今天挑四個經常出現在公告裡的詞，重點不是背定義，而是知道看到名稱後還要追問什麼。

## Injection：資料被當成指令或語法

Injection 的共同概念，是不受信任資料進入 interpreter 或 parser 後，改變了原本預期的指令結構。SQL Injection、OS Command Injection、Code Injection、LDAP Injection 都屬於這個家族，但 sink、權限與修補方式不同。

報告只寫「存在 injection」還不夠。要補上可控輸入、進入哪種語法、缺少什麼 neutralization 或參數化，以及成功後可以讀取、修改或執行到什麼程度。

## Memory Corruption：記憶體狀態遭到破壞

Out-of-bounds Read／Write、Use After Free、Buffer Overflow 等問題可能造成 crash、資訊洩漏或程式碼執行。Memory Corruption 是一個很大的結果家族，不應看到 crash 就直接宣稱 RCE。

評估時會關心可控程度、受影響記憶體區域、保護機制、觸發穩定度與程序權限。只有 AddressSanitizer 報告時，可以準確描述觀察到的錯誤，不必替尚未證明的 exploitability 補上戲劇性結論。

## Authentication Bypass：跳過身分驗證

Auth Bypass 表示攻擊者能繞過原本用來確認身分的控制。原因可能是邏輯條件錯誤、token 驗證缺失、預設憑證、簽章驗證問題或路由保護不一致。

它和 Authorization 問題不同。前者回答「你是誰」的驗證失效；後者則是身分已知，但系統錯誤允許你操作不屬於你的資源。一般使用者修改另一位使用者的資料，通常更接近授權問題，不應全部叫 auth bypass。

## Denial of Service：可用性受到影響

DoS 可以來自無限迴圈、資源耗盡、未處理例外、演算法複雜度或網路放大。要描述的是攻擊成本與服務損失：單一 request 能否觸發、服務會自動恢復嗎、只影響一個 worker 還是整個節點、能否持續重複。

「程式崩潰」是重要證據，但不一定等於 A:H。若程序立即由 supervisor 拉起，且只有單次請求受影響，和需要人工重建資料、長時間無法提供服務的情況不同。

## 類型不能代替完整句子

同一個漏洞可能有一條鏈：未驗證攻擊者透過 injection 執行命令，進一步讀取設定並使服務中斷。分類時要找主要 weakness；描述時則交代入口、條件與可達影響。

好的標題可以簡短，正文不能只靠標籤。與其寫「Critical Auth Bypass RCE」，不如說明哪個驗證步驟可被繞過、之後可呼叫哪個管理功能，以及命令以何種權限執行。讀者才能判斷修補與風險。

## 參考資料

- CWE-74 Injection: https://cwe.mitre.org/data/definitions/74.html
- CWE-119 Memory Buffer Operations: https://cwe.mitre.org/data/definitions/119.html
- CWE-288 Authentication Bypass: https://cwe.mitre.org/data/definitions/288.html
- CWE-400 Uncontrolled Resource Consumption: https://cwe.mitre.org/data/definitions/400.html
`,YT=`# Day 26 - CVE 描述怎麼寫：把必要事實放進一個段落

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

CVE 描述不是新聞標題，也不是完整技術報告。它需要在不長的篇幅裡，讓沒有參與調查的人知道哪個產品、哪些版本、出了什麼問題、誰能在什麼條件下利用，以及會造成什麼影響。

最常見的失敗不是文法，而是句子看起來完整，關鍵資訊卻不在裡面。

## 先確定主詞

「A vulnerability was found in the system」幾乎沒有識別力。主詞應盡量包含 vendor、product 與受影響元件。若產品有容易混淆的同名版本，也要用 CPE、package ecosystem 或其他結構化欄位補足。

版本範圍不必全塞進英文句子，但 Record 中應有可機器讀取的 affected data。使用「latest version」「all versions」前要特別小心，除非調查真的能支持這麼大的範圍。

## 中間說明 weakness 與入口

接著交代失效控制與可控入口，例如「在處理下載路徑時未限制解析後的位置」或「將未經中和的參數串接到 shell command」。這比只寫 arbitrary file read 或 RCE 更能說明漏洞本身。

若公開細節會在修補前增加不必要風險，可以保留 payload 或敏感路徑，但不應把描述抽空到只剩「存在安全問題」。

## 攻擊者條件不能省略

遠端或本機、是否需要驗證、需要一般帳號還是管理員權限、是否要另一位使用者操作，會直接改變讀者判斷。

避免使用「authenticated attacker」後就不再說明權限。若產品角色很多，應指出最低必要權限或可執行的功能。若目前只能證明管理員可利用，就不要推測一般使用者也可以。

## 結尾描述可證明的影響

影響可以是讀取限制外檔案、修改其他使用者資料、執行服務帳號權限的命令，或造成服務中斷。把能力與可能後果分開，文字會比較誠實。

例如「可讀取服務程序有權存取的檔案，可能導致敏感設定外洩」，比「可取得伺服器所有機密」準確。後者同時假設了權限、檔案內容與後續利用。

## 一個可重用的骨架

\`\`\`text
[Vendor] [Product] [affected versions] contains [weakness]
in [component or operation]. [Attacker with conditions] can
[action] via [input or interface], resulting in [technical impact].
\`\`\`

骨架是防漏清單，不是要每篇公告長得一模一樣。若句子太長，可以拆成兩句；若產品名稱已在結構化欄位很清楚，也不必為了模板反覆堆疊。

## 避免沒有證據的形容詞

Critical、easily、severe、fully compromised 都需要依據。CVE 描述的工作是陳述事實，嚴重度可由 CVSS 向量表達，利用成熟度則交給相應欄位與外部情報。

發布前可以把描述交給沒看過報告的人，只問五件事：哪個產品、哪些版本、哪個控制失效、利用條件、技術影響。如果有一題答不出來，通常還需要補資料。

## 參考資料

- CVE Record Format: https://cveproject.github.io/cve-schema/schema/docs/
- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
`,ZT=`# Day 27 - 一份好漏洞報告需要什麼：影響、條件、版本、修補

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

一份有 payload 的報告不一定能被重現；一份沒有華麗 exploit 的報告，也可能非常好處理。差異通常在於它是否把測試環境、操作步驟與安全影響連成一條可驗證的證據鏈。

## 先讓別人找到同一個系統

列出產品名稱、版本、build、安裝方式、作業系統與相關設定。雲端服務則需要 endpoint、租戶條件與測試時間。若漏洞只在非預設設定出現，設定本身就是前置條件，不能藏在重現步驟深處。

版本資訊最好能被再次確認，例如 About 頁面、package lock、image digest 或回應 header。只寫「最新版」幾天後就失去意義。

## 重現步驟要能從乾淨狀態開始

說明使用哪種角色登入、先建立什麼資料、送出哪個 request，再觀察哪個結果。HTTP 報告可附上去除 cookie、token 與個資後的原始 request/response；桌面程式則可附 crash log、stack trace 或最小觸發檔案。

不要只貼自動化工具的結論畫面。工具名稱與版本可以保留，但核心證據應讓維護者不用同一套工具也能理解。

## Expected 與 Actual 能快速定位問題

Expected Behavior 說明系統原本應阻止什麼；Actual Behavior 則記錄實際發生的安全違反。

例如：「一般帳號應只能下載自己建立的備份；修改 \`backup_id\` 後，伺服器回傳另一位使用者的備份。」這比「存在 IDOR」更容易驗證，也避免術語選錯時拖累整份報告。

## Impact 要和證據接得起來

能修改顯示名稱，不等於能接管帳號；看到 stack trace，不等於已取得 RCE。可以分成已證明的 impact 與合理的後續風險，並標示尚未驗證的部分。

若測試為了避免碰觸真實資料而中止，也可以清楚說明停止位置。負責任的邊界，比假裝完成整條攻擊鏈更可信。

## 版本範圍與修補資訊

研究者通常只能確認測過的版本，不應自行宣稱所有歷史版本都受影響。供應商在 triage 後可透過 commit history、回歸測試與 release branch 補齊範圍。

修補建議可以提供，但不必把單一 payload 黑名單當成完整修復。若已有 patch，應測試原 PoC、編碼變形、權限邊界與相鄰功能，並記錄第一個修補版本或 workaround。

## 別忘了聯絡與揭露安排

留下可回覆的聯絡方式、期望署名，以及是否已向其他協調單位或平台通報。若附檔含敏感資訊或 exploit，先確認接收方提供的安全傳輸方式。

一份好報告的目的不是證明作者多厲害，而是讓另一端能穩定重現、判斷範圍、完成修補，最後把公開資訊寫對。

## 參考資料

- CERT/CC Vulnerability Disclosure Guidance: https://certcc.github.io/confluence/display/CVD/
- CISA Coordinated Vulnerability Disclosure Process: https://www.cisa.gov/coordinated-vulnerability-disclosure-process
- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
`,JT=`# Day 28 - 案例拆解：把漏洞報告整理成 CVE Record

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

今天用一個虛構案例，走完從報告到公開 Record 的整理過程。案例不對應任何真實產品，重點是資料如何轉換。

## 原始報告

研究者回報 Acme Note Server 4.2.0 的匯入功能接受 ZIP 檔。封裝內的檔名若包含 \`../\`，解壓縮後可以把檔案寫到匯入目錄之外。功能僅限已登入的一般帳號使用；研究者以無害文字檔證明可以覆寫服務帳號有權寫入的位置。

報告附上測試環境、最小 ZIP、request、解壓前後檔案位置與服務日誌。沒有測試寫入 web root 或啟動目錄，因此尚未證明程式碼執行。

## 先確認這是不是一個可獨立修補的漏洞

維護者重現後，發現解壓函式只檢查封裝檔名是否為絕對路徑，沒有確認正規化後的輸出仍在目的目錄。修補是在寫檔前解析 canonical path，拒絕超出目錄的項目。

這裡已有明確的安全政策違反、受影響元件與獨立修補點。接著要確認是否已有 CVE、產品是否在該 CNA scope，以及公開時程。

## 補齊 affected versions

研究者只測 4.2.0。維護者追查後確認問題從 4.0.0 引入，4.2.1 修正；3.x 使用另一套匯入流程，不受影響。

Record 的 affected data 因而可以表達 4.0.0 起、4.2.1 之前受影響，而不是含糊寫成「4.2.0 and earlier」。版本範圍是調查結果，不是從單一測試版本外推。

## 選 CWE

輸入是封裝內路徑，失效點是解壓目的路徑未限制在指定目錄，符合 \`CWE-22\`。若要更貼近 Zip Slip 的實作情境，也仍應從官方允許用於 vulnerability mapping 的 weakness 與證據出發，不需自創分類。

## 寫描述

可以整理成：

> Acme Note Server 4.0.0 through 4.2.0 does not restrict the resolved path of entries extracted by its ZIP import function. An authenticated remote user can upload a crafted archive to write files outside the import directory with the privileges of the service account, potentially overwriting application-accessible files.

描述沒有宣稱 RCE，因為報告沒有證明可寫位置一定會被執行；也保留了服務帳號權限這個重要邊界。

## 評估與參考資料分開處理

CVSS 要依匯入功能的網路可達性、一般帳號權限、是否需他人互動及可寫範圍判斷，不能因為看到 Zip Slip 就套固定向量。

References 可放供應商公告、修補 release note 或 commit，以及協調後同意公開的研究報告。若 commit 在公告前會直接揭露 exploit 細節，發布時程需要一起安排。

## 最後做一致性檢查

產品名、版本、描述、CWE、CVSS 與 references 應講同一個故事。若描述寫一般帳號即可利用，CVSS 卻填 PR:N；或修補版本寫 4.2.1，affected data 又把 4.2.1 標成 affected，就需要在發布前修正。

把報告轉成 Record 不是濃縮文字而已，而是把每個主張放進可驗證、可供人與機器使用的欄位。

## 參考資料

- CVE Record Format: https://cveproject.github.io/cve-schema/schema/docs/
- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
- CWE-22: https://cwe.mitre.org/data/definitions/22.html
- CVSS v4.0 Calculator: https://www.first.org/cvss/calculator/4.0
`,eA=`# Day 29 - 從公開審查規則看：哪些報告最容易被要求補件

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

「有安全問題」和「目前資料足以完成 CVE 判定與發布」是兩件事。從 CVE Program 公開的 CNA Rules 與協調指引，可以整理出幾類最常需要來回確認的報告。

這些問題不代表研究沒有價值，只表示公開 Record 需要更多可驗證事實。

## 找不到產品與版本

產品有社群版、企業版、雲端版與多個 fork，報告卻只寫專案簡稱；或測試版本只標成 latest。接收方很難確認責任範圍，也無法搜尋 duplicate。

補件時通常需要完整產品名稱、取得來源、版本／commit、安裝模式與受影響元件。截圖可以輔助，但最好再有可複製的文字資訊。

## 無法從步驟重現安全影響

只有掃描器標題、沒有 request/response；只有 crash 畫面、沒有觸發檔案；或步驟依賴未說明的測試資料。這些都會讓重現停住。

報告應把環境、權限、前置資料、觸發輸入與觀察結果接起來。若漏洞不穩定，也要記錄成功率、時序或資源條件，而不是隱去失敗情況。

## 把預期功能當成漏洞

管理員原本就能執行系統命令、公開目錄原本就允許下載、使用者能修改自己建立的內容，單看結果未必違反安全政策。

要指出跨越了哪個信任邊界：一般帳號取得管理能力、A 租戶讀到 B 租戶資料，或輸入逃離原本限制。Expected 與 Actual 在這裡特別重要。

## Impact 過度延伸

錯誤訊息洩漏被寫成 full database compromise；可造成 crash 被寫成 remote code execution；需要管理員權限的功能被描述為 unauthenticated。

這類報告不是形容詞刪掉就好，還要回到證據。把已證明能力、合理後果與尚未驗證假設分開，反而更容易推進。

## 版本範圍靠猜

只測一版卻宣稱「所有版本」，或看到修補版後就假定所有舊版皆受影響。CVE Record 需要盡量準確的 affected status，但研究者與供應商掌握的資料可能不同。

報告可明確寫「confirmed on 4.2.0」；後續再由維護者檢查引入 commit 與各分支。這比先寫一個很大的範圍再縮回來可靠。

## Duplicate、scope 與聯絡對象

同一 root cause 可能已分配 CVE，也可能報到不負責該產品的 CNA。分配前搜尋既有公告、CVE List 與 issue tracker，可以減少重複；不確定窗口時，可依 CVE Program 的 CNA List 尋找產品 CNA 或適當的協調單位。

## 保持可回覆

很多補件最後卡在聯絡信箱失效、附件過期，或報告者未回覆關鍵問題。送出後保留原始測試環境與檔案，並明確告知公開期限或其他通報窗口。

一份報告是否被接受，不應只用「有沒有 CVE」衡量；但若目標是完成標準化通報，可重現性、scope、獨立修補點與清楚的產品資料確實不可少。

## 參考資料

- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
- CVE CNA List: https://www.cve.org/PartnerInformation/ListofPartners
- CERT/CC Coordinated Vulnerability Disclosure: https://certcc.github.io/confluence/display/CVD/
`,nA=`# 2025 年回顧：在新竹 37K 的日子裡，我為自己打了一場仗

看到以前實習時遇到的資安前輩 HackerCat（駭客貓）寫的年度回顧，發現他每年都會記錄自己的成長，這讓我也想靜下心來，把這精彩到不行、甚至有點瘋狂的 2025 年給記錄下來。

這一年，我從一個剛走出軍營的新人，變成了一個在實戰中摸爬滾打的資安人。

> 薪水是公司的，但學到的技術是自己的。既然來了，就要帶走一點什麼。

---

## 從軍營走進新竹，先感受到的是現實

剛畢業、當完兵後，我帶著熱血跑去新竹找了人生第一份正式工作。現實很快就讓我體會到社會的重量。

領著扣完勞健保大約三萬七的月薪，在物價高昂的新竹，租了一間每個月一萬塊的小套房。每個月薪水入帳，看著被房租抽走的一大塊，再算算剩下的生活費，存摺裡的數字真的會讓人心涼一半。

但那時候我心裡一直有個聲音提醒自己：現在也許苦，可是只要能力真的有長在自己身上，這段日子就不算白熬。

## 一人資安，一人 IT，什麼都得扛

我的公司大約兩百人，但資安專職只有我一個，整個 IT 部門算上我也才三個人。

這意味著我沒有前輩可以帶，沒有現成的 SOP 可以照著走，很多問題到了我這裡，就是最後一站。

那一年，我活得像個雜食動物，什麼都得學、什麼都得碰。

- 從最基礎的 IT 運作開始補
- 學 AD 權限控管與 DNS 解析
- 跟著公司一起轉向雲端，摸熟 M365 生態系
- 研究 Entra ID 的身分驗證機制
- 用 Intune 管兩百多台狀況百出的端點
- 接觸 Microsoft Purview 做資料治理
- 地端環境還得處理 PA 防火牆、Switch 配置、XFort 與 PAM 導入

很多時候，我不是在做單一職位的工作，而是在用一個人的力氣，硬撐出一個小型資訊與資安體系。

## 那個凌晨一點回公司的夜晚，我記到現在

印象最深的一次，是因為我白天動了防火牆設定，結果害得別部門主管半夜沒辦法連 VPN 工作。

那天半夜一點，我一個人從租屋處爬起來，在空蕩蕩的新竹街道上趕回公司處理。深夜的公司很安靜，安靜到只剩機房風扇聲。

就是在那個時間點，我第一次很清楚地意識到：資安這份工作不只是技術而已，它還包含一種很難分攤的責任感，甚至是一種孤獨感。

你改一條規則、開一個權限、做一次修補，背後接住的不是一台設備，而是一整個部門能不能正常運作。

## 每月 Nessus 掃描，手抖著按下修補

因為公司經費有限，弱點掃描又是客戶稽核裡很重要的一塊，所以公司買了 Nessus 授權，而我就負責每個月的掃描與修補。

說實話，每次按下修補鍵時，手真的會抖。超怕哪台 Server 被我補壞直接掛掉，畢竟我背後沒有一個完整團隊可以支援，也沒有什麼緩衝空間能讓我放心犯錯。

但也就是在這種環境裡，我開始被迫養出真正的判斷力。

- 哪些漏洞要先補
- 哪些風險要先隔離
- 哪些變更要先驗證
- 哪些系統不能用理想狀態去看，只能在現實限制裡做最好的決定

## AI 變成我那一年的資安導師

在這種極限環境下，AI 幾乎成了我唯一的「資安導師」。

我學會了如何更精準地與 AI 對話，讓它幫我分析 Log、撰寫自動化腳本、整理觀念、檢視設定，甚至陪我一起做問題拆解。

那些夜晚，表面上看起來只是我一個人坐在螢幕前，但其實我是在和工具、知識、壓力、責任一起對打。

也正是那段時間，我開始真正理解一件事：會不會用 AI，不只是效率問題，而是你能不能在資源稀缺的情況下，替自己補出一個成長系統。

## 小程式、小自動化，替自己也替公司爭一口氣

這一年也不是只有壓力和疲勞。

我偶爾也會幫使用者寫一些小程式，去簡化他們原本很繁瑣的流程。看到原本要花幾小時的事，因為我的程式只要幾秒鐘就能完成，那種「真的幫上忙」的成就感很踏實。

我也慢慢發現，自己除了做資安，開發這件事其實也能成為我很強的武器。

如果一個資安人懂得寫程式、懂得自動化，就不只是守住風險而已，還能直接幫團隊提升效率、幫公司省掉外包成本，甚至把很多原本會重複消耗人的工作，變成一次做好、之後持續受益。

## 在混亂裡逼自己拿下 CEH，也開始公開輸出

為了證明自己，我逼著自己在雜事夾縫中考到了 CEH 證照。

那段日子，下了班就馬上回到小套房與考古題和實驗環境為伍。白天解決公司問題，晚上處理自己的未來。

後來，我還報名了人生第一次的 iThome 鐵人賽。連續寫三十天技術文章的過程，某種程度上也是在跟這一整年的混亂對話，把那些看似雜亂無章，但其實非常紮實的實戰經驗，一點一點整理成我能帶走的東西。

## 2025 很苦，但真的很精彩

現在回頭看，2025 年真的過得非常充實。

雖然領著實領三萬七、住著一萬塊的房子，生活並不寬裕，但這一年下來，我學會了如何在資源最匱乏的時候，靠自己撐起一整個防禦體系。

那些半夜修好的防火牆、那些一個人做完的掃描與修補、那些與 AI 一起熬過去的深夜，還有那份被現實逼出來的韌性，都是我在 2025 年拿到最貴、也最真實的資產。

2025，我過得很精彩。

---

改天再找時間補 2024 實習那段日子。
`;function mr(e){return e.replace(/^---[\s\S]*?---\s*/,"").trim()}const y1=[{slug:"certification-review",name:"證照心得",count:2},{slug:"certification-notes",name:"證照筆記",count:1},{slug:"ctf-notes",name:"CTF 筆記",count:1},{slug:"forensics",name:"Forensics",count:1},{slug:"self-review",name:"回顧自我",count:1},{slug:"ithome-2025-ironman",name:"2025 iThome 鐵人賽",count:30},{slug:"ithome-2026-ironman",name:"2026 iThome 鐵人賽",count:30}],tA=[NaN,{slug:"ithome-2026-day-29",title:"Day 29 - 從公開審查規則看：哪些報告最容易被要求補件",date:"2026-08-04",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"從 CNA Rules 與協調指引整理常見補件原因：產品版本不明、無法重現、影響過度延伸、scope 錯誤與版本範圍靠猜。",coverImage:null,contentMarkdown:eA},{slug:"ithome-2026-day-28",title:"Day 28 - 案例拆解：把漏洞報告整理成 CVE Record",date:"2026-08-03",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"用虛構的 ZIP 路徑穿越案例，逐步確認修補點、affected versions、CWE、描述、CVSS 與 references 如何保持一致。",coverImage:null,contentMarkdown:JT},{slug:"ithome-2026-day-27",title:"Day 27 - 一份好漏洞報告需要什麼：影響、條件、版本、修補",date:"2026-08-02",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"好的漏洞報告要讓另一端找到同一環境、從乾淨狀態重現，並把已證明影響、版本範圍與修補資訊清楚分開。",coverImage:null,contentMarkdown:ZT},{slug:"ithome-2026-day-26",title:"Day 26 - CVE 描述怎麼寫：把必要事實放進一個段落",date:"2026-08-01",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"從產品、版本、weakness、攻擊條件到技術影響，整理 CVE 描述應保留的必要事實，以及容易讓內容失真的用語。",coverImage:null,contentMarkdown:YT},{slug:"ithome-2026-day-25",title:"Day 25 - 漏洞類型整理：Injection、Memory Corruption、Auth Bypass、DoS",date:"2026-07-31",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"四種常見漏洞名稱各自在描述什麼，又還缺哪些資訊？從輸入、失效控制與實際結果，避免把根因、利用方法與影響混在一起。",coverImage:null,contentMarkdown:XT},{slug:"ithome-2026-day-24",title:"Day 24 - KEV、Exploit、PoC：不要把三種證據混成一句話",date:"2026-07-30",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"PoC 證明主張、exploit 取得利用結果、KEV 記錄已知野外利用。分開能力、成熟度與觀測事實，通報才不會誇大。",coverImage:null,contentMarkdown:QT},{slug:"ithome-2026-day-23",title:"Day 23 - CVSS 高不等於一定被利用：怎麼和 EPSS 一起看",date:"2026-07-29",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"6 min read",excerpt:"CVSS 描述技術嚴重度，EPSS 估計近期利用機率；搭配資產、可達性與 KEV 證據，才能形成可解釋的優先順序。",coverImage:null,contentMarkdown:KT},{slug:"ithome-2026-day-22",title:"Day 22 - EPSS 是什麼？它預測的是未來 30 天",date:"2026-07-28",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"6 min read",excerpt:"EPSS 每日估計 CVE 在未來 30 天觀察到野外利用的機率。理解 score、percentile 與模型限制，避免把預測當成風險答案。",coverImage:null,contentMarkdown:qT},{slug:"ithome-2026-day-21",title:"Day 21 - 從向量到分數：RCE 一定是 9.8 嗎",date:"2026-07-27",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"RCE 不會自動等於 CVSS 9.8。登入權限、使用者互動、利用位置與實際影響不同，都會產生不同向量與分數。",coverImage:null,contentMarkdown:GT},{slug:"ithome-2026-day-20",title:"Day 20 - Scope 與 C／I／A：影響到底落在哪個系統",date:"2026-07-26",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"從 v3.1 Scope 的 security authority，到 v4.0 vulnerable 與 subsequent system，逐一確認機密性、完整性與可用性影響。",coverImage:null,contentMarkdown:$T},{slug:"ithome-2026-day-19",title:"Day 19 - PR 與 UI：到底是誰必須先做什麼",date:"2026-07-25",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"Privileges Required 看攻擊前已有權限，User Interaction 看攻擊者以外的人是否必須參與；用 Stored XSS 拆開兩者。",coverImage:null,contentMarkdown:HT},{slug:"ithome-2026-day-18",title:"Day 18 - AV、AC 與 AT：攻擊距離和攻擊難度怎麼判斷",date:"2026-07-24",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"利用位置、額外條件與攻擊者必須克服的防禦不是同一件事。比較 v3.1 AC 與 v4.0 新增的 Attack Requirements。",coverImage:null,contentMarkdown:UT},{slug:"ithome-2026-day-17",title:"Day 17 - CVSS v4.0 改了什麼？不只是多一組縮寫",date:"2026-07-23",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"CVSS v4.0 新增 Attack Requirements、細分 User Interaction、移除 Scope，並加入 Threat 與 Supplemental Metrics。",coverImage:null,contentMarkdown:WT},{slug:"ithome-2026-day-16",title:"Day 16 - 一篇讀懂 CVSS v3.1：從條件、Scope 到影響",date:"2026-07-22",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"把 v3.1 Base Vector 還原成攻擊敘事，依序理解 AV、AC、PR、UI、Scope 與 C／I／A，而不是只記住 9.8。",coverImage:null,contentMarkdown:BT},{slug:"ithome-2026-day-15",title:"Day 15 - CVSS 是什麼？先把嚴重度與風險分開",date:"2026-07-21",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"CVSS 提供技術嚴重度的共同語言，不知道組織的資產與威脅情境。先分清 Base、時間變化與 Environmental Metrics。",coverImage:null,contentMarkdown:_T},{slug:"ithome-2026-day-14",title:"Day 14 - 案例練習：一個漏洞如何選 CWE 與 CAPEC",date:"2026-07-20",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"從虛構的任意檔案讀取報告開始，圈出入口、權限、失效控制與影響，再判斷 CWE-22 與 CAPEC-139 是否真的吻合。",coverImage:null,contentMarkdown:zT},{slug:"ithome-2026-day-13",title:"Day 13 - CVE、CWE、CAPEC 三者到底怎麼接在一起",date:"2026-07-19",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"6 min read",excerpt:"CVE 識別具體漏洞，CWE 描述系統弱點，CAPEC 整理攻擊者行為。三者回答不同問題，也不是一對一關係。",coverImage:null,contentMarkdown:OT},{slug:"ithome-2026-day-12",title:"Day 12 - CAPEC 怎麼讀？把攻擊行為拆成幾個階段",date:"2026-07-18",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"6 min read",excerpt:"以 Relative Path Traversal 為例，沿著 Explore、Experiment、Exploit 閱讀 CAPEC execution flow，找出報告缺少的利用條件。",coverImage:null,contentMarkdown:FT},{slug:"ithome-2026-day-11",title:"Day 11 - CAPEC 是什麼？它和 CWE 有什麼不同",date:"2026-07-17",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"CWE 在問系統哪裡出了問題，CAPEC 則整理攻擊者如何利用弱點。理解 attack pattern，也釐清它和 ATT&CK 的使用差異。",coverImage:null,contentMarkdown:jT},{slug:"ithome-2026-day-10",title:"Day 10 - 不要只寫表面現象：CWE 與漏洞根因",date:"2026-07-16",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"7 min read",excerpt:"任意檔案讀取與 RCE 都可能只是結果。從資料流、失效控制與 patch 往前追，讓 CWE mapping 停在證據支持的位置。",coverImage:null,contentMarkdown:LT},{slug:"ithome-2026-day-09",title:"Day 9 - 常見 CWE 怎麼分？從 XSS、SQL Injection、Path Traversal 到 RCE",date:"2026-07-15",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"XSS、SQL Injection 與 Path Traversal 比較像失效方式，RCE 通常是結果。沿著 input、檢查與 sink 選擇合適 CWE。",coverImage:null,contentMarkdown:MT},{slug:"ithome-2026-day-08",title:"Day 8 - CWE 是什麼？為什麼漏洞要對應 CWE",date:"2026-07-14",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"CVE 指向特定產品裡的一個漏洞，CWE 則描述可能反覆出現的弱點類型。從一行不安全程式碼開始，理解 weakness、vulnerability 與分類粒度的差別。",coverImage:null,contentMarkdown:NT},{slug:"ithome-2026-day-07",title:"Day 7 - 寫漏洞通報時，什麼資訊是「必要」的？",date:"2026-07-13",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"9 min read",excerpt:"一封只寫「這裡有漏洞」的信，通常還不足以處理。從產品版本、重現步驟、安全邊界到公開狀態，整理一份能被定位、驗證與協調的漏洞報告。",coverImage:null,contentMarkdown:VT},{slug:"ithome-2026-day-06",title:"Day 6 - 漏洞資訊到底看誰？CVE/MITRE、NIST/NVD、CISA/KEV、FIRST 與 Vendor Advisory",date:"2026-07-12",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"10 min read",excerpt:"同一組 CVE ID 在 CVE.org、NVD、CISA、FIRST 與廠商公告中，可能呈現不同資料。從官方識別、NIST enrichment、在野利用、評分標準到修補資訊，整理各來源真正負責回答的問題。",coverImage:null,contentMarkdown:RT},{slug:"ithome-2026-day-05",title:"Day 5 - CVE Record 裡通常包含哪些欄位？",date:"2026-07-11",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"9 min read",excerpt:"一筆 CVE Record 不只有描述與分數。從 cveMetadata、CNA container 到可選的 ADP enrichment，逐一拆解產品、版本、CWE、CVSS、references 等欄位該怎麼讀。",coverImage:null,contentMarkdown:IT},{slug:"ithome-2026-day-04",title:"Day 4 - 一個漏洞從發現到公開的生命週期",date:"2026-07-10",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"9 min read",excerpt:"漏洞從被發現到成為公開 CVE Record，會經過通報、指派判斷、保留 ID、整理資料與發布。理解每個階段，才能分清 Reserved、Published 與下游 enrichment。",coverImage:null,contentMarkdown:DT},{slug:"ithome-2026-day-03",title:"Day 3 - CNA 是什麼？CNA、Root CNA、MITRE、NVD 的角色",date:"2026-07-09",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"CNA 負責指派與發布，Root 負責治理，MITRE 同時扮演多個 Program 角色，而 NVD 是下游 enrichment 資料庫。釐清角色，才能找到正確通報窗口。",coverImage:null,contentMarkdown:bT},{slug:"ithome-2026-day-02",title:"Day 2 - CVE 是什麼？CVE ID、CVE Record、CVE List 的差異",date:"2026-07-08",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"8 min read",excerpt:"一句「請查一下這個 CVE」，可能在問識別碼、單筆漏洞紀錄或整份公開目錄。拆開 CVE ID、CVE Record 與 CVE List，才能正確理解漏洞狀態與資料層次。",coverImage:null,contentMarkdown:AT},{slug:"ithome-2026-day-01",title:"Day 1 - 為什麼漏洞需要標準化通報？從 CVE 說起",date:"2026-07-07",category:"2026 iThome 鐵人賽",categorySlug:"ithome-2026-ironman",readTime:"6 min read",excerpt:"漏洞通報不是把技術細節丟出去就結束。CVE 的價值在於讓研究者、廠商、使用者與防禦者能用同一個識別方式討論同一個問題，降低誤解與重複溝通成本。",coverImage:null,contentMarkdown:TT},{slug:"ithome-2025-day-01",title:"Day 1- 法規推著我上場，學習讓我留下",date:"2025-08-18",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"資安是一場長期戰爭，我想把戰場紀錄下來。 還記得面試那天，主管提到公司剛上櫃，為了符合法規要求，需要一名專職的資安人員。在那之前，所有 IT 事務幾乎都由一位資...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10374837",contentMarkdown:XP},{slug:"ithome-2025-day-02",title:"Day 2 - 公開情資很重要",date:"2025-08-19",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"是不是以為我要介紹 OWASP？今天不打算列一堆「情資平台清單」，而是針對公務繁忙、只能被動收信的資安工程師：只要訂閱幾個可靠來源，人家幫你整理好寄到信箱，...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10374947",contentMarkdown:YP},{slug:"ithome-2025-day-03",title:"Day 3 - 鐵裝還是布甲？資安裝備選擇題",date:"2025-08-20",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"在一家公司裡，導入資安工具與服務的最大推力，往往來自 法規要求（ISO 27001、GDPR、金融業規範）與 客戶稽核，再加上長官對安全能力的期待。這些要求就...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10374848",contentMarkdown:ZP},{slug:"ithome-2025-day-04",title:"Day 4 - 公司的第一道防線",date:"2025-08-21",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"畢業後正式踏入資安職涯：Firewall，新手的第一道防線 畢業後正式踏入資安職涯，迎來的第一份正職工作。剛坐下還沒熟悉環境，主管就直接開口： 「你會看 Fi...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375208",contentMarkdown:JP},{slug:"ithome-2025-day-05",title:"Day 5 - 文件地獄：葵花寶典?",date:"2025-08-22",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"在資安工程師的世界裡，敵人不只有勒索病毒、APT、釣魚信……還有一種藏在辦公室抽屜、共用槽的恐怖怪物： 「ISMS 文件」。 如果把防火牆當作是鐵甲、EDR 當...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375130",contentMarkdown:eT},{slug:"ithome-2025-day-06",title:"Day 6 - EDR：手上那把神器",date:"2025-08-23",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"我每次 Python 寫的程式都被 EDR 擋住 :D還有一些機台軟體，每次安裝都會被隔離，有時候還誤以為「安裝失敗」，結果白白浪費好幾個小時在 debug。這...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375289",contentMarkdown:nT},{slug:"ithome-2025-day-07",title:"Day 7 - IT 部門人少，資安工程師的多重宇宙",date:"2025-08-24",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"本來以為進公司，掛上「資安工程師」這個名號後，我的世界就是防火牆、EDR、弱點掃描，跟駭客在暗網對決。結果現實卻是：IT 部門人少，很多雜事也會落到我身上。...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375678",contentMarkdown:tT},{slug:"ithome-2025-day-08",title:"Day 8 - 漏洞掃描大冒險：外包勇者 vs 自建工匠",date:"2025-08-25",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"想像一下：你的船在風平浪靜時就開始漏水——你會怎麼辦？在資安的世界裡，公司就像一艘航行中的大船，弱點就是那些你看不見的裂縫。不先檢查，等到海水灌進來，可能就來不...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375763",contentMarkdown:rT},{slug:"ithome-2025-day-09",title:"Day 9 - 什麼M365除了Word，也有資安產品?",date:"2025-08-26",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"6 min read",excerpt:"原本以為微軟不就 Word、Excel 而已？公司導入 M365 才發現：微軟的 Security 其實很全。先聲明我沒買它股票（笑），但也必須說：全＝好複雜...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375925",contentMarkdown:iT},{slug:"ithome-2025-day-10",title:"Day 10 - 微軟有Zero Trust架構嗎?",date:"2025-08-27",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"前言 講到 ZT（Zero Trust），就會想到大學時期的大專生計劃，我還拿這個當主題，但後來沒過 昨天說到 M365 不只是辦公室套件，今天要聊聊現在最...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376085",contentMarkdown:oT},{slug:"ithome-2025-day-11",title:"Day 11 - 資料保護：別讓公司機密「長翅膀」飛出去",date:"2025-08-28",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"5 min read",excerpt:"前言 昨天講了 Zero Trust 的六大支柱，今天要挑一個大家最有感的：資料（Data）。因為對公司來說，伺服器壞了可以重建，但 資料外洩 可能直接 GG。...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376246",contentMarkdown:sT},{slug:"ithome-2025-day-12",title:"Day 12 - 即使資料保護再嚴密，也擋不住一台失守的裝置",date:"2025-08-29",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"5 min read",excerpt:"昨天我們討論了資料（Data），這是企業最擔心外洩的核心資產。要有效守護資料，下一步必須確認：員工是用什麼裝置來存取這些資料。 想像一下：一台多年未更新的 Wi...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376390",contentMarkdown:aT},{slug:"ithome-2025-day-13",title:"Day 13 - 打帳密已經過時了?大門不只要鎖，還要驗明正身",date:"2025-08-30",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"還記得剛進公司的第一天，IT 交給我一組帳號密碼，叮嚀：「千萬不要外流」。但現在光靠帳號密碼，已經很難抵擋駭客了。密碼外洩、釣魚信、暴力破解，都讓帳密組合變成資...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376102",contentMarkdown:lT},{slug:"ithome-2025-day-14",title:"Day 14 - 資安工程師的週末小結",date:"2025-08-31",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"又是週末了，請容許我偷懶一下，寫一篇心得文吧。這篇不談技術細節，主要是想回顧一下開賽到現在我寫了些什麼。 老實說，這 14 天的文章有點隨性，每天都是當天臨時想...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376400",contentMarkdown:uT},{slug:"ithome-2025-day-15",title:"Day 15 - 切碎內網，才能防止駭客橫向移動",date:"2025-09-01",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"前面談過 Zero Trust 的身分、裝置、資料，今天來到第四根柱子：網路（Network）。老實說，這一塊其實跟傳統 IT 網路很像，像 CCNA 的考題一...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376885",contentMarkdown:cT},{slug:"ithome-2025-day-16",title:"Day 16 - 不出手也能「看光光」：被動盤點你公司的對外曝險",date:"2025-09-02",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"很多人以為一定要掃 IP、跑掃描器才看得到風險。其實 不碰對方資產，只靠公開資訊與指標，也能把自家對外面貌、第三方風險、外洩跡象抓個七八成。完全被動、合法合規...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377098",contentMarkdown:fT},{slug:"ithome-2025-day-17",title:"Day 17 - 為什麼一定要管「特權帳號」？",date:"2025-09-03",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"越來越想不到寫啥了 XDD每天在想要寫什麼，甚至都比寫的時間久 大家常聽到「帳號權限要設定好」，但「特權帳號」其實是另一回事：它能新增使用者、修改設定、存取...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377265",contentMarkdown:hT},{slug:"ithome-2025-day-18",title:"Day 18 - 如果明天 DB 爆掉，你撐得住嗎？",date:"2025-09-04",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"在資訊安全裡，很多人把心力放在「防止駭客入侵」，卻忘了一件更現實的事： 系統總有一天會壞，資料總有一天會丟。 不論是硬碟故障、人為誤刪、勒索病毒，還是天災火...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377454",contentMarkdown:dT},{slug:"ithome-2025-day-19",title:"Day 19 - 如何打造一個可靠的備份策略？",date:"2025-09-05",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"昨天聊到 RTO（恢復時間目標）與 RPO（恢復點目標），今天來談談如何透過備份保護資料，確保在最壞情況下仍能快速復原。 最經典的 3-2-1 備份原則...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377679",contentMarkdown:pT},{slug:"ithome-2025-day-20",title:"Day 20 — 為什麼要做災害復原？",date:"2025-09-06",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"昨天聊到 3-2-1 備份原則，備份能確保資料還在，但光有備份，並不代表系統能夠快速恢復上線。每年不管是 ISO 還是法規，總有個大魔王：災害復原（Disas...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377737",contentMarkdown:mT},{slug:"ithome-2025-day-21",title:"Day 21 - 資安專責人員",date:"2025-09-07",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"倒數第二個假日啦～前幾天聊到的 備份、零信任、帳號管理、災害復原、各種監控，其實通通都是資安專責人員的日常。 以下引用數發部發佈的資料： 何謂資安專責人員...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378065",contentMarkdown:gT},{slug:"ithome-2025-day-22",title:"Day 22 - 公司電腦上，還有隱私嗎？",date:"2025-09-08",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"分享一個朋友的故事。 剛進公司不久，他電腦突然變超卡，還沒來得及寫信報修，電話就先響了： 「嗨～你電腦是不是怪怪的？我們這邊看到你 CPU 爆了。」 當下他...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378223",contentMarkdown:yT},{slug:"ithome-2025-day-23",title:"Day 23 - Patch Management 是一項既必要又棘手的任務。",date:"2025-09-09",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"它就像是給汽車換機油：如果不做，引擎遲早會出大問題，系統可能因為安全漏洞而「爆炸」；但如果做得太急躁、貿然全域部署，又可能毀掉整個環境，導致服務中斷或相容性問題...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378517",contentMarkdown:vT},{slug:"ithome-2025-day-24",title:"Day 24 - 風險評鑑：年度BOSS戰開打",date:"2025-09-10",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"風險評鑑這位每日必戰的 BOSS每年稽核必看..也是ISO/IEC 27001 的要求 當然他也是有好處，能幫組織及時發現潛在危機，並想出好方法應對。簡單來...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378757",contentMarkdown:xT},{slug:"ithome-2025-day-25",title:"Day 25 - 一封垃圾郵件，可能就是資安危機的開端？",date:"2025-09-11",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"垃圾郵件：資安戰場的第一道城門 剛進公司時，我最怕的不是伺服器當機，而是員工慌張打電話： 「我好像點錯了一封信…」 一封垃圾郵件，可能讓公司資料被鎖、帳號被盜...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378959",contentMarkdown:ST},{slug:"ithome-2025-day-26",title:"Day 26 - 從T65K2到T1566：MITRE ATT&CK入門指南",date:"2025-09-12",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"還記得我最早接觸資安的時候嗎？那時常常看到一堆神秘的代號：T1566、T1059、T1003……完全摸不著頭緒，心想這些數字到底在搞什麼鬼？我只聽過T65K2（...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379225",contentMarkdown:CT},{slug:"ithome-2025-day-27",title:"Day 27 - 為什麼藍隊要學MITRE ATT&CK？",date:"2025-09-13",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"接續昨天的內容 對藍隊（防禦方）來說，MITRE ATT&amp;CK 不是什麼「加分題」的選修，而是必修的攻防劇本。它不像教科書那樣生硬，而是像一部懸疑大...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379244",contentMarkdown:wT},{slug:"ithome-2025-day-28",title:"Day 28 - 沒有監控，你什麼都不知道",date:"2025-09-14",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"又是假日了，來個比較輕鬆的主題 剛入職的時候，公司還沒分得這麼細，IT 的監控、資安的巡檢，全都一把抓。每天一到公司，除了要看 AD、DNS、核心系統有沒有...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378945",contentMarkdown:ET},{slug:"ithome-2025-day-29",title:"Day 29 - 轉職資安人必備技能",date:"2025-09-15",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"「如果想轉職資安，要從哪裡開始？」 說真的，資安的範圍大到你會覺得無從下手。一堆名詞：Nmap、SIEM、EDR、SOC、APT…到底要先學哪一個？ 其實最簡單...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379737",contentMarkdown:kT},{slug:"ithome-2025-day-30",title:"Day 30 - 尾聲：資安人的三十天",date:"2025-09-16",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"回顧 不知不覺，這個系列也走到尾聲了。第一次參加鐵人賽，真的正如它的名字一樣──很難。尤其我還一次報了兩個系列，結果 DevSecOps 系列在中途就沒能繼續更...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379242",contentMarkdown:PT},{slug:"cehp-review",title:"CEHP 心得",date:"2026-03-20",category:"證照心得",categorySlug:"certification-review",readTime:"12 min read",excerpt:"CEH Practical 考後心得，整理考試規則、環境、解題節奏與實作準備方式。",coverImage:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",contentMarkdown:mr(qP)},{slug:"ceh-v13-review",title:"CEH V13 證照心得與準備方式分享",date:"2025-07-20",category:"證照心得",categorySlug:"certification-review",readTime:"10 min read",excerpt:"CEH V13 考試心得與準備流程，包含考前提醒、考試經驗與複習方向。",coverImage:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",contentMarkdown:mr(GP)},{slug:"ceh-v13-notes",title:"CEH v13 筆記（持續更新中）",date:"2025-07-01",category:"證照筆記",categorySlug:"certification-notes",readTime:"20 min read",excerpt:"CEH v13 重點筆記，整理常見觀念、攻防主題與考試複習內容。",coverImage:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",contentMarkdown:mr($P)},{slug:"picoctf-notes",title:"picoCTF 筆記",date:"2025-06-20",category:"CTF 筆記",categorySlug:"ctf-notes",readTime:"18 min read",excerpt:"picoCTF 解題筆記，包含 Web Exploitation 等題型的觀察與解題流程。",coverImage:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",contentMarkdown:mr(QP)},{slug:"forensics-class-0324",title:"Forensics 社課 3/24",date:"2025-03-24",category:"Forensics",categorySlug:"forensics",readTime:"8 min read",excerpt:"Forensics 社課教材與筆記，整理鑑識題型與實作觀察。",coverImage:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",contentMarkdown:mr(KP)},{slug:"2025-self-review-hsinchu-37k",title:"2025 年回顧：在新竹 37K 的日子裡，我為自己打了一場仗",date:"2025-12-31",category:"回顧自我",categorySlug:"self-review",readTime:"7 min read",excerpt:"從剛退伍踏進新竹，到一個人扛起公司資安與 IT 日常，這一年不寬裕、不輕鬆，卻也讓我真正長出韌性、技術與責任感。",coverImage:"/S__67723282.jpg",contentMarkdown:mr(nA)},{slug:"zeabur-postgresql-blog-foundation",title:"Zeabur PostgreSQL Blog Foundation",date:"2026-04-10",category:"Database Lab",categorySlug:"database-lab",readTime:"5 min read",excerpt:"把部落格內容獨立成一個資料庫 schema，讓文章、分類、標籤、留言與發佈狀態可以和作品集靜態資料分開管理。",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",contentMarkdown:`## 目標

這個分頁用來承接長文、學習筆記、證照心得與資料庫紀錄，不再混在原本的文章連結清單裡。

內容結構參考傳統部落格文章頁：

- 文章標題與發佈日期
- 分類、閱讀時間與摘要
- Markdown 主文
- 近期文章與分類側邊欄
- 文章底部留言區

## 資料切分方式

前端先用獨立的 \`blogPosts\` data module 呈現，後續要接 API 時可以直接對應 PostgreSQL 的 \`blog\` schema。

資料庫端建議使用獨立 schema，表格包含：

| table | purpose |
| --- | --- |
| \`blog.categories\` | 文章分類 |
| \`blog.posts\` | Markdown 文章本文 |
| \`blog.tags\` | 標籤 |
| \`blog.post_tags\` | 文章與標籤關聯 |
| \`blog.comments\` | 留言 |

## 後台寫作流程

後台文章內容使用 Markdown 儲存在 \`content_markdown\` 欄位。前端文章頁只負責渲染 Markdown，不直接連 PostgreSQL。

\`\`\`markdown
## 範例標題

- 支援清單
- 支援表格
- 支援程式碼區塊
\`\`\`

## 安全注意

PostgreSQL 密碼不應該放進 React 前端或 Git repository，部署時只放在 Zeabur 的環境變數。

如果資料庫連線資訊曾經貼到對話或文件，正式上線前建議旋轉密碼，並確認應用程式只使用最小權限帳號。`},{slug:"security-writing-index",title:"Security Writing Index",date:"2026-04-08",category:"Security Notes",categorySlug:"security-notes",readTime:"3 min read",excerpt:"把資安筆記整理成可搜尋、可分類、可延伸的內容索引，降低日後重複整理成本。",coverImage:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",contentMarkdown:`## 索引策略

以主題分類文章，例如證照心得、CTF 解題、工具使用、弱點管理與自動化流程。

每篇文章保留摘要、標籤與發佈狀態，方便後續做列表、搜尋與精選文章區塊。

## 建議分類

- 證照心得
- CTF 筆記
- 弱點管理
- 工具使用
- 自動化流程`},{slug:"portfolio-content-architecture",title:"Portfolio Content Architecture",date:"2026-04-01",category:"Build Log",categorySlug:"build-log",readTime:"4 min read",excerpt:"記錄作品集從靜態資料走向可維護內容系統的規劃方式。",coverImage:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",contentMarkdown:`## 內容邊界

首頁維持資安履歷定位，專案與證照維持原本展示用途，部落格則獨立承接長文。

資料來源拆開之後，未來可以逐步把 \`blogPosts\` 換成 API response，而不用重寫整個 UI。

## 下一步

- 建立後端 API
- 將 Markdown 寫入 PostgreSQL
- 將留言送進 \`blog.comments\`
- 文章改由本地檔案或資料庫維護，不開放線上寫文章後台`}],zi=tA.filter(e=>!["database-lab","security-notes","build-log"].includes(e.categorySlug)),rA={"zeabur-postgresql-blog-foundation":[{id:1,author:"Eric",date:"2026-04-10",body:"這裡先保留留言樣式，接 API 後可以直接改成從 blog.comments 讀取。"}]};async function iA(){const e=await fetch("/api/blog/posts");if(!e.ok)throw new Error("Blog API unavailable");return(await e.json()).posts}async function oA(e){const n=await fetch(`/api/blog/posts/${e}`);if(!n.ok)throw new Error("Blog post unavailable");return(await n.json()).post}async function sA(e){const n=await fetch(`/api/blog/posts/${e}/comments`);if(!n.ok)throw new Error("Comments API unavailable");return(await n.json()).comments}async function aA(e,n){const t=await fetch(`/api/blog/posts/${e}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!t.ok)throw new Error("Unable to submit comment");return(await t.json()).comment}const Ep=new Set(["database-lab","security-notes","build-log"]);function lA(e){var n,t;if(e.categorySlug==="ithome-2025-ironman"||e.categorySlug==="ithome-2026-ironman"){const r=Number(((n=e.slug.match(/day-(\d+)/))==null?void 0:n[1])??0);return r<=10?"day-01-10":r<=20?"day-11-20":"day-21-30"}return((t=e.date)==null?void 0:t.slice(0,4))??"misc"}function uA(e){const n=e.filter(r=>!Ep.has(r.categorySlug));return[...y1.filter(r=>!Ep.has(r.slug)).map(r=>{const i=n.filter(s=>s.categorySlug===r.slug).sort((s,a)=>a.date.localeCompare(s.date));if(!i.length)return null;const o=i.reduce((s,a)=>{const l=lA(a);return s[l]=s[l]??[],s[l].push(a),s},{});return{...r,count:i.length,directories:Object.entries(o).map(([s,a])=>({name:s,items:a})).sort((s,a)=>s.name.localeCompare(a.name))}}).filter(Boolean),{slug:"external-links",name:"外部文章連結",count:wp.length,directories:[{name:"hackmd-and-ithome",items:wp.map(r=>({...r,slug:r.href,date:r.platform,readTime:r.category,external:!0}))}]}]}function cA(e,n){return n?[e.title,e.category,e.categorySlug,e.excerpt,e.description,e.platform,e.href].filter(Boolean).some(t=>String(t).toLowerCase().includes(n)):!0}function fA(e,n){return n?e.map(t=>{const r=t.directories.map(i=>({...i,items:i.items.filter(o=>cA(o,n))})).filter(i=>i.items.length>0);return r.length?{...t,count:r.reduce((i,o)=>i+o.items.length,0),directories:r}:null}).filter(Boolean):e}function hA(e,n){const t=new Map(e.map(r=>[r.slug,r]));for(const r of n)t.set(r.slug,r);return Array.from(t.values())}function dA(){const[e,n]=A.useState(zi),[t,r]=A.useState(""),[i,o]=A.useState({}),[s,a]=A.useState({});A.useEffect(()=>{iA().then(x=>{x.length&&n(hA(zi,x))}).catch(()=>{})},[]);const l=A.useMemo(()=>uA(e),[e]),u=t.trim().toLowerCase(),f=A.useMemo(()=>fA(l,u),[u,l]),c=l.reduce((x,C)=>x+C.count,0),h=f.reduce((x,C)=>x+C.count,0);function d(x){o(C=>({...C,[x]:!C[x]}))}function p(x){a(C=>({...C,[x]:!C[x]}))}return m.jsxs("section",{className:"space-y-10",children:[m.jsx(sr,{subtitle:"Blog",title:"資安筆記"}),m.jsxs("section",{className:"terminal-tree rounded-2xl border border-[#4ade8024] bg-[#02070df5] shadow-[0_18px_70px_rgba(0,0,0,0.5)]",children:[m.jsx("div",{className:"flex items-center justify-between gap-4 border-b border-[#4ade8024] px-5 py-4",children:m.jsx("div",{className:"mono text-xs text-zinc-500",children:"eric@portfolio:~/blog"})}),m.jsxs("div",{className:"space-y-5 p-5 sm:p-7",children:[m.jsxs("div",{className:"mono flex flex-wrap items-center gap-2 text-sm text-[#bbf7d0]",children:[m.jsx(Qy,{className:"h-4 w-4 text-[#4ade80]"}),m.jsx("span",{className:"text-[#4ade80]",children:"$"}),m.jsx("span",{children:u?`grep -ri "${t}" ~/blog`:"tree ~/blog --interactive"})]}),m.jsxs("label",{className:"mono block rounded-xl border border-[#4ade8024] bg-black/30 px-4 py-3 text-sm text-zinc-400 focus-within:border-[#4ade80] focus-within:bg-[#4ade8008]",children:[m.jsx("span",{className:"mr-2 text-[#4ade80]",children:"$"}),m.jsx("span",{className:"mr-2 text-zinc-500",children:"grep"}),m.jsx("input",{type:"search",value:t,onChange:x=>r(x.target.value),className:"w-[min(100%,28rem)] bg-transparent text-[#eaffec] outline-none placeholder:text-zinc-600",placeholder:"search notes, tags, keywords..."})]}),m.jsxs("div",{className:"rounded-xl border border-white/10 bg-black/30 p-4 sm:p-5",children:[m.jsxs("div",{className:"mono mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400",children:[m.jsx("span",{children:"~/blog"}),m.jsx("span",{children:u?`${h} matches / ${c} articles`:`${l.length} directories, ${c} articles`})]}),m.jsxs("div",{className:"space-y-2",children:[f.length===0&&m.jsx("div",{className:"mono rounded-lg border border-[#ffbd2e33] bg-[#ffbd2e08] px-4 py-3 text-sm text-[#ffdf8a]",children:"no matches found. try another keyword."}),f.map((x,C)=>{const g=u||!!i[x.slug],y=C===f.length-1;return m.jsxs("div",{className:"mono text-sm",children:[m.jsxs("button",{type:"button",onClick:()=>d(x.slug),className:"group flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-zinc-100 transition hover:bg-[#4ade8008] hover:text-white",children:[m.jsx("span",{className:"w-5 text-zinc-500",children:y?"└──":"├──"}),m.jsx(md,{className:`h-4 w-4 text-[#4ade80] transition ${g?"rotate-90":""}`}),g?m.jsx(Lu,{className:"h-4 w-4 text-[#7dd3fc]"}):m.jsx(gd,{className:"h-4 w-4 text-[#7dd3fc]"}),m.jsx("span",{className:"font-semibold",children:x.name}),m.jsx("span",{className:"ml-auto rounded-full border border-white/10 px-2 py-0.5 text-[0.68rem] text-zinc-500",children:x.count})]}),g&&m.jsx("div",{className:"ml-6 space-y-1 border-l border-[#4ade801f] pl-4",children:x.directories.map((v,w)=>{const T=`${x.slug}/${v.name}`,k=u||!!s[T],D=w===x.directories.length-1;return m.jsxs("div",{children:[m.jsxs("button",{type:"button",onClick:()=>p(T),className:"group flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-zinc-200 transition hover:bg-[#67e8f90a] hover:text-white",children:[m.jsx("span",{className:"w-5 text-zinc-600",children:D?"└──":"├──"}),m.jsx(md,{className:`h-4 w-4 text-[#7dd3fc] transition ${k?"rotate-90":""}`}),k?m.jsx(Lu,{className:"h-4 w-4 text-[#4ade80]"}):m.jsx(gd,{className:"h-4 w-4 text-[#4ade80]"}),m.jsx("span",{children:v.name}),m.jsxs("span",{className:"ml-auto text-[0.68rem] text-zinc-600",children:[v.items.length," files"]})]}),k&&m.jsx("div",{className:"ml-6 space-y-1 border-l border-[#67e8f91f] pl-4",children:v.items.map((b,L)=>{const P=L===v.items.length-1;return b.external?m.jsxs("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",className:"group flex items-start gap-2 rounded-lg px-2 py-2 text-zinc-300 transition hover:bg-[#4ade8008] hover:text-white",children:[m.jsx("span",{className:"mt-0.5 w-5 text-zinc-700",children:P?"└──":"├──"}),m.jsx(Xr,{className:"mt-0.5 h-4 w-4 shrink-0 text-[#7dd3fc]"}),m.jsxs("span",{className:"min-w-0 flex-1",children:[m.jsxs("span",{className:"block truncate",children:[b.title,".url"]}),m.jsxs("span",{className:"mt-1 block whitespace-normal text-xs leading-5 text-zinc-500 group-hover:text-zinc-400",children:[b.date," / ",b.readTime]})]})]},b.slug):m.jsxs(Qr,{to:`/blog/${b.slug}`,className:"group flex items-start gap-2 rounded-lg px-2 py-2 text-zinc-300 transition hover:bg-[#4ade8008] hover:text-white",children:[m.jsx("span",{className:"mt-0.5 w-5 text-zinc-700",children:P?"└──":"├──"}),m.jsx(rf,{className:"mt-0.5 h-4 w-4 shrink-0 text-[#4ade80]"}),m.jsxs("span",{className:"min-w-0 flex-1",children:[m.jsxs("span",{className:"block truncate",children:[b.title,".md"]}),m.jsxs("span",{className:"mt-1 block whitespace-normal text-xs leading-5 text-zinc-500 group-hover:text-zinc-400",children:[b.date," / ",b.readTime]})]})]},b.slug)})})]},T)})})]},x.slug)})]})]}),m.jsx("p",{className:"mono text-xs leading-6 text-zinc-500",children:"hint: click a directory to expand it, or use grep to search across notes and external links."})]})]})]})}function pA({postSlug:e}){const n=A.useMemo(()=>rA[e]??[],[e]),[t,r]=A.useState(n),[i,o]=A.useState({author:"",email:"",body:""}),[s,a]=A.useState("");A.useEffect(()=>{r(n),sA(e).then(r).catch(()=>{})},[n,e]);async function l(u){u.preventDefault();const f=i.body.trim();if(f)try{const c=await aA(e,{...i,body:f});r(h=>[c,...h]),a("留言已直接發布。")}catch{const h={id:Date.now(),author:i.author.trim()||"匿名訪客",date:new Date().toISOString().slice(0,10),body:f};r(d=>[h,...d]),a("目前 API 無法連線，留言先在本機預覽。")}finally{o({author:"",email:"",body:""})}}return m.jsx("section",{className:"glass-card",children:m.jsxs("div",{className:"glass-card__inner",children:[m.jsxs("div",{className:"flex items-center gap-2 text-[#7dd3fc]",children:[m.jsx(Ky,{className:"h-4 w-4"}),m.jsx("span",{className:"mono text-[0.72rem] uppercase tracking-[0.22em]",children:"comments"})]}),m.jsx("h2",{className:"text-2xl font-semibold text-white",children:"發佈留言"}),m.jsx("p",{className:"text-sm leading-7 text-zinc-400",children:"送出後會直接發布到這篇文章底下，不需要再另外審核。"}),m.jsxs("form",{onSubmit:l,className:"grid gap-4",children:[m.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[m.jsxs("label",{className:"grid gap-2 text-sm text-zinc-300",children:["顯示名稱",m.jsx("input",{value:i.author,onChange:u=>o(f=>({...f,author:u.target.value})),maxLength:80,className:"rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#4ade80]",placeholder:"Enter your name"})]}),m.jsxs("label",{className:"grid gap-2 text-sm text-zinc-300",children:["Email",m.jsx("input",{type:"email",value:i.email,onChange:u=>o(f=>({...f,email:u.target.value})),maxLength:254,className:"rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#4ade80]",placeholder:"name@example.com"})]})]}),m.jsxs("label",{className:"grid gap-2 text-sm text-zinc-300",children:["Comment",m.jsx("textarea",{value:i.body,onChange:u=>o(f=>({...f,body:u.target.value})),maxLength:2e3,className:"min-h-32 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#4ade80]",placeholder:"留下你的想法"})]}),m.jsxs("button",{type:"submit",className:"terminal-button terminal-button--primary w-fit",children:["submit comment",m.jsx(yw,{className:"h-4 w-4"})]}),s&&m.jsx("p",{className:"text-sm text-[#bbf7d0]",children:s})]}),m.jsx("div",{className:"space-y-3",children:t.map(u=>m.jsxs("article",{className:"rounded-lg border border-white/10 bg-white/[0.03] p-4",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[m.jsx("h3",{className:"font-semibold text-white",children:u.author}),m.jsx("time",{className:"mono text-xs text-zinc-500",children:u.date})]}),m.jsx("p",{className:"mt-3 text-sm leading-7 text-zinc-300",children:u.body})]},u.id))})]})})}function mA(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const gA=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,yA=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,vA={};function kp(e,n){return(vA.jsx?yA:gA).test(e)}const xA=/[ \t\n\f\r]/g;function SA(e){return typeof e=="object"?e.type==="text"?Pp(e.value):!1:Pp(e)}function Pp(e){return e.replace(xA,"")===""}class Eo{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}Eo.prototype.normal={};Eo.prototype.property={};Eo.prototype.space=void 0;function v1(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new Eo(t,r,n)}function Qu(e){return e.toLowerCase()}class en{constructor(n,t){this.attribute=t,this.property=n}}en.prototype.attribute="";en.prototype.booleanish=!1;en.prototype.boolean=!1;en.prototype.commaOrSpaceSeparated=!1;en.prototype.commaSeparated=!1;en.prototype.defined=!1;en.prototype.mustUseProperty=!1;en.prototype.number=!1;en.prototype.overloadedBoolean=!1;en.prototype.property="";en.prototype.spaceSeparated=!1;en.prototype.space=void 0;let CA=0;const q=hr(),Ee=hr(),Xu=hr(),V=hr(),se=hr(),_r=hr(),rn=hr();function hr(){return 2**++CA}const Yu=Object.freeze(Object.defineProperty({__proto__:null,boolean:q,booleanish:Ee,commaOrSpaceSeparated:rn,commaSeparated:_r,number:V,overloadedBoolean:Xu,spaceSeparated:se},Symbol.toStringTag,{value:"Module"})),Cl=Object.keys(Yu);class bf extends en{constructor(n,t,r,i){let o=-1;if(super(n,t),Tp(this,"space",i),typeof r=="number")for(;++o<Cl.length;){const s=Cl[o];Tp(this,Cl[o],(r&Yu[s])===Yu[s])}}}bf.prototype.defined=!0;function Tp(e,n,t){t&&(e[n]=t)}function oi(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const o=new bf(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),n[r]=o,t[Qu(r)]=r,t[Qu(o.attribute)]=r}return new Eo(n,t,e.space)}const x1=oi({properties:{ariaActiveDescendant:null,ariaAtomic:Ee,ariaAutoComplete:null,ariaBusy:Ee,ariaChecked:Ee,ariaColCount:V,ariaColIndex:V,ariaColSpan:V,ariaControls:se,ariaCurrent:null,ariaDescribedBy:se,ariaDetails:null,ariaDisabled:Ee,ariaDropEffect:se,ariaErrorMessage:null,ariaExpanded:Ee,ariaFlowTo:se,ariaGrabbed:Ee,ariaHasPopup:null,ariaHidden:Ee,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:se,ariaLevel:V,ariaLive:null,ariaModal:Ee,ariaMultiLine:Ee,ariaMultiSelectable:Ee,ariaOrientation:null,ariaOwns:se,ariaPlaceholder:null,ariaPosInSet:V,ariaPressed:Ee,ariaReadOnly:Ee,ariaRelevant:null,ariaRequired:Ee,ariaRoleDescription:se,ariaRowCount:V,ariaRowIndex:V,ariaRowSpan:V,ariaSelected:Ee,ariaSetSize:V,ariaSort:null,ariaValueMax:V,ariaValueMin:V,ariaValueNow:V,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function S1(e,n){return n in e?e[n]:n}function C1(e,n){return S1(e,n.toLowerCase())}const wA=oi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:_r,acceptCharset:se,accessKey:se,action:null,allow:null,allowFullScreen:q,allowPaymentRequest:q,allowUserMedia:q,alt:null,as:null,async:q,autoCapitalize:null,autoComplete:se,autoFocus:q,autoPlay:q,blocking:se,capture:null,charSet:null,checked:q,cite:null,className:se,cols:V,colSpan:null,content:null,contentEditable:Ee,controls:q,controlsList:se,coords:V|_r,crossOrigin:null,data:null,dateTime:null,decoding:null,default:q,defer:q,dir:null,dirName:null,disabled:q,download:Xu,draggable:Ee,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:q,formTarget:null,headers:se,height:V,hidden:Xu,high:V,href:null,hrefLang:null,htmlFor:se,httpEquiv:se,id:null,imageSizes:null,imageSrcSet:null,inert:q,inputMode:null,integrity:null,is:null,isMap:q,itemId:null,itemProp:se,itemRef:se,itemScope:q,itemType:se,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:q,low:V,manifest:null,max:null,maxLength:V,media:null,method:null,min:null,minLength:V,multiple:q,muted:q,name:null,nonce:null,noModule:q,noValidate:q,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:q,optimum:V,pattern:null,ping:se,placeholder:null,playsInline:q,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:q,referrerPolicy:null,rel:se,required:q,reversed:q,rows:V,rowSpan:V,sandbox:se,scope:null,scoped:q,seamless:q,selected:q,shadowRootClonable:q,shadowRootDelegatesFocus:q,shadowRootMode:null,shape:null,size:V,sizes:null,slot:null,span:V,spellCheck:Ee,src:null,srcDoc:null,srcLang:null,srcSet:null,start:V,step:null,style:null,tabIndex:V,target:null,title:null,translate:null,type:null,typeMustMatch:q,useMap:null,value:Ee,width:V,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:se,axis:null,background:null,bgColor:null,border:V,borderColor:null,bottomMargin:V,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:q,declare:q,event:null,face:null,frame:null,frameBorder:null,hSpace:V,leftMargin:V,link:null,longDesc:null,lowSrc:null,marginHeight:V,marginWidth:V,noResize:q,noHref:q,noShade:q,noWrap:q,object:null,profile:null,prompt:null,rev:null,rightMargin:V,rules:null,scheme:null,scrolling:Ee,standby:null,summary:null,text:null,topMargin:V,valueType:null,version:null,vAlign:null,vLink:null,vSpace:V,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:q,disableRemotePlayback:q,prefix:null,property:null,results:V,security:null,unselectable:null},space:"html",transform:C1}),EA=oi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:rn,accentHeight:V,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:V,amplitude:V,arabicForm:null,ascent:V,attributeName:null,attributeType:null,azimuth:V,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:V,by:null,calcMode:null,capHeight:V,className:se,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:V,diffuseConstant:V,direction:null,display:null,dur:null,divisor:V,dominantBaseline:null,download:q,dx:null,dy:null,edgeMode:null,editable:null,elevation:V,enableBackground:null,end:null,event:null,exponent:V,externalResourcesRequired:null,fill:null,fillOpacity:V,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:_r,g2:_r,glyphName:_r,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:V,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:V,horizOriginX:V,horizOriginY:V,id:null,ideographic:V,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:V,k:V,k1:V,k2:V,k3:V,k4:V,kernelMatrix:rn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:V,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:V,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:V,overlineThickness:V,paintOrder:null,panose1:null,path:null,pathLength:V,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:se,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:V,pointsAtY:V,pointsAtZ:V,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:rn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:rn,rev:rn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:rn,requiredFeatures:rn,requiredFonts:rn,requiredFormats:rn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:V,specularExponent:V,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:V,strikethroughThickness:V,string:null,stroke:null,strokeDashArray:rn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:V,strokeOpacity:V,strokeWidth:null,style:null,surfaceScale:V,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:rn,tabIndex:V,tableValues:null,target:null,targetX:V,targetY:V,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:rn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:V,underlineThickness:V,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:V,values:null,vAlphabetic:V,vMathematical:V,vectorEffect:null,vHanging:V,vIdeographic:V,version:null,vertAdvY:V,vertOriginX:V,vertOriginY:V,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:V,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:S1}),w1=oi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),E1=oi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:C1}),k1=oi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),kA={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},PA=/[A-Z]/g,Ap=/-[a-z]/g,TA=/^data[-\w.:]+$/i;function AA(e,n){const t=Qu(n);let r=n,i=en;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&TA.test(n)){if(n.charAt(4)==="-"){const o=n.slice(5).replace(Ap,DA);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=n.slice(4);if(!Ap.test(o)){let s=o.replace(PA,bA);s.charAt(0)!=="-"&&(s="-"+s),n="data"+s}}i=bf}return new i(r,n)}function bA(e){return"-"+e.toLowerCase()}function DA(e){return e.charAt(1).toUpperCase()}const IA=v1([x1,wA,w1,E1,k1],"html"),Df=v1([x1,EA,w1,E1,k1],"svg");function RA(e){return e.join(" ").trim()}var If={},bp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,VA=/\n/g,NA=/^\s*/,MA=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,LA=/^:\s*/,jA=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,FA=/^[;\s]*/,OA=/^\s+|\s+$/g,zA=`
`,Dp="/",Ip="*",qt="",_A="comment",BA="declaration";function WA(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function i(p){var x=p.match(VA);x&&(t+=x.length);var C=p.lastIndexOf(zA);r=~C?p.length-C:r+p.length}function o(){var p={line:t,column:r};return function(x){return x.position=new s(p),u(),x}}function s(p){this.start=p,this.end={line:t,column:r},this.source=n.source}s.prototype.content=e;function a(p){var x=new Error(n.source+":"+t+":"+r+": "+p);if(x.reason=p,x.filename=n.source,x.line=t,x.column=r,x.source=e,!n.silent)throw x}function l(p){var x=p.exec(e);if(x){var C=x[0];return i(C),e=e.slice(C.length),x}}function u(){l(NA)}function f(p){var x;for(p=p||[];x=c();)x!==!1&&p.push(x);return p}function c(){var p=o();if(!(Dp!=e.charAt(0)||Ip!=e.charAt(1))){for(var x=2;qt!=e.charAt(x)&&(Ip!=e.charAt(x)||Dp!=e.charAt(x+1));)++x;if(x+=2,qt===e.charAt(x-1))return a("End of comment missing");var C=e.slice(2,x-2);return r+=2,i(C),e=e.slice(x),r+=2,p({type:_A,comment:C})}}function h(){var p=o(),x=l(MA);if(x){if(c(),!l(LA))return a("property missing ':'");var C=l(jA),g=p({type:BA,property:Rp(x[0].replace(bp,qt)),value:C?Rp(C[0].replace(bp,qt)):qt});return l(FA),g}}function d(){var p=[];f(p);for(var x;x=h();)x!==!1&&(p.push(x),f(p));return p}return u(),d()}function Rp(e){return e?e.replace(OA,qt):qt}var UA=WA,HA=ms&&ms.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(If,"__esModule",{value:!0});If.default=GA;const $A=HA(UA);function GA(e,n){let t=null;if(!e||typeof e!="string")return t;const r=(0,$A.default)(e),i=typeof n=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:s,value:a}=o;i?n(s,a,o):a&&(t=t||{},t[s]=a)}),t}var ba={};Object.defineProperty(ba,"__esModule",{value:!0});ba.camelCase=void 0;var qA=/^--[a-zA-Z0-9_-]+$/,KA=/-([a-z])/g,QA=/^[^-]+$/,XA=/^-(webkit|moz|ms|o|khtml)-/,YA=/^-(ms)-/,ZA=function(e){return!e||QA.test(e)||qA.test(e)},JA=function(e,n){return n.toUpperCase()},Vp=function(e,n){return"".concat(n,"-")},eb=function(e,n){return n===void 0&&(n={}),ZA(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(YA,Vp):e=e.replace(XA,Vp),e.replace(KA,JA))};ba.camelCase=eb;var nb=ms&&ms.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},tb=nb(If),rb=ba;function Zu(e,n){var t={};return!e||typeof e!="string"||(0,tb.default)(e,function(r,i){r&&i&&(t[(0,rb.camelCase)(r,n)]=i)}),t}Zu.default=Zu;var ib=Zu;const ob=ea(ib),P1=T1("end"),Rf=T1("start");function T1(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function sb(e){const n=Rf(e),t=P1(e);if(n&&t)return{start:n,end:t}}function _i(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Np(e.position):"start"in e||"end"in e?Np(e):"line"in e||"column"in e?Ju(e):""}function Ju(e){return Mp(e&&e.line)+":"+Mp(e&&e.column)}function Np(e){return Ju(e&&e.start)+"-"+Ju(e&&e.end)}function Mp(e){return e&&typeof e=="number"?e:1}class Oe extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",o={},s=!1;if(t&&("line"in t&&"column"in t?o={place:t}:"start"in t&&"end"in t?o={place:t}:"type"in t?o={ancestors:[t],place:t.position}:o={...t}),typeof n=="string"?i=n:!o.cause&&n&&(s=!0,i=n.message,o.cause=n),!o.ruleId&&!o.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?o.ruleId=r:(o.source=r.slice(0,l),o.ruleId=r.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=_i(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Oe.prototype.file="";Oe.prototype.name="";Oe.prototype.reason="";Oe.prototype.message="";Oe.prototype.stack="";Oe.prototype.column=void 0;Oe.prototype.line=void 0;Oe.prototype.ancestors=void 0;Oe.prototype.cause=void 0;Oe.prototype.fatal=void 0;Oe.prototype.place=void 0;Oe.prototype.ruleId=void 0;Oe.prototype.source=void 0;const Vf={}.hasOwnProperty,ab=new Map,lb=/[A-Z]/g,ub=new Set(["table","tbody","thead","tfoot","tr"]),cb=new Set(["td","th"]),A1="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function fb(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=xb(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=vb(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Df:IA,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},o=b1(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function b1(e,n,t){if(n.type==="element")return hb(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return db(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return mb(e,n,t);if(n.type==="mdxjsEsm")return pb(e,n);if(n.type==="root")return gb(e,n,t);if(n.type==="text")return yb(e,n)}function hb(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Df,e.schema=i),e.ancestors.push(n);const o=I1(e,n.tagName,!1),s=Sb(e,n);let a=Mf(e,n);return ub.has(n.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!SA(l):!0})),D1(e,s,o,n),Nf(s,a),e.ancestors.pop(),e.schema=r,e.create(n,o,s,t)}function db(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}fo(e,n.position)}function pb(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);fo(e,n.position)}function mb(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=Df,e.schema=i),e.ancestors.push(n);const o=n.name===null?e.Fragment:I1(e,n.name,!0),s=Cb(e,n),a=Mf(e,n);return D1(e,s,o,n),Nf(s,a),e.ancestors.pop(),e.schema=r,e.create(n,o,s,t)}function gb(e,n,t){const r={};return Nf(r,Mf(e,n)),e.create(n,e.Fragment,r,t)}function yb(e,n){return n.value}function D1(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function Nf(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function vb(e,n,t){return r;function r(i,o,s,a){const u=Array.isArray(s.children)?t:n;return a?u(o,s,a):u(o,s)}}function xb(e,n){return t;function t(r,i,o,s){const a=Array.isArray(o.children),l=Rf(r);return n(i,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function Sb(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&Vf.call(n.properties,i)){const o=wb(e,i,n.properties[i]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&cb.has(n.tagName)?r=a:t[s]=a}}if(r){const o=t.style||(t.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function Cb(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(t,e.evaluater.evaluateExpression(a.argument))}else fo(e,n.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else fo(e,n.position);else o=r.value===null?!0:r.value;t[i]=o}return t}function Mf(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:ab;for(;++r<n.children.length;){const o=n.children[r];let s;if(e.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const u=i.get(l)||0;s=l+"-"+u,i.set(l,u+1)}}const a=b1(e,o,s);a!==void 0&&t.push(a)}return t}function wb(e,n,t){const r=AA(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?mA(t):RA(t)),r.property==="style"){let i=typeof t=="object"?t:Eb(e,String(t));return e.stylePropertyNameCase==="css"&&(i=kb(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?kA[r.property]||r.property:r.attribute,t]}}function Eb(e,n){try{return ob(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new Oe("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=A1+"#cannot-parse-style-attribute",i}}function I1(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let o=-1,s;for(;++o<i.length;){const a=kp(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=s}else r=kp(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return Vf.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);fo(e)}function fo(e,n){const t=new Oe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=A1+"#cannot-handle-mdx-estrees-without-createevaluater",t}function kb(e){const n={};let t;for(t in e)Vf.call(e,t)&&(n[Pb(t)]=e[t]);return n}function Pb(e){let n=e.replace(lb,Tb);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function Tb(e){return"-"+e.toLowerCase()}const wl={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Ab={};function Lf(e,n){const t=Ab,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return R1(e,r,i)}function R1(e,n,t){if(bb(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Lp(e.children,n,t)}return Array.isArray(e)?Lp(e,n,t):""}function Lp(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=R1(e[i],n,t);return r.join("")}function bb(e){return!!(e&&typeof e=="object")}const jp=document.createElement("i");function jf(e){const n="&"+e+";";jp.innerHTML=n;const t=jp.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function ln(e,n,t,r){const i=e.length;let o=0,s;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)s=Array.from(r),s.unshift(n,t),e.splice(...s);else for(t&&e.splice(n,t);o<r.length;)s=r.slice(o,o+1e4),s.unshift(n,0),e.splice(...s),o+=1e4,n+=1e4}function vn(e,n){return e.length>0?(ln(e,e.length,0,n),e):n}const Fp={}.hasOwnProperty;function V1(e){const n={};let t=-1;for(;++t<e.length;)Db(n,e[t]);return n}function Db(e,n){let t;for(t in n){const i=(Fp.call(e,t)?e[t]:void 0)||(e[t]={}),o=n[t];let s;if(o)for(s in o){Fp.call(i,s)||(i[s]=[]);const a=o[s];Ib(i[s],Array.isArray(a)?a:a?[a]:[])}}}function Ib(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);ln(e,0,0,r)}function N1(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function Vn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const We=zt(/[A-Za-z]/),je=zt(/[\dA-Za-z]/),Rb=zt(/[#-'*+\--9=?A-Z^-~]/);function Xs(e){return e!==null&&(e<32||e===127)}const ec=zt(/\d/),Vb=zt(/[\dA-Fa-f]/),Nb=zt(/[!-/:-@[-`{-~]/);function B(e){return e!==null&&e<-2}function oe(e){return e!==null&&(e<0||e===32)}function Q(e){return e===-2||e===-1||e===32}const Da=zt(new RegExp("\\p{P}|\\p{S}","u")),ar=zt(/\s/);function zt(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function si(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const o=e.charCodeAt(t);let s="";if(o===37&&je(e.charCodeAt(t+1))&&je(e.charCodeAt(t+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(t+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),i=1):s="�"}else s=String.fromCharCode(o);s&&(n.push(e.slice(r,t),encodeURIComponent(s)),r=t+i+1,s=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function J(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return Q(l)?(e.enter(t),a(l)):n(l)}function a(l){return Q(l)&&o++<i?(e.consume(l),a):(e.exit(t),n(l))}}const Mb={tokenize:Lb};function Lb(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),J(e,n,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const l=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=l),t=l,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return B(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const jb={tokenize:Fb},Op={tokenize:Ob};function Fb(e){const n=this,t=[];let r=0,i,o,s;return a;function a(v){if(r<t.length){const w=t[r];return n.containerState=w[1],e.attempt(w[0].continuation,l,u)(v)}return u(v)}function l(v){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&y();const w=n.events.length;let T=w,k;for(;T--;)if(n.events[T][0]==="exit"&&n.events[T][1].type==="chunkFlow"){k=n.events[T][1].end;break}g(r);let D=w;for(;D<n.events.length;)n.events[D][1].end={...k},D++;return ln(n.events,T+1,0,n.events.slice(w)),n.events.length=D,u(v)}return a(v)}function u(v){if(r===t.length){if(!i)return h(v);if(i.currentConstruct&&i.currentConstruct.concrete)return p(v);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Op,f,c)(v)}function f(v){return i&&y(),g(r),h(v)}function c(v){return n.parser.lazy[n.now().line]=r!==t.length,s=n.now().offset,p(v)}function h(v){return n.containerState={},e.attempt(Op,d,p)(v)}function d(v){return r++,t.push([n.currentConstruct,n.containerState]),h(v)}function p(v){if(v===null){i&&y(),g(0),e.consume(v);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),x(v)}function x(v){if(v===null){C(e.exit("chunkFlow"),!0),g(0),e.consume(v);return}return B(v)?(e.consume(v),C(e.exit("chunkFlow")),r=0,n.interrupt=void 0,a):(e.consume(v),x)}function C(v,w){const T=n.sliceStream(v);if(w&&T.push(null),v.previous=o,o&&(o.next=v),o=v,i.defineSkip(v.start),i.write(T),n.parser.lazy[v.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<s&&(!i.events[k][1].end||i.events[k][1].end.offset>s))return;const D=n.events.length;let b=D,L,P;for(;b--;)if(n.events[b][0]==="exit"&&n.events[b][1].type==="chunkFlow"){if(L){P=n.events[b][1].end;break}L=!0}for(g(r),k=D;k<n.events.length;)n.events[k][1].end={...P},k++;ln(n.events,b+1,0,n.events.slice(D)),n.events.length=k}}function g(v){let w=t.length;for(;w-- >v;){const T=t[w];n.containerState=T[1],T[0].exit.call(n,e)}t.length=v}function y(){i.write([null]),o=void 0,i=void 0,n.containerState._closeFlow=void 0}}function Ob(e,n,t){return J(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Jr(e){if(e===null||oe(e)||ar(e))return 1;if(Da(e))return 2}function Ia(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(n=o(n,t),r.push(o))}return n}const nc={name:"attention",resolveAll:zb,tokenize:_b};function zb(e,n){let t=-1,r,i,o,s,a,l,u,f;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const c={...e[r][1].end},h={...e[t][1].start};zp(c,-l),zp(h,l),s={type:l>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:h},o={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[t][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=vn(u,[["enter",e[r][1],n],["exit",e[r][1],n]])),u=vn(u,[["enter",i,n],["enter",s,n],["exit",s,n],["enter",o,n]]),u=vn(u,Ia(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),u=vn(u,[["exit",o,n],["enter",a,n],["exit",a,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(f=2,u=vn(u,[["enter",e[t][1],n],["exit",e[t][1],n]])):f=0,ln(e,r-1,t-r+3,u),t=r+u.length-f-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function _b(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Jr(r);let o;return s;function s(l){return o=l,e.enter("attentionSequence"),a(l)}function a(l){if(l===o)return e.consume(l),a;const u=e.exit("attentionSequence"),f=Jr(l),c=!f||f===2&&i||t.includes(l),h=!i||i===2&&f||t.includes(r);return u._open=!!(o===42?c:c&&(i||!h)),u._close=!!(o===42?h:h&&(f||!c)),n(l)}}function zp(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const Bb={name:"autolink",tokenize:Wb};function Wb(e,n,t){let r=0;return i;function i(d){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(d){return We(d)?(e.consume(d),s):d===64?t(d):u(d)}function s(d){return d===43||d===45||d===46||je(d)?(r=1,a(d)):u(d)}function a(d){return d===58?(e.consume(d),r=0,l):(d===43||d===45||d===46||je(d))&&r++<32?(e.consume(d),a):(r=0,u(d))}function l(d){return d===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),n):d===null||d===32||d===60||Xs(d)?t(d):(e.consume(d),l)}function u(d){return d===64?(e.consume(d),f):Rb(d)?(e.consume(d),u):t(d)}function f(d){return je(d)?c(d):t(d)}function c(d){return d===46?(e.consume(d),r=0,f):d===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(d),e.exit("autolinkMarker"),e.exit("autolink"),n):h(d)}function h(d){if((d===45||je(d))&&r++<63){const p=d===45?h:c;return e.consume(d),p}return t(d)}}const ko={partial:!0,tokenize:Ub};function Ub(e,n,t){return r;function r(o){return Q(o)?J(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||B(o)?n(o):t(o)}}const M1={continuation:{tokenize:$b},exit:Gb,name:"blockQuote",tokenize:Hb};function Hb(e,n,t){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return t(s)}function o(s){return Q(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(s))}}function $b(e,n,t){const r=this;return i;function i(s){return Q(s)?J(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(M1,n,t)(s)}}function Gb(e){e.exit("blockQuote")}const L1={name:"characterEscape",tokenize:qb};function qb(e,n,t){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Nb(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(o)}}const j1={name:"characterReference",tokenize:Kb};function Kb(e,n,t){const r=this;let i=0,o,s;return a;function a(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),l}function l(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,s=je,f(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=Vb,f):(e.enter("characterReferenceValue"),o=7,s=ec,f(c))}function f(c){if(c===59&&i){const h=e.exit("characterReferenceValue");return s===je&&!jf(r.sliceSerialize(h))?t(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return s(c)&&i++<o?(e.consume(c),f):t(c)}}const _p={partial:!0,tokenize:Xb},Bp={concrete:!0,name:"codeFenced",tokenize:Qb};function Qb(e,n,t){const r=this,i={partial:!0,tokenize:T};let o=0,s=0,a;return l;function l(k){return u(k)}function u(k){const D=r.events[r.events.length-1];return o=D&&D[1].type==="linePrefix"?D[2].sliceSerialize(D[1],!0).length:0,a=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(k)}function f(k){return k===a?(s++,e.consume(k),f):s<3?t(k):(e.exit("codeFencedFenceSequence"),Q(k)?J(e,c,"whitespace")(k):c(k))}function c(k){return k===null||B(k)?(e.exit("codeFencedFence"),r.interrupt?n(k):e.check(_p,x,w)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||B(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(k)):Q(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),J(e,d,"whitespace")(k)):k===96&&k===a?t(k):(e.consume(k),h)}function d(k){return k===null||B(k)?c(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),p(k))}function p(k){return k===null||B(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(k)):k===96&&k===a?t(k):(e.consume(k),p)}function x(k){return e.attempt(i,w,C)(k)}function C(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),g}function g(k){return o>0&&Q(k)?J(e,y,"linePrefix",o+1)(k):y(k)}function y(k){return k===null||B(k)?e.check(_p,x,w)(k):(e.enter("codeFlowValue"),v(k))}function v(k){return k===null||B(k)?(e.exit("codeFlowValue"),y(k)):(e.consume(k),v)}function w(k){return e.exit("codeFenced"),n(k)}function T(k,D,b){let L=0;return P;function P(G){return k.enter("lineEnding"),k.consume(G),k.exit("lineEnding"),j}function j(G){return k.enter("codeFencedFence"),Q(G)?J(k,F,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(G):F(G)}function F(G){return G===a?(k.enter("codeFencedFenceSequence"),U(G)):b(G)}function U(G){return G===a?(L++,k.consume(G),U):L>=s?(k.exit("codeFencedFenceSequence"),Q(G)?J(k,$,"whitespace")(G):$(G)):b(G)}function $(G){return G===null||B(G)?(k.exit("codeFencedFence"),D(G)):b(G)}}}function Xb(e,n,t){const r=this;return i;function i(s){return s===null?t(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?t(s):n(s)}}const El={name:"codeIndented",tokenize:Zb},Yb={partial:!0,tokenize:Jb};function Zb(e,n,t){const r=this;return i;function i(u){return e.enter("codeIndented"),J(e,o,"linePrefix",5)(u)}function o(u){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?s(u):t(u)}function s(u){return u===null?l(u):B(u)?e.attempt(Yb,s,l)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||B(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),a)}function l(u){return e.exit("codeIndented"),n(u)}}function Jb(e,n,t){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?t(s):B(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):J(e,o,"linePrefix",5)(s)}function o(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?n(s):B(s)?i(s):t(s)}}const eD={name:"codeText",previous:tD,resolve:nD,tokenize:rD};function nD(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function tD(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function rD(e,n,t){let r=0,i,o;return s;function s(c){return e.enter("codeText"),e.enter("codeTextSequence"),a(c)}function a(c){return c===96?(e.consume(c),r++,a):(e.exit("codeTextSequence"),l(c))}function l(c){return c===null?t(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),l):c===96?(o=e.enter("codeTextSequence"),i=0,f(c)):B(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||B(c)?(e.exit("codeTextData"),l(c)):(e.consume(c),u)}function f(c){return c===96?(e.consume(c),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(c)):(o.type="codeTextData",u(c))}}class iD{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&xi(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),xi(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),xi(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);xi(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);xi(this.left,t.reverse())}}}function xi(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function F1(e){const n={};let t=-1,r,i,o,s,a,l,u;const f=new iD(e);for(;++t<f.length;){for(;t in n;)t=n[t];if(r=f.get(t),t&&r[1].type==="chunkFlow"&&f.get(t-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,oD(f,t)),t=n[t],u=!0);else if(r[1]._container){for(o=t,i=void 0;o--;)if(s=f.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},a=f.slice(i,t),a.unshift(r),f.splice(i,t-i+1,a))}}return ln(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!u}function oD(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const o=[];let s=t._tokenizer;s||(s=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,l=[],u={};let f,c,h=-1,d=t,p=0,x=0;const C=[x];for(;d;){for(;e.get(++i)[1]!==d;);o.push(i),d._tokenizer||(f=r.sliceStream(d),d.next||f.push(null),c&&s.defineSkip(d.start),d._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(f),d._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),c=d,d=d.next}for(d=t;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(x=h+1,C.push(x),d._tokenizer=void 0,d.previous=void 0,d=d.next);for(s.events=[],d?(d._tokenizer=void 0,d.previous=void 0):C.pop(),h=C.length;h--;){const g=a.slice(C[h],C[h+1]),y=o.pop();l.push([y,y+g.length-1]),e.splice(y,2,g)}for(l.reverse(),h=-1;++h<l.length;)u[p+l[h][0]]=p+l[h][1],p+=l[h][1]-l[h][0]-1;return u}const sD={resolve:lD,tokenize:uD},aD={partial:!0,tokenize:cD};function lD(e){return F1(e),e}function uD(e,n){let t;return r;function r(a){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):B(a)?e.check(aD,s,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),n(a)}function s(a){return e.consume(a),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function cD(e,n,t){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),J(e,o,"linePrefix")}function o(s){if(s===null||B(s))return t(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?n(s):e.interrupt(r.parser.constructs.flow,t,n)(s)}}function O1(e,n,t,r,i,o,s,a,l){const u=l||Number.POSITIVE_INFINITY;let f=0;return c;function c(g){return g===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(g),e.exit(o),h):g===null||g===32||g===41||Xs(g)?t(g):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),x(g))}function h(g){return g===62?(e.enter(o),e.consume(g),e.exit(o),e.exit(i),e.exit(r),n):(e.enter(a),e.enter("chunkString",{contentType:"string"}),d(g))}function d(g){return g===62?(e.exit("chunkString"),e.exit(a),h(g)):g===null||g===60||B(g)?t(g):(e.consume(g),g===92?p:d)}function p(g){return g===60||g===62||g===92?(e.consume(g),d):d(g)}function x(g){return!f&&(g===null||g===41||oe(g))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),n(g)):f<u&&g===40?(e.consume(g),f++,x):g===41?(e.consume(g),f--,x):g===null||g===32||g===40||Xs(g)?t(g):(e.consume(g),g===92?C:x)}function C(g){return g===40||g===41||g===92?(e.consume(g),x):x(g)}}function z1(e,n,t,r,i,o){const s=this;let a=0,l;return u;function u(d){return e.enter(r),e.enter(i),e.consume(d),e.exit(i),e.enter(o),f}function f(d){return a>999||d===null||d===91||d===93&&!l||d===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?t(d):d===93?(e.exit(o),e.enter(i),e.consume(d),e.exit(i),e.exit(r),n):B(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),c(d))}function c(d){return d===null||d===91||d===93||B(d)||a++>999?(e.exit("chunkString"),f(d)):(e.consume(d),l||(l=!Q(d)),d===92?h:c)}function h(d){return d===91||d===92||d===93?(e.consume(d),a++,c):c(d)}}function _1(e,n,t,r,i,o){let s;return a;function a(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),s=h===40?41:h,l):t(h)}function l(h){return h===s?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),n):(e.enter(o),u(h))}function u(h){return h===s?(e.exit(o),l(s)):h===null?t(h):B(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),J(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===s||h===null||B(h)?(e.exit("chunkString"),u(h)):(e.consume(h),h===92?c:f)}function c(h){return h===s||h===92?(e.consume(h),f):f(h)}}function Bi(e,n){let t;return r;function r(i){return B(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):Q(i)?J(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const fD={name:"definition",tokenize:dD},hD={partial:!0,tokenize:pD};function dD(e,n,t){const r=this;let i;return o;function o(d){return e.enter("definition"),s(d)}function s(d){return z1.call(r,e,a,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(d)}function a(d){return i=Vn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),d===58?(e.enter("definitionMarker"),e.consume(d),e.exit("definitionMarker"),l):t(d)}function l(d){return oe(d)?Bi(e,u)(d):u(d)}function u(d){return O1(e,f,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(d)}function f(d){return e.attempt(hD,c,c)(d)}function c(d){return Q(d)?J(e,h,"whitespace")(d):h(d)}function h(d){return d===null||B(d)?(e.exit("definition"),r.parser.defined.push(i),n(d)):t(d)}}function pD(e,n,t){return r;function r(a){return oe(a)?Bi(e,i)(a):t(a)}function i(a){return _1(e,o,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return Q(a)?J(e,s,"whitespace")(a):s(a)}function s(a){return a===null||B(a)?n(a):t(a)}}const mD={name:"hardBreakEscape",tokenize:gD};function gD(e,n,t){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return B(o)?(e.exit("hardBreakEscape"),n(o)):t(o)}}const yD={name:"headingAtx",resolve:vD,tokenize:xD};function vD(e,n){let t=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},o={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},ln(e,r,t-r+1,[["enter",i,n],["enter",o,n],["exit",o,n],["exit",i,n]])),e}function xD(e,n,t){let r=0;return i;function i(f){return e.enter("atxHeading"),o(f)}function o(f){return e.enter("atxHeadingSequence"),s(f)}function s(f){return f===35&&r++<6?(e.consume(f),s):f===null||oe(f)?(e.exit("atxHeadingSequence"),a(f)):t(f)}function a(f){return f===35?(e.enter("atxHeadingSequence"),l(f)):f===null||B(f)?(e.exit("atxHeading"),n(f)):Q(f)?J(e,a,"whitespace")(f):(e.enter("atxHeadingText"),u(f))}function l(f){return f===35?(e.consume(f),l):(e.exit("atxHeadingSequence"),a(f))}function u(f){return f===null||f===35||oe(f)?(e.exit("atxHeadingText"),a(f)):(e.consume(f),u)}}const SD=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Wp=["pre","script","style","textarea"],CD={concrete:!0,name:"htmlFlow",resolveTo:kD,tokenize:PD},wD={partial:!0,tokenize:AD},ED={partial:!0,tokenize:TD};function kD(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function PD(e,n,t){const r=this;let i,o,s,a,l;return u;function u(E){return f(E)}function f(E){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(E),c}function c(E){return E===33?(e.consume(E),h):E===47?(e.consume(E),o=!0,x):E===63?(e.consume(E),i=3,r.interrupt?n:S):We(E)?(e.consume(E),s=String.fromCharCode(E),C):t(E)}function h(E){return E===45?(e.consume(E),i=2,d):E===91?(e.consume(E),i=5,a=0,p):We(E)?(e.consume(E),i=4,r.interrupt?n:S):t(E)}function d(E){return E===45?(e.consume(E),r.interrupt?n:S):t(E)}function p(E){const ye="CDATA[";return E===ye.charCodeAt(a++)?(e.consume(E),a===ye.length?r.interrupt?n:F:p):t(E)}function x(E){return We(E)?(e.consume(E),s=String.fromCharCode(E),C):t(E)}function C(E){if(E===null||E===47||E===62||oe(E)){const ye=E===47,Ge=s.toLowerCase();return!ye&&!o&&Wp.includes(Ge)?(i=1,r.interrupt?n(E):F(E)):SD.includes(s.toLowerCase())?(i=6,ye?(e.consume(E),g):r.interrupt?n(E):F(E)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(E):o?y(E):v(E))}return E===45||je(E)?(e.consume(E),s+=String.fromCharCode(E),C):t(E)}function g(E){return E===62?(e.consume(E),r.interrupt?n:F):t(E)}function y(E){return Q(E)?(e.consume(E),y):P(E)}function v(E){return E===47?(e.consume(E),P):E===58||E===95||We(E)?(e.consume(E),w):Q(E)?(e.consume(E),v):P(E)}function w(E){return E===45||E===46||E===58||E===95||je(E)?(e.consume(E),w):T(E)}function T(E){return E===61?(e.consume(E),k):Q(E)?(e.consume(E),T):v(E)}function k(E){return E===null||E===60||E===61||E===62||E===96?t(E):E===34||E===39?(e.consume(E),l=E,D):Q(E)?(e.consume(E),k):b(E)}function D(E){return E===l?(e.consume(E),l=null,L):E===null||B(E)?t(E):(e.consume(E),D)}function b(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||oe(E)?T(E):(e.consume(E),b)}function L(E){return E===47||E===62||Q(E)?v(E):t(E)}function P(E){return E===62?(e.consume(E),j):t(E)}function j(E){return E===null||B(E)?F(E):Q(E)?(e.consume(E),j):t(E)}function F(E){return E===45&&i===2?(e.consume(E),K):E===60&&i===1?(e.consume(E),te):E===62&&i===4?(e.consume(E),_):E===63&&i===3?(e.consume(E),S):E===93&&i===5?(e.consume(E),z):B(E)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(wD,Z,U)(E)):E===null||B(E)?(e.exit("htmlFlowData"),U(E)):(e.consume(E),F)}function U(E){return e.check(ED,$,Z)(E)}function $(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),G}function G(E){return E===null||B(E)?U(E):(e.enter("htmlFlowData"),F(E))}function K(E){return E===45?(e.consume(E),S):F(E)}function te(E){return E===47?(e.consume(E),s="",N):F(E)}function N(E){if(E===62){const ye=s.toLowerCase();return Wp.includes(ye)?(e.consume(E),_):F(E)}return We(E)&&s.length<8?(e.consume(E),s+=String.fromCharCode(E),N):F(E)}function z(E){return E===93?(e.consume(E),S):F(E)}function S(E){return E===62?(e.consume(E),_):E===45&&i===2?(e.consume(E),S):F(E)}function _(E){return E===null||B(E)?(e.exit("htmlFlowData"),Z(E)):(e.consume(E),_)}function Z(E){return e.exit("htmlFlow"),n(E)}}function TD(e,n,t){const r=this;return i;function i(s){return B(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):t(s)}function o(s){return r.parser.lazy[r.now().line]?t(s):n(s)}}function AD(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ko,n,t)}}const bD={name:"htmlText",tokenize:DD};function DD(e,n,t){const r=this;let i,o,s;return a;function a(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),l}function l(S){return S===33?(e.consume(S),u):S===47?(e.consume(S),T):S===63?(e.consume(S),v):We(S)?(e.consume(S),b):t(S)}function u(S){return S===45?(e.consume(S),f):S===91?(e.consume(S),o=0,p):We(S)?(e.consume(S),y):t(S)}function f(S){return S===45?(e.consume(S),d):t(S)}function c(S){return S===null?t(S):S===45?(e.consume(S),h):B(S)?(s=c,te(S)):(e.consume(S),c)}function h(S){return S===45?(e.consume(S),d):c(S)}function d(S){return S===62?K(S):S===45?h(S):c(S)}function p(S){const _="CDATA[";return S===_.charCodeAt(o++)?(e.consume(S),o===_.length?x:p):t(S)}function x(S){return S===null?t(S):S===93?(e.consume(S),C):B(S)?(s=x,te(S)):(e.consume(S),x)}function C(S){return S===93?(e.consume(S),g):x(S)}function g(S){return S===62?K(S):S===93?(e.consume(S),g):x(S)}function y(S){return S===null||S===62?K(S):B(S)?(s=y,te(S)):(e.consume(S),y)}function v(S){return S===null?t(S):S===63?(e.consume(S),w):B(S)?(s=v,te(S)):(e.consume(S),v)}function w(S){return S===62?K(S):v(S)}function T(S){return We(S)?(e.consume(S),k):t(S)}function k(S){return S===45||je(S)?(e.consume(S),k):D(S)}function D(S){return B(S)?(s=D,te(S)):Q(S)?(e.consume(S),D):K(S)}function b(S){return S===45||je(S)?(e.consume(S),b):S===47||S===62||oe(S)?L(S):t(S)}function L(S){return S===47?(e.consume(S),K):S===58||S===95||We(S)?(e.consume(S),P):B(S)?(s=L,te(S)):Q(S)?(e.consume(S),L):K(S)}function P(S){return S===45||S===46||S===58||S===95||je(S)?(e.consume(S),P):j(S)}function j(S){return S===61?(e.consume(S),F):B(S)?(s=j,te(S)):Q(S)?(e.consume(S),j):L(S)}function F(S){return S===null||S===60||S===61||S===62||S===96?t(S):S===34||S===39?(e.consume(S),i=S,U):B(S)?(s=F,te(S)):Q(S)?(e.consume(S),F):(e.consume(S),$)}function U(S){return S===i?(e.consume(S),i=void 0,G):S===null?t(S):B(S)?(s=U,te(S)):(e.consume(S),U)}function $(S){return S===null||S===34||S===39||S===60||S===61||S===96?t(S):S===47||S===62||oe(S)?L(S):(e.consume(S),$)}function G(S){return S===47||S===62||oe(S)?L(S):t(S)}function K(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),n):t(S)}function te(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),N}function N(S){return Q(S)?J(e,z,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):z(S)}function z(S){return e.enter("htmlTextData"),s(S)}}const Ff={name:"labelEnd",resolveAll:ND,resolveTo:MD,tokenize:LD},ID={tokenize:jD},RD={tokenize:FD},VD={tokenize:OD};function ND(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&ln(e,0,e.length,t),e}function MD(e,n){let t=e.length,r=0,i,o,s,a;for(;t--;)if(i=e[t][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=t);const l={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},f={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",l,n],["enter",u,n]],a=vn(a,e.slice(o+1,o+r+3)),a=vn(a,[["enter",f,n]]),a=vn(a,Ia(n.parser.constructs.insideSpan.null,e.slice(o+r+4,s-3),n)),a=vn(a,[["exit",f,n],e[s-2],e[s-1],["exit",u,n]]),a=vn(a,e.slice(s+1)),a=vn(a,[["exit",l,n]]),ln(e,o,e.length,a),e}function LD(e,n,t){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(h){return o?o._inactive?c(h):(s=r.parser.defined.includes(Vn(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),l):t(h)}function l(h){return h===40?e.attempt(ID,f,s?f:c)(h):h===91?e.attempt(RD,f,s?u:c)(h):s?f(h):c(h)}function u(h){return e.attempt(VD,f,c)(h)}function f(h){return n(h)}function c(h){return o._balanced=!0,t(h)}}function jD(e,n,t){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return oe(c)?Bi(e,o)(c):o(c)}function o(c){return c===41?f(c):O1(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function s(c){return oe(c)?Bi(e,l)(c):f(c)}function a(c){return t(c)}function l(c){return c===34||c===39||c===40?_1(e,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function u(c){return oe(c)?Bi(e,f)(c):f(c)}function f(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),n):t(c)}}function FD(e,n,t){const r=this;return i;function i(a){return z1.call(r,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Vn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(a):t(a)}function s(a){return t(a)}}function OD(e,n,t){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),n):t(o)}}const zD={name:"labelStartImage",resolveAll:Ff.resolveAll,tokenize:_D};function _D(e,n,t){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):t(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const BD={name:"labelStartLink",resolveAll:Ff.resolveAll,tokenize:WD};function WD(e,n,t){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(s):n(s)}}const kl={name:"lineEnding",tokenize:UD};function UD(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),J(e,n,"linePrefix")}}const ds={name:"thematicBreak",tokenize:HD};function HD(e,n,t){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),s(u)}function s(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),l(u)):r>=3&&(u===null||B(u))?(e.exit("thematicBreak"),n(u)):t(u)}function l(u){return u===i?(e.consume(u),r++,l):(e.exit("thematicBreakSequence"),Q(u)?J(e,a,"whitespace")(u):a(u))}}const qe={continuation:{tokenize:KD},exit:XD,name:"list",tokenize:qD},$D={partial:!0,tokenize:YD},GD={partial:!0,tokenize:QD};function qD(e,n,t){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(d){const p=r.containerState.type||(d===42||d===43||d===45?"listUnordered":"listOrdered");if(p==="listUnordered"?!r.containerState.marker||d===r.containerState.marker:ec(d)){if(r.containerState.type||(r.containerState.type=p,e.enter(p,{_container:!0})),p==="listUnordered")return e.enter("listItemPrefix"),d===42||d===45?e.check(ds,t,u)(d):u(d);if(!r.interrupt||d===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(d)}return t(d)}function l(d){return ec(d)&&++s<10?(e.consume(d),l):(!r.interrupt||s<2)&&(r.containerState.marker?d===r.containerState.marker:d===41||d===46)?(e.exit("listItemValue"),u(d)):t(d)}function u(d){return e.enter("listItemMarker"),e.consume(d),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||d,e.check(ko,r.interrupt?t:f,e.attempt($D,h,c))}function f(d){return r.containerState.initialBlankLine=!0,o++,h(d)}function c(d){return Q(d)?(e.enter("listItemPrefixWhitespace"),e.consume(d),e.exit("listItemPrefixWhitespace"),h):t(d)}function h(d){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(d)}}function KD(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(ko,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,J(e,n,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!Q(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(GD,n,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,J(e,e.attempt(qe,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function QD(e,n,t){const r=this;return J(e,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?n(o):t(o)}}function XD(e){e.exit(this.containerState.type)}function YD(e,n,t){const r=this;return J(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!Q(o)&&s&&s[1].type==="listItemPrefixWhitespace"?n(o):t(o)}}const Up={name:"setextUnderline",resolveTo:ZD,tokenize:JD};function ZD(e,n){let t=e.length,r,i,o;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!o&&e[t][1].type==="definition"&&(o=t);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",s,n]),e.splice(o+1,0,["exit",e[r][1],n]),e[r][1].end={...e[o][1].end}):e[r][1]=s,e.push(["exit",s,n]),e}function JD(e,n,t){const r=this;let i;return o;function o(u){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,s(u)):t(u)}function s(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),Q(u)?J(e,l,"lineSuffix")(u):l(u))}function l(u){return u===null||B(u)?(e.exit("setextHeadingLine"),n(u)):t(u)}}const eI={tokenize:nI};function nI(e){const n=this,t=e.attempt(ko,r,e.attempt(this.parser.constructs.flowInitial,i,J(e,e.attempt(this.parser.constructs.flow,i,e.attempt(sD,i)),"linePrefix")));return t;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const tI={resolveAll:W1()},rI=B1("string"),iI=B1("text");function B1(e){return{resolveAll:W1(e==="text"?oI:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],o=t.attempt(i,s,a);return s;function s(f){return u(f)?o(f):a(f)}function a(f){if(f===null){t.consume(f);return}return t.enter("data"),t.consume(f),l}function l(f){return u(f)?(t.exit("data"),o(f)):(t.consume(f),l)}function u(f){if(f===null)return!0;const c=i[f];let h=-1;if(c)for(;++h<c.length;){const d=c[h];if(!d.previous||d.previous.call(r,r.previous))return!0}return!1}}}function W1(e){return n;function n(t,r){let i=-1,o;for(;++i<=t.length;)o===void 0?t[i]&&t[i][1].type==="data"&&(o=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==o+2&&(t[o][1].end=t[i-1][1].end,t.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(t,r):t}}function oI(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let o=i.length,s=-1,a=0,l;for(;o--;){const u=i[o];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)l=!0,a++;else if(u!==-1){o++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(a=0),a){const u={type:t===e.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(t,0,["enter",u,n],["exit",u,n]),t+=2)}t++}return e}const sI={42:qe,43:qe,45:qe,48:qe,49:qe,50:qe,51:qe,52:qe,53:qe,54:qe,55:qe,56:qe,57:qe,62:M1},aI={91:fD},lI={[-2]:El,[-1]:El,32:El},uI={35:yD,42:ds,45:[Up,ds],60:CD,61:Up,95:ds,96:Bp,126:Bp},cI={38:j1,92:L1},fI={[-5]:kl,[-4]:kl,[-3]:kl,33:zD,38:j1,42:nc,60:[Bb,bD],91:BD,92:[mD,L1],93:Ff,95:nc,96:eD},hI={null:[nc,tI]},dI={null:[42,95]},pI={null:[]},mI=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:dI,contentInitial:aI,disable:pI,document:sI,flow:uI,flowInitial:lI,insideSpan:hI,string:cI,text:fI},Symbol.toStringTag,{value:"Module"}));function gI(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},o=[];let s=[],a=[];const l={attempt:D(T),check:D(k),consume:y,enter:v,exit:w,interrupt:D(k,{interrupt:!0})},u={code:null,containerState:{},defineSkip:x,events:[],now:p,parser:e,previous:null,sliceSerialize:h,sliceStream:d,write:c};let f=n.tokenize.call(u,l);return n.resolveAll&&o.push(n),u;function c(j){return s=vn(s,j),C(),s[s.length-1]!==null?[]:(b(n,0),u.events=Ia(o,u.events,u),u.events)}function h(j,F){return vI(d(j),F)}function d(j){return yI(s,j)}function p(){const{_bufferIndex:j,_index:F,line:U,column:$,offset:G}=r;return{_bufferIndex:j,_index:F,line:U,column:$,offset:G}}function x(j){i[j.line]=j.column,P()}function C(){let j;for(;r._index<s.length;){const F=s[r._index];if(typeof F=="string")for(j=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===j&&r._bufferIndex<F.length;)g(F.charCodeAt(r._bufferIndex));else g(F)}}function g(j){f=f(j)}function y(j){B(j)?(r.line++,r.column=1,r.offset+=j===-3?2:1,P()):j!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=j}function v(j,F){const U=F||{};return U.type=j,U.start=p(),u.events.push(["enter",U,u]),a.push(U),U}function w(j){const F=a.pop();return F.end=p(),u.events.push(["exit",F,u]),F}function T(j,F){b(j,F.from)}function k(j,F){F.restore()}function D(j,F){return U;function U($,G,K){let te,N,z,S;return Array.isArray($)?Z($):"tokenize"in $?Z([$]):_($);function _(ne){return nn;function nn(Mn){const Ln=Mn!==null&&ne[Mn],En=Mn!==null&&ne.null,dn=[...Array.isArray(Ln)?Ln:Ln?[Ln]:[],...Array.isArray(En)?En:En?[En]:[]];return Z(dn)(Mn)}}function Z(ne){return te=ne,N=0,ne.length===0?K:E(ne[N])}function E(ne){return nn;function nn(Mn){return S=L(),z=ne,ne.partial||(u.currentConstruct=ne),ne.name&&u.parser.constructs.disable.null.includes(ne.name)?Ge():ne.tokenize.call(F?Object.assign(Object.create(u),F):u,l,ye,Ge)(Mn)}}function ye(ne){return j(z,S),G}function Ge(ne){return S.restore(),++N<te.length?E(te[N]):K}}}function b(j,F){j.resolveAll&&!o.includes(j)&&o.push(j),j.resolve&&ln(u.events,F,u.events.length-F,j.resolve(u.events.slice(F),u)),j.resolveTo&&(u.events=j.resolveTo(u.events,u))}function L(){const j=p(),F=u.previous,U=u.currentConstruct,$=u.events.length,G=Array.from(a);return{from:$,restore:K};function K(){r=j,u.previous=F,u.currentConstruct=U,u.events.length=$,a=G,P()}}function P(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function yI(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,o=n.end._bufferIndex;let s;if(t===i)s=[e[t].slice(r,o)];else{if(s=e.slice(t,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}o>0&&s.push(e[i].slice(0,o))}return s}function vI(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const o=e[t];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=n?" ":"	";break}case-1:{if(!n&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function xI(e){const r={constructs:V1([mI,...(e||{}).extensions||[]]),content:i(Mb),defined:[],document:i(jb),flow:i(eI),lazy:{},string:i(rI),text:i(iI)};return r;function i(o){return s;function s(a){return gI(r,o,a)}}}function SI(e){for(;!F1(e););return e}const Hp=/[\0\t\n\r]/g;function CI(){let e=1,n="",t=!0,r;return i;function i(o,s,a){const l=[];let u,f,c,h,d;for(o=n+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),c=0,n="",t&&(o.charCodeAt(0)===65279&&c++,t=void 0);c<o.length;){if(Hp.lastIndex=c,u=Hp.exec(o),h=u&&u.index!==void 0?u.index:o.length,d=o.charCodeAt(h),!u){n=o.slice(c);break}if(d===10&&c===h&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),c<h&&(l.push(o.slice(c,h)),e+=h-c),d){case 0:{l.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,l.push(-2);e++<f;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}c=h+1}return a&&(r&&l.push(-5),n&&l.push(n),l.push(null)),l}}const wI=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function EI(e){return e.replace(wI,kI)}function kI(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),o=i===120||i===88;return N1(t.slice(o?2:1),o?16:10)}return jf(t)||e}const U1={}.hasOwnProperty;function PI(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),TI(t)(SI(xI(t).document().write(CI()(e,n,!0))))}function TI(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Yf),autolinkProtocol:L,autolinkEmail:L,atxHeading:o(Kf),blockQuote:o(En),characterEscape:L,characterReference:L,codeFenced:o(dn),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(dn,s),codeText:o(qf,s),codeTextData:L,data:L,codeFlowValue:L,definition:o(Ev),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(kv),hardBreakEscape:o(Qf),hardBreakTrailing:o(Qf),htmlFlow:o(Xf,s),htmlFlowData:L,htmlText:o(Xf,s),htmlTextData:L,image:o(Pv),label:s,link:o(Yf),listItem:o(Tv),listItemValue:h,listOrdered:o(Zf,c),listUnordered:o(Zf),paragraph:o(Av),reference:E,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(Kf),strong:o(bv),thematicBreak:o(Iv)},exit:{atxHeading:l(),atxHeadingSequence:T,autolink:l(),autolinkEmail:Ln,autolinkProtocol:Mn,blockQuote:l(),characterEscapeValue:P,characterReferenceMarkerHexadecimal:Ge,characterReferenceMarkerNumeric:Ge,characterReferenceValue:ne,characterReference:nn,codeFenced:l(C),codeFencedFence:x,codeFencedFenceInfo:d,codeFencedFenceMeta:p,codeFlowValue:P,codeIndented:l(g),codeText:l(G),codeTextData:P,data:P,definition:l(),definitionDestinationString:w,definitionLabelString:y,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(F),hardBreakTrailing:l(F),htmlFlow:l(U),htmlFlowData:P,htmlText:l($),htmlTextData:P,image:l(te),label:z,labelText:N,lineEnding:j,link:l(K),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:ye,resourceDestinationString:S,resourceTitleString:_,resource:Z,setextHeading:l(b),setextHeadingLineSequence:D,setextHeadingText:k,strong:l(),thematicBreak:l()}};H1(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(I){let M={type:"root",children:[]};const H={stack:[M],tokenStack:[],config:n,enter:a,exit:u,buffer:s,resume:f,data:t},Y=[];let ie=-1;for(;++ie<I.length;)if(I[ie][1].type==="listOrdered"||I[ie][1].type==="listUnordered")if(I[ie][0]==="enter")Y.push(ie);else{const kn=Y.pop();ie=i(I,kn,ie)}for(ie=-1;++ie<I.length;){const kn=n[I[ie][0]];U1.call(kn,I[ie][1].type)&&kn[I[ie][1].type].call(Object.assign({sliceSerialize:I[ie][2].sliceSerialize},H),I[ie][1])}if(H.tokenStack.length>0){const kn=H.tokenStack[H.tokenStack.length-1];(kn[1]||$p).call(H,void 0,kn[0])}for(M.position={start:ct(I.length>0?I[0][1].start:{line:1,column:1,offset:0}),end:ct(I.length>0?I[I.length-2][1].end:{line:1,column:1,offset:0})},ie=-1;++ie<n.transforms.length;)M=n.transforms[ie](M)||M;return M}function i(I,M,H){let Y=M-1,ie=-1,kn=!1,_t,Hn,ai,li;for(;++Y<=H;){const tn=I[Y];switch(tn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{tn[0]==="enter"?ie++:ie--,li=void 0;break}case"lineEndingBlank":{tn[0]==="enter"&&(_t&&!li&&!ie&&!ai&&(ai=Y),li=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:li=void 0}if(!ie&&tn[0]==="enter"&&tn[1].type==="listItemPrefix"||ie===-1&&tn[0]==="exit"&&(tn[1].type==="listUnordered"||tn[1].type==="listOrdered")){if(_t){let dr=Y;for(Hn=void 0;dr--;){const $n=I[dr];if($n[1].type==="lineEnding"||$n[1].type==="lineEndingBlank"){if($n[0]==="exit")continue;Hn&&(I[Hn][1].type="lineEndingBlank",kn=!0),$n[1].type="lineEnding",Hn=dr}else if(!($n[1].type==="linePrefix"||$n[1].type==="blockQuotePrefix"||$n[1].type==="blockQuotePrefixWhitespace"||$n[1].type==="blockQuoteMarker"||$n[1].type==="listItemIndent"))break}ai&&(!Hn||ai<Hn)&&(_t._spread=!0),_t.end=Object.assign({},Hn?I[Hn][1].start:tn[1].end),I.splice(Hn||Y,0,["exit",_t,tn[2]]),Y++,H++}if(tn[1].type==="listItemPrefix"){const dr={type:"listItem",_spread:!1,start:Object.assign({},tn[1].start),end:void 0};_t=dr,I.splice(Y,0,["enter",dr,tn[2]]),Y++,H++,ai=void 0,li=!0}}}return I[M][1]._spread=kn,H}function o(I,M){return H;function H(Y){a.call(this,I(Y),Y),M&&M.call(this,Y)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(I,M,H){this.stack[this.stack.length-1].children.push(I),this.stack.push(I),this.tokenStack.push([M,H||void 0]),I.position={start:ct(M.start),end:void 0}}function l(I){return M;function M(H){I&&I.call(this,H),u.call(this,H)}}function u(I,M){const H=this.stack.pop(),Y=this.tokenStack.pop();if(Y)Y[0].type!==I.type&&(M?M.call(this,I,Y[0]):(Y[1]||$p).call(this,I,Y[0]));else throw new Error("Cannot close `"+I.type+"` ("+_i({start:I.start,end:I.end})+"): it’s not open");H.position.end=ct(I.end)}function f(){return Lf(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function h(I){if(this.data.expectingFirstListItemValue){const M=this.stack[this.stack.length-2];M.start=Number.parseInt(this.sliceSerialize(I),10),this.data.expectingFirstListItemValue=void 0}}function d(){const I=this.resume(),M=this.stack[this.stack.length-1];M.lang=I}function p(){const I=this.resume(),M=this.stack[this.stack.length-1];M.meta=I}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const I=this.resume(),M=this.stack[this.stack.length-1];M.value=I.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const I=this.resume(),M=this.stack[this.stack.length-1];M.value=I.replace(/(\r?\n|\r)$/g,"")}function y(I){const M=this.resume(),H=this.stack[this.stack.length-1];H.label=M,H.identifier=Vn(this.sliceSerialize(I)).toLowerCase()}function v(){const I=this.resume(),M=this.stack[this.stack.length-1];M.title=I}function w(){const I=this.resume(),M=this.stack[this.stack.length-1];M.url=I}function T(I){const M=this.stack[this.stack.length-1];if(!M.depth){const H=this.sliceSerialize(I).length;M.depth=H}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function D(I){const M=this.stack[this.stack.length-1];M.depth=this.sliceSerialize(I).codePointAt(0)===61?1:2}function b(){this.data.setextHeadingSlurpLineEnding=void 0}function L(I){const H=this.stack[this.stack.length-1].children;let Y=H[H.length-1];(!Y||Y.type!=="text")&&(Y=Dv(),Y.position={start:ct(I.start),end:void 0},H.push(Y)),this.stack.push(Y)}function P(I){const M=this.stack.pop();M.value+=this.sliceSerialize(I),M.position.end=ct(I.end)}function j(I){const M=this.stack[this.stack.length-1];if(this.data.atHardBreak){const H=M.children[M.children.length-1];H.position.end=ct(I.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(M.type)&&(L.call(this,I),P.call(this,I))}function F(){this.data.atHardBreak=!0}function U(){const I=this.resume(),M=this.stack[this.stack.length-1];M.value=I}function $(){const I=this.resume(),M=this.stack[this.stack.length-1];M.value=I}function G(){const I=this.resume(),M=this.stack[this.stack.length-1];M.value=I}function K(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const M=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=M,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function te(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const M=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=M,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function N(I){const M=this.sliceSerialize(I),H=this.stack[this.stack.length-2];H.label=EI(M),H.identifier=Vn(M).toLowerCase()}function z(){const I=this.stack[this.stack.length-1],M=this.resume(),H=this.stack[this.stack.length-1];if(this.data.inReference=!0,H.type==="link"){const Y=I.children;H.children=Y}else H.alt=M}function S(){const I=this.resume(),M=this.stack[this.stack.length-1];M.url=I}function _(){const I=this.resume(),M=this.stack[this.stack.length-1];M.title=I}function Z(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function ye(I){const M=this.resume(),H=this.stack[this.stack.length-1];H.label=M,H.identifier=Vn(this.sliceSerialize(I)).toLowerCase(),this.data.referenceType="full"}function Ge(I){this.data.characterReferenceType=I.type}function ne(I){const M=this.sliceSerialize(I),H=this.data.characterReferenceType;let Y;H?(Y=N1(M,H==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Y=jf(M);const ie=this.stack[this.stack.length-1];ie.value+=Y}function nn(I){const M=this.stack.pop();M.position.end=ct(I.end)}function Mn(I){P.call(this,I);const M=this.stack[this.stack.length-1];M.url=this.sliceSerialize(I)}function Ln(I){P.call(this,I);const M=this.stack[this.stack.length-1];M.url="mailto:"+this.sliceSerialize(I)}function En(){return{type:"blockquote",children:[]}}function dn(){return{type:"code",lang:null,meta:null,value:""}}function qf(){return{type:"inlineCode",value:""}}function Ev(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function kv(){return{type:"emphasis",children:[]}}function Kf(){return{type:"heading",depth:0,children:[]}}function Qf(){return{type:"break"}}function Xf(){return{type:"html",value:""}}function Pv(){return{type:"image",title:null,url:"",alt:null}}function Yf(){return{type:"link",title:null,url:"",children:[]}}function Zf(I){return{type:"list",ordered:I.type==="listOrdered",start:null,spread:I._spread,children:[]}}function Tv(I){return{type:"listItem",spread:I._spread,checked:null,children:[]}}function Av(){return{type:"paragraph",children:[]}}function bv(){return{type:"strong",children:[]}}function Dv(){return{type:"text",value:""}}function Iv(){return{type:"thematicBreak"}}}function ct(e){return{line:e.line,column:e.column,offset:e.offset}}function H1(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?H1(e,r):AI(e,r)}}function AI(e,n){let t;for(t in n)if(U1.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function $p(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+_i({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+_i({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+_i({start:n.start,end:n.end})+") is still open")}function bI(e){const n=this;n.parser=t;function t(r){return PI(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function DI(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function II(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function RI(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function VI(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function NI(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function MI(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=si(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(n,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(n,u),e.applyData(n,u)}function LI(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function jI(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function $1(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function FI(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return $1(e,n);const i={src:si(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,o),e.applyData(n,o)}function OI(e,n){const t={src:si(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function zI(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function _I(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return $1(e,n);const i={href:si(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,o),e.applyData(n,o)}function BI(e,n){const t={href:si(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function WI(e,n,t){const r=e.all(n),i=t?UI(t):G1(n),o={},s=[];if(typeof n.checked=="boolean"){const f=r[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const f=r[a];(i||a!==0||f.type!=="element"||f.tagName!=="p")&&s.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?s.push(...f.children):s.push(f)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:s};return e.patch(n,u),e.applyData(n,u)}function UI(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=G1(t[r])}return n}function G1(e){const n=e.spread;return n??e.children.length>1}function HI(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const o={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,o),e.applyData(n,o)}function $I(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function GI(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function qI(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function KI(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],s),i.push(s)}if(t.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},a=Rf(n.children[1]),l=P1(n.children[n.children.length-1]);a&&l&&(s.position={start:a,end:l}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,o),e.applyData(n,o)}function QI(e,n,t){const r=t?t.children:void 0,o=(r?r.indexOf(n):1)===0?"th":"td",s=t&&t.type==="table"?t.align:void 0,a=s?s.length:n.children.length;let l=-1;const u=[];for(;++l<a;){const c=n.children[l],h={},d=s?s[l]:void 0;d&&(h.align=d);let p={type:"element",tagName:o,properties:h,children:[]};c&&(p.children=e.all(c),e.patch(c,p),p=e.applyData(c,p)),u.push(p)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(n,f),e.applyData(n,f)}function XI(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Gp=9,qp=32;function YI(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const o=[];for(;r;)o.push(Kp(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return o.push(Kp(n.slice(i),i>0,!1)),o.join("")}function Kp(e,n,t){let r=0,i=e.length;if(n){let o=e.codePointAt(r);for(;o===Gp||o===qp;)r++,o=e.codePointAt(r)}if(t){let o=e.codePointAt(i-1);for(;o===Gp||o===qp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function ZI(e,n){const t={type:"text",value:YI(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function JI(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const eR={blockquote:DI,break:II,code:RI,delete:VI,emphasis:NI,footnoteReference:MI,heading:LI,html:jI,imageReference:FI,image:OI,inlineCode:zI,linkReference:_I,link:BI,listItem:WI,list:HI,paragraph:$I,root:GI,strong:qI,table:KI,tableCell:XI,tableRow:QI,text:ZI,thematicBreak:JI,toml:qo,yaml:qo,definition:qo,footnoteDefinition:qo};function qo(){}const q1=-1,Ra=0,Wi=1,Ys=2,Of=3,zf=4,_f=5,Bf=6,K1=7,Q1=8,Qp=typeof self=="object"?self:globalThis,nR=(e,n)=>{const t=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,s]=n[i];switch(o){case Ra:case q1:return t(s,i);case Wi:{const a=t([],i);for(const l of s)a.push(r(l));return a}case Ys:{const a=t({},i);for(const[l,u]of s)a[r(l)]=r(u);return a}case Of:return t(new Date(s),i);case zf:{const{source:a,flags:l}=s;return t(new RegExp(a,l),i)}case _f:{const a=t(new Map,i);for(const[l,u]of s)a.set(r(l),r(u));return a}case Bf:{const a=t(new Set,i);for(const l of s)a.add(r(l));return a}case K1:{const{name:a,message:l}=s;return t(new Qp[a](l),i)}case Q1:return t(BigInt(s),i);case"BigInt":return t(Object(BigInt(s)),i);case"ArrayBuffer":return t(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return t(new DataView(a),s)}}return t(new Qp[o](s),i)};return r},Xp=e=>nR(new Map,e)(0),gr="",{toString:tR}={},{keys:rR}=Object,Si=e=>{const n=typeof e;if(n!=="object"||!e)return[Ra,n];const t=tR.call(e).slice(8,-1);switch(t){case"Array":return[Wi,gr];case"Object":return[Ys,gr];case"Date":return[Of,gr];case"RegExp":return[zf,gr];case"Map":return[_f,gr];case"Set":return[Bf,gr];case"DataView":return[Wi,t]}return t.includes("Array")?[Wi,t]:t.includes("Error")?[K1,t]:[Ys,t]},Ko=([e,n])=>e===Ra&&(n==="function"||n==="symbol"),iR=(e,n,t,r)=>{const i=(s,a)=>{const l=r.push(s)-1;return t.set(a,l),l},o=s=>{if(t.has(s))return t.get(s);let[a,l]=Si(s);switch(a){case Ra:{let f=s;switch(l){case"bigint":a=Q1,f=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);f=null;break;case"undefined":return i([q1],s)}return i([a,f],s)}case Wi:{if(l){let h=s;return l==="DataView"?h=new Uint8Array(s.buffer):l==="ArrayBuffer"&&(h=new Uint8Array(s)),i([l,[...h]],s)}const f=[],c=i([a,f],s);for(const h of s)f.push(o(h));return c}case Ys:{if(l)switch(l){case"BigInt":return i([l,s.toString()],s);case"Boolean":case"Number":case"String":return i([l,s.valueOf()],s)}if(n&&"toJSON"in s)return o(s.toJSON());const f=[],c=i([a,f],s);for(const h of rR(s))(e||!Ko(Si(s[h])))&&f.push([o(h),o(s[h])]);return c}case Of:return i([a,s.toISOString()],s);case zf:{const{source:f,flags:c}=s;return i([a,{source:f,flags:c}],s)}case _f:{const f=[],c=i([a,f],s);for(const[h,d]of s)(e||!(Ko(Si(h))||Ko(Si(d))))&&f.push([o(h),o(d)]);return c}case Bf:{const f=[],c=i([a,f],s);for(const h of s)(e||!Ko(Si(h)))&&f.push(o(h));return c}}const{message:u}=s;return i([a,{name:l,message:u}],s)};return o},Yp=(e,{json:n,lossy:t}={})=>{const r=[];return iR(!(n||t),!!n,new Map,r)(e),r},Zs=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Xp(Yp(e,n)):structuredClone(e):(e,n)=>Xp(Yp(e,n));function oR(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function sR(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function aR(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||oR,r=e.options.footnoteBackLabel||sR,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[l]);if(!u)continue;const f=e.all(u),c=String(u.identifier).toUpperCase(),h=si(c.toLowerCase());let d=0;const p=[],x=e.footnoteCounts.get(c);for(;x!==void 0&&++d<=x;){p.length>0&&p.push({type:"text",value:" "});let y=typeof t=="string"?t:t(l,d);typeof y=="string"&&(y={type:"text",value:y}),p.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+h+(d>1?"-"+d:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,d),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const C=f[f.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const y=C.children[C.children.length-1];y&&y.type==="text"?y.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...p)}else f.push(...p);const g={type:"element",tagName:"li",properties:{id:n+"fn-"+h},children:e.wrap(f,!0)};e.patch(u,g),a.push(g)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Zs(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Va=function(e){if(e==null)return fR;if(typeof e=="function")return Na(e);if(typeof e=="object")return Array.isArray(e)?lR(e):uR(e);if(typeof e=="string")return cR(e);throw new Error("Expected function, string, or object as test")};function lR(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Va(e[t]);return Na(r);function r(...i){let o=-1;for(;++o<n.length;)if(n[o].apply(this,i))return!0;return!1}}function uR(e){const n=e;return Na(t);function t(r){const i=r;let o;for(o in e)if(i[o]!==n[o])return!1;return!0}}function cR(e){return Na(n);function n(t){return t&&t.type===e}}function Na(e){return n;function n(t,r,i){return!!(hR(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function fR(){return!0}function hR(e){return e!==null&&typeof e=="object"&&"type"in e}const X1=[],dR=!0,tc=!1,pR="skip";function Y1(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const o=Va(i),s=r?-1:1;a(e,void 0,[])();function a(l,u,f){const c=l&&typeof l=="object"?l:{};if(typeof c.type=="string"){const d=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(l.type+(d?"<"+d+">":""))+")"})}return h;function h(){let d=X1,p,x,C;if((!n||o(l,u,f[f.length-1]||void 0))&&(d=mR(t(l,f)),d[0]===tc))return d;if("children"in l&&l.children){const g=l;if(g.children&&d[0]!==pR)for(x=(r?g.children.length:-1)+s,C=f.concat(g);x>-1&&x<g.children.length;){const y=g.children[x];if(p=a(y,x,C)(),p[0]===tc)return p;x=typeof p[1]=="number"?p[1]:x+s}}return d}}}function mR(e){return Array.isArray(e)?e:typeof e=="number"?[dR,e]:e==null?X1:[e]}function Wf(e,n,t,r){let i,o,s;typeof n=="function"&&typeof t!="function"?(o=void 0,s=n,i=t):(o=n,s=t,i=r),Y1(e,o,a,i);function a(l,u){const f=u[u.length-1],c=f?f.children.indexOf(l):void 0;return s(l,c,f)}}const rc={}.hasOwnProperty,gR={};function yR(e,n){const t=n||gR,r=new Map,i=new Map,o=new Map,s={...eR,...t.handlers},a={all:u,applyData:xR,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:t,patch:vR,wrap:CR};return Wf(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?r:i,h=String(f.identifier).toUpperCase();c.has(h)||c.set(h,f)}}),a;function l(f,c){const h=f.type,d=a.handlers[h];if(rc.call(a.handlers,h)&&d)return d(a,f,c);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in f){const{children:x,...C}=f,g=Zs(C);return g.children=a.all(f),g}return Zs(f)}return(a.options.unknownHandler||SR)(a,f,c)}function u(f){const c=[];if("children"in f){const h=f.children;let d=-1;for(;++d<h.length;){const p=a.one(h[d],f);if(p){if(d&&h[d-1].type==="break"&&(!Array.isArray(p)&&p.type==="text"&&(p.value=Zp(p.value)),!Array.isArray(p)&&p.type==="element")){const x=p.children[0];x&&x.type==="text"&&(x.value=Zp(x.value))}Array.isArray(p)?c.push(...p):c.push(p)}}}return c}}function vR(e,n){e.position&&(n.position=sb(e))}function xR(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const s="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:s}}t.type==="element"&&o&&Object.assign(t.properties,Zs(o)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function SR(e,n){const t=n.data||{},r="value"in n&&!(rc.call(t,"hProperties")||rc.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function CR(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function Zp(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Jp(e,n){const t=yR(e,n),r=t.one(e,void 0),i=aR(t),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function wR(e,n){return e&&"run"in e?async function(t,r){const i=Jp(t,{file:r,...n});await e.run(i,r)}:function(t,r){return Jp(t,{file:r,...e||n})}}function em(e){if(e)throw e}var ps=Object.prototype.hasOwnProperty,Z1=Object.prototype.toString,nm=Object.defineProperty,tm=Object.getOwnPropertyDescriptor,rm=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Z1.call(n)==="[object Array]"},im=function(n){if(!n||Z1.call(n)!=="[object Object]")return!1;var t=ps.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&ps.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||ps.call(n,i)},om=function(n,t){nm&&t.name==="__proto__"?nm(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},sm=function(n,t){if(t==="__proto__")if(ps.call(n,t)){if(tm)return tm(n,t).value}else return;return n[t]},ER=function e(){var n,t,r,i,o,s,a=arguments[0],l=1,u=arguments.length,f=!1;for(typeof a=="boolean"&&(f=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(n=arguments[l],n!=null)for(t in n)r=sm(a,t),i=sm(n,t),a!==i&&(f&&i&&(im(i)||(o=rm(i)))?(o?(o=!1,s=r&&rm(r)?r:[]):s=r&&im(r)?r:{},om(a,{name:t,newValue:e(f,s,i)})):typeof i<"u"&&om(a,{name:t,newValue:i}));return a};const Pl=ea(ER);function ic(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function kR(){const e=[],n={run:t,use:r};return n;function t(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(l,...u){const f=e[++o];let c=-1;if(l){s(l);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,f?PR(f,a)(...u):s(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function PR(e,n){let t;return r;function r(...s){const a=e.length>s.length;let l;a&&s.push(i);try{l=e.apply(this,s)}catch(u){const f=u;if(a&&t)throw f;return i(f)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,i):l instanceof Error?i(l):o(l))}function i(s,...a){t||(t=!0,n(s,...a))}function o(s){i(null,s)}}const On={basename:TR,dirname:AR,extname:bR,join:DR,sep:"/"};function TR(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');Po(e);let t=0,r=-1,i=e.length,o;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let s=-1,a=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){t=i+1;break}}else s<0&&(o=!0,s=i+1),a>-1&&(e.codePointAt(i)===n.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return t===r?r=s:r<0&&(r=e.length),e.slice(t,r)}function AR(e){if(Po(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function bR(e){Po(e);let n=e.length,t=-1,r=0,i=-1,o=0,s;for(;n--;){const a=e.codePointAt(n);if(a===47){if(s){r=n+1;break}continue}t<0&&(s=!0,t=n+1),a===46?i<0?i=n:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||t<0||o===0||o===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function DR(...e){let n=-1,t;for(;++n<e.length;)Po(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":IR(t)}function IR(e){Po(e);const n=e.codePointAt(0)===47;let t=RR(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function RR(e,n){let t="",r=0,i=-1,o=0,s=-1,a,l;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(l=t.lastIndexOf("/"),l!==t.length-1){l<0?(t="",r=0):(t=t.slice(0,l),r=t.length-1-t.lastIndexOf("/")),i=s,o=0;continue}}else if(t.length>0){t="",r=0,i=s,o=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,s):t=e.slice(i+1,s),r=s-i-1;i=s,o=0}else a===46&&o>-1?o++:o=-1}return t}function Po(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const VR={cwd:NR};function NR(){return"/"}function oc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function MR(e){if(typeof e=="string")e=new URL(e);else if(!oc(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return LR(e)}function LR(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Tl=["history","path","basename","stem","extname","dirname"];class J1{constructor(n){let t;n?oc(n)?t={path:n}:typeof n=="string"||jR(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":VR.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Tl.length;){const o=Tl[r];o in t&&t[o]!==void 0&&t[o]!==null&&(this[o]=o==="history"?[...t[o]]:t[o])}let i;for(i in t)Tl.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?On.basename(this.path):void 0}set basename(n){bl(n,"basename"),Al(n,"basename"),this.path=On.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?On.dirname(this.path):void 0}set dirname(n){am(this.basename,"dirname"),this.path=On.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?On.extname(this.path):void 0}set extname(n){if(Al(n,"extname"),am(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=On.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){oc(n)&&(n=MR(n)),bl(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?On.basename(this.path,this.extname):void 0}set stem(n){bl(n,"stem"),Al(n,"stem"),this.path=On.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Oe(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Al(e,n){if(e&&e.includes(On.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+On.sep+"`")}function bl(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function am(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function jR(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const FR=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},OR={}.hasOwnProperty;class Uf extends FR{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=kR()}copy(){const n=new Uf;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(Pl(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Rl("data",this.frozen),this.namespace[n]=t,this):OR.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Rl("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Qo(n),r=this.parser||this.Parser;return Dl("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Dl("process",this.parser||this.Parser),Il("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(o,s){const a=Qo(n),l=r.parse(a);r.run(l,a,function(f,c,h){if(f||!c||!h)return u(f);const d=c,p=r.stringify(d,h);BR(p)?h.value=p:h.result=p,u(f,h)});function u(f,c){f||!c?s(f):o?o(c):t(void 0,c)}}}processSync(n){let t=!1,r;return this.freeze(),Dl("processSync",this.parser||this.Parser),Il("processSync",this.compiler||this.Compiler),this.process(n,i),um("processSync","process",t),r;function i(o,s){t=!0,em(o),r=s}}run(n,t,r){lm(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?o(void 0,r):new Promise(o);function o(s,a){const l=Qo(t);i.run(n,l,u);function u(f,c,h){const d=c||n;f?a(f):s?s(d):r(void 0,d,h)}}}runSync(n,t){let r=!1,i;return this.run(n,t,o),um("runSync","run",r),i;function o(s,a){em(s),i=a,r=!0}}stringify(n,t){this.freeze();const r=Qo(t),i=this.compiler||this.Compiler;return Il("stringify",i),lm(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(Rl("use",this.frozen),n!=null)if(typeof n=="function")l(n,t);else if(typeof n=="object")Array.isArray(n)?a(n):s(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function o(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[f,...c]=u;l(f,c)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=Pl(!0,i.settings,u.settings))}function a(u){let f=-1;if(u!=null)if(Array.isArray(u))for(;++f<u.length;){const c=u[f];o(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,f){let c=-1,h=-1;for(;++c<r.length;)if(r[c][0]===u){h=c;break}if(h===-1)r.push([u,...f]);else if(f.length>0){let[d,...p]=f;const x=r[h][1];ic(x)&&ic(d)&&(d=Pl(!0,x,d)),r[h]=[u,d,...p]}}}}const zR=new Uf().freeze();function Dl(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Il(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Rl(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function lm(e){if(!ic(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function um(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Qo(e){return _R(e)?e:new J1(e)}function _R(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function BR(e){return typeof e=="string"||WR(e)}function WR(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const UR="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",cm=[],fm={allowDangerousHtml:!0},HR=/^(https?|ircs?|mailto|xmpp)$/i,$R=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function GR(e){const n=qR(e),t=KR(e);return QR(n.runSync(n.parse(t),t),e)}function qR(e){const n=e.rehypePlugins||cm,t=e.remarkPlugins||cm,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...fm}:fm;return zR().use(bI).use(t).use(wR,r).use(n)}function KR(e){const n=e.children||"",t=new J1;return typeof n=="string"&&(t.value=n),t}function QR(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,o=n.disallowedElements,s=n.skipHtml,a=n.unwrapDisallowed,l=n.urlTransform||XR;for(const f of $R)Object.hasOwn(n,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+UR+f.id,void 0);return Wf(e,u),fb(e,{Fragment:m.Fragment,components:i,ignoreInvalidStyle:!0,jsx:m.jsx,jsxs:m.jsxs,passKeys:!0,passNode:!0});function u(f,c,h){if(f.type==="raw"&&h&&typeof c=="number")return s?h.children.splice(c,1):h.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let d;for(d in wl)if(Object.hasOwn(wl,d)&&Object.hasOwn(f.properties,d)){const p=f.properties[d],x=wl[d];(x===null||x.includes(f.tagName))&&(f.properties[d]=l(String(p||""),d,f))}}if(f.type==="element"){let d=t?!t.includes(f.tagName):o?o.includes(f.tagName):!1;if(!d&&r&&typeof c=="number"&&(d=!r(f,c,h)),d&&h&&typeof c=="number")return a&&f.children?h.children.splice(c,1,...f.children):h.children.splice(c,1),c}}}function XR(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||HR.test(e.slice(0,n))?e:""}function hm(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}function YR(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function ZR(e,n,t){const i=Va((t||{}).ignore||[]),o=JR(n);let s=-1;for(;++s<o.length;)Y1(e,"text",a);function a(u,f){let c=-1,h;for(;++c<f.length;){const d=f[c],p=h?h.children:void 0;if(i(d,p?p.indexOf(d):void 0,h))return;h=d}if(h)return l(u,f)}function l(u,f){const c=f[f.length-1],h=o[s][0],d=o[s][1];let p=0;const C=c.children.indexOf(u);let g=!1,y=[];h.lastIndex=0;let v=h.exec(u.value);for(;v;){const w=v.index,T={index:v.index,input:v.input,stack:[...f,u]};let k=d(...v,T);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===!1?h.lastIndex=w+1:(p!==w&&y.push({type:"text",value:u.value.slice(p,w)}),Array.isArray(k)?y.push(...k):k&&y.push(k),p=w+v[0].length,g=!0),!h.global)break;v=h.exec(u.value)}return g?(p<u.value.length&&y.push({type:"text",value:u.value.slice(p)}),c.children.splice(C,1,...y)):y=[u],C+y.length}}function JR(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([eV(i[0]),nV(i[1])])}return n}function eV(e){return typeof e=="string"?new RegExp(YR(e),"g"):e}function nV(e){return typeof e=="function"?e:function(){return e}}const Vl="phrasing",Nl=["autolink","link","image","label"];function tV(){return{transforms:[uV],enter:{literalAutolink:iV,literalAutolinkEmail:Ml,literalAutolinkHttp:Ml,literalAutolinkWww:Ml},exit:{literalAutolink:lV,literalAutolinkEmail:aV,literalAutolinkHttp:oV,literalAutolinkWww:sV}}}function rV(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Vl,notInConstruct:Nl},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Vl,notInConstruct:Nl},{character:":",before:"[ps]",after:"\\/",inConstruct:Vl,notInConstruct:Nl}]}}function iV(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Ml(e){this.config.enter.autolinkProtocol.call(this,e)}function oV(e){this.config.exit.autolinkProtocol.call(this,e)}function sV(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function aV(e){this.config.exit.autolinkEmail.call(this,e)}function lV(e){this.exit(e)}function uV(e){ZR(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,cV],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),fV]],{ignore:["link","linkReference"]})}function cV(e,n,t,r,i){let o="";if(!ev(i)||(/^w/i.test(n)&&(t=n+t,n="",o="http://"),!hV(t)))return!1;const s=dV(t+r);if(!s[0])return!1;const a={type:"link",title:null,url:o+n+s[0],children:[{type:"text",value:n+s[0]}]};return s[1]?[a,{type:"text",value:s[1]}]:a}function fV(e,n,t,r){return!ev(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function hV(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function dV(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=hm(e,"(");let o=hm(e,")");for(;r!==-1&&i>o;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),o++;return[e,t]}function ev(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||ar(t)||Da(t))&&(!n||t!==47)}nv.peek=wV;function pV(){this.buffer()}function mV(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function gV(){this.buffer()}function yV(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function vV(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=Vn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function xV(e){this.exit(e)}function SV(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=Vn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function CV(e){this.exit(e)}function wV(){return"["}function nv(e,n,t,r){const i=t.createTracker(r);let o=i.move("[^");const s=t.enter("footnoteReference"),a=t.enter("reference");return o+=i.move(t.safe(t.associationId(e),{after:"]",before:o})),a(),s(),o+=i.move("]"),o}function EV(){return{enter:{gfmFootnoteCallString:pV,gfmFootnoteCall:mV,gfmFootnoteDefinitionLabelString:gV,gfmFootnoteDefinition:yV},exit:{gfmFootnoteCallString:vV,gfmFootnoteCall:xV,gfmFootnoteDefinitionLabelString:SV,gfmFootnoteDefinition:CV}}}function kV(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:nv},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,o,s){const a=o.createTracker(s);let l=a.move("[^");const u=o.enter("footnoteDefinition"),f=o.enter("label");return l+=a.move(o.safe(o.associationId(r),{before:l,after:"]"})),f(),l+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),l+=a.move((n?`
`:" ")+o.indentLines(o.containerFlow(r,a.current()),n?tv:PV))),u(),l}}function PV(e,n,t){return n===0?e:tv(e,n,t)}function tv(e,n,t){return(t?"":"    ")+e}const TV=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];rv.peek=RV;function AV(){return{canContainEols:["delete"],enter:{strikethrough:DV},exit:{strikethrough:IV}}}function bV(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:TV}],handlers:{delete:rv}}}function DV(e){this.enter({type:"delete",children:[]},e)}function IV(e){this.exit(e)}function rv(e,n,t,r){const i=t.createTracker(r),o=t.enter("strikethrough");let s=i.move("~~");return s+=t.containerPhrasing(e,{...i.current(),before:s,after:"~"}),s+=i.move("~~"),o(),s}function RV(){return"~"}function VV(e){return e.length}function NV(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||VV,o=[],s=[],a=[],l=[];let u=0,f=-1;for(;++f<e.length;){const x=[],C=[];let g=-1;for(e[f].length>u&&(u=e[f].length);++g<e[f].length;){const y=MV(e[f][g]);if(t.alignDelimiters!==!1){const v=i(y);C[g]=v,(l[g]===void 0||v>l[g])&&(l[g]=v)}x.push(y)}s[f]=x,a[f]=C}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)o[c]=dm(r[c]);else{const x=dm(r);for(;++c<u;)o[c]=x}c=-1;const h=[],d=[];for(;++c<u;){const x=o[c];let C="",g="";x===99?(C=":",g=":"):x===108?C=":":x===114&&(g=":");let y=t.alignDelimiters===!1?1:Math.max(1,l[c]-C.length-g.length);const v=C+"-".repeat(y)+g;t.alignDelimiters!==!1&&(y=C.length+y+g.length,y>l[c]&&(l[c]=y),d[c]=y),h[c]=v}s.splice(1,0,h),a.splice(1,0,d),f=-1;const p=[];for(;++f<s.length;){const x=s[f],C=a[f];c=-1;const g=[];for(;++c<u;){const y=x[c]||"";let v="",w="";if(t.alignDelimiters!==!1){const T=l[c]-(C[c]||0),k=o[c];k===114?v=" ".repeat(T):k===99?T%2?(v=" ".repeat(T/2+.5),w=" ".repeat(T/2-.5)):(v=" ".repeat(T/2),w=v):w=" ".repeat(T)}t.delimiterStart!==!1&&!c&&g.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&y==="")&&(t.delimiterStart!==!1||c)&&g.push(" "),t.alignDelimiters!==!1&&g.push(v),g.push(y),t.alignDelimiters!==!1&&g.push(w),t.padding!==!1&&g.push(" "),(t.delimiterEnd!==!1||c!==u-1)&&g.push("|")}p.push(t.delimiterEnd===!1?g.join("").replace(/ +$/,""):g.join(""))}return p.join(`
`)}function MV(e){return e==null?"":String(e)}function dm(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function LV(e,n,t,r){const i=t.enter("blockquote"),o=t.createTracker(r);o.move("> "),o.shift(2);const s=t.indentLines(t.containerFlow(e,o.current()),jV);return i(),s}function jV(e,n,t){return">"+(t?"":" ")+e}function FV(e,n){return pm(e,n.inConstruct,!0)&&!pm(e,n.notInConstruct,!1)}function pm(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function mm(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;)if(t.unsafe[i].character===`
`&&FV(t.stack,t.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function OV(e,n){const t=String(e);let r=t.indexOf(n),i=r,o=0,s=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>s&&(s=o):o=1,i=r+n.length,r=t.indexOf(n,i);return s}function zV(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function _V(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function BV(e,n,t,r){const i=_V(t),o=e.value||"",s=i==="`"?"GraveAccent":"Tilde";if(zV(e,t)){const c=t.enter("codeIndented"),h=t.indentLines(o,WV);return c(),h}const a=t.createTracker(r),l=i.repeat(Math.max(OV(o,i)+1,3)),u=t.enter("codeFenced");let f=a.move(l);if(e.lang){const c=t.enter(`codeFencedLang${s}`);f+=a.move(t.safe(e.lang,{before:f,after:" ",encode:["`"],...a.current()})),c()}if(e.lang&&e.meta){const c=t.enter(`codeFencedMeta${s}`);f+=a.move(" "),f+=a.move(t.safe(e.meta,{before:f,after:`
`,encode:["`"],...a.current()})),c()}return f+=a.move(`
`),o&&(f+=a.move(o+`
`)),f+=a.move(l),u(),f}function WV(e,n,t){return(t?"":"    ")+e}function Hf(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function UV(e,n,t,r){const i=Hf(t),o=i==='"'?"Quote":"Apostrophe",s=t.enter("definition");let a=t.enter("label");const l=t.createTracker(r);let u=l.move("[");return u+=l.move(t.safe(t.associationId(e),{before:u,after:"]",...l.current()})),u+=l.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=t.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(t.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=t.enter("destinationRaw"),u+=l.move(t.safe(e.url,{before:u,after:e.title?" ":`
`,...l.current()}))),a(),e.title&&(a=t.enter(`title${o}`),u+=l.move(" "+i),u+=l.move(t.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),a()),s(),u}function HV(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function ho(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Js(e,n,t){const r=Jr(e),i=Jr(n);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}iv.peek=$V;function iv(e,n,t,r){const i=HV(t),o=t.enter("emphasis"),s=t.createTracker(r),a=s.move(i);let l=s.move(t.containerPhrasing(e,{after:i,before:a,...s.current()}));const u=l.charCodeAt(0),f=Js(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(l=ho(u)+l.slice(1));const c=l.charCodeAt(l.length-1),h=Js(r.after.charCodeAt(0),c,i);h.inside&&(l=l.slice(0,-1)+ho(c));const d=s.move(i);return o(),t.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},a+l+d}function $V(e,n,t){return t.options.emphasis||"*"}function GV(e,n){let t=!1;return Wf(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,tc}),!!((!e.depth||e.depth<3)&&Lf(e)&&(n.options.setext||t))}function qV(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),o=t.createTracker(r);if(GV(e,t)){const f=t.enter("headingSetext"),c=t.enter("phrasing"),h=t.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return c(),f(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const s="#".repeat(i),a=t.enter("headingAtx"),l=t.enter("phrasing");o.move(s+" ");let u=t.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(u)&&(u=ho(u.charCodeAt(0))+u.slice(1)),u=u?s+" "+u:s,t.options.closeAtx&&(u+=" "+s),l(),a(),u}ov.peek=KV;function ov(e){return e.value||""}function KV(){return"<"}sv.peek=QV;function sv(e,n,t,r){const i=Hf(t),o=i==='"'?"Quote":"Apostrophe",s=t.enter("image");let a=t.enter("label");const l=t.createTracker(r);let u=l.move("![");return u+=l.move(t.safe(e.alt,{before:u,after:"]",...l.current()})),u+=l.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=t.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(t.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(a=t.enter("destinationRaw"),u+=l.move(t.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),a(),e.title&&(a=t.enter(`title${o}`),u+=l.move(" "+i),u+=l.move(t.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),a()),u+=l.move(")"),s(),u}function QV(){return"!"}av.peek=XV;function av(e,n,t,r){const i=e.referenceType,o=t.enter("imageReference");let s=t.enter("label");const a=t.createTracker(r);let l=a.move("![");const u=t.safe(e.alt,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),s();const f=t.stack;t.stack=[],s=t.enter("reference");const c=t.safe(t.associationId(e),{before:l,after:"]",...a.current()});return s(),t.stack=f,o(),i==="full"||!u||u!==c?l+=a.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function XV(){return"!"}lv.peek=YV;function lv(e,n,t){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<t.unsafe.length;){const s=t.unsafe[o],a=t.compilePattern(s);let l;if(s.atBreak)for(;l=a.exec(r);){let u=l.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(l.index+1)}}return i+r+i}function YV(){return"`"}function uv(e,n){const t=Lf(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}cv.peek=ZV;function cv(e,n,t,r){const i=Hf(t),o=i==='"'?"Quote":"Apostrophe",s=t.createTracker(r);let a,l;if(uv(e,t)){const f=t.stack;t.stack=[],a=t.enter("autolink");let c=s.move("<");return c+=s.move(t.containerPhrasing(e,{before:c,after:">",...s.current()})),c+=s.move(">"),a(),t.stack=f,c}a=t.enter("link"),l=t.enter("label");let u=s.move("[");return u+=s.move(t.containerPhrasing(e,{before:u,after:"](",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=t.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(t.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=t.enter("destinationRaw"),u+=s.move(t.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=t.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(t.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),l()),u+=s.move(")"),a(),u}function ZV(e,n,t){return uv(e,t)?"<":"["}fv.peek=JV;function fv(e,n,t,r){const i=e.referenceType,o=t.enter("linkReference");let s=t.enter("label");const a=t.createTracker(r);let l=a.move("[");const u=t.containerPhrasing(e,{before:l,after:"]",...a.current()});l+=a.move(u+"]["),s();const f=t.stack;t.stack=[],s=t.enter("reference");const c=t.safe(t.associationId(e),{before:l,after:"]",...a.current()});return s(),t.stack=f,o(),i==="full"||!u||u!==c?l+=a.move(c+"]"):i==="shortcut"?l=l.slice(0,-1):l+=a.move("]"),l}function JV(){return"["}function $f(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function eN(e){const n=$f(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function nN(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function hv(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function tN(e,n,t,r){const i=t.enter("list"),o=t.bulletCurrent;let s=e.ordered?nN(t):$f(t);const a=e.ordered?s==="."?")":".":eN(t);let l=n&&t.bulletLastUsed?s===t.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((s==="*"||s==="-")&&f&&(!f.children||!f.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(l=!0),hv(t)===s&&f){let c=-1;for(;++c<e.children.length;){const h=e.children[c];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(s=a),t.bulletCurrent=s;const u=t.containerFlow(e,r);return t.bulletLastUsed=s,t.bulletCurrent=o,i(),u}function rN(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function iN(e,n,t,r){const i=rN(t);let o=t.bulletCurrent||$f(t);n&&n.type==="list"&&n.ordered&&(o=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+o);let s=o.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(s=Math.ceil(s/4)*4);const a=t.createTracker(r);a.move(o+" ".repeat(s-o.length)),a.shift(s);const l=t.enter("listItem"),u=t.indentLines(t.containerFlow(e,a.current()),f);return l(),u;function f(c,h,d){return h?(d?"":" ".repeat(s))+c:(d?o:o+" ".repeat(s-o.length))+c}}function oN(e,n,t,r){const i=t.enter("paragraph"),o=t.enter("phrasing"),s=t.containerPhrasing(e,r);return o(),i(),s}const sN=Va(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function aN(e,n,t,r){return(e.children.some(function(s){return sN(s)})?t.containerPhrasing:t.containerFlow).call(t,e,r)}function lN(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}dv.peek=uN;function dv(e,n,t,r){const i=lN(t),o=t.enter("strong"),s=t.createTracker(r),a=s.move(i+i);let l=s.move(t.containerPhrasing(e,{after:i,before:a,...s.current()}));const u=l.charCodeAt(0),f=Js(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(l=ho(u)+l.slice(1));const c=l.charCodeAt(l.length-1),h=Js(r.after.charCodeAt(0),c,i);h.inside&&(l=l.slice(0,-1)+ho(c));const d=s.move(i+i);return o(),t.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},a+l+d}function uN(e,n,t){return t.options.strong||"*"}function cN(e,n,t,r){return t.safe(e.value,r)}function fN(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function hN(e,n,t){const r=(hv(t)+(t.options.ruleSpaces?" ":"")).repeat(fN(t));return t.options.ruleSpaces?r.slice(0,-1):r}const pv={blockquote:LV,break:mm,code:BV,definition:UV,emphasis:iv,hardBreak:mm,heading:qV,html:ov,image:sv,imageReference:av,inlineCode:lv,link:cv,linkReference:fv,list:tN,listItem:iN,paragraph:oN,root:aN,strong:dv,text:cN,thematicBreak:hN};function dN(){return{enter:{table:pN,tableData:gm,tableHeader:gm,tableRow:gN},exit:{codeText:yN,table:mN,tableData:Ll,tableHeader:Ll,tableRow:Ll}}}function pN(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function mN(e){this.exit(e),this.data.inTable=void 0}function gN(e){this.enter({type:"tableRow",children:[]},e)}function Ll(e){this.exit(e)}function gm(e){this.enter({type:"tableCell",children:[]},e)}function yN(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,vN));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function vN(e,n){return n==="|"?n:e}function xN(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,o=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:s,tableCell:l,tableRow:a}};function s(d,p,x,C){return u(f(d,x,C),d.align)}function a(d,p,x,C){const g=c(d,x,C),y=u([g]);return y.slice(0,y.indexOf(`
`))}function l(d,p,x,C){const g=x.enter("tableCell"),y=x.enter("phrasing"),v=x.containerPhrasing(d,{...C,before:o,after:o});return y(),g(),v}function u(d,p){return NV(d,{align:p,alignDelimiters:r,padding:t,stringLength:i})}function f(d,p,x){const C=d.children;let g=-1;const y=[],v=p.enter("table");for(;++g<C.length;)y[g]=c(C[g],p,x);return v(),y}function c(d,p,x){const C=d.children;let g=-1;const y=[],v=p.enter("tableRow");for(;++g<C.length;)y[g]=l(C[g],d,p,x);return v(),y}function h(d,p,x){let C=pv.inlineCode(d,p,x);return x.stack.includes("tableCell")&&(C=C.replace(/\|/g,"\\$&")),C}}function SN(){return{exit:{taskListCheckValueChecked:ym,taskListCheckValueUnchecked:ym,paragraph:wN}}}function CN(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:EN}}}function ym(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function wN(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let o=-1,s;for(;++o<i.length;){const a=i[o];if(a.type==="paragraph"){s=a;break}}s===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function EN(e,n,t,r){const i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",s="["+(e.checked?"x":" ")+"] ",a=t.createTracker(r);o&&a.move(s);let l=pv.listItem(e,n,t,{...r,...a.current()});return o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),l;function u(f){return f+s}}function kN(){return[tV(),EV(),AV(),dN(),SN()]}function PN(e){return{extensions:[rV(),kV(e),bV(),xN(e),CN()]}}const TN={tokenize:VN,partial:!0},mv={tokenize:NN,partial:!0},gv={tokenize:MN,partial:!0},yv={tokenize:LN,partial:!0},AN={tokenize:jN,partial:!0},vv={name:"wwwAutolink",tokenize:IN,previous:Sv},xv={name:"protocolAutolink",tokenize:RN,previous:Cv},lt={name:"emailAutolink",tokenize:DN,previous:wv},Un={};function bN(){return{text:Un}}let Wt=48;for(;Wt<123;)Un[Wt]=lt,Wt++,Wt===58?Wt=65:Wt===91&&(Wt=97);Un[43]=lt;Un[45]=lt;Un[46]=lt;Un[95]=lt;Un[72]=[lt,xv];Un[104]=[lt,xv];Un[87]=[lt,vv];Un[119]=[lt,vv];function DN(e,n,t){const r=this;let i,o;return s;function s(c){return!sc(c)||!wv.call(r,r.previous)||Gf(r.events)?t(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(c))}function a(c){return sc(c)?(e.consume(c),a):c===64?(e.consume(c),l):t(c)}function l(c){return c===46?e.check(AN,f,u)(c):c===45||c===95||je(c)?(o=!0,e.consume(c),l):f(c)}function u(c){return e.consume(c),i=!0,l}function f(c){return o&&i&&We(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(c)):t(c)}}function IN(e,n,t){const r=this;return i;function i(s){return s!==87&&s!==119||!Sv.call(r,r.previous)||Gf(r.events)?t(s):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(TN,e.attempt(mv,e.attempt(gv,o),t),t)(s))}function o(s){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(s)}}function RN(e,n,t){const r=this;let i="",o=!1;return s;function s(c){return(c===72||c===104)&&Cv.call(r,r.previous)&&!Gf(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),a):t(c)}function a(c){if(We(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),a;if(c===58){const h=i.toLowerCase();if(h==="http"||h==="https")return e.consume(c),l}return t(c)}function l(c){return c===47?(e.consume(c),o?u:(o=!0,l)):t(c)}function u(c){return c===null||Xs(c)||oe(c)||ar(c)||Da(c)?t(c):e.attempt(mv,e.attempt(gv,f),t)(c)}function f(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(c)}}function VN(e,n,t){let r=0;return i;function i(s){return(s===87||s===119)&&r<3?(r++,e.consume(s),i):s===46&&r===3?(e.consume(s),o):t(s)}function o(s){return s===null?t(s):n(s)}}function NN(e,n,t){let r,i,o;return s;function s(u){return u===46||u===95?e.check(yv,l,a)(u):u===null||oe(u)||ar(u)||u!==45&&Da(u)?l(u):(o=!0,e.consume(u),s)}function a(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),s}function l(u){return i||r||!o?t(u):n(u)}}function MN(e,n){let t=0,r=0;return i;function i(s){return s===40?(t++,e.consume(s),i):s===41&&r<t?o(s):s===33||s===34||s===38||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===60||s===63||s===93||s===95||s===126?e.check(yv,n,o)(s):s===null||oe(s)||ar(s)?n(s):(e.consume(s),i)}function o(s){return s===41&&r++,e.consume(s),i}}function LN(e,n,t){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),o):a===93?(e.consume(a),i):a===60||a===null||oe(a)||ar(a)?n(a):t(a)}function i(a){return a===null||a===40||a===91||oe(a)||ar(a)?n(a):r(a)}function o(a){return We(a)?s(a):t(a)}function s(a){return a===59?(e.consume(a),r):We(a)?(e.consume(a),s):t(a)}}function jN(e,n,t){return r;function r(o){return e.consume(o),i}function i(o){return je(o)?t(o):n(o)}}function Sv(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||oe(e)}function Cv(e){return!We(e)}function wv(e){return!(e===47||sc(e))}function sc(e){return e===43||e===45||e===46||e===95||je(e)}function Gf(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const FN={tokenize:$N,partial:!0};function ON(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:WN,continuation:{tokenize:UN},exit:HN}},text:{91:{name:"gfmFootnoteCall",tokenize:BN},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:zN,resolveTo:_N}}}}function zN(e,n,t){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){s=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return a;function a(l){if(!s||!s._balanced)return t(l);const u=Vn(r.sliceSerialize({start:s.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?t(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),n(l))}}function _N(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},s={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",o,n],["enter",s,n],["exit",s,n],["exit",o,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...a),e}function BN(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,s;return a;function a(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),l}function l(c){return c!==94?t(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!s||c===null||c===91||oe(c))return t(c);if(c===93){e.exit("chunkString");const h=e.exit("gfmFootnoteCallString");return i.includes(Vn(r.sliceSerialize(h)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(c)}return oe(c)||(s=!0),o++,e.consume(c),c===92?f:u}function f(c){return c===91||c===92||c===93?(e.consume(c),o++,u):u(c)}}function WN(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,s=0,a;return l;function l(p){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(p){return p===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):t(p)}function f(p){if(s>999||p===93&&!a||p===null||p===91||oe(p))return t(p);if(p===93){e.exit("chunkString");const x=e.exit("gfmFootnoteDefinitionLabelString");return o=Vn(r.sliceSerialize(x)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(p),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return oe(p)||(a=!0),s++,e.consume(p),p===92?c:f}function c(p){return p===91||p===92||p===93?(e.consume(p),s++,f):f(p)}function h(p){return p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),i.includes(o)||i.push(o),J(e,d,"gfmFootnoteDefinitionWhitespace")):t(p)}function d(p){return n(p)}}function UN(e,n,t){return e.check(ko,n,e.attempt(FN,n,t))}function HN(e){e.exit("gfmFootnoteDefinition")}function $N(e,n,t){const r=this;return J(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="gfmFootnoteDefinitionIndent"&&s[2].sliceSerialize(s[1],!0).length===4?n(o):t(o)}}function GN(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(s,a){let l=-1;for(;++l<s.length;)if(s[l][0]==="enter"&&s[l][1].type==="strikethroughSequenceTemporary"&&s[l][1]._close){let u=l;for(;u--;)if(s[u][0]==="exit"&&s[u][1].type==="strikethroughSequenceTemporary"&&s[u][1]._open&&s[l][1].end.offset-s[l][1].start.offset===s[u][1].end.offset-s[u][1].start.offset){s[l][1].type="strikethroughSequence",s[u][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},s[u][1].start),end:Object.assign({},s[l][1].end)},c={type:"strikethroughText",start:Object.assign({},s[u][1].end),end:Object.assign({},s[l][1].start)},h=[["enter",f,a],["enter",s[u][1],a],["exit",s[u][1],a],["enter",c,a]],d=a.parser.constructs.insideSpan.null;d&&ln(h,h.length,0,Ia(d,s.slice(u+1,l),a)),ln(h,h.length,0,[["exit",c,a],["enter",s[l][1],a],["exit",s[l][1],a],["exit",f,a]]),ln(s,u-1,l-u+3,h),l=u+h.length-2;break}}for(l=-1;++l<s.length;)s[l][1].type==="strikethroughSequenceTemporary"&&(s[l][1].type="data");return s}function o(s,a,l){const u=this.previous,f=this.events;let c=0;return h;function h(p){return u===126&&f[f.length-1][1].type!=="characterEscape"?l(p):(s.enter("strikethroughSequenceTemporary"),d(p))}function d(p){const x=Jr(u);if(p===126)return c>1?l(p):(s.consume(p),c++,d);if(c<2&&!t)return l(p);const C=s.exit("strikethroughSequenceTemporary"),g=Jr(p);return C._open=!g||g===2&&!!x,C._close=!x||x===2&&!!g,a(p)}}}class qN{constructor(){this.map=[]}add(n,t,r){KN(this,n,t,r)}consume(n){if(this.map.sort(function(o,s){return o[0]-s[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const o of i)n.push(o);i=r.pop()}this.map.length=0}}function KN(e,n,t,r){let i=0;if(!(t===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===n){e.map[i][1]+=t,e.map[i][2].push(...r);return}i+=1}e.map.push([n,t,r])}}function QN(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function XN(){return{flow:{null:{name:"table",tokenize:YN,resolveAll:ZN}}}}function YN(e,n,t){const r=this;let i=0,o=0,s;return a;function a(P){let j=r.events.length-1;for(;j>-1;){const $=r.events[j][1].type;if($==="lineEnding"||$==="linePrefix")j--;else break}const F=j>-1?r.events[j][1].type:null,U=F==="tableHead"||F==="tableRow"?k:l;return U===k&&r.parser.lazy[r.now().line]?t(P):U(P)}function l(P){return e.enter("tableHead"),e.enter("tableRow"),u(P)}function u(P){return P===124||(s=!0,o+=1),f(P)}function f(P){return P===null?t(P):B(P)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),d):t(P):Q(P)?J(e,f,"whitespace")(P):(o+=1,s&&(s=!1,i+=1),P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),s=!0,f):(e.enter("data"),c(P)))}function c(P){return P===null||P===124||oe(P)?(e.exit("data"),f(P)):(e.consume(P),P===92?h:c)}function h(P){return P===92||P===124?(e.consume(P),c):c(P)}function d(P){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(P):(e.enter("tableDelimiterRow"),s=!1,Q(P)?J(e,p,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):p(P))}function p(P){return P===45||P===58?C(P):P===124?(s=!0,e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),x):T(P)}function x(P){return Q(P)?J(e,C,"whitespace")(P):C(P)}function C(P){return P===58?(o+=1,s=!0,e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),g):P===45?(o+=1,g(P)):P===null||B(P)?w(P):T(P)}function g(P){return P===45?(e.enter("tableDelimiterFiller"),y(P)):T(P)}function y(P){return P===45?(e.consume(P),y):P===58?(s=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(P),e.exit("tableDelimiterMarker"),v):(e.exit("tableDelimiterFiller"),v(P))}function v(P){return Q(P)?J(e,w,"whitespace")(P):w(P)}function w(P){return P===124?p(P):P===null||B(P)?!s||i!==o?T(P):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(P)):T(P)}function T(P){return t(P)}function k(P){return e.enter("tableRow"),D(P)}function D(P){return P===124?(e.enter("tableCellDivider"),e.consume(P),e.exit("tableCellDivider"),D):P===null||B(P)?(e.exit("tableRow"),n(P)):Q(P)?J(e,D,"whitespace")(P):(e.enter("data"),b(P))}function b(P){return P===null||P===124||oe(P)?(e.exit("data"),D(P)):(e.consume(P),P===92?L:b)}function L(P){return P===92||P===124?(e.consume(P),b):b(P)}}function ZN(e,n){let t=-1,r=!0,i=0,o=[0,0,0,0],s=[0,0,0,0],a=!1,l=0,u,f,c;const h=new qN;for(;++t<e.length;){const d=e[t],p=d[1];d[0]==="enter"?p.type==="tableHead"?(a=!1,l!==0&&(vm(h,n,l,u,f),f=void 0,l=0),u={type:"table",start:Object.assign({},p.start),end:Object.assign({},p.end)},h.add(t,0,[["enter",u,n]])):p.type==="tableRow"||p.type==="tableDelimiterRow"?(r=!0,c=void 0,o=[0,0,0,0],s=[0,t+1,0,0],a&&(a=!1,f={type:"tableBody",start:Object.assign({},p.start),end:Object.assign({},p.end)},h.add(t,0,[["enter",f,n]])),i=p.type==="tableDelimiterRow"?2:f?3:1):i&&(p.type==="data"||p.type==="tableDelimiterMarker"||p.type==="tableDelimiterFiller")?(r=!1,s[2]===0&&(o[1]!==0&&(s[0]=s[1],c=Xo(h,n,o,i,void 0,c),o=[0,0,0,0]),s[2]=t)):p.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(s[0]=s[1],c=Xo(h,n,o,i,void 0,c)),o=s,s=[o[1],t,0,0])):p.type==="tableHead"?(a=!0,l=t):p.type==="tableRow"||p.type==="tableDelimiterRow"?(l=t,o[1]!==0?(s[0]=s[1],c=Xo(h,n,o,i,t,c)):s[1]!==0&&(c=Xo(h,n,s,i,t,c)),i=0):i&&(p.type==="data"||p.type==="tableDelimiterMarker"||p.type==="tableDelimiterFiller")&&(s[3]=t)}for(l!==0&&vm(h,n,l,u,f),h.consume(n.events),t=-1;++t<n.events.length;){const d=n.events[t];d[0]==="enter"&&d[1].type==="table"&&(d[1]._align=QN(n.events,t))}return e}function Xo(e,n,t,r,i,o){const s=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",a="tableContent";t[0]!==0&&(o.end=Object.assign({},yr(n.events,t[0])),e.add(t[0],0,[["exit",o,n]]));const l=yr(n.events,t[1]);if(o={type:s,start:Object.assign({},l),end:Object.assign({},l)},e.add(t[1],0,[["enter",o,n]]),t[2]!==0){const u=yr(n.events,t[2]),f=yr(n.events,t[3]),c={type:a,start:Object.assign({},u),end:Object.assign({},f)};if(e.add(t[2],0,[["enter",c,n]]),r!==2){const h=n.events[t[2]],d=n.events[t[3]];if(h[1].end=Object.assign({},d[1].end),h[1].type="chunkText",h[1].contentType="text",t[3]>t[2]+1){const p=t[2]+1,x=t[3]-t[2]-1;e.add(p,x,[])}}e.add(t[3]+1,0,[["exit",c,n]])}return i!==void 0&&(o.end=Object.assign({},yr(n.events,i)),e.add(i,0,[["exit",o,n]]),o=void 0),o}function vm(e,n,t,r,i){const o=[],s=yr(n.events,t);i&&(i.end=Object.assign({},s),o.push(["exit",i,n])),r.end=Object.assign({},s),o.push(["exit",r,n]),e.add(t+1,0,o)}function yr(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const JN={name:"tasklistCheck",tokenize:n3};function e3(){return{text:{91:JN}}}function n3(e,n,t){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),o)}function o(l){return oe(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),s):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),s):t(l)}function s(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):t(l)}function a(l){return B(l)?n(l):Q(l)?e.check({tokenize:t3},n,t)(l):t(l)}}function t3(e,n,t){return J(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function r3(e){return V1([bN(),ON(),GN(e),XN(),e3()])}const i3={};function o3(e){const n=this,t=e||i3,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),s=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(r3(t)),o.push(kN()),s.push(PN(t))}const s3=new Set(["http:","https:","mailto:","tel:"]),a3=new Set(["http:","https:"]);function xm(e,n){const t=String(e??"").trim();if(!t||/[\u0000-\u001F\u007F]/.test(t))return!1;if(t.startsWith("#")||t.startsWith("/")&&!t.startsWith("//"))return!0;try{return n.has(new URL(t).protocol)}catch{return!1}}function l3({children:e}){return m.jsx(GR,{remarkPlugins:[o3],skipHtml:!0,components:{a:({node:n,href:t,children:r,...i})=>xm(t,s3)?m.jsx("a",{...i,href:t,target:"_blank",rel:"noopener noreferrer",className:"text-[#7dd3fc] underline decoration-[#7dd3fc4d] underline-offset-4 transition hover:text-[#bae6fd] hover:decoration-[#7dd3fc]",children:r}):m.jsx("span",{className:"text-zinc-300",children:r}),img:({node:n,src:t,alt:r="",...i})=>xm(t,a3)?m.jsx("img",{...i,src:t,alt:r,loading:"lazy",className:"my-5 max-h-[560px] w-auto max-w-full rounded-lg border border-white/10"}):null},children:e})}function u3(){const{slug:e}=VC(),n=zi.find(a=>a.slug===e),[t,r]=A.useState(()=>n??null),[i,o]=A.useState(!1);if(A.useEffect(()=>{o(!1),r(n??null),oA(e).then(r).catch(()=>{n||o(!0)})},[n,e]),i)return m.jsx(Vu,{to:"/blog",replace:!0});if(!t)return m.jsx("div",{className:"glass-card",children:"Loading article..."});const s=[...zi.filter(a=>a.slug!==t.slug&&a.categorySlug===t.categorySlug),...zi.filter(a=>a.slug!==t.slug&&a.categorySlug!==t.categorySlug)].slice(0,3);return m.jsxs("section",{className:"space-y-8",children:[m.jsxs(Qr,{to:"/blog",className:"terminal-button terminal-button--ghost w-fit",children:[m.jsx(fw,{className:"h-4 w-4"}),"back to blog"]}),m.jsxs("div",{className:"grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]",children:[m.jsxs("article",{className:"overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#041018f2] shadow-[0_24px_80px_rgba(0,0,0,0.5)]",children:[m.jsxs("div",{className:`blog-hero ${t.coverImage?"":"blog-hero--plain"}`,children:[t.coverImage&&m.jsx("img",{src:t.coverImage,alt:"",className:"absolute inset-0 h-full w-full object-cover",onError:a=>{a.currentTarget.hidden=!0}}),m.jsx("div",{className:"blog-hero__overlay"}),m.jsxs("div",{className:"blog-hero__content",children:[m.jsxs("div",{className:"flex flex-wrap gap-3 text-xs text-zinc-200",children:[m.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-[#f4d58d33] bg-[#f4d58d1a] px-3 py-1.5 text-[#fff1c7]",children:[m.jsx(dw,{className:"h-4 w-4"}),t.date]}),m.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-[#7dd3fc33] bg-[#7dd3fc14] px-3 py-1.5 text-[#d8fbff]",children:[m.jsx(Lu,{className:"h-4 w-4"}),t.category]}),m.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-zinc-100",children:[m.jsx(pw,{className:"h-4 w-4"}),t.readTime]})]}),m.jsxs("div",{className:"space-y-4",children:[m.jsx("p",{className:"mono text-xs uppercase tracking-[0.28em] text-[#7dd3fc]",children:"Personal archive / yearly log"}),m.jsx("h1",{className:"blog-hero__title",children:t.title}),m.jsx("p",{className:"max-w-3xl text-base leading-8 text-zinc-100/88 sm:text-lg",children:t.excerpt})]}),m.jsxs("div",{className:"grid gap-3 sm:grid-cols-3",children:[m.jsxs("div",{className:"blog-hero__stat",children:[m.jsx("span",{className:"blog-hero__stat-label",children:"Category"}),m.jsx("span",{className:"blog-hero__stat-value",children:t.category})]}),m.jsxs("div",{className:"blog-hero__stat",children:[m.jsx("span",{className:"blog-hero__stat-label",children:"Published"}),m.jsx("span",{className:"blog-hero__stat-value",children:t.date})]}),m.jsxs("div",{className:"blog-hero__stat",children:[m.jsx("span",{className:"blog-hero__stat-label",children:"Reading time"}),m.jsx("span",{className:"blog-hero__stat-value",children:t.readTime})]})]})]})]}),m.jsxs("div",{className:"space-y-8 p-6 sm:p-8 lg:p-10",children:[m.jsxs("div",{className:"blog-terminal-note",children:[m.jsx(sf,{className:"h-4 w-4 text-[#4ade80]"}),m.jsxs("span",{className:"mono text-xs text-zinc-400",children:["logbook://reflection/",t.slug]})]}),m.jsx("div",{className:"markdown-body markdown-body--feature",children:m.jsx(l3,{children:t.contentMarkdown})})]})]}),m.jsxs("aside",{className:"space-y-5",children:[m.jsx("div",{className:"glass-card",children:m.jsxs("div",{className:"glass-card__inner",children:[m.jsx("h2",{className:"text-xl font-semibold text-white",children:"近期文章"}),m.jsx("div",{className:"space-y-4",children:s.map(a=>m.jsxs(Qr,{to:`/blog/${a.slug}`,className:"block rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#4ade8050] hover:bg-[#4ade8008]",children:[m.jsx("p",{className:"mono text-[0.7rem] uppercase tracking-[0.2em] text-[#7dd3fc]",children:a.category}),m.jsx("h3",{className:"mt-2 font-semibold text-white",children:a.title}),m.jsx("p",{className:"mt-2 text-sm leading-6 text-zinc-400",children:a.excerpt})]},a.slug))})]})}),m.jsx("div",{className:"glass-card",children:m.jsxs("div",{className:"glass-card__inner",children:[m.jsx("h2",{className:"text-xl font-semibold text-white",children:"分類"}),m.jsx("ul",{className:"space-y-3",children:y1.map(a=>m.jsxs("li",{className:"flex items-center justify-between rounded-lg border border-[#4ade8024] bg-[#4ade8008] px-4 py-3",children:[m.jsxs("span",{className:"inline-flex items-center gap-2 text-sm text-zinc-200",children:[m.jsx(vw,{className:"h-4 w-4 text-[#4ade80]"}),a.name]}),m.jsx("span",{className:"mono text-xs text-zinc-400",children:a.count})]},a.slug))})]})})]})]}),m.jsx(pA,{postSlug:t.slug})]})}const jl="/cv/eric-chuang-cv.pdf";function c3(){return m.jsxs(m.Fragment,{children:[m.jsx(sr,{subtitle:"CV",title:"$ open ~/cv/eric-chuang.pdf",children:m.jsx("div",{className:"max-w-4xl space-y-4 text-base leading-8 text-zinc-300",children:m.jsx("p",{children:"這裡放的是我目前的履歷版本，方便直接預覽、下載，或用新分頁開啟。"})})}),m.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]",children:[m.jsx("section",{className:"glass-card overflow-hidden",children:m.jsxs("div",{className:"glass-card__inner",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[m.jsxs("div",{children:[m.jsx("p",{className:"mono text-xs uppercase tracking-[0.22em] text-[#7dd3fc]",children:"Resume Preview"}),m.jsx("h2",{className:"mt-2 text-2xl font-semibold text-white",children:"莊冠霖 / Eric Chuang"})]}),m.jsxs("div",{className:"flex flex-wrap gap-3",children:[m.jsxs("a",{href:jl,target:"_blank",rel:"noopener noreferrer",className:"terminal-button terminal-button--primary",children:[m.jsx(Xr,{className:"h-4 w-4"}),"open pdf"]}),m.jsxs("a",{href:jl,download:!0,className:"terminal-button terminal-button--ghost",children:[m.jsx($y,{className:"h-4 w-4"}),"download"]})]})]}),m.jsx("div",{className:"overflow-hidden rounded-2xl border border-[#4ade8020] bg-[#02070d]",children:m.jsx("iframe",{src:jl,title:"Eric CV PDF",className:"h-[72vh] min-h-[640px] w-full"})})]})}),m.jsx("aside",{className:"space-y-5",children:m.jsx("div",{className:"glass-card",children:m.jsxs("div",{className:"glass-card__inner",children:[m.jsx("p",{className:"mono text-xs uppercase tracking-[0.22em] text-[#7dd3fc]",children:"File Info"}),m.jsx("div",{className:"space-y-3 rounded-2xl border border-[#4ade8020] bg-[#4ade8008] p-4",children:m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl border border-[#4ade8020] bg-white/5 text-zinc-100",children:m.jsx(rf,{className:"h-5 w-5"})}),m.jsxs("div",{children:[m.jsx("p",{className:"font-semibold text-white",children:"eric-chuang-cv.pdf"}),m.jsx("p",{className:"text-sm text-zinc-400",children:"Portable resume file"})]})]})})]})})})]})]})}function f3(){return m.jsxs("div",{className:"relative min-h-screen overflow-x-hidden font-sans text-zinc-100 selection:bg-[#4ade8055] selection:text-white",children:[m.jsxs("div",{className:"pointer-events-none fixed inset-0 -z-10 overflow-hidden",children:[m.jsx("div",{className:"absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-[#4ade8010] blur-[120px]"}),m.jsx("div",{className:"absolute right-[-5rem] top-32 h-80 w-80 rounded-full bg-[#67e8f910] blur-[130px]"}),m.jsx("div",{className:"absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-[#4ade800e] blur-[140px]"})]}),m.jsx(Ew,{}),m.jsx(Sw,{}),m.jsx("main",{className:"mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-44",children:m.jsxs(KC,{children:[m.jsx(Tn,{path:"/",element:m.jsx(jP,{})}),m.jsx(Tn,{path:"/about",element:m.jsx(BP,{})}),m.jsx(Tn,{path:"/projects",element:m.jsx(zP,{})}),m.jsx(Tn,{path:"/articles",element:m.jsx(Vu,{to:"/blog",replace:!0})}),m.jsx(Tn,{path:"/blog",element:m.jsx(dA,{})}),m.jsx(Tn,{path:"/blog/admin",element:m.jsx(Vu,{to:"/blog",replace:!0})}),m.jsx(Tn,{path:"/blog/:slug",element:m.jsx(u3,{})}),m.jsx(Tn,{path:"/certifications",element:m.jsx(HP,{})}),m.jsx(Tn,{path:"/cv",element:m.jsx(c3,{})}),m.jsx(Tn,{path:"/contact",element:m.jsx(UP,{})})]})}),m.jsx(ww,{})]})}Fl.createRoot(document.getElementById("root")).render(m.jsx(ta.StrictMode,{children:m.jsx(tw,{children:m.jsx(f3,{})})}));
