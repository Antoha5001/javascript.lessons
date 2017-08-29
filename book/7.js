"Use strict";
(function() {

	var o = {
		first: "first_",
		second: "second_"
	};
	// var b = new Object(o);
	var b = Object.create(o);
	b.third="third";

	var keys = Object.keys(b),
	values = [];

	console.log(b.first);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		values[i] = b[key];
	}
values[3] = 15;
	//console.log(values);

	for (var i in values) {
		console.log(values[i]);
	}
	console.log(values);

})();