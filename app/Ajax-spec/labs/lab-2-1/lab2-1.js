(function () {
	window.addEventListener('DOMContentLoaded', function () {
		/*
				**
				**	Задание 1. Список категорий
				**
				*/
		var request, select = document.getElementById('selCategory');

		function  fillCategories() {
			request = new XMLHttpRequest();

			request.open('GET', 'getcategories.php');

			request.onreadystatechange = function () {
				if  (request.readyState === 4){
					var categories = request.responseText.split('\n');
					for (var i = 0; i < categories.length; i++){
						if(categories[i] == "") return;
						var b = categories[i].split(':');
						var option = document.createElement('option');
						option.innerHTML = b[1];
						select.appendChild(option);
					}

					console.log(categories);
				}
			};


			request.send(null);


		}

		fillCategories();

	});
})();