//Map Function
// Make a new Array. Did not change Original Array
var arr = [1, 2, 3];

//With Function
/*
var sqrArr = arr.map(function (value) {
    return value * value
})
console.log(arr);//[ 1, 2, 3 ]
console.log(sqrArr);//[ 1, 4, 9 ]
*/

//Without Function
function myMap(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = cb(arr[i], i, arr);
    newArr.push(temp);
  }
  return newArr;
}

//Make Square Function
var sqr = myMap(arr, function (value) {
  return value * value;
});
console.log(sqr); //[ 1, 4, 9 ]

//Make Cubic Function
var qb = myMap(arr, function (value) {
  return value * value * value;
});
console.log(qb); //[ 1, 8, 27 ]

//Make Array * 10
var mulTen = myMap(arr, function (value) {
  return value * 10;
});
console.log(mulTen); //[ 10, 20, 30 ]
console.log("1" === 1);
