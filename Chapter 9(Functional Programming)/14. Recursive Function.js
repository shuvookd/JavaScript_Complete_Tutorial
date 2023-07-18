//Recursive Function
// A such kind of funtion that called itself

//Print Hi! Shuvo without using for loop
function sayHi(n) {
  if (n === 0) {
    return;
  }
  sayHi(n - 1);
  console.log("Hi! Shuvo");
}
sayHi(5);
/*
Output:
Hi! Shuvo
Hi! Shuvo
Hi! Shuvo
Hi! Shuvo
Hi! Shuvo
*/

//Find sum of n number using recursive function
function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(5)); //15

//Find factorial of n number using recursive function
function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(5)); //120

//Find sum of Array
var arr = [1, 2, 3, 4, 5];
function sumOfArr(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return arr[lastIndex] + sumOfArr(arr, lastIndex - 1);
}
console.log(sumOfArr(arr, arr.length - 1)); //15
