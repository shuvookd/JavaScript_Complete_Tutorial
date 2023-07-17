//Return Something from a function
function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
var result = addAll(1, 2, 3);
console.log(result); //6

function person(name, email) {
  return {
    name: name,
    email: email,
  };
  console.log("I will never be shown");
}
var p1 = person("Shuvo", "shuvokd1210@gmail.com");
console.log(p1); //{ name: 'Shuvo', email: 'shuvokd1210@gmail.com' }
