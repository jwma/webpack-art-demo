!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jQuery")):"function"==typeof define&&define.amd?define(["jQuery"],e):"object"==typeof exports?exports.template=e(require("jQuery")):t.template=e(t.jQuery)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="http://oy1vg35hd.bkt.clouddn.com/b41bd5bc9456f62d0a60/",e(e.s=13)}([function(e,n){e.exports=t},function(t,e,n){"use strict";t.exports=n(3)},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(e){function r(t){return"string"!=typeof t&&(t=void 0===t||null===t?"":"function"==typeof t?r(t.call(t)):JSON.stringify(t)),t}function o(t){var e=""+t,n=u.exec(e);if(!n)return t;var r="",o=void 0,i=void 0,c=void 0;for(o=n.index,i=0;o<e.length;o++){switch(e.charCodeAt(o)){case 34:c="&#34;";break;case 38:c="&#38;";break;case 39:c="&#39;";break;case 60:c="&#60;";break;case 62:c="&#62;";break;default:continue}i!==o&&(r+=e.substring(i,o)),i=o+1,r+=c}return i!==o?r+e.substring(i,o):r}/*! art-template@runtime | https://github.com/aui/art-template */
var i=n(4),c=Object.create(i?e:window),u=/["&'<>]/;c.$escape=function(t){return o(r(t))},c.$each=function(t,e){if(Array.isArray(t))for(var n=0,r=t.length;n<r;n++)e(t[n],n);else for(var o in t)e(t[o],o)},t.exports=c}).call(e,n(2))},function(t,e,n){(function(e){t.exports=!1;try{t.exports="[object process]"===Object.prototype.toString.call(e.process)}catch(t){}}).call(e,n(2))},,function(t,e,n){var r=n(1);t.exports=function(t){"use strict";t=t||{};var e="",o=(arguments[1],function(t){return e+=t}),i=t.headerData,c=r.$escape,u=t.msg;return o(n(10)(i)),e+="\n<div>",e+=c(u),e+='!!!</div>\n<hr>\n<div>\n    <p>引用本地图片资源，<code>npm run build</code>时会被上传到七牛</p>\n    <img style="width: 200px;" ',e+='src="'+n(11)+'"',e+='>\n</div>\n<div>\n    <P>引用非本地资源时，会保持原样引用</p>\n    <img style="width: 200px;" ',e+='src="https://qn.kaiheikeji.com/tn-fd4d7c85.png?v=1502730305798"',e+=">\n</div>\n",o(n(9)(t)),e}},function(t,e){},,function(t,e,n){n(1);t.exports=function(t){"use strict";t=t||{};var e="";return e+='<div style="background-color: #ddd;">\n    <p>这部分footer.art文件的内容</p>\n</div>'}},function(t,e,n){var r=n(1);t.exports=function(t){"use strict";t=t||{};var e="",n=r.$escape,o=t.title;return e+='<div style="background-color: #ddd;">\n    <h1>',e+=n(o),e+="</h1>\n    <p>这部分header.art文件的内容!!</p>\n</div>"}},function(t,e,n){t.exports=n.p+"f6502de35514960c5cdff6229f98ab17.jpg"},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n.n(r);n(7),o()(function(){const t=n(6),e={headerData:{title:"using art-template"},msg:"it's works!"};o()("#app").html(t(e))})}])});