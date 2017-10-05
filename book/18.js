"use strict";
(function () {
	function sendMessage(msg) {

		var request = new XMLHttpRequest();
		var a = new FormData();
		request.open('GET', 'test.txt');
		request.setRequestHeader('Content-Type','text/plain;charset=utf-8');
		request.send('');
		request.addEventListener('readystatechange',function () {
			if(this.readyState === 4)	console.log(this);
		});
	}

	sendMessage('sdfdsf');

	var com = new EventSource('/');
	// com.onmessage = function (e) {
	// 	console.log(e);
	// }

})();
