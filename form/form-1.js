(function () {
	window.onload = function () {
		function validator() {

		}
		var form = document.getElementsByTagName("form");

		Array.prototype.forEach.call(form,function (e) {

			console.log(e);
			e.addEventListener('submit',validator);
		});



	}
})();