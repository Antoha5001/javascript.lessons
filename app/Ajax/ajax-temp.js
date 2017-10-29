'use strict';
(function () {

	window.addEventListener('DOMContentLoaded',function () {
		var a = new XMLHttpRequest();
		a.open('GET','photo-01.jpg');
		a.send('');
		console.log(a);
		var b = document.createElement('a');
		b.innerHTML = a.responseText;
		document.body.appendChild(b);
	});

})();