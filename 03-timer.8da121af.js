parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"lbOu":[function(require,module,exports) {

},{}],"oxnl":[function(require,module,exports) {

},{}],"CfFX":[function(require,module,exports) {
"use strict";require("../sass/_common.scss"),require("../sass/_timer.scss");const e=new Date("Apr 23, 2022 12:00:00").getTime(),t=setInterval(function(){let n=(new Date).getTime(),r=e-n;if(r>=0){let e=Math.floor(r/864e5),t=Math.floor(r%864e5/36e5),n=Math.floor(r%36e5/6e4),s=Math.floor(r%6e4/1e3);document.querySelector('span[data-value="days"]').innerHTML=e,document.querySelector('span[data-value="hours"]').innerHTML=("0"+t).slice(-2),document.querySelector('span[data-value="mins"]').innerHTML=("0"+n).slice(-2),document.querySelector('span[data-value="secs"]').innerHTML=("0"+s).slice(-2)}else document.getElementById("timer-1").innerHTML="The countdown is over!",clearInterval(t)},1e3);
},{"../sass/_common.scss":"oxnl","../sass/_timer.scss":"oxnl"}]},{},["CfFX"], null)
//# sourceMappingURL=/goit-Js-hw-11/03-timer.8da121af.js.map