//Pure Function
/*
It returns the same result if given the same arguments.
It does not cause any observable side effects.
*/
function sqr(n) {
  return n * n;
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));
/*This is a pure function because
it does not cause any side effects.
*/

var a = 10;
function change() {
  a = 100;
}
change();
console.log(a);
/*This is not a pure function because
it does cause  side effects that is changes
the value of a.
*/
