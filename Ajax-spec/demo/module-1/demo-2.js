(function () {

	window.addEventListener('DOMContentLoaded', function () {

		var buttonSync = document.getElementById('sync-button');
		var buttonAsync = document.getElementById('async-button');
		console.log(buttonSync);

		// URL сценария, возвращающего время
		var url = "gettime.php?delay=3";		// Задержка в запросе:  gettime.php?delay=3
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

			syncResult.firstChild.nodeValue = request.responseText;

		}

		// Асинхронный запрос
		function showAsyncRequest(){

			// Запрос
			request = getXmlHttpRequest();

			request.open('GET',url, true);
			request.send(null);
			
			request.onreadystatechange = showAsyncRequestComplete;

		}

		// Завершение асинхронного запроса
		function showAsyncRequestComplete(){
			if(request.readyState === 4){

				var asyncResult = document.getElementById('asyncResult');

				asyncResult.innerHTML = request.responseText;

			}
		}

		buttonSync.addEventListener('click', showSyncRequest);
		buttonAsync.addEventListener('click', showAsyncRequest);

	});



})();