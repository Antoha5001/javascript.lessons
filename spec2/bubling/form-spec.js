(function () {

	window.addEventListener('DOMContentLoaded',init);



	function init() {

		var a = document.getElementById('a'),
			b = document.getElementById('b'),
			c = document.getElementById('c'),
			car = document.getElementById('car');

		a.addEventListener('click', function (e) {
			console.log(`Мы кликнули на ${a.id}`);
			//остановка всплытия
			e.stopPropagation();
		});
		b.addEventListener('click', function (e) {
			console.log(`Мы кликнули на ${b.id}`);
			//остановка всплытия
			e.stopPropagation();
		});
		c.addEventListener('click', function (e) {
			console.log(`Мы кликнули на ${c.id}`);
			//остановка всплытия
			e.stopPropagation();
		});

		window.addEventListener('keyup',function (e) {

			//Up
			if(e.keyCode === 38){
				car.style.top = '0';
			}

			//Down
			if(e.keyCode === 40){
				car.style.top = 'calc(100% - '+ parseInt(car.clientHeight)+'px)';

			}

			//Left
			if(e.keyCode === 37){
				car.style.left = '0';
			}

			//Right
			if(e.keyCode === 39){
				car.style.left = 'calc(100% - '+ parseInt(car.clientWidth)+'px)';

			}

		});
		window.addEventListener('click',function (e) {
			if (e.target == car){
				car.style.background = 'orange';
				car.style.left = 'calc(50% - '+ parseInt(car.clientWidth/2)+'px)';
				car.style.top = 'calc(50% - '+ parseInt(car.clientHeight/2)+'px)';
			}
		});


	}

})();