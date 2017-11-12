(function () {

	window.addEventListener('DOMContentLoaded', function () {
		var img = new Image();
		img.src = "1.jpg";

		var link = document.getElementById('link');

		link.addEventListener('click', function () {
			document.body.appendChild(img);
		});

		var canvas = document.getElementById('canvas');
		var c = canvas.getContext('2d');
		c.beginPath();
		c.moveTo(100,100);
		c.lineTo(180,180);
		c.lineTo(100,200);
		c.lineTo(100,100);
		c.stroke();
		c.fill();
	});

})();