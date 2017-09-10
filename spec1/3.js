(function () {
	"use strict";

	// function Rect(w, h) {
	// 	this.width = w;
	// 	this.height = h;
	//
	// 	this.show = function () {
	// 		let body = document.body,
	// 			div = document.createElement("div");
	//
	// 		div.style.background = "green";
	// 		div.style.width = this.width + "px";
	// 		div.style.height = this.height + "px";
	//
	// 		body.appendChild(div);
	// 	}
	//
	// }
	//
	// function Circle(d) {
	// 	this.width = d;
	// 	this.height = d;
	//
	// 	this.show = function () {
	// 		let body = document.body,
	// 			div = document.createElement("div");
	//
	// 		div.style.background = "orange";
	// 		div.style.width = this.width + "px";
	// 		div.style.height = this.height + "px";
	// 		div.style.borderRadius = "50%";
	//
	// 		body.appendChild(div);
	// 	}
	//
	// }
	// function Triagle() {
	// 	this.width = 0;
	// 	this.height = 0;
	//
	// 	this.show = function () {
	// 		let body = document.body,
	// 			div = document.createElement("div");
	//
	// 		// div.style.background = "orange";
	// 		div.style.width = this.width + "px";
	// 		div.style.height = this.height + "px";
	// 		// div.style.borderRadius = "50%";
	// 		div.style.border = "20px solid rgba(0,0,0,0)";
	// 		div.style.borderBottom = "40px solid green";
	//
	// 		body.appendChild(div);
	// 	}
	//
	// }
	//
	// let div = new Rect(50, 120),
	// 	circle = new Circle(80),
	// 	triangle = new Triagle();
	// console.log(div.height);
	// div.show();
	// circle.show();
	// triangle.show();
	//
	// /*
	//  * Наследование и прототипы
	//  */
	//
	// function Bird() {
	// 	this.whatIsYourName = function () {
	// 		console.log(`Меня зовут ${this.name}`);
	// 	}
	//
	// }
	//
	// Bird.prototype.setName = function (n) {
	// 	this.name = n;
	// }
	//
	// Parrot.prototype = new Bird();
	//
	// function Parrot() {
	// 	this.canSpeak = function () {
	// 		return true;
	// 	}
	// }
	//
	// var kesha = new Parrot();
	// kesha.setName("Кеша");
	// console.log(kesha);
	// kesha.whatIsYourName();
	// console.log(kesha.canSpeak());
	//
	// function Animals() {
	// 	this.paws = 4;
	// }
	//
	// Animals.prototype.setSpeed = function (s) {
	// 	this.speed = s;
	// }
	// Animals.prototype.getSpeed = function () {
	// 	return this.mass/this.speed;
	// }
	//
	// function Elephant() {
	// 	this.trunk = true;
	// 	this.mass = 500;
	// }
	// Elephant.prototype = new Animals();
	// var eleph = new Elephant();
	// eleph.setSpeed(10);
	// console.log(eleph.getSpeed());
	//
	// // Elephant.getSpeed();

	//
	// class Bird {
	// 	constructor(n){
	// 		this.name = n;
	// 	}
	// 	whatIsYourName(){
	// 		console.log(`Меня зовут ${this.name}`);
	// 	}
	// }
	// let kesha = new Bird("Кеша");
	// kesha.whatIsYourName(); // Кеша
	// console.log(Function.prototype);
	//
	//
	//

	let arr = [1,2,3,4,5];

	let str = arr.join(";");
	console.log(str);

	let arr3 = arr.slice(1,3);
	console.log(arr3);

	let arr4 = arr.splice(0,2);
	console.log(arr4);
	console.log(arr);
arr.splice(3,0,{},[]);
	console.log(arr);
	
	function fibonachi(n) {
		let arr = [1,1];
		for (let i = 1; i < n;i++){
			// if(arr[i]+arr[i-1] >= n) break;
			arr.push(arr[i]+arr[i-1]);
		}
		return arr;
	}
let f = fibonachi(1000);
	console.log(f);
let g = f.filter(e => e > 500 && e % 2 !== 0);
	console.log(g);


})();