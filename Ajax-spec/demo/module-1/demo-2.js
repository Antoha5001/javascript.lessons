(function () {

	window.addEventListener('DOMContentLoaded', function () {

		var buttonSync = document.getElementById('sync').getElementsByTagName('button')[0];
		console.log(buttonSync);

		// URL сценария, возвращающего время
		var url = "gettime.php?delay=1";		// Задержка в запросе:  gettime.php?delay=3
		var request;


		// Синхронный запрос
		function showSyncRequest(){

			// Объект XMLHttpRequest

			request = getXmlHttpRequest();

			request.open('GET',url, false);
			request.send(null);

			//console.log(request);


			// Вывод ответа

			var syncResult = document.getElementById('syncResult');

			syncResult.innerHTML = request.responseText;

		}

		// Асинхронный запрос
		function showAsyncRequest(){
			// Запрос

		}

		// Завершение асинхронного запроса
		function showAsyncRequestComplete(){

		}

		buttonSync.addEventListener('click', showSyncRequest);

	});



})();