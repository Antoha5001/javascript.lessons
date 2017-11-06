(function () {
	window.addEventListener('DOMContentLoaded', function () {
		/*
				**
				**	Задание 1. Список категорий
				**
				*/
		var request,
			select = document.getElementById('selCategory'),
			button = document.getElementById('button'),
			table = document.getElementById('tableBooks'),
			imgBlock = document.getElementById('divBookInfo'),
			img = imgBlock.firstElementChild;

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

		button.addEventListener('click', function () {

			console.log((parseInt(select.selectedIndex)+1));
			var numb = parseInt(select.selectedIndex)+1;
			var value = "cat="+numb;
			var request = new XMLHttpRequest();
			request.open('post','postbooksbycat.php');
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			request.send(value);
			request.onreadystatechange = function () {

				if(request.readyState === 4){
					console.log(table.innerHTML);
					table.innerHTML = "";
					var list = request.responseText.split('\n');
					for(var i = 0; i < list.length; i++){
						if (list[i] === "") continue;
						showBooks(list[i]);

					}
				}
			}
		});

		function showBooks(str) {
			var elemList = str.split('|'),
				tr = document.createElement('tr'),
				td1 = document.createElement('td'),
				td2 = document.createElement('td');

			td1.innerHTML = elemList[0];
			td2.innerHTML = elemList[1];

			tr.addEventListener('click',function () {
				var req = new XMLHttpRequest();
				req.open('head',"../../images/"+elemList[2]);
				req.onreadystatechange = function () {
					if (req.readyState === 4){
						if(req.status === 200){
							var headers = req.getAllResponseHeaders(),
								arr = headers.split('\n'),
								obj = {};
							for(var i = 0; i < arr.length;i++){
								var a = arr[i].split(': ');
								obj[a[0]] = a[1];
							}
							// img.src = "../../images/"+elemList[2];
							img.src = req.responseURL;
							img.alt = obj['content-length'];
							imgBlock.style.display = "block";
							console.log(req);
						}
					}
				};
				req.send(null);
			});

			tr.appendChild(td1);
			tr.appendChild(td2);
			table.appendChild(tr);

		}

	});
})();