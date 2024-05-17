/*!
  Highlight.js v11.9.0 (git: b7ec4bfafc)
  (c) 2006-2024 undefined and other contributors
  License: BSD-3-Clause
 */
  var hljs=function(){"use strict";function e(t){
    return t instanceof Map?t.clear=t.delete=t.set=()=>{
    throw Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=()=>{
    throw Error("set is read-only")
    }),Object.freeze(t),Object.getOwnPropertyNames(t).forEach((n=>{
    const i=t[n],s=typeof i;"object"!==s&&"function"!==s||Object.isFrozen(i)||e(i)
    })),t}class t{constructor(e){
    void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
    ignoreMatch(){this.isMatchIgnored=!0}}function n(e){
    return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
    }function i(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
    ;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const s=e=>!!e.scope
    ;class o{constructor(e,t){
    this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
    this.buffer+=n(e)}openNode(e){if(!s(e))return;const t=((e,{prefix:t})=>{
    if(e.startsWith("language:"))return e.replace("language:","language-")
    ;if(e.includes(".")){const n=e.split(".")
    ;return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")
    }return`${t}${e}`})(e.scope,{prefix:this.classPrefix});this.span(t)}
    closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
    this.buffer+=`<span class="${e}">`}}const r=(e={})=>{const t={children:[]}
    ;return Object.assign(t,e),t};class a{constructor(){
    this.rootNode=r(),this.stack=[this.rootNode]}get top(){
    return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
    this.top.children.push(e)}openNode(e){const t=r({scope:e})
    ;this.add(t),this.stack.push(t)}closeNode(){
    if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
    for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
    walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
    return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
    t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
    "string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
    a._collapse(e)})))}}class c extends a{constructor(e){super(),this.options=e}
    addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){
    this.closeNode()}__addSublanguage(e,t){const n=e.root
    ;t&&(n.scope="language:"+t),this.add(n)}toHTML(){
    return new o(this,this.options).value()}finalize(){
    return this.closeAllNodes(),!0}}function l(e){
    return e?"string"==typeof e?e:e.source:null}function g(e){return h("(?=",e,")")}
    function u(e){return h("(?:",e,")*")}function d(e){return h("(?:",e,")?")}
    function h(...e){return e.map((e=>l(e))).join("")}function f(...e){const t=(e=>{
    const t=e[e.length-1]
    ;return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}
    })(e);return"("+(t.capture?"":"?:")+e.map((e=>l(e))).join("|")+")"}
    function p(e){return RegExp(e.toString()+"|").exec("").length-1}
    const b=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
    ;function m(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n
    ;let i=l(e),s="";for(;i.length>0;){const e=b.exec(i);if(!e){s+=i;break}
    s+=i.substring(0,e.index),
    i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?s+="\\"+(Number(e[1])+t):(s+=e[0],
    "("===e[0]&&n++)}return s})).map((e=>`(${e})`)).join(t)}
    const E="[a-zA-Z]\\w*",x="[a-zA-Z_]\\w*",w="\\b\\d+(\\.\\d+)?",y="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",_="\\b(0b[01]+)",O={
    begin:"\\\\[\\s\\S]",relevance:0},v={scope:"string",begin:"'",end:"'",
    illegal:"\\n",contains:[O]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",
    contains:[O]},N=(e,t,n={})=>{const s=i({scope:"comment",begin:e,end:t,
    contains:[]},n);s.contains.push({scope:"doctag",
    begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
    ;const o=f("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
    ;return s.contains.push({begin:h(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s
    },S=N("//","$"),M=N("/\\*","\\*/"),R=N("#","$");var j=Object.freeze({
    __proto__:null,APOS_STRING_MODE:v,BACKSLASH_ESCAPE:O,BINARY_NUMBER_MODE:{
    scope:"number",begin:_,relevance:0},BINARY_NUMBER_RE:_,COMMENT:N,
    C_BLOCK_COMMENT_MODE:M,C_LINE_COMMENT_MODE:S,C_NUMBER_MODE:{scope:"number",
    begin:y,relevance:0},C_NUMBER_RE:y,END_SAME_AS_BEGIN:e=>Object.assign(e,{
    "on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
    t.data._beginMatch!==e[1]&&t.ignoreMatch()}}),HASH_COMMENT_MODE:R,IDENT_RE:E,
    MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:{begin:"\\.\\s*"+x,relevance:0},
    NUMBER_MODE:{scope:"number",begin:w,relevance:0},NUMBER_RE:w,
    PHRASAL_WORDS_MODE:{
    begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },QUOTE_STRING_MODE:k,REGEXP_MODE:{scope:"regexp",begin:/\/(?=[^/\n]*\/)/,
    end:/\/[gimuy]*/,contains:[O,{begin:/\[/,end:/\]/,relevance:0,contains:[O]}]},
    RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG:(e={})=>{const t=/^#![ ]*\//
    ;return e.binary&&(e.begin=h(t,/.*\b/,e.binary,/\b.*/)),i({scope:"meta",begin:t,
    end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},
    TITLE_MODE:{scope:"title",begin:E,relevance:0},UNDERSCORE_IDENT_RE:x,
    UNDERSCORE_TITLE_MODE:{scope:"title",begin:x,relevance:0}});function A(e,t){
    "."===e.input[e.index-1]&&t.ignoreMatch()}function I(e,t){
    void 0!==e.className&&(e.scope=e.className,delete e.className)}function T(e,t){
    t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
    e.__beforeBegin=A,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
    void 0===e.relevance&&(e.relevance=0))}function L(e,t){
    Array.isArray(e.illegal)&&(e.illegal=f(...e.illegal))}function B(e,t){
    if(e.match){
    if(e.begin||e.end)throw Error("begin & end are not supported with match")
    ;e.begin=e.match,delete e.match}}function P(e,t){
    void 0===e.relevance&&(e.relevance=1)}const D=(e,t)=>{if(!e.beforeMatch)return
    ;if(e.starts)throw Error("beforeMatch cannot be used with starts")
    ;const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]
    })),e.keywords=n.keywords,e.begin=h(n.beforeMatch,g(n.begin)),e.starts={
    relevance:0,contains:[Object.assign(n,{endsParent:!0})]
    },e.relevance=0,delete n.beforeMatch
    },H=["of","and","for","in","not","or","if","then","parent","list","value"],C="keyword"
    ;function $(e,t,n=C){const i=Object.create(null)
    ;return"string"==typeof e?s(n,e.split(" ")):Array.isArray(e)?s(n,e):Object.keys(e).forEach((n=>{
    Object.assign(i,$(e[n],t,n))})),i;function s(e,n){
    t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
    ;i[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,t){
    return t?Number(t):(e=>H.includes(e.toLowerCase()))(e)?0:1}const z={},W=e=>{
    console.error(e)},X=(e,...t)=>{console.log("WARN: "+e,...t)},G=(e,t)=>{
    z[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),z[`${e}/${t}`]=!0)
    },K=Error();function F(e,t,{key:n}){let i=0;const s=e[n],o={},r={}
    ;for(let e=1;e<=t.length;e++)r[e+i]=s[e],o[e+i]=!0,i+=p(t[e-1])
    ;e[n]=r,e[n]._emit=o,e[n]._multi=!0}function Z(e){(e=>{
    e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
    delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
    _wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
    }),(e=>{if(Array.isArray(e.begin)){
    if(e.skip||e.excludeBegin||e.returnBegin)throw W("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
    K
    ;if("object"!=typeof e.beginScope||null===e.beginScope)throw W("beginScope must be object"),
    K;F(e,e.begin,{key:"beginScope"}),e.begin=m(e.begin,{joinWith:""})}})(e),(e=>{
    if(Array.isArray(e.end)){
    if(e.skip||e.excludeEnd||e.returnEnd)throw W("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
    K
    ;if("object"!=typeof e.endScope||null===e.endScope)throw W("endScope must be object"),
    K;F(e,e.end,{key:"endScope"}),e.end=m(e.end,{joinWith:""})}})(e)}function V(e){
    function t(t,n){
    return RegExp(l(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))
    }class n{constructor(){
    this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
    addRule(e,t){
    t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
    this.matchAt+=p(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
    ;const e=this.regexes.map((e=>e[1]));this.matcherRe=t(m(e,{joinWith:"|"
    }),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
    ;const t=this.matcherRe.exec(e);if(!t)return null
    ;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n]
    ;return t.splice(0,n),Object.assign(t,i)}}class s{constructor(){
    this.rules=[],this.multiRegexes=[],
    this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
    if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n
    ;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
    t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
    return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
    this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
    const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
    ;let n=t.exec(e)
    ;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
    const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
    return n&&(this.regexIndex+=n.position+1,
    this.regexIndex===this.count&&this.considerAll()),n}}
    if(e.compilerExtensions||(e.compilerExtensions=[]),
    e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
    ;return e.classNameAliases=i(e.classNameAliases||{}),function n(o,r){const a=o
    ;if(o.isCompiled)return a
    ;[I,B,Z,D].forEach((e=>e(o,r))),e.compilerExtensions.forEach((e=>e(o,r))),
    o.__beforeBegin=null,[T,L,P].forEach((e=>e(o,r))),o.isCompiled=!0;let c=null
    ;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),
    c=o.keywords.$pattern,
    delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=$(o.keywords,e.case_insensitive)),
    a.keywordPatternRe=t(c,!0),
    r&&(o.begin||(o.begin=/\B|\b/),a.beginRe=t(a.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),
    o.end&&(a.endRe=t(a.end)),
    a.terminatorEnd=l(a.end)||"",o.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),
    o.illegal&&(a.illegalRe=t(o.illegal)),
    o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>i(e,{
    variants:null},t)))),e.cachedVariants?e.cachedVariants:q(e)?i(e,{
    starts:e.starts?i(e.starts):null
    }):Object.isFrozen(e)?i(e):e))("self"===e?o:e)))),o.contains.forEach((e=>{n(e,a)
    })),o.starts&&n(o.starts,r),a.matcher=(e=>{const t=new s
    ;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
    }))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
    }),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(a),a}(e)}function q(e){
    return!!e&&(e.endsWithParent||q(e.starts))}class J extends Error{
    constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}
    const Y=n,Q=i,ee=Symbol("nomatch"),te=n=>{
    const i=Object.create(null),s=Object.create(null),o=[];let r=!0
    ;const a="Could not find the language '{}', did you forget to load/include a language module?",l={
    disableAutodetect:!0,name:"Plain text",contains:[]};let p={
    ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
    languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
    cssSelector:"pre code",languages:null,__emitter:c};function b(e){
    return p.noHighlightRe.test(e)}function m(e,t,n){let i="",s=""
    ;"object"==typeof t?(i=e,
    n=t.ignoreIllegals,s=t.language):(G("10.7.0","highlight(lang, code, ...args) has been deprecated."),
    G("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
    s=e,i=t),void 0===n&&(n=!0);const o={code:i,language:s};N("before:highlight",o)
    ;const r=o.result?o.result:E(o.language,o.code,n)
    ;return r.code=o.code,N("after:highlight",r),r}function E(e,n,s,o){
    const c=Object.create(null);function l(){if(!N.keywords)return void M.addText(R)
    ;let e=0;N.keywordPatternRe.lastIndex=0;let t=N.keywordPatternRe.exec(R),n=""
    ;for(;t;){n+=R.substring(e,t.index)
    ;const s=_.case_insensitive?t[0].toLowerCase():t[0],o=(i=s,N.keywords[i]);if(o){
    const[e,i]=o
    ;if(M.addText(n),n="",c[s]=(c[s]||0)+1,c[s]<=7&&(j+=i),e.startsWith("_"))n+=t[0];else{
    const n=_.classNameAliases[e]||e;u(t[0],n)}}else n+=t[0]
    ;e=N.keywordPatternRe.lastIndex,t=N.keywordPatternRe.exec(R)}var i
    ;n+=R.substring(e),M.addText(n)}function g(){null!=N.subLanguage?(()=>{
    if(""===R)return;let e=null;if("string"==typeof N.subLanguage){
    if(!i[N.subLanguage])return void M.addText(R)
    ;e=E(N.subLanguage,R,!0,S[N.subLanguage]),S[N.subLanguage]=e._top
    }else e=x(R,N.subLanguage.length?N.subLanguage:null)
    ;N.relevance>0&&(j+=e.relevance),M.__addSublanguage(e._emitter,e.language)
    })():l(),R=""}function u(e,t){
    ""!==e&&(M.startScope(t),M.addText(e),M.endScope())}function d(e,t){let n=1
    ;const i=t.length-1;for(;n<=i;){if(!e._emit[n]){n++;continue}
    const i=_.classNameAliases[e[n]]||e[n],s=t[n];i?u(s,i):(R=s,l(),R=""),n++}}
    function h(e,t){
    return e.scope&&"string"==typeof e.scope&&M.openNode(_.classNameAliases[e.scope]||e.scope),
    e.beginScope&&(e.beginScope._wrap?(u(R,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
    R=""):e.beginScope._multi&&(d(e.beginScope,t),R="")),N=Object.create(e,{parent:{
    value:N}}),N}function f(e,n,i){let s=((e,t)=>{const n=e&&e.exec(t)
    ;return n&&0===n.index})(e.endRe,i);if(s){if(e["on:end"]){const i=new t(e)
    ;e["on:end"](n,i),i.isMatchIgnored&&(s=!1)}if(s){
    for(;e.endsParent&&e.parent;)e=e.parent;return e}}
    if(e.endsWithParent)return f(e.parent,n,i)}function b(e){
    return 0===N.matcher.regexIndex?(R+=e[0],1):(T=!0,0)}function m(e){
    const t=e[0],i=n.substring(e.index),s=f(N,e,i);if(!s)return ee;const o=N
    ;N.endScope&&N.endScope._wrap?(g(),
    u(t,N.endScope._wrap)):N.endScope&&N.endScope._multi?(g(),
    d(N.endScope,e)):o.skip?R+=t:(o.returnEnd||o.excludeEnd||(R+=t),
    g(),o.excludeEnd&&(R=t));do{
    N.scope&&M.closeNode(),N.skip||N.subLanguage||(j+=N.relevance),N=N.parent
    }while(N!==s.parent);return s.starts&&h(s.starts,e),o.returnEnd?0:t.length}
    let w={};function y(i,o){const a=o&&o[0];if(R+=i,null==a)return g(),0
    ;if("begin"===w.type&&"end"===o.type&&w.index===o.index&&""===a){
    if(R+=n.slice(o.index,o.index+1),!r){const t=Error(`0 width match regex (${e})`)
    ;throw t.languageName=e,t.badRule=w.rule,t}return 1}
    if(w=o,"begin"===o.type)return(e=>{
    const n=e[0],i=e.rule,s=new t(i),o=[i.__beforeBegin,i["on:begin"]]
    ;for(const t of o)if(t&&(t(e,s),s.isMatchIgnored))return b(n)
    ;return i.skip?R+=n:(i.excludeBegin&&(R+=n),
    g(),i.returnBegin||i.excludeBegin||(R=n)),h(i,e),i.returnBegin?0:n.length})(o)
    ;if("illegal"===o.type&&!s){
    const e=Error('Illegal lexeme "'+a+'" for mode "'+(N.scope||"<unnamed>")+'"')
    ;throw e.mode=N,e}if("end"===o.type){const e=m(o);if(e!==ee)return e}
    if("illegal"===o.type&&""===a)return 1
    ;if(I>1e5&&I>3*o.index)throw Error("potential infinite loop, way more iterations than matches")
    ;return R+=a,a.length}const _=O(e)
    ;if(!_)throw W(a.replace("{}",e)),Error('Unknown language: "'+e+'"')
    ;const v=V(_);let k="",N=o||v;const S={},M=new p.__emitter(p);(()=>{const e=[]
    ;for(let t=N;t!==_;t=t.parent)t.scope&&e.unshift(t.scope)
    ;e.forEach((e=>M.openNode(e)))})();let R="",j=0,A=0,I=0,T=!1;try{
    if(_.__emitTokens)_.__emitTokens(n,M);else{for(N.matcher.considerAll();;){
    I++,T?T=!1:N.matcher.considerAll(),N.matcher.lastIndex=A
    ;const e=N.matcher.exec(n);if(!e)break;const t=y(n.substring(A,e.index),e)
    ;A=e.index+t}y(n.substring(A))}return M.finalize(),k=M.toHTML(),{language:e,
    value:k,relevance:j,illegal:!1,_emitter:M,_top:N}}catch(t){
    if(t.message&&t.message.includes("Illegal"))return{language:e,value:Y(n),
    illegal:!0,relevance:0,_illegalBy:{message:t.message,index:A,
    context:n.slice(A-100,A+100),mode:t.mode,resultSoFar:k},_emitter:M};if(r)return{
    language:e,value:Y(n),illegal:!1,relevance:0,errorRaised:t,_emitter:M,_top:N}
    ;throw t}}function x(e,t){t=t||p.languages||Object.keys(i);const n=(e=>{
    const t={value:Y(e),illegal:!1,relevance:0,_top:l,_emitter:new p.__emitter(p)}
    ;return t._emitter.addText(e),t})(e),s=t.filter(O).filter(k).map((t=>E(t,e,!1)))
    ;s.unshift(n);const o=s.sort(((e,t)=>{
    if(e.relevance!==t.relevance)return t.relevance-e.relevance
    ;if(e.language&&t.language){if(O(e.language).supersetOf===t.language)return 1
    ;if(O(t.language).supersetOf===e.language)return-1}return 0})),[r,a]=o,c=r
    ;return c.secondBest=a,c}function w(e){let t=null;const n=(e=>{
    let t=e.className+" ";t+=e.parentNode?e.parentNode.className:""
    ;const n=p.languageDetectRe.exec(t);if(n){const t=O(n[1])
    ;return t||(X(a.replace("{}",n[1])),
    X("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}
    return t.split(/\s+/).find((e=>b(e)||O(e)))})(e);if(b(n))return
    ;if(N("before:highlightElement",{el:e,language:n
    }),e.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e)
    ;if(e.children.length>0&&(p.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
    console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
    console.warn("The element with unescaped HTML:"),
    console.warn(e)),p.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML)
    ;t=e;const i=t.textContent,o=n?m(i,{language:n,ignoreIllegals:!0}):x(i)
    ;e.innerHTML=o.value,e.dataset.highlighted="yes",((e,t,n)=>{const i=t&&s[t]||n
    ;e.classList.add("hljs"),e.classList.add("language-"+i)
    })(e,n,o.language),e.result={language:o.language,re:o.relevance,
    relevance:o.relevance},o.secondBest&&(e.secondBest={
    language:o.secondBest.language,relevance:o.secondBest.relevance
    }),N("after:highlightElement",{el:e,result:o,text:i})}let y=!1;function _(){
    "loading"!==document.readyState?document.querySelectorAll(p.cssSelector).forEach(w):y=!0
    }function O(e){return e=(e||"").toLowerCase(),i[e]||i[s[e]]}
    function v(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
    s[e.toLowerCase()]=t}))}function k(e){const t=O(e)
    ;return t&&!t.disableAutodetect}function N(e,t){const n=e;o.forEach((e=>{
    e[n]&&e[n](t)}))}
    "undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
    y&&_()}),!1),Object.assign(n,{highlight:m,highlightAuto:x,highlightAll:_,
    highlightElement:w,
    highlightBlock:e=>(G("10.7.0","highlightBlock will be removed entirely in v12.0"),
    G("10.7.0","Please use highlightElement now."),w(e)),configure:e=>{p=Q(p,e)},
    initHighlighting:()=>{
    _(),G("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
    initHighlightingOnLoad:()=>{
    _(),G("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
    },registerLanguage:(e,t)=>{let s=null;try{s=t(n)}catch(t){
    if(W("Language definition for '{}' could not be registered.".replace("{}",e)),
    !r)throw t;W(t),s=l}
    s.name||(s.name=e),i[e]=s,s.rawDefinition=t.bind(null,n),s.aliases&&v(s.aliases,{
    languageName:e})},unregisterLanguage:e=>{delete i[e]
    ;for(const t of Object.keys(s))s[t]===e&&delete s[t]},
    listLanguages:()=>Object.keys(i),getLanguage:O,registerAliases:v,
    autoDetection:k,inherit:Q,addPlugin:e=>{(e=>{
    e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{
    e["before:highlightBlock"](Object.assign({block:t.el},t))
    }),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{
    e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),o.push(e)},
    removePlugin:e=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}),n.debugMode=()=>{
    r=!1},n.safeMode=()=>{r=!0},n.versionString="11.9.0",n.regex={concat:h,
    lookahead:g,either:f,optional:d,anyNumberOfTimes:u}
    ;for(const t in j)"object"==typeof j[t]&&e(j[t]);return Object.assign(n,j),n
    },ne=te({});return ne.newInstance=()=>te({}),ne}()
    ;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);/*! `asciidoc` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a=[{
    className:"strong",begin:/\*{2}([^\n]+?)\*{2}/},{className:"strong",
    begin:n.concat(/\*\*/,/((\*(?!\*)|\\[^\n]|[^*\n\\])+\n)+/,/(\*(?!\*)|\\[^\n]|[^*\n\\])*/,/\*\*/),
    relevance:0},{className:"strong",begin:/\B\*(\S|\S[^\n]*?\S)\*(?!\w)/},{
    className:"strong",begin:/\*[^\s]([^\n]+\n)+([^\n]+)\*/}],s=[{
    className:"emphasis",begin:/_{2}([^\n]+?)_{2}/},{className:"emphasis",
    begin:n.concat(/__/,/((_(?!_)|\\[^\n]|[^_\n\\])+\n)+/,/(_(?!_)|\\[^\n]|[^_\n\\])*/,/__/),
    relevance:0},{className:"emphasis",begin:/\b_(\S|\S[^\n]*?\S)_(?!\w)/},{
    className:"emphasis",begin:/_[^\s]([^\n]+\n)+([^\n]+)_/},{className:"emphasis",
    begin:"\\B'(?!['\\s])",end:"(\\n{2}|')",contains:[{begin:"\\\\'\\w",relevance:0
    }],relevance:0}];return{name:"AsciiDoc",aliases:["adoc"],
    contains:[e.COMMENT("^/{4,}\\n","\\n/{4,}$",{relevance:10
    }),e.COMMENT("^//","$",{relevance:0}),{className:"title",begin:"^\\.\\w.*$"},{
    begin:"^[=\\*]{4,}\\n",end:"\\n^[=\\*]{4,}$",relevance:10},{className:"section",
    relevance:10,variants:[{begin:"^(={1,6})[ \t].+?([ \t]\\1)?$"},{
    begin:"^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$"}]},{className:"meta",
    begin:"^:.+?:",end:"\\s",excludeEnd:!0,relevance:10},{className:"meta",
    begin:"^\\[.+?\\]$",relevance:0},{className:"quote",begin:"^_{4,}\\n",
    end:"\\n_{4,}$",relevance:10},{className:"code",begin:"^[\\-\\.]{4,}\\n",
    end:"\\n[\\-\\.]{4,}$",relevance:10},{begin:"^\\+{4,}\\n",end:"\\n\\+{4,}$",
    contains:[{begin:"<",end:">",subLanguage:"xml",relevance:0}],relevance:10},{
    className:"bullet",begin:"^(\\*+|-+|\\.+|[^\\n]+?::)\\s+"},{className:"symbol",
    begin:"^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",relevance:10},{
    begin:/\\[*_`]/},{begin:/\\\\\*{2}[^\n]*?\*{2}/},{begin:/\\\\_{2}[^\n]*_{2}/},{
    begin:/\\\\`{2}[^\n]*`{2}/},{begin:/[:;}][*_`](?![*_`])/},...a,...s,{
    className:"string",variants:[{begin:"``.+?''"},{begin:"`.+?'"}]},{
    className:"code",begin:/`{2}/,end:/(\n{2}|`{2})/},{className:"code",
    begin:"(`.+?`|\\+.+?\\+)",relevance:0},{className:"code",begin:"^[ \\t]",
    end:"$",relevance:0},{begin:"^'{3,}[ \\t]*$",relevance:10},{
    begin:"(link:)?(http|https|ftp|file|irc|image:?):\\S+?\\[[^[]*?\\]",
    returnBegin:!0,contains:[{begin:"(link|image:?):",relevance:0},{
    className:"link",begin:"\\w",end:"[^\\[]+",relevance:0},{className:"string",
    begin:"\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0,relevance:0}],relevance:10}]
    }}})();hljs.registerLanguage("asciidoc",e)})();/*! `bash` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const s=e.regex,t={},n={begin:/\$\{/,
    end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{
    className:"variable",variants:[{
    begin:s.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},n]});const a={
    className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]
    },i=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),c={
    begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,
    end:/(\w+)/,className:"string"})]}},o={className:"string",begin:/"/,end:/"/,
    contains:[e.BACKSLASH_ESCAPE,t,a]};a.contains.push(o);const r={begin:/\$?\(\(/,
    end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]
    },l=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
    }),m={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
    contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
    name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,
    keyword:["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],
    literal:["true","false"],
    built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]
    },contains:[l,e.SHEBANG(),m,r,i,c,{match:/(\/[a-z._-]+)+/},o,{match:/\\"/},{
    className:"string",begin:/'/,end:/'/},{match:/\\'/},t]}}})()
    ;hljs.registerLanguage("bash",e)})();/*! `c` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,t=e.COMMENT("//","$",{
    contains:[{begin:/\\\n/}]
    }),s="decltype\\(auto\\)",a="[a-zA-Z_]\\w*::",r="("+s+"|"+n.optional(a)+"[a-zA-Z_]\\w*"+n.optional("<[^<>]+>")+")",i={
    className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{
    match:/\batomic_[a-z]{3,6}\b/}]},l={className:"string",variants:[{
    begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
    begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
    end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
    begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
    className:"number",variants:[{begin:"\\b(0b[01']+)"},{
    begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
    },{
    begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
    }],relevance:0},c={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
    keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
    },contains:[{begin:/\\\n/,relevance:0},e.inherit(l,{className:"string"}),{
    className:"string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},d={
    className:"title",begin:n.optional(a)+e.IDENT_RE,relevance:0
    },g=n.optional(a)+e.IDENT_RE+"\\s*\\(",u={
    keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],
    type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],
    literal:"true false NULL",
    built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
    },m=[c,i,t,e.C_BLOCK_COMMENT_MODE,o,l],_={variants:[{begin:/=/,end:/;/},{
    begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
    keywords:u,contains:m.concat([{begin:/\(/,end:/\)/,keywords:u,
    contains:m.concat(["self"]),relevance:0}]),relevance:0},p={
    begin:"("+r+"[\\*&\\s]+)+"+g,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
    keywords:u,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:s,keywords:u,relevance:0},{
    begin:g,returnBegin:!0,contains:[e.inherit(d,{className:"title.function"})],
    relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,
    keywords:u,relevance:0,contains:[t,e.C_BLOCK_COMMENT_MODE,l,o,i,{begin:/\(/,
    end:/\)/,keywords:u,relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,l,o,i]
    }]},i,t,e.C_BLOCK_COMMENT_MODE,c]};return{name:"C",aliases:["h"],keywords:u,
    disableAutodetect:!0,illegal:"</",contains:[].concat(_,p,m,[c,{
    begin:e.IDENT_RE+"::",keywords:u},{className:"class",
    beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{
    beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:c,
    strings:l,keywords:u}}}})();hljs.registerLanguage("c",e)})();/*! `cpp` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,a=e.COMMENT("//","$",{
    contains:[{begin:/\\\n/}]
    }),n="decltype\\(auto\\)",r="[a-zA-Z_]\\w*::",i="(?!struct)("+n+"|"+t.optional(r)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",s={
    className:"type",begin:"\\b[a-z\\d_]*_t\\b"},c={className:"string",variants:[{
    begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
    begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
    end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
    begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
    className:"number",variants:[{
    begin:"[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
    },{
    begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
    }],relevance:0},l={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
    keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
    },contains:[{begin:/\\\n/,relevance:0},e.inherit(c,{className:"string"}),{
    className:"string",begin:/<.*?>/},a,e.C_BLOCK_COMMENT_MODE]},u={
    className:"title",begin:t.optional(r)+e.IDENT_RE,relevance:0
    },d=t.optional(r)+e.IDENT_RE+"\\s*\\(",p={
    type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],
    keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],
    literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],
    _type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]
    },_={className:"function.dispatch",relevance:0,keywords:{
    _hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]
    },
    begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))
    },m=[_,l,s,a,e.C_BLOCK_COMMENT_MODE,o,c],f={variants:[{begin:/=/,end:/;/},{
    begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
    keywords:p,contains:m.concat([{begin:/\(/,end:/\)/,keywords:p,
    contains:m.concat(["self"]),relevance:0}]),relevance:0},g={className:"function",
    begin:"("+i+"[\\*&\\s]+)+"+d,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
    keywords:p,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:n,keywords:p,relevance:0},{
    begin:d,returnBegin:!0,contains:[u],relevance:0},{begin:/::/,relevance:0},{
    begin:/:/,endsWithParent:!0,contains:[c,o]},{relevance:0,match:/,/},{
    className:"params",begin:/\(/,end:/\)/,keywords:p,relevance:0,
    contains:[a,e.C_BLOCK_COMMENT_MODE,c,o,s,{begin:/\(/,end:/\)/,keywords:p,
    relevance:0,contains:["self",a,e.C_BLOCK_COMMENT_MODE,c,o,s]}]
    },s,a,e.C_BLOCK_COMMENT_MODE,l]};return{name:"C++",
    aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:p,illegal:"</",
    classNameAliases:{"function.dispatch":"built_in"},
    contains:[].concat(f,g,_,m,[l,{
    begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
    end:">",keywords:p,contains:["self",s]},{begin:e.IDENT_RE+"::",keywords:p},{
    match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],
    className:{1:"keyword",3:"title.class"}}])}}})();hljs.registerLanguage("cpp",e)
    })();/*! `css` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict"
    ;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video","defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],r=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),o=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),t=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),i=["align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","kerning","justify-content","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse()
    ;return n=>{const a=n.regex,l=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
    BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
    begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
    className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
    scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
    contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
    scope:"number",
    begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}
    }))(n),s=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE];return{name:"CSS",
    case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},
    classNameAliases:{keyframePosition:"selector-tag"},contains:[l.BLOCK_COMMENT,{
    begin:/-(webkit|moz|ms|o)-(?=[a-z])/},l.CSS_NUMBER_MODE,{
    className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{
    className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0
    },l.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{
    begin:":("+o.join("|")+")"},{begin:":(:)?("+t.join("|")+")"}]},l.CSS_VARIABLE,{
    className:"attribute",begin:"\\b("+i.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,
    contains:[l.BLOCK_COMMENT,l.HEXCOLOR,l.IMPORTANT,l.CSS_NUMBER_MODE,...s,{
    begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"
    },contains:[...s,{className:"string",begin:/[^)]/,endsWithParent:!0,
    excludeEnd:!0}]},l.FUNCTION_DISPATCH]},{begin:a.lookahead(/@/),end:"[{;]",
    relevance:0,illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/
    },{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{
    $pattern:/[a-z-]+/,keyword:"and or not only",attribute:r.join(" ")},contains:[{
    begin:/[a-z-]+(?=:)/,className:"attribute"},...s,l.CSS_NUMBER_MODE]}]},{
    className:"selector-tag",begin:"\\b("+e.join("|")+")\\b"}]}}})()
    ;hljs.registerLanguage("css",e)})();/*! `dart` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const n={className:"subst",variants:[{
    begin:"\\$[A-Za-z0-9_]+"}]},a={className:"subst",variants:[{begin:/\$\{/,
    end:/\}/}],keywords:"true false null this is new super"},t={className:"string",
    variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",
    illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",
    contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"""',end:'"""',
    contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:"'",end:"'",illegal:"\\n",
    contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"',end:'"',illegal:"\\n",
    contains:[e.BACKSLASH_ESCAPE,n,a]}]};a.contains=[e.C_NUMBER_MODE,t]
    ;const i=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],r=i.map((e=>e+"?"))
    ;return{name:"Dart",keywords:{
    keyword:["abstract","as","assert","async","await","base","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","interface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","sealed","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","when","while","with","yield"],
    built_in:i.concat(r).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),
    $pattern:/[A-Za-z][A-Za-z0-9_]*\??/},
    contains:[t,e.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0
    }),e.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",
    end:"$",relevance:0}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
    className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,
    contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]
    },e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}})()
    ;hljs.registerLanguage("dart",e)})();/*! `gradle` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>({name:"Gradle",case_insensitive:!0,
    keywords:["task","project","allprojects","subprojects","artifacts","buildscript","configurations","dependencies","repositories","sourceSets","description","delete","from","into","include","exclude","source","classpath","destinationDir","includes","options","sourceCompatibility","targetCompatibility","group","flatDir","doLast","doFirst","flatten","todir","fromdir","ant","def","abstract","break","case","catch","continue","default","do","else","extends","final","finally","for","if","implements","instanceof","native","new","private","protected","public","return","static","switch","synchronized","throw","throws","transient","try","volatile","while","strictfp","package","import","false","null","super","this","true","antlrtask","checkstyle","codenarc","copy","boolean","byte","char","class","double","float","int","interface","long","short","void","compile","runTime","file","fileTree","abs","any","append","asList","asWritable","call","collect","compareTo","count","div","dump","each","eachByte","eachFile","eachLine","every","find","findAll","flatten","getAt","getErr","getIn","getOut","getText","grep","immutable","inject","inspect","intersect","invokeMethods","isCase","join","leftShift","minus","multiply","newInputStream","newOutputStream","newPrintWriter","newReader","newWriter","next","plus","pop","power","previous","print","println","push","putAt","read","readBytes","readLines","reverse","reverseEach","round","size","sort","splitEachLine","step","subMap","times","toInteger","toList","tokenize","upto","waitForOrKill","withPrintWriter","withReader","withStream","withWriter","withWriterAppend","write","writeLine"],
    contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.REGEXP_MODE]
    })})();hljs.registerLanguage("gradle",e)})();/*! `graphql` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const a=e.regex;return{name:"GraphQL",
    aliases:["gql"],case_insensitive:!0,disableAutodetect:!1,keywords:{
    keyword:["query","mutation","subscription","type","input","schema","directive","interface","union","scalar","fragment","enum","on"],
    literal:["true","false","null"]},
    contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{
    scope:"punctuation",match:/[.]{3}/,relevance:0},{scope:"punctuation",
    begin:/[\!\(\)\:\=\[\]\{\|\}]{1}/,relevance:0},{scope:"variable",begin:/\$/,
    end:/\W/,excludeEnd:!0,relevance:0},{scope:"meta",match:/@\w+/,excludeEnd:!0},{
    scope:"symbol",begin:a.concat(/[_A-Za-z][_0-9A-Za-z]*/,a.lookahead(/\s*:/)),
    relevance:0}],illegal:[/[;<']/,/BEGIN/]}}})();hljs.registerLanguage("graphql",e)
    })();/*! `http` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const n="HTTP/([32]|1\\.[01])",a={
    className:"attribute",
    begin:e.regex.concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{
    contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",
    relevance:0}}]}},s=[a,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}
    }];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{
    begin:"^(?="+n+" \\d{3})",end:/$/,contains:[{className:"meta",begin:n},{
    className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,
    contains:s}},{begin:"(?=^[A-Z]+ (.*?) "+n+"$)",end:/$/,contains:[{
    className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{
    className:"meta",begin:n},{className:"keyword",begin:"[A-Z]+"}],starts:{
    end:/\b\B/,illegal:/\S/,contains:s}},e.inherit(a,{relevance:0})]}}})()
    ;hljs.registerLanguage("http",e)})();/*! `java` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict"
    ;var e="[0-9](_*[0-9])*",a=`\\.(${e})`,n="[0-9a-fA-F](_*[0-9a-fA-F])*",s={
    className:"number",variants:[{
    begin:`(\\b(${e})((${a})|\\.)?|(${a}))[eE][+-]?(${e})[fFdD]?\\b`},{
    begin:`\\b(${e})((${a})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${a})[fFdD]?\\b`
    },{begin:`\\b(${e})[fFdD]\\b`},{
    begin:`\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?(${e})[fFdD]?\\b`},{
    begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${n})[lL]?\\b`},{
    begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
    relevance:0};function t(e,a,n){return-1===n?"":e.replace(a,(s=>t(e,a,n-1)))}
    return e=>{
    const a=e.regex,n="[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",i=n+t("(?:<"+n+"~~~(?:\\s*,\\s*"+n+"~~~)*>)?",/~~~/g,2),r={
    keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],
    literal:["false","true","null"],
    type:["char","boolean","long","float","int","byte","short","double"],
    built_in:["super","this"]},l={className:"meta",begin:"@"+n,contains:[{
    begin:/\(/,end:/\)/,contains:["self"]}]},c={className:"params",begin:/\(/,
    end:/\)/,keywords:r,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0}
    ;return{name:"Java",aliases:["jsp"],keywords:r,illegal:/<\/|#/,
    contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
    relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{
    begin:/import java\.[a-z]+\./,keywords:"import",relevance:2
    },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,
    className:"string",contains:[e.BACKSLASH_ESCAPE]
    },e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
    match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,n],className:{
    1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{
    begin:[a.concat(/(?!else)/,n),/\s+/,n,/\s+/,/=(?!=)/],className:{1:"type",
    3:"variable",5:"operator"}},{begin:[/record/,/\s+/,n],className:{1:"keyword",
    3:"title.class"},contains:[c,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
    beginKeywords:"new throw return else",relevance:0},{
    begin:["(?:"+i+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{
    2:"title.function"},keywords:r,contains:[{className:"params",begin:/\(/,
    end:/\)/,keywords:r,relevance:0,
    contains:[l,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,s,e.C_BLOCK_COMMENT_MODE]
    },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},s,l]}}})()
    ;hljs.registerLanguage("java",e)})();/*! `javascript` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict"
    ;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],i=[].concat(r,t,s)
    ;return o=>{const l=o.regex,b=e,d={begin:/<[A-Za-z0-9\\._:-]+/,
    end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
    const a=e[0].length+e.index,t=e.input[a]
    ;if("<"===t||","===t)return void n.ignoreMatch();let s
    ;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
    ;return-1!==e.input.indexOf(a,n)})(e,{after:a})||n.ignoreMatch())
    ;const r=e.input.substring(a)
    ;((s=r.match(/^\s*=/))||(s=r.match(/^\s+extends\s+/))&&0===s.index)&&n.ignoreMatch()
    }},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c
    },u="[0-9](_?[0-9])*",m=`\\.(${u})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={
    className:"number",variants:[{
    begin:`(\\b(${E})((${m})|\\.)?|(${m}))[eE][+-]?(${u})\\b`},{
    begin:`\\b(${E})\\b((${m})\\b|\\.)?|(${m})\\b`},{
    begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
    begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
    begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
    begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",
    end:"\\}",keywords:g,contains:[]},h={begin:"html`",end:"",starts:{end:"`",
    returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},N={
    begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
    contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"css"}},_={begin:"gql`",end:"",
    starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],
    subLanguage:"graphql"}},f={className:"string",begin:"`",end:"`",
    contains:[o.BACKSLASH_ESCAPE,y]},v={className:"comment",
    variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
    begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
    begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
    excludeBegin:!0,relevance:0},{className:"variable",begin:b+"(?=\\s*(-)|$)",
    endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
    }),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]
    },p=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,h,N,_,f,{match:/\$\d+/},A]
    ;y.contains=p.concat({begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(p)
    });const S=[].concat(v,y.contains),w=S.concat([{begin:/\(/,end:/\)/,keywords:g,
    contains:["self"].concat(S)}]),R={className:"params",begin:/\(/,end:/\)/,
    excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w},O={variants:[{
    match:[/class/,/\s+/,b,/\s+/,/extends/,/\s+/,l.concat(b,"(",l.concat(/\./,b),")*")],
    scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
    match:[/class/,/\s+/,b],scope:{1:"keyword",3:"title.class"}}]},k={relevance:0,
    match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
    className:"title.class",keywords:{_:[...t,...s]}},I={variants:[{
    match:[/function/,/\s+/,b,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
    className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],
    illegal:/%/},x={
    match:l.concat(/\b/,(T=[...r,"super","import"],l.concat("(?!",T.join("|"),")")),b,l.lookahead(/\(/)),
    className:"title.function",relevance:0};var T;const C={
    begin:l.concat(/\./,l.lookahead(l.concat(b,/(?![0-9A-Za-z$_(])/))),end:b,
    excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},M={
    match:[/get|set/,/\s+/,b,/(?=\()/],className:{1:"keyword",3:"title.function"},
    contains:[{begin:/\(\)/},R]
    },B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",$={
    match:[/const|var|let/,/\s+/,b,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(B)],
    keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]}
    ;return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{
    PARAMS_CONTAINS:w,CLASS_REFERENCE:k},illegal:/#(?![$_A-z])/,
    contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
    label:"use_strict",className:"meta",relevance:10,
    begin:/^\s*['"]use (strict|asm)['"]/
    },o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,h,N,_,f,v,{match:/\$\d+/},A,k,{
    className:"attr",begin:b+l.lookahead(":"),relevance:0},$,{
    begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
    keywords:"return throw case",relevance:0,contains:[v,o.REGEXP_MODE,{
    className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{
    className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{
    className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
    excludeEnd:!0,keywords:g,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,
    relevance:0},{variants:[{begin:"<>",end:"</>"},{
    match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d.begin,
    "on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{
    begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},I,{
    beginKeywords:"while if switch catch for"},{
    begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
    returnBegin:!0,label:"func.def",contains:[R,o.inherit(o.TITLE_MODE,{begin:b,
    className:"title.function"})]},{match:/\.\.\./,relevance:0},C,{match:"\\$"+b,
    relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
    contains:[R]},x,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
    className:"variable.constant"},O,M,{match:/\$[(.]/}]}}})()
    ;hljs.registerLanguage("javascript",e)})();/*! `json` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const a=["true","false","null"],n={
    scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",keywords:{
    literal:a},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0
    },e.QUOTE_STRING_MODE,n,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],
    illegal:"\\S"}}})();hljs.registerLanguage("json",e)})();/*! `kotlin` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict"
    ;var e="[0-9](_*[0-9])*",n=`\\.(${e})`,a="[0-9a-fA-F](_*[0-9a-fA-F])*",i={
    className:"number",variants:[{
    begin:`(\\b(${e})((${n})|\\.)?|(${n}))[eE][+-]?(${e})[fFdD]?\\b`},{
    begin:`\\b(${e})((${n})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${n})[fFdD]?\\b`
    },{begin:`\\b(${e})[fFdD]\\b`},{
    begin:`\\b0[xX]((${a})\\.?|(${a})?\\.(${a}))[pP][+-]?(${e})[fFdD]?\\b`},{
    begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${a})[lL]?\\b`},{
    begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
    relevance:0};return e=>{const n={
    keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
    built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
    literal:"true false null"},a={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"
    },s={className:"subst",begin:/\$\{/,end:/\}/,contains:[e.C_NUMBER_MODE]},t={
    className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},r={className:"string",
    variants:[{begin:'"""',end:'"""(?=[^"])',contains:[t,s]},{begin:"'",end:"'",
    illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,
    contains:[e.BACKSLASH_ESCAPE,t,s]}]};s.contains.push(r);const l={
    className:"meta",
    begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"
    },c={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,
    end:/\)/,contains:[e.inherit(r,{className:"string"}),"self"]}]
    },o=i,b=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),E={
    variants:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,
    contains:[]}]},d=E;return d.variants[1].contains=[E],E.variants[1].contains=[d],
    {name:"Kotlin",aliases:["kt","kts"],keywords:n,
    contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",
    begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,b,{className:"keyword",
    begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",
    begin:/@\w+/}]}},a,l,c,{className:"function",beginKeywords:"fun",end:"[(]|$",
    returnBegin:!0,excludeEnd:!0,keywords:n,relevance:5,contains:[{
    begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
    contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,
    keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,
    endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,
    endsWithParent:!0,contains:[E,e.C_LINE_COMMENT_MODE,b],relevance:0
    },e.C_LINE_COMMENT_MODE,b,l,c,r,e.C_NUMBER_MODE]},b]},{
    begin:[/class|interface|trait/,/\s+/,e.UNDERSCORE_IDENT_RE],beginScope:{
    3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,
    illegal:"extends implements",contains:[{
    beginKeywords:"public protected internal private constructor"
    },e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,
    excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,
    excludeBegin:!0,returnEnd:!0},l,c]},r,{className:"meta",begin:"^#!/usr/bin/env",
    end:"$",illegal:"\n"},o]}}})();hljs.registerLanguage("kotlin",e)})();/*! `less` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict"
    ;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video","defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],r=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),t=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),o=["align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","kerning","justify-content","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse(),n=t.concat(i).sort().reverse()
    ;return a=>{const l=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
    BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
    begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
    className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
    scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
    contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
    scope:"number",
    begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}
    }))(a),s=n,d="[\\w-]+",c="("+d+"|@\\{"+d+"\\})",g=[],b=[],m=e=>({
    className:"string",begin:"~?"+e+".*?"+e}),p=(e,r,t)=>({className:e,begin:r,
    relevance:t}),f={$pattern:/[a-z-]+/,keyword:"and or not only",
    attribute:r.join(" ")},u={begin:"\\(",end:"\\)",contains:b,keywords:f,
    relevance:0}
    ;b.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,m("'"),m('"'),l.CSS_NUMBER_MODE,{
    begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",
    excludeEnd:!0}
    },l.HEXCOLOR,u,p("variable","@@?"+d,10),p("variable","@\\{"+d+"\\}"),p("built_in","~?`[^`]*?`"),{
    className:"attribute",begin:d+"\\s*:",end:":",returnBegin:!0,excludeEnd:!0
    },l.IMPORTANT,{beginKeywords:"and not"},l.FUNCTION_DISPATCH);const h=b.concat({
    begin:/\{/,end:/\}/,contains:g}),k={beginKeywords:"when",endsWithParent:!0,
    contains:[{beginKeywords:"and not"}].concat(b)},v={begin:c+"\\s*:",
    returnBegin:!0,end:/[;}]/,relevance:0,contains:[{begin:/-(webkit|moz|ms|o)-/
    },l.CSS_VARIABLE,{className:"attribute",begin:"\\b("+o.join("|")+")\\b",
    end:/(?=:)/,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:b}}]
    },y={className:"keyword",
    begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
    starts:{end:"[;{}]",keywords:f,returnEnd:!0,contains:b,relevance:0}},w={
    className:"variable",variants:[{begin:"@"+d+"\\s*:",relevance:15},{begin:"@"+d
    }],starts:{end:"[;}]",returnEnd:!0,contains:h}},x={variants:[{
    begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:c,end:/\{/}],returnBegin:!0,
    returnEnd:!0,illegal:"[<='$\"]",relevance:0,
    contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,k,p("keyword","all\\b"),p("variable","@\\{"+d+"\\}"),{
    begin:"\\b("+e.join("|")+")\\b",className:"selector-tag"
    },l.CSS_NUMBER_MODE,p("selector-tag",c,0),p("selector-id","#"+c),p("selector-class","\\."+c,0),p("selector-tag","&",0),l.ATTRIBUTE_SELECTOR_MODE,{
    className:"selector-pseudo",begin:":("+t.join("|")+")"},{
    className:"selector-pseudo",begin:":(:)?("+i.join("|")+")"},{begin:/\(/,
    end:/\)/,relevance:0,contains:h},{begin:"!important"},l.FUNCTION_DISPATCH]},_={
    begin:d+":(:)?"+`(${s.join("|")})`,returnBegin:!0,contains:[x]}
    ;return g.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,y,w,_,v,x,k,l.FUNCTION_DISPATCH),
    {name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:g}}})()
    ;hljs.registerLanguage("less",e)})();/*! `markdown` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const n={begin:/<\/?[A-Za-z_]/,
    end:">",subLanguage:"xml",relevance:0},a={variants:[{begin:/\[.+?\]\[.*?\]/,
    relevance:0},{
    begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
    relevance:2},{
    begin:e.regex.concat(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),
    relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{
    begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/
    },{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,
    returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",
    excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",
    end:"\\]",excludeBegin:!0,excludeEnd:!0}]},i={className:"strong",contains:[],
    variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]
    },s={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{
    begin:/_(?![_\s])/,end:/_/,relevance:0}]},c=e.inherit(i,{contains:[]
    }),t=e.inherit(s,{contains:[]});i.contains.push(t),s.contains.push(c)
    ;let g=[n,a];return[i,s,c,t].forEach((e=>{e.contains=e.contains.concat(g)
    })),g=g.concat(i,s),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{
    className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:g},{
    begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
    contains:g}]}]},n,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
    end:"\\s+",excludeEnd:!0},i,s,{className:"quote",begin:"^>\\s+",contains:g,
    end:"$"},{className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{
    begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{
    begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",
    contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{
    begin:"^[-\\*]{3,}",end:"$"},a,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{
    className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{
    className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}})()
    ;hljs.registerLanguage("markdown",e)})();/*! `objectivec` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const n=/[a-zA-Z@][a-zA-Z0-9_]*/,_={
    $pattern:n,keyword:["@interface","@class","@protocol","@implementation"]}
    ;return{name:"Objective-C",
    aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:{
    "variable.language":["this","super"],$pattern:n,
    keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],
    literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],
    built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],
    type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]
    },illegal:"</",contains:[{className:"built_in",
    begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
    },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
    className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",
    contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,
    keywords:{
    keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"
    },contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{
    className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"
    },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"class",
    begin:"("+_.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:_,
    contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"\\."+e.UNDERSCORE_IDENT_RE,
    relevance:0}]}}})();hljs.registerLanguage("objectivec",e)})();/*! `properties` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{
    const n="[ \\t\\f]*",t=n+"[:=]"+n,s="[ \\t\\f]+",a="([^\\\\:= \\t\\f\\n]|\\\\.)+",r={
    end:"("+t+"|"+s+")",relevance:0,starts:{className:"string",end:/$/,relevance:0,
    contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",
    disableAutodetect:!0,case_insensitive:!0,illegal:/\S/,
    contains:[e.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:a+t},{
    begin:a+s}],contains:[{className:"attr",begin:a,endsParent:!0}],starts:r},{
    className:"attr",begin:a+n+"$"}]}}})();hljs.registerLanguage("properties",e)
    })();/*! `protobuf` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const s={
    match:[/(message|enum|service)\s+/,e.IDENT_RE],scope:{1:"keyword",
    2:"title.class"}};return{name:"Protocol Buffers",aliases:["proto"],keywords:{
    keyword:["package","import","option","optional","required","repeated","group","oneof"],
    type:["double","float","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","bool","string","bytes"],
    literal:["true","false"]},
    contains:[e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,{
    className:"function",beginKeywords:"rpc",end:/[{;]/,excludeEnd:!0,
    keywords:"rpc returns"},{begin:/^\s*[A-Z_]+(?=\s*=[^\n]+;$)/}]}}})()
    ;hljs.registerLanguage("protobuf",e)})();/*! `rust` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,n={
    className:"title.function.invoke",relevance:0,
    begin:t.concat(/\b/,/(?!let|for|while|if|else|match\b)/,e.IDENT_RE,t.lookahead(/\s*\(/))
    },a="([ui](8|16|32|64|128|size)|f(32|64))?",i=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","eprintln!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],s=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"]
    ;return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",type:s,
    keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],
    literal:["true","false","Some","None","Ok","Err"],built_in:i},illegal:"</",
    contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]
    }),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
    className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{
    begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",
    begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{
    begin:"\\b0b([01_]+)"+a},{begin:"\\b0o([0-7_]+)"+a},{
    begin:"\\b0x([A-Fa-f0-9_]+)"+a},{
    begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+a}],relevance:0},{
    begin:[/fn/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",
    3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{
    className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE]}]},{
    begin:[/let/,/\s+/,/(?:mut\s+)?/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",
    3:"keyword",4:"variable"}},{
    begin:[/for/,/\s+/,e.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",
    3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,e.UNDERSCORE_IDENT_RE],
    className:{1:"keyword",3:"title.class"}},{
    begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,e.UNDERSCORE_IDENT_RE],
    className:{1:"keyword",3:"title.class"}},{begin:e.IDENT_RE+"::",keywords:{
    keyword:"Self",built_in:i,type:s}},{className:"punctuation",begin:"->"},n]}}})()
    ;hljs.registerLanguage("rust",e)})();/*! `sql` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{
    const r=e.regex,t=e.COMMENT("--","$"),n=["true","false","unknown"],a=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],i=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],s=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],o=i,c=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter((e=>!i.includes(e))),l={
    begin:r.concat(/\b/,r.either(...o),/\s*\(/),relevance:0,keywords:{built_in:o}}
    ;return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{
    $pattern:/\b[\w\.]+/,keyword:((e,{exceptions:r,when:t}={})=>{const n=t
    ;return r=r||[],e.map((e=>e.match(/\|\d+$/)||r.includes(e)?e:n(e)?e+"|0":e))
    })(c,{when:e=>e.length<3}),literal:n,type:a,
    built_in:["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"]
    },contains:[{begin:r.either(...s),relevance:0,keywords:{$pattern:/[\w\.]+/,
    keyword:c.concat(s),literal:n,type:a}},{className:"type",
    begin:r.either("double precision","large object","with timezone","without timezone")
    },l,{className:"variable",begin:/@[a-z0-9][a-z0-9_]*/},{className:"string",
    variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,
    contains:[{begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,{
    className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance:0}]}}})();hljs.registerLanguage("sql",e)})();/*! `swift` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";function e(e){
    return e?"string"==typeof e?e:e.source:null}function n(e){return t("(?=",e,")")}
    function t(...n){return n.map((n=>e(n))).join("")}function a(...n){const t=(e=>{
    const n=e[e.length-1]
    ;return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}
    })(n);return"("+(t.capture?"":"?:")+n.map((n=>e(n))).join("|")+")"}
    const i=e=>t(/\b/,e,/\w$/.test(e)?/\b/:/\B/),s=["Protocol","Type"].map(i),c=["init","self"].map(i),u=["Any","Self"],r=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],o=["false","nil","true"],l=["assignment","associativity","higherThan","left","lowerThan","none","right"],m=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],p=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],d=a(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),F=a(d,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),b=t(d,F,"*"),h=a(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),f=a(h,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),w=t(h,f,"*"),g=t(/[A-Z]/,f,"*"),y=["attached","autoclosure",t(/convention\(/,a("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",t(/objc\(/,w,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],E=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"]
    ;return e=>{const d={match:/\s+/,relevance:0},h=e.COMMENT("/\\*","\\*/",{
    contains:["self"]}),A=[e.C_LINE_COMMENT_MODE,h],v={match:[/\./,a(...s,...c)],
    className:{2:"keyword"}},C={match:t(/\./,a(...r)),relevance:0
    },N=r.filter((e=>"string"==typeof e)).concat(["_|0"]),k={variants:[{
    className:"keyword",
    match:a(...r.filter((e=>"string"!=typeof e)).concat(u).map(i),...c)}]},B={
    $pattern:a(/\b\w+/,/#\w+/),keyword:N.concat(m),literal:o},S=[v,C,k],D=[{
    match:t(/\./,a(...p)),relevance:0},{className:"built_in",
    match:t(/\b/,a(...p),/(?=\()/)}],_={match:/->/,relevance:0},M=[_,{
    className:"operator",relevance:0,variants:[{match:b},{match:`\\.(\\.|${F})+`}]
    }],x="([0-9]_*)+",$="([0-9a-fA-F]_*)+",L={className:"number",relevance:0,
    variants:[{match:`\\b(${x})(\\.(${x}))?([eE][+-]?(${x}))?\\b`},{
    match:`\\b0x(${$})(\\.(${$}))?([pP][+-]?(${x}))?\\b`},{match:/\b0o([0-7]_*)+\b/
    },{match:/\b0b([01]_*)+\b/}]},I=(e="")=>({className:"subst",variants:[{
    match:t(/\\/,e,/[0\\tnr"']/)},{match:t(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]
    }),O=(e="")=>({className:"subst",match:t(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)
    }),P=(e="")=>({className:"subst",label:"interpol",begin:t(/\\/,e,/\(/),end:/\)/
    }),T=(e="")=>({begin:t(e,/"""/),end:t(/"""/,e),contains:[I(e),O(e),P(e)]
    }),K=(e="")=>({begin:t(e,/"/),end:t(/"/,e),contains:[I(e),P(e)]}),j={
    className:"string",
    variants:[T(),T("#"),T("##"),T("###"),K(),K("#"),K("##"),K("###")]
    },z=[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,
    contains:[e.BACKSLASH_ESCAPE]}],q={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,
    contains:z},U=e=>{const n=t(e,/\//),a=t(/\//,e);return{begin:n,end:a,
    contains:[...z,{scope:"comment",begin:`#(?!.*${a})`,end:/$/}]}},Z={
    scope:"regexp",variants:[U("###"),U("##"),U("#"),q]},V={match:t(/`/,w,/`/)
    },W=[V,{className:"variable",match:/\$\d+/},{className:"variable",
    match:`\\$${f}+`}],G=[{match:/(@|#(un)?)available/,scope:"keyword",starts:{
    contains:[{begin:/\(/,end:/\)/,keywords:E,contains:[...M,L,j]}]}},{
    scope:"keyword",match:t(/@/,a(...y))},{scope:"meta",match:t(/@/,w)}],H={
    match:n(/\b[A-Z]/),relevance:0,contains:[{className:"type",
    match:t(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,f,"+")
    },{className:"type",match:g,relevance:0},{match:/[?!]+/,relevance:0},{
    match:/\.\.\./,relevance:0},{match:t(/\s+&\s+/,n(g)),relevance:0}]},R={
    begin:/</,end:/>/,keywords:B,contains:[...A,...S,...G,_,H]};H.contains.push(R)
    ;const X={begin:/\(/,end:/\)/,relevance:0,keywords:B,contains:["self",{
    match:t(w,/\s*:/),keywords:"_|0",relevance:0
    },...A,Z,...S,...D,...M,L,j,...W,...G,H]},J={begin:/</,end:/>/,
    keywords:"repeat each",contains:[...A,H]},Q={begin:/\(/,end:/\)/,keywords:B,
    contains:[{begin:a(n(t(w,/\s*:/)),n(t(w,/\s+/,w,/\s*:/))),end:/:/,relevance:0,
    contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:w}]
    },...A,...S,...M,L,j,...G,H,X],endsParent:!0,illegal:/["']/},Y={
    match:[/(func|macro)/,/\s+/,a(V.match,w,b)],className:{1:"keyword",
    3:"title.function"},contains:[J,Q,d],illegal:[/\[/,/%/]},ee={
    match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},
    contains:[J,Q,d],illegal:/\[|%/},ne={match:[/operator/,/\s+/,b],className:{
    1:"keyword",3:"title"}},te={begin:[/precedencegroup/,/\s+/,g],className:{
    1:"keyword",3:"title"},contains:[H],keywords:[...l,...o],end:/}/}
    ;for(const e of j.variants){const n=e.contains.find((e=>"interpol"===e.label))
    ;n.keywords=B;const t=[...S,...D,...M,L,j,...W];n.contains=[...t,{begin:/\(/,
    end:/\)/,contains:["self",...t]}]}return{name:"Swift",keywords:B,
    contains:[...A,Y,ee,{beginKeywords:"struct protocol class extension enum actor",
    end:"\\{",excludeEnd:!0,keywords:B,contains:[e.inherit(e.TITLE_MODE,{
    className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...S]
    },ne,te,{beginKeywords:"import",end:/$/,contains:[...A],relevance:0
    },Z,...S,...D,...M,L,j,...W,...G,H,X]}}})();hljs.registerLanguage("swift",e)
    })();/*! `typescript` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict"
    ;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],i=[].concat(r,t,s)
    ;function o(o){const l=o.regex,d=e,b={begin:/<[A-Za-z0-9\\._:-]+/,
    end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
    const a=e[0].length+e.index,t=e.input[a]
    ;if("<"===t||","===t)return void n.ignoreMatch();let s
    ;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
    ;return-1!==e.input.indexOf(a,n)})(e,{after:a})||n.ignoreMatch())
    ;const r=e.input.substring(a)
    ;((s=r.match(/^\s*=/))||(s=r.match(/^\s+extends\s+/))&&0===s.index)&&n.ignoreMatch()
    }},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c
    },u="[0-9](_?[0-9])*",m=`\\.(${u})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",y={
    className:"number",variants:[{
    begin:`(\\b(${E})((${m})|\\.)?|(${m}))[eE][+-]?(${u})\\b`},{
    begin:`\\b(${E})\\b((${m})\\b|\\.)?|(${m})\\b`},{
    begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
    begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
    begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
    begin:"\\b0[0-7]+n?\\b"}],relevance:0},A={className:"subst",begin:"\\$\\{",
    end:"\\}",keywords:g,contains:[]},p={begin:"html`",end:"",starts:{end:"`",
    returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,A],subLanguage:"xml"}},N={
    begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
    contains:[o.BACKSLASH_ESCAPE,A],subLanguage:"css"}},f={begin:"gql`",end:"",
    starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,A],
    subLanguage:"graphql"}},_={className:"string",begin:"`",end:"`",
    contains:[o.BACKSLASH_ESCAPE,A]},h={className:"comment",
    variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
    begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
    begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
    excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",
    endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
    }),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]
    },S=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,p,N,f,_,{match:/\$\d+/},y]
    ;A.contains=S.concat({begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(S)
    });const v=[].concat(h,A.contains),w=v.concat([{begin:/\(/,end:/\)/,keywords:g,
    contains:["self"].concat(v)}]),R={className:"params",begin:/\(/,end:/\)/,
    excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w},x={variants:[{
    match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,l.concat(d,"(",l.concat(/\./,d),")*")],
    scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
    match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},k={relevance:0,
    match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
    className:"title.class",keywords:{_:[...t,...s]}},O={variants:[{
    match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
    className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],
    illegal:/%/},C={
    match:l.concat(/\b/,(I=[...r,"super","import"],l.concat("(?!",I.join("|"),")")),d,l.lookahead(/\(/)),
    className:"title.function",relevance:0};var I;const T={
    begin:l.concat(/\./,l.lookahead(l.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,
    excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},M={
    match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},
    contains:[{begin:/\(\)/},R]
    },B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",$={
    match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(B)],
    keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]}
    ;return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{
    PARAMS_CONTAINS:w,CLASS_REFERENCE:k},illegal:/#(?![$_A-z])/,
    contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
    label:"use_strict",className:"meta",relevance:10,
    begin:/^\s*['"]use (strict|asm)['"]/
    },o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,p,N,f,_,h,{match:/\$\d+/},y,k,{
    className:"attr",begin:d+l.lookahead(":"),relevance:0},$,{
    begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
    keywords:"return throw case",relevance:0,contains:[h,o.REGEXP_MODE,{
    className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{
    className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{
    className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
    excludeEnd:!0,keywords:g,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,
    relevance:0},{variants:[{begin:"<>",end:"</>"},{
    match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:b.begin,
    "on:begin":b.isTrulyOpeningTag,end:b.end}],subLanguage:"xml",contains:[{
    begin:b.begin,end:b.end,skip:!0,contains:["self"]}]}]},O,{
    beginKeywords:"while if switch catch for"},{
    begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
    returnBegin:!0,label:"func.def",contains:[R,o.inherit(o.TITLE_MODE,{begin:d,
    className:"title.function"})]},{match:/\.\.\./,relevance:0},T,{match:"\\$"+d,
    relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
    contains:[R]},C,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
    className:"variable.constant"},x,M,{match:/\$[(.]/}]}}return t=>{
    const s=o(t),r=e,l=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],d={
    beginKeywords:"namespace",end:/\{/,excludeEnd:!0,
    contains:[s.exports.CLASS_REFERENCE]},b={beginKeywords:"interface",end:/\{/,
    excludeEnd:!0,keywords:{keyword:"interface extends",built_in:l},
    contains:[s.exports.CLASS_REFERENCE]},g={$pattern:e,
    keyword:n.concat(["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"]),
    literal:a,built_in:i.concat(l),"variable.language":c},u={className:"meta",
    begin:"@"+r},m=(e,n,a)=>{const t=e.contains.findIndex((e=>e.label===n))
    ;if(-1===t)throw Error("can not find mode to replace");e.contains.splice(t,1,a)}
    ;return Object.assign(s.keywords,g),
    s.exports.PARAMS_CONTAINS.push(u),s.contains=s.contains.concat([u,d,b]),
    m(s,"shebang",t.SHEBANG()),m(s,"use_strict",{className:"meta",relevance:10,
    begin:/^\s*['"]use strict['"]/
    }),s.contains.find((e=>"func.def"===e.label)).relevance=0,Object.assign(s,{
    name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),s}})()
    ;hljs.registerLanguage("typescript",e)})();/*! `wasm` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{e.regex;const a=e.COMMENT(/\(;/,/;\)/)
    ;return a.contains.push("self"),{name:"WebAssembly",keywords:{$pattern:/[\w.]+/,
    keyword:["anyfunc","block","br","br_if","br_table","call","call_indirect","data","drop","elem","else","end","export","func","global.get","global.set","local.get","local.set","local.tee","get_global","get_local","global","if","import","local","loop","memory","memory.grow","memory.size","module","mut","nop","offset","param","result","return","select","set_global","set_local","start","table","tee_local","then","type","unreachable"]
    },contains:[e.COMMENT(/;;/,/$/),a,{match:[/(?:offset|align)/,/\s*/,/=/],
    className:{1:"keyword",3:"operator"}},{className:"variable",begin:/\$[\w_]+/},{
    match:/(\((?!;)|\))+/,className:"punctuation",relevance:0},{
    begin:[/(?:func|call|call_indirect)/,/\s+/,/\$[^\s)]+/],className:{1:"keyword",
    3:"title.function"}},e.QUOTE_STRING_MODE,{match:/(i32|i64|f32|f64)(?!\.)/,
    className:"type"},{className:"keyword",
    match:/\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
    },{className:"number",relevance:0,
    match:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
    }]}}})();hljs.registerLanguage("wasm",e)})();/*! `xml` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{
    const a=e.regex,n=a.concat(/[\p{L}_]/u,a.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),s={
    className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},t={begin:/\s/,
    contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
    },i=e.inherit(t,{begin:/\(/,end:/\)/}),c=e.inherit(e.APOS_STRING_MODE,{
    className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),r={
    endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",
    begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{
    className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{
    begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{
    name:"HTML, XML",
    aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
    case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,
    end:/>/,relevance:10,contains:[t,l,c,i,{begin:/\[/,end:/\]/,contains:[{
    className:"meta",begin:/<![a-z]/,end:/>/,contains:[t,i,l,c]}]}]
    },e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,
    relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,
    relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",
    begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[r],starts:{
    end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
    begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[r],starts:{
    end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
    className:"tag",begin:/<>|<\/>/},{className:"tag",
    begin:a.concat(/</,a.lookahead(a.concat(n,a.either(/\/>/,/>/,/\s/)))),
    end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:r}]},{
    className:"tag",begin:a.concat(/<\//,a.lookahead(a.concat(n,/>/))),contains:[{
    className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}
    })();hljs.registerLanguage("xml",e)})();/*! `yaml` grammar compiled for Highlight.js 11.9.0 */
    (()=>{var e=(()=>{"use strict";return e=>{
    const n="true false yes no null",a="[\\w#;/?:@&=+$,.~*'()[\\]]+",s={
    className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
    },{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",
    variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]}]},i=e.inherit(s,{
    variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),l={
    end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},t={begin:/\{/,
    end:/\}/,contains:[l],illegal:"\\n",relevance:0},g={begin:"\\[",end:"\\]",
    contains:[l],illegal:"\\n",relevance:0},b=[{className:"attr",variants:[{
    begin:/\w[\w :()\./-]*:(?=[ \t]|$)/},{begin:/"\w[\w :()\./-]*":(?=[ \t]|$)/},{
    begin:/'\w[\w :()\./-]*':(?=[ \t]|$)/}]},{className:"meta",begin:"^---\\s*$",
    relevance:10},{className:"string",
    begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{
    begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,
    relevance:0},{className:"type",begin:"!\\w+!"+a},{className:"type",
    begin:"!<"+a+">"},{className:"type",begin:"!"+a},{className:"type",begin:"!!"+a
    },{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",
    begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",
    relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{
    className:"number",
    begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
    },{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},t,g,s],r=[...b]
    ;return r.pop(),r.push(i),l.contains=r,{name:"YAML",case_insensitive:!0,
    aliases:["yml"],contains:b}}})();hljs.registerLanguage("yaml",e)})();