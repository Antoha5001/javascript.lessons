(function () {

	window.addEventListener('DOMContentLoaded',init);

	var conteiner,
		images,
		imagesCount,
		position = 0;

	function rotateSlider() {
		var curPos;
		imagesCount = images.length;
		setTimeout(function () {
			curPos = conteiner.style.left;
			// if( parseInt(curPos) === -1000) curPos = 0;
			if( position < imagesCount -1) {
				conteiner.style.left = (parseInt(curPos) - 200) + 'px';
				position++;
				console.log(position < imagesCount);
			} else{
				curPos = 0;
				position = 0;
				conteiner.style.left = '0px';
			}
			rotateSlider();

			// console.log('event');
		}, 1000);
	}

	function init() {

		conteiner = document.getElementById('conteiner');
		images = document.getElementsByClassName('my-image');

		conteiner.style.left = '0';



		rotateSlider();



	}

})();