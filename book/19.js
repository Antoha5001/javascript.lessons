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
	var p = $('p');
	p.slice(2,5).css({
		'color':'red'
	});
});

})();
