(function () {
	var	body = document.body;

	function Table(a,b) {
		this.table = document.createElement('table');
		this.h2 = document.createElement('h2');

		this.h2.innerHTML = `Таблица умножения ${a} на ${b}`;

		for (var i = 1; i <= a; i++){

			var tr = document.createElement('tr');

			for (var j = 1; j <= b; j++){

				var td = document.createElement('td');
				td.innerHTML = `${i} x ${j} = ${i * j}`;
				tr.appendChild(td);
			}

			this.table.appendChild(tr);

		}

	}

	Table.prototype.show = function () {
		body.appendChild(this.h2);
		body.appendChild(this.table);
	};

	// var t = new Table(5,5);
	// t.show();

	/*
	* less 2 ---------------------------------------------------
	* */

	function Circle(settings) {
		this.color = settings.color || "red";
		this.box = document.getElementById(settings.id);
		this.element = document.createElement('div');

		this.get = function (color) {
			this.element.style.width = `${settings.radius}px`;
			this.element.style.height = `${settings.radius}px`;
			this.element.style.backgroundColor = color || this.color;
			this.element.style.borderRadius = "50%";
		};

		this.show = function () {
			this.box.appendChild(this.element);
		};
	}
	function Triangle(settings) {
		this.color = settings.color || "red";
		this.box = document.getElementById(settings.id);
		this.w = settings.width;
		this.h = settings.height;
		this.element = document.createElement('div');

		this._init = function () {
			this.element.style.width = `0`;
			this.element.style.height = `0`;
			this.element.style.border = `${this.w/2}px solid transparent`;
			this.element.style.borderBottom = `${this.h}px solid ${this.color}`;
		};

		this.show = function () {
			this.box.appendChild(this.element);
		};

		this.setDirection = function (direction) {
			this.element.style.transform = `rotate(${direction}deg)`;
		};


		this._init();
	}

	var circle = new Circle({
		id : "circle-box",
		radius : 150,
		color : 'blue'
	});

	circle.get();
	circle.show();

	var triangle = new Triangle({
		id : "circle-box",
		width : 100,
		height : 150,
		color : 'lime'
	});
	triangle.show();
	triangle.setDirection(45);


	/*
	*  end less 2 __________
	* */

	// getTable(50,50);
})();