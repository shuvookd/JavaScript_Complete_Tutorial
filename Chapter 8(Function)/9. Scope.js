//Scope
//Access variable from different layer's concept is scope
function test(n) {
  function a() {
    return n % 3 === 0;
  }
  function b() {
    return n % 5 === 0;
  }
  if (a() && b()) {
    console.log(n + " is divisible by both 3 & 5 number");
  } else {
    console.log("Not a valid Number");
  }
}
test(15); //15 is divisible by both 3 & 5 number
