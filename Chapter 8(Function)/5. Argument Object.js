//Argument Object
/*
function functionName(Parameter){
    statement
}
functionName(argument)
*/

function test(a, b, c) {
  console.log(arguments);
}
test(); //[Arguments] {}

//Write a function for add all number
function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

addAll(1, 2, 3, 4, 5); //15
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55
