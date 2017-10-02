(function () {
	window.onload = function () {

		var rules = {
			required: function (el) {
				if (el.value != "") {
					return true;
				} else {
					return false;
				}

			},
			email: function (el) {
				var reg = /[a-z]+\S?[a-z0-9]+@[a-z0-9]+.[a-z]{2,3}\S?[a-z]{1,2}/;
				return reg.test(el.value);
			},
			phone: function (el) {
				var reg = /\d+/;
				return reg.test(el.value);
			}
		};
		var a = /[a-z]+\S?[a-z0-9]+@[a-z0-9]+.[a-z]{2,3}\S?[a-z]{1,2}/,
		b = /\d{6,10}/;
		c = /\w{6,}/;

		console.log(a.test('pla@mail.ru'));
		console.log(b.test('9039109999'));
		console.log(c.test('password'));

		function caller(arr, func) {
			Array.prototype.forEach.call(arr, func);
		}

		function showErrors(arr) {
			console.log(arr);
		}

		function validator(e) {

			var imputs = this.elements,
				errors = [];

			caller(imputs, function (e) {
				if (e.tagName != 'BUTTON') {
					// console.log(e.tagName);
					var rulesList = e.dataset.rule;

					if (rulesList) {
						rulesList = rulesList.split(' ');

						for (var j = 0; j < rulesList.length; j++) {

							console.log(e);

							if (!rules[rulesList[j]](e)) {
								console.log("value "+e.value+", rule - "+e.dataset.rule);
								console.log("Не верно");
								alert(e.value);

								errors.push({name: e.name});

								// return true;
								// rules.required(e);
							} else {

								console.log(rules[rulesList[i]](e.value));
								alert("Верно: " + e.value);

							}
						}
						//
					}
				}
			});

			if (errors.length > 0) {
				e.preventDefault();
				showErrors(errors);
			}
			alert("форма ушла");
			e.preventDefault();


			// console.log(imputs);
		} // END VALIDATOR

		var form = document.getElementsByTagName("form")[0];
		// validator(form);

		// console.log(form);

		form.addEventListener('submit', validator);


	}
})();