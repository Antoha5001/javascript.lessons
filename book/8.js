"use strict";
(function() {
	var o = function () {
        
	};
	var f = function () {
        console.log(Object.prototype.toString.call(this));
	};
	o.m = f;
	o.m();
})();
var r = {};
function addPrivetProperty(o, name, predicate){
	var value, outerArguments = arguments;
	o["get"+name] = function () {return value;	};
	o["set"+name] = function (x) {
		// if(predicate && !predicate(x)){
		// 	throw new Error("Вы ввели недопустимое значение"+x);
		// } else value = x;
		return !predicate(x);
	}
	o.arg = function(){return outerArguments;};

}
addPrivetProperty(r,"Name", function(x){return typeof x == "string";});

function custom(x,y,z) {
	var a = [];
	for (var i = 0; i < 10; i++){
		a[i] = function () {return i};
	}
	return a;
}
var a = custom();
var a = [1,2,3,4,5];
function array(a,n) { return Array.prototype.slice.call(a, n || 0);}

function partialLeft() {
	return function () {
		console.log(this);
	}
}