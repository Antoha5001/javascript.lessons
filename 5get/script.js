
'use strict';
//console.log(document.body);
var elems = document.body.childNodes;
/*
[].forEach.call(elem, function(item,i, arr){
  console.log(item + " : "+ i + " : "+arr);
});*/
//console.log(elems);
elems = Array.prototype.slice.call(elems);
elems.forEach(function(e){
  console.log(e.tagName);
});
//console.log(elems);
