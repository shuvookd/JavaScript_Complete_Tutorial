//Closure
//Closure is when a function is able to remember and access it's lexical scope when that function executiong outside it's lexical scope

//1. able to remember and access it's lexical scope
//2. whem that function executing outside it's lexical scope

function test() {
  var msg = "I am learning lLexical Scope and Closure";
  function sayMsg() {
    console.log(msg);
  }
  sayMsg();
}
test(); //I am learning lLexical Scope and Closure
