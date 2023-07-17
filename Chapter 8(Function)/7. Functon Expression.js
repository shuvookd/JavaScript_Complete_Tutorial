//Function Expression
// Store function in a variable is called function expression
var addition = function (a, b) {
  return a + b;
};

console.log(addition(10, 10)); //20

var add = addition(5, 7);
console.log(add); //12

/*setTimeout(function () {
    console.log("I will call after 5 seconds")
}, 5000)
*/
