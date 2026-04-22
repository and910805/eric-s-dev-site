function Ix(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function el(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wm={exports:{}},tl={},km={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),Mx=Symbol.for("react.portal"),Nx=Symbol.for("react.fragment"),Rx=Symbol.for("react.strict_mode"),Lx=Symbol.for("react.profiler"),jx=Symbol.for("react.provider"),Fx=Symbol.for("react.context"),Ox=Symbol.for("react.forward_ref"),zx=Symbol.for("react.suspense"),_x=Symbol.for("react.memo"),Vx=Symbol.for("react.lazy"),eh=Symbol.iterator;function Bx(e){return e===null||typeof e!="object"?null:(e=eh&&e[eh]||e["@@iterator"],typeof e=="function"?e:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pm=Object.assign,Cm={};function ei(e,t,n){this.props=e,this.context=t,this.refs=Cm,this.updater=n||Sm}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tm(){}Tm.prototype=ei.prototype;function lc(e,t,n){this.props=e,this.context=t,this.refs=Cm,this.updater=n||Sm}var ac=lc.prototype=new Tm;ac.constructor=lc;Pm(ac,ei.prototype);ac.isPureReactComponent=!0;var th=Array.isArray,bm=Object.prototype.hasOwnProperty,uc={current:null},Em={key:!0,ref:!0,__self:!0,__source:!0};function Dm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)bm.call(t,r)&&!Em.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ho,type:e,key:o,ref:s,props:i,_owner:uc.current}}function Ux(e,t){return{$$typeof:ho,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ho}function Hx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nh=/\/+/g;function Ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hx(""+e.key):t.toString(36)}function Xo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ho:case Mx:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ll(s,0):r,th(i)?(n="",e!=null&&(n=e.replace(nh,"$&/")+"/"),Xo(i,t,n,"",function(u){return u})):i!=null&&(cc(i)&&(i=Ux(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(nh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",th(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Ll(o,l);s+=Xo(o,t,n,a,i)}else if(a=Bx(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Ll(o,l++),s+=Xo(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function To(e,t,n){if(e==null)return e;var r=[],i=0;return Xo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function $x(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Yo={transition:null},Wx={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:uc};function Am(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:To,forEach:function(e,t,n){To(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return To(e,function(){t++}),t},toArray:function(e){return To(e,function(t){return t})||[]},only:function(e){if(!cc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=ei;X.Fragment=Nx;X.Profiler=Lx;X.PureComponent=lc;X.StrictMode=Rx;X.Suspense=zx;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;X.act=Am;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=uc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)bm.call(t,a)&&!Em.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ho,type:e.type,key:i,ref:o,props:r,_owner:s}};X.createContext=function(e){return e={$$typeof:Fx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jx,_context:e},e.Consumer=e};X.createElement=Dm;X.createFactory=function(e){var t=Dm.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:Ox,render:e}};X.isValidElement=cc;X.lazy=function(e){return{$$typeof:Vx,_payload:{_status:-1,_result:e},_init:$x}};X.memo=function(e,t){return{$$typeof:_x,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Yo.transition;Yo.transition={};try{e()}finally{Yo.transition=t}};X.unstable_act=Am;X.useCallback=function(e,t){return $e.current.useCallback(e,t)};X.useContext=function(e){return $e.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};X.useEffect=function(e,t){return $e.current.useEffect(e,t)};X.useId=function(){return $e.current.useId()};X.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return $e.current.useMemo(e,t)};X.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};X.useRef=function(e){return $e.current.useRef(e)};X.useState=function(e){return $e.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return $e.current.useTransition()};X.version="18.3.1";km.exports=X;var E=km.exports;const nl=el(E),Gx=Ix({__proto__:null,default:nl},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kx=E,qx=Symbol.for("react.element"),Qx=Symbol.for("react.fragment"),Xx=Object.prototype.hasOwnProperty,Yx=Kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zx={key:!0,ref:!0,__self:!0,__source:!0};function Im(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Xx.call(t,r)&&!Zx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:qx,type:e,key:o,ref:s,props:i,_owner:Yx.current}}tl.Fragment=Qx;tl.jsx=Im;tl.jsxs=Im;wm.exports=tl;var d=wm.exports,Oa={},Mm={exports:{}},ct={},Nm={exports:{}},Rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,_){var w=R.length;R.push(_);e:for(;0<w;){var V=w-1>>>1,Z=R[V];if(0<i(Z,_))R[V]=_,R[w]=Z,w=V;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var _=R[0],w=R.pop();if(w!==_){R[0]=w;e:for(var V=0,Z=R.length,P=Z>>>1;V<P;){var ye=2*(V+1)-1,Ge=R[ye],te=ye+1,tt=R[te];if(0>i(Ge,w))te<Z&&0>i(tt,Ge)?(R[V]=tt,R[te]=w,V=te):(R[V]=Ge,R[ye]=w,V=ye);else if(te<Z&&0>i(tt,w))R[V]=tt,R[te]=w,V=te;else break e}}return _}function i(R,_){var w=R.sortIndex-_.sortIndex;return w!==0?w:R.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],f=1,c=null,h=3,p=!1,m=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(R){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=R)r(u),_.sortIndex=_.expirationTime,t(a,_);else break;_=n(u)}}function S(R){if(v=!1,x(R),!m)if(n(a)!==null)m=!0,q(b);else{var _=n(u);_!==null&&ne(S,_.startTime-R)}}function b(R,_){m=!1,v&&(v=!1,g(D),D=-1),p=!0;var w=h;try{for(x(_),c=n(a);c!==null&&(!(c.expirationTime>_)||R&&!F());){var V=c.callback;if(typeof V=="function"){c.callback=null,h=c.priorityLevel;var Z=V(c.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?c.callback=Z:c===n(a)&&r(a),x(_)}else r(a);c=n(a)}if(c!==null)var P=!0;else{var ye=n(u);ye!==null&&ne(S,ye.startTime-_),P=!1}return P}finally{c=null,h=w,p=!1}}var C=!1,A=null,D=-1,j=5,T=-1;function F(){return!(e.unstable_now()-T<j)}function O(){if(A!==null){var R=e.unstable_now();T=R;var _=!0;try{_=A(!0,R)}finally{_?H():(C=!1,A=null)}}else C=!1}var H;if(typeof y=="function")H=function(){y(O)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,G=W.port2;W.port1.onmessage=O,H=function(){G.postMessage(null)}}else H=function(){k(O,0)};function q(R){A=R,C||(C=!0,H())}function ne(R,_){D=k(function(){R(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,q(b))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var w=h;h=_;try{return R()}finally{h=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,_){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var w=h;h=R;try{return _()}finally{h=w}},e.unstable_scheduleCallback=function(R,_,w){var V=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?V+w:V):w=V,R){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=w+Z,R={id:f++,callback:_,priorityLevel:R,startTime:w,expirationTime:Z,sortIndex:-1},w>V?(R.sortIndex=w,t(u,R),n(a)===null&&R===n(u)&&(v?(g(D),D=-1):v=!0,ne(S,w-V))):(R.sortIndex=Z,t(a,R),m||p||(m=!0,q(b))),R},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(R){var _=h;return function(){var w=h;h=_;try{return R.apply(this,arguments)}finally{h=w}}}})(Rm);Nm.exports=Rm;var Jx=Nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev=E,at=Jx;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lm=new Set,Ui={};function ar(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(Ui[e]=t,e=0;e<t.length;e++)Lm.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),za=Object.prototype.hasOwnProperty,tv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rh={},ih={};function nv(e){return za.call(ih,e)?!0:za.call(rh,e)?!1:tv.test(e)?ih[e]=!0:(rh[e]=!0,!1)}function rv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function iv(e,t,n,r){if(t===null||typeof t>"u"||rv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var fc=/[\-:]([a-z])/g;function hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fc,hc);Me[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fc,hc);Me[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fc,hc);Me[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function pc(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(iv(t,n,i,r)&&(n=null),r||i===null?nv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var on=ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),vr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),dc=Symbol.for("react.strict_mode"),_a=Symbol.for("react.profiler"),jm=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),Va=Symbol.for("react.suspense"),Ba=Symbol.for("react.suspense_list"),gc=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Om=Symbol.for("react.offscreen"),oh=Symbol.iterator;function ui(e){return e===null||typeof e!="object"?null:(e=oh&&e[oh]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,jl;function ki(e){if(jl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jl=t&&t[1]||""}return`
`+jl+e}var Fl=!1;function Ol(e,t){if(!e||Fl)return"";Fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Fl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ki(e):""}function ov(e){switch(e.tag){case 5:return ki(e.type);case 16:return ki("Lazy");case 13:return ki("Suspense");case 19:return ki("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function Ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case vr:return"Portal";case _a:return"Profiler";case dc:return"StrictMode";case Va:return"Suspense";case Ba:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fm:return(e.displayName||"Context")+".Consumer";case jm:return(e._context.displayName||"Context")+".Provider";case mc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gc:return t=e.displayName||null,t!==null?t:Ua(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return Ua(e(t))}catch{}}return null}function sv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ua(t);case 8:return t===dc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lv(e){var t=zm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eo(e){e._valueTracker||(e._valueTracker=lv(e))}function _m(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ha(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=In(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vm(e,t){t=t.checked,t!=null&&pc(e,"checked",t,!1)}function $a(e,t){Vm(e,t);var n=In(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wa(e,t.type,In(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wa(e,t,n){(t!=="number"||gs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Si=Array.isArray;function jr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+In(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ga(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ah(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Si(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:In(n)}}function Bm(e,t){var n=In(t.value),r=In(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function uh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Um(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ka(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Um(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Do,Hm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Do.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},av=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(e){av.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bi[t]=bi[e]})});function $m(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bi.hasOwnProperty(e)&&bi[e]?(""+t).trim():t+"px"}function Wm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$m(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var uv=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,t){if(t){if(uv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Qa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,Fr=null,Or=null;function ch(e){if(e=go(e)){if(typeof Ya!="function")throw Error(M(280));var t=e.stateNode;t&&(t=ll(t),Ya(e.stateNode,e.type,t))}}function Gm(e){Fr?Or?Or.push(e):Or=[e]:Fr=e}function Km(){if(Fr){var e=Fr,t=Or;if(Or=Fr=null,ch(e),t)for(e=0;e<t.length;e++)ch(t[e])}}function qm(e,t){return e(t)}function Qm(){}var zl=!1;function Xm(e,t,n){if(zl)return e(t,n);zl=!0;try{return qm(e,t,n)}finally{zl=!1,(Fr!==null||Or!==null)&&(Qm(),Km())}}function $i(e,t){var n=e.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Za=!1;if(Jt)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){Za=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{Za=!1}function cv(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Ei=!1,ys=null,xs=!1,Ja=null,fv={onError:function(e){Ei=!0,ys=e}};function hv(e,t,n,r,i,o,s,l,a){Ei=!1,ys=null,cv.apply(fv,arguments)}function pv(e,t,n,r,i,o,s,l,a){if(hv.apply(this,arguments),Ei){if(Ei){var u=ys;Ei=!1,ys=null}else throw Error(M(198));xs||(xs=!0,Ja=u)}}function ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ym(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fh(e){if(ur(e)!==e)throw Error(M(188))}function dv(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fh(i),e;if(o===r)return fh(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Zm(e){return e=dv(e),e!==null?Jm(e):null}function Jm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jm(e);if(t!==null)return t;e=e.sibling}return null}var eg=at.unstable_scheduleCallback,hh=at.unstable_cancelCallback,mv=at.unstable_shouldYield,gv=at.unstable_requestPaint,we=at.unstable_now,yv=at.unstable_getCurrentPriorityLevel,xc=at.unstable_ImmediatePriority,tg=at.unstable_UserBlockingPriority,vs=at.unstable_NormalPriority,xv=at.unstable_LowPriority,ng=at.unstable_IdlePriority,rl=null,_t=null;function vv(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:Sv,wv=Math.log,kv=Math.LN2;function Sv(e){return e>>>=0,e===0?32:31-(wv(e)/kv|0)|0}var Ao=64,Io=4194304;function Pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ws(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Pi(l):(o&=s,o!==0&&(r=Pi(o)))}else s=n&~i,s!==0?r=Pi(s):o!==0&&(r=Pi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-At(t),i=1<<n,r|=e[n],t&=~i;return r}function Pv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-At(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=Pv(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function eu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rg(){var e=Ao;return Ao<<=1,!(Ao&4194240)&&(Ao=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=n}function Tv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-At(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function vc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-At(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function ig(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var og,wc,sg,lg,ag,tu=!1,Mo=[],wn=null,kn=null,Sn=null,Wi=new Map,Gi=new Map,mn=[],bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(t.pointerId)}}function fi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=go(t),t!==null&&wc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ev(e,t,n,r,i){switch(t){case"focusin":return wn=fi(wn,e,t,n,r,i),!0;case"dragenter":return kn=fi(kn,e,t,n,r,i),!0;case"mouseover":return Sn=fi(Sn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Wi.set(o,fi(Wi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gi.set(o,fi(Gi.get(o)||null,e,t,n,r,i)),!0}return!1}function ug(e){var t=qn(e.target);if(t!==null){var n=ur(t);if(n!==null){if(t=n.tag,t===13){if(t=Ym(n),t!==null){e.blockedOn=t,ag(e.priority,function(){sg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xa=r,n.target.dispatchEvent(r),Xa=null}else return t=go(n),t!==null&&wc(t),e.blockedOn=n,!1;t.shift()}return!0}function dh(e,t,n){Zo(e)&&n.delete(t)}function Dv(){tu=!1,wn!==null&&Zo(wn)&&(wn=null),kn!==null&&Zo(kn)&&(kn=null),Sn!==null&&Zo(Sn)&&(Sn=null),Wi.forEach(dh),Gi.forEach(dh)}function hi(e,t){e.blockedOn===t&&(e.blockedOn=null,tu||(tu=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,Dv)))}function Ki(e){function t(i){return hi(i,e)}if(0<Mo.length){hi(Mo[0],e);for(var n=1;n<Mo.length;n++){var r=Mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&hi(wn,e),kn!==null&&hi(kn,e),Sn!==null&&hi(Sn,e),Wi.forEach(t),Gi.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)ug(n),n.blockedOn===null&&mn.shift()}var zr=on.ReactCurrentBatchConfig,ks=!0;function Av(e,t,n,r){var i=re,o=zr.transition;zr.transition=null;try{re=1,kc(e,t,n,r)}finally{re=i,zr.transition=o}}function Iv(e,t,n,r){var i=re,o=zr.transition;zr.transition=null;try{re=4,kc(e,t,n,r)}finally{re=i,zr.transition=o}}function kc(e,t,n,r){if(ks){var i=nu(e,t,n,r);if(i===null)Ql(e,t,r,Ss,n),ph(e,r);else if(Ev(i,e,t,n,r))r.stopPropagation();else if(ph(e,r),t&4&&-1<bv.indexOf(e)){for(;i!==null;){var o=go(i);if(o!==null&&og(o),o=nu(e,t,n,r),o===null&&Ql(e,t,r,Ss,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var Ss=null;function nu(e,t,n,r){if(Ss=null,e=yc(r),e=qn(e),e!==null)if(t=ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ym(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ss=e,null}function cg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yv()){case xc:return 1;case tg:return 4;case vs:case xv:return 16;case ng:return 536870912;default:return 16}default:return 16}}var yn=null,Sc=null,Jo=null;function fg(){if(Jo)return Jo;var e,t=Sc,n=t.length,r,i="value"in yn?yn.value:yn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Jo=i.slice(e,1<r?1-r:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function No(){return!0}function mh(){return!1}function ft(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?No:mh,this.isPropagationStopped=mh,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),t}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=ft(ti),mo=ge({},ti,{view:0,detail:0}),Mv=ft(mo),Vl,Bl,pi,il=ge({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pi&&(pi&&e.type==="mousemove"?(Vl=e.screenX-pi.screenX,Bl=e.screenY-pi.screenY):Bl=Vl=0,pi=e),Vl)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),gh=ft(il),Nv=ge({},il,{dataTransfer:0}),Rv=ft(Nv),Lv=ge({},mo,{relatedTarget:0}),Ul=ft(Lv),jv=ge({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=ft(jv),Ov=ge({},ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zv=ft(Ov),_v=ge({},ti,{data:0}),yh=ft(_v),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uv[e])?!!t[e]:!1}function Cc(){return Hv}var $v=ge({},mo,{key:function(e){if(e.key){var t=Vv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wv=ft($v),Gv=ge({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=ft(Gv),Kv=ge({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),qv=ft(Kv),Qv=ge({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=ft(Qv),Yv=ge({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=ft(Yv),Jv=[9,13,27,32],Tc=Jt&&"CompositionEvent"in window,Di=null;Jt&&"documentMode"in document&&(Di=document.documentMode);var ew=Jt&&"TextEvent"in window&&!Di,hg=Jt&&(!Tc||Di&&8<Di&&11>=Di),vh=" ",wh=!1;function pg(e,t){switch(e){case"keyup":return Jv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function tw(e,t){switch(e){case"compositionend":return dg(t);case"keypress":return t.which!==32?null:(wh=!0,vh);case"textInput":return e=t.data,e===vh&&wh?null:e;default:return null}}function nw(e,t){if(kr)return e==="compositionend"||!Tc&&pg(e,t)?(e=fg(),Jo=Sc=yn=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hg&&t.locale!=="ko"?null:t.data;default:return null}}var rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rw[e.type]:t==="textarea"}function mg(e,t,n,r){Gm(r),t=Ps(t,"onChange"),0<t.length&&(n=new Pc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ai=null,qi=null;function iw(e){bg(e,0)}function ol(e){var t=Cr(e);if(_m(t))return e}function ow(e,t){if(e==="change")return t}var gg=!1;if(Jt){var Hl;if(Jt){var $l="oninput"in document;if(!$l){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),$l=typeof Sh.oninput=="function"}Hl=$l}else Hl=!1;gg=Hl&&(!document.documentMode||9<document.documentMode)}function Ph(){Ai&&(Ai.detachEvent("onpropertychange",yg),qi=Ai=null)}function yg(e){if(e.propertyName==="value"&&ol(qi)){var t=[];mg(t,qi,e,yc(e)),Xm(iw,t)}}function sw(e,t,n){e==="focusin"?(Ph(),Ai=t,qi=n,Ai.attachEvent("onpropertychange",yg)):e==="focusout"&&Ph()}function lw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(qi)}function aw(e,t){if(e==="click")return ol(t)}function uw(e,t){if(e==="input"||e==="change")return ol(t)}function cw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:cw;function Qi(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!za.call(t,i)||!Nt(e[i],t[i]))return!1}return!0}function Ch(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Th(e,t){var n=Ch(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ch(n)}}function xg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vg(){for(var e=window,t=gs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gs(e.document)}return t}function bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fw(e){var t=vg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xg(n.ownerDocument.documentElement,n)){if(r!==null&&bc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Th(n,o);var s=Th(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hw=Jt&&"documentMode"in document&&11>=document.documentMode,Sr=null,ru=null,Ii=null,iu=!1;function bh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;iu||Sr==null||Sr!==gs(r)||(r=Sr,"selectionStart"in r&&bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ii&&Qi(Ii,r)||(Ii=r,r=Ps(ru,"onSelect"),0<r.length&&(t=new Pc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function Ro(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},Wl={},wg={};Jt&&(wg=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function sl(e){if(Wl[e])return Wl[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wg)return Wl[e]=t[n];return e}var kg=sl("animationend"),Sg=sl("animationiteration"),Pg=sl("animationstart"),Cg=sl("transitionend"),Tg=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){Tg.set(e,t),ar(t,[e])}for(var Gl=0;Gl<Eh.length;Gl++){var Kl=Eh[Gl],pw=Kl.toLowerCase(),dw=Kl[0].toUpperCase()+Kl.slice(1);jn(pw,"on"+dw)}jn(kg,"onAnimationEnd");jn(Sg,"onAnimationIteration");jn(Pg,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(Cg,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function Dh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pv(r,t,void 0,e),e.currentTarget=null}function bg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Dh(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Dh(i,l,u),o=a}}}if(xs)throw e=Ja,xs=!1,Ja=null,e}function ae(e,t){var n=t[uu];n===void 0&&(n=t[uu]=new Set);var r=e+"__bubble";n.has(r)||(Eg(t,e,2,!1),n.add(r))}function ql(e,t,n){var r=0;t&&(r|=4),Eg(n,e,r,t)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Xi(e){if(!e[Lo]){e[Lo]=!0,Lm.forEach(function(n){n!=="selectionchange"&&(mw.has(n)||ql(n,!1,e),ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lo]||(t[Lo]=!0,ql("selectionchange",!1,t))}}function Eg(e,t,n,r){switch(cg(t)){case 1:var i=Av;break;case 4:i=Iv;break;default:i=kc}n=i.bind(null,t,n,e),i=void 0,!Za||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=qn(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Xm(function(){var u=o,f=yc(n),c=[];e:{var h=Tg.get(e);if(h!==void 0){var p=Pc,m=e;switch(e){case"keypress":if(es(n)===0)break e;case"keydown":case"keyup":p=Wv;break;case"focusin":m="focus",p=Ul;break;case"focusout":m="blur",p=Ul;break;case"beforeblur":case"afterblur":p=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=qv;break;case kg:case Sg:case Pg:p=Fv;break;case Cg:p=Xv;break;case"scroll":p=Mv;break;case"wheel":p=Zv;break;case"copy":case"cut":case"paste":p=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=xh}var v=(t&4)!==0,k=!v&&e==="scroll",g=v?h!==null?h+"Capture":null:h;v=[];for(var y=u,x;y!==null;){x=y;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,g!==null&&(S=$i(y,g),S!=null&&v.push(Yi(y,S,x)))),k)break;y=y.return}0<v.length&&(h=new p(h,m,null,n,f),c.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==Xa&&(m=n.relatedTarget||n.fromElement)&&(qn(m)||m[en]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?qn(m):null,m!==null&&(k=ur(m),m!==k||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(v=gh,S="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(v=xh,S="onPointerLeave",g="onPointerEnter",y="pointer"),k=p==null?h:Cr(p),x=m==null?h:Cr(m),h=new v(S,y+"leave",p,n,f),h.target=k,h.relatedTarget=x,S=null,qn(f)===u&&(v=new v(g,y+"enter",m,n,f),v.target=x,v.relatedTarget=k,S=v),k=S,p&&m)t:{for(v=p,g=m,y=0,x=v;x;x=mr(x))y++;for(x=0,S=g;S;S=mr(S))x++;for(;0<y-x;)v=mr(v),y--;for(;0<x-y;)g=mr(g),x--;for(;y--;){if(v===g||g!==null&&v===g.alternate)break t;v=mr(v),g=mr(g)}v=null}else v=null;p!==null&&Ah(c,h,p,v,!1),m!==null&&k!==null&&Ah(c,k,m,v,!0)}}e:{if(h=u?Cr(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=ow;else if(kh(h))if(gg)b=uw;else{b=lw;var C=sw}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=aw);if(b&&(b=b(e,u))){mg(c,b,n,f);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Wa(h,"number",h.value)}switch(C=u?Cr(u):window,e){case"focusin":(kh(C)||C.contentEditable==="true")&&(Sr=C,ru=u,Ii=null);break;case"focusout":Ii=ru=Sr=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,bh(c,n,f);break;case"selectionchange":if(hw)break;case"keydown":case"keyup":bh(c,n,f)}var A;if(Tc)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else kr?pg(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(hg&&n.locale!=="ko"&&(kr||D!=="onCompositionStart"?D==="onCompositionEnd"&&kr&&(A=fg()):(yn=f,Sc="value"in yn?yn.value:yn.textContent,kr=!0)),C=Ps(u,D),0<C.length&&(D=new yh(D,e,null,n,f),c.push({event:D,listeners:C}),A?D.data=A:(A=dg(n),A!==null&&(D.data=A)))),(A=ew?tw(e,n):nw(e,n))&&(u=Ps(u,"onBeforeInput"),0<u.length&&(f=new yh("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=A))}bg(c,t)})}function Yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ps(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$i(e,n),o!=null&&r.unshift(Yi(e,o,i)),o=$i(e,t),o!=null&&r.push(Yi(e,o,i))),e=e.return}return r}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ah(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=$i(n,o),a!=null&&s.unshift(Yi(n,a,l))):i||(a=$i(n,o),a!=null&&s.push(Yi(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var gw=/\r\n?/g,yw=/\u0000|\uFFFD/g;function Ih(e){return(typeof e=="string"?e:""+e).replace(gw,`
`).replace(yw,"")}function jo(e,t,n){if(t=Ih(t),Ih(e)!==t&&n)throw Error(M(425))}function Cs(){}var ou=null,su=null;function lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,xw=typeof clearTimeout=="function"?clearTimeout:void 0,Mh=typeof Promise=="function"?Promise:void 0,vw=typeof queueMicrotask=="function"?queueMicrotask:typeof Mh<"u"?function(e){return Mh.resolve(null).then(e).catch(ww)}:au;function ww(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ki(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ki(t)}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ni=Math.random().toString(36).slice(2),zt="__reactFiber$"+ni,Zi="__reactProps$"+ni,en="__reactContainer$"+ni,uu="__reactEvents$"+ni,kw="__reactListeners$"+ni,Sw="__reactHandles$"+ni;function qn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nh(e);e!==null;){if(n=e[zt])return n;e=Nh(e)}return t}e=n,n=e.parentNode}return null}function go(e){return e=e[zt]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function ll(e){return e[Zi]||null}var cu=[],Tr=-1;function Fn(e){return{current:e}}function ue(e){0>Tr||(e.current=cu[Tr],cu[Tr]=null,Tr--)}function le(e,t){Tr++,cu[Tr]=e.current,e.current=t}var Mn={},ze=Fn(Mn),Xe=Fn(!1),tr=Mn;function Hr(e,t){var n=e.type.contextTypes;if(!n)return Mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(e){return e=e.childContextTypes,e!=null}function Ts(){ue(Xe),ue(ze)}function Rh(e,t,n){if(ze.current!==Mn)throw Error(M(168));le(ze,t),le(Xe,n)}function Dg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,sv(e)||"Unknown",i));return ge({},n,r)}function bs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,tr=ze.current,le(ze,e),le(Xe,Xe.current),!0}function Lh(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Dg(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,ue(Xe),ue(ze),le(ze,e)):ue(Xe),le(Xe,n)}var Gt=null,al=!1,Yl=!1;function Ag(e){Gt===null?Gt=[e]:Gt.push(e)}function Pw(e){al=!0,Ag(e)}function On(){if(!Yl&&Gt!==null){Yl=!0;var e=0,t=re;try{var n=Gt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Gt=null,al=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(e+1)),eg(xc,On),i}finally{re=t,Yl=!1}}return null}var br=[],Er=0,Es=null,Ds=0,gt=[],yt=0,nr=null,Kt=1,qt="";function Hn(e,t){br[Er++]=Ds,br[Er++]=Es,Es=e,Ds=t}function Ig(e,t,n){gt[yt++]=Kt,gt[yt++]=qt,gt[yt++]=nr,nr=e;var r=Kt;e=qt;var i=32-At(r)-1;r&=~(1<<i),n+=1;var o=32-At(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Kt=1<<32-At(t)+i|n<<i|r,qt=o+e}else Kt=1<<o|n<<i|r,qt=e}function Ec(e){e.return!==null&&(Hn(e,1),Ig(e,1,0))}function Dc(e){for(;e===Es;)Es=br[--Er],br[Er]=null,Ds=br[--Er],br[Er]=null;for(;e===nr;)nr=gt[--yt],gt[yt]=null,qt=gt[--yt],gt[yt]=null,Kt=gt[--yt],gt[yt]=null}var st=null,ot=null,fe=!1,Dt=null;function Mg(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,ot=Pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:Kt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,ot=null,!0):!1;default:return!1}}function fu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hu(e){if(fe){var t=ot;if(t){var n=t;if(!jh(e,t)){if(fu(e))throw Error(M(418));t=Pn(n.nextSibling);var r=st;t&&jh(e,t)?Mg(r,n):(e.flags=e.flags&-4097|2,fe=!1,st=e)}}else{if(fu(e))throw Error(M(418));e.flags=e.flags&-4097|2,fe=!1,st=e}}}function Fh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function Fo(e){if(e!==st)return!1;if(!fe)return Fh(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!lu(e.type,e.memoizedProps)),t&&(t=ot)){if(fu(e))throw Ng(),Error(M(418));for(;t;)Mg(e,t),t=Pn(t.nextSibling)}if(Fh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=Pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=st?Pn(e.stateNode.nextSibling):null;return!0}function Ng(){for(var e=ot;e;)e=Pn(e.nextSibling)}function $r(){ot=st=null,fe=!1}function Ac(e){Dt===null?Dt=[e]:Dt.push(e)}var Cw=on.ReactCurrentBatchConfig;function di(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oh(e){var t=e._init;return t(e._payload)}function Rg(e){function t(g,y){if(e){var x=g.deletions;x===null?(g.deletions=[y],g.flags|=16):x.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=En(g,y),g.index=0,g.sibling=null,g}function o(g,y,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<y?(g.flags|=2,y):x):(g.flags|=2,y)):(g.flags|=1048576,y)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,y,x,S){return y===null||y.tag!==6?(y=ia(x,g.mode,S),y.return=g,y):(y=i(y,x),y.return=g,y)}function a(g,y,x,S){var b=x.type;return b===wr?f(g,y,x.props.children,S,x.key):y!==null&&(y.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===hn&&Oh(b)===y.type)?(S=i(y,x.props),S.ref=di(g,y,x),S.return=g,S):(S=ls(x.type,x.key,x.props,null,g.mode,S),S.ref=di(g,y,x),S.return=g,S)}function u(g,y,x,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=oa(x,g.mode,S),y.return=g,y):(y=i(y,x.children||[]),y.return=g,y)}function f(g,y,x,S,b){return y===null||y.tag!==7?(y=Jn(x,g.mode,S,b),y.return=g,y):(y=i(y,x),y.return=g,y)}function c(g,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=ia(""+y,g.mode,x),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case bo:return x=ls(y.type,y.key,y.props,null,g.mode,x),x.ref=di(g,null,y),x.return=g,x;case vr:return y=oa(y,g.mode,x),y.return=g,y;case hn:var S=y._init;return c(g,S(y._payload),x)}if(Si(y)||ui(y))return y=Jn(y,g.mode,x,null),y.return=g,y;Oo(g,y)}return null}function h(g,y,x,S){var b=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return b!==null?null:l(g,y,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case bo:return x.key===b?a(g,y,x,S):null;case vr:return x.key===b?u(g,y,x,S):null;case hn:return b=x._init,h(g,y,b(x._payload),S)}if(Si(x)||ui(x))return b!==null?null:f(g,y,x,S,null);Oo(g,x)}return null}function p(g,y,x,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(x)||null,l(y,g,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case bo:return g=g.get(S.key===null?x:S.key)||null,a(y,g,S,b);case vr:return g=g.get(S.key===null?x:S.key)||null,u(y,g,S,b);case hn:var C=S._init;return p(g,y,x,C(S._payload),b)}if(Si(S)||ui(S))return g=g.get(x)||null,f(y,g,S,b,null);Oo(y,S)}return null}function m(g,y,x,S){for(var b=null,C=null,A=y,D=y=0,j=null;A!==null&&D<x.length;D++){A.index>D?(j=A,A=null):j=A.sibling;var T=h(g,A,x[D],S);if(T===null){A===null&&(A=j);break}e&&A&&T.alternate===null&&t(g,A),y=o(T,y,D),C===null?b=T:C.sibling=T,C=T,A=j}if(D===x.length)return n(g,A),fe&&Hn(g,D),b;if(A===null){for(;D<x.length;D++)A=c(g,x[D],S),A!==null&&(y=o(A,y,D),C===null?b=A:C.sibling=A,C=A);return fe&&Hn(g,D),b}for(A=r(g,A);D<x.length;D++)j=p(A,g,D,x[D],S),j!==null&&(e&&j.alternate!==null&&A.delete(j.key===null?D:j.key),y=o(j,y,D),C===null?b=j:C.sibling=j,C=j);return e&&A.forEach(function(F){return t(g,F)}),fe&&Hn(g,D),b}function v(g,y,x,S){var b=ui(x);if(typeof b!="function")throw Error(M(150));if(x=b.call(x),x==null)throw Error(M(151));for(var C=b=null,A=y,D=y=0,j=null,T=x.next();A!==null&&!T.done;D++,T=x.next()){A.index>D?(j=A,A=null):j=A.sibling;var F=h(g,A,T.value,S);if(F===null){A===null&&(A=j);break}e&&A&&F.alternate===null&&t(g,A),y=o(F,y,D),C===null?b=F:C.sibling=F,C=F,A=j}if(T.done)return n(g,A),fe&&Hn(g,D),b;if(A===null){for(;!T.done;D++,T=x.next())T=c(g,T.value,S),T!==null&&(y=o(T,y,D),C===null?b=T:C.sibling=T,C=T);return fe&&Hn(g,D),b}for(A=r(g,A);!T.done;D++,T=x.next())T=p(A,g,D,T.value,S),T!==null&&(e&&T.alternate!==null&&A.delete(T.key===null?D:T.key),y=o(T,y,D),C===null?b=T:C.sibling=T,C=T);return e&&A.forEach(function(O){return t(g,O)}),fe&&Hn(g,D),b}function k(g,y,x,S){if(typeof x=="object"&&x!==null&&x.type===wr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case bo:e:{for(var b=x.key,C=y;C!==null;){if(C.key===b){if(b=x.type,b===wr){if(C.tag===7){n(g,C.sibling),y=i(C,x.props.children),y.return=g,g=y;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===hn&&Oh(b)===C.type){n(g,C.sibling),y=i(C,x.props),y.ref=di(g,C,x),y.return=g,g=y;break e}n(g,C);break}else t(g,C);C=C.sibling}x.type===wr?(y=Jn(x.props.children,g.mode,S,x.key),y.return=g,g=y):(S=ls(x.type,x.key,x.props,null,g.mode,S),S.ref=di(g,y,x),S.return=g,g=S)}return s(g);case vr:e:{for(C=x.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(g,y.sibling),y=i(y,x.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=oa(x,g.mode,S),y.return=g,g=y}return s(g);case hn:return C=x._init,k(g,y,C(x._payload),S)}if(Si(x))return m(g,y,x,S);if(ui(x))return v(g,y,x,S);Oo(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(n(g,y.sibling),y=i(y,x),y.return=g,g=y):(n(g,y),y=ia(x,g.mode,S),y.return=g,g=y),s(g)):n(g,y)}return k}var Wr=Rg(!0),Lg=Rg(!1),As=Fn(null),Is=null,Dr=null,Ic=null;function Mc(){Ic=Dr=Is=null}function Nc(e){var t=As.current;ue(As),e._currentValue=t}function pu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _r(e,t){Is=e,Ic=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(Ic!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(Is===null)throw Error(M(308));Dr=e,Is.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var Qn=null;function Rc(e){Qn===null?Qn=[e]:Qn.push(e)}function jg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Rc(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tn(e,n)}return i=r.interleaved,i===null?(t.next=t,Rc(r)):(t.next=i.next,i.next=t),r.interleaved=t,tn(e,n)}function ts(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vc(e,n)}}function zh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ms(e,t,n,r){var i=e.updateQueue;pn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(o!==null){var c=i.baseState;s=0,f=u=a=null,l=o;do{var h=l.lane,p=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(h=t,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){c=m.call(p,c,h);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,h=typeof m=="function"?m.call(p,c,h):m,h==null)break e;c=ge({},c,h);break e;case 2:pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=p,a=c):f=f.next=p,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ir|=s,e.lanes=s,e.memoizedState=c}}function _h(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var yo={},Vt=Fn(yo),Ji=Fn(yo),eo=Fn(yo);function Xn(e){if(e===yo)throw Error(M(174));return e}function jc(e,t){switch(le(eo,t),le(Ji,e),le(Vt,yo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ka(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ka(t,e)}ue(Vt),le(Vt,t)}function Gr(){ue(Vt),ue(Ji),ue(eo)}function Og(e){Xn(eo.current);var t=Xn(Vt.current),n=Ka(t,e.type);t!==n&&(le(Ji,e),le(Vt,n))}function Fc(e){Ji.current===e&&(ue(Vt),ue(Ji))}var he=Fn(0);function Ns(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zl=[];function Oc(){for(var e=0;e<Zl.length;e++)Zl[e]._workInProgressVersionPrimary=null;Zl.length=0}var ns=on.ReactCurrentDispatcher,Jl=on.ReactCurrentBatchConfig,rr=0,de=null,Te=null,Ee=null,Rs=!1,Mi=!1,to=0,Tw=0;function Ne(){throw Error(M(321))}function zc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function _c(e,t,n,r,i,o){if(rr=o,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ns.current=e===null||e.memoizedState===null?Aw:Iw,e=n(r,i),Mi){o=0;do{if(Mi=!1,to=0,25<=o)throw Error(M(301));o+=1,Ee=Te=null,t.updateQueue=null,ns.current=Mw,e=n(r,i)}while(Mi)}if(ns.current=Ls,t=Te!==null&&Te.next!==null,rr=0,Ee=Te=de=null,Rs=!1,t)throw Error(M(300));return e}function Vc(){var e=to!==0;return to=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function St(){if(Te===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ee===null?de.memoizedState:Ee.next;if(t!==null)Ee=t,Te=e;else{if(e===null)throw Error(M(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function no(e,t){return typeof t=="function"?t(e):t}function ea(e){var t=St(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var f=u.lane;if((rr&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,s=r):a=a.next=c,de.lanes|=f,ir|=f}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,Nt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,de.lanes|=o,ir|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ta(e){var t=St(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Nt(o,t.memoizedState)||(Qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zg(){}function _g(e,t){var n=de,r=St(),i=t(),o=!Nt(r.memoizedState,i);if(o&&(r.memoizedState=i,Qe=!0),r=r.queue,Bc(Ug.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,ro(9,Bg.bind(null,n,r,i,t),void 0,null),De===null)throw Error(M(349));rr&30||Vg(n,t,i)}return i}function Vg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bg(e,t,n,r){t.value=n,t.getSnapshot=r,Hg(t)&&$g(e)}function Ug(e,t,n){return n(function(){Hg(t)&&$g(e)})}function Hg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function $g(e){var t=tn(e,1);t!==null&&It(t,e,1,-1)}function Vh(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:e},t.queue=e,e=e.dispatch=Dw.bind(null,de,e),[t.memoizedState,e]}function ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wg(){return St().memoizedState}function rs(e,t,n,r){var i=Ft();de.flags|=e,i.memoizedState=ro(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var i=St();r=r===void 0?null:r;var o=void 0;if(Te!==null){var s=Te.memoizedState;if(o=s.destroy,r!==null&&zc(r,s.deps)){i.memoizedState=ro(t,n,o,r);return}}de.flags|=e,i.memoizedState=ro(1|t,n,o,r)}function Bh(e,t){return rs(8390656,8,e,t)}function Bc(e,t){return ul(2048,8,e,t)}function Gg(e,t){return ul(4,2,e,t)}function Kg(e,t){return ul(4,4,e,t)}function qg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qg(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,qg.bind(null,t,e),n)}function Uc(){}function Xg(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yg(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zg(e,t,n){return rr&21?(Nt(n,t)||(n=rg(),de.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function bw(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=Jl.transition;Jl.transition={};try{e(!1),t()}finally{re=n,Jl.transition=r}}function Jg(){return St().memoizedState}function Ew(e,t,n){var r=bn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ey(e))ty(t,n);else if(n=jg(e,t,n,r),n!==null){var i=He();It(n,e,r,i),ny(n,t,r)}}function Dw(e,t,n){var r=bn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ey(e))ty(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Nt(l,s)){var a=t.interleaved;a===null?(i.next=i,Rc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=jg(e,t,i,r),n!==null&&(i=He(),It(n,e,r,i),ny(n,t,r))}}function ey(e){var t=e.alternate;return e===de||t!==null&&t===de}function ty(e,t){Mi=Rs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ny(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vc(e,n)}}var Ls={readContext:kt,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Aw={readContext:kt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Bh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,rs(4194308,4,qg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return rs(4,2,e,t)},useMemo:function(e,t){var n=Ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ew.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:Vh,useDebugValue:Uc,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=Vh(!1),t=e[0];return e=bw.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=Ft();if(fe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),De===null)throw Error(M(349));rr&30||Vg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bh(Ug.bind(null,r,o,e),[e]),r.flags|=2048,ro(9,Bg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ft(),t=De.identifierPrefix;if(fe){var n=qt,r=Kt;n=(r&~(1<<32-At(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=to++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Iw={readContext:kt,useCallback:Xg,useContext:kt,useEffect:Bc,useImperativeHandle:Qg,useInsertionEffect:Gg,useLayoutEffect:Kg,useMemo:Yg,useReducer:ea,useRef:Wg,useState:function(){return ea(no)},useDebugValue:Uc,useDeferredValue:function(e){var t=St();return Zg(t,Te.memoizedState,e)},useTransition:function(){var e=ea(no)[0],t=St().memoizedState;return[e,t]},useMutableSource:zg,useSyncExternalStore:_g,useId:Jg,unstable_isNewReconciler:!1},Mw={readContext:kt,useCallback:Xg,useContext:kt,useEffect:Bc,useImperativeHandle:Qg,useInsertionEffect:Gg,useLayoutEffect:Kg,useMemo:Yg,useReducer:ta,useRef:Wg,useState:function(){return ta(no)},useDebugValue:Uc,useDeferredValue:function(e){var t=St();return Te===null?t.memoizedState=e:Zg(t,Te.memoizedState,e)},useTransition:function(){var e=ta(no)[0],t=St().memoizedState;return[e,t]},useMutableSource:zg,useSyncExternalStore:_g,useId:Jg,unstable_isNewReconciler:!1};function bt(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function du(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=bn(e),o=Xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Cn(e,o,i),t!==null&&(It(t,e,i,r),ts(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=bn(e),o=Xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Cn(e,o,i),t!==null&&(It(t,e,i,r),ts(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=bn(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(It(t,e,r,n),ts(t,e,r))}};function Uh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Qi(n,r)||!Qi(i,o):!0}function ry(e,t,n){var r=!1,i=Mn,o=t.contextType;return typeof o=="object"&&o!==null?o=kt(o):(i=Ye(t)?tr:ze.current,r=t.contextTypes,o=(r=r!=null)?Hr(e,i):Mn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function mu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Lc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=kt(o):(o=Ye(t)?tr:ze.current,i.context=Hr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(du(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&cl.enqueueReplaceState(i,i.state,null),Ms(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t){try{var n="",r=t;do n+=ov(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function na(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nw=typeof WeakMap=="function"?WeakMap:Map;function iy(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fs||(Fs=!0,bu=r),gu(e,t)},n}function oy(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){gu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){gu(e,t),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function $h(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Gw.bind(null,e,t,n),t.then(e,e))}function Wh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var Rw=on.ReactCurrentOwner,Qe=!1;function Be(e,t,n,r){t.child=e===null?Lg(t,null,n,r):Wr(t,e.child,n,r)}function Kh(e,t,n,r,i){n=n.render;var o=t.ref;return _r(t,i),r=_c(e,t,n,r,o,i),n=Vc(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(fe&&n&&Ec(t),t.flags|=1,Be(e,t,r,i),t.child)}function qh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Xc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,sy(e,t,o,r,i)):(e=ls(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(s,r)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=En(o,r),e.ref=t.ref,e.return=t,t.child=e}function sy(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Qi(o,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,nn(e,t,i)}return yu(e,t,n,r,i)}function ly(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Ir,it),it|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(Ir,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(Ir,it),it|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le(Ir,it),it|=r;return Be(e,t,i,n),t.child}function ay(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yu(e,t,n,r,i){var o=Ye(n)?tr:ze.current;return o=Hr(t,o),_r(t,i),n=_c(e,t,n,r,o,i),r=Vc(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(fe&&r&&Ec(t),t.flags|=1,Be(e,t,n,i),t.child)}function Qh(e,t,n,r,i){if(Ye(n)){var o=!0;bs(t)}else o=!1;if(_r(t,i),t.stateNode===null)is(e,t),ry(t,n,r),mu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=Ye(n)?tr:ze.current,u=Hr(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Hh(t,s,r,u),pn=!1;var h=t.memoizedState;s.state=h,Ms(t,r,s,i),a=t.memoizedState,l!==r||h!==a||Xe.current||pn?(typeof f=="function"&&(du(t,n,f,r),a=t.memoizedState),(l=pn||Uh(t,n,l,r,h,a,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Fg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:bt(t.type,l),s.props=u,c=t.pendingProps,h=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=kt(a):(a=Ye(n)?tr:ze.current,a=Hr(t,a));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Hh(t,s,r,a),pn=!1,h=t.memoizedState,s.state=h,Ms(t,r,s,i);var m=t.memoizedState;l!==c||h!==m||Xe.current||pn?(typeof p=="function"&&(du(t,n,p,r),m=t.memoizedState),(u=pn||Uh(t,n,u,r,h,m,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return xu(e,t,n,r,o,i)}function xu(e,t,n,r,i,o){ay(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Lh(t,n,!1),nn(e,t,o);r=t.stateNode,Rw.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Wr(t,e.child,null,o),t.child=Wr(t,null,l,o)):Be(e,t,l,o),t.memoizedState=r.state,i&&Lh(t,n,!0),t.child}function uy(e){var t=e.stateNode;t.pendingContext?Rh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rh(e,t.context,!1),jc(e,t.containerInfo)}function Xh(e,t,n,r,i){return $r(),Ac(i),t.flags|=256,Be(e,t,n,r),t.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function wu(e){return{baseLanes:e,cachePool:null,transitions:null}}function cy(e,t,n){var r=t.pendingProps,i=he.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(he,i&1),e===null)return hu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=pl(s,r,0,null),e=Jn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wu(n),t.memoizedState=vu,e):Hc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Lw(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=En(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=En(l,o):(o=Jn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?wu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=vu,r}return o=e.child,e=o.sibling,r=En(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hc(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zo(e,t,n,r){return r!==null&&Ac(r),Wr(t,e.child,null,n),e=Hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lw(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=na(Error(M(422))),zo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=pl({mode:"visible",children:r.children},i,0,null),o=Jn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wr(t,e.child,null,s),t.child.memoizedState=wu(s),t.memoizedState=vu,o);if(!(t.mode&1))return zo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(M(419)),r=na(o,r,void 0),zo(e,t,s,r)}if(l=(s&e.childLanes)!==0,Qe||l){if(r=De,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),It(r,e,i,-1))}return Qc(),r=na(Error(M(421))),zo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ot=Pn(i.nextSibling),st=t,fe=!0,Dt=null,e!==null&&(gt[yt++]=Kt,gt[yt++]=qt,gt[yt++]=nr,Kt=e.id,qt=e.overflow,nr=t),t=Hc(t,r.children),t.flags|=4096,t)}function Yh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pu(e.return,t,n)}function ra(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function fy(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Be(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yh(e,n,t);else if(e.tag===19)Yh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(he,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ns(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ra(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ns(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ra(t,!0,n,null,o);break;case"together":ra(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function is(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jw(e,t,n){switch(t.tag){case 3:uy(t),$r();break;case 5:Og(t);break;case 1:Ye(t.type)&&bs(t);break;case 4:jc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(As,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?cy(e,t,n):(le(he,he.current&1),e=nn(e,t,n),e!==null?e.sibling:null);le(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,ly(e,t,n)}return nn(e,t,n)}var hy,ku,py,dy;hy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ku=function(){};py=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xn(Vt.current);var o=null;switch(n){case"input":i=Ha(e,i),r=Ha(e,r),o=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":i=Ga(e,i),r=Ga(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Cs)}qa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ui.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ae("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};dy=function(e,t,n,r){n!==r&&(t.flags|=4)};function mi(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fw(e,t,n){var r=t.pendingProps;switch(Dc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Ye(t.type)&&Ts(),Re(t),null;case 3:return r=t.stateNode,Gr(),ue(Xe),ue(ze),Oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(Au(Dt),Dt=null))),ku(e,t),Re(t),null;case 5:Fc(t);var i=Xn(eo.current);if(n=t.type,e!==null&&t.stateNode!=null)py(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Re(t),null}if(e=Xn(Vt.current),Fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[zt]=t,r[Zi]=o,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Ci.length;i++)ae(Ci[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":sh(r,o),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ae("invalid",r);break;case"textarea":ah(r,o),ae("invalid",r)}qa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&jo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&jo(r.textContent,l,e),i=["children",""+l]):Ui.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ae("scroll",r)}switch(n){case"input":Eo(r),lh(r,o,!0);break;case"textarea":Eo(r),uh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Cs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Um(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[zt]=t,e[Zi]=r,hy(e,t,!1,!1),t.stateNode=e;e:{switch(s=Qa(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ci.length;i++)ae(Ci[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":sh(e,r),i=Ha(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ae("invalid",e);break;case"textarea":ah(e,r),i=Ga(e,r),ae("invalid",e);break;default:i=r}qa(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?Wm(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hm(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hi(e,a):typeof a=="number"&&Hi(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ui.hasOwnProperty(o)?a!=null&&o==="onScroll"&&ae("scroll",e):a!=null&&pc(e,o,a,s))}switch(n){case"input":Eo(e),lh(e,r,!1);break;case"textarea":Eo(e),uh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?jr(e,!!r.multiple,o,!1):r.defaultValue!=null&&jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Cs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)dy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Xn(eo.current),Xn(Vt.current),Fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:jo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Re(t),null;case 13:if(ue(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&ot!==null&&t.mode&1&&!(t.flags&128))Ng(),$r(),t.flags|=98560,o=!1;else if(o=Fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[zt]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else Dt!==null&&(Au(Dt),Dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?be===0&&(be=3):Qc())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return Gr(),ku(e,t),e===null&&Xi(t.stateNode.containerInfo),Re(t),null;case 10:return Nc(t.type._context),Re(t),null;case 17:return Ye(t.type)&&Ts(),Re(t),null;case 19:if(ue(he),o=t.memoizedState,o===null)return Re(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)mi(o,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ns(e),s!==null){for(t.flags|=128,mi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(he,he.current&1|2),t.child}e=e.sibling}o.tail!==null&&we()>qr&&(t.flags|=128,r=!0,mi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ns(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!fe)return Re(t),null}else 2*we()-o.renderingStartTime>qr&&n!==1073741824&&(t.flags|=128,r=!0,mi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,n=he.current,le(he,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return qc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function Ow(e,t){switch(Dc(t),t.tag){case 1:return Ye(t.type)&&Ts(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),ue(Xe),ue(ze),Oc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fc(t),null;case 13:if(ue(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(he),null;case 4:return Gr(),null;case 10:return Nc(t.type._context),null;case 22:case 23:return qc(),null;case 24:return null;default:return null}}var _o=!1,Fe=!1,zw=typeof WeakSet=="function"?WeakSet:Set,z=null;function Ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function Su(e,t,n){try{n()}catch(r){xe(e,t,r)}}var Zh=!1;function _w(e,t){if(ou=ks,e=vg(),bc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,f=0,c=e,h=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(l=s+i),c!==o||r!==0&&c.nodeType!==3||(a=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(p=c.firstChild)!==null;)h=c,c=p;for(;;){if(c===e)break t;if(h===n&&++u===i&&(l=s),h===o&&++f===r&&(a=s),(p=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(su={focusedElem:e,selectionRange:n},ks=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,k=m.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:bt(t.type,v),k);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(S){xe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return m=Zh,Zh=!1,m}function Ni(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Su(t,n,o)}i=i.next}while(i!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function my(e){var t=e.alternate;t!==null&&(e.alternate=null,my(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Zi],delete t[uu],delete t[kw],delete t[Sw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gy(e){return e.tag===5||e.tag===3||e.tag===4}function Jh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Cs));else if(r!==4&&(e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}function Tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tu(e,t,n),e=e.sibling;e!==null;)Tu(e,t,n),e=e.sibling}var Ae=null,Et=!1;function un(e,t,n){for(n=n.child;n!==null;)yy(e,t,n),n=n.sibling}function yy(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:Fe||Ar(n,t);case 6:var r=Ae,i=Et;Ae=null,un(e,t,n),Ae=r,Et=i,Ae!==null&&(Et?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(Et?(e=Ae,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),Ki(e)):Xl(Ae,n.stateNode));break;case 4:r=Ae,i=Et,Ae=n.stateNode.containerInfo,Et=!0,un(e,t,n),Ae=r,Et=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Su(n,t,s),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!Fe&&(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,t,l)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,un(e,t,n),Fe=r):un(e,t,n);break;default:un(e,t,n)}}function ep(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zw),t.forEach(function(r){var i=qw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ae=l.stateNode,Et=!1;break e;case 3:Ae=l.stateNode.containerInfo,Et=!0;break e;case 4:Ae=l.stateNode.containerInfo,Et=!0;break e}l=l.return}if(Ae===null)throw Error(M(160));yy(o,s,i),Ae=null,Et=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xy(t,e),t=t.sibling}function xy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),jt(e),r&4){try{Ni(3,e,e.return),fl(3,e)}catch(v){xe(e,e.return,v)}try{Ni(5,e,e.return)}catch(v){xe(e,e.return,v)}}break;case 1:Tt(t,e),jt(e),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(Tt(t,e),jt(e),r&512&&n!==null&&Ar(n,n.return),e.flags&32){var i=e.stateNode;try{Hi(i,"")}catch(v){xe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Vm(i,o),Qa(l,s);var u=Qa(l,o);for(s=0;s<a.length;s+=2){var f=a[s],c=a[s+1];f==="style"?Wm(i,c):f==="dangerouslySetInnerHTML"?Hm(i,c):f==="children"?Hi(i,c):pc(i,f,c,u)}switch(l){case"input":$a(i,o);break;case"textarea":Bm(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?jr(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?jr(i,!!o.multiple,o.defaultValue,!0):jr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zi]=o}catch(v){xe(e,e.return,v)}}break;case 6:if(Tt(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){xe(e,e.return,v)}}break;case 3:if(Tt(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ki(t.containerInfo)}catch(v){xe(e,e.return,v)}break;case 4:Tt(t,e),jt(e);break;case 13:Tt(t,e),jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gc=we())),r&4&&ep(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||f,Tt(t,e),Fe=u):Tt(t,e),jt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(z=e,f=e.child;f!==null;){for(c=z=f;z!==null;){switch(h=z,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ni(4,h,h.return);break;case 1:Ar(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){xe(r,n,v)}}break;case 5:Ar(h,h.return);break;case 22:if(h.memoizedState!==null){np(c);continue}}p!==null?(p.return=h,z=p):np(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,a=c.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=$m("display",s))}catch(v){xe(e,e.return,v)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){xe(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Tt(t,e),jt(e),r&4&&ep(e);break;case 21:break;default:Tt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gy(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var o=Jh(e);Tu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Jh(e);Cu(e,l,s);break;default:throw Error(M(161))}}catch(a){xe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vw(e,t,n){z=e,vy(e)}function vy(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_o;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Fe;l=_o;var u=Fe;if(_o=s,(Fe=a)&&!u)for(z=i;z!==null;)s=z,a=s.child,s.tag===22&&s.memoizedState!==null?rp(i):a!==null?(a.return=s,z=a):rp(i);for(;o!==null;)z=o,vy(o),o=o.sibling;z=i,_o=l,Fe=u}tp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):tp(e)}}function tp(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Fe||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:bt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&_h(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_h(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Ki(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Fe||t.flags&512&&Pu(t)}catch(h){xe(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function np(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function rp(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(a){xe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){xe(t,i,a)}}var o=t.return;try{Pu(t)}catch(a){xe(t,o,a)}break;case 5:var s=t.return;try{Pu(t)}catch(a){xe(t,s,a)}}}catch(a){xe(t,t.return,a)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var Bw=Math.ceil,js=on.ReactCurrentDispatcher,$c=on.ReactCurrentOwner,wt=on.ReactCurrentBatchConfig,ee=0,De=null,Ce=null,Ie=0,it=0,Ir=Fn(0),be=0,io=null,ir=0,hl=0,Wc=0,Ri=null,qe=null,Gc=0,qr=1/0,Wt=null,Fs=!1,bu=null,Tn=null,Vo=!1,xn=null,Os=0,Li=0,Eu=null,os=-1,ss=0;function He(){return ee&6?we():os!==-1?os:os=we()}function bn(e){return e.mode&1?ee&2&&Ie!==0?Ie&-Ie:Cw.transition!==null?(ss===0&&(ss=rg()),ss):(e=re,e!==0||(e=window.event,e=e===void 0?16:cg(e.type)),e):1}function It(e,t,n,r){if(50<Li)throw Li=0,Eu=null,Error(M(185));po(e,n,r),(!(ee&2)||e!==De)&&(e===De&&(!(ee&2)&&(hl|=n),be===4&&gn(e,Ie)),Ze(e,r),n===1&&ee===0&&!(t.mode&1)&&(qr=we()+500,al&&On()))}function Ze(e,t){var n=e.callbackNode;Cv(e,t);var r=ws(e,e===De?Ie:0);if(r===0)n!==null&&hh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hh(n),t===1)e.tag===0?Pw(ip.bind(null,e)):Ag(ip.bind(null,e)),vw(function(){!(ee&6)&&On()}),n=null;else{switch(ig(r)){case 1:n=xc;break;case 4:n=tg;break;case 16:n=vs;break;case 536870912:n=ng;break;default:n=vs}n=Ey(n,wy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wy(e,t){if(os=-1,ss=0,ee&6)throw Error(M(327));var n=e.callbackNode;if(Vr()&&e.callbackNode!==n)return null;var r=ws(e,e===De?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zs(e,r);else{t=r;var i=ee;ee|=2;var o=Sy();(De!==e||Ie!==t)&&(Wt=null,qr=we()+500,Zn(e,t));do try{$w();break}catch(l){ky(e,l)}while(!0);Mc(),js.current=o,ee=i,Ce!==null?t=0:(De=null,Ie=0,t=be)}if(t!==0){if(t===2&&(i=eu(e),i!==0&&(r=i,t=Du(e,i))),t===1)throw n=io,Zn(e,0),gn(e,r),Ze(e,we()),n;if(t===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Uw(i)&&(t=zs(e,r),t===2&&(o=eu(e),o!==0&&(r=o,t=Du(e,o))),t===1))throw n=io,Zn(e,0),gn(e,r),Ze(e,we()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:$n(e,qe,Wt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=Gc+500-we(),10<t)){if(ws(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=au($n.bind(null,e,qe,Wt),t);break}$n(e,qe,Wt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-At(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bw(r/1960))-r,10<r){e.timeoutHandle=au($n.bind(null,e,qe,Wt),r);break}$n(e,qe,Wt);break;case 5:$n(e,qe,Wt);break;default:throw Error(M(329))}}}return Ze(e,we()),e.callbackNode===n?wy.bind(null,e):null}function Du(e,t){var n=Ri;return e.current.memoizedState.isDehydrated&&(Zn(e,t).flags|=256),e=zs(e,t),e!==2&&(t=qe,qe=n,t!==null&&Au(t)),e}function Au(e){qe===null?qe=e:qe.push.apply(qe,e)}function Uw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~Wc,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),r=1<<n;e[n]=-1,t&=~r}}function ip(e){if(ee&6)throw Error(M(327));Vr();var t=ws(e,0);if(!(t&1))return Ze(e,we()),null;var n=zs(e,t);if(e.tag!==0&&n===2){var r=eu(e);r!==0&&(t=r,n=Du(e,r))}if(n===1)throw n=io,Zn(e,0),gn(e,t),Ze(e,we()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,qe,Wt),Ze(e,we()),null}function Kc(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(qr=we()+500,al&&On())}}function or(e){xn!==null&&xn.tag===0&&!(ee&6)&&Vr();var t=ee;ee|=1;var n=wt.transition,r=re;try{if(wt.transition=null,re=1,e)return e()}finally{re=r,wt.transition=n,ee=t,!(ee&6)&&On()}}function qc(){it=Ir.current,ue(Ir)}function Zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xw(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Dc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ts();break;case 3:Gr(),ue(Xe),ue(ze),Oc();break;case 5:Fc(r);break;case 4:Gr();break;case 13:ue(he);break;case 19:ue(he);break;case 10:Nc(r.type._context);break;case 22:case 23:qc()}n=n.return}if(De=e,Ce=e=En(e.current,null),Ie=it=t,be=0,io=null,Wc=hl=ir=0,qe=Ri=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qn=null}return e}function ky(e,t){do{var n=Ce;try{if(Mc(),ns.current=Ls,Rs){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Rs=!1}if(rr=0,Ee=Te=de=null,Mi=!1,to=0,$c.current=null,n===null||n.return===null){be=1,io=t,Ce=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=Ie,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Wh(s);if(p!==null){p.flags&=-257,Gh(p,s,l,o,t),p.mode&1&&$h(o,u,t),t=p,a=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(a),t.updateQueue=v}else m.add(a);break e}else{if(!(t&1)){$h(o,u,t),Qc();break e}a=Error(M(426))}}else if(fe&&l.mode&1){var k=Wh(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Gh(k,s,l,o,t),Ac(Kr(a,l));break e}}o=a=Kr(a,l),be!==4&&(be=2),Ri===null?Ri=[o]:Ri.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=iy(o,a,t);zh(o,g);break e;case 1:l=a;var y=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Tn===null||!Tn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=oy(o,l,t);zh(o,S);break e}}o=o.return}while(o!==null)}Cy(n)}catch(b){t=b,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function Sy(){var e=js.current;return js.current=Ls,e===null?Ls:e}function Qc(){(be===0||be===3||be===2)&&(be=4),De===null||!(ir&268435455)&&!(hl&268435455)||gn(De,Ie)}function zs(e,t){var n=ee;ee|=2;var r=Sy();(De!==e||Ie!==t)&&(Wt=null,Zn(e,t));do try{Hw();break}catch(i){ky(e,i)}while(!0);if(Mc(),ee=n,js.current=r,Ce!==null)throw Error(M(261));return De=null,Ie=0,be}function Hw(){for(;Ce!==null;)Py(Ce)}function $w(){for(;Ce!==null&&!mv();)Py(Ce)}function Py(e){var t=by(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?Cy(e):Ce=t,$c.current=null}function Cy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ow(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,Ce=null;return}}else if(n=Fw(n,t,it),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);be===0&&(be=5)}function $n(e,t,n){var r=re,i=wt.transition;try{wt.transition=null,re=1,Ww(e,t,n,r)}finally{wt.transition=i,re=r}return null}function Ww(e,t,n,r){do Vr();while(xn!==null);if(ee&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Tv(e,o),e===De&&(Ce=De=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,Ey(vs,function(){return Vr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=wt.transition,wt.transition=null;var s=re;re=1;var l=ee;ee|=4,$c.current=null,_w(e,n),xy(n,e),fw(su),ks=!!ou,su=ou=null,e.current=n,Vw(n),gv(),ee=l,re=s,wt.transition=o}else e.current=n;if(Vo&&(Vo=!1,xn=e,Os=i),o=e.pendingLanes,o===0&&(Tn=null),vv(n.stateNode),Ze(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fs)throw Fs=!1,e=bu,bu=null,e;return Os&1&&e.tag!==0&&Vr(),o=e.pendingLanes,o&1?e===Eu?Li++:(Li=0,Eu=e):Li=0,On(),null}function Vr(){if(xn!==null){var e=ig(Os),t=wt.transition,n=re;try{if(wt.transition=null,re=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,Os=0,ee&6)throw Error(M(331));var i=ee;for(ee|=4,z=e.current;z!==null;){var o=z,s=o.child;if(z.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(z=u;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Ni(8,f,o)}var c=f.child;if(c!==null)c.return=f,z=c;else for(;z!==null;){f=z;var h=f.sibling,p=f.return;if(my(f),f===u){z=null;break}if(h!==null){h.return=p,z=h;break}z=p}}}var m=o.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,z=s;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ni(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,z=g;break e}z=o.return}}var y=e.current;for(z=y;z!==null;){s=z;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,z=x;else e:for(s=y;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fl(9,l)}}catch(b){xe(l,l.return,b)}if(l===s){z=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,z=S;break e}z=l.return}}if(ee=i,On(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{re=n,wt.transition=t}}return!1}function op(e,t,n){t=Kr(n,t),t=iy(e,t,1),e=Cn(e,t,1),t=He(),e!==null&&(po(e,1,t),Ze(e,t))}function xe(e,t,n){if(e.tag===3)op(e,e,n);else for(;t!==null;){if(t.tag===3){op(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){e=Kr(n,e),e=oy(t,e,1),t=Cn(t,e,1),e=He(),t!==null&&(po(t,1,e),Ze(t,e));break}}t=t.return}}function Gw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Ie&n)===n&&(be===4||be===3&&(Ie&130023424)===Ie&&500>we()-Gc?Zn(e,0):Wc|=n),Ze(e,t)}function Ty(e,t){t===0&&(e.mode&1?(t=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):t=1);var n=He();e=tn(e,t),e!==null&&(po(e,t,n),Ze(e,n))}function Kw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ty(e,n)}function qw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Ty(e,n)}var by;by=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,jw(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,fe&&t.flags&1048576&&Ig(t,Ds,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;is(e,t),e=t.pendingProps;var i=Hr(t,ze.current);_r(t,n),i=_c(null,t,r,e,i,n);var o=Vc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(o=!0,bs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lc(t),i.updater=cl,t.stateNode=i,i._reactInternals=t,mu(t,r,e,n),t=xu(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&Ec(t),Be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(is(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xw(r),e=bt(r,e),i){case 0:t=yu(null,t,r,e,n);break e;case 1:t=Qh(null,t,r,e,n);break e;case 11:t=Kh(null,t,r,e,n);break e;case 14:t=qh(null,t,r,bt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),yu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),Qh(e,t,r,i,n);case 3:e:{if(uy(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Fg(e,t),Ms(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Kr(Error(M(423)),t),t=Xh(e,t,r,n,i);break e}else if(r!==i){i=Kr(Error(M(424)),t),t=Xh(e,t,r,n,i);break e}else for(ot=Pn(t.stateNode.containerInfo.firstChild),st=t,fe=!0,Dt=null,n=Lg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){t=nn(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Og(t),e===null&&hu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,lu(r,i)?s=null:o!==null&&lu(r,o)&&(t.flags|=32),ay(e,t),Be(e,t,s,n),t.child;case 6:return e===null&&hu(t),null;case 13:return cy(e,t,n);case 4:return jc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),Kh(e,t,r,i,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,le(As,r._currentValue),r._currentValue=s,o!==null)if(Nt(o.value,s)){if(o.children===i.children&&!Xe.current){t=nn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Xt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pu(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(M(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_r(t,n),i=kt(i),r=r(i),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,i=bt(r,t.pendingProps),i=bt(r.type,i),qh(e,t,r,i,n);case 15:return sy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),is(e,t),t.tag=1,Ye(r)?(e=!0,bs(t)):e=!1,_r(t,n),ry(t,r,i),mu(t,r,i,n),xu(null,t,r,!0,e,n);case 19:return fy(e,t,n);case 22:return ly(e,t,n)}throw Error(M(156,t.tag))};function Ey(e,t){return eg(e,t)}function Qw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new Qw(e,t,n,r)}function Xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xw(e){if(typeof e=="function")return Xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mc)return 11;if(e===gc)return 14}return 2}function En(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ls(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Xc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wr:return Jn(n.children,i,o,t);case dc:s=8,i|=8;break;case _a:return e=vt(12,n,t,i|2),e.elementType=_a,e.lanes=o,e;case Va:return e=vt(13,n,t,i),e.elementType=Va,e.lanes=o,e;case Ba:return e=vt(19,n,t,i),e.elementType=Ba,e.lanes=o,e;case Om:return pl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jm:s=10;break e;case Fm:s=9;break e;case mc:s=11;break e;case gc:s=14;break e;case hn:s=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=vt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Jn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=vt(22,e,r,t),e.elementType=Om,e.lanes=n,e.stateNode={isHidden:!1},e}function ia(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function oa(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yc(e,t,n,r,i,o,s,l,a){return e=new Yw(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(o),e}function Zw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dy(e){if(!e)return Mn;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Ye(n))return Dg(e,n,t)}return t}function Ay(e,t,n,r,i,o,s,l,a){return e=Yc(n,r,!0,e,i,o,s,l,a),e.context=Dy(null),n=e.current,r=He(),i=bn(n),o=Xt(r,i),o.callback=t??null,Cn(n,o,i),e.current.lanes=i,po(e,i,r),Ze(e,r),e}function dl(e,t,n,r){var i=t.current,o=He(),s=bn(i);return n=Dy(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,s),e!==null&&(It(e,i,s,o),ts(e,i,s)),s}function _s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zc(e,t){sp(e,t),(e=e.alternate)&&sp(e,t)}function Jw(){return null}var Iy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jc(e){this._internalRoot=e}ml.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));dl(e,t,null,null)};ml.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){dl(null,e,null,null)}),t[en]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=lg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&ug(e)}};function ef(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lp(){}function ek(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=_s(s);o.call(u)}}var s=Ay(t,r,e,0,null,!1,!1,"",lp);return e._reactRootContainer=s,e[en]=s.current,Xi(e.nodeType===8?e.parentNode:e),or(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=_s(a);l.call(u)}}var a=Yc(e,0,!1,null,null,!1,!1,"",lp);return e._reactRootContainer=a,e[en]=a.current,Xi(e.nodeType===8?e.parentNode:e),or(function(){dl(t,a,n,r)}),a}function yl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=_s(s);l.call(a)}}dl(t,s,e,i)}else s=ek(n,t,e,i,r);return _s(s)}og=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pi(t.pendingLanes);n!==0&&(vc(t,n|1),Ze(t,we()),!(ee&6)&&(qr=we()+500,On()))}break;case 13:or(function(){var r=tn(e,1);if(r!==null){var i=He();It(r,e,1,i)}}),Zc(e,1)}};wc=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=He();It(t,e,134217728,n)}Zc(e,134217728)}};sg=function(e){if(e.tag===13){var t=bn(e),n=tn(e,t);if(n!==null){var r=He();It(n,e,t,r)}Zc(e,t)}};lg=function(){return re};ag=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Ya=function(e,t,n){switch(t){case"input":if($a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ll(r);if(!i)throw Error(M(90));_m(r),$a(r,i)}}}break;case"textarea":Bm(e,n);break;case"select":t=n.value,t!=null&&jr(e,!!n.multiple,t,!1)}};qm=Kc;Qm=or;var tk={usingClientEntryPoint:!1,Events:[go,Cr,ll,Gm,Km,Kc]},gi={findFiberByHostInstance:qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nk={bundleType:gi.bundleType,version:gi.version,rendererPackageName:gi.rendererPackageName,rendererConfig:gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zm(e),e===null?null:e.stateNode},findFiberByHostInstance:gi.findFiberByHostInstance||Jw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{rl=Bo.inject(nk),_t=Bo}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tk;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(t))throw Error(M(200));return Zw(e,t,null,n)};ct.createRoot=function(e,t){if(!ef(e))throw Error(M(299));var n=!1,r="",i=Iy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Yc(e,1,!1,null,null,n,!1,r,i),e[en]=t.current,Xi(e.nodeType===8?e.parentNode:e),new Jc(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Zm(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return or(e)};ct.hydrate=function(e,t,n){if(!gl(t))throw Error(M(200));return yl(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!ef(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Iy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ay(t,null,e,1,n??null,i,!1,o,s),e[en]=t.current,Xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ml(t)};ct.render=function(e,t,n){if(!gl(t))throw Error(M(200));return yl(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!gl(e))throw Error(M(40));return e._reactRootContainer?(or(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};ct.unstable_batchedUpdates=Kc;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return yl(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function My(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(My)}catch(e){console.error(e)}}My(),Mm.exports=ct;var rk=Mm.exports,ap=rk;Oa.createRoot=ap.createRoot,Oa.hydrateRoot=ap.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oo.apply(this,arguments)}var vn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vn||(vn={}));const up="popstate";function ik(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return Iu("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vs(i)}return sk(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ny(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ok(){return Math.random().toString(36).substr(2,8)}function cp(e,t){return{usr:e.state,key:e.key,idx:t}}function Iu(e,t,n,r){return n===void 0&&(n=null),oo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ri(t):t,{state:n,key:t&&t.key||r||ok()})}function Vs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ri(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function sk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=vn.Pop,a=null,u=f();u==null&&(u=0,s.replaceState(oo({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function c(){l=vn.Pop;let k=f(),g=k==null?null:k-u;u=k,a&&a({action:l,location:v.location,delta:g})}function h(k,g){l=vn.Push;let y=Iu(v.location,k,g);u=f()+1;let x=cp(y,u),S=v.createHref(y);try{s.pushState(x,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(S)}o&&a&&a({action:l,location:v.location,delta:1})}function p(k,g){l=vn.Replace;let y=Iu(v.location,k,g);u=f();let x=cp(y,u),S=v.createHref(y);s.replaceState(x,"",S),o&&a&&a({action:l,location:v.location,delta:0})}function m(k){let g=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof k=="string"?k:Vs(k);return y=y.replace(/ $/,"%20"),me(g,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,g)}let v={get action(){return l},get location(){return e(i,s)},listen(k){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(up,c),a=k,()=>{i.removeEventListener(up,c),a=null}},createHref(k){return t(i,k)},createURL:m,encodeLocation(k){let g=m(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(k){return s.go(k)}};return v}var fp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fp||(fp={}));function lk(e,t,n){return n===void 0&&(n="/"),ak(e,t,n)}function ak(e,t,n,r){let i=typeof t=="string"?ri(t):t,o=Qr(i.pathname||"/",n);if(o==null)return null;let s=Ry(e);uk(s);let l=null;for(let a=0;l==null&&a<s.length;++a){let u=wk(o);l=xk(s[a],u)}return l}function Ry(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&(me(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Dn([r,a.relativePath]),f=n.concat(a);o.children&&o.children.length>0&&(me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ry(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:gk(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let a of Ly(o.path))i(o,s,a)}),t}function Ly(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Ly(r.join("/")),l=[];return l.push(...s.map(a=>a===""?o:[o,a].join("/"))),i&&l.push(...s),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function uk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:yk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ck=/^:[\w-]+$/,fk=3,hk=2,pk=1,dk=10,mk=-2,hp=e=>e==="*";function gk(e,t){let n=e.split("/"),r=n.length;return n.some(hp)&&(r+=mk),t&&(r+=hk),n.filter(i=>!hp(i)).reduce((i,o)=>i+(ck.test(o)?fk:o===""?pk:dk),r)}function yk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function xk(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",c=Mu({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},f),h=a.route;if(!c)return null;Object.assign(i,c.params),s.push({params:i,pathname:Dn([o,c.pathname]),pathnameBase:Ck(Dn([o,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(o=Dn([o,c.pathnameBase]))}return s}function Mu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=vk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:h,isOptional:p}=f;if(h==="*"){let v=l[c]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const m=l[c];return p&&!m?u[h]=void 0:u[h]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function vk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ny(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function wk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ny(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function kk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ri(e):e;return{pathname:n?n.startsWith("/")?n:Sk(n,t):t,search:Tk(r),hash:bk(i)}}function Sk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function tf(e,t){let n=Pk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function nf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ri(e):(i=oo({},e),me(!i.pathname||!i.pathname.includes("?"),sa("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),sa("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),sa("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let c=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?t[c]:"/"}let a=kk(i,l),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||f)&&(a.pathname+="/"),a}const Dn=e=>e.join("/").replace(/\/\/+/g,"/"),Ck=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Tk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ek(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jy=["post","put","patch","delete"];new Set(jy);const Dk=["get",...jy];new Set(Dk);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}const xl=E.createContext(null),Fy=E.createContext(null),sn=E.createContext(null),vl=E.createContext(null),ln=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Oy=E.createContext(null);function Ak(e,t){let{relative:n}=t===void 0?{}:t;ii()||me(!1);let{basename:r,navigator:i}=E.useContext(sn),{hash:o,pathname:s,search:l}=wl(e,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:Dn([r,s])),i.createHref({pathname:a,search:l,hash:o})}function ii(){return E.useContext(vl)!=null}function cr(){return ii()||me(!1),E.useContext(vl).location}function zy(e){E.useContext(sn).static||E.useLayoutEffect(e)}function _y(){let{isDataRoute:e}=E.useContext(ln);return e?Hk():Ik()}function Ik(){ii()||me(!1);let e=E.useContext(xl),{basename:t,future:n,navigator:r}=E.useContext(sn),{matches:i}=E.useContext(ln),{pathname:o}=cr(),s=JSON.stringify(tf(i,n.v7_relativeSplatPath)),l=E.useRef(!1);return zy(()=>{l.current=!0}),E.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=nf(u,JSON.parse(s),o,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Dn([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,s,o,e])}function Mk(){let{matches:e}=E.useContext(ln),t=e[e.length-1];return t?t.params:{}}function wl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(sn),{matches:i}=E.useContext(ln),{pathname:o}=cr(),s=JSON.stringify(tf(i,r.v7_relativeSplatPath));return E.useMemo(()=>nf(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Nk(e,t){return Rk(e,t)}function Rk(e,t,n,r){ii()||me(!1);let{navigator:i}=E.useContext(sn),{matches:o}=E.useContext(ln),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=cr(),f;if(t){var c;let k=typeof t=="string"?ri(t):t;a==="/"||(c=k.pathname)!=null&&c.startsWith(a)||me(!1),f=k}else f=u;let h=f.pathname||"/",p=h;if(a!=="/"){let k=a.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let m=lk(e,{pathname:p}),v=zk(m&&m.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Dn([a,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?a:Dn([a,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,r);return t&&v?E.createElement(vl.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:vn.Pop}},v):v}function Lk(){let e=Uk(),t=Ek(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const jk=E.createElement(Lk,null);class Fk extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(ln.Provider,{value:this.props.routeContext},E.createElement(Oy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ok(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(xl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(ln.Provider,{value:t},r)}function zk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=s.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);f>=0||me(!1),s=s.slice(0,Math.min(s.length,f+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let c=s[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:h,errors:p}=n,m=c.route.loader&&h[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||m){a=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,c,h)=>{let p,m=!1,v=null,k=null;n&&(p=l&&c.route.id?l[c.route.id]:void 0,v=c.route.errorElement||jk,a&&(u<0&&h===0?($k("route-fallback"),m=!0,k=null):u===h&&(m=!0,k=c.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,h+1)),y=()=>{let x;return p?x=v:m?x=k:c.route.Component?x=E.createElement(c.route.Component,null):c.route.element?x=c.route.element:x=f,E.createElement(Ok,{match:c,routeContext:{outlet:f,matches:g,isDataRoute:n!=null},children:x})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?E.createElement(Fk,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var Vy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vy||{}),By=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(By||{});function _k(e){let t=E.useContext(xl);return t||me(!1),t}function Vk(e){let t=E.useContext(Fy);return t||me(!1),t}function Bk(e){let t=E.useContext(ln);return t||me(!1),t}function Uy(e){let t=Bk(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function Uk(){var e;let t=E.useContext(Oy),n=Vk(),r=Uy();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Hk(){let{router:e}=_k(Vy.UseNavigateStable),t=Uy(By.UseNavigateStable),n=E.useRef(!1);return zy(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,so({fromRouteId:t},o)))},[e,t])}const pp={};function $k(e,t,n){pp[e]||(pp[e]=!0)}function Wk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Nu(e){let{to:t,replace:n,state:r,relative:i}=e;ii()||me(!1);let{future:o,static:s}=E.useContext(sn),{matches:l}=E.useContext(ln),{pathname:a}=cr(),u=_y(),f=nf(t,tf(l,o.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(f);return E.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function dt(e){me(!1)}function Gk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=vn.Pop,navigator:o,static:s=!1,future:l}=e;ii()&&me(!1);let a=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:a,navigator:o,static:s,future:so({v7_relativeSplatPath:!1},l)}),[a,l,o,s]);typeof r=="string"&&(r=ri(r));let{pathname:f="/",search:c="",hash:h="",state:p=null,key:m="default"}=r,v=E.useMemo(()=>{let k=Qr(f,a);return k==null?null:{location:{pathname:k,search:c,hash:h,state:p,key:m},navigationType:i}},[a,f,c,h,p,m,i]);return v==null?null:E.createElement(sn.Provider,{value:u},E.createElement(vl.Provider,{children:n,value:v}))}function Kk(e){let{children:t,location:n}=e;return Nk(Ru(t),n)}new Promise(()=>{});function Ru(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Ru(r.props.children,o));return}r.type!==dt&&me(!1),!r.props.index||!r.props.children||me(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ru(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bs(){return Bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bs.apply(this,arguments)}function Hy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function qk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qk(e,t){return e.button===0&&(!t||t==="_self")&&!qk(e)}const Xk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Yk=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Zk="6";try{window.__reactRouterVersion=Zk}catch{}const Jk=E.createContext({isTransitioning:!1}),e2="startTransition",dp=Gx[e2];function t2(e){let{basename:t,children:n,future:r,window:i}=e,o=E.useRef();o.current==null&&(o.current=ik({window:i,v5Compat:!0}));let s=o.current,[l,a]=E.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=E.useCallback(c=>{u&&dp?dp(()=>a(c)):a(c)},[a,u]);return E.useLayoutEffect(()=>s.listen(f),[s,f]),E.useEffect(()=>Wk(r),[r]),E.createElement(Gk,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const n2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",r2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xr=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:a,to:u,preventScrollReset:f,viewTransition:c}=t,h=Hy(t,Xk),{basename:p}=E.useContext(sn),m,v=!1;if(typeof u=="string"&&r2.test(u)&&(m=u,n2))try{let x=new URL(window.location.href),S=u.startsWith("//")?new URL(x.protocol+u):new URL(u),b=Qr(S.pathname,p);S.origin===x.origin&&b!=null?u=b+S.search+S.hash:v=!0}catch{}let k=Ak(u,{relative:i}),g=o2(u,{replace:s,state:l,target:a,preventScrollReset:f,relative:i,viewTransition:c});function y(x){r&&r(x),x.defaultPrevented||g(x)}return E.createElement("a",Bs({},h,{href:m||k,onClick:v||o?r:y,ref:n,target:a}))}),la=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:l,to:a,viewTransition:u,children:f}=t,c=Hy(t,Yk),h=wl(a,{relative:c.relative}),p=cr(),m=E.useContext(Fy),{navigator:v,basename:k}=E.useContext(sn),g=m!=null&&s2(h)&&u===!0,y=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,x=p.pathname,S=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(x=x.toLowerCase(),S=S?S.toLowerCase():null,y=y.toLowerCase()),S&&k&&(S=Qr(S,k)||S);const b=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let C=x===y||!s&&x.startsWith(y)&&x.charAt(b)==="/",A=S!=null&&(S===y||!s&&S.startsWith(y)&&S.charAt(y.length)==="/"),D={isActive:C,isPending:A,isTransitioning:g},j=C?r:void 0,T;typeof o=="function"?T=o(D):T=[o,C?"active":null,A?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let F=typeof l=="function"?l(D):l;return E.createElement(Xr,Bs({},c,{"aria-current":j,className:T,ref:n,style:F,to:a,viewTransition:u}),typeof f=="function"?f(D):f)});var Lu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Lu||(Lu={}));var mp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mp||(mp={}));function i2(e){let t=E.useContext(xl);return t||me(!1),t}function o2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,a=_y(),u=cr(),f=wl(e,{relative:s});return E.useCallback(c=>{if(Qk(c,n)){c.preventDefault();let h=r!==void 0?r:Vs(u)===Vs(f);a(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[u,a,f,r,i,n,e,o,s,l])}function s2(e,t){t===void 0&&(t={});let n=E.useContext(Jk);n==null&&me(!1);let{basename:r}=i2(Lu.useViewTransitionState),i=wl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Qr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Qr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Mu(i.pathname,s)!=null||Mu(i.pathname,o)!=null}var $y={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var l in o)t.call(o,l)&&o[l]&&(s=i(s,l));return s}function i(o,s){return s?o?o+" "+s:o+s:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})($y);var l2=$y.exports;const aa=el(l2);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ve=(e,t)=>{const n=E.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:l="",children:a,...u},f)=>E.createElement("svg",{ref:f,...a2,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${u2(e)}`,l].join(" "),...u},[...t.map(([c,h])=>E.createElement(c,h)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=ve("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=ve("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=ve("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=ve("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=ve("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=ve("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=ve("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=ve("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=ve("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=ve("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=ve("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=ve("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=ve("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=ve("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=ve("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=ve("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=ve("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=ve("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=ve("TerminalSquare",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=ve("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),xp=[{to:"/",label:"首頁"},{to:"/about",label:"關於我"},{to:"/projects",label:"專案"},{to:"/services",label:"服務"},{to:"/blog",label:"文章"},{to:"/cv",label:"CV"},{to:"/certifications",label:"證照"},{to:"/contact",label:"聯絡"}];function w2(){const[e,t]=E.useState(!1),n=cr();return E.useEffect(()=>{t(!1)},[n.pathname]),d.jsx("header",{className:"fixed left-1/2 top-4 z-40 w-[calc(100%-1.25rem)] max-w-6xl -translate-x-1/2",children:d.jsxs("nav",{className:"rounded-[1.15rem] border border-[#39ff1429] bg-[#030a10e3] px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6",children:[d.jsxs("div",{className:"flex items-center justify-between gap-4",children:[d.jsxs(la,{to:"/",className:"flex min-w-0 items-center gap-3 text-white",children:[d.jsxs("span",{className:"relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#39ff1450] bg-[radial-gradient(circle_at_top,#10321f_0%,#06110d_62%,#03070a_100%)] shadow-[0_0_18px_rgba(57,255,20,0.18)]",children:[d.jsx("span",{className:"pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(57,255,20,0.1)_48%,transparent_52%,transparent_100%)] opacity-80"}),d.jsx("span",{className:"pointer-events-none absolute inset-x-1 top-1 h-px bg-[#8af7fe]/70"}),d.jsx("span",{className:"mono relative text-sm font-bold tracking-[-0.12em] text-[#8cff61]",children:">_"})]}),d.jsxs("span",{className:"min-w-0",children:[d.jsx("span",{className:"mono block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8af7fe]",children:"Eric / Security Terminal"}),d.jsx("span",{className:"block truncate text-sm font-semibold text-zinc-100 sm:text-base",children:"資安筆記 / 專案 / 個人網站"})]})]}),d.jsx("button",{type:"button",className:"inline-flex items-center justify-center rounded-full border border-[#39ff1429] bg-[#39ff140d] p-2 text-[#b8ffb8] transition hover:bg-[#39ff1416] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff14] sm:hidden",onClick:()=>t(r=>!r),"aria-label":"切換導航選單","aria-expanded":e,"aria-controls":"primary-navigation",children:e?d.jsx(v2,{className:"h-5 w-5"}):d.jsx(m2,{className:"h-5 w-5"})}),d.jsx("ul",{className:"hidden items-center gap-1 text-sm font-medium lg:flex xl:gap-2",children:xp.map(r=>d.jsx("li",{children:d.jsx(la,{to:r.to,className:({isActive:i})=>aa("inline-flex rounded-full px-3 py-2 font-semibold transition xl:px-4",i?"bg-[#39ff14] text-[#04110a] shadow-[0_0_22px_rgba(57,255,20,0.22)]":"text-zinc-300 hover:bg-[#39ff140f] hover:text-white"),children:r.label})},r.to))})]}),d.jsxs("div",{className:"mt-3 hidden items-center gap-2 border-t border-[#39ff1416] pt-3 text-[0.72rem] text-zinc-400 lg:flex",children:[d.jsx(lf,{className:"h-4 w-4 text-[#39ff14]"}),d.jsx("span",{className:"mono",children:"status: active / role: cybersecurity practitioner / notes online"})]}),d.jsx("ul",{id:"primary-navigation",className:aa("mt-3 grid gap-2 border-t border-[#39ff1416] pt-3 text-sm font-medium lg:hidden",e?"grid":"hidden"),children:xp.map(r=>d.jsx("li",{children:d.jsx(la,{to:r.to,className:({isActive:i})=>aa("block rounded-xl px-4 py-3 font-semibold transition",i?"bg-[#39ff14] text-[#04110a]":"bg-white/[0.02] text-zinc-200 hover:bg-[#39ff140f]"),children:r.label})},r.to))})]})})}const k2=[{label:"外包網站",href:"https://chiayicity.zeabur.app/"},{label:"iThome 鐵人賽",href:"https://ithelp.ithome.com.tw/users/20171891/ironman/8352"},{label:"舊版文章站",href:"https://and910805.github.io/eric_site/"},{label:"HackMD 筆記",href:"https://hackmd.io/@LKanFpXQTUSJayug7EHeiA"}];function S2(){return d.jsx("footer",{className:"mx-auto w-full max-w-6xl px-4 py-8 text-[0.85rem] text-zinc-400 sm:px-8 lg:px-12",children:d.jsxs("div",{className:"flex flex-col gap-4 border-t border-[#39ff1418] pt-6 sm:flex-row sm:items-center sm:justify-between",children:[d.jsxs("div",{className:"space-y-1",children:[d.jsxs("div",{className:"mono flex items-center gap-2 text-zinc-100",children:[d.jsx(qy,{className:"h-4 w-4 text-[#39ff14]"}),"Eric Security Terminal"]}),d.jsx("div",{children:"cybersecurity / notes / projects / automation"})]}),d.jsx("ul",{className:"flex flex-wrap gap-3 text-zinc-300",children:k2.map(e=>d.jsx("li",{children:d.jsxs("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 transition hover:text-[#b8ffb8]",children:[d.jsx(sr,{className:"h-3.5 w-3.5"}),e.label]})},e.href))})]})})}const Qy=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),kl=E.createContext({}),af=E.createContext(null),Sl=typeof document<"u",P2=Sl?E.useLayoutEffect:E.useEffect,Xy=E.createContext({strict:!1}),uf=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),C2="framerAppearId",Yy="data-"+uf(C2);function T2(e,t,n,r){const{visualElement:i}=E.useContext(kl),o=E.useContext(Xy),s=E.useContext(af),l=E.useContext(Qy).reducedMotion,a=E.useRef();r=r||o.renderer,!a.current&&r&&(a.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:l}));const u=a.current;E.useInsertionEffect(()=>{u&&u.update(n,s)});const f=E.useRef(!!(n[Yy]&&!window.HandoffComplete));return P2(()=>{u&&(u.render(),f.current&&u.animationState&&u.animationState.animateChanges())}),E.useEffect(()=>{u&&(u.updateFeatures(),!f.current&&u.animationState&&u.animationState.animateChanges(),f.current&&(f.current=!1,window.HandoffComplete=!0))}),u}function Mr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function b2(e,t,n){return E.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Mr(n)&&(n.current=r))},[t])}function lo(e){return typeof e=="string"||Array.isArray(e)}function Pl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const cf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ff=["initial",...cf];function Cl(e){return Pl(e.animate)||ff.some(t=>lo(e[t]))}function Zy(e){return!!(Cl(e)||e.variants)}function E2(e,t){if(Cl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||lo(n)?n:void 0,animate:lo(r)?r:void 0}}return e.inherit!==!1?t:{}}function D2(e){const{initial:t,animate:n}=E2(e,E.useContext(kl));return E.useMemo(()=>({initial:t,animate:n}),[vp(t),vp(n)])}function vp(e){return Array.isArray(e)?e.join(" "):e}const wp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ao={};for(const e in wp)ao[e]={isEnabled:t=>wp[e].some(n=>!!t[n])};function A2(e){for(const t in e)ao[t]={...ao[t],...e[t]}}const Jy=E.createContext({}),e0=E.createContext({}),I2=Symbol.for("motionComponentSymbol");function M2({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&A2(e);function o(l,a){let u;const f={...E.useContext(Qy),...l,layoutId:N2(l)},{isStatic:c}=f,h=D2(l),p=r(l,c);if(!c&&Sl){h.visualElement=T2(i,p,f,t);const m=E.useContext(e0),v=E.useContext(Xy).strict;h.visualElement&&(u=h.visualElement.loadFeatures(f,v,e,m))}return E.createElement(kl.Provider,{value:h},u&&h.visualElement?E.createElement(u,{visualElement:h.visualElement,...f}):null,n(i,l,b2(p,h.visualElement,a),p,c,h.visualElement))}const s=E.forwardRef(o);return s[I2]=i,s}function N2({layoutId:e}){const t=E.useContext(Jy).id;return t&&e!==void 0?t+"-"+e:e}function R2(e){function t(r,i={}){return M2(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const L2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hf(e){return typeof e!="string"||e.includes("-")?!1:!!(L2.indexOf(e)>-1||/[A-Z]/.test(e))}const Us={};function j2(e){Object.assign(Us,e)}const xo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fr=new Set(xo);function t0(e,{layout:t,layoutId:n}){return fr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Us[e]||e==="opacity")}const Je=e=>!!(e&&e.getVelocity),F2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},O2=xo.length;function z2(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<O2;s++){const l=xo[s];if(e[l]!==void 0){const a=F2[l]||l;o+=`${a}(${e[l]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const n0=e=>t=>typeof t=="string"&&t.startsWith(e),r0=n0("--"),Fu=n0("var(--"),_2=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,V2=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Nn=(e,t,n)=>Math.min(Math.max(n,e),t),hr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ji={...hr,transform:e=>Nn(0,1,e)},Uo={...hr,default:1},Fi=e=>Math.round(e*1e5)/1e5,Tl=/(-)?([\d]*\.?[\d])+/g,i0=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,B2=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function vo(e){return typeof e=="string"}const wo=e=>({test:t=>vo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),fn=wo("deg"),Bt=wo("%"),U=wo("px"),U2=wo("vh"),H2=wo("vw"),kp={...Bt,parse:e=>Bt.parse(e)/100,transform:e=>Bt.transform(e*100)},Sp={...hr,transform:Math.round},o0={borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,radius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,size:U,top:U,right:U,bottom:U,left:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,rotate:fn,rotateX:fn,rotateY:fn,rotateZ:fn,scale:Uo,scaleX:Uo,scaleY:Uo,scaleZ:Uo,skew:fn,skewX:fn,skewY:fn,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:ji,originX:kp,originY:kp,originZ:U,zIndex:Sp,fillOpacity:ji,strokeOpacity:ji,numOctaves:Sp};function pf(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:l}=e;let a=!1,u=!1,f=!0;for(const c in t){const h=t[c];if(r0(c)){o[c]=h;continue}const p=o0[c],m=V2(h,p);if(fr.has(c)){if(a=!0,s[c]=m,!f)continue;h!==(p.default||0)&&(f=!1)}else c.startsWith("origin")?(u=!0,l[c]=m):i[c]=m}if(t.transform||(a||r?i.transform=z2(e.transform,n,f,r):i.transform&&(i.transform="none")),u){const{originX:c="50%",originY:h="50%",originZ:p=0}=l;i.transformOrigin=`${c} ${h} ${p}`}}const df=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function s0(e,t,n){for(const r in t)!Je(t[r])&&!t0(r,n)&&(e[r]=t[r])}function $2({transformTemplate:e},t,n){return E.useMemo(()=>{const r=df();return pf(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function W2(e,t,n){const r=e.style||{},i={};return s0(i,r,e),Object.assign(i,$2(e,t,n)),e.transformValues?e.transformValues(i):i}function G2(e,t,n){const r={},i=W2(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const K2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||K2.has(e)}let l0=e=>!Hs(e);function q2(e){e&&(l0=t=>t.startsWith("on")?!Hs(t):e(t))}try{q2(require("@emotion/is-prop-valid").default)}catch{}function Q2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(l0(i)||n===!0&&Hs(i)||!t&&!Hs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Pp(e,t,n){return typeof e=="string"?e:U.transform(t+n*e)}function X2(e,t,n){const r=Pp(t,e.x,e.width),i=Pp(n,e.y,e.height);return`${r} ${i}`}const Y2={offset:"stroke-dashoffset",array:"stroke-dasharray"},Z2={offset:"strokeDashoffset",array:"strokeDasharray"};function J2(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?Y2:Z2;e[o.offset]=U.transform(-r);const s=U.transform(t),l=U.transform(n);e[o.array]=`${s} ${l}`}function mf(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:l=1,pathOffset:a=0,...u},f,c,h){if(pf(e,u,f,h),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:v}=e;p.transform&&(v&&(m.transform=p.transform),delete p.transform),v&&(i!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=X2(v,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),s!==void 0&&J2(p,s,l,a,!1)}const a0=()=>({...df(),attrs:{}}),gf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function eS(e,t,n,r){const i=E.useMemo(()=>{const o=a0();return mf(o,t,{enableHardwareAcceleration:!1},gf(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};s0(o,e.style,e),i.style={...o,...i.style}}return i}function tS(e=!1){return(n,r,i,{latestValues:o},s)=>{const a=(hf(n)?eS:G2)(r,o,s,n),f={...Q2(r,typeof n=="string",e),...a,ref:i},{children:c}=r,h=E.useMemo(()=>Je(c)?c.get():c,[c]);return E.createElement(n,{...f,children:h})}}function u0(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const c0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function f0(e,t,n,r){u0(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(c0.has(i)?i:uf(i),t.attrs[i])}function yf(e,t){const{style:n}=e,r={};for(const i in n)(Je(n[i])||t.style&&Je(t.style[i])||t0(i,e))&&(r[i]=n[i]);return r}function h0(e,t){const n=yf(e,t);for(const r in e)if(Je(e[r])||Je(t[r])){const i=xo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function xf(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function nS(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const $s=e=>Array.isArray(e),rS=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),iS=e=>$s(e)?e[e.length-1]||0:e;function as(e){const t=Je(e)?e.get():e;return rS(t)?t.toValue():t}function oS({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:sS(r,i,o,e),renderState:t()};return n&&(s.mount=l=>n(r,l,s)),s}const p0=e=>(t,n)=>{const r=E.useContext(kl),i=E.useContext(af),o=()=>oS(e,t,r,i);return n?o():nS(o)};function sS(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=as(o[h]);let{initial:s,animate:l}=e;const a=Cl(e),u=Zy(e);t&&u&&!a&&e.inherit!==!1&&(s===void 0&&(s=t.initial),l===void 0&&(l=t.animate));let f=n?n.initial===!1:!1;f=f||s===!1;const c=f?l:s;return c&&typeof c!="boolean"&&!Pl(c)&&(Array.isArray(c)?c:[c]).forEach(p=>{const m=xf(e,p);if(!m)return;const{transitionEnd:v,transition:k,...g}=m;for(const y in g){let x=g[y];if(Array.isArray(x)){const S=f?x.length-1:0;x=x[S]}x!==null&&(i[y]=x)}for(const y in v)i[y]=v[y]}),i}const ke=e=>e;class Cp{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function lS(e){let t=new Cp,n=new Cp,r=0,i=!1,o=!1;const s=new WeakSet,l={schedule:(a,u=!1,f=!1)=>{const c=f&&i,h=c?t:n;return u&&s.add(a),h.add(a)&&c&&i&&(r=t.order.length),a},cancel:a=>{n.remove(a),s.delete(a)},process:a=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const f=t.order[u];f(a),s.has(f)&&(l.schedule(f),e())}i=!1,o&&(o=!1,l.process(a))}};return l}const Ho=["prepare","read","update","preRender","render","postRender"],aS=40;function uS(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Ho.reduce((c,h)=>(c[h]=lS(()=>n=!0),c),{}),s=c=>o[c].process(i),l=()=>{const c=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(c-i.timestamp,aS),1),i.timestamp=c,i.isProcessing=!0,Ho.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(l))},a=()=>{n=!0,r=!0,i.isProcessing||e(l)};return{schedule:Ho.reduce((c,h)=>{const p=o[h];return c[h]=(m,v=!1,k=!1)=>(n||a(),p.schedule(m,v,k)),c},{}),cancel:c=>Ho.forEach(h=>o[h].cancel(c)),state:i,steps:o}}const{schedule:ce,cancel:rn,state:Le,steps:ua}=uS(typeof requestAnimationFrame<"u"?requestAnimationFrame:ke,!0),cS={useVisualState:p0({scrapeMotionValuesFromProps:h0,createRenderState:a0,onMount:(e,t,{renderState:n,latestValues:r})=>{ce.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ce.render(()=>{mf(n,r,{enableHardwareAcceleration:!1},gf(t.tagName),e.transformTemplate),f0(t,n)})}})},fS={useVisualState:p0({scrapeMotionValuesFromProps:yf,createRenderState:df})};function hS(e,{forwardMotionProps:t=!1},n,r){return{...hf(e)?cS:fS,preloadedFeatures:n,useRender:tS(t),createVisualElement:r,Component:e}}function Qt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const d0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function bl(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const pS=e=>t=>d0(t)&&e(t,bl(t));function Yt(e,t,n,r){return Qt(e,t,pS(n),r)}const dS=(e,t)=>n=>t(e(n)),An=(...e)=>e.reduce(dS);function m0(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Tp=m0("dragHorizontal"),bp=m0("dragVertical");function g0(e){let t=!1;if(e==="y")t=bp();else if(e==="x")t=Tp();else{const n=Tp(),r=bp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function y0(){const e=g0(!0);return e?(e(),!1):!0}class zn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Ep(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||y0())return;const l=e.getProps();e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",t),l[r]&&ce.update(()=>l[r](o,s))};return Yt(e.current,n,i,{passive:!e.getProps()[r]})}class mS extends zn{mount(){this.unmount=An(Ep(this.node,!0),Ep(this.node,!1))}unmount(){}}class gS extends zn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=An(Qt(this.node.current,"focus",()=>this.onFocus()),Qt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const x0=(e,t)=>t?e===t?!0:x0(e,t.parentElement):!1;function ca(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,bl(n))}class yS extends zn{constructor(){super(...arguments),this.removeStartListeners=ke,this.removeEndListeners=ke,this.removeAccessibleListeners=ke,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Yt(window,"pointerup",(l,a)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:f,globalTapTarget:c}=this.node.getProps();ce.update(()=>{!c&&!x0(this.node.current,l.target)?f&&f(l,a):u&&u(l,a)})},{passive:!(r.onTap||r.onPointerUp)}),s=Yt(window,"pointercancel",(l,a)=>this.cancelPress(l,a),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=An(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=l=>{l.key!=="Enter"||!this.checkPressEnd()||ca("up",(a,u)=>{const{onTap:f}=this.node.getProps();f&&ce.update(()=>f(a,u))})};this.removeEndListeners(),this.removeEndListeners=Qt(this.node.current,"keyup",s),ca("down",(l,a)=>{this.startPress(l,a)})},n=Qt(this.node.current,"keydown",t),r=()=>{this.isPressing&&ca("cancel",(o,s)=>this.cancelPress(o,s))},i=Qt(this.node.current,"blur",r);this.removeAccessibleListeners=An(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ce.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!y0()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ce.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Yt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Qt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=An(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Ou=new WeakMap,fa=new WeakMap,xS=e=>{const t=Ou.get(e.target);t&&t(e)},vS=e=>{e.forEach(xS)};function wS({root:e,...t}){const n=e||document;fa.has(n)||fa.set(n,{});const r=fa.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(vS,{root:e,...t})),r[i]}function kS(e,t,n){const r=wS(t);return Ou.set(e,n),r.observe(e),()=>{Ou.delete(e),r.unobserve(e)}}const SS={some:0,all:1};class PS extends zn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:SS[i]},l=a=>{const{isIntersecting:u}=a;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:f,onViewportLeave:c}=this.node.getProps(),h=u?f:c;h&&h(a)};return kS(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(CS(t,n))&&this.startObserver()}unmount(){}}function CS({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const TS={inView:{Feature:PS},tap:{Feature:yS},focus:{Feature:gS},hover:{Feature:mS}};function v0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function bS(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function ES(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function El(e,t,n){const r=e.getProps();return xf(r,t,n!==void 0?n:r.custom,bS(e),ES(e))}let vf=ke;const er=e=>e*1e3,Zt=e=>e/1e3,DS={current:!1},w0=e=>Array.isArray(e)&&typeof e[0]=="number";function k0(e){return!!(!e||typeof e=="string"&&S0[e]||w0(e)||Array.isArray(e)&&e.every(k0))}const Ti=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,S0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ti([0,.65,.55,1]),circOut:Ti([.55,0,1,.45]),backIn:Ti([.31,.01,.66,-.59]),backOut:Ti([.33,1.53,.69,.99])};function P0(e){if(e)return w0(e)?Ti(e):Array.isArray(e)?e.map(P0):S0[e]}function AS(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:l,times:a}={}){const u={[t]:n};a&&(u.offset=a);const f=P0(l);return Array.isArray(f)&&(u.easing=f),e.animate(u,{delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function IS(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const C0=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,MS=1e-7,NS=12;function RS(e,t,n,r,i){let o,s,l=0;do s=t+(n-t)/2,o=C0(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>MS&&++l<NS);return s}function ko(e,t,n,r){if(e===t&&n===r)return ke;const i=o=>RS(o,0,1,e,n);return o=>o===0||o===1?o:C0(i(o),t,r)}const LS=ko(.42,0,1,1),jS=ko(0,0,.58,1),T0=ko(.42,0,.58,1),FS=e=>Array.isArray(e)&&typeof e[0]!="number",b0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,E0=e=>t=>1-e(1-t),wf=e=>1-Math.sin(Math.acos(e)),D0=E0(wf),OS=b0(wf),A0=ko(.33,1.53,.69,.99),kf=E0(A0),zS=b0(kf),_S=e=>(e*=2)<1?.5*kf(e):.5*(2-Math.pow(2,-10*(e-1))),VS={linear:ke,easeIn:LS,easeInOut:T0,easeOut:jS,circIn:wf,circInOut:OS,circOut:D0,backIn:kf,backInOut:zS,backOut:A0,anticipate:_S},Dp=e=>{if(Array.isArray(e)){vf(e.length===4);const[t,n,r,i]=e;return ko(t,n,r,i)}else if(typeof e=="string")return VS[e];return e},Sf=(e,t)=>n=>!!(vo(n)&&B2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),I0=(e,t,n)=>r=>{if(!vo(r))return r;const[i,o,s,l]=r.match(Tl);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},BS=e=>Nn(0,255,e),ha={...hr,transform:e=>Math.round(BS(e))},Yn={test:Sf("rgb","red"),parse:I0("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ha.transform(e)+", "+ha.transform(t)+", "+ha.transform(n)+", "+Fi(ji.transform(r))+")"};function US(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const zu={test:Sf("#"),parse:US,transform:Yn.transform},Nr={test:Sf("hsl","hue"),parse:I0("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Bt.transform(Fi(t))+", "+Bt.transform(Fi(n))+", "+Fi(ji.transform(r))+")"},Ve={test:e=>Yn.test(e)||zu.test(e)||Nr.test(e),parse:e=>Yn.test(e)?Yn.parse(e):Nr.test(e)?Nr.parse(e):zu.parse(e),transform:e=>vo(e)?e:e.hasOwnProperty("red")?Yn.transform(e):Nr.transform(e)},pe=(e,t,n)=>-n*e+n*t+e;function pa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function HS({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const l=n<.5?n*(1+t):n+t-n*t,a=2*n-l;i=pa(a,l,e+1/3),o=pa(a,l,e),s=pa(a,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const da=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},$S=[zu,Yn,Nr],WS=e=>$S.find(t=>t.test(e));function Ap(e){const t=WS(e);let n=t.parse(e);return t===Nr&&(n=HS(n)),n}const M0=(e,t)=>{const n=Ap(e),r=Ap(t),i={...n};return o=>(i.red=da(n.red,r.red,o),i.green=da(n.green,r.green,o),i.blue=da(n.blue,r.blue,o),i.alpha=pe(n.alpha,r.alpha,o),Yn.transform(i))};function GS(e){var t,n;return isNaN(e)&&vo(e)&&(((t=e.match(Tl))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(i0))===null||n===void 0?void 0:n.length)||0)>0}const N0={regex:_2,countKey:"Vars",token:"${v}",parse:ke},R0={regex:i0,countKey:"Colors",token:"${c}",parse:Ve.parse},L0={regex:Tl,countKey:"Numbers",token:"${n}",parse:hr.parse};function ma(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function Ws(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&ma(n,N0),ma(n,R0),ma(n,L0),n}function j0(e){return Ws(e).values}function F0(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Ws(e),o=t.length;return s=>{let l=i;for(let a=0;a<o;a++)a<r?l=l.replace(N0.token,s[a]):a<r+n?l=l.replace(R0.token,Ve.transform(s[a])):l=l.replace(L0.token,Fi(s[a]));return l}}const KS=e=>typeof e=="number"?0:e;function qS(e){const t=j0(e);return F0(e)(t.map(KS))}const Rn={test:GS,parse:j0,createTransformer:F0,getAnimatableNone:qS},O0=(e,t)=>n=>`${n>0?t:e}`;function z0(e,t){return typeof e=="number"?n=>pe(e,t,n):Ve.test(e)?M0(e,t):e.startsWith("var(")?O0(e,t):V0(e,t)}const _0=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>z0(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},QS=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=z0(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},V0=(e,t)=>{const n=Rn.createTransformer(t),r=Ws(e),i=Ws(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?An(_0(r.values,i.values),n):O0(e,t)},uo=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ip=(e,t)=>n=>pe(e,t,n);function XS(e){return typeof e=="number"?Ip:typeof e=="string"?Ve.test(e)?M0:V0:Array.isArray(e)?_0:typeof e=="object"?QS:Ip}function YS(e,t,n){const r=[],i=n||XS(e[0]),o=e.length-1;for(let s=0;s<o;s++){let l=i(e[s],e[s+1]);if(t){const a=Array.isArray(t)?t[s]||ke:t;l=An(a,l)}r.push(l)}return r}function B0(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(vf(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=YS(t,r,i),l=s.length,a=u=>{let f=0;if(l>1)for(;f<e.length-2&&!(u<e[f+1]);f++);const c=uo(e[f],e[f+1],u);return s[f](c)};return n?u=>a(Nn(e[0],e[o-1],u)):a}function ZS(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=uo(0,t,r);e.push(pe(n,1,i))}}function JS(e){const t=[0];return ZS(t,e.length-1),t}function eP(e,t){return e.map(n=>n*t)}function tP(e,t){return e.map(()=>t||T0).splice(0,e.length-1)}function Gs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=FS(r)?r.map(Dp):Dp(r),o={done:!1,value:t[0]},s=eP(n&&n.length===t.length?n:JS(t),e),l=B0(s,t,{ease:Array.isArray(i)?i:tP(t,i)});return{calculatedDuration:e,next:a=>(o.value=l(a),o.done=a>=e,o)}}function U0(e,t){return t?e*(1e3/t):0}const nP=5;function H0(e,t,n){const r=Math.max(t-nP,0);return U0(n-e(r),t-r)}const ga=.001,rP=.01,iP=10,oP=.05,sP=1;function lP({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,s=1-t;s=Nn(oP,sP,s),e=Nn(rP,iP,Zt(e)),s<1?(i=u=>{const f=u*s,c=f*e,h=f-n,p=_u(u,s),m=Math.exp(-c);return ga-h/p*m},o=u=>{const c=u*s*e,h=c*n+n,p=Math.pow(s,2)*Math.pow(u,2)*e,m=Math.exp(-c),v=_u(Math.pow(u,2),s);return(-i(u)+ga>0?-1:1)*((h-p)*m)/v}):(i=u=>{const f=Math.exp(-u*e),c=(u-n)*e+1;return-ga+f*c},o=u=>{const f=Math.exp(-u*e),c=(n-u)*(e*e);return f*c});const l=5/e,a=uP(i,o,l);if(e=er(e),isNaN(a))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(a,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const aP=12;function uP(e,t,n){let r=n;for(let i=1;i<aP;i++)r=r-e(r)/t(r);return r}function _u(e,t){return e*Math.sqrt(1-t*t)}const cP=["duration","bounce"],fP=["stiffness","damping","mass"];function Mp(e,t){return t.some(n=>e[n]!==void 0)}function hP(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Mp(e,fP)&&Mp(e,cP)){const n=lP(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function $0({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:l,damping:a,mass:u,duration:f,velocity:c,isResolvedFromDuration:h}=hP({...r,velocity:-Zt(r.velocity||0)}),p=c||0,m=a/(2*Math.sqrt(l*u)),v=o-i,k=Zt(Math.sqrt(l/u)),g=Math.abs(v)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let y;if(m<1){const x=_u(k,m);y=S=>{const b=Math.exp(-m*k*S);return o-b*((p+m*k*v)/x*Math.sin(x*S)+v*Math.cos(x*S))}}else if(m===1)y=x=>o-Math.exp(-k*x)*(v+(p+k*v)*x);else{const x=k*Math.sqrt(m*m-1);y=S=>{const b=Math.exp(-m*k*S),C=Math.min(x*S,300);return o-b*((p+m*k*v)*Math.sinh(C)+x*v*Math.cosh(C))/x}}return{calculatedDuration:h&&f||null,next:x=>{const S=y(x);if(h)s.done=x>=f;else{let b=p;x!==0&&(m<1?b=H0(y,x,S):b=0);const C=Math.abs(b)<=n,A=Math.abs(o-S)<=t;s.done=C&&A}return s.value=s.done?o:S,s}}}function Np({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:a,restDelta:u=.5,restSpeed:f}){const c=e[0],h={done:!1,value:c},p=D=>l!==void 0&&D<l||a!==void 0&&D>a,m=D=>l===void 0?a:a===void 0||Math.abs(l-D)<Math.abs(a-D)?l:a;let v=n*t;const k=c+v,g=s===void 0?k:s(k);g!==k&&(v=g-c);const y=D=>-v*Math.exp(-D/r),x=D=>g+y(D),S=D=>{const j=y(D),T=x(D);h.done=Math.abs(j)<=u,h.value=h.done?g:T};let b,C;const A=D=>{p(h.value)&&(b=D,C=$0({keyframes:[h.value,m(h.value)],velocity:H0(x,D,h.value),damping:i,stiffness:o,restDelta:u,restSpeed:f}))};return A(0),{calculatedDuration:null,next:D=>{let j=!1;return!C&&b===void 0&&(j=!0,S(D),A(D)),b!==void 0&&D>b?C.next(D-b):(!j&&S(D),h)}}}const pP=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ce.update(t,!0),stop:()=>rn(t),now:()=>Le.isProcessing?Le.timestamp:performance.now()}},Rp=2e4;function Lp(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Rp;)t+=n,r=e.next(t);return t>=Rp?1/0:t}const dP={decay:Np,inertia:Np,tween:Gs,keyframes:Gs,spring:$0};function Ks({autoplay:e=!0,delay:t=0,driver:n=pP,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:l="loop",onPlay:a,onStop:u,onComplete:f,onUpdate:c,...h}){let p=1,m=!1,v,k;const g=()=>{k=new Promise(V=>{v=V})};g();let y;const x=dP[i]||Gs;let S;x!==Gs&&typeof r[0]!="number"&&(S=B0([0,100],r,{clamp:!1}),r=[0,100]);const b=x({...h,keyframes:r});let C;l==="mirror"&&(C=x({...h,keyframes:[...r].reverse(),velocity:-(h.velocity||0)}));let A="idle",D=null,j=null,T=null;b.calculatedDuration===null&&o&&(b.calculatedDuration=Lp(b));const{calculatedDuration:F}=b;let O=1/0,H=1/0;F!==null&&(O=F+s,H=O*(o+1)-s);let W=0;const G=V=>{if(j===null)return;p>0&&(j=Math.min(j,V)),p<0&&(j=Math.min(V-H/p,j)),D!==null?W=D:W=Math.round(V-j)*p;const Z=W-t*(p>=0?1:-1),P=p>=0?Z<0:Z>H;W=Math.max(Z,0),A==="finished"&&D===null&&(W=H);let ye=W,Ge=b;if(o){const Lt=Math.min(W,H)/O;let Pt=Math.floor(Lt),ht=Lt%1;!ht&&Lt>=1&&(ht=1),ht===1&&Pt--,Pt=Math.min(Pt,o+1),!!(Pt%2)&&(l==="reverse"?(ht=1-ht,s&&(ht-=s/O)):l==="mirror"&&(Ge=C)),ye=Nn(0,1,ht)*O}const te=P?{done:!1,value:r[0]}:Ge.next(ye);S&&(te.value=S(te.value));let{done:tt}=te;!P&&F!==null&&(tt=p>=0?W>=H:W<=0);const Rt=D===null&&(A==="finished"||A==="running"&&tt);return c&&c(te.value),Rt&&R(),te},q=()=>{y&&y.stop(),y=void 0},ne=()=>{A="idle",q(),v(),g(),j=T=null},R=()=>{A="finished",f&&f(),q(),v()},_=()=>{if(m)return;y||(y=n(G));const V=y.now();a&&a(),D!==null?j=V-D:(!j||A==="finished")&&(j=V),A==="finished"&&g(),T=j,D=null,A="running",y.start()};e&&_();const w={then(V,Z){return k.then(V,Z)},get time(){return Zt(W)},set time(V){V=er(V),W=V,D!==null||!y||p===0?D=V:j=y.now()-V/p},get duration(){const V=b.calculatedDuration===null?Lp(b):b.calculatedDuration;return Zt(V)},get speed(){return p},set speed(V){V===p||!y||(p=V,w.time=Zt(W))},get state(){return A},play:_,pause:()=>{A="paused",D=W},stop:()=>{m=!0,A!=="idle"&&(A="idle",u&&u(),ne())},cancel:()=>{T!==null&&G(T),ne()},complete:()=>{A="finished"},sample:V=>(j=0,G(V))};return w}function mP(e){let t;return()=>(t===void 0&&(t=e()),t)}const gP=mP(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),yP=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),$o=10,xP=2e4,vP=(e,t)=>t.type==="spring"||e==="backgroundColor"||!k0(t.ease);function wP(e,t,{onUpdate:n,onComplete:r,...i}){if(!(gP()&&yP.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,l,a,u=!1;const f=()=>{a=new Promise(x=>{l=x})};f();let{keyframes:c,duration:h=300,ease:p,times:m}=i;if(vP(t,i)){const x=Ks({...i,repeat:0,delay:0});let S={done:!1,value:c[0]};const b=[];let C=0;for(;!S.done&&C<xP;)S=x.sample(C),b.push(S.value),C+=$o;m=void 0,c=b,h=C-$o,p="linear"}const v=AS(e.owner.current,t,c,{...i,duration:h,ease:p,times:m}),k=()=>{u=!1,v.cancel()},g=()=>{u=!0,ce.update(k),l(),f()};return v.onfinish=()=>{u||(e.set(IS(c,i)),r&&r(),g())},{then(x,S){return a.then(x,S)},attachTimeline(x){return v.timeline=x,v.onfinish=null,ke},get time(){return Zt(v.currentTime||0)},set time(x){v.currentTime=er(x)},get speed(){return v.playbackRate},set speed(x){v.playbackRate=x},get duration(){return Zt(h)},play:()=>{s||(v.play(),rn(k))},pause:()=>v.pause(),stop:()=>{if(s=!0,v.playState==="idle")return;const{currentTime:x}=v;if(x){const S=Ks({...i,autoplay:!1});e.setWithVelocity(S.sample(x-$o).value,S.sample(x).value,$o)}g()},complete:()=>{u||v.finish()},cancel:g}}function kP({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ke,pause:ke,stop:ke,then:o=>(o(),Promise.resolve()),cancel:ke,complete:ke});return t?Ks({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const SP={type:"spring",stiffness:500,damping:25,restSpeed:10},PP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),CP={type:"keyframes",duration:.8},TP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},bP=(e,{keyframes:t})=>t.length>2?CP:fr.has(e)?e.startsWith("scale")?PP(t[1]):SP:TP,Vu=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Rn.test(t)||t==="0")&&!t.startsWith("url(")),EP=new Set(["brightness","contrast","saturate","opacity"]);function DP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Tl)||[];if(!r)return e;const i=n.replace(r,"");let o=EP.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const AP=/([a-z-]*)\(.*?\)/g,Bu={...Rn,getAnimatableNone:e=>{const t=e.match(AP);return t?t.map(DP).join(" "):e}},IP={...o0,color:Ve,backgroundColor:Ve,outlineColor:Ve,fill:Ve,stroke:Ve,borderColor:Ve,borderTopColor:Ve,borderRightColor:Ve,borderBottomColor:Ve,borderLeftColor:Ve,filter:Bu,WebkitFilter:Bu},Pf=e=>IP[e];function W0(e,t){let n=Pf(e);return n!==Bu&&(n=Rn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const G0=e=>/^0[^.\s]+$/.test(e);function MP(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||G0(e)}function NP(e,t,n,r){const i=Vu(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let l;const a=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?s:o[u-1]),MP(o[u])&&a.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(l=o[u]);if(i&&a.length&&l)for(let u=0;u<a.length;u++){const f=a[u];o[f]=W0(t,l)}return o}function RP({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:l,from:a,elapsed:u,...f}){return!!Object.keys(f).length}function Cf(e,t){return e[t]||e.default||e}const LP={skipAnimations:!1},Tf=(e,t,n,r={})=>i=>{const o=Cf(r,e)||{},s=o.delay||r.delay||0;let{elapsed:l=0}=r;l=l-er(s);const a=NP(t,e,n,o),u=a[0],f=a[a.length-1],c=Vu(e,u),h=Vu(e,f);let p={keyframes:a,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-l,onUpdate:m=>{t.set(m),o.onUpdate&&o.onUpdate(m)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(RP(o)||(p={...p,...bP(e,p)}),p.duration&&(p.duration=er(p.duration)),p.repeatDelay&&(p.repeatDelay=er(p.repeatDelay)),!c||!h||DS.current||o.type===!1||LP.skipAnimations)return kP(p);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const m=wP(t,e,p);if(m)return m}return Ks(p)};function qs(e){return!!(Je(e)&&e.add)}const K0=e=>/^\-?\d*\.?\d+$/.test(e);function bf(e,t){e.indexOf(t)===-1&&e.push(t)}function Ef(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Df{constructor(){this.subscriptions=[]}add(t){return bf(this.subscriptions,t),()=>Ef(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jP=e=>!isNaN(parseFloat(e));class FP{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=Le;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,ce.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ce.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=jP(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Df);const r=this.events[t].add(n);return t==="change"?()=>{r(),ce.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?U0(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Yr(e,t){return new FP(e,t)}const q0=e=>t=>t.test(e),OP={test:e=>e==="auto",parse:e=>e},Q0=[hr,U,Bt,fn,H2,U2,OP],yi=e=>Q0.find(q0(e)),zP=[...Q0,Ve,Rn],_P=e=>zP.find(q0(e));function VP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Yr(n))}function BP(e,t){const n=El(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const l=iS(o[s]);VP(e,s,l)}}function UP(e,t,n){var r,i;const o=Object.keys(t).filter(l=>!e.hasValue(l)),s=o.length;if(s)for(let l=0;l<s;l++){const a=o[l],u=t[a];let f=null;Array.isArray(u)&&(f=u[0]),f===null&&(f=(i=(r=n[a])!==null&&r!==void 0?r:e.readValue(a))!==null&&i!==void 0?i:t[a]),f!=null&&(typeof f=="string"&&(K0(f)||G0(f))?f=parseFloat(f):!_P(f)&&Rn.test(u)&&(f=W0(a,u)),e.addValue(a,Yr(f,{owner:e})),n[a]===void 0&&(n[a]=f),f!==null&&e.setBaseTarget(a,f))}}function HP(e,t){return t?(t[e]||t.default||t).from:void 0}function $P(e,t,n){const r={};for(const i in e){const o=HP(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function WP({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function GP(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function X0(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const a=e.getValue("willChange");r&&(o=r);const u=[],f=i&&e.animationState&&e.animationState.getState()[i];for(const c in l){const h=e.getValue(c),p=l[c];if(!h||p===void 0||f&&WP(f,c))continue;const m={delay:n,elapsed:0,...Cf(o||{},c)};if(window.HandoffAppearAnimations){const g=e.getProps()[Yy];if(g){const y=window.HandoffAppearAnimations(g,c,h,ce);y!==null&&(m.elapsed=y,m.isHandoff=!0)}}let v=!m.isHandoff&&!GP(h,p);if(m.type==="spring"&&(h.getVelocity()||m.velocity)&&(v=!1),h.animation&&(v=!1),v)continue;h.start(Tf(c,h,p,e.shouldReduceMotion&&fr.has(c)?{type:!1}:m));const k=h.animation;qs(a)&&(a.add(c),k.then(()=>a.remove(c))),u.push(k)}return s&&Promise.all(u).then(()=>{s&&BP(e,s)}),u}function Uu(e,t,n={}){const r=El(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(X0(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(a=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:c}=i;return KP(e,t,u+a,f,c,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[a,u]=l==="beforeChildren"?[o,s]:[s,o];return a().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function KP(e,t,n=0,r=0,i=1,o){const s=[],l=(e.variantChildren.size-1)*r,a=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(qP).forEach((u,f)=>{u.notify("AnimationStart",t),s.push(Uu(u,t,{...o,delay:n+a(f)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function qP(e,t){return e.sortNodePosition(t)}function QP(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Uu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Uu(e,t,n);else{const i=typeof t=="function"?El(e,t,n.custom):t;r=Promise.all(X0(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const XP=[...cf].reverse(),YP=cf.length;function ZP(e){return t=>Promise.all(t.map(({animation:n,options:r})=>QP(e,n,r)))}function JP(e){let t=ZP(e);const n=tC();let r=!0;const i=(a,u)=>{const f=El(e,u);if(f){const{transition:c,transitionEnd:h,...p}=f;a={...a,...p,...h}}return a};function o(a){t=a(e)}function s(a,u){const f=e.getProps(),c=e.getVariantContext(!0)||{},h=[],p=new Set;let m={},v=1/0;for(let g=0;g<YP;g++){const y=XP[g],x=n[y],S=f[y]!==void 0?f[y]:c[y],b=lo(S),C=y===u?x.isActive:null;C===!1&&(v=g);let A=S===c[y]&&S!==f[y]&&b;if(A&&r&&e.manuallyAnimateOnMount&&(A=!1),x.protectedKeys={...m},!x.isActive&&C===null||!S&&!x.prevProp||Pl(S)||typeof S=="boolean")continue;let j=eC(x.prevProp,S)||y===u&&x.isActive&&!A&&b||g>v&&b,T=!1;const F=Array.isArray(S)?S:[S];let O=F.reduce(i,{});C===!1&&(O={});const{prevResolvedValues:H={}}=x,W={...H,...O},G=q=>{j=!0,p.has(q)&&(T=!0,p.delete(q)),x.needsAnimating[q]=!0};for(const q in W){const ne=O[q],R=H[q];if(m.hasOwnProperty(q))continue;let _=!1;$s(ne)&&$s(R)?_=!v0(ne,R):_=ne!==R,_?ne!==void 0?G(q):p.add(q):ne!==void 0&&p.has(q)?G(q):x.protectedKeys[q]=!0}x.prevProp=S,x.prevResolvedValues=O,x.isActive&&(m={...m,...O}),r&&e.blockInitialAnimation&&(j=!1),j&&(!A||T)&&h.push(...F.map(q=>({animation:q,options:{type:y,...a}})))}if(p.size){const g={};p.forEach(y=>{const x=e.getBaseTarget(y);x!==void 0&&(g[y]=x)}),h.push({animation:g})}let k=!!h.length;return r&&(f.initial===!1||f.initial===f.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(h):Promise.resolve()}function l(a,u,f){var c;if(n[a].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(a,u)}),n[a].isActive=u;const h=s(f,a);for(const p in n)n[p].protectedKeys={};return h}return{animateChanges:s,setActive:l,setAnimateFunction:o,getState:()=>n}}function eC(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!v0(t,e):!1}function Bn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function tC(){return{animate:Bn(!0),whileInView:Bn(),whileHover:Bn(),whileTap:Bn(),whileDrag:Bn(),whileFocus:Bn(),exit:Bn()}}class nC extends zn{constructor(t){super(t),t.animationState||(t.animationState=JP(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Pl(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let rC=0;class iC extends zn{constructor(){super(...arguments),this.id=rC++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const oC={animation:{Feature:nC},exit:{Feature:iC}},jp=(e,t)=>Math.abs(e-t);function sC(e,t){const n=jp(e.x,t.x),r=jp(e.y,t.y);return Math.sqrt(n**2+r**2)}class Y0{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const c=xa(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=sC(c.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:m}=c,{timestamp:v}=Le;this.history.push({...m,timestamp:v});const{onStart:k,onMove:g}=this.handlers;h||(k&&k(this.lastMoveEvent,c),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,c)},this.handlePointerMove=(c,h)=>{this.lastMoveEvent=c,this.lastMoveEventInfo=ya(h,this.transformPagePoint),ce.update(this.updatePoint,!0)},this.handlePointerUp=(c,h)=>{this.end();const{onEnd:p,onSessionEnd:m,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=xa(c.type==="pointercancel"?this.lastMoveEventInfo:ya(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(c,k),m&&m(c,k)},!d0(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=bl(t),l=ya(s,this.transformPagePoint),{point:a}=l,{timestamp:u}=Le;this.history=[{...a,timestamp:u}];const{onSessionStart:f}=n;f&&f(t,xa(l,this.history)),this.removeListeners=An(Yt(this.contextWindow,"pointermove",this.handlePointerMove),Yt(this.contextWindow,"pointerup",this.handlePointerUp),Yt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),rn(this.updatePoint)}}function ya(e,t){return t?{point:t(e.point)}:e}function Fp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function xa({point:e},t){return{point:e,delta:Fp(e,Z0(t)),offset:Fp(e,lC(t)),velocity:aC(t,.1)}}function lC(e){return e[0]}function Z0(e){return e[e.length-1]}function aC(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Z0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>er(t)));)n--;if(!r)return{x:0,y:0};const o=Zt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function ut(e){return e.max-e.min}function Hu(e,t=0,n=.01){return Math.abs(e-t)<=n}function Op(e,t,n,r=.5){e.origin=r,e.originPoint=pe(t.min,t.max,e.origin),e.scale=ut(n)/ut(t),(Hu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=pe(n.min,n.max,e.origin)-e.originPoint,(Hu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Oi(e,t,n,r){Op(e.x,t.x,n.x,r?r.originX:void 0),Op(e.y,t.y,n.y,r?r.originY:void 0)}function zp(e,t,n){e.min=n.min+t.min,e.max=e.min+ut(t)}function uC(e,t,n){zp(e.x,t.x,n.x),zp(e.y,t.y,n.y)}function _p(e,t,n){e.min=t.min-n.min,e.max=e.min+ut(t)}function zi(e,t,n){_p(e.x,t.x,n.x),_p(e.y,t.y,n.y)}function cC(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?pe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?pe(n,e,r.max):Math.min(e,n)),e}function Vp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function fC(e,{top:t,left:n,bottom:r,right:i}){return{x:Vp(e.x,n,i),y:Vp(e.y,t,r)}}function Bp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function hC(e,t){return{x:Bp(e.x,t.x),y:Bp(e.y,t.y)}}function pC(e,t){let n=.5;const r=ut(e),i=ut(t);return i>r?n=uo(t.min,t.max-r,e.min):r>i&&(n=uo(e.min,e.max-i,t.min)),Nn(0,1,n)}function dC(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const $u=.35;function mC(e=$u){return e===!1?e=0:e===!0&&(e=$u),{x:Up(e,"left","right"),y:Up(e,"top","bottom")}}function Up(e,t,n){return{min:Hp(e,t),max:Hp(e,n)}}function Hp(e,t){return typeof e=="number"?e:e[t]||0}const $p=()=>({translate:0,scale:1,origin:0,originPoint:0}),Rr=()=>({x:$p(),y:$p()}),Wp=()=>({min:0,max:0}),Se=()=>({x:Wp(),y:Wp()});function mt(e){return[e("x"),e("y")]}function J0({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function gC({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function yC(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function va(e){return e===void 0||e===1}function Wu({scale:e,scaleX:t,scaleY:n}){return!va(e)||!va(t)||!va(n)}function Wn(e){return Wu(e)||e1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function e1(e){return Gp(e.x)||Gp(e.y)}function Gp(e){return e&&e!=="0%"}function Qs(e,t,n){const r=e-n,i=t*r;return n+i}function Kp(e,t,n,r,i){return i!==void 0&&(e=Qs(e,i,r)),Qs(e,n,r)+t}function Gu(e,t=0,n=1,r,i){e.min=Kp(e.min,t,n,r,i),e.max=Kp(e.max,t,n,r,i)}function t1(e,{x:t,y:n}){Gu(e.x,t.translate,t.scale,t.originPoint),Gu(e.y,n.translate,n.scale,n.originPoint)}function xC(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let l=0;l<i;l++){o=n[l],s=o.projectionDelta;const a=o.instance;a&&a.style&&a.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Lr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,t1(e,s)),r&&Wn(o.latestValues)&&Lr(e,o.latestValues))}t.x=qp(t.x),t.y=qp(t.y)}function qp(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function dn(e,t){e.min=e.min+t,e.max=e.max+t}function Qp(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=pe(e.min,e.max,o);Gu(e,t[n],t[r],s,t.scale)}const vC=["x","scaleX","originX"],wC=["y","scaleY","originY"];function Lr(e,t){Qp(e.x,t,vC),Qp(e.y,t,wC)}function n1(e,t){return J0(yC(e.getBoundingClientRect(),t))}function kC(e,t,n){const r=n1(e,n),{scroll:i}=t;return i&&(dn(r.x,i.offset.x),dn(r.y,i.offset.y)),r}const r1=({current:e})=>e?e.ownerDocument.defaultView:null,SC=new WeakMap;class PC{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Se(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=f=>{const{dragSnapToOrigin:c}=this.getProps();c?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(bl(f,"page").point)},o=(f,c)=>{const{drag:h,dragPropagation:p,onDragStart:m}=this.getProps();if(h&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=g0(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),mt(k=>{let g=this.getAxisMotionValue(k).get()||0;if(Bt.test(g)){const{projection:y}=this.visualElement;if(y&&y.layout){const x=y.layout.layoutBox[k];x&&(g=ut(x)*(parseFloat(g)/100))}}this.originPoint[k]=g}),m&&ce.update(()=>m(f,c),!1,!0);const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},s=(f,c)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:m,onDrag:v}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:k}=c;if(p&&this.currentDirection===null){this.currentDirection=CC(k),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",c.point,k),this.updateAxis("y",c.point,k),this.visualElement.render(),v&&v(f,c)},l=(f,c)=>this.stop(f,c),a=()=>mt(f=>{var c;return this.getAnimationState(f)==="paused"&&((c=this.getAxisMotionValue(f).animation)===null||c===void 0?void 0:c.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Y0(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:l,resumeAnimation:a},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:r1(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&ce.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Wo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=cC(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Mr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=fC(i.layoutBox,n):this.constraints=!1,this.elastic=mC(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&mt(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=dC(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Mr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=kC(r,i.root,this.visualElement.getTransformPagePoint());let s=hC(i.layout.layoutBox,o);if(n){const l=n(gC(s));this.hasMutatedConstraints=!!l,l&&(s=J0(l))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),a=this.constraints||{},u=mt(f=>{if(!Wo(f,n,this.currentDirection))return;let c=a&&a[f]||{};s&&(c={min:0,max:0});const h=i?200:1e6,p=i?40:1e7,m={type:"inertia",velocity:r?t[f]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...c};return this.startAxisValueAnimation(f,m)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Tf(t,r,0,n))}stopAnimation(){mt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){mt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){mt(n=>{const{drag:r}=this.getProps();if(!Wo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:l}=i.layout.layoutBox[n];o.set(t[n]-pe(s,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Mr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};mt(s=>{const l=this.getAxisMotionValue(s);if(l){const a=l.get();i[s]=pC({min:a,max:a},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),mt(s=>{if(!Wo(s,t,null))return;const l=this.getAxisMotionValue(s),{min:a,max:u}=this.constraints[s];l.set(pe(a,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;SC.set(this.visualElement,this);const t=this.visualElement.current,n=Yt(t,"pointerdown",a=>{const{drag:u,dragListener:f=!0}=this.getProps();u&&f&&this.start(a)}),r=()=>{const{dragConstraints:a}=this.getProps();Mr(a)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=Qt(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:a,hasLayoutChanged:u})=>{this.isDragging&&u&&(mt(f=>{const c=this.getAxisMotionValue(f);c&&(this.originPoint[f]+=a[f].translate,c.set(c.get()+a[f].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=$u,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:l}}}function Wo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function CC(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class TC extends zn{constructor(t){super(t),this.removeGroupControls=ke,this.removeListeners=ke,this.controls=new PC(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ke}unmount(){this.removeGroupControls(),this.removeListeners()}}const Xp=e=>(t,n)=>{e&&ce.update(()=>e(t,n))};class bC extends zn{constructor(){super(...arguments),this.removePointerDownListener=ke}onPointerDown(t){this.session=new Y0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:r1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Xp(t),onStart:Xp(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&ce.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Yt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function EC(){const e=E.useContext(af);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=E.useId();return E.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const us={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Yp(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const xi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(U.test(e))e=parseFloat(e);else return e;const n=Yp(e,t.target.x),r=Yp(e,t.target.y);return`${n}% ${r}%`}},DC={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Rn.parse(e);if(i.length>5)return r;const o=Rn.createTransformer(e),s=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,a=n.y.scale*t.y;i[0+s]/=l,i[1+s]/=a;const u=pe(l,a,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class AC extends nl.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;j2(IC),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),us.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||ce.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function i1(e){const[t,n]=EC(),r=E.useContext(Jy);return nl.createElement(AC,{...e,layoutGroup:r,switchLayoutGroup:E.useContext(e0),isPresent:t,safeToRemove:n})}const IC={borderRadius:{...xi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xi,borderTopRightRadius:xi,borderBottomLeftRadius:xi,borderBottomRightRadius:xi,boxShadow:DC},o1=["TopLeft","TopRight","BottomLeft","BottomRight"],MC=o1.length,Zp=e=>typeof e=="string"?parseFloat(e):e,Jp=e=>typeof e=="number"||U.test(e);function NC(e,t,n,r,i,o){i?(e.opacity=pe(0,n.opacity!==void 0?n.opacity:1,RC(r)),e.opacityExit=pe(t.opacity!==void 0?t.opacity:1,0,LC(r))):o&&(e.opacity=pe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<MC;s++){const l=`border${o1[s]}Radius`;let a=ed(t,l),u=ed(n,l);if(a===void 0&&u===void 0)continue;a||(a=0),u||(u=0),a===0||u===0||Jp(a)===Jp(u)?(e[l]=Math.max(pe(Zp(a),Zp(u),r),0),(Bt.test(u)||Bt.test(a))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=pe(t.rotate||0,n.rotate||0,r))}function ed(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const RC=s1(0,.5,D0),LC=s1(.5,.95,ke);function s1(e,t,n){return r=>r<e?0:r>t?1:n(uo(e,t,r))}function td(e,t){e.min=t.min,e.max=t.max}function pt(e,t){td(e.x,t.x),td(e.y,t.y)}function nd(e,t,n,r,i){return e-=t,e=Qs(e,1/n,r),i!==void 0&&(e=Qs(e,1/i,r)),e}function jC(e,t=0,n=1,r=.5,i,o=e,s=e){if(Bt.test(t)&&(t=parseFloat(t),t=pe(s.min,s.max,t/100)-s.min),typeof t!="number")return;let l=pe(o.min,o.max,r);e===o&&(l-=t),e.min=nd(e.min,t,n,l,i),e.max=nd(e.max,t,n,l,i)}function rd(e,t,[n,r,i],o,s){jC(e,t[n],t[r],t[i],t.scale,o,s)}const FC=["x","scaleX","originX"],OC=["y","scaleY","originY"];function id(e,t,n,r){rd(e.x,t,FC,n?n.x:void 0,r?r.x:void 0),rd(e.y,t,OC,n?n.y:void 0,r?r.y:void 0)}function od(e){return e.translate===0&&e.scale===1}function l1(e){return od(e.x)&&od(e.y)}function zC(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function a1(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function sd(e){return ut(e.x)/ut(e.y)}class _C{constructor(){this.members=[]}add(t){bf(this.members,t),t.scheduleRender()}remove(t){if(Ef(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ld(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:a,rotateX:u,rotateY:f}=n;a&&(r+=`rotate(${a}deg) `),u&&(r+=`rotateX(${u}deg) `),f&&(r+=`rotateY(${f}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const VC=(e,t)=>e.depth-t.depth;class BC{constructor(){this.children=[],this.isDirty=!1}add(t){bf(this.children,t),this.isDirty=!0}remove(t){Ef(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(VC),this.isDirty=!1,this.children.forEach(t)}}function UC(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(rn(r),e(o-t))};return ce.read(r,!0),()=>rn(r)}function HC(e){window.MotionDebug&&window.MotionDebug.record(e)}function $C(e){return e instanceof SVGElement&&e.tagName!=="svg"}function WC(e,t,n){const r=Je(e)?e:Yr(e);return r.start(Tf("",r,t,n)),r.animation}const ad=["","X","Y","Z"],GC={visibility:"hidden"},ud=1e3;let KC=0;const Gn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function u1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},l=t==null?void 0:t()){this.id=KC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Gn.totalNodes=Gn.resolvedTargetDeltas=Gn.recalculatedProjection=0,this.nodes.forEach(XC),this.nodes.forEach(tT),this.nodes.forEach(nT),this.nodes.forEach(YC),HC(Gn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let a=0;a<this.path.length;a++)this.path[a].shouldResetTransform=!0;this.root===this&&(this.nodes=new BC)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Df),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const a=this.eventHandlers.get(s);a&&a.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=$C(s),this.instance=s;const{layoutId:a,layout:u,visualElement:f}=this.options;if(f&&!f.current&&f.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||a)&&(this.isLayoutDirty=!0),e){let c;const h=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,c&&c(),c=UC(h,250),us.hasAnimatedSinceResize&&(us.hasAnimatedSinceResize=!1,this.nodes.forEach(fd))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&f&&(a||u)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||f.getDefaultTransition()||lT,{onLayoutAnimationStart:k,onLayoutAnimationComplete:g}=f.getProps(),y=!this.targetLayout||!a1(this.targetLayout,m)||p,x=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||h&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(c,x);const S={...Cf(v,"layout"),onPlay:k,onComplete:g};(f.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else h||fd(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,rn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rT),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const c=this.path[f];c.shouldResetTransform=!0,c.updateScroll("snapshot"),c.options.layoutRoot&&c.willUpdate(!1)}const{layoutId:l,layout:a}=this.options;if(l===void 0&&!a)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cd);return}this.isUpdating||this.nodes.forEach(JC),this.isUpdating=!1,this.nodes.forEach(eT),this.nodes.forEach(qC),this.nodes.forEach(QC),this.clearAllSnapshots();const l=performance.now();Le.delta=Nn(0,1e3/60,l-Le.timestamp),Le.timestamp=l,Le.isProcessing=!0,ua.update.process(Le),ua.preRender.process(Le),ua.render.process(Le),Le.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(ZC),this.sharedNodes.forEach(iT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ce.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ce.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let a=0;a<this.path.length;a++)this.path[a].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Se(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!l1(this.projectionDelta),a=this.getTransformTemplate(),u=a?a(this.latestValues,""):void 0,f=u!==this.prevTransformTemplateValue;s&&(l||Wn(this.latestValues)||f)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let a=this.removeElementScroll(l);return s&&(a=this.removeTransform(a)),aT(a),{animationId:this.root.animationId,measuredBox:l,layoutBox:a,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return Se();const l=s.measureViewportBox(),{scroll:a}=this.root;return a&&(dn(l.x,a.offset.x),dn(l.y,a.offset.y)),l}removeElementScroll(s){const l=Se();pt(l,s);for(let a=0;a<this.path.length;a++){const u=this.path[a],{scroll:f,options:c}=u;if(u!==this.root&&f&&c.layoutScroll){if(f.isRoot){pt(l,s);const{scroll:h}=this.root;h&&(dn(l.x,-h.offset.x),dn(l.y,-h.offset.y))}dn(l.x,f.offset.x),dn(l.y,f.offset.y)}}return l}applyTransform(s,l=!1){const a=Se();pt(a,s);for(let u=0;u<this.path.length;u++){const f=this.path[u];!l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Lr(a,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),Wn(f.latestValues)&&Lr(a,f.latestValues)}return Wn(this.latestValues)&&Lr(a,this.latestValues),a}removeTransform(s){const l=Se();pt(l,s);for(let a=0;a<this.path.length;a++){const u=this.path[a];if(!u.instance||!Wn(u.latestValues))continue;Wu(u.latestValues)&&u.updateSnapshot();const f=Se(),c=u.measurePageBox();pt(f,c),id(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,f)}return Wn(this.latestValues)&&id(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Le.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var l;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==a;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:c,layoutId:h}=this.options;if(!(!this.layout||!(c||h))){if(this.resolvedRelativeTargetAt=Le.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Se(),this.relativeTargetOrigin=Se(),zi(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Se(),this.targetWithTransforms=Se()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),uC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):pt(this.target,this.layout.layoutBox),t1(this.target,this.targetDelta)):pt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Se(),this.relativeTargetOrigin=Se(),zi(this.relativeTargetOrigin,this.target,p.target),pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Gn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Wu(this.parent.latestValues)||e1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const l=this.getLead(),a=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Le.timestamp&&(u=!1),u)return;const{layout:f,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||c))return;pt(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;xC(this.layoutCorrected,this.treeScale,this.path,a),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:m}=l;if(!m){this.projectionTransform&&(this.projectionDelta=Rr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Rr(),this.projectionDeltaWithTransform=Rr());const v=this.projectionTransform;Oi(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=ld(this.projectionDelta,this.treeScale),(this.projectionTransform!==v||this.treeScale.x!==h||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),Gn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,l=!1){const a=this.snapshot,u=a?a.latestValues:{},f={...this.latestValues},c=Rr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const h=Se(),p=a?a.source:void 0,m=this.layout?this.layout.source:void 0,v=p!==m,k=this.getStack(),g=!k||k.members.length<=1,y=!!(v&&!g&&this.options.crossfade===!0&&!this.path.some(sT));this.animationProgress=0;let x;this.mixTargetDelta=S=>{const b=S/1e3;hd(c.x,s.x,b),hd(c.y,s.y,b),this.setTargetDelta(c),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zi(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),oT(this.relativeTarget,this.relativeTargetOrigin,h,b),x&&zC(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Se()),pt(x,this.relativeTarget)),v&&(this.animationValues=f,NC(f,u,this.latestValues,b,y,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(rn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ce.update(()=>{us.hasAnimatedSinceResize=!0,this.currentAnimation=WC(0,ud,{...s,onUpdate:l=>{this.mixTargetDelta(l),s.onUpdate&&s.onUpdate(l)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ud),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:a,layout:u,latestValues:f}=s;if(!(!l||!a||!u)){if(this!==s&&this.layout&&u&&c1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){a=this.target||Se();const c=ut(this.layout.layoutBox.x);a.x.min=s.target.x.min,a.x.max=a.x.min+c;const h=ut(this.layout.layoutBox.y);a.y.min=s.target.y.min,a.y.max=a.y.min+h}pt(l,a),Lr(l,f),Oi(this.projectionDeltaWithTransform,this.layoutCorrected,l,f)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new _C),this.sharedNodes.get(s).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:l}=this.options;return l?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:l}=this.options;return l?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:a}={}){const u=this.getStack();u&&u.promote(this,a),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:a}=s;if((a.rotate||a.rotateX||a.rotateY||a.rotateZ)&&(l=!0),!l)return;const u={};for(let f=0;f<ad.length;f++){const c="rotate"+ad[f];a[c]&&(u[c]=a[c],s.setStaticValue(c,0))}s.render();for(const f in u)s.setStaticValue(f,u[f]);s.scheduleRender()}getProjectionStyles(s){var l,a;if(!this.instance||this.isSVG)return;if(!this.isVisible)return GC;const u={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=as(s==null?void 0:s.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none",u;const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=as(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Wn(this.latestValues)&&(v.transform=f?f({},""):"none",this.hasProjected=!1),v}const h=c.animationValues||c.latestValues;this.applyTransformsToTarget(),u.transform=ld(this.projectionDeltaWithTransform,this.treeScale,h),f&&(u.transform=f(h,u.transform));const{x:p,y:m}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,c.animationValues?u.opacity=c===this?(a=(l=h.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&a!==void 0?a:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=c===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const v in Us){if(h[v]===void 0)continue;const{correct:k,applyTo:g}=Us[v],y=u.transform==="none"?h[v]:k(h[v],c);if(g){const x=g.length;for(let S=0;S<x;S++)u[g[S]]=y}else u[v]=y}return this.options.layoutId&&(u.pointerEvents=c===this?as(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(cd),this.root.sharedNodes.clear()}}}function qC(e){e.updateLayout()}function QC(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?mt(c=>{const h=s?n.measuredBox[c]:n.layoutBox[c],p=ut(h);h.min=r[c].min,h.max=h.min+p}):c1(o,n.layoutBox,r)&&mt(c=>{const h=s?n.measuredBox[c]:n.layoutBox[c],p=ut(r[c]);h.max=h.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[c].max=e.relativeTarget[c].min+p)});const l=Rr();Oi(l,r,n.layoutBox);const a=Rr();s?Oi(a,e.applyTransform(i,!0),n.measuredBox):Oi(a,r,n.layoutBox);const u=!l1(l);let f=!1;if(!e.resumeFrom){const c=e.getClosestProjectingParent();if(c&&!c.resumeFrom){const{snapshot:h,layout:p}=c;if(h&&p){const m=Se();zi(m,n.layoutBox,h.layoutBox);const v=Se();zi(v,r,p.layoutBox),a1(m,v)||(f=!0),c.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=m,e.relativeParent=c)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:a,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:f})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function XC(e){Gn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function YC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ZC(e){e.clearSnapshot()}function cd(e){e.clearMeasurements()}function JC(e){e.isLayoutDirty=!1}function eT(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function fd(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function tT(e){e.resolveTargetDelta()}function nT(e){e.calcProjection()}function rT(e){e.resetRotation()}function iT(e){e.removeLeadSnapshot()}function hd(e,t,n){e.translate=pe(t.translate,0,n),e.scale=pe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function pd(e,t,n,r){e.min=pe(t.min,n.min,r),e.max=pe(t.max,n.max,r)}function oT(e,t,n,r){pd(e.x,t.x,n.x,r),pd(e.y,t.y,n.y,r)}function sT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const lT={duration:.45,ease:[.4,0,.1,1]},dd=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),md=dd("applewebkit/")&&!dd("chrome/")?Math.round:ke;function gd(e){e.min=md(e.min),e.max=md(e.max)}function aT(e){gd(e.x),gd(e.y)}function c1(e,t,n){return e==="position"||e==="preserve-aspect"&&!Hu(sd(t),sd(n),.2)}const uT=u1({attachResizeListener:(e,t)=>Qt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),wa={current:void 0},f1=u1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!wa.current){const e=new uT({});e.mount(window),e.setOptions({layoutScroll:!0}),wa.current=e}return wa.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),cT={pan:{Feature:bC},drag:{Feature:TC,ProjectionNode:f1,MeasureLayout:i1}},fT=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function hT(e){const t=fT.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Ku(e,t,n=1){const[r,i]=hT(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return K0(s)?parseFloat(s):s}else return Fu(i)?Ku(i,t,n+1):i}function pT(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!Fu(o))return;const s=Ku(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!Fu(o))continue;const s=Ku(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const dT=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),h1=e=>dT.has(e),mT=e=>Object.keys(e).some(h1),yd=e=>e===hr||e===U,xd=(e,t)=>parseFloat(e.split(", ")[t]),vd=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return xd(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?xd(o[1],e):0}},gT=new Set(["x","y","z"]),yT=xo.filter(e=>!gT.has(e));function xT(e){const t=[];return yT.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Zr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:vd(4,13),y:vd(5,14)};Zr.translateX=Zr.x;Zr.translateY=Zr.y;const vT=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,l={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{l[u]=Zr[u](r,o)}),t.render();const a=t.measureViewportBox();return n.forEach(u=>{const f=t.getValue(u);f&&f.jump(l[u]),e[u]=Zr[u](a,o)}),e},wT=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(h1);let o=[],s=!1;const l=[];if(i.forEach(a=>{const u=e.getValue(a);if(!e.hasValue(a))return;let f=n[a],c=yi(f);const h=t[a];let p;if($s(h)){const m=h.length,v=h[0]===null?1:0;f=h[v],c=yi(f);for(let k=v;k<m&&h[k]!==null;k++)p?vf(yi(h[k])===p):p=yi(h[k])}else p=yi(h);if(c!==p)if(yd(c)&&yd(p)){const m=u.get();typeof m=="string"&&u.set(parseFloat(m)),typeof h=="string"?t[a]=parseFloat(h):Array.isArray(h)&&p===U&&(t[a]=h.map(parseFloat))}else c!=null&&c.transform&&(p!=null&&p.transform)&&(f===0||h===0)?f===0?u.set(p.transform(f)):t[a]=c.transform(h):(s||(o=xT(e),s=!0),l.push(a),r[a]=r[a]!==void 0?r[a]:t[a],u.jump(h))}),l.length){const a=l.indexOf("height")>=0?window.pageYOffset:null,u=vT(t,e,l);return o.length&&o.forEach(([f,c])=>{e.getValue(f).set(c)}),e.render(),Sl&&a!==null&&window.scrollTo({top:a}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function kT(e,t,n,r){return mT(t)?wT(e,t,n,r):{target:t,transitionEnd:r}}const ST=(e,t,n,r)=>{const i=pT(e,t,r);return t=i.target,r=i.transitionEnd,kT(e,t,n,r)},qu={current:null},p1={current:!1};function PT(){if(p1.current=!0,!!Sl)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>qu.current=e.matches;e.addListener(t),t()}else qu.current=!1}function CT(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(Je(o))e.addValue(i,o),qs(r)&&r.add(i);else if(Je(s))e.addValue(i,Yr(o,{owner:e})),qs(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const l=e.getValue(i);!l.hasAnimated&&l.set(o)}else{const l=e.getStaticValue(i);e.addValue(i,Yr(l!==void 0?l:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const wd=new WeakMap,d1=Object.keys(ao),TT=d1.length,kd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],bT=ff.length;class ET{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ce.render(this.render,!1,!0);const{latestValues:l,renderState:a}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=a,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=Cl(n),this.isVariantNode=Zy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{});for(const c in f){const h=f[c];l[c]!==void 0&&Je(h)&&(h.set(l[c],!1),qs(u)&&u.add(c))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,wd.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),p1.current||PT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:qu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){wd.delete(this.current),this.projection&&this.projection.unmount(),rn(this.notifyUpdate),rn(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=fr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ce.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,l;for(let a=0;a<TT;a++){const u=d1[a],{isEnabled:f,Feature:c,ProjectionNode:h,MeasureLayout:p}=ao[u];h&&(s=h),f(n)&&(!this.features[u]&&c&&(this.features[u]=new c(this)),p&&(l=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:a,layout:u,drag:f,dragConstraints:c,layoutScroll:h,layoutRoot:p}=n;this.projection.setOptions({layoutId:a,layout:u,alwaysMeasureLayout:!!f||c&&Mr(c),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:h,layoutRoot:p})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Se()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<kd.length;r++){const i=kd[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=CT(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<bT;r++){const i=ff[r],o=this.props[i];(lo(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Yr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=xf(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Je(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Df),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class m1 extends ET{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=$P(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){UP(this,r,s);const l=ST(this,r,s,n);n=l.transitionEnd,r=l.target}return{transition:t,transitionEnd:n,...r}}}function DT(e){return window.getComputedStyle(e)}class AT extends m1{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(fr.has(n)){const r=Pf(n);return r&&r.default||0}else{const r=DT(t),i=(r0(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return n1(t,n)}build(t,n,r,i){pf(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return yf(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Je(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){u0(t,n,r,i)}}class IT extends m1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(fr.has(n)){const r=Pf(n);return r&&r.default||0}return n=c0.has(n)?n:uf(n),t.getAttribute(n)}measureInstanceViewportBox(){return Se()}scrapeMotionValuesFromProps(t,n){return h0(t,n)}build(t,n,r,i){mf(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){f0(t,n,r,i)}mount(t){this.isSVGTag=gf(t.tagName),super.mount(t)}}const MT=(e,t)=>hf(e)?new IT(t,{enableHardwareAcceleration:!1}):new AT(t,{enableHardwareAcceleration:!0}),NT={layout:{ProjectionNode:f1,MeasureLayout:i1}},RT={...oC,...TS,...cT,...NT},cs=R2((e,t)=>hS(e,t,RT,MT)),je={email:"goole910805@gmail.com",githubUsername:"and910805",linkedinUrl:"https://www.linkedin.com/in/guan-lin-zhuang-410a48291",linkedinHandle:"guan-lin-zhuang-410a48291",lineId:"0966632722",location:"Taiwan / Remote",intro:"如果你想聊資安筆記、網站、後端工具、自動化或專案合作，可以從 Email、GitHub 或 LinkedIn 找到我。"},fs={user:"eric",role:"Cybersecurity Practitioner / Automation Builder",summary:"喜歡把問題拆開、驗證、記錄，再做成可以重複使用的工具。網站目前收斂成資安筆記、專案紀錄與學習軌跡。",groups:["security","backend","linux","cloud","notes"]},LT=[["user",fs.user],["role",fs.role],["groups",fs.groups.join(", ")],["focus","web security, vulnerability management, automation, Linux"],["status","building a personal security knowledge base"]];function jT(){return d.jsx("section",{children:d.jsxs("div",{className:"grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start",children:[d.jsxs(cs.div,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.45},className:"space-y-6",children:[d.jsxs("div",{className:"terminal-label",children:[d.jsx("span",{className:"terminal-dot"}),"profile / active"]}),d.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start",children:[d.jsxs("div",{className:"space-y-5",children:[d.jsxs("h1",{className:"section-title max-w-4xl",children:["$ whoami",d.jsx("span",{className:"mt-3 block bg-[linear-gradient(90deg,#39ff14_0%,#3df2ff_55%,#effff5_100%)] bg-clip-text text-transparent",children:"Eric"})]}),d.jsx("p",{className:"max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg",children:fs.summary})]}),d.jsx(cs.div,{initial:{opacity:0,scale:.96,y:10},animate:{opacity:1,scale:1,y:[0,-6,0]},transition:{opacity:{duration:.45,delay:.18},scale:{duration:.45,delay:.18},y:{duration:4.8,repeat:1/0,ease:"easeInOut"}},className:"mx-auto w-full max-w-[220px] lg:mx-0 lg:justify-self-center",children:d.jsxs("div",{className:"terminal-outline relative overflow-hidden rounded-2xl border-[#39ff14]/25 bg-[linear-gradient(180deg,rgba(6,18,26,0.96),rgba(2,10,16,0.98))] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.35),0_0_30px_rgba(57,255,20,0.12)] before:pointer-events-none before:absolute before:inset-[1px] before:rounded-[calc(1rem-1px)] before:border before:border-[#3df2ff]/10 before:content-['']",children:[d.jsxs("div",{className:"mb-2 flex items-center justify-between px-1",children:[d.jsx("span",{className:"mono text-[0.58rem] uppercase tracking-[0.26em] text-[#7df48d]",children:"cert badge"}),d.jsx("span",{className:"h-2 w-2 rounded-full bg-[#39ff14] shadow-[0_0_12px_rgba(57,255,20,0.9)]"})]}),d.jsx("img",{src:"/CEHMASTER_5FB43496785F.png",alt:"CEH certification",className:"relative z-[1] h-auto w-full rounded-xl object-contain shadow-[0_12px_28px_rgba(0,0,0,0.25)]"}),d.jsx("div",{className:"pointer-events-none absolute inset-x-6 bottom-0 h-10 rounded-full bg-[#39ff14]/20 blur-2xl"})]})})]}),d.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",children:[d.jsxs(Xr,{to:"/blog",className:"terminal-button terminal-button--primary",children:["查看資安筆記",d.jsx(f2,{className:"h-4 w-4"})]}),d.jsx(Xr,{to:"/projects",className:"terminal-button terminal-button--ghost",children:"查看專案"})]}),d.jsxs("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:[d.jsxs("div",{className:"terminal-outline rounded-2xl px-4 py-3",children:[d.jsx("div",{className:"mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]",children:"email"}),d.jsxs("a",{href:`mailto:${je.email}`,className:"mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#b8ffb8]",children:[d.jsx(sf,{className:"h-4 w-4 text-[#39ff14]"}),je.email]})]}),d.jsxs("div",{className:"terminal-outline rounded-2xl px-4 py-3",children:[d.jsx("div",{className:"mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]",children:"github"}),d.jsxs("a",{href:`https://github.com/${je.githubUsername}`,target:"_blank",rel:"noopener noreferrer",className:"mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#b8ffb8]",children:[d.jsx(of,{className:"h-4 w-4 text-[#39ff14]"}),je.githubUsername]})]}),d.jsxs("div",{className:"terminal-outline rounded-2xl px-4 py-3",children:[d.jsx("div",{className:"mono text-[0.72rem] uppercase tracking-[0.22em] text-[#88f8d4]",children:"linkedin"}),d.jsxs("a",{href:je.linkedinUrl,target:"_blank",rel:"noopener noreferrer",className:"mt-2 inline-flex items-center gap-2 text-sm text-zinc-100 hover:text-[#b8ffb8]",children:[d.jsx(Gy,{className:"h-4 w-4 text-[#39ff14]"}),je.linkedinHandle]})]})]})]}),d.jsx(cs.aside,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},className:"glass-card",children:d.jsxs("div",{className:"glass-card__inner",children:[d.jsxs("div",{className:"flex items-center gap-2 text-[#7df48d]",children:[d.jsx(lf,{className:"h-4 w-4"}),d.jsx("span",{className:"mono text-[0.72rem] uppercase tracking-[0.22em]",children:"identity"})]}),d.jsx("div",{className:"space-y-1",children:LT.slice(0,4).map(([e,t])=>d.jsxs("div",{className:"terminal-row",children:[d.jsx("span",{className:"terminal-key",children:e}),d.jsx("span",{className:"terminal-value",children:t})]},e))})]})})]})})}function FT({project:e}){return d.jsx(cs.article,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.35},className:"glass-card h-full",children:d.jsxs("div",{className:"glass-card__inner h-full",children:[d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"flex items-start justify-between gap-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80",children:e.category}),d.jsx("h3",{className:"mt-2 text-xl font-semibold leading-snug text-white",children:e.title})]}),e.year&&d.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300",children:e.year})]}),d.jsx("p",{className:"text-sm leading-7 text-zinc-300",children:e.description})]}),d.jsx("ul",{className:"flex flex-wrap gap-2 text-xs text-zinc-200",children:e.tech.map(t=>d.jsx("li",{className:"rounded-full border border-white/10 bg-white/5 px-3 py-1.5",children:t},t))}),d.jsxs("div",{className:"mt-auto flex flex-wrap gap-3 pt-2",children:[e.github&&d.jsxs("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200",children:[d.jsx(of,{className:"h-4 w-4"}),"GitHub"]}),e.demo&&d.jsxs("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10",children:[d.jsx(sr,{className:"h-4 w-4"}),"查看"]})]})]})})}function Ln({title:e,subtitle:t,children:n,align:r="left"}){const i=r==="center";return d.jsxs("section",{className:"mb-16 sm:mb-20",children:[d.jsxs("header",{className:i?"mx-auto mb-8 max-w-3xl text-center":"mb-8 max-w-3xl",children:[t&&d.jsxs("div",{className:"mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cyan-100",children:[d.jsx("span",{className:"h-2 w-2 rounded-full bg-cyan-300"}),t]}),d.jsx("h2",{className:"section-title",children:e})]}),n]})}const OT=[{title:"APT29 ATT&CK Simulation",slug:"apt29-attack-simulation",category:"Red Team / ATT&CK",year:"2023",description:"依照 MITRE ATT&CK 技術鏈整理 APT29 模擬流程，包含 Pupy、PoshC2、WebDAV 與 ELK/Kibana 偵測紀錄。",tech:["MITRE ATT&CK","Pupy","PoshC2","Kibana","Red Team"],github:"https://github.com/and910805/APT29",demo:null},{title:"RAT 2.0 Security Research Demo",slug:"rat-2-security-research",category:"Malware Research",year:"2024",description:"Python RAT 研究展示，聚焦 C2 連線、螢幕擷取、鍵盤監控與防禦視角，用於理解惡意程式行為。",tech:["Python","Socket","Windows","mss","pynput"],github:"https://github.com/and910805/Rat2.0",demo:null},{title:"Nessus Vulnerability Dashboard",slug:"nessus-vulnerability-dashboard",category:"Vulnerability Management",year:"2025",description:"把 Nessus 弱掃結果整理成可視化儀表板，協助追蹤風險等級、修補狀態與資產弱點分布。",tech:["Python","Streamlit","Plotly","SQLite","Nessus"],github:"https://github.com/and910805/Nessus-Vulnerability-Dashboard",demo:null},{title:"CEH LINE Quiz Bot",slug:"ceh-line-quiz-bot",category:"Learning Automation",year:"2025",description:"串接 Google Sheet 與 LINE API 的題庫機器人，用聊天方式練習 CEH 題目與資安觀念。",tech:["Google Apps Script","LINE API","Automation"],github:"https://github.com/and910805/CEH-robot",demo:null},{title:"Shipping Photo Manager",slug:"shipping-photo-manager",category:"Internal Tooling",year:"2024",description:"協助整理出貨照片與資料流程的小工具，降低人工命名、上傳與查找的摩擦。",tech:["Flask","Tkinter","REST API","Python"],github:"https://github.com/and910805/image-upload",demo:null},{title:"TaskGo",slug:"taskgo",category:"Productivity",year:"2024",description:"任務管理練習專案，結合 React、Flask、SQLite 與 JWT，實作基本登入與任務 CRUD。",tech:["React","Flask","SQLite","JWT","Tailwind CSS"],github:null,demo:null},{title:"Wedding Site",slug:"wedding-site",category:"Frontend Experience",year:"2024",description:"婚禮網站前端作品，使用 React、Vite 與 Framer Motion 做出流暢的頁面互動。",tech:["React","Vite","Framer Motion","Tailwind CSS"],github:"https://github.com/and910805/wedding-front",demo:"https://wedding-front.kuanlin.pro/"},{title:"Binary Search Game",slug:"binary-search-game",category:"Teaching / Game UX",year:"2024",description:"用遊戲方式解釋二分搜尋，把抽象演算法變成可以互動理解的學習流程。",tech:["React","Game UX","Teaching"],github:"https://github.com/and910805/Binary-Search-game",demo:"https://binary-search-game.kuanlin.pro/"},{title:"FarmGame",slug:"farmgame",category:"Game Prototype",year:"2024",description:"農場遊戲原型，練習 React 狀態管理、資源循環與輕量互動設計。",tech:["React","Zustand","Game Prototype"],github:"https://github.com/and910805/farmgame",demo:"https://farmgame.kuanlin.pro/"}];function zT(){return d.jsxs(d.Fragment,{children:[d.jsx(Ln,{subtitle:"Projects",title:"$ ls ~/projects",children:d.jsx("div",{className:"max-w-4xl space-y-4 text-base leading-8 text-zinc-300",children:d.jsx("p",{children:"這裡整理資安研究、弱掃分析、自動化工具與前端作品。每個專案都保留重點技術、年份與連結，方便快速瀏覽。"})})}),d.jsx("div",{className:"grid gap-6 md:grid-cols-2 xl:grid-cols-3",children:OT.map(e=>d.jsx(FT,{project:e},e.title))})]})}const _T=["CEH / CEH Practical / CEH Master","Web security and defensive thinking","Vulnerability management","Python automation","React / Vite / Tailwind CSS","Flask / API / SQLite","Linux deployment and troubleshooting","Markdown knowledge-base writing"];function VT(){return d.jsxs(d.Fragment,{children:[d.jsx(Ln,{subtitle:"About",title:"$ man eric",children:d.jsxs("div",{className:"max-w-4xl space-y-5 text-base leading-8 text-zinc-300",children:[d.jsx("p",{children:"我主要關注資安、後端工具、自動化與技術筆記整理。比起把作品做得很花，我更在意問題能不能被看懂、被驗證、被維護。"}),d.jsx("p",{children:"目前網站定位是個人知識庫與作品集：資安筆記放學習紀錄，專案放實作經驗，證照頁則整理已完成的能力驗證。"}),d.jsx("p",{children:"做事習慣是先觀察現況，再重現問題、修補、記錄。這也是這個網站想呈現的風格：像 terminal，但不要讓 terminal 搶走內容。"})]})}),d.jsx(Ln,{subtitle:"Stack",title:"$ cat ~/skills.txt",children:d.jsx("ul",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-4",children:_T.map(e=>d.jsx("li",{className:"rounded-2xl border border-[#39ff1424] bg-[#39ff1408] px-4 py-4 text-sm leading-7 text-zinc-200",children:e},e))})})]})}const BT=[{icon:sf,label:"Email",value:je.email,href:`mailto:${je.email}`},{icon:of,label:"GitHub",value:je.githubUsername,href:`https://github.com/${je.githubUsername}`},{icon:Gy,label:"LinkedIn",value:je.linkedinHandle,href:je.linkedinUrl},{icon:Ky,label:"LINE",value:je.lineId,href:null},{icon:d2,label:"Location",value:je.location,href:null}];function UT(){return d.jsxs(d.Fragment,{children:[d.jsx(Ln,{subtitle:"Contact",title:"$ contact",children:d.jsx("div",{className:"max-w-3xl space-y-4 text-base leading-8 text-zinc-300",children:d.jsx("p",{children:je.intro})})}),d.jsx("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-5",children:BT.map(e=>{const t=d.jsx("div",{className:"glass-card h-full",children:d.jsxs("div",{className:"glass-card__inner",children:[d.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200",children:d.jsx(e.icon,{className:"h-5 w-5"})}),d.jsxs("div",{className:"space-y-1",children:[d.jsx("p",{className:"text-sm font-semibold text-white",children:e.label}),d.jsx("p",{className:"break-all text-sm leading-7 text-zinc-300",children:e.value})]})]})});return e.href?d.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:t},e.label):d.jsx("div",{children:t},e.label)})})]})}const Sd=[{title:"Certified Ethical Hacker (CEH)",shortTitle:"CEH",issuer:"EC-Council",year:"2026",summary:"建立滲透測試、攻擊技術、弱點分析與防禦思維的基礎能力。",type:"PDF",href:"/certifications/ceh-certificate.pdf"},{title:"CEH Practical",shortTitle:"CEHP",issuer:"EC-Council",year:"2026",summary:"偏實作導向的測驗，涵蓋掃描、利用、枚舉、Web 與系統安全操作。",type:"PDF",href:"/certifications/ceh-practical-certificate.pdf"},{title:"CEH Master",shortTitle:"CEH Master",issuer:"EC-Council",year:"2026",summary:"結合 CEH 與 CEH Practical 的完整認證，代表理論與實作能力都完成驗證。",type:"Image",href:"/certifications/ceh-master-certificate.png",image:"/certifications/ceh-master-certificate.png"},{title:"iThome 2025 鐵人賽",shortTitle:"iThome",issuer:"iThome",year:"2025",summary:"完成 30 天資安文章系列，已整理進網站的 2025 iThome 鐵人賽分類。",type:"PDF",href:"/certifications/ithome-ironman-2025.pdf"}];function HT(){const e=Sd.filter(n=>["CEH","CEHP","CEH Master"].includes(n.shortTitle)),t=Sd.filter(n=>!e.includes(n));return d.jsxs(d.Fragment,{children:[d.jsx(Ln,{subtitle:"Certifications",title:"$ certctl list",children:d.jsx("div",{className:"max-w-4xl space-y-4 text-base leading-8 text-zinc-300",children:d.jsx("p",{children:"這裡整理目前已完成的資安證照與寫作紀錄。證照代表能力驗證，文章則是把學習過程留下來，方便之後回查。"})})}),d.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]",children:[d.jsx("div",{className:"grid gap-5",children:e.map(n=>d.jsx("article",{className:"glass-card",children:d.jsxs("div",{className:"glass-card__inner",children:[d.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]",children:n.issuer}),d.jsx("h2",{className:"mt-2 text-2xl font-semibold text-white",children:n.title})]}),d.jsx("span",{className:"rounded-full border border-[#39ff1424] bg-[#39ff1408] px-3 py-1 text-xs font-semibold text-[#b8ffb8]",children:n.type})]}),d.jsx("p",{className:"text-sm leading-7 text-zinc-300",children:n.summary}),d.jsxs("div",{className:"flex flex-wrap gap-3",children:[d.jsxs("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:"terminal-button terminal-button--primary",children:[d.jsx(sr,{className:"h-4 w-4"}),"開啟證明"]}),d.jsxs("a",{href:n.href,download:!0,className:"terminal-button terminal-button--ghost",children:[d.jsx(Wy,{className:"h-4 w-4"}),"下載檔案"]})]})]})},n.title))}),d.jsxs("aside",{className:"space-y-5",children:[d.jsx("div",{className:"glass-card",children:d.jsxs("div",{className:"glass-card__inner",children:[d.jsx("p",{className:"mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]",children:"Preview"}),d.jsx("h2",{className:"text-xl font-semibold text-white",children:"CEH Master 證明預覽"}),d.jsx("a",{href:"/certifications/ceh-master-certificate.png",target:"_blank",rel:"noopener noreferrer",children:d.jsx("img",{src:"/certifications/ceh-master-certificate.png",alt:"CEH Master certificate preview",className:"w-full rounded-2xl border border-[#39ff1420] object-cover"})})]})}),d.jsx("div",{className:"glass-card",children:d.jsxs("div",{className:"glass-card__inner",children:[d.jsx("p",{className:"mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]",children:"Additional Proof"}),d.jsx("h2",{className:"text-xl font-semibold text-white",children:"其他紀錄"}),d.jsx("ul",{className:"space-y-3",children:t.map(n=>d.jsx("li",{className:"rounded-2xl border border-[#39ff1420] bg-[#39ff1406] p-4",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx("div",{className:"mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#39ff1420] bg-white/5 text-zinc-200",children:d.jsx(rf,{className:"h-4 w-4"})}),d.jsxs("div",{className:"space-y-2",children:[d.jsxs("div",{children:[d.jsx("p",{className:"font-semibold text-white",children:n.title}),d.jsx("p",{className:"text-sm leading-6 text-zinc-400",children:n.summary})]}),d.jsxs("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-sm font-semibold text-[#8af7fe] transition hover:text-white",children:[d.jsx(sr,{className:"h-4 w-4"}),"開啟紀錄"]})]})]})},n.title))})]})})]})]})]})}const $T="https://chiayicity.zeabur.app/",WT=[{title:"Microsoft 365 顧問",command:"m365ctl consult",description:"協助企業整理 Microsoft 365 權限、裝置、資料保護與郵件管理，讓雲端環境更好管理也更安全。",items:["Entra ID 身分與權限規劃","Intune 裝置與政策管理","Purview 資料保護與稽核","Exchange 郵件設定與安全性"]},{title:"ISO 27001 顧問",command:"iso27001 prepare",description:"協助建立資安管理制度的文件、風險盤點與控制措施，讓導入 ISO 27001 的過程更有方向。",items:["資產與風險盤點","控制措施落差分析","文件制度整理","導入與稽核準備建議"]},{title:"網站服務",command:"webctl deploy",description:"提供形象網站、作品集、活動頁與小型系統開發，重視可維護性、部署流程與基礎安全設定。",items:["形象網站與 Landing Page","React / Vite 前端開發","API 與後台功能串接","部署、網域與基礎維運"]}];function GT(){return d.jsxs(d.Fragment,{children:[d.jsx(Ln,{subtitle:"Services",title:"$ services",children:d.jsx("div",{className:"max-w-4xl space-y-4 text-base leading-8 text-zinc-300",children:d.jsx("p",{children:"如果需要 Microsoft 365、ISO 27001 或網站開發相關協助，可以從這裡快速了解我能提供的服務範圍。 這一頁保持簡潔，讓有需求的人能直接判斷是否適合合作。"})})}),d.jsx("div",{className:"grid gap-5 lg:grid-cols-3",children:WT.map(e=>d.jsx("article",{className:"glass-card",children:d.jsxs("div",{className:"glass-card__inner",children:[d.jsxs("div",{className:"space-y-3",children:[d.jsxs("p",{className:"mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]",children:["$ ",e.command]}),d.jsx("h2",{className:"text-2xl font-semibold text-white",children:e.title}),d.jsx("p",{className:"text-sm leading-7 text-zinc-300",children:e.description})]}),d.jsx("ul",{className:"space-y-3 text-sm leading-7 text-zinc-200",children:e.items.map(t=>d.jsxs("li",{className:"flex gap-3",children:[d.jsx(y2,{className:"mt-1 h-4 w-4 shrink-0 text-[#39ff14]"}),d.jsx("span",{children:t})]},t))})]})},e.title))}),d.jsx("section",{className:"mt-8 rounded-[1.25rem] border border-[#39ff1424] bg-[#39ff1408] p-6 sm:p-8",children:d.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center",children:[d.jsxs("div",{className:"space-y-3",children:[d.jsx("p",{className:"mono text-xs uppercase tracking-[0.24em] text-[#8af7fe]",children:"work inquiry"}),d.jsx("h2",{className:"text-2xl font-semibold text-white",children:"需要顧問或網站服務嗎？"}),d.jsx("p",{className:"max-w-3xl text-sm leading-7 text-zinc-300",children:"可以先從外包網站看服務介紹，也可以直接寄信討論需求、時程與合作方式。"})]}),d.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row",children:[d.jsxs("a",{href:$T,target:"_blank",rel:"noopener noreferrer",className:"terminal-button terminal-button--primary",children:["前往外包網站",d.jsx(sr,{className:"h-4 w-4"})]}),d.jsxs("a",{href:`mailto:${je.email}`,className:"terminal-button terminal-button--ghost",children:["Email 聯絡",d.jsx(sf,{className:"h-4 w-4"})]})]})]})})]})}const Pd=[{title:"CEHv13 筆記",platform:"HackMD",category:"證照筆記",description:"整理 CEH v13 的重點架構、觀念與考試準備內容，適合快速複習與建立整體學習地圖。",href:"https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/Sk3bRkqAkl"},{title:"CEHP 心得",platform:"HackMD",category:"證照心得",description:"聚焦 CEH Practical 的準備方向、實作感受與實際作答經驗，強調實戰型考試的思維差異。",href:"https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/H1Jt85DiZg"},{title:"CEHV13 考試心得",platform:"HackMD",category:"考試心得",description:"記錄 CEH v13 考試歷程與準備重點，幫助讀者理解考題面向與應試節奏。",href:"https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/Bk4l2UoLxl"},{title:"picoCTF 筆記",platform:"HackMD",category:"CTF 筆記",description:"整理 picoCTF 解題過程與技巧，適合資安入門與培養題感時參考。",href:"https://hackmd.io/@LKanFpXQTUSJayug7EHeiA/rJqLG8Qdj"},{title:"打雜工程師的資安修煉路",platform:"iThome",category:"鐵人賽系列",description:"iThome 鐵人賽系列文章，完整呈現你持續輸出資安學習、實作與整理能力的內容軌跡。",href:"https://ithelp.ithome.com.tw/users/20171891/ironman/8352"}],KT=`---
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








`,qT=`---
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
`,QT=`---
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





`,XT=`---
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


`,YT=`---
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



`,ZT=`**資安是一場長期戰爭，我想把戰場紀錄下來。**

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
`,JT=`![/blog-assets/ithome-2025/20171891UXsSIBCW7L.png](/blog-assets/ithome-2025/20171891UXsSIBCW7L.png)

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
`,eb=`![/blog-assets/ithome-2025/20171891eFUriHTRZ2.png](/blog-assets/ithome-2025/20171891eFUriHTRZ2.png)![/blog-assets/ithome-2025/20171891Xm2FaXlRMz.png](/blog-assets/ithome-2025/20171891Xm2FaXlRMz.png)

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
`,tb=`### 畢業後正式踏入資安職涯：Firewall，新手的第一道防線

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
`,nb=`在資安工程師的世界裡，敵人不只有勒索病毒、APT、釣魚信…… 還有一種藏在辦公室抽屜、共用槽的恐怖怪物：

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
`,rb=`我每次 Python 寫的程式都被 EDR 擋住 :D 還有一些機台軟體，每次安裝都會被隔離，有時候還誤以為「安裝失敗」，結果白白浪費好幾個小時在 debug。 這就是所謂的——神器雖好，但用起來一樣會先誤傷自己。

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
`,ib=`本來以為進公司，掛上「資安工程師」這個名號後，我的世界就是防火牆、EDR、弱點掃描，跟駭客在暗網對決。 結果現實卻是：**IT 部門人少，很多雜事也會落到我身上。**

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
`,ob=`想像一下：你的船在風平浪靜時就開始漏水——你會怎麼辦？在資安的世界裡，公司就像一艘航行中的大船，弱點就是那些你看不見的裂縫。不先檢查，等到海水灌進來，可能就來不及了。也因此稽核、法規、甚至客戶審查，總會要求：**「你們要定期做弱點掃描！」**

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
`,sb=`> 原本以為微軟不就 **Word、Excel** 而已？ 公司導入 M365 才發現：微軟的 **Security** 其實很全。 先聲明我沒買它股票（笑），但也必須說：**全＝好複雜(上手難)**。 有講錯再請修正啦~

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
`,lb=`### 前言

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
`,ab=`## 前言

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
`,ub=`昨天我們討論了**資料（Data）**，這是企業最擔心外洩的核心資產。要有效守護資料，下一步必須確認：**員工是用什麼裝置來存取這些資料**。

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
`,cb=`還記得剛進公司的第一天，IT 交給我一組帳號密碼，叮嚀：「千萬不要外流」。 但現在光靠帳號密碼，已經很難抵擋駭客了。**密碼外洩、釣魚信、暴力破解**，都讓帳密組合變成資安界的「過時武器」。

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
`,fb=`又是週末了，請容許我偷懶一下，寫一篇心得文吧。 這篇不談技術細節，主要是想回顧一下開賽到現在我寫了些什麼。

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
`,hb=`前面談過 Zero Trust 的身分、裝置、資料，今天來到第四根柱子：**網路（Network）**。 老實說，這一塊其實跟傳統 IT 網路很像，像 CCNA 的考題一堆都在講 VLAN、防火牆、ACL。 但差別是：在 Zero Trust 的世界裡，這些技術不是「堆設備」，而是「切碎、限制、再加監控」。

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
`,pb=`> 很多人以為一定要掃 IP、跑掃描器才看得到風險。 其實 **不碰對方資產**，只靠公開資訊與指標，也能把自家對外面貌、第三方風險、外洩跡象抓個七八成。 **完全被動、合法合規**

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
`,db=`> 越來越想不到寫啥了 XDD 每天在想要寫什麼，甚至都比寫的時間久

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
`,mb=`在資訊安全裡，很多人把心力放在「防止駭客入侵」，卻忘了一件更現實的事：

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
`,gb=`> 昨天聊到 RTO（恢復時間目標）與 RPO（恢復點目標），今天來談談如何透過備份保護資料，確保在最壞情況下仍能快速復原。

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
`,yb=`> 昨天聊到 **3-2-1 備份原則**，備份能確保資料還在，但光有備份，並不代表系統能夠快速恢復上線。 每年不管是 ISO 還是法規，總有個大魔王：**災害復原（Disaster Recovery, DR）**。 當然做這個DR的報告也很麻煩...

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
`,xb=`倒數第二個假日啦～ 前幾天聊到的 **備份、零信任、帳號管理、災害復原、各種監控**，其實通通都是資安專責人員的日常。

以下引用數發部發佈的資料：

- [何謂資安專責人員](https://moda.gov.tw/ACS/laws/faq/03/636)
- [認可證照清單](https://www-api.moda.gov.tw/File/Get/acs/zh-tw/epCm7MlcYGOKmPH)

從法規面來看，資安專責人員需要具備**認可的資安證照**，並能建立制度與流程；但回到現實，多半是每天面對突發的資安議題，確保營運不中斷。 尤其在公司初期、或資安機制尚未完善時，這個角色還要負責**整體資安架構的部署與藍圖規劃**。

我一直覺得資安專責人員是「暗影中的守門人」：平常不顯眼，一出事大家第一個就會找你。 雖然壓力不小，但也因此更能感受到這份工作的價值。

> 但簡單來講，沒出事沒人覺得你有用；出事了你沒處理好也會被噴。XDD

---

原文連結：https://ithelp.ithome.com.tw/articles/10378065
`,vb=`> 分享一個朋友的故事。

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
`,wb=`它就像是給汽車換機油：如果不做，引擎遲早會出大問題，系統可能因為安全漏洞而「爆炸」；但如果做得太急躁、貿然**全域**部署，又可能毀掉整個環境，導致服務中斷或**相容性**問題。因此，千萬不要一看到新的 KB 就立刻全域滾動（rollout）。相反，我們應該採用一個穩健的策略，讓更新變成**可控的日常操作**，而不是冒險的賭注。

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
`,kb=`> 風險評鑑這位**每日必戰的 BOSS** 每年稽核必看.. 也是ISO/IEC 27001 的要求

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
`,Sb=`**垃圾郵件：資安戰場的第一道城門**

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
`,Pb=`還記得我最早接觸資安的時候嗎？那時常常看到一堆神秘的代號：\`T1566\`、\`T1059\`、\`T1003\`……完全摸不著頭緒，心想這些數字到底在搞什麼鬼？我只聽過\`T65K2\`（當兵必備知識，哈哈！），結果現在要背的卻是另一套「資安軍規」。

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
`,Cb=`> 接續昨天的內容

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
`,Tb=`> 又是假日了，來個比較輕鬆的主題

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
`,bb=`**「如果想轉職資安，要從哪裡開始？」**

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
`,Eb=`回顧

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
`,Db=`# 2025 年回顧：在新竹 37K 的日子裡，我為自己打了一場仗

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
`;function gr(e){return e.replace(/^---[\s\S]*?---\s*/,"").trim()}const g1=[{slug:"certification-review",name:"證照心得",count:2},{slug:"certification-notes",name:"證照筆記",count:1},{slug:"ctf-notes",name:"CTF 筆記",count:1},{slug:"forensics",name:"Forensics",count:1},{slug:"self-review",name:"回顧自我",count:1},{slug:"ithome-2025-ironman",name:"2025 iThome 鐵人賽",count:30}],Ab=[{slug:"ithome-2025-day-01",title:"Day 1- 法規推著我上場，學習讓我留下",date:"2025-08-18",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"資安是一場長期戰爭，我想把戰場紀錄下來。 還記得面試那天，主管提到公司剛上櫃，為了符合法規要求，需要一名專職的資安人員。在那之前，所有 IT 事務幾乎都由一位資...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10374837",contentMarkdown:ZT},{slug:"ithome-2025-day-02",title:"Day 2 - 公開情資很重要",date:"2025-08-19",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"是不是以為我要介紹 OWASP？今天不打算列一堆「情資平台清單」，而是針對公務繁忙、只能被動收信的資安工程師：只要訂閱幾個可靠來源，人家幫你整理好寄到信箱，...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10374947",contentMarkdown:JT},{slug:"ithome-2025-day-03",title:"Day 3 - 鐵裝還是布甲？資安裝備選擇題",date:"2025-08-20",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"在一家公司裡，導入資安工具與服務的最大推力，往往來自 法規要求（ISO 27001、GDPR、金融業規範）與 客戶稽核，再加上長官對安全能力的期待。這些要求就...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10374848",contentMarkdown:eb},{slug:"ithome-2025-day-04",title:"Day 4 - 公司的第一道防線",date:"2025-08-21",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"畢業後正式踏入資安職涯：Firewall，新手的第一道防線 畢業後正式踏入資安職涯，迎來的第一份正職工作。剛坐下還沒熟悉環境，主管就直接開口： 「你會看 Fi...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375208",contentMarkdown:tb},{slug:"ithome-2025-day-05",title:"Day 5 - 文件地獄：葵花寶典?",date:"2025-08-22",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"在資安工程師的世界裡，敵人不只有勒索病毒、APT、釣魚信……還有一種藏在辦公室抽屜、共用槽的恐怖怪物： 「ISMS 文件」。 如果把防火牆當作是鐵甲、EDR 當...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375130",contentMarkdown:nb},{slug:"ithome-2025-day-06",title:"Day 6 - EDR：手上那把神器",date:"2025-08-23",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"我每次 Python 寫的程式都被 EDR 擋住 :D還有一些機台軟體，每次安裝都會被隔離，有時候還誤以為「安裝失敗」，結果白白浪費好幾個小時在 debug。這...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375289",contentMarkdown:rb},{slug:"ithome-2025-day-07",title:"Day 7 - IT 部門人少，資安工程師的多重宇宙",date:"2025-08-24",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"本來以為進公司，掛上「資安工程師」這個名號後，我的世界就是防火牆、EDR、弱點掃描，跟駭客在暗網對決。結果現實卻是：IT 部門人少，很多雜事也會落到我身上。...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375678",contentMarkdown:ib},{slug:"ithome-2025-day-08",title:"Day 8 - 漏洞掃描大冒險：外包勇者 vs 自建工匠",date:"2025-08-25",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"想像一下：你的船在風平浪靜時就開始漏水——你會怎麼辦？在資安的世界裡，公司就像一艘航行中的大船，弱點就是那些你看不見的裂縫。不先檢查，等到海水灌進來，可能就來不...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375763",contentMarkdown:ob},{slug:"ithome-2025-day-09",title:"Day 9 - 什麼M365除了Word，也有資安產品?",date:"2025-08-26",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"6 min read",excerpt:"原本以為微軟不就 Word、Excel 而已？公司導入 M365 才發現：微軟的 Security 其實很全。先聲明我沒買它股票（笑），但也必須說：全＝好複雜...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10375925",contentMarkdown:sb},{slug:"ithome-2025-day-10",title:"Day 10 - 微軟有Zero Trust架構嗎?",date:"2025-08-27",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"前言 講到 ZT（Zero Trust），就會想到大學時期的大專生計劃，我還拿這個當主題，但後來沒過 昨天說到 M365 不只是辦公室套件，今天要聊聊現在最...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376085",contentMarkdown:lb},{slug:"ithome-2025-day-11",title:"Day 11 - 資料保護：別讓公司機密「長翅膀」飛出去",date:"2025-08-28",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"5 min read",excerpt:"前言 昨天講了 Zero Trust 的六大支柱，今天要挑一個大家最有感的：資料（Data）。因為對公司來說，伺服器壞了可以重建，但 資料外洩 可能直接 GG。...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376246",contentMarkdown:ab},{slug:"ithome-2025-day-12",title:"Day 12 - 即使資料保護再嚴密，也擋不住一台失守的裝置",date:"2025-08-29",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"5 min read",excerpt:"昨天我們討論了資料（Data），這是企業最擔心外洩的核心資產。要有效守護資料，下一步必須確認：員工是用什麼裝置來存取這些資料。 想像一下：一台多年未更新的 Wi...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376390",contentMarkdown:ub},{slug:"ithome-2025-day-13",title:"Day 13 - 打帳密已經過時了?大門不只要鎖，還要驗明正身",date:"2025-08-30",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"還記得剛進公司的第一天，IT 交給我一組帳號密碼，叮嚀：「千萬不要外流」。但現在光靠帳號密碼，已經很難抵擋駭客了。密碼外洩、釣魚信、暴力破解，都讓帳密組合變成資...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376102",contentMarkdown:cb},{slug:"ithome-2025-day-14",title:"Day 14 - 資安工程師的週末小結",date:"2025-08-31",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"又是週末了，請容許我偷懶一下，寫一篇心得文吧。這篇不談技術細節，主要是想回顧一下開賽到現在我寫了些什麼。 老實說，這 14 天的文章有點隨性，每天都是當天臨時想...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376400",contentMarkdown:fb},{slug:"ithome-2025-day-15",title:"Day 15 - 切碎內網，才能防止駭客橫向移動",date:"2025-09-01",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"前面談過 Zero Trust 的身分、裝置、資料，今天來到第四根柱子：網路（Network）。老實說，這一塊其實跟傳統 IT 網路很像，像 CCNA 的考題一...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10376885",contentMarkdown:hb},{slug:"ithome-2025-day-16",title:"Day 16 - 不出手也能「看光光」：被動盤點你公司的對外曝險",date:"2025-09-02",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"很多人以為一定要掃 IP、跑掃描器才看得到風險。其實 不碰對方資產，只靠公開資訊與指標，也能把自家對外面貌、第三方風險、外洩跡象抓個七八成。完全被動、合法合規...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377098",contentMarkdown:pb},{slug:"ithome-2025-day-17",title:"Day 17 - 為什麼一定要管「特權帳號」？",date:"2025-09-03",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"越來越想不到寫啥了 XDD每天在想要寫什麼，甚至都比寫的時間久 大家常聽到「帳號權限要設定好」，但「特權帳號」其實是另一回事：它能新增使用者、修改設定、存取...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377265",contentMarkdown:db},{slug:"ithome-2025-day-18",title:"Day 18 - 如果明天 DB 爆掉，你撐得住嗎？",date:"2025-09-04",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"在資訊安全裡，很多人把心力放在「防止駭客入侵」，卻忘了一件更現實的事： 系統總有一天會壞，資料總有一天會丟。 不論是硬碟故障、人為誤刪、勒索病毒，還是天災火...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377454",contentMarkdown:mb},{slug:"ithome-2025-day-19",title:"Day 19 - 如何打造一個可靠的備份策略？",date:"2025-09-05",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"昨天聊到 RTO（恢復時間目標）與 RPO（恢復點目標），今天來談談如何透過備份保護資料，確保在最壞情況下仍能快速復原。 最經典的 3-2-1 備份原則...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377679",contentMarkdown:gb},{slug:"ithome-2025-day-20",title:"Day 20 — 為什麼要做災害復原？",date:"2025-09-06",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"昨天聊到 3-2-1 備份原則，備份能確保資料還在，但光有備份，並不代表系統能夠快速恢復上線。每年不管是 ISO 還是法規，總有個大魔王：災害復原（Disas...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10377737",contentMarkdown:yb},{slug:"ithome-2025-day-21",title:"Day 21 - 資安專責人員",date:"2025-09-07",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"倒數第二個假日啦～前幾天聊到的 備份、零信任、帳號管理、災害復原、各種監控，其實通通都是資安專責人員的日常。 以下引用數發部發佈的資料： 何謂資安專責人員...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378065",contentMarkdown:xb},{slug:"ithome-2025-day-22",title:"Day 22 - 公司電腦上，還有隱私嗎？",date:"2025-09-08",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"分享一個朋友的故事。 剛進公司不久，他電腦突然變超卡，還沒來得及寫信報修，電話就先響了： 「嗨～你電腦是不是怪怪的？我們這邊看到你 CPU 爆了。」 當下他...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378223",contentMarkdown:vb},{slug:"ithome-2025-day-23",title:"Day 23 - Patch Management 是一項既必要又棘手的任務。",date:"2025-09-09",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"它就像是給汽車換機油：如果不做，引擎遲早會出大問題，系統可能因為安全漏洞而「爆炸」；但如果做得太急躁、貿然全域部署，又可能毀掉整個環境，導致服務中斷或相容性問題...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378517",contentMarkdown:wb},{slug:"ithome-2025-day-24",title:"Day 24 - 風險評鑑：年度BOSS戰開打",date:"2025-09-10",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"風險評鑑這位每日必戰的 BOSS每年稽核必看..也是ISO/IEC 27001 的要求 當然他也是有好處，能幫組織及時發現潛在危機，並想出好方法應對。簡單來...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378757",contentMarkdown:kb},{slug:"ithome-2025-day-25",title:"Day 25 - 一封垃圾郵件，可能就是資安危機的開端？",date:"2025-09-11",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"垃圾郵件：資安戰場的第一道城門 剛進公司時，我最怕的不是伺服器當機，而是員工慌張打電話： 「我好像點錯了一封信…」 一封垃圾郵件，可能讓公司資料被鎖、帳號被盜...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378959",contentMarkdown:Sb},{slug:"ithome-2025-day-26",title:"Day 26 - 從T65K2到T1566：MITRE ATT&CK入門指南",date:"2025-09-12",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"還記得我最早接觸資安的時候嗎？那時常常看到一堆神秘的代號：T1566、T1059、T1003……完全摸不著頭緒，心想這些數字到底在搞什麼鬼？我只聽過T65K2（...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379225",contentMarkdown:Pb},{slug:"ithome-2025-day-27",title:"Day 27 - 為什麼藍隊要學MITRE ATT&CK？",date:"2025-09-13",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"接續昨天的內容 對藍隊（防禦方）來說，MITRE ATT&amp;CK 不是什麼「加分題」的選修，而是必修的攻防劇本。它不像教科書那樣生硬，而是像一部懸疑大...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379244",contentMarkdown:Cb},{slug:"ithome-2025-day-28",title:"Day 28 - 沒有監控，你什麼都不知道",date:"2025-09-14",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"又是假日了，來個比較輕鬆的主題 剛入職的時候，公司還沒分得這麼細，IT 的監控、資安的巡檢，全都一把抓。每天一到公司，除了要看 AD、DNS、核心系統有沒有...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10378945",contentMarkdown:Tb},{slug:"ithome-2025-day-29",title:"Day 29 - 轉職資安人必備技能",date:"2025-09-15",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"3 min read",excerpt:"「如果想轉職資安，要從哪裡開始？」 說真的，資安的範圍大到你會覺得無從下手。一堆名詞：Nmap、SIEM、EDR、SOC、APT…到底要先學哪一個？ 其實最簡單...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379737",contentMarkdown:bb},{slug:"ithome-2025-day-30",title:"Day 30 - 尾聲：資安人的三十天",date:"2025-09-16",category:"2025 iThome 鐵人賽",categorySlug:"ithome-2025-ironman",readTime:"4 min read",excerpt:"回顧 不知不覺，這個系列也走到尾聲了。第一次參加鐵人賽，真的正如它的名字一樣──很難。尤其我還一次報了兩個系列，結果 DevSecOps 系列在中途就沒能繼續更...",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",sourceUrl:"https://ithelp.ithome.com.tw/articles/10379242",contentMarkdown:Eb},{slug:"cehp-review",title:"CEHP 心得",date:"2026-03-20",category:"證照心得",categorySlug:"certification-review",readTime:"12 min read",excerpt:"CEH Practical 考後心得，整理考試規則、環境、解題節奏與實作準備方式。",coverImage:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",contentMarkdown:gr(QT)},{slug:"ceh-v13-review",title:"CEH V13 證照心得與準備方式分享",date:"2025-07-20",category:"證照心得",categorySlug:"certification-review",readTime:"10 min read",excerpt:"CEH V13 考試心得與準備流程，包含考前提醒、考試經驗與複習方向。",coverImage:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",contentMarkdown:gr(qT)},{slug:"ceh-v13-notes",title:"CEH v13 筆記（持續更新中）",date:"2025-07-01",category:"證照筆記",categorySlug:"certification-notes",readTime:"20 min read",excerpt:"CEH v13 重點筆記，整理常見觀念、攻防主題與考試複習內容。",coverImage:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",contentMarkdown:gr(KT)},{slug:"picoctf-notes",title:"picoCTF 筆記",date:"2025-06-20",category:"CTF 筆記",categorySlug:"ctf-notes",readTime:"18 min read",excerpt:"picoCTF 解題筆記，包含 Web Exploitation 等題型的觀察與解題流程。",coverImage:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",contentMarkdown:gr(YT)},{slug:"forensics-class-0324",title:"Forensics 社課 3/24",date:"2025-03-24",category:"Forensics",categorySlug:"forensics",readTime:"8 min read",excerpt:"Forensics 社課教材與筆記，整理鑑識題型與實作觀察。",coverImage:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",contentMarkdown:gr(XT)},{slug:"2025-self-review-hsinchu-37k",title:"2025 年回顧：在新竹 37K 的日子裡，我為自己打了一場仗",date:"2025-12-31",category:"回顧自我",categorySlug:"self-review",readTime:"7 min read",excerpt:"從剛退伍踏進新竹，到一個人扛起公司資安與 IT 日常，這一年不寬裕、不輕鬆，卻也讓我真正長出韌性、技術與責任感。",coverImage:"/S__67723282.jpg",contentMarkdown:gr(Db)},{slug:"zeabur-postgresql-blog-foundation",title:"Zeabur PostgreSQL Blog Foundation",date:"2026-04-10",category:"Database Lab",categorySlug:"database-lab",readTime:"5 min read",excerpt:"把部落格內容獨立成一個資料庫 schema，讓文章、分類、標籤、留言與發佈狀態可以和作品集靜態資料分開管理。",coverImage:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",contentMarkdown:`## 目標

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
- 文章改由本地檔案或資料庫維護，不開放線上寫文章後台`}],hs=Ab.filter(e=>!["database-lab","security-notes","build-log"].includes(e.categorySlug)),Ib={"zeabur-postgresql-blog-foundation":[{id:1,author:"Eric",date:"2026-04-10",body:"這裡先保留留言樣式，接 API 後可以直接改成從 blog.comments 讀取。"}]};async function Mb(){const e=await fetch("/api/blog/posts");if(!e.ok)throw new Error("Blog API unavailable");return(await e.json()).posts}async function Nb(e){const t=await fetch(`/api/blog/posts/${e}`);if(!t.ok)throw new Error("Blog post unavailable");return(await t.json()).post}async function Rb(e){const t=await fetch(`/api/blog/posts/${e}/comments`);if(!t.ok)throw new Error("Comments API unavailable");return(await t.json()).comments}async function Lb(e,t){const n=await fetch(`/api/blog/posts/${e}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw new Error("Unable to submit comment");return(await n.json()).comment}const Cd=new Set(["database-lab","security-notes","build-log"]);function jb(e){var t,n;if(e.categorySlug==="ithome-2025-ironman"){const r=Number(((t=e.slug.match(/day-(\d+)/))==null?void 0:t[1])??0);return r<=10?"day-01-10":r<=20?"day-11-20":"day-21-30"}return((n=e.date)==null?void 0:n.slice(0,4))??"misc"}function Fb(e){const t=e.filter(r=>!Cd.has(r.categorySlug));return[...g1.filter(r=>!Cd.has(r.slug)).map(r=>{const i=t.filter(s=>s.categorySlug===r.slug).sort((s,l)=>l.date.localeCompare(s.date));if(!i.length)return null;const o=i.reduce((s,l)=>{const a=jb(l);return s[a]=s[a]??[],s[a].push(l),s},{});return{...r,count:i.length,directories:Object.entries(o).map(([s,l])=>({name:s,items:l})).sort((s,l)=>s.name.localeCompare(l.name))}}).filter(Boolean),{slug:"external-links",name:"外部文章連結",count:Pd.length,directories:[{name:"hackmd-and-ithome",items:Pd.map(r=>({...r,slug:r.href,date:r.platform,readTime:r.category,external:!0}))}]}]}function Ob(e,t){return t?[e.title,e.category,e.categorySlug,e.excerpt,e.description,e.platform,e.href].filter(Boolean).some(n=>String(n).toLowerCase().includes(t)):!0}function zb(e,t){return t?e.map(n=>{const r=n.directories.map(i=>({...i,items:i.items.filter(o=>Ob(o,t))})).filter(i=>i.items.length>0);return r.length?{...n,count:r.reduce((i,o)=>i+o.items.length,0),directories:r}:null}).filter(Boolean):e}function _b(){const[e,t]=E.useState(hs),[n,r]=E.useState(""),[i,o]=E.useState({}),[s,l]=E.useState({});E.useEffect(()=>{Mb().then(v=>{v.length&&t(v)}).catch(()=>{})},[]);const a=E.useMemo(()=>Fb(e),[e]),u=n.trim().toLowerCase(),f=E.useMemo(()=>zb(a,u),[u,a]),c=a.reduce((v,k)=>v+k.count,0),h=f.reduce((v,k)=>v+k.count,0);function p(v){o(k=>({...k,[v]:!k[v]}))}function m(v){l(k=>({...k,[v]:!k[v]}))}return d.jsxs("section",{className:"space-y-10",children:[d.jsx(Ln,{subtitle:"Blog",title:"資安筆記"}),d.jsxs("section",{className:"terminal-tree rounded-2xl border border-[#39ff1424] bg-[#02070df5] shadow-[0_18px_70px_rgba(0,0,0,0.5)]",children:[d.jsx("div",{className:"flex items-center justify-between gap-4 border-b border-[#39ff1424] px-5 py-4",children:d.jsx("div",{className:"mono text-xs text-zinc-500",children:"eric@portfolio:~/blog"})}),d.jsxs("div",{className:"space-y-5 p-5 sm:p-7",children:[d.jsxs("div",{className:"mono flex flex-wrap items-center gap-2 text-sm text-[#b8ffb8]",children:[d.jsx(qy,{className:"h-4 w-4 text-[#39ff14]"}),d.jsx("span",{className:"text-[#39ff14]",children:"$"}),d.jsx("span",{children:u?`grep -ri "${n}" ~/blog`:"tree ~/blog --interactive"})]}),d.jsxs("label",{className:"mono block rounded-xl border border-[#39ff1424] bg-black/30 px-4 py-3 text-sm text-zinc-400 focus-within:border-[#39ff14] focus-within:bg-[#39ff1408]",children:[d.jsx("span",{className:"mr-2 text-[#39ff14]",children:"$"}),d.jsx("span",{className:"mr-2 text-zinc-500",children:"grep"}),d.jsx("input",{type:"search",value:n,onChange:v=>r(v.target.value),className:"w-[min(100%,28rem)] bg-transparent text-[#eaffec] outline-none placeholder:text-zinc-600",placeholder:"search notes, tags, keywords..."})]}),d.jsxs("div",{className:"rounded-xl border border-white/10 bg-black/30 p-4 sm:p-5",children:[d.jsxs("div",{className:"mono mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400",children:[d.jsx("span",{children:"~/blog"}),d.jsx("span",{children:u?`${h} matches / ${c} articles`:`${a.length} directories, ${c} articles`})]}),d.jsxs("div",{className:"space-y-2",children:[f.length===0&&d.jsx("div",{className:"mono rounded-lg border border-[#ffbd2e33] bg-[#ffbd2e08] px-4 py-3 text-sm text-[#ffdf8a]",children:"no matches found. try another keyword."}),f.map((v,k)=>{const g=u||!!i[v.slug],y=k===f.length-1;return d.jsxs("div",{className:"mono text-sm",children:[d.jsxs("button",{type:"button",onClick:()=>p(v.slug),className:"group flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-zinc-100 transition hover:bg-[#39ff1408] hover:text-white",children:[d.jsx("span",{className:"w-5 text-zinc-500",children:y?"└──":"├──"}),d.jsx(gp,{className:`h-4 w-4 text-[#39ff14] transition ${g?"rotate-90":""}`}),g?d.jsx(ju,{className:"h-4 w-4 text-[#8af7fe]"}):d.jsx(yp,{className:"h-4 w-4 text-[#8af7fe]"}),d.jsx("span",{className:"font-semibold",children:v.name}),d.jsx("span",{className:"ml-auto rounded-full border border-white/10 px-2 py-0.5 text-[0.68rem] text-zinc-500",children:v.count})]}),g&&d.jsx("div",{className:"ml-6 space-y-1 border-l border-[#39ff141f] pl-4",children:v.directories.map((x,S)=>{const b=`${v.slug}/${x.name}`,C=u||!!s[b],A=S===v.directories.length-1;return d.jsxs("div",{children:[d.jsxs("button",{type:"button",onClick:()=>m(b),className:"group flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-zinc-200 transition hover:bg-[#3df2ff0a] hover:text-white",children:[d.jsx("span",{className:"w-5 text-zinc-600",children:A?"└──":"├──"}),d.jsx(gp,{className:`h-4 w-4 text-[#8af7fe] transition ${C?"rotate-90":""}`}),C?d.jsx(ju,{className:"h-4 w-4 text-[#39ff14]"}):d.jsx(yp,{className:"h-4 w-4 text-[#39ff14]"}),d.jsx("span",{children:x.name}),d.jsxs("span",{className:"ml-auto text-[0.68rem] text-zinc-600",children:[x.items.length," files"]})]}),C&&d.jsx("div",{className:"ml-6 space-y-1 border-l border-[#3df2ff1f] pl-4",children:x.items.map((D,j)=>{const T=j===x.items.length-1;return D.external?d.jsxs("a",{href:D.href,target:"_blank",rel:"noopener noreferrer",className:"group flex items-start gap-2 rounded-lg px-2 py-2 text-zinc-300 transition hover:bg-[#39ff1408] hover:text-white",children:[d.jsx("span",{className:"mt-0.5 w-5 text-zinc-700",children:T?"└──":"├──"}),d.jsx(sr,{className:"mt-0.5 h-4 w-4 shrink-0 text-[#8af7fe]"}),d.jsxs("span",{className:"min-w-0 flex-1",children:[d.jsxs("span",{className:"block truncate",children:[D.title,".url"]}),d.jsxs("span",{className:"mt-1 block whitespace-normal text-xs leading-5 text-zinc-500 group-hover:text-zinc-400",children:[D.date," / ",D.readTime]})]})]},D.slug):d.jsxs(Xr,{to:`/blog/${D.slug}`,className:"group flex items-start gap-2 rounded-lg px-2 py-2 text-zinc-300 transition hover:bg-[#39ff1408] hover:text-white",children:[d.jsx("span",{className:"mt-0.5 w-5 text-zinc-700",children:T?"└──":"├──"}),d.jsx(rf,{className:"mt-0.5 h-4 w-4 shrink-0 text-[#39ff14]"}),d.jsxs("span",{className:"min-w-0 flex-1",children:[d.jsxs("span",{className:"block truncate",children:[D.title,".md"]}),d.jsxs("span",{className:"mt-1 block whitespace-normal text-xs leading-5 text-zinc-500 group-hover:text-zinc-400",children:[D.date," / ",D.readTime]})]})]},D.slug)})})]},b)})})]},v.slug)})]})]}),d.jsx("p",{className:"mono text-xs leading-6 text-zinc-500",children:"hint: click a directory to expand it, or use grep to search across notes and external links."})]})]})]})}function Vb({postSlug:e}){const t=E.useMemo(()=>Ib[e]??[],[e]),[n,r]=E.useState(t),[i,o]=E.useState({author:"",email:"",body:""}),[s,l]=E.useState("");E.useEffect(()=>{r(t),Rb(e).then(r).catch(()=>{})},[t,e]);async function a(u){u.preventDefault();const f=i.body.trim();if(f)try{const c=await Lb(e,{...i,body:f});r(h=>[c,...h]),l("留言已直接發布。")}catch{const h={id:Date.now(),author:i.author.trim()||"匿名訪客",date:new Date().toISOString().slice(0,10),body:f};r(p=>[h,...p]),l("目前 API 無法連線，留言先在本機預覽。")}finally{o({author:"",email:"",body:""})}}return d.jsx("section",{className:"glass-card",children:d.jsxs("div",{className:"glass-card__inner",children:[d.jsxs("div",{className:"flex items-center gap-2 text-[#8af7fe]",children:[d.jsx(Ky,{className:"h-4 w-4"}),d.jsx("span",{className:"mono text-[0.72rem] uppercase tracking-[0.22em]",children:"comments"})]}),d.jsx("h2",{className:"text-2xl font-semibold text-white",children:"發佈留言"}),d.jsx("p",{className:"text-sm leading-7 text-zinc-400",children:"送出後會直接發布到這篇文章底下，不需要再另外審核。"}),d.jsxs("form",{onSubmit:a,className:"grid gap-4",children:[d.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[d.jsxs("label",{className:"grid gap-2 text-sm text-zinc-300",children:["顯示名稱",d.jsx("input",{value:i.author,onChange:u=>o(f=>({...f,author:u.target.value})),maxLength:80,className:"rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#39ff14]",placeholder:"Enter your name"})]}),d.jsxs("label",{className:"grid gap-2 text-sm text-zinc-300",children:["Email",d.jsx("input",{type:"email",value:i.email,onChange:u=>o(f=>({...f,email:u.target.value})),maxLength:254,className:"rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#39ff14]",placeholder:"name@example.com"})]})]}),d.jsxs("label",{className:"grid gap-2 text-sm text-zinc-300",children:["Comment",d.jsx("textarea",{value:i.body,onChange:u=>o(f=>({...f,body:u.target.value})),maxLength:2e3,className:"min-h-32 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none focus:border-[#39ff14]",placeholder:"留下你的想法"})]}),d.jsxs("button",{type:"submit",className:"terminal-button terminal-button--primary w-fit",children:["submit comment",d.jsx(g2,{className:"h-4 w-4"})]}),s&&d.jsx("p",{className:"text-sm text-[#b8ffb8]",children:s})]}),d.jsx("div",{className:"space-y-3",children:n.map(u=>d.jsxs("article",{className:"rounded-lg border border-white/10 bg-white/[0.03] p-4",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[d.jsx("h3",{className:"font-semibold text-white",children:u.author}),d.jsx("time",{className:"mono text-xs text-zinc-500",children:u.date})]}),d.jsx("p",{className:"mt-3 text-sm leading-7 text-zinc-300",children:u.body})]},u.id))})]})})}function Bb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Ub=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Hb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,$b={};function Td(e,t){return($b.jsx?Hb:Ub).test(e)}const Wb=/[ \t\n\f\r]/g;function Gb(e){return typeof e=="object"?e.type==="text"?bd(e.value):!1:bd(e)}function bd(e){return e.replace(Wb,"")===""}class So{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}So.prototype.normal={};So.prototype.property={};So.prototype.space=void 0;function y1(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new So(n,r,t)}function Qu(e){return e.toLowerCase()}class et{constructor(t,n){this.attribute=n,this.property=t}}et.prototype.attribute="";et.prototype.booleanish=!1;et.prototype.boolean=!1;et.prototype.commaOrSpaceSeparated=!1;et.prototype.commaSeparated=!1;et.prototype.defined=!1;et.prototype.mustUseProperty=!1;et.prototype.number=!1;et.prototype.overloadedBoolean=!1;et.prototype.property="";et.prototype.spaceSeparated=!1;et.prototype.space=void 0;let Kb=0;const K=pr(),Pe=pr(),Xu=pr(),N=pr(),se=pr(),Br=pr(),rt=pr();function pr(){return 2**++Kb}const Yu=Object.freeze(Object.defineProperty({__proto__:null,boolean:K,booleanish:Pe,commaOrSpaceSeparated:rt,commaSeparated:Br,number:N,overloadedBoolean:Xu,spaceSeparated:se},Symbol.toStringTag,{value:"Module"})),ka=Object.keys(Yu);class Af extends et{constructor(t,n,r,i){let o=-1;if(super(t,n),Ed(this,"space",i),typeof r=="number")for(;++o<ka.length;){const s=ka[o];Ed(this,ka[o],(r&Yu[s])===Yu[s])}}}Af.prototype.defined=!0;function Ed(e,t,n){n&&(e[t]=n)}function oi(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Af(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Qu(r)]=r,n[Qu(o.attribute)]=r}return new So(t,n,e.space)}const x1=oi({properties:{ariaActiveDescendant:null,ariaAtomic:Pe,ariaAutoComplete:null,ariaBusy:Pe,ariaChecked:Pe,ariaColCount:N,ariaColIndex:N,ariaColSpan:N,ariaControls:se,ariaCurrent:null,ariaDescribedBy:se,ariaDetails:null,ariaDisabled:Pe,ariaDropEffect:se,ariaErrorMessage:null,ariaExpanded:Pe,ariaFlowTo:se,ariaGrabbed:Pe,ariaHasPopup:null,ariaHidden:Pe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:se,ariaLevel:N,ariaLive:null,ariaModal:Pe,ariaMultiLine:Pe,ariaMultiSelectable:Pe,ariaOrientation:null,ariaOwns:se,ariaPlaceholder:null,ariaPosInSet:N,ariaPressed:Pe,ariaReadOnly:Pe,ariaRelevant:null,ariaRequired:Pe,ariaRoleDescription:se,ariaRowCount:N,ariaRowIndex:N,ariaRowSpan:N,ariaSelected:Pe,ariaSetSize:N,ariaSort:null,ariaValueMax:N,ariaValueMin:N,ariaValueNow:N,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function v1(e,t){return t in e?e[t]:t}function w1(e,t){return v1(e,t.toLowerCase())}const qb=oi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Br,acceptCharset:se,accessKey:se,action:null,allow:null,allowFullScreen:K,allowPaymentRequest:K,allowUserMedia:K,alt:null,as:null,async:K,autoCapitalize:null,autoComplete:se,autoFocus:K,autoPlay:K,blocking:se,capture:null,charSet:null,checked:K,cite:null,className:se,cols:N,colSpan:null,content:null,contentEditable:Pe,controls:K,controlsList:se,coords:N|Br,crossOrigin:null,data:null,dateTime:null,decoding:null,default:K,defer:K,dir:null,dirName:null,disabled:K,download:Xu,draggable:Pe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:K,formTarget:null,headers:se,height:N,hidden:Xu,high:N,href:null,hrefLang:null,htmlFor:se,httpEquiv:se,id:null,imageSizes:null,imageSrcSet:null,inert:K,inputMode:null,integrity:null,is:null,isMap:K,itemId:null,itemProp:se,itemRef:se,itemScope:K,itemType:se,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:K,low:N,manifest:null,max:null,maxLength:N,media:null,method:null,min:null,minLength:N,multiple:K,muted:K,name:null,nonce:null,noModule:K,noValidate:K,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:K,optimum:N,pattern:null,ping:se,placeholder:null,playsInline:K,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:K,referrerPolicy:null,rel:se,required:K,reversed:K,rows:N,rowSpan:N,sandbox:se,scope:null,scoped:K,seamless:K,selected:K,shadowRootClonable:K,shadowRootDelegatesFocus:K,shadowRootMode:null,shape:null,size:N,sizes:null,slot:null,span:N,spellCheck:Pe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:N,step:null,style:null,tabIndex:N,target:null,title:null,translate:null,type:null,typeMustMatch:K,useMap:null,value:Pe,width:N,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:se,axis:null,background:null,bgColor:null,border:N,borderColor:null,bottomMargin:N,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:K,declare:K,event:null,face:null,frame:null,frameBorder:null,hSpace:N,leftMargin:N,link:null,longDesc:null,lowSrc:null,marginHeight:N,marginWidth:N,noResize:K,noHref:K,noShade:K,noWrap:K,object:null,profile:null,prompt:null,rev:null,rightMargin:N,rules:null,scheme:null,scrolling:Pe,standby:null,summary:null,text:null,topMargin:N,valueType:null,version:null,vAlign:null,vLink:null,vSpace:N,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:K,disableRemotePlayback:K,prefix:null,property:null,results:N,security:null,unselectable:null},space:"html",transform:w1}),Qb=oi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:rt,accentHeight:N,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:N,amplitude:N,arabicForm:null,ascent:N,attributeName:null,attributeType:null,azimuth:N,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:N,by:null,calcMode:null,capHeight:N,className:se,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:N,diffuseConstant:N,direction:null,display:null,dur:null,divisor:N,dominantBaseline:null,download:K,dx:null,dy:null,edgeMode:null,editable:null,elevation:N,enableBackground:null,end:null,event:null,exponent:N,externalResourcesRequired:null,fill:null,fillOpacity:N,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Br,g2:Br,glyphName:Br,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:N,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:N,horizOriginX:N,horizOriginY:N,id:null,ideographic:N,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:N,k:N,k1:N,k2:N,k3:N,k4:N,kernelMatrix:rt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:N,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:N,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:N,overlineThickness:N,paintOrder:null,panose1:null,path:null,pathLength:N,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:se,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:N,pointsAtY:N,pointsAtZ:N,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:rt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:rt,rev:rt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:rt,requiredFeatures:rt,requiredFonts:rt,requiredFormats:rt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:N,specularExponent:N,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:N,strikethroughThickness:N,string:null,stroke:null,strokeDashArray:rt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:N,strokeOpacity:N,strokeWidth:null,style:null,surfaceScale:N,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:rt,tabIndex:N,tableValues:null,target:null,targetX:N,targetY:N,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:rt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:N,underlineThickness:N,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:N,values:null,vAlphabetic:N,vMathematical:N,vectorEffect:null,vHanging:N,vIdeographic:N,version:null,vertAdvY:N,vertOriginX:N,vertOriginY:N,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:N,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:v1}),k1=oi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),S1=oi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:w1}),P1=oi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Xb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Yb=/[A-Z]/g,Dd=/-[a-z]/g,Zb=/^data[-\w.:]+$/i;function Jb(e,t){const n=Qu(t);let r=t,i=et;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Zb.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Dd,tE);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Dd.test(o)){let s=o.replace(Yb,eE);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}i=Af}return new i(r,t)}function eE(e){return"-"+e.toLowerCase()}function tE(e){return e.charAt(1).toUpperCase()}const nE=y1([x1,qb,k1,S1,P1],"html"),If=y1([x1,Qb,k1,S1,P1],"svg");function rE(e){return e.join(" ").trim()}var Mf={},Ad=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,iE=/\n/g,oE=/^\s*/,sE=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,lE=/^:\s*/,aE=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,uE=/^[;\s]*/,cE=/^\s+|\s+$/g,fE=`
`,Id="/",Md="*",Kn="",hE="comment",pE="declaration";function dE(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(m){var v=m.match(iE);v&&(n+=v.length);var k=m.lastIndexOf(fE);r=~k?m.length-k:r+m.length}function o(){var m={line:n,column:r};return function(v){return v.position=new s(m),u(),v}}function s(m){this.start=m,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function l(m){var v=new Error(t.source+":"+n+":"+r+": "+m);if(v.reason=m,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function a(m){var v=m.exec(e);if(v){var k=v[0];return i(k),e=e.slice(k.length),v}}function u(){a(oE)}function f(m){var v;for(m=m||[];v=c();)v!==!1&&m.push(v);return m}function c(){var m=o();if(!(Id!=e.charAt(0)||Md!=e.charAt(1))){for(var v=2;Kn!=e.charAt(v)&&(Md!=e.charAt(v)||Id!=e.charAt(v+1));)++v;if(v+=2,Kn===e.charAt(v-1))return l("End of comment missing");var k=e.slice(2,v-2);return r+=2,i(k),e=e.slice(v),r+=2,m({type:hE,comment:k})}}function h(){var m=o(),v=a(sE);if(v){if(c(),!a(lE))return l("property missing ':'");var k=a(aE),g=m({type:pE,property:Nd(v[0].replace(Ad,Kn)),value:k?Nd(k[0].replace(Ad,Kn)):Kn});return a(uE),g}}function p(){var m=[];f(m);for(var v;v=h();)v!==!1&&(m.push(v),f(m));return m}return u(),p()}function Nd(e){return e?e.replace(cE,Kn):Kn}var mE=dE,gE=ms&&ms.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mf,"__esModule",{value:!0});Mf.default=xE;const yE=gE(mE);function xE(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,yE.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:s,value:l}=o;i?t(s,l,o):l&&(n=n||{},n[s]=l)}),n}var Dl={};Object.defineProperty(Dl,"__esModule",{value:!0});Dl.camelCase=void 0;var vE=/^--[a-zA-Z0-9_-]+$/,wE=/-([a-z])/g,kE=/^[^-]+$/,SE=/^-(webkit|moz|ms|o|khtml)-/,PE=/^-(ms)-/,CE=function(e){return!e||kE.test(e)||vE.test(e)},TE=function(e,t){return t.toUpperCase()},Rd=function(e,t){return"".concat(t,"-")},bE=function(e,t){return t===void 0&&(t={}),CE(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(PE,Rd):e=e.replace(SE,Rd),e.replace(wE,TE))};Dl.camelCase=bE;var EE=ms&&ms.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},DE=EE(Mf),AE=Dl;function Zu(e,t){var n={};return!e||typeof e!="string"||(0,DE.default)(e,function(r,i){r&&i&&(n[(0,AE.camelCase)(r,t)]=i)}),n}Zu.default=Zu;var IE=Zu;const ME=el(IE),C1=T1("end"),Nf=T1("start");function T1(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function NE(e){const t=Nf(e),n=C1(e);if(t&&n)return{start:t,end:n}}function _i(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ld(e.position):"start"in e||"end"in e?Ld(e):"line"in e||"column"in e?Ju(e):""}function Ju(e){return jd(e&&e.line)+":"+jd(e&&e.column)}function Ld(e){return Ju(e&&e.start)+"-"+Ju(e&&e.end)}function jd(e){return e&&typeof e=="number"?e:1}class _e extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(s=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const a=r.indexOf(":");a===-1?o.ruleId=r:(o.source=r.slice(0,a),o.ruleId=r.slice(a+1))}if(!o.place&&o.ancestors&&o.ancestors){const a=o.ancestors[o.ancestors.length-1];a&&(o.place=a.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=_i(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}_e.prototype.file="";_e.prototype.name="";_e.prototype.reason="";_e.prototype.message="";_e.prototype.stack="";_e.prototype.column=void 0;_e.prototype.line=void 0;_e.prototype.ancestors=void 0;_e.prototype.cause=void 0;_e.prototype.fatal=void 0;_e.prototype.place=void 0;_e.prototype.ruleId=void 0;_e.prototype.source=void 0;const Rf={}.hasOwnProperty,RE=new Map,LE=/[A-Z]/g,jE=new Set(["table","tbody","thead","tfoot","tr"]),FE=new Set(["td","th"]),b1="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function OE(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=WE(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=$E(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?If:nE,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=E1(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function E1(e,t,n){if(t.type==="element")return zE(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return _E(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return BE(e,t,n);if(t.type==="mdxjsEsm")return VE(e,t);if(t.type==="root")return UE(e,t,n);if(t.type==="text")return HE(e,t)}function zE(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=If,e.schema=i),e.ancestors.push(t);const o=A1(e,t.tagName,!1),s=GE(e,t);let l=jf(e,t);return jE.has(t.tagName)&&(l=l.filter(function(a){return typeof a=="string"?!Gb(a):!0})),D1(e,s,o,t),Lf(s,l),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function _E(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}co(e,t.position)}function VE(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);co(e,t.position)}function BE(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=If,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:A1(e,t.name,!0),s=KE(e,t),l=jf(e,t);return D1(e,s,o,t),Lf(s,l),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function UE(e,t,n){const r={};return Lf(r,jf(e,t)),e.create(t,e.Fragment,r,n)}function HE(e,t){return t.value}function D1(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Lf(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function $E(e,t,n){return r;function r(i,o,s,l){const u=Array.isArray(s.children)?n:t;return l?u(o,s,l):u(o,s)}}function WE(e,t){return n;function n(r,i,o,s){const l=Array.isArray(o.children),a=Nf(r);return t(i,o,s,l,{columnNumber:a?a.column-1:void 0,fileName:e,lineNumber:a?a.line:void 0},void 0)}}function GE(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Rf.call(t.properties,i)){const o=qE(e,i,t.properties[i]);if(o){const[s,l]=o;e.tableCellAlignToStyle&&s==="align"&&typeof l=="string"&&FE.has(t.tagName)?r=l:n[s]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function KE(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const s=o.expression;s.type;const l=s.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else co(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else co(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function jf(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:RE;for(;++r<t.children.length;){const o=t.children[r];let s;if(e.passKeys){const a=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(a){const u=i.get(a)||0;s=a+"-"+u,i.set(a,u+1)}}const l=E1(e,o,s);l!==void 0&&n.push(l)}return n}function qE(e,t,n){const r=Jb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Bb(n):rE(n)),r.property==="style"){let i=typeof n=="object"?n:QE(e,String(n));return e.stylePropertyNameCase==="css"&&(i=XE(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Xb[r.property]||r.property:r.attribute,n]}}function QE(e,t){try{return ME(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new _e("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=b1+"#cannot-parse-style-attribute",i}}function A1(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,s;for(;++o<i.length;){const l=Td(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};s=s?{type:"MemberExpression",object:s,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=s}else r=Td(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Rf.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);co(e)}function co(e,t){const n=new _e("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=b1+"#cannot-handle-mdx-estrees-without-createevaluater",n}function XE(e){const t={};let n;for(n in e)Rf.call(e,n)&&(t[YE(n)]=e[n]);return t}function YE(e){let t=e.replace(LE,ZE);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function ZE(e){return"-"+e.toLowerCase()}const Sa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},JE={};function Ff(e,t){const n=JE,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return I1(e,r,i)}function I1(e,t,n){if(eD(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Fd(e.children,t,n)}return Array.isArray(e)?Fd(e,t,n):""}function Fd(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=I1(e[i],t,n);return r.join("")}function eD(e){return!!(e&&typeof e=="object")}const Od=document.createElement("i");function Of(e){const t="&"+e+";";Od.innerHTML=t;const n=Od.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function lt(e,t,n,r){const i=e.length;let o=0,s;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<r.length;)s=r.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function xt(e,t){return e.length>0?(lt(e,e.length,0,t),e):t}const zd={}.hasOwnProperty;function M1(e){const t={};let n=-1;for(;++n<e.length;)tD(t,e[n]);return t}function tD(e,t){let n;for(n in t){const i=(zd.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let s;if(o)for(s in o){zd.call(i,s)||(i[s]=[]);const l=o[s];nD(i[s],Array.isArray(l)?l:l?[l]:[])}}}function nD(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);lt(e,0,0,r)}function N1(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Mt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Ue=_n(/[A-Za-z]/),Oe=_n(/[\dA-Za-z]/),rD=_n(/[#-'*+\--9=?A-Z^-~]/);function Xs(e){return e!==null&&(e<32||e===127)}const ec=_n(/\d/),iD=_n(/[\dA-Fa-f]/),oD=_n(/[!-/:-@[-`{-~]/);function B(e){return e!==null&&e<-2}function oe(e){return e!==null&&(e<0||e===32)}function Q(e){return e===-2||e===-1||e===32}const Al=_n(new RegExp("\\p{P}|\\p{S}","u")),lr=_n(/\s/);function _n(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function si(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(o===37&&Oe(e.charCodeAt(n+1))&&Oe(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(s=String.fromCharCode(o,l),i=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function J(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(a){return Q(a)?(e.enter(n),l(a)):t(a)}function l(a){return Q(a)&&o++<i?(e.consume(a),l):(e.exit(n),t(a))}}const sD={tokenize:lD};function lD(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),J(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){const a=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=a),n=a,s(l)}function s(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return B(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),s)}}const aD={tokenize:uD},_d={tokenize:cD};function uD(e){const t=this,n=[];let r=0,i,o,s;return l;function l(x){if(r<n.length){const S=n[r];return t.containerState=S[1],e.attempt(S[0].continuation,a,u)(x)}return u(x)}function a(x){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&y();const S=t.events.length;let b=S,C;for(;b--;)if(t.events[b][0]==="exit"&&t.events[b][1].type==="chunkFlow"){C=t.events[b][1].end;break}g(r);let A=S;for(;A<t.events.length;)t.events[A][1].end={...C},A++;return lt(t.events,b+1,0,t.events.slice(S)),t.events.length=A,u(x)}return l(x)}function u(x){if(r===n.length){if(!i)return h(x);if(i.currentConstruct&&i.currentConstruct.concrete)return m(x);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(_d,f,c)(x)}function f(x){return i&&y(),g(r),h(x)}function c(x){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,m(x)}function h(x){return t.containerState={},e.attempt(_d,p,m)(x)}function p(x){return r++,n.push([t.currentConstruct,t.containerState]),h(x)}function m(x){if(x===null){i&&y(),g(0),e.consume(x);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),v(x)}function v(x){if(x===null){k(e.exit("chunkFlow"),!0),g(0),e.consume(x);return}return B(x)?(e.consume(x),k(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(x),v)}function k(x,S){const b=t.sliceStream(x);if(S&&b.push(null),x.previous=o,o&&(o.next=x),o=x,i.defineSkip(x.start),i.write(b),t.parser.lazy[x.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<s&&(!i.events[C][1].end||i.events[C][1].end.offset>s))return;const A=t.events.length;let D=A,j,T;for(;D--;)if(t.events[D][0]==="exit"&&t.events[D][1].type==="chunkFlow"){if(j){T=t.events[D][1].end;break}j=!0}for(g(r),C=A;C<t.events.length;)t.events[C][1].end={...T},C++;lt(t.events,D+1,0,t.events.slice(A)),t.events.length=C}}function g(x){let S=n.length;for(;S-- >x;){const b=n[S];t.containerState=b[1],b[0].exit.call(t,e)}n.length=x}function y(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function cD(e,t,n){return J(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Jr(e){if(e===null||oe(e)||lr(e))return 1;if(Al(e))return 2}function Il(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const tc={name:"attention",resolveAll:fD,tokenize:hD};function fD(e,t){let n=-1,r,i,o,s,l,a,u,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;a=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},h={...e[n][1].start};Vd(c,-a),Vd(h,a),s={type:a>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},l={type:a>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},o={type:a>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:a>1?"strong":"emphasis",start:{...s.start},end:{...l.end}},e[r][1].end={...s.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=xt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=xt(u,[["enter",i,t],["enter",s,t],["exit",s,t],["enter",o,t]]),u=xt(u,Il(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=xt(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,u=xt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,lt(e,r-1,n-r+3,u),n=r+u.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function hD(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Jr(r);let o;return s;function s(a){return o=a,e.enter("attentionSequence"),l(a)}function l(a){if(a===o)return e.consume(a),l;const u=e.exit("attentionSequence"),f=Jr(a),c=!f||f===2&&i||n.includes(a),h=!i||i===2&&f||n.includes(r);return u._open=!!(o===42?c:c&&(i||!h)),u._close=!!(o===42?h:h&&(f||!c)),t(a)}}function Vd(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const pD={name:"autolink",tokenize:dD};function dD(e,t,n){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return Ue(p)?(e.consume(p),s):p===64?n(p):u(p)}function s(p){return p===43||p===45||p===46||Oe(p)?(r=1,l(p)):u(p)}function l(p){return p===58?(e.consume(p),r=0,a):(p===43||p===45||p===46||Oe(p))&&r++<32?(e.consume(p),l):(r=0,u(p))}function a(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||Xs(p)?n(p):(e.consume(p),a)}function u(p){return p===64?(e.consume(p),f):rD(p)?(e.consume(p),u):n(p)}function f(p){return Oe(p)?c(p):n(p)}function c(p){return p===46?(e.consume(p),r=0,f):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):h(p)}function h(p){if((p===45||Oe(p))&&r++<63){const m=p===45?h:c;return e.consume(p),m}return n(p)}}const Po={partial:!0,tokenize:mD};function mD(e,t,n){return r;function r(o){return Q(o)?J(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||B(o)?t(o):n(o)}}const R1={continuation:{tokenize:yD},exit:xD,name:"blockQuote",tokenize:gD};function gD(e,t,n){const r=this;return i;function i(s){if(s===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return n(s)}function o(s){return Q(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function yD(e,t,n){const r=this;return i;function i(s){return Q(s)?J(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(R1,t,n)(s)}}function xD(e){e.exit("blockQuote")}const L1={name:"characterEscape",tokenize:vD};function vD(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return oD(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const j1={name:"characterReference",tokenize:wD};function wD(e,t,n){const r=this;let i=0,o,s;return l;function l(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),a}function a(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,s=Oe,f(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=iD,f):(e.enter("characterReferenceValue"),o=7,s=ec,f(c))}function f(c){if(c===59&&i){const h=e.exit("characterReferenceValue");return s===Oe&&!Of(r.sliceSerialize(h))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(c)&&i++<o?(e.consume(c),f):n(c)}}const Bd={partial:!0,tokenize:SD},Ud={concrete:!0,name:"codeFenced",tokenize:kD};function kD(e,t,n){const r=this,i={partial:!0,tokenize:b};let o=0,s=0,l;return a;function a(C){return u(C)}function u(C){const A=r.events[r.events.length-1];return o=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,l=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(C)}function f(C){return C===l?(s++,e.consume(C),f):s<3?n(C):(e.exit("codeFencedFenceSequence"),Q(C)?J(e,c,"whitespace")(C):c(C))}function c(C){return C===null||B(C)?(e.exit("codeFencedFence"),r.interrupt?t(C):e.check(Bd,v,S)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(C))}function h(C){return C===null||B(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(C)):Q(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),J(e,p,"whitespace")(C)):C===96&&C===l?n(C):(e.consume(C),h)}function p(C){return C===null||B(C)?c(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(C))}function m(C){return C===null||B(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(C)):C===96&&C===l?n(C):(e.consume(C),m)}function v(C){return e.attempt(i,S,k)(C)}function k(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),g}function g(C){return o>0&&Q(C)?J(e,y,"linePrefix",o+1)(C):y(C)}function y(C){return C===null||B(C)?e.check(Bd,v,S)(C):(e.enter("codeFlowValue"),x(C))}function x(C){return C===null||B(C)?(e.exit("codeFlowValue"),y(C)):(e.consume(C),x)}function S(C){return e.exit("codeFenced"),t(C)}function b(C,A,D){let j=0;return T;function T(G){return C.enter("lineEnding"),C.consume(G),C.exit("lineEnding"),F}function F(G){return C.enter("codeFencedFence"),Q(G)?J(C,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(G):O(G)}function O(G){return G===l?(C.enter("codeFencedFenceSequence"),H(G)):D(G)}function H(G){return G===l?(j++,C.consume(G),H):j>=s?(C.exit("codeFencedFenceSequence"),Q(G)?J(C,W,"whitespace")(G):W(G)):D(G)}function W(G){return G===null||B(G)?(C.exit("codeFencedFence"),A(G)):D(G)}}}function SD(e,t,n){const r=this;return i;function i(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const Pa={name:"codeIndented",tokenize:CD},PD={partial:!0,tokenize:TD};function CD(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),J(e,o,"linePrefix",5)(u)}function o(u){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?a(u):B(u)?e.attempt(PD,s,a)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||B(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),l)}function a(u){return e.exit("codeIndented"),t(u)}}function TD(e,t,n){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?n(s):B(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):J(e,o,"linePrefix",5)(s)}function o(s){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(s):B(s)?i(s):n(s)}}const bD={name:"codeText",previous:DD,resolve:ED,tokenize:AD};function ED(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function DD(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function AD(e,t,n){let r=0,i,o;return s;function s(c){return e.enter("codeText"),e.enter("codeTextSequence"),l(c)}function l(c){return c===96?(e.consume(c),r++,l):(e.exit("codeTextSequence"),a(c))}function a(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),a):c===96?(o=e.enter("codeTextSequence"),i=0,f(c)):B(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),a):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||B(c)?(e.exit("codeTextData"),a(c)):(e.consume(c),u)}function f(c){return c===96?(e.consume(c),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(o.type="codeTextData",u(c))}}class ID{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&vi(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),vi(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),vi(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);vi(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);vi(this.left,n.reverse())}}}function vi(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function F1(e){const t={};let n=-1,r,i,o,s,l,a,u;const f=new ID(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(a=r[1]._tokenizer.events,o=0,o<a.length&&a[o][1].type==="lineEndingBlank"&&(o+=2),o<a.length&&a[o][1].type==="content"))for(;++o<a.length&&a[o][1].type!=="content";)a[o][1].type==="chunkText"&&(a[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,MD(f,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(s=f.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},l=f.slice(i,n),l.unshift(r),f.splice(i,n-i+1,l))}}return lt(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!u}function MD(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const l=s.events,a=[],u={};let f,c,h=-1,p=n,m=0,v=0;const k=[v];for(;p;){for(;e.get(++i)[1]!==p;);o.push(i),p._tokenizer||(f=r.sliceStream(p),p.next||f.push(null),c&&s.defineSkip(p.start),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(f),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=n;++h<l.length;)l[h][0]==="exit"&&l[h-1][0]==="enter"&&l[h][1].type===l[h-1][1].type&&l[h][1].start.line!==l[h][1].end.line&&(v=h+1,k.push(v),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):k.pop(),h=k.length;h--;){const g=l.slice(k[h],k[h+1]),y=o.pop();a.push([y,y+g.length-1]),e.splice(y,2,g)}for(a.reverse(),h=-1;++h<a.length;)u[m+a[h][0]]=m+a[h][1],m+=a[h][1]-a[h][0]-1;return u}const ND={resolve:LD,tokenize:jD},RD={partial:!0,tokenize:FD};function LD(e){return F1(e),e}function jD(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):B(l)?e.check(RD,s,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function s(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function FD(e,t,n){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),J(e,o,"linePrefix")}function o(s){if(s===null||B(s))return n(s);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function O1(e,t,n,r,i,o,s,l,a){const u=a||Number.POSITIVE_INFINITY;let f=0;return c;function c(g){return g===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(g),e.exit(o),h):g===null||g===32||g===41||Xs(g)?n(g):(e.enter(r),e.enter(s),e.enter(l),e.enter("chunkString",{contentType:"string"}),v(g))}function h(g){return g===62?(e.enter(o),e.consume(g),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(g))}function p(g){return g===62?(e.exit("chunkString"),e.exit(l),h(g)):g===null||g===60||B(g)?n(g):(e.consume(g),g===92?m:p)}function m(g){return g===60||g===62||g===92?(e.consume(g),p):p(g)}function v(g){return!f&&(g===null||g===41||oe(g))?(e.exit("chunkString"),e.exit(l),e.exit(s),e.exit(r),t(g)):f<u&&g===40?(e.consume(g),f++,v):g===41?(e.consume(g),f--,v):g===null||g===32||g===40||Xs(g)?n(g):(e.consume(g),g===92?k:v)}function k(g){return g===40||g===41||g===92?(e.consume(g),v):v(g)}}function z1(e,t,n,r,i,o){const s=this;let l=0,a;return u;function u(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(o),f}function f(p){return l>999||p===null||p===91||p===93&&!a||p===94&&!l&&"_hiddenFootnoteSupport"in s.parser.constructs?n(p):p===93?(e.exit(o),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):B(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||B(p)||l++>999?(e.exit("chunkString"),f(p)):(e.consume(p),a||(a=!Q(p)),p===92?h:c)}function h(p){return p===91||p===92||p===93?(e.consume(p),l++,c):c(p)}}function _1(e,t,n,r,i,o){let s;return l;function l(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),s=h===40?41:h,a):n(h)}function a(h){return h===s?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(o),u(h))}function u(h){return h===s?(e.exit(o),a(s)):h===null?n(h):B(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),J(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===s||h===null||B(h)?(e.exit("chunkString"),u(h)):(e.consume(h),h===92?c:f)}function c(h){return h===s||h===92?(e.consume(h),f):f(h)}}function Vi(e,t){let n;return r;function r(i){return B(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Q(i)?J(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const OD={name:"definition",tokenize:_D},zD={partial:!0,tokenize:VD};function _D(e,t,n){const r=this;let i;return o;function o(p){return e.enter("definition"),s(p)}function s(p){return z1.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return i=Mt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),a):n(p)}function a(p){return oe(p)?Vi(e,u)(p):u(p)}function u(p){return O1(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function f(p){return e.attempt(zD,c,c)(p)}function c(p){return Q(p)?J(e,h,"whitespace")(p):h(p)}function h(p){return p===null||B(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):n(p)}}function VD(e,t,n){return r;function r(l){return oe(l)?Vi(e,i)(l):n(l)}function i(l){return _1(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return Q(l)?J(e,s,"whitespace")(l):s(l)}function s(l){return l===null||B(l)?t(l):n(l)}}const BD={name:"hardBreakEscape",tokenize:UD};function UD(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return B(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const HD={name:"headingAtx",resolve:$D,tokenize:WD};function $D(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},lt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function WD(e,t,n){let r=0;return i;function i(f){return e.enter("atxHeading"),o(f)}function o(f){return e.enter("atxHeadingSequence"),s(f)}function s(f){return f===35&&r++<6?(e.consume(f),s):f===null||oe(f)?(e.exit("atxHeadingSequence"),l(f)):n(f)}function l(f){return f===35?(e.enter("atxHeadingSequence"),a(f)):f===null||B(f)?(e.exit("atxHeading"),t(f)):Q(f)?J(e,l,"whitespace")(f):(e.enter("atxHeadingText"),u(f))}function a(f){return f===35?(e.consume(f),a):(e.exit("atxHeadingSequence"),l(f))}function u(f){return f===null||f===35||oe(f)?(e.exit("atxHeadingText"),l(f)):(e.consume(f),u)}}const GD=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Hd=["pre","script","style","textarea"],KD={concrete:!0,name:"htmlFlow",resolveTo:XD,tokenize:YD},qD={partial:!0,tokenize:JD},QD={partial:!0,tokenize:ZD};function XD(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function YD(e,t,n){const r=this;let i,o,s,l,a;return u;function u(P){return f(P)}function f(P){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(P),c}function c(P){return P===33?(e.consume(P),h):P===47?(e.consume(P),o=!0,v):P===63?(e.consume(P),i=3,r.interrupt?t:w):Ue(P)?(e.consume(P),s=String.fromCharCode(P),k):n(P)}function h(P){return P===45?(e.consume(P),i=2,p):P===91?(e.consume(P),i=5,l=0,m):Ue(P)?(e.consume(P),i=4,r.interrupt?t:w):n(P)}function p(P){return P===45?(e.consume(P),r.interrupt?t:w):n(P)}function m(P){const ye="CDATA[";return P===ye.charCodeAt(l++)?(e.consume(P),l===ye.length?r.interrupt?t:O:m):n(P)}function v(P){return Ue(P)?(e.consume(P),s=String.fromCharCode(P),k):n(P)}function k(P){if(P===null||P===47||P===62||oe(P)){const ye=P===47,Ge=s.toLowerCase();return!ye&&!o&&Hd.includes(Ge)?(i=1,r.interrupt?t(P):O(P)):GD.includes(s.toLowerCase())?(i=6,ye?(e.consume(P),g):r.interrupt?t(P):O(P)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(P):o?y(P):x(P))}return P===45||Oe(P)?(e.consume(P),s+=String.fromCharCode(P),k):n(P)}function g(P){return P===62?(e.consume(P),r.interrupt?t:O):n(P)}function y(P){return Q(P)?(e.consume(P),y):T(P)}function x(P){return P===47?(e.consume(P),T):P===58||P===95||Ue(P)?(e.consume(P),S):Q(P)?(e.consume(P),x):T(P)}function S(P){return P===45||P===46||P===58||P===95||Oe(P)?(e.consume(P),S):b(P)}function b(P){return P===61?(e.consume(P),C):Q(P)?(e.consume(P),b):x(P)}function C(P){return P===null||P===60||P===61||P===62||P===96?n(P):P===34||P===39?(e.consume(P),a=P,A):Q(P)?(e.consume(P),C):D(P)}function A(P){return P===a?(e.consume(P),a=null,j):P===null||B(P)?n(P):(e.consume(P),A)}function D(P){return P===null||P===34||P===39||P===47||P===60||P===61||P===62||P===96||oe(P)?b(P):(e.consume(P),D)}function j(P){return P===47||P===62||Q(P)?x(P):n(P)}function T(P){return P===62?(e.consume(P),F):n(P)}function F(P){return P===null||B(P)?O(P):Q(P)?(e.consume(P),F):n(P)}function O(P){return P===45&&i===2?(e.consume(P),q):P===60&&i===1?(e.consume(P),ne):P===62&&i===4?(e.consume(P),V):P===63&&i===3?(e.consume(P),w):P===93&&i===5?(e.consume(P),_):B(P)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(qD,Z,H)(P)):P===null||B(P)?(e.exit("htmlFlowData"),H(P)):(e.consume(P),O)}function H(P){return e.check(QD,W,Z)(P)}function W(P){return e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),G}function G(P){return P===null||B(P)?H(P):(e.enter("htmlFlowData"),O(P))}function q(P){return P===45?(e.consume(P),w):O(P)}function ne(P){return P===47?(e.consume(P),s="",R):O(P)}function R(P){if(P===62){const ye=s.toLowerCase();return Hd.includes(ye)?(e.consume(P),V):O(P)}return Ue(P)&&s.length<8?(e.consume(P),s+=String.fromCharCode(P),R):O(P)}function _(P){return P===93?(e.consume(P),w):O(P)}function w(P){return P===62?(e.consume(P),V):P===45&&i===2?(e.consume(P),w):O(P)}function V(P){return P===null||B(P)?(e.exit("htmlFlowData"),Z(P)):(e.consume(P),V)}function Z(P){return e.exit("htmlFlow"),t(P)}}function ZD(e,t,n){const r=this;return i;function i(s){return B(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):n(s)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function JD(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Po,t,n)}}const eA={name:"htmlText",tokenize:tA};function tA(e,t,n){const r=this;let i,o,s;return l;function l(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),a}function a(w){return w===33?(e.consume(w),u):w===47?(e.consume(w),b):w===63?(e.consume(w),x):Ue(w)?(e.consume(w),D):n(w)}function u(w){return w===45?(e.consume(w),f):w===91?(e.consume(w),o=0,m):Ue(w)?(e.consume(w),y):n(w)}function f(w){return w===45?(e.consume(w),p):n(w)}function c(w){return w===null?n(w):w===45?(e.consume(w),h):B(w)?(s=c,ne(w)):(e.consume(w),c)}function h(w){return w===45?(e.consume(w),p):c(w)}function p(w){return w===62?q(w):w===45?h(w):c(w)}function m(w){const V="CDATA[";return w===V.charCodeAt(o++)?(e.consume(w),o===V.length?v:m):n(w)}function v(w){return w===null?n(w):w===93?(e.consume(w),k):B(w)?(s=v,ne(w)):(e.consume(w),v)}function k(w){return w===93?(e.consume(w),g):v(w)}function g(w){return w===62?q(w):w===93?(e.consume(w),g):v(w)}function y(w){return w===null||w===62?q(w):B(w)?(s=y,ne(w)):(e.consume(w),y)}function x(w){return w===null?n(w):w===63?(e.consume(w),S):B(w)?(s=x,ne(w)):(e.consume(w),x)}function S(w){return w===62?q(w):x(w)}function b(w){return Ue(w)?(e.consume(w),C):n(w)}function C(w){return w===45||Oe(w)?(e.consume(w),C):A(w)}function A(w){return B(w)?(s=A,ne(w)):Q(w)?(e.consume(w),A):q(w)}function D(w){return w===45||Oe(w)?(e.consume(w),D):w===47||w===62||oe(w)?j(w):n(w)}function j(w){return w===47?(e.consume(w),q):w===58||w===95||Ue(w)?(e.consume(w),T):B(w)?(s=j,ne(w)):Q(w)?(e.consume(w),j):q(w)}function T(w){return w===45||w===46||w===58||w===95||Oe(w)?(e.consume(w),T):F(w)}function F(w){return w===61?(e.consume(w),O):B(w)?(s=F,ne(w)):Q(w)?(e.consume(w),F):j(w)}function O(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,H):B(w)?(s=O,ne(w)):Q(w)?(e.consume(w),O):(e.consume(w),W)}function H(w){return w===i?(e.consume(w),i=void 0,G):w===null?n(w):B(w)?(s=H,ne(w)):(e.consume(w),H)}function W(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||oe(w)?j(w):(e.consume(w),W)}function G(w){return w===47||w===62||oe(w)?j(w):n(w)}function q(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function ne(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),R}function R(w){return Q(w)?J(e,_,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):_(w)}function _(w){return e.enter("htmlTextData"),s(w)}}const zf={name:"labelEnd",resolveAll:oA,resolveTo:sA,tokenize:lA},nA={tokenize:aA},rA={tokenize:uA},iA={tokenize:cA};function oA(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&lt(e,0,e.length,n),e}function sA(e,t){let n=e.length,r=0,i,o,s,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=n);const a={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},f={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[s-2][1].start}};return l=[["enter",a,t],["enter",u,t]],l=xt(l,e.slice(o+1,o+r+3)),l=xt(l,[["enter",f,t]]),l=xt(l,Il(t.parser.constructs.insideSpan.null,e.slice(o+r+4,s-3),t)),l=xt(l,[["exit",f,t],e[s-2],e[s-1],["exit",u,t]]),l=xt(l,e.slice(s+1)),l=xt(l,[["exit",a,t]]),lt(e,o,e.length,l),e}function lA(e,t,n){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(h){return o?o._inactive?c(h):(s=r.parser.defined.includes(Mt(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),a):n(h)}function a(h){return h===40?e.attempt(nA,f,s?f:c)(h):h===91?e.attempt(rA,f,s?u:c)(h):s?f(h):c(h)}function u(h){return e.attempt(iA,f,c)(h)}function f(h){return t(h)}function c(h){return o._balanced=!0,n(h)}}function aA(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return oe(c)?Vi(e,o)(c):o(c)}function o(c){return c===41?f(c):O1(e,s,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function s(c){return oe(c)?Vi(e,a)(c):f(c)}function l(c){return n(c)}function a(c){return c===34||c===39||c===40?_1(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function u(c){return oe(c)?Vi(e,f)(c):f(c)}function f(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function uA(e,t,n){const r=this;return i;function i(l){return z1.call(r,e,o,s,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Mt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function s(l){return n(l)}}function cA(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const fA={name:"labelStartImage",resolveAll:zf.resolveAll,tokenize:hA};function hA(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),s):n(l)}function s(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const pA={name:"labelStartLink",resolveAll:zf.resolveAll,tokenize:dA};function dA(e,t,n){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Ca={name:"lineEnding",tokenize:mA};function mA(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),J(e,t,"linePrefix")}}const ps={name:"thematicBreak",tokenize:gA};function gA(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),s(u)}function s(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),a(u)):r>=3&&(u===null||B(u))?(e.exit("thematicBreak"),t(u)):n(u)}function a(u){return u===i?(e.consume(u),r++,a):(e.exit("thematicBreakSequence"),Q(u)?J(e,l,"whitespace")(u):l(u))}}const Ke={continuation:{tokenize:wA},exit:SA,name:"list",tokenize:vA},yA={partial:!0,tokenize:PA},xA={partial:!0,tokenize:kA};function vA(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return l;function l(p){const m=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:ec(p)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(ps,n,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),a(p)}return n(p)}function a(p){return ec(p)&&++s<10?(e.consume(p),a):(!r.interrupt||s<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):n(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Po,r.interrupt?n:f,e.attempt(yA,h,c))}function f(p){return r.containerState.initialBlankLine=!0,o++,h(p)}function c(p){return Q(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):n(p)}function h(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function wA(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Po,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,J(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!Q(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(xA,t,s)(l))}function s(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,J(e,e.attempt(Ke,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function kA(e,t,n){const r=this;return J(e,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(o):n(o)}}function SA(e){e.exit(this.containerState.type)}function PA(e,t,n){const r=this;return J(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!Q(o)&&s&&s[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const $d={name:"setextUnderline",resolveTo:CA,tokenize:TA};function CA(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",s,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function TA(e,t,n){const r=this;let i;return o;function o(u){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,s(u)):n(u)}function s(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Q(u)?J(e,a,"lineSuffix")(u):a(u))}function a(u){return u===null||B(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const bA={tokenize:EA};function EA(e){const t=this,n=e.attempt(Po,r,e.attempt(this.parser.constructs.flowInitial,i,J(e,e.attempt(this.parser.constructs.flow,i,e.attempt(ND,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const DA={resolveAll:B1()},AA=V1("string"),IA=V1("text");function V1(e){return{resolveAll:B1(e==="text"?MA:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,s,l);return s;function s(f){return u(f)?o(f):l(f)}function l(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),a}function a(f){return u(f)?(n.exit("data"),o(f)):(n.consume(f),a)}function u(f){if(f===null)return!0;const c=i[f];let h=-1;if(c)for(;++h<c.length;){const p=c[h];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function B1(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function MA(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,s=-1,l=0,a;for(;o--;){const u=i[o];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)l++,s--;if(s)break;s=-1}else if(u===-2)a=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||a||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const NA={42:Ke,43:Ke,45:Ke,48:Ke,49:Ke,50:Ke,51:Ke,52:Ke,53:Ke,54:Ke,55:Ke,56:Ke,57:Ke,62:R1},RA={91:OD},LA={[-2]:Pa,[-1]:Pa,32:Pa},jA={35:HD,42:ps,45:[$d,ps],60:KD,61:$d,95:ps,96:Ud,126:Ud},FA={38:j1,92:L1},OA={[-5]:Ca,[-4]:Ca,[-3]:Ca,33:fA,38:j1,42:tc,60:[pD,eA],91:pA,92:[BD,L1],93:zf,95:tc,96:bD},zA={null:[tc,DA]},_A={null:[42,95]},VA={null:[]},BA=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:_A,contentInitial:RA,disable:VA,document:NA,flow:jA,flowInitial:LA,insideSpan:zA,string:FA,text:OA},Symbol.toStringTag,{value:"Module"}));function UA(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let s=[],l=[];const a={attempt:A(b),check:A(C),consume:y,enter:x,exit:S,interrupt:A(C,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:m,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:c};let f=t.tokenize.call(u,a);return t.resolveAll&&o.push(t),u;function c(F){return s=xt(s,F),k(),s[s.length-1]!==null?[]:(D(t,0),u.events=Il(o,u.events,u),u.events)}function h(F,O){return $A(p(F),O)}function p(F){return HA(s,F)}function m(){const{_bufferIndex:F,_index:O,line:H,column:W,offset:G}=r;return{_bufferIndex:F,_index:O,line:H,column:W,offset:G}}function v(F){i[F.line]=F.column,T()}function k(){let F;for(;r._index<s.length;){const O=s[r._index];if(typeof O=="string")for(F=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===F&&r._bufferIndex<O.length;)g(O.charCodeAt(r._bufferIndex));else g(O)}}function g(F){f=f(F)}function y(F){B(F)?(r.line++,r.column=1,r.offset+=F===-3?2:1,T()):F!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=F}function x(F,O){const H=O||{};return H.type=F,H.start=m(),u.events.push(["enter",H,u]),l.push(H),H}function S(F){const O=l.pop();return O.end=m(),u.events.push(["exit",O,u]),O}function b(F,O){D(F,O.from)}function C(F,O){O.restore()}function A(F,O){return H;function H(W,G,q){let ne,R,_,w;return Array.isArray(W)?Z(W):"tokenize"in W?Z([W]):V(W);function V(te){return tt;function tt(Rt){const Lt=Rt!==null&&te[Rt],Pt=Rt!==null&&te.null,ht=[...Array.isArray(Lt)?Lt:Lt?[Lt]:[],...Array.isArray(Pt)?Pt:Pt?[Pt]:[]];return Z(ht)(Rt)}}function Z(te){return ne=te,R=0,te.length===0?q:P(te[R])}function P(te){return tt;function tt(Rt){return w=j(),_=te,te.partial||(u.currentConstruct=te),te.name&&u.parser.constructs.disable.null.includes(te.name)?Ge():te.tokenize.call(O?Object.assign(Object.create(u),O):u,a,ye,Ge)(Rt)}}function ye(te){return F(_,w),G}function Ge(te){return w.restore(),++R<ne.length?P(ne[R]):q}}}function D(F,O){F.resolveAll&&!o.includes(F)&&o.push(F),F.resolve&&lt(u.events,O,u.events.length-O,F.resolve(u.events.slice(O),u)),F.resolveTo&&(u.events=F.resolveTo(u.events,u))}function j(){const F=m(),O=u.previous,H=u.currentConstruct,W=u.events.length,G=Array.from(l);return{from:W,restore:q};function q(){r=F,u.previous=O,u.currentConstruct=H,u.events.length=W,l=G,T()}}function T(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function HA(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let s;if(n===i)s=[e[n].slice(r,o)];else{if(s=e.slice(n,i),r>-1){const l=s[0];typeof l=="string"?s[0]=l.slice(r):s.shift()}o>0&&s.push(e[i].slice(0,o))}return s}function $A(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function WA(e){const r={constructs:M1([BA,...(e||{}).extensions||[]]),content:i(sD),defined:[],document:i(aD),flow:i(bA),lazy:{},string:i(AA),text:i(IA)};return r;function i(o){return s;function s(l){return UA(r,o,l)}}}function GA(e){for(;!F1(e););return e}const Wd=/[\0\t\n\r]/g;function KA(){let e=1,t="",n=!0,r;return i;function i(o,s,l){const a=[];let u,f,c,h,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),c=0,t="",n&&(o.charCodeAt(0)===65279&&c++,n=void 0);c<o.length;){if(Wd.lastIndex=c,u=Wd.exec(o),h=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(h),!u){t=o.slice(c);break}if(p===10&&c===h&&r)a.push(-3),r=void 0;else switch(r&&(a.push(-5),r=void 0),c<h&&(a.push(o.slice(c,h)),e+=h-c),p){case 0:{a.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,a.push(-2);e++<f;)a.push(-1);break}case 10:{a.push(-4),e=1;break}default:r=!0,e=1}c=h+1}return l&&(r&&a.push(-5),t&&a.push(t),a.push(null)),a}}const qA=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function QA(e){return e.replace(qA,XA)}function XA(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return N1(n.slice(o?2:1),o?16:10)}return Of(n)||e}const U1={}.hasOwnProperty;function YA(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),ZA(n)(GA(WA(n).document().write(KA()(e,t,!0))))}function ZA(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Zf),autolinkProtocol:j,autolinkEmail:j,atxHeading:o(Qf),blockQuote:o(Pt),characterEscape:j,characterReference:j,codeFenced:o(ht),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(ht,s),codeText:o(qf,s),codeTextData:j,data:j,codeFlowValue:j,definition:o(Sx),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(Px),hardBreakEscape:o(Xf),hardBreakTrailing:o(Xf),htmlFlow:o(Yf,s),htmlFlowData:j,htmlText:o(Yf,s),htmlTextData:j,image:o(Cx),label:s,link:o(Zf),listItem:o(Tx),listItemValue:h,listOrdered:o(Jf,c),listUnordered:o(Jf),paragraph:o(bx),reference:P,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(Qf),strong:o(Ex),thematicBreak:o(Ax)},exit:{atxHeading:a(),atxHeadingSequence:b,autolink:a(),autolinkEmail:Lt,autolinkProtocol:Rt,blockQuote:a(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:Ge,characterReferenceMarkerNumeric:Ge,characterReferenceValue:te,characterReference:tt,codeFenced:a(k),codeFencedFence:v,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:T,codeIndented:a(g),codeText:a(G),codeTextData:T,data:T,definition:a(),definitionDestinationString:S,definitionLabelString:y,definitionTitleString:x,emphasis:a(),hardBreakEscape:a(O),hardBreakTrailing:a(O),htmlFlow:a(H),htmlFlowData:T,htmlText:a(W),htmlTextData:T,image:a(ne),label:_,labelText:R,lineEnding:F,link:a(q),listItem:a(),listOrdered:a(),listUnordered:a(),paragraph:a(),referenceString:ye,resourceDestinationString:w,resourceTitleString:V,resource:Z,setextHeading:a(D),setextHeadingLineSequence:A,setextHeadingText:C,strong:a(),thematicBreak:a()}};H1(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(I){let L={type:"root",children:[]};const $={stack:[L],tokenStack:[],config:t,enter:l,exit:u,buffer:s,resume:f,data:n},Y=[];let ie=-1;for(;++ie<I.length;)if(I[ie][1].type==="listOrdered"||I[ie][1].type==="listUnordered")if(I[ie][0]==="enter")Y.push(ie);else{const Ct=Y.pop();ie=i(I,Ct,ie)}for(ie=-1;++ie<I.length;){const Ct=t[I[ie][0]];U1.call(Ct,I[ie][1].type)&&Ct[I[ie][1].type].call(Object.assign({sliceSerialize:I[ie][2].sliceSerialize},$),I[ie][1])}if($.tokenStack.length>0){const Ct=$.tokenStack[$.tokenStack.length-1];(Ct[1]||Gd).call($,void 0,Ct[0])}for(L.position={start:cn(I.length>0?I[0][1].start:{line:1,column:1,offset:0}),end:cn(I.length>0?I[I.length-2][1].end:{line:1,column:1,offset:0})},ie=-1;++ie<t.transforms.length;)L=t.transforms[ie](L)||L;return L}function i(I,L,$){let Y=L-1,ie=-1,Ct=!1,Vn,Ht,li,ai;for(;++Y<=$;){const nt=I[Y];switch(nt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{nt[0]==="enter"?ie++:ie--,ai=void 0;break}case"lineEndingBlank":{nt[0]==="enter"&&(Vn&&!ai&&!ie&&!li&&(li=Y),ai=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ai=void 0}if(!ie&&nt[0]==="enter"&&nt[1].type==="listItemPrefix"||ie===-1&&nt[0]==="exit"&&(nt[1].type==="listUnordered"||nt[1].type==="listOrdered")){if(Vn){let dr=Y;for(Ht=void 0;dr--;){const $t=I[dr];if($t[1].type==="lineEnding"||$t[1].type==="lineEndingBlank"){if($t[0]==="exit")continue;Ht&&(I[Ht][1].type="lineEndingBlank",Ct=!0),$t[1].type="lineEnding",Ht=dr}else if(!($t[1].type==="linePrefix"||$t[1].type==="blockQuotePrefix"||$t[1].type==="blockQuotePrefixWhitespace"||$t[1].type==="blockQuoteMarker"||$t[1].type==="listItemIndent"))break}li&&(!Ht||li<Ht)&&(Vn._spread=!0),Vn.end=Object.assign({},Ht?I[Ht][1].start:nt[1].end),I.splice(Ht||Y,0,["exit",Vn,nt[2]]),Y++,$++}if(nt[1].type==="listItemPrefix"){const dr={type:"listItem",_spread:!1,start:Object.assign({},nt[1].start),end:void 0};Vn=dr,I.splice(Y,0,["enter",dr,nt[2]]),Y++,$++,li=void 0,ai=!0}}}return I[L][1]._spread=Ct,$}function o(I,L){return $;function $(Y){l.call(this,I(Y),Y),L&&L.call(this,Y)}}function s(){this.stack.push({type:"fragment",children:[]})}function l(I,L,$){this.stack[this.stack.length-1].children.push(I),this.stack.push(I),this.tokenStack.push([L,$||void 0]),I.position={start:cn(L.start),end:void 0}}function a(I){return L;function L($){I&&I.call(this,$),u.call(this,$)}}function u(I,L){const $=this.stack.pop(),Y=this.tokenStack.pop();if(Y)Y[0].type!==I.type&&(L?L.call(this,I,Y[0]):(Y[1]||Gd).call(this,I,Y[0]));else throw new Error("Cannot close `"+I.type+"` ("+_i({start:I.start,end:I.end})+"): it’s not open");$.position.end=cn(I.end)}function f(){return Ff(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function h(I){if(this.data.expectingFirstListItemValue){const L=this.stack[this.stack.length-2];L.start=Number.parseInt(this.sliceSerialize(I),10),this.data.expectingFirstListItemValue=void 0}}function p(){const I=this.resume(),L=this.stack[this.stack.length-1];L.lang=I}function m(){const I=this.resume(),L=this.stack[this.stack.length-1];L.meta=I}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function k(){const I=this.resume(),L=this.stack[this.stack.length-1];L.value=I.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const I=this.resume(),L=this.stack[this.stack.length-1];L.value=I.replace(/(\r?\n|\r)$/g,"")}function y(I){const L=this.resume(),$=this.stack[this.stack.length-1];$.label=L,$.identifier=Mt(this.sliceSerialize(I)).toLowerCase()}function x(){const I=this.resume(),L=this.stack[this.stack.length-1];L.title=I}function S(){const I=this.resume(),L=this.stack[this.stack.length-1];L.url=I}function b(I){const L=this.stack[this.stack.length-1];if(!L.depth){const $=this.sliceSerialize(I).length;L.depth=$}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function A(I){const L=this.stack[this.stack.length-1];L.depth=this.sliceSerialize(I).codePointAt(0)===61?1:2}function D(){this.data.setextHeadingSlurpLineEnding=void 0}function j(I){const $=this.stack[this.stack.length-1].children;let Y=$[$.length-1];(!Y||Y.type!=="text")&&(Y=Dx(),Y.position={start:cn(I.start),end:void 0},$.push(Y)),this.stack.push(Y)}function T(I){const L=this.stack.pop();L.value+=this.sliceSerialize(I),L.position.end=cn(I.end)}function F(I){const L=this.stack[this.stack.length-1];if(this.data.atHardBreak){const $=L.children[L.children.length-1];$.position.end=cn(I.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(L.type)&&(j.call(this,I),T.call(this,I))}function O(){this.data.atHardBreak=!0}function H(){const I=this.resume(),L=this.stack[this.stack.length-1];L.value=I}function W(){const I=this.resume(),L=this.stack[this.stack.length-1];L.value=I}function G(){const I=this.resume(),L=this.stack[this.stack.length-1];L.value=I}function q(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const L=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=L,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function ne(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const L=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=L,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function R(I){const L=this.sliceSerialize(I),$=this.stack[this.stack.length-2];$.label=QA(L),$.identifier=Mt(L).toLowerCase()}function _(){const I=this.stack[this.stack.length-1],L=this.resume(),$=this.stack[this.stack.length-1];if(this.data.inReference=!0,$.type==="link"){const Y=I.children;$.children=Y}else $.alt=L}function w(){const I=this.resume(),L=this.stack[this.stack.length-1];L.url=I}function V(){const I=this.resume(),L=this.stack[this.stack.length-1];L.title=I}function Z(){this.data.inReference=void 0}function P(){this.data.referenceType="collapsed"}function ye(I){const L=this.resume(),$=this.stack[this.stack.length-1];$.label=L,$.identifier=Mt(this.sliceSerialize(I)).toLowerCase(),this.data.referenceType="full"}function Ge(I){this.data.characterReferenceType=I.type}function te(I){const L=this.sliceSerialize(I),$=this.data.characterReferenceType;let Y;$?(Y=N1(L,$==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Y=Of(L);const ie=this.stack[this.stack.length-1];ie.value+=Y}function tt(I){const L=this.stack.pop();L.position.end=cn(I.end)}function Rt(I){T.call(this,I);const L=this.stack[this.stack.length-1];L.url=this.sliceSerialize(I)}function Lt(I){T.call(this,I);const L=this.stack[this.stack.length-1];L.url="mailto:"+this.sliceSerialize(I)}function Pt(){return{type:"blockquote",children:[]}}function ht(){return{type:"code",lang:null,meta:null,value:""}}function qf(){return{type:"inlineCode",value:""}}function Sx(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Px(){return{type:"emphasis",children:[]}}function Qf(){return{type:"heading",depth:0,children:[]}}function Xf(){return{type:"break"}}function Yf(){return{type:"html",value:""}}function Cx(){return{type:"image",title:null,url:"",alt:null}}function Zf(){return{type:"link",title:null,url:"",children:[]}}function Jf(I){return{type:"list",ordered:I.type==="listOrdered",start:null,spread:I._spread,children:[]}}function Tx(I){return{type:"listItem",spread:I._spread,checked:null,children:[]}}function bx(){return{type:"paragraph",children:[]}}function Ex(){return{type:"strong",children:[]}}function Dx(){return{type:"text",value:""}}function Ax(){return{type:"thematicBreak"}}}function cn(e){return{line:e.line,column:e.column,offset:e.offset}}function H1(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?H1(e,r):JA(e,r)}}function JA(e,t){let n;for(n in t)if(U1.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Gd(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+_i({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+_i({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+_i({start:t.start,end:t.end})+") is still open")}function e3(e){const t=this;t.parser=n;function n(r){return YA(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function t3(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function n3(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function r3(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function i3(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function o3(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function s3(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=si(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let s,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=o+1,l+=1,e.footnoteCounts.set(r,l);const a={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,a);const u={type:"element",tagName:"sup",properties:{},children:[a]};return e.patch(t,u),e.applyData(t,u)}function l3(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function a3(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function $1(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function u3(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return $1(e,t);const i={src:si(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function c3(e,t){const n={src:si(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function f3(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function h3(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return $1(e,t);const i={href:si(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function p3(e,t){const n={href:si(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function d3(e,t,n){const r=e.all(t),i=n?m3(n):W1(t),o={},s=[];if(typeof t.checked=="boolean"){const f=r[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const f=r[l];(i||l!==0||f.type!=="element"||f.tagName!=="p")&&s.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?s.push(...f.children):s.push(f)}const a=r[r.length-1];a&&(i||a.type!=="element"||a.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,u),e.applyData(t,u)}function m3(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=W1(n[r])}return t}function W1(e){const t=e.spread;return t??e.children.length>1}function g3(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function y3(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function x3(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function v3(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function w3(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),i.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=Nf(t.children[1]),a=C1(t.children[t.children.length-1]);l&&a&&(s.position={start:l,end:a}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function k3(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,l=s?s.length:t.children.length;let a=-1;const u=[];for(;++a<l;){const c=t.children[a],h={},p=s?s[a]:void 0;p&&(h.align=p);let m={type:"element",tagName:o,properties:h,children:[]};c&&(m.children=e.all(c),e.patch(c,m),m=e.applyData(c,m)),u.push(m)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,f),e.applyData(t,f)}function S3(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Kd=9,qd=32;function P3(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Qd(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Qd(t.slice(i),i>0,!1)),o.join("")}function Qd(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Kd||o===qd;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Kd||o===qd;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function C3(e,t){const n={type:"text",value:P3(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function T3(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const b3={blockquote:t3,break:n3,code:r3,delete:i3,emphasis:o3,footnoteReference:s3,heading:l3,html:a3,imageReference:u3,image:c3,inlineCode:f3,linkReference:h3,link:p3,listItem:d3,list:g3,paragraph:y3,root:x3,strong:v3,table:w3,tableCell:S3,tableRow:k3,text:C3,thematicBreak:T3,toml:Go,yaml:Go,definition:Go,footnoteDefinition:Go};function Go(){}const G1=-1,Ml=0,Bi=1,Ys=2,_f=3,Vf=4,Bf=5,Uf=6,K1=7,q1=8,Xd=typeof self=="object"?self:globalThis,E3=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,s]=t[i];switch(o){case Ml:case G1:return n(s,i);case Bi:{const l=n([],i);for(const a of s)l.push(r(a));return l}case Ys:{const l=n({},i);for(const[a,u]of s)l[r(a)]=r(u);return l}case _f:return n(new Date(s),i);case Vf:{const{source:l,flags:a}=s;return n(new RegExp(l,a),i)}case Bf:{const l=n(new Map,i);for(const[a,u]of s)l.set(r(a),r(u));return l}case Uf:{const l=n(new Set,i);for(const a of s)l.add(r(a));return l}case K1:{const{name:l,message:a}=s;return n(new Xd[l](a),i)}case q1:return n(BigInt(s),i);case"BigInt":return n(Object(BigInt(s)),i);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:l}=new Uint8Array(s);return n(new DataView(l),s)}}return n(new Xd[o](s),i)};return r},Yd=e=>E3(new Map,e)(0),yr="",{toString:D3}={},{keys:A3}=Object,wi=e=>{const t=typeof e;if(t!=="object"||!e)return[Ml,t];const n=D3.call(e).slice(8,-1);switch(n){case"Array":return[Bi,yr];case"Object":return[Ys,yr];case"Date":return[_f,yr];case"RegExp":return[Vf,yr];case"Map":return[Bf,yr];case"Set":return[Uf,yr];case"DataView":return[Bi,n]}return n.includes("Array")?[Bi,n]:n.includes("Error")?[K1,n]:[Ys,n]},Ko=([e,t])=>e===Ml&&(t==="function"||t==="symbol"),I3=(e,t,n,r)=>{const i=(s,l)=>{const a=r.push(s)-1;return n.set(l,a),a},o=s=>{if(n.has(s))return n.get(s);let[l,a]=wi(s);switch(l){case Ml:{let f=s;switch(a){case"bigint":l=q1,f=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+a);f=null;break;case"undefined":return i([G1],s)}return i([l,f],s)}case Bi:{if(a){let h=s;return a==="DataView"?h=new Uint8Array(s.buffer):a==="ArrayBuffer"&&(h=new Uint8Array(s)),i([a,[...h]],s)}const f=[],c=i([l,f],s);for(const h of s)f.push(o(h));return c}case Ys:{if(a)switch(a){case"BigInt":return i([a,s.toString()],s);case"Boolean":case"Number":case"String":return i([a,s.valueOf()],s)}if(t&&"toJSON"in s)return o(s.toJSON());const f=[],c=i([l,f],s);for(const h of A3(s))(e||!Ko(wi(s[h])))&&f.push([o(h),o(s[h])]);return c}case _f:return i([l,s.toISOString()],s);case Vf:{const{source:f,flags:c}=s;return i([l,{source:f,flags:c}],s)}case Bf:{const f=[],c=i([l,f],s);for(const[h,p]of s)(e||!(Ko(wi(h))||Ko(wi(p))))&&f.push([o(h),o(p)]);return c}case Uf:{const f=[],c=i([l,f],s);for(const h of s)(e||!Ko(wi(h)))&&f.push(o(h));return c}}const{message:u}=s;return i([l,{name:a,message:u}],s)};return o},Zd=(e,{json:t,lossy:n}={})=>{const r=[];return I3(!(t||n),!!t,new Map,r)(e),r},Zs=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Yd(Zd(e,t)):structuredClone(e):(e,t)=>Yd(Zd(e,t));function M3(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function N3(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function R3(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||M3,r=e.options.footnoteBackLabel||N3,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let a=-1;for(;++a<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[a]);if(!u)continue;const f=e.all(u),c=String(u.identifier).toUpperCase(),h=si(c.toLowerCase());let p=0;const m=[],v=e.footnoteCounts.get(c);for(;v!==void 0&&++p<=v;){m.length>0&&m.push({type:"text",value:" "});let y=typeof n=="string"?n:n(a,p);typeof y=="string"&&(y={type:"text",value:y}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(a,p),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const k=f[f.length-1];if(k&&k.type==="element"&&k.tagName==="p"){const y=k.children[k.children.length-1];y&&y.type==="text"?y.value+=" ":k.children.push({type:"text",value:" "}),k.children.push(...m)}else f.push(...m);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(f,!0)};e.patch(u,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Zs(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Nl=function(e){if(e==null)return O3;if(typeof e=="function")return Rl(e);if(typeof e=="object")return Array.isArray(e)?L3(e):j3(e);if(typeof e=="string")return F3(e);throw new Error("Expected function, string, or object as test")};function L3(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Nl(e[n]);return Rl(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function j3(e){const t=e;return Rl(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function F3(e){return Rl(t);function t(n){return n&&n.type===e}}function Rl(e){return t;function t(n,r,i){return!!(z3(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function O3(){return!0}function z3(e){return e!==null&&typeof e=="object"&&"type"in e}const Q1=[],_3=!0,nc=!1,V3="skip";function X1(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Nl(i),s=r?-1:1;l(e,void 0,[])();function l(a,u,f){const c=a&&typeof a=="object"?a:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(a.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=Q1,m,v,k;if((!t||o(a,u,f[f.length-1]||void 0))&&(p=B3(n(a,f)),p[0]===nc))return p;if("children"in a&&a.children){const g=a;if(g.children&&p[0]!==V3)for(v=(r?g.children.length:-1)+s,k=f.concat(g);v>-1&&v<g.children.length;){const y=g.children[v];if(m=l(y,v,k)(),m[0]===nc)return m;v=typeof m[1]=="number"?m[1]:v+s}}return p}}}function B3(e){return Array.isArray(e)?e:typeof e=="number"?[_3,e]:e==null?Q1:[e]}function Hf(e,t,n,r){let i,o,s;typeof t=="function"&&typeof n!="function"?(o=void 0,s=t,i=n):(o=t,s=n,i=r),X1(e,o,l,i);function l(a,u){const f=u[u.length-1],c=f?f.children.indexOf(a):void 0;return s(a,c,f)}}const rc={}.hasOwnProperty,U3={};function H3(e,t){const n=t||U3,r=new Map,i=new Map,o=new Map,s={...b3,...n.handlers},l={all:u,applyData:W3,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:a,options:n,patch:$3,wrap:K3};return Hf(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?r:i,h=String(f.identifier).toUpperCase();c.has(h)||c.set(h,f)}}),l;function a(f,c){const h=f.type,p=l.handlers[h];if(rc.call(l.handlers,h)&&p)return p(l,f,c);if(l.options.passThrough&&l.options.passThrough.includes(h)){if("children"in f){const{children:v,...k}=f,g=Zs(k);return g.children=l.all(f),g}return Zs(f)}return(l.options.unknownHandler||G3)(l,f,c)}function u(f){const c=[];if("children"in f){const h=f.children;let p=-1;for(;++p<h.length;){const m=l.one(h[p],f);if(m){if(p&&h[p-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=Jd(m.value)),!Array.isArray(m)&&m.type==="element")){const v=m.children[0];v&&v.type==="text"&&(v.value=Jd(v.value))}Array.isArray(m)?c.push(...m):c.push(m)}}}return c}}function $3(e,t){e.position&&(t.position=NE(e))}function W3(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,Zs(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function G3(e,t){const n=t.data||{},r="value"in t&&!(rc.call(n,"hProperties")||rc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function K3(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Jd(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function em(e,t){const n=H3(e,t),r=n.one(e,void 0),i=R3(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function q3(e,t){return e&&"run"in e?async function(n,r){const i=em(n,{file:r,...t});await e.run(i,r)}:function(n,r){return em(n,{file:r,...e||t})}}function tm(e){if(e)throw e}var ds=Object.prototype.hasOwnProperty,Y1=Object.prototype.toString,nm=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,im=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Y1.call(t)==="[object Array]"},om=function(t){if(!t||Y1.call(t)!=="[object Object]")return!1;var n=ds.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&ds.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||ds.call(t,i)},sm=function(t,n){nm&&n.name==="__proto__"?nm(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},lm=function(t,n){if(n==="__proto__")if(ds.call(t,n)){if(rm)return rm(t,n).value}else return;return t[n]},Q3=function e(){var t,n,r,i,o,s,l=arguments[0],a=1,u=arguments.length,f=!1;for(typeof l=="boolean"&&(f=l,l=arguments[1]||{},a=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});a<u;++a)if(t=arguments[a],t!=null)for(n in t)r=lm(l,n),i=lm(t,n),l!==i&&(f&&i&&(om(i)||(o=im(i)))?(o?(o=!1,s=r&&im(r)?r:[]):s=r&&om(r)?r:{},sm(l,{name:n,newValue:e(f,s,i)})):typeof i<"u"&&sm(l,{name:n,newValue:i}));return l};const Ta=el(Q3);function ic(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function X3(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);l(null,...i);function l(a,...u){const f=e[++o];let c=-1;if(a){s(a);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,f?Y3(f,l)(...u):s(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Y3(e,t){let n;return r;function r(...s){const l=e.length>s.length;let a;l&&s.push(i);try{a=e.apply(this,s)}catch(u){const f=u;if(l&&n)throw f;return i(f)}l||(a&&a.then&&typeof a.then=="function"?a.then(o,i):a instanceof Error?i(a):o(a))}function i(s,...l){n||(n=!0,t(s,...l))}function o(s){i(null,s)}}const Ot={basename:Z3,dirname:J3,extname:eI,join:tI,sep:"/"};function Z3(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Co(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else s<0&&(o=!0,s=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function J3(e){if(Co(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function eI(e){Co(e);let t=e.length,n=-1,r=0,i=-1,o=0,s;for(;t--;){const l=e.codePointAt(t);if(l===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function tI(...e){let t=-1,n;for(;++t<e.length;)Co(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":nI(n)}function nI(e){Co(e);const t=e.codePointAt(0)===47;let n=rI(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function rI(e,t){let n="",r=0,i=-1,o=0,s=-1,l,a;for(;++s<=e.length;){if(s<e.length)l=e.codePointAt(s);else{if(l===47)break;l=47}if(l===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(a=n.lastIndexOf("/"),a!==n.length-1){a<0?(n="",r=0):(n=n.slice(0,a),r=n.length-1-n.lastIndexOf("/")),i=s,o=0;continue}}else if(n.length>0){n="",r=0,i=s,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,o=0}else l===46&&o>-1?o++:o=-1}return n}function Co(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const iI={cwd:oI};function oI(){return"/"}function oc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function sI(e){if(typeof e=="string")e=new URL(e);else if(!oc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return lI(e)}function lI(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const ba=["history","path","basename","stem","extname","dirname"];class Z1{constructor(t){let n;t?oc(t)?n={path:t}:typeof t=="string"||aI(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":iI.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ba.length;){const o=ba[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)ba.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Ot.basename(this.path):void 0}set basename(t){Da(t,"basename"),Ea(t,"basename"),this.path=Ot.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Ot.dirname(this.path):void 0}set dirname(t){am(this.basename,"dirname"),this.path=Ot.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Ot.extname(this.path):void 0}set extname(t){if(Ea(t,"extname"),am(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ot.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){oc(t)&&(t=sI(t)),Da(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Ot.basename(this.path,this.extname):void 0}set stem(t){Da(t,"stem"),Ea(t,"stem"),this.path=Ot.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new _e(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Ea(e,t){if(e&&e.includes(Ot.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ot.sep+"`")}function Da(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function am(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function aI(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const uI=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},cI={}.hasOwnProperty;class $f extends uI{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=X3()}copy(){const t=new $f;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ta(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ma("data",this.frozen),this.namespace[t]=n,this):cI.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ma("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=qo(t),r=this.parser||this.Parser;return Aa("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Aa("process",this.parser||this.Parser),Ia("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,s){const l=qo(t),a=r.parse(l);r.run(a,l,function(f,c,h){if(f||!c||!h)return u(f);const p=c,m=r.stringify(p,h);pI(m)?h.value=m:h.result=m,u(f,h)});function u(f,c){f||!c?s(f):o?o(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),Aa("processSync",this.parser||this.Parser),Ia("processSync",this.compiler||this.Compiler),this.process(t,i),cm("processSync","process",n),r;function i(o,s){n=!0,tm(o),r=s}}run(t,n,r){um(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(s,l){const a=qo(n);i.run(t,a,u);function u(f,c,h){const p=c||t;f?l(f):s?s(p):r(void 0,p,h)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),cm("runSync","run",r),i;function o(s,l){tm(s),i=l,r=!0}}stringify(t,n){this.freeze();const r=qo(n),i=this.compiler||this.Compiler;return Ia("stringify",i),um(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ma("use",this.frozen),t!=null)if(typeof t=="function")a(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")a(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[f,...c]=u;a(f,c)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Ta(!0,i.settings,u.settings))}function l(u){let f=-1;if(u!=null)if(Array.isArray(u))for(;++f<u.length;){const c=u[f];o(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function a(u,f){let c=-1,h=-1;for(;++c<r.length;)if(r[c][0]===u){h=c;break}if(h===-1)r.push([u,...f]);else if(f.length>0){let[p,...m]=f;const v=r[h][1];ic(v)&&ic(p)&&(p=Ta(!0,v,p)),r[h]=[u,p,...m]}}}}const fI=new $f().freeze();function Aa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ia(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ma(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function um(e){if(!ic(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function cm(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function qo(e){return hI(e)?e:new Z1(e)}function hI(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function pI(e){return typeof e=="string"||dI(e)}function dI(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const mI="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",fm=[],hm={allowDangerousHtml:!0},gI=/^(https?|ircs?|mailto|xmpp)$/i,yI=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function xI(e){const t=vI(e),n=wI(e);return kI(t.runSync(t.parse(n),n),e)}function vI(e){const t=e.rehypePlugins||fm,n=e.remarkPlugins||fm,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...hm}:hm;return fI().use(e3).use(n).use(q3,r).use(t)}function wI(e){const t=e.children||"",n=new Z1;return typeof t=="string"&&(n.value=t),n}function kI(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,s=t.skipHtml,l=t.unwrapDisallowed,a=t.urlTransform||SI;for(const f of yI)Object.hasOwn(t,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+mI+f.id,void 0);return Hf(e,u),OE(e,{Fragment:d.Fragment,components:i,ignoreInvalidStyle:!0,jsx:d.jsx,jsxs:d.jsxs,passKeys:!0,passNode:!0});function u(f,c,h){if(f.type==="raw"&&h&&typeof c=="number")return s?h.children.splice(c,1):h.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let p;for(p in Sa)if(Object.hasOwn(Sa,p)&&Object.hasOwn(f.properties,p)){const m=f.properties[p],v=Sa[p];(v===null||v.includes(f.tagName))&&(f.properties[p]=a(String(m||""),p,f))}}if(f.type==="element"){let p=n?!n.includes(f.tagName):o?o.includes(f.tagName):!1;if(!p&&r&&typeof c=="number"&&(p=!r(f,c,h)),p&&h&&typeof c=="number")return l&&f.children?h.children.splice(c,1,...f.children):h.children.splice(c,1),c}}}function SI(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||gI.test(e.slice(0,t))?e:""}function pm(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function PI(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function CI(e,t,n){const i=Nl((n||{}).ignore||[]),o=TI(t);let s=-1;for(;++s<o.length;)X1(e,"text",l);function l(u,f){let c=-1,h;for(;++c<f.length;){const p=f[c],m=h?h.children:void 0;if(i(p,m?m.indexOf(p):void 0,h))return;h=p}if(h)return a(u,f)}function a(u,f){const c=f[f.length-1],h=o[s][0],p=o[s][1];let m=0;const k=c.children.indexOf(u);let g=!1,y=[];h.lastIndex=0;let x=h.exec(u.value);for(;x;){const S=x.index,b={index:x.index,input:x.input,stack:[...f,u]};let C=p(...x,b);if(typeof C=="string"&&(C=C.length>0?{type:"text",value:C}:void 0),C===!1?h.lastIndex=S+1:(m!==S&&y.push({type:"text",value:u.value.slice(m,S)}),Array.isArray(C)?y.push(...C):C&&y.push(C),m=S+x[0].length,g=!0),!h.global)break;x=h.exec(u.value)}return g?(m<u.value.length&&y.push({type:"text",value:u.value.slice(m)}),c.children.splice(k,1,...y)):y=[u],k+y.length}}function TI(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([bI(i[0]),EI(i[1])])}return t}function bI(e){return typeof e=="string"?new RegExp(PI(e),"g"):e}function EI(e){return typeof e=="function"?e:function(){return e}}const Na="phrasing",Ra=["autolink","link","image","label"];function DI(){return{transforms:[jI],enter:{literalAutolink:II,literalAutolinkEmail:La,literalAutolinkHttp:La,literalAutolinkWww:La},exit:{literalAutolink:LI,literalAutolinkEmail:RI,literalAutolinkHttp:MI,literalAutolinkWww:NI}}}function AI(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Na,notInConstruct:Ra},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Na,notInConstruct:Ra},{character:":",before:"[ps]",after:"\\/",inConstruct:Na,notInConstruct:Ra}]}}function II(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function La(e){this.config.enter.autolinkProtocol.call(this,e)}function MI(e){this.config.exit.autolinkProtocol.call(this,e)}function NI(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function RI(e){this.config.exit.autolinkEmail.call(this,e)}function LI(e){this.exit(e)}function jI(e){CI(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,FI],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),OI]],{ignore:["link","linkReference"]})}function FI(e,t,n,r,i){let o="";if(!J1(i)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!zI(n)))return!1;const s=_I(n+r);if(!s[0])return!1;const l={type:"link",title:null,url:o+t+s[0],children:[{type:"text",value:t+s[0]}]};return s[1]?[l,{type:"text",value:s[1]}]:l}function OI(e,t,n,r){return!J1(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function zI(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function _I(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=pm(e,"(");let o=pm(e,")");for(;r!==-1&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return[e,n]}function J1(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||lr(n)||Al(n))&&(!t||n!==47)}ex.peek=qI;function VI(){this.buffer()}function BI(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function UI(){this.buffer()}function HI(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function $I(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Mt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function WI(e){this.exit(e)}function GI(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Mt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function KI(e){this.exit(e)}function qI(){return"["}function ex(e,t,n,r){const i=n.createTracker(r);let o=i.move("[^");const s=n.enter("footnoteReference"),l=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{after:"]",before:o})),l(),s(),o+=i.move("]"),o}function QI(){return{enter:{gfmFootnoteCallString:VI,gfmFootnoteCall:BI,gfmFootnoteDefinitionLabelString:UI,gfmFootnoteDefinition:HI},exit:{gfmFootnoteCallString:$I,gfmFootnoteCall:WI,gfmFootnoteDefinitionLabelString:GI,gfmFootnoteDefinition:KI}}}function XI(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:ex},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,o,s){const l=o.createTracker(s);let a=l.move("[^");const u=o.enter("footnoteDefinition"),f=o.enter("label");return a+=l.move(o.safe(o.associationId(r),{before:a,after:"]"})),f(),a+=l.move("]:"),r.children&&r.children.length>0&&(l.shift(4),a+=l.move((t?`
`:" ")+o.indentLines(o.containerFlow(r,l.current()),t?tx:YI))),u(),a}}function YI(e,t,n){return t===0?e:tx(e,t,n)}function tx(e,t,n){return(n?"":"    ")+e}const ZI=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];nx.peek=r4;function JI(){return{canContainEols:["delete"],enter:{strikethrough:t4},exit:{strikethrough:n4}}}function e4(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:ZI}],handlers:{delete:nx}}}function t4(e){this.enter({type:"delete",children:[]},e)}function n4(e){this.exit(e)}function nx(e,t,n,r){const i=n.createTracker(r),o=n.enter("strikethrough");let s=i.move("~~");return s+=n.containerPhrasing(e,{...i.current(),before:s,after:"~"}),s+=i.move("~~"),o(),s}function r4(){return"~"}function i4(e){return e.length}function o4(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||i4,o=[],s=[],l=[],a=[];let u=0,f=-1;for(;++f<e.length;){const v=[],k=[];let g=-1;for(e[f].length>u&&(u=e[f].length);++g<e[f].length;){const y=s4(e[f][g]);if(n.alignDelimiters!==!1){const x=i(y);k[g]=x,(a[g]===void 0||x>a[g])&&(a[g]=x)}v.push(y)}s[f]=v,l[f]=k}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)o[c]=dm(r[c]);else{const v=dm(r);for(;++c<u;)o[c]=v}c=-1;const h=[],p=[];for(;++c<u;){const v=o[c];let k="",g="";v===99?(k=":",g=":"):v===108?k=":":v===114&&(g=":");let y=n.alignDelimiters===!1?1:Math.max(1,a[c]-k.length-g.length);const x=k+"-".repeat(y)+g;n.alignDelimiters!==!1&&(y=k.length+y+g.length,y>a[c]&&(a[c]=y),p[c]=y),h[c]=x}s.splice(1,0,h),l.splice(1,0,p),f=-1;const m=[];for(;++f<s.length;){const v=s[f],k=l[f];c=-1;const g=[];for(;++c<u;){const y=v[c]||"";let x="",S="";if(n.alignDelimiters!==!1){const b=a[c]-(k[c]||0),C=o[c];C===114?x=" ".repeat(b):C===99?b%2?(x=" ".repeat(b/2+.5),S=" ".repeat(b/2-.5)):(x=" ".repeat(b/2),S=x):S=" ".repeat(b)}n.delimiterStart!==!1&&!c&&g.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&y==="")&&(n.delimiterStart!==!1||c)&&g.push(" "),n.alignDelimiters!==!1&&g.push(x),g.push(y),n.alignDelimiters!==!1&&g.push(S),n.padding!==!1&&g.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&g.push("|")}m.push(n.delimiterEnd===!1?g.join("").replace(/ +$/,""):g.join(""))}return m.join(`
`)}function s4(e){return e==null?"":String(e)}function dm(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function l4(e,t,n,r){const i=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);const s=n.indentLines(n.containerFlow(e,o.current()),a4);return i(),s}function a4(e,t,n){return">"+(n?"":" ")+e}function u4(e,t){return mm(e,t.inConstruct,!0)&&!mm(e,t.notInConstruct,!1)}function mm(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function gm(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&u4(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function c4(e,t){const n=String(e);let r=n.indexOf(t),i=r,o=0,s=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>s&&(s=o):o=1,i=r+t.length,r=n.indexOf(t,i);return s}function f4(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function h4(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function p4(e,t,n,r){const i=h4(n),o=e.value||"",s=i==="`"?"GraveAccent":"Tilde";if(f4(e,n)){const c=n.enter("codeIndented"),h=n.indentLines(o,d4);return c(),h}const l=n.createTracker(r),a=i.repeat(Math.max(c4(o,i)+1,3)),u=n.enter("codeFenced");let f=l.move(a);if(e.lang){const c=n.enter(`codeFencedLang${s}`);f+=l.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...l.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${s}`);f+=l.move(" "),f+=l.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...l.current()})),c()}return f+=l.move(`
`),o&&(f+=l.move(o+`
`)),f+=l.move(a),u(),f}function d4(e,t,n){return(n?"":"    ")+e}function Wf(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function m4(e,t,n,r){const i=Wf(n),o=i==='"'?"Quote":"Apostrophe",s=n.enter("definition");let l=n.enter("label");const a=n.createTracker(r);let u=a.move("[");return u+=a.move(n.safe(n.associationId(e),{before:u,after:"]",...a.current()})),u+=a.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(l=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...a.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),l()),s(),u}function g4(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function fo(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Js(e,t,n){const r=Jr(e),i=Jr(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}rx.peek=y4;function rx(e,t,n,r){const i=g4(n),o=n.enter("emphasis"),s=n.createTracker(r),l=s.move(i);let a=s.move(n.containerPhrasing(e,{after:i,before:l,...s.current()}));const u=a.charCodeAt(0),f=Js(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(a=fo(u)+a.slice(1));const c=a.charCodeAt(a.length-1),h=Js(r.after.charCodeAt(0),c,i);h.inside&&(a=a.slice(0,-1)+fo(c));const p=s.move(i);return o(),n.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},l+a+p}function y4(e,t,n){return n.options.emphasis||"*"}function x4(e,t){let n=!1;return Hf(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,nc}),!!((!e.depth||e.depth<3)&&Ff(e)&&(t.options.setext||n))}function v4(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if(x4(e,n)){const f=n.enter("headingSetext"),c=n.enter("phrasing"),h=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return c(),f(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const s="#".repeat(i),l=n.enter("headingAtx"),a=n.enter("phrasing");o.move(s+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(u)&&(u=fo(u.charCodeAt(0))+u.slice(1)),u=u?s+" "+u:s,n.options.closeAtx&&(u+=" "+s),a(),l(),u}ix.peek=w4;function ix(e){return e.value||""}function w4(){return"<"}ox.peek=k4;function ox(e,t,n,r){const i=Wf(n),o=i==='"'?"Quote":"Apostrophe",s=n.enter("image");let l=n.enter("label");const a=n.createTracker(r);let u=a.move("![");return u+=a.move(n.safe(e.alt,{before:u,after:"]",...a.current()})),u+=a.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=a.move("<"),u+=a.move(n.safe(e.url,{before:u,after:">",...a.current()})),u+=a.move(">")):(l=n.enter("destinationRaw"),u+=a.move(n.safe(e.url,{before:u,after:e.title?" ":")",...a.current()}))),l(),e.title&&(l=n.enter(`title${o}`),u+=a.move(" "+i),u+=a.move(n.safe(e.title,{before:u,after:i,...a.current()})),u+=a.move(i),l()),u+=a.move(")"),s(),u}function k4(){return"!"}sx.peek=S4;function sx(e,t,n,r){const i=e.referenceType,o=n.enter("imageReference");let s=n.enter("label");const l=n.createTracker(r);let a=l.move("![");const u=n.safe(e.alt,{before:a,after:"]",...l.current()});a+=l.move(u+"]["),s();const f=n.stack;n.stack=[],s=n.enter("reference");const c=n.safe(n.associationId(e),{before:a,after:"]",...l.current()});return s(),n.stack=f,o(),i==="full"||!u||u!==c?a+=l.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=l.move("]"),a}function S4(){return"!"}lx.peek=P4;function lx(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){const s=n.unsafe[o],l=n.compilePattern(s);let a;if(s.atBreak)for(;a=l.exec(r);){let u=a.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(a.index+1)}}return i+r+i}function P4(){return"`"}function ax(e,t){const n=Ff(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ux.peek=C4;function ux(e,t,n,r){const i=Wf(n),o=i==='"'?"Quote":"Apostrophe",s=n.createTracker(r);let l,a;if(ax(e,n)){const f=n.stack;n.stack=[],l=n.enter("autolink");let c=s.move("<");return c+=s.move(n.containerPhrasing(e,{before:c,after:">",...s.current()})),c+=s.move(">"),l(),n.stack=f,c}l=n.enter("link"),a=n.enter("label");let u=s.move("[");return u+=s.move(n.containerPhrasing(e,{before:u,after:"](",...s.current()})),u+=s.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(a=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),a(),e.title&&(a=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),a()),u+=s.move(")"),l(),u}function C4(e,t,n){return ax(e,n)?"<":"["}cx.peek=T4;function cx(e,t,n,r){const i=e.referenceType,o=n.enter("linkReference");let s=n.enter("label");const l=n.createTracker(r);let a=l.move("[");const u=n.containerPhrasing(e,{before:a,after:"]",...l.current()});a+=l.move(u+"]["),s();const f=n.stack;n.stack=[],s=n.enter("reference");const c=n.safe(n.associationId(e),{before:a,after:"]",...l.current()});return s(),n.stack=f,o(),i==="full"||!u||u!==c?a+=l.move(c+"]"):i==="shortcut"?a=a.slice(0,-1):a+=l.move("]"),a}function T4(){return"["}function Gf(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function b4(e){const t=Gf(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function E4(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function fx(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function D4(e,t,n,r){const i=n.enter("list"),o=n.bulletCurrent;let s=e.ordered?E4(n):Gf(n);const l=e.ordered?s==="."?")":".":b4(n);let a=t&&n.bulletLastUsed?s===n.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((s==="*"||s==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(a=!0),fx(n)===s&&f){let c=-1;for(;++c<e.children.length;){const h=e.children[c];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){a=!0;break}}}}a&&(s=l),n.bulletCurrent=s;const u=n.containerFlow(e,r);return n.bulletLastUsed=s,n.bulletCurrent=o,i(),u}function A4(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function I4(e,t,n,r){const i=A4(n);let o=n.bulletCurrent||Gf(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let s=o.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(s=Math.ceil(s/4)*4);const l=n.createTracker(r);l.move(o+" ".repeat(s-o.length)),l.shift(s);const a=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,l.current()),f);return a(),u;function f(c,h,p){return h?(p?"":" ".repeat(s))+c:(p?o:o+" ".repeat(s-o.length))+c}}function M4(e,t,n,r){const i=n.enter("paragraph"),o=n.enter("phrasing"),s=n.containerPhrasing(e,r);return o(),i(),s}const N4=Nl(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function R4(e,t,n,r){return(e.children.some(function(s){return N4(s)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function L4(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}hx.peek=j4;function hx(e,t,n,r){const i=L4(n),o=n.enter("strong"),s=n.createTracker(r),l=s.move(i+i);let a=s.move(n.containerPhrasing(e,{after:i,before:l,...s.current()}));const u=a.charCodeAt(0),f=Js(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(a=fo(u)+a.slice(1));const c=a.charCodeAt(a.length-1),h=Js(r.after.charCodeAt(0),c,i);h.inside&&(a=a.slice(0,-1)+fo(c));const p=s.move(i+i);return o(),n.attentionEncodeSurroundingInfo={after:h.outside,before:f.outside},l+a+p}function j4(e,t,n){return n.options.strong||"*"}function F4(e,t,n,r){return n.safe(e.value,r)}function O4(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function z4(e,t,n){const r=(fx(n)+(n.options.ruleSpaces?" ":"")).repeat(O4(n));return n.options.ruleSpaces?r.slice(0,-1):r}const px={blockquote:l4,break:gm,code:p4,definition:m4,emphasis:rx,hardBreak:gm,heading:v4,html:ix,image:ox,imageReference:sx,inlineCode:lx,link:ux,linkReference:cx,list:D4,listItem:I4,paragraph:M4,root:R4,strong:hx,text:F4,thematicBreak:z4};function _4(){return{enter:{table:V4,tableData:ym,tableHeader:ym,tableRow:U4},exit:{codeText:H4,table:B4,tableData:ja,tableHeader:ja,tableRow:ja}}}function V4(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function B4(e){this.exit(e),this.data.inTable=void 0}function U4(e){this.enter({type:"tableRow",children:[]},e)}function ja(e){this.exit(e)}function ym(e){this.enter({type:"tableCell",children:[]},e)}function H4(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,$4));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function $4(e,t){return t==="|"?t:e}function W4(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:s,tableCell:a,tableRow:l}};function s(p,m,v,k){return u(f(p,v,k),p.align)}function l(p,m,v,k){const g=c(p,v,k),y=u([g]);return y.slice(0,y.indexOf(`
`))}function a(p,m,v,k){const g=v.enter("tableCell"),y=v.enter("phrasing"),x=v.containerPhrasing(p,{...k,before:o,after:o});return y(),g(),x}function u(p,m){return o4(p,{align:m,alignDelimiters:r,padding:n,stringLength:i})}function f(p,m,v){const k=p.children;let g=-1;const y=[],x=m.enter("table");for(;++g<k.length;)y[g]=c(k[g],m,v);return x(),y}function c(p,m,v){const k=p.children;let g=-1;const y=[],x=m.enter("tableRow");for(;++g<k.length;)y[g]=a(k[g],p,m,v);return x(),y}function h(p,m,v){let k=px.inlineCode(p,m,v);return v.stack.includes("tableCell")&&(k=k.replace(/\|/g,"\\$&")),k}}function G4(){return{exit:{taskListCheckValueChecked:xm,taskListCheckValueUnchecked:xm,paragraph:q4}}}function K4(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Q4}}}function xm(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function q4(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let o=-1,s;for(;++o<i.length;){const l=i[o];if(l.type==="paragraph"){s=l;break}}s===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function Q4(e,t,n,r){const i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",s="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);o&&l.move(s);let a=px.listItem(e,t,n,{...r,...l.current()});return o&&(a=a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),a;function u(f){return f+s}}function X4(){return[DI(),QI(),JI(),_4(),G4()]}function Y4(e){return{extensions:[AI(),XI(e),e4(),W4(e),K4()]}}const Z4={tokenize:i5,partial:!0},dx={tokenize:o5,partial:!0},mx={tokenize:s5,partial:!0},gx={tokenize:l5,partial:!0},J4={tokenize:a5,partial:!0},yx={name:"wwwAutolink",tokenize:n5,previous:vx},xx={name:"protocolAutolink",tokenize:r5,previous:wx},an={name:"emailAutolink",tokenize:t5,previous:kx},Ut={};function e5(){return{text:Ut}}let Un=48;for(;Un<123;)Ut[Un]=an,Un++,Un===58?Un=65:Un===91&&(Un=97);Ut[43]=an;Ut[45]=an;Ut[46]=an;Ut[95]=an;Ut[72]=[an,xx];Ut[104]=[an,xx];Ut[87]=[an,yx];Ut[119]=[an,yx];function t5(e,t,n){const r=this;let i,o;return s;function s(c){return!sc(c)||!kx.call(r,r.previous)||Kf(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(c))}function l(c){return sc(c)?(e.consume(c),l):c===64?(e.consume(c),a):n(c)}function a(c){return c===46?e.check(J4,f,u)(c):c===45||c===95||Oe(c)?(o=!0,e.consume(c),a):f(c)}function u(c){return e.consume(c),i=!0,a}function f(c){return o&&i&&Ue(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function n5(e,t,n){const r=this;return i;function i(s){return s!==87&&s!==119||!vx.call(r,r.previous)||Kf(r.events)?n(s):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Z4,e.attempt(dx,e.attempt(mx,o),n),n)(s))}function o(s){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(s)}}function r5(e,t,n){const r=this;let i="",o=!1;return s;function s(c){return(c===72||c===104)&&wx.call(r,r.previous)&&!Kf(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),l):n(c)}function l(c){if(Ue(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),l;if(c===58){const h=i.toLowerCase();if(h==="http"||h==="https")return e.consume(c),a}return n(c)}function a(c){return c===47?(e.consume(c),o?u:(o=!0,a)):n(c)}function u(c){return c===null||Xs(c)||oe(c)||lr(c)||Al(c)?n(c):e.attempt(dx,e.attempt(mx,f),n)(c)}function f(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function i5(e,t,n){let r=0;return i;function i(s){return(s===87||s===119)&&r<3?(r++,e.consume(s),i):s===46&&r===3?(e.consume(s),o):n(s)}function o(s){return s===null?n(s):t(s)}}function o5(e,t,n){let r,i,o;return s;function s(u){return u===46||u===95?e.check(gx,a,l)(u):u===null||oe(u)||lr(u)||u!==45&&Al(u)?a(u):(o=!0,e.consume(u),s)}function l(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),s}function a(u){return i||r||!o?n(u):t(u)}}function s5(e,t){let n=0,r=0;return i;function i(s){return s===40?(n++,e.consume(s),i):s===41&&r<n?o(s):s===33||s===34||s===38||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===60||s===63||s===93||s===95||s===126?e.check(gx,t,o)(s):s===null||oe(s)||lr(s)?t(s):(e.consume(s),i)}function o(s){return s===41&&r++,e.consume(s),i}}function l5(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),o):l===93?(e.consume(l),i):l===60||l===null||oe(l)||lr(l)?t(l):n(l)}function i(l){return l===null||l===40||l===91||oe(l)||lr(l)?t(l):r(l)}function o(l){return Ue(l)?s(l):n(l)}function s(l){return l===59?(e.consume(l),r):Ue(l)?(e.consume(l),s):n(l)}}function a5(e,t,n){return r;function r(o){return e.consume(o),i}function i(o){return Oe(o)?n(o):t(o)}}function vx(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||oe(e)}function wx(e){return!Ue(e)}function kx(e){return!(e===47||sc(e))}function sc(e){return e===43||e===45||e===46||e===95||Oe(e)}function Kf(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const u5={tokenize:y5,partial:!0};function c5(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:d5,continuation:{tokenize:m5},exit:g5}},text:{91:{name:"gfmFootnoteCall",tokenize:p5},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:f5,resolveTo:h5}}}}function f5(e,t,n){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s;for(;i--;){const a=r.events[i][1];if(a.type==="labelImage"){s=a;break}if(a.type==="gfmFootnoteCall"||a.type==="labelLink"||a.type==="label"||a.type==="image"||a.type==="link")break}return l;function l(a){if(!s||!s._balanced)return n(a);const u=Mt(r.sliceSerialize({start:s.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(a):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(a),e.exit("gfmFootnoteCallLabelMarker"),t(a))}}function h5(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},s={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},l=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",o,t],["enter",s,t],["exit",s,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...l),e}function p5(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,s;return l;function l(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),a}function a(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!s||c===null||c===91||oe(c))return n(c);if(c===93){e.exit("chunkString");const h=e.exit("gfmFootnoteCallString");return i.includes(Mt(r.sliceSerialize(h)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return oe(c)||(s=!0),o++,e.consume(c),c===92?f:u}function f(c){return c===91||c===92||c===93?(e.consume(c),o++,u):u(c)}}function d5(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,s=0,l;return a;function a(m){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(m){return m===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(m)}function f(m){if(s>999||m===93&&!l||m===null||m===91||oe(m))return n(m);if(m===93){e.exit("chunkString");const v=e.exit("gfmFootnoteDefinitionLabelString");return o=Mt(r.sliceSerialize(v)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return oe(m)||(l=!0),s++,e.consume(m),m===92?c:f}function c(m){return m===91||m===92||m===93?(e.consume(m),s++,f):f(m)}function h(m){return m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),i.includes(o)||i.push(o),J(e,p,"gfmFootnoteDefinitionWhitespace")):n(m)}function p(m){return t(m)}}function m5(e,t,n){return e.check(Po,t,e.attempt(u5,t,n))}function g5(e){e.exit("gfmFootnoteDefinition")}function y5(e,t,n){const r=this;return J(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="gfmFootnoteDefinitionIndent"&&s[2].sliceSerialize(s[1],!0).length===4?t(o):n(o)}}function x5(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(s,l){let a=-1;for(;++a<s.length;)if(s[a][0]==="enter"&&s[a][1].type==="strikethroughSequenceTemporary"&&s[a][1]._close){let u=a;for(;u--;)if(s[u][0]==="exit"&&s[u][1].type==="strikethroughSequenceTemporary"&&s[u][1]._open&&s[a][1].end.offset-s[a][1].start.offset===s[u][1].end.offset-s[u][1].start.offset){s[a][1].type="strikethroughSequence",s[u][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},s[u][1].start),end:Object.assign({},s[a][1].end)},c={type:"strikethroughText",start:Object.assign({},s[u][1].end),end:Object.assign({},s[a][1].start)},h=[["enter",f,l],["enter",s[u][1],l],["exit",s[u][1],l],["enter",c,l]],p=l.parser.constructs.insideSpan.null;p&&lt(h,h.length,0,Il(p,s.slice(u+1,a),l)),lt(h,h.length,0,[["exit",c,l],["enter",s[a][1],l],["exit",s[a][1],l],["exit",f,l]]),lt(s,u-1,a-u+3,h),a=u+h.length-2;break}}for(a=-1;++a<s.length;)s[a][1].type==="strikethroughSequenceTemporary"&&(s[a][1].type="data");return s}function o(s,l,a){const u=this.previous,f=this.events;let c=0;return h;function h(m){return u===126&&f[f.length-1][1].type!=="characterEscape"?a(m):(s.enter("strikethroughSequenceTemporary"),p(m))}function p(m){const v=Jr(u);if(m===126)return c>1?a(m):(s.consume(m),c++,p);if(c<2&&!n)return a(m);const k=s.exit("strikethroughSequenceTemporary"),g=Jr(m);return k._open=!g||g===2&&!!v,k._close=!v||v===2&&!!g,l(m)}}}class v5{constructor(){this.map=[]}add(t,n,r){w5(this,t,n,r)}consume(t){if(this.map.sort(function(o,s){return o[0]-s[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const o of i)t.push(o);i=r.pop()}this.map.length=0}}function w5(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function k5(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function S5(){return{flow:{null:{name:"table",tokenize:P5,resolveAll:C5}}}}function P5(e,t,n){const r=this;let i=0,o=0,s;return l;function l(T){let F=r.events.length-1;for(;F>-1;){const W=r.events[F][1].type;if(W==="lineEnding"||W==="linePrefix")F--;else break}const O=F>-1?r.events[F][1].type:null,H=O==="tableHead"||O==="tableRow"?C:a;return H===C&&r.parser.lazy[r.now().line]?n(T):H(T)}function a(T){return e.enter("tableHead"),e.enter("tableRow"),u(T)}function u(T){return T===124||(s=!0,o+=1),f(T)}function f(T){return T===null?n(T):B(T)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(T),e.exit("lineEnding"),p):n(T):Q(T)?J(e,f,"whitespace")(T):(o+=1,s&&(s=!1,i+=1),T===124?(e.enter("tableCellDivider"),e.consume(T),e.exit("tableCellDivider"),s=!0,f):(e.enter("data"),c(T)))}function c(T){return T===null||T===124||oe(T)?(e.exit("data"),f(T)):(e.consume(T),T===92?h:c)}function h(T){return T===92||T===124?(e.consume(T),c):c(T)}function p(T){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(T):(e.enter("tableDelimiterRow"),s=!1,Q(T)?J(e,m,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):m(T))}function m(T){return T===45||T===58?k(T):T===124?(s=!0,e.enter("tableCellDivider"),e.consume(T),e.exit("tableCellDivider"),v):b(T)}function v(T){return Q(T)?J(e,k,"whitespace")(T):k(T)}function k(T){return T===58?(o+=1,s=!0,e.enter("tableDelimiterMarker"),e.consume(T),e.exit("tableDelimiterMarker"),g):T===45?(o+=1,g(T)):T===null||B(T)?S(T):b(T)}function g(T){return T===45?(e.enter("tableDelimiterFiller"),y(T)):b(T)}function y(T){return T===45?(e.consume(T),y):T===58?(s=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(T),e.exit("tableDelimiterMarker"),x):(e.exit("tableDelimiterFiller"),x(T))}function x(T){return Q(T)?J(e,S,"whitespace")(T):S(T)}function S(T){return T===124?m(T):T===null||B(T)?!s||i!==o?b(T):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(T)):b(T)}function b(T){return n(T)}function C(T){return e.enter("tableRow"),A(T)}function A(T){return T===124?(e.enter("tableCellDivider"),e.consume(T),e.exit("tableCellDivider"),A):T===null||B(T)?(e.exit("tableRow"),t(T)):Q(T)?J(e,A,"whitespace")(T):(e.enter("data"),D(T))}function D(T){return T===null||T===124||oe(T)?(e.exit("data"),A(T)):(e.consume(T),T===92?j:D)}function j(T){return T===92||T===124?(e.consume(T),D):D(T)}}function C5(e,t){let n=-1,r=!0,i=0,o=[0,0,0,0],s=[0,0,0,0],l=!1,a=0,u,f,c;const h=new v5;for(;++n<e.length;){const p=e[n],m=p[1];p[0]==="enter"?m.type==="tableHead"?(l=!1,a!==0&&(vm(h,t,a,u,f),f=void 0,a=0),u={type:"table",start:Object.assign({},m.start),end:Object.assign({},m.end)},h.add(n,0,[["enter",u,t]])):m.type==="tableRow"||m.type==="tableDelimiterRow"?(r=!0,c=void 0,o=[0,0,0,0],s=[0,n+1,0,0],l&&(l=!1,f={type:"tableBody",start:Object.assign({},m.start),end:Object.assign({},m.end)},h.add(n,0,[["enter",f,t]])),i=m.type==="tableDelimiterRow"?2:f?3:1):i&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")?(r=!1,s[2]===0&&(o[1]!==0&&(s[0]=s[1],c=Qo(h,t,o,i,void 0,c),o=[0,0,0,0]),s[2]=n)):m.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(s[0]=s[1],c=Qo(h,t,o,i,void 0,c)),o=s,s=[o[1],n,0,0])):m.type==="tableHead"?(l=!0,a=n):m.type==="tableRow"||m.type==="tableDelimiterRow"?(a=n,o[1]!==0?(s[0]=s[1],c=Qo(h,t,o,i,n,c)):s[1]!==0&&(c=Qo(h,t,s,i,n,c)),i=0):i&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")&&(s[3]=n)}for(a!==0&&vm(h,t,a,u,f),h.consume(t.events),n=-1;++n<t.events.length;){const p=t.events[n];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=k5(t.events,n))}return e}function Qo(e,t,n,r,i,o){const s=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(o.end=Object.assign({},xr(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));const a=xr(t.events,n[1]);if(o={type:s,start:Object.assign({},a),end:Object.assign({},a)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){const u=xr(t.events,n[2]),f=xr(t.events,n[3]),c={type:l,start:Object.assign({},u),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const h=t.events[n[2]],p=t.events[n[3]];if(h[1].end=Object.assign({},p[1].end),h[1].type="chunkText",h[1].contentType="text",n[3]>n[2]+1){const m=n[2]+1,v=n[3]-n[2]-1;e.add(m,v,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return i!==void 0&&(o.end=Object.assign({},xr(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function vm(e,t,n,r,i){const o=[],s=xr(t.events,n);i&&(i.end=Object.assign({},s),o.push(["exit",i,t])),r.end=Object.assign({},s),o.push(["exit",r,t]),e.add(n+1,0,o)}function xr(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const T5={name:"tasklistCheck",tokenize:E5};function b5(){return{text:{91:T5}}}function E5(e,t,n){const r=this;return i;function i(a){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(a):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),o)}function o(a){return oe(a)?(e.enter("taskListCheckValueUnchecked"),e.consume(a),e.exit("taskListCheckValueUnchecked"),s):a===88||a===120?(e.enter("taskListCheckValueChecked"),e.consume(a),e.exit("taskListCheckValueChecked"),s):n(a)}function s(a){return a===93?(e.enter("taskListCheckMarker"),e.consume(a),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(a)}function l(a){return B(a)?t(a):Q(a)?e.check({tokenize:D5},t,n)(a):n(a)}}function D5(e,t,n){return J(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function A5(e){return M1([e5(),c5(),x5(e),S5(),b5()])}const I5={};function M5(e){const t=this,n=e||I5,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),s=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(A5(n)),o.push(X4()),s.push(Y4(n))}function N5({children:e}){return d.jsx(xI,{remarkPlugins:[M5],components:{a:({node:t,...n})=>d.jsx("a",{...n,target:"_blank",rel:"noopener noreferrer",className:"text-[#8af7fe] underline"}),img:({node:t,...n})=>d.jsx("img",{...n,loading:"lazy",className:"my-5 max-h-[560px] w-auto max-w-full rounded-lg border border-white/10"})},children:e})}function R5(){const{slug:e}=Mk(),t=hs.find(l=>l.slug===e),[n,r]=E.useState(()=>t??null),[i,o]=E.useState(!1);if(E.useEffect(()=>{o(!1),r(t??null),Nb(e).then(r).catch(()=>{t||o(!0)})},[t,e]),i)return d.jsx(Nu,{to:"/blog",replace:!0});if(!n)return d.jsx("div",{className:"glass-card",children:"Loading article..."});const s=[...hs.filter(l=>l.slug!==n.slug&&l.categorySlug===n.categorySlug),...hs.filter(l=>l.slug!==n.slug&&l.categorySlug!==n.categorySlug)].slice(0,3);return d.jsxs("section",{className:"space-y-8",children:[d.jsxs(Xr,{to:"/blog",className:"terminal-button terminal-button--ghost w-fit",children:[d.jsx(c2,{className:"h-4 w-4"}),"back to blog"]}),d.jsxs("div",{className:"grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]",children:[d.jsxs("article",{className:"overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#041018f2] shadow-[0_24px_80px_rgba(0,0,0,0.5)]",children:[d.jsxs("div",{className:"blog-hero",children:[d.jsx("img",{src:n.coverImage,alt:"",className:"h-full w-full object-cover"}),d.jsx("div",{className:"blog-hero__overlay"}),d.jsxs("div",{className:"blog-hero__content",children:[d.jsxs("div",{className:"flex flex-wrap gap-3 text-xs text-zinc-200",children:[d.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-[#f4d58d33] bg-[#f4d58d1a] px-3 py-1.5 text-[#fff1c7]",children:[d.jsx(h2,{className:"h-4 w-4"}),n.date]}),d.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-[#8af7fe33] bg-[#8af7fe14] px-3 py-1.5 text-[#d8fbff]",children:[d.jsx(ju,{className:"h-4 w-4"}),n.category]}),d.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-zinc-100",children:[d.jsx(p2,{className:"h-4 w-4"}),n.readTime]})]}),d.jsxs("div",{className:"space-y-4",children:[d.jsx("p",{className:"mono text-xs uppercase tracking-[0.28em] text-[#8af7fe]",children:"Personal archive / yearly log"}),d.jsx("h1",{className:"blog-hero__title",children:n.title}),d.jsx("p",{className:"max-w-3xl text-base leading-8 text-zinc-100/88 sm:text-lg",children:n.excerpt})]}),d.jsxs("div",{className:"grid gap-3 sm:grid-cols-3",children:[d.jsxs("div",{className:"blog-hero__stat",children:[d.jsx("span",{className:"blog-hero__stat-label",children:"Category"}),d.jsx("span",{className:"blog-hero__stat-value",children:n.category})]}),d.jsxs("div",{className:"blog-hero__stat",children:[d.jsx("span",{className:"blog-hero__stat-label",children:"Published"}),d.jsx("span",{className:"blog-hero__stat-value",children:n.date})]}),d.jsxs("div",{className:"blog-hero__stat",children:[d.jsx("span",{className:"blog-hero__stat-label",children:"Reading time"}),d.jsx("span",{className:"blog-hero__stat-value",children:n.readTime})]})]})]})]}),d.jsxs("div",{className:"space-y-8 p-6 sm:p-8 lg:p-10",children:[d.jsxs("div",{className:"blog-terminal-note",children:[d.jsx(lf,{className:"h-4 w-4 text-[#39ff14]"}),d.jsxs("span",{className:"mono text-xs text-zinc-400",children:["logbook://reflection/",n.slug]})]}),d.jsx("div",{className:"markdown-body markdown-body--feature",children:d.jsx(N5,{children:n.contentMarkdown})})]})]}),d.jsxs("aside",{className:"space-y-5",children:[d.jsx("div",{className:"glass-card",children:d.jsxs("div",{className:"glass-card__inner",children:[d.jsx("h2",{className:"text-xl font-semibold text-white",children:"近期文章"}),d.jsx("div",{className:"space-y-4",children:s.map(l=>d.jsxs(Xr,{to:`/blog/${l.slug}`,className:"block rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#39ff1450] hover:bg-[#39ff1408]",children:[d.jsx("p",{className:"mono text-[0.7rem] uppercase tracking-[0.2em] text-[#8af7fe]",children:l.category}),d.jsx("h3",{className:"mt-2 font-semibold text-white",children:l.title}),d.jsx("p",{className:"mt-2 text-sm leading-6 text-zinc-400",children:l.excerpt})]},l.slug))})]})}),d.jsx("div",{className:"glass-card",children:d.jsxs("div",{className:"glass-card__inner",children:[d.jsx("h2",{className:"text-xl font-semibold text-white",children:"分類"}),d.jsx("ul",{className:"space-y-3",children:g1.map(l=>d.jsxs("li",{className:"flex items-center justify-between rounded-lg border border-[#39ff1424] bg-[#39ff1408] px-4 py-3",children:[d.jsxs("span",{className:"inline-flex items-center gap-2 text-sm text-zinc-200",children:[d.jsx(x2,{className:"h-4 w-4 text-[#39ff14]"}),l.name]}),d.jsx("span",{className:"mono text-xs text-zinc-400",children:l.count})]},l.slug))})]})})]})]}),d.jsx(Vb,{postSlug:n.slug})]})}const Fa="/cv/eric-chuang-cv.pdf";function L5(){return d.jsxs(d.Fragment,{children:[d.jsx(Ln,{subtitle:"CV",title:"$ open ~/cv/eric-chuang.pdf",children:d.jsx("div",{className:"max-w-4xl space-y-4 text-base leading-8 text-zinc-300",children:d.jsx("p",{children:"這裡放的是我目前的履歷版本，方便直接預覽、下載，或用新分頁開啟。"})})}),d.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]",children:[d.jsx("section",{className:"glass-card overflow-hidden",children:d.jsxs("div",{className:"glass-card__inner",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]",children:"Resume Preview"}),d.jsx("h2",{className:"mt-2 text-2xl font-semibold text-white",children:"莊冠霖 / Eric Chuang"})]}),d.jsxs("div",{className:"flex flex-wrap gap-3",children:[d.jsxs("a",{href:Fa,target:"_blank",rel:"noopener noreferrer",className:"terminal-button terminal-button--primary",children:[d.jsx(sr,{className:"h-4 w-4"}),"open pdf"]}),d.jsxs("a",{href:Fa,download:!0,className:"terminal-button terminal-button--ghost",children:[d.jsx(Wy,{className:"h-4 w-4"}),"download"]})]})]}),d.jsx("div",{className:"overflow-hidden rounded-2xl border border-[#39ff1420] bg-[#02070d]",children:d.jsx("iframe",{src:Fa,title:"Eric CV PDF",className:"h-[72vh] min-h-[640px] w-full"})})]})}),d.jsx("aside",{className:"space-y-5",children:d.jsx("div",{className:"glass-card",children:d.jsxs("div",{className:"glass-card__inner",children:[d.jsx("p",{className:"mono text-xs uppercase tracking-[0.22em] text-[#8af7fe]",children:"File Info"}),d.jsx("div",{className:"space-y-3 rounded-2xl border border-[#39ff1420] bg-[#39ff1408] p-4",children:d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-2xl border border-[#39ff1420] bg-white/5 text-zinc-100",children:d.jsx(rf,{className:"h-5 w-5"})}),d.jsxs("div",{children:[d.jsx("p",{className:"font-semibold text-white",children:"eric-chuang-cv.pdf"}),d.jsx("p",{className:"text-sm text-zinc-400",children:"Portable resume file"})]})]})})]})})})]})]})}function j5(){return d.jsxs("div",{className:"relative min-h-screen overflow-x-hidden font-sans text-zinc-100 selection:bg-[#39ff1455] selection:text-white",children:[d.jsxs("div",{className:"pointer-events-none fixed inset-0 -z-10 overflow-hidden",children:[d.jsx("div",{className:"absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-[#39ff1410] blur-[120px]"}),d.jsx("div",{className:"absolute right-[-5rem] top-32 h-80 w-80 rounded-full bg-[#3df2ff10] blur-[130px]"}),d.jsx("div",{className:"absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-[#39ff140e] blur-[140px]"})]}),d.jsx(w2,{}),d.jsx("main",{className:"mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-40 sm:px-8 sm:pt-44 lg:px-12",children:d.jsxs(Kk,{children:[d.jsx(dt,{path:"/",element:d.jsx(jT,{})}),d.jsx(dt,{path:"/about",element:d.jsx(VT,{})}),d.jsx(dt,{path:"/projects",element:d.jsx(zT,{})}),d.jsx(dt,{path:"/services",element:d.jsx(GT,{})}),d.jsx(dt,{path:"/articles",element:d.jsx(Nu,{to:"/blog",replace:!0})}),d.jsx(dt,{path:"/blog",element:d.jsx(_b,{})}),d.jsx(dt,{path:"/blog/admin",element:d.jsx(Nu,{to:"/blog",replace:!0})}),d.jsx(dt,{path:"/blog/:slug",element:d.jsx(R5,{})}),d.jsx(dt,{path:"/certifications",element:d.jsx(HT,{})}),d.jsx(dt,{path:"/cv",element:d.jsx(L5,{})}),d.jsx(dt,{path:"/contact",element:d.jsx(UT,{})})]})}),d.jsx(S2,{})]})}Oa.createRoot(document.getElementById("root")).render(d.jsx(nl.StrictMode,{children:d.jsx(t2,{children:d.jsx(j5,{})})}));
