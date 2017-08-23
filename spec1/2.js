"Use strict";
var str = "<h1>Заголовок</h1>";
var str2 = "<h2>Заголовок 2 уровня</h2>"

var div = document.createElement("div");
var div2 = document.createElement("div");
div.innerHTML = str;
div.classList.add("box");
div2.innerHTML = str2;
document.body.appendChild(div);
document.body.appendChild(div2);

function createDiv(width, height, color) {
    var div = document.createElement("div");
    div.style.cssText = "width:"+width+"px;height:"+height+"px;background-color:"+color+";";
    document.body.appendChild(div);
};

function createCircle(min, max, color) {
    var diametr =Math.random()*(max-min)+min;
    var div = document.createElement("div");
    div.style.cssText = "width:"+diametr+"px;height:"+diametr+"px;background-color:"+color+";border-radius:50%;";
    document.body.appendChild(div);
};

createDiv(50,200,"red");
createCircle(50,200,"red");