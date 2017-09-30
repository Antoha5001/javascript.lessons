"use strict";
(function () {
	window.onload = function () {


	}
})();

function $_(el) {
	if (document.getElementsByClassName(el)) return document.getElementsByClassName(el);
	else if (document.querySelector(el)) return document.querySelector(el);
}
<<<<<<< HEAD

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
	link = document.getElementsByTagName("a"),
	doc = document.documentElement;


var firstDiv = one[3].getBoundingClientRect();

h1.onclick = function () {
	window.scrollTo(0, firstDiv.top);
}

scrollToTitle(link);

var form = document.getElementById("form");

window.addEventListener('scroll', function () {
	Array.prototype.forEach.call(one,function (e) {
		console.log(e.offsetTop);
		console.log(doc.scrollTop);
		if(e.offsetTop < doc.scrollTop + doc.clientHeight - e.offsetHeight){
			console.log(e);
			e.classList.add("is-visible");
		} else {
			e.classList.remove("is-visible");
		}
	});
})
=======
>>>>>>> 2edd1c8d4625d0143495436ca10891653b059749
