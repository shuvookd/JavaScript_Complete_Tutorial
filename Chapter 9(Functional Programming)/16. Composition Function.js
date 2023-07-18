//Composition Function
function print(value) {
  return value;
}
function mulByFive(n) {
  return n * 5;
}
function add(a, b) {
  return a + b;
}
var result = print(mulByFive(add(3, 5)));
console.log(result); //40
