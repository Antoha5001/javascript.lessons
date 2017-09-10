//
// "use strict";
// (function () {
// })();
// // var a = [1,2,3];
// // var b = {first:"one", second:"two"};
// // var [x,y] = a;
// //
// // var color = {R:33, G:44, B:55, transparent:0};
// // var {R:red, G:green, B:blue} = color; // r - имя свойства, red - переменной, в которую записываются значения, red = 33
// //
// //
// // let {sin:sin,cos:cos} = Math;
// //
// //
// //
// // function printArr(arr) {
//
// // }
// //
// // for (let x = 0; x < a.length; x++){
// // 	var p = document.createElement("p");
// // 	p.textContent = a[x];
// // 	var body = document.body;
// // 	body.appendChild(p);
// // }
// //
// // for (let x in b){
// // 	console.log(x);
// // // };
// // for (let x in b){
// // 	let p = document.createElement("p");
// // 	let body = document.body;
// // 	p.textContent = x;
// // 	body.appendChild(p);
// // }
//
//
function iterator(start, end) {
	var nextValue = start;
	return {
		next: function () {
			if (nextValue > end) throw StopIteration;
			return nextValue++;
		}
	}
}


var a = function (){return true} ;




