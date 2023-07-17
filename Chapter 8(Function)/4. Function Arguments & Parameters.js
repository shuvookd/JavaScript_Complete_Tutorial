//Function arguments & Parameters
/*
function functionName(Parameter){
    statement
}
*/
function sum(a, b) {
  var result = a + b;
  console.log(result);
}
sum(10, 5); //10
sum(10, 20); //30

//Find sum from an array by a function
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];
var arr3 = [3, 6, 9, 12, 15];
function findSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

findSum(arr1); //25
findSum(arr2); //30
findSum(arr3); //45
