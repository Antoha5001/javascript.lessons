"Use strict";
(function() {
	console.log(7);
	var o = {
		first: "first_",
		second: "second_"
	};
	var keys = Object.keys(o),
	values = [];

	console.log(keys);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		values[i] = o[key];
	}

	console.log(values);

})();