(function () {
	window.addEventListener('DOMContentLoaded', function () {
		var button = document.getElementById('button');

		button.addEventListener('click',function () {
			console.log('ready');
			var request = new XMLHttpRequest();

			request.open('GET','time-head.php');

			request.onreadystatechange = function () {
				if (request.readyState === 4){
					console.log(request);
				}
			}
			request.send(null);

		});
	});
})();