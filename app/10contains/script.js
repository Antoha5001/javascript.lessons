(function() {

  var d = document,
  first = d.getElementsByClassName('first')[0],
  second = d.getElementsByClassName('second')[0],
  third = d.getElementsByClassName('third')[0],
  cont = first.contains(third),
  tnoc = third.contains(first),
  comp = first.compareDocumentPosition(third);
console.log(cont);
console.log(tnoc);
})();
