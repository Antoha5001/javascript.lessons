(function () {

	window.addEventListener('DOMContentLoaded', function () {

		var request,
			firstButton = document.getElementById('first'),
			secondButton = document.getElementById('second'),
			thirdButton = document.getElementById('third');


		// Показ текста, полученного из файла
		function getText(fileName) {
			request = getXmlHttpRequest();
			request.open('GET', fileName, true);
			request.send(null);

			request.onreadystatechange = function () {
				if (request.readyState === 4) {
					if (request.status != 200) {
						console.log(request.status + ": " + request.statusText);
					}
					else {
						var p = document.createElement('p');
						p.innerHTML = request.responseText;
						document.body.appendChild(p);
					}
				}
			}

		}

		// Показ заголовков, полученных от сервера
		function getInfo(fileName) {
			request = getXmlHttpRequest();
			request.open('GET', fileName);

			request.send(null);

			request.onreadystatechange = function () {
				if (request.readyState === 4) {
					console.log(
						"Размер файла: \t"+request.getResponseHeader('Content-Length')
						+ "\n" +
						"Файл изменён \t"+request.getResponseHeader('Last-Modified')
						+ "\n" +
						request.getAllResponseHeaders()
					);
				}
				else {
					var p = document.createElement('p');
					p.innerHTML = request.responseText;
					document.body.appendChild(p);
				}

			}

		}

		firstButton.addEventListener('click', function () {
			getText('hello.txt');
		});
		secondButton.addEventListener('click', function () {
			getText('badFile.txt');
		});
		thirdButton.addEventListener('click', function () {
			getInfo('hello.txt');
		});

	});


})();
