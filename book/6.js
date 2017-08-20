"Use strict";
var c = {x:1};

var d = Object.create(c);

var o = {
	// обычное свойство
	a : 4,

	// свойство с методами доступа, доступное для чтения и записи
	get prop(){
		return this.a * 2;
	},
	set prop(i){
		this.a = i;
	},

	// свойство с методом доступа, доступное только для чтения
	get qrt(){
		return this.a * this.a;
	}

};

// console.log(Object.getOwnPropertyDescriptor(o,"qrt"));
// console.log(Object.getOwnPropertyDescriptor(o,"a"));

Object.defineProperty(o,"b",{
	configurable:true,
	writable:true,
	enumerable:false
});
console.log(Object.getOwnPropertyDescriptor(o,"b"));
Object.defineProperty(o,'b',{writable:false});
console.log(Object.getOwnPropertyDescriptor(o,"b"));

o.b = 2;

Object.defineProperty(o,'b',{value:2});

Object.defineProperties(o,{
	a : {value:5,
		configurable:true,
        writable:true,
        enumerable:false},
	b:  {value:10,
		configurable:true,
        writable:true,
        enumerable:false}
});
console.log(Object.getPrototypeOf(d));
console.log(c.isPrototypeOf(d));
