(function () {

	window.addEventListener('DOMContentLoaded', function () {

		var button = document.getElementsByTagName('button')[0];

		function showDemoSample(){
			// Адрес текущей страницы
			var url = location.href;

			// Объект XMLHttpRequest

			var request = getXmlHttpRequest();


			request.open('GET',url, false);


			request.send(null);
			console.log(request);
			console.log(request.responseText);


			// Запрос на сервер

			// Чтение ответа

		}
		
		button.addEventListener('click', showDemoSample);

	});



})();