(function () {
	function getTable(a,b) {
		var table = document.createElement('table'),
		tBody = document.createElement('tbody'),
		body = document.body;
		for (var i = 1; i <= a; i++){

			var tr = document.createElement('tr');

			for (var j = 1; j <= b; j++){

				var td = document.createElement('td');
				td.innerHTML = `${i} x ${j} = ${i * j}`;
				tr.appendChild(td);
			}

			table.appendChild(tr);

		}
		body.appendChild(table);
	}
	getTable(10,10);
})();