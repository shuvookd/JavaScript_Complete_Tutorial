//Reduce Function
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Find Sum of array
/*
var sum = arr.reduce(function (prev, curr) {
  return prev + curr;
});
console.log(sum); //45

//Find Maximum
var max = arr.reduce(function (prev, curr) {
  return Math.max(prev, curr);
});
console.log(max); //9
*/

//without function
function myReduce(arr, cb, acc) {
  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}
//Find sum
var sum = myReduce(
  arr,
  function (prev, curr) {
    return prev + curr;
  },
  0
);

//Find max
var max = myReduce(
  arr,
  function (prev, curr) {
    return Math.max(prev, curr);
  },
  0
);

//Find min
var min = myReduce(
  arr,
  function (prev, curr) {
    return Math.min(prev, curr);
  },
  arr[0]
);
console.log(sum, max, min); //45, 9, 1
