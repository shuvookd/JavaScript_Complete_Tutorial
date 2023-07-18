//Return Function From Another Function
function greet(msg) {
  function greetings(name) {
    return msg + ", " + name + "!";
  }
  return greetings;
}
var gm = greet("Good Morning");
var msg = gm("Shuvo");
console.log(msg); //Good Morning, Shuvo!
