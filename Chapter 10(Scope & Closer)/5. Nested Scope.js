//Nested Scope
var x = 5;
function test() {
  var x = 10;
  console.log(x);
  function nested() {
    var y = 65;
    console.log(x);
  }
  console.log(y);//Error
  nested();
}
test(); //5
