
(function () {
	"use strict";
var pattern = /text/;
// console.log(pattern);
})();
var p = document.getElementsByTagName("p")[0];
var t = p.innerHTML;
t = t.replace(/"([^"]*)"/g, "«$1»");
p.innerHTML = t;
console.log(p);
// p = p.replace(/Текст/g,"123");
console.log(t);