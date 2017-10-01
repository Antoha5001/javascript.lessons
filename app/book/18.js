"use strict";
(function () {
	function sendMessage(msg) {

		let request = new XMLHttpRequest();
		request.open('POST', 'log.php');
		request.setRequestHeader('Content-Type','text/plain;charset=utf-8');
		request.send(msg);


		request.onreadystatechange = function () {
			if(request.readyState === 4){

				console.log(request);

			}
		}

	}

	function getText(text) {
		let request = new XMLHttpRequest();
		request.open('GET',text);

		request.onreadystatechange = function () {
			if(request.readyState === 4 && request.status === 200){

				let a = request.responseXML,
				book = a.getElementsByTagName("book"),
				z = request.getAllResponseHeaders();
				
				Array.prototype.forEach.call(book, function (e) {
					let title = e.children[0].innerHTML,
						p = document.createElement('p');
					p.innerHTML = title;
					document.body.appendChild(p);
				});

				console.log(request);
				console.log(a);
				console.log(z);
				enc

			}
		}

		request.send(null);
	}

	// sendMessage('sdfdsf');
	getText('Книга5.xml');

})();
