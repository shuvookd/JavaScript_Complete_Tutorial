// Array Declaration
var arr = [1, 2, 3, 4, 5];
console.log(arr);

//Array Index
console.log(arr[0]); //1
console.log(arr[4]); //5

//Array data entry
arr[5] = 10;
console.log(arr); //[ 1, 2, 3, 4, 5, 10 ]

arr[10] = 100;
console.log(arr); //[ 1, 2, 3, 4, 5, 10, <4 empty items>, 100 ]

console.log(arr[7]); //undefined

// Find Array Length
console.log(arr.length); //11

//Array Data Replace
arr[2] = 22;
console.log(arr); //[ 1, 2, 22, 4, 5, 10, <4 empty items>, 100 ]

//Array Constructor
var arr2 = Array(1, 2, 3, 4, 5);
console.log(arr2); //[ 1, 2, 3, 4, 5 ]
