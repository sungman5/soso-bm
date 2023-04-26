(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{5182:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clientHookInServerComponentError=function(e){},(0,r(2648).Z)(r(7294)),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1414:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSearchParams=function(){l.clientHookInServerComponentError("useSearchParams");let e=n.useContext(u.SearchParamsContext),t=n.useMemo(()=>e?new d(e):null,[e]);return t},t.usePathname=function(){return l.clientHookInServerComponentError("usePathname"),n.useContext(u.PathnameContext)},Object.defineProperty(t,"ServerInsertedHTMLContext",{enumerable:!0,get:function(){return a.ServerInsertedHTMLContext}}),Object.defineProperty(t,"useServerInsertedHTML",{enumerable:!0,get:function(){return a.useServerInsertedHTML}}),t.useRouter=function(){l.clientHookInServerComponentError("useRouter");let e=n.useContext(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e},t.useSelectedLayoutSegments=p,t.useSelectedLayoutSegment=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children";l.clientHookInServerComponentError("useSelectedLayoutSegment");let t=p(e);return 0===t.length?null:t[0]},Object.defineProperty(t,"redirect",{enumerable:!0,get:function(){return i.redirect}}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return s.notFound}});var n=r(7294),o=r(4224),u=r(8463),l=r(5182),a=r(3014),i=r(8781),s=r(8147);let f=Symbol("internal for urlsearchparams readonly");function c(){return Error("ReadonlyURLSearchParams cannot be modified")}class d{[Symbol.iterator](){return this[f][Symbol.iterator]()}append(){throw c()}delete(){throw c()}set(){throw c()}sort(){throw c()}constructor(e){this[f]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children";l.clientHookInServerComponentError("useSelectedLayoutSegments");let{tree:t}=n.useContext(o.LayoutRouterContext);return function e(t,r){let n,o=!(arguments.length>2)||void 0===arguments[2]||arguments[2],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(o)n=t[1][r];else{var l;let e=t[1];n=null!=(l=e.children)?l:Object.values(e)[0]}if(!n)return u;let a=n[0],i=Array.isArray(a)?a[1]:a;return i?(u.push(i),e(n,r,!1,u)):u}(t,e)}t.ReadonlyURLSearchParams=d,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.notFound=function(){let e=Error(r);throw e.digest=r,e},t.isNotFoundError=function(e){return(null==e?void 0:e.digest)===r};let r="NEXT_NOT_FOUND";("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8781:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.redirect=function(e){let t=Error(r);throw t.digest="".concat(r,";").concat(e),t},t.isRedirectError=n,t.getURLFromRedirectError=function(e){return n(e)?e.digest.slice(r.length+1):null};let r="NEXT_REDIRECT";function n(e){return"string"==typeof(null==e?void 0:e.digest)&&e.digest.startsWith(r+";")&&e.digest.length>r.length+1}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,u=n(r(7294)),l=r(4532),a=r(3353),i=r(1410),s=r(9064),f=r(370),c=r(9955),d=r(4224),p=r(508),h=r(1516),v=r(4266);let y=new Set;function b(e,t,r,n,o){if(o||a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,u=t+"%"+r+"%"+o;if(y.has(u))return;y.add(u)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}let _=u.default.forwardRef(function(e,t){let r,n;let{href:i,as:y,children:_,prefetch:m,passHref:C,replace:M,shallow:S,scroll:j,locale:E,onClick:P,onMouseEnter:O,onTouchStart:x,legacyBehavior:L=!1}=e,k=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=_,L&&("string"==typeof r||"number"==typeof r)&&(r=u.default.createElement("a",null,r));let I=!1!==m,R=u.default.useContext(c.RouterContext),T=u.default.useContext(d.AppRouterContext),w=null!=R?R:T,H=!R,{href:A,as:N}=u.default.useMemo(()=>{if(!R){let e=g(i);return{href:e,as:y?g(y):e}}let[e,t]=l.resolveHref(R,i,!0);return{href:e,as:y?l.resolveHref(R,y):t||e}},[R,i,y]),U=u.default.useRef(A),D=u.default.useRef(N);L&&(n=u.default.Children.only(r));let F=L?n&&"object"==typeof n&&n.ref:t,[K,Z,B]=p.useIntersection({rootMargin:"200px"}),X=u.default.useCallback(e=>{(D.current!==N||U.current!==A)&&(B(),D.current=N,U.current=A),K(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[N,F,A,B,K]);u.default.useEffect(()=>{w&&Z&&I&&b(w,A,N,{locale:E},H)},[N,A,Z,E,I,null==R?void 0:R.locale,w,H]);let q={ref:X,onClick(e){L||"function"!=typeof P||P(e),L&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),w&&!e.defaultPrevented&&function(e,t,r,n,o,l,i,s,f,c){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!a.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:s,scroll:i}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!c})};f?u.default.startTransition(h):h()}(e,w,A,N,M,S,j,E,H,I)},onMouseEnter(e){L||"function"!=typeof O||O(e),L&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),w&&(I||!H)&&b(w,A,N,{locale:E,priority:!0,bypassPrefetchedCheck:!0},H)},onTouchStart(e){L||"function"!=typeof x||x(e),L&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),w&&(I||!H)&&b(w,A,N,{locale:E,priority:!0,bypassPrefetchedCheck:!0},H)}};if(s.isAbsoluteUrl(N))q.href=N;else if(!L||C||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(N,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);q.href=t||v.addBasePath(f.addLocale(N,e,null==R?void 0:R.defaultLocale))}return L?u.default.cloneElement(n,q):u.default.createElement("a",Object.assign({},k,q),r)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:i}=e,s=i||!u,[f,c]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(u){if(s||f)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:u,elements:o},a.push(r),l.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!f){let e=o.requestIdleCallback(()=>c(!0));return()=>o.cancelIdleCallback(e)}},[s,r,t,f,d.current]);let h=n.useCallback(()=>{c(!1)},[]);return[p,f,h]};var n=r(7294),o=r(29);let u="function"==typeof IntersectionObserver,l=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3014:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useServerInsertedHTML=function(e){let t=n.useContext(o);t&&t(e)},t.ServerInsertedHTMLContext=void 0;var n=(0,r(1598).Z)(r(7294));let o=n.default.createContext(null);t.ServerInsertedHTMLContext=o},9008:function(e,t,r){e.exports=r(2636)},1664:function(e,t,r){e.exports=r(5569)},9332:function(e,t,r){e.exports=r(1414)},4298:function(e,t,r){r(5442)}}]);