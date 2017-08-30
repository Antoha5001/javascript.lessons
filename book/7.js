"Use strict";
(function() {

// 	var o = {
// 		first: "first_",
// 		second: "second_"
// 	};
// 	var b = new Object(o);
// 	// var b = Object.create(o);
// 	b.third="third";

// 	var keys = Object.keys(b),
// 	values = [];

// 	console.log(b.first);

// 	for (var i = 0; i < keys.length; i++) {
// 		var key = keys[i];
// 		values[i] = b[key];
// 	}
// values[3] = 15;
// 	//console.log(values);

// 	for (var i in values) {
// 		console.log(values[i]);
// 	}
// 	console.log(values);

// // var c = values.join("|");
// var c = values.reverse().join();
// console.log(c);
// 	console.log(values);
// var str = ["Doll","Bell","ant","car"];
// var num = [33,444,1111,5];
// num.sort(function(a,b){
// 	return a - b;
// });

// str.sort(function(a,b){ // сортировка без учета регистра
// 	var c = a.toLowerCase();
// 	var d = b.toLowerCase();
// 	if (c < d) return -1;
// 	if (c > d) return 1;
// 	return 0;
// });
// console.log(str);
var a = [1,2,3,4,5,6,7,8,9,10];
// a.slice(0,3);
console.log(a.splice(3, 0 ,"four","five","six"));
console.log(a);

})();