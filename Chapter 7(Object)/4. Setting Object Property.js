//Setting Object Property
var point = {
  a: 10,
  b: 20,
  c: 30,
};

//Value update in object
point.a = 45;
console.log(point); //{ a: 45, b: 20, c: 30 }

point.x = 50;
console.log(point); //{ a: 45, b: 20, c: 30, x: 50 }

point["b"] = 100;
var prop = "c";
point[prop] = 55;
console.log(point); //{ a: 45, b: 100, c: 55, x: 50 }
