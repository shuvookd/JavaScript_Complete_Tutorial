//First Class Function

//1. A Function can be stored in a function
function add(a, b) {
  return a + b;
}
var sum = add;
console.log(sum(4, 5)); //9
console.log(typeof sum); //Function

//2. A function can be stored in array

var arr = [];
arr.push(add);
console.log(arr); //[ [Function: add] ]
console.log(arr[0](11, 22)); //33

//3. Array FUnction can be stored in a Function
var obj = {
  sum: add,
};
console.log(obj); //{ sum: [Function: add] }
console.log(obj.sum(11, 33)); //44

//4. We can create function as we need
setTimeout(function () {
  console.log("I have created...");
}, 1000);
//Output: I have created...

//5. We can pass function as argument

//6. We can return function from Another Function
