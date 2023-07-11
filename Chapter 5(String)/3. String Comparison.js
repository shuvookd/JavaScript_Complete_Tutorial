// String Comparison
var a = 'abc'
var b = 'bcd'
console.log(a == b) // false
console.log(a > b)  // false
console.log(a < b)  //true

//Laxical Order
// z,y,x...a,Z,Y ,X...A

var compare1 = 'a'
var compare2 = 'A'
console.log(compare1 == compare2)// False
console.log(compare1 < compare2)// False
console.log(compare1 > compare2)// True

console.log('001' == 1) // true