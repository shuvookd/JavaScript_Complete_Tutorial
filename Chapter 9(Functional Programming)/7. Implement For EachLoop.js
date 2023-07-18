//Implement for Each Loop
var arr = [1, 2, 3, 4, 5];
//With Function
/*
var sum = 0
arr.forEach(function (value, index, arr) {
    console.log(value, index,arr);
    sum += value

})
console.log(sum);
Opuput : 
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]
15
*/

//Without Function

function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

var sum = 0;
forEach(arr, function (value, index, arr) {
  console.log(value, index, arr);
  sum += value;
});

console.log(sum);
/*
Opuput : 
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]
15
*/

// Change Original Array's Value
forEach(arr, function (value, index, arr) {
  arr[index] = value + 5;
});
console.log(arr); //[ 6, 7, 8, 9, 10 ]
