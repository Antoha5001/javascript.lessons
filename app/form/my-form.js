(function () {
	window.onload = function () {

		var validatorMethods = {
			isNotEmpty: function (el) {
				if(el.value === "") {
					return false;
				}
				return true;
			},
			isPattern: function (el, pattern) {
				return pattern.test(el.value);

			},
		};

		function Validator(settings) {
			var formEl = document.getElementById(settings.id), //форма
				formField = formEl.elements, // все поля формы и кнопки
			errors = [],
			rulesPattern = {
				email: /^\w{1,}\.?\w{1,}@\w{1,}\.\w{1,}$/,
				tel: /\+?\d{6,11}/,
			};

			//Показать ошибку
			var showError = function (el) {
				var parent = el.parentNode, //обёртка поля, div
					messageElement = parent.getElementsByClassName("message")[0]; //Элемент вывода сообщения


				parent.classList.remove("success");
				parent.classList.add("error");

				if (messageElement.classList.contains('message')) {
					messageElement.innerHTML = el.dataset.error;
				}
			}

			//Если вё верно
			var showSuccess = function (el) {
				var parent = el.parentNode,
					messageElement = parent.getElementsByClassName("message")[0];

				parent.classList.remove("error");
				parent.classList.add("success");

				if (messageElement.classList.contains('message')) {
					messageElement.innerHTML = "";
				}

			}
			
			function isValid(el) {
				var methods = settings[el.getAttribute('id')];
				if(methods !== undefined){
					for (var i = 0; i < methods.length; i++){
						if(!validatorMethods[methods[i][0]](el, methods[i][1])){
							errors.push({el:el});
						}
					}
				}
				return true;
			}


			//Проверка поля
			function checkIt() {
				//Определить правила
				if(isValid(this)){
					showSuccess(this);
					for (var i = 0; i<errors.length; i++){
						if(errors[i].el === this){
							errors.splice(i,1);
						}
					}
				} else {
					showError(this);
					errors.push({ //добавит ошибку в массив
						el: this,
						name : this.name,
					});
				}
			}
			//Инициализация
			for (var i = 0; i < formField.length; i++){
				if (formField[i].tagName === 'BUTTON') continue;
				formField[i].addEventListener('change',  checkIt);
			}
			for(var prop in settings.pattern){
				rulesPattern[prop] = settings.pattern[prop];
			}



		}


		var v = new Validator({
			id : 'form',
			pattern:{

			},
			methods:{
				'email' : [
					['isNotEmpty'],
					['contains','inp2'],
					['pattern','email']
				],
			}
		});


	}
})();
