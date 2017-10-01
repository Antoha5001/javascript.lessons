"use strict";
(function () {
	function sendMessage(msg) {

		var request = new XMLHttpRequest();
		request.open('POST', '/log.php');
		request.setRequestHeader('Content-Type','text/plain;charset=utf-8');
		request.send(msg);
	}

	sendMessage('sdfdsf');

})();
