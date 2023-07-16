// Object Method
var obj1 = {
  x: 40,
  y: 60,
  z: 75,
};
console.log(Object.keys(obj1)); //[ 'x', 'y', 'z' ]
console.log(Object.values(obj1)); //[ 40, 60, 75 ]
console.log(Object.entries(obj1)); //[ [ 'x', 40 ], [ 'y', 60 ], [ 'z', 75 ] ]

//Create two same object
// var obj2 = obj1
// obj2.x = 70
// obj2.y = 100
// console.log(obj1)//{ x: 70, y: 100, z: 75 }
// console.log(obj2)//{ x: 70, y: 100, z: 75 }

//Create two different object
var obj2 = Object.assign({}, obj1);
obj2.x = 100;
console.log(obj1); //{ x: 40, y: 60, z: 75 }
console.log(obj2); //{ x: 100, y: 60, z: 75 }
