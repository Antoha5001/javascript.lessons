"use strict";
(function () {
	window.onload = function () {


	}
})();

function $_(el) {
	if (document.getElementsByClassName(el)) return document.getElementsByClassName(el);
	else if (document.querySelector(el)) return document.querySelector(el);
}

function scrollToTitle(el) {
	Array.prototype.forEach.call(el, function (e) {
		e.onclick = function () {
			var targetUrl = e.getAttribute('href').slice(1),
				target = document.querySelector('h2[data-title="' + targetUrl + '"]'),
				targetCoord = target.getBoundingClientRect();

			window.scrollTo(0, targetCoord.top);

		}
	});

}

var one = $_("one"),
	h1 = $_("handle")[0],
	link = document.getElementsByTagName("a");


var firstDiv = one[3].getBoundingClientRect();

h1.onclick = function () {
	window.scrollTo(0, firstDiv.top);
}

scrollToTitle(link);

var form = document.getElementById("form");