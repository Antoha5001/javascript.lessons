"Use strict";
(function() {
	var o = function () {
        
	};
	var f = function () {
        console.log(Object.prototype.toString.call(this));
	};
	o.m = f;
	o.m();
})();
