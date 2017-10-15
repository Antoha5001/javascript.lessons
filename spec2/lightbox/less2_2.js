(function () {

	window.addEventListener('DOMContentLoaded',init);

	var blackpanel,
		images;
	
	function hideLightBox() {

		// blackpanel.removeChild(bigImage);
		blackpanel.innerHTML = '';
		blackpanel.classList.remove('is-visible');

		//отписать у объекта blackpanel от события click функцию
		 blackpanel.removeEventListener('click',hideLightBox);
	}

	function init() {

		blackpanel = document.getElementsByClassName('blackpanel')[0];
		images = document.getElementsByClassName('my-image');
		console.log(images);


		blackpanel.addEventListener('click',hideLightBox);

		// (new Array()).forEach.call(images, e => {
		// 	e.addEventListener('click',function () {
		// 		blackpanel.classList.add('is-visible');
		// 	});
		// });

		for (var i = 0; i < images.length; i++){
			images[i].addEventListener('click',function (e) {

				blackpanel.classList.add('is-visible');

				var bigImage = document.createElement('img');
				bigImage.classList.add('image-box');
				// bigImage.setAttribute('src', this.getAttribute('src'));
				bigImage.src = this.src;
				blackpanel.appendChild(bigImage);
				blackpanel.style.height = document.documentElement.scrollHeight+"px";

				//добавить у объекта blackpanel от события click функцию
				blackpanel.addEventListener('click',hideLightBox);

				window.addEventListener('resize',function () {
					blackpanel.style.height = document.documentElement.scrollHeight+"px";
				});

				console.log(blackpanel.clientHeight);
			});
		}

	}

})();