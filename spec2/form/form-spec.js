(function () {

	window.addEventListener('DOMContentLoaded',init);



	function init() {

		var inp = document.getElementById('kesha'),
			mess = document.getElementById('messagebox');

		inp.addEventListener('keyup',function (e) {
			if(e.keyCode === 13){
				var texts = document.createElement('p');
				// texts.innerHTML = this.value;

				texts.appendChild(document.createTextNode(this.value));

				mess.appendChild(texts);

				this.value = '';

				console.log(e.keyCode);
			}


		});

	}

})();