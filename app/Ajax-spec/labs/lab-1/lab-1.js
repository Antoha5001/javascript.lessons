"use strict";
(function () {
	window.addEventListener('DOMContentLoaded', function () {
		function getXmlHttpRequest() {
			if (window.XMLHttpRequest) {
				try {
					return new XMLHttpRequest();
				}
				catch (e) {
				}
			}
			else if (window.ActiveXObject) {
				try {
					return new ActiveXObject('Msxml2.XMLHTTP');
				} catch (e) {
				}
				try {
					return new ActiveXObject('Microsoft.XMLHTTP');
				} catch (e) {
				}
			}
			return null;
		}

		var req,
			button = document.getElementsByTagName('button')[0],
			searchField = document.getElementById('txtNum'),
			resultBox = document.getElementById('divResult');

		function getBookByNumber(num) {
			var num = num || undefined;
			req = getXmlHttpRequest();
			if (num === undefined) {
				req.open('GET', 'getbooktxt.php');
			}
			else{
				req.open('GET', 'getbooktxt.php/?num=' + num);
			}
			req.send(null);
			req.onreadystatechange = function () {
				if(req.readyState === 4){
					resultBox.firstChild.nodeValue = req.responseText;
					return req;
				}
			}
		}

		function showBook() {
				var num = searchField.value;
				getBookByNumber(num);
		}

		button.addEventListener('click', showBook);


	});
})();