(function () {

	window.addEventListener('DOMContentLoaded',init);

	function SuperButton(settings) {

		var self = this;

		this.name = settings.name;

		this.show = function () {
			document.body.appendChild(this.button);
		}
		this.megaShow = function (n) {

			var count = [];

			for (var j = 0; j < n; j++){
				count.push(j);
			}

			// var init = this.init_;

			var a = count.filter( e => 	{
				return e % 2 != 0;
			}).map(e =>{
				(new SuperButton({name:e})).show();
			});



		}

		this.attachEvents_ = function () {
			this.button.addEventListener('click', this.buttonClick_);
		}

		this.buttonClick_ = function () {
			console.log(self.name);
		}

		this.init_ = function () {
			this.button = document.createElement('div');
			this.button.className = "abc-button";
			this.button.innerHTML = settings.name;

			this.attachEvents_();
		}

		this.init_();
	}

	function init() {

		var button = new SuperButton({
			name: 'Кнопка'
		});

		button.show();
		button.megaShow(1500);

	}

})();