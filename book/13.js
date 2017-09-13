
"use strict";
(function () {
	window.onload = function () {
		let box = document.getElementsByClassName("reveal");
		// console.log(box.length);

		for (let i = 0; i < box.length;i++){
			let title = document.getElementsByClassName("handle")[0];

			showChild(title);
		}

		function showChild(title) {
			console.log(title);
			title.onclick = function () {
				var parent = this.parentElement;
				console.log(parent);
				if (parent.className == "reveal") parent.className = "revealed";
				else parent.className = "reveal";
			}
		}



		// box.forEach(e => {
		// 	let title = e.getElementsByClassName("handler")[0];
		// 	title.onclick(function (e) {
		// 		console.log(e);
		// 	});
		// });


	}
})();