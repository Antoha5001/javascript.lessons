(function () {

	window.addEventListener('DOMContentLoaded', function () {
		var img = new Image();
		img.src = "1.jpg";

		var link = document.getElementById('link');

		link.addEventListener('click', function () {
			document.body.appendChild(img);
		});
	});

})();