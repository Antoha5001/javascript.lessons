/*var text = "Lorem ipsum dolor sit amet.",
    head = document.documentElement.childNodes[0],
    body = document.body,
    ul = body.children[body.children.length - 2],
    li = ul.children[1],
    lastLi = ul.lastChild,
    table = document.getElementsByTagName("table")[0],
    tr = table.firstElementChild.children;

console.log(head);
console.log(ul);
console.log(li);
console.log(tr);
if(!lastLi.firstChild){
    alert("Элемент пустой!");
}
for(var i = 0; i < tr.length; i++){
    tr[i].children[i].style.backgroundColor = "red";}*/

var about = document.getElementsByTagName("h2")[0],
    widget = document.getElementById("widget"),
    dataWidget = widget.getAttribute("data-widget-name"),
    link = document.getElementsByTagName("a");

for (var i = 0; i < link.length; i++ ){
    var href = link[i].getAttribute("href");
    if(!href) continue;

    if(href.indexOf("://") === -1 || href.indexOf("internal.com") != -1 )continue;

    link[i].classList.add("external");
}