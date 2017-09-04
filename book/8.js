// "Use strict";
(function() {
	var o = function () {
        
	};
	var f = function () {
       // console.log(Object.prototype.toString.call(this));
		c.counter = 5;
		function c() {
            // console.log(arguments.callee);
            console.log(c.counter);

        }
        c();
	};
	o.m = f;
	o.m();

})();
var scope = "global scope";
function check() {
	var scope = "local scope";
	function f() {
        return scope;
    }
    return f;
}
function counter(n) {
	return {
		get count(){return n+n},
		set count(m){
			if (m >= n) n = m;
			else throw new Error("Нельзя изменить");
		}
	};	
};
