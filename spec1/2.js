// "Use strict";
// var str = "<h1>Заголовок</h1>";
// var str2 = "<h2>Заголовок 2 уровня</h2>"
//
// var div = document.createElement("div");
// var div2 = document.createElement("div");
// div.innerHTML = str;
// div.classList.add("box");
// div2.innerHTML = str2;
// document.body.appendChild(div);
// document.body.appendChild(div2);
//
// function generateColor() {
// 	return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
// }
//
// function createDiv(width, height, color) {
// 	var div = document.createElement("div");
// 	div.style.cssText = "width:" + width + "px;height:" + height + "px;background-color:" + generateColor() + ";";
// 	document.body.appendChild(div);
// };
// var count = 0;
//
// function createCircle(min, max, color) {
// 	var diametr = Math.random() * (max - min) + min;
// 	var diametr = Math.random() * 100 + 50;
// 	var div = document.createElement("div");
// 	// div.style.cssText = "width:"+diametr+"px;height:"+diametr+"px;background-color:"+color+";border-radius:50%;";
// 	div.style.cssText =`width: ${diametr}px;\
// 						height: ${diametr}px;\
// 						background-color: ${generateColor()}  ;border-radius:50%;`;
//
// 	document.body.appendChild(div);
// 	count++;
// 	if (count === 20) return;
// 	console.log(count);
// 	setTimeout(createCircle, 1000);
//
// };
//
// createDiv(50, 200, "red");
// // createCircle(50,200,"red");
// (function (str) {
// 	console.log(str);
// })("hello");
//
// var kesha = {
// 	name: "Kesha",
// 	whatIsYourName: function () {
// 		console.log(`Меня зовут ${this.name}`);
// 	},
// 	setAge: function (age) {
// 		this.vozrast = age;
// 	},
// 	skolkoTebeLet: function () {
// 		console.log(`Мне ${this.vozrast} лет.`);
// 	}
// };
// kesha.whatIsYourName();
// kesha.setAge(20);
// kesha.skolkoTebeLet();


// var a = [1,2,3,4,5];
//
// a.map( f => {
// 	console.log(f)
// });
//
// var quad = a.map( e => e*e);
// console.log(quad);
//
// /**
//  * @param count
//  * @returns {Array}
//  */
// function range(count) {
// 	let arr = [];
// 	for (let x = 0; x <count; x++){
// 		arr.push(x);
// 	}
// 	return arr;
// }
//
// var  c = range(30);
//
//

function Bird(n) {
	this.name = n;
	this.whatIsYourName = function () {
		console.log(`Меня зовут ${this.name}.`);
	}
}
var kesha = new Bird("Кеша"),
	gena = new Bird("Гена");


console.log(kesha);
gena.whatIsYourName();

function Rectangle(width, height) {
	this.width = width;
	this.height = height;
	this.show = function () {
		var body = document.body,
			div = document.createElement("div");
		div.style.width = `${this.width}px`;
		div.style.height = `${this.height}px`;
		div.style.background = "green";
		body.appendChild(div);
		// div.cssText = "color:green;width: ${this.width}px;height:${this.height}px;";
	}
}








