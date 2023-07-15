// Array Methods
var arr1 = [4, 5, 9, 6];
var arr2 = [4, 5, 9, 6];

//join()
console.log(arr1.join(",")); //4,5,9,6

//fill()
console.log(arr1.fill(0)); //[ 0, 0, 0, 0 ]

//Concate()
console.log(arr1.concat(arr2)); //[0, 0, 0, 0,4, 5, 9, 6]

//isArray()
console.log(Array.isArray(arr2)); //true

//from()
var a = [1, 2];
console.log(a); //[1,2]

var b = Array.from(a);
console.log(b); //[1,2]
b[0] = 5;
console.log(b); //[5,2]
console.log(a); //[1,2]
