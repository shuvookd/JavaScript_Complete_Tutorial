//Inner Function
function greeting(greet, name) {
  function firstName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return " ";
    }
  }
  var msg = greet + " " + firstName();
  console.log(msg);
}
greeting("Good Morning", "Shuvo Kumar Das"); //Good Morning Shuvo
