"use strict";
(function() {

})();
var a = {x:1};

var b = Object.create(a);

function Range(from, to) {
	// var r = Object.create(range.methods);

	this.from = from;
	this.to = to;
}
Range.prototype = {
	constructor:Range,
	includes:123
};
//
// range.methods = {
// 	met1:1,

// 	met2:2
// };