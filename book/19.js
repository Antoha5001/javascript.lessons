"use strict";
(function () {
$(document).ready(function () {
	$('.button').click(
		function (e) {
			setTimeout(function () {
				$('.content').load('test.html ul');
			},500);
		}
	);
});

})();
