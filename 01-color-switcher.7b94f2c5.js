parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"lbOu":[function(require,module,exports) {

},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),resetBtn:document.querySelector(".btn_reset"),body:document.querySelector("#js_body")};exports.default=t;
},{}],"TCaP":[function(require,module,exports) {
"use strict";require("../sass/_common.scss"),require("../sass/_switcher.scss");var s=t(require("./refs.js"));function t(s){return s&&s.__esModule?s:{default:s}}const{startBtn:e,stopBtn:a,body:r,resetBtn:o}=s.default;let d=null;const i=()=>`#${Math.floor(16777215*Math.random()).toString(16)}`,c=()=>r.style.backgroundColor=i(),l=({target:s})=>{if(void 0!==s.dataset.reset)return console.log(s),r.classList.contains("body_switcher")||r.classList.add("body_switcher"),o.classList.remove("is_active"),r.style.backgroundColor=""},n=({target:s})=>{void 0!==s.dataset.stop&&(console.log(s),!1===s.disabled&&(e.disabled=!1,o.classList.add("is_active"),clearInterval(d)),o.addEventListener("click",l))},v=({target:s})=>{void 0!==s.dataset.start&&(console.log(s),!1===s.disabled&&(s.disabled=!0,d=setInterval(c,900),r.classList.remove("body_switcher")),a.addEventListener("click",n))};e.addEventListener("click",v),o.addEventListener("click",l);
},{"../sass/_common.scss":"lbOu","../sass/_switcher.scss":"lbOu","./refs.js":"VyiV"}]},{},["TCaP"], null)
//# sourceMappingURL=/goit-Js-hw-09-switcher/01-color-switcher.7b94f2c5.js.map