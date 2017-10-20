'use strict';
(function () {

	var a = [12, 'alex', 57879789, null, true];

	a[99] = 45;

	var p = document.createElement('div'),
		body = document.body;
	for (var i = 0; i < a.length; i++){

		if(a[i] != undefined){
			p.innerHTML += `<p>${a[i]}</p>`;
		}
		body.appendChild(p);

	}
	var m2 = {
		age:12,
		name: 'Alex',
		phone: 57879789,
		car: false
	}

	for (var key in m2){
		p.innerHTML += `<p>${key} :  ${m2[key]}</p>`;
	}

	body.appendChild(p);

	var m = {
		"name" : "Sergei",
		"age" : 44,
		"gender" : "male",
		"inn" : "22233456",
		"phone" : ["+7385244444","7999098444"],
		"email" : {
			"gmail" : "sample@gmail.com",
			"yahoo" : "sample@yahoo.com"
		}
	}

	var str = JSON.stringify(m);
	console.log(str);
	console.log(JSON.parse(str));

})();