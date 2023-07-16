//Accessing Object Properties
var point = {
  a: 10,
  b: 20,
  c: 30,
};
console.log(point.a); //10
console.log(point.b); //20
console.log(point.c); //30

console.log(point.a + point.b); //30

//Object Array Notation
console.log(point["a"]); //10
console.log(point["b"]); //20

var show = "a";
console.log(point[show]);
