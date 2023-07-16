// Remove Object Property
var point = {
  a: 10,
  b: 20,
  c: 30,
};
// Use Delete
delete point.a;
console.log(point); //{ b: 20, c: 30 }
