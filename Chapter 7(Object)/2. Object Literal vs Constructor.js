// Object Literal
var obj = {};
console.log(typeof obj); //object
console.log(obj); //{}

obj.x = 10;
console.log(obj); //{ x: 10 }

var point = {
  x: 10,
  y: 20,
};
console.log(point); //{ x: 10, y: 20 }

//Value update in Object
//point.y = 30
console.log(point); //{ x: 10, y: 30 }

//Value add in object
point.z = 30;
console.log(point); //{ x: 10, y: 20, z: 30 }

//Object Constructor
var obj1 = Object();
obj1.a = 10;
console.log(obj1); //{ a: 10 }

var obj2 = new Object();
obj2.b = 20;
console.log(obj2); //{ b: 20 }
