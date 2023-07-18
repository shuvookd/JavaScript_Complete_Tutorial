// Higher Order Function
// 5. We can pass function as argument

function add(a, b) {
  return a + b;
}

function manupulate(a, b, func) {
  var c = a + b;
  var d = a - b;

  function multiply() {
    var m = func(a, b);
    return c * d * m;
  }
  return multiply;
}

var multiply = manupulate(3, 4, add);
console.log(multiply());
