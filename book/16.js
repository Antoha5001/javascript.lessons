"use strict";
(function () {
	window.onload = function () {


	}
})();

function $_(el) {
	if (document.getElementsByClassName(el)) return document.getElementsByClassName(el);
	else if (document.querySelector(el)) return document.querySelector(el);
}
